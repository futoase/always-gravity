playState.update = function() {
  Kiwi.State.prototype.update.call(this);

  this.updateMyUnit();
  this.updateGravity();
  this.updateHud();

  if (this.contains(this.myUnit) && this.shootInputIsActive()) {
    this.shootBullet();
  }

  this.forEachOfPool();

  if (this.isGameOver) {
    this.whenGameOverInputKeys();
  }
};
