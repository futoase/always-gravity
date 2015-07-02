titleState.create = function() {
  Kiwi.State.prototype.create.call(this);

  this.game.stage.color = GAME_CONFIG.STAGE_COLOR;

  this.setGameKeys();

  this.addChild(GameText.createTitle(this));
  this.addChild(GameText.createSubTitle(this));
  this.addChild(GameText.createStart(this));
  this.addChild(GameText.createQuit(this));
};
