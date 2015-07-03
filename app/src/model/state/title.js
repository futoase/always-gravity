class TitleState {
  static create() {
    Kiwi.State.prototype.create.call(this);

    this.game.stage.color = GAME_CONFIG.STAGE_COLOR;

    GameKey.initializeOfTitle(this);
    this.addChild(GameText.createTitle(this));
    this.addChild(GameText.createSubTitle(this));
    this.addChild(GameText.createStart(this));
    this.addChild(GameText.createQuit(this));
  }

  static preload() {
    Kiwi.State.prototype.preload.call(this);
  }

  static update() {
    Kiwi.State.prototype.update.call(this);

    if (GameKey.activeGameStartKey()) {
      this.removeChild(GameText.title);
      this.removeChild(GameText.subTitle);
      this.removeChild(GameText.start);
      this.removeChild(GameText.quit);
      this.game.states.switchState('Play');
    }

    if (GameKey.activeExitKey()) {
      ipc.sendSync('quit');
    }
  }
}

GameState.instance.title.create = TitleState.create;
GameState.instance.title.preload = TitleState.preload;
GameState.instance.title.update = TitleState.update;
