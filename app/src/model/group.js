const groupSingleton = Symbol();
const groupSingletonEnforcer = Symbol();

class Group {

  /**
   * constructor for Group.
   *
   * @param {Symbol} enforcer
   */
  constructor(enforcer) {
    if (enforcer !== groupSingletonEnforcer) {
      throw new Error('Cannot constructor singleton!');
    }
  }

  /**
   * get() is return a instance of Group.
   *
   * @return {Group}
   */
  static get instance() {
    if (!this[groupSingleton]) {
      this[groupSingleton] = new Group(groupSingletonEnforcer);
    }
    return this[groupSingleton];
  }

  /**
   * initialize() is initialized groups for game.
   */
  static initialize() {
    const group = Group.instance;
    group.star();
    group.cube();
    group.circle();
    group.bullet();
    group.cylinder();
    group.myUnitSplinter();
    group.rhombusSplinter();
    group.rhombus();
    group.explosion();
  }

  /**
   * star() is generate of sprite for star.
   */
  star() {
    const context = GameState.current;
    const pool = GroupPool.star();
    context.addChild(pool);

    let i;
    for (i = 0; i < GameConfig.setting.NUMBER_OF_STAR; i++) {
      pool.addChild(StarGenerator.create(context, i));
    }
  }

  /**
   * cube() is generate of sprite for cube.
   */
  cube() {
    const context = GameState.current;
    const pool = GroupPool.cube();
    context.addChild(pool);

    let i;
    for (i = 0; i < GameConfig.setting.NUMBER_OF_CUBE; i++) {
      pool.addChild(CubeGenerator.create(context, i));
    }
  }

  /**
   * circle() is generate of sprite for circle.
   */
  circle() {
    const context = GameState.current;
    const pool = GroupPool.circle();
    context.addChild(pool);

    let i;
    for (i = 0; i < GameConfig.setting.NUMBER_OF_CIRCLE; i++) {
      pool.addChild(CircleGenerator.create(context, i));
    }
  }

  /**
   * bullet() is generate of sprite for bullet.
   */
  bullet() {
    const context = GameState.current;
    const pool = GroupPool.bullet();
    context.addChild(pool);

    let i;
    for (i = 0; i < GameConfig.setting.NUMBER_OF_BULLET; i++) {
      pool.addChild(BulletGenerator.create(context, i));
    }
  }

  /**
   * cylinder() is generate of sprite for cylinder.
   */
  cylinder() {
    const context = GameState.current;
    const pool = GroupPool.cylinder();
    context.addChild(pool);

    let i;
    for (i = 0; i < GameConfig.setting.NUMBER_OF_CYLINDER; i++) {
      pool.addChild(CylinderGenerator.create(context, i));
    }
  }

  /**
   * myUnitSplinter() is generate of sprite for MyUnitSplinter.
   */
  myUnitSplinter() {
    const context = GameState.current;
    const pool = GroupPool.myUnitSplinter();
    context.addChild(pool);

    let i;
    for (i = 0; i < GameConfig.setting.NUMBER_OF_MYUNIT_SPLINTER; i++) {
      pool.addChild(MyUnitSplinterGenerator.create(context, i));
    }
  }

  /**
   * rhombusSplinter() is generate of sprite for RhombusSplinter.
   */
  rhombusSplinter() {
    const context = GameState.current;
    const pool = GroupPool.rhombusSplinter();
    context.addChild(pool);

    let i;
    for (i = 0; i < GameConfig.setting.NUMBER_OF_RHOMBUS_SPLINTER; i++) {
      pool.addChild(RhombusSplinterGenerator.create(context, i));
    }
  }

  /**
   * rhombus() is generate of sprite for Rhombus.
   */
  rhombus() {
    const context = GameState.current;
    const pool = GroupPool.rhombus();
    context.addChild(pool);

    let i;
    for (i = 0; i < GameConfig.setting.NUMBER_OF_RHOMBUS; i++) {
      pool.addChild(RhombusGenerator.create(context, i));
    }
  }

  /**
   * explosion() is generate of sprite for Explosion.
   */
  explosion() {
    const context = GameState.current;
    context.addChild(GroupPool.explosion());
  }

}
