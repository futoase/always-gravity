describe('Group', () => {

  beforeEach(() => {
    GameState.current.boot();
  });

  describe('#instance', () => {

    it ('should be return a instance of Group.', () => {
      const groupInstance = Group.instance;
      assert(groupInstance instanceof Group);
    });

  });

  // FIXME: Throw as error of loading texture from file occasionally.
  //describe('#star', () => {

  //  before(() => {
  //    Group.instance.star();
  //  });

  //  it ('should be add of new sprite for star onto pool of star.', () => {
  //    assert(GroupPool.star().members.length === GameConfig.setting.NUMBER_OF_STAR);
  //  });

  //  it ('should be valid index of star.', () => {
  //    let index;
  //    let sprite;
  //    for ([index, sprite] of GroupPool.star().members.entries()) {
  //      assert(index === sprite.index);
  //    }
  //  });

  //  it ('should be valid of initialize against star.y.', () => {
  //    let index;
  //    let sprite;
  //    for ([index, sprite] of GroupPool.star().members.entries()) {
  //      if (sprite.index < parseInt(GameConfig.setting.NUMBER_OF_STAR / 3, 10)) {
  //        assert(sprite.y >= 0 && sprite.y <= 600);
  //      }
  //      else {
  //        assert(sprite.y <= 0);
  //      }
  //    }
  //  });

  //});

  // FIXME: Throw as error of loading texture from file occasionally.
  //describe('#cube', () => {

  //  before(() => {
  //    Group.instance.cube();
  //  });

  //  it ('should be add of new sprite for cube onto pool of cube.', () => {
  //    assert(GroupPool.cube().members.length === GameConfig.setting.NUMBER_OF_CUBE);
  //  });

  //  it ('should be valid index of cube.', () => {
  //    let index;
  //    let sprite;
  //    for ([index, sprite] of GroupPool.cube().members.entries()) {
  //      assert(index === sprite.index);
  //    }
  //  });

  //  it ('should be valid of initialize against cube.x.', () => {
  //    let index;
  //    let sprite;
  //    for ([index, sprite] of GroupPool.cube().members.entries()) {
  //      assert(sprite.x >= 0 && sprite.x <= 800);
  //    }
  //  });

  //  it ('should be get score of cube.', () => {
  //    let index;
  //    let sprite;
  //    for ([index, sprite] of GroupPool.cube().members.entries()) {
  //      assert(sprite.score === 100);
  //    }
  //  });

  //});

  // FIXME: Throw as error of loading texture from file occasionally.
  //describe('#circle', () => {

  //  before(() => {
  //    Group.instance.circle();
  //  });

  //  it ('should be add of new sprite for circle onto pool of circle.', () => {
  //    assert(GroupPool.circle().members.length === GameConfig.setting.NUMBER_OF_CIRCLE);
  //  });

  //  it ('should be valid index of circle.', () => {
  //    let index;
  //    let sprite;
  //    for ([index, sprite] of GroupPool.circle().members.entries()) {
  //      assert(index === sprite.index);
  //    }
  //  });

  //  it ('should be valid of initialize against circle.x.', () => {
  //    let index;
  //    let sprite;
  //    for ([index, sprite] of GroupPool.circle().members.entries()) {
  //      assert(sprite.x >= 0 && sprite.x <= 800);
  //    }
  //  });

  //  it ('should be get score of circle.', () => {
  //    let index;
  //    let sprite;
  //    for ([index, sprite] of GroupPool.circle().members.entries()) {
  //      assert(sprite.score === 500);
  //    }
  //  });

  //});

  // FIXME: Throw as error of loading texture from file occasionally.
  //describe('#bullet', () => {

  //  before(() => {
  //    Group.instance.bullet();
  //  });

  //  it ('should be add of new sprite for bullet onto pool of bullet.', () => {
  //    assert(GroupPool.bullet().members.length === GameConfig.setting.NUMBER_OF_BULLET);
  //  });

  //  it ('should be valid index of bullet.', () => {
  //    let index;
  //    let sprite;
  //    for ([index, sprite] of GroupPool.bullet().members.entries()) {
  //      assert(index === sprite.index);
  //    }
  //  });

  //});

  // FIXME: Throw as error of loading texture from file occasionally.
  //describe('#cylinder', () => {

  //  before(() => {
  //    Group.instance.cylinder();
  //  });

  //  it ('should be add of new sprite for cylinder onto pool of cylinder.', () => {
  //    assert(GroupPool.cylinder().members.length === GameConfig.setting.NUMBER_OF_CYLINDER);
  //  });

  //  it ('should be valid index of cylinder.', () => {
  //    let index;
  //    let sprite;
  //    for ([index, sprite] of GroupPool.cylinder().members.entries()) {
  //      assert(index === sprite.index);
  //    }
  //  });

  //  it ('should be valid of initialize against cylinder.x.', () => {
  //    let index;
  //    let sprite;
  //    for ([index, sprite] of GroupPool.cylinder().members.entries()) {
  //      assert(sprite.x >= 0 && sprite.x <= 800);
  //    }
  //  });

  //  it ('should be get score of cylinder.', () => {
  //    let index;
  //    let sprite;
  //    for ([index, sprite] of GroupPool.cylinder().members.entries()) {
  //      assert(sprite.score === 200);
  //    }
  //  });

  //});


});
