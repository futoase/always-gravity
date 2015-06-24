playState.spawnSpriteOfRhombus = function() {
  if (this.isSpawnSpriteOfRhombusSplinter === undefined) {
    this.isSpawnSpriteOfRhombusSplinter = false;
  }

  if (parseInt(Math.random() * 100) === 0) {
    this.isSpawnSpinterOfRhombusSplinter = true;
  }

  if (this.isSpawnSpinterOfRhombusSplinter) {
    var self = this;
    Helper.strewnSprite(
      Helper.getMember(this.rhombusPool.members),
      { y: this.game.stage.height / 2 - 32 },
      { y: 1 },
      function(sprite) {
        var spriteBottomLeftPoint = (sprite.y + sprite.height);
        var standingPoint = (self.game.stage.height / 2 - sprite.height);
        var maxScale = 5;
        var scaleBase = 0.05;

        if (spriteBottomLeftPoint >= standingPoint) {
          sprite.physics.acceleration.y = 0;
          sprite.physics.velocity.y = 0;
          if (maxScale > sprite.scaleX &&
              maxScale > sprite.scaleY) {
            sprite.scaleX += scaleBase;
            sprite.scaleY += scaleBase;
          }
          else {
            self.explosionRhombus(sprite);
            sprite.scaleX = 1;
            sprite.scaleY = 1;
            Helper.revive(sprite);
            self.isSpawnSpinterOfRhombusSplinter = false;
          }
        }
      },
      { revive: false }
    );
  }

};
