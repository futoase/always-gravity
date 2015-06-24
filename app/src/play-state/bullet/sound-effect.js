playState.playSoundEffectOfExplosion = function(volume) {
  this.soundEffectOfExplosion.stop();
  this.soundEffectOfExplosion.volume = volume;
  this.soundEffectOfExplosion.play();
};
