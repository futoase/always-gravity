playState.destroyMusics = function() {
  this.musicMain.stop();
  this.musicMain.destroy();
  this.soundEffectOfBullet.stop();
  this.soundEffectOfBullet.destroy();
  this.soundEffectOfExplosion.stop();
  this.soundEffectOfExplosion.destroy();
  this.soundEffectOfCautionForSpeed.stop();
  this.soundEffectOfCautionForSpeed.destroy();
};
