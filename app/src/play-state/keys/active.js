playState.leftInputIsActive = function() {
  return this.leftKey.isDown;
};

playState.rightInputIsActive = function() {
  return this.rightKey.isDown;
};

playState.upInputIsActive = function() {
  return this.upKey.isDown;
};

playState.shootInputIsActive = function() {
  return this.shootKey.isDown;
};

playState.restartInputIsActive = function() {
  return this.restartKey.isDown;
};

playState.exitGameInputIsActive = function() {
  return this.exitKey.isDown;
};
