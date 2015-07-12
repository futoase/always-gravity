class CollisionDelection {

  /**
   * BulletCollideWithCube()
   * Observe the collision bullet and cube.
   *
   * @param {Kiwi.Sprite} bullet
   */
  static BulletCollideWithCube(bullet) {
    let members = GroupPool.cube().members;

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
  static BulletCollideWithCircle(bullet) {
    let members = GroupPool.circle().members;

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
  static BulletCollideWithCylinder(bullet) {
    let members = GroupPool.cylinder().members;

    members.map((member) => {
      if (bullet.physics.overlaps(member)) {
        Bullet.overlapOnObject(bullet, member, 0.6);
      }
    });
  }

}
