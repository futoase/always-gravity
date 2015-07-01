class Bullet {
  static overlapOnObject(context, bullet, object, volume = 1.0) {
    GroupPool.explosion(context).addChild(
      Explosion.generate(context, bullet.x, bullet.y)
    );
    Bullet.deadBullet(bullet);
    Helper.revive(object);
    Bullet.playSoundEffectOfExplosion(context, volume);
    context.gameScoreCounter += object.score;
  }

  static deadBullet(bullet) {
    bullet.x = -1000;
    bullet.y = -1000;
    bullet.alive = false;
  }

  static playSoundEffectOfExplosion(context, volume) {
    context.soundEffectOfExplosion.stop();
    context.soundEffectOfExplosion.volume = volume;
    context.soundEffectOfExplosion.play();
  }
}
