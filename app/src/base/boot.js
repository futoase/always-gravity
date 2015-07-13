const GAME_MAIN = new Kiwi.Game(
  GameConfig.setting.CONTAINER_ID,
  GameConfig.setting.NAME,
  null,
  GameConfig.kiwiOption
);

GAME_MAIN.states.addState(GameState.instance.title);
GAME_MAIN.states.addState(GameState.instance.play);

GAME_MAIN.states.switchState('Title');
