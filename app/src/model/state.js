let gameStateSingleton = Symbol();
let gameStateSingletonEnforcer = Symbol();
let gameStateCurrent = Symbol();
let gameStateTitle = Symbol();
let gameStatePlay = Symbol();

class GameState {

  constructor(enforcer) {
    if (enforcer !== gameStateSingletonEnforcer) {
      throw "Cannot construct singleton!";
    }
  }

  static get instance() {
    if (!this[gameStateSingleton]) {
      this[gameStateSingleton] = new GameState(gameStateSingletonEnforcer);
    }
    return this[gameStateSingleton];
  }

  static get current() {
    return GameState.instance.current;
  }

  get current() {
    return this[gameStateCurrent];
  }

  set current(value) {
    this[gameStateCurrent] = value;
  }

  get title() {
    if (!this[gameStateTitle]) {
      this[gameStateTitle] = new Kiwi.State('Title');
    }
    return this[gameStateTitle];
  }

  get play() {
    if (!this[gameStatePlay]) {
      this[gameStatePlay] = new Kiwi.State('Play');
    }
    return this[gameStatePlay];
  }

}
