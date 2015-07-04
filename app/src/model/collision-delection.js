class CollisionDelection {

  static BulletCollideWithCube(bullet) {
    let members = GroupPool.cube().members;

    members.map((member) => {
      if (bullet.physics.overlaps(member)) {
        Bullet.overlapOnObject(bullet, member, 0.5);
      }
    });
  }

  static BulletCollideWithCircle(bullet) {
    let members = GroupPool.circle().members;

    members.map((member) => {
      if (bullet.physics.overlaps(member)) {
        Bullet.overlapOnObject(bullet, member, 0.5);
      }
    });
  }

  static BulletCollideWithCylinder(bullet) {
    let members = GroupPool.cylinder().members;

    members.map((member) => {
      if (bullet.physics.overlaps(member)) {
        Bullet.overlapOnObject(bullet, member, 0.6);
      }
    });
  }

}
