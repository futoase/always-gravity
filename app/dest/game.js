'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Helper = (function () {
  function Helper() {
    _classCallCheck(this, Helper);
  }

  _createClass(Helper, null, [{
    key: 'getMember',
    value: function getMember(members) {
      return members[parseInt(Math.random() * (members.length - 1))];
    }
  }, {
    key: 'strewnSprite',
    value: function strewnSprite(sprite, limit, acceleration, cb, option) {
      if (acceleration === null || acceleration === undefined) {
        return;
      }

      var isRevive = undefined;

      if (option !== null && option !== undefined) {
        isRevive = option.revive;
      } else {
        isRevive = true;
      }

      if (sprite.y < limit.y) {
        sprite.physics.acceleration.y += acceleration.y;
      } else {
        if (isRevive) {
          Helper.revive(sprite);
        }
      }

      if (typeof cb === 'function') {
        cb(sprite);
      }
    }
  }, {
    key: 'revive',
    value: function revive(sprite) {
      sprite.y = -sprite.height;
      sprite.x = parseInt(Math.random() * 800);
      sprite.physics.velocity.y = 0;
      sprite.physics.acceleration.y = 0;
      sprite.alive = true;
    }
  }, {
    key: 'checkSpritePosition',
    value: function checkSpritePosition(sprite) {
      if (sprite.x > this.game.stage.width || sprite.y > this.game.stage.height || sprite.x < 0 || sprite.y < 0) {
        sprite.alive = false;
      }
    }
  }, {
    key: 'updateSpriteRotation',
    value: function updateSpriteRotation(sprite, rotate) {
      if (rotate === null) {
        rotate = 1;
      }
      sprite.transform.rotation += Kiwi.Utils.GameMath.degreesToRadians(rotate);
    }
  }, {
    key: 'radian',
    value: function radian(angle) {
      return parseInt(angle) * Math.PI / 180;
    }
  }]);

  return Helper;
})();

var gameOptions = {
  width: 800,
  height: 600
};
var gameContainerID = 'game-container';
var nameOfGame = 'Always Glavity';
var titleStageColor = '010101';
var stageColor = '010101';

var titleState = new Kiwi.State('Title');
var playState = new Kiwi.State('Play');

var BulletGenerator = (function () {
  function BulletGenerator() {
    _classCallCheck(this, BulletGenerator);
  }

  _createClass(BulletGenerator, null, [{
    key: 'create',
    value: function create(context, index) {
      var bullet = new Kiwi.GameObjects.Sprite(context, context.textures.bullet, -100, -100);
      bullet.hitbox = new Kiwi.Geom.Rectangle(8, 8, 8, 8);
      bullet.anchorPointX = bullet.width * 0.5;
      bullet.anchorPointY = bullet.height * 0.5;
      bullet.physics = bullet.components.add(new Kiwi.Components.ArcadePhysics(bullet, bullet.box));
      bullet.alive = false;
      bullet.index = index;

      return bullet;
    }
  }]);

  return BulletGenerator;
})();

var CircleGenerator = (function () {
  function CircleGenerator() {
    _classCallCheck(this, CircleGenerator);
  }

  _createClass(CircleGenerator, null, [{
    key: 'create',
    value: function create(context, index) {
      var circle = new Kiwi.GameObjects.Sprite(context, context.textures.circle, -100, -100);
      circle.hitbox = new Kiwi.Geom.Rectangle(10, 0, 18, 18);
      circle.anchorPointX = circle.width * 0.5;
      circle.anchorPointY = circle.height * 0.5;
      circle.physics = circle.components.add(new Kiwi.Components.ArcadePhysics(circle, circle.box));
      circle.x = parseInt(Math.random() * 800);
      circle.index = index;
      circle.score = 500;

      return circle;
    }
  }]);

  return CircleGenerator;
})();

var CubeGenerator = (function () {
  function CubeGenerator() {
    _classCallCheck(this, CubeGenerator);
  }

  _createClass(CubeGenerator, null, [{
    key: 'create',
    value: function create(context, index) {
      var cube = new Kiwi.GameObjects.Sprite(context, context.textures.cube, -100, -100);
      cube.hitbox = new Kiwi.Geom.Rectangle(10, 0, 20, 20);
      cube.anchorPointX = cube.width * 0.5;
      cube.anchorPointY = cube.height * 0.5;
      cube.physics = cube.components.add(new Kiwi.Components.ArcadePhysics(cube, cube.box));
      cube.x = parseInt(Math.random() * 800);
      cube.index = index;
      cube.score = 100;

      return cube;
    }
  }]);

  return CubeGenerator;
})();

var CylinderGenerator = (function () {
  function CylinderGenerator() {
    _classCallCheck(this, CylinderGenerator);
  }

  _createClass(CylinderGenerator, null, [{
    key: 'create',
    value: function create(context, index) {
      var cylinder = new Kiwi.GameObjects.Sprite(context, context.textures.cylinder, -100, -100);
      cylinder.animation.add('cycle', [0, 1, 2, 3, 4, 5, 6, 7], 0.1, true);
      cylinder.animation.play('cycle');
      cylinder.hitbox = new Kiwi.Geom.Rectangle(0, 10, 30, 110);
      cylinder.anchorPointX = cylinder.x * 0.5;
      cylinder.anchorPointY = cylinder.y * 0.5;
      cylinder.physics = cylinder.components.add(new Kiwi.Components.ArcadePhysics(cylinder, cylinder.box));
      cylinder.x = parseInt(Math.random() * 800);
      cylinder.y = -cylinder.height;
      cylinder.index = index;
      cylinder.score = 200;

      return cylinder;
    }
  }]);

  return CylinderGenerator;
})();

var MyUnitSplinterGenerator = (function () {
  function MyUnitSplinterGenerator() {
    _classCallCheck(this, MyUnitSplinterGenerator);
  }

  _createClass(MyUnitSplinterGenerator, null, [{
    key: 'create',
    value: function create(context, index) {
      var myUnitSplinter = new Kiwi.GameObjects.Sprite(context, context.textures.myUnitSplinter, -100, -100);
      myUnitSplinter.animation.add('explosion', [0, 1, 2, 3, 4, 5], 0.05, true);
      myUnitSplinter.physics = myUnitSplinter.components.add(new Kiwi.Components.ArcadePhysics(myUnitSplinter, myUnitSplinter.box));
      myUnitSplinter.index = index;

      return myUnitSplinter;
    }
  }]);

  return MyUnitSplinterGenerator;
})();

