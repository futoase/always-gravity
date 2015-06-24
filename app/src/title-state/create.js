titleState.create = function() {
  Kiwi.State.prototype.create.call(this);

  this.game.stage.color = titleStageColor;

  this.setGameKeys();
  this.createTitleText();
};
