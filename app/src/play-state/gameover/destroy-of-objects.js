playState.destroyObjects = function() {
  GroupPool.removeChildrenForAll(this);
  GameMusic.destroy();
  this.game.huds.defaultHUD.removeAllWidgets();
  Timer.destroy(this);

  let myUnit = MyUnit.instance;
  myUnit.context = this;

  myUnit.sprite.destroy();
};