var RhombusSplinterGenerator = (function () {
  function RhombusSplinterGenerator() {
    _classCallCheck(this, RhombusSplinterGenerator);
  }

  _createClass(RhombusSplinterGenerator, null, [{
    key: 'create',
    value: function create(context, index) {
      var rhombusSplinter = new Kiwi.GameObjects.Sprite(context, context.textures.rhombus, -100, -100);
      rhombusSplinter.physics = rhombusSplinter.components.add(new Kiwi.Components.ArcadePhysics(rhombusSplinter, rhombusSplinter.ox));
      rhombusSplinter.index = index;

      return rhombusSplinter;
    }
  }]);

  return RhombusSplinterGenerator;
})();

var RhombusGenerator = (function () {
  function RhombusGenerator() {
    _classCallCheck(this, RhombusGenerator);
  }

  _createClass(RhombusGenerator, null, [{
    key: 'create',
    value: function create(context, index) {
      var rhombus = new Kiwi.GameObjects.Sprite(context, context.textures.rhombus, -100, -100);
      rhombus.physics = rhombus.components.add(new Kiwi.Components.ArcadePhysics(rhombus, rhombus.box));
      rhombus.x = context.game.stage.width / 2 - rhombus.width;
      rhombus.y = -rhombus.height;
      rhombus.index = index;

      return rhombus;
    }
  }]);

  return RhombusGenerator;
})();

var StarGenerator = (function () {
  function StarGenerator() {
    _classCallCheck(this, StarGenerator);
  }

  _createClass(StarGenerator, null, [{
    key: 'create',
    value: function create(context, index) {
      var star = new Kiwi.GameObjects.Sprite(context, context.textures.star, -100, -100);
      star.anchorPointX = star.width * 0.5;
      star.anchorPointY = star.height * 0.5;
      star.physics = star.components.add(new Kiwi.Components.ArcadePhysics(star, star.box));
      star.physics.acceleration.y = 1;
      star.x = parseInt(Math.random() * 800);
      if (index < parseInt(context.NUMBER_OF_STAR / 3)) {
        star.y = parseInt(Math.random() * 600);
      } else {
        star.y = -1 * parseInt(Math.random() * 200);
      }
      star.index = index;

      return star;
    }
  }]);

  return StarGenerator;
})();

var Explosion = (function () {
  function Explosion() {
    _classCallCheck(this, Explosion);
  }

  _createClass(Explosion, null, [{
    key: 'generate',
    value: function generate(context, baseX, baseY) {
      var explosion = new Kiwi.GameObjects.Sprite(context, context.textures.explosion, baseX, baseY);

      explosion.x = parseInt(baseX - explosion.width * 0.5);
      explosion.y = parseInt(baseY - explosion.height * 0.5);

      explosion.animation.add('explosion', [0, 1, 2, 3], 0.1, true);
      explosion.animation.play('explosion');

      return explosion;
    }
  }, {
    key: 'isLastOfCellIndex',
    value: function isLastOfCellIndex(sprite) {
      if (sprite.cellIndex >= 3) {
        sprite.destroy();
      }
    }
  }]);

  return Explosion;
})();

var hudSingleton = Symbol();
var hudSingletonEnforcer = Symbol();

var HUD = (function () {
  function HUD(enforcer) {
    _classCallCheck(this, HUD);

    if (enforcer !== hudSingletonEnforcer) {
      throw 'Cannot construct singleton!';
    }
  }

  _createClass(HUD, [{
    key: 'createVelocityBar',
    value: function createVelocityBar() {
      if (this._velocityBar) {
        return this._velocityBar;
      }

      var context = this.context;

      var hud = new Kiwi.HUD.Widget.Bar(context.game, 0, context.LIMIT_VELOCITY, 50, 15, 700, 15, 'white');

      this._velocityBar = hud;

      return hud;
    }
  }, {
    key: 'createHitPointBar',
    value: function createHitPointBar() {
      if (this._hitPointBar) {
        return this._hitPointBar;
      }

      var context = this.context;

      var hud = new Kiwi.HUD.Widget.Bar(context.game, context.CURRENT_HITPOINT, context.LIMIT_HITPOINT, 50, 40, 700, 15, '#A9D0F5');

      this._hitPointBar = hud;

      return hud;
    }
  }, {
    key: 'createGameScoreCounter',
    value: function createGameScoreCounter() {
      if (this._gameScoreCounter) {
        return this._gameScoreCounter;
      }

      var context = this.context;

      var hud = new Kiwi.HUD.Widget.TextField(context.game, '', 50, 60);

      hud.prefix = 'SCORE: ';
      hud.style.color = 'white';
      hud.style['font-size'] = '24px';
      hud.text = context.gameScoreCounter;

      this._gameScoreCounter = hud;

      return hud;
    }
  }, {
    key: 'update',
    value: function update() {
      var context = this.context;
      var myUnit = MyUnit.instance;
      myUnit.context = context;

      var currentVelocityX = Math.abs(myUnit.sprite.physics.velocity.x);
      var currentVelocityY = Math.abs(myUnit.sprite.physics.velocity.y);

      this.velocityBar = currentVelocityX + currentVelocityY;

      this.gameScoreCounter = context.gameScoreCounter;
    }
  }, {
    key: 'context',
    set: function set(value) {
      this._context = value;
    },
    get: function get() {
      return this._context;
    }
  }, {
    key: 'velocityBar',
    get: function get() {
      return this._velocityBar;
    },
    set: function set(value) {
      if (this._velocityBar) {
        this._velocityBar.counter.current = value;
      }
    }
  }, {
    key: 'hitPointBar',
    get: function get() {
      return this._hitPointBar;
    }
  }, {
    key: 'gameScoreCounter',
    get: function get() {
      return this._gameScoreCounter;
    },
    set: function set(value) {
      if (this._gameScoreCounter) {
        this._gameScoreCounter.text = value;
      }
    }
  }], [{
    key: 'instance',
    get: function get() {
      if (!this[hudSingleton]) {
        this[hudSingleton] = new HUD(hudSingletonEnforcer);
      }
      return this[hudSingleton];
    }
  }]);

  return HUD;
})();

var myUnitSingleton = Symbol();
var myUnitSingletonEnforcer = Symbol();

