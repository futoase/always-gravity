let gameMusicContext = Symbol();
let musicMain = Symbol();
let musicGameOver = Symbol();
let soundEffectOfBullet = Symbol();
let soundEffectOfExplosion = Symbol();
let soundEffectOfCautionForSpeed = Symbol();
let soundEffectOfCircle = Symbol();
let soundEffectOfMyUnitExplosion = Symbol();

class GameMusic {

  static set context(value) {
    this[gameMusicContext] = value;
  }

  static get context() {
    return this[gameMusicContext];
  }

  static initialize(context) {
    GameMusic.context = context;
    GameMusic.main;
    GameMusic.gameOver;
    GameMusic.soundEffectOfBullet;
    GameMusic.soundEffectOfExplosion;
    GameMusic.soundEffectOfCautionForSpeed;
    GameMusic.soundEffectOfCircle;
    GameMusic.soundEffectOfMyUnitExplosion;
  }

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

  static get main() {
    if (!this[musicMain]) {
      this[musicMain] = new Kiwi.Sound.Audio(
        GameMusic.context.game,
        'musicMain',
        GAME_CONFIG.BASE_MUSIC_VOLUME_PER,
        true
      );
    }
    return this[musicMain];
  }

  static get gameOver() {
    if (!this[musicGameOver]) {
      this[musicGameOver] = new Kiwi.Sound.Audio(
        GameMusic.context.game,
        'musicGameover',
        1,
        false
      );
    }
    return this[musicGameOver];
  }

  static get soundEffectOfBullet() {
    if (!this[soundEffectOfBullet]) {
      this[soundEffectOfBullet] = new Kiwi.Sound.Audio(
        GameMusic.context.game,
        'bullet-se',
        GAME_CONFIG.BASE_LASER_VOLUME_PER,
        false
      );
    }
    return this[soundEffectOfBullet];
  }

  static get soundEffectOfExplosion() {
    if (!this[soundEffectOfExplosion]) {
      this[soundEffectOfExplosion] = new Kiwi.Sound.Audio(
        GameMusic.context.game,
        'explosion-se',
        GAME_CONFIG.BASE_EXPLOSION_VOLUME_PER,
        false
      );
    }
    return this[soundEffectOfExplosion];
  }

  static get soundEffectOfCautionForSpeed() {
    if (!this[soundEffectOfCautionForSpeed]) {
      this[soundEffectOfCautionForSpeed] = new Kiwi.Sound.Audio(
        GameMusic.context.game,
        'caution-of-speed-se',
        GAME_CONFIG.BASE_CAUTION_VOLUME_PER,
        false
      );
    }
    return this[soundEffectOfCautionForSpeed];
  }

  static get soundEffectOfCircle() {
    if (!this[soundEffectOfCircle]) {
      this[soundEffectOfCircle] = new Kiwi.Sound.Audio(
        GameMusic.context.game,
        'circle-se',
        GAME_CONFIG.BASE_CIRCLE_VOLUME_PER,
        false
      );
    }
    return this[soundEffectOfCircle];
  }

  static get soundEffectOfMyUnitExplosion() {
    if (!this[soundEffectOfMyUnitExplosion]) {
      this[soundEffectOfMyUnitExplosion] = new Kiwi.Sound.Audio(
        GameMusic.context.game,
        'explosion-myunit-se',
        GAME_CONFIG.BASE_EXPLOSION_MYUNIT_VOLUME_PER,
        false
      );
    }
    return this[soundEffectOfMyUnitExplosion];
  }
}
