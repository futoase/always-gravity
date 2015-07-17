class BulletGenerator {

  /**
   * create() is return of new sprite for Bullet.
   *
   * @param {Number} index
   * @return {Kiwi.GameObjects.Sprite} Bullet
   */
  static create(index) {
    const context = GameState.current;

    const bullet = new Kiwi.GameObjects.Sprite(
      context, context.textures.bullet, -100, -100
    );

    bullet.index = index;
    bullet.hitbox = new Kiwi.Geom.Rectangle(8, 8, 8, 8);
    bullet.anchorPointX = bullet.width * 0.5;
    bullet.anchorPointY = bullet.height * 0.5;
    bullet.physics = bullet.components.add(
      new Kiwi.Components.ArcadePhysics(bullet, bullet.box)
    );
    bullet.alive = false;

    return bullet;
  }

}
