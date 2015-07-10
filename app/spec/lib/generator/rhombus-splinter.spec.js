describe('RhombusSplinterGenerator', () => {
  describe('#create', () => {
    it ('should be return is spreite of RhombusSplinterGenerator', () => {
      let rhombusSplinter = RhombusSplinterGenerator.create(
        GameState.instance.current, 0
      );
      assert(rhombusSplinter !== null);
      assert(rhombusSplinter.index === 0);
      assert(rhombusSplinter instanceof Kiwi.GameObjects.Sprite);
    });
  });
});
