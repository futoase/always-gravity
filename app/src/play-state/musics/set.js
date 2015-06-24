playState.setMusics = function() {
  this.musicMain = new Kiwi.Sound.Audio(
    this.game, 'musicMain', this.BASE_MUSIC_VOLUME_PER, true
  );
  this.musicMain.play();

  this.soundEffectOfBullet = new Kiwi.Sound.Audio(
    this.game, 'bullet-se', this.BASE_LASER_VOLUME_PER, false
  );
  this.soundEffectOfExplosion = new Kiwi.Sound.Audio(
    this.game, 'explosion-se', this.BASE_EXPLOSION_VOLUME_PER, false
  );

  this.soundEffectOfCautionForSpeed = new Kiwi.Sound.Audio(
    this.game, 'caution-of-speed-se', this.BASE_CAUTION_VOLUME_PER, false
  );

  this.soundEffectOfCircle = new Kiwi.Sound.Audio(
    this.game, 'circle-se', this.BASE_CIRCLE_VOLUME_PER, false
  );

  this.soundEffectOfMyUnitExplosion = new Kiwi.Sound.Audio(
    this.game, 'explosion-myunit-se', this.BASE_EXPLOSION_MYUNIT_VOLUME_PER, false
  );
};

