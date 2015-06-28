let timerSpawnObjectsSingleton = Symbol();
let timerSpawnObjectsSingletonEnforcer = Symbol();

class TimerSpawnObjects {
  constructor(enforcer) {
    if (enforcer !== timerSpawnObjectsSingletonEnforcer) {
      throw "Cannot construct singleton!";
    }
  }

  static get instance() {
    if (!this[timerSpawnObjectsSingleton]) {
      this[timerSpawnObjectsSingleton] = new TimerSpawnObjects(timerSpawnObjectsSingletonEnforcer);
    }
    return this[timerSpawnObjectsSingleton];
  }

  get context() {
    return this._context;
  }

  set context(value) {
    this._context = value;
  }

  circle() {
    const context = this.context;

    Helper.strewnSprite(
      Helper.getMember(context.circlePool.members),
      { y: context.game.stage.height },
      { y: 2 },
      (sprite) => {
        this._tweenOfCircle(context, sprite);
      }
    );
  }

  cube() {
    const context = this.context;

    Helper.strewnSprite(
      Helper.getMember(context.cubePool.members),
      { y: context.game.stage.height },
      { y: 5 }
    );
  }

  cylinder() {
    const context = this.context;

    Helper.strewnSprite(
      Helper.getMember(context.cylinderPool.members),
      { y: context.game.stage.height },
      { y: 10 }
    );
  }

  _tweenOfCircle(context, sprite) {
    let tween = context.game.tweens.create(sprite);
    let myUnit = MyUnit.instance;
    myUnit.context = context;

    tween.to(
      { x: myUnit.sprite.x },
      1000,
      Kiwi.Animations.Tweens.Easing.Sinusoidal.Out, true
    );
    tween.start();
  }
}
