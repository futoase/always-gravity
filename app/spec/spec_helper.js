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
  static loadImage({name, path, width, height}) {
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
    return this.loadImage(GameConfig.spriteSheets[0]);
  }

  static myUnitSplinter() {
    return this.loadImage(GameConfig.spriteSheets[1]);
  }

  static star() {
    return this.loadImage(GameConfig.spriteSheets[2]);
  }

  static cube() {
    return this.loadImage(GameConfig.spriteSheets[3]);
  }

  static cylinder() {
    return this.loadImage(GameConfig.spriteSheets[4]);
  }

  static bullet() {
    return this.loadImage(GameConfig.spriteSheets[5]);
  }

  static explosion() {
    return this.loadImage(GameConfig.spriteSheets[6]);
  }

  static circle() {
    return this.loadImage(GameConfig.spriteSheets[7]);
  }

  static rhombus() {
    return this.loadImage(GameConfig.spriteSheets[8]);
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
  static loadAudio({name, path}) {
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
    return this.loadAudio(GameConfig.soundFiles[0]);
  }

  static musicGameOver() {
    return this.loadAudio(GameConfig.soundFiles[1]);
  }

  static bulletSe() {
    return this.loadAudio(GameConfig.soundFiles[2]);
  }

  static explosionSe() {
    return this.loadAudio(GameConfig.soundFiles[3]);
  }

  static exposionMyUnitSe() {
    return this.loadAudio(GameConfig.soundFiles[4]);
  }

  static circleSe() {
    return this.loadAudio(GameConfig.soundFiles[5]);
  }

  static cautionOfSpeedSe() {
    return this.loadAudio(GameConfig.soundFiles[6]);
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
