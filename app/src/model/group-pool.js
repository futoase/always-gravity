class GroupPool {
  static star(context) {
    if (context.starPool === undefined) {
      context.starPool = new Kiwi.Group(context);
    }
    return context.starPool;
  }

  static cube(context) {
    if (context.cubePool === undefined) {
      context.cubePool = new Kiwi.Group(context);
    }
    return context.cubePool;
  }

  static circle(context) {
    if (context.circlePool === undefined) {
      context.circlePool = new Kiwi.Group(context);
    }
    return context.circlePool;
  }

  static bullet(context) {
    if (context.bulletPool === undefined) {
      context.bulletPool = new Kiwi.Group(context);
    }
    return context.bulletPool;
  }

  static cylinder(context) {
    if (context.cylinderPool === undefined) {
      context.cylinderPool = new Kiwi.Group(context);
    }
    return context.cylinderPool;
  }

  static myUnitSplinter(context) {
    if (context.myUnitSplinterPool === undefined) {
      context.myUnitSplinterPool = new Kiwi.Group(context);
    }
    return context.myUnitSplinterPool;
  }

  static rhombusSplinter(context) {
    if (context.rhombusSplinterPool === undefined) {
      context.rhombusSplinterPool = new Kiwi.Group(context);
    }
    return context.rhombusSplinterPool;
  }

  static rhombus(context) {
    if (context.rhombusPool === undefined) {
      context.rhombusPool = new Kiwi.Group(context);
    }
    return context.rhombusPool;
  }

  static explosion(context) {
    if (context.explosionPool === undefined) {
      context.explosionPool = new Kiwi.Group(context);
    }
    return context.explosionPool;
  }
}
