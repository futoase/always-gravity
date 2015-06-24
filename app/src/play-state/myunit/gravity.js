playState.updateGravity = function() {
  if (this.myUnitExplosion !== true) {
    this.myUnit.physics.acceleration.y += this.GRAVITY;
  }
};
