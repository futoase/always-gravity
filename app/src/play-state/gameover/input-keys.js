playState.whenGameOverInputKeys = function() {
  if (this.exitGameInputIsActive()) {
    ipc.sendSync('quit');
  }

  if (this.restartInputIsActive()){
    window.location.reload(true);
  }
};
