playState.destroyTimers = function() {
  this.game.time.clock.removeTimer(this.starTimer);
  this.game.time.clock.removeTimer(this.cubeTimer);
  this.game.time.clock.removeTimer(this.cylinderTimer);
  this.game.time.clock.removeTimer(this.circleTimer);
  this.game.time.clock.removeTimer(this.rhombusTimer);
  this.game.time.clock.removeTimer(this.coutionSpeedSoundEffectTimer);
  this.game.time.clock.removeTimer(this.overTheLimitVelocityCount);
};
