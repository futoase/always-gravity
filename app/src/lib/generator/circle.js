class CircleGenerator {
  static create(context, index) {
    let circle = new Kiwi.GameObjects.Sprite(
      context, context.textures.circle, -100, -100
    )
    circle.hitbox = new Kiwi.Geom.Rectangle(10, 0, 18, 18);
    circle.anchorPointX = circle.width * 0.5;
    circle.anchorPointY = circle.height * 0.5;
    circle.physics = circle.components.add(
      new Kiwi.Components.ArcadePhysics(circle, circle.box)
    );
    circle.x = parseInt(Math.random() * 800);
    circle.index = index;
    circle.score = 500;

    return circle;
  }
}
