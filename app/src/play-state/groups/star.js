playState.createStarAndAppendGroup = function() {
  for(var i = 0; i < this.NUMBER_OF_STAR; i++) {
    this.starPool.addChild(StarGenerator.create(this, i));
  }
};
