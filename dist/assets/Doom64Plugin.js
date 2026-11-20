var T=Object.defineProperty;var A=(r,o,t)=>o in r?T(r,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[o]=t;var s=(r,o,t)=>A(r,typeof o!="symbol"?o+"":o,t);import{B as k,C as c,z as i}from"./app.js";var S;class D{constructor(o){s(this,"container",null);s(this,"desktopSupported",k());s(this,"runtimeState","checking");s(this,"runtimeProgressPct",0);s(this,"runtimeStatusText","Doom 64 motoru hazırlanıyor...");s(this,"runtimeError","");s(this,"emuEntryUrl",(S=window.desktopAPI)!=null&&S.isDesktopApp?"pgdoom://local/index.html":"./doom64-emu/index.html");s(this,"telemetry",{ready:!1,started:!1,fps:0,noLocalSave:!0,audioRunning:!1,romName:"game.z64"});s(this,"unsubRuntimeProgress",null);s(this,"messageBound",o=>this.handleEmuMessage(o));s(this,"destroyCalled",!1);this.host=o}mount(o){var t,n;if(this.container=o,this.destroyCalled=!1,this.desktopSupported=k(),window.addEventListener("message",this.messageBound),!this.desktopSupported){this.render();return}(n=(t=this.host).setExternalAudioActive)==null||n.call(t,!0),this.prepareDesktopRuntime(),this.render()}destroy(){var o,t;this.destroyCalled=!0,window.removeEventListener("message",this.messageBound),this.unsubRuntimeProgress&&(this.unsubRuntimeProgress(),this.unsubRuntimeProgress=null),(t=(o=this.host).setExternalAudioActive)==null||t.call(o,!1),this.container=null}pauseIfPlaying(){this.syncAudioToEmu()}handleBackNavigation(){return!1}syncStatsFromStorage(){this.syncAudioToEmu()}async prepareDesktopRuntime(){var o;if(!((o=window.desktopAPI)!=null&&o.getDoom64Environment)){this.runtimeState="ready",this.emuEntryUrl="./doom64-emu/index.html",this.destroyCalled||this.render();return}this.runtimeState="checking",this.runtimeError="",this.runtimeStatusText="Doom 64 masaüstü paketi kontrol ediliyor...";try{const t=await window.desktopAPI.getDoom64Environment();if(this.destroyCalled)return;if(t.ready){this.emuEntryUrl=t.entryUrl||"pgdoom://local/index.html",this.runtimeState="ready",this.render();return}if(!window.desktopAPI.ensureDoom64Runtime){this.runtimeState="ready",this.render();return}this.runtimeState="downloading",this.runtimeProgressPct=5,this.runtimeStatusText="Doom 64 N64Wasm paketi indiriliyor...",this.render(),this.unsubRuntimeProgress&&(this.unsubRuntimeProgress(),this.unsubRuntimeProgress=null),window.desktopAPI.onDoom64RuntimeProgress&&(this.unsubRuntimeProgress=window.desktopAPI.onDoom64RuntimeProgress(e=>{this.runtimeProgressPct=Math.max(0,Math.min(100,Number(e.percent||0))),this.runtimeStatusText=String(e.statusText||"İndiriliyor..."),this.updateLoaderDom()}));const n=await window.desktopAPI.ensureDoom64Runtime();if(this.destroyCalled)return;n!=null&&n.ok?(this.emuEntryUrl=n.entryUrl||"pgdoom://local/index.html",this.runtimeState="ready"):(this.runtimeState="error",this.runtimeError=(n==null?void 0:n.error)||"Doom 64 paketi indirilemedi."),this.render()}catch(t){if(this.destroyCalled)return;this.runtimeState="error",this.runtimeError=t instanceof Error?t.message:String(t),this.render()}}sendEmuCommand(o,t){const n=document.getElementById("doom64-emu-frame"),e=n==null?void 0:n.contentWindow;e&&e.postMessage({type:"doom64-cmd",action:o,...t||{}},"*")}syncAudioToEmu(){var n,e;const t=!(((e=(n=this.host).getAudioSettings)==null?void 0:e.call(n))??{soundEnabled:!0}).soundEnabled;this.sendEmuCommand("setMuted",{muted:t})}handleEmuMessage(o){const t=document.getElementById("doom64-emu-frame");if(!t||o.source!==t.contentWindow)return;const n=o.data;!n||n.type!=="doom64-emu-status"||(this.telemetry={ready:!!n.ready,started:!!n.started,fps:Number(n.fps||0),noLocalSave:!!n.noLocalSave,audioRunning:!!n.audioRunning,romName:String(n.romName||"game.z64")},this.syncAudioToEmu(),this.updateTelemetryDom())}updateLoaderDom(){const o=document.getElementById("doom64-loader-fill"),t=document.getElementById("doom64-loader-text");o&&(o.style.width=`${this.runtimeProgressPct}%`),t&&(t.textContent=`${this.runtimeStatusText} (%${this.runtimeProgressPct})`)}updateTelemetryDom(){var l,m;const o=document.getElementById("doom64-emu-status"),t=document.getElementById("doom64-rom-pill"),n=document.getElementById("doom64-audio-pill"),e=document.getElementById("btn-doom64-load");if(o&&(this.telemetry.started?o.textContent=this.telemetry.fps>0?`🎮 Çalışıyor • ${this.telemetry.fps} FPS`:"🎮 Çalışıyor":this.telemetry.ready?o.textContent="⚡ ROM Başlatılıyor...":o.textContent="⏳ N64Wasm Yükleniyor..."),t&&(t.textContent=`📀 ${this.telemetry.romName}`),n){const u=((m=(l=this.host).getAudioSettings)==null?void 0:m.call(l))??{soundEnabled:!0};n.textContent=u.soundEnabled?this.telemetry.audioRunning?"🔊 Ses Aktif":"🔊 Sesi Açmak İçin Oyuna Tıkla":"🔇 Ses Kapalı"}e&&(e.disabled=!this.telemetry.started||this.telemetry.noLocalSave)}renderDockHTML(){var u,p,b,y,h,g;const o=((p=(u=this.host).getAudioSettings)==null?void 0:p.call(u))??{soundEnabled:!0},t=((y=(b=this.host).getSocialAttentionCount)==null?void 0:y.call(b))??0,n=c(this.host.getUsername()),e=String(this.host.getPilotTag()||"0000").replace(/^#+/,""),l=c(e?`#${e}`:""),m=!this.telemetry.started||this.telemetry.noLocalSave?"disabled":"";return`
      <aside class="doom64-dock" aria-label="Doom 64 Kontrol Paneli">
        <div class="dock-brand-card">
          <div class="doom64-dock-eyebrow">1000in1 • KASET #003</div>
          <div class="dock-game-title">🔥 DOOM 64</div>
          <div class="dock-player-row">
            <span>${n}${l}</span>
            <b>N64WASM</b>
          </div>
        </div>

        <nav class="dock-nav-group">
          <button type="button" class="dock-nav-btn active" id="btn-doom64-back-hub">🕹️ 1000in1 Konsola Dön</button>
          <button type="button" class="dock-nav-btn" id="btn-doom64-save">💾 Hızlı Kaydet (F5)</button>
          <button type="button" class="dock-nav-btn" id="btn-doom64-load" ${m}>📂 Kayıttan Yükle (F9)</button>
          <button type="button" class="dock-nav-btn" id="btn-doom64-reset">🔄 Sıfırla (Reset)</button>
          <button type="button" class="dock-nav-btn" id="btn-doom64-rom">📀 Özel .z64 ROM Seç</button>
          <button type="button" class="dock-nav-btn" id="btn-doom64-remap">⌨️ Tuş &amp; Fare Ayarı</button>
          <button type="button" class="dock-nav-btn" id="btn-doom64-fullscreen">⛶ Tam Ekran</button>
        </nav>

        <div class="doom64-dock-controls">
          <strong>🎮 Varsayılan Tuşlar</strong>
          <div><span>WASD / Oklar</span><span>Hareket &amp; Dön</span></div>
          <div><span>Space</span><span>Ateş Et</span></div>
          <div><span>E</span><span>Kapı / Kullan</span></div>
          <div><span>Shift</span><span>Koş</span></div>
          <div><span>Q / R</span><span>Önceki / Sonraki Silah</span></div>
          <div><span>M / Enter</span><span>Harita / Menü</span></div>
        </div>

        <nav class="dock-nav-group">
          <button type="button" class="dock-nav-btn" id="btn-doom64-social">
            💬 Sosyal &amp; Görevler ${t>0?`<span class="dock-pill-count">${t}</span>`:""}
          </button>
          <button type="button" class="dock-nav-btn" id="btn-doom64-profile">🪪 Ortak Profil</button>
          <button type="button" class="dock-nav-btn" id="btn-doom64-settings">⚙️ Ayarlar</button>
        </nav>

        <div class="dock-audio-bar">
          <button type="button" class="dock-audio-btn" id="btn-doom64-sound" style="grid-column:1 / -1;">
            ${o.soundEnabled?"🔊 Doom Sesi Açık":"🔇 Doom Sesi Kapalı"}
          </button>
        </div>
        ${(g=(h=this.host).canQuit)!=null&&g.call(h)?'<button type="button" class="dock-nav-btn danger" id="btn-doom64-quit">🚪 Çıkış</button>':""}
      </aside>
    `}renderStageHTML(){var n,e;if(!this.desktopSupported)return`
        <div class="doom64-desktop-only-box">
          <h2>🖥️ Masaüstüne Özel Kaset</h2>
          <p>Gerçek Doom 64 (N64Wasm) yalnızca masaüstü Windows / PC uygulamasında oynanabilir; mobil sürümde yer almaz.</p>
          <button type="button" class="doom64-play-btn" id="btn-doom64-mobile-back">🕹️ 1000in1 Odaya Dön</button>
        </div>
      `;const o=((e=(n=this.host).getAudioSettings)==null?void 0:e.call(n))??{soundEnabled:!0};let t="";return this.runtimeState==="ready"?t=`
        <iframe
          id="doom64-emu-frame"
          class="doom64-emu-frame"
          src="${c(this.emuEntryUrl)}"
          allow="autoplay; fullscreen; gamepad"
          title="Doom 64 WebAssembly Emulator"
        ></iframe>
      `:this.runtimeState==="error"?t=`
        <div class="doom64-loader-box" id="doom64-runtime-loader">
          <h3>⚠️ Doom 64 Başlatılamadı</h3>
          <p id="doom64-loader-text">${c(this.runtimeError||"Bilinmeyen hata")}</p>
          <button type="button" class="doom64-play-btn" id="btn-doom64-retry-download">🔄 Tekrar Dene</button>
        </div>
      `:t=`
        <div class="doom64-loader-box" id="doom64-runtime-loader">
          <h3>🔥 Doom 64 Yükleniyor</h3>
          <p id="doom64-loader-text">${c(this.runtimeStatusText)}</p>
          <div class="doom64-loader-track">
            <div class="doom64-loader-fill" id="doom64-loader-fill" style="width:${this.runtimeProgressPct}%;"></div>
          </div>
        </div>
      `,`
      <div class="doom64-play-wrap">
        <div class="doom64-play-topbar">
          <strong>🔥 DOOM 64 — Gerçek N64Wasm Sürümü</strong>
          <div class="doom64-emu-pills">
            <span class="doom64-info-chip" id="doom64-emu-status">⏳ N64Wasm Hazırlanıyor...</span>
            <span class="doom64-info-chip" id="doom64-rom-pill">📀 ${c(this.telemetry.romName)}</span>
            <span class="doom64-info-chip" id="doom64-audio-pill">
              ${o.soundEnabled?"🔊 Sesi Açmak İçin Oyuna Tıkla":"🔇 Ses Kapalı"}
            </span>
          </div>
        </div>

        <div class="doom64-viewport-box doom64-emu-box" id="doom64-viewport-box">
          ${t}
        </div>

        <div class="doom64-attribution-bar">
          <span>Motor: N64Wasm (MIT / ParaLLEl GPL-2.0) + DOOM64-RE Clean-Room (GPL-3.0) • Tüm doku/sprite/sesler sıfırdan sentezlenmiştir.</span>
        </div>
      </div>
    `}render(){var o,t,n,e;this.container&&(this.container.innerHTML=`
      <div class="doom64-screen" id="doom64-screen">
        ${((t=(o=this.host).renderTitlebar)==null?void 0:t.call(o))||""}
        <div class="doom64-workspace">
          ${this.desktopSupported?this.renderDockHTML():""}
          <main class="doom64-main">
            ${this.renderStageHTML()}
          </main>
        </div>
      </div>
    `,(e=(n=this.host).bindTitlebarEvents)==null||e.call(n),this.bindEvents(),this.updateTelemetryDom())}bindEvents(){var t,n,e,l,m,u,p,b,y,h,g,v,E,f;(t=document.getElementById("btn-doom64-back-hub"))==null||t.addEventListener("click",()=>this.host.onBackToHub()),(n=document.getElementById("btn-doom64-mobile-back"))==null||n.addEventListener("click",()=>this.host.onBackToHub()),(e=document.getElementById("btn-doom64-social"))==null||e.addEventListener("click",()=>this.host.onOpenSocialHub()),(l=document.getElementById("btn-doom64-profile"))==null||l.addEventListener("click",()=>{var a,d;return(d=(a=this.host).onOpenGlobalProfile)==null?void 0:d.call(a)}),(m=document.getElementById("btn-doom64-settings"))==null||m.addEventListener("click",()=>this.host.onOpenGlobalSettings()),(u=document.getElementById("btn-doom64-quit"))==null||u.addEventListener("click",()=>{var a,d;return(d=(a=this.host).onQuitApp)==null?void 0:d.call(a)}),(p=document.getElementById("btn-doom64-sound"))==null||p.addEventListener("click",()=>{var a,d;(d=(a=this.host).onToggleSound)==null||d.call(a),this.syncAudioToEmu()}),(b=document.getElementById("btn-doom64-save"))==null||b.addEventListener("click",()=>{this.sendEmuCommand("saveState"),this.sendEmuCommand("focus")}),(y=document.getElementById("btn-doom64-load"))==null||y.addEventListener("click",()=>{this.sendEmuCommand("loadState"),this.sendEmuCommand("focus")}),(h=document.getElementById("btn-doom64-reset"))==null||h.addEventListener("click",()=>{this.sendEmuCommand("reset"),this.sendEmuCommand("focus")}),(g=document.getElementById("btn-doom64-rom"))==null||g.addEventListener("click",()=>{this.sendEmuCommand("uploadRom")}),(v=document.getElementById("btn-doom64-remap"))==null||v.addEventListener("click",()=>{this.sendEmuCommand("openRemap")}),(E=document.getElementById("btn-doom64-fullscreen"))==null||E.addEventListener("click",()=>{this.sendEmuCommand("fullscreen")}),(f=document.getElementById("btn-doom64-retry-download"))==null||f.addEventListener("click",()=>{this.prepareDesktopRuntime()});const o=document.getElementById("doom64-emu-frame");o==null||o.addEventListener("load",()=>{this.syncAudioToEmu(),this.sendEmuCommand("focus")})}}class w{constructor(){s(this,"id","doom64");s(this,"title","Doom 64");s(this,"sceneTheme","hell-grid");s(this,"controller",null);s(this,"host",null)}mount(o,t){this.unmount(),this.host=t;const n={getUsername:()=>t.getUsername(),getPilotTag:()=>t.getPilotTag(),isBetaChannel:t.isBetaChannel,getCloudSynced:()=>{var e;return((e=t.getCloudSynced)==null?void 0:e.call(t))??!1},canQuit:()=>{var e;return((e=t.canQuit)==null?void 0:e.call(t))??!1},renderTitlebar:()=>{var e;return((e=t.renderTitlebar)==null?void 0:e.call(t))??""},bindTitlebarEvents:()=>{var e;return(e=t.bindTitlebarEvents)==null?void 0:e.call(t)},onBackToHub:()=>t.returnToHub(),onOpenGlobalSettings:()=>t.openGlobalSettings(),onOpenGlobalProfile:()=>{var e;return(e=t.openGlobalProfile)==null?void 0:e.call(t)},onOpenSocialHub:()=>t.openSocialHub({pauseActiveGame:!0}),getSocialAttentionCount:()=>{var e;return((e=t.getSocialAttentionCount)==null?void 0:e.call(t))??0},getAudioSettings:()=>{var e;return((e=t.getAudioSettings)==null?void 0:e.call(t))??{soundEnabled:i.soundEnabled,musicEnabled:i.musicEnabled}},onToggleSound:()=>{var e;return(e=t.toggleSound)==null?void 0:e.call(t)},onToggleMusic:()=>{var e;return(e=t.toggleMusic)==null?void 0:e.call(t)},setExternalAudioActive:e=>{i.setExternalAudioActive(e)},onQuitApp:()=>{var e;return(e=t.quitApp)==null?void 0:e.call(t)},playSfx:e=>{e==="win"?i.playVictory():e==="pickup"?i.playGalaxyComplete(1):e==="shotgun"?i.playDoomShotgun():e==="plasma"?i.playDoomPlasma():e==="boom"?i.playDoomExplosion():e==="door"?i.playDoomDoor():e==="hit"||e==="hurt"?i.playDoomHit():i.playConsoleButton()}};this.controller=new D(n),this.controller.mount(o),t.setAudioScene(this.sceneTheme)}unmount(){i.setExternalAudioActive(!1),this.controller&&(this.controller.destroy(),this.controller=null),this.host=null}refreshHostState(){var o,t;(o=this.controller)==null||o.syncStatsFromStorage(),(t=this.controller)==null||t.render()}onPauseForOverlay(){var o;(o=this.controller)==null||o.pauseIfPlaying()}handleBackNavigation(){return!this.controller||!this.host?!1:(this.controller.handleBackNavigation()||this.host.returnToHub(),!0)}}export{w as Doom64Plugin};
