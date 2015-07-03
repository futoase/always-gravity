class TitleState {

  static create() {
    Kiwi.State.prototype.create.call(this);

    this.game.stage.color = GAME_CONFIG.STAGE_COLOR;

    GameState.instance.current = this;

    GameKey.initializeOfTitle();
    GameText.initializeOfTitle();
  }

  static preload() {
    Kiwi.State.prototype.preload.call(this);
  }

  static update() {
    Kiwi.State.prototype.update.call(this);

    if (GameKey.activeGameStartKey()) {
      GameText.destroyOfTitle();
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
