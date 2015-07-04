let gameOverStatus = Symbol();

class GameOver {

  static get status() {
    return this[gameOverStatus];
  }

  static set status(value) {
    if (typeof value === "boolean") {
      this[gameOverStatus] = value;
    }
  }

  static execute() {
    const context = GameState.instance.current;

    if (GameOver.status) {
      return;
    }

    this._destroyObjects();

    GameMusic.gameOver.play();

    context.addChild(GameText.createGameOver());
    context.addChild(GameText.createScore(GAME_COUNTER.gameScore));
    context.addChild(GameText.createRestart());
    context.addChild(GameText.createExitGame());

    this.status = true;
  }

  static _destroyObjects() {
    const context = GameState.instance.current;

    GroupPool.removeChildrenForAll();
    GameMusic.destroy();
    context.game.huds.defaultHUD.removeAllWidgets();
    Timer.destroy();

    MyUnit.instance.sprite.destroy();
  }

}
