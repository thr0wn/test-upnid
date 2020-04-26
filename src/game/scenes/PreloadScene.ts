class PreloadScene extends Phaser.Scene {
  constructor() {
    super({
      key: "PreloadScene",
    });
  }

  preload(): void {
    this.load.pack("Pack", "./assets/pack.json", "Pack");
  }

  create(): void {
    this.game.registry.set("preloading", false);
    this.game.scene.start("GameScene");
  }
}

export default PreloadScene;
