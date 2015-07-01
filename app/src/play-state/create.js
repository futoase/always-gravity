playState.create = function() {
  Kiwi.State.prototype.create.call(this);

  this.setConfig();
  //this.setMusics();
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
