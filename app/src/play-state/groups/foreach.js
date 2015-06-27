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
  this.bulletPool.forEach(this, Helper.checkSpritePosition);
  this.bulletPool.forEach(this, this.checkCollision);
  this.explosionPool.forEach(this, this.destroyFinishCellIndexOfExplosion);
  this.rhombusSplinterPool.forEach(this, Helper.checkSpritePosition);

  let myUnit = MyUnit.instance;
  myUnit.context = this;

  this.circlePool.members.map((member) => {
    myUnit.overlapOnOther(member);
  });
  this.rhombusPool.members.map((member) => {
    myUnit.overlapOnOther(member);
  });
  this.rhombusSplinterPool.members.map((member) => {
    myUnit.overlapOnOther(member);
  });
}
