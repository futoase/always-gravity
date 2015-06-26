playState.overTheLimitVelocityCount = function() {
  let hud = HUD.instance;
  hud.context = this;

  if (this.overTheLimitVelocityCounter === undefined) {
    this.overTheLimitVelocityCounter = 0;
  }

  if (hud.velocityBar.counter.current >= this.LIMIT_VELOCITY) {
    if (this.contains(this.slowDownCountText)) {
      this.slowDownCountText.text = (
        this.LIMIT_VELOCITY_MAX_COUNT - this.overTheLimitVelocityCounter
      );
    }
    this.overTheLimitVelocityCounter++;
  }
  else {
    this.overTheLimitVelocityCounter = 0;
    this.slowDownCountText.text = this.LIMIT_VELOCITY_MAX_COUNT;
  }

  if (this.overTheLimitVelocityCounter > this.LIMIT_VELOCITY_MAX_COUNT) {
    this.explosionOfMyUnit();
  }
};
