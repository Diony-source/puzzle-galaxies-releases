(function () {
  window.__pgDoomMuted = false;

  function applyAudioMuteState() {
    try {
      if (typeof myApp !== 'undefined' && myApp && myApp.gainNode && myApp.gainNode.gain) {
        var target = window.__pgDoomMuted ? 0 : 0.65;
        if (Math.abs(myApp.gainNode.gain.value - target) > 0.01) {
          myApp.gainNode.gain.value = target;
        }
      }
    } catch (_) {}
  }

  function emitStatusToHost() {
    try {
      if (window.parent && window.parent !== window && typeof myApp !== 'undefined' && myApp && myApp.rivetsData) {
        window.parent.postMessage(
          {
            type: 'doom64-emu-status',
            ready: !myApp.rivetsData.moduleInitializing,
            started: !myApp.rivetsData.beforeEmulatorStarted,
            fps: Number(myApp.rivetsData.currentFPS || 0),
            noLocalSave: Boolean(myApp.rivetsData.noLocalSave),
            audioRunning: Boolean(myApp.audioContext && myApp.audioContext.state === 'running'),
            romName: String(myApp.rom_name || 'game.z64'),
            muted: Boolean(window.__pgDoomMuted)
          },
          '*'
        );
      }
    } catch (_) {}
  }

  function handleCommand(action, payload) {
    if (typeof myApp === 'undefined' || !myApp) return;
    if (action === 'saveState') {
      myApp.saveStateLocal?.();
    } else if (action === 'loadState') {
      if (!myApp.rivetsData?.noLocalSave) {
        myApp.loadStateLocal?.();
      }
    } else if (action === 'reset') {
      myApp.reset?.();
    } else if (action === 'openRemap') {
      myApp.showRemapModal?.();
    } else if (action === 'uploadRom') {
      myApp.uploadBrowse?.();
    } else if (action === 'fullscreen') {
      var cvs = document.getElementById('canvas');
      if (document.fullscreenElement) {
        document.exitFullscreen?.();
      } else if (cvs && cvs.requestFullscreen) {
        cvs.requestFullscreen().catch(function () {});
      }
    } else if (action === 'setMuted') {
      window.__pgDoomMuted = Boolean(payload && payload.muted);
      applyAudioMuteState();
      emitStatusToHost();
    } else if (action === 'focus') {
      try {
        window.focus();
        document.getElementById('canvas')?.focus?.();
      } catch (_) {}
    }
  }

  window.addEventListener('message', function (event) {
    if (event.source !== window.parent) return;
    var data = event.data;
    if (!data || data.type !== 'doom64-cmd') return;
    handleCommand(data.action, data);
  });

  window.addEventListener('keydown', function (event) {
    if (event.key === 'F5') {
      event.preventDefault();
      handleCommand('saveState');
    } else if (event.key === 'F9') {
      event.preventDefault();
      handleCommand('loadState');
    }
  });

  setInterval(function () {
    applyAudioMuteState();
    emitStatusToHost();
  }, 450);
})();
