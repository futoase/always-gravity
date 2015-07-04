let GAME_MAIN = new Kiwi.Game(
  GAME_CONFIG.CONTAINER_ID, GAME_CONFIG.NAME, null, gameOptions
);

GAME_MAIN.states.addState(GameState.instance.title);
GAME_MAIN.states.addState(GameState.instance.play);

GAME_MAIN.states.switchState('Title');
