playState.createCircleAndAppendGroup = function() {
  for(var i = 0; i < this.NUMBER_OF_CIRCLE; i++) {
    this.circlePool.addChild(CircleGenerator.create(this, i));
  }
};
