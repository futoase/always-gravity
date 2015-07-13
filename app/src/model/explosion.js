class Explosion {

  /**
   * generate() is generate sprite of Explosion.
   *
   * @param {Number} baseX
   * @param {Number} baseY
   * @return {Kiwi.GameObjects.Sprite} explosion
   */
  static generate(baseX, baseY) {
    const context = GameState.current;

    const explosion = new Kiwi.GameObjects.Sprite(
      context, context.textures.explosion, baseX, baseY
    );

    explosion.x = Number(baseX - explosion.width * 0.5);
    explosion.y = Number(baseY - explosion.height * 0.5);

    explosion.animation.add('explosion', [0, 1, 2, 3], 0.1, true);
    explosion.animation.play('explosion');

    return explosion;
  }

  /**
   * isLastOfCellIndex()
   * Observe of last cell for sprite.
   * Destroy sprite when is over the cell index limit.
   *
   * @param {Kiwi.Gameobjects.Sprite} sprite
   */
  static isLastOfCellIndex(sprite) {
    if (sprite.cellIndex >= 3) {
      sprite.destroy();
    }
  }

}
