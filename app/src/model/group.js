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

  get context() {
    return this._context;
  }

  set context(value) {
    this._context = value;
  }

  static initialize(context) {
    let group = Group.instance;
    group.context = context;
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
    const context = this.context;
    let pool = GroupPool.star(context);
    context.addChild(pool);

    let i;
    for(i = 0; i < context.NUMBER_OF_STAR; i++) {
      pool.addChild(StarGenerator.create(context, i));
    }
  }

  cube() {
    const context = this.context;
    let pool = GroupPool.cube(context);
    context.addChild(pool);

    let i;
    for(i = 0; i < context.NUMBER_OF_CUBE; i++) {
      pool.addChild(CubeGenerator.create(context, i));
    }
  }

  circle() {
    const context = this.context;
    let pool = GroupPool.circle(context);
    context.addChild(pool);

    let i;
    for(i = 0; i < context.NUMBER_OF_CIRCLE; i++) {
      pool.addChild(CircleGenerator.create(context, i));
    }
  }

  bullet() {
    const context = this.context;
    let pool = GroupPool.bullet(context);
    context.addChild(pool);

    let i;
    for(i = 0; i < context.NUMBER_OF_BULLET; i++) {
      pool.addChild(BulletGenerator.create(context, i));
    }
  }

  cylinder() {
    const context = this.context;
    let pool = GroupPool.cylinder(context);
    context.addChild(pool);

    let i;
    for(i = 0; i < context.NUMBER_OF_CYLINDER; i++) {
      pool.addChild(CylinderGenerator.create(context, i));
    }
  }

  myUnitSplinter() {
    const context = this.context;
    let pool = GroupPool.myUnitSplinter(context);
    context.addChild(pool);

    let i;
    for(i = 0; i < context.NUMBER_OF_MYUNIT_SPLINTER; i++) {
      pool.addChild(MyUnitSplinterGenerator.create(context, i));
    }
  }

  rhombusSplinter() {
    const context = this.context;
    let pool = GroupPool.rhombusSplinter(context);
    context.addChild(pool);

    let i;
    for(i = 0; i < context.NUMBER_OF_RHOMBUS_SPLINTER; i++) {
      pool.addChild(RhombusSplinterGenerator.create(context, i));
    }
  }

  rhombus() {
    const context = this.context;
    let pool = GroupPool.rhombus(context);
    context.addChild(pool);

    let i;
    for(i = 0; i < context.NUMBER_OF_RHOMBUS; i++) {
      pool.addChild(RhombusGenerator.create(context, i));
    }
  }

  explosion() {
    const context = this.context;
    context.addChild(GroupPool.explosion(context));
  }
}
