describe('HUD', () => {

  beforeEach(() => {
    testState.gameScoreCounter = 0;
  });

  describe('#instance', () => {
    it ('should be return is instance for HUD.', () => {
      let hudInstance = HUD.instance;
      assert(hudInstance !== null);
      assert(hudInstance instanceof HUD);
    });
  });

  describe('#createVelocityBar', () => {
    it ('should be return is hud for VelocityBar.', () => {
      let velocityBar = HUD.instance.createVelocityBar();
      assert(velocityBar.objType() === 'BarWidget');
      assert(velocityBar.counter.min === 0);
      assert(velocityBar.counter.max === GameConfig.setting.LIMIT_VELOCITY);
    });
  });

  describe('#createHitPointBar', () => {
    it ('should be return is hud for HitPointBar.', () => {
      let hitPointBar = HUD.instance.createHitPointBar();
      assert(hitPointBar.objType() === 'BarWidget');
      assert(hitPointBar.counter.min === 0);
      assert(hitPointBar.counter.max === GameConfig.setting.LIMIT_HITPOINT);
    });
  });

  describe('#createGameScoreCounter', () => {
    it ('should be return is hud for GameScoreCounter.', () => {
      let gameScoreCounter = HUD.instance.createGameScoreCounter();
      assert(gameScoreCounter.objType() === 'TextFieldWidget');
      assert(gameScoreCounter.prefix === 'SCORE: ');
      assert(gameScoreCounter.text === (gameScoreCounter.prefix + testState.gameScoreCounter));
    });
  });

});
