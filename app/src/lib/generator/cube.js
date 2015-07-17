class CubeGenerator {

  /**
   * create() is return of new sprite for Cube.
   *
   * @param {Number} index
   * @return {Kiwi.GameObjects.Sprite} Cube
   */
  static create(index) {
    const context = GameState.current;

    const cube = new Kiwi.GameObjects.Sprite(
      context, context.textures.cube, -100, -100
    );

    cube.index = index;
    cube.hitbox = new Kiwi.Geom.Rectangle(10, 0, 20, 20);
    cube.anchorPointX = cube.width * 0.5;
    cube.anchorPointY = cube.height * 0.5;
    cube.physics = cube.components.add(
      new Kiwi.Components.ArcadePhysics(cube, cube.box)
    );
    cube.x = parseInt(Math.random() * 800, 10);
    cube.score = 100;

    return cube;
  }

}
