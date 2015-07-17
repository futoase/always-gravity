describe('GroupPool', () => {

  describe('#star', () => {

    it ('should be return is member for star.', () => {
      assert(GroupPool.star().objType() === 'Group');
    });

  });

  describe('#cube', () => {

    it ('should be return is member for cube.', () => {
      assert(GroupPool.cube().objType() === 'Group');
    });

  });

  describe('#circle', () => {

    it ('should be return is member for circle.', () => {
      assert(GroupPool.circle().objType() === 'Group');
    });

  });

  describe('#bullet', () => {

    it ('should be return is member for bullet.', () => {
      assert(GroupPool.bullet().objType() === 'Group');
    });

  });

  describe('#cylinder', () => {

    it ('should be return is member for cylinder.', () => {
      assert(GroupPool.cylinder().objType() === 'Group');
    });

  });

  describe('#myUnitSplinter', () => {

    it ('should be return is member for MyUnitSplinter.', () => {
      assert(GroupPool.myUnitSplinter().objType() === 'Group');
    });

  });

  describe('#rhombusSplinter', () => {

    it ('should be return is member for RhombusSplinter.', () => {
      assert(GroupPool.rhombusSplinter().objType() === 'Group');
    });

  });

  describe('#rhombus', () => {

    it ('should be return is member for Rhombus.', () => {
      assert(GroupPool.rhombus().objType() === 'Group');
    });

  });

  describe('#explosion', () => {

    it ('should be return is member for Explosion.', () => {
      assert(GroupPool.explosion().objType() === 'Group');
    });

  });

});
