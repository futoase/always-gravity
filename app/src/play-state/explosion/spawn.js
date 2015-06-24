playState.spawnExplosion = function(x, y) {
  var explosion = new Kiwi.GameObjects.Sprite(
    this, this.textures.explosion, x, y
  );
  this.explosionPool.addChild(explosion);
  explosion.x = x - explosion.width * 0.5;
  explosion.y = y - explosion.height * 0.5;
  explosion.animation.add('explosion', [0, 1, 2, 3], 0.1, true);
  explosion.animation.play('explosion');
};

