class CollisionDelection {

  static BulletCollideWithCube(bullet) {
    const context = GameState.instance.current;
    let members = GroupPool.cube().members;

    members.map((member) => {
      if (bullet.physics.overlaps(member)) {
        Bullet.overlapOnObject(
          context, bullet, member, 0.3
        );
      }
    });
  }

  static BulletCollideWithCircle(bullet) {
    const context = GameState.instance.current;
    let members = GroupPool.circle().members;

    members.map((member) => {
      if (bullet.physics.overlaps(member)) {
        Bullet.overlapOnObject(
          context, bullet, member, 0.3
        );
      }
    });
  }

  static BulletCollideWithCylinder(bullet) {
    const context = GameState.instance.current;
    let members = GroupPool.cylinder().members;

    members.map((member) => {
      if (bullet.physics.overlaps(member)) {
        Bullet.overlapOnObject(
          context, bullet, member, 0.3
        );
      }
    });
  }

}
