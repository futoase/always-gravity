playState.updateHUD = function() {
  let hud = HUD.instance;
  hud.context = this;
  hud.update();
}
