playState.createHUD = function() {
  this.hudVelocityBar = new Kiwi.HUD.Widget.Bar(
    this.game, 0, this.LIMIT_VELOCITY, 50, 15, 700, 15, 'white'
  );
  this.game.huds.defaultHUD.addWidget(this.hudVelocityBar);

  this.hudHitPointBar = new Kiwi.HUD.Widget.Bar(
    this.game, this.CURRENT_HITPOINT, this.LIMIT_HITPOINT, 50, 40, 700, 15, '#A9D0F5'
  );
  this.game.huds.defaultHUD.addWidget(this.hudHitPointBar);

  this.hudGameScoreCounter = new Kiwi.HUD.Widget.TextField(
    this.game, '', 50, 60
  );
  this.game.huds.defaultHUD.addWidget(this.hudGameScoreCounter);

  this.hudGameScoreCounter.prefix = 'SCORE: ';
  this.hudGameScoreCounter.style.color = 'white';
  this.hudGameScoreCounter.style['font-size'] = '24px';
  this.hudGameScoreCounter.text = this.gameScoreCounter;
};

