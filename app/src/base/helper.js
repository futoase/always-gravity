var Helper = (function() {
  var self = this;

  return {
    getMember: function(members) {
      return members[parseInt(Math.random() * (members.length - 1))];
    },
    strewnSprite: function(sprite, limit, acceleration, cb, option) {
      if (acceleration === null || acceleration === undefined) {
        return;
      }

      var isRevive;

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
    },
    revive: function(sprite) {
      sprite.y = -sprite.height;
      sprite.x = parseInt(Math.random() * 800);
      sprite.physics.velocity.y = 0;
      sprite.physics.acceleration.y = 0;
      sprite.alive = true;
    },
    checkSpritePosition: function(sprite) {
      if (sprite.x > this.game.stage.width ||
          sprite.y > this.game.stage.height ||
          sprite.x < 0 ||
          sprite.y < 0) {
        sprite.alive = false;
      }
    },
    updateSpriteRotation: function(sprite, rotate) {
      if (rotate === null) {
        rotate = 1;
      }
      sprite.transform.rotation += (
        Kiwi.Utils.GameMath.degreesToRadians(rotate)
      );
    },
    radian: function(angle) {
      return parseInt(angle) * Math.PI / 180;
    }
  };
})();

