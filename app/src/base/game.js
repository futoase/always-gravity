var game = new Kiwi.Game(
  GAME_CONFIG.CONTAINER_ID, GAME_CONFIG.NAME, null, gameOptions
);
game.states.addState(GameState.instance.title);
game.states.addState(GameState.instance.play);

game.states.switchState('Title');
