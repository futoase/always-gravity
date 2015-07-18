class TimerVelocity {

  /**
   * constructor for TimerVelocity.
   *
   * @param {Symbol} enforcer
   */
  constructor(enforcer) {
    if (enforcer !== TIMER_VELOCITY_SINGLETON_ENFORCER) {
      throw new Error('Cannot construct singleton!');
    }
  }

  /**
   * get() is return a instance of TimerVelocity.
   *
   * @return {TimerVelocity}
   */
  static get instance() {
    if (!this[TIMER_VELOCITY_SINGLETON]) {
      this[TIMER_VELOCITY_SINGLETON] = new TimerVelocity(TIMER_VELOCITY_SINGLETON_ENFORCER);
    }
    return this[TIMER_VELOCITY_SINGLETON];
  }

  /**
   * Getter for overTheVelocityCounter.
   *
   * @return {Number} this._overTheVelocityCounter
   */
  get overTheVelocityCounter() {
    if (this._overTheVelocityCounter === undefined) {
      this._overTheVelocityCounter = 0;
    }
    return this._overTheVelocityCounter;
  }

  /**
   * Setter for overTheVelocityCounter.
   *
   * @param {Number} value
   */
  set overTheVelocityCounter(value) {
    this._overTheVelocityCounter = value;
  }

  /**
   * overTheLimitCount() is observe of speed for myunit.
   */
  overTheLimitCount() {
    const context = GameState.current;

    const myUnit = MyUnit.instance;
    const hud = HUD.instance;

    if (hud.velocityBar.counter.current >= GameConfig.setting.LIMIT_VELOCITY) {
      if (context.contains(GameText.slowDownCount)) {
        GameText.slowDownCount = (
          GameConfig.setting.LIMIT_VELOCITY_MAX_COUNT - this.overTheLimitVelocityCounter
        );
      }
      this.overTheLimitVelocityCounter += 1;
    } else {
      this.overTheLimitVelocityCounter = 0;
      GameText.slowDownCount = GameConfig.setting.LIMIT_VELOCITY_MAX_COUNT;
    }

    if (this.overTheLimitVelocityCounter > GameConfig.setting.LIMIT_VELOCITY_MAX_COUNT) {
      myUnit.explosion();
    }
  }

  /**
   * speedLimit() is over the limit of speed when display of slow-down.
   */
  speedLimit() {
    const context = GameState.current;
    const hud = HUD.instance;

    if (hud.velocityBar.counter.current >= GameConfig.setting.LIMIT_VELOCITY * 0.95) {
      GameMusic.soundEffectOfCautionForSpeed.play();
      if (!context.contains(GameText.slowDown)) {
        context.addChild(GameText.slowDown);
      }
      if (!context.contains(GameText.slowDownCount)) {
        context.addChild(GameText.slowDownCount);
      }
    } else {
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
