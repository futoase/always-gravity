class GroupPool {

  static star() {
    const context = GameState.instance.current;
    if (context.starPool === undefined) {
      context.starPool = new Kiwi.Group(context);
    }
    return context.starPool;
  }

  static cube() {
    const context = GameState.instance.current;
    if (context.cubePool === undefined) {
      context.cubePool = new Kiwi.Group(context);
    }
    return context.cubePool;
  }

  static circle() {
    const context = GameState.instance.current;
    if (context.circlePool === undefined) {
      context.circlePool = new Kiwi.Group(context);
    }
    return context.circlePool;
  }

  static bullet() {
    const context = GameState.instance.current;
    if (context.bulletPool === undefined) {
      context.bulletPool = new Kiwi.Group(context);
    }
    return context.bulletPool;
  }

  static cylinder() {
    const context = GameState.instance.current;
    if (context.cylinderPool === undefined) {
      context.cylinderPool = new Kiwi.Group(context);
    }
    return context.cylinderPool;
  }

  static myUnitSplinter() {
    const context = GameState.instance.current;
    if (context.myUnitSplinterPool === undefined) {
      context.myUnitSplinterPool = new Kiwi.Group(context);
    }
    return context.myUnitSplinterPool;
  }

  static rhombusSplinter() {
    const context = GameState.instance.current;
    if (context.rhombusSplinterPool === undefined) {
      context.rhombusSplinterPool = new Kiwi.Group(context);
    }
    return context.rhombusSplinterPool;
  }

  static rhombus() {
    const context = GameState.instance.current;
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
    let star = GroupPool.star();
    let cube = GroupPool.cube();
    let circle = GroupPool.circle();
    let cylinder = GroupPool.cylinder();
    let bullet = GroupPool.bullet();
    let explosion = GroupPool.explosion(context);
    let rhombus = GroupPool.rhombus();

    star.removeChildren(0, star.members.length);
    cube.removeChildren(0, cube.members.length);
    circle.removeChildren(0, circle.members.length);
    cylinder.removeChildren(0, cylinder.members.length);
    bullet.removeChildren(0, bullet.members.length);
    explosion.removeChildren(0, explosion.members.length);
    rhombus.removeChildren(0, rhombus.members.length);
  }

  static forEachAll() {
    GroupPool.forEachStar();
    GroupPool.forEachCube();
    GroupPool.forEachCylinder();
    GroupPool.forEachCircle();
    GroupPool.forEachBullet();
    GroupPool.forEachExplosion();
    GroupPool.forEachRhombusSplinter();
    GroupPool.forEachRhombus();
  }

  static forEachStar() {
    const context = GameState.instance.current;
    let pool = GroupPool.star();

    pool.forEach(context, Helper.checkSpritePosition);
  }

  static forEachCube() {
    const context = GameState.instance.current;
    let pool = GroupPool.cube();

    pool.forEach(context, (cube) => {
      Helper.updateSpriteRotation(cube, 5);
    });
    pool.forEach(context, Helper.checkSpritePosition);
  }

  static forEachCylinder() {
    const context = GameState.instance.current;
    let pool = GroupPool.cylinder();

    pool.forEach(context, Helper.checkSpritePosition);
  }

  static forEachCircle() {
    const context = GameState.instance.current;
    let pool = GroupPool.circle();
    let myUnit = MyUnit.instance;

    pool.forEach(context, Helper.checkSpritePosition);
    pool.forEach(context, (circle) => {
      Helper.updateSpriteRotation(circle, 30);
    });
    pool.members.map((member) => {
      myUnit.overlapOnOther(member);
    });
  }

  static forEachCircle() {
    const context = GameState.instance.current;
    let pool = GroupPool.circle();
    let myUnit = MyUnit.instance;

    pool.forEach(context, Helper.checkSpritePosition);
    pool.forEach(context, (circle) => {
      Helper.updateSpriteRotation(circle, 30);
    });
    pool.members.map((member) => {
      myUnit.overlapOnOther(member);
    });
  }

  static forEachBullet() {
    const context = GameState.instance.current;
    let pool = GroupPool.bullet();

    pool.forEach(context, Helper.checkSpritePosition);
    pool.members.map((member) => {
      CollisionDelection.BulletCollideWithCube(member);
      CollisionDelection.BulletCollideWithCircle(member);
      CollisionDelection.BulletCollideWithCylinder(member);
    });
  }

  static forEachExplosion() {
    const context = GameState.instance.current;
    let pool = GroupPool.explosion(context);

    pool.members.map((member) => {
      Explosion.isLastOfCellIndex(member)
    });
  }

  static forEachRhombusSplinter() {
    const context = GameState.instance.current;
    let pool = GroupPool.rhombusSplinter();
    let myUnit = MyUnit.instance;

    pool.forEach(context, Helper.checkSpritePosition);
    pool.members.map((member) => {
      myUnit.overlapOnOther(member);
    });
  }

  static forEachRhombus() {
    const context = GameState.instance.current;
    let pool = GroupPool.rhombus();
    let myUnit = MyUnit.instance;

    pool.members.map((member) => {
      myUnit.overlapOnOther(member);
    });
  }

}
