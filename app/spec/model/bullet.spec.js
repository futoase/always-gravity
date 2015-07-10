describe('Bullet', () => {

  beforeEach(() => {
    MyUnit.instance.create();
    Group.instance.bullet();
  });

  afterEach(() => {
    GroupPool.bullet().members.map((member) => {
      member.alive = false;
    });
  });

  describe('#shoot', () => {
    it ('should be create of Bullet.', () => {
      assert.doesNotThrow(() => {
        Bullet.shoot()
      });
    });
  });

  describe('#getFirstDeadBullet', () => {
    it ('should be get Bullet.', () => {
      let bullet = Bullet.getFirstDeadBullet();
      assert(bullet !== null);
      assert(bullet.alive === false);
    });

    it ('should not be get Bullet.', () => {
      GroupPool.bullet().members.map((member) => {
        member.alive = true;
      });
      let bullet = Bullet.getFirstDeadBullet();
      assert(bullet === null);
    });
  });

  describe('#deadBullet', () => {
    it ('should be set is dead of Bullet.', () => {
      let bullet = Bullet.getFirstDeadBullet();
      bullet.alive = true;
      Bullet.deadBullet(bullet);
      assert(bullet.alive === false);
      assert(bullet.x === -1000);
      assert(bullet.y === -1000);
    });
  });

});
