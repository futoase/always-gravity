class GameMusic {

  /**
   * destroy() is remove all of musics for PlayState.
   */
  static destroy() {
    GameMusic.main.stop();
    GameMusic.main.destroy();
    GameMusic.soundEffectOfBullet.stop();
    GameMusic.soundEffectOfBullet.destroy();
    GameMusic.soundEffectOfExplosion.stop();
    GameMusic.soundEffectOfExplosion.destroy();
    GameMusic.soundEffectOfCautionForSpeed.stop();
    GameMusic.soundEffectOfCautionForSpeed.destroy();
  }

  /**
   * Getter of main game music.
   *
   * @return {Kiwi.Sound.Audio} MUSIC_MAIN
   */
  static get main() {
    const context = GameState.current;
    if (!this[MUSIC_MAIN]) {
      this[MUSIC_MAIN] = new Kiwi.Sound.Audio(
        context.game,
        'MUSIC_MAIN',
        GameConfig.setting.BASE_MUSIC_VOLUME_PER,
        true
      );
    }
    return this[MUSIC_MAIN];
  }

  /**
   * Getter of game over music.
   *
   * @return {Kiwi.Sound.Audio} MUSIC_GAMEOVER
   */
  static get gameOver() {
    const context = GameState.current;

    if (!this[MUSIC_GAMEOVER]) {
      this[MUSIC_GAMEOVER] = new Kiwi.Sound.Audio(
        context.game,
        'musicGameover',
        GameConfig.setting.BASE_GAME_OVER_MUSIC_VOLUME_PER,
        false
      );
    }

    return this[MUSIC_GAMEOVER];
  }

  /**
   * Getter of sound effect for bullet.
   *
   * @return {Kiwi.Sound.Audio} SOUND_EFFECT_OF_BULLET
   */
  static get soundEffectOfBullet() {
    const context = GameState.current;

    if (!this[SOUND_EFFECT_OF_BULLET]) {
      this[SOUND_EFFECT_OF_BULLET] = new Kiwi.Sound.Audio(
        context.game,
        'bullet-se',
        GameConfig.setting.BASE_LASER_VOLUME_PER,
        false
      );
    }
    return this[SOUND_EFFECT_OF_BULLET];
  }

  /**
   * Getter of sound effect for explosion.
   *
   * @return {Kiwi.Sound.Audio} SOUND_EFFECT_OF_EXPLOSION
   */
  static get soundEffectOfExplosion() {
    const context = GameState.current;

    if (!this[SOUND_EFFECT_OF_EXPLOSION]) {
      this[SOUND_EFFECT_OF_EXPLOSION] = new Kiwi.Sound.Audio(
        context.game,
        'explosion-se',
        GameConfig.setting.BASE_EXPLOSION_VOLUME_PER,
        false
      );
    }
    return this[SOUND_EFFECT_OF_EXPLOSION];
  }

  /**
   * Getter of sound effect for caution for speed.
   *
   * @return {Kiwi.Sound.Audio} SOUND_EFFECT_OF_CAUTION_FOR_SPEED
   */
  static get soundEffectOfCautionForSpeed() {
    const context = GameState.current;

    if (!this[SOUND_EFFECT_OF_CAUTION_FOR_SPEED]) {
      this[SOUND_EFFECT_OF_CAUTION_FOR_SPEED] = new Kiwi.Sound.Audio(
        context.game,
        'caution-of-speed-se',
        GameConfig.setting.BASE_CAUTION_VOLUME_PER,
        false
      );
    }
    return this[SOUND_EFFECT_OF_CAUTION_FOR_SPEED];
  }

  /**
   * Getter of sound effect for circle.
   *
   * @return {Kiwi.Sound.Audio} SOUND_EFFECT_OF_CIRCLE
   */
  static get soundEffectOfCircle() {
    const context = GameState.current;

    if (!this[SOUND_EFFECT_OF_CIRCLE]) {
      this[SOUND_EFFECT_OF_CIRCLE] = new Kiwi.Sound.Audio(
        context.game,
        'circle-se',
        GameConfig.setting.BASE_CIRCLE_VOLUME_PER,
        false
      );
    }
    return this[SOUND_EFFECT_OF_CIRCLE];
  }

  /**
   * Getter of sound effect for my unit explosion.
   *
   * @return {Kiwi.Sound.Audio} SOUND_EFFECT_OF_MYUNIT_EXPLOSION
   */
  static get soundEffectOfMyUnitExplosion() {
    const context = GameState.current;

    if (!this[SOUND_EFFECT_OF_MYUNIT_EXPLOSION]) {
      this[SOUND_EFFECT_OF_MYUNIT_EXPLOSION] = new Kiwi.Sound.Audio(
        context.game,
        'explosion-myunit-se',
        GameConfig.setting.BASE_EXPLOSION_MYUNIT_VOLUME_PER,
        false
      );
    }
    return this[SOUND_EFFECT_OF_MYUNIT_EXPLOSION];
  }

}
