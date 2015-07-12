let myUnitSingleton = Symbol();
let myUnitSingletonEnforcer = Symbol();

class MyUnit {

  /**
   * constructor for MyUnit.
   *
   * @param {Symbol} enforcer
   */
  constructor(enforcer) {
    if (enforcer !== myUnitSingletonEnforcer) {
      throw "Cannot construct singleton!";
    }
  }

  /**
   * get() is return a instance of MyUnit.
   *
   * @return {MyUnit}
   */
  static get instance() {
    if (!this[myUnitSingleton]) {
      this[myUnitSingleton] = new MyUnit(myUnitSingletonEnforcer);
    }
    return this[myUnitSingleton];
  }

  /**
   * initialize() is setting the MyUnit for current state.
   */
  static initialize() {
    const context = GameState.current;

    context.addChild(MyUnit.instance.create());
  }

  /**
   * update() is call update method of MyUnit.
   */
  static update() {
    MyUnit.instance.update();
  }

  /**
   * Getter of Sprite for MyUnit.
   *
   * @return {Kiwi.GameObjects.Sprite}
   */
  get sprite() {
    return this._sprite;
  }

  /**
   * Getter of Sprite for MyUnit.
   *
   * @param {Kiwi.GameObjects.Sprite} value
   */
  set sprite(value) {
    this._sprite = value;
  }

  /**
   * Getter of counter for Explosion.
   *
   * @return {Number}
   */
  get explosionCounter() {
    if (this._explosionCounter === undefined) {
      this._explosionCounter = 0;
    }
    return this._explosionCounter;
  }

  /**
   * Setter of counter for Explosion.
   *
   * @param {Number} value
   */
  set explosionCounter(value) {
    this._explosionCounter = value;
  }

  /**
   * create() is return a new sprite of MyUnit.
   *
   * @return {Kiwi.GameObjects.Sprite} MyUnit
   */
  create() {
    const context = GameState.current;
    let myUnit;

    myUnit = new Kiwi.GameObjects.Sprite(
      context, context.textures.myUnit, 400, 300
    );

    myUnit.rotation = -Math.PI * 0.5;
    myUnit.physics = myUnit.components.add(
      new Kiwi.Components.ArcadePhysics(myUnit, myUnit.box)
    );
    myUnit.physics.maxVelocity = GAME_CONFIG.MAX_SPEED;
    myUnit.physics.drag.x = GAME_CONFIG.DRAG;
    myUnit.physics.drag.y = GAME_CONFIG.DRAG;

    this.sprite = myUnit;

    return myUnit;
  }

  /**
   * overlapOnOther() is observe of collision for sprite onto MyUnit.
   *
   * @param {Kiwi.GameObjects.Sprite} object
   */
  overlapOnOther(object) {
    const context = GameState.current;
    const myUnit = this.sprite;

    let hud = HUD.instance;

    if (!context.contains(myUnit) || context.isGameOver) {
      return;
    }

    let isOverlap = myUnit.physics.overlaps(object);
    let isOverlapOfRhombus = isOverlap && object.name == "rhombus";

    if (isOverlap && GAME_COUNTER.hitPoint >= 1) {
      Helper.revive(object);
      GAME_COUNTER.hitPoint--;
      hud.hitPointBar.counter.current--;
      GroupPool.explosion().addChild(
        Explosion.generate(myUnit.x, myUnit.y)
      );
      GameMusic.soundEffectOfMyUnitExplosion.play();
    }

    if (isOverlapOfRhombus || GAME_COUNTER.hitPoint < 1) {
      GAME_COUNTER.hitPoint = 0;
      hud.hitPointBar.counter.current = 0;
      this.explosion();
    }
  }

  /**
   * explosion() is explode the MyUnit.
   */
  explosion() {
    const context = GameState.current;

    if (context.myUnitExplosion === undefined) {
      context.myUnitExplosion = true;
    }
    else {
      return;
    }

    this._prop();
    this._createMyUnitSplinter();
    this._remove();
    this._explosionSoundEffect();
    this._startCountUpOfExplosion();
  }

  /**
   * update() is update of method for MyUnit.
   */
  update() {
    if (GameOver.status) {
      return;
    }

    this._watchOfStatusForKeys();
    this._checkPosition();
    this._updateGravity();
  }

  /**
   * _watchOfStatusForKeys() is observe of status for keys.
   */
  _watchOfStatusForKeys() {
    this._watchOfStatusForRotationKeys();
    this._watchOfStatusForVelocityKey();
  }

