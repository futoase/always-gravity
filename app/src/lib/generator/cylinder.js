class CylinderGenerator {

  static create(index) {
    const context = GameState.current;

    let cylinder = new Kiwi.GameObjects.Sprite(
      context, context.textures.cylinder, -100, -100
    );
    cylinder.animation.add('cycle', [0, 1, 2, 3, 4, 5, 6, 7], 0.1, true);
    cylinder.animation.play('cycle');
    cylinder.hitbox = new Kiwi.Geom.Rectangle(0, 10, 30, 110);
    cylinder.anchorPointX = cylinder.x * 0.5;
    cylinder.anchorPointY = cylinder.y * 0.5;
    cylinder.physics = cylinder.components.add(
      new Kiwi.Components.ArcadePhysics(cylinder, cylinder.box)
    );
    cylinder.x = parseInt(Math.random() * 800);
    cylinder.y = -cylinder.height;
    cylinder.index = index;
    cylinder.score = 200;

    return cylinder;
  }

}
