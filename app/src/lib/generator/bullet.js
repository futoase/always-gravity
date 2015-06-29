class BulletGenerator {
  static create(context, index) {
    let bullet = new Kiwi.GameObjects.Sprite(
      context, context.textures.bullet, -100, -100
    );
    bullet.hitbox = new Kiwi.Geom.Rectangle(8, 8, 8, 8);
    bullet.anchorPointX = bullet.width * 0.5;
    bullet.anchorPointY = bullet.height * 0.5;
    bullet.physics = bullet.components.add(
      new Kiwi.Components.ArcadePhysics(bullet, bullet.box)
    );
    bullet.alive = false;
    bullet.index = index;

    return bullet;
  }
}
