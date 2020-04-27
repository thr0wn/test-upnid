import GameScene from "../scenes/GameScene";

class Car extends Phaser.GameObjects.Sprite {
  private keys: { [key: string]: Phaser.Input.Keyboard.Key };

  constructor(
    scene: Phaser.Scene,
    x: number,
    y: number,
    texture: string,
    frame?: string | integer
  ) {
    super(scene, x, y, texture, frame);

    // input
    this.keys = scene.input.keyboard.addKeys("A,S,D,left,down,right,esc") as {
      [key: string]: Phaser.Input.Keyboard.Key;
    };

    this.scene.add.existing(this);

    const onResize = () => {
      const windowWidth = scene.scale.width;
      const windowHeight = scene.scale.height;

      this.setPosition(
        windowWidth / 2 - windowWidth * 0.02,
        windowHeight * 0.8
      );
      const pixelsPerGameUnit = scene.game.registry.get("pixelsPerGameUnit");
      this.displayWidth = Math.round(200 * pixelsPerGameUnit.x);
      this.displayHeight = Math.round(200 * pixelsPerGameUnit.x);
    };
    onResize();

    this.scene.scale.on("resize", onResize, this);

    this.keys["esc"].on("down", () => {
      const started = this.scene.game.registry.values.started;
      const running = this.scene.game.registry.values.running;
      if (started && running) {
        this.scene.game.registry.set("running", false);
      } else if (started && !running) {
        this.scene.game.registry.set("running", true);
      }
    });
  }

  update(time: number, delta: number): void {
    const running = this.scene.game.registry.values.running;
    const pixelsPerGameUnit = this.scene.game.registry.values.pixelsPerGameUnit;

    if (!running) {
      return;
    }

    const joyStick = (this.scene as GameScene).joyStick;

    if (
      (this.keys["A"].isDown ||
        this.keys["left"].isDown ||
        (joyStick && joyStick.left)) &&
      this.x >= this.displayWidth / 2
    ) {
      this.x -= (500 * pixelsPerGameUnit.x * delta) / 1000;
    }

    if (
      (this.keys["D"].isDown ||
        this.keys["right"].isDown ||
        (joyStick && joyStick.right)) &&
      this.x <= this.scene.scale.width - this.displayWidth / 2
    ) {
      this.x += (500 * pixelsPerGameUnit.x * delta) / 1000;
    }
  }
}

export default Car;
