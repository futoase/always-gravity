playState.forEachOfPool = function() {
  GroupPool.forEachStar(this);
  GroupPool.forEachCube(this);
  GroupPool.forEachCylinder(this);
  GroupPool.forEachCircle(this);
  GroupPool.forEachBullet(this);
  GroupPool.forEachExplosion(this);
  GroupPool.forEachRhombusSplinter(this);
  GroupPool.forEachRhombus(this);
}
