playState.destroyTimers = function() {
  let timer = Timer.instance;
  timer.context = this;

  timer.removeAllTimer();
};
