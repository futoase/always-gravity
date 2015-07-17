describe('GameState', () => {

  describe('#instance', () => {

    it ('should be return a instance of GameState.', () => {
      assert(GameState.instance instanceof GameState);
    });

  });

  describe('#current', () => {

    it ('should be return a current of state for Game.', () => {
      assert(GameState.current === testState);
    });

  });

});
