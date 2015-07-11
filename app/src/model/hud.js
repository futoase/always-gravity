let hudSingleton = Symbol();
let hudSingletonEnforcer = Symbol();

class HUD {

  constructor(enforcer) {
    if (enforcer !== hudSingletonEnforcer) {
      throw "Cannot construct singleton!";
    }
  }

  static get instance() {
    if (!this[hudSingleton]) {
      this[hudSingleton] = new HUD(hudSingletonEnforcer);
    }
    return this[hudSingleton];
  }

  static initialize() {
    const context = GameState.current;
    let hud = HUD.instance;

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

  static update() {
    let hud = HUD.instance;
    hud.update();
  }

  get velocityBar() {
    return this._velocityBar;
  }

  set velocityBar(value) {
    if (this._velocityBar) {
      this._velocityBar.counter.current = value;
    }
  }

  get hitPointBar() {
    return this._hitPointBar;
  }

  get gameScoreCounter() {
    return this._gameScoreCounter;
  }

  set gameScoreCounter(value) {
    if (this._gameScoreCounter) {
      this._gameScoreCounter.text = value;
    }
  }

  createVelocityBar() {
    if (this._velocityBar) {
      return this._velocityBar;
    }

    const context = GameState.current;

    let hud = new Kiwi.HUD.Widget.Bar(
      context.game, 0, GAME_CONFIG.LIMIT_VELOCITY, 50, 15, 700, 15, 'white'
    );

    this._velocityBar = hud;

    return hud;
  }

  createHitPointBar() {
    if (this._hitPointBar) {
      return this._hitPointBar;
    }

    const context = GameState.current;

    let hud = new Kiwi.HUD.Widget.Bar(
      context.game, GAME_COUNTER.hitPoint, GAME_CONFIG.LIMIT_HITPOINT, 50, 40, 700, 15, '#A9D0F5'
    );

    this._hitPointBar = hud;

    return hud;
  }

  createGameScoreCounter() {
    if (this._gameScoreCounter) {
      return this._gameScoreCounter;
    }

    const context = GameState.current;

    let hud = new Kiwi.HUD.Widget.TextField(
      context.game, '', 50, 60
    );

    hud.prefix = 'SCORE: ';
    hud.style.color = 'white';
    hud.style['font-size'] = '24px';
    hud.text = context.gameScoreCounter;

    this._gameScoreCounter = hud;

    return hud;
  }

  update() {
    const context = GameState.current;

    let myUnit = MyUnit.instance;

    let currentVelocityX = Math.abs(
      myUnit.sprite.physics.velocity.x
    );
    let currentVelocityY = Math.abs(
      myUnit.sprite.physics.velocity.y
    );

    this.velocityBar = (
      currentVelocityX + currentVelocityY
    );

    this.gameScoreCounter = GAME_COUNTER.gameScore;
  }

}
