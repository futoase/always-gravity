var game = new Kiwi.Game(
  gameContainerID, nameOfGame, null, gameOptions
);
game.states.addState(titleState);
game.states.addState(playState);

game.states.switchState('Title');
