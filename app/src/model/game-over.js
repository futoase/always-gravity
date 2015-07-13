const gameOverStatus = Symbol();

class GameOver {

  /**
   * Getter of GameOverStatus.
   *
   * @return {Boolean} GameOverStatus
   */
  static get status() {
    return this[gameOverStatus];
  }

  /**
   * Setter of GameOverStatus.
   *
   * @param {Boolean} value
   */
  static set status(value) {
    if (typeof value === 'boolean') {
      this[gameOverStatus] = value;
    }
  }

  /**
   * execute() is execute of event for the GameOver!
   */
  static execute() {
    const context = GameState.current;

    if (GameOver.status) {
      return;
    }

    this._destroyObjects();

    GameMusic.gameOver.play();

    context.addChild(GameText.createGameOver());
    context.addChild(GameText.createScore(GameCounter.gameScore));
    context.addChild(GameText.createRestart());
    context.addChild(GameText.createExitGame());

    this.status = true;
  }

  /**
   * _destroyObjects() is remove objects of the PlayState.
   */
  static _destroyObjects() {
    const context = GameState.current;

    GroupPool.removeChildrenForAll();
    GameMusic.destroy();
    context.game.huds.defaultHUD.removeAllWidgets();
    Timer.destroy();

    MyUnit.instance.sprite.destroy();
  }

}
