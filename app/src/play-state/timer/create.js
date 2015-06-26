playState.createTimers = function() {
  let timer = Timer.instance;
  timer.context = this;

  timer.createAllTimer();
};
