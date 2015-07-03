let textTitle = Symbol();
let textSubTitle = Symbol();
let textStart = Symbol();
let textQuit = Symbol();
let textExitGame = Symbol();
let textGameOver = Symbol();
let textRestart = Symbol();
let textScore = Symbol();
let textSlowDownCount = Symbol();
let textSlowDown = Symbol();

class GameText {

  static initializeOfTitle() {
    const context = GameState.instance.current;

    context.addChild(GameText.createTitle());
    context.addChild(GameText.createSubTitle());
    context.addChild(GameText.createStart());
    context.addChild(GameText.createQuit());
  }

  static destroyOfTitle() {
    const context = GameState.instance.current;

    context.removeChild(GameText.title);
    context.removeChild(GameText.subTitle);
    context.removeChild(GameText.start);
    context.removeChild(GameText.quit);
  }

  static createTitle() {
    const context = GameState.instance.current;

    if (!this[textTitle]) {
      let text = new Kiwi.GameObjects.TextField(
        context, "Always Gravity", context.game.stage.width / 2, 200, "#ffffff", 48, "bold", "monospace"
  );
      text.textAlign = Kiwi.GameObjects.TextField.TEXT_ALIGN_CENTER;
      this[textTitle] = text;
    }
    return this[textTitle];
  }

  static get title() {
    return this[textTitle];
  }

  static createSubTitle() {
    const context = GameState.instance.current;

    if (!this[textSubTitle]) {
      let text = new Kiwi.GameObjects.TextField(
        context, "常に重力", context.game.stage.width / 2, 270, "#ffffff", 24, "bold", "monospace"
      );
      text.textAlign = Kiwi.GameObjects.TextField.TEXT_ALIGN_CENTER;
      this[textSubTitle] = text;
    }
    return this[textSubTitle];
  }

  static get subTitle() {
    return this[textSubTitle];
  }

  static createStart() {
    const context = GameState.instance.current;

    if (!this[textStart]) {
      let text = new Kiwi.GameObjects.TextField(
        context, "START: SPACEBAR", context.game.stage.width / 2, 320, "#ffffff", 20, "bold", "monospace"
      );
      text.textAlign = Kiwi.GameObjects.TextField.TEXT_ALIGN_CENTER;
      this[textStart] = text;
    }
    return this[textStart];
  }

  static get start() {
    return this[textStart];
  }

  static createQuit() {
    const context = GameState.instance.current;

    if (!this[textQuit]) {
      let text = new Kiwi.GameObjects.TextField(
        context, "QUIT: ESC", context.game.stage.width / 2, 350, "#ffffff", 20, "bold", "monospace"
      );
      text.textAlign = Kiwi.GameObjects.TextField.TEXT_ALIGN_CENTER;
      this[textQuit] = text;
    }
    return this[textQuit];
  }

  static get quit() {
    return this[textQuit];
  }

  static createExitGame(){
    const context = GameState.instance.current;

    if (!this[textExitGame]) {
      let text = new Kiwi.GameObjects.TextField(
        context, "QUIT: ESC", context.game.stage.width / 2, 380, "#ffffff", 20, "bold", "monospace"
      );
      text.textAlign = Kiwi.GameObjects.TextField.TEXT_ALIGN_CENTER;
      this[textExitGame] = text;
    }
    return this[textExitGame];
  }

  static createGameOver() {
    const context = GameState.instance.current;

    if (!this[textGameOver]) {
      let text = new Kiwi.GameObjects.TextField(
        context, "GAME OVER", context.game.stage.width / 2, 200, "#ffffff", 64, "bold", "monospace"
  );
      text.textAlign = Kiwi.GameObjects.TextField.TEXT_ALIGN_CENTER;
      this[textGameOver] = text;
    }
    return this[textGameOver];
  }

  static createRestart() {
    const context = GameState.instance.current;

    if (!this[textRestart]) {
      let text = new Kiwi.GameObjects.TextField(
        context, "RESTART: R", context.game.stage.width / 2, 350, "#ffffff", 20, "bold", "monospace"
  );
      text.textAlign = Kiwi.GameObjects.TextField.TEXT_ALIGN_CENTER;
      this[textRestart] = text;
    }
    return this[textRestart];
  }

  static createScore(score) {
    const context = GameState.instance.current;

    if (!this[textScore]) {
      let text= new Kiwi.GameObjects.TextField(
        context, "SCORE: " + score, context.game.stage.width / 2, 280, "#ffffff", 36, "bold", "monospace"
      );
      text.textAlign = Kiwi.GameObjects.TextField.TEXT_ALIGN_CENTER;
      this[textScore] = text;
    }
    return this[textScore];
  }

  static createSlowDownCount() {
    const context = GameState.instance.current;

    if (!this[textSlowDownCount]) {
      let text = new Kiwi.GameObjects.TextField(
        context, GAME_CONFIG.LIMIT_VELOCITY_MAX_COUNT, context.game.stage.width / 2, 250, "#ffffff", 48, "bold", "monoscape"
  );
      text.textAlign = Kiwi.GameObjects.TextField.TEXT_ALIGN_CENTER;
      this[textSlowDownCount] = text;
    }
    return this[textSlowDownCount];
  }

  static get slowDownCount() {
    return this[textSlowDownCount];
  }

  static set slowDownCount(text) {
    this[textSlowDownCount].text = text;
  }

  static createSlowDown() {
    const context = GameState.instance.current;

    if (!this[textSlowDown]) {
      let text = new Kiwi.GameObjects.TextField(
        context, "SLOW DOWN !!!", context.game.stage.width / 2, 200, "#ffffff", 48, "bold", "monospace"
  );
      text.textAlign = Kiwi.GameObjects.TextField.TEXT_ALIGN_CENTER;
      this[textSlowDown] = text;
    }
    return this[textSlowDown];
  }

  static get slowDown() {
    return this[textSlowDown];
  }

}
