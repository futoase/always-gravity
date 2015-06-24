playState.preload = function() {
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
