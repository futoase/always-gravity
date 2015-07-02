playState.create = function() {
  Kiwi.State.prototype.create.call(this);

  this.game.stage.color = GAME_CONFIG.STAGE_COLOR;
  GameMusic.initialize(this);
  GameMusic.main.play();
  HUD.initialize(this);
  Group.initialize(this);
  MyUnit.initialize(this);
  GameKey.initialize(this);
  Timer.initialize(this);
  GameText.createSlowDownCount(this);
  GameText.createSlowDown(this);
};
