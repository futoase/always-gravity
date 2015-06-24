playState.updateHud = function() {
  var currentVelocityX = Math.abs(this.myUnit.physics.velocity.x);
  var currentVelocityY = Math.abs(this.myUnit.physics.velocity.y);

  this.hudVelocityBar.counter.current = (
    currentVelocityX + currentVelocityY
  );
  this.hudGameScoreCounter.text = this.gameScoreCounter;
};
