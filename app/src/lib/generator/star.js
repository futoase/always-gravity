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
      context, context.textures.star, -100, -100
    );
    star.anchorPointX = star.width * 0.5;
    star.anchorPointY = star.height * 0.5;
    star.physics = star.components.add(
      new Kiwi.Components.ArcadePhysics(star, star.box)
    );
    star.physics.acceleration.y = 1;
    star.x = Number(Math.random() * 800);
    if (index < Number(GameConfig.setting.NUMBER_OF_STAR / 3)) {
      star.y = Number(Math.random() * 600);
    } else {
      star.y = -1 * Number(Math.random() * 200);
    }
    star.index = index;

    return star;
  }

}
