titleState.createTitleText = function() {
  this.titleText = new Kiwi.GameObjects.TextField(
    this, "Always Gravity", this.game.stage.width / 2, 200, "#ffffff", 48, "bold", "monospace"
  );
  this.titleText.textAlign = Kiwi.GameObjects.TextField.TEXT_ALIGN_CENTER;

  this.addChild(this.titleText);

  this.subTitleText = new Kiwi.GameObjects.TextField(
    this, "常に重力", this.game.stage.width / 2, 270, "#ffffff", 24, "bold", "monospace"
  );
  this.subTitleText.textAlign = Kiwi.GameObjects.TextField.TEXT_ALIGN_CENTER;
  this.addChild(this.subTitleText);

  this.startText = new Kiwi.GameObjects.TextField(
    this, "START: SPACEBAR", this.game.stage.width / 2, 320, "#ffffff", 20, "bold", "monospace"
  );
  this.startText.textAlign = Kiwi.GameObjects.TextField.TEXT_ALIGN_CENTER;

  this.addChild(this.startText);

  this.quitText = new Kiwi.GameObjects.TextField(
    this, "QUIT: ESC", this.game.stage.width / 2, this.startText.y + 30, "#ffffff", 20, "bold", "monospace"
  );
  this.quitText.textAlign = Kiwi.GameObjects.TextField.TEXT_ALIGN_CENTER;
  this.addChild(this.quitText);
};
