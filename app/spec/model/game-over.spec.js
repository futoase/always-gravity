describe('GameOver', () => {

  beforeEach(() => {
    GameState.current.boot();
  });

  describe('#execute', () => {

    it ('should be running a method of execute.', () => {
      GameOver.status = false;
      GameOver.execute();
      assert(GameOver.status === true);
    });

  });

});
