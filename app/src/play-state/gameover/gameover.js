playState.gameOver = function(){
  if (this.isGameOver) {
    return;
  }

  this.destroyObjects();

  this.musicGameOver = new Kiwi.Sound.Audio(
    this.game, 'musicGameover', 1, false
  );
  this.musicGameOver.play();

  this.createGameOverText();
  this.addChild(this.gameOverText);

  this.createScoreText(this.gameScoreCounter);
  this.addChild(this.scoreText);

  this.createRestartText();
  this.addChild(this.restartText);

  this.createExitGameText();
  this.addChild(this.exitGameText);

  if (this.isGameOver === undefined) {
    this.isGameOver = true;
  }
};
