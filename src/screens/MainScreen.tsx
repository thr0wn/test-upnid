import React, { useState, useEffect, useCallback } from "react";
import StyledMainScreen, {
  StyledCenteredDiv,
  StyledTopLeftDiv,
} from "./MainScreen.styles";
import Button from "../components/button/Button";
import Text from "../components/text/Text";
import Input from "../components/input/Input";

interface IGameState {
  preloading: true;
  starting: false;
  started: false;
  running: false;
  counter?: number;
}

const MainScreen: React.FC<{ game: Phaser.Game | undefined }> = ({ game }) => {
  const [gameState, setGameState] = useState<IGameState>({
    preloading: true,
    starting: false,
    started: false,
    running: false,
  });
  const [name, setName] = useState("");

  const updateGameState = useCallback(() => {
    setGameState((gameState) => ({
      ...gameState,
      ...(game?.registry.getAll() as IGameState),
    }));
  }, [game]);

  useEffect(() => {
    if (game) {
      updateGameState();
      game.registry.events.on("changedata", () => {
        updateGameState();
      });
    }
  }, [game, updateGameState]);

  const start = () => {
    game?.registry.set("starting", true);
  };

  const resume = () => {
    game?.registry.set("running", true);
  };

  const onChangeName = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setName(evt.target.value);
  };

  return (
    <StyledMainScreen>
      {gameState.preloading && (
        <StyledCenteredDiv>
          <Text>Carregando...</Text>
        </StyledCenteredDiv>
      )}
      {!gameState.preloading && !gameState.starting && !gameState.started && (
        <StyledCenteredDiv>
          <Input placeholder="Nome" onChange={onChangeName} />
          <Button
            title={!name ? "O campo nome é obrigatório" : ""}
            onClick={start}
            disabled={!name}
          >
            Iniciar Corrida
          </Button>
        </StyledCenteredDiv>
      )}
      {name && (gameState.starting || gameState.started) && (
        <StyledTopLeftDiv>
          <Text>{name}</Text>
        </StyledTopLeftDiv>
      )}
      {gameState.starting && (
        <StyledCenteredDiv>
          <Text>{gameState.counter}</Text>
        </StyledCenteredDiv>
      )}
      {gameState.started && !gameState.running && (
        <StyledCenteredDiv>
          <Button onClick={resume}>Continuar</Button>
        </StyledCenteredDiv>
      )}
    </StyledMainScreen>
  );
};

export default MainScreen;
