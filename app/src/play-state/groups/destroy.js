playState.destroyGroups = function(){
  this.starPool.removeChildren(0, this.starPool.members.length);
  this.cubePool.removeChildren(0, this.cubePool.members.length);
  this.circlePool.removeChildren(0, this.circlePool.members.length);
  this.cylinderPool.removeChildren(0, this.cylinderPool.members.length);
  this.bulletPool.removeChildren(0, this.bulletPool.members.length);
  this.explosionPool.removeChildren(0, this.explosionPool.members.length);
  this.rhombusPool.removeChildren(0, this.rhombusPool.members.length);
};
