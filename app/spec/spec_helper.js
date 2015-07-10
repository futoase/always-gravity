class TestTextureLoader {

  static loadImage(name, path, width, height) {
    const textureLibrary = new Kiwi.Textures.TextureLibrary(GAME_MAIN);
    const loader = new Kiwi.Files.Loader(GAME_MAIN);

    loader.boot();
    loader.init();

    let sprite = loader.addSpriteSheet(name, path, width, height);

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

let testState = new Kiwi.State('Test');

testState.textures = {
  myUnit: TestTextureLoader.myUnit(),
  myUnitSplinter: TestTextureLoader.myUnitSplinter(),
  bullet: TestTextureLoader.bullet(),
  circle: TestTextureLoader.circle(),
  cube: TestTextureLoader.cube(),
  cylinder: TestTextureLoader.cylinder(),
  rhombus: TestTextureLoader.rhombus(),
  explosion: TestTextureLoader.explosion()
};

GameState.instance.current = testState;

GAME_MAIN.states.addState(testState);
GAME_MAIN.states.switchState('Test');
