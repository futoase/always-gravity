const gameOptions = {
  width: 800,
  height: 600
};

const GAME_CONFIG = {
  CONTAINER_ID: 'game-container',
  NAME: 'Always Glavity',
  STAGE_COLOR: '010101',
  SHOOT_DELAY: 100,
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
  BASE_LASER_VOLUME_PER: 0.6,
  BASE_EXPLOSION_VOLUME_PER: 1.0,
  BASE_CAUTION_VOLUME_PER: 2.0,
  BASE_CIRCLE_VOLUME_PER: 1.0,
  BASE_EXPLOSION_MYUNIT_VOLUME_PER: 1.0,
}

let GAME_COUNTER = {
  hitPoint: 5,
  bullet: 0,
  explosion: 0,
  gameScore: 0,
}
