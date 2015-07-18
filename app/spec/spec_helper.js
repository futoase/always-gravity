class TestTextureLoader {

  /**
   * loadImage() is loading image from file.
   *
   * @param {String} name
   * @param {String} path
   * @param {Number} width
   * @param {Number} height
   * @return {Kiwi.Textures.SpriteSheet}
   */
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
    const {name, path, width, height} = GameConfig.spriteSheets[0];
    return this.loadImage(name, path, width, height);
  }

  static myUnitSplinter() {
    const {name, path, width, height} = GameConfig.spriteSheets[1];
    return this.loadImage(name, path, width, height);
  }

  static star() {
    const {name, path, width, height} = GameConfig.spriteSheets[2];
    return this.loadImage(name, path, width, height);
  }

  static cube() {
    const {name, path, width, height} = GameConfig.spriteSheets[3];
    return this.loadImage(name, path, width, height);
  }

  static cylinder() {
    const {name, path, width, height} = GameConfig.spriteSheets[4];
    return this.loadImage(name, path, width, height);
  }

  static bullet() {
    const {name, path, width, height} = GameConfig.spriteSheets[5];
    return this.loadImage(name, path, width, height);
  }

  static explosion() {
    const {name, path, width, height} = GameConfig.spriteSheets[6];
    return this.loadImage(name, path, width, height);
  }

  static circle() {
    const {name, path, width, height} = GameConfig.spriteSheets[7];
    return this.loadImage(name, path, width, height);
  }

  static rhombus() {
    const {name, path, width, height} = GameConfig.spriteSheets[8];
    return this.loadImage(name, path, width, height);
  }

}

class TestAudioLoader {

  /**
   * loadAudio() is loading audio from file.
   *
   * @param {String} name
   * @param {String} path
   * @return {Kiwi.Files.AudioFile}
   */
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
    const {name, path} = GameConfig.soundFiles[0];
    return this.loadAudio(name, path);
  }

  static musicGameOver() {
    const {name, path} = GameConfig.soundFiles[1];
    return this.loadAudio(name, path);
  }

  static bulletSe() {
    const {name, path} = GameConfig.soundFiles[2];
    return this.loadAudio(name, path);
  }

  static explosionSe() {
    const {name, path} = GameConfig.soundFiles[3];
    return this.loadAudio(name, path);
  }

  static exposionMyUnitSe() {
    const {name, path} = GameConfig.soundFiles[4];
    return this.loadAudio(name, path);
  }

  static circleSe() {
    const {name, path} = GameConfig.soundFiles[5];
    return this.loadAudio(name, path);
  }

  static cautionOfSpeedSe() {
    const {name, path} = GameConfig.soundFiles[6];
    return this.loadAudio(name, path);
  }
}

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

// Setup of AudioManager on the Game.
GAME_MAIN.audio.boot();
GAME_MAIN.audio.registerSound(TestAudioLoader.musicMain());
GAME_MAIN.audio.registerSound(TestAudioLoader.musicGameOver());
GAME_MAIN.audio.registerSound(TestAudioLoader.bulletSe());
GAME_MAIN.audio.registerSound(TestAudioLoader.explosionSe());
GAME_MAIN.audio.registerSound(TestAudioLoader.circleSe());
GAME_MAIN.audio.registerSound(TestAudioLoader.cautionOfSpeedSe());

const testState = new Kiwi.State('Test');
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

setTestTextures(testState);

GameState.instance.current = testState;

GAME_MAIN.states.addState(testState);
GAME_MAIN.states.switchState('Test');
