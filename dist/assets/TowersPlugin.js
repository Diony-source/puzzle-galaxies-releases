var St=Object.defineProperty;var zt=(r,t,e)=>t in r?St(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var b=(r,t,e)=>zt(r,typeof t!="symbol"?t+"":t,e);import{A as rt,T as D,g as ft,a as vt,l as dt,v as ct,b as Ct,c as R,e as Mt,s as st,r as W,d as mt,f as wt,h as Et,i as H,j as Tt,k as yt,m as Lt,n as it,o as ht,p as _}from"./app.js";const I="./towers",xt={1:{src:`${I}/bldg_1.png`,heightPct:54},2:{src:`${I}/bldg_2.png`,heightPct:68},3:{src:`${I}/bldg_3.png`,heightPct:78},4:{src:`${I}/bldg_4.png`,heightPct:87},5:{src:`${I}/bldg_5.png`,heightPct:94},6:{src:`${I}/bldg_6.png`,heightPct:100}};function lt(r,t){const e={facade_neon:{p:"#c85a32",s:"#e07a47",sh:"#7f3319",mortar:"#471d10",w:"#fde047",wg:"#fef08a",hl:"#ffedd5"},facade_crimson:{p:"#b91c1c",s:"#ef4444",sh:"#7f1d1d",mortar:"#450a0a",w:"#fed7aa",wg:"#fef3c7",hl:"#fecaca"},facade_emerald:{p:"#047857",s:"#10b981",sh:"#064e3b",mortar:"#022c22",w:"#fde68a",wg:"#fef9c3",hl:"#a7f3d0"},facade_gold:{p:"#b45309",s:"#f59e0b",sh:"#78350f",mortar:"#451a03",w:"#fef08a",wg:"#ffffff",hl:"#fde68a"},facade_plasma:{p:"#4338ca",s:"#818cf8",sh:"#312e81",mortar:"#1e1b4b",w:"#a5f3fc",wg:"#ecfeff",hl:"#ddd6fe"}},i={roof_flat:{rp:"#78716c",ra:"#fbbf24"},roof_spire:{rp:"#d97706",ra:"#fde047"},roof_dome:{rp:"#0f766e",ra:"#5eead4"},roof_beacon:{rp:"#3b82f6",ra:"#bae6fd"},roof_sun:{rp:"#ea580c",ra:"#fef08a"}},s=e[r]||e.facade_neon,l=i[t]||i.roof_flat;return{brickPrimary:s.p,brickSecondary:s.s,brickShadow:s.sh,mortar:s.mortar,windowLit:s.w,windowGlow:s.wg,roofPrimary:l.rp,roofAccent:l.ra,outline:"#1e1829",highlight:s.hl}}function Pt(r,t){const e=Math.max(1,Math.min(t,r));let i=1;t<=3?i=e===1?1:e===2?3:5:t===4?i=e===1?1:e===2?2:e===3?4:6:t===5?i=e===1?1:e===2?2:e===3?3:e===4?5:6:e===1?i=1:e===2?i=2:e===3?i=3:e===4?i=4:e===5?i=5:i=6;const s=t>6?Math.min(100,48+Math.round(e/t*52)):null,l=xt[i];return{tierIdx:i,src:l.src,heightPct:s??l.heightPct}}function At(r){switch(r){case"roof_spire":return"--bldg-glow: rgba(251, 191, 36, 0.55);";case"roof_dome":return"--bldg-glow: rgba(45, 212, 191, 0.5);";case"roof_beacon":return"--bldg-glow: rgba(56, 189, 248, 0.55);";case"roof_sun":return"--bldg-glow: rgba(251, 146, 60, 0.6);";default:return""}}function bt(r,t,e,i){const{tierIdx:s,src:l,heightPct:y}=Pt(r,t),f=At(i);return`
    <div
      class="tower-pixel-bldg-svg tier-sprite-${s}"
      style="--bldg-h: ${y}%; --bldg-trim: ${e.brickSecondary}; ${f}"
      aria-hidden="true"
    >
      <img
        class="tower-pixel-sprite-img"
        src="${l}"
        alt=""
        loading="eager"
        decoding="async"
        draggable="false"
      />
    </div>
  `}function kt(r,t,e){return r?e>=3?"gold":e===2?"silver":"bronze":t?"active":"locked"}function $t(r,t=!1){switch(r){case"gold":return`${I}/${t?"bldg_6.png":"bldg_5.png"}`;case"silver":return`${I}/bldg_3.png`;case"bronze":return`${I}/bldg_1.png`;case"active":return`${I}/lot_crane.png`;default:return`${I}/lot_empty.png`}}function Bt(r,t,e,i="",s=!1){const l=$t(r,s);return`
    <img
      class="${i} street-sprite-img street-tier-${r}"
      src="${l}"
      alt=""
      loading="eager"
      decoding="async"
      draggable="false"
      aria-hidden="true"
    />
  `}function Ht(r,t,e,i,s,l){const m=Math.max(1,r.length),o=78,u=(1200-o*2)/m,v=206,E=r.map((M,z)=>{const h=l(M.id),c=t.solvedIds.includes(M.id),S=h<=s||c,a=t.levelStars[M.id]||0,p=kt(c,S,a),w=z===m-1,k=$t(p,w),$=Math.round(o+u*(z+.5)),T=Math.min(82,Math.round(u*.9)),x=p==="gold"?w?148:132:p==="silver"?106:p==="bronze"?64:p==="active"?88:34,B=v-x,K=p==="gold"?"#f59e0b":p==="silver"?"#cbd5e1":p==="bronze"?"#d97706":p==="active"?"#0ea5e9":"#64748b",U=p==="silver"||p==="gold"?"#1e1b2e":"#ffffff";return`
        <g>
          <ellipse cx="${$}" cy="${v+1}" rx="${Math.round(T*.42)}" ry="5" fill="rgba(30,24,41,0.22)" />
          <image
            href="${k}"
            x="${$-Math.round(T/2)}"
            y="${B}"
            width="${T}"
            height="${x}"
            preserveAspectRatio="xMidYMax meet"
            style="image-rendering: pixelated;"
          />
          <rect x="${$-12}" y="${v+10}" width="24" height="16" rx="3" fill="${K}" stroke="#1e1829" stroke-width="2" />
          <text x="${$}" y="${v+21}" text-anchor="middle" fill="${U}" font-size="10" font-weight="900" font-family="monospace">${z+1}</text>
        </g>
      `}).join("");return`
    <svg class="towers-street-panorama-svg" viewBox="0 0 1200 248" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Mahalle Caddesi Silüeti">
      <image
        href="${I}/town_sky_backdrop.jpg"
        x="0"
        y="0"
        width="1200"
        height="218"
        preserveAspectRatio="xMidYMax slice"
        style="image-rendering: pixelated;"
      />
      <!-- Sunlit sidewalk curb & paved boulevard street connecting all 12 buildings -->
      <rect x="0" y="${v-4}" width="1200" height="8" fill="#fef3c7" stroke="#292524" stroke-width="2" />
      <rect x="0" y="${v+4}" width="1200" height="40" fill="#475569" />
      <line x1="0" y1="${v+28}" x2="1200" y2="${v+28}" stroke="#fde047" stroke-width="3" stroke-dasharray="22 14" />
      ${E}
    </svg>
  `}function Kt(r,t,e,i,s){const o=Math.max(1,r.length),d=82+Math.max(0,o-1)*148+84,u=r.map((a,p)=>{const w=p%2===0,k=w?20:80,$=Math.round(k/100*680),T=82+p*148,x=w?"right":"left",B=Math.round(w?680*.34:680*.66);return{...a,xPct:k,xSvg:$,ySvg:T,plotSide:x,drivewayX:B}}),v=u.slice(0,-1).map((a,p)=>{const w=u[p+1],k=Math.round((a.ySvg+w.ySvg)/2),$=`M ${a.xSvg} ${a.ySvg} C ${a.xSvg} ${k}, ${w.xSvg} ${k}, ${w.xSvg} ${w.ySvg}`,T=w.isUnlocked||a.isCompleted,x=T?"#fef3c7":"#e7e5e4",B=a.isCompleted&&w.isUnlocked?"#334155":T?"#475569":"#94a3b8";return`
        <path d="${$}" fill="none" stroke="#1e293b" stroke-width="52" stroke-linecap="round" vector-effect="non-scaling-stroke" opacity="0.28" />
        <path d="${$}" fill="none" stroke="${x}" stroke-width="44" stroke-linecap="round" vector-effect="non-scaling-stroke" />
        <path d="${$}" fill="none" stroke="${B}" stroke-width="32" stroke-linecap="round" vector-effect="non-scaling-stroke" />
        <path d="${$}" fill="none" stroke="${T?"#fde047":"#cbd5e1"}" stroke-width="3.5" stroke-dasharray="11 11" stroke-linecap="round" vector-effect="non-scaling-stroke" />
      `}).join(""),E=u[0],M=u[u.length-1],z=E?`M ${Math.round(680*.5)} 0 C ${Math.round(680*.5)} 36, ${E.xSvg} 36, ${E.xSvg} ${E.ySvg}`:"",h=M?`M ${M.xSvg} ${M.ySvg} C ${M.xSvg} ${d-34}, ${Math.round(680*.5)} ${d-34}, ${Math.round(680*.5)} ${d}`:"",c=u.map(a=>{const p=a.isCompleted,w=a.isUnlocked,k=p?"#fde68a":w?"#fef3c7":"#cbd5e1";return`
        <line x1="${a.xSvg}" y1="${a.ySvg}" x2="${a.drivewayX}" y2="${a.ySvg}" stroke="#1e293b" stroke-width="22" stroke-linecap="round" vector-effect="non-scaling-stroke" opacity="0.22" />
        <line x1="${a.xSvg}" y1="${a.ySvg}" x2="${a.drivewayX}" y2="${a.ySvg}" stroke="${k}" stroke-width="16" stroke-linecap="round" vector-effect="non-scaling-stroke" />
        <circle cx="${a.xSvg}" cy="${a.ySvg}" r="18" fill="${k}" stroke="#292524" stroke-width="2.5" />
      `}).join(""),S=u.map(a=>{const p=(a.ySvg/d*100).toFixed(3),w=["candy-road-pin",`tier-${a.tier}`,a.isUnlocked?"unlocked":"locked"].join(" "),k=a.tier==="active"?"▶":a.isCompleted?`${a.relIdx+1}`:"🔒",$=a.stars>0?"★".repeat(a.stars):a.tier==="active"?`#${a.lvl.code}`:`${a.relIdx+1}`,T="★".repeat(a.stars)+"☆".repeat(Math.max(0,3-a.stars));return`
        ${a.isUnlocked?`
          <button
            type="button"
            class="${w}"
            style="left: ${a.xPct}%; top: ${p}%;"
            data-start-campaign="${a.lvl.id}"
            title="#${s(a.lvl.code)} ${s(a.lvl.cityName)}"
          >
            <span class="pin-main">${k}</span>
            <span class="pin-sub">${$}</span>
          </button>
        `:`
          <div
            class="${w}"
            style="left: ${a.xPct}%; top: ${p}%;"
            aria-label="Kilitli Parsel #${s(a.lvl.code)}"
          >
            <span class="pin-main">${k}</span>
            <span class="pin-sub">${$}</span>
          </div>
        `}

        <article
          class="towers-street-node candy-plot-card side-${a.plotSide} tier-${a.tier} ${a.isUnlocked?"unlocked":"locked"}"
          style="top: ${p}%;"
          data-city-card="${a.lvl.id}"
        >
          <div class="street-node-art">
            ${Bt(a.tier,t,e,"street-node-bldg-svg",a.isLandmark)}
          </div>
          <div class="street-node-body">
            <div class="towers-city-top">
              <span class="towers-city-code">#${s(a.lvl.code)} • ${a.lvl.size}×${a.lvl.size} ${a.diffBadge}</span>
              ${a.mechPill}
            </div>
            <h4 class="towers-city-name">${s(a.lvl.cityName)}</h4>
            <div class="candy-tier-chip tier-${a.tier}">${a.tierTitle}</div>
            <div class="towers-city-meta">
              <span class="towers-city-stars ${a.stars>0?"earned":""}">${T}</span>
              <span class="towers-city-time">${a.bestSec?a.stars<3?`⏱️ ${i(a.bestSec)} • 🥇 ≤ ${i(a.lvl.goldSec)}`:`🥇 ${i(a.bestSec)}`:`🥇 ≤ ${i(a.lvl.goldSec)}`}</span>
            </div>
            <div class="candy-plot-action">
              ${a.isUnlocked?`<button type="button" class="towers-city-play-btn ${a.isCompleted?"completed":"active"}" data-start-campaign="${a.lvl.id}">${a.isCompleted?"🔁 Tekrar Oyna":"🏗️ İnşa Et"}</button>`:'<span class="towers-city-lock-pill">🔒 Önceki Parseli Bitir</span>'}
            </div>
          </div>
        </article>
      `}).join("");return`
    <div class="towers-candy-map" style="--candy-map-h: ${d}px;">
      <svg
        class="candy-road-svg"
        viewBox="0 0 680 ${d}"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        ${z?`
          <path d="${z}" fill="none" stroke="#fef3c7" stroke-width="44" stroke-linecap="round" vector-effect="non-scaling-stroke" />
          <path d="${z}" fill="none" stroke="#475569" stroke-width="32" stroke-linecap="round" vector-effect="non-scaling-stroke" />
          <path d="${z}" fill="none" stroke="#fde047" stroke-width="3.5" stroke-dasharray="11 11" vector-effect="non-scaling-stroke" />
        `:""}
        ${h?`
          <path d="${h}" fill="none" stroke="#e7e5e4" stroke-width="44" stroke-linecap="round" vector-effect="non-scaling-stroke" />
          <path d="${h}" fill="none" stroke="#94a3b8" stroke-width="32" stroke-linecap="round" vector-effect="non-scaling-stroke" />
          <path d="${h}" fill="none" stroke="#cbd5e1" stroke-width="3.5" stroke-dasharray="11 11" vector-effect="non-scaling-stroke" />
        `:""}
        ${v}
        ${c}
      </svg>
      <div class="candy-map-nodes-layer">
        ${S}
      </div>
    </div>
  `}function ot(r,t=44){const i={char_apprentice:"#ea580c",char_planner:"#0284c7",char_master:"#0d9488",char_emperor:"#b45309"}[r]||"#f59e0b",s=r==="char_emperor"?"#facc15":r==="char_master"?"#e2e8f0":r==="char_planner"?"#38bdf8":"#fbbf24";return`
    <svg viewBox="0 0 24 24" width="${t}" height="${t}" class="architect-avatar-svg" xmlns="http://www.w3.org/2000/svg" shape-rendering="crispEdges">
      <rect width="24" height="24" fill="#1e1b2e" />
      <rect x="6" y="4" width="12" height="2" fill="${s}" />
      <rect x="4" y="6" width="16" height="2" fill="${s}" stroke="#090d16" stroke-width="1" />
      <rect x="7" y="8" width="10" height="7" fill="#fcd34d" />
      <rect x="8" y="8" width="8" height="2" fill="#92400e" />
      <rect x="9" y="11" width="2" height="2" fill="#0f172a" />
      <rect x="13" y="11" width="2" height="2" fill="#0f172a" />
      <rect x="5" y="16" width="14" height="7" fill="${i}" />
      <rect x="10" y="16" width="4" height="7" fill="#1e293b" />
      <rect x="7" y="17" width="2" height="2" fill="#ffffff" />
      <rect x="15" y="17" width="2" height="2" fill="#ffffff" />
    </svg>
  `}function q(r){return r.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function It(r){const t=Math.max(0,Math.floor(r)),e=Math.floor(t/60),i=t%60;return`${String(e).padStart(2,"0")}:${String(i).padStart(2,"0")}`}const ut=[[1,3,2],[2,1,3],[3,2,1]],nt=[[1,0,0],[2,1,0],[3,0,1]];function qt(r){const{step:t,miniBoard:e,selectedMiniCell:i,palId:s}=r,l=lt(s.facade,s.roof),y=e.every((o,d)=>o.every((u,v)=>u===ut[d][v])),f=[3,1,2],m=[2,2,1];return`
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
                ${f.map(o=>`<div class="mini-clue"><b>${o}</b><small>▾</small></div>`).join("")}
                ${[0,1,2].map(o=>`
                  <div class="mini-clue"><b>${m[o]}</b><small>▸</small></div>
                  ${[0,1,2].map(d=>{var h;const u=((h=e[o])==null?void 0:h[d])||0,v=nt[o][d]>0,E=i.r===o&&i.c===d,M=u>0&&u===ut[o][d],z=u>0&&u!==ut[o][d];return`
                        <button
                          type="button"
                          class="mini-cell ${v?"fixed":""} ${E?"selected":""} ${z?"wrong":M?"correct":""}"
                          data-tut-cell="${o}-${d}"
                        >
                          ${u>0?`<div class="mini-bldg-box">${bt(u,3,l,"roof_flat")}<span class="mini-bldg-num">${u}</span></div>`:'<span class="mini-empty-plus">+</span>'}
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
  `}function Rt(){return`
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
  `}function _t(r){const t=lt(r.equippedFacadeId,r.equippedRoofId);return`
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
            ${rt.map(e=>{const i=r.unlockedCharacterIds.includes(e.id),s=r.equippedCharacterId===e.id,l=r.blueprintGems>=e.costGems;return`
                <div class="towers-shop-item ${s?"equipped":""}">
                  <div class="towers-shop-head-row">
                    <div class="towers-shop-avatar" style="border-color:${e.accentColor}">
                      ${ot(e.id,38)}
                    </div>
                    <div class="towers-shop-info">
                      <strong>${q(e.name)}</strong>
                      <span class="role">${q(e.title)}</span>
                      <span class="perk">✨ Mimar Gücü +${e.powerScore}</span>
                    </div>
                  </div>
                  <p class="towers-shop-desc">${q(e.description)}</p>
                  <div class="towers-shop-action">
                    ${s?'<button class="towers-shop-btn equipped" disabled>✅ Aktif Mimar</button>':i?`<button class="towers-shop-btn equip" data-equip-char="${e.id}">👷 Seç</button>`:`<button class="towers-shop-btn buy" data-buy-char="${e.id}" ${l?"":"disabled"}>🔓 Aç (💠 ${e.costGems})</button>`}
                  </div>
                </div>
              `}).join("")}
          </div>

          <h4 class="towers-section-sub">🧱 Tuğla Cepheler &amp; Çatı Silüetleri</h4>
          <div class="towers-workshop-grid">
            ${D.map(e=>{const i=e.slot==="facade",s=r.unlockedCosmeticIds.includes(e.id),l=i?r.equippedFacadeId===e.id:r.equippedRoofId===e.id,y=r.blueprintGems>=e.costGems,f=i?{brickPrimary:e.primaryColor,brickSecondary:e.secondaryColor}:{...t,roofPrimary:e.primaryColor,roofAccent:e.secondaryColor},m=i?r.equippedRoofId:e.id;return`
                <div class="towers-shop-item ${l?"equipped":""}">
                  <div class="towers-shop-head-row">
                    <div class="towers-shop-swatch brick-preview">
                      ${bt(4,5,f,m)}
                    </div>
                    <div class="towers-shop-info">
                      <strong>${q(e.name)}</strong>
                      <span class="role">${i?"🧱 Tuğla Cephe":"🏠 Çatı Tasarımı"}</span>
                    </div>
                  </div>
                  <p class="towers-shop-desc">${q(e.description)}</p>
                  <div class="towers-shop-action">
                    ${l?'<button class="towers-shop-btn equipped" disabled>✅ Kullanımda</button>':s?`<button class="towers-shop-btn equip" data-equip-cosmetic="${e.id}">🎨 Uygula</button>`:`<button class="towers-shop-btn buy" data-buy-cosmetic="${e.id}" ${y?"":"disabled"}>🔓 Aç (💠 ${e.costGems})</button>`}
                  </div>
                </div>
              `}).join("")}
          </div>
        </div>
      </div>
    </div>
  `}function Gt(r){const t=ft(r.architectXp),e=Object.values(r.bestTimesSec),i=e.length>0?Math.min(...e):null;return`
    <div class="towers-modal-backdrop" id="towers-profile-modal">
      <div class="towers-modal-card wide">
        <div class="towers-modal-head">
          <h3>🏆 Towers Başarımlar &amp; İstatistikler (LVL ${t.level} • ${q(t.title)})</h3>
          <button id="btn-towers-close-modal" class="towers-close-btn">✕</button>
        </div>
        <div class="towers-modal-body">
          <div class="towers-stats-summary-grid">
            <div class="towers-stat-box"><span>Çözülen Blok</span><strong>${r.totalSolved}</strong></div>
            <div class="towers-stat-box"><span>Toplam Puan</span><strong>${r.totalPoints}</strong></div>
            <div class="towers-stat-box"><span>En Hızlı Blok</span><strong>${i!==null?`${i} sn`:"—"}</strong></div>
            <div class="towers-stat-box"><span>İmar / Sis / Baret</span><strong>${(r.zoningSolvedCount||0)+(r.fogSolvedCount||0)+(r.survivalClearsCount||0)}</strong></div>
          </div>

          <h4 class="towers-section-sub">🎖️ Towers Başarımları (${r.unlockedAchievements.length} / ${vt.length})</h4>
          <div class="towers-ach-grid">
            ${vt.map(s=>`
                <div class="towers-ach-card ${r.unlockedAchievements.includes(s.id)?"unlocked":"locked"}">
                  <span class="ach-icon">${s.icon}</span>
                  <div>
                    <strong>${q(s.title)}</strong>
                    <p>${q(s.description)}</p>
                  </div>
                </div>
              `).join("")}
          </div>
        </div>
      </div>
    </div>
  `}function Wt(r){return`
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
  `}function Dt(r){const{elapsedSeconds:t,hintsUsed:e,summary:i,challengeKind:s}=r;return`
    <div class="towers-modal-backdrop" id="towers-victory-modal">
      <div class="towers-modal-card victory">
        <div class="towers-victory-stars">${"★".repeat(i.starsEarned)+"☆".repeat(Math.max(0,3-i.starsEarned))}</div>
        <h2>🧱 İnşaat Tamamlandı!</h2>
        <p>
          Süre: <strong>${It(t)}</strong> • Kullanılan İpucu: <strong>${e}</strong>
        </p>

        <div class="towers-victory-rewards">
          <div class="reward-pill">✨ +${i.xpGain} Mimar XP</div>
          <div class="reward-pill">💠 +${i.blueprintGain} Proje Kristali</div>
          ${s==="weekly_cup"&&i.cupScore?`<div class="reward-pill">🏆 Kupa Puanı: ${i.cupScore}</div>`:""}
        </div>

        ${i.leveledUp?'<div class="towers-levelup-banner">🎉 MİMAR SEVİYESİ YÜKSELDİ!</div>':""}
        ${i.newlyUnlockedAchievements.length>0?`<div class="towers-ach-unlock-strip">🏅 Yeni Başarım: ${i.newlyUnlockedAchievements.map(y=>`${y.icon} ${q(y.title)}`).join(" • ")}</div>`:""}

        <div class="towers-victory-actions">
          <button id="btn-towers-win-next" class="towers-primary-cta">➡️ Devam Et / Sıradaki Sokak</button>
          <button id="btn-towers-win-map" class="towers-secondary-cta">🏙️ Haritaya Dön</button>
        </div>
      </div>
    </div>
  `}function Ut(r){return`
    <div class="towers-modal-backdrop" id="towers-gameover-modal">
      <div class="towers-modal-card victory">
        <div class="towers-victory-stars">🪖✖️</div>
        <h2>🚧 Şantiye Durduruldu!</h2>
        <p>${q(r)}</p>
        <div class="towers-victory-actions">
          <button id="btn-towers-retry-board" class="towers-primary-cta">🔄 Tekrar Dene</button>
          <button id="btn-towers-win-map" class="towers-secondary-cta">🏙️ Şehir Menüsüne Dön</button>
        </div>
      </div>
    </div>
  `}function P(r){return r.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function at(r){const t=Math.max(0,Math.floor(r)),e=Math.floor(t/60),i=t%60;return`${String(e).padStart(2,"0")}:${String(i).padStart(2,"0")}`}function O(r){return r.map(t=>[...t])}function pt(r){return r.map(t=>t.map(e=>[...e]))}class Nt{constructor(t){b(this,"host");b(this,"stats");b(this,"activeTab","campaign");b(this,"selectedEpisode",1);b(this,"activeModal",null);b(this,"tutorialStep",1);b(this,"tutorialMiniBoard",nt.map(t=>[...t]));b(this,"tutorialSelectedCell",{r:0,c:1});b(this,"customSize",4);b(this,"customDifficulty","easy");b(this,"customSeedInput","");b(this,"inBoardView",!1);b(this,"isPaused",!1);b(this,"activePuzzle",null);b(this,"activeMode","campaign");b(this,"activeChallengeKind","standard");b(this,"activeCupStageIdx",null);b(this,"activeCampaignLevel",null);b(this,"board",[]);b(this,"notes",[]);b(this,"history",[]);b(this,"redoStack",[]);b(this,"selectedCell",{r:0,c:0});b(this,"noteMode",!1);b(this,"activeHint",null);b(this,"activeSightRay",null);b(this,"hintsUsedThisGame",0);b(this,"elapsedSeconds",0);b(this,"timerHandle",null);b(this,"gameWon",!1);b(this,"gameOverReason","");b(this,"endlessWave",1);b(this,"blitzRemainingSeconds",120);b(this,"blitzScore",0);b(this,"blitzSolvedCount",0);b(this,"survivalLives",3);b(this,"survivalStreak",0);b(this,"lastWinSummary",null);b(this,"keydownHandler",null);b(this,"resizeHandler",null);b(this,"lastDesktopMode",typeof window<"u"?window.innerWidth>=900:!0);b(this,"mountEl",null);this.host=t,this.stats=dt()}reloadStats(){this.stats=dt()}getStats(){return this.stats}pauseIfPlaying(){this.inBoardView&&!this.gameWon&&!this.isPaused&&(this.isPaused=!0,this.render())}syncStatsFromStorage(){this.stats=dt()}handleBackNavigation(){return this.activeModal!==null?(this.activeModal=null,this.render(),!0):this.inBoardView?this.isPaused?(this.isPaused=!1,this.render(),!0):(this.stopTimer(),this.inBoardView=!1,this.render(),!0):!1}destroy(){this.stopTimer(),this.keydownHandler&&(window.removeEventListener("keydown",this.keydownHandler),this.keydownHandler=null),this.resizeHandler&&(window.removeEventListener("resize",this.resizeHandler),this.resizeHandler=null)}stopTimer(){this.timerHandle!==null&&(window.clearInterval(this.timerHandle),this.timerHandle=null)}startTimer(){this.stopTimer(),this.timerHandle=window.setInterval(()=>{if(!this.inBoardView||this.gameWon||this.isPaused||this.activeModal!==null)return;if(this.elapsedSeconds+=1,this.activeMode==="blitz"&&(this.blitzRemainingSeconds=Math.max(0,this.blitzRemainingSeconds-1),this.blitzRemainingSeconds<=0)){this.stopTimer(),this.inBoardView=!1,this.render();return}const t=document.getElementById("towers-hud-timer");t&&(t.textContent=this.activeMode==="blitz"?`⏱️ ${at(this.blitzRemainingSeconds)}`:`⏱️ ${at(this.elapsedSeconds)}`)},1e3)}mount(t){this.mountEl=t,this.reloadStats(),this.attachKeyboardListener(),this.attachResizeListener(),this.renderInto(t)}render(){const t=this.mountEl||document.getElementById("towers-mount-root")||document.getElementById("app");t&&this.renderInto(t)}attachResizeListener(){this.resizeHandler&&window.removeEventListener("resize",this.resizeHandler),this.resizeHandler=()=>{const t=window.innerWidth>=900;t!==this.lastDesktopMode&&(this.lastDesktopMode=t,this.render())},window.addEventListener("resize",this.resizeHandler)}attachKeyboardListener(){this.keydownHandler&&window.removeEventListener("keydown",this.keydownHandler),this.keydownHandler=t=>{if(!this.inBoardView||!this.activePuzzle||this.activeModal!==null||this.isPaused||document.activeElement&&["INPUT","TEXTAREA"].includes(document.activeElement.tagName))return;const e=this.activePuzzle.size;if(t.key==="ArrowUp")t.preventDefault(),this.selectedCell.r=(this.selectedCell.r-1+e)%e,this.render();else if(t.key==="ArrowDown")t.preventDefault(),this.selectedCell.r=(this.selectedCell.r+1)%e,this.render();else if(t.key==="ArrowLeft")t.preventDefault(),this.selectedCell.c=(this.selectedCell.c-1+e)%e,this.render();else if(t.key==="ArrowRight")t.preventDefault(),this.selectedCell.c=(this.selectedCell.c+1)%e,this.render();else if(t.key.toLowerCase()==="n")t.preventDefault(),this.noteMode=!this.noteMode,this.render();else if(t.key.toLowerCase()==="v")t.preventDefault(),this.toggleSightRayFromSelection();else if(t.key==="Backspace"||t.key==="Delete"||t.key==="0")t.preventDefault(),this.handleEraseInput();else if((t.ctrlKey||t.metaKey)&&t.key.toLowerCase()==="z")t.preventDefault(),this.handleUndo();else if((t.ctrlKey||t.metaKey)&&t.key.toLowerCase()==="y")t.preventDefault(),this.handleRedo();else if(/^[1-8]$/.test(t.key)){const i=Number(t.key);i>=1&&i<=e&&(t.preventDefault(),this.handleNumberInput(i))}},window.addEventListener("keydown",this.keydownHandler)}startPuzzleSession(t,e,i=null,s){var y,f;this.activePuzzle=t,this.activeMode=e,this.activeChallengeKind=t.challengeKind||"standard",this.activeCupStageIdx=(s==null?void 0:s.cupStageIdx)??null,this.activeCampaignLevel=i,this.board=O(t.givens),this.notes=Array.from({length:t.size},()=>Array.from({length:t.size},()=>[])),this.history=[],this.redoStack=[],this.selectedCell={r:0,c:0};let l=!1;for(let m=0;m<t.size&&!l;m++)for(let o=0;o<t.size;o++)if(t.givens[m][o]===0){this.selectedCell={r:m,c:o},l=!0;break}this.activeHint=null,this.activeSightRay=null,this.hintsUsedThisGame=0,this.elapsedSeconds=0,this.gameWon=!1,this.isPaused=!1,this.gameOverReason="",this.inBoardView=!0,e==="blitz"&&(s==null?void 0:s.resetSeries)!==!1?(this.blitzRemainingSeconds=120,this.blitzScore=0,this.blitzSolvedCount=0):this.activeChallengeKind==="survival"&&(s==null?void 0:s.resetSeries)!==!1&&(this.survivalLives=3,this.survivalStreak=0),this.startTimer(),(f=(y=this.host).playSound)==null||f.call(y,"click"),this.render()}pushHistory(){this.history.push({board:O(this.board),notes:pt(this.notes)}),this.history.length>100&&this.history.shift(),this.redoStack=[]}handleNumberInput(t){var f,m,o,d,u,v,E,M,z,h,c;if(!this.activePuzzle||this.gameWon||this.isPaused)return;const{r:e,c:i}=this.selectedCell;if(((f=this.activePuzzle.givens[e])==null?void 0:f[i])>0){(o=(m=this.host).playSound)==null||o.call(m,"error");return}if(this.pushHistory(),this.activeHint=null,this.noteMode){this.board[e][i]!==0&&(this.board[e][i]=0);const S=this.notes[e][i],a=S.indexOf(t);a>=0?S.splice(a,1):(S.push(t),S.sort((p,w)=>p-w)),(u=(d=this.host).playSound)==null||u.call(d,"click"),this.render();return}if(this.board[e][i]=this.board[e][i]===t?0:t,this.notes[e][i]=[],this.board[e][i]===0){(E=(v=this.host).playSound)==null||E.call(v,"erase"),this.render();return}const s=this.board[e][i],l=ct(this.activePuzzle,this.board);if(l.duplicateKeys.has(`${e},${i}`)||l.zoningViolationKeys.has(`${e},${i}`)||this.activeChallengeKind==="survival"&&s!==this.activePuzzle.solution[e][i]){if((z=(M=this.host).playSound)==null||z.call(M,"error"),this.activeChallengeKind==="survival"&&(this.survivalLives=Math.max(0,this.survivalLives-1),this.survivalLives<=0)){this.stopTimer(),this.gameOverReason="3 inşaat baretinin tamamı tükendi! Kat çakışması veya hatalı kat yerleşimi şantiyeyi durdurdu.",this.activeModal="gameover",this.render();return}}else(c=(h=this.host).playSound)==null||c.call(h,"place",{floors:s,maxFloors:this.activePuzzle.size});this.checkWinAfterMove(),this.render()}handleEraseInput(){var i,s,l;if(!this.activePuzzle||this.gameWon||this.isPaused)return;const{r:t,c:e}=this.selectedCell;((i=this.activePuzzle.givens[t])==null?void 0:i[e])>0||this.board[t][e]===0&&this.notes[t][e].length===0||(this.pushHistory(),this.board[t][e]=0,this.notes[t][e]=[],this.activeHint=null,(l=(s=this.host).playSound)==null||l.call(s,"erase"),this.render())}handleUndo(){var e,i;if(this.history.length===0||this.gameWon||this.isPaused)return;this.redoStack.push({board:O(this.board),notes:pt(this.notes)});const t=this.history.pop();this.board=t.board,this.notes=t.notes,this.activeHint=null,(i=(e=this.host).playSound)==null||i.call(e,"click"),this.render()}handleRedo(){var e,i;if(this.redoStack.length===0||this.gameWon||this.isPaused)return;this.history.push({board:O(this.board),notes:pt(this.notes)});const t=this.redoStack.pop();this.board=t.board,this.notes=t.notes,this.activeHint=null,(i=(e=this.host).playSound)==null||i.call(e,"click"),this.render()}handleSmartHint(){var e,i;if(!this.activePuzzle||this.gameWon||this.isPaused)return;const t=Ct(this.activePuzzle,this.board);if(t){if(this.activeHint=t,this.selectedCell={r:t.r,c:t.c},this.hintsUsedThisGame+=1,t.focusClueKey){const[s,l]=t.focusClueKey.split(":");this.activeSightRay={side:s,index:Number(l)||0}}(i=(e=this.host).playSound)==null||i.call(e,"hint"),this.render()}}applyActiveHintMove(){var s,l,y;if(!this.activeHint||!this.activePuzzle||this.gameWon)return;const{r:t,c:e,value:i}=this.activeHint;((s=this.activePuzzle.givens[t])==null?void 0:s[e])>0||(this.pushHistory(),this.board[t][e]=i,this.notes[t][e]=[],this.activeHint=null,(y=(l=this.host).playSound)==null||y.call(l,"place",{floors:i,maxFloors:this.activePuzzle.size}),this.checkWinAfterMove(),this.render())}toggleSightRayFromSelection(){var t,e;this.activePuzzle&&(this.activeSightRay?this.activeSightRay.side==="left"||this.activeSightRay.side==="right"?this.activeSightRay={side:"top",index:this.selectedCell.c}:this.activeSightRay=null:this.activeSightRay={side:"left",index:this.selectedCell.r},(e=(t=this.host).playSound)==null||e.call(t,"click"),this.render())}checkWinAfterMove(){var l,y,f,m,o,d,u;if(!this.activePuzzle||this.gameWon||!ct(this.activePuzzle,this.board).isSolved)return;const e=new Date().toISOString().slice(0,10);if(this.activeMode==="blitz"){this.blitzSolvedCount+=1,this.blitzScore+=180+Math.max(0,25-this.hintsUsedThisGame*20),this.blitzScore>this.stats.bestBlitzScore&&(this.stats.bestBlitzScore=this.blitzScore);const v=`TWR-BLITZ-${Date.now()}-${this.blitzSolvedCount}`,E=R(4,"easy",v,{title:`⚡ Blitz Kule #${this.blitzSolvedCount+1}`});(y=(l=this.host).playSound)==null||y.call(l,"win");const M=Mt(this.stats,{elapsedSec:this.elapsedSeconds,hintsUsed:this.hintsUsedThisGame,size:4,isDaily:!1});M.length>0&&(this.stats.blueprintGems+=M.length),st(this.stats),W("towers_solve"),this.hintsUsedThisGame===0&&W("no_hint_solve"),this.startPuzzleSession(E,"blitz",null,{resetSeries:!1});return}if(this.activeMode==="endless"){this.endlessWave>this.stats.bestEndlessWave&&(this.stats.bestEndlessWave=this.endlessWave),this.endlessWave+=1;const v=mt(this.stats,{puzzleId:this.activePuzzle.id,size:this.activePuzzle.size,difficulty:this.activePuzzle.difficulty,elapsedSec:this.elapsedSeconds,hintsUsed:this.hintsUsedThisGame});this.stats=v.nextStats,W("towers_solve"),this.hintsUsedThisGame===0&&W("no_hint_solve"),this.gameWon=!0,this.stopTimer(),this.lastWinSummary={starsEarned:v.starsEarned,xpGain:v.xpEarned,blueprintGain:v.gemsEarned,leveledUp:v.leveledUp,newlyUnlockedAchievements:v.newlyUnlockedAchievements},this.activeModal="victory",(m=(f=this.host).playSound)==null||m.call(f,"win");return}this.activeChallengeKind==="zoning"?this.stats.zoningSolvedCount=(this.stats.zoningSolvedCount||0)+1:this.activeChallengeKind==="fog"?this.stats.fogSolvedCount=(this.stats.fogSolvedCount||0)+1:this.activeChallengeKind==="survival"&&(this.survivalStreak+=1,this.stats.survivalClearsCount=(this.stats.survivalClearsCount||0)+1);let i;if(this.activeChallengeKind==="weekly_cup"&&this.activeCupStageIdx!==null){const v=wt(),E=Et(this.activePuzzle.size,this.elapsedSeconds,this.hintsUsedThisGame);i=E;const M=this.stats.weeklyCupKey,z=M===v&&Array.isArray(this.stats.weeklyCupScores)?[...this.stats.weeklyCupScores]:[0,0,0],h=M===v&&Array.isArray(this.stats.weeklyCupRewarded)?[...this.stats.weeklyCupRewarded]:[!1,!1,!1];z[this.activeCupStageIdx]=Math.max(z[this.activeCupStageIdx]||0,E),h[this.activeCupStageIdx]=!0,this.stats.weeklyCupKey=v,this.stats.weeklyCupScores=z,this.stats.weeklyCupRewarded=h}this.gameWon=!0,this.stopTimer();const s=mt(this.stats,{puzzleId:((o=this.activeCampaignLevel)==null?void 0:o.id)||this.activePuzzle.id,size:this.activePuzzle.size,difficulty:this.activePuzzle.difficulty,elapsedSec:this.elapsedSeconds,hintsUsed:this.hintsUsedThisGame,isDaily:this.activeMode==="daily",dailyDateKey:this.activeMode==="daily"?e:void 0,campaignLevel:this.activeCampaignLevel?{goldSec:this.activeCampaignLevel.goldSec,silverSec:this.activeCampaignLevel.silverSec}:null});this.stats=s.nextStats,W("towers_solve"),this.hintsUsedThisGame===0&&W("no_hint_solve"),this.activeChallengeKind==="weekly_cup"&&W("duel_or_cup"),this.lastWinSummary={starsEarned:s.starsEarned,xpGain:s.xpEarned,blueprintGain:s.gemsEarned,leveledUp:s.leveledUp,newlyUnlockedAchievements:s.newlyUnlockedAchievements,cupScore:i},this.activeModal="victory",(u=(d=this.host).playSound)==null||u.call(d,"win")}getUnlockedCampaignIndex(){let t=-1;for(let e=0;e<H.length;e++)this.stats.solvedIds.includes(H[e].id)&&(t=e);return Math.min(H.length-1,t+1)}renderInto(t){var l,y,f,m;const e=typeof window<"u"?window.innerWidth>=900:!0;this.lastDesktopMode=e;const i=((y=(l=this.host).renderTitlebar)==null?void 0:y.call(l))||"",s=this.inBoardView&&this.activePuzzle?this.renderBoardScreenHTML():this.renderHubScreenHTML(e);t.innerHTML=`
      ${i}
      <div class="screen-body ${this.inBoardView?"towers-board-body":"menu-mode towers-menu-mode"}" id="towers-screen">
        ${s}
        ${this.renderActiveModal()}
      </div>
    `,(m=(f=this.host).bindTitlebarEvents)==null||m.call(f),this.bindEvents(t)}renderHubScreenHTML(t){var M,z,h,c,S,a,p,w;const e=this.host.getUsername(),i=this.host.getPilotTag(),s=this.host.isBetaChannel(),l=((z=(M=this.host).getCloudSynced)==null?void 0:z.call(M))??!1,y=((c=(h=this.host).canQuit)==null?void 0:c.call(h))??!1,f=ft(this.stats.architectXp),m=rt.find(k=>k.id===this.stats.equippedCharacterId)||rt[0],o=Tt(this.stats),d=(this.stats.solvedIds||[]).filter(k=>H.some($=>$.id===k)).length,u=((a=(S=this.host).getSocialAttentionCount)==null?void 0:a.call(S))??0,v=((w=(p=this.host).getAudioSettings)==null?void 0:w.call(p))??{soundEnabled:!0,musicEnabled:!0},E=[{id:"campaign",icon:"🏙️",label:"Şehir Haritası",badge:`${d}/60`},{id:"challenges",icon:"🚧",label:"Challenge & Kupa",badge:"3+1"},{id:"daily",icon:"🧱",label:"Günlük Bina",badge:this.stats.dailyStreak>0?`🔥${this.stats.dailyStreak}`:""},{id:"blitz",icon:"⚡",label:"Kule Blitz",badge:""},{id:"endless",icon:"🏗️",label:"Sonsuz İnşaat",badge:""},{id:"custom",icon:"🎲",label:"Serbest Mimari",badge:""}];return`
      <header class="main-menu-topbar towers-menu-topbar">
        <div class="topbar-left">
          <button type="button" class="arcade-return-chip" id="btn-towers-back-hub" title="1000in1 Kaset Odasına Dön">🕹️ Kaset</button>
          <div class="topbar-desktop-telemetry">
            <span class="topbar-sector-pill towers-sector-pill">🧱 TOWERS • ${d}/${H.length} Mahalle • ⭐ ${o}/${H.length*3}</span>
            ${s?'<button type="button" class="beta-badge beta-lab-trigger" id="btn-towers-beta-lab" title="Towers Beta Test Laboratuvarı">🧪 BETA LAB</button>':""}
          </div>
        </div>

        <div class="topbar-actions">
          ${t?"":`
            <button type="button" class="steam-btn" id="btn-towers-open-social" title="DM &amp; Topluluk">
              <div>💬 SOSYAL</div>
              ${u>0?`<b class="social-nav-badge" style="display:inline-flex;">${u}</b>`:""}
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
            <div class="towers-architect-avatar" style="border-color:${m.accentColor}">
              ${ot(m.id,46)}
            </div>
            <div class="towers-architect-info">
              <div class="towers-architect-head">
                <span class="towers-architect-name">${P(m.name)}</span>
                <span class="towers-architect-role">${P(m.title)}</span>
                <span class="towers-perk-chip">🧱 Güç +${m.powerScore}</span>
              </div>
              <div class="towers-xp-bar-wrap">
                <div class="towers-xp-labels">
                  <span><strong>Mimar LVL ${f.level}</strong> • ${P(f.title)}</span>
                  <span>${this.stats.architectXp>=9e5?"MAX (Beta Sandbox)":`${f.currentXp} / ${f.nextLevelXp} XP (%${f.progressPct})`}</span>
                </div>
                <div class="towers-xp-track">
                  <div class="towers-xp-fill" style="width:${f.progressPct}%"></div>
                </div>
              </div>
            </div>
          </div>

          <div class="towers-Currencies-row">
            <div class="towers-stat-chip"><span class="lbl">Proje Kristali</span><strong class="val">${this.stats.blueprintGems>=9e8?"♾️ Beta":`💠 ${this.stats.blueprintGems}`}</strong></div>
            <div class="towers-stat-chip"><span class="lbl">Mahalle</span><strong class="val">🏘️ ${d} / 60</strong></div>
            <div class="towers-stat-chip"><span class="lbl">Yıldız</span><strong class="val">⭐ ${o}</strong></div>
            <div class="towers-stat-chip"><span class="lbl">Başarım</span><strong class="val">🏅 ${this.stats.unlockedAchievements.length}/24</strong></div>
          </div>
        </section>

        ${t?"":`
          <div class="towers-mobile-mode-strip" role="tablist">
            ${E.map(k=>`
              <button type="button" class="towers-mobile-pill ${this.activeTab===k.id?"active":""}" data-towers-tab="${k.id}">
                ${k.icon} ${k.label}
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
              ${u>0?`<b class="social-nav-badge" style="display:inline-flex;">${u}</b>`:""}
            </button>
            <div class="discord-nav-divider" aria-hidden="true"></div>
          </div>

          <div class="discord-single-links">
            ${E.map(k=>`
              <button type="button" class="bottom-nav-tab ${this.activeTab===k.id?"active":""}" data-towers-tab="${k.id}">
                <span class="discord-nav-indicator" aria-hidden="true"></span>
                <span class="tab-icon">${k.icon}</span>
                <span class="tab-label">${k.label}</span>
                ${k.badge?`<span class="tab-badge">${P(k.badge)}</span>`:""}
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
              <span class="tab-badge">${this.stats.unlockedAchievements.length}/${vt.length}</span>
            </button>
          </div>

          <div class="desktop-sidebar-footer discord-user-dock">
            <div class="discord-voice-ship-strip">
              <div class="sidebar-ship-preview">
                ${ot(m.id,30)}
              </div>
              <div class="discord-voice-ship-info">
                <span class="discord-conn-green">● Şantiye Hazır</span>
                <small class="discord-conn-sub">LVL ${f.level} • ${P(m.name)}</small>
              </div>
              <button type="button" class="sidebar-hangar-mini-btn" id="btn-towers-workshop">🏗️ Atölye</button>
            </div>

            <div class="discord-user-bar">
              <button type="button" class="discord-user-identity profile-badge" id="btn-towers-open-profile" title="Ortak Oyuncu Kimliği">
                <div class="discord-user-avatar">
                  ${ot(m.id,28)}
                  <span class="discord-presence-dot ${l?"online":"guest"}"></span>
                </div>
                <div class="discord-user-meta">
                  <strong class="discord-user-nick">${P(e)}<small>#${P(i)}</small></strong>
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
    `}renderTabContent(){if(this.activeTab==="campaign"){const t=this.getUnlockedCampaignIndex(),e=H[t]||H[0],i=H.filter(o=>o.episode===this.selectedEpisode),s={1:"1. Evre: Kırmızı Tuğla Mahallesi (4×4 – 6×6)",2:"2. Evre: İmarlı Tarihi Semt (4×4 – 7×7)",3:"3. Evre: Eski Saat Meydanı (5×5 – 7×7)",4:"4. Evre: Sisli Konaklar (5×5 – 8×8)",5:"5. Evre: Büyük Metropol (6×6 – 8×8)"},l=lt(this.stats.equippedFacadeId,this.stats.equippedRoofId),y=Ht(i,this.stats,l,this.stats.equippedRoofId,t,o=>H.findIndex(d=>d.id===o)),f=i.map((o,d)=>{const u=H.findIndex(p=>p.id===o.id),v=this.stats.solvedIds.includes(o.id),E=u<=t||v,M=this.stats.levelStars[o.id]||0,z=kt(v,E,M),h=this.stats.bestTimesSec[o.id],c=o.difficulty==="easy"?"Kolay":o.difficulty==="medium"?"Orta":"Zor",S=z==="gold"?"Lüks Altın Konak":z==="silver"?"Klasik Tuğla Apartman":z==="bronze"?"Mahalle Gecekondusu":z==="active"?"Aktif İnşaat Parseli":"Kilitli Boş Arsa",a=o.challengeKind==="zoning"?'<span class="street-mech-tag zoning">🧱 İmar Kısıtı</span>':o.challengeKind==="fog"?'<span class="street-mech-tag fog">🌫️ Sisli Sokak</span>':"";return{lvl:o,relIdx:d,isCompleted:v,isUnlocked:E,stars:M,tier:z,tierTitle:S,mechPill:a,diffBadge:c,bestSec:h,isLandmark:d===i.length-1}}),m=Kt(f,l,this.stats.equippedRoofId,at,P);return`
        <div class="towers-campaign-wrap">
          <div class="towers-campaign-header">
            <div>
              <h2>🏙️ Tuğla Şehir Cadde Seferi (60 Mahalle)</h2>
              <p>Her parsel boş arsa başlar! Bölüm bitince madalyana göre sokağa <b>Gecekondu ★</b>, <b>Apartman ★★</b> veya <b>Lüks Konak ★★★</b> dikilir.</p>
            </div>
            <button id="btn-towers-play-next" class="towers-primary-cta" data-start-campaign="${e.id}">
              ▶️ Sıradaki Parsel: #${P(e.code)} (${P(e.cityName)})
            </button>
          </div>

          <div class="towers-episode-tabs">
            ${[1,2,3,4,5].map(o=>`
              <button type="button" class="towers-ep-btn ${this.selectedEpisode===o?"active":""}" data-towers-ep="${o}">
                ${P(s[o])}
              </button>
            `).join("")}
          </div>

          <section class="towers-street-panorama-card" aria-label="Mahalle Caddesi Silüeti">
            <div class="street-panorama-head">
              <strong>🛣️ ${P(s[this.selectedEpisode]||"")}</strong>
              <div class="street-medal-legend">
                <span>🌱 Arsa</span>
                <span>🥉 Gecekondu (★)</span>
                <span>🥈 Apartman (★★)</span>
                <span>🥇 Lüks Konak (★★★)</span>
              </div>
            </div>
            <div class="street-panorama-frame">
              ${y}
            </div>
          </section>

          <div class="towers-street-route" style="background-image: linear-gradient(180deg, rgba(220, 252, 231, 0.16), rgba(187, 247, 208, 0.24)), url('./towers/candy_park_bg.jpg');">
            ${m}
          </div>
        </div>
      `}if(this.activeTab==="challenges"){const t=wt(),e=yt(t),i=this.stats.weeklyCupKey===t&&Array.isArray(this.stats.weeklyCupScores)?this.stats.weeklyCupScores:[0,0,0];return`
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
                <h3>🏆 Haftalık Mimar Kupası (${P(t)})</h3>
                <p>Tüm oyuncularla aynı 3 sabit tohumlu tuğla sokak etabı üzerinden yüksek skor yarışı.</p>
              </div>
              <span class="towers-cup-total">Toplam: ${i[0]+i[1]+i[2]} P</span>
            </div>
            <div class="towers-cup-grid">
              ${e.map(s=>{const l=i[s.index]||0;return`
                    <div class="towers-cup-stage ${l>0?"done":""}">
                      <div class="stage-top"><strong>${s.label}</strong><span>${s.size}×${s.size}</span></div>
                      <small>${P(s.subtitle)}</small>
                      <div class="stage-score">${l>0?`Skor: <b>${l} P</b>`:"Henüz Çözülmedi"}</div>
                      <button type="button" class="towers-city-play-btn" data-towers-cup-stage="${s.index}">
                        ${l>0?"Skoru Geliştir ↻":"Etap Başlat →"}
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
              <input id="inp-towers-custom-seed" class="towers-seed-input" type="text" placeholder="Örn: TWR-5-ORTA-2026" value="${P(this.customSeedInput)}" />
            </div>
          </div>
          <button id="btn-towers-start-custom" class="towers-primary-cta">🎲 ${this.customSize}×${this.customSize} İnşaata Başla</button>
        </div>
      </div>
    `}renderBoardScreenHTML(){var M,z;const t=this.activePuzzle,e=t.size,i=ct(t,this.board),s=D.find(h=>h.id===this.stats.equippedFacadeId)||D[0],l=D.find(h=>h.id===this.stats.equippedRoofId)||D[5],y=lt(s.id,l.id),f=new Int32Array(e+1);for(let h=0;h<e;h++)for(let c=0;c<e;c++){const S=this.board[h][c];S>=1&&S<=e&&f[S]++}const m=new Map;let o="";if(this.activeSightRay){const{side:h,index:c}=this.activeSightRay,S=!!((z=(M=t.hiddenCluesMask)==null?void 0:M[h])!=null&&z[c]),a=S?0:t.clues[h][c],p=[];for(let $=0;$<e;$++){let T=c,x=$;h==="top"?(T=$,x=c):h==="bottom"?(T=e-1-$,x=c):h==="left"?(T=c,x=$):(T=c,x=e-1-$),p.push({r:T,c:x})}const w=Lt(p,this.board,a,h,c);w.visibleCells.forEach($=>m.set(`${$.r},${$.c}`,"visible")),w.hiddenCells.forEach($=>m.set(`${$.r},${$.c}`,"blocked")),o=`
        <div class="towers-sight-banner" id="towers-sight-banner">
          <span>👁️ <strong>Görüş Hattı (${h==="top"?`${c+1}. Sütun (Üstten ▾)`:h==="bottom"?`${c+1}. Sütun (Alttan ▴)`:h==="left"?`${c+1}. Satır (Soldan ▸)`:`${c+1}. Satır (Sağdan ◂)`}):</strong> ${S?"Sisli İpucu (?)":`Hedef = <b>${a||"Yok"}</b>`} • <b class="sight-ok">Görüldü: ${w.visibleCells.length}</b> • <b class="sight-hid">Örtüldü: ${w.hiddenCells.length}</b></span>
          <button type="button" id="btn-towers-clear-sight" class="towers-mini-btn">Kapat ✕</button>
        </div>
      `}const d=this.activeMode==="campaign"&&this.activeCampaignLevel?`🏘️ #${this.activeCampaignLevel.code}: ${this.activeCampaignLevel.cityName}`:this.activeMode==="daily"?"🧱 Günlük Bina":this.activeMode==="endless"?`🏗️ Dalga #${this.endlessWave}`:this.activeMode==="blitz"?`⚡ Blitz: ${this.blitzScore} P`:this.activeChallengeKind==="zoning"?"🚧 İmar Kısıtı":this.activeChallengeKind==="fog"?"🌫️ Sisli Sokak":this.activeChallengeKind==="survival"?"🪖 3 Baret Hayatta Kalma":this.activeChallengeKind==="weekly_cup"?`🏆 Kupa Etabı #${(this.activeCupStageIdx??0)+1}`:`🎲 Serbest (${e}×${e})`,u=(h,c)=>{var a,p;if((p=(a=t.hiddenCluesMask)==null?void 0:a[h])!=null&&p[c])return"fogged";const S=`${h}:${c}`;return i.violatedClueKeys.has(S)?"violated":i.satisfiedClueKeys.has(S)?"satisfied":"pending"},v=(h,c,S)=>{var T,x,B,K;const a=!!((x=(T=t.hiddenCluesMask)==null?void 0:T[h])!=null&&x[c]),p=t.clues[h][c],w=u(h,c),k=((B=this.activeSightRay)==null?void 0:B.side)===h&&((K=this.activeSightRay)==null?void 0:K.index)===c,$=a?"🌫️":p>0?String(p):"·";return`
        <button
          type="button"
          class="towers-clue-cell ${h} ${w} ${k?"active-ray":""}"
          data-towers-clue="${h}-${c}"
          title="${a?"Sisli İpucu":"Görüş Hattını Göster / Gizle"}"
        >
          ${h==="right"||h==="bottom"?`<span class="clue-arrow">${S}</span><span class="clue-num">${$}</span>`:`<span class="clue-num">${$}</span><span class="clue-arrow">${S}</span>`}
        </button>
      `},E=!!(this.activeHint||o);return`
      <div class="towers-board-screen ${E?"has-banner":""}" id="towers-board-screen">
        <div class="towers-board-hud">
          <div class="hud-left-btns">
            <button type="button" id="btn-towers-leave-board" class="towers-back-map-btn">⬅️ Menü</button>
            <button type="button" id="btn-towers-pause" class="towers-back-map-btn">${this.isPaused?"▶️ Sürdür":"⏸️ Duraklat"}</button>
          </div>

          <div class="towers-hud-center">
            <span class="towers-hud-title">${P(d)}</span>
            <span class="towers-hud-sub">${e}×${e} • ${P(s.name)}</span>
          </div>

          <div class="towers-hud-metrics">
            ${this.activeChallengeKind==="survival"?`<span class="towers-hud-pill survival-lives">${"🪖".repeat(this.survivalLives)}${"⚫".repeat(Math.max(0,3-this.survivalLives))}</span>`:""}
            <span class="towers-hud-pill" id="towers-hud-timer">
              ⏱️ ${this.activeMode==="blitz"?at(this.blitzRemainingSeconds):at(this.elapsedSeconds)}
            </span>
            <button type="button" id="btn-towers-sight-toggle" class="towers-hud-pill btn-pill ${this.activeSightRay?"active":""}" title="Görüş Hattını İncele (V)">
              👁️ Görüş
            </button>
            ${this.host.isBetaChannel()?'<button type="button" id="btn-towers-beta-lab" class="towers-beta-chip">🧪</button>':""}
          </div>
        </div>

        ${this.activeHint?"":o}

        ${E?"":`<div class="towers-clue-guide-strip" aria-hidden="true">
          <span>👁️ <b>Kenar sayıları:</b> Ok yönünden bakınca görünen bina sayısıdır • Sayıya dokun = görüşü çiz</span>
        </div>`}

        ${this.activeHint?`
          <div class="towers-hint-banner" id="towers-hint-banner">
            <div class="towers-hint-text">
              <span class="hint-kind-pill ${this.activeHint.isCorrection?"fix":"deduce"}">${this.activeHint.isCorrection?"🔧 DÜZELTME":"🔍 İPUCU"}</span>
              <strong>${P(this.activeHint.ruleTitle)}:</strong> ${P(this.activeHint.message)}
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
          <div class="towers-matrix" id="towers-matrix" style="--towers-size: ${e};">
            <div class="towers-corner-spacer"></div>
            ${Array.from({length:e},(h,c)=>v("top",c,"▼")).join("")}
            <div class="towers-corner-spacer"></div>

            ${Array.from({length:e},(h,c)=>{const S=Array.from({length:e},(a,p)=>{var V,j,Y,F,X,Z,Q,n,g;const w=this.board[c][p],k=t.givens[c][p]>0,$=this.selectedCell.r===c&&this.selectedCell.c===p,T=i.duplicateKeys.has(`${c},${p}`),x=i.zoningViolationKeys.has(`${c},${p}`),B=((j=(V=t.maxHeightLimits)==null?void 0:V[c])==null?void 0:j[p])||0,K=((Y=this.activeHint)==null?void 0:Y.r)===c&&((F=this.activeHint)==null?void 0:F.c)===p,U=!!((X=this.activeHint)!=null&&X.focusLine)&&(((Q=(Z=this.activeHint)==null?void 0:Z.focusLine)==null?void 0:Q.kind)==="row"&&this.activeHint.focusLine.index===c||((g=(n=this.activeHint)==null?void 0:n.focusLine)==null?void 0:g.kind)==="col"&&this.activeHint.focusLine.index===p),G=m.get(`${c},${p}`)||"",N=this.notes[c][p];return`
                  <div
                    class="towers-cell ${w>0?"has-tower":"empty"} ${k?"given":""} ${$?"selected":""} ${T||x?"conflict":""} ${K?"hint-target":""} ${U&&!K?"hint-focus-line":""} ${B>0?"zoned":""} ${G?`sight-${G}`:""}"
                    data-towers-cell="${c}-${p}"
                    data-row="${c}"
                    data-col="${p}"
                    data-val="${w}"
                  >
                    ${K&&this.activeHint?`<span class="tower-hint-badge" aria-hidden="true">👇 ${this.activeHint.value}</span>`:""}
                    ${B>0?`<span class="tower-zone-badge" title="İmar Kısıtı: Maksimum ${B} kat">≤${B}</span>`:""}
                    ${w>0?`
                      <div class="tower-pixel-bldg-wrap">
                        ${bt(w,e,y,l.id)}
                        <span class="tower-height-badge ${k?"given-badge":""}">${w}</span>
                      </div>
                    `:N.length>0?`
                      <div class="tower-notes-grid">
                        ${Array.from({length:e},(C,L)=>{const A=L+1;return`<span class="tower-note-item ${N.includes(A)?"on":""}">${N.includes(A)?A:""}</span>`}).join("")}
                      </div>
                    `:'<span class="tower-plot-stakes" aria-hidden="true"><i></i><i></i></span>'}
                    ${G==="visible"?'<span class="tower-sight-tag visible" title="Görüldü">👁️</span>':G==="blocked"?'<span class="tower-sight-tag blocked" title="Önündeki yüksek bina tarafından örtüldü">⬛</span>':""}
                  </div>
                `}).join("");return`${v("left",c,"▶")}${S}${v("right",c,"◀")}`}).join("")}

            <div class="towers-corner-spacer"></div>
            ${Array.from({length:e},(h,c)=>v("bottom",c,"▲")).join("")}
            <div class="towers-corner-spacer"></div>
          </div>
        </div>

        <div class="towers-controls-dock">
          <div class="towers-numpad" role="group" aria-label="Bina Kat Yüksekliği">
            ${Array.from({length:e},(h,c)=>{const S=c+1,a=Math.max(0,e-f[S]);return`
                <button
                  type="button"
                  class="towers-num-btn ${this.noteMode?"note-active":""} ${a===0?"all-placed":""}"
                  data-towers-num="${S}"
                >
                  <span class="num-main">${S}</span>
                  <span class="num-lbl">${this.noteMode?"Not":a===0?"✓":`×${a}`}</span>
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
    `}renderActiveModal(){return this.activeModal?this.activeModal==="tutorial"?qt({step:this.tutorialStep,miniBoard:this.tutorialMiniBoard,selectedMiniCell:this.tutorialSelectedCell,palId:{facade:this.stats.equippedFacadeId,roof:this.stats.equippedRoofId}}):this.activeModal==="rules"?Rt():this.activeModal==="workshop"?_t(this.stats):this.activeModal==="profile"?Gt(this.stats):this.activeModal==="beta-lab"?Wt(this.inBoardView):this.activeModal==="gameover"?Ut(this.gameOverReason):this.activeModal==="victory"&&this.lastWinSummary?Dt({elapsedSeconds:this.elapsedSeconds,hintsUsed:this.hintsUsedThisGame,challengeKind:this.activeChallengeKind,summary:this.lastWinSummary}):"":""}bindEvents(t){var i,s,l,y,f,m,o,d,u,v,E,M,z,h,c,S,a,p,w,k,$,T,x,B,K,U,G,N,V,j,Y,F,X,Z,Q;(i=t.querySelector("#btn-towers-back-hub"))==null||i.addEventListener("click",()=>{this.stopTimer(),this.host.onBackToHub()}),(s=t.querySelector("#btn-towers-open-social"))==null||s.addEventListener("click",()=>{var n,g;(g=(n=this.host).onOpenSocialHub)==null||g.call(n)}),(l=t.querySelector("#btn-towers-open-profile"))==null||l.addEventListener("click",()=>{var n,g;(g=(n=this.host).onOpenGlobalProfile)==null||g.call(n)}),(y=t.querySelector("#btn-towers-dock-sfx"))==null||y.addEventListener("click",()=>{var n,g;(g=(n=this.host).onToggleSound)==null||g.call(n),this.render()}),(f=t.querySelector("#btn-towers-dock-music"))==null||f.addEventListener("click",()=>{var n,g;(g=(n=this.host).onToggleMusic)==null||g.call(n),this.render()}),(m=t.querySelector("#btn-towers-quit"))==null||m.addEventListener("click",()=>{var n,g;(g=(n=this.host).onQuitApp)==null||g.call(n)}),(o=t.querySelector("#btn-towers-tutorial"))==null||o.addEventListener("click",()=>{this.tutorialStep=1,this.tutorialMiniBoard=nt.map(n=>[...n]),this.tutorialSelectedCell={r:0,c:1},this.activeModal="tutorial",this.render()}),(d=t.querySelector("#btn-towers-rules"))==null||d.addEventListener("click",()=>{this.activeModal="rules",this.render()}),(u=t.querySelector("#btn-towers-workshop"))==null||u.addEventListener("click",()=>{this.activeModal="workshop",this.render()}),(v=t.querySelector("#btn-towers-profile"))==null||v.addEventListener("click",()=>{this.activeModal="profile",this.render()}),(E=t.querySelector("#btn-towers-settings"))==null||E.addEventListener("click",()=>{this.host.onOpenGlobalSettings()}),(M=t.querySelector("#btn-towers-beta-lab"))==null||M.addEventListener("click",()=>{this.activeModal="beta-lab",this.render()}),(z=t.querySelector("#btn-towers-close-modal"))==null||z.addEventListener("click",()=>{this.activeModal=null,this.render()}),t.querySelectorAll("[data-tut-step]").forEach(n=>{n.addEventListener("click",()=>{this.tutorialStep=Number(n.dataset.tutStep)||1,this.render()})}),t.querySelectorAll("[data-tut-cell]").forEach(n=>{n.addEventListener("click",()=>{var J,tt,et;const[g,C]=(n.dataset.tutCell||"0-0").split("-"),L=Number(g)||0,A=Number(C)||0;((J=nt[L])==null?void 0:J[A])>0||(this.tutorialSelectedCell={r:L,c:A},(et=(tt=this.host).playSound)==null||et.call(tt,"click"),this.render())})}),t.querySelectorAll("[data-tut-num]").forEach(n=>{n.addEventListener("click",()=>{var A,J,tt,et,gt;const g=Number(n.dataset.tutNum)||0,{r:C,c:L}=this.tutorialSelectedCell;((A=nt[C])==null?void 0:A[L])>0||(this.tutorialMiniBoard[C][L]=g,g>0?(tt=(J=this.host).playSound)==null||tt.call(J,"place",{floors:g,maxFloors:3}):(gt=(et=this.host).playSound)==null||gt.call(et,"erase"),this.render())})}),(h=t.querySelector("#btn-towers-tutorial-next"))==null||h.addEventListener("click",()=>{this.tutorialStep=Math.min(3,this.tutorialStep+1),this.render()}),(c=t.querySelector("#btn-towers-tutorial-practice"))==null||c.addEventListener("click",()=>{this.activeModal=null;const n=H[0],g=R(n.size,n.difficulty,n.seed,{id:n.id,title:n.cityName,code:n.code});this.startPuzzleSession(g,"campaign",n)}),t.querySelectorAll("[data-towers-tab]").forEach(n=>{n.addEventListener("click",()=>{var C,L;const g=n.dataset.towersTab;g&&(this.activeTab=g,(L=(C=this.host).playSound)==null||L.call(C,"click"),this.render())})}),t.querySelectorAll("[data-towers-ep]").forEach(n=>{n.addEventListener("click",()=>{this.selectedEpisode=Number(n.dataset.towersEp)||1,this.render()})}),t.querySelectorAll("[data-start-campaign]").forEach(n=>{n.addEventListener("click",()=>{const g=n.dataset.startCampaign,C=H.find(A=>A.id===g);if(!C)return;const L=C.challengeKind==="zoning"||C.challengeKind==="fog"?it(C.challengeKind,C.size,C.difficulty,C.seed,{id:C.id,title:C.cityName,code:C.code}):R(C.size,C.difficulty,C.seed,{id:C.id,title:C.cityName,code:C.code});this.startPuzzleSession(L,"campaign",C)})}),(S=t.querySelector("#btn-towers-start-zoning"))==null||S.addEventListener("click",()=>{const n=it("zoning",5,"medium",`TWR-ZONE-${Date.now()}`);this.startPuzzleSession(n,"challenge")}),(a=t.querySelector("#btn-towers-start-fog"))==null||a.addEventListener("click",()=>{const n=it("fog",5,"medium",`TWR-FOG-${Date.now()}`);this.startPuzzleSession(n,"challenge")}),(p=t.querySelector("#btn-towers-start-survival"))==null||p.addEventListener("click",()=>{const n=it("survival",5,"hard",`TWR-SURV-${Date.now()}`);this.startPuzzleSession(n,"challenge")}),t.querySelectorAll("[data-towers-cup-stage]").forEach(n=>{n.addEventListener("click",()=>{const g=Number(n.dataset.towersCupStage);if(g!==0&&g!==1&&g!==2)return;const L=yt()[g],A=it(L.challengeKind==="zoning"?"zoning":"weekly_cup",L.size,L.difficulty,L.seed,{id:L.seed,title:`🏆 ${L.label}: ${L.subtitle}`});A.challengeKind="weekly_cup",this.startPuzzleSession(A,"challenge",null,{cupStageIdx:g})})}),(w=t.querySelector("#btn-towers-start-daily"))==null||w.addEventListener("click",()=>{const n=new Date().toISOString().slice(0,10),g=R(5,"medium",`TWR-DAILY-${n}`);this.startPuzzleSession(g,"daily")}),(k=t.querySelector("#btn-towers-start-endless"))==null||k.addEventListener("click",()=>{const n=this.endlessWave<=2?4:this.endlessWave<=5?5:6,g=this.endlessWave<=2?"easy":this.endlessWave<=6?"medium":"hard",C=R(n,g,`TWR-ENDLESS-W${this.endlessWave}-${Date.now()}`);this.startPuzzleSession(C,"endless")}),($=t.querySelector("#btn-towers-start-blitz"))==null||$.addEventListener("click",()=>{const n=R(4,"easy",`TWR-BLITZ-${Date.now()}-0`);this.startPuzzleSession(n,"blitz")}),t.querySelectorAll("[data-custom-size]").forEach(n=>{n.addEventListener("click",()=>{this.customSize=Number(n.dataset.customSize)||4,this.render()})}),t.querySelectorAll("[data-custom-diff]").forEach(n=>{n.addEventListener("click",()=>{this.customDifficulty=n.dataset.customDiff||"easy",this.render()})});const e=t.querySelector("#inp-towers-custom-seed");e==null||e.addEventListener("input",()=>{this.customSeedInput=e.value}),(T=t.querySelector("#btn-towers-start-custom"))==null||T.addEventListener("click",()=>{const n=this.customSeedInput.trim()||`TWR-CUSTOM-${this.customSize}-${this.customDifficulty}-${Date.now()}`,g=R(this.customSize,this.customDifficulty,n);this.startPuzzleSession(g,"custom")}),(x=t.querySelector("#btn-towers-leave-board"))==null||x.addEventListener("click",()=>{this.stopTimer(),this.inBoardView=!1,this.isPaused=!1,this.render()}),(B=t.querySelector("#btn-towers-pause"))==null||B.addEventListener("click",()=>{this.isPaused=!this.isPaused,this.render()}),(K=t.querySelector("#btn-towers-resume"))==null||K.addEventListener("click",()=>{this.isPaused=!1,this.render()}),(U=t.querySelector("#btn-towers-sight-toggle"))==null||U.addEventListener("click",()=>{this.toggleSightRayFromSelection()}),t.querySelectorAll("[data-towers-cell]").forEach(n=>{n.addEventListener("click",()=>{this.selectedCell={r:Number(n.dataset.row)||0,c:Number(n.dataset.col)||0},this.render()})}),t.querySelectorAll("[data-towers-clue]").forEach(n=>{n.addEventListener("click",()=>{const g=n.dataset.towersClue||"",[C,L]=g.split("-"),A=Number(L)||0;this.activeSightRay&&this.activeSightRay.side===C&&this.activeSightRay.index===A?this.activeSightRay=null:this.activeSightRay={side:C,index:A},this.render()})}),(G=t.querySelector("#btn-towers-clear-sight"))==null||G.addEventListener("click",()=>{this.activeSightRay=null,this.render()}),t.querySelectorAll("[data-towers-num]").forEach(n=>{n.addEventListener("click",()=>{const g=Number(n.dataset.towersNum)||1;this.handleNumberInput(g)})}),(N=t.querySelector("#btn-towers-notes-toggle"))==null||N.addEventListener("click",()=>{this.noteMode=!this.noteMode,this.render()}),(V=t.querySelector("#btn-towers-erase"))==null||V.addEventListener("click",()=>this.handleEraseInput()),(j=t.querySelector("#btn-towers-undo"))==null||j.addEventListener("click",()=>this.handleUndo()),(Y=t.querySelector("#btn-towers-redo"))==null||Y.addEventListener("click",()=>this.handleRedo()),(F=t.querySelector("#btn-towers-hint"))==null||F.addEventListener("click",()=>this.handleSmartHint()),(X=t.querySelector("#btn-towers-apply-hint"))==null||X.addEventListener("click",()=>this.applyActiveHintMove()),(Z=t.querySelector("#btn-towers-close-hint"))==null||Z.addEventListener("click",()=>{this.activeHint=null,this.activeSightRay=null,this.render()}),(Q=t.querySelector("#btn-towers-reset"))==null||Q.addEventListener("click",()=>{!this.activePuzzle||this.isPaused||(this.pushHistory(),this.board=O(this.activePuzzle.givens),this.notes=Array.from({length:this.activePuzzle.size},()=>Array.from({length:this.activePuzzle.size},()=>[])),this.activeHint=null,this.render())}),this.bindWorkshopAndMetaModals(t)}bindWorkshopAndMetaModals(t){var e,i,s,l,y,f,m;t.querySelectorAll("[data-buy-char]").forEach(o=>{o.addEventListener("click",()=>{const d=o.dataset.buyChar,u=rt.find(v=>v.id===d);!u||this.stats.blueprintGems<u.costGems||(this.stats.blueprintGems-=u.costGems,this.stats.unlockedCharacterIds.includes(d)||this.stats.unlockedCharacterIds.push(d),this.stats.equippedCharacterId=d,st(this.stats),this.render())})}),t.querySelectorAll("[data-equip-char]").forEach(o=>{o.addEventListener("click",()=>{const d=o.dataset.equipChar;this.stats.unlockedCharacterIds.includes(d)&&(this.stats.equippedCharacterId=d,st(this.stats),this.render())})}),t.querySelectorAll("[data-buy-cosmetic]").forEach(o=>{o.addEventListener("click",()=>{const d=o.dataset.buyCosmetic,u=D.find(v=>v.id===d);!u||this.stats.blueprintGems<u.costGems||(this.stats.blueprintGems-=u.costGems,this.stats.unlockedCosmeticIds.includes(d)||this.stats.unlockedCosmeticIds.push(d),u.slot==="facade"?this.stats.equippedFacadeId=d:this.stats.equippedRoofId=d,st(this.stats),this.render())})}),t.querySelectorAll("[data-equip-cosmetic]").forEach(o=>{o.addEventListener("click",()=>{const d=o.dataset.equipCosmetic,u=D.find(v=>v.id===d);u&&(u.slot==="facade"?this.stats.equippedFacadeId=d:this.stats.equippedRoofId=d,st(this.stats),this.render())})}),(e=t.querySelector("#btn-towers-preset-max"))==null||e.addEventListener("click",()=>{this.stats=ht("unlock_all"),this.activeModal=null,this.render()}),(i=t.querySelector("#btn-towers-preset-mid"))==null||i.addEventListener("click",()=>{this.stats=ht("classic_sandbox"),this.activeModal=null,this.render()}),(s=t.querySelector("#btn-towers-preset-reset"))==null||s.addEventListener("click",()=>{this.stats=ht("fresh_lvl1"),this.activeModal=null,this.render()}),(l=t.querySelector("#btn-towers-instant-solve"))==null||l.addEventListener("click",()=>{this.activePuzzle&&(this.activeModal=null,this.board=O(this.activePuzzle.solution),this.checkWinAfterMove(),this.render())}),(y=t.querySelector("#btn-towers-retry-board"))==null||y.addEventListener("click",()=>{this.activePuzzle&&(this.activeModal=null,this.startPuzzleSession(this.activePuzzle,this.activeMode,this.activeCampaignLevel,{resetSeries:!0,cupStageIdx:this.activeCupStageIdx}))}),(f=t.querySelector("#btn-towers-win-map"))==null||f.addEventListener("click",()=>{this.activeModal=null,this.inBoardView=!1,this.render()}),(m=t.querySelector("#btn-towers-win-next"))==null||m.addEventListener("click",()=>{if(this.activeModal=null,this.activeMode==="campaign"&&this.activeCampaignLevel){const o=H.findIndex(v=>v.id===this.activeCampaignLevel.id),d=H[Math.min(H.length-1,o+1)];this.selectedEpisode=d.episode;const u=R(d.size,d.difficulty,d.seed,{id:d.id,title:d.cityName,code:d.code});this.startPuzzleSession(u,"campaign",d)}else if(this.activeMode==="endless"){const o=this.endlessWave<=2?4:this.endlessWave<=5?5:6,d=this.endlessWave<=2?"easy":this.endlessWave<=6?"medium":"hard",u=R(o,d,`TWR-ENDLESS-W${this.endlessWave}-${Date.now()}`);this.startPuzzleSession(u,"endless")}else this.inBoardView=!1,this.render()})}}class jt{constructor(){b(this,"id","towers");b(this,"title","Towers");b(this,"sceneTheme","brick-city");b(this,"controller",null);b(this,"host",null)}mount(t,e){this.unmount(),this.host=e;const i={getUsername:()=>e.getUsername(),getPilotTag:()=>e.getPilotTag(),isBetaChannel:()=>e.isBetaChannel,getCloudSynced:()=>{var s;return((s=e.getCloudSynced)==null?void 0:s.call(e))??!1},canQuit:()=>{var s;return((s=e.canQuit)==null?void 0:s.call(e))??!1},renderTitlebar:()=>{var s;return((s=e.renderTitlebar)==null?void 0:s.call(e))??""},bindTitlebarEvents:()=>{var s;return(s=e.bindTitlebarEvents)==null?void 0:s.call(e)},onBackToHub:()=>e.returnToHub(),onOpenGlobalSettings:()=>e.openGlobalSettings(),onOpenGlobalProfile:()=>{var s;return(s=e.openGlobalProfile)==null?void 0:s.call(e)},onOpenSocialHub:()=>e.openSocialHub({pauseActiveGame:!0}),getSocialAttentionCount:()=>{var s;return((s=e.getSocialAttentionCount)==null?void 0:s.call(e))??0},getAudioSettings:()=>{var s;return((s=e.getAudioSettings)==null?void 0:s.call(e))??{soundEnabled:_.soundEnabled,musicEnabled:_.musicEnabled}},onToggleSound:()=>{var s;return(s=e.toggleSound)==null?void 0:s.call(e)},onToggleMusic:()=>{var s;return(s=e.toggleMusic)==null?void 0:s.call(e)},onQuitApp:()=>{var s;return(s=e.quitApp)==null?void 0:s.call(e)},playSound:(s,l)=>{s==="error"?_.playLockedBarrier():s==="win"?_.playVictory():s==="hint"?_.playGalaxyComplete(1):s==="erase"?_.playTrowelErase():s==="place"?_.playBrickPlace((l==null?void 0:l.floors)||2,(l==null?void 0:l.maxFloors)||6):_.playConsoleButton()}};this.controller=new Nt(i),this.controller.mount(t),e.setAudioScene(this.sceneTheme)}unmount(){this.controller&&(this.controller.destroy(),this.controller=null),this.host=null}refreshHostState(){var t,e;(t=this.controller)==null||t.syncStatsFromStorage(),(e=this.controller)==null||e.render()}onPauseForOverlay(){var t;(t=this.controller)==null||t.pauseIfPlaying()}handleBackNavigation(){return!this.controller||!this.host?!1:(this.controller.handleBackNavigation()||this.host.returnToHub(),!0)}}export{jt as TowersPlugin};
