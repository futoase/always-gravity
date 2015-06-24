playState.explosionOfMyUnit = function() {
  var myUnitSplinterMembers = this.myUnitSplinterPool.members;
  var angleBase = parseInt(360 / this.NUMBER_OF_MYUNIT_SPLINTER);
  var myUnitSplinterAngle = 0;
  var explosionCounter = 0;

  if (this.myUnitExplosion === undefined) {
    this.myUnitExplosion = true;
  }
  else {
    return;
  }

  this.myUnit.physics.acceleration.x = 0;
  this.myUnit.physics.acceleration.y = 0;
  this.myUnit.physics.velocity.x = 0;
  this.myUnit.physics.velocity.y = 0;

  for(var i = 0; i < myUnitSplinterMembers.length; i++){
    myUnitSplinterMembers[i].x = this.myUnit.x;
    myUnitSplinterMembers[i].y = this.myUnit.y;

    myUnitSplinterMembers[i].physics.velocity.x = (
      Math.cos(Helper.radian(myUnitSplinterAngle)) * 40
    )
    myUnitSplinterMembers[i].physics.velocity.y = (
      Math.sin(Helper.radian(myUnitSplinterAngle)) * 40
    );

    myUnitSplinterMembers[i].animation.play('explosion');
    myUnitSplinterAngle += angleBase;
  }

  this.removeChild(this.myUnit);
  this.soundEffectOfMyUnitExplosion.play();

  this.myUnitExplosionTimer = this.game.time.clock.setInterval(function() {
    if (explosionCounter < 2) {
      explosionCounter++;
    }
    else {
      this.gameOver();
    }
  }, 1000, this);
};
