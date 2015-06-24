playState.speedLimitOfUnit = function() {

  if (this.hudVelocityBar.counter.current >= this.LIMIT_VELOCITY * 0.95) {
    this.soundEffectOfCautionForSpeed.play();
    if (!this.contains(this.slowDownText)) {
      this.addChild(this.slowDownText);
    }
    if (!this.contains(this.slowDownCountText)) {
      this.addChild(this.slowDownCountText);
    }
  }
  else{
    this.soundEffectOfCautionForSpeed.stop();
    if (this.contains(this.slowDownText)) {
      this.removeChild(this.slowDownText);
    }
    if (this.contains(this.slowDownCountText)) {
      this.removeChild(this.slowDownCountText);
    }
  }
};
