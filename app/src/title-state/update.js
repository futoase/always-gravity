titleState.update = function() {
  Kiwi.State.prototype.update.call(this);

  if (this.startInputIsActive()) {
    this.destroyTitleText();
    this.game.states.switchState('Play');
  }

  if (this.exitInputIsActive()) {
    ipc.sendSync('quit');
  }
};
