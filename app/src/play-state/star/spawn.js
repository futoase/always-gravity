playState.spawnSpriteOfStar = function() {
  Helper.strewnSprite(
    Helper.getMember(this.starPool.members),
    { y: this.game.stage.height },
    { y: 3 }
  );
};

