playState.shootBullet = function() {
  if (this.lastBulletShotAt === undefined) {
    this.lastBulletShotAt = 0;
  }

  if ((this.game.time.now() - this.lastBulletShotAt) < this.SHOT_DELAY) {
    return;
  }

  this.lastBulletShotAt = this.game.time.now();

  var bullet = this.getFirstDeadBullet();

  if (bullet === null || bullet === undefined) {
    return;
  }

  bullet.alive = true;

  bullet.x = this.myUnit.x + this.myUnit.height * 0.5;
  bullet.y = this.myUnit.y + this.myUnit.width * 0.5;

  bullet.rotation = this.myUnit.rotation;

  bullet.physics.velocity.x = (
    Math.cos(bullet.rotation) * this.BULLET_SPEED
  );
  bullet.physics.velocity.y = (
    Math.sin(bullet.rotation) * this.BULLET_SPEED
  );

  this.soundEffectOfBullet.stop();
  this.soundEffectOfBullet.play();
};

