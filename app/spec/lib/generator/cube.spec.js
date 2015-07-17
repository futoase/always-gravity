describe('CubeGenerator', () => {

  describe('#create', () => {

    it ('should be return is sprite of Cube.', () => {
      let cube = CubeGenerator.create(0);
      assert(cube !== null);
      assert(cube.index === 0);
      assert(cube instanceof Kiwi.GameObjects.Sprite);
      assert(cube.hitbox instanceof Kiwi.Geom.Rectangle);
    });

  });

});
