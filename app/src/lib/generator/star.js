class StarGenerator {
  static create(context, index) {
    let star = new Kiwi.GameObjects.Sprite(
      context, context.textures.star, -100, -100
    );
    star.anchorPointX = star.width * 0.5;
    star.anchorPointY = star.height * 0.5;
    star.physics = star.components.add(
      new Kiwi.Components.ArcadePhysics(star, star.box)
    );
    star.physics.acceleration.y = 1;
    star.x = parseInt(Math.random() * 800);
    if (index < parseInt(context.NUMBER_OF_STAR / 3)) {
      star.y = parseInt(Math.random() * 600);
    }
    else {
      star.y = -1 * parseInt(Math.random() * 200);
    }
    star.index = index;

    return star;
  }
}