  /**
   * _watchOfStatusForRotationKeys() is update of rotation for the MyUnit.
   */
  _watchOfStatusForRotationKeys() {
    const context = GameState.current;
    let myUnit = this.sprite;

    if (context.myUnitExplosion !== undefined) {
      return;
    }

    if (GameKey.activeLeftKey()) {
      myUnit.physics.angularVelocity = -GAME_CONFIG.ROTATION_SPEED;
    }
    else if (GameKey.activeRightKey()) {
      myUnit.physics.angularVelocity = GAME_CONFIG.ROTATION_SPEED;
    }
    else {
      myUnit.physics.angularVelocity = 0;
    }
  }

  /**
   * _watchOfStatusForRotationKeys() is update of velocity for the MyUnit.
   */
  _watchOfStatusForVelocityKey() {
    const context = GameState.current;
    let myUnit = this.sprite;

    if (context.myUnitExplosion !== undefined) {
      return;
    }

    if (GameKey.activeUpKey()) {
      myUnit.physics.acceleration.x = (
        Math.cos(myUnit.rotation) * GAME_CONFIG.ACCELERATION
      );
      myUnit.physics.acceleration.y = (
        Math.sin(myUnit.rotation) * GAME_CONFIG.ACCELERATION
      );
      // Change sprite 'Engine on'.
      myUnit.cellIndex = 1;
    }
    else {
      myUnit.physics.acceleration.setTo(0, 0);

      // Change sprite 'Engine off'.
      myUnit.cellIndex = 0;
    }
  }

  /**
   * checkPosition() is watching of current position for MyUnit.
   * if over limit of position on stage, then initialize the position of MyUnit.
   */
  _checkPosition() {
    const context = GameState.current;
    const stageWidth = context.game.stage.width;
    const stageHeight = context.game.stage.height;
    let myUnit = this.sprite;

    if (myUnit.x > stageWidth) {
      myUnit.x = 0;
    }
    if (myUnit.x < 0) {
      myUnit.x = stageWidth;
    }
    if (myUnit.y > stageHeight) {
      myUnit.y = 0;
    }
    if (myUnit.y < 0) {
      myUnit.y = stageHeight;
    }
  }

  /**
   * _updateGravity() is each time the update acceleration of MyUnit.
   */
  _updateGravity() {
    const context = GameState.current;
    let myUnit = this.sprite;

    if (context.myUnitExplosion !== true) {
      myUnit.physics.acceleration.y += GAME_CONFIG.GRAVITY;
    }
  }

  /**
   * _prop() is initialize position of MyUnit.
   */
  _prop() {
    let myUnit = this.sprite;

    myUnit.physics.acceleration.x = 0;
    myUnit.physics.acceleration.y = 0;
    myUnit.physics.velocity.x = 0;
    myUnit.physics.velocity.y = 0;
  }

  /**
   * _createMyUnitSplinter() is create the new sprite of MyUnitSplinter.
   */
  _createMyUnitSplinter() {
    const context = GameState.current;
    const myUnit = this.sprite;
    let myUnitSplinterMembers = GroupPool.myUnitSplinter().members;
    let angleBase = Number(360 / GAME_CONFIG.NUMBER_OF_MYUNIT_SPLINTER);
    let myUnitSplinterAngle = 0;

    myUnitSplinterMembers.forEach((splinterMember) => {
      splinterMember.x = myUnit.x;
      splinterMember.y = myUnit.y;
      splinterMember.physics.velocity.x = (
        Math.cos(Helper.radian(myUnitSplinterAngle)) * 40
      );
      splinterMember.physics.velocity.y = (
        Math.sin(Helper.radian(myUnitSplinterAngle)) * 40
      );

      splinterMember.animation.play('explosion');
      myUnitSplinterAngle += angleBase;
    });
  }

  /**
   * _remove() is remove of MyUnit from the stage.
   */
  _remove() {
    const context = GameState.current;
    let myUnit = this.sprite;

    context.removeChild(myUnit);
  }

  /**
   * _explosionSoundEffect() is play of sound effect for explosion.
   */
  _explosionSoundEffect() {
    GameMusic.soundEffectOfMyUnitExplosion.play();
  }

  /**
   * _startCountUpOfExplosion() is create animation ticker of explosion.
   */
  _startCountUpOfExplosion() {
    const context = GameState.current;

    context.game.time.clock.setInterval(() => {
      if (this.exposionCounter < 2) {
        this.explosionCounter += 1;
      }
      else {
        GameOver.execute();
      }
    }, 1000, context);
  }

}
