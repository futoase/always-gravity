'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Helper = (function () {
  function Helper() {
    _classCallCheck(this, Helper);
  }

  _createClass(Helper, null, [{
    key: 'getMember',

    /**
     * getMember() is return member from Pool.
     *
     * @return {Kiwi.GameObjects.Sprite}
     */
    value: function getMember(members) {
      return members[parseInt(Math.random() * (members.length - 1), 10)];
    }
  }, {
    key: 'strewnSprite',

    /**
     * strewnSprite() is set action to sprite.
     * option: if set of callback then running after main action.
     *
     * @param {Kiwi.GameObjects.Sprite} sprite
     * @param {Object} limit
     *   @param {Number} limit.y
     * @param {Object} acceleration
     *   @param {Number} acceleration.y
     * @param {function} cb
     * @param {Object} option
     *   @param {Boolean} option.revive
     */
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

    /**
     * revive() is revive function of sprite.
     */
    value: function revive(sprite) {
      sprite.y = -sprite.height;
      sprite.x = parseInt(Math.random() * 800, 10);
      sprite.physics.velocity.y = 0;
      sprite.physics.acceleration.y = 0;
      sprite.alive = true;
    }
  }, {
    key: 'checkSpritePosition',

    /**
     * checkSpritePosition() is observe of position the sprite.
     * Set the value of false against the sprite when of over limit of position.
     *
     * @param {Kiwi.GameState.Sprite} sprite
     */
    value: function checkSpritePosition(sprite) {
      if (sprite.x > this.game.stage.width || sprite.y > this.game.stage.height || sprite.x < 0 || sprite.y < 0) {
        sprite.alive = false;
      }
    }
  }, {
    key: 'updateSpriteRotation',

    /**
     * updateSpriteRotation() is update of rotation the sprite.
     *
     * @param {Kiwi.GameObjects.Sprite} sprite
     * @param {Number} rotate
     */
    value: function updateSpriteRotation(sprite, rotate) {
      var setRotate = undefined;

      if (rotate === null) {
        setRotate = 1;
      } else {
        setRotate = rotate;
      }

      sprite.transform.rotation += Kiwi.Utils.GameMath.degreesToRadians(setRotate);
    }
  }, {
    key: 'radian',

    /**
     * radian() is return a value of Radian.
     *
     * @param {Number} angle
     * @return {Number} Radian
     */
    value: function radian(angle) {
      return parseInt(angle, 10) * Math.PI / 180;
    }
  }, {
    key: 'addSprites',

    /**
     * addSprites() is settings of sprite onto State.
     *
     * @param {Kiwi.State} context
     * @param {Array} spriteSheets
     */
    value: function addSprites(context, spriteSheets) {
      spriteSheets.map(function (sprite) {
        context.addSpriteSheet(sprite.name, sprite.path, sprite.width, sprite.height);
      });
    }
  }, {
    key: 'addSound',

    /**
     * addSprites() is settings of sound onto State.
     *
     * @param {Kiwi.State} context
     * @param {Array} soundFiles
     */
    value: function addSound(context, soundFiles) {
      soundFiles.map(function (soundFile) {
        context.addAudio(soundFile.name, soundFile.path);
      });
    }
  }]);

  return Helper;
})();

var GameConfig = {};
var GameCounter = {};

// Disable output of Kiwi.Logger.
Kiwi.Log.display = false;

GameCounter.hitPoint = 5;
GameCounter.bullet = 0;
GameCounter.explosion = 0;
GameCounter.gameScore = 0;

GameConfig.init = {
  spawnSprite: {
    x: -100,
    y: -100
  }
};

GameConfig.kiwiOption = {
  width: 800,
  height: 600
};

GameConfig.setting = {
  CONTAINER_ID: 'game-container',
  NAME: 'Always Glavity',
  STAGE_COLOR: '010101',
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
  BASE_GAME_OVER_MUSIC_VOLUME_PER: 1.0,
  BASE_LASER_VOLUME_PER: 0.6,
  BASE_EXPLOSION_VOLUME_PER: 1.0,
  BASE_CAUTION_VOLUME_PER: 2.0,
  BASE_CIRCLE_VOLUME_PER: 1.0,
  BASE_EXPLOSION_MYUNIT_VOLUME_PER: 1.0
};

GameConfig.soundFiles = [
// PUBLIC DOMAIN
// http://opengameart.org/content/lo-fi-chiptune-glitch-dnb
{
  name: 'musicMain',
  path: './assets/media/old-broken-radio.mp3'
},
// CC-BY 3.0
// http://opengameart.org/content/jump-and-run-8-bit
{
  name: 'musicGameover',
  path: './assets/media/random-silly-chip-song.ogg'
},
// Sound Effect
{
  name: 'bullet-se',
  path: './assets/media/laser.wav'
}, {
  name: 'explosion-se',
  path: './assets/media/explosion.wav'
}, {
  name: 'explosion-myunit-se',
  path: './assets/media/myunit-explosion.wav'
}, {
  name: 'circle-se',
  path: './assets/media/circle.wav'
}, {
  name: 'caution-of-speed-se',
  path: './assets/media/caution-of-speed.wav'
}];

GameConfig.spriteSheets = [{
  name: 'myUnit',
  path: './assets/images/unit.png',
  width: 32,
  height: 32
}, {
  name: 'myUnitSplinter',
  path: './assets/images/my-unit-explosion.png',
  width: 32,
  height: 32
}, {
  name: 'star',
  path: './assets/images/star.png',
  width: 8,
  height: 8
}, {
  name: 'cube',
  path: './assets/images/cube.png',
  width: 32,
  height: 32
}, {
  name: 'cylinder',
  path: './assets/images/cylinder.png',
  width: 32,
  height: 128
}, {
  name: 'bullet',
  path: './assets/images/bullet.png',
  width: 4,
  height: 4
}, {
  name: 'explosion',
  path: './assets/images/explosion.png',
  width: 256,
  height: 256
}, {
  name: 'circle',
  path: './assets/images/circle.png',
  width: 32,
  height: 32
}, {
  name: 'rhombus',
  path: './assets/images/rhombus.png',
  width: 32,
  height: 32
}];

GameConfig.text = {
  title: {
    x: (function () {
      return GameConfig.kiwiOption.width / 2;
    })(),
    y: 200,
    text: 'Always Gravity',
    color: '#ffffff',
    size: 48,
    weight: 'bold',
    fontFamily: 'monospace'
  },
  subTitle: {
    x: (function () {
      return GameConfig.kiwiOption.width / 2;
    })(),
    y: 270,
    text: '常に重力',
    color: '#ffffff',
    size: 24,
    weight: 'bold',
    fontFamily: 'monospace'
  },
  start: {
    x: (function () {
      return GameConfig.kiwiOption.width / 2;
    })(),
    y: 320,
    text: 'START: SPACEBAR',
    color: '#ffffff',
    size: 20,
    weight: 'bold',
    fontFamily: 'monospace'
  },
  quit: {
    x: (function () {
      return GameConfig.kiwiOption.width / 2;
    })(),
    y: 350,
    text: 'QUIT: ESC',
    color: '#ffffff',
    size: 20,
    weight: 'bold',
    fontFamily: 'monospace'
  },
  exitGame: {
    x: (function () {
      return GameConfig.kiwiOption.width / 2;
    })(),
    y: 380,
    text: 'QUIT: ESC',
    color: '#ffffff',
    size: 20,
    weight: 'bold',
    fontFamily: 'monospace'
  },
  gameOver: {
    x: (function () {
      return GameConfig.kiwiOption.width / 2;
    })(),
    y: 200,
    text: 'GAME OVER',
    color: '#ffffff',
    size: 64,
    weight: 'bold',
    fontFamily: 'monospace'
  },
  restart: {
    x: (function () {
      return GameConfig.kiwiOption.width / 2;
    })(),
    y: 350,
    text: 'RESTART: R',
    color: '#ffffff',
    size: 20,
    weight: 'bold',
    fontFamily: 'monospace'
  },
  scoreResults: {
    x: (function () {
      return GameConfig.kiwiOption.width / 2;
    })(),
    y: 280,
    text: '',
    color: '#ffffff',
    size: 36,
    weight: 'bold',
    fontFamily: 'monospace'
  },
  slowDownCount: {
    x: (function () {
      return GameConfig.kiwiOption.width / 2;
    })(),
    y: 250,
    text: String(GameConfig.setting.LIMIT_VELOCITY_MAX_COUNT),
    color: '#ffffff',
    size: 48,
    weight: 'bold',
    fontFamily: 'monospace'
  },
  slowDown: {
    x: (function () {
      return GameConfig.kiwiOption.width / 2;
    })(),
    y: 200,
    text: 'SLOW DOWN !!!',
    color: '#ffffff',
    size: 48,
    weight: 'bold',
    fontFamily: 'monospace'
  }
};

