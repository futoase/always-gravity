playState.destroyObjects = function() {
  this.destroyGroups();
  this.destroyMusics();
  this.destroyHUD();
  this.destroyTimers();

  let myUnit = MyUnit.instance;
  myUnit.context = this;

  myUnit.sprite.destroy();
};
