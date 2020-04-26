import Phaser from "phaser";
import GameScene from "./scenes/GameScene";
import { useEffect, useState } from "react";
import PreloadScene from "./scenes/PreloadScene";

const config: Phaser.Types.Core.GameConfig = {
  width: window.innerWidth,
  height: window.innerHeight,
  scale: {
    mode: Phaser.Scale.RESIZE,
  },
  parent: "game",
  scene: [PreloadScene, GameScene],
  input: {
    keyboard: true,
  },
  render: { pixelArt: true },
};

const useGame = () => {
  const [game, setGame] = useState<Phaser.Game>();

  useEffect(() => {
    const phaserGame = new Phaser.Game(config);
    phaserGame.registry.set("preloading", true);
    phaserGame.registry.set("starting", false);
    phaserGame.registry.set("started", false);
    phaserGame.registry.set("running", false);
    phaserGame.registry.set("counter", 3);
    const onResize = () => {
        const ratio = window.innerHeight / window.innerWidth;
        phaserGame.registry.set("pixelsPerGameUnit", {
          x: window.innerWidth / 1000,
          y: window.innerWidth / (1000 * ratio),
        });
    };
    onResize();
    phaserGame.scale.on("resize", onResize, phaserGame);
    setGame(phaserGame);
  }, []);

  return game;
};

export default useGame;
