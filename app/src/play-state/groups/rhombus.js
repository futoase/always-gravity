playState.createRhombusAndAppendGroup = function() {
  for(var i = 0; i < this.NUMBER_OF_RHOMBUS; i++) {
    this.rhombusPool.addChild(RhombusGenerator.create(this, i));
  }
};
