playState.spawnSpriteOfCircle = function() {
  var self = this;
  Helper.strewnSprite(
    Helper.getMember(this.circlePool.members),
    { y: this.game.stage.height },
    { y: 2 },
    function (sprite) {
      var tween = self.game.tweens.create(sprite);
      tween.to(
        { x: self.myUnit.x },
        1000,
        Kiwi.Animations.Tweens.Easing.Sinusoidal.Out, true
      );
      tween.start();
    }
  );
};
