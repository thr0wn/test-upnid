import Phaser from "phaser";
import GameScene from "./scenes/GameScene";
import { useEffect, useState } from "react";

const config: Phaser.Types.Core.GameConfig = {
  width: window.innerWidth,
  height: window.innerHeight,
  scale: {
    mode: Phaser.Scale.FIT,
  },
  parent: "game",
  scene: [GameScene],
  input: {
    keyboard: true,
  },
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 300 },
    },
  },
  render: { pixelArt: true },
};

const useGame = () => {
  const [game, setGame] = useState<Phaser.Game>();

  useEffect(() => {
    setGame(new Phaser.Game(config));
  }, []);

  return game;
};

export default useGame;
