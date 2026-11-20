var Ct=Object.defineProperty;var xt=(r,t,e)=>t in r?Ct(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var b=(r,t,e)=>xt(r,typeof t!="symbol"?t+"":t,e);import{T as F,A as j,g as ft,a as gt,l as ht,v as ut,b as Mt,c as D,e as Et,s as it,r as Q,d as wt,f as yt,h as Tt,i as K,j as Lt,k as kt,m as Bt,n as at,o as pt,p as V}from"./app.js";const R="./towers",At={1:{src:`${R}/bldg_1.png`,heightPct:54},2:{src:`${R}/bldg_2.png`,heightPct:68},3:{src:`${R}/bldg_3.png`,heightPct:78},4:{src:`${R}/bldg_4.png`,heightPct:87},5:{src:`${R}/bldg_5.png`,heightPct:94},6:{src:`${R}/bldg_6.png`,heightPct:100}};function dt(r,t){const e={facade_neon:{p:"#c85a32",s:"#e07a47",sh:"#7f3319",mortar:"#471d10",w:"#fde047",wg:"#fef08a",hl:"#ffedd5"},facade_crystal:{p:"#d97706",s:"#fde68a",sh:"#92400e",mortar:"#78350f",w:"#fef9c3",wg:"#ffffff",hl:"#fffbeb"},facade_artdeco:{p:"#9a3412",s:"#ea580c",sh:"#431407",mortar:"#271509",w:"#fed7aa",wg:"#fef3c7",hl:"#ffedd5"},facade_emerald:{p:"#047857",s:"#10b981",sh:"#064e3b",mortar:"#022c22",w:"#fde68a",wg:"#fef9c3",hl:"#a7f3d0"},facade_plasma:{p:"#4338ca",s:"#818cf8",sh:"#312e81",mortar:"#1e1b4b",w:"#a5f3fc",wg:"#ecfeff",hl:"#ddd6fe"}},s={roof_flat:{rp:"#78716c",ra:"#fbbf24"},roof_spire:{rp:"#d97706",ra:"#fde047"},roof_pyramid:{rp:"#dc2626",ra:"#fecaca"},roof_halo:{rp:"#0284c7",ra:"#bae6fd"},roof_sun:{rp:"#b45309",ra:"#fef08a"}},i=e[r]||e.facade_neon,a=s[t]||s.roof_flat;return{facadeId:r,brickPrimary:i.p,brickSecondary:i.s,brickShadow:i.sh,mortar:i.mortar,windowLit:i.w,windowGlow:i.wg,roofPrimary:a.rp,roofAccent:a.ra,outline:"#1e1829",highlight:i.hl}}function Pt(r,t){const e=Math.max(1,Math.min(t,r));let s=1;t<=3?s=e===1?1:e===2?3:5:t===4?s=e===1?1:e===2?2:e===3?4:6:t===5?s=e===1?1:e===2?2:e===3?3:e===4?5:6:e===1?s=1:e===2?s=2:e===3?s=3:e===4?s=4:e===5?s=5:s=6;const i=t>6?Math.min(100,48+Math.round(e/t*52)):null,a=At[s];return{tierIdx:s,src:a.src,heightPct:i??a.heightPct}}function Ht(r){switch(r){case"facade_crystal":return"sepia(0.38) brightness(1.18) saturate(0.78) hue-rotate(8deg)";case"facade_artdeco":return"saturate(1.42) hue-rotate(-14deg) contrast(1.06)";case"facade_emerald":return"hue-rotate(96deg) saturate(1.06) brightness(1.02)";case"facade_plasma":return"hue-rotate(196deg) saturate(1.16) brightness(0.94)";default:return""}}function Kt(r){switch(r){case"roof_spire":return"--bldg-glow: rgba(251, 191, 36, 0.55);";case"roof_pyramid":return"--bldg-glow: rgba(220, 38, 38, 0.52);";case"roof_halo":return"--bldg-glow: rgba(56, 189, 248, 0.55);";case"roof_sun":return"--bldg-glow: rgba(251, 146, 60, 0.65);";default:return""}}function qt(r,t=44){return r==="roof_spire"?`
      <svg viewBox="0 0 32 32" width="${t}" height="${t}" xmlns="http://www.w3.org/2000/svg" shape-rendering="crispEdges">
        <rect x="0" y="0" width="32" height="32" fill="#e0f2fe" />
        <rect x="6" y="23" width="20" height="7" fill="#c2410c" stroke="#1e1829" stroke-width="1.5" />
        <rect x="9" y="15" width="14" height="8" fill="#fef3c7" stroke="#1e1829" stroke-width="1.5" />
        <circle cx="16" cy="19" r="3" fill="#fde047" stroke="#1e1829" stroke-width="1" />
        <polygon points="10,15 16,4 22,15" fill="#0d9488" stroke="#1e1829" stroke-width="1.5" />
        <rect x="15" y="1" width="2" height="4" fill="#f59e0b" />
      </svg>
    `:r==="roof_pyramid"?`
      <svg viewBox="0 0 32 32" width="${t}" height="${t}" xmlns="http://www.w3.org/2000/svg" shape-rendering="crispEdges">
        <rect x="0" y="0" width="32" height="32" fill="#ffedd5" />
        <rect x="5" y="21" width="22" height="9" fill="#d97706" stroke="#1e1829" stroke-width="1.5" />
        <polygon points="3,21 16,7 29,21" fill="#dc2626" stroke="#1e1829" stroke-width="1.5" />
        <rect x="13" y="14" width="6" height="5" fill="#fef08a" stroke="#1e1829" stroke-width="1" />
        <rect x="21" y="9" width="3" height="6" fill="#9a3412" stroke="#1e1829" stroke-width="1" />
      </svg>
    `:r==="roof_halo"?`
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
    `:r==="roof_sun"?`
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
  `}function _t(r){switch(r){case"roof_spire":return`
        <svg class="tower-roof-cap" viewBox="0 0 28 11" xmlns="http://www.w3.org/2000/svg" shape-rendering="crispEdges" aria-hidden="true">
          <rect x="13" y="0" width="2" height="3" fill="#f59e0b" />
          <polygon points="8,8 14,2 20,8" fill="#0d9488" stroke="#1e1829" stroke-width="1.2" />
          <rect x="6" y="8" width="16" height="3" fill="#fef3c7" stroke="#1e1829" stroke-width="1.1" />
          <circle cx="14" cy="9.5" r="1.4" fill="#fde047" />
        </svg>
      `;case"roof_pyramid":return`
        <svg class="tower-roof-cap" viewBox="0 0 28 11" xmlns="http://www.w3.org/2000/svg" shape-rendering="crispEdges" aria-hidden="true">
          <rect x="19" y="2" width="3" height="5" fill="#9a3412" stroke="#1e1829" stroke-width="1" />
          <polygon points="3,10 14,2 25,10" fill="#dc2626" stroke="#1e1829" stroke-width="1.2" />
          <rect x="12" y="6" width="4" height="3" fill="#fef08a" stroke="#1e1829" stroke-width="0.9" />
        </svg>
      `;case"roof_halo":return`
        <svg class="tower-roof-cap" viewBox="0 0 28 12" xmlns="http://www.w3.org/2000/svg" shape-rendering="crispEdges" aria-hidden="true">
          <polygon points="9,4 14,1 19,4" fill="#57534e" stroke="#1e1829" stroke-width="1" />
          <rect x="9" y="4" width="10" height="5" fill="#92400e" stroke="#1e1829" stroke-width="1.1" />
          <rect x="9" y="6" width="10" height="1.4" fill="#475569" />
          <rect x="10" y="9" width="2" height="3" fill="#1e293b" />
          <rect x="16" y="9" width="2" height="3" fill="#1e293b" />
        </svg>
      `;case"roof_sun":return`
        <svg class="tower-roof-cap" viewBox="0 0 28 12" xmlns="http://www.w3.org/2000/svg" shape-rendering="crispEdges" aria-hidden="true">
          <rect x="13" y="0" width="2" height="3" fill="#fde047" />
          <path d="M8 9 Q14 1 20 9 Z" fill="#f59e0b" stroke="#1e1829" stroke-width="1.1" />
          <rect x="7" y="9" width="14" height="3" fill="#fef08a" stroke="#1e1829" stroke-width="1" />
        </svg>
      `;default:return`
        <svg class="tower-roof-cap" viewBox="0 0 28 9" xmlns="http://www.w3.org/2000/svg" shape-rendering="crispEdges" aria-hidden="true">
          <rect x="17" y="2" width="4" height="6" fill="#9a3412" stroke="#1e1829" stroke-width="1.1" />
          <rect x="18" y="0" width="2" height="2" fill="#cbd5e1" />
          <rect x="7" y="5" width="7" height="3" fill="#16a34a" stroke="#1e1829" stroke-width="1" />
        </svg>
      `}}function mt(r,t,e,s){const{tierIdx:i,src:a,heightPct:w}=Pt(r,t),y=Kt(s),g=Ht(e.facadeId),o=g?`filter: ${g} drop-shadow(0 2px 0 rgba(30, 24, 41, 0.35));`:"",c=s!=="roof_flat"?i>=2:i>=4,u=c?Math.max(44,w-8):w;return`
    <div
      class="tower-pixel-bldg-svg tier-sprite-${i} ${c?"has-roof-cap":""}"
      style="--bldg-h: ${u}%; --bldg-trim: ${e.brickSecondary}; ${y}"
      aria-hidden="true"
    >
      ${c?_t(s):""}
      <img
        class="tower-pixel-sprite-img"
        src="${a}"
        alt=""
        style="${o}"
        loading="eager"
        decoding="async"
        draggable="false"
      />
    </div>
  `}function $t(r,t,e){return r?e>=3?"gold":e===2?"silver":"bronze":t?"active":"locked"}function St(r,t=!1){switch(r){case"gold":return`${R}/${t?"bldg_6.png":"bldg_5.png"}`;case"silver":return`${R}/bldg_3.png`;case"bronze":return`${R}/bldg_1.png`;case"active":return`${R}/lot_crane.png`;default:return`${R}/lot_empty.png`}}function It(r,t,e,s="",i=!1){const a=St(r,i);return`
    <img
      class="${s} street-sprite-img street-tier-${r}"
      src="${a}"
      alt=""
      loading="eager"
      decoding="async"
      draggable="false"
      aria-hidden="true"
    />
  `}function Rt(r,t,e,s,i,a){const g=Math.max(1,r.length),o=78,u=(1200-o*2)/g,p=206,C=r.map((z,S)=>{const x=a(z.id),A=t.solvedIds.includes(z.id),B=x<=i||A,n=t.levelStars[z.id]||0,h=$t(A,B,n),d=S===g-1,v=St(h,d),$=Math.round(o+u*(S+.5)),k=Math.min(82,Math.round(u*.9)),M=h==="gold"?d?148:132:h==="silver"?106:h==="bronze"?64:h==="active"?88:34,P=p-M,E=h==="gold"?"#f59e0b":h==="silver"?"#cbd5e1":h==="bronze"?"#d97706":h==="active"?"#0ea5e9":"#64748b",q=h==="silver"||h==="gold"?"#1e1b2e":"#ffffff";return`
        <g>
          <ellipse cx="${$}" cy="${p+1}" rx="${Math.round(k*.42)}" ry="5" fill="rgba(30,24,41,0.22)" />
          <image
            href="${v}"
            x="${$-Math.round(k/2)}"
            y="${P}"
            width="${k}"
            height="${M}"
            preserveAspectRatio="xMidYMax meet"
            style="image-rendering: pixelated;"
          />
          <rect x="${$-12}" y="${p+10}" width="24" height="16" rx="3" fill="${E}" stroke="#1e1829" stroke-width="2" />
          <text x="${$}" y="${p+21}" text-anchor="middle" fill="${q}" font-size="10" font-weight="900" font-family="monospace">${S+1}</text>
        </g>
      `}).join("");return`
    <svg class="towers-street-panorama-svg" viewBox="0 0 1200 248" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Mahalle Caddesi Silüeti">
      <image
        href="${R}/town_sky_backdrop.jpg"
        x="0"
        y="0"
        width="1200"
        height="218"
        preserveAspectRatio="xMidYMax slice"
        style="image-rendering: pixelated;"
      />
      <!-- Sunlit sidewalk curb & paved boulevard street connecting all 12 buildings -->
      <rect x="0" y="${p-4}" width="1200" height="8" fill="#fef3c7" stroke="#292524" stroke-width="2" />
      <rect x="0" y="${p+4}" width="1200" height="40" fill="#475569" />
      <line x1="0" y1="${p+28}" x2="1200" y2="${p+28}" stroke="#fde047" stroke-width="3" stroke-dasharray="22 14" />
      ${C}
    </svg>
  `}function Gt(r,t,e,s,i){const o=Math.max(1,r.length),c=82+Math.max(0,o-1)*148+84,u=r.map((n,h)=>{const d=h%2===0,v=d?20:80,$=Math.round(v/100*680),k=82+h*148,M=d?"right":"left",P=Math.round(d?680*.34:680*.66);return{...n,xPct:v,xSvg:$,ySvg:k,plotSide:M,drivewayX:P}}),p=u.slice(0,-1).map((n,h)=>{const d=u[h+1],v=Math.round((n.ySvg+d.ySvg)/2),$=`M ${n.xSvg} ${n.ySvg} C ${n.xSvg} ${v}, ${d.xSvg} ${v}, ${d.xSvg} ${d.ySvg}`,k=d.isUnlocked||n.isCompleted,M=k?"#fef3c7":"#e7e5e4",P=n.isCompleted&&d.isUnlocked?"#334155":k?"#475569":"#94a3b8";return`
        <path d="${$}" fill="none" stroke="#1e293b" stroke-width="52" stroke-linecap="round" vector-effect="non-scaling-stroke" opacity="0.28" />
        <path d="${$}" fill="none" stroke="${M}" stroke-width="44" stroke-linecap="round" vector-effect="non-scaling-stroke" />
        <path d="${$}" fill="none" stroke="${P}" stroke-width="32" stroke-linecap="round" vector-effect="non-scaling-stroke" />
        <path d="${$}" fill="none" stroke="${k?"#fde047":"#cbd5e1"}" stroke-width="3.5" stroke-dasharray="11 11" stroke-linecap="round" vector-effect="non-scaling-stroke" />
      `}).join(""),C=u[0],z=u[u.length-1],S=C?`M ${Math.round(680*.5)} 0 C ${Math.round(680*.5)} 36, ${C.xSvg} 36, ${C.xSvg} ${C.ySvg}`:"",x=z?`M ${z.xSvg} ${z.ySvg} C ${z.xSvg} ${c-34}, ${Math.round(680*.5)} ${c-34}, ${Math.round(680*.5)} ${c}`:"",A=u.map(n=>{const h=n.isCompleted,d=n.isUnlocked,v=h?"#fde68a":d?"#fef3c7":"#cbd5e1";return`
        <line x1="${n.xSvg}" y1="${n.ySvg}" x2="${n.drivewayX}" y2="${n.ySvg}" stroke="#1e293b" stroke-width="22" stroke-linecap="round" vector-effect="non-scaling-stroke" opacity="0.22" />
        <line x1="${n.xSvg}" y1="${n.ySvg}" x2="${n.drivewayX}" y2="${n.ySvg}" stroke="${v}" stroke-width="16" stroke-linecap="round" vector-effect="non-scaling-stroke" />
        <circle cx="${n.xSvg}" cy="${n.ySvg}" r="18" fill="${v}" stroke="#292524" stroke-width="2.5" />
      `}).join(""),B=u.map(n=>{const h=(n.ySvg/c*100).toFixed(3),d=["candy-road-pin",`tier-${n.tier}`,n.isUnlocked?"unlocked":"locked"].join(" "),v=n.tier==="active"?"▶":n.isCompleted?`${n.relIdx+1}`:"🔒",$=n.stars>0?"★".repeat(n.stars):n.tier==="active"?`#${n.lvl.code}`:`${n.relIdx+1}`,k=Array.from({length:3},(M,P)=>P<n.stars?'<span class="star-on">★</span>':'<span class="star-off">☆</span>').join("");return`
        ${n.isUnlocked?`
          <button
            type="button"
            class="${d}"
            style="left: ${n.xPct}%; top: ${h}%;"
            data-start-campaign="${n.lvl.id}"
            title="#${i(n.lvl.code)} ${i(n.lvl.cityName)}"
          >
            <span class="pin-main">${v}</span>
            <span class="pin-sub">${$}</span>
          </button>
        `:`
          <div
            class="${d}"
            style="left: ${n.xPct}%; top: ${h}%;"
            aria-label="Kilitli Parsel #${i(n.lvl.code)}"
          >
            <span class="pin-main">${v}</span>
            <span class="pin-sub">${$}</span>
          </div>
        `}

        <article
          class="towers-street-node candy-plot-card side-${n.plotSide} tier-${n.tier} ${n.isUnlocked?"unlocked":"locked"}"
          style="top: ${h}%;"
          data-city-card="${n.lvl.id}"
        >
          <div class="street-node-art">
            ${It(n.tier,t,e,"street-node-bldg-svg",n.isLandmark)}
          </div>
          <div class="street-node-body">
            <div class="towers-city-top">
              <span class="towers-city-code">#${i(n.lvl.code)} • ${n.lvl.size}×${n.lvl.size} ${n.diffBadge}</span>
              ${n.mechPill}
            </div>
            <h4 class="towers-city-name">${i(n.lvl.cityName)}</h4>
            <div class="candy-tier-chip tier-${n.tier}">${n.tierTitle}</div>
            <div class="towers-city-meta">
              <span class="towers-city-stars ${n.stars>0?"earned":""}">${k}</span>
              <span class="towers-city-time">${n.bestSec?n.stars<3?`⏱️ ${s(n.bestSec)} • 🥇 ≤ ${s(n.lvl.goldSec)}`:`🥇 ${s(n.bestSec)}`:`🥇 ≤ ${s(n.lvl.goldSec)}`}</span>
            </div>
            <div class="candy-plot-action">
              ${n.isUnlocked?`<button type="button" class="towers-city-play-btn ${n.isCompleted?"completed":"active"}" data-start-campaign="${n.lvl.id}">${n.isCompleted?"🔁 Tekrar Oyna":"🏗️ İnşa Et"}</button>`:'<span class="towers-city-lock-pill">🔒 Önceki Parseli Bitir</span>'}
            </div>
          </div>
        </article>
      `}).join("");return`
    <div class="towers-candy-map" style="--candy-map-h: ${c}px;">
      <svg
        class="candy-road-svg"
        viewBox="0 0 680 ${c}"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        ${S?`
          <path d="${S}" fill="none" stroke="#fef3c7" stroke-width="44" stroke-linecap="round" vector-effect="non-scaling-stroke" />
          <path d="${S}" fill="none" stroke="#475569" stroke-width="32" stroke-linecap="round" vector-effect="non-scaling-stroke" />
          <path d="${S}" fill="none" stroke="#fde047" stroke-width="3.5" stroke-dasharray="11 11" vector-effect="non-scaling-stroke" />
        `:""}
        ${x?`
          <path d="${x}" fill="none" stroke="#e7e5e4" stroke-width="44" stroke-linecap="round" vector-effect="non-scaling-stroke" />
          <path d="${x}" fill="none" stroke="#94a3b8" stroke-width="32" stroke-linecap="round" vector-effect="non-scaling-stroke" />
          <path d="${x}" fill="none" stroke="#cbd5e1" stroke-width="3.5" stroke-dasharray="11 11" vector-effect="non-scaling-stroke" />
        `:""}
        ${p}
        ${A}
      </svg>
      <div class="candy-map-nodes-layer">
        ${B}
      </div>
    </div>
  `}function J(r,t=44){const e={char_apprentice:"./towers/arch_agaoglu.png",char_planner:"./towers/arch_kemaleddin.png",char_skyline:"./towers/arch_gaudi.png",char_neon:"./towers/arch_zaha.png",char_quantum:"./towers/arch_cansever.png",char_emperor:"./towers/arch_sinan.png"};return`
    <img
      src="${e[r]||e.char_apprentice}"
      alt=""
      width="${t}"
      height="${t}"
      class="architect-avatar-svg architect-portrait-img"
      loading="eager"
      decoding="async"
      draggable="false"
    />
  `}function _(r){return r.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function Wt(r){const t=Math.max(0,Math.floor(r)),e=Math.floor(t/60),s=t%60;return`${String(e).padStart(2,"0")}:${String(s).padStart(2,"0")}`}const vt=[[1,3,2],[2,1,3],[3,2,1]],nt=[[1,0,0],[2,1,0],[3,0,1]];function Dt(r){const{step:t,miniBoard:e,selectedMiniCell:s,palId:i}=r,a=dt(i.facade,i.roof),w=e.every((o,c)=>o.every((u,p)=>u===vt[c][p])),y=[3,1,2],g=[2,2,1];return`
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
                ${y.map(o=>`<div class="mini-clue"><b>${o}</b><small>▾</small></div>`).join("")}
                ${[0,1,2].map(o=>`
                  <div class="mini-clue"><b>${g[o]}</b><small>▸</small></div>
                  ${[0,1,2].map(c=>{var x;const u=((x=e[o])==null?void 0:x[c])||0,p=nt[o][c]>0,C=s.r===o&&s.c===c,z=u>0&&u===vt[o][c],S=u>0&&u!==vt[o][c];return`
                        <button
                          type="button"
                          class="mini-cell ${p?"fixed":""} ${C?"selected":""} ${S?"wrong":z?"correct":""}"
                          data-tut-cell="${o}-${c}"
                        >
                          ${u>0?`<div class="mini-bldg-box">${mt(u,3,a,"roof_flat")}<span class="mini-bldg-num">${u}</span></div>`:'<span class="mini-empty-plus">+</span>'}
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
  `}function Ut(){return`
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
  `}function Nt(r){const t=F.filter(s=>s.slot==="facade"),e=F.filter(s=>s.slot==="roof");return`
    <div class="towers-modal-backdrop" id="towers-workshop-modal">
      <div class="towers-modal-card towers-workshop-card wide">
        <div class="towers-modal-head workshop-head">
          <div>
            <h3>🏛️ Mimarlık Bürosu &amp; Cephe Tasarımı</h3>
            <p>Şantiye mimarını seç, binalarının tuğla rengini ve çatı silüetini değiştir.</p>
          </div>
          <div class="towers-modal-balance">
            <span class="balance-pill">💠 <strong>${r.blueprintGems}</strong></span>
            <button id="btn-towers-close-modal" class="towers-close-btn">✕</button>
          </div>
        </div>

        <div class="towers-modal-body">
          <h4 class="towers-section-sub">🏛️ Ünlü Mimarlar &amp; Müteahhitler (Efsaneviye Uzanan Kadro)</h4>
          <div class="towers-workshop-grid">
            ${j.map(s=>{const i=r.unlockedCharacterIds.includes(s.id),a=r.equippedCharacterId===s.id,w=r.blueprintGems>=s.costGems;return`
                <div class="towers-shop-item rarity-${s.rarity} ${a?"equipped":""}">
                  <div class="towers-shop-head-row">
                    <div class="towers-shop-avatar" style="border-color:${s.accentColor}">
                      ${J(s.id,62)}
                    </div>
                    <div class="towers-shop-info">
                      <span class="rarity-pill rarity-${s.rarity}">${_(s.rarityLabel)}</span>
                      <strong>${_(s.name)}</strong>
                      <span class="role">${_(s.title)}</span>
                      <span class="perk">🧱 İnşaat Ustalığı +${s.powerScore}</span>
                    </div>
                  </div>
                  <p class="towers-shop-desc">${_(s.description)}</p>
                  <div class="towers-shop-action">
                    ${a?'<button class="towers-shop-btn equipped" disabled>✅ Aktif Mimar</button>':i?`<button class="towers-shop-btn equip" data-equip-char="${s.id}">👷 Göreve Getir</button>`:`<button class="towers-shop-btn buy" data-buy-char="${s.id}" ${w?"":"disabled"}>🔓 Aç (💠 ${s.costGems})</button>`}
                  </div>
                </div>
              `}).join("")}
          </div>

          <h4 class="towers-section-sub">🧱 Bina Cephe Stilleri (Tahtada Renk &amp; Doku Değiştirir)</h4>
          <div class="towers-workshop-grid">
            ${t.map(s=>{const i=r.unlockedCosmeticIds.includes(s.id),a=r.equippedFacadeId===s.id,w=r.blueprintGems>=s.costGems,y=dt(s.id,r.equippedRoofId);return`
                  <div class="towers-shop-item ${a?"equipped":""}">
                    <div class="towers-shop-head-row">
                      <div class="towers-shop-swatch brick-preview">
                        ${mt(4,5,y,r.equippedRoofId)}
                      </div>
                      <div class="towers-shop-info">
                        <strong>${_(s.name)}</strong>
                        <span class="role">🧱 Tuğla &amp; Taş Kaplama</span>
                      </div>
                    </div>
                    <p class="towers-shop-desc">${_(s.description)}</p>
                    <div class="towers-shop-action">
                      ${a?'<button class="towers-shop-btn equipped" disabled>✅ Kullanımda</button>':i?`<button class="towers-shop-btn equip" data-equip-cosmetic="${s.id}">🎨 Cepheye Uygula</button>`:`<button class="towers-shop-btn buy" data-buy-cosmetic="${s.id}" ${w?"":"disabled"}>🔓 Aç (💠 ${s.costGems})</button>`}
                    </div>
                  </div>
                `}).join("")}
          </div>

          <h4 class="towers-section-sub">🏰 Çatı Tasarımları &amp; Şehir Tepeleri</h4>
          <div class="towers-workshop-grid">
            ${e.map(s=>{const i=r.unlockedCosmeticIds.includes(s.id),a=r.equippedRoofId===s.id,w=r.blueprintGems>=s.costGems;return`
                  <div class="towers-shop-item ${a?"equipped":""}">
                    <div class="towers-shop-head-row">
                      <div class="towers-shop-swatch brick-preview roof-preview" style="border-color:${s.primaryColor}">
                        ${qt(s.id,46)}
                      </div>
                      <div class="towers-shop-info">
                        <strong>${_(s.name)}</strong>
                        <span class="role">🏠 Çatı Silüeti</span>
                      </div>
                    </div>
                    <p class="towers-shop-desc">${_(s.description)}</p>
                    <div class="towers-shop-action">
                      ${a?'<button class="towers-shop-btn equipped" disabled>✅ Kullanımda</button>':i?`<button class="towers-shop-btn equip" data-equip-cosmetic="${s.id}">🏠 Çatıya Tak</button>`:`<button class="towers-shop-btn buy" data-buy-cosmetic="${s.id}" ${w?"":"disabled"}>🔓 Aç (💠 ${s.costGems})</button>`}
                    </div>
                  </div>
                `}).join("")}
          </div>
        </div>
      </div>
    </div>
  `}function Ot(r){const t=ft(r.architectXp),e=Object.values(r.bestTimesSec),s=e.length>0?Math.min(...e):null;return`
    <div class="towers-modal-backdrop" id="towers-profile-modal">
      <div class="towers-modal-card wide">
        <div class="towers-modal-head">
          <h3>🏆 Towers Başarımlar &amp; İstatistikler (LVL ${t.level} • ${_(t.title)})</h3>
          <button id="btn-towers-close-modal" class="towers-close-btn">✕</button>
        </div>
        <div class="towers-modal-body">
          <div class="towers-stats-summary-grid">
            <div class="towers-stat-box"><span>Çözülen Blok</span><strong>${r.totalSolved}</strong></div>
            <div class="towers-stat-box"><span>Toplam Puan</span><strong>${r.totalPoints}</strong></div>
            <div class="towers-stat-box"><span>En Hızlı Blok</span><strong>${s!==null?`${s} sn`:"—"}</strong></div>
            <div class="towers-stat-box"><span>İmar / Sis / Baret</span><strong>${(r.zoningSolvedCount||0)+(r.fogSolvedCount||0)+(r.survivalClearsCount||0)}</strong></div>
          </div>

          <h4 class="towers-section-sub">🎖️ Towers Başarımları (${r.unlockedAchievements.length} / ${gt.length})</h4>
          <div class="towers-ach-grid">
            ${gt.map(i=>`
                <div class="towers-ach-card ${r.unlockedAchievements.includes(i.id)?"unlocked":"locked"}">
                  <span class="ach-icon">${i.icon}</span>
                  <div>
                    <strong>${_(i.title)}</strong>
                    <p>${_(i.description)}</p>
                  </div>
                </div>
              `).join("")}
          </div>
        </div>
      </div>
    </div>
  `}function Vt(r){return`
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
            ${r?`
              <button id="btn-towers-instant-solve" class="towers-primary-cta">
                ⚡ Aktif Sokağı Anında Çöz (Beta Test)
              </button>
            `:""}
          </div>
        </div>
      </div>
    </div>
  `}function jt(r){const{elapsedSeconds:t,hintsUsed:e,summary:s,challengeKind:i,architect:a}=r;return`
    <div class="towers-modal-backdrop" id="towers-victory-modal">
      <div class="towers-modal-card victory">
        <div class="towers-victory-stars">${Array.from({length:3},(y,g)=>g<s.starsEarned?'<span class="star-on">★</span>':'<span class="star-off">☆</span>').join("")}</div>
        <h2>🧱 İnşaat Tamamlandı!</h2>
        <p>
          Süre: <strong>${Wt(t)}</strong> • Kullanılan İpucu: <strong>${e}</strong>
        </p>

        ${a?`
          <div class="towers-victory-arch-strip">
            <div class="towers-victory-arch-portrait" style="border-color:${a.accentColor}">
              ${J(a.id,52)}
            </div>
            <div class="towers-victory-arch-quote">
              <strong>${_(a.name)}</strong>
              <span>“${_(a.winQuote)}”</span>
            </div>
          </div>
        `:""}

        <div class="towers-victory-rewards">
          <div class="reward-pill">✨ +${s.xpGain} Mimar XP</div>
          <div class="reward-pill">💠 +${s.blueprintGain} Proje Kristali</div>
          ${i==="weekly_cup"&&s.cupScore?`<div class="reward-pill">🏆 Kupa Puanı: ${s.cupScore}</div>`:""}
        </div>

        ${s.leveledUp?'<div class="towers-levelup-banner">🎉 MİMAR SEVİYESİ YÜKSELDİ!</div>':""}
        ${s.newlyUnlockedAchievements.length>0?`<div class="towers-ach-unlock-strip">🏅 Yeni Başarım: ${s.newlyUnlockedAchievements.map(y=>`${y.icon} ${_(y.title)}`).join(" • ")}</div>`:""}

        <div class="towers-victory-actions">
          <button id="btn-towers-win-next" class="towers-primary-cta">➡️ Devam Et / Sıradaki Sokak</button>
          <button id="btn-towers-win-map" class="towers-secondary-cta">🏙️ Haritaya Dön</button>
        </div>
      </div>
    </div>
  `}function Ft(r){return`
    <div class="towers-modal-backdrop" id="towers-gameover-modal">
      <div class="towers-modal-card victory">
        <div class="towers-victory-stars">🪖✖️</div>
        <h2>🚧 Şantiye Durduruldu!</h2>
        <p>${_(r)}</p>
        <div class="towers-victory-actions">
          <button id="btn-towers-retry-board" class="towers-primary-cta">🔄 Tekrar Dene</button>
          <button id="btn-towers-win-map" class="towers-secondary-cta">🏙️ Şehir Menüsüne Dön</button>
        </div>
      </div>
    </div>
  `}function T(r){return r.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function rt(r){const t=Math.max(0,Math.floor(r)),e=Math.floor(t/60),s=t%60;return`${String(e).padStart(2,"0")}:${String(s).padStart(2,"0")}`}function Z(r){return r.map(t=>[...t])}function bt(r){return r.map(t=>t.map(e=>[...e]))}class Yt{constructor(t){b(this,"host");b(this,"stats");b(this,"activeTab","campaign");b(this,"selectedEpisode",1);b(this,"activeModal",null);b(this,"tutorialStep",1);b(this,"tutorialMiniBoard",nt.map(t=>[...t]));b(this,"tutorialSelectedCell",{r:0,c:1});b(this,"customSize",4);b(this,"customDifficulty","easy");b(this,"customSeedInput","");b(this,"inBoardView",!1);b(this,"isPaused",!1);b(this,"activePuzzle",null);b(this,"activeMode","campaign");b(this,"activeChallengeKind","standard");b(this,"activeCupStageIdx",null);b(this,"activeCampaignLevel",null);b(this,"board",[]);b(this,"notes",[]);b(this,"history",[]);b(this,"redoStack",[]);b(this,"selectedCell",{r:0,c:0});b(this,"noteMode",!1);b(this,"activeHint",null);b(this,"activeSightRay",null);b(this,"lastBuiltCell",null);b(this,"buildAnimSeq",0);b(this,"hintsUsedThisGame",0);b(this,"elapsedSeconds",0);b(this,"timerHandle",null);b(this,"gameWon",!1);b(this,"gameOverReason","");b(this,"endlessWave",1);b(this,"blitzRemainingSeconds",120);b(this,"blitzScore",0);b(this,"blitzSolvedCount",0);b(this,"survivalLives",3);b(this,"survivalStreak",0);b(this,"lastWinSummary",null);b(this,"keydownHandler",null);b(this,"resizeHandler",null);b(this,"lastDesktopMode",typeof window<"u"?window.innerWidth>=900:!0);b(this,"mountEl",null);this.host=t,this.stats=ht()}reloadStats(){this.stats=ht()}getStats(){return this.stats}pauseIfPlaying(){this.inBoardView&&!this.gameWon&&!this.isPaused&&(this.isPaused=!0,this.render())}syncStatsFromStorage(){this.stats=ht()}handleBackNavigation(){return this.activeModal!==null?(this.activeModal=null,this.render(),!0):this.inBoardView?this.isPaused?(this.isPaused=!1,this.render(),!0):(this.stopTimer(),this.inBoardView=!1,this.render(),!0):!1}destroy(){this.stopTimer(),this.keydownHandler&&(window.removeEventListener("keydown",this.keydownHandler),this.keydownHandler=null),this.resizeHandler&&(window.removeEventListener("resize",this.resizeHandler),this.resizeHandler=null)}stopTimer(){this.timerHandle!==null&&(window.clearInterval(this.timerHandle),this.timerHandle=null)}startTimer(){this.stopTimer(),this.timerHandle=window.setInterval(()=>{if(!this.inBoardView||this.gameWon||this.isPaused||this.activeModal!==null)return;if(this.elapsedSeconds+=1,this.activeMode==="blitz"&&(this.blitzRemainingSeconds=Math.max(0,this.blitzRemainingSeconds-1),this.blitzRemainingSeconds<=0)){this.stopTimer(),this.inBoardView=!1,this.render();return}const t=document.getElementById("towers-hud-timer");t&&(t.textContent=this.activeMode==="blitz"?`⏱️ ${rt(this.blitzRemainingSeconds)}`:`⏱️ ${rt(this.elapsedSeconds)}`)},1e3)}mount(t){this.mountEl=t,this.reloadStats(),this.attachKeyboardListener(),this.attachResizeListener(),this.renderInto(t)}render(){const t=this.mountEl||document.getElementById("towers-mount-root")||document.getElementById("app");t&&this.renderInto(t)}attachResizeListener(){this.resizeHandler&&window.removeEventListener("resize",this.resizeHandler),this.resizeHandler=()=>{const t=window.innerWidth>=900;t!==this.lastDesktopMode&&(this.lastDesktopMode=t,this.render())},window.addEventListener("resize",this.resizeHandler)}attachKeyboardListener(){this.keydownHandler&&window.removeEventListener("keydown",this.keydownHandler),this.keydownHandler=t=>{if(!this.inBoardView||!this.activePuzzle||this.activeModal!==null||this.isPaused||document.activeElement&&["INPUT","TEXTAREA"].includes(document.activeElement.tagName))return;const e=this.activePuzzle.size;if(t.key==="ArrowUp")t.preventDefault(),this.selectedCell.r=(this.selectedCell.r-1+e)%e,this.render();else if(t.key==="ArrowDown")t.preventDefault(),this.selectedCell.r=(this.selectedCell.r+1)%e,this.render();else if(t.key==="ArrowLeft")t.preventDefault(),this.selectedCell.c=(this.selectedCell.c-1+e)%e,this.render();else if(t.key==="ArrowRight")t.preventDefault(),this.selectedCell.c=(this.selectedCell.c+1)%e,this.render();else if(t.key.toLowerCase()==="n")t.preventDefault(),this.noteMode=!this.noteMode,this.render();else if(t.key.toLowerCase()==="v")t.preventDefault(),this.toggleSightRayFromSelection();else if(t.key==="Backspace"||t.key==="Delete"||t.key==="0")t.preventDefault(),this.handleEraseInput();else if((t.ctrlKey||t.metaKey)&&t.key.toLowerCase()==="z")t.preventDefault(),this.handleUndo();else if((t.ctrlKey||t.metaKey)&&t.key.toLowerCase()==="y")t.preventDefault(),this.handleRedo();else if(/^[1-8]$/.test(t.key)){const s=Number(t.key);s>=1&&s<=e&&(t.preventDefault(),this.handleNumberInput(s))}},window.addEventListener("keydown",this.keydownHandler)}startPuzzleSession(t,e,s=null,i){var w,y;this.activePuzzle=t,this.activeMode=e,this.activeChallengeKind=t.challengeKind||"standard",this.activeCupStageIdx=(i==null?void 0:i.cupStageIdx)??null,this.activeCampaignLevel=s,this.board=Z(t.givens),this.notes=Array.from({length:t.size},()=>Array.from({length:t.size},()=>[])),this.history=[],this.redoStack=[],this.selectedCell={r:0,c:0};let a=!1;for(let g=0;g<t.size&&!a;g++)for(let o=0;o<t.size;o++)if(t.givens[g][o]===0){this.selectedCell={r:g,c:o},a=!0;break}this.activeHint=null,this.activeSightRay=null,this.lastBuiltCell=null,this.hintsUsedThisGame=0,this.elapsedSeconds=0,this.gameWon=!1,this.isPaused=!1,this.gameOverReason="",this.inBoardView=!0,e==="blitz"&&(i==null?void 0:i.resetSeries)!==!1?(this.blitzRemainingSeconds=120,this.blitzScore=0,this.blitzSolvedCount=0):this.activeChallengeKind==="survival"&&(i==null?void 0:i.resetSeries)!==!1&&(this.survivalLives=3,this.survivalStreak=0),this.startTimer(),(y=(w=this.host).playSound)==null||y.call(w,"click"),this.render()}pushHistory(){this.history.push({board:Z(this.board),notes:bt(this.notes)}),this.history.length>100&&this.history.shift(),this.redoStack=[]}handleNumberInput(t){var y,g,o,c,u,p,C,z,S,x,A;if(!this.activePuzzle||this.gameWon||this.isPaused)return;const{r:e,c:s}=this.selectedCell;if(((y=this.activePuzzle.givens[e])==null?void 0:y[s])>0){(o=(g=this.host).playSound)==null||o.call(g,"error");return}if(this.pushHistory(),this.activeHint=null,this.noteMode){this.board[e][s]!==0&&(this.board[e][s]=0);const B=this.notes[e][s],n=B.indexOf(t);n>=0?B.splice(n,1):(B.push(t),B.sort((h,d)=>h-d)),(u=(c=this.host).playSound)==null||u.call(c,"click"),this.render();return}if(this.board[e][s]=this.board[e][s]===t?0:t,this.notes[e][s]=[],this.board[e][s]===0){this.lastBuiltCell=null,(C=(p=this.host).playSound)==null||C.call(p,"erase"),this.render();return}const i=this.board[e][s];this.lastBuiltCell={r:e,c:s,seq:++this.buildAnimSeq};const a=ut(this.activePuzzle,this.board);if(a.duplicateKeys.has(`${e},${s}`)||a.zoningViolationKeys.has(`${e},${s}`)||this.activeChallengeKind==="survival"&&i!==this.activePuzzle.solution[e][s]){if((S=(z=this.host).playSound)==null||S.call(z,"error"),this.activeChallengeKind==="survival"&&(this.survivalLives=Math.max(0,this.survivalLives-1),this.survivalLives<=0)){this.stopTimer(),this.gameOverReason="3 inşaat baretinin tamamı tükendi! Kat çakışması veya hatalı kat yerleşimi şantiyeyi durdurdu.",this.activeModal="gameover",this.render();return}}else(A=(x=this.host).playSound)==null||A.call(x,"place",{floors:i,maxFloors:this.activePuzzle.size});this.checkWinAfterMove(),this.render()}handleEraseInput(){var s,i,a;if(!this.activePuzzle||this.gameWon||this.isPaused)return;const{r:t,c:e}=this.selectedCell;((s=this.activePuzzle.givens[t])==null?void 0:s[e])>0||this.board[t][e]===0&&this.notes[t][e].length===0||(this.pushHistory(),this.board[t][e]=0,this.notes[t][e]=[],this.activeHint=null,this.lastBuiltCell=null,(a=(i=this.host).playSound)==null||a.call(i,"erase"),this.render())}handleUndo(){var e,s;if(this.history.length===0||this.gameWon||this.isPaused)return;this.redoStack.push({board:Z(this.board),notes:bt(this.notes)});const t=this.history.pop();this.board=t.board,this.notes=t.notes,this.activeHint=null,this.lastBuiltCell=null,(s=(e=this.host).playSound)==null||s.call(e,"click"),this.render()}handleRedo(){var e,s;if(this.redoStack.length===0||this.gameWon||this.isPaused)return;this.history.push({board:Z(this.board),notes:bt(this.notes)});const t=this.redoStack.pop();this.board=t.board,this.notes=t.notes,this.activeHint=null,this.lastBuiltCell=null,(s=(e=this.host).playSound)==null||s.call(e,"click"),this.render()}handleSmartHint(){var e,s;if(!this.activePuzzle||this.gameWon||this.isPaused)return;const t=Mt(this.activePuzzle,this.board);if(t){if(this.activeHint=t,this.selectedCell={r:t.r,c:t.c},this.hintsUsedThisGame+=1,t.focusClueKey){const[i,a]=t.focusClueKey.split(":");this.activeSightRay={side:i,index:Number(a)||0}}(s=(e=this.host).playSound)==null||s.call(e,"hint"),this.render()}}applyActiveHintMove(){var i,a,w;if(!this.activeHint||!this.activePuzzle||this.gameWon)return;const{r:t,c:e,value:s}=this.activeHint;((i=this.activePuzzle.givens[t])==null?void 0:i[e])>0||(this.pushHistory(),this.board[t][e]=s,this.notes[t][e]=[],this.lastBuiltCell={r:t,c:e,seq:++this.buildAnimSeq},this.activeHint=null,(w=(a=this.host).playSound)==null||w.call(a,"place",{floors:s,maxFloors:this.activePuzzle.size}),this.checkWinAfterMove(),this.render())}toggleSightRayFromSelection(){var t,e;this.activePuzzle&&(this.activeSightRay?this.activeSightRay.side==="left"||this.activeSightRay.side==="right"?this.activeSightRay={side:"top",index:this.selectedCell.c}:this.activeSightRay=null:this.activeSightRay={side:"left",index:this.selectedCell.r},(e=(t=this.host).playSound)==null||e.call(t,"click"),this.render())}checkWinAfterMove(){var a,w,y,g,o,c,u;if(!this.activePuzzle||this.gameWon||!ut(this.activePuzzle,this.board).isSolved)return;const e=new Date().toISOString().slice(0,10);if(this.activeMode==="blitz"){this.blitzSolvedCount+=1,this.blitzScore+=180+Math.max(0,25-this.hintsUsedThisGame*20),this.blitzScore>this.stats.bestBlitzScore&&(this.stats.bestBlitzScore=this.blitzScore);const p=`TWR-BLITZ-${Date.now()}-${this.blitzSolvedCount}`,C=D(4,"easy",p,{title:`⚡ Blitz Kule #${this.blitzSolvedCount+1}`});(w=(a=this.host).playSound)==null||w.call(a,"win");const z=Et(this.stats,{elapsedSec:this.elapsedSeconds,hintsUsed:this.hintsUsedThisGame,size:4,isDaily:!1});z.length>0&&(this.stats.blueprintGems+=z.length),it(this.stats),Q("towers_solve"),this.hintsUsedThisGame===0&&Q("no_hint_solve"),this.startPuzzleSession(C,"blitz",null,{resetSeries:!1});return}if(this.activeMode==="endless"){this.endlessWave>this.stats.bestEndlessWave&&(this.stats.bestEndlessWave=this.endlessWave),this.endlessWave+=1;const p=wt(this.stats,{puzzleId:this.activePuzzle.id,size:this.activePuzzle.size,difficulty:this.activePuzzle.difficulty,elapsedSec:this.elapsedSeconds,hintsUsed:this.hintsUsedThisGame});this.stats=p.nextStats,Q("towers_solve"),this.hintsUsedThisGame===0&&Q("no_hint_solve"),this.gameWon=!0,this.stopTimer(),this.lastWinSummary={starsEarned:p.starsEarned,xpGain:p.xpEarned,blueprintGain:p.gemsEarned,leveledUp:p.leveledUp,newlyUnlockedAchievements:p.newlyUnlockedAchievements},this.activeModal="victory",(g=(y=this.host).playSound)==null||g.call(y,"win");return}this.activeChallengeKind==="zoning"?this.stats.zoningSolvedCount=(this.stats.zoningSolvedCount||0)+1:this.activeChallengeKind==="fog"?this.stats.fogSolvedCount=(this.stats.fogSolvedCount||0)+1:this.activeChallengeKind==="survival"&&(this.survivalStreak+=1,this.stats.survivalClearsCount=(this.stats.survivalClearsCount||0)+1);let s;if(this.activeChallengeKind==="weekly_cup"&&this.activeCupStageIdx!==null){const p=yt(),C=Tt(this.activePuzzle.size,this.elapsedSeconds,this.hintsUsedThisGame);s=C;const z=this.stats.weeklyCupKey,S=z===p&&Array.isArray(this.stats.weeklyCupScores)?[...this.stats.weeklyCupScores]:[0,0,0],x=z===p&&Array.isArray(this.stats.weeklyCupRewarded)?[...this.stats.weeklyCupRewarded]:[!1,!1,!1];S[this.activeCupStageIdx]=Math.max(S[this.activeCupStageIdx]||0,C),x[this.activeCupStageIdx]=!0,this.stats.weeklyCupKey=p,this.stats.weeklyCupScores=S,this.stats.weeklyCupRewarded=x}this.gameWon=!0,this.stopTimer();const i=wt(this.stats,{puzzleId:((o=this.activeCampaignLevel)==null?void 0:o.id)||this.activePuzzle.id,size:this.activePuzzle.size,difficulty:this.activePuzzle.difficulty,elapsedSec:this.elapsedSeconds,hintsUsed:this.hintsUsedThisGame,isDaily:this.activeMode==="daily",dailyDateKey:this.activeMode==="daily"?e:void 0,campaignLevel:this.activeCampaignLevel?{goldSec:this.activeCampaignLevel.goldSec,silverSec:this.activeCampaignLevel.silverSec}:null});this.stats=i.nextStats,Q("towers_solve"),this.hintsUsedThisGame===0&&Q("no_hint_solve"),this.activeChallengeKind==="weekly_cup"&&Q("duel_or_cup"),this.lastWinSummary={starsEarned:i.starsEarned,xpGain:i.xpEarned,blueprintGain:i.gemsEarned,leveledUp:i.leveledUp,newlyUnlockedAchievements:i.newlyUnlockedAchievements,cupScore:s},this.activeModal="victory",(u=(c=this.host).playSound)==null||u.call(c,"win")}getUnlockedCampaignIndex(){let t=-1;for(let e=0;e<K.length;e++)this.stats.solvedIds.includes(K[e].id)&&(t=e);return Math.min(K.length-1,t+1)}renderInto(t){var a,w,y,g;const e=typeof window<"u"?window.innerWidth>=900:!0;this.lastDesktopMode=e;const s=((w=(a=this.host).renderTitlebar)==null?void 0:w.call(a))||"",i=this.inBoardView&&this.activePuzzle?this.renderBoardScreenHTML():this.renderHubScreenHTML(e);t.innerHTML=`
      ${s}
      <div class="screen-body ${this.inBoardView?"towers-board-body":"menu-mode towers-menu-mode"}" id="towers-screen">
        ${i}
        ${this.renderActiveModal()}
      </div>
    `,(g=(y=this.host).bindTitlebarEvents)==null||g.call(y),this.bindEvents(t)}renderHubScreenHTML(t){var z,S,x,A,B,n,h,d;const e=this.host.getUsername(),s=this.host.getPilotTag(),i=this.host.isBetaChannel(),a=((S=(z=this.host).getCloudSynced)==null?void 0:S.call(z))??!1,w=((A=(x=this.host).canQuit)==null?void 0:A.call(x))??!1,y=ft(this.stats.architectXp),g=j.find(v=>v.id===this.stats.equippedCharacterId)||j[0],o=Lt(this.stats),c=(this.stats.solvedIds||[]).filter(v=>K.some($=>$.id===v)).length,u=((n=(B=this.host).getSocialAttentionCount)==null?void 0:n.call(B))??0,p=((d=(h=this.host).getAudioSettings)==null?void 0:d.call(h))??{soundEnabled:!0,musicEnabled:!0},C=[{id:"campaign",icon:"🏙️",label:"Şehir Haritası",badge:`${c}/60`},{id:"challenges",icon:"🚧",label:"Challenge & Kupa",badge:"3+1"},{id:"daily",icon:"🧱",label:"Günlük Bina",badge:this.stats.dailyStreak>0?`🔥${this.stats.dailyStreak}`:""},{id:"blitz",icon:"⚡",label:"Kule Blitz",badge:""},{id:"endless",icon:"🏗️",label:"Sonsuz İnşaat",badge:""},{id:"custom",icon:"🎲",label:"Serbest Mimari",badge:""}];return`
      <header class="main-menu-topbar towers-menu-topbar">
        <div class="topbar-left">
          <button type="button" class="arcade-return-chip" id="btn-towers-back-hub" title="1000in1 Kaset Odasına Dön">🕹️ Kaset</button>
          <div class="topbar-desktop-telemetry">
            <span class="topbar-sector-pill towers-sector-pill">🧱 TOWERS • ${c}/${K.length} Mahalle • ⭐ ${o}/${K.length*3}</span>
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
            <div class="towers-architect-avatar" style="border-color:${g.accentColor}">
              ${J(g.id,46)}
            </div>
            <div class="towers-architect-info">
              <div class="towers-architect-head">
                <span class="towers-architect-name">${T(g.name)}</span>
                <span class="towers-architect-role">${T(g.title)}</span>
                <span class="towers-perk-chip">🧱 Güç +${g.powerScore}</span>
              </div>
              <div class="towers-xp-bar-wrap">
                <div class="towers-xp-labels">
                  <span><strong>Mimar LVL ${y.level}</strong> • ${T(y.title)}</span>
                  <span>${this.stats.architectXp>=9e5?"MAX (Beta Sandbox)":`${y.currentXp} / ${y.nextLevelXp} XP (%${y.progressPct})`}</span>
                </div>
                <div class="towers-xp-track">
                  <div class="towers-xp-fill" style="width:${y.progressPct}%"></div>
                </div>
              </div>
            </div>
          </div>

          <div class="towers-Currencies-row">
            <div class="towers-stat-chip"><span class="lbl">Proje Kristali</span><strong class="val">${this.stats.blueprintGems>=9e8?"♾️ Beta":`💠 ${this.stats.blueprintGems}`}</strong></div>
            <div class="towers-stat-chip"><span class="lbl">Mahalle</span><strong class="val">🏘️ ${c} / 60</strong></div>
            <div class="towers-stat-chip"><span class="lbl">Yıldız</span><strong class="val">⭐ ${o}</strong></div>
            <div class="towers-stat-chip"><span class="lbl">Başarım</span><strong class="val">🏅 ${this.stats.unlockedAchievements.length}/24</strong></div>
          </div>
        </section>

        ${t?"":`
          <div class="towers-mobile-mode-strip" role="tablist">
            ${C.map(v=>`
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
              ${u>0?`<b class="social-nav-badge" style="display:inline-flex;">${u}</b>`:""}
            </button>
            <div class="discord-nav-divider" aria-hidden="true"></div>
          </div>

          <div class="discord-single-links">
            ${C.map(v=>`
              <button type="button" class="bottom-nav-tab ${this.activeTab===v.id?"active":""}" data-towers-tab="${v.id}">
                <span class="discord-nav-indicator" aria-hidden="true"></span>
                <span class="tab-icon">${v.icon}</span>
                <span class="tab-label">${v.label}</span>
                ${v.badge?`<span class="tab-badge">${T(v.badge)}</span>`:""}
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
              <span class="tab-badge">${this.stats.unlockedAchievements.length}/${gt.length}</span>
            </button>
          </div>

          <div class="desktop-sidebar-footer discord-user-dock">
            <div class="discord-voice-ship-strip">
              <div class="sidebar-ship-preview">
                ${J(g.id,30)}
              </div>
              <div class="discord-voice-ship-info">
                <span class="discord-conn-green">● Şantiye Hazır</span>
                <small class="discord-conn-sub">LVL ${y.level} • ${T(g.name)}</small>
              </div>
              <button type="button" class="sidebar-hangar-mini-btn" id="btn-towers-workshop">🏗️ Atölye</button>
            </div>

            <div class="discord-user-bar">
              <button type="button" class="discord-user-identity profile-badge" id="btn-towers-open-profile" title="Ortak Oyuncu Kimliği">
                <div class="discord-user-avatar">
                  ${J(g.id,28)}
                  <span class="discord-presence-dot ${a?"online":"guest"}"></span>
                </div>
                <div class="discord-user-meta">
                  <strong class="discord-user-nick">${T(e)}<small>#${T(s)}</small></strong>
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
    `}renderTabContent(){if(this.activeTab==="campaign"){const t=this.getUnlockedCampaignIndex(),e=K[t]||K[0],s=K.filter(o=>o.episode===this.selectedEpisode),i={1:"1. Evre: Kırmızı Tuğla Mahallesi (4×4 – 6×6)",2:"2. Evre: İmarlı Tarihi Semt (4×4 – 7×7)",3:"3. Evre: Eski Saat Meydanı (5×5 – 7×7)",4:"4. Evre: Sisli Konaklar (5×5 – 8×8)",5:"5. Evre: Büyük Metropol (6×6 – 8×8)"},a=dt(this.stats.equippedFacadeId,this.stats.equippedRoofId),w=Rt(s,this.stats,a,this.stats.equippedRoofId,t,o=>K.findIndex(c=>c.id===o)),y=s.map((o,c)=>{const u=K.findIndex(h=>h.id===o.id),p=this.stats.solvedIds.includes(o.id),C=u<=t||p,z=this.stats.levelStars[o.id]||0,S=$t(p,C,z),x=this.stats.bestTimesSec[o.id],A=o.difficulty==="easy"?"Kolay":o.difficulty==="medium"?"Orta":"Zor",B=S==="gold"?"Lüks Altın Konak":S==="silver"?"Klasik Tuğla Apartman":S==="bronze"?"Mahalle Gecekondusu":S==="active"?"Aktif İnşaat Parseli":"Kilitli Boş Arsa",n=o.challengeKind==="zoning"?'<span class="street-mech-tag zoning">🧱 İmar Kısıtı</span>':o.challengeKind==="fog"?'<span class="street-mech-tag fog">🌫️ Sisli Sokak</span>':"";return{lvl:o,relIdx:c,isCompleted:p,isUnlocked:C,stars:z,tier:S,tierTitle:B,mechPill:n,diffBadge:A,bestSec:x,isLandmark:c===s.length-1}}),g=Gt(y,a,this.stats.equippedRoofId,rt,T);return`
        <div class="towers-campaign-wrap">
          <div class="towers-campaign-header">
            <div>
              <h2>🏙️ Tuğla Şehir Cadde Seferi (60 Mahalle)</h2>
              <p>Her parsel boş arsa başlar! Bölüm bitince madalyana göre sokağa <b>Gecekondu ★</b>, <b>Apartman ★★</b> veya <b>Lüks Konak ★★★</b> dikilir.</p>
            </div>
            <button id="btn-towers-play-next" class="towers-primary-cta" data-start-campaign="${e.id}">
              ▶️ Sıradaki Parsel: #${T(e.code)} (${T(e.cityName)})
            </button>
          </div>

          <div class="towers-episode-tabs">
            ${[1,2,3,4,5].map(o=>`
              <button type="button" class="towers-ep-btn ${this.selectedEpisode===o?"active":""}" data-towers-ep="${o}">
                ${T(i[o])}
              </button>
            `).join("")}
          </div>

          <section class="towers-street-panorama-card" aria-label="Mahalle Caddesi Silüeti">
            <div class="street-panorama-head">
              <strong>🛣️ ${T(i[this.selectedEpisode]||"")}</strong>
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
            ${g}
          </div>
        </div>
      `}if(this.activeTab==="challenges"){const t=yt(),e=kt(t),s=this.stats.weeklyCupKey===t&&Array.isArray(this.stats.weeklyCupScores)?this.stats.weeklyCupScores:[0,0,0];return`
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
              <span class="towers-cup-total">Toplam: ${s[0]+s[1]+s[2]} P</span>
            </div>
            <div class="towers-cup-grid">
              ${e.map(i=>{const a=s[i.index]||0;return`
                    <div class="towers-cup-stage ${a>0?"done":""}">
                      <div class="stage-top"><strong>${i.label}</strong><span>${i.size}×${i.size}</span></div>
                      <small>${T(i.subtitle)}</small>
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
              <input id="inp-towers-custom-seed" class="towers-seed-input" type="text" placeholder="Örn: TWR-5-ORTA-2026" value="${T(this.customSeedInput)}" />
            </div>
          </div>
          <button id="btn-towers-start-custom" class="towers-primary-cta">🎲 ${this.customSize}×${this.customSize} İnşaata Başla</button>
        </div>
      </div>
    `}getArchitectSpeechState(t,e,s){var y;const i={char_apprentice:{start:"Arsayı inceledim, köşelere sağlam temeli atalım da rezidans yükselsin!",mid:"Güzel gidiyoruz! Bakalım hangi parsele 4 katlı dikiyoruz?",near:"Son birkaç parsel kaldı, tapuları teslim etmeye hazırız!",hint:"Bak bu kare boş duruyor; dediğim katı tam şuraya dikelim!",warn:"Hop hemşerim! Aynı sırada aynı kattan iki bina yan yana dikilmez.",sight:"Kaldırımdan bakınca öndeki küçük katlar büyük kulenin arkasında gizlenir.",win:"İşte bu! Bu sokağa yaptığım en kârlı proje oldu!"},char_planner:{start:"Vakıf hanı nizamıyla önce en belirgin kenar bakış sayılarını çözelim.",mid:"Satır ve sütun simetrisi harika oturuyor, ölçüyle devam edelim.",near:"Son ince rötuşlar — taş cephe silüetimiz tamamlanmak üzere.",hint:"Cetvel ve gönyeyle hesapladım; bu parsele işaretli kat tam oturuyor.",warn:"Dikkat: Sokak hizasında veya kenar bakışında bir ölçü sapması var.",sight:"Ön cepheden görünen kat sayısı kadar kademeli yükseliş şarttır.",win:"Mükemmel denge ve zarafet — şehrin tarihi dokusu şenlendi."},char_skyline:{start:"Düz bloklar sıkıcı; katları doğanın kendi basamakları gibi dizelim!",mid:"Mozaik taşları yerine oturuyor, her kat silüete renk katıyor.",near:"Az kaldı! Çatılar gökyüzüne doğru kıvrılmaya hazır.",hint:"Görüş ışığı tam bu kareyi işaret ediyor — sıradaki katı koy!",warn:"Burada bir uyumsuzluk var; doğa ve statik kurallar çakışıyor.",sight:"Bakış çizgisinde sadece kendinden öncekinden yüksek kuleler parlar!",win:"Masalsı bir mahalle yarattın — her çatı ayrı bir sanat eseri!"},char_neon:{start:"Görüş akslarını oku; boşluklardaki en yüksek kule yerini ele verecektir.",mid:"Harika akışkanlık — blokların ritmi yavaş yavaş şekilleniyor.",near:"Ufuk çizgisi netleşti, son kuleleri yerleştirip silüeti kilitle.",hint:"Parametrik kesişim noktası belli: önerdiğim katı uygula.",warn:"Çakışma algılandı; yükseklik eğrisini düzeltmemiz gerekiyor.",sight:"Görünen kuleleri tek tek izleyip arkada kalanları eleyebilirsin.",win:"Ufuk çizgisini baştan yazdık — cesur ve kusursuz!"},char_quantum:{start:"İnsan ölçeğinde ferah sokaklar için sabırla önce kesin kareleri bulalım.",mid:"Mahalle nefes almaya başladı; komşu parsellere ışık bırakalım.",near:"Huzurlu bir son dokunuş kaldı, acele etmeden tamamlayalım.",hint:"Bilge bir yaklaşımla bakarsak bu karede başka kat barınamaz.",warn:"Bir kat fazla veya tekrarlı görünüyor; sakince gözden geçirelim.",sight:"Göz hizası ne diyorsa sokak düzeni de ona uymalıdır.",win:"Eline sağlık! Hem ışığı hem sıcaklığı yerinde, yaşanası bir sokak."},char_emperor:{start:"Evlat, önce taşların temel aksını kur; yüksek kubbeler yerini hemen belli eder.",mid:"Mizan ve tenasüp yerli yerinde, sokağın yükü sağlam dağılıyor.",near:"Son taşlar kaldı; bu sokağın da külliyesi tarihe geçecek.",hint:"Hesap şaşmaz: kenar ve sıra dengesine göre buraya tek kat uyar.",warn:"Durakla ve bak evlat; iki aynı boy sütun bir sırada bulunmaz.",sight:"Göz önünden arkaya yükselen her kule sırrını açık eder.",win:"Aferin! Koca Sinan usulünce kusursuz statik ve silüet kurdun!"}},a=i[t]||i.char_apprentice;if(this.activeHint)return{tone:"hint",text:a.hint,winQuote:a.win};if(e)return{tone:"warn",text:a.warn,winQuote:a.win};if(this.activeSightRay)return{tone:"hint",text:a.sight,winQuote:a.win};if(s<=Math.max(3,Math.ceil((((y=this.activePuzzle)==null?void 0:y.size)||4)*.75)))return{tone:"normal",text:a.near,winQuote:a.win};const w=this.activePuzzle?this.activePuzzle.size*this.activePuzzle.size-this.activePuzzle.givens.flat().filter(g=>g>0).length:16;return s<w*.75?{tone:"normal",text:a.mid,winQuote:a.win}:{tone:"normal",text:a.start,winQuote:a.win}}renderBoardScreenHTML(){var B,n;const t=this.activePuzzle,e=t.size,s=ut(t,this.board),i=j.find(h=>h.id===this.stats.equippedCharacterId)||j[0],a=F.find(h=>h.id===this.stats.equippedFacadeId)||F[0],w=F.find(h=>h.id===this.stats.equippedRoofId)||F[5],y=dt(a.id,w.id),g=new Int32Array(e+1);let o=0;for(let h=0;h<e;h++)for(let d=0;d<e;d++){const v=this.board[h][d];v>=1&&v<=e?g[v]++:o++}const c=s.duplicateKeys.size>0||s.zoningViolationKeys.size>0||s.violatedClueKeys.size>0,u=this.getArchitectSpeechState(i.id,c,o),p=new Map;let C="";if(this.activeSightRay){const{side:h,index:d}=this.activeSightRay,v=!!((n=(B=t.hiddenCluesMask)==null?void 0:B[h])!=null&&n[d]),$=v?0:t.clues[h][d],k=[];for(let E=0;E<e;E++){let q=d,I=E;h==="top"?(q=E,I=d):h==="bottom"?(q=e-1-E,I=d):h==="left"?(q=d,I=E):(q=d,I=e-1-E),k.push({r:q,c:I})}const M=Bt(k,this.board,$,h,d);M.visibleCells.forEach(E=>p.set(`${E.r},${E.c}`,"visible")),M.hiddenCells.forEach(E=>p.set(`${E.r},${E.c}`,"blocked")),C=`
        <div class="towers-sight-banner" id="towers-sight-banner">
          <span>👁️ <strong>Görüş Hattı (${h==="top"?`${d+1}. Sütun (Üstten ▾)`:h==="bottom"?`${d+1}. Sütun (Alttan ▴)`:h==="left"?`${d+1}. Satır (Soldan ▸)`:`${d+1}. Satır (Sağdan ◂)`}):</strong> ${v?"Sisli İpucu (?)":`Hedef = <b>${$||"Yok"}</b>`} • <b class="sight-ok">Görüldü: ${M.visibleCells.length}</b> • <b class="sight-hid">Örtüldü: ${M.hiddenCells.length}</b></span>
          <button type="button" id="btn-towers-clear-sight" class="towers-mini-btn">Kapat ✕</button>
        </div>
      `}const z=this.activeMode==="campaign"&&this.activeCampaignLevel?`🏘️ #${this.activeCampaignLevel.code}: ${this.activeCampaignLevel.cityName}`:this.activeMode==="daily"?"🧱 Günlük Bina":this.activeMode==="endless"?`🏗️ Dalga #${this.endlessWave}`:this.activeMode==="blitz"?`⚡ Blitz: ${this.blitzScore} P`:this.activeChallengeKind==="zoning"?"🚧 İmar Kısıtı":this.activeChallengeKind==="fog"?"🌫️ Sisli Sokak":this.activeChallengeKind==="survival"?"🪖 3 Baret Hayatta Kalma":this.activeChallengeKind==="weekly_cup"?`🏆 Kupa Etabı #${(this.activeCupStageIdx??0)+1}`:`🎲 Serbest (${e}×${e})`,S=(h,d)=>{var $,k;if((k=($=t.hiddenCluesMask)==null?void 0:$[h])!=null&&k[d])return"fogged";const v=`${h}:${d}`;return s.violatedClueKeys.has(v)?"violated":s.satisfiedClueKeys.has(v)?"satisfied":"pending"},x=(h,d,v)=>{var q,I,G,W;const $=!!((I=(q=t.hiddenCluesMask)==null?void 0:q[h])!=null&&I[d]),k=t.clues[h][d],M=S(h,d),P=((G=this.activeSightRay)==null?void 0:G.side)===h&&((W=this.activeSightRay)==null?void 0:W.index)===d,E=$?"🌫️":k>0?String(k):"·";return`
        <button
          type="button"
          class="towers-clue-cell ${h} ${M} ${P?"active-ray":""}"
          data-towers-clue="${h}-${d}"
          title="${$?"Sisli İpucu":"Görüş Hattını Göster / Gizle"}"
        >
          ${h==="right"||h==="bottom"?`<span class="clue-arrow">${v}</span><span class="clue-num">${E}</span>`:`<span class="clue-num">${E}</span><span class="clue-arrow">${v}</span>`}
        </button>
      `},A=!!(this.activeHint||C);return`
      <div class="towers-board-screen ${A?"has-banner":""}" id="towers-board-screen">
        <div class="towers-board-hud">
          <div class="hud-left-btns">
            <button type="button" id="btn-towers-leave-board" class="towers-back-map-btn">⬅️ Menü</button>
            <button type="button" id="btn-towers-pause" class="towers-back-map-btn">${this.isPaused?"▶️ Sürdür":"⏸️ Duraklat"}</button>
          </div>

          <div class="towers-hud-center">
            <span class="towers-hud-title">${T(z)}</span>
            <span class="towers-hud-sub">${e}×${e} • ${T(a.name)}</span>
          </div>

          <div class="towers-hud-metrics">
            ${this.activeChallengeKind==="survival"?`<span class="towers-hud-pill survival-lives">${"🪖".repeat(this.survivalLives)}${"⚫".repeat(Math.max(0,3-this.survivalLives))}</span>`:""}
            <span class="towers-hud-pill" id="towers-hud-timer">
              ⏱️ ${this.activeMode==="blitz"?rt(this.blitzRemainingSeconds):rt(this.elapsedSeconds)}
            </span>
            <button type="button" id="btn-towers-sight-toggle" class="towers-hud-pill btn-pill ${this.activeSightRay?"active":""}" title="Görüş Hattını İncele (V)">
              👁️ Görüş
            </button>
            ${this.host.isBetaChannel()?'<button type="button" id="btn-towers-beta-lab" class="towers-beta-chip">🧪</button>':""}
          </div>
        </div>

        ${this.activeHint?"":C}

        ${A?"":`<div class="towers-clue-guide-strip" aria-hidden="true">
          <span>👁️ <b>Kenar sayıları:</b> Ok yönünden bakınca görünen bina sayısıdır • Sayıya dokun = görüşü çiz</span>
        </div>`}

        ${this.activeHint?`
          <div class="towers-hint-banner" id="towers-hint-banner">
            <div class="towers-hint-text">
              <span class="hint-kind-pill ${this.activeHint.isCorrection?"fix":"deduce"}">${this.activeHint.isCorrection?"🔧 DÜZELTME":"🔍 İPUCU"}</span>
              <strong>${T(this.activeHint.ruleTitle)}:</strong> ${T(this.activeHint.message)}
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
            ${Array.from({length:e},(h,d)=>x("top",d,"▼")).join("")}
            <div class="towers-corner-spacer"></div>

            ${Array.from({length:e},(h,d)=>{const v=Array.from({length:e},($,k)=>{var tt,et,l,m,f,L,H,U,N,O,st;const M=this.board[d][k],P=t.givens[d][k]>0,E=this.selectedCell.r===d&&this.selectedCell.c===k,q=s.duplicateKeys.has(`${d},${k}`),I=s.zoningViolationKeys.has(`${d},${k}`),G=((et=(tt=t.maxHeightLimits)==null?void 0:tt[d])==null?void 0:et[k])||0,W=((l=this.activeHint)==null?void 0:l.r)===d&&((m=this.activeHint)==null?void 0:m.c)===k,lt=!!((f=this.activeHint)!=null&&f.focusLine)&&(((H=(L=this.activeHint)==null?void 0:L.focusLine)==null?void 0:H.kind)==="row"&&this.activeHint.focusLine.index===d||((N=(U=this.activeHint)==null?void 0:U.focusLine)==null?void 0:N.kind)==="col"&&this.activeHint.focusLine.index===k),Y=p.get(`${d},${k}`)||"",X=this.notes[d][k],ot=M>0&&((O=this.lastBuiltCell)==null?void 0:O.r)===d&&((st=this.lastBuiltCell)==null?void 0:st.c)===k;return`
                  <div
                    class="towers-cell ${M>0?"has-tower":"empty"} ${P?"given":""} ${E?"selected":""} ${q||I?"conflict":""} ${W?"hint-target":""} ${lt&&!W?"hint-focus-line":""} ${G>0?"zoned":""} ${ot?"just-built":""} ${Y?`sight-${Y}`:""}"
                    data-towers-cell="${d}-${k}"
                    data-row="${d}"
                    data-col="${k}"
                    data-val="${M}"
                  >
                    ${W&&this.activeHint?`<span class="tower-hint-badge" aria-hidden="true">👇 ${this.activeHint.value}</span>`:""}
                    ${G>0?`<span class="tower-zone-badge" title="İmar Kısıtı: Maksimum ${G} kat">≤${G}</span>`:""}
                    ${M>0?`
                      <div class="tower-pixel-bldg-wrap">
                        ${mt(M,e,y,w.id)}
                        <span class="tower-height-badge ${P?"given-badge":""}">${M}</span>
                      </div>
                    `:X.length>0?`
                      <div class="tower-notes-grid">
                        ${Array.from({length:e},(Qt,zt)=>{const ct=zt+1;return`<span class="tower-note-item ${X.includes(ct)?"on":""}">${X.includes(ct)?ct:""}</span>`}).join("")}
                      </div>
                    `:'<span class="tower-plot-stakes" aria-hidden="true"><i></i><i></i></span>'}
                    ${Y==="visible"?'<span class="tower-sight-tag visible" title="Görüldü">👁️</span>':Y==="blocked"?'<span class="tower-sight-tag blocked" title="Önündeki yüksek bina tarafından örtüldü">⬛</span>':""}
                  </div>
                `}).join("");return`${x("left",d,"▶")}${v}${x("right",d,"◀")}`}).join("")}

            <div class="towers-corner-spacer"></div>
            ${Array.from({length:e},(h,d)=>x("bottom",d,"▲")).join("")}
            <div class="towers-corner-spacer"></div>
          </div>

          <aside class="towers-architect-assistant" aria-label="Şantiye Mimarı">
            <div class="arch-assist-head">
              <div class="arch-assist-portrait" style="border-color:${i.accentColor}">
                ${J(i.id,60)}
              </div>
              <div class="arch-assist-meta">
                <strong>${T(i.name)}</strong>
                <small>${T(i.rarityLabel)}</small>
              </div>
            </div>
            <div class="arch-assist-bubble ${u.tone==="normal"?"":u.tone}">
              “${T(u.text)}”
            </div>
            <div class="arch-assist-cosmetics">
              <span>🧱 ${T(a.name)}</span>
              <span>🏠 ${T(w.name)}</span>
            </div>
          </aside>
          </div>
        </div>

        <div class="towers-controls-dock">
          <div class="towers-numpad" role="group" aria-label="Bina Kat Yüksekliği">
            ${Array.from({length:e},(h,d)=>{const v=d+1,$=Math.max(0,e-g[v]);return`
                <button
                  type="button"
                  class="towers-num-btn ${this.noteMode?"note-active":""} ${$===0?"all-placed":""}"
                  data-towers-num="${v}"
                >
                  <span class="num-main">${v}</span>
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
    `}renderActiveModal(){if(!this.activeModal)return"";if(this.activeModal==="tutorial")return Dt({step:this.tutorialStep,miniBoard:this.tutorialMiniBoard,selectedMiniCell:this.tutorialSelectedCell,palId:{facade:this.stats.equippedFacadeId,roof:this.stats.equippedRoofId}});if(this.activeModal==="rules")return Ut();if(this.activeModal==="workshop")return Nt(this.stats);if(this.activeModal==="profile")return Ot(this.stats);if(this.activeModal==="beta-lab")return Vt(this.inBoardView);if(this.activeModal==="gameover")return Ft(this.gameOverReason);if(this.activeModal==="victory"&&this.lastWinSummary){const t=j.find(s=>s.id===this.stats.equippedCharacterId)||j[0],e=this.getArchitectSpeechState(t.id,!1,0);return jt({elapsedSeconds:this.elapsedSeconds,hintsUsed:this.hintsUsedThisGame,challengeKind:this.activeChallengeKind,architect:{id:t.id,name:t.name,title:t.title,accentColor:t.accentColor,winQuote:e.winQuote},summary:this.lastWinSummary})}return""}bindEvents(t){var s,i,a,w,y,g,o,c,u,p,C,z,S,x,A,B,n,h,d,v,$,k,M,P,E,q,I,G,W,lt,Y,X,ot,tt,et;(s=t.querySelector("#btn-towers-back-hub"))==null||s.addEventListener("click",()=>{this.stopTimer(),this.host.onBackToHub()}),(i=t.querySelector("#btn-towers-open-social"))==null||i.addEventListener("click",()=>{var l,m;(m=(l=this.host).onOpenSocialHub)==null||m.call(l)}),(a=t.querySelector("#btn-towers-open-profile"))==null||a.addEventListener("click",()=>{var l,m;(m=(l=this.host).onOpenGlobalProfile)==null||m.call(l)}),(w=t.querySelector("#btn-towers-dock-sfx"))==null||w.addEventListener("click",()=>{var l,m;(m=(l=this.host).onToggleSound)==null||m.call(l),this.render()}),(y=t.querySelector("#btn-towers-dock-music"))==null||y.addEventListener("click",()=>{var l,m;(m=(l=this.host).onToggleMusic)==null||m.call(l),this.render()}),(g=t.querySelector("#btn-towers-quit"))==null||g.addEventListener("click",()=>{var l,m;(m=(l=this.host).onQuitApp)==null||m.call(l)}),(o=t.querySelector("#btn-towers-tutorial"))==null||o.addEventListener("click",()=>{this.tutorialStep=1,this.tutorialMiniBoard=nt.map(l=>[...l]),this.tutorialSelectedCell={r:0,c:1},this.activeModal="tutorial",this.render()}),(c=t.querySelector("#btn-towers-rules"))==null||c.addEventListener("click",()=>{this.activeModal="rules",this.render()}),(u=t.querySelector("#btn-towers-workshop"))==null||u.addEventListener("click",()=>{this.activeModal="workshop",this.render()}),(p=t.querySelector("#btn-towers-profile"))==null||p.addEventListener("click",()=>{this.activeModal="profile",this.render()}),(C=t.querySelector("#btn-towers-settings"))==null||C.addEventListener("click",()=>{this.host.onOpenGlobalSettings()}),(z=t.querySelector("#btn-towers-beta-lab"))==null||z.addEventListener("click",()=>{this.activeModal="beta-lab",this.render()}),(S=t.querySelector("#btn-towers-close-modal"))==null||S.addEventListener("click",()=>{this.activeModal=null,this.render()}),t.querySelectorAll("[data-tut-step]").forEach(l=>{l.addEventListener("click",()=>{this.tutorialStep=Number(l.dataset.tutStep)||1,this.render()})}),t.querySelectorAll("[data-tut-cell]").forEach(l=>{l.addEventListener("click",()=>{var U,N,O;const[m,f]=(l.dataset.tutCell||"0-0").split("-"),L=Number(m)||0,H=Number(f)||0;((U=nt[L])==null?void 0:U[H])>0||(this.tutorialSelectedCell={r:L,c:H},(O=(N=this.host).playSound)==null||O.call(N,"click"),this.render())})}),t.querySelectorAll("[data-tut-num]").forEach(l=>{l.addEventListener("click",()=>{var H,U,N,O,st;const m=Number(l.dataset.tutNum)||0,{r:f,c:L}=this.tutorialSelectedCell;((H=nt[f])==null?void 0:H[L])>0||(this.tutorialMiniBoard[f][L]=m,m>0?(N=(U=this.host).playSound)==null||N.call(U,"place",{floors:m,maxFloors:3}):(st=(O=this.host).playSound)==null||st.call(O,"erase"),this.render())})}),(x=t.querySelector("#btn-towers-tutorial-next"))==null||x.addEventListener("click",()=>{this.tutorialStep=Math.min(3,this.tutorialStep+1),this.render()}),(A=t.querySelector("#btn-towers-tutorial-practice"))==null||A.addEventListener("click",()=>{this.activeModal=null;const l=K[0],m=D(l.size,l.difficulty,l.seed,{id:l.id,title:l.cityName,code:l.code});this.startPuzzleSession(m,"campaign",l)}),t.querySelectorAll("[data-towers-tab]").forEach(l=>{l.addEventListener("click",()=>{var f,L;const m=l.dataset.towersTab;m&&(this.activeTab=m,(L=(f=this.host).playSound)==null||L.call(f,"click"),this.render())})}),t.querySelectorAll("[data-towers-ep]").forEach(l=>{l.addEventListener("click",()=>{this.selectedEpisode=Number(l.dataset.towersEp)||1,this.render()})}),t.querySelectorAll("[data-start-campaign]").forEach(l=>{l.addEventListener("click",()=>{const m=l.dataset.startCampaign,f=K.find(H=>H.id===m);if(!f)return;const L=f.challengeKind==="zoning"||f.challengeKind==="fog"?at(f.challengeKind,f.size,f.difficulty,f.seed,{id:f.id,title:f.cityName,code:f.code}):D(f.size,f.difficulty,f.seed,{id:f.id,title:f.cityName,code:f.code});this.startPuzzleSession(L,"campaign",f)})}),(B=t.querySelector("#btn-towers-start-zoning"))==null||B.addEventListener("click",()=>{const l=at("zoning",5,"medium",`TWR-ZONE-${Date.now()}`);this.startPuzzleSession(l,"challenge")}),(n=t.querySelector("#btn-towers-start-fog"))==null||n.addEventListener("click",()=>{const l=at("fog",5,"medium",`TWR-FOG-${Date.now()}`);this.startPuzzleSession(l,"challenge")}),(h=t.querySelector("#btn-towers-start-survival"))==null||h.addEventListener("click",()=>{const l=at("survival",5,"hard",`TWR-SURV-${Date.now()}`);this.startPuzzleSession(l,"challenge")}),t.querySelectorAll("[data-towers-cup-stage]").forEach(l=>{l.addEventListener("click",()=>{const m=Number(l.dataset.towersCupStage);if(m!==0&&m!==1&&m!==2)return;const L=kt()[m],H=at(L.challengeKind==="zoning"?"zoning":"weekly_cup",L.size,L.difficulty,L.seed,{id:L.seed,title:`🏆 ${L.label}: ${L.subtitle}`});H.challengeKind="weekly_cup",this.startPuzzleSession(H,"challenge",null,{cupStageIdx:m})})}),(d=t.querySelector("#btn-towers-start-daily"))==null||d.addEventListener("click",()=>{const l=new Date().toISOString().slice(0,10),m=D(5,"medium",`TWR-DAILY-${l}`);this.startPuzzleSession(m,"daily")}),(v=t.querySelector("#btn-towers-start-endless"))==null||v.addEventListener("click",()=>{const l=this.endlessWave<=2?4:this.endlessWave<=5?5:6,m=this.endlessWave<=2?"easy":this.endlessWave<=6?"medium":"hard",f=D(l,m,`TWR-ENDLESS-W${this.endlessWave}-${Date.now()}`);this.startPuzzleSession(f,"endless")}),($=t.querySelector("#btn-towers-start-blitz"))==null||$.addEventListener("click",()=>{const l=D(4,"easy",`TWR-BLITZ-${Date.now()}-0`);this.startPuzzleSession(l,"blitz")}),t.querySelectorAll("[data-custom-size]").forEach(l=>{l.addEventListener("click",()=>{this.customSize=Number(l.dataset.customSize)||4,this.render()})}),t.querySelectorAll("[data-custom-diff]").forEach(l=>{l.addEventListener("click",()=>{this.customDifficulty=l.dataset.customDiff||"easy",this.render()})});const e=t.querySelector("#inp-towers-custom-seed");e==null||e.addEventListener("input",()=>{this.customSeedInput=e.value}),(k=t.querySelector("#btn-towers-start-custom"))==null||k.addEventListener("click",()=>{const l=this.customSeedInput.trim()||`TWR-CUSTOM-${this.customSize}-${this.customDifficulty}-${Date.now()}`,m=D(this.customSize,this.customDifficulty,l);this.startPuzzleSession(m,"custom")}),(M=t.querySelector("#btn-towers-leave-board"))==null||M.addEventListener("click",()=>{this.stopTimer(),this.inBoardView=!1,this.isPaused=!1,this.render()}),(P=t.querySelector("#btn-towers-pause"))==null||P.addEventListener("click",()=>{this.isPaused=!this.isPaused,this.render()}),(E=t.querySelector("#btn-towers-resume"))==null||E.addEventListener("click",()=>{this.isPaused=!1,this.render()}),(q=t.querySelector("#btn-towers-sight-toggle"))==null||q.addEventListener("click",()=>{this.toggleSightRayFromSelection()}),t.querySelectorAll("[data-towers-cell]").forEach(l=>{l.addEventListener("click",()=>{this.selectedCell={r:Number(l.dataset.row)||0,c:Number(l.dataset.col)||0},this.render()})}),t.querySelectorAll("[data-towers-clue]").forEach(l=>{l.addEventListener("click",()=>{const m=l.dataset.towersClue||"",[f,L]=m.split("-"),H=Number(L)||0;this.activeSightRay&&this.activeSightRay.side===f&&this.activeSightRay.index===H?this.activeSightRay=null:this.activeSightRay={side:f,index:H},this.render()})}),(I=t.querySelector("#btn-towers-clear-sight"))==null||I.addEventListener("click",()=>{this.activeSightRay=null,this.render()}),t.querySelectorAll("[data-towers-num]").forEach(l=>{l.addEventListener("click",()=>{const m=Number(l.dataset.towersNum)||1;this.handleNumberInput(m)})}),(G=t.querySelector("#btn-towers-notes-toggle"))==null||G.addEventListener("click",()=>{this.noteMode=!this.noteMode,this.render()}),(W=t.querySelector("#btn-towers-erase"))==null||W.addEventListener("click",()=>this.handleEraseInput()),(lt=t.querySelector("#btn-towers-undo"))==null||lt.addEventListener("click",()=>this.handleUndo()),(Y=t.querySelector("#btn-towers-redo"))==null||Y.addEventListener("click",()=>this.handleRedo()),(X=t.querySelector("#btn-towers-hint"))==null||X.addEventListener("click",()=>this.handleSmartHint()),(ot=t.querySelector("#btn-towers-apply-hint"))==null||ot.addEventListener("click",()=>this.applyActiveHintMove()),(tt=t.querySelector("#btn-towers-close-hint"))==null||tt.addEventListener("click",()=>{this.activeHint=null,this.activeSightRay=null,this.render()}),(et=t.querySelector("#btn-towers-reset"))==null||et.addEventListener("click",()=>{!this.activePuzzle||this.isPaused||(this.pushHistory(),this.board=Z(this.activePuzzle.givens),this.notes=Array.from({length:this.activePuzzle.size},()=>Array.from({length:this.activePuzzle.size},()=>[])),this.activeHint=null,this.lastBuiltCell=null,this.render())}),this.bindWorkshopAndMetaModals(t)}bindWorkshopAndMetaModals(t){var e,s,i,a,w,y,g;t.querySelectorAll("[data-buy-char]").forEach(o=>{o.addEventListener("click",()=>{const c=o.dataset.buyChar,u=j.find(p=>p.id===c);!u||this.stats.blueprintGems<u.costGems||(this.stats.blueprintGems-=u.costGems,this.stats.unlockedCharacterIds.includes(c)||this.stats.unlockedCharacterIds.push(c),this.stats.equippedCharacterId=c,it(this.stats),this.render())})}),t.querySelectorAll("[data-equip-char]").forEach(o=>{o.addEventListener("click",()=>{const c=o.dataset.equipChar;this.stats.unlockedCharacterIds.includes(c)&&(this.stats.equippedCharacterId=c,it(this.stats),this.render())})}),t.querySelectorAll("[data-buy-cosmetic]").forEach(o=>{o.addEventListener("click",()=>{const c=o.dataset.buyCosmetic,u=F.find(p=>p.id===c);!u||this.stats.blueprintGems<u.costGems||(this.stats.blueprintGems-=u.costGems,this.stats.unlockedCosmeticIds.includes(c)||this.stats.unlockedCosmeticIds.push(c),u.slot==="facade"?this.stats.equippedFacadeId=c:this.stats.equippedRoofId=c,it(this.stats),this.render())})}),t.querySelectorAll("[data-equip-cosmetic]").forEach(o=>{o.addEventListener("click",()=>{const c=o.dataset.equipCosmetic,u=F.find(p=>p.id===c);u&&(u.slot==="facade"?this.stats.equippedFacadeId=c:this.stats.equippedRoofId=c,it(this.stats),this.render())})}),(e=t.querySelector("#btn-towers-preset-max"))==null||e.addEventListener("click",()=>{this.stats=pt("unlock_all"),this.activeModal=null,this.render()}),(s=t.querySelector("#btn-towers-preset-mid"))==null||s.addEventListener("click",()=>{this.stats=pt("classic_sandbox"),this.activeModal=null,this.render()}),(i=t.querySelector("#btn-towers-preset-reset"))==null||i.addEventListener("click",()=>{this.stats=pt("fresh_lvl1"),this.activeModal=null,this.render()}),(a=t.querySelector("#btn-towers-instant-solve"))==null||a.addEventListener("click",()=>{this.activePuzzle&&(this.activeModal=null,this.board=Z(this.activePuzzle.solution),this.checkWinAfterMove(),this.render())}),(w=t.querySelector("#btn-towers-retry-board"))==null||w.addEventListener("click",()=>{this.activePuzzle&&(this.activeModal=null,this.startPuzzleSession(this.activePuzzle,this.activeMode,this.activeCampaignLevel,{resetSeries:!0,cupStageIdx:this.activeCupStageIdx}))}),(y=t.querySelector("#btn-towers-win-map"))==null||y.addEventListener("click",()=>{this.activeModal=null,this.inBoardView=!1,this.render()}),(g=t.querySelector("#btn-towers-win-next"))==null||g.addEventListener("click",()=>{if(this.activeModal=null,this.activeMode==="campaign"&&this.activeCampaignLevel){const o=K.findIndex(p=>p.id===this.activeCampaignLevel.id),c=K[Math.min(K.length-1,o+1)];this.selectedEpisode=c.episode;const u=D(c.size,c.difficulty,c.seed,{id:c.id,title:c.cityName,code:c.code});this.startPuzzleSession(u,"campaign",c)}else if(this.activeMode==="endless"){const o=this.endlessWave<=2?4:this.endlessWave<=5?5:6,c=this.endlessWave<=2?"easy":this.endlessWave<=6?"medium":"hard",u=D(o,c,`TWR-ENDLESS-W${this.endlessWave}-${Date.now()}`);this.startPuzzleSession(u,"endless")}else this.inBoardView=!1,this.render()})}}class Jt{constructor(){b(this,"id","towers");b(this,"title","Towers");b(this,"sceneTheme","brick-city");b(this,"controller",null);b(this,"host",null)}mount(t,e){this.unmount(),this.host=e;const s={getUsername:()=>e.getUsername(),getPilotTag:()=>e.getPilotTag(),isBetaChannel:()=>e.isBetaChannel,getCloudSynced:()=>{var i;return((i=e.getCloudSynced)==null?void 0:i.call(e))??!1},canQuit:()=>{var i;return((i=e.canQuit)==null?void 0:i.call(e))??!1},renderTitlebar:()=>{var i;return((i=e.renderTitlebar)==null?void 0:i.call(e))??""},bindTitlebarEvents:()=>{var i;return(i=e.bindTitlebarEvents)==null?void 0:i.call(e)},onBackToHub:()=>e.returnToHub(),onOpenGlobalSettings:()=>e.openGlobalSettings(),onOpenGlobalProfile:()=>{var i;return(i=e.openGlobalProfile)==null?void 0:i.call(e)},onOpenSocialHub:()=>e.openSocialHub({pauseActiveGame:!0}),getSocialAttentionCount:()=>{var i;return((i=e.getSocialAttentionCount)==null?void 0:i.call(e))??0},getAudioSettings:()=>{var i;return((i=e.getAudioSettings)==null?void 0:i.call(e))??{soundEnabled:V.soundEnabled,musicEnabled:V.musicEnabled}},onToggleSound:()=>{var i;return(i=e.toggleSound)==null?void 0:i.call(e)},onToggleMusic:()=>{var i;return(i=e.toggleMusic)==null?void 0:i.call(e)},onQuitApp:()=>{var i;return(i=e.quitApp)==null?void 0:i.call(e)},playSound:(i,a)=>{i==="error"?V.playLockedBarrier():i==="win"?V.playVictory():i==="hint"?V.playGalaxyComplete(1):i==="erase"?V.playTrowelErase():i==="place"?V.playBrickPlace((a==null?void 0:a.floors)||2,(a==null?void 0:a.maxFloors)||6):V.playConsoleButton()}};this.controller=new Yt(s),this.controller.mount(t),e.setAudioScene(this.sceneTheme)}unmount(){this.controller&&(this.controller.destroy(),this.controller=null),this.host=null}refreshHostState(){var t,e;(t=this.controller)==null||t.syncStatsFromStorage(),(e=this.controller)==null||e.render()}onPauseForOverlay(){var t;(t=this.controller)==null||t.pauseIfPlaying()}handleBackNavigation(){return!this.controller||!this.host?!1:(this.controller.handleBackNavigation()||this.host.returnToHub(),!0)}}export{Jt as TowersPlugin};
