playState.gameOver = function(){
  if (this.isGameOver) {
    return;
  }

  this.destroyObjects();

  GameMusic.gameOver.play();

  this.addChild(GameText.createGameOver(this));
  this.addChild(GameText.createScore(this, this.gameScoreCounter));
  this.addChild(GameText.createRestart(this));
  this.addChild(GameText.createExitGame(this));

  if (this.isGameOver === undefined) {
    this.isGameOver = true;
  }
};
