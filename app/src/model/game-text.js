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

  /**
   * initializeOfTitle() is settings of text for TitleState.
   */
  static initializeOfTitle() {
    const context = GameState.current;

    context.addChild(GameText.createTitle());
    context.addChild(GameText.createSubTitle());
    context.addChild(GameText.createStart());
    context.addChild(GameText.createQuit());
  }

  /**
   * destroyOfTitle() is remove of text for TitleState.
   */
  static destroyOfTitle() {
    const context = GameState.current;

    context.removeChild(GameText.title);
    context.removeChild(GameText.subTitle);
    context.removeChild(GameText.start);
    context.removeChild(GameText.quit);
  }

  /**
   * createTitle() is create text of Game Title.
   *
   * @return {Kiwi.GameObjects.TextField} textTitle
   */
  static createTitle() {
    const context = GameState.current;

    if (!this[textTitle]) {
      let text = new Kiwi.GameObjects.TextField(
        context, "Always Gravity", context.game.stage.width / 2, 200, "#ffffff", 48, "bold", "monospace"
  );
      text.textAlign = Kiwi.GameObjects.TextField.TEXT_ALIGN_CENTER;
      this[textTitle] = text;
    }
    return this[textTitle];
  }

  /**
   * Getter of Title.
   *
   * @return {Kiwi.GameObjects.TextField} textTitle
   */
  static get title() {
    return this[textTitle];
  }

  /**
   * createSubTitle() is create text of Game Sub-Title.
   *
   * @return {Kiwi.GameObjects.TextField} textSubTitle
   */
  static createSubTitle() {
    const context = GameState.current;

    if (!this[textSubTitle]) {
      let text = new Kiwi.GameObjects.TextField(
        context, "常に重力", context.game.stage.width / 2, 270, "#ffffff", 24, "bold", "monospace"
      );
      text.textAlign = Kiwi.GameObjects.TextField.TEXT_ALIGN_CENTER;
      this[textSubTitle] = text;
    }
    return this[textSubTitle];
  }

  /**
   * Getter of Sub-Title.
   *
   * @return {Kiwi.GameObjects.TextField} textSubTitle
   */
  static get subTitle() {
    return this[textSubTitle];
  }

  /**
   * createStart() is create text of Start.
   *
   * @return {Kiwi.GameObjects.TextField} textStart
   */
  static createStart() {
    const context = GameState.current;

    if (!this[textStart]) {
      let text = new Kiwi.GameObjects.TextField(
        context, "START: SPACEBAR", context.game.stage.width / 2, 320, "#ffffff", 20, "bold", "monospace"
      );
      text.textAlign = Kiwi.GameObjects.TextField.TEXT_ALIGN_CENTER;
      this[textStart] = text;
    }
    return this[textStart];
  }

  /**
   * Getter of Start.
   *
   * @return {Kiwi.GameObjects.TextField} textStart
   */
  static get start() {
    return this[textStart];
  }

  /**
   * createQuit() is create text of Quit.
   *
   * @return {Kiwi.GameObjects.TextField} textQuit
   */
  static createQuit() {
    const context = GameState.current;

    if (!this[textQuit]) {
      let text = new Kiwi.GameObjects.TextField(
        context, "QUIT: ESC", context.game.stage.width / 2, 350, "#ffffff", 20, "bold", "monospace"
      );
      text.textAlign = Kiwi.GameObjects.TextField.TEXT_ALIGN_CENTER;
      this[textQuit] = text;
    }
    return this[textQuit];
  }

  /**
   * Getter of Quit.
   *
   * @return {Kiwi.GameObjects.TextField} textQuit
   */
  static get quit() {
    return this[textQuit];
  }

  /**
   * createQuit() is create text of Quit.
   *
   * @return {Kiwi.GameObjects.TextField} textQuit
   */
  static createExitGame(){
    const context = GameState.current;

    if (!this[textExitGame]) {
      let text = new Kiwi.GameObjects.TextField(
        context, "QUIT: ESC", context.game.stage.width / 2, 380, "#ffffff", 20, "bold", "monospace"
      );
      text.textAlign = Kiwi.GameObjects.TextField.TEXT_ALIGN_CENTER;
      this[textExitGame] = text;
    }
    return this[textExitGame];
  }

  /**
   * createGameOver() is create text of GAMEOVER.
   *
   * @return {Kiwi.GameObjects.TextField} textGameOver
   */
  static createGameOver() {
    const context = GameState.current;

    if (!this[textGameOver]) {
      let text = new Kiwi.GameObjects.TextField(
        context, "GAME OVER", context.game.stage.width / 2, 200, "#ffffff", 64, "bold", "monospace"
  );
      text.textAlign = Kiwi.GameObjects.TextField.TEXT_ALIGN_CENTER;
      this[textGameOver] = text;
    }
    return this[textGameOver];
  }

  /**
   * createRestart() is create text of Restart.
   *
   * @return {Kiwi.GameObjects.TextField} textRestart
   */
  static createRestart() {
    const context = GameState.current;

    if (!this[textRestart]) {
      let text = new Kiwi.GameObjects.TextField(
        context, "RESTART: R", context.game.stage.width / 2, 350, "#ffffff", 20, "bold", "monospace"
  );
      text.textAlign = Kiwi.GameObjects.TextField.TEXT_ALIGN_CENTER;
      this[textRestart] = text;
    }
    return this[textRestart];
  }

  /**
   * createScore() is create text of score.
   *
   * @return {Kiwi.GameObjects.TextField} textScore
   */
  static createScore(score) {
    const context = GameState.current;

    if (!this[textScore]) {
      let text= new Kiwi.GameObjects.TextField(
        context, "SCORE: " + score, context.game.stage.width / 2, 280, "#ffffff", 36, "bold", "monospace"
      );
      text.textAlign = Kiwi.GameObjects.TextField.TEXT_ALIGN_CENTER;
      this[textScore] = text;
    }
    return this[textScore];
  }

  /**
   * createSlowDownCount() is create text of counter for SlowDown.
   *
   * @return {Kiwi.GameObjects.TextField} textSlowDownCount
   */
  static createSlowDownCount() {
    const context = GameState.current;

    if (!this[textSlowDownCount]) {
      let text = new Kiwi.GameObjects.TextField(
        context, GAME_CONFIG.LIMIT_VELOCITY_MAX_COUNT, context.game.stage.width / 2, 250, "#ffffff", 48, "bold", "monoscape"
  );
      text.textAlign = Kiwi.GameObjects.TextField.TEXT_ALIGN_CENTER;
      this[textSlowDownCount] = text;
    }
    return this[textSlowDownCount];
  }

  /**
   * Getter of slowDownCount.
   *
   * @return {Kiwi.GameObjects.TextField} textSlowDownCount
   */
  static get slowDownCount() {
    return this[textSlowDownCount];
  }

  /**
   * Setter of slowDownCount.
   *
   * @param {String} text
   */
  static set slowDownCount(text) {
    this[textSlowDownCount].text = text;
  }

  /**
   * createSlowDown() is create text of warning for the SlowDown!
   *
   * @return {Kiwi.GameObjects.TextField} textSlowDown
   */
  static createSlowDown() {
    const context = GameState.current;

    if (!this[textSlowDown]) {
      let text = new Kiwi.GameObjects.TextField(
        context, "SLOW DOWN !!!", context.game.stage.width / 2, 200, "#ffffff", 48, "bold", "monospace"
  );
      text.textAlign = Kiwi.GameObjects.TextField.TEXT_ALIGN_CENTER;
      this[textSlowDown] = text;
    }
    return this[textSlowDown];
  }

  /**
   * Getter of slowDown.
   *
   * @return {Kiwi.GameObjects.TextField} textSlowDown
   */
  static get slowDown() {
    return this[textSlowDown];
  }

}
