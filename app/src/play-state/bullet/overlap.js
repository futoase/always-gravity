playState.overlapOnObject = function(bullet, object, option) {
  var soundEffectVolume;
  if (option && option.soundEffectVolume !== undefined) {
    soundEffectVolume = option.soundEffectVolume;
  }
  else{
    soundEffectVolume = 1.0;
  }

  GroupPool.explosion(this).addChild(
    Explosion.generate(this, bullet.x, bullet.y)
  );
  this.deadBullet(bullet);
  Helper.revive(object);
  this.playSoundEffectOfExplosion(soundEffectVolume);
  this.gameScoreCounter += object.score;
};
