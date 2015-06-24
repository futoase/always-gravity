playState.spawnSpriteOfCube = function() {
  Helper.strewnSprite(
    Helper.getMember(this.cubePool.members),
    { y: this.game.stage.height },
    { y: 5 }
  );
};
