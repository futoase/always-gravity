describe('Timer', () => {

  describe('#instance', () => {

    it ('should be return is instance of Timer.', () => {
      let timerInstance = Timer.instance;
      assert(timerInstance !== null);
      assert(timerInstance instanceof Timer);
    });

  });

});
