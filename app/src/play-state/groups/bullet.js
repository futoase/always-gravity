playState.createBulletAndAppendGroup = function() {
  for(var i = 0; i < this.NUMBER_OF_BULLET; i++) {
    this.bulletPool.addChild(
      BulletGenerator.create(this, i)
    );
  }
};

