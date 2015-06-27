playState.createMyUnit = function() {
  let myUnit = MyUnit.instance;
  myUnit.context = this;

  this.addChild(myUnit.create());
};
