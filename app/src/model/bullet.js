let lastBulletShootAt = Symbol();

class Bullet {

  static shoot() {
    const context = GameState.instance.current;

    if (!this[lastBulletShootAt]) {
      this[lastBulletShootAt] = 0;
    }

    let lastShootTime = (
      context.game.time.now() - this[lastBulletShootAt]
    );

    if (lastShootTime < GAME_CONFIG.SHOOT_DELAY) {
      return;
    }

    this[lastBulletShootAt] = context.game.time.now();

    var bullet = Bullet.getFirstDeadBullet();

    if (bullet === null) {
      return;
    }

    bullet.alive = true;

    let myUnit = MyUnit.instance;

    bullet.x = myUnit.sprite.x + myUnit.sprite.height * 0.5;
    bullet.y = myUnit.sprite.y + myUnit.sprite.width * 0.5;

    bullet.rotation = myUnit.sprite.rotation;

    bullet.physics.velocity.x = (
      Math.cos(bullet.rotation) * GAME_CONFIG.BULLET_SPEED
    );
    bullet.physics.velocity.y = (
      Math.sin(bullet.rotation) * GAME_CONFIG.BULLET_SPEED
    );

    GameMusic.soundEffectOfBullet.stop();
    GameMusic.soundEffectOfBullet.play();
  }

  static getFirstDeadBullet() {
    let bulletMembers = GroupPool.bullet().members;
    let i;
    for(i = bulletMembers.length - 1; i >= 0; i--) {
      if (bulletMembers[i].alive === false) {
        return bulletMembers[i];
      }
    }
    return null;
  }

  static overlapOnObject(bullet, object, volume = 1.0) {
    GroupPool.explosion().addChild(
      Explosion.generate(bullet.x, bullet.y)
    );
    Bullet.deadBullet(bullet);
    Helper.revive(object);
    Bullet.playSoundEffectOfExplosion(volume);
    GAME_COUNTER.gameScore += object.score;
  }

  static deadBullet(bullet) {
    bullet.x = -1000;
    bullet.y = -1000;
    bullet.alive = false;
  }

  static playSoundEffectOfExplosion(volume) {
    let se = GameMusic.soundEffectOfExplosion;
    se.stop();
    se.volume = volume;
    se.play();
  }

}
