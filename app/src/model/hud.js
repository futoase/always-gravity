const hudSingleton = Symbol();
const hudSingletonEnforcer = Symbol();

class HUD {

  /**
   * constructor for HUD.
   *
   * @param {Symbol} enforcer
   */
  constructor(enforcer) {
    if (enforcer !== hudSingletonEnforcer) {
      throw new Error('Cannot construct singleton!');
    }
  }

  /**
   * get() is return a instance of HUD.
   *
   * @return {HUD}
   */
  static get instance() {
    if (!this[hudSingleton]) {
      this[hudSingleton] = new HUD(hudSingletonEnforcer);
    }
    return this[hudSingleton];
  }

  /**
   * initialize() is create of HUD for the Game.
   */
  static initialize() {
    const context = GameState.current;
    const hud = HUD.instance;

    context.game.huds.defaultHUD.addWidget(
      hud.createVelocityBar()
    );
    context.game.huds.defaultHUD.addWidget(
      hud.createHitPointBar()
    );
    context.game.huds.defaultHUD.addWidget(
      hud.createGameScoreCounter()
    );
  }

  /**
   * update() is function of update for the HUD.
   */
  static update() {
    HUD.instance.update();
  }

  /**
   * Getter of VelocityBar.
   *
   * return {Kiwi.HUD.Widget.Bar} this._velocityBar
   */
  get velocityBar() {
    return this._velocityBar;
  }

  /**
   * Setter of VelocityBar.
   *
   * @param {Number} value
   */
  set velocityBar(value) {
    if (this._velocityBar) {
      this._velocityBar.counter.current = value;
    }
  }

  /**
   * Getter of HitPointBar.
   *
   * return {Kiwi.HUD.Widget.Bar} this._hitPointBar
   */
  get hitPointBar() {
    return this._hitPointBar;
  }

  /**
   * Getter of GameScoreCounter.
   *
   * return {Kiwi.HUD.Widget.TextField} this._gameScoreCounter
   */
  get gameScoreCounter() {
    return this._gameScoreCounter;
  }

  /**
   * Getter of HitPointBar.
   *
   * return {Kiwi.HUD.Widget.TextField} this._hitPointBar
   */
  set gameScoreCounter(value) {
    if (this._gameScoreCounter) {
      this._gameScoreCounter.text = value;
    }
  }

  /**
   * createVelocityBar() is return of VelocityBar.
   *
   * @return {Kiwi.HUD.Widget.Bar} VelocityBar.
   */
  createVelocityBar() {
    if (this._velocityBar) {
      return this._velocityBar;
    }

    const context = GameState.current;

    const hud = new Kiwi.HUD.Widget.Bar(
      context.game, 0, GameConfig.setting.LIMIT_VELOCITY, 50, 15, 700, 15, 'white'
    );

    this._velocityBar = hud;

    return hud;
  }

  /**
   * createHitPointBar() is return of HitPointBar.
   *
   * @return {Kiwi.HUD.Widget.Bar} HitPointBar.
   */
  createHitPointBar() {
    if (this._hitPointBar) {
      return this._hitPointBar;
    }

    const context = GameState.current;

    const hud = new Kiwi.HUD.Widget.Bar(
      context.game, GameCounter.hitPoint, GameConfig.setting.LIMIT_HITPOINT, 50, 40, 700, 15, '#A9D0F5'
    );

    this._hitPointBar = hud;

    return hud;
  }

  /**
   * createGameScoreCounter() is return of GameScoreCounter.
   *
   * @return {Kiwi.HUD.Widget.TextField} GameScoreCounter.
   */
  createGameScoreCounter() {
    if (this._gameScoreCounter) {
      return this._gameScoreCounter;
    }

    const context = GameState.current;

    const hud = new Kiwi.HUD.Widget.TextField(
      context.game, '', 50, 60
    );

    hud.prefix = 'SCORE: ';
    hud.style.color = 'white';
    hud.style['font-size'] = '24px';
    hud.text = context.gameScoreCounter;

    this._gameScoreCounter = hud;

    return hud;
  }

  /**
   * update() is update of current value for HUD widgets.
   */
  update() {
    const myUnit = MyUnit.instance;

    const currentVelocityX = Math.abs(
      myUnit.sprite.physics.velocity.x
    );
    const currentVelocityY = Math.abs(
      myUnit.sprite.physics.velocity.y
    );

    this.velocityBar = (
      currentVelocityX + currentVelocityY
    );

    this.gameScoreCounter = GameCounter.gameScore;
  }

}
