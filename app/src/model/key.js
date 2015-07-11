let gameStartKey = Symbol();
let leftKey = Symbol();
let rightKey = Symbol();
let upKey = Symbol();
let shootKey = Symbol();
let exitKey = Symbol();
let restartKey = Symbol();

class GameKey {

  static initializeOfPlay() {
    GameKey.leftKey();
    GameKey.rightKey();
    GameKey.upKey();
    GameKey.shootKey();
    GameKey.exitKey();
    GameKey.restartKey();
  }

  static initializeOfTitle() {
    GameKey.gameStartKey();
    GameKey.exitKey();
  }

  static gameStartKey() {
    if (!this[gameStartKey]) {
      this[gameStartKey] = (
        this._getGameKey(Kiwi.Input.Keycodes.SPACEBAR)
      );
    }
    return this[gameStartKey];
  }

  static activeGameStartKey() {
    return this[gameStartKey].isDown;
  }

  static leftKey() {
    if (!this[leftKey]) {
      this[leftKey] = this._getGameKey(Kiwi.Input.Keycodes.LEFT);
    }
    return this[leftKey];
  }

  static activeLeftKey() {
    return this[leftKey].isDown;
  }

  static rightKey() {
    if (!this[rightKey]) {
      this[rightKey] = this._getGameKey(Kiwi.Input.Keycodes.RIGHT);
    }
    return this[rightKey];
  }

  static activeRightKey() {
    return this[rightKey].isDown;
  }

  static upKey() {
    const context = GameState.current;

    if (!this[upKey]) {
      this[upKey] = this._getGameKey(Kiwi.Input.Keycodes.UP);
    }
    return this[upKey];
  }

  static activeUpKey() {
    return this[upKey].isDown;
  }

  static shootKey() {
    const context = GameState.current;

    if (!this[shootKey]) {
      this[shootKey] = this._getGameKey(Kiwi.Input.Keycodes.Z);
    }
    return this[shootKey];
  }

  static activeShootKey() {
    return this[shootKey].isDown;
  }

  static exitKey() {
    if (!this[exitKey]) {
      this[exitKey] = this._getGameKey(Kiwi.Input.Keycodes.ESC);
    }
    return this[exitKey];
  }

  static activeExitKey() {
    return this[exitKey].isDown;
  }

  static restartKey() {
    if (!this[restartKey]) {
      this[restartKey] = this._getGameKey(Kiwi.Input.Keycodes.R)
    }
    return this[restartKey];
  }

  static activeRestartKey() {
    return this[restartKey].isDown;
  }

  static _getGameKey(keycode) {
    const context = GameState.current;
    return context.game.input.keyboard.addKey(keycode);
  }

}
