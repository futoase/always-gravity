const textTitle = Symbol();
const textSubTitle = Symbol();
const textStart = Symbol();
const textQuit = Symbol();
const textExitGame = Symbol();
const textGameOver = Symbol();
const textRestart = Symbol();
const textScore = Symbol();
const textSlowDownCount = Symbol();
const textSlowDown = Symbol();

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
      const text = this._createTextField(context, GameConfig.text.title);
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
      const text = this._createTextField(context, GameConfig.text.subTitle);
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
      const text = this._createTextField(context, GameConfig.text.start);
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
      const text = this._createTextField(context, GameConfig.text.quit);
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
  static createExitGame() {
    const context = GameState.current;

    if (!this[textExitGame]) {
      const text = this._createTextField(context, GameConfig.text.exitGame);
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
      const text = this._createTextField(context, GameConfig.text.gameOver);
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
      const text = this._createTextField(context, GameConfig.text.restart);
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
      const text = this._createTextField(context, GameConfig.text.scoreResults);
      text.text = 'SCORE: ' + String(score);
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
      const text = this._createTextField(context, GameConfig.text.slowDownCount);
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
      const text = this._createTextField(context, GameConfig.text.slowDown);
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

  /**
   * _createTextField() is return a new TextField.
   *
   * @param {Kiwi.State} context
   * @param {Object} config
   * @return {Kiwi.GameObjects.TextField}
   */
  static _createTextField(context, config) {
    return new Kiwi.GameObjects.TextField(
      context,
      config.text,
      config.x,
      config.y,
      config.color,
      config.size,
      config.weight,
      config.fontFamily
    );
  }

}
