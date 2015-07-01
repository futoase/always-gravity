let lastBulletShootAt = Symbol();

class Bullet {
  static shoot(context) {
    if (!this[lastBulletShootAt]) {
      this[lastBulletShootAt] = 0;
    }

    let lastShootTime = (
      context.game.time.now() - this[lastBulletShootAt]
    );

    if (lastShootTime < context.SHOT_DELAY) {
      return;
    }

    this[lastBulletShootAt] = context.game.time.now();

    var bullet = Bullet.getFirstDeadBullet(context);

    if (bullet === null) {
      return;
    }

    bullet.alive = true;

    let myUnit = MyUnit.instance;
    myUnit.context = context;

    bullet.x = myUnit.sprite.x + myUnit.sprite.height * 0.5;
    bullet.y = myUnit.sprite.y + myUnit.sprite.width * 0.5;

    bullet.rotation = myUnit.sprite.rotation;

    bullet.physics.velocity.x = (
      Math.cos(bullet.rotation) * context.BULLET_SPEED
    );
    bullet.physics.velocity.y = (
      Math.sin(bullet.rotation) * context.BULLET_SPEED
    );

    context.soundEffectOfBullet.stop();
    context.soundEffectOfBullet.play();
  }

  static getFirstDeadBullet(context) {
    let bulletMembers = GroupPool.bullet(context).members;
    let i;
    for(i = bulletMembers.length - 1; i >= 0; i--) {
      if (bulletMembers[i].alive === false) {
        return bulletMembers[i];
      }
    }
    return null;
  }

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
