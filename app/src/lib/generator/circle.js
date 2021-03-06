class CircleGenerator {

  /**
   * create() is return of new sprite for Circle.
   *
   * @param {Number} index
   * @return {Kiwi.GameObjects.Sprite} Circle
   */
  static create(index) {
    const context = GameState.current;

    const circle = new Kiwi.GameObjects.Sprite(
      context,
      context.textures.circle,
      GameConfig.init.spawnSprite.x,
      GameConfig.init.spawnSprite.y
    );

    circle.index = index;
    circle.hitbox = new Kiwi.Geom.Rectangle(10, 0, 18, 18);
    circle.anchorPointX = circle.width * 0.5;
    circle.anchorPointY = circle.height * 0.5;
    circle.physics = circle.components.add(
      new Kiwi.Components.ArcadePhysics(circle, circle.box)
    );
    circle.x = parseInt(Math.random() * GameConfig.kiwiOption.width, 10);
    circle.score = GameConfig.score.circle;

    return circle;
  }

}
