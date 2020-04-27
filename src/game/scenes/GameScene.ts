import VirtualJoystick from "phaser3-rex-plugins/plugins/input/virtualjoystick/VirtualJoyStick";
import Car from "../objects/Car";

class GameScene extends Phaser.Scene {
  car: Phaser.GameObjects.Sprite | undefined;
  background: Phaser.GameObjects.Sprite | undefined;
  joyStick: any;

  constructor() {
    super({
      key: "GameScene",
    });
  }

  create(): void {
    this.anims.create({
      key: "road-background",
      frames: this.anims.generateFrameNumbers("road", {
        start: 0,
        end: 1,
      }),
      frameRate: 6,
      repeat: 0,
    });
    this.background = this.add.sprite(
      this.game.scale.width / 2,
      this.game.scale.height / 2,
      "road"
    );

    const onResize = () => {
      if (!this.background) {
        return;
      }

      const width = this.game.scale.width;
      const height = this.game.scale.height;

      this.background.displayWidth = width;
      this.background.displayHeight = height;
      this.background.setPosition(width / 2, height / 2);
    };
    onResize();

    this.car = new Car(this, 0, 0, "car");

    this.scale.on("resize", onResize, this);

    this.game.input.keyboard.enabled = false;
    this.registry.events.on(
      "changedata",
      (parent: any, key: string, value: boolean) => {
        if (key === "starting" && value) {
          const intialCounterValue = this.game.registry.values.counter;
          let counter = intialCounterValue;
          const id = setInterval(() => {
            counter -= 1;
            if (counter === 0) {
              this.registry.set("starting", false);
              this.registry.set("started", true);
              this.registry.set("running", true);
              this.registry.set("counter", intialCounterValue);
              if (!this.sys.game.device.os.desktop) {
                this.addJoyStick();
              } else {
                this.game.input.keyboard.enabled = true;
              }
              clearInterval(id);
            } else {
              this.registry.set("counter", counter);
            }
          }, 1000);
        }
      }
    );
  }

  addJoyStick() {
    this.joyStick = new VirtualJoystick(this, {
      x: this.scale.width / 2,
      y: this.scale.height - 40,
      radius: 30,
      base: this.add.circle(0, 0, 25, 0x888887),
      thumb: this.add.circle(0, 0, 12, 0xcccccc),
      dir: "left&right",
    });
  }

  update(time: number, delta: number): void {
    const gameState = this.game.registry.values;
    if (gameState.started && gameState.running) {
      this.background?.anims.play("road-background", true);
    }

    this.car?.update(time, delta);
  }
}

export default GameScene;
