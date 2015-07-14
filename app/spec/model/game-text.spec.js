describe('GameText', () => {

  beforeEach(() => {
    // Forced call of Kiwi.State.boot().
    GameState.current.boot();
  });

  describe('#_createTextField', () => {
    it ('should be is return a new instance of TextField.', () => {
      const testText = GameText._createTextField(
        GameState.current, GameTestConfig.text.test
      );
      assert(testText.x === GameTestConfig.text.test.x);
      assert(testText.y === GameTestConfig.text.test.y);
      assert(testText.text === GameTestConfig.text.test.text);
      assert(testText.fontSize === GameTestConfig.text.test.size);
      assert(testText.fontFamily === GameTestConfig.text.test.fontFamily);
    });
  });

});
