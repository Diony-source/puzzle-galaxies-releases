var A=Object.defineProperty;var D=(b,n,e)=>n in b?A(b,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):b[n]=e;var r=(b,n,e)=>D(b,typeof n!="symbol"?n+"":n,e);import{B as k,C as v,z as c}from"./app.js";var w;class P{constructor(n){r(this,"container",null);r(this,"desktopSupported",k());r(this,"runtimeState","checking");r(this,"runtimeProgressPct",0);r(this,"runtimeStatusText","Doom 64 motoru hazırlanıyor...");r(this,"runtimeError","");r(this,"emuEntryUrl",(w=window.desktopAPI)!=null&&w.isDesktopApp?"pgdoom://local/index.html":"./doom64-emu/index.html");r(this,"useInMemoryIframe",!1);r(this,"inMemoryHtml","");r(this,"activeBlobUrls",[]);r(this,"telemetry",{ready:!1,started:!1,fps:0,noLocalSave:!0,audioRunning:!1,romName:"game.z64"});r(this,"unsubRuntimeProgress",null);r(this,"messageBound",n=>this.handleEmuMessage(n));r(this,"destroyCalled",!1);this.host=n}mount(n){var e,o;if(this.container=n,this.destroyCalled=!1,this.desktopSupported=k(),window.addEventListener("message",this.messageBound),!this.desktopSupported){this.render();return}(o=(e=this.host).setExternalAudioActive)==null||o.call(e,!0),this.prepareDesktopRuntime(),this.render()}destroy(){var n,e;this.destroyCalled=!0,window.removeEventListener("message",this.messageBound),this.unsubRuntimeProgress&&(this.unsubRuntimeProgress(),this.unsubRuntimeProgress=null),this.revokeActiveBlobs(),(e=(n=this.host).setExternalAudioActive)==null||e.call(n,!1),this.container=null}revokeActiveBlobs(){for(const n of this.activeBlobUrls)try{URL.revokeObjectURL(n)}catch{}this.activeBlobUrls=[]}pauseIfPlaying(){this.syncAudioToEmu()}handleBackNavigation(){return!1}syncStatsFromStorage(){this.syncAudioToEmu()}async prepareDesktopRuntime(){var n,e;if(!((n=window.desktopAPI)!=null&&n.getDoom64Environment)){if(!((e=window.desktopAPI)!=null&&e.isDesktopApp))try{if((await fetch("./doom64-emu/runtime-manifest.json",{cache:"no-store"})).ok){this.useInMemoryIframe=!1,this.emuEntryUrl="./doom64-emu/index.html",this.runtimeState="ready",this.destroyCalled||this.render();return}}catch{}await this.prepareOtaRendererRuntime();return}this.runtimeState="checking",this.runtimeError="",this.runtimeStatusText="Doom 64 masaüstü paketi kontrol ediliyor...";try{const o=await window.desktopAPI.getDoom64Environment();if(this.destroyCalled)return;if(o.ready){this.useInMemoryIframe=!1,this.emuEntryUrl=o.entryUrl||"pgdoom://local/index.html",this.runtimeState="ready",this.render();return}if(!window.desktopAPI.ensureDoom64Runtime){await this.prepareOtaRendererRuntime();return}this.runtimeState="downloading",this.runtimeProgressPct=5,this.runtimeStatusText="Doom 64 N64Wasm paketi indiriliyor...",this.render(),this.unsubRuntimeProgress&&(this.unsubRuntimeProgress(),this.unsubRuntimeProgress=null),window.desktopAPI.onDoom64RuntimeProgress&&(this.unsubRuntimeProgress=window.desktopAPI.onDoom64RuntimeProgress(s=>{this.runtimeProgressPct=Math.max(0,Math.min(100,Number(s.percent||0))),this.runtimeStatusText=String(s.statusText||"İndiriliyor..."),this.updateLoaderDom()}));const t=await window.desktopAPI.ensureDoom64Runtime();if(this.destroyCalled)return;t!=null&&t.ok?(this.useInMemoryIframe=!1,this.emuEntryUrl=t.entryUrl||"pgdoom://local/index.html",this.runtimeState="ready",this.render()):await this.prepareOtaRendererRuntime()}catch{if(this.destroyCalled)return;await this.prepareOtaRendererRuntime()}}openRuntimeCacheDb(){return new Promise((n,e)=>{const o=indexedDB.open("PG_DOOM64_RUNTIME_CACHE_V1",1);o.onupgradeneeded=()=>{const t=o.result;t.objectStoreNames.contains("files")||t.createObjectStore("files")},o.onsuccess=()=>n(o.result),o.onerror=()=>e(o.error||new Error("IndexedDB açılamadı"))})}idbGetFile(n,e){return new Promise(o=>{try{const s=n.transaction("files","readonly").objectStore("files").get(e);s.onsuccess=()=>{const i=s.result;i instanceof Uint8Array?o(i):i instanceof ArrayBuffer?o(new Uint8Array(i)):o(null)},s.onerror=()=>o(null)}catch{o(null)}})}idbPutFile(n,e,o){return new Promise((t,s)=>{try{const i=n.transaction("files","readwrite");i.objectStore("files").put(o,e),i.oncomplete=()=>t(),i.onerror=()=>s(i.error||new Error("Önbellek yazılamadı"))}catch(i){s(i)}})}async sha256Hex(n){const e=new Uint8Array(n.byteLength);e.set(n);const o=await crypto.subtle.digest("SHA-256",e.buffer);return Array.from(new Uint8Array(o)).map(t=>t.toString(16).padStart(2,"0")).join("")}async prepareOtaRendererRuntime(){this.runtimeState="checking",this.runtimeError="",this.runtimeProgressPct=4,this.runtimeStatusText="Doom 64 yerel önbelleği kontrol ediliyor...",this.render();const n="https://raw.githubusercontent.com/Diony-source/puzzle-galaxies-releases/beta/desktop-assets/doom64-emu";try{const e=await this.openRuntimeCacheDb();let o=null;const t=await this.idbGetFile(e,"runtime-manifest.json");if(t)try{o=JSON.parse(new TextDecoder().decode(t))}catch{o=null}const s=new Map;let i=!o||!Array.isArray(o.files)||o.files.length===0;if(!i&&(o!=null&&o.files))for(const a of o.files){if(a==="THIRD_PARTY.md")continue;const m=await this.idbGetFile(e,a);if(!m||m.byteLength===0){i=!0;break}s.set(a,m)}if(i){this.runtimeState="downloading",this.runtimeProgressPct=6,this.runtimeStatusText="Doom 64 N64Wasm manifesti indiriliyor...",this.render();const a=await fetch(`${n}/runtime-manifest.json?t=${Date.now()}`,{cache:"no-store"});if(!a.ok)throw new Error(`Doom 64 manifesti indirilemedi (HTTP ${a.status})`);const m=new Uint8Array(await a.arrayBuffer());o=JSON.parse(new TextDecoder().decode(m));const h=Array.isArray(o==null?void 0:o.files)?o.files:[],y=(o==null?void 0:o.fileHashes)||{};if(h.length===0)throw new Error("Doom 64 paket listesi boş.");s.clear();for(let p=0;p<h.length;p++){if(this.destroyCalled){e.close();return}const d=String(h[p]||"");if(!d||d==="THIRD_PARTY.md")continue;const E=8+Math.round((p+1)/h.length*88);this.runtimeProgressPct=E,this.runtimeStatusText=`Doom 64 indiriliyor (${p+1}/${h.length}): ${d}`,this.updateLoaderDom();const f=y[d],g=await this.idbGetFile(e,d);if(g&&f&&await this.sha256Hex(g)===f){s.set(d,g);continue}const l=await fetch(`${n}/${d}?t=${Date.now()}`,{cache:"no-store"});if(!l.ok)throw new Error(`Dosya indirilemedi: ${d} (HTTP ${l.status})`);const u=new Uint8Array(await l.arrayBuffer());if(f&&await this.sha256Hex(u)!==f)throw new Error(`SHA-256 doğrulama hatası: ${d}`);await this.idbPutFile(e,d,u),s.set(d,u)}await this.idbPutFile(e,"runtime-manifest.json",m)}if(e.close(),this.destroyCalled)return;this.buildInMemoryEmulatorDocument(s),this.useInMemoryIframe=!0,this.runtimeState="ready",this.render()}catch(e){if(this.destroyCalled)return;this.runtimeState="error",this.runtimeError=e instanceof Error?e.message:String(e),this.render()}}buildInMemoryEmulatorDocument(n){this.revokeActiveBlobs();const e={};for(const[t,s]of n.entries())if(t.endsWith(".js")||t.endsWith(".css")){const i=t.endsWith(".css")?"text/css; charset=utf-8":"application/javascript; charset=utf-8",a=new Uint8Array(s.byteLength);a.set(s);const m=URL.createObjectURL(new Blob([a.buffer],{type:i}));this.activeBlobUrls.push(m),e[t]=m}window.__PG_DOOM64_PRELOADED__={blobUrls:e,wasmBinary:n.get("n64wasm.wasm"),assetsZip:n.get("assets.zip"),romZ64:n.get("game.z64")};const o=new TextDecoder().decode(n.get("index.html")||new Uint8Array);this.inMemoryHtml=o.replace(/\b(src|href)="([^"]+)"/g,(t,s,i)=>{const a=i.split("?")[0];return e[a]?`${s}="${e[a]}"`:t})}sendEmuCommand(n,e){const o=document.getElementById("doom64-emu-frame"),t=o==null?void 0:o.contentWindow;t&&t.postMessage({type:"doom64-cmd",action:n,...e||{}},"*")}syncAudioToEmu(){var o,t;const e=!(((t=(o=this.host).getAudioSettings)==null?void 0:t.call(o))??{soundEnabled:!0}).soundEnabled;this.sendEmuCommand("setMuted",{muted:e})}handleEmuMessage(n){const e=document.getElementById("doom64-emu-frame");if(!e||n.source!==e.contentWindow)return;const o=n.data;!o||o.type!=="doom64-emu-status"||(this.telemetry={ready:!!o.ready,started:!!o.started,fps:Number(o.fps||0),noLocalSave:!!o.noLocalSave,audioRunning:!!o.audioRunning,romName:String(o.romName||"game.z64")},this.syncAudioToEmu(),this.updateTelemetryDom())}updateLoaderDom(){const n=document.getElementById("doom64-loader-fill"),e=document.getElementById("doom64-loader-text");n&&(n.style.width=`${this.runtimeProgressPct}%`),e&&(e.textContent=`${this.runtimeStatusText} (%${this.runtimeProgressPct})`)}updateTelemetryDom(){var s,i;const n=document.getElementById("doom64-emu-status"),e=document.getElementById("doom64-rom-pill"),o=document.getElementById("doom64-audio-pill"),t=document.getElementById("btn-doom64-load");if(n&&(this.telemetry.started?n.textContent=this.telemetry.fps>0?`🎮 Çalışıyor • ${this.telemetry.fps} FPS`:"🎮 Çalışıyor":this.telemetry.ready?n.textContent="⚡ ROM Başlatılıyor...":n.textContent="⏳ N64Wasm Yükleniyor..."),e&&(e.textContent=`📀 ${this.telemetry.romName}`),o){const a=((i=(s=this.host).getAudioSettings)==null?void 0:i.call(s))??{soundEnabled:!0};o.textContent=a.soundEnabled?this.telemetry.audioRunning?"🔊 Ses Aktif":"🔊 Sesi Açmak İçin Oyuna Tıkla":"🔇 Ses Kapalı"}t&&(t.disabled=!this.telemetry.started||this.telemetry.noLocalSave)}renderDockHTML(){var a,m,h,y,p,d;const n=((m=(a=this.host).getAudioSettings)==null?void 0:m.call(a))??{soundEnabled:!0},e=((y=(h=this.host).getSocialAttentionCount)==null?void 0:y.call(h))??0,o=v(this.host.getUsername()),t=String(this.host.getPilotTag()||"0000").replace(/^#+/,""),s=v(t?`#${t}`:""),i=!this.telemetry.started||this.telemetry.noLocalSave?"disabled":"";return`
      <aside class="doom64-dock" aria-label="Doom 64 Kontrol Paneli">
        <div class="dock-brand-card">
          <div class="doom64-dock-eyebrow">1000in1 • KASET #003</div>
          <div class="dock-game-title">🔥 DOOM 64</div>
          <div class="dock-player-row">
            <span>${o}${s}</span>
            <b>N64WASM</b>
          </div>
        </div>

        <nav class="dock-nav-group">
          <button type="button" class="dock-nav-btn active" id="btn-doom64-back-hub">🕹️ 1000in1 Konsola Dön</button>
          <button type="button" class="dock-nav-btn" id="btn-doom64-save">💾 Hızlı Kaydet (F5)</button>
          <button type="button" class="dock-nav-btn" id="btn-doom64-load" ${i}>📂 Kayıttan Yükle (F9)</button>
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
            💬 Sosyal &amp; Görevler ${e>0?`<span class="dock-pill-count">${e}</span>`:""}
          </button>
          <button type="button" class="dock-nav-btn" id="btn-doom64-profile">🪪 Ortak Profil</button>
          <button type="button" class="dock-nav-btn" id="btn-doom64-settings">⚙️ Ayarlar</button>
        </nav>

        <div class="dock-audio-bar">
          <button type="button" class="dock-audio-btn" id="btn-doom64-sound" style="grid-column:1 / -1;">
            ${n.soundEnabled?"🔊 Doom Sesi Açık":"🔇 Doom Sesi Kapalı"}
          </button>
        </div>
        ${(d=(p=this.host).canQuit)!=null&&d.call(p)?'<button type="button" class="dock-nav-btn danger" id="btn-doom64-quit">🚪 Çıkış</button>':""}
      </aside>
    `}renderStageHTML(){var o,t;if(!this.desktopSupported)return`
        <div class="doom64-desktop-only-box">
          <h2>🖥️ Masaüstüne Özel Kaset</h2>
          <p>Gerçek Doom 64 (N64Wasm) yalnızca masaüstü Windows / PC uygulamasında oynanabilir; mobil sürümde yer almaz.</p>
          <button type="button" class="doom64-play-btn" id="btn-doom64-mobile-back">🕹️ 1000in1 Odaya Dön</button>
        </div>
      `;const n=((t=(o=this.host).getAudioSettings)==null?void 0:t.call(o))??{soundEnabled:!0};let e="";return this.runtimeState==="ready"?e=`
        <iframe
          id="doom64-emu-frame"
          class="doom64-emu-frame"
          ${this.useInMemoryIframe?"":`src="${v(this.emuEntryUrl)}"`}
          allow="autoplay; fullscreen; gamepad"
          title="Doom 64 WebAssembly Emulator"
        ></iframe>
      `:this.runtimeState==="error"?e=`
        <div class="doom64-loader-box" id="doom64-runtime-loader">
          <h3>⚠️ Doom 64 Başlatılamadı</h3>
          <p id="doom64-loader-text">${v(this.runtimeError||"Bilinmeyen hata")}</p>
          <button type="button" class="doom64-play-btn" id="btn-doom64-retry-download">🔄 Tekrar Dene</button>
        </div>
      `:e=`
        <div class="doom64-loader-box" id="doom64-runtime-loader">
          <h3>🔥 Doom 64 Yükleniyor</h3>
          <p id="doom64-loader-text">${v(this.runtimeStatusText)}</p>
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
            <span class="doom64-info-chip" id="doom64-rom-pill">📀 ${v(this.telemetry.romName)}</span>
            <span class="doom64-info-chip" id="doom64-audio-pill">
              ${n.soundEnabled?"🔊 Sesi Açmak İçin Oyuna Tıkla":"🔇 Ses Kapalı"}
            </span>
          </div>
        </div>

        <div class="doom64-viewport-box doom64-emu-box" id="doom64-viewport-box">
          ${e}
        </div>

        <div class="doom64-attribution-bar">
          <span>Motor: N64Wasm (MIT / ParaLLEl GPL-2.0) + DOOM64-RE Clean-Room (GPL-3.0) • Tüm doku/sprite/sesler sıfırdan sentezlenmiştir.</span>
        </div>
      </div>
    `}render(){var n,e,o,t;this.container&&(this.container.innerHTML=`
      <div class="doom64-screen" id="doom64-screen">
        ${((e=(n=this.host).renderTitlebar)==null?void 0:e.call(n))||""}
        <div class="doom64-workspace">
          ${this.desktopSupported?this.renderDockHTML():""}
          <main class="doom64-main">
            ${this.renderStageHTML()}
          </main>
        </div>
      </div>
    `,(t=(o=this.host).bindTitlebarEvents)==null||t.call(o),this.bindEvents(),this.updateTelemetryDom())}bindEvents(){var e,o,t,s,i,a,m,h,y,p,d,E,f,g;(e=document.getElementById("btn-doom64-back-hub"))==null||e.addEventListener("click",()=>this.host.onBackToHub()),(o=document.getElementById("btn-doom64-mobile-back"))==null||o.addEventListener("click",()=>this.host.onBackToHub()),(t=document.getElementById("btn-doom64-social"))==null||t.addEventListener("click",()=>this.host.onOpenSocialHub()),(s=document.getElementById("btn-doom64-profile"))==null||s.addEventListener("click",()=>{var l,u;return(u=(l=this.host).onOpenGlobalProfile)==null?void 0:u.call(l)}),(i=document.getElementById("btn-doom64-settings"))==null||i.addEventListener("click",()=>this.host.onOpenGlobalSettings()),(a=document.getElementById("btn-doom64-quit"))==null||a.addEventListener("click",()=>{var l,u;return(u=(l=this.host).onQuitApp)==null?void 0:u.call(l)}),(m=document.getElementById("btn-doom64-sound"))==null||m.addEventListener("click",()=>{var l,u;(u=(l=this.host).onToggleSound)==null||u.call(l),this.syncAudioToEmu()}),(h=document.getElementById("btn-doom64-save"))==null||h.addEventListener("click",()=>{this.sendEmuCommand("saveState"),this.sendEmuCommand("focus")}),(y=document.getElementById("btn-doom64-load"))==null||y.addEventListener("click",()=>{this.sendEmuCommand("loadState"),this.sendEmuCommand("focus")}),(p=document.getElementById("btn-doom64-reset"))==null||p.addEventListener("click",()=>{this.sendEmuCommand("reset"),this.sendEmuCommand("focus")}),(d=document.getElementById("btn-doom64-rom"))==null||d.addEventListener("click",()=>{this.sendEmuCommand("uploadRom")}),(E=document.getElementById("btn-doom64-remap"))==null||E.addEventListener("click",()=>{this.sendEmuCommand("openRemap")}),(f=document.getElementById("btn-doom64-fullscreen"))==null||f.addEventListener("click",()=>{this.sendEmuCommand("fullscreen")}),(g=document.getElementById("btn-doom64-retry-download"))==null||g.addEventListener("click",()=>{this.prepareDesktopRuntime()});const n=document.getElementById("doom64-emu-frame");if(n&&this.useInMemoryIframe&&this.inMemoryHtml){const l=n.contentDocument;l&&(l.open(),l.write(this.inMemoryHtml),l.close()),setTimeout(()=>{this.syncAudioToEmu(),this.sendEmuCommand("focus")},250)}n==null||n.addEventListener("load",()=>{this.syncAudioToEmu(),this.sendEmuCommand("focus")})}}class x{constructor(){r(this,"id","doom64");r(this,"title","Doom 64");r(this,"sceneTheme","hell-grid");r(this,"controller",null);r(this,"host",null)}mount(n,e){this.unmount(),this.host=e;const o={getUsername:()=>e.getUsername(),getPilotTag:()=>e.getPilotTag(),isBetaChannel:e.isBetaChannel,getCloudSynced:()=>{var t;return((t=e.getCloudSynced)==null?void 0:t.call(e))??!1},canQuit:()=>{var t;return((t=e.canQuit)==null?void 0:t.call(e))??!1},renderTitlebar:()=>{var t;return((t=e.renderTitlebar)==null?void 0:t.call(e))??""},bindTitlebarEvents:()=>{var t;return(t=e.bindTitlebarEvents)==null?void 0:t.call(e)},onBackToHub:()=>e.returnToHub(),onOpenGlobalSettings:()=>e.openGlobalSettings(),onOpenGlobalProfile:()=>{var t;return(t=e.openGlobalProfile)==null?void 0:t.call(e)},onOpenSocialHub:()=>e.openSocialHub({pauseActiveGame:!0}),getSocialAttentionCount:()=>{var t;return((t=e.getSocialAttentionCount)==null?void 0:t.call(e))??0},getAudioSettings:()=>{var t;return((t=e.getAudioSettings)==null?void 0:t.call(e))??{soundEnabled:c.soundEnabled,musicEnabled:c.musicEnabled}},onToggleSound:()=>{var t;return(t=e.toggleSound)==null?void 0:t.call(e)},onToggleMusic:()=>{var t;return(t=e.toggleMusic)==null?void 0:t.call(e)},setExternalAudioActive:t=>{c.setExternalAudioActive(t)},onQuitApp:()=>{var t;return(t=e.quitApp)==null?void 0:t.call(e)},playSfx:t=>{t==="win"?c.playVictory():t==="pickup"?c.playGalaxyComplete(1):t==="shotgun"?c.playDoomShotgun():t==="plasma"?c.playDoomPlasma():t==="boom"?c.playDoomExplosion():t==="door"?c.playDoomDoor():t==="hit"||t==="hurt"?c.playDoomHit():c.playConsoleButton()}};this.controller=new P(o),this.controller.mount(n),e.setAudioScene(this.sceneTheme)}unmount(){c.setExternalAudioActive(!1),this.controller&&(this.controller.destroy(),this.controller=null),this.host=null}refreshHostState(){var n,e;(n=this.controller)==null||n.syncStatsFromStorage(),(e=this.controller)==null||e.render()}onPauseForOverlay(){var n;(n=this.controller)==null||n.pauseIfPlaying()}handleBackNavigation(){return!this.controller||!this.host?!1:(this.controller.handleBackNavigation()||this.host.returnToHub(),!0)}}export{x as Doom64Plugin};
