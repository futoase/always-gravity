class GameKey {

  /**
   * initializeOfPlay() is initialize of keys for PlayState.
   */
  static initializeOfPlay() {
    GameKey.LEFT_KEY();
    GameKey.RIGHT_KEY();
    GameKey.UP_KEY();
    GameKey.SHOOT_KEY();
    GameKey.EXIT_KEY();
    GameKey.RESTART_KEY();
  }

  /**
   * initializeOfTitle() is initialize of keys for TitleState.
   */
  static initializeOfTitle() {
    GameKey.GAMESTART_KEY();
    GameKey.EXIT_KEY();
  }

  /**
   * GAMESTART_KEY() is return new Game key for the Start.
   *
   * @return {Kiwi.Input.Key} GAMESTART_KEY
   */
  static GAMESTART_KEY() {
    if (!this[GAMESTART_KEY]) {
      this[GAMESTART_KEY] = (
        this._getGameKey(Kiwi.Input.Keycodes.SPACEBAR)
      );
    }
    return this[GAMESTART_KEY];
  }

  /**
   * activeGameStartKey() is be check an active of GAMESTART_KEY.
   *
   * @return {Boolean} isDown
   */
  static activeGameStartKey() {
    return this[GAMESTART_KEY].isDown;
  }

  /**
   * LEFT_KEY() is return new Game key for the Left.
   *
   * @return {Kiwi.Input.Key} LEFT_KEY
   */
  static LEFT_KEY() {
    if (!this[LEFT_KEY]) {
      this[LEFT_KEY] = this._getGameKey(Kiwi.Input.Keycodes.LEFT);
    }
    return this[LEFT_KEY];
  }

  /**
   * activeLeftKey() is be check an active of LEFT_KEY.
   *
   * @return {Boolean} isDown
   */
  static activeLeftKey() {
    return this[LEFT_KEY].isDown;
  }

  /**
   * RIGHT_KEY() is return new Game key for the Right.
   *
   * @return {Kiwi.Input.Key} RIGHT_KEY
   */
  static RIGHT_KEY() {
    if (!this[RIGHT_KEY]) {
      this[RIGHT_KEY] = this._getGameKey(Kiwi.Input.Keycodes.RIGHT);
    }
    return this[RIGHT_KEY];
  }

  /**
   * activeRightKey() is be check an active of RIGHT_KEY.
   *
   * @return {Boolean} isDown
   */
  static activeRightKey() {
    return this[RIGHT_KEY].isDown;
  }

  /**
   * UP_KEY() is return new Game key for the Up.
   *
   * @return {Kiwi.Input.Key} UP_KEY
   */
  static UP_KEY() {
    if (!this[UP_KEY]) {
      this[UP_KEY] = this._getGameKey(Kiwi.Input.Keycodes.UP);
    }
    return this[UP_KEY];
  }

  /**
   * activeUpKey() is be check an active of UP_KEY.
   *
   * @return {Boolean} isDown
   */
  static activeUpKey() {
    return this[UP_KEY].isDown;
  }

  /**
   * SHOOT_KEY() is return new Game key for the Shoot.
   *
   * @return {Kiwi.Input.Key} SHOOT_KEY
   */
  static SHOOT_KEY() {
    if (!this[SHOOT_KEY]) {
      this[SHOOT_KEY] = this._getGameKey(Kiwi.Input.Keycodes.Z);
    }
    return this[SHOOT_KEY];
  }

  /**
   * activeShootKey() is be check an active of SHOOT_KEY.
   *
   * @return {Boolean} isDown
   */
  static activeShootKey() {
    return this[SHOOT_KEY].isDown;
  }

  /**
   * EXIT_KEY() is return new Game key for the Exit.
   *
   * @return {Kiwi.Input.Key} EXIT_KEY
   */
  static EXIT_KEY() {
    if (!this[EXIT_KEY]) {
      this[EXIT_KEY] = this._getGameKey(Kiwi.Input.Keycodes.ESC);
    }
    return this[EXIT_KEY];
  }

  /**
   * activeExitKey() is be check an active of EXIT_KEY.
   *
   * @return {Boolean} isDown
   */
  static activeExitKey() {
    return this[EXIT_KEY].isDown;
  }

  /**
   * RESTART_KEY() is return new Game key for the Restart.
   *
   * @return {Kiwi.Input.Key} RESTART_KEY
   */
  static RESTART_KEY() {
    if (!this[RESTART_KEY]) {
      this[RESTART_KEY] = this._getGameKey(Kiwi.Input.Keycodes.R);
    }
    return this[RESTART_KEY];
  }

  /**
   * activeExitKey() is be check an active of EXIT_KEY.
   *
   * @return {Boolean} isDown
   */
  static activeRestartKey() {
    return this[RESTART_KEY].isDown;
  }

  /**
   * _getGameKey() is return new object of Kiwi.Input.Key.
   *
   * @return {Kiwi.Input.Key}
   */
  static _getGameKey(keycode) {
    const context = GameState.current;
    return context.game.input.keyboard.addKey(keycode);
  }

}
