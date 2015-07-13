const starPool = Symbol();
const cubePool = Symbol();
const circlePool = Symbol();
const bulletPool = Symbol();
const cylinderPool = Symbol();
const myUnitSplinterPool = Symbol();
const rhombusSplinterPool = Symbol();
const rhombusPool = Symbol();
const explosionPool = Symbol();

class GroupPool {

  /**
   * star() is create of GameGroup for star.
   *
   * @return {Kiwi.Group} starPool
   */
  static star() {
    if (!this[starPool] ||
        !this._isExistsContextName(this[starPool])) {
      this[starPool] = this._createNewGroup();
    }
    return this[starPool];
  }

  /**
   * cube() is create of GameGroup for cube.
   *
   * @return {Kiwi.Group} cubePool
   */
  static cube() {
    if (!this[cubePool] ||
        !this._isExistsContextName(this[cubePool])) {
      this[cubePool] = this._createNewGroup();
    }
    return this[cubePool];
  }

  /**
   * circle() is create of GameGroup for circle.
   *
   * @return {Kiwi.Group} circlePool
   */
  static circle() {
    if (!this[circlePool] ||
        !this._isExistsContextName(this[circlePool])) {
      this[circlePool] = this._createNewGroup();
    }
    return this[circlePool];
  }

  /**
   * bullet() is create of GameGroup for bullet.
   *
   * @return {Kiwi.Group} bulletPool
   */
  static bullet() {
    if (!this[bulletPool] ||
        !this._isExistsContextName(this[bulletPool])) {
      this[bulletPool] = this._createNewGroup();
    }
    return this[bulletPool];
  }

  /**
   * cylinder() is create of GameGroup for cylinder.
   *
   * @return {Kiwi.Group} cylinderPool
   */
  static cylinder() {
    if (!this[cylinderPool] ||
        !this._isExistsContextName(this[cylinderPool])) {
      this[cylinderPool] = this._createNewGroup();
    }
    return this[cylinderPool];
  }

  /**
   * myUnitSplinter() is create of GameGroup for myUnitSplinter.
   *
   * @return {Kiwi.Group} myUnitSplinterPool
   */
  static myUnitSplinter() {
    if (!this[myUnitSplinterPool] ||
        !this._isExistsContextName(this[myUnitSplinterPool])) {
      this[myUnitSplinterPool] = this._createNewGroup();
    }
    return this[myUnitSplinterPool];
  }

  /**
   * rhombusSplinter() is create of GameGroup for rhombusSplinter.
   *
   * @return {Kiwi.Group} rhombusSplinterPool
   */
  static rhombusSplinter() {
    if (!this[rhombusSplinterPool] ||
        !this._isExistsContextName(this[rhombusSplinterPool])) {
      this[rhombusSplinterPool] = this._createNewGroup();
    }
    return this[rhombusSplinterPool];
  }

  /**
   * rhombus() is create of GameGroup for rhombus.
   *
   * @return {Kiwi.Group} rhombusPool
   */
  static rhombus() {
    if (!this[rhombusPool] ||
        !this._isExistsContextName(this[rhombusPool])) {
      this[rhombusPool] = this._createNewGroup();
    }
    return this[rhombusPool];
  }

  /**
   * explosion() is create of GameGroup for explosion.
   *
   * @return {Kiwi.Group} explosionPool
   */
  static explosion() {
    if (!this[explosionPool] ||
        !this._isExistsContextName(this[explosionPool])) {
      this[explosionPool] = this._createNewGroup();
    }
    return this[explosionPool];
  }

  /**
   * removeChildrenForAll() is remove children on the Pools.
   */
  static removeChildrenForAll() {
    const star = GroupPool.star();
    const cube = GroupPool.cube();
    const circle = GroupPool.circle();
    const cylinder = GroupPool.cylinder();
    const bullet = GroupPool.bullet();
    const explosion = GroupPool.explosion();
    const rhombus = GroupPool.rhombus();

    star.removeChildren(0, star.members.length);
    cube.removeChildren(0, cube.members.length);
    circle.removeChildren(0, circle.members.length);
    cylinder.removeChildren(0, cylinder.members.length);
    bullet.removeChildren(0, bullet.members.length);
    explosion.removeChildren(0, explosion.members.length);
    rhombus.removeChildren(0, rhombus.members.length);
  }

