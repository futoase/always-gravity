describe('CylinderGenerator', () => {

  describe('#create', () => {
    it ('should be return is sprite of Cylinder.', () => {
      let cylinder = CylinderGenerator.create(0);
      assert(cylinder !== null);
      assert(cylinder.index === 0);
      assert(cylinder instanceof Kiwi.GameObjects.Sprite);
      assert(cylinder.hitbox instanceof Kiwi.Geom.Rectangle);
    });
  });

});
