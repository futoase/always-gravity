playState.update = function() {
  Kiwi.State.prototype.update.call(this);
  let myUnit = MyUnit.instance;
  myUnit.context = this;

  MyUnit.update(this);
  HUD.update(this);

  if (this.contains(myUnit.sprite) && GameKey.activeShootKey()) {
    Bullet.shoot(this);
    //this.shootBullet();
  }

  GroupPool.forEachAll(this);

  if (GameOver.status) {
    if (GameKey.activeExitKey()) {
      ipc.sendSync('quit');
    }

    if (GameKey.activeRestartKey()){
      window.location.reload(true);
    }
  }
};
