playState.createCubeAndApppendGroup = function() {
  for(var i = 0; i < this.NUMBER_OF_CUBE; i++) {
    var cube = new Kiwi.GameObjects.Sprite(
      this, this.textures.cube, -100, -100
    );
    cube.hitbox = new Kiwi.Geom.Rectangle(10, 0, 20, 20);
    this.cubePool.addChild(cube);
    cube.anchorPointX = cube.width * 0.5;
    cube.anchorPointY = cube.height * 0.5;
    cube.physics = cube.components.add(
      new Kiwi.Components.ArcadePhysics(cube, cube.box)
    );
    cube.x = parseInt(Math.random() * 800);
    cube.index = i;
    cube.score = 100;
  }
};
