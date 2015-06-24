playState.createExitGameText = function() {
  this.exitGameText = new Kiwi.GameObjects.TextField(
    this, "QUIT: ESC", this.game.stage.width / 2, 380, "#ffffff", 20, "bold", "monospace"
  );
  this.exitGameText.textAlign = Kiwi.GameObjects.TextField.TEXT_ALIGN_CENTER;
};
