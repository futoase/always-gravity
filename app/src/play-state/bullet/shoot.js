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

  let myUnit = MyUnit.instance;
  myUnit.context = this;

  bullet.x = myUnit.sprite.x + myUnit.sprite.height * 0.5;
  bullet.y = myUnit.sprite.y + myUnit.sprite.width * 0.5;

  bullet.rotation = myUnit.sprite.rotation;

  bullet.physics.velocity.x = (
    Math.cos(bullet.rotation) * this.BULLET_SPEED
  );
  bullet.physics.velocity.y = (
    Math.sin(bullet.rotation) * this.BULLET_SPEED
  );

  this.soundEffectOfBullet.stop();
  this.soundEffectOfBullet.play();
};

