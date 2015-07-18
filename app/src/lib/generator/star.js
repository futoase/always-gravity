class StarGenerator {

  /**
   * create() is return of new sprite for Star.
   *
   * @param {Number} index
   * @return {Kiwi.GameObjects.Sprite} Star
   */
  static create(index) {
    const context = GameState.current;

    const star = new Kiwi.GameObjects.Sprite(
      context,
      context.textures.star,
      GameConfig.init.spawnSprite.x,
      GameConfig.init.spawnSprite.y
    );

    star.index = index;
    star.anchorPointX = star.width * 0.5;
    star.anchorPointY = star.height * 0.5;
    star.physics = star.components.add(
      new Kiwi.Components.ArcadePhysics(star, star.box)
    );
    star.physics.acceleration.y = 1;
    star.x = parseInt(Math.random() * GameConfig.kiwiOption.width, 10);

    if (index < parseInt(GameConfig.setting.NUMBER_OF_STAR / 3, 10)) {
      star.y = parseInt(Math.random() *GameConfig.kiwiOption.height, 10);
    } else {
      star.y = -1 * parseInt(Math.random() * 200, 10);
    }

    return star;
  }

}
