playState.createRhombusSplinterAndAppendGroup = function() {
  for(var i = 0; i < this.NUMBER_OF_RHOMBUS_SPLINTER; i++) {
    var rhombusSplinter = new Kiwi.GameObjects.Sprite(
      this, this.textures.rhombus, -100, -100
    );
    this.rhombusSplinterPool.addChild(rhombusSplinter);
    rhombusSplinter.physics = rhombusSplinter.components.add(
      new Kiwi.Components.ArcadePhysics(rhombusSplinter, rhombusSplinter.ox)
    );
    rhombusSplinter.index = i;
  }
};
