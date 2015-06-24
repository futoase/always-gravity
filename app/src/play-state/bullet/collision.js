playState.checkCollision = function(bullet) {
  var cubeMembers = this.cubePool.members;
  var circleMembers = this.circlePool.members;
  var cylinderMembers = this.cylinderPool.members;

  for (var i = 0; i < cubeMembers.length; i++) {
    if (bullet.physics.overlaps(cubeMembers[i])) {
      this.overlapOnObject(
        bullet, cubeMembers[i], { soundEffectVolume: 0.3 }
      );
    }
  }

  for (var i = 0; i < circleMembers.length; i++) {
    if (bullet.physics.overlaps(circleMembers[i])) {
      this.overlapOnObject(
        bullet, circleMembers[i], { soundEffectVolume: 0.6 }
      );
    }
  }

  for (var i = 0; i < cylinderMembers.length; i++) {
    if (bullet.physics.overlaps(cylinderMembers[i])){
      this.overlapOnObject(
        bullet, cylinderMembers[i], { soundEffectVolume: 0.6 }
      );
    }
  }
};

