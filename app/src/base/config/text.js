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
