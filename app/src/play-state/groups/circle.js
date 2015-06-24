playState.createCircleAndAppendGroup = function() {
  for(var i = 0; i < this.NUMBER_OF_CIRCLE; i++) {
    var circle = new Kiwi.GameObjects.Sprite(
      this, this.textures.circle, -100, -100
    )
    circle.hitbox = new Kiwi.Geom.Rectangle(10, 0, 18, 18);
    this.circlePool.addChild(circle);
    circle.anchorPointX = circle.width * 0.5;
    circle.anchorPointY = circle.height * 0.5;
    circle.physics = circle.components.add(
      new Kiwi.Components.ArcadePhysics(circle, circle.box)
    );
    circle.x = parseInt(Math.random() * 800);
    circle.index = i;
    circle.score = 500;
  }
};
