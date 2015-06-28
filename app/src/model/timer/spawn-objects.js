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

  star() {
    const context = this.context;

    Helper.strewnSprite(
      Helper.getMember(context.starPool.members),
      { y: context.game.stage.height },
      { y: 3 }
    );
  }

  rhombus() {
    const context = this.context;

    if (context.isSpawnSpriteOfRhombusSplinter === undefined) {
      context.isSpawnSpriteOfRhombusSplinter = false;
    }

    if (parseInt(Math.random() * 100) === 0) {
      context.isSpawnSpriteOfRhombusSplinter = true;
    }

    if (context.isSpawnSpriteOfRhombusSplinter) {
      Helper.strewnSprite(
        Helper.getMember(context.rhombusPool.members),
        { y: context.game.stage.height / 2 - 32 },
        { y: 1 },
        (sprite) => {
          this._scaleUpRhombus(context, sprite);
        },
        { revive: false }
      );
    }
  }

  _scaleUpRhombus(context, sprite) {
    const spriteBottomLeftPoint = (sprite.y + sprite.height);
    const standingPoint = (context.game.stage.height / 2 - sprite.height);
    const maxScale = 5;
    const scaleBase = 0.05;

    if (spriteBottomLeftPoint >= standingPoint) {
      sprite.physics.acceleration.y = 0;
      sprite.physics.velocity.y = 0;

      if (maxScale > sprite.scaleX &&
          maxScale > sprite.scaleY) {
        sprite.scaleX += scaleBase;
        sprite.scaleY += scaleBase;
      }
      else {
        this._explosionRhombus(context, sprite);
        this._scaleDownRhombus(context, sprite);
      }
    }
  }

  _explosionRhombus(context, sprite) {
    const rhombusSplinterMembers = context.rhombusSplinterPool.members;
    const angleBase = parseInt(360 / context.NUMBER_OF_RHOMBUS_SPLINTER);
    let rhombusSplinterAngle = 0;
    let explosionCounter = 0;

    rhombusSplinterMembers.forEach((member) => {
      member.x = sprite.x;
      member.y = sprite.y;

      member.physics.velocity.x = (
        Math.cos(Helper.radian(rhombusSplinterAngle)) * 30
      );
      member.physics.velocity.y = (
        Math.sin(Helper.radian(rhombusSplinterAngle)) * 30
      );

      rhombusSplinterAngle += angleBase;
    });
  }

  _scaleDownRhombus(context, sprite) {
    sprite.scaleX = 1;
    sprite.scaleY = 1;
    Helper.revive(sprite);
    context.isSpawnSpinterOfRhombusSplinter = false;
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
