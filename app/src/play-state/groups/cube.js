playState.createCubeAndApppendGroup = function() {
  for(var i = 0; i < this.NUMBER_OF_CUBE; i++) {
    this.cubePool.addChild(CubeGenerator.create(this, i));
  }
};
