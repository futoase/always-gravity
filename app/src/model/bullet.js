const lastBulletShootAt = Symbol();

class Bullet {

  /**
   * shoot() is create bullet.
   */
  static shoot() {
    const context = GameState.current;

    if (!this[lastBulletShootAt]) {
      this[lastBulletShootAt] = 0;
    }

    const lastShootTime = (
      context.game.time.now() - this[lastBulletShootAt]
    );

    if (lastShootTime < GameConfig.setting.SHOOT_DELAY) {
      return;
    }

    this[lastBulletShootAt] = context.game.time.now();

    const bullet = Bullet.getFirstDeadBullet();

    if (bullet === null) {
      return;
    }

    bullet.alive = true;

    const myUnit = MyUnit.instance;

    bullet.x = myUnit.sprite.x + myUnit.sprite.height * 0.5;
    bullet.y = myUnit.sprite.y + myUnit.sprite.width * 0.5;

    bullet.rotation = myUnit.sprite.rotation;

    bullet.physics.velocity.x = (
      Math.cos(bullet.rotation) * GameConfig.setting.BULLET_SPEED
    );
    bullet.physics.velocity.y = (
      Math.sin(bullet.rotation) * GameConfig.setting.BULLET_SPEED
    );

    GameMusic.soundEffectOfBullet.stop();
    GameMusic.soundEffectOfBullet.play();
  }

  /**
   * getFirstDeadBullet() a return is dead of bullet.
   *
   * @return {Kiwi.Sprite} bullet
   * @return {null} null
   */
  static getFirstDeadBullet() {
    const bulletMembers = GroupPool.bullet().members;
    let i;
    for (i = bulletMembers.length - 1; i >= 0; i--) {
      if (bulletMembers[i].alive === false) {
        return bulletMembers[i];
      }
    }
    return null;
  }

  /**
   * overlapOnObject()
   * Emit event will be collision of bullet from other sprite.
   */
  static overlapOnObject(bullet, object, volume = 1.0) {
    GroupPool.explosion().addChild(
      Explosion.generate(bullet.x, bullet.y)
    );
    Bullet.deadBullet(bullet);
    Helper.revive(object);
    Bullet.playSoundEffectOfExplosion(volume);
    GameCounter.gameScore += object.score;
  }

  /**
   * deadBullet() is initialize of position for bullet.
   *
   * @param {Kiwi.Sprite} bullet
   */
  static deadBullet(bullet) {
    bullet.x = -1000;
    bullet.y = -1000;
    bullet.alive = false;
  }

  /**
   * playSoundEffectOfExplosion()
   * Play of Sound effect for the Explosion.
   *
   * @param {Number} volume
   */
  static playSoundEffectOfExplosion(volume) {
    const se = GameMusic.soundEffectOfExplosion;
    se.stop();
    se.volume = volume;
    se.play();
  }

}
