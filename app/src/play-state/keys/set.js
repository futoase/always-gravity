playState.setGameKeys = function() {
  this.leftKey = this.game.input.keyboard.addKey(
    Kiwi.Input.Keycodes.LEFT
  );
  this.rightKey = this.game.input.keyboard.addKey(
    Kiwi.Input.Keycodes.RIGHT
  );
  this.upKey = this.game.input.keyboard.addKey(
    Kiwi.Input.Keycodes.UP
  );
  this.shootKey = this.game.input.keyboard.addKey(
    Kiwi.Input.Keycodes.Z
  );
  this.exitKey = this.game.input.keyboard.addKey(
    Kiwi.Input.Keycodes.ESC
  );
  this.restartKey = this.game.input.keyboard.addKey(
    Kiwi.Input.Keycodes.R
  );
};
