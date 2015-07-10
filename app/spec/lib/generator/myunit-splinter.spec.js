describe('MyUnitSplinterGenerator', () => {

  describe('#create', () => {
    it('should be return is sprite of MyUnitSplinter.', () => {
      let myUnitSplinter = MyUnitSplinterGenerator.create(0);
      assert(myUnitSplinter !== null);
      assert(myUnitSplinter.index === 0);
      assert(myUnitSplinter instanceof Kiwi.GameObjects.Sprite);
    });
  });

});
