playState.updateMyUnit = function() {
  if (this.isGameOver) {
    return;
  }

  if (this.myUnit.x > this.game.stage.width) {
    this.myUnit.x = 0;
  }
  if (this.myUnit.x < 0) {
    this.myUnit.x = this.game.stage.width;
  }
  if (this.myUnit.y > this.game.stage.height) {
    this.myUnit.y = 0;
  }
  if (this.myUnit.y < 0) {
    this.myUnit.y = this.game.stage.height;
  }

  if (this.leftInputIsActive() &&
      this.myUnitExplosion === undefined) {
    this.myUnit.physics.angularVelocity = -this.ROTATION_SPEED;
  }
  else if (this.rightInputIsActive() &&
           this.myUnitExplosion === undefined) {
    this.myUnit.physics.angularVelocity = this.ROTATION_SPEED;
  }
  else {
    this.myUnit.physics.angularVelocity = 0;
  }

  if (this.upInputIsActive() &&
      this.myUnitExplosion === undefined) {
    this.myUnit.physics.acceleration.x = (
      Math.cos(this.myUnit.rotation) * this.ACCELERATION
    );
    this.myUnit.physics.acceleration.y = (
      Math.sin(this.myUnit.rotation) * this.ACCELERATION
    );
    // Change sprite 'Engine on'.
    this.myUnit.cellIndex = 1;
  }
  else {
    this.myUnit.physics.acceleration.setTo(0, 0);

    // Change sprite 'Engine off'.
    this.myUnit.cellIndex = 0;
  }
};
