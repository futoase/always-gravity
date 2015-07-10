class MyUnitSplinterGenerator {

  static create(index) {
    const context = GameState.instance.current;

    let myUnitSplinter = new Kiwi.GameObjects.Sprite(
      context, context.textures.myUnitSplinter, -100, -100
    );
    myUnitSplinter.animation.add('explosion', [0, 1, 2, 3, 4, 5], 0.05, true);
    myUnitSplinter.physics = myUnitSplinter.components.add(
      new Kiwi.Components.ArcadePhysics(myUnitSplinter, myUnitSplinter.box)
    );
    myUnitSplinter.index = index;

    return myUnitSplinter;
  }

}
