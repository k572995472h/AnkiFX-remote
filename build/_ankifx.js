var __ankifx_script_src=(document.currentScript&&document.currentScript.src)||"";
(()=>{var qi=[],Ye=null,lo=60,co=1.5,fo={id:"aurora",name:"Aurora",run:Lr,stop:Ar,drawOverlay:Fr,onResize:(i,t)=>{let e=document.documentElement,o=e?getComputedStyle(e):null;if(ht=o&&parseInt(o.getPropertyValue("--io-header"))||0,St=t-ht,Ie=i/8,De=St/8,Ye){let r=lo/8,n=Math.ceil(Ie/r),c=Math.ceil(De/(r*co));Ye.w=n,Ye.h=c,Ye.build()}te&&(te.style.width=Ie+"px",te.style.height=De+"px",te.style.position="absolute",te.style.top=ht+"px",te.style.left="0",te.style.transform="scale(8)",te.style.transformOrigin="top left")},marqueeFont:{color:"#E0FFFF",shadowColor:"rgba(0,128,128,0.8)",shadowBlur:10}},kt=null,Ie,De,te=null,Tr=0,wt=0,dt={x:-1e3,y:-1e3},ht=0,St=0,Yt=class{constructor(t,e){this.x=t||0,this.y=e||0}setAngle(t){let e=this.getLength()||1;this.x=Math.cos(t)*e,this.y=Math.sin(t)*e}setLength(t){let e=Math.atan2(this.y,this.x);this.x=Math.cos(e)*t,this.y=Math.sin(e)*t}getLength(){return Math.sqrt(this.x*this.x+this.y*this.y)}addTo(t){this.x+=t.x,this.y+=t.y}},so=(()=>{let i=new Uint8Array(512),t=new Uint8Array(256).map(()=>Math.random()*256);for(let r=0;r<512;r++)i[r]=t[r&255];let e=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]];function o(r,n,c,a){return r[0]*n+r[1]*c+r[2]*a}return{simplex3:(r,n,c)=>{let a,s,u,d,l=.3333333333333333,h=1/6,m=(r+n+c)*l,p=Math.floor(r+m),f=Math.floor(n+m),g=Math.floor(c+m),k=(p+f+g)*h,y=r-p+k,x=n-f+k,w=c-g+k,S,P,b,C,v,T;y>=x?x>=w?(S=1,P=0,b=0,C=1,v=1,T=0):y>=w?(S=1,P=0,b=0,C=1,v=0,T=1):(S=0,P=0,b=1,C=1,v=0,T=1):x<w?(S=0,P=0,b=1,C=0,v=1,T=1):y<w?(S=0,P=1,b=0,C=0,v=1,T=1):(S=0,P=1,b=0,C=1,v=1,T=0);let N=y-S+h,D=x-P+h,A=w-b+h,$=y-C+2*h,I=x-v+2*h,q=w-T+2*h,G=y-1+3*h,K=x-1+3*h,Z=w-1+3*h,L=p&255,U=f&255,V=g&255,B=.6-y*y-x*x-w*w;B<0?a=0:(B*=B,a=B*B*o(e[i[L+i[U+i[V]]]%12],y,x,w));let ie=.6-N*N-D*D-A*A;ie<0?s=0:(ie*=ie,s=ie*ie*o(e[i[L+S+i[U+P+i[V+b]]]%12],N,D,A));let le=.6-$*$-I*I-q*q;le<0?u=0:(le*=le,u=le*le*o(e[i[L+C+i[U+v+i[V+T]]]%12],$,I,q));let xe=.6-G*G-K*K-Z*Z;return xe<0?d=0:(xe*=xe,d=xe*xe*o(e[i[L+1+i[U+1+i[V+1]]]%12],G,K,Z)),32*(a+s+u+d)}}})(),ji=class{constructor(t,e,o={}){this.settings={frequency:.1,...o},this.w=t,this.h=e,this.time=0,this.build()}build(){this.cols=Math.ceil(this.w),this.rows=Math.ceil(this.h),this.field=new Array(this.cols);for(let t=0;t<this.cols;t++){this.field[t]=new Array(this.rows);for(let e=0;e<this.rows;e++)this.field[t][e]=new Yt(0,0)}}update(t){this.time+=t;let e=this.time*this.settings.frequency/1e3;for(let o=0;o<this.field.length;o++)for(let r=0;r<this.field[o].length;r++){let n=so.simplex3(o/20,r/20,e)*Math.PI*2,c=so.simplex3(o/10+4e4,r/10+4e4,e);this.field[o][r].setAngle(n),this.field[o][r].setLength(c),typeof this.manipulateVector=="function"&&this.manipulateVector(this.field[o][r],o,r),typeof this.onDraw=="function"&&this.onDraw(this.field[o][r],o,r)}}};function _r(){qi=[];let i=150;for(let t=0;t<i;t++)qi.push({x:Math.random(),y:Math.random(),size:.5+Math.random()*1.3,opacity:.15+Math.random()*.75,blinkSpeed:.001+Math.random()*.002,blinkOffset:Math.random()*Math.PI*2})}function pt(i){i.touches&&i.touches[0]?(dt.x=i.touches[0].clientX,dt.y=i.touches[0].clientY):(dt.x=i.clientX,dt.y=i.clientY)}function Lr(i,t){let e=i.ctx2d;te=i.canvas2D,te.classList.add("afx-aurora-active"),ht=i.topInset||0,St=i.visibleHeight||i.height,Ie=i.width/8,De=St/8,te.width=Ie*i.dpr,te.height=De*i.dpr,e.setTransform(1,0,0,1,0,0),e.scale(i.dpr,i.dpr),te.style.width=Ie+"px",te.style.height=De+"px",te.style.position="absolute",te.style.top=ht+"px",te.style.left="0",te.style.transform="scale(8)",te.style.transformOrigin="top left",_r();let o=lo/8,r=Math.ceil(Ie/o),n=Math.ceil(De/(o*co));Ye=new ji(r,n,{frequency:.1});let c={x:Ie/r,y:De/n},a=255/n;Ye.onDraw=(u,d,l)=>{let h=u.getLength()*Math.abs(u.x),m=u.getLength()*Math.abs(u.y),p=Math.round(-20*h+80*m+(50-.6*l*a)),f=Math.round(180*h+20*m-60+.4*l*a),g=Math.round(50*h+30*m+(40-.5*l*a)+.5*l*a);e.fillStyle=`rgba(${p}, ${f}, ${g}, 0.8)`,e.fillRect(d*c.x,l*c.y,c.x+.5,c.y+.5)},Ye.manipulateVector=(u,d,l)=>{let h={x:d*c.x+.5*c.x,y:l*c.y+.5*c.y},m=dt.x/8,p=dt.y/8,f=new Yt((m-h.x)/Ie,(p-h.y)/De);u.addTo(f),u.getLength()>1&&u.setLength(1)},Tr=0,wt=0,window.addEventListener("mousemove",pt),window.addEventListener("touchstart",pt),window.addEventListener("touchmove",pt);function s(u){wt||(wt=u);let d=u-wt;wt=u,e.fillStyle="#020b1a",e.fillRect(0,0,Ie,De),Ye.update(d),kt=requestAnimationFrame(s)}kt=requestAnimationFrame(s)}function Fr(i,t,e,o){let r=ht,n=St||e;i.fillStyle="#ffffff",qi.forEach(c=>{let a=(Math.sin(o*c.blinkSpeed+c.blinkOffset)+1)/2;i.globalAlpha=c.opacity*a,i.beginPath();let s=r+c.y*n;i.arc(c.x*t,s,c.size,0,Math.PI*2),i.fill()}),i.globalAlpha=1}function Ar(){kt&&(cancelAnimationFrame(kt),kt=null),window.removeEventListener("mousemove",pt),window.removeEventListener("touchstart",pt),window.removeEventListener("touchmove",pt),te&&(te.classList.remove("afx-aurora-active"),te.style.cssText="position: absolute; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none;",te=null);let i=window.AnkiFX;i&&typeof i.handleResize=="function"&&i.handleResize()}var Kt=null,Ct,Jt,Pe=null,Ir=200,ho=[];try{let i=sessionStorage.getItem("ankifx_captured_logs");i&&(ho=JSON.parse(i))}catch{}window.AnkiFX_Captured_Logs=window.AnkiFX_Captured_Logs||ho;var uo=null,Et="all",ve={ioHeaderHeight:null,topInset:null,bottomInset:null,viewportHeight:null,visibleHeight:0,isLandscape:!1};function po(){let i=document.documentElement,t=i?getComputedStyle(i):null,e=(r,n)=>{if(!r)return null;let c=r.getPropertyValue(n);if(!c||c.trim()==="")return null;let a=parseInt(c,10);return isNaN(a)?null:a};ve.ioHeaderHeight=e(t,"--io-header"),ve.topInset=e(t,"--top-inset"),ve.bottomInset=e(t,"--bottom-inset");let o=document.getElementById("ankifx-background");ve.viewportHeight=o?Math.round(o.getBoundingClientRect().height):null,ve.isLandscape=window.innerWidth>window.innerHeight,ve.visibleHeight=(i?i.clientHeight:window.innerHeight)+(ve.ioHeaderHeight||0)}var Re=(i,t)=>{let e=t.map(o=>{if(o===null)return"null";if(o===void 0)return"undefined";if(typeof o=="object")try{return JSON.stringify(o)}catch{return String(o)}return String(o)}).join(" ");window.AnkiFX_Captured_Logs.push({type:i,message:e,timestamp:new Date().toLocaleTimeString()}),window.AnkiFX_Captured_Logs.length>Ir&&window.AnkiFX_Captured_Logs.shift();try{sessionStorage.setItem("ankifx_captured_logs",JSON.stringify(window.AnkiFX_Captured_Logs))}catch{}uo&&uo()};if(typeof window<"u"&&!window.__console_intercepted__){let i=console.log&&console.log.bind(console)||(()=>{}),t=console.warn&&console.warn.bind(console)||(()=>{}),e=console.error&&console.error.bind(console)||(()=>{}),o=console.info&&console.info.bind(console)||(()=>{}),r=console.debug&&console.debug.bind(console)||(()=>{});console.log=(...n)=>{i(...n),Re("log",n)},console.warn=(...n)=>{t(...n),Re("warn",n)},console.error=(...n)=>{e(...n),Re("error",n)},console.info=(...n)=>{o(...n),Re("info",n)},console.debug=(...n)=>{r(...n),Re("debug",n)},window.addEventListener("error",n=>{let c=n.message;if(n.error){let a=n.error.name||"Error",s=n.error.message||n.message||"",u=n.error.stack||"";u&&!u.includes(s)?c=`${a}: ${s}
${u}`:c=u||`${a}: ${s}`}Re("error",[c])}),window.addEventListener("unhandledrejection",n=>{Re("error",[`Unhandled Promise Rejection: ${n.reason}`])}),window.__console_intercepted__=!0}var mo={id:"debug",name:"DEBUG",run:Dr,stop:Rr,onResize:(i,t)=>{Ct=i,Jt=t,po()},marqueeFont:{color:"#00ff00",shadowColor:"rgba(0,0,0,0.8)",shadowBlur:5},controls:[{type:"button",id:"copy-logs-btn",label:"\u{1F4CB} COPY LOGS",onClick:()=>{zr()}},{type:"button",id:"clear-storage-btn",label:"\u{1F9F9} CLEAR STORAGE",onClick:()=>{if(confirm("Clear ALL AnkiFX local storage?")){localStorage.clear();try{sessionStorage.removeItem("ankifx_captured_logs"),sessionStorage.removeItem("ankifx_loader_logs"),sessionStorage.removeItem("ankifx_eval_history")}catch{}location.reload()}}}]};function Dr(i,t){Pe&&(Pe.remove(),Pe=null);let e=i.dpr||1;Ct=i.width,Jt=i.height,po(),Pe=document.createElement("div"),Pe.className="afx-debug-container";let o=document.createElement("div");o.className="afx-debug-columns",Pe.appendChild(o);let r=document.createElement("div");r.className="afx-debug-left-col",o.appendChild(r);let n=document.createElement("div");n.className="afx-debug-right-col",o.appendChild(n);let c=document.createElement("div");c.className="afx-debug-panel diagnostics",c.innerHTML="<h3>AnkiFX Version</h3>";let a=document.createElement("div");a.className="afx-debug-content",c.appendChild(a),r.appendChild(c);let s=document.createElement("div");s.className="afx-debug-panel viewport-info",s.innerHTML="<h3>Viewport & Layout</h3>";let u=document.createElement("pre");u.className="afx-debug-content",s.appendChild(u),r.appendChild(s);let d=document.createElement("div");d.className="afx-debug-panel logs",d.innerHTML="<h3>Chronological Loader Logs</h3>";let l=document.createElement("div");l.className="afx-debug-content",d.appendChild(l),n.appendChild(d);let h=document.createElement("div");h.className="afx-debug-panel localstorage-viewer",h.innerHTML="<h3>LocalStorage</h3>";let m=document.createElement("div");m.className="afx-debug-content",h.appendChild(m),n.appendChild(h);let p=document.createElement("div");p.className="afx-debug-panel console-logs",p.innerHTML=`
        <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(255, 255, 255, 0.15); padding-bottom: 4px; margin-bottom: 10px; flex-wrap: wrap; gap: 8px;">
            <h3 style="margin: 0; border: none; padding: 0; color: #ff5555;">Console Logs</h3>
            <div style="display: flex; gap: 6px; align-items: center;">
                <button class="afx-console-filter-btn active" data-filter="all" style="background: rgba(255,255,255,0.15); border: 1px solid rgba(255,255,255,0.25); color: #fff; font-size: 10px; padding: 2px 6px; border-radius: 4px; cursor: pointer; font-family: monospace;">ALL</button>
                <button class="afx-console-filter-btn" data-filter="log" style="background: rgba(255,255,255,0.05); border: 1px solid transparent; color: #888; font-size: 10px; padding: 2px 6px; border-radius: 4px; cursor: pointer; font-family: monospace;">LOG</button>
                <button class="afx-console-filter-btn" data-filter="warn" style="background: rgba(255,255,255,0.05); border: 1px solid transparent; color: #888; font-size: 10px; padding: 2px 6px; border-radius: 4px; cursor: pointer; font-family: monospace;">WARN</button>
                <button class="afx-console-filter-btn" data-filter="error" style="background: rgba(255,255,255,0.05); border: 1px solid transparent; color: #888; font-size: 10px; padding: 2px 6px; border-radius: 4px; cursor: pointer; font-family: monospace;">ERROR</button>
                <button id="afx-clear-console-btn" style="background: rgba(255, 85, 85, 0.2); border: 1px solid rgba(255, 85, 85, 0.4); color: #ff5555; font-size: 10px; font-weight: bold; padding: 2px 6px; border-radius: 4px; cursor: pointer; margin-left: 10px; font-family: monospace;">CLEAR</button>
            </div>
        </div>
        <div id="afx-console-log-list" class="afx-debug-content" style="max-height: 250px; overflow-y: auto; font-family: monospace; margin-bottom: 8px;"></div>
        <div style="display: flex; gap: 8px; border-top: 1px solid rgba(255,255,255,0.15); padding-top: 8px; align-items: center;">
            <span style="color: #00ffff; font-weight: bold; font-family: monospace;">&gt;</span>
            <input type="text" id="afx-console-input" placeholder="Execute JS (e.g. window.location.href)" style="flex: 1; background: rgba(0,0,0,0.5); border: 1px solid rgba(255,255,255,0.2); color: #fff; font-family: monospace; font-size: 11px; padding: 4px 8px; border-radius: 4px; outline: none; box-sizing: border-box;">
            <button id="afx-console-exec-btn" style="background: #28a745; color: #fff; border: none; font-size: 10px; font-weight: bold; padding: 4px 10px; border-radius: 4px; cursor: pointer; font-family: monospace;">EXEC</button>
        </div>
    `,Pe.appendChild(p);let f=document.createElement("div");f.style.height="calc(var(--bottom-inset, 0px) + var(--afx-dock-height, 0px) + 20px)",f.style.flexShrink="0",f.style.pointerEvents="none",Pe.appendChild(f);let g=p.querySelectorAll(".afx-console-filter-btn");g.forEach(L=>{L.addEventListener("click",U=>{U.stopPropagation(),g.forEach(V=>{V.classList.remove("active"),V.style.background="rgba(255,255,255,0.05)",V.style.borderColor="transparent",V.style.color="#888"}),L.classList.add("active"),L.style.background="rgba(255,255,255,0.15)",L.style.borderColor="rgba(255,255,255,0.25)",L.style.color="#fff",Et=L.getAttribute("data-filter")})});let k=p.querySelector("#afx-clear-console-btn");k&&k.addEventListener("click",L=>{L.stopPropagation(),window.AnkiFX_Captured_Logs.length=0;try{sessionStorage.removeItem("ankifx_captured_logs")}catch{}});let y=p.querySelector("#afx-console-input"),x=p.querySelector("#afx-console-exec-btn"),w=()=>{if(!y)return;let L=y.value.trim();if(L){Re("log",[`> ${L}`]);try{let U=(0,eval)(L);Re("info",["=>",U])}catch(U){Re("error",[U.stack||U.message||U])}y.value="",y.focus()}};x&&y&&(["keydown","keyup","keypress"].forEach(L=>{y.addEventListener(L,U=>{U.stopPropagation()})}),y.addEventListener("keydown",L=>{L.key==="Enter"&&(L.preventDefault(),w())}),x.addEventListener("click",L=>{L.stopPropagation(),w()})),(document.getElementById("ankifx-overlay")||document.body).appendChild(Pe);let P=document.getElementById("ankifx-background")||document.body,b={topLeft:document.createElement("div"),topRight:document.createElement("div"),bottomLeft:document.createElement("div"),bottomRight:document.createElement("div")};b.topLeft.className="afx-debug-corner top-left",b.topRight.className="afx-debug-corner top-right",b.bottomLeft.className="afx-debug-corner bottom-left",b.bottomRight.className="afx-debug-corner bottom-right",b.bottomLeft.style.bottom="auto",b.bottomRight.style.bottom="auto",Object.values(b).forEach(L=>P.appendChild(L));let C=document.createElement("div");C.className="afx-debug-line visible-bottom";let v=document.createElement("span");v.className="afx-debug-line-label",v.textContent="--- VISIBLE DOCUMENT BOTTOM ---",C.appendChild(v),P.appendChild(C);let T=0,N=0,D=0,A="",$="",I="",q="",G="",K="";function Z(L){L===void 0&&(L=performance.now()),T||(T=L),N++,L-T>=1e3&&(D=N,N=0,T=L);let U=i.ctx2d;U.clearRect(0,0,Ct,Jt),U.fillStyle="#050508",U.fillRect(0,0,Ct,Jt);let V=ve.visibleHeight,B=j=>j!==null?`${j}px`:"N/A",ie=B(ve.ioHeaderHeight),le=B(ve.topInset),xe=B(ve.bottomInset),Ge=B(ve.viewportHeight),Ve=ve.ioHeaderHeight||0,qe=[`window:               ${window.innerWidth}x${window.innerHeight}`,`screen:               ${screen.width}x${screen.height}`,`doc:                  ${document.documentElement.clientWidth}x${document.documentElement.clientHeight}`,`orient:               ${window.orientation||"N/A"}`,`dpr (native|engine):  (${window.devicePixelRatio}|${e})`,`--io-header:          ${ie}`,`--top-inset:          ${le}`,`--bottom-inset:       ${xe}`,`--afx-viewport-height: calc(100dvh + ${Ve}px) = ${Ge}`,`isLandscape:          ${ve.isLandscape}`].join(`
`);qe!==A&&(u.textContent=qe,A=qe);let Fe=window.AnkiFX_Eval_History||[],M=JSON.stringify(Fe),F=[`Version:  ${window.AnkiFX?.version||"1.0.0-dev"}`,`Source:   ${window.AnkiFX?.source||"unknown"}`,`Built:    ${window.AnkiFX?.buildDate||"development"}`].join(`
`),H=F+"_"+M;if(H!==$){a.innerHTML="";let j=document.createElement("pre");j.style.margin="0 0 10px 0",j.style.fontFamily="inherit",j.style.fontSize="inherit",j.textContent=F,a.appendChild(j);let z=document.createElement("div");z.style.borderTop="1px dashed rgba(255,255,255,0.15)",z.style.margin="10px 0",a.appendChild(z);let Q=document.createElement("div");Q.textContent="EVALUATION HISTORY:",Q.style.fontWeight="bold",Q.style.color="#00ffff",Q.style.marginBottom="6px",Q.style.fontSize="11px",a.appendChild(Q);let oe=document.createElement("div");if(Fe.length===0){let W=document.createElement("div");W.textContent="(No evaluation history captured)",W.style.color="#888",W.style.fontStyle="italic",oe.appendChild(W)}else Fe.slice(-3).forEach((W,Ae)=>{let X=document.createElement("div");X.textContent=`[${Ae+1}] ${W.source} (${W.version}) @ ${W.time} - ${W.status}`,X.style.color=W.status==="active"?"#55ff55":"#ffaa55",X.style.fontSize="11px",oe.appendChild(X)});a.appendChild(oe),$=H}let R=window.AnkiFX_Loader_Logs||[],ee=JSON.stringify(R);if(ee!==I){if(l.innerHTML="",R.length===0){let j=document.createElement("div");j.textContent="(No logs captured by template loader)",j.style.color="#888",j.style.fontStyle="italic",l.appendChild(j)}else{let j={success:{color:"#55ff55",badge:"\u2713"},error:{color:"#ff5555",badge:"\u2717"},warn:{color:"#ffaa55",badge:"!"},pending:{color:"#888888",badge:"\u2026"},info:{color:"#dddddd",badge:"\xB7"}};R.forEach((z,Q)=>{let oe=z&&typeof z=="object",W=oe?z.msg:String(z),Ae=j[oe?z.level:"info"]||j.info,X=document.createElement("div");X.style.cssText="display: flex; gap: 6px; align-items: baseline; font-size: 11px; margin-bottom: 3px; padding-bottom: 2px; border-bottom: 1px solid rgba(255,255,255,0.04);";let ae=document.createElement("span");ae.textContent=`[${String(Q+1).padStart(2,"0")}]`,ae.style.cssText="color: #555; flex-shrink: 0; font-size: 10px;";let me=document.createElement("span");me.textContent=Ae.badge,me.style.cssText=`color: ${Ae.color}; flex-shrink: 0; font-weight: bold; width: 10px;`;let ge=document.createElement("span");ge.textContent=W,ge.style.cssText=`color: ${Ae.color}; word-break: break-word;`,X.appendChild(ae),X.appendChild(me),X.appendChild(ge),l.appendChild(X)})}I=ee}let pe={};for(let j=0;j<localStorage.length;j++){let z=localStorage.key(j);pe[z]=localStorage.getItem(z)}let ye=JSON.stringify(pe);if(ye!==K){m.innerHTML="";let j=Object.keys(pe).sort();if(j.length===0){let z=document.createElement("div");z.textContent="(LocalStorage is empty)",z.style.color="#888",z.style.fontStyle="italic",z.style.fontSize="11px",m.appendChild(z)}else j.forEach(z=>{let Q=document.createElement("div");Q.style.cssText="display: flex; justify-content: space-between; font-size: 11px; margin-bottom: 4px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 2px;";let oe=document.createElement("span");oe.textContent=z,oe.style.color="#ffaa55",oe.style.wordBreak="break-all",oe.style.marginRight="8px";let W=document.createElement("span");W.textContent=pe[z],W.style.color="#00ffff",W.style.wordBreak="break-all",W.style.textAlign="right",Q.appendChild(oe),Q.appendChild(W),m.appendChild(Q)});K=ye}let Se=window.AnkiFX_Captured_Logs.filter(j=>Et==="all"?!0:j.type===Et),Ee=Et+"_"+JSON.stringify(Se);if(Ee!==G){let j=document.getElementById("afx-console-log-list");if(j)if(j.innerHTML="",Se.length===0){let z=document.createElement("div");z.textContent=`(No logs in category: ${Et})`,z.style.color="#888",z.style.fontStyle="italic",z.style.fontSize="11px",j.appendChild(z)}else Se.forEach(z=>{let Q=document.createElement("div");Q.style.marginBottom="4px",Q.style.fontSize="11px",Q.style.borderBottom="1px solid rgba(255,255,255,0.03)",Q.style.paddingBottom="2px";let oe=document.createElement("span");oe.textContent=`[${z.timestamp}] `,oe.style.color="#888",Q.appendChild(oe);let W=document.createElement("span");W.textContent=z.message,z.type==="error"?W.style.color="#ff5555":z.type==="warn"?W.style.color="#ffaa55":z.type==="info"||z.type==="debug"?W.style.color="#00ffff":W.style.color="#ffffff",Q.appendChild(W),j.appendChild(Q)}),j.scrollTop=j.scrollHeight;G=Ee}let Ce=Math.round(Ct),We=Math.round(V),Xt=`${Ce}x${We}`;Xt!==q&&(b.topLeft.textContent="(0,0)",b.topRight.textContent=`(${Ce},0)`,b.bottomLeft.textContent=`(0,${We})`,b.bottomRight.textContent=`(${Ce},${We})`,b.bottomLeft.style.top=`${We-18}px`,b.bottomRight.style.top=`${We-18}px`,q=Xt),C.style.top=`${V}px`,Kt=requestAnimationFrame(Z)}Z()}function Rr(){Kt&&(cancelAnimationFrame(Kt),Kt=null),Pe&&(Pe.remove(),Pe=null),document.querySelectorAll(".afx-debug-corner, .afx-debug-line").forEach(i=>i.remove())}function zr(){let i=document.querySelector(".afx-debug-container");if(!i)return;let t=`=== ANKIFX DEBUG LOGS ===

`;i.querySelectorAll(".afx-debug-panel").forEach(r=>{let n=r.querySelector("h3")?.textContent||"",c=r.querySelector(".afx-debug-content");c&&(t+=`--- ${n.toUpperCase()} ---
`,t+=c.innerText||c.textContent||"",t+=`

`)}),(()=>{try{let r=document.createElement("textarea");r.value=t.trim(),r.style.position="fixed",r.style.top="0",r.style.left="0",r.style.opacity="0",r.style.pointerEvents="none",document.body.appendChild(r),r.focus(),r.select();let n=document.execCommand("copy");if(document.body.removeChild(r),n)return Promise.resolve()}catch{}return navigator.clipboard&&typeof navigator.clipboard.writeText=="function"?navigator.clipboard.writeText(t.trim()):Promise.reject(new Error("No copy method succeeded or is available"))})().then(()=>{let r=document.getElementById("afx-control-copy-logs-btn");if(r){let n=r.textContent;r.textContent="\u2705 COPIED!",setTimeout(()=>{r.textContent=n},1500)}}).catch(r=>{let n=document.getElementById("afx-control-copy-logs-btn");if(n){let c=n.textContent;n.textContent="\u274C ERROR",setTimeout(()=>{n.textContent=c},1500)}})}var Pt=null,ne,ze,Te={id:"ecg",name:"ECG Monitor",run:Or,stop:Ur,onResize:(i,t)=>{ne=i,ze=t},marqueeFont:{color:"#FF1A1A",shadowColor:"#CC0000",shadowBlur:15}};function Or(i,t){let e=i.ctx2d;ne=i.width,ze=i.height;let o=document.getElementById("afx-top-group-right"),r=document.getElementById("afx-ecg-panel");!r&&o&&(r=document.createElement("div"),r.id="afx-ecg-panel",o.insertBefore(r,o.firstChild)),r&&!r.querySelector(".afx-ecg-bpm-val")&&(r.innerHTML=`
            <div class="afx-ecg-bpm">\u2665 <span class="afx-ecg-bpm-val">--</span> BPM</div>
            <div class="afx-ecg-rhythm">--</div>
        `);let n=r?r.querySelector(".afx-ecg-bpm-val"):null,c=r?r.querySelector(".afx-ecg-rhythm"):null,a=localStorage.getItem("ankifx_ecg_rhythm")||"sinus";Te.controls=[{type:"button",id:"ecg-trigger",label:a==="sinus"?"\u26A1 TRIGGER ARRHYTHMIA":"\u{1F49A} RESTORE SINUS",onClick:()=>{let M=localStorage.getItem("ankifx_ecg_rhythm")||"sinus",F;if(M==="sinus"){let H=["first_degree","mobitz_1","mobitz_2","third_degree","st_elevation","afib","a_flutter","torsades"];F=H[Math.floor(Math.random()*H.length)]}else F="sinus";localStorage.setItem("ankifx_ecg_rhythm",F),localStorage.setItem("ankifx_ecg_trigger_time",Date.now())}}];let s=200,u=40,d=120,l=25,h=5,m=new Float32Array(4096),p=0,f=0,g=0,k=0,y=0,x=0,w=0,S=100,P=.6,b=72,C=0,v="sinus",T=25+Math.random()*15,N=0,D=["first_degree","mobitz_1","mobitz_2","third_degree","st_elevation","afib","a_flutter","torsades"],A=0;function $(){p<ne&&(p=ne)}let I=(M,F,H,R)=>R*Math.exp(-((M-F)**2)/(2*H**2));function q(M){return I(M,.15,.03,.12)}function G(M){return I(M,.03,.03,.12)}function K(M,F){let H=F%4;return H===0?I(M,.17,.03,.12):H===1?I(M,.1,.03,.12):H===2?I(M,.03,.03,.12):I(M,.15,.03,.12)}function Z(M){return I(M,.08,.03,.12)}function L(M){return .035*Math.sin(M*Math.PI*40)+.015*Math.sin(M*Math.PI*96)+.008*Math.sin(M*Math.PI*176)}function U(M){return .085*(M*4%1-.5)}function V(M,F){let H=Math.sin(M*Math.PI*2)*.58+Math.sin(M*Math.PI*4)*.16,R=Math.sin(F*1.2);return H*R}function B(M,F=!1){let H=0;return H+=I(M,.33,.008,-.08),H+=I(M,.36,.012,1),H+=I(M,.39,.008,-.12),F&&(H+=I(M,.46,.07,.38)),H+=I(M,.56,.04,.22),H}function ie(M,F,H){let R=M%1,ee=Math.floor(M);return F==="sinus"?q(R)+B(R,!1):F==="first_degree"?G(R)+B(R,!1):F==="mobitz_1"?ee%4===3?K(R,ee):K(R,ee)+B(R,!1):F==="mobitz_2"?ee%3===2?Z(R):Z(R)+B(R,!1):F==="st_elevation"?q(R)+B(R,!0):F==="afib"?L(R)+B(R,!1):F==="a_flutter"?U(R)+B(R,!1):F==="torsades"?V(R,H):0}function le(M,F){let H=M%1,R=F%1,ee=I(H,.15,.03,.12),pe=I(R,.33,.008,-.08)+I(R,.36,.012,1)+I(R,.39,.008,-.12)+I(R,.56,.04,.22);return ee+pe}function xe(){e.strokeStyle="rgba(60, 0, 0, 0.15)",e.lineWidth=.5,e.beginPath();for(let M=0;M<ne;M+=h)e.moveTo(M,0),e.lineTo(M,ze);for(let M=0;M<ze;M+=h)e.moveTo(0,M),e.lineTo(ne,M);e.stroke(),e.strokeStyle="rgba(80, 0, 0, 0.3)",e.lineWidth=1,e.beginPath();for(let M=0;M<ne;M+=l)e.moveTo(M,0),e.lineTo(M,ze);for(let M=0;M<ze;M+=l)e.moveTo(0,M),e.lineTo(ne,M);e.stroke()}let Ge=-1,Ve="";function qe(){if(!r)return;let M=.5+C*.5;r.style.opacity=M;let F="SINUS RHYTHM";v==="first_degree"?F="1\xB0 AV BLOCK":v==="mobitz_1"?F="2\xB0 AV (MOBITZ 1)":v==="mobitz_2"?F="2\xB0 AV (MOBITZ 2)":v==="third_degree"?F="3\xB0 AV BLOCK":v==="st_elevation"?F="ST ELEVATION":v==="afib"?F="ATRIAL FIBRILLATION":v==="a_flutter"?F="ATRIAL FLUTTER":v==="torsades"&&(F="TORSADES DE POINTES"),n&&b!==Ge&&(n.textContent=b,Ge=b),c&&F!==Ve&&(c.textContent=F,Ve=F)}function Fe(M){k||(k=M);let F=Math.min((M-k)/1e3,.05);k=M,g+=F,$();let H=localStorage.getItem("ankifx_ecg_rhythm")||"sinus",R=parseInt(localStorage.getItem("ankifx_ecg_trigger_time")||"0");if(R>N){if(N=R,v=H,T=g+25+Math.random()*15,v!=="sinus"){let X=D.indexOf(v);X!==-1&&(A=(X+1)%D.length)}v==="afib"&&(S=70+Math.floor(Math.random()*60),P=60/S),Te.controls&&Te.controls[0]&&(Te.controls[0].label=v==="sinus"?"\u26A1 TRIGGER ARRHYTHMIA":"\u{1F49A} RESTORE SINUS",AnkiFX.renderEffectControls(Te))}g>=T&&(v==="sinus"?(v=D[A],A=(A+1)%D.length):v="sinus",localStorage.setItem("ankifx_ecg_rhythm",v),T=g+25+Math.random()*15,v==="afib"&&(S=70+Math.floor(Math.random()*60),P=60/S),Te.controls&&Te.controls[0]&&(Te.controls[0].label=v==="sinus"?"\u26A1 TRIGGER ARRHYTHMIA":"\u{1F49A} RESTORE SINUS",AnkiFX.renderEffectControls(Te)));let ee=72;v==="third_degree"?ee=35:v==="mobitz_1"||v==="mobitz_2"?ee=68:v==="afib"?ee=S:v==="a_flutter"?ee=75:v==="torsades"&&(ee=220);let pe=v==="afib"?P:60/ee,ye=y,Se=x,Ee=w;if(v==="third_degree"?(x+=F/(60/88),w+=F/(60/ee)):y+=F/pe,v!=="third_degree"){let X=Math.floor(ye);Math.floor(y)>X&&v==="afib"&&(S=70+Math.floor(Math.random()*65),P=60/S)}if(v==="third_degree")Math.floor(Ee-.36)<Math.floor(w-.36)&&(C=1,b=ee+Math.floor(Math.random()*3)-1);else if(Math.floor(ye-.36)<Math.floor(y-.36)){let X=Math.floor(y-.36),ae=!1;v==="mobitz_1"?ae=X%4===3:v==="mobitz_2"&&(ae=X%3===2),ae||(C=1,b=Math.floor(ee),v!=="torsades"&&v!=="a_flutter"&&(b+=Math.floor(Math.random()*5)-2))}C=Math.max(0,C-F*4);let Ce=s*F,We=f+Ce,Xt=Math.floor(f),j=Math.floor(We);for(let X=Xt;X<=j;X++){let ae=X%ne,me=(X-f)/Ce;if(v==="third_degree"){let ge=Se+(x-Se)*me,Gt=Ee+(w-Ee)*me;m[ae]=le(ge,Gt)}else{let ge=ye+(y-ye)*me;m[ae]=ie(ge,v,g)}}f=We,f>=ne&&(f-=ne),e.fillStyle="#000000",e.fillRect(0,0,ne,ze),xe();let z=ze*.55,Q=ze*.35,oe=Math.floor(f)%ne,W=4;e.save(),e.lineCap="round",e.lineJoin="round";for(let X=0;X<3;X++){X===0?(e.lineWidth=15,e.strokeStyle="rgb(200, 0, 0)"):X===1?(e.lineWidth=7,e.strokeStyle="rgb(255, 15, 15)"):(e.lineWidth=2.4,e.strokeStyle="rgb(255, 175, 175)");for(let ae=0;ae<ne;ae+=W){let me=oe-ae;if(me<0&&(me+=ne),me>ne-u)continue;let ge=1,Gt=ne-u-d;if(me>Gt&&(ge=1-(me-Gt)/d,ge=Math.max(0,ge)),ge<=0)continue;let Vt=0;me<12&&(Vt=1-me/12),X===0?e.globalAlpha=ge*(.07+Vt*.13):X===1?e.globalAlpha=ge*(.28+Vt*.32):e.globalAlpha=ge*(.85+Vt*.15),e.beginPath();let Pr=z-m[ae]*Q;e.moveTo(ae,Pr);let Wt=Math.min(ae+W,ne);for(let ut=ae+1;ut<Wt;ut++){let Mr=z-m[ut]*Q;e.lineTo(ut,Mr)}if(Wt<ne){let ut=z-m[Wt]*Q;e.lineTo(Wt,ut)}e.stroke()}}e.globalAlpha=1,e.restore(),e.save();let Ae=e.createLinearGradient(oe-3,0,oe+3,0);Ae.addColorStop(0,"rgba(255, 0, 0, 0)"),Ae.addColorStop(.5,"rgba(255, 50, 50, 0.4)"),Ae.addColorStop(1,"rgba(255, 0, 0, 0)"),e.fillStyle=Ae,e.fillRect(oe-3,0,6,ze),e.restore(),qe(),Pt=requestAnimationFrame(Fe)}Pt=requestAnimationFrame(Fe)}function Ur(){Pt&&(cancelAnimationFrame(Pt),Pt=null);let i=document.getElementById("afx-ecg-panel");i&&i.remove()}var Mt=null,$i,Hi,go={id:"fire",name:"Doom Fire",run:Nr,stop:qr,onResize:(i,t)=>{$i=i,Hi=t},preferredTrack:{title:"Doom 3 BFG Edition",trackTitle:"DOOM E1M1"},marqueeFont:{color:"#ffffff",shadowColor:"rgba(0,0,0,0.8)",shadowBlur:5}},Br=[[7,7,7],[31,7,7],[47,15,7],[71,15,7],[87,23,7],[103,31,7],[119,31,7],[143,39,7],[159,47,7],[175,63,7],[191,71,7],[199,71,7],[223,79,7],[223,87,7],[223,87,7],[215,95,7],[215,95,7],[215,103,15],[207,111,15],[207,119,15],[207,127,15],[207,135,23],[199,135,23],[199,143,23],[199,151,31],[191,159,31],[191,159,31],[191,167,39],[191,167,39],[191,175,47],[183,175,47],[183,183,47],[183,183,55],[207,207,111],[223,223,159],[239,239,199],[255,255,255]];function Nr(i,t){let e=i.ctx2d;$i=i.width,Hi=i.height;let o=320,r=168,n=new Uint8Array(o*r),c=e.createImageData(o,r),a=c.data,s=document.createElement("canvas");s.width=o,s.height=r;let u=s.getContext("2d");function d(){n.fill(0);for(let f=0;f<o;f++)n[(r-1)*o+f]=36}function l(f){let g=n[f];if(g===0)n[f-o]=0;else{let k=Math.floor(Math.random()*3),y=f-k+1;n[y-o]=g-(k&1)}}function h(){for(let f=0;f<o;f++)for(let g=1;g<r;g++)l(g*o+f)}function m(){for(let f=0;f<n.length;f++){let g=n[f],k=Br[g],y=f*4;a[y]=k[0],a[y+1]=k[1],a[y+2]=k[2],a[y+3]=255}}d();function p(){h(),m(),u.putImageData(c,0,0),e.save(),e.imageSmoothingEnabled=!1,e.drawImage(s,0,0,$i,Hi),e.restore(),Mt=requestAnimationFrame(p)}Mt=requestAnimationFrame(p)}function qr(){Mt&&(cancelAnimationFrame(Mt),Mt=null)}var Tt=null,je,$e,ce=parseInt(localStorage.getItem("ankifx_geometry_mode")||"0",10),_e=["unity","light","flow","fractal"];(isNaN(ce)||ce<0||ce>=_e.length)&&(ce=0);var mt=[],He={id:"geometry",name:"Geometry",run:$r,stop:Hr,onResize:(i,t)=>{je=i,$e=t},controls:[{type:"button",id:"geometry-mode-switch",label:Gi(ce),onClick:()=>{jr()}}],marqueeFont:{colorFn:(i,t)=>{let e=[45,180,220],o=Math.floor(i*.5+t*.05)%e.length,r=(o+1)%e.length,n=(i*.5+t*.05)%1;return`hsl(${e[o]+(e[r]-e[o])*n}, 95%, 65%)`},shadowColor:"rgba(255, 215, 0, 0.4)",shadowBlur:15}};function jr(){ce=(ce+1)%_e.length,localStorage.setItem("ankifx_geometry_mode",ce),He.controls&&He.controls[0]&&(He.controls[0].label=Gi(ce),typeof AnkiFX<"u"&&AnkiFX.renderEffectControls&&AnkiFX.renderEffectControls(He))}function Gi(i){switch(_e[i]){case"unity":return"\u{1F441}\uFE0F UNITY MODE";case"light":return"\u2728 LIGHT MODE";case"flow":return"\u{1F30A} FLOW MODE";case"fractal":return"\u2744\uFE0F FRACTAL MOSAIC";default:return"\u{1F441}\uFE0F MODE"}}function vo(){mt=[];for(let i=0;i<150;i++)mt.push({x:Math.random(),y:Math.random(),prevX:0,prevY:0,life:Math.random(),speed:.0012+Math.random()*.0018,hue:Math.random()<.4?45:Math.random()<.7?180:220})}function $r(i,t){let e=i.ctx2d;je=i.width,$e=i.height;let o=0;He.controls&&He.controls[0]&&(He.controls[0].label=Gi(ce)),mt.length===0&&vo();function r(){o+=.012,e.globalCompositeOperation="source-over";let n=.25;_e[ce]==="unity"?n=.22:_e[ce]==="light"?n=.15:_e[ce]==="flow"?n=.08:_e[ce]==="fractal"&&(n=.28),e.fillStyle=`rgba(2, 2, 8, ${n})`,e.fillRect(0,0,je,$e);let c=je/2,a=$e/2,s=Math.max(je,$e)*.85;e.globalCompositeOperation="lighter";let u=e.createRadialGradient(c,a,0,c,a,35+Math.sin(o*2)*12),d="rgba(255, 215, 0, 0.25)";switch(_e[ce]==="light"?d="rgba(255, 255, 255, 0.5)":_e[ce]==="flow"?d="rgba(64, 224, 208, 0.3)":_e[ce]==="fractal"&&(d="rgba(138, 43, 226, 0.3)"),u.addColorStop(0,d),u.addColorStop(1,"rgba(0, 0, 0, 0)"),e.fillStyle=u,e.beginPath(),e.arc(c,a,60,0,Math.PI*2),e.fill(),_e[ce]){case"unity":Xr(o,e,c,a,s);break;case"light":Vr(o,e,c,a,s);break;case"flow":Wr(o,e,c,a,s);break;case"fractal":Yr(o,e,c,a,s);break}e.globalCompositeOperation="source-over";let l=e.createRadialGradient(c,a,s*.35,c,a,s*1.25);l.addColorStop(0,"rgba(0, 0, 0, 0)"),l.addColorStop(1,"rgba(2, 2, 8, 0.65)"),e.fillStyle=l,e.fillRect(0,0,je,$e),Tt=requestAnimationFrame(r)}Tt=requestAnimationFrame(r)}function Hr(){Tt&&(cancelAnimationFrame(Tt),Tt=null),mt=[]}function Xr(i,t,e,o,r){let a=i*.12%1;for(let s=0;s<6;s++){let u=(s-a+6)%6,l=Math.pow(2,u-2)*50;if(l>r*1.5)continue;let h=1;u<1?h=u:u>4&&(h=6-u),h=Math.max(0,Math.min(1,h))*.65;let m=8+2*(s%3);t.save(),t.translate(e,o),t.rotate(i*.04*(s%2===0?1:-1)),Gr(t,0,0,l,m,h,i),t.restore()}}function Gr(i,t,e,o,r,n,c){let a=r===8||r===10?3:5;i.beginPath();for(let u=0;u<r;u++){let d=u/r*Math.PI*2,l=t+Math.cos(d)*o,h=e+Math.sin(d)*o,p=(u+a)%r/r*Math.PI*2,f=t+Math.cos(p)*o,g=e+Math.sin(p)*o;i.moveTo(l,h),i.lineTo(f,g)}for(let u=0;u<r;u++){let d=u/r*Math.PI*2;i.moveTo(0,0),i.lineTo(Math.cos(d)*o,Math.sin(d)*o)}i.lineWidth=1.2;let s=r===8?45:r===10?180:220;i.strokeStyle=`hsla(${s}, 95%, 65%, ${n})`,i.stroke()}function Vr(i,t,e,o,r){bo(t,e,o,i,1,r);let n=3;for(let c=0;c<n;c++){let a=i*.6+c*Math.PI*2/n,s=(Math.sin(i*.4)*.12+.15)*r,u=e+Math.cos(a)*s,d=o+Math.sin(a)*s;bo(t,u,d,i+c*.25,.45,r)}}function bo(i,t,e,o,r,n){for(let s=0;s<5;s++){let u=(s/5+o*.18)%1,d=u*n*.85,l=Math.sin(u*Math.PI)*.45*r;if(l<=0)continue;i.beginPath(),i.arc(t,e,d,0,Math.PI*2);let h=45+u*175;i.strokeStyle=`hsla(${h}, 95%, 60%, ${l})`,i.lineWidth=1.5+(1-u)*6,i.stroke(),i.save(),i.translate(t,e),i.rotate(o*.08),i.beginPath();let m=8;for(let p=0;p<m;p++){let f=p/m*Math.PI*2;i.moveTo(Math.cos(f)*(d*.82),Math.sin(f)*(d*.82)),i.lineTo(Math.cos(f)*d,Math.sin(f)*d)}i.strokeStyle=`hsla(${h}, 90%, 65%, ${l*.25})`,i.lineWidth=1,i.stroke(),i.restore()}}function Wr(i,t,e,o,r){mt.length===0&&vo(),mt.forEach(n=>{let c=n.x*je,a=n.y*$e;n.prevX=c,n.prevY=a;let s=n.x*3.5,u=n.y*3.5,d=Math.sin(s*Math.PI+i*.4)*Math.cos(u*Math.PI-i*.2)*Math.PI*2.2+i*.05;if(n.x+=Math.cos(d)*n.speed,n.y+=Math.sin(d)*n.speed,n.life-=.0018,n.x<0||n.x>1||n.y<0||n.y>1||n.life<=0){let p=Math.random()*Math.PI*2,f=Math.random()*.15;n.x=.5+Math.cos(p)*f,n.y=.5+Math.sin(p)*f,n.prevX=n.x*je,n.prevY=n.y*$e,n.life=.6+Math.random()*.4,n.speed=.001+Math.random()*.002,n.hue=Math.random()<.4?45:Math.random()<.7?180:220}let l=n.x*je,h=n.y*$e;t.beginPath(),t.moveTo(n.prevX,n.prevY),t.lineTo(l,h);let m=Math.sin(n.life*Math.PI);t.lineWidth=.6+m*4,t.strokeStyle=`hsla(${n.hue}, 95%, 62%, ${m*.35})`,t.stroke()}),t.save();for(let n=0;n<3;n++){t.beginPath();let c=n*Math.PI*2/3;for(let s=0;s<70;s++){let u=s*.06,d=.16+Math.sin(i*.18+u*.4)*.08,l=e+Math.cos(i*.25+u+c)*r*d+Math.sin(u*2.5+i)*25,h=o+Math.sin(i*.32+u*1.3+c)*r*d+Math.cos(u*1.8-i)*25;s===0?t.moveTo(l,h):t.lineTo(l,h)}let a=n===0?45:n===1?180:220;t.strokeStyle=`hsla(${a}, 90%, 65%, 0.12)`,t.lineWidth=1.8,t.stroke()}t.restore()}function Yr(i,t,e,o,r){let n=r*(.28+Math.sin(i*.2)*.04);Xi(t,e,o,n,0,3,i),Xi(t,e,o,n*.38,0,2,i+Math.PI)}function Xi(i,t,e,o,r,n,c){if(r>n)return;let a=6,s=Math.PI*2/a;i.save(),i.translate(t,e),i.rotate(c*.05*(r%2===0?1:-1)+r*.25),i.beginPath();for(let l=0;l<=a;l++){let h=l*s,m=Math.cos(h)*o,p=Math.sin(h)*o;l===0?i.moveTo(m,p):i.lineTo(m,p)}for(let l=0;l<a/2;l++){let h=l*s,m=(l+a/2)*s;i.moveTo(Math.cos(h)*o,Math.sin(h)*o),i.lineTo(Math.cos(m)*o,Math.sin(m)*o)}let u=(45+r*55+c*12)%360,d=(1-r/(n+1.2))*.6;if(i.strokeStyle=`hsla(${u}, 92%, 63%, ${d})`,i.lineWidth=1.4/(r+1),i.stroke(),i.restore(),r<n){let l=o*(.35+Math.sin(c*.35)*.06);for(let h=0;h<a;h++){let m=h*s+c*.03*(r%2===0?1:-1),p=t+Math.cos(m)*o,f=e+Math.sin(m)*o;Xi(i,p,f,l,r+1,n,c)}}}var Zt=null;function yo(i){Zt=i}var Kr=["#c3e4ff","#6ec3f4","#eae2ff","#b9beff"];function xo(i){return[(i>>16&255)/255,(i>>8&255)/255,(255&i)/255]}var Vi=class{constructor(t,e,o,r){let n=this;n.canvas=t,n.gl=e,n.meshes=[],n.debug=()=>{};let c=n.gl;Object.defineProperties(n,{Material:{enumerable:!1,value:class{constructor(s,u,d={}){let l=this;function h(f,g){let k=c.createShader(f);return c.shaderSource(k,g),c.compileShader(k),c.getShaderParameter(k,c.COMPILE_STATUS)||console.error("[Gradient/WebGL] Shader compile error:",c.getShaderInfoLog(k)),k}function m(f,g){return Object.entries(f).map(([k,y])=>y.getDeclaration(k,g)).join(`
`)}l.uniforms=d,l.uniformInstances=[];let p=`
              precision highp float;
            `;l.vertexSource=`
              ${p}
              attribute vec4 position;
              attribute vec2 uv;
              attribute vec2 uvNorm;
              ${m(n.commonUniforms,"vertex")}
              ${m(d,"vertex")}
              ${s}
            `,l.Source=`
              ${p}
              ${m(n.commonUniforms,"fragment")}
              ${m(d,"fragment")}
              ${u}
            `,l.vertexShader=h(c.VERTEX_SHADER,l.vertexSource),l.fragmentShader=h(c.FRAGMENT_SHADER,l.Source),l.program=c.createProgram(),c.attachShader(l.program,l.vertexShader),c.attachShader(l.program,l.fragmentShader),c.linkProgram(l.program),l.vertexShader&&(c.detachShader(l.program,l.vertexShader),c.deleteShader(l.vertexShader)),l.fragmentShader&&(c.detachShader(l.program,l.fragmentShader),c.deleteShader(l.fragmentShader)),c.getProgramParameter(l.program,c.LINK_STATUS)||console.error("[Gradient/WebGL] Program link error:",c.getProgramInfoLog(l.program)),c.useProgram(l.program),l.attachUniforms(void 0,n.commonUniforms),l.attachUniforms(void 0,l.uniforms)}attachUniforms(s,u){let d=this;s===void 0?Object.entries(u).forEach(([l,h])=>{d.attachUniforms(l,h)}):u.type==="array"?u.value.forEach((l,h)=>d.attachUniforms(`${s}[${h}]`,l)):u.type==="struct"?Object.entries(u.value).forEach(([l,h])=>d.attachUniforms(`${s}.${l}`,h)):d.uniformInstances.push({uniform:u,location:c.getUniformLocation(d.program,s)})}}},Uniform:{enumerable:!1,value:class{constructor(s){this.type="float",Object.assign(this,s),this.typeFn={float:"1f",int:"1i",vec2:"2fv",vec3:"3fv",vec4:"4fv",mat4:"Matrix4fv"}[this.type]||"1f",this.update()}update(s){this.value!==void 0&&c[`uniform${this.typeFn}`](s,this.typeFn.substring(0,6)==="Matrix"?this.transpose:this.value,this.typeFn.substring(0,6)==="Matrix"?this.value:null)}getDeclaration(s,u,d){let l=this;if(l.excludeFrom!==u){if(l.type==="array")return l.value[0].getDeclaration(s,u,l.value.length)+`
const int ${s}_length = ${l.value.length};`;if(l.type==="struct"){let h=s.replace("u_","");return h=h.charAt(0).toUpperCase()+h.slice(1),`uniform struct ${h} 
{
`+Object.entries(l.value).map(([m,p])=>p.getDeclaration(m,u).replace(/^uniform/,"")).join("")+`
} ${s}${d>0?`[${d}]`:""};`}return`uniform ${l.type} ${s}${d>0?`[${d}]`:""};`}}}},PlaneGeometry:{enumerable:!1,value:class{constructor(s,u,d,l,h){c.createBuffer(),this.attributes={position:new n.Attribute({target:c.ARRAY_BUFFER,size:3}),uv:new n.Attribute({target:c.ARRAY_BUFFER,size:2}),uvNorm:new n.Attribute({target:c.ARRAY_BUFFER,size:2}),index:new n.Attribute({target:c.ELEMENT_ARRAY_BUFFER,size:3,type:c.UNSIGNED_SHORT})},this.setTopology(d,l),this.setSize(s,u,h)}setTopology(s=1,u=1){let d=this;d.xSegCount=s,d.ySegCount=u,d.vertexCount=(d.xSegCount+1)*(d.ySegCount+1),d.quadCount=d.xSegCount*d.ySegCount*2,d.attributes.uv.values=new Float32Array(2*d.vertexCount),d.attributes.uvNorm.values=new Float32Array(2*d.vertexCount),d.attributes.index.values=new Uint16Array(3*d.quadCount);for(let l=0;l<=d.ySegCount;l++)for(let h=0;h<=d.xSegCount;h++){let m=l*(d.xSegCount+1)+h;if(d.attributes.uv.values[2*m]=h/d.xSegCount,d.attributes.uv.values[2*m+1]=1-l/d.ySegCount,d.attributes.uvNorm.values[2*m]=h/d.xSegCount*2-1,d.attributes.uvNorm.values[2*m+1]=1-l/d.ySegCount*2,h<d.xSegCount&&l<d.ySegCount){let p=l*d.xSegCount+h;d.attributes.index.values[6*p]=m,d.attributes.index.values[6*p+1]=m+1+d.xSegCount,d.attributes.index.values[6*p+2]=m+1,d.attributes.index.values[6*p+3]=m+1,d.attributes.index.values[6*p+4]=m+1+d.xSegCount,d.attributes.index.values[6*p+5]=m+2+d.xSegCount}}d.attributes.uv.update(),d.attributes.uvNorm.update(),d.attributes.index.update()}setSize(s=1,u=1,d="xz"){let l=this;l.width=s,l.height=u,l.orientation=d,(!l.attributes.position.values||l.attributes.position.values.length!==3*l.vertexCount)&&(l.attributes.position.values=new Float32Array(3*l.vertexCount));let h=s/-2,m=u/-2,p=s/l.xSegCount,f=u/l.ySegCount;for(let g=0;g<=l.ySegCount;g++){let k=m+g*f;for(let y=0;y<=l.xSegCount;y++){let x=h+y*p,w=g*(l.xSegCount+1)+y;l.attributes.position.values[3*w+"xyz".indexOf(d[0])]=x,l.attributes.position.values[3*w+"xyz".indexOf(d[1])]=-k}}l.attributes.position.update()}}},Mesh:{enumerable:!1,value:class{constructor(s,u){let d=this;d.geometry=s,d.material=u,d.wireframe=!1,d.attributeInstances=[],Object.entries(d.geometry.attributes).forEach(([l,h])=>{d.attributeInstances.push({attribute:h,location:h.attach(l,d.material.program)})}),n.meshes.push(d)}draw(){c.useProgram(this.material.program),this.material.uniformInstances.forEach(({uniform:s,location:u})=>s.update(u)),this.attributeInstances.forEach(({attribute:s,location:u})=>s.use(u)),c.drawElements(this.wireframe?c.LINES:c.TRIANGLES,this.geometry.attributes.index.values.length,c.UNSIGNED_SHORT,0)}remove(){n.meshes=n.meshes.filter(s=>s!==this)}}},Attribute:{enumerable:!1,value:class{constructor(s){this.type=c.FLOAT,this.normalized=!1,this.buffer=c.createBuffer(),Object.assign(this,s),this.update()}update(){this.values!==void 0&&(c.bindBuffer(this.target,this.buffer),c.bufferData(this.target,this.values,c.STATIC_DRAW))}attach(s,u){let d=c.getAttribLocation(u,s);return this.target===c.ARRAY_BUFFER&&(c.enableVertexAttribArray(d),c.vertexAttribPointer(d,this.size,this.type,this.normalized,0,0)),d}use(s){c.bindBuffer(this.target,this.buffer),this.target===c.ARRAY_BUFFER&&(c.enableVertexAttribArray(s),c.vertexAttribPointer(s,this.size,this.type,this.normalized,0,0))}}}});let a=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];n.commonUniforms={projectionMatrix:new n.Uniform({type:"mat4",value:a}),modelViewMatrix:new n.Uniform({type:"mat4",value:a}),resolution:new n.Uniform({type:"vec2",value:[1,1]}),aspectRatio:new n.Uniform({type:"float",value:1})},o&&r&&this.setSize(o,r)}setSize(t=640,e=480,o=1){this.width=t,this.height=e,this.gl.viewport(0,0,t*o,e*o),this.commonUniforms.resolution.value=[t,e],this.commonUniforms.aspectRatio.value=t/e}setOrthographicCamera(t=0,e=0,o=0,r=-2e3,n=2e3){this.commonUniforms.projectionMatrix.value=[2/this.width,0,0,0,0,2/this.height,0,0,0,0,2/(r-n),0,t,e,o,1]}render(){this.gl.clearColor(0,0,0,0),this.gl.clearDepth(1),this.meshes.forEach(t=>t.draw())}cleanup(){let t=this.gl;this.meshes.forEach(e=>{e.attributeInstances&&e.attributeInstances.forEach(({location:o})=>{typeof o=="number"&&o>=0&&t.disableVertexAttribArray(o)}),e.material&&e.material.program&&t.deleteProgram(e.material.program),e.geometry&&e.geometry.attributes&&Object.values(e.geometry.attributes).forEach(o=>{o.buffer&&t.deleteBuffer(o.buffer)})}),this.meshes=[]}},Qt=class{constructor(t,e,o,r){this.canvas=t,this.gl=e,this.width=o,this.height=r,this.angle=0,this.conf={presetName:"",wireframe:!1,density:[.06,.16],zoom:1,rotation:0,playing:!0},this.t=1253106,this.last=0,this.amp=320,this.seed=5,this.freqX=14e-5,this.freqY=29e-5,this.activeColors=[1,1,1,1],this.shaderFiles={vertex:`
                varying vec3 v_color;
                void main() {
                  float time = u_time * u_global.noiseSpeed;
                  vec2 noiseCoord = resolution * uvNorm * u_global.noiseFreq;
                  vec2 st = 1. - uvNorm.xy;

                  // Tilting the plane
                  float tilt = resolution.y / 2.0 * uvNorm.y;
                  float incline = resolution.x * uvNorm.x / 2.0 * u_vertDeform.incline;
                  float offset = resolution.x / 2.0 * u_vertDeform.incline * mix(u_vertDeform.offsetBottom, u_vertDeform.offsetTop, uv.y);

                  // Vertex noise
                  float noise = snoise(vec3(
                    noiseCoord.x * u_vertDeform.noiseFreq.x + time * u_vertDeform.noiseFlow,
                    noiseCoord.y * u_vertDeform.noiseFreq.y,
                    time * u_vertDeform.noiseSpeed + u_vertDeform.noiseSeed
                  )) * u_vertDeform.noiseAmp;

                  // Fade noise to zero at edges
                  noise *= 1.0 - pow(abs(uvNorm.y), 2.0);
                  noise = max(0.0, noise);

                  vec3 pos = vec3(
                    position.x,
                    position.y + tilt + incline + noise - offset,
                    position.z
                  );

                  // Vertex color
                  if (u_active_colors[0] == 1.) {
                    v_color = u_baseColor;
                  }

                  for (int i = 0; i < u_waveLayers_length; i++) {
                    if (u_active_colors[i + 1] == 1.) {
                      WaveLayers layer = u_waveLayers[i];
                      float noiseVal = smoothstep(
                        layer.noiseFloor,
                        layer.noiseCeil,
                        snoise(vec3(
                          noiseCoord.x * layer.noiseFreq.x + time * layer.noiseFlow,
                          noiseCoord.y * layer.noiseFreq.y,
                          time * layer.noiseSpeed + layer.noiseSeed
                        )) / 2.0 + 0.5
                      );
                      v_color = blendNormal(v_color, layer.color, pow(noiseVal, 4.));
                    }
                  }

                  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
                }
            `,noise:`
                vec3 mod289(vec3 x) {
                  return x - floor(x * (1.0 / 289.0)) * 289.0;
                }
                vec4 mod289(vec4 x) {
                  return x - floor(x * (1.0 / 289.0)) * 289.0;
                }
                vec4 permute(vec4 x) {
                    return mod289(((x*34.0)+1.0)*x);
                }
                vec4 taylorInvSqrt(vec4 r) {
                  return 1.79284291400159 - 0.85373472095314 * r;
                }
                float snoise(vec3 v) {
                  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
                  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);

                  vec3 i  = floor(v + dot(v, C.yyy) );
                  vec3 x0 =   v - i + dot(i, C.xxx) ;

                  vec3 g = step(x0.yzx, x0.xyz);
                  vec3 l = 1.0 - g;
                  vec3 i1 = min( g.xyz, l.zxy );
                  vec3 i2 = max( g.xyz, l.zxy );

                  vec3 x1 = x0 - i1 + C.xxx;
                  vec3 x2 = x0 - i2 + C.yyy;
                  vec3 x3 = x0 - D.yyy;

                  i = mod289(i);
                  vec4 p = permute( permute( permute(
                            i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
                          + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))
                          + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));

                  float n_ = 0.142857142857;
                  vec3  ns = n_ * D.wyz - D.xzx;

                  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);

                  vec4 x_ = floor(j * ns.z);
                  vec4 y_ = floor(j - 7.0 * x_ );

                  vec4 x = x_ *ns.x + ns.yyyy;
                  vec4 y = y_ *ns.x + ns.yyyy;
                  vec4 h = 1.0 - abs(x) - abs(y);

                  vec4 b0 = vec4( x.xy, y.xy );
                  vec4 b1 = vec4( x.zw, y.zw );

                  vec4 s0 = floor(b0)*2.0 + 1.0;
                  vec4 s1 = floor(b1)*2.0 + 1.0;
                  vec4 sh = -step(h, vec4(0.0));

                  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
                  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;

                  vec3 p0 = vec3(a0.xy,h.x);
                  vec3 p1 = vec3(a0.zw,h.y);
                  vec3 p2 = vec3(a1.xy,h.z);
                  vec3 p3 = vec3(a1.zw,h.w);

                  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
                  p0 *= norm.x;
                  p1 *= norm.y;
                  p2 *= norm.z;
                  p3 *= norm.w;

                  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
                  m = m * m;
                  return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3) ) );
                }
            `,blend:`
                vec3 blendNormal(vec3 base, vec3 blend) {
                    return blend;
                }
                vec3 blendNormal(vec3 base, vec3 blend, float opacity) {
                    return (blendNormal(base, blend) * opacity + base * (1.0 - opacity));
                }
            `,fragment:`
                varying vec3 v_color;
                void main() {
                  vec3 color = v_color;
                  if (u_darken_top == 1.0) {
                    vec2 st = gl_FragCoord.xy / resolution.xy;
                    color.g -= pow(st.y + sin(-12.0) * st.x, u_shadow_power) * 0.4;
                  }
                  gl_FragColor = vec4(color, 1.0);
                }
            `},this.initGradientColors(),this.minigl=new Vi(t,e,o,r),this.initMesh(),this.resize(),this.updateThemeAwareText()}initGradientColors(){this.sectionColors=Kr.map(t=>xo(parseInt(t.substring(1),16)))}initMaterial(){this.uniforms={u_time:new this.minigl.Uniform({value:0}),u_shadow_power:new this.minigl.Uniform({value:5}),u_darken_top:new this.minigl.Uniform({value:0}),u_active_colors:new this.minigl.Uniform({value:this.activeColors,type:"vec4"}),u_global:new this.minigl.Uniform({value:{noiseFreq:new this.minigl.Uniform({value:[this.freqX,this.freqY],type:"vec2"}),noiseSpeed:new this.minigl.Uniform({value:5e-6})},type:"struct"}),u_vertDeform:new this.minigl.Uniform({value:{incline:new this.minigl.Uniform({value:Math.sin(this.angle)/Math.cos(this.angle)}),offsetTop:new this.minigl.Uniform({value:-.5}),offsetBottom:new this.minigl.Uniform({value:-.5}),noiseFreq:new this.minigl.Uniform({value:[3,4],type:"vec2"}),noiseAmp:new this.minigl.Uniform({value:this.amp}),noiseSpeed:new this.minigl.Uniform({value:10}),noiseFlow:new this.minigl.Uniform({value:3}),noiseSeed:new this.minigl.Uniform({value:this.seed})},type:"struct",excludeFrom:"fragment"}),u_baseColor:new this.minigl.Uniform({value:this.sectionColors[0],type:"vec3",excludeFrom:"fragment"}),u_waveLayers:new this.minigl.Uniform({value:[],excludeFrom:"fragment",type:"array"})};for(let t=1;t<this.sectionColors.length;t+=1)this.uniforms.u_waveLayers.value.push(new this.minigl.Uniform({value:{color:new this.minigl.Uniform({value:this.sectionColors[t],type:"vec3"}),noiseFreq:new this.minigl.Uniform({value:[2+t/this.sectionColors.length,3+t/this.sectionColors.length],type:"vec2"}),noiseSpeed:new this.minigl.Uniform({value:11+.3*t}),noiseFlow:new this.minigl.Uniform({value:6.5+.3*t}),noiseSeed:new this.minigl.Uniform({value:this.seed+10*t}),noiseFloor:new this.minigl.Uniform({value:.1}),noiseCeil:new this.minigl.Uniform({value:.63+.07*t})},type:"struct"}));return this.vertexShader=[this.shaderFiles.noise,this.shaderFiles.blend,this.shaderFiles.vertex].join(`

`),new this.minigl.Material(this.vertexShader,this.shaderFiles.fragment,this.uniforms)}initMesh(){this.material=this.initMaterial(),this.geometry=new this.minigl.PlaneGeometry,this.mesh=new this.minigl.Mesh(this.geometry,this.material)}resize(){let t=Math.min(window.devicePixelRatio||1,1.5);this.minigl.setSize(this.width,this.height,t),this.minigl.setOrthographicCamera(),this.xSegCount=Math.ceil(this.width*this.conf.density[0]),this.ySegCount=Math.ceil(this.height*this.conf.density[1]),this.mesh.geometry.setTopology(this.xSegCount,this.ySegCount),this.mesh.geometry.setSize(this.width,this.height),this.mesh.material.uniforms.u_shadow_power.value=this.width<600?5:6}animate=t=>{if(!this.conf.playing)return;this.last===0&&(this.last=t);let e=Math.min(t-this.last,1e3/15);this.last=t,this.t+=e,this.mesh.material.uniforms.u_time.value=this.t,this.minigl.render(),this.animationId=requestAnimationFrame(this.animate)};updateThemeAwareText(){if(!this.sectionColors||this.sectionColors.length===0)return;let t=0;this.sectionColors.forEach(n=>{let c=n[0],a=n[1],s=n[2],u=.299*c+.587*a+.114*s;t+=u});let e=t/this.sectionColors.length,o=e>.6?"#111111":"#ffffff",r=e>.6?"0 1px 2px rgba(255, 255, 255, 0.8)":"0 1px 3px rgba(0, 0, 0, 0.9), 0 2px 10px rgba(0, 0, 0, 0.6)";document.documentElement.style.setProperty("--afx-body-color",o),document.documentElement.style.setProperty("--afx-text-shadow",r),Zt&&(Zt.marqueeFont={colorFn:(n,c)=>{if(!this.sectionColors||this.sectionColors.length===0)return"#ffffff";let a=(n*1.5+c*.25)%this.sectionColors.length,s=Math.floor(a),u=(s+1)%this.sectionColors.length,d=a-s,l=this.sectionColors[s],h=this.sectionColors[u],m=l[0]*(1-d)+h[0]*d,p=l[1]*(1-d)+h[1]*d,f=l[2]*(1-d)+h[2]*d,g=e>.6?.45:1;return`rgb(${Math.round(m*g*255)}, ${Math.round(p*g*255)}, ${Math.round(f*g*255)})`},shadowColor:e>.6?"rgba(0, 0, 0, 0.25)":"inherit",shadowBlur:16},window.AnkiFX&&window.AnkiFX.marquee&&window.AnkiFX.marquee.updateStyles(Zt.marqueeFont))}randomizeColors(){let t=()=>"#"+Math.floor(Math.random()*16777215).toString(16).padStart(6,"0"),e=[t(),t(),t(),t()];if(this.sectionColors=e.map(o=>xo(parseInt(o.substring(1),16))),this.uniforms&&this.uniforms.u_baseColor&&this.uniforms.u_waveLayers&&this.uniforms.u_waveLayers.value){this.uniforms.u_baseColor.value=this.sectionColors[0];for(let o=0;o<this.uniforms.u_waveLayers.value.length;o++){let r=this.uniforms.u_waveLayers.value[o];r&&r.value&&r.value.color&&(r.value.color.value=this.sectionColors[o+1]||this.sectionColors[0])}}this.updateThemeAwareText()}destroy(){this.conf.playing=!1,this.animationId&&cancelAnimationFrame(this.animationId),this.minigl&&this.minigl.cleanup()}};var de=null,Wi={id:"gradient",name:"Gradient",controls:[{type:"button",id:"gradient-randomize",label:"\u{1F3A8} RANDOMIZE",onClick:()=>{de&&de.randomizeColors()}}],run:(i,t)=>{de&&de.destroy(),de=new Qt(i.canvasGL,i.gl,i.width,i.height),de.conf.playing=!0,de.last=0,de.animationId=requestAnimationFrame(de.animate)},stop:()=>{de&&(de.destroy(),de=null),document.documentElement.style.removeProperty("--afx-body-color"),document.documentElement.style.removeProperty("--afx-text-shadow")},onResize:(i,t,e)=>{de&&(de.width=i,de.height=t,de.resize())},marqueeFont:{color:"#E6E6FA",shadowColor:"rgba(230, 230, 250, 0.6)",shadowBlur:8}};yo(Wi);function ei(i,t,e){function o(u,d){let l=i.createShader(u);return i.shaderSource(l,d),i.compileShader(l),i.getShaderParameter(l,i.COMPILE_STATUS)?l:(console.error("[AnkiFX/WebGL] Shader compile error:",i.getShaderInfoLog(l)),i.deleteShader(l),null)}let r=o(i.VERTEX_SHADER,t),n=o(i.FRAGMENT_SHADER,e);if(!r||!n)return r&&i.deleteShader(r),n&&i.deleteShader(n),null;let c=i.createProgram();if(i.attachShader(c,r),i.attachShader(c,n),i.linkProgram(c),i.detachShader(c,r),i.detachShader(c,n),i.deleteShader(r),i.deleteShader(n),!i.getProgramParameter(c,i.LINK_STATUS))return console.error("[AnkiFX/WebGL] Program link error:",i.getProgramInfoLog(c)),i.deleteProgram(c),null;i.useProgram(c);let a=i.createBuffer();i.bindBuffer(i.ARRAY_BUFFER,a),i.bufferData(i.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,1,1]),i.STATIC_DRAW);let s=i.getAttribLocation(c,"position");return i.enableVertexAttribArray(s),i.vertexAttribPointer(s,2,i.FLOAT,!1,0,0),{program:c,buffer:a}}var ii=null,it,Ke,Lt,ot,oi=null,ri=null,we={id:"julia",name:"Julia Set",run:Jr,stop:Zr,onResize:(i,t,e)=>{it=i,Ke=t,ot&&Lt&&ot.uniform2f(Lt,i*e,t*e)},preferredTrack:{title:"Acoustica Power Bundle 4",trackTitle:"AiR"},presets:[{name:"Black Hole",cRe:-.8,cIm:.156,zoomDepth:8,targetX:-.086441,targetY:-.239323},{name:"Electric Lightning",cRe:.285,cIm:.013,zoomDepth:6,targetX:-.106662,targetY:.656613},{name:"Golden Dragon",cRe:-.4,cIm:.6,zoomDepth:9,targetX:-.042175,targetY:-.036744},{name:"Filigree",cRe:-.70176,cIm:-.3842,zoomDepth:10.5,targetX:-.096904,targetY:-.656621},{name:"Fractal Storm",cRe:-.7269,cIm:.1889,zoomDepth:10.5,targetX:-.237086,targetY:.547981},{name:"Seahorse Spiral",cRe:-.74543,cIm:.11301,zoomDepth:7.5,targetX:-.529406,targetY:.072863}],marqueeFont:{color:"#FFF",outline:"#000"}},ai=null,ni=null,ti={x:0,y:0},wo=parseInt(localStorage.getItem("ankifx_julia_preset_index")||"0",10),_t=we.presets[wo]||we.presets[0],O={presetIndex:wo,cRe:_t.cRe,cIm:_t.cIm,zoomDepth:_t.zoomDepth,targetX:_t.targetX,targetY:_t.targetY,speed:parseFloat(localStorage.getItem("ankifx_julia_speed"))||.15};function Jr(i,t={}){ot=i.gl;let e=i.gl,o=i.ctx2d;it=i.width,Ke=i.height;let r=i.dpr,a=ei(e,`
        attribute vec2 position;
        void main() { gl_Position = vec4(position, 0.0, 1.0); }
    `,`
        precision highp float;
        uniform vec2 u_resolution;
        uniform float u_time;
        uniform float u_speed;
        uniform vec2 u_c; 
        uniform float u_zoomDepth;
        uniform vec2 u_target;

        vec3 palette(float t) {
            vec3 a = vec3(0.5, 0.5, 0.5);
            vec3 b = vec3(0.5, 0.5, 0.5);
            vec3 c = vec3(1.0, 0.7, 0.4);
            vec3 d = vec3(0.0, 0.15, 0.20);
            return a + b * cos(6.28318 * (c * t + d));
        }

        float easeInOutCubic(float x) {
            return x < 0.5 ? 4.0 * x * x * x : 1.0 - pow(-2.0 * x + 2.0, 3.0) / 2.0;
        }

        void main() {
            vec2 uv = (gl_FragCoord.xy - 0.5 * u_resolution.xy) / u_resolution.y;
            float cycle = mod(u_time * u_speed / max(u_zoomDepth, 1.0), 2.0);
            float progress = cycle > 1.0 ? 2.0 - cycle : cycle;
            float easedProgress = easeInOutCubic(progress);
            
            float zoom = exp(easedProgress * u_zoomDepth);
            float scale = 2.2 / zoom;
            vec2 z = u_target + uv * scale;

            float angle = easedProgress * 3.14159 * 0.5;
            mat2 rot = mat2(cos(angle), -sin(angle), sin(angle), cos(angle));
            z = u_target + rot * (z - u_target);

            float iter = 0.0;
            float maxIter = clamp(200.0 + 60.0 * log(zoom), 200.0, 500.0);

            for(float i = 0.0; i < 500.0; i++) {
                if (i >= maxIter) break;
                z = vec2(z.x * z.x - z.y * z.y, 2.0 * z.x * z.y) + u_c;
                if(dot(z, z) > 16.0) break; 
                iter++;
            }

            vec3 col = vec3(0.0);
            if(iter < maxIter - 1.0) {
                float smoothIter = iter + 1.0 - log(log(dot(z, z))) / log(2.0);
                float colorMap = fract(smoothIter * 0.03 - u_time * 0.1);
                col = palette(colorMap);
            }

            vec2 normUv = gl_FragCoord.xy / u_resolution.xy;
            float vignette = clamp(1.0 - length(normUv - 0.5) * 1.2, 0.0, 1.0);
            vignette = smoothstep(0.0, 1.0, vignette);
            col *= mix(0.3, 1.0, vignette);

            gl_FragColor = vec4(col, 1.0);
        }
    `);if(!a)return;let s=a.program;oi=s,ri=a.buffer;let u=e.getUniformLocation(s,"u_time"),d=e.getUniformLocation(s,"u_speed");Lt=e.getUniformLocation(s,"u_resolution");let l=e.getUniformLocation(s,"u_c"),h=e.getUniformLocation(s,"u_zoomDepth"),m=e.getUniformLocation(s,"u_target");e.uniform2f(Lt,it*r,Ke*r);let p=null,f=null,g=it<480,k=parseInt(localStorage.getItem("ankifx_julia_preset_index")||"0",10);O.presetIndex=k;let y=we.presets[k]||we.presets[0];O.cRe=t.cRe!==void 0?t.cRe:y.cRe,O.cIm=t.cIm!==void 0?t.cIm:y.cIm,O.zoomDepth=t.zoomDepth!==void 0?t.zoomDepth:y.zoomDepth,O.targetX=t.targetX!==void 0?t.targetX:y.targetX,O.targetY=t.targetY!==void 0?t.targetY:y.targetY;let x={type:"select",id:"julia-preset",label:"PRESET",options:we.presets.map((P,b)=>({value:b,text:(g?"\u{1F4A0} ":"[ Preset: ")+P.name+(g?"":" ]")})),value:O.presetIndex,onChange:P=>{let b=parseInt(P);localStorage.setItem("ankifx_julia_preset_index",b),O.presetIndex=b;let C=we.presets[b];C&&(Object.assign(t,C),O.cRe=C.cRe,O.cIm=C.cIm,O.zoomDepth=C.zoomDepth,O.targetX=C.targetX,O.targetY=C.targetY,t.debug&&(AnkiFX.setControlValue("julia-cRe",C.cRe),AnkiFX.setControlValue("julia-cIm",C.cIm),AnkiFX.setControlValue("julia-zoomDepth",C.zoomDepth),AnkiFX.setControlValue("julia-targetX",C.targetX),AnkiFX.setControlValue("julia-targetY",C.targetY)),we.stop(),i.ctx2d&&i.ctx2d.clearRect(0,0,it,Ke),AnkiFX.startEffect(t,document.getElementById("ankifx-background"),t.marqueePosition,"julia"))}};if(t.debug?we.controls=[]:we.controls=[x],t.debug){we.controls.push({type:"slider",id:"julia-cRe",label:"C-RE",min:-1.5,max:1,step:.001,value:O.cRe,onChange:v=>{O.cRe=v}},{type:"slider",id:"julia-cIm",label:"C-IM",min:-1,max:1,step:.001,value:O.cIm,onChange:v=>{O.cIm=v}},{type:"slider",id:"julia-zoomDepth",label:"ZOOM",min:2,max:25,step:.1,value:O.zoomDepth,onChange:v=>{O.zoomDepth=v}},{type:"slider",id:"julia-targetX",label:"T-X",min:-2,max:2,step:1e-4,value:O.targetX,onChange:v=>{O.targetX=v}},{type:"slider",id:"julia-targetY",label:"T-Y",min:-2,max:2,step:1e-4,value:O.targetY,onChange:v=>{O.targetY=v}},{type:"slider",id:"julia-speed",label:"SPD",min:.005,max:.3,step:.005,value:O.speed,onChange:v=>{O.speed=v,localStorage.setItem("ankifx_julia_speed",v)}}),we.controls.push(x);let P=document.getElementById("afx-effect-controls-container");P&&(p=document.createElement("div"),p.id="afx-julia-debug-info",p.className="afx-control-row julia-debug-el",p.style.cssText="height: 20px !important; margin-bottom: 2px; pointer-events: none; justify-content: flex-end; opacity: 0.8; font-size: 11px !important; color: #ff00ff; border: none; background: transparent;",p.textContent="HOVER TO SEE TARGET COORDS",P.prepend(p)),f=(v,T,N)=>{let D=N*O.speed/Math.max(O.zoomDepth,1)%2,A=D>1?2-D:D,$=A<.5?4*Math.pow(A,3):1-Math.pow(-2*A+2,3)/2,q=2.2/Math.exp($*O.zoomDepth),G=$*Math.PI*.5,K=(v-it/2)/Ke,Z=(Ke/2-T)/Ke,L=Math.cos(G),U=Math.sin(G),V=(L*K+U*Z)*q,B=(-U*K+L*Z)*q;return{tx:O.targetX+V,ty:O.targetY+B}};let b=v=>{if(v.target.closest("#afx-bottom-dock")||v.target.closest(".afx-dialog"))return;let T=performance.now()*.001-w,{tx:N,ty:D}=f(v.clientX,v.clientY,T);O.targetX=N,O.targetY=D,AnkiFX.setControlValue("julia-targetX",N),AnkiFX.setControlValue("julia-targetY",D)};window.addEventListener("mousedown",b),ai=b;let C=v=>{ti.x=v.clientX,ti.y=v.clientY};window.addEventListener("mousemove",C),ni=C}let w=performance.now()*.001;function S(){let P=performance.now()*.001-w;if(e.uniform1f(u,P),e.uniform1f(d,O.speed),e.uniform2f(l,O.cRe,O.cIm),e.uniform1f(h,O.zoomDepth),e.uniform2f(m,O.targetX,O.targetY),e.drawArrays(e.TRIANGLE_STRIP,0,4),o.clearRect(0,0,it,Ke),p&&f){let b=performance.now()*.001-w,{tx:C,ty:v}=f(ti.x,ti.y,b);p.textContent=`TARGET X: ${C.toFixed(6)}, Y: ${v.toFixed(6)}`}ii=requestAnimationFrame(S)}S()}function Zr(){ii&&(cancelAnimationFrame(ii),ii=null),ai&&(window.removeEventListener("mousedown",ai),ai=null),ni&&(window.removeEventListener("mousemove",ni),ni=null),document.querySelectorAll(".julia-debug-el").forEach(i=>i.remove()),ot&&(oi&&ot.deleteProgram(oi),ri&&ot.deleteBuffer(ri),oi=null,ri=null),ot=null,Lt=null}var Ft=null,gt=0,Ze=0,_=null,J=null,Je=[],si=0,At=null,fe={x:-1e3,y:-1e3,dx:0,dy:0,down:!1},So=null,Eo={id:"lavalamp",name:"Lava Lamp",run:ia,stop:na,onResize:oa,marqueeFont:{color:"#ffccaa",shadowColor:"rgba(255, 100, 0, 0.8)",shadowBlur:10}},Xe=6,li=class{constructor(t,e,o,r){this.pos={x:t,y:e},this.vel={x:0,y:-(Math.random()*.6+.3)},this.radius=o;let n=e/r;this.temperature=.15+n*.3+Math.random()*.15,this.buoyancy=0,this.noiseOffset=Math.random()*1e3,this.smoothSpeedY=0}update(t,e,o){this.pos.y>o*.8?this.temperature+=.05*t:this.pos.y>o*.6?this.temperature+=.02*t:this.pos.y<o*.2?this.temperature-=.04*t:this.pos.y<o*.4&&(this.temperature-=.015*t),this.temperature=Math.max(0,Math.min(1,this.temperature)),this.buoyancy=this.temperature*4-2,this.vel.y-=this.buoyancy*10*t;let r=Math.sin(this.noiseOffset+si*2e-4)*.1;this.vel.x+=r*t*.3;let n=1-Math.min(Math.abs(this.buoyancy)/.8,1),c=(e*.5-this.pos.x)*.003*n;this.vel.x+=c*t,this.pos.x<this.radius&&(this.vel.x+=(this.radius-this.pos.x)*2*t),this.pos.x>e-this.radius&&(this.vel.x-=(this.pos.x-(e-this.radius))*2*t);let a=-this.radius*.5;this.pos.y<a&&(this.vel.y+=(a-this.pos.y)*8*t);let s=o+this.radius*.5;this.pos.y>s&&(this.vel.y-=(this.pos.y-s)*8*t);let u=Math.pow(.97,t*60);this.vel.x*=u;let l=Math.abs(this.buoyancy)>.8,h=Math.pow(l?.994:.975,t*60);this.vel.y*=h;let m=Math.max(0,(this.pos.y-o*.82)/(o*.18)),p=Math.max(0,(o*.18-this.pos.y)/(o*.18)),f=Math.pow(.88,t*60*(m+p));if(this.vel.x*=f,fe.down){let g=this.pos.x-fe.x,k=this.pos.y-fe.y,y=Math.sqrt(g*g+k*k);if(y<200){let x=(200-y)/200;this.vel.x+=fe.dx*x*1.5,this.vel.y+=fe.dy*x*8}}this.smoothSpeedY+=(Math.abs(this.vel.y)-this.smoothSpeedY)*(1-Math.pow(.05,t)),this.pos.x+=this.vel.x*t,this.pos.y+=this.vel.y*t}},Qr=`
    attribute vec2 aPosition;
    varying vec2 vUv;
    void main() {
        vUv = aPosition * 0.5 + 0.5;
        // Match canvas 2D coordinates (Y=0 is top)
        vUv.y = 1.0 - vUv.y;
        gl_Position = vec4(aPosition, 0.0, 1.0);
    }
`,ea=`
    precision highp float;
    varying vec2 vUv;
    
    uniform vec2 uResolution;
    uniform float uTime;
    
    uniform vec4 uBlobs[${Xe}]; // x, y, radius, stretch
    uniform float uBlobTemp[${Xe}]; // temperature
    
    // Polynomial smooth minimum
    float smin(float a, float b, float k) {
        float h = clamp(0.5 + 0.5 * (b - a) / k, 0.0, 1.0);
        return mix(b, a, h) - k * h * (1.0 - h);
    }
    
    float map(vec2 p) {
        float d = 10000.0;
        for (int i = 0; i < ${Xe}; i++) {
            float stretchY = max(uBlobs[i].w, 0.85);
            vec2 lp = p - uBlobs[i].xy;
            // Squash coordinate space: compress Y by stretchY, expand X to preserve area
            // This deforms the metric, not the SDF, so gradients stay well-behaved
            lp.x *= sqrt(stretchY);
            lp.y /= sqrt(stretchY);
            float blob = length(lp) - uBlobs[i].z;
            d = smin(d, blob, 60.0);
        }
        
        // Base merging constraint
        float floorDist = uResolution.y - p.y;
        d = smin(d, floorDist - 35.0, 120.0);
        
        return d;
    }
    
    vec3 calcNormal(vec2 p, float d) {
        vec2 e = vec2(1.0, 0.0);
        vec3 n = vec3(
            map(p + e.xy) - d,
            map(p + e.yx) - d,
            4.0 - min(0.0, d) * 0.5 // Flatten the center to remove sharp 'nipples'
        );
        return normalize(n);
    }
    
    void main() {
        vec2 p = vUv * uResolution;
        float d = map(p);
        
        // Background gradient
        vec3 bg = mix(vec3(0.08, 0.01, 0.0), vec3(0.2, 0.04, 0.0), vUv.y);
        
        // Lava Palette
        vec3 lavaBase = vec3(0.8, 0.15, 0.0);
        vec3 lavaHot = vec3(1.0, 0.6, 0.1);
        
        // Continuous soft subsurface glow around blobs
        float glow = exp(-max(0.0, d) * 0.02);
        vec3 glowBg = bg + vec3(0.95, 0.35, 0.0) * glow * 0.45;
        
        // Soft edge anti-aliasing
        float alpha = smoothstep(3.0, -3.0, d);
        
        if (d > 3.0) {
            gl_FragColor = vec4(glowBg, 1.0);
            return;
        }
        
        vec3 n = calcNormal(p, d);
        
        // Lighting setup
        vec3 lightDir = normalize(vec3(0.0, 1.0, 0.5)); // Warm base light
        vec3 viewDir = normalize(vec3(0.0, 0.0, 1.0));
        
        float diff = max(dot(n, lightDir), 0.0);
        
        vec3 halfDir = normalize(lightDir + viewDir);
        float spec = pow(max(dot(n, halfDir), 0.0), 32.0);
        
        // Thickness-based translucency inside the lava (d < 0)
        float thickness = abs(d);
        float translucency = exp(-thickness * 0.008);
        
        // Glowing orange-white inside thin filaments/necks, deep red in bodies
        vec3 dynamicLavaBase = mix(vec3(0.6, 0.05, 0.0), vec3(1.0, 0.55, 0.05), translucency);
        
        // Color mapping
        vec3 col = mix(dynamicLavaBase, lavaHot, diff);
        col += vec3(1.0, 0.9, 0.6) * spec * 0.7; // Highlights
        
        // Ambient rim light
        float rim = 1.0 - max(dot(n, viewDir), 0.0);
        col += vec3(0.9, 0.2, 0.0) * pow(rim, 3.0) * 0.8;
        
        // Blend lava directly with the glowing background (no black borders!)
        vec3 finalCol = mix(glowBg, col, alpha);
        
        gl_FragColor = vec4(finalCol, 1.0);
    }
`;function ko(i,t){let e=_.createShader(i);return _.shaderSource(e,t),_.compileShader(e),_.getShaderParameter(e,_.COMPILE_STATUS)?e:(console.error("[LavaLamp/WebGL] Shader compile error:",_.getShaderInfoLog(e)),_.deleteShader(e),null)}function ta(){let i=ko(_.VERTEX_SHADER,Qr),t=ko(_.FRAGMENT_SHADER,ea);if(J=_.createProgram(),_.attachShader(J,i),_.attachShader(J,t),_.linkProgram(J),!_.getProgramParameter(J,_.LINK_STATUS))return console.error("[LavaLamp/WebGL] Program link error:",_.getProgramInfoLog(J)),_.deleteShader(i),_.deleteShader(t),!1;_.detachShader(J,i),_.detachShader(J,t),_.deleteShader(i),_.deleteShader(t),_.useProgram(J),At=_.createBuffer(),_.bindBuffer(_.ARRAY_BUFFER,At);let e=new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]);_.bufferData(_.ARRAY_BUFFER,e,_.STATIC_DRAW);let o=_.getAttribLocation(J,"aPosition");return _.enableVertexAttribArray(o),_.vertexAttribPointer(o,2,_.FLOAT,!1,0,0),J.uResolution=_.getUniformLocation(J,"uResolution"),J.uTime=_.getUniformLocation(J,"uTime"),J.uBlobs=_.getUniformLocation(J,"uBlobs"),J.uBlobTemp=_.getUniformLocation(J,"uBlobTemp"),!0}function ia(i,t){if(_=i.gl,So=i.canvasGL,gt=i.width,Ze=i.height,!_){console.error("[LavaLamp] WebGL context required \u2014 cannot run effect.");return}if(!ta())return;Je=[];let e=0;for(;Je.length<Xe&&e<200;){e++;let o=70+Math.random()*60,r=o+Math.random()*(gt-o*2),n=o+Math.random()*(Ze-o*2),c=!1;for(let a of Je){let s=a.pos.x-r,u=a.pos.y-n;if(Math.sqrt(s*s+u*u)<a.radius+o+10){c=!0;break}}c||Je.push(new li(r,n,o,Ze))}for(;Je.length<Xe;){let o=70+Math.random()*60,r=o+Math.random()*(gt-o*2),n=o+Math.random()*(Ze-o*2);Je.push(new li(r,n,o,Ze))}si=performance.now(),ra(),Ft=requestAnimationFrame(Co)}function oa(i,t,e){gt=i,Ze=t,_&&_.viewport(0,0,i*e,t*e)}function Co(i){let t=Math.min((i-si)/1e3,.05);si=i;let e=new Float32Array(Xe*4),o=new Float32Array(Xe);for(let r=0;r<Xe;r++)Je[r].update(t,gt,Ze);for(let r=0;r<Xe;r++){let n=Je[r],c=Math.max(.85,1+Math.min(n.smoothSpeedY*.028,.7)*(.4+n.temperature*.6));e[r*4+0]=n.pos.x,e[r*4+1]=n.pos.y,e[r*4+2]=n.radius,e[r*4+3]=c,o[r]=n.temperature}_.useProgram(J),_.uniform2f(J.uResolution,gt,Ze),_.uniform1f(J.uTime,i*.001),_.uniform4fv(J.uBlobs,e),_.uniform1fv(J.uBlobTemp,o),_.drawArrays(_.TRIANGLES,0,6),fe.dx=0,fe.dy=0,Ft=requestAnimationFrame(Co)}function It(i){let t=So.getBoundingClientRect(),e=i.touches?i.touches[0]:i,o=e.clientX-t.left,r=e.clientY-t.top;if(fe.down&&i.type!=="mousedown"&&i.type!=="touchstart"){let n=o-fe.x,c=r-fe.y;Math.abs(n)<150&&Math.abs(c)<150&&(fe.dx=n,fe.dy=c)}fe.x=o,fe.y=r}function ci(i){fe.dx=0,fe.dy=0,fe.down=!0,It(i)}function fi(){fe.down=!1}function ra(){window.addEventListener("mousedown",ci),window.addEventListener("mousemove",It),window.addEventListener("mouseup",fi),window.addEventListener("touchstart",ci,{passive:!0}),window.addEventListener("touchmove",It,{passive:!0}),window.addEventListener("touchend",fi)}function aa(){window.removeEventListener("mousedown",ci),window.removeEventListener("mousemove",It),window.removeEventListener("mouseup",fi),window.removeEventListener("touchstart",ci),window.removeEventListener("touchmove",It),window.removeEventListener("touchend",fi)}function na(){Ft&&(cancelAnimationFrame(Ft),Ft=null),aa(),_&&(_.clearColor(0,0,0,0),_.clear(_.COLOR_BUFFER_BIT),J&&_.deleteProgram(J),At&&_.deleteBuffer(At),J=null,At=null)}var di=null,Dt,rt,Rt,at,hi=null,pi=null,bi={id:"mandelbrot",name:"Mandelbrot",run:sa,stop:la,onResize:(i,t,e)=>{Dt=i,rt=t,at&&Rt&&at.uniform2f(Rt,i*e,t*e)},preferredTrack:{title:"Acoustica Power Bundle 4",trackTitle:"AiR"},marqueeFont:{color:"#FFF",outline:"#000"}},mi=null,gi=null,ui={x:0,y:0},se={targetX:-.743643887037151,targetY:.13182590420533,zoomDepth:11,speed:parseFloat(localStorage.getItem("ankifx_mandelbrot_speed"))||.15};function sa(i,t={}){at=i.gl;let e=i.gl,o=i.ctx2d;Dt=i.width,rt=i.height;let r=i.dpr,a=ei(e,`
        attribute vec2 position;
        void main() { gl_Position = vec4(position, 0.0, 1.0); }
    `,`
        precision highp float;
        uniform vec2 u_resolution;
        uniform float u_time;
        uniform float u_speed;
        uniform float u_zoomDepth;
        uniform vec2 u_target;

        vec3 palette(float t) {
            vec3 a = vec3(0.5, 0.5, 0.5);
            vec3 b = vec3(0.5, 0.5, 0.5);
            vec3 c = vec3(1.0, 0.7, 0.4);
            vec3 d = vec3(0.0, 0.15, 0.20);
            return a + b * cos(6.28318 * (c * t + d));
        }

        float easeInOutCubic(float x) {
            return x < 0.5 ? 4.0 * x * x * x : 1.0 - pow(-2.0 * x + 2.0, 3.0) / 2.0;
        }

        void main() {
            vec2 uv = (gl_FragCoord.xy - 0.5 * u_resolution.xy) / u_resolution.y;
            float cycle = mod(u_time * u_speed / max(u_zoomDepth, 1.0), 2.0);
            float progress = cycle > 1.0 ? 2.0 - cycle : cycle;
            float easedProgress = easeInOutCubic(progress);
            
            float zoom = exp(easedProgress * u_zoomDepth);
            vec2 c = u_target + uv * (2.5 / zoom);
            vec2 z = vec2(0.0);
            float iter = 0.0;
            
            float maxIter = clamp(150.0 + 65.0 * log(zoom), 150.0, 500.0);
            const float ABSOLUTE_MAX = 500.0;

            for(float i = 0.0; i < ABSOLUTE_MAX; i++) {
                if (i >= maxIter) break;
                z = vec2(z.x * z.x - z.y * z.y, 2.0 * z.x * z.y) + c;
                if(dot(z, z) > 16.0) break; 
                iter++;
            }

            vec3 col = vec3(0.0);
            if(iter < maxIter - 1.0) {
                float smoothIter = iter - log2(max(1.0, log2(dot(z, z)))) + 3.0;
                float colorMap = fract(smoothIter * 0.03 - u_time * 0.2);
                col = palette(colorMap);
            }

            vec2 normUv = gl_FragCoord.xy / u_resolution.xy;
            float vignette = clamp(1.0 - length(normUv - 0.5) * 1.2, 0.0, 1.0);
            vignette = smoothstep(0.0, 1.0, vignette);
            col *= mix(0.2, 1.0, vignette);

            gl_FragColor = vec4(col, 1.0);
        }
    `);if(!a)return;let s=a.program;hi=s,pi=a.buffer;let u=e.getUniformLocation(s,"u_time"),d=e.getUniformLocation(s,"u_speed"),l=e.getUniformLocation(s,"u_zoomDepth"),h=e.getUniformLocation(s,"u_target");Rt=e.getUniformLocation(s,"u_resolution"),e.uniform2f(Rt,Dt*r,rt*r);let m=null,p=null;if(t.debug){bi.controls=[{type:"slider",id:"mandelbrot-zoomDepth",label:"ZOOM",min:2,max:25,step:.1,value:se.zoomDepth,onChange:w=>{se.zoomDepth=w}},{type:"slider",id:"mandelbrot-targetX",label:"T-X",min:-2.5,max:1,step:1e-4,value:se.targetX,onChange:w=>{se.targetX=w}},{type:"slider",id:"mandelbrot-targetY",label:"T-Y",min:-1.5,max:1.5,step:1e-4,value:se.targetY,onChange:w=>{se.targetY=w}},{type:"slider",id:"mandelbrot-speed",label:"SPD",min:.005,max:.3,step:.005,value:se.speed,onChange:w=>{se.speed=w,localStorage.setItem("ankifx_mandelbrot_speed",w)}}];let k=document.getElementById("afx-effect-controls-container");k&&(m=document.createElement("div"),m.id="afx-mandelbrot-debug-info",m.className="afx-control-row mandelbrot-debug-el",m.style.cssText="height: 20px !important; margin-bottom: 2px; pointer-events: none; justify-content: flex-end; opacity: 0.8; font-size: 11px !important; color: #ff00ff; border: none; background: transparent;",m.textContent="HOVER TO SEE TARGET COORDS",k.prepend(m)),p=(w,S,P)=>{let b=P*se.speed/Math.max(se.zoomDepth,1)%2,C=b>1?2-b:b,v=C<.5?4*Math.pow(C,3):1-Math.pow(-2*C+2,3)/2,T=Math.exp(v*se.zoomDepth),N=(w-Dt/2)/rt,D=(rt/2-S)/rt;return{tx:se.targetX+N*(2.5/T),ty:se.targetY+D*(2.5/T)}};let y=w=>{if(w.target.closest("#afx-bottom-dock")||w.target.closest(".afx-dialog"))return;let S=performance.now()*.001-f,{tx:P,ty:b}=p(w.clientX,w.clientY,S);se.targetX=P,se.targetY=b,AnkiFX.setControlValue("mandelbrot-targetX",P),AnkiFX.setControlValue("mandelbrot-targetY",b)};window.addEventListener("mousedown",y),mi=y;let x=w=>{ui.x=w.clientX,ui.y=w.clientY};window.addEventListener("mousemove",x),gi=x}else bi.controls=[];let f=performance.now()*.001;function g(){let k=performance.now()*.001-f;if(e.uniform1f(u,k),e.uniform1f(d,se.speed),e.uniform1f(l,se.zoomDepth),e.uniform2f(h,se.targetX,se.targetY),e.drawArrays(e.TRIANGLE_STRIP,0,4),o.clearRect(0,0,Dt,rt),m&&p){let y=performance.now()*.001-f,{tx:x,ty:w}=p(ui.x,ui.y,y);m.textContent=`TARGET X: ${x.toFixed(6)}, Y: ${w.toFixed(6)}`}di=requestAnimationFrame(g)}g()}function la(){di&&(cancelAnimationFrame(di),di=null),mi&&(window.removeEventListener("mousedown",mi),mi=null),gi&&(window.removeEventListener("mousemove",gi),gi=null),document.querySelectorAll(".mandelbrot-debug-el").forEach(i=>i.remove()),at&&(hi&&at.deleteProgram(hi),pi&&at.deleteBuffer(pi),hi=null,pi=null),at=null,Rt=null}var zt=null,yi,vi,xi=16,Qe=[];function Po(){let i=Math.floor(yi/xi);Qe=[];for(let t=0;t<i;t++)Qe[t]=Math.random()*-100}var Mo={id:"matrix",name:"Matrix",run:ca,stop:fa,onResize:(i,t)=>{yi=i,vi=t,Po()},preferredTrack:{trackTitle:"nightfall"},marqueeFont:{color:"#0F0",shadowColor:"#0F0",shadowBlur:10}};function ca(i,t){let e=i.ctx2d;yi=i.width,vi=i.height,Po();let o="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*]*";function r(){e.fillStyle="rgba(0, 0, 0, 0.1)",e.fillRect(0,0,yi,vi),e.fillStyle="#0F0",e.font=xi+"px monospace";for(let n=0;n<Qe.length;n++)if(Qe[n]>0||Math.random()>.95){let c=o.charAt(Math.floor(Math.random()*o.length)),a=Qe[n]*xi;e.fillText(c,n*xi,a),a>vi&&Math.random()>.975&&(Qe[n]=0),Qe[n]++}else Qe[n]+=.5;zt=requestAnimationFrame(r)}zt=requestAnimationFrame(r)}function fa(){zt&&(cancelAnimationFrame(zt),zt=null)}var To={id:"none",name:"None",run:ua,stop:da,marqueeFont:{color:"#ffffff",shadowColor:"rgba(0,0,0,0.8)",shadowBlur:5}};function ua(i,t){i.ctx2d.clearRect(0,0,i.width,i.height)}function da(){}var Ot=null,ue,Oe,nt={id:"starfield",name:"Starfield",run:ha,stop:pa,onResize:(i,t)=>{ue=i,Oe=t},preferredTrack:{trackTitle:"star wars title"},marqueeFont:{color:"#FFE81F",shadowColor:"#FFE81F",shadowBlur:20,outline:"#000"}};function ha(i,t){let e=i.ctx2d;ue=i.width,Oe=i.height;let o=localStorage.getItem("ankifx_starfield_planets")!=="false";nt.controls=[{type:"button",id:"starfield-planet-toggle",label:o?"\u{1FA90} DISABLE PLANET":"\u{1FA90} ENABLE PLANET",onClick:()=>{o=!o,localStorage.setItem("ankifx_starfield_planets",o),nt.controls&&nt.controls[0]&&(nt.controls[0].label=o?"\u{1FA90} DISABLE PLANET":"\u{1FA90} ENABLE PLANET",AnkiFX.renderEffectControls(nt))}}];let r=[],n=8e3,c=new Uint8Array(512),a=new Uint8Array(256).map(()=>Math.random()*256);for(let y=0;y<512;y++)c[y]=a[y&255];let s=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]];function u(y,x,w,S){return y[0]*x+y[1]*w+y[2]*S}function d(y,x,w){let S,P,b,C,v=.3333333333333333,T=1/6,N=(y+x+w)*v,D=Math.floor(y+N),A=Math.floor(x+N),$=Math.floor(w+N),I=(D+A+$)*T,q=y-D+I,G=x-A+I,K=w-$+I,Z,L,U,V,B,ie;q>=G?G>=K?(Z=1,L=0,U=0,V=1,B=1,ie=0):q>=K?(Z=1,L=0,U=0,V=1,B=0,ie=1):(Z=0,L=0,U=1,V=1,B=0,ie=1):G<K?(Z=0,L=0,U=1,V=0,B=1,ie=1):q<K?(Z=0,L=1,U=0,V=0,B=1,ie=1):(Z=0,L=1,U=0,V=1,B=1,ie=0);let le=q-Z+T,xe=G-L+T,Ge=K-U+T,Ve=q-V+2*T,qe=G-B+2*T,Fe=K-ie+2*T,M=q-1+3*T,F=G-1+3*T,H=K-1+3*T,R=D&255,ee=A&255,pe=$&255,ye=.6-q*q-G*G-K*K;ye<0?S=0:(ye*=ye,S=ye*ye*u(s[c[R+c[ee+c[pe]]]%12],q,G,K));let Se=.6-le*le-xe*xe-Ge*Ge;Se<0?P=0:(Se*=Se,P=Se*Se*u(s[c[R+Z+c[ee+L+c[pe+U]]]%12],le,xe,Ge));let Ee=.6-Ve*Ve-qe*qe-Fe*Fe;Ee<0?b=0:(Ee*=Ee,b=Ee*Ee*u(s[c[R+V+c[ee+B+c[pe+ie]]]%12],Ve,qe,Fe));let Ce=.6-M*M-F*F-H*H;return Ce<0?C=0:(Ce*=Ce,C=Ce*Ce*u(s[c[R+1+c[ee+1+c[pe+1]]]%12],M,F,H)),32*(S+P+b+C)}function l(y,x,w,S=3){let P=0,b=.5;for(let C=0;C<S;C++)P+=d(y,x,w)*b,y*=2,x*=2,w*=2,b*=.5;return P}let h={};class m{constructor(){this.active=!1,this.nextSpawn=Date.now()+2e3}reset(){let x=Math.random()*Math.PI*2,w=.2+Math.random()*.4;this.x=Math.cos(x)*ue*w,this.y=Math.sin(x)*Oe*w,this.z=ue,this.sizeBase=80+Math.random()*120,this.speed=.8,this.active=!0,this.type=1+Math.floor(Math.random()*2);let S=[{name:"ice",baseH:190+Math.random()*40,sat:60,l:70},{name:"inferno",baseH:Math.random()*40,sat:80,l:60},{name:"toxic",baseH:80+Math.random()*40,sat:70,l:60},{name:"ethereal",baseH:260+Math.random()*40,sat:60,l:75},{name:"classic",baseH:30+Math.random()*20,sat:50,l:80}],P=S[Math.floor(Math.random()*S.length)];h[P.name]?this.textureCanvas=h[P.name]:(this.generateGasGiantTexture(P),h[P.name]=this.textureCanvas),this.type===2&&(this.rings=Array.from({length:4},(b,C)=>({r1:1.6+C*.2,opacity:.2+Math.random()*.4})))}hslToRgb(x,w,S){x/=360,w/=100,S/=100;let P,b,C;if(w===0)P=b=C=S;else{let v=S<.5?S*(1+w):S+w-S*w,T=2*S-v,N=D=>(D<0&&(D+=1),D>1&&(D-=1),D<1/6?T+(v-T)*6*D:D<1/2?v:D<2/3?T+(v-T)*(2/3-D)*6:T);P=N(x+1/3),b=N(x),C=N(x-1/3)}return{r:P*255,g:b*255,b:C*255}}generateGasGiantTexture(x){let w=document.createElement("canvas");w.width=w.height=128;let S=w.getContext("2d"),P=S.createImageData(128,128),b=x.baseH,C=this.hslToRgb(b,x.sat,x.l),v=this.hslToRgb((b+20)%360,x.sat+10,x.l-10),T=this.hslToRgb((b-40+360)%360,x.sat+20,x.l-15),N=this.hslToRgb((b+60)%360,x.sat-20,x.l+10),D=($,I,q)=>({r:$.r+(I.r-$.r)*q,g:$.g+(I.g-$.g)*q,b:$.b+(I.b-$.b)*q}),A=Math.random()*1e3;for(let $=0;$<128;$++)for(let I=0;I<128;I++){let q=$/128*10,G=I/128*10,K=Math.abs(l(0,q*.4,A,3)),Z=q+l(G*.5,q*.5,A)*K*4,L=G+l(q*.5,G*.5,A+50)*K*2,U=(l(0,Z*.8,A+100,4)+1)/2,V=(l(L*.1,Z*1.5,A+200,2)+1)/2,B=D(v,C,U);U>.7&&(B=D(B,N,(U-.7)*2)),V>.6&&(B=D(B,T,(V-.6)*1.5));let ie=1+l(L,Z,A+300,2)*.2,le=($*128+I)*4;P.data[le]=Math.min(255,B.r*ie),P.data[le+1]=Math.min(255,B.g*ie),P.data[le+2]=Math.min(255,B.b*ie),P.data[le+3]=255}S.putImageData(P,0,0),this.textureCanvas=w}update(){if(!this.active){Date.now()>this.nextSpawn&&this.reset();return}this.z-=this.speed,this.z<=0&&(this.active=!1,this.nextSpawn=Date.now())}draw(x){if(!this.active)return;let w=ue/2/this.z,S=this.x*w+ue/2,P=this.y*w+Oe/2,b=(1-this.z/ue)*this.sizeBase;if(S<-b*3||S>ue+b*3||P<-b*3||P>Oe+b*3)return;x.save(),x.translate(S,P),this.type===2&&(this.drawRings(x,b,!0),x.globalAlpha=1);let C=x.createRadialGradient(0,0,b*.9,0,0,b*1.5);C.addColorStop(0,"rgba(255, 255, 255, 0.15)"),C.addColorStop(1,"rgba(0,0,0,0)"),x.fillStyle=C,x.beginPath(),x.arc(0,0,b*1.5,0,Math.PI*2),x.fill(),x.save(),x.beginPath(),x.arc(0,0,b,0,Math.PI*2),x.clip(),x.globalAlpha=1,x.drawImage(this.textureCanvas,-b,-b,b*2,b*2);let v=x.createRadialGradient(-b*.5,-b*.5,b*.1,0,0,b);v.addColorStop(0,"rgba(255, 255, 255, 0.25)"),v.addColorStop(.5,"rgba(0, 0, 0, 0)"),v.addColorStop(1,"rgba(0, 0, 0, 0.4)"),x.fillStyle=v,x.fillRect(-b,-b,b*2,b*2),x.restore();let T=x.createRadialGradient(0,0,b*.7,0,0,b);T.addColorStop(1,"rgba(255,255,255,0.4)"),T.addColorStop(.8,"rgba(255,255,255,0)"),x.fillStyle=T,x.beginPath(),x.arc(0,0,b,0,Math.PI*2),x.fill(),this.type===2&&(this.drawRings(x,b,!1),x.globalAlpha=1),x.restore()}drawRings(x,w,S){x.save();let P=Math.PI/8;for(let b of this.rings)x.globalAlpha=b.opacity,x.strokeStyle="#E6E6FA",x.lineWidth=w*.15,x.beginPath(),x.ellipse(0,0,b.r1*w,b.r1*.3*w,P,0,Math.PI*2),x.stroke();x.restore()}}let p=new m,f=["#FFFFFF","#FFE4B5","#E0FFFF","#FFF0F5","#F0F8FF"];for(let y=0;y<n;y++)r.push({x:(Math.random()-.5)*ue*4,y:(Math.random()-.5)*Oe*4,z:Math.random()*ue,color:f[Math.floor(Math.random()*f.length)],sizeBase:2+Math.random()*2.5});let g=0;function k(){e.fillStyle="rgba(5, 5, 12, 1)",e.fillRect(0,0,ue,Oe);let y=ue/2,x=Oe/2;g+=.01,o?(p.update(),p.draw(e)):p.active=!1;for(let w=0;w<n;w++){let S=r[w],P=S.z;if(S.z-=4,S.z<=0){S.x=(Math.random()-.5)*ue*4,S.y=(Math.random()-.5)*Oe*4,S.z=ue;continue}let b=ue/2/S.z,C=S.x*b+y,v=S.y*b+x;if(C>=0&&C<=ue&&v>=0&&v<=Oe){let T=1-S.z/ue,N=T*S.sizeBase;if(T<.3){e.globalAlpha=T*2,e.fillStyle=S.color,e.fillRect(C,v,Math.max(1,N),Math.max(1,N));continue}e.globalAlpha=T,e.fillStyle=S.color,e.strokeStyle=S.color;let D=ue/2/P,A=S.x*D+y,$=S.y*D+x;e.lineWidth=N,e.beginPath(),e.moveTo(A,$),e.lineTo(C,v),e.stroke(),e.beginPath(),e.arc(C,v,N/2,0,Math.PI*2),e.fill(),T>.8&&(e.globalAlpha=(T-.8)*3,e.beginPath(),e.arc(C,v,N*2.5,0,Math.PI*2),e.fill())}}e.globalAlpha=1,Ot=requestAnimationFrame(k)}Ot=requestAnimationFrame(k)}function pa(){Ot&&(cancelAnimationFrame(Ot),Ot=null)}var Ut=null,st,Bt,wi=0,ki=0,Le=null;function Lo(){if(st===void 0||Bt===void 0)return;let i=Math.max(100,ki),t=Math.max(14,Math.floor(st/25)),e=Math.floor(st/t),o=Math.floor(i/t);Le=new Ki(e,o,t)}var Fo={id:"tetris",name:"Tetris",run:ma,stop:ga,onResize:(i,t)=>{st=i,Bt=t;let e=document.documentElement,o=e?getComputedStyle(e):null;wi=o&&parseInt(o.getPropertyValue("--io-header"))||0,ki=t-wi,Lo()},preferredTrack:{title:"WinTask 3",trackTitle:"Whoopees Tetris"},marqueeFont:{color:"#f0f0f0",shadowColor:"#a000f0",shadowBlur:12,outline:"#000"}},Ao={I:{shapes:[[[1,1,1,1]],[[1],[1],[1],[1]]],color:"#00f0f0"},O:{shapes:[[[1,1],[1,1]]],color:"#f0f000"},T:{shapes:[[[0,1,0],[1,1,1]],[[1,0],[1,1],[1,0]],[[1,1,1],[0,1,0]],[[0,1],[1,1],[0,1]]],color:"#a000f0"},S:{shapes:[[[0,1,1],[1,1,0]],[[1,0],[1,1],[0,1]]],color:"#00f000"},Z:{shapes:[[[1,1,0],[0,1,1]],[[0,1],[1,1],[1,0]]],color:"#f00000"},J:{shapes:[[[1,0,0],[1,1,1]],[[1,1],[1,0],[1,0]],[[1,1,1],[0,0,1]],[[0,1],[0,1],[1,1]]],color:"#0000f0"},L:{shapes:[[[0,0,1],[1,1,1]],[[1,0],[1,0],[1,1]],[[1,1,1],[1,0,0]],[[1,1],[0,1],[0,1]]],color:"#f0a000"}},_o=Object.keys(Ao),Yi=class{constructor(t,e,o){this.x=t,this.y=e,this.color=o,this.vx=(Math.random()-.5)*12,this.vy=(Math.random()-.7)*14,this.gravity=.45,this.life=1,this.decay=.012+Math.random()*.018,this.size=1+Math.random()*2.5}update(){this.vx*=.985,this.vy+=this.gravity,this.x+=this.vx,this.y+=this.vy,this.life-=this.decay}draw(t){t.globalAlpha=Math.max(0,this.life),t.fillStyle=this.color,t.fillRect(this.x,this.y,this.size,this.size)}},Ki=class{constructor(t,e,o){this.cols=t,this.rows=e,this.cellSize=o,this.board=Array.from({length:e},()=>Array(t).fill(null)),this.particles=[],this.exploding=!1,this.explodeTimer=0,this.EXPLODE_DURATION=120,this.level=1,this.linesTotal=0,this.dropCounter=0,this.moveCounter=0,this._spawnPiece()}_randomPiece(){let t=_o[Math.floor(Math.random()*_o.length)],e=Ao[t],o=Math.floor(Math.random()*e.shapes.length);return{shape:e.shapes[o],color:e.color,key:t,rotIdx:o,def:e}}_spawnPiece(){let t=this._randomPiece();this.current={...t,x:Math.floor((this.cols-t.shape[0].length)/2),y:0},this._selectTarget()}_fits(t,e,o){for(let r=0;r<t.length;r++)for(let n=0;n<t[r].length;n++){if(!t[r][n])continue;let c=e+n,a=o+r;if(c<0||c>=this.cols||a>=this.rows||a>=0&&this.board[a][c]!==null)return!1}return!0}_lock(){let{shape:t,x:e,y:o,color:r}=this.current;for(let n=0;n<t.length;n++)for(let c=0;c<t[n].length;c++){if(!t[n][c])continue;let a=o+n,s=e+c;a>=0&&a<this.rows&&s>=0&&s<this.cols&&(this.board[a][s]=r)}this._clearRows()}_clearRows(){let t=0;for(let e=this.rows-1;e>=0;e--)this.board[e].every(o=>o!==null)&&(this.board.splice(e,1),this.board.unshift(Array(this.cols).fill(null)),t++,e++);return t>0&&(this.linesTotal+=t,this.level=Math.floor(this.linesTotal/10)+1),t}_choosePlacement(){let{def:t}=this.current,e=-1/0,o=this.current.x,r=this.current.rotIdx;for(let n=0;n<t.shapes.length;n++){let c=t.shapes[n],a=c[0].length;for(let s=0;s<=this.cols-a;s++){let u=0;for(;this._fits(c,s,u+1);)u++;if(!this._fits(c,s,u))continue;let d=this._getHeuristicScore(c,s,u);d>e&&(e=d,o=s,r=n)}}return{x:o,rotIdx:r}}_getHeuristicScore(t,e,o){let r=this.board.map(d=>[...d]);for(let d=0;d<t.length;d++)for(let l=0;l<t[d].length;l++){if(!t[d][l])continue;let h=o+d,m=e+l;h>=0&&h<this.rows&&(r[h][m]="X")}let n=0;for(let d=0;d<this.rows;d++)r[d].every(l=>l!==null)&&n++;let c=Array(this.cols).fill(0),a=0;for(let d=0;d<this.cols;d++)for(let l=0;l<this.rows;l++)if(r[l][d]!==null){c[d]=this.rows-l,a+=c[d];break}let s=0;for(let d=0;d<this.cols;d++){let l=!1;for(let h=0;h<this.rows;h++)r[h][d]!==null?l=!0:l&&s++}let u=0;for(let d=0;d<this.cols-1;d++)u+=Math.abs(c[d]-c[d+1]);return a*-.51+n*.76+s*-.35+u*-.18+Math.random()*.1}_isBoardFull(){for(let t=0;t<3;t++)if(this.board[t].some(e=>e!==null))return!0;return!1}_explodeBoard(t,e){for(let o=0;o<this.rows;o++)for(let r=0;r<this.cols;r++)if(this.board[o][r]){let n=t+r*this.cellSize+this.cellSize/2,c=e+o*this.cellSize+this.cellSize/2,a=4+Math.floor(Math.random()*4);for(let s=0;s<a;s++)this.particles.push(new Yi(n,c,this.board[o][r]))}}_reset(){this.board=Array.from({length:this.rows},()=>Array(this.cols).fill(null)),this.exploding=!1,this.explodeTimer=0,this.particles=[],this._spawnPiece()}_selectTarget(){let{x:t,rotIdx:e}=this._choosePlacement(),o=this.current.def;this.current.rotIdx=e,this.current.shape=o.shapes[e],this.current.targetX=t,this.current.y=0,this.current.x=Math.floor((this.cols-this.current.shape[0].length)/2)}step(t,e){if(this.exploding){this.explodeTimer++,this.particles=this.particles.filter(n=>n.life>0),this.particles.forEach(n=>n.update()),this.explodeTimer>=this.EXPLODE_DURATION&&this._reset();return}this.moveCounter++,this.moveCounter>=2&&(this.moveCounter=0,this.current.x<this.current.targetX?this._fits(this.current.shape,this.current.x+1,this.current.y)&&this.current.x++:this.current.x>this.current.targetX&&this._fits(this.current.shape,this.current.x-1,this.current.y)&&this.current.x--);let o=this.current.x===this.current.targetX,r=Math.max(4,40-(this.level-1)*3);o&&(r=1),this.dropCounter++,this.dropCounter>=r&&(this.dropCounter=0,this._fits(this.current.shape,this.current.x,this.current.y+1)?this.current.y++:(this._lock(),this._isBoardFull()?(this._explodeBoard(t,e),this.exploding=!0,this.explodeTimer=0):this._spawnPiece()))}draw(t,e,o){let r=this.cellSize,n={};for(let c=0;c<this.rows;c++)for(let a=0;a<this.cols;a++){let s=this.board[c][a];s&&(n[s]||(n[s]=[]),n[s].push({px:e+a*r,py:o+c*r,alpha:this.exploding?Math.max(0,1-this.explodeTimer/40):1}))}if(!this.exploding&&this.current){let{shape:c,x:a,y:s,color:u}=this.current;if(u){n[u]||(n[u]=[]);for(let d=0;d<c.length;d++)for(let l=0;l<c[d].length;l++)c[d][l]&&n[u].push({px:e+(a+l)*r,py:o+(s+d)*r,alpha:1})}}for(let c in n){let a=n[c];t.fillStyle=c,a.forEach(s=>{t.globalAlpha=s.alpha,t.fillRect(s.px+1,s.py+1,r-2,r-2)})}t.globalAlpha=1,t.strokeStyle="rgba(255, 255, 255, 0.35)",t.lineWidth=1.5,t.beginPath();for(let c in n)n[c].forEach(a=>{t.globalAlpha=a.alpha;let s=a.px,u=a.py;t.moveTo(s+1,u+r-2),t.lineTo(s+1,u+1),t.lineTo(s+r-2,u+1)});t.stroke(),t.strokeStyle="rgba(0, 0, 0, 0.45)",t.beginPath();for(let c in n)n[c].forEach(a=>{t.globalAlpha=a.alpha;let s=a.px,u=a.py;t.moveTo(s+1,u+r-1),t.lineTo(s+r-1,u+r-1),t.lineTo(s+r-1,u+1)});t.stroke(),t.globalAlpha=1,t.save(),this.particles.forEach(c=>c.draw(t)),t.restore(),t.globalAlpha=1}};function ma(i,t){let e=i.ctx2d;st=i.width,Bt=i.height,wi=i.topInset||0,ki=i.visibleHeight||Bt,Lo();function o(){if(e.fillStyle="rgba(8, 6, 18, 0.92)",e.fillRect(0,0,st,Bt),e.strokeStyle="rgba(255,255,255,0.04)",e.lineWidth=.5,Le){let r=Le.cellSize,n=Math.floor((st-Le.cols*r)/2),c=wi+(ki-Le.rows*r);e.beginPath();for(let a=0;a<=Le.cols;a++)e.moveTo(n+a*r,c),e.lineTo(n+a*r,c+Le.rows*r);for(let a=0;a<=Le.rows;a++)e.moveTo(n,c+a*r),e.lineTo(n+Le.cols*r,c+a*r);e.stroke(),Le.step(n,c),Le.draw(e,n,c)}Ut=requestAnimationFrame(o)}Ut=requestAnimationFrame(o)}function ga(){Ut&&(cancelAnimationFrame(Ut),Ut=null)}var re={aurora:fo,debug:mo,ecg:Te,fire:go,geometry:He,gradient:Wi,julia:we,lavalamp:Eo,mandelbrot:bi,matrix:Mo,none:To,starfield:nt,tetris:Fo};var Si=class{constructor(t="",e="bottom",o={}){this.text=t,this.position=e,this.applyStyles(o),this.time=0,this.textX=0,this.initialized=!1,this.baseCharWidth=15,this.baseFontSize=24,this.baseVelocity=2.8,this.baseBounce=12,this.fontFamily='"Courier New", monospace',this.fontWeight="bold",this.enabled=!0}applyStyles(t={}){this.color=t.color||"#FFF",this.outline=t.outline||null,this.shadowColor=t.shadowColor||null,this.shadowBlur=t.shadowBlur||0,this.colorFn=t.colorFn||null}updateStyles(t={}){this.applyStyles(t)}setText(t){this.text=t}setPosition(t){this.position=t}render(t,e,o){if(!this.enabled)return;this.initialized||(this.textX=e,this.initialized=!0);let r=e<480?.65:e<768?.8:1,n=Math.max(12,Math.floor(this.baseFontSize*r)),c=this.baseBounce*r,a=this.baseCharWidth*r,s=this.baseVelocity*r;if(this.time+=.012,!this.text)return;let u=this.text.length*a;this.textX-=s,this.textX<-(u+e*1.1)&&(this.textX=e),t.font=`${this.fontWeight} ${n}px ${this.fontFamily}`,t.lineJoin="round",this.outline&&(t.lineWidth=4,t.strokeStyle=this.outline);let d=this.shadowColor&&this.shadowColor!=="inherit";d?(t.shadowColor=this.shadowColor,t.shadowBlur=this.shadowBlur):this.shadowColor||(t.shadowBlur=0);let l=50*r,h=32*r,m=this.position==="bottom"?o-h:l;for(let p=0;p<this.text.length;p++){let f=this.text[p],g=this.textX+p*a;if(g>-40&&g<e+40){let k=m+Math.sin(this.time*4+p*.1)*c;t.fillStyle=this.colorFn?this.colorFn(this.time,p):this.color,this.shadowColor==="inherit"&&(t.shadowColor=t.fillStyle,t.shadowBlur=this.shadowBlur),this.outline&&t.strokeText(f,g,k),t.fillText(f,g,k),this.shadowColor==="inherit"&&(t.shadowBlur=0)}}d&&(t.shadowBlur=0)}};var Io=`:root {
    --afx-bg-color: rgba(10, 10, 15, 0.25);
    --afx-text-color: #f0f0f0;
    --afx-accent: #ff00ff;
    --afx-viewport-height: 100dvh;
    --afx-terms-font-size: 1rem;
    --afx-dialog-h3-size: 1.4rem;
    --afx-picker-font-size: 13px;
    --afx-btn-font-size: 15px;
    --afx-body-bg: #000;
    --afx-body-color: #fff;
    --afx-text-shadow: 0 1px 3px rgba(0, 0, 0, 0.9), 0 2px 10px rgba(0, 0, 0, 0.6);
    --afx-none-bg: var(--afx-bg-color, black);
    --afx-mono-font: SFMono-Regular, Consolas, "Liberation Mono", Menlo, Monaco, monospace;
}

/* --- THEME REACTIVITY --- */
/* None effect: Reactive Light/Dark switching */
html.afx-effect-none {
    --afx-body-bg: #f5f5f5;
    --afx-body-color: #000000;
    --afx-text-shadow: 0 1px 2px rgba(255, 255, 255, 0.8);
}

/* Detect Anki Night Mode / System Dark Preference */
html.afx-effect-none.nightMode,
html.afx-effect-none.night_mode,
.nightMode html.afx-effect-none,
.night_mode html.afx-effect-none,
body.nightMode .afx-effect-none,
body.night_mode .afx-effect-none {
    --afx-body-bg: #2c2c2c;
    --afx-body-color: #ffffff;
    --afx-text-shadow: 0 1px 3px rgba(0, 0, 0, 0.9), 0 2px 10px rgba(0, 0, 0, 0.6);
}

/* Hide canvases when NO effect is selected to allow CSS background to show */
html.afx-effect-none #afx-shared-gl,
html.afx-effect-none #afx-shared-2d {
    display: none !important;
}

@media (prefers-color-scheme: dark) {
    html.afx-effect-none {
        --afx-body-bg: #2c2c2c;
        --afx-body-color: #ffffff;
    }
}

/* --- Aurora Visual Polish: Low-Res Smoothing --- */
#afx-shared-2d.afx-aurora-active {
    filter: blur(8px) contrast(1.2);
}

html,
body {
    margin: 0 !important;
    padding: 0;
    width: 100% !important;
    height: var(--afx-viewport-height) !important;
    min-height: var(--afx-viewport-height) !important;
    overflow: hidden !important;
    background-color: var(--afx-body-bg, #000) !important;
    color: var(--afx-body-color, #fff) !important;
    position: relative !important;
}

.card {
    margin: 0 !important;
    padding: 0;
    width: 100% !important;
    height: var(--afx-viewport-height) !important;
    overflow: hidden !important;
    background: transparent !important;
    box-shadow: none !important;
    position: relative !important;
    color: var(--afx-body-color, #fff) !important;
}

#qa {
    position: relative !important;
    z-index: 5 !important;
    width: 100% !important;
    height: 100% !important;
    margin: 0 !important;
    padding: 0;
    padding-bottom: calc(var(--bottom-inset, 0px) + var(--afx-dock-height, 0px)) !important;
    overflow-y: auto !important;
    -webkit-overflow-scrolling: touch !important;
}

/* After agreement, elevate #qa above canvases */
html.afx-agreed #qa {
    position: relative !important;
    z-index: 10 !important;
}

body>*,
#content,
#container,
#outer,
#top-bar,
#bottom-bar {
    padding-bottom: 0 !important;
    margin-bottom: 0 !important;
}

#ankifx-background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: var(--afx-viewport-height);
    z-index: 1;
    pointer-events: none;
    background-color: var(--afx-none-bg, var(--afx-bg-color, black));
    touch-action: none;
}

#ankifx-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: calc(var(--afx-viewport-height) - var(--bottom-inset, 0px));
    z-index: 100;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.25);
    transition: background 0.5s ease, opacity 0.5s ease;
    padding: 1rem;
    box-sizing: border-box;
    color: #fff;
}

/* --- GLOBAL VISIBILITY RULES --- */
#afx-btn-back,
#afx-btn-skip,
#afx-bottom-dock {
    display: none !important;
}

/* Back/Skip only visible when music is playing */
#ankifx-overlay:not(.afx-music-playing) #afx-btn-back,
#ankifx-overlay:not(.afx-music-playing) #afx-btn-skip {
    display: none !important;
}

/* Nav buttons only visible if agreed AND music is ON */
.afx-agreed-state.afx-bgm-active #afx-btn-back,
.afx-agreed-state.afx-bgm-active #afx-btn-skip {
    display: flex !important;
}

/* --- AGREED STATE: SHOW CONTROLS --- */
.afx-agreed-state {
    background: transparent !important;
    backdrop-filter: none !important;
    -webkit-backdrop-filter: none !important;
    pointer-events: none !important;
}

.afx-agreed-state .afx-dialog {
    display: none !important;
}

/* --- AnkiDroid Scroll Fix --- */
html.afx-ankidroid,
html.afx-ankidroid body {
    overflow: auto !important;
    height: auto !important;
    min-height: 100% !important;
}

html.afx-ankidroid .card {
    overflow: visible !important;
    height: auto !important;
}

html.afx-ankidroid #qa {
    overflow-y: visible !important;
    height: auto !important;
}

/* Reveal corner controls only after agreement */
.afx-agreed-state #afx-bottom-dock {
    display: flex !important;
}

/* Top dock container structure */
#afx-top-dock {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    display: none !important;
    justify-content: space-between;
    align-items: center;
    padding: 20px 20px 0 20px;
    pointer-events: none;
    z-index: 10001;
    box-sizing: border-box;
}

.afx-agreed-state #afx-top-dock {
    display: flex !important;
}

.afx-top-group-left,
.afx-top-group-right {
    display: flex;
    align-items: center;
    gap: 12px;
    pointer-events: auto;
}

#afx-btn-back,
#afx-btn-skip {
    pointer-events: auto !important;
    position: static !important;
}

#afx-bottom-dock {
    position: fixed;
    left: 0;
    right: 0;
    bottom: var(--bottom-inset, 0px);
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding: 0 20px 10px 20px;
    pointer-events: none;
    z-index: 10001;
    box-sizing: border-box;
}

.afx-control-group-left,
.afx-control-group-right {
    display: flex;
    flex-direction: column;
    gap: 8px;
    pointer-events: auto;
}

.afx-control-group-left {
    align-items: flex-start;
}

.afx-control-group-right {
    align-items: flex-end;
}

#afx-effect-controls-container {
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: flex-end;
}

/* Base control row styles */
#afx-effect-selector-container,
.afx-control-row {
    background: rgba(0, 0, 0, 0.7);
    border-radius: 8px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    overflow: hidden;
    height: 32px !important;
    box-sizing: border-box !important;
    display: flex;
    align-items: center;
    padding: 0 10px !important;
}

#afx-effect-selector-container,
.afx-control-group-right .afx-control-row {
    width: 260px !important;
    max-width: calc(100vw - 40px) !important;
}

/* Unified Control Components */
.afx-action-btn {
    --button-gradient-start: transparent !important;
    --button-gradient-end: transparent !important;
    appearance: none !important;
    -webkit-appearance: none !important;
    background: transparent !important;
    color: #fff !important;
    border: none !important;
    outline: none !important;
    width: 100%;
    height: 100%;
    cursor: pointer;
    text-transform: uppercase;
    font-family: var(--afx-mono-font) !important;
    font-size: var(--afx-picker-font-size) !important;
    font-weight: bold !important;
    padding: 0 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    transition: all 0.2s ease;
}

.afx-action-btn:hover {
    --button-gradient-start: rgba(255, 255, 255, 0.08) !important;
    --button-gradient-end: rgba(255, 255, 255, 0.08) !important;
    appearance: none !important;
    -webkit-appearance: none !important;
    color: var(--afx-accent, #ff00ff) !important;
    background: rgba(255, 255, 255, 0.08) !important;
}

.afx-select {
    background: transparent;
    color: white;
    border: none;
    padding: 0 !important;
    margin: 0 !important;
    font-family: var(--afx-mono-font);
    font-weight: bold;
    cursor: pointer;
    outline: none;
    appearance: auto;
    width: 100%;
    height: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.afx-select option {
    background: #1a1a1a !important;
    color: #ffffff !important;
    padding: 12px !important;
    font-family: var(--afx-mono-font) !important;
}

.afx-range-slider {
    flex: 1;
    accent-color: #00ffff;
    cursor: pointer;
    margin: 0 10px;
}

.afx-slider-label {
    font-size: 10px !important;
    color: #00ffff;
    font-family: var(--afx-mono-font);
    white-space: nowrap;
}

.afx-slider-val-text {
    font-size: 10px !important;
    color: #00ffff;
    font-family: var(--afx-mono-font);
    text-align: right;
}

@media (max-width: 768px) {
    #afx-top-dock {
        padding: calc(10px + env(safe-area-inset-top)) calc(10px + env(safe-area-inset-right)) 0 calc(10px + env(safe-area-inset-left)) !important;
    }
}

.afx-dialog {
    background: rgba(25, 25, 30, 0.96);
    border: 1px solid rgba(255, 255, 255, 0.15);
    border-radius: 24px;
    padding: 0;
    max-width: 850px;
    width: 92%;
    box-shadow: 0 30px 80px rgba(0, 0, 0, 0.8);
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    position: relative;
    height: 70dvh;
    max-height: 85%;
    overflow: hidden !important;
    pointer-events: auto !important;
}

.afx-terms {
    font-family: var(--afx-mono-font);
    background: rgba(0, 0, 0, 0.4);
    padding: 1.5rem;
    border-radius: 24px 24px 0 0;
    margin-bottom: 0;
    width: 100%;
    flex: 1;
    overflow-y: auto;
    line-height: 1.8;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    font-size: var(--afx-terms-font-size);
    color: #ccc;
    box-sizing: border-box;
}

.afx-terms h3 {
    font-size: var(--afx-dialog-h3-size);
    margin: 0 0 15px 0;
}

.afx-action-row {
    padding: 20px;
    width: 100%;
    display: flex;
    justify-content: center;
    box-sizing: border-box;
}

.afx-btn,
.afx-playback-btn,
.afx-select,
.afx-sub-picker,
.afx-control-row {
    font-family: var(--afx-mono-font) !important;
    font-size: var(--afx-picker-font-size) !important;
    font-weight: bold !important;
}

.afx-btn {
    padding: 10px 30px;
    border-radius: 12px;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: var(--afx-btn-font-size) !important;
}

.afx-btn:disabled {
    background: #444;
    color: #888;
    cursor: not-allowed;
}

.afx-btn:not(:disabled) {
    background: #28a745;
    color: white;
    box-shadow: 0 4px 15px rgba(40, 167, 69, 0.3);
}

.afx-btn:not(:disabled):hover {
    transform: scale(1.05);
    background: #2fb34d;
}

.afx-control-row {
    width: fit-content;
    height: 28px;
    box-sizing: border-box;
    padding: 0 10px;
    display: flex;
    align-items: center;
    gap: 10px;
    color: white;
}

.afx-playback-btn {
    width: 38px;
    height: 38px;
    border-radius: 10px;
    background: rgba(0, 0, 0, 0.7);
    border: 1px solid rgba(255, 255, 255, 0.2);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: 0.2s;
}

.afx-toggle {
    position: relative;
    width: 28px;
    height: 15px;
}

.afx-toggle input {
    opacity: 0;
    width: 0;
    height: 0;
}

.afx-slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #444;
    border-radius: 20px;
    transition: 0.4s;
}

.afx-slider:before {
    position: absolute;
    content: "";
    height: 11px;
    width: 11px;
    left: 2px;
    bottom: 2px;
    background: white;
    border-radius: 50%;
    transition: 0.4s;
}

input:checked+.afx-slider {
    background: #28a745;
}

input:checked+.afx-slider:before {
    transform: translateX(13px);
}

/* Hide card content container during active DEBUG effect to avoid jumble */
html.afx-effect-debug #qa {
    display: none !important;
}

/* --- Native Anki Card Elements (Flag & Mark) --- */
#_flag,
#_mark {
    position: static !important;
    display: inline-flex !important;
    align-items: center;
    justify-content: center;
    pointer-events: auto !important;
    cursor: pointer !important;
    font-size: 24px !important;
    line-height: 1 !important;
    transition: transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.2s ease !important;
    user-select: none !important;
    -webkit-user-select: none !important;
    text-shadow: 0 2px 8px rgba(0, 0, 0, 0.5) !important;
    margin: 0 !important;
    padding: 0 !important;
}

/* Explicitly support hidden attribute and unflagged style to override display: inline-flex */
#_flag[hidden],
#_mark[hidden],
#_flag[style*="var(--flag-0)"] {
    display: none !important;
}

#_flag:hover,
#_mark:hover {
    transform: scale(1.25) !important;
}

/* Satisfying interactive click/toggle shrink feedback */
#_flag:active,
#_mark:active {
    transform: scale(0.8) !important;
    opacity: 0.6 !important;
}

/* Satisfying pop-in activation transition when shown */
#_flag:not([hidden]):not([style*="var(--flag-0)"]),
#_mark:not([hidden]) {
    animation: afx-pop-in 0.28s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

@keyframes afx-pop-in {
    0% {
        transform: scale(0);
        opacity: 0;
    }
    75% {
        transform: scale(1.2);
    }
    100% {
        transform: scale(1);
        opacity: 1;
    }
}

/* ECG Status Panel inside Top Right Group */
#afx-ecg-panel {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    color: #ff1a1a;
    font-family: var(--afx-mono-font);
    font-weight: 900 !important;
    line-height: 1.2;
    text-shadow: 0 0 8px rgba(255, 26, 26, 0.6), 0 2px 4px rgba(0, 0, 0, 0.9) !important;
    transition: opacity 0.2s ease;
}

#afx-ecg-panel .afx-ecg-bpm {
    font-size: 1.35rem;
    font-weight: 900 !important;
}

#afx-ecg-panel .afx-ecg-rhythm {
    font-size: 0.9rem;
    font-weight: 900 !important;
    opacity: 0.95;
    white-space: nowrap;
}

@media (max-width: 480px) {
    #afx-ecg-panel .afx-ecg-bpm {
        font-size: 1.1rem;
    }
    #afx-ecg-panel .afx-ecg-rhythm {
        font-size: 0.8rem;
    }
}

/* Shared engine canvases (no inline layout CSS in engine.js) */
.afx-shared-canvas {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
}

.afx-shared-marquee-canvas {
    z-index: 5;
}

#afx-global-fps.afx-global-fps {
    color: #0f0;
    font-family: monospace;
    font-size: 14px;
    font-weight: bold;
    text-shadow: 1px 1px 2px #000;
    pointer-events: none;
}

.afx-deck-author {
    margin: -10px 0 15px 0;
    opacity: 0.7;
    font-size: 0.9rem;
}

.afx-effect-selector-container.afx-control-row {
    padding: 0;
}

/* --- BGM status color reactivity (no inline styles) --- */
#afx-bgm-status {
    color: #fff;
    transition: color 0.2s ease;
}

.afx-bgm-active #afx-bgm-status {
    color: #ff6b6b;
}

/* --- DEBUG EFFECT DOM PANEL AND METRICS --- */
html.afx-effect-debug #ankifx-background {
    pointer-events: auto !important;
    touch-action: auto !important;
}

.afx-debug-container {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1000;
    box-sizing: border-box;
    overflow-y: auto !important;
    padding: 70px 20px 0 20px;
    display: flex;
    flex-direction: column;
}

html.afx-effect-debug .afx-debug-container {
    pointer-events: auto !important;
    touch-action: auto !important;
    -webkit-overflow-scrolling: touch !important;
}

.afx-debug-container,
.afx-debug-container * {
    user-select: text !important;
    -webkit-user-select: text !important;
}

.afx-debug-columns {
    display: flex;
    width: 100%;
    gap: 20px;
}

.afx-debug-left-col,
.afx-debug-right-col {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.afx-debug-panel {
    background: rgba(10, 10, 15, 0.88);
    border: 1px solid rgba(255, 255, 255, 0.12);
    border-radius: 8px;
    padding: 16px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.7);
    pointer-events: auto;
    font-family: var(--afx-mono-font);
}

.afx-debug-panel h3 {
    font-size: 13px;
    font-weight: bold;
    margin: 0 0 10px 0;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.15);
    padding-bottom: 4px;
    color: #00ff00; /* Unified header font color */
    text-align: center;
}

.afx-debug-content {
    margin: 0;
    padding: 0;
    font-size: 12px;
    line-height: 1.5;
    color: #ffffff;
    white-space: pre-wrap;
    word-break: break-all;
    text-align: left;
}

.afx-debug-panel ::selection {
    background: rgba(0, 255, 255, 0.3);
    color: #ffffff;
}

/* Corner markers */
.afx-debug-corner {
    position: absolute;
    font-family: var(--afx-mono-font);
    font-size: 11px;
    font-weight: bold;
    color: #ff00ff;
    text-shadow: 1px 1px 2px #000;
    pointer-events: none;
    z-index: 5;
}

.afx-debug-corner.top-left { top: 5px; left: 5px; }
.afx-debug-corner.top-right { top: 5px; right: 5px; }
.afx-debug-corner.bottom-left { bottom: 5px; left: 5px; }
.afx-debug-corner.bottom-right { bottom: 5px; right: 5px; }

/* Visual Layout Boundary Lines */
.afx-debug-line {
    position: absolute;
    left: 0;
    width: 100%;
    height: 0;
    z-index: 5;
    pointer-events: none;
    box-sizing: border-box;
}

.afx-debug-line.visible-bottom {
    border-top: 3px dashed #00ffff;
}

.afx-debug-line-label {
    position: absolute;
    font-family: var(--afx-mono-font);
    font-size: 13px;
    font-weight: bold;
    transform: translateX(-50%);
    left: 50%;
    white-space: nowrap;
    text-shadow: 1px 1px 2px #000;
}

.afx-debug-line.visible-bottom .afx-debug-line-label {
    color: #00ffff;
    bottom: 8px;
}

@media (max-width: 768px), (orientation: portrait) {
    .afx-debug-columns {
        flex-direction: column;
        gap: 16px;
    }
}

/* Color overrides removed for unified headers styling */

.afx-debug-panel.console-logs {
    margin-top: 16px;
}

/* --- Legacy Template Migration Toast --- */
.afx-legacy-toast-container {
    position: fixed;
    top: 16px;
    left: 50%;
    transform: translate(-50%, -20px);
    width: 90%;
    max-width: 520px;
    background: rgba(18, 14, 24, 0.95);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 0, 255, 0.35);
    border-radius: 12px;
    padding: 14px 20px !important;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.6), inset 0 1px 1px rgba(255, 255, 255, 0.05);
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 16px;
    opacity: 0;
    pointer-events: auto;
    transition: opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1), transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    z-index: 999999;
}

.afx-legacy-toast-container.afx-legacy-visible {
    opacity: 1;
    transform: translate(-50%, 0);
}

.afx-legacy-toast-content {
    flex: 1;
    color: #e5e5e7;
    font-size: 12px;
    line-height: 1.5;
    text-align: left;
}

.afx-legacy-toast-title {
    font-weight: 600;
    color: #ff33ff;
    margin: 0 0 4px 0;
    text-transform: uppercase;
    font-size: 11px;
    letter-spacing: 0.8px;
}

.afx-legacy-toast-link {
    color: #00f3ff;
    text-decoration: underline;
    cursor: pointer;
    font-weight: 500;
    word-break: break-all;
}

.afx-legacy-toast-link:hover {
    color: #33f7ff;
}

.afx-legacy-toast-close {
    background: transparent;
    border: none;
    color: rgba(255, 255, 255, 0.5);
    font-size: 20px;
    cursor: pointer;
    padding: 0 4px;
    line-height: 1;
    margin-top: -2px;
    transition: color 0.2s ease, transform 0.2s ease;
    display: flex;
    align-items: center;
    justify-content: center;
}

.afx-legacy-toast-close:hover {
    color: #ffffff;
    transform: scale(1.1);
}

/* --- Template Update Notice --- */
.afx-update-notice {
    background: rgba(30, 20, 35, 0.95);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 0, 255, 0.4);
    border-radius: 12px;
    padding: 12px 18px;
    width: 100%;
    box-shadow: 0 10px 30px rgba(0,0,0,0.6), inset 0 1px 1px rgba(255,255,255,0.1);
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    opacity: 0;
    pointer-events: auto;
    transition: opacity 0.38s ease, transform 0.38s ease;
    box-sizing: border-box;
    transform: translateY(-20px);
    font-family: SFMono-Regular, Consolas, Menlo, monospace;
    margin: 10px 0;
}

.afx-update-notice.afx-visible {
    opacity: 1;
    transform: translateY(0);
}

.afx-update-notice-content {
    flex: 1;
    color: #f0f0f0;
    font-size: 11px;
    line-height: 1.5;
    text-align: left;
}

.afx-update-notice-title {
    font-weight: bold;
    color: #ff00ff;
    margin: 0 0 2px 0;
    text-transform: uppercase;
    font-size: 12px;
    letter-spacing: 0.5px;
}

.afx-update-notice-link {
    color: #00ffff;
    text-decoration: underline;
    cursor: pointer;
    font-weight: bold;
}

.afx-update-notice-close {
    background: transparent;
    border: none;
    color: rgba(255,255,255,0.6);
    font-size: 18px;
    cursor: pointer;
    padding: 4px;
    line-height: 1;
    transition: color 0.2s, transform 0.2s;
    display: flex;
    align-items: center;
    justify-content: center;
}

.afx-update-notice-close:hover {
    color: #fff;
    transform: scale(1.15);
}`;function Do(){return/iPad|iPhone|iPod/.test(navigator.userAgent)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1}function Ji(){return Math.min(window.devicePixelRatio||1,1.5)}function Ei(){return Math.min(window.devicePixelRatio||1,2)}function Ci(i,t){let e=Ji();return i==="mandelbrot"||i==="julia"?e:t}function Ue(){let i=document.documentElement,t=i?getComputedStyle(i):null;return{ioHeader:t&&parseInt(t.getPropertyValue("--io-header"))||0,topInset:t&&parseInt(t.getPropertyValue("--top-inset"))||0,bottomInset:t&&parseInt(t.getPropertyValue("--bottom-inset"))||0}}function bt(){return localStorage.getItem("ankifx_marquee_enabled")!=="false"}function Nt(){return(window.innerWidth||document.documentElement.clientWidth||800)<480}var va={deckTitle:"AnkiFX Deck",deckAuthor:"Anonymous",termsText:null,sources:[],marquee:"ANKIFX ENGINE INITIALIZED ...",defaultEffect:"geometry",debug:!1,countdown:30,marqueePosition:"top"};function Ro(i={}){let t={...va,...window.AnkiFX_Config||{},...i};Array.isArray(t.sources)||(t.sources=[]);let e=parseInt(t.countdown,10);return t.countdown=isNaN(e)?30:Math.max(0,e),t.isConfigFileError=t.termsText!==void 0&&t.termsText!==null&&(typeof t.termsText!="string"||typeof t.termsText=="string"&&t.termsText.trim()===""||t.termsText==="No terms provided."),t}function zo(i){let t=window.AnkiFX_Config?.defaultEffect,e;return t?(e=t,localStorage.setItem("ankifx_preferred_effect",e)):e=localStorage.getItem("ankifx_preferred_effect")||i.defaultEffect||"geometry",re[e]||(console.warn(`[AnkiFX] Unknown effect "${e}" \u2014 falling back to "${i.defaultEffect||"geometry"}".`),e=i.defaultEffect||"geometry",re[e]||(e=Object.keys(re)[0]||"geometry"),localStorage.setItem("ankifx_preferred_effect",e)),e}function Oo(i,t){let e=document.getElementById("ankifx-overlay");if(!e||!e.classList.contains("afx-agreed-state"))return!1;i.sharedGL||(i.sharedGL=document.getElementById("afx-shared-gl")),i.shared2D||(i.shared2D=document.getElementById("afx-shared-2d")),i.sharedMarquee||(i.sharedMarquee=document.getElementById("afx-shared-marquee")),i.sharedGL&&!i.glContext&&(i.glContext=i.sharedGL.getContext("webgl",{alpha:!1,antialias:!1})),i.shared2D&&!i.ctx2D&&(i.ctx2D=i.shared2D.getContext("2d")),i.sharedMarquee&&!i.ctxMarquee&&(i.ctxMarquee=i.sharedMarquee.getContext("2d"));let o=document.getElementById("ankifx-background");if(o){let n=o.getBoundingClientRect();i.width=n.width;let c=Ue();i.height=document.documentElement.clientHeight+c.ioHeader,i.dpr=Ei()}if(!i.currentEffectId){let n=Array.from(document.documentElement.classList).find(c=>c.startsWith("afx-effect-"));n&&(i.currentEffectId=n.replace("afx-effect-",""))}i.defaultMarqueeText=t.marquee,i.marquee&&(i.marquee.setText(t.marquee),i.marquee.setPosition(t.marqueePosition));let r=document.getElementById("afx-deck-title");return r&&(r.textContent=t.deckTitle),!0}function qt(i){let t=document.getElementById("afx-effect-controls-container");t&&(t.innerHTML="",!(!i||!i.controls||i.controls.length===0)&&i.controls.forEach(e=>{let o=document.createElement("div");if(o.className="afx-control-row",o.id=`afx-control-container-${e.id}`,e.type==="toggle")o.innerHTML=`
                    <label class="afx-toggle">
                        <input type="checkbox" id="afx-control-${e.id}" ${e.value?"checked":""}>
                        <span class="afx-slider"></span>
                    </label>
                    <span id="afx-control-label-${e.id}">${e.label}</span>
                `,o.querySelector("input").addEventListener("change",n=>{e.onChange&&e.onChange(n.target.checked)});else if(e.type==="slider"){o.classList.add("afx-slider-row");let r=e.step||1,n=r.toString().includes(".")?r.toString().split(".")[1].length:0;o.innerHTML=`
                    <span class="afx-slider-label">${e.label}:</span>
                    <input type="range" id="afx-control-${e.id}" class="afx-range-slider" min="${e.min}" max="${e.max}" step="${r}" value="${e.value}">
                    <span id="afx-control-val-${e.id}" class="afx-slider-val-text">${e.value.toFixed(n)}</span>
                `;let c=o.querySelector("input"),a=o.querySelector(".afx-slider-val-text");c.addEventListener("input",s=>{let u=parseFloat(s.target.value);a.innerText=u.toFixed(n),e.onChange&&e.onChange(u)})}else if(e.type==="button")o.style.padding="0",o.innerHTML=`
                    <button id="afx-control-${e.id}" class="afx-action-btn">
                        ${e.label}
                    </button>
                `,o.querySelector("button").addEventListener("click",n=>{n.stopPropagation(),e.onClick&&e.onClick()});else if(e.type==="select"){o.style.padding="0";let r=(e.options||[]).map(c=>{let a=typeof c=="object"?c.value:c,s=typeof c=="object"?c.text:c,u=a==e.value?"selected":"";return`<option value="${a}" ${u}>${s}</option>`}).join("");o.innerHTML=`
                    <select id="afx-control-${e.id}" class="afx-select">
                        ${r}
                    </select>
                `,o.querySelector("select").addEventListener("change",c=>{e.onChange&&e.onChange(c.target.value)})}t.appendChild(o)}))}function Uo(i,t){let e=document.getElementById(`afx-control-${i}`);e&&(e.type==="checkbox"?e.checked=!!t:e.value=t);let o=document.getElementById(`afx-control-val-${i}`);if(o){let r=e?e.step:"",n=r&&r.includes(".")?r.split(".")[1].length:0;o.innerText=typeof t=="number"?t.toFixed(n||(t%1===0?0:4)):t}}function jt(i,t,e,o,r){r==="debug"?e.classList.add("afx-debug-active"):e.classList.remove("afx-debug-active");let n=document.documentElement;Array.from(n.classList).forEach(a=>{a.startsWith("afx-effect-")&&n.classList.remove(a)}),n.classList.add(`afx-effect-${r}`),i.currentEffectId=r;let c=re[r];if(c){let a=Ue(),s=Ci(r,i.dpr),u={gl:i.glContext,ctx2d:i.ctx2D,canvasGL:i.sharedGL,canvas2D:i.shared2D,width:i.width,height:i.height,dpr:s,topInset:a.ioHeader,visibleWidth:i.width,visibleHeight:i.height-a.ioHeader,visibleBounds:{top:a.ioHeader,bottom:i.height}};i.marquee&&i.marquee.updateStyles(c.marqueeFont||{}),c.run(u,t),qt(c),i.marquee&&(i.marquee.enabled=bt())}else i.marquee&&i.marquee.updateStyles({}),qt(null)}function et(i){let t=document.getElementById("ankifx-background");if(!t||!i.sharedGL||!i.shared2D||!i.sharedMarquee)return;let o=Ue().ioHeader;document.documentElement.style.setProperty("--afx-viewport-height",`calc(100dvh + ${o}px)`);let r=t.getBoundingClientRect();i.width=r.width,i.height=document.documentElement.clientHeight+o,i.dpr=Ei();let n=Ji();if(i.sharedGL.width=i.width*n,i.sharedGL.height=i.height*n,i.sharedGL.style.width=i.width+"px",i.sharedGL.style.height=i.height+"px",i.shared2D.width=i.width*i.dpr,i.shared2D.height=i.height*i.dpr,i.shared2D.style.width=i.width+"px",i.shared2D.style.height=i.height+"px",i.sharedMarquee.width=i.width*i.dpr,i.sharedMarquee.height=i.height*i.dpr,i.sharedMarquee.style.width=i.width+"px",i.sharedMarquee.style.height=i.height+"px",i.glContext&&i.glContext.viewport(0,0,i.sharedGL.width,i.sharedGL.height),i.ctx2D&&(i.ctx2D.setTransform(1,0,0,1,0,0),i.ctx2D.scale(i.dpr,i.dpr)),i.ctxMarquee&&(i.ctxMarquee.setTransform(1,0,0,1,0,0),i.ctxMarquee.scale(i.dpr,i.dpr)),i.currentEffectId&&re[i.currentEffectId]?.onResize){let c=Ci(i.currentEffectId,i.dpr);re[i.currentEffectId].onResize(i.width,i.height,c)}}function Bo(i){let e=Ue().ioHeader,o=window.innerHeight,r=document.documentElement.clientHeight,n=setInterval(()=>{let c=Ue(),a=window.innerHeight,s=document.documentElement.clientHeight;(c.ioHeader!==e||a!==o||s!==r)&&(e=c.ioHeader,o=a,r=s,et(i))},50);setTimeout(()=>clearInterval(n),2e3)}function No(i){i._layoutHandler&&(window.removeEventListener("orientationchange",i._layoutHandler),window.removeEventListener("resize",i._layoutHandler)),i._resizeTimeout&&clearTimeout(i._resizeTimeout),i._resizeInterval&&clearInterval(i._resizeInterval),i._layoutHandler=()=>{i._resizeTimeout&&clearTimeout(i._resizeTimeout),i._resizeInterval&&clearInterval(i._resizeInterval),et(i),i._resizeTimeout=setTimeout(()=>{et(i)},100);let t=0,e=i.width,o=i.height;i._resizeInterval=setInterval(()=>{if(t+=100,t>=1500){clearInterval(i._resizeInterval);return}let r=Ue(),n=document.getElementById("ankifx-background"),c=n?n.getBoundingClientRect():null,a=c?c.width:window.innerWidth,s=document.documentElement.clientHeight+r.ioHeader;(a!==e||s!==o)&&(e=a,o=s,et(i))},100)},window.addEventListener("orientationchange",i._layoutHandler),window.addEventListener("resize",i._layoutHandler)}function qo(i){let t=document.getElementById("afx-bottom-dock");t&&(i.dockObserver=new ResizeObserver(()=>{let e=t.getBoundingClientRect();document.documentElement.style.setProperty("--afx-dock-height",`${e.height}px`)}),i.dockObserver.observe(t))}function jo(i){i.observer||(i._observerTimeout=null,i.observer=new MutationObserver(()=>{i._observerTimeout&&clearTimeout(i._observerTimeout),i._observerTimeout=setTimeout(()=>{i._observerTimeout=null;let t=document.getElementById("qa");(t?!!t.querySelector(".ankifx-card"):!1)?Pi(i):typeof i=="object"&&window.AnkiFX&&window.AnkiFX.destroy()},20)}),i.observer.observe(document.documentElement,{childList:!0,subtree:!0}))}function Pi(i){let t=i&&i.observer;t&&i.observer.disconnect();let e=document.getElementById("_flag"),o=document.getElementById("_mark"),r=document.getElementById("afx-top-group-left"),n=document.getElementById("afx-top-group-right"),c=document.getElementById("afx-btn-skip");if(o&&r){let a=document.getElementById("afx-global-fps");a&&o.nextSibling!==a?r.insertBefore(o,a):!a&&o.parentElement!==r&&r.appendChild(o)}e&&n&&e.parentElement!==n&&n.insertBefore(e,c),t&&i.observer.observe(document.documentElement,{childList:!0,subtree:!0})}function Zi(i){if(i.marqueeInterval)return;let t=0,e=0,o=r=>{if(r===void 0&&(r=performance.now()),t||(t=r),e++,r-t>=1e3){let n=document.getElementById("afx-global-fps");n&&(n.textContent=`FPS: ${e}`),e=0,t=r}if(i.marquee&&i.ctxMarquee){if(i.ctxMarquee.clearRect(0,0,i.width,i.height),i.currentEffectId&&re[i.currentEffectId]?.drawOverlay)try{re[i.currentEffectId].drawOverlay(i.ctxMarquee,i.width,i.height,r)}catch(n){console.error("[AnkiFX] drawOverlay error: "+n.message)}i.marquee.render(i.ctxMarquee,i.width,i.height)}i.marqueeInterval=requestAnimationFrame(o)};i.marqueeInterval=requestAnimationFrame(o)}function $o(i,t,e,o){let r=t.countdown;if((t.debug||t.isConfigFileError)&&(r=0),r>0){o.textContent=`( ${r} )`;let n=setInterval(()=>{r--,o.textContent=`( ${r} )`,r<=0&&(clearInterval(n),o.textContent="I AGREE",o.disabled=!1)},1e3)}else o.textContent="I AGREE",o.disabled=!1;o.addEventListener("click",n=>{n.stopPropagation(),o.disabled||window.AnkiFX.agree(e,t.deckTitle)})}window.neoart=Object.create(null);function Qi(i,t){var e=Object.create(null,{endian:{value:1,writable:!0},length:{value:0,writable:!0},index:{value:0,writable:!0},buffer:{value:null,writable:!0},view:{value:null,writable:!0},bytesAvailable:{get:function(){return this.length-this.index}},position:{get:function(){return this.index},set:function(o){o<0?o=0:o>this.length&&(o=this.length),this.index=o}},clear:{value:function(){this.buffer=new ArrayBuffer,this.view=null,this.index=this.length=0}},readAt:{value:function(o){return this.view.getUint8(o)}},readByte:{value:function(){return this.view.getInt8(this.index++)}},readShort:{value:function(){var o=this.view.getInt16(this.index,this.endian);return this.index+=2,o}},readInt:{value:function(){var o=this.view.getInt32(this.index,this.endian);return this.index+=4,o}},readUbyte:{value:function(){return this.view.getUint8(this.index++)}},readUshort:{value:function(){var o=this.view.getUint16(this.index,this.endian);return this.index+=2,o}},readUint:{value:function(){var o=this.view.getUint32(this.index,this.endian);return this.index+=4,o}},readBytes:{value:function(o,r,n){var c=o.view,a=this.index,s=this.view;for((n+=a)>this.length&&(n=this.length);a<n;++a)c.setUint8(r++,s.getUint8(a));this.index=a}},readString:{value:function(o){var r=this.index,n=this.view,c="";for((o+=r)>this.length&&(o=this.length);r<o;++r)c+=String.fromCharCode(n.getUint8(r));return this.index=o,c}},writeAt:{value:function(o,r){this.view.setUint8(o,r)}},writeByte:{value:function(o){this.view.setInt8(this.index++,o)}},writeShort:{value:function(o){this.view.setInt16(this.index,o),this.index+=2}},writeInt:{value:function(o){this.view.setInt32(this.index,o),this.index+=4}}});return e.buffer=i,e.view=new DataView(i),e.length=i.byteLength,Object.seal(e)}function Ho(){return Object.create(null,{l:{value:0,writable:!0},r:{value:0,writable:!0},next:{value:null,writable:!0}})}function Mi(){return Object.create(null,{player:{value:null,writable:!0},channels:{value:[],writable:!0},buffer:{value:[],writable:!0},samplesTick:{value:0,writable:!0},samplesLeft:{value:0,writable:!0},remains:{value:0,writable:!0},completed:{value:0,writable:!0},bufferSize:{get:function(){return this.buffer.length},set:function(i){var t,e=this.buffer.length||0;if(!(i===e||i<512)&&(this.buffer.length=i,i>e))for(this.buffer[e]=Ho(),t=++e;t<i;++t)this.buffer[t]=this.buffer[t-1].next=Ho()}},complete:{get:function(){return this.completed},set:function(i){this.completed=i^this.player.loopSong}},reset:{value:function(){var i=this.channels[0],t=this.buffer[0];for(this.samplesLeft=0,this.remains=0,this.completed=0;i;)i.initialize(),i=i.next;for(;t;)t.l=t.r=0,t=t.next}},restore:{configurable:!0,value:function(){}}})}function xa(){var i=null;return typeof AudioContext<"u"?i=new AudioContext:alert("Web Audio API does not appear to be supported. Use Chrome, Safari or Firefox"),i}function Ti(){var i=Object.create(null,{context:{value:null,writable:!0},node:{value:null,writable:!0},analyser:{value:null,writable:!0},analyse:{value:0,writable:!0},endian:{value:0,writable:!0},sampleRate:{value:0,writable:!0},playSong:{value:0,writable:!0},lastSong:{value:0,writable:!0},version:{value:0,writable:!0},title:{value:"",writable:!0},channels:{value:0,writable:!0},loopSong:{value:0,writable:!0},speed:{value:0,writable:!0},tempo:{value:0,writable:!0},mixer:{value:null,writable:!0},tick:{value:0,writable:!0},paused:{value:0,writable:!0},callback:{value:null,writable:!0},quality:{configurable:!0,set:function(t){this.callback=t?this.mixer.accurate.bind(this.mixer):this.mixer.fast.bind(this.mixer)}},toggle:{value:function(t){this.mixer.channels[t].mute^=1}},setup:{configurable:!0,value:function(){}},load:{value:function(t){return this.version=0,this.playSong=0,this.lastSong=0,this.mixer.restore(),t.view||(t=Qi(t)),t.position=0,t.readUint()===67324752&&window.neoart.Unzip,t.endian=this.endian,t.position=0,this.loader(t),this.version&&this.setup(),this.version}},play:{value:function(){var t,e;this.version&&(this.paused?this.paused=0:(this.initialize(),typeof this.context.createJavaScriptNode=="function"?this.node=this.context.createJavaScriptNode(this.mixer.bufferSize):this.node=this.context.createScriptProcessor(this.mixer.bufferSize),this.analyser=this.context.createAnalyser(),this.node.connect(this.analyser),this.node.onaudioprocess=this.callback),this.analyse&&window.neoart.Flectrum?(e=window.neoart.analyserNode=this.context.createAnalyser(),this.node.connect(e),e.connect(this.context.destination)):this.node.connect(this.context.destination),t=document.createEvent("Event"),t.initEvent("flodPlay",!0,!1),document.dispatchEvent(t))}},pause:{value:function(){if(this.node){this.node.disconnect(),this.paused=1;var t=document.createEvent("Event");t.initEvent("flodPause",!0,!1),document.dispatchEvent(t)}}},stop:{value:function(){if(this.node){this.node.disconnect(),this.node.onaudioprocess=this.node=null,this.paused=0,this.restore&&this.restore();var t=document.createEvent("Event");t.initEvent("flodStop",!0,!1),document.dispatchEvent(t)}}},reset:{value:function(){this.tick=0,this.mixer.initialize(),this.mixer.samplesTick=this.sampleRate*2.5/this.tempo>>0}}});return window.neoart.audioContext||(window.neoart.audioContext=xa()),i.context=window.neoart.audioContext,i.sampleRate=i.context.sampleRate,i}function _i(i){var t=Object.create(null,{next:{value:null,writable:!0},mute:{value:0,writable:!0},panning:{value:0,writable:!0},delay:{value:0,writable:!0},pointer:{value:0,writable:!0},length:{value:0,writable:!0},audena:{value:0,writable:!0},audcnt:{value:0,writable:!0},audloc:{value:0,writable:!0},audper:{value:0,writable:!0},audvol:{value:0,writable:!0},timer:{value:0,writable:!0},level:{value:0,writable:!0},ldata:{value:0,writable:!0},rdata:{value:0,writable:!0},enabled:{get:function(){return this.audena},set:function(e){e!==this.audena&&(this.audena=e,this.audloc=this.pointer,this.audcnt=this.pointer+this.length,this.timer=1,e&&(this.delay+=2))}},period:{set:function(e){e<0?e=0:e>65535&&(e=65535),this.audper=e}},volume:{set:function(e){e<0?e=0:e>64&&(e=64),this.audvol=e}},resetData:{value:function(){this.ldata=0,this.rdata=0}},initialize:{value:function(){this.audena=0,this.audcnt=0,this.audloc=0,this.audper=50,this.audvol=0,this.timer=0,this.ldata=0,this.rdata=0,this.delay=0,this.pointer=0,this.length=0}}});return t.panning=t.level=(++i&2)===0?-1:1,Object.seal(t)}function ya(){return Object.create(null,{active:{value:0,writable:!0},forced:{value:-1,writable:!0},l0:{value:0,writable:!0},l1:{value:0,writable:!0},l2:{value:0,writable:!0},l3:{value:0,writable:!0},l4:{value:0,writable:!0},r0:{value:0,writable:!0},r1:{value:0,writable:!0},r2:{value:0,writable:!0},r3:{value:0,writable:!0},r4:{value:0,writable:!0},initialize:{value:function(){this.l0=this.l1=this.l2=this.l3=this.l4=0,this.r0=this.r1=this.r2=this.r3=this.r4=0}},process:{value:function(i,t){var e=.52133458435322,o=.4860348337215757,r=.9314955486749749,n=1-o;i===0&&(this.l0=o*t.l+n*this.l0,this.r0=o*t.r+n*this.r0,n=1-r,t.l=this.l1=r*this.l0+n*this.l1,t.r=this.r1=r*this.r0+n*this.r1),(this.active|this.forced)>0&&(n=1-e,this.l2=e*t.l+n*this.l2,this.r2=e*t.r+n*this.r2,this.l3=e*this.l2+n*this.l3,this.r3=e*this.r2+n*this.r3,t.l=this.l4=e*this.l3+n*this.l4,t.r=this.r4=e*this.r3+n*this.r4),t.l>1?t.l=1:t.l<-1&&(t.l=-1),t.r>1?t.r=1:t.r<-1&&(t.r=-1)}}})}function Li(){return Object.create(null,{note:{value:0,writable:!0},sample:{value:0,writable:!0},effect:{value:0,writable:!0},param:{value:0,writable:!0}})}function $t(){return Object.create(null,{name:{value:"",writable:!0},length:{value:0,writable:!0},loop:{value:0,writable:!0},repeat:{value:0,writable:!0},volume:{value:0,writable:!0},pointer:{value:0,writable:!0},loopPtr:{value:0,writable:!0}})}function eo(){var i=Mi();return Object.defineProperties(i,{filter:{value:null,writable:!0},model:{value:1,writable:!0},memory:{value:[],writable:!0},loopPtr:{value:0,writable:!0},loopLen:{value:4,writable:!0},clock:{value:0,writable:!0},master:{value:0,writable:!0},ready:{value:0,writable:!0},volume:{set:function(t){t>0?(t>64&&(t=64),this.master=t/64*.00390625):this.master=0}},initialize:{value:function(){var t=this.memory.length,e=t+this.loopLen;if(this.reset(),this.filter.initialize(),!this.ready)for(this.ready=1,this.loopPtr=t;t<e;++t)this.memory[t]=0}},restore:{value:function(){this.ready=0,this.memory.length=0}},store:{value:function(t,e,o){var r,n,c=t.position,a=this.memory.length,s;for(o&&(t.position=o),s=t.position+e,s>=t.length&&(r=s-t.length,e=t.length-t.position),n=a,e+=a;n<e;++n)this.memory[n]=t.readByte();for(e+=r;n<e;++n)this.memory[n]=0;return o&&(t.position=c),a}},fast:{value:function(t){var e,o,r,n=this.memory,c,a=0,s,u=0,d,l,h,m=this.bufferSize,p,f,g;if(this.completed){if(!this.remains){this.player.stop();return}m=this.remains}for(;a<m;){for(this.samplesLeft||(this.player.process(),this.samplesLeft=this.samplesTick,this.completed&&(m=a+this.samplesTick,m>this.bufferSize&&(this.remains=m-this.bufferSize,m=this.bufferSize))),f=this.samplesLeft,a+f>=m&&(f=m-a),s=u+f,e=this.channels[0];e;){if(h=this.buffer[u],e.audena&&e.audper>60)for(p=e.audper/this.clock,g=e.audvol*this.master,c=g*(1-e.level),l=g*(1+e.level),o=u;o<s;++o)e.delay?e.delay--:--e.timer<1&&(e.mute||(g=n[e.audloc]*.0078125,e.ldata=g*c,e.rdata=g*l),e.audloc++,e.timer+=p,e.audloc>=e.audcnt&&(e.audloc=e.pointer,e.audcnt=e.pointer+e.length)),h.l+=e.ldata,h.r+=e.rdata,h=h.next;else for(o=u;o<s;++o)h.l+=e.ldata,h.r+=e.rdata,h=h.next;e=e.next}u=s,a+=f,this.samplesLeft-=f}for(g=this.model,n=this.filter,h=this.buffer[0],r=t.outputBuffer.getChannelData(0),d=t.outputBuffer.getChannelData(1),o=0;o<m;++o)n.process(g,h),r[o]=h.l,d[o]=h.r,h.l=h.r=0,h=h.next}}}),i.channels[0]=_i(0),i.channels[0].next=i.channels[1]=_i(1),i.channels[1].next=i.channels[2]=_i(2),i.channels[2].next=i.channels[3]=_i(3),i.bufferSize=8192,i.filter=ya(),i.master=.00390625,Object.seal(i)}function Fi(i){var t=Ti();return Object.defineProperties(t,{quality:{set:function(e){this.callback=this.mixer.fast.bind(this.mixer)}},stereo:{set:function(e){var o=this.mixer.channels[0];for(e<0?e=0:e>1&&(e=1);o;)o.level=e*o.panning,o=o.next}},volume:{set:function(e){e<0?e=0:e>1&&(e=1),this.mixer.master=e*.00390625}},frequency:{value:function(e){e?(this.mixer.clock=3579545/this.sampleRate,this.mixer.samplesTick=735):(this.mixer.clock=3546895/this.sampleRate,this.mixer.samplesTick=882)}}}),t.mixer=i||eo(),t.mixer.player=t,t.frequency(0),t.channels=4,t.endian=0,t.quality=0,t.speed=6,t.tempo=125,t}function Xo(){return Object.create(null,{next:{value:null,writable:!0},mute:{value:0,writable:!0},enabled:{value:0,writable:!0},sample:{value:null,writable:!0},length:{value:0,writable:!0},index:{value:0,writable:!0},pointer:{value:0,writable:!0},delta:{value:0,writable:!0},fraction:{value:0,writable:!0},speed:{value:0,writable:!0},dir:{value:0,writable:!0},oldSample:{value:null,writable:!0},oldLength:{value:0,writable:!0},oldPointer:{value:0,writable:!0},oldFraction:{value:0,writable:!0},oldSpeed:{value:0,writable:!0},oldDir:{value:0,writable:!0},volume:{value:0,writable:!0},lvol:{value:0,writable:!0},rvol:{value:0,writable:!0},panning:{value:128,writable:!0},lpan:{value:.5,writable:!0},rpan:{value:.5,writable:!0},ldata:{value:0,writable:!0},rdata:{value:0,writable:!0},mixCounter:{value:0,writable:!0},lmixRampU:{value:0,writable:!0},lmixDeltaU:{value:0,writable:!0},rmixRampU:{value:0,writable:!0},rmixDeltaU:{value:0,writable:!0},lmixRampD:{value:0,writable:!0},lmixDeltaD:{value:0,writable:!0},rmixRampD:{value:0,writable:!0},rmixDeltaD:{value:0,writable:!0},volCounter:{value:0,writable:!0},lvolDelta:{value:0,writable:!0},rvolDelta:{value:0,writable:!0},panCounter:{value:0,writable:!0},lpanDelta:{value:0,writable:!0},rpanDelta:{value:0,writable:!0},initialize:{value:function(){this.enabled=0,this.sample=null,this.length=0,this.index=0,this.pointer=0,this.delta=0,this.fraction=0,this.speed=0,this.dir=0,this.oldSample=null,this.oldLength=0,this.oldPointer=0,this.oldFraction=0,this.oldSpeed=0,this.oldDir=0,this.volume=0,this.lvol=0,this.rvol=0,this.panning=128,this.lpan=.5,this.rpan=.5,this.ldata=0,this.rdata=0,this.mixCounter=0,this.lmixRampU=0,this.lmixDeltaU=0,this.rmixRampU=0,this.rmixDeltaU=0,this.lmixRampD=0,this.lmixDeltaD=0,this.rmixRampD=0,this.rmixDeltaD=0,this.volCounter=0,this.lvolDelta=0,this.rvolDelta=0,this.panCounter=0,this.lpanDelta=0,this.rpanDelta=0}}})}function Go(){return Object.create(null,{name:{value:"",writable:!0},bits:{value:8,writable:!0},volume:{value:0,writable:!0},length:{value:0,writable:!0},data:{value:[],writable:!0},loopMode:{value:0,writable:!0},loopStart:{value:0,writable:!0},loopLen:{value:0,writable:!0},store:{value:function(i){var t=0,e,o=this.length,r,n,c,a;if(this.loopLen||(this.loopMode=0),r=i.position,this.loopMode?(o=this.loopStart+this.loopLen,this.data=new Float32Array(o+1)):this.data=new Float32Array(this.length+1),this.bits===8)for(c=r+o,c>i.length&&(o=i.length-r),e=0;e<o;e++)a=i.readByte()+t,a<-128?a+=256:a>127&&(a-=256),this.data[e]=a*.0078125,t=a;else for(c=r+(o<<1),c>i.length&&(o=i.length-r>>1),e=0;e<o;e++)a=i.readShort()+t,a<-32768?a+=65536:a>32767&&(a-=65536),this.data[e]=a*3051758e-11,t=a;if(c=r+this.length,this.loopMode?(this.length=this.loopStart+this.loopLen,this.loopMode===1?this.data[o]=this.data[this.loopStart]:this.data[o]=this.data[o-1]):this.data[this.length]=0,o!==this.length)for(n=this.data[o-1],e=o;e<this.length;e++)this.data[e]=n;c<i.length?i.position=c:i.position=i.length-1}}})}function wa(){var i=Mi();return Object.defineProperties(i,{setup:{value:function(t){var e=1;for(this.channels.length=t,this.channels[0]=Xo();e<t;++e)this.channels[e]=this.channels[e-1].next=Xo()}},initialize:{value:function(){this.reset()}},fast:{value:function(t){var e,o,r,n,c=0,a,s=0,u,d,l,h=this.bufferSize,m,p;if(this.completed){if(!this.remains){this.player.stop();return}h=this.remains}for(;c<h;){for(this.samplesLeft||(this.player.process(),this.player.fast(),this.samplesLeft=this.samplesTick,this.completed&&(h=c+this.samplesTick,h>this.bufferSize&&(this.remains=h-this.bufferSize,h=this.bufferSize))),m=this.samplesLeft,c+m>=h&&(m=h-c),a=s+m,e=this.channels[0];e;){if(!e.enabled){e=e.next;continue}for(d=e.sample,o=d.data,l=this.buffer[s],n=s;n<a;++n){if(e.index!==e.pointer){if(e.index>=e.length)if(d.loopMode)e.pointer=d.loopStart+(e.index-e.length),e.length=d.length,d.loopMode===2&&(e.dir?e.dir=0:e.dir=d.length+d.loopStart-1);else{e.enabled=0;break}else e.pointer=e.index;e.mute?(e.ldata=0,e.rdata=0):(e.dir?p=o[e.dir-e.pointer]:p=o[e.pointer],e.ldata=p*e.lvol,e.rdata=p*e.rvol)}e.index=e.pointer+e.delta,(e.fraction+=e.speed)>=1&&(e.index++,e.fraction--),l.l+=e.ldata,l.r+=e.rdata,l=l.next}e=e.next}s=a,c+=m,this.samplesLeft-=m}for(l=this.buffer[0],r=t.outputBuffer.getChannelData(0),u=t.outputBuffer.getChannelData(1),n=0;n<h;++n)l.l>1?l.l=1:l.l<-1&&(l.l=-1),l.r>1?l.r=1:l.r<-1&&(l.r=-1),r[n]=l.l,u[n]=l.r,l.l=l.r=0,l=l.next}},accurate:{value:function(t){var e,o,r,n,c,a,s=0,u,d=0,l,h,m,p,f,g=this.bufferSize,k,y;if(this.completed){if(!this.remains){this.player.stop();return}g=this.remains}for(;s<g;){for(this.samplesLeft||(this.player.process(),this.player.accurate(),this.samplesLeft=this.samplesTick,this.completed&&(g=s+this.samplesTick,g>this.bufferSize&&(this.remains=g-this.bufferSize,g=this.bufferSize))),k=this.samplesLeft,s+k>=g&&(k=g-s),u=d+k,e=this.channels[0];e;){if(!e.enabled){e=e.next;continue}for(m=e.sample,o=m.data,p=e.oldSample,p&&(r=p.data),f=this.buffer[d],a=d;a<u;++a){if(y=e.mute?0:o[e.pointer],y+=(o[e.pointer+e.dir]-y)*e.fraction,(e.fraction+=e.speed)>=1&&(c=e.fraction>>0,e.fraction-=c,e.dir>0?(e.pointer+=c,e.pointer>e.length&&(e.fraction+=e.pointer-e.length,e.pointer=e.length)):(e.pointer-=c,e.pointer<e.length&&(e.fraction+=e.length-e.pointer,e.pointer=e.length))),e.mixCounter?(p?(l=e.mute?0:r[e.oldPointer],l+=(r[e.oldPointer+e.oldDir]-l)*e.oldFraction,(e.oldFraction+=e.oldSpeed)>1&&(c=e.oldFraction>>0,e.oldFraction-=c,e.oldDir>0?(e.oldPointer+=c,e.oldPointer>e.oldLength&&(e.oldFraction+=e.oldPointer-e.oldLength,e.oldPointer=e.oldLength)):(e.oldPointer-=c,e.oldPointer<e.oldLength&&(e.oldFraction+=e.oldLength-e.oldPointer,e.oldPointer=e.oldLength))),f.l+=y*e.lmixRampU+l*e.lmixRampD,f.r+=y*e.rmixRampU+l*e.rmixRampD,e.lmixRampD-=e.lmixDeltaD,e.rmixRampD-=e.rmixDeltaD):(f.l+=y*e.lmixRampU,f.r+=y*e.rmixRampU),e.lmixRampU+=e.lmixDeltaU,e.rmixRampU+=e.rmixDeltaU,e.mixCounter--,e.oldPointer===e.oldLength&&(p.loopMode?p.loopMode===1?(e.oldPointer=p.loopStart,e.oldLength=p.length):e.oldDir>0?(e.oldPointer=p.length-1,e.oldLength=p.loopStart,e.oldDir=-1):(e.oldFraction-=1,e.oldPointer=p.loopStart,e.oldLength=p.length,e.oldDir=1):(p=null,e.oldPointer=0))):(f.l+=y*e.lvol,f.r+=y*e.rvol,e.volCounter?(e.lvol+=e.lvolDelta,e.rvol+=e.rvolDelta,e.volCounter--):e.panCounter&&(e.lpan+=e.lpanDelta,e.rpan+=e.rpanDelta,e.panCounter--,e.lvol=e.volume*e.lpan,e.rvol=e.volume*e.rpan)),e.pointer===e.length)if(m.loopMode)m.loopMode===1?(e.pointer=m.loopStart,e.length=m.length):e.dir>0?(e.pointer=m.length-1,e.length=m.loopStart,e.dir=-1):(e.fraction-=1,e.pointer=m.loopStart,e.length=m.length,e.dir=1);else{e.enabled=0;break}f=f.next}e=e.next}d=u,s+=k,this.samplesLeft-=k}for(f=this.buffer[0],n=t.outputBuffer.getChannelData(0),h=t.outputBuffer.getChannelData(1),a=0;a<g;++a)f.l>1?f.l=1:f.l<-1&&(f.l=-1),f.r>1?f.r=1:f.r<-1&&(f.r=-1),n[a]=f.l,h[a]=f.r,f.l=f.r=0,f=f.next}}}),i.bufferSize=8192,Object.seal(i)}function Vo(i){var t=Ti();return Object.defineProperties(t,{track:{value:null,writable:!0},length:{value:0,writable:!0},restart:{value:0,writable:!0},timer:{value:0,writable:!0},master:{value:0,writable:!0},volume:{set:function(e){e<0?e=0:e>1&&(e=1),this.master=e*64}},setup:{configurable:!1,value:function(){this.mixer.setup(this.channels)}}}),t.mixer=i||wa(),t.mixer.player=t,t.endian=1,t.quality=1,t}function ka(i){var t=Object.create(null,{index:{value:i,writable:!0},next:{value:null,writable:!0},flags:{value:0,writable:!0},delay:{value:0,writable:!0},channel:{value:null,writable:!0},patternLoop:{value:0,writable:!0},patternLoopRow:{value:0,writable:!0},playing:{value:null,writable:!0},note:{value:0,writable:!0},keyoff:{value:0,writable:!0},period:{value:0,writable:!0},finetune:{value:0,writable:!0},arpDelta:{value:0,writable:!0},vibDelta:{value:0,writable:!0},instrument:{value:null,writable:!0},autoVibratoPos:{value:0,writable:!0},autoSweep:{value:0,writable:!0},autoSweepPos:{value:0,writable:!0},sample:{value:null,writable:!0},sampleOffset:{value:0,writable:!0},volume:{value:0,writable:!0},volEnabled:{value:0,writable:!0},volEnvelope:{value:null,writable:!0},volDelta:{value:0,writable:!0},volSlide:{value:0,writable:!0},volSlideMaster:{value:0,writable:!0},fineSlideU:{value:0,writable:!0},fineSlideD:{value:0,writable:!0},fadeEnabled:{value:0,writable:!0},fadeDelta:{value:0,writable:!0},fadeVolume:{value:0,writable:!0},panning:{value:0,writable:!0},panEnabled:{value:0,writable:!0},panEnvelope:{value:null,writable:!0},panSlide:{value:0,writable:!0},portaU:{value:0,writable:!0},portaD:{value:0,writable:!0},finePortaU:{value:0,writable:!0},finePortaD:{value:0,writable:!0},xtraPortaU:{value:0,writable:!0},xtraPortaD:{value:0,writable:!0},portaPeriod:{value:0,writable:!0},portaSpeed:{value:0,writable:!0},glissando:{value:0,writable:!0},glissPeriod:{value:0,writable:!0},vibratoPos:{value:0,writable:!0},vibratoSpeed:{value:0,writable:!0},vibratoDepth:{value:0,writable:!0},vibratoReset:{value:0,writable:!0},tremoloPos:{value:0,writable:!0},tremoloSpeed:{value:0,writable:!0},tremoloDepth:{value:0,writable:!0},waveControl:{value:0,writable:!0},tremorPos:{value:0,writable:!0},tremorOn:{value:0,writable:!0},tremorOff:{value:0,writable:!0},tremorVolume:{value:0,writable:!0},retrigx:{value:0,writable:!0},retrigy:{value:0,writable:!0},rowCurrent:{value:null,writable:!0},reset:{value:function(){this.volume=this.sample.volume,this.panning=this.sample.panning,this.finetune=this.sample.finetune>>3<<2,this.keyoff=0,this.volDelta=0,this.fadeEnabled=0,this.fadeDelta=0,this.rowCurrent=null,this.fadeVolume=65536,this.autoVibratoPos=0,this.autoSweep=1,this.autoSweepPos=0,this.vibDelta=0,this.vibratoReset=0,(this.waveControl&15)<4&&(this.vibratoPos=0),this.waveControl>>4<4&&(this.tremoloPos=0)}},autoVibrato:{value:function(){var e;switch(this.autoVibratoPos=this.autoVibratoPos+this.playing.vibratoSpeed&255,this.playing.vibratoType){case 0:e=Ta[this.autoVibratoPos];break;case 1:this.autoVibratoPos<128?e=-64:e=64;break;case 2:e=(64+(this.autoVibratoPos>>1)&127)-64;break;case 3:e=(64-(this.autoVibratoPos>>1)&127)-64;break;default:break}return e*=this.playing.vibratoDepth,this.autoSweep&&(this.playing.vibratoSweep?this.autoSweepPos>this.playing.vibratoSweep?(this.autoSweepPos&2&&(e*=this.autoSweepPos/this.playing.vibratoSweep),this.autoSweep=0):e*=++this.autoSweepPos/this.playing.vibratoSweep:this.autoSweep=0),this.flags|=he,e>>6}},tonePortamento:{value:function(){this.glissPeriod||(this.glissPeriod=this.period),this.period<this.portaPeriod?(this.glissPeriod+=this.portaSpeed<<2,this.glissando?this.period=Math.round(this.glissPeriod/64)<<6:this.period=this.glissPeriod,this.period>=this.portaPeriod&&(this.period=this.portaPeriod,this.glissPeriod=this.portaPeriod=0)):this.period>this.portaPeriod&&(this.glissPeriod-=this.portaSpeed<<2,this.glissando?this.period=Math.round(this.glissPeriod/64)<<6:this.period=this.glissPeriod,this.period<=this.portaPeriod&&(this.period=this.portaPeriod,this.glissPeriod=this.portaPeriod=0)),this.flags|=he}},tremolo:{value:function(){var e=255,o=this.tremoloPos&31;switch(this.waveControl>>4&3){case 0:e=er[o];break;case 1:e=o<<3;break;default:break}this.volDelta=e*this.tremoloDepth>>6,this.tremoloPos>31&&(this.volDelta=-this.volDelta),this.tremoloPos=this.tremoloPos+this.tremoloSpeed&63,this.flags|=Y}},tremor:{value:function(){this.tremorPos===this.tremorOn?(this.tremorVolume=this.volume,this.volume=0,this.flags|=Y):(this.tremorPos=0,this.volume=this.tremorVolume,this.flags|=Y),this.tremorPos++}},vibrato:{value:function(){var e=255,o=this.vibratoPos&31;switch(this.waveControl&3){case 0:e=er[o];break;case 1:e=o<<3,this.vibratoPos>31&&(e=255-e);break;default:break}this.vibDelta=e*this.vibratoDepth>>7,this.vibratoPos>31&&(this.vibDelta=-this.vibDelta),this.vibratoPos=this.vibratoPos+this.vibratoSpeed&63,this.flags|=he}}});return t.volEnvelope=Wo(),t.panEnvelope=Wo(),Object.seal(t)}function Ii(){return Object.create(null,{points:{value:[],writable:!0},total:{value:0,writable:!0},sustain:{value:0,writable:!0},loopStart:{value:0,writable:!0},loopEnd:{value:0,writable:!0},flags:{value:0,writable:!0}})}function Wo(){return Object.create(null,{value:{value:0,writable:!0},position:{value:0,writable:!0},frame:{value:0,writable:!0},delta:{value:0,writable:!0},fraction:{value:0,writable:!0},stopped:{value:0,writable:!0},reset:{value:function(){this.value=0,this.position=0,this.frame=0,this.delta=0,this.fraction=0,this.stopped=0}}})}function Yo(){var i=Object.create(null,{name:{value:"",writable:!0},samples:{value:[],writable:!0},noteSamples:{value:null,writable:!0},fadeout:{value:0,writable:!0},volData:{value:null,writable:!0},volEnabled:{value:0,writable:!0},panData:{value:null,writable:!0},panEnabled:{value:0,writable:!0},vibratoType:{value:0,writable:!0},vibratoSweep:{value:0,writable:!0},vibratoSpeed:{value:0,writable:!0},vibratoDepth:{value:0,writable:!0}});return i.noteSamples=new Uint8Array(96),i.volData=Ii(),i.panData=Ii(),Object.seal(i)}function Ko(i,t){var e=Object.create(null,{rows:{value:[],writable:!0},length:{value:0,writable:!0},size:{value:0,writable:!0}});return e.rows.length=e.size=i*t,e.length=i,Object.seal(e)}function Ai(i,t){var e=Object.create(null,{frame:{value:0,writable:!0},value:{value:0,writable:!0}});return e.frame=i||0,e.value=t||0,Object.seal(e)}function to(){return Object.create(null,{note:{value:0,writable:!0},instrument:{value:0,writable:!0},volume:{value:0,writable:!0},effect:{value:0,writable:!0},param:{value:0,writable:!0}})}function Jo(){var i=Go();return Object.defineProperties(i,{finetune:{value:0,writable:!0},panning:{value:0,writable:!0},relative:{value:0,writable:!0}}),Object.seal(i)}function Sa(i){var t=Vo(i);return Object.defineProperties(t,{id:{value:"F2Player"},patterns:{value:[],writable:!0},instruments:{value:[],writable:!0},voices:{value:[],writable:!0},linear:{value:0,writable:!0},complete:{value:0,writable:!0},order:{value:0,writable:!0},position:{value:0,writable:!0},nextOrder:{value:0,writable:!0},nextPosition:{value:0,writable:!0},pattern:{value:null,writable:!0},patternDelay:{value:0,writable:!0},patternOffset:{value:0,writable:!0},timer:{value:0,writable:!0},rowCurrent:{value:0,writable:!0},initialize:{value:function(){var e=0,o;for(this.reset(),this.timer=this.speed,this.order=0,this.position=0,this.nextOrder=-1,this.nextPosition=-1,this.patternDelay=0,this.patternOffset=0,this.complete=0,this.master=64,this.voices.length=this.channels;e<this.channels;++e)o=ka(e),o.channel=this.mixer.channels[e],o.playing=this.instruments[0],o.sample=o.playing.samples[0],this.voices[e]=o,e&&(this.voices[e-1].next=o)}},loader:{value:function(e){var o,r,n,c,a,s,u,d,l,h,m=22,p,f,g,k;if(!(e.length<360)){if(e.position=17,this.title=e.readString(20),e.position++,n=e.readString(20),n==="FastTracker v2.00   "||n==="FastTracker v 2.00  ")this.version=1;else if(n==="Sk@le Tracker")m=2,this.version=2;else if(n==="MadTracker 2.0")this.version=3;else if(n==="MilkyTracker        ")this.version=4;else if(n==="DigiBooster Pro 2.18")this.version=5;else if(n.indexOf("OpenMPT")!==-1)this.version=6;else return;for(e.readUshort(),o=e.readUint(),this.length=e.readUshort(),this.restart=e.readUshort(),this.channels=e.readUshort(),k=f=e.readUshort(),this.instruments=[],this.instruments.length=e.readUshort()+1,this.linear=e.readUshort(),this.speed=e.readUshort(),this.tempo=e.readUshort(),this.track=new Uint8Array(this.length),r=0;r<this.length;++r)u=e.readUbyte(),u>=k&&(f=u+1),this.track[r]=u;if(this.patterns=[],this.patterns.length=f,f!==k){for(l=Ko(64,this.channels),u=l.size,r=0;r<u;++r)l.rows[r]=to();this.patterns[--f]=l}for(e.position=h=o+60,d=k,r=0;r<d;++r){if(o=e.readUint(),e.position++,l=Ko(e.readUshort(),this.channels),f=l.size,k=e.readUshort(),e.position=h+o,s=e.position+k,k)for(u=0;u<f;++u)p=to(),k=e.readUbyte(),k&128?(k&1&&(p.note=e.readUbyte()),k&2&&(p.instrument=e.readUbyte()),k&4&&(p.volume=e.readUbyte()),k&8&&(p.effect=e.readUbyte()),k&16&&(p.param=e.readUbyte())):(p.note=k,p.instrument=e.readUbyte(),p.volume=e.readUbyte(),p.effect=e.readUbyte(),p.param=e.readUbyte()),p.note!==io&&p.note>96&&(p.note=0),l.rows[u]=p;else for(u=0;u<f;++u)l.rows[u]=to();this.patterns[r]=l,h=e.position,h!==s&&(h=e.position=s)}for(s=e.position,d=this.instruments.length,r=1;r<d&&(c=e.readUint(),!(e.position+c>=e.length));++r){if(a=Yo(),a.name=e.readString(22),e.position++,k=e.readUshort(),k>16&&(k=16),o=e.readUint(),m===2&&o!==64&&(o=64),k){for(a.samples=[],a.samples.length=k,u=0;u<96;++u)a.noteSamples[u]=e.readUbyte();for(u=0;u<12;++u)a.volData.points[u]=Ai(e.readUshort(),e.readUshort());for(u=0;u<12;++u)a.panData.points[u]=Ai(e.readUshort(),e.readUshort());for(a.volData.total=e.readUbyte(),a.panData.total=e.readUbyte(),a.volData.sustain=e.readUbyte(),a.volData.loopStart=e.readUbyte(),a.volData.loopEnd=e.readUbyte(),a.panData.sustain=e.readUbyte(),a.panData.loopStart=e.readUbyte(),a.panData.loopEnd=e.readUbyte(),a.volData.flags=e.readUbyte(),a.panData.flags=e.readUbyte(),a.volData.flags&Zo&&(a.volEnabled=1),a.panData.flags&Zo&&(a.panEnabled=1),a.vibratoType=e.readUbyte(),a.vibratoSweep=e.readUbyte(),a.vibratoDepth=e.readUbyte(),a.vibratoSpeed=e.readUbyte(),a.fadeout=e.readUshort()<<1,e.position+=m,h=e.position,this.instruments[r]=a,u=0;u<k;++u)g=Jo(),g.length=e.readUint(),g.loopStart=e.readUint(),g.loopLen=e.readUint(),g.volume=e.readUbyte(),g.finetune=e.readByte(),g.loopMode=e.readUbyte(),g.panning=e.readUbyte(),g.relative=e.readByte(),e.position++,g.name=e.readString(22),a.samples[u]=g,e.position=h+=o;for(u=0;u<k;++u)g=a.samples[u],g.length&&(h=e.position+g.length,g.loopMode&16&&(g.bits=16,g.loopMode^=16,g.length>>=1,g.loopStart>>=1,g.loopLen>>=1),g.loopLen||(g.loopMode=0),g.store(e),g.loopMode&&(g.length=g.loopStart+g.loopLen),e.position=h)}else e.position=s+c;if(s=e.position,s>=e.length)break}for(a=Yo(),a.volData=Ii(),a.panData=Ii(),a.samples=[],r=0;r<12;++r)a.volData.points[r]=Ai(),a.panData.points[r]=Ai();for(g=Jo(),g.length=220,g.data=new Float32Array(220),r=0;r<220;++r)g.data[r]=0;a.samples[0]=g,this.instruments[0]=a}}},process:{value:function(){var e,o,r,n,c,a,s,u,d,l,h,m,p,f=this.voices[0];if(this.tick)for(;f;){if(l=this.pattern.rows[this.position+f.index],f.delay)if((l.param&15)===this.tick)f.flags=f.delay,f.delay=0;else{f=f.next;continue}if(l.volume)switch(s=l.volume>>4,u=l.volume&15,s){case 6:f.volume-=u,f.volume<0&&(f.volume=0),f.flags|=Y;break;case 7:f.volume+=u,f.volume>64&&(f.volume=64),f.flags|=Y;break;case 11:f.vibrato();break;case 13:f.panning-=u,f.panning<0&&(f.panning=0),f.flags|=Me;break;case 14:f.panning+=u,f.panning>255&&(f.panning=255),f.flags|=Me;break;case 15:f.portaPeriod&&f.tonePortamento();break;default:break}switch(s=l.param>>4,u=l.param&15,l.effect){case 0:if(!l.param)break;p=(this.tick-this.timer)%3,p<0&&(p+=3),this.tick===2&&this.timer===18&&(p=0),p?p===1?this.linear?f.arpDelta=-(u<<6):(p=this.amiga(f.note+u,f.finetune),f.arpDelta=p-f.period):this.linear?f.arpDelta=-(s<<6):(p=this.amiga(f.note+s,f.finetune),f.arpDelta=p-f.period):f.arpDelta=0,f.flags|=he;break;case 1:f.period-=f.portaU,f.period<0&&(f.period=0),f.flags|=he;break;case 2:f.period+=f.portaD,f.period>9212&&(f.period=9212),f.flags|=he;break;case 3:f.portaPeriod&&f.tonePortamento();break;case 4:s&&(f.vibratoSpeed=s),u&&(f.vibratoDepth=u<<2),f.vibrato();break;case 5:m=1,f.portaPeriod&&f.tonePortamento();break;case 6:m=1,f.vibrato();break;case 7:f.tremolo();break;case 10:m=1;break;case 14:switch(s){case 9:this.tick%u===0&&(f.volEnvelope.reset(),f.panEnvelope.reset(),f.flags|=Y|Me|vt);break;case 12:this.tick===u&&(f.volume=0,f.flags|=Y);break;default:break}break;case 17:s=f.volSlideMaster>>4,u=f.volSlideMaster&15,s?(this.master+=s,this.master>64&&(this.master=64),f.flags|=Y):u&&(this.master-=u,this.master<0&&(this.master=0),f.flags|=Y);break;case 20:this.tick===l.param&&(f.fadeEnabled=1,f.keyoff=1);break;case 24:s=f.panSlide>>4,u=f.panSlide&15,s?(f.panning+=s,f.panning>255&&(f.panning=255),f.flags|=Me):u&&(f.panning-=u,f.panning<0&&(f.panning=0),f.flags|=Me);break;case 27:if(e=this.tick,l.volume||e++,e%f.retrigy)break;(!l.volume||l.volume>80)&&f.retrigx&&this.retrig(f),f.flags|=vt;break;case 29:f.tremor();break;default:break}m&&(s=f.volSlide>>4,u=f.volSlide&15,m=0,s?(f.volume+=s,f.flags|=Y):u&&(f.volume-=u,f.flags|=Y)),f=f.next}else for(this.nextOrder>=0&&(this.order=this.nextOrder),this.nextPosition>=0&&(this.position=this.nextPosition),this.nextOrder=this.nextPosition=-1,this.pattern=this.patterns[this.track[this.order]];f;){if(this.rowCurrent=this.position+f.index,l=this.pattern.rows[this.rowCurrent],e=l.volume>>4,d=l.effect===3||l.effect===5||e===15,s=l.param>>4,f.keyoff=0,f.arpDelta&&(f.arpDelta=0,f.flags|=he),l.instrument?(f.instrument=l.instrument<this.instruments.length?this.instruments[l.instrument]:null,f.volEnvelope.reset(),f.panEnvelope.reset(),f.flags|=Y|Me|lt):(l.note===io||l.effect===20&&!l.param)&&(f.fadeEnabled=1,f.keyoff=1),l.note&&l.note!==io?f.instrument?(r=f.instrument,p=l.note-1,h=r.samples[r.noteSamples[p]],p+=h.relative,p>=Pa&&p<=Ma&&(d||(f.note=p,f.sample=h,l.instrument?(f.volEnabled=r.volEnabled,f.panEnabled=r.panEnabled,f.flags|=Ea):f.flags|=he|vt),l.instrument?(f.reset(),f.fadeDelta=r.fadeout):f.finetune=h.finetune>>3<<2,l.effect===14&&s===5&&(f.finetune=(l.param&15)-8<<3),this.linear?p=(120-p<<6)-f.finetune:p=this.amiga(p,f.finetune),d?f.portaPeriod=p:(f.period=p,f.glissPeriod=0))):(f.volume=0,f.flags=Y|lt):f.vibratoReset&&l.effect!==4&&l.effect!==6&&(f.vibDelta=0,f.vibratoReset=0,f.flags|=he),l.volume)if(l.volume>=16&&l.volume<=80)f.volume=l.volume-16,f.flags|=Y|lt;else switch(u=l.volume&15,e){case 6:f.volume-=u,f.volume<0&&(f.volume=0),f.flags|=Y;break;case 7:f.volume+=u,f.volume>64&&(f.volume=64),f.flags|=Y;break;case 10:u&&(f.vibratoSpeed=u);break;case 11:u&&(f.vibratoDepth=u<<2);break;case 12:f.panning=u<<4,f.flags|=Me;break;case 15:u&&(f.portaSpeed=u<<4);break;default:break}if(l.effect)switch(u=l.param&15,l.effect){case 1:l.param&&(f.portaU=l.param<<2);break;case 2:l.param&&(f.portaD=l.param<<2);break;case 3:l.param&&e!==15&&(f.portaSpeed=l.param);break;case 4:f.vibratoReset=1;break;case 5:l.param&&(f.volSlide=l.param);break;case 6:l.param&&(f.volSlide=l.param),f.vibratoReset=1;break;case 7:s&&(f.tremoloSpeed=s),u&&(f.tremoloDepth=u);break;case 8:f.panning=l.param,f.flags|=Me;break;case 9:l.param&&(f.sampleOffset=l.param<<8),f.sampleOffset>=f.sample.length&&(f.volume=0,f.sampleOffset=0,f.flags&=~(he|vt),f.flags|=Y|lt);break;case 10:l.param&&(f.volSlide=l.param);break;case 11:this.nextOrder=l.param,this.nextOrder>=this.length?this.complete=1:this.nextPosition=0,c=1,this.patternOffset=0;break;case 12:f.volume=l.param,f.flags|=Y|lt;break;case 13:this.nextPosition=(s*10+u)*this.channels,this.patternOffset=0,c||(this.nextOrder=this.order+1,this.nextOrder>=this.length&&(this.complete=1,this.nextPosition=-1));break;case 14:switch(s){case 1:u&&(f.finePortaU=u<<2),f.period-=f.finePortaU,f.flags|=he;break;case 2:u&&(f.finePortaD=u<<2),f.period+=f.finePortaD,f.flags|=he;break;case 3:f.glissando=u;break;case 4:f.waveControl=f.waveControl&240|u;break;case 6:u?(f.patternLoop?f.patternLoop--:f.patternLoop=u,f.patternLoop&&(this.nextPosition=f.patternLoopRow)):f.patternLoopRow=this.patternOffset=this.position;break;case 7:f.waveControl=f.waveControl&15|u<<4;break;case 10:u&&(f.fineSlideU=u),f.volume+=f.fineSlideU,f.flags|=Y;break;case 11:u&&(f.fineSlideD=u),f.volume-=f.fineSlideD,f.flags|=Y;break;case 13:f.delay=f.flags,f.flags=0;break;case 14:this.patternDelay=u*this.timer;break;default:break}break;case 15:if(!l.param)break;l.param<32?this.timer=l.param:this.mixer.samplesTick=this.sampleRate*2.5/l.param>>0;break;case 16:this.master=l.param,this.master>64&&(this.master=64),f.flags|=Y;break;case 17:l.param&&(f.volSlideMaster=l.param);break;case 21:if(!f.instrument||!f.instrument.volEnabled)break;for(r=f.instrument,p=l.param,s=r.volData.total,n=0;n<s&&!(p<r.volData.points[n].frame);n++);f.volEnvelope.position=--n,s--,r.volData.flags&Qo&&n===r.volData.loopEnd&&(n=f.volEnvelope.position=r.volData.loopStart,p=r.volData.points[n].frame,f.volEnvelope.frame=p),n>=s?(f.volEnvelope.value=r.volData.points[s].value,f.volEnvelope.stopped=1):(f.volEnvelope.stopped=0,f.volEnvelope.frame=p,p>r.volData.points[n].frame&&f.volEnvelope.position++,o=r.volData.points[n],a=r.volData.points[++n],p=a.frame-o.frame,f.volEnvelope.delta=(p?(a.value-o.value<<8)/p>>0:0)||0,f.volEnvelope.fraction=o.value<<8);break;case 24:l.param&&(f.panSlide=l.param);break;case 27:if(s&&(f.retrigx=s),u&&(f.retrigy=u),!l.volume&&f.retrigy){if(e=this.tick+1,e%f.retrigy)break;l.volume>80&&f.retrigx&&this.retrig(f)}break;case 29:l.param&&(f.tremorOn=++s,f.tremorOff=++u+s);break;case 33:s===1?(u&&(f.xtraPortaU=u),f.period-=f.xtraPortaU,f.flags|=he):s===2&&(u&&(f.xtraPortaD=u),f.period+=f.xtraPortaD,f.flags|=he);break;default:break}f=f.next}++this.tick>=this.timer+this.patternDelay&&(this.patternDelay=this.tick=0,this.nextPosition<0&&(this.nextPosition=this.position+this.channels,(this.nextPosition>=this.pattern.size||this.complete)&&(this.nextOrder=this.order+1,this.nextPosition=this.patternOffset,this.nextOrder>=this.length&&(this.nextOrder=this.restart,this.mixer.complete=1))))}},fast:{value:function(){for(var e,o,r,n,c,a=this.voices[0],s;a;)e=a.channel,r=a.flags,a.flags=0,r&vt&&(e.index=a.sampleOffset,e.pointer=-1,e.dir=0,e.fraction=0,e.sample=a.sample,e.length=a.sample.length,e.enabled=e.sample.data?1:0,a.playing=a.instrument,a.sampleOffset=0),n=a.playing,o=n.vibratoSpeed?a.autoVibrato():0,s=a.volume+a.volDelta,n.volEnabled?(a.volEnabled&&!a.volEnvelope.stopped&&this.envelope(a,a.volEnvelope,n.volData),s=s*a.volEnvelope.value>>6,r|=Y,a.fadeEnabled&&(a.fadeVolume-=a.fadeDelta,a.fadeVolume<0?(s=0,a.fadeVolume=0,a.fadeEnabled=0,a.volEnvelope.value=0,a.volEnvelope.stopped=1,a.panEnvelope.stopped=1):s=s*a.fadeVolume>>16)):a.keyoff&&(s=0,r|=Y),c=a.panning,n.panEnabled&&(a.panEnabled&&!a.panEnvelope.stopped&&this.envelope(a,a.panEnvelope,n.panData),c=a.panEnvelope.value<<2,r|=Me,c<0?c=0:c>255&&(c=255)),r&Y&&(s<0?s=0:s>64&&(s=64),e.volume=tr[s*this.master>>6],e.lvol=e.volume*e.lpan,e.rvol=e.volume*e.rpan),r&Me&&(e.panning=c,e.lpan=xt[256-c],e.rpan=xt[c],e.lvol=e.volume*e.lpan,e.rvol=e.volume*e.rpan),r&he&&(o+=a.period+a.arpDelta+a.vibDelta,this.linear?e.speed=(548077568*Math.pow(2,(4608-o)/768)/this.sampleRate>>0)/65536:e.speed=(65536*(14317456/o)/this.sampleRate>>0)/65536,e.delta=e.speed>>0,e.speed-=e.delta),a=a.next}},accurate:{value:function(){for(var e,o,r,n,c,a,s,u,d,l=this.voices[0],h;l;){if(e=l.channel,r=l.flags,l.flags=0,r&vt&&(e.sample&&(r|=lt,e.mixCounter=220,e.oldSample=null,e.oldPointer=-1,e.enabled&&(e.oldDir=e.dir,e.oldFraction=e.fraction,e.oldSpeed=e.speed,e.oldSample=e.sample,e.oldPointer=e.pointer,e.oldLength=e.length,e.lmixRampD=e.lvol,e.lmixDeltaD=e.lvol/220,e.rmixRampD=e.rvol,e.rmixDeltaD=e.rvol/220)),e.dir=1,e.fraction=0,e.sample=l.sample,e.pointer=l.sampleOffset,e.length=l.sample.length,e.enabled=e.sample.data?1:0,l.playing=l.instrument,l.sampleOffset=0),n=l.playing,o=n.vibratoSpeed?l.autoVibrato():0,h=l.volume+l.volDelta,n.volEnabled?(l.volEnabled&&!l.volEnvelope.stopped&&this.envelope(l,l.volEnvelope,n.volData),h=h*l.volEnvelope.value>>6,r|=Y,l.fadeEnabled&&(l.fadeVolume-=l.fadeDelta,l.fadeVolume<0?(h=0,l.fadeVolume=0,l.fadeEnabled=0,l.volEnvelope.value=0,l.volEnvelope.stopped=1,l.panEnvelope.stopped=1):h=h*l.fadeVolume>>16)):l.keyoff&&(h=0,r|=Y),s=l.panning,n.panEnabled&&(l.panEnabled&&!l.panEnvelope.stopped&&this.envelope(l,l.panEnvelope,n.panData),s=l.panEnvelope.value<<2,r|=Me,s<0?s=0:s>255&&(s=255)),!e.enabled){e.volCounter=0,e.panCounter=0,l=l.next;continue}r&Y&&(h<0?h=0:h>64&&(h=64),h=tr[h*this.master>>6],a=h*xt[256-s],d=h*xt[s],h!==e.volume&&!e.mixCounter?(e.volCounter=r&lt?220:this.mixer.samplesTick,e.lvolDelta=(a-e.lvol)/e.volCounter,e.rvolDelta=(d-e.rvol)/e.volCounter):(e.lvol=a,e.rvol=d),e.volume=h),r&Me&&(c=xt[256-s],u=xt[s],s!==e.panning&&!e.mixCounter&&!e.volCounter?(e.panCounter=this.mixer.samplesTick,e.lpanDelta=(c-e.lpan)/e.panCounter,e.rpanDelta=(u-e.rpan)/e.panCounter):(e.lpan=c,e.rpan=u),e.panning=s),r&he&&(o+=l.period+l.arpDelta+l.vibDelta,this.linear?e.speed=(548077568*Math.pow(2,(4608-o)/768)/this.sampleRate>>0)/65536:e.speed=(65536*(14317456/o)/this.sampleRate>>0)/65536),e.mixCounter&&(e.lmixRampU=0,e.lmixDeltaU=e.lvol/220,e.rmixRampU=0,e.rmixDeltaU=e.rvol/220),l=l.next}}},envelope:{value:function(e,o,r){var n=o.position,c=r.points[n],a;if(o.frame===c.frame){if(r.flags&Qo&&n===r.loopEnd&&(n=o.position=r.loopStart,c=r.points[n],o.frame=c.frame),n===r.total-1){o.value=c.value,o.stopped=1;return}if(r.flags&Ca&&n===r.sustain&&!e.fadeEnabled){o.value=c.value;return}o.position++,a=r.points[o.position],o.delta=(a.value-c.value<<8)/(a.frame-c.frame)>>0||0,o.fraction=c.value<<8}else o.fraction+=o.delta;o.value=o.fraction>>8,o.frame++}},amiga:{value:function(e,o){var r=0,n=oo[++e];return o<0?r=(oo[--e]-n)/64:o>0&&(r=(n-oo[++e])/64),n-r*o>>0}},retrig:{value:function(e){switch(e.retrigx){case 1:e.volume--;break;case 2:e.volume++;break;case 3:e.volume-=4;break;case 4:e.volume-=8;break;case 5:e.volume-=16;break;case 6:e.volume=(e.volume<<1)/3;break;case 7:e.volume>>=1;break;case 8:e.volume=e.sample.volume;break;case 9:e.volume++;break;case 10:e.volume+=2;break;case 11:e.volume+=4;break;case 12:e.volume+=8;break;case 13:e.volume+=16;break;case 14:e.volume=e.volume*3>>1;break;case 15:e.volume<<=1;break;default:break}e.volume<0?e.volume=0:e.volume>64&&(e.volume=64),e.flags|=Y}}}),Object.seal(t)}var he=1,Y=2,Me=4,vt=8,Ea=15,lt=32,Zo=1,Ca=2,Qo=4,Pa=0,Ma=118,io=97,Ta=[0,-2,-3,-5,-6,-8,-9,-11,-12,-14,-16,-17,-19,-20,-22,-23,-24,-26,-27,-29,-30,-32,-33,-34,-36,-37,-38,-39,-41,-42,-43,-44,-45,-46,-47,-48,-49,-50,-51,-52,-53,-54,-55,-56,-56,-57,-58,-59,-59,-60,-60,-61,-61,-62,-62,-62,-63,-63,-63,-64,-64,-64,-64,-64,-64,-64,-64,-64,-64,-64,-63,-63,-63,-62,-62,-62,-61,-61,-60,-60,-59,-59,-58,-57,-56,-56,-55,-54,-53,-52,-51,-50,-49,-48,-47,-46,-45,-44,-43,-42,-41,-39,-38,-37,-36,-34,-33,-32,-30,-29,-27,-26,-24,-23,-22,-20,-19,-17,-16,-14,-12,-11,-9,-8,-6,-5,-3,-2,0,2,3,5,6,8,9,11,12,14,16,17,19,20,22,23,24,26,27,29,30,32,33,34,36,37,38,39,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,56,57,58,59,59,60,60,61,61,62,62,62,63,63,63,64,64,64,64,64,64,64,64,64,64,64,63,63,63,62,62,62,61,61,60,60,59,59,58,57,56,56,55,54,53,52,51,50,49,48,47,46,45,44,43,42,41,39,38,37,36,34,33,32,30,29,27,26,24,23,22,20,19,17,16,14,12,11,9,8,6,5,3,2],er=[0,24,49,74,97,120,141,161,180,197,212,224,235,244,250,253,255,253,250,244,235,224,212,197,180,161,141,120,97,74,49,24],xt=[0,.04417,.062489,.076523,.088371,.098821,.108239,.116927,.124977,.132572,.139741,.146576,.153077,.159335,.16535,.171152,.176772,.18221,.187496,.19263,.197643,.202503,.207273,.211951,.216477,.220943,.225348,.229631,.233854,.237985,.242056,.246066,.249985,.253873,.25767,.261437,.265144,.268819,.272404,.275989,.279482,.282976,.286409,.289781,.293153,.296464,.299714,.302965,.306185,.309344,.312473,.315602,.318671,.321708,.324746,.327754,.3307,.333647,.336563,.339449,.342305,.345161,.347986,.350781,.353545,.356279,.359013,.361717,.364421,.367094,.369737,.37238,.374992,.377574,.380157,.382708,.38526,.387782,.390303,.392794,.395285,.397746,.400176,.402606,.405037,.407437,.409836,.412206,.414576,.416915,.419254,.421563,.423841,.42618,.428458,.430737,.432985,.435263,.437481,.439729,.441916,.444134,.446321,.448508,.450665,.452852,.455009,.457136,.459262,.461389,.463485,.465611,.467708,.469773,.471839,.473935,.47597,.478036,.480072,.482077,.484112,.486117,.488122,.490127,.492101,.494106,.496051,.498025,.5,.501944,.503888,.505802,.507746,.50966,.511574,.513488,.515371,.517255,.519138,.521022,.522905,.524758,.526611,.528465,.530318,.53214,.533993,.535816,.537639,.539462,.541254,.543046,.544839,.546631,.548423,.550216,.551978,.553739,.555501,.557263,.558995,.560757,.562489,.56422,.565952,.567683,.569384,.571116,.572817,.574518,.57622,.57789,.579592,.581262,.582964,.584634,.586305,.587946,.589617,.591257,.592928,.594568,.596209,.597849,.599459,.6011,.60271,.60435,.60596,.60757,.60915,.61076,.61237,.61395,.61556,.617139,.618719,.620268,.621848,.623428,.624977,.626557,.628106,.629655,.631205,.632754,.634303,.635822,.637372,.63889,.64044,.641959,.643478,.644966,.646485,.648004,.649523,.651012,.6525,.653989,.655477,.656966,.658454,.659943,.661431,.66289,.664378,.665836,.667294,.668783,.670241,.671699,.673127,.674585,.676043,.677471,.678929,.680357,.681785,.683213,.684641,.686068,.687496,.688894,.690321,.691749,.693147,.694574,.695972,.697369,.698767,.700164,.701561,.702928,.704326,.705723,.70711],tr=[0,.005863,.013701,.021569,.029406,.037244,.045082,.052919,.060757,.068625,.076463,.0843,.092138,.099976,.107844,.115681,.123519,.131357,.139194,.147032,.1549,.162738,.170575,.178413,.186251,.194119,.201956,.209794,.217632,.225469,.233307,.241175,.249013,.25685,.264688,.272526,.280394,.288231,.296069,.303907,.311744,.319582,.32745,.335288,.343125,.350963,.3588,.366669,.374506,.382344,.390182,.398019,.405857,.413725,.421563,.4294,.437238,.445076,.452944,.460781,.468619,.476457,.484294,.492132,.5],oo=[29024,27392,25856,24384,23040,21696,20480,19328,18240,17216,16256,15360,14512,13696,12928,12192,11520,10848,10240,9664,9120,8608,8128,7680,7256,6848,6464,6096,5760,5424,5120,4832,4560,4304,4064,3840,3628,3424,3232,3048,2880,2712,2560,2416,2280,2152,2032,1920,1814,1712,1616,1524,1440,1356,1280,1208,1140,1076,1016,960,907,856,808,762,720,678,640,604,570,538,508,480,453,428,404,381,360,339,320,302,285,269,254,240,227,214,202,190,180,169,160,151,142,134,127,120,113,107,101,95,90,85,80,75,71,67,63,60,57,53,50,48,45,42,40,38,36,34,32,30,28],ir=Sa;function Di(i){return Object.create(null,{index:{value:i,writable:!0},next:{value:null,writable:!0},channel:{value:null,writable:!0},sample:{value:null,writable:!0},enabled:{value:0,writable:!0},period:{value:0,writable:!0},effect:{value:0,writable:!0},param:{value:0,writable:!0},volume:{value:0,writable:!0},portaDir:{value:0,writable:!0},portaPeriod:{value:0,writable:!0},portaSpeed:{value:0,writable:!0},vibratoPos:{value:0,writable:!0},vibratoSpeed:{value:0,writable:!0},initialize:{value:function(){this.channel=null,this.sample=null,this.enabled=0,this.period=0,this.effect=0,this.param=0,this.volume=0,this.portaDir=0,this.portaPeriod=0,this.portaSpeed=0,this.vibratoPos=0,this.vibratoSpeed=0}}})}function _a(i){var t=Fi(i);return Object.defineProperties(t,{id:{value:"MKPlayer"},track:{value:null,writable:!0},patterns:{value:[],writable:!0},samples:{value:[],writable:!0},length:{value:0,writable:!0},restart:{value:0,writable:!0},voices:{value:[],writable:!0},trackPos:{value:0,writable:!0},patternPos:{value:0,writable:!0},jumpFlag:{value:0,writable:!0},vibratoDepth:{value:0,writable:!0},restartSave:{value:0,writable:!0},force:{set:function(e){e<ro?e=ro:e>ct&&(e=ct),this.version=e,e===ct?this.vibratoDepth=6:this.vibratoDepth=7,e===or?(this.restartSave=this.restart,this.restart=0):(this.restart=this.restartSave,this.restartSave=0)}},initialize:{value:function(){var e=this.voices[0];for(this.reset(),this.force=this.version,this.speed=6,this.trackPos=0,this.patternPos=0,this.jumpFlag=0;e;)e.initialize(),e.channel=this.mixer.channels[e.index],e.sample=this.samples[0],e=e.next}},loader:{value:function(e){var o=0,r,n,c,a,s,u=0,d;if(!(e.length<2106)&&(e.position=1080,n=e.readString(4),!(n!=="M.K."&&n!=="FLT4"))){for(e.position=0,this.title=e.readString(20),this.version=ro,e.position+=22,r=1;r<32;++r){if(d=e.readUshort(),!d){this.samples[r]=null,e.position+=28;continue}s=$t(),e.position-=24,s.name=e.readString(22),s.length=d<<1,e.position+=3,s.volume=e.readUbyte(),s.loop=e.readUshort()<<1,s.repeat=e.readUshort()<<1,e.position+=22,s.pointer=u,u+=s.length,this.samples[r]=s,s.length>32768&&(this.version=La)}for(e.position=950,this.length=e.readUbyte(),d=e.readUbyte(),this.restart=d<this.length?d:0,r=0;r<128;++r)d=e.readUbyte()<<8,this.track[r]=d,d>o&&(o=d);for(e.position=1084,o+=256,this.patterns.length=o,r=0;r<o;++r)if(a=Li(),d=e.readUint(),a.note=d>>16&4095,a.effect=d>>8&15,a.sample=d>>24&240|d>>12&15,a.param=d&255,this.patterns[r]=a,(a.sample>31||!this.samples[a.sample])&&(a.sample=0),(a.effect===3||a.effect===4)&&(this.version=or),(a.effect===5||a.effect===6)&&(this.version=ct),a.effect>6&&a.effect<10){this.version=0;return}for(this.mixer.store(e,u),r=1;r<32;++r)if(s=this.samples[r],!!s)for(s.name.indexOf("2.0")>-1&&(this.version=ct),s.loop?(s.loopPtr=s.pointer+s.loop,s.length=s.loop+s.repeat):(s.loopPtr=this.mixer.memory.length,s.repeat=2),u=s.pointer+4,c=s.pointer;c<u;++c)this.mixer.memory[c]=0;s=$t(),s.pointer=s.loopPtr=this.mixer.memory.length,s.length=s.repeat=2,this.samples[0]=s,this.version<ct&&this.restart!==127&&(this.version=Fa)}}},process:{value:function(){var e,o,r,n,c,a,s,u,d,l=this.voices[0];if(this.tick)for(;l;){if(e=l.channel,!l.effect&&!l.param){e.period=l.period,l=l.next;continue}switch(l.effect){case 0:if(d=this.tick%3,!d){e.period=l.period,l=l.next;continue}for(d===1?d=l.param>>4:d=l.param&15,c=l.period&4095,r=37-d,o=0;o<r;++o)if(c>=rr[o]){e.period=rr[o+d];break}break;case 1:l.period-=l.param,l.period<113&&(l.period=113),e.period=l.period;break;case 2:l.period+=l.param,l.period>856&&(l.period=856),e.period=l.period;break;case 3:case 5:l.effect===5?u=1:l.param&&(l.portaSpeed=l.param,l.param=0),l.portaPeriod&&(l.portaDir?(l.period-=l.portaSpeed,l.period<=l.portaPeriod&&(l.period=l.portaPeriod,l.portaPeriod=0)):(l.period+=l.portaSpeed,l.period>=l.portaPeriod&&(l.period=l.portaPeriod,l.portaPeriod=0))),e.period=l.period;break;case 4:case 6:l.effect===6?u=1:l.param&&(l.vibratoSpeed=l.param),d=l.vibratoPos>>2&31,d=(l.vibratoSpeed&15)*Aa[d]>>this.vibratoDepth,l.vibratoPos>127?e.period=l.period-d:e.period=l.period+d,d=l.vibratoSpeed>>2&60,l.vibratoPos=l.vibratoPos+d&255;break;case 10:u=1;break;default:break}u&&(d=l.param>>4,u=0,d?l.volume+=d:l.volume-=l.param&15,l.volume<0?l.volume=0:l.volume>64&&(l.volume=64),e.volume=l.volume),l=l.next}else for(n=this.track[this.trackPos]+this.patternPos;l;){switch(e=l.channel,l.enabled=0,a=this.patterns[n+l.index],l.effect=a.effect,l.param=a.param,a.sample?(s=l.sample=this.samples[a.sample],e.volume=l.volume=s.volume):s=l.sample,a.note&&(l.effect===3||l.effect===5?a.note<l.period?(l.portaDir=1,l.portaPeriod=a.note):a.note>l.period?(l.portaDir=0,l.portaPeriod=a.note):l.portaPeriod=0:(l.enabled=1,l.vibratoPos=0,e.enabled=0,e.pointer=s.pointer,e.length=s.length,e.period=l.period=a.note)),l.effect){case 11:this.trackPos=l.param-1,this.jumpFlag^=1;break;case 12:e.volume=l.param,this.version===ct&&(l.volume=l.param);break;case 13:this.jumpFlag^=1;break;case 14:this.mixer.filter.active=l.param^1;break;case 15:d=l.param,d<1?d=1:d>31&&(d=31),this.speed=d,this.tick=0;break;default:break}l.enabled&&(e.enabled=1),e.pointer=s.loopPtr,e.length=s.repeat,l=l.next}++this.tick===this.speed&&(this.tick=0,this.patternPos+=4,(this.patternPos===256||this.jumpFlag)&&(this.patternPos=this.jumpFlag=0,this.trackPos=++this.trackPos&127,this.trackPos===this.length&&(this.trackPos=this.restart,this.mixer.complete=1)))}}}),t.voices[0]=Di(0),t.voices[0].next=t.voices[1]=Di(1),t.voices[1].next=t.voices[2]=Di(2),t.voices[2].next=t.voices[3]=Di(3),t.track=new Uint16Array(128),Object.seal(t)}var ro=1,La=2,or=3,Fa=4,ct=5,rr=[856,808,762,720,678,640,604,570,538,508,480,453,428,404,381,360,339,320,302,285,269,254,240,226,214,202,190,180,170,160,151,143,135,127,120,113,0],Aa=[0,24,49,74,97,120,141,161,180,197,212,224,235,244,250,253,255,253,250,244,235,224,212,197,180,161,141,120,97,74,49,24],ar=_a;function Ri(i){return Object.create(null,{index:{value:i,writable:!0},next:{value:null,writable:!0},channel:{value:null,writable:!0},sample:{value:null,writable:!0},enabled:{value:0,writable:!0},loopCtr:{value:0,writable:!0},loopPos:{value:0,writable:!0},step:{value:0,writable:!0},period:{value:0,writable:!0},effect:{value:0,writable:!0},param:{value:0,writable:!0},volume:{value:0,writable:!0},pointer:{value:0,writable:!0},length:{value:0,writable:!0},loopPtr:{value:0,writable:!0},repeat:{value:0,writable:!0},finetune:{value:0,writable:!0},offset:{value:0,writable:!0},portaDir:{value:0,writable:!0},portaPeriod:{value:0,writable:!0},portaSpeed:{value:0,writable:!0},glissando:{value:0,writable:!0},tremoloParam:{value:0,writable:!0},tremoloPos:{value:0,writable:!0},tremoloWave:{value:0,writable:!0},vibratoParam:{value:0,writable:!0},vibratoPos:{value:0,writable:!0},vibratoWave:{value:0,writable:!0},funkPos:{value:0,writable:!0},funkSpeed:{value:0,writable:!0},funkWave:{value:0,writable:!0},initialize:{value:function(){this.channel=null,this.sample=null,this.enabled=0,this.loopCtr=0,this.loopPos=0,this.step=0,this.period=0,this.effect=0,this.param=0,this.volume=0,this.pointer=0,this.length=0,this.loopPtr=0,this.repeat=0,this.finetune=0,this.offset=0,this.portaDir=0,this.portaPeriod=0,this.portaSpeed=0,this.glissando=0,this.tremoloParam=0,this.tremoloPos=0,this.tremoloWave=0,this.vibratoParam=0,this.vibratoPos=0,this.vibratoWave=0,this.funkPos=0,this.funkSpeed=0,this.funkWave=0}}})}function Ia(){var i=Li();return Object.defineProperties(i,{step:{value:0,writable:!0}}),Object.seal(i)}function nr(){var i=$t();return Object.defineProperties(i,{finetune:{value:0,writable:!0},realLen:{value:0,writable:!0}}),Object.seal(i)}function Da(i){var t=Fi(i);return Object.defineProperties(t,{id:{value:"PTPlayer"},track:{value:null,writable:!0},patterns:{value:[],writable:!0},samples:{value:[],writable:!0},length:{value:0,writable:!0},voices:{value:[],writable:!0},trackPos:{value:0,writable:!0},patternPos:{value:0,writable:!0},patternBreak:{value:0,writable:!0},patternDelay:{value:0,writable:!0},breakPos:{value:0,writable:!0},jumpFlag:{value:0,writable:!0},vibratoDepth:{value:0,writable:!0},force:{set:function(e){e<zi?e=zi:e>ao&&(e=ao),this.version=e,e<sr?this.vibratoDepth=6:this.vibratoDepth=7}},initialize:{value:function(){var e=this.voices[0];for(this.tempo=125,this.speed=6,this.trackPos=0,this.patternPos=0,this.patternBreak=0,this.patternDelay=0,this.breakPos=0,this.jumpFlag=0,this.reset(),this.force=this.version;e;)e.initialize(),e.channel=this.mixer.channels[e.index],e.sample=this.samples[0],e=e.next}},loader:{value:function(e){var o=0,r,n,c,a,s,u=0,d;if(!(e.length<2106)&&(e.position=1080,n=e.readString(4),!(n!=="M.K."&&n!=="M!K!"))){for(e.position=0,this.title=e.readString(20),this.version=zi,e.position+=22,r=1;r<32;++r){if(d=e.readUshort(),!d){this.samples[r]=null,e.position+=28;continue}s=nr(),e.position-=24,s.name=e.readString(22),s.length=s.realLen=d<<1,e.position+=2,s.finetune=e.readUbyte()*37,s.volume=e.readUbyte(),s.loop=e.readUshort()<<1,s.repeat=e.readUshort()<<1,e.position+=22,s.pointer=u,u+=s.length,this.samples[r]=s}for(e.position=950,this.length=e.readUbyte(),e.position++,r=0;r<128;++r)d=e.readUbyte()<<8,this.track[r]=d,d>o&&(o=d);for(e.position=1084,o+=256,this.patterns.length=o,r=0;r<o;++r)a=Ia(),a.step=d=e.readUint(),a.note=d>>16&4095,a.effect=d>>8&15,a.sample=d>>24&240|d>>12&15,a.param=d&255,this.patterns[r]=a,(a.sample>31||!this.samples[a.sample])&&(a.sample=0),a.effect===15&&a.param>31&&(this.version=sr),a.effect===8&&(this.version=ao);for(this.mixer.store(e,u),r=1;r<32;++r)if(s=this.samples[r],!!s)for(s.loop||s.repeat>4?(s.loopPtr=s.pointer+s.loop,s.length=s.loop+s.repeat):(s.loopPtr=this.mixer.memory.length,s.repeat=2),u=s.pointer+2,c=s.pointer;c<u;++c)this.mixer.memory[c]=0;s=nr(),s.pointer=s.loopPtr=this.mixer.memory.length,s.length=s.repeat=2,this.samples[0]=s}}},process:{value:function(){var e,o,r,n,c,a,s=this.voices[0];if(this.tick)this.effects();else if(this.patternDelay)this.effects();else{for(r=this.track[this.trackPos]+this.patternPos;s;){if(e=s.channel,s.enabled=0,s.step||(e.period=s.period),n=this.patterns[r+s.index],s.step=n.step,s.effect=n.effect,s.param=n.param,n.sample?(c=s.sample=this.samples[n.sample],s.pointer=c.pointer,s.length=c.length,s.loopPtr=s.funkWave=c.loopPtr,s.repeat=c.repeat,s.finetune=c.finetune,e.volume=s.volume=c.volume):c=s.sample,n.note)if((s.step&4080)===3664)s.finetune=(s.param&15)*37;else if(s.effect===3||s.effect===5)if(n.note===s.period)s.portaPeriod=0;else{for(o=s.finetune,a=o+37;o<a&&!(n.note>=tt[o]);++o);o===a&&a--,o>0&&(a=s.finetune/37>>0&8,a&&o--),s.portaPeriod=tt[o],s.portaDir=n.note>s.portaPeriod?0:1}else s.effect===9&&this.moreEffects(s);else{this.moreEffects(s),s=s.next;continue}for(o=0;o<37&&!(n.note>=tt[o]);++o);if(s.period=tt[s.finetune+o],(s.step&4080)===3792){s.funkSpeed&&this.updateFunk(s),this.extended(s),s=s.next;continue}s.vibratoWave<4&&(s.vibratoPos=0),s.tremoloWave<4&&(s.tremoloPos=0),e.enabled=0,e.pointer=s.pointer,e.length=s.length,e.period=s.period,s.enabled=1,this.moreEffects(s),s=s.next}for(s=this.voices[0];s;)e=s.channel,s.enabled&&(e.enabled=1),e.pointer=s.loopPtr,e.length=s.repeat,s=s.next}++this.tick===this.speed&&(this.tick=0,this.patternPos+=4,this.patternDelay&&--this.patternDelay&&(this.patternPos-=4),this.patternBreak&&(this.patternBreak=0,this.patternPos=this.breakPos,this.breakPos=0),(this.patternPos===256||this.jumpFlag)&&(this.patternPos=this.breakPos,this.breakPos=0,this.jumpFlag=0,++this.trackPos===this.length&&(this.trackPos=0,this.mixer.complete=1)))}},effects:{value:function(){for(var e,o,r,n,c,a=this.voices[0],s;a;){if(e=a.channel,a.funkSpeed&&this.updateFunk(a),(a.step&4095)===0){e.period=a.period,a=a.next;continue}switch(a.effect){case 0:if(c=this.tick%3,!c){e.period=a.period,a=a.next;continue}for(c===1?c=a.param>>4:c=a.param&15,o=a.finetune,r=o+37;o<r;++o)if(a.period>=tt[o]){e.period=tt[o+c];break}break;case 1:a.period-=a.param,a.period<113&&(a.period=113),e.period=a.period;break;case 2:a.period+=a.param,a.period>856&&(a.period=856),e.period=a.period;break;case 3:case 5:if(a.effect===5?n=1:(a.portaSpeed=a.param,a.param=0),a.portaPeriod)if(a.portaDir?(a.period-=a.portaSpeed,a.period<=a.portaPeriod&&(a.period=a.portaPeriod,a.portaPeriod=0)):(a.period+=a.portaSpeed,a.period>=a.portaPeriod&&(a.period=a.portaPeriod,a.portaPeriod=0)),a.glissando){for(o=a.finetune,c=o+37;o<c&&!(a.period>=tt[o]);++o);o===c&&o--,e.period=tt[o]}else e.period=a.period;break;case 4:case 6:a.effect===6?n=1:a.param&&(c=a.param&15,c&&(a.vibratoParam=a.vibratoParam&240|c),c=a.param&240,c&&(a.vibratoParam=a.vibratoParam&15|c)),r=a.vibratoPos>>2&31,s=a.vibratoWave&3,s?(c=255,r<<=3,s===1&&(a.vibratoPos>127?c-=r:c=r)):c=lr[r],c=(a.vibratoParam&15)*c>>this.vibratoDepth,a.vibratoPos>127?e.period=a.period-c:e.period=a.period+c,c=a.vibratoParam>>2&60,a.vibratoPos=a.vibratoPos+c&255;break;case 7:e.period=a.period,a.param&&(c=a.param&15,c&&(a.tremoloParam=a.tremoloParam&240|c),c=a.param&240,c&&(a.tremoloParam=a.tremoloParam&15|c)),r=a.tremoloPos>>2&31,s=a.tremoloWave&3,s?(c=255,r<<=3,s===1&&(a.tremoloPos>127?c-=r:c=r)):c=lr[r],c=(a.tremoloParam&15)*c>>6,a.tremoloPos>127?e.volume=a.volume-c:e.volume=a.volume+c,c=a.tremoloParam>>2&60,a.tremoloPos=a.tremoloPos+c&255;break;case 10:n=1;break;case 14:this.extended(a);break;default:break}n&&(n=0,c=a.param>>4,c?a.volume+=c:a.volume-=a.param&15,a.volume<0?a.volume=0:a.volume>64&&(a.volume=64),e.volume=a.volume),a=a.next}}},moreEffects:{value:function(e){var o=e.channel,r;switch(e.funkSpeed&&this.updateFunk(e),e.effect){case 9:e.param&&(e.offset=e.param),r=e.offset<<8,r>=e.length?e.length=2:(e.pointer+=r,e.length-=r);break;case 11:this.trackPos=e.param-1,this.breakPos=0,this.jumpFlag=1;break;case 12:e.volume=e.param,e.volume>64&&(e.volume=64),o.volume=e.volume;break;case 13:this.breakPos=(e.param>>4)*10+(e.param&15),this.breakPos>63?this.breakPos=0:this.breakPos<<=2,this.jumpFlag=1;break;case 14:this.extended(e);break;case 15:if(!e.param)return;e.param<32?this.speed=e.param:this.mixer.samplesTick=this.sampleRate*2.5/e.param>>0,this.tick=0;break;default:break}}},extended:{value:function(e){var o=e.channel,r=e.param>>4,n,c,a,s=e.param&15;switch(r){case 0:this.mixer.filter.active=s;break;case 1:if(this.tick)return;e.period-=s,e.period<113&&(e.period=113),o.period=e.period;break;case 2:if(this.tick)return;e.period+=s,e.period>856&&(e.period=856),o.period=e.period;break;case 3:e.glissando=s;break;case 4:e.vibratoWave=s;break;case 5:e.finetune=s*37;break;case 6:if(this.tick)return;s?(e.loopCtr?e.loopCtr--:e.loopCtr=s,e.loopCtr&&(this.breakPos=e.loopPos<<2,this.patternBreak=1)):e.loopPos=this.patternPos>>2;break;case 7:e.tremoloWave=s;break;case 8:for(c=e.length-2,a=this.mixer.memory,n=e.loopPtr;n<c;)a[n]=(a[n]+a[++n])*.5;a[++n]=(a[n]+a[0])*.5;break;case 9:if(this.tick||!s||!e.period||this.tick%s)return;o.enabled=0,o.pointer=e.pointer,o.length=e.length,o.delay=30,o.enabled=1,o.pointer=e.loopPtr,o.length=e.repeat,o.period=e.period;break;case 10:if(this.tick)return;e.volume+=s,e.volume>64&&(e.volume=64),o.volume=e.volume;break;case 11:if(this.tick)return;e.volume-=s,e.volume<0&&(e.volume=0),o.volume=e.volume;break;case 12:this.tick===s&&(o.volume=e.volume=0);break;case 13:if(this.tick!==s||!e.period)return;o.enabled=0,o.pointer=e.pointer,o.length=e.length,o.delay=30,o.enabled=1,o.pointer=e.loopPtr,o.length=e.repeat,o.period=e.period;break;case 14:if(this.tick||this.patternDelay)return;this.patternDelay=++s;break;case 15:if(this.tick)return;e.funkSpeed=s,s&&this.updateFunk(e);break;default:break}}},updateFunk:{value:function(e){var o=e.channel,r,n,c=Ra[e.funkSpeed];e.funkPos+=c,!(e.funkPos<128)&&(e.funkPos=0,this.version===zi?(r=e.pointer+e.sample.realLen-e.repeat,n=e.funkWave+e.repeat,n>r&&(n=e.loopPtr,o.length=e.repeat),o.pointer=e.funkWave=n):(r=e.loopPtr+e.repeat,n=e.funkWave+1,n>=r&&(n=e.loopPtr),this.mixer.memory[n]=-this.mixer.memory[n]))}}}),t.voices[0]=Ri(0),t.voices[0].next=t.voices[1]=Ri(1),t.voices[1].next=t.voices[2]=Ri(2),t.voices[2].next=t.voices[3]=Ri(3),t.track=new Uint16Array(128),Object.seal(t)}var zi=1,sr=2,ao=3,tt=[856,808,762,720,678,640,604,570,538,508,480,453,428,404,381,360,339,320,302,285,269,254,240,226,214,202,190,180,170,160,151,143,135,127,120,113,0,850,802,757,715,674,637,601,567,535,505,477,450,425,401,379,357,337,318,300,284,268,253,239,225,213,201,189,179,169,159,150,142,134,126,119,113,0,844,796,752,709,670,632,597,563,532,502,474,447,422,398,376,355,335,316,298,282,266,251,237,224,211,199,188,177,167,158,149,141,133,125,118,112,0,838,791,746,704,665,628,592,559,528,498,470,444,419,395,373,352,332,314,296,280,264,249,235,222,209,198,187,176,166,157,148,140,132,125,118,111,0,832,785,741,699,660,623,588,555,524,495,467,441,416,392,370,350,330,312,294,278,262,247,233,220,208,196,185,175,165,156,147,139,131,124,117,110,0,826,779,736,694,655,619,584,551,520,491,463,437,413,390,368,347,328,309,292,276,260,245,232,219,206,195,184,174,164,155,146,138,130,123,116,109,0,820,774,730,689,651,614,580,547,516,487,460,434,410,387,365,345,325,307,290,274,258,244,230,217,205,193,183,172,163,154,145,137,129,122,115,109,0,814,768,725,684,646,610,575,543,513,484,457,431,407,384,363,342,323,305,288,272,256,242,228,216,204,192,181,171,161,152,144,136,128,121,114,108,0,907,856,808,762,720,678,640,604,570,538,508,480,453,428,404,381,360,339,320,302,285,269,254,240,226,214,202,190,180,170,160,151,143,135,127,120,0,900,850,802,757,715,675,636,601,567,535,505,477,450,425,401,379,357,337,318,300,284,268,253,238,225,212,200,189,179,169,159,150,142,134,126,119,0,894,844,796,752,709,670,632,597,563,532,502,474,447,422,398,376,355,335,316,298,282,266,251,237,223,211,199,188,177,167,158,149,141,133,125,118,0,887,838,791,746,704,665,628,592,559,528,498,470,444,419,395,373,352,332,314,296,280,264,249,235,222,209,198,187,176,166,157,148,140,132,125,118,0,881,832,785,741,699,660,623,588,555,524,494,467,441,416,392,370,350,330,312,294,278,262,247,233,220,208,196,185,175,165,156,147,139,131,123,117,0,875,826,779,736,694,655,619,584,551,520,491,463,437,413,390,368,347,328,309,292,276,260,245,232,219,206,195,184,174,164,155,146,138,130,123,116,0,868,820,774,730,689,651,614,580,547,516,487,460,434,410,387,365,345,325,307,290,274,258,244,230,217,205,193,183,172,163,154,145,137,129,122,115,0,862,814,768,725,684,646,610,575,543,513,484,457,431,407,384,363,342,323,305,288,272,256,242,228,216,203,192,181,171,161,152,144,136,128,121,114,0],lr=[0,24,49,74,97,120,141,161,180,197,212,224,235,244,250,253,255,253,250,244,235,224,212,197,180,161,141,120,97,74,49,24],Ra=[0,5,6,7,8,10,11,13,16,19,22,26,32,43,64,128],cr=Da;function za(){var i=Object.create(null,{player:{value:null,writable:!0},index:{value:0,writable:!0},amiga:{value:null,writable:!0},mixer:{value:null,writable:!0},tracker:{get:function(){return this.player?fr[this.index+this.player.version]:fr[0]}},load:{value:function(t){var e,o;if(t.view||(t=Qi(t)),t.endian=1,t.position=0,t.readUint()===67324752&&window.neoart.Unzip,!t)return null;if(this.player&&this.player.id!=="STPlayer"&&(this.player.load(t),this.player.version))return this.player;if(t.length>336&&(t.position=38,e=t.readString(20),(e==="FastTracker v2.00   "||e==="FastTracker v 2.00  "||e==="Sk@le Tracker"||e==="MadTracker 2.0"||e==="MilkyTracker        "||e==="DigiBooster Pro 2.18"||e.indexOf("OpenMPT")!==-1)&&(this.player=ir(this.mixer),this.player.load(t),this.player.version)))return this.index=Xa,this.player;if(t.endian=0,t.length>2105){if(t.position=1080,e=t.readString(4),e==="M.K."||e==="FLT4"){if(this.player=ar(this.amiga),this.player.load(t),this.player.version)return this.index=Ua,this.player}else if(e==="FEST"&&(this.player=window.neoart.HMPlayer(this.amiga),this.player.load(t),this.player.version))return this.index=Na,this.player}return t.length>2105&&(t.position=1080,e=t.readString(4),(e==="M.K."||e==="M!K!")&&(this.player=cr(this.amiga),this.player.load(t),this.player.version))?(this.index=Ba,this.player):t.length>5220&&(this.player=window.neoart.S1Player(this.amiga),this.player.load(t),this.player.version)?(this.index=qa,this.player):(t.position=0,o=t.readUshort(),t.position=0,e=t.readString(4),(e==="COSO"||o===24576||o===24578||o===24590||o===24598)&&(this.player=window.neoart.JHPlayer(this.amiga),this.player.load(t),this.player.version)?(this.index=$a,this.player):(t.position=0,o=t.readUshort(),this.player=window.neoart.DWPlayer(this.amiga),this.player.load(t),this.player.version?(this.index=ja,this.player):(t.position=0,o=t.readUshort(),o===24576&&(this.player=window.neoart.RHPlayer(this.amiga),this.player.load(t),this.player.version)?(this.index=Ha,this.player):t.length>1625&&(this.player=window.neoart.STPlayer(this.amiga),this.player.load(t),this.player.version)?(this.index=Oa,this.player):(t.clear(),this.index=0,this.player=null))))}}});return i.amiga=eo(),Object.seal(i)}var Oa=0,Ua=4,Ba=9,Na=12,qa=26,ja=28,$a=30,Ha=32,Xa=33,fr=["Unknown Format","Ultimate SoundTracker","D.O.C. SoundTracker 9","Master SoundTracker","D.O.C. SoundTracker 2.0/2.2","SoundTracker 2.3","SoundTracker 2.4","NoiseTracker 1.0","NoiseTracker 1.1","NoiseTracker 2.0","ProTracker 1.0","ProTracker 1.1/2.1","ProTracker 1.2/2.0","His Master's NoiseTracker","SoundFX 1.0/1.7","SoundFX 1.8","SoundFX 1.945","SoundFX 1.994/2.0","BP SoundMon V1","BP SoundMon V2","BP SoundMon V3","Delta Music 1.0","Delta Music 2.0","Digital Mugician","Digital Mugician 7 Voices","Future Composer 1.0/1.3","Future Composer 1.4","SidMon 1.0","SidMon 2.0","David Whittaker","FredEd","Jochen Hippel","Jochen Hippel COSO","Rob Hubbard","FastTracker II","Sk@leTracker","MadTracker 2.0","MilkyTracker","DigiBooster Pro 2.18","OpenMPT"],Ga=za(),ur=Ga;var Oi=class{constructor(t={}){this.baseRawUrl="https://raw.githubusercontent.com/michioxd/keygen-music/master/",this.indexUrl=this.baseRawUrl+"index.json",this.trackList=[],this.history=[],this.maxHistory=50,this.historyCursor=-1,this.currentPlayer=null,this.isPlaying=!1,this.pollInterval=null,this._opId=0,this.onTrackChange=t.onTrackChange||(()=>{}),this.onError=t.onError||(()=>{}),this.hasFetchedIndex=!1,this.currentTrack=null}async init(){if(!this.hasFetchedIndex)try{let t=await fetch(this.indexUrl);if(!t.ok)throw new Error("Network response was not ok");let e=await t.json(),o=["xm","mod","s3m","it"];this.trackList=e.filter(r=>r.fileExtension&&o.includes(r.fileExtension.toLowerCase())),this.hasFetchedIndex=!0}catch(t){throw console.warn("[Jukebox] Offline or failed to fetch track index:",t.message),this.trackList=[],this.onError("NO INTERNET OR BLOCKED ... TRY AGAIN?"),t}}async playNext(t=null){this.stop();let e=++this._opId;try{if(!this.hasFetchedIndex&&(await this.init(),e!==this._opId))return;if(this.trackList.length===0){console.warn("[Jukebox] Track list is empty \u2014 no tracks to play.");return}let o=null;if(t&&typeof t=="object"){let{title:r,trackTitle:n,artist:c}=t,a=this.trackList.filter(s=>{let u=!c||s.artist&&s.artist.toLowerCase()===c.toLowerCase(),d=!r||s.title&&s.title.toLowerCase()===r.toLowerCase(),l=!n||s.trackTitle&&s.trackTitle.toLowerCase()===n.toLowerCase();return u&&d&&l});a.length===0?console.warn("[Jukebox] No matches for target object \u2014 playing random:",t):a.length>1&&console.warn(`[Jukebox] ${a.length} ambiguous matches for target object \u2014 using first. Refine your search:`,a),o=a[0]||null}else if(t&&typeof t=="string"){let r=this.trackList.filter(n=>n.title&&n.title.toLowerCase()===t.toLowerCase());r.length===0?console.warn("[Jukebox] No matches for target title string \u2014 playing random:",t):r.length>1&&console.warn(`[Jukebox] ${r.length} ambiguous matches for title string \u2014 using first:`,r),o=r[0]||null}if(!o&&!t&&this.historyCursor<this.history.length-1)this.historyCursor++,o=this.trackList[this.history[this.historyCursor]];else if(!o){let r=this.trackList.filter((a,s)=>!this.history.includes(s));r.length===0&&(this.history=[],this.historyCursor=-1);let n=r.length>0?r:this.trackList;o=n[Math.floor(Math.random()*n.length)];let c=this.trackList.indexOf(o);this.historyCursor<this.history.length-1&&(this.history=this.history.slice(0,this.historyCursor+1)),this.history.push(c),this.history.length>this.maxHistory&&this.history.shift(),this.historyCursor=this.history.length-1}await this._playTrack(o,e)}catch(o){console.warn("[Jukebox] Track fetch failed \u2014 network issue?",o.message),this.onError("NO INTERNET OR BLOCKED ... TRY AGAIN?")}}async playPrevious(){if(this.historyCursor>0){this.stop();let t=++this._opId;this.historyCursor--;let e=this.trackList[this.history[this.historyCursor]];try{await this._playTrack(e,t)}catch(o){console.warn("[Jukebox] Previous track fetch failed:",o.message),this.onError("NO INTERNET OR BLOCKED ... TRY AGAIN?")}}}async _playTrack(t,e){let o=t.path.split("/").map(s=>encodeURIComponent(s)).join("/"),r=this.baseRawUrl+o,n=await fetch(r);if(!n.ok)throw new Error("Failed to fetch audio file");if(e!==this._opId)return;let c=await n.arrayBuffer();if(e!==this._opId)return;let a=null;try{a=ur.load(c)}catch(s){console.warn(`[Jukebox] Unsupported format for "${t.title}" \u2014 skipping:`,s.message),e===this._opId&&setTimeout(()=>this.playNext(),100);return}e===this._opId&&(this.currentPlayer=a,this.currentPlayer?(this.currentTrack=t,typeof this.currentPlayer.loopSong<"u"&&(this.currentPlayer.loopSong=1),this.currentPlayer.play(),this.isPlaying=!0,this.onTrackChange(t),this.setupCompletionPolling()):setTimeout(()=>this.playNext(),100))}setupCompletionPolling(){this.pollInterval&&clearInterval(this.pollInterval),this.pollInterval=setInterval(()=>{if(!this.currentPlayer)return this.stopPolling();let t=!1;this.currentPlayer.amiga&&this.currentPlayer.amiga.playing===!1&&(t=!0),this.currentPlayer.mixer&&this.currentPlayer.mixer.playing===!1&&(t=!0),this.currentPlayer.stopped&&(t=!0),this.currentPlayer.playing===!1&&(t=!0),t&&this.playNext()},1e3)}stopPolling(){this.pollInterval&&(clearInterval(this.pollInterval),this.pollInterval=null)}stop(){if(this._opId++,this.stopPolling(),this.isPlaying=!1,this.currentPlayer){try{this.currentPlayer.stop()}catch{}this.currentPlayer=null}}};function dr(i,t,e){let o=document.getElementById("afx-audio-toggle");if(!o)return;let r=document.getElementById("afx-bgm-status");if(o.checked&&e.classList.add("afx-music-playing"),i.jukebox)try{i.jukebox.stop()}catch(a){console.warn("[AnkiFX] Error stopping old jukebox:",a.message)}i.jukebox=new Oi({onTrackChange:a=>{let s=`NOW PLAYING: ${a.artist} - ${a.title} - ${a.trackTitle}`;t.marquee=s,i.marquee&&i.marquee.setText(s)},onError:a=>{t.marquee=a,i.marquee&&i.marquee.setText(a)}}),o.addEventListener("change",a=>{let s=a.target.checked,u=Nt();if(s){e.classList.add("afx-bgm-active"),e.classList.add("afx-music-playing"),r.innerHTML=u?"\u{1F50A}":"\u{1F50A} BGM: ON";let d=window.AudioContext||window.webkitAudioContext;d&&(window.neoart=window.neoart||{},window.neoart.audioContext||(window.neoart.audioContext=new d)),window.neoart.audioContext&&window.neoart.audioContext.state==="suspended"&&window.neoart.audioContext.resume();let l=localStorage.getItem("ankifx_preferred_effect")||t.defaultEffect||"geometry",h=t.trackTitle||i.EFFECT_SONG_MAP[l]||null;i.jukebox.playNext(h)}else e.classList.remove("afx-bgm-active"),e.classList.remove("afx-music-playing"),r.innerHTML=u?"\u{1F507}":"\u{1F507} BGM: OFF",i.jukebox.stop(),t.marquee=i.defaultMarqueeText,i.marquee&&i.marquee.setText(i.defaultMarqueeText)});let n=document.getElementById("afx-btn-back"),c=document.getElementById("afx-btn-skip");n&&n.addEventListener("click",a=>{a.stopPropagation(),i.jukebox&&i.jukebox.isPlaying&&i.jukebox.playPrevious()}),c&&c.addEventListener("click",a=>{a.stopPropagation(),i.jukebox&&i.jukebox.isPlaying&&i.jukebox.playNext()})}function hr(i,t,e,o){let r=document.getElementById("afx-effect-selector");r&&r.addEventListener("change",n=>{let c=n.target.value;if(localStorage.setItem("ankifx_preferred_effect",c),Object.values(re).forEach(a=>a.stop()),i.ctx2D&&i.ctx2D.clearRect(0,0,i.width,i.height),i.glContext&&(i.glContext.clearColor(0,0,0,0),i.glContext.clear(i.glContext.COLOR_BUFFER_BIT)),t.defaultEffect=c,c==="debug"?e.classList.add("afx-debug-active"):e.classList.remove("afx-debug-active"),jt(i,t,o,t.marqueePosition,c),i.jukebox&&i.jukebox.isPlaying){let a=t.trackTitle||i.EFFECT_SONG_MAP[c]||null,s=i.jukebox.currentTrack,u=!1;a&&(typeof a=="string"?u=!s||s.title.toLowerCase()!==a.toLowerCase():u=!s||a.title&&s.title.toLowerCase()!==a.title.toLowerCase()||a.trackTitle&&s.trackTitle.toLowerCase()!==a.trackTitle.toLowerCase()||a.artist&&(s.artist||"").toLowerCase()!==a.artist.toLowerCase()),u&&i.jukebox.playNext(a)}})}function pr(i,t,e){let o=document.createElement("div");o.id="ankifx-overlay",t.debug&&o.classList.add("afx-debug-active");let r=window.innerWidth||document.documentElement.clientWidth||800,n=r<480?.65:r<768?.8:1,c=Math.max(55,Math.ceil(85*n));Do()&&(t.marqueePosition==="top"?o.style.paddingTop=`calc(1rem + ${c}px)`:o.style.paddingBottom=`calc(1rem + ${c}px)`);let a=bt(),s=Nt(),u=s?"\u{1F4DC} ":"\u{1F4DC} TEXT: ",d=s?"":" BGM: ",l=s?u.trim():a?`${u}ON`:`${u}OFF`,h=s?"\u{1F507}":`\u{1F507}${d}OFF`,m=s?"\u{1F3A8} ":"[ Effect: ",p=s?"":" ]",f=Object.values(re).filter(A=>A.id!=="debug"||t.debug).map(A=>`
            <option value="${A.id}" ${e===A.id?"selected":""}>
                ${m}${A.name}${p}
            </option>
        `).join(""),g=`
        <div id="afx-bottom-dock">
            <div class="afx-control-group-left">
                <div class="afx-control-row">
                    <label class="afx-toggle"><input type="checkbox" id="afx-text-toggle" ${a?"checked":""}><span class="afx-slider"></span></label>
                    <span id="afx-text-status">${l}</span>
                </div>
                <div id="afx-bgm-container" class="afx-control-row">
                    <label class="afx-toggle"><input type="checkbox" id="afx-audio-toggle"><span class="afx-slider"></span></label>
                    <span id="afx-bgm-status">${h}</span>
                </div>
            </div>
            <div class="afx-control-group-right">
                <div id="afx-effect-controls-container"></div>
                <div id="afx-effect-selector-container" class="afx-control-row afx-effect-selector-container">
                    <select id="afx-effect-selector" class="afx-select">
                        ${f}
                    </select>
                </div>
            </div>
        </div>
    `,k=!1;try{k=localStorage.getItem(`ankifx_agreed_${t.deckTitle}`)==="true"}catch{}let y=t.termsText&&typeof t.termsText=="string"&&t.termsText.trim()!==""&&!k;y&&(o.innerHTML=`
            <div class="afx-dialog">
                <div class="afx-terms">
                    <h3>${t.deckTitle}</h3>
                    ${t.deckAuthor?`<h4 class="afx-deck-author">by ${t.deckAuthor}</h4>`:""}
                    ${t.termsText}
                </div>
                <div class="afx-action-row">
                    <button id="afx-consent-btn" class="afx-btn" disabled>I AGREE</button>
                </div>
            </div>
        `);let x=document.createElement("div");for(x.innerHTML=g;x.firstChild;)o.appendChild(x.firstChild);let w=document.createElement("div");w.id="ankifx-background",document.body.appendChild(w),i.sharedGL=document.createElement("canvas"),i.sharedGL.id="afx-shared-gl",i.sharedGL.className="afx-shared-canvas",w.appendChild(i.sharedGL),i.shared2D=document.createElement("canvas"),i.shared2D.id="afx-shared-2d",i.shared2D.className="afx-shared-canvas",w.appendChild(i.shared2D),i.sharedMarquee=document.createElement("canvas"),i.sharedMarquee.id="afx-shared-marquee",i.sharedMarquee.className="afx-shared-canvas afx-shared-marquee-canvas",w.appendChild(i.sharedMarquee),i.glContext=i.sharedGL.getContext("webgl",{alpha:!1,antialias:!1}),i.ctx2D=i.shared2D.getContext("2d"),i.ctxMarquee=i.sharedMarquee.getContext("2d"),document.body.appendChild(o);let S=document.createElement("div");S.id="afx-top-dock";let P=document.createElement("div");P.className="afx-top-group-left",P.id="afx-top-group-left";let b=document.createElement("div");b.className="afx-top-group-right",b.id="afx-top-group-right";let C=document.createElement("button");C.id="afx-btn-back",C.className="afx-playback-btn",C.textContent="\u23EE\uFE0F";let v=document.createElement("button");if(v.id="afx-btn-skip",v.className="afx-playback-btn",v.textContent="\u23ED\uFE0F",P.appendChild(C),b.appendChild(v),t.debug){let A=document.createElement("div");A.id="afx-global-fps",A.className="afx-global-fps",A.textContent="FPS: --",P.appendChild(A)}S.appendChild(P),S.appendChild(b),o.appendChild(S);let T=A=>{let $=o.classList.contains("afx-agreed-state"),I=A.target.closest("button, input, select, .afx-slider, .afx-toggle, .afx-playback-btn, select option");$?I&&A.stopPropagation():A.stopPropagation()};["touchstart","touchend","mousedown","mouseup","pointerdown","pointerup","click"].forEach(A=>{o.addEventListener(A,T,{passive:!1})});let N=document.getElementById("afx-consent-btn");y&&N?$o(i,t,o,N):window.AnkiFX.agree(o,t.deckTitle),dr(i,t,o);let D=document.getElementById("afx-text-toggle");if(D){let A=document.getElementById("afx-text-status");D.addEventListener("change",$=>{let I=$.target.checked,q=Nt();localStorage.setItem("ankifx_marquee_enabled",I);let G=q?"\u{1F4DC} ":"\u{1F4DC} TEXT: ";A.textContent=q?G.trim():I?`${G}ON`:`${G}OFF`,i.marquee&&(i.marquee.enabled=I)})}return hr(i,t,o,w),{overlay:o,background:w}}var gr=["ankifx-overlay","ankifx-background","afx-btn-back","afx-btn-skip","afx-bottom-dock","afx-top-dock"],E={marquee:null,jukebox:null,sharedGL:null,shared2D:null,sharedMarquee:null,glContext:null,ctx2D:null,ctxMarquee:null,currentEffectId:null,dpr:1,width:0,height:0,marqueeInterval:null,defaultMarqueeText:null,EFFECT_SONG_MAP:{},_layoutHandler:null,_resizeTimeout:null,_resizeInterval:null,observer:null,dockObserver:null,initialized:!1};function Va(i={}){console.log(`[AnkiFX] Init \u2192 v${ke.version} (${ke.source})`);let t=Ro(i);if(document.getElementById("ankifx-overlay")&&Oo(E,t)){E.initialized=!0,mr(),(window.requestIdleCallback||function(c){setTimeout(c,0)})(()=>{no()});return}document.documentElement.classList.remove("afx-scroll-lock"),document.documentElement.classList.remove("afx-agreed"),document.documentElement.classList.remove("afx-ankidroid"),/Android/i.test(navigator.userAgent)&&document.documentElement.classList.add("afx-ankidroid"),gr.forEach(n=>{let c=document.getElementById(n);c&&c.remove()}),E.defaultMarqueeText=t.marquee,E.EFFECT_SONG_MAP={},Object.entries(re).forEach(([n,c])=>{c&&c.preferredTrack&&(E.EFFECT_SONG_MAP[n]=c.preferredTrack)}),br();let e=zo(t),{background:o}=pr(E,t,e);qo(E),No(E),et(E),Bo(E),E.marquee?(E.marquee.setText(t.marquee),E.marquee.setPosition(t.marqueePosition)):(E.marquee=new Si(t.marquee,t.marqueePosition),Zi(E)),jt(E,t,o,t.marqueePosition,e),E.marquee&&(E.marquee.enabled=bt()),E.initialized=!0,jo(E),Pi(E),mr(),(window.requestIdleCallback||function(n){setTimeout(n,0)})(()=>{no()})}function br(){if(document.getElementById("ankifx-styles"))return;let i=document.createElement("style");i.id="ankifx-styles",i.textContent=Io,document.head.appendChild(i)}function Wa(i,t){if(i.classList.add("afx-agreed-state"),document.documentElement.classList.add("afx-agreed"),document.documentElement.classList.remove("afx-scroll-lock"),t)try{localStorage.setItem(`ankifx_agreed_${t}`,"true")}catch{}Pi(E)}function Ya(){E.currentEffectId&&re[E.currentEffectId]?.stop&&re[E.currentEffectId].stop(),E.jukebox&&(E.jukebox.stop(),E.jukebox=null),E.marqueeInterval&&(cancelAnimationFrame(E.marqueeInterval),E.marqueeInterval=null),E.marquee=null;let i=document.getElementById("_flag"),t=document.getElementById("_mark");i&&document.body.appendChild(i),t&&document.body.appendChild(t),gr.forEach(n=>{let c=document.getElementById(n);c&&c.remove()});let e=document.getElementById("ankifx-styles");if(e&&e.remove(),document.documentElement.style.removeProperty("--afx-viewport-height"),document.documentElement.style.removeProperty("--afx-dock-height"),document.documentElement.classList.remove("afx-scroll-lock"),document.documentElement.classList.remove("afx-agreed"),document.documentElement.classList.remove("afx-ankidroid"),Array.from(document.documentElement.classList).forEach(n=>{n.startsWith("afx-effect-")&&document.documentElement.classList.remove(n)}),window.AnkiFX_Config=null,E._observerTimeout&&(clearTimeout(E._observerTimeout),E._observerTimeout=null),E.observer&&(E.observer.disconnect(),E.observer=null),E.dockObserver&&(E.dockObserver.disconnect(),E.dockObserver=null),E._layoutHandler&&(window.removeEventListener("orientationchange",E._layoutHandler),window.removeEventListener("resize",E._layoutHandler),E._layoutHandler=null),E._resizeTimeout&&(clearTimeout(E._resizeTimeout),E._resizeTimeout=null),E._resizeInterval&&(clearInterval(E._resizeInterval),E._resizeInterval=null),E.glContext){if(typeof E.glContext.getExtension=="function"){let n=E.glContext.getExtension("WEBGL_lose_context");n&&n.loseContext()}E.glContext=null}E.sharedGL=null,E.shared2D=null,E.sharedMarquee=null,E.ctx2D=null,E.ctxMarquee=null,E.currentEffectId=null,E.initialized=!1,ft&&(window.removeEventListener("ankifx:template-status",ft),ft=null),Ui=null;let o=document.getElementById("afx-legacy-toast");o&&o.remove();let r=document.getElementById("afx-update-notice");r&&r.remove(),console.log("[AnkiFX] Destroyed.")}var vr={};function Ka(i){try{if(typeof sessionStorage<"u")return sessionStorage.getItem(i)}catch{}return null}function Ja(i,t){try{if(typeof sessionStorage<"u")return sessionStorage.setItem(i,t),!0}catch{}return!1}function Za(i){let t=`afx_legacy_toast_${i}`,e=Ka(t);return e!==null?e==="true":!!vr[t]}function Qa(i){let t=`afx_legacy_toast_${i}`;Ja(t,"true")||(vr[t]=!0)}function no(){if(!window.AnkiFX||!window.AnkiFX.initialized)return;let i=document.getElementById("ankifx-template-meta"),t=!1,e="unknown";if(!i)t=!0;else{let o=i.getAttribute("data-template-name"),r=i.getAttribute("data-template-version");o?e=o.trim():t=!0,(!r||r.trim()==="")&&(t=!0)}t&&xr(e)}var Ui=null,ft=null;function Ht(i){return i?String(i).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;"):""}function mr(){ft&&window.removeEventListener("ankifx:template-status",ft),Ui=null;let i=t=>{if(!t||!t.isNewer||Ui)return;let e=document.getElementById("afx-update-banner-root");if(!e||e.children.length>0||document.getElementById("afx-update-notice"))return;Ui="outdated";let o=`afx_dismiss_${t.name}_${t.local}`;if((()=>{try{if(sessionStorage.getItem(o)==="true")return!0}catch{}try{if(localStorage.getItem(o)==="true")return!0}catch{}return!1})())return;let n=()=>{try{sessionStorage.setItem(o,"true")}catch{}try{localStorage.setItem(o,"true")}catch{}},c=document.createElement("div");c.id="afx-update-notice",c.className="afx-update-notice";let a=t.changelog?` (${Ht(t.changelog)})`:"";c.innerHTML=`
            <div class="afx-update-notice-content">
                <div class="afx-update-notice-title">Template Update Available</div>
                <div>
                    Card template is v${Ht(t.local)}. Latest is v${Ht(t.remote)}${a}.<br>
                    Please visit <a class="afx-update-notice-link" href="${Ht(t.targetUrl)}" target="_blank">${Ht(t.displayUrl)}</a> and copy the latest template.
                </div>
            </div>
            <button class="afx-update-notice-close" title="Dismiss">&times;</button>
        `,c.querySelector(".afx-update-notice-close").addEventListener("click",l=>{l.stopPropagation(),c.classList.remove("afx-visible"),n(),setTimeout(()=>c.remove(),400)});let u=c.querySelector(".afx-update-notice-link");u&&u.addEventListener("click",l=>l.stopPropagation());let d=l=>l.stopPropagation();["touchstart","touchend","mousedown","mouseup","click"].forEach(l=>{c.addEventListener(l,d,{passive:!0})}),requestAnimationFrame(()=>{e.appendChild(c),requestAnimationFrame(()=>{c.classList.add("afx-visible")})})};ft=t=>{i(t.detail)},window.addEventListener("ankifx:template-status",ft),window.dispatchEvent(new CustomEvent("ankifx:request-template-status"))}function xr(i="unknown"){if(Za(i)||document.getElementById("afx-legacy-toast"))return;let t=document.createElement("div");t.id="afx-legacy-toast",t.className="afx-legacy-toast-container",t.innerHTML=`
        <div class="afx-legacy-toast-content">
            <div class="afx-legacy-toast-title">Legacy Template Detected</div>
            <div>
                An update is required for full AnkiFX compatibility.<br>
                Please see the <a class="afx-legacy-toast-link" href="https://github.com/robkipa/ankifx/blob/main/docs/template-migration-guide.md" target="_blank">Template Update Guide</a> for step-by-step instructions.
            </div>
        </div>
        <button class="afx-legacy-toast-close" title="Dismiss">&times;</button>
    `,t.querySelector(".afx-legacy-toast-close").addEventListener("click",n=>{n.stopPropagation(),t.classList.remove("afx-legacy-visible"),Qa(i),setTimeout(()=>{t.remove()},400)});let o=t.querySelector(".afx-legacy-toast-link");o&&o.addEventListener("click",n=>{n.stopPropagation()});let r=n=>n.stopPropagation();["touchstart","touchend","mousedown","mouseup","click"].forEach(n=>{t.addEventListener(n,r,{passive:!0})}),document.body.appendChild(t),requestAnimationFrame(()=>{requestAnimationFrame(()=>{t.classList.add("afx-legacy-visible")})})}var Bi="local";try{let i=typeof __ankifx_script_src=="string"?__ankifx_script_src:"";if(!i){let e=(new Error().stack||"").match(/(https?:\/\/[^\s)\n:]+|file:\/\/[^\s)\n:]+)/g);if(e&&e.length>0){for(let o=0;o<e.length;o++)if(e[o].includes("ankifx")){i=e[o];break}}}i&&(i.includes("cdn.jsdelivr.net")||i.includes("github")||i.includes("rawgit")||i.includes("githack")?Bi="remote":Bi="local")}catch{Bi="detection-failed"}var en="1.0.0-31800a4",tn="2026-06-10T22:08:11.341Z",on=Bi,ke={init:Va,destroy:Ya,agree:Wa,injectCSS:br,handleResize:()=>et(E),startEffect:(i,t,e,o)=>jt(E,i,t,e,o),startMarqueeLoop:()=>Zi(E),renderEffectControls:qt,setControlValue:Uo,detectLegacyTemplate:no,showLegacyMigrationToast:xr,get version(){return en},get buildDate(){return tn},get source(){return on},get marquee(){return E.marquee},set marquee(i){E.marquee=i},get jukebox(){return E.jukebox},set jukebox(i){E.jukebox=i},get currentEffectId(){return E.currentEffectId},get defaultMarqueeText(){return E.defaultMarqueeText},get EFFECT_SONG_MAP(){return E.EFFECT_SONG_MAP},get initialized(){return!!E.initialized}};function yr(i){if(!i)return{parts:[0,0,0],isPre:!1,preType:3,preNumber:0};let t=String(i).replace(/^v/,""),e=t.indexOf("+");e!==-1&&(t=t.substring(0,e));let o=t.indexOf("-"),r=o!==-1,n=r?t.substring(0,o):t,c=r?t.substring(o+1).toLowerCase():"",a=n.split(".").map(d=>{let l=parseInt(d,10);return isNaN(l)?0:l}),s=3,u=0;if(r){c.indexOf("alpha")!==-1?s=0:c.indexOf("beta")!==-1?s=1:c.indexOf("rc")!==-1&&(s=2);let d=c.match(/\d+/);d&&(u=parseInt(d[0],10))}return{parts:[a[0]||0,a[1]||0,a[2]||0],isPre:r,preType:s,preNumber:u}}function Ni(i,t){let e=yr(i),o=yr(t);for(let r=0;r<3;r++){if(e.parts[r]>o.parts[r])return!0;if(e.parts[r]<o.parts[r])return!1}return e.preType>o.preType?!0:e.preType<o.preType?!1:e.preNumber>o.preNumber}function wr(i,t){if(!i||!t||i==="development"||t==="development")return!1;try{return new Date(i).getTime()>new Date(t).getTime()}catch{return!1}}var kr=[];try{let i=sessionStorage.getItem("ankifx_eval_history");i&&(kr=JSON.parse(i))}catch{}window.AnkiFX_Eval_History=window.AnkiFX_Eval_History||kr;var Sr=[];try{let i=sessionStorage.getItem("ankifx_loader_logs");i&&(Sr=JSON.parse(i))}catch{}window.AnkiFX_Loader_Logs=window.AnkiFX_Loader_Logs||Sr;var yt=i=>{window.AnkiFX_Loader_Logs.push(i);try{sessionStorage.setItem("ankifx_loader_logs",JSON.stringify(window.AnkiFX_Loader_Logs))}catch{}},be=window.AnkiFX,Be=ke.version,Ne=be&&be.version,rn=be&&be.initialized,Er=!1,Cr="",an=!be||Ni(Be,Ne),nn=be&&!Ni(Be,Ne)&&!Ni(Ne,Be),sn=nn&&wr(ke.buildDate,be&&be.buildDate),ln=an||sn;if(ln)if(rn){console.info(`[Loader] Newer engine version v${Be} (${ke.source}) loaded late. Upgrading and replacing active engine v${Ne} (${be.source})...`),yt({msg:`[Loader] Late takeover triggered: Upgrading active engine from v${Ne} to v${Be}...`,level:"info"});let i=window.AnkiFX_Config;try{be.destroy(),yt({msg:`[Loader] Active engine v${Ne} destroyed successfully.`,level:"success"})}catch(t){console.error(`[Loader] Error destroying old engine: ${t.message}`),yt({msg:`[Loader] Error destroying active engine: ${t.message}`,level:"error"})}i&&(window.AnkiFX_Config=i),window.AnkiFX=ke;try{window.AnkiFX.init(window.AnkiFX_Config),yt({msg:`[Loader] Upgraded AnkiFX engine to v${Be} successfully.`,level:"success"})}catch(t){console.error(`[Loader] Error initializing upgraded engine: ${t.message}`),yt({msg:`[Loader] Upgraded AnkiFX engine initialization failed: ${t.message}`,level:"error"})}}else be&&(console.info(`[Loader] Newer engine version v${Be} (${ke.source}) replacing uninitialized engine v${Ne} (${be.source}).`),yt({msg:`[Loader] Pre-init takeover: Replacing local v${Ne} with remote v${Be}...`,level:"info"})),window.AnkiFX=ke;else{Er=!0;let i=be&&be.buildDate?be.buildDate:"unknown",t=ke.buildDate||"unknown";Cr=`ignored (older or equal version and build: active=${Ne}@${i}, incoming=${Be}@${t})`,console.info(`[Loader] Incoming engine v${Be} (built ${t}) is not newer than active engine v${Ne} (built ${i}). Ignoring.`)}window.AnkiFX_Eval_History.push({source:ke.source,version:ke.version,buildDate:ke.buildDate,time:new Date().toLocaleTimeString(),status:Er?Cr:"active"});try{sessionStorage.setItem("ankifx_eval_history",JSON.stringify(window.AnkiFX_Eval_History))}catch{}})();
