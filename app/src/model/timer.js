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

  static initialize() {
    Timer.instance.createAllTimer();
  }

  static destroy() {
    Timer.instance.removeAllTimer();
  }

  setInterval(callback, milliseconds) {
    const context = GameState.current;

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
    const context = GameState.current;

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
    this.starTimer = this.setInterval(() => {
      TimerSpawnObjects.instance.star();
    }, 100);
  }

  createCubeTimer() {
    this.cubeTimer = this.setInterval(() => {
      TimerSpawnObjects.instance.cube();
    }, 200);
  }

  createCylinderTimer() {
    this.cylinderTimer = this.setInterval(() => {
      TimerSpawnObjects.instance.cylinder();
    }, 100);
  }

  createCircleTimer() {
    this.circleTimer = this.setInterval(() => {
      TimerSpawnObjects.instance.circle();
    }, 500);
  }

  createRhombusTimer() {
    this.rhombusTimer = this.setInterval(() => {
      TimerSpawnObjects.instance.rhombus();
    }, 100);
  }

  createCoutionForSpeedSoundEffectTimer() {
    this.coutionForSpeedSoundEffectTimer = (
      this.setInterval(() => {
        TimerVelocity.instance.speedLimit();
      }, 500)
    );
  }

  createOverTheLimitVelocityCountTimer() {
    this.overTheLimitVelocityCountTimer = (
      this.setInterval(() => {
        TimerVelocity.instance.overTheLimitCount()
      }, 1000)
    );
  }

}
