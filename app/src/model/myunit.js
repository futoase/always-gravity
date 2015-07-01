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

  static initialize(context) {
    let myUnit = MyUnit.instance;
    myUnit.context = context;

    context.addChild(myUnit.create());
  }

  static update(context) {
    let myUnit = MyUnit.instance;
    myUnit.context = context;

    myUnit.update();
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
    const context = this.context;
    let myUnit;

    myUnit = new Kiwi.GameObjects.Sprite(
      context, context.textures.myUnit, 400, 300
    );

    myUnit.rotation = -Math.PI * 0.5;
    myUnit.physics = myUnit.components.add(
      new Kiwi.Components.ArcadePhysics(myUnit, myUnit.box)
    );
    myUnit.physics.maxVelocity = context.MAX_SPEED;
    myUnit.physics.drag.x = context.DRAG;
    myUnit.physics.drag.y = context.DRAG;

    this.sprite = myUnit;

    return myUnit;
  }

  overlapOnOther(object) {
    const context = this.context;
    const myUnit = this.sprite;

    let hud = HUD.instance;

    hud.context = context;

    if (!context.contains(myUnit) || context.isGameOver) {
      return;
    }

    let isOverlap = myUnit.physics.overlaps(object);
    let isOverlapOfRhombus = isOverlap && object.name == "rhombus";

    if (isOverlap && context.CURRENT_HITPOINT >= 1) {
      Helper.revive(object);
      context.CURRENT_HITPOINT--;
      hud.hitPointBar.counter.current--;
      GroupPool.explosion(context).addChild(
        Explosion.generate(context, myUnit.x, myUnit.y)
      );
      context.soundEffectOfMyUnitExplosion.play();
    }

    if (isOverlapOfRhombus || context.CURRENT_HITPOINT < 1) {
      context.CURRENT_HITPOINT = 0;
      hud.hitPointBar.counter.current = 0;
      this.explosion();
    }
  }

  explosion() {
    const context = this.context;

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
    const context = this.context;

    if (context.isGameOver) {
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
    const context = this.context;
    let myUnit = this.sprite;

    if (context.myUnitExplosion !== undefined) {
      return;
    }

    if (GameKey.activeLeftKey()) {
      myUnit.physics.angularVelocity = -context.ROTATION_SPEED;
    }
    else if (GameKey.activeRightKey()) {
      myUnit.physics.angularVelocity = context.ROTATION_SPEED;
    }
    else {
      myUnit.physics.angularVelocity = 0;
    }
  }

  _watchOfStatusForVelocityKey() {
    const context = this.context;
    let myUnit = this.sprite;

    if (context.myUnitExplosion !== undefined) {
      return;
    }

    if (GameKey.activeUpKey()) {
      myUnit.physics.acceleration.x = (
        Math.cos(myUnit.rotation) * context.ACCELERATION
      );
      myUnit.physics.acceleration.y = (
        Math.sin(myUnit.rotation) * context.ACCELERATION
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
    const context = this.context;
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
    const context = this.context;
    let myUnit = this.sprite;

    if (context.myUnitExplosion !== true) {
      myUnit.physics.acceleration.y += context.GRAVITY;
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
    const context = this.context;
    const myUnit = this.sprite;
    let myUnitSplinterMembers = GroupPool.myUnitSplinter(context).members;
    let angleBase = parseInt(360 / context.NUMBER_OF_MYUNIT_SPLINTER);
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
    const context = this.context;
    let myUnit = this.sprite;

    context.removeChild(myUnit);
  }

  _explosionSoundEffect() {
    const context = this.context;

    context.soundEffectOfMyUnitExplosion.play();
  }

  _startCountUpOfExplosion() {
    const context = this.context;

    context.game.time.clock.setInterval(() => {
      if (this.exposionCounter < 2) {
        this.explosionCounter += 1;
      }
      else {
        context.gameOver();
      }
    }, 1000, context);
  }
}
