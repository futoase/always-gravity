describe('RhombusGenerator', () => {
  describe('#craete', () => {
    it ('should be return is sprite of Rhombus.', () => {
      let rhombus = RhombusGenerator.create(
        GameState.instance.current, 0
      );
    });
  });
});
