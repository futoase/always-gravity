let timerVelocitySingleton = Symbol();
let timerVelocitySingletonEnforcer = Symbol();

class TimerVelocity {

  constructor(enforcer) {
    if (enforcer !== timerVelocitySingletonEnforcer) {
      throw "Cannot construct singleton!";
    }
  }

  static get instance() {
    if (!this[timerVelocitySingleton]) {
      this[timerVelocitySingleton] = new TimerVelocity(timerVelocitySingletonEnforcer);
    }
    return this[timerVelocitySingleton];
  }

  get context() {
    return this._context;
  }

  set context(value) {
    this._context = value;
  }

  get overTheVelocityCounter() {
    if (this._overTheVelocityCounter === undefined) {
      this._overTheVelocityCounter = 0;
    }
    return this._overTheVelocityCounter;
  }

  set overTheVelocityCounter(value) {
    this._overTheVelocityCounter = value;
  }

  overTheLimitCount() {
    const context = this.context;

    let myUnit = MyUnit.instance;
    let hud = HUD.instance;

    myUnit.context = context;
    hud.context = context;

    if (hud.velocityBar.counter.current >= context.LIMIT_VELOCITY) {
      if (context.contains(GameText.slowDownCount)) {
        GameText.slowDownCount = (
          context.LIMIT_VELOCITY_MAX_COUNT - this.overTheLimitVelocityCounter
        );
      }
      this.overTheLimitVelocityCounter += 1;
    }
    else {
      this.overTheLimitVelocityCounter = 0;
      GameText.slowDownCount = context.LIMIT_VELOCITY_MAX_COUNT;
    }

    if (this.overTheLimitVelocityCounter > context.LIMIT_VELOCITY_MAX_COUNT) {
      myUnit.explosion();
    }
  }

  speedLimit() {
    const context = this.context;
    let hud = HUD.instance;

    hud.context = context;

    if (hud.velocityBar.counter.current >= context.LIMIT_VELOCITY * 0.95) {
      GameMusic.soundEffectOfCautionForSpeed.play();
      if (!context.contains(GameText.slowDown)) {
        context.addChild(GameText.slowDown);
      }
      if (!context.contains(GameText.slowDownCount)) {
        context.addChild(GameText.slowDownCount);
      }
    }
    else{
      GameMusic.soundEffectOfCautionForSpeed.stop();
      if (context.contains(GameText.slowDown)) {
        context.removeChild(GameText.slowDown);
      }
      if (context.contains(GameText.slowDownCount)) {
        context.removeChild(GameText.slowDownCount);
      }
    }
  }
}
