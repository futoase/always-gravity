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

  static removeChildrenForAll(context) {
    let star = GroupPool.star(context);
    let cube = GroupPool.cube(context);
    let circle = GroupPool.circle(context);
    let cylinder = GroupPool.cylinder(context);
    let bullet = GroupPool.bullet(context);
    let explosion = GroupPool.explosion(context);
    let rhombus = GroupPool.rhombus(context);

    star.removeChildren(0, star.members.length);
    cube.removeChildren(0, cube.members.length);
    circle.removeChildren(0, circle.members.length);
    cylinder.removeChildren(0, cylinder.members.length);
    bullet.removeChildren(0, bullet.members.length);
    explosion.removeChildren(0, explosion.members.length);
    rhombus.removeChildren(0, rhombus.members.length);
  }

  static forEachStar(context) {
    let pool = GroupPool.star(context);
    pool.forEach(context, Helper.checkSpritePosition);
  }

  static forEachCube(context) {
    let pool = GroupPool.cube(context);
    pool.forEach(context, (cube) => {
      Helper.updateSpriteRotation(cube, 5);
    });
    pool.forEach(context, Helper.checkSpritePosition);
  }

  static forEachCylinder(context) {
    let pool = GroupPool.cylinder(context);
    pool.forEach(context, Helper.checkSpritePosition);
  }

  static forEachCircle(context) {
    let pool = GroupPool.circle(context);
    let myUnit = MyUnit.instance;
    myUnit.context = context;

    pool.forEach(context, Helper.checkSpritePosition);
    pool.forEach(context, (circle) => {
      Helper.updateSpriteRotation(circle, 30);
    });
    pool.members.map((member) => {
      myUnit.overlapOnOther(member);
    });
  }

  static forEachCircle(context) {
    let pool = GroupPool.circle(context);
    let myUnit = MyUnit.instance;

    myUnit.context = context;

    pool.forEach(context, Helper.checkSpritePosition);
    pool.forEach(context, (circle) => {
      Helper.updateSpriteRotation(circle, 30);
    });
    pool.members.map((member) => {
      myUnit.overlapOnOther(member);
    });
  }

  static forEachBullet(context) {
    let pool = GroupPool.bullet(context);
    pool.forEach(context, Helper.checkSpritePosition);
    pool.members.map((member) => {
      CollisionDelection.BulletCollideWithCube(context, member);
      CollisionDelection.BulletCollideWithCircle(context, member);
      CollisionDelection.BulletCollideWithCylinder(context, member);
    });
  }

  static forEachExplosion(context) {
    let pool = GroupPool.explosion(context);
    pool.members.map((member) => {
      Explosion.isLastOfCellIndex(member)
    });
  }

  static forEachRhombusSplinter(context) {
    let pool = GroupPool.rhombusSplinter(context);
    let myUnit = MyUnit.instance;
    myUnit.context = context;

    pool.forEach(context, Helper.checkSpritePosition);
    pool.members.map((member) => {
      myUnit.overlapOnOther(member);
    });
  }

  static forEachRhombus(context) {
    let pool = GroupPool.rhombus(context);
    let myUnit = MyUnit.instance;
    myUnit.context = context;

    pool.members.map((member) => {
      myUnit.overlapOnOther(member);
    });
  }
}
