let myUnitSingleton = Symbol();
let myUnitSingletonEnforcer = Symbol();

class MyUnit {

  constructor(enforcer) {
    if (enforcer !== myUnitSingletonEnforcer) {
      throw "Cannot construct singleton!";
    }
  }

  static get instance() {
    if (!this[myUnitSingleton]) {
      this[myUnitSingleton] = new MyUnit(myUnitSingletonEnforcer);
    }
    return this[myUnitSingleton];
  }

  static initialize() {
    const context = GameState.instance.current;

    context.addChild(MyUnit.instance.create());
  }

  static update() {
    MyUnit.instance.update();
  }

  get sprite() {
    return this._sprite;
  }

  set sprite(value) {
    this._sprite = value;
  }

  get explosionCounter() {
    if (this._explosionCounter === undefined) {
      this._explosionCounter = 0;
    }
    return this._explosionCounter;
  }

  set explosionCounter(value) {
    this._explosionCounter = value;
  }

  create() {
    const context = GameState.instance.current;
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

  overlapOnOther(object) {
    const context = GameState.instance.current;
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

  explosion() {
    const context = GameState.instance.current;

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

  update() {
    if (GameOver.status) {
      return;
    }

    this._watchOfStatusForKeys();
    this._checkPosition();
    this._updateGravity();
  }

  _watchOfStatusForKeys() {
    this._watchOfStatusForRotationKeys();
    this._watchOfStatusForVelocityKey();
  }

  _watchOfStatusForRotationKeys() {
    const context = GameState.instance.current;
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

  _watchOfStatusForVelocityKey() {
    const context = GameState.instance.current;
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

  _checkPosition() {
    const context = GameState.instance.current;
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

  _updateGravity() {
    const context = GameState.instance.current;
    let myUnit = this.sprite;

    if (context.myUnitExplosion !== true) {
      myUnit.physics.acceleration.y += GAME_CONFIG.GRAVITY;
    }
  }

  _prop() {
    let myUnit = this.sprite;

    myUnit.physics.acceleration.x = 0;
    myUnit.physics.acceleration.y = 0;
    myUnit.physics.velocity.x = 0;
    myUnit.physics.velocity.y = 0;
  }

  _createMyUnitSplinter() {
    const context = GameState.instance.current;
    const myUnit = this.sprite;
    let myUnitSplinterMembers = GroupPool.myUnitSplinter().members;
    let angleBase = parseInt(360 / GAME_CONFIG.NUMBER_OF_MYUNIT_SPLINTER);
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

  _remove() {
    const context = GameState.instance.current;
    let myUnit = this.sprite;

    context.removeChild(myUnit);
  }

  _explosionSoundEffect() {
    GameMusic.soundEffectOfMyUnitExplosion.play();
  }

  _startCountUpOfExplosion() {
    const context = GameState.instance.current;

    context.game.time.clock.setInterval(() => {
      if (this.exposionCounter < 2) {
        this.explosionCounter += 1;
      }
      else {
        GameOver.execute(context);
      }
    }, 1000, context);
  }

}
