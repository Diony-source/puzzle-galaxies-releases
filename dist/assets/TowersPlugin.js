var Tt=Object.defineProperty;var Lt=(n,t,e)=>t in n?Tt(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var g=(n,t,e)=>Lt(n,typeof t!="symbol"?t+"":t,e);import{g as St,A as J,a as Bt,T as I,b as wt,r as at,c as zt,d as Ct,e as Z,l as ut,v as pt,f as At,h as V,i as Pt,s as ot,j as tt,k as $t,m as Ht,n as Kt,o as rt,p as vt,q as Q}from"./app.js";import"./vendor-capacitor.js";import"./vendor-supabase.js";const it="./towers";function qt(n,t,e,s){const i={facade_neon:{frontA:"#ea8c66",frontB:"#c85a32",side:"#883418",outline:"#291711"},facade_crystal:{frontA:"#f2cd83",frontB:"#c98a2c",side:"#855314",outline:"#31210b"},facade_artdeco:{frontA:"#ef7644",frontB:"#b44318",side:"#6d220d",outline:"#271108"},facade_emerald:{frontA:"#43b883",frontB:"#0d8559",side:"#06543b",outline:"#09241b"},facade_plasma:{frontA:"#7884f4",frontB:"#4945c9",side:"#2c2782",outline:"#16143f"}},a={roof_flat:"#cbd5e1",roof_spire:"#0d9488",roof_pyramid:"#dc2626",roof_halo:"#0284c7",roof_sun:"#d97706"},v=i[n.facadeId]||i.facade_neon,m=s?"#b45309":a[t]||"#cbd5e1";return{wallFrontLight:v.frontA,wallFrontMid:e>=.55?v.frontB:v.frontA,wallSide:v.side,roofFill:s?"#fef3c7":"#ffffff",roofRim:m,outline:v.outline,ink:s?"#451a03":"#0f172a"}}function It(n,t=44){return n==="roof_spire"?`
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
  `}function gt(n,t,e,s,i){const a=Math.max(1,t),v=Math.max(1,Math.min(a,Math.floor(n))),m=!!(i!=null&&i.isGiven),k=(i==null?void 0:i.viewMode)==="2d"?"2d":"3d",l=a<=1?1:(v-1)/(a-1),d=qt(e,s,l,m);if(k==="2d"){const W=Math.round(14+v/a*66);return`
      <div class="tower-pixel-bldg-svg tower-2d-block ${m?"is-given":""}" aria-hidden="true">
        <svg class="tower-3d-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <rect class="tower-3d-roof" x="6" y="6" width="88" height="88" rx="12" fill="${d.roofFill}" stroke="${d.roofRim}" stroke-width="4" />
          <rect x="14" y="80" width="72" height="7" rx="3.5" fill="rgba(15,23,42,0.1)" />
          <rect x="14" y="80" width="${W}" height="7" rx="3.5" fill="${d.wallFrontMid}" />
          ${m?'<circle cx="81" cy="19" r="4.2" fill="#92400e" />':""}
          <text
            class="tower-3d-roof-text"
            x="50"
            y="47"
            text-anchor="middle"
            dominant-baseline="central"
            fill="${d.ink}"
            font-size="54"
            font-weight="900"
            font-family="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif"
          >${v}</text>
        </svg>
      </div>
    `}const p=22,c=31,b=68,f=62,M=Math.round(5+l*12),y=Math.round(7+l*25),x=p-M,$=c-y,o=`${x},${$+f} ${x+b},${$+f} ${p+b},${c+f} ${p},${c+f}`,u=`${x+b},${$} ${p+b},${c} ${p+b},${c+f} ${x+b},${$+f}`,h=(.2+l*.16).toFixed(2),S=`${p+3},${c+f} ${p+b+5},${c+f} ${p+b+5},${c+5} ${p+b},${c} ${p+b},${c+f}`,z=Math.min(v,5),L=[],P=[],T=e.windowLit||"#fef08a",E=e.windowGlow||"#fde047";for(let W=0;W<z;W++){const _=W/z,O=(W+1)/z,j=(_+O)/2;if(W>0){const G=Math.round(x+_*M),D=Math.round($+f+_*y),r=Math.round(x+b+_*M),w=Math.round($+_*y);L.push(`<polyline points="${G},${D} ${r},${D} ${r},${w}" fill="none" stroke="rgba(15,23,42,0.34)" stroke-width="1.2" />`)}if(y>=7){const G=Math.round($+f+j*y),D=Math.round(x+j*M),r=Math.max(2,Math.min(4,Math.floor(y/z)-2)),w=Math.round(G-r/2);for(const C of[0,1,2]){const B=D+10+C*19,K=(W+C+v)%2===0?T:E;P.push(`<rect x="${B-1}" y="${w-1}" width="10" height="${r+2}" fill="${d.outline}" opacity="0.55" />`,`<rect x="${B}" y="${w}" width="8" height="${r}" fill="${K}" />`)}}if(M>=6){const G=Math.round(x+b+M*.34),D=Math.max(2,Math.min(5,Math.floor(M*.42)));for(const r of[.22,.52,.78]){const w=Math.round($+r*f+j*y-3);P.push(`<rect x="${G}" y="${w}" width="${D}" height="6" fill="${d.outline}" opacity="0.6" />`,`<rect x="${G+1}" y="${w+1}" width="${Math.max(1,D-2)}" height="4" fill="${T}" opacity="0.88" />`)}}}const H=L.join(""),q=P.join(""),U=m?5:4,N=x+Math.round(b/2),et=$+Math.round(f/2)+1;return`
    <div class="tower-pixel-bldg-svg tower-3d-block tier-${v} ${m?"is-given":""}" aria-hidden="true">
      <svg class="tower-3d-svg" viewBox="0 -10 100 110" shape-rendering="crispEdges" xmlns="http://www.w3.org/2000/svg">
        <polygon points="${S}" fill="rgba(9,13,22,${h})" />
        <polygon points="${o}" fill="${d.wallFrontMid}" stroke="${d.outline}" stroke-width="2" stroke-linejoin="round" />
        <polygon points="${u}" fill="${d.wallSide}" stroke="${d.outline}" stroke-width="2" stroke-linejoin="round" />
        ${H}
        ${q}
        <rect
          class="tower-3d-roof"
          x="${x}"
          y="${$}"
          width="${b}"
          height="${f}"
          rx="2"
          fill="${d.roofFill}"
          stroke="${d.outline}"
          stroke-width="2.2"
        />
        <rect
          x="${x+2}"
          y="${$+2}"
          width="${b-4}"
          height="3"
          fill="rgba(255,255,255,0.65)"
        />
        <rect
          x="${x+U}"
          y="${$+U}"
          width="${b-U*2}"
          height="${f-U*2}"
          rx="1.5"
          fill="none"
          stroke="${d.roofRim}"
          stroke-width="${m?"2.5":"2"}"
        />
        ${m?`<rect x="${x+b-12}" y="${$+6}" width="6" height="6" fill="#b45309" />`:""}
        <text
          class="tower-3d-roof-text"
          x="${N}"
          y="${et}"
          text-anchor="middle"
          dominant-baseline="central"
          fill="${d.ink}"
          stroke="rgba(255,255,255,0.75)"
          stroke-width="2"
          paint-order="stroke"
          font-size="42"
          font-weight="900"
          font-family="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif"
        >${v}</text>
      </svg>
    </div>
  `}function ct(n,t){const e={facade_neon:{p:"#c85a32",s:"#e07a47",sh:"#7f3319",mortar:"#471d10",w:"#fde047",wg:"#fef08a",hl:"#ffedd5"},facade_crystal:{p:"#d97706",s:"#fde68a",sh:"#92400e",mortar:"#78350f",w:"#fef9c3",wg:"#ffffff",hl:"#fffbeb"},facade_artdeco:{p:"#9a3412",s:"#ea580c",sh:"#431407",mortar:"#271509",w:"#fed7aa",wg:"#fef3c7",hl:"#ffedd5"},facade_emerald:{p:"#047857",s:"#10b981",sh:"#064e3b",mortar:"#022c22",w:"#fde68a",wg:"#fef9c3",hl:"#a7f3d0"},facade_plasma:{p:"#4338ca",s:"#818cf8",sh:"#312e81",mortar:"#1e1b4b",w:"#a5f3fc",wg:"#ecfeff",hl:"#ddd6fe"}},s={roof_flat:{rp:"#78716c",ra:"#fbbf24"},roof_spire:{rp:"#d97706",ra:"#fde047"},roof_pyramid:{rp:"#dc2626",ra:"#fecaca"},roof_halo:{rp:"#0284c7",ra:"#bae6fd"},roof_sun:{rp:"#b45309",ra:"#fef08a"}},i=e[n]||e.facade_neon,a=s[t]||s.roof_flat;return{facadeId:n,brickPrimary:i.p,brickSecondary:i.s,brickShadow:i.sh,mortar:i.mortar,windowLit:i.w,windowGlow:i.wg,roofPrimary:a.rp,roofAccent:a.ra,outline:"#1e1829",highlight:i.hl}}function Mt(n,t,e){return n?e>=3?"gold":e===2?"silver":"bronze":t?"active":"locked"}function xt(n,t=!1){switch(n){case"gold":return`${it}/${t?"bldg_6.webp":"bldg_5.webp"}`;case"silver":return`${it}/bldg_3.webp`;case"bronze":return`${it}/bldg_1.webp`;case"active":return`${it}/lot_crane.webp`;default:return`${it}/lot_empty.webp`}}function Rt(n,t,e,s="",i=!1){const a=xt(n,i);return`
    <img
      class="${s} street-sprite-img street-tier-${n}"
      src="${a}"
      alt=""
      loading="eager"
      decoding="async"
      draggable="false"
      aria-hidden="true"
    />
  `}function _t(n,t,e,s,i,a){const k=Math.max(1,n.length),l=78,p=(1200-l*2)/k,c=206,b=n.map((f,M)=>{const y=a(f.id),x=t.solvedIds.includes(f.id),$=y<=i||x,o=t.levelStars[f.id]||0,u=Mt(x,$,o),h=M===k-1,S=xt(u,h),z=Math.round(l+p*(M+.5)),L=Math.min(82,Math.round(p*.9)),P=u==="gold"?h?148:132:u==="silver"?106:u==="bronze"?64:u==="active"?88:34,T=c-P,E=u==="gold"?"#f59e0b":u==="silver"?"#cbd5e1":u==="bronze"?"#d97706":u==="active"?"#0ea5e9":"#64748b",H=u==="silver"||u==="gold"?"#1e1b2e":"#ffffff";return`
        <g>
          <ellipse cx="${z}" cy="${c+1}" rx="${Math.round(L*.42)}" ry="5" fill="rgba(30,24,41,0.22)" />
          <image
            href="${S}"
            x="${z-Math.round(L/2)}"
            y="${T}"
            width="${L}"
            height="${P}"
            preserveAspectRatio="xMidYMax meet"
            style="image-rendering: pixelated;"
          />
          <rect x="${z-12}" y="${c+10}" width="24" height="16" rx="3" fill="${E}" stroke="#1e1829" stroke-width="2" />
          <text x="${z}" y="${c+21}" text-anchor="middle" fill="${H}" font-size="10" font-weight="900" font-family="monospace">${M+1}</text>
        </g>
      `}).join("");return`
    <svg class="towers-street-panorama-svg" viewBox="0 0 1200 248" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Mahalle Caddesi Silüeti">
      <image
        href="${it}/town_sky_backdrop.webp"
        x="0"
        y="0"
        width="1200"
        height="218"
        preserveAspectRatio="xMidYMax slice"
        style="image-rendering: pixelated;"
      />
      <!-- Sunlit sidewalk curb & paved boulevard street connecting all 12 buildings -->
      <rect x="0" y="${c-4}" width="1200" height="8" fill="#fef3c7" stroke="#292524" stroke-width="2" />
      <rect x="0" y="${c+4}" width="1200" height="40" fill="#475569" />
      <line x1="0" y1="${c+28}" x2="1200" y2="${c+28}" stroke="#fde047" stroke-width="3" stroke-dasharray="22 14" />
      ${b}
    </svg>
  `}function Gt(n,t,e,s,i){const l=Math.max(1,n.length),d=82+Math.max(0,l-1)*148+84,p=n.map((o,u)=>{const h=u%2===0,S=h?20:80,z=Math.round(S/100*680),L=82+u*148,P=h?"right":"left",T=Math.round(h?680*.34:680*.66);return{...o,xPct:S,xSvg:z,ySvg:L,plotSide:P,drivewayX:T}}),c=p.slice(0,-1).map((o,u)=>{const h=p[u+1],S=Math.round((o.ySvg+h.ySvg)/2),z=`M ${o.xSvg} ${o.ySvg} C ${o.xSvg} ${S}, ${h.xSvg} ${S}, ${h.xSvg} ${h.ySvg}`,L=h.isUnlocked||o.isCompleted,P=L?"#fef3c7":"#e7e5e4",T=o.isCompleted&&h.isUnlocked?"#334155":L?"#475569":"#94a3b8";return`
        <path d="${z}" fill="none" stroke="#1e293b" stroke-width="52" stroke-linecap="round" vector-effect="non-scaling-stroke" opacity="0.28" />
        <path d="${z}" fill="none" stroke="${P}" stroke-width="44" stroke-linecap="round" vector-effect="non-scaling-stroke" />
        <path d="${z}" fill="none" stroke="${T}" stroke-width="32" stroke-linecap="round" vector-effect="non-scaling-stroke" />
        <path d="${z}" fill="none" stroke="${L?"#fde047":"#cbd5e1"}" stroke-width="3.5" stroke-dasharray="11 11" stroke-linecap="round" vector-effect="non-scaling-stroke" />
      `}).join(""),b=p[0],f=p[p.length-1],M=b?`M ${Math.round(680*.5)} 0 C ${Math.round(680*.5)} 36, ${b.xSvg} 36, ${b.xSvg} ${b.ySvg}`:"",y=f?`M ${f.xSvg} ${f.ySvg} C ${f.xSvg} ${d-34}, ${Math.round(680*.5)} ${d-34}, ${Math.round(680*.5)} ${d}`:"",x=p.map(o=>{const u=o.isCompleted,h=o.isUnlocked,S=u?"#fde68a":h?"#fef3c7":"#cbd5e1";return`
        <line x1="${o.xSvg}" y1="${o.ySvg}" x2="${o.drivewayX}" y2="${o.ySvg}" stroke="#1e293b" stroke-width="22" stroke-linecap="round" vector-effect="non-scaling-stroke" opacity="0.22" />
        <line x1="${o.xSvg}" y1="${o.ySvg}" x2="${o.drivewayX}" y2="${o.ySvg}" stroke="${S}" stroke-width="16" stroke-linecap="round" vector-effect="non-scaling-stroke" />
        <circle cx="${o.xSvg}" cy="${o.ySvg}" r="18" fill="${S}" stroke="#292524" stroke-width="2.5" />
      `}).join(""),$=p.map(o=>{const u=(o.ySvg/d*100).toFixed(3),h=["candy-road-pin",`tier-${o.tier}`,o.isUnlocked?"unlocked":"locked"].join(" "),S=o.tier==="active"?"▶":o.isCompleted?`${o.relIdx+1}`:"🔒",z=o.stars>0?"★".repeat(o.stars):o.tier==="active"?`#${o.lvl.code}`:`${o.relIdx+1}`,L=Array.from({length:3},(P,T)=>T<o.stars?'<span class="star-on">★</span>':'<span class="star-off">☆</span>').join("");return`
        ${o.isUnlocked?`
          <button
            type="button"
            class="${h}"
            style="left: ${o.xPct}%; top: ${u}%;"
            data-start-campaign="${o.lvl.id}"
            title="#${i(o.lvl.code)} ${i(o.lvl.cityName)}"
          >
            <span class="pin-main">${S}</span>
            <span class="pin-sub">${z}</span>
          </button>
        `:`
          <div
            class="${h}"
            style="left: ${o.xPct}%; top: ${u}%;"
            aria-label="Kilitli Parsel #${i(o.lvl.code)}"
          >
            <span class="pin-main">${S}</span>
            <span class="pin-sub">${z}</span>
          </div>
        `}

        <article
          class="towers-street-node candy-plot-card side-${o.plotSide} tier-${o.tier} ${o.isUnlocked?"unlocked":"locked"}"
          style="top: ${u}%;"
          data-city-card="${o.lvl.id}"
        >
          <div class="street-node-art">
            ${Rt(o.tier,t,e,"street-node-bldg-svg",o.isLandmark)}
          </div>
          <div class="street-node-body">
            <div class="towers-city-top">
              <span class="towers-city-code">#${i(o.lvl.code)} • ${o.lvl.size}×${o.lvl.size} ${o.diffBadge}</span>
              ${o.mechPill}
            </div>
            <h4 class="towers-city-name">${i(o.lvl.cityName)}</h4>
            <div class="candy-tier-chip tier-${o.tier}">${o.tierTitle}</div>
            <div class="towers-city-meta">
              <span class="towers-city-stars ${o.stars>0?"earned":""}">${L}</span>
              <span class="towers-city-time">${o.bestSec?o.stars<3?`⏱️ ${s(o.bestSec)} • 🥇 ≤ ${s(o.lvl.goldSec)}`:`🥇 ${s(o.bestSec)}`:`🥇 ≤ ${s(o.lvl.goldSec)}`}</span>
            </div>
            <div class="candy-plot-action">
              ${o.isUnlocked?`<button type="button" class="towers-city-play-btn ${o.isCompleted?"completed":"active"}" data-start-campaign="${o.lvl.id}">${o.isCompleted?"🔁 Tekrar Oyna":"🏗️ İnşa Et"}</button>`:'<span class="towers-city-lock-pill">🔒 Önceki Parseli Bitir</span>'}
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
        ${M?`
          <path d="${M}" fill="none" stroke="#fef3c7" stroke-width="44" stroke-linecap="round" vector-effect="non-scaling-stroke" />
          <path d="${M}" fill="none" stroke="#475569" stroke-width="32" stroke-linecap="round" vector-effect="non-scaling-stroke" />
          <path d="${M}" fill="none" stroke="#fde047" stroke-width="3.5" stroke-dasharray="11 11" vector-effect="non-scaling-stroke" />
        `:""}
        ${y?`
          <path d="${y}" fill="none" stroke="#e7e5e4" stroke-width="44" stroke-linecap="round" vector-effect="non-scaling-stroke" />
          <path d="${y}" fill="none" stroke="#94a3b8" stroke-width="32" stroke-linecap="round" vector-effect="non-scaling-stroke" />
          <path d="${y}" fill="none" stroke="#cbd5e1" stroke-width="3.5" stroke-dasharray="11 11" vector-effect="non-scaling-stroke" />
        `:""}
        ${c}
        ${x}
      </svg>
      <div class="candy-map-nodes-layer">
        ${$}
      </div>
    </div>
  `}function A(n){return n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function lt(n){const t=Math.max(0,Math.floor(n)),e=Math.floor(t/60),s=t%60;return`${String(e).padStart(2,"0")}:${String(s).padStart(2,"0")}`}function Dt(n){var a;const t={char_apprentice:{start:"Arsayı inceledim, köşelere sağlam temeli atalım da rezidans yükselsin!",mid:"Güzel gidiyoruz! Bakalım hangi parsele 4 katlı dikiyoruz?",near:"Son birkaç parsel kaldı, tapuları teslim etmeye hazırız!",hint:"Bak bu kare boş duruyor; dediğim katı tam şuraya dikelim!",warn:"Hop hemşerim! Aynı sırada aynı kattan iki bina yan yana dikilmez.",sight:"Kaldırımdan bakınca öndeki küçük katlar büyük kulenin arkasında gizlenir.",win:"İşte bu! Bu sokağa yaptığım en kârlı proje oldu!"},char_planner:{start:"Vakıf hanı nizamıyla önce en belirgin kenar bakış sayılarını çözelim.",mid:"Satır ve sütun simetrisi harika oturuyor, ölçüyle devam edelim.",near:"Son ince rötuşlar — taş cephe silüetimiz tamamlanmak üzere.",hint:"Cetvel ve gönyeyle hesapladım; bu parsele işaretli kat tam oturuyor.",warn:"Dikkat: Sokak hizasında veya kenar bakışında bir ölçü sapması var.",sight:"Ön cepheden görünen kat sayısı kadar kademeli yükseliş şarttır.",win:"Mükemmel denge ve zarafet — şehrin tarihi dokusu şenlendi."},char_skyline:{start:"Düz bloklar sıkıcı; katları doğanın kendi basamakları gibi dizelim!",mid:"Mozaik taşları yerine oturuyor, her kat silüete renk katıyor.",near:"Az kaldı! Çatılar gökyüzüne doğru kıvrılmaya hazır.",hint:"Görüş ışığı tam bu kareyi işaret ediyor — sıradaki katı koy!",warn:"Burada bir uyumsuzluk var; doğa ve statik kurallar çakışıyor.",sight:"Bakış çizgisinde sadece kendinden öncekinden yüksek kuleler parlar!",win:"Masalsı bir mahalle yarattın — her çatı ayrı bir sanat eseri!"},char_neon:{start:"Görüş akslarını oku; boşluklardaki en yüksek kule yerini ele verecektir.",mid:"Harika akışkanlık — blokların ritmi yavaş yavaş şekilleniyor.",near:"Ufuk çizgisi netleşti, son kuleleri yerleştirip silüeti kilitle.",hint:"Parametrik kesişim noktası belli: önerdiğim katı uygula.",warn:"Çakışma algılandı; yükseklik eğrisini düzeltmemiz gerekiyor.",sight:"Görünen kuleleri tek tek izleyip arkada kalanları eleyebilirsin.",win:"Ufuk çizgisini baştan yazdık — cesur ve kusursuz!"},char_quantum:{start:"İnsan ölçeğinde ferah sokaklar için sabırla önce kesin kareleri bulalım.",mid:"Mahalle nefes almaya başladı; komşu parsellere ışık bırakalım.",near:"Huzurlu bir son dokunuş kaldı, acele etmeden tamamlayalım.",hint:"Bilge bir yaklaşımla bakarsak bu karede başka kat barınamaz.",warn:"Bir kat fazla veya tekrarlı görünüyor; sakince gözden geçirelim.",sight:"Göz hizası ne diyorsa sokak düzeni de ona uymalıdır.",win:"Eline sağlık! Hem ışığı hem sıcaklığı yerinde, yaşanası bir sokak."},char_emperor:{start:"Evlat, önce taşların temel aksını kur; yüksek kubbeler yerini hemen belli eder.",mid:"Mizan ve tenasüp yerli yerinde, sokağın yükü sağlam dağılıyor.",near:"Son taşlar kaldı; bu sokağın da külliyesi tarihe geçecek.",hint:"Hesap şaşmaz: kenar ve sıra dengesine göre buraya tek kat uyar.",warn:"Durakla ve bak evlat; iki aynı boy sütun bir sırada bulunmaz.",sight:"Göz önünden arkaya yükselen her kule sırrını açık eder.",win:"Aferin! Koca Sinan usulünce kusursuz statik ve silüet kurdun!"}},e=t[n.charId]||t.char_apprentice;if(n.hasActiveHint)return{tone:"hint",text:e.hint,winQuote:e.win};if(n.hasConflict)return{tone:"warn",text:e.warn,winQuote:e.win};if(n.hasSightRay)return{tone:"hint",text:e.sight,winQuote:e.win};const s=((a=n.puzzleInfo)==null?void 0:a.size)||4;if(n.remainingCells<=Math.max(3,Math.ceil(s*.75)))return{tone:"normal",text:e.near,winQuote:e.win};const i=n.puzzleInfo?n.puzzleInfo.size*n.puzzleInfo.size-n.puzzleInfo.givensCount:16;return n.remainingCells<i*.75?{tone:"normal",text:e.mid,winQuote:e.win}:{tone:"normal",text:e.start,winQuote:e.win}}function Wt(n){const{stats:t,activeTab:e,selectedEpisode:s,unlockedCampaignIdx:i}=n;if(e==="campaign"){const a=I[i]||I[0],v=I.filter(c=>c.episode===s),m={1:"1. Evre: Kırmızı Tuğla Mahallesi (4×4 – 6×6)",2:"2. Evre: İmarlı Tarihi Semt (4×4 – 7×7)",3:"3. Evre: Eski Saat Meydanı (5×5 – 7×7)",4:"4. Evre: Sisli Konaklar (5×5 – 8×8)",5:"5. Evre: Büyük Metropol (6×6 – 8×8)"},k=ct(t.equippedFacadeId,t.equippedRoofId),l=_t(v,t,k,t.equippedRoofId,i,c=>I.findIndex(b=>b.id===c)),d=v.map((c,b)=>{const f=I.findIndex(z=>z.id===c.id),M=t.solvedIds.includes(c.id),y=f<=i||M,x=t.levelStars[c.id]||0,$=Mt(M,y,x),o=t.bestTimesSec[c.id],u=c.difficulty==="easy"?"Kolay":c.difficulty==="medium"?"Orta":"Zor",h=$==="gold"?"Lüks Altın Konak":$==="silver"?"Klasik Tuğla Apartman":$==="bronze"?"Mahalle Gecekondusu":$==="active"?"Aktif İnşaat Parseli":"Kilitli Boş Arsa",S=c.challengeKind==="zoning"?'<span class="street-mech-tag zoning">🧱 İmar Kısıtı</span>':c.challengeKind==="fog"?'<span class="street-mech-tag fog">🌫️ Sisli Sokak</span>':"";return{lvl:c,relIdx:b,isCompleted:M,isUnlocked:y,stars:x,tier:$,tierTitle:h,mechPill:S,diffBadge:u,bestSec:o,isLandmark:b===v.length-1}}),p=Gt(d,k,t.equippedRoofId,lt,A);return`
      <div class="towers-campaign-wrap">
        <div class="towers-campaign-header">
          <div>
            <h2>🏙️ Tuğla Şehir Cadde Seferi (60 Mahalle)</h2>
            <p>Her parsel boş arsa başlar! Bölüm bitince madalyana göre sokağa <b>Gecekondu ★</b>, <b>Apartman ★★</b> veya <b>Lüks Konak ★★★</b> dikilir.</p>
          </div>
          <button id="btn-towers-play-next" class="towers-primary-cta" data-start-campaign="${a.id}">
            ▶️ Sıradaki Parsel: #${A(a.code)} (${A(a.cityName)})
          </button>
        </div>

        <div class="towers-episode-tabs">
          ${[1,2,3,4,5].map(c=>`
            <button type="button" class="towers-ep-btn ${s===c?"active":""}" data-towers-ep="${c}">
              ${A(m[c])}
            </button>
          `).join("")}
        </div>

        <section class="towers-street-panorama-card" aria-label="Mahalle Caddesi Silüeti">
          <div class="street-panorama-head">
            <strong>🛣️ ${A(m[s]||"")}</strong>
            <div class="street-medal-legend">
              <span>🌱 Arsa</span>
              <span>🥉 Gecekondu (★)</span>
              <span>🥈 Apartman (★★)</span>
              <span>🥇 Lüks Konak (★★★)</span>
            </div>
          </div>
          <div class="street-panorama-frame">
            ${l}
          </div>
        </section>

        <div class="towers-street-route" style="background-image: linear-gradient(180deg, rgba(220, 252, 231, 0.16), rgba(187, 247, 208, 0.24)), url('./towers/candy_park_bg.webp');">
          ${p}
        </div>
      </div>
    `}if(e==="challenges"){const a=zt(),v=Ct(a),m=t.weeklyCupKey===a&&Array.isArray(t.weeklyCupScores)?t.weeklyCupScores:[0,0,0];return`
      <div class="towers-challenges-layout">
        <div class="towers-challenge-cards-grid">
          <article class="towers-challenge-card zoning">
            <div class="ch-head">
              <span class="ch-badge">🚧 MEYDAN OKUMA #1</span>
              <strong>Çözülen: ${t.zoningSolvedCount||0}</strong>
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
              <strong>Çözülen: ${t.fogSolvedCount||0}</strong>
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
              <strong>Başarı: ${t.survivalClearsCount||0}</strong>
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
              <h3>🏆 Haftalık Mimar Kupası (${A(a)})</h3>
              <p>Tüm oyuncularla aynı 3 sabit tohumlu tuğla sokak etabı üzerinden yüksek skor yarışı.</p>
            </div>
            <span class="towers-cup-total">Toplam: ${m[0]+m[1]+m[2]} P</span>
          </div>
          <div class="towers-cup-grid">
            ${v.map(k=>{const l=m[k.index]||0;return`
                  <div class="towers-cup-stage ${l>0?"done":""}">
                    <div class="stage-top"><strong>${k.label}</strong><span>${k.size}×${k.size}</span></div>
                    <small>${A(k.subtitle)}</small>
                    <div class="stage-score">${l>0?`Skor: <b>${l} P</b>`:"Henüz Çözülmedi"}</div>
                    <button type="button" class="towers-city-play-btn" data-towers-cup-stage="${k.index}">
                      ${l>0?"Skoru Geliştir ↻":"Etap Başlat →"}
                    </button>
                  </div>
                `}).join("")}
          </div>
        </section>
      </div>
    `}if(e==="daily"){const a=new Date().toISOString().slice(0,10),v=t.dailyLastSolvedDate===a;return`
      <div class="towers-mode-panel">
        <div class="towers-mode-card">
          <span class="towers-mode-icon">🧱</span>
          <h2>Günlük Tuğla Bina (${a})</h2>
          <p>Her gün ortak <code>TWR-DAILY-${a}</code> tohum koduyla açılan <strong>5×5 Orta</strong> mahalle bulmacası.</p>
          <div class="towers-mode-badges">
            <span>🔥 Seri: <strong>${t.dailyStreak} Gün</strong></span>
            <span>🎁 Ödül: <strong>+135 XP • +2 💠</strong></span>
            <span>Durum: <strong>${v?"✅ Bugün Tamamlandı":"⏳ İnşaat Bekliyor"}</strong></span>
          </div>
          <button id="btn-towers-start-daily" class="towers-primary-cta">📅 Günlük Binayı Başlat (5×5)</button>
        </div>
      </div>
    `}return e==="blitz"?`
      <div class="towers-mode-panel">
        <div class="towers-mode-card">
          <span class="towers-mode-icon">⚡</span>
          <h2>Kule Blitz (120 Saniye Hız İnşaatı)</h2>
          <p>2 dakika içinde peş peşe mümkün olduğunca çok 4×4 tuğla mahalle bloğu tamamla.</p>
          <div class="towers-mode-badges">
            <span>🏅 Rekor: <strong>${t.bestBlitzScore} Puan</strong></span>
            <span>⏱️ Süre: <strong>02:00</strong></span>
          </div>
          <button id="btn-towers-start-blitz" class="towers-primary-cta">⚡ 2 Dk Blitz Başlat</button>
        </div>
      </div>
    `:e==="endless"?`
      <div class="towers-mode-panel">
        <div class="towers-mode-card">
          <span class="towers-mode-icon">🏗️</span>
          <h2>Sonsuz Tuğla İnşaat</h2>
          <p>4×4 kolay sokaklardan başlayıp dalga ilerledikçe 5×5 ve 6×6 gökdelenlere tırmanan seri modu.</p>
          <div class="towers-mode-badges">
            <span>🏆 Rekor Dalga: <strong>Dalga ${t.bestEndlessWave}</strong></span>
            <span>🎁 Dalga Başına: <strong>+110 XP • +1 💠</strong></span>
          </div>
          <button id="btn-towers-start-endless" class="towers-primary-cta">🏗️ Dalga ${n.endlessWave}'i Başlat</button>
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
              ${[4,5,6,7,8].map(a=>`
                <button type="button" class="towers-opt-pill ${n.customSize===a?"active":""}" data-custom-size="${a}">
                  ${a}×${a}
                </button>
              `).join("")}
            </div>
          </div>
          <div class="towers-form-group">
            <label>Zorluk</label>
            <div class="towers-pill-row">
              ${["easy","medium","hard"].map(a=>`
                <button type="button" class="towers-opt-pill ${n.customDifficulty===a?"active":""}" data-custom-diff="${a}">
                  ${a==="easy"?"🟢 Kolay":a==="medium"?"🟡 Orta":"🔴 Zor"}
                </button>
              `).join("")}
            </div>
          </div>
          <div class="towers-form-group">
            <label for="inp-towers-custom-seed">Özel Tohum Kodu (Opsiyonel)</label>
            <input id="inp-towers-custom-seed" class="towers-seed-input" type="text" placeholder="Örn: TWR-5-ORTA-2026" value="${A(n.customSeedInput)}" />
          </div>
        </div>
        <button id="btn-towers-start-custom" class="towers-primary-cta">🎲 ${n.customSize}×${n.customSize} İnşaata Başla</button>
      </div>
    </div>
  `}function Ut(n){const{isDesktopDock:t,username:e,pilotTag:s,isBeta:i,cloudSynced:a,canQuit:v,socialAttention:m,audio:k,stats:l,activeTab:d}=n,p=St(l.architectXp),c=J.find(y=>y.id===l.equippedCharacterId)||J[0],b=Bt(l),f=(l.solvedIds||[]).filter(y=>I.some(x=>x.id===y)).length,M=[{id:"campaign",icon:"🏙️",label:"Şehir Haritası",badge:`${f}/60`},{id:"challenges",icon:"🚧",label:"Challenge & Kupa",badge:"3+1"},{id:"daily",icon:"🧱",label:"Günlük Bina",badge:l.dailyStreak>0?`🔥${l.dailyStreak}`:""},{id:"blitz",icon:"⚡",label:"Kule Blitz",badge:""},{id:"endless",icon:"🏗️",label:"Sonsuz İnşaat",badge:""},{id:"custom",icon:"🎲",label:"Serbest Mimari",badge:""}];return`
    <header class="main-menu-topbar towers-menu-topbar">
      <div class="topbar-left">
        <button type="button" class="arcade-return-chip" id="btn-towers-back-hub" title="1000in1 Kaset Odasına Dön">🕹️ Kaset</button>
        <div class="topbar-desktop-telemetry">
          <span class="topbar-sector-pill towers-sector-pill">🧱 TOWERS • ${f}/${I.length} Mahalle • ⭐ ${b}/${I.length*3}</span>
          ${i?'<button type="button" class="beta-badge beta-lab-trigger" id="btn-towers-beta-lab" title="Towers Beta Test Laboratuvarı">🧪 BETA LAB</button>':""}
        </div>
      </div>

      <div class="topbar-actions">
        ${t?"":`
          <button type="button" class="steam-btn" id="btn-towers-open-social" title="DM &amp; Topluluk">
            <div>💬 SOSYAL</div>
            ${m>0?`<b class="social-nav-badge" style="display:inline-flex;">${m}</b>`:""}
          </button>
          <button type="button" class="steam-btn" id="btn-towers-tutorial"><div>🎓 EĞİTİM</div></button>
          <button type="button" class="steam-btn" id="btn-towers-workshop"><div>🏗️ ATÖLYE</div></button>
          <button type="button" class="steam-btn" id="btn-towers-settings"><div>⚙️ AYAR</div></button>
        `}
        ${v?'<button type="button" class="steam-btn quit-btn" id="btn-towers-quit"><div>ÇIKIŞ</div></button>':""}
      </div>
    </header>

    <main class="main-tab-stage towers-main-stage">
      <section class="towers-architect-hero">
        <div class="towers-architect-card">
          <div class="towers-architect-avatar" style="border-color:${c.accentColor}">
            ${at(c.id,46)}
          </div>
          <div class="towers-architect-info">
            <div class="towers-architect-head">
              <span class="towers-architect-name">${A(c.name)}</span>
              <span class="towers-architect-role">${A(c.title)}</span>
              <span class="towers-perk-chip">🧱 Güç +${c.powerScore}</span>
            </div>
            <div class="towers-xp-bar-wrap">
              <div class="towers-xp-labels">
                <span><strong>Mimar LVL ${p.level}</strong> • ${A(p.title)}</span>
                <span>${l.architectXp>=9e5?"MAX (Beta Sandbox)":`${p.currentXp} / ${p.nextLevelXp} XP (%${p.progressPct})`}</span>
              </div>
              <div class="towers-xp-track">
                <div class="towers-xp-fill" style="width:${p.progressPct}%"></div>
              </div>
            </div>
          </div>
        </div>

        <div class="towers-Currencies-row">
          <div class="towers-stat-chip"><span class="lbl">Proje Kristali</span><strong class="val">${l.blueprintGems>=9e8?"♾️ Beta":`💠 ${l.blueprintGems}`}</strong></div>
          <div class="towers-stat-chip"><span class="lbl">Mahalle</span><strong class="val">🏘️ ${f} / 60</strong></div>
          <div class="towers-stat-chip"><span class="lbl">Yıldız</span><strong class="val">⭐ ${b}</strong></div>
          <div class="towers-stat-chip"><span class="lbl">Başarım</span><strong class="val">🏅 ${l.unlockedAchievements.length}/24</strong></div>
        </div>
      </section>

      ${t?"":`
        <div class="towers-mobile-mode-strip" role="tablist">
          ${M.map(y=>`
            <button type="button" class="towers-mobile-pill ${d===y.id?"active":""}" data-towers-tab="${y.id}">
              ${y.icon} ${y.label}
            </button>
          `).join("")}
        </div>
      `}

      <div class="towers-tab-content">
        ${Wt(n)}
      </div>
    </main>

    <nav class="bottom-nav-dock towers-dock ${t?"discord-cockpit-dock":""}">
      ${t?`
        <div class="discord-single-top">
          <button type="button" class="discord-dm-nav-btn" id="btn-towers-open-social" title="Ortak Discord Sohbet, Arkadaşlar &amp; DM">
            <span class="discord-nav-indicator" aria-hidden="true"></span>
            <span class="discord-dm-icon-box" aria-hidden="true">💬</span>
            <span class="tab-label">DM &amp; Sohbet</span>
            ${m>0?`<b class="social-nav-badge" style="display:inline-flex;">${m}</b>`:""}
          </button>
          <div class="discord-nav-divider" aria-hidden="true"></div>
        </div>

        <div class="discord-single-links">
          ${M.map(y=>`
            <button type="button" class="bottom-nav-tab ${d===y.id?"active":""}" data-towers-tab="${y.id}">
              <span class="discord-nav-indicator" aria-hidden="true"></span>
              <span class="tab-icon">${y.icon}</span>
              <span class="tab-label">${y.label}</span>
              ${y.badge?`<span class="tab-badge">${A(y.badge)}</span>`:""}
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
            <span class="tab-badge">${l.unlockedAchievements.length}/${wt.length}</span>
          </button>
        </div>

        <div class="desktop-sidebar-footer discord-user-dock">
          <div class="discord-voice-ship-strip">
            <div class="sidebar-ship-preview">
              ${at(c.id,30)}
            </div>
            <div class="discord-voice-ship-info">
              <span class="discord-conn-green">● Şantiye Hazır</span>
              <small class="discord-conn-sub">LVL ${p.level} • ${A(c.name)}</small>
            </div>
            <button type="button" class="sidebar-hangar-mini-btn" id="btn-towers-workshop">🏗️ Atölye</button>
          </div>

          <div class="discord-user-bar">
            <button type="button" class="discord-user-identity profile-badge" id="btn-towers-open-profile" title="Ortak Oyuncu Kimliği">
              <div class="discord-user-avatar">
                ${at(c.id,28)}
                <span class="discord-presence-dot ${a?"online":"guest"}"></span>
              </div>
              <div class="discord-user-meta">
                <strong class="discord-user-nick">${A(e)}<small>#${A(s)}</small></strong>
                <span class="discord-user-sub">${l.totalPoints} Puan</span>
              </div>
            </button>
            <div class="discord-user-controls">
              <button type="button" class="discord-ctrl-btn ${k.soundEnabled?"is-on":"is-muted"}" id="btn-towers-dock-sfx" title="Ses Efektleri" aria-label="Ses Efektlerini Aç veya Kapat">🔊</button>
              <button type="button" class="discord-ctrl-btn ${k.musicEnabled?"is-on":"is-muted"}" id="btn-towers-dock-music" title="Şehir Müziği" aria-label="Şehir Müziğini Aç veya Kapat">🎵</button>
              <button type="button" class="discord-ctrl-btn" id="btn-towers-settings" title="Ayarlar" aria-label="Ayarlar">⚙️</button>
            </div>
          </div>
        </div>
      `:`
        <div class="bottom-nav-links">
          <button type="button" class="bottom-nav-tab ${d==="campaign"?"active":""}" data-towers-tab="campaign">
            <span class="tab-icon">🏙️</span><span class="tab-label">Harita</span>
          </button>
          <button type="button" class="bottom-nav-tab ${d==="challenges"?"active":""}" data-towers-tab="challenges">
            <span class="tab-icon">🚧</span><span class="tab-label">Challenge</span>
          </button>
          <button type="button" class="bottom-nav-tab ${d==="daily"?"active":""}" data-towers-tab="daily">
            <span class="tab-icon">🧱</span><span class="tab-label">Günlük</span>
          </button>
          <button type="button" class="bottom-nav-tab ${d==="blitz"?"active":""}" data-towers-tab="blitz">
            <span class="tab-icon">⚡</span><span class="tab-label">Blitz</span>
          </button>
          <button type="button" class="bottom-nav-tab" id="btn-towers-profile">
            <span class="tab-icon">🏅</span><span class="tab-label">Başarım</span>
          </button>
        </div>
      `}
    </nav>
  `}function R(n){return n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function Nt(n){const t=Math.max(0,Math.floor(n)),e=Math.floor(t/60),s=t%60;return`${String(e).padStart(2,"0")}:${String(s).padStart(2,"0")}`}const bt=[[1,3,2],[2,1,3],[3,2,1]],dt=[[1,0,0],[2,1,0],[3,0,1]];function Ot(n){const{step:t,miniBoard:e,selectedMiniCell:s,palId:i}=n,a=ct(i.facade,i.roof),v=e.every((l,d)=>l.every((p,c)=>p===bt[d][c])),m=[3,1,2],k=[2,2,1];return`
    <div class="towers-modal-backdrop" id="towers-tutorial-modal">
      <div class="towers-modal-card wide" role="dialog" aria-modal="true" aria-label="Towers Canlı Tuğla Sokak Eğitimi">
        <div class="towers-modal-head">
          <div>
            <h3>🎓 20 Saniyede Towers — Canlı Tuğla Sokak Eğitimi</h3>
            <p>Kutu seç ve eksik tuğla binaları yerleştirerek kuralı anında kavra!</p>
          </div>
          <button type="button" id="btn-towers-close-modal" class="towers-close-btn" aria-label="Kapat">✕</button>
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
                  <div class="mini-clue"><b>${k[l]}</b><small>▸</small></div>
                  ${[0,1,2].map(d=>{var y;const p=((y=e[l])==null?void 0:y[d])||0,c=dt[l][d]>0,b=s.r===l&&s.c===d,f=p>0&&p===bt[l][d],M=p>0&&p!==bt[l][d];return`
                        <button
                          type="button"
                          class="mini-cell ${c?"fixed":""} ${b?"selected":""} ${M?"wrong":f?"correct":""}"
                          data-tut-cell="${l}-${d}"
                        >
                          ${p>0?`<div class="mini-bldg-box">${gt(p,3,a,"roof_flat",{isGiven:c,viewMode:"3d"})}</div>`:'<span class="mini-empty-plus">+</span>'}
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
              <div class="towers-tut-status ${v?"ok":""}">
                ${v?"✅ Harika! Tüm 3×3 blok çözüldü, artık hazırsın!":`Seçili Kare: S${s.r+1}, K${s.c+1}`}
              </div>
            </div>
          </div>

          <div class="towers-modal-footer">
            ${t<3&&!v?'<button id="btn-towers-tutorial-next" class="towers-primary-cta">Sonraki Adım ➡️</button>':""}
            <button id="btn-towers-tutorial-practice" class="towers-primary-cta">
              🧱 ${v?"İlk Şehir #1-1 Başlat!":"Hemen #1-1 İle Başla"}
            </button>
          </div>
        </div>
      </div>
    </div>
  `}function Vt(){return`
    <div class="towers-modal-backdrop" id="towers-rules-modal">
      <div class="towers-modal-card" role="dialog" aria-modal="true" aria-label="Towers Kurallar ve Challenge Modları">
        <div class="towers-modal-head">
          <h3>📖 Towers — Kurallar &amp; Challenge Modları</h3>
          <button type="button" id="btn-towers-close-modal" class="towers-close-btn" aria-label="Kapat">✕</button>
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
  `}function jt(n){const t=Z.filter(s=>s.slot==="facade"),e=Z.filter(s=>s.slot==="roof");return`
    <div class="towers-modal-backdrop" id="towers-workshop-modal">
      <div class="towers-modal-card towers-workshop-card wide" role="dialog" aria-modal="true" aria-label="Mimarlık Bürosu ve Cephe Tasarımı">
        <div class="towers-modal-head workshop-head">
          <div>
            <h3>🏛️ Mimarlık Bürosu &amp; Cephe Tasarımı</h3>
            <p>Şantiye mimarını seç, binalarının tuğla rengini ve çatı silüetini değiştir.</p>
          </div>
          <div class="towers-modal-balance">
            <span class="balance-pill">💠 <strong>${n.blueprintGems}</strong></span>
            <button type="button" id="btn-towers-close-modal" class="towers-close-btn" aria-label="Kapat">✕</button>
          </div>
        </div>

        <div class="towers-modal-body">
          <h4 class="towers-section-sub">🏛️ Ünlü Mimarlar &amp; Müteahhitler (Efsaneviye Uzanan Kadro)</h4>
          <div class="towers-workshop-grid">
            ${J.map(s=>{const i=n.unlockedCharacterIds.includes(s.id),a=n.equippedCharacterId===s.id,v=n.blueprintGems>=s.costGems;return`
                <div class="towers-shop-item rarity-${s.rarity} ${a?"equipped":""}">
                  <div class="towers-shop-head-row">
                    <div class="towers-shop-avatar" style="border-color:${s.accentColor}">
                      ${at(s.id,62)}
                    </div>
                    <div class="towers-shop-info">
                      <span class="rarity-pill rarity-${s.rarity}">${R(s.rarityLabel)}</span>
                      <strong>${R(s.name)}</strong>
                      <span class="role">${R(s.title)}</span>
                      <span class="perk">🧱 İnşaat Ustalığı +${s.powerScore}</span>
                    </div>
                  </div>
                  <p class="towers-shop-desc">${R(s.description)}</p>
                  <div class="towers-shop-action">
                    ${a?'<button class="towers-shop-btn equipped" disabled>✅ Aktif Mimar</button>':i?`<button class="towers-shop-btn equip" data-equip-char="${s.id}">👷 Göreve Getir</button>`:`<button class="towers-shop-btn buy" data-buy-char="${s.id}" ${v?"":"disabled"}>🔓 Aç (💠 ${s.costGems})</button>`}
                  </div>
                </div>
              `}).join("")}
          </div>

          <h4 class="towers-section-sub">🧱 Bina Cephe Stilleri (Tahtada Renk &amp; Doku Değiştirir)</h4>
          <div class="towers-workshop-grid">
            ${t.map(s=>{const i=n.unlockedCosmeticIds.includes(s.id),a=n.equippedFacadeId===s.id,v=n.blueprintGems>=s.costGems,m=ct(s.id,n.equippedRoofId);return`
                  <div class="towers-shop-item ${a?"equipped":""}">
                    <div class="towers-shop-head-row">
                      <div class="towers-shop-swatch brick-preview">
                        ${gt(4,5,m,n.equippedRoofId,{viewMode:"3d"})}
                      </div>
                      <div class="towers-shop-info">
                        <strong>${R(s.name)}</strong>
                        <span class="role">🧱 Tuğla &amp; Taş Kaplama</span>
                      </div>
                    </div>
                    <p class="towers-shop-desc">${R(s.description)}</p>
                    <div class="towers-shop-action">
                      ${a?'<button class="towers-shop-btn equipped" disabled>✅ Kullanımda</button>':i?`<button class="towers-shop-btn equip" data-equip-cosmetic="${s.id}">🎨 Cepheye Uygula</button>`:`<button class="towers-shop-btn buy" data-buy-cosmetic="${s.id}" ${v?"":"disabled"}>🔓 Aç (💠 ${s.costGems})</button>`}
                    </div>
                  </div>
                `}).join("")}
          </div>

          <h4 class="towers-section-sub">🏰 Çatı Tasarımları &amp; Şehir Tepeleri</h4>
          <div class="towers-workshop-grid">
            ${e.map(s=>{const i=n.unlockedCosmeticIds.includes(s.id),a=n.equippedRoofId===s.id,v=n.blueprintGems>=s.costGems;return`
                  <div class="towers-shop-item ${a?"equipped":""}">
                    <div class="towers-shop-head-row">
                      <div class="towers-shop-swatch brick-preview roof-preview" style="border-color:${s.primaryColor}">
                        ${It(s.id,46)}
                      </div>
                      <div class="towers-shop-info">
                        <strong>${R(s.name)}</strong>
                        <span class="role">🏠 Çatı Silüeti</span>
                      </div>
                    </div>
                    <p class="towers-shop-desc">${R(s.description)}</p>
                    <div class="towers-shop-action">
                      ${a?'<button class="towers-shop-btn equipped" disabled>✅ Kullanımda</button>':i?`<button class="towers-shop-btn equip" data-equip-cosmetic="${s.id}">🏠 Çatıya Tak</button>`:`<button class="towers-shop-btn buy" data-buy-cosmetic="${s.id}" ${v?"":"disabled"}>🔓 Aç (💠 ${s.costGems})</button>`}
                    </div>
                  </div>
                `}).join("")}
          </div>
        </div>
      </div>
    </div>
  `}function Ft(n){const t=St(n.architectXp),e=Object.values(n.bestTimesSec),s=e.length>0?Math.min(...e):null;return`
    <div class="towers-modal-backdrop" id="towers-profile-modal">
      <div class="towers-modal-card wide" role="dialog" aria-modal="true" aria-label="Towers Başarımlar ve İstatistikler">
        <div class="towers-modal-head">
          <h3>🏆 Towers Başarımlar &amp; İstatistikler (LVL ${t.level} • ${R(t.title)})</h3>
          <button type="button" id="btn-towers-close-modal" class="towers-close-btn" aria-label="Kapat">✕</button>
        </div>
        <div class="towers-modal-body">
          <div class="towers-stats-summary-grid">
            <div class="towers-stat-box"><span>Çözülen Blok</span><strong>${n.totalSolved}</strong></div>
            <div class="towers-stat-box"><span>Toplam Puan</span><strong>${n.totalPoints}</strong></div>
            <div class="towers-stat-box"><span>En Hızlı Blok</span><strong>${s!==null?`${s} sn`:"—"}</strong></div>
            <div class="towers-stat-box"><span>İmar / Sis / Baret</span><strong>${(n.zoningSolvedCount||0)+(n.fogSolvedCount||0)+(n.survivalClearsCount||0)}</strong></div>
          </div>

          <h4 class="towers-section-sub">🎖️ Towers Başarımları (${n.unlockedAchievements.length} / ${wt.length})</h4>
          <div class="towers-ach-grid">
            ${wt.map(i=>`
                <div class="towers-ach-card ${n.unlockedAchievements.includes(i.id)?"unlocked":"locked"}">
                  <span class="ach-icon">${i.icon}</span>
                  <div>
                    <strong>${R(i.title)}</strong>
                    <p>${R(i.description)}</p>
                  </div>
                </div>
              `).join("")}
          </div>
        </div>
      </div>
    </div>
  `}function Yt(n){return`
    <div class="towers-modal-backdrop" id="towers-beta-modal">
      <div class="towers-modal-card" role="dialog" aria-modal="true" aria-label="Towers Beta Test Laboratuvarı">
        <div class="towers-modal-head">
          <h3>🧪 Towers Beta Test Laboratuvarı</h3>
          <button type="button" id="btn-towers-close-modal" class="towers-close-btn" aria-label="Kapat">✕</button>
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
  `}function Xt(n){const{elapsedSeconds:t,hintsUsed:e,summary:s,challengeKind:i,architect:a}=n;return`
    <div class="towers-modal-backdrop" id="towers-victory-modal">
      <div class="towers-modal-card victory" role="dialog" aria-modal="true" aria-label="İnşaat Tamamlandı">
        <div class="towers-victory-stars">${Array.from({length:3},(m,k)=>k<s.starsEarned?'<span class="star-on">★</span>':'<span class="star-off">☆</span>').join("")}</div>
        <h2>🧱 İnşaat Tamamlandı!</h2>
        <p>
          Süre: <strong>${Nt(t)}</strong> • Kullanılan İpucu: <strong>${e}</strong>
        </p>

        ${a?`
          <div class="towers-victory-arch-strip">
            <div class="towers-victory-arch-portrait" style="border-color:${a.accentColor}">
              ${at(a.id,52)}
            </div>
            <div class="towers-victory-arch-quote">
              <strong>${R(a.name)}</strong>
              <span>“${R(a.winQuote)}”</span>
            </div>
          </div>
        `:""}

        <div class="towers-victory-rewards">
          <div class="reward-pill">✨ +${s.xpGain} Mimar XP</div>
          <div class="reward-pill">💠 +${s.blueprintGain} Proje Kristali</div>
          ${i==="weekly_cup"&&s.cupScore?`<div class="reward-pill">🏆 Kupa Puanı: ${s.cupScore}</div>`:""}
        </div>

        ${s.leveledUp?'<div class="towers-levelup-banner">🎉 MİMAR SEVİYESİ YÜKSELDİ!</div>':""}
        ${s.newlyUnlockedAchievements.length>0?`<div class="towers-ach-unlock-strip">🏅 Yeni Başarım: ${s.newlyUnlockedAchievements.map(m=>`${m.icon} ${R(m.title)}`).join(" • ")}</div>`:""}

        <div class="towers-victory-actions">
          <button id="btn-towers-win-next" class="towers-primary-cta">➡️ Devam Et / Sıradaki Sokak</button>
          <button id="btn-towers-win-map" class="towers-secondary-cta">🏙️ Haritaya Dön</button>
        </div>
      </div>
    </div>
  `}function Qt(n){return`
    <div class="towers-modal-backdrop" id="towers-gameover-modal">
      <div class="towers-modal-card victory" role="dialog" aria-modal="true" aria-label="Şantiye Durduruldu">
        <div class="towers-victory-stars">🪖✖️</div>
        <h2>🚧 Şantiye Durduruldu!</h2>
        <p>${R(n)}</p>
        <div class="towers-victory-actions">
          <button id="btn-towers-retry-board" class="towers-primary-cta">🔄 Tekrar Dene</button>
          <button id="btn-towers-win-map" class="towers-secondary-cta">🏙️ Şehir Menüsüne Dön</button>
        </div>
      </div>
    </div>
  `}function st(n){return n.map(t=>[...t])}function mt(n){return n.map(t=>t.map(e=>[...e]))}class Zt{constructor(t){g(this,"host");g(this,"stats");g(this,"activeTab","campaign");g(this,"selectedEpisode",1);g(this,"activeModal",null);g(this,"tutorialStep",1);g(this,"tutorialMiniBoard",dt.map(t=>[...t]));g(this,"tutorialSelectedCell",{r:0,c:1});g(this,"customSize",4);g(this,"customDifficulty","easy");g(this,"customSeedInput","");g(this,"inBoardView",!1);g(this,"isPaused",!1);g(this,"activePuzzle",null);g(this,"activeMode","campaign");g(this,"activeChallengeKind","standard");g(this,"activeCupStageIdx",null);g(this,"activeCampaignLevel",null);g(this,"board",[]);g(this,"notes",[]);g(this,"history",[]);g(this,"redoStack",[]);g(this,"selectedCell",{r:0,c:0});g(this,"noteMode",!1);g(this,"activeHint",null);g(this,"activeSightRay",null);g(this,"lastBuiltCell",null);g(this,"buildAnimSeq",0);g(this,"hintsUsedThisGame",0);g(this,"elapsedSeconds",0);g(this,"timerHandle",null);g(this,"gameWon",!1);g(this,"gameOverReason","");g(this,"endlessWave",1);g(this,"blitzRemainingSeconds",120);g(this,"blitzScore",0);g(this,"blitzSolvedCount",0);g(this,"survivalLives",3);g(this,"survivalStreak",0);g(this,"lastWinSummary",null);g(this,"keydownHandler",null);g(this,"resizeHandler",null);g(this,"lastDesktopMode",typeof window<"u"?window.innerWidth>=900:!0);g(this,"mountEl",null);g(this,"viewMode","3d");this.host=t,this.stats=ut();try{this.viewMode=localStorage.getItem("pg_towers_view_mode_v1")==="2d"?"2d":"3d"}catch{this.viewMode="3d"}}reloadStats(){this.stats=ut()}getStats(){return this.stats}pauseIfPlaying(){this.inBoardView&&!this.gameWon&&!this.isPaused&&(this.isPaused=!0,this.render())}syncStatsFromStorage(){const t=JSON.stringify(this.stats);return this.stats=ut(),t!==JSON.stringify(this.stats)}syncStatsFromStorageAndRefresh(){(this.syncStatsFromStorage()||!this.inBoardView)&&this.render()}toggleViewMode(){var t,e;this.viewMode=this.viewMode==="3d"?"2d":"3d",this.lastBuiltCell=null;try{localStorage.setItem("pg_towers_view_mode_v1",this.viewMode)}catch{}(e=(t=this.host).playSound)==null||e.call(t,"click"),this.render()}handleBackNavigation(){return this.activeModal!==null?(this.activeModal=null,this.render(),!0):this.inBoardView?this.isPaused?(this.isPaused=!1,this.render(),!0):(this.stopTimer(),this.inBoardView=!1,this.render(),!0):!1}destroy(){this.stopTimer(),this.keydownHandler&&(window.removeEventListener("keydown",this.keydownHandler),this.keydownHandler=null),this.resizeHandler&&(window.removeEventListener("resize",this.resizeHandler),this.resizeHandler=null)}stopTimer(){this.timerHandle!==null&&(window.clearInterval(this.timerHandle),this.timerHandle=null)}startTimer(){this.stopTimer(),this.timerHandle=window.setInterval(()=>{if(!this.inBoardView||this.gameWon||this.isPaused||this.activeModal!==null)return;if(this.elapsedSeconds+=1,this.activeMode==="blitz"&&(this.blitzRemainingSeconds=Math.max(0,this.blitzRemainingSeconds-1),this.blitzRemainingSeconds<=0)){this.stopTimer(),this.inBoardView=!1,this.render();return}const t=document.getElementById("towers-hud-timer");t&&(t.textContent=this.activeMode==="blitz"?`⏱️ ${lt(this.blitzRemainingSeconds)}`:`⏱️ ${lt(this.elapsedSeconds)}`)},1e3)}mount(t){this.mountEl=t,this.reloadStats(),this.attachKeyboardListener(),this.attachResizeListener(),this.renderInto(t)}render(){const t=this.mountEl||document.getElementById("towers-mount-root")||document.getElementById("app");t&&this.renderInto(t)}attachResizeListener(){this.resizeHandler&&window.removeEventListener("resize",this.resizeHandler),this.resizeHandler=()=>{const t=window.innerWidth>=900;t!==this.lastDesktopMode&&(this.lastDesktopMode=t,this.lastBuiltCell=null,this.render())},window.addEventListener("resize",this.resizeHandler)}attachKeyboardListener(){this.keydownHandler&&window.removeEventListener("keydown",this.keydownHandler),this.keydownHandler=t=>{if(!this.inBoardView||!this.activePuzzle||this.activeModal!==null||this.isPaused||document.activeElement&&["INPUT","TEXTAREA"].includes(document.activeElement.tagName))return;const e=this.activePuzzle.size;if(t.key==="ArrowUp")t.preventDefault(),this.lastBuiltCell=null,this.selectedCell.r=(this.selectedCell.r-1+e)%e,this.render();else if(t.key==="ArrowDown")t.preventDefault(),this.lastBuiltCell=null,this.selectedCell.r=(this.selectedCell.r+1)%e,this.render();else if(t.key==="ArrowLeft")t.preventDefault(),this.lastBuiltCell=null,this.selectedCell.c=(this.selectedCell.c-1+e)%e,this.render();else if(t.key==="ArrowRight")t.preventDefault(),this.lastBuiltCell=null,this.selectedCell.c=(this.selectedCell.c+1)%e,this.render();else if(t.key.toLowerCase()==="n")t.preventDefault(),this.lastBuiltCell=null,this.noteMode=!this.noteMode,this.render();else if(t.key.toLowerCase()==="v")t.preventDefault(),this.toggleSightRayFromSelection();else if(t.key==="Backspace"||t.key==="Delete"||t.key==="0")t.preventDefault(),this.handleEraseInput();else if((t.ctrlKey||t.metaKey)&&t.key.toLowerCase()==="z")t.preventDefault(),this.handleUndo();else if((t.ctrlKey||t.metaKey)&&t.key.toLowerCase()==="y")t.preventDefault(),this.handleRedo();else if(/^[1-8]$/.test(t.key)){const s=Number(t.key);s>=1&&s<=e&&(t.preventDefault(),this.handleNumberInput(s))}},window.addEventListener("keydown",this.keydownHandler)}startPuzzleSession(t,e,s=null,i){var v,m;this.activePuzzle=t,this.activeMode=e,this.activeChallengeKind=t.challengeKind||"standard",this.activeCupStageIdx=(i==null?void 0:i.cupStageIdx)??null,this.activeCampaignLevel=s,this.board=st(t.givens),this.notes=Array.from({length:t.size},()=>Array.from({length:t.size},()=>[])),this.history=[],this.redoStack=[],this.selectedCell={r:0,c:0};let a=!1;for(let k=0;k<t.size&&!a;k++)for(let l=0;l<t.size;l++)if(t.givens[k][l]===0){this.selectedCell={r:k,c:l},a=!0;break}this.activeHint=null,this.activeSightRay=null,this.lastBuiltCell=null,this.hintsUsedThisGame=0,this.elapsedSeconds=0,this.gameWon=!1,this.isPaused=!1,this.gameOverReason="",this.inBoardView=!0,e==="blitz"&&(i==null?void 0:i.resetSeries)!==!1?(this.blitzRemainingSeconds=120,this.blitzScore=0,this.blitzSolvedCount=0):this.activeChallengeKind==="survival"&&(i==null?void 0:i.resetSeries)!==!1&&(this.survivalLives=3,this.survivalStreak=0),this.startTimer(),(m=(v=this.host).playSound)==null||m.call(v,"click"),this.render()}pushHistory(){this.history.push({board:st(this.board),notes:mt(this.notes)}),this.history.length>100&&this.history.shift(),this.redoStack=[]}handleNumberInput(t){var m,k,l,d,p,c,b,f,M,y,x;if(!this.activePuzzle||this.gameWon||this.isPaused)return;const{r:e,c:s}=this.selectedCell;if(((m=this.activePuzzle.givens[e])==null?void 0:m[s])>0){(l=(k=this.host).playSound)==null||l.call(k,"error");return}if(this.pushHistory(),this.activeHint=null,this.noteMode){this.board[e][s]!==0&&(this.board[e][s]=0);const $=this.notes[e][s],o=$.indexOf(t);o>=0?$.splice(o,1):($.push(t),$.sort((u,h)=>u-h)),(p=(d=this.host).playSound)==null||p.call(d,"click"),this.render();return}if(this.board[e][s]=this.board[e][s]===t?0:t,this.notes[e][s]=[],this.board[e][s]===0){this.lastBuiltCell=null,(b=(c=this.host).playSound)==null||b.call(c,"erase"),this.render();return}const i=this.board[e][s];this.lastBuiltCell={r:e,c:s,seq:++this.buildAnimSeq};const a=pt(this.activePuzzle,this.board);if(a.duplicateKeys.has(`${e},${s}`)||a.zoningViolationKeys.has(`${e},${s}`)||this.activeChallengeKind==="survival"&&i!==this.activePuzzle.solution[e][s]){if((M=(f=this.host).playSound)==null||M.call(f,"error"),this.activeChallengeKind==="survival"&&(this.survivalLives=Math.max(0,this.survivalLives-1),this.survivalLives<=0)){this.stopTimer(),this.gameOverReason="3 inşaat baretinin tamamı tükendi! Kat çakışması veya hatalı kat yerleşimi şantiyeyi durdurdu.",this.activeModal="gameover",this.render();return}}else(x=(y=this.host).playSound)==null||x.call(y,"place",{floors:i,maxFloors:this.activePuzzle.size});this.checkWinAfterMove(),this.render()}handleEraseInput(){var s,i,a;if(!this.activePuzzle||this.gameWon||this.isPaused)return;const{r:t,c:e}=this.selectedCell;((s=this.activePuzzle.givens[t])==null?void 0:s[e])>0||this.board[t][e]===0&&this.notes[t][e].length===0||(this.pushHistory(),this.board[t][e]=0,this.notes[t][e]=[],this.activeHint=null,this.lastBuiltCell=null,(a=(i=this.host).playSound)==null||a.call(i,"erase"),this.render())}handleUndo(){var e,s;if(this.history.length===0||this.gameWon||this.isPaused)return;this.redoStack.push({board:st(this.board),notes:mt(this.notes)});const t=this.history.pop();this.board=t.board,this.notes=t.notes,this.activeHint=null,this.lastBuiltCell=null,(s=(e=this.host).playSound)==null||s.call(e,"click"),this.render()}handleRedo(){var e,s;if(this.redoStack.length===0||this.gameWon||this.isPaused)return;this.history.push({board:st(this.board),notes:mt(this.notes)});const t=this.redoStack.pop();this.board=t.board,this.notes=t.notes,this.activeHint=null,this.lastBuiltCell=null,(s=(e=this.host).playSound)==null||s.call(e,"click"),this.render()}handleSmartHint(){var e,s;if(!this.activePuzzle||this.gameWon||this.isPaused)return;const t=At(this.activePuzzle,this.board);if(t){if(this.activeHint=t,this.selectedCell={r:t.r,c:t.c},this.hintsUsedThisGame+=1,t.focusClueKey){const[i,a]=t.focusClueKey.split(":");this.activeSightRay={side:i,index:Number(a)||0}}(s=(e=this.host).playSound)==null||s.call(e,"hint"),this.render()}}applyActiveHintMove(){var i,a,v;if(!this.activeHint||!this.activePuzzle||this.gameWon)return;const{r:t,c:e,value:s}=this.activeHint;((i=this.activePuzzle.givens[t])==null?void 0:i[e])>0||(this.pushHistory(),this.board[t][e]=s,this.notes[t][e]=[],this.lastBuiltCell={r:t,c:e,seq:++this.buildAnimSeq},this.activeHint=null,(v=(a=this.host).playSound)==null||v.call(a,"place",{floors:s,maxFloors:this.activePuzzle.size}),this.checkWinAfterMove(),this.render())}toggleSightRayFromSelection(){var t,e;this.activePuzzle&&(this.activeSightRay?this.activeSightRay.side==="left"||this.activeSightRay.side==="right"?this.activeSightRay={side:"top",index:this.selectedCell.c}:this.activeSightRay=null:this.activeSightRay={side:"left",index:this.selectedCell.r},(e=(t=this.host).playSound)==null||e.call(t,"click"),this.render())}checkWinAfterMove(){var a,v,m,k,l,d,p,c,b,f,M,y,x;if(!this.activePuzzle||this.gameWon||!pt(this.activePuzzle,this.board).isSolved)return;const e=new Date().toISOString().slice(0,10);if(this.activeMode==="blitz"){this.blitzSolvedCount+=1,this.blitzScore+=180+Math.max(0,25-this.hintsUsedThisGame*20),this.blitzScore>this.stats.bestBlitzScore&&(this.stats.bestBlitzScore=this.blitzScore);const $=`TWR-BLITZ-${Date.now()}-${this.blitzSolvedCount}`,o=V(4,"easy",$,{title:`⚡ Blitz Kule #${this.blitzSolvedCount+1}`});(v=(a=this.host).playSound)==null||v.call(a,"win");const u=Pt(this.stats,{elapsedSec:this.elapsedSeconds,hintsUsed:this.hintsUsedThisGame,size:4,isDaily:!1});u.length>0&&(this.stats.blueprintGems+=u.length),ot(this.stats),(k=(m=this.host).onCloudStateChanged)==null||k.call(m,!0),tt("towers_solve"),this.hintsUsedThisGame===0&&tt("no_hint_solve"),this.startPuzzleSession(o,"blitz",null,{resetSeries:!1});return}if(this.activeMode==="endless"){this.endlessWave>this.stats.bestEndlessWave&&(this.stats.bestEndlessWave=this.endlessWave),this.endlessWave+=1;const $=$t(this.stats,{puzzleId:this.activePuzzle.id,size:this.activePuzzle.size,difficulty:this.activePuzzle.difficulty,elapsedSec:this.elapsedSeconds,hintsUsed:this.hintsUsedThisGame});this.stats=$.nextStats,(d=(l=this.host).onCloudStateChanged)==null||d.call(l,!0),tt("towers_solve"),this.hintsUsedThisGame===0&&tt("no_hint_solve"),this.gameWon=!0,this.stopTimer(),this.lastWinSummary={starsEarned:$.starsEarned,xpGain:$.xpEarned,blueprintGain:$.gemsEarned,leveledUp:$.leveledUp,newlyUnlockedAchievements:$.newlyUnlockedAchievements},this.activeModal="victory",(c=(p=this.host).playSound)==null||c.call(p,"win");return}this.activeChallengeKind==="zoning"?this.stats.zoningSolvedCount=(this.stats.zoningSolvedCount||0)+1:this.activeChallengeKind==="fog"?this.stats.fogSolvedCount=(this.stats.fogSolvedCount||0)+1:this.activeChallengeKind==="survival"&&(this.survivalStreak+=1,this.stats.survivalClearsCount=(this.stats.survivalClearsCount||0)+1);let s;if(this.activeChallengeKind==="weekly_cup"&&this.activeCupStageIdx!==null){const $=zt(),o=Ht(this.activePuzzle.size,this.elapsedSeconds,this.hintsUsedThisGame);s=o;const u=this.stats.weeklyCupKey,h=u===$&&Array.isArray(this.stats.weeklyCupScores)?[...this.stats.weeklyCupScores]:[0,0,0],S=u===$&&Array.isArray(this.stats.weeklyCupRewarded)?[...this.stats.weeklyCupRewarded]:[!1,!1,!1];h[this.activeCupStageIdx]=Math.max(h[this.activeCupStageIdx]||0,o),S[this.activeCupStageIdx]=!0,this.stats.weeklyCupKey=$,this.stats.weeklyCupScores=h,this.stats.weeklyCupRewarded=S}this.gameWon=!0,this.stopTimer();const i=$t(this.stats,{puzzleId:((b=this.activeCampaignLevel)==null?void 0:b.id)||this.activePuzzle.id,size:this.activePuzzle.size,difficulty:this.activePuzzle.difficulty,elapsedSec:this.elapsedSeconds,hintsUsed:this.hintsUsedThisGame,isDaily:this.activeMode==="daily",dailyDateKey:this.activeMode==="daily"?e:void 0,campaignLevel:this.activeCampaignLevel?{goldSec:this.activeCampaignLevel.goldSec,silverSec:this.activeCampaignLevel.silverSec}:null});this.stats=i.nextStats,(M=(f=this.host).onCloudStateChanged)==null||M.call(f,!0),tt("towers_solve"),this.hintsUsedThisGame===0&&tt("no_hint_solve"),this.activeChallengeKind==="weekly_cup"&&tt("duel_or_cup"),this.lastWinSummary={starsEarned:i.starsEarned,xpGain:i.xpEarned,blueprintGain:i.gemsEarned,leveledUp:i.leveledUp,newlyUnlockedAchievements:i.newlyUnlockedAchievements,cupScore:s},this.activeModal="victory",(x=(y=this.host).playSound)==null||x.call(y,"win")}getUnlockedCampaignIndex(){let t=-1;for(let e=0;e<I.length;e++)this.stats.solvedIds.includes(I[e].id)&&(t=e);return Math.min(I.length-1,t+1)}renderInto(t){var a,v,m,k;const e=typeof window<"u"?window.innerWidth>=900:!0;this.lastDesktopMode=e;const s=((v=(a=this.host).renderTitlebar)==null?void 0:v.call(a))||"",i=this.inBoardView&&this.activePuzzle?this.renderBoardScreenHTML():this.renderHubScreenHTML(e);t.innerHTML=`
      ${s}
      <div class="screen-body ${this.inBoardView?"towers-board-body":"menu-mode towers-menu-mode"}" id="towers-screen">
        ${i}
        ${this.renderActiveModal()}
      </div>
    `,(k=(m=this.host).bindTitlebarEvents)==null||k.call(m),this.bindEvents(t)}renderHubScreenHTML(t){var e,s,i,a,v,m,k,l;return Ut({isDesktopDock:t,username:this.host.getUsername(),pilotTag:this.host.getPilotTag(),isBeta:this.host.isBetaChannel(),cloudSynced:((s=(e=this.host).getCloudSynced)==null?void 0:s.call(e))??!1,canQuit:((a=(i=this.host).canQuit)==null?void 0:a.call(i))??!1,socialAttention:((m=(v=this.host).getSocialAttentionCount)==null?void 0:m.call(v))??0,audio:((l=(k=this.host).getAudioSettings)==null?void 0:l.call(k))??{soundEnabled:!0,musicEnabled:!0},stats:this.stats,activeTab:this.activeTab,selectedEpisode:this.selectedEpisode,unlockedCampaignIdx:this.getUnlockedCampaignIndex(),endlessWave:this.endlessWave,customSize:this.customSize,customDifficulty:this.customDifficulty,customSeedInput:this.customSeedInput})}getArchitectSpeechState(t,e,s){return Dt({charId:t,hasActiveHint:!!this.activeHint,hasConflict:e,hasSightRay:!!this.activeSightRay,remainingCells:s,puzzleInfo:this.activePuzzle?{size:this.activePuzzle.size,givensCount:this.activePuzzle.givens.flat().filter(i=>i>0).length}:null})}renderBoardScreenHTML(){var $,o;const t=this.activePuzzle,e=t.size,s=pt(t,this.board),i=J.find(u=>u.id===this.stats.equippedCharacterId)||J[0],a=Z.find(u=>u.id===this.stats.equippedFacadeId)||Z[0],v=Z.find(u=>u.id===this.stats.equippedRoofId)||Z[5],m=ct(a.id,v.id),k=new Int32Array(e+1);let l=0;for(let u=0;u<e;u++)for(let h=0;h<e;h++){const S=this.board[u][h];S>=1&&S<=e?k[S]++:l++}const d=s.duplicateKeys.size>0||s.zoningViolationKeys.size>0||s.violatedClueKeys.size>0,p=this.getArchitectSpeechState(i.id,d,l),c=new Map;let b="";if(this.activeSightRay){const{side:u,index:h}=this.activeSightRay,S=!!((o=($=t.hiddenCluesMask)==null?void 0:$[u])!=null&&o[h]),z=S?0:t.clues[u][h],L=[];for(let E=0;E<e;E++){let H=h,q=E;u==="top"?(H=E,q=h):u==="bottom"?(H=e-1-E,q=h):u==="left"?(H=h,q=E):(H=h,q=e-1-E),L.push({r:H,c:q})}const P=Kt(L,this.board,z,u,h);P.visibleCells.forEach(E=>c.set(`${E.r},${E.c}`,"visible")),P.hiddenCells.forEach(E=>c.set(`${E.r},${E.c}`,"blocked")),b=`
        <div class="towers-sight-banner" id="towers-sight-banner">
          <span>👁️ <strong>Görüş Hattı (${u==="top"?`${h+1}. Sütun (Üstten ▾)`:u==="bottom"?`${h+1}. Sütun (Alttan ▴)`:u==="left"?`${h+1}. Satır (Soldan ▸)`:`${h+1}. Satır (Sağdan ◂)`}):</strong> ${S?"Sisli İpucu (?)":`Hedef = <b>${z||"Yok"}</b>`} • <b class="sight-ok">Görüldü: ${P.visibleCells.length}</b> • <b class="sight-hid">Örtüldü: ${P.hiddenCells.length}</b></span>
          <button type="button" id="btn-towers-clear-sight" class="towers-mini-btn">Kapat ✕</button>
        </div>
      `}const f=this.activeMode==="campaign"&&this.activeCampaignLevel?`🏘️ #${this.activeCampaignLevel.code}: ${this.activeCampaignLevel.cityName}`:this.activeMode==="daily"?"🧱 Günlük Bina":this.activeMode==="endless"?`🏗️ Dalga #${this.endlessWave}`:this.activeMode==="blitz"?`⚡ Blitz: ${this.blitzScore} P`:this.activeChallengeKind==="zoning"?"🚧 İmar Kısıtı":this.activeChallengeKind==="fog"?"🌫️ Sisli Sokak":this.activeChallengeKind==="survival"?"🪖 3 Baret Hayatta Kalma":this.activeChallengeKind==="weekly_cup"?`🏆 Kupa Etabı #${(this.activeCupStageIdx??0)+1}`:`🎲 Serbest (${e}×${e})`,M=(u,h)=>{var z,L;if((L=(z=t.hiddenCluesMask)==null?void 0:z[u])!=null&&L[h])return"fogged";const S=`${u}:${h}`;return s.violatedClueKeys.has(S)?"violated":s.satisfiedClueKeys.has(S)?"satisfied":"pending"},y=(u,h,S)=>{var H,q,U,N;const z=!!((q=(H=t.hiddenCluesMask)==null?void 0:H[u])!=null&&q[h]),L=t.clues[u][h],P=M(u,h),T=((U=this.activeSightRay)==null?void 0:U.side)===u&&((N=this.activeSightRay)==null?void 0:N.index)===h,E=z?"🌫️":L>0?String(L):"·";return`
        <button
          type="button"
          class="towers-clue-cell ${u} ${P} ${T?"active-ray":""}"
          data-towers-clue="${u}-${h}"
          title="${z?"Sisli İpucu":"Görüş Hattını Göster / Gizle"}"
        >
          ${u==="right"||u==="bottom"?`<span class="clue-arrow">${S}</span><span class="clue-num">${E}</span>`:`<span class="clue-num">${E}</span><span class="clue-arrow">${S}</span>`}
        </button>
      `};return`
      <div class="towers-board-screen ${!!(this.activeHint||b)?"has-banner":""}" id="towers-board-screen">
        <div class="towers-board-hud">
          <div class="hud-left-btns">
            <button type="button" id="btn-towers-leave-board" class="towers-back-map-btn">⬅️ Menü</button>
            <button type="button" id="btn-towers-pause" class="towers-back-map-btn">${this.isPaused?"▶️ Sürdür":"⏸️ Duraklat"}</button>
          </div>

          <div class="towers-hud-center">
            <span class="towers-hud-title">${A(f)}</span>
            <span class="towers-hud-sub">${e}×${e} • ${A(a.name)}</span>
          </div>

          <div class="towers-hud-metrics">
            ${this.activeChallengeKind==="survival"?`<span class="towers-hud-pill survival-lives">${"🪖".repeat(this.survivalLives)}${"⚫".repeat(Math.max(0,3-this.survivalLives))}</span>`:""}
            <span class="towers-hud-pill" id="towers-hud-timer">
              ⏱️ ${this.activeMode==="blitz"?lt(this.blitzRemainingSeconds):lt(this.elapsedSeconds)}
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

        ${this.activeHint?"":b}

        ${this.activeHint?`
          <div class="towers-hint-banner" id="towers-hint-banner">
            <div class="towers-hint-text">
              <span class="hint-kind-pill ${this.activeHint.isCorrection?"fix":"deduce"}">${this.activeHint.isCorrection?"🔧 DÜZELTME":"🔍 İPUCU"}</span>
              <strong>${A(this.activeHint.ruleTitle)}:</strong> ${A(this.activeHint.message)}
            </div>
            <div class="towers-hint-actions">
              <button type="button" id="btn-towers-apply-hint" class="towers-apply-hint-btn">
                🧱 Buraya ${this.activeHint.value} Kat Dik (${this.activeHint.r+1}. Satır, ${this.activeHint.c+1}. Sütun)
              </button>
              <button type="button" id="btn-towers-close-hint" class="towers-mini-btn ghost" title="İpucunu Kapat">✕</button>
            </div>
          </div>
        `:""}

        <aside class="towers-architect-assistant" aria-label="Şantiye Mimarı">
          <div class="arch-assist-head">
            <div class="arch-assist-portrait" style="border-color:${i.accentColor}">
              ${at(i.id,44)}
            </div>
            <div class="arch-assist-meta">
              <strong>${A(i.name)}</strong>
              <small>${A(i.rarityLabel)}</small>
            </div>
          </div>
          <div class="arch-assist-bubble ${p.tone==="normal"?"":p.tone}">
            “${A(p.text)}”
          </div>
          <div class="arch-assist-cosmetics">
            <span>🧱 ${A(a.name)}</span>
            <span>🏠 ${A(v.name)}</span>
          </div>
        </aside>

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
            ${Array.from({length:e},(u,h)=>y("top",h,"▼")).join("")}
            <div class="towers-corner-spacer"></div>

            ${Array.from({length:e},(u,h)=>{var L;const S=((L=this.board[this.selectedCell.r])==null?void 0:L[this.selectedCell.c])||0,z=Array.from({length:e},(P,T)=>{var w,C,B,K,F,Y,X,nt,yt,ft,kt;const E=this.board[h][T],H=t.givens[h][T]>0,q=this.selectedCell.r===h&&this.selectedCell.c===T,U=!q&&(h===this.selectedCell.r||T===this.selectedCell.c),N=!q&&E>0&&S>0&&E===S,et=s.duplicateKeys.has(`${h},${T}`),W=s.zoningViolationKeys.has(`${h},${T}`),_=((C=(w=t.maxHeightLimits)==null?void 0:w[h])==null?void 0:C[T])||0,O=((B=this.activeHint)==null?void 0:B.r)===h&&((K=this.activeHint)==null?void 0:K.c)===T,j=!!((F=this.activeHint)!=null&&F.focusLine)&&(((X=(Y=this.activeHint)==null?void 0:Y.focusLine)==null?void 0:X.kind)==="row"&&this.activeHint.focusLine.index===h||((yt=(nt=this.activeHint)==null?void 0:nt.focusLine)==null?void 0:yt.kind)==="col"&&this.activeHint.focusLine.index===T),G=c.get(`${h},${T}`)||"",D=this.notes[h][T],r=E>0&&((ft=this.lastBuiltCell)==null?void 0:ft.r)===h&&((kt=this.lastBuiltCell)==null?void 0:kt.c)===T;return`
                  <div
                    class="towers-cell ${E>0?"has-tower":"empty"} ${H?"given":""} ${q?"selected":""} ${U?"crosshair-hl":""} ${N?"same-val-hl":""} ${et||W?"conflict":""} ${O?"hint-target":""} ${j&&!O?"hint-focus-line":""} ${_>0?"zoned":""} ${r?"just-built":""} ${G?`sight-${G}`:""}"
                    data-towers-cell="${h}-${T}"
                    data-row="${h}"
                    data-col="${T}"
                    data-val="${E}"
                  >
                    ${O&&this.activeHint?`<span class="tower-hint-badge" aria-hidden="true">👇 ${this.activeHint.value}</span>`:""}
                    ${_>0?`<span class="tower-zone-badge" title="İmar Kısıtı: Maksimum ${_} kat">≤${_}</span>`:""}
                    ${E>0?`
                      <div class="tower-pixel-bldg-wrap">
                        ${gt(E,e,m,v.id,{isGiven:H,viewMode:this.viewMode})}
                      </div>
                    `:D.length>0?`
                      <div class="tower-notes-grid">
                        ${Array.from({length:e},(Jt,Et)=>{const ht=Et+1;return`<span class="tower-note-item ${D.includes(ht)?"on":""}">${D.includes(ht)?ht:""}</span>`}).join("")}
                      </div>
                    `:""}
                    ${G==="visible"?'<span class="tower-sight-tag visible" title="Görüldü">👁️</span>':G==="blocked"?'<span class="tower-sight-tag blocked" title="Önündeki yüksek bina tarafından örtüldü">⬛</span>':""}
                  </div>
                `}).join("");return`${y("left",h,"▶")}${z}${y("right",h,"◀")}`}).join("")}

            <div class="towers-corner-spacer"></div>
            ${Array.from({length:e},(u,h)=>y("bottom",h,"▲")).join("")}
            <div class="towers-corner-spacer"></div>
          </div>
          </div>
        </div>

        <div class="towers-controls-dock">
          <div class="towers-numpad" role="group" aria-label="Bina Kat Yüksekliği">
            ${Array.from({length:e},(u,h)=>{const S=h+1,z=Math.max(0,e-k[S]);return`
                <button
                  type="button"
                  class="towers-num-btn ${this.noteMode?"note-active":""} ${z===0?"all-placed":""}"
                  data-towers-num="${S}"
                >
                  <span class="num-main">${S}</span>
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
    `}renderActiveModal(){if(!this.activeModal)return"";if(this.activeModal==="tutorial")return Ot({step:this.tutorialStep,miniBoard:this.tutorialMiniBoard,selectedMiniCell:this.tutorialSelectedCell,palId:{facade:this.stats.equippedFacadeId,roof:this.stats.equippedRoofId}});if(this.activeModal==="rules")return Vt();if(this.activeModal==="workshop")return jt(this.stats);if(this.activeModal==="profile")return Ft(this.stats);if(this.activeModal==="beta-lab")return Yt(this.inBoardView);if(this.activeModal==="gameover")return Qt(this.gameOverReason);if(this.activeModal==="victory"&&this.lastWinSummary){const t=J.find(s=>s.id===this.stats.equippedCharacterId)||J[0],e=this.getArchitectSpeechState(t.id,!1,0);return Xt({elapsedSeconds:this.elapsedSeconds,hintsUsed:this.hintsUsedThisGame,challengeKind:this.activeChallengeKind,architect:{id:t.id,name:t.name,title:t.title,accentColor:t.accentColor,winQuote:e.winQuote},summary:this.lastWinSummary})}return""}bindEvents(t){var s,i,a,v,m,k,l,d,p,c,b,f,M,y,x,$,o,u,h,S,z,L,P,T,E,H,q,U,N,et,W,_,O,j,G,D;(s=t.querySelector("#btn-towers-back-hub"))==null||s.addEventListener("click",()=>{this.stopTimer(),this.host.onBackToHub()}),(i=t.querySelector("#btn-towers-open-social"))==null||i.addEventListener("click",()=>{var r,w;(w=(r=this.host).onOpenSocialHub)==null||w.call(r)}),(a=t.querySelector("#btn-towers-open-profile"))==null||a.addEventListener("click",()=>{var r,w;(w=(r=this.host).onOpenGlobalProfile)==null||w.call(r)}),(v=t.querySelector("#btn-towers-dock-sfx"))==null||v.addEventListener("click",()=>{var r,w;(w=(r=this.host).onToggleSound)==null||w.call(r),this.render()}),(m=t.querySelector("#btn-towers-dock-music"))==null||m.addEventListener("click",()=>{var r,w;(w=(r=this.host).onToggleMusic)==null||w.call(r),this.render()}),(k=t.querySelector("#btn-towers-quit"))==null||k.addEventListener("click",()=>{var r,w;(w=(r=this.host).onQuitApp)==null||w.call(r)}),(l=t.querySelector("#btn-towers-tutorial"))==null||l.addEventListener("click",()=>{this.tutorialStep=1,this.tutorialMiniBoard=dt.map(r=>[...r]),this.tutorialSelectedCell={r:0,c:1},this.activeModal="tutorial",this.render()}),(d=t.querySelector("#btn-towers-rules"))==null||d.addEventListener("click",()=>{this.activeModal="rules",this.render()}),(p=t.querySelector("#btn-towers-workshop"))==null||p.addEventListener("click",()=>{this.activeModal="workshop",this.render()}),(c=t.querySelector("#btn-towers-profile"))==null||c.addEventListener("click",()=>{this.activeModal="profile",this.render()}),(b=t.querySelector("#btn-towers-settings"))==null||b.addEventListener("click",()=>{this.host.onOpenGlobalSettings()}),(f=t.querySelector("#btn-towers-beta-lab"))==null||f.addEventListener("click",()=>{this.activeModal="beta-lab",this.render()}),(M=t.querySelector("#btn-towers-close-modal"))==null||M.addEventListener("click",()=>{this.activeModal=null,this.render()}),t.querySelectorAll("[data-tut-step]").forEach(r=>{r.addEventListener("click",()=>{this.tutorialStep=Number(r.dataset.tutStep)||1,this.render()})}),t.querySelectorAll("[data-tut-cell]").forEach(r=>{r.addEventListener("click",()=>{var F,Y,X;const[w,C]=(r.dataset.tutCell||"0-0").split("-"),B=Number(w)||0,K=Number(C)||0;((F=dt[B])==null?void 0:F[K])>0||(this.tutorialSelectedCell={r:B,c:K},(X=(Y=this.host).playSound)==null||X.call(Y,"click"),this.render())})}),t.querySelectorAll("[data-tut-num]").forEach(r=>{r.addEventListener("click",()=>{var K,F,Y,X,nt;const w=Number(r.dataset.tutNum)||0,{r:C,c:B}=this.tutorialSelectedCell;((K=dt[C])==null?void 0:K[B])>0||(this.tutorialMiniBoard[C][B]=w,w>0?(Y=(F=this.host).playSound)==null||Y.call(F,"place",{floors:w,maxFloors:3}):(nt=(X=this.host).playSound)==null||nt.call(X,"erase"),this.render())})}),(y=t.querySelector("#btn-towers-tutorial-next"))==null||y.addEventListener("click",()=>{this.tutorialStep=Math.min(3,this.tutorialStep+1),this.render()}),(x=t.querySelector("#btn-towers-tutorial-practice"))==null||x.addEventListener("click",()=>{this.activeModal=null;const r=I[0],w=V(r.size,r.difficulty,r.seed,{id:r.id,title:r.cityName,code:r.code});this.startPuzzleSession(w,"campaign",r)}),t.querySelectorAll("[data-towers-tab]").forEach(r=>{r.addEventListener("click",()=>{var C,B;const w=r.dataset.towersTab;w&&(this.activeTab=w,(B=(C=this.host).playSound)==null||B.call(C,"click"),this.render())})}),t.querySelectorAll("[data-towers-ep]").forEach(r=>{r.addEventListener("click",()=>{this.selectedEpisode=Number(r.dataset.towersEp)||1,this.render()})}),t.querySelectorAll("[data-start-campaign]").forEach(r=>{r.addEventListener("click",()=>{const w=r.dataset.startCampaign,C=I.find(K=>K.id===w);if(!C)return;const B=C.challengeKind==="zoning"||C.challengeKind==="fog"?rt(C.challengeKind,C.size,C.difficulty,C.seed,{id:C.id,title:C.cityName,code:C.code}):V(C.size,C.difficulty,C.seed,{id:C.id,title:C.cityName,code:C.code});this.startPuzzleSession(B,"campaign",C)})}),($=t.querySelector("#btn-towers-start-zoning"))==null||$.addEventListener("click",()=>{const r=rt("zoning",5,"medium",`TWR-ZONE-${Date.now()}`);this.startPuzzleSession(r,"challenge")}),(o=t.querySelector("#btn-towers-start-fog"))==null||o.addEventListener("click",()=>{const r=rt("fog",5,"medium",`TWR-FOG-${Date.now()}`);this.startPuzzleSession(r,"challenge")}),(u=t.querySelector("#btn-towers-start-survival"))==null||u.addEventListener("click",()=>{const r=rt("survival",5,"hard",`TWR-SURV-${Date.now()}`);this.startPuzzleSession(r,"challenge")}),t.querySelectorAll("[data-towers-cup-stage]").forEach(r=>{r.addEventListener("click",()=>{const w=Number(r.dataset.towersCupStage);if(w!==0&&w!==1&&w!==2)return;const B=Ct()[w],K=rt(B.challengeKind==="zoning"?"zoning":"weekly_cup",B.size,B.difficulty,B.seed,{id:B.seed,title:`🏆 ${B.label}: ${B.subtitle}`});K.challengeKind="weekly_cup",this.startPuzzleSession(K,"challenge",null,{cupStageIdx:w})})}),(h=t.querySelector("#btn-towers-start-daily"))==null||h.addEventListener("click",()=>{const r=new Date().toISOString().slice(0,10),w=V(5,"medium",`TWR-DAILY-${r}`);this.startPuzzleSession(w,"daily")}),(S=t.querySelector("#btn-towers-start-endless"))==null||S.addEventListener("click",()=>{const r=this.endlessWave<=2?4:this.endlessWave<=5?5:6,w=this.endlessWave<=2?"easy":this.endlessWave<=6?"medium":"hard",C=V(r,w,`TWR-ENDLESS-W${this.endlessWave}-${Date.now()}`);this.startPuzzleSession(C,"endless")}),(z=t.querySelector("#btn-towers-start-blitz"))==null||z.addEventListener("click",()=>{const r=V(4,"easy",`TWR-BLITZ-${Date.now()}-0`);this.startPuzzleSession(r,"blitz")}),t.querySelectorAll("[data-custom-size]").forEach(r=>{r.addEventListener("click",()=>{this.customSize=Number(r.dataset.customSize)||4,this.render()})}),t.querySelectorAll("[data-custom-diff]").forEach(r=>{r.addEventListener("click",()=>{this.customDifficulty=r.dataset.customDiff||"easy",this.render()})});const e=t.querySelector("#inp-towers-custom-seed");e==null||e.addEventListener("input",()=>{this.customSeedInput=e.value}),(L=t.querySelector("#btn-towers-start-custom"))==null||L.addEventListener("click",()=>{const r=this.customSeedInput.trim()||`TWR-CUSTOM-${this.customSize}-${this.customDifficulty}-${Date.now()}`,w=V(this.customSize,this.customDifficulty,r);this.startPuzzleSession(w,"custom")}),(P=t.querySelector("#btn-towers-leave-board"))==null||P.addEventListener("click",()=>{this.stopTimer(),this.inBoardView=!1,this.isPaused=!1,this.render()}),(T=t.querySelector("#btn-towers-pause"))==null||T.addEventListener("click",()=>{this.isPaused=!this.isPaused,this.render()}),(E=t.querySelector("#btn-towers-resume"))==null||E.addEventListener("click",()=>{this.isPaused=!1,this.render()}),(H=t.querySelector("#btn-towers-view-toggle"))==null||H.addEventListener("click",()=>{this.toggleViewMode()}),(q=t.querySelector("#btn-towers-sight-toggle"))==null||q.addEventListener("click",()=>{this.toggleSightRayFromSelection()}),t.querySelectorAll("[data-towers-cell]").forEach(r=>{r.addEventListener("click",()=>{this.lastBuiltCell=null,this.selectedCell={r:Number(r.dataset.row)||0,c:Number(r.dataset.col)||0},this.render()})}),t.querySelectorAll("[data-towers-clue]").forEach(r=>{r.addEventListener("click",()=>{const w=r.dataset.towersClue||"",[C,B]=w.split("-"),K=Number(B)||0;this.activeSightRay&&this.activeSightRay.side===C&&this.activeSightRay.index===K?this.activeSightRay=null:this.activeSightRay={side:C,index:K},this.render()})}),(U=t.querySelector("#btn-towers-clear-sight"))==null||U.addEventListener("click",()=>{this.activeSightRay=null,this.render()}),t.querySelectorAll("[data-towers-num]").forEach(r=>{r.addEventListener("click",()=>{const w=Number(r.dataset.towersNum)||1;this.handleNumberInput(w)})}),(N=t.querySelector("#btn-towers-notes-toggle"))==null||N.addEventListener("click",()=>{this.noteMode=!this.noteMode,this.render()}),(et=t.querySelector("#btn-towers-erase"))==null||et.addEventListener("click",()=>this.handleEraseInput()),(W=t.querySelector("#btn-towers-undo"))==null||W.addEventListener("click",()=>this.handleUndo()),(_=t.querySelector("#btn-towers-redo"))==null||_.addEventListener("click",()=>this.handleRedo()),(O=t.querySelector("#btn-towers-hint"))==null||O.addEventListener("click",()=>this.handleSmartHint()),(j=t.querySelector("#btn-towers-apply-hint"))==null||j.addEventListener("click",()=>this.applyActiveHintMove()),(G=t.querySelector("#btn-towers-close-hint"))==null||G.addEventListener("click",()=>{this.activeHint=null,this.activeSightRay=null,this.render()}),(D=t.querySelector("#btn-towers-reset"))==null||D.addEventListener("click",()=>{!this.activePuzzle||this.isPaused||(this.pushHistory(),this.board=st(this.activePuzzle.givens),this.notes=Array.from({length:this.activePuzzle.size},()=>Array.from({length:this.activePuzzle.size},()=>[])),this.activeHint=null,this.lastBuiltCell=null,this.render())}),this.bindWorkshopAndMetaModals(t)}bindWorkshopAndMetaModals(t){var e,s,i,a,v,m,k;t.querySelectorAll("[data-buy-char]").forEach(l=>{l.addEventListener("click",()=>{var c,b;const d=l.dataset.buyChar,p=J.find(f=>f.id===d);!p||this.stats.blueprintGems<p.costGems||(this.stats.blueprintGems-=p.costGems,this.stats.unlockedCharacterIds.includes(d)||this.stats.unlockedCharacterIds.push(d),this.stats.equippedCharacterId=d,this.stats.cosmeticsUpdatedAt=Date.now(),ot(this.stats),(b=(c=this.host).onCloudStateChanged)==null||b.call(c,!1),this.render())})}),t.querySelectorAll("[data-equip-char]").forEach(l=>{l.addEventListener("click",()=>{var p,c;const d=l.dataset.equipChar;this.stats.unlockedCharacterIds.includes(d)&&(this.stats.equippedCharacterId=d,this.stats.cosmeticsUpdatedAt=Date.now(),ot(this.stats),(c=(p=this.host).onCloudStateChanged)==null||c.call(p,!1),this.render())})}),t.querySelectorAll("[data-buy-cosmetic]").forEach(l=>{l.addEventListener("click",()=>{var c,b;const d=l.dataset.buyCosmetic,p=Z.find(f=>f.id===d);!p||this.stats.blueprintGems<p.costGems||(this.stats.blueprintGems-=p.costGems,this.stats.unlockedCosmeticIds.includes(d)||this.stats.unlockedCosmeticIds.push(d),p.slot==="facade"?this.stats.equippedFacadeId=d:this.stats.equippedRoofId=d,this.stats.cosmeticsUpdatedAt=Date.now(),ot(this.stats),(b=(c=this.host).onCloudStateChanged)==null||b.call(c,!1),this.render())})}),t.querySelectorAll("[data-equip-cosmetic]").forEach(l=>{l.addEventListener("click",()=>{var c,b;const d=l.dataset.equipCosmetic,p=Z.find(f=>f.id===d);p&&(p.slot==="facade"?this.stats.equippedFacadeId=d:this.stats.equippedRoofId=d,this.stats.cosmeticsUpdatedAt=Date.now(),ot(this.stats),(b=(c=this.host).onCloudStateChanged)==null||b.call(c,!1),this.render())})}),(e=t.querySelector("#btn-towers-preset-max"))==null||e.addEventListener("click",()=>{this.stats=vt("unlock_all"),this.activeModal=null,this.render()}),(s=t.querySelector("#btn-towers-preset-mid"))==null||s.addEventListener("click",()=>{this.stats=vt("classic_sandbox"),this.activeModal=null,this.render()}),(i=t.querySelector("#btn-towers-preset-reset"))==null||i.addEventListener("click",()=>{this.stats=vt("fresh_lvl1"),this.activeModal=null,this.render()}),(a=t.querySelector("#btn-towers-instant-solve"))==null||a.addEventListener("click",()=>{this.activePuzzle&&(this.activeModal=null,this.board=st(this.activePuzzle.solution),this.checkWinAfterMove(),this.render())}),(v=t.querySelector("#btn-towers-retry-board"))==null||v.addEventListener("click",()=>{this.activePuzzle&&(this.activeModal=null,this.startPuzzleSession(this.activePuzzle,this.activeMode,this.activeCampaignLevel,{resetSeries:!0,cupStageIdx:this.activeCupStageIdx}))}),(m=t.querySelector("#btn-towers-win-map"))==null||m.addEventListener("click",()=>{this.activeModal=null,this.inBoardView=!1,this.render()}),(k=t.querySelector("#btn-towers-win-next"))==null||k.addEventListener("click",()=>{if(this.activeModal=null,this.activeMode==="campaign"&&this.activeCampaignLevel){const l=I.findIndex(c=>c.id===this.activeCampaignLevel.id),d=I[Math.min(I.length-1,l+1)];this.selectedEpisode=d.episode;const p=V(d.size,d.difficulty,d.seed,{id:d.id,title:d.cityName,code:d.code});this.startPuzzleSession(p,"campaign",d)}else if(this.activeMode==="endless"){const l=this.endlessWave<=2?4:this.endlessWave<=5?5:6,d=this.endlessWave<=2?"easy":this.endlessWave<=6?"medium":"hard",p=V(l,d,`TWR-ENDLESS-W${this.endlessWave}-${Date.now()}`);this.startPuzzleSession(p,"endless")}else this.inBoardView=!1,this.render()})}}class ae{constructor(){g(this,"id","towers");g(this,"title","Towers");g(this,"sceneTheme","brick-city");g(this,"controller",null);g(this,"host",null)}mount(t,e){this.unmount(),this.host=e;const s={getUsername:()=>e.getUsername(),getPilotTag:()=>e.getPilotTag(),isBetaChannel:()=>e.isBetaChannel,getCloudSynced:()=>{var i;return((i=e.getCloudSynced)==null?void 0:i.call(e))??!1},canQuit:()=>{var i;return((i=e.canQuit)==null?void 0:i.call(e))??!1},renderTitlebar:()=>{var i;return((i=e.renderTitlebar)==null?void 0:i.call(e))??""},bindTitlebarEvents:()=>{var i;return(i=e.bindTitlebarEvents)==null?void 0:i.call(e)},onBackToHub:()=>e.returnToHub(),onOpenGlobalSettings:()=>e.openGlobalSettings(),onOpenGlobalProfile:()=>{var i;return(i=e.openGlobalProfile)==null?void 0:i.call(e)},onOpenSocialHub:()=>e.openSocialHub({pauseActiveGame:!0}),getSocialAttentionCount:()=>{var i;return((i=e.getSocialAttentionCount)==null?void 0:i.call(e))??0},getAudioSettings:()=>{var i;return((i=e.getAudioSettings)==null?void 0:i.call(e))??{soundEnabled:Q.soundEnabled,musicEnabled:Q.musicEnabled}},onToggleSound:()=>{var i;return(i=e.toggleSound)==null?void 0:i.call(e)},onToggleMusic:()=>{var i;return(i=e.toggleMusic)==null?void 0:i.call(e)},onCloudStateChanged:i=>{var a;return(a=e.onCloudStateChanged)==null?void 0:a.call(e,i)},onQuitApp:()=>{var i;return(i=e.quitApp)==null?void 0:i.call(e)},playSound:(i,a)=>{i==="error"?Q.playLockedBarrier():i==="win"?Q.playVictory():i==="hint"?Q.playGalaxyComplete(1):i==="erase"?Q.playTrowelErase():i==="place"?Q.playBrickPlace((a==null?void 0:a.floors)||2,(a==null?void 0:a.maxFloors)||6):Q.playConsoleButton()}};this.controller=new Zt(s),this.controller.mount(t),e.setAudioScene(this.sceneTheme)}unmount(){this.controller&&(this.controller.destroy(),this.controller=null),this.host=null}refreshHostState(){var t;(t=this.controller)==null||t.syncStatsFromStorageAndRefresh()}onPauseForOverlay(){var t;(t=this.controller)==null||t.pauseIfPlaying()}handleBackNavigation(){return!this.controller||!this.host?!1:(this.controller.handleBackNavigation()||this.host.returnToHub(),!0)}}export{ae as TowersPlugin};
