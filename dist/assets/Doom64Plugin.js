var B=Object.defineProperty;var P=(f,n,e)=>n in f?B(f,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):f[n]=e;var u=(f,n,e)=>P(f,typeof n!="symbol"?n+"":n,e);import{B as D,C as v,z as p}from"./app.js";var A;class x{constructor(n){u(this,"container",null);u(this,"desktopSupported",D());u(this,"runtimeState","checking");u(this,"runtimeProgressPct",0);u(this,"runtimeStatusText","Doom 64 motoru hazırlanıyor...");u(this,"runtimeError","");u(this,"emuEntryUrl",(A=window.desktopAPI)!=null&&A.isDesktopApp?"pgdoom://local/index.html":"./doom64-emu/index.html");u(this,"useInMemoryIframe",!1);u(this,"inMemoryHtml","");u(this,"activeBlobUrls",[]);u(this,"telemetry",{ready:!1,started:!1,fps:0,noLocalSave:!0,audioRunning:!1,romName:"game.z64"});u(this,"unsubRuntimeProgress",null);u(this,"messageBound",n=>this.handleEmuMessage(n));u(this,"keyDownBound",n=>this.handleParentKey(n,"keydown"));u(this,"keyUpBound",n=>this.handleParentKey(n,"keyup"));u(this,"destroyCalled",!1);this.host=n}mount(n){var e,o;if(this.container=n,this.destroyCalled=!1,this.desktopSupported=D(),window.addEventListener("message",this.messageBound),window.addEventListener("keydown",this.keyDownBound,!0),window.addEventListener("keyup",this.keyUpBound,!0),!this.desktopSupported){this.render();return}(o=(e=this.host).setExternalAudioActive)==null||o.call(e,!0),this.prepareDesktopRuntime(),this.render()}destroy(){var n,e;this.destroyCalled=!0,window.removeEventListener("message",this.messageBound),window.removeEventListener("keydown",this.keyDownBound,!0),window.removeEventListener("keyup",this.keyUpBound,!0),this.unsubRuntimeProgress&&(this.unsubRuntimeProgress(),this.unsubRuntimeProgress=null),this.revokeActiveBlobs(),(e=(n=this.host).setExternalAudioActive)==null||e.call(n,!1),this.container=null}handleParentKey(n,e){var r,c,h,m,l;if(!this.desktopSupported||this.runtimeState!=="ready")return;const o=document.getElementById("modal-root");if((r=o==null?void 0:o.dataset)!=null&&r.openModal)return;const t=((c=document.activeElement)==null?void 0:c.tagName)||"";if(t==="INPUT"||t==="TEXTAREA"||t==="SELECT")return;if(e==="keydown"){if(n.key==="F5"){n.preventDefault(),this.sendEmuCommand("saveState");return}if(n.key==="F9"){n.preventDefault(),this.sendEmuCommand("loadState");return}}(n.key===" "||n.key==="Enter"||n.key==="Tab"||n.key.startsWith("Arrow"))&&(t==="BUTTON"&&((m=(h=document.activeElement)==null?void 0:h.blur)==null||m.call(h)),n.preventDefault());const i=document.getElementById("doom64-emu-frame");(l=i==null?void 0:i.contentWindow)==null||l.postMessage({type:"doom64-key",eventType:e,key:n.key,code:n.code},"*")}revokeActiveBlobs(){for(const n of this.activeBlobUrls)try{URL.revokeObjectURL(n)}catch{}this.activeBlobUrls=[]}pauseIfPlaying(){this.syncAudioToEmu()}handleBackNavigation(){return!1}syncStatsFromStorage(){this.syncAudioToEmu()}async prepareDesktopRuntime(){var n,e;if(!((n=window.desktopAPI)!=null&&n.getDoom64Environment)){if(!((e=window.desktopAPI)!=null&&e.isDesktopApp))try{if((await fetch("./doom64-emu/runtime-manifest.json",{cache:"no-store"})).ok){this.useInMemoryIframe=!1,this.emuEntryUrl="./doom64-emu/index.html",this.runtimeState="ready",this.destroyCalled||this.render();return}}catch{}await this.prepareOtaRendererRuntime();return}this.runtimeState="checking",this.runtimeError="",this.runtimeStatusText="Doom 64 masaüstü paketi kontrol ediliyor...";try{const o=await window.desktopAPI.getDoom64Environment();if(this.destroyCalled)return;if(o.ready){this.useInMemoryIframe=!1,this.emuEntryUrl=o.entryUrl||"pgdoom://local/index.html",this.runtimeState="ready",this.render();return}if(!window.desktopAPI.ensureDoom64Runtime){await this.prepareOtaRendererRuntime();return}this.runtimeState="downloading",this.runtimeProgressPct=5,this.runtimeStatusText="Doom 64 N64Wasm paketi indiriliyor...",this.render(),this.unsubRuntimeProgress&&(this.unsubRuntimeProgress(),this.unsubRuntimeProgress=null),window.desktopAPI.onDoom64RuntimeProgress&&(this.unsubRuntimeProgress=window.desktopAPI.onDoom64RuntimeProgress(i=>{this.runtimeProgressPct=Math.max(0,Math.min(100,Number(i.percent||0))),this.runtimeStatusText=String(i.statusText||"İndiriliyor..."),this.updateLoaderDom()}));const t=await window.desktopAPI.ensureDoom64Runtime();if(this.destroyCalled)return;t!=null&&t.ok?(this.useInMemoryIframe=!1,this.emuEntryUrl=t.entryUrl||"pgdoom://local/index.html",this.runtimeState="ready",this.render()):await this.prepareOtaRendererRuntime()}catch{if(this.destroyCalled)return;await this.prepareOtaRendererRuntime()}}openRuntimeCacheDb(){return new Promise((n,e)=>{const o=indexedDB.open("PG_DOOM64_RUNTIME_CACHE_V1",1);o.onupgradeneeded=()=>{const t=o.result;t.objectStoreNames.contains("files")||t.createObjectStore("files")},o.onsuccess=()=>n(o.result),o.onerror=()=>e(o.error||new Error("IndexedDB açılamadı"))})}idbGetFile(n,e){return new Promise(o=>{try{const i=n.transaction("files","readonly").objectStore("files").get(e);i.onsuccess=()=>{const r=i.result;r instanceof Uint8Array?o(r):r instanceof ArrayBuffer?o(new Uint8Array(r)):o(null)},i.onerror=()=>o(null)}catch{o(null)}})}idbPutFile(n,e,o){return new Promise((t,i)=>{try{const r=n.transaction("files","readwrite");r.objectStore("files").put(o,e),r.oncomplete=()=>t(),r.onerror=()=>i(r.error||new Error("Önbellek yazılamadı"))}catch(r){i(r)}})}async sha256Hex(n){const e=new Uint8Array(n.byteLength);e.set(n);const o=await crypto.subtle.digest("SHA-256",e.buffer);return Array.from(new Uint8Array(o)).map(t=>t.toString(16).padStart(2,"0")).join("")}async matchesRuntimeHash(n,e,o){if(await this.sha256Hex(e)===o)return!0;if(/\.(html|js|css|md|json)$/i.test(n)){const t=new TextDecoder().decode(e),i=new TextEncoder().encode(t.replace(/\r\n/g,`
`));if(await this.sha256Hex(i)===o)return!0;const r=new TextEncoder().encode(t.replace(/\r\n/g,`
`).replace(/\n/g,`\r
`));if(await this.sha256Hex(r)===o)return!0}return!1}async prepareOtaRendererRuntime(){this.runtimeState="checking",this.runtimeError="",this.runtimeProgressPct=4,this.runtimeStatusText="Doom 64 yerel önbelleği kontrol ediliyor...",this.render();const n="https://raw.githubusercontent.com/Diony-source/puzzle-galaxies-releases/beta/desktop-assets/doom64-emu";try{const e=await this.openRuntimeCacheDb();let o=null,t=null;try{const m=await fetch(`${n}/runtime-manifest.json?t=${Date.now()}`,{cache:"no-store"});m.ok&&(t=new Uint8Array(await m.arrayBuffer()),o=JSON.parse(new TextDecoder().decode(t)))}catch{}if(!o){const m=await this.idbGetFile(e,"runtime-manifest.json");if(m)try{t=m,o=JSON.parse(new TextDecoder().decode(m))}catch{o=null}}const i=Array.isArray(o==null?void 0:o.files)?o.files:[],r=(o==null?void 0:o.fileHashes)||{};if(i.length===0)throw new Error("Doom 64 paket listesi indirilemedi.");const c=new Map;let h=!1;for(let m=0;m<i.length;m++){if(this.destroyCalled){e.close();return}const l=String(i[m]||"");if(!l||l==="THIRD_PARTY.md")continue;const y=r[l],b=await this.idbGetFile(e,l);if(b&&b.byteLength>0&&(!y||await this.matchesRuntimeHash(l,b,y))){c.set(l,b);continue}h||(h=!0,this.runtimeState="downloading",this.render());const k=8+Math.round((m+1)/i.length*88);this.runtimeProgressPct=k,this.runtimeStatusText=`Doom 64 indiriliyor (${m+1}/${i.length}): ${l}`,this.updateLoaderDom();const g=await fetch(`${n}/${l}?t=${Date.now()}`,{cache:"no-store"});if(!g.ok)throw new Error(`Dosya indirilemedi: ${l} (HTTP ${g.status})`);const E=new Uint8Array(await g.arrayBuffer());if(y&&!await this.matchesRuntimeHash(l,E,y))throw new Error(`SHA-256 doğrulama hatası: ${l}`);await this.idbPutFile(e,l,E),c.set(l,E)}if(t&&await this.idbPutFile(e,"runtime-manifest.json",t),e.close(),this.destroyCalled)return;this.buildInMemoryEmulatorDocument(c),this.useInMemoryIframe=!0,this.runtimeState="ready",this.render()}catch(e){if(this.destroyCalled)return;this.runtimeState="error",this.runtimeError=e instanceof Error?e.message:String(e),this.render()}}buildInMemoryEmulatorDocument(n){this.revokeActiveBlobs();const e={};for(const[t,i]of n.entries())if(t.endsWith(".js")||t.endsWith(".css")){const r=t.endsWith(".css")?"text/css; charset=utf-8":"application/javascript; charset=utf-8",c=new Uint8Array(i.byteLength);c.set(i);const h=URL.createObjectURL(new Blob([c.buffer],{type:r}));this.activeBlobUrls.push(h),e[t]=h}window.__PG_DOOM64_PRELOADED__={blobUrls:e,wasmBinary:n.get("n64wasm.wasm"),assetsZip:n.get("assets.zip"),romZ64:n.get("game.z64")};const o=new TextDecoder().decode(n.get("index.html")||new Uint8Array);this.inMemoryHtml=o.replace(/\b(src|href)="([^"]+)"/g,(t,i,r)=>{const c=r.split("?")[0];return e[c]?`${i}="${e[c]}"`:t})}sendEmuCommand(n,e){const o=document.getElementById("doom64-emu-frame"),t=o==null?void 0:o.contentWindow;t&&t.postMessage({type:"doom64-cmd",action:n,...e||{}},"*")}syncAudioToEmu(){var o,t;const e=!(((t=(o=this.host).getAudioSettings)==null?void 0:t.call(o))??{soundEnabled:!0}).soundEnabled;this.sendEmuCommand("setMuted",{muted:e})}handleEmuMessage(n){const e=document.getElementById("doom64-emu-frame");if(!e||n.source!==e.contentWindow)return;const o=n.data;!o||o.type!=="doom64-emu-status"||(this.telemetry={ready:!!o.ready,started:!!o.started,fps:Number(o.fps||0),noLocalSave:!!o.noLocalSave,audioRunning:!!o.audioRunning,romName:String(o.romName||"game.z64")},this.syncAudioToEmu(),this.updateTelemetryDom())}updateLoaderDom(){const n=document.getElementById("doom64-loader-fill"),e=document.getElementById("doom64-loader-text");n&&(n.style.width=`${this.runtimeProgressPct}%`),e&&(e.textContent=`${this.runtimeStatusText} (%${this.runtimeProgressPct})`)}updateTelemetryDom(){var i,r;const n=document.getElementById("doom64-emu-status"),e=document.getElementById("doom64-rom-pill"),o=document.getElementById("doom64-audio-pill"),t=document.getElementById("btn-doom64-load");if(n&&(this.telemetry.started?n.textContent=this.telemetry.fps>0?`🎮 Çalışıyor • ${this.telemetry.fps} FPS`:"🎮 Çalışıyor":this.telemetry.ready?n.textContent="⚡ ROM Başlatılıyor...":n.textContent="⏳ N64Wasm Yükleniyor..."),e&&(e.textContent=`📀 ${this.telemetry.romName}`),o){const c=((r=(i=this.host).getAudioSettings)==null?void 0:r.call(i))??{soundEnabled:!0};o.textContent=c.soundEnabled?this.telemetry.audioRunning?"🔊 Ses Aktif":"🔊 Sesi Açmak İçin Oyuna Tıkla":"🔇 Ses Kapalı"}t&&(t.disabled=!this.telemetry.started||this.telemetry.noLocalSave)}renderDockHTML(){var c,h,m,l,y,b;const n=((h=(c=this.host).getAudioSettings)==null?void 0:h.call(c))??{soundEnabled:!0},e=((l=(m=this.host).getSocialAttentionCount)==null?void 0:l.call(m))??0,o=v(this.host.getUsername()),t=String(this.host.getPilotTag()||"0000").replace(/^#+/,""),i=v(t?`#${t}`:""),r=!this.telemetry.started||this.telemetry.noLocalSave?"disabled":"";return`
      <aside class="doom64-dock" aria-label="Doom 64 Kontrol Paneli">
        <div class="dock-brand-card">
          <div class="doom64-dock-eyebrow">1000in1 • KASET #003</div>
          <div class="dock-game-title">🔥 DOOM 64</div>
          <div class="dock-player-row">
            <span>${o}${i}</span>
            <b>N64WASM</b>
          </div>
        </div>

        <nav class="dock-nav-group">
          <button type="button" class="dock-nav-btn active" id="btn-doom64-back-hub">🕹️ 1000in1 Konsola Dön</button>
          <button type="button" class="dock-nav-btn" id="btn-doom64-start">▶️ Başlat / Menü Seç (Enter)</button>
          <button type="button" class="dock-nav-btn" id="btn-doom64-save">💾 Hızlı Kaydet (F5)</button>
          <button type="button" class="dock-nav-btn" id="btn-doom64-load" ${r}>📂 Kayıttan Yükle (F9)</button>
          <button type="button" class="dock-nav-btn" id="btn-doom64-reset">🔄 Sıfırla (Reset)</button>
          <button type="button" class="dock-nav-btn" id="btn-doom64-rom">📀 Özel .z64 ROM Seç</button>
          <button type="button" class="dock-nav-btn" id="btn-doom64-remap">⌨️ Tuş &amp; Fare Ayarı</button>
          <button type="button" class="dock-nav-btn" id="btn-doom64-fullscreen">⛶ Tam Ekran</button>
        </nav>

        <div class="doom64-dock-controls">
          <strong>🎮 Tuş &amp; Fare Kontrolleri</strong>
          <div><span>Fare (Ekrana Tıkla)</span><span>Sağa/Sola Dön</span></div>
          <div><span>Sol Tık / Space</span><span>Ateş Et</span></div>
          <div><span>Sağ Tık / E</span><span>Kapı Aç / Kullan</span></div>
          <div><span>WASD / Oklar</span><span>İleri / Geri / Strafe</span></div>
          <div><span>Shift</span><span>Hızlı Koş</span></div>
          <div><span>Tekerlek / Q / R</span><span>Silah Değiştir</span></div>
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
        ${(b=(y=this.host).canQuit)!=null&&b.call(y)?'<button type="button" class="dock-nav-btn danger" id="btn-doom64-quit">🚪 Çıkış</button>':""}
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
    `,(t=(o=this.host).bindTitlebarEvents)==null||t.call(o),this.bindEvents(),this.updateTelemetryDom())}bindEvents(){var e,o,t,i,r,c,h,m,l,y,b,k,g,E,w;(e=document.getElementById("btn-doom64-back-hub"))==null||e.addEventListener("click",()=>this.host.onBackToHub()),(o=document.getElementById("btn-doom64-mobile-back"))==null||o.addEventListener("click",()=>this.host.onBackToHub()),(t=document.getElementById("btn-doom64-social"))==null||t.addEventListener("click",()=>this.host.onOpenSocialHub()),(i=document.getElementById("btn-doom64-profile"))==null||i.addEventListener("click",()=>{var a,s;return(s=(a=this.host).onOpenGlobalProfile)==null?void 0:s.call(a)}),(r=document.getElementById("btn-doom64-settings"))==null||r.addEventListener("click",()=>this.host.onOpenGlobalSettings()),(c=document.getElementById("btn-doom64-quit"))==null||c.addEventListener("click",()=>{var a,s;return(s=(a=this.host).onQuitApp)==null?void 0:s.call(a)}),(h=document.getElementById("btn-doom64-sound"))==null||h.addEventListener("click",a=>{var s,d,S,T;(d=(s=a.currentTarget)==null?void 0:s.blur)==null||d.call(s),(T=(S=this.host).onToggleSound)==null||T.call(S),this.syncAudioToEmu(),this.sendEmuCommand("focus")}),(m=document.getElementById("btn-doom64-start"))==null||m.addEventListener("click",a=>{var s,d;(d=(s=a.currentTarget)==null?void 0:s.blur)==null||d.call(s),this.sendEmuCommand("startGame"),this.sendEmuCommand("focus")}),(l=document.getElementById("btn-doom64-save"))==null||l.addEventListener("click",a=>{var s,d;(d=(s=a.currentTarget)==null?void 0:s.blur)==null||d.call(s),this.sendEmuCommand("saveState"),this.sendEmuCommand("focus")}),(y=document.getElementById("btn-doom64-load"))==null||y.addEventListener("click",a=>{var s,d;(d=(s=a.currentTarget)==null?void 0:s.blur)==null||d.call(s),this.sendEmuCommand("loadState"),this.sendEmuCommand("focus")}),(b=document.getElementById("btn-doom64-reset"))==null||b.addEventListener("click",a=>{var s,d;(d=(s=a.currentTarget)==null?void 0:s.blur)==null||d.call(s),this.sendEmuCommand("reset"),this.sendEmuCommand("focus")}),(k=document.getElementById("btn-doom64-rom"))==null||k.addEventListener("click",a=>{var s,d;(d=(s=a.currentTarget)==null?void 0:s.blur)==null||d.call(s),this.sendEmuCommand("uploadRom")}),(g=document.getElementById("btn-doom64-remap"))==null||g.addEventListener("click",a=>{var s,d;(d=(s=a.currentTarget)==null?void 0:s.blur)==null||d.call(s),this.sendEmuCommand("openRemap")}),(E=document.getElementById("btn-doom64-fullscreen"))==null||E.addEventListener("click",a=>{var s,d;(d=(s=a.currentTarget)==null?void 0:s.blur)==null||d.call(s),this.sendEmuCommand("fullscreen")}),(w=document.getElementById("btn-doom64-retry-download"))==null||w.addEventListener("click",()=>{this.prepareDesktopRuntime()});const n=document.getElementById("doom64-emu-frame");if(n&&this.useInMemoryIframe&&this.inMemoryHtml){const a=n.contentDocument;a&&(a.open(),a.write(this.inMemoryHtml),a.close()),setTimeout(()=>{this.syncAudioToEmu(),this.sendEmuCommand("focus")},250)}n==null||n.addEventListener("load",()=>{this.syncAudioToEmu(),this.sendEmuCommand("focus")})}}class R{constructor(){u(this,"id","doom64");u(this,"title","Doom 64");u(this,"sceneTheme","hell-grid");u(this,"controller",null);u(this,"host",null)}mount(n,e){this.unmount(),this.host=e;const o={getUsername:()=>e.getUsername(),getPilotTag:()=>e.getPilotTag(),isBetaChannel:e.isBetaChannel,getCloudSynced:()=>{var t;return((t=e.getCloudSynced)==null?void 0:t.call(e))??!1},canQuit:()=>{var t;return((t=e.canQuit)==null?void 0:t.call(e))??!1},renderTitlebar:()=>{var t;return((t=e.renderTitlebar)==null?void 0:t.call(e))??""},bindTitlebarEvents:()=>{var t;return(t=e.bindTitlebarEvents)==null?void 0:t.call(e)},onBackToHub:()=>e.returnToHub(),onOpenGlobalSettings:()=>e.openGlobalSettings(),onOpenGlobalProfile:()=>{var t;return(t=e.openGlobalProfile)==null?void 0:t.call(e)},onOpenSocialHub:()=>e.openSocialHub({pauseActiveGame:!0}),getSocialAttentionCount:()=>{var t;return((t=e.getSocialAttentionCount)==null?void 0:t.call(e))??0},getAudioSettings:()=>{var t;return((t=e.getAudioSettings)==null?void 0:t.call(e))??{soundEnabled:p.soundEnabled,musicEnabled:p.musicEnabled}},onToggleSound:()=>{var t;return(t=e.toggleSound)==null?void 0:t.call(e)},onToggleMusic:()=>{var t;return(t=e.toggleMusic)==null?void 0:t.call(e)},setExternalAudioActive:t=>{p.setExternalAudioActive(t)},onQuitApp:()=>{var t;return(t=e.quitApp)==null?void 0:t.call(e)},playSfx:t=>{t==="win"?p.playVictory():t==="pickup"?p.playGalaxyComplete(1):t==="shotgun"?p.playDoomShotgun():t==="plasma"?p.playDoomPlasma():t==="boom"?p.playDoomExplosion():t==="door"?p.playDoomDoor():t==="hit"||t==="hurt"?p.playDoomHit():p.playConsoleButton()}};this.controller=new x(o),this.controller.mount(n),e.setAudioScene(this.sceneTheme)}unmount(){p.setExternalAudioActive(!1),this.controller&&(this.controller.destroy(),this.controller=null),this.host=null}refreshHostState(){var n,e;(n=this.controller)==null||n.syncStatsFromStorage(),(e=this.controller)==null||e.render()}onPauseForOverlay(){var n;(n=this.controller)==null||n.pauseIfPlaying()}handleBackNavigation(){return!this.controller||!this.host?!1:(this.controller.handleBackNavigation()||this.host.returnToHub(),!0)}}export{R as Doom64Plugin};
