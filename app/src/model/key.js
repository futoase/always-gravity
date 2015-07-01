let leftKey = Symbol();
let rightKey = Symbol();
let upKey = Symbol();
let shootKey = Symbol();
let exitKey = Symbol();
let restartKey = Symbol();

class GameKey {

  static initialize(context) {
    GameKey.leftKey(context);
    GameKey.rightKey(context);
    GameKey.upKey(context);
    GameKey.shootKey(context);
    GameKey.exitKey(context);
    GameKey.restartKey(context);
  }

  static leftKey(context) {
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

  static rightKey(context) {
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

  static upKey(context) {
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

  static shootKey(context) {
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

  static exitKey(context) {
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

  static restartKey(context) {
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
