playState.destroyFinishCellIndexOfExplosion = function() {
  var explosionMembers = this.explosionPool.members;

  for(var i = 0; i < explosionMembers.length; i++) {
    if (explosionMembers[i].cellIndex >= 3) {
      explosionMembers[i].destroy();
    }
  }
};
