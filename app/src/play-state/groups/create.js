playState.createGroups = function() {
  this.starPool = new Kiwi.Group(this);
  this.addChild(this.starPool);
  this.createStarAndAppendGroup();

  this.cubePool = new Kiwi.Group(this);
  this.addChild(this.cubePool);
  this.createCubeAndApppendGroup();

  this.circlePool = new Kiwi.Group(this);
  this.addChild(this.circlePool);
  this.createCircleAndAppendGroup();

  this.cylinderPool = new Kiwi.Group(this);
  this.addChild(this.cylinderPool);
  this.createCylinderAndAppendGroup();

  this.bulletPool = new Kiwi.Group(this);
  this.addChild(this.bulletPool);
  this.createBulletAndAppendGroup();

  this.myUnitSplinterPool = new Kiwi.Group(this);
  this.addChild(this.myUnitSplinterPool);
  this.createMyUnitSplinterAndAppendGroup();

  this.rhombusPool = new Kiwi.Group(this);
  this.addChild(this.rhombusPool);
  this.createRhombusAndAppendGroup();

  this.rhombusSplinterPool = new Kiwi.Group(this);
  this.addChild(this.rhombusSplinterPool);
  this.createRhombusSplinterAndAppendGroup();

  this.explosionPool = new Kiwi.Group(this);
  this.addChild(this.explosionPool);
};

