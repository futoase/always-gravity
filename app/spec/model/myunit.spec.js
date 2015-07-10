describe('MyUnit', () => {

  describe('#instance', () => {
    it ('should be return is instance of MyUnit.', () => {
      let myUnitInstance = MyUnit.instance;
      assert(myUnitInstance !== null);
      assert(myUnitInstance instanceof MyUnit);
    });
  });

  describe('#create', () => {
    it ('should be create is sprite of MyUnit.', () => {
      let myUnitInstance = MyUnit.instance;
      let sprite = myUnitInstance.create();
      assert(sprite !== null);
      assert(sprite.objType() === "Sprite");
      assert(sprite.rotation === -Math.PI * 0.5);
    });
  });

});
