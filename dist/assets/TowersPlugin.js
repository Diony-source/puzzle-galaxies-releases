var St=Object.defineProperty;var zt=(n,t,e)=>t in n?St(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var b=(n,t,e)=>zt(n,typeof t!="symbol"?t+"":t,e);import{T as G,A as rt,g as ft,a as vt,l as dt,v as ct,b as Ct,c as _,e as Mt,s as st,r as D,d as mt,f as wt,h as Et,i as H,j as Tt,k as yt,m as xt,n as it,o as ht,p as R}from"./app.js";const q="./towers",Lt={1:{src:`${q}/bldg_1.png`,heightPct:54},2:{src:`${q}/bldg_2.png`,heightPct:68},3:{src:`${q}/bldg_3.png`,heightPct:78},4:{src:`${q}/bldg_4.png`,heightPct:87},5:{src:`${q}/bldg_5.png`,heightPct:94},6:{src:`${q}/bldg_6.png`,heightPct:100}};function lt(n,t){const e={facade_neon:{p:"#c85a32",s:"#e07a47",sh:"#7f3319",mortar:"#471d10",w:"#fde047",wg:"#fef08a",hl:"#ffedd5"},facade_crystal:{p:"#d97706",s:"#fde68a",sh:"#92400e",mortar:"#78350f",w:"#fef9c3",wg:"#ffffff",hl:"#fffbeb"},facade_artdeco:{p:"#9a3412",s:"#ea580c",sh:"#431407",mortar:"#271509",w:"#fed7aa",wg:"#fef3c7",hl:"#ffedd5"},facade_emerald:{p:"#047857",s:"#10b981",sh:"#064e3b",mortar:"#022c22",w:"#fde68a",wg:"#fef9c3",hl:"#a7f3d0"},facade_plasma:{p:"#4338ca",s:"#818cf8",sh:"#312e81",mortar:"#1e1b4b",w:"#a5f3fc",wg:"#ecfeff",hl:"#ddd6fe"}},s={roof_flat:{rp:"#78716c",ra:"#fbbf24"},roof_spire:{rp:"#d97706",ra:"#fde047"},roof_pyramid:{rp:"#dc2626",ra:"#fecaca"},roof_halo:{rp:"#0284c7",ra:"#bae6fd"},roof_sun:{rp:"#b45309",ra:"#fef08a"}},i=e[n]||e.facade_neon,l=s[t]||s.roof_flat;return{facadeId:n,brickPrimary:i.p,brickSecondary:i.s,brickShadow:i.sh,mortar:i.mortar,windowLit:i.w,windowGlow:i.wg,roofPrimary:l.rp,roofAccent:l.ra,outline:"#1e1829",highlight:i.hl}}function Pt(n,t){const e=Math.max(1,Math.min(t,n));let s=1;t<=3?s=e===1?1:e===2?3:5:t===4?s=e===1?1:e===2?2:e===3?4:6:t===5?s=e===1?1:e===2?2:e===3?3:e===4?5:6:e===1?s=1:e===2?s=2:e===3?s=3:e===4?s=4:e===5?s=5:s=6;const i=t>6?Math.min(100,48+Math.round(e/t*52)):null,l=Lt[s];return{tierIdx:s,src:l.src,heightPct:i??l.heightPct}}function At(n){switch(n){case"facade_crystal":return"sepia(0.38) brightness(1.18) saturate(0.78) hue-rotate(8deg)";case"facade_artdeco":return"saturate(1.42) hue-rotate(-14deg) contrast(1.06)";case"facade_emerald":return"hue-rotate(96deg) saturate(1.06) brightness(1.02)";case"facade_plasma":return"hue-rotate(196deg) saturate(1.16) brightness(0.94)";default:return""}}function Bt(n){switch(n){case"roof_spire":return"--bldg-glow: rgba(251, 191, 36, 0.55);";case"roof_pyramid":return"--bldg-glow: rgba(220, 38, 38, 0.52);";case"roof_halo":return"--bldg-glow: rgba(56, 189, 248, 0.55);";case"roof_sun":return"--bldg-glow: rgba(251, 146, 60, 0.65);";default:return""}}function Ht(n,t=44){return n==="roof_spire"?`
      <svg viewBox="0 0 32 32" width="${t}" height="${t}" xmlns="http://www.w3.org/2000/svg" shape-rendering="crispEdges">
        <rect x="0" y="0" width="32" height="32" fill="#e0f2fe" />
        <rect x="6" y="23" width="20" height="7" fill="#c2410c" stroke="#1e1829" stroke-width="1.5" />
        <rect x="9" y="15" width="14" height="8" fill="#fef3c7" stroke="#1e1829" stroke-width="1.5" />
        <circle cx="16" cy="19" r="3" fill="#fde047" stroke="#1e1829" stroke-width="1" />
        <polygon points="10,15 16,4 22,15" fill="#0d9488" stroke="#1e1829" stroke-width="1.5" />
        <rect x="15" y="1" width="2" height="4" fill="#f59e0b" />
      </svg>
    `:n==="roof_pyramid"?`
      <svg viewBox="0 0 32 32" width="${t}" height="${t}" xmlns="http://www.w3.org/2000/svg" shape-rendering="crispEdges">
        <rect x="0" y="0" width="32" height="32" fill="#ffedd5" />
        <rect x="5" y="21" width="22" height="9" fill="#d97706" stroke="#1e1829" stroke-width="1.5" />
        <polygon points="3,21 16,7 29,21" fill="#dc2626" stroke="#1e1829" stroke-width="1.5" />
        <rect x="13" y="14" width="6" height="5" fill="#fef08a" stroke="#1e1829" stroke-width="1" />
        <rect x="21" y="9" width="3" height="6" fill="#9a3412" stroke="#1e1829" stroke-width="1" />
      </svg>
    `:n==="roof_halo"?`
      <svg viewBox="0 0 32 32" width="${t}" height="${t}" xmlns="http://www.w3.org/2000/svg" shape-rendering="crispEdges">
        <rect x="0" y="0" width="32" height="32" fill="#dbeafe" />
        <rect x="4" y="23" width="24" height="7" fill="#7c2d12" stroke="#1e1829" stroke-width="1.5" />
        <rect x="10" y="17" width="2" height="6" fill="#1e293b" />
        <rect x="20" y="17" width="2" height="6" fill="#1e293b" />
        <rect x="9" y="8" width="14" height="10" fill="#92400e" stroke="#1e1829" stroke-width="1.5" />
        <rect x="9" y="11" width="14" height="2" fill="#475569" />
        <rect x="9" y="15" width="14" height="1.5" fill="#475569" />
        <polygon points="8,8 16,3 24,8" fill="#57534e" stroke="#1e1829" stroke-width="1.2" />
      </svg>
    `:n==="roof_sun"?`
      <svg viewBox="0 0 32 32" width="${t}" height="${t}" xmlns="http://www.w3.org/2000/svg" shape-rendering="crispEdges">
        <rect x="0" y="0" width="32" height="32" fill="#fef3c7" />
        <rect x="5" y="22" width="22" height="8" fill="#9a3412" stroke="#1e1829" stroke-width="1.5" />
        <rect x="9" y="15" width="14" height="7" fill="#fef08a" stroke="#1e1829" stroke-width="1.5" />
        <path d="M9 15 Q16 3 23 15 Z" fill="#f59e0b" stroke="#1e1829" stroke-width="1.5" />
        <rect x="15" y="2" width="2" height="4" fill="#fde047" />
        <rect x="12" y="17" width="3" height="5" fill="#ea580c" />
        <rect x="17" y="17" width="3" height="5" fill="#ea580c" />
      </svg>
    `:`
    <svg viewBox="0 0 32 32" width="${t}" height="${t}" xmlns="http://www.w3.org/2000/svg" shape-rendering="crispEdges">
      <rect x="0" y="0" width="32" height="32" fill="#dcfce7" />
      <rect x="4" y="18" width="24" height="12" fill="#b45309" stroke="#1e1829" stroke-width="1.5" />
      <rect x="3" y="15" width="26" height="4" fill="#fef3c7" stroke="#1e1829" stroke-width="1.5" />
      <rect x="20" y="8" width="5" height="7" fill="#9a3412" stroke="#1e1829" stroke-width="1.3" />
      <rect x="22" y="4" width="3" height="2" fill="#cbd5e1" />
      <rect x="7" y="11" width="8" height="4" fill="#16a34a" stroke="#1e1829" stroke-width="1.2" />
    </svg>
  `}function bt(n,t,e,s){const{tierIdx:i,src:l,heightPct:w}=Pt(n,t),f=Bt(s),m=At(e.facadeId),o=m?`filter: ${m} drop-shadow(0 2px 0 rgba(30, 24, 41, 0.35));`:"";return`
    <div
      class="tower-pixel-bldg-svg tier-sprite-${i}"
      style="--bldg-h: ${w}%; --bldg-trim: ${e.brickSecondary}; ${f}"
      aria-hidden="true"
    >
      <img
        class="tower-pixel-sprite-img"
        src="${l}"
        alt=""
        style="${o}"
        loading="eager"
        decoding="async"
        draggable="false"
      />
    </div>
  `}function kt(n,t,e){return n?e>=3?"gold":e===2?"silver":"bronze":t?"active":"locked"}function $t(n,t=!1){switch(n){case"gold":return`${q}/${t?"bldg_6.png":"bldg_5.png"}`;case"silver":return`${q}/bldg_3.png`;case"bronze":return`${q}/bldg_1.png`;case"active":return`${q}/lot_crane.png`;default:return`${q}/lot_empty.png`}}function Kt(n,t,e,s="",i=!1){const l=$t(n,i);return`
    <img
      class="${s} street-sprite-img street-tier-${n}"
      src="${l}"
      alt=""
      loading="eager"
      decoding="async"
      draggable="false"
      aria-hidden="true"
    />
  `}function It(n,t,e,s,i,l){const m=Math.max(1,n.length),o=78,u=(1200-o*2)/m,v=206,E=n.map((M,z)=>{const h=l(M.id),c=t.solvedIds.includes(M.id),S=h<=i||c,a=t.levelStars[M.id]||0,p=kt(c,S,a),y=z===m-1,k=$t(p,y),$=Math.round(o+u*(z+.5)),T=Math.min(82,Math.round(u*.9)),L=p==="gold"?y?148:132:p==="silver"?106:p==="bronze"?64:p==="active"?88:34,B=v-L,I=p==="gold"?"#f59e0b":p==="silver"?"#cbd5e1":p==="bronze"?"#d97706":p==="active"?"#0ea5e9":"#64748b",U=p==="silver"||p==="gold"?"#1e1b2e":"#ffffff";return`
        <g>
          <ellipse cx="${$}" cy="${v+1}" rx="${Math.round(T*.42)}" ry="5" fill="rgba(30,24,41,0.22)" />
          <image
            href="${k}"
            x="${$-Math.round(T/2)}"
            y="${B}"
            width="${T}"
            height="${L}"
            preserveAspectRatio="xMidYMax meet"
            style="image-rendering: pixelated;"
          />
          <rect x="${$-12}" y="${v+10}" width="24" height="16" rx="3" fill="${I}" stroke="#1e1829" stroke-width="2" />
          <text x="${$}" y="${v+21}" text-anchor="middle" fill="${U}" font-size="10" font-weight="900" font-family="monospace">${z+1}</text>
        </g>
      `}).join("");return`
    <svg class="towers-street-panorama-svg" viewBox="0 0 1200 248" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Mahalle Caddesi Silüeti">
      <image
        href="${q}/town_sky_backdrop.jpg"
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
  `}function qt(n,t,e,s,i){const o=Math.max(1,n.length),d=82+Math.max(0,o-1)*148+84,u=n.map((a,p)=>{const y=p%2===0,k=y?20:80,$=Math.round(k/100*680),T=82+p*148,L=y?"right":"left",B=Math.round(y?680*.34:680*.66);return{...a,xPct:k,xSvg:$,ySvg:T,plotSide:L,drivewayX:B}}),v=u.slice(0,-1).map((a,p)=>{const y=u[p+1],k=Math.round((a.ySvg+y.ySvg)/2),$=`M ${a.xSvg} ${a.ySvg} C ${a.xSvg} ${k}, ${y.xSvg} ${k}, ${y.xSvg} ${y.ySvg}`,T=y.isUnlocked||a.isCompleted,L=T?"#fef3c7":"#e7e5e4",B=a.isCompleted&&y.isUnlocked?"#334155":T?"#475569":"#94a3b8";return`
        <path d="${$}" fill="none" stroke="#1e293b" stroke-width="52" stroke-linecap="round" vector-effect="non-scaling-stroke" opacity="0.28" />
        <path d="${$}" fill="none" stroke="${L}" stroke-width="44" stroke-linecap="round" vector-effect="non-scaling-stroke" />
        <path d="${$}" fill="none" stroke="${B}" stroke-width="32" stroke-linecap="round" vector-effect="non-scaling-stroke" />
        <path d="${$}" fill="none" stroke="${T?"#fde047":"#cbd5e1"}" stroke-width="3.5" stroke-dasharray="11 11" stroke-linecap="round" vector-effect="non-scaling-stroke" />
      `}).join(""),E=u[0],M=u[u.length-1],z=E?`M ${Math.round(680*.5)} 0 C ${Math.round(680*.5)} 36, ${E.xSvg} 36, ${E.xSvg} ${E.ySvg}`:"",h=M?`M ${M.xSvg} ${M.ySvg} C ${M.xSvg} ${d-34}, ${Math.round(680*.5)} ${d-34}, ${Math.round(680*.5)} ${d}`:"",c=u.map(a=>{const p=a.isCompleted,y=a.isUnlocked,k=p?"#fde68a":y?"#fef3c7":"#cbd5e1";return`
        <line x1="${a.xSvg}" y1="${a.ySvg}" x2="${a.drivewayX}" y2="${a.ySvg}" stroke="#1e293b" stroke-width="22" stroke-linecap="round" vector-effect="non-scaling-stroke" opacity="0.22" />
        <line x1="${a.xSvg}" y1="${a.ySvg}" x2="${a.drivewayX}" y2="${a.ySvg}" stroke="${k}" stroke-width="16" stroke-linecap="round" vector-effect="non-scaling-stroke" />
        <circle cx="${a.xSvg}" cy="${a.ySvg}" r="18" fill="${k}" stroke="#292524" stroke-width="2.5" />
      `}).join(""),S=u.map(a=>{const p=(a.ySvg/d*100).toFixed(3),y=["candy-road-pin",`tier-${a.tier}`,a.isUnlocked?"unlocked":"locked"].join(" "),k=a.tier==="active"?"▶":a.isCompleted?`${a.relIdx+1}`:"🔒",$=a.stars>0?"★".repeat(a.stars):a.tier==="active"?`#${a.lvl.code}`:`${a.relIdx+1}`,T="★".repeat(a.stars)+"☆".repeat(Math.max(0,3-a.stars));return`
        ${a.isUnlocked?`
          <button
            type="button"
            class="${y}"
            style="left: ${a.xPct}%; top: ${p}%;"
            data-start-campaign="${a.lvl.id}"
            title="#${i(a.lvl.code)} ${i(a.lvl.cityName)}"
          >
            <span class="pin-main">${k}</span>
            <span class="pin-sub">${$}</span>
          </button>
        `:`
          <div
            class="${y}"
            style="left: ${a.xPct}%; top: ${p}%;"
            aria-label="Kilitli Parsel #${i(a.lvl.code)}"
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
            ${Kt(a.tier,t,e,"street-node-bldg-svg",a.isLandmark)}
          </div>
          <div class="street-node-body">
            <div class="towers-city-top">
              <span class="towers-city-code">#${i(a.lvl.code)} • ${a.lvl.size}×${a.lvl.size} ${a.diffBadge}</span>
              ${a.mechPill}
            </div>
            <h4 class="towers-city-name">${i(a.lvl.cityName)}</h4>
            <div class="candy-tier-chip tier-${a.tier}">${a.tierTitle}</div>
            <div class="towers-city-meta">
              <span class="towers-city-stars ${a.stars>0?"earned":""}">${T}</span>
              <span class="towers-city-time">${a.bestSec?a.stars<3?`⏱️ ${s(a.bestSec)} • 🥇 ≤ ${s(a.lvl.goldSec)}`:`🥇 ${s(a.bestSec)}`:`🥇 ≤ ${s(a.lvl.goldSec)}`}</span>
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
  `}function ot(n,t=44){const e={char_apprentice:"./towers/arch_agaoglu.png",char_planner:"./towers/arch_kemaleddin.png",char_skyline:"./towers/arch_gaudi.png",char_neon:"./towers/arch_zaha.png",char_quantum:"./towers/arch_cansever.png",char_emperor:"./towers/arch_sinan.png"};return`
    <img
      src="${e[n]||e.char_apprentice}"
      alt=""
      width="${t}"
      height="${t}"
      class="architect-avatar-svg architect-portrait-img"
      loading="eager"
      decoding="async"
      draggable="false"
    />
  `}function K(n){return n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function _t(n){const t=Math.max(0,Math.floor(n)),e=Math.floor(t/60),s=t%60;return`${String(e).padStart(2,"0")}:${String(s).padStart(2,"0")}`}const ut=[[1,3,2],[2,1,3],[3,2,1]],nt=[[1,0,0],[2,1,0],[3,0,1]];function Rt(n){const{step:t,miniBoard:e,selectedMiniCell:s,palId:i}=n,l=lt(i.facade,i.roof),w=e.every((o,d)=>o.every((u,v)=>u===ut[d][v])),f=[3,1,2],m=[2,2,1];return`
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
                  ${[0,1,2].map(d=>{var h;const u=((h=e[o])==null?void 0:h[d])||0,v=nt[o][d]>0,E=s.r===o&&s.c===d,M=u>0&&u===ut[o][d],z=u>0&&u!==ut[o][d];return`
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
              <div class="towers-tut-status ${w?"ok":""}">
                ${w?"✅ Harika! Tüm 3×3 blok çözüldü, artık hazırsın!":`Seçili Kare: S${s.r+1}, K${s.c+1}`}
              </div>
            </div>
          </div>

          <div class="towers-modal-footer">
            ${t<3&&!w?'<button id="btn-towers-tutorial-next" class="towers-primary-cta">Sonraki Adım ➡️</button>':""}
            <button id="btn-towers-tutorial-practice" class="towers-primary-cta">
              🧱 ${w?"İlk Şehir #1-1 Başlat!":"Hemen #1-1 İle Başla"}
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
  `}function Wt(n){const t=G.filter(s=>s.slot==="facade"),e=G.filter(s=>s.slot==="roof");return`
    <div class="towers-modal-backdrop" id="towers-workshop-modal">
      <div class="towers-modal-card towers-workshop-card wide">
        <div class="towers-modal-head workshop-head">
          <div>
            <h3>🏛️ Mimarlık Bürosu &amp; Cephe Tasarımı</h3>
            <p>Şantiye mimarını seç, binalarının tuğla rengini ve çatı silüetini değiştir.</p>
          </div>
          <div class="towers-modal-balance">
            <span class="balance-pill">💠 <strong>${n.blueprintGems}</strong></span>
            <button id="btn-towers-close-modal" class="towers-close-btn">✕</button>
          </div>
        </div>

        <div class="towers-modal-body">
          <h4 class="towers-section-sub">🏛️ Ünlü Mimarlar &amp; Müteahhitler (Efsaneviye Uzanan Kadro)</h4>
          <div class="towers-workshop-grid">
            ${rt.map(s=>{const i=n.unlockedCharacterIds.includes(s.id),l=n.equippedCharacterId===s.id,w=n.blueprintGems>=s.costGems;return`
                <div class="towers-shop-item rarity-${s.rarity} ${l?"equipped":""}">
                  <div class="towers-shop-head-row">
                    <div class="towers-shop-avatar" style="border-color:${s.accentColor}">
                      ${ot(s.id,62)}
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
                    ${l?'<button class="towers-shop-btn equipped" disabled>✅ Aktif Mimar</button>':i?`<button class="towers-shop-btn equip" data-equip-char="${s.id}">👷 Göreve Getir</button>`:`<button class="towers-shop-btn buy" data-buy-char="${s.id}" ${w?"":"disabled"}>🔓 Aç (💠 ${s.costGems})</button>`}
                  </div>
                </div>
              `}).join("")}
          </div>

          <h4 class="towers-section-sub">🧱 Bina Cephe Stilleri (Tahtada Renk &amp; Doku Değiştirir)</h4>
          <div class="towers-workshop-grid">
            ${t.map(s=>{const i=n.unlockedCosmeticIds.includes(s.id),l=n.equippedFacadeId===s.id,w=n.blueprintGems>=s.costGems,f=lt(s.id,n.equippedRoofId);return`
                  <div class="towers-shop-item ${l?"equipped":""}">
                    <div class="towers-shop-head-row">
                      <div class="towers-shop-swatch brick-preview">
                        ${bt(4,5,f,n.equippedRoofId)}
                      </div>
                      <div class="towers-shop-info">
                        <strong>${K(s.name)}</strong>
                        <span class="role">🧱 Tuğla &amp; Taş Kaplama</span>
                      </div>
                    </div>
                    <p class="towers-shop-desc">${K(s.description)}</p>
                    <div class="towers-shop-action">
                      ${l?'<button class="towers-shop-btn equipped" disabled>✅ Kullanımda</button>':i?`<button class="towers-shop-btn equip" data-equip-cosmetic="${s.id}">🎨 Cepheye Uygula</button>`:`<button class="towers-shop-btn buy" data-buy-cosmetic="${s.id}" ${w?"":"disabled"}>🔓 Aç (💠 ${s.costGems})</button>`}
                    </div>
                  </div>
                `}).join("")}
          </div>

          <h4 class="towers-section-sub">🏰 Çatı Tasarımları &amp; Şehir Tepeleri</h4>
          <div class="towers-workshop-grid">
            ${e.map(s=>{const i=n.unlockedCosmeticIds.includes(s.id),l=n.equippedRoofId===s.id,w=n.blueprintGems>=s.costGems;return`
                  <div class="towers-shop-item ${l?"equipped":""}">
                    <div class="towers-shop-head-row">
                      <div class="towers-shop-swatch brick-preview roof-preview" style="border-color:${s.primaryColor}">
                        ${Ht(s.id,46)}
                      </div>
                      <div class="towers-shop-info">
                        <strong>${K(s.name)}</strong>
                        <span class="role">🏠 Çatı Silüeti</span>
                      </div>
                    </div>
                    <p class="towers-shop-desc">${K(s.description)}</p>
                    <div class="towers-shop-action">
                      ${l?'<button class="towers-shop-btn equipped" disabled>✅ Kullanımda</button>':i?`<button class="towers-shop-btn equip" data-equip-cosmetic="${s.id}">🏠 Çatıya Tak</button>`:`<button class="towers-shop-btn buy" data-buy-cosmetic="${s.id}" ${w?"":"disabled"}>🔓 Aç (💠 ${s.costGems})</button>`}
                    </div>
                  </div>
                `}).join("")}
          </div>
        </div>
      </div>
    </div>
  `}function Dt(n){const t=ft(n.architectXp),e=Object.values(n.bestTimesSec),s=e.length>0?Math.min(...e):null;return`
    <div class="towers-modal-backdrop" id="towers-profile-modal">
      <div class="towers-modal-card wide">
        <div class="towers-modal-head">
          <h3>🏆 Towers Başarımlar &amp; İstatistikler (LVL ${t.level} • ${K(t.title)})</h3>
          <button id="btn-towers-close-modal" class="towers-close-btn">✕</button>
        </div>
        <div class="towers-modal-body">
          <div class="towers-stats-summary-grid">
            <div class="towers-stat-box"><span>Çözülen Blok</span><strong>${n.totalSolved}</strong></div>
            <div class="towers-stat-box"><span>Toplam Puan</span><strong>${n.totalPoints}</strong></div>
            <div class="towers-stat-box"><span>En Hızlı Blok</span><strong>${s!==null?`${s} sn`:"—"}</strong></div>
            <div class="towers-stat-box"><span>İmar / Sis / Baret</span><strong>${(n.zoningSolvedCount||0)+(n.fogSolvedCount||0)+(n.survivalClearsCount||0)}</strong></div>
          </div>

          <h4 class="towers-section-sub">🎖️ Towers Başarımları (${n.unlockedAchievements.length} / ${vt.length})</h4>
          <div class="towers-ach-grid">
            ${vt.map(i=>`
                <div class="towers-ach-card ${n.unlockedAchievements.includes(i.id)?"unlocked":"locked"}">
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
  `}function Ut(n){return`
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
            ${n?`
              <button id="btn-towers-instant-solve" class="towers-primary-cta">
                ⚡ Aktif Sokağı Anında Çöz (Beta Test)
              </button>
            `:""}
          </div>
        </div>
      </div>
    </div>
  `}function Nt(n){const{elapsedSeconds:t,hintsUsed:e,summary:s,challengeKind:i}=n;return`
    <div class="towers-modal-backdrop" id="towers-victory-modal">
      <div class="towers-modal-card victory">
        <div class="towers-victory-stars">${"★".repeat(s.starsEarned)+"☆".repeat(Math.max(0,3-s.starsEarned))}</div>
        <h2>🧱 İnşaat Tamamlandı!</h2>
        <p>
          Süre: <strong>${_t(t)}</strong> • Kullanılan İpucu: <strong>${e}</strong>
        </p>

        <div class="towers-victory-rewards">
          <div class="reward-pill">✨ +${s.xpGain} Mimar XP</div>
          <div class="reward-pill">💠 +${s.blueprintGain} Proje Kristali</div>
          ${i==="weekly_cup"&&s.cupScore?`<div class="reward-pill">🏆 Kupa Puanı: ${s.cupScore}</div>`:""}
        </div>

        ${s.leveledUp?'<div class="towers-levelup-banner">🎉 MİMAR SEVİYESİ YÜKSELDİ!</div>':""}
        ${s.newlyUnlockedAchievements.length>0?`<div class="towers-ach-unlock-strip">🏅 Yeni Başarım: ${s.newlyUnlockedAchievements.map(w=>`${w.icon} ${K(w.title)}`).join(" • ")}</div>`:""}

        <div class="towers-victory-actions">
          <button id="btn-towers-win-next" class="towers-primary-cta">➡️ Devam Et / Sıradaki Sokak</button>
          <button id="btn-towers-win-map" class="towers-secondary-cta">🏙️ Haritaya Dön</button>
        </div>
      </div>
    </div>
  `}function Ot(n){return`
    <div class="towers-modal-backdrop" id="towers-gameover-modal">
      <div class="towers-modal-card victory">
        <div class="towers-victory-stars">🪖✖️</div>
        <h2>🚧 Şantiye Durduruldu!</h2>
        <p>${K(n)}</p>
        <div class="towers-victory-actions">
          <button id="btn-towers-retry-board" class="towers-primary-cta">🔄 Tekrar Dene</button>
          <button id="btn-towers-win-map" class="towers-secondary-cta">🏙️ Şehir Menüsüne Dön</button>
        </div>
      </div>
    </div>
  `}function P(n){return n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function at(n){const t=Math.max(0,Math.floor(n)),e=Math.floor(t/60),s=t%60;return`${String(e).padStart(2,"0")}:${String(s).padStart(2,"0")}`}function O(n){return n.map(t=>[...t])}function pt(n){return n.map(t=>t.map(e=>[...e]))}class Vt{constructor(t){b(this,"host");b(this,"stats");b(this,"activeTab","campaign");b(this,"selectedEpisode",1);b(this,"activeModal",null);b(this,"tutorialStep",1);b(this,"tutorialMiniBoard",nt.map(t=>[...t]));b(this,"tutorialSelectedCell",{r:0,c:1});b(this,"customSize",4);b(this,"customDifficulty","easy");b(this,"customSeedInput","");b(this,"inBoardView",!1);b(this,"isPaused",!1);b(this,"activePuzzle",null);b(this,"activeMode","campaign");b(this,"activeChallengeKind","standard");b(this,"activeCupStageIdx",null);b(this,"activeCampaignLevel",null);b(this,"board",[]);b(this,"notes",[]);b(this,"history",[]);b(this,"redoStack",[]);b(this,"selectedCell",{r:0,c:0});b(this,"noteMode",!1);b(this,"activeHint",null);b(this,"activeSightRay",null);b(this,"hintsUsedThisGame",0);b(this,"elapsedSeconds",0);b(this,"timerHandle",null);b(this,"gameWon",!1);b(this,"gameOverReason","");b(this,"endlessWave",1);b(this,"blitzRemainingSeconds",120);b(this,"blitzScore",0);b(this,"blitzSolvedCount",0);b(this,"survivalLives",3);b(this,"survivalStreak",0);b(this,"lastWinSummary",null);b(this,"keydownHandler",null);b(this,"resizeHandler",null);b(this,"lastDesktopMode",typeof window<"u"?window.innerWidth>=900:!0);b(this,"mountEl",null);this.host=t,this.stats=dt()}reloadStats(){this.stats=dt()}getStats(){return this.stats}pauseIfPlaying(){this.inBoardView&&!this.gameWon&&!this.isPaused&&(this.isPaused=!0,this.render())}syncStatsFromStorage(){this.stats=dt()}handleBackNavigation(){return this.activeModal!==null?(this.activeModal=null,this.render(),!0):this.inBoardView?this.isPaused?(this.isPaused=!1,this.render(),!0):(this.stopTimer(),this.inBoardView=!1,this.render(),!0):!1}destroy(){this.stopTimer(),this.keydownHandler&&(window.removeEventListener("keydown",this.keydownHandler),this.keydownHandler=null),this.resizeHandler&&(window.removeEventListener("resize",this.resizeHandler),this.resizeHandler=null)}stopTimer(){this.timerHandle!==null&&(window.clearInterval(this.timerHandle),this.timerHandle=null)}startTimer(){this.stopTimer(),this.timerHandle=window.setInterval(()=>{if(!this.inBoardView||this.gameWon||this.isPaused||this.activeModal!==null)return;if(this.elapsedSeconds+=1,this.activeMode==="blitz"&&(this.blitzRemainingSeconds=Math.max(0,this.blitzRemainingSeconds-1),this.blitzRemainingSeconds<=0)){this.stopTimer(),this.inBoardView=!1,this.render();return}const t=document.getElementById("towers-hud-timer");t&&(t.textContent=this.activeMode==="blitz"?`⏱️ ${at(this.blitzRemainingSeconds)}`:`⏱️ ${at(this.elapsedSeconds)}`)},1e3)}mount(t){this.mountEl=t,this.reloadStats(),this.attachKeyboardListener(),this.attachResizeListener(),this.renderInto(t)}render(){const t=this.mountEl||document.getElementById("towers-mount-root")||document.getElementById("app");t&&this.renderInto(t)}attachResizeListener(){this.resizeHandler&&window.removeEventListener("resize",this.resizeHandler),this.resizeHandler=()=>{const t=window.innerWidth>=900;t!==this.lastDesktopMode&&(this.lastDesktopMode=t,this.render())},window.addEventListener("resize",this.resizeHandler)}attachKeyboardListener(){this.keydownHandler&&window.removeEventListener("keydown",this.keydownHandler),this.keydownHandler=t=>{if(!this.inBoardView||!this.activePuzzle||this.activeModal!==null||this.isPaused||document.activeElement&&["INPUT","TEXTAREA"].includes(document.activeElement.tagName))return;const e=this.activePuzzle.size;if(t.key==="ArrowUp")t.preventDefault(),this.selectedCell.r=(this.selectedCell.r-1+e)%e,this.render();else if(t.key==="ArrowDown")t.preventDefault(),this.selectedCell.r=(this.selectedCell.r+1)%e,this.render();else if(t.key==="ArrowLeft")t.preventDefault(),this.selectedCell.c=(this.selectedCell.c-1+e)%e,this.render();else if(t.key==="ArrowRight")t.preventDefault(),this.selectedCell.c=(this.selectedCell.c+1)%e,this.render();else if(t.key.toLowerCase()==="n")t.preventDefault(),this.noteMode=!this.noteMode,this.render();else if(t.key.toLowerCase()==="v")t.preventDefault(),this.toggleSightRayFromSelection();else if(t.key==="Backspace"||t.key==="Delete"||t.key==="0")t.preventDefault(),this.handleEraseInput();else if((t.ctrlKey||t.metaKey)&&t.key.toLowerCase()==="z")t.preventDefault(),this.handleUndo();else if((t.ctrlKey||t.metaKey)&&t.key.toLowerCase()==="y")t.preventDefault(),this.handleRedo();else if(/^[1-8]$/.test(t.key)){const s=Number(t.key);s>=1&&s<=e&&(t.preventDefault(),this.handleNumberInput(s))}},window.addEventListener("keydown",this.keydownHandler)}startPuzzleSession(t,e,s=null,i){var w,f;this.activePuzzle=t,this.activeMode=e,this.activeChallengeKind=t.challengeKind||"standard",this.activeCupStageIdx=(i==null?void 0:i.cupStageIdx)??null,this.activeCampaignLevel=s,this.board=O(t.givens),this.notes=Array.from({length:t.size},()=>Array.from({length:t.size},()=>[])),this.history=[],this.redoStack=[],this.selectedCell={r:0,c:0};let l=!1;for(let m=0;m<t.size&&!l;m++)for(let o=0;o<t.size;o++)if(t.givens[m][o]===0){this.selectedCell={r:m,c:o},l=!0;break}this.activeHint=null,this.activeSightRay=null,this.hintsUsedThisGame=0,this.elapsedSeconds=0,this.gameWon=!1,this.isPaused=!1,this.gameOverReason="",this.inBoardView=!0,e==="blitz"&&(i==null?void 0:i.resetSeries)!==!1?(this.blitzRemainingSeconds=120,this.blitzScore=0,this.blitzSolvedCount=0):this.activeChallengeKind==="survival"&&(i==null?void 0:i.resetSeries)!==!1&&(this.survivalLives=3,this.survivalStreak=0),this.startTimer(),(f=(w=this.host).playSound)==null||f.call(w,"click"),this.render()}pushHistory(){this.history.push({board:O(this.board),notes:pt(this.notes)}),this.history.length>100&&this.history.shift(),this.redoStack=[]}handleNumberInput(t){var f,m,o,d,u,v,E,M,z,h,c;if(!this.activePuzzle||this.gameWon||this.isPaused)return;const{r:e,c:s}=this.selectedCell;if(((f=this.activePuzzle.givens[e])==null?void 0:f[s])>0){(o=(m=this.host).playSound)==null||o.call(m,"error");return}if(this.pushHistory(),this.activeHint=null,this.noteMode){this.board[e][s]!==0&&(this.board[e][s]=0);const S=this.notes[e][s],a=S.indexOf(t);a>=0?S.splice(a,1):(S.push(t),S.sort((p,y)=>p-y)),(u=(d=this.host).playSound)==null||u.call(d,"click"),this.render();return}if(this.board[e][s]=this.board[e][s]===t?0:t,this.notes[e][s]=[],this.board[e][s]===0){(E=(v=this.host).playSound)==null||E.call(v,"erase"),this.render();return}const i=this.board[e][s],l=ct(this.activePuzzle,this.board);if(l.duplicateKeys.has(`${e},${s}`)||l.zoningViolationKeys.has(`${e},${s}`)||this.activeChallengeKind==="survival"&&i!==this.activePuzzle.solution[e][s]){if((z=(M=this.host).playSound)==null||z.call(M,"error"),this.activeChallengeKind==="survival"&&(this.survivalLives=Math.max(0,this.survivalLives-1),this.survivalLives<=0)){this.stopTimer(),this.gameOverReason="3 inşaat baretinin tamamı tükendi! Kat çakışması veya hatalı kat yerleşimi şantiyeyi durdurdu.",this.activeModal="gameover",this.render();return}}else(c=(h=this.host).playSound)==null||c.call(h,"place",{floors:i,maxFloors:this.activePuzzle.size});this.checkWinAfterMove(),this.render()}handleEraseInput(){var s,i,l;if(!this.activePuzzle||this.gameWon||this.isPaused)return;const{r:t,c:e}=this.selectedCell;((s=this.activePuzzle.givens[t])==null?void 0:s[e])>0||this.board[t][e]===0&&this.notes[t][e].length===0||(this.pushHistory(),this.board[t][e]=0,this.notes[t][e]=[],this.activeHint=null,(l=(i=this.host).playSound)==null||l.call(i,"erase"),this.render())}handleUndo(){var e,s;if(this.history.length===0||this.gameWon||this.isPaused)return;this.redoStack.push({board:O(this.board),notes:pt(this.notes)});const t=this.history.pop();this.board=t.board,this.notes=t.notes,this.activeHint=null,(s=(e=this.host).playSound)==null||s.call(e,"click"),this.render()}handleRedo(){var e,s;if(this.redoStack.length===0||this.gameWon||this.isPaused)return;this.history.push({board:O(this.board),notes:pt(this.notes)});const t=this.redoStack.pop();this.board=t.board,this.notes=t.notes,this.activeHint=null,(s=(e=this.host).playSound)==null||s.call(e,"click"),this.render()}handleSmartHint(){var e,s;if(!this.activePuzzle||this.gameWon||this.isPaused)return;const t=Ct(this.activePuzzle,this.board);if(t){if(this.activeHint=t,this.selectedCell={r:t.r,c:t.c},this.hintsUsedThisGame+=1,t.focusClueKey){const[i,l]=t.focusClueKey.split(":");this.activeSightRay={side:i,index:Number(l)||0}}(s=(e=this.host).playSound)==null||s.call(e,"hint"),this.render()}}applyActiveHintMove(){var i,l,w;if(!this.activeHint||!this.activePuzzle||this.gameWon)return;const{r:t,c:e,value:s}=this.activeHint;((i=this.activePuzzle.givens[t])==null?void 0:i[e])>0||(this.pushHistory(),this.board[t][e]=s,this.notes[t][e]=[],this.activeHint=null,(w=(l=this.host).playSound)==null||w.call(l,"place",{floors:s,maxFloors:this.activePuzzle.size}),this.checkWinAfterMove(),this.render())}toggleSightRayFromSelection(){var t,e;this.activePuzzle&&(this.activeSightRay?this.activeSightRay.side==="left"||this.activeSightRay.side==="right"?this.activeSightRay={side:"top",index:this.selectedCell.c}:this.activeSightRay=null:this.activeSightRay={side:"left",index:this.selectedCell.r},(e=(t=this.host).playSound)==null||e.call(t,"click"),this.render())}checkWinAfterMove(){var l,w,f,m,o,d,u;if(!this.activePuzzle||this.gameWon||!ct(this.activePuzzle,this.board).isSolved)return;const e=new Date().toISOString().slice(0,10);if(this.activeMode==="blitz"){this.blitzSolvedCount+=1,this.blitzScore+=180+Math.max(0,25-this.hintsUsedThisGame*20),this.blitzScore>this.stats.bestBlitzScore&&(this.stats.bestBlitzScore=this.blitzScore);const v=`TWR-BLITZ-${Date.now()}-${this.blitzSolvedCount}`,E=_(4,"easy",v,{title:`⚡ Blitz Kule #${this.blitzSolvedCount+1}`});(w=(l=this.host).playSound)==null||w.call(l,"win");const M=Mt(this.stats,{elapsedSec:this.elapsedSeconds,hintsUsed:this.hintsUsedThisGame,size:4,isDaily:!1});M.length>0&&(this.stats.blueprintGems+=M.length),st(this.stats),D("towers_solve"),this.hintsUsedThisGame===0&&D("no_hint_solve"),this.startPuzzleSession(E,"blitz",null,{resetSeries:!1});return}if(this.activeMode==="endless"){this.endlessWave>this.stats.bestEndlessWave&&(this.stats.bestEndlessWave=this.endlessWave),this.endlessWave+=1;const v=mt(this.stats,{puzzleId:this.activePuzzle.id,size:this.activePuzzle.size,difficulty:this.activePuzzle.difficulty,elapsedSec:this.elapsedSeconds,hintsUsed:this.hintsUsedThisGame});this.stats=v.nextStats,D("towers_solve"),this.hintsUsedThisGame===0&&D("no_hint_solve"),this.gameWon=!0,this.stopTimer(),this.lastWinSummary={starsEarned:v.starsEarned,xpGain:v.xpEarned,blueprintGain:v.gemsEarned,leveledUp:v.leveledUp,newlyUnlockedAchievements:v.newlyUnlockedAchievements},this.activeModal="victory",(m=(f=this.host).playSound)==null||m.call(f,"win");return}this.activeChallengeKind==="zoning"?this.stats.zoningSolvedCount=(this.stats.zoningSolvedCount||0)+1:this.activeChallengeKind==="fog"?this.stats.fogSolvedCount=(this.stats.fogSolvedCount||0)+1:this.activeChallengeKind==="survival"&&(this.survivalStreak+=1,this.stats.survivalClearsCount=(this.stats.survivalClearsCount||0)+1);let s;if(this.activeChallengeKind==="weekly_cup"&&this.activeCupStageIdx!==null){const v=wt(),E=Et(this.activePuzzle.size,this.elapsedSeconds,this.hintsUsedThisGame);s=E;const M=this.stats.weeklyCupKey,z=M===v&&Array.isArray(this.stats.weeklyCupScores)?[...this.stats.weeklyCupScores]:[0,0,0],h=M===v&&Array.isArray(this.stats.weeklyCupRewarded)?[...this.stats.weeklyCupRewarded]:[!1,!1,!1];z[this.activeCupStageIdx]=Math.max(z[this.activeCupStageIdx]||0,E),h[this.activeCupStageIdx]=!0,this.stats.weeklyCupKey=v,this.stats.weeklyCupScores=z,this.stats.weeklyCupRewarded=h}this.gameWon=!0,this.stopTimer();const i=mt(this.stats,{puzzleId:((o=this.activeCampaignLevel)==null?void 0:o.id)||this.activePuzzle.id,size:this.activePuzzle.size,difficulty:this.activePuzzle.difficulty,elapsedSec:this.elapsedSeconds,hintsUsed:this.hintsUsedThisGame,isDaily:this.activeMode==="daily",dailyDateKey:this.activeMode==="daily"?e:void 0,campaignLevel:this.activeCampaignLevel?{goldSec:this.activeCampaignLevel.goldSec,silverSec:this.activeCampaignLevel.silverSec}:null});this.stats=i.nextStats,D("towers_solve"),this.hintsUsedThisGame===0&&D("no_hint_solve"),this.activeChallengeKind==="weekly_cup"&&D("duel_or_cup"),this.lastWinSummary={starsEarned:i.starsEarned,xpGain:i.xpEarned,blueprintGain:i.gemsEarned,leveledUp:i.leveledUp,newlyUnlockedAchievements:i.newlyUnlockedAchievements,cupScore:s},this.activeModal="victory",(u=(d=this.host).playSound)==null||u.call(d,"win")}getUnlockedCampaignIndex(){let t=-1;for(let e=0;e<H.length;e++)this.stats.solvedIds.includes(H[e].id)&&(t=e);return Math.min(H.length-1,t+1)}renderInto(t){var l,w,f,m;const e=typeof window<"u"?window.innerWidth>=900:!0;this.lastDesktopMode=e;const s=((w=(l=this.host).renderTitlebar)==null?void 0:w.call(l))||"",i=this.inBoardView&&this.activePuzzle?this.renderBoardScreenHTML():this.renderHubScreenHTML(e);t.innerHTML=`
      ${s}
      <div class="screen-body ${this.inBoardView?"towers-board-body":"menu-mode towers-menu-mode"}" id="towers-screen">
        ${i}
        ${this.renderActiveModal()}
      </div>
    `,(m=(f=this.host).bindTitlebarEvents)==null||m.call(f),this.bindEvents(t)}renderHubScreenHTML(t){var M,z,h,c,S,a,p,y;const e=this.host.getUsername(),s=this.host.getPilotTag(),i=this.host.isBetaChannel(),l=((z=(M=this.host).getCloudSynced)==null?void 0:z.call(M))??!1,w=((c=(h=this.host).canQuit)==null?void 0:c.call(h))??!1,f=ft(this.stats.architectXp),m=rt.find(k=>k.id===this.stats.equippedCharacterId)||rt[0],o=Tt(this.stats),d=(this.stats.solvedIds||[]).filter(k=>H.some($=>$.id===k)).length,u=((a=(S=this.host).getSocialAttentionCount)==null?void 0:a.call(S))??0,v=((y=(p=this.host).getAudioSettings)==null?void 0:y.call(p))??{soundEnabled:!0,musicEnabled:!0},E=[{id:"campaign",icon:"🏙️",label:"Şehir Haritası",badge:`${d}/60`},{id:"challenges",icon:"🚧",label:"Challenge & Kupa",badge:"3+1"},{id:"daily",icon:"🧱",label:"Günlük Bina",badge:this.stats.dailyStreak>0?`🔥${this.stats.dailyStreak}`:""},{id:"blitz",icon:"⚡",label:"Kule Blitz",badge:""},{id:"endless",icon:"🏗️",label:"Sonsuz İnşaat",badge:""},{id:"custom",icon:"🎲",label:"Serbest Mimari",badge:""}];return`
      <header class="main-menu-topbar towers-menu-topbar">
        <div class="topbar-left">
          <button type="button" class="arcade-return-chip" id="btn-towers-back-hub" title="1000in1 Kaset Odasına Dön">🕹️ Kaset</button>
          <div class="topbar-desktop-telemetry">
            <span class="topbar-sector-pill towers-sector-pill">🧱 TOWERS • ${d}/${H.length} Mahalle • ⭐ ${o}/${H.length*3}</span>
            ${i?'<button type="button" class="beta-badge beta-lab-trigger" id="btn-towers-beta-lab" title="Towers Beta Test Laboratuvarı">🧪 BETA LAB</button>':""}
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
          ${w?'<button type="button" class="steam-btn quit-btn" id="btn-towers-quit"><div>ÇIKIŞ</div></button>':""}
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
                  <strong class="discord-user-nick">${P(e)}<small>#${P(s)}</small></strong>
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
    `}renderTabContent(){if(this.activeTab==="campaign"){const t=this.getUnlockedCampaignIndex(),e=H[t]||H[0],s=H.filter(o=>o.episode===this.selectedEpisode),i={1:"1. Evre: Kırmızı Tuğla Mahallesi (4×4 – 6×6)",2:"2. Evre: İmarlı Tarihi Semt (4×4 – 7×7)",3:"3. Evre: Eski Saat Meydanı (5×5 – 7×7)",4:"4. Evre: Sisli Konaklar (5×5 – 8×8)",5:"5. Evre: Büyük Metropol (6×6 – 8×8)"},l=lt(this.stats.equippedFacadeId,this.stats.equippedRoofId),w=It(s,this.stats,l,this.stats.equippedRoofId,t,o=>H.findIndex(d=>d.id===o)),f=s.map((o,d)=>{const u=H.findIndex(p=>p.id===o.id),v=this.stats.solvedIds.includes(o.id),E=u<=t||v,M=this.stats.levelStars[o.id]||0,z=kt(v,E,M),h=this.stats.bestTimesSec[o.id],c=o.difficulty==="easy"?"Kolay":o.difficulty==="medium"?"Orta":"Zor",S=z==="gold"?"Lüks Altın Konak":z==="silver"?"Klasik Tuğla Apartman":z==="bronze"?"Mahalle Gecekondusu":z==="active"?"Aktif İnşaat Parseli":"Kilitli Boş Arsa",a=o.challengeKind==="zoning"?'<span class="street-mech-tag zoning">🧱 İmar Kısıtı</span>':o.challengeKind==="fog"?'<span class="street-mech-tag fog">🌫️ Sisli Sokak</span>':"";return{lvl:o,relIdx:d,isCompleted:v,isUnlocked:E,stars:M,tier:z,tierTitle:S,mechPill:a,diffBadge:c,bestSec:h,isLandmark:d===s.length-1}}),m=qt(f,l,this.stats.equippedRoofId,at,P);return`
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
                ${P(i[o])}
              </button>
            `).join("")}
          </div>

          <section class="towers-street-panorama-card" aria-label="Mahalle Caddesi Silüeti">
            <div class="street-panorama-head">
              <strong>🛣️ ${P(i[this.selectedEpisode]||"")}</strong>
              <div class="street-medal-legend">
                <span>🌱 Arsa</span>
                <span>🥉 Gecekondu (★)</span>
                <span>🥈 Apartman (★★)</span>
                <span>🥇 Lüks Konak (★★★)</span>
              </div>
            </div>
            <div class="street-panorama-frame">
              ${w}
            </div>
          </section>

          <div class="towers-street-route" style="background-image: linear-gradient(180deg, rgba(220, 252, 231, 0.16), rgba(187, 247, 208, 0.24)), url('./towers/candy_park_bg.jpg');">
            ${m}
          </div>
        </div>
      `}if(this.activeTab==="challenges"){const t=wt(),e=yt(t),s=this.stats.weeklyCupKey===t&&Array.isArray(this.stats.weeklyCupScores)?this.stats.weeklyCupScores:[0,0,0];return`
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
              <span class="towers-cup-total">Toplam: ${s[0]+s[1]+s[2]} P</span>
            </div>
            <div class="towers-cup-grid">
              ${e.map(i=>{const l=s[i.index]||0;return`
                    <div class="towers-cup-stage ${l>0?"done":""}">
                      <div class="stage-top"><strong>${i.label}</strong><span>${i.size}×${i.size}</span></div>
                      <small>${P(i.subtitle)}</small>
                      <div class="stage-score">${l>0?`Skor: <b>${l} P</b>`:"Henüz Çözülmedi"}</div>
                      <button type="button" class="towers-city-play-btn" data-towers-cup-stage="${i.index}">
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
    `}renderBoardScreenHTML(){var M,z;const t=this.activePuzzle,e=t.size,s=ct(t,this.board),i=G.find(h=>h.id===this.stats.equippedFacadeId)||G[0],l=G.find(h=>h.id===this.stats.equippedRoofId)||G[5],w=lt(i.id,l.id),f=new Int32Array(e+1);for(let h=0;h<e;h++)for(let c=0;c<e;c++){const S=this.board[h][c];S>=1&&S<=e&&f[S]++}const m=new Map;let o="";if(this.activeSightRay){const{side:h,index:c}=this.activeSightRay,S=!!((z=(M=t.hiddenCluesMask)==null?void 0:M[h])!=null&&z[c]),a=S?0:t.clues[h][c],p=[];for(let $=0;$<e;$++){let T=c,L=$;h==="top"?(T=$,L=c):h==="bottom"?(T=e-1-$,L=c):h==="left"?(T=c,L=$):(T=c,L=e-1-$),p.push({r:T,c:L})}const y=xt(p,this.board,a,h,c);y.visibleCells.forEach($=>m.set(`${$.r},${$.c}`,"visible")),y.hiddenCells.forEach($=>m.set(`${$.r},${$.c}`,"blocked")),o=`
        <div class="towers-sight-banner" id="towers-sight-banner">
          <span>👁️ <strong>Görüş Hattı (${h==="top"?`${c+1}. Sütun (Üstten ▾)`:h==="bottom"?`${c+1}. Sütun (Alttan ▴)`:h==="left"?`${c+1}. Satır (Soldan ▸)`:`${c+1}. Satır (Sağdan ◂)`}):</strong> ${S?"Sisli İpucu (?)":`Hedef = <b>${a||"Yok"}</b>`} • <b class="sight-ok">Görüldü: ${y.visibleCells.length}</b> • <b class="sight-hid">Örtüldü: ${y.hiddenCells.length}</b></span>
          <button type="button" id="btn-towers-clear-sight" class="towers-mini-btn">Kapat ✕</button>
        </div>
      `}const d=this.activeMode==="campaign"&&this.activeCampaignLevel?`🏘️ #${this.activeCampaignLevel.code}: ${this.activeCampaignLevel.cityName}`:this.activeMode==="daily"?"🧱 Günlük Bina":this.activeMode==="endless"?`🏗️ Dalga #${this.endlessWave}`:this.activeMode==="blitz"?`⚡ Blitz: ${this.blitzScore} P`:this.activeChallengeKind==="zoning"?"🚧 İmar Kısıtı":this.activeChallengeKind==="fog"?"🌫️ Sisli Sokak":this.activeChallengeKind==="survival"?"🪖 3 Baret Hayatta Kalma":this.activeChallengeKind==="weekly_cup"?`🏆 Kupa Etabı #${(this.activeCupStageIdx??0)+1}`:`🎲 Serbest (${e}×${e})`,u=(h,c)=>{var a,p;if((p=(a=t.hiddenCluesMask)==null?void 0:a[h])!=null&&p[c])return"fogged";const S=`${h}:${c}`;return s.violatedClueKeys.has(S)?"violated":s.satisfiedClueKeys.has(S)?"satisfied":"pending"},v=(h,c,S)=>{var T,L,B,I;const a=!!((L=(T=t.hiddenCluesMask)==null?void 0:T[h])!=null&&L[c]),p=t.clues[h][c],y=u(h,c),k=((B=this.activeSightRay)==null?void 0:B.side)===h&&((I=this.activeSightRay)==null?void 0:I.index)===c,$=a?"🌫️":p>0?String(p):"·";return`
        <button
          type="button"
          class="towers-clue-cell ${h} ${y} ${k?"active-ray":""}"
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
            <span class="towers-hud-sub">${e}×${e} • ${P(i.name)}</span>
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

            ${Array.from({length:e},(h,c)=>{const S=Array.from({length:e},(a,p)=>{var V,j,F,Y,X,Z,Q,r,g;const y=this.board[c][p],k=t.givens[c][p]>0,$=this.selectedCell.r===c&&this.selectedCell.c===p,T=s.duplicateKeys.has(`${c},${p}`),L=s.zoningViolationKeys.has(`${c},${p}`),B=((j=(V=t.maxHeightLimits)==null?void 0:V[c])==null?void 0:j[p])||0,I=((F=this.activeHint)==null?void 0:F.r)===c&&((Y=this.activeHint)==null?void 0:Y.c)===p,U=!!((X=this.activeHint)!=null&&X.focusLine)&&(((Q=(Z=this.activeHint)==null?void 0:Z.focusLine)==null?void 0:Q.kind)==="row"&&this.activeHint.focusLine.index===c||((g=(r=this.activeHint)==null?void 0:r.focusLine)==null?void 0:g.kind)==="col"&&this.activeHint.focusLine.index===p),W=m.get(`${c},${p}`)||"",N=this.notes[c][p];return`
                  <div
                    class="towers-cell ${y>0?"has-tower":"empty"} ${k?"given":""} ${$?"selected":""} ${T||L?"conflict":""} ${I?"hint-target":""} ${U&&!I?"hint-focus-line":""} ${B>0?"zoned":""} ${W?`sight-${W}`:""}"
                    data-towers-cell="${c}-${p}"
                    data-row="${c}"
                    data-col="${p}"
                    data-val="${y}"
                  >
                    ${I&&this.activeHint?`<span class="tower-hint-badge" aria-hidden="true">👇 ${this.activeHint.value}</span>`:""}
                    ${B>0?`<span class="tower-zone-badge" title="İmar Kısıtı: Maksimum ${B} kat">≤${B}</span>`:""}
                    ${y>0?`
                      <div class="tower-pixel-bldg-wrap">
                        ${bt(y,e,w,l.id)}
                        <span class="tower-height-badge ${k?"given-badge":""}">${y}</span>
                      </div>
                    `:N.length>0?`
                      <div class="tower-notes-grid">
                        ${Array.from({length:e},(C,x)=>{const A=x+1;return`<span class="tower-note-item ${N.includes(A)?"on":""}">${N.includes(A)?A:""}</span>`}).join("")}
                      </div>
                    `:'<span class="tower-plot-stakes" aria-hidden="true"><i></i><i></i></span>'}
                    ${W==="visible"?'<span class="tower-sight-tag visible" title="Görüldü">👁️</span>':W==="blocked"?'<span class="tower-sight-tag blocked" title="Önündeki yüksek bina tarafından örtüldü">⬛</span>':""}
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
    `}renderActiveModal(){return this.activeModal?this.activeModal==="tutorial"?Rt({step:this.tutorialStep,miniBoard:this.tutorialMiniBoard,selectedMiniCell:this.tutorialSelectedCell,palId:{facade:this.stats.equippedFacadeId,roof:this.stats.equippedRoofId}}):this.activeModal==="rules"?Gt():this.activeModal==="workshop"?Wt(this.stats):this.activeModal==="profile"?Dt(this.stats):this.activeModal==="beta-lab"?Ut(this.inBoardView):this.activeModal==="gameover"?Ot(this.gameOverReason):this.activeModal==="victory"&&this.lastWinSummary?Nt({elapsedSeconds:this.elapsedSeconds,hintsUsed:this.hintsUsedThisGame,challengeKind:this.activeChallengeKind,summary:this.lastWinSummary}):"":""}bindEvents(t){var s,i,l,w,f,m,o,d,u,v,E,M,z,h,c,S,a,p,y,k,$,T,L,B,I,U,W,N,V,j,F,Y,X,Z,Q;(s=t.querySelector("#btn-towers-back-hub"))==null||s.addEventListener("click",()=>{this.stopTimer(),this.host.onBackToHub()}),(i=t.querySelector("#btn-towers-open-social"))==null||i.addEventListener("click",()=>{var r,g;(g=(r=this.host).onOpenSocialHub)==null||g.call(r)}),(l=t.querySelector("#btn-towers-open-profile"))==null||l.addEventListener("click",()=>{var r,g;(g=(r=this.host).onOpenGlobalProfile)==null||g.call(r)}),(w=t.querySelector("#btn-towers-dock-sfx"))==null||w.addEventListener("click",()=>{var r,g;(g=(r=this.host).onToggleSound)==null||g.call(r),this.render()}),(f=t.querySelector("#btn-towers-dock-music"))==null||f.addEventListener("click",()=>{var r,g;(g=(r=this.host).onToggleMusic)==null||g.call(r),this.render()}),(m=t.querySelector("#btn-towers-quit"))==null||m.addEventListener("click",()=>{var r,g;(g=(r=this.host).onQuitApp)==null||g.call(r)}),(o=t.querySelector("#btn-towers-tutorial"))==null||o.addEventListener("click",()=>{this.tutorialStep=1,this.tutorialMiniBoard=nt.map(r=>[...r]),this.tutorialSelectedCell={r:0,c:1},this.activeModal="tutorial",this.render()}),(d=t.querySelector("#btn-towers-rules"))==null||d.addEventListener("click",()=>{this.activeModal="rules",this.render()}),(u=t.querySelector("#btn-towers-workshop"))==null||u.addEventListener("click",()=>{this.activeModal="workshop",this.render()}),(v=t.querySelector("#btn-towers-profile"))==null||v.addEventListener("click",()=>{this.activeModal="profile",this.render()}),(E=t.querySelector("#btn-towers-settings"))==null||E.addEventListener("click",()=>{this.host.onOpenGlobalSettings()}),(M=t.querySelector("#btn-towers-beta-lab"))==null||M.addEventListener("click",()=>{this.activeModal="beta-lab",this.render()}),(z=t.querySelector("#btn-towers-close-modal"))==null||z.addEventListener("click",()=>{this.activeModal=null,this.render()}),t.querySelectorAll("[data-tut-step]").forEach(r=>{r.addEventListener("click",()=>{this.tutorialStep=Number(r.dataset.tutStep)||1,this.render()})}),t.querySelectorAll("[data-tut-cell]").forEach(r=>{r.addEventListener("click",()=>{var J,tt,et;const[g,C]=(r.dataset.tutCell||"0-0").split("-"),x=Number(g)||0,A=Number(C)||0;((J=nt[x])==null?void 0:J[A])>0||(this.tutorialSelectedCell={r:x,c:A},(et=(tt=this.host).playSound)==null||et.call(tt,"click"),this.render())})}),t.querySelectorAll("[data-tut-num]").forEach(r=>{r.addEventListener("click",()=>{var A,J,tt,et,gt;const g=Number(r.dataset.tutNum)||0,{r:C,c:x}=this.tutorialSelectedCell;((A=nt[C])==null?void 0:A[x])>0||(this.tutorialMiniBoard[C][x]=g,g>0?(tt=(J=this.host).playSound)==null||tt.call(J,"place",{floors:g,maxFloors:3}):(gt=(et=this.host).playSound)==null||gt.call(et,"erase"),this.render())})}),(h=t.querySelector("#btn-towers-tutorial-next"))==null||h.addEventListener("click",()=>{this.tutorialStep=Math.min(3,this.tutorialStep+1),this.render()}),(c=t.querySelector("#btn-towers-tutorial-practice"))==null||c.addEventListener("click",()=>{this.activeModal=null;const r=H[0],g=_(r.size,r.difficulty,r.seed,{id:r.id,title:r.cityName,code:r.code});this.startPuzzleSession(g,"campaign",r)}),t.querySelectorAll("[data-towers-tab]").forEach(r=>{r.addEventListener("click",()=>{var C,x;const g=r.dataset.towersTab;g&&(this.activeTab=g,(x=(C=this.host).playSound)==null||x.call(C,"click"),this.render())})}),t.querySelectorAll("[data-towers-ep]").forEach(r=>{r.addEventListener("click",()=>{this.selectedEpisode=Number(r.dataset.towersEp)||1,this.render()})}),t.querySelectorAll("[data-start-campaign]").forEach(r=>{r.addEventListener("click",()=>{const g=r.dataset.startCampaign,C=H.find(A=>A.id===g);if(!C)return;const x=C.challengeKind==="zoning"||C.challengeKind==="fog"?it(C.challengeKind,C.size,C.difficulty,C.seed,{id:C.id,title:C.cityName,code:C.code}):_(C.size,C.difficulty,C.seed,{id:C.id,title:C.cityName,code:C.code});this.startPuzzleSession(x,"campaign",C)})}),(S=t.querySelector("#btn-towers-start-zoning"))==null||S.addEventListener("click",()=>{const r=it("zoning",5,"medium",`TWR-ZONE-${Date.now()}`);this.startPuzzleSession(r,"challenge")}),(a=t.querySelector("#btn-towers-start-fog"))==null||a.addEventListener("click",()=>{const r=it("fog",5,"medium",`TWR-FOG-${Date.now()}`);this.startPuzzleSession(r,"challenge")}),(p=t.querySelector("#btn-towers-start-survival"))==null||p.addEventListener("click",()=>{const r=it("survival",5,"hard",`TWR-SURV-${Date.now()}`);this.startPuzzleSession(r,"challenge")}),t.querySelectorAll("[data-towers-cup-stage]").forEach(r=>{r.addEventListener("click",()=>{const g=Number(r.dataset.towersCupStage);if(g!==0&&g!==1&&g!==2)return;const x=yt()[g],A=it(x.challengeKind==="zoning"?"zoning":"weekly_cup",x.size,x.difficulty,x.seed,{id:x.seed,title:`🏆 ${x.label}: ${x.subtitle}`});A.challengeKind="weekly_cup",this.startPuzzleSession(A,"challenge",null,{cupStageIdx:g})})}),(y=t.querySelector("#btn-towers-start-daily"))==null||y.addEventListener("click",()=>{const r=new Date().toISOString().slice(0,10),g=_(5,"medium",`TWR-DAILY-${r}`);this.startPuzzleSession(g,"daily")}),(k=t.querySelector("#btn-towers-start-endless"))==null||k.addEventListener("click",()=>{const r=this.endlessWave<=2?4:this.endlessWave<=5?5:6,g=this.endlessWave<=2?"easy":this.endlessWave<=6?"medium":"hard",C=_(r,g,`TWR-ENDLESS-W${this.endlessWave}-${Date.now()}`);this.startPuzzleSession(C,"endless")}),($=t.querySelector("#btn-towers-start-blitz"))==null||$.addEventListener("click",()=>{const r=_(4,"easy",`TWR-BLITZ-${Date.now()}-0`);this.startPuzzleSession(r,"blitz")}),t.querySelectorAll("[data-custom-size]").forEach(r=>{r.addEventListener("click",()=>{this.customSize=Number(r.dataset.customSize)||4,this.render()})}),t.querySelectorAll("[data-custom-diff]").forEach(r=>{r.addEventListener("click",()=>{this.customDifficulty=r.dataset.customDiff||"easy",this.render()})});const e=t.querySelector("#inp-towers-custom-seed");e==null||e.addEventListener("input",()=>{this.customSeedInput=e.value}),(T=t.querySelector("#btn-towers-start-custom"))==null||T.addEventListener("click",()=>{const r=this.customSeedInput.trim()||`TWR-CUSTOM-${this.customSize}-${this.customDifficulty}-${Date.now()}`,g=_(this.customSize,this.customDifficulty,r);this.startPuzzleSession(g,"custom")}),(L=t.querySelector("#btn-towers-leave-board"))==null||L.addEventListener("click",()=>{this.stopTimer(),this.inBoardView=!1,this.isPaused=!1,this.render()}),(B=t.querySelector("#btn-towers-pause"))==null||B.addEventListener("click",()=>{this.isPaused=!this.isPaused,this.render()}),(I=t.querySelector("#btn-towers-resume"))==null||I.addEventListener("click",()=>{this.isPaused=!1,this.render()}),(U=t.querySelector("#btn-towers-sight-toggle"))==null||U.addEventListener("click",()=>{this.toggleSightRayFromSelection()}),t.querySelectorAll("[data-towers-cell]").forEach(r=>{r.addEventListener("click",()=>{this.selectedCell={r:Number(r.dataset.row)||0,c:Number(r.dataset.col)||0},this.render()})}),t.querySelectorAll("[data-towers-clue]").forEach(r=>{r.addEventListener("click",()=>{const g=r.dataset.towersClue||"",[C,x]=g.split("-"),A=Number(x)||0;this.activeSightRay&&this.activeSightRay.side===C&&this.activeSightRay.index===A?this.activeSightRay=null:this.activeSightRay={side:C,index:A},this.render()})}),(W=t.querySelector("#btn-towers-clear-sight"))==null||W.addEventListener("click",()=>{this.activeSightRay=null,this.render()}),t.querySelectorAll("[data-towers-num]").forEach(r=>{r.addEventListener("click",()=>{const g=Number(r.dataset.towersNum)||1;this.handleNumberInput(g)})}),(N=t.querySelector("#btn-towers-notes-toggle"))==null||N.addEventListener("click",()=>{this.noteMode=!this.noteMode,this.render()}),(V=t.querySelector("#btn-towers-erase"))==null||V.addEventListener("click",()=>this.handleEraseInput()),(j=t.querySelector("#btn-towers-undo"))==null||j.addEventListener("click",()=>this.handleUndo()),(F=t.querySelector("#btn-towers-redo"))==null||F.addEventListener("click",()=>this.handleRedo()),(Y=t.querySelector("#btn-towers-hint"))==null||Y.addEventListener("click",()=>this.handleSmartHint()),(X=t.querySelector("#btn-towers-apply-hint"))==null||X.addEventListener("click",()=>this.applyActiveHintMove()),(Z=t.querySelector("#btn-towers-close-hint"))==null||Z.addEventListener("click",()=>{this.activeHint=null,this.activeSightRay=null,this.render()}),(Q=t.querySelector("#btn-towers-reset"))==null||Q.addEventListener("click",()=>{!this.activePuzzle||this.isPaused||(this.pushHistory(),this.board=O(this.activePuzzle.givens),this.notes=Array.from({length:this.activePuzzle.size},()=>Array.from({length:this.activePuzzle.size},()=>[])),this.activeHint=null,this.render())}),this.bindWorkshopAndMetaModals(t)}bindWorkshopAndMetaModals(t){var e,s,i,l,w,f,m;t.querySelectorAll("[data-buy-char]").forEach(o=>{o.addEventListener("click",()=>{const d=o.dataset.buyChar,u=rt.find(v=>v.id===d);!u||this.stats.blueprintGems<u.costGems||(this.stats.blueprintGems-=u.costGems,this.stats.unlockedCharacterIds.includes(d)||this.stats.unlockedCharacterIds.push(d),this.stats.equippedCharacterId=d,st(this.stats),this.render())})}),t.querySelectorAll("[data-equip-char]").forEach(o=>{o.addEventListener("click",()=>{const d=o.dataset.equipChar;this.stats.unlockedCharacterIds.includes(d)&&(this.stats.equippedCharacterId=d,st(this.stats),this.render())})}),t.querySelectorAll("[data-buy-cosmetic]").forEach(o=>{o.addEventListener("click",()=>{const d=o.dataset.buyCosmetic,u=G.find(v=>v.id===d);!u||this.stats.blueprintGems<u.costGems||(this.stats.blueprintGems-=u.costGems,this.stats.unlockedCosmeticIds.includes(d)||this.stats.unlockedCosmeticIds.push(d),u.slot==="facade"?this.stats.equippedFacadeId=d:this.stats.equippedRoofId=d,st(this.stats),this.render())})}),t.querySelectorAll("[data-equip-cosmetic]").forEach(o=>{o.addEventListener("click",()=>{const d=o.dataset.equipCosmetic,u=G.find(v=>v.id===d);u&&(u.slot==="facade"?this.stats.equippedFacadeId=d:this.stats.equippedRoofId=d,st(this.stats),this.render())})}),(e=t.querySelector("#btn-towers-preset-max"))==null||e.addEventListener("click",()=>{this.stats=ht("unlock_all"),this.activeModal=null,this.render()}),(s=t.querySelector("#btn-towers-preset-mid"))==null||s.addEventListener("click",()=>{this.stats=ht("classic_sandbox"),this.activeModal=null,this.render()}),(i=t.querySelector("#btn-towers-preset-reset"))==null||i.addEventListener("click",()=>{this.stats=ht("fresh_lvl1"),this.activeModal=null,this.render()}),(l=t.querySelector("#btn-towers-instant-solve"))==null||l.addEventListener("click",()=>{this.activePuzzle&&(this.activeModal=null,this.board=O(this.activePuzzle.solution),this.checkWinAfterMove(),this.render())}),(w=t.querySelector("#btn-towers-retry-board"))==null||w.addEventListener("click",()=>{this.activePuzzle&&(this.activeModal=null,this.startPuzzleSession(this.activePuzzle,this.activeMode,this.activeCampaignLevel,{resetSeries:!0,cupStageIdx:this.activeCupStageIdx}))}),(f=t.querySelector("#btn-towers-win-map"))==null||f.addEventListener("click",()=>{this.activeModal=null,this.inBoardView=!1,this.render()}),(m=t.querySelector("#btn-towers-win-next"))==null||m.addEventListener("click",()=>{if(this.activeModal=null,this.activeMode==="campaign"&&this.activeCampaignLevel){const o=H.findIndex(v=>v.id===this.activeCampaignLevel.id),d=H[Math.min(H.length-1,o+1)];this.selectedEpisode=d.episode;const u=_(d.size,d.difficulty,d.seed,{id:d.id,title:d.cityName,code:d.code});this.startPuzzleSession(u,"campaign",d)}else if(this.activeMode==="endless"){const o=this.endlessWave<=2?4:this.endlessWave<=5?5:6,d=this.endlessWave<=2?"easy":this.endlessWave<=6?"medium":"hard",u=_(o,d,`TWR-ENDLESS-W${this.endlessWave}-${Date.now()}`);this.startPuzzleSession(u,"endless")}else this.inBoardView=!1,this.render()})}}class Yt{constructor(){b(this,"id","towers");b(this,"title","Towers");b(this,"sceneTheme","brick-city");b(this,"controller",null);b(this,"host",null)}mount(t,e){this.unmount(),this.host=e;const s={getUsername:()=>e.getUsername(),getPilotTag:()=>e.getPilotTag(),isBetaChannel:()=>e.isBetaChannel,getCloudSynced:()=>{var i;return((i=e.getCloudSynced)==null?void 0:i.call(e))??!1},canQuit:()=>{var i;return((i=e.canQuit)==null?void 0:i.call(e))??!1},renderTitlebar:()=>{var i;return((i=e.renderTitlebar)==null?void 0:i.call(e))??""},bindTitlebarEvents:()=>{var i;return(i=e.bindTitlebarEvents)==null?void 0:i.call(e)},onBackToHub:()=>e.returnToHub(),onOpenGlobalSettings:()=>e.openGlobalSettings(),onOpenGlobalProfile:()=>{var i;return(i=e.openGlobalProfile)==null?void 0:i.call(e)},onOpenSocialHub:()=>e.openSocialHub({pauseActiveGame:!0}),getSocialAttentionCount:()=>{var i;return((i=e.getSocialAttentionCount)==null?void 0:i.call(e))??0},getAudioSettings:()=>{var i;return((i=e.getAudioSettings)==null?void 0:i.call(e))??{soundEnabled:R.soundEnabled,musicEnabled:R.musicEnabled}},onToggleSound:()=>{var i;return(i=e.toggleSound)==null?void 0:i.call(e)},onToggleMusic:()=>{var i;return(i=e.toggleMusic)==null?void 0:i.call(e)},onQuitApp:()=>{var i;return(i=e.quitApp)==null?void 0:i.call(e)},playSound:(i,l)=>{i==="error"?R.playLockedBarrier():i==="win"?R.playVictory():i==="hint"?R.playGalaxyComplete(1):i==="erase"?R.playTrowelErase():i==="place"?R.playBrickPlace((l==null?void 0:l.floors)||2,(l==null?void 0:l.maxFloors)||6):R.playConsoleButton()}};this.controller=new Vt(s),this.controller.mount(t),e.setAudioScene(this.sceneTheme)}unmount(){this.controller&&(this.controller.destroy(),this.controller=null),this.host=null}refreshHostState(){var t,e;(t=this.controller)==null||t.syncStatsFromStorage(),(e=this.controller)==null||e.render()}onPauseForOverlay(){var t;(t=this.controller)==null||t.pauseIfPlaying()}handleBackNavigation(){return!this.controller||!this.host?!1:(this.controller.handleBackNavigation()||this.host.returnToHub(),!0)}}export{Yt as TowersPlugin};
