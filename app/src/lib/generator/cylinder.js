class CylinderGenerator {

  /**
   * create() is return of new sprite for Cylinder.
   *
   * @param {Number} index
   * @return {Kiwi.GameObjects.Sprite} Cylinder
   */
  static create(index) {
    const context = GameState.current;

    const cylinder = new Kiwi.GameObjects.Sprite(
      context,
      context.textures.cylinder,
      GameConfig.init.spawnSprite.x,
      GameConfig.init.spawnSprite.y
    );

    cylinder.index = index;
    cylinder.animation.add('cycle', [0, 1, 2, 3, 4, 5, 6, 7], 0.1, true);
    cylinder.animation.play('cycle');
    cylinder.hitbox = new Kiwi.Geom.Rectangle(0, 10, 30, 110);
    cylinder.anchorPointX = cylinder.x * 0.5;
    cylinder.anchorPointY = cylinder.y * 0.5;
    cylinder.physics = cylinder.components.add(
      new Kiwi.Components.ArcadePhysics(cylinder, cylinder.box)
    );
    cylinder.x = parseInt(Math.random() * GameConfig.kiwiOption.width, 10);
    cylinder.y = -cylinder.height;
    cylinder.score = 200;

    return cylinder;
  }

}
