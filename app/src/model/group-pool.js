let starPool = Symbol();
let cubePool = Symbol();
let circlePool = Symbol();
let bulletPool = Symbol();
let cylinderPool = Symbol();
let myUnitSplinterPool = Symbol();
let rhombusSplinterPool = Symbol();
let rhombusPool = Symbol();
let explosionPool = Symbol();

class GroupPool {

  static star() {
    const context = GameState.instance.current;

    if (!this[starPool] ||
        !this._isExistsContextName(this[starPool])) {
      this[starPool] = new Kiwi.Group(context);
    }
    return this[starPool];
  }

  static cube() {
    const context = GameState.instance.current;

    if (!this[cubePool] ||
        !this._isExistsContextName(this[cubePool])) {
      this[cubePool] = new Kiwi.Group(context);
    }
    return this[cubePool];
  }

  static circle() {
    const context = GameState.instance.current;

    if (!this[circlePool] ||
        !this._isExistsContextName(this[circlePool])) {
      this[circlePool] = new Kiwi.Group(context);
    }
    return this[circlePool];
  }

  static bullet() {
    const context = GameState.instance.current;

    if (!this[bulletPool] ||
        !this._isExistsContextName(this[bulletPool])) {
      this[bulletPool] = new Kiwi.Group(context);
    }
    return this[bulletPool];
  }

  static cylinder() {
    const context = GameState.instance.current;

    if (!this[cylinderPool] ||
        !this._isExistsContextName(this[cylinderPool])) {
      this[cylinderPool] = new Kiwi.Group(context);
    }
    return this[cylinderPool];
  }

  static myUnitSplinter() {
    const context = GameState.instance.current;

    if (!this[myUnitSplinterPool] ||
        !this._isExistsContextName(this[myUnitSplinterPool])) {
      this[myUnitSplinterPool] = new Kiwi.Group(context);
    }
    return this[myUnitSplinterPool];
  }

  static rhombusSplinter() {
    const context = GameState.instance.current;

    if (!this[rhombusSplinterPool] ||
        !this._isExistsContextName(this[rhombusSplinterPool])) {
      this[rhombusSplinterPool] = new Kiwi.Group(context);
    }
    return this[rhombusSplinterPool];
  }

  static rhombus() {
    const context = GameState.instance.current;

    if (!this[rhombusPool] ||
        !this._isExistsContextName(this[rhombusPool])) {
      this[rhombusPool] = new Kiwi.Group(context);
    }
    return this[rhombusPool];
  }

  static explosion() {
    const context = GameState.instance.current;

    if (!this[explosionPool] ||
        !this._isExistsContextName(this[explosionPool])) {
      this[explosionPool] = new Kiwi.Group(context);
    }
    return this[explosionPool];
  }

  static removeChildrenForAll(context) {
    let star = GroupPool.star();
    let cube = GroupPool.cube();
    let circle = GroupPool.circle();
    let cylinder = GroupPool.cylinder();
    let bullet = GroupPool.bullet();
    let explosion = GroupPool.explosion();
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
    let pool = GroupPool.explosion();

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

  static _isExistsContextName(group) {
    const context = GameState.instance.current;

    if (group === undefined || group.state === undefined) {
      return false;
    }

    if (group.state.config.name === context.config.name) {
      return true;
    }
    else {
      return false;
    }
  }

}
