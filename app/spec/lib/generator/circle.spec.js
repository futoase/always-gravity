describe('CircleGenerator', () => {

  describe('#create', () => {

    it ('should be return is sprite of Circle.', () => {
      let circle = CircleGenerator.create(0);
      assert(circle !== null);
      assert(circle.index === 0);
      assert(circle instanceof Kiwi.GameObjects.Sprite);
      assert(circle.hitbox instanceof Kiwi.Geom.Rectangle);
    });

  });

});
