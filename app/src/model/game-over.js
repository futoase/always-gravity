let gameOverContext = Symbol();
let gameOverStatus = Symbol();

class GameOver {

  static get context() {
    return this[gameOverContext];
  }

  static set context(value) {
    this[gameOverContext] = value;
  }

  static get status() {
    return this[gameOverStatus];
  }

  static set status(value) {
    if (typeof value === "boolean") {
      this[gameOverStatus] = value;
    }
  }

  static execute(context) {
    if (GameOver.status) {
      return;
    }

    GameOver.destroyObjects(context);

    GameMusic.gameOver.play();

    context.addChild(GameText.createGameOver());
    context.addChild(GameText.createScore(GAME_COUNTER.gameScore));
    context.addChild(GameText.createRestart());
    context.addChild(GameText.createExitGame());

    GameOver.status = true;
  }

  static destroyObjects(context) {
    GroupPool.removeChildrenForAll(context);
    GameMusic.destroy();
    context.game.huds.defaultHUD.removeAllWidgets();
    Timer.destroy();

    MyUnit.instance.sprite.destroy();
  }

}
