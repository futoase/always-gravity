let gameStateSingleton = Symbol();
let gameStateSingletonEnforcer = Symbol();
let gameStateCurrent = Symbol();
let gameStateTitle = Symbol();
let gameStatePlay = Symbol();

class GameState {

  /**
   * constructor for GameState.
   *
   * @param {Symbol} enforcer
   */
  constructor(enforcer) {
    if (enforcer !== gameStateSingletonEnforcer) {
      throw "Cannot construct singleton!";
    }
  }

  /**
   * get() is return a instance of GameState.
   *
   * @return {GameState}
   */
  static get instance() {
    if (!this[gameStateSingleton]) {
      this[gameStateSingleton] = new GameState(gameStateSingletonEnforcer);
    }
    return this[gameStateSingleton];
  }

  /**
   * current() is return of GameState.instance.current.
   */
  static get current() {
    return GameState.instance.current;
  }

  /**
   * Getter of current GameState
   *
   * @return {Kiwi.State} gameStateCurrent
   */
  get current() {
    return this[gameStateCurrent];
  }

  /**
   * Setter of current GameState
   *
   * @param {Kiwi.State} value
   */
  set current(value) {
    this[gameStateCurrent] = value;
  }

  /**
   * Getter of TitleState.
   *
   * @return {Kiwi.State} TitleState
   */
  get title() {
    if (!this[gameStateTitle]) {
      this[gameStateTitle] = new Kiwi.State('Title');
    }
    return this[gameStateTitle];
  }

  /**
   * Getter of PlayState.
   *
   * @return {Kiwi.State} PlayState
   */
  get play() {
    if (!this[gameStatePlay]) {
      this[gameStatePlay] = new Kiwi.State('Play');
    }
    return this[gameStatePlay];
  }

}
