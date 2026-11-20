var kt=Object.defineProperty;var St=(o,t,e)=>t in o?kt(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;var v=(o,t,e)=>St(o,typeof t!="symbol"?t+"":t,e);import{T as q,A as it,g as ft,a as ut,l as nt,v as ot,b as xt,c as K,e as zt,s as Y,r as W,d as gt,f as wt,h as Ct,i as L,j as Et,k as yt,m as Mt,n as J,o as dt,p as I}from"./app.js";const tt={brickPrimary:"#b45309",brickSecondary:"#c2410c",mortar:"#572814",trim:"#fde68a",roofPrimary:"#f59e0b",roofAccent:"#fef3c7",windowLit:"#fef08a",windowGlass:"#38bdf8"};function rt(o,t){const e=q.find(s=>s.id===o),i=q.find(s=>s.id===t);return!e&&!i?tt:{brickPrimary:(e==null?void 0:e.primaryColor)||tt.brickPrimary,brickSecondary:(e==null?void 0:e.secondaryColor)||tt.brickSecondary,mortar:"#2b1810",trim:"#fde68a",roofPrimary:(i==null?void 0:i.primaryColor)||tt.roofPrimary,roofAccent:(i==null?void 0:i.secondaryColor)||tt.roofAccent,windowLit:"#fef08a",windowGlass:"#7dd3fc"}}function Tt(o,t,e,i,s){const r=e+Math.floor(i/2);return o==="roof_spire"?`
      <rect x="${r-3}" y="${t-6}" width="6" height="4" fill="#090d16" />
      <rect x="${r-2}" y="${t-5}" width="4" height="3" fill="${s.roofPrimary}" />
      <rect x="${r-1}" y="${t-9}" width="2" height="4" fill="#e2e8f0" />
      <rect x="${r-1}" y="${t-11}" width="2" height="2" fill="#ef4444" />
    `:o==="roof_pyramid"?`
      <rect x="${e+1}" y="${t-5}" width="${i-2}" height="3" fill="${s.roofPrimary}" />
      <rect x="${e+4}" y="${t-7}" width="${Math.max(4,i-8)}" height="2" fill="${s.roofAccent}" />
      <rect x="${r-2}" y="${t-9}" width="4" height="2" fill="${s.roofPrimary}" />
    `:o==="roof_halo"?`
      <rect x="${r-5}" y="${t-7}" width="10" height="5" fill="#090d16" />
      <rect x="${r-4}" y="${t-6}" width="8" height="4" fill="#92400e" />
      <rect x="${r-4}" y="${t-4}" width="8" height="1" fill="#334155" />
      <rect x="${r-3}" y="${t-8}" width="6" height="2" fill="${s.roofPrimary}" />
    `:o==="roof_sun"?`
      <rect x="${r-4}" y="${t-6}" width="8" height="4" fill="#334155" />
      <rect x="${r-2}" y="${t-9}" width="4" height="3" fill="${s.roofPrimary}" />
      <rect x="${r-1}" y="${t-8}" width="2" height="2" fill="#fef08a" />
      <rect x="${r}" y="${t-11}" width="1" height="2" fill="#fde047" />
    `:`
    <rect x="${e+3}" y="${t-6}" width="4" height="4" fill="#090d16" />
    <rect x="${e+4}" y="${t-5}" width="2" height="3" fill="${s.brickSecondary}" />
    <rect x="${e+4}" y="${t-8}" width="2" height="1" fill="#cbd5e1" opacity="0.65" />
  `}function pt(o,t,e,i="roof_flat"){const s=Math.max(3,t),r=Math.max(1,Math.min(s,o)),f=r/s,b=Math.round(9+f*24),h=44,a=h-b,d=r===1,p=r>=5,c=d?7:5,$=d?18:21,y=d?6:7,u=c+$,l=[];for(let S=a+2;S<h-2;S+=3){const g=Math.floor((S-a)/3)%2===0?0:3;for(let C=c+1+g;C<u-2;C+=6)l.push(`<rect x="${C}" y="${S}" width="4" height="2" fill="${e.brickSecondary}" opacity="0.62" />`);S%6===0&&y>=6&&l.push(`<rect x="${u+1}" y="${S-1}" width="${y-2}" height="1" fill="#090d16" opacity="0.35" />`)}const m=[];if(d)m.push(`<rect x="${c-1}" y="${a-2}" width="${$+y+2}" height="3" fill="#090d16" />`,`<rect x="${c}" y="${a-1}" width="${$}" height="2" fill="#dc2626" />`,`<rect x="${u}" y="${a-1}" width="${y}" height="2" fill="#991b1b" />`,`<rect x="${c+2}" y="${a+2}" width="8" height="2" fill="#ef4444" />`,`<rect x="${c+4}" y="${a+2}" width="2" height="2" fill="#fef3c7" />`,`<rect x="${c+8}" y="${a+2}" width="2" height="2" fill="#fef3c7" />`,`<rect x="${c+3}" y="${a+4}" width="6" height="4" fill="${e.windowLit}" />`,`<rect x="${c+12}" y="${a+3}" width="4" height="6" fill="#451a03" />`,`<rect x="${u+2}" y="${a+4}" width="3" height="3" fill="${e.windowGlass}" />`);else{const S=Math.min(6,r),T=Math.max(4,Math.floor((b-6)/S));for(let g=0;g<S;g++){const C=a+3+g*T;if(C+3>h-4)break;const P=(r+g)%2===0,A=(r+g*2)%3!==0;m.push(`<rect x="${c+2}" y="${C}" width="4" height="2" fill="${P?e.windowLit:e.windowGlass}" />`,`<rect x="${c+8}" y="${C}" width="4" height="2" fill="${e.windowLit}" />`,`<rect x="${c+14}" y="${C}" width="4" height="2" fill="${A?e.windowLit:e.windowGlass}" />`),m.push(`<rect x="${u+2}" y="${C-1}" width="3" height="2" fill="${A?e.windowLit:e.windowGlass}" opacity="0.82" />`)}m.push(`<rect x="${c+7}" y="${h-5}" width="6" height="5" fill="#1c1917" />`,`<rect x="${c+6}" y="${h-6}" width="8" height="1" fill="${e.trim}" />`)}const z=p?`
      <rect x="${c+7}" y="${a+1}" width="7" height="6" fill="#090d16" />
      <rect x="${c+8}" y="${a+2}" width="5" height="4" fill="#fef3c7" />
      <rect x="${c+10}" y="${a+2}" width="1" height="3" fill="#0f172a" />
      <rect x="${c+10}" y="${a+4}" width="2" height="1" fill="#0f172a" />
    `:"",k=d?"":`
      <polygon points="${c},${a} ${u},${a} ${u+y},${a-3} ${c+y},${a-3}" fill="${e.roofAccent}" />
      <rect x="${c-1}" y="${a}" width="${$+y+2}" height="2" fill="${e.roofPrimary}" />
    `;return`
    <svg class="tower-pixel-bldg-svg" viewBox="0 0 40 48" shape-rendering="crispEdges" aria-hidden="true">
      <!-- Sidewalk curb & ambient pixel drop shadow -->
      <rect x="2" y="44" width="36" height="3" fill="#090d16" />
      <rect x="3" y="43" width="34" height="2" fill="#475569" />
      <rect x="${u+y}" y="${a+2}" width="2" height="${b}" fill="#090d16" opacity="0.45" />

      <!-- Hard 1px pixel ink contour around whole 2.5D volume -->
      <rect x="${c-1}" y="${a-2}" width="${$+y+2}" height="${b+2}" fill="#090d16" />

      <!-- Front lit facade -->
      <rect x="${c}" y="${a}" width="${$}" height="${b}" fill="${e.brickPrimary}" />
      <!-- 2.5D Right shadowed side facade -->
      <rect x="${u}" y="${a-1}" width="${y}" height="${b+1}" fill="${e.brickPrimary}" />
      <rect x="${u}" y="${a-1}" width="${y}" height="${b+1}" fill="#090d16" opacity="0.38" />
      <!-- Corner seam highlight -->
      <rect x="${u-1}" y="${a}" width="1" height="${b}" fill="#090d16" opacity="0.6" />

      ${l.join("")}
      ${k}
      ${Tt(i,a-(d?1:2),c,$,e)}
      ${m.join("")}
      ${z}
    </svg>
  `}function mt(o,t,e="roof_flat",i="street-medal-bldg-svg"){return o==="locked"?`
      <svg class="${i}" viewBox="0 0 36 44" shape-rendering="crispEdges" aria-hidden="true">
        <rect x="2" y="38" width="32" height="4" fill="#1e293b" />
        <rect x="4" y="35" width="28" height="4" fill="#57361c" />
        <!-- Picket fence & barrier -->
        <rect x="6" y="30" width="2" height="7" fill="#92400e" />
        <rect x="13" y="30" width="2" height="7" fill="#92400e" />
        <rect x="21" y="30" width="2" height="7" fill="#92400e" />
        <rect x="28" y="30" width="2" height="7" fill="#92400e" />
        <rect x="6" y="32" width="24" height="2" fill="#b45309" />
        <rect x="14" y="24" width="8" height="6" fill="#090d16" />
        <rect x="15" y="25" width="6" height="4" fill="#475569" />
        <rect x="16" y="26" width="4" height="2" fill="#94a3b8" />
      </svg>
    `:o==="active"?`
      <svg class="${i}" viewBox="0 0 36 44" shape-rendering="crispEdges" aria-hidden="true">
        <rect x="2" y="38" width="32" height="4" fill="#334155" />
        <rect x="5" y="35" width="26" height="4" fill="#78350f" />
        <!-- Yellow pixel crane tower & jib -->
        <rect x="9" y="10" width="4" height="26" fill="#090d16" />
        <rect x="10" y="11" width="2" height="25" fill="#facc15" />
        <rect x="7" y="10" width="22" height="3" fill="#090d16" />
        <rect x="8" y="11" width="20" height="2" fill="#eab308" />
        <rect x="23" y="13" width="1" height="8" fill="#cbd5e1" />
        <!-- Hanging brick block -->
        <rect x="20" y="20" width="7" height="5" fill="#ea580c" />
        <rect x="21" y="21" width="5" height="2" fill="#fdba74" />
        <!-- Stacked bricks on dirt lot -->
        <rect x="15" y="31" width="11" height="5" fill="#c2410c" />
        <rect x="16" y="32" width="4" height="2" fill="#f97316" />
        <rect x="21" y="32" width="4" height="2" fill="#f97316" />
      </svg>
    `:o==="bronze"?`
      <svg class="${i}" viewBox="0 0 36 44" shape-rendering="crispEdges" aria-hidden="true">
        <rect x="2" y="39" width="32" height="3" fill="#090d16" />
        <rect x="3" y="38" width="30" height="2" fill="#57534e" />
        <!-- Humble stovepipe & smoke puffs -->
        <rect x="21" y="19" width="3" height="7" fill="#475569" />
        <rect x="22" y="15" width="2" height="2" fill="#cbd5e1" opacity="0.6" />
        <rect x="24" y="12" width="3" height="2" fill="#e2e8f0" opacity="0.45" />
        <!-- House 2.5D body -->
        <rect x="6" y="27" width="23" height="12" fill="#090d16" />
        <rect x="7" y="28" width="15" height="11" fill="#d6d3d1" />
        <rect x="7" y="34" width="15" height="5" fill="#b45309" />
        <rect x="22" y="28" width="6" height="11" fill="#78716c" />
        <!-- Corrugated patched tin roof -->
        <rect x="5" y="25" width="25" height="3" fill="#090d16" />
        <rect x="6" y="25" width="17" height="2" fill="#ea580c" />
        <rect x="11" y="25" width="4" height="2" fill="#64748b" />
        <rect x="23" y="25" width="6" height="2" fill="#9a3412" />
        <!-- Warm lantern window + small wooden door -->
        <rect x="9" y="30" width="4" height="4" fill="#facc15" />
        <rect x="16" y="31" width="4" height="8" fill="#451a03" />
        <rect x="24" y="31" width="2" height="3" fill="#fde047" />
        <!-- Small yard pot -->
        <rect x="4" y="36" width="3" height="3" fill="#16a34a" />
      </svg>
    `:o==="silver"?`
      <svg class="${i}" viewBox="0 0 36 44" shape-rendering="crispEdges" aria-hidden="true">
        <rect x="2" y="39" width="32" height="3" fill="#090d16" />
        <rect x="3" y="38" width="30" height="2" fill="#475569" />
        <!-- Rooftop antenna -->
        <rect x="16" y="10" width="1" height="6" fill="#94a3b8" />
        <rect x="14" y="12" width="5" height="1" fill="#e2e8f0" />
        <!-- Main 2.5D Apartment -->
        <rect x="6" y="16" width="24" height="23" fill="#090d16" />
        <rect x="7" y="17" width="16" height="22" fill="${t.brickPrimary}" />
        <rect x="23" y="17" width="6" height="22" fill="${t.mortar}" />
        <!-- Roof coping -->
        <rect x="6" y="15" width="24" height="3" fill="${t.roofPrimary}" />
        <!-- 3 floors of crisp windows + balcony rails -->
        <rect x="9" y="20" width="4" height="3" fill="#fde047" />
        <rect x="16" y="20" width="4" height="3" fill="#7dd3fc" />
        <rect x="9" y="25" width="4" height="3" fill="#7dd3fc" />
        <rect x="16" y="25" width="4" height="3" fill="#fde047" />
        <rect x="8" y="28" width="13" height="1" fill="#e2e8f0" />
        <rect x="9" y="30" width="4" height="3" fill="#fde047" />
        <rect x="16" y="30" width="4" height="3" fill="#fde047" />
        <rect x="25" y="21" width="2" height="3" fill="#7dd3fc" />
        <rect x="25" y="27" width="2" height="3" fill="#fde047" />
        <!-- Canopy entrance -->
        <rect x="13" y="34" width="5" height="5" fill="#1e293b" />
        <rect x="12" y="33" width="7" height="1" fill="#f59e0b" />
      </svg>
    `:`
    <svg class="${i}" viewBox="0 0 36 44" shape-rendering="crispEdges" aria-hidden="true">
      <rect x="2" y="39" width="32" height="3" fill="#090d16" />
      <rect x="3" y="38" width="30" height="2" fill="#94a3b8" />
      <!-- Golden Spire + penthouse beacon -->
      <rect x="17" y="2" width="2" height="6" fill="#fde047" />
      <rect x="14" y="6" width="8" height="4" fill="#f59e0b" />
      <rect x="12" y="9" width="12" height="2" fill="#fef08a" />
      <!-- Luxury Stone & Warm Terracotta Tower -->
      <rect x="5" y="10" width="26" height="29" fill="#090d16" />
      <rect x="6" y="11" width="18" height="28" fill="#fef3c7" />
      <rect x="7" y="12" width="16" height="27" fill="#d97706" />
      <rect x="24" y="11" width="6" height="28" fill="#78350f" />
      <!-- Marble cornice stripes -->
      <rect x="6" y="11" width="18" height="2" fill="#fde047" />
      <rect x="6" y="20" width="18" height="2" fill="#fef3c7" />
      <rect x="6" y="29" width="18" height="2" fill="#fef3c7" />
      <!-- Tall illuminated luxury suite windows -->
      <rect x="9" y="14" width="4" height="5" fill="#fef08a" />
      <rect x="17" y="14" width="4" height="5" fill="#7dd3fc" />
      <rect x="9" y="23" width="4" height="5" fill="#7dd3fc" />
      <rect x="17" y="23" width="4" height="5" fill="#fef08a" />
      <rect x="26" y="15" width="3" height="4" fill="#fef08a" />
      <rect x="26" y="24" width="3" height="4" fill="#7dd3fc" />
      <!-- Arched Gold Marble Lobby + ornamental pixel cypress trees -->
      <rect x="12" y="32" width="6" height="7" fill="#0f172a" />
      <rect x="11" y="31" width="8" height="2" fill="#facc15" />
      <rect x="3" y="32" width="3" height="6" fill="#16a34a" />
      <rect x="31" y="32" width="3" height="6" fill="#15803d" />
      ${e==="roof_halo"?'<rect x="11" y="5" width="14" height="2" fill="#38bdf8" />':""}
    </svg>
  `}function $t(o,t,e){return o?e>=3?"gold":e===2?"silver":"bronze":t?"active":"locked"}function Lt(o,t,e,i,s,r){const b=o.map((d,p)=>{const c=r(d.id),$=t.solvedIds.includes(d.id),y=c<=s,u=t.levelStars[d.id]||0,l=$t($,y,u),m=12+p*38,z=mt(l,e,i).replace(/<svg[^>]*>/,"").replace("</svg>","");return`
      <g transform="translate(${m}, 38)" class="skyline-lot-group tier-${l}">
        <g transform="scale(0.95)">${z}</g>
        <rect x="11" y="42" width="12" height="7" fill="#090d16" />
        <rect x="12" y="43" width="10" height="5" fill="${l==="gold"?"#facc15":l==="silver"?"#cbd5e1":l==="bronze"?"#d97706":l==="active"?"#38bdf8":"#475569"}" />
        <text x="17" y="47" font-size="4.5" font-weight="900" text-anchor="middle" fill="#090d16">${p+1}</text>
      </g>
    `}),h=[6,126,246,366,466].map(d=>`
      <rect x="${d}" y="58" width="2" height="22" fill="#334155" />
      <rect x="${d-1}" y="56" width="4" height="3" fill="#fef08a" />
      <rect x="${d-3}" y="59" width="8" height="6" fill="#fde047" opacity="0.16" />
    `),a=[];for(let d=8;d<480;d+=26)a.push(`<rect x="${d}" y="87" width="14" height="2" fill="#facc15" opacity="0.7" />`);return`
    <svg class="towers-street-panorama-svg" viewBox="0 0 480 96" shape-rendering="crispEdges" aria-label="Mahalle Caddesi Görünümü">
      <!-- Dusk pixel sky & faint horizon buildings -->
      <rect width="480" height="96" fill="#0b1021" />
      <rect y="28" width="480" height="24" fill="#171530" />
      <rect y="50" width="480" height="28" fill="#1e1b2e" />
      <!-- Pixel stars & moon -->
      <rect x="424" y="8" width="10" height="10" fill="#fef08a" />
      <rect x="429" y="8" width="5" height="5" fill="#0b1021" />
      <rect x="28" y="10" width="2" height="2" fill="#e2e8f0" />
      <rect x="92" y="16" width="2" height="2" fill="#fde047" />
      <rect x="174" y="9" width="2" height="2" fill="#93c5fd" />
      <rect x="262" y="14" width="2" height="2" fill="#e2e8f0" />
      <rect x="338" y="11" width="2" height="2" fill="#fde047" />
      <!-- Distant city blocks silhouette -->
      <rect x="18" y="34" width="26" height="24" fill="#131a33" />
      <rect x="64" y="28" width="22" height="30" fill="#11162b" />
      <rect x="112" y="38" width="32" height="20" fill="#151b36" />
      <rect x="182" y="25" width="24" height="33" fill="#11162b" />
      <rect x="242" y="32" width="34" height="26" fill="#151b36" />
      <rect x="314" y="26" width="22" height="32" fill="#11162b" />
      <rect x="378" y="34" width="28" height="24" fill="#151b36" />
      <!-- Sidewalk curb + asphalt avenue -->
      <rect y="75" width="480" height="7" fill="#475569" />
      <rect y="75" width="480" height="2" fill="#94a3b8" />
      <rect y="82" width="480" height="14" fill="#1e293b" />
      ${a.join("")}
      ${h.join("")}
      ${b.join("")}
    </svg>
  `}function at(o,t=36){let e="#fbbf24",i="#d97706",s="#0284c7",r="#f97316";return o==="char_planner"?(e="#34d399",i="#059669",s="#0f766e",r="#fde047"):o==="char_skyline"?(e="#f97316",i="#c2410c",s="#334155",r="#38bdf8"):o==="char_neon"?(e="#ec4899",i="#9d174d",s="#312e81",r="#22d3ee"):o==="char_quantum"?(e="#a855f7",i="#6b21a8",s="#1e1b4b",r="#c084fc"):o==="char_emperor"&&(e="#fde047",i="#b45309",s="#7c2d12",r="#fef08a"),`
    <svg width="${t}" height="${t}" viewBox="0 0 16 16" shape-rendering="crispEdges" aria-hidden="true">
      <rect width="16" height="16" fill="#0f172a" />
      <!-- Hard hat / Architect Crown -->
      <rect x="4" y="2" width="8" height="3" fill="${e}" />
      <rect x="3" y="4" width="10" height="2" fill="${i}" />
      <!-- Face -->
      <rect x="5" y="6" width="6" height="4" fill="#fdba74" />
      <rect x="6" y="7" width="1" height="1" fill="#0f172a" />
      <rect x="9" y="7" width="1" height="1" fill="#0f172a" />
      <!-- Jacket & Blueprint Tie -->
      <rect x="3" y="10" width="10" height="5" fill="${s}" />
      <rect x="7" y="10" width="2" height="4" fill="${r}" />
    </svg>
  `}function H(o){return o.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function Pt(o){const t=Math.max(0,Math.floor(o)),e=Math.floor(t/60),i=t%60;return`${String(e).padStart(2,"0")}:${String(i).padStart(2,"0")}`}const ct=[[1,3,2],[2,1,3],[3,2,1]],et=[[1,0,0],[2,1,0],[3,0,1]];function At(o){const{step:t,miniBoard:e,selectedMiniCell:i,palId:s}=o,r=rt(s.facade,s.roof),f=e.every((a,d)=>a.every((p,c)=>p===ct[d][c])),b=[3,1,2],h=[2,2,1];return`
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
                ${b.map(a=>`<div class="mini-clue"><b>${a}</b><small>▾</small></div>`).join("")}
                ${[0,1,2].map(a=>`
                  <div class="mini-clue"><b>${h[a]}</b><small>▸</small></div>
                  ${[0,1,2].map(d=>{var l;const p=((l=e[a])==null?void 0:l[d])||0,c=et[a][d]>0,$=i.r===a&&i.c===d,y=p>0&&p===ct[a][d],u=p>0&&p!==ct[a][d];return`
                        <button
                          type="button"
                          class="mini-cell ${c?"fixed":""} ${$?"selected":""} ${u?"wrong":y?"correct":""}"
                          data-tut-cell="${a}-${d}"
                        >
                          ${p>0?`<div class="mini-bldg-box">${pt(p,3,r,"roof_flat")}<span class="mini-bldg-num">${p}</span></div>`:'<span class="mini-empty-plus">+</span>'}
                        </button>
                      `}).join("")}
                `).join("")}
              </div>

              <div class="towers-tut-num-row">
                ${[1,2,3].map(a=>`
                  <button type="button" class="towers-mini-num-btn" data-tut-num="${a}">
                    🧱 ${a} Kat
                  </button>
                `).join("")}
                <button type="button" class="towers-mini-num-btn clear" data-tut-num="0">Sil</button>
              </div>
              <div class="towers-tut-status ${f?"ok":""}">
                ${f?"✅ Harika! Tüm 3×3 blok çözüldü, artık hazırsın!":`Seçili Kare: S${i.r+1}, K${i.c+1}`}
              </div>
            </div>
          </div>

          <div class="towers-modal-footer">
            ${t<3&&!f?'<button id="btn-towers-tutorial-next" class="towers-primary-cta">Sonraki Adım ➡️</button>':""}
            <button id="btn-towers-tutorial-practice" class="towers-primary-cta">
              🧱 ${f?"İlk Şehir #1-1 Başlat!":"Hemen #1-1 İle Başla"}
            </button>
          </div>
        </div>
      </div>
    </div>
  `}function Bt(){return`
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
  `}function Ht(o){const t=rt(o.equippedFacadeId,o.equippedRoofId);return`
    <div class="towers-modal-backdrop" id="towers-workshop-modal">
      <div class="towers-modal-card wide">
        <div class="towers-modal-head">
          <div>
            <h3>🏗️ Mimar &amp; Tuğla Mahalle Atölyesi</h3>
            <p>Piksel mimarını seç ve apartman cepheleri ile tarihi çatı stillerini özelleştir.</p>
          </div>
          <div class="towers-modal-balance">
            <span>Bakiye: <strong>💠 ${o.blueprintGems}</strong></span>
            <button id="btn-towers-close-modal" class="towers-close-btn">✕</button>
          </div>
        </div>

        <div class="towers-modal-body">
          <h4 class="towers-section-sub">👷 Piksel Mimar Karakterleri (6 Rol)</h4>
          <div class="towers-workshop-grid">
            ${it.map(e=>{const i=o.unlockedCharacterIds.includes(e.id),s=o.equippedCharacterId===e.id,r=o.blueprintGems>=e.costGems;return`
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
                    ${s?'<button class="towers-shop-btn equipped" disabled>✅ Aktif Mimar</button>':i?`<button class="towers-shop-btn equip" data-equip-char="${e.id}">👷 Seç</button>`:`<button class="towers-shop-btn buy" data-buy-char="${e.id}" ${r?"":"disabled"}>🔓 Aç (💠 ${e.costGems})</button>`}
                  </div>
                </div>
              `}).join("")}
          </div>

          <h4 class="towers-section-sub">🧱 Tuğla Cepheler &amp; Çatı Silüetleri</h4>
          <div class="towers-workshop-grid">
            ${q.map(e=>{const i=e.slot==="facade",s=o.unlockedCosmeticIds.includes(e.id),r=i?o.equippedFacadeId===e.id:o.equippedRoofId===e.id,f=o.blueprintGems>=e.costGems,b=i?{...t,brickPrimary:e.primaryColor,brickSecondary:e.secondaryColor}:{...t,roofPrimary:e.primaryColor,roofAccent:e.secondaryColor},h=i?o.equippedRoofId:e.id;return`
                <div class="towers-shop-item ${r?"equipped":""}">
                  <div class="towers-shop-head-row">
                    <div class="towers-shop-swatch brick-preview">
                      ${pt(4,5,b,h)}
                    </div>
                    <div class="towers-shop-info">
                      <strong>${H(e.name)}</strong>
                      <span class="role">${i?"🧱 Tuğla Cephe":"🏠 Çatı Tasarımı"}</span>
                    </div>
                  </div>
                  <p class="towers-shop-desc">${H(e.description)}</p>
                  <div class="towers-shop-action">
                    ${r?'<button class="towers-shop-btn equipped" disabled>✅ Kullanımda</button>':s?`<button class="towers-shop-btn equip" data-equip-cosmetic="${e.id}">🎨 Uygula</button>`:`<button class="towers-shop-btn buy" data-buy-cosmetic="${e.id}" ${f?"":"disabled"}>🔓 Aç (💠 ${e.costGems})</button>`}
                  </div>
                </div>
              `}).join("")}
          </div>
        </div>
      </div>
    </div>
  `}function Kt(o){const t=ft(o.architectXp),e=Object.values(o.bestTimesSec),i=e.length>0?Math.min(...e):null;return`
    <div class="towers-modal-backdrop" id="towers-profile-modal">
      <div class="towers-modal-card wide">
        <div class="towers-modal-head">
          <h3>🏆 Towers Başarımlar &amp; İstatistikler (LVL ${t.level} • ${H(t.title)})</h3>
          <button id="btn-towers-close-modal" class="towers-close-btn">✕</button>
        </div>
        <div class="towers-modal-body">
          <div class="towers-stats-summary-grid">
            <div class="towers-stat-box"><span>Çözülen Blok</span><strong>${o.totalSolved}</strong></div>
            <div class="towers-stat-box"><span>Toplam Puan</span><strong>${o.totalPoints}</strong></div>
            <div class="towers-stat-box"><span>En Hızlı Blok</span><strong>${i!==null?`${i} sn`:"—"}</strong></div>
            <div class="towers-stat-box"><span>İmar / Sis / Baret</span><strong>${(o.zoningSolvedCount||0)+(o.fogSolvedCount||0)+(o.survivalClearsCount||0)}</strong></div>
          </div>

          <h4 class="towers-section-sub">🎖️ Towers Başarımları (${o.unlockedAchievements.length} / ${ut.length})</h4>
          <div class="towers-ach-grid">
            ${ut.map(s=>`
                <div class="towers-ach-card ${o.unlockedAchievements.includes(s.id)?"unlocked":"locked"}">
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
  `}function qt(o){return`
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
            ${o?`
              <button id="btn-towers-instant-solve" class="towers-primary-cta">
                ⚡ Aktif Sokağı Anında Çöz (Beta Test)
              </button>
            `:""}
          </div>
        </div>
      </div>
    </div>
  `}function It(o){const{elapsedSeconds:t,hintsUsed:e,summary:i,challengeKind:s}=o;return`
    <div class="towers-modal-backdrop" id="towers-victory-modal">
      <div class="towers-modal-card victory">
        <div class="towers-victory-stars">${"★".repeat(i.starsEarned)+"☆".repeat(Math.max(0,3-i.starsEarned))}</div>
        <h2>🧱 İnşaat Tamamlandı!</h2>
        <p>
          Süre: <strong>${Pt(t)}</strong> • Kullanılan İpucu: <strong>${e}</strong>
        </p>

        <div class="towers-victory-rewards">
          <div class="reward-pill">✨ +${i.xpGain} Mimar XP</div>
          <div class="reward-pill">💠 +${i.blueprintGain} Proje Kristali</div>
          ${s==="weekly_cup"&&i.cupScore?`<div class="reward-pill">🏆 Kupa Puanı: ${i.cupScore}</div>`:""}
        </div>

        ${i.leveledUp?'<div class="towers-levelup-banner">🎉 MİMAR SEVİYESİ YÜKSELDİ!</div>':""}
        ${i.newlyUnlockedAchievements.length>0?`<div class="towers-ach-unlock-strip">🏅 Yeni Başarım: ${i.newlyUnlockedAchievements.map(f=>`${f.icon} ${H(f.title)}`).join(" • ")}</div>`:""}

        <div class="towers-victory-actions">
          <button id="btn-towers-win-next" class="towers-primary-cta">➡️ Devam Et / Sıradaki Sokak</button>
          <button id="btn-towers-win-map" class="towers-secondary-cta">🏙️ Haritaya Dön</button>
        </div>
      </div>
    </div>
  `}function Rt(o){return`
    <div class="towers-modal-backdrop" id="towers-gameover-modal">
      <div class="towers-modal-card victory">
        <div class="towers-victory-stars">🪖✖️</div>
        <h2>🚧 Şantiye Durduruldu!</h2>
        <p>${H(o)}</p>
        <div class="towers-victory-actions">
          <button id="btn-towers-retry-board" class="towers-primary-cta">🔄 Tekrar Dene</button>
          <button id="btn-towers-win-map" class="towers-secondary-cta">🏙️ Şehir Menüsüne Dön</button>
        </div>
      </div>
    </div>
  `}function M(o){return o.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function R(o){const t=Math.max(0,Math.floor(o)),e=Math.floor(t/60),i=t%60;return`${String(e).padStart(2,"0")}:${String(i).padStart(2,"0")}`}function N(o){return o.map(t=>[...t])}function ht(o){return o.map(t=>t.map(e=>[...e]))}class Gt{constructor(t){v(this,"host");v(this,"stats");v(this,"activeTab","campaign");v(this,"selectedEpisode",1);v(this,"activeModal",null);v(this,"tutorialStep",1);v(this,"tutorialMiniBoard",et.map(t=>[...t]));v(this,"tutorialSelectedCell",{r:0,c:1});v(this,"customSize",4);v(this,"customDifficulty","easy");v(this,"customSeedInput","");v(this,"inBoardView",!1);v(this,"isPaused",!1);v(this,"activePuzzle",null);v(this,"activeMode","campaign");v(this,"activeChallengeKind","standard");v(this,"activeCupStageIdx",null);v(this,"activeCampaignLevel",null);v(this,"board",[]);v(this,"notes",[]);v(this,"history",[]);v(this,"redoStack",[]);v(this,"selectedCell",{r:0,c:0});v(this,"noteMode",!1);v(this,"activeHint",null);v(this,"activeSightRay",null);v(this,"hintsUsedThisGame",0);v(this,"elapsedSeconds",0);v(this,"timerHandle",null);v(this,"gameWon",!1);v(this,"gameOverReason","");v(this,"endlessWave",1);v(this,"blitzRemainingSeconds",120);v(this,"blitzScore",0);v(this,"blitzSolvedCount",0);v(this,"survivalLives",3);v(this,"survivalStreak",0);v(this,"lastWinSummary",null);v(this,"keydownHandler",null);v(this,"resizeHandler",null);v(this,"lastDesktopMode",typeof window<"u"?window.innerWidth>=900:!0);v(this,"mountEl",null);this.host=t,this.stats=nt()}reloadStats(){this.stats=nt()}getStats(){return this.stats}pauseIfPlaying(){this.inBoardView&&!this.gameWon&&!this.isPaused&&(this.isPaused=!0,this.render())}syncStatsFromStorage(){this.stats=nt()}handleBackNavigation(){return this.activeModal!==null?(this.activeModal=null,this.render(),!0):this.inBoardView?this.isPaused?(this.isPaused=!1,this.render(),!0):(this.stopTimer(),this.inBoardView=!1,this.render(),!0):!1}destroy(){this.stopTimer(),this.keydownHandler&&(window.removeEventListener("keydown",this.keydownHandler),this.keydownHandler=null),this.resizeHandler&&(window.removeEventListener("resize",this.resizeHandler),this.resizeHandler=null)}stopTimer(){this.timerHandle!==null&&(window.clearInterval(this.timerHandle),this.timerHandle=null)}startTimer(){this.stopTimer(),this.timerHandle=window.setInterval(()=>{if(!this.inBoardView||this.gameWon||this.isPaused||this.activeModal!==null)return;if(this.elapsedSeconds+=1,this.activeMode==="blitz"&&(this.blitzRemainingSeconds=Math.max(0,this.blitzRemainingSeconds-1),this.blitzRemainingSeconds<=0)){this.stopTimer(),this.inBoardView=!1,this.render();return}const t=document.getElementById("towers-hud-timer");t&&(t.textContent=this.activeMode==="blitz"?`⏱️ ${R(this.blitzRemainingSeconds)}`:`⏱️ ${R(this.elapsedSeconds)}`)},1e3)}mount(t){this.mountEl=t,this.reloadStats(),this.attachKeyboardListener(),this.attachResizeListener(),this.renderInto(t)}render(){const t=this.mountEl||document.getElementById("towers-mount-root")||document.getElementById("app");t&&this.renderInto(t)}attachResizeListener(){this.resizeHandler&&window.removeEventListener("resize",this.resizeHandler),this.resizeHandler=()=>{const t=window.innerWidth>=900;t!==this.lastDesktopMode&&(this.lastDesktopMode=t,this.render())},window.addEventListener("resize",this.resizeHandler)}attachKeyboardListener(){this.keydownHandler&&window.removeEventListener("keydown",this.keydownHandler),this.keydownHandler=t=>{if(!this.inBoardView||!this.activePuzzle||this.activeModal!==null||this.isPaused||document.activeElement&&["INPUT","TEXTAREA"].includes(document.activeElement.tagName))return;const e=this.activePuzzle.size;if(t.key==="ArrowUp")t.preventDefault(),this.selectedCell.r=(this.selectedCell.r-1+e)%e,this.render();else if(t.key==="ArrowDown")t.preventDefault(),this.selectedCell.r=(this.selectedCell.r+1)%e,this.render();else if(t.key==="ArrowLeft")t.preventDefault(),this.selectedCell.c=(this.selectedCell.c-1+e)%e,this.render();else if(t.key==="ArrowRight")t.preventDefault(),this.selectedCell.c=(this.selectedCell.c+1)%e,this.render();else if(t.key.toLowerCase()==="n")t.preventDefault(),this.noteMode=!this.noteMode,this.render();else if(t.key.toLowerCase()==="v")t.preventDefault(),this.toggleSightRayFromSelection();else if(t.key==="Backspace"||t.key==="Delete"||t.key==="0")t.preventDefault(),this.handleEraseInput();else if((t.ctrlKey||t.metaKey)&&t.key.toLowerCase()==="z")t.preventDefault(),this.handleUndo();else if((t.ctrlKey||t.metaKey)&&t.key.toLowerCase()==="y")t.preventDefault(),this.handleRedo();else if(/^[1-8]$/.test(t.key)){const i=Number(t.key);i>=1&&i<=e&&(t.preventDefault(),this.handleNumberInput(i))}},window.addEventListener("keydown",this.keydownHandler)}startPuzzleSession(t,e,i=null,s){var f,b;this.activePuzzle=t,this.activeMode=e,this.activeChallengeKind=t.challengeKind||"standard",this.activeCupStageIdx=(s==null?void 0:s.cupStageIdx)??null,this.activeCampaignLevel=i,this.board=N(t.givens),this.notes=Array.from({length:t.size},()=>Array.from({length:t.size},()=>[])),this.history=[],this.redoStack=[],this.selectedCell={r:0,c:0};let r=!1;for(let h=0;h<t.size&&!r;h++)for(let a=0;a<t.size;a++)if(t.givens[h][a]===0){this.selectedCell={r:h,c:a},r=!0;break}this.activeHint=null,this.activeSightRay=null,this.hintsUsedThisGame=0,this.elapsedSeconds=0,this.gameWon=!1,this.isPaused=!1,this.gameOverReason="",this.inBoardView=!0,e==="blitz"&&(s==null?void 0:s.resetSeries)!==!1?(this.blitzRemainingSeconds=120,this.blitzScore=0,this.blitzSolvedCount=0):this.activeChallengeKind==="survival"&&(s==null?void 0:s.resetSeries)!==!1&&(this.survivalLives=3,this.survivalStreak=0),this.startTimer(),(b=(f=this.host).playSound)==null||b.call(f,"click"),this.render()}pushHistory(){this.history.push({board:N(this.board),notes:ht(this.notes)}),this.history.length>100&&this.history.shift(),this.redoStack=[]}handleNumberInput(t){var b,h,a,d,p,c,$,y,u,l,m;if(!this.activePuzzle||this.gameWon||this.isPaused)return;const{r:e,c:i}=this.selectedCell;if(((b=this.activePuzzle.givens[e])==null?void 0:b[i])>0){(a=(h=this.host).playSound)==null||a.call(h,"error");return}if(this.pushHistory(),this.activeHint=null,this.noteMode){this.board[e][i]!==0&&(this.board[e][i]=0);const z=this.notes[e][i],k=z.indexOf(t);k>=0?z.splice(k,1):(z.push(t),z.sort((S,T)=>S-T)),(p=(d=this.host).playSound)==null||p.call(d,"click"),this.render();return}if(this.board[e][i]=this.board[e][i]===t?0:t,this.notes[e][i]=[],this.board[e][i]===0){($=(c=this.host).playSound)==null||$.call(c,"erase"),this.render();return}const s=this.board[e][i],r=ot(this.activePuzzle,this.board);if(r.duplicateKeys.has(`${e},${i}`)||r.zoningViolationKeys.has(`${e},${i}`)||this.activeChallengeKind==="survival"&&s!==this.activePuzzle.solution[e][i]){if((u=(y=this.host).playSound)==null||u.call(y,"error"),this.activeChallengeKind==="survival"&&(this.survivalLives=Math.max(0,this.survivalLives-1),this.survivalLives<=0)){this.stopTimer(),this.gameOverReason="3 inşaat baretinin tamamı tükendi! Kat çakışması veya hatalı kat yerleşimi şantiyeyi durdurdu.",this.activeModal="gameover",this.render();return}}else(m=(l=this.host).playSound)==null||m.call(l,"place",{floors:s,maxFloors:this.activePuzzle.size});this.checkWinAfterMove(),this.render()}handleEraseInput(){var i,s,r;if(!this.activePuzzle||this.gameWon||this.isPaused)return;const{r:t,c:e}=this.selectedCell;((i=this.activePuzzle.givens[t])==null?void 0:i[e])>0||this.board[t][e]===0&&this.notes[t][e].length===0||(this.pushHistory(),this.board[t][e]=0,this.notes[t][e]=[],this.activeHint=null,(r=(s=this.host).playSound)==null||r.call(s,"erase"),this.render())}handleUndo(){var e,i;if(this.history.length===0||this.gameWon||this.isPaused)return;this.redoStack.push({board:N(this.board),notes:ht(this.notes)});const t=this.history.pop();this.board=t.board,this.notes=t.notes,this.activeHint=null,(i=(e=this.host).playSound)==null||i.call(e,"click"),this.render()}handleRedo(){var e,i;if(this.redoStack.length===0||this.gameWon||this.isPaused)return;this.history.push({board:N(this.board),notes:ht(this.notes)});const t=this.redoStack.pop();this.board=t.board,this.notes=t.notes,this.activeHint=null,(i=(e=this.host).playSound)==null||i.call(e,"click"),this.render()}handleSmartHint(){var e,i;if(!this.activePuzzle||this.gameWon||this.isPaused)return;const t=xt(this.activePuzzle,this.board);if(t){if(this.activeHint=t,this.selectedCell={r:t.r,c:t.c},this.hintsUsedThisGame+=1,t.focusClueKey){const[s,r]=t.focusClueKey.split(":");this.activeSightRay={side:s,index:Number(r)||0}}(i=(e=this.host).playSound)==null||i.call(e,"hint"),this.render()}}applyActiveHintMove(){var s,r,f;if(!this.activeHint||!this.activePuzzle||this.gameWon)return;const{r:t,c:e,value:i}=this.activeHint;((s=this.activePuzzle.givens[t])==null?void 0:s[e])>0||(this.pushHistory(),this.board[t][e]=i,this.notes[t][e]=[],this.activeHint=null,(f=(r=this.host).playSound)==null||f.call(r,"place",{floors:i,maxFloors:this.activePuzzle.size}),this.checkWinAfterMove(),this.render())}toggleSightRayFromSelection(){var t,e;this.activePuzzle&&(this.activeSightRay?this.activeSightRay.side==="left"||this.activeSightRay.side==="right"?this.activeSightRay={side:"top",index:this.selectedCell.c}:this.activeSightRay=null:this.activeSightRay={side:"left",index:this.selectedCell.r},(e=(t=this.host).playSound)==null||e.call(t,"click"),this.render())}checkWinAfterMove(){var r,f,b,h,a,d,p;if(!this.activePuzzle||this.gameWon||!ot(this.activePuzzle,this.board).isSolved)return;const e=new Date().toISOString().slice(0,10);if(this.activeMode==="blitz"){this.blitzSolvedCount+=1,this.blitzScore+=180+Math.max(0,25-this.hintsUsedThisGame*20),this.blitzScore>this.stats.bestBlitzScore&&(this.stats.bestBlitzScore=this.blitzScore);const c=`TWR-BLITZ-${Date.now()}-${this.blitzSolvedCount}`,$=K(4,"easy",c,{title:`⚡ Blitz Kule #${this.blitzSolvedCount+1}`});(f=(r=this.host).playSound)==null||f.call(r,"win");const y=zt(this.stats,{elapsedSec:this.elapsedSeconds,hintsUsed:this.hintsUsedThisGame,size:4,isDaily:!1});y.length>0&&(this.stats.blueprintGems+=y.length),Y(this.stats),W("towers_solve"),this.hintsUsedThisGame===0&&W("no_hint_solve"),this.startPuzzleSession($,"blitz",null,{resetSeries:!1});return}if(this.activeMode==="endless"){this.endlessWave>this.stats.bestEndlessWave&&(this.stats.bestEndlessWave=this.endlessWave),this.endlessWave+=1;const c=gt(this.stats,{puzzleId:this.activePuzzle.id,size:this.activePuzzle.size,difficulty:this.activePuzzle.difficulty,elapsedSec:this.elapsedSeconds,hintsUsed:this.hintsUsedThisGame});this.stats=c.nextStats,W("towers_solve"),this.hintsUsedThisGame===0&&W("no_hint_solve"),this.gameWon=!0,this.stopTimer(),this.lastWinSummary={starsEarned:c.starsEarned,xpGain:c.xpEarned,blueprintGain:c.gemsEarned,leveledUp:c.leveledUp,newlyUnlockedAchievements:c.newlyUnlockedAchievements},this.activeModal="victory",(h=(b=this.host).playSound)==null||h.call(b,"win");return}this.activeChallengeKind==="zoning"?this.stats.zoningSolvedCount=(this.stats.zoningSolvedCount||0)+1:this.activeChallengeKind==="fog"?this.stats.fogSolvedCount=(this.stats.fogSolvedCount||0)+1:this.activeChallengeKind==="survival"&&(this.survivalStreak+=1,this.stats.survivalClearsCount=(this.stats.survivalClearsCount||0)+1);let i;if(this.activeChallengeKind==="weekly_cup"&&this.activeCupStageIdx!==null){const c=wt(),$=Ct(this.activePuzzle.size,this.elapsedSeconds,this.hintsUsedThisGame);i=$;const y=this.stats.weeklyCupKey,u=y===c&&Array.isArray(this.stats.weeklyCupScores)?[...this.stats.weeklyCupScores]:[0,0,0],l=y===c&&Array.isArray(this.stats.weeklyCupRewarded)?[...this.stats.weeklyCupRewarded]:[!1,!1,!1];u[this.activeCupStageIdx]=Math.max(u[this.activeCupStageIdx]||0,$),l[this.activeCupStageIdx]=!0,this.stats.weeklyCupKey=c,this.stats.weeklyCupScores=u,this.stats.weeklyCupRewarded=l}this.gameWon=!0,this.stopTimer();const s=gt(this.stats,{puzzleId:((a=this.activeCampaignLevel)==null?void 0:a.id)||this.activePuzzle.id,size:this.activePuzzle.size,difficulty:this.activePuzzle.difficulty,elapsedSec:this.elapsedSeconds,hintsUsed:this.hintsUsedThisGame,isDaily:this.activeMode==="daily",dailyDateKey:this.activeMode==="daily"?e:void 0,campaignLevel:this.activeCampaignLevel?{goldSec:this.activeCampaignLevel.goldSec,silverSec:this.activeCampaignLevel.silverSec}:null});this.stats=s.nextStats,W("towers_solve"),this.hintsUsedThisGame===0&&W("no_hint_solve"),this.activeChallengeKind==="weekly_cup"&&W("duel_or_cup"),this.lastWinSummary={starsEarned:s.starsEarned,xpGain:s.xpEarned,blueprintGain:s.gemsEarned,leveledUp:s.leveledUp,newlyUnlockedAchievements:s.newlyUnlockedAchievements,cupScore:i},this.activeModal="victory",(p=(d=this.host).playSound)==null||p.call(d,"win")}getUnlockedCampaignIndex(){let t=-1;for(let e=0;e<L.length;e++)this.stats.solvedIds.includes(L[e].id)&&(t=e);return Math.min(L.length-1,t+1)}renderInto(t){var r,f,b,h;const e=typeof window<"u"?window.innerWidth>=900:!0;this.lastDesktopMode=e;const i=((f=(r=this.host).renderTitlebar)==null?void 0:f.call(r))||"",s=this.inBoardView&&this.activePuzzle?this.renderBoardScreenHTML():this.renderHubScreenHTML(e);t.innerHTML=`
      ${i}
      <div class="screen-body ${this.inBoardView?"towers-board-body":"menu-mode towers-menu-mode"}" id="towers-screen">
        ${s}
        ${this.renderActiveModal()}
      </div>
    `,(h=(b=this.host).bindTitlebarEvents)==null||h.call(b),this.bindEvents(t)}renderHubScreenHTML(t){var y,u,l,m,z,k,S,T;const e=this.host.getUsername(),i=this.host.getPilotTag(),s=this.host.isBetaChannel(),r=((u=(y=this.host).getCloudSynced)==null?void 0:u.call(y))??!1,f=((m=(l=this.host).canQuit)==null?void 0:m.call(l))??!1,b=ft(this.stats.architectXp),h=it.find(g=>g.id===this.stats.equippedCharacterId)||it[0],a=Et(this.stats),d=(this.stats.solvedIds||[]).filter(g=>L.some(C=>C.id===g)).length,p=((k=(z=this.host).getSocialAttentionCount)==null?void 0:k.call(z))??0,c=((T=(S=this.host).getAudioSettings)==null?void 0:T.call(S))??{soundEnabled:!0,musicEnabled:!0},$=[{id:"campaign",icon:"🏙️",label:"Şehir Haritası",badge:`${d}/60`},{id:"challenges",icon:"🚧",label:"Challenge & Kupa",badge:"3+1"},{id:"daily",icon:"🧱",label:"Günlük Bina",badge:this.stats.dailyStreak>0?`🔥${this.stats.dailyStreak}`:""},{id:"blitz",icon:"⚡",label:"Kule Blitz",badge:""},{id:"endless",icon:"🏗️",label:"Sonsuz İnşaat",badge:""},{id:"custom",icon:"🎲",label:"Serbest Mimari",badge:""}];return`
      <header class="main-menu-topbar towers-menu-topbar">
        <div class="topbar-left">
          <button type="button" class="arcade-return-chip" id="btn-towers-back-hub" title="1000in1 Kaset Odasına Dön">🕹️ Kaset</button>
          <div class="topbar-desktop-telemetry">
            <span class="topbar-sector-pill towers-sector-pill">🧱 TOWERS • ${d}/${L.length} Mahalle • ⭐ ${a}/${L.length*3}</span>
            ${s?'<button type="button" class="beta-badge beta-lab-trigger" id="btn-towers-beta-lab" title="Towers Beta Test Laboratuvarı">🧪 BETA LAB</button>':""}
          </div>
        </div>

        <div class="topbar-actions">
          ${t?"":`
            <button type="button" class="steam-btn" id="btn-towers-open-social" title="DM &amp; Topluluk">
              <div>💬 SOSYAL</div>
              ${p>0?`<b class="social-nav-badge" style="display:inline-flex;">${p}</b>`:""}
            </button>
            <button type="button" class="steam-btn" id="btn-towers-tutorial"><div>🎓 EĞİTİM</div></button>
            <button type="button" class="steam-btn" id="btn-towers-workshop"><div>🏗️ ATÖLYE</div></button>
            <button type="button" class="steam-btn" id="btn-towers-settings"><div>⚙️ AYAR</div></button>
          `}
          ${f?'<button type="button" class="steam-btn quit-btn" id="btn-towers-quit"><div>ÇIKIŞ</div></button>':""}
        </div>
      </header>

      <main class="main-tab-stage towers-main-stage">
        <section class="towers-architect-hero">
          <div class="towers-architect-card">
            <div class="towers-architect-avatar" style="border-color:${h.accentColor}">
              ${at(h.id,46)}
            </div>
            <div class="towers-architect-info">
              <div class="towers-architect-head">
                <span class="towers-architect-name">${M(h.name)}</span>
                <span class="towers-architect-role">${M(h.title)}</span>
                <span class="towers-perk-chip">🧱 Güç +${h.powerScore}</span>
              </div>
              <div class="towers-xp-bar-wrap">
                <div class="towers-xp-labels">
                  <span><strong>Mimar LVL ${b.level}</strong> • ${M(b.title)}</span>
                  <span>${this.stats.architectXp>=9e5?"MAX (Beta Sandbox)":`${b.currentXp} / ${b.nextLevelXp} XP (%${b.progressPct})`}</span>
                </div>
                <div class="towers-xp-track">
                  <div class="towers-xp-fill" style="width:${b.progressPct}%"></div>
                </div>
              </div>
            </div>
          </div>

          <div class="towers-Currencies-row">
            <div class="towers-stat-chip"><span class="lbl">Proje Kristali</span><strong class="val">${this.stats.blueprintGems>=9e8?"♾️ Beta":`💠 ${this.stats.blueprintGems}`}</strong></div>
            <div class="towers-stat-chip"><span class="lbl">Mahalle</span><strong class="val">🏘️ ${d} / 60</strong></div>
            <div class="towers-stat-chip"><span class="lbl">Yıldız</span><strong class="val">⭐ ${a}</strong></div>
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
              ${p>0?`<b class="social-nav-badge" style="display:inline-flex;">${p}</b>`:""}
            </button>
            <div class="discord-nav-divider" aria-hidden="true"></div>
          </div>

          <div class="discord-single-links">
            ${$.map(g=>`
              <button type="button" class="bottom-nav-tab ${this.activeTab===g.id?"active":""}" data-towers-tab="${g.id}">
                <span class="discord-nav-indicator" aria-hidden="true"></span>
                <span class="tab-icon">${g.icon}</span>
                <span class="tab-label">${g.label}</span>
                ${g.badge?`<span class="tab-badge">${M(g.badge)}</span>`:""}
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
              <span class="tab-badge">${this.stats.unlockedAchievements.length}/${ut.length}</span>
            </button>
          </div>

          <div class="desktop-sidebar-footer discord-user-dock">
            <div class="discord-voice-ship-strip">
              <div class="sidebar-ship-preview">
                ${at(h.id,30)}
              </div>
              <div class="discord-voice-ship-info">
                <span class="discord-conn-green">● Şantiye Hazır</span>
                <small class="discord-conn-sub">LVL ${b.level} • ${M(h.name)}</small>
              </div>
              <button type="button" class="sidebar-hangar-mini-btn" id="btn-towers-workshop">🏗️ Atölye</button>
            </div>

            <div class="discord-user-bar">
              <button type="button" class="discord-user-identity profile-badge" id="btn-towers-open-profile" title="Ortak Oyuncu Kimliği">
                <div class="discord-user-avatar">
                  ${at(h.id,28)}
                  <span class="discord-presence-dot ${r?"online":"guest"}"></span>
                </div>
                <div class="discord-user-meta">
                  <strong class="discord-user-nick">${M(e)}<small>#${M(i)}</small></strong>
                  <span class="discord-user-sub">${this.stats.totalPoints} Puan</span>
                </div>
              </button>
              <div class="discord-user-controls">
                <button type="button" class="discord-ctrl-btn ${c.soundEnabled?"is-on":"is-muted"}" id="btn-towers-dock-sfx" title="Ses Efektleri">🔊</button>
                <button type="button" class="discord-ctrl-btn ${c.musicEnabled?"is-on":"is-muted"}" id="btn-towers-dock-music" title="Şehir Müziği">🎵</button>
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
    `}renderTabContent(){if(this.activeTab==="campaign"){const t=this.getUnlockedCampaignIndex(),e=L[t]||L[0],i=L.filter(h=>h.episode===this.selectedEpisode),s={1:"1. Evre: Kırmızı Tuğla Mahallesi (4×4 – 6×6)",2:"2. Evre: İmarlı Tarihi Semt (4×4 – 7×7)",3:"3. Evre: Eski Saat Meydanı (5×5 – 7×7)",4:"4. Evre: Sisli Konaklar (5×5 – 8×8)",5:"5. Evre: Büyük Metropol (6×6 – 8×8)"},r=rt(this.stats.equippedFacadeId,this.stats.equippedRoofId),f=Lt(i,this.stats,r,this.stats.equippedRoofId,t,h=>L.findIndex(a=>a.id===h)),b=["track-left","track-center","track-right","track-right","track-center","track-left"];return`
        <div class="towers-campaign-wrap">
          <div class="towers-campaign-header">
            <div>
              <h2>🏙️ Tuğla Şehir Cadde Seferi (60 Mahalle)</h2>
              <p>Her parsel boş arsa başlar! Bölüm bitince madalyana göre sokağa <b>Gecekondu ★</b>, <b>Apartman ★★</b> veya <b>Lüks Konak ★★★</b> dikilir.</p>
            </div>
            <button id="btn-towers-play-next" class="towers-primary-cta" data-start-campaign="${e.id}">
              ▶️ Sıradaki Parsel: #${M(e.code)} (${M(e.cityName)})
            </button>
          </div>

          <div class="towers-episode-tabs">
            ${[1,2,3,4,5].map(h=>`
              <button type="button" class="towers-ep-btn ${this.selectedEpisode===h?"active":""}" data-towers-ep="${h}">
                ${M(s[h])}
              </button>
            `).join("")}
          </div>

          <section class="towers-street-panorama-card" aria-label="Mahalle Caddesi Silüeti">
            <div class="street-panorama-head">
              <strong>🛣️ ${M(s[this.selectedEpisode]||"")}</strong>
              <div class="street-medal-legend">
                <span>🚧 Arsa</span>
                <span>🥉 Gecekondu (★)</span>
                <span>🥈 Apartman (★★)</span>
                <span>🥇 Lüks Konak (★★★)</span>
              </div>
            </div>
            <div class="street-panorama-frame">
              ${f}
            </div>
          </section>

          <div class="towers-street-route">
            ${i.map((h,a)=>{const d=L.findIndex(T=>T.id===h.id),p=this.stats.solvedIds.includes(h.id),c=d<=t||p,$=this.stats.levelStars[h.id]||0,y=$t(p,c,$),u="★".repeat($)+"☆".repeat(Math.max(0,3-$)),l=this.stats.bestTimesSec[h.id],m=h.difficulty==="easy"?"Kolay":h.difficulty==="medium"?"Orta":"Zor",z=b[a%b.length],k=y==="gold"?"Lüks Altın Konak":y==="silver"?"Klasik Tuğla Apartman":y==="bronze"?"Mahalle Gecekondusu":y==="active"?"Aktif İnşaat Parseli":"Kilitli Boş Arsa",S=h.challengeKind==="zoning"?'<span class="street-mech-tag zoning">🧱 İmar Kısıtı</span>':h.challengeKind==="fog"?'<span class="street-mech-tag fog">🌫️ Sisli Sokak</span>':"";return`
                  <div class="towers-street-row ${z}">
                    <article class="towers-street-node tier-${y} ${c?"unlocked":"locked"}" data-city-card="${h.id}">
                      <div class="street-node-art">
                        ${mt(y,r,this.stats.equippedRoofId,"street-node-bldg-svg")}
                      </div>
                      <div class="street-node-body">
                        <div class="towers-city-top">
                          <span class="towers-city-code">#${M(h.code)} • ${h.size}×${h.size} ${m}</span>
                          ${S}
                        </div>
                        <h4 class="towers-city-name">${M(h.cityName)}</h4>
                        <div class="street-tier-subtitle">${k}</div>
                        <div class="towers-city-meta">
                          <span class="towers-city-stars ${$>0?"earned":""}">${u}</span>
                          <span class="towers-city-time">${l?$<3?`⏱️ ${R(l)} • 🥇 ≤ ${R(h.goldSec)}`:`🥇 Rekor: ${R(l)}`:`🥇 Hedef: ${R(h.goldSec)}`}</span>
                        </div>
                      </div>
                      <button
                        type="button"
                        class="towers-city-play-btn"
                        data-start-campaign="${h.id}"
                        ${c?"":"disabled"}
                      >
                        ${p?$<3?"⬆️ Lükse Yükselt":"🔄 Tekrar Oyna":c?"🏗️ İnşa Et":"🔒 Kilitli"}
                      </button>
                    </article>
                  </div>
                `}).join("")}
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
                <h3>🏆 Haftalık Mimar Kupası (${M(t)})</h3>
                <p>Tüm oyuncularla aynı 3 sabit tohumlu tuğla sokak etabı üzerinden yüksek skor yarışı.</p>
              </div>
              <span class="towers-cup-total">Toplam: ${i[0]+i[1]+i[2]} P</span>
            </div>
            <div class="towers-cup-grid">
              ${e.map(s=>{const r=i[s.index]||0;return`
                    <div class="towers-cup-stage ${r>0?"done":""}">
                      <div class="stage-top"><strong>${s.label}</strong><span>${s.size}×${s.size}</span></div>
                      <small>${M(s.subtitle)}</small>
                      <div class="stage-score">${r>0?`Skor: <b>${r} P</b>`:"Henüz Çözülmedi"}</div>
                      <button type="button" class="towers-city-play-btn" data-towers-cup-stage="${s.index}">
                        ${r>0?"Skoru Geliştir ↻":"Etap Başlat →"}
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
              <input id="inp-towers-custom-seed" class="towers-seed-input" type="text" placeholder="Örn: TWR-5-ORTA-2026" value="${M(this.customSeedInput)}" />
            </div>
          </div>
          <button id="btn-towers-start-custom" class="towers-primary-cta">🎲 ${this.customSize}×${this.customSize} İnşaata Başla</button>
        </div>
      </div>
    `}renderBoardScreenHTML(){var $,y;const t=this.activePuzzle,e=t.size,i=ot(t,this.board),s=q.find(u=>u.id===this.stats.equippedFacadeId)||q[0],r=q.find(u=>u.id===this.stats.equippedRoofId)||q[5],f=rt(s.id,r.id),b=new Int32Array(e+1);for(let u=0;u<e;u++)for(let l=0;l<e;l++){const m=this.board[u][l];m>=1&&m<=e&&b[m]++}const h=new Map;let a="";if(this.activeSightRay){const{side:u,index:l}=this.activeSightRay,m=!!((y=($=t.hiddenCluesMask)==null?void 0:$[u])!=null&&y[l]),z=m?0:t.clues[u][l],k=[];for(let g=0;g<e;g++){let C=l,P=g;u==="top"?(C=g,P=l):u==="bottom"?(C=e-1-g,P=l):u==="left"?(C=l,P=g):(C=l,P=e-1-g),k.push({r:C,c:P})}const S=Mt(k,this.board,z,u,l);S.visibleCells.forEach(g=>h.set(`${g.r},${g.c}`,"visible")),S.hiddenCells.forEach(g=>h.set(`${g.r},${g.c}`,"blocked")),a=`
        <div class="towers-sight-banner" id="towers-sight-banner">
          <span>👁️ <strong>Görüş Hattı (${u==="top"?`${l+1}. Sütun (Üstten ▾)`:u==="bottom"?`${l+1}. Sütun (Alttan ▴)`:u==="left"?`${l+1}. Satır (Soldan ▸)`:`${l+1}. Satır (Sağdan ◂)`}):</strong> ${m?"Sisli İpucu (?)":`Hedef = <b>${z||"Yok"}</b>`} • <b class="sight-ok">Görüldü: ${S.visibleCells.length}</b> • <b class="sight-hid">Örtüldü: ${S.hiddenCells.length}</b></span>
          <button type="button" id="btn-towers-clear-sight" class="towers-mini-btn">Kapat ✕</button>
        </div>
      `}const d=this.activeMode==="campaign"&&this.activeCampaignLevel?`🏘️ #${this.activeCampaignLevel.code}: ${this.activeCampaignLevel.cityName}`:this.activeMode==="daily"?"🧱 Günlük Bina":this.activeMode==="endless"?`🏗️ Dalga #${this.endlessWave}`:this.activeMode==="blitz"?`⚡ Blitz: ${this.blitzScore} P`:this.activeChallengeKind==="zoning"?"🚧 İmar Kısıtı":this.activeChallengeKind==="fog"?"🌫️ Sisli Sokak":this.activeChallengeKind==="survival"?"🪖 3 Baret Hayatta Kalma":this.activeChallengeKind==="weekly_cup"?`🏆 Kupa Etabı #${(this.activeCupStageIdx??0)+1}`:`🎲 Serbest (${e}×${e})`,p=(u,l)=>{var z,k;if((k=(z=t.hiddenCluesMask)==null?void 0:z[u])!=null&&k[l])return"fogged";const m=`${u}:${l}`;return i.violatedClueKeys.has(m)?"violated":i.satisfiedClueKeys.has(m)?"satisfied":"pending"},c=(u,l,m)=>{var C,P,A,G;const z=!!((P=(C=t.hiddenCluesMask)==null?void 0:C[u])!=null&&P[l]),k=t.clues[u][l],S=p(u,l),T=((A=this.activeSightRay)==null?void 0:A.side)===u&&((G=this.activeSightRay)==null?void 0:G.index)===l,g=z?"🌫️":k>0?String(k):"·";return`
        <button
          type="button"
          class="towers-clue-cell ${u} ${S} ${T?"active-ray":""}"
          data-towers-clue="${u}-${l}"
          title="${z?"Sisli İpucu":"Görüş Hattını Göster / Gizle"}"
        >
          ${u==="right"||u==="bottom"?`<span class="clue-arrow">${m}</span><span class="clue-num">${g}</span>`:`<span class="clue-num">${g}</span><span class="clue-arrow">${m}</span>`}
        </button>
      `};return`
      <div class="towers-board-screen" id="towers-board-screen">
        <div class="towers-board-hud">
          <div class="hud-left-btns">
            <button type="button" id="btn-towers-leave-board" class="towers-back-map-btn">⬅️ Menü</button>
            <button type="button" id="btn-towers-pause" class="towers-back-map-btn">${this.isPaused?"▶️ Sürdür":"⏸️ Duraklat"}</button>
          </div>

          <div class="towers-hud-center">
            <span class="towers-hud-title">${M(d)}</span>
            <span class="towers-hud-sub">${e}×${e} • ${M(s.name)}</span>
          </div>

          <div class="towers-hud-metrics">
            ${this.activeChallengeKind==="survival"?`<span class="towers-hud-pill survival-lives">${"🪖".repeat(this.survivalLives)}${"⚫".repeat(Math.max(0,3-this.survivalLives))}</span>`:""}
            <span class="towers-hud-pill" id="towers-hud-timer">
              ⏱️ ${this.activeMode==="blitz"?R(this.blitzRemainingSeconds):R(this.elapsedSeconds)}
            </span>
            <button type="button" id="btn-towers-sight-toggle" class="towers-hud-pill btn-pill ${this.activeSightRay?"active":""}" title="Görüş Hattını İncele (V)">
              👁️ Görüş
            </button>
            ${this.host.isBetaChannel()?'<button type="button" id="btn-towers-beta-lab" class="towers-beta-chip">🧪</button>':""}
          </div>
        </div>

        ${a}

        ${this.activeHint?`
          <div class="towers-hint-banner" id="towers-hint-banner">
            <div class="towers-hint-text">
              <strong>💡 ${M(this.activeHint.ruleTitle)}:</strong> ${M(this.activeHint.message)}
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
            ${Array.from({length:e},(u,l)=>c("top",l,"▾")).join("")}
            <div class="towers-corner-spacer"></div>

            ${Array.from({length:e},(u,l)=>{const m=Array.from({length:e},(z,k)=>{var O,V,j,F;const S=this.board[l][k],T=t.givens[l][k]>0,g=this.selectedCell.r===l&&this.selectedCell.c===k,C=i.duplicateKeys.has(`${l},${k}`),P=i.zoningViolationKeys.has(`${l},${k}`),A=((V=(O=t.maxHeightLimits)==null?void 0:O[l])==null?void 0:V[k])||0,G=((j=this.activeHint)==null?void 0:j.r)===l&&((F=this.activeHint)==null?void 0:F.c)===k,D=h.get(`${l},${k}`)||"",_=this.notes[l][k];return`
                  <div
                    class="towers-cell ${S>0?"has-tower":"empty"} ${T?"given":""} ${g?"selected":""} ${C||P?"conflict":""} ${G?"hint-target":""} ${A>0?"zoned":""} ${D?`sight-${D}`:""}"
                    data-towers-cell="${l}-${k}"
                    data-row="${l}"
                    data-col="${k}"
                    data-val="${S}"
                  >
                    ${A>0?`<span class="tower-zone-badge" title="İmar Kısıtı: Maksimum ${A} kat">≤${A}</span>`:""}
                    ${S>0?`
                      <div class="tower-pixel-bldg-wrap">
                        ${pt(S,e,f,r.id)}
                        <span class="tower-height-badge ${T?"given-badge":""}">${S}</span>
                      </div>
                    `:_.length>0?`
                      <div class="tower-notes-grid">
                        ${Array.from({length:e},(lt,st)=>{const U=st+1;return`<span class="tower-note-item ${_.includes(U)?"on":""}">${_.includes(U)?U:""}</span>`}).join("")}
                      </div>
                    `:'<span class="tower-plot-stakes" aria-hidden="true"><i></i><i></i></span>'}
                    ${D==="visible"?'<span class="tower-sight-tag visible" title="Görüldü">👁️</span>':D==="blocked"?'<span class="tower-sight-tag blocked" title="Önündeki yüksek bina tarafından örtüldü">⬛</span>':""}
                  </div>
                `}).join("");return`${c("left",l,"▸")}${m}${c("right",l,"◂")}`}).join("")}

            <div class="towers-corner-spacer"></div>
            ${Array.from({length:e},(u,l)=>c("bottom",l,"▴")).join("")}
            <div class="towers-corner-spacer"></div>
          </div>
        </div>

        <div class="towers-controls-dock">
          <div class="towers-numpad" role="group" aria-label="Bina Kat Yüksekliği">
            ${Array.from({length:e},(u,l)=>{const m=l+1,z=Math.max(0,e-b[m]);return`
                <button
                  type="button"
                  class="towers-num-btn ${this.noteMode?"note-active":""} ${z===0?"all-placed":""}"
                  data-towers-num="${m}"
                >
                  <span class="num-main">${m}</span>
                  <span class="num-lbl">${this.noteMode?"Not":z===0?"✓":`×${z}`}</span>
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
    `}renderActiveModal(){return this.activeModal?this.activeModal==="tutorial"?At({step:this.tutorialStep,miniBoard:this.tutorialMiniBoard,selectedMiniCell:this.tutorialSelectedCell,palId:{facade:this.stats.equippedFacadeId,roof:this.stats.equippedRoofId}}):this.activeModal==="rules"?Bt():this.activeModal==="workshop"?Ht(this.stats):this.activeModal==="profile"?Kt(this.stats):this.activeModal==="beta-lab"?qt(this.inBoardView):this.activeModal==="gameover"?Rt(this.gameOverReason):this.activeModal==="victory"&&this.lastWinSummary?It({elapsedSeconds:this.elapsedSeconds,hintsUsed:this.hintsUsedThisGame,challengeKind:this.activeChallengeKind,summary:this.lastWinSummary}):"":""}bindEvents(t){var i,s,r,f,b,h,a,d,p,c,$,y,u,l,m,z,k,S,T,g,C,P,A,G,D,_,O,V,j,F,lt,st,U,vt;(i=t.querySelector("#btn-towers-back-hub"))==null||i.addEventListener("click",()=>{this.stopTimer(),this.host.onBackToHub()}),(s=t.querySelector("#btn-towers-open-social"))==null||s.addEventListener("click",()=>{var n,w;(w=(n=this.host).onOpenSocialHub)==null||w.call(n)}),(r=t.querySelector("#btn-towers-open-profile"))==null||r.addEventListener("click",()=>{var n,w;(w=(n=this.host).onOpenGlobalProfile)==null||w.call(n)}),(f=t.querySelector("#btn-towers-dock-sfx"))==null||f.addEventListener("click",()=>{var n,w;(w=(n=this.host).onToggleSound)==null||w.call(n),this.render()}),(b=t.querySelector("#btn-towers-dock-music"))==null||b.addEventListener("click",()=>{var n,w;(w=(n=this.host).onToggleMusic)==null||w.call(n),this.render()}),(h=t.querySelector("#btn-towers-quit"))==null||h.addEventListener("click",()=>{var n,w;(w=(n=this.host).onQuitApp)==null||w.call(n)}),(a=t.querySelector("#btn-towers-tutorial"))==null||a.addEventListener("click",()=>{this.tutorialStep=1,this.tutorialMiniBoard=et.map(n=>[...n]),this.tutorialSelectedCell={r:0,c:1},this.activeModal="tutorial",this.render()}),(d=t.querySelector("#btn-towers-rules"))==null||d.addEventListener("click",()=>{this.activeModal="rules",this.render()}),(p=t.querySelector("#btn-towers-workshop"))==null||p.addEventListener("click",()=>{this.activeModal="workshop",this.render()}),(c=t.querySelector("#btn-towers-profile"))==null||c.addEventListener("click",()=>{this.activeModal="profile",this.render()}),($=t.querySelector("#btn-towers-settings"))==null||$.addEventListener("click",()=>{this.host.onOpenGlobalSettings()}),(y=t.querySelector("#btn-towers-beta-lab"))==null||y.addEventListener("click",()=>{this.activeModal="beta-lab",this.render()}),(u=t.querySelector("#btn-towers-close-modal"))==null||u.addEventListener("click",()=>{this.activeModal=null,this.render()}),t.querySelectorAll("[data-tut-step]").forEach(n=>{n.addEventListener("click",()=>{this.tutorialStep=Number(n.dataset.tutStep)||1,this.render()})}),t.querySelectorAll("[data-tut-cell]").forEach(n=>{n.addEventListener("click",()=>{var X,Z,Q;const[w,x]=(n.dataset.tutCell||"0-0").split("-"),E=Number(w)||0,B=Number(x)||0;((X=et[E])==null?void 0:X[B])>0||(this.tutorialSelectedCell={r:E,c:B},(Q=(Z=this.host).playSound)==null||Q.call(Z,"click"),this.render())})}),t.querySelectorAll("[data-tut-num]").forEach(n=>{n.addEventListener("click",()=>{var B,X,Z,Q,bt;const w=Number(n.dataset.tutNum)||0,{r:x,c:E}=this.tutorialSelectedCell;((B=et[x])==null?void 0:B[E])>0||(this.tutorialMiniBoard[x][E]=w,w>0?(Z=(X=this.host).playSound)==null||Z.call(X,"place",{floors:w,maxFloors:3}):(bt=(Q=this.host).playSound)==null||bt.call(Q,"erase"),this.render())})}),(l=t.querySelector("#btn-towers-tutorial-next"))==null||l.addEventListener("click",()=>{this.tutorialStep=Math.min(3,this.tutorialStep+1),this.render()}),(m=t.querySelector("#btn-towers-tutorial-practice"))==null||m.addEventListener("click",()=>{this.activeModal=null;const n=L[0],w=K(n.size,n.difficulty,n.seed,{id:n.id,title:n.cityName,code:n.code});this.startPuzzleSession(w,"campaign",n)}),t.querySelectorAll("[data-towers-tab]").forEach(n=>{n.addEventListener("click",()=>{var x,E;const w=n.dataset.towersTab;w&&(this.activeTab=w,(E=(x=this.host).playSound)==null||E.call(x,"click"),this.render())})}),t.querySelectorAll("[data-towers-ep]").forEach(n=>{n.addEventListener("click",()=>{this.selectedEpisode=Number(n.dataset.towersEp)||1,this.render()})}),t.querySelectorAll("[data-start-campaign]").forEach(n=>{n.addEventListener("click",()=>{const w=n.dataset.startCampaign,x=L.find(B=>B.id===w);if(!x)return;const E=x.challengeKind==="zoning"||x.challengeKind==="fog"?J(x.challengeKind,x.size,x.difficulty,x.seed,{id:x.id,title:x.cityName,code:x.code}):K(x.size,x.difficulty,x.seed,{id:x.id,title:x.cityName,code:x.code});this.startPuzzleSession(E,"campaign",x)})}),(z=t.querySelector("#btn-towers-start-zoning"))==null||z.addEventListener("click",()=>{const n=J("zoning",5,"medium",`TWR-ZONE-${Date.now()}`);this.startPuzzleSession(n,"challenge")}),(k=t.querySelector("#btn-towers-start-fog"))==null||k.addEventListener("click",()=>{const n=J("fog",5,"medium",`TWR-FOG-${Date.now()}`);this.startPuzzleSession(n,"challenge")}),(S=t.querySelector("#btn-towers-start-survival"))==null||S.addEventListener("click",()=>{const n=J("survival",5,"hard",`TWR-SURV-${Date.now()}`);this.startPuzzleSession(n,"challenge")}),t.querySelectorAll("[data-towers-cup-stage]").forEach(n=>{n.addEventListener("click",()=>{const w=Number(n.dataset.towersCupStage);if(w!==0&&w!==1&&w!==2)return;const E=yt()[w],B=J(E.challengeKind==="zoning"?"zoning":"weekly_cup",E.size,E.difficulty,E.seed,{id:E.seed,title:`🏆 ${E.label}: ${E.subtitle}`});B.challengeKind="weekly_cup",this.startPuzzleSession(B,"challenge",null,{cupStageIdx:w})})}),(T=t.querySelector("#btn-towers-start-daily"))==null||T.addEventListener("click",()=>{const n=new Date().toISOString().slice(0,10),w=K(5,"medium",`TWR-DAILY-${n}`);this.startPuzzleSession(w,"daily")}),(g=t.querySelector("#btn-towers-start-endless"))==null||g.addEventListener("click",()=>{const n=this.endlessWave<=2?4:this.endlessWave<=5?5:6,w=this.endlessWave<=2?"easy":this.endlessWave<=6?"medium":"hard",x=K(n,w,`TWR-ENDLESS-W${this.endlessWave}-${Date.now()}`);this.startPuzzleSession(x,"endless")}),(C=t.querySelector("#btn-towers-start-blitz"))==null||C.addEventListener("click",()=>{const n=K(4,"easy",`TWR-BLITZ-${Date.now()}-0`);this.startPuzzleSession(n,"blitz")}),t.querySelectorAll("[data-custom-size]").forEach(n=>{n.addEventListener("click",()=>{this.customSize=Number(n.dataset.customSize)||4,this.render()})}),t.querySelectorAll("[data-custom-diff]").forEach(n=>{n.addEventListener("click",()=>{this.customDifficulty=n.dataset.customDiff||"easy",this.render()})});const e=t.querySelector("#inp-towers-custom-seed");e==null||e.addEventListener("input",()=>{this.customSeedInput=e.value}),(P=t.querySelector("#btn-towers-start-custom"))==null||P.addEventListener("click",()=>{const n=this.customSeedInput.trim()||`TWR-CUSTOM-${this.customSize}-${this.customDifficulty}-${Date.now()}`,w=K(this.customSize,this.customDifficulty,n);this.startPuzzleSession(w,"custom")}),(A=t.querySelector("#btn-towers-leave-board"))==null||A.addEventListener("click",()=>{this.stopTimer(),this.inBoardView=!1,this.isPaused=!1,this.render()}),(G=t.querySelector("#btn-towers-pause"))==null||G.addEventListener("click",()=>{this.isPaused=!this.isPaused,this.render()}),(D=t.querySelector("#btn-towers-resume"))==null||D.addEventListener("click",()=>{this.isPaused=!1,this.render()}),(_=t.querySelector("#btn-towers-sight-toggle"))==null||_.addEventListener("click",()=>{this.toggleSightRayFromSelection()}),t.querySelectorAll("[data-towers-cell]").forEach(n=>{n.addEventListener("click",()=>{this.selectedCell={r:Number(n.dataset.row)||0,c:Number(n.dataset.col)||0},this.render()})}),t.querySelectorAll("[data-towers-clue]").forEach(n=>{n.addEventListener("click",()=>{const w=n.dataset.towersClue||"",[x,E]=w.split("-"),B=Number(E)||0;this.activeSightRay&&this.activeSightRay.side===x&&this.activeSightRay.index===B?this.activeSightRay=null:this.activeSightRay={side:x,index:B},this.render()})}),(O=t.querySelector("#btn-towers-clear-sight"))==null||O.addEventListener("click",()=>{this.activeSightRay=null,this.render()}),t.querySelectorAll("[data-towers-num]").forEach(n=>{n.addEventListener("click",()=>{const w=Number(n.dataset.towersNum)||1;this.handleNumberInput(w)})}),(V=t.querySelector("#btn-towers-notes-toggle"))==null||V.addEventListener("click",()=>{this.noteMode=!this.noteMode,this.render()}),(j=t.querySelector("#btn-towers-erase"))==null||j.addEventListener("click",()=>this.handleEraseInput()),(F=t.querySelector("#btn-towers-undo"))==null||F.addEventListener("click",()=>this.handleUndo()),(lt=t.querySelector("#btn-towers-redo"))==null||lt.addEventListener("click",()=>this.handleRedo()),(st=t.querySelector("#btn-towers-hint"))==null||st.addEventListener("click",()=>this.handleSmartHint()),(U=t.querySelector("#btn-towers-apply-hint"))==null||U.addEventListener("click",()=>this.applyActiveHintMove()),(vt=t.querySelector("#btn-towers-reset"))==null||vt.addEventListener("click",()=>{!this.activePuzzle||this.isPaused||(this.pushHistory(),this.board=N(this.activePuzzle.givens),this.notes=Array.from({length:this.activePuzzle.size},()=>Array.from({length:this.activePuzzle.size},()=>[])),this.activeHint=null,this.render())}),this.bindWorkshopAndMetaModals(t)}bindWorkshopAndMetaModals(t){var e,i,s,r,f,b,h;t.querySelectorAll("[data-buy-char]").forEach(a=>{a.addEventListener("click",()=>{const d=a.dataset.buyChar,p=it.find(c=>c.id===d);!p||this.stats.blueprintGems<p.costGems||(this.stats.blueprintGems-=p.costGems,this.stats.unlockedCharacterIds.includes(d)||this.stats.unlockedCharacterIds.push(d),this.stats.equippedCharacterId=d,Y(this.stats),this.render())})}),t.querySelectorAll("[data-equip-char]").forEach(a=>{a.addEventListener("click",()=>{const d=a.dataset.equipChar;this.stats.unlockedCharacterIds.includes(d)&&(this.stats.equippedCharacterId=d,Y(this.stats),this.render())})}),t.querySelectorAll("[data-buy-cosmetic]").forEach(a=>{a.addEventListener("click",()=>{const d=a.dataset.buyCosmetic,p=q.find(c=>c.id===d);!p||this.stats.blueprintGems<p.costGems||(this.stats.blueprintGems-=p.costGems,this.stats.unlockedCosmeticIds.includes(d)||this.stats.unlockedCosmeticIds.push(d),p.slot==="facade"?this.stats.equippedFacadeId=d:this.stats.equippedRoofId=d,Y(this.stats),this.render())})}),t.querySelectorAll("[data-equip-cosmetic]").forEach(a=>{a.addEventListener("click",()=>{const d=a.dataset.equipCosmetic,p=q.find(c=>c.id===d);p&&(p.slot==="facade"?this.stats.equippedFacadeId=d:this.stats.equippedRoofId=d,Y(this.stats),this.render())})}),(e=t.querySelector("#btn-towers-preset-max"))==null||e.addEventListener("click",()=>{this.stats=dt("unlock_all"),this.activeModal=null,this.render()}),(i=t.querySelector("#btn-towers-preset-mid"))==null||i.addEventListener("click",()=>{this.stats=dt("classic_sandbox"),this.activeModal=null,this.render()}),(s=t.querySelector("#btn-towers-preset-reset"))==null||s.addEventListener("click",()=>{this.stats=dt("fresh_lvl1"),this.activeModal=null,this.render()}),(r=t.querySelector("#btn-towers-instant-solve"))==null||r.addEventListener("click",()=>{this.activePuzzle&&(this.activeModal=null,this.board=N(this.activePuzzle.solution),this.checkWinAfterMove(),this.render())}),(f=t.querySelector("#btn-towers-retry-board"))==null||f.addEventListener("click",()=>{this.activePuzzle&&(this.activeModal=null,this.startPuzzleSession(this.activePuzzle,this.activeMode,this.activeCampaignLevel,{resetSeries:!0,cupStageIdx:this.activeCupStageIdx}))}),(b=t.querySelector("#btn-towers-win-map"))==null||b.addEventListener("click",()=>{this.activeModal=null,this.inBoardView=!1,this.render()}),(h=t.querySelector("#btn-towers-win-next"))==null||h.addEventListener("click",()=>{if(this.activeModal=null,this.activeMode==="campaign"&&this.activeCampaignLevel){const a=L.findIndex(c=>c.id===this.activeCampaignLevel.id),d=L[Math.min(L.length-1,a+1)];this.selectedEpisode=d.episode;const p=K(d.size,d.difficulty,d.seed,{id:d.id,title:d.cityName,code:d.code});this.startPuzzleSession(p,"campaign",d)}else if(this.activeMode==="endless"){const a=this.endlessWave<=2?4:this.endlessWave<=5?5:6,d=this.endlessWave<=2?"easy":this.endlessWave<=6?"medium":"hard",p=K(a,d,`TWR-ENDLESS-W${this.endlessWave}-${Date.now()}`);this.startPuzzleSession(p,"endless")}else this.inBoardView=!1,this.render()})}}class _t{constructor(){v(this,"id","towers");v(this,"title","Towers");v(this,"sceneTheme","brick-city");v(this,"controller",null);v(this,"host",null)}mount(t,e){this.unmount(),this.host=e;const i={getUsername:()=>e.getUsername(),getPilotTag:()=>e.getPilotTag(),isBetaChannel:()=>e.isBetaChannel,getCloudSynced:()=>{var s;return((s=e.getCloudSynced)==null?void 0:s.call(e))??!1},canQuit:()=>{var s;return((s=e.canQuit)==null?void 0:s.call(e))??!1},renderTitlebar:()=>{var s;return((s=e.renderTitlebar)==null?void 0:s.call(e))??""},bindTitlebarEvents:()=>{var s;return(s=e.bindTitlebarEvents)==null?void 0:s.call(e)},onBackToHub:()=>e.returnToHub(),onOpenGlobalSettings:()=>e.openGlobalSettings(),onOpenGlobalProfile:()=>{var s;return(s=e.openGlobalProfile)==null?void 0:s.call(e)},onOpenSocialHub:()=>e.openSocialHub({pauseActiveGame:!0}),getSocialAttentionCount:()=>{var s;return((s=e.getSocialAttentionCount)==null?void 0:s.call(e))??0},getAudioSettings:()=>{var s;return((s=e.getAudioSettings)==null?void 0:s.call(e))??{soundEnabled:I.soundEnabled,musicEnabled:I.musicEnabled}},onToggleSound:()=>{var s;return(s=e.toggleSound)==null?void 0:s.call(e)},onToggleMusic:()=>{var s;return(s=e.toggleMusic)==null?void 0:s.call(e)},onQuitApp:()=>{var s;return(s=e.quitApp)==null?void 0:s.call(e)},playSound:(s,r)=>{s==="error"?I.playLockedBarrier():s==="win"?I.playVictory():s==="hint"?I.playGalaxyComplete(1):s==="erase"?I.playTrowelErase():s==="place"?I.playBrickPlace((r==null?void 0:r.floors)||2,(r==null?void 0:r.maxFloors)||6):I.playConsoleButton()}};this.controller=new Gt(i),this.controller.mount(t),e.setAudioScene(this.sceneTheme)}unmount(){this.controller&&(this.controller.destroy(),this.controller=null),this.host=null}refreshHostState(){var t,e;(t=this.controller)==null||t.syncStatsFromStorage(),(e=this.controller)==null||e.render()}onPauseForOverlay(){var t;(t=this.controller)==null||t.pauseIfPlaying()}handleBackNavigation(){return!this.controller||!this.host?!1:(this.controller.handleBackNavigation()||this.host.returnToHub(),!0)}}export{_t as TowersPlugin};