  /**
   * forEachAll() is settings of the forEach on member for Pools.
   */
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

  /**
   * forEachStar() is function of forEach for starPool.
   */
  static forEachStar() {
    const context = GameState.current;
    const pool = GroupPool.star();

    pool.forEach(context, Helper.checkSpritePosition);
  }

  /**
   * forEachCube() is function of forEach for cubePool.
   */
  static forEachCube() {
    const context = GameState.current;
    const pool = GroupPool.cube();

    pool.forEach(context, (cube) => {
      Helper.updateSpriteRotation(cube, 5);
    });
    pool.forEach(context, Helper.checkSpritePosition);
  }

  /**
   * forEachCylinder() is function of forEach for cylinderPool.
   */
  static forEachCylinder() {
    const context = GameState.current;
    const pool = GroupPool.cylinder();

    pool.forEach(context, Helper.checkSpritePosition);
  }

  /**
   * forEachCircle() is function of forEach for circlePool.
   */
  static forEachCircle() {
    const context = GameState.current;
    const pool = GroupPool.circle();
    const myUnit = MyUnit.instance;

    pool.forEach(context, Helper.checkSpritePosition);
    pool.forEach(context, (circle) => {
      Helper.updateSpriteRotation(circle, 30);
    });
    pool.members.map((member) => {
      myUnit.overlapOnOther(member);
    });
  }

  // TODO: !!!!! REMOVE !!!!!
  static forEachCircle() {
    const context = GameState.current;
    const pool = GroupPool.circle();
    const myUnit = MyUnit.instance;

    pool.forEach(context, Helper.checkSpritePosition);
    pool.forEach(context, (circle) => {
      Helper.updateSpriteRotation(circle, 30);
    });
    pool.members.map((member) => {
      myUnit.overlapOnOther(member);
    });
  }

  /**
   * forEachBullet() is function of forEach for bulletPool.
   */
  static forEachBullet() {
    const context = GameState.current;
    const pool = GroupPool.bullet();

    pool.forEach(context, Helper.checkSpritePosition);
    pool.members.map((member) => {
      CollisionDelection.bulletCollideWithCube(member);
      CollisionDelection.bulletCollideWithCircle(member);
      CollisionDelection.bulletCollideWithCylinder(member);
    });
  }

  /**
   * forEachExplosion() is function of forEach for explosionPool.
   */
  static forEachExplosion() {
    const pool = GroupPool.explosion();

    pool.members.map((member) => {
      Explosion.isLastOfCellIndex(member);
    });
  }

  /**
   * forEachRhombusSplinter() is function of forEach for rhombusSplinterPool.
   */
  static forEachRhombusSplinter() {
    const context = GameState.current;
    const pool = GroupPool.rhombusSplinter();
    const myUnit = MyUnit.instance;

    pool.forEach(context, Helper.checkSpritePosition);
    pool.members.map((member) => {
      myUnit.overlapOnOther(member);
    });
  }

  /**
   * forEachRhombus() is function of forEach for rhombusPool.
   */
  static forEachRhombus() {
    const pool = GroupPool.rhombus();
    const myUnit = MyUnit.instance;

    pool.members.map((member) => {
      myUnit.overlapOnOther(member);
    });
  }

  /**
   * _isExistsContextName() is checked to be the existing group.
   */
  static _isExistsContextName(group) {
    const context = GameState.current;

    if (group === undefined || group.state === undefined) {
      return false;
    }

    if (group.state.config.name !== context.config.name) {
      return false;
    }

    return true;
  }

  /**
   * _createNewGroup() is return of new group for current context.
   *
   * @return {Kiwi.Group} group
   */
  static _createNewGroup() {
    const context = GameState.current;
    return (new Kiwi.Group(context));
  }

}
