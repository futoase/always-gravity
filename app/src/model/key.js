const gameStartKey = Symbol();
const leftKey = Symbol();
const rightKey = Symbol();
const upKey = Symbol();
const shootKey = Symbol();
const exitKey = Symbol();
const restartKey = Symbol();

class GameKey {

  /**
   * initializeOfPlay() is initialize of keys for PlayState.
   */
  static initializeOfPlay() {
    GameKey.leftKey();
    GameKey.rightKey();
    GameKey.upKey();
    GameKey.shootKey();
    GameKey.exitKey();
    GameKey.restartKey();
  }

  /**
   * initializeOfTitle() is initialize of keys for TitleState.
   */
  static initializeOfTitle() {
    GameKey.gameStartKey();
    GameKey.exitKey();
  }

  /**
   * gameStartKey() is return new Game key for the Start.
   *
   * @return {Kiwi.Input.Key} gameStartKey
   */
  static gameStartKey() {
    if (!this[gameStartKey]) {
      this[gameStartKey] = (
        this._getGameKey(Kiwi.Input.Keycodes.SPACEBAR)
      );
    }
    return this[gameStartKey];
  }

  /**
   * activeGameStartKey() is be check an active of gameStartKey.
   *
   * @return {Boolean} isDown
   */
  static activeGameStartKey() {
    return this[gameStartKey].isDown;
  }

  /**
   * leftKey() is return new Game key for the Left.
   *
   * @return {Kiwi.Input.Key} leftKey
   */
  static leftKey() {
    if (!this[leftKey]) {
      this[leftKey] = this._getGameKey(Kiwi.Input.Keycodes.LEFT);
    }
    return this[leftKey];
  }

  /**
   * activeLeftKey() is be check an active of leftKey.
   *
   * @return {Boolean} isDown
   */
  static activeLeftKey() {
    return this[leftKey].isDown;
  }

  /**
   * rightKey() is return new Game key for the Right.
   *
   * @return {Kiwi.Input.Key} rightKey
   */
  static rightKey() {
    if (!this[rightKey]) {
      this[rightKey] = this._getGameKey(Kiwi.Input.Keycodes.RIGHT);
    }
    return this[rightKey];
  }

  /**
   * activeRightKey() is be check an active of rightKey.
   *
   * @return {Boolean} isDown
   */
  static activeRightKey() {
    return this[rightKey].isDown;
  }

  /**
   * upKey() is return new Game key for the Up.
   *
   * @return {Kiwi.Input.Key} upKey
   */
  static upKey() {
    if (!this[upKey]) {
      this[upKey] = this._getGameKey(Kiwi.Input.Keycodes.UP);
    }
    return this[upKey];
  }

  /**
   * activeUpKey() is be check an active of upKey.
   *
   * @return {Boolean} isDown
   */
  static activeUpKey() {
    return this[upKey].isDown;
  }

  /**
   * shootKey() is return new Game key for the Shoot.
   *
   * @return {Kiwi.Input.Key} shootKey
   */
  static shootKey() {
    if (!this[shootKey]) {
      this[shootKey] = this._getGameKey(Kiwi.Input.Keycodes.Z);
    }
    return this[shootKey];
  }

  /**
   * activeShootKey() is be check an active of shootKey.
   *
   * @return {Boolean} isDown
   */
  static activeShootKey() {
    return this[shootKey].isDown;
  }

  /**
   * exitKey() is return new Game key for the Exit.
   *
   * @return {Kiwi.Input.Key} exitKey
   */
  static exitKey() {
    if (!this[exitKey]) {
      this[exitKey] = this._getGameKey(Kiwi.Input.Keycodes.ESC);
    }
    return this[exitKey];
  }

  /**
   * activeExitKey() is be check an active of exitKey.
   *
   * @return {Boolean} isDown
   */
  static activeExitKey() {
    return this[exitKey].isDown;
  }

  /**
   * restartKey() is return new Game key for the Restart.
   *
   * @return {Kiwi.Input.Key} restartKey
   */
  static restartKey() {
    if (!this[restartKey]) {
      this[restartKey] = this._getGameKey(Kiwi.Input.Keycodes.R);
    }
    return this[restartKey];
  }

  /**
   * activeExitKey() is be check an active of exitKey.
   *
   * @return {Boolean} isDown
   */
  static activeRestartKey() {
    return this[restartKey].isDown;
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
