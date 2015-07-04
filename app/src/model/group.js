let groupSingleton = Symbol();
let groupSingletonEnforcer = Symbol();

class Group {

  constructor(enforcer) {
    if (enforcer !== groupSingletonEnforcer) {
      throw "Cannot constructor singleton!";
    }
  }

  static get instance() {
    if (!this[groupSingleton]) {
      this[groupSingleton] = new Group(groupSingletonEnforcer);
    }
    return this[groupSingleton];
  }

  static initialize() {
    let group = Group.instance;
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

  star() {
    const context = GameState.instance.current;
    let pool = GroupPool.star();
    context.addChild(pool);

    let i;
    for(i = 0; i < GAME_CONFIG.NUMBER_OF_STAR; i++) {
      pool.addChild(StarGenerator.create(context, i));
    }
  }

  cube() {
    const context = GameState.instance.current;
    let pool = GroupPool.cube();
    context.addChild(pool);

    let i;
    for(i = 0; i < GAME_CONFIG.NUMBER_OF_CUBE; i++) {
      pool.addChild(CubeGenerator.create(context, i));
    }
  }

  circle() {
    const context = GameState.instance.current;
    let pool = GroupPool.circle();
    context.addChild(pool);

    let i;
    for(i = 0; i < GAME_CONFIG.NUMBER_OF_CIRCLE; i++) {
      pool.addChild(CircleGenerator.create(context, i));
    }
  }

  bullet() {
    const context = GameState.instance.current;
    let pool = GroupPool.bullet();
    context.addChild(pool);

    let i;
    for(i = 0; i < GAME_CONFIG.NUMBER_OF_BULLET; i++) {
      pool.addChild(BulletGenerator.create(context, i));
    }
  }

  cylinder() {
    const context = GameState.instance.current;
    let pool = GroupPool.cylinder();
    context.addChild(pool);

    let i;
    for(i = 0; i < GAME_CONFIG.NUMBER_OF_CYLINDER; i++) {
      pool.addChild(CylinderGenerator.create(context, i));
    }
  }

  myUnitSplinter() {
    const context = GameState.instance.current;
    let pool = GroupPool.myUnitSplinter();
    context.addChild(pool);

    let i;
    for(i = 0; i < GAME_CONFIG.NUMBER_OF_MYUNIT_SPLINTER; i++) {
      pool.addChild(MyUnitSplinterGenerator.create(context, i));
    }
  }

  rhombusSplinter() {
    const context = GameState.instance.current;
    let pool = GroupPool.rhombusSplinter();
    context.addChild(pool);

    let i;
    for(i = 0; i < GAME_CONFIG.NUMBER_OF_RHOMBUS_SPLINTER; i++) {
      pool.addChild(RhombusSplinterGenerator.create(context, i));
    }
  }

  rhombus() {
    const context = GameState.instance.current;
    let pool = GroupPool.rhombus();
    context.addChild(pool);

    let i;
    for(i = 0; i < GAME_CONFIG.NUMBER_OF_RHOMBUS; i++) {
      pool.addChild(RhombusGenerator.create(context, i));
    }
  }

  explosion() {
    const context = GameState.instance.current;
    context.addChild(GroupPool.explosion());
  }

}
