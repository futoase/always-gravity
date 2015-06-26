playState.createHUD = function() {
  let hud = HUD.instance;
  hud.context = this;

  this.game.huds.defaultHUD.addWidget(
    hud.createVelocityBar()
  );
  this.game.huds.defaultHUD.addWidget(
    hud.createHitPointBar()
  );
  this.game.huds.defaultHUD.addWidget(
    hud.createGameScoreCounter()
  );
}
