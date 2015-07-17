class RhombusGenerator {

  /**
   * create() is return of new sprite for Rhombus.
   *
   * @param {Number} index
   * @return {Kiwi.GameObjects.Sprite} Rhombus
   */
  static create(index) {
    const context = GameState.current;

    const rhombus = new Kiwi.GameObjects.Sprite(
      context, context.textures.rhombus, -100, -100
    );

    rhombus.index = index;
    rhombus.physics = rhombus.components.add(
      new Kiwi.Components.ArcadePhysics(rhombus, rhombus.box)
    );
    rhombus.x = context.game.stage.width / 2 - rhombus.width;
    rhombus.y = -rhombus.height;
    rhombus.index = index;

    return rhombus;
  }

}
