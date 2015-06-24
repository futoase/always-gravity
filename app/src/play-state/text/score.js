playState.createScoreText = function(score) {
  this.scoreText = new Kiwi.GameObjects.TextField(
    this, "SCORE: " + score, this.game.stage.width / 2, 280, "#ffffff", 36, "bold", "monospace"
  );
  this.scoreText.textAlign = Kiwi.GameObjects.TextField.TEXT_ALIGN_CENTER;
};
