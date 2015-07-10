class RhombusGenerator {

  static create(index) {
    const context = GameState.instance.current;

    let rhombus = new Kiwi.GameObjects.Sprite(
      context, context.textures.rhombus, -100, -100
    );
    rhombus.physics = rhombus.components.add(
      new Kiwi.Components.ArcadePhysics(rhombus, rhombus.box)
    );
    rhombus.x = context.game.stage.width / 2 - rhombus.width;
    rhombus.y = -rhombus.height;
    rhombus.index = index;

    return rhombus;
  }

}
