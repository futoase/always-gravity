class CollisionDelection {

  /**
   * BulletCollideWithCube()
   * Observe the collision bullet and cube.
   *
   * @param {Kiwi.Sprite} bullet
   */
  static bulletCollideWithCube(bullet) {
    const members = GroupPool.cube().members;

    members.map((member) => {
      if (bullet.physics.overlaps(member)) {
        Bullet.overlapOnObject(bullet, member, 0.5);
      }
    });
  }

  /**
   * BulletCollideWithCircle()
   * Observe the collision bullet and circle.
   *
   * @param {Kiwi.Sprite} bullet
   */
  static bulletCollideWithCircle(bullet) {
    const members = GroupPool.circle().members;

    members.map((member) => {
      if (bullet.physics.overlaps(member)) {
        Bullet.overlapOnObject(bullet, member, 0.5);
      }
    });
  }

  /**
   * BulletCollideWithCylinder()
   * Observe the collision bullet and cylinder.
   *
   * @param {Kiwi.Sprite} bullet
   */
  static bulletCollideWithCylinder(bullet) {
    const members = GroupPool.cylinder().members;

    members.map((member) => {
      if (bullet.physics.overlaps(member)) {
        Bullet.overlapOnObject(bullet, member, 0.6);
      }
    });
  }

  /**
   * bulletCollideWithRhombus()
   * Observe the collision bullet and rhombus.
   *
   * @param {Kiwi.Sprite} bullet
   */
  static bulletCollideWithRhombus(bullet) {
    const members = GroupPool.rhombus().mebers;

    members.map((member) => {
      if (bullet.physics.overlaps(member)) {
        Bullet.ricochet(bullet);
      }
    });
  }

}
