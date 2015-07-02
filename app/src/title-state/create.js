titleState.create = function() {
  Kiwi.State.prototype.create.call(this);

  this.game.stage.color = GAME_CONFIG.STAGE_COLOR;

  this.setGameKeys();
  this.createTitleText();
};
