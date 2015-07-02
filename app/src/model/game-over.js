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

    context.addChild(GameText.createGameOver(context));
    context.addChild(GameText.createScore(context, GAME_COUNTER.gameScore));
    context.addChild(GameText.createRestart(context));
    context.addChild(GameText.createExitGame(context));

    GameOver.status = true;
  }

  static destroyObjects(context) {
    GroupPool.removeChildrenForAll(context);
    GameMusic.destroy();
    context.game.huds.defaultHUD.removeAllWidgets();
    Timer.destroy(context);

    let myUnit = MyUnit.instance;
    myUnit.context = context;

    myUnit.sprite.destroy();
  }
}
