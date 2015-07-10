describe('BulletGenerator', () => {

  describe('#create', () => {
    it ('should be return is sprite of Bullet.', () => {
      let bullet = BulletGenerator.create(0);
      assert(bullet !== null);
      assert(bullet.index === 0);
      assert(bullet instanceof Kiwi.GameObjects.Sprite);
      assert(bullet.hitbox instanceof Kiwi.Geom.Rectangle);
    });
  });

});
