playState.createCylinderAndAppendGroup = function() {
  for(var i = 0; i < this.NUMBER_OF_CYLINDER; i++) {
    var cylinder = new Kiwi.GameObjects.Sprite(
      this, this.textures.cylinder, -100, -100
    );
    cylinder.animation.add('cycle', [0, 1, 2, 3, 4, 5, 6, 7], 0.1, true);
    cylinder.animation.play('cycle');
    cylinder.hitbox = new Kiwi.Geom.Rectangle(0, 10, 30, 110);
    this.cylinderPool.addChild(cylinder);
    cylinder.anchorPointX = cylinder.x * 0.5;
    cylinder.anchorPointY = cylinder.y * 0.5;
    cylinder.physics = cylinder.components.add(
      new Kiwi.Components.ArcadePhysics(cylinder, cylinder.box)
    );
    cylinder.x = parseInt(Math.random() * 800);
    cylinder.y = -cylinder.height;
    cylinder.index = i;
    cylinder.score = 200;
  }
};

