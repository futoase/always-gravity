class RhombusSplinterGenerator {

  /**
   * create() is return of new sprite for RhombusSplinter.
   *
   * @param {Number} index
   * @return {Kiwi.GameObjects.Sprite} RhombusSplinter
   */
  static create(index) {
    const context = GameState.current;

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
