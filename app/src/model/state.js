class GameState {

  /**
   * constructor for GameState.
   *
   * @param {Symbol} enforcer
   */
  constructor(enforcer) {
    if (enforcer !== GAMESTATE_SINGLETON_ENFORCER) {
      throw new Error('Cannot construct singleton!');
    }
  }

  /**
   * get() is return a instance of GameState.
   *
   * @return {GameState}
   */
  static get instance() {
    if (!this[GAMESTATE_SINGLETON]) {
      this[GAMESTATE_SINGLETON] = new GameState(GAMESTATE_SINGLETON_ENFORCER);
    }
    return this[GAMESTATE_SINGLETON];
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
   * @return {Kiwi.State} gamestateCurrent
   */
  get current() {
    return this[GAMESTATE_CURRENT];
  }

  /**
   * Setter of current GameState
   *
   * @param {Kiwi.State} value
   */
  set current(value) {
    this[GAMESTATE_CURRENT] = value;
  }

  /**
   * Getter of TitleState.
   *
   * @return {Kiwi.State} TitleState
   */
  get title() {
    if (!this[GAMESTATE_TITLE]) {
      this[GAMESTATE_TITLE] = new Kiwi.State('Title');
    }
    return this[GAMESTATE_TITLE];
  }

  /**
   * Getter of PlayState.
   *
   * @return {Kiwi.State} PlayState
   */
  get play() {
    if (!this[GAMESTATE_PLAY]) {
      this[GAMESTATE_PLAY] = new Kiwi.State('Play');
    }
    return this[GAMESTATE_PLAY];
  }

}
