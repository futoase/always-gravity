playState.createCylinderAndAppendGroup = function() {
  for(var i = 0; i < this.NUMBER_OF_CYLINDER; i++) {
    this.cylinderPool.addChild(CylinderGenerator.create(this, i));
  }
};