var MyUnit = (function () {
  function MyUnit(enforcer) {
    _classCallCheck(this, MyUnit);

    if (enforcer !== myUnitSingletonEnforcer) {
      throw 'Cannot construct singleton!';
    }
  }

  _createClass(MyUnit, [{
    key: 'create',
    value: function create() {
      var context = this.context;
      var myUnit = undefined;

      myUnit = new Kiwi.GameObjects.Sprite(context, context.textures.myUnit, 400, 300);

      myUnit.rotation = -Math.PI * 0.5;
      myUnit.physics = myUnit.components.add(new Kiwi.Components.ArcadePhysics(myUnit, myUnit.box));
      myUnit.physics.maxVelocity = context.MAX_SPEED;
      myUnit.physics.drag.x = context.DRAG;
      myUnit.physics.drag.y = context.DRAG;

      this.sprite = myUnit;

      return myUnit;
    }
  }, {
    key: 'overlapOnOther',
    value: function overlapOnOther(object) {
      var context = this.context;
      var myUnit = this.sprite;

      var hud = HUD.instance;

      hud.context = context;

      if (!context.contains(myUnit) || context.isGameOver) {
        return;
      }

      var isOverlap = myUnit.physics.overlaps(object);
      var isOverlapOfRhombus = isOverlap && object.name == 'rhombus';

      if (isOverlap && context.CURRENT_HITPOINT >= 1) {
        Helper.revive(object);
        context.CURRENT_HITPOINT--;
        hud.hitPointBar.counter.current--;
        context.explosionPool.addChild(Explosion.generate(context, myUnit.x, myUnit.y));
        context.soundEffectOfMyUnitExplosion.play();
      }

      if (isOverlapOfRhombus || context.CURRENT_HITPOINT < 1) {
        context.CURRENT_HITPOINT = 0;
        hud.hitPointBar.counter.current = 0;
        this.explosion();
      }
    }
  }, {
    key: 'explosion',
    value: function explosion() {
      var context = this.context;

      if (context.myUnitExplosion === undefined) {
        context.myUnitExplosion = true;
      } else {
        return;
      }

      this._prop();
      this._createMyUnitSplinter();
      this._remove();
      this._explosionSoundEffect();
      this._startCountUpOfExplosion();
    }
  }, {
    key: 'update',
    value: function update() {
      var context = this.context;

      if (context.isGameOver) {
        return;
      }

      this._watchOfStatusForKeys();
      this._checkPosition();
      this._updateGravity();
    }
  }, {
    key: '_watchOfStatusForKeys',
    value: function _watchOfStatusForKeys() {
      this._watchOfStatusForRotationKeys();
      this._watchOfStatusForVelocityKey();
    }
  }, {
    key: '_watchOfStatusForRotationKeys',
    value: function _watchOfStatusForRotationKeys() {
      var context = this.context;
      var myUnit = this.sprite;

      if (context.myUnitExplosion !== undefined) {
        return;
      }

      if (context.leftInputIsActive()) {
        myUnit.physics.angularVelocity = -context.ROTATION_SPEED;
      } else if (context.rightInputIsActive()) {
        myUnit.physics.angularVelocity = context.ROTATION_SPEED;
      } else {
        myUnit.physics.angularVelocity = 0;
      }
    }
  }, {
    key: '_watchOfStatusForVelocityKey',
    value: function _watchOfStatusForVelocityKey() {
      var context = this.context;
      var myUnit = this.sprite;

      if (context.myUnitExplosion !== undefined) {
        return;
      }

      if (context.upInputIsActive()) {
        myUnit.physics.acceleration.x = Math.cos(myUnit.rotation) * context.ACCELERATION;
        myUnit.physics.acceleration.y = Math.sin(myUnit.rotation) * context.ACCELERATION;
        // Change sprite 'Engine on'.
        myUnit.cellIndex = 1;
      } else {
        myUnit.physics.acceleration.setTo(0, 0);

        // Change sprite 'Engine off'.
        myUnit.cellIndex = 0;
      }
    }
  }, {
    key: '_checkPosition',
    value: function _checkPosition() {
      var context = this.context;
      var stageWidth = context.game.stage.width;
      var stageHeight = context.game.stage.height;
      var myUnit = this.sprite;

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
  }, {
    key: '_updateGravity',
    value: function _updateGravity() {
      var context = this.context;
      var myUnit = this.sprite;

      if (context.myUnitExplosion !== true) {
        myUnit.physics.acceleration.y += context.GRAVITY;
      }
    }
  }, {
    key: '_prop',
    value: function _prop() {
      var myUnit = this.sprite;

      myUnit.physics.acceleration.x = 0;
      myUnit.physics.acceleration.y = 0;
      myUnit.physics.velocity.x = 0;
      myUnit.physics.velocity.y = 0;
    }
  }, {
    key: '_createMyUnitSplinter',
    value: function _createMyUnitSplinter() {
      var context = this.context;
      var myUnit = this.sprite;
      var myUnitSplinterMembers = context.myUnitSplinterPool.members;
      var angleBase = parseInt(360 / context.NUMBER_OF_MYUNIT_SPLINTER);
      var myUnitSplinterAngle = 0;

      myUnitSplinterMembers.forEach(function (splinterMember) {
        splinterMember.x = myUnit.x;
        splinterMember.y = myUnit.y;
        splinterMember.physics.velocity.x = Math.cos(Helper.radian(myUnitSplinterAngle)) * 40;
        splinterMember.physics.velocity.y = Math.sin(Helper.radian(myUnitSplinterAngle)) * 40;

        splinterMember.animation.play('explosion');
        myUnitSplinterAngle += angleBase;
      });
    }
  }, {
    key: '_remove',
    value: function _remove() {
      var context = this.context;
      var myUnit = this.sprite;

      context.removeChild(myUnit);
    }
  }, {
    key: '_explosionSoundEffect',
    value: function _explosionSoundEffect() {
      var context = this.context;

      context.soundEffectOfMyUnitExplosion.play();
    }
  }, {
    key: '_startCountUpOfExplosion',
    value: function _startCountUpOfExplosion() {
      var _this = this;

      var context = this.context;

      context.game.time.clock.setInterval(function () {
        if (_this.exposionCounter < 2) {
          _this.explosionCounter += 1;
        } else {
          context.gameOver();
        }
      }, 1000, context);
    }
  }, {
    key: 'sprite',
    get: function get() {
      return this._sprite;
    },
    set: function set(value) {
      this._sprite = value;
    }
  }, {
    key: 'explosionCounter',
    get: function get() {
      if (this._explosionCounter === undefined) {
        this._explosionCounter = 0;
      }
      return this._explosionCounter;
    },
    set: function set(value) {
      this._explosionCounter = value;
    }
  }], [{
    key: 'instance',
    get: function get() {
      if (!this[myUnitSingleton]) {
        this[myUnitSingleton] = new MyUnit(myUnitSingletonEnforcer);
      }
      return this[myUnitSingleton];
    }
  }]);

  return MyUnit;
})();

var timerSingleton = Symbol();
var timerSingletonEnforcer = Symbol();

var Timer = (function () {
  function Timer(enforcer) {
    _classCallCheck(this, Timer);

    if (enforcer !== timerSingletonEnforcer) {
      throw 'Cannot construct singleton!';
    }
  }

  _createClass(Timer, [{
    key: 'setInterval',
    value: function setInterval(callback, milliseconds) {
      var context = this.context;

      return context.game.time.clock.setInterval(callback, milliseconds, context);
    }
  }, {
    key: 'createAllTimer',
    value: function createAllTimer() {
      this.createStarTimer();
      this.createCubeTimer();
      this.createCylinderTimer();
      this.createCircleTimer();
      this.createRhombusTimer();
      this.createCoutionForSpeedSoundEffectTimer();
      this.createOverTheLimitVelocityCountTimer();
    }
  }, {
    key: 'removeAllTimer',
    value: function removeAllTimer() {
      var context = this.context;

      var timers = [this.starTimer, this.cubeTimer, this.cylinderTimer, this.circleTimer, this.rhombusTimer, this.coutionSpeedSoundEffectTimer, this.overTheLimitVelocityCountTimer];

      timers.forEach(function (timer) {
        return context.game.time.clock.removeTimer(timer);
      });
    }
  }, {
    key: 'createStarTimer',
    value: function createStarTimer() {
      var context = this.context;
      var spawnObjects = TimerSpawnObjects.instance;
      spawnObjects.context = context;

      this.starTimer = this.setInterval(function () {
        spawnObjects.star();
      }, 100);
    }
  }, {
    key: 'createCubeTimer',
    value: function createCubeTimer() {
      var context = this.context;
      var spawnObjects = TimerSpawnObjects.instance;
      spawnObjects.context = context;

      this.cubeTimer = this.setInterval(function () {
        spawnObjects.cube();
      }, 200);
    }
  }, {
    key: 'createCylinderTimer',
    value: function createCylinderTimer() {
      var context = this.context;
      var spawnObjects = TimerSpawnObjects.instance;
      spawnObjects.context = context;

      this.cylinderTimer = this.setInterval(function () {
        spawnObjects.cylinder();
      }, 100);
    }
  }, {
    key: 'createCircleTimer',
    value: function createCircleTimer() {
      var context = this.context;
      var spawnObjects = TimerSpawnObjects.instance;
      spawnObjects.context = context;

      this.circleTimer = this.setInterval(function () {
        spawnObjects.circle();
      }, 500);
    }
  }, {
    key: 'createRhombusTimer',
    value: function createRhombusTimer() {
      var context = this.context;
      var spawnObjects = TimerSpawnObjects.instance;
      spawnObjects.context = context;

      this.rhombusTimer = this.setInterval(function () {
        spawnObjects.rhombus();
      }, 100);
    }
  }, {
    key: 'createCoutionForSpeedSoundEffectTimer',
    value: function createCoutionForSpeedSoundEffectTimer() {
      var context = this.context;
      var timerVelocity = TimerVelocity.instance;
      timerVelocity.context = context;

      this.coutionForSpeedSoundEffectTimer = this.setInterval(function () {
        timerVelocity.speedLimit();
      }, 500);
    }
  }, {
    key: 'createOverTheLimitVelocityCountTimer',
    value: function createOverTheLimitVelocityCountTimer() {
      var context = this.context;
      var timerVelocity = TimerVelocity.instance;
      timerVelocity.context = context;

      this.overTheLimitVelocityCountTimer = this.setInterval(function () {
        timerVelocity.overTheLimitCount();
      }, 1000);
    }
  }, {
    key: 'context',
    get: function get() {
      return this._context;
    },
    set: function set(value) {
      this._context = value;
    }
  }], [{
    key: 'instance',
    get: function get() {
      if (!this[timerSingleton]) {
        this[timerSingleton] = new Timer(timerSingletonEnforcer);
      }
      return this[timerSingleton];
    }
  }]);

  return Timer;
})();

var timerSpawnObjectsSingleton = Symbol();
var timerSpawnObjectsSingletonEnforcer = Symbol();

var TimerSpawnObjects = (function () {
  function TimerSpawnObjects(enforcer) {
    _classCallCheck(this, TimerSpawnObjects);

    if (enforcer !== timerSpawnObjectsSingletonEnforcer) {
      throw 'Cannot construct singleton!';
    }
  }

  _createClass(TimerSpawnObjects, [{
    key: 'circle',
    value: function circle() {
      var _this2 = this;

      var context = this.context;

      Helper.strewnSprite(Helper.getMember(context.circlePool.members), { y: context.game.stage.height }, { y: 2 }, function (sprite) {
        _this2._tweenOfCircle(context, sprite);
      });
    }
  }, {
    key: 'cube',
    value: function cube() {
      var context = this.context;

      Helper.strewnSprite(Helper.getMember(context.cubePool.members), { y: context.game.stage.height }, { y: 5 });
    }
  }, {
    key: 'cylinder',
    value: function cylinder() {
      var context = this.context;

      Helper.strewnSprite(Helper.getMember(context.cylinderPool.members), { y: context.game.stage.height }, { y: 10 });
    }
  }, {
    key: 'star',
    value: function star() {
      var context = this.context;

      Helper.strewnSprite(Helper.getMember(context.starPool.members), { y: context.game.stage.height }, { y: 3 });
    }
  }, {
    key: 'rhombus',
    value: function rhombus() {
      var _this3 = this;

      var context = this.context;

      if (context.isSpawnSpriteOfRhombusSplinter === undefined) {
        context.isSpawnSpriteOfRhombusSplinter = false;
      }

      if (parseInt(Math.random() * 100) === 0) {
        context.isSpawnSpriteOfRhombusSplinter = true;
      }

      if (context.isSpawnSpriteOfRhombusSplinter) {
        Helper.strewnSprite(Helper.getMember(context.rhombusPool.members), { y: context.game.stage.height / 2 - 32 }, { y: 1 }, function (sprite) {
          _this3._scaleUpRhombus(context, sprite);
        }, { revive: false });
      }
    }
  }, {
    key: '_scaleUpRhombus',
    value: function _scaleUpRhombus(context, sprite) {
      var spriteBottomLeftPoint = sprite.y + sprite.height;
      var standingPoint = context.game.stage.height / 2 - sprite.height;
      var maxScale = 5;
      var scaleBase = 0.05;

      if (spriteBottomLeftPoint >= standingPoint) {
        sprite.physics.acceleration.y = 0;
        sprite.physics.velocity.y = 0;

        if (maxScale > sprite.scaleX && maxScale > sprite.scaleY) {
          sprite.scaleX += scaleBase;
          sprite.scaleY += scaleBase;
        } else {
          this._explosionRhombus(context, sprite);
          this._scaleDownRhombus(context, sprite);
        }
      }
    }
  }, {
    key: '_explosionRhombus',
    value: function _explosionRhombus(context, sprite) {
      var rhombusSplinterMembers = context.rhombusSplinterPool.members;
      var angleBase = parseInt(360 / context.NUMBER_OF_RHOMBUS_SPLINTER);
      var rhombusSplinterAngle = 0;
      var explosionCounter = 0;

      rhombusSplinterMembers.forEach(function (member) {
        member.x = sprite.x;
        member.y = sprite.y;

        member.physics.velocity.x = Math.cos(Helper.radian(rhombusSplinterAngle)) * 30;
        member.physics.velocity.y = Math.sin(Helper.radian(rhombusSplinterAngle)) * 30;

        rhombusSplinterAngle += angleBase;
      });
    }
  }, {
    key: '_scaleDownRhombus',
    value: function _scaleDownRhombus(context, sprite) {
      sprite.scaleX = 1;
      sprite.scaleY = 1;
      Helper.revive(sprite);
      context.isSpawnSpinterOfRhombusSplinter = false;
    }
  }, {
    key: '_tweenOfCircle',
    value: function _tweenOfCircle(context, sprite) {
      var tween = context.game.tweens.create(sprite);
      var myUnit = MyUnit.instance;
      myUnit.context = context;

      tween.to({ x: myUnit.sprite.x }, 1000, Kiwi.Animations.Tweens.Easing.Sinusoidal.Out, true);
      tween.start();
    }
  }, {
    key: 'context',
    get: function get() {
      return this._context;
    },
    set: function set(value) {
      this._context = value;
    }
  }], [{
    key: 'instance',
    get: function get() {
      if (!this[timerSpawnObjectsSingleton]) {
        this[timerSpawnObjectsSingleton] = new TimerSpawnObjects(timerSpawnObjectsSingletonEnforcer);
      }
      return this[timerSpawnObjectsSingleton];
    }
  }]);

  return TimerSpawnObjects;
})();

var timerVelocitySingleton = Symbol();
var timerVelocitySingletonEnforcer = Symbol();

var TimerVelocity = (function () {
  function TimerVelocity(enforcer) {
    _classCallCheck(this, TimerVelocity);

    if (enforcer !== timerVelocitySingletonEnforcer) {
      throw 'Cannot construct singleton!';
    }
  }

  _createClass(TimerVelocity, [{
    key: 'overTheLimitCount',
    value: function overTheLimitCount() {
      var context = this.context;

      var myUnit = MyUnit.instance;
      var hud = HUD.instance;

      myUnit.context = context;
      hud.context = context;

      if (hud.velocityBar.counter.current >= context.LIMIT_VELOCITY) {
        if (context.contains(context.slowDownCountText)) {
          context.slowDownCountText.text = context.LIMIT_VELOCITY_MAX_COUNT - this.overTheLimitVelocityCounter;
        }
        this.overTheLimitVelocityCounter += 1;
      } else {
        this.overTheLimitVelocityCounter = 0;
        context.slowDownCountText.text = context.LIMIT_VELOCITY_MAX_COUNT;
      }

      if (this.overTheLimitVelocityCounter > context.LIMIT_VELOCITY_MAX_COUNT) {
        myUnit.explosion();
      }
    }
  }, {
    key: 'speedLimit',
    value: function speedLimit() {
      var context = this.context;
      var hud = HUD.instance;

      hud.context = context;

      if (hud.velocityBar.counter.current >= context.LIMIT_VELOCITY * 0.95) {
        context.soundEffectOfCautionForSpeed.play();
        if (!context.contains(context.slowDownText)) {
          context.addChild(context.slowDownText);
        }
        if (!context.contains(context.slowDownCountText)) {
          context.addChild(context.slowDownCountText);
        }
      } else {
        context.soundEffectOfCautionForSpeed.stop();
        if (context.contains(context.slowDownText)) {
          context.removeChild(context.slowDownText);
        }
        if (context.contains(context.slowDownCountText)) {
          context.removeChild(context.slowDownCountText);
        }
      }
    }
  }, {
    key: 'context',
    get: function get() {
      return this._context;
    },
    set: function set(value) {
      this._context = value;
    }
  }, {
    key: 'overTheVelocityCounter',
    get: function get() {
      if (this._overTheVelocityCounter === undefined) {
        this._overTheVelocityCounter = 0;
      }
      return this._overTheVelocityCounter;
    },
    set: function set(value) {
      this._overTheVelocityCounter = value;
    }
  }], [{
    key: 'instance',
    get: function get() {
      if (!this[timerVelocitySingleton]) {
        this[timerVelocitySingleton] = new TimerVelocity(timerVelocitySingletonEnforcer);
      }
      return this[timerVelocitySingleton];
    }
  }]);

  return TimerVelocity;
})();

titleState.create = function () {
  Kiwi.State.prototype.create.call(this);

  this.game.stage.color = titleStageColor;

  this.setGameKeys();
  this.createTitleText();
};

titleState.preload = function () {
  Kiwi.State.prototype.preload.call(this);
};

titleState.update = function () {
  Kiwi.State.prototype.update.call(this);

  if (this.startInputIsActive()) {
    this.destroyTitleText();
    this.game.states.switchState('Play');
  }

  if (this.exitInputIsActive()) {
    ipc.sendSync('quit');
  }
};

titleState.startInputIsActive = function () {
  return this.startKey.isDown;
};

titleState.exitInputIsActive = function () {
  return this.exitKey.isDown;
};

titleState.setGameKeys = function () {
  this.startKey = this.game.input.keyboard.addKey(Kiwi.Input.Keycodes.SPACEBAR);
  this.exitKey = this.game.input.keyboard.addKey(Kiwi.Input.Keycodes.ESC);
};

titleState.createTitleText = function () {
  this.titleText = new Kiwi.GameObjects.TextField(this, 'Always Gravity', this.game.stage.width / 2, 200, '#ffffff', 48, 'bold', 'monospace');
  this.titleText.textAlign = Kiwi.GameObjects.TextField.TEXT_ALIGN_CENTER;

  this.addChild(this.titleText);

  this.subTitleText = new Kiwi.GameObjects.TextField(this, '常に重力', this.game.stage.width / 2, 270, '#ffffff', 24, 'bold', 'monospace');
  this.subTitleText.textAlign = Kiwi.GameObjects.TextField.TEXT_ALIGN_CENTER;
  this.addChild(this.subTitleText);

  this.startText = new Kiwi.GameObjects.TextField(this, 'START: SPACEBAR', this.game.stage.width / 2, 320, '#ffffff', 20, 'bold', 'monospace');
  this.startText.textAlign = Kiwi.GameObjects.TextField.TEXT_ALIGN_CENTER;

  this.addChild(this.startText);

  this.quitText = new Kiwi.GameObjects.TextField(this, 'QUIT: ESC', this.game.stage.width / 2, this.startText.y + 30, '#ffffff', 20, 'bold', 'monospace');
  this.quitText.textAlign = Kiwi.GameObjects.TextField.TEXT_ALIGN_CENTER;
  this.addChild(this.quitText);
};

titleState.destroyTitleText = function () {
  this.removeChild(this.titleText);
  this.removeChild(this.subTitleText);
  this.removeChild(this.startText);
  this.removeChild(this.quitText);
};

playState.setConfig = function () {
  this.game.stage.color = stageColor;
  this.SHOT_DELAY = 100;
  this.NUMBER_OF_STAR = 30;
  this.NUMBER_OF_CUBE = 5;
  this.NUMBER_OF_CYLINDER = 10;
  this.NUMBER_OF_BULLET = 3;
  this.NUMBER_OF_CIRCLE = 5;
  this.NUMBER_OF_MYUNIT_SPLINTER = 60;
  this.NUMBER_OF_RHOMBUS = 1;
  this.NUMBER_OF_RHOMBUS_SPLINTER = 8;
  this.STAR_SPEED = 50;
  this.CUBE_SPEED = 30;
  this.SHOOT_DELAY = 200;
  this.BULLET_SPEED = 100;
  this.FRAME_MS = 17;
  this.ROTATION_SPEED = Math.PI / 3;
  this.ACCELERATION = 20;
  this.MAX_SPEED = 25;
  this.LIMIT_VELOCITY = 100;
  this.LIMIT_VELOCITY_MAX_COUNT = 3;
  this.LIMIT_HITPOINT = 5;
  this.CURRENT_HITPOINT = 5;
  this.GRAVITY = 5;
  this.DRAG = 2.5;
  this.BASE_MUSIC_VOLUME_PER = 1.0;
  this.BASE_LASER_VOLUME_PER = 0.6;
  this.BASE_EXPLOSION_VOLUME_PER = 1.0;
  this.BASE_CAUTION_VOLUME_PER = 2.0;
  this.BASE_CIRCLE_VOLUME_PER = 1.0;
  this.BASE_EXPLOSION_MYUNIT_VOLUME_PER = 1.0;
  this.bulletCounter = 0;
  this.explosionCounter = 0;
  this.gameScoreCounter = 0;
};

playState.create = function () {
  Kiwi.State.prototype.create.call(this);

  this.setConfig();
  this.setMusics();
  this.createHUD();
  this.createGroups();
  this.createMyUnit();
  this.setGameKeys();
  this.createTimers();
  this.createSlowDownText();
  this.createSlowDownCountText();
};

playState.preload = function () {
  Kiwi.State.prototype.preload.call(this);

  this.addSpriteSheet('myUnit', './assets/images/unit.png', 32, 32);
  this.addSpriteSheet('myUnitSplinter', './assets/images/my-unit-explosion.png', 32, 32);
  this.addSpriteSheet('star', './assets/images/star.png', 8, 8);
  this.addSpriteSheet('cube', './assets/images/cube.png', 32, 32);
  this.addSpriteSheet('cylinder', './assets/images/cylinder.png', 32, 128);
  this.addSpriteSheet('bullet', './assets/images/bullet.png', 4, 4);
  this.addSpriteSheet('explosion', './assets/images/explosion.png', 256, 256);
  this.addSpriteSheet('circle', './assets/images/circle.png', 32, 32);
  this.addSpriteSheet('rhombus', './assets/images/rhombus.png', 32, 32);

  // PUBLIC DOMAIN
  // http://opengameart.org/content/lo-fi-chiptune-glitch-dnb
  this.addAudio('musicMain', './assets/media/old-broken-radio.mp3');
  // CC-BY 3.0
  // http://opengameart.org/content/jump-and-run-8-bit
  this.addAudio('musicGameover', './assets/media/random-silly-chip-song.ogg');
  this.addAudio('bullet-se', './assets/media/laser.wav');
  this.addAudio('explosion-se', './assets/media/explosion.wav');
  this.addAudio('explosion-myunit-se', './assets/media/myunit-explosion.wav');
  this.addAudio('circle-se', './assets/media/circle.wav');
  this.addAudio('caution-of-speed-se', './assets/media/caution-of-speed.wav');
};

playState.update = function () {
  Kiwi.State.prototype.update.call(this);
  var myUnit = MyUnit.instance;
  myUnit.context = this;

  this.updateMyUnit();
  this.updateHUD();

  if (this.contains(myUnit.sprite) && this.shootInputIsActive()) {
    this.shootBullet();
  }

  this.forEachOfPool();

  if (this.isGameOver) {
    this.whenGameOverInputKeys();
  }
};

playState.checkCollision = function (bullet) {
  var cubeMembers = this.cubePool.members;
  var circleMembers = this.circlePool.members;
  var cylinderMembers = this.cylinderPool.members;

  for (var i = 0; i < cubeMembers.length; i++) {
    if (bullet.physics.overlaps(cubeMembers[i])) {
      this.overlapOnObject(bullet, cubeMembers[i], { soundEffectVolume: 0.3 });
    }
  }

  for (var i = 0; i < circleMembers.length; i++) {
    if (bullet.physics.overlaps(circleMembers[i])) {
      this.overlapOnObject(bullet, circleMembers[i], { soundEffectVolume: 0.6 });
    }
  }

  for (var i = 0; i < cylinderMembers.length; i++) {
    if (bullet.physics.overlaps(cylinderMembers[i])) {
      this.overlapOnObject(bullet, cylinderMembers[i], { soundEffectVolume: 0.6 });
    }
  }
};

playState.deadBullet = function (bullet) {
  bullet.x = -1000;
  bullet.y = -1000;
  bullet.alive = false;
};

playState.getFirstDeadBullet = function () {
  var bulletMembers = this.bulletPool.members;
  for (var i = bulletMembers.length - 1; i >= 0; i--) {
    if (bulletMembers[i].alive === false) {
      return bulletMembers[i];
    }
  }
  return null;
};

playState.overlapOnObject = function (bullet, object, option) {
  var soundEffectVolume;
  if (option && option.soundEffectVolume !== undefined) {
    soundEffectVolume = option.soundEffectVolume;
  } else {
    soundEffectVolume = 1.0;
  }

  this.explosionPool.addChild(Explosion.generate(this, bullet.x, bullet.y));
  this.deadBullet(bullet);
  Helper.revive(object);
  this.playSoundEffectOfExplosion(soundEffectVolume);
  this.gameScoreCounter += object.score;
};

playState.shootBullet = function () {
  if (this.lastBulletShotAt === undefined) {
    this.lastBulletShotAt = 0;
  }

  if (this.game.time.now() - this.lastBulletShotAt < this.SHOT_DELAY) {
    return;
  }

  this.lastBulletShotAt = this.game.time.now();

  var bullet = this.getFirstDeadBullet();

  if (bullet === null || bullet === undefined) {
    return;
  }

  bullet.alive = true;

  var myUnit = MyUnit.instance;
  myUnit.context = this;

  bullet.x = myUnit.sprite.x + myUnit.sprite.height * 0.5;
  bullet.y = myUnit.sprite.y + myUnit.sprite.width * 0.5;

  bullet.rotation = myUnit.sprite.rotation;

  bullet.physics.velocity.x = Math.cos(bullet.rotation) * this.BULLET_SPEED;
  bullet.physics.velocity.y = Math.sin(bullet.rotation) * this.BULLET_SPEED;

  this.soundEffectOfBullet.stop();
  this.soundEffectOfBullet.play();
};

playState.playSoundEffectOfExplosion = function (volume) {
  this.soundEffectOfExplosion.stop();
  this.soundEffectOfExplosion.volume = volume;
  this.soundEffectOfExplosion.play();
};

playState.destroyObjects = function () {
  this.destroyGroups();
  this.destroyMusics();
  this.destroyHUD();
  this.destroyTimers();

  var myUnit = MyUnit.instance;
  myUnit.context = this;

  myUnit.sprite.destroy();
};

playState.gameOver = function () {
  if (this.isGameOver) {
    return;
  }

  this.destroyObjects();

  this.musicGameOver = new Kiwi.Sound.Audio(this.game, 'musicGameover', 1, false);
  this.musicGameOver.play();

  this.createGameOverText();
  this.addChild(this.gameOverText);

  this.createScoreText(this.gameScoreCounter);
  this.addChild(this.scoreText);

  this.createRestartText();
  this.addChild(this.restartText);

  this.createExitGameText();
  this.addChild(this.exitGameText);

  if (this.isGameOver === undefined) {
    this.isGameOver = true;
  }
};

playState.whenGameOverInputKeys = function () {
  if (this.exitGameInputIsActive()) {
    ipc.sendSync('quit');
  }

  if (this.restartInputIsActive()) {
    window.location.reload(true);
  }
};

playState.createBulletAndAppendGroup = function () {
  for (var i = 0; i < this.NUMBER_OF_BULLET; i++) {
    this.bulletPool.addChild(BulletGenerator.create(this, i));
  }
};

playState.createCircleAndAppendGroup = function () {
  for (var i = 0; i < this.NUMBER_OF_CIRCLE; i++) {
    this.circlePool.addChild(CircleGenerator.create(this, i));
  }
};

playState.createGroups = function () {
  this.starPool = new Kiwi.Group(this);
  this.addChild(this.starPool);
  this.createStarAndAppendGroup();

  this.cubePool = new Kiwi.Group(this);
  this.addChild(this.cubePool);
  this.createCubeAndApppendGroup();

  this.circlePool = new Kiwi.Group(this);
  this.addChild(this.circlePool);
  this.createCircleAndAppendGroup();

  this.cylinderPool = new Kiwi.Group(this);
  this.addChild(this.cylinderPool);
  this.createCylinderAndAppendGroup();

  this.bulletPool = new Kiwi.Group(this);
  this.addChild(this.bulletPool);
  this.createBulletAndAppendGroup();

  this.myUnitSplinterPool = new Kiwi.Group(this);
  this.addChild(this.myUnitSplinterPool);
  this.createMyUnitSplinterAndAppendGroup();

  this.rhombusPool = new Kiwi.Group(this);
  this.addChild(this.rhombusPool);
  this.createRhombusAndAppendGroup();

  this.rhombusSplinterPool = new Kiwi.Group(this);
  this.addChild(this.rhombusSplinterPool);
  this.createRhombusSplinterAndAppendGroup();

  this.explosionPool = new Kiwi.Group(this);
  this.addChild(this.explosionPool);
};

playState.createCubeAndApppendGroup = function () {
  for (var i = 0; i < this.NUMBER_OF_CUBE; i++) {
    this.cubePool.addChild(CubeGenerator.create(this, i));
  }
};

playState.createCylinderAndAppendGroup = function () {
  for (var i = 0; i < this.NUMBER_OF_CYLINDER; i++) {
    this.cylinderPool.addChild(CylinderGenerator.create(this, i));
  }
};

playState.destroyGroups = function () {
  this.starPool.removeChildren(0, this.starPool.members.length);
  this.cubePool.removeChildren(0, this.cubePool.members.length);
  this.circlePool.removeChildren(0, this.circlePool.members.length);
  this.cylinderPool.removeChildren(0, this.cylinderPool.members.length);
  this.bulletPool.removeChildren(0, this.bulletPool.members.length);
  this.explosionPool.removeChildren(0, this.explosionPool.members.length);
  this.rhombusPool.removeChildren(0, this.rhombusPool.members.length);
};

playState.forEachOfPool = function () {
  this.starPool.forEach(this, Helper.checkSpritePosition);
  this.cubePool.forEach(this, function (cube) {
    Helper.updateSpriteRotation(cube, 5);
  });
  this.cubePool.forEach(this, Helper.checkSpritePosition);
  this.cylinderPool.forEach(this, Helper.checkSpritePosition);
  this.circlePool.forEach(this, Helper.checkSpritePosition);
  this.circlePool.forEach(this, function (circle) {
    Helper.updateSpriteRotation(circle, 30);
  });
  this.bulletPool.forEach(this, Helper.checkSpritePosition);
  this.bulletPool.forEach(this, this.checkCollision);

  this.explosionPool.members.map(function (member) {
    Explosion.isLastOfCellIndex(member);
  });

  this.rhombusSplinterPool.forEach(this, Helper.checkSpritePosition);

  var myUnit = MyUnit.instance;
  myUnit.context = this;

  this.circlePool.members.map(function (member) {
    myUnit.overlapOnOther(member);
  });
  this.rhombusPool.members.map(function (member) {
    myUnit.overlapOnOther(member);
  });
  this.rhombusSplinterPool.members.map(function (member) {
    myUnit.overlapOnOther(member);
  });
};

playState.createMyUnitSplinterAndAppendGroup = function () {
  for (var i = 0; i < this.NUMBER_OF_MYUNIT_SPLINTER; i++) {
    this.myUnitSplinterPool.addChild(MyUnitSplinterGenerator.create(this, i));
  }
};

playState.createRhombusSplinterAndAppendGroup = function () {
  for (var i = 0; i < this.NUMBER_OF_RHOMBUS_SPLINTER; i++) {
    this.rhombusSplinterPool.addChild(RhombusSplinterGenerator.create(this, i));
  }
};

playState.createRhombusAndAppendGroup = function () {
  for (var i = 0; i < this.NUMBER_OF_RHOMBUS; i++) {
    this.rhombusPool.addChild(RhombusGenerator.create(this, i));
  }
};

playState.createStarAndAppendGroup = function () {
  for (var i = 0; i < this.NUMBER_OF_STAR; i++) {
    this.starPool.addChild(StarGenerator.create(this, i));
  }
};

playState.createHUD = function () {
  var hud = HUD.instance;
  hud.context = this;

  this.game.huds.defaultHUD.addWidget(hud.createVelocityBar());
  this.game.huds.defaultHUD.addWidget(hud.createHitPointBar());
  this.game.huds.defaultHUD.addWidget(hud.createGameScoreCounter());
};

playState.destroyHUD = function () {
  this.game.huds.defaultHUD.removeAllWidgets();
};

playState.updateHUD = function () {
  var hud = HUD.instance;
  hud.context = this;
  hud.update();
};

playState.leftInputIsActive = function () {
  return this.leftKey.isDown;
};

playState.rightInputIsActive = function () {
  return this.rightKey.isDown;
};

playState.upInputIsActive = function () {
  return this.upKey.isDown;
};

playState.shootInputIsActive = function () {
  return this.shootKey.isDown;
};

playState.restartInputIsActive = function () {
  return this.restartKey.isDown;
};

playState.exitGameInputIsActive = function () {
  return this.exitKey.isDown;
};

playState.setGameKeys = function () {
  this.leftKey = this.game.input.keyboard.addKey(Kiwi.Input.Keycodes.LEFT);
  this.rightKey = this.game.input.keyboard.addKey(Kiwi.Input.Keycodes.RIGHT);
  this.upKey = this.game.input.keyboard.addKey(Kiwi.Input.Keycodes.UP);
  this.shootKey = this.game.input.keyboard.addKey(Kiwi.Input.Keycodes.Z);
  this.exitKey = this.game.input.keyboard.addKey(Kiwi.Input.Keycodes.ESC);
  this.restartKey = this.game.input.keyboard.addKey(Kiwi.Input.Keycodes.R);
};

playState.destroyMusics = function () {
  this.musicMain.stop();
  this.musicMain.destroy();
  this.soundEffectOfBullet.stop();
  this.soundEffectOfBullet.destroy();
  this.soundEffectOfExplosion.stop();
  this.soundEffectOfExplosion.destroy();
  this.soundEffectOfCautionForSpeed.stop();
  this.soundEffectOfCautionForSpeed.destroy();
};

playState.setMusics = function () {
  this.musicMain = new Kiwi.Sound.Audio(this.game, 'musicMain', this.BASE_MUSIC_VOLUME_PER, true);
  this.musicMain.play();

  this.soundEffectOfBullet = new Kiwi.Sound.Audio(this.game, 'bullet-se', this.BASE_LASER_VOLUME_PER, false);
  this.soundEffectOfExplosion = new Kiwi.Sound.Audio(this.game, 'explosion-se', this.BASE_EXPLOSION_VOLUME_PER, false);

  this.soundEffectOfCautionForSpeed = new Kiwi.Sound.Audio(this.game, 'caution-of-speed-se', this.BASE_CAUTION_VOLUME_PER, false);

  this.soundEffectOfCircle = new Kiwi.Sound.Audio(this.game, 'circle-se', this.BASE_CIRCLE_VOLUME_PER, false);

  this.soundEffectOfMyUnitExplosion = new Kiwi.Sound.Audio(this.game, 'explosion-myunit-se', this.BASE_EXPLOSION_MYUNIT_VOLUME_PER, false);
};

playState.createMyUnit = function () {
  var myUnit = MyUnit.instance;
  myUnit.context = this;

  this.addChild(myUnit.create());
};

playState.explosionOfMyUnit = function () {
  var myUnit = MyUnit.instance;
  myUnit.context = this;

  myUnit.explosion();
};

playState.updateMyUnit = function () {
  var myUnit = MyUnit.instance;
  myUnit.context = this;

  myUnit.update();
};

playState.createExitGameText = function () {
  this.exitGameText = new Kiwi.GameObjects.TextField(this, 'QUIT: ESC', this.game.stage.width / 2, 380, '#ffffff', 20, 'bold', 'monospace');
  this.exitGameText.textAlign = Kiwi.GameObjects.TextField.TEXT_ALIGN_CENTER;
};

playState.createGameOverText = function () {
  this.gameOverText = new Kiwi.GameObjects.TextField(this, 'GAME OVER', this.game.stage.width / 2, 200, '#ffffff', 64, 'bold', 'monospace');
  this.gameOverText.textAlign = Kiwi.GameObjects.TextField.TEXT_ALIGN_CENTER;
};

playState.createRestartText = function () {
  this.restartText = new Kiwi.GameObjects.TextField(this, 'RESTART: R', this.game.stage.width / 2, 350, '#ffffff', 20, 'bold', 'monospace');
  this.restartText.textAlign = Kiwi.GameObjects.TextField.TEXT_ALIGN_CENTER;
};

playState.createScoreText = function (score) {
  this.scoreText = new Kiwi.GameObjects.TextField(this, 'SCORE: ' + score, this.game.stage.width / 2, 280, '#ffffff', 36, 'bold', 'monospace');
  this.scoreText.textAlign = Kiwi.GameObjects.TextField.TEXT_ALIGN_CENTER;
};

playState.createSlowDownCountText = function () {
  this.slowDownCountText = new Kiwi.GameObjects.TextField(this, this.LIMIT_VELOCITY_MAX_COUNT, this.game.stage.width / 2, 250, '#ffffff', 48, 'bold', 'monoscape');
  this.slowDownCountText.textAlign = Kiwi.GameObjects.TextField.TEXT_ALIGN_CENTER;
};

playState.createSlowDownText = function () {
  this.slowDownText = new Kiwi.GameObjects.TextField(this, 'SLOW DOWN !!!', this.game.stage.width / 2, 200, '#ffffff', 48, 'bold', 'monospace');
  this.slowDownText.textAlign = Kiwi.GameObjects.TextField.TEXT_ALIGN_CENTER;
};

playState.createTimers = function () {
  var timer = Timer.instance;
  timer.context = this;

  timer.createAllTimer();
};

playState.destroyTimers = function () {
  var timer = Timer.instance;
  timer.context = this;

  timer.removeAllTimer();
};

var game = new Kiwi.Game(gameContainerID, nameOfGame, null, gameOptions);
game.states.addState(titleState);
game.states.addState(playState);

game.states.switchState('Title');