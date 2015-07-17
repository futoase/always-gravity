describe('Explosion', () => {

  beforeEach(() => {
    Group.instance.explosion();
  });

  describe('#generate', () => {

    it ('should be return spreite for Explosion.', () => {
      let explosion = Explosion.generate(10, 10);
      assert(explosion !== null);
      assert(explosion.x === parseInt(10 - explosion.width * 0.5));
      assert(explosion.y === parseInt(10 - explosion.height * 0.5));
    });

  });

});
