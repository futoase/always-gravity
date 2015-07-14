const GameConfig = {};
const GameCounter = {};

Kiwi.Log.display = false;

GameConfig.kiwiOption = {
  width: 800,
  height: 600,
};

GameConfig.setting = {
  CONTAINER_ID: 'game-container',
  NAME: 'Always Glavity',
  STAGE_COLOR: '010101',
  NUMBER_OF_STAR: 30,
  NUMBER_OF_CUBE: 5,
  NUMBER_OF_CYLINDER: 10,
  NUMBER_OF_BULLET: 3,
  NUMBER_OF_CIRCLE: 5,
  NUMBER_OF_MYUNIT_SPLINTER: 60,
  NUMBER_OF_RHOMBUS: 1,
  NUMBER_OF_RHOMBUS_SPLINTER: 8,
  STAR_SPEED: 50,
  CUBE_SPEED: 30,
  SHOOT_DELAY: 200,
  BULLET_SPEED: 100,
  FRAME_MS: 17,
  ROTATION_SPEED: Math.PI / 3,
  ACCELERATION: 20,
  MAX_SPEED: 25,
  LIMIT_VELOCITY: 100,
  LIMIT_VELOCITY_MAX_COUNT: 3,
  LIMIT_HITPOINT: 5,
  GRAVITY: 5,
  DRAG: 2.5,
  BASE_MUSIC_VOLUME_PER: 1.0,
  BASE_GAME_OVER_MUSIC_VOLUME_PER: 1.0,
  BASE_LASER_VOLUME_PER: 0.6,
  BASE_EXPLOSION_VOLUME_PER: 1.0,
  BASE_CAUTION_VOLUME_PER: 2.0,
  BASE_CIRCLE_VOLUME_PER: 1.0,
  BASE_EXPLOSION_MYUNIT_VOLUME_PER: 1.0,
};

GameCounter.hitPoint = 5;
GameCounter.bullet = 0;
GameCounter.explosion = 0;
GameCounter.gameScore = 0;

GameConfig.text = {
  title: {
    x: (() => { return GameConfig.kiwiOption.width / 2; })(),
    y: 200,
    text: 'Always Gravity',
    color: '#ffffff',
    size: 48,
    weight: 'bold',
    fontFamily: 'monospace'
  },
  subTitle: {
    x: (() => { return GameConfig.kiwiOption.width / 2; })(),
    y: 270,
    text: '常に重力',
    color: '#ffffff',
    size: 24,
    weight: 'bold',
    fontFamily: 'monospace'
  },
  start: {
    x: (() => { return GameConfig.kiwiOption.width / 2; })(),
    y: 320,
    text: 'START: SPACEBAR',
    color: '#ffffff',
    size: 20,
    weight: 'bold',
    fontFamily: 'monospace'
  },
  quit: {
    x: (() => { return GameConfig.kiwiOption.width / 2; })(),
    y: 350,
    text: 'QUIT: ESC',
    color: '#ffffff',
    size: 20,
    weight: 'bold',
    fontFamily: 'monospace'
  },
  exitGame: {
    x: (() => { return GameConfig.kiwiOption.width / 2; })(),
    y: 380,
    text: 'QUIT: ESC',
    color: '#ffffff',
    size: 20,
    weight: 'bold',
    fontFamily: 'monospace'
  },
  gameOver: {
    x: (() => { return GameConfig.kiwiOption.width / 2; })(),
    y: 200,
    text: 'GAME OVER',
    color: '#ffffff',
    size: 64,
    weight: 'bold',
    fontFamily: 'monospace'
  },
  restart: {
    x: (() => { return GameConfig.kiwiOption.width / 2; })(),
    y: 350,
    text: 'RESTART: R',
    color: '#ffffff',
    size: 20,
    weight: 'bold',
    fontFamily: 'monospace'
  },
  scoreResults: {
    x: (() => { return GameConfig.kiwiOption.width / 2; })(),
    y: 280,
    text: '',
    color: '#ffffff',
    size: 36,
    weight: 'bold',
    fontFamily: 'monospace'
  },
  slowDownCount: {
    x: (() => { return GameConfig.kiwiOption.width / 2; })(),
    y: 250,
    text: String(GameConfig.setting.LIMIT_VELOCITY_MAX_COUNT),
    color: '#ffffff',
    size: 48,
    weight: 'bold',
    fontFamily: 'monospace'
  },
  slowDown: {
    x: (() => { return GameConfig.kiwiOption.width / 2; })(),
    y: 200,
    text: 'SLOW DOWN !!!',
    color: '#ffffff',
    size: 48,
    weight: 'bold',
    fontFamily: 'monospace'
  }
};
