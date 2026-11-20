(function () {
  window.__pgDoomMuted = false;

  var STORAGE_KEY_BINDS = 'pg_doom64_custom_binds_v1';
  var STORAGE_KEY_MOUSE = 'pg_doom64_mouse_cfg_v1';

  var DEFAULT_USER_BINDS = {
    moveUp: 'w',
    moveDown: 's',
    strafeLeft: 'a',
    strafeRight: 'd',
    turnLeft: 'ArrowLeft',
    turnRight: 'ArrowRight',
    fire: ' ',
    use: 'e',
    run: 'shift',
    nextWeapon: 'q',
    prevWeapon: 'r',
    map: 'm',
    start: 'Enter'
  };

  var userBinds = Object.assign({}, DEFAULT_USER_BINDS);
  try {
    var savedBinds = localStorage.getItem(STORAGE_KEY_BINDS);
    if (savedBinds) {
      var parsedB = JSON.parse(savedBinds);
      for (var k in DEFAULT_USER_BINDS) {
        if (typeof parsedB[k] === 'string' && parsedB[k]) {
          userBinds[k] = parsedB[k];
        }
      }
    }
  } catch (_) {}

  var mouseCfg = {
    enabled: true,
    sensitivity: 1.0
  };
  try {
    var savedMouse = localStorage.getItem(STORAGE_KEY_MOUSE);
    if (savedMouse) {
      var parsedM = JSON.parse(savedMouse);
      if (typeof parsedM.enabled === 'boolean') mouseCfg.enabled = parsedM.enabled;
      if (typeof parsedM.sensitivity === 'number' && parsedM.sensitivity > 0.1) {
        mouseCfg.sensitivity = Math.max(0.25, Math.min(3.0, parsedM.sensitivity));
      }
    }
  } catch (_) {}

  // Canonical N64Wasm config.txt keys -> exact KeyboardEvent descriptors for Emscripten SDL2
  var CANONICAL_N64_KEYS = {
    moveUp: { key: 'w', code: 'KeyW', keyCode: 87 },
    moveDown: { key: 's', code: 'KeyS', keyCode: 83 },
    strafeLeft: { key: 'a', code: 'KeyA', keyCode: 65 },
    strafeRight: { key: 'd', code: 'KeyD', keyCode: 68 },
    turnLeft: { key: 'ArrowLeft', code: 'ArrowLeft', keyCode: 37 },
    turnRight: { key: 'ArrowRight', code: 'ArrowRight', keyCode: 39 },
    lookUp: { key: 'ArrowUp', code: 'ArrowUp', keyCode: 38 },
    lookDown: { key: 'ArrowDown', code: 'ArrowDown', keyCode: 40 },
    fire: { key: ' ', code: 'Space', keyCode: 32 },
    use: { key: 'e', code: 'KeyE', keyCode: 69 },
    run: { key: 'shift', code: 'ShiftLeft', keyCode: 16 },
    nextWeapon: { key: 'q', code: 'KeyQ', keyCode: 81 },
    prevWeapon: { key: 'r', code: 'KeyR', keyCode: 82 },
    map: { key: 'm', code: 'KeyM', keyCode: 77 },
    center: { key: 'c', code: 'KeyC', keyCode: 67 },
    start: { key: 'Enter', code: 'Enter', keyCode: 13 }
  };

  var activeActions = Object.create(null);
  var remapOverlayEl = null;
  var waitingRemapAction = null;
  var autoStartTimers = [];
  var mouseTurnDir = 0; // -1 left, 1 right, 0 none
  var mouseTurnReleaseTimer = null;

  function normalizeKeyName(rawKey) {
    if (!rawKey) return '';
    if (rawKey === ' ' || rawKey === 'Spacebar' || rawKey === 'Space') return ' ';
    if (rawKey === 'Shift' || rawKey === 'ShiftLeft' || rawKey === 'ShiftRight') return 'shift';
    if (rawKey === 'Control' || rawKey === 'ControlLeft' || rawKey === 'ControlRight') return 'control';
    if (rawKey.length === 1) return rawKey.toLowerCase();
    return rawKey;
  }

  function dispatchCanonicalAction(action, isDown) {
    var spec = CANONICAL_N64_KEYS[action];
    if (!spec) return;
    var already = Boolean(activeActions[action]);
    if (isDown === already && isDown) return;
    activeActions[action] = Boolean(isDown);

    var type = isDown ? 'keydown' : 'keyup';
    try {
      var ev = new KeyboardEvent(type, {
        key: spec.key,
        code: spec.code,
        bubbles: true,
        cancelable: true
      });
      ev.__pgSynthetic = true;
      Object.defineProperty(ev, 'keyCode', {
        get: function () {
          return spec.keyCode;
        }
      });
      Object.defineProperty(ev, 'which', {
        get: function () {
          return spec.keyCode;
        }
      });
      window.dispatchEvent(ev);
      document.dispatchEvent(ev);
    } catch (_) {}
  }

  function tapCanonicalAction(action, holdMs) {
    dispatchCanonicalAction(action, true);
    setTimeout(function () {
      dispatchCanonicalAction(action, false);
    }, holdMs || 160);
  }

  function releaseAllActions() {
    for (var act in activeActions) {
      if (activeActions[act]) {
        dispatchCanonicalAction(act, false);
      }
    }
  }

  function cancelAutoStart() {
    while (autoStartTimers.length > 0) {
      clearTimeout(autoStartTimers.pop());
    }
  }

  function scheduleAutoStartIntoLevel1(initialDelayMs) {
    cancelAutoStart();
    var base = typeof initialDelayMs === 'number' ? initialDelayMs : 5400;
    // 1) Skip flyover demo (Start) -> 2) Open New Game menu (A) -> 3) Select New Game (A) -> 4) Confirm Game Note Yes (A) -> 5) Confirm Skill (A) -> Level 1!
    var steps = [
      { delay: base, action: 'start' },
      { delay: base + 950, action: 'nextWeapon' },
      { delay: base + 1900, action: 'nextWeapon' },
      { delay: base + 2900, action: 'nextWeapon' },
      { delay: base + 4000, action: 'nextWeapon' },
      { delay: base + 5000, action: 'nextWeapon' }
    ];
    steps.forEach(function (st) {
      autoStartTimers.push(
        setTimeout(function () {
          tapCanonicalAction(st.action, 170);
        }, st.delay)
      );
    });
  }

  window.__pgBeforeRunHook = function (app) {
    try {
      app.rivetsData.showFPS = false;
      localStorage.setItem('n64wasm-showfps', 'false');
    } catch (_) {}
    app.mobileMode = false;
    app.rivetsData.settingMobile = 'ForceDesktop';
    // Ensure config.txt always uses canonical keys so our synthetic dispatcher works deterministically
    try {
      if (app.rivetsData && app.rivetsData.inputController) {
        app.rivetsData.inputController.KeyMappings =
          app.rivetsData.inputController.defaultKeymappings();
      }
    } catch (_) {}
  };

  window.__pgAfterRunHook = function (app) {
    try {
      if (app.toggleFPSModule) {
        app.toggleFPSModule(0);
      }
    } catch (_) {}
    scheduleAutoStartIntoLevel1(5300);
  };

  function wakeAudio() {
    try {
      if (typeof myApp !== 'undefined' && myApp && myApp.audioContext && myApp.audioContext.state !== 'running') {
        myApp.audioContext.resume();
      }
    } catch (_) {}
  }

  function resolveActionsForInput(keyNorm, codeRaw) {
    var matched = [];
    for (var action in userBinds) {
      if (normalizeKeyName(userBinds[action]) === keyNorm) {
        matched.push(action);
      }
    }
    // Helpful secondary aliases so both ArrowUp/W, Tab/M, and physical WASD codes always work
    if (matched.length === 0) {
      if (keyNorm === 'ArrowUp' || codeRaw === 'ArrowUp') matched.push('moveUp');
      else if (keyNorm === 'ArrowDown' || codeRaw === 'ArrowDown') matched.push('moveDown');
      else if (keyNorm === 'Tab' || codeRaw === 'Tab') matched.push('map');
      else if (keyNorm === 'control') matched.push('fire');
    }
    return matched;
  }

  function handleUserKey(eventType, keyRaw, codeRaw) {
    wakeAudio();
    var isDown = eventType === 'keydown';
    var keyNorm = normalizeKeyName(keyRaw);

    if (waitingRemapAction && isDown) {
      if (keyNorm && keyNorm !== 'Escape') {
        userBinds[waitingRemapAction] = keyNorm;
        try {
          localStorage.setItem(STORAGE_KEY_BINDS, JSON.stringify(userBinds));
        } catch (_) {}
      }
      waitingRemapAction = null;
      renderRemapOverlay();
      return;
    }

    if (remapOverlayEl && remapOverlayEl.style.display !== 'none') return;

    // Cancel pending auto-start if the user manually takes control after boot
    if (isDown) {
      cancelAutoStart();
    }

    var actions = resolveActionsForInput(keyNorm, codeRaw);
    for (var i = 0; i < actions.length; i++) {
      dispatchCanonicalAction(actions[i], isDown);
    }
  }

  window.addEventListener(
    'keydown',
    function (event) {
      if (event.__pgSynthetic) return;
      if (event.key === 'F5') {
        event.preventDefault();
        handleCommand('saveState');
        return;
      }
      if (event.key === 'F9') {
        event.preventDefault();
        handleCommand('loadState');
        return;
      }
      // Intercept raw user key event and translate through userBinds -> canonical N64 key event
      event.stopImmediatePropagation();
      if (
        event.key === ' ' ||
        event.key === 'Enter' ||
        event.key === 'Tab' ||
        String(event.key || '').startsWith('Arrow')
      ) {
        event.preventDefault();
      }
      handleUserKey('keydown', event.key, event.code);
    },
    true
  );

  window.addEventListener(
    'keyup',
    function (event) {
      if (event.__pgSynthetic) return;
      event.stopImmediatePropagation();
      handleUserKey('keyup', event.key, event.code);
    },
    true
  );

  window.addEventListener('blur', function () {
    releaseAllActions();
  });

  // Mouse Look (Pointer Lock) & Left/Right Click Fire/Use on #canvas
  document.addEventListener(
    'mousedown',
    function (event) {
      if (remapOverlayEl && remapOverlayEl.style.display !== 'none') return;
      var cvs = document.getElementById('canvas');
      if (!cvs) return;
      wakeAudio();
      window.focus();
      cancelAutoStart();
      if (mouseCfg.enabled && document.pointerLockElement !== cvs && event.target === cvs) {
        try {
          cvs.requestPointerLock();
        } catch (_) {}
      }
      if (event.button === 0) {
        dispatchCanonicalAction('fire', true);
      } else if (event.button === 2) {
        event.preventDefault();
        dispatchCanonicalAction('use', true);
      } else if (event.button === 1) {
        event.preventDefault();
        tapCanonicalAction('map', 150);
      }
    },
    true
  );

  document.addEventListener(
    'mouseup',
    function (event) {
      if (event.button === 0) dispatchCanonicalAction('fire', false);
      if (event.button === 2) dispatchCanonicalAction('use', false);
    },
    true
  );

  document.addEventListener('contextmenu', function (event) {
    if (event.target && event.target.id === 'canvas') {
      event.preventDefault();
    }
  });

  document.addEventListener(
    'mousemove',
    function (event) {
      var cvs = document.getElementById('canvas');
      if (!mouseCfg.enabled || !cvs || document.pointerLockElement !== cvs) return;
      var dx = Number(event.movementX || 0) * mouseCfg.sensitivity;
      if (Math.abs(dx) < 1.2) return;

      var dir = dx < 0 ? -1 : 1;
      if (dir !== mouseTurnDir) {
        if (mouseTurnDir === -1) dispatchCanonicalAction('turnLeft', false);
        if (mouseTurnDir === 1) dispatchCanonicalAction('turnRight', false);
        mouseTurnDir = dir;
        dispatchCanonicalAction(dir === -1 ? 'turnLeft' : 'turnRight', true);
      }

      if (mouseTurnReleaseTimer) clearTimeout(mouseTurnReleaseTimer);
      var holdMs = Math.min(130, Math.max(24, Math.round(Math.abs(dx) * 4.2)));
      mouseTurnReleaseTimer = setTimeout(function () {
        if (mouseTurnDir === -1) dispatchCanonicalAction('turnLeft', false);
        if (mouseTurnDir === 1) dispatchCanonicalAction('turnRight', false);
        mouseTurnDir = 0;
      }, holdMs);
    },
    true
  );

  document.addEventListener(
    'wheel',
    function (event) {
      if (remapOverlayEl && remapOverlayEl.style.display !== 'none') return;
      if (event.deltaY < 0) tapCanonicalAction('nextWeapon', 120);
      else if (event.deltaY > 0) tapCanonicalAction('prevWeapon', 120);
    },
    { passive: true }
  );

  function formatKeyLabel(k) {
    if (k === ' ') return 'Space (Boşluk)';
    if (k === 'shift') return 'Shift';
    if (k === 'control') return 'Ctrl';
    if (!k) return '-';
    return String(k).length === 1 ? String(k).toUpperCase() : String(k);
  }

  var REMAP_ROWS = [
    { action: 'moveUp', label: 'İleri Yürü' },
    { action: 'moveDown', label: 'Geri Yürü' },
    { action: 'strafeLeft', label: 'Sola Kay (Strafe Left)' },
    { action: 'strafeRight', label: 'Sağa Kay (Strafe Right)' },
    { action: 'turnLeft', label: 'Sola Dön (Klavye)' },
    { action: 'turnRight', label: 'Sağa Dön (Klavye)' },
    { action: 'fire', label: 'Ateş Et (+ Fare Sol Tık)' },
    { action: 'use', label: 'Kapı Aç / Kullan (+ Sağ Tık)' },
    { action: 'run', label: 'Hızlı Koş (Run)' },
    { action: 'nextWeapon', label: 'Sonraki Silah / Menü Seç (+ Tekerlek)' },
    { action: 'prevWeapon', label: 'Önceki Silah / Menü Geri' },
    { action: 'map', label: 'Harita (Automap)' },
    { action: 'start', label: 'Başlat / Duraklat (Start)' }
  ];

  function renderRemapOverlay() {
    if (!remapOverlayEl) {
      remapOverlayEl = document.createElement('div');
      remapOverlayEl.id = 'pg-doom64-remap-overlay';
      remapOverlayEl.style.cssText =
        'position:fixed;inset:0;z-index:99999;background:rgba(6,9,19,0.88);backdrop-filter:blur(6px);display:flex;align-items:center;justify-content:center;padding:16px;font-family:system-ui,-apple-system,Segoe UI,Roboto,sans-serif;color:#f8fafc;';
      document.body.appendChild(remapOverlayEl);
    }
    var sensPct = Math.round(mouseCfg.sensitivity * 100);
    var rowsHtml = REMAP_ROWS.map(function (r) {
      var isWait = waitingRemapAction === r.action;
      var btnText = isWait ? '⌨️ Bir Tuşa Bas...' : formatKeyLabel(userBinds[r.action]);
      var btnBg = isWait ? '#dc2626' : '#1e293b';
      var btnBorder = isWait ? '#f87171' : 'rgba(248,113,113,0.35)';
      return (
        '<div style="display:flex;align-items:center;justify-content:space-between;padding:5px 8px;border-bottom:1px solid rgba(148,163,184,0.12);font-size:13px;">' +
        '<span style="color:#e2e8f0;font-weight:600;">' +
        r.label +
        '</span>' +
        '<button type="button" data-remap-action="' +
        r.action +
        '" style="background:' +
        btnBg +
        ';color:#fff;border:1px solid ' +
        btnBorder +
        ';border-radius:6px;padding:4px 12px;font-size:12px;font-weight:700;cursor:pointer;min-width:130px;text-align:center;">' +
        btnText +
        '</button>' +
        '</div>'
      );
    }).join('');

    remapOverlayEl.innerHTML =
      '<div style="width:100%;max-width:520px;max-height:92vh;overflow-y:auto;background:#0f172a;border:1px solid rgba(239,68,68,0.55);border-radius:12px;box-shadow:0 20px 50px rgba(0,0,0,0.8);padding:16px 18px;">' +
      '<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;">' +
      '<strong style="font-size:16px;color:#fca5a5;">⌨️ DOOM 64 — Tuş &amp; Fare Ayarları</strong>' +
      '<button type="button" id="pg-remap-close" style="background:transparent;border:0;color:#94a3b8;font-size:18px;cursor:pointer;">✕</button>' +
      '</div>' +
      '<div style="background:rgba(15,23,42,0.9);border:1px solid rgba(248,113,113,0.25);border-radius:8px;padding:10px 12px;margin-bottom:10px;">' +
      '<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px;">' +
      '<span style="font-size:13px;font-weight:700;color:#fde68a;">🖱️ Fare ile Dönme &amp; Sol/Sağ Tık (FPS Modu)</span>' +
      '<button type="button" id="pg-remap-mouse-toggle" style="background:' +
      (mouseCfg.enabled ? '#16a34a' : '#334155') +
      ';color:#fff;border:0;border-radius:6px;padding:4px 12px;font-size:12px;font-weight:700;cursor:pointer;">' +
      (mouseCfg.enabled ? '✓ Açık (Oyun Ekranına Tıkla)' : 'Kapalı') +
      '</button>' +
      '</div>' +
      '<div style="display:flex;align-items:center;justify-content:space-between;gap:12px;">' +
      '<span style="font-size:12px;color:#cbd5e1;">Fare Dönüş Hassasiyeti: <b>%' +
      sensPct +
      '</b></span>' +
      '<input type="range" id="pg-remap-mouse-sens" min="30" max="250" step="5" value="' +
      sensPct +
      '" style="flex:1;accent-color:#ef4444;cursor:pointer;" />' +
      '</div>' +
      '</div>' +
      '<div style="margin-bottom:12px;">' +
      rowsHtml +
      '</div>' +
      '<div style="display:flex;align-items:center;justify-content:space-between;gap:10px;">' +
      '<button type="button" id="pg-remap-defaults" style="background:#334155;color:#e2e8f0;border:0;border-radius:8px;padding:8px 14px;font-size:12px;font-weight:700;cursor:pointer;">Varsayılanlara Sıfırla</button>' +
      '<button type="button" id="pg-remap-save" style="background:linear-gradient(135deg,#dc2626,#991b1b);color:#fff;border:0;border-radius:8px;padding:8px 18px;font-size:13px;font-weight:700;cursor:pointer;">✓ Kaydet &amp; Oyuna Dön</button>' +
      '</div>' +
      '</div>';

    remapOverlayEl.style.display = 'flex';

    remapOverlayEl.querySelectorAll('[data-remap-action]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        waitingRemapAction = btn.getAttribute('data-remap-action');
        renderRemapOverlay();
      });
    });

    var toggleBtn = document.getElementById('pg-remap-mouse-toggle');
    if (toggleBtn) {
      toggleBtn.addEventListener('click', function () {
        mouseCfg.enabled = !mouseCfg.enabled;
        try {
          localStorage.setItem(STORAGE_KEY_MOUSE, JSON.stringify(mouseCfg));
        } catch (_) {}
        renderRemapOverlay();
      });
    }

    var sensInput = document.getElementById('pg-remap-mouse-sens');
    if (sensInput) {
      sensInput.addEventListener('input', function () {
        mouseCfg.sensitivity = Math.max(0.3, Math.min(2.5, Number(sensInput.value || 100) / 100));
        try {
          localStorage.setItem(STORAGE_KEY_MOUSE, JSON.stringify(mouseCfg));
        } catch (_) {}
        renderRemapOverlay();
      });
    }

    var defBtn = document.getElementById('pg-remap-defaults');
    if (defBtn) {
      defBtn.addEventListener('click', function () {
        waitingRemapAction = null;
        userBinds = Object.assign({}, DEFAULT_USER_BINDS);
        mouseCfg.enabled = true;
        mouseCfg.sensitivity = 1.0;
        try {
          localStorage.removeItem(STORAGE_KEY_BINDS);
          localStorage.setItem(STORAGE_KEY_MOUSE, JSON.stringify(mouseCfg));
        } catch (_) {}
        renderRemapOverlay();
      });
    }

    var closeOverlay = function () {
      waitingRemapAction = null;
      if (remapOverlayEl) remapOverlayEl.style.display = 'none';
      window.focus();
    };
    document.getElementById('pg-remap-close')?.addEventListener('click', closeOverlay);
    document.getElementById('pg-remap-save')?.addEventListener('click', closeOverlay);
  }

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
        var cvs = document.getElementById('canvas');
        window.parent.postMessage(
          {
            type: 'doom64-emu-status',
            ready: !myApp.rivetsData.moduleInitializing,
            started: !myApp.rivetsData.beforeEmulatorStarted,
            fps: Number(myApp.rivetsData.currentFPS || 0),
            noLocalSave: Boolean(myApp.rivetsData.noLocalSave),
            audioRunning: Boolean(myApp.audioContext && myApp.audioContext.state === 'running'),
            pointerLocked: Boolean(cvs && document.pointerLockElement === cvs),
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
      releaseAllActions();
      myApp.reset?.();
      scheduleAutoStartIntoLevel1(5300);
    } else if (action === 'startGame') {
      wakeAudio();
      cancelAutoStart();
      // In N64 Doom 64, A ('q' / nextWeapon) selects menu items while Start only opens/closes pause menu
      tapCanonicalAction('nextWeapon', 170);
    } else if (action === 'openRemap') {
      releaseAllActions();
      try {
        if (document.pointerLockElement) document.exitPointerLock?.();
      } catch (_) {}
      waitingRemapAction = null;
      renderRemapOverlay();
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
    if (!data) return;
    if (data.type === 'doom64-cmd') {
      handleCommand(data.action, data);
    } else if (data.type === 'doom64-key') {
      handleUserKey(data.eventType, data.key, data.code);
    }
  });

  setInterval(function () {
    applyAudioMuteState();
    emitStatusToHost();
  }, 450);
})();
