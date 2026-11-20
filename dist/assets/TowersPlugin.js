var ft=Object.defineProperty;var $t=(d,t,e)=>t in d?ft(d,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):d[t]=e;var c=(d,t,e)=>$t(d,typeof t!="symbol"?t+"":t,e);import{g as ot,r as mt,T as j,A as V,a as Z,b as zt,c as kt,d as bt,l as ct,v as ut,e as Ct,f as D,h as Et,s as st,i as Y,j as yt,k as gt,m as Tt,n as B,o as Mt,p as Lt,q as At,t as wt,u as Bt,w as at,x as ht,y as Ht,z as O}from"./app.js";function P(d){return d.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function Pt(d){const t=Math.max(0,Math.floor(d)),e=Math.floor(t/60),s=t%60;return`${String(e).padStart(2,"0")}:${String(s).padStart(2,"0")}`}const pt=[[1,3,2],[2,1,3],[3,2,1]],nt=[[1,0,0],[2,1,0],[3,0,1]];function qt(d){const{step:t,miniBoard:e,selectedMiniCell:s,palId:a}=d,n=ot(a.facade,a.roof),b=e.every((r,l)=>r.every((h,v)=>h===pt[l][v])),m=[3,1,2],y=[2,2,1];return`
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
                ${m.map(r=>`<div class="mini-clue"><b>${r}</b><small>▾</small></div>`).join("")}
                ${[0,1,2].map(r=>`
                  <div class="mini-clue"><b>${y[r]}</b><small>▸</small></div>
                  ${[0,1,2].map(l=>{var E;const h=((E=e[r])==null?void 0:E[l])||0,v=nt[r][l]>0,$=s.r===r&&s.c===l,C=h>0&&h===pt[r][l],z=h>0&&h!==pt[r][l];return`
                        <button
                          type="button"
                          class="mini-cell ${v?"fixed":""} ${$?"selected":""} ${z?"wrong":C?"correct":""}"
                          data-tut-cell="${r}-${l}"
                        >
                          ${h>0?`<div class="mini-bldg-box">${mt(h,3,n,"roof_flat")}<span class="mini-bldg-num">${h}</span></div>`:'<span class="mini-empty-plus">+</span>'}
                        </button>
                      `}).join("")}
                `).join("")}
              </div>

              <div class="towers-tut-num-row">
                ${[1,2,3].map(r=>`
                  <button type="button" class="towers-mini-num-btn" data-tut-num="${r}">
                    🧱 ${r} Kat
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
  `}function Kt(){return`
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
  `}function xt(d){const t=j.filter(s=>s.slot==="facade"),e=j.filter(s=>s.slot==="roof");return`
    <div class="towers-modal-backdrop" id="towers-workshop-modal">
      <div class="towers-modal-card towers-workshop-card wide">
        <div class="towers-modal-head workshop-head">
          <div>
            <h3>🏛️ Mimarlık Bürosu &amp; Cephe Tasarımı</h3>
            <p>Şantiye mimarını seç, binalarının tuğla rengini ve çatı silüetini değiştir.</p>
          </div>
          <div class="towers-modal-balance">
            <span class="balance-pill">💠 <strong>${d.blueprintGems}</strong></span>
            <button id="btn-towers-close-modal" class="towers-close-btn">✕</button>
          </div>
        </div>

        <div class="towers-modal-body">
          <h4 class="towers-section-sub">🏛️ Ünlü Mimarlar &amp; Müteahhitler (Efsaneviye Uzanan Kadro)</h4>
          <div class="towers-workshop-grid">
            ${V.map(s=>{const a=d.unlockedCharacterIds.includes(s.id),n=d.equippedCharacterId===s.id,b=d.blueprintGems>=s.costGems;return`
                <div class="towers-shop-item rarity-${s.rarity} ${n?"equipped":""}">
                  <div class="towers-shop-head-row">
                    <div class="towers-shop-avatar" style="border-color:${s.accentColor}">
                      ${Z(s.id,62)}
                    </div>
                    <div class="towers-shop-info">
                      <span class="rarity-pill rarity-${s.rarity}">${P(s.rarityLabel)}</span>
                      <strong>${P(s.name)}</strong>
                      <span class="role">${P(s.title)}</span>
                      <span class="perk">🧱 İnşaat Ustalığı +${s.powerScore}</span>
                    </div>
                  </div>
                  <p class="towers-shop-desc">${P(s.description)}</p>
                  <div class="towers-shop-action">
                    ${n?'<button class="towers-shop-btn equipped" disabled>✅ Aktif Mimar</button>':a?`<button class="towers-shop-btn equip" data-equip-char="${s.id}">👷 Göreve Getir</button>`:`<button class="towers-shop-btn buy" data-buy-char="${s.id}" ${b?"":"disabled"}>🔓 Aç (💠 ${s.costGems})</button>`}
                  </div>
                </div>
              `}).join("")}
          </div>

          <h4 class="towers-section-sub">🧱 Bina Cephe Stilleri (Tahtada Renk &amp; Doku Değiştirir)</h4>
          <div class="towers-workshop-grid">
            ${t.map(s=>{const a=d.unlockedCosmeticIds.includes(s.id),n=d.equippedFacadeId===s.id,b=d.blueprintGems>=s.costGems,m=ot(s.id,d.equippedRoofId);return`
                  <div class="towers-shop-item ${n?"equipped":""}">
                    <div class="towers-shop-head-row">
                      <div class="towers-shop-swatch brick-preview">
                        ${mt(4,5,m,d.equippedRoofId)}
                      </div>
                      <div class="towers-shop-info">
                        <strong>${P(s.name)}</strong>
                        <span class="role">🧱 Tuğla &amp; Taş Kaplama</span>
                      </div>
                    </div>
                    <p class="towers-shop-desc">${P(s.description)}</p>
                    <div class="towers-shop-action">
                      ${n?'<button class="towers-shop-btn equipped" disabled>✅ Kullanımda</button>':a?`<button class="towers-shop-btn equip" data-equip-cosmetic="${s.id}">🎨 Cepheye Uygula</button>`:`<button class="towers-shop-btn buy" data-buy-cosmetic="${s.id}" ${b?"":"disabled"}>🔓 Aç (💠 ${s.costGems})</button>`}
                    </div>
                  </div>
                `}).join("")}
          </div>

          <h4 class="towers-section-sub">🏰 Çatı Tasarımları &amp; Şehir Tepeleri</h4>
          <div class="towers-workshop-grid">
            ${e.map(s=>{const a=d.unlockedCosmeticIds.includes(s.id),n=d.equippedRoofId===s.id,b=d.blueprintGems>=s.costGems;return`
                  <div class="towers-shop-item ${n?"equipped":""}">
                    <div class="towers-shop-head-row">
                      <div class="towers-shop-swatch brick-preview roof-preview" style="border-color:${s.primaryColor}">
                        ${zt(s.id,46)}
                      </div>
                      <div class="towers-shop-info">
                        <strong>${P(s.name)}</strong>
                        <span class="role">🏠 Çatı Silüeti</span>
                      </div>
                    </div>
                    <p class="towers-shop-desc">${P(s.description)}</p>
                    <div class="towers-shop-action">
                      ${n?'<button class="towers-shop-btn equipped" disabled>✅ Kullanımda</button>':a?`<button class="towers-shop-btn equip" data-equip-cosmetic="${s.id}">🏠 Çatıya Tak</button>`:`<button class="towers-shop-btn buy" data-buy-cosmetic="${s.id}" ${b?"":"disabled"}>🔓 Aç (💠 ${s.costGems})</button>`}
                    </div>
                  </div>
                `}).join("")}
          </div>
        </div>
      </div>
    </div>
  `}function It(d){const t=kt(d.architectXp),e=Object.values(d.bestTimesSec),s=e.length>0?Math.min(...e):null;return`
    <div class="towers-modal-backdrop" id="towers-profile-modal">
      <div class="towers-modal-card wide">
        <div class="towers-modal-head">
          <h3>🏆 Towers Başarımlar &amp; İstatistikler (LVL ${t.level} • ${P(t.title)})</h3>
          <button id="btn-towers-close-modal" class="towers-close-btn">✕</button>
        </div>
        <div class="towers-modal-body">
          <div class="towers-stats-summary-grid">
            <div class="towers-stat-box"><span>Çözülen Blok</span><strong>${d.totalSolved}</strong></div>
            <div class="towers-stat-box"><span>Toplam Puan</span><strong>${d.totalPoints}</strong></div>
            <div class="towers-stat-box"><span>En Hızlı Blok</span><strong>${s!==null?`${s} sn`:"—"}</strong></div>
            <div class="towers-stat-box"><span>İmar / Sis / Baret</span><strong>${(d.zoningSolvedCount||0)+(d.fogSolvedCount||0)+(d.survivalClearsCount||0)}</strong></div>
          </div>

          <h4 class="towers-section-sub">🎖️ Towers Başarımları (${d.unlockedAchievements.length} / ${bt.length})</h4>
          <div class="towers-ach-grid">
            ${bt.map(a=>`
                <div class="towers-ach-card ${d.unlockedAchievements.includes(a.id)?"unlocked":"locked"}">
                  <span class="ach-icon">${a.icon}</span>
                  <div>
                    <strong>${P(a.title)}</strong>
                    <p>${P(a.description)}</p>
                  </div>
                </div>
              `).join("")}
          </div>
        </div>
      </div>
    </div>
  `}function Rt(d){return`
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
            ${d?`
              <button id="btn-towers-instant-solve" class="towers-primary-cta">
                ⚡ Aktif Sokağı Anında Çöz (Beta Test)
              </button>
            `:""}
          </div>
        </div>
      </div>
    </div>
  `}function Gt(d){const{elapsedSeconds:t,hintsUsed:e,summary:s,challengeKind:a,architect:n}=d;return`
    <div class="towers-modal-backdrop" id="towers-victory-modal">
      <div class="towers-modal-card victory">
        <div class="towers-victory-stars">${Array.from({length:3},(m,y)=>y<s.starsEarned?'<span class="star-on">★</span>':'<span class="star-off">☆</span>').join("")}</div>
        <h2>🧱 İnşaat Tamamlandı!</h2>
        <p>
          Süre: <strong>${Pt(t)}</strong> • Kullanılan İpucu: <strong>${e}</strong>
        </p>

        ${n?`
          <div class="towers-victory-arch-strip">
            <div class="towers-victory-arch-portrait" style="border-color:${n.accentColor}">
              ${Z(n.id,52)}
            </div>
            <div class="towers-victory-arch-quote">
              <strong>${P(n.name)}</strong>
              <span>“${P(n.winQuote)}”</span>
            </div>
          </div>
        `:""}

        <div class="towers-victory-rewards">
          <div class="reward-pill">✨ +${s.xpGain} Mimar XP</div>
          <div class="reward-pill">💠 +${s.blueprintGain} Proje Kristali</div>
          ${a==="weekly_cup"&&s.cupScore?`<div class="reward-pill">🏆 Kupa Puanı: ${s.cupScore}</div>`:""}
        </div>

        ${s.leveledUp?'<div class="towers-levelup-banner">🎉 MİMAR SEVİYESİ YÜKSELDİ!</div>':""}
        ${s.newlyUnlockedAchievements.length>0?`<div class="towers-ach-unlock-strip">🏅 Yeni Başarım: ${s.newlyUnlockedAchievements.map(m=>`${m.icon} ${P(m.title)}`).join(" • ")}</div>`:""}

        <div class="towers-victory-actions">
          <button id="btn-towers-win-next" class="towers-primary-cta">➡️ Devam Et / Sıradaki Sokak</button>
          <button id="btn-towers-win-map" class="towers-secondary-cta">🏙️ Haritaya Dön</button>
        </div>
      </div>
    </div>
  `}function Dt(d){return`
    <div class="towers-modal-backdrop" id="towers-gameover-modal">
      <div class="towers-modal-card victory">
        <div class="towers-victory-stars">🪖✖️</div>
        <h2>🚧 Şantiye Durduruldu!</h2>
        <p>${P(d)}</p>
        <div class="towers-victory-actions">
          <button id="btn-towers-retry-board" class="towers-primary-cta">🔄 Tekrar Dene</button>
          <button id="btn-towers-win-map" class="towers-secondary-cta">🏙️ Şehir Menüsüne Dön</button>
        </div>
      </div>
    </div>
  `}function S(d){return d.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function it(d){const t=Math.max(0,Math.floor(d)),e=Math.floor(t/60),s=t%60;return`${String(e).padStart(2,"0")}:${String(s).padStart(2,"0")}`}function X(d){return d.map(t=>[...t])}function vt(d){return d.map(t=>t.map(e=>[...e]))}class Wt{constructor(t){c(this,"host");c(this,"stats");c(this,"activeTab","campaign");c(this,"selectedEpisode",1);c(this,"activeModal",null);c(this,"tutorialStep",1);c(this,"tutorialMiniBoard",nt.map(t=>[...t]));c(this,"tutorialSelectedCell",{r:0,c:1});c(this,"customSize",4);c(this,"customDifficulty","easy");c(this,"customSeedInput","");c(this,"inBoardView",!1);c(this,"isPaused",!1);c(this,"activePuzzle",null);c(this,"activeMode","campaign");c(this,"activeChallengeKind","standard");c(this,"activeCupStageIdx",null);c(this,"activeCampaignLevel",null);c(this,"board",[]);c(this,"notes",[]);c(this,"history",[]);c(this,"redoStack",[]);c(this,"selectedCell",{r:0,c:0});c(this,"noteMode",!1);c(this,"activeHint",null);c(this,"activeSightRay",null);c(this,"lastBuiltCell",null);c(this,"buildAnimSeq",0);c(this,"hintsUsedThisGame",0);c(this,"elapsedSeconds",0);c(this,"timerHandle",null);c(this,"gameWon",!1);c(this,"gameOverReason","");c(this,"endlessWave",1);c(this,"blitzRemainingSeconds",120);c(this,"blitzScore",0);c(this,"blitzSolvedCount",0);c(this,"survivalLives",3);c(this,"survivalStreak",0);c(this,"lastWinSummary",null);c(this,"keydownHandler",null);c(this,"resizeHandler",null);c(this,"lastDesktopMode",typeof window<"u"?window.innerWidth>=900:!0);c(this,"mountEl",null);this.host=t,this.stats=ct()}reloadStats(){this.stats=ct()}getStats(){return this.stats}pauseIfPlaying(){this.inBoardView&&!this.gameWon&&!this.isPaused&&(this.isPaused=!0,this.render())}syncStatsFromStorage(){this.stats=ct()}handleBackNavigation(){return this.activeModal!==null?(this.activeModal=null,this.render(),!0):this.inBoardView?this.isPaused?(this.isPaused=!1,this.render(),!0):(this.stopTimer(),this.inBoardView=!1,this.render(),!0):!1}destroy(){this.stopTimer(),this.keydownHandler&&(window.removeEventListener("keydown",this.keydownHandler),this.keydownHandler=null),this.resizeHandler&&(window.removeEventListener("resize",this.resizeHandler),this.resizeHandler=null)}stopTimer(){this.timerHandle!==null&&(window.clearInterval(this.timerHandle),this.timerHandle=null)}startTimer(){this.stopTimer(),this.timerHandle=window.setInterval(()=>{if(!this.inBoardView||this.gameWon||this.isPaused||this.activeModal!==null)return;if(this.elapsedSeconds+=1,this.activeMode==="blitz"&&(this.blitzRemainingSeconds=Math.max(0,this.blitzRemainingSeconds-1),this.blitzRemainingSeconds<=0)){this.stopTimer(),this.inBoardView=!1,this.render();return}const t=document.getElementById("towers-hud-timer");t&&(t.textContent=this.activeMode==="blitz"?`⏱️ ${it(this.blitzRemainingSeconds)}`:`⏱️ ${it(this.elapsedSeconds)}`)},1e3)}mount(t){this.mountEl=t,this.reloadStats(),this.attachKeyboardListener(),this.attachResizeListener(),this.renderInto(t)}render(){const t=this.mountEl||document.getElementById("towers-mount-root")||document.getElementById("app");t&&this.renderInto(t)}attachResizeListener(){this.resizeHandler&&window.removeEventListener("resize",this.resizeHandler),this.resizeHandler=()=>{const t=window.innerWidth>=900;t!==this.lastDesktopMode&&(this.lastDesktopMode=t,this.render())},window.addEventListener("resize",this.resizeHandler)}attachKeyboardListener(){this.keydownHandler&&window.removeEventListener("keydown",this.keydownHandler),this.keydownHandler=t=>{if(!this.inBoardView||!this.activePuzzle||this.activeModal!==null||this.isPaused||document.activeElement&&["INPUT","TEXTAREA"].includes(document.activeElement.tagName))return;const e=this.activePuzzle.size;if(t.key==="ArrowUp")t.preventDefault(),this.selectedCell.r=(this.selectedCell.r-1+e)%e,this.render();else if(t.key==="ArrowDown")t.preventDefault(),this.selectedCell.r=(this.selectedCell.r+1)%e,this.render();else if(t.key==="ArrowLeft")t.preventDefault(),this.selectedCell.c=(this.selectedCell.c-1+e)%e,this.render();else if(t.key==="ArrowRight")t.preventDefault(),this.selectedCell.c=(this.selectedCell.c+1)%e,this.render();else if(t.key.toLowerCase()==="n")t.preventDefault(),this.noteMode=!this.noteMode,this.render();else if(t.key.toLowerCase()==="v")t.preventDefault(),this.toggleSightRayFromSelection();else if(t.key==="Backspace"||t.key==="Delete"||t.key==="0")t.preventDefault(),this.handleEraseInput();else if((t.ctrlKey||t.metaKey)&&t.key.toLowerCase()==="z")t.preventDefault(),this.handleUndo();else if((t.ctrlKey||t.metaKey)&&t.key.toLowerCase()==="y")t.preventDefault(),this.handleRedo();else if(/^[1-8]$/.test(t.key)){const s=Number(t.key);s>=1&&s<=e&&(t.preventDefault(),this.handleNumberInput(s))}},window.addEventListener("keydown",this.keydownHandler)}startPuzzleSession(t,e,s=null,a){var b,m;this.activePuzzle=t,this.activeMode=e,this.activeChallengeKind=t.challengeKind||"standard",this.activeCupStageIdx=(a==null?void 0:a.cupStageIdx)??null,this.activeCampaignLevel=s,this.board=X(t.givens),this.notes=Array.from({length:t.size},()=>Array.from({length:t.size},()=>[])),this.history=[],this.redoStack=[],this.selectedCell={r:0,c:0};let n=!1;for(let y=0;y<t.size&&!n;y++)for(let r=0;r<t.size;r++)if(t.givens[y][r]===0){this.selectedCell={r:y,c:r},n=!0;break}this.activeHint=null,this.activeSightRay=null,this.lastBuiltCell=null,this.hintsUsedThisGame=0,this.elapsedSeconds=0,this.gameWon=!1,this.isPaused=!1,this.gameOverReason="",this.inBoardView=!0,e==="blitz"&&(a==null?void 0:a.resetSeries)!==!1?(this.blitzRemainingSeconds=120,this.blitzScore=0,this.blitzSolvedCount=0):this.activeChallengeKind==="survival"&&(a==null?void 0:a.resetSeries)!==!1&&(this.survivalLives=3,this.survivalStreak=0),this.startTimer(),(m=(b=this.host).playSound)==null||m.call(b,"click"),this.render()}pushHistory(){this.history.push({board:X(this.board),notes:vt(this.notes)}),this.history.length>100&&this.history.shift(),this.redoStack=[]}handleNumberInput(t){var m,y,r,l,h,v,$,C,z,E,q;if(!this.activePuzzle||this.gameWon||this.isPaused)return;const{r:e,c:s}=this.selectedCell;if(((m=this.activePuzzle.givens[e])==null?void 0:m[s])>0){(r=(y=this.host).playSound)==null||r.call(y,"error");return}if(this.pushHistory(),this.activeHint=null,this.noteMode){this.board[e][s]!==0&&(this.board[e][s]=0);const H=this.notes[e][s],K=H.indexOf(t);K>=0?H.splice(K,1):(H.push(t),H.sort((p,o)=>p-o)),(h=(l=this.host).playSound)==null||h.call(l,"click"),this.render();return}if(this.board[e][s]=this.board[e][s]===t?0:t,this.notes[e][s]=[],this.board[e][s]===0){this.lastBuiltCell=null,($=(v=this.host).playSound)==null||$.call(v,"erase"),this.render();return}const a=this.board[e][s];this.lastBuiltCell={r:e,c:s,seq:++this.buildAnimSeq};const n=ut(this.activePuzzle,this.board);if(n.duplicateKeys.has(`${e},${s}`)||n.zoningViolationKeys.has(`${e},${s}`)||this.activeChallengeKind==="survival"&&a!==this.activePuzzle.solution[e][s]){if((z=(C=this.host).playSound)==null||z.call(C,"error"),this.activeChallengeKind==="survival"&&(this.survivalLives=Math.max(0,this.survivalLives-1),this.survivalLives<=0)){this.stopTimer(),this.gameOverReason="3 inşaat baretinin tamamı tükendi! Kat çakışması veya hatalı kat yerleşimi şantiyeyi durdurdu.",this.activeModal="gameover",this.render();return}}else(q=(E=this.host).playSound)==null||q.call(E,"place",{floors:a,maxFloors:this.activePuzzle.size});this.checkWinAfterMove(),this.render()}handleEraseInput(){var s,a,n;if(!this.activePuzzle||this.gameWon||this.isPaused)return;const{r:t,c:e}=this.selectedCell;((s=this.activePuzzle.givens[t])==null?void 0:s[e])>0||this.board[t][e]===0&&this.notes[t][e].length===0||(this.pushHistory(),this.board[t][e]=0,this.notes[t][e]=[],this.activeHint=null,this.lastBuiltCell=null,(n=(a=this.host).playSound)==null||n.call(a,"erase"),this.render())}handleUndo(){var e,s;if(this.history.length===0||this.gameWon||this.isPaused)return;this.redoStack.push({board:X(this.board),notes:vt(this.notes)});const t=this.history.pop();this.board=t.board,this.notes=t.notes,this.activeHint=null,this.lastBuiltCell=null,(s=(e=this.host).playSound)==null||s.call(e,"click"),this.render()}handleRedo(){var e,s;if(this.redoStack.length===0||this.gameWon||this.isPaused)return;this.history.push({board:X(this.board),notes:vt(this.notes)});const t=this.redoStack.pop();this.board=t.board,this.notes=t.notes,this.activeHint=null,this.lastBuiltCell=null,(s=(e=this.host).playSound)==null||s.call(e,"click"),this.render()}handleSmartHint(){var e,s;if(!this.activePuzzle||this.gameWon||this.isPaused)return;const t=Ct(this.activePuzzle,this.board);if(t){if(this.activeHint=t,this.selectedCell={r:t.r,c:t.c},this.hintsUsedThisGame+=1,t.focusClueKey){const[a,n]=t.focusClueKey.split(":");this.activeSightRay={side:a,index:Number(n)||0}}(s=(e=this.host).playSound)==null||s.call(e,"hint"),this.render()}}applyActiveHintMove(){var a,n,b;if(!this.activeHint||!this.activePuzzle||this.gameWon)return;const{r:t,c:e,value:s}=this.activeHint;((a=this.activePuzzle.givens[t])==null?void 0:a[e])>0||(this.pushHistory(),this.board[t][e]=s,this.notes[t][e]=[],this.lastBuiltCell={r:t,c:e,seq:++this.buildAnimSeq},this.activeHint=null,(b=(n=this.host).playSound)==null||b.call(n,"place",{floors:s,maxFloors:this.activePuzzle.size}),this.checkWinAfterMove(),this.render())}toggleSightRayFromSelection(){var t,e;this.activePuzzle&&(this.activeSightRay?this.activeSightRay.side==="left"||this.activeSightRay.side==="right"?this.activeSightRay={side:"top",index:this.selectedCell.c}:this.activeSightRay=null:this.activeSightRay={side:"left",index:this.selectedCell.r},(e=(t=this.host).playSound)==null||e.call(t,"click"),this.render())}checkWinAfterMove(){var n,b,m,y,r,l,h;if(!this.activePuzzle||this.gameWon||!ut(this.activePuzzle,this.board).isSolved)return;const e=new Date().toISOString().slice(0,10);if(this.activeMode==="blitz"){this.blitzSolvedCount+=1,this.blitzScore+=180+Math.max(0,25-this.hintsUsedThisGame*20),this.blitzScore>this.stats.bestBlitzScore&&(this.stats.bestBlitzScore=this.blitzScore);const v=`TWR-BLITZ-${Date.now()}-${this.blitzSolvedCount}`,$=D(4,"easy",v,{title:`⚡ Blitz Kule #${this.blitzSolvedCount+1}`});(b=(n=this.host).playSound)==null||b.call(n,"win");const C=Et(this.stats,{elapsedSec:this.elapsedSeconds,hintsUsed:this.hintsUsedThisGame,size:4,isDaily:!1});C.length>0&&(this.stats.blueprintGems+=C.length),st(this.stats),Y("towers_solve"),this.hintsUsedThisGame===0&&Y("no_hint_solve"),this.startPuzzleSession($,"blitz",null,{resetSeries:!1});return}if(this.activeMode==="endless"){this.endlessWave>this.stats.bestEndlessWave&&(this.stats.bestEndlessWave=this.endlessWave),this.endlessWave+=1;const v=yt(this.stats,{puzzleId:this.activePuzzle.id,size:this.activePuzzle.size,difficulty:this.activePuzzle.difficulty,elapsedSec:this.elapsedSeconds,hintsUsed:this.hintsUsedThisGame});this.stats=v.nextStats,Y("towers_solve"),this.hintsUsedThisGame===0&&Y("no_hint_solve"),this.gameWon=!0,this.stopTimer(),this.lastWinSummary={starsEarned:v.starsEarned,xpGain:v.xpEarned,blueprintGain:v.gemsEarned,leveledUp:v.leveledUp,newlyUnlockedAchievements:v.newlyUnlockedAchievements},this.activeModal="victory",(y=(m=this.host).playSound)==null||y.call(m,"win");return}this.activeChallengeKind==="zoning"?this.stats.zoningSolvedCount=(this.stats.zoningSolvedCount||0)+1:this.activeChallengeKind==="fog"?this.stats.fogSolvedCount=(this.stats.fogSolvedCount||0)+1:this.activeChallengeKind==="survival"&&(this.survivalStreak+=1,this.stats.survivalClearsCount=(this.stats.survivalClearsCount||0)+1);let s;if(this.activeChallengeKind==="weekly_cup"&&this.activeCupStageIdx!==null){const v=gt(),$=Tt(this.activePuzzle.size,this.elapsedSeconds,this.hintsUsedThisGame);s=$;const C=this.stats.weeklyCupKey,z=C===v&&Array.isArray(this.stats.weeklyCupScores)?[...this.stats.weeklyCupScores]:[0,0,0],E=C===v&&Array.isArray(this.stats.weeklyCupRewarded)?[...this.stats.weeklyCupRewarded]:[!1,!1,!1];z[this.activeCupStageIdx]=Math.max(z[this.activeCupStageIdx]||0,$),E[this.activeCupStageIdx]=!0,this.stats.weeklyCupKey=v,this.stats.weeklyCupScores=z,this.stats.weeklyCupRewarded=E}this.gameWon=!0,this.stopTimer();const a=yt(this.stats,{puzzleId:((r=this.activeCampaignLevel)==null?void 0:r.id)||this.activePuzzle.id,size:this.activePuzzle.size,difficulty:this.activePuzzle.difficulty,elapsedSec:this.elapsedSeconds,hintsUsed:this.hintsUsedThisGame,isDaily:this.activeMode==="daily",dailyDateKey:this.activeMode==="daily"?e:void 0,campaignLevel:this.activeCampaignLevel?{goldSec:this.activeCampaignLevel.goldSec,silverSec:this.activeCampaignLevel.silverSec}:null});this.stats=a.nextStats,Y("towers_solve"),this.hintsUsedThisGame===0&&Y("no_hint_solve"),this.activeChallengeKind==="weekly_cup"&&Y("duel_or_cup"),this.lastWinSummary={starsEarned:a.starsEarned,xpGain:a.xpEarned,blueprintGain:a.gemsEarned,leveledUp:a.leveledUp,newlyUnlockedAchievements:a.newlyUnlockedAchievements,cupScore:s},this.activeModal="victory",(h=(l=this.host).playSound)==null||h.call(l,"win")}getUnlockedCampaignIndex(){let t=-1;for(let e=0;e<B.length;e++)this.stats.solvedIds.includes(B[e].id)&&(t=e);return Math.min(B.length-1,t+1)}renderInto(t){var n,b,m,y;const e=typeof window<"u"?window.innerWidth>=900:!0;this.lastDesktopMode=e;const s=((b=(n=this.host).renderTitlebar)==null?void 0:b.call(n))||"",a=this.inBoardView&&this.activePuzzle?this.renderBoardScreenHTML():this.renderHubScreenHTML(e);t.innerHTML=`
      ${s}
      <div class="screen-body ${this.inBoardView?"towers-board-body":"menu-mode towers-menu-mode"}" id="towers-screen">
        ${a}
        ${this.renderActiveModal()}
      </div>
    `,(y=(m=this.host).bindTitlebarEvents)==null||y.call(m),this.bindEvents(t)}renderHubScreenHTML(t){var C,z,E,q,H,K,p,o;const e=this.host.getUsername(),s=this.host.getPilotTag(),a=this.host.isBetaChannel(),n=((z=(C=this.host).getCloudSynced)==null?void 0:z.call(C))??!1,b=((q=(E=this.host).canQuit)==null?void 0:q.call(E))??!1,m=kt(this.stats.architectXp),y=V.find(g=>g.id===this.stats.equippedCharacterId)||V[0],r=Mt(this.stats),l=(this.stats.solvedIds||[]).filter(g=>B.some(M=>M.id===g)).length,h=((K=(H=this.host).getSocialAttentionCount)==null?void 0:K.call(H))??0,v=((o=(p=this.host).getAudioSettings)==null?void 0:o.call(p))??{soundEnabled:!0,musicEnabled:!0},$=[{id:"campaign",icon:"🏙️",label:"Şehir Haritası",badge:`${l}/60`},{id:"challenges",icon:"🚧",label:"Challenge & Kupa",badge:"3+1"},{id:"daily",icon:"🧱",label:"Günlük Bina",badge:this.stats.dailyStreak>0?`🔥${this.stats.dailyStreak}`:""},{id:"blitz",icon:"⚡",label:"Kule Blitz",badge:""},{id:"endless",icon:"🏗️",label:"Sonsuz İnşaat",badge:""},{id:"custom",icon:"🎲",label:"Serbest Mimari",badge:""}];return`
      <header class="main-menu-topbar towers-menu-topbar">
        <div class="topbar-left">
          <button type="button" class="arcade-return-chip" id="btn-towers-back-hub" title="1000in1 Kaset Odasına Dön">🕹️ Kaset</button>
          <div class="topbar-desktop-telemetry">
            <span class="topbar-sector-pill towers-sector-pill">🧱 TOWERS • ${l}/${B.length} Mahalle • ⭐ ${r}/${B.length*3}</span>
            ${a?'<button type="button" class="beta-badge beta-lab-trigger" id="btn-towers-beta-lab" title="Towers Beta Test Laboratuvarı">🧪 BETA LAB</button>':""}
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
            <div class="towers-architect-avatar" style="border-color:${y.accentColor}">
              ${Z(y.id,46)}
            </div>
            <div class="towers-architect-info">
              <div class="towers-architect-head">
                <span class="towers-architect-name">${S(y.name)}</span>
                <span class="towers-architect-role">${S(y.title)}</span>
                <span class="towers-perk-chip">🧱 Güç +${y.powerScore}</span>
              </div>
              <div class="towers-xp-bar-wrap">
                <div class="towers-xp-labels">
                  <span><strong>Mimar LVL ${m.level}</strong> • ${S(m.title)}</span>
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
            <div class="towers-stat-chip"><span class="lbl">Mahalle</span><strong class="val">🏘️ ${l} / 60</strong></div>
            <div class="towers-stat-chip"><span class="lbl">Yıldız</span><strong class="val">⭐ ${r}</strong></div>
            <div class="towers-stat-chip"><span class="lbl">Başarım</span><strong class="val">🏅 ${this.stats.unlockedAchievements.length}/24</strong></div>
          </div>
        </section>

        ${t?"":`
          <div class="towers-mobile-mode-strip" role="tablist">
            ${$.map(g=>`
              <button type="button" class="towers-mobile-pill ${this.activeTab===g.id?"active":""}" data-towers-tab="${g.id}">
                ${g.icon} ${g.label}
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
            ${$.map(g=>`
              <button type="button" class="bottom-nav-tab ${this.activeTab===g.id?"active":""}" data-towers-tab="${g.id}">
                <span class="discord-nav-indicator" aria-hidden="true"></span>
                <span class="tab-icon">${g.icon}</span>
                <span class="tab-label">${g.label}</span>
                ${g.badge?`<span class="tab-badge">${S(g.badge)}</span>`:""}
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
              <span class="tab-badge">${this.stats.unlockedAchievements.length}/${bt.length}</span>
            </button>
          </div>

          <div class="desktop-sidebar-footer discord-user-dock">
            <div class="discord-voice-ship-strip">
              <div class="sidebar-ship-preview">
                ${Z(y.id,30)}
              </div>
              <div class="discord-voice-ship-info">
                <span class="discord-conn-green">● Şantiye Hazır</span>
                <small class="discord-conn-sub">LVL ${m.level} • ${S(y.name)}</small>
              </div>
              <button type="button" class="sidebar-hangar-mini-btn" id="btn-towers-workshop">🏗️ Atölye</button>
            </div>

            <div class="discord-user-bar">
              <button type="button" class="discord-user-identity profile-badge" id="btn-towers-open-profile" title="Ortak Oyuncu Kimliği">
                <div class="discord-user-avatar">
                  ${Z(y.id,28)}
                  <span class="discord-presence-dot ${n?"online":"guest"}"></span>
                </div>
                <div class="discord-user-meta">
                  <strong class="discord-user-nick">${S(e)}<small>#${S(s)}</small></strong>
                  <span class="discord-user-sub">${this.stats.totalPoints} Puan</span>
                </div>
              </button>
              <div class="discord-user-controls">
                <button type="button" class="discord-ctrl-btn ${v.soundEnabled?"is-on":"is-muted"}" id="btn-towers-dock-sfx" title="Ses Efektleri">🔊</button>
                <button type="button" class="discord-ctrl-btn ${v.musicEnabled?"is-on":"is-muted"}" id="btn-towers-dock-music" title="Şehir Müziği">🎵</button>
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
    `}renderTabContent(){if(this.activeTab==="campaign"){const t=this.getUnlockedCampaignIndex(),e=B[t]||B[0],s=B.filter(r=>r.episode===this.selectedEpisode),a={1:"1. Evre: Kırmızı Tuğla Mahallesi (4×4 – 6×6)",2:"2. Evre: İmarlı Tarihi Semt (4×4 – 7×7)",3:"3. Evre: Eski Saat Meydanı (5×5 – 7×7)",4:"4. Evre: Sisli Konaklar (5×5 – 8×8)",5:"5. Evre: Büyük Metropol (6×6 – 8×8)"},n=ot(this.stats.equippedFacadeId,this.stats.equippedRoofId),b=Lt(s,this.stats,n,this.stats.equippedRoofId,t,r=>B.findIndex(l=>l.id===r)),m=s.map((r,l)=>{const h=B.findIndex(p=>p.id===r.id),v=this.stats.solvedIds.includes(r.id),$=h<=t||v,C=this.stats.levelStars[r.id]||0,z=Ht(v,$,C),E=this.stats.bestTimesSec[r.id],q=r.difficulty==="easy"?"Kolay":r.difficulty==="medium"?"Orta":"Zor",H=z==="gold"?"Lüks Altın Konak":z==="silver"?"Klasik Tuğla Apartman":z==="bronze"?"Mahalle Gecekondusu":z==="active"?"Aktif İnşaat Parseli":"Kilitli Boş Arsa",K=r.challengeKind==="zoning"?'<span class="street-mech-tag zoning">🧱 İmar Kısıtı</span>':r.challengeKind==="fog"?'<span class="street-mech-tag fog">🌫️ Sisli Sokak</span>':"";return{lvl:r,relIdx:l,isCompleted:v,isUnlocked:$,stars:C,tier:z,tierTitle:H,mechPill:K,diffBadge:q,bestSec:E,isLandmark:l===s.length-1}}),y=At(m,n,this.stats.equippedRoofId,it,S);return`
        <div class="towers-campaign-wrap">
          <div class="towers-campaign-header">
            <div>
              <h2>🏙️ Tuğla Şehir Cadde Seferi (60 Mahalle)</h2>
              <p>Her parsel boş arsa başlar! Bölüm bitince madalyana göre sokağa <b>Gecekondu ★</b>, <b>Apartman ★★</b> veya <b>Lüks Konak ★★★</b> dikilir.</p>
            </div>
            <button id="btn-towers-play-next" class="towers-primary-cta" data-start-campaign="${e.id}">
              ▶️ Sıradaki Parsel: #${S(e.code)} (${S(e.cityName)})
            </button>
          </div>

          <div class="towers-episode-tabs">
            ${[1,2,3,4,5].map(r=>`
              <button type="button" class="towers-ep-btn ${this.selectedEpisode===r?"active":""}" data-towers-ep="${r}">
                ${S(a[r])}
              </button>
            `).join("")}
          </div>

          <section class="towers-street-panorama-card" aria-label="Mahalle Caddesi Silüeti">
            <div class="street-panorama-head">
              <strong>🛣️ ${S(a[this.selectedEpisode]||"")}</strong>
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
            ${y}
          </div>
        </div>
      `}if(this.activeTab==="challenges"){const t=gt(),e=wt(t),s=this.stats.weeklyCupKey===t&&Array.isArray(this.stats.weeklyCupScores)?this.stats.weeklyCupScores:[0,0,0];return`
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
                <h3>🏆 Haftalık Mimar Kupası (${S(t)})</h3>
                <p>Tüm oyuncularla aynı 3 sabit tohumlu tuğla sokak etabı üzerinden yüksek skor yarışı.</p>
              </div>
              <span class="towers-cup-total">Toplam: ${s[0]+s[1]+s[2]} P</span>
            </div>
            <div class="towers-cup-grid">
              ${e.map(a=>{const n=s[a.index]||0;return`
                    <div class="towers-cup-stage ${n>0?"done":""}">
                      <div class="stage-top"><strong>${a.label}</strong><span>${a.size}×${a.size}</span></div>
                      <small>${S(a.subtitle)}</small>
                      <div class="stage-score">${n>0?`Skor: <b>${n} P</b>`:"Henüz Çözülmedi"}</div>
                      <button type="button" class="towers-city-play-btn" data-towers-cup-stage="${a.index}">
                        ${n>0?"Skoru Geliştir ↻":"Etap Başlat →"}
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
              <input id="inp-towers-custom-seed" class="towers-seed-input" type="text" placeholder="Örn: TWR-5-ORTA-2026" value="${S(this.customSeedInput)}" />
            </div>
          </div>
          <button id="btn-towers-start-custom" class="towers-primary-cta">🎲 ${this.customSize}×${this.customSize} İnşaata Başla</button>
        </div>
      </div>
    `}getArchitectSpeechState(t,e,s){var m;const a={char_apprentice:{start:"Arsayı inceledim, köşelere sağlam temeli atalım da rezidans yükselsin!",mid:"Güzel gidiyoruz! Bakalım hangi parsele 4 katlı dikiyoruz?",near:"Son birkaç parsel kaldı, tapuları teslim etmeye hazırız!",hint:"Bak bu kare boş duruyor; dediğim katı tam şuraya dikelim!",warn:"Hop hemşerim! Aynı sırada aynı kattan iki bina yan yana dikilmez.",sight:"Kaldırımdan bakınca öndeki küçük katlar büyük kulenin arkasında gizlenir.",win:"İşte bu! Bu sokağa yaptığım en kârlı proje oldu!"},char_planner:{start:"Vakıf hanı nizamıyla önce en belirgin kenar bakış sayılarını çözelim.",mid:"Satır ve sütun simetrisi harika oturuyor, ölçüyle devam edelim.",near:"Son ince rötuşlar — taş cephe silüetimiz tamamlanmak üzere.",hint:"Cetvel ve gönyeyle hesapladım; bu parsele işaretli kat tam oturuyor.",warn:"Dikkat: Sokak hizasında veya kenar bakışında bir ölçü sapması var.",sight:"Ön cepheden görünen kat sayısı kadar kademeli yükseliş şarttır.",win:"Mükemmel denge ve zarafet — şehrin tarihi dokusu şenlendi."},char_skyline:{start:"Düz bloklar sıkıcı; katları doğanın kendi basamakları gibi dizelim!",mid:"Mozaik taşları yerine oturuyor, her kat silüete renk katıyor.",near:"Az kaldı! Çatılar gökyüzüne doğru kıvrılmaya hazır.",hint:"Görüş ışığı tam bu kareyi işaret ediyor — sıradaki katı koy!",warn:"Burada bir uyumsuzluk var; doğa ve statik kurallar çakışıyor.",sight:"Bakış çizgisinde sadece kendinden öncekinden yüksek kuleler parlar!",win:"Masalsı bir mahalle yarattın — her çatı ayrı bir sanat eseri!"},char_neon:{start:"Görüş akslarını oku; boşluklardaki en yüksek kule yerini ele verecektir.",mid:"Harika akışkanlık — blokların ritmi yavaş yavaş şekilleniyor.",near:"Ufuk çizgisi netleşti, son kuleleri yerleştirip silüeti kilitle.",hint:"Parametrik kesişim noktası belli: önerdiğim katı uygula.",warn:"Çakışma algılandı; yükseklik eğrisini düzeltmemiz gerekiyor.",sight:"Görünen kuleleri tek tek izleyip arkada kalanları eleyebilirsin.",win:"Ufuk çizgisini baştan yazdık — cesur ve kusursuz!"},char_quantum:{start:"İnsan ölçeğinde ferah sokaklar için sabırla önce kesin kareleri bulalım.",mid:"Mahalle nefes almaya başladı; komşu parsellere ışık bırakalım.",near:"Huzurlu bir son dokunuş kaldı, acele etmeden tamamlayalım.",hint:"Bilge bir yaklaşımla bakarsak bu karede başka kat barınamaz.",warn:"Bir kat fazla veya tekrarlı görünüyor; sakince gözden geçirelim.",sight:"Göz hizası ne diyorsa sokak düzeni de ona uymalıdır.",win:"Eline sağlık! Hem ışığı hem sıcaklığı yerinde, yaşanası bir sokak."},char_emperor:{start:"Evlat, önce taşların temel aksını kur; yüksek kubbeler yerini hemen belli eder.",mid:"Mizan ve tenasüp yerli yerinde, sokağın yükü sağlam dağılıyor.",near:"Son taşlar kaldı; bu sokağın da külliyesi tarihe geçecek.",hint:"Hesap şaşmaz: kenar ve sıra dengesine göre buraya tek kat uyar.",warn:"Durakla ve bak evlat; iki aynı boy sütun bir sırada bulunmaz.",sight:"Göz önünden arkaya yükselen her kule sırrını açık eder.",win:"Aferin! Koca Sinan usulünce kusursuz statik ve silüet kurdun!"}},n=a[t]||a.char_apprentice;if(this.activeHint)return{tone:"hint",text:n.hint,winQuote:n.win};if(e)return{tone:"warn",text:n.warn,winQuote:n.win};if(this.activeSightRay)return{tone:"hint",text:n.sight,winQuote:n.win};if(s<=Math.max(3,Math.ceil((((m=this.activePuzzle)==null?void 0:m.size)||4)*.75)))return{tone:"normal",text:n.near,winQuote:n.win};const b=this.activePuzzle?this.activePuzzle.size*this.activePuzzle.size-this.activePuzzle.givens.flat().filter(y=>y>0).length:16;return s<b*.75?{tone:"normal",text:n.mid,winQuote:n.win}:{tone:"normal",text:n.start,winQuote:n.win}}renderBoardScreenHTML(){var H,K;const t=this.activePuzzle,e=t.size,s=ut(t,this.board),a=V.find(p=>p.id===this.stats.equippedCharacterId)||V[0],n=j.find(p=>p.id===this.stats.equippedFacadeId)||j[0],b=j.find(p=>p.id===this.stats.equippedRoofId)||j[5],m=ot(n.id,b.id),y=new Int32Array(e+1);let r=0;for(let p=0;p<e;p++)for(let o=0;o<e;o++){const g=this.board[p][o];g>=1&&g<=e?y[g]++:r++}const l=s.duplicateKeys.size>0||s.zoningViolationKeys.size>0||s.violatedClueKeys.size>0,h=this.getArchitectSpeechState(a.id,l,r),v=new Map;let $="";if(this.activeSightRay){const{side:p,index:o}=this.activeSightRay,g=!!((K=(H=t.hiddenCluesMask)==null?void 0:H[p])!=null&&K[o]),M=g?0:t.clues[p][o],k=[];for(let T=0;T<e;T++){let x=o,I=T;p==="top"?(x=T,I=o):p==="bottom"?(x=e-1-T,I=o):p==="left"?(x=o,I=T):(x=o,I=e-1-T),k.push({r:x,c:I})}const L=Bt(k,this.board,M,p,o);L.visibleCells.forEach(T=>v.set(`${T.r},${T.c}`,"visible")),L.hiddenCells.forEach(T=>v.set(`${T.r},${T.c}`,"blocked")),$=`
        <div class="towers-sight-banner" id="towers-sight-banner">
          <span>👁️ <strong>Görüş Hattı (${p==="top"?`${o+1}. Sütun (Üstten ▾)`:p==="bottom"?`${o+1}. Sütun (Alttan ▴)`:p==="left"?`${o+1}. Satır (Soldan ▸)`:`${o+1}. Satır (Sağdan ◂)`}):</strong> ${g?"Sisli İpucu (?)":`Hedef = <b>${M||"Yok"}</b>`} • <b class="sight-ok">Görüldü: ${L.visibleCells.length}</b> • <b class="sight-hid">Örtüldü: ${L.hiddenCells.length}</b></span>
          <button type="button" id="btn-towers-clear-sight" class="towers-mini-btn">Kapat ✕</button>
        </div>
      `}const C=this.activeMode==="campaign"&&this.activeCampaignLevel?`🏘️ #${this.activeCampaignLevel.code}: ${this.activeCampaignLevel.cityName}`:this.activeMode==="daily"?"🧱 Günlük Bina":this.activeMode==="endless"?`🏗️ Dalga #${this.endlessWave}`:this.activeMode==="blitz"?`⚡ Blitz: ${this.blitzScore} P`:this.activeChallengeKind==="zoning"?"🚧 İmar Kısıtı":this.activeChallengeKind==="fog"?"🌫️ Sisli Sokak":this.activeChallengeKind==="survival"?"🪖 3 Baret Hayatta Kalma":this.activeChallengeKind==="weekly_cup"?`🏆 Kupa Etabı #${(this.activeCupStageIdx??0)+1}`:`🎲 Serbest (${e}×${e})`,z=(p,o)=>{var M,k;if((k=(M=t.hiddenCluesMask)==null?void 0:M[p])!=null&&k[o])return"fogged";const g=`${p}:${o}`;return s.violatedClueKeys.has(g)?"violated":s.satisfiedClueKeys.has(g)?"satisfied":"pending"},E=(p,o,g)=>{var x,I,R,G;const M=!!((I=(x=t.hiddenCluesMask)==null?void 0:x[p])!=null&&I[o]),k=t.clues[p][o],L=z(p,o),W=((R=this.activeSightRay)==null?void 0:R.side)===p&&((G=this.activeSightRay)==null?void 0:G.index)===o,T=M?"🌫️":k>0?String(k):"·";return`
        <button
          type="button"
          class="towers-clue-cell ${p} ${L} ${W?"active-ray":""}"
          data-towers-clue="${p}-${o}"
          title="${M?"Sisli İpucu":"Görüş Hattını Göster / Gizle"}"
        >
          ${p==="right"||p==="bottom"?`<span class="clue-arrow">${g}</span><span class="clue-num">${T}</span>`:`<span class="clue-num">${T}</span><span class="clue-arrow">${g}</span>`}
        </button>
      `},q=!!(this.activeHint||$);return`
      <div class="towers-board-screen ${q?"has-banner":""}" id="towers-board-screen">
        <div class="towers-board-hud">
          <div class="hud-left-btns">
            <button type="button" id="btn-towers-leave-board" class="towers-back-map-btn">⬅️ Menü</button>
            <button type="button" id="btn-towers-pause" class="towers-back-map-btn">${this.isPaused?"▶️ Sürdür":"⏸️ Duraklat"}</button>
          </div>

          <div class="towers-hud-center">
            <span class="towers-hud-title">${S(C)}</span>
            <span class="towers-hud-sub">${e}×${e} • ${S(n.name)}</span>
          </div>

          <div class="towers-hud-metrics">
            ${this.activeChallengeKind==="survival"?`<span class="towers-hud-pill survival-lives">${"🪖".repeat(this.survivalLives)}${"⚫".repeat(Math.max(0,3-this.survivalLives))}</span>`:""}
            <span class="towers-hud-pill" id="towers-hud-timer">
              ⏱️ ${this.activeMode==="blitz"?it(this.blitzRemainingSeconds):it(this.elapsedSeconds)}
            </span>
            <button type="button" id="btn-towers-sight-toggle" class="towers-hud-pill btn-pill ${this.activeSightRay?"active":""}" title="Görüş Hattını İncele (V)">
              👁️ Görüş
            </button>
            ${this.host.isBetaChannel()?'<button type="button" id="btn-towers-beta-lab" class="towers-beta-chip">🧪</button>':""}
          </div>
        </div>

        ${this.activeHint?"":$}

        ${q?"":`<div class="towers-clue-guide-strip" aria-hidden="true">
          <span>👁️ <b>Kenar sayıları:</b> Ok yönünden bakınca görünen bina sayısıdır • Sayıya dokun = görüşü çiz</span>
        </div>`}

        ${this.activeHint?`
          <div class="towers-hint-banner" id="towers-hint-banner">
            <div class="towers-hint-text">
              <span class="hint-kind-pill ${this.activeHint.isCorrection?"fix":"deduce"}">${this.activeHint.isCorrection?"🔧 DÜZELTME":"🔍 İPUCU"}</span>
              <strong>${S(this.activeHint.ruleTitle)}:</strong> ${S(this.activeHint.message)}
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
            <div class="towers-matrix" id="towers-matrix" style="--towers-size: ${e};">
            <div class="towers-corner-spacer"></div>
            ${Array.from({length:e},(p,o)=>E("top",o,"▼")).join("")}
            <div class="towers-corner-spacer"></div>

            ${Array.from({length:e},(p,o)=>{const g=Array.from({length:e},(M,k)=>{var J,tt,i,u,w,f,A,U,N,_,et;const L=this.board[o][k],W=t.givens[o][k]>0,T=this.selectedCell.r===o&&this.selectedCell.c===k,x=s.duplicateKeys.has(`${o},${k}`),I=s.zoningViolationKeys.has(`${o},${k}`),R=((tt=(J=t.maxHeightLimits)==null?void 0:J[o])==null?void 0:tt[k])||0,G=((i=this.activeHint)==null?void 0:i.r)===o&&((u=this.activeHint)==null?void 0:u.c)===k,rt=!!((w=this.activeHint)!=null&&w.focusLine)&&(((A=(f=this.activeHint)==null?void 0:f.focusLine)==null?void 0:A.kind)==="row"&&this.activeHint.focusLine.index===o||((N=(U=this.activeHint)==null?void 0:U.focusLine)==null?void 0:N.kind)==="col"&&this.activeHint.focusLine.index===k),F=v.get(`${o},${k}`)||"",Q=this.notes[o][k],lt=L>0&&((_=this.lastBuiltCell)==null?void 0:_.r)===o&&((et=this.lastBuiltCell)==null?void 0:et.c)===k;return`
                  <div
                    class="towers-cell ${L>0?"has-tower":"empty"} ${W?"given":""} ${T?"selected":""} ${x||I?"conflict":""} ${G?"hint-target":""} ${rt&&!G?"hint-focus-line":""} ${R>0?"zoned":""} ${lt?"just-built":""} ${F?`sight-${F}`:""}"
                    data-towers-cell="${o}-${k}"
                    data-row="${o}"
                    data-col="${k}"
                    data-val="${L}"
                  >
                    ${G&&this.activeHint?`<span class="tower-hint-badge" aria-hidden="true">👇 ${this.activeHint.value}</span>`:""}
                    ${R>0?`<span class="tower-zone-badge" title="İmar Kısıtı: Maksimum ${R} kat">≤${R}</span>`:""}
                    ${L>0?`
                      <div class="tower-pixel-bldg-wrap">
                        ${mt(L,e,m,b.id)}
                        <span class="tower-height-badge ${W?"given-badge":""}">${L}</span>
                      </div>
                    `:Q.length>0?`
                      <div class="tower-notes-grid">
                        ${Array.from({length:e},(Ut,St)=>{const dt=St+1;return`<span class="tower-note-item ${Q.includes(dt)?"on":""}">${Q.includes(dt)?dt:""}</span>`}).join("")}
                      </div>
                    `:'<span class="tower-plot-stakes" aria-hidden="true"><i></i><i></i></span>'}
                    ${F==="visible"?'<span class="tower-sight-tag visible" title="Görüldü">👁️</span>':F==="blocked"?'<span class="tower-sight-tag blocked" title="Önündeki yüksek bina tarafından örtüldü">⬛</span>':""}
                  </div>
                `}).join("");return`${E("left",o,"▶")}${g}${E("right",o,"◀")}`}).join("")}

            <div class="towers-corner-spacer"></div>
            ${Array.from({length:e},(p,o)=>E("bottom",o,"▲")).join("")}
            <div class="towers-corner-spacer"></div>
          </div>

          <aside class="towers-architect-assistant" aria-label="Şantiye Mimarı">
            <div class="arch-assist-head">
              <div class="arch-assist-portrait" style="border-color:${a.accentColor}">
                ${Z(a.id,60)}
              </div>
              <div class="arch-assist-meta">
                <strong>${S(a.name)}</strong>
                <small>${S(a.rarityLabel)}</small>
              </div>
            </div>
            <div class="arch-assist-bubble ${h.tone==="normal"?"":h.tone}">
              “${S(h.text)}”
            </div>
            <div class="arch-assist-cosmetics">
              <span>🧱 ${S(n.name)}</span>
              <span>🏠 ${S(b.name)}</span>
            </div>
          </aside>
          </div>
        </div>

        <div class="towers-controls-dock">
          <div class="towers-numpad" role="group" aria-label="Bina Kat Yüksekliği">
            ${Array.from({length:e},(p,o)=>{const g=o+1,M=Math.max(0,e-y[g]);return`
                <button
                  type="button"
                  class="towers-num-btn ${this.noteMode?"note-active":""} ${M===0?"all-placed":""}"
                  data-towers-num="${g}"
                >
                  <span class="num-main">${g}</span>
                  <span class="num-lbl">${this.noteMode?"Not":M===0?"✓":`×${M}`}</span>
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
    `}renderActiveModal(){if(!this.activeModal)return"";if(this.activeModal==="tutorial")return qt({step:this.tutorialStep,miniBoard:this.tutorialMiniBoard,selectedMiniCell:this.tutorialSelectedCell,palId:{facade:this.stats.equippedFacadeId,roof:this.stats.equippedRoofId}});if(this.activeModal==="rules")return Kt();if(this.activeModal==="workshop")return xt(this.stats);if(this.activeModal==="profile")return It(this.stats);if(this.activeModal==="beta-lab")return Rt(this.inBoardView);if(this.activeModal==="gameover")return Dt(this.gameOverReason);if(this.activeModal==="victory"&&this.lastWinSummary){const t=V.find(s=>s.id===this.stats.equippedCharacterId)||V[0],e=this.getArchitectSpeechState(t.id,!1,0);return Gt({elapsedSeconds:this.elapsedSeconds,hintsUsed:this.hintsUsedThisGame,challengeKind:this.activeChallengeKind,architect:{id:t.id,name:t.name,title:t.title,accentColor:t.accentColor,winQuote:e.winQuote},summary:this.lastWinSummary})}return""}bindEvents(t){var s,a,n,b,m,y,r,l,h,v,$,C,z,E,q,H,K,p,o,g,M,k,L,W,T,x,I,R,G,rt,F,Q,lt,J,tt;(s=t.querySelector("#btn-towers-back-hub"))==null||s.addEventListener("click",()=>{this.stopTimer(),this.host.onBackToHub()}),(a=t.querySelector("#btn-towers-open-social"))==null||a.addEventListener("click",()=>{var i,u;(u=(i=this.host).onOpenSocialHub)==null||u.call(i)}),(n=t.querySelector("#btn-towers-open-profile"))==null||n.addEventListener("click",()=>{var i,u;(u=(i=this.host).onOpenGlobalProfile)==null||u.call(i)}),(b=t.querySelector("#btn-towers-dock-sfx"))==null||b.addEventListener("click",()=>{var i,u;(u=(i=this.host).onToggleSound)==null||u.call(i),this.render()}),(m=t.querySelector("#btn-towers-dock-music"))==null||m.addEventListener("click",()=>{var i,u;(u=(i=this.host).onToggleMusic)==null||u.call(i),this.render()}),(y=t.querySelector("#btn-towers-quit"))==null||y.addEventListener("click",()=>{var i,u;(u=(i=this.host).onQuitApp)==null||u.call(i)}),(r=t.querySelector("#btn-towers-tutorial"))==null||r.addEventListener("click",()=>{this.tutorialStep=1,this.tutorialMiniBoard=nt.map(i=>[...i]),this.tutorialSelectedCell={r:0,c:1},this.activeModal="tutorial",this.render()}),(l=t.querySelector("#btn-towers-rules"))==null||l.addEventListener("click",()=>{this.activeModal="rules",this.render()}),(h=t.querySelector("#btn-towers-workshop"))==null||h.addEventListener("click",()=>{this.activeModal="workshop",this.render()}),(v=t.querySelector("#btn-towers-profile"))==null||v.addEventListener("click",()=>{this.activeModal="profile",this.render()}),($=t.querySelector("#btn-towers-settings"))==null||$.addEventListener("click",()=>{this.host.onOpenGlobalSettings()}),(C=t.querySelector("#btn-towers-beta-lab"))==null||C.addEventListener("click",()=>{this.activeModal="beta-lab",this.render()}),(z=t.querySelector("#btn-towers-close-modal"))==null||z.addEventListener("click",()=>{this.activeModal=null,this.render()}),t.querySelectorAll("[data-tut-step]").forEach(i=>{i.addEventListener("click",()=>{this.tutorialStep=Number(i.dataset.tutStep)||1,this.render()})}),t.querySelectorAll("[data-tut-cell]").forEach(i=>{i.addEventListener("click",()=>{var U,N,_;const[u,w]=(i.dataset.tutCell||"0-0").split("-"),f=Number(u)||0,A=Number(w)||0;((U=nt[f])==null?void 0:U[A])>0||(this.tutorialSelectedCell={r:f,c:A},(_=(N=this.host).playSound)==null||_.call(N,"click"),this.render())})}),t.querySelectorAll("[data-tut-num]").forEach(i=>{i.addEventListener("click",()=>{var A,U,N,_,et;const u=Number(i.dataset.tutNum)||0,{r:w,c:f}=this.tutorialSelectedCell;((A=nt[w])==null?void 0:A[f])>0||(this.tutorialMiniBoard[w][f]=u,u>0?(N=(U=this.host).playSound)==null||N.call(U,"place",{floors:u,maxFloors:3}):(et=(_=this.host).playSound)==null||et.call(_,"erase"),this.render())})}),(E=t.querySelector("#btn-towers-tutorial-next"))==null||E.addEventListener("click",()=>{this.tutorialStep=Math.min(3,this.tutorialStep+1),this.render()}),(q=t.querySelector("#btn-towers-tutorial-practice"))==null||q.addEventListener("click",()=>{this.activeModal=null;const i=B[0],u=D(i.size,i.difficulty,i.seed,{id:i.id,title:i.cityName,code:i.code});this.startPuzzleSession(u,"campaign",i)}),t.querySelectorAll("[data-towers-tab]").forEach(i=>{i.addEventListener("click",()=>{var w,f;const u=i.dataset.towersTab;u&&(this.activeTab=u,(f=(w=this.host).playSound)==null||f.call(w,"click"),this.render())})}),t.querySelectorAll("[data-towers-ep]").forEach(i=>{i.addEventListener("click",()=>{this.selectedEpisode=Number(i.dataset.towersEp)||1,this.render()})}),t.querySelectorAll("[data-start-campaign]").forEach(i=>{i.addEventListener("click",()=>{const u=i.dataset.startCampaign,w=B.find(A=>A.id===u);if(!w)return;const f=w.challengeKind==="zoning"||w.challengeKind==="fog"?at(w.challengeKind,w.size,w.difficulty,w.seed,{id:w.id,title:w.cityName,code:w.code}):D(w.size,w.difficulty,w.seed,{id:w.id,title:w.cityName,code:w.code});this.startPuzzleSession(f,"campaign",w)})}),(H=t.querySelector("#btn-towers-start-zoning"))==null||H.addEventListener("click",()=>{const i=at("zoning",5,"medium",`TWR-ZONE-${Date.now()}`);this.startPuzzleSession(i,"challenge")}),(K=t.querySelector("#btn-towers-start-fog"))==null||K.addEventListener("click",()=>{const i=at("fog",5,"medium",`TWR-FOG-${Date.now()}`);this.startPuzzleSession(i,"challenge")}),(p=t.querySelector("#btn-towers-start-survival"))==null||p.addEventListener("click",()=>{const i=at("survival",5,"hard",`TWR-SURV-${Date.now()}`);this.startPuzzleSession(i,"challenge")}),t.querySelectorAll("[data-towers-cup-stage]").forEach(i=>{i.addEventListener("click",()=>{const u=Number(i.dataset.towersCupStage);if(u!==0&&u!==1&&u!==2)return;const f=wt()[u],A=at(f.challengeKind==="zoning"?"zoning":"weekly_cup",f.size,f.difficulty,f.seed,{id:f.seed,title:`🏆 ${f.label}: ${f.subtitle}`});A.challengeKind="weekly_cup",this.startPuzzleSession(A,"challenge",null,{cupStageIdx:u})})}),(o=t.querySelector("#btn-towers-start-daily"))==null||o.addEventListener("click",()=>{const i=new Date().toISOString().slice(0,10),u=D(5,"medium",`TWR-DAILY-${i}`);this.startPuzzleSession(u,"daily")}),(g=t.querySelector("#btn-towers-start-endless"))==null||g.addEventListener("click",()=>{const i=this.endlessWave<=2?4:this.endlessWave<=5?5:6,u=this.endlessWave<=2?"easy":this.endlessWave<=6?"medium":"hard",w=D(i,u,`TWR-ENDLESS-W${this.endlessWave}-${Date.now()}`);this.startPuzzleSession(w,"endless")}),(M=t.querySelector("#btn-towers-start-blitz"))==null||M.addEventListener("click",()=>{const i=D(4,"easy",`TWR-BLITZ-${Date.now()}-0`);this.startPuzzleSession(i,"blitz")}),t.querySelectorAll("[data-custom-size]").forEach(i=>{i.addEventListener("click",()=>{this.customSize=Number(i.dataset.customSize)||4,this.render()})}),t.querySelectorAll("[data-custom-diff]").forEach(i=>{i.addEventListener("click",()=>{this.customDifficulty=i.dataset.customDiff||"easy",this.render()})});const e=t.querySelector("#inp-towers-custom-seed");e==null||e.addEventListener("input",()=>{this.customSeedInput=e.value}),(k=t.querySelector("#btn-towers-start-custom"))==null||k.addEventListener("click",()=>{const i=this.customSeedInput.trim()||`TWR-CUSTOM-${this.customSize}-${this.customDifficulty}-${Date.now()}`,u=D(this.customSize,this.customDifficulty,i);this.startPuzzleSession(u,"custom")}),(L=t.querySelector("#btn-towers-leave-board"))==null||L.addEventListener("click",()=>{this.stopTimer(),this.inBoardView=!1,this.isPaused=!1,this.render()}),(W=t.querySelector("#btn-towers-pause"))==null||W.addEventListener("click",()=>{this.isPaused=!this.isPaused,this.render()}),(T=t.querySelector("#btn-towers-resume"))==null||T.addEventListener("click",()=>{this.isPaused=!1,this.render()}),(x=t.querySelector("#btn-towers-sight-toggle"))==null||x.addEventListener("click",()=>{this.toggleSightRayFromSelection()}),t.querySelectorAll("[data-towers-cell]").forEach(i=>{i.addEventListener("click",()=>{this.selectedCell={r:Number(i.dataset.row)||0,c:Number(i.dataset.col)||0},this.render()})}),t.querySelectorAll("[data-towers-clue]").forEach(i=>{i.addEventListener("click",()=>{const u=i.dataset.towersClue||"",[w,f]=u.split("-"),A=Number(f)||0;this.activeSightRay&&this.activeSightRay.side===w&&this.activeSightRay.index===A?this.activeSightRay=null:this.activeSightRay={side:w,index:A},this.render()})}),(I=t.querySelector("#btn-towers-clear-sight"))==null||I.addEventListener("click",()=>{this.activeSightRay=null,this.render()}),t.querySelectorAll("[data-towers-num]").forEach(i=>{i.addEventListener("click",()=>{const u=Number(i.dataset.towersNum)||1;this.handleNumberInput(u)})}),(R=t.querySelector("#btn-towers-notes-toggle"))==null||R.addEventListener("click",()=>{this.noteMode=!this.noteMode,this.render()}),(G=t.querySelector("#btn-towers-erase"))==null||G.addEventListener("click",()=>this.handleEraseInput()),(rt=t.querySelector("#btn-towers-undo"))==null||rt.addEventListener("click",()=>this.handleUndo()),(F=t.querySelector("#btn-towers-redo"))==null||F.addEventListener("click",()=>this.handleRedo()),(Q=t.querySelector("#btn-towers-hint"))==null||Q.addEventListener("click",()=>this.handleSmartHint()),(lt=t.querySelector("#btn-towers-apply-hint"))==null||lt.addEventListener("click",()=>this.applyActiveHintMove()),(J=t.querySelector("#btn-towers-close-hint"))==null||J.addEventListener("click",()=>{this.activeHint=null,this.activeSightRay=null,this.render()}),(tt=t.querySelector("#btn-towers-reset"))==null||tt.addEventListener("click",()=>{!this.activePuzzle||this.isPaused||(this.pushHistory(),this.board=X(this.activePuzzle.givens),this.notes=Array.from({length:this.activePuzzle.size},()=>Array.from({length:this.activePuzzle.size},()=>[])),this.activeHint=null,this.lastBuiltCell=null,this.render())}),this.bindWorkshopAndMetaModals(t)}bindWorkshopAndMetaModals(t){var e,s,a,n,b,m,y;t.querySelectorAll("[data-buy-char]").forEach(r=>{r.addEventListener("click",()=>{const l=r.dataset.buyChar,h=V.find(v=>v.id===l);!h||this.stats.blueprintGems<h.costGems||(this.stats.blueprintGems-=h.costGems,this.stats.unlockedCharacterIds.includes(l)||this.stats.unlockedCharacterIds.push(l),this.stats.equippedCharacterId=l,st(this.stats),this.render())})}),t.querySelectorAll("[data-equip-char]").forEach(r=>{r.addEventListener("click",()=>{const l=r.dataset.equipChar;this.stats.unlockedCharacterIds.includes(l)&&(this.stats.equippedCharacterId=l,st(this.stats),this.render())})}),t.querySelectorAll("[data-buy-cosmetic]").forEach(r=>{r.addEventListener("click",()=>{const l=r.dataset.buyCosmetic,h=j.find(v=>v.id===l);!h||this.stats.blueprintGems<h.costGems||(this.stats.blueprintGems-=h.costGems,this.stats.unlockedCosmeticIds.includes(l)||this.stats.unlockedCosmeticIds.push(l),h.slot==="facade"?this.stats.equippedFacadeId=l:this.stats.equippedRoofId=l,st(this.stats),this.render())})}),t.querySelectorAll("[data-equip-cosmetic]").forEach(r=>{r.addEventListener("click",()=>{const l=r.dataset.equipCosmetic,h=j.find(v=>v.id===l);h&&(h.slot==="facade"?this.stats.equippedFacadeId=l:this.stats.equippedRoofId=l,st(this.stats),this.render())})}),(e=t.querySelector("#btn-towers-preset-max"))==null||e.addEventListener("click",()=>{this.stats=ht("unlock_all"),this.activeModal=null,this.render()}),(s=t.querySelector("#btn-towers-preset-mid"))==null||s.addEventListener("click",()=>{this.stats=ht("classic_sandbox"),this.activeModal=null,this.render()}),(a=t.querySelector("#btn-towers-preset-reset"))==null||a.addEventListener("click",()=>{this.stats=ht("fresh_lvl1"),this.activeModal=null,this.render()}),(n=t.querySelector("#btn-towers-instant-solve"))==null||n.addEventListener("click",()=>{this.activePuzzle&&(this.activeModal=null,this.board=X(this.activePuzzle.solution),this.checkWinAfterMove(),this.render())}),(b=t.querySelector("#btn-towers-retry-board"))==null||b.addEventListener("click",()=>{this.activePuzzle&&(this.activeModal=null,this.startPuzzleSession(this.activePuzzle,this.activeMode,this.activeCampaignLevel,{resetSeries:!0,cupStageIdx:this.activeCupStageIdx}))}),(m=t.querySelector("#btn-towers-win-map"))==null||m.addEventListener("click",()=>{this.activeModal=null,this.inBoardView=!1,this.render()}),(y=t.querySelector("#btn-towers-win-next"))==null||y.addEventListener("click",()=>{if(this.activeModal=null,this.activeMode==="campaign"&&this.activeCampaignLevel){const r=B.findIndex(v=>v.id===this.activeCampaignLevel.id),l=B[Math.min(B.length-1,r+1)];this.selectedEpisode=l.episode;const h=D(l.size,l.difficulty,l.seed,{id:l.id,title:l.cityName,code:l.code});this.startPuzzleSession(h,"campaign",l)}else if(this.activeMode==="endless"){const r=this.endlessWave<=2?4:this.endlessWave<=5?5:6,l=this.endlessWave<=2?"easy":this.endlessWave<=6?"medium":"hard",h=D(r,l,`TWR-ENDLESS-W${this.endlessWave}-${Date.now()}`);this.startPuzzleSession(h,"endless")}else this.inBoardView=!1,this.render()})}}class Ot{constructor(){c(this,"id","towers");c(this,"title","Towers");c(this,"sceneTheme","brick-city");c(this,"controller",null);c(this,"host",null)}mount(t,e){this.unmount(),this.host=e;const s={getUsername:()=>e.getUsername(),getPilotTag:()=>e.getPilotTag(),isBetaChannel:()=>e.isBetaChannel,getCloudSynced:()=>{var a;return((a=e.getCloudSynced)==null?void 0:a.call(e))??!1},canQuit:()=>{var a;return((a=e.canQuit)==null?void 0:a.call(e))??!1},renderTitlebar:()=>{var a;return((a=e.renderTitlebar)==null?void 0:a.call(e))??""},bindTitlebarEvents:()=>{var a;return(a=e.bindTitlebarEvents)==null?void 0:a.call(e)},onBackToHub:()=>e.returnToHub(),onOpenGlobalSettings:()=>e.openGlobalSettings(),onOpenGlobalProfile:()=>{var a;return(a=e.openGlobalProfile)==null?void 0:a.call(e)},onOpenSocialHub:()=>e.openSocialHub({pauseActiveGame:!0}),getSocialAttentionCount:()=>{var a;return((a=e.getSocialAttentionCount)==null?void 0:a.call(e))??0},getAudioSettings:()=>{var a;return((a=e.getAudioSettings)==null?void 0:a.call(e))??{soundEnabled:O.soundEnabled,musicEnabled:O.musicEnabled}},onToggleSound:()=>{var a;return(a=e.toggleSound)==null?void 0:a.call(e)},onToggleMusic:()=>{var a;return(a=e.toggleMusic)==null?void 0:a.call(e)},onQuitApp:()=>{var a;return(a=e.quitApp)==null?void 0:a.call(e)},playSound:(a,n)=>{a==="error"?O.playLockedBarrier():a==="win"?O.playVictory():a==="hint"?O.playGalaxyComplete(1):a==="erase"?O.playTrowelErase():a==="place"?O.playBrickPlace((n==null?void 0:n.floors)||2,(n==null?void 0:n.maxFloors)||6):O.playConsoleButton()}};this.controller=new Wt(s),this.controller.mount(t),e.setAudioScene(this.sceneTheme)}unmount(){this.controller&&(this.controller.destroy(),this.controller=null),this.host=null}refreshHostState(){var t,e;(t=this.controller)==null||t.syncStatsFromStorage(),(e=this.controller)==null||e.render()}onPauseForOverlay(){var t;(t=this.controller)==null||t.pauseIfPlaying()}handleBackNavigation(){return!this.controller||!this.host?!1:(this.controller.handleBackNavigation()||this.host.returnToHub(),!0)}}export{Ot as TowersPlugin};
