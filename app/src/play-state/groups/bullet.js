playState.createBulletAndAppendGroup = function() {
  for(var i = 0; i < this.NUMBER_OF_BULLET; i++) {
    var bullet = new Kiwi.GameObjects.Sprite(
      this, this.textures.bullet, -100, -100
    );
    bullet.hitbox = new Kiwi.Geom.Rectangle(8, 8, 8, 8);
    this.bulletPool.addChild(bullet);
    bullet.anchorPointX = bullet.width * 0.5;
    bullet.anchorPointY = bullet.height * 0.5;
    bullet.physics = bullet.components.add(
      new Kiwi.Components.ArcadePhysics(bullet, bullet.box)
    );
    bullet.alive = false;
    bullet.index = i;
  }
};

