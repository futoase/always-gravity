playState.overlapOnObject = function(bullet, object, option) {
  var soundEffectVolume;
  if (option && option.soundEffectVolume !== undefined) {
    soundEffectVolume = option.soundEffectVolume;
  }
  else{
    soundEffectVolume = 1.0;
  }

  this.spawnExplosion(bullet.x, bullet.y);
  this.deadBullet(bullet);
  Helper.revive(object);
  this.playSoundEffectOfExplosion(soundEffectVolume);
  this.gameScoreCounter += object.score;
};
