var ft=Object.defineProperty;var $t=(r,t,e)=>t in r?ft(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var v=(r,t,e)=>$t(r,typeof t!="symbol"?t+"":t,e);import{T as q,A as it,g as yt,a as ht,l as rt,v as lt,b as St,c as K,e as kt,s as J,r as W,d as mt,f as wt,h as zt,i as L,j as Ct,k as gt,m as Et,n as st,o as ot,p as R}from"./app.js";const Y={brickPrimary:"#b45309",brickSecondary:"#c2410c",mortar:"#572814",trim:"#fde68a",roofPrimary:"#f59e0b",roofAccent:"#fef3c7",windowLit:"#fef08a",windowGlass:"#38bdf8"};function ut(r,t){const e=q.find(s=>s.id===r),i=q.find(s=>s.id===t);return!e&&!i?Y:{brickPrimary:(e==null?void 0:e.primaryColor)||Y.brickPrimary,brickSecondary:(e==null?void 0:e.secondaryColor)||Y.brickSecondary,mortar:"#2b1810",trim:"#fde68a",roofPrimary:(i==null?void 0:i.primaryColor)||Y.roofPrimary,roofAccent:(i==null?void 0:i.secondaryColor)||Y.roofAccent,windowLit:"#fef08a",windowGlass:"#7dd3fc"}}function Tt(r,t,e){return r==="roof_spire"?`
      <rect x="13" y="${t-5}" width="6" height="5" fill="${e.roofPrimary}" />
      <rect x="14" y="${t-9}" width="4" height="4" fill="#e2e8f0" />
      <rect x="15" y="${t-11}" width="2" height="2" fill="#ef4444" />
      <rect x="14" y="${t-4}" width="4" height="3" fill="#0f172a" />
      <rect x="15" y="${t-3}" width="2" height="2" fill="#fde047" />
    `:r==="roof_pyramid"?`
      <rect x="7" y="${t-3}" width="18" height="3" fill="${e.roofPrimary}" />
      <rect x="10" y="${t-6}" width="12" height="3" fill="${e.roofAccent}" />
      <rect x="13" y="${t-8}" width="6" height="2" fill="${e.roofPrimary}" />
    `:r==="roof_halo"?`
      <rect x="10" y="${t-2}" width="2" height="2" fill="#78350f" />
      <rect x="20" y="${t-2}" width="2" height="2" fill="#78350f" />
      <rect x="9" y="${t-7}" width="14" height="5" fill="#92400e" />
      <rect x="9" y="${t-5}" width="14" height="1" fill="#334155" />
      <rect x="11" y="${t-9}" width="10" height="2" fill="${e.roofPrimary}" />
    `:r==="roof_sun"?`
      <rect x="11" y="${t-4}" width="10" height="4" fill="#334155" />
      <rect x="13" y="${t-8}" width="6" height="4" fill="${e.roofPrimary}" />
      <rect x="14" y="${t-7}" width="4" height="2" fill="#fef08a" />
      <rect x="15" y="${t-11}" width="2" height="3" fill="${e.roofAccent}" />
    `:`
    <rect x="9" y="${t-4}" width="4" height="4" fill="${e.mortar}" />
    <rect x="10" y="${t-3}" width="2" height="3" fill="${e.brickSecondary}" />
    <rect x="10" y="${t-6}" width="2" height="1" fill="#94a3b8" opacity="0.65" />
  `}function vt(r,t,e,i="roof_flat"){const s=Math.max(4,t),a=Math.max(1,Math.min(s,r)),y=a/s,m=Math.round(13+y*15),d=36-m,o=a===1,c=a>=6,h=o?6:5,p=o?20:22,k=[];for(let w=d+3;w<34;w+=3){const $=(w-d)/3%2===0?0:3;for(let f=h+1+$;f<h+p-2;f+=6)k.push(`<rect x="${f}" y="${w}" width="4" height="2" fill="${e.brickSecondary}" opacity="0.55" />`)}const S=[],u=Math.min(4,Math.max(1,Math.ceil(a/2)));if(o)S.push(`<rect x="9" y="${d+4}" width="6" height="4" fill="${e.windowLit}" />`,`<rect x="17" y="${d+4}" width="5" height="9" fill="#451a03" />`,`<rect x="7" y="${d+2}" width="18" height="2" fill="#ef4444" />`);else{for(let w=0;w<u;w++){const $=d+4+w*5;if($+3>32)break;const f=(a+w)%2===0,z=(a+w)%3!==0;S.push(`<rect x="${h+3}" y="${$}" width="4" height="3" fill="${f?e.windowLit:e.windowGlass}" />`,`<rect x="${h+9}" y="${$}" width="4" height="3" fill="${e.windowLit}" />`,`<rect x="${h+15}" y="${$}" width="4" height="3" fill="${z?e.windowLit:e.windowGlass}" />`)}S.push('<rect x="14" y="31" width="4" height="5" fill="#1c1917" />',`<rect x="13" y="30" width="6" height="1" fill="${e.trim}" />`)}const l=c?`
      <rect x="13" y="${d+2}" width="6" height="5" fill="#1e293b" />
      <rect x="14" y="${d+3}" width="4" height="3" fill="#fef3c7" />
      <rect x="16" y="${d+3}" width="1" height="2" fill="#0f172a" />
      <rect x="16" y="${d+4}" width="2" height="1" fill="#0f172a" />
    `:"";return`
    <svg class="tower-pixel-bldg-svg" viewBox="0 0 32 38" shape-rendering="crispEdges" aria-hidden="true">
      <!-- Ground sidewalk -->
      <rect x="2" y="36" width="28" height="2" fill="#090d16" />
      <rect x="3" y="35" width="26" height="1" fill="#475569" />
      <!-- Dark ink outline -->
      <rect x="${h-1}" y="${d-1}" width="${p+2}" height="${m+1}" fill="#090d16" />
      <!-- Masonry body -->
      <rect x="${h}" y="${d}" width="${p}" height="${m}" fill="${e.brickPrimary}" />
      ${k.join("")}
      <!-- Roof parapet -->
      <rect x="${h-1}" y="${d}" width="${p+2}" height="3" fill="${e.roofPrimary}" />
      <rect x="${h}" y="${d}" width="${p}" height="1" fill="${e.roofAccent}" />
      ${Tt(i,d,e)}
      ${S.join("")}
      ${l}
    </svg>
  `}function at(r,t=36){let e="#fbbf24",i="#d97706",s="#0284c7",a="#f97316";return r==="char_planner"?(e="#34d399",i="#059669",s="#0f766e",a="#fde047"):r==="char_skyline"?(e="#f97316",i="#c2410c",s="#334155",a="#38bdf8"):r==="char_neon"?(e="#ec4899",i="#9d174d",s="#312e81",a="#22d3ee"):r==="char_quantum"?(e="#a855f7",i="#6b21a8",s="#1e1b4b",a="#c084fc"):r==="char_emperor"&&(e="#fde047",i="#b45309",s="#7c2d12",a="#fef08a"),`
    <svg width="${t}" height="${t}" viewBox="0 0 16 16" shape-rendering="crispEdges" aria-hidden="true">
      <rect width="16" height="16" rx="2" fill="#0f172a" />
      <!-- Hard hat / Architect Crown -->
      <rect x="4" y="2" width="8" height="3" fill="${e}" />
      <rect x="3" y="4" width="10" height="2" fill="${i}" />
      <!-- Face -->
      <rect x="5" y="6" width="6" height="4" fill="#fdba74" />
      <rect x="6" y="7" width="1" height="1" fill="#0f172a" />
      <rect x="9" y="7" width="1" height="1" fill="#0f172a" />
      <!-- Jacket & Blueprint Tie -->
      <rect x="3" y="10" width="10" height="5" fill="${s}" />
      <rect x="7" y="10" width="2" height="4" fill="${a}" />
    </svg>
  `}function H(r){return r.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function Mt(r){const t=Math.max(0,Math.floor(r)),e=Math.floor(t/60),i=t%60;return`${String(e).padStart(2,"0")}:${String(i).padStart(2,"0")}`}const dt=[[1,3,2],[2,1,3],[3,2,1]],tt=[[1,0,0],[2,1,0],[3,0,1]];function Lt(r){const{step:t,miniBoard:e,selectedMiniCell:i,palId:s}=r,a=ut(s.facade,s.roof),y=e.every((o,c)=>o.every((h,p)=>h===dt[c][p])),m=[3,1,2],d=[2,2,1];return`
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
                ${m.map(o=>`<div class="mini-clue"><b>${o}</b><small>▾</small></div>`).join("")}
                ${[0,1,2].map(o=>`
                  <div class="mini-clue"><b>${d[o]}</b><small>▸</small></div>
                  ${[0,1,2].map(c=>{var l;const h=((l=e[o])==null?void 0:l[c])||0,p=tt[o][c]>0,k=i.r===o&&i.c===c,S=h>0&&h===dt[o][c],u=h>0&&h!==dt[o][c];return`
                        <button
                          type="button"
                          class="mini-cell ${p?"fixed":""} ${k?"selected":""} ${u?"wrong":S?"correct":""}"
                          data-tut-cell="${o}-${c}"
                        >
                          ${h>0?`<div class="mini-bldg-box">${vt(h,3,a,"roof_flat")}<span class="mini-bldg-num">${h}</span></div>`:'<span class="mini-empty-plus">+</span>'}
                        </button>
                      `}).join("")}
                `).join("")}
              </div>

              <div class="towers-tut-num-row">
                ${[1,2,3].map(o=>`
                  <button type="button" class="towers-mini-num-btn" data-tut-num="${o}">
                    🧱 ${o} Kat
                  </button>
                `).join("")}
                <button type="button" class="towers-mini-num-btn clear" data-tut-num="0">Sil</button>
              </div>
              <div class="towers-tut-status ${y?"ok":""}">
                ${y?"✅ Harika! Tüm 3×3 blok çözüldü, artık hazırsın!":`Seçili Kare: S${i.r+1}, K${i.c+1}`}
              </div>
            </div>
          </div>

          <div class="towers-modal-footer">
            ${t<3&&!y?'<button id="btn-towers-tutorial-next" class="towers-primary-cta">Sonraki Adım ➡️</button>':""}
            <button id="btn-towers-tutorial-practice" class="towers-primary-cta">
              🧱 ${y?"İlk Şehir #1-1 Başlat!":"Hemen #1-1 İle Başla"}
            </button>
          </div>
        </div>
      </div>
    </div>
  `}function xt(){return`
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
  `}function Pt(r){const t=ut(r.equippedFacadeId,r.equippedRoofId);return`
    <div class="towers-modal-backdrop" id="towers-workshop-modal">
      <div class="towers-modal-card wide">
        <div class="towers-modal-head">
          <div>
            <h3>🏗️ Mimar &amp; Tuğla Mahalle Atölyesi</h3>
            <p>Piksel mimarını seç ve apartman cepheleri ile tarihi çatı stillerini özelleştir.</p>
          </div>
          <div class="towers-modal-balance">
            <span>Bakiye: <strong>💠 ${r.blueprintGems}</strong></span>
            <button id="btn-towers-close-modal" class="towers-close-btn">✕</button>
          </div>
        </div>

        <div class="towers-modal-body">
          <h4 class="towers-section-sub">👷 Piksel Mimar Karakterleri (6 Rol)</h4>
          <div class="towers-workshop-grid">
            ${it.map(e=>{const i=r.unlockedCharacterIds.includes(e.id),s=r.equippedCharacterId===e.id,a=r.blueprintGems>=e.costGems;return`
                <div class="towers-shop-item ${s?"equipped":""}">
                  <div class="towers-shop-head-row">
                    <div class="towers-shop-avatar" style="border-color:${e.accentColor}">
                      ${at(e.id,38)}
                    </div>
                    <div class="towers-shop-info">
                      <strong>${H(e.name)}</strong>
                      <span class="role">${H(e.title)}</span>
                      <span class="perk">✨ Mimar Gücü +${e.powerScore}</span>
                    </div>
                  </div>
                  <p class="towers-shop-desc">${H(e.description)}</p>
                  <div class="towers-shop-action">
                    ${s?'<button class="towers-shop-btn equipped" disabled>✅ Aktif Mimar</button>':i?`<button class="towers-shop-btn equip" data-equip-char="${e.id}">👷 Seç</button>`:`<button class="towers-shop-btn buy" data-buy-char="${e.id}" ${a?"":"disabled"}>🔓 Aç (💠 ${e.costGems})</button>`}
                  </div>
                </div>
              `}).join("")}
          </div>

          <h4 class="towers-section-sub">🧱 Tuğla Cepheler &amp; Çatı Silüetleri</h4>
          <div class="towers-workshop-grid">
            ${q.map(e=>{const i=e.slot==="facade",s=r.unlockedCosmeticIds.includes(e.id),a=i?r.equippedFacadeId===e.id:r.equippedRoofId===e.id,y=r.blueprintGems>=e.costGems,m=i?{...t,brickPrimary:e.primaryColor,brickSecondary:e.secondaryColor}:{...t,roofPrimary:e.primaryColor,roofAccent:e.secondaryColor},d=i?r.equippedRoofId:e.id;return`
                <div class="towers-shop-item ${a?"equipped":""}">
                  <div class="towers-shop-head-row">
                    <div class="towers-shop-swatch brick-preview">
                      ${vt(4,5,m,d)}
                    </div>
                    <div class="towers-shop-info">
                      <strong>${H(e.name)}</strong>
                      <span class="role">${i?"🧱 Tuğla Cephe":"🏠 Çatı Tasarımı"}</span>
                    </div>
                  </div>
                  <p class="towers-shop-desc">${H(e.description)}</p>
                  <div class="towers-shop-action">
                    ${a?'<button class="towers-shop-btn equipped" disabled>✅ Kullanımda</button>':s?`<button class="towers-shop-btn equip" data-equip-cosmetic="${e.id}">🎨 Uygula</button>`:`<button class="towers-shop-btn buy" data-buy-cosmetic="${e.id}" ${y?"":"disabled"}>🔓 Aç (💠 ${e.costGems})</button>`}
                  </div>
                </div>
              `}).join("")}
          </div>
        </div>
      </div>
    </div>
  `}function At(r){const t=yt(r.architectXp),e=Object.values(r.bestTimesSec),i=e.length>0?Math.min(...e):null;return`
    <div class="towers-modal-backdrop" id="towers-profile-modal">
      <div class="towers-modal-card wide">
        <div class="towers-modal-head">
          <h3>🏆 Towers Başarımlar &amp; İstatistikler (LVL ${t.level} • ${H(t.title)})</h3>
          <button id="btn-towers-close-modal" class="towers-close-btn">✕</button>
        </div>
        <div class="towers-modal-body">
          <div class="towers-stats-summary-grid">
            <div class="towers-stat-box"><span>Çözülen Blok</span><strong>${r.totalSolved}</strong></div>
            <div class="towers-stat-box"><span>Toplam Puan</span><strong>${r.totalPoints}</strong></div>
            <div class="towers-stat-box"><span>En Hızlı Blok</span><strong>${i!==null?`${i} sn`:"—"}</strong></div>
            <div class="towers-stat-box"><span>İmar / Sis / Baret</span><strong>${(r.zoningSolvedCount||0)+(r.fogSolvedCount||0)+(r.survivalClearsCount||0)}</strong></div>
          </div>

          <h4 class="towers-section-sub">🎖️ Towers Başarımları (${r.unlockedAchievements.length} / ${ht.length})</h4>
          <div class="towers-ach-grid">
            ${ht.map(s=>`
                <div class="towers-ach-card ${r.unlockedAchievements.includes(s.id)?"unlocked":"locked"}">
                  <span class="ach-icon">${s.icon}</span>
                  <div>
                    <strong>${H(s.title)}</strong>
                    <p>${H(s.description)}</p>
                  </div>
                </div>
              `).join("")}
          </div>
        </div>
      </div>
    </div>
  `}function Bt(r){return`
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
              🔄 Sıfırla (LVL 1 Çırak Mimar)
            </button>
            ${r?`
              <button id="btn-towers-instant-solve" class="towers-primary-cta">
                ⚡ Aktif Sokağı Anında Çöz (Beta Test)
              </button>
            `:""}
          </div>
        </div>
      </div>
    </div>
  `}function Ht(r){const{elapsedSeconds:t,hintsUsed:e,summary:i,challengeKind:s}=r;return`
    <div class="towers-modal-backdrop" id="towers-victory-modal">
      <div class="towers-modal-card victory">
        <div class="towers-victory-stars">${"★".repeat(i.starsEarned)+"☆".repeat(Math.max(0,3-i.starsEarned))}</div>
        <h2>🧱 İnşaat Tamamlandı!</h2>
        <p>
          Süre: <strong>${Mt(t)}</strong> • Kullanılan İpucu: <strong>${e}</strong>
        </p>

        <div class="towers-victory-rewards">
          <div class="reward-pill">✨ +${i.xpGain} Mimar XP</div>
          <div class="reward-pill">💠 +${i.blueprintGain} Proje Kristali</div>
          ${s==="weekly_cup"&&i.cupScore?`<div class="reward-pill">🏆 Kupa Puanı: ${i.cupScore}</div>`:""}
        </div>

        ${i.leveledUp?'<div class="towers-levelup-banner">🎉 MİMAR SEVİYESİ YÜKSELDİ!</div>':""}
        ${i.newlyUnlockedAchievements.length>0?`<div class="towers-ach-unlock-strip">🏅 Yeni Başarım: ${i.newlyUnlockedAchievements.map(y=>`${y.icon} ${H(y.title)}`).join(" • ")}</div>`:""}

        <div class="towers-victory-actions">
          <button id="btn-towers-win-next" class="towers-primary-cta">➡️ Devam Et / Sıradaki Sokak</button>
          <button id="btn-towers-win-map" class="towers-secondary-cta">🏙️ Haritaya Dön</button>
        </div>
      </div>
    </div>
  `}function Kt(r){return`
    <div class="towers-modal-backdrop" id="towers-gameover-modal">
      <div class="towers-modal-card victory">
        <div class="towers-victory-stars">🪖✖️</div>
        <h2>🚧 Şantiye Durduruldu!</h2>
        <p>${H(r)}</p>
        <div class="towers-victory-actions">
          <button id="btn-towers-retry-board" class="towers-primary-cta">🔄 Tekrar Dene</button>
          <button id="btn-towers-win-map" class="towers-secondary-cta">🏙️ Şehir Menüsüne Dön</button>
        </div>
      </div>
    </div>
  `}function T(r){return r.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function N(r){const t=Math.max(0,Math.floor(r)),e=Math.floor(t/60),i=t%60;return`${String(e).padStart(2,"0")}:${String(i).padStart(2,"0")}`}function U(r){return r.map(t=>[...t])}function ct(r){return r.map(t=>t.map(e=>[...e]))}class qt{constructor(t){v(this,"host");v(this,"stats");v(this,"activeTab","campaign");v(this,"selectedEpisode",1);v(this,"activeModal",null);v(this,"tutorialStep",1);v(this,"tutorialMiniBoard",tt.map(t=>[...t]));v(this,"tutorialSelectedCell",{r:0,c:1});v(this,"customSize",4);v(this,"customDifficulty","easy");v(this,"customSeedInput","");v(this,"inBoardView",!1);v(this,"isPaused",!1);v(this,"activePuzzle",null);v(this,"activeMode","campaign");v(this,"activeChallengeKind","standard");v(this,"activeCupStageIdx",null);v(this,"activeCampaignLevel",null);v(this,"board",[]);v(this,"notes",[]);v(this,"history",[]);v(this,"redoStack",[]);v(this,"selectedCell",{r:0,c:0});v(this,"noteMode",!1);v(this,"activeHint",null);v(this,"activeSightRay",null);v(this,"hintsUsedThisGame",0);v(this,"elapsedSeconds",0);v(this,"timerHandle",null);v(this,"gameWon",!1);v(this,"gameOverReason","");v(this,"endlessWave",1);v(this,"blitzRemainingSeconds",120);v(this,"blitzScore",0);v(this,"blitzSolvedCount",0);v(this,"survivalLives",3);v(this,"survivalStreak",0);v(this,"lastWinSummary",null);v(this,"keydownHandler",null);v(this,"resizeHandler",null);v(this,"lastDesktopMode",typeof window<"u"?window.innerWidth>=900:!0);v(this,"mountEl",null);this.host=t,this.stats=rt()}reloadStats(){this.stats=rt()}getStats(){return this.stats}pauseIfPlaying(){this.inBoardView&&!this.gameWon&&!this.isPaused&&(this.isPaused=!0,this.render())}syncStatsFromStorage(){this.stats=rt()}handleBackNavigation(){return this.activeModal!==null?(this.activeModal=null,this.render(),!0):this.inBoardView?this.isPaused?(this.isPaused=!1,this.render(),!0):(this.stopTimer(),this.inBoardView=!1,this.render(),!0):!1}destroy(){this.stopTimer(),this.keydownHandler&&(window.removeEventListener("keydown",this.keydownHandler),this.keydownHandler=null),this.resizeHandler&&(window.removeEventListener("resize",this.resizeHandler),this.resizeHandler=null)}stopTimer(){this.timerHandle!==null&&(window.clearInterval(this.timerHandle),this.timerHandle=null)}startTimer(){this.stopTimer(),this.timerHandle=window.setInterval(()=>{if(!this.inBoardView||this.gameWon||this.isPaused||this.activeModal!==null)return;if(this.elapsedSeconds+=1,this.activeMode==="blitz"&&(this.blitzRemainingSeconds=Math.max(0,this.blitzRemainingSeconds-1),this.blitzRemainingSeconds<=0)){this.stopTimer(),this.inBoardView=!1,this.render();return}const t=document.getElementById("towers-hud-timer");t&&(t.textContent=this.activeMode==="blitz"?`⏱️ ${N(this.blitzRemainingSeconds)}`:`⏱️ ${N(this.elapsedSeconds)}`)},1e3)}mount(t){this.mountEl=t,this.reloadStats(),this.attachKeyboardListener(),this.attachResizeListener(),this.renderInto(t)}render(){const t=this.mountEl||document.getElementById("towers-mount-root")||document.getElementById("app");t&&this.renderInto(t)}attachResizeListener(){this.resizeHandler&&window.removeEventListener("resize",this.resizeHandler),this.resizeHandler=()=>{const t=window.innerWidth>=900;t!==this.lastDesktopMode&&(this.lastDesktopMode=t,this.render())},window.addEventListener("resize",this.resizeHandler)}attachKeyboardListener(){this.keydownHandler&&window.removeEventListener("keydown",this.keydownHandler),this.keydownHandler=t=>{if(!this.inBoardView||!this.activePuzzle||this.activeModal!==null||this.isPaused||document.activeElement&&["INPUT","TEXTAREA"].includes(document.activeElement.tagName))return;const e=this.activePuzzle.size;if(t.key==="ArrowUp")t.preventDefault(),this.selectedCell.r=(this.selectedCell.r-1+e)%e,this.render();else if(t.key==="ArrowDown")t.preventDefault(),this.selectedCell.r=(this.selectedCell.r+1)%e,this.render();else if(t.key==="ArrowLeft")t.preventDefault(),this.selectedCell.c=(this.selectedCell.c-1+e)%e,this.render();else if(t.key==="ArrowRight")t.preventDefault(),this.selectedCell.c=(this.selectedCell.c+1)%e,this.render();else if(t.key.toLowerCase()==="n")t.preventDefault(),this.noteMode=!this.noteMode,this.render();else if(t.key.toLowerCase()==="v")t.preventDefault(),this.toggleSightRayFromSelection();else if(t.key==="Backspace"||t.key==="Delete"||t.key==="0")t.preventDefault(),this.handleEraseInput();else if((t.ctrlKey||t.metaKey)&&t.key.toLowerCase()==="z")t.preventDefault(),this.handleUndo();else if((t.ctrlKey||t.metaKey)&&t.key.toLowerCase()==="y")t.preventDefault(),this.handleRedo();else if(/^[1-8]$/.test(t.key)){const i=Number(t.key);i>=1&&i<=e&&(t.preventDefault(),this.handleNumberInput(i))}},window.addEventListener("keydown",this.keydownHandler)}startPuzzleSession(t,e,i=null,s){var y,m;this.activePuzzle=t,this.activeMode=e,this.activeChallengeKind=t.challengeKind||"standard",this.activeCupStageIdx=(s==null?void 0:s.cupStageIdx)??null,this.activeCampaignLevel=i,this.board=U(t.givens),this.notes=Array.from({length:t.size},()=>Array.from({length:t.size},()=>[])),this.history=[],this.redoStack=[],this.selectedCell={r:0,c:0};let a=!1;for(let d=0;d<t.size&&!a;d++)for(let o=0;o<t.size;o++)if(t.givens[d][o]===0){this.selectedCell={r:d,c:o},a=!0;break}this.activeHint=null,this.activeSightRay=null,this.hintsUsedThisGame=0,this.elapsedSeconds=0,this.gameWon=!1,this.isPaused=!1,this.gameOverReason="",this.inBoardView=!0,e==="blitz"&&(s==null?void 0:s.resetSeries)!==!1?(this.blitzRemainingSeconds=120,this.blitzScore=0,this.blitzSolvedCount=0):this.activeChallengeKind==="survival"&&(s==null?void 0:s.resetSeries)!==!1&&(this.survivalLives=3,this.survivalStreak=0),this.startTimer(),(m=(y=this.host).playSound)==null||m.call(y,"click"),this.render()}pushHistory(){this.history.push({board:U(this.board),notes:ct(this.notes)}),this.history.length>100&&this.history.shift(),this.redoStack=[]}handleNumberInput(t){var m,d,o,c,h,p,k,S,u,l,w;if(!this.activePuzzle||this.gameWon||this.isPaused)return;const{r:e,c:i}=this.selectedCell;if(((m=this.activePuzzle.givens[e])==null?void 0:m[i])>0){(o=(d=this.host).playSound)==null||o.call(d,"error");return}if(this.pushHistory(),this.activeHint=null,this.noteMode){this.board[e][i]!==0&&(this.board[e][i]=0);const $=this.notes[e][i],f=$.indexOf(t);f>=0?$.splice(f,1):($.push(t),$.sort((z,x)=>z-x)),(h=(c=this.host).playSound)==null||h.call(c,"click"),this.render();return}if(this.board[e][i]=this.board[e][i]===t?0:t,this.notes[e][i]=[],this.board[e][i]===0){(k=(p=this.host).playSound)==null||k.call(p,"erase"),this.render();return}const s=this.board[e][i],a=lt(this.activePuzzle,this.board);if(a.duplicateKeys.has(`${e},${i}`)||a.zoningViolationKeys.has(`${e},${i}`)||this.activeChallengeKind==="survival"&&s!==this.activePuzzle.solution[e][i]){if((u=(S=this.host).playSound)==null||u.call(S,"error"),this.activeChallengeKind==="survival"&&(this.survivalLives=Math.max(0,this.survivalLives-1),this.survivalLives<=0)){this.stopTimer(),this.gameOverReason="3 inşaat baretinin tamamı tükendi! Kat çakışması veya hatalı kat yerleşimi şantiyeyi durdurdu.",this.activeModal="gameover",this.render();return}}else(w=(l=this.host).playSound)==null||w.call(l,"place",{floors:s,maxFloors:this.activePuzzle.size});this.checkWinAfterMove(),this.render()}handleEraseInput(){var i,s,a;if(!this.activePuzzle||this.gameWon||this.isPaused)return;const{r:t,c:e}=this.selectedCell;((i=this.activePuzzle.givens[t])==null?void 0:i[e])>0||this.board[t][e]===0&&this.notes[t][e].length===0||(this.pushHistory(),this.board[t][e]=0,this.notes[t][e]=[],this.activeHint=null,(a=(s=this.host).playSound)==null||a.call(s,"erase"),this.render())}handleUndo(){var e,i;if(this.history.length===0||this.gameWon||this.isPaused)return;this.redoStack.push({board:U(this.board),notes:ct(this.notes)});const t=this.history.pop();this.board=t.board,this.notes=t.notes,this.activeHint=null,(i=(e=this.host).playSound)==null||i.call(e,"click"),this.render()}handleRedo(){var e,i;if(this.redoStack.length===0||this.gameWon||this.isPaused)return;this.history.push({board:U(this.board),notes:ct(this.notes)});const t=this.redoStack.pop();this.board=t.board,this.notes=t.notes,this.activeHint=null,(i=(e=this.host).playSound)==null||i.call(e,"click"),this.render()}handleSmartHint(){var e,i;if(!this.activePuzzle||this.gameWon||this.isPaused)return;const t=St(this.activePuzzle,this.board);if(t){if(this.activeHint=t,this.selectedCell={r:t.r,c:t.c},this.hintsUsedThisGame+=1,t.focusClueKey){const[s,a]=t.focusClueKey.split(":");this.activeSightRay={side:s,index:Number(a)||0}}(i=(e=this.host).playSound)==null||i.call(e,"hint"),this.render()}}applyActiveHintMove(){var s,a,y;if(!this.activeHint||!this.activePuzzle||this.gameWon)return;const{r:t,c:e,value:i}=this.activeHint;((s=this.activePuzzle.givens[t])==null?void 0:s[e])>0||(this.pushHistory(),this.board[t][e]=i,this.notes[t][e]=[],this.activeHint=null,(y=(a=this.host).playSound)==null||y.call(a,"place",{floors:i,maxFloors:this.activePuzzle.size}),this.checkWinAfterMove(),this.render())}toggleSightRayFromSelection(){var t,e;this.activePuzzle&&(this.activeSightRay?this.activeSightRay.side==="left"||this.activeSightRay.side==="right"?this.activeSightRay={side:"top",index:this.selectedCell.c}:this.activeSightRay=null:this.activeSightRay={side:"left",index:this.selectedCell.r},(e=(t=this.host).playSound)==null||e.call(t,"click"),this.render())}checkWinAfterMove(){var a,y,m,d,o,c,h;if(!this.activePuzzle||this.gameWon||!lt(this.activePuzzle,this.board).isSolved)return;const e=new Date().toISOString().slice(0,10);if(this.activeMode==="blitz"){this.blitzSolvedCount+=1,this.blitzScore+=180+Math.max(0,25-this.hintsUsedThisGame*20),this.blitzScore>this.stats.bestBlitzScore&&(this.stats.bestBlitzScore=this.blitzScore);const p=`TWR-BLITZ-${Date.now()}-${this.blitzSolvedCount}`,k=K(4,"easy",p,{title:`⚡ Blitz Kule #${this.blitzSolvedCount+1}`});(y=(a=this.host).playSound)==null||y.call(a,"win");const S=kt(this.stats,{elapsedSec:this.elapsedSeconds,hintsUsed:this.hintsUsedThisGame,size:4,isDaily:!1});S.length>0&&(this.stats.blueprintGems+=S.length),J(this.stats),W("towers_solve"),this.hintsUsedThisGame===0&&W("no_hint_solve"),this.startPuzzleSession(k,"blitz",null,{resetSeries:!1});return}if(this.activeMode==="endless"){this.endlessWave>this.stats.bestEndlessWave&&(this.stats.bestEndlessWave=this.endlessWave),this.endlessWave+=1;const p=mt(this.stats,{puzzleId:this.activePuzzle.id,size:this.activePuzzle.size,difficulty:this.activePuzzle.difficulty,elapsedSec:this.elapsedSeconds,hintsUsed:this.hintsUsedThisGame});this.stats=p.nextStats,W("towers_solve"),this.hintsUsedThisGame===0&&W("no_hint_solve"),this.gameWon=!0,this.stopTimer(),this.lastWinSummary={starsEarned:p.starsEarned,xpGain:p.xpEarned,blueprintGain:p.gemsEarned,leveledUp:p.leveledUp,newlyUnlockedAchievements:p.newlyUnlockedAchievements},this.activeModal="victory",(d=(m=this.host).playSound)==null||d.call(m,"win");return}this.activeChallengeKind==="zoning"?this.stats.zoningSolvedCount=(this.stats.zoningSolvedCount||0)+1:this.activeChallengeKind==="fog"?this.stats.fogSolvedCount=(this.stats.fogSolvedCount||0)+1:this.activeChallengeKind==="survival"&&(this.survivalStreak+=1,this.stats.survivalClearsCount=(this.stats.survivalClearsCount||0)+1);let i;if(this.activeChallengeKind==="weekly_cup"&&this.activeCupStageIdx!==null){const p=wt(),k=zt(this.activePuzzle.size,this.elapsedSeconds,this.hintsUsedThisGame);i=k;const S=this.stats.weeklyCupKey,u=S===p&&Array.isArray(this.stats.weeklyCupScores)?[...this.stats.weeklyCupScores]:[0,0,0],l=S===p&&Array.isArray(this.stats.weeklyCupRewarded)?[...this.stats.weeklyCupRewarded]:[!1,!1,!1];u[this.activeCupStageIdx]=Math.max(u[this.activeCupStageIdx]||0,k),l[this.activeCupStageIdx]=!0,this.stats.weeklyCupKey=p,this.stats.weeklyCupScores=u,this.stats.weeklyCupRewarded=l}this.gameWon=!0,this.stopTimer();const s=mt(this.stats,{puzzleId:((o=this.activeCampaignLevel)==null?void 0:o.id)||this.activePuzzle.id,size:this.activePuzzle.size,difficulty:this.activePuzzle.difficulty,elapsedSec:this.elapsedSeconds,hintsUsed:this.hintsUsedThisGame,isDaily:this.activeMode==="daily",dailyDateKey:this.activeMode==="daily"?e:void 0,campaignLevel:this.activeCampaignLevel?{goldSec:this.activeCampaignLevel.goldSec,silverSec:this.activeCampaignLevel.silverSec}:null});this.stats=s.nextStats,W("towers_solve"),this.hintsUsedThisGame===0&&W("no_hint_solve"),this.activeChallengeKind==="weekly_cup"&&W("duel_or_cup"),this.lastWinSummary={starsEarned:s.starsEarned,xpGain:s.xpEarned,blueprintGain:s.gemsEarned,leveledUp:s.leveledUp,newlyUnlockedAchievements:s.newlyUnlockedAchievements,cupScore:i},this.activeModal="victory",(h=(c=this.host).playSound)==null||h.call(c,"win")}getUnlockedCampaignIndex(){let t=-1;for(let e=0;e<L.length;e++)this.stats.solvedIds.includes(L[e].id)&&(t=e);return Math.min(L.length-1,t+1)}renderInto(t){var a,y,m,d;const e=typeof window<"u"?window.innerWidth>=900:!0;this.lastDesktopMode=e;const i=((y=(a=this.host).renderTitlebar)==null?void 0:y.call(a))||"",s=this.inBoardView&&this.activePuzzle?this.renderBoardScreenHTML():this.renderHubScreenHTML(e);t.innerHTML=`
      ${i}
      <div class="screen-body ${this.inBoardView?"towers-board-body":"menu-mode towers-menu-mode"}" id="towers-screen">
        ${s}
        ${this.renderActiveModal()}
      </div>
    `,(d=(m=this.host).bindTitlebarEvents)==null||d.call(m),this.bindEvents(t)}renderHubScreenHTML(t){var S,u,l,w,$,f,z,x;const e=this.host.getUsername(),i=this.host.getPilotTag(),s=this.host.isBetaChannel(),a=((u=(S=this.host).getCloudSynced)==null?void 0:u.call(S))??!1,y=((w=(l=this.host).canQuit)==null?void 0:w.call(l))??!1,m=yt(this.stats.architectXp),d=it.find(g=>g.id===this.stats.equippedCharacterId)||it[0],o=Ct(this.stats),c=(this.stats.solvedIds||[]).filter(g=>L.some(M=>M.id===g)).length,h=((f=($=this.host).getSocialAttentionCount)==null?void 0:f.call($))??0,p=((x=(z=this.host).getAudioSettings)==null?void 0:x.call(z))??{soundEnabled:!0,musicEnabled:!0},k=[{id:"campaign",icon:"🏙️",label:"Şehir Haritası",badge:`${c}/60`},{id:"challenges",icon:"🚧",label:"Challenge & Kupa",badge:"3+1"},{id:"daily",icon:"🧱",label:"Günlük Bina",badge:this.stats.dailyStreak>0?`🔥${this.stats.dailyStreak}`:""},{id:"blitz",icon:"⚡",label:"Kule Blitz",badge:""},{id:"endless",icon:"🏗️",label:"Sonsuz İnşaat",badge:""},{id:"custom",icon:"🎲",label:"Serbest Mimari",badge:""}];return`
      <header class="main-menu-topbar towers-menu-topbar">
        <div class="topbar-left">
          <button type="button" class="arcade-return-chip" id="btn-towers-back-hub" title="1000in1 Kaset Odasına Dön">🕹️ Kaset</button>
          <div class="topbar-desktop-telemetry">
            <span class="topbar-sector-pill towers-sector-pill">🧱 TOWERS • ${c}/${L.length} Mahalle • ⭐ ${o}/${L.length*3}</span>
            ${s?'<button type="button" class="beta-badge beta-lab-trigger" id="btn-towers-beta-lab" title="Towers Beta Test Laboratuvarı">🧪 BETA LAB</button>':""}
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
          ${y?'<button type="button" class="steam-btn quit-btn" id="btn-towers-quit"><div>ÇIKIŞ</div></button>':""}
        </div>
      </header>

      <main class="main-tab-stage towers-main-stage">
        <section class="towers-architect-hero">
          <div class="towers-architect-card">
            <div class="towers-architect-avatar" style="border-color:${d.accentColor}">
              ${at(d.id,46)}
            </div>
            <div class="towers-architect-info">
              <div class="towers-architect-head">
                <span class="towers-architect-name">${T(d.name)}</span>
                <span class="towers-architect-role">${T(d.title)}</span>
                <span class="towers-perk-chip">🧱 Güç +${d.powerScore}</span>
              </div>
              <div class="towers-xp-bar-wrap">
                <div class="towers-xp-labels">
                  <span><strong>Mimar LVL ${m.level}</strong> • ${T(m.title)}</span>
                  <span>${m.currentXp} / ${m.nextLevelXp} XP (%${m.progressPct})</span>
                </div>
                <div class="towers-xp-track">
                  <div class="towers-xp-fill" style="width:${m.progressPct}%"></div>
                </div>
              </div>
            </div>
          </div>

          <div class="towers-Currencies-row">
            <div class="towers-stat-chip"><span class="lbl">Proje Kristali</span><strong class="val">💠 ${this.stats.blueprintGems}</strong></div>
            <div class="towers-stat-chip"><span class="lbl">Mahalle</span><strong class="val">🏘️ ${c} / 60</strong></div>
            <div class="towers-stat-chip"><span class="lbl">Yıldız</span><strong class="val">⭐ ${o}</strong></div>
            <div class="towers-stat-chip"><span class="lbl">Başarım</span><strong class="val">🏅 ${this.stats.unlockedAchievements.length}/24</strong></div>
          </div>
        </section>

        ${t?"":`
          <div class="towers-mobile-mode-strip" role="tablist">
            ${k.map(g=>`
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
            ${k.map(g=>`
              <button type="button" class="bottom-nav-tab ${this.activeTab===g.id?"active":""}" data-towers-tab="${g.id}">
                <span class="discord-nav-indicator" aria-hidden="true"></span>
                <span class="tab-icon">${g.icon}</span>
                <span class="tab-label">${g.label}</span>
                ${g.badge?`<span class="tab-badge">${T(g.badge)}</span>`:""}
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
              <span class="tab-badge">${this.stats.unlockedAchievements.length}/${ht.length}</span>
            </button>
          </div>

          <div class="desktop-sidebar-footer discord-user-dock">
            <div class="discord-voice-ship-strip">
              <div class="sidebar-ship-preview">
                ${at(d.id,30)}
              </div>
              <div class="discord-voice-ship-info">
                <span class="discord-conn-green">● Şantiye Hazır</span>
                <small class="discord-conn-sub">LVL ${m.level} • ${T(d.name)}</small>
              </div>
              <button type="button" class="sidebar-hangar-mini-btn" id="btn-towers-workshop">🏗️ Atölye</button>
            </div>

            <div class="discord-user-bar">
              <button type="button" class="discord-user-identity profile-badge" id="btn-towers-open-profile" title="Ortak Oyuncu Kimliği">
                <div class="discord-user-avatar">
                  ${at(d.id,28)}
                  <span class="discord-presence-dot ${a?"online":"guest"}"></span>
                </div>
                <div class="discord-user-meta">
                  <strong class="discord-user-nick">${T(e)}<small>#${T(i)}</small></strong>
                  <span class="discord-user-sub">${this.stats.totalPoints} Puan</span>
                </div>
              </button>
              <div class="discord-user-controls">
                <button type="button" class="discord-ctrl-btn ${p.soundEnabled?"is-on":"is-muted"}" id="btn-towers-dock-sfx" title="Ses Efektleri">🔊</button>
                <button type="button" class="discord-ctrl-btn ${p.musicEnabled?"is-on":"is-muted"}" id="btn-towers-dock-music" title="Şehir Müziği">🎵</button>
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
    `}renderTabContent(){if(this.activeTab==="campaign"){const t=this.getUnlockedCampaignIndex(),e=L[t]||L[0],i=L.filter(a=>a.episode===this.selectedEpisode),s={1:"1. Evre: Tuğla Mahalle (4×4 – 6×6)",2:"2. Evre: Klasik Apartmanlar (4×4 – 7×7)",3:"3. Evre: Saat Kuleleri (5×5 – 7×7)",4:"4. Evre: Taş Rezidanslar (5×5 – 8×8)",5:"5. Evre: Büyük Metropol (6×6 – 8×8)"};return`
        <div class="towers-campaign-wrap">
          <div class="towers-campaign-header">
            <div>
              <h2>🏙️ Tuğla Şehir Seferi (60 Mahalle)</h2>
              <p>Her mahallede 1..N kat dengesini kurarak apartman silüetini tamamla ve ★★★ yıldız kazan.</p>
            </div>
            <button id="btn-towers-play-next" class="towers-primary-cta" data-start-campaign="${e.id}">
              ▶️ Sıradaki Mahalle: ${T(e.code)} (${T(e.cityName)})
            </button>
          </div>

          <div class="towers-episode-tabs">
            ${[1,2,3,4,5].map(a=>`
              <button type="button" class="towers-ep-btn ${this.selectedEpisode===a?"active":""}" data-towers-ep="${a}">
                ${T(s[a])}
              </button>
            `).join("")}
          </div>

          <div class="towers-cities-grid">
            ${i.map(a=>{const y=L.findIndex(k=>k.id===a.id),m=this.stats.solvedIds.includes(a.id),d=y<=t||m,o=this.stats.levelStars[a.id]||0,c="★".repeat(o)+"☆".repeat(Math.max(0,3-o)),h=this.stats.bestTimesSec[a.id],p=a.difficulty==="easy"?"Kolay":a.difficulty==="medium"?"Orta":"Zor";return`
                  <article class="towers-city-card ${m?"completed":""} ${d?"unlocked":"locked"}" data-city-card="${a.id}">
                    <div class="towers-city-top">
                      <span class="towers-city-code">#${T(a.code)}</span>
                      <span class="towers-city-size">${a.size}×${a.size} • ${p}</span>
                    </div>
                    <div class="towers-city-icon">${m?"🏘️":d?"🧱":"🔒"}</div>
                    <h4 class="towers-city-name">${T(a.cityName)}</h4>
                    <div class="towers-city-meta">
                      <span class="towers-city-stars ${o>0?"earned":""}">${c}</span>
                      <span class="towers-city-time">${h?`⏱️ ${N(h)}`:`Hedef: ${N(a.goldSec)}`}</span>
                    </div>
                    <button
                      type="button"
                      class="towers-city-play-btn"
                      data-start-campaign="${a.id}"
                      ${d?"":"disabled"}
                    >
                      ${m?"🔄 Tekrar İnşa Et":d?"🧱 İnşaata Başla":"🔒 Önceki Mahalleyi Bitir"}
                    </button>
                  </article>
                `}).join("")}
          </div>
        </div>
      `}if(this.activeTab==="challenges"){const t=wt(),e=gt(t),i=this.stats.weeklyCupKey===t&&Array.isArray(this.stats.weeklyCupScores)?this.stats.weeklyCupScores:[0,0,0];return`
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
                <h3>🏆 Haftalık Mimar Kupası (${T(t)})</h3>
                <p>Tüm oyuncularla aynı 3 sabit tohumlu tuğla sokak etabı üzerinden yüksek skor yarışı.</p>
              </div>
              <span class="towers-cup-total">Toplam: ${i[0]+i[1]+i[2]} P</span>
            </div>
            <div class="towers-cup-grid">
              ${e.map(s=>{const a=i[s.index]||0;return`
                    <div class="towers-cup-stage ${a>0?"done":""}">
                      <div class="stage-top"><strong>${s.label}</strong><span>${s.size}×${s.size}</span></div>
                      <small>${T(s.subtitle)}</small>
                      <div class="stage-score">${a>0?`Skor: <b>${a} P</b>`:"Henüz Çözülmedi"}</div>
                      <button type="button" class="towers-city-play-btn" data-towers-cup-stage="${s.index}">
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
              <input id="inp-towers-custom-seed" class="towers-seed-input" type="text" placeholder="Örn: TWR-5-ORTA-2026" value="${T(this.customSeedInput)}" />
            </div>
          </div>
          <button id="btn-towers-start-custom" class="towers-primary-cta">🎲 ${this.customSize}×${this.customSize} İnşaata Başla</button>
        </div>
      </div>
    `}renderBoardScreenHTML(){var k,S;const t=this.activePuzzle,e=t.size,i=lt(t,this.board),s=q.find(u=>u.id===this.stats.equippedFacadeId)||q[0],a=q.find(u=>u.id===this.stats.equippedRoofId)||q[5],y=ut(s.id,a.id),m=new Int32Array(e+1);for(let u=0;u<e;u++)for(let l=0;l<e;l++){const w=this.board[u][l];w>=1&&w<=e&&m[w]++}const d=new Map;let o="";if(this.activeSightRay){const{side:u,index:l}=this.activeSightRay,w=!!((S=(k=t.hiddenCluesMask)==null?void 0:k[u])!=null&&S[l]),$=w?0:t.clues[u][l],f=[];for(let g=0;g<e;g++){let M=l,P=g;u==="top"?(M=g,P=l):u==="bottom"?(M=e-1-g,P=l):u==="left"?(M=l,P=g):(M=l,P=e-1-g),f.push({r:M,c:P})}const z=Et(f,this.board,$,u,l);z.visibleCells.forEach(g=>d.set(`${g.r},${g.c}`,"visible")),z.hiddenCells.forEach(g=>d.set(`${g.r},${g.c}`,"blocked")),o=`
        <div class="towers-sight-banner" id="towers-sight-banner">
          <span>👁️ <strong>Görüş Hattı (${u==="top"?`${l+1}. Sütun (Üstten ▾)`:u==="bottom"?`${l+1}. Sütun (Alttan ▴)`:u==="left"?`${l+1}. Satır (Soldan ▸)`:`${l+1}. Satır (Sağdan ◂)`}):</strong> ${w?"Sisli İpucu (?)":`Hedef = <b>${$||"Yok"}</b>`} • <b class="sight-ok">Görüldü: ${z.visibleCells.length}</b> • <b class="sight-hid">Örtüldü: ${z.hiddenCells.length}</b></span>
          <button type="button" id="btn-towers-clear-sight" class="towers-mini-btn">Kapat ✕</button>
        </div>
      `}const c=this.activeMode==="campaign"&&this.activeCampaignLevel?`🏘️ #${this.activeCampaignLevel.code}: ${this.activeCampaignLevel.cityName}`:this.activeMode==="daily"?"🧱 Günlük Bina":this.activeMode==="endless"?`🏗️ Dalga #${this.endlessWave}`:this.activeMode==="blitz"?`⚡ Blitz: ${this.blitzScore} P`:this.activeChallengeKind==="zoning"?"🚧 İmar Kısıtı":this.activeChallengeKind==="fog"?"🌫️ Sisli Sokak":this.activeChallengeKind==="survival"?"🪖 3 Baret Hayatta Kalma":this.activeChallengeKind==="weekly_cup"?`🏆 Kupa Etabı #${(this.activeCupStageIdx??0)+1}`:`🎲 Serbest (${e}×${e})`,h=(u,l)=>{var $,f;if((f=($=t.hiddenCluesMask)==null?void 0:$[u])!=null&&f[l])return"fogged";const w=`${u}:${l}`;return i.violatedClueKeys.has(w)?"violated":i.satisfiedClueKeys.has(w)?"satisfied":"pending"},p=(u,l,w)=>{var M,P,B,I;const $=!!((P=(M=t.hiddenCluesMask)==null?void 0:M[u])!=null&&P[l]),f=t.clues[u][l],z=h(u,l),x=((B=this.activeSightRay)==null?void 0:B.side)===u&&((I=this.activeSightRay)==null?void 0:I.index)===l,g=$?"🌫️":f>0?String(f):"·";return`
        <button
          type="button"
          class="towers-clue-cell ${u} ${z} ${x?"active-ray":""}"
          data-towers-clue="${u}-${l}"
          title="${$?"Sisli İpucu":"Görüş Hattını Göster / Gizle"}"
        >
          ${u==="right"||u==="bottom"?`<span class="clue-arrow">${w}</span><span class="clue-num">${g}</span>`:`<span class="clue-num">${g}</span><span class="clue-arrow">${w}</span>`}
        </button>
      `};return`
      <div class="towers-board-screen" id="towers-board-screen">
        <div class="towers-board-hud">
          <div class="hud-left-btns">
            <button type="button" id="btn-towers-leave-board" class="towers-back-map-btn">⬅️ Menü</button>
            <button type="button" id="btn-towers-pause" class="towers-back-map-btn">${this.isPaused?"▶️ Sürdür":"⏸️ Duraklat"}</button>
          </div>

          <div class="towers-hud-center">
            <span class="towers-hud-title">${T(c)}</span>
            <span class="towers-hud-sub">${e}×${e} • ${T(s.name)}</span>
          </div>

          <div class="towers-hud-metrics">
            ${this.activeChallengeKind==="survival"?`<span class="towers-hud-pill survival-lives">${"🪖".repeat(this.survivalLives)}${"⚫".repeat(Math.max(0,3-this.survivalLives))}</span>`:""}
            <span class="towers-hud-pill" id="towers-hud-timer">
              ⏱️ ${this.activeMode==="blitz"?N(this.blitzRemainingSeconds):N(this.elapsedSeconds)}
            </span>
            <button type="button" id="btn-towers-sight-toggle" class="towers-hud-pill btn-pill ${this.activeSightRay?"active":""}" title="Görüş Hattını İncele (V)">
              👁️ Görüş
            </button>
            ${this.host.isBetaChannel()?'<button type="button" id="btn-towers-beta-lab" class="towers-beta-chip">🧪</button>':""}
          </div>
        </div>

        ${o}

        ${this.activeHint?`
          <div class="towers-hint-banner" id="towers-hint-banner">
            <div class="towers-hint-text">
              <strong>💡 ${T(this.activeHint.ruleTitle)}:</strong> ${T(this.activeHint.message)}
            </div>
            <button type="button" id="btn-towers-apply-hint" class="towers-apply-hint-btn">
              🧱 ${this.activeHint.value} Kat Dik (S${this.activeHint.r+1}, K${this.activeHint.c+1})
            </button>
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
          <div class="towers-matrix" id="towers-matrix" style="--towers-size: ${e};">
            <div class="towers-corner-spacer"></div>
            ${Array.from({length:e},(u,l)=>p("top",l,"▾")).join("")}
            <div class="towers-corner-spacer"></div>

            ${Array.from({length:e},(u,l)=>{const w=Array.from({length:e},($,f)=>{var O,V,j,F;const z=this.board[l][f],x=t.givens[l][f]>0,g=this.selectedCell.r===l&&this.selectedCell.c===f,M=i.duplicateKeys.has(`${l},${f}`),P=i.zoningViolationKeys.has(`${l},${f}`),B=((V=(O=t.maxHeightLimits)==null?void 0:O[l])==null?void 0:V[f])||0,I=((j=this.activeHint)==null?void 0:j.r)===l&&((F=this.activeHint)==null?void 0:F.c)===f,G=d.get(`${l},${f}`)||"",D=this.notes[l][f];return`
                  <div
                    class="towers-cell ${z>0?"has-tower":"empty"} ${x?"given":""} ${g?"selected":""} ${M||P?"conflict":""} ${I?"hint-target":""} ${B>0?"zoned":""} ${G?`sight-${G}`:""}"
                    data-towers-cell="${l}-${f}"
                    data-row="${l}"
                    data-col="${f}"
                    data-val="${z}"
                  >
                    ${B>0?`<span class="tower-zone-badge" title="İmar Kısıtı: Maksimum ${B} kat">≤${B}</span>`:""}
                    ${z>0?`
                      <div class="tower-pixel-bldg-wrap">
                        ${vt(z,e,y,a.id)}
                        <span class="tower-height-badge ${x?"given-badge":""}">${z}</span>
                      </div>
                    `:D.length>0?`
                      <div class="tower-notes-grid">
                        ${Array.from({length:e},(nt,et)=>{const _=et+1;return`<span class="tower-note-item ${D.includes(_)?"on":""}">${D.includes(_)?_:""}</span>`}).join("")}
                      </div>
                    `:'<span class="tower-foundation-dot"></span>'}
                    ${G==="visible"?'<span class="tower-sight-tag visible" title="Görüldü">👁️</span>':G==="blocked"?'<span class="tower-sight-tag blocked" title="Önündeki yüksek bina tarafından örtüldü">⬛</span>':""}
                  </div>
                `}).join("");return`${p("left",l,"▸")}${w}${p("right",l,"◂")}`}).join("")}

            <div class="towers-corner-spacer"></div>
            ${Array.from({length:e},(u,l)=>p("bottom",l,"▴")).join("")}
            <div class="towers-corner-spacer"></div>
          </div>
        </div>

        <div class="towers-controls-dock">
          <div class="towers-numpad" role="group" aria-label="Bina Kat Yüksekliği">
            ${Array.from({length:e},(u,l)=>{const w=l+1,$=Math.max(0,e-m[w]);return`
                <button
                  type="button"
                  class="towers-num-btn ${this.noteMode?"note-active":""} ${$===0?"all-placed":""}"
                  data-towers-num="${w}"
                >
                  <span class="num-main">${w}</span>
                  <span class="num-lbl">${this.noteMode?"Not":$===0?"✓":`×${$}`}</span>
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
    `}renderActiveModal(){return this.activeModal?this.activeModal==="tutorial"?Lt({step:this.tutorialStep,miniBoard:this.tutorialMiniBoard,selectedMiniCell:this.tutorialSelectedCell,palId:{facade:this.stats.equippedFacadeId,roof:this.stats.equippedRoofId}}):this.activeModal==="rules"?xt():this.activeModal==="workshop"?Pt(this.stats):this.activeModal==="profile"?At(this.stats):this.activeModal==="beta-lab"?Bt(this.inBoardView):this.activeModal==="gameover"?Kt(this.gameOverReason):this.activeModal==="victory"&&this.lastWinSummary?Ht({elapsedSeconds:this.elapsedSeconds,hintsUsed:this.hintsUsedThisGame,challengeKind:this.activeChallengeKind,summary:this.lastWinSummary}):"":""}bindEvents(t){var i,s,a,y,m,d,o,c,h,p,k,S,u,l,w,$,f,z,x,g,M,P,B,I,G,D,O,V,j,F,nt,et,_,pt;(i=t.querySelector("#btn-towers-back-hub"))==null||i.addEventListener("click",()=>{this.stopTimer(),this.host.onBackToHub()}),(s=t.querySelector("#btn-towers-open-social"))==null||s.addEventListener("click",()=>{var n,b;(b=(n=this.host).onOpenSocialHub)==null||b.call(n)}),(a=t.querySelector("#btn-towers-open-profile"))==null||a.addEventListener("click",()=>{var n,b;(b=(n=this.host).onOpenGlobalProfile)==null||b.call(n)}),(y=t.querySelector("#btn-towers-dock-sfx"))==null||y.addEventListener("click",()=>{var n,b;(b=(n=this.host).onToggleSound)==null||b.call(n),this.render()}),(m=t.querySelector("#btn-towers-dock-music"))==null||m.addEventListener("click",()=>{var n,b;(b=(n=this.host).onToggleMusic)==null||b.call(n),this.render()}),(d=t.querySelector("#btn-towers-quit"))==null||d.addEventListener("click",()=>{var n,b;(b=(n=this.host).onQuitApp)==null||b.call(n)}),(o=t.querySelector("#btn-towers-tutorial"))==null||o.addEventListener("click",()=>{this.tutorialStep=1,this.tutorialMiniBoard=tt.map(n=>[...n]),this.tutorialSelectedCell={r:0,c:1},this.activeModal="tutorial",this.render()}),(c=t.querySelector("#btn-towers-rules"))==null||c.addEventListener("click",()=>{this.activeModal="rules",this.render()}),(h=t.querySelector("#btn-towers-workshop"))==null||h.addEventListener("click",()=>{this.activeModal="workshop",this.render()}),(p=t.querySelector("#btn-towers-profile"))==null||p.addEventListener("click",()=>{this.activeModal="profile",this.render()}),(k=t.querySelector("#btn-towers-settings"))==null||k.addEventListener("click",()=>{this.host.onOpenGlobalSettings()}),(S=t.querySelector("#btn-towers-beta-lab"))==null||S.addEventListener("click",()=>{this.activeModal="beta-lab",this.render()}),(u=t.querySelector("#btn-towers-close-modal"))==null||u.addEventListener("click",()=>{this.activeModal=null,this.render()}),t.querySelectorAll("[data-tut-step]").forEach(n=>{n.addEventListener("click",()=>{this.tutorialStep=Number(n.dataset.tutStep)||1,this.render()})}),t.querySelectorAll("[data-tut-cell]").forEach(n=>{n.addEventListener("click",()=>{var X,Z,Q;const[b,C]=(n.dataset.tutCell||"0-0").split("-"),E=Number(b)||0,A=Number(C)||0;((X=tt[E])==null?void 0:X[A])>0||(this.tutorialSelectedCell={r:E,c:A},(Q=(Z=this.host).playSound)==null||Q.call(Z,"click"),this.render())})}),t.querySelectorAll("[data-tut-num]").forEach(n=>{n.addEventListener("click",()=>{var A,X,Z,Q,bt;const b=Number(n.dataset.tutNum)||0,{r:C,c:E}=this.tutorialSelectedCell;((A=tt[C])==null?void 0:A[E])>0||(this.tutorialMiniBoard[C][E]=b,b>0?(Z=(X=this.host).playSound)==null||Z.call(X,"place",{floors:b,maxFloors:3}):(bt=(Q=this.host).playSound)==null||bt.call(Q,"erase"),this.render())})}),(l=t.querySelector("#btn-towers-tutorial-next"))==null||l.addEventListener("click",()=>{this.tutorialStep=Math.min(3,this.tutorialStep+1),this.render()}),(w=t.querySelector("#btn-towers-tutorial-practice"))==null||w.addEventListener("click",()=>{this.activeModal=null;const n=L[0],b=K(n.size,n.difficulty,n.seed,{id:n.id,title:n.cityName,code:n.code});this.startPuzzleSession(b,"campaign",n)}),t.querySelectorAll("[data-towers-tab]").forEach(n=>{n.addEventListener("click",()=>{var C,E;const b=n.dataset.towersTab;b&&(this.activeTab=b,(E=(C=this.host).playSound)==null||E.call(C,"click"),this.render())})}),t.querySelectorAll("[data-towers-ep]").forEach(n=>{n.addEventListener("click",()=>{this.selectedEpisode=Number(n.dataset.towersEp)||1,this.render()})}),t.querySelectorAll("[data-start-campaign]").forEach(n=>{n.addEventListener("click",()=>{const b=n.dataset.startCampaign,C=L.find(A=>A.id===b);if(!C)return;const E=K(C.size,C.difficulty,C.seed,{id:C.id,title:C.cityName,code:C.code});this.startPuzzleSession(E,"campaign",C)})}),($=t.querySelector("#btn-towers-start-zoning"))==null||$.addEventListener("click",()=>{const n=st("zoning",5,"medium",`TWR-ZONE-${Date.now()}`);this.startPuzzleSession(n,"challenge")}),(f=t.querySelector("#btn-towers-start-fog"))==null||f.addEventListener("click",()=>{const n=st("fog",5,"medium",`TWR-FOG-${Date.now()}`);this.startPuzzleSession(n,"challenge")}),(z=t.querySelector("#btn-towers-start-survival"))==null||z.addEventListener("click",()=>{const n=st("survival",5,"hard",`TWR-SURV-${Date.now()}`);this.startPuzzleSession(n,"challenge")}),t.querySelectorAll("[data-towers-cup-stage]").forEach(n=>{n.addEventListener("click",()=>{const b=Number(n.dataset.towersCupStage);if(b!==0&&b!==1&&b!==2)return;const E=gt()[b],A=st(E.challengeKind==="zoning"?"zoning":"weekly_cup",E.size,E.difficulty,E.seed,{id:E.seed,title:`🏆 ${E.label}: ${E.subtitle}`});A.challengeKind="weekly_cup",this.startPuzzleSession(A,"challenge",null,{cupStageIdx:b})})}),(x=t.querySelector("#btn-towers-start-daily"))==null||x.addEventListener("click",()=>{const n=new Date().toISOString().slice(0,10),b=K(5,"medium",`TWR-DAILY-${n}`);this.startPuzzleSession(b,"daily")}),(g=t.querySelector("#btn-towers-start-endless"))==null||g.addEventListener("click",()=>{const n=this.endlessWave<=2?4:this.endlessWave<=5?5:6,b=this.endlessWave<=2?"easy":this.endlessWave<=6?"medium":"hard",C=K(n,b,`TWR-ENDLESS-W${this.endlessWave}-${Date.now()}`);this.startPuzzleSession(C,"endless")}),(M=t.querySelector("#btn-towers-start-blitz"))==null||M.addEventListener("click",()=>{const n=K(4,"easy",`TWR-BLITZ-${Date.now()}-0`);this.startPuzzleSession(n,"blitz")}),t.querySelectorAll("[data-custom-size]").forEach(n=>{n.addEventListener("click",()=>{this.customSize=Number(n.dataset.customSize)||4,this.render()})}),t.querySelectorAll("[data-custom-diff]").forEach(n=>{n.addEventListener("click",()=>{this.customDifficulty=n.dataset.customDiff||"easy",this.render()})});const e=t.querySelector("#inp-towers-custom-seed");e==null||e.addEventListener("input",()=>{this.customSeedInput=e.value}),(P=t.querySelector("#btn-towers-start-custom"))==null||P.addEventListener("click",()=>{const n=this.customSeedInput.trim()||`TWR-CUSTOM-${this.customSize}-${this.customDifficulty}-${Date.now()}`,b=K(this.customSize,this.customDifficulty,n);this.startPuzzleSession(b,"custom")}),(B=t.querySelector("#btn-towers-leave-board"))==null||B.addEventListener("click",()=>{this.stopTimer(),this.inBoardView=!1,this.isPaused=!1,this.render()}),(I=t.querySelector("#btn-towers-pause"))==null||I.addEventListener("click",()=>{this.isPaused=!this.isPaused,this.render()}),(G=t.querySelector("#btn-towers-resume"))==null||G.addEventListener("click",()=>{this.isPaused=!1,this.render()}),(D=t.querySelector("#btn-towers-sight-toggle"))==null||D.addEventListener("click",()=>{this.toggleSightRayFromSelection()}),t.querySelectorAll("[data-towers-cell]").forEach(n=>{n.addEventListener("click",()=>{this.selectedCell={r:Number(n.dataset.row)||0,c:Number(n.dataset.col)||0},this.render()})}),t.querySelectorAll("[data-towers-clue]").forEach(n=>{n.addEventListener("click",()=>{const b=n.dataset.towersClue||"",[C,E]=b.split("-"),A=Number(E)||0;this.activeSightRay&&this.activeSightRay.side===C&&this.activeSightRay.index===A?this.activeSightRay=null:this.activeSightRay={side:C,index:A},this.render()})}),(O=t.querySelector("#btn-towers-clear-sight"))==null||O.addEventListener("click",()=>{this.activeSightRay=null,this.render()}),t.querySelectorAll("[data-towers-num]").forEach(n=>{n.addEventListener("click",()=>{const b=Number(n.dataset.towersNum)||1;this.handleNumberInput(b)})}),(V=t.querySelector("#btn-towers-notes-toggle"))==null||V.addEventListener("click",()=>{this.noteMode=!this.noteMode,this.render()}),(j=t.querySelector("#btn-towers-erase"))==null||j.addEventListener("click",()=>this.handleEraseInput()),(F=t.querySelector("#btn-towers-undo"))==null||F.addEventListener("click",()=>this.handleUndo()),(nt=t.querySelector("#btn-towers-redo"))==null||nt.addEventListener("click",()=>this.handleRedo()),(et=t.querySelector("#btn-towers-hint"))==null||et.addEventListener("click",()=>this.handleSmartHint()),(_=t.querySelector("#btn-towers-apply-hint"))==null||_.addEventListener("click",()=>this.applyActiveHintMove()),(pt=t.querySelector("#btn-towers-reset"))==null||pt.addEventListener("click",()=>{!this.activePuzzle||this.isPaused||(this.pushHistory(),this.board=U(this.activePuzzle.givens),this.notes=Array.from({length:this.activePuzzle.size},()=>Array.from({length:this.activePuzzle.size},()=>[])),this.activeHint=null,this.render())}),this.bindWorkshopAndMetaModals(t)}bindWorkshopAndMetaModals(t){var e,i,s,a,y,m,d;t.querySelectorAll("[data-buy-char]").forEach(o=>{o.addEventListener("click",()=>{const c=o.dataset.buyChar,h=it.find(p=>p.id===c);!h||this.stats.blueprintGems<h.costGems||(this.stats.blueprintGems-=h.costGems,this.stats.unlockedCharacterIds.includes(c)||this.stats.unlockedCharacterIds.push(c),this.stats.equippedCharacterId=c,J(this.stats),this.render())})}),t.querySelectorAll("[data-equip-char]").forEach(o=>{o.addEventListener("click",()=>{const c=o.dataset.equipChar;this.stats.unlockedCharacterIds.includes(c)&&(this.stats.equippedCharacterId=c,J(this.stats),this.render())})}),t.querySelectorAll("[data-buy-cosmetic]").forEach(o=>{o.addEventListener("click",()=>{const c=o.dataset.buyCosmetic,h=q.find(p=>p.id===c);!h||this.stats.blueprintGems<h.costGems||(this.stats.blueprintGems-=h.costGems,this.stats.unlockedCosmeticIds.includes(c)||this.stats.unlockedCosmeticIds.push(c),h.slot==="facade"?this.stats.equippedFacadeId=c:this.stats.equippedRoofId=c,J(this.stats),this.render())})}),t.querySelectorAll("[data-equip-cosmetic]").forEach(o=>{o.addEventListener("click",()=>{const c=o.dataset.equipCosmetic,h=q.find(p=>p.id===c);h&&(h.slot==="facade"?this.stats.equippedFacadeId=c:this.stats.equippedRoofId=c,J(this.stats),this.render())})}),(e=t.querySelector("#btn-towers-preset-max"))==null||e.addEventListener("click",()=>{this.stats=ot("unlock_all"),this.activeModal=null,this.render()}),(i=t.querySelector("#btn-towers-preset-mid"))==null||i.addEventListener("click",()=>{this.stats=ot("classic_sandbox"),this.activeModal=null,this.render()}),(s=t.querySelector("#btn-towers-preset-reset"))==null||s.addEventListener("click",()=>{this.stats=ot("fresh_lvl1"),this.activeModal=null,this.render()}),(a=t.querySelector("#btn-towers-instant-solve"))==null||a.addEventListener("click",()=>{this.activePuzzle&&(this.activeModal=null,this.board=U(this.activePuzzle.solution),this.checkWinAfterMove(),this.render())}),(y=t.querySelector("#btn-towers-retry-board"))==null||y.addEventListener("click",()=>{this.activePuzzle&&(this.activeModal=null,this.startPuzzleSession(this.activePuzzle,this.activeMode,this.activeCampaignLevel,{resetSeries:!0,cupStageIdx:this.activeCupStageIdx}))}),(m=t.querySelector("#btn-towers-win-map"))==null||m.addEventListener("click",()=>{this.activeModal=null,this.inBoardView=!1,this.render()}),(d=t.querySelector("#btn-towers-win-next"))==null||d.addEventListener("click",()=>{if(this.activeModal=null,this.activeMode==="campaign"&&this.activeCampaignLevel){const o=L.findIndex(p=>p.id===this.activeCampaignLevel.id),c=L[Math.min(L.length-1,o+1)];this.selectedEpisode=c.episode;const h=K(c.size,c.difficulty,c.seed,{id:c.id,title:c.cityName,code:c.code});this.startPuzzleSession(h,"campaign",c)}else if(this.activeMode==="endless"){const o=this.endlessWave<=2?4:this.endlessWave<=5?5:6,c=this.endlessWave<=2?"easy":this.endlessWave<=6?"medium":"hard",h=K(o,c,`TWR-ENDLESS-W${this.endlessWave}-${Date.now()}`);this.startPuzzleSession(h,"endless")}else this.inBoardView=!1,this.render()})}}class Gt{constructor(){v(this,"id","towers");v(this,"title","Towers");v(this,"sceneTheme","brick-city");v(this,"controller",null);v(this,"host",null)}mount(t,e){this.unmount(),this.host=e;const i={getUsername:()=>e.getUsername(),getPilotTag:()=>e.getPilotTag(),isBetaChannel:()=>e.isBetaChannel,getCloudSynced:()=>{var s;return((s=e.getCloudSynced)==null?void 0:s.call(e))??!1},canQuit:()=>{var s;return((s=e.canQuit)==null?void 0:s.call(e))??!1},renderTitlebar:()=>{var s;return((s=e.renderTitlebar)==null?void 0:s.call(e))??""},bindTitlebarEvents:()=>{var s;return(s=e.bindTitlebarEvents)==null?void 0:s.call(e)},onBackToHub:()=>e.returnToHub(),onOpenGlobalSettings:()=>e.openGlobalSettings(),onOpenGlobalProfile:()=>{var s;return(s=e.openGlobalProfile)==null?void 0:s.call(e)},onOpenSocialHub:()=>e.openSocialHub({pauseActiveGame:!0}),getSocialAttentionCount:()=>{var s;return((s=e.getSocialAttentionCount)==null?void 0:s.call(e))??0},getAudioSettings:()=>{var s;return((s=e.getAudioSettings)==null?void 0:s.call(e))??{soundEnabled:R.soundEnabled,musicEnabled:R.musicEnabled}},onToggleSound:()=>{var s;return(s=e.toggleSound)==null?void 0:s.call(e)},onToggleMusic:()=>{var s;return(s=e.toggleMusic)==null?void 0:s.call(e)},onQuitApp:()=>{var s;return(s=e.quitApp)==null?void 0:s.call(e)},playSound:(s,a)=>{s==="error"?R.playLockedBarrier():s==="win"?R.playVictory():s==="hint"?R.playGalaxyComplete(1):s==="erase"?R.playTrowelErase():s==="place"?R.playBrickPlace((a==null?void 0:a.floors)||2,(a==null?void 0:a.maxFloors)||6):R.playConsoleButton()}};this.controller=new qt(i),this.controller.mount(t),e.setAudioScene(this.sceneTheme)}unmount(){this.controller&&(this.controller.destroy(),this.controller=null),this.host=null}refreshHostState(){var t,e;(t=this.controller)==null||t.syncStatsFromStorage(),(e=this.controller)==null||e.render()}onPauseForOverlay(){var t;(t=this.controller)==null||t.pauseIfPlaying()}handleBackNavigation(){return!this.controller||!this.host?!1:(this.controller.handleBackNavigation()||this.host.returnToHub(),!0)}}export{Gt as TowersPlugin};
