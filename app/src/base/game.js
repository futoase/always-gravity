var game = new Kiwi.Game(
  GAME_CONFIG.CONTAINER_ID, GAME_CONFIG.NAME, null, gameOptions
);
game.states.addState(titleState);
game.states.addState(playState);

game.states.switchState('Title');
