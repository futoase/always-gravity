class TestTextureLoader {

  static loadImage(name, path, width, height) {
    const textureLibrary = new Kiwi.Textures.TextureLibrary(GAME_MAIN);
    const loader = new Kiwi.Files.Loader(GAME_MAIN);

    loader.boot();
    loader.init();

    const sprite = loader.addSpriteSheet(name, path, width, height);

    loader.start();

    textureLibrary.addFromFile(sprite);

    return textureLibrary.textures[name];
  }

  static myUnit() {
    return this.loadImage(
      'myUnit', './assets/images/unit.png', 32, 32
    );
  }

  static myUnitSplinter() {
    return this.loadImage(
      'myUnitSplinter', './assets/images/my-unit-explosion.png', 32, 32
    );
  }

  static bullet() {
    return this.loadImage(
      'bullet', './assets/images/bullet.png', 4, 4
    );
  }

  static circle() {
    return this.loadImage(
      'circle', './assets/images/circle.png', 32, 32
    );
  }

  static cube() {
    return this.loadImage(
      'cube', './assets/images/cube.png', 32, 32
    );
  }

  static cylinder() {
    return this.loadImage(
      'cylinder', './assets/images/cylinder.png', 32, 128
    );
  }

  static star() {
    return this.loadImage(
      'star', './assets/images/star.png', 8, 8
    );
  }

  static rhombus() {
    return this.loadImage(
      'rhombus', './assets/images/rhombus.png', 32, 32
    );
  }

  static explosion() {
    return this.loadImage(
      'explosion', './assets/images/explosion.png', 256, 256
    );
  }

}

class TestAudioLoader {

  static loadAudio(name, path) {
    const audioLibrary = new Kiwi.Sound.AudioLibrary(GAME_MAIN);
    const loader = new Kiwi.Files.Loader(GAME_MAIN);

    loader.boot();
    loader.init();

    const audio = loader.addAudio(name, path);

    loader.start();

    audioLibrary.add(audio);

    return audioLibrary.audio[name];
  }

  static musicMain() {
    return this.loadAudio(
      'musicMain', './assets/media/old-broken-radio.mp3'
    );
  }

  static musicGameOver() {
    return this.loadAudio(
      'musicGameOver', './assets/media/random-silly-chip-song.ogg'
    );
  }

  static bulletSe() {
    return this.loadAudio(
      'bullet-se', './assets/media/laser.wav'
    );
  }

  static explosionSe() {
    return this.loadAudio(
      'explosion-se', './assets/media/explosion.wav'
    );
  }

  static exposionMyUnitSe() {
    return this.loadAudio(
      'explosion-myunit-se', './assets/media/myunit-explosion.wav'
    );
  }

  static circleSe() {
    return this.loadAudio(
      'circle-se', './assets/media/circle.wav'
    );
  }

  static cautionOfSpeedSe() {
    return this.loadAudio(
      'caution-of-speed-se', './assets/media/caution-of-speed.wav'
    );
  }
}

const testState = new Kiwi.State('Test');

function setTestTextures(state) {
  state.textures = {
    myUnit: TestTextureLoader.myUnit(),
    myUnitSplinter: TestTextureLoader.myUnitSplinter(),
    bullet: TestTextureLoader.bullet(),
    circle: TestTextureLoader.circle(),
    cube: TestTextureLoader.cube(),
    cylinder: TestTextureLoader.cylinder(),
    rhombus: TestTextureLoader.rhombus(),
    explosion: TestTextureLoader.explosion()
  }
}

setTestTextures(testState);

// Setup of AudioManager on the Game.
GAME_MAIN.audio.boot();
GAME_MAIN.audio.registerSound(TestAudioLoader.musicMain());
GAME_MAIN.audio.registerSound(TestAudioLoader.musicGameOver());
GAME_MAIN.audio.registerSound(TestAudioLoader.bulletSe());
GAME_MAIN.audio.registerSound(TestAudioLoader.explosionSe());
GAME_MAIN.audio.registerSound(TestAudioLoader.circleSe());
GAME_MAIN.audio.registerSound(TestAudioLoader.cautionOfSpeedSe());

const GameTestConfig = {};

GameTestConfig.text = {
  test: {
    x: 100,
    y: 200,
    text: 'test text',
    color: '#f0f0f0',
    size: 123,
    weight: 'bold',
    fontFamily: 'fantasy'
  }
};

GameTestConfig.spriteSheets = [
  {
    name: 'testMyUnit',
    path: './assets/images/unit.png',
    width: 32,
    height: 32
  },
];

GameTestConfig.soundFiles = [
  {
    name: 'testBulletSe',
    path: './assets/media/laser.wav',
  },
];

GameState.instance.current = testState;

GAME_MAIN.states.addState(testState);
GAME_MAIN.states.switchState('Test');
