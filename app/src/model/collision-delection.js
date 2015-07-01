class CollisionDelection {
  static BulletCollideWithCube(context, bullet) {
    let members = GroupPool.cube(context).members;
    members.map((member) => {
      if (bullet.physics.overlaps(member)) {
        Bullet.overlapOnObject(
          context, bullet, member, 0.3
        );
      }
    });
  }

  static BulletCollideWithCircle(context, bullet) {
    let members = GroupPool.circle(context).members;
    members.map((member) => {
      if (bullet.physics.overlaps(member)) {
        Bullet.overlapOnObject(
          context, bullet, member, 0.3
        );
      }
    });
  }

  static BulletCollideWithCylinder(context, bullet) {
    let members = GroupPool.cylinder(context).members;
    members.map((member) => {
      if (bullet.physics.overlaps(member)) {
        Bullet.overlapOnObject(
          context, bullet, member, 0.3
        );
      }
    });
  }
}
