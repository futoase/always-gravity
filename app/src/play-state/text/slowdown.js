playState.createSlowDownText = function() {
  this.slowDownText = new Kiwi.GameObjects.TextField(
    this, "SLOW DOWN !!!", this.game.stage.width / 2, 200, "#ffffff", 48, "bold", "monospace"
  );
  this.slowDownText.textAlign = Kiwi.GameObjects.TextField.TEXT_ALIGN_CENTER;
};
