/* Data Prachar Online website. Content comes from content.json (edit it with the CMS at /admin). */
(async function(){
const DATA = window.__CONTENT__ || await fetch('content.json',{cache:'no-cache'}).then(r=>r.json());
const SITE=DATA.site, SERVICES=DATA.services, REVIEWS=DATA.reviews||[], ROLES=DATA.roles||[], SEO=DATA.seo||{};
const HASH = document.documentElement.dataset.mode==='hash';
const PAGE = document.documentElement.dataset.page||'home';
const FILES={home:'index.html',sms:'bulk-sms-service.html',email:'bulk-email-service.html',whatsapp:'bulk-whatsapp-service.html','mobile-db':'mobile-number-database.html','email-db':'email-database.html',digital:'seo-smo-ppc-digital-marketing.html',affiliate:'affiliate-marketing.html',leads:'lead-generation.html',about:'about-us.html',career:'career-with-us.html',contact:'contact-us.html',thanks:'thank-you.html',privacy:'privacy-policy.html',terms:'terms-and-conditions.html',compliance:'compliance-policy.html'};
const SPECIAL={enquiry:'index.html#enquiry-form',apply:'career-with-us.html#apply',services:'index.html#services',reviews:'index.html#reviews'};
const L=id=>HASH?'#'+id:(SPECIAL[id]||FILES[id]||'index.html');
const fixLinks=h=>h.replace(/href="#([a-z-]+)"/g,(m,id)=>`href="${L(id)}"`);
const esc = s => String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const app = document.getElementById('app');

/* ---- logo (traced from your logo file) ---- */
const LOGO = {"w":876,"h":464,"red":"M874.0 131.0C872.0 128.7 867.3 123.7 862.0 121.0C856.7 118.3 847.7 116.2 842.0 115.0C836.3 113.8 844.0 113.8 828.0 114.0C812.0 114.2 762.5 114.7 746.0 116.0C729.5 117.3 734.0 119.7 729.0 122.0C724.0 124.3 720.3 126.0 716.0 130.0C711.7 134.0 707.8 137.3 703.0 146.0C698.2 154.7 692.3 165.8 687.0 182.0C681.7 198.2 673.8 230.8 671.0 243.0C668.2 255.2 671.2 250.2 670.0 255.0C668.8 259.8 665.5 265.8 664.0 272.0C662.5 278.2 662.2 287.2 661.0 292.0C659.8 296.8 658.8 299.0 657.0 301.0C655.2 303.0 652.2 304.7 650.0 304.0C647.8 303.3 646.7 306.0 644.0 297.0C641.3 288.0 636.7 260.0 634.0 250.0C631.3 240.0 629.3 242.2 628.0 237.0C626.7 231.8 628.8 229.7 626.0 219.0C623.2 208.3 615.8 185.2 611.0 173.0C606.2 160.8 601.8 153.3 597.0 146.0C592.2 138.7 586.2 132.8 582.0 129.0C577.8 125.2 576.3 124.7 572.0 123.0C567.7 121.3 575.0 119.5 556.0 119.0C537.0 118.5 476.3 119.3 458.0 120.0C439.7 120.7 450.3 121.2 446.0 123.0C441.7 124.8 435.7 128.3 432.0 131.0C428.3 133.7 427.8 133.3 424.0 139.0C420.2 144.7 414.2 152.8 409.0 165.0C403.8 177.2 398.8 189.5 393.0 212.0C387.2 234.5 378.2 284.2 374.0 300.0C369.8 315.8 369.7 305.8 368.0 307.0C366.3 308.2 365.5 307.8 364.0 307.0C362.5 306.2 360.3 304.2 359.0 302.0C357.7 299.8 357.7 301.8 356.0 294.0C354.3 286.2 352.2 267.3 349.0 255.0C345.8 242.7 339.7 229.3 337.0 220.0C334.3 210.7 335.3 206.8 333.0 199.0C330.7 191.2 326.5 181.0 323.0 173.0C319.5 165.0 316.3 157.5 312.0 151.0C307.7 144.5 300.7 137.7 297.0 134.0C293.3 130.3 294.5 131.0 290.0 129.0C285.5 127.0 289.3 123.0 270.0 122.0C250.7 121.0 193.5 121.7 174.0 123.0C154.5 124.3 158.3 127.3 153.0 130.0C147.7 132.7 145.5 135.3 142.0 139.0C138.5 142.7 136.5 143.7 132.0 152.0C127.5 160.3 126.2 148.8 115.0 189.0C103.8 229.2 75.2 355.5 65.0 393.0C54.8 430.5 58.5 407.5 54.0 414.0C49.5 420.5 43.0 427.7 38.0 432.0C33.0 436.3 29.8 438.5 24.0 440.0C18.2 441.5 6.8 440.0 3.0 441.0C-0.8 442.0 -1.0 443.2 1.0 446.0C3.0 448.8 9.0 455.2 15.0 458.0C21.0 460.8 18.7 462.3 37.0 463.0C55.3 463.7 107.5 462.8 125.0 462.0C142.5 461.2 136.3 460.3 142.0 458.0C147.7 455.7 154.0 452.3 159.0 448.0C164.0 443.7 167.5 439.5 172.0 432.0C176.5 424.5 182.3 411.8 186.0 403.0C189.7 394.2 189.2 398.5 194.0 379.0C198.8 359.5 210.8 303.3 215.0 286.0C219.2 268.7 217.3 277.2 219.0 275.0C220.7 272.8 222.8 271.5 225.0 273.0C227.2 274.5 229.8 276.5 232.0 284.0C234.2 291.5 236.0 310.2 238.0 318.0C240.0 325.8 242.7 326.2 244.0 331.0C245.3 335.8 243.2 336.0 246.0 347.0C248.8 358.0 255.5 382.7 261.0 397.0C266.5 411.3 273.5 424.2 279.0 433.0C284.5 441.8 289.5 446.2 294.0 450.0C298.5 453.8 301.3 454.3 306.0 456.0C310.7 457.7 302.7 459.8 322.0 460.0C341.3 460.2 402.2 459.0 422.0 457.0C441.8 455.0 436.0 451.3 441.0 448.0C446.0 444.7 448.0 442.5 452.0 437.0C456.0 431.5 460.3 425.3 465.0 415.0C469.7 404.7 477.2 384.5 480.0 375.0C482.8 365.5 480.5 364.3 482.0 358.0C483.5 351.7 486.2 348.5 489.0 337.0C491.8 325.5 496.5 299.5 499.0 289.0C501.5 278.5 502.0 277.3 504.0 274.0C506.0 270.7 508.8 268.7 511.0 269.0C513.2 269.3 515.7 272.0 517.0 276.0C518.3 280.0 517.7 287.3 519.0 293.0C520.3 298.7 524.0 305.8 525.0 310.0C526.0 314.2 524.2 315.0 525.0 318.0C525.8 321.0 527.5 318.5 530.0 328.0C532.5 337.5 537.3 365.5 540.0 375.0C542.7 384.5 544.5 381.2 546.0 385.0C547.5 388.8 547.2 393.0 549.0 398.0C550.8 403.0 552.3 407.5 557.0 415.0C561.7 422.5 571.7 437.0 577.0 443.0C582.3 449.0 583.8 448.8 589.0 451.0C594.2 453.2 589.7 455.3 608.0 456.0C626.3 456.7 681.0 456.0 699.0 455.0C717.0 454.0 709.5 453.7 716.0 450.0C722.5 446.3 732.2 439.3 738.0 433.0C743.8 426.7 747.5 418.7 751.0 412.0C754.5 405.3 755.0 405.8 759.0 393.0C763.0 380.2 772.2 346.8 775.0 335.0C777.8 323.2 774.7 327.7 776.0 322.0C777.3 316.3 777.7 322.5 783.0 301.0C788.3 279.5 802.7 213.8 808.0 193.0C813.3 172.2 812.3 181.3 815.0 176.0C817.7 170.7 819.3 166.7 824.0 161.0C828.7 155.3 837.3 146.2 843.0 142.0C848.7 137.8 853.3 136.8 858.0 136.0C862.7 135.2 868.3 137.2 871.0 137.0C873.7 136.8 873.5 136.0 874.0 135.0C874.5 134.0 876.0 133.3 874.0 131.0ZM766.0 0.0C757.5 0.7 765.8 2.3 764.0 4.0C762.2 5.7 757.7 6.3 755.0 10.0C752.3 13.7 749.2 18.0 748.0 26.0C746.8 34.0 747.2 50.8 748.0 58.0C748.8 65.2 750.5 65.5 753.0 69.0C755.5 72.5 758.7 76.5 763.0 79.0C767.3 81.5 772.5 83.2 779.0 84.0C785.5 84.8 794.8 85.2 802.0 84.0C809.2 82.8 817.3 79.7 822.0 77.0C826.7 74.3 827.8 71.8 830.0 68.0C832.2 64.2 834.2 60.5 835.0 54.0C835.8 47.5 836.3 36.3 835.0 29.0C833.7 21.7 830.3 14.8 827.0 10.0C823.7 5.2 825.2 1.7 815.0 0.0C804.8 -1.7 774.5 -0.7 766.0 0.0ZM484.0 0.0C473.7 2.0 474.2 7.2 471.0 12.0C467.8 16.8 466.2 23.2 465.0 29.0C463.8 34.8 463.2 40.3 464.0 47.0C464.8 53.7 467.5 63.8 470.0 69.0C472.5 74.2 474.8 75.5 479.0 78.0C483.2 80.5 488.2 83.0 495.0 84.0C501.8 85.0 512.8 85.0 520.0 84.0C527.2 83.0 533.7 80.3 538.0 78.0C542.3 75.7 543.8 73.2 546.0 70.0C548.2 66.8 550.0 65.5 551.0 59.0C552.0 52.5 552.8 38.8 552.0 31.0C551.2 23.2 549.2 17.2 546.0 12.0C542.8 6.8 543.3 2.0 533.0 0.0C522.7 -2.0 494.3 -2.0 484.0 0.0ZM201.0 0.0C191.0 1.7 193.0 6.2 190.0 10.0C187.0 13.8 184.3 15.2 183.0 23.0C181.7 30.8 181.5 49.7 182.0 57.0C182.5 64.3 183.3 63.3 186.0 67.0C188.7 70.7 193.0 76.2 198.0 79.0C203.0 81.8 209.5 83.2 216.0 84.0C222.5 84.8 230.2 85.2 237.0 84.0C243.8 82.8 252.3 80.0 257.0 77.0C261.7 74.0 263.0 70.8 265.0 66.0C267.0 61.2 268.3 53.7 269.0 48.0C269.7 42.3 270.2 38.2 269.0 32.0C267.8 25.8 265.2 16.3 262.0 11.0C258.8 5.7 260.2 1.8 250.0 0.0C239.8 -1.8 211.0 -1.7 201.0 0.0Z","mar":"M288.0 148.0C282.7 148.5 279.3 148.7 274.0 152.0C268.7 155.3 260.5 162.8 256.0 168.0C251.5 173.2 250.0 176.8 247.0 183.0C244.0 189.2 241.2 194.5 238.0 205.0C234.8 215.5 230.0 235.8 228.0 246.0C226.0 256.2 224.3 256.8 226.0 266.0C227.7 275.2 235.8 293.2 238.0 301.0C240.2 308.8 236.3 303.0 239.0 313.0C241.7 323.0 251.5 351.7 254.0 361.0C256.5 370.3 251.3 360.5 254.0 369.0C256.7 377.5 265.2 401.5 270.0 412.0C274.8 422.5 277.2 428.2 283.0 432.0C288.8 435.8 298.7 436.0 305.0 435.0C311.3 434.0 315.2 431.2 321.0 426.0C326.8 420.8 335.2 411.5 340.0 404.0C344.8 396.5 345.8 395.2 350.0 381.0C354.2 366.8 363.7 331.2 365.0 319.0C366.3 306.8 359.8 313.8 358.0 308.0C356.2 302.2 355.5 289.8 354.0 284.0C352.5 278.2 350.0 277.0 349.0 273.0C348.0 269.0 349.0 263.8 348.0 260.0C347.0 256.2 344.3 254.8 343.0 250.0C341.7 245.2 343.2 242.7 340.0 231.0C336.8 219.3 328.2 191.7 324.0 180.0C319.8 168.3 318.0 166.2 315.0 161.0C312.0 155.8 310.5 151.2 306.0 149.0C301.5 146.8 293.3 147.5 288.0 148.0ZM570.0 144.0C563.3 145.5 558.3 148.0 552.0 154.0C545.7 160.0 535.7 174.0 532.0 180.0C528.3 186.0 531.5 186.0 530.0 190.0C528.5 194.0 525.7 193.7 523.0 204.0C520.3 214.3 516.2 242.5 514.0 252.0C511.8 261.5 509.5 257.8 510.0 261.0C510.5 264.2 515.7 267.3 517.0 271.0C518.3 274.7 516.8 278.7 518.0 283.0C519.2 287.3 521.5 287.5 524.0 297.0C526.5 306.5 527.7 321.5 533.0 340.0C538.3 358.5 550.2 393.3 556.0 408.0C561.8 422.7 565.3 424.3 568.0 428.0C570.7 431.7 568.2 429.7 572.0 430.0C575.8 430.3 585.5 431.0 591.0 430.0C596.5 429.0 599.3 428.7 605.0 424.0C610.7 419.3 619.7 410.3 625.0 402.0C630.3 393.7 635.0 380.0 637.0 374.0C639.0 368.0 635.7 371.2 637.0 366.0C638.3 360.8 643.7 348.5 645.0 343.0C646.3 337.5 644.2 338.0 645.0 333.0C645.8 328.0 650.2 317.7 650.0 313.0C649.8 308.3 645.3 309.5 644.0 305.0C642.7 300.5 643.5 292.0 642.0 286.0C640.5 280.0 636.3 273.8 635.0 269.0C633.7 264.2 635.2 261.3 634.0 257.0C632.8 252.7 630.5 252.2 628.0 243.0C625.5 233.8 622.8 215.0 619.0 202.0C615.2 189.0 609.5 174.5 605.0 165.0C600.5 155.5 597.8 148.5 592.0 145.0C586.2 141.5 576.7 142.5 570.0 144.0Z"};
const markSvg = cls => `<svg class="${cls}" viewBox="-8 -8 ${LOGO.w+16} ${LOGO.h+16}" aria-hidden="true"><path d="${LOGO.red}" fill="#EE3124" fill-rule="evenodd"/><path d="${LOGO.mar}" fill="#7A1A06" fill-rule="evenodd"/></svg>`;
const logoHtml = () => `<a class="logo" href="#home" aria-label="${esc(SITE.name)}, home">${markSvg('lmark')}<span class="wm">Data Prachar Online</span></a>`;
(function(){ const f=document.createElement('link'); f.rel='icon'; f.href='data:image/svg+xml,'+encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="-8 -8 ${LOGO.w+16} ${LOGO.h+16}"><path d="${LOGO.red}" fill="#EE3124" fill-rule="evenodd"/><path d="${LOGO.mar}" fill="#7A1A06" fill-rule="evenodd"/></svg>`); document.head.appendChild(f); })();

/* ---- isometric 3D-style illustrations ---- */
const f1=n=>(+n).toFixed(1);
const IP=(x,y,z)=>[(x-y)*.866,(x+y)*.5-z];
const pts=a=>a.map(p=>f1(p[0])+','+f1(p[1])).join(' ');
const mix=(a,b,t)=>{const f=h=>{if(h.length===4)h='#'+[1,2,3].map(i=>h[i]+h[i]).join('');return [1,3,5].map(i=>parseInt(h.slice(i,i+2),16));};const A=f(a),B=f(b);return '#'+A.map((v,i)=>Math.round(v+(B[i]-v)*t).toString(16).padStart(2,'0')).join('');};
const box=(x,y,z,w,d,h,c,o={})=>{
 const top=o.top||mix(c,'#ffffff',.35),l=o.l||c,r=o.r||mix(c,'#000000',.25);
 const A=[IP(x,y+d,z),IP(x+w,y+d,z),IP(x+w,y+d,z+h),IP(x,y+d,z+h)];
 const B=[IP(x+w,y+d,z),IP(x+w,y,z),IP(x+w,y,z+h),IP(x+w,y+d,z+h)];
 const T=[IP(x,y,z+h),IP(x+w,y,z+h),IP(x+w,y+d,z+h),IP(x,y+d,z+h)];
 return `<polygon points="${pts(A)}" fill="${l}"/><polygon points="${pts(B)}" fill="${r}"/><polygon points="${pts(T)}" fill="${top}"/>`;
};
const mt=(m,x,y,z)=>{const p=IP(x,y,z);return `matrix(${m} ${f1(p[0])} ${f1(p[1])})`;};
const fA=(x,yd,z,h,s)=>`<g transform="${mt('.866 .5 0 1',x,yd,z+h)}">${s}</g>`;
const fT=(x,y,zt,s)=>`<g transform="${mt('.866 .5 -.866 .5',x,y,zt)}">${s}</g>`;
const cyl=(x,y,z,r,h,c)=>{const p=IP(x,y,z),rx=r*1.2247,ry=r*.7071;
 return `<ellipse cx="${f1(p[0])}" cy="${f1(p[1])}" rx="${f1(rx)}" ry="${f1(ry)}" fill="${mix(c,'#000000',.15)}"/><rect x="${f1(p[0]-rx)}" y="${f1(p[1]-h)}" width="${f1(2*rx)}" height="${h}" fill="${c}"/><ellipse cx="${f1(p[0])}" cy="${f1(p[1]-h)}" rx="${f1(rx)}" ry="${f1(ry)}" fill="${mix(c,'#ffffff',.35)}"/>`;};
const ck=(x,y,c='#fff',w=3.5)=>`<path d="M${x-6} ${y}l4 4 8-9" fill="none" stroke="${c}" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round"/>`;
const ln=(x,y,w,c='#C4C9E0',h=8)=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${h/2}" fill="${c}"/>`;
const pn=(x,y,c)=>`<circle cx="${x}" cy="${y-6}" r="6" fill="${c}"/><path d="M${x-10} ${y+12}a10 9 0 0 1 20 0z" fill="${c}"/>`;
const card=(x,y,w,h,r=16)=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}" fill="#fff" filter="url(#sh)"/>`;
const txt=(x,y,t,s=13,c='#14193B',a='start',w=700)=>`<text x="${x}" y="${y}" font-size="${s}" font-weight="${w}" fill="${c}" text-anchor="${a}" font-family="Sora,sans-serif">${t}</text>`;
const chip=(x,y,w,col,label)=>card(x,y,w,48,14)+`<circle cx="${x+25}" cy="${y+24}" r="13" fill="${col}"/>${ck(x+25,y+22,'#fff',3)}${txt(x+46,y+29,label,12)}`;
const plat=c=>box(-100,-100,-14,200,200,14,mix(c,'#ffffff',.78),{top:mix(c,'#ffffff',.9)})+
 fT(-100,-100,0,`<path d="${[40,80,120,160].map(k=>`M${k} 0V200M0 ${k}H200`).join('')}" stroke="${c}" stroke-opacity=".14" fill="none" stroke-width="1.5"/>`);
const bk2=c=>`<circle cx="260" cy="196" r="192" fill="${c}1F"/><circle cx="260" cy="196" r="146" fill="none" stroke="${c}44" stroke-width="2" stroke-dasharray="4 9"/><circle cx="64" cy="70" r="6" fill="#FFB020"/><circle cx="462" cy="330" r="8" fill="${c}66"/><circle cx="446" cy="58" r="10" fill="${c}"/><path d="M78 332l12 12m0-12l-12 12" stroke="${c}" stroke-width="3" stroke-linecap="round"/><ellipse cx="260" cy="352" rx="192" ry="14" fill="#14193B" fill-opacity=".1"/>`;
const scn=(c,iso,flat='')=>bk2(c)+`<g transform="translate(260 232)">${iso}</g>`+flat;
const DARK={top:'#4A52A0',r:'#0F1340'};

const ART = {
 home:(c,d)=>scn(c,plat(c)+
  box(-92,-56,0,38,38,52,'#1AA7F0')+box(-44,-56,0,38,38,90,'#16C784')+box(4,-56,0,38,38,128,c)+
  box(-70,28,0,64,10,104,'#1B2150',DARK)+
  fA(-70,38,0,104,`<rect x="3" y="3" width="58" height="98" rx="8" fill="#F4F1FF"/><rect x="8" y="14" width="36" height="14" rx="7" fill="#fff"/><rect x="18" y="34" width="38" height="14" rx="7" fill="${c}"/><rect x="8" y="54" width="34" height="14" rx="7" fill="#fff"/><rect x="18" y="74" width="38" height="14" rx="7" fill="${c}"/>`)+
  box(32,26,40,58,40,5,'#fff')+fT(32,26,45,`<path d="M0 0L29 22L58 0" fill="none" stroke="#BFE3FA" stroke-width="3"/><rect x="40" y="26" width="12" height="9" rx="2" fill="#1AA7F0"/>`),
  chip(36,86,138,'#22C55E','WhatsApp')+chip(344,96,132,'#FFB020','SMS sent')+chip(336,278,144,c,'New leads')),

 sms:(c,d)=>scn(c,plat(c)+
  fT(-100,-100,0,[40,66,92].map((r,i)=>`<circle cx="100" cy="100" r="${r}" fill="none" stroke="${c}" stroke-opacity="${.55-i*.15}" stroke-width="3"/>`).join(''))+
  box(-34,-6,0,68,12,140,'#1B2150',DARK)+
  fA(-34,6,0,140,`<rect x="3" y="3" width="62" height="134" rx="9" fill="#F4F1FF"/><rect x="26" y="7" width="16" height="4" rx="2" fill="#1B2150"/><rect x="8" y="20" width="38" height="16" rx="8" fill="#fff"/>${ln(14,26,22,'#C9CFE8',4)}<rect x="20" y="42" width="40" height="16" rx="8" fill="${c}"/>${ln(26,48,24,'#fff',4)}<rect x="8" y="64" width="52" height="36" rx="8" fill="#fff"/>${txt(14,77,'OTP',7,'#5C6584')}${[0,1,2,3].map(i=>`<rect x="${13+i*11}" y="82" width="9" height="12" rx="3" fill="#EEEAFF"/>${txt(17.5+i*11,91,'4829'[i],8,c,'middle')}`).join('')}<rect x="20" y="106" width="40" height="16" rx="8" fill="${c}"/>${ln(26,112,24,'#fff',4)}`)+
  box(56,44,0,24,24,24,'#FFB020')+box(-90,54,0,20,20,20,c),
  chip(336,86,144,'#22C55E','Delivered')+chip(36,170,134,c,'OTP sent')),

 email:(c,d)=>scn(c,plat(c)+
  box(-62,-36,6,124,6,88,'#14193B')+
  fA(-62,-30,6,88,`<rect x="4" y="4" width="116" height="80" rx="5" fill="#fff"/><rect x="4" y="4" width="26" height="80" fill="#EAF6FE"/>${ln(8,12,16,c,5)}${ln(8,24,14,'#BFE3FA',4)}${[0,1,2].map(i=>`<rect x="34" y="${10+i*24}" width="80" height="20" rx="4" fill="#F4FAFF"/><circle cx="44" cy="${20+i*24}" r="5" fill="${['#FFB020','#F0508F','#16C784'][i]}"/>${ln(54,16+i*24,40,'#9AA6C8',4)}${ln(54,24+i*24,56,'#D0D6E8',3)}`).join('')}`)+
  box(-62,-30,0,124,80,6,'#D5DCEF')+
  fT(-62,-30,6,[0,1,2].map(r=>`<rect x="10" y="${10+r*16}" width="104" height="9" rx="3" fill="#B9C4E2"/>`).join('')+'<rect x="42" y="58" width="40" height="12" rx="4" fill="#B9C4E2"/>')+
  fT(48,28,0,'<rect width="58" height="40" rx="6" fill="#14193B" fill-opacity=".14"/>')+
  box(48,28,44,58,40,5,'#fff')+fT(48,28,49,`<path d="M0 0L29 22L58 0" fill="none" stroke="#BFE3FA" stroke-width="3"/><rect x="40" y="26" width="12" height="9" rx="2" fill="${c}"/>`),
  chip(32,150,140,'#16C784','Opened')+`<circle cx="452" cy="104" r="26" fill="#FFB020" filter="url(#sh)"/>${txt(452,114,'@',28,'#fff','middle')}`),

 whatsapp:(c,d)=>scn(c,plat(c)+
  box(-100,-60,0,100,5,66,'#fff',{r:'#D5DCEC'})+
  fA(-100,-55,0,66,`<rect x="6" y="6" width="88" height="32" rx="6" fill="#D5F3E5"/><circle cx="20" cy="18" r="5" fill="#FFB020"/><path d="M6 38L34 20L52 30L74 14L94 38z" fill="#9BE5BE"/>${ln(6,44,60,'#B8E8D2',4)}<rect x="6" y="52" width="44" height="10" rx="5" fill="${c}"/>${txt(28,59.5,'Shop now',5.5,'#fff','middle')}`)+
  box(-44,-22,0,100,5,60,'#fff',{r:'#D5DCEC'})+
  fA(-44,-17,0,60,`<rect x="8" y="8" width="84" height="40" rx="12" fill="${c}"/>${ln(18,18,56,'#fff',5)}${ln(18,28,38,'#D5F3E5',4)}<path d="M72 38l4 4 7-9M80 38l4 4 7-9" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>`)+
  box(10,22,0,100,5,50,'#fff',{r:'#D5DCEC'})+
  fA(10,27,0,50,`<rect x="8" y="8" width="26" height="30" rx="5" fill="#EF4444"/>${txt(21,27,'PDF',8,'#fff','middle')}${ln(42,12,48,'#B8BED8',5)}${ln(42,22,32,'#E3E6F2',4)}<rect x="42" y="30" width="46" height="10" rx="5" fill="${c}"/>`),
  `<circle cx="262" cy="44" r="14" fill="#FFB020"/><circle cx="262" cy="44" r="26" fill="none" stroke="${c}" stroke-opacity=".5" stroke-width="3"/><circle cx="262" cy="44" r="38" fill="none" stroke="${c}" stroke-opacity=".25" stroke-width="3"/>`+chip(344,300,136,'#22C55E','Read')),

 "mobile-db":(c,d)=>scn(c,plat(c)+
  [0,1,2].map(i=>box(-70,-30,i*40,100,60,34,['#E0480F','#FF8A3D','#FFB066'][i])+fA(-70,30,i*40,34,`<rect x="6" y="9" width="48" height="5" rx="2.5" fill="#fff" fill-opacity=".65"/><rect x="6" y="20" width="32" height="5" rx="2.5" fill="#fff" fill-opacity=".4"/>${[0,1,2].map(k=>`<circle cx="${76+k*9}" cy="17" r="3" fill="${['#22C55E','#FFB020','#fff'][k]}"/>`).join('')}`)).join('')+
  box(54,26,0,34,8,64,'#1B2150',DARK)+
  fA(54,34,0,64,`<rect x="3" y="3" width="28" height="58" rx="6" fill="#FFE8D6"/>${[0,1,2,3].map(k=>`<circle cx="9" cy="${14+k*13}" r="3.5" fill="${['#FF8A3D','#6D3BFF','#16C784','#F0508F'][k]}"/>${ln(16,12+k*13,12,'#E3C3A8',3)}`).join('')}`),
  chip(34,150,136,c,'City-wise')+chip(344,236,136,'#22C55E','Verified')+`<path d="M420 62a24 24 0 0124 24c0 18-24 42-24 42s-24-24-24-42a24 24 0 0124-24z" fill="#fff" filter="url(#sh)"/><circle cx="420" cy="86" r="9" fill="#E0480F"/>`),

 "email-db":(c,d)=>scn(c,plat(c)+
  fT(-84,-56,0,'<rect width="168" height="112" rx="6" fill="#14193B" fill-opacity=".12"/>')+
  box(-84,-56,0,168,112,10,'#fff',{l:'#F7C6D9',r:'#E7A3BE',top:'#fff'})+
  fT(-84,-56,10,`<rect x="8" y="8" width="152" height="16" rx="8" fill="${c}2A"/>${txt(16,20,'Verified emails',9,c)}`+[0,1,2,3].map(k=>{const y=32+k*20;return `<rect x="10" y="${y}" width="22" height="14" rx="3" fill="${['#F0508F','#1AA7F0','#FFB020','#16C784'][k]}"/>${ln(40,y+1,64,'#C4C9E0',5)}${ln(40,y+9,44,'#E3E6F2',4)}<circle cx="146" cy="${y+7}" r="6" fill="#22C55E"/>`}).join(''))+
  cyl(66,36,10,16,22,c),
  `<path d="M96 52l32 11v25c0 20-14 33-32 40-18-7-32-20-32-40V63z" fill="#fff" filter="url(#sh)"/><circle cx="96" cy="92" r="15" fill="#22C55E"/>${ck(96,90,'#fff',3.5)}<circle cx="392" cy="150" r="42" fill="#fff" fill-opacity=".75" stroke="#14193B" stroke-width="9" filter="url(#sh)"/><path d="M422 182l36 40" stroke="#14193B" stroke-width="14" stroke-linecap="round"/>${txt(392,170,'@',50,c,'middle')}`),

 digital:(c,d)=>{
  const H=[30,55,82,118],pp=H.map((h,i)=>{const p=IP(-55+i*40,29,h+22);return [260+p[0],232+p[1]];});
  return scn(c,plat(c)+
   box(-86,-72,0,150,6,76,'#fff',{r:'#D5DCEC'})+
   fA(-86,-66,0,76,`<rect x="6" y="6" width="138" height="14" rx="7" fill="${c}26"/><circle cx="14" cy="13" r="3.5" fill="none" stroke="${d}" stroke-width="1.6"/>${ln(22,11,50,c,4)}<rect x="6" y="26" width="138" height="22" rx="5" fill="${c}1F"/><circle cx="17" cy="37" r="6" fill="#FFB020"/>${txt(17,40,'1',8,'#fff','middle')}${ln(28,30,60,d,5)}${ln(28,39,90,'#9AA6C8',4)}<rect x="6" y="52" width="138" height="18" rx="5" fill="#F4F6FB"/>${ln(18,56,60,'#9AA6C8',5)}${ln(18,64,86,'#D5DAEA',3)}`)+
   H.map((h,i)=>box(-70+i*40,14,0,30,30,h,i<3?mix(c,'#ffffff',.3):c)).join(''),
   `<path d="M${pp.map(p=>f1(p[0])+' '+f1(p[1])).join('L')}" fill="none" stroke="#FFB020" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/><circle cx="${f1(pp[3][0])}" cy="${f1(pp[3][1])}" r="9" fill="#FFB020"/>`+
   `<rect x="382" y="64" width="100" height="60" rx="14" fill="#fff" filter="url(#sh)"/><rect x="394" y="78" width="38" height="30" rx="9" fill="#EF4444"/><path d="M406 85l14 8-14 8z" fill="#fff"/>${ln(440,82,30,'#B8BED8')}${ln(440,96,20,'#E3E6F2',6)}`+
   `<circle cx="66" cy="168" r="26" fill="#fff" filter="url(#sh)"/><path d="M66 180s-14-9-14-18a7 7 0 0114-2 7 7 0 0114 2c0 9-14 18-14 18z" fill="#F0508F"/><rect x="42" y="214" width="64" height="38" rx="12" fill="#FFB020" filter="url(#sh)"/>${txt(74,239,'Ad',16,'#fff','middle')}`);
 },

 affiliate:(c,d)=>{
  const st=[[-55,-25,3],[5,15,6],[55,-5,4]],tp=IP(5,15,6*9+10);
  return scn(c,plat(c)+
   box(-84,40,0,18,18,18,d)+box(-30,66,0,18,18,18,c)+box(60,50,0,18,18,18,'#6D3BFF')+
   fT(-100,-100,0,'<path d="M24 140L70 80M70 80L130 96M130 96L160 40M130 96L170 150" stroke="#14193B" stroke-opacity=".35" stroke-width="2.5" stroke-dasharray="6 6" fill="none"/>')+
   st.map(([x,y,n])=>Array.from({length:n},(_,j)=>cyl(x,y,j*9,22,8,j%2?'#F5A623':'#FFC53D')).join('')).join('')+
   `<circle cx="${f1(tp[0])}" cy="${f1(tp[1]-20)}" r="22" fill="#FFB020" stroke="#fff" stroke-width="4"/>${txt(tp[0],tp[1]-11,'₹',26,'#fff','middle')}`,
   chip(34,92,150,d,'Commission')+chip(338,120,142,'#22C55E','Tracked')+chip(330,290,150,c,'Pay on result'));
 },

 leads:(c,d)=>scn(c,plat(c)+
  box(-20,-20,0,40,40,50,c)+fA(-20,20,0,50,ck(20,26,'#fff',5))+
  box(-46,-46,50,92,92,32,mix(c,'#ffffff',.15))+
  box(-72,-72,82,144,144,20,mix(c,'#ffffff',.4),{top:'#ffffff'})+
  fT(-72,-72,102,`<rect x="10" y="10" width="124" height="124" rx="10" fill="${c}1A"/>`+[[30,36,'#3B6BFF'],[64,28,'#FFB020'],[102,42,'#F0508F'],[42,74,'#16C784'],[90,80,'#6D3BFF'],[68,108,'#3B6BFF'],[110,112,'#FFB020'],[26,110,'#F0508F']].map(([x,y,k])=>`<circle cx="${x}" cy="${y}" r="7" fill="${k}"/>`).join('')),
  [150,260,370].map((x,i)=>`<circle cx="${x}" cy="${[100,26,100][i]}" r="19" fill="#fff" filter="url(#sh)"/>${pn(x,[102,28,102][i],['#3B6BFF','#FFB020','#F0508F'][i])}`).join('')+chip(336,282,144,'#22C55E','Qualified lead')+chip(34,200,128,c,'Screened'))
};


/* ---- theme colours for the illustrations (golden and light blue) ---- */
const CMAP={'#6D3BFF':'#2E86DE','#F0508F':'#F2B705','#16C784':'#5BC0EB','#22C55E':'#2E86DE','#FF8A3D':'#F2B705','#E0480F':'#B07A00','#FFB066':'#F7D060','#FFD0A4':'#FBE7A8','#1B2150':'#0F2A47','#0F1340':'#08182B','#4A52A0':'#2D5B8F','#14193B':'#0F2A47','#F4F1FF':'#EEF7FE','#EEEAFF':'#E6F3FD','#CFC6FF':'#BFDFF7','#C9CFE8':'#C5DCEE','#EDE9FF':'#E3F2FD','#B9A8FF':'#9FD0F2','#D5F3E5':'#DDEFFB','#9BE5BE':'#9ACDF0','#B8E8D2':'#BCE0F7','#DCFCE7':'#E3F2FD','#F7C6D9':'#F9E2A0','#E7A3BE':'#E8C766','#FFE8D6':'#FFF1C9','#E3C3A8':'#E8D59C','#D5DCEF':'#CBDDEE','#D5DCEC':'#CBDDEE','#C4C9E0':'#BFD3E6','#E3E6F2':'#E3EEF7','#B8BED8':'#B3CBE0','#9AA6C8':'#8FB0CF','#D0D6E8':'#CADBEA','#3B6BFF':'#38A9E8','#EF4444':'#EE3124'};
const recolor = s => s.replace(/#[0-9A-Fa-f]{6}/g, m => CMAP[m.toUpperCase()]||m);

/* ---- hero: your logo standing in 3D on a golden-blue platform ---- */
ART.home = (c,d) => {
 const S=.2, LH=LOGO.h*S, x=-LOGO.w*S/2, yd=14, z=16;
 let ext='';
 for(let i=16;i>=1;i--) ext+=`<g transform="${mt('.866 .5 0 1',x,yd-i,z+LH)}"><g transform="scale(${S})"><path d="${LOGO.red}" fill="${i>8?'#8E1409':'#A81B0E'}" fill-rule="evenodd"/></g></g>`;
 const front=`<g transform="${mt('.866 .5 0 1',x,yd,z+LH)}"><g transform="scale(${S})"><path d="${LOGO.red}" fill="#EE3124" fill-rule="evenodd"/><path d="${LOGO.mar}" fill="#7A1A06" fill-rule="evenodd"/></g></g>`;
 return scn('#F5B700', plat('#38A9E8')+box(-100,-8,0,200,22,z,'#F5B700',{top:'#FFE08A'})+ext+front,
  chip(6,58,176,'#F5B700','Authentic service')+chip(326,262,176,'#38A9E8','Long-term partner'));
};
const art = (id,label,extra='') => { const s = SERVICES.find(x=>x.id===id)||{c1:'#F5B700',c2:'#B07A00'}; return `<div class="pic" data-id="${id}"><svg class="img" viewBox="0 0 520 400" role="img" aria-label="${label}">${recolor(ART[id](s.c1,s.c2))}</svg>${extra}</div>`; };
const GR = '<filter id="sh" x="-20%" y="-20%" width="140%" height="160%"><feDropShadow dx="0" dy="8" stdDeviation="8" flood-color="#0F2A47" flood-opacity=".18"/></filter><linearGradient id="gold" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#FFE08A"/><stop offset=".5" stop-color="#F5B700"/><stop offset="1" stop-color="#C98F00"/></linearGradient>';
document.body.insertAdjacentHTML('afterbegin',`<svg width="0" height="0" style="position:absolute" aria-hidden="true"><defs>${GR}</defs></svg>`);

/* ---- icons, social, contact helpers ---- */
const ICONS = {
 all:'<path d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z" fill="currentColor"/>',
 chart:'<path d="M4 20V10m6 10V4m6 16v-7m4 7H2" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>',
 pin:'<path d="M12 2a7 7 0 017 7c0 5-7 13-7 13S5 14 5 9a7 7 0 017-7z" fill="currentColor"/><circle cx="12" cy="9" r="2.5" fill="#fff"/>',
 tick:'<path d="M5 12l5 5 9-10" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>',
 phone:'<path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z" fill="currentColor"/>',
 mail:'<rect x="3" y="5" width="18" height="14" rx="3" fill="none" stroke="currentColor" stroke-width="2.4"/><path d="M4 7l8 6 8-6" fill="none" stroke="currentColor" stroke-width="2.4"/>',
 wa:'<path d="M12 3a9 9 0 00-7.7 13.6L3 21l4.5-1.2A9 9 0 1012 3z" fill="none" stroke="currentColor" stroke-width="2"/><path d="M9 8c-.5 3 3.5 7 7 7l1-2-2.2-1-1 1c-1-.4-2.3-1.7-2.7-2.7l1-1-1-2.3z" fill="currentColor"/>',
 team:'<circle cx="9" cy="8" r="3.2" fill="currentColor"/><circle cx="17" cy="9" r="2.6" fill="currentColor" fill-opacity=".7"/><path d="M3 20c0-3.5 2.7-6 6-6s6 2.5 6 6zM15 20c0-2 1-3.8 2.7-4.7 2 .3 3.3 2 3.3 4.7z" fill="currentColor"/>',
 star:'<path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z" fill="currentColor"/>',
 home:'<path d="M3 11l9-7 9 7v9a1 1 0 01-1 1h-5v-6H9v6H4a1 1 0 01-1-1z" fill="currentColor"/>',
 msg:'<path d="M4 4h16v12H8l-4 4z" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round"/><path d="M8 9h8M8 12h5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>'
};
const SOC = {
 Facebook:'<path d="M14 8h3V4h-3a4 4 0 00-4 4v2H7v4h3v6h4v-6h3l1-4h-4V8.5c0-.3.2-.5.5-.5z" fill="currentColor"/>',
 Instagram:'<rect x="4" y="4" width="16" height="16" rx="5" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="3.6" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="17" cy="7" r="1.2" fill="currentColor"/>',
 LinkedIn:'<rect x="4" y="9" width="3.6" height="11" fill="currentColor"/><circle cx="5.8" cy="5.4" r="2" fill="currentColor"/><path d="M10 9h3.4v1.6c.6-1 1.8-1.9 3.6-1.9 3 0 3.6 2 3.6 4.6V20H17v-5.8c0-1.4-.1-2.6-1.7-2.6s-1.9 1.2-1.9 2.5V20H10z" fill="currentColor"/>',
 YouTube:'<rect x="3" y="6" width="18" height="12" rx="4" fill="none" stroke="currentColor" stroke-width="2"/><path d="M10.5 9.5v5l4.3-2.5z" fill="currentColor"/>',
 X:'<path d="M5 5l14 14M19 5L5 19" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/>'
};
const svg = k => `<svg viewBox="0 0 24 24" aria-hidden="true">${ICONS[k]}</svg>`;
const ic = (k,c) => `<div class="ic" style="--c:${c}">${svg(k)}</div>`;
const socHtml = () => SITE.social.map(s=>`<a href="${esc(s.u)}" target="_blank" rel="noopener noreferrer" aria-label="${esc(s.n)}" title="${esc(s.n)}"><svg viewBox="0 0 24 24" aria-hidden="true">${SOC[s.n]||ICONS.all}</svg></a>`).join('');
const TEL='tel:'+SITE.phone, MAILTO='mailto:'+SITE.email;
const WA='https://wa.me/'+SITE.whatsapp+'?text='+encodeURIComponent('Hello Data Prachar Online, I would like to know more about your services.');
const callBtn=(cls='btn alt')=>`<a class="${cls}" href="${TEL}">${svg('phone')}Call ${esc(SITE.mobile)}</a>`;
const bandHtml=()=>`<div class="band"><h2>Tell us who you want to reach</h2><p>Our team will suggest the right mix of channels and a plan for your city or region.</p><a class="btn" href="#enquiry">Send an enquiry</a>${callBtn()}</div>`;
const cityList=()=>SITE.cities.join(', ');
const cities=()=>`<ul class="chips">${SITE.cities.map(c=>`<li class="c">${esc(c)}</li>`).join('')}</ul>`;

/* ---- trust seal ---- */
function seal(k=0){
 return `<svg class="seal" viewBox="0 0 220 220" role="img" aria-label="Data Prachar Online. Your authentic business partner."><defs><path id="sA${k}" d="M30 110a80 80 0 0 1 160 0"/><path id="sB${k}" d="M22 110a88 88 0 0 0 176 0"/></defs>
 <circle cx="110" cy="110" r="108" fill="url(#gold)"/><circle cx="110" cy="110" r="100" fill="#0F2A47"/><circle cx="110" cy="110" r="70" fill="#fff" stroke="#F5B700" stroke-width="3"/>
 <text font-family="Sora,Arial,sans-serif" font-size="14" font-weight="700" letter-spacing="2.2" fill="#FFD24D"><textPath href="#sA${k}" startOffset="50%" text-anchor="middle">YOUR AUTHENTIC</textPath></text>
 <text font-family="Sora,Arial,sans-serif" font-size="14" font-weight="700" letter-spacing="2.2" fill="#FFD24D"><textPath href="#sB${k}" startOffset="50%" text-anchor="middle">BUSINESS PARTNER</textPath></text>
 <path d="M16 110l4-4 4 4-4 4zM196 110l4-4 4 4-4 4z" fill="#F5B700"/>
 <g transform="translate(62 78) scale(.108)"><path d="${LOGO.red}" fill="#EE3124" fill-rule="evenodd"/><path d="${LOGO.mar}" fill="#7A1A06" fill-rule="evenodd"/></g>
 <text x="110" y="144" text-anchor="middle" font-family="Arial,sans-serif" font-size="10.5" font-style="italic" font-weight="800" fill="#4B0082">Data Prachar</text>
 <text x="110" y="156" text-anchor="middle" font-family="Arial,sans-serif" font-size="10.5" font-style="italic" font-weight="800" fill="#4B0082">Online</text></svg>`;
}

/* ---- forms (emailed to you through FormSubmit) ---- */
const FORM_URL='https://formsubmit.co/'+SITE.formTo;
const hid=subject=>`<input type="hidden" name="_subject" value="${esc(subject)}"><input type="hidden" name="_template" value="table"><input type="hidden" name="_captcha" value="false"><input type="hidden" name="_next" class="js-next" value=""><input type="text" name="_honey" style="display:none" tabindex="-1" autocomplete="off">`;
const fileField=(label,name,req,multi)=>`<label class="file">${label}<input type="file" name="${name}" ${req?'required':''} ${multi?'multiple':''} accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"><span class="fnames"></span></label>`;
function enquiry(){
 return `<div class="enq" id="enquiry-form"><div><h2>Send us an enquiry</h2><p class="sub">Tell us what you need and our team will get back to you. You can also call, WhatsApp or email us.</p>${callBtn()}<a class="btn alt" href="${WA}" target="_blank" rel="noopener noreferrer">${svg('wa')}WhatsApp</a><p class="mini">Email: <a href="${MAILTO}">${esc(SITE.email)}</a></p></div>
 <form class="form" id="enqForm" action="${FORM_URL}" method="POST">${hid('New enquiry from Data Prachar Online website')}
  <div class="row"><label>Full name<input name="name" required autocomplete="name"></label><label>Mobile number<input name="mobile" required inputmode="tel" autocomplete="tel" pattern="[0-9+ ]{10,14}"></label></div>
  <div class="row"><label>Email<input name="email" type="email" required autocomplete="email"></label><label>City<input name="city" autocomplete="address-level2"></label></div>
  <label>Service you need<select name="service">${SERVICES.map(s=>`<option>${esc(s.title)}</option>`).join('')}<option>Not sure yet</option></select></label>
  <label>Message<textarea name="message" placeholder="Your audience, city and what you want to achieve"></textarea></label>
  <button class="btn" type="submit">Send enquiry</button><p class="fstat" role="status" aria-live="polite"></p></form></div>`;
}
function careerForm(){
 return `<form class="form" id="careerForm" action="${FORM_URL}" method="POST" enctype="multipart/form-data">${hid('New job application: Data Prachar Online')}
  <div class="row"><label>Full name<input name="name" required autocomplete="name"></label><label>Mobile number<input name="mobile" required inputmode="tel" autocomplete="tel" pattern="[0-9+ ]{10,14}"></label></div>
  <div class="row"><label>Email<input name="email" type="email" required autocomplete="email"></label><label>Current city<input name="city" required autocomplete="address-level2"></label></div>
  <div class="row"><label>Position<select name="position">${ROLES.map(r=>`<option>${esc(r)}</option>`).join('')}<option>Other</option></select></label><label>Experience<select name="experience"><option>Fresher</option><option>1 to 2 years</option><option>3 to 5 years</option><option>More than 5 years</option></select></label></div>
  ${fileField('Upload your CV (PDF or Word)','CV',true,false)}${fileField('Other documents, certificates or ID (optional)','Documents',false,true)}
  <label>About you<textarea name="about" placeholder="Tell us briefly about your skills and why you want to join"></textarea></label>
  <label class="chk"><input type="checkbox" name="consent" value="Yes" required><span>I agree that Data Prachar Online may keep my details and documents to consider my application.</span></label>
  <button class="btn" type="submit">Submit application</button><p class="fstat" role="status" aria-live="polite"></p><p class="mini">Keep all files together under 9 MB. Accepted: PDF, Word, JPG, PNG.</p></form>`;
}
const nextUrl=()=>HASH?location.href.split('#')[0]+'#thanks':new URL(FILES.thanks,location.href).href;
function wireForms(){
 document.querySelectorAll('.js-next').forEach(i=>i.value=nextUrl());
 document.querySelectorAll('form.form').forEach(f=>{
  f.addEventListener('submit',e=>{
   const st=f.querySelector('.fstat'), files=[...f.querySelectorAll('input[type=file]')].flatMap(i=>[...i.files]);
   if(files.reduce((a,b)=>a+b.size,0)>9*1024*1024){e.preventDefault();st.className='fstat err';st.textContent='The files are too large. Please keep all files together under 9 MB.';return;}
   const b=f.querySelector('button[type=submit]');b.disabled=true;b.textContent='Sending…';
  });
  f.querySelectorAll('input[type=file]').forEach(i=>i.addEventListener('change',()=>{i.parentElement.querySelector('.fnames').textContent=[...i.files].map(x=>x.name+' ('+Math.round(x.size/1024)+' KB)').join(', ');}));
 });
}
/* optional real photos: add images/<service-id>.jpg to your repo and they replace the drawings */
function loadPhotos(){
 document.querySelectorAll('.pic').forEach(el=>{const im=new Image();im.className='img';im.alt=el.querySelector('svg')?.getAttribute('aria-label')||'';im.onload=()=>{el.querySelector('svg').replaceWith(im);};im.src='images/'+el.dataset.id+'.jpg';});
}

/* ---- Google reviews ---- */
const MAPS='https://www.google.com/maps/search/?api=1&query='+encodeURIComponent('Data Prachar Online Westend Mall Janakpuri West New Delhi 110058');
function reviewsSec(){
 const pid=SITE.googlePlaceId, write=pid?'https://search.google.com/local/writereview?placeid='+pid:(SITE.googleReviewUrl||MAPS), see=pid?'https://search.google.com/local/reviews?placeid='+pid:MAPS;
 const cards=REVIEWS.length?`<div class="revs">${REVIEWS.map(r=>`<figure class="fc"><div class="stars" aria-label="${esc(r.rating||5)} out of 5 stars">${'★'.repeat(Math.max(1,Math.min(5,+r.rating||5)))}</div><blockquote>${esc(r.text)}</blockquote><figcaption>${esc(r.name)}${r.city?', '+esc(r.city):''}</figcaption></figure>`).join('')}</div>`:'';
 return `<section class="sec alt" id="reviews"><div class="wrap"><h2>Review us on Google</h2><p class="sub">Your honest review helps other businesses find an authentic partner.</p>
  <div class="rev"><div class="stars big" aria-hidden="true">★★★★★</div><div><h3>Happy with our service?</h3><p>It takes less than a minute to share your experience on Google.</p><a class="btn" href="${esc(write)}" target="_blank" rel="noopener noreferrer">Write a Google review</a><a class="btn alt" href="${esc(see)}" target="_blank" rel="noopener noreferrer">See Google reviews</a></div></div>${cards}</div></section>`;
}

/* ---- pages ---- */
const HOME_FAQ=[
 ["What services does Data Prachar Online offer?","We offer bulk SMS, bulk email and bulk WhatsApp, mobile number and email databases, SEO, SMO, PPC, Meta and YouTube marketing, affiliate marketing and lead generation."],
 ["Where is your office?","Our office is at "+SITE.address+"."],
 ["Which cities do you serve?","We have a presence in "+SITE.cities.join(', ')+", and we run campaigns for businesses across India."],
 ["How can I get a quote?","Fill in the enquiry form on this page, call "+SITE.mobile+" or message us on WhatsApp. We will reply with a plan and price for your campaign."]];
const faqHtml=list=>list.map(f=>`<details><summary>${esc(f[0]||f.q)}</summary><p>${esc(f[1]||f.a)}</p></details>`).join('');
function home(){
 return `<section class="hero"><div class="wrap"><div>
  <span class="pill">${esc(SITE.slogan)}</span>
  <h1>Marketing that reaches customers across India</h1>
  <p class="lead">${esc(SITE.tagline)} Based in New Delhi, present across the country.</p>
  <div class="cta-row"><a class="btn" href="#enquiry">Send an enquiry</a>${callBtn()}</div></div>
  ${art('home','Data Prachar Online logo standing in 3D on a golden and blue platform','<div class="hseal">'+seal(1)+'</div>')}</div></section>
 <section class="sec trust"><div class="wrap trustgrid"><div class="sealbox">${seal(2)}</div><div><h2>Your authentic business partner</h2><p class="sub">${esc(SITE.name)} stands for honest advice, clear reports and long-term relationships with every client.</p>
  <ul class="ticks"><li>Authentic service you can rely on</li><li>Long-term business engagement, not one-time campaigns</li><li>Reports after every campaign</li></ul><a class="btn" href="#about">About us</a></div></div></section>
 <section class="sec alt" id="services"><div class="wrap"><h2>Our digital marketing services</h2><p class="sub">Eight services, one team. Open any service to see what you get.</p>
  <div class="grid">${SERVICES.map(s=>`<a class="svc" href="#${s.id}"><div class="art" style="background:${s.c1}22">${art(s.id,esc(s.title)+' illustration')}</div><div class="t"><h3>${esc(s.title)}</h3><p>${esc(s.short)}</p></div></a>`).join('')}</div></div></section>
 <section class="sec"><div class="wrap"><h2>Why ${esc(SITE.name)}</h2><p class="sub">A simple way of working, built for businesses that want results they can see.</p>
  <div class="feat"><div class="fc">${ic('star','#F5B700')}<h3>Authentic service</h3><p>Clear answers, honest advice and no empty promises about results.</p></div><div class="fc">${ic('team','#38A9E8')}<h3>Long-term engagement</h3><p>We want to grow with your business, not finish one campaign and disappear.</p></div><div class="fc">${ic('chart','#C98F00')}<h3>Reports after every campaign</h3><p>You see what was sent, what was delivered and what it brought in.</p></div></div></div></section>
 ${reviewsSec()}
 <section class="sec"><div class="wrap">${enquiry()}</div></section>
 <section class="sec alt"><div class="wrap seo"><h2>Digital marketing and bulk messaging company in New Delhi</h2>
  <p>${esc(SITE.name)} is a digital marketing company based in Janakpuri West, New Delhi, serving businesses across India. We help brands reach customers through bulk SMS, bulk email and bulk WhatsApp marketing, supply city-wise mobile number and email databases, and run SEO, social media, Google Ads, Meta Ads and YouTube campaigns.</p>
  <p>Whether you run a local shop in Delhi, a coaching institute in Bhopal, a real estate company in Mumbai or an online store that ships across India, we plan campaigns around your audience, your city and your budget. Our team works from New Delhi and supports clients in ${esc(cityList())}.</p>
  <h3>Services businesses ask us for most</h3>
  <ul class="ticks">${SERVICES.map(s=>`<li><a href="#${s.id}">${esc(s.title)}</a>: ${esc(s.short)}</li>`).join('')}</ul>
  <h3>Frequently asked questions</h3><div class="faq">${faqHtml(HOME_FAQ)}</div></div></section>
 <section class="sec"><div class="wrap"><h2>Our presence</h2><p class="sub">Find us in these cities.</p>${cities()}</div></section>`;
}
function service(s){
 return `<section class="hero" style="background:radial-gradient(circle at 90% 6%,${s.c1}40,transparent 55%),radial-gradient(circle at 0% 100%,${s.c2}22,transparent 50%),#fff"><div class="wrap"><div><nav class="crumb" aria-label="Breadcrumb"><a href="#home">Home</a> / ${esc(s.nav)}</nav><h1>${esc(s.title)}</h1><p class="lead">${esc(s.intro)}</p><div class="cta-row"><a class="btn" href="#enquiry">Get a quote</a>${callBtn()}</div></div>${art(s.id,esc(s.title)+' illustration')}</div></section>
 <section class="sec"><div class="wrap two"><div><h2>About ${esc(s.title)}</h2>${s.about.map(p=>`<p>${esc(p)}</p>`).join('')}<p>${esc(s.long)}</p><p>We offer ${esc(s.title)} for businesses in ${esc(cityList())}, and across India, from our office in New Delhi.</p></div>
  <div class="fc"><h3>Who uses it</h3><ul>${s.uses.map(u=>`<li>${esc(u)}</li>`).join('')}</ul></div></div></section>
 <section class="sec alt"><div class="wrap"><h2>What you get</h2><p class="sub">Everything included with ${esc(s.title)}.</p><div class="feat">${s.points.map(p=>`<div class="fc">${ic('tick',s.c1)}<h3>${esc(p)}</h3></div>`).join('')}</div></div></section>
 <section class="sec"><div class="wrap"><h2>Why choose ${esc(SITE.name)} for ${esc(s.title)}</h2><p class="sub">${esc(SITE.slogan)}.</p>
  <div class="steps"><div class="fc"><h3>Share your goal</h3><p>Tell us your audience, city and budget.</p></div><div class="fc"><h3>We prepare and launch</h3><p>You approve the campaign, then we send it out.</p></div><div class="fc"><h3>You get the report</h3><p>See delivery, response and results in one place.</p></div></div></div></section>
 <section class="sec alt"><div class="wrap faq"><h2>${esc(s.title)}: frequently asked questions</h2><p class="sub">Quick answers before you get in touch.</p>${faqHtml(s.faq)}
  <h2 style="margin-top:48px">Other services</h2><ul class="chips">${SERVICES.filter(x=>x.id!==s.id).map(x=>`<li class="lk"><a href="#${x.id}">${esc(x.title)}</a></li>`).join('')}</ul>${bandHtml()}</div></section>`;
}
function about(){
 return `<section class="hero slim"><div class="wrap"><div><span class="pill">${esc(SITE.slogan)}</span><h1>About ${esc(SITE.name)}</h1><p class="lead">A digital marketing company from New Delhi, helping businesses reach customers through messaging, data and online advertising.</p></div></div></section>
 <section class="sec"><div class="wrap two"><div><h2>Who we are</h2><p>${esc(SITE.name)} works from Westend Mall, Janakpuri West, New Delhi, with a presence in ${SITE.cities.length} cities across India. “Prachar” means promotion, and that is our job: to put your offer in front of the right people.</p><p>We offer bulk SMS, email and WhatsApp, mobile and email databases, SEO, social media and paid advertising, affiliate marketing and lead generation, all from one team.</p></div>
  <div class="fc"><h3>Quick facts</h3><ul><li>Head office in New Delhi</li><li>Present in ${SITE.cities.length} cities</li><li>Eight services under one roof</li><li>Reports after every campaign</li></ul></div></div></section>
 <section class="sec alt"><div class="wrap"><h2>What we stand for</h2><p class="sub">Three promises behind every project.</p><div class="feat"><div class="fc">${ic('star','#F5B700')}<h3>Authentic service</h3><p>We say what we can do, and we do what we say.</p></div><div class="fc">${ic('team','#38A9E8')}<h3>Long-term business engagement</h3><p>We would rather work with you for years than for one campaign.</p></div><div class="fc">${ic('chart','#C98F00')}<h3>Clear reporting</h3><p>Every campaign ends with numbers you can read and act on.</p></div></div></div></section>
 <section class="sec"><div class="wrap"><h2>Our services</h2><ul class="chips">${SERVICES.map(x=>`<li class="lk"><a href="#${x.id}">${esc(x.title)}</a></li>`).join('')}</ul><h2 style="margin-top:48px">Our presence</h2>${cities()}${bandHtml()}</div></section>`;
}
function career(){
 return `<section class="hero slim"><div class="wrap"><div><h1>Career with us</h1><p class="lead">Join a growing digital marketing team in New Delhi. Send us your CV and documents and we will contact you if there is a fit.</p><a class="btn" href="#apply">Apply now</a></div></div></section>
 <section class="sec"><div class="wrap"><h2>Why join ${esc(SITE.name)}</h2><p class="sub">A place to learn every channel of digital marketing and grow with the team.</p>
  <div class="feat"><div class="fc">${ic('team','#38A9E8')}<h3>Work across channels</h3><p>SMS, email, WhatsApp, search, social and ads, all under one roof.</p></div><div class="fc">${ic('chart','#C98F00')}<h3>Real campaigns</h3><p>Work on live projects for real businesses from your first weeks.</p></div><div class="fc">${ic('star','#F5B700')}<h3>Grow with us</h3><p>We believe in long-term relationships, with our clients and with our team.</p></div></div>
  <h2 style="margin-top:56px">Roles we hire for</h2><p class="sub">Do not see your role? Apply anyway and tell us what you can do.</p><ul class="chips">${ROLES.map(r=>`<li class="c">${esc(r)}</li>`).join('')}</ul></div></section>
 <section class="sec alt"><div class="wrap enq" id="apply"><div><h2>Apply with your CV</h2><p class="sub">Fill in the form and upload your CV. You can add certificates or ID proofs too. Your application comes straight to our hiring inbox.</p><p class="mini">Questions? Call <a href="${TEL}">${esc(SITE.mobile)}</a> or email <a href="${MAILTO}">${esc(SITE.email)}</a>.</p></div>${careerForm()}</div></section>`;
}
function thanks(){
 return `<section class="hero slim"><div class="wrap"><div><h1>Thank you</h1><p class="lead">We have received your message. Our team will contact you soon. For anything urgent, call ${esc(SITE.mobile)}.</p><a class="btn" href="#home">Back to home</a>${callBtn()}</div></div></section>`;
}
const LEGAL={
 privacy:{title:"Privacy Policy",sec:[["Information we collect","When you send an enquiry or apply for a job through this website, we collect the details you enter, such as your name, mobile number, email address, city and message. Job applicants may also upload a CV and other documents."],["How we use it","We use your details to reply to your enquiry, discuss our services, consider job applications and keep a record of our communication with you."],["How forms reach us","Form entries and attachments are sent to our email inbox through a third-party form-forwarding service. This website does not store uploaded files."],["Sharing","We do not share your details with others except where needed to respond to you or to run a service you have asked for, or where the law requires it."],["Cookies","This website does not use tracking cookies at present. If that changes, we will update this page."],["Your rights","You can ask us to correct or delete the details you have shared, or withdraw your consent, by writing to "+SITE.email+". We will respond in line with the Digital Personal Data Protection Act, 2023 and other Indian laws that apply."],["Contact us",SITE.address+". Email: "+SITE.email+". Mobile: "+SITE.mobile+"."]]},
 terms:{title:"Terms and Conditions",sec:[["About these terms","By using this website you agree to these terms. If you do not agree, please do not use the website."],["Information on this website","The information here is general. Services, prices and timelines are confirmed in a written quotation or agreement before work starts."],["Acceptable use","You must not use our services or website to send unlawful, misleading, abusive or unsolicited messages, or to break anyone’s rights."],["Campaign approval","We may decline, pause or stop any campaign that does not meet our Compliance Policy or the law."],["Third-party platforms","Delivery depends on telecom operators, WhatsApp, email providers and other platforms, and on their rules. We cannot guarantee delivery, open rates or responses."],["Ownership","The content, design and logo of this website belong to "+SITE.name+" and may not be copied without permission."],["Limits of liability","As far as the law allows, we are not liable for indirect or consequential loss arising from the use of this website or our services."],["Governing law","These terms are governed by the laws of India, and the courts at New Delhi have jurisdiction."],["Changes","We may update these terms from time to time. The latest version is always on this page."]]},
 compliance:{title:"Compliance Policy",sec:[["Our approach","We run messaging and data campaigns in line with Indian rules, and we ask our clients to do the same."],["Bulk SMS","Promotional and transactional SMS are sent through sender IDs and message templates registered on the telecom operators’ DLT platform. Promotional messages respect customers’ DND preferences."],["WhatsApp","Business messages follow WhatsApp’s Business Policy, including opt-in and approved message templates."],["Email","Emails carry a clear sender identity and a way to unsubscribe, and subject lines must not mislead."],["Databases","Mobile and email databases are filtered and delivered for marketing use. Clients must use them lawfully, including under the Digital Personal Data Protection Act, 2023, TRAI regulations and the Information Technology Act, 2000."],["Content we do not accept","Fraud, phishing, illegal products or services, hateful or adult content, and anything misleading."],["Report misuse or opt out","Write to "+SITE.email+" or call "+SITE.mobile+" and we will look into it."],["Enforcement","We may suspend any campaign or account that breaks these rules."]]}
};
const legal=k=>{const X=LEGAL[k];return `<section class="hero slim"><div class="wrap"><div><h1>${esc(X.title)}</h1><p class="lead">Last updated: October 2026</p></div></div></section><section class="sec"><div class="wrap legal">${X.sec.map(x=>`<h2>${esc(x[0])}</h2><p>${esc(x[1])}</p>`).join('')}</div></section>`;};
function contact(){
 return `<section class="hero slim"><div class="wrap"><div><span class="pill">${esc(SITE.slogan)}</span><h1>Contact us</h1><p class="lead">Call, email or visit our New Delhi office. We are happy to talk about your campaign.</p><div class="cta-row">${callBtn('btn')}<a class="btn alt" href="${WA}" target="_blank" rel="noopener noreferrer">${svg('wa')}WhatsApp us</a></div></div></div></section>
 <section class="sec"><div class="wrap"><div class="info"><div class="fc">${ic('pin','#F5B700')}<h3>Address</h3><p>${esc(SITE.address)}</p></div><div class="fc">${ic('mail','#38A9E8')}<h3>Email</h3><p><a href="${MAILTO}">${esc(SITE.email)}</a></p></div><div class="fc">${ic('phone','#C98F00')}<h3>Phone / Mobile</h3><p><a href="${TEL}">${esc(SITE.mobile)}</a></p></div></div>
 <iframe class="map" loading="lazy" title="Map of our office in Janakpuri West, New Delhi" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps?q=${encodeURIComponent('Westend Mall, Janakpuri West, New Delhi 110058')}&output=embed"></iframe>
 <h2 style="margin-top:48px">Follow us</h2><div class="soc big" style="margin-bottom:8px">${socHtml()}</div><h2 style="margin-top:48px">Our presence</h2>${cities()}</div></section>`;
}
const PAGES={home,contact,about,career,thanks,privacy:()=>legal('privacy'),terms:()=>legal('terms'),compliance:()=>legal('compliance')};

/* ---- shell: top bar, header, bottom bar, footer ---- */
document.getElementById('logo-slot').outerHTML=fixLinks(logoHtml());
document.getElementById('topin').innerHTML=fixLinks(`<div class="tb"><a href="${TEL}">${svg('phone')}${esc(SITE.mobile)}</a><a href="${MAILTO}">${svg('mail')}${esc(SITE.email)}</a></div><div class="tr"><a href="#about">About us</a><a href="#career">Career with us</a><div class="soc">${socHtml()}</div></div>`);
document.getElementById('acts').innerHTML=`<a class="callb" href="${TEL}" aria-label="Call ${esc(SITE.mobile)}">${svg('phone')}<span>${esc(SITE.mobile)}</span></a><a class="cta" href="${L('contact')}">Contact us</a>`;
document.getElementById('svcnav').innerHTML=fixLinks(SERVICES.map(s=>`<a href="#${s.id}" data-id="${s.id}">${esc(s.nav)}</a>`).join('')+'<a href="#about" data-id="about">About us</a><a href="#career" data-id="career">Career with us</a>');
const BN=[['home','Home','home',L('home'),''],['services','Services','all',L('services'),''],['call','Call','phone',TEL,''],['wa','WhatsApp','wa',WA,' target="_blank" rel="noopener noreferrer"'],['enquiry','Enquiry','msg',L('enquiry'),'']];
document.getElementById('bnav').innerHTML=BN.map(b=>`<a href="${b[3]}" data-b="${b[0]}"${b[4]}>${svg(b[2])}<span>${b[1]}</span></a>`).join('');
document.body.insertAdjacentHTML('beforeend',`<div class="fab"><a class="wa" href="${WA}" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">${svg('wa')}</a><a class="cl" href="${TEL}" aria-label="Call ${esc(SITE.mobile)}">${svg('phone')}</a></div>`);
document.getElementById('foot').innerHTML=fixLinks(`<div class="cols"><div>${logoHtml()}<p style="margin-top:14px"><strong>${esc(SITE.slogan)}</strong></p><p>${esc(SITE.tagline)}</p><div class="soc">${socHtml()}</div></div>
 <div class="links"><h3>Services</h3>${SERVICES.map(s=>`<a href="#${s.id}">${esc(s.title)}</a>`).join('')}</div>
 <div class="links"><h3>Company</h3><a href="#about">About us</a><a href="#career">Career with us</a><a href="#contact">Contact us</a><a href="#privacy">Privacy Policy</a><a href="#terms">Terms and Conditions</a><a href="#compliance">Compliance Policy</a></div>
 <div class="links"><h3>Contact</h3><p>${esc(SITE.address)}</p><a href="${TEL}">Phone: ${esc(SITE.mobile)}</a><a href="${MAILTO}">Email: ${esc(SITE.email)}</a></div></div><div class="copy">© ${new Date().getFullYear()} ${esc(SITE.name)}. All rights reserved.</div>`);

/* ---- SEO: title, description, structured data ---- */
function setHead(title,desc){
 document.title=title;
 let m=document.querySelector('meta[name="description"]'); if(!m){m=document.createElement('meta');m.name='description';document.head.appendChild(m);} m.content=desc;
 const og=document.querySelector('meta[property="og:title"]'); if(og) og.content=title;
 const od=document.querySelector('meta[property="og:description"]'); if(od) od.content=desc;
}
function setSchema(list){
 document.querySelectorAll('script[data-ld]').forEach(n=>n.remove());
 list.forEach(o=>{const s=document.createElement('script');s.type='application/ld+json';s.dataset.ld='1';s.textContent=JSON.stringify(Object.assign({"@context":"https://schema.org"},o));document.head.appendChild(s);});
}
const ORG={"@type":"ProfessionalService",name:SITE.name,slogan:SITE.slogan,description:SITE.tagline,telephone:SITE.phone,email:SITE.email,address:{"@type":"PostalAddress",streetAddress:"504, 5th Floor, Westend Mall, Janakpuri West",addressLocality:"New Delhi",postalCode:"110058",addressCountry:"IN"},areaServed:SITE.cities,sameAs:SITE.social.map(s=>s.u)};
const faqLd=list=>({"@type":"FAQPage",mainEntity:list.map(f=>({"@type":"Question",name:f[0]||f.q,acceptedAnswer:{"@type":"Answer",text:f[1]||f.a}}))});

/* ---- router (one page per file; preview build uses #hash) ---- */
const SCROLL={enquiry:'enquiry-form',services:'services',reviews:'reviews',apply:'apply'};
function render(){
 const h=HASH?(location.hash.slice(1)||'home'):PAGE;
 const real=SCROLL[h]?(h==='apply'?'career':'home'):h;
 const s=SERVICES.find(x=>x.id===real);
 app.innerHTML=fixLinks(s?service(s):(PAGES[real]||home)());
 if(s){ setHead(s.seoTitle,s.seoDesc); setSchema([ORG,{"@type":"Service",name:s.title,serviceType:s.title,description:s.seoDesc,areaServed:"India",provider:{"@type":"ProfessionalService",name:SITE.name,telephone:SITE.phone}},faqLd(s.faq),{"@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"Home",item:new URL(FILES.home,location.href).href},{"@type":"ListItem",position:2,name:s.title}]}]); }
 else { const m=SEO[real]||SEO.home||{title:SITE.name,desc:SITE.tagline}; setHead(m.title,m.desc); setSchema(real==='home'?[ORG,faqLd(HOME_FAQ)]:[ORG]); }
 document.querySelectorAll('#svcnav a').forEach(a=>a.dataset.id===real?a.setAttribute('aria-current','page'):a.removeAttribute('aria-current'));
 const cur=document.querySelector('#svcnav a[aria-current]'); if(cur) cur.scrollIntoView({inline:'center',block:'nearest'});
 const bid=real==='home'&&SCROLL[h]?h:(real==='home'?'home':'');
 document.querySelectorAll('#bnav a').forEach(a=>a.dataset.b===bid?a.setAttribute('aria-current','page'):a.removeAttribute('aria-current'));
 const target=HASH?SCROLL[h]:location.hash.slice(1);
 const el=target&&document.getElementById(target); if(el) el.scrollIntoView(); else window.scrollTo(0,0);
 wireForms(); loadPhotos();
}
if(HASH) addEventListener('hashchange',render);
render();
})();
