class Helper {

  static getMember(members) {
    return members[parseInt(Math.random() * (members.length - 1))];
  }

  static strewnSprite(sprite, limit, acceleration, cb, option) {
    if (acceleration === null || acceleration === undefined) {
      return;
    }

    let isRevive;

    if (option !== null && option !== undefined) {
      isRevive = option.revive;
    }
    else {
      isRevive = true;
    }

    if (sprite.y < limit.y) {
      sprite.physics.acceleration.y += acceleration.y;
    }
    else {
      if (isRevive) {
        Helper.revive(sprite);
      }
    }

    if (typeof(cb) === 'function') {
      cb(sprite);
    }
  }

  static revive(sprite) {
    sprite.y = -sprite.height;
    sprite.x = parseInt(Math.random() * 800);
    sprite.physics.velocity.y = 0;
    sprite.physics.acceleration.y = 0;
    sprite.alive = true;
  }

  static checkSpritePosition(sprite) {
    if (sprite.x > this.game.stage.width ||
        sprite.y > this.game.stage.height ||
        sprite.x < 0 ||
        sprite.y < 0) {
      sprite.alive = false;
    }
  }

  static updateSpriteRotation(sprite, rotate) {
    if (rotate === null) {
      rotate = 1;
    }
    sprite.transform.rotation += (
      Kiwi.Utils.GameMath.degreesToRadians(rotate)
    );
  }

  static radian(angle) {
    return parseInt(angle) * Math.PI / 180;
  }

}
