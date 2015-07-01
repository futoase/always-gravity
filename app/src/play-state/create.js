playState.create = function() {
  Kiwi.State.prototype.create.call(this);

  this.setConfig();
  this.setMusics();
  this.createHUD();
  this.createGroups();
  this.createMyUnit();
  this.setGameKeys();
  this.createTimers();
  GameText.createSlowDownCount(this);
  GameText.createSlowDown(this);
};
