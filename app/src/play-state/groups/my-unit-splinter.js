playState.createMyUnitSplinterAndAppendGroup = function() {
  for(var i = 0; i < this.NUMBER_OF_MYUNIT_SPLINTER; i++) {
    var myUnitSplinter = new Kiwi.GameObjects.Sprite(
      this, this.textures.myUnitSplinter, -100, -100
    );

    this.myUnitSplinterPool.addChild(myUnitSplinter);
    myUnitSplinter.animation.add('explosion', [0, 1, 2, 3, 4, 5], 0.05, true);
    myUnitSplinter.physics = myUnitSplinter.components.add(
      new Kiwi.Components.ArcadePhysics(myUnitSplinter, myUnitSplinter.box)
    );
    myUnitSplinter.index = i;
  }
};
