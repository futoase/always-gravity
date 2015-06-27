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

  set context(value) {
    this._context = value;
  }

  get context() {
    return this._context;
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

    const context = this.context;

    let hud = new Kiwi.HUD.Widget.Bar(
      context.game, 0, context.LIMIT_VELOCITY, 50, 15, 700, 15, 'white'
    );

    this._velocityBar = hud;

    return hud;
  }

  createHitPointBar() {
    if (this._hitPointBar) {
      return this._hitPointBar;
    }

    const context = this.context;

    let hud = new Kiwi.HUD.Widget.Bar(
      context.game, context.CURRENT_HITPOINT, context.LIMIT_HITPOINT, 50, 40, 700, 15, '#A9D0F5'
    );

    this._hitPointBar = hud;

    return hud;
  }

  createGameScoreCounter() {
    if (this._gameScoreCounter) {
      return this._gameScoreCounter;
    }

    const context = this.context;

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
    const context = this.context;
    let myUnit = MyUnit.instance;
    myUnit.context = context;

    let currentVelocityX = Math.abs(
      myUnit.sprite.physics.velocity.x
    );
    let currentVelocityY = Math.abs(
      myUnit.sprite.physics.velocity.y
    );

    this.velocityBar = (
      currentVelocityX + currentVelocityY
    );

    this.gameScoreCounter = context.gameScoreCounter;
  }
}
