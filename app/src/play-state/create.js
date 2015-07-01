playState.create = function() {
  Kiwi.State.prototype.create.call(this);

  this.setConfig();
  this.setMusics();
  HUD.initialize(this);
  Group.initialize(this);
  MyUnit.initialize(this);
  this.setGameKeys();
  Timer.initialize(this);
  GameText.createSlowDownCount(this);
  GameText.createSlowDown(this);
};
