playState.createTimers = function() {

  this.starTimer = this.game.time.clock.setInterval(
    this.spawnSpriteOfStar, 100, this
  );

  this.cubeTimer = this.game.time.clock.setInterval(
    this.spawnSpriteOfCube, 200, this
  );

  this.cylinderTimer = this.game.time.clock.setInterval(
    this.spawnSpriteOfCylinder, 100, this
  );

  this.circleTimer = this.game.time.clock.setInterval(
    this.spawnSpriteOfCircle, 500, this
  );

  this.rhombusTimer = this.game.time.clock.setInterval(
    this.spawnSpriteOfRhombus, 100, this
  );

  this.coutionForSpeedSoundEffectTimer = (
    this.game.time.clock.setInterval(
      this.speedLimitOfUnit, 500, this
    )
  );

  this.overTheLimitVelocityCountTimer = (
    this.game.time.clock.setInterval(
      this.overTheLimitVelocityCount, 1000, this
    )
  );
};
