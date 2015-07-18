class TimerSpawnObjects {

  /**
   * constructor for TimerSpawnObjects.
   *
   * @param {Symbol} enforcer
   */
  constructor(enforcer) {
    if (enforcer !== TIMER_SPAWN_OBJECTS_SINGLETON_ENFORCER) {
      throw new Error('Cannot construct singleton!');
    }
  }

  /**
   * get() is return a instance of TimerSpawnObjects.
   *
   * @return {TimerSpawnObjects}
   */
  static get instance() {
    if (!this[TIMER_SPAWN_OBJECTS_SINGLETON]) {
      this[TIMER_SPAWN_OBJECTS_SINGLETON] = new TimerSpawnObjects(TIMER_SPAWN_OBJECTS_SINGLETON_ENFORCER);
    }
    return this[TIMER_SPAWN_OBJECTS_SINGLETON];
  }

  get spawnRhombus() {
    if (!this[TIMER_SPAWN_RHOMBUS]) {
      this[TIMER_SPAWN_RHOMBUS] = false;
    }
    return this[TIMER_SPAWN_RHOMBUS];
  }

  set spawnRhombus(value) {
    if (typeof value === "boolean"){
      this[TIMER_SPAWN_RHOMBUS] = value;
    }
  }

  get playSeOfSpawnRhombus() {
    if (!this[TIMER_SPAWN_RHOMBUS_PLAY_SE]) {
      this[TIMER_SPAWN_RHOMBUS_PLAY_SE] = false;
    }
    return this[TIMER_SPAWN_RHOMBUS_PLAY_SE];
  }

  set playSeOfSpawnRhombus(value) {
    if (typeof value === "boolean") {
      this[TIMER_SPAWN_RHOMBUS_PLAY_SE] = value;
    }
  }

  /**
   * circle() is spawn object of circle.
   */
  circle() {
    const context = GameState.current;

    Helper.strewnSprite(
      Helper.getMember(GroupPool.circle().members),
      { y: context.game.stage.height },
      { y: 2 },
      (sprite) => {
        this._tweenOfCircle(context, sprite);
      }
    );
  }

  /**
   * cube() is spawn object of cube.
   */
  cube() {
    const context = GameState.current;

    Helper.strewnSprite(
      Helper.getMember(GroupPool.cube().members),
      { y: context.game.stage.height },
      { y: 5 }
    );
  }

  /**
   * cylinder() is spawn object of cylinder.
   */
  cylinder() {
    const context = GameState.current;

    Helper.strewnSprite(
      Helper.getMember(GroupPool.cylinder().members),
      { y: context.game.stage.height },
      { y: 10 }
    );
  }

  /**
   * star() is spawn object of star.
   */
  star() {
    const context = GameState.current;

    Helper.strewnSprite(
      Helper.getMember(GroupPool.star().members),
      { y: context.game.stage.height },
      { y: 3 }
    );
  }

  /**
   * rhombus() is spawn object of rhombus.
   */
  rhombus() {
    const context = GameState.current;

    if (parseInt(Math.random() * 100, 10) === 0) {
      this.spawnRhombus = true;
    }

    if (this.spawnRhombus) {

      if (this.playSeOfSpawnRhombus === false) {
        this.playSeOfSpawnRhombus = true;
        GameMusic.soundEffectOfSpawnRhombus.stop();
        GameMusic.soundEffectOfSpawnRhombus.play();
      }

      Helper.strewnSprite(
        Helper.getMember(GroupPool.rhombus().members),
        { y: context.game.stage.height / 2 - 32 },
        { y: 1 },
        (sprite) => {
          this._scaleUpRhombus(context, sprite);
        },
        { revive: false }
      );

    }
  }

  /**
   * _scaleUpRhombus a scale up of size for rhombus.
   *
   * @param {Kiwi.State} context
   * @param {Kiwi.GameObjects.Sprite} sprite
   */
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
      } else {
        this._explosionRhombus(context, sprite);
        this._scaleDownRhombus(context, sprite);
      }
    }
  }

  /**
   * _explosionRhombus a new create of rhombus.
   *
   * @param {Kiwi.State} context
   * @param {Kiwi.GameObjects.Sprite} sprite
   */
  _explosionRhombus(context, sprite) {
    const rhombusSplinterMembers = GroupPool.rhombusSplinter().members;
    const angleBase = parseInt(360 / GameConfig.setting.NUMBER_OF_RHOMBUS_SPLINTER, 10);
    let rhombusSplinterAngle = 0;

    this.spawnRhombus = false;
    this.playSeOfSpawnRhombus = false;

    GameMusic.soundEffectOfSpawnRhombusSplinter.stop();
    GameMusic.soundEffectOfSpawnRhombusSplinter.play();

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

  /**
   * _scaleDownRhombus a scale down of size for rhombus.
   *
   * @param {Kiwi.State} context
   * @param {Kiwi.GameObjects.Sprite} sprite
   */
  _scaleDownRhombus(context, sprite) {
    sprite.scaleX = 1;
    sprite.scaleY = 1;
    Helper.revive(sprite);
    context.isSpawnSpinterOfRhombusSplinter = false;
  }

  /**
   * _tweenOfCircle is added of tween action to the circle.
   *
   * @param {Kiwi.State} context
   * @param {Kiwi.GameObjects.Sprite} sprite
   */
  _tweenOfCircle(context, sprite) {
    const tween = context.game.tweens.create(sprite);
    const myUnit = MyUnit.instance;

    tween.to(
      { x: myUnit.sprite.x },
      1000,
      Kiwi.Animations.Tweens.Easing.Sinusoidal.Out, true
    );
    tween.start();
  }

}
