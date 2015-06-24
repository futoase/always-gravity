playState.createSlowDownCountText = function() {
  this.slowDownCountText = new Kiwi.GameObjects.TextField(
    this, this.LIMIT_VELOCITY_MAX_COUNT, this.game.stage.width / 2, 250, "#ffffff", 48, "bold", "monoscape"
  );
  this.slowDownCountText.textAlign = Kiwi.GameObjects.TextField.TEXT_ALIGN_CENTER;
};
