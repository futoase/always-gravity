playState.whenGameOverInputKeys = function() {
  if (GameKey.activeExitKey()) {
    ipc.sendSync('quit');
  }

  if (GameKey.activeRestartKey()){
    window.location.reload(true);
  }
};
