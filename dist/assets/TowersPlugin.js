var Mt=Object.defineProperty;var Et=(u,t,e)=>t in u?Mt(u,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):u[t]=e;var c=(u,t,e)=>Et(u,typeof t!="symbol"?t+"":t,e);import{g as dt,r as wt,T as O,A as N,a as tt,b as Tt,c as zt,d as mt,l as ut,v as ht,e as Lt,f as G,h as At,s as st,i as Q,j as St,k as ft,m as Bt,n as P,o as Ht,p as Pt,q as qt,t as $t,u as Kt,w as it,x as pt,y as xt,z as _}from"./app.js";function K(u){return u.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function It(u){const t=Math.max(0,Math.floor(u)),e=Math.floor(t/60),s=t%60;return`${String(e).padStart(2,"0")}:${String(s).padStart(2,"0")}`}const vt=[[1,3,2],[2,1,3],[3,2,1]],nt=[[1,0,0],[2,1,0],[3,0,1]];function Rt(u){const{step:t,miniBoard:e,selectedMiniCell:s,palId:i}=u,a=dt(i.facade,i.roof),b=e.every((l,o)=>l.every((h,g)=>h===vt[o][g])),m=[3,1,2],w=[2,2,1];return`
    <div class="towers-modal-backdrop" id="towers-tutorial-modal">
      <div class="towers-modal-card wide">
        <div class="towers-modal-head">
          <div>
            <h3>🎓 20 Saniyede Towers — Canlı Tuğla Sokak Eğitimi</h3>
            <p>Kutu seç ve eksik tuğla binaları yerleştirerek kuralı anında kavra!</p>
          </div>
          <button id="btn-towers-close-modal" class="towers-close-btn">✕</button>
        </div>

        <div class="towers-modal-body">
          <div class="towers-tut-steps">
            <button type="button" class="tut-pill ${t===1?"active":""}" data-tut-step="1">1. Her Satırda 1..N</button>
            <button type="button" class="tut-pill ${t===2?"active":""}" data-tut-step="2">2. Örtülen Binalar</button>
            <button type="button" class="tut-pill ${t===3?"active":""}" data-tut-step="3">3. Mini 3×3 Test</button>
          </div>

          <div class="towers-tut-interactive-split">
            <div class="towers-tut-explain">
              ${t===1?`
                <h4>🧱 Kural 1: Tekrarsız Kat Yüksekliği</h4>
                <p>Bir sokakta her satır ve her sütunda her boyda (1, 2, 3...) <strong>tam olarak bir bina</strong> yer alır.</p>
                <div class="towers-tut-rule-pill">✅ [ 1 ] [ 3 ] [ 2 ]  •  ❌ [ 2 ] [ 2 ] [ 1 ]</div>
              `:t===2?`
                <h4>👁️ Kural 2: Yüksek Bina Kısayı Örter</h4>
                <p>Kenardaki sayı, o yönden bakınca kaç çatı gördüğünü söyler:</p>
                <ul>
                  <li><b>İpucu = 1:</b> En önde en yüksek bina (<b>3</b>) olmalı; arkasındakiler görünmez.</li>
                  <li><b>İpucu = 3:</b> 1 → 2 → 3 artan sıra gerekir.</li>
                </ul>
              `:`
                <h4>🎯 Kural 3: Şimdi Tamamla!</h4>
                <p>Yandaki <b>3×3</b> mahallenin 4 boş parseline tıkla ve doğru katları (<b>1, 2, 3</b>) dik. Her kenardaki bakış sayısı otomatik yeşile dönecek!</p>
              `}
              <div class="towers-tut-tip">
                💡 Gerçek oyunda herhangi bir kenar sayısına veya <strong>👁️ Görüş Hattı</strong> butonuna basarak hangi binaların göründüğünü canlı görebilirsin.
              </div>
            </div>

            <div class="towers-tut-mini-wrap">
              <div class="towers-tut-mini-grid">
                <div class="mini-corner"></div>
                ${m.map(l=>`<div class="mini-clue"><b>${l}</b><small>▾</small></div>`).join("")}
                ${[0,1,2].map(l=>`
                  <div class="mini-clue"><b>${w[l]}</b><small>▸</small></div>
                  ${[0,1,2].map(o=>{var E;const h=((E=e[l])==null?void 0:E[o])||0,g=nt[l][o]>0,k=s.r===l&&s.c===o,$=h>0&&h===vt[l][o],M=h>0&&h!==vt[l][o];return`
                        <button
                          type="button"
                          class="mini-cell ${g?"fixed":""} ${k?"selected":""} ${M?"wrong":$?"correct":""}"
                          data-tut-cell="${l}-${o}"
                        >
                          ${h>0?`<div class="mini-bldg-box">${wt(h,3,a,"roof_flat",{isGiven:g,viewMode:"3d"})}</div>`:'<span class="mini-empty-plus">+</span>'}
                        </button>
                      `}).join("")}
                `).join("")}
              </div>

              <div class="towers-tut-num-row">
                ${[1,2,3].map(l=>`
                  <button type="button" class="towers-mini-num-btn" data-tut-num="${l}">
                    🧱 ${l} Kat
                  </button>
                `).join("")}
                <button type="button" class="towers-mini-num-btn clear" data-tut-num="0">Sil</button>
              </div>
              <div class="towers-tut-status ${b?"ok":""}">
                ${b?"✅ Harika! Tüm 3×3 blok çözüldü, artık hazırsın!":`Seçili Kare: S${s.r+1}, K${s.c+1}`}
              </div>
            </div>
          </div>

          <div class="towers-modal-footer">
            ${t<3&&!b?'<button id="btn-towers-tutorial-next" class="towers-primary-cta">Sonraki Adım ➡️</button>':""}
            <button id="btn-towers-tutorial-practice" class="towers-primary-cta">
              🧱 ${b?"İlk Şehir #1-1 Başlat!":"Hemen #1-1 İle Başla"}
            </button>
          </div>
        </div>
      </div>
    </div>
  `}function Gt(){return`
    <div class="towers-modal-backdrop" id="towers-rules-modal">
      <div class="towers-modal-card">
        <div class="towers-modal-head">
          <h3>📖 Towers — Kurallar &amp; Challenge Modları</h3>
          <button id="btn-towers-close-modal" class="towers-close-btn">✕</button>
        </div>
        <div class="towers-modal-body">
          <ul class="towers-rules-list">
            <li><strong>1..N Kat Dengesi:</strong> N×N mahallede her satır ve sütunda 1'den N'e her yükseklikten tam 1 apartman/kule bulunmalıdır.</li>
            <li><strong>Perspektif İpuçları:</strong> Çatı kenarındaki sayılar o taraftan bakınca kaç binanın göründüğünü gösterir. Öndeki yüksek bina arkasındaki kısayı gizler.</li>
            <li><strong>👁️ Görüş Hattı Işını:</strong> Kenardaki herhangi bir sayıya dokunarak hangi binaların göründüğünü (<code>👁️ Görüldü</code>) ve hangilerinin gizlendiğini (<code>⬛ Örtüldü</code>) canlı gör.</li>
            <li><strong>🚧 İmar Kısıtı:</strong> Parsel içinde <code>≤3</code> yazıyorsa o parsele en fazla 3 katlı bina dikilebilir.</li>
            <li><strong>🌫️ Sisli Sokak:</strong> Bazı kenar ipuçları sisle kaplıdır (<code>🌫️ ?</code>); açık ipuçları ve mantıkla tüm sokağı çözebilirsin.</li>
          </ul>
        </div>
      </div>
    </div>
  `}function Dt(u){const t=O.filter(s=>s.slot==="facade"),e=O.filter(s=>s.slot==="roof");return`
    <div class="towers-modal-backdrop" id="towers-workshop-modal">
      <div class="towers-modal-card towers-workshop-card wide">
        <div class="towers-modal-head workshop-head">
          <div>
            <h3>🏛️ Mimarlık Bürosu &amp; Cephe Tasarımı</h3>
            <p>Şantiye mimarını seç, binalarının tuğla rengini ve çatı silüetini değiştir.</p>
          </div>
          <div class="towers-modal-balance">
            <span class="balance-pill">💠 <strong>${u.blueprintGems}</strong></span>
            <button id="btn-towers-close-modal" class="towers-close-btn">✕</button>
          </div>
        </div>

        <div class="towers-modal-body">
          <h4 class="towers-section-sub">🏛️ Ünlü Mimarlar &amp; Müteahhitler (Efsaneviye Uzanan Kadro)</h4>
          <div class="towers-workshop-grid">
            ${N.map(s=>{const i=u.unlockedCharacterIds.includes(s.id),a=u.equippedCharacterId===s.id,b=u.blueprintGems>=s.costGems;return`
                <div class="towers-shop-item rarity-${s.rarity} ${a?"equipped":""}">
                  <div class="towers-shop-head-row">
                    <div class="towers-shop-avatar" style="border-color:${s.accentColor}">
                      ${tt(s.id,62)}
                    </div>
                    <div class="towers-shop-info">
                      <span class="rarity-pill rarity-${s.rarity}">${K(s.rarityLabel)}</span>
                      <strong>${K(s.name)}</strong>
                      <span class="role">${K(s.title)}</span>
                      <span class="perk">🧱 İnşaat Ustalığı +${s.powerScore}</span>
                    </div>
                  </div>
                  <p class="towers-shop-desc">${K(s.description)}</p>
                  <div class="towers-shop-action">
                    ${a?'<button class="towers-shop-btn equipped" disabled>✅ Aktif Mimar</button>':i?`<button class="towers-shop-btn equip" data-equip-char="${s.id}">👷 Göreve Getir</button>`:`<button class="towers-shop-btn buy" data-buy-char="${s.id}" ${b?"":"disabled"}>🔓 Aç (💠 ${s.costGems})</button>`}
                  </div>
                </div>
              `}).join("")}
          </div>

          <h4 class="towers-section-sub">🧱 Bina Cephe Stilleri (Tahtada Renk &amp; Doku Değiştirir)</h4>
          <div class="towers-workshop-grid">
            ${t.map(s=>{const i=u.unlockedCosmeticIds.includes(s.id),a=u.equippedFacadeId===s.id,b=u.blueprintGems>=s.costGems,m=dt(s.id,u.equippedRoofId);return`
                  <div class="towers-shop-item ${a?"equipped":""}">
                    <div class="towers-shop-head-row">
                      <div class="towers-shop-swatch brick-preview">
                        ${wt(4,5,m,u.equippedRoofId,{viewMode:"3d"})}
                      </div>
                      <div class="towers-shop-info">
                        <strong>${K(s.name)}</strong>
                        <span class="role">🧱 Tuğla &amp; Taş Kaplama</span>
                      </div>
                    </div>
                    <p class="towers-shop-desc">${K(s.description)}</p>
                    <div class="towers-shop-action">
                      ${a?'<button class="towers-shop-btn equipped" disabled>✅ Kullanımda</button>':i?`<button class="towers-shop-btn equip" data-equip-cosmetic="${s.id}">🎨 Cepheye Uygula</button>`:`<button class="towers-shop-btn buy" data-buy-cosmetic="${s.id}" ${b?"":"disabled"}>🔓 Aç (💠 ${s.costGems})</button>`}
                    </div>
                  </div>
                `}).join("")}
          </div>

          <h4 class="towers-section-sub">🏰 Çatı Tasarımları &amp; Şehir Tepeleri</h4>
          <div class="towers-workshop-grid">
            ${e.map(s=>{const i=u.unlockedCosmeticIds.includes(s.id),a=u.equippedRoofId===s.id,b=u.blueprintGems>=s.costGems;return`
                  <div class="towers-shop-item ${a?"equipped":""}">
                    <div class="towers-shop-head-row">
                      <div class="towers-shop-swatch brick-preview roof-preview" style="border-color:${s.primaryColor}">
                        ${Tt(s.id,46)}
                      </div>
                      <div class="towers-shop-info">
                        <strong>${K(s.name)}</strong>
                        <span class="role">🏠 Çatı Silüeti</span>
                      </div>
                    </div>
                    <p class="towers-shop-desc">${K(s.description)}</p>
                    <div class="towers-shop-action">
                      ${a?'<button class="towers-shop-btn equipped" disabled>✅ Kullanımda</button>':i?`<button class="towers-shop-btn equip" data-equip-cosmetic="${s.id}">🏠 Çatıya Tak</button>`:`<button class="towers-shop-btn buy" data-buy-cosmetic="${s.id}" ${b?"":"disabled"}>🔓 Aç (💠 ${s.costGems})</button>`}
                    </div>
                  </div>
                `}).join("")}
          </div>
        </div>
      </div>
    </div>
  `}function Wt(u){const t=zt(u.architectXp),e=Object.values(u.bestTimesSec),s=e.length>0?Math.min(...e):null;return`
    <div class="towers-modal-backdrop" id="towers-profile-modal">
      <div class="towers-modal-card wide">
        <div class="towers-modal-head">
          <h3>🏆 Towers Başarımlar &amp; İstatistikler (LVL ${t.level} • ${K(t.title)})</h3>
          <button id="btn-towers-close-modal" class="towers-close-btn">✕</button>
        </div>
        <div class="towers-modal-body">
          <div class="towers-stats-summary-grid">
            <div class="towers-stat-box"><span>Çözülen Blok</span><strong>${u.totalSolved}</strong></div>
            <div class="towers-stat-box"><span>Toplam Puan</span><strong>${u.totalPoints}</strong></div>
            <div class="towers-stat-box"><span>En Hızlı Blok</span><strong>${s!==null?`${s} sn`:"—"}</strong></div>
            <div class="towers-stat-box"><span>İmar / Sis / Baret</span><strong>${(u.zoningSolvedCount||0)+(u.fogSolvedCount||0)+(u.survivalClearsCount||0)}</strong></div>
          </div>

          <h4 class="towers-section-sub">🎖️ Towers Başarımları (${u.unlockedAchievements.length} / ${mt.length})</h4>
          <div class="towers-ach-grid">
            ${mt.map(i=>`
                <div class="towers-ach-card ${u.unlockedAchievements.includes(i.id)?"unlocked":"locked"}">
                  <span class="ach-icon">${i.icon}</span>
                  <div>
                    <strong>${K(i.title)}</strong>
                    <p>${K(i.description)}</p>
                  </div>
                </div>
              `).join("")}
          </div>
        </div>
      </div>
    </div>
  `}function Ut(u){return`
    <div class="towers-modal-backdrop" id="towers-beta-modal">
      <div class="towers-modal-card">
        <div class="towers-modal-head">
          <h3>🧪 Towers Beta Test Laboratuvarı</h3>
          <button id="btn-towers-close-modal" class="towers-close-btn">✕</button>
        </div>
        <div class="towers-modal-body">
          <p>Testerların tüm piksel mimarları, 60 tuğla mahalleyi ve challenge modlarını anında test etmesi için hızlı profiller:</p>
          <div class="towers-beta-btn-stack">
            <button id="btn-towers-preset-max" class="towers-primary-cta">
              👑 LVL 99 İmparator + 60/60 Mahalle + 999.999.999 💠
            </button>
            <button id="btn-towers-preset-mid" class="towers-secondary-cta">
              🏘️ Klasik Sandbox (60/60 Mahalle + Başlangıç)
            </button>
            <button id="btn-towers-preset-reset" class="towers-secondary-cta">
              🔄 Sıfırla (LVL 1 Ali Ağaoğlu)
            </button>
            ${u?`
              <button id="btn-towers-instant-solve" class="towers-primary-cta">
                ⚡ Aktif Sokağı Anında Çöz (Beta Test)
              </button>
            `:""}
          </div>
        </div>
      </div>
    </div>
  `}function _t(u){const{elapsedSeconds:t,hintsUsed:e,summary:s,challengeKind:i,architect:a}=u;return`
    <div class="towers-modal-backdrop" id="towers-victory-modal">
      <div class="towers-modal-card victory">
        <div class="towers-victory-stars">${Array.from({length:3},(m,w)=>w<s.starsEarned?'<span class="star-on">★</span>':'<span class="star-off">☆</span>').join("")}</div>
        <h2>🧱 İnşaat Tamamlandı!</h2>
        <p>
          Süre: <strong>${It(t)}</strong> • Kullanılan İpucu: <strong>${e}</strong>
        </p>

        ${a?`
          <div class="towers-victory-arch-strip">
            <div class="towers-victory-arch-portrait" style="border-color:${a.accentColor}">
              ${tt(a.id,52)}
            </div>
            <div class="towers-victory-arch-quote">
              <strong>${K(a.name)}</strong>
              <span>“${K(a.winQuote)}”</span>
            </div>
          </div>
        `:""}

        <div class="towers-victory-rewards">
          <div class="reward-pill">✨ +${s.xpGain} Mimar XP</div>
          <div class="reward-pill">💠 +${s.blueprintGain} Proje Kristali</div>
          ${i==="weekly_cup"&&s.cupScore?`<div class="reward-pill">🏆 Kupa Puanı: ${s.cupScore}</div>`:""}
        </div>

        ${s.leveledUp?'<div class="towers-levelup-banner">🎉 MİMAR SEVİYESİ YÜKSELDİ!</div>':""}
        ${s.newlyUnlockedAchievements.length>0?`<div class="towers-ach-unlock-strip">🏅 Yeni Başarım: ${s.newlyUnlockedAchievements.map(m=>`${m.icon} ${K(m.title)}`).join(" • ")}</div>`:""}

        <div class="towers-victory-actions">
          <button id="btn-towers-win-next" class="towers-primary-cta">➡️ Devam Et / Sıradaki Sokak</button>
          <button id="btn-towers-win-map" class="towers-secondary-cta">🏙️ Haritaya Dön</button>
        </div>
      </div>
    </div>
  `}function Nt(u){return`
    <div class="towers-modal-backdrop" id="towers-gameover-modal">
      <div class="towers-modal-card victory">
        <div class="towers-victory-stars">🪖✖️</div>
        <h2>🚧 Şantiye Durduruldu!</h2>
        <p>${K(u)}</p>
        <div class="towers-victory-actions">
          <button id="btn-towers-retry-board" class="towers-primary-cta">🔄 Tekrar Dene</button>
          <button id="btn-towers-win-map" class="towers-secondary-cta">🏙️ Şehir Menüsüne Dön</button>
        </div>
      </div>
    </div>
  `}function z(u){return u.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function at(u){const t=Math.max(0,Math.floor(u)),e=Math.floor(t/60),s=t%60;return`${String(e).padStart(2,"0")}:${String(s).padStart(2,"0")}`}function J(u){return u.map(t=>[...t])}function bt(u){return u.map(t=>t.map(e=>[...e]))}class Ot{constructor(t){c(this,"host");c(this,"stats");c(this,"activeTab","campaign");c(this,"selectedEpisode",1);c(this,"activeModal",null);c(this,"tutorialStep",1);c(this,"tutorialMiniBoard",nt.map(t=>[...t]));c(this,"tutorialSelectedCell",{r:0,c:1});c(this,"customSize",4);c(this,"customDifficulty","easy");c(this,"customSeedInput","");c(this,"inBoardView",!1);c(this,"isPaused",!1);c(this,"activePuzzle",null);c(this,"activeMode","campaign");c(this,"activeChallengeKind","standard");c(this,"activeCupStageIdx",null);c(this,"activeCampaignLevel",null);c(this,"board",[]);c(this,"notes",[]);c(this,"history",[]);c(this,"redoStack",[]);c(this,"selectedCell",{r:0,c:0});c(this,"noteMode",!1);c(this,"activeHint",null);c(this,"activeSightRay",null);c(this,"lastBuiltCell",null);c(this,"buildAnimSeq",0);c(this,"hintsUsedThisGame",0);c(this,"elapsedSeconds",0);c(this,"timerHandle",null);c(this,"gameWon",!1);c(this,"gameOverReason","");c(this,"endlessWave",1);c(this,"blitzRemainingSeconds",120);c(this,"blitzScore",0);c(this,"blitzSolvedCount",0);c(this,"survivalLives",3);c(this,"survivalStreak",0);c(this,"lastWinSummary",null);c(this,"keydownHandler",null);c(this,"resizeHandler",null);c(this,"lastDesktopMode",typeof window<"u"?window.innerWidth>=900:!0);c(this,"mountEl",null);c(this,"viewMode","3d");this.host=t,this.stats=ut();try{this.viewMode=localStorage.getItem("pg_towers_view_mode_v1")==="2d"?"2d":"3d"}catch{this.viewMode="3d"}}reloadStats(){this.stats=ut()}getStats(){return this.stats}pauseIfPlaying(){this.inBoardView&&!this.gameWon&&!this.isPaused&&(this.isPaused=!0,this.render())}syncStatsFromStorage(){const t=JSON.stringify(this.stats);return this.stats=ut(),t!==JSON.stringify(this.stats)}syncStatsFromStorageAndRefresh(){(this.syncStatsFromStorage()||!this.inBoardView)&&this.render()}toggleViewMode(){var t,e;this.viewMode=this.viewMode==="3d"?"2d":"3d",this.lastBuiltCell=null;try{localStorage.setItem("pg_towers_view_mode_v1",this.viewMode)}catch{}(e=(t=this.host).playSound)==null||e.call(t,"click"),this.render()}handleBackNavigation(){return this.activeModal!==null?(this.activeModal=null,this.render(),!0):this.inBoardView?this.isPaused?(this.isPaused=!1,this.render(),!0):(this.stopTimer(),this.inBoardView=!1,this.render(),!0):!1}destroy(){this.stopTimer(),this.keydownHandler&&(window.removeEventListener("keydown",this.keydownHandler),this.keydownHandler=null),this.resizeHandler&&(window.removeEventListener("resize",this.resizeHandler),this.resizeHandler=null)}stopTimer(){this.timerHandle!==null&&(window.clearInterval(this.timerHandle),this.timerHandle=null)}startTimer(){this.stopTimer(),this.timerHandle=window.setInterval(()=>{if(!this.inBoardView||this.gameWon||this.isPaused||this.activeModal!==null)return;if(this.elapsedSeconds+=1,this.activeMode==="blitz"&&(this.blitzRemainingSeconds=Math.max(0,this.blitzRemainingSeconds-1),this.blitzRemainingSeconds<=0)){this.stopTimer(),this.inBoardView=!1,this.render();return}const t=document.getElementById("towers-hud-timer");t&&(t.textContent=this.activeMode==="blitz"?`⏱️ ${at(this.blitzRemainingSeconds)}`:`⏱️ ${at(this.elapsedSeconds)}`)},1e3)}mount(t){this.mountEl=t,this.reloadStats(),this.attachKeyboardListener(),this.attachResizeListener(),this.renderInto(t)}render(){const t=this.mountEl||document.getElementById("towers-mount-root")||document.getElementById("app");t&&this.renderInto(t)}attachResizeListener(){this.resizeHandler&&window.removeEventListener("resize",this.resizeHandler),this.resizeHandler=()=>{const t=window.innerWidth>=900;t!==this.lastDesktopMode&&(this.lastDesktopMode=t,this.lastBuiltCell=null,this.render())},window.addEventListener("resize",this.resizeHandler)}attachKeyboardListener(){this.keydownHandler&&window.removeEventListener("keydown",this.keydownHandler),this.keydownHandler=t=>{if(!this.inBoardView||!this.activePuzzle||this.activeModal!==null||this.isPaused||document.activeElement&&["INPUT","TEXTAREA"].includes(document.activeElement.tagName))return;const e=this.activePuzzle.size;if(t.key==="ArrowUp")t.preventDefault(),this.lastBuiltCell=null,this.selectedCell.r=(this.selectedCell.r-1+e)%e,this.render();else if(t.key==="ArrowDown")t.preventDefault(),this.lastBuiltCell=null,this.selectedCell.r=(this.selectedCell.r+1)%e,this.render();else if(t.key==="ArrowLeft")t.preventDefault(),this.lastBuiltCell=null,this.selectedCell.c=(this.selectedCell.c-1+e)%e,this.render();else if(t.key==="ArrowRight")t.preventDefault(),this.lastBuiltCell=null,this.selectedCell.c=(this.selectedCell.c+1)%e,this.render();else if(t.key.toLowerCase()==="n")t.preventDefault(),this.lastBuiltCell=null,this.noteMode=!this.noteMode,this.render();else if(t.key.toLowerCase()==="v")t.preventDefault(),this.toggleSightRayFromSelection();else if(t.key==="Backspace"||t.key==="Delete"||t.key==="0")t.preventDefault(),this.handleEraseInput();else if((t.ctrlKey||t.metaKey)&&t.key.toLowerCase()==="z")t.preventDefault(),this.handleUndo();else if((t.ctrlKey||t.metaKey)&&t.key.toLowerCase()==="y")t.preventDefault(),this.handleRedo();else if(/^[1-8]$/.test(t.key)){const s=Number(t.key);s>=1&&s<=e&&(t.preventDefault(),this.handleNumberInput(s))}},window.addEventListener("keydown",this.keydownHandler)}startPuzzleSession(t,e,s=null,i){var b,m;this.activePuzzle=t,this.activeMode=e,this.activeChallengeKind=t.challengeKind||"standard",this.activeCupStageIdx=(i==null?void 0:i.cupStageIdx)??null,this.activeCampaignLevel=s,this.board=J(t.givens),this.notes=Array.from({length:t.size},()=>Array.from({length:t.size},()=>[])),this.history=[],this.redoStack=[],this.selectedCell={r:0,c:0};let a=!1;for(let w=0;w<t.size&&!a;w++)for(let l=0;l<t.size;l++)if(t.givens[w][l]===0){this.selectedCell={r:w,c:l},a=!0;break}this.activeHint=null,this.activeSightRay=null,this.lastBuiltCell=null,this.hintsUsedThisGame=0,this.elapsedSeconds=0,this.gameWon=!1,this.isPaused=!1,this.gameOverReason="",this.inBoardView=!0,e==="blitz"&&(i==null?void 0:i.resetSeries)!==!1?(this.blitzRemainingSeconds=120,this.blitzScore=0,this.blitzSolvedCount=0):this.activeChallengeKind==="survival"&&(i==null?void 0:i.resetSeries)!==!1&&(this.survivalLives=3,this.survivalStreak=0),this.startTimer(),(m=(b=this.host).playSound)==null||m.call(b,"click"),this.render()}pushHistory(){this.history.push({board:J(this.board),notes:bt(this.notes)}),this.history.length>100&&this.history.shift(),this.redoStack=[]}handleNumberInput(t){var m,w,l,o,h,g,k,$,M,E,B;if(!this.activePuzzle||this.gameWon||this.isPaused)return;const{r:e,c:s}=this.selectedCell;if(((m=this.activePuzzle.givens[e])==null?void 0:m[s])>0){(l=(w=this.host).playSound)==null||l.call(w,"error");return}if(this.pushHistory(),this.activeHint=null,this.noteMode){this.board[e][s]!==0&&(this.board[e][s]=0);const S=this.notes[e][s],A=S.indexOf(t);A>=0?S.splice(A,1):(S.push(t),S.sort((d,r)=>d-r)),(h=(o=this.host).playSound)==null||h.call(o,"click"),this.render();return}if(this.board[e][s]=this.board[e][s]===t?0:t,this.notes[e][s]=[],this.board[e][s]===0){this.lastBuiltCell=null,(k=(g=this.host).playSound)==null||k.call(g,"erase"),this.render();return}const i=this.board[e][s];this.lastBuiltCell={r:e,c:s,seq:++this.buildAnimSeq};const a=ht(this.activePuzzle,this.board);if(a.duplicateKeys.has(`${e},${s}`)||a.zoningViolationKeys.has(`${e},${s}`)||this.activeChallengeKind==="survival"&&i!==this.activePuzzle.solution[e][s]){if((M=($=this.host).playSound)==null||M.call($,"error"),this.activeChallengeKind==="survival"&&(this.survivalLives=Math.max(0,this.survivalLives-1),this.survivalLives<=0)){this.stopTimer(),this.gameOverReason="3 inşaat baretinin tamamı tükendi! Kat çakışması veya hatalı kat yerleşimi şantiyeyi durdurdu.",this.activeModal="gameover",this.render();return}}else(B=(E=this.host).playSound)==null||B.call(E,"place",{floors:i,maxFloors:this.activePuzzle.size});this.checkWinAfterMove(),this.render()}handleEraseInput(){var s,i,a;if(!this.activePuzzle||this.gameWon||this.isPaused)return;const{r:t,c:e}=this.selectedCell;((s=this.activePuzzle.givens[t])==null?void 0:s[e])>0||this.board[t][e]===0&&this.notes[t][e].length===0||(this.pushHistory(),this.board[t][e]=0,this.notes[t][e]=[],this.activeHint=null,this.lastBuiltCell=null,(a=(i=this.host).playSound)==null||a.call(i,"erase"),this.render())}handleUndo(){var e,s;if(this.history.length===0||this.gameWon||this.isPaused)return;this.redoStack.push({board:J(this.board),notes:bt(this.notes)});const t=this.history.pop();this.board=t.board,this.notes=t.notes,this.activeHint=null,this.lastBuiltCell=null,(s=(e=this.host).playSound)==null||s.call(e,"click"),this.render()}handleRedo(){var e,s;if(this.redoStack.length===0||this.gameWon||this.isPaused)return;this.history.push({board:J(this.board),notes:bt(this.notes)});const t=this.redoStack.pop();this.board=t.board,this.notes=t.notes,this.activeHint=null,this.lastBuiltCell=null,(s=(e=this.host).playSound)==null||s.call(e,"click"),this.render()}handleSmartHint(){var e,s;if(!this.activePuzzle||this.gameWon||this.isPaused)return;const t=Lt(this.activePuzzle,this.board);if(t){if(this.activeHint=t,this.selectedCell={r:t.r,c:t.c},this.hintsUsedThisGame+=1,t.focusClueKey){const[i,a]=t.focusClueKey.split(":");this.activeSightRay={side:i,index:Number(a)||0}}(s=(e=this.host).playSound)==null||s.call(e,"hint"),this.render()}}applyActiveHintMove(){var i,a,b;if(!this.activeHint||!this.activePuzzle||this.gameWon)return;const{r:t,c:e,value:s}=this.activeHint;((i=this.activePuzzle.givens[t])==null?void 0:i[e])>0||(this.pushHistory(),this.board[t][e]=s,this.notes[t][e]=[],this.lastBuiltCell={r:t,c:e,seq:++this.buildAnimSeq},this.activeHint=null,(b=(a=this.host).playSound)==null||b.call(a,"place",{floors:s,maxFloors:this.activePuzzle.size}),this.checkWinAfterMove(),this.render())}toggleSightRayFromSelection(){var t,e;this.activePuzzle&&(this.activeSightRay?this.activeSightRay.side==="left"||this.activeSightRay.side==="right"?this.activeSightRay={side:"top",index:this.selectedCell.c}:this.activeSightRay=null:this.activeSightRay={side:"left",index:this.selectedCell.r},(e=(t=this.host).playSound)==null||e.call(t,"click"),this.render())}checkWinAfterMove(){var a,b,m,w,l,o,h,g,k,$,M,E,B;if(!this.activePuzzle||this.gameWon||!ht(this.activePuzzle,this.board).isSolved)return;const e=new Date().toISOString().slice(0,10);if(this.activeMode==="blitz"){this.blitzSolvedCount+=1,this.blitzScore+=180+Math.max(0,25-this.hintsUsedThisGame*20),this.blitzScore>this.stats.bestBlitzScore&&(this.stats.bestBlitzScore=this.blitzScore);const S=`TWR-BLITZ-${Date.now()}-${this.blitzSolvedCount}`,A=G(4,"easy",S,{title:`⚡ Blitz Kule #${this.blitzSolvedCount+1}`});(b=(a=this.host).playSound)==null||b.call(a,"win");const d=At(this.stats,{elapsedSec:this.elapsedSeconds,hintsUsed:this.hintsUsedThisGame,size:4,isDaily:!1});d.length>0&&(this.stats.blueprintGems+=d.length),st(this.stats),(w=(m=this.host).onCloudStateChanged)==null||w.call(m,!0),Q("towers_solve"),this.hintsUsedThisGame===0&&Q("no_hint_solve"),this.startPuzzleSession(A,"blitz",null,{resetSeries:!1});return}if(this.activeMode==="endless"){this.endlessWave>this.stats.bestEndlessWave&&(this.stats.bestEndlessWave=this.endlessWave),this.endlessWave+=1;const S=St(this.stats,{puzzleId:this.activePuzzle.id,size:this.activePuzzle.size,difficulty:this.activePuzzle.difficulty,elapsedSec:this.elapsedSeconds,hintsUsed:this.hintsUsedThisGame});this.stats=S.nextStats,(o=(l=this.host).onCloudStateChanged)==null||o.call(l,!0),Q("towers_solve"),this.hintsUsedThisGame===0&&Q("no_hint_solve"),this.gameWon=!0,this.stopTimer(),this.lastWinSummary={starsEarned:S.starsEarned,xpGain:S.xpEarned,blueprintGain:S.gemsEarned,leveledUp:S.leveledUp,newlyUnlockedAchievements:S.newlyUnlockedAchievements},this.activeModal="victory",(g=(h=this.host).playSound)==null||g.call(h,"win");return}this.activeChallengeKind==="zoning"?this.stats.zoningSolvedCount=(this.stats.zoningSolvedCount||0)+1:this.activeChallengeKind==="fog"?this.stats.fogSolvedCount=(this.stats.fogSolvedCount||0)+1:this.activeChallengeKind==="survival"&&(this.survivalStreak+=1,this.stats.survivalClearsCount=(this.stats.survivalClearsCount||0)+1);let s;if(this.activeChallengeKind==="weekly_cup"&&this.activeCupStageIdx!==null){const S=ft(),A=Bt(this.activePuzzle.size,this.elapsedSeconds,this.hintsUsedThisGame);s=A;const d=this.stats.weeklyCupKey,r=d===S&&Array.isArray(this.stats.weeklyCupScores)?[...this.stats.weeklyCupScores]:[0,0,0],v=d===S&&Array.isArray(this.stats.weeklyCupRewarded)?[...this.stats.weeklyCupRewarded]:[!1,!1,!1];r[this.activeCupStageIdx]=Math.max(r[this.activeCupStageIdx]||0,A),v[this.activeCupStageIdx]=!0,this.stats.weeklyCupKey=S,this.stats.weeklyCupScores=r,this.stats.weeklyCupRewarded=v}this.gameWon=!0,this.stopTimer();const i=St(this.stats,{puzzleId:((k=this.activeCampaignLevel)==null?void 0:k.id)||this.activePuzzle.id,size:this.activePuzzle.size,difficulty:this.activePuzzle.difficulty,elapsedSec:this.elapsedSeconds,hintsUsed:this.hintsUsedThisGame,isDaily:this.activeMode==="daily",dailyDateKey:this.activeMode==="daily"?e:void 0,campaignLevel:this.activeCampaignLevel?{goldSec:this.activeCampaignLevel.goldSec,silverSec:this.activeCampaignLevel.silverSec}:null});this.stats=i.nextStats,(M=($=this.host).onCloudStateChanged)==null||M.call($,!0),Q("towers_solve"),this.hintsUsedThisGame===0&&Q("no_hint_solve"),this.activeChallengeKind==="weekly_cup"&&Q("duel_or_cup"),this.lastWinSummary={starsEarned:i.starsEarned,xpGain:i.xpEarned,blueprintGain:i.gemsEarned,leveledUp:i.leveledUp,newlyUnlockedAchievements:i.newlyUnlockedAchievements,cupScore:s},this.activeModal="victory",(B=(E=this.host).playSound)==null||B.call(E,"win")}getUnlockedCampaignIndex(){let t=-1;for(let e=0;e<P.length;e++)this.stats.solvedIds.includes(P[e].id)&&(t=e);return Math.min(P.length-1,t+1)}renderInto(t){var a,b,m,w;const e=typeof window<"u"?window.innerWidth>=900:!0;this.lastDesktopMode=e;const s=((b=(a=this.host).renderTitlebar)==null?void 0:b.call(a))||"",i=this.inBoardView&&this.activePuzzle?this.renderBoardScreenHTML():this.renderHubScreenHTML(e);t.innerHTML=`
      ${s}
      <div class="screen-body ${this.inBoardView?"towers-board-body":"menu-mode towers-menu-mode"}" id="towers-screen">
        ${i}
        ${this.renderActiveModal()}
      </div>
    `,(w=(m=this.host).bindTitlebarEvents)==null||w.call(m),this.bindEvents(t)}renderHubScreenHTML(t){var $,M,E,B,S,A,d,r;const e=this.host.getUsername(),s=this.host.getPilotTag(),i=this.host.isBetaChannel(),a=((M=($=this.host).getCloudSynced)==null?void 0:M.call($))??!1,b=((B=(E=this.host).canQuit)==null?void 0:B.call(E))??!1,m=zt(this.stats.architectXp),w=N.find(v=>v.id===this.stats.equippedCharacterId)||N[0],l=Ht(this.stats),o=(this.stats.solvedIds||[]).filter(v=>P.some(L=>L.id===v)).length,h=((A=(S=this.host).getSocialAttentionCount)==null?void 0:A.call(S))??0,g=((r=(d=this.host).getAudioSettings)==null?void 0:r.call(d))??{soundEnabled:!0,musicEnabled:!0},k=[{id:"campaign",icon:"🏙️",label:"Şehir Haritası",badge:`${o}/60`},{id:"challenges",icon:"🚧",label:"Challenge & Kupa",badge:"3+1"},{id:"daily",icon:"🧱",label:"Günlük Bina",badge:this.stats.dailyStreak>0?`🔥${this.stats.dailyStreak}`:""},{id:"blitz",icon:"⚡",label:"Kule Blitz",badge:""},{id:"endless",icon:"🏗️",label:"Sonsuz İnşaat",badge:""},{id:"custom",icon:"🎲",label:"Serbest Mimari",badge:""}];return`
      <header class="main-menu-topbar towers-menu-topbar">
        <div class="topbar-left">
          <button type="button" class="arcade-return-chip" id="btn-towers-back-hub" title="1000in1 Kaset Odasına Dön">🕹️ Kaset</button>
          <div class="topbar-desktop-telemetry">
            <span class="topbar-sector-pill towers-sector-pill">🧱 TOWERS • ${o}/${P.length} Mahalle • ⭐ ${l}/${P.length*3}</span>
            ${i?'<button type="button" class="beta-badge beta-lab-trigger" id="btn-towers-beta-lab" title="Towers Beta Test Laboratuvarı">🧪 BETA LAB</button>':""}
          </div>
        </div>

        <div class="topbar-actions">
          ${t?"":`
            <button type="button" class="steam-btn" id="btn-towers-open-social" title="DM &amp; Topluluk">
              <div>💬 SOSYAL</div>
              ${h>0?`<b class="social-nav-badge" style="display:inline-flex;">${h}</b>`:""}
            </button>
            <button type="button" class="steam-btn" id="btn-towers-tutorial"><div>🎓 EĞİTİM</div></button>
            <button type="button" class="steam-btn" id="btn-towers-workshop"><div>🏗️ ATÖLYE</div></button>
            <button type="button" class="steam-btn" id="btn-towers-settings"><div>⚙️ AYAR</div></button>
          `}
          ${b?'<button type="button" class="steam-btn quit-btn" id="btn-towers-quit"><div>ÇIKIŞ</div></button>':""}
        </div>
      </header>

      <main class="main-tab-stage towers-main-stage">
        <section class="towers-architect-hero">
          <div class="towers-architect-card">
            <div class="towers-architect-avatar" style="border-color:${w.accentColor}">
              ${tt(w.id,46)}
            </div>
            <div class="towers-architect-info">
              <div class="towers-architect-head">
                <span class="towers-architect-name">${z(w.name)}</span>
                <span class="towers-architect-role">${z(w.title)}</span>
                <span class="towers-perk-chip">🧱 Güç +${w.powerScore}</span>
              </div>
              <div class="towers-xp-bar-wrap">
                <div class="towers-xp-labels">
                  <span><strong>Mimar LVL ${m.level}</strong> • ${z(m.title)}</span>
                  <span>${this.stats.architectXp>=9e5?"MAX (Beta Sandbox)":`${m.currentXp} / ${m.nextLevelXp} XP (%${m.progressPct})`}</span>
                </div>
                <div class="towers-xp-track">
                  <div class="towers-xp-fill" style="width:${m.progressPct}%"></div>
                </div>
              </div>
            </div>
          </div>

          <div class="towers-Currencies-row">
            <div class="towers-stat-chip"><span class="lbl">Proje Kristali</span><strong class="val">${this.stats.blueprintGems>=9e8?"♾️ Beta":`💠 ${this.stats.blueprintGems}`}</strong></div>
            <div class="towers-stat-chip"><span class="lbl">Mahalle</span><strong class="val">🏘️ ${o} / 60</strong></div>
            <div class="towers-stat-chip"><span class="lbl">Yıldız</span><strong class="val">⭐ ${l}</strong></div>
            <div class="towers-stat-chip"><span class="lbl">Başarım</span><strong class="val">🏅 ${this.stats.unlockedAchievements.length}/24</strong></div>
          </div>
        </section>

        ${t?"":`
          <div class="towers-mobile-mode-strip" role="tablist">
            ${k.map(v=>`
              <button type="button" class="towers-mobile-pill ${this.activeTab===v.id?"active":""}" data-towers-tab="${v.id}">
                ${v.icon} ${v.label}
              </button>
            `).join("")}
          </div>
        `}

        <div class="towers-tab-content">
          ${this.renderTabContent()}
        </div>
      </main>

      <nav class="bottom-nav-dock towers-dock ${t?"discord-cockpit-dock":""}">
        ${t?`
          <div class="discord-single-top">
            <button type="button" class="discord-dm-nav-btn" id="btn-towers-open-social" title="Ortak Discord Sohbet, Arkadaşlar &amp; DM">
              <span class="discord-nav-indicator" aria-hidden="true"></span>
              <span class="discord-dm-icon-box" aria-hidden="true">💬</span>
              <span class="tab-label">DM &amp; Sohbet</span>
              ${h>0?`<b class="social-nav-badge" style="display:inline-flex;">${h}</b>`:""}
            </button>
            <div class="discord-nav-divider" aria-hidden="true"></div>
          </div>

          <div class="discord-single-links">
            ${k.map(v=>`
              <button type="button" class="bottom-nav-tab ${this.activeTab===v.id?"active":""}" data-towers-tab="${v.id}">
                <span class="discord-nav-indicator" aria-hidden="true"></span>
                <span class="tab-icon">${v.icon}</span>
                <span class="tab-label">${v.label}</span>
                ${v.badge?`<span class="tab-badge">${z(v.badge)}</span>`:""}
              </button>
            `).join("")}
            <div class="discord-nav-divider slim" aria-hidden="true"></div>
            <button type="button" class="bottom-nav-tab secondary" id="btn-towers-tutorial">
              <span class="discord-nav-indicator" aria-hidden="true"></span>
              <span class="tab-icon">🎓</span>
              <span class="tab-label">20sn Eğitim</span>
            </button>
            <button type="button" class="bottom-nav-tab secondary" id="btn-towers-rules">
              <span class="discord-nav-indicator" aria-hidden="true"></span>
              <span class="tab-icon">📖</span>
              <span class="tab-label">Kurallar</span>
            </button>
            <button type="button" class="bottom-nav-tab secondary" id="btn-towers-profile">
              <span class="discord-nav-indicator" aria-hidden="true"></span>
              <span class="tab-icon">🏅</span>
              <span class="tab-label">Başarımlar</span>
              <span class="tab-badge">${this.stats.unlockedAchievements.length}/${mt.length}</span>
            </button>
          </div>

          <div class="desktop-sidebar-footer discord-user-dock">
            <div class="discord-voice-ship-strip">
              <div class="sidebar-ship-preview">
                ${tt(w.id,30)}
              </div>
              <div class="discord-voice-ship-info">
                <span class="discord-conn-green">● Şantiye Hazır</span>
                <small class="discord-conn-sub">LVL ${m.level} • ${z(w.name)}</small>
              </div>
              <button type="button" class="sidebar-hangar-mini-btn" id="btn-towers-workshop">🏗️ Atölye</button>
            </div>

            <div class="discord-user-bar">
              <button type="button" class="discord-user-identity profile-badge" id="btn-towers-open-profile" title="Ortak Oyuncu Kimliği">
                <div class="discord-user-avatar">
                  ${tt(w.id,28)}
                  <span class="discord-presence-dot ${a?"online":"guest"}"></span>
                </div>
                <div class="discord-user-meta">
                  <strong class="discord-user-nick">${z(e)}<small>#${z(s)}</small></strong>
                  <span class="discord-user-sub">${this.stats.totalPoints} Puan</span>
                </div>
              </button>
              <div class="discord-user-controls">
                <button type="button" class="discord-ctrl-btn ${g.soundEnabled?"is-on":"is-muted"}" id="btn-towers-dock-sfx" title="Ses Efektleri">🔊</button>
                <button type="button" class="discord-ctrl-btn ${g.musicEnabled?"is-on":"is-muted"}" id="btn-towers-dock-music" title="Şehir Müziği">🎵</button>
                <button type="button" class="discord-ctrl-btn" id="btn-towers-settings" title="Ayarlar">⚙️</button>
              </div>
            </div>
          </div>
        `:`
          <div class="bottom-nav-links">
            <button type="button" class="bottom-nav-tab ${this.activeTab==="campaign"?"active":""}" data-towers-tab="campaign">
              <span class="tab-icon">🏙️</span><span class="tab-label">Harita</span>
            </button>
            <button type="button" class="bottom-nav-tab ${this.activeTab==="challenges"?"active":""}" data-towers-tab="challenges">
              <span class="tab-icon">🚧</span><span class="tab-label">Challenge</span>
            </button>
            <button type="button" class="bottom-nav-tab ${this.activeTab==="daily"?"active":""}" data-towers-tab="daily">
              <span class="tab-icon">🧱</span><span class="tab-label">Günlük</span>
            </button>
            <button type="button" class="bottom-nav-tab ${this.activeTab==="blitz"?"active":""}" data-towers-tab="blitz">
              <span class="tab-icon">⚡</span><span class="tab-label">Blitz</span>
            </button>
            <button type="button" class="bottom-nav-tab" id="btn-towers-profile">
              <span class="tab-icon">🏅</span><span class="tab-label">Başarım</span>
            </button>
          </div>
        `}
      </nav>
    `}renderTabContent(){if(this.activeTab==="campaign"){const t=this.getUnlockedCampaignIndex(),e=P[t]||P[0],s=P.filter(l=>l.episode===this.selectedEpisode),i={1:"1. Evre: Kırmızı Tuğla Mahallesi (4×4 – 6×6)",2:"2. Evre: İmarlı Tarihi Semt (4×4 – 7×7)",3:"3. Evre: Eski Saat Meydanı (5×5 – 7×7)",4:"4. Evre: Sisli Konaklar (5×5 – 8×8)",5:"5. Evre: Büyük Metropol (6×6 – 8×8)"},a=dt(this.stats.equippedFacadeId,this.stats.equippedRoofId),b=Pt(s,this.stats,a,this.stats.equippedRoofId,t,l=>P.findIndex(o=>o.id===l)),m=s.map((l,o)=>{const h=P.findIndex(d=>d.id===l.id),g=this.stats.solvedIds.includes(l.id),k=h<=t||g,$=this.stats.levelStars[l.id]||0,M=xt(g,k,$),E=this.stats.bestTimesSec[l.id],B=l.difficulty==="easy"?"Kolay":l.difficulty==="medium"?"Orta":"Zor",S=M==="gold"?"Lüks Altın Konak":M==="silver"?"Klasik Tuğla Apartman":M==="bronze"?"Mahalle Gecekondusu":M==="active"?"Aktif İnşaat Parseli":"Kilitli Boş Arsa",A=l.challengeKind==="zoning"?'<span class="street-mech-tag zoning">🧱 İmar Kısıtı</span>':l.challengeKind==="fog"?'<span class="street-mech-tag fog">🌫️ Sisli Sokak</span>':"";return{lvl:l,relIdx:o,isCompleted:g,isUnlocked:k,stars:$,tier:M,tierTitle:S,mechPill:A,diffBadge:B,bestSec:E,isLandmark:o===s.length-1}}),w=qt(m,a,this.stats.equippedRoofId,at,z);return`
        <div class="towers-campaign-wrap">
          <div class="towers-campaign-header">
            <div>
              <h2>🏙️ Tuğla Şehir Cadde Seferi (60 Mahalle)</h2>
              <p>Her parsel boş arsa başlar! Bölüm bitince madalyana göre sokağa <b>Gecekondu ★</b>, <b>Apartman ★★</b> veya <b>Lüks Konak ★★★</b> dikilir.</p>
            </div>
            <button id="btn-towers-play-next" class="towers-primary-cta" data-start-campaign="${e.id}">
              ▶️ Sıradaki Parsel: #${z(e.code)} (${z(e.cityName)})
            </button>
          </div>

          <div class="towers-episode-tabs">
            ${[1,2,3,4,5].map(l=>`
              <button type="button" class="towers-ep-btn ${this.selectedEpisode===l?"active":""}" data-towers-ep="${l}">
                ${z(i[l])}
              </button>
            `).join("")}
          </div>

          <section class="towers-street-panorama-card" aria-label="Mahalle Caddesi Silüeti">
            <div class="street-panorama-head">
              <strong>🛣️ ${z(i[this.selectedEpisode]||"")}</strong>
              <div class="street-medal-legend">
                <span>🌱 Arsa</span>
                <span>🥉 Gecekondu (★)</span>
                <span>🥈 Apartman (★★)</span>
                <span>🥇 Lüks Konak (★★★)</span>
              </div>
            </div>
            <div class="street-panorama-frame">
              ${b}
            </div>
          </section>

          <div class="towers-street-route" style="background-image: linear-gradient(180deg, rgba(220, 252, 231, 0.16), rgba(187, 247, 208, 0.24)), url('./towers/candy_park_bg.jpg');">
            ${w}
          </div>
        </div>
      `}if(this.activeTab==="challenges"){const t=ft(),e=$t(t),s=this.stats.weeklyCupKey===t&&Array.isArray(this.stats.weeklyCupScores)?this.stats.weeklyCupScores:[0,0,0];return`
        <div class="towers-challenges-layout">
          <div class="towers-challenge-cards-grid">
            <article class="towers-challenge-card zoning">
              <div class="ch-head">
                <span class="ch-badge">🚧 MEYDAN OKUMA #1</span>
                <strong>Çözülen: ${this.stats.zoningSolvedCount||0}</strong>
              </div>
              <h3>🧱 İmar Kısıtı</h3>
              <p>Belediye imar planına göre bazı parsellere kat tavanı (<code>≤2</code> / <code>≤3</code>) uygulanır. Kısıtlı parselleri aşmadan 5×5 sokağı tamamla!</p>
              <button type="button" id="btn-towers-start-zoning" class="towers-primary-cta">
                🚧 İmar Kısıtı Başlat (5×5)
              </button>
            </article>

            <article class="towers-challenge-card fog">
              <div class="ch-head">
                <span class="ch-badge">🌫️ MEYDAN OKUMA #2</span>
                <strong>Çözülen: ${this.stats.fogSolvedCount||0}</strong>
              </div>
              <h3>🌫️ Sisli Sokak</h3>
              <p>Kenar bakış ipuçlarının bir kısmı yoğun akşam sisi altında (<code>🌫️ ?</code>) gizlenir. Açık ipuçları ve saf mantıkla tüm sokağı çöz!</p>
              <button type="button" id="btn-towers-start-fog" class="towers-primary-cta">
                🌫️ Sisli Sokak Başlat (5×5)
              </button>
            </article>

            <article class="towers-challenge-card survival">
              <div class="ch-head">
                <span class="ch-badge">🪖 MEYDAN OKUMA #3</span>
                <strong>Başarı: ${this.stats.survivalClearsCount||0}</strong>
              </div>
              <h3>🪖 3 Baret Hayatta Kalma</h3>
              <p>Hatasız inşaat disiplini! Her hatalı kat yerleştirme veya satır/sütun çakışması <b>1 Baret</b> götürür. 3 baret bitmeden bloğu bitir!</p>
              <button type="button" id="btn-towers-start-survival" class="towers-primary-cta">
                🪖 3 Baret Başlat (5×5 Zor)
              </button>
            </article>
          </div>

          <section class="towers-cup-panel">
            <div class="towers-cup-head">
              <div>
                <h3>🏆 Haftalık Mimar Kupası (${z(t)})</h3>
                <p>Tüm oyuncularla aynı 3 sabit tohumlu tuğla sokak etabı üzerinden yüksek skor yarışı.</p>
              </div>
              <span class="towers-cup-total">Toplam: ${s[0]+s[1]+s[2]} P</span>
            </div>
            <div class="towers-cup-grid">
              ${e.map(i=>{const a=s[i.index]||0;return`
                    <div class="towers-cup-stage ${a>0?"done":""}">
                      <div class="stage-top"><strong>${i.label}</strong><span>${i.size}×${i.size}</span></div>
                      <small>${z(i.subtitle)}</small>
                      <div class="stage-score">${a>0?`Skor: <b>${a} P</b>`:"Henüz Çözülmedi"}</div>
                      <button type="button" class="towers-city-play-btn" data-towers-cup-stage="${i.index}">
                        ${a>0?"Skoru Geliştir ↻":"Etap Başlat →"}
                      </button>
                    </div>
                  `}).join("")}
            </div>
          </section>
        </div>
      `}if(this.activeTab==="daily"){const t=new Date().toISOString().slice(0,10),e=this.stats.dailyLastSolvedDate===t;return`
        <div class="towers-mode-panel">
          <div class="towers-mode-card">
            <span class="towers-mode-icon">🧱</span>
            <h2>Günlük Tuğla Bina (${t})</h2>
            <p>Her gün ortak <code>TWR-DAILY-${t}</code> tohum koduyla açılan <strong>5×5 Orta</strong> mahalle bulmacası.</p>
            <div class="towers-mode-badges">
              <span>🔥 Seri: <strong>${this.stats.dailyStreak} Gün</strong></span>
              <span>🎁 Ödül: <strong>+135 XP • +2 💠</strong></span>
              <span>Durum: <strong>${e?"✅ Bugün Tamamlandı":"⏳ İnşaat Bekliyor"}</strong></span>
            </div>
            <button id="btn-towers-start-daily" class="towers-primary-cta">📅 Günlük Binayı Başlat (5×5)</button>
          </div>
        </div>
      `}return this.activeTab==="blitz"?`
        <div class="towers-mode-panel">
          <div class="towers-mode-card">
            <span class="towers-mode-icon">⚡</span>
            <h2>Kule Blitz (120 Saniye Hız İnşaatı)</h2>
            <p>2 dakika içinde peş peşe mümkün olduğunca çok 4×4 tuğla mahalle bloğu tamamla.</p>
            <div class="towers-mode-badges">
              <span>🏅 Rekor: <strong>${this.stats.bestBlitzScore} Puan</strong></span>
              <span>⏱️ Süre: <strong>02:00</strong></span>
            </div>
            <button id="btn-towers-start-blitz" class="towers-primary-cta">⚡ 2 Dk Blitz Başlat</button>
          </div>
        </div>
      `:this.activeTab==="endless"?`
        <div class="towers-mode-panel">
          <div class="towers-mode-card">
            <span class="towers-mode-icon">🏗️</span>
            <h2>Sonsuz Tuğla İnşaat</h2>
            <p>4×4 kolay sokaklardan başlayıp dalga ilerledikçe 5×5 ve 6×6 gökdelenlere tırmanan seri modu.</p>
            <div class="towers-mode-badges">
              <span>🏆 Rekor Dalga: <strong>Dalga ${this.stats.bestEndlessWave}</strong></span>
              <span>🎁 Dalga Başına: <strong>+110 XP • +1 💠</strong></span>
            </div>
            <button id="btn-towers-start-endless" class="towers-primary-cta">🏗️ Dalga ${this.endlessWave}'i Başlat</button>
          </div>
        </div>
      `:`
      <div class="towers-mode-panel">
        <div class="towers-mode-card">
          <span class="towers-mode-icon">🎲</span>
          <h2>Serbest Mimari (4×4 – 8×8)</h2>
          <p>İstediğin mahalle boyutunu, zorluk seviyesini ve özel tohum kodunu seçerek tek çözümlü tahta oluştur.</p>
          <div class="towers-custom-form">
            <div class="towers-form-group">
              <label>Mahalle Boyutu</label>
              <div class="towers-pill-row">
                ${[4,5,6,7,8].map(t=>`
                  <button type="button" class="towers-opt-pill ${this.customSize===t?"active":""}" data-custom-size="${t}">
                    ${t}×${t}
                  </button>
                `).join("")}
              </div>
            </div>
            <div class="towers-form-group">
              <label>Zorluk</label>
              <div class="towers-pill-row">
                ${["easy","medium","hard"].map(t=>`
                  <button type="button" class="towers-opt-pill ${this.customDifficulty===t?"active":""}" data-custom-diff="${t}">
                    ${t==="easy"?"🟢 Kolay":t==="medium"?"🟡 Orta":"🔴 Zor"}
                  </button>
                `).join("")}
              </div>
            </div>
            <div class="towers-form-group">
              <label for="inp-towers-custom-seed">Özel Tohum Kodu (Opsiyonel)</label>
              <input id="inp-towers-custom-seed" class="towers-seed-input" type="text" placeholder="Örn: TWR-5-ORTA-2026" value="${z(this.customSeedInput)}" />
            </div>
          </div>
          <button id="btn-towers-start-custom" class="towers-primary-cta">🎲 ${this.customSize}×${this.customSize} İnşaata Başla</button>
        </div>
      </div>
    `}getArchitectSpeechState(t,e,s){var m;const i={char_apprentice:{start:"Arsayı inceledim, köşelere sağlam temeli atalım da rezidans yükselsin!",mid:"Güzel gidiyoruz! Bakalım hangi parsele 4 katlı dikiyoruz?",near:"Son birkaç parsel kaldı, tapuları teslim etmeye hazırız!",hint:"Bak bu kare boş duruyor; dediğim katı tam şuraya dikelim!",warn:"Hop hemşerim! Aynı sırada aynı kattan iki bina yan yana dikilmez.",sight:"Kaldırımdan bakınca öndeki küçük katlar büyük kulenin arkasında gizlenir.",win:"İşte bu! Bu sokağa yaptığım en kârlı proje oldu!"},char_planner:{start:"Vakıf hanı nizamıyla önce en belirgin kenar bakış sayılarını çözelim.",mid:"Satır ve sütun simetrisi harika oturuyor, ölçüyle devam edelim.",near:"Son ince rötuşlar — taş cephe silüetimiz tamamlanmak üzere.",hint:"Cetvel ve gönyeyle hesapladım; bu parsele işaretli kat tam oturuyor.",warn:"Dikkat: Sokak hizasında veya kenar bakışında bir ölçü sapması var.",sight:"Ön cepheden görünen kat sayısı kadar kademeli yükseliş şarttır.",win:"Mükemmel denge ve zarafet — şehrin tarihi dokusu şenlendi."},char_skyline:{start:"Düz bloklar sıkıcı; katları doğanın kendi basamakları gibi dizelim!",mid:"Mozaik taşları yerine oturuyor, her kat silüete renk katıyor.",near:"Az kaldı! Çatılar gökyüzüne doğru kıvrılmaya hazır.",hint:"Görüş ışığı tam bu kareyi işaret ediyor — sıradaki katı koy!",warn:"Burada bir uyumsuzluk var; doğa ve statik kurallar çakışıyor.",sight:"Bakış çizgisinde sadece kendinden öncekinden yüksek kuleler parlar!",win:"Masalsı bir mahalle yarattın — her çatı ayrı bir sanat eseri!"},char_neon:{start:"Görüş akslarını oku; boşluklardaki en yüksek kule yerini ele verecektir.",mid:"Harika akışkanlık — blokların ritmi yavaş yavaş şekilleniyor.",near:"Ufuk çizgisi netleşti, son kuleleri yerleştirip silüeti kilitle.",hint:"Parametrik kesişim noktası belli: önerdiğim katı uygula.",warn:"Çakışma algılandı; yükseklik eğrisini düzeltmemiz gerekiyor.",sight:"Görünen kuleleri tek tek izleyip arkada kalanları eleyebilirsin.",win:"Ufuk çizgisini baştan yazdık — cesur ve kusursuz!"},char_quantum:{start:"İnsan ölçeğinde ferah sokaklar için sabırla önce kesin kareleri bulalım.",mid:"Mahalle nefes almaya başladı; komşu parsellere ışık bırakalım.",near:"Huzurlu bir son dokunuş kaldı, acele etmeden tamamlayalım.",hint:"Bilge bir yaklaşımla bakarsak bu karede başka kat barınamaz.",warn:"Bir kat fazla veya tekrarlı görünüyor; sakince gözden geçirelim.",sight:"Göz hizası ne diyorsa sokak düzeni de ona uymalıdır.",win:"Eline sağlık! Hem ışığı hem sıcaklığı yerinde, yaşanası bir sokak."},char_emperor:{start:"Evlat, önce taşların temel aksını kur; yüksek kubbeler yerini hemen belli eder.",mid:"Mizan ve tenasüp yerli yerinde, sokağın yükü sağlam dağılıyor.",near:"Son taşlar kaldı; bu sokağın da külliyesi tarihe geçecek.",hint:"Hesap şaşmaz: kenar ve sıra dengesine göre buraya tek kat uyar.",warn:"Durakla ve bak evlat; iki aynı boy sütun bir sırada bulunmaz.",sight:"Göz önünden arkaya yükselen her kule sırrını açık eder.",win:"Aferin! Koca Sinan usulünce kusursuz statik ve silüet kurdun!"}},a=i[t]||i.char_apprentice;if(this.activeHint)return{tone:"hint",text:a.hint,winQuote:a.win};if(e)return{tone:"warn",text:a.warn,winQuote:a.win};if(this.activeSightRay)return{tone:"hint",text:a.sight,winQuote:a.win};if(s<=Math.max(3,Math.ceil((((m=this.activePuzzle)==null?void 0:m.size)||4)*.75)))return{tone:"normal",text:a.near,winQuote:a.win};const b=this.activePuzzle?this.activePuzzle.size*this.activePuzzle.size-this.activePuzzle.givens.flat().filter(w=>w>0).length:16;return s<b*.75?{tone:"normal",text:a.mid,winQuote:a.win}:{tone:"normal",text:a.start,winQuote:a.win}}renderBoardScreenHTML(){var S,A;const t=this.activePuzzle,e=t.size,s=ht(t,this.board),i=N.find(d=>d.id===this.stats.equippedCharacterId)||N[0],a=O.find(d=>d.id===this.stats.equippedFacadeId)||O[0],b=O.find(d=>d.id===this.stats.equippedRoofId)||O[5],m=dt(a.id,b.id),w=new Int32Array(e+1);let l=0;for(let d=0;d<e;d++)for(let r=0;r<e;r++){const v=this.board[d][r];v>=1&&v<=e?w[v]++:l++}const o=s.duplicateKeys.size>0||s.zoningViolationKeys.size>0||s.violatedClueKeys.size>0,h=this.getArchitectSpeechState(i.id,o,l),g=new Map;let k="";if(this.activeSightRay){const{side:d,index:r}=this.activeSightRay,v=!!((A=(S=t.hiddenCluesMask)==null?void 0:S[d])!=null&&A[r]),L=v?0:t.clues[d][r],x=[];for(let f=0;f<e;f++){let I=r,q=f;d==="top"?(I=f,q=r):d==="bottom"?(I=e-1-f,q=r):d==="left"?(I=r,q=f):(I=r,q=e-1-f),x.push({r:I,c:q})}const R=Kt(x,this.board,L,d,r);R.visibleCells.forEach(f=>g.set(`${f.r},${f.c}`,"visible")),R.hiddenCells.forEach(f=>g.set(`${f.r},${f.c}`,"blocked")),k=`
        <div class="towers-sight-banner" id="towers-sight-banner">
          <span>👁️ <strong>Görüş Hattı (${d==="top"?`${r+1}. Sütun (Üstten ▾)`:d==="bottom"?`${r+1}. Sütun (Alttan ▴)`:d==="left"?`${r+1}. Satır (Soldan ▸)`:`${r+1}. Satır (Sağdan ◂)`}):</strong> ${v?"Sisli İpucu (?)":`Hedef = <b>${L||"Yok"}</b>`} • <b class="sight-ok">Görüldü: ${R.visibleCells.length}</b> • <b class="sight-hid">Örtüldü: ${R.hiddenCells.length}</b></span>
          <button type="button" id="btn-towers-clear-sight" class="towers-mini-btn">Kapat ✕</button>
        </div>
      `}const $=this.activeMode==="campaign"&&this.activeCampaignLevel?`🏘️ #${this.activeCampaignLevel.code}: ${this.activeCampaignLevel.cityName}`:this.activeMode==="daily"?"🧱 Günlük Bina":this.activeMode==="endless"?`🏗️ Dalga #${this.endlessWave}`:this.activeMode==="blitz"?`⚡ Blitz: ${this.blitzScore} P`:this.activeChallengeKind==="zoning"?"🚧 İmar Kısıtı":this.activeChallengeKind==="fog"?"🌫️ Sisli Sokak":this.activeChallengeKind==="survival"?"🪖 3 Baret Hayatta Kalma":this.activeChallengeKind==="weekly_cup"?`🏆 Kupa Etabı #${(this.activeCupStageIdx??0)+1}`:`🎲 Serbest (${e}×${e})`,M=(d,r)=>{var L,x;if((x=(L=t.hiddenCluesMask)==null?void 0:L[d])!=null&&x[r])return"fogged";const v=`${d}:${r}`;return s.violatedClueKeys.has(v)?"violated":s.satisfiedClueKeys.has(v)?"satisfied":"pending"},E=(d,r,v)=>{var I,q,V,j;const L=!!((q=(I=t.hiddenCluesMask)==null?void 0:I[d])!=null&&q[r]),x=t.clues[d][r],R=M(d,r),T=((V=this.activeSightRay)==null?void 0:V.side)===d&&((j=this.activeSightRay)==null?void 0:j.index)===r,f=L?"🌫️":x>0?String(x):"·";return`
        <button
          type="button"
          class="towers-clue-cell ${d} ${R} ${T?"active-ray":""}"
          data-towers-clue="${d}-${r}"
          title="${L?"Sisli İpucu":"Görüş Hattını Göster / Gizle"}"
        >
          ${d==="right"||d==="bottom"?`<span class="clue-arrow">${v}</span><span class="clue-num">${f}</span>`:`<span class="clue-num">${f}</span><span class="clue-arrow">${v}</span>`}
        </button>
      `},B=!!(this.activeHint||k);return`
      <div class="towers-board-screen ${B?"has-banner":""}" id="towers-board-screen">
        <div class="towers-board-hud">
          <div class="hud-left-btns">
            <button type="button" id="btn-towers-leave-board" class="towers-back-map-btn">⬅️ Menü</button>
            <button type="button" id="btn-towers-pause" class="towers-back-map-btn">${this.isPaused?"▶️ Sürdür":"⏸️ Duraklat"}</button>
          </div>

          <div class="towers-hud-center">
            <span class="towers-hud-title">${z($)}</span>
            <span class="towers-hud-sub">${e}×${e} • ${z(a.name)}</span>
          </div>

          <div class="towers-hud-metrics">
            ${this.activeChallengeKind==="survival"?`<span class="towers-hud-pill survival-lives">${"🪖".repeat(this.survivalLives)}${"⚫".repeat(Math.max(0,3-this.survivalLives))}</span>`:""}
            <span class="towers-hud-pill" id="towers-hud-timer">
              ⏱️ ${this.activeMode==="blitz"?at(this.blitzRemainingSeconds):at(this.elapsedSeconds)}
            </span>
            <button type="button" id="btn-towers-view-toggle" class="towers-hud-pill btn-pill ${this.viewMode==="3d"?"active":""}" title="3D Kule / 2D Sade Görünüm">
              ${this.viewMode==="3d"?"🧊 3D":"▦ 2D"}
            </button>
            <button type="button" id="btn-towers-sight-toggle" class="towers-hud-pill btn-pill ${this.activeSightRay?"active":""}" title="Görüş Hattını İncele (V)">
              👁️ Görüş
            </button>
            ${this.host.isBetaChannel()?'<button type="button" id="btn-towers-beta-lab" class="towers-beta-chip">🧪</button>':""}
          </div>
        </div>

        ${this.activeHint?"":k}

        ${B?"":`<div class="towers-clue-guide-strip" aria-hidden="true">
          <span>👁️ <b>Kenar sayıları:</b> Ok yönünden bakınca görünen bina sayısıdır • Sayıya dokun = görüşü çiz</span>
        </div>`}

        ${this.activeHint?`
          <div class="towers-hint-banner" id="towers-hint-banner">
            <div class="towers-hint-text">
              <span class="hint-kind-pill ${this.activeHint.isCorrection?"fix":"deduce"}">${this.activeHint.isCorrection?"🔧 DÜZELTME":"🔍 İPUCU"}</span>
              <strong>${z(this.activeHint.ruleTitle)}:</strong> ${z(this.activeHint.message)}
            </div>
            <div class="towers-hint-actions">
              <button type="button" id="btn-towers-apply-hint" class="towers-apply-hint-btn">
                🧱 Buraya ${this.activeHint.value} Kat Dik (${this.activeHint.r+1}. Satır, ${this.activeHint.c+1}. Sütun)
              </button>
              <button type="button" id="btn-towers-close-hint" class="towers-mini-btn ghost" title="İpucunu Kapat">✕</button>
            </div>
          </div>
        `:""}

        <div class="towers-stage-wrap">
          ${this.isPaused?`
            <div class="towers-pause-veil">
              <h3>⏸️ Şantiye Duraklatıldı</h3>
              <p>Süre durduruldu. Hazır olduğunda kaldığın yerden devam et.</p>
              <button type="button" id="btn-towers-resume" class="towers-primary-cta">▶️ Devam Et</button>
            </div>
          `:""}
          <div class="towers-stage-row">
            <div class="towers-matrix mode-${this.viewMode}" id="towers-matrix" style="--towers-size: ${e};">
            <div class="towers-corner-spacer"></div>
            ${Array.from({length:e},(d,r)=>E("top",r,"▼")).join("")}
            <div class="towers-corner-spacer"></div>

            ${Array.from({length:e},(d,r)=>{var x;const v=((x=this.board[this.selectedCell.r])==null?void 0:x[this.selectedCell.c])||0,L=Array.from({length:e},(R,T)=>{var p,y,C,H,D,W,U,et,gt,yt,kt;const f=this.board[r][T],I=t.givens[r][T]>0,q=this.selectedCell.r===r&&this.selectedCell.c===T,V=!q&&(r===this.selectedCell.r||T===this.selectedCell.c),j=!q&&f>0&&v>0&&f===v,lt=s.duplicateKeys.has(`${r},${T}`),rt=s.zoningViolationKeys.has(`${r},${T}`),F=((y=(p=t.maxHeightLimits)==null?void 0:p[r])==null?void 0:y[T])||0,X=((C=this.activeHint)==null?void 0:C.r)===r&&((H=this.activeHint)==null?void 0:H.c)===T,ot=!!((D=this.activeHint)!=null&&D.focusLine)&&(((U=(W=this.activeHint)==null?void 0:W.focusLine)==null?void 0:U.kind)==="row"&&this.activeHint.focusLine.index===r||((gt=(et=this.activeHint)==null?void 0:et.focusLine)==null?void 0:gt.kind)==="col"&&this.activeHint.focusLine.index===T),Y=g.get(`${r},${T}`)||"",Z=this.notes[r][T],n=f>0&&((yt=this.lastBuiltCell)==null?void 0:yt.r)===r&&((kt=this.lastBuiltCell)==null?void 0:kt.c)===T;return`
                  <div
                    class="towers-cell ${f>0?"has-tower":"empty"} ${I?"given":""} ${q?"selected":""} ${V?"crosshair-hl":""} ${j?"same-val-hl":""} ${lt||rt?"conflict":""} ${X?"hint-target":""} ${ot&&!X?"hint-focus-line":""} ${F>0?"zoned":""} ${n?"just-built":""} ${Y?`sight-${Y}`:""}"
                    data-towers-cell="${r}-${T}"
                    data-row="${r}"
                    data-col="${T}"
                    data-val="${f}"
                  >
                    ${X&&this.activeHint?`<span class="tower-hint-badge" aria-hidden="true">👇 ${this.activeHint.value}</span>`:""}
                    ${F>0?`<span class="tower-zone-badge" title="İmar Kısıtı: Maksimum ${F} kat">≤${F}</span>`:""}
                    ${f>0?`
                      <div class="tower-pixel-bldg-wrap">
                        ${wt(f,e,m,b.id,{isGiven:I,viewMode:this.viewMode})}
                      </div>
                    `:Z.length>0?`
                      <div class="tower-notes-grid">
                        ${Array.from({length:e},(Vt,Ct)=>{const ct=Ct+1;return`<span class="tower-note-item ${Z.includes(ct)?"on":""}">${Z.includes(ct)?ct:""}</span>`}).join("")}
                      </div>
                    `:""}
                    ${Y==="visible"?'<span class="tower-sight-tag visible" title="Görüldü">👁️</span>':Y==="blocked"?'<span class="tower-sight-tag blocked" title="Önündeki yüksek bina tarafından örtüldü">⬛</span>':""}
                  </div>
                `}).join("");return`${E("left",r,"▶")}${L}${E("right",r,"◀")}`}).join("")}

            <div class="towers-corner-spacer"></div>
            ${Array.from({length:e},(d,r)=>E("bottom",r,"▲")).join("")}
            <div class="towers-corner-spacer"></div>
          </div>

          <aside class="towers-architect-assistant" aria-label="Şantiye Mimarı">
            <div class="arch-assist-head">
              <div class="arch-assist-portrait" style="border-color:${i.accentColor}">
                ${tt(i.id,60)}
              </div>
              <div class="arch-assist-meta">
                <strong>${z(i.name)}</strong>
                <small>${z(i.rarityLabel)}</small>
              </div>
            </div>
            <div class="arch-assist-bubble ${h.tone==="normal"?"":h.tone}">
              “${z(h.text)}”
            </div>
            <div class="arch-assist-cosmetics">
              <span>🧱 ${z(a.name)}</span>
              <span>🏠 ${z(b.name)}</span>
            </div>
          </aside>
          </div>
        </div>

        <div class="towers-controls-dock">
          <div class="towers-numpad" role="group" aria-label="Bina Kat Yüksekliği">
            ${Array.from({length:e},(d,r)=>{const v=r+1,L=Math.max(0,e-w[v]);return`
                <button
                  type="button"
                  class="towers-num-btn ${this.noteMode?"note-active":""} ${L===0?"all-placed":""}"
                  data-towers-num="${v}"
                >
                  <span class="num-main">${v}</span>
                  <span class="num-lbl">${this.noteMode?"Not":L===0?"✓":`×${L}`}</span>
                </button>
              `}).join("")}
          </div>

          <div class="towers-toolpad">
            <button type="button" id="btn-towers-notes-toggle" class="towers-tool-btn ${this.noteMode?"active":""}">
              ✏️ <span>Not: ${this.noteMode?"AÇIK":"KAPALI"}</span>
            </button>
            <button type="button" id="btn-towers-erase" class="towers-tool-btn">⌫ <span>Sil</span></button>
            <button type="button" id="btn-towers-undo" class="towers-tool-btn" ${this.history.length===0?"disabled":""}>↺ <span>Geri</span></button>
            <button type="button" id="btn-towers-redo" class="towers-tool-btn" ${this.redoStack.length===0?"disabled":""}>↻ <span>İleri</span></button>
            <button type="button" id="btn-towers-hint" class="towers-tool-btn highlight">💡 <span>İpucu</span></button>
            <button type="button" id="btn-towers-reset" class="towers-tool-btn danger">🔄 <span>Sıfırla</span></button>
          </div>
        </div>
      </div>
    `}renderActiveModal(){if(!this.activeModal)return"";if(this.activeModal==="tutorial")return Rt({step:this.tutorialStep,miniBoard:this.tutorialMiniBoard,selectedMiniCell:this.tutorialSelectedCell,palId:{facade:this.stats.equippedFacadeId,roof:this.stats.equippedRoofId}});if(this.activeModal==="rules")return Gt();if(this.activeModal==="workshop")return Dt(this.stats);if(this.activeModal==="profile")return Wt(this.stats);if(this.activeModal==="beta-lab")return Ut(this.inBoardView);if(this.activeModal==="gameover")return Nt(this.gameOverReason);if(this.activeModal==="victory"&&this.lastWinSummary){const t=N.find(s=>s.id===this.stats.equippedCharacterId)||N[0],e=this.getArchitectSpeechState(t.id,!1,0);return _t({elapsedSeconds:this.elapsedSeconds,hintsUsed:this.hintsUsedThisGame,challengeKind:this.activeChallengeKind,architect:{id:t.id,name:t.name,title:t.title,accentColor:t.accentColor,winQuote:e.winQuote},summary:this.lastWinSummary})}return""}bindEvents(t){var s,i,a,b,m,w,l,o,h,g,k,$,M,E,B,S,A,d,r,v,L,x,R,T,f,I,q,V,j,lt,rt,F,X,ot,Y,Z;(s=t.querySelector("#btn-towers-back-hub"))==null||s.addEventListener("click",()=>{this.stopTimer(),this.host.onBackToHub()}),(i=t.querySelector("#btn-towers-open-social"))==null||i.addEventListener("click",()=>{var n,p;(p=(n=this.host).onOpenSocialHub)==null||p.call(n)}),(a=t.querySelector("#btn-towers-open-profile"))==null||a.addEventListener("click",()=>{var n,p;(p=(n=this.host).onOpenGlobalProfile)==null||p.call(n)}),(b=t.querySelector("#btn-towers-dock-sfx"))==null||b.addEventListener("click",()=>{var n,p;(p=(n=this.host).onToggleSound)==null||p.call(n),this.render()}),(m=t.querySelector("#btn-towers-dock-music"))==null||m.addEventListener("click",()=>{var n,p;(p=(n=this.host).onToggleMusic)==null||p.call(n),this.render()}),(w=t.querySelector("#btn-towers-quit"))==null||w.addEventListener("click",()=>{var n,p;(p=(n=this.host).onQuitApp)==null||p.call(n)}),(l=t.querySelector("#btn-towers-tutorial"))==null||l.addEventListener("click",()=>{this.tutorialStep=1,this.tutorialMiniBoard=nt.map(n=>[...n]),this.tutorialSelectedCell={r:0,c:1},this.activeModal="tutorial",this.render()}),(o=t.querySelector("#btn-towers-rules"))==null||o.addEventListener("click",()=>{this.activeModal="rules",this.render()}),(h=t.querySelector("#btn-towers-workshop"))==null||h.addEventListener("click",()=>{this.activeModal="workshop",this.render()}),(g=t.querySelector("#btn-towers-profile"))==null||g.addEventListener("click",()=>{this.activeModal="profile",this.render()}),(k=t.querySelector("#btn-towers-settings"))==null||k.addEventListener("click",()=>{this.host.onOpenGlobalSettings()}),($=t.querySelector("#btn-towers-beta-lab"))==null||$.addEventListener("click",()=>{this.activeModal="beta-lab",this.render()}),(M=t.querySelector("#btn-towers-close-modal"))==null||M.addEventListener("click",()=>{this.activeModal=null,this.render()}),t.querySelectorAll("[data-tut-step]").forEach(n=>{n.addEventListener("click",()=>{this.tutorialStep=Number(n.dataset.tutStep)||1,this.render()})}),t.querySelectorAll("[data-tut-cell]").forEach(n=>{n.addEventListener("click",()=>{var D,W,U;const[p,y]=(n.dataset.tutCell||"0-0").split("-"),C=Number(p)||0,H=Number(y)||0;((D=nt[C])==null?void 0:D[H])>0||(this.tutorialSelectedCell={r:C,c:H},(U=(W=this.host).playSound)==null||U.call(W,"click"),this.render())})}),t.querySelectorAll("[data-tut-num]").forEach(n=>{n.addEventListener("click",()=>{var H,D,W,U,et;const p=Number(n.dataset.tutNum)||0,{r:y,c:C}=this.tutorialSelectedCell;((H=nt[y])==null?void 0:H[C])>0||(this.tutorialMiniBoard[y][C]=p,p>0?(W=(D=this.host).playSound)==null||W.call(D,"place",{floors:p,maxFloors:3}):(et=(U=this.host).playSound)==null||et.call(U,"erase"),this.render())})}),(E=t.querySelector("#btn-towers-tutorial-next"))==null||E.addEventListener("click",()=>{this.tutorialStep=Math.min(3,this.tutorialStep+1),this.render()}),(B=t.querySelector("#btn-towers-tutorial-practice"))==null||B.addEventListener("click",()=>{this.activeModal=null;const n=P[0],p=G(n.size,n.difficulty,n.seed,{id:n.id,title:n.cityName,code:n.code});this.startPuzzleSession(p,"campaign",n)}),t.querySelectorAll("[data-towers-tab]").forEach(n=>{n.addEventListener("click",()=>{var y,C;const p=n.dataset.towersTab;p&&(this.activeTab=p,(C=(y=this.host).playSound)==null||C.call(y,"click"),this.render())})}),t.querySelectorAll("[data-towers-ep]").forEach(n=>{n.addEventListener("click",()=>{this.selectedEpisode=Number(n.dataset.towersEp)||1,this.render()})}),t.querySelectorAll("[data-start-campaign]").forEach(n=>{n.addEventListener("click",()=>{const p=n.dataset.startCampaign,y=P.find(H=>H.id===p);if(!y)return;const C=y.challengeKind==="zoning"||y.challengeKind==="fog"?it(y.challengeKind,y.size,y.difficulty,y.seed,{id:y.id,title:y.cityName,code:y.code}):G(y.size,y.difficulty,y.seed,{id:y.id,title:y.cityName,code:y.code});this.startPuzzleSession(C,"campaign",y)})}),(S=t.querySelector("#btn-towers-start-zoning"))==null||S.addEventListener("click",()=>{const n=it("zoning",5,"medium",`TWR-ZONE-${Date.now()}`);this.startPuzzleSession(n,"challenge")}),(A=t.querySelector("#btn-towers-start-fog"))==null||A.addEventListener("click",()=>{const n=it("fog",5,"medium",`TWR-FOG-${Date.now()}`);this.startPuzzleSession(n,"challenge")}),(d=t.querySelector("#btn-towers-start-survival"))==null||d.addEventListener("click",()=>{const n=it("survival",5,"hard",`TWR-SURV-${Date.now()}`);this.startPuzzleSession(n,"challenge")}),t.querySelectorAll("[data-towers-cup-stage]").forEach(n=>{n.addEventListener("click",()=>{const p=Number(n.dataset.towersCupStage);if(p!==0&&p!==1&&p!==2)return;const C=$t()[p],H=it(C.challengeKind==="zoning"?"zoning":"weekly_cup",C.size,C.difficulty,C.seed,{id:C.seed,title:`🏆 ${C.label}: ${C.subtitle}`});H.challengeKind="weekly_cup",this.startPuzzleSession(H,"challenge",null,{cupStageIdx:p})})}),(r=t.querySelector("#btn-towers-start-daily"))==null||r.addEventListener("click",()=>{const n=new Date().toISOString().slice(0,10),p=G(5,"medium",`TWR-DAILY-${n}`);this.startPuzzleSession(p,"daily")}),(v=t.querySelector("#btn-towers-start-endless"))==null||v.addEventListener("click",()=>{const n=this.endlessWave<=2?4:this.endlessWave<=5?5:6,p=this.endlessWave<=2?"easy":this.endlessWave<=6?"medium":"hard",y=G(n,p,`TWR-ENDLESS-W${this.endlessWave}-${Date.now()}`);this.startPuzzleSession(y,"endless")}),(L=t.querySelector("#btn-towers-start-blitz"))==null||L.addEventListener("click",()=>{const n=G(4,"easy",`TWR-BLITZ-${Date.now()}-0`);this.startPuzzleSession(n,"blitz")}),t.querySelectorAll("[data-custom-size]").forEach(n=>{n.addEventListener("click",()=>{this.customSize=Number(n.dataset.customSize)||4,this.render()})}),t.querySelectorAll("[data-custom-diff]").forEach(n=>{n.addEventListener("click",()=>{this.customDifficulty=n.dataset.customDiff||"easy",this.render()})});const e=t.querySelector("#inp-towers-custom-seed");e==null||e.addEventListener("input",()=>{this.customSeedInput=e.value}),(x=t.querySelector("#btn-towers-start-custom"))==null||x.addEventListener("click",()=>{const n=this.customSeedInput.trim()||`TWR-CUSTOM-${this.customSize}-${this.customDifficulty}-${Date.now()}`,p=G(this.customSize,this.customDifficulty,n);this.startPuzzleSession(p,"custom")}),(R=t.querySelector("#btn-towers-leave-board"))==null||R.addEventListener("click",()=>{this.stopTimer(),this.inBoardView=!1,this.isPaused=!1,this.render()}),(T=t.querySelector("#btn-towers-pause"))==null||T.addEventListener("click",()=>{this.isPaused=!this.isPaused,this.render()}),(f=t.querySelector("#btn-towers-resume"))==null||f.addEventListener("click",()=>{this.isPaused=!1,this.render()}),(I=t.querySelector("#btn-towers-view-toggle"))==null||I.addEventListener("click",()=>{this.toggleViewMode()}),(q=t.querySelector("#btn-towers-sight-toggle"))==null||q.addEventListener("click",()=>{this.toggleSightRayFromSelection()}),t.querySelectorAll("[data-towers-cell]").forEach(n=>{n.addEventListener("click",()=>{this.lastBuiltCell=null,this.selectedCell={r:Number(n.dataset.row)||0,c:Number(n.dataset.col)||0},this.render()})}),t.querySelectorAll("[data-towers-clue]").forEach(n=>{n.addEventListener("click",()=>{const p=n.dataset.towersClue||"",[y,C]=p.split("-"),H=Number(C)||0;this.activeSightRay&&this.activeSightRay.side===y&&this.activeSightRay.index===H?this.activeSightRay=null:this.activeSightRay={side:y,index:H},this.render()})}),(V=t.querySelector("#btn-towers-clear-sight"))==null||V.addEventListener("click",()=>{this.activeSightRay=null,this.render()}),t.querySelectorAll("[data-towers-num]").forEach(n=>{n.addEventListener("click",()=>{const p=Number(n.dataset.towersNum)||1;this.handleNumberInput(p)})}),(j=t.querySelector("#btn-towers-notes-toggle"))==null||j.addEventListener("click",()=>{this.noteMode=!this.noteMode,this.render()}),(lt=t.querySelector("#btn-towers-erase"))==null||lt.addEventListener("click",()=>this.handleEraseInput()),(rt=t.querySelector("#btn-towers-undo"))==null||rt.addEventListener("click",()=>this.handleUndo()),(F=t.querySelector("#btn-towers-redo"))==null||F.addEventListener("click",()=>this.handleRedo()),(X=t.querySelector("#btn-towers-hint"))==null||X.addEventListener("click",()=>this.handleSmartHint()),(ot=t.querySelector("#btn-towers-apply-hint"))==null||ot.addEventListener("click",()=>this.applyActiveHintMove()),(Y=t.querySelector("#btn-towers-close-hint"))==null||Y.addEventListener("click",()=>{this.activeHint=null,this.activeSightRay=null,this.render()}),(Z=t.querySelector("#btn-towers-reset"))==null||Z.addEventListener("click",()=>{!this.activePuzzle||this.isPaused||(this.pushHistory(),this.board=J(this.activePuzzle.givens),this.notes=Array.from({length:this.activePuzzle.size},()=>Array.from({length:this.activePuzzle.size},()=>[])),this.activeHint=null,this.lastBuiltCell=null,this.render())}),this.bindWorkshopAndMetaModals(t)}bindWorkshopAndMetaModals(t){var e,s,i,a,b,m,w;t.querySelectorAll("[data-buy-char]").forEach(l=>{l.addEventListener("click",()=>{var g,k;const o=l.dataset.buyChar,h=N.find($=>$.id===o);!h||this.stats.blueprintGems<h.costGems||(this.stats.blueprintGems-=h.costGems,this.stats.unlockedCharacterIds.includes(o)||this.stats.unlockedCharacterIds.push(o),this.stats.equippedCharacterId=o,this.stats.cosmeticsUpdatedAt=Date.now(),st(this.stats),(k=(g=this.host).onCloudStateChanged)==null||k.call(g,!1),this.render())})}),t.querySelectorAll("[data-equip-char]").forEach(l=>{l.addEventListener("click",()=>{var h,g;const o=l.dataset.equipChar;this.stats.unlockedCharacterIds.includes(o)&&(this.stats.equippedCharacterId=o,this.stats.cosmeticsUpdatedAt=Date.now(),st(this.stats),(g=(h=this.host).onCloudStateChanged)==null||g.call(h,!1),this.render())})}),t.querySelectorAll("[data-buy-cosmetic]").forEach(l=>{l.addEventListener("click",()=>{var g,k;const o=l.dataset.buyCosmetic,h=O.find($=>$.id===o);!h||this.stats.blueprintGems<h.costGems||(this.stats.blueprintGems-=h.costGems,this.stats.unlockedCosmeticIds.includes(o)||this.stats.unlockedCosmeticIds.push(o),h.slot==="facade"?this.stats.equippedFacadeId=o:this.stats.equippedRoofId=o,this.stats.cosmeticsUpdatedAt=Date.now(),st(this.stats),(k=(g=this.host).onCloudStateChanged)==null||k.call(g,!1),this.render())})}),t.querySelectorAll("[data-equip-cosmetic]").forEach(l=>{l.addEventListener("click",()=>{var g,k;const o=l.dataset.equipCosmetic,h=O.find($=>$.id===o);h&&(h.slot==="facade"?this.stats.equippedFacadeId=o:this.stats.equippedRoofId=o,this.stats.cosmeticsUpdatedAt=Date.now(),st(this.stats),(k=(g=this.host).onCloudStateChanged)==null||k.call(g,!1),this.render())})}),(e=t.querySelector("#btn-towers-preset-max"))==null||e.addEventListener("click",()=>{this.stats=pt("unlock_all"),this.activeModal=null,this.render()}),(s=t.querySelector("#btn-towers-preset-mid"))==null||s.addEventListener("click",()=>{this.stats=pt("classic_sandbox"),this.activeModal=null,this.render()}),(i=t.querySelector("#btn-towers-preset-reset"))==null||i.addEventListener("click",()=>{this.stats=pt("fresh_lvl1"),this.activeModal=null,this.render()}),(a=t.querySelector("#btn-towers-instant-solve"))==null||a.addEventListener("click",()=>{this.activePuzzle&&(this.activeModal=null,this.board=J(this.activePuzzle.solution),this.checkWinAfterMove(),this.render())}),(b=t.querySelector("#btn-towers-retry-board"))==null||b.addEventListener("click",()=>{this.activePuzzle&&(this.activeModal=null,this.startPuzzleSession(this.activePuzzle,this.activeMode,this.activeCampaignLevel,{resetSeries:!0,cupStageIdx:this.activeCupStageIdx}))}),(m=t.querySelector("#btn-towers-win-map"))==null||m.addEventListener("click",()=>{this.activeModal=null,this.inBoardView=!1,this.render()}),(w=t.querySelector("#btn-towers-win-next"))==null||w.addEventListener("click",()=>{if(this.activeModal=null,this.activeMode==="campaign"&&this.activeCampaignLevel){const l=P.findIndex(g=>g.id===this.activeCampaignLevel.id),o=P[Math.min(P.length-1,l+1)];this.selectedEpisode=o.episode;const h=G(o.size,o.difficulty,o.seed,{id:o.id,title:o.cityName,code:o.code});this.startPuzzleSession(h,"campaign",o)}else if(this.activeMode==="endless"){const l=this.endlessWave<=2?4:this.endlessWave<=5?5:6,o=this.endlessWave<=2?"easy":this.endlessWave<=6?"medium":"hard",h=G(l,o,`TWR-ENDLESS-W${this.endlessWave}-${Date.now()}`);this.startPuzzleSession(h,"endless")}else this.inBoardView=!1,this.render()})}}class Yt{constructor(){c(this,"id","towers");c(this,"title","Towers");c(this,"sceneTheme","brick-city");c(this,"controller",null);c(this,"host",null)}mount(t,e){this.unmount(),this.host=e;const s={getUsername:()=>e.getUsername(),getPilotTag:()=>e.getPilotTag(),isBetaChannel:()=>e.isBetaChannel,getCloudSynced:()=>{var i;return((i=e.getCloudSynced)==null?void 0:i.call(e))??!1},canQuit:()=>{var i;return((i=e.canQuit)==null?void 0:i.call(e))??!1},renderTitlebar:()=>{var i;return((i=e.renderTitlebar)==null?void 0:i.call(e))??""},bindTitlebarEvents:()=>{var i;return(i=e.bindTitlebarEvents)==null?void 0:i.call(e)},onBackToHub:()=>e.returnToHub(),onOpenGlobalSettings:()=>e.openGlobalSettings(),onOpenGlobalProfile:()=>{var i;return(i=e.openGlobalProfile)==null?void 0:i.call(e)},onOpenSocialHub:()=>e.openSocialHub({pauseActiveGame:!0}),getSocialAttentionCount:()=>{var i;return((i=e.getSocialAttentionCount)==null?void 0:i.call(e))??0},getAudioSettings:()=>{var i;return((i=e.getAudioSettings)==null?void 0:i.call(e))??{soundEnabled:_.soundEnabled,musicEnabled:_.musicEnabled}},onToggleSound:()=>{var i;return(i=e.toggleSound)==null?void 0:i.call(e)},onToggleMusic:()=>{var i;return(i=e.toggleMusic)==null?void 0:i.call(e)},onCloudStateChanged:i=>{var a;return(a=e.onCloudStateChanged)==null?void 0:a.call(e,i)},onQuitApp:()=>{var i;return(i=e.quitApp)==null?void 0:i.call(e)},playSound:(i,a)=>{i==="error"?_.playLockedBarrier():i==="win"?_.playVictory():i==="hint"?_.playGalaxyComplete(1):i==="erase"?_.playTrowelErase():i==="place"?_.playBrickPlace((a==null?void 0:a.floors)||2,(a==null?void 0:a.maxFloors)||6):_.playConsoleButton()}};this.controller=new Ot(s),this.controller.mount(t),e.setAudioScene(this.sceneTheme)}unmount(){this.controller&&(this.controller.destroy(),this.controller=null),this.host=null}refreshHostState(){var t;(t=this.controller)==null||t.syncStatsFromStorageAndRefresh()}onPauseForOverlay(){var t;(t=this.controller)==null||t.pauseIfPlaying()}handleBackNavigation(){return!this.controller||!this.host?!1:(this.controller.handleBackNavigation()||this.host.returnToHub(),!0)}}export{Yt as TowersPlugin};
