playState.updateMyUnit = function() {
  let myUnit = MyUnit.instance;
  myUnit.context = this;

  myUnit.update();
};
