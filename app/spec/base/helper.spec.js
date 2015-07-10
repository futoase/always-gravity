describe('Helper', () => {

  // FIXME: 'requestSharedRender' of null
  //describe('#revive', () => {
  //  let bullet = BulletGenerator.create(
  //    GameState.instance.current, 0
  //  );
  //  bullet.y = 1000;
  //  bullet.x = 1000;
  //  bullet.alive = false;

  //  Helper.revive(bullet);

  //  assert(bullet.y === -bullet.height);
  //  assert(bullet.x !== 1000);
  //  assert(bullet.alive === true);
  //});

  // FIXME: 'requestSharedRender' of null
  //describe('checkSpritePosition', () => {
  //  let bullet = BulletGenerator.create(
  //    GameState.instance.current, 0
  //  );
  //  bullet.x = 10000;
  //  bullet.y = 10000;
  //  bullet.alive = true;

  //  Helper.checkSpritePosition(bullet);

  //  assert(bulelt.alive === false);
  //});

  // FIXME: 'requestSharedRender' of null
  //describe('#updateSpriteRotation', () => {
  //  let bullet = BulletGenerator.create(
  //    GameState.instance.current, 0
  //  );
  //  let beforeRotation = bullet.transform.rotation;
  //
  //  Helper.updateSpriteRotation(bullet, 100);
  //
  //  assert(bullet.transform.rotation > beforeRotation);
  //});

  describe('#radian', () => {
    assert(Helper.radian(30) === (Math.PI / 6));
    assert(Helper.radian(45) === (Math.PI / 4));
    assert(Helper.radian(90) === (Math.PI / 2));
    assert(Helper.radian(120) === (2 * Math.PI / 3));
    assert(Helper.radian(180) === Math.PI);
    assert(Helper.radian(225) === (5 * Math.PI / 4));
    assert(Helper.radian(270) === (3 * Math.PI / 2));
    assert(Helper.radian(360) === (2 * Math.PI));
  });

});
