playState.createRestartText = function() {
  this.restartText = new Kiwi.GameObjects.TextField(
    this, "RESTART: R", this.game.stage.width / 2, 350, "#ffffff", 20, "bold", "monospace"
  );
  this.restartText.textAlign = Kiwi.GameObjects.TextField.TEXT_ALIGN_CENTER;
};
