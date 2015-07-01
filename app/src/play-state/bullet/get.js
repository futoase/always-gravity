playState.getFirstDeadBullet = function() {
  var bulletMembers = GroupPool.bullet(this).members;
  for(var i = bulletMembers.length - 1; i >= 0; i--) {
    if (bulletMembers[i].alive === false) {
      return bulletMembers[i];
    }
  }
  return null;
};
