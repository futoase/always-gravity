let gameMusicContext = Symbol();
let musicMain = Symbol();
let musicGameOver = Symbol();
let soundEffectOfBullet = Symbol();
let soundEffectOfExplosion = Symbol();
let soundEffectOfCautionForSpeed = Symbol();
let soundEffectOfCircle = Symbol();
let soundEffectOfMyUnitExplosion = Symbol();

class GameMusic {

  /**
   * initialize() is initialize settings of musics for Always-Gravity.
   */
  static initialize() {
    GameMusic.main;
    GameMusic.gameOver;
    GameMusic.soundEffectOfBullet;
    GameMusic.soundEffectOfExplosion;
    GameMusic.soundEffectOfCautionForSpeed;
    GameMusic.soundEffectOfCircle;
    GameMusic.soundEffectOfMyUnitExplosion;
  }

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
   * @return {Kiwi.Sound.Audio} musicMain
   */
  static get main() {
    const context = GameState.current;

    if (!this[musicMain]) {
      this[musicMain] = new Kiwi.Sound.Audio(
        context.game,
        'musicMain',
        GAME_CONFIG.BASE_MUSIC_VOLUME_PER,
        true
      );
    }
    return this[musicMain];
  }

  /**
   * Getter of game over music.
   *
   * @return {Kiwi.Sound.Audio} musicGameOver
   */
  static get gameOver() {
    const context = GameState.current;

    if (!this[musicGameOver]) {
      this[musicGameOver] = new Kiwi.Sound.Audio(
        context.game,
        'musicGameover',
        GAME_CONFIG.BASE_GAME_OVER_MUSIC_VOLUME_PER,
        false
      );
    }
    return this[musicGameOver];
  }

  /**
   * Getter of sound effect for bullet.
   *
   * @return {Kiwi.Sound.Audio} soundEffectOfBullet
   */
  static get soundEffectOfBullet() {
    const context = GameState.current;

    if (!this[soundEffectOfBullet]) {
      this[soundEffectOfBullet] = new Kiwi.Sound.Audio(
        context.game,
        'bullet-se',
        GAME_CONFIG.BASE_LASER_VOLUME_PER,
        false
      );
    }
    return this[soundEffectOfBullet];
  }

  /**
   * Getter of sound effect for explosion.
   *
   * @return {Kiwi.Sound.Audio} soundEffectOfExplosion
   */
  static get soundEffectOfExplosion() {
    const context = GameState.current;

    if (!this[soundEffectOfExplosion]) {
      this[soundEffectOfExplosion] = new Kiwi.Sound.Audio(
        context.game,
        'explosion-se',
        GAME_CONFIG.BASE_EXPLOSION_VOLUME_PER,
        false
      );
    }
    return this[soundEffectOfExplosion];
  }

  /**
   * Getter of sound effect for caution for speed.
   *
   * @return {Kiwi.Sound.Audio} soundEffectOfCautionForSpeed
   */
  static get soundEffectOfCautionForSpeed() {
    const context = GameState.current;

    if (!this[soundEffectOfCautionForSpeed]) {
      this[soundEffectOfCautionForSpeed] = new Kiwi.Sound.Audio(
        context.game,
        'caution-of-speed-se',
        GAME_CONFIG.BASE_CAUTION_VOLUME_PER,
        false
      );
    }
    return this[soundEffectOfCautionForSpeed];
  }

  /**
   * Getter of sound effect for circle.
   *
   * @return {Kiwi.Sound.Audio} soundEffectOfCircle
   */
  static get soundEffectOfCircle() {
    const context = GameState.current;

    if (!this[soundEffectOfCircle]) {
      this[soundEffectOfCircle] = new Kiwi.Sound.Audio(
        context.game,
        'circle-se',
        GAME_CONFIG.BASE_CIRCLE_VOLUME_PER,
        false
      );
    }
    return this[soundEffectOfCircle];
  }

  /**
   * Getter of sound effect for my unit explosion.
   *
   * @return {Kiwi.Sound.Audio} soundEffectOfMyUnitExplosion
   */
  static get soundEffectOfMyUnitExplosion() {
    const context = GameState.current;

    if (!this[soundEffectOfMyUnitExplosion]) {
      this[soundEffectOfMyUnitExplosion] = new Kiwi.Sound.Audio(
        context.game,
        'explosion-myunit-se',
        GAME_CONFIG.BASE_EXPLOSION_MYUNIT_VOLUME_PER,
        false
      );
    }
    return this[soundEffectOfMyUnitExplosion];
  }

}
