playState.explosionRhombus = function(rhombus) {
  var rhombusSplinterMembers = this.rhombusSplinterPool.members;
  var angleBase = parseInt(360 / this.NUMBER_OF_RHOMBUS_SPLINTER);

  var rhombusSplinterAngle = 0;
  var explosionCounter = 0;

  for(var i = 0; i <rhombusSplinterMembers.length; i++) {
    rhombusSplinterMembers[i].x = rhombus.x;
    rhombusSplinterMembers[i].y = rhombus.y;

    rhombusSplinterMembers[i].physics.velocity.x = (
      Math.cos(Helper.radian(rhombusSplinterAngle)) * 30
    );
    rhombusSplinterMembers[i].physics.velocity.y = (
      Math.sin(Helper.radian(rhombusSplinterAngle)) * 30
    );

    rhombusSplinterAngle += angleBase;
  }
};
