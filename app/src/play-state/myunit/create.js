playState.createMyUnit = function() {
  this.myUnit = new Kiwi.GameObjects.Sprite(
    this, this.textures.myUnit, this.game.stage.width / 2, this.game.stage.height / 2
  );
  this.addChild(this.myUnit);

  this.myUnit.rotation = -Math.PI * 0.5;
  this.myUnit.physics = this.myUnit.components.add(
    new Kiwi.Components.ArcadePhysics(this.myUnit, this.myUnit.box)
  );
  this.myUnit.physics.maxVelocity = this.MAX_SPEED;
  this.myUnit.physics.drag.x = this.DRAG;
  this.myUnit.physics.drag.y = this.DRAG;
};
