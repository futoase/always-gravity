playState.createStarAndAppendGroup = function() {
  for(var i = 0; i < this.NUMBER_OF_STAR; i++) {
    var star = new Kiwi.GameObjects.Sprite(
      this, this.textures.star, -100, -100
    );
    this.starPool.addChild(star);
    star.anchorPointX = star.width * 0.5;
    star.anchorPointY = star.height * 0.5;
    star.physics = star.components.add(
      new Kiwi.Components.ArcadePhysics(star, star.box)
    );
    star.physics.acceleration.y = 1;
    star.x = parseInt(Math.random() * 800);
    if (i < parseInt(this.NUMBER_OF_STAR / 3)) {
      star.y = parseInt(Math.random() * 600);
    }
    else {
      star.y = -1 * parseInt(Math.random() * 200);
    }
    star.index = i;
  }
};
