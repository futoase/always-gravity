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
    if (!this[starPool] ||
        !this._isExistsContextName(this[starPool])) {
      this[starPool] = this._createNewGroup();
    }
    return this[starPool];
  }

  static cube() {
    if (!this[cubePool] ||
        !this._isExistsContextName(this[cubePool])) {
      this[cubePool] = this._createNewGroup();
    }
    return this[cubePool];
  }

  static circle() {
    if (!this[circlePool] ||
        !this._isExistsContextName(this[circlePool])) {
      this[circlePool] = this._createNewGroup();
    }
    return this[circlePool];
  }

  static bullet() {
    if (!this[bulletPool] ||
        !this._isExistsContextName(this[bulletPool])) {
      this[bulletPool] = this._createNewGroup();
    }
    return this[bulletPool];
  }

  static cylinder() {
    if (!this[cylinderPool] ||
        !this._isExistsContextName(this[cylinderPool])) {
      this[cylinderPool] = this._createNewGroup();
    }
    return this[cylinderPool];
  }

  static myUnitSplinter() {
    if (!this[myUnitSplinterPool] ||
        !this._isExistsContextName(this[myUnitSplinterPool])) {
      this[myUnitSplinterPool] = this._createNewGroup();
    }
    return this[myUnitSplinterPool];
  }

  static rhombusSplinter() {
    if (!this[rhombusSplinterPool] ||
        !this._isExistsContextName(this[rhombusSplinterPool])) {
      this[rhombusSplinterPool] = this._createNewGroup();
    }
    return this[rhombusSplinterPool];
  }

  static rhombus() {
    if (!this[rhombusPool] ||
        !this._isExistsContextName(this[rhombusPool])) {
      this[rhombusPool] = this._createNewGroup();
    }
    return this[rhombusPool];
  }

  static explosion() {
    if (!this[explosionPool] ||
        !this._isExistsContextName(this[explosionPool])) {
      this[explosionPool] = this._createNewGroup();
    }
    return this[explosionPool];
  }

  static removeChildrenForAll() {
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
    const context = GameState.current;
    let pool = GroupPool.star();

    pool.forEach(context, Helper.checkSpritePosition);
  }

  static forEachCube() {
    const context = GameState.current;
    let pool = GroupPool.cube();

    pool.forEach(context, (cube) => {
      Helper.updateSpriteRotation(cube, 5);
    });
    pool.forEach(context, Helper.checkSpritePosition);
  }

  static forEachCylinder() {
    const context = GameState.current;
    let pool = GroupPool.cylinder();

    pool.forEach(context, Helper.checkSpritePosition);
  }

  static forEachCircle() {
    const context = GameState.current;
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
    const context = GameState.current;
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
    const context = GameState.current;
    let pool = GroupPool.bullet();

    pool.forEach(context, Helper.checkSpritePosition);
    pool.members.map((member) => {
      CollisionDelection.BulletCollideWithCube(member);
      CollisionDelection.BulletCollideWithCircle(member);
      CollisionDelection.BulletCollideWithCylinder(member);
    });
  }

  static forEachExplosion() {
    const context = GameState.current;
    let pool = GroupPool.explosion();

    pool.members.map((member) => {
      Explosion.isLastOfCellIndex(member)
    });
  }

  static forEachRhombusSplinter() {
    const context = GameState.current;
    let pool = GroupPool.rhombusSplinter();
    let myUnit = MyUnit.instance;

    pool.forEach(context, Helper.checkSpritePosition);
    pool.members.map((member) => {
      myUnit.overlapOnOther(member);
    });
  }

  static forEachRhombus() {
    const context = GameState.current;
    let pool = GroupPool.rhombus();
    let myUnit = MyUnit.instance;

    pool.members.map((member) => {
      myUnit.overlapOnOther(member);
    });
  }

  static _isExistsContextName(group) {
    const context = GameState.current;

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

  static _createNewGroup() {
    const context = GameState.current;
    return (new Kiwi.Group(context));
  }

}
