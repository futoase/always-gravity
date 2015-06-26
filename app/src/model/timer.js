let timerSingleton = Symbol();
let timerSingletonEnforcer = Symbol();

class Timer {
  constructor(enforcer) {
    if (enforcer !== timerSingletonEnforcer) {
      throw "Cannot construct singleton!";
    }
  }

  static get instance() {
    if (!this[timerSingleton]) {
      this[timerSingleton] = new Timer(timerSingletonEnforcer);
    }
    return this[timerSingleton];
  }

  get context() {
    return this._context;
  }

  set context(value) {
    this._context = value;
  }

  setInterval(callback, milliseconds) {
    const context = this.context;

    return context.game.time.clock.setInterval(
      callback, milliseconds, context
    );
  }

  createAllTimer() {
    this.createStarTimer();
    this.createCubeTimer();
    this.createCylinderTimer();
    this.createCircleTimer();
    this.createRhombusTimer();
    this.createCoutionForSpeedSoundEffectTimer();
    this.createOverTheLimitVelocityCountTimer();
  }

  removeAllTimer() {
    const context = this.context;

    const timers = [
      this.starTimer,
      this.cubeTimer,
      this.cylinderTimer,
      this.circleTimer,
      this.rhombusTimer,
      this.coutionSpeedSoundEffectTimer,
      this.overTheLimitVelocityCountTimer
    ];

    timers.forEach((timer) =>
      context.game.time.clock.removeTimer(timer)
    );
  }

  createStarTimer() {
    const context = this.context;

    this.starTimer = this.setInterval(context.spawnSpriteOfStar, 100);
  }

  createCubeTimer() {
    const context = this.context;

    this.cubeTimer = this.setInterval(context.spawnSpriteOfCube, 200);
  }

  createCylinderTimer() {
    const context = this.context;

    this.cylinderTimer = this.setInterval(context.spawnSpriteOfCylinder, 100);
  }

  createCircleTimer() {
    const context = this.context;

    this.circleTimer = this.setInterval(context.spawnSpriteOfCircle, 500);
  }

  createRhombusTimer() {
    const context = this.context;

    this.rhombusTimer = this.setInterval(context.spawnSpriteOfRhombus, 100);
  }

  createCoutionForSpeedSoundEffectTimer() {
    const context = this.context;

    this.coutionForSpeedSoundEffectTimer = (
      this.setInterval(context.speedLimitOfUnit, 500)
    );
  }

  createOverTheLimitVelocityCountTimer() {
    const context = this.context;

    this.overTheLimitVelocityCountTimer = (
      this.setInterval(context.overTheLimitVelocityCount, 1000)
    );
  }
}
