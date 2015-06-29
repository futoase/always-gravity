playState.createRhombusSplinterAndAppendGroup = function() {
  for(var i = 0; i < this.NUMBER_OF_RHOMBUS_SPLINTER; i++) {
    this.rhombusSplinterPool.addChild(
      RhombusSplinterGenerator.create(this, i)
    );
  }
};
