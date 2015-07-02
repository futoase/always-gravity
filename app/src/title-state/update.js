titleState.update = function() {
  Kiwi.State.prototype.update.call(this);

  if (this.startInputIsActive()) {
    this.removeChild(GameText.title);
    this.removeChild(GameText.subTitle);
    this.removeChild(GameText.start);
    this.removeChild(GameText.quit);
    this.game.states.switchState('Play');
  }

  if (this.exitInputIsActive()) {
    ipc.sendSync('quit');
  }
};