var BulletGenerator = (function () {
  function BulletGenerator() {
    _classCallCheck(this, BulletGenerator);
  }

  _createClass(BulletGenerator, null, [{
    key: 'create',

    /**
     * create() is return of new sprite for Bullet.
     *
     * @param {Number} index
     * @return {Kiwi.GameObjects.Sprite} Bullet
     */
    value: function create(index) {
      var context = GameState.current;

      var bullet = new Kiwi.GameObjects.Sprite(context, context.textures.bullet, GameConfig.init.spawnSprite.x, GameConfig.init.spawnSprite.y);

      bullet.index = index;
      bullet.hitbox = new Kiwi.Geom.Rectangle(8, 8, 8, 8);
      bullet.anchorPointX = bullet.width * 0.5;
      bullet.anchorPointY = bullet.height * 0.5;
      bullet.physics = bullet.components.add(new Kiwi.Components.ArcadePhysics(bullet, bullet.box));
      bullet.alive = false;

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

    /**
     * create() is return of new sprite for Circle.
     *
     * @param {Number} index
     * @return {Kiwi.GameObjects.Sprite} Circle
     */
    value: function create(index) {
      var context = GameState.current;

      var circle = new Kiwi.GameObjects.Sprite(context, context.textures.circle, GameConfig.init.spawnSprite.x, GameConfig.init.spawnSprite.y);

      circle.index = index;
      circle.hitbox = new Kiwi.Geom.Rectangle(10, 0, 18, 18);
      circle.anchorPointX = circle.width * 0.5;
      circle.anchorPointY = circle.height * 0.5;
      circle.physics = circle.components.add(new Kiwi.Components.ArcadePhysics(circle, circle.box));
      circle.x = parseInt(Math.random() * GameConfig.kiwiOption.width, 10);
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

    /**
     * create() is return of new sprite for Cube.
     *
     * @param {Number} index
     * @return {Kiwi.GameObjects.Sprite} Cube
     */
    value: function create(index) {
      var context = GameState.current;

      var cube = new Kiwi.GameObjects.Sprite(context, context.textures.cube, GameConfig.init.spawnSprite.x, GameConfig.init.spawnSprite.y);

      cube.index = index;
      cube.hitbox = new Kiwi.Geom.Rectangle(10, 0, 20, 20);
      cube.anchorPointX = cube.width * 0.5;
      cube.anchorPointY = cube.height * 0.5;
      cube.physics = cube.components.add(new Kiwi.Components.ArcadePhysics(cube, cube.box));
      cube.x = parseInt(Math.random() * GameConfig.kiwiOption.width, 10);
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

    /**
     * create() is return of new sprite for Cylinder.
     *
     * @param {Number} index
     * @return {Kiwi.GameObjects.Sprite} Cylinder
     */
    value: function create(index) {
      var context = GameState.current;

      var cylinder = new Kiwi.GameObjects.Sprite(context, context.textures.cylinder, GameConfig.init.spawnSprite.x, GameConfig.init.spawnSprite.y);

      cylinder.index = index;
      cylinder.animation.add('cycle', [0, 1, 2, 3, 4, 5, 6, 7], 0.1, true);
      cylinder.animation.play('cycle');
      cylinder.hitbox = new Kiwi.Geom.Rectangle(0, 10, 30, 110);
      cylinder.anchorPointX = cylinder.x * 0.5;
      cylinder.anchorPointY = cylinder.y * 0.5;
      cylinder.physics = cylinder.components.add(new Kiwi.Components.ArcadePhysics(cylinder, cylinder.box));
      cylinder.x = parseInt(Math.random() * GameConfig.kiwiOption.width, 10);
      cylinder.y = -cylinder.height;
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

    /**
     * create() is return of new sprite for MyUnitSplinter.
     *
     * @param {Number} index
     * @return {Kiwi.GameObjects.Sprite} MyUnitSplinter
     */
    value: function create(index) {
      var context = GameState.current;

      var myUnitSplinter = new Kiwi.GameObjects.Sprite(context, context.textures.myUnitSplinter, GameConfig.init.spawnSprite.x, GameConfig.init.spawnSprite.y);

      myUnitSplinter.index = index;
      myUnitSplinter.animation.add('explosion', [0, 1, 2, 3, 4, 5], 0.05, true);
      myUnitSplinter.physics = myUnitSplinter.components.add(new Kiwi.Components.ArcadePhysics(myUnitSplinter, myUnitSplinter.box));

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

    /**
     * create() is return of new sprite for RhombusSplinter.
     *
     * @param {Number} index
     * @return {Kiwi.GameObjects.Sprite} RhombusSplinter
     */
    value: function create(index) {
      var context = GameState.current;

      var rhombusSplinter = new Kiwi.GameObjects.Sprite(context, context.textures.rhombus, GameConfig.init.spawnSprite.x, GameConfig.init.spawnSprite.y);

      rhombusSplinter.index = index;
      rhombusSplinter.physics = rhombusSplinter.components.add(new Kiwi.Components.ArcadePhysics(rhombusSplinter, rhombusSplinter.ox));

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

    /**
     * create() is return of new sprite for Rhombus.
     *
     * @param {Number} index
     * @return {Kiwi.GameObjects.Sprite} Rhombus
     */
    value: function create(index) {
      var context = GameState.current;

      var rhombus = new Kiwi.GameObjects.Sprite(context, context.textures.rhombus, GameConfig.init.spawnSprite.x, GameConfig.init.spawnSprite.y);

      rhombus.index = index;
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

    /**
     * create() is return of new sprite for Star.
     *
     * @param {Number} index
     * @return {Kiwi.GameObjects.Sprite} Star
     */
    value: function create(index) {
      var context = GameState.current;

      var star = new Kiwi.GameObjects.Sprite(context, context.textures.star, GameConfig.init.spawnSprite.x, GameConfig.init.spawnSprite.y);

      star.index = index;
      star.anchorPointX = star.width * 0.5;
      star.anchorPointY = star.height * 0.5;
      star.physics = star.components.add(new Kiwi.Components.ArcadePhysics(star, star.box));
      star.physics.acceleration.y = 1;
      star.x = parseInt(Math.random() * GameConfig.kiwiOption.width, 10);

      if (index < parseInt(GameConfig.setting.NUMBER_OF_STAR / 3, 10)) {
        star.y = parseInt(Math.random() * GameConfig.kiwiOption.height, 10);
      } else {
        star.y = -1 * parseInt(Math.random() * 200, 10);
      }

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

    /**
     * shoot() is create bullet.
     */
    value: function shoot() {
      var context = GameState.current;

      if (!this[lastBulletShootAt]) {
        this[lastBulletShootAt] = 0;
      }

      var lastShootTime = context.game.time.now() - this[lastBulletShootAt];

      if (lastShootTime < GameConfig.setting.SHOOT_DELAY) {
        return;
      }

      this[lastBulletShootAt] = context.game.time.now();

      var bullet = Bullet.getFirstDeadBullet();

      if (bullet === null) {
        return;
      }

      bullet.alive = true;

      var myUnit = MyUnit.instance;

      bullet.x = myUnit.sprite.x + myUnit.sprite.height * 0.5;
      bullet.y = myUnit.sprite.y + myUnit.sprite.width * 0.5;

      bullet.rotation = myUnit.sprite.rotation;

      bullet.physics.velocity.x = Math.cos(bullet.rotation) * GameConfig.setting.BULLET_SPEED;
      bullet.physics.velocity.y = Math.sin(bullet.rotation) * GameConfig.setting.BULLET_SPEED;

      GameMusic.soundEffectOfBullet.stop();
      GameMusic.soundEffectOfBullet.play();
    }
  }, {
    key: 'getFirstDeadBullet',

    /**
     * getFirstDeadBullet() a return is dead of bullet.
     *
     * @return {Kiwi.Sprite} bullet
     * @return {null} null
     */
    value: function getFirstDeadBullet() {
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

    /**
     * overlapOnObject()
     * Emit event will be collision of bullet from other sprite.
     */
    value: function overlapOnObject(bullet, object) {
      var volume = arguments[2] === undefined ? 1.0 : arguments[2];

      GroupPool.explosion().addChild(Explosion.generate(bullet.x, bullet.y));
      Bullet.deadBullet(bullet);
      Helper.revive(object);
      Bullet.playSoundEffectOfExplosion(volume);
      GameCounter.gameScore += object.score;
    }
  }, {
    key: 'deadBullet',

    /**
     * deadBullet() is initialize of position for bullet.
     *
     * @param {Kiwi.Sprite} bullet
     */
    value: function deadBullet(bullet) {
      bullet.x = -1000;
      bullet.y = -1000;
      bullet.alive = false;
    }
  }, {
    key: 'playSoundEffectOfExplosion',

    /**
     * playSoundEffectOfExplosion()
     * Play of Sound effect for the Explosion.
     *
     * @param {Number} volume
     */
    value: function playSoundEffectOfExplosion(volume) {
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
    key: 'bulletCollideWithCube',

    /**
     * BulletCollideWithCube()
     * Observe the collision bullet and cube.
     *
     * @param {Kiwi.Sprite} bullet
     */
    value: function bulletCollideWithCube(bullet) {
      var members = GroupPool.cube().members;

      members.map(function (member) {
        if (bullet.physics.overlaps(member)) {
          Bullet.overlapOnObject(bullet, member, 0.5);
        }
      });
    }
  }, {
    key: 'bulletCollideWithCircle',

    /**
     * BulletCollideWithCircle()
     * Observe the collision bullet and circle.
     *
     * @param {Kiwi.Sprite} bullet
     */
    value: function bulletCollideWithCircle(bullet) {
      var members = GroupPool.circle().members;

      members.map(function (member) {
        if (bullet.physics.overlaps(member)) {
          Bullet.overlapOnObject(bullet, member, 0.5);
        }
      });
    }
  }, {
    key: 'bulletCollideWithCylinder',

    /**
     * BulletCollideWithCylinder()
     * Observe the collision bullet and cylinder.
     *
     * @param {Kiwi.Sprite} bullet
     */
    value: function bulletCollideWithCylinder(bullet) {
      var members = GroupPool.cylinder().members;

      members.map(function (member) {
        if (bullet.physics.overlaps(member)) {
          Bullet.overlapOnObject(bullet, member, 0.6);
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

    /**
     * generate() is generate sprite of Explosion.
     *
     * @param {Number} baseX
     * @param {Number} baseY
     * @return {Kiwi.GameObjects.Sprite} explosion
     */
    value: function generate(baseX, baseY) {
      var context = GameState.current;

      var explosion = new Kiwi.GameObjects.Sprite(context, context.textures.explosion, baseX, baseY);

      explosion.x = parseInt(baseX - explosion.width * 0.5, 10);
      explosion.y = parseInt(baseY - explosion.height * 0.5, 10);

      explosion.animation.add('explosion', [0, 1, 2, 3], 0.1, true);
      explosion.animation.play('explosion');

      return explosion;
    }
  }, {
    key: 'isLastOfCellIndex',

    /**
     * isLastOfCellIndex()
     * Observe of last cell for sprite.
     * Destroy sprite when is over the cell index limit.
     *
     * @param {Kiwi.Gameobjects.Sprite} sprite
     */
    value: function isLastOfCellIndex(sprite) {
      if (sprite.cellIndex >= 3) {
        sprite.destroy();
      }
    }
  }]);

  return Explosion;
})();

var gameOverStatus = Symbol();

var GameOver = (function () {
  function GameOver() {
    _classCallCheck(this, GameOver);
  }

  _createClass(GameOver, null, [{
    key: 'execute',

    /**
     * execute() is execute of event for the GameOver!
     */
    value: function execute() {
      var context = GameState.current;

      if (GameOver.status) {
        return;
      }

      this._destroyObjects();

      GameMusic.gameOver.play();

      context.addChild(GameText.createGameOver());
      context.addChild(GameText.createScore(GameCounter.gameScore));
      context.addChild(GameText.createRestart());
      context.addChild(GameText.createExitGame());

      this.status = true;
    }
  }, {
    key: '_destroyObjects',

    /**
     * _destroyObjects() is remove objects of the PlayState.
     */
    value: function _destroyObjects() {
      var context = GameState.current;

      GroupPool.removeChildrenForAll();
      GameMusic.destroy();
      context.game.huds.defaultHUD.removeAllWidgets();
      Timer.destroy();

      MyUnit.instance.sprite.destroy();
    }
  }, {
    key: 'status',

    /**
     * Getter of GameOverStatus.
     *
     * @return {Boolean} GameOverStatus
     */
    get: function get() {
      return this[gameOverStatus];
    },

    /**
     * Setter of GameOverStatus.
     *
     * @param {Boolean} value
     */
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

    /**
     * initializeOfTitle() is settings of text for TitleState.
     */
    value: function initializeOfTitle() {
      var context = GameState.current;

      context.addChild(GameText.createTitle());
      context.addChild(GameText.createSubTitle());
      context.addChild(GameText.createStart());
      context.addChild(GameText.createQuit());
    }
  }, {
    key: 'destroyOfTitle',

    /**
     * destroyOfTitle() is remove of text for TitleState.
     */
    value: function destroyOfTitle() {
      var context = GameState.current;

      context.removeChild(GameText.title);
      context.removeChild(GameText.subTitle);
      context.removeChild(GameText.start);
      context.removeChild(GameText.quit);
    }
  }, {
    key: 'createTitle',

    /**
     * createTitle() is create text of Game Title.
     *
     * @return {Kiwi.GameObjects.TextField} textTitle
     */
    value: function createTitle() {
      var context = GameState.current;

      if (!this[textTitle]) {
        var text = this._createTextField(context, GameConfig.text.title);
        text.textAlign = Kiwi.GameObjects.TextField.TEXT_ALIGN_CENTER;
        this[textTitle] = text;
      }
      return this[textTitle];
    }
  }, {
    key: 'createSubTitle',

    /**
     * createSubTitle() is create text of Game Sub-Title.
     *
     * @return {Kiwi.GameObjects.TextField} textSubTitle
     */
    value: function createSubTitle() {
      var context = GameState.current;

      if (!this[textSubTitle]) {
        var text = this._createTextField(context, GameConfig.text.subTitle);
        text.textAlign = Kiwi.GameObjects.TextField.TEXT_ALIGN_CENTER;
        this[textSubTitle] = text;
      }
      return this[textSubTitle];
    }
  }, {
    key: 'createStart',

    /**
     * createStart() is create text of Start.
     *
     * @return {Kiwi.GameObjects.TextField} textStart
     */
    value: function createStart() {
      var context = GameState.current;

      if (!this[textStart]) {
        var text = this._createTextField(context, GameConfig.text.start);
        text.textAlign = Kiwi.GameObjects.TextField.TEXT_ALIGN_CENTER;
        this[textStart] = text;
      }
      return this[textStart];
    }
  }, {
    key: 'createQuit',

    /**
     * createQuit() is create text of Quit.
     *
     * @return {Kiwi.GameObjects.TextField} textQuit
     */
    value: function createQuit() {
      var context = GameState.current;

      if (!this[textQuit]) {
        var text = this._createTextField(context, GameConfig.text.quit);
        text.textAlign = Kiwi.GameObjects.TextField.TEXT_ALIGN_CENTER;
        this[textQuit] = text;
      }
      return this[textQuit];
    }
  }, {
    key: 'createExitGame',

    /**
     * createQuit() is create text of Quit.
     *
     * @return {Kiwi.GameObjects.TextField} textQuit
     */
    value: function createExitGame() {
      var context = GameState.current;

      if (!this[textExitGame]) {
        var text = this._createTextField(context, GameConfig.text.exitGame);
        text.textAlign = Kiwi.GameObjects.TextField.TEXT_ALIGN_CENTER;
        this[textExitGame] = text;
      }
      return this[textExitGame];
    }
  }, {
    key: 'createGameOver',

    /**
     * createGameOver() is create text of GAMEOVER.
     *
     * @return {Kiwi.GameObjects.TextField} textGameOver
     */
    value: function createGameOver() {
      var context = GameState.current;

      if (!this[textGameOver]) {
        var text = this._createTextField(context, GameConfig.text.gameOver);
        text.textAlign = Kiwi.GameObjects.TextField.TEXT_ALIGN_CENTER;
        this[textGameOver] = text;
      }
      return this[textGameOver];
    }
  }, {
    key: 'createRestart',

    /**
     * createRestart() is create text of Restart.
     *
     * @return {Kiwi.GameObjects.TextField} textRestart
     */
    value: function createRestart() {
      var context = GameState.current;

      if (!this[textRestart]) {
        var text = this._createTextField(context, GameConfig.text.restart);
        text.textAlign = Kiwi.GameObjects.TextField.TEXT_ALIGN_CENTER;
        this[textRestart] = text;
      }
      return this[textRestart];
    }
  }, {
    key: 'createScore',

    /**
     * createScore() is create text of score.
     *
     * @return {Kiwi.GameObjects.TextField} textScore
     */
    value: function createScore(score) {
      var context = GameState.current;

      if (!this[textScore]) {
        var text = this._createTextField(context, GameConfig.text.scoreResults);
        text.text = 'SCORE: ' + String(score);
        text.textAlign = Kiwi.GameObjects.TextField.TEXT_ALIGN_CENTER;
        this[textScore] = text;
      }
      return this[textScore];
    }
  }, {
    key: 'createSlowDownCount',

    /**
     * createSlowDownCount() is create text of counter for SlowDown.
     *
     * @return {Kiwi.GameObjects.TextField} textSlowDownCount
     */
    value: function createSlowDownCount() {
      var context = GameState.current;

      if (!this[textSlowDownCount]) {
        var text = this._createTextField(context, GameConfig.text.slowDownCount);
        text.textAlign = Kiwi.GameObjects.TextField.TEXT_ALIGN_CENTER;
        this[textSlowDownCount] = text;
      }
      return this[textSlowDownCount];
    }
  }, {
    key: 'createSlowDown',

    /**
     * createSlowDown() is create text of warning for the SlowDown!
     *
     * @return {Kiwi.GameObjects.TextField} textSlowDown
     */
    value: function createSlowDown() {
      var context = GameState.current;

      if (!this[textSlowDown]) {
        var text = this._createTextField(context, GameConfig.text.slowDown);
        text.textAlign = Kiwi.GameObjects.TextField.TEXT_ALIGN_CENTER;
        this[textSlowDown] = text;
      }
      return this[textSlowDown];
    }
  }, {
    key: '_createTextField',

    /**
     * _createTextField() is return a new TextField.
     *
     * @param {Kiwi.State} context
     * @param {Object} config
     * @return {Kiwi.GameObjects.TextField}
     */
    value: function _createTextField(context, config) {
      return new Kiwi.GameObjects.TextField(context, config.text, config.x, config.y, config.color, config.size, config.weight, config.fontFamily);
    }
  }, {
    key: 'title',

    /**
     * Getter of Title.
     *
     * @return {Kiwi.GameObjects.TextField} textTitle
     */
    get: function get() {
      return this[textTitle];
    }
  }, {
    key: 'subTitle',

    /**
     * Getter of Sub-Title.
     *
     * @return {Kiwi.GameObjects.TextField} textSubTitle
     */
    get: function get() {
      return this[textSubTitle];
    }
  }, {
    key: 'start',

    /**
     * Getter of Start.
     *
     * @return {Kiwi.GameObjects.TextField} textStart
     */
    get: function get() {
      return this[textStart];
    }
  }, {
    key: 'quit',

    /**
     * Getter of Quit.
     *
     * @return {Kiwi.GameObjects.TextField} textQuit
     */
    get: function get() {
      return this[textQuit];
    }
  }, {
    key: 'slowDownCount',

    /**
     * Getter of slowDownCount.
     *
     * @return {Kiwi.GameObjects.TextField} textSlowDownCount
     */
    get: function get() {
      return this[textSlowDownCount];
    },

    /**
     * Setter of slowDownCount.
     *
     * @param {String} text
     */
    set: function set(text) {
      this[textSlowDownCount].text = text;
    }
  }, {
    key: 'slowDown',

    /**
     * Getter of slowDown.
     *
     * @return {Kiwi.GameObjects.TextField} textSlowDown
     */
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

    /**
     * star() is create of GameGroup for star.
     *
     * @return {Kiwi.Group} starPool
     */
    value: function star() {
      if (!this[starPool] || !this._isExistsContextName(this[starPool])) {
        this[starPool] = this._createNewGroup();
      }
      return this[starPool];
    }
  }, {
    key: 'cube',

    /**
     * cube() is create of GameGroup for cube.
     *
     * @return {Kiwi.Group} cubePool
     */
    value: function cube() {
      if (!this[cubePool] || !this._isExistsContextName(this[cubePool])) {
        this[cubePool] = this._createNewGroup();
      }
      return this[cubePool];
    }
  }, {
    key: 'circle',

    /**
     * circle() is create of GameGroup for circle.
     *
     * @return {Kiwi.Group} circlePool
     */
    value: function circle() {
      if (!this[circlePool] || !this._isExistsContextName(this[circlePool])) {
        this[circlePool] = this._createNewGroup();
      }
      return this[circlePool];
    }
  }, {
    key: 'bullet',

    /**
     * bullet() is create of GameGroup for bullet.
     *
     * @return {Kiwi.Group} bulletPool
     */
    value: function bullet() {
      if (!this[bulletPool] || !this._isExistsContextName(this[bulletPool])) {
        this[bulletPool] = this._createNewGroup();
      }
      return this[bulletPool];
    }
  }, {
    key: 'cylinder',

    /**
     * cylinder() is create of GameGroup for cylinder.
     *
     * @return {Kiwi.Group} cylinderPool
     */
    value: function cylinder() {
      if (!this[cylinderPool] || !this._isExistsContextName(this[cylinderPool])) {
        this[cylinderPool] = this._createNewGroup();
      }
      return this[cylinderPool];
    }
  }, {
    key: 'myUnitSplinter',

    /**
     * myUnitSplinter() is create of GameGroup for myUnitSplinter.
     *
     * @return {Kiwi.Group} myUnitSplinterPool
     */
    value: function myUnitSplinter() {
      if (!this[myUnitSplinterPool] || !this._isExistsContextName(this[myUnitSplinterPool])) {
        this[myUnitSplinterPool] = this._createNewGroup();
      }
      return this[myUnitSplinterPool];
    }
  }, {
    key: 'rhombusSplinter',

    /**
     * rhombusSplinter() is create of GameGroup for rhombusSplinter.
     *
     * @return {Kiwi.Group} rhombusSplinterPool
     */
    value: function rhombusSplinter() {
      if (!this[rhombusSplinterPool] || !this._isExistsContextName(this[rhombusSplinterPool])) {
        this[rhombusSplinterPool] = this._createNewGroup();
      }
      return this[rhombusSplinterPool];
    }
  }, {
    key: 'rhombus',

    /**
     * rhombus() is create of GameGroup for rhombus.
     *
     * @return {Kiwi.Group} rhombusPool
     */
    value: function rhombus() {
      if (!this[rhombusPool] || !this._isExistsContextName(this[rhombusPool])) {
        this[rhombusPool] = this._createNewGroup();
      }
      return this[rhombusPool];
    }
  }, {
    key: 'explosion',

    /**
     * explosion() is create of GameGroup for explosion.
     *
     * @return {Kiwi.Group} explosionPool
     */
    value: function explosion() {
      if (!this[explosionPool] || !this._isExistsContextName(this[explosionPool])) {
        this[explosionPool] = this._createNewGroup();
      }
      return this[explosionPool];
    }
  }, {
    key: 'removeChildrenForAll',

    /**
     * removeChildrenForAll() is remove children on the Pools.
     */
    value: function removeChildrenForAll() {
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

    /**
     * forEachAll() is settings of the forEach on member for Pools.
     */
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

    /**
     * forEachStar() is function of forEach for starPool.
     */
    value: function forEachStar() {
      var context = GameState.current;
      var pool = GroupPool.star();

      pool.forEach(context, Helper.checkSpritePosition);
    }
  }, {
    key: 'forEachCube',

    /**
     * forEachCube() is function of forEach for cubePool.
     */
    value: function forEachCube() {
      var context = GameState.current;
      var pool = GroupPool.cube();

      pool.forEach(context, function (cube) {
        Helper.updateSpriteRotation(cube, 5);
      });
      pool.forEach(context, Helper.checkSpritePosition);
    }
  }, {
    key: 'forEachCylinder',

    /**
     * forEachCylinder() is function of forEach for cylinderPool.
     */
    value: function forEachCylinder() {
      var context = GameState.current;
      var pool = GroupPool.cylinder();

      pool.forEach(context, Helper.checkSpritePosition);
    }
  }, {
    key: 'forEachCircle',

    /**
     * forEachCircle() is function of forEach for circlePool.
     */
    value: function forEachCircle() {
      var context = GameState.current;
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

    /**
     * forEachBullet() is function of forEach for bulletPool.
     */
    value: function forEachBullet() {
      var context = GameState.current;
      var pool = GroupPool.bullet();

      pool.forEach(context, Helper.checkSpritePosition);
      pool.members.map(function (member) {
        CollisionDelection.bulletCollideWithCube(member);
        CollisionDelection.bulletCollideWithCircle(member);
        CollisionDelection.bulletCollideWithCylinder(member);
      });
    }
  }, {
    key: 'forEachExplosion',

    /**
     * forEachExplosion() is function of forEach for explosionPool.
     */
    value: function forEachExplosion() {
      var pool = GroupPool.explosion();

      pool.members.map(function (member) {
        Explosion.isLastOfCellIndex(member);
      });
    }
  }, {
    key: 'forEachRhombusSplinter',

    /**
     * forEachRhombusSplinter() is function of forEach for rhombusSplinterPool.
     */
    value: function forEachRhombusSplinter() {
      var context = GameState.current;
      var pool = GroupPool.rhombusSplinter();
      var myUnit = MyUnit.instance;

      pool.forEach(context, Helper.checkSpritePosition);
      pool.members.map(function (member) {
        myUnit.overlapOnOther(member);
      });
    }
  }, {
    key: 'forEachRhombus',

    /**
     * forEachRhombus() is function of forEach for rhombusPool.
     */
    value: function forEachRhombus() {
      var pool = GroupPool.rhombus();
      var myUnit = MyUnit.instance;

      pool.members.map(function (member) {
        myUnit.overlapOnOther(member);
      });
    }
  }, {
    key: '_isExistsContextName',

    /**
     * _isExistsContextName() is checked to be the existing group.
     */
    value: function _isExistsContextName(group) {
      var context = GameState.current;

      if (group === undefined || group.state === undefined) {
        return false;
      }

      if (group.state.config.name !== context.config.name) {
        return false;
      }

      return true;
    }
  }, {
    key: '_createNewGroup',

    /**
     * _createNewGroup() is return of new group for current context.
     *
     * @return {Kiwi.Group} group
     */
    value: function _createNewGroup() {
      var context = GameState.current;
      return new Kiwi.Group(context);
    }
  }]);

  return GroupPool;
})();

var groupSingleton = Symbol();
var groupSingletonEnforcer = Symbol();

var Group = (function () {

  /**
   * constructor for Group.
   *
   * @param {Symbol} enforcer
   */

  function Group(enforcer) {
    _classCallCheck(this, Group);

    if (enforcer !== groupSingletonEnforcer) {
      throw new Error('Cannot constructor singleton!');
    }
  }

  _createClass(Group, [{
    key: 'star',

    /**
     * star() is generate of sprite for star.
     */
    value: function star() {
      var context = GameState.current;
      var pool = GroupPool.star();
      context.addChild(pool);

      var i = undefined;
      for (i = 0; i < GameConfig.setting.NUMBER_OF_STAR; i++) {
        pool.addChild(StarGenerator.create(i));
      }
    }
  }, {
    key: 'cube',

    /**
     * cube() is generate of sprite for cube.
     */
    value: function cube() {
      var context = GameState.current;
      var pool = GroupPool.cube();
      context.addChild(pool);

      var i = undefined;
      for (i = 0; i < GameConfig.setting.NUMBER_OF_CUBE; i++) {
        pool.addChild(CubeGenerator.create(i));
      }
    }
  }, {
    key: 'circle',

    /**
     * circle() is generate of sprite for circle.
     */
    value: function circle() {
      var context = GameState.current;
      var pool = GroupPool.circle();
      context.addChild(pool);

      var i = undefined;
      for (i = 0; i < GameConfig.setting.NUMBER_OF_CIRCLE; i++) {
        pool.addChild(CircleGenerator.create(i));
      }
    }
  }, {
    key: 'bullet',

    /**
     * bullet() is generate of sprite for bullet.
     */
    value: function bullet() {
      var context = GameState.current;
      var pool = GroupPool.bullet();
      context.addChild(pool);

      var i = undefined;
      for (i = 0; i < GameConfig.setting.NUMBER_OF_BULLET; i++) {
        pool.addChild(BulletGenerator.create(i));
      }
    }
  }, {
    key: 'cylinder',

    /**
     * cylinder() is generate of sprite for cylinder.
     */
    value: function cylinder() {
      var context = GameState.current;
      var pool = GroupPool.cylinder();
      context.addChild(pool);

      var i = undefined;
      for (i = 0; i < GameConfig.setting.NUMBER_OF_CYLINDER; i++) {
        pool.addChild(CylinderGenerator.create(i));
      }
    }
  }, {
    key: 'myUnitSplinter',

    /**
     * myUnitSplinter() is generate of sprite for MyUnitSplinter.
     */
    value: function myUnitSplinter() {
      var context = GameState.current;
      var pool = GroupPool.myUnitSplinter();
      context.addChild(pool);

      var i = undefined;
      for (i = 0; i < GameConfig.setting.NUMBER_OF_MYUNIT_SPLINTER; i++) {
        pool.addChild(MyUnitSplinterGenerator.create(i));
      }
    }
  }, {
    key: 'rhombusSplinter',

    /**
     * rhombusSplinter() is generate of sprite for RhombusSplinter.
     */
    value: function rhombusSplinter() {
      var context = GameState.current;
      var pool = GroupPool.rhombusSplinter();
      context.addChild(pool);

      var i = undefined;
      for (i = 0; i < GameConfig.setting.NUMBER_OF_RHOMBUS_SPLINTER; i++) {
        pool.addChild(RhombusSplinterGenerator.create(i));
      }
    }
  }, {
    key: 'rhombus',

    /**
     * rhombus() is generate of sprite for Rhombus.
     */
    value: function rhombus() {
      var context = GameState.current;
      var pool = GroupPool.rhombus();
      context.addChild(pool);

      var i = undefined;
      for (i = 0; i < GameConfig.setting.NUMBER_OF_RHOMBUS; i++) {
        pool.addChild(RhombusGenerator.create(i));
      }
    }
  }, {
    key: 'explosion',

    /**
     * explosion() is generate of sprite for Explosion.
     */
    value: function explosion() {
      var context = GameState.current;
      context.addChild(GroupPool.explosion());
    }
  }], [{
    key: 'initialize',

    /**
     * initialize() is initialized groups for game.
     */
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

    /**
     * get() is return a instance of Group.
     *
     * @return {Group}
     */
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

  /**
   * constructor for HUD.
   *
   * @param {Symbol} enforcer
   */

  function HUD(enforcer) {
    _classCallCheck(this, HUD);

    if (enforcer !== hudSingletonEnforcer) {
      throw new Error('Cannot construct singleton!');
    }
  }

  _createClass(HUD, [{
    key: 'createVelocityBar',

    /**
     * createVelocityBar() is return of VelocityBar.
     *
     * @return {Kiwi.HUD.Widget.Bar} VelocityBar.
     */
    value: function createVelocityBar() {
      if (this._velocityBar) {
        return this._velocityBar;
      }

      var context = GameState.current;

      var hud = new Kiwi.HUD.Widget.Bar(context.game, 0, GameConfig.setting.LIMIT_VELOCITY, 50, 15, 700, 15, 'white');

      this._velocityBar = hud;

      return hud;
    }
  }, {
    key: 'createHitPointBar',

    /**
     * createHitPointBar() is return of HitPointBar.
     *
     * @return {Kiwi.HUD.Widget.Bar} HitPointBar.
     */
    value: function createHitPointBar() {
      if (this._hitPointBar) {
        return this._hitPointBar;
      }

      var context = GameState.current;

      var hud = new Kiwi.HUD.Widget.Bar(context.game, GameCounter.hitPoint, GameConfig.setting.LIMIT_HITPOINT, 50, 40, 700, 15, '#A9D0F5');

      this._hitPointBar = hud;

      return hud;
    }
  }, {
    key: 'createGameScoreCounter',

    /**
     * createGameScoreCounter() is return of GameScoreCounter.
     *
     * @return {Kiwi.HUD.Widget.TextField} GameScoreCounter.
     */
    value: function createGameScoreCounter() {
      if (this._gameScoreCounter) {
        return this._gameScoreCounter;
      }

      var context = GameState.current;

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

    /**
     * update() is update of current value for HUD widgets.
     */
    value: function update() {
      var myUnit = MyUnit.instance;

      var currentVelocityX = Math.abs(myUnit.sprite.physics.velocity.x);
      var currentVelocityY = Math.abs(myUnit.sprite.physics.velocity.y);

      this.velocityBar = currentVelocityX + currentVelocityY;

      this.gameScoreCounter = GameCounter.gameScore;
    }
  }, {
    key: 'velocityBar',

    /**
     * Getter of VelocityBar.
     *
     * return {Kiwi.HUD.Widget.Bar} this._velocityBar
     */
    get: function get() {
      return this._velocityBar;
    },

    /**
     * Setter of VelocityBar.
     *
     * @param {Number} value
     */
    set: function set(value) {
      if (this._velocityBar) {
        this._velocityBar.counter.current = value;
      }
    }
  }, {
    key: 'hitPointBar',

    /**
     * Getter of HitPointBar.
     *
     * return {Kiwi.HUD.Widget.Bar} this._hitPointBar
     */
    get: function get() {
      return this._hitPointBar;
    }
  }, {
    key: 'gameScoreCounter',

    /**
     * Getter of GameScoreCounter.
     *
     * return {Kiwi.HUD.Widget.TextField} this._gameScoreCounter
     */
    get: function get() {
      return this._gameScoreCounter;
    },

    /**
     * Getter of HitPointBar.
     *
     * return {Kiwi.HUD.Widget.TextField} this._hitPointBar
     */
    set: function set(value) {
      if (this._gameScoreCounter) {
        this._gameScoreCounter.text = value;
      }
    }
  }], [{
    key: 'initialize',

    /**
     * initialize() is create of HUD for the Game.
     */
    value: function initialize() {
      var context = GameState.current;
      var hud = HUD.instance;

      context.game.huds.defaultHUD.addWidget(hud.createVelocityBar());
      context.game.huds.defaultHUD.addWidget(hud.createHitPointBar());
      context.game.huds.defaultHUD.addWidget(hud.createGameScoreCounter());
    }
  }, {
    key: 'update',

    /**
     * update() is function of update for the HUD.
     */
    value: function update() {
      HUD.instance.update();
    }
  }, {
    key: 'instance',

    /**
     * get() is return a instance of HUD.
     *
     * @return {HUD}
     */
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

    /**
     * initializeOfPlay() is initialize of keys for PlayState.
     */
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

    /**
     * initializeOfTitle() is initialize of keys for TitleState.
     */
    value: function initializeOfTitle() {
      GameKey.gameStartKey();
      GameKey.exitKey();
    }
  }, {
    key: 'gameStartKey',

    /**
     * gameStartKey() is return new Game key for the Start.
     *
     * @return {Kiwi.Input.Key} gameStartKey
     */
    value: function gameStartKey() {
      if (!this[_gameStartKey]) {
        this[_gameStartKey] = this._getGameKey(Kiwi.Input.Keycodes.SPACEBAR);
      }
      return this[_gameStartKey];
    }
  }, {
    key: 'activeGameStartKey',

    /**
     * activeGameStartKey() is be check an active of gameStartKey.
     *
     * @return {Boolean} isDown
     */
    value: function activeGameStartKey() {
      return this[_gameStartKey].isDown;
    }
  }, {
    key: 'leftKey',

    /**
     * leftKey() is return new Game key for the Left.
     *
     * @return {Kiwi.Input.Key} leftKey
     */
    value: function leftKey() {
      if (!this[_leftKey]) {
        this[_leftKey] = this._getGameKey(Kiwi.Input.Keycodes.LEFT);
      }
      return this[_leftKey];
    }
  }, {
    key: 'activeLeftKey',

    /**
     * activeLeftKey() is be check an active of leftKey.
     *
     * @return {Boolean} isDown
     */
    value: function activeLeftKey() {
      return this[_leftKey].isDown;
    }
  }, {
    key: 'rightKey',

    /**
     * rightKey() is return new Game key for the Right.
     *
     * @return {Kiwi.Input.Key} rightKey
     */
    value: function rightKey() {
      if (!this[_rightKey]) {
        this[_rightKey] = this._getGameKey(Kiwi.Input.Keycodes.RIGHT);
      }
      return this[_rightKey];
    }
  }, {
    key: 'activeRightKey',

    /**
     * activeRightKey() is be check an active of rightKey.
     *
     * @return {Boolean} isDown
     */
    value: function activeRightKey() {
      return this[_rightKey].isDown;
    }
  }, {
    key: 'upKey',

    /**
     * upKey() is return new Game key for the Up.
     *
     * @return {Kiwi.Input.Key} upKey
     */
    value: function upKey() {
      if (!this[_upKey]) {
        this[_upKey] = this._getGameKey(Kiwi.Input.Keycodes.UP);
      }
      return this[_upKey];
    }
  }, {
    key: 'activeUpKey',

    /**
     * activeUpKey() is be check an active of upKey.
     *
     * @return {Boolean} isDown
     */
    value: function activeUpKey() {
      return this[_upKey].isDown;
    }
  }, {
    key: 'shootKey',

    /**
     * shootKey() is return new Game key for the Shoot.
     *
     * @return {Kiwi.Input.Key} shootKey
     */
    value: function shootKey() {
      if (!this[_shootKey]) {
        this[_shootKey] = this._getGameKey(Kiwi.Input.Keycodes.Z);
      }
      return this[_shootKey];
    }
  }, {
    key: 'activeShootKey',

    /**
     * activeShootKey() is be check an active of shootKey.
     *
     * @return {Boolean} isDown
     */
    value: function activeShootKey() {
      return this[_shootKey].isDown;
    }
  }, {
    key: 'exitKey',

    /**
     * exitKey() is return new Game key for the Exit.
     *
     * @return {Kiwi.Input.Key} exitKey
     */
    value: function exitKey() {
      if (!this[_exitKey]) {
        this[_exitKey] = this._getGameKey(Kiwi.Input.Keycodes.ESC);
      }
      return this[_exitKey];
    }
  }, {
    key: 'activeExitKey',

    /**
     * activeExitKey() is be check an active of exitKey.
     *
     * @return {Boolean} isDown
     */
    value: function activeExitKey() {
      return this[_exitKey].isDown;
    }
  }, {
    key: 'restartKey',

    /**
     * restartKey() is return new Game key for the Restart.
     *
     * @return {Kiwi.Input.Key} restartKey
     */
    value: function restartKey() {
      if (!this[_restartKey]) {
        this[_restartKey] = this._getGameKey(Kiwi.Input.Keycodes.R);
      }
      return this[_restartKey];
    }
  }, {
    key: 'activeRestartKey',

    /**
     * activeExitKey() is be check an active of exitKey.
     *
     * @return {Boolean} isDown
     */
    value: function activeRestartKey() {
      return this[_restartKey].isDown;
    }
  }, {
    key: '_getGameKey',

    /**
     * _getGameKey() is return new object of Kiwi.Input.Key.
     *
     * @return {Kiwi.Input.Key}
     */
    value: function _getGameKey(keycode) {
      var context = GameState.current;
      return context.game.input.keyboard.addKey(keycode);
    }
  }]);

  return GameKey;
})();

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
    key: 'destroy',

    /**
     * destroy() is remove all of musics for PlayState.
     */
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

    /**
     * Getter of main game music.
     *
     * @return {Kiwi.Sound.Audio} musicMain
     */
    get: function get() {
      var context = GameState.current;
      if (!this[musicMain]) {
        this[musicMain] = new Kiwi.Sound.Audio(context.game, 'musicMain', GameConfig.setting.BASE_MUSIC_VOLUME_PER, true);
      }
      return this[musicMain];
    }
  }, {
    key: 'gameOver',

    /**
     * Getter of game over music.
     *
     * @return {Kiwi.Sound.Audio} musicGameOver
     */
    get: function get() {
      var context = GameState.current;

      if (!this[musicGameOver]) {
        this[musicGameOver] = new Kiwi.Sound.Audio(context.game, 'musicGameover', GameConfig.setting.BASE_GAME_OVER_MUSIC_VOLUME_PER, false);
      }

      return this[musicGameOver];
    }
  }, {
    key: 'soundEffectOfBullet',

    /**
     * Getter of sound effect for bullet.
     *
     * @return {Kiwi.Sound.Audio} soundEffectOfBullet
     */
    get: function get() {
      var context = GameState.current;

      if (!this[soundEffectOfBullet]) {
        this[soundEffectOfBullet] = new Kiwi.Sound.Audio(context.game, 'bullet-se', GameConfig.setting.BASE_LASER_VOLUME_PER, false);
      }
      return this[soundEffectOfBullet];
    }
  }, {
    key: 'soundEffectOfExplosion',

    /**
     * Getter of sound effect for explosion.
     *
     * @return {Kiwi.Sound.Audio} soundEffectOfExplosion
     */
    get: function get() {
      var context = GameState.current;

      if (!this[soundEffectOfExplosion]) {
        this[soundEffectOfExplosion] = new Kiwi.Sound.Audio(context.game, 'explosion-se', GameConfig.setting.BASE_EXPLOSION_VOLUME_PER, false);
      }
      return this[soundEffectOfExplosion];
    }
  }, {
    key: 'soundEffectOfCautionForSpeed',

    /**
     * Getter of sound effect for caution for speed.
     *
     * @return {Kiwi.Sound.Audio} soundEffectOfCautionForSpeed
     */
    get: function get() {
      var context = GameState.current;

      if (!this[soundEffectOfCautionForSpeed]) {
        this[soundEffectOfCautionForSpeed] = new Kiwi.Sound.Audio(context.game, 'caution-of-speed-se', GameConfig.setting.BASE_CAUTION_VOLUME_PER, false);
      }
      return this[soundEffectOfCautionForSpeed];
    }
  }, {
    key: 'soundEffectOfCircle',

    /**
     * Getter of sound effect for circle.
     *
     * @return {Kiwi.Sound.Audio} soundEffectOfCircle
     */
    get: function get() {
      var context = GameState.current;

      if (!this[soundEffectOfCircle]) {
        this[soundEffectOfCircle] = new Kiwi.Sound.Audio(context.game, 'circle-se', GameConfig.setting.BASE_CIRCLE_VOLUME_PER, false);
      }
      return this[soundEffectOfCircle];
    }
  }, {
    key: 'soundEffectOfMyUnitExplosion',

    /**
     * Getter of sound effect for my unit explosion.
     *
     * @return {Kiwi.Sound.Audio} soundEffectOfMyUnitExplosion
     */
    get: function get() {
      var context = GameState.current;

      if (!this[soundEffectOfMyUnitExplosion]) {
        this[soundEffectOfMyUnitExplosion] = new Kiwi.Sound.Audio(context.game, 'explosion-myunit-se', GameConfig.setting.BASE_EXPLOSION_MYUNIT_VOLUME_PER, false);
      }
      return this[soundEffectOfMyUnitExplosion];
    }
  }]);

  return GameMusic;
})();

var myUnitSingleton = Symbol();
var myUnitSingletonEnforcer = Symbol();

var MyUnit = (function () {

  /**
   * constructor for MyUnit.
   *
   * @param {Symbol} enforcer
   */

  function MyUnit(enforcer) {
    _classCallCheck(this, MyUnit);

    if (enforcer !== myUnitSingletonEnforcer) {
      throw new Error('Cannot construct singleton!');
    }
  }

  _createClass(MyUnit, [{
    key: 'create',

    /**
     * create() is return a new sprite of MyUnit.
     *
     * @return {Kiwi.GameObjects.Sprite} MyUnit
     */
    value: function create() {
      var context = GameState.current;

      var myUnit = new Kiwi.GameObjects.Sprite(context, context.textures.myUnit, 400, 300);

      myUnit.rotation = -Math.PI * 0.5;
      myUnit.physics = myUnit.components.add(new Kiwi.Components.ArcadePhysics(myUnit, myUnit.box));
      myUnit.physics.maxVelocity = GameConfig.setting.MAX_SPEED;
      myUnit.physics.drag.x = GameConfig.setting.DRAG;
      myUnit.physics.drag.y = GameConfig.setting.DRAG;

      this.sprite = myUnit;

      return myUnit;
    }
  }, {
    key: 'overlapOnOther',

    /**
     * overlapOnOther() is observe of collision for sprite onto MyUnit.
     *
     * @param {Kiwi.GameObjects.Sprite} object
     */
    value: function overlapOnOther(object) {
      var context = GameState.current;
      var myUnit = this.sprite;

      var hud = HUD.instance;

      if (!context.contains(myUnit) || context.isGameOver) {
        return;
      }

      var isOverlap = myUnit.physics.overlaps(object);
      var isOverlapOfRhombus = isOverlap && object.name === 'rhombus';

      if (isOverlap && GameCounter.hitPoint >= 1) {
        Helper.revive(object);
        GameCounter.hitPoint--;
        hud.hitPointBar.counter.current--;
        GroupPool.explosion().addChild(Explosion.generate(myUnit.x, myUnit.y));
        GameMusic.soundEffectOfMyUnitExplosion.play();
      }

      if (isOverlapOfRhombus || GameCounter.hitPoint < 1) {
        GameCounter.hitPoint = 0;
        hud.hitPointBar.counter.current = 0;
        this.explosion();
      }
    }
  }, {
    key: 'explosion',

    /**
     * explosion() is explode the MyUnit.
     */
    value: function explosion() {
      var context = GameState.current;

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

    /**
     * update() is update of method for MyUnit.
     */
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

    /**
     * _watchOfStatusForKeys() is observe of status for keys.
     */
    value: function _watchOfStatusForKeys() {
      this._watchOfStatusForRotationKeys();
      this._watchOfStatusForVelocityKey();
    }
  }, {
    key: '_watchOfStatusForRotationKeys',

    /**
     * _watchOfStatusForRotationKeys() is update of rotation for the MyUnit.
     */
    value: function _watchOfStatusForRotationKeys() {
      var context = GameState.current;
      var myUnit = this.sprite;

      if (context.myUnitExplosion !== undefined) {
        return;
      }

      if (GameKey.activeLeftKey()) {
        myUnit.physics.angularVelocity = -GameConfig.setting.ROTATION_SPEED;
      } else if (GameKey.activeRightKey()) {
        myUnit.physics.angularVelocity = GameConfig.setting.ROTATION_SPEED;
      } else {
        myUnit.physics.angularVelocity = 0;
      }
    }
  }, {
    key: '_watchOfStatusForVelocityKey',

    /**
     * _watchOfStatusForRotationKeys() is update of velocity for the MyUnit.
     */
    value: function _watchOfStatusForVelocityKey() {
      var context = GameState.current;
      var myUnit = this.sprite;

      if (context.myUnitExplosion !== undefined) {
        return;
      }

      if (GameKey.activeUpKey()) {
        myUnit.physics.acceleration.x = Math.cos(myUnit.rotation) * GameConfig.setting.ACCELERATION;
        myUnit.physics.acceleration.y = Math.sin(myUnit.rotation) * GameConfig.setting.ACCELERATION;
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

    /**
     * checkPosition() is watching of current position for MyUnit.
     * if over limit of position on stage, then initialize the position of MyUnit.
     */
    value: function _checkPosition() {
      var context = GameState.current;
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

    /**
     * _updateGravity() is each time the update acceleration of MyUnit.
     */
    value: function _updateGravity() {
      var context = GameState.current;
      var myUnit = this.sprite;

      if (context.myUnitExplosion !== true) {
        myUnit.physics.acceleration.y += GameConfig.setting.GRAVITY;
      }
    }
  }, {
    key: '_prop',

    /**
     * _prop() is initialize position of MyUnit.
     */
    value: function _prop() {
      var myUnit = this.sprite;

      myUnit.physics.acceleration.x = 0;
      myUnit.physics.acceleration.y = 0;
      myUnit.physics.velocity.x = 0;
      myUnit.physics.velocity.y = 0;
    }
  }, {
    key: '_createMyUnitSplinter',

    /**
     * _createMyUnitSplinter() is create the new sprite of MyUnitSplinter.
     */
    value: function _createMyUnitSplinter() {
      var myUnit = this.sprite;
      var myUnitSplinterMembers = GroupPool.myUnitSplinter().members;
      var angleBase = parseInt(360 / GameConfig.setting.NUMBER_OF_MYUNIT_SPLINTER, 10);
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

    /**
     * _remove() is remove of MyUnit from the stage.
     */
    value: function _remove() {
      var context = GameState.current;
      var myUnit = this.sprite;

      context.removeChild(myUnit);
    }
  }, {
    key: '_explosionSoundEffect',

    /**
     * _explosionSoundEffect() is play of sound effect for explosion.
     */
    value: function _explosionSoundEffect() {
      GameMusic.soundEffectOfMyUnitExplosion.play();
    }
  }, {
    key: '_startCountUpOfExplosion',

    /**
     * _startCountUpOfExplosion() is create animation ticker of explosion.
     */
    value: function _startCountUpOfExplosion() {
      var _this = this;

      var context = GameState.current;

      context.game.time.clock.setInterval(function () {
        if (_this.exposionCounter < 2) {
          _this.explosionCounter += 1;
        } else {
          GameOver.execute();
        }
      }, 1000, context);
    }
  }, {
    key: 'sprite',

    /**
     * Getter of Sprite for MyUnit.
     *
     * @return {Kiwi.GameObjects.Sprite}
     */
    get: function get() {
      return this._sprite;
    },

    /**
     * Getter of Sprite for MyUnit.
     *
     * @param {Kiwi.GameObjects.Sprite} value
     */
    set: function set(value) {
      this._sprite = value;
    }
  }, {
    key: 'explosionCounter',

    /**
     * Getter of counter for Explosion.
     *
     * @return {Number}
     */
    get: function get() {
      if (this._explosionCounter === undefined) {
        this._explosionCounter = 0;
      }
      return this._explosionCounter;
    },

    /**
     * Setter of counter for Explosion.
     *
     * @param {Number} value
     */
    set: function set(value) {
      this._explosionCounter = value;
    }
  }], [{
    key: 'initialize',

    /**
     * initialize() is setting the MyUnit for current state.
     */
    value: function initialize() {
      var context = GameState.current;

      context.addChild(MyUnit.instance.create());
    }
  }, {
    key: 'update',

    /**
     * update() is call update method of MyUnit.
     */
    value: function update() {
      MyUnit.instance.update();
    }
  }, {
    key: 'instance',

    /**
     * get() is return a instance of MyUnit.
     *
     * @return {MyUnit}
     */
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

  /**
   * constructor for GameState.
   *
   * @param {Symbol} enforcer
   */

  function GameState(enforcer) {
    _classCallCheck(this, GameState);

    if (enforcer !== gameStateSingletonEnforcer) {
      throw new Error('Cannot construct singleton!');
    }
  }

  _createClass(GameState, [{
    key: 'current',

    /**
     * Getter of current GameState
     *
     * @return {Kiwi.State} gameStateCurrent
     */
    get: function get() {
      return this[gameStateCurrent];
    },

    /**
     * Setter of current GameState
     *
     * @param {Kiwi.State} value
     */
    set: function set(value) {
      this[gameStateCurrent] = value;
    }
  }, {
    key: 'title',

    /**
     * Getter of TitleState.
     *
     * @return {Kiwi.State} TitleState
     */
    get: function get() {
      if (!this[gameStateTitle]) {
        this[gameStateTitle] = new Kiwi.State('Title');
      }
      return this[gameStateTitle];
    }
  }, {
    key: 'play',

    /**
     * Getter of PlayState.
     *
     * @return {Kiwi.State} PlayState
     */
    get: function get() {
      if (!this[gameStatePlay]) {
        this[gameStatePlay] = new Kiwi.State('Play');
      }
      return this[gameStatePlay];
    }
  }], [{
    key: 'instance',

    /**
     * get() is return a instance of GameState.
     *
     * @return {GameState}
     */
    get: function get() {
      if (!this[gameStateSingleton]) {
        this[gameStateSingleton] = new GameState(gameStateSingletonEnforcer);
      }
      return this[gameStateSingleton];
    }
  }, {
    key: 'current',

    /**
     * current() is return of GameState.instance.current.
     */
    get: function get() {
      return GameState.instance.current;
    }
  }]);

  return GameState;
})();

var timerSingleton = Symbol();
var timerSingletonEnforcer = Symbol();

var Timer = (function () {

  /**
   * constructor for Timer.
   *
   * @param {Symbol} enforcer
   */

  function Timer(enforcer) {
    _classCallCheck(this, Timer);

    if (enforcer !== timerSingletonEnforcer) {
      throw new Error('Cannot construct singleton!');
    }
  }

  _createClass(Timer, [{
    key: 'setInterval',

    /**
     * setInterval() is wrap method of game.time.clock.setInterval.
     *
     * @return {Kiwi.Time.Timer}
     */
    value: function setInterval(callback, milliseconds) {
      var context = GameState.current;

      return context.game.time.clock.setInterval(callback, milliseconds, context);
    }
  }, {
    key: 'createAllTimer',

    /**
     * createAllTimer() is call of methods the create of all timer for game.
     */
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

    /**
     * removeAllTimer() is call of methods the remove of all timer for game.
     */
    value: function removeAllTimer() {
      var context = GameState.current;

      var timers = [this.starTimer, this.cubeTimer, this.cylinderTimer, this.circleTimer, this.rhombusTimer, this.coutionSpeedSoundEffectTimer, this.overTheLimitVelocityCountTimer];

      timers.forEach(function (timer) {
        context.game.time.clock.removeTimer(timer);
      });
    }
  }, {
    key: 'createStarTimer',

    /**
     * createStarTimer() is create of new timer for star.
     */
    value: function createStarTimer() {
      this.starTimer = this.setInterval(function () {
        TimerSpawnObjects.instance.star();
      }, 100);
    }
  }, {
    key: 'createCubeTimer',

    /**
     * createCubeTimer() is create of new timer for cube.
     */
    value: function createCubeTimer() {
      this.cubeTimer = this.setInterval(function () {
        TimerSpawnObjects.instance.cube();
      }, 200);
    }
  }, {
    key: 'createCylinderTimer',

    /**
     * createCylinderTimer() is create of new timer for cylinder.
     */
    value: function createCylinderTimer() {
      this.cylinderTimer = this.setInterval(function () {
        TimerSpawnObjects.instance.cylinder();
      }, 100);
    }
  }, {
    key: 'createCircleTimer',

    /**
     * createCircleTimer() is create of new timer for circle.
     */
    value: function createCircleTimer() {
      this.circleTimer = this.setInterval(function () {
        TimerSpawnObjects.instance.circle();
      }, 500);
    }
  }, {
    key: 'createRhombusTimer',

    /**
     * createRhombusTimer() is create of new timer for rhombus.
     */
    value: function createRhombusTimer() {
      this.rhombusTimer = this.setInterval(function () {
        TimerSpawnObjects.instance.rhombus();
      }, 100);
    }
  }, {
    key: 'createCoutionForSpeedSoundEffectTimer',

    /**
     * createCoutionForSpeedSoundEffectTimer()
     * is create of new timer for sound effect of caution.
     */
    value: function createCoutionForSpeedSoundEffectTimer() {
      this.coutionForSpeedSoundEffectTimer = this.setInterval(function () {
        TimerVelocity.instance.speedLimit();
      }, 500);
    }
  }, {
    key: 'createOverTheLimitVelocityCountTimer',

    /**
     * createOverTheLimitVelocityCountTimer()
     * is create of new timer for sound effect of over the limit the velocity.
     */
    value: function createOverTheLimitVelocityCountTimer() {
      this.overTheLimitVelocityCountTimer = this.setInterval(function () {
        TimerVelocity.instance.overTheLimitCount();
      }, 1000);
    }
  }], [{
    key: 'initialize',

    /**
     * initialize() is initialize of all timer for game.
     */
    value: function initialize() {
      Timer.instance.createAllTimer();
    }
  }, {
    key: 'destroy',

    /**
     * destroy() is destroy of all timer for game.
     */
    value: function destroy() {
      Timer.instance.removeAllTimer();
    }
  }, {
    key: 'instance',

    /**
     * get() is return a instance of Timer.
     *
     * @return {Timer}
     */
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

  /**
   * constructor for TimerSpawnObjects.
   *
   * @param {Symbol} enforcer
   */

  function TimerSpawnObjects(enforcer) {
    _classCallCheck(this, TimerSpawnObjects);

    if (enforcer !== timerSpawnObjectsSingletonEnforcer) {
      throw new Error('Cannot construct singleton!');
    }
  }

  _createClass(TimerSpawnObjects, [{
    key: 'circle',

    /**
     * circle() is spawn object of circle.
     */
    value: function circle() {
      var _this2 = this;

      var context = GameState.current;

      Helper.strewnSprite(Helper.getMember(GroupPool.circle().members), { y: context.game.stage.height }, { y: 2 }, function (sprite) {
        _this2._tweenOfCircle(context, sprite);
      });
    }
  }, {
    key: 'cube',

    /**
     * cube() is spawn object of cube.
     */
    value: function cube() {
      var context = GameState.current;

      Helper.strewnSprite(Helper.getMember(GroupPool.cube().members), { y: context.game.stage.height }, { y: 5 });
    }
  }, {
    key: 'cylinder',

    /**
     * cylinder() is spawn object of cylinder.
     */
    value: function cylinder() {
      var context = GameState.current;

      Helper.strewnSprite(Helper.getMember(GroupPool.cylinder().members), { y: context.game.stage.height }, { y: 10 });
    }
  }, {
    key: 'star',

    /**
     * star() is spawn object of star.
     */
    value: function star() {
      var context = GameState.current;

      Helper.strewnSprite(Helper.getMember(GroupPool.star().members), { y: context.game.stage.height }, { y: 3 });
    }
  }, {
    key: 'rhombus',

    /**
     * rhombus() is spawn object of rhombus.
     */
    value: function rhombus() {
      var _this3 = this;

      var context = GameState.current;

      if (context.isSpawnSpriteOfRhombusSplinter === undefined) {
        context.isSpawnSpriteOfRhombusSplinter = false;
      }

      if (parseInt(Math.random() * 100, 10) === 0) {
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

    /**
     * _scaleUpRhombus a scale up of size for rhombus.
     *
     * @param {Kiwi.State} context
     * @param {Kiwi.GameObjects.Sprite} sprite
     */
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

    /**
     * _explosionRhombus a new create of rhombus.
     *
     * @param {Kiwi.State} context
     * @param {Kiwi.GameObjects.Sprite} sprite
     */
    value: function _explosionRhombus(context, sprite) {
      var rhombusSplinterMembers = GroupPool.rhombusSplinter().members;
      var angleBase = parseInt(360 / GameConfig.setting.NUMBER_OF_RHOMBUS_SPLINTER, 10);
      var rhombusSplinterAngle = 0;

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

    /**
     * _scaleDownRhombus a scale down of size for rhombus.
     *
     * @param {Kiwi.State} context
     * @param {Kiwi.GameObjects.Sprite} sprite
     */
    value: function _scaleDownRhombus(context, sprite) {
      sprite.scaleX = 1;
      sprite.scaleY = 1;
      Helper.revive(sprite);
      context.isSpawnSpinterOfRhombusSplinter = false;
    }
  }, {
    key: '_tweenOfCircle',

    /**
     * _tweenOfCircle is added of tween action to the circle.
     *
     * @param {Kiwi.State} context
     * @param {Kiwi.GameObjects.Sprite} sprite
     */
    value: function _tweenOfCircle(context, sprite) {
      var tween = context.game.tweens.create(sprite);
      var myUnit = MyUnit.instance;

      tween.to({ x: myUnit.sprite.x }, 1000, Kiwi.Animations.Tweens.Easing.Sinusoidal.Out, true);
      tween.start();
    }
  }], [{
    key: 'instance',

    /**
     * get() is return a instance of TimerSpawnObjects.
     *
     * @return {TimerSpawnObjects}
     */
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

  /**
   * constructor for TimerVelocity.
   *
   * @param {Symbol} enforcer
   */

  function TimerVelocity(enforcer) {
    _classCallCheck(this, TimerVelocity);

    if (enforcer !== timerVelocitySingletonEnforcer) {
      throw new Error('Cannot construct singleton!');
    }
  }

  _createClass(TimerVelocity, [{
    key: 'overTheLimitCount',

    /**
     * overTheLimitCount() is observe of speed for myunit.
     */
    value: function overTheLimitCount() {
      var context = GameState.current;

      var myUnit = MyUnit.instance;
      var hud = HUD.instance;

      if (hud.velocityBar.counter.current >= GameConfig.setting.LIMIT_VELOCITY) {
        if (context.contains(GameText.slowDownCount)) {
          GameText.slowDownCount = GameConfig.setting.LIMIT_VELOCITY_MAX_COUNT - this.overTheLimitVelocityCounter;
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
  }, {
    key: 'speedLimit',

    /**
     * speedLimit() is over the limit of speed when display of slow-down.
     */
    value: function speedLimit() {
      var context = GameState.current;
      var hud = HUD.instance;

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
  }, {
    key: 'overTheVelocityCounter',

    /**
     * Getter for overTheVelocityCounter.
     *
     * @return {Number} this._overTheVelocityCounter
     */
    get: function get() {
      if (this._overTheVelocityCounter === undefined) {
        this._overTheVelocityCounter = 0;
      }
      return this._overTheVelocityCounter;
    },

    /**
     * Setter for overTheVelocityCounter.
     *
     * @param {Number} value
     */
    set: function set(value) {
      this._overTheVelocityCounter = value;
    }
  }], [{
    key: 'instance',

    /**
     * get() is return a instance of TimerVelocity.
     *
     * @return {TimerVelocity}
     */
    get: function get() {
      if (!this[timerVelocitySingleton]) {
        this[timerVelocitySingleton] = new TimerVelocity(timerVelocitySingletonEnforcer);
      }
      return this[timerVelocitySingleton];
    }
  }]);

  return TimerVelocity;
})();

var PlayState = (function () {
  function PlayState() {
    _classCallCheck(this, PlayState);
  }

  _createClass(PlayState, null, [{
    key: 'create',

    /**
     * create() a setup of PlayState.
     */
    value: function create() {
      Kiwi.State.prototype.create.call(this);

      this.game.stage.color = GameConfig.setting.STAGE_COLOR;

      GameState.instance.current = this;

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

    /**
     * preload() a loading of asserts for PlayState.
     */
    value: function preload() {
      Kiwi.State.prototype.preload.call(this);

      Helper.addSprites(this, GameConfig.spriteSheets);
      Helper.addSound(this, GameConfig.soundFiles);
    }
  }, {
    key: 'update',

    /**
     * update() is main loop of game in PlayState.
     */
    value: function update() {
      Kiwi.State.prototype.update.call(this);

      MyUnit.update();
      HUD.update();

      if (this.contains(MyUnit.instance.sprite) && GameKey.activeShootKey()) {
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

    /**
     * create() a setup of TitleState.
     */
    value: function create() {
      Kiwi.State.prototype.create.call(this);

      this.game.stage.color = GameConfig.setting.STAGE_COLOR;

      GameState.instance.current = this;

      GameKey.initializeOfTitle();
      GameText.initializeOfTitle();
    }
  }, {
    key: 'preload',

    /**
     * preload() a loading of asserts for TitleState.
     */
    value: function preload() {
      Kiwi.State.prototype.preload.call(this);
    }
  }, {
    key: 'update',

    /**
     * update() is main loop of game in TitleState.
     */
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

var GAME_MAIN = new Kiwi.Game(GameConfig.setting.CONTAINER_ID, GameConfig.setting.NAME, null, GameConfig.kiwiOption);

GAME_MAIN.states.addState(GameState.instance.title);
GAME_MAIN.states.addState(GameState.instance.play);

GAME_MAIN.states.switchState('Title');