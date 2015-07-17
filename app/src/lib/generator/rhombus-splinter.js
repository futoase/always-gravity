class RhombusSplinterGenerator {

  /**
   * create() is return of new sprite for RhombusSplinter.
   *
   * @param {Number} index
   * @return {Kiwi.GameObjects.Sprite} RhombusSplinter
   */
  static create(index) {
    const context = GameState.current;

    const rhombusSplinter = new Kiwi.GameObjects.Sprite(
      context, context.textures.rhombus, -100, -100
    );

    rhombusSplinter.index = index;
    rhombusSplinter.physics = rhombusSplinter.components.add(
      new Kiwi.Components.ArcadePhysics(rhombusSplinter, rhombusSplinter.ox)
    );

    return rhombusSplinter;
  }

}
