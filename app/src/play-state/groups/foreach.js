playState.forEachOfPool = function() {
  this.starPool.forEach(this, Helper.checkSpritePosition);
  this.cubePool.forEach(this, function (cube) {
    Helper.updateSpriteRotation(cube, 5);
  });
  this.cubePool.forEach(this, Helper.checkSpritePosition);
  this.cylinderPool.forEach(this, Helper.checkSpritePosition);
  this.circlePool.forEach(this, Helper.checkSpritePosition);
  this.circlePool.forEach(this, function(circle) {
    Helper.updateSpriteRotation(circle, 30);
  });
  this.circlePool.forEach(this, this.checkCollisionOfMyUnit);
  this.bulletPool.forEach(this, Helper.checkSpritePosition);
  this.bulletPool.forEach(this, this.checkCollision);
  this.explosionPool.forEach(this, this.destroyFinishCellIndexOfExplosion);
  this.rhombusPool.forEach(this, this.checkCollisionOfMyUnit);
  this.rhombusSplinterPool.forEach(this, Helper.checkSpritePosition);
  this.rhombusSplinterPool.forEach(this, this.checkCollisionOfMyUnit);
}
