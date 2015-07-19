class PlayState {

  /**
   * create() a setup of PlayState.
   */
  static create() {
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

  /**
   * preload() a loading of asserts for PlayState.
   */
  static preload() {
    Kiwi.State.prototype.preload.call(this);

    Helper.addSprites(this, GameConfig.spriteSheets);
    Helper.addSound(this, GameConfig.soundFiles);
  }

  /**
   * update() is main loop of game in PlayState.
   */
  static update() {
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

}

GameState.instance.play.create = PlayState.create;
GameState.instance.play.preload = PlayState.preload;
GameState.instance.play.update = PlayState.update;
