describe('StarGenerator', () => {
  describe('#create', () => {
    it ('should be return is sprite of Star.', () => {
      let star = StarGenerator.create(
        GameState.instance.current, 0
      );
      assert(star !== null);
      assert(star.index === 0);
      assert(star instanceof Kiwi.GameObjects.Sprite);
    });
  });
});
