class RhombusSplinterGenerator {
  static create(context, index) {
    let rhombusSplinter = new Kiwi.GameObjects.Sprite(
      context, context.textures.rhombus, -100, -100
    );
    rhombusSplinter.physics = rhombusSplinter.components.add(
      new Kiwi.Components.ArcadePhysics(rhombusSplinter, rhombusSplinter.ox)
    );
    rhombusSplinter.index = index;

    return rhombusSplinter;
  }
}
