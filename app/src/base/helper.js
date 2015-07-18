class Helper {

  /**
   * getMember() is return member from Pool.
   *
   * @return {Kiwi.GameObjects.Sprite}
   */
  static getMember(members) {
    return members[parseInt(Math.random() * (members.length - 1), 10)];
  }

  /**
   * strewnSprite() is set action to sprite.
   * option: if set of callback then running after main action.
   *
   * @param {Kiwi.GameObjects.Sprite} sprite
   * @param {Object} limit
   *   @param {Number} limit.y
   * @param {Object} acceleration
   *   @param {Number} acceleration.y
   * @param {function} cb
   * @param {Object} option
   *   @param {Boolean} option.revive
   */
  static strewnSprite(sprite, limit, acceleration, cb, option) {
    if (acceleration === null || acceleration === undefined) {
      return;
    }

    let isRevive;

    if (option !== null && option !== undefined) {
      isRevive = option.revive;
    } else {
      isRevive = true;
    }

    if (sprite.y < limit.y) {
      sprite.physics.acceleration.y += acceleration.y;
    } else {
      if (isRevive) {
        Helper.revive(sprite);
      }
    }

    if (typeof cb === 'function') {
      cb(sprite);
    }
  }

  /**
   * revive() is revive function of sprite.
   */
  static revive(sprite) {
    sprite.y = -sprite.height;
    sprite.x = parseInt(Math.random() * GameConfig.kiwiOption.width, 10);
    sprite.physics.velocity.y = 0;
    sprite.physics.acceleration.y = 0;
    sprite.alive = true;
  }

  /**
   * checkSpritePosition() is observe of position the sprite.
   * Set the value of false against the sprite when of over limit of position.
   *
   * @param {Kiwi.GameState.Sprite} sprite
   */
  static checkSpritePosition(sprite) {
    if (sprite.x > this.game.stage.width ||
        sprite.y > this.game.stage.height ||
        sprite.x < 0 ||
        sprite.y < 0) {
      sprite.alive = false;
    }
  }

  /**
   * updateSpriteRotation() is update of rotation the sprite.
   *
   * @param {Kiwi.GameObjects.Sprite} sprite
   * @param {Number} rotate
   */
  static updateSpriteRotation(sprite, rotate) {
    let setRotate;

    if (rotate === null) {
      setRotate = 1;
    } else {
      setRotate = rotate;
    }

    sprite.transform.rotation += (
      Kiwi.Utils.GameMath.degreesToRadians(setRotate)
    );
  }

  /**
   * radian() is return a value of Radian.
   *
   * @param {Number} angle
   * @return {Number} Radian
   */
  static radian(angle) {
    return parseInt(angle, 10) * Math.PI / 180;
  }

  /**
   * addSprites() is settings of sprite onto State.
   *
   * @param {Kiwi.State} context
   * @param {Array} spriteSheets
   */
  static addSprites(context, spriteSheets) {
    spriteSheets.map((sprite) => {
      context.addSpriteSheet(sprite.name, sprite.path, sprite.width, sprite.height);
    });
  }

  /**
   * addSprites() is settings of sound onto State.
   *
   * @param {Kiwi.State} context
   * @param {Array} soundFiles
   */
  static addSound(context, soundFiles) {
    soundFiles.map((soundFile) => {
      context.addAudio(soundFile.name, soundFile.path);
    });
  }

}
