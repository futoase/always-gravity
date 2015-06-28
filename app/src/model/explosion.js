class Explosion {

  static generate(context, baseX, baseY) {
    let explosion = new Kiwi.GameObjects.Sprite(
      context, context.textures.explosion, baseX, baseY
    );

    explosion.x = parseInt(baseX - explosion.width * 0.5);
    explosion.y = parseInt(baseY - explosion.height * 0.5);

    explosion.animation.add('explosion', [0, 1, 2, 3], 0.1, true);
    explosion.animation.play('explosion');

    return explosion;
  }

  static isLastOfCellIndex(sprite) {
    if (sprite.cellIndex >= 3) {
      sprite.destroy();
    }
  }
}
