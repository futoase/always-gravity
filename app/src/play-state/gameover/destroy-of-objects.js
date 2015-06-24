playState.destroyObjects = function() {
  this.destroyGroups();
  this.destroyMusics();
  this.destroyHUD();
  this.destroyTimers();
  this.myUnit.destroy();
};
