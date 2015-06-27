playState.update = function() {
  Kiwi.State.prototype.update.call(this);
  let myUnit = MyUnit.instance;
  myUnit.context = this;

  this.updateMyUnit();
  this.updateHUD();

  if (this.contains(myUnit.sprite) && this.shootInputIsActive()) {
    this.shootBullet();
  }

  this.forEachOfPool();

  if (this.isGameOver) {
    this.whenGameOverInputKeys();
  }
};
