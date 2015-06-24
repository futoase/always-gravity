titleState.setGameKeys = function() {
  this.startKey = this.game.input.keyboard.addKey(
    Kiwi.Input.Keycodes.SPACEBAR
  );
  this.exitKey = this.game.input.keyboard.addKey(
    Kiwi.Input.Keycodes.ESC
  );
};
