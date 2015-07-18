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
   * @return {Kiwi.GameObjects.TextField} TEXT_TITLE
   */
  static createTitle() {
    const context = GameState.current;

    if (!this[TEXT_TITLE]) {
      const text = this._createTextField(context, GameConfig.text.title);
      text.textAlign = Kiwi.GameObjects.TextField.TEXT_ALIGN_CENTER;
      this[TEXT_TITLE] = text;
    }
    return this[TEXT_TITLE];
  }

  /**
   * Getter of Title.
   *
   * @return {Kiwi.GameObjects.TextField} TEXT_TITLE
   */
  static get title() {
    return this[TEXT_TITLE];
  }

  /**
   * createSubTitle() is create text of Game Sub-Title.
   *
   * @return {Kiwi.GameObjects.TextField} TEXT_SUB_TITLE
   */
  static createSubTitle() {
    const context = GameState.current;

    if (!this[TEXT_SUB_TITLE]) {
      const text = this._createTextField(context, GameConfig.text.subTitle);
      text.textAlign = Kiwi.GameObjects.TextField.TEXT_ALIGN_CENTER;
      this[TEXT_SUB_TITLE] = text;
    }
    return this[TEXT_SUB_TITLE];
  }

  /**
   * Getter of Sub-Title.
   *
   * @return {Kiwi.GameObjects.TextField} TEXT_SUB_TITLE
   */
  static get subTitle() {
    return this[TEXT_SUB_TITLE];
  }

  /**
   * createStart() is create text of Start.
   *
   * @return {Kiwi.GameObjects.TextField} TEXT_START
   */
  static createStart() {
    const context = GameState.current;

    if (!this[TEXT_START]) {
      const text = this._createTextField(context, GameConfig.text.start);
      text.textAlign = Kiwi.GameObjects.TextField.TEXT_ALIGN_CENTER;
      this[TEXT_START] = text;
    }
    return this[TEXT_START];
  }

  /**
   * Getter of Start.
   *
   * @return {Kiwi.GameObjects.TextField} TEXT_START
   */
  static get start() {
    return this[TEXT_START];
  }

  /**
   * createQuit() is create text of Quit.
   *
   * @return {Kiwi.GameObjects.TextField} TEXT_QUIT
   */
  static createQuit() {
    const context = GameState.current;

    if (!this[TEXT_QUIT]) {
      const text = this._createTextField(context, GameConfig.text.quit);
      text.textAlign = Kiwi.GameObjects.TextField.TEXT_ALIGN_CENTER;
      this[TEXT_QUIT] = text;
    }
    return this[TEXT_QUIT];
  }

  /**
   * Getter of Quit.
   *
   * @return {Kiwi.GameObjects.TextField} TEXT_QUIT
   */
  static get quit() {
    return this[TEXT_QUIT];
  }

  /**
   * createQuit() is create text of Quit.
   *
   * @return {Kiwi.GameObjects.TextField} TEXT_QUIT
   */
  static createExitGame() {
    const context = GameState.current;

    if (!this[TEXT_EXIT_GAME]) {
      const text = this._createTextField(context, GameConfig.text.exitGame);
      text.textAlign = Kiwi.GameObjects.TextField.TEXT_ALIGN_CENTER;
      this[TEXT_EXIT_GAME] = text;
    }
    return this[TEXT_EXIT_GAME];
  }

  /**
   * createGameOver() is create text of GAMEOVER.
   *
   * @return {Kiwi.GameObjects.TextField} TEXT_GAME_OVER
   */
  static createGameOver() {
    const context = GameState.current;

    if (!this[TEXT_GAME_OVER]) {
      const text = this._createTextField(context, GameConfig.text.gameOver);
      text.textAlign = Kiwi.GameObjects.TextField.TEXT_ALIGN_CENTER;
      this[TEXT_GAME_OVER] = text;
    }
    return this[TEXT_GAME_OVER];
  }

  /**
   * createRestart() is create text of Restart.
   *
   * @return {Kiwi.GameObjects.TextField} TEXT_RESTART
   */
  static createRestart() {
    const context = GameState.current;

    if (!this[TEXT_RESTART]) {
      const text = this._createTextField(context, GameConfig.text.restart);
      text.textAlign = Kiwi.GameObjects.TextField.TEXT_ALIGN_CENTER;
      this[TEXT_RESTART] = text;
    }
    return this[TEXT_RESTART];
  }

  /**
   * createScore() is create text of score.
   *
   * @return {Kiwi.GameObjects.TextField} TEXT_SCORE
   */
  static createScore(score) {
    const context = GameState.current;

    if (!this[TEXT_SCORE]) {
      const text = this._createTextField(context, GameConfig.text.scoreResults);
      text.text = 'SCORE: ' + String(score);
      text.textAlign = Kiwi.GameObjects.TextField.TEXT_ALIGN_CENTER;
      this[TEXT_SCORE] = text;
    }
    return this[TEXT_SCORE];
  }

  /**
   * createSlowDownCount() is create text of counter for SlowDown.
   *
   * @return {Kiwi.GameObjects.TextField} TEXT_SLOWDOWN_COUNT
   */
  static createSlowDownCount() {
    const context = GameState.current;

    if (!this[TEXT_SLOWDOWN_COUNT]) {
      const text = this._createTextField(context, GameConfig.text.slowDownCount);
      text.textAlign = Kiwi.GameObjects.TextField.TEXT_ALIGN_CENTER;
      this[TEXT_SLOWDOWN_COUNT] = text;
    }
    return this[TEXT_SLOWDOWN_COUNT];
  }

  /**
   * Getter of slowDownCount.
   *
   * @return {Kiwi.GameObjects.TextField} TEXT_SLOWDOWN_COUNT
   */
  static get slowDownCount() {
    return this[TEXT_SLOWDOWN_COUNT];
  }

  /**
   * Setter of slowDownCount.
   *
   * @param {String} text
   */
  static set slowDownCount(text) {
    this[TEXT_SLOWDOWN_COUNT].text = text;
  }

  /**
   * createSlowDown() is create text of warning for the SlowDown!
   *
   * @return {Kiwi.GameObjects.TextField} TEXT_SLOWDOWN
   */
  static createSlowDown() {
    const context = GameState.current;

    if (!this[TEXT_SLOWDOWN]) {
      const text = this._createTextField(context, GameConfig.text.slowDown);
      text.textAlign = Kiwi.GameObjects.TextField.TEXT_ALIGN_CENTER;
      this[TEXT_SLOWDOWN] = text;
    }
    return this[TEXT_SLOWDOWN];
  }

  /**
   * Getter of slowDown.
   *
   * @return {Kiwi.GameObjects.TextField} TEXT_SLOWDOWN
   */
  static get slowDown() {
    return this[TEXT_SLOWDOWN];
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
