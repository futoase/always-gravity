class Timer {

  /**
   * constructor for Timer.
   *
   * @param {Symbol} enforcer
   */
  constructor(enforcer) {
    if (enforcer !== TIMER_SINGLETON_ENFORCER) {
      throw new Error('Cannot construct singleton!');
    }
  }

  /**
   * get() is return a instance of Timer.
   *
   * @return {Timer}
   */
  static get instance() {
    if (!this[TIMER_SINGLETON]) {
      this[TIMER_SINGLETON] = new Timer(TIMER_SINGLETON_ENFORCER);
    }
    return this[TIMER_SINGLETON];
  }

  /**
   * initialize() is initialize of all timer for game.
   */
  static initialize() {
    Timer.instance.createAllTimer();
  }

  /**
   * destroy() is destroy of all timer for game.
   */
  static destroy() {
    Timer.instance.removeAllTimer();
  }

  /**
   * setInterval() is wrap method of game.time.clock.setInterval.
   *
   * @return {Kiwi.Time.Timer}
   */
  setInterval(callback, milliseconds) {
    const context = GameState.current;

    return context.game.time.clock.setInterval(
      callback, milliseconds, context
    );
  }

  /**
   * createAllTimer() is call of methods the create of all timer for game.
   */
  createAllTimer() {
    this.createStarTimer();
    this.createCubeTimer();
    this.createCylinderTimer();
    this.createCircleTimer();
    this.createRhombusTimer();
    this.createCoutionForSpeedSoundEffectTimer();
    this.createOverTheLimitVelocityCountTimer();
  }

  /**
   * removeAllTimer() is call of methods the remove of all timer for game.
   */
  removeAllTimer() {
    const context = GameState.current;

    const timers = [
      this.starTimer,
      this.cubeTimer,
      this.cylinderTimer,
      this.circleTimer,
      this.rhombusTimer,
      this.coutionSpeedSoundEffectTimer,
      this.overTheLimitVelocityCountTimer,
    ];

    timers.forEach((timer) => {
      context.game.time.clock.removeTimer(timer);
    });
  }

  /**
   * createStarTimer() is create of new timer for star.
   */
  createStarTimer() {
    this.starTimer = this.setInterval(() => {
      TimerSpawnObjects.instance.star();
    }, 100);
  }

  /**
   * createCubeTimer() is create of new timer for cube.
   */
  createCubeTimer() {
    this.cubeTimer = this.setInterval(() => {
      TimerSpawnObjects.instance.cube();
    }, 200);
  }

  /**
   * createCylinderTimer() is create of new timer for cylinder.
   */
  createCylinderTimer() {
    this.cylinderTimer = this.setInterval(() => {
      TimerSpawnObjects.instance.cylinder();
    }, 100);
  }

  /**
   * createCircleTimer() is create of new timer for circle.
   */
  createCircleTimer() {
    this.circleTimer = this.setInterval(() => {
      TimerSpawnObjects.instance.circle();
    }, 500);
  }

  /**
   * createRhombusTimer() is create of new timer for rhombus.
   */
  createRhombusTimer() {
    this.rhombusTimer = this.setInterval(() => {
      TimerSpawnObjects.instance.rhombus();
    }, 100);
  }

  /**
   * createCoutionForSpeedSoundEffectTimer()
   * is create of new timer for sound effect of caution.
   */
  createCoutionForSpeedSoundEffectTimer() {
    this.coutionForSpeedSoundEffectTimer = (
      this.setInterval(() => {
        TimerVelocity.instance.speedLimit();
      }, 500)
    );
  }

  /**
   * createOverTheLimitVelocityCountTimer()
   * is create of new timer for sound effect of over the limit the velocity.
   */
  createOverTheLimitVelocityCountTimer() {
    this.overTheLimitVelocityCountTimer = (
      this.setInterval(() => {
        TimerVelocity.instance.overTheLimitCount();
      }, 1000)
    );
  }

}
