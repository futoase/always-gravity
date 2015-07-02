titleState.update = function() {
  Kiwi.State.prototype.update.call(this);

  if (GameKey.activeGameStartKey()) {
    this.removeChild(GameText.title);
    this.removeChild(GameText.subTitle);
    this.removeChild(GameText.start);
    this.removeChild(GameText.quit);
    this.game.states.switchState('Play');
  }

  if (GameKey.activeExitKey()) {
    ipc.sendSync('quit');
  }
};
