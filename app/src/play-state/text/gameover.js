playState.createGameOverText = function() {
  this.gameOverText = new Kiwi.GameObjects.TextField(
    this, "GAME OVER", this.game.stage.width / 2, 200, "#ffffff", 64, "bold", "monospace"
  );
  this.gameOverText.textAlign = Kiwi.GameObjects.TextField.TEXT_ALIGN_CENTER;
};
