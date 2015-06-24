playState.checkCollisionOfMyUnit = function(object) {
  if (!this.contains(this.myUnit) || this.isGameOver) {
    return;
  }

  var isOverlap = this.myUnit.physics.overlaps(object);
  var isOverlapOfRhombus = isOverlap && object.name == "rhombus";

  if (isOverlap && this.CURRENT_HITPOINT >= 1) {
    this.CURRENT_HITPOINT--;
    this.hudHitPointBar.counter.current--;
    this.spawnExplosion(this.myUnit.x, this.myUnit.y);
    this.soundEffectOfMyUnitExplosion.play();
    Helper.revive(object);
  }

  if (isOverlapOfRhombus || this.CURRENT_HITPOINT < 1) {
    this.CURRENT_HITPOINT = 0;
    this.hudHitPointBar.counter.current = 0;
    this.explosionOfMyUnit();
  }
};
