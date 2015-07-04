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

var GAME_CONFIG = {
  CONTAINER_ID: 'game-container',
  NAME: 'Always Glavity',
  STAGE_COLOR: '010101',
  SHOOT_DELAY: 100,
  NUMBER_OF_STAR: 30,
  NUMBER_OF_CUBE: 5,
  NUMBER_OF_CYLINDER: 10,
  NUMBER_OF_BULLET: 3,
  NUMBER_OF_CIRCLE: 5,
  NUMBER_OF_MYUNIT_SPLINTER: 60,
  NUMBER_OF_RHOMBUS: 1,
  NUMBER_OF_RHOMBUS_SPLINTER: 8,
  STAR_SPEED: 50,
  CUBE_SPEED: 30,
  SHOOT_DELAY: 200,
  BULLET_SPEED: 100,
  FRAME_MS: 17,
  ROTATION_SPEED: Math.PI / 3,
  ACCELERATION: 20,
  MAX_SPEED: 25,
  LIMIT_VELOCITY: 100,
  LIMIT_VELOCITY_MAX_COUNT: 3,
  LIMIT_HITPOINT: 5,
  GRAVITY: 5,
  DRAG: 2.5,
  BASE_MUSIC_VOLUME_PER: 1.0,
  BASE_LASER_VOLUME_PER: 0.6,
  BASE_EXPLOSION_VOLUME_PER: 1.0,
  BASE_CAUTION_VOLUME_PER: 2.0,
  BASE_CIRCLE_VOLUME_PER: 1.0,
  BASE_EXPLOSION_MYUNIT_VOLUME_PER: 1.0
};

