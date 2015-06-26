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
      var currentVelocityX = Math.abs(context.myUnit.physics.velocity.x);
      var currentVelocityY = Math.abs(context.myUnit.physics.velocity.y);

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

  this.updateMyUnit();
  this.updateGravity();
  this.updateHUD();

  if (this.contains(this.myUnit) && this.shootInputIsActive()) {
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

  this.spawnExplosion(bullet.x, bullet.y);
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

  bullet.x = this.myUnit.x + this.myUnit.height * 0.5;
  bullet.y = this.myUnit.y + this.myUnit.width * 0.5;

  bullet.rotation = this.myUnit.rotation;

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

playState.spawnSpriteOfCircle = function () {
  var self = this;
  Helper.strewnSprite(Helper.getMember(this.circlePool.members), { y: this.game.stage.height }, { y: 2 }, function (sprite) {
    var tween = self.game.tweens.create(sprite);
    tween.to({ x: self.myUnit.x }, 1000, Kiwi.Animations.Tweens.Easing.Sinusoidal.Out, true);
    tween.start();
  });
};

playState.spawnSpriteOfCube = function () {
  Helper.strewnSprite(Helper.getMember(this.cubePool.members), { y: this.game.stage.height }, { y: 5 });
};

playState.spawnSpriteOfCylinder = function () {
  Helper.strewnSprite(Helper.getMember(this.cylinderPool.members), { y: this.game.stage.height }, { y: 10 });
};

playState.destroyFinishCellIndexOfExplosion = function () {
  var explosionMembers = this.explosionPool.members;

  for (var i = 0; i < explosionMembers.length; i++) {
    if (explosionMembers[i].cellIndex >= 3) {
      explosionMembers[i].destroy();
    }
  }
};

playState.spawnExplosion = function (x, y) {
  var explosion = new Kiwi.GameObjects.Sprite(this, this.textures.explosion, x, y);
  this.explosionPool.addChild(explosion);
  explosion.x = x - explosion.width * 0.5;
  explosion.y = y - explosion.height * 0.5;
  explosion.animation.add('explosion', [0, 1, 2, 3], 0.1, true);
  explosion.animation.play('explosion');
};

playState.destroyObjects = function () {
  this.destroyGroups();
  this.destroyMusics();
  this.destroyHUD();
  this.destroyTimers();
  this.myUnit.destroy();
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
    var bullet = new Kiwi.GameObjects.Sprite(this, this.textures.bullet, -100, -100);
    bullet.hitbox = new Kiwi.Geom.Rectangle(8, 8, 8, 8);
    this.bulletPool.addChild(bullet);
    bullet.anchorPointX = bullet.width * 0.5;
    bullet.anchorPointY = bullet.height * 0.5;
    bullet.physics = bullet.components.add(new Kiwi.Components.ArcadePhysics(bullet, bullet.box));
    bullet.alive = false;
    bullet.index = i;
  }
};

playState.createCircleAndAppendGroup = function () {
  for (var i = 0; i < this.NUMBER_OF_CIRCLE; i++) {
    var circle = new Kiwi.GameObjects.Sprite(this, this.textures.circle, -100, -100);
    circle.hitbox = new Kiwi.Geom.Rectangle(10, 0, 18, 18);
    this.circlePool.addChild(circle);
    circle.anchorPointX = circle.width * 0.5;
    circle.anchorPointY = circle.height * 0.5;
    circle.physics = circle.components.add(new Kiwi.Components.ArcadePhysics(circle, circle.box));
    circle.x = parseInt(Math.random() * 800);
    circle.index = i;
    circle.score = 500;
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
    var cube = new Kiwi.GameObjects.Sprite(this, this.textures.cube, -100, -100);
    cube.hitbox = new Kiwi.Geom.Rectangle(10, 0, 20, 20);
    this.cubePool.addChild(cube);
    cube.anchorPointX = cube.width * 0.5;
    cube.anchorPointY = cube.height * 0.5;
    cube.physics = cube.components.add(new Kiwi.Components.ArcadePhysics(cube, cube.box));
    cube.x = parseInt(Math.random() * 800);
    cube.index = i;
    cube.score = 100;
  }
};

