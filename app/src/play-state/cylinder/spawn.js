playState.spawnSpriteOfCylinder = function() {
  Helper.strewnSprite(
    Helper.getMember(this.cylinderPool.members),
    { y: this.game.stage.height },
    { y: 10 }
  );
};
