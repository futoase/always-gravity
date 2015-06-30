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
    context.starPool = new Kiwi.Group(context);
    context.addChild(context.starPool);

    let i;
    for(i = 0; i < context.NUMBER_OF_STAR; i++) {
      context.starPool.addChild(StarGenerator.create(context, i));
    }
  }

  cube() {
    const context = this.context;
    context.cubePool = new Kiwi.Group(context);
    context.addChild(context.cubePool);

    let i;
    for(i = 0; i < context.NUMBER_OF_CUBE; i++) {
      context.cubePool.addChild(CubeGenerator.create(context, i));
    }
  }

  circle() {
    const context = this.context;
    context.circlePool = new Kiwi.Group(context);
    context.addChild(context.circlePool);

    let i;
    for(i = 0; i < context.NUMBER_OF_CIRCLE; i++) {
      context.circlePool.addChild(CircleGenerator.create(context, i));
    }
  }

  bullet() {
    const context = this.context;
    context.bulletPool = new Kiwi.Group(context);
    context.addChild(context.bulletPool);

    let i;
    for(i = 0; i < context.NUMBER_OF_BULLET; i++) {
      context.bulletPool.addChild(
        BulletGenerator.create(context, i)
      );
    }
  }

  cylinder() {
    const context = this.context;
    context.cylinderPool = new Kiwi.Group(context);
    context.addChild(context.cylinderPool);

    let i;
    for(i = 0; i < context.NUMBER_OF_CYLINDER; i++) {
      context.cylinderPool.addChild(
        CylinderGenerator.create(context, i)
      );
    }
  }

  myUnitSplinter() {
    const context = this.context;
    context.myUnitSplinterPool = new Kiwi.Group(context);
    context.addChild(context.myUnitSplinterPool);

    let i;
    for(i = 0; i < context.NUMBER_OF_MYUNIT_SPLINTER; i++) {
      context.myUnitSplinterPool.addChild(
        MyUnitSplinterGenerator.create(context, i)
      );
    }
  }

  rhombusSplinter() {
    const context = this.context;
    context.rhombusSplinterPool = new Kiwi.Group(context);
    context.addChild(context.rhombusSplinterPool);

    let i;
    for(i = 0; i < context.NUMBER_OF_RHOMBUS_SPLINTER; i++) {
      context.rhombusSplinterPool.addChild(
        RhombusSplinterGenerator.create(context, i)
      );
    }
  }

  rhombus() {
    const context = this.context;
    context.rhombusPool = new Kiwi.Group(context);
    context.addChild(context.rhombusPool);

    let i;
    for(i = 0; i < context.NUMBER_OF_RHOMBUS; i++) {
      context.rhombusPool.addChild(RhombusGenerator.create(context, i));
    }
  }

  explosion() {
    const context = this.context;
    context.explosionPool = new Kiwi.Group(context);
    context.addChild(context.explosionPool);
  }
}