playState.createCylinderAndAppendGroup = function () {
  for (var i = 0; i < this.NUMBER_OF_CYLINDER; i++) {
    var cylinder = new Kiwi.GameObjects.Sprite(this, this.textures.cylinder, -100, -100);
    cylinder.animation.add('cycle', [0, 1, 2, 3, 4, 5, 6, 7], 0.1, true);
    cylinder.animation.play('cycle');
    cylinder.hitbox = new Kiwi.Geom.Rectangle(0, 10, 30, 110);
    this.cylinderPool.addChild(cylinder);
    cylinder.anchorPointX = cylinder.x * 0.5;
    cylinder.anchorPointY = cylinder.y * 0.5;
    cylinder.physics = cylinder.components.add(new Kiwi.Components.ArcadePhysics(cylinder, cylinder.box));
    cylinder.x = parseInt(Math.random() * 800);
    cylinder.y = -cylinder.height;
    cylinder.index = i;
    cylinder.score = 200;
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
  this.circlePool.forEach(this, this.checkCollisionOfMyUnit);
  this.bulletPool.forEach(this, Helper.checkSpritePosition);
  this.bulletPool.forEach(this, this.checkCollision);
  this.explosionPool.forEach(this, this.destroyFinishCellIndexOfExplosion);
  this.rhombusPool.forEach(this, this.checkCollisionOfMyUnit);
  this.rhombusSplinterPool.forEach(this, Helper.checkSpritePosition);
  this.rhombusSplinterPool.forEach(this, this.checkCollisionOfMyUnit);
};

playState.createMyUnitSplinterAndAppendGroup = function () {
  for (var i = 0; i < this.NUMBER_OF_MYUNIT_SPLINTER; i++) {
    var myUnitSplinter = new Kiwi.GameObjects.Sprite(this, this.textures.myUnitSplinter, -100, -100);

    this.myUnitSplinterPool.addChild(myUnitSplinter);
    myUnitSplinter.animation.add('explosion', [0, 1, 2, 3, 4, 5], 0.05, true);
    myUnitSplinter.physics = myUnitSplinter.components.add(new Kiwi.Components.ArcadePhysics(myUnitSplinter, myUnitSplinter.box));
    myUnitSplinter.index = i;
  }
};

playState.createRhombusSplinterAndAppendGroup = function () {
  for (var i = 0; i < this.NUMBER_OF_RHOMBUS_SPLINTER; i++) {
    var rhombusSplinter = new Kiwi.GameObjects.Sprite(this, this.textures.rhombus, -100, -100);
    this.rhombusSplinterPool.addChild(rhombusSplinter);
    rhombusSplinter.physics = rhombusSplinter.components.add(new Kiwi.Components.ArcadePhysics(rhombusSplinter, rhombusSplinter.ox));
    rhombusSplinter.index = i;
  }
};

playState.createRhombusAndAppendGroup = function () {
  for (var i = 0; i < this.NUMBER_OF_RHOMBUS; i++) {
    var rhombus = new Kiwi.GameObjects.Sprite(this, this.textures.rhombus, -100, -100);
    this.rhombusPool.addChild(rhombus);
    rhombus.physics = rhombus.components.add(new Kiwi.Components.ArcadePhysics(rhombus, rhombus.box));
    rhombus.x = this.game.stage.width / 2 - rhombus.width;
    rhombus.y = -rhombus.height;
    rhombus.index = i;
  }
};

playState.createStarAndAppendGroup = function () {
  for (var i = 0; i < this.NUMBER_OF_STAR; i++) {
    var star = new Kiwi.GameObjects.Sprite(this, this.textures.star, -100, -100);
    this.starPool.addChild(star);
    star.anchorPointX = star.width * 0.5;
    star.anchorPointY = star.height * 0.5;
    star.physics = star.components.add(new Kiwi.Components.ArcadePhysics(star, star.box));
    star.physics.acceleration.y = 1;
    star.x = parseInt(Math.random() * 800);
    if (i < parseInt(this.NUMBER_OF_STAR / 3)) {
      star.y = parseInt(Math.random() * 600);
    } else {
      star.y = -1 * parseInt(Math.random() * 200);
    }
    star.index = i;
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

playState.checkCollisionOfMyUnit = function (object) {
  var hud = HUD.instance;
  hud.context = this;

  if (!this.contains(this.myUnit) || this.isGameOver) {
    return;
  }

  var isOverlap = this.myUnit.physics.overlaps(object);
  var isOverlapOfRhombus = isOverlap && object.name == 'rhombus';

  if (isOverlap && this.CURRENT_HITPOINT >= 1) {
    this.CURRENT_HITPOINT--;
    hud.hitPointBar.counter.current--;
    this.spawnExplosion(this.myUnit.x, this.myUnit.y);
    this.soundEffectOfMyUnitExplosion.play();
    Helper.revive(object);
  }

  if (isOverlapOfRhombus || this.CURRENT_HITPOINT < 1) {
    this.CURRENT_HITPOINT = 0;
    hud.hitPointBar.counter.current = 0;
    this.explosionOfMyUnit();
  }
};

playState.createMyUnit = function () {
  this.myUnit = new Kiwi.GameObjects.Sprite(this, this.textures.myUnit, this.game.stage.width / 2, this.game.stage.height / 2);
  this.addChild(this.myUnit);

  this.myUnit.rotation = -Math.PI * 0.5;
  this.myUnit.physics = this.myUnit.components.add(new Kiwi.Components.ArcadePhysics(this.myUnit, this.myUnit.box));
  this.myUnit.physics.maxVelocity = this.MAX_SPEED;
  this.myUnit.physics.drag.x = this.DRAG;
  this.myUnit.physics.drag.y = this.DRAG;
};

playState.explosionOfMyUnit = function () {
  var myUnitSplinterMembers = this.myUnitSplinterPool.members;
  var angleBase = parseInt(360 / this.NUMBER_OF_MYUNIT_SPLINTER);
  var myUnitSplinterAngle = 0;
  var explosionCounter = 0;

  if (this.myUnitExplosion === undefined) {
    this.myUnitExplosion = true;
  } else {
    return;
  }

  this.myUnit.physics.acceleration.x = 0;
  this.myUnit.physics.acceleration.y = 0;
  this.myUnit.physics.velocity.x = 0;
  this.myUnit.physics.velocity.y = 0;

  for (var i = 0; i < myUnitSplinterMembers.length; i++) {
    myUnitSplinterMembers[i].x = this.myUnit.x;
    myUnitSplinterMembers[i].y = this.myUnit.y;

    myUnitSplinterMembers[i].physics.velocity.x = Math.cos(Helper.radian(myUnitSplinterAngle)) * 40;
    myUnitSplinterMembers[i].physics.velocity.y = Math.sin(Helper.radian(myUnitSplinterAngle)) * 40;

    myUnitSplinterMembers[i].animation.play('explosion');
    myUnitSplinterAngle += angleBase;
  }

  this.removeChild(this.myUnit);
  this.soundEffectOfMyUnitExplosion.play();

  this.myUnitExplosionTimer = this.game.time.clock.setInterval(function () {
    if (explosionCounter < 2) {
      explosionCounter++;
    } else {
      this.gameOver();
    }
  }, 1000, this);
};

playState.updateGravity = function () {
  if (this.myUnitExplosion !== true) {
    this.myUnit.physics.acceleration.y += this.GRAVITY;
  }
};

playState.speedLimitOfUnit = function () {
  var hud = HUD.instance;
  hud.context = this;

  if (hud.velocityBar.counter.current >= this.LIMIT_VELOCITY * 0.95) {
    this.soundEffectOfCautionForSpeed.play();
    if (!this.contains(this.slowDownText)) {
      this.addChild(this.slowDownText);
    }
    if (!this.contains(this.slowDownCountText)) {
      this.addChild(this.slowDownCountText);
    }
  } else {
    this.soundEffectOfCautionForSpeed.stop();
    if (this.contains(this.slowDownText)) {
      this.removeChild(this.slowDownText);
    }
    if (this.contains(this.slowDownCountText)) {
      this.removeChild(this.slowDownCountText);
    }
  }
};

playState.updateMyUnit = function () {
  if (this.isGameOver) {
    return;
  }

  if (this.myUnit.x > this.game.stage.width) {
    this.myUnit.x = 0;
  }
  if (this.myUnit.x < 0) {
    this.myUnit.x = this.game.stage.width;
  }
  if (this.myUnit.y > this.game.stage.height) {
    this.myUnit.y = 0;
  }
  if (this.myUnit.y < 0) {
    this.myUnit.y = this.game.stage.height;
  }

  if (this.leftInputIsActive() && this.myUnitExplosion === undefined) {
    this.myUnit.physics.angularVelocity = -this.ROTATION_SPEED;
  } else if (this.rightInputIsActive() && this.myUnitExplosion === undefined) {
    this.myUnit.physics.angularVelocity = this.ROTATION_SPEED;
  } else {
    this.myUnit.physics.angularVelocity = 0;
  }

  if (this.upInputIsActive() && this.myUnitExplosion === undefined) {
    this.myUnit.physics.acceleration.x = Math.cos(this.myUnit.rotation) * this.ACCELERATION;
    this.myUnit.physics.acceleration.y = Math.sin(this.myUnit.rotation) * this.ACCELERATION;
    // Change sprite 'Engine on'.
    this.myUnit.cellIndex = 1;
  } else {
    this.myUnit.physics.acceleration.setTo(0, 0);

    // Change sprite 'Engine off'.
    this.myUnit.cellIndex = 0;
  }
};

playState.overTheLimitVelocityCount = function () {
  var hud = HUD.instance;
  hud.context = this;

  if (this.overTheLimitVelocityCounter === undefined) {
    this.overTheLimitVelocityCounter = 0;
  }

  if (hud.velocityBar.counter.current >= this.LIMIT_VELOCITY) {
    if (this.contains(this.slowDownCountText)) {
      this.slowDownCountText.text = this.LIMIT_VELOCITY_MAX_COUNT - this.overTheLimitVelocityCounter;
    }
    this.overTheLimitVelocityCounter++;
  } else {
    this.overTheLimitVelocityCounter = 0;
    this.slowDownCountText.text = this.LIMIT_VELOCITY_MAX_COUNT;
  }

  if (this.overTheLimitVelocityCounter > this.LIMIT_VELOCITY_MAX_COUNT) {
    this.explosionOfMyUnit();
  }
};

playState.explosionRhombus = function (rhombus) {
  var rhombusSplinterMembers = this.rhombusSplinterPool.members;
  var angleBase = parseInt(360 / this.NUMBER_OF_RHOMBUS_SPLINTER);

  var rhombusSplinterAngle = 0;
  var explosionCounter = 0;

  for (var i = 0; i < rhombusSplinterMembers.length; i++) {
    rhombusSplinterMembers[i].x = rhombus.x;
    rhombusSplinterMembers[i].y = rhombus.y;

    rhombusSplinterMembers[i].physics.velocity.x = Math.cos(Helper.radian(rhombusSplinterAngle)) * 30;
    rhombusSplinterMembers[i].physics.velocity.y = Math.sin(Helper.radian(rhombusSplinterAngle)) * 30;

    rhombusSplinterAngle += angleBase;
  }
};

playState.spawnSpriteOfRhombus = function () {
  if (this.isSpawnSpriteOfRhombusSplinter === undefined) {
    this.isSpawnSpriteOfRhombusSplinter = false;
  }

  if (parseInt(Math.random() * 100) === 0) {
    this.isSpawnSpinterOfRhombusSplinter = true;
  }

  if (this.isSpawnSpinterOfRhombusSplinter) {
    var self = this;
    Helper.strewnSprite(Helper.getMember(this.rhombusPool.members), { y: this.game.stage.height / 2 - 32 }, { y: 1 }, function (sprite) {
      var spriteBottomLeftPoint = sprite.y + sprite.height;
      var standingPoint = self.game.stage.height / 2 - sprite.height;
      var maxScale = 5;
      var scaleBase = 0.05;

      if (spriteBottomLeftPoint >= standingPoint) {
        sprite.physics.acceleration.y = 0;
        sprite.physics.velocity.y = 0;
        if (maxScale > sprite.scaleX && maxScale > sprite.scaleY) {
          sprite.scaleX += scaleBase;
          sprite.scaleY += scaleBase;
        } else {
          self.explosionRhombus(sprite);
          sprite.scaleX = 1;
          sprite.scaleY = 1;
          Helper.revive(sprite);
          self.isSpawnSpinterOfRhombusSplinter = false;
        }
      }
    }, { revive: false });
  }
};

playState.spawnSpriteOfStar = function () {
  Helper.strewnSprite(Helper.getMember(this.starPool.members), { y: this.game.stage.height }, { y: 3 });
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

  this.starTimer = this.game.time.clock.setInterval(this.spawnSpriteOfStar, 100, this);

  this.cubeTimer = this.game.time.clock.setInterval(this.spawnSpriteOfCube, 200, this);

  this.cylinderTimer = this.game.time.clock.setInterval(this.spawnSpriteOfCylinder, 100, this);

  this.circleTimer = this.game.time.clock.setInterval(this.spawnSpriteOfCircle, 500, this);

  this.rhombusTimer = this.game.time.clock.setInterval(this.spawnSpriteOfRhombus, 100, this);

  this.coutionForSpeedSoundEffectTimer = this.game.time.clock.setInterval(this.speedLimitOfUnit, 500, this);

  this.overTheLimitVelocityCountTimer = this.game.time.clock.setInterval(this.overTheLimitVelocityCount, 1000, this);
};

playState.destroyTimers = function () {
  this.game.time.clock.removeTimer(this.starTimer);
  this.game.time.clock.removeTimer(this.cubeTimer);
  this.game.time.clock.removeTimer(this.cylinderTimer);
  this.game.time.clock.removeTimer(this.circleTimer);
  this.game.time.clock.removeTimer(this.rhombusTimer);
  this.game.time.clock.removeTimer(this.coutionSpeedSoundEffectTimer);
  this.game.time.clock.removeTimer(this.overTheLimitVelocityCount);
};

var game = new Kiwi.Game(gameContainerID, nameOfGame, null, gameOptions);
game.states.addState(titleState);
game.states.addState(playState);

game.states.switchState('Title');