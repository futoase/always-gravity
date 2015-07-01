playState.destroyObjects = function() {
  this.destroyGroups();
  this.destroyMusics();
  this.game.huds.defaultHUD.removeAllWidgets();
  this.destroyTimers();

  let myUnit = MyUnit.instance;
  myUnit.context = this;

  myUnit.sprite.destroy();
};