var GAME_COUNTER = {
  hitPoint: 5,
  bullet: 0,
  explosion: 0,
  gameScore: 0
};

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
      if (index < parseInt(GAME_CONFIG.NUMBER_OF_STAR / 3)) {
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

var lastBulletShootAt = Symbol();

var Bullet = (function () {
  function Bullet() {
    _classCallCheck(this, Bullet);
  }

  _createClass(Bullet, null, [{
    key: 'shoot',
    value: function shoot() {
      var context = GameState.instance.current;

      if (!this[lastBulletShootAt]) {
        this[lastBulletShootAt] = 0;
      }

      var lastShootTime = context.game.time.now() - this[lastBulletShootAt];

      if (lastShootTime < GAME_CONFIG.SHOOT_DELAY) {
        return;
      }

      this[lastBulletShootAt] = context.game.time.now();

      var bullet = Bullet.getFirstDeadBullet(context);

      if (bullet === null) {
        return;
      }

      bullet.alive = true;

      var myUnit = MyUnit.instance;

      bullet.x = myUnit.sprite.x + myUnit.sprite.height * 0.5;
      bullet.y = myUnit.sprite.y + myUnit.sprite.width * 0.5;

      bullet.rotation = myUnit.sprite.rotation;

      bullet.physics.velocity.x = Math.cos(bullet.rotation) * GAME_CONFIG.BULLET_SPEED;
      bullet.physics.velocity.y = Math.sin(bullet.rotation) * GAME_CONFIG.BULLET_SPEED;

      GameMusic.soundEffectOfBullet.stop();
      GameMusic.soundEffectOfBullet.play();
    }
  }, {
    key: 'getFirstDeadBullet',
    value: function getFirstDeadBullet(context) {
      var bulletMembers = GroupPool.bullet().members;
      var i = undefined;
      for (i = bulletMembers.length - 1; i >= 0; i--) {
        if (bulletMembers[i].alive === false) {
          return bulletMembers[i];
        }
      }
      return null;
    }
  }, {
    key: 'overlapOnObject',
    value: function overlapOnObject(context, bullet, object) {
      var volume = arguments[3] === undefined ? 1.0 : arguments[3];

      GroupPool.explosion().addChild(Explosion.generate(bullet.x, bullet.y));
      Bullet.deadBullet(bullet);
      Helper.revive(object);
      Bullet.playSoundEffectOfExplosion(context, volume);
      GAME_COUNTER.gameScore += object.score;
    }
  }, {
    key: 'deadBullet',
    value: function deadBullet(bullet) {
      bullet.x = -1000;
      bullet.y = -1000;
      bullet.alive = false;
    }
  }, {
    key: 'playSoundEffectOfExplosion',
    value: function playSoundEffectOfExplosion(context, volume) {
      var se = GameMusic.soundEffectOfExplosion;
      se.stop();
      se.volume = volume;
      se.play();
    }
  }]);

  return Bullet;
})();

var CollisionDelection = (function () {
  function CollisionDelection() {
    _classCallCheck(this, CollisionDelection);
  }

  _createClass(CollisionDelection, null, [{
    key: 'BulletCollideWithCube',
    value: function BulletCollideWithCube(bullet) {
      var context = GameState.instance.current;
      var members = GroupPool.cube().members;

      members.map(function (member) {
        if (bullet.physics.overlaps(member)) {
          Bullet.overlapOnObject(context, bullet, member, 0.3);
        }
      });
    }
  }, {
    key: 'BulletCollideWithCircle',
    value: function BulletCollideWithCircle(bullet) {
      var context = GameState.instance.current;
      var members = GroupPool.circle().members;

      members.map(function (member) {
        if (bullet.physics.overlaps(member)) {
          Bullet.overlapOnObject(context, bullet, member, 0.3);
        }
      });
    }
  }, {
    key: 'BulletCollideWithCylinder',
    value: function BulletCollideWithCylinder(bullet) {
      var context = GameState.instance.current;
      var members = GroupPool.cylinder().members;

      members.map(function (member) {
        if (bullet.physics.overlaps(member)) {
          Bullet.overlapOnObject(context, bullet, member, 0.3);
        }
      });
    }
  }]);

  return CollisionDelection;
})();

var Explosion = (function () {
  function Explosion() {
    _classCallCheck(this, Explosion);
  }

  _createClass(Explosion, null, [{
    key: 'generate',
    value: function generate(baseX, baseY) {
      var context = GameState.instance.current;
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

var gameOverContext = Symbol();
var gameOverStatus = Symbol();

var GameOver = (function () {
  function GameOver() {
    _classCallCheck(this, GameOver);
  }

  _createClass(GameOver, null, [{
    key: 'execute',
    value: function execute(context) {
      if (GameOver.status) {
        return;
      }

      GameOver.destroyObjects(context);

      GameMusic.gameOver.play();

      context.addChild(GameText.createGameOver());
      context.addChild(GameText.createScore(GAME_COUNTER.gameScore));
      context.addChild(GameText.createRestart());
      context.addChild(GameText.createExitGame());

      GameOver.status = true;
    }
  }, {
    key: 'destroyObjects',
    value: function destroyObjects(context) {
      GroupPool.removeChildrenForAll(context);
      GameMusic.destroy();
      context.game.huds.defaultHUD.removeAllWidgets();
      Timer.destroy();

      MyUnit.instance.sprite.destroy();
    }
  }, {
    key: 'context',
    get: function get() {
      return this[gameOverContext];
    },
    set: function set(value) {
      this[gameOverContext] = value;
    }
  }, {
    key: 'status',
    get: function get() {
      return this[gameOverStatus];
    },
    set: function set(value) {
      if (typeof value === 'boolean') {
        this[gameOverStatus] = value;
      }
    }
  }]);

  return GameOver;
})();

var textTitle = Symbol();
var textSubTitle = Symbol();
var textStart = Symbol();
var textQuit = Symbol();
var textExitGame = Symbol();
var textGameOver = Symbol();
var textRestart = Symbol();
var textScore = Symbol();
var textSlowDownCount = Symbol();
var textSlowDown = Symbol();

var GameText = (function () {
  function GameText() {
    _classCallCheck(this, GameText);
  }

  _createClass(GameText, null, [{
    key: 'initializeOfTitle',
    value: function initializeOfTitle() {
      var context = GameState.instance.current;

      context.addChild(GameText.createTitle());
      context.addChild(GameText.createSubTitle());
      context.addChild(GameText.createStart());
      context.addChild(GameText.createQuit());
    }
  }, {
    key: 'destroyOfTitle',
    value: function destroyOfTitle() {
      var context = GameState.instance.current;

      context.removeChild(GameText.title);
      context.removeChild(GameText.subTitle);
      context.removeChild(GameText.start);
      context.removeChild(GameText.quit);
    }
  }, {
    key: 'createTitle',
    value: function createTitle() {
      var context = GameState.instance.current;

      if (!this[textTitle]) {
        var text = new Kiwi.GameObjects.TextField(context, 'Always Gravity', context.game.stage.width / 2, 200, '#ffffff', 48, 'bold', 'monospace');
        text.textAlign = Kiwi.GameObjects.TextField.TEXT_ALIGN_CENTER;
        this[textTitle] = text;
      }
      return this[textTitle];
    }
  }, {
    key: 'createSubTitle',
    value: function createSubTitle() {
      var context = GameState.instance.current;

      if (!this[textSubTitle]) {
        var text = new Kiwi.GameObjects.TextField(context, '常に重力', context.game.stage.width / 2, 270, '#ffffff', 24, 'bold', 'monospace');
        text.textAlign = Kiwi.GameObjects.TextField.TEXT_ALIGN_CENTER;
        this[textSubTitle] = text;
      }
      return this[textSubTitle];
    }
  }, {
    key: 'createStart',
    value: function createStart() {
      var context = GameState.instance.current;

      if (!this[textStart]) {
        var text = new Kiwi.GameObjects.TextField(context, 'START: SPACEBAR', context.game.stage.width / 2, 320, '#ffffff', 20, 'bold', 'monospace');
        text.textAlign = Kiwi.GameObjects.TextField.TEXT_ALIGN_CENTER;
        this[textStart] = text;
      }
      return this[textStart];
    }
  }, {
    key: 'createQuit',
    value: function createQuit() {
      var context = GameState.instance.current;

      if (!this[textQuit]) {
        var text = new Kiwi.GameObjects.TextField(context, 'QUIT: ESC', context.game.stage.width / 2, 350, '#ffffff', 20, 'bold', 'monospace');
        text.textAlign = Kiwi.GameObjects.TextField.TEXT_ALIGN_CENTER;
        this[textQuit] = text;
      }
      return this[textQuit];
    }
  }, {
    key: 'createExitGame',
    value: function createExitGame() {
      var context = GameState.instance.current;

      if (!this[textExitGame]) {
        var text = new Kiwi.GameObjects.TextField(context, 'QUIT: ESC', context.game.stage.width / 2, 380, '#ffffff', 20, 'bold', 'monospace');
        text.textAlign = Kiwi.GameObjects.TextField.TEXT_ALIGN_CENTER;
        this[textExitGame] = text;
      }
      return this[textExitGame];
    }
  }, {
    key: 'createGameOver',
    value: function createGameOver() {
      var context = GameState.instance.current;

      if (!this[textGameOver]) {
        var text = new Kiwi.GameObjects.TextField(context, 'GAME OVER', context.game.stage.width / 2, 200, '#ffffff', 64, 'bold', 'monospace');
        text.textAlign = Kiwi.GameObjects.TextField.TEXT_ALIGN_CENTER;
        this[textGameOver] = text;
      }
      return this[textGameOver];
    }
  }, {
    key: 'createRestart',
    value: function createRestart() {
      var context = GameState.instance.current;

      if (!this[textRestart]) {
        var text = new Kiwi.GameObjects.TextField(context, 'RESTART: R', context.game.stage.width / 2, 350, '#ffffff', 20, 'bold', 'monospace');
        text.textAlign = Kiwi.GameObjects.TextField.TEXT_ALIGN_CENTER;
        this[textRestart] = text;
      }
      return this[textRestart];
    }
  }, {
    key: 'createScore',
    value: function createScore(score) {
      var context = GameState.instance.current;

      if (!this[textScore]) {
        var text = new Kiwi.GameObjects.TextField(context, 'SCORE: ' + score, context.game.stage.width / 2, 280, '#ffffff', 36, 'bold', 'monospace');
        text.textAlign = Kiwi.GameObjects.TextField.TEXT_ALIGN_CENTER;
        this[textScore] = text;
      }
      return this[textScore];
    }
  }, {
    key: 'createSlowDownCount',
    value: function createSlowDownCount() {
      var context = GameState.instance.current;

      if (!this[textSlowDownCount]) {
        var text = new Kiwi.GameObjects.TextField(context, GAME_CONFIG.LIMIT_VELOCITY_MAX_COUNT, context.game.stage.width / 2, 250, '#ffffff', 48, 'bold', 'monoscape');
        text.textAlign = Kiwi.GameObjects.TextField.TEXT_ALIGN_CENTER;
        this[textSlowDownCount] = text;
      }
      return this[textSlowDownCount];
    }
  }, {
    key: 'createSlowDown',
    value: function createSlowDown() {
      var context = GameState.instance.current;

      if (!this[textSlowDown]) {
        var text = new Kiwi.GameObjects.TextField(context, 'SLOW DOWN !!!', context.game.stage.width / 2, 200, '#ffffff', 48, 'bold', 'monospace');
        text.textAlign = Kiwi.GameObjects.TextField.TEXT_ALIGN_CENTER;
        this[textSlowDown] = text;
      }
      return this[textSlowDown];
    }
  }, {
    key: 'title',
    get: function get() {
      return this[textTitle];
    }
  }, {
    key: 'subTitle',
    get: function get() {
      return this[textSubTitle];
    }
  }, {
    key: 'start',
    get: function get() {
      return this[textStart];
    }
  }, {
    key: 'quit',
    get: function get() {
      return this[textQuit];
    }
  }, {
    key: 'slowDownCount',
    get: function get() {
      return this[textSlowDownCount];
    },
    set: function set(text) {
      this[textSlowDownCount].text = text;
    }
  }, {
    key: 'slowDown',
    get: function get() {
      return this[textSlowDown];
    }
  }]);

  return GameText;
})();

var starPool = Symbol();
var cubePool = Symbol();
var circlePool = Symbol();
var bulletPool = Symbol();
var cylinderPool = Symbol();
var myUnitSplinterPool = Symbol();
var rhombusSplinterPool = Symbol();
var rhombusPool = Symbol();
var explosionPool = Symbol();

var GroupPool = (function () {
  function GroupPool() {
    _classCallCheck(this, GroupPool);
  }

  _createClass(GroupPool, null, [{
    key: 'star',
    value: function star() {
      var context = GameState.instance.current;

      if (!this[starPool] || !this._isExistsContextName(this[starPool])) {
        this[starPool] = new Kiwi.Group(context);
      }
      return this[starPool];
    }
  }, {
    key: 'cube',
    value: function cube() {
      var context = GameState.instance.current;

      if (!this[cubePool] || !this._isExistsContextName(this[cubePool])) {
        this[cubePool] = new Kiwi.Group(context);
      }
      return this[cubePool];
    }
  }, {
    key: 'circle',
    value: function circle() {
      var context = GameState.instance.current;

      if (!this[circlePool] || !this._isExistsContextName(this[circlePool])) {
        this[circlePool] = new Kiwi.Group(context);
      }
      return this[circlePool];
    }
  }, {
    key: 'bullet',
    value: function bullet() {
      var context = GameState.instance.current;

      if (!this[bulletPool] || !this._isExistsContextName(this[bulletPool])) {
        this[bulletPool] = new Kiwi.Group(context);
      }
      return this[bulletPool];
    }
  }, {
    key: 'cylinder',
    value: function cylinder() {
      var context = GameState.instance.current;

      if (!this[cylinderPool] || !this._isExistsContextName(this[cylinderPool])) {
        this[cylinderPool] = new Kiwi.Group(context);
      }
      return this[cylinderPool];
    }
  }, {
    key: 'myUnitSplinter',
    value: function myUnitSplinter() {
      var context = GameState.instance.current;

      if (!this[myUnitSplinterPool] || !this._isExistsContextName(this[myUnitSplinterPool])) {
        this[myUnitSplinterPool] = new Kiwi.Group(context);
      }
      return this[myUnitSplinterPool];
    }
  }, {
    key: 'rhombusSplinter',
    value: function rhombusSplinter() {
      var context = GameState.instance.current;

      if (!this[rhombusSplinterPool] || !this._isExistsContextName(this[rhombusSplinterPool])) {
        this[rhombusSplinterPool] = new Kiwi.Group(context);
      }
      return this[rhombusSplinterPool];
    }
  }, {
    key: 'rhombus',
    value: function rhombus() {
      var context = GameState.instance.current;

      if (!this[rhombusPool] || !this._isExistsContextName(this[rhombusPool])) {
        this[rhombusPool] = new Kiwi.Group(context);
      }
      return this[rhombusPool];
    }
  }, {
    key: 'explosion',
    value: function explosion() {
      var context = GameState.instance.current;

      if (!this[explosionPool] || !this._isExistsContextName(this[explosionPool])) {
        this[explosionPool] = new Kiwi.Group(context);
      }
      return this[explosionPool];
    }
  }, {
    key: 'removeChildrenForAll',
    value: function removeChildrenForAll(context) {
      var star = GroupPool.star();
      var cube = GroupPool.cube();
      var circle = GroupPool.circle();
      var cylinder = GroupPool.cylinder();
      var bullet = GroupPool.bullet();
      var explosion = GroupPool.explosion();
      var rhombus = GroupPool.rhombus();

      star.removeChildren(0, star.members.length);
      cube.removeChildren(0, cube.members.length);
      circle.removeChildren(0, circle.members.length);
      cylinder.removeChildren(0, cylinder.members.length);
      bullet.removeChildren(0, bullet.members.length);
      explosion.removeChildren(0, explosion.members.length);
      rhombus.removeChildren(0, rhombus.members.length);
    }
  }, {
    key: 'forEachAll',
    value: function forEachAll() {
      GroupPool.forEachStar();
      GroupPool.forEachCube();
      GroupPool.forEachCylinder();
      GroupPool.forEachCircle();
      GroupPool.forEachBullet();
      GroupPool.forEachExplosion();
      GroupPool.forEachRhombusSplinter();
      GroupPool.forEachRhombus();
    }
  }, {
    key: 'forEachStar',
    value: function forEachStar() {
      var context = GameState.instance.current;
      var pool = GroupPool.star();

      pool.forEach(context, Helper.checkSpritePosition);
    }
  }, {
    key: 'forEachCube',
    value: function forEachCube() {
      var context = GameState.instance.current;
      var pool = GroupPool.cube();

      pool.forEach(context, function (cube) {
        Helper.updateSpriteRotation(cube, 5);
      });
      pool.forEach(context, Helper.checkSpritePosition);
    }
  }, {
    key: 'forEachCylinder',
    value: function forEachCylinder() {
      var context = GameState.instance.current;
      var pool = GroupPool.cylinder();

      pool.forEach(context, Helper.checkSpritePosition);
    }
  }, {
    key: 'forEachCircle',
    value: function forEachCircle() {
      var context = GameState.instance.current;
      var pool = GroupPool.circle();
      var myUnit = MyUnit.instance;

      pool.forEach(context, Helper.checkSpritePosition);
      pool.forEach(context, function (circle) {
        Helper.updateSpriteRotation(circle, 30);
      });
      pool.members.map(function (member) {
        myUnit.overlapOnOther(member);
      });
    }
  }, {
    key: 'forEachCircle',
    value: function forEachCircle() {
      var context = GameState.instance.current;
      var pool = GroupPool.circle();
      var myUnit = MyUnit.instance;

      pool.forEach(context, Helper.checkSpritePosition);
      pool.forEach(context, function (circle) {
        Helper.updateSpriteRotation(circle, 30);
      });
      pool.members.map(function (member) {
        myUnit.overlapOnOther(member);
      });
    }
  }, {
    key: 'forEachBullet',
    value: function forEachBullet() {
      var context = GameState.instance.current;
      var pool = GroupPool.bullet();

      pool.forEach(context, Helper.checkSpritePosition);
      pool.members.map(function (member) {
        CollisionDelection.BulletCollideWithCube(member);
        CollisionDelection.BulletCollideWithCircle(member);
        CollisionDelection.BulletCollideWithCylinder(member);
      });
    }
  }, {
    key: 'forEachExplosion',
    value: function forEachExplosion() {
      var context = GameState.instance.current;
      var pool = GroupPool.explosion();

      pool.members.map(function (member) {
        Explosion.isLastOfCellIndex(member);
      });
    }
  }, {
    key: 'forEachRhombusSplinter',
    value: function forEachRhombusSplinter() {
      var context = GameState.instance.current;
      var pool = GroupPool.rhombusSplinter();
      var myUnit = MyUnit.instance;

      pool.forEach(context, Helper.checkSpritePosition);
      pool.members.map(function (member) {
        myUnit.overlapOnOther(member);
      });
    }
  }, {
    key: 'forEachRhombus',
    value: function forEachRhombus() {
      var context = GameState.instance.current;
      var pool = GroupPool.rhombus();
      var myUnit = MyUnit.instance;

      pool.members.map(function (member) {
        myUnit.overlapOnOther(member);
      });
    }
  }, {
    key: '_isExistsContextName',
    value: function _isExistsContextName(group) {
      var context = GameState.instance.current;

      if (group === undefined || group.state === undefined) {
        return false;
      }

      if (group.state.config.name === context.config.name) {
        return true;
      } else {
        return false;
      }
    }
  }]);

  return GroupPool;
})();

var groupSingleton = Symbol();
var groupSingletonEnforcer = Symbol();

var Group = (function () {
  function Group(enforcer) {
    _classCallCheck(this, Group);

    if (enforcer !== groupSingletonEnforcer) {
      throw 'Cannot constructor singleton!';
    }
  }

  _createClass(Group, [{
    key: 'star',
    value: function star() {
      var context = GameState.instance.current;
      var pool = GroupPool.star();
      context.addChild(pool);

      var i = undefined;
      for (i = 0; i < GAME_CONFIG.NUMBER_OF_STAR; i++) {
        pool.addChild(StarGenerator.create(context, i));
      }
    }
  }, {
    key: 'cube',
    value: function cube() {
      var context = GameState.instance.current;
      var pool = GroupPool.cube();
      context.addChild(pool);

      var i = undefined;
      for (i = 0; i < GAME_CONFIG.NUMBER_OF_CUBE; i++) {
        pool.addChild(CubeGenerator.create(context, i));
      }
    }
  }, {
    key: 'circle',
    value: function circle() {
      var context = GameState.instance.current;
      var pool = GroupPool.circle();
      context.addChild(pool);

      var i = undefined;
      for (i = 0; i < GAME_CONFIG.NUMBER_OF_CIRCLE; i++) {
        pool.addChild(CircleGenerator.create(context, i));
      }
    }
  }, {
    key: 'bullet',
    value: function bullet() {
      var context = GameState.instance.current;
      var pool = GroupPool.bullet();
      context.addChild(pool);

      var i = undefined;
      for (i = 0; i < GAME_CONFIG.NUMBER_OF_BULLET; i++) {
        pool.addChild(BulletGenerator.create(context, i));
      }
    }
  }, {
    key: 'cylinder',
    value: function cylinder() {
      var context = GameState.instance.current;
      var pool = GroupPool.cylinder();
      context.addChild(pool);

      var i = undefined;
      for (i = 0; i < GAME_CONFIG.NUMBER_OF_CYLINDER; i++) {
        pool.addChild(CylinderGenerator.create(context, i));
      }
    }
  }, {
    key: 'myUnitSplinter',
    value: function myUnitSplinter() {
      var context = GameState.instance.current;
      var pool = GroupPool.myUnitSplinter();
      context.addChild(pool);

      var i = undefined;
      for (i = 0; i < GAME_CONFIG.NUMBER_OF_MYUNIT_SPLINTER; i++) {
        pool.addChild(MyUnitSplinterGenerator.create(context, i));
      }
    }
  }, {
    key: 'rhombusSplinter',
    value: function rhombusSplinter() {
      var context = GameState.instance.current;
      var pool = GroupPool.rhombusSplinter();
      context.addChild(pool);

      var i = undefined;
      for (i = 0; i < GAME_CONFIG.NUMBER_OF_RHOMBUS_SPLINTER; i++) {
        pool.addChild(RhombusSplinterGenerator.create(context, i));
      }
    }
  }, {
    key: 'rhombus',
    value: function rhombus() {
      var context = GameState.instance.current;
      var pool = GroupPool.rhombus();
      context.addChild(pool);

      var i = undefined;
      for (i = 0; i < GAME_CONFIG.NUMBER_OF_RHOMBUS; i++) {
        pool.addChild(RhombusGenerator.create(context, i));
      }
    }
  }, {
    key: 'explosion',
    value: function explosion() {
      var context = GameState.instance.current;
      context.addChild(GroupPool.explosion());
    }
  }], [{
    key: 'initialize',
    value: function initialize() {
      var group = Group.instance;
      group.star();
      group.cube();
      group.circle();
      group.bullet();
      group.cylinder();
      group.myUnitSplinter();
      group.rhombusSplinter();
      group.rhombus();
      group.explosion();
    }
  }, {
    key: 'instance',
    get: function get() {
      if (!this[groupSingleton]) {
        this[groupSingleton] = new Group(groupSingletonEnforcer);
      }
      return this[groupSingleton];
    }
  }]);

  return Group;
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

      var context = GameState.instance.current;

      var hud = new Kiwi.HUD.Widget.Bar(context.game, 0, GAME_CONFIG.LIMIT_VELOCITY, 50, 15, 700, 15, 'white');

      this._velocityBar = hud;

      return hud;
    }
  }, {
    key: 'createHitPointBar',
    value: function createHitPointBar() {
      if (this._hitPointBar) {
        return this._hitPointBar;
      }

      var context = GameState.instance.current;

      var hud = new Kiwi.HUD.Widget.Bar(context.game, GAME_COUNTER.hitPoint, GAME_CONFIG.LIMIT_HITPOINT, 50, 40, 700, 15, '#A9D0F5');

      this._hitPointBar = hud;

      return hud;
    }
  }, {
    key: 'createGameScoreCounter',
    value: function createGameScoreCounter() {
      if (this._gameScoreCounter) {
        return this._gameScoreCounter;
      }

      var context = GameState.instance.current;

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
      var context = GameState.instance.current;

      var myUnit = MyUnit.instance;

      var currentVelocityX = Math.abs(myUnit.sprite.physics.velocity.x);
      var currentVelocityY = Math.abs(myUnit.sprite.physics.velocity.y);

      this.velocityBar = currentVelocityX + currentVelocityY;

      this.gameScoreCounter = GAME_COUNTER.gameScore;
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
    key: 'initialize',
    value: function initialize() {
      var context = GameState.instance.current;
      var hud = HUD.instance;

      context.game.huds.defaultHUD.addWidget(hud.createVelocityBar());
      context.game.huds.defaultHUD.addWidget(hud.createHitPointBar());
      context.game.huds.defaultHUD.addWidget(hud.createGameScoreCounter());
    }
  }, {
    key: 'update',
    value: function update() {
      var hud = HUD.instance;
      hud.update();
    }
  }, {
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

var _gameStartKey = Symbol();
var _leftKey = Symbol();
var _rightKey = Symbol();
var _upKey = Symbol();
var _shootKey = Symbol();
var _exitKey = Symbol();
var _restartKey = Symbol();

var GameKey = (function () {
  function GameKey() {
    _classCallCheck(this, GameKey);
  }

  _createClass(GameKey, null, [{
    key: 'initializeOfPlay',
    value: function initializeOfPlay() {
      GameKey.leftKey();
      GameKey.rightKey();
      GameKey.upKey();
      GameKey.shootKey();
      GameKey.exitKey();
      GameKey.restartKey();
    }
  }, {
    key: 'initializeOfTitle',
    value: function initializeOfTitle() {
      GameKey.gameStartKey();
      GameKey.exitKey();
    }
  }, {
    key: 'gameStartKey',
    value: function gameStartKey() {
      var context = GameState.instance.current;

      if (!this[_gameStartKey]) {
        this[_gameStartKey] = context.game.input.keyboard.addKey(Kiwi.Input.Keycodes.SPACEBAR);
      }
      return this[_gameStartKey];
    }
  }, {
    key: 'activeGameStartKey',
    value: function activeGameStartKey() {
      return this[_gameStartKey].isDown;
    }
  }, {
    key: 'leftKey',
    value: function leftKey() {
      var context = GameState.instance.current;

      if (!this[_leftKey]) {
        this[_leftKey] = context.game.input.keyboard.addKey(Kiwi.Input.Keycodes.LEFT);
      }
      return this[_leftKey];
    }
  }, {
    key: 'activeLeftKey',
    value: function activeLeftKey() {
      return this[_leftKey].isDown;
    }
  }, {
    key: 'rightKey',
    value: function rightKey() {
      var context = GameState.instance.current;

      if (!this[_rightKey]) {
        this[_rightKey] = context.game.input.keyboard.addKey(Kiwi.Input.Keycodes.RIGHT);
      }
      return this[_rightKey];
    }
  }, {
    key: 'activeRightKey',
    value: function activeRightKey() {
      return this[_rightKey].isDown;
    }
  }, {
    key: 'upKey',
    value: function upKey() {
      var context = GameState.instance.current;

      if (!this[_upKey]) {
        this[_upKey] = context.game.input.keyboard.addKey(Kiwi.Input.Keycodes.UP);
      }
      return this[_upKey];
    }
  }, {
    key: 'activeUpKey',
    value: function activeUpKey() {
      return this[_upKey].isDown;
    }
  }, {
    key: 'shootKey',
    value: function shootKey() {
      var context = GameState.instance.current;

      if (!this[_shootKey]) {
        this[_shootKey] = context.game.input.keyboard.addKey(Kiwi.Input.Keycodes.Z);
      }
      return this[_shootKey];
    }
  }, {
    key: 'activeShootKey',
    value: function activeShootKey() {
      return this[_shootKey].isDown;
    }
  }, {
    key: 'exitKey',
    value: function exitKey() {
      var context = GameState.instance.current;

      if (!this[_exitKey]) {
        this[_exitKey] = context.game.input.keyboard.addKey(Kiwi.Input.Keycodes.ESC);
      }
      return this[_exitKey];
    }
  }, {
    key: 'activeExitKey',
    value: function activeExitKey() {
      return this[_exitKey].isDown;
    }
  }, {
    key: 'restartKey',
    value: function restartKey() {
      var context = GameState.instance.current;

      if (!this[_restartKey]) {
        this[_restartKey] = context.game.input.keyboard.addKey(Kiwi.Input.Keycodes.R);
      }
      return this[_restartKey];
    }
  }, {
    key: 'activeRestartKey',
    value: function activeRestartKey() {
      return this[_restartKey].isDown;
    }
  }]);

  return GameKey;
})();

var gameMusicContext = Symbol();
var musicMain = Symbol();
var musicGameOver = Symbol();
var soundEffectOfBullet = Symbol();
var soundEffectOfExplosion = Symbol();
var soundEffectOfCautionForSpeed = Symbol();
var soundEffectOfCircle = Symbol();
var soundEffectOfMyUnitExplosion = Symbol();

var GameMusic = (function () {
  function GameMusic() {
    _classCallCheck(this, GameMusic);
  }

  _createClass(GameMusic, null, [{
    key: 'initialize',
    value: function initialize() {
      GameMusic.main;
      GameMusic.gameOver;
      GameMusic.soundEffectOfBullet;
      GameMusic.soundEffectOfExplosion;
      GameMusic.soundEffectOfCautionForSpeed;
      GameMusic.soundEffectOfCircle;
      GameMusic.soundEffectOfMyUnitExplosion;
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      GameMusic.main.stop();
      GameMusic.main.destroy();
      GameMusic.soundEffectOfBullet.stop();
      GameMusic.soundEffectOfBullet.destroy();
      GameMusic.soundEffectOfExplosion.stop();
      GameMusic.soundEffectOfExplosion.destroy();
      GameMusic.soundEffectOfCautionForSpeed.stop();
      GameMusic.soundEffectOfCautionForSpeed.destroy();
    }
  }, {
    key: 'main',
    get: function get() {
      var context = GameState.instance.current;

      if (!this[musicMain]) {
        this[musicMain] = new Kiwi.Sound.Audio(context.game, 'musicMain', GAME_CONFIG.BASE_MUSIC_VOLUME_PER, true);
      }
      return this[musicMain];
    }
  }, {
    key: 'gameOver',
    get: function get() {
      var context = GameState.instance.current;

      if (!this[musicGameOver]) {
        this[musicGameOver] = new Kiwi.Sound.Audio(context.game, 'musicGameover', 1, false);
      }
      return this[musicGameOver];
    }
  }, {
    key: 'soundEffectOfBullet',
    get: function get() {
      var context = GameState.instance.current;

      if (!this[soundEffectOfBullet]) {
        this[soundEffectOfBullet] = new Kiwi.Sound.Audio(context.game, 'bullet-se', GAME_CONFIG.BASE_LASER_VOLUME_PER, false);
      }
      return this[soundEffectOfBullet];
    }
  }, {
    key: 'soundEffectOfExplosion',
    get: function get() {
      var context = GameState.instance.current;

      if (!this[soundEffectOfExplosion]) {
        this[soundEffectOfExplosion] = new Kiwi.Sound.Audio(context.game, 'explosion-se', GAME_CONFIG.BASE_EXPLOSION_VOLUME_PER, false);
      }
      return this[soundEffectOfExplosion];
    }
  }, {
    key: 'soundEffectOfCautionForSpeed',
    get: function get() {
      var context = GameState.instance.current;

      if (!this[soundEffectOfCautionForSpeed]) {
        this[soundEffectOfCautionForSpeed] = new Kiwi.Sound.Audio(context.game, 'caution-of-speed-se', GAME_CONFIG.BASE_CAUTION_VOLUME_PER, false);
      }
      return this[soundEffectOfCautionForSpeed];
    }
  }, {
    key: 'soundEffectOfCircle',
    get: function get() {
      var context = GameState.instance.current;

      if (!this[soundEffectOfCircle]) {
        this[soundEffectOfCircle] = new Kiwi.Sound.Audio(context.game, 'circle-se', GAME_CONFIG.BASE_CIRCLE_VOLUME_PER, false);
      }
      return this[soundEffectOfCircle];
    }
  }, {
    key: 'soundEffectOfMyUnitExplosion',
    get: function get() {
      var context = GameState.instance.current;

      if (!this[soundEffectOfMyUnitExplosion]) {
        this[soundEffectOfMyUnitExplosion] = new Kiwi.Sound.Audio(context.game, 'explosion-myunit-se', GAME_CONFIG.BASE_EXPLOSION_MYUNIT_VOLUME_PER, false);
      }
      return this[soundEffectOfMyUnitExplosion];
    }
  }]);

  return GameMusic;
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
      var context = GameState.instance.current;
      var myUnit = undefined;

      myUnit = new Kiwi.GameObjects.Sprite(context, context.textures.myUnit, 400, 300);

      myUnit.rotation = -Math.PI * 0.5;
      myUnit.physics = myUnit.components.add(new Kiwi.Components.ArcadePhysics(myUnit, myUnit.box));
      myUnit.physics.maxVelocity = GAME_CONFIG.MAX_SPEED;
      myUnit.physics.drag.x = GAME_CONFIG.DRAG;
      myUnit.physics.drag.y = GAME_CONFIG.DRAG;

      this.sprite = myUnit;

      return myUnit;
    }
  }, {
    key: 'overlapOnOther',
    value: function overlapOnOther(object) {
      var context = GameState.instance.current;
      var myUnit = this.sprite;

      var hud = HUD.instance;

      if (!context.contains(myUnit) || context.isGameOver) {
        return;
      }

      var isOverlap = myUnit.physics.overlaps(object);
      var isOverlapOfRhombus = isOverlap && object.name == 'rhombus';

      if (isOverlap && GAME_COUNTER.hitPoint >= 1) {
        Helper.revive(object);
        GAME_COUNTER.hitPoint--;
        hud.hitPointBar.counter.current--;
        GroupPool.explosion().addChild(Explosion.generate(myUnit.x, myUnit.y));
        GameMusic.soundEffectOfMyUnitExplosion.play();
      }

      if (isOverlapOfRhombus || GAME_COUNTER.hitPoint < 1) {
        GAME_COUNTER.hitPoint = 0;
        hud.hitPointBar.counter.current = 0;
        this.explosion();
      }
    }
  }, {
    key: 'explosion',
    value: function explosion() {
      var context = GameState.instance.current;

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
      if (GameOver.status) {
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
      var context = GameState.instance.current;
      var myUnit = this.sprite;

      if (context.myUnitExplosion !== undefined) {
        return;
      }

      if (GameKey.activeLeftKey()) {
        myUnit.physics.angularVelocity = -GAME_CONFIG.ROTATION_SPEED;
      } else if (GameKey.activeRightKey()) {
        myUnit.physics.angularVelocity = GAME_CONFIG.ROTATION_SPEED;
      } else {
        myUnit.physics.angularVelocity = 0;
      }
    }
  }, {
    key: '_watchOfStatusForVelocityKey',
    value: function _watchOfStatusForVelocityKey() {
      var context = GameState.instance.current;
      var myUnit = this.sprite;

      if (context.myUnitExplosion !== undefined) {
        return;
      }

      if (GameKey.activeUpKey()) {
        myUnit.physics.acceleration.x = Math.cos(myUnit.rotation) * GAME_CONFIG.ACCELERATION;
        myUnit.physics.acceleration.y = Math.sin(myUnit.rotation) * GAME_CONFIG.ACCELERATION;
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
      var context = GameState.instance.current;
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
      var context = GameState.instance.current;
      var myUnit = this.sprite;

      if (context.myUnitExplosion !== true) {
        myUnit.physics.acceleration.y += GAME_CONFIG.GRAVITY;
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
      var context = GameState.instance.current;
      var myUnit = this.sprite;
      var myUnitSplinterMembers = GroupPool.myUnitSplinter().members;
      var angleBase = parseInt(360 / GAME_CONFIG.NUMBER_OF_MYUNIT_SPLINTER);
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
      var context = GameState.instance.current;
      var myUnit = this.sprite;

      context.removeChild(myUnit);
    }
  }, {
    key: '_explosionSoundEffect',
    value: function _explosionSoundEffect() {
      GameMusic.soundEffectOfMyUnitExplosion.play();
    }
  }, {
    key: '_startCountUpOfExplosion',
    value: function _startCountUpOfExplosion() {
      var _this = this;

      var context = GameState.instance.current;

      context.game.time.clock.setInterval(function () {
        if (_this.exposionCounter < 2) {
          _this.explosionCounter += 1;
        } else {
          GameOver.execute(context);
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
    key: 'initialize',
    value: function initialize() {
      var context = GameState.instance.current;

      context.addChild(MyUnit.instance.create());
    }
  }, {
    key: 'update',
    value: function update() {
      MyUnit.instance.update();
    }
  }, {
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

var gameStateSingleton = Symbol();
var gameStateSingletonEnforcer = Symbol();
var gameStateCurrent = Symbol();
var gameStateTitle = Symbol();
var gameStatePlay = Symbol();

var GameState = (function () {
  function GameState(enforcer) {
    _classCallCheck(this, GameState);

    if (enforcer !== gameStateSingletonEnforcer) {
      throw 'Cannot construct singleton!';
    }
  }

  _createClass(GameState, [{
    key: 'current',
    get: function get() {
      return this[gameStateCurrent];
    },
    set: function set(value) {
      this[gameStateCurrent] = value;
    }
  }, {
    key: 'title',
    get: function get() {
      if (!this[gameStateTitle]) {
        this[gameStateTitle] = new Kiwi.State('Title');
      }
      return this[gameStateTitle];
    }
  }, {
    key: 'play',
    get: function get() {
      if (!this[gameStatePlay]) {
        this[gameStatePlay] = new Kiwi.State('Play');
      }
      return this[gameStatePlay];
    }
  }], [{
    key: 'instance',
    get: function get() {
      if (!this[gameStateSingleton]) {
        this[gameStateSingleton] = new GameState(gameStateSingletonEnforcer);
      }
      return this[gameStateSingleton];
    }
  }]);

  return GameState;
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
      var context = GameState.instance.current;

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
      var context = GameState.instance.current;

      var timers = [this.starTimer, this.cubeTimer, this.cylinderTimer, this.circleTimer, this.rhombusTimer, this.coutionSpeedSoundEffectTimer, this.overTheLimitVelocityCountTimer];

      timers.forEach(function (timer) {
        return context.game.time.clock.removeTimer(timer);
      });
    }
  }, {
    key: 'createStarTimer',
    value: function createStarTimer() {
      this.starTimer = this.setInterval(function () {
        TimerSpawnObjects.instance.star();
      }, 100);
    }
  }, {
    key: 'createCubeTimer',
    value: function createCubeTimer() {
      this.cubeTimer = this.setInterval(function () {
        TimerSpawnObjects.instance.cube();
      }, 200);
    }
  }, {
    key: 'createCylinderTimer',
    value: function createCylinderTimer() {
      this.cylinderTimer = this.setInterval(function () {
        TimerSpawnObjects.instance.cylinder();
      }, 100);
    }
  }, {
    key: 'createCircleTimer',
    value: function createCircleTimer() {
      this.circleTimer = this.setInterval(function () {
        TimerSpawnObjects.instance.circle();
      }, 500);
    }
  }, {
    key: 'createRhombusTimer',
    value: function createRhombusTimer() {
      this.rhombusTimer = this.setInterval(function () {
        TimerSpawnObjects.instance.rhombus();
      }, 100);
    }
  }, {
    key: 'createCoutionForSpeedSoundEffectTimer',
    value: function createCoutionForSpeedSoundEffectTimer() {
      this.coutionForSpeedSoundEffectTimer = this.setInterval(function () {
        TimerVelocity.instance.speedLimit();
      }, 500);
    }
  }, {
    key: 'createOverTheLimitVelocityCountTimer',
    value: function createOverTheLimitVelocityCountTimer() {
      this.overTheLimitVelocityCountTimer = this.setInterval(function () {
        TimerVelocity.instance.overTheLimitCount();
      }, 1000);
    }
  }], [{
    key: 'initialize',
    value: function initialize() {
      Timer.instance.createAllTimer();
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      Timer.instance.removeAllTimer();
    }
  }, {
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

var PlayState = (function () {
  function PlayState() {
    _classCallCheck(this, PlayState);
  }

  _createClass(PlayState, null, [{
    key: 'create',
    value: function create() {
      Kiwi.State.prototype.create.call(this);

      this.game.stage.color = GAME_CONFIG.STAGE_COLOR;

      GameState.instance.current = this;

      GameMusic.initialize();
      GameMusic.main.play();

      HUD.initialize();
      Group.initialize();
      MyUnit.initialize();
      GameKey.initializeOfPlay();
      Timer.initialize();
      GameText.createSlowDownCount();
      GameText.createSlowDown();
    }
  }, {
    key: 'preload',
    value: function preload() {
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
    }
  }, {
    key: 'update',
    value: function update() {
      Kiwi.State.prototype.update.call(this);
      var myUnit = MyUnit.instance;

      MyUnit.update();
      HUD.update();

      if (this.contains(myUnit.sprite) && GameKey.activeShootKey()) {
        Bullet.shoot();
      }

      GroupPool.forEachAll();

      if (GameOver.status) {
        if (GameKey.activeExitKey()) {
          ipc.sendSync('quit');
        }

        if (GameKey.activeRestartKey()) {
          window.location.reload(true);
        }
      }
    }
  }]);

  return PlayState;
})();

GameState.instance.play.create = PlayState.create;
GameState.instance.play.preload = PlayState.preload;
GameState.instance.play.update = PlayState.update;

var TitleState = (function () {
  function TitleState() {
    _classCallCheck(this, TitleState);
  }

  _createClass(TitleState, null, [{
    key: 'create',
    value: function create() {
      Kiwi.State.prototype.create.call(this);

      this.game.stage.color = GAME_CONFIG.STAGE_COLOR;

      GameState.instance.current = this;

      GameKey.initializeOfTitle();
      GameText.initializeOfTitle();
    }
  }, {
    key: 'preload',
    value: function preload() {
      Kiwi.State.prototype.preload.call(this);
    }
  }, {
    key: 'update',
    value: function update() {
      Kiwi.State.prototype.update.call(this);

      if (GameKey.activeGameStartKey()) {
        GameText.destroyOfTitle();
        this.game.states.switchState('Play');
      }

      if (GameKey.activeExitKey()) {
        ipc.sendSync('quit');
      }
    }
  }]);

  return TitleState;
})();

GameState.instance.title.create = TitleState.create;
GameState.instance.title.preload = TitleState.preload;
GameState.instance.title.update = TitleState.update;

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

      var context = GameState.instance.current;

      Helper.strewnSprite(Helper.getMember(GroupPool.circle().members), { y: context.game.stage.height }, { y: 2 }, function (sprite) {
        _this2._tweenOfCircle(context, sprite);
      });
    }
  }, {
    key: 'cube',
    value: function cube() {
      var context = GameState.instance.current;

      Helper.strewnSprite(Helper.getMember(GroupPool.cube().members), { y: context.game.stage.height }, { y: 5 });
    }
  }, {
    key: 'cylinder',
    value: function cylinder() {
      var context = GameState.instance.current;

      Helper.strewnSprite(Helper.getMember(GroupPool.cylinder().members), { y: context.game.stage.height }, { y: 10 });
    }
  }, {
    key: 'star',
    value: function star() {
      var context = GameState.instance.current;

      Helper.strewnSprite(Helper.getMember(GroupPool.star().members), { y: context.game.stage.height }, { y: 3 });
    }
  }, {
    key: 'rhombus',
    value: function rhombus() {
      var _this3 = this;

      var context = GameState.instance.current;

      if (context.isSpawnSpriteOfRhombusSplinter === undefined) {
        context.isSpawnSpriteOfRhombusSplinter = false;
      }

      if (parseInt(Math.random() * 100) === 0) {
        context.isSpawnSpriteOfRhombusSplinter = true;
      }

      if (context.isSpawnSpriteOfRhombusSplinter) {
        Helper.strewnSprite(Helper.getMember(GroupPool.rhombus().members), { y: context.game.stage.height / 2 - 32 }, { y: 1 }, function (sprite) {
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
      var rhombusSplinterMembers = GroupPool.rhombusSplinter().members;
      var angleBase = parseInt(360 / GAME_CONFIG.NUMBER_OF_RHOMBUS_SPLINTER);
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

      tween.to({ x: myUnit.sprite.x }, 1000, Kiwi.Animations.Tweens.Easing.Sinusoidal.Out, true);
      tween.start();
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
      var context = GameState.instance.current;

      var myUnit = MyUnit.instance;
      var hud = HUD.instance;

      if (hud.velocityBar.counter.current >= GAME_CONFIG.LIMIT_VELOCITY) {
        if (context.contains(GameText.slowDownCount)) {
          GameText.slowDownCount = GAME_CONFIG.LIMIT_VELOCITY_MAX_COUNT - this.overTheLimitVelocityCounter;
        }
        this.overTheLimitVelocityCounter += 1;
      } else {
        this.overTheLimitVelocityCounter = 0;
        GameText.slowDownCount = GAME_CONFIG.LIMIT_VELOCITY_MAX_COUNT;
      }

      if (this.overTheLimitVelocityCounter > GAME_CONFIG.LIMIT_VELOCITY_MAX_COUNT) {
        myUnit.explosion();
      }
    }
  }, {
    key: 'speedLimit',
    value: function speedLimit() {
      var context = GameState.instance.current;
      var hud = HUD.instance;

      if (hud.velocityBar.counter.current >= GAME_CONFIG.LIMIT_VELOCITY * 0.95) {
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

var game = new Kiwi.Game(GAME_CONFIG.CONTAINER_ID, GAME_CONFIG.NAME, null, gameOptions);
game.states.addState(GameState.instance.title);
game.states.addState(GameState.instance.play);

game.states.switchState('Title');