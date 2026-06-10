var __ankifx_script_src=(document.currentScript&&document.currentScript.src)||"";
(()=>{var eo=[],Ze=null,Po=60,Mo=1.5,To={id:"aurora",name:"Aurora",run:Jr,stop:Qr,drawOverlay:Zr,onResize:(t,i)=>{let e=document.documentElement,o=e?getComputedStyle(e):null;if(vt=o&&parseInt(o.getPropertyValue("--io-header"))||0,Tt=i-vt,ze=t/8,Oe=Tt/8,Ze){let r=Po/8,s=Math.ceil(ze/r),c=Math.ceil(Oe/(r*Mo));Ze.w=s,Ze.h=c,Ze.build()}te&&(te.style.width=ze+"px",te.style.height=Oe+"px",te.style.position="absolute",te.style.top=vt+"px",te.style.left="0",te.style.transform="scale(8)",te.style.transformOrigin="top left")},marqueeFont:{color:"#E0FFFF",shadowColor:"rgba(0,128,128,0.8)",shadowBlur:10}},Mt=null,ze,Oe,te=null,Yr=0,Pt=0,bt={x:-1e3,y:-1e3},vt=0,Tt=0,ri=class{constructor(i,e){this.x=i||0,this.y=e||0}setAngle(i){let e=this.getLength()||1;this.x=Math.cos(i)*e,this.y=Math.sin(i)*e}setLength(i){let e=Math.atan2(this.y,this.x);this.x=Math.cos(e)*i,this.y=Math.sin(e)*i}getLength(){return Math.sqrt(this.x*this.x+this.y*this.y)}addTo(i){this.x+=i.x,this.y+=i.y}},Co=(()=>{let t=new Uint8Array(512),i=new Uint8Array(256).map(()=>Math.random()*256);for(let r=0;r<512;r++)t[r]=i[r&255];let e=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]];function o(r,s,c,a){return r[0]*s+r[1]*c+r[2]*a}return{simplex3:(r,s,c)=>{let a,n,u,d,l=.3333333333333333,p=1/6,v=(r+s+c)*l,h=Math.floor(r+v),f=Math.floor(s+v),m=Math.floor(c+v),x=(h+f+m)*p,g=r-h+x,b=s-f+x,k=c-m+x,S,P,y,E,w,T;g>=b?b>=k?(S=1,P=0,y=0,E=1,w=1,T=0):g>=k?(S=1,P=0,y=0,E=1,w=0,T=1):(S=0,P=0,y=1,E=1,w=0,T=1):b<k?(S=0,P=0,y=1,E=0,w=1,T=1):g<k?(S=0,P=1,y=0,E=0,w=1,T=1):(S=0,P=1,y=0,E=1,w=1,T=0);let B=g-S+p,I=b-P+p,_=k-y+p,j=g-E+2*p,D=b-w+2*p,R=k-T+2*p,G=g-1+3*p,K=b-1+3*p,Z=k-1+3*p,A=h&255,N=f&255,V=m&255,q=.6-g*g-b*b-k*k;q<0?a=0:(q*=q,a=q*q*o(e[t[A+t[N+t[V]]]%12],g,b,k));let ie=.6-B*B-I*I-_*_;ie<0?n=0:(ie*=ie,n=ie*ie*o(e[t[A+S+t[N+P+t[V+y]]]%12],B,I,_));let ce=.6-j*j-D*D-R*R;ce<0?u=0:(ce*=ce,u=ce*ce*o(e[t[A+E+t[N+w+t[V+T]]]%12],j,D,R));let xe=.6-G*G-K*K-Z*Z;return xe<0?d=0:(xe*=xe,d=xe*xe*o(e[t[A+1+t[N+1+t[V+1]]]%12],G,K,Z)),32*(a+n+u+d)}}})(),to=class{constructor(i,e,o={}){this.settings={frequency:.1,...o},this.w=i,this.h=e,this.time=0,this.build()}build(){this.cols=Math.ceil(this.w),this.rows=Math.ceil(this.h),this.field=new Array(this.cols);for(let i=0;i<this.cols;i++){this.field[i]=new Array(this.rows);for(let e=0;e<this.rows;e++)this.field[i][e]=new ri(0,0)}}update(i){this.time+=i;let e=this.time*this.settings.frequency/1e3;for(let o=0;o<this.field.length;o++)for(let r=0;r<this.field[o].length;r++){let s=Co.simplex3(o/20,r/20,e)*Math.PI*2,c=Co.simplex3(o/10+4e4,r/10+4e4,e);this.field[o][r].setAngle(s),this.field[o][r].setLength(c),typeof this.manipulateVector=="function"&&this.manipulateVector(this.field[o][r],o,r),typeof this.onDraw=="function"&&this.onDraw(this.field[o][r],o,r)}}};function Kr(){eo=[];let t=150;for(let i=0;i<t;i++)eo.push({x:Math.random(),y:Math.random(),size:.5+Math.random()*1.3,opacity:.15+Math.random()*.75,blinkSpeed:.001+Math.random()*.002,blinkOffset:Math.random()*Math.PI*2})}function xt(t){t.touches&&t.touches[0]?(bt.x=t.touches[0].clientX,bt.y=t.touches[0].clientY):(bt.x=t.clientX,bt.y=t.clientY)}function Jr(t,i){let e=t.ctx2d;te=t.canvas2D,te.classList.add("afx-aurora-active"),vt=t.topInset||0,Tt=t.visibleHeight||t.height,ze=t.width/8,Oe=Tt/8,te.width=ze*t.dpr,te.height=Oe*t.dpr,e.setTransform(1,0,0,1,0,0),e.scale(t.dpr,t.dpr),te.style.width=ze+"px",te.style.height=Oe+"px",te.style.position="absolute",te.style.top=vt+"px",te.style.left="0",te.style.transform="scale(8)",te.style.transformOrigin="top left",Kr();let o=Po/8,r=Math.ceil(ze/o),s=Math.ceil(Oe/(o*Mo));Ze=new to(r,s,{frequency:.1});let c={x:ze/r,y:Oe/s},a=255/s;Ze.onDraw=(u,d,l)=>{let p=u.getLength()*Math.abs(u.x),v=u.getLength()*Math.abs(u.y),h=Math.round(-20*p+80*v+(50-.6*l*a)),f=Math.round(180*p+20*v-60+.4*l*a),m=Math.round(50*p+30*v+(40-.5*l*a)+.5*l*a);e.fillStyle=`rgba(${h}, ${f}, ${m}, 0.8)`,e.fillRect(d*c.x,l*c.y,c.x+.5,c.y+.5)},Ze.manipulateVector=(u,d,l)=>{let p={x:d*c.x+.5*c.x,y:l*c.y+.5*c.y},v=bt.x/8,h=bt.y/8,f=new ri((v-p.x)/ze,(h-p.y)/Oe);u.addTo(f),u.getLength()>1&&u.setLength(1)},Yr=0,Pt=0,window.addEventListener("mousemove",xt),window.addEventListener("touchstart",xt),window.addEventListener("touchmove",xt);function n(u){Pt||(Pt=u);let d=u-Pt;Pt=u,e.fillStyle="#020b1a",e.fillRect(0,0,ze,Oe),Ze.update(d),Mt=requestAnimationFrame(n)}Mt=requestAnimationFrame(n)}function Zr(t,i,e,o){let r=vt,s=Tt||e;t.fillStyle="#ffffff",eo.forEach(c=>{let a=(Math.sin(o*c.blinkSpeed+c.blinkOffset)+1)/2;t.globalAlpha=c.opacity*a,t.beginPath();let n=r+c.y*s;t.arc(c.x*i,n,c.size,0,Math.PI*2),t.fill()}),t.globalAlpha=1}function Qr(){Mt&&(cancelAnimationFrame(Mt),Mt=null),window.removeEventListener("mousemove",xt),window.removeEventListener("touchstart",xt),window.removeEventListener("touchmove",xt),te&&(te.classList.remove("afx-aurora-active"),te.style.cssText="position: absolute; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none;",te=null);let t=window.AnkiFX;t&&typeof t.handleResize=="function"&&t.handleResize()}var ai=null,_t,ni,Pe=null,ea=200,_o=[];try{let t=sessionStorage.getItem("ankifx_captured_logs");t&&(_o=JSON.parse(t))}catch{}window.AnkiFX_Captured_Logs=window.AnkiFX_Captured_Logs||_o;var Fo=null,Ft="all",ve={ioHeaderHeight:null,topInset:null,bottomInset:null,viewportHeight:null,visibleHeight:0,isLandscape:!1};function Ao(){let t=document.documentElement,i=t?getComputedStyle(t):null,e=(r,s)=>{if(!r)return null;let c=r.getPropertyValue(s);if(!c||c.trim()==="")return null;let a=parseInt(c,10);return isNaN(a)?null:a};ve.ioHeaderHeight=e(i,"--io-header"),ve.topInset=e(i,"--top-inset"),ve.bottomInset=e(i,"--bottom-inset");let o=document.getElementById("ankifx-background");ve.viewportHeight=o?Math.round(o.getBoundingClientRect().height):null,ve.isLandscape=window.innerWidth>window.innerHeight,ve.visibleHeight=(t?t.clientHeight:window.innerHeight)+(ve.ioHeaderHeight||0)}var Ue=(t,i)=>{let e=i.map(o=>{if(o===null)return"null";if(o===void 0)return"undefined";if(typeof o=="object")try{return JSON.stringify(o)}catch{return String(o)}return String(o)}).join(" ");window.AnkiFX_Captured_Logs.push({type:t,message:e,timestamp:new Date().toLocaleTimeString()}),window.AnkiFX_Captured_Logs.length>ea&&window.AnkiFX_Captured_Logs.shift();try{sessionStorage.setItem("ankifx_captured_logs",JSON.stringify(window.AnkiFX_Captured_Logs))}catch{}Fo&&Fo()};if(typeof window<"u"&&!window.__console_intercepted__){let t=console.log&&console.log.bind(console)||(()=>{}),i=console.warn&&console.warn.bind(console)||(()=>{}),e=console.error&&console.error.bind(console)||(()=>{}),o=console.info&&console.info.bind(console)||(()=>{}),r=console.debug&&console.debug.bind(console)||(()=>{});console.log=(...s)=>{t(...s),Ue("log",s)},console.warn=(...s)=>{i(...s),Ue("warn",s)},console.error=(...s)=>{e(...s),Ue("error",s)},console.info=(...s)=>{o(...s),Ue("info",s)},console.debug=(...s)=>{r(...s),Ue("debug",s)},window.addEventListener("error",s=>{let c=s.message;if(s.error){let a=s.error.name||"Error",n=s.error.message||s.message||"",u=s.error.stack||"";u&&!u.includes(n)?c=`${a}: ${n}
${u}`:c=u||`${a}: ${n}`}Ue("error",[c])}),window.addEventListener("unhandledrejection",s=>{Ue("error",[`Unhandled Promise Rejection: ${s.reason}`])}),window.__console_intercepted__=!0}var Lo={id:"debug",name:"DEBUG",run:ta,stop:ia,onResize:(t,i)=>{_t=t,ni=i,Ao()},marqueeFont:{color:"#00ff00",shadowColor:"rgba(0,0,0,0.8)",shadowBlur:5},controls:[{type:"button",id:"copy-logs-btn",label:"\u{1F4CB} COPY LOGS",onClick:()=>{oa()}},{type:"button",id:"clear-storage-btn",label:"\u{1F9F9} CLEAR STORAGE",onClick:()=>{if(confirm("Clear ALL AnkiFX local storage?")){localStorage.clear();try{sessionStorage.removeItem("ankifx_captured_logs"),sessionStorage.removeItem("ankifx_loader_logs"),sessionStorage.removeItem("ankifx_eval_history")}catch{}location.reload()}}}]};function ta(t,i){Pe&&(Pe.remove(),Pe=null);let e=t.dpr||1;_t=t.width,ni=t.height,Ao(),Pe=document.createElement("div"),Pe.className="afx-debug-container";let o=document.createElement("div");o.className="afx-debug-columns",Pe.appendChild(o);let r=document.createElement("div");r.className="afx-debug-left-col",o.appendChild(r);let s=document.createElement("div");s.className="afx-debug-right-col",o.appendChild(s);let c=document.createElement("div");c.className="afx-debug-panel diagnostics",c.innerHTML="<h3>AnkiFX Version</h3>";let a=document.createElement("div");a.className="afx-debug-content",c.appendChild(a),r.appendChild(c);let n=document.createElement("div");n.className="afx-debug-panel viewport-info",n.innerHTML="<h3>Viewport & Layout</h3>";let u=document.createElement("pre");u.className="afx-debug-content",n.appendChild(u),r.appendChild(n);let d=document.createElement("div");d.className="afx-debug-panel logs",d.innerHTML="<h3>Chronological Loader Logs</h3>";let l=document.createElement("div");l.className="afx-debug-content",d.appendChild(l),s.appendChild(d);let p=document.createElement("div");p.className="afx-debug-panel localstorage-viewer",p.innerHTML="<h3>LocalStorage</h3>";let v=document.createElement("div");v.className="afx-debug-content",p.appendChild(v),s.appendChild(p);let h=document.createElement("div");h.className="afx-debug-panel console-logs",h.innerHTML=`
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
    `,Pe.appendChild(h);let f=document.createElement("div");f.style.height="calc(var(--bottom-inset, 0px) + var(--afx-dock-height, 0px) + 20px)",f.style.flexShrink="0",f.style.pointerEvents="none",Pe.appendChild(f);let m=h.querySelectorAll(".afx-console-filter-btn");m.forEach(A=>{A.addEventListener("click",N=>{N.stopPropagation(),m.forEach(V=>{V.classList.remove("active"),V.style.background="rgba(255,255,255,0.05)",V.style.borderColor="transparent",V.style.color="#888"}),A.classList.add("active"),A.style.background="rgba(255,255,255,0.15)",A.style.borderColor="rgba(255,255,255,0.25)",A.style.color="#fff",Ft=A.getAttribute("data-filter")})});let x=h.querySelector("#afx-clear-console-btn");x&&x.addEventListener("click",A=>{A.stopPropagation(),window.AnkiFX_Captured_Logs.length=0;try{sessionStorage.removeItem("ankifx_captured_logs")}catch{}});let g=h.querySelector("#afx-console-input"),b=h.querySelector("#afx-console-exec-btn"),k=()=>{if(!g)return;let A=g.value.trim();if(A){Ue("log",[`> ${A}`]);try{let N=(0,eval)(A);Ue("info",["=>",N])}catch(N){Ue("error",[N.stack||N.message||N])}g.value="",g.focus()}};b&&g&&(["keydown","keyup","keypress"].forEach(A=>{g.addEventListener(A,N=>{N.stopPropagation()})}),g.addEventListener("keydown",A=>{A.key==="Enter"&&(A.preventDefault(),k())}),b.addEventListener("click",A=>{A.stopPropagation(),k()})),(document.getElementById("ankifx-overlay")||document.body).appendChild(Pe);let P=document.getElementById("ankifx-background")||document.body,y={topLeft:document.createElement("div"),topRight:document.createElement("div"),bottomLeft:document.createElement("div"),bottomRight:document.createElement("div")};y.topLeft.className="afx-debug-corner top-left",y.topRight.className="afx-debug-corner top-right",y.bottomLeft.className="afx-debug-corner bottom-left",y.bottomRight.className="afx-debug-corner bottom-right",y.bottomLeft.style.bottom="auto",y.bottomRight.style.bottom="auto",Object.values(y).forEach(A=>P.appendChild(A));let E=document.createElement("div");E.className="afx-debug-line visible-bottom";let w=document.createElement("span");w.className="afx-debug-line-label",w.textContent="--- VISIBLE DOCUMENT BOTTOM ---",E.appendChild(w),P.appendChild(E);let T=0,B=0,I=0,_="",j="",D="",R="",G="",K="";function Z(A){A===void 0&&(A=performance.now()),T||(T=A),B++,A-T>=1e3&&(I=B,B=0,T=A);let N=t.ctx2d;N.clearRect(0,0,_t,ni),N.fillStyle="#050508",N.fillRect(0,0,_t,ni);let V=ve.visibleHeight,q=$=>$!==null?`${$}px`:"N/A",ie=q(ve.ioHeaderHeight),ce=q(ve.topInset),xe=q(ve.bottomInset),Ye=q(ve.viewportHeight),Ke=ve.ioHeaderHeight||0,Xe=[`window:               ${window.innerWidth}x${window.innerHeight}`,`screen:               ${screen.width}x${screen.height}`,`doc:                  ${document.documentElement.clientWidth}x${document.documentElement.clientHeight}`,`orient:               ${window.orientation||"N/A"}`,`dpr (native|engine):  (${window.devicePixelRatio}|${e})`,`--io-header:          ${ie}`,`--top-inset:          ${ce}`,`--bottom-inset:       ${xe}`,`--afx-viewport-height: calc(100dvh + ${Ke}px) = ${Ye}`,`isLandscape:          ${ve.isLandscape}`].join(`
`);Xe!==_&&(u.textContent=Xe,_=Xe);let De=window.AnkiFX_Eval_History||[],M=JSON.stringify(De),L=[`Version:  ${window.AnkiFX?.version||"1.0.0-dev"}`,`Source:   ${window.AnkiFX?.source||"unknown"}`,`Built:    ${window.AnkiFX?.buildDate||"development"}`].join(`
`),H=L+"_"+M;if(H!==j){a.innerHTML="";let $=document.createElement("pre");$.style.margin="0 0 10px 0",$.style.fontFamily="inherit",$.style.fontSize="inherit",$.textContent=L,a.appendChild($);let O=document.createElement("div");O.style.borderTop="1px dashed rgba(255,255,255,0.15)",O.style.margin="10px 0",a.appendChild(O);let Q=document.createElement("div");Q.textContent="EVALUATION HISTORY:",Q.style.fontWeight="bold",Q.style.color="#00ffff",Q.style.marginBottom="6px",Q.style.fontSize="11px",a.appendChild(Q);let oe=document.createElement("div");if(De.length===0){let W=document.createElement("div");W.textContent="(No evaluation history captured)",W.style.color="#888",W.style.fontStyle="italic",oe.appendChild(W)}else De.slice(-3).forEach((W,Re)=>{let X=document.createElement("div");X.textContent=`[${Re+1}] ${W.source} (${W.version}) @ ${W.time} - ${W.status}`,X.style.color=W.status==="active"?"#55ff55":"#ffaa55",X.style.fontSize="11px",oe.appendChild(X)});a.appendChild(oe),j=H}let z=window.AnkiFX_Loader_Logs||[],ee=JSON.stringify(z);if(ee!==D){if(l.innerHTML="",z.length===0){let $=document.createElement("div");$.textContent="(No logs captured by template loader)",$.style.color="#888",$.style.fontStyle="italic",l.appendChild($)}else{let $={success:{color:"#55ff55",badge:"\u2713"},error:{color:"#ff5555",badge:"\u2717"},warn:{color:"#ffaa55",badge:"!"},pending:{color:"#888888",badge:"\u2026"},info:{color:"#dddddd",badge:"\xB7"}};z.forEach((O,Q)=>{let oe=O&&typeof O=="object",W=oe?O.msg:String(O),Re=$[oe?O.level:"info"]||$.info,X=document.createElement("div");X.style.cssText="display: flex; gap: 6px; align-items: baseline; font-size: 11px; margin-bottom: 3px; padding-bottom: 2px; border-bottom: 1px solid rgba(255,255,255,0.04);";let ae=document.createElement("span");ae.textContent=`[${String(Q+1).padStart(2,"0")}]`,ae.style.cssText="color: #555; flex-shrink: 0; font-size: 10px;";let me=document.createElement("span");me.textContent=Re.badge,me.style.cssText=`color: ${Re.color}; flex-shrink: 0; font-weight: bold; width: 10px;`;let ge=document.createElement("span");ge.textContent=W,ge.style.cssText=`color: ${Re.color}; word-break: break-word;`,X.appendChild(ae),X.appendChild(me),X.appendChild(ge),l.appendChild(X)})}D=ee}let pe={};for(let $=0;$<localStorage.length;$++){let O=localStorage.key($);pe[O]=localStorage.getItem(O)}let ye=JSON.stringify(pe);if(ye!==K){v.innerHTML="";let $=Object.keys(pe).sort();if($.length===0){let O=document.createElement("div");O.textContent="(LocalStorage is empty)",O.style.color="#888",O.style.fontStyle="italic",O.style.fontSize="11px",v.appendChild(O)}else $.forEach(O=>{let Q=document.createElement("div");Q.style.cssText="display: flex; justify-content: space-between; font-size: 11px; margin-bottom: 4px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 2px;";let oe=document.createElement("span");oe.textContent=O,oe.style.color="#ffaa55",oe.style.wordBreak="break-all",oe.style.marginRight="8px";let W=document.createElement("span");W.textContent=pe[O],W.style.color="#00ffff",W.style.wordBreak="break-all",W.style.textAlign="right",Q.appendChild(oe),Q.appendChild(W),v.appendChild(Q)});K=ye}let Se=window.AnkiFX_Captured_Logs.filter($=>Ft==="all"?!0:$.type===Ft),Ee=Ft+"_"+JSON.stringify(Se);if(Ee!==G){let $=document.getElementById("afx-console-log-list");if($)if($.innerHTML="",Se.length===0){let O=document.createElement("div");O.textContent=`(No logs in category: ${Ft})`,O.style.color="#888",O.style.fontStyle="italic",O.style.fontSize="11px",$.appendChild(O)}else Se.forEach(O=>{let Q=document.createElement("div");Q.style.marginBottom="4px",Q.style.fontSize="11px",Q.style.borderBottom="1px solid rgba(255,255,255,0.03)",Q.style.paddingBottom="2px";let oe=document.createElement("span");oe.textContent=`[${O.timestamp}] `,oe.style.color="#888",Q.appendChild(oe);let W=document.createElement("span");W.textContent=O.message,O.type==="error"?W.style.color="#ff5555":O.type==="warn"?W.style.color="#ffaa55":O.type==="info"||O.type==="debug"?W.style.color="#00ffff":W.style.color="#ffffff",Q.appendChild(W),$.appendChild(Q)}),$.scrollTop=$.scrollHeight;G=Ee}let Ce=Math.round(_t),Je=Math.round(V),ei=`${Ce}x${Je}`;ei!==R&&(y.topLeft.textContent="(0,0)",y.topRight.textContent=`(${Ce},0)`,y.bottomLeft.textContent=`(0,${Je})`,y.bottomRight.textContent=`(${Ce},${Je})`,y.bottomLeft.style.top=`${Je-18}px`,y.bottomRight.style.top=`${Je-18}px`,R=ei),E.style.top=`${V}px`,ai=requestAnimationFrame(Z)}Z()}function ia(){ai&&(cancelAnimationFrame(ai),ai=null),Pe&&(Pe.remove(),Pe=null),document.querySelectorAll(".afx-debug-corner, .afx-debug-line").forEach(t=>t.remove())}function oa(){let t=document.querySelector(".afx-debug-container");if(!t)return;let i=`=== ANKIFX DEBUG LOGS ===

`;t.querySelectorAll(".afx-debug-panel").forEach(r=>{let s=r.querySelector("h3")?.textContent||"",c=r.querySelector(".afx-debug-content");c&&(i+=`--- ${s.toUpperCase()} ---
`,i+=c.innerText||c.textContent||"",i+=`

`)}),(()=>{try{let r=document.createElement("textarea");r.value=i.trim(),r.style.position="fixed",r.style.top="0",r.style.left="0",r.style.opacity="0",r.style.pointerEvents="none",document.body.appendChild(r),r.focus(),r.select();let s=document.execCommand("copy");if(document.body.removeChild(r),s)return Promise.resolve()}catch{}return navigator.clipboard&&typeof navigator.clipboard.writeText=="function"?navigator.clipboard.writeText(i.trim()):Promise.reject(new Error("No copy method succeeded or is available"))})().then(()=>{let r=document.getElementById("afx-control-copy-logs-btn");if(r){let s=r.textContent;r.textContent="\u2705 COPIED!",setTimeout(()=>{r.textContent=s},1500)}}).catch(r=>{let s=document.getElementById("afx-control-copy-logs-btn");if(s){let c=s.textContent;s.textContent="\u274C ERROR",setTimeout(()=>{s.textContent=c},1500)}})}var At=null,ne,Be,Fe={id:"ecg",name:"ECG Monitor",run:ra,stop:aa,onResize:(t,i)=>{ne=t,Be=i},marqueeFont:{color:"#FF1A1A",shadowColor:"#CC0000",shadowBlur:15}};function ra(t,i){let e=t.ctx2d;ne=t.width,Be=t.height;let o=document.getElementById("afx-top-group-right"),r=document.getElementById("afx-ecg-panel");!r&&o&&(r=document.createElement("div"),r.id="afx-ecg-panel",o.insertBefore(r,o.firstChild)),r&&!r.querySelector(".afx-ecg-bpm-val")&&(r.innerHTML=`
            <div class="afx-ecg-bpm">\u2665 <span class="afx-ecg-bpm-val">--</span> BPM</div>
            <div class="afx-ecg-rhythm">--</div>
        `);let s=r?r.querySelector(".afx-ecg-bpm-val"):null,c=r?r.querySelector(".afx-ecg-rhythm"):null,a=localStorage.getItem("ankifx_ecg_rhythm")||"sinus";Fe.controls=[{type:"button",id:"ecg-trigger",label:a==="sinus"?"\u26A1 TRIGGER ARRHYTHMIA":"\u{1F49A} RESTORE SINUS",onClick:()=>{let M=localStorage.getItem("ankifx_ecg_rhythm")||"sinus",L;if(M==="sinus"){let H=["first_degree","mobitz_1","mobitz_2","third_degree","st_elevation","afib","a_flutter","torsades"];L=H[Math.floor(Math.random()*H.length)]}else L="sinus";localStorage.setItem("ankifx_ecg_rhythm",L),localStorage.setItem("ankifx_ecg_trigger_time",Date.now())}}];let n=200,u=40,d=120,l=25,p=5,v=new Float32Array(4096),h=0,f=0,m=0,x=0,g=0,b=0,k=0,S=100,P=.6,y=72,E=0,w="sinus",T=25+Math.random()*15,B=0,I=["first_degree","mobitz_1","mobitz_2","third_degree","st_elevation","afib","a_flutter","torsades"],_=0;function j(){h<ne&&(h=ne)}let D=(M,L,H,z)=>z*Math.exp(-((M-L)**2)/(2*H**2));function R(M){return D(M,.15,.03,.12)}function G(M){return D(M,.03,.03,.12)}function K(M,L){let H=L%4;return H===0?D(M,.17,.03,.12):H===1?D(M,.1,.03,.12):H===2?D(M,.03,.03,.12):D(M,.15,.03,.12)}function Z(M){return D(M,.08,.03,.12)}function A(M){return .035*Math.sin(M*Math.PI*40)+.015*Math.sin(M*Math.PI*96)+.008*Math.sin(M*Math.PI*176)}function N(M){return .085*(M*4%1-.5)}function V(M,L){let H=Math.sin(M*Math.PI*2)*.58+Math.sin(M*Math.PI*4)*.16,z=Math.sin(L*1.2);return H*z}function q(M,L=!1){let H=0;return H+=D(M,.33,.008,-.08),H+=D(M,.36,.012,1),H+=D(M,.39,.008,-.12),L&&(H+=D(M,.46,.07,.38)),H+=D(M,.56,.04,.22),H}function ie(M,L,H){let z=M%1,ee=Math.floor(M);return L==="sinus"?R(z)+q(z,!1):L==="first_degree"?G(z)+q(z,!1):L==="mobitz_1"?ee%4===3?K(z,ee):K(z,ee)+q(z,!1):L==="mobitz_2"?ee%3===2?Z(z):Z(z)+q(z,!1):L==="st_elevation"?R(z)+q(z,!0):L==="afib"?A(z)+q(z,!1):L==="a_flutter"?N(z)+q(z,!1):L==="torsades"?V(z,H):0}function ce(M,L){let H=M%1,z=L%1,ee=D(H,.15,.03,.12),pe=D(z,.33,.008,-.08)+D(z,.36,.012,1)+D(z,.39,.008,-.12)+D(z,.56,.04,.22);return ee+pe}function xe(){e.strokeStyle="rgba(60, 0, 0, 0.15)",e.lineWidth=.5,e.beginPath();for(let M=0;M<ne;M+=p)e.moveTo(M,0),e.lineTo(M,Be);for(let M=0;M<Be;M+=p)e.moveTo(0,M),e.lineTo(ne,M);e.stroke(),e.strokeStyle="rgba(80, 0, 0, 0.3)",e.lineWidth=1,e.beginPath();for(let M=0;M<ne;M+=l)e.moveTo(M,0),e.lineTo(M,Be);for(let M=0;M<Be;M+=l)e.moveTo(0,M),e.lineTo(ne,M);e.stroke()}let Ye=-1,Ke="";function Xe(){if(!r)return;let M=.5+E*.5;r.style.opacity=M;let L="SINUS RHYTHM";w==="first_degree"?L="1\xB0 AV BLOCK":w==="mobitz_1"?L="2\xB0 AV (MOBITZ 1)":w==="mobitz_2"?L="2\xB0 AV (MOBITZ 2)":w==="third_degree"?L="3\xB0 AV BLOCK":w==="st_elevation"?L="ST ELEVATION":w==="afib"?L="ATRIAL FIBRILLATION":w==="a_flutter"?L="ATRIAL FLUTTER":w==="torsades"&&(L="TORSADES DE POINTES"),s&&y!==Ye&&(s.textContent=y,Ye=y),c&&L!==Ke&&(c.textContent=L,Ke=L)}function De(M){x||(x=M);let L=Math.min((M-x)/1e3,.05);x=M,m+=L,j();let H=localStorage.getItem("ankifx_ecg_rhythm")||"sinus",z=parseInt(localStorage.getItem("ankifx_ecg_trigger_time")||"0");if(z>B){if(B=z,w=H,T=m+25+Math.random()*15,w!=="sinus"){let X=I.indexOf(w);X!==-1&&(_=(X+1)%I.length)}w==="afib"&&(S=70+Math.floor(Math.random()*60),P=60/S),Fe.controls&&Fe.controls[0]&&(Fe.controls[0].label=w==="sinus"?"\u26A1 TRIGGER ARRHYTHMIA":"\u{1F49A} RESTORE SINUS",AnkiFX.renderEffectControls(Fe))}m>=T&&(w==="sinus"?(w=I[_],_=(_+1)%I.length):w="sinus",localStorage.setItem("ankifx_ecg_rhythm",w),T=m+25+Math.random()*15,w==="afib"&&(S=70+Math.floor(Math.random()*60),P=60/S),Fe.controls&&Fe.controls[0]&&(Fe.controls[0].label=w==="sinus"?"\u26A1 TRIGGER ARRHYTHMIA":"\u{1F49A} RESTORE SINUS",AnkiFX.renderEffectControls(Fe)));let ee=72;w==="third_degree"?ee=35:w==="mobitz_1"||w==="mobitz_2"?ee=68:w==="afib"?ee=S:w==="a_flutter"?ee=75:w==="torsades"&&(ee=220);let pe=w==="afib"?P:60/ee,ye=g,Se=b,Ee=k;if(w==="third_degree"?(b+=L/(60/88),k+=L/(60/ee)):g+=L/pe,w!=="third_degree"){let X=Math.floor(ye);Math.floor(g)>X&&w==="afib"&&(S=70+Math.floor(Math.random()*65),P=60/S)}if(w==="third_degree")Math.floor(Ee-.36)<Math.floor(k-.36)&&(E=1,y=ee+Math.floor(Math.random()*3)-1);else if(Math.floor(ye-.36)<Math.floor(g-.36)){let X=Math.floor(g-.36),ae=!1;w==="mobitz_1"?ae=X%4===3:w==="mobitz_2"&&(ae=X%3===2),ae||(E=1,y=Math.floor(ee),w!=="torsades"&&w!=="a_flutter"&&(y+=Math.floor(Math.random()*5)-2))}E=Math.max(0,E-L*4);let Ce=n*L,Je=f+Ce,ei=Math.floor(f),$=Math.floor(Je);for(let X=ei;X<=$;X++){let ae=X%ne,me=(X-f)/Ce;if(w==="third_degree"){let ge=Se+(b-Se)*me,ti=Ee+(k-Ee)*me;v[ae]=ce(ge,ti)}else{let ge=ye+(g-ye)*me;v[ae]=ie(ge,w,m)}}f=Je,f>=ne&&(f-=ne),e.fillStyle="#000000",e.fillRect(0,0,ne,Be),xe();let O=Be*.55,Q=Be*.35,oe=Math.floor(f)%ne,W=4;e.save(),e.lineCap="round",e.lineJoin="round";for(let X=0;X<3;X++){X===0?(e.lineWidth=15,e.strokeStyle="rgb(200, 0, 0)"):X===1?(e.lineWidth=7,e.strokeStyle="rgb(255, 15, 15)"):(e.lineWidth=2.4,e.strokeStyle="rgb(255, 175, 175)");for(let ae=0;ae<ne;ae+=W){let me=oe-ae;if(me<0&&(me+=ne),me>ne-u)continue;let ge=1,ti=ne-u-d;if(me>ti&&(ge=1-(me-ti)/d,ge=Math.max(0,ge)),ge<=0)continue;let ii=0;me<12&&(ii=1-me/12),X===0?e.globalAlpha=ge*(.07+ii*.13):X===1?e.globalAlpha=ge*(.28+ii*.32):e.globalAlpha=ge*(.85+ii*.15),e.beginPath();let Vr=O-v[ae]*Q;e.moveTo(ae,Vr);let oi=Math.min(ae+W,ne);for(let gt=ae+1;gt<oi;gt++){let Wr=O-v[gt]*Q;e.lineTo(gt,Wr)}if(oi<ne){let gt=O-v[oi]*Q;e.lineTo(oi,gt)}e.stroke()}}e.globalAlpha=1,e.restore(),e.save();let Re=e.createLinearGradient(oe-3,0,oe+3,0);Re.addColorStop(0,"rgba(255, 0, 0, 0)"),Re.addColorStop(.5,"rgba(255, 50, 50, 0.4)"),Re.addColorStop(1,"rgba(255, 0, 0, 0)"),e.fillStyle=Re,e.fillRect(oe-3,0,6,Be),e.restore(),Xe(),At=requestAnimationFrame(De)}At=requestAnimationFrame(De)}function aa(){At&&(cancelAnimationFrame(At),At=null);let t=document.getElementById("afx-ecg-panel");t&&t.remove()}var Lt=null,io,oo,Io={id:"fire",name:"Doom Fire",run:sa,stop:la,onResize:(t,i)=>{io=t,oo=i},preferredTrack:{title:"Doom 3 BFG Edition",trackTitle:"DOOM E1M1"},marqueeFont:{color:"#ffffff",shadowColor:"rgba(0,0,0,0.8)",shadowBlur:5}},na=[[7,7,7],[31,7,7],[47,15,7],[71,15,7],[87,23,7],[103,31,7],[119,31,7],[143,39,7],[159,47,7],[175,63,7],[191,71,7],[199,71,7],[223,79,7],[223,87,7],[223,87,7],[215,95,7],[215,95,7],[215,103,15],[207,111,15],[207,119,15],[207,127,15],[207,135,23],[199,135,23],[199,143,23],[199,151,31],[191,159,31],[191,159,31],[191,167,39],[191,167,39],[191,175,47],[183,175,47],[183,183,47],[183,183,55],[207,207,111],[223,223,159],[239,239,199],[255,255,255]];function sa(t,i){let e=t.ctx2d;io=t.width,oo=t.height;let o=320,r=168,s=new Uint8Array(o*r),c=e.createImageData(o,r),a=c.data,n=document.createElement("canvas");n.width=o,n.height=r;let u=n.getContext("2d");function d(){s.fill(0);for(let f=0;f<o;f++)s[(r-1)*o+f]=36}function l(f){let m=s[f];if(m===0)s[f-o]=0;else{let x=Math.floor(Math.random()*3),g=f-x+1;s[g-o]=m-(x&1)}}function p(){for(let f=0;f<o;f++)for(let m=1;m<r;m++)l(m*o+f)}function v(){for(let f=0;f<s.length;f++){let m=s[f],x=na[m],g=f*4;a[g]=x[0],a[g+1]=x[1],a[g+2]=x[2],a[g+3]=255}}d();function h(){p(),v(),u.putImageData(c,0,0),e.save(),e.imageSmoothingEnabled=!1,e.drawImage(n,0,0,io,oo),e.restore(),Lt=requestAnimationFrame(h)}Lt=requestAnimationFrame(h)}function la(){Lt&&(cancelAnimationFrame(Lt),Lt=null)}var Dt=null,Ae,Le,se=parseInt(localStorage.getItem("ankifx_geometry_mode")||"0",10),Me=["unity","light","flow","fractal"];(isNaN(se)||se<0||se>=Me.length)&&(se=0);var Ne=140,Ge=new Float32Array(Ne),Ve=new Float32Array(Ne),ro=new Float32Array(Ne),ao=new Float32Array(Ne),si=new Float32Array(Ne),no=new Float32Array(Ne),It=new Float32Array(Ne),zo=new Float32Array(Ne),li=!1,Qe=null,_e=null,Rt=0,zt=0,Oo=0;function ci(t){return 45+175*(.5-.5*Math.cos(t*.035))}function yt(t,i,e,o){let s=(ci(t)+i)%360,c=80+e*18,a=45+e*25;return`hsla(${s.toFixed(1)}, ${c.toFixed(0)}%, ${a.toFixed(0)}%, ${o.toFixed(3)})`}function Ot(t,i){return 1+.032*Math.sin(t*.38+i)}function fi(t,i){return .5+.5*Math.sin(t*.22+i)}var nt={id:"geometry",name:"Geometry",run:fa,stop:ua,onResize:(t,i)=>{Ae=t,Le=i,co()},controls:[{type:"button",id:"geometry-mode-switch",label:lo(se),onClick:()=>ca()}],marqueeFont:{colorFn:(t,i)=>`hsl(${(ci(t*.016)+i*2.5)%360}, 95%, 65%)`,shadowColor:"rgba(255, 215, 0, 0.35)",shadowBlur:14}};function ca(){se=(se+1)%Me.length,localStorage.setItem("ankifx_geometry_mode",se),nt.controls?.[0]&&(nt.controls[0].label=lo(se),typeof AnkiFX<"u"&&AnkiFX.renderEffectControls&&AnkiFX.renderEffectControls(nt)),co()}function lo(t){switch(Me[t]){case"unity":return"\u{1F441}\uFE0F UNITY MODE";case"light":return"\u2728 LIGHT MODE";case"flow":return"\u{1F30A} FLOW MODE";case"fractal":return"\u2744\uFE0F FRACTAL MOSAIC";default:return"\u{1F441}\uFE0F MODE"}}function Uo(){for(let t=0;t<Ne;t++)Bo(t,!0);li=!0}function Bo(t,i){let e=Math.random()*Math.PI*2,o=Math.random()*.18;Ge[t]=.5+Math.cos(e)*o,Ve[t]=.5+Math.sin(e)*o,ro[t]=Ge[t]*(Ae||400),ao[t]=Ve[t]*(Le||800),si[t]=i?Math.random():.55+Math.random()*.45,no[t]=9e-4+Math.random()*.0016,It[t]=Math.random()*Math.PI*2,zo[t]=Math.random()<.4?0:Math.random()<.65?135:175}function co(){Qe||(Qe=document.createElement("canvas"),_e=Qe.getContext("2d")),Qe.width=Math.floor((Ae||400)/4),Qe.height=Math.floor((Le||800)/4),Rt=Qe.width,zt=Qe.height,_e.clearRect(0,0,Rt,zt)}function fa(t,i){let e=t.ctx2d;Ae=t.width,Le=t.height;let o=0;nt.controls?.[0]&&(nt.controls[0].label=lo(se)),li||Uo(),co();function r(){o+=.012,Oo=Ot(o,0),e.globalCompositeOperation="source-over";let c=Me[se]==="unity"?.2:Me[se]==="light"?.13:Me[se]==="flow"?.07:.26;e.fillStyle=`rgba(2, 2, 8, ${c})`,e.fillRect(0,0,Ae,Le);let a=Ae/2,n=Le/2,u=Math.max(Ae,Le)*.85;switch(e.globalCompositeOperation="lighter",da(e,a,n,o),Me[se]){case"unity":ha(o,e,a,n,u);break;case"light":ma(o,e,a,n,u);break;case"flow":ga(o,e,a,n,u);break;case"fractal":ba(o,e,a,n,u);break}e.globalCompositeOperation="source-over";let d=e.createRadialGradient(a,n,u*.3,a,n,u*1.1);d.addColorStop(0,"rgba(0,0,0,0)"),d.addColorStop(1,"rgba(2,2,8,0.72)"),e.fillStyle=d,e.fillRect(0,0,Ae,Le),Dt=requestAnimationFrame(r)}Dt=requestAnimationFrame(r)}function ua(){Dt&&(cancelAnimationFrame(Dt),Dt=null),li=!1,_e?.clearRect(0,0,Rt,zt)}function da(t,i,e,o){let r=fi(o,0),s=Oo,c=.5+.5*r,a=Me[se]==="light"?1.7:1,n=(28+16*r)*s*a,u=Me[se]==="unity"?0:Me[se]==="light"?-25:Me[se]==="flow"?135:90,d=(ci(o)+u)%360,l=Me[se]==="light"?.55:.28,p=t.createRadialGradient(i,e,0,i,e,n*2.2);p.addColorStop(0,`hsla(${d}, 95%, 82%, ${(l*c).toFixed(3)})`),p.addColorStop(.4,`hsla(${d}, 85%, 60%, ${(l*.4).toFixed(3)})`),p.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=p,t.beginPath(),t.arc(i,e,n*2.5,0,Math.PI*2),t.fill()}function ha(t,i,e,o,r){let s=[8,10,12],c=Ot(t,.8),a=fi(t,0),n=7,d=t*.1%1;i.save(),i.translate(e,o);for(let l=0;l<n;l++){let p=(l-d+n)%n,h=Math.pow(2,p-2.5)*c*58;if(h>r*1.4||h<1.5)continue;let f=1;p<1?f=p:p>n-1.4&&(f=(n-p)/1.4),f=Math.max(0,Math.min(1,f))*.62;let m=s[l%3],x=(l*45+a*60)%360,g=l%2===0?1:-1,b=t*.025*g+l*.31+a*.18;i.save(),i.rotate(b),pa(i,h,m,f,x,t),i.restore()}i.restore()}function pa(t,i,e,o,r,s){let c=e===8||e===10?3:5;t.beginPath();for(let a=0;a<e;a++){let n=a/e*Math.PI*2,u=(a+c)%e/e*Math.PI*2;t.moveTo(Math.cos(n)*i,Math.sin(n)*i),t.lineTo(Math.cos(u)*i,Math.sin(u)*i)}for(let a=0;a<e;a++){let n=a/e*Math.PI*2;t.moveTo(0,0),t.lineTo(Math.cos(n)*i,Math.sin(n)*i)}t.lineWidth=1.1,t.strokeStyle=yt(s,r,o,o*.9),t.stroke()}function ma(t,i,e,o,r){let s=Ot(t,1.6),c=fi(t,.5);Do(i,e,o,t,1,r,s,c,0);let a=3;for(let d=0;d<a;d++){let l=t*.55+d*Math.PI*2/a,p=(.12+.08*c)*r*s,v=e+Math.cos(l)*p,h=o+Math.sin(l)*p;Do(i,v,h,t+d*.38,.42,r,s,c,d+1)}i.globalCompositeOperation="source-over",_e.fillStyle="rgba(0,0,0,0.04)",_e.fillRect(0,0,Rt,zt);let n=Rt/Ae,u=zt/Le;for(let d=0;d<a;d++){let l=t*.55+d*Math.PI*2/a,p=(.12+.08*c)*r*s,v=e+Math.cos(l)*p,h=o+Math.sin(l)*p,f=(e+v)/2*n,m=(o+h)/2*u,x=(ci(t)+d*30)%360,g=_e.createRadialGradient(f,m,0,f,m,18);g.addColorStop(0,`hsla(${x}, 95%, 85%, 0.22)`),g.addColorStop(1,"rgba(0,0,0,0)"),_e.globalCompositeOperation="lighter",_e.fillStyle=g,_e.beginPath(),_e.arc(f,m,18,0,Math.PI*2),_e.fill()}i.globalCompositeOperation="lighter",i.globalAlpha=.55,i.drawImage(Qe,0,0,Ae,Le),i.globalAlpha=1}function Do(t,i,e,o,r,s,c,a,n){let l=8+n*2;for(let p=0;p<5;p++){let v=(p/5+o*.16)%1,h=v*s*.8*c,f=Math.sin(v*Math.PI)*.42*r;if(f<=.005)continue;let m=v*160+n*25;t.beginPath(),t.arc(i,e,h,0,Math.PI*2),t.strokeStyle=yt(o,m,1-v*.4,f),t.lineWidth=1.4+(1-v)*5.5,t.stroke(),t.save(),t.translate(i,e),t.rotate(o*.06+n*.7),t.beginPath();for(let x=0;x<l;x++){let g=x/l*Math.PI*2;t.moveTo(Math.cos(g)*(h*.84),Math.sin(g)*(h*.84)),t.lineTo(Math.cos(g)*h,Math.sin(g)*h)}t.strokeStyle=yt(o,m+30,.9,f*.22),t.lineWidth=.9,t.stroke(),t.restore()}}function ga(t,i,e,o,r){li||Uo();let s=Ae,c=Le,a=1/s,n=1/c,u=Ot(t,2.4),d=fi(t,1.2),l=t*.18,p=4e-4+3e-4*d;for(let h=0;h<Ne;h++){let f=Ge[h]*s,m=Ve[h]*c;ro[h]=f,ao[h]=m;let x=Ge[h]-.5,g=Ve[h]-.5,b=Math.sqrt(x*x+g*g)+.001,k=x/b,S=g/b,P=-S,y=k,E=Ge[h]*3.2,w=Ve[h]*3.2,T=Math.sin(E+t*.35)*Math.cos(w-t*.2)*.55,I=Math.atan2(y*.65+S*-.2+Math.sin(T*Math.PI)*.35,P*.65+k*-.2+Math.cos(T*Math.PI)*.35)-It[h],_=I-Math.round(I/(Math.PI*2))*Math.PI*2;if(It[h]+=_*.12,Ge[h]+=Math.cos(It[h])*no[h]-k*p*(b>.1?1:-1),Ve[h]+=Math.sin(It[h])*no[h]-S*p*(b>.1?1:-1),si[h]-=.0016,Ge[h]<0||Ge[h]>1||Ve[h]<0||Ve[h]>1||si[h]<=0){Bo(h,!1);continue}let j=Ge[h]*s,D=Ve[h]*c,R=Math.sin(si[h]*Math.PI);i.beginPath(),i.moveTo(ro[h],ao[h]),i.lineTo(j,D),i.lineWidth=.5+R*3.5*u,i.strokeStyle=yt(t,zo[h],R,R*.32),i.stroke()}i.save();let v=[0,135,175];for(let h=0;h<3;h++){i.beginPath();let f=h*Math.PI*2/3,m=(.14+.06*d)*r*u;for(let x=0;x<80;x++){let g=x*.055,b=e+Math.cos(t*.22+g+f)*m+Math.sin(g*2.2+t*.4)*22*u,k=o+Math.sin(t*.28+g*1.25+f)*m+Math.cos(g*1.6-t*.3)*22*u;x===0?i.moveTo(b,k):i.lineTo(b,k)}i.strokeStyle=yt(t,v[h],.75,.1),i.lineWidth=1.6,i.stroke()}i.restore()}var Ro=[6,3,8];function ba(t,i,e,o,r){let s=Ot(t,3.2),c=r*(.27+.038*Math.sin(t*.18))*s;so(i,e,o,c,0,3,t,1,s),so(i,e,o,c*.36,0,2,t,-1,s)}function so(t,i,e,o,r,s,c,a,n){if(r>s||o<1)return;let u=Ro[r%Ro.length],d=Math.PI*2/u,l=.035*(r%2===0?a:-a),p=c*l+r*(.4+.15*(r+1));t.save(),t.translate(i,e),t.rotate(p);let v=r*48+22,h=(1-r/(s+1.5))*.58,f=1-r*.25;if(t.beginPath(),u===3){for(let m=0;m<=u;m++){let x=m*d-Math.PI/2,g=Math.cos(x)*o,b=Math.sin(x)*o;m===0?t.moveTo(g,b):t.lineTo(g,b)}for(let m=0;m<u;m++){let x=m*d-Math.PI/2,g=(m+1)%u*d-Math.PI/2,b=(Math.cos(x)+Math.cos(g))*o*.5,k=(Math.sin(x)+Math.sin(g))*o*.5;t.moveTo(0,0),t.lineTo(b,k)}}else if(u===8)for(let m=0;m<u;m++){let x=m/u*Math.PI*2,g=(m+3)%u/u*Math.PI*2;t.moveTo(Math.cos(x)*o,Math.sin(x)*o),t.lineTo(Math.cos(g)*o,Math.sin(g)*o)}else{for(let m=0;m<=u;m++){let x=m*d,g=Math.cos(x)*o,b=Math.sin(x)*o;m===0?t.moveTo(g,b):t.lineTo(g,b)}for(let m=0;m<u/2;m++){let x=m*d,g=(m+u/2)*d;t.moveTo(Math.cos(x)*o,Math.sin(x)*o),t.lineTo(Math.cos(g)*o,Math.sin(g)*o)}}if(t.strokeStyle=yt(c,v,f,h),t.lineWidth=Math.max(.5,1.5/(r+1)),t.stroke(),t.restore(),r<s){let m=.33+.06*Math.sin(c*.28+r);for(let x=0;x<u;x++){let g=x*d+p,b=i+Math.cos(g)*o,k=e+Math.sin(g)*o,S=r*7.3+x*2.1,P=m+.04*Math.sin(c*.4+S);so(t,b,k,o*P,r+1,s,c,a,n)}}}var ui=null;function qo(t){ui=t}var va=["#c3e4ff","#6ec3f4","#eae2ff","#b9beff"];function No(t){return[(t>>16&255)/255,(t>>8&255)/255,(255&t)/255]}var fo=class{constructor(i,e,o,r){let s=this;s.canvas=i,s.gl=e,s.meshes=[],s.debug=()=>{};let c=s.gl;Object.defineProperties(s,{Material:{enumerable:!1,value:class{constructor(n,u,d={}){let l=this;function p(f,m){let x=c.createShader(f);return c.shaderSource(x,m),c.compileShader(x),c.getShaderParameter(x,c.COMPILE_STATUS)||console.error("[Gradient/WebGL] Shader compile error:",c.getShaderInfoLog(x)),x}function v(f,m){return Object.entries(f).map(([x,g])=>g.getDeclaration(x,m)).join(`
`)}l.uniforms=d,l.uniformInstances=[];let h=`
              precision highp float;
            `;l.vertexSource=`
              ${h}
              attribute vec4 position;
              attribute vec2 uv;
              attribute vec2 uvNorm;
              ${v(s.commonUniforms,"vertex")}
              ${v(d,"vertex")}
              ${n}
            `,l.Source=`
              ${h}
              ${v(s.commonUniforms,"fragment")}
              ${v(d,"fragment")}
              ${u}
            `,l.vertexShader=p(c.VERTEX_SHADER,l.vertexSource),l.fragmentShader=p(c.FRAGMENT_SHADER,l.Source),l.program=c.createProgram(),c.attachShader(l.program,l.vertexShader),c.attachShader(l.program,l.fragmentShader),c.linkProgram(l.program),l.vertexShader&&(c.detachShader(l.program,l.vertexShader),c.deleteShader(l.vertexShader)),l.fragmentShader&&(c.detachShader(l.program,l.fragmentShader),c.deleteShader(l.fragmentShader)),c.getProgramParameter(l.program,c.LINK_STATUS)||console.error("[Gradient/WebGL] Program link error:",c.getProgramInfoLog(l.program)),c.useProgram(l.program),l.attachUniforms(void 0,s.commonUniforms),l.attachUniforms(void 0,l.uniforms)}attachUniforms(n,u){let d=this;n===void 0?Object.entries(u).forEach(([l,p])=>{d.attachUniforms(l,p)}):u.type==="array"?u.value.forEach((l,p)=>d.attachUniforms(`${n}[${p}]`,l)):u.type==="struct"?Object.entries(u.value).forEach(([l,p])=>d.attachUniforms(`${n}.${l}`,p)):d.uniformInstances.push({uniform:u,location:c.getUniformLocation(d.program,n)})}}},Uniform:{enumerable:!1,value:class{constructor(n){this.type="float",Object.assign(this,n),this.typeFn={float:"1f",int:"1i",vec2:"2fv",vec3:"3fv",vec4:"4fv",mat4:"Matrix4fv"}[this.type]||"1f",this.update()}update(n){this.value!==void 0&&c[`uniform${this.typeFn}`](n,this.typeFn.substring(0,6)==="Matrix"?this.transpose:this.value,this.typeFn.substring(0,6)==="Matrix"?this.value:null)}getDeclaration(n,u,d){let l=this;if(l.excludeFrom!==u){if(l.type==="array")return l.value[0].getDeclaration(n,u,l.value.length)+`
const int ${n}_length = ${l.value.length};`;if(l.type==="struct"){let p=n.replace("u_","");return p=p.charAt(0).toUpperCase()+p.slice(1),`uniform struct ${p} 
{
`+Object.entries(l.value).map(([v,h])=>h.getDeclaration(v,u).replace(/^uniform/,"")).join("")+`
} ${n}${d>0?`[${d}]`:""};`}return`uniform ${l.type} ${n}${d>0?`[${d}]`:""};`}}}},PlaneGeometry:{enumerable:!1,value:class{constructor(n,u,d,l,p){c.createBuffer(),this.attributes={position:new s.Attribute({target:c.ARRAY_BUFFER,size:3}),uv:new s.Attribute({target:c.ARRAY_BUFFER,size:2}),uvNorm:new s.Attribute({target:c.ARRAY_BUFFER,size:2}),index:new s.Attribute({target:c.ELEMENT_ARRAY_BUFFER,size:3,type:c.UNSIGNED_SHORT})},this.setTopology(d,l),this.setSize(n,u,p)}setTopology(n=1,u=1){let d=this;d.xSegCount=n,d.ySegCount=u,d.vertexCount=(d.xSegCount+1)*(d.ySegCount+1),d.quadCount=d.xSegCount*d.ySegCount*2,d.attributes.uv.values=new Float32Array(2*d.vertexCount),d.attributes.uvNorm.values=new Float32Array(2*d.vertexCount),d.attributes.index.values=new Uint16Array(3*d.quadCount);for(let l=0;l<=d.ySegCount;l++)for(let p=0;p<=d.xSegCount;p++){let v=l*(d.xSegCount+1)+p;if(d.attributes.uv.values[2*v]=p/d.xSegCount,d.attributes.uv.values[2*v+1]=1-l/d.ySegCount,d.attributes.uvNorm.values[2*v]=p/d.xSegCount*2-1,d.attributes.uvNorm.values[2*v+1]=1-l/d.ySegCount*2,p<d.xSegCount&&l<d.ySegCount){let h=l*d.xSegCount+p;d.attributes.index.values[6*h]=v,d.attributes.index.values[6*h+1]=v+1+d.xSegCount,d.attributes.index.values[6*h+2]=v+1,d.attributes.index.values[6*h+3]=v+1,d.attributes.index.values[6*h+4]=v+1+d.xSegCount,d.attributes.index.values[6*h+5]=v+2+d.xSegCount}}d.attributes.uv.update(),d.attributes.uvNorm.update(),d.attributes.index.update()}setSize(n=1,u=1,d="xz"){let l=this;l.width=n,l.height=u,l.orientation=d,(!l.attributes.position.values||l.attributes.position.values.length!==3*l.vertexCount)&&(l.attributes.position.values=new Float32Array(3*l.vertexCount));let p=n/-2,v=u/-2,h=n/l.xSegCount,f=u/l.ySegCount;for(let m=0;m<=l.ySegCount;m++){let x=v+m*f;for(let g=0;g<=l.xSegCount;g++){let b=p+g*h,k=m*(l.xSegCount+1)+g;l.attributes.position.values[3*k+"xyz".indexOf(d[0])]=b,l.attributes.position.values[3*k+"xyz".indexOf(d[1])]=-x}}l.attributes.position.update()}}},Mesh:{enumerable:!1,value:class{constructor(n,u){let d=this;d.geometry=n,d.material=u,d.wireframe=!1,d.attributeInstances=[],Object.entries(d.geometry.attributes).forEach(([l,p])=>{d.attributeInstances.push({attribute:p,location:p.attach(l,d.material.program)})}),s.meshes.push(d)}draw(){c.useProgram(this.material.program),this.material.uniformInstances.forEach(({uniform:n,location:u})=>n.update(u)),this.attributeInstances.forEach(({attribute:n,location:u})=>n.use(u)),c.drawElements(this.wireframe?c.LINES:c.TRIANGLES,this.geometry.attributes.index.values.length,c.UNSIGNED_SHORT,0)}remove(){s.meshes=s.meshes.filter(n=>n!==this)}}},Attribute:{enumerable:!1,value:class{constructor(n){this.type=c.FLOAT,this.normalized=!1,this.buffer=c.createBuffer(),Object.assign(this,n),this.update()}update(){this.values!==void 0&&(c.bindBuffer(this.target,this.buffer),c.bufferData(this.target,this.values,c.STATIC_DRAW))}attach(n,u){let d=c.getAttribLocation(u,n);return this.target===c.ARRAY_BUFFER&&(c.enableVertexAttribArray(d),c.vertexAttribPointer(d,this.size,this.type,this.normalized,0,0)),d}use(n){c.bindBuffer(this.target,this.buffer),this.target===c.ARRAY_BUFFER&&(c.enableVertexAttribArray(n),c.vertexAttribPointer(n,this.size,this.type,this.normalized,0,0))}}}});let a=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];s.commonUniforms={projectionMatrix:new s.Uniform({type:"mat4",value:a}),modelViewMatrix:new s.Uniform({type:"mat4",value:a}),resolution:new s.Uniform({type:"vec2",value:[1,1]}),aspectRatio:new s.Uniform({type:"float",value:1})},o&&r&&this.setSize(o,r)}setSize(i=640,e=480,o=1){this.width=i,this.height=e,this.gl.viewport(0,0,i*o,e*o),this.commonUniforms.resolution.value=[i,e],this.commonUniforms.aspectRatio.value=i/e}setOrthographicCamera(i=0,e=0,o=0,r=-2e3,s=2e3){this.commonUniforms.projectionMatrix.value=[2/this.width,0,0,0,0,2/this.height,0,0,0,0,2/(r-s),0,i,e,o,1]}render(){this.gl.clearColor(0,0,0,0),this.gl.clearDepth(1),this.meshes.forEach(i=>i.draw())}cleanup(){let i=this.gl;this.meshes.forEach(e=>{e.attributeInstances&&e.attributeInstances.forEach(({location:o})=>{typeof o=="number"&&o>=0&&i.disableVertexAttribArray(o)}),e.material&&e.material.program&&i.deleteProgram(e.material.program),e.geometry&&e.geometry.attributes&&Object.values(e.geometry.attributes).forEach(o=>{o.buffer&&i.deleteBuffer(o.buffer)})}),this.meshes=[]}},di=class{constructor(i,e,o,r){this.canvas=i,this.gl=e,this.width=o,this.height=r,this.angle=0,this.conf={presetName:"",wireframe:!1,density:[.06,.16],zoom:1,rotation:0,playing:!0},this.t=1253106,this.last=0,this.amp=320,this.seed=5,this.freqX=14e-5,this.freqY=29e-5,this.activeColors=[1,1,1,1],this.shaderFiles={vertex:`
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
            `},this.initGradientColors(),this.minigl=new fo(i,e,o,r),this.initMesh(),this.resize(),this.updateThemeAwareText()}initGradientColors(){this.sectionColors=va.map(i=>No(parseInt(i.substring(1),16)))}initMaterial(){this.uniforms={u_time:new this.minigl.Uniform({value:0}),u_shadow_power:new this.minigl.Uniform({value:5}),u_darken_top:new this.minigl.Uniform({value:0}),u_active_colors:new this.minigl.Uniform({value:this.activeColors,type:"vec4"}),u_global:new this.minigl.Uniform({value:{noiseFreq:new this.minigl.Uniform({value:[this.freqX,this.freqY],type:"vec2"}),noiseSpeed:new this.minigl.Uniform({value:5e-6})},type:"struct"}),u_vertDeform:new this.minigl.Uniform({value:{incline:new this.minigl.Uniform({value:Math.sin(this.angle)/Math.cos(this.angle)}),offsetTop:new this.minigl.Uniform({value:-.5}),offsetBottom:new this.minigl.Uniform({value:-.5}),noiseFreq:new this.minigl.Uniform({value:[3,4],type:"vec2"}),noiseAmp:new this.minigl.Uniform({value:this.amp}),noiseSpeed:new this.minigl.Uniform({value:10}),noiseFlow:new this.minigl.Uniform({value:3}),noiseSeed:new this.minigl.Uniform({value:this.seed})},type:"struct",excludeFrom:"fragment"}),u_baseColor:new this.minigl.Uniform({value:this.sectionColors[0],type:"vec3",excludeFrom:"fragment"}),u_waveLayers:new this.minigl.Uniform({value:[],excludeFrom:"fragment",type:"array"})};for(let i=1;i<this.sectionColors.length;i+=1)this.uniforms.u_waveLayers.value.push(new this.minigl.Uniform({value:{color:new this.minigl.Uniform({value:this.sectionColors[i],type:"vec3"}),noiseFreq:new this.minigl.Uniform({value:[2+i/this.sectionColors.length,3+i/this.sectionColors.length],type:"vec2"}),noiseSpeed:new this.minigl.Uniform({value:11+.3*i}),noiseFlow:new this.minigl.Uniform({value:6.5+.3*i}),noiseSeed:new this.minigl.Uniform({value:this.seed+10*i}),noiseFloor:new this.minigl.Uniform({value:.1}),noiseCeil:new this.minigl.Uniform({value:.63+.07*i})},type:"struct"}));return this.vertexShader=[this.shaderFiles.noise,this.shaderFiles.blend,this.shaderFiles.vertex].join(`

`),new this.minigl.Material(this.vertexShader,this.shaderFiles.fragment,this.uniforms)}initMesh(){this.material=this.initMaterial(),this.geometry=new this.minigl.PlaneGeometry,this.mesh=new this.minigl.Mesh(this.geometry,this.material)}resize(){let i=Math.min(window.devicePixelRatio||1,1.5);this.minigl.setSize(this.width,this.height,i),this.minigl.setOrthographicCamera(),this.xSegCount=Math.ceil(this.width*this.conf.density[0]),this.ySegCount=Math.ceil(this.height*this.conf.density[1]),this.mesh.geometry.setTopology(this.xSegCount,this.ySegCount),this.mesh.geometry.setSize(this.width,this.height),this.mesh.material.uniforms.u_shadow_power.value=this.width<600?5:6}animate=i=>{if(!this.conf.playing)return;this.last===0&&(this.last=i);let e=Math.min(i-this.last,1e3/15);this.last=i,this.t+=e,this.mesh.material.uniforms.u_time.value=this.t,this.minigl.render(),this.animationId=requestAnimationFrame(this.animate)};updateThemeAwareText(){if(!this.sectionColors||this.sectionColors.length===0)return;let i=0;this.sectionColors.forEach(s=>{let c=s[0],a=s[1],n=s[2],u=.299*c+.587*a+.114*n;i+=u});let e=i/this.sectionColors.length,o=e>.6?"#111111":"#ffffff",r=e>.6?"0 1px 2px rgba(255, 255, 255, 0.8)":"0 1px 3px rgba(0, 0, 0, 0.9), 0 2px 10px rgba(0, 0, 0, 0.6)";document.documentElement.style.setProperty("--afx-body-color",o),document.documentElement.style.setProperty("--afx-text-shadow",r),ui&&(ui.marqueeFont={colorFn:(s,c)=>{if(!this.sectionColors||this.sectionColors.length===0)return"#ffffff";let a=(s*1.5+c*.25)%this.sectionColors.length,n=Math.floor(a),u=(n+1)%this.sectionColors.length,d=a-n,l=this.sectionColors[n],p=this.sectionColors[u],v=l[0]*(1-d)+p[0]*d,h=l[1]*(1-d)+p[1]*d,f=l[2]*(1-d)+p[2]*d,m=e>.6?.45:1;return`rgb(${Math.round(v*m*255)}, ${Math.round(h*m*255)}, ${Math.round(f*m*255)})`},shadowColor:e>.6?"rgba(0, 0, 0, 0.25)":"inherit",shadowBlur:16},window.AnkiFX&&window.AnkiFX.marquee&&window.AnkiFX.marquee.updateStyles(ui.marqueeFont))}randomizeColors(){let i=()=>"#"+Math.floor(Math.random()*16777215).toString(16).padStart(6,"0"),e=[i(),i(),i(),i()];if(this.sectionColors=e.map(o=>No(parseInt(o.substring(1),16))),this.uniforms&&this.uniforms.u_baseColor&&this.uniforms.u_waveLayers&&this.uniforms.u_waveLayers.value){this.uniforms.u_baseColor.value=this.sectionColors[0];for(let o=0;o<this.uniforms.u_waveLayers.value.length;o++){let r=this.uniforms.u_waveLayers.value[o];r&&r.value&&r.value.color&&(r.value.color.value=this.sectionColors[o+1]||this.sectionColors[0])}}this.updateThemeAwareText()}destroy(){this.conf.playing=!1,this.animationId&&cancelAnimationFrame(this.animationId),this.minigl&&this.minigl.cleanup()}};var de=null,uo={id:"gradient",name:"Gradient",controls:[{type:"button",id:"gradient-randomize",label:"\u{1F3A8} RANDOMIZE",onClick:()=>{de&&de.randomizeColors()}}],run:(t,i)=>{de&&de.destroy(),de=new di(t.canvasGL,t.gl,t.width,t.height),de.conf.playing=!0,de.last=0,de.animationId=requestAnimationFrame(de.animate)},stop:()=>{de&&(de.destroy(),de=null),document.documentElement.style.removeProperty("--afx-body-color"),document.documentElement.style.removeProperty("--afx-text-shadow")},onResize:(t,i,e)=>{de&&(de.width=t,de.height=i,de.resize())},marqueeFont:{color:"#E6E6FA",shadowColor:"rgba(230, 230, 250, 0.6)",shadowBlur:8}};qo(uo);function hi(t,i,e){function o(u,d){let l=t.createShader(u);return t.shaderSource(l,d),t.compileShader(l),t.getShaderParameter(l,t.COMPILE_STATUS)?l:(console.error("[AnkiFX/WebGL] Shader compile error:",t.getShaderInfoLog(l)),t.deleteShader(l),null)}let r=o(t.VERTEX_SHADER,i),s=o(t.FRAGMENT_SHADER,e);if(!r||!s)return r&&t.deleteShader(r),s&&t.deleteShader(s),null;let c=t.createProgram();if(t.attachShader(c,r),t.attachShader(c,s),t.linkProgram(c),t.detachShader(c,r),t.detachShader(c,s),t.deleteShader(r),t.deleteShader(s),!t.getProgramParameter(c,t.LINK_STATUS))return console.error("[AnkiFX/WebGL] Program link error:",t.getProgramInfoLog(c)),t.deleteProgram(c),null;t.useProgram(c);let a=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,a),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,1,1]),t.STATIC_DRAW);let n=t.getAttribLocation(c,"position");return t.enableVertexAttribArray(n),t.vertexAttribPointer(n,2,t.FLOAT,!1,0,0),{program:c,buffer:a}}var mi=null,st,et,Bt,lt,gi=null,bi=null,we={id:"julia",name:"Julia Set",run:xa,stop:ya,onResize:(t,i,e)=>{st=t,et=i,lt&&Bt&&lt.uniform2f(Bt,t*e,i*e)},preferredTrack:{title:"Acoustica Power Bundle 4",trackTitle:"AiR"},presets:[{name:"Black Hole",cRe:-.8,cIm:.156,zoomDepth:8,targetX:-.086441,targetY:-.239323},{name:"Electric Lightning",cRe:.285,cIm:.013,zoomDepth:6,targetX:-.106662,targetY:.656613},{name:"Golden Dragon",cRe:-.4,cIm:.6,zoomDepth:9,targetX:-.042175,targetY:-.036744},{name:"Filigree",cRe:-.70176,cIm:-.3842,zoomDepth:10.5,targetX:-.096904,targetY:-.656621},{name:"Fractal Storm",cRe:-.7269,cIm:.1889,zoomDepth:10.5,targetX:-.237086,targetY:.547981},{name:"Seahorse Spiral",cRe:-.74543,cIm:.11301,zoomDepth:7.5,targetX:-.529406,targetY:.072863}],marqueeFont:{color:"#FFF",outline:"#000"}},vi=null,xi=null,pi={x:0,y:0},jo=parseInt(localStorage.getItem("ankifx_julia_preset_index")||"0",10),Ut=we.presets[jo]||we.presets[0],U={presetIndex:jo,cRe:Ut.cRe,cIm:Ut.cIm,zoomDepth:Ut.zoomDepth,targetX:Ut.targetX,targetY:Ut.targetY,speed:parseFloat(localStorage.getItem("ankifx_julia_speed"))||.15};function xa(t,i={}){lt=t.gl;let e=t.gl,o=t.ctx2d;st=t.width,et=t.height;let r=t.dpr,a=hi(e,`
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
    `);if(!a)return;let n=a.program;gi=n,bi=a.buffer;let u=e.getUniformLocation(n,"u_time"),d=e.getUniformLocation(n,"u_speed");Bt=e.getUniformLocation(n,"u_resolution");let l=e.getUniformLocation(n,"u_c"),p=e.getUniformLocation(n,"u_zoomDepth"),v=e.getUniformLocation(n,"u_target");e.uniform2f(Bt,st*r,et*r);let h=null,f=null,m=st<480,x=parseInt(localStorage.getItem("ankifx_julia_preset_index")||"0",10);U.presetIndex=x;let g=we.presets[x]||we.presets[0];U.cRe=i.cRe!==void 0?i.cRe:g.cRe,U.cIm=i.cIm!==void 0?i.cIm:g.cIm,U.zoomDepth=i.zoomDepth!==void 0?i.zoomDepth:g.zoomDepth,U.targetX=i.targetX!==void 0?i.targetX:g.targetX,U.targetY=i.targetY!==void 0?i.targetY:g.targetY;let b={type:"select",id:"julia-preset",label:"PRESET",options:we.presets.map((P,y)=>({value:y,text:(m?"\u{1F4A0} ":"[ Preset: ")+P.name+(m?"":" ]")})),value:U.presetIndex,onChange:P=>{let y=parseInt(P);localStorage.setItem("ankifx_julia_preset_index",y),U.presetIndex=y;let E=we.presets[y];E&&(Object.assign(i,E),U.cRe=E.cRe,U.cIm=E.cIm,U.zoomDepth=E.zoomDepth,U.targetX=E.targetX,U.targetY=E.targetY,i.debug&&(AnkiFX.setControlValue("julia-cRe",E.cRe),AnkiFX.setControlValue("julia-cIm",E.cIm),AnkiFX.setControlValue("julia-zoomDepth",E.zoomDepth),AnkiFX.setControlValue("julia-targetX",E.targetX),AnkiFX.setControlValue("julia-targetY",E.targetY)),we.stop(),t.ctx2d&&t.ctx2d.clearRect(0,0,st,et),AnkiFX.startEffect(i,document.getElementById("ankifx-background"),i.marqueePosition,"julia"))}};if(i.debug?we.controls=[]:we.controls=[b],i.debug){we.controls.push({type:"slider",id:"julia-cRe",label:"C-RE",min:-1.5,max:1,step:.001,value:U.cRe,onChange:w=>{U.cRe=w}},{type:"slider",id:"julia-cIm",label:"C-IM",min:-1,max:1,step:.001,value:U.cIm,onChange:w=>{U.cIm=w}},{type:"slider",id:"julia-zoomDepth",label:"ZOOM",min:2,max:25,step:.1,value:U.zoomDepth,onChange:w=>{U.zoomDepth=w}},{type:"slider",id:"julia-targetX",label:"T-X",min:-2,max:2,step:1e-4,value:U.targetX,onChange:w=>{U.targetX=w}},{type:"slider",id:"julia-targetY",label:"T-Y",min:-2,max:2,step:1e-4,value:U.targetY,onChange:w=>{U.targetY=w}},{type:"slider",id:"julia-speed",label:"SPD",min:.005,max:.3,step:.005,value:U.speed,onChange:w=>{U.speed=w,localStorage.setItem("ankifx_julia_speed",w)}}),we.controls.push(b);let P=document.getElementById("afx-effect-controls-container");P&&(h=document.createElement("div"),h.id="afx-julia-debug-info",h.className="afx-control-row julia-debug-el",h.style.cssText="height: 20px !important; margin-bottom: 2px; pointer-events: none; justify-content: flex-end; opacity: 0.8; font-size: 11px !important; color: #ff00ff; border: none; background: transparent;",h.textContent="HOVER TO SEE TARGET COORDS",P.prepend(h)),f=(w,T,B)=>{let I=B*U.speed/Math.max(U.zoomDepth,1)%2,_=I>1?2-I:I,j=_<.5?4*Math.pow(_,3):1-Math.pow(-2*_+2,3)/2,R=2.2/Math.exp(j*U.zoomDepth),G=j*Math.PI*.5,K=(w-st/2)/et,Z=(et/2-T)/et,A=Math.cos(G),N=Math.sin(G),V=(A*K+N*Z)*R,q=(-N*K+A*Z)*R;return{tx:U.targetX+V,ty:U.targetY+q}};let y=w=>{if(w.target.closest("#afx-bottom-dock")||w.target.closest(".afx-dialog"))return;let T=performance.now()*.001-k,{tx:B,ty:I}=f(w.clientX,w.clientY,T);U.targetX=B,U.targetY=I,AnkiFX.setControlValue("julia-targetX",B),AnkiFX.setControlValue("julia-targetY",I)};window.addEventListener("mousedown",y),vi=y;let E=w=>{pi.x=w.clientX,pi.y=w.clientY};window.addEventListener("mousemove",E),xi=E}let k=performance.now()*.001;function S(){let P=performance.now()*.001-k;if(e.uniform1f(u,P),e.uniform1f(d,U.speed),e.uniform2f(l,U.cRe,U.cIm),e.uniform1f(p,U.zoomDepth),e.uniform2f(v,U.targetX,U.targetY),e.drawArrays(e.TRIANGLE_STRIP,0,4),o.clearRect(0,0,st,et),h&&f){let y=performance.now()*.001-k,{tx:E,ty:w}=f(pi.x,pi.y,y);h.textContent=`TARGET X: ${E.toFixed(6)}, Y: ${w.toFixed(6)}`}mi=requestAnimationFrame(S)}S()}function ya(){mi&&(cancelAnimationFrame(mi),mi=null),vi&&(window.removeEventListener("mousedown",vi),vi=null),xi&&(window.removeEventListener("mousemove",xi),xi=null),document.querySelectorAll(".julia-debug-el").forEach(t=>t.remove()),lt&&(gi&&lt.deleteProgram(gi),bi&&lt.deleteBuffer(bi),gi=null,bi=null),lt=null,Bt=null}var Nt=null,wt=0,it=0,F=null,J=null,tt=[],yi=0,qt=null,fe={x:-1e3,y:-1e3,dx:0,dy:0,down:!1},Ho=null,Xo={id:"lavalamp",name:"Lava Lamp",run:Ea,stop:Ta,onResize:Ca,marqueeFont:{color:"#ffccaa",shadowColor:"rgba(255, 100, 0, 0.8)",shadowBlur:10}},We=6,wi=class{constructor(i,e,o,r){this.pos={x:i,y:e},this.vel={x:0,y:-(Math.random()*.6+.3)},this.radius=o;let s=e/r;this.temperature=.15+s*.3+Math.random()*.15,this.buoyancy=0,this.noiseOffset=Math.random()*1e3,this.smoothSpeedY=0}update(i,e,o){this.pos.y>o*.8?this.temperature+=.05*i:this.pos.y>o*.6?this.temperature+=.02*i:this.pos.y<o*.2?this.temperature-=.04*i:this.pos.y<o*.4&&(this.temperature-=.015*i),this.temperature=Math.max(0,Math.min(1,this.temperature)),this.buoyancy=this.temperature*4-2,this.vel.y-=this.buoyancy*10*i;let r=Math.sin(this.noiseOffset+yi*2e-4)*.1;this.vel.x+=r*i*.3;let s=1-Math.min(Math.abs(this.buoyancy)/.8,1),c=(e*.5-this.pos.x)*.003*s;this.vel.x+=c*i,this.pos.x<this.radius&&(this.vel.x+=(this.radius-this.pos.x)*2*i),this.pos.x>e-this.radius&&(this.vel.x-=(this.pos.x-(e-this.radius))*2*i);let a=-this.radius*.5;this.pos.y<a&&(this.vel.y+=(a-this.pos.y)*8*i);let n=o+this.radius*.5;this.pos.y>n&&(this.vel.y-=(this.pos.y-n)*8*i);let u=Math.pow(.97,i*60);this.vel.x*=u;let l=Math.abs(this.buoyancy)>.8,p=Math.pow(l?.994:.975,i*60);this.vel.y*=p;let v=Math.max(0,(this.pos.y-o*.82)/(o*.18)),h=Math.max(0,(o*.18-this.pos.y)/(o*.18)),f=Math.pow(.88,i*60*(v+h));if(this.vel.x*=f,fe.down){let m=this.pos.x-fe.x,x=this.pos.y-fe.y,g=Math.sqrt(m*m+x*x);if(g<200){let b=(200-g)/200;this.vel.x+=fe.dx*b*1.5,this.vel.y+=fe.dy*b*8}}this.smoothSpeedY+=(Math.abs(this.vel.y)-this.smoothSpeedY)*(1-Math.pow(.05,i)),this.pos.x+=this.vel.x*i,this.pos.y+=this.vel.y*i}},wa=`
    attribute vec2 aPosition;
    varying vec2 vUv;
    void main() {
        vUv = aPosition * 0.5 + 0.5;
        // Match canvas 2D coordinates (Y=0 is top)
        vUv.y = 1.0 - vUv.y;
        gl_Position = vec4(aPosition, 0.0, 1.0);
    }
`,ka=`
    precision highp float;
    varying vec2 vUv;
    
    uniform vec2 uResolution;
    uniform float uTime;
    
    uniform vec4 uBlobs[${We}]; // x, y, radius, stretch
    uniform float uBlobTemp[${We}]; // temperature
    
    // Polynomial smooth minimum
    float smin(float a, float b, float k) {
        float h = clamp(0.5 + 0.5 * (b - a) / k, 0.0, 1.0);
        return mix(b, a, h) - k * h * (1.0 - h);
    }
    
    float map(vec2 p) {
        float d = 10000.0;
        for (int i = 0; i < ${We}; i++) {
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
`;function $o(t,i){let e=F.createShader(t);return F.shaderSource(e,i),F.compileShader(e),F.getShaderParameter(e,F.COMPILE_STATUS)?e:(console.error("[LavaLamp/WebGL] Shader compile error:",F.getShaderInfoLog(e)),F.deleteShader(e),null)}function Sa(){let t=$o(F.VERTEX_SHADER,wa),i=$o(F.FRAGMENT_SHADER,ka);if(J=F.createProgram(),F.attachShader(J,t),F.attachShader(J,i),F.linkProgram(J),!F.getProgramParameter(J,F.LINK_STATUS))return console.error("[LavaLamp/WebGL] Program link error:",F.getProgramInfoLog(J)),F.deleteShader(t),F.deleteShader(i),!1;F.detachShader(J,t),F.detachShader(J,i),F.deleteShader(t),F.deleteShader(i),F.useProgram(J),qt=F.createBuffer(),F.bindBuffer(F.ARRAY_BUFFER,qt);let e=new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]);F.bufferData(F.ARRAY_BUFFER,e,F.STATIC_DRAW);let o=F.getAttribLocation(J,"aPosition");return F.enableVertexAttribArray(o),F.vertexAttribPointer(o,2,F.FLOAT,!1,0,0),J.uResolution=F.getUniformLocation(J,"uResolution"),J.uTime=F.getUniformLocation(J,"uTime"),J.uBlobs=F.getUniformLocation(J,"uBlobs"),J.uBlobTemp=F.getUniformLocation(J,"uBlobTemp"),!0}function Ea(t,i){if(F=t.gl,Ho=t.canvasGL,wt=t.width,it=t.height,!F){console.error("[LavaLamp] WebGL context required \u2014 cannot run effect.");return}if(!Sa())return;tt=[];let e=0;for(;tt.length<We&&e<200;){e++;let o=70+Math.random()*60,r=o+Math.random()*(wt-o*2),s=o+Math.random()*(it-o*2),c=!1;for(let a of tt){let n=a.pos.x-r,u=a.pos.y-s;if(Math.sqrt(n*n+u*u)<a.radius+o+10){c=!0;break}}c||tt.push(new wi(r,s,o,it))}for(;tt.length<We;){let o=70+Math.random()*60,r=o+Math.random()*(wt-o*2),s=o+Math.random()*(it-o*2);tt.push(new wi(r,s,o,it))}yi=performance.now(),Pa(),Nt=requestAnimationFrame(Go)}function Ca(t,i,e){wt=t,it=i,F&&F.viewport(0,0,t*e,i*e)}function Go(t){let i=Math.min((t-yi)/1e3,.05);yi=t;let e=new Float32Array(We*4),o=new Float32Array(We);for(let r=0;r<We;r++)tt[r].update(i,wt,it);for(let r=0;r<We;r++){let s=tt[r],c=Math.max(.85,1+Math.min(s.smoothSpeedY*.028,.7)*(.4+s.temperature*.6));e[r*4+0]=s.pos.x,e[r*4+1]=s.pos.y,e[r*4+2]=s.radius,e[r*4+3]=c,o[r]=s.temperature}F.useProgram(J),F.uniform2f(J.uResolution,wt,it),F.uniform1f(J.uTime,t*.001),F.uniform4fv(J.uBlobs,e),F.uniform1fv(J.uBlobTemp,o),F.drawArrays(F.TRIANGLES,0,6),fe.dx=0,fe.dy=0,Nt=requestAnimationFrame(Go)}function jt(t){let i=Ho.getBoundingClientRect(),e=t.touches?t.touches[0]:t,o=e.clientX-i.left,r=e.clientY-i.top;if(fe.down&&t.type!=="mousedown"&&t.type!=="touchstart"){let s=o-fe.x,c=r-fe.y;Math.abs(s)<150&&Math.abs(c)<150&&(fe.dx=s,fe.dy=c)}fe.x=o,fe.y=r}function ki(t){fe.dx=0,fe.dy=0,fe.down=!0,jt(t)}function Si(){fe.down=!1}function Pa(){window.addEventListener("mousedown",ki),window.addEventListener("mousemove",jt),window.addEventListener("mouseup",Si),window.addEventListener("touchstart",ki,{passive:!0}),window.addEventListener("touchmove",jt,{passive:!0}),window.addEventListener("touchend",Si)}function Ma(){window.removeEventListener("mousedown",ki),window.removeEventListener("mousemove",jt),window.removeEventListener("mouseup",Si),window.removeEventListener("touchstart",ki),window.removeEventListener("touchmove",jt),window.removeEventListener("touchend",Si)}function Ta(){Nt&&(cancelAnimationFrame(Nt),Nt=null),Ma(),F&&(F.clearColor(0,0,0,0),F.clear(F.COLOR_BUFFER_BIT),J&&F.deleteProgram(J),qt&&F.deleteBuffer(qt),J=null,qt=null)}var Ci=null,$t,ct,Ht,ft,Pi=null,Mi=null,_i={id:"mandelbrot",name:"Mandelbrot",run:Fa,stop:_a,onResize:(t,i,e)=>{$t=t,ct=i,ft&&Ht&&ft.uniform2f(Ht,t*e,i*e)},preferredTrack:{title:"Acoustica Power Bundle 4",trackTitle:"AiR"},marqueeFont:{color:"#FFF",outline:"#000"}},Ti=null,Fi=null,Ei={x:0,y:0},le={targetX:-.743643887037151,targetY:.13182590420533,zoomDepth:11,speed:parseFloat(localStorage.getItem("ankifx_mandelbrot_speed"))||.15};function Fa(t,i={}){ft=t.gl;let e=t.gl,o=t.ctx2d;$t=t.width,ct=t.height;let r=t.dpr,a=hi(e,`
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
    `);if(!a)return;let n=a.program;Pi=n,Mi=a.buffer;let u=e.getUniformLocation(n,"u_time"),d=e.getUniformLocation(n,"u_speed"),l=e.getUniformLocation(n,"u_zoomDepth"),p=e.getUniformLocation(n,"u_target");Ht=e.getUniformLocation(n,"u_resolution"),e.uniform2f(Ht,$t*r,ct*r);let v=null,h=null;if(i.debug){_i.controls=[{type:"slider",id:"mandelbrot-zoomDepth",label:"ZOOM",min:2,max:25,step:.1,value:le.zoomDepth,onChange:k=>{le.zoomDepth=k}},{type:"slider",id:"mandelbrot-targetX",label:"T-X",min:-2.5,max:1,step:1e-4,value:le.targetX,onChange:k=>{le.targetX=k}},{type:"slider",id:"mandelbrot-targetY",label:"T-Y",min:-1.5,max:1.5,step:1e-4,value:le.targetY,onChange:k=>{le.targetY=k}},{type:"slider",id:"mandelbrot-speed",label:"SPD",min:.005,max:.3,step:.005,value:le.speed,onChange:k=>{le.speed=k,localStorage.setItem("ankifx_mandelbrot_speed",k)}}];let x=document.getElementById("afx-effect-controls-container");x&&(v=document.createElement("div"),v.id="afx-mandelbrot-debug-info",v.className="afx-control-row mandelbrot-debug-el",v.style.cssText="height: 20px !important; margin-bottom: 2px; pointer-events: none; justify-content: flex-end; opacity: 0.8; font-size: 11px !important; color: #ff00ff; border: none; background: transparent;",v.textContent="HOVER TO SEE TARGET COORDS",x.prepend(v)),h=(k,S,P)=>{let y=P*le.speed/Math.max(le.zoomDepth,1)%2,E=y>1?2-y:y,w=E<.5?4*Math.pow(E,3):1-Math.pow(-2*E+2,3)/2,T=Math.exp(w*le.zoomDepth),B=(k-$t/2)/ct,I=(ct/2-S)/ct;return{tx:le.targetX+B*(2.5/T),ty:le.targetY+I*(2.5/T)}};let g=k=>{if(k.target.closest("#afx-bottom-dock")||k.target.closest(".afx-dialog"))return;let S=performance.now()*.001-f,{tx:P,ty:y}=h(k.clientX,k.clientY,S);le.targetX=P,le.targetY=y,AnkiFX.setControlValue("mandelbrot-targetX",P),AnkiFX.setControlValue("mandelbrot-targetY",y)};window.addEventListener("mousedown",g),Ti=g;let b=k=>{Ei.x=k.clientX,Ei.y=k.clientY};window.addEventListener("mousemove",b),Fi=b}else _i.controls=[];let f=performance.now()*.001;function m(){let x=performance.now()*.001-f;if(e.uniform1f(u,x),e.uniform1f(d,le.speed),e.uniform1f(l,le.zoomDepth),e.uniform2f(p,le.targetX,le.targetY),e.drawArrays(e.TRIANGLE_STRIP,0,4),o.clearRect(0,0,$t,ct),v&&h){let g=performance.now()*.001-f,{tx:b,ty:k}=h(Ei.x,Ei.y,g);v.textContent=`TARGET X: ${b.toFixed(6)}, Y: ${k.toFixed(6)}`}Ci=requestAnimationFrame(m)}m()}function _a(){Ci&&(cancelAnimationFrame(Ci),Ci=null),Ti&&(window.removeEventListener("mousedown",Ti),Ti=null),Fi&&(window.removeEventListener("mousemove",Fi),Fi=null),document.querySelectorAll(".mandelbrot-debug-el").forEach(t=>t.remove()),ft&&(Pi&&ft.deleteProgram(Pi),Mi&&ft.deleteBuffer(Mi),Pi=null,Mi=null),ft=null,Ht=null}var Xt=null,Ii,Ai,Li=16,ot=[];function Vo(){let t=Math.floor(Ii/Li);ot=[];for(let i=0;i<t;i++)ot[i]=Math.random()*-100}var Wo={id:"matrix",name:"Matrix",run:Aa,stop:La,onResize:(t,i)=>{Ii=t,Ai=i,Vo()},preferredTrack:{trackTitle:"nightfall"},marqueeFont:{color:"#0F0",shadowColor:"#0F0",shadowBlur:10}};function Aa(t,i){let e=t.ctx2d;Ii=t.width,Ai=t.height,Vo();let o="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*]*";function r(){e.fillStyle="rgba(0, 0, 0, 0.1)",e.fillRect(0,0,Ii,Ai),e.fillStyle="#0F0",e.font=Li+"px monospace";for(let s=0;s<ot.length;s++)if(ot[s]>0||Math.random()>.95){let c=o.charAt(Math.floor(Math.random()*o.length)),a=ot[s]*Li;e.fillText(c,s*Li,a),a>Ai&&Math.random()>.975&&(ot[s]=0),ot[s]++}else ot[s]+=.5;Xt=requestAnimationFrame(r)}Xt=requestAnimationFrame(r)}function La(){Xt&&(cancelAnimationFrame(Xt),Xt=null)}var Yo={id:"none",name:"None",run:Ia,stop:Da,marqueeFont:{color:"#ffffff",shadowColor:"rgba(0,0,0,0.8)",shadowBlur:5}};function Ia(t,i){t.ctx2d.clearRect(0,0,t.width,t.height)}function Da(){}var Gt=null,ue,qe,ut={id:"starfield",name:"Starfield",run:Ra,stop:za,onResize:(t,i)=>{ue=t,qe=i},preferredTrack:{trackTitle:"star wars title"},marqueeFont:{color:"#FFE81F",shadowColor:"#FFE81F",shadowBlur:20,outline:"#000"}};function Ra(t,i){let e=t.ctx2d;ue=t.width,qe=t.height;let o=localStorage.getItem("ankifx_starfield_planets")!=="false";ut.controls=[{type:"button",id:"starfield-planet-toggle",label:o?"\u{1FA90} DISABLE PLANET":"\u{1FA90} ENABLE PLANET",onClick:()=>{o=!o,localStorage.setItem("ankifx_starfield_planets",o),ut.controls&&ut.controls[0]&&(ut.controls[0].label=o?"\u{1FA90} DISABLE PLANET":"\u{1FA90} ENABLE PLANET",AnkiFX.renderEffectControls(ut))}}];let r=[],s=8e3,c=new Uint8Array(512),a=new Uint8Array(256).map(()=>Math.random()*256);for(let g=0;g<512;g++)c[g]=a[g&255];let n=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]];function u(g,b,k,S){return g[0]*b+g[1]*k+g[2]*S}function d(g,b,k){let S,P,y,E,w=.3333333333333333,T=1/6,B=(g+b+k)*w,I=Math.floor(g+B),_=Math.floor(b+B),j=Math.floor(k+B),D=(I+_+j)*T,R=g-I+D,G=b-_+D,K=k-j+D,Z,A,N,V,q,ie;R>=G?G>=K?(Z=1,A=0,N=0,V=1,q=1,ie=0):R>=K?(Z=1,A=0,N=0,V=1,q=0,ie=1):(Z=0,A=0,N=1,V=1,q=0,ie=1):G<K?(Z=0,A=0,N=1,V=0,q=1,ie=1):R<K?(Z=0,A=1,N=0,V=0,q=1,ie=1):(Z=0,A=1,N=0,V=1,q=1,ie=0);let ce=R-Z+T,xe=G-A+T,Ye=K-N+T,Ke=R-V+2*T,Xe=G-q+2*T,De=K-ie+2*T,M=R-1+3*T,L=G-1+3*T,H=K-1+3*T,z=I&255,ee=_&255,pe=j&255,ye=.6-R*R-G*G-K*K;ye<0?S=0:(ye*=ye,S=ye*ye*u(n[c[z+c[ee+c[pe]]]%12],R,G,K));let Se=.6-ce*ce-xe*xe-Ye*Ye;Se<0?P=0:(Se*=Se,P=Se*Se*u(n[c[z+Z+c[ee+A+c[pe+N]]]%12],ce,xe,Ye));let Ee=.6-Ke*Ke-Xe*Xe-De*De;Ee<0?y=0:(Ee*=Ee,y=Ee*Ee*u(n[c[z+V+c[ee+q+c[pe+ie]]]%12],Ke,Xe,De));let Ce=.6-M*M-L*L-H*H;return Ce<0?E=0:(Ce*=Ce,E=Ce*Ce*u(n[c[z+1+c[ee+1+c[pe+1]]]%12],M,L,H)),32*(S+P+y+E)}function l(g,b,k,S=3){let P=0,y=.5;for(let E=0;E<S;E++)P+=d(g,b,k)*y,g*=2,b*=2,k*=2,y*=.5;return P}let p={};class v{constructor(){this.active=!1,this.nextSpawn=Date.now()+2e3}reset(){let b=Math.random()*Math.PI*2,k=.2+Math.random()*.4;this.x=Math.cos(b)*ue*k,this.y=Math.sin(b)*qe*k,this.z=ue,this.sizeBase=80+Math.random()*120,this.speed=.8,this.active=!0,this.type=1+Math.floor(Math.random()*2);let S=[{name:"ice",baseH:190+Math.random()*40,sat:60,l:70},{name:"inferno",baseH:Math.random()*40,sat:80,l:60},{name:"toxic",baseH:80+Math.random()*40,sat:70,l:60},{name:"ethereal",baseH:260+Math.random()*40,sat:60,l:75},{name:"classic",baseH:30+Math.random()*20,sat:50,l:80}],P=S[Math.floor(Math.random()*S.length)];p[P.name]?this.textureCanvas=p[P.name]:(this.generateGasGiantTexture(P),p[P.name]=this.textureCanvas),this.type===2&&(this.rings=Array.from({length:4},(y,E)=>({r1:1.6+E*.2,opacity:.2+Math.random()*.4})))}hslToRgb(b,k,S){b/=360,k/=100,S/=100;let P,y,E;if(k===0)P=y=E=S;else{let w=S<.5?S*(1+k):S+k-S*k,T=2*S-w,B=I=>(I<0&&(I+=1),I>1&&(I-=1),I<1/6?T+(w-T)*6*I:I<1/2?w:I<2/3?T+(w-T)*(2/3-I)*6:T);P=B(b+1/3),y=B(b),E=B(b-1/3)}return{r:P*255,g:y*255,b:E*255}}generateGasGiantTexture(b){let k=document.createElement("canvas");k.width=k.height=128;let S=k.getContext("2d"),P=S.createImageData(128,128),y=b.baseH,E=this.hslToRgb(y,b.sat,b.l),w=this.hslToRgb((y+20)%360,b.sat+10,b.l-10),T=this.hslToRgb((y-40+360)%360,b.sat+20,b.l-15),B=this.hslToRgb((y+60)%360,b.sat-20,b.l+10),I=(j,D,R)=>({r:j.r+(D.r-j.r)*R,g:j.g+(D.g-j.g)*R,b:j.b+(D.b-j.b)*R}),_=Math.random()*1e3;for(let j=0;j<128;j++)for(let D=0;D<128;D++){let R=j/128*10,G=D/128*10,K=Math.abs(l(0,R*.4,_,3)),Z=R+l(G*.5,R*.5,_)*K*4,A=G+l(R*.5,G*.5,_+50)*K*2,N=(l(0,Z*.8,_+100,4)+1)/2,V=(l(A*.1,Z*1.5,_+200,2)+1)/2,q=I(w,E,N);N>.7&&(q=I(q,B,(N-.7)*2)),V>.6&&(q=I(q,T,(V-.6)*1.5));let ie=1+l(A,Z,_+300,2)*.2,ce=(j*128+D)*4;P.data[ce]=Math.min(255,q.r*ie),P.data[ce+1]=Math.min(255,q.g*ie),P.data[ce+2]=Math.min(255,q.b*ie),P.data[ce+3]=255}S.putImageData(P,0,0),this.textureCanvas=k}update(){if(!this.active){Date.now()>this.nextSpawn&&this.reset();return}this.z-=this.speed,this.z<=0&&(this.active=!1,this.nextSpawn=Date.now())}draw(b){if(!this.active)return;let k=ue/2/this.z,S=this.x*k+ue/2,P=this.y*k+qe/2,y=(1-this.z/ue)*this.sizeBase;if(S<-y*3||S>ue+y*3||P<-y*3||P>qe+y*3)return;b.save(),b.translate(S,P),this.type===2&&(this.drawRings(b,y,!0),b.globalAlpha=1);let E=b.createRadialGradient(0,0,y*.9,0,0,y*1.5);E.addColorStop(0,"rgba(255, 255, 255, 0.15)"),E.addColorStop(1,"rgba(0,0,0,0)"),b.fillStyle=E,b.beginPath(),b.arc(0,0,y*1.5,0,Math.PI*2),b.fill(),b.save(),b.beginPath(),b.arc(0,0,y,0,Math.PI*2),b.clip(),b.globalAlpha=1,b.drawImage(this.textureCanvas,-y,-y,y*2,y*2);let w=b.createRadialGradient(-y*.5,-y*.5,y*.1,0,0,y);w.addColorStop(0,"rgba(255, 255, 255, 0.25)"),w.addColorStop(.5,"rgba(0, 0, 0, 0)"),w.addColorStop(1,"rgba(0, 0, 0, 0.4)"),b.fillStyle=w,b.fillRect(-y,-y,y*2,y*2),b.restore();let T=b.createRadialGradient(0,0,y*.7,0,0,y);T.addColorStop(1,"rgba(255,255,255,0.4)"),T.addColorStop(.8,"rgba(255,255,255,0)"),b.fillStyle=T,b.beginPath(),b.arc(0,0,y,0,Math.PI*2),b.fill(),this.type===2&&(this.drawRings(b,y,!1),b.globalAlpha=1),b.restore()}drawRings(b,k,S){b.save();let P=Math.PI/8;for(let y of this.rings)b.globalAlpha=y.opacity,b.strokeStyle="#E6E6FA",b.lineWidth=k*.15,b.beginPath(),b.ellipse(0,0,y.r1*k,y.r1*.3*k,P,0,Math.PI*2),b.stroke();b.restore()}}let h=new v,f=["#FFFFFF","#FFE4B5","#E0FFFF","#FFF0F5","#F0F8FF"];for(let g=0;g<s;g++)r.push({x:(Math.random()-.5)*ue*4,y:(Math.random()-.5)*qe*4,z:Math.random()*ue,color:f[Math.floor(Math.random()*f.length)],sizeBase:2+Math.random()*2.5});let m=0;function x(){e.fillStyle="rgba(5, 5, 12, 1)",e.fillRect(0,0,ue,qe);let g=ue/2,b=qe/2;m+=.01,o?(h.update(),h.draw(e)):h.active=!1;for(let k=0;k<s;k++){let S=r[k],P=S.z;if(S.z-=4,S.z<=0){S.x=(Math.random()-.5)*ue*4,S.y=(Math.random()-.5)*qe*4,S.z=ue;continue}let y=ue/2/S.z,E=S.x*y+g,w=S.y*y+b;if(E>=0&&E<=ue&&w>=0&&w<=qe){let T=1-S.z/ue,B=T*S.sizeBase;if(T<.3){e.globalAlpha=T*2,e.fillStyle=S.color,e.fillRect(E,w,Math.max(1,B),Math.max(1,B));continue}e.globalAlpha=T,e.fillStyle=S.color,e.strokeStyle=S.color;let I=ue/2/P,_=S.x*I+g,j=S.y*I+b;e.lineWidth=B,e.beginPath(),e.moveTo(_,j),e.lineTo(E,w),e.stroke(),e.beginPath(),e.arc(E,w,B/2,0,Math.PI*2),e.fill(),T>.8&&(e.globalAlpha=(T-.8)*3,e.beginPath(),e.arc(E,w,B*2.5,0,Math.PI*2),e.fill())}}e.globalAlpha=1,Gt=requestAnimationFrame(x)}Gt=requestAnimationFrame(x)}function za(){Gt&&(cancelAnimationFrame(Gt),Gt=null)}var Vt=null,dt,Wt,Di=0,Ri=0,Ie=null;function Jo(){if(dt===void 0||Wt===void 0)return;let t=Math.max(100,Ri),i=Math.max(14,Math.floor(dt/25)),e=Math.floor(dt/i),o=Math.floor(t/i);Ie=new po(e,o,i)}var Zo={id:"tetris",name:"Tetris",run:Oa,stop:Ua,onResize:(t,i)=>{dt=t,Wt=i;let e=document.documentElement,o=e?getComputedStyle(e):null;Di=o&&parseInt(o.getPropertyValue("--io-header"))||0,Ri=i-Di,Jo()},preferredTrack:{title:"WinTask 3",trackTitle:"Whoopees Tetris"},marqueeFont:{color:"#f0f0f0",shadowColor:"#a000f0",shadowBlur:12,outline:"#000"}},Qo={I:{shapes:[[[1,1,1,1]],[[1],[1],[1],[1]]],color:"#00f0f0"},O:{shapes:[[[1,1],[1,1]]],color:"#f0f000"},T:{shapes:[[[0,1,0],[1,1,1]],[[1,0],[1,1],[1,0]],[[1,1,1],[0,1,0]],[[0,1],[1,1],[0,1]]],color:"#a000f0"},S:{shapes:[[[0,1,1],[1,1,0]],[[1,0],[1,1],[0,1]]],color:"#00f000"},Z:{shapes:[[[1,1,0],[0,1,1]],[[0,1],[1,1],[1,0]]],color:"#f00000"},J:{shapes:[[[1,0,0],[1,1,1]],[[1,1],[1,0],[1,0]],[[1,1,1],[0,0,1]],[[0,1],[0,1],[1,1]]],color:"#0000f0"},L:{shapes:[[[0,0,1],[1,1,1]],[[1,0],[1,0],[1,1]],[[1,1,1],[1,0,0]],[[1,1],[0,1],[0,1]]],color:"#f0a000"}},Ko=Object.keys(Qo),ho=class{constructor(i,e,o){this.x=i,this.y=e,this.color=o,this.vx=(Math.random()-.5)*12,this.vy=(Math.random()-.7)*14,this.gravity=.45,this.life=1,this.decay=.012+Math.random()*.018,this.size=1+Math.random()*2.5}update(){this.vx*=.985,this.vy+=this.gravity,this.x+=this.vx,this.y+=this.vy,this.life-=this.decay}draw(i){i.globalAlpha=Math.max(0,this.life),i.fillStyle=this.color,i.fillRect(this.x,this.y,this.size,this.size)}},po=class{constructor(i,e,o){this.cols=i,this.rows=e,this.cellSize=o,this.board=Array.from({length:e},()=>Array(i).fill(null)),this.particles=[],this.exploding=!1,this.explodeTimer=0,this.EXPLODE_DURATION=120,this.level=1,this.linesTotal=0,this.dropCounter=0,this.moveCounter=0,this._spawnPiece()}_randomPiece(){let i=Ko[Math.floor(Math.random()*Ko.length)],e=Qo[i],o=Math.floor(Math.random()*e.shapes.length);return{shape:e.shapes[o],color:e.color,key:i,rotIdx:o,def:e}}_spawnPiece(){let i=this._randomPiece();this.current={...i,x:Math.floor((this.cols-i.shape[0].length)/2),y:0},this._selectTarget()}_fits(i,e,o){for(let r=0;r<i.length;r++)for(let s=0;s<i[r].length;s++){if(!i[r][s])continue;let c=e+s,a=o+r;if(c<0||c>=this.cols||a>=this.rows||a>=0&&this.board[a][c]!==null)return!1}return!0}_lock(){let{shape:i,x:e,y:o,color:r}=this.current;for(let s=0;s<i.length;s++)for(let c=0;c<i[s].length;c++){if(!i[s][c])continue;let a=o+s,n=e+c;a>=0&&a<this.rows&&n>=0&&n<this.cols&&(this.board[a][n]=r)}this._clearRows()}_clearRows(){let i=0;for(let e=this.rows-1;e>=0;e--)this.board[e].every(o=>o!==null)&&(this.board.splice(e,1),this.board.unshift(Array(this.cols).fill(null)),i++,e++);return i>0&&(this.linesTotal+=i,this.level=Math.floor(this.linesTotal/10)+1),i}_choosePlacement(){let{def:i}=this.current,e=-1/0,o=this.current.x,r=this.current.rotIdx;for(let s=0;s<i.shapes.length;s++){let c=i.shapes[s],a=c[0].length;for(let n=0;n<=this.cols-a;n++){let u=0;for(;this._fits(c,n,u+1);)u++;if(!this._fits(c,n,u))continue;let d=this._getHeuristicScore(c,n,u);d>e&&(e=d,o=n,r=s)}}return{x:o,rotIdx:r}}_getHeuristicScore(i,e,o){let r=this.board.map(d=>[...d]);for(let d=0;d<i.length;d++)for(let l=0;l<i[d].length;l++){if(!i[d][l])continue;let p=o+d,v=e+l;p>=0&&p<this.rows&&(r[p][v]="X")}let s=0;for(let d=0;d<this.rows;d++)r[d].every(l=>l!==null)&&s++;let c=Array(this.cols).fill(0),a=0;for(let d=0;d<this.cols;d++)for(let l=0;l<this.rows;l++)if(r[l][d]!==null){c[d]=this.rows-l,a+=c[d];break}let n=0;for(let d=0;d<this.cols;d++){let l=!1;for(let p=0;p<this.rows;p++)r[p][d]!==null?l=!0:l&&n++}let u=0;for(let d=0;d<this.cols-1;d++)u+=Math.abs(c[d]-c[d+1]);return a*-.51+s*.76+n*-.35+u*-.18+Math.random()*.1}_isBoardFull(){for(let i=0;i<3;i++)if(this.board[i].some(e=>e!==null))return!0;return!1}_explodeBoard(i,e){for(let o=0;o<this.rows;o++)for(let r=0;r<this.cols;r++)if(this.board[o][r]){let s=i+r*this.cellSize+this.cellSize/2,c=e+o*this.cellSize+this.cellSize/2,a=4+Math.floor(Math.random()*4);for(let n=0;n<a;n++)this.particles.push(new ho(s,c,this.board[o][r]))}}_reset(){this.board=Array.from({length:this.rows},()=>Array(this.cols).fill(null)),this.exploding=!1,this.explodeTimer=0,this.particles=[],this._spawnPiece()}_selectTarget(){let{x:i,rotIdx:e}=this._choosePlacement(),o=this.current.def;this.current.rotIdx=e,this.current.shape=o.shapes[e],this.current.targetX=i,this.current.y=0,this.current.x=Math.floor((this.cols-this.current.shape[0].length)/2)}step(i,e){if(this.exploding){this.explodeTimer++,this.particles=this.particles.filter(s=>s.life>0),this.particles.forEach(s=>s.update()),this.explodeTimer>=this.EXPLODE_DURATION&&this._reset();return}this.moveCounter++,this.moveCounter>=2&&(this.moveCounter=0,this.current.x<this.current.targetX?this._fits(this.current.shape,this.current.x+1,this.current.y)&&this.current.x++:this.current.x>this.current.targetX&&this._fits(this.current.shape,this.current.x-1,this.current.y)&&this.current.x--);let o=this.current.x===this.current.targetX,r=Math.max(4,40-(this.level-1)*3);o&&(r=1),this.dropCounter++,this.dropCounter>=r&&(this.dropCounter=0,this._fits(this.current.shape,this.current.x,this.current.y+1)?this.current.y++:(this._lock(),this._isBoardFull()?(this._explodeBoard(i,e),this.exploding=!0,this.explodeTimer=0):this._spawnPiece()))}draw(i,e,o){let r=this.cellSize,s={};for(let c=0;c<this.rows;c++)for(let a=0;a<this.cols;a++){let n=this.board[c][a];n&&(s[n]||(s[n]=[]),s[n].push({px:e+a*r,py:o+c*r,alpha:this.exploding?Math.max(0,1-this.explodeTimer/40):1}))}if(!this.exploding&&this.current){let{shape:c,x:a,y:n,color:u}=this.current;if(u){s[u]||(s[u]=[]);for(let d=0;d<c.length;d++)for(let l=0;l<c[d].length;l++)c[d][l]&&s[u].push({px:e+(a+l)*r,py:o+(n+d)*r,alpha:1})}}for(let c in s){let a=s[c];i.fillStyle=c,a.forEach(n=>{i.globalAlpha=n.alpha,i.fillRect(n.px+1,n.py+1,r-2,r-2)})}i.globalAlpha=1,i.strokeStyle="rgba(255, 255, 255, 0.35)",i.lineWidth=1.5,i.beginPath();for(let c in s)s[c].forEach(a=>{i.globalAlpha=a.alpha;let n=a.px,u=a.py;i.moveTo(n+1,u+r-2),i.lineTo(n+1,u+1),i.lineTo(n+r-2,u+1)});i.stroke(),i.strokeStyle="rgba(0, 0, 0, 0.45)",i.beginPath();for(let c in s)s[c].forEach(a=>{i.globalAlpha=a.alpha;let n=a.px,u=a.py;i.moveTo(n+1,u+r-1),i.lineTo(n+r-1,u+r-1),i.lineTo(n+r-1,u+1)});i.stroke(),i.globalAlpha=1,i.save(),this.particles.forEach(c=>c.draw(i)),i.restore(),i.globalAlpha=1}};function Oa(t,i){let e=t.ctx2d;dt=t.width,Wt=t.height,Di=t.topInset||0,Ri=t.visibleHeight||Wt,Jo();function o(){if(e.fillStyle="rgba(8, 6, 18, 0.92)",e.fillRect(0,0,dt,Wt),e.strokeStyle="rgba(255,255,255,0.04)",e.lineWidth=.5,Ie){let r=Ie.cellSize,s=Math.floor((dt-Ie.cols*r)/2),c=Di+(Ri-Ie.rows*r);e.beginPath();for(let a=0;a<=Ie.cols;a++)e.moveTo(s+a*r,c),e.lineTo(s+a*r,c+Ie.rows*r);for(let a=0;a<=Ie.rows;a++)e.moveTo(s,c+a*r),e.lineTo(s+Ie.cols*r,c+a*r);e.stroke(),Ie.step(s,c),Ie.draw(e,s,c)}Vt=requestAnimationFrame(o)}Vt=requestAnimationFrame(o)}function Ua(){Vt&&(cancelAnimationFrame(Vt),Vt=null)}var re={aurora:To,debug:Lo,ecg:Fe,fire:Io,geometry:nt,gradient:uo,julia:we,lavalamp:Xo,mandelbrot:_i,matrix:Wo,none:Yo,starfield:ut,tetris:Zo};var zi=class{constructor(i="",e="bottom",o={}){this.text=i,this.position=e,this.applyStyles(o),this.time=0,this.textX=0,this.initialized=!1,this.baseCharWidth=15,this.baseFontSize=24,this.baseVelocity=2.8,this.baseBounce=12,this.fontFamily='"Courier New", monospace',this.fontWeight="bold",this.enabled=!0}applyStyles(i={}){this.color=i.color||"#FFF",this.outline=i.outline||null,this.shadowColor=i.shadowColor||null,this.shadowBlur=i.shadowBlur||0,this.colorFn=i.colorFn||null}updateStyles(i={}){this.applyStyles(i)}setText(i){this.text=i}setPosition(i){this.position=i}render(i,e,o){if(!this.enabled)return;this.initialized||(this.textX=e,this.initialized=!0);let r=e<480?.65:e<768?.8:1,s=Math.max(12,Math.floor(this.baseFontSize*r)),c=this.baseBounce*r,a=this.baseCharWidth*r,n=this.baseVelocity*r;if(this.time+=.012,!this.text)return;let u=this.text.length*a;this.textX-=n,this.textX<-(u+e*1.1)&&(this.textX=e),i.font=`${this.fontWeight} ${s}px ${this.fontFamily}`,i.lineJoin="round",this.outline&&(i.lineWidth=4,i.strokeStyle=this.outline);let d=this.shadowColor&&this.shadowColor!=="inherit";d?(i.shadowColor=this.shadowColor,i.shadowBlur=this.shadowBlur):this.shadowColor||(i.shadowBlur=0);let l=50*r,p=32*r,v=this.position==="bottom"?o-p:l;for(let h=0;h<this.text.length;h++){let f=this.text[h],m=this.textX+h*a;if(m>-40&&m<e+40){let x=v+Math.sin(this.time*4+h*.1)*c;i.fillStyle=this.colorFn?this.colorFn(this.time,h):this.color,this.shadowColor==="inherit"&&(i.shadowColor=i.fillStyle,i.shadowBlur=this.shadowBlur),this.outline&&i.strokeText(f,m,x),i.fillText(f,m,x),this.shadowColor==="inherit"&&(i.shadowBlur=0)}}d&&(i.shadowBlur=0)}};var er=`:root {
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
}`;function tr(){return/iPad|iPhone|iPod/.test(navigator.userAgent)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1}function mo(){return Math.min(window.devicePixelRatio||1,1.5)}function Oi(){return Math.min(window.devicePixelRatio||1,2)}function Ui(t,i){let e=mo();return t==="mandelbrot"||t==="julia"?e:i}function je(){let t=document.documentElement,i=t?getComputedStyle(t):null;return{ioHeader:i&&parseInt(i.getPropertyValue("--io-header"))||0,topInset:i&&parseInt(i.getPropertyValue("--top-inset"))||0,bottomInset:i&&parseInt(i.getPropertyValue("--bottom-inset"))||0}}function kt(){return localStorage.getItem("ankifx_marquee_enabled")!=="false"}function Yt(){return(window.innerWidth||document.documentElement.clientWidth||800)<480}var Na={deckTitle:"AnkiFX Deck",deckAuthor:"Anonymous",termsText:null,sources:[],marquee:"ANKIFX ENGINE INITIALIZED ...",defaultEffect:"geometry",debug:!1,countdown:30,marqueePosition:"top"};function ir(t={}){let i={...Na,...window.AnkiFX_Config||{},...t};Array.isArray(i.sources)||(i.sources=[]);let e=parseInt(i.countdown,10);return i.countdown=isNaN(e)?30:Math.max(0,e),i.isConfigFileError=i.termsText!==void 0&&i.termsText!==null&&(typeof i.termsText!="string"||typeof i.termsText=="string"&&i.termsText.trim()===""||i.termsText==="No terms provided."),i}function or(t){let i=window.AnkiFX_Config?.defaultEffect,e;return i?(e=i,localStorage.setItem("ankifx_preferred_effect",e)):e=localStorage.getItem("ankifx_preferred_effect")||t.defaultEffect||"geometry",re[e]||(console.warn(`[AnkiFX] Unknown effect "${e}" \u2014 falling back to "${t.defaultEffect||"geometry"}".`),e=t.defaultEffect||"geometry",re[e]||(e=Object.keys(re)[0]||"geometry"),localStorage.setItem("ankifx_preferred_effect",e)),e}function rr(t,i){let e=document.getElementById("ankifx-overlay");if(!e||!e.classList.contains("afx-agreed-state"))return!1;t.sharedGL||(t.sharedGL=document.getElementById("afx-shared-gl")),t.shared2D||(t.shared2D=document.getElementById("afx-shared-2d")),t.sharedMarquee||(t.sharedMarquee=document.getElementById("afx-shared-marquee")),t.sharedGL&&!t.glContext&&(t.glContext=t.sharedGL.getContext("webgl",{alpha:!1,antialias:!1})),t.shared2D&&!t.ctx2D&&(t.ctx2D=t.shared2D.getContext("2d")),t.sharedMarquee&&!t.ctxMarquee&&(t.ctxMarquee=t.sharedMarquee.getContext("2d"));let o=document.getElementById("ankifx-background");if(o){let s=o.getBoundingClientRect();t.width=s.width;let c=je();t.height=document.documentElement.clientHeight+c.ioHeader,t.dpr=Oi()}if(!t.currentEffectId){let s=Array.from(document.documentElement.classList).find(c=>c.startsWith("afx-effect-"));s&&(t.currentEffectId=s.replace("afx-effect-",""))}t.defaultMarqueeText=i.marquee,t.marquee&&(t.marquee.setText(i.marquee),t.marquee.setPosition(i.marqueePosition));let r=document.getElementById("afx-deck-title");return r&&(r.textContent=i.deckTitle),!0}function Kt(t){let i=document.getElementById("afx-effect-controls-container");i&&(i.innerHTML="",!(!t||!t.controls||t.controls.length===0)&&t.controls.forEach(e=>{let o=document.createElement("div");if(o.className="afx-control-row",o.id=`afx-control-container-${e.id}`,e.type==="toggle")o.innerHTML=`
                    <label class="afx-toggle">
                        <input type="checkbox" id="afx-control-${e.id}" ${e.value?"checked":""}>
                        <span class="afx-slider"></span>
                    </label>
                    <span id="afx-control-label-${e.id}">${e.label}</span>
                `,o.querySelector("input").addEventListener("change",s=>{e.onChange&&e.onChange(s.target.checked)});else if(e.type==="slider"){o.classList.add("afx-slider-row");let r=e.step||1,s=r.toString().includes(".")?r.toString().split(".")[1].length:0;o.innerHTML=`
                    <span class="afx-slider-label">${e.label}:</span>
                    <input type="range" id="afx-control-${e.id}" class="afx-range-slider" min="${e.min}" max="${e.max}" step="${r}" value="${e.value}">
                    <span id="afx-control-val-${e.id}" class="afx-slider-val-text">${e.value.toFixed(s)}</span>
                `;let c=o.querySelector("input"),a=o.querySelector(".afx-slider-val-text");c.addEventListener("input",n=>{let u=parseFloat(n.target.value);a.innerText=u.toFixed(s),e.onChange&&e.onChange(u)})}else if(e.type==="button")o.style.padding="0",o.innerHTML=`
                    <button id="afx-control-${e.id}" class="afx-action-btn">
                        ${e.label}
                    </button>
                `,o.querySelector("button").addEventListener("click",s=>{s.stopPropagation(),e.onClick&&e.onClick()});else if(e.type==="select"){o.style.padding="0";let r=(e.options||[]).map(c=>{let a=typeof c=="object"?c.value:c,n=typeof c=="object"?c.text:c,u=a==e.value?"selected":"";return`<option value="${a}" ${u}>${n}</option>`}).join("");o.innerHTML=`
                    <select id="afx-control-${e.id}" class="afx-select">
                        ${r}
                    </select>
                `,o.querySelector("select").addEventListener("change",c=>{e.onChange&&e.onChange(c.target.value)})}i.appendChild(o)}))}function ar(t,i){let e=document.getElementById(`afx-control-${t}`);e&&(e.type==="checkbox"?e.checked=!!i:e.value=i);let o=document.getElementById(`afx-control-val-${t}`);if(o){let r=e?e.step:"",s=r&&r.includes(".")?r.split(".")[1].length:0;o.innerText=typeof i=="number"?i.toFixed(s||(i%1===0?0:4)):i}}function Jt(t,i,e,o,r){r==="debug"?e.classList.add("afx-debug-active"):e.classList.remove("afx-debug-active");let s=document.documentElement;Array.from(s.classList).forEach(a=>{a.startsWith("afx-effect-")&&s.classList.remove(a)}),s.classList.add(`afx-effect-${r}`),t.currentEffectId=r;let c=re[r];if(c){let a=je(),n=Ui(r,t.dpr),u={gl:t.glContext,ctx2d:t.ctx2D,canvasGL:t.sharedGL,canvas2D:t.shared2D,width:t.width,height:t.height,dpr:n,topInset:a.ioHeader,visibleWidth:t.width,visibleHeight:t.height-a.ioHeader,visibleBounds:{top:a.ioHeader,bottom:t.height}};t.marquee&&t.marquee.updateStyles(c.marqueeFont||{}),c.run(u,i),Kt(c),t.marquee&&(t.marquee.enabled=kt())}else t.marquee&&t.marquee.updateStyles({}),Kt(null)}function rt(t){let i=document.getElementById("ankifx-background");if(!i||!t.sharedGL||!t.shared2D||!t.sharedMarquee)return;let o=je().ioHeader;document.documentElement.style.setProperty("--afx-viewport-height",`calc(100dvh + ${o}px)`);let r=i.getBoundingClientRect();t.width=r.width,t.height=document.documentElement.clientHeight+o,t.dpr=Oi();let s=mo();if(t.sharedGL.width=t.width*s,t.sharedGL.height=t.height*s,t.sharedGL.style.width=t.width+"px",t.sharedGL.style.height=t.height+"px",t.shared2D.width=t.width*t.dpr,t.shared2D.height=t.height*t.dpr,t.shared2D.style.width=t.width+"px",t.shared2D.style.height=t.height+"px",t.sharedMarquee.width=t.width*t.dpr,t.sharedMarquee.height=t.height*t.dpr,t.sharedMarquee.style.width=t.width+"px",t.sharedMarquee.style.height=t.height+"px",t.glContext&&t.glContext.viewport(0,0,t.sharedGL.width,t.sharedGL.height),t.ctx2D&&(t.ctx2D.setTransform(1,0,0,1,0,0),t.ctx2D.scale(t.dpr,t.dpr)),t.ctxMarquee&&(t.ctxMarquee.setTransform(1,0,0,1,0,0),t.ctxMarquee.scale(t.dpr,t.dpr)),t.currentEffectId&&re[t.currentEffectId]?.onResize){let c=Ui(t.currentEffectId,t.dpr);re[t.currentEffectId].onResize(t.width,t.height,c)}}function nr(t){let e=je().ioHeader,o=window.innerHeight,r=document.documentElement.clientHeight,s=setInterval(()=>{let c=je(),a=window.innerHeight,n=document.documentElement.clientHeight;(c.ioHeader!==e||a!==o||n!==r)&&(e=c.ioHeader,o=a,r=n,rt(t))},50);setTimeout(()=>clearInterval(s),2e3)}function sr(t){t._layoutHandler&&(window.removeEventListener("orientationchange",t._layoutHandler),window.removeEventListener("resize",t._layoutHandler)),t._resizeTimeout&&clearTimeout(t._resizeTimeout),t._resizeInterval&&clearInterval(t._resizeInterval),t._layoutHandler=()=>{t._resizeTimeout&&clearTimeout(t._resizeTimeout),t._resizeInterval&&clearInterval(t._resizeInterval),rt(t),t._resizeTimeout=setTimeout(()=>{rt(t)},100);let i=0,e=t.width,o=t.height;t._resizeInterval=setInterval(()=>{if(i+=100,i>=1500){clearInterval(t._resizeInterval);return}let r=je(),s=document.getElementById("ankifx-background"),c=s?s.getBoundingClientRect():null,a=c?c.width:window.innerWidth,n=document.documentElement.clientHeight+r.ioHeader;(a!==e||n!==o)&&(e=a,o=n,rt(t))},100)},window.addEventListener("orientationchange",t._layoutHandler),window.addEventListener("resize",t._layoutHandler)}function lr(t){let i=document.getElementById("afx-bottom-dock");i&&(t.dockObserver=new ResizeObserver(()=>{let e=i.getBoundingClientRect();document.documentElement.style.setProperty("--afx-dock-height",`${e.height}px`)}),t.dockObserver.observe(i))}function cr(t){t.observer||(t._observerTimeout=null,t.observer=new MutationObserver(()=>{t._observerTimeout&&clearTimeout(t._observerTimeout),t._observerTimeout=setTimeout(()=>{t._observerTimeout=null;let i=document.getElementById("qa");(i?!!i.querySelector(".ankifx-card"):!1)?Bi(t):typeof t=="object"&&window.AnkiFX&&window.AnkiFX.destroy()},20)}),t.observer.observe(document.documentElement,{childList:!0,subtree:!0}))}function Bi(t){let i=t&&t.observer;i&&t.observer.disconnect();let e=document.getElementById("_flag"),o=document.getElementById("_mark"),r=document.getElementById("afx-top-group-left"),s=document.getElementById("afx-top-group-right"),c=document.getElementById("afx-btn-skip");if(o&&r){let a=document.getElementById("afx-global-fps");a&&o.nextSibling!==a?r.insertBefore(o,a):!a&&o.parentElement!==r&&r.appendChild(o)}e&&s&&e.parentElement!==s&&s.insertBefore(e,c),i&&t.observer.observe(document.documentElement,{childList:!0,subtree:!0})}function go(t){if(t.marqueeInterval)return;let i=0,e=0,o=r=>{if(r===void 0&&(r=performance.now()),i||(i=r),e++,r-i>=1e3){let s=document.getElementById("afx-global-fps");s&&(s.textContent=`FPS: ${e}`),e=0,i=r}if(t.marquee&&t.ctxMarquee){if(t.ctxMarquee.clearRect(0,0,t.width,t.height),t.currentEffectId&&re[t.currentEffectId]?.drawOverlay)try{re[t.currentEffectId].drawOverlay(t.ctxMarquee,t.width,t.height,r)}catch(s){console.error("[AnkiFX] drawOverlay error: "+s.message)}t.marquee.render(t.ctxMarquee,t.width,t.height)}t.marqueeInterval=requestAnimationFrame(o)};t.marqueeInterval=requestAnimationFrame(o)}function fr(t,i,e,o){let r=i.countdown;if((i.debug||i.isConfigFileError)&&(r=0),r>0){o.textContent=`( ${r} )`;let s=setInterval(()=>{r--,o.textContent=`( ${r} )`,r<=0&&(clearInterval(s),o.textContent="I AGREE",o.disabled=!1)},1e3)}else o.textContent="I AGREE",o.disabled=!1;o.addEventListener("click",s=>{s.stopPropagation(),o.disabled||window.AnkiFX.agree(e,i.deckTitle)})}window.neoart=Object.create(null);function bo(t,i){var e=Object.create(null,{endian:{value:1,writable:!0},length:{value:0,writable:!0},index:{value:0,writable:!0},buffer:{value:null,writable:!0},view:{value:null,writable:!0},bytesAvailable:{get:function(){return this.length-this.index}},position:{get:function(){return this.index},set:function(o){o<0?o=0:o>this.length&&(o=this.length),this.index=o}},clear:{value:function(){this.buffer=new ArrayBuffer,this.view=null,this.index=this.length=0}},readAt:{value:function(o){return this.view.getUint8(o)}},readByte:{value:function(){return this.view.getInt8(this.index++)}},readShort:{value:function(){var o=this.view.getInt16(this.index,this.endian);return this.index+=2,o}},readInt:{value:function(){var o=this.view.getInt32(this.index,this.endian);return this.index+=4,o}},readUbyte:{value:function(){return this.view.getUint8(this.index++)}},readUshort:{value:function(){var o=this.view.getUint16(this.index,this.endian);return this.index+=2,o}},readUint:{value:function(){var o=this.view.getUint32(this.index,this.endian);return this.index+=4,o}},readBytes:{value:function(o,r,s){var c=o.view,a=this.index,n=this.view;for((s+=a)>this.length&&(s=this.length);a<s;++a)c.setUint8(r++,n.getUint8(a));this.index=a}},readString:{value:function(o){var r=this.index,s=this.view,c="";for((o+=r)>this.length&&(o=this.length);r<o;++r)c+=String.fromCharCode(s.getUint8(r));return this.index=o,c}},writeAt:{value:function(o,r){this.view.setUint8(o,r)}},writeByte:{value:function(o){this.view.setInt8(this.index++,o)}},writeShort:{value:function(o){this.view.setInt16(this.index,o),this.index+=2}},writeInt:{value:function(o){this.view.setInt32(this.index,o),this.index+=4}}});return e.buffer=t,e.view=new DataView(t),e.length=t.byteLength,Object.seal(e)}function ur(){return Object.create(null,{l:{value:0,writable:!0},r:{value:0,writable:!0},next:{value:null,writable:!0}})}function Ni(){return Object.create(null,{player:{value:null,writable:!0},channels:{value:[],writable:!0},buffer:{value:[],writable:!0},samplesTick:{value:0,writable:!0},samplesLeft:{value:0,writable:!0},remains:{value:0,writable:!0},completed:{value:0,writable:!0},bufferSize:{get:function(){return this.buffer.length},set:function(t){var i,e=this.buffer.length||0;if(!(t===e||t<512)&&(this.buffer.length=t,t>e))for(this.buffer[e]=ur(),i=++e;i<t;++i)this.buffer[i]=this.buffer[i-1].next=ur()}},complete:{get:function(){return this.completed},set:function(t){this.completed=t^this.player.loopSong}},reset:{value:function(){var t=this.channels[0],i=this.buffer[0];for(this.samplesLeft=0,this.remains=0,this.completed=0;t;)t.initialize(),t=t.next;for(;i;)i.l=i.r=0,i=i.next}},restore:{configurable:!0,value:function(){}}})}function qa(){var t=null;return typeof AudioContext<"u"?t=new AudioContext:alert("Web Audio API does not appear to be supported. Use Chrome, Safari or Firefox"),t}function qi(){var t=Object.create(null,{context:{value:null,writable:!0},node:{value:null,writable:!0},analyser:{value:null,writable:!0},analyse:{value:0,writable:!0},endian:{value:0,writable:!0},sampleRate:{value:0,writable:!0},playSong:{value:0,writable:!0},lastSong:{value:0,writable:!0},version:{value:0,writable:!0},title:{value:"",writable:!0},channels:{value:0,writable:!0},loopSong:{value:0,writable:!0},speed:{value:0,writable:!0},tempo:{value:0,writable:!0},mixer:{value:null,writable:!0},tick:{value:0,writable:!0},paused:{value:0,writable:!0},callback:{value:null,writable:!0},quality:{configurable:!0,set:function(i){this.callback=i?this.mixer.accurate.bind(this.mixer):this.mixer.fast.bind(this.mixer)}},toggle:{value:function(i){this.mixer.channels[i].mute^=1}},setup:{configurable:!0,value:function(){}},load:{value:function(i){return this.version=0,this.playSong=0,this.lastSong=0,this.mixer.restore(),i.view||(i=bo(i)),i.position=0,i.readUint()===67324752&&window.neoart.Unzip,i.endian=this.endian,i.position=0,this.loader(i),this.version&&this.setup(),this.version}},play:{value:function(){var i,e;this.version&&(this.paused?this.paused=0:(this.initialize(),typeof this.context.createJavaScriptNode=="function"?this.node=this.context.createJavaScriptNode(this.mixer.bufferSize):this.node=this.context.createScriptProcessor(this.mixer.bufferSize),this.analyser=this.context.createAnalyser(),this.node.connect(this.analyser),this.node.onaudioprocess=this.callback),this.analyse&&window.neoart.Flectrum?(e=window.neoart.analyserNode=this.context.createAnalyser(),this.node.connect(e),e.connect(this.context.destination)):this.node.connect(this.context.destination),i=document.createEvent("Event"),i.initEvent("flodPlay",!0,!1),document.dispatchEvent(i))}},pause:{value:function(){if(this.node){this.node.disconnect(),this.paused=1;var i=document.createEvent("Event");i.initEvent("flodPause",!0,!1),document.dispatchEvent(i)}}},stop:{value:function(){if(this.node){this.node.disconnect(),this.node.onaudioprocess=this.node=null,this.paused=0,this.restore&&this.restore();var i=document.createEvent("Event");i.initEvent("flodStop",!0,!1),document.dispatchEvent(i)}}},reset:{value:function(){this.tick=0,this.mixer.initialize(),this.mixer.samplesTick=this.sampleRate*2.5/this.tempo>>0}}});return window.neoart.audioContext||(window.neoart.audioContext=qa()),t.context=window.neoart.audioContext,t.sampleRate=t.context.sampleRate,t}function ji(t){var i=Object.create(null,{next:{value:null,writable:!0},mute:{value:0,writable:!0},panning:{value:0,writable:!0},delay:{value:0,writable:!0},pointer:{value:0,writable:!0},length:{value:0,writable:!0},audena:{value:0,writable:!0},audcnt:{value:0,writable:!0},audloc:{value:0,writable:!0},audper:{value:0,writable:!0},audvol:{value:0,writable:!0},timer:{value:0,writable:!0},level:{value:0,writable:!0},ldata:{value:0,writable:!0},rdata:{value:0,writable:!0},enabled:{get:function(){return this.audena},set:function(e){e!==this.audena&&(this.audena=e,this.audloc=this.pointer,this.audcnt=this.pointer+this.length,this.timer=1,e&&(this.delay+=2))}},period:{set:function(e){e<0?e=0:e>65535&&(e=65535),this.audper=e}},volume:{set:function(e){e<0?e=0:e>64&&(e=64),this.audvol=e}},resetData:{value:function(){this.ldata=0,this.rdata=0}},initialize:{value:function(){this.audena=0,this.audcnt=0,this.audloc=0,this.audper=50,this.audvol=0,this.timer=0,this.ldata=0,this.rdata=0,this.delay=0,this.pointer=0,this.length=0}}});return i.panning=i.level=(++t&2)===0?-1:1,Object.seal(i)}function ja(){return Object.create(null,{active:{value:0,writable:!0},forced:{value:-1,writable:!0},l0:{value:0,writable:!0},l1:{value:0,writable:!0},l2:{value:0,writable:!0},l3:{value:0,writable:!0},l4:{value:0,writable:!0},r0:{value:0,writable:!0},r1:{value:0,writable:!0},r2:{value:0,writable:!0},r3:{value:0,writable:!0},r4:{value:0,writable:!0},initialize:{value:function(){this.l0=this.l1=this.l2=this.l3=this.l4=0,this.r0=this.r1=this.r2=this.r3=this.r4=0}},process:{value:function(t,i){var e=.52133458435322,o=.4860348337215757,r=.9314955486749749,s=1-o;t===0&&(this.l0=o*i.l+s*this.l0,this.r0=o*i.r+s*this.r0,s=1-r,i.l=this.l1=r*this.l0+s*this.l1,i.r=this.r1=r*this.r0+s*this.r1),(this.active|this.forced)>0&&(s=1-e,this.l2=e*i.l+s*this.l2,this.r2=e*i.r+s*this.r2,this.l3=e*this.l2+s*this.l3,this.r3=e*this.r2+s*this.r3,i.l=this.l4=e*this.l3+s*this.l4,i.r=this.r4=e*this.r3+s*this.r4),i.l>1?i.l=1:i.l<-1&&(i.l=-1),i.r>1?i.r=1:i.r<-1&&(i.r=-1)}}})}function $i(){return Object.create(null,{note:{value:0,writable:!0},sample:{value:0,writable:!0},effect:{value:0,writable:!0},param:{value:0,writable:!0}})}function Zt(){return Object.create(null,{name:{value:"",writable:!0},length:{value:0,writable:!0},loop:{value:0,writable:!0},repeat:{value:0,writable:!0},volume:{value:0,writable:!0},pointer:{value:0,writable:!0},loopPtr:{value:0,writable:!0}})}function vo(){var t=Ni();return Object.defineProperties(t,{filter:{value:null,writable:!0},model:{value:1,writable:!0},memory:{value:[],writable:!0},loopPtr:{value:0,writable:!0},loopLen:{value:4,writable:!0},clock:{value:0,writable:!0},master:{value:0,writable:!0},ready:{value:0,writable:!0},volume:{set:function(i){i>0?(i>64&&(i=64),this.master=i/64*.00390625):this.master=0}},initialize:{value:function(){var i=this.memory.length,e=i+this.loopLen;if(this.reset(),this.filter.initialize(),!this.ready)for(this.ready=1,this.loopPtr=i;i<e;++i)this.memory[i]=0}},restore:{value:function(){this.ready=0,this.memory.length=0}},store:{value:function(i,e,o){var r,s,c=i.position,a=this.memory.length,n;for(o&&(i.position=o),n=i.position+e,n>=i.length&&(r=n-i.length,e=i.length-i.position),s=a,e+=a;s<e;++s)this.memory[s]=i.readByte();for(e+=r;s<e;++s)this.memory[s]=0;return o&&(i.position=c),a}},fast:{value:function(i){var e,o,r,s=this.memory,c,a=0,n,u=0,d,l,p,v=this.bufferSize,h,f,m;if(this.completed){if(!this.remains){this.player.stop();return}v=this.remains}for(;a<v;){for(this.samplesLeft||(this.player.process(),this.samplesLeft=this.samplesTick,this.completed&&(v=a+this.samplesTick,v>this.bufferSize&&(this.remains=v-this.bufferSize,v=this.bufferSize))),f=this.samplesLeft,a+f>=v&&(f=v-a),n=u+f,e=this.channels[0];e;){if(p=this.buffer[u],e.audena&&e.audper>60)for(h=e.audper/this.clock,m=e.audvol*this.master,c=m*(1-e.level),l=m*(1+e.level),o=u;o<n;++o)e.delay?e.delay--:--e.timer<1&&(e.mute||(m=s[e.audloc]*.0078125,e.ldata=m*c,e.rdata=m*l),e.audloc++,e.timer+=h,e.audloc>=e.audcnt&&(e.audloc=e.pointer,e.audcnt=e.pointer+e.length)),p.l+=e.ldata,p.r+=e.rdata,p=p.next;else for(o=u;o<n;++o)p.l+=e.ldata,p.r+=e.rdata,p=p.next;e=e.next}u=n,a+=f,this.samplesLeft-=f}for(m=this.model,s=this.filter,p=this.buffer[0],r=i.outputBuffer.getChannelData(0),d=i.outputBuffer.getChannelData(1),o=0;o<v;++o)s.process(m,p),r[o]=p.l,d[o]=p.r,p.l=p.r=0,p=p.next}}}),t.channels[0]=ji(0),t.channels[0].next=t.channels[1]=ji(1),t.channels[1].next=t.channels[2]=ji(2),t.channels[2].next=t.channels[3]=ji(3),t.bufferSize=8192,t.filter=ja(),t.master=.00390625,Object.seal(t)}function Hi(t){var i=qi();return Object.defineProperties(i,{quality:{set:function(e){this.callback=this.mixer.fast.bind(this.mixer)}},stereo:{set:function(e){var o=this.mixer.channels[0];for(e<0?e=0:e>1&&(e=1);o;)o.level=e*o.panning,o=o.next}},volume:{set:function(e){e<0?e=0:e>1&&(e=1),this.mixer.master=e*.00390625}},frequency:{value:function(e){e?(this.mixer.clock=3579545/this.sampleRate,this.mixer.samplesTick=735):(this.mixer.clock=3546895/this.sampleRate,this.mixer.samplesTick=882)}}}),i.mixer=t||vo(),i.mixer.player=i,i.frequency(0),i.channels=4,i.endian=0,i.quality=0,i.speed=6,i.tempo=125,i}function dr(){return Object.create(null,{next:{value:null,writable:!0},mute:{value:0,writable:!0},enabled:{value:0,writable:!0},sample:{value:null,writable:!0},length:{value:0,writable:!0},index:{value:0,writable:!0},pointer:{value:0,writable:!0},delta:{value:0,writable:!0},fraction:{value:0,writable:!0},speed:{value:0,writable:!0},dir:{value:0,writable:!0},oldSample:{value:null,writable:!0},oldLength:{value:0,writable:!0},oldPointer:{value:0,writable:!0},oldFraction:{value:0,writable:!0},oldSpeed:{value:0,writable:!0},oldDir:{value:0,writable:!0},volume:{value:0,writable:!0},lvol:{value:0,writable:!0},rvol:{value:0,writable:!0},panning:{value:128,writable:!0},lpan:{value:.5,writable:!0},rpan:{value:.5,writable:!0},ldata:{value:0,writable:!0},rdata:{value:0,writable:!0},mixCounter:{value:0,writable:!0},lmixRampU:{value:0,writable:!0},lmixDeltaU:{value:0,writable:!0},rmixRampU:{value:0,writable:!0},rmixDeltaU:{value:0,writable:!0},lmixRampD:{value:0,writable:!0},lmixDeltaD:{value:0,writable:!0},rmixRampD:{value:0,writable:!0},rmixDeltaD:{value:0,writable:!0},volCounter:{value:0,writable:!0},lvolDelta:{value:0,writable:!0},rvolDelta:{value:0,writable:!0},panCounter:{value:0,writable:!0},lpanDelta:{value:0,writable:!0},rpanDelta:{value:0,writable:!0},initialize:{value:function(){this.enabled=0,this.sample=null,this.length=0,this.index=0,this.pointer=0,this.delta=0,this.fraction=0,this.speed=0,this.dir=0,this.oldSample=null,this.oldLength=0,this.oldPointer=0,this.oldFraction=0,this.oldSpeed=0,this.oldDir=0,this.volume=0,this.lvol=0,this.rvol=0,this.panning=128,this.lpan=.5,this.rpan=.5,this.ldata=0,this.rdata=0,this.mixCounter=0,this.lmixRampU=0,this.lmixDeltaU=0,this.rmixRampU=0,this.rmixDeltaU=0,this.lmixRampD=0,this.lmixDeltaD=0,this.rmixRampD=0,this.rmixDeltaD=0,this.volCounter=0,this.lvolDelta=0,this.rvolDelta=0,this.panCounter=0,this.lpanDelta=0,this.rpanDelta=0}}})}function hr(){return Object.create(null,{name:{value:"",writable:!0},bits:{value:8,writable:!0},volume:{value:0,writable:!0},length:{value:0,writable:!0},data:{value:[],writable:!0},loopMode:{value:0,writable:!0},loopStart:{value:0,writable:!0},loopLen:{value:0,writable:!0},store:{value:function(t){var i=0,e,o=this.length,r,s,c,a;if(this.loopLen||(this.loopMode=0),r=t.position,this.loopMode?(o=this.loopStart+this.loopLen,this.data=new Float32Array(o+1)):this.data=new Float32Array(this.length+1),this.bits===8)for(c=r+o,c>t.length&&(o=t.length-r),e=0;e<o;e++)a=t.readByte()+i,a<-128?a+=256:a>127&&(a-=256),this.data[e]=a*.0078125,i=a;else for(c=r+(o<<1),c>t.length&&(o=t.length-r>>1),e=0;e<o;e++)a=t.readShort()+i,a<-32768?a+=65536:a>32767&&(a-=65536),this.data[e]=a*3051758e-11,i=a;if(c=r+this.length,this.loopMode?(this.length=this.loopStart+this.loopLen,this.loopMode===1?this.data[o]=this.data[this.loopStart]:this.data[o]=this.data[o-1]):this.data[this.length]=0,o!==this.length)for(s=this.data[o-1],e=o;e<this.length;e++)this.data[e]=s;c<t.length?t.position=c:t.position=t.length-1}}})}function $a(){var t=Ni();return Object.defineProperties(t,{setup:{value:function(i){var e=1;for(this.channels.length=i,this.channels[0]=dr();e<i;++e)this.channels[e]=this.channels[e-1].next=dr()}},initialize:{value:function(){this.reset()}},fast:{value:function(i){var e,o,r,s,c=0,a,n=0,u,d,l,p=this.bufferSize,v,h;if(this.completed){if(!this.remains){this.player.stop();return}p=this.remains}for(;c<p;){for(this.samplesLeft||(this.player.process(),this.player.fast(),this.samplesLeft=this.samplesTick,this.completed&&(p=c+this.samplesTick,p>this.bufferSize&&(this.remains=p-this.bufferSize,p=this.bufferSize))),v=this.samplesLeft,c+v>=p&&(v=p-c),a=n+v,e=this.channels[0];e;){if(!e.enabled){e=e.next;continue}for(d=e.sample,o=d.data,l=this.buffer[n],s=n;s<a;++s){if(e.index!==e.pointer){if(e.index>=e.length)if(d.loopMode)e.pointer=d.loopStart+(e.index-e.length),e.length=d.length,d.loopMode===2&&(e.dir?e.dir=0:e.dir=d.length+d.loopStart-1);else{e.enabled=0;break}else e.pointer=e.index;e.mute?(e.ldata=0,e.rdata=0):(e.dir?h=o[e.dir-e.pointer]:h=o[e.pointer],e.ldata=h*e.lvol,e.rdata=h*e.rvol)}e.index=e.pointer+e.delta,(e.fraction+=e.speed)>=1&&(e.index++,e.fraction--),l.l+=e.ldata,l.r+=e.rdata,l=l.next}e=e.next}n=a,c+=v,this.samplesLeft-=v}for(l=this.buffer[0],r=i.outputBuffer.getChannelData(0),u=i.outputBuffer.getChannelData(1),s=0;s<p;++s)l.l>1?l.l=1:l.l<-1&&(l.l=-1),l.r>1?l.r=1:l.r<-1&&(l.r=-1),r[s]=l.l,u[s]=l.r,l.l=l.r=0,l=l.next}},accurate:{value:function(i){var e,o,r,s,c,a,n=0,u,d=0,l,p,v,h,f,m=this.bufferSize,x,g;if(this.completed){if(!this.remains){this.player.stop();return}m=this.remains}for(;n<m;){for(this.samplesLeft||(this.player.process(),this.player.accurate(),this.samplesLeft=this.samplesTick,this.completed&&(m=n+this.samplesTick,m>this.bufferSize&&(this.remains=m-this.bufferSize,m=this.bufferSize))),x=this.samplesLeft,n+x>=m&&(x=m-n),u=d+x,e=this.channels[0];e;){if(!e.enabled){e=e.next;continue}for(v=e.sample,o=v.data,h=e.oldSample,h&&(r=h.data),f=this.buffer[d],a=d;a<u;++a){if(g=e.mute?0:o[e.pointer],g+=(o[e.pointer+e.dir]-g)*e.fraction,(e.fraction+=e.speed)>=1&&(c=e.fraction>>0,e.fraction-=c,e.dir>0?(e.pointer+=c,e.pointer>e.length&&(e.fraction+=e.pointer-e.length,e.pointer=e.length)):(e.pointer-=c,e.pointer<e.length&&(e.fraction+=e.length-e.pointer,e.pointer=e.length))),e.mixCounter?(h?(l=e.mute?0:r[e.oldPointer],l+=(r[e.oldPointer+e.oldDir]-l)*e.oldFraction,(e.oldFraction+=e.oldSpeed)>1&&(c=e.oldFraction>>0,e.oldFraction-=c,e.oldDir>0?(e.oldPointer+=c,e.oldPointer>e.oldLength&&(e.oldFraction+=e.oldPointer-e.oldLength,e.oldPointer=e.oldLength)):(e.oldPointer-=c,e.oldPointer<e.oldLength&&(e.oldFraction+=e.oldLength-e.oldPointer,e.oldPointer=e.oldLength))),f.l+=g*e.lmixRampU+l*e.lmixRampD,f.r+=g*e.rmixRampU+l*e.rmixRampD,e.lmixRampD-=e.lmixDeltaD,e.rmixRampD-=e.rmixDeltaD):(f.l+=g*e.lmixRampU,f.r+=g*e.rmixRampU),e.lmixRampU+=e.lmixDeltaU,e.rmixRampU+=e.rmixDeltaU,e.mixCounter--,e.oldPointer===e.oldLength&&(h.loopMode?h.loopMode===1?(e.oldPointer=h.loopStart,e.oldLength=h.length):e.oldDir>0?(e.oldPointer=h.length-1,e.oldLength=h.loopStart,e.oldDir=-1):(e.oldFraction-=1,e.oldPointer=h.loopStart,e.oldLength=h.length,e.oldDir=1):(h=null,e.oldPointer=0))):(f.l+=g*e.lvol,f.r+=g*e.rvol,e.volCounter?(e.lvol+=e.lvolDelta,e.rvol+=e.rvolDelta,e.volCounter--):e.panCounter&&(e.lpan+=e.lpanDelta,e.rpan+=e.rpanDelta,e.panCounter--,e.lvol=e.volume*e.lpan,e.rvol=e.volume*e.rpan)),e.pointer===e.length)if(v.loopMode)v.loopMode===1?(e.pointer=v.loopStart,e.length=v.length):e.dir>0?(e.pointer=v.length-1,e.length=v.loopStart,e.dir=-1):(e.fraction-=1,e.pointer=v.loopStart,e.length=v.length,e.dir=1);else{e.enabled=0;break}f=f.next}e=e.next}d=u,n+=x,this.samplesLeft-=x}for(f=this.buffer[0],s=i.outputBuffer.getChannelData(0),p=i.outputBuffer.getChannelData(1),a=0;a<m;++a)f.l>1?f.l=1:f.l<-1&&(f.l=-1),f.r>1?f.r=1:f.r<-1&&(f.r=-1),s[a]=f.l,p[a]=f.r,f.l=f.r=0,f=f.next}}}),t.bufferSize=8192,Object.seal(t)}function pr(t){var i=qi();return Object.defineProperties(i,{track:{value:null,writable:!0},length:{value:0,writable:!0},restart:{value:0,writable:!0},timer:{value:0,writable:!0},master:{value:0,writable:!0},volume:{set:function(e){e<0?e=0:e>1&&(e=1),this.master=e*64}},setup:{configurable:!1,value:function(){this.mixer.setup(this.channels)}}}),i.mixer=t||$a(),i.mixer.player=i,i.endian=1,i.quality=1,i}function Ha(t){var i=Object.create(null,{index:{value:t,writable:!0},next:{value:null,writable:!0},flags:{value:0,writable:!0},delay:{value:0,writable:!0},channel:{value:null,writable:!0},patternLoop:{value:0,writable:!0},patternLoopRow:{value:0,writable:!0},playing:{value:null,writable:!0},note:{value:0,writable:!0},keyoff:{value:0,writable:!0},period:{value:0,writable:!0},finetune:{value:0,writable:!0},arpDelta:{value:0,writable:!0},vibDelta:{value:0,writable:!0},instrument:{value:null,writable:!0},autoVibratoPos:{value:0,writable:!0},autoSweep:{value:0,writable:!0},autoSweepPos:{value:0,writable:!0},sample:{value:null,writable:!0},sampleOffset:{value:0,writable:!0},volume:{value:0,writable:!0},volEnabled:{value:0,writable:!0},volEnvelope:{value:null,writable:!0},volDelta:{value:0,writable:!0},volSlide:{value:0,writable:!0},volSlideMaster:{value:0,writable:!0},fineSlideU:{value:0,writable:!0},fineSlideD:{value:0,writable:!0},fadeEnabled:{value:0,writable:!0},fadeDelta:{value:0,writable:!0},fadeVolume:{value:0,writable:!0},panning:{value:0,writable:!0},panEnabled:{value:0,writable:!0},panEnvelope:{value:null,writable:!0},panSlide:{value:0,writable:!0},portaU:{value:0,writable:!0},portaD:{value:0,writable:!0},finePortaU:{value:0,writable:!0},finePortaD:{value:0,writable:!0},xtraPortaU:{value:0,writable:!0},xtraPortaD:{value:0,writable:!0},portaPeriod:{value:0,writable:!0},portaSpeed:{value:0,writable:!0},glissando:{value:0,writable:!0},glissPeriod:{value:0,writable:!0},vibratoPos:{value:0,writable:!0},vibratoSpeed:{value:0,writable:!0},vibratoDepth:{value:0,writable:!0},vibratoReset:{value:0,writable:!0},tremoloPos:{value:0,writable:!0},tremoloSpeed:{value:0,writable:!0},tremoloDepth:{value:0,writable:!0},waveControl:{value:0,writable:!0},tremorPos:{value:0,writable:!0},tremorOn:{value:0,writable:!0},tremorOff:{value:0,writable:!0},tremorVolume:{value:0,writable:!0},retrigx:{value:0,writable:!0},retrigy:{value:0,writable:!0},rowCurrent:{value:null,writable:!0},reset:{value:function(){this.volume=this.sample.volume,this.panning=this.sample.panning,this.finetune=this.sample.finetune>>3<<2,this.keyoff=0,this.volDelta=0,this.fadeEnabled=0,this.fadeDelta=0,this.rowCurrent=null,this.fadeVolume=65536,this.autoVibratoPos=0,this.autoSweep=1,this.autoSweepPos=0,this.vibDelta=0,this.vibratoReset=0,(this.waveControl&15)<4&&(this.vibratoPos=0),this.waveControl>>4<4&&(this.tremoloPos=0)}},autoVibrato:{value:function(){var e;switch(this.autoVibratoPos=this.autoVibratoPos+this.playing.vibratoSpeed&255,this.playing.vibratoType){case 0:e=Ka[this.autoVibratoPos];break;case 1:this.autoVibratoPos<128?e=-64:e=64;break;case 2:e=(64+(this.autoVibratoPos>>1)&127)-64;break;case 3:e=(64-(this.autoVibratoPos>>1)&127)-64;break;default:break}return e*=this.playing.vibratoDepth,this.autoSweep&&(this.playing.vibratoSweep?this.autoSweepPos>this.playing.vibratoSweep?(this.autoSweepPos&2&&(e*=this.autoSweepPos/this.playing.vibratoSweep),this.autoSweep=0):e*=++this.autoSweepPos/this.playing.vibratoSweep:this.autoSweep=0),this.flags|=he,e>>6}},tonePortamento:{value:function(){this.glissPeriod||(this.glissPeriod=this.period),this.period<this.portaPeriod?(this.glissPeriod+=this.portaSpeed<<2,this.glissando?this.period=Math.round(this.glissPeriod/64)<<6:this.period=this.glissPeriod,this.period>=this.portaPeriod&&(this.period=this.portaPeriod,this.glissPeriod=this.portaPeriod=0)):this.period>this.portaPeriod&&(this.glissPeriod-=this.portaSpeed<<2,this.glissando?this.period=Math.round(this.glissPeriod/64)<<6:this.period=this.glissPeriod,this.period<=this.portaPeriod&&(this.period=this.portaPeriod,this.glissPeriod=this.portaPeriod=0)),this.flags|=he}},tremolo:{value:function(){var e=255,o=this.tremoloPos&31;switch(this.waveControl>>4&3){case 0:e=wr[o];break;case 1:e=o<<3;break;default:break}this.volDelta=e*this.tremoloDepth>>6,this.tremoloPos>31&&(this.volDelta=-this.volDelta),this.tremoloPos=this.tremoloPos+this.tremoloSpeed&63,this.flags|=Y}},tremor:{value:function(){this.tremorPos===this.tremorOn?(this.tremorVolume=this.volume,this.volume=0,this.flags|=Y):(this.tremorPos=0,this.volume=this.tremorVolume,this.flags|=Y),this.tremorPos++}},vibrato:{value:function(){var e=255,o=this.vibratoPos&31;switch(this.waveControl&3){case 0:e=wr[o];break;case 1:e=o<<3,this.vibratoPos>31&&(e=255-e);break;default:break}this.vibDelta=e*this.vibratoDepth>>7,this.vibratoPos>31&&(this.vibDelta=-this.vibDelta),this.vibratoPos=this.vibratoPos+this.vibratoSpeed&63,this.flags|=he}}});return i.volEnvelope=mr(),i.panEnvelope=mr(),Object.seal(i)}function Gi(){return Object.create(null,{points:{value:[],writable:!0},total:{value:0,writable:!0},sustain:{value:0,writable:!0},loopStart:{value:0,writable:!0},loopEnd:{value:0,writable:!0},flags:{value:0,writable:!0}})}function mr(){return Object.create(null,{value:{value:0,writable:!0},position:{value:0,writable:!0},frame:{value:0,writable:!0},delta:{value:0,writable:!0},fraction:{value:0,writable:!0},stopped:{value:0,writable:!0},reset:{value:function(){this.value=0,this.position=0,this.frame=0,this.delta=0,this.fraction=0,this.stopped=0}}})}function gr(){var t=Object.create(null,{name:{value:"",writable:!0},samples:{value:[],writable:!0},noteSamples:{value:null,writable:!0},fadeout:{value:0,writable:!0},volData:{value:null,writable:!0},volEnabled:{value:0,writable:!0},panData:{value:null,writable:!0},panEnabled:{value:0,writable:!0},vibratoType:{value:0,writable:!0},vibratoSweep:{value:0,writable:!0},vibratoSpeed:{value:0,writable:!0},vibratoDepth:{value:0,writable:!0}});return t.noteSamples=new Uint8Array(96),t.volData=Gi(),t.panData=Gi(),Object.seal(t)}function br(t,i){var e=Object.create(null,{rows:{value:[],writable:!0},length:{value:0,writable:!0},size:{value:0,writable:!0}});return e.rows.length=e.size=t*i,e.length=t,Object.seal(e)}function Xi(t,i){var e=Object.create(null,{frame:{value:0,writable:!0},value:{value:0,writable:!0}});return e.frame=t||0,e.value=i||0,Object.seal(e)}function xo(){return Object.create(null,{note:{value:0,writable:!0},instrument:{value:0,writable:!0},volume:{value:0,writable:!0},effect:{value:0,writable:!0},param:{value:0,writable:!0}})}function vr(){var t=hr();return Object.defineProperties(t,{finetune:{value:0,writable:!0},panning:{value:0,writable:!0},relative:{value:0,writable:!0}}),Object.seal(t)}function Xa(t){var i=pr(t);return Object.defineProperties(i,{id:{value:"F2Player"},patterns:{value:[],writable:!0},instruments:{value:[],writable:!0},voices:{value:[],writable:!0},linear:{value:0,writable:!0},complete:{value:0,writable:!0},order:{value:0,writable:!0},position:{value:0,writable:!0},nextOrder:{value:0,writable:!0},nextPosition:{value:0,writable:!0},pattern:{value:null,writable:!0},patternDelay:{value:0,writable:!0},patternOffset:{value:0,writable:!0},timer:{value:0,writable:!0},rowCurrent:{value:0,writable:!0},initialize:{value:function(){var e=0,o;for(this.reset(),this.timer=this.speed,this.order=0,this.position=0,this.nextOrder=-1,this.nextPosition=-1,this.patternDelay=0,this.patternOffset=0,this.complete=0,this.master=64,this.voices.length=this.channels;e<this.channels;++e)o=Ha(e),o.channel=this.mixer.channels[e],o.playing=this.instruments[0],o.sample=o.playing.samples[0],this.voices[e]=o,e&&(this.voices[e-1].next=o)}},loader:{value:function(e){var o,r,s,c,a,n,u,d,l,p,v=22,h,f,m,x;if(!(e.length<360)){if(e.position=17,this.title=e.readString(20),e.position++,s=e.readString(20),s==="FastTracker v2.00   "||s==="FastTracker v 2.00  ")this.version=1;else if(s==="Sk@le Tracker")v=2,this.version=2;else if(s==="MadTracker 2.0")this.version=3;else if(s==="MilkyTracker        ")this.version=4;else if(s==="DigiBooster Pro 2.18")this.version=5;else if(s.indexOf("OpenMPT")!==-1)this.version=6;else return;for(e.readUshort(),o=e.readUint(),this.length=e.readUshort(),this.restart=e.readUshort(),this.channels=e.readUshort(),x=f=e.readUshort(),this.instruments=[],this.instruments.length=e.readUshort()+1,this.linear=e.readUshort(),this.speed=e.readUshort(),this.tempo=e.readUshort(),this.track=new Uint8Array(this.length),r=0;r<this.length;++r)u=e.readUbyte(),u>=x&&(f=u+1),this.track[r]=u;if(this.patterns=[],this.patterns.length=f,f!==x){for(l=br(64,this.channels),u=l.size,r=0;r<u;++r)l.rows[r]=xo();this.patterns[--f]=l}for(e.position=p=o+60,d=x,r=0;r<d;++r){if(o=e.readUint(),e.position++,l=br(e.readUshort(),this.channels),f=l.size,x=e.readUshort(),e.position=p+o,n=e.position+x,x)for(u=0;u<f;++u)h=xo(),x=e.readUbyte(),x&128?(x&1&&(h.note=e.readUbyte()),x&2&&(h.instrument=e.readUbyte()),x&4&&(h.volume=e.readUbyte()),x&8&&(h.effect=e.readUbyte()),x&16&&(h.param=e.readUbyte())):(h.note=x,h.instrument=e.readUbyte(),h.volume=e.readUbyte(),h.effect=e.readUbyte(),h.param=e.readUbyte()),h.note!==yo&&h.note>96&&(h.note=0),l.rows[u]=h;else for(u=0;u<f;++u)l.rows[u]=xo();this.patterns[r]=l,p=e.position,p!==n&&(p=e.position=n)}for(n=e.position,d=this.instruments.length,r=1;r<d&&(c=e.readUint(),!(e.position+c>=e.length));++r){if(a=gr(),a.name=e.readString(22),e.position++,x=e.readUshort(),x>16&&(x=16),o=e.readUint(),v===2&&o!==64&&(o=64),x){for(a.samples=[],a.samples.length=x,u=0;u<96;++u)a.noteSamples[u]=e.readUbyte();for(u=0;u<12;++u)a.volData.points[u]=Xi(e.readUshort(),e.readUshort());for(u=0;u<12;++u)a.panData.points[u]=Xi(e.readUshort(),e.readUshort());for(a.volData.total=e.readUbyte(),a.panData.total=e.readUbyte(),a.volData.sustain=e.readUbyte(),a.volData.loopStart=e.readUbyte(),a.volData.loopEnd=e.readUbyte(),a.panData.sustain=e.readUbyte(),a.panData.loopStart=e.readUbyte(),a.panData.loopEnd=e.readUbyte(),a.volData.flags=e.readUbyte(),a.panData.flags=e.readUbyte(),a.volData.flags&xr&&(a.volEnabled=1),a.panData.flags&xr&&(a.panEnabled=1),a.vibratoType=e.readUbyte(),a.vibratoSweep=e.readUbyte(),a.vibratoDepth=e.readUbyte(),a.vibratoSpeed=e.readUbyte(),a.fadeout=e.readUshort()<<1,e.position+=v,p=e.position,this.instruments[r]=a,u=0;u<x;++u)m=vr(),m.length=e.readUint(),m.loopStart=e.readUint(),m.loopLen=e.readUint(),m.volume=e.readUbyte(),m.finetune=e.readByte(),m.loopMode=e.readUbyte(),m.panning=e.readUbyte(),m.relative=e.readByte(),e.position++,m.name=e.readString(22),a.samples[u]=m,e.position=p+=o;for(u=0;u<x;++u)m=a.samples[u],m.length&&(p=e.position+m.length,m.loopMode&16&&(m.bits=16,m.loopMode^=16,m.length>>=1,m.loopStart>>=1,m.loopLen>>=1),m.loopLen||(m.loopMode=0),m.store(e),m.loopMode&&(m.length=m.loopStart+m.loopLen),e.position=p)}else e.position=n+c;if(n=e.position,n>=e.length)break}for(a=gr(),a.volData=Gi(),a.panData=Gi(),a.samples=[],r=0;r<12;++r)a.volData.points[r]=Xi(),a.panData.points[r]=Xi();for(m=vr(),m.length=220,m.data=new Float32Array(220),r=0;r<220;++r)m.data[r]=0;a.samples[0]=m,this.instruments[0]=a}}},process:{value:function(){var e,o,r,s,c,a,n,u,d,l,p,v,h,f=this.voices[0];if(this.tick)for(;f;){if(l=this.pattern.rows[this.position+f.index],f.delay)if((l.param&15)===this.tick)f.flags=f.delay,f.delay=0;else{f=f.next;continue}if(l.volume)switch(n=l.volume>>4,u=l.volume&15,n){case 6:f.volume-=u,f.volume<0&&(f.volume=0),f.flags|=Y;break;case 7:f.volume+=u,f.volume>64&&(f.volume=64),f.flags|=Y;break;case 11:f.vibrato();break;case 13:f.panning-=u,f.panning<0&&(f.panning=0),f.flags|=Te;break;case 14:f.panning+=u,f.panning>255&&(f.panning=255),f.flags|=Te;break;case 15:f.portaPeriod&&f.tonePortamento();break;default:break}switch(n=l.param>>4,u=l.param&15,l.effect){case 0:if(!l.param)break;h=(this.tick-this.timer)%3,h<0&&(h+=3),this.tick===2&&this.timer===18&&(h=0),h?h===1?this.linear?f.arpDelta=-(u<<6):(h=this.amiga(f.note+u,f.finetune),f.arpDelta=h-f.period):this.linear?f.arpDelta=-(n<<6):(h=this.amiga(f.note+n,f.finetune),f.arpDelta=h-f.period):f.arpDelta=0,f.flags|=he;break;case 1:f.period-=f.portaU,f.period<0&&(f.period=0),f.flags|=he;break;case 2:f.period+=f.portaD,f.period>9212&&(f.period=9212),f.flags|=he;break;case 3:f.portaPeriod&&f.tonePortamento();break;case 4:n&&(f.vibratoSpeed=n),u&&(f.vibratoDepth=u<<2),f.vibrato();break;case 5:v=1,f.portaPeriod&&f.tonePortamento();break;case 6:v=1,f.vibrato();break;case 7:f.tremolo();break;case 10:v=1;break;case 14:switch(n){case 9:this.tick%u===0&&(f.volEnvelope.reset(),f.panEnvelope.reset(),f.flags|=Y|Te|St);break;case 12:this.tick===u&&(f.volume=0,f.flags|=Y);break;default:break}break;case 17:n=f.volSlideMaster>>4,u=f.volSlideMaster&15,n?(this.master+=n,this.master>64&&(this.master=64),f.flags|=Y):u&&(this.master-=u,this.master<0&&(this.master=0),f.flags|=Y);break;case 20:this.tick===l.param&&(f.fadeEnabled=1,f.keyoff=1);break;case 24:n=f.panSlide>>4,u=f.panSlide&15,n?(f.panning+=n,f.panning>255&&(f.panning=255),f.flags|=Te):u&&(f.panning-=u,f.panning<0&&(f.panning=0),f.flags|=Te);break;case 27:if(e=this.tick,l.volume||e++,e%f.retrigy)break;(!l.volume||l.volume>80)&&f.retrigx&&this.retrig(f),f.flags|=St;break;case 29:f.tremor();break;default:break}v&&(n=f.volSlide>>4,u=f.volSlide&15,v=0,n?(f.volume+=n,f.flags|=Y):u&&(f.volume-=u,f.flags|=Y)),f=f.next}else for(this.nextOrder>=0&&(this.order=this.nextOrder),this.nextPosition>=0&&(this.position=this.nextPosition),this.nextOrder=this.nextPosition=-1,this.pattern=this.patterns[this.track[this.order]];f;){if(this.rowCurrent=this.position+f.index,l=this.pattern.rows[this.rowCurrent],e=l.volume>>4,d=l.effect===3||l.effect===5||e===15,n=l.param>>4,f.keyoff=0,f.arpDelta&&(f.arpDelta=0,f.flags|=he),l.instrument?(f.instrument=l.instrument<this.instruments.length?this.instruments[l.instrument]:null,f.volEnvelope.reset(),f.panEnvelope.reset(),f.flags|=Y|Te|ht):(l.note===yo||l.effect===20&&!l.param)&&(f.fadeEnabled=1,f.keyoff=1),l.note&&l.note!==yo?f.instrument?(r=f.instrument,h=l.note-1,p=r.samples[r.noteSamples[h]],h+=p.relative,h>=Wa&&h<=Ya&&(d||(f.note=h,f.sample=p,l.instrument?(f.volEnabled=r.volEnabled,f.panEnabled=r.panEnabled,f.flags|=Ga):f.flags|=he|St),l.instrument?(f.reset(),f.fadeDelta=r.fadeout):f.finetune=p.finetune>>3<<2,l.effect===14&&n===5&&(f.finetune=(l.param&15)-8<<3),this.linear?h=(120-h<<6)-f.finetune:h=this.amiga(h,f.finetune),d?f.portaPeriod=h:(f.period=h,f.glissPeriod=0))):(f.volume=0,f.flags=Y|ht):f.vibratoReset&&l.effect!==4&&l.effect!==6&&(f.vibDelta=0,f.vibratoReset=0,f.flags|=he),l.volume)if(l.volume>=16&&l.volume<=80)f.volume=l.volume-16,f.flags|=Y|ht;else switch(u=l.volume&15,e){case 6:f.volume-=u,f.volume<0&&(f.volume=0),f.flags|=Y;break;case 7:f.volume+=u,f.volume>64&&(f.volume=64),f.flags|=Y;break;case 10:u&&(f.vibratoSpeed=u);break;case 11:u&&(f.vibratoDepth=u<<2);break;case 12:f.panning=u<<4,f.flags|=Te;break;case 15:u&&(f.portaSpeed=u<<4);break;default:break}if(l.effect)switch(u=l.param&15,l.effect){case 1:l.param&&(f.portaU=l.param<<2);break;case 2:l.param&&(f.portaD=l.param<<2);break;case 3:l.param&&e!==15&&(f.portaSpeed=l.param);break;case 4:f.vibratoReset=1;break;case 5:l.param&&(f.volSlide=l.param);break;case 6:l.param&&(f.volSlide=l.param),f.vibratoReset=1;break;case 7:n&&(f.tremoloSpeed=n),u&&(f.tremoloDepth=u);break;case 8:f.panning=l.param,f.flags|=Te;break;case 9:l.param&&(f.sampleOffset=l.param<<8),f.sampleOffset>=f.sample.length&&(f.volume=0,f.sampleOffset=0,f.flags&=~(he|St),f.flags|=Y|ht);break;case 10:l.param&&(f.volSlide=l.param);break;case 11:this.nextOrder=l.param,this.nextOrder>=this.length?this.complete=1:this.nextPosition=0,c=1,this.patternOffset=0;break;case 12:f.volume=l.param,f.flags|=Y|ht;break;case 13:this.nextPosition=(n*10+u)*this.channels,this.patternOffset=0,c||(this.nextOrder=this.order+1,this.nextOrder>=this.length&&(this.complete=1,this.nextPosition=-1));break;case 14:switch(n){case 1:u&&(f.finePortaU=u<<2),f.period-=f.finePortaU,f.flags|=he;break;case 2:u&&(f.finePortaD=u<<2),f.period+=f.finePortaD,f.flags|=he;break;case 3:f.glissando=u;break;case 4:f.waveControl=f.waveControl&240|u;break;case 6:u?(f.patternLoop?f.patternLoop--:f.patternLoop=u,f.patternLoop&&(this.nextPosition=f.patternLoopRow)):f.patternLoopRow=this.patternOffset=this.position;break;case 7:f.waveControl=f.waveControl&15|u<<4;break;case 10:u&&(f.fineSlideU=u),f.volume+=f.fineSlideU,f.flags|=Y;break;case 11:u&&(f.fineSlideD=u),f.volume-=f.fineSlideD,f.flags|=Y;break;case 13:f.delay=f.flags,f.flags=0;break;case 14:this.patternDelay=u*this.timer;break;default:break}break;case 15:if(!l.param)break;l.param<32?this.timer=l.param:this.mixer.samplesTick=this.sampleRate*2.5/l.param>>0;break;case 16:this.master=l.param,this.master>64&&(this.master=64),f.flags|=Y;break;case 17:l.param&&(f.volSlideMaster=l.param);break;case 21:if(!f.instrument||!f.instrument.volEnabled)break;for(r=f.instrument,h=l.param,n=r.volData.total,s=0;s<n&&!(h<r.volData.points[s].frame);s++);f.volEnvelope.position=--s,n--,r.volData.flags&yr&&s===r.volData.loopEnd&&(s=f.volEnvelope.position=r.volData.loopStart,h=r.volData.points[s].frame,f.volEnvelope.frame=h),s>=n?(f.volEnvelope.value=r.volData.points[n].value,f.volEnvelope.stopped=1):(f.volEnvelope.stopped=0,f.volEnvelope.frame=h,h>r.volData.points[s].frame&&f.volEnvelope.position++,o=r.volData.points[s],a=r.volData.points[++s],h=a.frame-o.frame,f.volEnvelope.delta=(h?(a.value-o.value<<8)/h>>0:0)||0,f.volEnvelope.fraction=o.value<<8);break;case 24:l.param&&(f.panSlide=l.param);break;case 27:if(n&&(f.retrigx=n),u&&(f.retrigy=u),!l.volume&&f.retrigy){if(e=this.tick+1,e%f.retrigy)break;l.volume>80&&f.retrigx&&this.retrig(f)}break;case 29:l.param&&(f.tremorOn=++n,f.tremorOff=++u+n);break;case 33:n===1?(u&&(f.xtraPortaU=u),f.period-=f.xtraPortaU,f.flags|=he):n===2&&(u&&(f.xtraPortaD=u),f.period+=f.xtraPortaD,f.flags|=he);break;default:break}f=f.next}++this.tick>=this.timer+this.patternDelay&&(this.patternDelay=this.tick=0,this.nextPosition<0&&(this.nextPosition=this.position+this.channels,(this.nextPosition>=this.pattern.size||this.complete)&&(this.nextOrder=this.order+1,this.nextPosition=this.patternOffset,this.nextOrder>=this.length&&(this.nextOrder=this.restart,this.mixer.complete=1))))}},fast:{value:function(){for(var e,o,r,s,c,a=this.voices[0],n;a;)e=a.channel,r=a.flags,a.flags=0,r&St&&(e.index=a.sampleOffset,e.pointer=-1,e.dir=0,e.fraction=0,e.sample=a.sample,e.length=a.sample.length,e.enabled=e.sample.data?1:0,a.playing=a.instrument,a.sampleOffset=0),s=a.playing,o=s.vibratoSpeed?a.autoVibrato():0,n=a.volume+a.volDelta,s.volEnabled?(a.volEnabled&&!a.volEnvelope.stopped&&this.envelope(a,a.volEnvelope,s.volData),n=n*a.volEnvelope.value>>6,r|=Y,a.fadeEnabled&&(a.fadeVolume-=a.fadeDelta,a.fadeVolume<0?(n=0,a.fadeVolume=0,a.fadeEnabled=0,a.volEnvelope.value=0,a.volEnvelope.stopped=1,a.panEnvelope.stopped=1):n=n*a.fadeVolume>>16)):a.keyoff&&(n=0,r|=Y),c=a.panning,s.panEnabled&&(a.panEnabled&&!a.panEnvelope.stopped&&this.envelope(a,a.panEnvelope,s.panData),c=a.panEnvelope.value<<2,r|=Te,c<0?c=0:c>255&&(c=255)),r&Y&&(n<0?n=0:n>64&&(n=64),e.volume=kr[n*this.master>>6],e.lvol=e.volume*e.lpan,e.rvol=e.volume*e.rpan),r&Te&&(e.panning=c,e.lpan=Et[256-c],e.rpan=Et[c],e.lvol=e.volume*e.lpan,e.rvol=e.volume*e.rpan),r&he&&(o+=a.period+a.arpDelta+a.vibDelta,this.linear?e.speed=(548077568*Math.pow(2,(4608-o)/768)/this.sampleRate>>0)/65536:e.speed=(65536*(14317456/o)/this.sampleRate>>0)/65536,e.delta=e.speed>>0,e.speed-=e.delta),a=a.next}},accurate:{value:function(){for(var e,o,r,s,c,a,n,u,d,l=this.voices[0],p;l;){if(e=l.channel,r=l.flags,l.flags=0,r&St&&(e.sample&&(r|=ht,e.mixCounter=220,e.oldSample=null,e.oldPointer=-1,e.enabled&&(e.oldDir=e.dir,e.oldFraction=e.fraction,e.oldSpeed=e.speed,e.oldSample=e.sample,e.oldPointer=e.pointer,e.oldLength=e.length,e.lmixRampD=e.lvol,e.lmixDeltaD=e.lvol/220,e.rmixRampD=e.rvol,e.rmixDeltaD=e.rvol/220)),e.dir=1,e.fraction=0,e.sample=l.sample,e.pointer=l.sampleOffset,e.length=l.sample.length,e.enabled=e.sample.data?1:0,l.playing=l.instrument,l.sampleOffset=0),s=l.playing,o=s.vibratoSpeed?l.autoVibrato():0,p=l.volume+l.volDelta,s.volEnabled?(l.volEnabled&&!l.volEnvelope.stopped&&this.envelope(l,l.volEnvelope,s.volData),p=p*l.volEnvelope.value>>6,r|=Y,l.fadeEnabled&&(l.fadeVolume-=l.fadeDelta,l.fadeVolume<0?(p=0,l.fadeVolume=0,l.fadeEnabled=0,l.volEnvelope.value=0,l.volEnvelope.stopped=1,l.panEnvelope.stopped=1):p=p*l.fadeVolume>>16)):l.keyoff&&(p=0,r|=Y),n=l.panning,s.panEnabled&&(l.panEnabled&&!l.panEnvelope.stopped&&this.envelope(l,l.panEnvelope,s.panData),n=l.panEnvelope.value<<2,r|=Te,n<0?n=0:n>255&&(n=255)),!e.enabled){e.volCounter=0,e.panCounter=0,l=l.next;continue}r&Y&&(p<0?p=0:p>64&&(p=64),p=kr[p*this.master>>6],a=p*Et[256-n],d=p*Et[n],p!==e.volume&&!e.mixCounter?(e.volCounter=r&ht?220:this.mixer.samplesTick,e.lvolDelta=(a-e.lvol)/e.volCounter,e.rvolDelta=(d-e.rvol)/e.volCounter):(e.lvol=a,e.rvol=d),e.volume=p),r&Te&&(c=Et[256-n],u=Et[n],n!==e.panning&&!e.mixCounter&&!e.volCounter?(e.panCounter=this.mixer.samplesTick,e.lpanDelta=(c-e.lpan)/e.panCounter,e.rpanDelta=(u-e.rpan)/e.panCounter):(e.lpan=c,e.rpan=u),e.panning=n),r&he&&(o+=l.period+l.arpDelta+l.vibDelta,this.linear?e.speed=(548077568*Math.pow(2,(4608-o)/768)/this.sampleRate>>0)/65536:e.speed=(65536*(14317456/o)/this.sampleRate>>0)/65536),e.mixCounter&&(e.lmixRampU=0,e.lmixDeltaU=e.lvol/220,e.rmixRampU=0,e.rmixDeltaU=e.rvol/220),l=l.next}}},envelope:{value:function(e,o,r){var s=o.position,c=r.points[s],a;if(o.frame===c.frame){if(r.flags&yr&&s===r.loopEnd&&(s=o.position=r.loopStart,c=r.points[s],o.frame=c.frame),s===r.total-1){o.value=c.value,o.stopped=1;return}if(r.flags&Va&&s===r.sustain&&!e.fadeEnabled){o.value=c.value;return}o.position++,a=r.points[o.position],o.delta=(a.value-c.value<<8)/(a.frame-c.frame)>>0||0,o.fraction=c.value<<8}else o.fraction+=o.delta;o.value=o.fraction>>8,o.frame++}},amiga:{value:function(e,o){var r=0,s=wo[++e];return o<0?r=(wo[--e]-s)/64:o>0&&(r=(s-wo[++e])/64),s-r*o>>0}},retrig:{value:function(e){switch(e.retrigx){case 1:e.volume--;break;case 2:e.volume++;break;case 3:e.volume-=4;break;case 4:e.volume-=8;break;case 5:e.volume-=16;break;case 6:e.volume=(e.volume<<1)/3;break;case 7:e.volume>>=1;break;case 8:e.volume=e.sample.volume;break;case 9:e.volume++;break;case 10:e.volume+=2;break;case 11:e.volume+=4;break;case 12:e.volume+=8;break;case 13:e.volume+=16;break;case 14:e.volume=e.volume*3>>1;break;case 15:e.volume<<=1;break;default:break}e.volume<0?e.volume=0:e.volume>64&&(e.volume=64),e.flags|=Y}}}),Object.seal(i)}var he=1,Y=2,Te=4,St=8,Ga=15,ht=32,xr=1,Va=2,yr=4,Wa=0,Ya=118,yo=97,Ka=[0,-2,-3,-5,-6,-8,-9,-11,-12,-14,-16,-17,-19,-20,-22,-23,-24,-26,-27,-29,-30,-32,-33,-34,-36,-37,-38,-39,-41,-42,-43,-44,-45,-46,-47,-48,-49,-50,-51,-52,-53,-54,-55,-56,-56,-57,-58,-59,-59,-60,-60,-61,-61,-62,-62,-62,-63,-63,-63,-64,-64,-64,-64,-64,-64,-64,-64,-64,-64,-64,-63,-63,-63,-62,-62,-62,-61,-61,-60,-60,-59,-59,-58,-57,-56,-56,-55,-54,-53,-52,-51,-50,-49,-48,-47,-46,-45,-44,-43,-42,-41,-39,-38,-37,-36,-34,-33,-32,-30,-29,-27,-26,-24,-23,-22,-20,-19,-17,-16,-14,-12,-11,-9,-8,-6,-5,-3,-2,0,2,3,5,6,8,9,11,12,14,16,17,19,20,22,23,24,26,27,29,30,32,33,34,36,37,38,39,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,56,57,58,59,59,60,60,61,61,62,62,62,63,63,63,64,64,64,64,64,64,64,64,64,64,64,63,63,63,62,62,62,61,61,60,60,59,59,58,57,56,56,55,54,53,52,51,50,49,48,47,46,45,44,43,42,41,39,38,37,36,34,33,32,30,29,27,26,24,23,22,20,19,17,16,14,12,11,9,8,6,5,3,2],wr=[0,24,49,74,97,120,141,161,180,197,212,224,235,244,250,253,255,253,250,244,235,224,212,197,180,161,141,120,97,74,49,24],Et=[0,.04417,.062489,.076523,.088371,.098821,.108239,.116927,.124977,.132572,.139741,.146576,.153077,.159335,.16535,.171152,.176772,.18221,.187496,.19263,.197643,.202503,.207273,.211951,.216477,.220943,.225348,.229631,.233854,.237985,.242056,.246066,.249985,.253873,.25767,.261437,.265144,.268819,.272404,.275989,.279482,.282976,.286409,.289781,.293153,.296464,.299714,.302965,.306185,.309344,.312473,.315602,.318671,.321708,.324746,.327754,.3307,.333647,.336563,.339449,.342305,.345161,.347986,.350781,.353545,.356279,.359013,.361717,.364421,.367094,.369737,.37238,.374992,.377574,.380157,.382708,.38526,.387782,.390303,.392794,.395285,.397746,.400176,.402606,.405037,.407437,.409836,.412206,.414576,.416915,.419254,.421563,.423841,.42618,.428458,.430737,.432985,.435263,.437481,.439729,.441916,.444134,.446321,.448508,.450665,.452852,.455009,.457136,.459262,.461389,.463485,.465611,.467708,.469773,.471839,.473935,.47597,.478036,.480072,.482077,.484112,.486117,.488122,.490127,.492101,.494106,.496051,.498025,.5,.501944,.503888,.505802,.507746,.50966,.511574,.513488,.515371,.517255,.519138,.521022,.522905,.524758,.526611,.528465,.530318,.53214,.533993,.535816,.537639,.539462,.541254,.543046,.544839,.546631,.548423,.550216,.551978,.553739,.555501,.557263,.558995,.560757,.562489,.56422,.565952,.567683,.569384,.571116,.572817,.574518,.57622,.57789,.579592,.581262,.582964,.584634,.586305,.587946,.589617,.591257,.592928,.594568,.596209,.597849,.599459,.6011,.60271,.60435,.60596,.60757,.60915,.61076,.61237,.61395,.61556,.617139,.618719,.620268,.621848,.623428,.624977,.626557,.628106,.629655,.631205,.632754,.634303,.635822,.637372,.63889,.64044,.641959,.643478,.644966,.646485,.648004,.649523,.651012,.6525,.653989,.655477,.656966,.658454,.659943,.661431,.66289,.664378,.665836,.667294,.668783,.670241,.671699,.673127,.674585,.676043,.677471,.678929,.680357,.681785,.683213,.684641,.686068,.687496,.688894,.690321,.691749,.693147,.694574,.695972,.697369,.698767,.700164,.701561,.702928,.704326,.705723,.70711],kr=[0,.005863,.013701,.021569,.029406,.037244,.045082,.052919,.060757,.068625,.076463,.0843,.092138,.099976,.107844,.115681,.123519,.131357,.139194,.147032,.1549,.162738,.170575,.178413,.186251,.194119,.201956,.209794,.217632,.225469,.233307,.241175,.249013,.25685,.264688,.272526,.280394,.288231,.296069,.303907,.311744,.319582,.32745,.335288,.343125,.350963,.3588,.366669,.374506,.382344,.390182,.398019,.405857,.413725,.421563,.4294,.437238,.445076,.452944,.460781,.468619,.476457,.484294,.492132,.5],wo=[29024,27392,25856,24384,23040,21696,20480,19328,18240,17216,16256,15360,14512,13696,12928,12192,11520,10848,10240,9664,9120,8608,8128,7680,7256,6848,6464,6096,5760,5424,5120,4832,4560,4304,4064,3840,3628,3424,3232,3048,2880,2712,2560,2416,2280,2152,2032,1920,1814,1712,1616,1524,1440,1356,1280,1208,1140,1076,1016,960,907,856,808,762,720,678,640,604,570,538,508,480,453,428,404,381,360,339,320,302,285,269,254,240,227,214,202,190,180,169,160,151,142,134,127,120,113,107,101,95,90,85,80,75,71,67,63,60,57,53,50,48,45,42,40,38,36,34,32,30,28],Sr=Xa;function Vi(t){return Object.create(null,{index:{value:t,writable:!0},next:{value:null,writable:!0},channel:{value:null,writable:!0},sample:{value:null,writable:!0},enabled:{value:0,writable:!0},period:{value:0,writable:!0},effect:{value:0,writable:!0},param:{value:0,writable:!0},volume:{value:0,writable:!0},portaDir:{value:0,writable:!0},portaPeriod:{value:0,writable:!0},portaSpeed:{value:0,writable:!0},vibratoPos:{value:0,writable:!0},vibratoSpeed:{value:0,writable:!0},initialize:{value:function(){this.channel=null,this.sample=null,this.enabled=0,this.period=0,this.effect=0,this.param=0,this.volume=0,this.portaDir=0,this.portaPeriod=0,this.portaSpeed=0,this.vibratoPos=0,this.vibratoSpeed=0}}})}function Ja(t){var i=Hi(t);return Object.defineProperties(i,{id:{value:"MKPlayer"},track:{value:null,writable:!0},patterns:{value:[],writable:!0},samples:{value:[],writable:!0},length:{value:0,writable:!0},restart:{value:0,writable:!0},voices:{value:[],writable:!0},trackPos:{value:0,writable:!0},patternPos:{value:0,writable:!0},jumpFlag:{value:0,writable:!0},vibratoDepth:{value:0,writable:!0},restartSave:{value:0,writable:!0},force:{set:function(e){e<ko?e=ko:e>pt&&(e=pt),this.version=e,e===pt?this.vibratoDepth=6:this.vibratoDepth=7,e===Er?(this.restartSave=this.restart,this.restart=0):(this.restart=this.restartSave,this.restartSave=0)}},initialize:{value:function(){var e=this.voices[0];for(this.reset(),this.force=this.version,this.speed=6,this.trackPos=0,this.patternPos=0,this.jumpFlag=0;e;)e.initialize(),e.channel=this.mixer.channels[e.index],e.sample=this.samples[0],e=e.next}},loader:{value:function(e){var o=0,r,s,c,a,n,u=0,d;if(!(e.length<2106)&&(e.position=1080,s=e.readString(4),!(s!=="M.K."&&s!=="FLT4"))){for(e.position=0,this.title=e.readString(20),this.version=ko,e.position+=22,r=1;r<32;++r){if(d=e.readUshort(),!d){this.samples[r]=null,e.position+=28;continue}n=Zt(),e.position-=24,n.name=e.readString(22),n.length=d<<1,e.position+=3,n.volume=e.readUbyte(),n.loop=e.readUshort()<<1,n.repeat=e.readUshort()<<1,e.position+=22,n.pointer=u,u+=n.length,this.samples[r]=n,n.length>32768&&(this.version=Za)}for(e.position=950,this.length=e.readUbyte(),d=e.readUbyte(),this.restart=d<this.length?d:0,r=0;r<128;++r)d=e.readUbyte()<<8,this.track[r]=d,d>o&&(o=d);for(e.position=1084,o+=256,this.patterns.length=o,r=0;r<o;++r)if(a=$i(),d=e.readUint(),a.note=d>>16&4095,a.effect=d>>8&15,a.sample=d>>24&240|d>>12&15,a.param=d&255,this.patterns[r]=a,(a.sample>31||!this.samples[a.sample])&&(a.sample=0),(a.effect===3||a.effect===4)&&(this.version=Er),(a.effect===5||a.effect===6)&&(this.version=pt),a.effect>6&&a.effect<10){this.version=0;return}for(this.mixer.store(e,u),r=1;r<32;++r)if(n=this.samples[r],!!n)for(n.name.indexOf("2.0")>-1&&(this.version=pt),n.loop?(n.loopPtr=n.pointer+n.loop,n.length=n.loop+n.repeat):(n.loopPtr=this.mixer.memory.length,n.repeat=2),u=n.pointer+4,c=n.pointer;c<u;++c)this.mixer.memory[c]=0;n=Zt(),n.pointer=n.loopPtr=this.mixer.memory.length,n.length=n.repeat=2,this.samples[0]=n,this.version<pt&&this.restart!==127&&(this.version=Qa)}}},process:{value:function(){var e,o,r,s,c,a,n,u,d,l=this.voices[0];if(this.tick)for(;l;){if(e=l.channel,!l.effect&&!l.param){e.period=l.period,l=l.next;continue}switch(l.effect){case 0:if(d=this.tick%3,!d){e.period=l.period,l=l.next;continue}for(d===1?d=l.param>>4:d=l.param&15,c=l.period&4095,r=37-d,o=0;o<r;++o)if(c>=Cr[o]){e.period=Cr[o+d];break}break;case 1:l.period-=l.param,l.period<113&&(l.period=113),e.period=l.period;break;case 2:l.period+=l.param,l.period>856&&(l.period=856),e.period=l.period;break;case 3:case 5:l.effect===5?u=1:l.param&&(l.portaSpeed=l.param,l.param=0),l.portaPeriod&&(l.portaDir?(l.period-=l.portaSpeed,l.period<=l.portaPeriod&&(l.period=l.portaPeriod,l.portaPeriod=0)):(l.period+=l.portaSpeed,l.period>=l.portaPeriod&&(l.period=l.portaPeriod,l.portaPeriod=0))),e.period=l.period;break;case 4:case 6:l.effect===6?u=1:l.param&&(l.vibratoSpeed=l.param),d=l.vibratoPos>>2&31,d=(l.vibratoSpeed&15)*en[d]>>this.vibratoDepth,l.vibratoPos>127?e.period=l.period-d:e.period=l.period+d,d=l.vibratoSpeed>>2&60,l.vibratoPos=l.vibratoPos+d&255;break;case 10:u=1;break;default:break}u&&(d=l.param>>4,u=0,d?l.volume+=d:l.volume-=l.param&15,l.volume<0?l.volume=0:l.volume>64&&(l.volume=64),e.volume=l.volume),l=l.next}else for(s=this.track[this.trackPos]+this.patternPos;l;){switch(e=l.channel,l.enabled=0,a=this.patterns[s+l.index],l.effect=a.effect,l.param=a.param,a.sample?(n=l.sample=this.samples[a.sample],e.volume=l.volume=n.volume):n=l.sample,a.note&&(l.effect===3||l.effect===5?a.note<l.period?(l.portaDir=1,l.portaPeriod=a.note):a.note>l.period?(l.portaDir=0,l.portaPeriod=a.note):l.portaPeriod=0:(l.enabled=1,l.vibratoPos=0,e.enabled=0,e.pointer=n.pointer,e.length=n.length,e.period=l.period=a.note)),l.effect){case 11:this.trackPos=l.param-1,this.jumpFlag^=1;break;case 12:e.volume=l.param,this.version===pt&&(l.volume=l.param);break;case 13:this.jumpFlag^=1;break;case 14:this.mixer.filter.active=l.param^1;break;case 15:d=l.param,d<1?d=1:d>31&&(d=31),this.speed=d,this.tick=0;break;default:break}l.enabled&&(e.enabled=1),e.pointer=n.loopPtr,e.length=n.repeat,l=l.next}++this.tick===this.speed&&(this.tick=0,this.patternPos+=4,(this.patternPos===256||this.jumpFlag)&&(this.patternPos=this.jumpFlag=0,this.trackPos=++this.trackPos&127,this.trackPos===this.length&&(this.trackPos=this.restart,this.mixer.complete=1)))}}}),i.voices[0]=Vi(0),i.voices[0].next=i.voices[1]=Vi(1),i.voices[1].next=i.voices[2]=Vi(2),i.voices[2].next=i.voices[3]=Vi(3),i.track=new Uint16Array(128),Object.seal(i)}var ko=1,Za=2,Er=3,Qa=4,pt=5,Cr=[856,808,762,720,678,640,604,570,538,508,480,453,428,404,381,360,339,320,302,285,269,254,240,226,214,202,190,180,170,160,151,143,135,127,120,113,0],en=[0,24,49,74,97,120,141,161,180,197,212,224,235,244,250,253,255,253,250,244,235,224,212,197,180,161,141,120,97,74,49,24],Pr=Ja;function Wi(t){return Object.create(null,{index:{value:t,writable:!0},next:{value:null,writable:!0},channel:{value:null,writable:!0},sample:{value:null,writable:!0},enabled:{value:0,writable:!0},loopCtr:{value:0,writable:!0},loopPos:{value:0,writable:!0},step:{value:0,writable:!0},period:{value:0,writable:!0},effect:{value:0,writable:!0},param:{value:0,writable:!0},volume:{value:0,writable:!0},pointer:{value:0,writable:!0},length:{value:0,writable:!0},loopPtr:{value:0,writable:!0},repeat:{value:0,writable:!0},finetune:{value:0,writable:!0},offset:{value:0,writable:!0},portaDir:{value:0,writable:!0},portaPeriod:{value:0,writable:!0},portaSpeed:{value:0,writable:!0},glissando:{value:0,writable:!0},tremoloParam:{value:0,writable:!0},tremoloPos:{value:0,writable:!0},tremoloWave:{value:0,writable:!0},vibratoParam:{value:0,writable:!0},vibratoPos:{value:0,writable:!0},vibratoWave:{value:0,writable:!0},funkPos:{value:0,writable:!0},funkSpeed:{value:0,writable:!0},funkWave:{value:0,writable:!0},initialize:{value:function(){this.channel=null,this.sample=null,this.enabled=0,this.loopCtr=0,this.loopPos=0,this.step=0,this.period=0,this.effect=0,this.param=0,this.volume=0,this.pointer=0,this.length=0,this.loopPtr=0,this.repeat=0,this.finetune=0,this.offset=0,this.portaDir=0,this.portaPeriod=0,this.portaSpeed=0,this.glissando=0,this.tremoloParam=0,this.tremoloPos=0,this.tremoloWave=0,this.vibratoParam=0,this.vibratoPos=0,this.vibratoWave=0,this.funkPos=0,this.funkSpeed=0,this.funkWave=0}}})}function tn(){var t=$i();return Object.defineProperties(t,{step:{value:0,writable:!0}}),Object.seal(t)}function Mr(){var t=Zt();return Object.defineProperties(t,{finetune:{value:0,writable:!0},realLen:{value:0,writable:!0}}),Object.seal(t)}function on(t){var i=Hi(t);return Object.defineProperties(i,{id:{value:"PTPlayer"},track:{value:null,writable:!0},patterns:{value:[],writable:!0},samples:{value:[],writable:!0},length:{value:0,writable:!0},voices:{value:[],writable:!0},trackPos:{value:0,writable:!0},patternPos:{value:0,writable:!0},patternBreak:{value:0,writable:!0},patternDelay:{value:0,writable:!0},breakPos:{value:0,writable:!0},jumpFlag:{value:0,writable:!0},vibratoDepth:{value:0,writable:!0},force:{set:function(e){e<Yi?e=Yi:e>So&&(e=So),this.version=e,e<Tr?this.vibratoDepth=6:this.vibratoDepth=7}},initialize:{value:function(){var e=this.voices[0];for(this.tempo=125,this.speed=6,this.trackPos=0,this.patternPos=0,this.patternBreak=0,this.patternDelay=0,this.breakPos=0,this.jumpFlag=0,this.reset(),this.force=this.version;e;)e.initialize(),e.channel=this.mixer.channels[e.index],e.sample=this.samples[0],e=e.next}},loader:{value:function(e){var o=0,r,s,c,a,n,u=0,d;if(!(e.length<2106)&&(e.position=1080,s=e.readString(4),!(s!=="M.K."&&s!=="M!K!"))){for(e.position=0,this.title=e.readString(20),this.version=Yi,e.position+=22,r=1;r<32;++r){if(d=e.readUshort(),!d){this.samples[r]=null,e.position+=28;continue}n=Mr(),e.position-=24,n.name=e.readString(22),n.length=n.realLen=d<<1,e.position+=2,n.finetune=e.readUbyte()*37,n.volume=e.readUbyte(),n.loop=e.readUshort()<<1,n.repeat=e.readUshort()<<1,e.position+=22,n.pointer=u,u+=n.length,this.samples[r]=n}for(e.position=950,this.length=e.readUbyte(),e.position++,r=0;r<128;++r)d=e.readUbyte()<<8,this.track[r]=d,d>o&&(o=d);for(e.position=1084,o+=256,this.patterns.length=o,r=0;r<o;++r)a=tn(),a.step=d=e.readUint(),a.note=d>>16&4095,a.effect=d>>8&15,a.sample=d>>24&240|d>>12&15,a.param=d&255,this.patterns[r]=a,(a.sample>31||!this.samples[a.sample])&&(a.sample=0),a.effect===15&&a.param>31&&(this.version=Tr),a.effect===8&&(this.version=So);for(this.mixer.store(e,u),r=1;r<32;++r)if(n=this.samples[r],!!n)for(n.loop||n.repeat>4?(n.loopPtr=n.pointer+n.loop,n.length=n.loop+n.repeat):(n.loopPtr=this.mixer.memory.length,n.repeat=2),u=n.pointer+2,c=n.pointer;c<u;++c)this.mixer.memory[c]=0;n=Mr(),n.pointer=n.loopPtr=this.mixer.memory.length,n.length=n.repeat=2,this.samples[0]=n}}},process:{value:function(){var e,o,r,s,c,a,n=this.voices[0];if(this.tick)this.effects();else if(this.patternDelay)this.effects();else{for(r=this.track[this.trackPos]+this.patternPos;n;){if(e=n.channel,n.enabled=0,n.step||(e.period=n.period),s=this.patterns[r+n.index],n.step=s.step,n.effect=s.effect,n.param=s.param,s.sample?(c=n.sample=this.samples[s.sample],n.pointer=c.pointer,n.length=c.length,n.loopPtr=n.funkWave=c.loopPtr,n.repeat=c.repeat,n.finetune=c.finetune,e.volume=n.volume=c.volume):c=n.sample,s.note)if((n.step&4080)===3664)n.finetune=(n.param&15)*37;else if(n.effect===3||n.effect===5)if(s.note===n.period)n.portaPeriod=0;else{for(o=n.finetune,a=o+37;o<a&&!(s.note>=at[o]);++o);o===a&&a--,o>0&&(a=n.finetune/37>>0&8,a&&o--),n.portaPeriod=at[o],n.portaDir=s.note>n.portaPeriod?0:1}else n.effect===9&&this.moreEffects(n);else{this.moreEffects(n),n=n.next;continue}for(o=0;o<37&&!(s.note>=at[o]);++o);if(n.period=at[n.finetune+o],(n.step&4080)===3792){n.funkSpeed&&this.updateFunk(n),this.extended(n),n=n.next;continue}n.vibratoWave<4&&(n.vibratoPos=0),n.tremoloWave<4&&(n.tremoloPos=0),e.enabled=0,e.pointer=n.pointer,e.length=n.length,e.period=n.period,n.enabled=1,this.moreEffects(n),n=n.next}for(n=this.voices[0];n;)e=n.channel,n.enabled&&(e.enabled=1),e.pointer=n.loopPtr,e.length=n.repeat,n=n.next}++this.tick===this.speed&&(this.tick=0,this.patternPos+=4,this.patternDelay&&--this.patternDelay&&(this.patternPos-=4),this.patternBreak&&(this.patternBreak=0,this.patternPos=this.breakPos,this.breakPos=0),(this.patternPos===256||this.jumpFlag)&&(this.patternPos=this.breakPos,this.breakPos=0,this.jumpFlag=0,++this.trackPos===this.length&&(this.trackPos=0,this.mixer.complete=1)))}},effects:{value:function(){for(var e,o,r,s,c,a=this.voices[0],n;a;){if(e=a.channel,a.funkSpeed&&this.updateFunk(a),(a.step&4095)===0){e.period=a.period,a=a.next;continue}switch(a.effect){case 0:if(c=this.tick%3,!c){e.period=a.period,a=a.next;continue}for(c===1?c=a.param>>4:c=a.param&15,o=a.finetune,r=o+37;o<r;++o)if(a.period>=at[o]){e.period=at[o+c];break}break;case 1:a.period-=a.param,a.period<113&&(a.period=113),e.period=a.period;break;case 2:a.period+=a.param,a.period>856&&(a.period=856),e.period=a.period;break;case 3:case 5:if(a.effect===5?s=1:(a.portaSpeed=a.param,a.param=0),a.portaPeriod)if(a.portaDir?(a.period-=a.portaSpeed,a.period<=a.portaPeriod&&(a.period=a.portaPeriod,a.portaPeriod=0)):(a.period+=a.portaSpeed,a.period>=a.portaPeriod&&(a.period=a.portaPeriod,a.portaPeriod=0)),a.glissando){for(o=a.finetune,c=o+37;o<c&&!(a.period>=at[o]);++o);o===c&&o--,e.period=at[o]}else e.period=a.period;break;case 4:case 6:a.effect===6?s=1:a.param&&(c=a.param&15,c&&(a.vibratoParam=a.vibratoParam&240|c),c=a.param&240,c&&(a.vibratoParam=a.vibratoParam&15|c)),r=a.vibratoPos>>2&31,n=a.vibratoWave&3,n?(c=255,r<<=3,n===1&&(a.vibratoPos>127?c-=r:c=r)):c=Fr[r],c=(a.vibratoParam&15)*c>>this.vibratoDepth,a.vibratoPos>127?e.period=a.period-c:e.period=a.period+c,c=a.vibratoParam>>2&60,a.vibratoPos=a.vibratoPos+c&255;break;case 7:e.period=a.period,a.param&&(c=a.param&15,c&&(a.tremoloParam=a.tremoloParam&240|c),c=a.param&240,c&&(a.tremoloParam=a.tremoloParam&15|c)),r=a.tremoloPos>>2&31,n=a.tremoloWave&3,n?(c=255,r<<=3,n===1&&(a.tremoloPos>127?c-=r:c=r)):c=Fr[r],c=(a.tremoloParam&15)*c>>6,a.tremoloPos>127?e.volume=a.volume-c:e.volume=a.volume+c,c=a.tremoloParam>>2&60,a.tremoloPos=a.tremoloPos+c&255;break;case 10:s=1;break;case 14:this.extended(a);break;default:break}s&&(s=0,c=a.param>>4,c?a.volume+=c:a.volume-=a.param&15,a.volume<0?a.volume=0:a.volume>64&&(a.volume=64),e.volume=a.volume),a=a.next}}},moreEffects:{value:function(e){var o=e.channel,r;switch(e.funkSpeed&&this.updateFunk(e),e.effect){case 9:e.param&&(e.offset=e.param),r=e.offset<<8,r>=e.length?e.length=2:(e.pointer+=r,e.length-=r);break;case 11:this.trackPos=e.param-1,this.breakPos=0,this.jumpFlag=1;break;case 12:e.volume=e.param,e.volume>64&&(e.volume=64),o.volume=e.volume;break;case 13:this.breakPos=(e.param>>4)*10+(e.param&15),this.breakPos>63?this.breakPos=0:this.breakPos<<=2,this.jumpFlag=1;break;case 14:this.extended(e);break;case 15:if(!e.param)return;e.param<32?this.speed=e.param:this.mixer.samplesTick=this.sampleRate*2.5/e.param>>0,this.tick=0;break;default:break}}},extended:{value:function(e){var o=e.channel,r=e.param>>4,s,c,a,n=e.param&15;switch(r){case 0:this.mixer.filter.active=n;break;case 1:if(this.tick)return;e.period-=n,e.period<113&&(e.period=113),o.period=e.period;break;case 2:if(this.tick)return;e.period+=n,e.period>856&&(e.period=856),o.period=e.period;break;case 3:e.glissando=n;break;case 4:e.vibratoWave=n;break;case 5:e.finetune=n*37;break;case 6:if(this.tick)return;n?(e.loopCtr?e.loopCtr--:e.loopCtr=n,e.loopCtr&&(this.breakPos=e.loopPos<<2,this.patternBreak=1)):e.loopPos=this.patternPos>>2;break;case 7:e.tremoloWave=n;break;case 8:for(c=e.length-2,a=this.mixer.memory,s=e.loopPtr;s<c;)a[s]=(a[s]+a[++s])*.5;a[++s]=(a[s]+a[0])*.5;break;case 9:if(this.tick||!n||!e.period||this.tick%n)return;o.enabled=0,o.pointer=e.pointer,o.length=e.length,o.delay=30,o.enabled=1,o.pointer=e.loopPtr,o.length=e.repeat,o.period=e.period;break;case 10:if(this.tick)return;e.volume+=n,e.volume>64&&(e.volume=64),o.volume=e.volume;break;case 11:if(this.tick)return;e.volume-=n,e.volume<0&&(e.volume=0),o.volume=e.volume;break;case 12:this.tick===n&&(o.volume=e.volume=0);break;case 13:if(this.tick!==n||!e.period)return;o.enabled=0,o.pointer=e.pointer,o.length=e.length,o.delay=30,o.enabled=1,o.pointer=e.loopPtr,o.length=e.repeat,o.period=e.period;break;case 14:if(this.tick||this.patternDelay)return;this.patternDelay=++n;break;case 15:if(this.tick)return;e.funkSpeed=n,n&&this.updateFunk(e);break;default:break}}},updateFunk:{value:function(e){var o=e.channel,r,s,c=rn[e.funkSpeed];e.funkPos+=c,!(e.funkPos<128)&&(e.funkPos=0,this.version===Yi?(r=e.pointer+e.sample.realLen-e.repeat,s=e.funkWave+e.repeat,s>r&&(s=e.loopPtr,o.length=e.repeat),o.pointer=e.funkWave=s):(r=e.loopPtr+e.repeat,s=e.funkWave+1,s>=r&&(s=e.loopPtr),this.mixer.memory[s]=-this.mixer.memory[s]))}}}),i.voices[0]=Wi(0),i.voices[0].next=i.voices[1]=Wi(1),i.voices[1].next=i.voices[2]=Wi(2),i.voices[2].next=i.voices[3]=Wi(3),i.track=new Uint16Array(128),Object.seal(i)}var Yi=1,Tr=2,So=3,at=[856,808,762,720,678,640,604,570,538,508,480,453,428,404,381,360,339,320,302,285,269,254,240,226,214,202,190,180,170,160,151,143,135,127,120,113,0,850,802,757,715,674,637,601,567,535,505,477,450,425,401,379,357,337,318,300,284,268,253,239,225,213,201,189,179,169,159,150,142,134,126,119,113,0,844,796,752,709,670,632,597,563,532,502,474,447,422,398,376,355,335,316,298,282,266,251,237,224,211,199,188,177,167,158,149,141,133,125,118,112,0,838,791,746,704,665,628,592,559,528,498,470,444,419,395,373,352,332,314,296,280,264,249,235,222,209,198,187,176,166,157,148,140,132,125,118,111,0,832,785,741,699,660,623,588,555,524,495,467,441,416,392,370,350,330,312,294,278,262,247,233,220,208,196,185,175,165,156,147,139,131,124,117,110,0,826,779,736,694,655,619,584,551,520,491,463,437,413,390,368,347,328,309,292,276,260,245,232,219,206,195,184,174,164,155,146,138,130,123,116,109,0,820,774,730,689,651,614,580,547,516,487,460,434,410,387,365,345,325,307,290,274,258,244,230,217,205,193,183,172,163,154,145,137,129,122,115,109,0,814,768,725,684,646,610,575,543,513,484,457,431,407,384,363,342,323,305,288,272,256,242,228,216,204,192,181,171,161,152,144,136,128,121,114,108,0,907,856,808,762,720,678,640,604,570,538,508,480,453,428,404,381,360,339,320,302,285,269,254,240,226,214,202,190,180,170,160,151,143,135,127,120,0,900,850,802,757,715,675,636,601,567,535,505,477,450,425,401,379,357,337,318,300,284,268,253,238,225,212,200,189,179,169,159,150,142,134,126,119,0,894,844,796,752,709,670,632,597,563,532,502,474,447,422,398,376,355,335,316,298,282,266,251,237,223,211,199,188,177,167,158,149,141,133,125,118,0,887,838,791,746,704,665,628,592,559,528,498,470,444,419,395,373,352,332,314,296,280,264,249,235,222,209,198,187,176,166,157,148,140,132,125,118,0,881,832,785,741,699,660,623,588,555,524,494,467,441,416,392,370,350,330,312,294,278,262,247,233,220,208,196,185,175,165,156,147,139,131,123,117,0,875,826,779,736,694,655,619,584,551,520,491,463,437,413,390,368,347,328,309,292,276,260,245,232,219,206,195,184,174,164,155,146,138,130,123,116,0,868,820,774,730,689,651,614,580,547,516,487,460,434,410,387,365,345,325,307,290,274,258,244,230,217,205,193,183,172,163,154,145,137,129,122,115,0,862,814,768,725,684,646,610,575,543,513,484,457,431,407,384,363,342,323,305,288,272,256,242,228,216,203,192,181,171,161,152,144,136,128,121,114,0],Fr=[0,24,49,74,97,120,141,161,180,197,212,224,235,244,250,253,255,253,250,244,235,224,212,197,180,161,141,120,97,74,49,24],rn=[0,5,6,7,8,10,11,13,16,19,22,26,32,43,64,128],_r=on;function an(){var t=Object.create(null,{player:{value:null,writable:!0},index:{value:0,writable:!0},amiga:{value:null,writable:!0},mixer:{value:null,writable:!0},tracker:{get:function(){return this.player?Ar[this.index+this.player.version]:Ar[0]}},load:{value:function(i){var e,o;if(i.view||(i=bo(i)),i.endian=1,i.position=0,i.readUint()===67324752&&window.neoart.Unzip,!i)return null;if(this.player&&this.player.id!=="STPlayer"&&(this.player.load(i),this.player.version))return this.player;if(i.length>336&&(i.position=38,e=i.readString(20),(e==="FastTracker v2.00   "||e==="FastTracker v 2.00  "||e==="Sk@le Tracker"||e==="MadTracker 2.0"||e==="MilkyTracker        "||e==="DigiBooster Pro 2.18"||e.indexOf("OpenMPT")!==-1)&&(this.player=Sr(this.mixer),this.player.load(i),this.player.version)))return this.index=pn,this.player;if(i.endian=0,i.length>2105){if(i.position=1080,e=i.readString(4),e==="M.K."||e==="FLT4"){if(this.player=Pr(this.amiga),this.player.load(i),this.player.version)return this.index=sn,this.player}else if(e==="FEST"&&(this.player=window.neoart.HMPlayer(this.amiga),this.player.load(i),this.player.version))return this.index=cn,this.player}return i.length>2105&&(i.position=1080,e=i.readString(4),(e==="M.K."||e==="M!K!")&&(this.player=_r(this.amiga),this.player.load(i),this.player.version))?(this.index=ln,this.player):i.length>5220&&(this.player=window.neoart.S1Player(this.amiga),this.player.load(i),this.player.version)?(this.index=fn,this.player):(i.position=0,o=i.readUshort(),i.position=0,e=i.readString(4),(e==="COSO"||o===24576||o===24578||o===24590||o===24598)&&(this.player=window.neoart.JHPlayer(this.amiga),this.player.load(i),this.player.version)?(this.index=dn,this.player):(i.position=0,o=i.readUshort(),this.player=window.neoart.DWPlayer(this.amiga),this.player.load(i),this.player.version?(this.index=un,this.player):(i.position=0,o=i.readUshort(),o===24576&&(this.player=window.neoart.RHPlayer(this.amiga),this.player.load(i),this.player.version)?(this.index=hn,this.player):i.length>1625&&(this.player=window.neoart.STPlayer(this.amiga),this.player.load(i),this.player.version)?(this.index=nn,this.player):(i.clear(),this.index=0,this.player=null))))}}});return t.amiga=vo(),Object.seal(t)}var nn=0,sn=4,ln=9,cn=12,fn=26,un=28,dn=30,hn=32,pn=33,Ar=["Unknown Format","Ultimate SoundTracker","D.O.C. SoundTracker 9","Master SoundTracker","D.O.C. SoundTracker 2.0/2.2","SoundTracker 2.3","SoundTracker 2.4","NoiseTracker 1.0","NoiseTracker 1.1","NoiseTracker 2.0","ProTracker 1.0","ProTracker 1.1/2.1","ProTracker 1.2/2.0","His Master's NoiseTracker","SoundFX 1.0/1.7","SoundFX 1.8","SoundFX 1.945","SoundFX 1.994/2.0","BP SoundMon V1","BP SoundMon V2","BP SoundMon V3","Delta Music 1.0","Delta Music 2.0","Digital Mugician","Digital Mugician 7 Voices","Future Composer 1.0/1.3","Future Composer 1.4","SidMon 1.0","SidMon 2.0","David Whittaker","FredEd","Jochen Hippel","Jochen Hippel COSO","Rob Hubbard","FastTracker II","Sk@leTracker","MadTracker 2.0","MilkyTracker","DigiBooster Pro 2.18","OpenMPT"],mn=an(),Lr=mn;var Ki=class{constructor(i={}){this.baseRawUrl="https://raw.githubusercontent.com/michioxd/keygen-music/master/",this.indexUrl=this.baseRawUrl+"index.json",this.trackList=[],this.history=[],this.maxHistory=50,this.historyCursor=-1,this.currentPlayer=null,this.isPlaying=!1,this.pollInterval=null,this._opId=0,this.onTrackChange=i.onTrackChange||(()=>{}),this.onError=i.onError||(()=>{}),this.hasFetchedIndex=!1,this.currentTrack=null}async init(){if(!this.hasFetchedIndex)try{let i=await fetch(this.indexUrl);if(!i.ok)throw new Error("Network response was not ok");let e=await i.json(),o=["xm","mod","s3m","it"];this.trackList=e.filter(r=>r.fileExtension&&o.includes(r.fileExtension.toLowerCase())),this.hasFetchedIndex=!0}catch(i){throw console.warn("[Jukebox] Offline or failed to fetch track index:",i.message),this.trackList=[],this.onError("NO INTERNET OR BLOCKED ... TRY AGAIN?"),i}}async playNext(i=null){this.stop();let e=++this._opId;try{if(!this.hasFetchedIndex&&(await this.init(),e!==this._opId))return;if(this.trackList.length===0){console.warn("[Jukebox] Track list is empty \u2014 no tracks to play.");return}let o=null;if(i&&typeof i=="object"){let{title:r,trackTitle:s,artist:c}=i,a=this.trackList.filter(n=>{let u=!c||n.artist&&n.artist.toLowerCase()===c.toLowerCase(),d=!r||n.title&&n.title.toLowerCase()===r.toLowerCase(),l=!s||n.trackTitle&&n.trackTitle.toLowerCase()===s.toLowerCase();return u&&d&&l});a.length===0?console.warn("[Jukebox] No matches for target object \u2014 playing random:",i):a.length>1&&console.warn(`[Jukebox] ${a.length} ambiguous matches for target object \u2014 using first. Refine your search:`,a),o=a[0]||null}else if(i&&typeof i=="string"){let r=this.trackList.filter(s=>s.title&&s.title.toLowerCase()===i.toLowerCase());r.length===0?console.warn("[Jukebox] No matches for target title string \u2014 playing random:",i):r.length>1&&console.warn(`[Jukebox] ${r.length} ambiguous matches for title string \u2014 using first:`,r),o=r[0]||null}if(!o&&!i&&this.historyCursor<this.history.length-1)this.historyCursor++,o=this.trackList[this.history[this.historyCursor]];else if(!o){let r=this.trackList.filter((a,n)=>!this.history.includes(n));r.length===0&&(this.history=[],this.historyCursor=-1);let s=r.length>0?r:this.trackList;o=s[Math.floor(Math.random()*s.length)];let c=this.trackList.indexOf(o);this.historyCursor<this.history.length-1&&(this.history=this.history.slice(0,this.historyCursor+1)),this.history.push(c),this.history.length>this.maxHistory&&this.history.shift(),this.historyCursor=this.history.length-1}await this._playTrack(o,e)}catch(o){console.warn("[Jukebox] Track fetch failed \u2014 network issue?",o.message),this.onError("NO INTERNET OR BLOCKED ... TRY AGAIN?")}}async playPrevious(){if(this.historyCursor>0){this.stop();let i=++this._opId;this.historyCursor--;let e=this.trackList[this.history[this.historyCursor]];try{await this._playTrack(e,i)}catch(o){console.warn("[Jukebox] Previous track fetch failed:",o.message),this.onError("NO INTERNET OR BLOCKED ... TRY AGAIN?")}}}async _playTrack(i,e){let o=i.path.split("/").map(n=>encodeURIComponent(n)).join("/"),r=this.baseRawUrl+o,s=await fetch(r);if(!s.ok)throw new Error("Failed to fetch audio file");if(e!==this._opId)return;let c=await s.arrayBuffer();if(e!==this._opId)return;let a=null;try{a=Lr.load(c)}catch(n){console.warn(`[Jukebox] Unsupported format for "${i.title}" \u2014 skipping:`,n.message),e===this._opId&&setTimeout(()=>this.playNext(),100);return}e===this._opId&&(this.currentPlayer=a,this.currentPlayer?(this.currentTrack=i,typeof this.currentPlayer.loopSong<"u"&&(this.currentPlayer.loopSong=1),this.currentPlayer.play(),this.isPlaying=!0,this.onTrackChange(i),this.setupCompletionPolling()):setTimeout(()=>this.playNext(),100))}setupCompletionPolling(){this.pollInterval&&clearInterval(this.pollInterval),this.pollInterval=setInterval(()=>{if(!this.currentPlayer)return this.stopPolling();let i=!1;this.currentPlayer.amiga&&this.currentPlayer.amiga.playing===!1&&(i=!0),this.currentPlayer.mixer&&this.currentPlayer.mixer.playing===!1&&(i=!0),this.currentPlayer.stopped&&(i=!0),this.currentPlayer.playing===!1&&(i=!0),i&&this.playNext()},1e3)}stopPolling(){this.pollInterval&&(clearInterval(this.pollInterval),this.pollInterval=null)}stop(){if(this._opId++,this.stopPolling(),this.isPlaying=!1,this.currentPlayer){try{this.currentPlayer.stop()}catch{}this.currentPlayer=null}}};function Ir(t,i,e){let o=document.getElementById("afx-audio-toggle");if(!o)return;let r=document.getElementById("afx-bgm-status");if(o.checked&&e.classList.add("afx-music-playing"),t.jukebox)try{t.jukebox.stop()}catch(a){console.warn("[AnkiFX] Error stopping old jukebox:",a.message)}t.jukebox=new Ki({onTrackChange:a=>{let n=`NOW PLAYING: ${a.artist} - ${a.title} - ${a.trackTitle}`;i.marquee=n,t.marquee&&t.marquee.setText(n)},onError:a=>{i.marquee=a,t.marquee&&t.marquee.setText(a)}}),o.addEventListener("change",a=>{let n=a.target.checked,u=Yt();if(n){e.classList.add("afx-bgm-active"),e.classList.add("afx-music-playing"),r.innerHTML=u?"\u{1F50A}":"\u{1F50A} BGM: ON";let d=window.AudioContext||window.webkitAudioContext;d&&(window.neoart=window.neoart||{},window.neoart.audioContext||(window.neoart.audioContext=new d)),window.neoart.audioContext&&window.neoart.audioContext.state==="suspended"&&window.neoart.audioContext.resume();let l=localStorage.getItem("ankifx_preferred_effect")||i.defaultEffect||"geometry",p=i.trackTitle||t.EFFECT_SONG_MAP[l]||null;t.jukebox.playNext(p)}else e.classList.remove("afx-bgm-active"),e.classList.remove("afx-music-playing"),r.innerHTML=u?"\u{1F507}":"\u{1F507} BGM: OFF",t.jukebox.stop(),i.marquee=t.defaultMarqueeText,t.marquee&&t.marquee.setText(t.defaultMarqueeText)});let s=document.getElementById("afx-btn-back"),c=document.getElementById("afx-btn-skip");s&&s.addEventListener("click",a=>{a.stopPropagation(),t.jukebox&&t.jukebox.isPlaying&&t.jukebox.playPrevious()}),c&&c.addEventListener("click",a=>{a.stopPropagation(),t.jukebox&&t.jukebox.isPlaying&&t.jukebox.playNext()})}function Dr(t,i,e,o){let r=document.getElementById("afx-effect-selector");r&&r.addEventListener("change",s=>{let c=s.target.value;if(localStorage.setItem("ankifx_preferred_effect",c),Object.values(re).forEach(a=>a.stop()),t.ctx2D&&t.ctx2D.clearRect(0,0,t.width,t.height),t.glContext&&(t.glContext.clearColor(0,0,0,0),t.glContext.clear(t.glContext.COLOR_BUFFER_BIT)),i.defaultEffect=c,c==="debug"?e.classList.add("afx-debug-active"):e.classList.remove("afx-debug-active"),Jt(t,i,o,i.marqueePosition,c),t.jukebox&&t.jukebox.isPlaying){let a=i.trackTitle||t.EFFECT_SONG_MAP[c]||null,n=t.jukebox.currentTrack,u=!1;a&&(typeof a=="string"?u=!n||n.title.toLowerCase()!==a.toLowerCase():u=!n||a.title&&n.title.toLowerCase()!==a.title.toLowerCase()||a.trackTitle&&n.trackTitle.toLowerCase()!==a.trackTitle.toLowerCase()||a.artist&&(n.artist||"").toLowerCase()!==a.artist.toLowerCase()),u&&t.jukebox.playNext(a)}})}function Rr(t,i,e){let o=document.createElement("div");o.id="ankifx-overlay",i.debug&&o.classList.add("afx-debug-active");let r=window.innerWidth||document.documentElement.clientWidth||800,s=r<480?.65:r<768?.8:1,c=Math.max(55,Math.ceil(85*s));tr()&&(i.marqueePosition==="top"?o.style.paddingTop=`calc(1rem + ${c}px)`:o.style.paddingBottom=`calc(1rem + ${c}px)`);let a=kt(),n=Yt(),u=n?"\u{1F4DC} ":"\u{1F4DC} TEXT: ",d=n?"":" BGM: ",l=n?u.trim():a?`${u}ON`:`${u}OFF`,p=n?"\u{1F507}":`\u{1F507}${d}OFF`,v=n?"\u{1F3A8} ":"[ Effect: ",h=n?"":" ]",f=Object.values(re).filter(_=>_.id!=="debug"||i.debug).map(_=>`
            <option value="${_.id}" ${e===_.id?"selected":""}>
                ${v}${_.name}${h}
            </option>
        `).join(""),m=`
        <div id="afx-bottom-dock">
            <div class="afx-control-group-left">
                <div class="afx-control-row">
                    <label class="afx-toggle"><input type="checkbox" id="afx-text-toggle" ${a?"checked":""}><span class="afx-slider"></span></label>
                    <span id="afx-text-status">${l}</span>
                </div>
                <div id="afx-bgm-container" class="afx-control-row">
                    <label class="afx-toggle"><input type="checkbox" id="afx-audio-toggle"><span class="afx-slider"></span></label>
                    <span id="afx-bgm-status">${p}</span>
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
    `,x=!1;try{x=localStorage.getItem(`ankifx_agreed_${i.deckTitle}`)==="true"}catch{}let g=i.termsText&&typeof i.termsText=="string"&&i.termsText.trim()!==""&&!x;g&&(o.innerHTML=`
            <div class="afx-dialog">
                <div class="afx-terms">
                    <h3>${i.deckTitle}</h3>
                    ${i.deckAuthor?`<h4 class="afx-deck-author">by ${i.deckAuthor}</h4>`:""}
                    ${i.termsText}
                </div>
                <div class="afx-action-row">
                    <button id="afx-consent-btn" class="afx-btn" disabled>I AGREE</button>
                </div>
            </div>
        `);let b=document.createElement("div");for(b.innerHTML=m;b.firstChild;)o.appendChild(b.firstChild);let k=document.createElement("div");k.id="ankifx-background",document.body.appendChild(k),t.sharedGL=document.createElement("canvas"),t.sharedGL.id="afx-shared-gl",t.sharedGL.className="afx-shared-canvas",k.appendChild(t.sharedGL),t.shared2D=document.createElement("canvas"),t.shared2D.id="afx-shared-2d",t.shared2D.className="afx-shared-canvas",k.appendChild(t.shared2D),t.sharedMarquee=document.createElement("canvas"),t.sharedMarquee.id="afx-shared-marquee",t.sharedMarquee.className="afx-shared-canvas afx-shared-marquee-canvas",k.appendChild(t.sharedMarquee),t.glContext=t.sharedGL.getContext("webgl",{alpha:!1,antialias:!1}),t.ctx2D=t.shared2D.getContext("2d"),t.ctxMarquee=t.sharedMarquee.getContext("2d"),document.body.appendChild(o);let S=document.createElement("div");S.id="afx-top-dock";let P=document.createElement("div");P.className="afx-top-group-left",P.id="afx-top-group-left";let y=document.createElement("div");y.className="afx-top-group-right",y.id="afx-top-group-right";let E=document.createElement("button");E.id="afx-btn-back",E.className="afx-playback-btn",E.textContent="\u23EE\uFE0F";let w=document.createElement("button");if(w.id="afx-btn-skip",w.className="afx-playback-btn",w.textContent="\u23ED\uFE0F",P.appendChild(E),y.appendChild(w),i.debug){let _=document.createElement("div");_.id="afx-global-fps",_.className="afx-global-fps",_.textContent="FPS: --",P.appendChild(_)}S.appendChild(P),S.appendChild(y),o.appendChild(S);let T=_=>{let j=o.classList.contains("afx-agreed-state"),D=_.target.closest("button, input, select, .afx-slider, .afx-toggle, .afx-playback-btn, select option");j?D&&_.stopPropagation():_.stopPropagation()};["touchstart","touchend","mousedown","mouseup","pointerdown","pointerup","click"].forEach(_=>{o.addEventListener(_,T,{passive:!1})});let B=document.getElementById("afx-consent-btn");g&&B?fr(t,i,o,B):window.AnkiFX.agree(o,i.deckTitle),Ir(t,i,o);let I=document.getElementById("afx-text-toggle");if(I){let _=document.getElementById("afx-text-status");I.addEventListener("change",j=>{let D=j.target.checked,R=Yt();localStorage.setItem("ankifx_marquee_enabled",D);let G=R?"\u{1F4DC} ":"\u{1F4DC} TEXT: ";_.textContent=R?G.trim():D?`${G}ON`:`${G}OFF`,t.marquee&&(t.marquee.enabled=D)})}return Dr(t,i,o,k),{overlay:o,background:k}}var Or=["ankifx-overlay","ankifx-background","afx-btn-back","afx-btn-skip","afx-bottom-dock","afx-top-dock"],C={marquee:null,jukebox:null,sharedGL:null,shared2D:null,sharedMarquee:null,glContext:null,ctx2D:null,ctxMarquee:null,currentEffectId:null,dpr:1,width:0,height:0,marqueeInterval:null,defaultMarqueeText:null,EFFECT_SONG_MAP:{},_layoutHandler:null,_resizeTimeout:null,_resizeInterval:null,observer:null,dockObserver:null,initialized:!1};function gn(t={}){console.log(`[AnkiFX] Init \u2192 v${ke.version} (${ke.source})`);let i=ir(t);if(document.getElementById("ankifx-overlay")&&rr(C,i)){C.initialized=!0,zr(),(window.requestIdleCallback||function(c){setTimeout(c,0)})(()=>{Eo()});return}document.documentElement.classList.remove("afx-scroll-lock"),document.documentElement.classList.remove("afx-agreed"),document.documentElement.classList.remove("afx-ankidroid"),/Android/i.test(navigator.userAgent)&&document.documentElement.classList.add("afx-ankidroid"),Or.forEach(s=>{let c=document.getElementById(s);c&&c.remove()}),C.defaultMarqueeText=i.marquee,C.EFFECT_SONG_MAP={},Object.entries(re).forEach(([s,c])=>{c&&c.preferredTrack&&(C.EFFECT_SONG_MAP[s]=c.preferredTrack)}),Ur();let e=or(i),{background:o}=Rr(C,i,e);lr(C),sr(C),rt(C),nr(C),C.marquee?(C.marquee.setText(i.marquee),C.marquee.setPosition(i.marqueePosition)):(C.marquee=new zi(i.marquee,i.marqueePosition),go(C)),Jt(C,i,o,i.marqueePosition,e),C.marquee&&(C.marquee.enabled=kt()),C.initialized=!0,cr(C),Bi(C),zr(),(window.requestIdleCallback||function(s){setTimeout(s,0)})(()=>{Eo()})}function Ur(){if(document.getElementById("ankifx-styles"))return;let t=document.createElement("style");t.id="ankifx-styles",t.textContent=er,document.head.appendChild(t)}function bn(t,i){if(t.classList.add("afx-agreed-state"),document.documentElement.classList.add("afx-agreed"),document.documentElement.classList.remove("afx-scroll-lock"),i)try{localStorage.setItem(`ankifx_agreed_${i}`,"true")}catch{}Bi(C)}function vn(){C.currentEffectId&&re[C.currentEffectId]?.stop&&re[C.currentEffectId].stop(),C.jukebox&&(C.jukebox.stop(),C.jukebox=null),C.marqueeInterval&&(cancelAnimationFrame(C.marqueeInterval),C.marqueeInterval=null),C.marquee=null;let t=document.getElementById("_flag"),i=document.getElementById("_mark");t&&document.body.appendChild(t),i&&document.body.appendChild(i),Or.forEach(s=>{let c=document.getElementById(s);c&&c.remove()});let e=document.getElementById("ankifx-styles");if(e&&e.remove(),document.documentElement.style.removeProperty("--afx-viewport-height"),document.documentElement.style.removeProperty("--afx-dock-height"),document.documentElement.classList.remove("afx-scroll-lock"),document.documentElement.classList.remove("afx-agreed"),document.documentElement.classList.remove("afx-ankidroid"),Array.from(document.documentElement.classList).forEach(s=>{s.startsWith("afx-effect-")&&document.documentElement.classList.remove(s)}),window.AnkiFX_Config=null,C._observerTimeout&&(clearTimeout(C._observerTimeout),C._observerTimeout=null),C.observer&&(C.observer.disconnect(),C.observer=null),C.dockObserver&&(C.dockObserver.disconnect(),C.dockObserver=null),C._layoutHandler&&(window.removeEventListener("orientationchange",C._layoutHandler),window.removeEventListener("resize",C._layoutHandler),C._layoutHandler=null),C._resizeTimeout&&(clearTimeout(C._resizeTimeout),C._resizeTimeout=null),C._resizeInterval&&(clearInterval(C._resizeInterval),C._resizeInterval=null),C.glContext){if(typeof C.glContext.getExtension=="function"){let s=C.glContext.getExtension("WEBGL_lose_context");s&&s.loseContext()}C.glContext=null}C.sharedGL=null,C.shared2D=null,C.sharedMarquee=null,C.ctx2D=null,C.ctxMarquee=null,C.currentEffectId=null,C.initialized=!1,mt&&(window.removeEventListener("ankifx:template-status",mt),mt=null),Ji=null;let o=document.getElementById("afx-legacy-toast");o&&o.remove();let r=document.getElementById("afx-update-notice");r&&r.remove(),console.log("[AnkiFX] Destroyed.")}var Br={};function xn(t){try{if(typeof sessionStorage<"u")return sessionStorage.getItem(t)}catch{}return null}function yn(t,i){try{if(typeof sessionStorage<"u")return sessionStorage.setItem(t,i),!0}catch{}return!1}function wn(t){let i=`afx_legacy_toast_${t}`,e=xn(i);return e!==null?e==="true":!!Br[i]}function kn(t){let i=`afx_legacy_toast_${t}`;yn(i,"true")||(Br[i]=!0)}function Eo(){if(!window.AnkiFX||!window.AnkiFX.initialized)return;let t=document.getElementById("ankifx-template-meta"),i=!1,e="unknown";if(!t)i=!0;else{let o=t.getAttribute("data-template-name"),r=t.getAttribute("data-template-version");o?e=o.trim():i=!0,(!r||r.trim()==="")&&(i=!0)}i&&Nr(e)}var Ji=null,mt=null;function Qt(t){return t?String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;"):""}function zr(){mt&&window.removeEventListener("ankifx:template-status",mt),Ji=null;let t=i=>{if(!i||!i.isNewer||Ji)return;let e=document.getElementById("afx-update-banner-root");if(!e||e.children.length>0||document.getElementById("afx-update-notice"))return;Ji="outdated";let o=`afx_dismiss_${i.name}_${i.local}`;if((()=>{try{if(sessionStorage.getItem(o)==="true")return!0}catch{}try{if(localStorage.getItem(o)==="true")return!0}catch{}return!1})())return;let s=()=>{try{sessionStorage.setItem(o,"true")}catch{}try{localStorage.setItem(o,"true")}catch{}},c=document.createElement("div");c.id="afx-update-notice",c.className="afx-update-notice";let a=i.changelog?` (${Qt(i.changelog)})`:"";c.innerHTML=`
            <div class="afx-update-notice-content">
                <div class="afx-update-notice-title">Template Update Available</div>
                <div>
                    Card template is v${Qt(i.local)}. Latest is v${Qt(i.remote)}${a}.<br>
                    Please visit <a class="afx-update-notice-link" href="${Qt(i.targetUrl)}" target="_blank">${Qt(i.displayUrl)}</a> and copy the latest template.
                </div>
            </div>
            <button class="afx-update-notice-close" title="Dismiss">&times;</button>
        `,c.querySelector(".afx-update-notice-close").addEventListener("click",l=>{l.stopPropagation(),c.classList.remove("afx-visible"),s(),setTimeout(()=>c.remove(),400)});let u=c.querySelector(".afx-update-notice-link");u&&u.addEventListener("click",l=>l.stopPropagation());let d=l=>l.stopPropagation();["touchstart","touchend","mousedown","mouseup","click"].forEach(l=>{c.addEventListener(l,d,{passive:!0})}),requestAnimationFrame(()=>{e.appendChild(c),requestAnimationFrame(()=>{c.classList.add("afx-visible")})})};mt=i=>{t(i.detail)},window.addEventListener("ankifx:template-status",mt),window.dispatchEvent(new CustomEvent("ankifx:request-template-status"))}function Nr(t="unknown"){if(wn(t)||document.getElementById("afx-legacy-toast"))return;let i=document.createElement("div");i.id="afx-legacy-toast",i.className="afx-legacy-toast-container",i.innerHTML=`
        <div class="afx-legacy-toast-content">
            <div class="afx-legacy-toast-title">Legacy Template Detected</div>
            <div>
                An update is required for full AnkiFX compatibility.<br>
                Please see the <a class="afx-legacy-toast-link" href="https://github.com/robkipa/ankifx/blob/main/docs/template-migration-guide.md" target="_blank">Template Update Guide</a> for step-by-step instructions.
            </div>
        </div>
        <button class="afx-legacy-toast-close" title="Dismiss">&times;</button>
    `,i.querySelector(".afx-legacy-toast-close").addEventListener("click",s=>{s.stopPropagation(),i.classList.remove("afx-legacy-visible"),kn(t),setTimeout(()=>{i.remove()},400)});let o=i.querySelector(".afx-legacy-toast-link");o&&o.addEventListener("click",s=>{s.stopPropagation()});let r=s=>s.stopPropagation();["touchstart","touchend","mousedown","mouseup","click"].forEach(s=>{i.addEventListener(s,r,{passive:!0})}),document.body.appendChild(i),requestAnimationFrame(()=>{requestAnimationFrame(()=>{i.classList.add("afx-legacy-visible")})})}var Zi="local";try{let t=typeof __ankifx_script_src=="string"?__ankifx_script_src:"";if(!t){let e=(new Error().stack||"").match(/(https?:\/\/[^\s)\n:]+|file:\/\/[^\s)\n:]+)/g);if(e&&e.length>0){for(let o=0;o<e.length;o++)if(e[o].includes("ankifx")){t=e[o];break}}}t&&(t.includes("cdn.jsdelivr.net")||t.includes("github")||t.includes("rawgit")||t.includes("githack")?Zi="remote":Zi="local")}catch{Zi="detection-failed"}var Sn="1.0.0-89e33b1",En="2026-06-10T22:16:20.841Z",Cn=Zi,ke={init:gn,destroy:vn,agree:bn,injectCSS:Ur,handleResize:()=>rt(C),startEffect:(t,i,e,o)=>Jt(C,t,i,e,o),startMarqueeLoop:()=>go(C),renderEffectControls:Kt,setControlValue:ar,detectLegacyTemplate:Eo,showLegacyMigrationToast:Nr,get version(){return Sn},get buildDate(){return En},get source(){return Cn},get marquee(){return C.marquee},set marquee(t){C.marquee=t},get jukebox(){return C.jukebox},set jukebox(t){C.jukebox=t},get currentEffectId(){return C.currentEffectId},get defaultMarqueeText(){return C.defaultMarqueeText},get EFFECT_SONG_MAP(){return C.EFFECT_SONG_MAP},get initialized(){return!!C.initialized}};function qr(t){if(!t)return{parts:[0,0,0],isPre:!1,preType:3,preNumber:0};let i=String(t).replace(/^v/,""),e=i.indexOf("+");e!==-1&&(i=i.substring(0,e));let o=i.indexOf("-"),r=o!==-1,s=r?i.substring(0,o):i,c=r?i.substring(o+1).toLowerCase():"",a=s.split(".").map(d=>{let l=parseInt(d,10);return isNaN(l)?0:l}),n=3,u=0;if(r){c.indexOf("alpha")!==-1?n=0:c.indexOf("beta")!==-1?n=1:c.indexOf("rc")!==-1&&(n=2);let d=c.match(/\d+/);d&&(u=parseInt(d[0],10))}return{parts:[a[0]||0,a[1]||0,a[2]||0],isPre:r,preType:n,preNumber:u}}function Qi(t,i){let e=qr(t),o=qr(i);for(let r=0;r<3;r++){if(e.parts[r]>o.parts[r])return!0;if(e.parts[r]<o.parts[r])return!1}return e.preType>o.preType?!0:e.preType<o.preType?!1:e.preNumber>o.preNumber}function jr(t,i){if(!t||!i||t==="development"||i==="development")return!1;try{return new Date(t).getTime()>new Date(i).getTime()}catch{return!1}}var $r=[];try{let t=sessionStorage.getItem("ankifx_eval_history");t&&($r=JSON.parse(t))}catch{}window.AnkiFX_Eval_History=window.AnkiFX_Eval_History||$r;var Hr=[];try{let t=sessionStorage.getItem("ankifx_loader_logs");t&&(Hr=JSON.parse(t))}catch{}window.AnkiFX_Loader_Logs=window.AnkiFX_Loader_Logs||Hr;var Ct=t=>{window.AnkiFX_Loader_Logs.push(t);try{sessionStorage.setItem("ankifx_loader_logs",JSON.stringify(window.AnkiFX_Loader_Logs))}catch{}},be=window.AnkiFX,$e=ke.version,He=be&&be.version,Pn=be&&be.initialized,Xr=!1,Gr="",Mn=!be||Qi($e,He),Tn=be&&!Qi($e,He)&&!Qi(He,$e),Fn=Tn&&jr(ke.buildDate,be&&be.buildDate),_n=Mn||Fn;if(_n)if(Pn){console.info(`[Loader] Newer engine version v${$e} (${ke.source}) loaded late. Upgrading and replacing active engine v${He} (${be.source})...`),Ct({msg:`[Loader] Late takeover triggered: Upgrading active engine from v${He} to v${$e}...`,level:"info"});let t=window.AnkiFX_Config;try{be.destroy(),Ct({msg:`[Loader] Active engine v${He} destroyed successfully.`,level:"success"})}catch(i){console.error(`[Loader] Error destroying old engine: ${i.message}`),Ct({msg:`[Loader] Error destroying active engine: ${i.message}`,level:"error"})}t&&(window.AnkiFX_Config=t),window.AnkiFX=ke;try{window.AnkiFX.init(window.AnkiFX_Config),Ct({msg:`[Loader] Upgraded AnkiFX engine to v${$e} successfully.`,level:"success"})}catch(i){console.error(`[Loader] Error initializing upgraded engine: ${i.message}`),Ct({msg:`[Loader] Upgraded AnkiFX engine initialization failed: ${i.message}`,level:"error"})}}else be&&(console.info(`[Loader] Newer engine version v${$e} (${ke.source}) replacing uninitialized engine v${He} (${be.source}).`),Ct({msg:`[Loader] Pre-init takeover: Replacing local v${He} with remote v${$e}...`,level:"info"})),window.AnkiFX=ke;else{Xr=!0;let t=be&&be.buildDate?be.buildDate:"unknown",i=ke.buildDate||"unknown";Gr=`ignored (older or equal version and build: active=${He}@${t}, incoming=${$e}@${i})`,console.info(`[Loader] Incoming engine v${$e} (built ${i}) is not newer than active engine v${He} (built ${t}). Ignoring.`)}window.AnkiFX_Eval_History.push({source:ke.source,version:ke.version,buildDate:ke.buildDate,time:new Date().toLocaleTimeString(),status:Xr?Gr:"active"});try{sessionStorage.setItem("ankifx_eval_history",JSON.stringify(window.AnkiFX_Eval_History))}catch{}})();
