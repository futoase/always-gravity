playState.createMyUnitSplinterAndAppendGroup = function() {
  for(var i = 0; i < this.NUMBER_OF_MYUNIT_SPLINTER; i++) {
    this.myUnitSplinterPool.addChild(
      MyUnitSplinterGenerator.create(this, i)
    );
  }
};
