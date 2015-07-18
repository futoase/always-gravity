class MyUnitSplinterGenerator {

  /**
   * create() is return of new sprite for MyUnitSplinter.
   *
   * @param {Number} index
   * @return {Kiwi.GameObjects.Sprite} MyUnitSplinter
   */
  static create(index) {
    const context = GameState.current;

    const myUnitSplinter = new Kiwi.GameObjects.Sprite(
      context,
      context.textures.myUnitSplinter,
      GameConfig.init.spawnSprite.x,
      GameConfig.init.spawnSprite.y
    );

    myUnitSplinter.index = index;
    myUnitSplinter.animation.add('explosion', [0, 1, 2, 3, 4, 5], 0.05, true);
    myUnitSplinter.physics = myUnitSplinter.components.add(
      new Kiwi.Components.ArcadePhysics(myUnitSplinter, myUnitSplinter.box)
    );

    return myUnitSplinter;
  }

}
