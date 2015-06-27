playState.explosionOfMyUnit = function() {
  let myUnit = MyUnit.instance;
  myUnit.context = this;

  myUnit.explosion();
};
