playState.createRhombusAndAppendGroup = function() {
  for(var i = 0; i < this.NUMBER_OF_RHOMBUS; i++) {
    var rhombus = new Kiwi.GameObjects.Sprite(
      this, this.textures.rhombus, -100, -100
    );
    this.rhombusPool.addChild(rhombus);
    rhombus.physics = rhombus.components.add(
      new Kiwi.Components.ArcadePhysics(rhombus, rhombus.box)
    );
    rhombus.x = this.game.stage.width / 2 - rhombus.width;
    rhombus.y = -rhombus.height;
    rhombus.index = i;
  }
};
