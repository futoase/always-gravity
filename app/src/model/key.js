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
    const context = GameState.instance.current;

    if (!this[gameStartKey]) {
      this[gameStartKey] = context.game.input.keyboard.addKey(
        Kiwi.Input.Keycodes.SPACEBAR
      );
    }
    return this[gameStartKey];
  }

  static activeGameStartKey() {
    return this[gameStartKey].isDown;
  }

  static leftKey() {
    const context = GameState.instance.current;

    if (!this[leftKey]) {
      this[leftKey] = context.game.input.keyboard.addKey(
        Kiwi.Input.Keycodes.LEFT
      );
    }
    return this[leftKey];
  }

  static activeLeftKey() {
    return this[leftKey].isDown;
  }

  static rightKey() {
    const context = GameState.instance.current;

    if (!this[rightKey]) {
      this[rightKey] = context.game.input.keyboard.addKey(
    Kiwi.Input.Keycodes.RIGHT
      );
    }
    return this[rightKey];
  }

  static activeRightKey() {
    return this[rightKey].isDown;
  }

  static upKey() {
    const context = GameState.instance.current;

    if (!this[upKey]) {
      this[upKey] = context.game.input.keyboard.addKey(
        Kiwi.Input.Keycodes.UP
      );
    }
    return this[upKey];
  }

  static activeUpKey() {
    return this[upKey].isDown;
  }

  static shootKey() {
    const context = GameState.instance.current;

    if (!this[shootKey]) {
      this[shootKey] = context.game.input.keyboard.addKey(
        Kiwi.Input.Keycodes.Z
      );
    }
    return this[shootKey];
  }

  static activeShootKey() {
    return this[shootKey].isDown;
  }

  static exitKey() {
    const context = GameState.instance.current;

    if (!this[exitKey]) {
      this[exitKey] = context.game.input.keyboard.addKey(
        Kiwi.Input.Keycodes.ESC
      );
    }
    return this[exitKey];
  }

  static activeExitKey() {
    return this[exitKey].isDown;
  }

  static restartKey() {
    const context = GameState.instance.current;

    if (!this[restartKey]) {
      this[restartKey] = context.game.input.keyboard.addKey(
        Kiwi.Input.Keycodes.R
      );
    }
    return this[restartKey];
  }

  static activeRestartKey() {
    return this[restartKey].isDown;
  }

}
