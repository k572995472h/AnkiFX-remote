var __ankifx_script_src=(document.currentScript&&document.currentScript.src)||"";
(()=>{var Li=[],rt=null,ar=60,nr=1.5,sr={id:"aurora",name:"Aurora",run:za,stop:Ua,drawOverlay:Oa,onResize:(o,t)=>{let e=document.documentElement,i=e?getComputedStyle(e):null;if(At=i&&parseInt(i.getPropertyValue("--io-header"))||0,$t=t-At,qe=o/8,je=$t/8,rt){let r=ar/8,s=Math.ceil(qe/r),l=Math.ceil(je/(r*nr));rt.w=s,rt.h=l,rt.build()}ae&&(ae.style.width=qe+"px",ae.style.height=je+"px",ae.style.position="absolute",ae.style.top=At+"px",ae.style.left="0",ae.style.transform="scale(8)",ae.style.transformOrigin="top left")},marqueeFont:{color:"#E0FFFF",shadowColor:"rgba(0,128,128,0.8)",shadowBlur:10}},Ht=null,qe,je,ae=null,Da=0,jt=0,Tt={x:-1e3,y:-1e3},At=0,$t=0,Fo=class{constructor(t,e){this.x=t||0,this.y=e||0}setAngle(t){let e=this.getLength()||1;this.x=Math.cos(t)*e,this.y=Math.sin(t)*e}setLength(t){let e=Math.atan2(this.y,this.x);this.x=Math.cos(e)*t,this.y=Math.sin(e)*t}getLength(){return Math.sqrt(this.x*this.x+this.y*this.y)}addTo(t){this.x+=t.x,this.y+=t.y}},rr=(()=>{let o=new Uint8Array(512),t=new Uint8Array(256).map(()=>Math.random()*256);for(let r=0;r<512;r++)o[r]=t[r&255];let e=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]];function i(r,s,l,a){return r[0]*s+r[1]*l+r[2]*a}return{simplex3:(r,s,l)=>{let a,n,u,d,c=.3333333333333333,h=1/6,m=(r+s+l)*c,p=Math.floor(r+m),f=Math.floor(s+m),g=Math.floor(l+m),y=(p+f+g)*h,w=r-p+y,x=s-f+y,k=l-g+y,E,P,b,C,v,M;w>=x?x>=k?(E=1,P=0,b=0,C=1,v=1,M=0):w>=k?(E=1,P=0,b=0,C=1,v=0,M=1):(E=0,P=0,b=1,C=1,v=0,M=1):x<k?(E=0,P=0,b=1,C=0,v=1,M=1):w<k?(E=0,P=1,b=0,C=0,v=1,M=1):(E=0,P=1,b=0,C=1,v=1,M=0);let F=w-E+h,I=x-P+h,A=k-b+h,U=w-C+2*h,L=x-v+2*h,B=k-M+2*h,N=w-1+3*h,j=x-1+3*h,Q=k-1+3*h,R=p&255,q=f&255,W=g&255,H=.6-w*w-x*x-k*k;H<0?a=0:(H*=H,a=H*H*i(e[o[R+o[q+o[W]]]%12],w,x,k));let oe=.6-F*F-I*I-A*A;oe<0?n=0:(oe*=oe,n=oe*oe*i(e[o[R+E+o[q+P+o[W+b]]]%12],F,I,A));let fe=.6-U*U-L*L-B*B;fe<0?u=0:(fe*=fe,u=fe*fe*i(e[o[R+C+o[q+v+o[W+M]]]%12],U,L,B));let Pe=.6-N*N-j*j-Q*Q;return Pe<0?d=0:(Pe*=Pe,d=Pe*Pe*i(e[o[R+1+o[q+1+o[W+1]]]%12],N,j,Q)),32*(a+n+u+d)}}})(),Di=class{constructor(t,e,i={}){this.settings={frequency:.1,...i},this.w=t,this.h=e,this.time=0,this.build()}build(){this.cols=Math.ceil(this.w),this.rows=Math.ceil(this.h),this.field=new Array(this.cols);for(let t=0;t<this.cols;t++){this.field[t]=new Array(this.rows);for(let e=0;e<this.rows;e++)this.field[t][e]=new Fo(0,0)}}update(t){this.time+=t;let e=this.time*this.settings.frequency/1e3;for(let i=0;i<this.field.length;i++)for(let r=0;r<this.field[i].length;r++){let s=rr.simplex3(i/20,r/20,e)*Math.PI*2,l=rr.simplex3(i/10+4e4,r/10+4e4,e);this.field[i][r].setAngle(s),this.field[i][r].setLength(l),typeof this.manipulateVector=="function"&&this.manipulateVector(this.field[i][r],i,r),typeof this.onDraw=="function"&&this.onDraw(this.field[i][r],i,r)}}};function Ra(){Li=[];let o=150;for(let t=0;t<o;t++)Li.push({x:Math.random(),y:Math.random(),size:.5+Math.random()*1.3,opacity:.15+Math.random()*.75,blinkSpeed:.001+Math.random()*.002,blinkOffset:Math.random()*Math.PI*2})}function It(o){o.touches&&o.touches[0]?(Tt.x=o.touches[0].clientX,Tt.y=o.touches[0].clientY):(Tt.x=o.clientX,Tt.y=o.clientY)}function za(o,t){let e=o.ctx2d;ae=o.canvas2D,ae.classList.add("afx-aurora-active"),At=o.topInset||0,$t=o.visibleHeight||o.height,qe=o.width/8,je=$t/8,ae.width=qe*o.dpr,ae.height=je*o.dpr,e.setTransform(1,0,0,1,0,0),e.scale(o.dpr,o.dpr),ae.style.width=qe+"px",ae.style.height=je+"px",ae.style.position="absolute",ae.style.top=At+"px",ae.style.left="0",ae.style.transform="scale(8)",ae.style.transformOrigin="top left",Ra();let i=ar/8,r=Math.ceil(qe/i),s=Math.ceil(je/(i*nr));rt=new Di(r,s,{frequency:.1});let l={x:qe/r,y:je/s},a=255/s;rt.onDraw=(u,d,c)=>{let h=u.getLength()*Math.abs(u.x),m=u.getLength()*Math.abs(u.y),p=Math.round(-20*h+80*m+(50-.6*c*a)),f=Math.round(180*h+20*m-60+.4*c*a),g=Math.round(50*h+30*m+(40-.5*c*a)+.5*c*a);e.fillStyle=`rgba(${p}, ${f}, ${g}, 0.8)`,e.fillRect(d*l.x,c*l.y,l.x+.5,l.y+.5)},rt.manipulateVector=(u,d,c)=>{let h={x:d*l.x+.5*l.x,y:c*l.y+.5*l.y},m=Tt.x/8,p=Tt.y/8,f=new Fo((m-h.x)/qe,(p-h.y)/je);u.addTo(f),u.getLength()>1&&u.setLength(1)},Da=0,jt=0,window.addEventListener("mousemove",It),window.addEventListener("touchstart",It),window.addEventListener("touchmove",It);function n(u){jt||(jt=u);let d=u-jt;jt=u,e.fillStyle="#020b1a",e.fillRect(0,0,qe,je),rt.update(d),Ht=requestAnimationFrame(n)}Ht=requestAnimationFrame(n)}function Oa(o,t,e,i){let r=At,s=$t||e;o.fillStyle="#ffffff",Li.forEach(l=>{let a=(Math.sin(i*l.blinkSpeed+l.blinkOffset)+1)/2;o.globalAlpha=l.opacity*a,o.beginPath();let n=r+l.y*s;o.arc(l.x*t,n,l.size,0,Math.PI*2),o.fill()}),o.globalAlpha=1}function Ua(){Ht&&(cancelAnimationFrame(Ht),Ht=null),window.removeEventListener("mousemove",It),window.removeEventListener("touchstart",It),window.removeEventListener("touchmove",It),ae&&(ae.classList.remove("afx-aurora-active"),ae.style.cssText="position: absolute; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none;",ae=null);let o=window.AnkiFX;o&&typeof o.handleResize=="function"&&o.handleResize()}var To=null,Gt,Ao,De=null,Ba=200,cr=[];try{let o=sessionStorage.getItem("ankifx_captured_logs");o&&(cr=JSON.parse(o))}catch{}window.AnkiFX_Captured_Logs=window.AnkiFX_Captured_Logs||cr;var lr=null,Xt="all",Ce={ioHeaderHeight:null,topInset:null,bottomInset:null,viewportHeight:null,visibleHeight:0,isLandscape:!1};function fr(){let o=document.documentElement,t=o?getComputedStyle(o):null,e=(r,s)=>{if(!r)return null;let l=r.getPropertyValue(s);if(!l||l.trim()==="")return null;let a=parseInt(l,10);return isNaN(a)?null:a};Ce.ioHeaderHeight=e(t,"--io-header"),Ce.topInset=e(t,"--top-inset"),Ce.bottomInset=e(t,"--bottom-inset");let i=document.getElementById("ankifx-background");Ce.viewportHeight=i?Math.round(i.getBoundingClientRect().height):null,Ce.isLandscape=window.innerWidth>window.innerHeight,Ce.visibleHeight=(o?o.clientHeight:window.innerHeight)+(Ce.ioHeaderHeight||0)}var He=(o,t)=>{let e=t.map(i=>{if(i===null)return"null";if(i===void 0)return"undefined";if(typeof i=="object")try{return JSON.stringify(i)}catch{return String(i)}return String(i)}).join(" ");window.AnkiFX_Captured_Logs.push({type:o,message:e,timestamp:new Date().toLocaleTimeString()}),window.AnkiFX_Captured_Logs.length>Ba&&window.AnkiFX_Captured_Logs.shift();try{sessionStorage.setItem("ankifx_captured_logs",JSON.stringify(window.AnkiFX_Captured_Logs))}catch{}lr&&lr()};if(typeof window<"u"&&!window.__console_intercepted__){let o=console.log&&console.log.bind(console)||(()=>{}),t=console.warn&&console.warn.bind(console)||(()=>{}),e=console.error&&console.error.bind(console)||(()=>{}),i=console.info&&console.info.bind(console)||(()=>{}),r=console.debug&&console.debug.bind(console)||(()=>{});console.log=(...s)=>{o(...s),He("log",s)},console.warn=(...s)=>{t(...s),He("warn",s)},console.error=(...s)=>{e(...s),He("error",s)},console.info=(...s)=>{i(...s),He("info",s)},console.debug=(...s)=>{r(...s),He("debug",s)},window.addEventListener("error",s=>{let l=s.message;if(s.error){let a=s.error.name||"Error",n=s.error.message||s.message||"",u=s.error.stack||"";u&&!u.includes(n)?l=`${a}: ${n}
${u}`:l=u||`${a}: ${n}`}He("error",[l])}),window.addEventListener("unhandledrejection",s=>{He("error",[`Unhandled Promise Rejection: ${s.reason}`])}),window.__console_intercepted__=!0}var ur={id:"debug",name:"DEBUG",run:Na,stop:qa,onResize:(o,t)=>{Gt=o,Ao=t,fr()},marqueeFont:{color:"#00ff00",shadowColor:"rgba(0,0,0,0.8)",shadowBlur:5},controls:[{type:"button",id:"copy-logs-btn",label:"\u{1F4CB} COPY LOGS",onClick:()=>{ja()}},{type:"button",id:"clear-storage-btn",label:"\u{1F9F9} CLEAR STORAGE",onClick:()=>{if(confirm("Clear ALL AnkiFX local storage?")){localStorage.clear();try{sessionStorage.removeItem("ankifx_captured_logs"),sessionStorage.removeItem("ankifx_loader_logs"),sessionStorage.removeItem("ankifx_eval_history")}catch{}location.reload()}}}]};function Na(o,t){De&&(De.remove(),De=null);let e=o.dpr||1;Gt=o.width,Ao=o.height,fr(),De=document.createElement("div"),De.className="afx-debug-container";let i=document.createElement("div");i.className="afx-debug-columns",De.appendChild(i);let r=document.createElement("div");r.className="afx-debug-left-col",i.appendChild(r);let s=document.createElement("div");s.className="afx-debug-right-col",i.appendChild(s);let l=document.createElement("div");l.className="afx-debug-panel diagnostics",l.innerHTML="<h3>AnkiFX Version</h3>";let a=document.createElement("div");a.className="afx-debug-content",l.appendChild(a),r.appendChild(l);let n=document.createElement("div");n.className="afx-debug-panel viewport-info",n.innerHTML="<h3>Viewport & Layout</h3>";let u=document.createElement("pre");u.className="afx-debug-content",n.appendChild(u),r.appendChild(n);let d=document.createElement("div");d.className="afx-debug-panel logs",d.innerHTML="<h3>Chronological Loader Logs</h3>";let c=document.createElement("div");c.className="afx-debug-content",d.appendChild(c),s.appendChild(d);let h=document.createElement("div");h.className="afx-debug-panel localstorage-viewer",h.innerHTML="<h3>LocalStorage</h3>";let m=document.createElement("div");m.className="afx-debug-content",h.appendChild(m),s.appendChild(h);let p=document.createElement("div");p.className="afx-debug-panel console-logs",p.innerHTML=`
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
    `,De.appendChild(p);let f=document.createElement("div");f.style.height="calc(var(--bottom-inset, 0px) + var(--afx-dock-height, 0px) + 20px)",f.style.flexShrink="0",f.style.pointerEvents="none",De.appendChild(f);let g=p.querySelectorAll(".afx-console-filter-btn");g.forEach(R=>{R.addEventListener("click",q=>{q.stopPropagation(),g.forEach(W=>{W.classList.remove("active"),W.style.background="rgba(255,255,255,0.05)",W.style.borderColor="transparent",W.style.color="#888"}),R.classList.add("active"),R.style.background="rgba(255,255,255,0.15)",R.style.borderColor="rgba(255,255,255,0.25)",R.style.color="#fff",Xt=R.getAttribute("data-filter")})});let y=p.querySelector("#afx-clear-console-btn");y&&y.addEventListener("click",R=>{R.stopPropagation(),window.AnkiFX_Captured_Logs.length=0;try{sessionStorage.removeItem("ankifx_captured_logs")}catch{}});let w=p.querySelector("#afx-console-input"),x=p.querySelector("#afx-console-exec-btn"),k=()=>{if(!w)return;let R=w.value.trim();if(R){He("log",[`> ${R}`]);try{let q=(0,eval)(R);He("info",["=>",q])}catch(q){He("error",[q.stack||q.message||q])}w.value="",w.focus()}};x&&w&&(["keydown","keyup","keypress"].forEach(R=>{w.addEventListener(R,q=>{q.stopPropagation()})}),w.addEventListener("keydown",R=>{R.key==="Enter"&&(R.preventDefault(),k())}),x.addEventListener("click",R=>{R.stopPropagation(),k()})),(document.getElementById("ankifx-overlay")||document.body).appendChild(De);let P=document.getElementById("ankifx-background")||document.body,b={topLeft:document.createElement("div"),topRight:document.createElement("div"),bottomLeft:document.createElement("div"),bottomRight:document.createElement("div")};b.topLeft.className="afx-debug-corner top-left",b.topRight.className="afx-debug-corner top-right",b.bottomLeft.className="afx-debug-corner bottom-left",b.bottomRight.className="afx-debug-corner bottom-right",b.bottomLeft.style.bottom="auto",b.bottomRight.style.bottom="auto",Object.values(b).forEach(R=>P.appendChild(R));let C=document.createElement("div");C.className="afx-debug-line visible-bottom";let v=document.createElement("span");v.className="afx-debug-line-label",v.textContent="--- VISIBLE DOCUMENT BOTTOM ---",C.appendChild(v),P.appendChild(C);let M=0,F=0,I=0,A="",U="",L="",B="",N="",j="";function Q(R){R===void 0&&(R=performance.now()),M||(M=R),F++,R-M>=1e3&&(I=F,F=0,M=R);let q=o.ctx2d;q.clearRect(0,0,Gt,Ao),q.fillStyle="#050508",q.fillRect(0,0,Gt,Ao);let W=Ce.visibleHeight,H=V=>V!==null?`${V}px`:"N/A",oe=H(Ce.ioHeaderHeight),fe=H(Ce.topInset),Pe=H(Ce.bottomInset),tt=H(Ce.viewportHeight),ot=Ce.ioHeaderHeight||0,Ye=[`window:               ${window.innerWidth}x${window.innerHeight}`,`screen:               ${screen.width}x${screen.height}`,`doc:                  ${document.documentElement.clientWidth}x${document.documentElement.clientHeight}`,`orient:               ${window.orientation||"N/A"}`,`dpr (native|engine):  (${window.devicePixelRatio}|${e})`,`--io-header:          ${oe}`,`--top-inset:          ${fe}`,`--bottom-inset:       ${Pe}`,`--afx-viewport-height: calc(100dvh + ${ot}px) = ${tt}`,`isLandscape:          ${Ce.isLandscape}`].join(`
`);Ye!==A&&(u.textContent=Ye,A=Ye);let Be=window.AnkiFX_Eval_History||[],T=JSON.stringify(Be),z=[`Version:  ${window.AnkiFX?.version||"1.0.0-dev"}`,`Source:   ${window.AnkiFX?.source||"unknown"}`,`Built:    ${window.AnkiFX?.buildDate||"development"}`].join(`
`),Y=z+"_"+T;if(Y!==U){a.innerHTML="";let V=document.createElement("pre");V.style.margin="0 0 10px 0",V.style.fontFamily="inherit",V.style.fontSize="inherit",V.textContent=z,a.appendChild(V);let X=document.createElement("div");X.style.borderTop="1px dashed rgba(255,255,255,0.15)",X.style.margin="10px 0",a.appendChild(X);let te=document.createElement("div");te.textContent="EVALUATION HISTORY:",te.style.fontWeight="bold",te.style.color="#00ffff",te.style.marginBottom="6px",te.style.fontSize="11px",a.appendChild(te);let se=document.createElement("div");if(Be.length===0){let J=document.createElement("div");J.textContent="(No evaluation history captured)",J.style.color="#888",J.style.fontStyle="italic",se.appendChild(J)}else Be.slice(-3).forEach((J,Ne)=>{let K=document.createElement("div");K.textContent=`[${Ne+1}] ${J.source} (${J.version}) @ ${J.time} - ${J.status}`,K.style.color=J.status==="active"?"#55ff55":"#ffaa55",K.style.fontSize="11px",se.appendChild(K)});a.appendChild(se),U=Y}let $=window.AnkiFX_Loader_Logs||[],ie=JSON.stringify($);if(ie!==L){if(c.innerHTML="",$.length===0){let V=document.createElement("div");V.textContent="(No logs captured by template loader)",V.style.color="#888",V.style.fontStyle="italic",c.appendChild(V)}else{let V={success:{color:"#55ff55",badge:"\u2713"},error:{color:"#ff5555",badge:"\u2717"},warn:{color:"#ffaa55",badge:"!"},pending:{color:"#888888",badge:"\u2026"},info:{color:"#dddddd",badge:"\xB7"}};$.forEach((X,te)=>{let se=X&&typeof X=="object",J=se?X.msg:String(X),Ne=V[se?X.level:"info"]||V.info,K=document.createElement("div");K.style.cssText="display: flex; gap: 6px; align-items: baseline; font-size: 11px; margin-bottom: 3px; padding-bottom: 2px; border-bottom: 1px solid rgba(255,255,255,0.04);";let de=document.createElement("span");de.textContent=`[${String(te+1).padStart(2,"0")}]`,de.style.cssText="color: #555; flex-shrink: 0; font-size: 10px;";let ke=document.createElement("span");ke.textContent=Ne.badge,ke.style.cssText=`color: ${Ne.color}; flex-shrink: 0; font-weight: bold; width: 10px;`;let Se=document.createElement("span");Se.textContent=J,Se.style.cssText=`color: ${Ne.color}; word-break: break-word;`,K.appendChild(de),K.appendChild(ke),K.appendChild(Se),c.appendChild(K)})}L=ie}let we={};for(let V=0;V<localStorage.length;V++){let X=localStorage.key(V);we[X]=localStorage.getItem(X)}let Me=JSON.stringify(we);if(Me!==j){m.innerHTML="";let V=Object.keys(we).sort();if(V.length===0){let X=document.createElement("div");X.textContent="(LocalStorage is empty)",X.style.color="#888",X.style.fontStyle="italic",X.style.fontSize="11px",m.appendChild(X)}else V.forEach(X=>{let te=document.createElement("div");te.style.cssText="display: flex; justify-content: space-between; font-size: 11px; margin-bottom: 4px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 2px;";let se=document.createElement("span");se.textContent=X,se.style.color="#ffaa55",se.style.wordBreak="break-all",se.style.marginRight="8px";let J=document.createElement("span");J.textContent=we[X],J.style.color="#00ffff",J.style.wordBreak="break-all",J.style.textAlign="right",te.appendChild(se),te.appendChild(J),m.appendChild(te)});j=Me}let Ae=window.AnkiFX_Captured_Logs.filter(V=>Xt==="all"?!0:V.type===Xt),Ie=Xt+"_"+JSON.stringify(Ae);if(Ie!==N){let V=document.getElementById("afx-console-log-list");if(V)if(V.innerHTML="",Ae.length===0){let X=document.createElement("div");X.textContent=`(No logs in category: ${Xt})`,X.style.color="#888",X.style.fontStyle="italic",X.style.fontSize="11px",V.appendChild(X)}else Ae.forEach(X=>{let te=document.createElement("div");te.style.marginBottom="4px",te.style.fontSize="11px",te.style.borderBottom="1px solid rgba(255,255,255,0.03)",te.style.paddingBottom="2px";let se=document.createElement("span");se.textContent=`[${X.timestamp}] `,se.style.color="#888",te.appendChild(se);let J=document.createElement("span");J.textContent=X.message,X.type==="error"?J.style.color="#ff5555":X.type==="warn"?J.style.color="#ffaa55":X.type==="info"||X.type==="debug"?J.style.color="#00ffff":J.style.color="#ffffff",te.appendChild(J),V.appendChild(te)}),V.scrollTop=V.scrollHeight;N=Ie}let Le=Math.round(Gt),it=Math.round(W),Co=`${Le}x${it}`;Co!==B&&(b.topLeft.textContent="(0,0)",b.topRight.textContent=`(${Le},0)`,b.bottomLeft.textContent=`(0,${it})`,b.bottomRight.textContent=`(${Le},${it})`,b.bottomLeft.style.top=`${it-18}px`,b.bottomRight.style.top=`${it-18}px`,B=Co),C.style.top=`${W}px`,To=requestAnimationFrame(Q)}Q()}function qa(){To&&(cancelAnimationFrame(To),To=null),De&&(De.remove(),De=null),document.querySelectorAll(".afx-debug-corner, .afx-debug-line").forEach(o=>o.remove())}function ja(){let o=document.querySelector(".afx-debug-container");if(!o)return;let t=`=== ANKIFX DEBUG LOGS ===

`;o.querySelectorAll(".afx-debug-panel").forEach(r=>{let s=r.querySelector("h3")?.textContent||"",l=r.querySelector(".afx-debug-content");l&&(t+=`--- ${s.toUpperCase()} ---
`,t+=l.innerText||l.textContent||"",t+=`

`)}),(()=>{try{let r=document.createElement("textarea");r.value=t.trim(),r.style.position="fixed",r.style.top="0",r.style.left="0",r.style.opacity="0",r.style.pointerEvents="none",document.body.appendChild(r),r.focus(),r.select();let s=document.execCommand("copy");if(document.body.removeChild(r),s)return Promise.resolve()}catch{}return navigator.clipboard&&typeof navigator.clipboard.writeText=="function"?navigator.clipboard.writeText(t.trim()):Promise.reject(new Error("No copy method succeeded or is available"))})().then(()=>{let r=document.getElementById("afx-control-copy-logs-btn");if(r){let s=r.textContent;r.textContent="\u2705 COPIED!",setTimeout(()=>{r.textContent=s},1500)}}).catch(r=>{let s=document.getElementById("afx-control-copy-logs-btn");if(s){let l=s.textContent;s.textContent="\u274C ERROR",setTimeout(()=>{s.textContent=l},1500)}})}var Vt=null,he,$e,Oe={id:"ecg",name:"ECG Monitor",run:Ha,stop:$a,onResize:(o,t)=>{he=o,$e=t},marqueeFont:{color:"#FF1A1A",shadowColor:"#CC0000",shadowBlur:15}};function Ha(o,t){let e=o.ctx2d;he=o.width,$e=o.height;let i=document.getElementById("afx-top-group-right"),r=document.getElementById("afx-ecg-panel");!r&&i&&(r=document.createElement("div"),r.id="afx-ecg-panel",i.insertBefore(r,i.firstChild)),r&&!r.querySelector(".afx-ecg-bpm-val")&&(r.innerHTML=`
            <div class="afx-ecg-bpm">\u2665 <span class="afx-ecg-bpm-val">--</span> BPM</div>
            <div class="afx-ecg-rhythm">--</div>
        `);let s=r?r.querySelector(".afx-ecg-bpm-val"):null,l=r?r.querySelector(".afx-ecg-rhythm"):null,a=localStorage.getItem("ankifx_ecg_rhythm")||"sinus";Oe.controls=[{type:"button",id:"ecg-trigger",label:a==="sinus"?"\u26A1 TRIGGER ARRHYTHMIA":"\u{1F49A} RESTORE SINUS",onClick:()=>{let T=localStorage.getItem("ankifx_ecg_rhythm")||"sinus",z;if(T==="sinus"){let Y=["first_degree","mobitz_1","mobitz_2","third_degree","st_elevation","afib","a_flutter","torsades"];z=Y[Math.floor(Math.random()*Y.length)]}else z="sinus";localStorage.setItem("ankifx_ecg_rhythm",z),localStorage.setItem("ankifx_ecg_trigger_time",Date.now())}}];let n=200,u=40,d=120,c=25,h=5,m=new Float32Array(4096),p=0,f=0,g=0,y=0,w=0,x=0,k=0,E=100,P=.6,b=72,C=0,v="sinus",M=25+Math.random()*15,F=0,I=["first_degree","mobitz_1","mobitz_2","third_degree","st_elevation","afib","a_flutter","torsades"],A=0;function U(){p<he&&(p=he)}let L=(T,z,Y,$)=>$*Math.exp(-((T-z)**2)/(2*Y**2));function B(T){return L(T,.15,.03,.12)}function N(T){return L(T,.03,.03,.12)}function j(T,z){let Y=z%4;return Y===0?L(T,.17,.03,.12):Y===1?L(T,.1,.03,.12):Y===2?L(T,.03,.03,.12):L(T,.15,.03,.12)}function Q(T){return L(T,.08,.03,.12)}function R(T){return .035*Math.sin(T*Math.PI*40)+.015*Math.sin(T*Math.PI*96)+.008*Math.sin(T*Math.PI*176)}function q(T){return .085*(T*4%1-.5)}function W(T,z){let Y=Math.sin(T*Math.PI*2)*.58+Math.sin(T*Math.PI*4)*.16,$=Math.sin(z*1.2);return Y*$}function H(T,z=!1){let Y=0;return Y+=L(T,.33,.008,-.08),Y+=L(T,.36,.012,1),Y+=L(T,.39,.008,-.12),z&&(Y+=L(T,.46,.07,.38)),Y+=L(T,.56,.04,.22),Y}function oe(T,z,Y){let $=T%1,ie=Math.floor(T);return z==="sinus"?B($)+H($,!1):z==="first_degree"?N($)+H($,!1):z==="mobitz_1"?ie%4===3?j($,ie):j($,ie)+H($,!1):z==="mobitz_2"?ie%3===2?Q($):Q($)+H($,!1):z==="st_elevation"?B($)+H($,!0):z==="afib"?R($)+H($,!1):z==="a_flutter"?q($)+H($,!1):z==="torsades"?W($,Y):0}function fe(T,z){let Y=T%1,$=z%1,ie=L(Y,.15,.03,.12),we=L($,.33,.008,-.08)+L($,.36,.012,1)+L($,.39,.008,-.12)+L($,.56,.04,.22);return ie+we}function Pe(){e.strokeStyle="rgba(60, 0, 0, 0.15)",e.lineWidth=.5,e.beginPath();for(let T=0;T<he;T+=h)e.moveTo(T,0),e.lineTo(T,$e);for(let T=0;T<$e;T+=h)e.moveTo(0,T),e.lineTo(he,T);e.stroke(),e.strokeStyle="rgba(80, 0, 0, 0.3)",e.lineWidth=1,e.beginPath();for(let T=0;T<he;T+=c)e.moveTo(T,0),e.lineTo(T,$e);for(let T=0;T<$e;T+=c)e.moveTo(0,T),e.lineTo(he,T);e.stroke()}let tt=-1,ot="";function Ye(){if(!r)return;let T=.5+C*.5;r.style.opacity=T;let z="SINUS RHYTHM";v==="first_degree"?z="1\xB0 AV BLOCK":v==="mobitz_1"?z="2\xB0 AV (MOBITZ 1)":v==="mobitz_2"?z="2\xB0 AV (MOBITZ 2)":v==="third_degree"?z="3\xB0 AV BLOCK":v==="st_elevation"?z="ST ELEVATION":v==="afib"?z="ATRIAL FIBRILLATION":v==="a_flutter"?z="ATRIAL FLUTTER":v==="torsades"&&(z="TORSADES DE POINTES"),s&&b!==tt&&(s.textContent=b,tt=b),l&&z!==ot&&(l.textContent=z,ot=z)}function Be(T){y||(y=T);let z=Math.min((T-y)/1e3,.05);y=T,g+=z,U();let Y=localStorage.getItem("ankifx_ecg_rhythm")||"sinus",$=parseInt(localStorage.getItem("ankifx_ecg_trigger_time")||"0");if($>F){if(F=$,v=Y,M=g+25+Math.random()*15,v!=="sinus"){let K=I.indexOf(v);K!==-1&&(A=(K+1)%I.length)}v==="afib"&&(E=70+Math.floor(Math.random()*60),P=60/E),Oe.controls&&Oe.controls[0]&&(Oe.controls[0].label=v==="sinus"?"\u26A1 TRIGGER ARRHYTHMIA":"\u{1F49A} RESTORE SINUS",AnkiFX.renderEffectControls(Oe))}g>=M&&(v==="sinus"?(v=I[A],A=(A+1)%I.length):v="sinus",localStorage.setItem("ankifx_ecg_rhythm",v),M=g+25+Math.random()*15,v==="afib"&&(E=70+Math.floor(Math.random()*60),P=60/E),Oe.controls&&Oe.controls[0]&&(Oe.controls[0].label=v==="sinus"?"\u26A1 TRIGGER ARRHYTHMIA":"\u{1F49A} RESTORE SINUS",AnkiFX.renderEffectControls(Oe)));let ie=72;v==="third_degree"?ie=35:v==="mobitz_1"||v==="mobitz_2"?ie=68:v==="afib"?ie=E:v==="a_flutter"?ie=75:v==="torsades"&&(ie=220);let we=v==="afib"?P:60/ie,Me=w,Ae=x,Ie=k;if(v==="third_degree"?(x+=z/(60/88),k+=z/(60/ie)):w+=z/we,v!=="third_degree"){let K=Math.floor(Me);Math.floor(w)>K&&v==="afib"&&(E=70+Math.floor(Math.random()*65),P=60/E)}if(v==="third_degree")Math.floor(Ie-.36)<Math.floor(k-.36)&&(C=1,b=ie+Math.floor(Math.random()*3)-1);else if(Math.floor(Me-.36)<Math.floor(w-.36)){let K=Math.floor(w-.36),de=!1;v==="mobitz_1"?de=K%4===3:v==="mobitz_2"&&(de=K%3===2),de||(C=1,b=Math.floor(ie),v!=="torsades"&&v!=="a_flutter"&&(b+=Math.floor(Math.random()*5)-2))}C=Math.max(0,C-z*4);let Le=n*z,it=f+Le,Co=Math.floor(f),V=Math.floor(it);for(let K=Co;K<=V;K++){let de=K%he,ke=(K-f)/Le;if(v==="third_degree"){let Se=Ae+(x-Ae)*ke,Po=Ie+(k-Ie)*ke;m[de]=fe(Se,Po)}else{let Se=Me+(w-Me)*ke;m[de]=oe(Se,v,g)}}f=it,f>=he&&(f-=he),e.fillStyle="#000000",e.fillRect(0,0,he,$e),Pe();let X=$e*.55,te=$e*.35,se=Math.floor(f)%he,J=4;e.save(),e.lineCap="round",e.lineJoin="round";for(let K=0;K<3;K++){K===0?(e.lineWidth=15,e.strokeStyle="rgb(200, 0, 0)"):K===1?(e.lineWidth=7,e.strokeStyle="rgb(255, 15, 15)"):(e.lineWidth=2.4,e.strokeStyle="rgb(255, 175, 175)");for(let de=0;de<he;de+=J){let ke=se-de;if(ke<0&&(ke+=he),ke>he-u)continue;let Se=1,Po=he-u-d;if(ke>Po&&(Se=1-(ke-Po)/d,Se=Math.max(0,Se)),Se<=0)continue;let Mo=0;ke<12&&(Mo=1-ke/12),K===0?e.globalAlpha=Se*(.07+Mo*.13):K===1?e.globalAlpha=Se*(.28+Mo*.32):e.globalAlpha=Se*(.85+Mo*.15),e.beginPath();let Ia=X-m[de]*te;e.moveTo(de,Ia);let _o=Math.min(de+J,he);for(let Ft=de+1;Ft<_o;Ft++){let La=X-m[Ft]*te;e.lineTo(Ft,La)}if(_o<he){let Ft=X-m[_o]*te;e.lineTo(_o,Ft)}e.stroke()}}e.globalAlpha=1,e.restore(),e.save();let Ne=e.createLinearGradient(se-3,0,se+3,0);Ne.addColorStop(0,"rgba(255, 0, 0, 0)"),Ne.addColorStop(.5,"rgba(255, 50, 50, 0.4)"),Ne.addColorStop(1,"rgba(255, 0, 0, 0)"),e.fillStyle=Ne,e.fillRect(se-3,0,6,$e),e.restore(),Ye(),Vt=requestAnimationFrame(Be)}Vt=requestAnimationFrame(Be)}function $a(){Vt&&(cancelAnimationFrame(Vt),Vt=null);let o=document.getElementById("afx-ecg-panel");o&&o.remove()}var Wt=null,Ri,zi,dr={id:"fire",name:"Doom Fire",run:Ga,stop:Va,onResize:(o,t)=>{Ri=o,zi=t},preferredTrack:{title:"Doom 3 BFG Edition",trackTitle:"DOOM E1M1"},marqueeFont:{color:"#ffffff",shadowColor:"rgba(0,0,0,0.8)",shadowBlur:5}},Xa=[[7,7,7],[31,7,7],[47,15,7],[71,15,7],[87,23,7],[103,31,7],[119,31,7],[143,39,7],[159,47,7],[175,63,7],[191,71,7],[199,71,7],[223,79,7],[223,87,7],[223,87,7],[215,95,7],[215,95,7],[215,103,15],[207,111,15],[207,119,15],[207,127,15],[207,135,23],[199,135,23],[199,143,23],[199,151,31],[191,159,31],[191,159,31],[191,167,39],[191,167,39],[191,175,47],[183,175,47],[183,183,47],[183,183,55],[207,207,111],[223,223,159],[239,239,199],[255,255,255]];function Ga(o,t){let e=o.ctx2d;Ri=o.width,zi=o.height;let i=320,r=168,s=new Uint8Array(i*r),l=e.createImageData(i,r),a=l.data,n=document.createElement("canvas");n.width=i,n.height=r;let u=n.getContext("2d");function d(){s.fill(0);for(let f=0;f<i;f++)s[(r-1)*i+f]=36}function c(f){let g=s[f];if(g===0)s[f-i]=0;else{let y=Math.floor(Math.random()*3),w=f-y+1;s[w-i]=g-(y&1)}}function h(){for(let f=0;f<i;f++)for(let g=1;g<r;g++)c(g*i+f)}function m(){for(let f=0;f<s.length;f++){let g=s[f],y=Xa[g],w=f*4;a[w]=y[0],a[w+1]=y[1],a[w+2]=y[2],a[w+3]=255}}d();function p(){h(),m(),u.putImageData(l,0,0),e.save(),e.imageSmoothingEnabled=!1,e.drawImage(n,0,0,Ri,zi),e.restore(),Wt=requestAnimationFrame(p)}Wt=requestAnimationFrame(p)}function Va(){Wt&&(cancelAnimationFrame(Wt),Wt=null)}var br=1.6180339887,io=null,ne,le,re=parseInt(localStorage.getItem("ankifx_geometry_mode")||"0",10),Re=["unity","light","flow","fractal"];(isNaN(re)||re<0||re>=Re.length)&&(re=0);var vt=360,be=16,S=new Float32Array(5760),Ui=new Float32Array(360),Bi=new Float32Array(360),gt=0,xt=1,nt=2,st=3,Je=4,Ze=5,Kt=6,Jt=7,Rt=8,ao=9,no=10,Ro=11,zo=12,Oo=13,qo=14,jo=15,hr=!1,Uo=!0,ce=0,_e=0,pe=null,so=null,Lt=null,Dt=null,Qe=0,Zt=0,Io=null,Ho=1,at=null,Oi=re,Ke=1,vr=1,Wa=1/120,Qt=255,eo=255,to=255,Ya=240,Ka=180,Ja=60,pr=[{h:220,s:85,l:52},{h:174,s:78,l:44},{h:235,s:70,l:38},{h:42,s:92,l:56}],Za={unity:.28,light:.35,flow:.18,fractal:.22},Qa={unity:.95,light:.9,flow:.85,fractal:.93},Ni={unity:[],light:[],flow:[],fractal:[]},ro=[],en={unity:.22,light:.15,flow:.1,fractal:.2},Bo={},No={},Lo={},Do={};function tn(){for(let o=4;o<=13;o++){let t=Math.PI*2/o,e=new Float32Array(o+1),i=new Float32Array(o+1);for(let r=0;r<=o;r++)e[r]=Math.cos(r*t),i[r]=Math.sin(r*t);Bo[o]=e,No[o]=i,Lo[o]=Math.cos(Math.PI/o),Do[o]=Math.sin(Math.PI/o)}}tn();var Yt={angle:0,curvature:0,huePhase:0,amplitude:0};function yr(o,t,e){let i=Math.sqrt(o*o+t*t),r=Math.atan2(t,o),s=Math.sin(i*4-e*.4),l=Math.cos(r*3+e*.24),a=Math.sin(i*2.2+r*2-e*.31);return Yt.angle=r+Math.PI*.5+s*l*.6+a*.2,Yt.curvature=s*.5+.5,Yt.huePhase=45+175*(.5-.5*Math.cos(e*.033+i*.4)),Yt.amplitude=.5+.25*s+.25*l,Yt}function zt(o,t,e){return yr(o,t,e)}var lt={r:0,g:0,b:0},mr={};function wr(o,t,e){let r=(o%1+1)%1*4,s=Math.floor(r)%4,l=(s+1)%4,a=r-Math.floor(r),n=pr[s],u=pr[l],d=n.h,c=u.h,h=c-d;h>180?c-=360:h<-180&&(c+=360);let m=((d+(c-d)*a)%360+360)%360,p=n.s+(u.s-n.s)*a+(t-.5)*16,f=n.l+(u.l-n.l)*a+(t-.5)*16,g=Math.min(100,Math.max(0,p))/100,y=Math.min(100,Math.max(0,f))/100,w=E=>(E+m/30)%12,x=g*Math.min(y,1-y),k=E=>y-x*Math.max(-1,Math.min(w(E)-3,9-w(E),1));e.r=Math.min(255,Math.max(0,k(0)*255))|0,e.g=Math.min(255,Math.max(0,k(8)*255))|0,e.b=Math.min(255,Math.max(0,k(4)*255))|0}function on(o){let t=zt(0,0,o),e=(t.huePhase-45)/175;wr(e,t.amplitude,lt),Qt=lt.r,eo=lt.g,to=lt.b}function ct(o,t,e){let i=Math.min(1,Math.max(0,(o-45)/175)),r=i*63|0,s=Math.min(31,Math.max(0,e*31|0)),l=Math.min(63,Math.max(0,t*63|0)),a=r<<11|s<<6|l,n=mr[a];return n===void 0&&(wr(i,e,lt),n=mr[a]=`rgba(${lt.r},${lt.g},${lt.b},${t.toFixed(2)})`),n}function rn(o,t,e=.75){return ct(o,t,e)}function an(o,t,e){let i=o*175+45;return ct(i,e,t)}function qi(o,t,e){let i=Math.min(1,Math.max(0,(e-o)/(t-o)));return i*i*(3-2*i)}function nn(o,t){let e=Math.sqrt(o*o+t*t);return .97-.09*qi(.4,1,e)}function kr(){if(!so)return;let o=Qa[Re[re]];for(let t=0;t<_e;t++){let e=((t+.5)/_e-.5)*2;for(let i=0;i<ce;i++){let r=((i+.5)/ce-.5)*2;so[t*ce+i]=nn(r,e)*(o/.97)}}}function Sr(){let t=Math.floor((ne||400)/4),e=Math.floor((le||800)/4);(t!==ce||e!==_e)&&(ce=t,_e=e,pe=new Float32Array(ce*_e),so=new Float32Array(ce*_e),kr())}function ji(o,t){if(!pe)return 0;let e=Math.min(1,Math.max(-1,o)),i=Math.min(1,Math.max(-1,t)),r=e*.5+.5,s=i*.5+.5,l=r*(ce-1),a=s*(_e-1),n=Math.min(ce-1,Math.max(0,Math.floor(l))),u=Math.min(ce-1,n+1),d=Math.min(_e-1,Math.max(0,Math.floor(a))),c=Math.min(_e-1,d+1),h=l-n,m=a-d,p=pe[d*ce+n],f=pe[d*ce+u],g=pe[c*ce+n],y=pe[c*ce+u];return(1-m)*((1-h)*p+h*f)+m*((1-h)*g+h*y)}function gr(o,t,e,i){if(!pe)return;let r=o*.5+.5,s=t*.5+.5;if(r>=0&&r<1&&s>=0&&s<1){let l=Math.min(ce-1,Math.max(0,Math.floor(r*ce))),n=Math.min(_e-1,Math.max(0,Math.floor(s*_e)))*ce+l;pe[n]=Math.min(1,pe[n]+e*i)}}function sn(o){let t=[],e=o*o,i=-1.1,s=1.1-i,l=o,a=Math.ceil(s/l),n=a,u=a*n,d=Array.from({length:u},()=>[]);for(let h=0;h<vt;h++){let m=h*be,p=S[m+gt],f=S[m+xt],g=Math.min(a-1,Math.max(0,Math.floor((p-i)/l))),y=Math.min(n-1,Math.max(0,Math.floor((f-i)/l)));d[y*a+g].push(h)}let c=[[0,0],[1,0],[-1,1],[0,1],[1,1]];for(let h=0;h<n;h++)for(let m=0;m<a;m++){let p=h*a+m,f=d[p];if(f.length!==0)for(let g of c){let y=m+g[0],w=h+g[1];if(y>=0&&y<a&&w>=0&&w<n){let x=w*a+y,k=d[x];if(k.length===0)continue;let E=p===x;for(let P=0;P<f.length;P++){let b=f[P],C=b*be,v=S[C+gt],M=S[C+xt],F=E?P+1:0;for(let I=F;I<k.length;I++){let A=k[I],U=A*be,L=S[U+gt],B=S[U+xt],N=v-L,j=M-B;N*N+j*j<e&&t.push(b,A)}}}}}return t}function ln(){for(let o of Re){let t=en[o];Ni[o]=sn(t)}}function cn(){if(!hr){for(let o=0;o<vt;o++){let t=o/vt,e=2*Math.PI*t,i=2*Math.PI*(o*br%1),r=Math.cos(e)*Math.cos(i),s=Math.sin(e)*Math.sin(i),l=o*be;S[l+gt]=r,S[l+xt]=s,S[l+nt]=r,S[l+st]=s,S[l+Je]=0,S[l+Ze]=0,S[l+Kt]=0,S[l+Jt]=0,S[l+Rt]=0,S[l+ao]=0,S[l+no]=12,S[l+Ro]=0,S[l+zo]=1,S[l+Oo]=1,S[l+qo]=0,S[l+jo]=.5,Ui[o]=Math.sqrt(r*r+s*s),Bi[o]=Math.atan2(s,r)}ln(),hr=!0,Uo=!0,ro=Ni[Re[re]]}}var O={x:0,y:0,rot:0,len:0,kap:0,alpha:0,lw:1,sym:1};function fn(o,t,e,i,r,s){let a=o*be,n=(S[a+gt]*.5+.5)*ne,u=(S[a+xt]*.5+.5)*le;O.x=Math.round(n/60)*60,O.y=Math.round(u/60)*60,O.rot=t.curvature*Math.PI*.6+t.angle*.12,O.len=26+e*10,O.kap=(t.curvature-.5)*.3,O.sym=8,O.alpha=.52*Math.max(.35,t.amplitude)*(.4+.6*e),O.lw=1+e*1.5}function un(o,t,e,i,r,s){let l=Ui[o],a=Bi[o],n=Math.max(ne,le)*.95,u=o%3,c=Math.PI*2/12,h=u*(c/3),m=Math.round((a-h)/c),p=m*c+h,f=l/(1+(1-l)*2),g=l*.2+f*.8,y=i*.5-g*Math.PI*2,w=.9+Math.sin(y)*.1*t.amplitude,x=(m+u)%2===0,k=x?1.12:.88,E=n*.45*g*k*w;O.x=r+Math.cos(p)*E,O.y=s+Math.sin(p)*E;let P=Math.PI*.25,b=Math.cos(t.angle*2+g*Math.PI)*.12*t.curvature;O.rot=p+(x?P:-P)+b;let C=1/(g*g*8+.15);O.len=(8+e*20+C*25)*(1.2-g*.5),O.kap=g<.3?0:(t.curvature-.5)*.18*qi(.3,1,g),O.sym=12;let v=zt(0,0,i),M=1-g,F=t.amplitude*.4*(.3+.7*e)+M*M*.55*v.amplitude;O.alpha=Math.min(1,Math.max(.12,F)),O.lw=.5+e*2+M*3.5}function dn(o,t,e,i,r,s){let l=o*be;O.x=(S[l+nt]*.5+.5)*ne,O.y=(S[l+st]*.5+.5)*le,O.rot=t.angle,O.len=80+t.amplitude*40,O.kap=(t.curvature-.5)*3.5,O.sym=6,O.alpha=.28*(.5+.5*e),O.lw=.5+e*3}function hn(o,t,e,i,r,s){let l=Ui[o],a=Bi[o],n=Math.min(3,Math.floor(l*3)),d=Math.max(ne,le)*.85*.42*Ho;O.x=r+Math.cos(a+t.angle*.1)*l*d*1.8,O.y=s+Math.sin(a+t.angle*.1)*l*d*1.8,O.rot=(t.angle+t.curvature*3)*.1,O.len=d*.22*Math.pow(.6,n),O.kap=(t.curvature-.5)*.6,O.sym=6,O.alpha=.52*Math.max(.06,.52-n*.17),O.lw=Math.max(.5,1.4-n*.35)}var xr=[fn,un,dn,hn],bt={id:"geometry",name:"Geometry",run:kn,stop:Sn,onResize:(o,t)=>{ne=o,le=t,Sr(),Er(),at=null},controls:[{type:"button",id:"geometry-mode-switch",label:Hi(re),onClick:()=>pn()}],marqueeFont:{colorFn:(o,t)=>{let e=yr(0,0,o*.016),i=((e.huePhase-45)/175+t*.02)%1;return an(i,e.amplitude,1)},shadowColor:"rgba(255, 215, 0, 0.35)",shadowBlur:14}};function pn(){if(Oi=re,re=(re+1)%Re.length,Ke=0,ro=Ni[Re[re]],Re[re]==="flow")for(let o=0;o<vt;o++){let t=o*be;S[t+nt]=S[t+gt],S[t+st]=S[t+xt]}Re[re]==="fractal"&&pe&&pe.fill(0),localStorage.setItem("ankifx_geometry_mode",re),bt.controls?.[0]&&(bt.controls[0].label=Hi(re),typeof AnkiFX<"u"&&AnkiFX.renderEffectControls&&AnkiFX.renderEffectControls(bt)),kr()}function Hi(o){switch(Re[o]){case"unity":return"\u{1F441}\uFE0F UNITY MODE";case"light":return"\u2728 LIGHT MODE";case"flow":return"\u{1F30A} FLOW MODE";case"fractal":return"\u2744\uFE0F FRACTAL MOSAIC";default:return"\u{1F441}\uFE0F MODE"}}function Er(){Lt||(Lt=document.createElement("canvas"),Dt=Lt.getContext("2d")),Qe=Math.max(1,Math.floor((ne||400)/2)),Zt=Math.max(1,Math.floor((le||800)/2)),Lt.width=Qe,Lt.height=Zt,Dt.clearRect(0,0,Qe,Zt),Io=Dt.createImageData(Qe,Zt)}function mn(o){if(!Io||!pe)return;let t=new Uint32Array(Io.data.buffer);if(on(o),Re[re]==="unity")for(let i=0;i<_e;i++){let r=i*ce,s=i*2*Qe,l=(i*2+1)*Qe;for(let a=0;a<ce;a++){let n=pe[r+a],u=s+a*2,d=l+a*2;if(n<.005){t[u]=0,t[u+1]=0,t[d]=0,t[d+1]=0;continue}let c=Qt,h=eo,m=to;if(n>.3){let g=(n-.3)*2,y=Math.min(1,Math.max(0,g*g*(3-2*g)));c=Qt+(Ya-Qt)*y|0,h=eo+(Ka-eo)*y|0,m=to+(Ja-to)*y|0}let f=(n*255|0)<<24|m<<16|h<<8|c;t[u]=f,t[u+1]=f,t[d]=f,t[d+1]=f}}else for(let i=0;i<_e;i++){let r=i*ce,s=i*2*Qe,l=(i*2+1)*Qe;for(let a=0;a<ce;a++){let n=pe[r+a],u=s+a*2,d=l+a*2;if(n<.005){t[u]=0,t[u+1]=0,t[d]=0,t[d+1]=0;continue}let h=(n*255|0)<<24|to<<16|eo<<8|Qt;t[u]=h,t[u+1]=h,t[d]=h,t[d+1]=h}}Dt.putImageData(Io,0,0)}function gn(o,t,e,i){let r=(18+8*i.amplitude)*Ho,s=o.createRadialGradient(t,e,0,t,e,r*2);s.addColorStop(0,rn(i.huePhase,.08*i.amplitude,i.amplitude)),s.addColorStop(1,"rgba(0,0,0,0)"),o.fillStyle=s,o.beginPath(),o.arc(t,e,r*2,0,Math.PI*2),o.fill()}function oo(o,t,e,i,r,s,l,a){if(Math.abs(l)<.001){let n=r*a*.5,u=s*a*.5;o.moveTo(t-n,e-u),o.lineTo(t+n,e+u)}else{let n=1/Math.abs(l),u=Math.min(Math.PI*.85,a/n*.5),d=l>0?1:-1,c=d===1?-s:s,h=d===1?r:-r,m=t+c*n,p=e+h*n,f=i+Math.PI-u*d,g=i+Math.PI+u*d;o.arc(m,p,n,f,g,l<0)}}function xn(o,t,e,i,r,s,l,a,n,u,d,c,h){o.strokeStyle=a;let m=Math.max(1,n),p=Bo[m],f=No[m],g=Math.cos(i),y=Math.sin(i),w=r>0?1:-1,x=Math.PI*2/m;o.lineWidth=l,o.beginPath();let k=i+w*Math.PI*.5;for(let F=0;F<m;F++){let I=g*p[F]-y*f[F],A=y*p[F]+g*f[F];oo(o,t,e,k,I,A,r,s),k+=x}o.stroke();let E=s*.45,P=l*.4;o.lineWidth=P,o.beginPath();let b=i+Math.PI/m,C=Math.cos(b),v=Math.sin(b),M=b+w*Math.PI*.5;for(let F=0;F<m;F++){let I=C*p[F]-v*f[F],A=v*p[F]+C*f[F];oo(o,t,e,M,I,A,r,E),M+=x}if(o.stroke(),u>.01){let F=Math.PI*2/(m+u),I=i+m*F,A=Bo[m+1],U=No[m+1],L=1+(A[m]-1)*u,B=0+(U[m]-0)*u,N=g*L-y*B,j=y*L+g*B,Q=I+w*Math.PI*.5;o.lineWidth=l,o.strokeStyle=ct(d,c*u,h),o.beginPath(),oo(o,t,e,Q,N,j,r,s),o.stroke();let R=I+Math.PI/(m+u),q=Lo[m]+(Lo[m+1]-Lo[m])*u,W=Do[m]+(-Do[m+1]-Do[m])*u,H=g*q-y*W,oe=y*q+g*W,fe=R+w*Math.PI*.5;o.lineWidth=P,o.strokeStyle=ct(d,c*u*.4,h),o.beginPath(),oo(o,t,e,fe,H,oe,r,E),o.stroke()}}function bn(o,t,e){let i=xr[re],r=xr[Oi],s=vr,l=re===2,a=re===2||Ke<1&&Oi===2;for(let n=0;n<vt;n++){let u=n*be,d=l?S[u+nt]:S[u+gt],c=l?S[u+st]:S[u+xt],h=zt(d,c,o),m=ji(d,c);if(a){let M=S[u+nt],F=S[u+st],I=Math.sqrt(M*M+F*F),A=Math.atan2(F,M),U=.28*qi(.05,.25,I),L=A+br/Math.max(.15,I)*U,B=.0012+h.amplitude*.0018;if(S[u+nt]+=(Math.cos(h.angle)*(1-U)+Math.cos(L)*U)*B,S[u+st]+=(Math.sin(h.angle)*(1-U)+Math.sin(L)*U)*B,Math.abs(S[u+nt])>1.1||Math.abs(S[u+st])>1.1){let N=Math.sqrt(Math.random())*1,j=Math.random()*Math.PI*2;S[u+nt]=Math.cos(j)*N,S[u+st]=Math.sin(j)*N}}S[u+qo]=h.huePhase,S[u+jo]=h.amplitude,i(n,h,m,o,t,e);let p=O.x,f=O.y,g=O.rot,y=O.len,w=O.kap,x=O.sym,k=O.alpha,E=O.lw;if(Ke<1){r(n,h,m,o,t,e);let M=O.x,F=O.y,I=O.rot,A=O.len,U=O.kap,L=O.alpha,B=O.lw,N=O.sym,j=g-I;j=Math.atan2(Math.sin(j),Math.cos(j)),S[u+Kt]=M+(p-M)*s,S[u+Jt]=F+(f-F)*s,S[u+ao]=I+j*s,S[u+no]=A+(y-A)*s,S[u+Ro]=U+(w-U)*s,S[u+Rt]=L+(k-L)*s,S[u+Oo]=B+(E-B)*s,S[u+zo]=N+(x-N)*s}else S[u+Kt]=p,S[u+Jt]=f,S[u+ao]=g,S[u+no]=y,S[u+Ro]=w,S[u+Rt]=k,S[u+Oo]=E,S[u+zo]=x;Uo?(S[u+Je]=S[u+Kt],S[u+Ze]=S[u+Jt]):(S[u+Je]+=(S[u+Kt]-S[u+Je])*.08,S[u+Ze]+=(S[u+Jt]-S[u+Ze])*.08);let P=S[u+Je],b=S[u+Ze],C=ne>0?(P/ne-.5)*2:0,v=le>0?(b/le-.5)*2:0;gr(C,v,.004,h.amplitude),a&&gr(-C,v,.002,h.amplitude)}Uo=!1}function vn(o,t){let e=zt(0,0,t),i=.06+.04*e.amplitude;o.lineWidth=.5,o.beginPath();for(let r=0;r<ro.length;r+=2){let s=ro[r],l=ro[r+1];S[s*be+Rt]<.005||S[l*be+Rt]<.005||(o.moveTo(S[s*be+Je],S[s*be+Ze]),o.lineTo(S[l*be+Je],S[l*be+Ze]))}o.strokeStyle=ct(e.huePhase,i,e.amplitude),o.stroke();for(let r=0;r<vt;r++){let s=r*be,l=S[s+Je],a=S[s+Ze],n=ne>0?(l/ne-.5)*2:0,u=le>0?(a/le-.5)*2:0,d=ji(n,u);if(d<.3)continue;let h=S[s+no]*.3*d,m=(d-.3)/.7*.25,p=S[s+qo],f=S[s+jo];o.strokeStyle=ct(p,m,f),o.lineWidth=.4,o.beginPath(),o.arc(l,a,h,0,Math.PI*2),o.stroke(),o.save(),o.translate(l,a),o.rotate(S[s+ao]),o.beginPath(),o.rect(-h,-h,h*2,h*2),o.stroke(),o.restore()}}function yn(o,t){let e=Math.min(1,Ho),i=30,r=Math.floor(ne/i),s=Math.floor(le/i),l=r*s;for(let a=0;a<l;a++){if(Math.random()>e)continue;let n=a%r,u=a/r|0,d=(n+.5)*i,c=(u+.5)*i,h=(d/ne-.5)*2,m=(c/le-.5)*2,p=ji(h,m);if(p<.25)continue;let f=zt(h,m,t),g=Math.round(4+p*8),y=i*.35*p,w=(p-.25)/.75*.35;o.strokeStyle=ct(f.huePhase,w,f.amplitude),o.lineWidth=.6,o.beginPath();let x=Bo[g],k=No[g],E=Math.cos(f.angle),P=Math.sin(f.angle),b=f.curvature*.4,C=b>0?1:-1,v=Math.PI*2/g,M=f.angle+C*Math.PI*.5;for(let F=0;F<g;F++){let I=E*x[F]-P*k[F],A=P*x[F]+E*k[F];oo(o,d,c,M,I,A,b,y),M+=v}o.stroke()}}function wn(o,t,e,i,r){let s=Re[re]==="flow";for(let l=0;l<(s?2:1);l++){l===1&&(t.save(),t.translate(ne,0),t.scale(-1,1));for(let a=0;a<vt;a++){let n=a*be,u=S[n+Rt];if(u<.005)continue;let d=S[n+zo],c=Math.max(1,Math.floor(d)),h=d-c,m=S[n+qo],p=S[n+jo],f=S[n+Je],g=S[n+Ze],y=S[n+ao],w=S[n+Ro],x=S[n+no],k=S[n+Oo];xn(t,f,g,y,w,x,k,ct(m,u,p),c,h,m,u,p)}l===1&&t.restore()}}function kn(o,t){let e=o.ctx2d;ne=o.width,le=o.height,Uo=!0;let i=0;bt.controls?.[0]&&(bt.controls[0].label=Hi(re)),Sr(),Er(),cn();function r(){let l=ne/2,a=le/2,n=Math.max(ne,le)*.85;at=e.createRadialGradient(l,a,0,l,a,n*.9),at.addColorStop(0,"rgba(2,3,12,0.35)"),at.addColorStop(.5,"rgba(0,0,0,0)"),at.addColorStop(1,"rgba(2,3,12,0.15)")}function s(){if(i+=.012,Ke<1&&(Ke=Math.min(1,Ke+Wa)),vr=Ke*Ke*(3-2*Ke),pe&&so)for(let d=0;d<pe.length;d++)pe[d]*=so[d];let l=zt(0,0,i);Ho=.97+l.amplitude*.06;let a=ne/2,n=le/2,u=Math.max(ne,le)*.85;e.globalCompositeOperation="source-over",e.fillStyle=`rgba(2, 2, 8, ${[.04,.05,.07,.06][re]})`,e.fillRect(0,0,ne,le),e.globalCompositeOperation="lighter",gn(e,a,n,l),bn(i,a,n),vn(e,i),wn(i,e,a,n,u),yn(e,i),mn(i),e.globalCompositeOperation="lighter",e.globalAlpha=Za[Re[re]],e.drawImage(Lt,0,0,ne,le),e.globalAlpha=1,e.globalCompositeOperation="source-over",at||r(),e.fillStyle=at,e.fillRect(0,0,ne,le),io=requestAnimationFrame(s)}io=requestAnimationFrame(s)}function Sn(){io&&(cancelAnimationFrame(io),io=null),at=null,pe&&pe.fill(0),Dt&&Dt.clearRect(0,0,Qe,Zt)}var $o=null;function Pr(o){$o=o}var En=["#c3e4ff","#6ec3f4","#eae2ff","#b9beff"];function Cr(o){return[(o>>16&255)/255,(o>>8&255)/255,(255&o)/255]}var $i=class{constructor(t,e,i,r){let s=this;s.canvas=t,s.gl=e,s.meshes=[],s.debug=()=>{};let l=s.gl;Object.defineProperties(s,{Material:{enumerable:!1,value:class{constructor(n,u,d={}){let c=this;function h(f,g){let y=l.createShader(f);return l.shaderSource(y,g),l.compileShader(y),l.getShaderParameter(y,l.COMPILE_STATUS)||console.error("[Gradient/WebGL] Shader compile error:",l.getShaderInfoLog(y)),y}function m(f,g){return Object.entries(f).map(([y,w])=>w.getDeclaration(y,g)).join(`
`)}c.uniforms=d,c.uniformInstances=[];let p=`
              precision highp float;
            `;c.vertexSource=`
              ${p}
              attribute vec4 position;
              attribute vec2 uv;
              attribute vec2 uvNorm;
              ${m(s.commonUniforms,"vertex")}
              ${m(d,"vertex")}
              ${n}
            `,c.Source=`
              ${p}
              ${m(s.commonUniforms,"fragment")}
              ${m(d,"fragment")}
              ${u}
            `,c.vertexShader=h(l.VERTEX_SHADER,c.vertexSource),c.fragmentShader=h(l.FRAGMENT_SHADER,c.Source),c.program=l.createProgram(),l.attachShader(c.program,c.vertexShader),l.attachShader(c.program,c.fragmentShader),l.linkProgram(c.program),c.vertexShader&&(l.detachShader(c.program,c.vertexShader),l.deleteShader(c.vertexShader)),c.fragmentShader&&(l.detachShader(c.program,c.fragmentShader),l.deleteShader(c.fragmentShader)),l.getProgramParameter(c.program,l.LINK_STATUS)||console.error("[Gradient/WebGL] Program link error:",l.getProgramInfoLog(c.program)),l.useProgram(c.program),c.attachUniforms(void 0,s.commonUniforms),c.attachUniforms(void 0,c.uniforms)}attachUniforms(n,u){let d=this;n===void 0?Object.entries(u).forEach(([c,h])=>{d.attachUniforms(c,h)}):u.type==="array"?u.value.forEach((c,h)=>d.attachUniforms(`${n}[${h}]`,c)):u.type==="struct"?Object.entries(u.value).forEach(([c,h])=>d.attachUniforms(`${n}.${c}`,h)):d.uniformInstances.push({uniform:u,location:l.getUniformLocation(d.program,n)})}}},Uniform:{enumerable:!1,value:class{constructor(n){this.type="float",Object.assign(this,n),this.typeFn={float:"1f",int:"1i",vec2:"2fv",vec3:"3fv",vec4:"4fv",mat4:"Matrix4fv"}[this.type]||"1f",this.update()}update(n){this.value!==void 0&&l[`uniform${this.typeFn}`](n,this.typeFn.substring(0,6)==="Matrix"?this.transpose:this.value,this.typeFn.substring(0,6)==="Matrix"?this.value:null)}getDeclaration(n,u,d){let c=this;if(c.excludeFrom!==u){if(c.type==="array")return c.value[0].getDeclaration(n,u,c.value.length)+`
const int ${n}_length = ${c.value.length};`;if(c.type==="struct"){let h=n.replace("u_","");return h=h.charAt(0).toUpperCase()+h.slice(1),`uniform struct ${h} 
{
`+Object.entries(c.value).map(([m,p])=>p.getDeclaration(m,u).replace(/^uniform/,"")).join("")+`
} ${n}${d>0?`[${d}]`:""};`}return`uniform ${c.type} ${n}${d>0?`[${d}]`:""};`}}}},PlaneGeometry:{enumerable:!1,value:class{constructor(n,u,d,c,h){l.createBuffer(),this.attributes={position:new s.Attribute({target:l.ARRAY_BUFFER,size:3}),uv:new s.Attribute({target:l.ARRAY_BUFFER,size:2}),uvNorm:new s.Attribute({target:l.ARRAY_BUFFER,size:2}),index:new s.Attribute({target:l.ELEMENT_ARRAY_BUFFER,size:3,type:l.UNSIGNED_SHORT})},this.setTopology(d,c),this.setSize(n,u,h)}setTopology(n=1,u=1){let d=this;d.xSegCount=n,d.ySegCount=u,d.vertexCount=(d.xSegCount+1)*(d.ySegCount+1),d.quadCount=d.xSegCount*d.ySegCount*2,d.attributes.uv.values=new Float32Array(2*d.vertexCount),d.attributes.uvNorm.values=new Float32Array(2*d.vertexCount),d.attributes.index.values=new Uint16Array(3*d.quadCount);for(let c=0;c<=d.ySegCount;c++)for(let h=0;h<=d.xSegCount;h++){let m=c*(d.xSegCount+1)+h;if(d.attributes.uv.values[2*m]=h/d.xSegCount,d.attributes.uv.values[2*m+1]=1-c/d.ySegCount,d.attributes.uvNorm.values[2*m]=h/d.xSegCount*2-1,d.attributes.uvNorm.values[2*m+1]=1-c/d.ySegCount*2,h<d.xSegCount&&c<d.ySegCount){let p=c*d.xSegCount+h;d.attributes.index.values[6*p]=m,d.attributes.index.values[6*p+1]=m+1+d.xSegCount,d.attributes.index.values[6*p+2]=m+1,d.attributes.index.values[6*p+3]=m+1,d.attributes.index.values[6*p+4]=m+1+d.xSegCount,d.attributes.index.values[6*p+5]=m+2+d.xSegCount}}d.attributes.uv.update(),d.attributes.uvNorm.update(),d.attributes.index.update()}setSize(n=1,u=1,d="xz"){let c=this;c.width=n,c.height=u,c.orientation=d,(!c.attributes.position.values||c.attributes.position.values.length!==3*c.vertexCount)&&(c.attributes.position.values=new Float32Array(3*c.vertexCount));let h=n/-2,m=u/-2,p=n/c.xSegCount,f=u/c.ySegCount;for(let g=0;g<=c.ySegCount;g++){let y=m+g*f;for(let w=0;w<=c.xSegCount;w++){let x=h+w*p,k=g*(c.xSegCount+1)+w;c.attributes.position.values[3*k+"xyz".indexOf(d[0])]=x,c.attributes.position.values[3*k+"xyz".indexOf(d[1])]=-y}}c.attributes.position.update()}}},Mesh:{enumerable:!1,value:class{constructor(n,u){let d=this;d.geometry=n,d.material=u,d.wireframe=!1,d.attributeInstances=[],Object.entries(d.geometry.attributes).forEach(([c,h])=>{d.attributeInstances.push({attribute:h,location:h.attach(c,d.material.program)})}),s.meshes.push(d)}draw(){l.useProgram(this.material.program),this.material.uniformInstances.forEach(({uniform:n,location:u})=>n.update(u)),this.attributeInstances.forEach(({attribute:n,location:u})=>n.use(u)),l.drawElements(this.wireframe?l.LINES:l.TRIANGLES,this.geometry.attributes.index.values.length,l.UNSIGNED_SHORT,0)}remove(){s.meshes=s.meshes.filter(n=>n!==this)}}},Attribute:{enumerable:!1,value:class{constructor(n){this.type=l.FLOAT,this.normalized=!1,this.buffer=l.createBuffer(),Object.assign(this,n),this.update()}update(){this.values!==void 0&&(l.bindBuffer(this.target,this.buffer),l.bufferData(this.target,this.values,l.STATIC_DRAW))}attach(n,u){let d=l.getAttribLocation(u,n);return this.target===l.ARRAY_BUFFER&&(l.enableVertexAttribArray(d),l.vertexAttribPointer(d,this.size,this.type,this.normalized,0,0)),d}use(n){l.bindBuffer(this.target,this.buffer),this.target===l.ARRAY_BUFFER&&(l.enableVertexAttribArray(n),l.vertexAttribPointer(n,this.size,this.type,this.normalized,0,0))}}}});let a=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];s.commonUniforms={projectionMatrix:new s.Uniform({type:"mat4",value:a}),modelViewMatrix:new s.Uniform({type:"mat4",value:a}),resolution:new s.Uniform({type:"vec2",value:[1,1]}),aspectRatio:new s.Uniform({type:"float",value:1})},i&&r&&this.setSize(i,r)}setSize(t=640,e=480,i=1){this.width=t,this.height=e,this.gl.viewport(0,0,t*i,e*i),this.commonUniforms.resolution.value=[t,e],this.commonUniforms.aspectRatio.value=t/e}setOrthographicCamera(t=0,e=0,i=0,r=-2e3,s=2e3){this.commonUniforms.projectionMatrix.value=[2/this.width,0,0,0,0,2/this.height,0,0,0,0,2/(r-s),0,t,e,i,1]}render(){this.gl.clearColor(0,0,0,0),this.gl.clearDepth(1),this.meshes.forEach(t=>t.draw())}cleanup(){let t=this.gl;this.meshes.forEach(e=>{e.attributeInstances&&e.attributeInstances.forEach(({location:i})=>{typeof i=="number"&&i>=0&&t.disableVertexAttribArray(i)}),e.material&&e.material.program&&t.deleteProgram(e.material.program),e.geometry&&e.geometry.attributes&&Object.values(e.geometry.attributes).forEach(i=>{i.buffer&&t.deleteBuffer(i.buffer)})}),this.meshes=[]}},Xo=class{constructor(t,e,i,r){this.canvas=t,this.gl=e,this.width=i,this.height=r,this.angle=0,this.conf={presetName:"",wireframe:!1,density:[.06,.16],zoom:1,rotation:0,playing:!0},this.t=1253106,this.last=0,this.amp=320,this.seed=5,this.freqX=14e-5,this.freqY=29e-5,this.activeColors=[1,1,1,1],this.shaderFiles={vertex:`
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
            `},this.initGradientColors(),this.minigl=new $i(t,e,i,r),this.initMesh(),this.resize(),this.updateThemeAwareText()}initGradientColors(){this.sectionColors=En.map(t=>Cr(parseInt(t.substring(1),16)))}initMaterial(){this.uniforms={u_time:new this.minigl.Uniform({value:0}),u_shadow_power:new this.minigl.Uniform({value:5}),u_darken_top:new this.minigl.Uniform({value:0}),u_active_colors:new this.minigl.Uniform({value:this.activeColors,type:"vec4"}),u_global:new this.minigl.Uniform({value:{noiseFreq:new this.minigl.Uniform({value:[this.freqX,this.freqY],type:"vec2"}),noiseSpeed:new this.minigl.Uniform({value:5e-6})},type:"struct"}),u_vertDeform:new this.minigl.Uniform({value:{incline:new this.minigl.Uniform({value:Math.sin(this.angle)/Math.cos(this.angle)}),offsetTop:new this.minigl.Uniform({value:-.5}),offsetBottom:new this.minigl.Uniform({value:-.5}),noiseFreq:new this.minigl.Uniform({value:[3,4],type:"vec2"}),noiseAmp:new this.minigl.Uniform({value:this.amp}),noiseSpeed:new this.minigl.Uniform({value:10}),noiseFlow:new this.minigl.Uniform({value:3}),noiseSeed:new this.minigl.Uniform({value:this.seed})},type:"struct",excludeFrom:"fragment"}),u_baseColor:new this.minigl.Uniform({value:this.sectionColors[0],type:"vec3",excludeFrom:"fragment"}),u_waveLayers:new this.minigl.Uniform({value:[],excludeFrom:"fragment",type:"array"})};for(let t=1;t<this.sectionColors.length;t+=1)this.uniforms.u_waveLayers.value.push(new this.minigl.Uniform({value:{color:new this.minigl.Uniform({value:this.sectionColors[t],type:"vec3"}),noiseFreq:new this.minigl.Uniform({value:[2+t/this.sectionColors.length,3+t/this.sectionColors.length],type:"vec2"}),noiseSpeed:new this.minigl.Uniform({value:11+.3*t}),noiseFlow:new this.minigl.Uniform({value:6.5+.3*t}),noiseSeed:new this.minigl.Uniform({value:this.seed+10*t}),noiseFloor:new this.minigl.Uniform({value:.1}),noiseCeil:new this.minigl.Uniform({value:.63+.07*t})},type:"struct"}));return this.vertexShader=[this.shaderFiles.noise,this.shaderFiles.blend,this.shaderFiles.vertex].join(`

`),new this.minigl.Material(this.vertexShader,this.shaderFiles.fragment,this.uniforms)}initMesh(){this.material=this.initMaterial(),this.geometry=new this.minigl.PlaneGeometry,this.mesh=new this.minigl.Mesh(this.geometry,this.material)}resize(){let t=Math.min(window.devicePixelRatio||1,1.5);this.minigl.setSize(this.width,this.height,t),this.minigl.setOrthographicCamera(),this.xSegCount=Math.ceil(this.width*this.conf.density[0]),this.ySegCount=Math.ceil(this.height*this.conf.density[1]),this.mesh.geometry.setTopology(this.xSegCount,this.ySegCount),this.mesh.geometry.setSize(this.width,this.height),this.mesh.material.uniforms.u_shadow_power.value=this.width<600?5:6}animate=t=>{if(!this.conf.playing)return;this.last===0&&(this.last=t);let e=Math.min(t-this.last,1e3/15);this.last=t,this.t+=e,this.mesh.material.uniforms.u_time.value=this.t,this.minigl.render(),this.animationId=requestAnimationFrame(this.animate)};updateThemeAwareText(){if(!this.sectionColors||this.sectionColors.length===0)return;let t=0;this.sectionColors.forEach(s=>{let l=s[0],a=s[1],n=s[2],u=.299*l+.587*a+.114*n;t+=u});let e=t/this.sectionColors.length,i=e>.6?"#111111":"#ffffff",r=e>.6?"0 1px 2px rgba(255, 255, 255, 0.8)":"0 1px 3px rgba(0, 0, 0, 0.9), 0 2px 10px rgba(0, 0, 0, 0.6)";document.documentElement.style.setProperty("--afx-body-color",i),document.documentElement.style.setProperty("--afx-text-shadow",r),$o&&($o.marqueeFont={colorFn:(s,l)=>{if(!this.sectionColors||this.sectionColors.length===0)return"#ffffff";let a=(s*1.5+l*.25)%this.sectionColors.length,n=Math.floor(a),u=(n+1)%this.sectionColors.length,d=a-n,c=this.sectionColors[n],h=this.sectionColors[u],m=c[0]*(1-d)+h[0]*d,p=c[1]*(1-d)+h[1]*d,f=c[2]*(1-d)+h[2]*d,g=e>.6?.45:1;return`rgb(${Math.round(m*g*255)}, ${Math.round(p*g*255)}, ${Math.round(f*g*255)})`},shadowColor:e>.6?"rgba(0, 0, 0, 0.25)":"inherit",shadowBlur:16},window.AnkiFX&&window.AnkiFX.marquee&&window.AnkiFX.marquee.updateStyles($o.marqueeFont))}randomizeColors(){let t=()=>"#"+Math.floor(Math.random()*16777215).toString(16).padStart(6,"0"),e=[t(),t(),t(),t()];if(this.sectionColors=e.map(i=>Cr(parseInt(i.substring(1),16))),this.uniforms&&this.uniforms.u_baseColor&&this.uniforms.u_waveLayers&&this.uniforms.u_waveLayers.value){this.uniforms.u_baseColor.value=this.sectionColors[0];for(let i=0;i<this.uniforms.u_waveLayers.value.length;i++){let r=this.uniforms.u_waveLayers.value[i];r&&r.value&&r.value.color&&(r.value.color.value=this.sectionColors[i+1]||this.sectionColors[0])}}this.updateThemeAwareText()}destroy(){this.conf.playing=!1,this.animationId&&cancelAnimationFrame(this.animationId),this.minigl&&this.minigl.cleanup()}};var ve=null,Xi={id:"gradient",name:"Gradient",controls:[{type:"button",id:"gradient-randomize",label:"\u{1F3A8} RANDOMIZE",onClick:()=>{ve&&ve.randomizeColors()}}],run:(o,t)=>{ve&&ve.destroy(),ve=new Xo(o.canvasGL,o.gl,o.width,o.height),ve.conf.playing=!0,ve.last=0,ve.animationId=requestAnimationFrame(ve.animate)},stop:()=>{ve&&(ve.destroy(),ve=null),document.documentElement.style.removeProperty("--afx-body-color"),document.documentElement.style.removeProperty("--afx-text-shadow")},onResize:(o,t,e)=>{ve&&(ve.width=o,ve.height=t,ve.resize())},marqueeFont:{color:"#E6E6FA",shadowColor:"rgba(230, 230, 250, 0.6)",shadowBlur:8}};Pr(Xi);function Go(o,t,e){function i(u,d){let c=o.createShader(u);return o.shaderSource(c,d),o.compileShader(c),o.getShaderParameter(c,o.COMPILE_STATUS)?c:(console.error("[AnkiFX/WebGL] Shader compile error:",o.getShaderInfoLog(c)),o.deleteShader(c),null)}let r=i(o.VERTEX_SHADER,t),s=i(o.FRAGMENT_SHADER,e);if(!r||!s)return r&&o.deleteShader(r),s&&o.deleteShader(s),null;let l=o.createProgram();if(o.attachShader(l,r),o.attachShader(l,s),o.linkProgram(l),o.detachShader(l,r),o.detachShader(l,s),o.deleteShader(r),o.deleteShader(s),!o.getProgramParameter(l,o.LINK_STATUS))return console.error("[AnkiFX/WebGL] Program link error:",o.getProgramInfoLog(l)),o.deleteProgram(l),null;o.useProgram(l);let a=o.createBuffer();o.bindBuffer(o.ARRAY_BUFFER,a),o.bufferData(o.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,1,1]),o.STATIC_DRAW);let n=o.getAttribLocation(l,"position");return o.enableVertexAttribArray(n),o.vertexAttribPointer(n,2,o.FLOAT,!1,0,0),{program:l,buffer:a}}var Wo=null,yt,ft,co,wt,Yo=null,Ko=null,Fe={id:"julia",name:"Julia Set",run:Cn,stop:Pn,onResize:(o,t,e)=>{yt=o,ft=t,wt&&co&&wt.uniform2f(co,o*e,t*e)},preferredTrack:{title:"Acoustica Power Bundle 4",trackTitle:"AiR"},presets:[{name:"Black Hole",cRe:-.8,cIm:.156,zoomDepth:8,targetX:-.086441,targetY:-.239323},{name:"Electric Lightning",cRe:.285,cIm:.013,zoomDepth:6,targetX:-.106662,targetY:.656613},{name:"Golden Dragon",cRe:-.4,cIm:.6,zoomDepth:9,targetX:-.042175,targetY:-.036744},{name:"Filigree",cRe:-.70176,cIm:-.3842,zoomDepth:10.5,targetX:-.096904,targetY:-.656621},{name:"Fractal Storm",cRe:-.7269,cIm:.1889,zoomDepth:10.5,targetX:-.237086,targetY:.547981},{name:"Seahorse Spiral",cRe:-.74543,cIm:.11301,zoomDepth:7.5,targetX:-.529406,targetY:.072863}],marqueeFont:{color:"#FFF",outline:"#000"}},Jo=null,Zo=null,Vo={x:0,y:0},Mr=parseInt(localStorage.getItem("ankifx_julia_preset_index")||"0",10),lo=Fe.presets[Mr]||Fe.presets[0],G={presetIndex:Mr,cRe:lo.cRe,cIm:lo.cIm,zoomDepth:lo.zoomDepth,targetX:lo.targetX,targetY:lo.targetY,speed:parseFloat(localStorage.getItem("ankifx_julia_speed"))||.15};function Cn(o,t={}){wt=o.gl;let e=o.gl,i=o.ctx2d;yt=o.width,ft=o.height;let r=o.dpr,a=Go(e,`
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
    `);if(!a)return;let n=a.program;Yo=n,Ko=a.buffer;let u=e.getUniformLocation(n,"u_time"),d=e.getUniformLocation(n,"u_speed");co=e.getUniformLocation(n,"u_resolution");let c=e.getUniformLocation(n,"u_c"),h=e.getUniformLocation(n,"u_zoomDepth"),m=e.getUniformLocation(n,"u_target");e.uniform2f(co,yt*r,ft*r);let p=null,f=null,g=yt<480,y=parseInt(localStorage.getItem("ankifx_julia_preset_index")||"0",10);G.presetIndex=y;let w=Fe.presets[y]||Fe.presets[0];G.cRe=t.cRe!==void 0?t.cRe:w.cRe,G.cIm=t.cIm!==void 0?t.cIm:w.cIm,G.zoomDepth=t.zoomDepth!==void 0?t.zoomDepth:w.zoomDepth,G.targetX=t.targetX!==void 0?t.targetX:w.targetX,G.targetY=t.targetY!==void 0?t.targetY:w.targetY;let x={type:"select",id:"julia-preset",label:"PRESET",options:Fe.presets.map((P,b)=>({value:b,text:(g?"\u{1F4A0} ":"[ Preset: ")+P.name+(g?"":" ]")})),value:G.presetIndex,onChange:P=>{let b=parseInt(P);localStorage.setItem("ankifx_julia_preset_index",b),G.presetIndex=b;let C=Fe.presets[b];C&&(Object.assign(t,C),G.cRe=C.cRe,G.cIm=C.cIm,G.zoomDepth=C.zoomDepth,G.targetX=C.targetX,G.targetY=C.targetY,t.debug&&(AnkiFX.setControlValue("julia-cRe",C.cRe),AnkiFX.setControlValue("julia-cIm",C.cIm),AnkiFX.setControlValue("julia-zoomDepth",C.zoomDepth),AnkiFX.setControlValue("julia-targetX",C.targetX),AnkiFX.setControlValue("julia-targetY",C.targetY)),Fe.stop(),o.ctx2d&&o.ctx2d.clearRect(0,0,yt,ft),AnkiFX.startEffect(t,document.getElementById("ankifx-background"),t.marqueePosition,"julia"))}};if(t.debug?Fe.controls=[]:Fe.controls=[x],t.debug){Fe.controls.push({type:"slider",id:"julia-cRe",label:"C-RE",min:-1.5,max:1,step:.001,value:G.cRe,onChange:v=>{G.cRe=v}},{type:"slider",id:"julia-cIm",label:"C-IM",min:-1,max:1,step:.001,value:G.cIm,onChange:v=>{G.cIm=v}},{type:"slider",id:"julia-zoomDepth",label:"ZOOM",min:2,max:25,step:.1,value:G.zoomDepth,onChange:v=>{G.zoomDepth=v}},{type:"slider",id:"julia-targetX",label:"T-X",min:-2,max:2,step:1e-4,value:G.targetX,onChange:v=>{G.targetX=v}},{type:"slider",id:"julia-targetY",label:"T-Y",min:-2,max:2,step:1e-4,value:G.targetY,onChange:v=>{G.targetY=v}},{type:"slider",id:"julia-speed",label:"SPD",min:.005,max:.3,step:.005,value:G.speed,onChange:v=>{G.speed=v,localStorage.setItem("ankifx_julia_speed",v)}}),Fe.controls.push(x);let P=document.getElementById("afx-effect-controls-container");P&&(p=document.createElement("div"),p.id="afx-julia-debug-info",p.className="afx-control-row julia-debug-el",p.style.cssText="height: 20px !important; margin-bottom: 2px; pointer-events: none; justify-content: flex-end; opacity: 0.8; font-size: 11px !important; color: #ff00ff; border: none; background: transparent;",p.textContent="HOVER TO SEE TARGET COORDS",P.prepend(p)),f=(v,M,F)=>{let I=F*G.speed/Math.max(G.zoomDepth,1)%2,A=I>1?2-I:I,U=A<.5?4*Math.pow(A,3):1-Math.pow(-2*A+2,3)/2,B=2.2/Math.exp(U*G.zoomDepth),N=U*Math.PI*.5,j=(v-yt/2)/ft,Q=(ft/2-M)/ft,R=Math.cos(N),q=Math.sin(N),W=(R*j+q*Q)*B,H=(-q*j+R*Q)*B;return{tx:G.targetX+W,ty:G.targetY+H}};let b=v=>{if(v.target.closest("#afx-bottom-dock")||v.target.closest(".afx-dialog"))return;let M=performance.now()*.001-k,{tx:F,ty:I}=f(v.clientX,v.clientY,M);G.targetX=F,G.targetY=I,AnkiFX.setControlValue("julia-targetX",F),AnkiFX.setControlValue("julia-targetY",I)};window.addEventListener("mousedown",b),Jo=b;let C=v=>{Vo.x=v.clientX,Vo.y=v.clientY};window.addEventListener("mousemove",C),Zo=C}let k=performance.now()*.001;function E(){let P=performance.now()*.001-k;if(e.uniform1f(u,P),e.uniform1f(d,G.speed),e.uniform2f(c,G.cRe,G.cIm),e.uniform1f(h,G.zoomDepth),e.uniform2f(m,G.targetX,G.targetY),e.drawArrays(e.TRIANGLE_STRIP,0,4),i.clearRect(0,0,yt,ft),p&&f){let b=performance.now()*.001-k,{tx:C,ty:v}=f(Vo.x,Vo.y,b);p.textContent=`TARGET X: ${C.toFixed(6)}, Y: ${v.toFixed(6)}`}Wo=requestAnimationFrame(E)}E()}function Pn(){Wo&&(cancelAnimationFrame(Wo),Wo=null),Jo&&(window.removeEventListener("mousedown",Jo),Jo=null),Zo&&(window.removeEventListener("mousemove",Zo),Zo=null),document.querySelectorAll(".julia-debug-el").forEach(o=>o.remove()),wt&&(Yo&&wt.deleteProgram(Yo),Ko&&wt.deleteBuffer(Ko),Yo=null,Ko=null),wt=null,co=null}var fo=null,Ot=0,dt=0,D=null,ee=null,ut=[],Qo=0,uo=null,ge={x:-1e3,y:-1e3,dx:0,dy:0,down:!1},Fr=null,Tr={id:"lavalamp",name:"Lava Lamp",run:Tn,stop:Dn,onResize:An,marqueeFont:{color:"#ffccaa",shadowColor:"rgba(255, 100, 0, 0.8)",shadowBlur:10}},et=6,ei=class{constructor(t,e,i,r){this.pos={x:t,y:e},this.vel={x:0,y:-(Math.random()*.6+.3)},this.radius=i;let s=e/r;this.temperature=.15+s*.3+Math.random()*.15,this.buoyancy=0,this.noiseOffset=Math.random()*1e3,this.smoothSpeedY=0}update(t,e,i){this.pos.y>i*.8?this.temperature+=.05*t:this.pos.y>i*.6?this.temperature+=.02*t:this.pos.y<i*.2?this.temperature-=.04*t:this.pos.y<i*.4&&(this.temperature-=.015*t),this.temperature=Math.max(0,Math.min(1,this.temperature)),this.buoyancy=this.temperature*4-2,this.vel.y-=this.buoyancy*10*t;let r=Math.sin(this.noiseOffset+Qo*2e-4)*.1;this.vel.x+=r*t*.3;let s=1-Math.min(Math.abs(this.buoyancy)/.8,1),l=(e*.5-this.pos.x)*.003*s;this.vel.x+=l*t,this.pos.x<this.radius&&(this.vel.x+=(this.radius-this.pos.x)*2*t),this.pos.x>e-this.radius&&(this.vel.x-=(this.pos.x-(e-this.radius))*2*t);let a=-this.radius*.5;this.pos.y<a&&(this.vel.y+=(a-this.pos.y)*8*t);let n=i+this.radius*.5;this.pos.y>n&&(this.vel.y-=(this.pos.y-n)*8*t);let u=Math.pow(.97,t*60);this.vel.x*=u;let c=Math.abs(this.buoyancy)>.8,h=Math.pow(c?.994:.975,t*60);this.vel.y*=h;let m=Math.max(0,(this.pos.y-i*.82)/(i*.18)),p=Math.max(0,(i*.18-this.pos.y)/(i*.18)),f=Math.pow(.88,t*60*(m+p));if(this.vel.x*=f,ge.down){let g=this.pos.x-ge.x,y=this.pos.y-ge.y,w=Math.sqrt(g*g+y*y);if(w<200){let x=(200-w)/200;this.vel.x+=ge.dx*x*1.5,this.vel.y+=ge.dy*x*8}}this.smoothSpeedY+=(Math.abs(this.vel.y)-this.smoothSpeedY)*(1-Math.pow(.05,t)),this.pos.x+=this.vel.x*t,this.pos.y+=this.vel.y*t}},Mn=`
    attribute vec2 aPosition;
    varying vec2 vUv;
    void main() {
        vUv = aPosition * 0.5 + 0.5;
        // Match canvas 2D coordinates (Y=0 is top)
        vUv.y = 1.0 - vUv.y;
        gl_Position = vec4(aPosition, 0.0, 1.0);
    }
`,_n=`
    precision highp float;
    varying vec2 vUv;
    
    uniform vec2 uResolution;
    uniform float uTime;
    
    uniform vec4 uBlobs[${et}]; // x, y, radius, stretch
    uniform float uBlobTemp[${et}]; // temperature
    
    // Polynomial smooth minimum
    float smin(float a, float b, float k) {
        float h = clamp(0.5 + 0.5 * (b - a) / k, 0.0, 1.0);
        return mix(b, a, h) - k * h * (1.0 - h);
    }
    
    float map(vec2 p) {
        float d = 10000.0;
        for (int i = 0; i < ${et}; i++) {
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
`;function _r(o,t){let e=D.createShader(o);return D.shaderSource(e,t),D.compileShader(e),D.getShaderParameter(e,D.COMPILE_STATUS)?e:(console.error("[LavaLamp/WebGL] Shader compile error:",D.getShaderInfoLog(e)),D.deleteShader(e),null)}function Fn(){let o=_r(D.VERTEX_SHADER,Mn),t=_r(D.FRAGMENT_SHADER,_n);if(ee=D.createProgram(),D.attachShader(ee,o),D.attachShader(ee,t),D.linkProgram(ee),!D.getProgramParameter(ee,D.LINK_STATUS))return console.error("[LavaLamp/WebGL] Program link error:",D.getProgramInfoLog(ee)),D.deleteShader(o),D.deleteShader(t),!1;D.detachShader(ee,o),D.detachShader(ee,t),D.deleteShader(o),D.deleteShader(t),D.useProgram(ee),uo=D.createBuffer(),D.bindBuffer(D.ARRAY_BUFFER,uo);let e=new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]);D.bufferData(D.ARRAY_BUFFER,e,D.STATIC_DRAW);let i=D.getAttribLocation(ee,"aPosition");return D.enableVertexAttribArray(i),D.vertexAttribPointer(i,2,D.FLOAT,!1,0,0),ee.uResolution=D.getUniformLocation(ee,"uResolution"),ee.uTime=D.getUniformLocation(ee,"uTime"),ee.uBlobs=D.getUniformLocation(ee,"uBlobs"),ee.uBlobTemp=D.getUniformLocation(ee,"uBlobTemp"),!0}function Tn(o,t){if(D=o.gl,Fr=o.canvasGL,Ot=o.width,dt=o.height,!D){console.error("[LavaLamp] WebGL context required \u2014 cannot run effect.");return}if(!Fn())return;ut=[];let e=0;for(;ut.length<et&&e<200;){e++;let i=70+Math.random()*60,r=i+Math.random()*(Ot-i*2),s=i+Math.random()*(dt-i*2),l=!1;for(let a of ut){let n=a.pos.x-r,u=a.pos.y-s;if(Math.sqrt(n*n+u*u)<a.radius+i+10){l=!0;break}}l||ut.push(new ei(r,s,i,dt))}for(;ut.length<et;){let i=70+Math.random()*60,r=i+Math.random()*(Ot-i*2),s=i+Math.random()*(dt-i*2);ut.push(new ei(r,s,i,dt))}Qo=performance.now(),In(),fo=requestAnimationFrame(Ar)}function An(o,t,e){Ot=o,dt=t,D&&D.viewport(0,0,o*e,t*e)}function Ar(o){let t=Math.min((o-Qo)/1e3,.05);Qo=o;let e=new Float32Array(et*4),i=new Float32Array(et);for(let r=0;r<et;r++)ut[r].update(t,Ot,dt);for(let r=0;r<et;r++){let s=ut[r],l=Math.max(.85,1+Math.min(s.smoothSpeedY*.028,.7)*(.4+s.temperature*.6));e[r*4+0]=s.pos.x,e[r*4+1]=s.pos.y,e[r*4+2]=s.radius,e[r*4+3]=l,i[r]=s.temperature}D.useProgram(ee),D.uniform2f(ee.uResolution,Ot,dt),D.uniform1f(ee.uTime,o*.001),D.uniform4fv(ee.uBlobs,e),D.uniform1fv(ee.uBlobTemp,i),D.drawArrays(D.TRIANGLES,0,6),ge.dx=0,ge.dy=0,fo=requestAnimationFrame(Ar)}function ho(o){let t=Fr.getBoundingClientRect(),e=o.touches?o.touches[0]:o,i=e.clientX-t.left,r=e.clientY-t.top;if(ge.down&&o.type!=="mousedown"&&o.type!=="touchstart"){let s=i-ge.x,l=r-ge.y;Math.abs(s)<150&&Math.abs(l)<150&&(ge.dx=s,ge.dy=l)}ge.x=i,ge.y=r}function ti(o){ge.dx=0,ge.dy=0,ge.down=!0,ho(o)}function oi(){ge.down=!1}function In(){window.addEventListener("mousedown",ti),window.addEventListener("mousemove",ho),window.addEventListener("mouseup",oi),window.addEventListener("touchstart",ti,{passive:!0}),window.addEventListener("touchmove",ho,{passive:!0}),window.addEventListener("touchend",oi)}function Ln(){window.removeEventListener("mousedown",ti),window.removeEventListener("mousemove",ho),window.removeEventListener("mouseup",oi),window.removeEventListener("touchstart",ti),window.removeEventListener("touchmove",ho),window.removeEventListener("touchend",oi)}function Dn(){fo&&(cancelAnimationFrame(fo),fo=null),Ln(),D&&(D.clearColor(0,0,0,0),D.clear(D.COLOR_BUFFER_BIT),ee&&D.deleteProgram(ee),uo&&D.deleteBuffer(uo),ee=null,uo=null)}var ri=null,po,kt,mo,St,ai=null,ni=null,ci={id:"mandelbrot",name:"Mandelbrot",run:Rn,stop:zn,onResize:(o,t,e)=>{po=o,kt=t,St&&mo&&St.uniform2f(mo,o*e,t*e)},preferredTrack:{title:"Acoustica Power Bundle 4",trackTitle:"AiR"},marqueeFont:{color:"#FFF",outline:"#000"}},si=null,li=null,ii={x:0,y:0},me={targetX:-.743643887037151,targetY:.13182590420533,zoomDepth:11,speed:parseFloat(localStorage.getItem("ankifx_mandelbrot_speed"))||.15};function Rn(o,t={}){St=o.gl;let e=o.gl,i=o.ctx2d;po=o.width,kt=o.height;let r=o.dpr,a=Go(e,`
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
    `);if(!a)return;let n=a.program;ai=n,ni=a.buffer;let u=e.getUniformLocation(n,"u_time"),d=e.getUniformLocation(n,"u_speed"),c=e.getUniformLocation(n,"u_zoomDepth"),h=e.getUniformLocation(n,"u_target");mo=e.getUniformLocation(n,"u_resolution"),e.uniform2f(mo,po*r,kt*r);let m=null,p=null;if(t.debug){ci.controls=[{type:"slider",id:"mandelbrot-zoomDepth",label:"ZOOM",min:2,max:25,step:.1,value:me.zoomDepth,onChange:k=>{me.zoomDepth=k}},{type:"slider",id:"mandelbrot-targetX",label:"T-X",min:-2.5,max:1,step:1e-4,value:me.targetX,onChange:k=>{me.targetX=k}},{type:"slider",id:"mandelbrot-targetY",label:"T-Y",min:-1.5,max:1.5,step:1e-4,value:me.targetY,onChange:k=>{me.targetY=k}},{type:"slider",id:"mandelbrot-speed",label:"SPD",min:.005,max:.3,step:.005,value:me.speed,onChange:k=>{me.speed=k,localStorage.setItem("ankifx_mandelbrot_speed",k)}}];let y=document.getElementById("afx-effect-controls-container");y&&(m=document.createElement("div"),m.id="afx-mandelbrot-debug-info",m.className="afx-control-row mandelbrot-debug-el",m.style.cssText="height: 20px !important; margin-bottom: 2px; pointer-events: none; justify-content: flex-end; opacity: 0.8; font-size: 11px !important; color: #ff00ff; border: none; background: transparent;",m.textContent="HOVER TO SEE TARGET COORDS",y.prepend(m)),p=(k,E,P)=>{let b=P*me.speed/Math.max(me.zoomDepth,1)%2,C=b>1?2-b:b,v=C<.5?4*Math.pow(C,3):1-Math.pow(-2*C+2,3)/2,M=Math.exp(v*me.zoomDepth),F=(k-po/2)/kt,I=(kt/2-E)/kt;return{tx:me.targetX+F*(2.5/M),ty:me.targetY+I*(2.5/M)}};let w=k=>{if(k.target.closest("#afx-bottom-dock")||k.target.closest(".afx-dialog"))return;let E=performance.now()*.001-f,{tx:P,ty:b}=p(k.clientX,k.clientY,E);me.targetX=P,me.targetY=b,AnkiFX.setControlValue("mandelbrot-targetX",P),AnkiFX.setControlValue("mandelbrot-targetY",b)};window.addEventListener("mousedown",w),si=w;let x=k=>{ii.x=k.clientX,ii.y=k.clientY};window.addEventListener("mousemove",x),li=x}else ci.controls=[];let f=performance.now()*.001;function g(){let y=performance.now()*.001-f;if(e.uniform1f(u,y),e.uniform1f(d,me.speed),e.uniform1f(c,me.zoomDepth),e.uniform2f(h,me.targetX,me.targetY),e.drawArrays(e.TRIANGLE_STRIP,0,4),i.clearRect(0,0,po,kt),m&&p){let w=performance.now()*.001-f,{tx:x,ty:k}=p(ii.x,ii.y,w);m.textContent=`TARGET X: ${x.toFixed(6)}, Y: ${k.toFixed(6)}`}ri=requestAnimationFrame(g)}g()}function zn(){ri&&(cancelAnimationFrame(ri),ri=null),si&&(window.removeEventListener("mousedown",si),si=null),li&&(window.removeEventListener("mousemove",li),li=null),document.querySelectorAll(".mandelbrot-debug-el").forEach(o=>o.remove()),St&&(ai&&St.deleteProgram(ai),ni&&St.deleteBuffer(ni),ai=null,ni=null),St=null,mo=null}var go=null,di,fi,ui=16,ht=[];function Ir(){let o=Math.floor(di/ui);ht=[];for(let t=0;t<o;t++)ht[t]=Math.random()*-100}var Lr={id:"matrix",name:"Matrix",run:On,stop:Un,onResize:(o,t)=>{di=o,fi=t,Ir()},preferredTrack:{trackTitle:"nightfall"},marqueeFont:{color:"#0F0",shadowColor:"#0F0",shadowBlur:10}};function On(o,t){let e=o.ctx2d;di=o.width,fi=o.height,Ir();let i="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*]*";function r(){e.fillStyle="rgba(0, 0, 0, 0.1)",e.fillRect(0,0,di,fi),e.fillStyle="#0F0",e.font=ui+"px monospace";for(let s=0;s<ht.length;s++)if(ht[s]>0||Math.random()>.95){let l=i.charAt(Math.floor(Math.random()*i.length)),a=ht[s]*ui;e.fillText(l,s*ui,a),a>fi&&Math.random()>.975&&(ht[s]=0),ht[s]++}else ht[s]+=.5;go=requestAnimationFrame(r)}go=requestAnimationFrame(r)}function Un(){go&&(cancelAnimationFrame(go),go=null)}var Dr={id:"none",name:"None",run:Bn,stop:Nn,marqueeFont:{color:"#ffffff",shadowColor:"rgba(0,0,0,0.8)",shadowBlur:5}};function Bn(o,t){o.ctx2d.clearRect(0,0,o.width,o.height)}function Nn(){}var xo=null,xe,Xe,Et={id:"starfield",name:"Starfield",run:qn,stop:jn,onResize:(o,t)=>{xe=o,Xe=t},preferredTrack:{trackTitle:"star wars title"},marqueeFont:{color:"#FFE81F",shadowColor:"#FFE81F",shadowBlur:20,outline:"#000"}};function qn(o,t){let e=o.ctx2d;xe=o.width,Xe=o.height;let i=localStorage.getItem("ankifx_starfield_planets")!=="false";Et.controls=[{type:"button",id:"starfield-planet-toggle",label:i?"\u{1FA90} DISABLE PLANET":"\u{1FA90} ENABLE PLANET",onClick:()=>{i=!i,localStorage.setItem("ankifx_starfield_planets",i),Et.controls&&Et.controls[0]&&(Et.controls[0].label=i?"\u{1FA90} DISABLE PLANET":"\u{1FA90} ENABLE PLANET",AnkiFX.renderEffectControls(Et))}}];let r=[],s=8e3,l=new Uint8Array(512),a=new Uint8Array(256).map(()=>Math.random()*256);for(let w=0;w<512;w++)l[w]=a[w&255];let n=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]];function u(w,x,k,E){return w[0]*x+w[1]*k+w[2]*E}function d(w,x,k){let E,P,b,C,v=.3333333333333333,M=1/6,F=(w+x+k)*v,I=Math.floor(w+F),A=Math.floor(x+F),U=Math.floor(k+F),L=(I+A+U)*M,B=w-I+L,N=x-A+L,j=k-U+L,Q,R,q,W,H,oe;B>=N?N>=j?(Q=1,R=0,q=0,W=1,H=1,oe=0):B>=j?(Q=1,R=0,q=0,W=1,H=0,oe=1):(Q=0,R=0,q=1,W=1,H=0,oe=1):N<j?(Q=0,R=0,q=1,W=0,H=1,oe=1):B<j?(Q=0,R=1,q=0,W=0,H=1,oe=1):(Q=0,R=1,q=0,W=1,H=1,oe=0);let fe=B-Q+M,Pe=N-R+M,tt=j-q+M,ot=B-W+2*M,Ye=N-H+2*M,Be=j-oe+2*M,T=B-1+3*M,z=N-1+3*M,Y=j-1+3*M,$=I&255,ie=A&255,we=U&255,Me=.6-B*B-N*N-j*j;Me<0?E=0:(Me*=Me,E=Me*Me*u(n[l[$+l[ie+l[we]]]%12],B,N,j));let Ae=.6-fe*fe-Pe*Pe-tt*tt;Ae<0?P=0:(Ae*=Ae,P=Ae*Ae*u(n[l[$+Q+l[ie+R+l[we+q]]]%12],fe,Pe,tt));let Ie=.6-ot*ot-Ye*Ye-Be*Be;Ie<0?b=0:(Ie*=Ie,b=Ie*Ie*u(n[l[$+W+l[ie+H+l[we+oe]]]%12],ot,Ye,Be));let Le=.6-T*T-z*z-Y*Y;return Le<0?C=0:(Le*=Le,C=Le*Le*u(n[l[$+1+l[ie+1+l[we+1]]]%12],T,z,Y)),32*(E+P+b+C)}function c(w,x,k,E=3){let P=0,b=.5;for(let C=0;C<E;C++)P+=d(w,x,k)*b,w*=2,x*=2,k*=2,b*=.5;return P}let h={};class m{constructor(){this.active=!1,this.nextSpawn=Date.now()+2e3}reset(){let x=Math.random()*Math.PI*2,k=.2+Math.random()*.4;this.x=Math.cos(x)*xe*k,this.y=Math.sin(x)*Xe*k,this.z=xe,this.sizeBase=80+Math.random()*120,this.speed=.8,this.active=!0,this.type=1+Math.floor(Math.random()*2);let E=[{name:"ice",baseH:190+Math.random()*40,sat:60,l:70},{name:"inferno",baseH:Math.random()*40,sat:80,l:60},{name:"toxic",baseH:80+Math.random()*40,sat:70,l:60},{name:"ethereal",baseH:260+Math.random()*40,sat:60,l:75},{name:"classic",baseH:30+Math.random()*20,sat:50,l:80}],P=E[Math.floor(Math.random()*E.length)];h[P.name]?this.textureCanvas=h[P.name]:(this.generateGasGiantTexture(P),h[P.name]=this.textureCanvas),this.type===2&&(this.rings=Array.from({length:4},(b,C)=>({r1:1.6+C*.2,opacity:.2+Math.random()*.4})))}hslToRgb(x,k,E){x/=360,k/=100,E/=100;let P,b,C;if(k===0)P=b=C=E;else{let v=E<.5?E*(1+k):E+k-E*k,M=2*E-v,F=I=>(I<0&&(I+=1),I>1&&(I-=1),I<1/6?M+(v-M)*6*I:I<1/2?v:I<2/3?M+(v-M)*(2/3-I)*6:M);P=F(x+1/3),b=F(x),C=F(x-1/3)}return{r:P*255,g:b*255,b:C*255}}generateGasGiantTexture(x){let k=document.createElement("canvas");k.width=k.height=128;let E=k.getContext("2d"),P=E.createImageData(128,128),b=x.baseH,C=this.hslToRgb(b,x.sat,x.l),v=this.hslToRgb((b+20)%360,x.sat+10,x.l-10),M=this.hslToRgb((b-40+360)%360,x.sat+20,x.l-15),F=this.hslToRgb((b+60)%360,x.sat-20,x.l+10),I=(U,L,B)=>({r:U.r+(L.r-U.r)*B,g:U.g+(L.g-U.g)*B,b:U.b+(L.b-U.b)*B}),A=Math.random()*1e3;for(let U=0;U<128;U++)for(let L=0;L<128;L++){let B=U/128*10,N=L/128*10,j=Math.abs(c(0,B*.4,A,3)),Q=B+c(N*.5,B*.5,A)*j*4,R=N+c(B*.5,N*.5,A+50)*j*2,q=(c(0,Q*.8,A+100,4)+1)/2,W=(c(R*.1,Q*1.5,A+200,2)+1)/2,H=I(v,C,q);q>.7&&(H=I(H,F,(q-.7)*2)),W>.6&&(H=I(H,M,(W-.6)*1.5));let oe=1+c(R,Q,A+300,2)*.2,fe=(U*128+L)*4;P.data[fe]=Math.min(255,H.r*oe),P.data[fe+1]=Math.min(255,H.g*oe),P.data[fe+2]=Math.min(255,H.b*oe),P.data[fe+3]=255}E.putImageData(P,0,0),this.textureCanvas=k}update(){if(!this.active){Date.now()>this.nextSpawn&&this.reset();return}this.z-=this.speed,this.z<=0&&(this.active=!1,this.nextSpawn=Date.now())}draw(x){if(!this.active)return;let k=xe/2/this.z,E=this.x*k+xe/2,P=this.y*k+Xe/2,b=(1-this.z/xe)*this.sizeBase;if(E<-b*3||E>xe+b*3||P<-b*3||P>Xe+b*3)return;x.save(),x.translate(E,P),this.type===2&&(this.drawRings(x,b,!0),x.globalAlpha=1);let C=x.createRadialGradient(0,0,b*.9,0,0,b*1.5);C.addColorStop(0,"rgba(255, 255, 255, 0.15)"),C.addColorStop(1,"rgba(0,0,0,0)"),x.fillStyle=C,x.beginPath(),x.arc(0,0,b*1.5,0,Math.PI*2),x.fill(),x.save(),x.beginPath(),x.arc(0,0,b,0,Math.PI*2),x.clip(),x.globalAlpha=1,x.drawImage(this.textureCanvas,-b,-b,b*2,b*2);let v=x.createRadialGradient(-b*.5,-b*.5,b*.1,0,0,b);v.addColorStop(0,"rgba(255, 255, 255, 0.25)"),v.addColorStop(.5,"rgba(0, 0, 0, 0)"),v.addColorStop(1,"rgba(0, 0, 0, 0.4)"),x.fillStyle=v,x.fillRect(-b,-b,b*2,b*2),x.restore();let M=x.createRadialGradient(0,0,b*.7,0,0,b);M.addColorStop(1,"rgba(255,255,255,0.4)"),M.addColorStop(.8,"rgba(255,255,255,0)"),x.fillStyle=M,x.beginPath(),x.arc(0,0,b,0,Math.PI*2),x.fill(),this.type===2&&(this.drawRings(x,b,!1),x.globalAlpha=1),x.restore()}drawRings(x,k,E){x.save();let P=Math.PI/8;for(let b of this.rings)x.globalAlpha=b.opacity,x.strokeStyle="#E6E6FA",x.lineWidth=k*.15,x.beginPath(),x.ellipse(0,0,b.r1*k,b.r1*.3*k,P,0,Math.PI*2),x.stroke();x.restore()}}let p=new m,f=["#FFFFFF","#FFE4B5","#E0FFFF","#FFF0F5","#F0F8FF"];for(let w=0;w<s;w++)r.push({x:(Math.random()-.5)*xe*4,y:(Math.random()-.5)*Xe*4,z:Math.random()*xe,color:f[Math.floor(Math.random()*f.length)],sizeBase:2+Math.random()*2.5});let g=0;function y(){e.fillStyle="rgba(5, 5, 12, 1)",e.fillRect(0,0,xe,Xe);let w=xe/2,x=Xe/2;g+=.01,i?(p.update(),p.draw(e)):p.active=!1;for(let k=0;k<s;k++){let E=r[k],P=E.z;if(E.z-=4,E.z<=0){E.x=(Math.random()-.5)*xe*4,E.y=(Math.random()-.5)*Xe*4,E.z=xe;continue}let b=xe/2/E.z,C=E.x*b+w,v=E.y*b+x;if(C>=0&&C<=xe&&v>=0&&v<=Xe){let M=1-E.z/xe,F=M*E.sizeBase;if(M<.3){e.globalAlpha=M*2,e.fillStyle=E.color,e.fillRect(C,v,Math.max(1,F),Math.max(1,F));continue}e.globalAlpha=M,e.fillStyle=E.color,e.strokeStyle=E.color;let I=xe/2/P,A=E.x*I+w,U=E.y*I+x;e.lineWidth=F,e.beginPath(),e.moveTo(A,U),e.lineTo(C,v),e.stroke(),e.beginPath(),e.arc(C,v,F/2,0,Math.PI*2),e.fill(),M>.8&&(e.globalAlpha=(M-.8)*3,e.beginPath(),e.arc(C,v,F*2.5,0,Math.PI*2),e.fill())}}e.globalAlpha=1,xo=requestAnimationFrame(y)}xo=requestAnimationFrame(y)}function jn(){xo&&(cancelAnimationFrame(xo),xo=null)}var bo=null,Ct,vo,hi=0,pi=0,Ue=null;function zr(){if(Ct===void 0||vo===void 0)return;let o=Math.max(100,pi),t=Math.max(14,Math.floor(Ct/25)),e=Math.floor(Ct/t),i=Math.floor(o/t);Ue=new Vi(e,i,t)}var Or={id:"tetris",name:"Tetris",run:Hn,stop:$n,onResize:(o,t)=>{Ct=o,vo=t;let e=document.documentElement,i=e?getComputedStyle(e):null;hi=i&&parseInt(i.getPropertyValue("--io-header"))||0,pi=t-hi,zr()},preferredTrack:{title:"WinTask 3",trackTitle:"Whoopees Tetris"},marqueeFont:{color:"#f0f0f0",shadowColor:"#a000f0",shadowBlur:12,outline:"#000"}},Ur={I:{shapes:[[[1,1,1,1]],[[1],[1],[1],[1]]],color:"#00f0f0"},O:{shapes:[[[1,1],[1,1]]],color:"#f0f000"},T:{shapes:[[[0,1,0],[1,1,1]],[[1,0],[1,1],[1,0]],[[1,1,1],[0,1,0]],[[0,1],[1,1],[0,1]]],color:"#a000f0"},S:{shapes:[[[0,1,1],[1,1,0]],[[1,0],[1,1],[0,1]]],color:"#00f000"},Z:{shapes:[[[1,1,0],[0,1,1]],[[0,1],[1,1],[1,0]]],color:"#f00000"},J:{shapes:[[[1,0,0],[1,1,1]],[[1,1],[1,0],[1,0]],[[1,1,1],[0,0,1]],[[0,1],[0,1],[1,1]]],color:"#0000f0"},L:{shapes:[[[0,0,1],[1,1,1]],[[1,0],[1,0],[1,1]],[[1,1,1],[1,0,0]],[[1,1],[0,1],[0,1]]],color:"#f0a000"}},Rr=Object.keys(Ur),Gi=class{constructor(t,e,i){this.x=t,this.y=e,this.color=i,this.vx=(Math.random()-.5)*12,this.vy=(Math.random()-.7)*14,this.gravity=.45,this.life=1,this.decay=.012+Math.random()*.018,this.size=1+Math.random()*2.5}update(){this.vx*=.985,this.vy+=this.gravity,this.x+=this.vx,this.y+=this.vy,this.life-=this.decay}draw(t){t.globalAlpha=Math.max(0,this.life),t.fillStyle=this.color,t.fillRect(this.x,this.y,this.size,this.size)}},Vi=class{constructor(t,e,i){this.cols=t,this.rows=e,this.cellSize=i,this.board=Array.from({length:e},()=>Array(t).fill(null)),this.particles=[],this.exploding=!1,this.explodeTimer=0,this.EXPLODE_DURATION=120,this.level=1,this.linesTotal=0,this.dropCounter=0,this.moveCounter=0,this._spawnPiece()}_randomPiece(){let t=Rr[Math.floor(Math.random()*Rr.length)],e=Ur[t],i=Math.floor(Math.random()*e.shapes.length);return{shape:e.shapes[i],color:e.color,key:t,rotIdx:i,def:e}}_spawnPiece(){let t=this._randomPiece();this.current={...t,x:Math.floor((this.cols-t.shape[0].length)/2),y:0},this._selectTarget()}_fits(t,e,i){for(let r=0;r<t.length;r++)for(let s=0;s<t[r].length;s++){if(!t[r][s])continue;let l=e+s,a=i+r;if(l<0||l>=this.cols||a>=this.rows||a>=0&&this.board[a][l]!==null)return!1}return!0}_lock(){let{shape:t,x:e,y:i,color:r}=this.current;for(let s=0;s<t.length;s++)for(let l=0;l<t[s].length;l++){if(!t[s][l])continue;let a=i+s,n=e+l;a>=0&&a<this.rows&&n>=0&&n<this.cols&&(this.board[a][n]=r)}this._clearRows()}_clearRows(){let t=0;for(let e=this.rows-1;e>=0;e--)this.board[e].every(i=>i!==null)&&(this.board.splice(e,1),this.board.unshift(Array(this.cols).fill(null)),t++,e++);return t>0&&(this.linesTotal+=t,this.level=Math.floor(this.linesTotal/10)+1),t}_choosePlacement(){let{def:t}=this.current,e=-1/0,i=this.current.x,r=this.current.rotIdx;for(let s=0;s<t.shapes.length;s++){let l=t.shapes[s],a=l[0].length;for(let n=0;n<=this.cols-a;n++){let u=0;for(;this._fits(l,n,u+1);)u++;if(!this._fits(l,n,u))continue;let d=this._getHeuristicScore(l,n,u);d>e&&(e=d,i=n,r=s)}}return{x:i,rotIdx:r}}_getHeuristicScore(t,e,i){let r=this.board.map(d=>[...d]);for(let d=0;d<t.length;d++)for(let c=0;c<t[d].length;c++){if(!t[d][c])continue;let h=i+d,m=e+c;h>=0&&h<this.rows&&(r[h][m]="X")}let s=0;for(let d=0;d<this.rows;d++)r[d].every(c=>c!==null)&&s++;let l=Array(this.cols).fill(0),a=0;for(let d=0;d<this.cols;d++)for(let c=0;c<this.rows;c++)if(r[c][d]!==null){l[d]=this.rows-c,a+=l[d];break}let n=0;for(let d=0;d<this.cols;d++){let c=!1;for(let h=0;h<this.rows;h++)r[h][d]!==null?c=!0:c&&n++}let u=0;for(let d=0;d<this.cols-1;d++)u+=Math.abs(l[d]-l[d+1]);return a*-.51+s*.76+n*-.35+u*-.18+Math.random()*.1}_isBoardFull(){for(let t=0;t<3;t++)if(this.board[t].some(e=>e!==null))return!0;return!1}_explodeBoard(t,e){for(let i=0;i<this.rows;i++)for(let r=0;r<this.cols;r++)if(this.board[i][r]){let s=t+r*this.cellSize+this.cellSize/2,l=e+i*this.cellSize+this.cellSize/2,a=4+Math.floor(Math.random()*4);for(let n=0;n<a;n++)this.particles.push(new Gi(s,l,this.board[i][r]))}}_reset(){this.board=Array.from({length:this.rows},()=>Array(this.cols).fill(null)),this.exploding=!1,this.explodeTimer=0,this.particles=[],this._spawnPiece()}_selectTarget(){let{x:t,rotIdx:e}=this._choosePlacement(),i=this.current.def;this.current.rotIdx=e,this.current.shape=i.shapes[e],this.current.targetX=t,this.current.y=0,this.current.x=Math.floor((this.cols-this.current.shape[0].length)/2)}step(t,e){if(this.exploding){this.explodeTimer++,this.particles=this.particles.filter(s=>s.life>0),this.particles.forEach(s=>s.update()),this.explodeTimer>=this.EXPLODE_DURATION&&this._reset();return}this.moveCounter++,this.moveCounter>=2&&(this.moveCounter=0,this.current.x<this.current.targetX?this._fits(this.current.shape,this.current.x+1,this.current.y)&&this.current.x++:this.current.x>this.current.targetX&&this._fits(this.current.shape,this.current.x-1,this.current.y)&&this.current.x--);let i=this.current.x===this.current.targetX,r=Math.max(4,40-(this.level-1)*3);i&&(r=1),this.dropCounter++,this.dropCounter>=r&&(this.dropCounter=0,this._fits(this.current.shape,this.current.x,this.current.y+1)?this.current.y++:(this._lock(),this._isBoardFull()?(this._explodeBoard(t,e),this.exploding=!0,this.explodeTimer=0):this._spawnPiece()))}draw(t,e,i){let r=this.cellSize,s={};for(let l=0;l<this.rows;l++)for(let a=0;a<this.cols;a++){let n=this.board[l][a];n&&(s[n]||(s[n]=[]),s[n].push({px:e+a*r,py:i+l*r,alpha:this.exploding?Math.max(0,1-this.explodeTimer/40):1}))}if(!this.exploding&&this.current){let{shape:l,x:a,y:n,color:u}=this.current;if(u){s[u]||(s[u]=[]);for(let d=0;d<l.length;d++)for(let c=0;c<l[d].length;c++)l[d][c]&&s[u].push({px:e+(a+c)*r,py:i+(n+d)*r,alpha:1})}}for(let l in s){let a=s[l];t.fillStyle=l,a.forEach(n=>{t.globalAlpha=n.alpha,t.fillRect(n.px+1,n.py+1,r-2,r-2)})}t.globalAlpha=1,t.strokeStyle="rgba(255, 255, 255, 0.35)",t.lineWidth=1.5,t.beginPath();for(let l in s)s[l].forEach(a=>{t.globalAlpha=a.alpha;let n=a.px,u=a.py;t.moveTo(n+1,u+r-2),t.lineTo(n+1,u+1),t.lineTo(n+r-2,u+1)});t.stroke(),t.strokeStyle="rgba(0, 0, 0, 0.45)",t.beginPath();for(let l in s)s[l].forEach(a=>{t.globalAlpha=a.alpha;let n=a.px,u=a.py;t.moveTo(n+1,u+r-1),t.lineTo(n+r-1,u+r-1),t.lineTo(n+r-1,u+1)});t.stroke(),t.globalAlpha=1,t.save(),this.particles.forEach(l=>l.draw(t)),t.restore(),t.globalAlpha=1}};function Hn(o,t){let e=o.ctx2d;Ct=o.width,vo=o.height,hi=o.topInset||0,pi=o.visibleHeight||vo,zr();function i(){if(e.fillStyle="rgba(8, 6, 18, 0.92)",e.fillRect(0,0,Ct,vo),e.strokeStyle="rgba(255,255,255,0.04)",e.lineWidth=.5,Ue){let r=Ue.cellSize,s=Math.floor((Ct-Ue.cols*r)/2),l=hi+(pi-Ue.rows*r);e.beginPath();for(let a=0;a<=Ue.cols;a++)e.moveTo(s+a*r,l),e.lineTo(s+a*r,l+Ue.rows*r);for(let a=0;a<=Ue.rows;a++)e.moveTo(s,l+a*r),e.lineTo(s+Ue.cols*r,l+a*r);e.stroke(),Ue.step(s,l),Ue.draw(e,s,l)}bo=requestAnimationFrame(i)}bo=requestAnimationFrame(i)}function $n(){bo&&(cancelAnimationFrame(bo),bo=null)}var ue={aurora:sr,debug:ur,ecg:Oe,fire:dr,geometry:bt,gradient:Xi,julia:Fe,lavalamp:Tr,mandelbrot:ci,matrix:Lr,none:Dr,starfield:Et,tetris:Or};var mi=class{constructor(t="",e="bottom",i={}){this.text=t,this.position=e,this.applyStyles(i),this.time=0,this.textX=0,this.initialized=!1,this.baseCharWidth=15,this.baseFontSize=24,this.baseVelocity=2.8,this.baseBounce=12,this.fontFamily='"Courier New", monospace',this.fontWeight="bold",this.enabled=!0}applyStyles(t={}){this.color=t.color||"#FFF",this.outline=t.outline||null,this.shadowColor=t.shadowColor||null,this.shadowBlur=t.shadowBlur||0,this.colorFn=t.colorFn||null}updateStyles(t={}){this.applyStyles(t)}setText(t){this.text=t}setPosition(t){this.position=t}render(t,e,i){if(!this.enabled)return;this.initialized||(this.textX=e,this.initialized=!0);let r=e<480?.65:e<768?.8:1,s=Math.max(12,Math.floor(this.baseFontSize*r)),l=this.baseBounce*r,a=this.baseCharWidth*r,n=this.baseVelocity*r;if(this.time+=.012,!this.text)return;let u=this.text.length*a;this.textX-=n,this.textX<-(u+e*1.1)&&(this.textX=e),t.font=`${this.fontWeight} ${s}px ${this.fontFamily}`,t.lineJoin="round",this.outline&&(t.lineWidth=4,t.strokeStyle=this.outline);let d=this.shadowColor&&this.shadowColor!=="inherit";d?(t.shadowColor=this.shadowColor,t.shadowBlur=this.shadowBlur):this.shadowColor||(t.shadowBlur=0);let c=50*r,h=32*r,m=this.position==="bottom"?i-h:c;for(let p=0;p<this.text.length;p++){let f=this.text[p],g=this.textX+p*a;if(g>-40&&g<e+40){let y=m+Math.sin(this.time*4+p*.1)*l;t.fillStyle=this.colorFn?this.colorFn(this.time,p):this.color,this.shadowColor==="inherit"&&(t.shadowColor=t.fillStyle,t.shadowBlur=this.shadowBlur),this.outline&&t.strokeText(f,g,y),t.fillText(f,g,y),this.shadowColor==="inherit"&&(t.shadowBlur=0)}}d&&(t.shadowBlur=0)}};var Br=`:root {
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
}`;function Nr(){return/iPad|iPhone|iPod/.test(navigator.userAgent)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1}function Wi(){return Math.min(window.devicePixelRatio||1,1.5)}function gi(){return Math.min(window.devicePixelRatio||1,2)}function xi(o,t){let e=Wi();return o==="mandelbrot"||o==="julia"?e:t}function Ge(){let o=document.documentElement,t=o?getComputedStyle(o):null;return{ioHeader:t&&parseInt(t.getPropertyValue("--io-header"))||0,topInset:t&&parseInt(t.getPropertyValue("--top-inset"))||0,bottomInset:t&&parseInt(t.getPropertyValue("--bottom-inset"))||0}}function Ut(){return localStorage.getItem("ankifx_marquee_enabled")!=="false"}function yo(){return(window.innerWidth||document.documentElement.clientWidth||800)<480}var Gn={deckTitle:"AnkiFX Deck",deckAuthor:"Anonymous",termsText:null,sources:[],marquee:"ANKIFX ENGINE INITIALIZED ...",defaultEffect:"geometry",debug:!1,countdown:30,marqueePosition:"top"};function qr(o={}){let t={...Gn,...window.AnkiFX_Config||{},...o};Array.isArray(t.sources)||(t.sources=[]);let e=parseInt(t.countdown,10);return t.countdown=isNaN(e)?30:Math.max(0,e),t.isConfigFileError=t.termsText!==void 0&&t.termsText!==null&&(typeof t.termsText!="string"||typeof t.termsText=="string"&&t.termsText.trim()===""||t.termsText==="No terms provided."),t}function jr(o){let t=window.AnkiFX_Config?.defaultEffect,e;return t?(e=t,localStorage.setItem("ankifx_preferred_effect",e)):e=localStorage.getItem("ankifx_preferred_effect")||o.defaultEffect||"geometry",ue[e]||(console.warn(`[AnkiFX] Unknown effect "${e}" \u2014 falling back to "${o.defaultEffect||"geometry"}".`),e=o.defaultEffect||"geometry",ue[e]||(e=Object.keys(ue)[0]||"geometry"),localStorage.setItem("ankifx_preferred_effect",e)),e}function Hr(o,t){let e=document.getElementById("ankifx-overlay");if(!e||!e.classList.contains("afx-agreed-state"))return!1;o.sharedGL||(o.sharedGL=document.getElementById("afx-shared-gl")),o.shared2D||(o.shared2D=document.getElementById("afx-shared-2d")),o.sharedMarquee||(o.sharedMarquee=document.getElementById("afx-shared-marquee")),o.sharedGL&&!o.glContext&&(o.glContext=o.sharedGL.getContext("webgl",{alpha:!1,antialias:!1})),o.shared2D&&!o.ctx2D&&(o.ctx2D=o.shared2D.getContext("2d")),o.sharedMarquee&&!o.ctxMarquee&&(o.ctxMarquee=o.sharedMarquee.getContext("2d"));let i=document.getElementById("ankifx-background");if(i){let s=i.getBoundingClientRect();o.width=s.width;let l=Ge();o.height=document.documentElement.clientHeight+l.ioHeader,o.dpr=gi()}if(!o.currentEffectId){let s=Array.from(document.documentElement.classList).find(l=>l.startsWith("afx-effect-"));s&&(o.currentEffectId=s.replace("afx-effect-",""))}o.defaultMarqueeText=t.marquee,o.marquee&&(o.marquee.setText(t.marquee),o.marquee.setPosition(t.marqueePosition));let r=document.getElementById("afx-deck-title");return r&&(r.textContent=t.deckTitle),!0}function wo(o){let t=document.getElementById("afx-effect-controls-container");t&&(t.innerHTML="",!(!o||!o.controls||o.controls.length===0)&&o.controls.forEach(e=>{let i=document.createElement("div");if(i.className="afx-control-row",i.id=`afx-control-container-${e.id}`,e.type==="toggle")i.innerHTML=`
                    <label class="afx-toggle">
                        <input type="checkbox" id="afx-control-${e.id}" ${e.value?"checked":""}>
                        <span class="afx-slider"></span>
                    </label>
                    <span id="afx-control-label-${e.id}">${e.label}</span>
                `,i.querySelector("input").addEventListener("change",s=>{e.onChange&&e.onChange(s.target.checked)});else if(e.type==="slider"){i.classList.add("afx-slider-row");let r=e.step||1,s=r.toString().includes(".")?r.toString().split(".")[1].length:0;i.innerHTML=`
                    <span class="afx-slider-label">${e.label}:</span>
                    <input type="range" id="afx-control-${e.id}" class="afx-range-slider" min="${e.min}" max="${e.max}" step="${r}" value="${e.value}">
                    <span id="afx-control-val-${e.id}" class="afx-slider-val-text">${e.value.toFixed(s)}</span>
                `;let l=i.querySelector("input"),a=i.querySelector(".afx-slider-val-text");l.addEventListener("input",n=>{let u=parseFloat(n.target.value);a.innerText=u.toFixed(s),e.onChange&&e.onChange(u)})}else if(e.type==="button")i.style.padding="0",i.innerHTML=`
                    <button id="afx-control-${e.id}" class="afx-action-btn">
                        ${e.label}
                    </button>
                `,i.querySelector("button").addEventListener("click",s=>{s.stopPropagation(),e.onClick&&e.onClick()});else if(e.type==="select"){i.style.padding="0";let r=(e.options||[]).map(l=>{let a=typeof l=="object"?l.value:l,n=typeof l=="object"?l.text:l,u=a==e.value?"selected":"";return`<option value="${a}" ${u}>${n}</option>`}).join("");i.innerHTML=`
                    <select id="afx-control-${e.id}" class="afx-select">
                        ${r}
                    </select>
                `,i.querySelector("select").addEventListener("change",l=>{e.onChange&&e.onChange(l.target.value)})}t.appendChild(i)}))}function $r(o,t){let e=document.getElementById(`afx-control-${o}`);e&&(e.type==="checkbox"?e.checked=!!t:e.value=t);let i=document.getElementById(`afx-control-val-${o}`);if(i){let r=e?e.step:"",s=r&&r.includes(".")?r.split(".")[1].length:0;i.innerText=typeof t=="number"?t.toFixed(s||(t%1===0?0:4)):t}}function ko(o,t,e,i,r){r==="debug"?e.classList.add("afx-debug-active"):e.classList.remove("afx-debug-active");let s=document.documentElement;Array.from(s.classList).forEach(a=>{a.startsWith("afx-effect-")&&s.classList.remove(a)}),s.classList.add(`afx-effect-${r}`),o.currentEffectId=r;let l=ue[r];if(l){let a=Ge(),n=xi(r,o.dpr),u={gl:o.glContext,ctx2d:o.ctx2D,canvasGL:o.sharedGL,canvas2D:o.shared2D,width:o.width,height:o.height,dpr:n,topInset:a.ioHeader,visibleWidth:o.width,visibleHeight:o.height-a.ioHeader,visibleBounds:{top:a.ioHeader,bottom:o.height}};o.marquee&&o.marquee.updateStyles(l.marqueeFont||{}),l.run(u,t),wo(l),o.marquee&&(o.marquee.enabled=Ut())}else o.marquee&&o.marquee.updateStyles({}),wo(null)}function pt(o){let t=document.getElementById("ankifx-background");if(!t||!o.sharedGL||!o.shared2D||!o.sharedMarquee)return;let i=Ge().ioHeader;document.documentElement.style.setProperty("--afx-viewport-height",`calc(100dvh + ${i}px)`);let r=t.getBoundingClientRect();o.width=r.width,o.height=document.documentElement.clientHeight+i,o.dpr=gi();let s=Wi();if(o.sharedGL.width=o.width*s,o.sharedGL.height=o.height*s,o.sharedGL.style.width=o.width+"px",o.sharedGL.style.height=o.height+"px",o.shared2D.width=o.width*o.dpr,o.shared2D.height=o.height*o.dpr,o.shared2D.style.width=o.width+"px",o.shared2D.style.height=o.height+"px",o.sharedMarquee.width=o.width*o.dpr,o.sharedMarquee.height=o.height*o.dpr,o.sharedMarquee.style.width=o.width+"px",o.sharedMarquee.style.height=o.height+"px",o.glContext&&o.glContext.viewport(0,0,o.sharedGL.width,o.sharedGL.height),o.ctx2D&&(o.ctx2D.setTransform(1,0,0,1,0,0),o.ctx2D.scale(o.dpr,o.dpr)),o.ctxMarquee&&(o.ctxMarquee.setTransform(1,0,0,1,0,0),o.ctxMarquee.scale(o.dpr,o.dpr)),o.currentEffectId&&ue[o.currentEffectId]?.onResize){let l=xi(o.currentEffectId,o.dpr);ue[o.currentEffectId].onResize(o.width,o.height,l)}}function Xr(o){let e=Ge().ioHeader,i=window.innerHeight,r=document.documentElement.clientHeight,s=setInterval(()=>{let l=Ge(),a=window.innerHeight,n=document.documentElement.clientHeight;(l.ioHeader!==e||a!==i||n!==r)&&(e=l.ioHeader,i=a,r=n,pt(o))},50);setTimeout(()=>clearInterval(s),2e3)}function Gr(o){o._layoutHandler&&(window.removeEventListener("orientationchange",o._layoutHandler),window.removeEventListener("resize",o._layoutHandler)),o._resizeTimeout&&clearTimeout(o._resizeTimeout),o._resizeInterval&&clearInterval(o._resizeInterval),o._layoutHandler=()=>{o._resizeTimeout&&clearTimeout(o._resizeTimeout),o._resizeInterval&&clearInterval(o._resizeInterval),pt(o),o._resizeTimeout=setTimeout(()=>{pt(o)},100);let t=0,e=o.width,i=o.height;o._resizeInterval=setInterval(()=>{if(t+=100,t>=1500){clearInterval(o._resizeInterval);return}let r=Ge(),s=document.getElementById("ankifx-background"),l=s?s.getBoundingClientRect():null,a=l?l.width:window.innerWidth,n=document.documentElement.clientHeight+r.ioHeader;(a!==e||n!==i)&&(e=a,i=n,pt(o))},100)},window.addEventListener("orientationchange",o._layoutHandler),window.addEventListener("resize",o._layoutHandler)}function Vr(o){let t=document.getElementById("afx-bottom-dock");t&&(o.dockObserver=new ResizeObserver(()=>{let e=t.getBoundingClientRect();document.documentElement.style.setProperty("--afx-dock-height",`${e.height}px`)}),o.dockObserver.observe(t))}function Wr(o){o.observer||(o._observerTimeout=null,o.observer=new MutationObserver(()=>{o._observerTimeout&&clearTimeout(o._observerTimeout),o._observerTimeout=setTimeout(()=>{o._observerTimeout=null;let t=document.getElementById("qa");(t?!!t.querySelector(".ankifx-card"):!1)?bi(o):typeof o=="object"&&window.AnkiFX&&window.AnkiFX.destroy()},20)}),o.observer.observe(document.documentElement,{childList:!0,subtree:!0}))}function bi(o){let t=o&&o.observer;t&&o.observer.disconnect();let e=document.getElementById("_flag"),i=document.getElementById("_mark"),r=document.getElementById("afx-top-group-left"),s=document.getElementById("afx-top-group-right"),l=document.getElementById("afx-btn-skip");if(i&&r){let a=document.getElementById("afx-global-fps");a&&i.nextSibling!==a?r.insertBefore(i,a):!a&&i.parentElement!==r&&r.appendChild(i)}e&&s&&e.parentElement!==s&&s.insertBefore(e,l),t&&o.observer.observe(document.documentElement,{childList:!0,subtree:!0})}function Yi(o){if(o.marqueeInterval)return;let t=0,e=0,i=r=>{if(r===void 0&&(r=performance.now()),t||(t=r),e++,r-t>=1e3){let s=document.getElementById("afx-global-fps");s&&(s.textContent=`FPS: ${e}`),e=0,t=r}if(o.marquee&&o.ctxMarquee){if(o.ctxMarquee.clearRect(0,0,o.width,o.height),o.currentEffectId&&ue[o.currentEffectId]?.drawOverlay)try{ue[o.currentEffectId].drawOverlay(o.ctxMarquee,o.width,o.height,r)}catch(s){console.error("[AnkiFX] drawOverlay error: "+s.message)}o.marquee.render(o.ctxMarquee,o.width,o.height)}o.marqueeInterval=requestAnimationFrame(i)};o.marqueeInterval=requestAnimationFrame(i)}function Yr(o,t,e,i){let r=t.countdown;if((t.debug||t.isConfigFileError)&&(r=0),r>0){i.textContent=`( ${r} )`;let s=setInterval(()=>{r--,i.textContent=`( ${r} )`,r<=0&&(clearInterval(s),i.textContent="I AGREE",i.disabled=!1)},1e3)}else i.textContent="I AGREE",i.disabled=!1;i.addEventListener("click",s=>{s.stopPropagation(),i.disabled||window.AnkiFX.agree(e,t.deckTitle)})}window.neoart=Object.create(null);function Ki(o,t){var e=Object.create(null,{endian:{value:1,writable:!0},length:{value:0,writable:!0},index:{value:0,writable:!0},buffer:{value:null,writable:!0},view:{value:null,writable:!0},bytesAvailable:{get:function(){return this.length-this.index}},position:{get:function(){return this.index},set:function(i){i<0?i=0:i>this.length&&(i=this.length),this.index=i}},clear:{value:function(){this.buffer=new ArrayBuffer,this.view=null,this.index=this.length=0}},readAt:{value:function(i){return this.view.getUint8(i)}},readByte:{value:function(){return this.view.getInt8(this.index++)}},readShort:{value:function(){var i=this.view.getInt16(this.index,this.endian);return this.index+=2,i}},readInt:{value:function(){var i=this.view.getInt32(this.index,this.endian);return this.index+=4,i}},readUbyte:{value:function(){return this.view.getUint8(this.index++)}},readUshort:{value:function(){var i=this.view.getUint16(this.index,this.endian);return this.index+=2,i}},readUint:{value:function(){var i=this.view.getUint32(this.index,this.endian);return this.index+=4,i}},readBytes:{value:function(i,r,s){var l=i.view,a=this.index,n=this.view;for((s+=a)>this.length&&(s=this.length);a<s;++a)l.setUint8(r++,n.getUint8(a));this.index=a}},readString:{value:function(i){var r=this.index,s=this.view,l="";for((i+=r)>this.length&&(i=this.length);r<i;++r)l+=String.fromCharCode(s.getUint8(r));return this.index=i,l}},writeAt:{value:function(i,r){this.view.setUint8(i,r)}},writeByte:{value:function(i){this.view.setInt8(this.index++,i)}},writeShort:{value:function(i){this.view.setInt16(this.index,i),this.index+=2}},writeInt:{value:function(i){this.view.setInt32(this.index,i),this.index+=4}}});return e.buffer=o,e.view=new DataView(o),e.length=o.byteLength,Object.seal(e)}function Kr(){return Object.create(null,{l:{value:0,writable:!0},r:{value:0,writable:!0},next:{value:null,writable:!0}})}function vi(){return Object.create(null,{player:{value:null,writable:!0},channels:{value:[],writable:!0},buffer:{value:[],writable:!0},samplesTick:{value:0,writable:!0},samplesLeft:{value:0,writable:!0},remains:{value:0,writable:!0},completed:{value:0,writable:!0},bufferSize:{get:function(){return this.buffer.length},set:function(o){var t,e=this.buffer.length||0;if(!(o===e||o<512)&&(this.buffer.length=o,o>e))for(this.buffer[e]=Kr(),t=++e;t<o;++t)this.buffer[t]=this.buffer[t-1].next=Kr()}},complete:{get:function(){return this.completed},set:function(o){this.completed=o^this.player.loopSong}},reset:{value:function(){var o=this.channels[0],t=this.buffer[0];for(this.samplesLeft=0,this.remains=0,this.completed=0;o;)o.initialize(),o=o.next;for(;t;)t.l=t.r=0,t=t.next}},restore:{configurable:!0,value:function(){}}})}function Vn(){var o=null;return typeof AudioContext<"u"?o=new AudioContext:alert("Web Audio API does not appear to be supported. Use Chrome, Safari or Firefox"),o}function yi(){var o=Object.create(null,{context:{value:null,writable:!0},node:{value:null,writable:!0},analyser:{value:null,writable:!0},analyse:{value:0,writable:!0},endian:{value:0,writable:!0},sampleRate:{value:0,writable:!0},playSong:{value:0,writable:!0},lastSong:{value:0,writable:!0},version:{value:0,writable:!0},title:{value:"",writable:!0},channels:{value:0,writable:!0},loopSong:{value:0,writable:!0},speed:{value:0,writable:!0},tempo:{value:0,writable:!0},mixer:{value:null,writable:!0},tick:{value:0,writable:!0},paused:{value:0,writable:!0},callback:{value:null,writable:!0},quality:{configurable:!0,set:function(t){this.callback=t?this.mixer.accurate.bind(this.mixer):this.mixer.fast.bind(this.mixer)}},toggle:{value:function(t){this.mixer.channels[t].mute^=1}},setup:{configurable:!0,value:function(){}},load:{value:function(t){return this.version=0,this.playSong=0,this.lastSong=0,this.mixer.restore(),t.view||(t=Ki(t)),t.position=0,t.readUint()===67324752&&window.neoart.Unzip,t.endian=this.endian,t.position=0,this.loader(t),this.version&&this.setup(),this.version}},play:{value:function(){var t,e;this.version&&(this.paused?this.paused=0:(this.initialize(),typeof this.context.createJavaScriptNode=="function"?this.node=this.context.createJavaScriptNode(this.mixer.bufferSize):this.node=this.context.createScriptProcessor(this.mixer.bufferSize),this.analyser=this.context.createAnalyser(),this.node.connect(this.analyser),this.node.onaudioprocess=this.callback),this.analyse&&window.neoart.Flectrum?(e=window.neoart.analyserNode=this.context.createAnalyser(),this.node.connect(e),e.connect(this.context.destination)):this.node.connect(this.context.destination),t=document.createEvent("Event"),t.initEvent("flodPlay",!0,!1),document.dispatchEvent(t))}},pause:{value:function(){if(this.node){this.node.disconnect(),this.paused=1;var t=document.createEvent("Event");t.initEvent("flodPause",!0,!1),document.dispatchEvent(t)}}},stop:{value:function(){if(this.node){this.node.disconnect(),this.node.onaudioprocess=this.node=null,this.paused=0,this.restore&&this.restore();var t=document.createEvent("Event");t.initEvent("flodStop",!0,!1),document.dispatchEvent(t)}}},reset:{value:function(){this.tick=0,this.mixer.initialize(),this.mixer.samplesTick=this.sampleRate*2.5/this.tempo>>0}}});return window.neoart.audioContext||(window.neoart.audioContext=Vn()),o.context=window.neoart.audioContext,o.sampleRate=o.context.sampleRate,o}function wi(o){var t=Object.create(null,{next:{value:null,writable:!0},mute:{value:0,writable:!0},panning:{value:0,writable:!0},delay:{value:0,writable:!0},pointer:{value:0,writable:!0},length:{value:0,writable:!0},audena:{value:0,writable:!0},audcnt:{value:0,writable:!0},audloc:{value:0,writable:!0},audper:{value:0,writable:!0},audvol:{value:0,writable:!0},timer:{value:0,writable:!0},level:{value:0,writable:!0},ldata:{value:0,writable:!0},rdata:{value:0,writable:!0},enabled:{get:function(){return this.audena},set:function(e){e!==this.audena&&(this.audena=e,this.audloc=this.pointer,this.audcnt=this.pointer+this.length,this.timer=1,e&&(this.delay+=2))}},period:{set:function(e){e<0?e=0:e>65535&&(e=65535),this.audper=e}},volume:{set:function(e){e<0?e=0:e>64&&(e=64),this.audvol=e}},resetData:{value:function(){this.ldata=0,this.rdata=0}},initialize:{value:function(){this.audena=0,this.audcnt=0,this.audloc=0,this.audper=50,this.audvol=0,this.timer=0,this.ldata=0,this.rdata=0,this.delay=0,this.pointer=0,this.length=0}}});return t.panning=t.level=(++o&2)===0?-1:1,Object.seal(t)}function Wn(){return Object.create(null,{active:{value:0,writable:!0},forced:{value:-1,writable:!0},l0:{value:0,writable:!0},l1:{value:0,writable:!0},l2:{value:0,writable:!0},l3:{value:0,writable:!0},l4:{value:0,writable:!0},r0:{value:0,writable:!0},r1:{value:0,writable:!0},r2:{value:0,writable:!0},r3:{value:0,writable:!0},r4:{value:0,writable:!0},initialize:{value:function(){this.l0=this.l1=this.l2=this.l3=this.l4=0,this.r0=this.r1=this.r2=this.r3=this.r4=0}},process:{value:function(o,t){var e=.52133458435322,i=.4860348337215757,r=.9314955486749749,s=1-i;o===0&&(this.l0=i*t.l+s*this.l0,this.r0=i*t.r+s*this.r0,s=1-r,t.l=this.l1=r*this.l0+s*this.l1,t.r=this.r1=r*this.r0+s*this.r1),(this.active|this.forced)>0&&(s=1-e,this.l2=e*t.l+s*this.l2,this.r2=e*t.r+s*this.r2,this.l3=e*this.l2+s*this.l3,this.r3=e*this.r2+s*this.r3,t.l=this.l4=e*this.l3+s*this.l4,t.r=this.r4=e*this.r3+s*this.r4),t.l>1?t.l=1:t.l<-1&&(t.l=-1),t.r>1?t.r=1:t.r<-1&&(t.r=-1)}}})}function ki(){return Object.create(null,{note:{value:0,writable:!0},sample:{value:0,writable:!0},effect:{value:0,writable:!0},param:{value:0,writable:!0}})}function So(){return Object.create(null,{name:{value:"",writable:!0},length:{value:0,writable:!0},loop:{value:0,writable:!0},repeat:{value:0,writable:!0},volume:{value:0,writable:!0},pointer:{value:0,writable:!0},loopPtr:{value:0,writable:!0}})}function Ji(){var o=vi();return Object.defineProperties(o,{filter:{value:null,writable:!0},model:{value:1,writable:!0},memory:{value:[],writable:!0},loopPtr:{value:0,writable:!0},loopLen:{value:4,writable:!0},clock:{value:0,writable:!0},master:{value:0,writable:!0},ready:{value:0,writable:!0},volume:{set:function(t){t>0?(t>64&&(t=64),this.master=t/64*.00390625):this.master=0}},initialize:{value:function(){var t=this.memory.length,e=t+this.loopLen;if(this.reset(),this.filter.initialize(),!this.ready)for(this.ready=1,this.loopPtr=t;t<e;++t)this.memory[t]=0}},restore:{value:function(){this.ready=0,this.memory.length=0}},store:{value:function(t,e,i){var r,s,l=t.position,a=this.memory.length,n;for(i&&(t.position=i),n=t.position+e,n>=t.length&&(r=n-t.length,e=t.length-t.position),s=a,e+=a;s<e;++s)this.memory[s]=t.readByte();for(e+=r;s<e;++s)this.memory[s]=0;return i&&(t.position=l),a}},fast:{value:function(t){var e,i,r,s=this.memory,l,a=0,n,u=0,d,c,h,m=this.bufferSize,p,f,g;if(this.completed){if(!this.remains){this.player.stop();return}m=this.remains}for(;a<m;){for(this.samplesLeft||(this.player.process(),this.samplesLeft=this.samplesTick,this.completed&&(m=a+this.samplesTick,m>this.bufferSize&&(this.remains=m-this.bufferSize,m=this.bufferSize))),f=this.samplesLeft,a+f>=m&&(f=m-a),n=u+f,e=this.channels[0];e;){if(h=this.buffer[u],e.audena&&e.audper>60)for(p=e.audper/this.clock,g=e.audvol*this.master,l=g*(1-e.level),c=g*(1+e.level),i=u;i<n;++i)e.delay?e.delay--:--e.timer<1&&(e.mute||(g=s[e.audloc]*.0078125,e.ldata=g*l,e.rdata=g*c),e.audloc++,e.timer+=p,e.audloc>=e.audcnt&&(e.audloc=e.pointer,e.audcnt=e.pointer+e.length)),h.l+=e.ldata,h.r+=e.rdata,h=h.next;else for(i=u;i<n;++i)h.l+=e.ldata,h.r+=e.rdata,h=h.next;e=e.next}u=n,a+=f,this.samplesLeft-=f}for(g=this.model,s=this.filter,h=this.buffer[0],r=t.outputBuffer.getChannelData(0),d=t.outputBuffer.getChannelData(1),i=0;i<m;++i)s.process(g,h),r[i]=h.l,d[i]=h.r,h.l=h.r=0,h=h.next}}}),o.channels[0]=wi(0),o.channels[0].next=o.channels[1]=wi(1),o.channels[1].next=o.channels[2]=wi(2),o.channels[2].next=o.channels[3]=wi(3),o.bufferSize=8192,o.filter=Wn(),o.master=.00390625,Object.seal(o)}function Si(o){var t=yi();return Object.defineProperties(t,{quality:{set:function(e){this.callback=this.mixer.fast.bind(this.mixer)}},stereo:{set:function(e){var i=this.mixer.channels[0];for(e<0?e=0:e>1&&(e=1);i;)i.level=e*i.panning,i=i.next}},volume:{set:function(e){e<0?e=0:e>1&&(e=1),this.mixer.master=e*.00390625}},frequency:{value:function(e){e?(this.mixer.clock=3579545/this.sampleRate,this.mixer.samplesTick=735):(this.mixer.clock=3546895/this.sampleRate,this.mixer.samplesTick=882)}}}),t.mixer=o||Ji(),t.mixer.player=t,t.frequency(0),t.channels=4,t.endian=0,t.quality=0,t.speed=6,t.tempo=125,t}function Jr(){return Object.create(null,{next:{value:null,writable:!0},mute:{value:0,writable:!0},enabled:{value:0,writable:!0},sample:{value:null,writable:!0},length:{value:0,writable:!0},index:{value:0,writable:!0},pointer:{value:0,writable:!0},delta:{value:0,writable:!0},fraction:{value:0,writable:!0},speed:{value:0,writable:!0},dir:{value:0,writable:!0},oldSample:{value:null,writable:!0},oldLength:{value:0,writable:!0},oldPointer:{value:0,writable:!0},oldFraction:{value:0,writable:!0},oldSpeed:{value:0,writable:!0},oldDir:{value:0,writable:!0},volume:{value:0,writable:!0},lvol:{value:0,writable:!0},rvol:{value:0,writable:!0},panning:{value:128,writable:!0},lpan:{value:.5,writable:!0},rpan:{value:.5,writable:!0},ldata:{value:0,writable:!0},rdata:{value:0,writable:!0},mixCounter:{value:0,writable:!0},lmixRampU:{value:0,writable:!0},lmixDeltaU:{value:0,writable:!0},rmixRampU:{value:0,writable:!0},rmixDeltaU:{value:0,writable:!0},lmixRampD:{value:0,writable:!0},lmixDeltaD:{value:0,writable:!0},rmixRampD:{value:0,writable:!0},rmixDeltaD:{value:0,writable:!0},volCounter:{value:0,writable:!0},lvolDelta:{value:0,writable:!0},rvolDelta:{value:0,writable:!0},panCounter:{value:0,writable:!0},lpanDelta:{value:0,writable:!0},rpanDelta:{value:0,writable:!0},initialize:{value:function(){this.enabled=0,this.sample=null,this.length=0,this.index=0,this.pointer=0,this.delta=0,this.fraction=0,this.speed=0,this.dir=0,this.oldSample=null,this.oldLength=0,this.oldPointer=0,this.oldFraction=0,this.oldSpeed=0,this.oldDir=0,this.volume=0,this.lvol=0,this.rvol=0,this.panning=128,this.lpan=.5,this.rpan=.5,this.ldata=0,this.rdata=0,this.mixCounter=0,this.lmixRampU=0,this.lmixDeltaU=0,this.rmixRampU=0,this.rmixDeltaU=0,this.lmixRampD=0,this.lmixDeltaD=0,this.rmixRampD=0,this.rmixDeltaD=0,this.volCounter=0,this.lvolDelta=0,this.rvolDelta=0,this.panCounter=0,this.lpanDelta=0,this.rpanDelta=0}}})}function Zr(){return Object.create(null,{name:{value:"",writable:!0},bits:{value:8,writable:!0},volume:{value:0,writable:!0},length:{value:0,writable:!0},data:{value:[],writable:!0},loopMode:{value:0,writable:!0},loopStart:{value:0,writable:!0},loopLen:{value:0,writable:!0},store:{value:function(o){var t=0,e,i=this.length,r,s,l,a;if(this.loopLen||(this.loopMode=0),r=o.position,this.loopMode?(i=this.loopStart+this.loopLen,this.data=new Float32Array(i+1)):this.data=new Float32Array(this.length+1),this.bits===8)for(l=r+i,l>o.length&&(i=o.length-r),e=0;e<i;e++)a=o.readByte()+t,a<-128?a+=256:a>127&&(a-=256),this.data[e]=a*.0078125,t=a;else for(l=r+(i<<1),l>o.length&&(i=o.length-r>>1),e=0;e<i;e++)a=o.readShort()+t,a<-32768?a+=65536:a>32767&&(a-=65536),this.data[e]=a*3051758e-11,t=a;if(l=r+this.length,this.loopMode?(this.length=this.loopStart+this.loopLen,this.loopMode===1?this.data[i]=this.data[this.loopStart]:this.data[i]=this.data[i-1]):this.data[this.length]=0,i!==this.length)for(s=this.data[i-1],e=i;e<this.length;e++)this.data[e]=s;l<o.length?o.position=l:o.position=o.length-1}}})}function Yn(){var o=vi();return Object.defineProperties(o,{setup:{value:function(t){var e=1;for(this.channels.length=t,this.channels[0]=Jr();e<t;++e)this.channels[e]=this.channels[e-1].next=Jr()}},initialize:{value:function(){this.reset()}},fast:{value:function(t){var e,i,r,s,l=0,a,n=0,u,d,c,h=this.bufferSize,m,p;if(this.completed){if(!this.remains){this.player.stop();return}h=this.remains}for(;l<h;){for(this.samplesLeft||(this.player.process(),this.player.fast(),this.samplesLeft=this.samplesTick,this.completed&&(h=l+this.samplesTick,h>this.bufferSize&&(this.remains=h-this.bufferSize,h=this.bufferSize))),m=this.samplesLeft,l+m>=h&&(m=h-l),a=n+m,e=this.channels[0];e;){if(!e.enabled){e=e.next;continue}for(d=e.sample,i=d.data,c=this.buffer[n],s=n;s<a;++s){if(e.index!==e.pointer){if(e.index>=e.length)if(d.loopMode)e.pointer=d.loopStart+(e.index-e.length),e.length=d.length,d.loopMode===2&&(e.dir?e.dir=0:e.dir=d.length+d.loopStart-1);else{e.enabled=0;break}else e.pointer=e.index;e.mute?(e.ldata=0,e.rdata=0):(e.dir?p=i[e.dir-e.pointer]:p=i[e.pointer],e.ldata=p*e.lvol,e.rdata=p*e.rvol)}e.index=e.pointer+e.delta,(e.fraction+=e.speed)>=1&&(e.index++,e.fraction--),c.l+=e.ldata,c.r+=e.rdata,c=c.next}e=e.next}n=a,l+=m,this.samplesLeft-=m}for(c=this.buffer[0],r=t.outputBuffer.getChannelData(0),u=t.outputBuffer.getChannelData(1),s=0;s<h;++s)c.l>1?c.l=1:c.l<-1&&(c.l=-1),c.r>1?c.r=1:c.r<-1&&(c.r=-1),r[s]=c.l,u[s]=c.r,c.l=c.r=0,c=c.next}},accurate:{value:function(t){var e,i,r,s,l,a,n=0,u,d=0,c,h,m,p,f,g=this.bufferSize,y,w;if(this.completed){if(!this.remains){this.player.stop();return}g=this.remains}for(;n<g;){for(this.samplesLeft||(this.player.process(),this.player.accurate(),this.samplesLeft=this.samplesTick,this.completed&&(g=n+this.samplesTick,g>this.bufferSize&&(this.remains=g-this.bufferSize,g=this.bufferSize))),y=this.samplesLeft,n+y>=g&&(y=g-n),u=d+y,e=this.channels[0];e;){if(!e.enabled){e=e.next;continue}for(m=e.sample,i=m.data,p=e.oldSample,p&&(r=p.data),f=this.buffer[d],a=d;a<u;++a){if(w=e.mute?0:i[e.pointer],w+=(i[e.pointer+e.dir]-w)*e.fraction,(e.fraction+=e.speed)>=1&&(l=e.fraction>>0,e.fraction-=l,e.dir>0?(e.pointer+=l,e.pointer>e.length&&(e.fraction+=e.pointer-e.length,e.pointer=e.length)):(e.pointer-=l,e.pointer<e.length&&(e.fraction+=e.length-e.pointer,e.pointer=e.length))),e.mixCounter?(p?(c=e.mute?0:r[e.oldPointer],c+=(r[e.oldPointer+e.oldDir]-c)*e.oldFraction,(e.oldFraction+=e.oldSpeed)>1&&(l=e.oldFraction>>0,e.oldFraction-=l,e.oldDir>0?(e.oldPointer+=l,e.oldPointer>e.oldLength&&(e.oldFraction+=e.oldPointer-e.oldLength,e.oldPointer=e.oldLength)):(e.oldPointer-=l,e.oldPointer<e.oldLength&&(e.oldFraction+=e.oldLength-e.oldPointer,e.oldPointer=e.oldLength))),f.l+=w*e.lmixRampU+c*e.lmixRampD,f.r+=w*e.rmixRampU+c*e.rmixRampD,e.lmixRampD-=e.lmixDeltaD,e.rmixRampD-=e.rmixDeltaD):(f.l+=w*e.lmixRampU,f.r+=w*e.rmixRampU),e.lmixRampU+=e.lmixDeltaU,e.rmixRampU+=e.rmixDeltaU,e.mixCounter--,e.oldPointer===e.oldLength&&(p.loopMode?p.loopMode===1?(e.oldPointer=p.loopStart,e.oldLength=p.length):e.oldDir>0?(e.oldPointer=p.length-1,e.oldLength=p.loopStart,e.oldDir=-1):(e.oldFraction-=1,e.oldPointer=p.loopStart,e.oldLength=p.length,e.oldDir=1):(p=null,e.oldPointer=0))):(f.l+=w*e.lvol,f.r+=w*e.rvol,e.volCounter?(e.lvol+=e.lvolDelta,e.rvol+=e.rvolDelta,e.volCounter--):e.panCounter&&(e.lpan+=e.lpanDelta,e.rpan+=e.rpanDelta,e.panCounter--,e.lvol=e.volume*e.lpan,e.rvol=e.volume*e.rpan)),e.pointer===e.length)if(m.loopMode)m.loopMode===1?(e.pointer=m.loopStart,e.length=m.length):e.dir>0?(e.pointer=m.length-1,e.length=m.loopStart,e.dir=-1):(e.fraction-=1,e.pointer=m.loopStart,e.length=m.length,e.dir=1);else{e.enabled=0;break}f=f.next}e=e.next}d=u,n+=y,this.samplesLeft-=y}for(f=this.buffer[0],s=t.outputBuffer.getChannelData(0),h=t.outputBuffer.getChannelData(1),a=0;a<g;++a)f.l>1?f.l=1:f.l<-1&&(f.l=-1),f.r>1?f.r=1:f.r<-1&&(f.r=-1),s[a]=f.l,h[a]=f.r,f.l=f.r=0,f=f.next}}}),o.bufferSize=8192,Object.seal(o)}function Qr(o){var t=yi();return Object.defineProperties(t,{track:{value:null,writable:!0},length:{value:0,writable:!0},restart:{value:0,writable:!0},timer:{value:0,writable:!0},master:{value:0,writable:!0},volume:{set:function(e){e<0?e=0:e>1&&(e=1),this.master=e*64}},setup:{configurable:!1,value:function(){this.mixer.setup(this.channels)}}}),t.mixer=o||Yn(),t.mixer.player=t,t.endian=1,t.quality=1,t}function Kn(o){var t=Object.create(null,{index:{value:o,writable:!0},next:{value:null,writable:!0},flags:{value:0,writable:!0},delay:{value:0,writable:!0},channel:{value:null,writable:!0},patternLoop:{value:0,writable:!0},patternLoopRow:{value:0,writable:!0},playing:{value:null,writable:!0},note:{value:0,writable:!0},keyoff:{value:0,writable:!0},period:{value:0,writable:!0},finetune:{value:0,writable:!0},arpDelta:{value:0,writable:!0},vibDelta:{value:0,writable:!0},instrument:{value:null,writable:!0},autoVibratoPos:{value:0,writable:!0},autoSweep:{value:0,writable:!0},autoSweepPos:{value:0,writable:!0},sample:{value:null,writable:!0},sampleOffset:{value:0,writable:!0},volume:{value:0,writable:!0},volEnabled:{value:0,writable:!0},volEnvelope:{value:null,writable:!0},volDelta:{value:0,writable:!0},volSlide:{value:0,writable:!0},volSlideMaster:{value:0,writable:!0},fineSlideU:{value:0,writable:!0},fineSlideD:{value:0,writable:!0},fadeEnabled:{value:0,writable:!0},fadeDelta:{value:0,writable:!0},fadeVolume:{value:0,writable:!0},panning:{value:0,writable:!0},panEnabled:{value:0,writable:!0},panEnvelope:{value:null,writable:!0},panSlide:{value:0,writable:!0},portaU:{value:0,writable:!0},portaD:{value:0,writable:!0},finePortaU:{value:0,writable:!0},finePortaD:{value:0,writable:!0},xtraPortaU:{value:0,writable:!0},xtraPortaD:{value:0,writable:!0},portaPeriod:{value:0,writable:!0},portaSpeed:{value:0,writable:!0},glissando:{value:0,writable:!0},glissPeriod:{value:0,writable:!0},vibratoPos:{value:0,writable:!0},vibratoSpeed:{value:0,writable:!0},vibratoDepth:{value:0,writable:!0},vibratoReset:{value:0,writable:!0},tremoloPos:{value:0,writable:!0},tremoloSpeed:{value:0,writable:!0},tremoloDepth:{value:0,writable:!0},waveControl:{value:0,writable:!0},tremorPos:{value:0,writable:!0},tremorOn:{value:0,writable:!0},tremorOff:{value:0,writable:!0},tremorVolume:{value:0,writable:!0},retrigx:{value:0,writable:!0},retrigy:{value:0,writable:!0},rowCurrent:{value:null,writable:!0},reset:{value:function(){this.volume=this.sample.volume,this.panning=this.sample.panning,this.finetune=this.sample.finetune>>3<<2,this.keyoff=0,this.volDelta=0,this.fadeEnabled=0,this.fadeDelta=0,this.rowCurrent=null,this.fadeVolume=65536,this.autoVibratoPos=0,this.autoSweep=1,this.autoSweepPos=0,this.vibDelta=0,this.vibratoReset=0,(this.waveControl&15)<4&&(this.vibratoPos=0),this.waveControl>>4<4&&(this.tremoloPos=0)}},autoVibrato:{value:function(){var e;switch(this.autoVibratoPos=this.autoVibratoPos+this.playing.vibratoSpeed&255,this.playing.vibratoType){case 0:e=os[this.autoVibratoPos];break;case 1:this.autoVibratoPos<128?e=-64:e=64;break;case 2:e=(64+(this.autoVibratoPos>>1)&127)-64;break;case 3:e=(64-(this.autoVibratoPos>>1)&127)-64;break;default:break}return e*=this.playing.vibratoDepth,this.autoSweep&&(this.playing.vibratoSweep?this.autoSweepPos>this.playing.vibratoSweep?(this.autoSweepPos&2&&(e*=this.autoSweepPos/this.playing.vibratoSweep),this.autoSweep=0):e*=++this.autoSweepPos/this.playing.vibratoSweep:this.autoSweep=0),this.flags|=ye,e>>6}},tonePortamento:{value:function(){this.glissPeriod||(this.glissPeriod=this.period),this.period<this.portaPeriod?(this.glissPeriod+=this.portaSpeed<<2,this.glissando?this.period=Math.round(this.glissPeriod/64)<<6:this.period=this.glissPeriod,this.period>=this.portaPeriod&&(this.period=this.portaPeriod,this.glissPeriod=this.portaPeriod=0)):this.period>this.portaPeriod&&(this.glissPeriod-=this.portaSpeed<<2,this.glissando?this.period=Math.round(this.glissPeriod/64)<<6:this.period=this.glissPeriod,this.period<=this.portaPeriod&&(this.period=this.portaPeriod,this.glissPeriod=this.portaPeriod=0)),this.flags|=ye}},tremolo:{value:function(){var e=255,i=this.tremoloPos&31;switch(this.waveControl>>4&3){case 0:e=na[i];break;case 1:e=i<<3;break;default:break}this.volDelta=e*this.tremoloDepth>>6,this.tremoloPos>31&&(this.volDelta=-this.volDelta),this.tremoloPos=this.tremoloPos+this.tremoloSpeed&63,this.flags|=Z}},tremor:{value:function(){this.tremorPos===this.tremorOn?(this.tremorVolume=this.volume,this.volume=0,this.flags|=Z):(this.tremorPos=0,this.volume=this.tremorVolume,this.flags|=Z),this.tremorPos++}},vibrato:{value:function(){var e=255,i=this.vibratoPos&31;switch(this.waveControl&3){case 0:e=na[i];break;case 1:e=i<<3,this.vibratoPos>31&&(e=255-e);break;default:break}this.vibDelta=e*this.vibratoDepth>>7,this.vibratoPos>31&&(this.vibDelta=-this.vibDelta),this.vibratoPos=this.vibratoPos+this.vibratoSpeed&63,this.flags|=ye}}});return t.volEnvelope=ea(),t.panEnvelope=ea(),Object.seal(t)}function Ci(){return Object.create(null,{points:{value:[],writable:!0},total:{value:0,writable:!0},sustain:{value:0,writable:!0},loopStart:{value:0,writable:!0},loopEnd:{value:0,writable:!0},flags:{value:0,writable:!0}})}function ea(){return Object.create(null,{value:{value:0,writable:!0},position:{value:0,writable:!0},frame:{value:0,writable:!0},delta:{value:0,writable:!0},fraction:{value:0,writable:!0},stopped:{value:0,writable:!0},reset:{value:function(){this.value=0,this.position=0,this.frame=0,this.delta=0,this.fraction=0,this.stopped=0}}})}function ta(){var o=Object.create(null,{name:{value:"",writable:!0},samples:{value:[],writable:!0},noteSamples:{value:null,writable:!0},fadeout:{value:0,writable:!0},volData:{value:null,writable:!0},volEnabled:{value:0,writable:!0},panData:{value:null,writable:!0},panEnabled:{value:0,writable:!0},vibratoType:{value:0,writable:!0},vibratoSweep:{value:0,writable:!0},vibratoSpeed:{value:0,writable:!0},vibratoDepth:{value:0,writable:!0}});return o.noteSamples=new Uint8Array(96),o.volData=Ci(),o.panData=Ci(),Object.seal(o)}function oa(o,t){var e=Object.create(null,{rows:{value:[],writable:!0},length:{value:0,writable:!0},size:{value:0,writable:!0}});return e.rows.length=e.size=o*t,e.length=o,Object.seal(e)}function Ei(o,t){var e=Object.create(null,{frame:{value:0,writable:!0},value:{value:0,writable:!0}});return e.frame=o||0,e.value=t||0,Object.seal(e)}function Zi(){return Object.create(null,{note:{value:0,writable:!0},instrument:{value:0,writable:!0},volume:{value:0,writable:!0},effect:{value:0,writable:!0},param:{value:0,writable:!0}})}function ia(){var o=Zr();return Object.defineProperties(o,{finetune:{value:0,writable:!0},panning:{value:0,writable:!0},relative:{value:0,writable:!0}}),Object.seal(o)}function Jn(o){var t=Qr(o);return Object.defineProperties(t,{id:{value:"F2Player"},patterns:{value:[],writable:!0},instruments:{value:[],writable:!0},voices:{value:[],writable:!0},linear:{value:0,writable:!0},complete:{value:0,writable:!0},order:{value:0,writable:!0},position:{value:0,writable:!0},nextOrder:{value:0,writable:!0},nextPosition:{value:0,writable:!0},pattern:{value:null,writable:!0},patternDelay:{value:0,writable:!0},patternOffset:{value:0,writable:!0},timer:{value:0,writable:!0},rowCurrent:{value:0,writable:!0},initialize:{value:function(){var e=0,i;for(this.reset(),this.timer=this.speed,this.order=0,this.position=0,this.nextOrder=-1,this.nextPosition=-1,this.patternDelay=0,this.patternOffset=0,this.complete=0,this.master=64,this.voices.length=this.channels;e<this.channels;++e)i=Kn(e),i.channel=this.mixer.channels[e],i.playing=this.instruments[0],i.sample=i.playing.samples[0],this.voices[e]=i,e&&(this.voices[e-1].next=i)}},loader:{value:function(e){var i,r,s,l,a,n,u,d,c,h,m=22,p,f,g,y;if(!(e.length<360)){if(e.position=17,this.title=e.readString(20),e.position++,s=e.readString(20),s==="FastTracker v2.00   "||s==="FastTracker v 2.00  ")this.version=1;else if(s==="Sk@le Tracker")m=2,this.version=2;else if(s==="MadTracker 2.0")this.version=3;else if(s==="MilkyTracker        ")this.version=4;else if(s==="DigiBooster Pro 2.18")this.version=5;else if(s.indexOf("OpenMPT")!==-1)this.version=6;else return;for(e.readUshort(),i=e.readUint(),this.length=e.readUshort(),this.restart=e.readUshort(),this.channels=e.readUshort(),y=f=e.readUshort(),this.instruments=[],this.instruments.length=e.readUshort()+1,this.linear=e.readUshort(),this.speed=e.readUshort(),this.tempo=e.readUshort(),this.track=new Uint8Array(this.length),r=0;r<this.length;++r)u=e.readUbyte(),u>=y&&(f=u+1),this.track[r]=u;if(this.patterns=[],this.patterns.length=f,f!==y){for(c=oa(64,this.channels),u=c.size,r=0;r<u;++r)c.rows[r]=Zi();this.patterns[--f]=c}for(e.position=h=i+60,d=y,r=0;r<d;++r){if(i=e.readUint(),e.position++,c=oa(e.readUshort(),this.channels),f=c.size,y=e.readUshort(),e.position=h+i,n=e.position+y,y)for(u=0;u<f;++u)p=Zi(),y=e.readUbyte(),y&128?(y&1&&(p.note=e.readUbyte()),y&2&&(p.instrument=e.readUbyte()),y&4&&(p.volume=e.readUbyte()),y&8&&(p.effect=e.readUbyte()),y&16&&(p.param=e.readUbyte())):(p.note=y,p.instrument=e.readUbyte(),p.volume=e.readUbyte(),p.effect=e.readUbyte(),p.param=e.readUbyte()),p.note!==Qi&&p.note>96&&(p.note=0),c.rows[u]=p;else for(u=0;u<f;++u)c.rows[u]=Zi();this.patterns[r]=c,h=e.position,h!==n&&(h=e.position=n)}for(n=e.position,d=this.instruments.length,r=1;r<d&&(l=e.readUint(),!(e.position+l>=e.length));++r){if(a=ta(),a.name=e.readString(22),e.position++,y=e.readUshort(),y>16&&(y=16),i=e.readUint(),m===2&&i!==64&&(i=64),y){for(a.samples=[],a.samples.length=y,u=0;u<96;++u)a.noteSamples[u]=e.readUbyte();for(u=0;u<12;++u)a.volData.points[u]=Ei(e.readUshort(),e.readUshort());for(u=0;u<12;++u)a.panData.points[u]=Ei(e.readUshort(),e.readUshort());for(a.volData.total=e.readUbyte(),a.panData.total=e.readUbyte(),a.volData.sustain=e.readUbyte(),a.volData.loopStart=e.readUbyte(),a.volData.loopEnd=e.readUbyte(),a.panData.sustain=e.readUbyte(),a.panData.loopStart=e.readUbyte(),a.panData.loopEnd=e.readUbyte(),a.volData.flags=e.readUbyte(),a.panData.flags=e.readUbyte(),a.volData.flags&ra&&(a.volEnabled=1),a.panData.flags&ra&&(a.panEnabled=1),a.vibratoType=e.readUbyte(),a.vibratoSweep=e.readUbyte(),a.vibratoDepth=e.readUbyte(),a.vibratoSpeed=e.readUbyte(),a.fadeout=e.readUshort()<<1,e.position+=m,h=e.position,this.instruments[r]=a,u=0;u<y;++u)g=ia(),g.length=e.readUint(),g.loopStart=e.readUint(),g.loopLen=e.readUint(),g.volume=e.readUbyte(),g.finetune=e.readByte(),g.loopMode=e.readUbyte(),g.panning=e.readUbyte(),g.relative=e.readByte(),e.position++,g.name=e.readString(22),a.samples[u]=g,e.position=h+=i;for(u=0;u<y;++u)g=a.samples[u],g.length&&(h=e.position+g.length,g.loopMode&16&&(g.bits=16,g.loopMode^=16,g.length>>=1,g.loopStart>>=1,g.loopLen>>=1),g.loopLen||(g.loopMode=0),g.store(e),g.loopMode&&(g.length=g.loopStart+g.loopLen),e.position=h)}else e.position=n+l;if(n=e.position,n>=e.length)break}for(a=ta(),a.volData=Ci(),a.panData=Ci(),a.samples=[],r=0;r<12;++r)a.volData.points[r]=Ei(),a.panData.points[r]=Ei();for(g=ia(),g.length=220,g.data=new Float32Array(220),r=0;r<220;++r)g.data[r]=0;a.samples[0]=g,this.instruments[0]=a}}},process:{value:function(){var e,i,r,s,l,a,n,u,d,c,h,m,p,f=this.voices[0];if(this.tick)for(;f;){if(c=this.pattern.rows[this.position+f.index],f.delay)if((c.param&15)===this.tick)f.flags=f.delay,f.delay=0;else{f=f.next;continue}if(c.volume)switch(n=c.volume>>4,u=c.volume&15,n){case 6:f.volume-=u,f.volume<0&&(f.volume=0),f.flags|=Z;break;case 7:f.volume+=u,f.volume>64&&(f.volume=64),f.flags|=Z;break;case 11:f.vibrato();break;case 13:f.panning-=u,f.panning<0&&(f.panning=0),f.flags|=ze;break;case 14:f.panning+=u,f.panning>255&&(f.panning=255),f.flags|=ze;break;case 15:f.portaPeriod&&f.tonePortamento();break;default:break}switch(n=c.param>>4,u=c.param&15,c.effect){case 0:if(!c.param)break;p=(this.tick-this.timer)%3,p<0&&(p+=3),this.tick===2&&this.timer===18&&(p=0),p?p===1?this.linear?f.arpDelta=-(u<<6):(p=this.amiga(f.note+u,f.finetune),f.arpDelta=p-f.period):this.linear?f.arpDelta=-(n<<6):(p=this.amiga(f.note+n,f.finetune),f.arpDelta=p-f.period):f.arpDelta=0,f.flags|=ye;break;case 1:f.period-=f.portaU,f.period<0&&(f.period=0),f.flags|=ye;break;case 2:f.period+=f.portaD,f.period>9212&&(f.period=9212),f.flags|=ye;break;case 3:f.portaPeriod&&f.tonePortamento();break;case 4:n&&(f.vibratoSpeed=n),u&&(f.vibratoDepth=u<<2),f.vibrato();break;case 5:m=1,f.portaPeriod&&f.tonePortamento();break;case 6:m=1,f.vibrato();break;case 7:f.tremolo();break;case 10:m=1;break;case 14:switch(n){case 9:this.tick%u===0&&(f.volEnvelope.reset(),f.panEnvelope.reset(),f.flags|=Z|ze|Bt);break;case 12:this.tick===u&&(f.volume=0,f.flags|=Z);break;default:break}break;case 17:n=f.volSlideMaster>>4,u=f.volSlideMaster&15,n?(this.master+=n,this.master>64&&(this.master=64),f.flags|=Z):u&&(this.master-=u,this.master<0&&(this.master=0),f.flags|=Z);break;case 20:this.tick===c.param&&(f.fadeEnabled=1,f.keyoff=1);break;case 24:n=f.panSlide>>4,u=f.panSlide&15,n?(f.panning+=n,f.panning>255&&(f.panning=255),f.flags|=ze):u&&(f.panning-=u,f.panning<0&&(f.panning=0),f.flags|=ze);break;case 27:if(e=this.tick,c.volume||e++,e%f.retrigy)break;(!c.volume||c.volume>80)&&f.retrigx&&this.retrig(f),f.flags|=Bt;break;case 29:f.tremor();break;default:break}m&&(n=f.volSlide>>4,u=f.volSlide&15,m=0,n?(f.volume+=n,f.flags|=Z):u&&(f.volume-=u,f.flags|=Z)),f=f.next}else for(this.nextOrder>=0&&(this.order=this.nextOrder),this.nextPosition>=0&&(this.position=this.nextPosition),this.nextOrder=this.nextPosition=-1,this.pattern=this.patterns[this.track[this.order]];f;){if(this.rowCurrent=this.position+f.index,c=this.pattern.rows[this.rowCurrent],e=c.volume>>4,d=c.effect===3||c.effect===5||e===15,n=c.param>>4,f.keyoff=0,f.arpDelta&&(f.arpDelta=0,f.flags|=ye),c.instrument?(f.instrument=c.instrument<this.instruments.length?this.instruments[c.instrument]:null,f.volEnvelope.reset(),f.panEnvelope.reset(),f.flags|=Z|ze|Pt):(c.note===Qi||c.effect===20&&!c.param)&&(f.fadeEnabled=1,f.keyoff=1),c.note&&c.note!==Qi?f.instrument?(r=f.instrument,p=c.note-1,h=r.samples[r.noteSamples[p]],p+=h.relative,p>=es&&p<=ts&&(d||(f.note=p,f.sample=h,c.instrument?(f.volEnabled=r.volEnabled,f.panEnabled=r.panEnabled,f.flags|=Zn):f.flags|=ye|Bt),c.instrument?(f.reset(),f.fadeDelta=r.fadeout):f.finetune=h.finetune>>3<<2,c.effect===14&&n===5&&(f.finetune=(c.param&15)-8<<3),this.linear?p=(120-p<<6)-f.finetune:p=this.amiga(p,f.finetune),d?f.portaPeriod=p:(f.period=p,f.glissPeriod=0))):(f.volume=0,f.flags=Z|Pt):f.vibratoReset&&c.effect!==4&&c.effect!==6&&(f.vibDelta=0,f.vibratoReset=0,f.flags|=ye),c.volume)if(c.volume>=16&&c.volume<=80)f.volume=c.volume-16,f.flags|=Z|Pt;else switch(u=c.volume&15,e){case 6:f.volume-=u,f.volume<0&&(f.volume=0),f.flags|=Z;break;case 7:f.volume+=u,f.volume>64&&(f.volume=64),f.flags|=Z;break;case 10:u&&(f.vibratoSpeed=u);break;case 11:u&&(f.vibratoDepth=u<<2);break;case 12:f.panning=u<<4,f.flags|=ze;break;case 15:u&&(f.portaSpeed=u<<4);break;default:break}if(c.effect)switch(u=c.param&15,c.effect){case 1:c.param&&(f.portaU=c.param<<2);break;case 2:c.param&&(f.portaD=c.param<<2);break;case 3:c.param&&e!==15&&(f.portaSpeed=c.param);break;case 4:f.vibratoReset=1;break;case 5:c.param&&(f.volSlide=c.param);break;case 6:c.param&&(f.volSlide=c.param),f.vibratoReset=1;break;case 7:n&&(f.tremoloSpeed=n),u&&(f.tremoloDepth=u);break;case 8:f.panning=c.param,f.flags|=ze;break;case 9:c.param&&(f.sampleOffset=c.param<<8),f.sampleOffset>=f.sample.length&&(f.volume=0,f.sampleOffset=0,f.flags&=~(ye|Bt),f.flags|=Z|Pt);break;case 10:c.param&&(f.volSlide=c.param);break;case 11:this.nextOrder=c.param,this.nextOrder>=this.length?this.complete=1:this.nextPosition=0,l=1,this.patternOffset=0;break;case 12:f.volume=c.param,f.flags|=Z|Pt;break;case 13:this.nextPosition=(n*10+u)*this.channels,this.patternOffset=0,l||(this.nextOrder=this.order+1,this.nextOrder>=this.length&&(this.complete=1,this.nextPosition=-1));break;case 14:switch(n){case 1:u&&(f.finePortaU=u<<2),f.period-=f.finePortaU,f.flags|=ye;break;case 2:u&&(f.finePortaD=u<<2),f.period+=f.finePortaD,f.flags|=ye;break;case 3:f.glissando=u;break;case 4:f.waveControl=f.waveControl&240|u;break;case 6:u?(f.patternLoop?f.patternLoop--:f.patternLoop=u,f.patternLoop&&(this.nextPosition=f.patternLoopRow)):f.patternLoopRow=this.patternOffset=this.position;break;case 7:f.waveControl=f.waveControl&15|u<<4;break;case 10:u&&(f.fineSlideU=u),f.volume+=f.fineSlideU,f.flags|=Z;break;case 11:u&&(f.fineSlideD=u),f.volume-=f.fineSlideD,f.flags|=Z;break;case 13:f.delay=f.flags,f.flags=0;break;case 14:this.patternDelay=u*this.timer;break;default:break}break;case 15:if(!c.param)break;c.param<32?this.timer=c.param:this.mixer.samplesTick=this.sampleRate*2.5/c.param>>0;break;case 16:this.master=c.param,this.master>64&&(this.master=64),f.flags|=Z;break;case 17:c.param&&(f.volSlideMaster=c.param);break;case 21:if(!f.instrument||!f.instrument.volEnabled)break;for(r=f.instrument,p=c.param,n=r.volData.total,s=0;s<n&&!(p<r.volData.points[s].frame);s++);f.volEnvelope.position=--s,n--,r.volData.flags&aa&&s===r.volData.loopEnd&&(s=f.volEnvelope.position=r.volData.loopStart,p=r.volData.points[s].frame,f.volEnvelope.frame=p),s>=n?(f.volEnvelope.value=r.volData.points[n].value,f.volEnvelope.stopped=1):(f.volEnvelope.stopped=0,f.volEnvelope.frame=p,p>r.volData.points[s].frame&&f.volEnvelope.position++,i=r.volData.points[s],a=r.volData.points[++s],p=a.frame-i.frame,f.volEnvelope.delta=(p?(a.value-i.value<<8)/p>>0:0)||0,f.volEnvelope.fraction=i.value<<8);break;case 24:c.param&&(f.panSlide=c.param);break;case 27:if(n&&(f.retrigx=n),u&&(f.retrigy=u),!c.volume&&f.retrigy){if(e=this.tick+1,e%f.retrigy)break;c.volume>80&&f.retrigx&&this.retrig(f)}break;case 29:c.param&&(f.tremorOn=++n,f.tremorOff=++u+n);break;case 33:n===1?(u&&(f.xtraPortaU=u),f.period-=f.xtraPortaU,f.flags|=ye):n===2&&(u&&(f.xtraPortaD=u),f.period+=f.xtraPortaD,f.flags|=ye);break;default:break}f=f.next}++this.tick>=this.timer+this.patternDelay&&(this.patternDelay=this.tick=0,this.nextPosition<0&&(this.nextPosition=this.position+this.channels,(this.nextPosition>=this.pattern.size||this.complete)&&(this.nextOrder=this.order+1,this.nextPosition=this.patternOffset,this.nextOrder>=this.length&&(this.nextOrder=this.restart,this.mixer.complete=1))))}},fast:{value:function(){for(var e,i,r,s,l,a=this.voices[0],n;a;)e=a.channel,r=a.flags,a.flags=0,r&Bt&&(e.index=a.sampleOffset,e.pointer=-1,e.dir=0,e.fraction=0,e.sample=a.sample,e.length=a.sample.length,e.enabled=e.sample.data?1:0,a.playing=a.instrument,a.sampleOffset=0),s=a.playing,i=s.vibratoSpeed?a.autoVibrato():0,n=a.volume+a.volDelta,s.volEnabled?(a.volEnabled&&!a.volEnvelope.stopped&&this.envelope(a,a.volEnvelope,s.volData),n=n*a.volEnvelope.value>>6,r|=Z,a.fadeEnabled&&(a.fadeVolume-=a.fadeDelta,a.fadeVolume<0?(n=0,a.fadeVolume=0,a.fadeEnabled=0,a.volEnvelope.value=0,a.volEnvelope.stopped=1,a.panEnvelope.stopped=1):n=n*a.fadeVolume>>16)):a.keyoff&&(n=0,r|=Z),l=a.panning,s.panEnabled&&(a.panEnabled&&!a.panEnvelope.stopped&&this.envelope(a,a.panEnvelope,s.panData),l=a.panEnvelope.value<<2,r|=ze,l<0?l=0:l>255&&(l=255)),r&Z&&(n<0?n=0:n>64&&(n=64),e.volume=sa[n*this.master>>6],e.lvol=e.volume*e.lpan,e.rvol=e.volume*e.rpan),r&ze&&(e.panning=l,e.lpan=Nt[256-l],e.rpan=Nt[l],e.lvol=e.volume*e.lpan,e.rvol=e.volume*e.rpan),r&ye&&(i+=a.period+a.arpDelta+a.vibDelta,this.linear?e.speed=(548077568*Math.pow(2,(4608-i)/768)/this.sampleRate>>0)/65536:e.speed=(65536*(14317456/i)/this.sampleRate>>0)/65536,e.delta=e.speed>>0,e.speed-=e.delta),a=a.next}},accurate:{value:function(){for(var e,i,r,s,l,a,n,u,d,c=this.voices[0],h;c;){if(e=c.channel,r=c.flags,c.flags=0,r&Bt&&(e.sample&&(r|=Pt,e.mixCounter=220,e.oldSample=null,e.oldPointer=-1,e.enabled&&(e.oldDir=e.dir,e.oldFraction=e.fraction,e.oldSpeed=e.speed,e.oldSample=e.sample,e.oldPointer=e.pointer,e.oldLength=e.length,e.lmixRampD=e.lvol,e.lmixDeltaD=e.lvol/220,e.rmixRampD=e.rvol,e.rmixDeltaD=e.rvol/220)),e.dir=1,e.fraction=0,e.sample=c.sample,e.pointer=c.sampleOffset,e.length=c.sample.length,e.enabled=e.sample.data?1:0,c.playing=c.instrument,c.sampleOffset=0),s=c.playing,i=s.vibratoSpeed?c.autoVibrato():0,h=c.volume+c.volDelta,s.volEnabled?(c.volEnabled&&!c.volEnvelope.stopped&&this.envelope(c,c.volEnvelope,s.volData),h=h*c.volEnvelope.value>>6,r|=Z,c.fadeEnabled&&(c.fadeVolume-=c.fadeDelta,c.fadeVolume<0?(h=0,c.fadeVolume=0,c.fadeEnabled=0,c.volEnvelope.value=0,c.volEnvelope.stopped=1,c.panEnvelope.stopped=1):h=h*c.fadeVolume>>16)):c.keyoff&&(h=0,r|=Z),n=c.panning,s.panEnabled&&(c.panEnabled&&!c.panEnvelope.stopped&&this.envelope(c,c.panEnvelope,s.panData),n=c.panEnvelope.value<<2,r|=ze,n<0?n=0:n>255&&(n=255)),!e.enabled){e.volCounter=0,e.panCounter=0,c=c.next;continue}r&Z&&(h<0?h=0:h>64&&(h=64),h=sa[h*this.master>>6],a=h*Nt[256-n],d=h*Nt[n],h!==e.volume&&!e.mixCounter?(e.volCounter=r&Pt?220:this.mixer.samplesTick,e.lvolDelta=(a-e.lvol)/e.volCounter,e.rvolDelta=(d-e.rvol)/e.volCounter):(e.lvol=a,e.rvol=d),e.volume=h),r&ze&&(l=Nt[256-n],u=Nt[n],n!==e.panning&&!e.mixCounter&&!e.volCounter?(e.panCounter=this.mixer.samplesTick,e.lpanDelta=(l-e.lpan)/e.panCounter,e.rpanDelta=(u-e.rpan)/e.panCounter):(e.lpan=l,e.rpan=u),e.panning=n),r&ye&&(i+=c.period+c.arpDelta+c.vibDelta,this.linear?e.speed=(548077568*Math.pow(2,(4608-i)/768)/this.sampleRate>>0)/65536:e.speed=(65536*(14317456/i)/this.sampleRate>>0)/65536),e.mixCounter&&(e.lmixRampU=0,e.lmixDeltaU=e.lvol/220,e.rmixRampU=0,e.rmixDeltaU=e.rvol/220),c=c.next}}},envelope:{value:function(e,i,r){var s=i.position,l=r.points[s],a;if(i.frame===l.frame){if(r.flags&aa&&s===r.loopEnd&&(s=i.position=r.loopStart,l=r.points[s],i.frame=l.frame),s===r.total-1){i.value=l.value,i.stopped=1;return}if(r.flags&Qn&&s===r.sustain&&!e.fadeEnabled){i.value=l.value;return}i.position++,a=r.points[i.position],i.delta=(a.value-l.value<<8)/(a.frame-l.frame)>>0||0,i.fraction=l.value<<8}else i.fraction+=i.delta;i.value=i.fraction>>8,i.frame++}},amiga:{value:function(e,i){var r=0,s=er[++e];return i<0?r=(er[--e]-s)/64:i>0&&(r=(s-er[++e])/64),s-r*i>>0}},retrig:{value:function(e){switch(e.retrigx){case 1:e.volume--;break;case 2:e.volume++;break;case 3:e.volume-=4;break;case 4:e.volume-=8;break;case 5:e.volume-=16;break;case 6:e.volume=(e.volume<<1)/3;break;case 7:e.volume>>=1;break;case 8:e.volume=e.sample.volume;break;case 9:e.volume++;break;case 10:e.volume+=2;break;case 11:e.volume+=4;break;case 12:e.volume+=8;break;case 13:e.volume+=16;break;case 14:e.volume=e.volume*3>>1;break;case 15:e.volume<<=1;break;default:break}e.volume<0?e.volume=0:e.volume>64&&(e.volume=64),e.flags|=Z}}}),Object.seal(t)}var ye=1,Z=2,ze=4,Bt=8,Zn=15,Pt=32,ra=1,Qn=2,aa=4,es=0,ts=118,Qi=97,os=[0,-2,-3,-5,-6,-8,-9,-11,-12,-14,-16,-17,-19,-20,-22,-23,-24,-26,-27,-29,-30,-32,-33,-34,-36,-37,-38,-39,-41,-42,-43,-44,-45,-46,-47,-48,-49,-50,-51,-52,-53,-54,-55,-56,-56,-57,-58,-59,-59,-60,-60,-61,-61,-62,-62,-62,-63,-63,-63,-64,-64,-64,-64,-64,-64,-64,-64,-64,-64,-64,-63,-63,-63,-62,-62,-62,-61,-61,-60,-60,-59,-59,-58,-57,-56,-56,-55,-54,-53,-52,-51,-50,-49,-48,-47,-46,-45,-44,-43,-42,-41,-39,-38,-37,-36,-34,-33,-32,-30,-29,-27,-26,-24,-23,-22,-20,-19,-17,-16,-14,-12,-11,-9,-8,-6,-5,-3,-2,0,2,3,5,6,8,9,11,12,14,16,17,19,20,22,23,24,26,27,29,30,32,33,34,36,37,38,39,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,56,57,58,59,59,60,60,61,61,62,62,62,63,63,63,64,64,64,64,64,64,64,64,64,64,64,63,63,63,62,62,62,61,61,60,60,59,59,58,57,56,56,55,54,53,52,51,50,49,48,47,46,45,44,43,42,41,39,38,37,36,34,33,32,30,29,27,26,24,23,22,20,19,17,16,14,12,11,9,8,6,5,3,2],na=[0,24,49,74,97,120,141,161,180,197,212,224,235,244,250,253,255,253,250,244,235,224,212,197,180,161,141,120,97,74,49,24],Nt=[0,.04417,.062489,.076523,.088371,.098821,.108239,.116927,.124977,.132572,.139741,.146576,.153077,.159335,.16535,.171152,.176772,.18221,.187496,.19263,.197643,.202503,.207273,.211951,.216477,.220943,.225348,.229631,.233854,.237985,.242056,.246066,.249985,.253873,.25767,.261437,.265144,.268819,.272404,.275989,.279482,.282976,.286409,.289781,.293153,.296464,.299714,.302965,.306185,.309344,.312473,.315602,.318671,.321708,.324746,.327754,.3307,.333647,.336563,.339449,.342305,.345161,.347986,.350781,.353545,.356279,.359013,.361717,.364421,.367094,.369737,.37238,.374992,.377574,.380157,.382708,.38526,.387782,.390303,.392794,.395285,.397746,.400176,.402606,.405037,.407437,.409836,.412206,.414576,.416915,.419254,.421563,.423841,.42618,.428458,.430737,.432985,.435263,.437481,.439729,.441916,.444134,.446321,.448508,.450665,.452852,.455009,.457136,.459262,.461389,.463485,.465611,.467708,.469773,.471839,.473935,.47597,.478036,.480072,.482077,.484112,.486117,.488122,.490127,.492101,.494106,.496051,.498025,.5,.501944,.503888,.505802,.507746,.50966,.511574,.513488,.515371,.517255,.519138,.521022,.522905,.524758,.526611,.528465,.530318,.53214,.533993,.535816,.537639,.539462,.541254,.543046,.544839,.546631,.548423,.550216,.551978,.553739,.555501,.557263,.558995,.560757,.562489,.56422,.565952,.567683,.569384,.571116,.572817,.574518,.57622,.57789,.579592,.581262,.582964,.584634,.586305,.587946,.589617,.591257,.592928,.594568,.596209,.597849,.599459,.6011,.60271,.60435,.60596,.60757,.60915,.61076,.61237,.61395,.61556,.617139,.618719,.620268,.621848,.623428,.624977,.626557,.628106,.629655,.631205,.632754,.634303,.635822,.637372,.63889,.64044,.641959,.643478,.644966,.646485,.648004,.649523,.651012,.6525,.653989,.655477,.656966,.658454,.659943,.661431,.66289,.664378,.665836,.667294,.668783,.670241,.671699,.673127,.674585,.676043,.677471,.678929,.680357,.681785,.683213,.684641,.686068,.687496,.688894,.690321,.691749,.693147,.694574,.695972,.697369,.698767,.700164,.701561,.702928,.704326,.705723,.70711],sa=[0,.005863,.013701,.021569,.029406,.037244,.045082,.052919,.060757,.068625,.076463,.0843,.092138,.099976,.107844,.115681,.123519,.131357,.139194,.147032,.1549,.162738,.170575,.178413,.186251,.194119,.201956,.209794,.217632,.225469,.233307,.241175,.249013,.25685,.264688,.272526,.280394,.288231,.296069,.303907,.311744,.319582,.32745,.335288,.343125,.350963,.3588,.366669,.374506,.382344,.390182,.398019,.405857,.413725,.421563,.4294,.437238,.445076,.452944,.460781,.468619,.476457,.484294,.492132,.5],er=[29024,27392,25856,24384,23040,21696,20480,19328,18240,17216,16256,15360,14512,13696,12928,12192,11520,10848,10240,9664,9120,8608,8128,7680,7256,6848,6464,6096,5760,5424,5120,4832,4560,4304,4064,3840,3628,3424,3232,3048,2880,2712,2560,2416,2280,2152,2032,1920,1814,1712,1616,1524,1440,1356,1280,1208,1140,1076,1016,960,907,856,808,762,720,678,640,604,570,538,508,480,453,428,404,381,360,339,320,302,285,269,254,240,227,214,202,190,180,169,160,151,142,134,127,120,113,107,101,95,90,85,80,75,71,67,63,60,57,53,50,48,45,42,40,38,36,34,32,30,28],la=Jn;function Pi(o){return Object.create(null,{index:{value:o,writable:!0},next:{value:null,writable:!0},channel:{value:null,writable:!0},sample:{value:null,writable:!0},enabled:{value:0,writable:!0},period:{value:0,writable:!0},effect:{value:0,writable:!0},param:{value:0,writable:!0},volume:{value:0,writable:!0},portaDir:{value:0,writable:!0},portaPeriod:{value:0,writable:!0},portaSpeed:{value:0,writable:!0},vibratoPos:{value:0,writable:!0},vibratoSpeed:{value:0,writable:!0},initialize:{value:function(){this.channel=null,this.sample=null,this.enabled=0,this.period=0,this.effect=0,this.param=0,this.volume=0,this.portaDir=0,this.portaPeriod=0,this.portaSpeed=0,this.vibratoPos=0,this.vibratoSpeed=0}}})}function is(o){var t=Si(o);return Object.defineProperties(t,{id:{value:"MKPlayer"},track:{value:null,writable:!0},patterns:{value:[],writable:!0},samples:{value:[],writable:!0},length:{value:0,writable:!0},restart:{value:0,writable:!0},voices:{value:[],writable:!0},trackPos:{value:0,writable:!0},patternPos:{value:0,writable:!0},jumpFlag:{value:0,writable:!0},vibratoDepth:{value:0,writable:!0},restartSave:{value:0,writable:!0},force:{set:function(e){e<tr?e=tr:e>Mt&&(e=Mt),this.version=e,e===Mt?this.vibratoDepth=6:this.vibratoDepth=7,e===ca?(this.restartSave=this.restart,this.restart=0):(this.restart=this.restartSave,this.restartSave=0)}},initialize:{value:function(){var e=this.voices[0];for(this.reset(),this.force=this.version,this.speed=6,this.trackPos=0,this.patternPos=0,this.jumpFlag=0;e;)e.initialize(),e.channel=this.mixer.channels[e.index],e.sample=this.samples[0],e=e.next}},loader:{value:function(e){var i=0,r,s,l,a,n,u=0,d;if(!(e.length<2106)&&(e.position=1080,s=e.readString(4),!(s!=="M.K."&&s!=="FLT4"))){for(e.position=0,this.title=e.readString(20),this.version=tr,e.position+=22,r=1;r<32;++r){if(d=e.readUshort(),!d){this.samples[r]=null,e.position+=28;continue}n=So(),e.position-=24,n.name=e.readString(22),n.length=d<<1,e.position+=3,n.volume=e.readUbyte(),n.loop=e.readUshort()<<1,n.repeat=e.readUshort()<<1,e.position+=22,n.pointer=u,u+=n.length,this.samples[r]=n,n.length>32768&&(this.version=rs)}for(e.position=950,this.length=e.readUbyte(),d=e.readUbyte(),this.restart=d<this.length?d:0,r=0;r<128;++r)d=e.readUbyte()<<8,this.track[r]=d,d>i&&(i=d);for(e.position=1084,i+=256,this.patterns.length=i,r=0;r<i;++r)if(a=ki(),d=e.readUint(),a.note=d>>16&4095,a.effect=d>>8&15,a.sample=d>>24&240|d>>12&15,a.param=d&255,this.patterns[r]=a,(a.sample>31||!this.samples[a.sample])&&(a.sample=0),(a.effect===3||a.effect===4)&&(this.version=ca),(a.effect===5||a.effect===6)&&(this.version=Mt),a.effect>6&&a.effect<10){this.version=0;return}for(this.mixer.store(e,u),r=1;r<32;++r)if(n=this.samples[r],!!n)for(n.name.indexOf("2.0")>-1&&(this.version=Mt),n.loop?(n.loopPtr=n.pointer+n.loop,n.length=n.loop+n.repeat):(n.loopPtr=this.mixer.memory.length,n.repeat=2),u=n.pointer+4,l=n.pointer;l<u;++l)this.mixer.memory[l]=0;n=So(),n.pointer=n.loopPtr=this.mixer.memory.length,n.length=n.repeat=2,this.samples[0]=n,this.version<Mt&&this.restart!==127&&(this.version=as)}}},process:{value:function(){var e,i,r,s,l,a,n,u,d,c=this.voices[0];if(this.tick)for(;c;){if(e=c.channel,!c.effect&&!c.param){e.period=c.period,c=c.next;continue}switch(c.effect){case 0:if(d=this.tick%3,!d){e.period=c.period,c=c.next;continue}for(d===1?d=c.param>>4:d=c.param&15,l=c.period&4095,r=37-d,i=0;i<r;++i)if(l>=fa[i]){e.period=fa[i+d];break}break;case 1:c.period-=c.param,c.period<113&&(c.period=113),e.period=c.period;break;case 2:c.period+=c.param,c.period>856&&(c.period=856),e.period=c.period;break;case 3:case 5:c.effect===5?u=1:c.param&&(c.portaSpeed=c.param,c.param=0),c.portaPeriod&&(c.portaDir?(c.period-=c.portaSpeed,c.period<=c.portaPeriod&&(c.period=c.portaPeriod,c.portaPeriod=0)):(c.period+=c.portaSpeed,c.period>=c.portaPeriod&&(c.period=c.portaPeriod,c.portaPeriod=0))),e.period=c.period;break;case 4:case 6:c.effect===6?u=1:c.param&&(c.vibratoSpeed=c.param),d=c.vibratoPos>>2&31,d=(c.vibratoSpeed&15)*ns[d]>>this.vibratoDepth,c.vibratoPos>127?e.period=c.period-d:e.period=c.period+d,d=c.vibratoSpeed>>2&60,c.vibratoPos=c.vibratoPos+d&255;break;case 10:u=1;break;default:break}u&&(d=c.param>>4,u=0,d?c.volume+=d:c.volume-=c.param&15,c.volume<0?c.volume=0:c.volume>64&&(c.volume=64),e.volume=c.volume),c=c.next}else for(s=this.track[this.trackPos]+this.patternPos;c;){switch(e=c.channel,c.enabled=0,a=this.patterns[s+c.index],c.effect=a.effect,c.param=a.param,a.sample?(n=c.sample=this.samples[a.sample],e.volume=c.volume=n.volume):n=c.sample,a.note&&(c.effect===3||c.effect===5?a.note<c.period?(c.portaDir=1,c.portaPeriod=a.note):a.note>c.period?(c.portaDir=0,c.portaPeriod=a.note):c.portaPeriod=0:(c.enabled=1,c.vibratoPos=0,e.enabled=0,e.pointer=n.pointer,e.length=n.length,e.period=c.period=a.note)),c.effect){case 11:this.trackPos=c.param-1,this.jumpFlag^=1;break;case 12:e.volume=c.param,this.version===Mt&&(c.volume=c.param);break;case 13:this.jumpFlag^=1;break;case 14:this.mixer.filter.active=c.param^1;break;case 15:d=c.param,d<1?d=1:d>31&&(d=31),this.speed=d,this.tick=0;break;default:break}c.enabled&&(e.enabled=1),e.pointer=n.loopPtr,e.length=n.repeat,c=c.next}++this.tick===this.speed&&(this.tick=0,this.patternPos+=4,(this.patternPos===256||this.jumpFlag)&&(this.patternPos=this.jumpFlag=0,this.trackPos=++this.trackPos&127,this.trackPos===this.length&&(this.trackPos=this.restart,this.mixer.complete=1)))}}}),t.voices[0]=Pi(0),t.voices[0].next=t.voices[1]=Pi(1),t.voices[1].next=t.voices[2]=Pi(2),t.voices[2].next=t.voices[3]=Pi(3),t.track=new Uint16Array(128),Object.seal(t)}var tr=1,rs=2,ca=3,as=4,Mt=5,fa=[856,808,762,720,678,640,604,570,538,508,480,453,428,404,381,360,339,320,302,285,269,254,240,226,214,202,190,180,170,160,151,143,135,127,120,113,0],ns=[0,24,49,74,97,120,141,161,180,197,212,224,235,244,250,253,255,253,250,244,235,224,212,197,180,161,141,120,97,74,49,24],ua=is;function Mi(o){return Object.create(null,{index:{value:o,writable:!0},next:{value:null,writable:!0},channel:{value:null,writable:!0},sample:{value:null,writable:!0},enabled:{value:0,writable:!0},loopCtr:{value:0,writable:!0},loopPos:{value:0,writable:!0},step:{value:0,writable:!0},period:{value:0,writable:!0},effect:{value:0,writable:!0},param:{value:0,writable:!0},volume:{value:0,writable:!0},pointer:{value:0,writable:!0},length:{value:0,writable:!0},loopPtr:{value:0,writable:!0},repeat:{value:0,writable:!0},finetune:{value:0,writable:!0},offset:{value:0,writable:!0},portaDir:{value:0,writable:!0},portaPeriod:{value:0,writable:!0},portaSpeed:{value:0,writable:!0},glissando:{value:0,writable:!0},tremoloParam:{value:0,writable:!0},tremoloPos:{value:0,writable:!0},tremoloWave:{value:0,writable:!0},vibratoParam:{value:0,writable:!0},vibratoPos:{value:0,writable:!0},vibratoWave:{value:0,writable:!0},funkPos:{value:0,writable:!0},funkSpeed:{value:0,writable:!0},funkWave:{value:0,writable:!0},initialize:{value:function(){this.channel=null,this.sample=null,this.enabled=0,this.loopCtr=0,this.loopPos=0,this.step=0,this.period=0,this.effect=0,this.param=0,this.volume=0,this.pointer=0,this.length=0,this.loopPtr=0,this.repeat=0,this.finetune=0,this.offset=0,this.portaDir=0,this.portaPeriod=0,this.portaSpeed=0,this.glissando=0,this.tremoloParam=0,this.tremoloPos=0,this.tremoloWave=0,this.vibratoParam=0,this.vibratoPos=0,this.vibratoWave=0,this.funkPos=0,this.funkSpeed=0,this.funkWave=0}}})}function ss(){var o=ki();return Object.defineProperties(o,{step:{value:0,writable:!0}}),Object.seal(o)}function da(){var o=So();return Object.defineProperties(o,{finetune:{value:0,writable:!0},realLen:{value:0,writable:!0}}),Object.seal(o)}function ls(o){var t=Si(o);return Object.defineProperties(t,{id:{value:"PTPlayer"},track:{value:null,writable:!0},patterns:{value:[],writable:!0},samples:{value:[],writable:!0},length:{value:0,writable:!0},voices:{value:[],writable:!0},trackPos:{value:0,writable:!0},patternPos:{value:0,writable:!0},patternBreak:{value:0,writable:!0},patternDelay:{value:0,writable:!0},breakPos:{value:0,writable:!0},jumpFlag:{value:0,writable:!0},vibratoDepth:{value:0,writable:!0},force:{set:function(e){e<_i?e=_i:e>or&&(e=or),this.version=e,e<ha?this.vibratoDepth=6:this.vibratoDepth=7}},initialize:{value:function(){var e=this.voices[0];for(this.tempo=125,this.speed=6,this.trackPos=0,this.patternPos=0,this.patternBreak=0,this.patternDelay=0,this.breakPos=0,this.jumpFlag=0,this.reset(),this.force=this.version;e;)e.initialize(),e.channel=this.mixer.channels[e.index],e.sample=this.samples[0],e=e.next}},loader:{value:function(e){var i=0,r,s,l,a,n,u=0,d;if(!(e.length<2106)&&(e.position=1080,s=e.readString(4),!(s!=="M.K."&&s!=="M!K!"))){for(e.position=0,this.title=e.readString(20),this.version=_i,e.position+=22,r=1;r<32;++r){if(d=e.readUshort(),!d){this.samples[r]=null,e.position+=28;continue}n=da(),e.position-=24,n.name=e.readString(22),n.length=n.realLen=d<<1,e.position+=2,n.finetune=e.readUbyte()*37,n.volume=e.readUbyte(),n.loop=e.readUshort()<<1,n.repeat=e.readUshort()<<1,e.position+=22,n.pointer=u,u+=n.length,this.samples[r]=n}for(e.position=950,this.length=e.readUbyte(),e.position++,r=0;r<128;++r)d=e.readUbyte()<<8,this.track[r]=d,d>i&&(i=d);for(e.position=1084,i+=256,this.patterns.length=i,r=0;r<i;++r)a=ss(),a.step=d=e.readUint(),a.note=d>>16&4095,a.effect=d>>8&15,a.sample=d>>24&240|d>>12&15,a.param=d&255,this.patterns[r]=a,(a.sample>31||!this.samples[a.sample])&&(a.sample=0),a.effect===15&&a.param>31&&(this.version=ha),a.effect===8&&(this.version=or);for(this.mixer.store(e,u),r=1;r<32;++r)if(n=this.samples[r],!!n)for(n.loop||n.repeat>4?(n.loopPtr=n.pointer+n.loop,n.length=n.loop+n.repeat):(n.loopPtr=this.mixer.memory.length,n.repeat=2),u=n.pointer+2,l=n.pointer;l<u;++l)this.mixer.memory[l]=0;n=da(),n.pointer=n.loopPtr=this.mixer.memory.length,n.length=n.repeat=2,this.samples[0]=n}}},process:{value:function(){var e,i,r,s,l,a,n=this.voices[0];if(this.tick)this.effects();else if(this.patternDelay)this.effects();else{for(r=this.track[this.trackPos]+this.patternPos;n;){if(e=n.channel,n.enabled=0,n.step||(e.period=n.period),s=this.patterns[r+n.index],n.step=s.step,n.effect=s.effect,n.param=s.param,s.sample?(l=n.sample=this.samples[s.sample],n.pointer=l.pointer,n.length=l.length,n.loopPtr=n.funkWave=l.loopPtr,n.repeat=l.repeat,n.finetune=l.finetune,e.volume=n.volume=l.volume):l=n.sample,s.note)if((n.step&4080)===3664)n.finetune=(n.param&15)*37;else if(n.effect===3||n.effect===5)if(s.note===n.period)n.portaPeriod=0;else{for(i=n.finetune,a=i+37;i<a&&!(s.note>=mt[i]);++i);i===a&&a--,i>0&&(a=n.finetune/37>>0&8,a&&i--),n.portaPeriod=mt[i],n.portaDir=s.note>n.portaPeriod?0:1}else n.effect===9&&this.moreEffects(n);else{this.moreEffects(n),n=n.next;continue}for(i=0;i<37&&!(s.note>=mt[i]);++i);if(n.period=mt[n.finetune+i],(n.step&4080)===3792){n.funkSpeed&&this.updateFunk(n),this.extended(n),n=n.next;continue}n.vibratoWave<4&&(n.vibratoPos=0),n.tremoloWave<4&&(n.tremoloPos=0),e.enabled=0,e.pointer=n.pointer,e.length=n.length,e.period=n.period,n.enabled=1,this.moreEffects(n),n=n.next}for(n=this.voices[0];n;)e=n.channel,n.enabled&&(e.enabled=1),e.pointer=n.loopPtr,e.length=n.repeat,n=n.next}++this.tick===this.speed&&(this.tick=0,this.patternPos+=4,this.patternDelay&&--this.patternDelay&&(this.patternPos-=4),this.patternBreak&&(this.patternBreak=0,this.patternPos=this.breakPos,this.breakPos=0),(this.patternPos===256||this.jumpFlag)&&(this.patternPos=this.breakPos,this.breakPos=0,this.jumpFlag=0,++this.trackPos===this.length&&(this.trackPos=0,this.mixer.complete=1)))}},effects:{value:function(){for(var e,i,r,s,l,a=this.voices[0],n;a;){if(e=a.channel,a.funkSpeed&&this.updateFunk(a),(a.step&4095)===0){e.period=a.period,a=a.next;continue}switch(a.effect){case 0:if(l=this.tick%3,!l){e.period=a.period,a=a.next;continue}for(l===1?l=a.param>>4:l=a.param&15,i=a.finetune,r=i+37;i<r;++i)if(a.period>=mt[i]){e.period=mt[i+l];break}break;case 1:a.period-=a.param,a.period<113&&(a.period=113),e.period=a.period;break;case 2:a.period+=a.param,a.period>856&&(a.period=856),e.period=a.period;break;case 3:case 5:if(a.effect===5?s=1:(a.portaSpeed=a.param,a.param=0),a.portaPeriod)if(a.portaDir?(a.period-=a.portaSpeed,a.period<=a.portaPeriod&&(a.period=a.portaPeriod,a.portaPeriod=0)):(a.period+=a.portaSpeed,a.period>=a.portaPeriod&&(a.period=a.portaPeriod,a.portaPeriod=0)),a.glissando){for(i=a.finetune,l=i+37;i<l&&!(a.period>=mt[i]);++i);i===l&&i--,e.period=mt[i]}else e.period=a.period;break;case 4:case 6:a.effect===6?s=1:a.param&&(l=a.param&15,l&&(a.vibratoParam=a.vibratoParam&240|l),l=a.param&240,l&&(a.vibratoParam=a.vibratoParam&15|l)),r=a.vibratoPos>>2&31,n=a.vibratoWave&3,n?(l=255,r<<=3,n===1&&(a.vibratoPos>127?l-=r:l=r)):l=pa[r],l=(a.vibratoParam&15)*l>>this.vibratoDepth,a.vibratoPos>127?e.period=a.period-l:e.period=a.period+l,l=a.vibratoParam>>2&60,a.vibratoPos=a.vibratoPos+l&255;break;case 7:e.period=a.period,a.param&&(l=a.param&15,l&&(a.tremoloParam=a.tremoloParam&240|l),l=a.param&240,l&&(a.tremoloParam=a.tremoloParam&15|l)),r=a.tremoloPos>>2&31,n=a.tremoloWave&3,n?(l=255,r<<=3,n===1&&(a.tremoloPos>127?l-=r:l=r)):l=pa[r],l=(a.tremoloParam&15)*l>>6,a.tremoloPos>127?e.volume=a.volume-l:e.volume=a.volume+l,l=a.tremoloParam>>2&60,a.tremoloPos=a.tremoloPos+l&255;break;case 10:s=1;break;case 14:this.extended(a);break;default:break}s&&(s=0,l=a.param>>4,l?a.volume+=l:a.volume-=a.param&15,a.volume<0?a.volume=0:a.volume>64&&(a.volume=64),e.volume=a.volume),a=a.next}}},moreEffects:{value:function(e){var i=e.channel,r;switch(e.funkSpeed&&this.updateFunk(e),e.effect){case 9:e.param&&(e.offset=e.param),r=e.offset<<8,r>=e.length?e.length=2:(e.pointer+=r,e.length-=r);break;case 11:this.trackPos=e.param-1,this.breakPos=0,this.jumpFlag=1;break;case 12:e.volume=e.param,e.volume>64&&(e.volume=64),i.volume=e.volume;break;case 13:this.breakPos=(e.param>>4)*10+(e.param&15),this.breakPos>63?this.breakPos=0:this.breakPos<<=2,this.jumpFlag=1;break;case 14:this.extended(e);break;case 15:if(!e.param)return;e.param<32?this.speed=e.param:this.mixer.samplesTick=this.sampleRate*2.5/e.param>>0,this.tick=0;break;default:break}}},extended:{value:function(e){var i=e.channel,r=e.param>>4,s,l,a,n=e.param&15;switch(r){case 0:this.mixer.filter.active=n;break;case 1:if(this.tick)return;e.period-=n,e.period<113&&(e.period=113),i.period=e.period;break;case 2:if(this.tick)return;e.period+=n,e.period>856&&(e.period=856),i.period=e.period;break;case 3:e.glissando=n;break;case 4:e.vibratoWave=n;break;case 5:e.finetune=n*37;break;case 6:if(this.tick)return;n?(e.loopCtr?e.loopCtr--:e.loopCtr=n,e.loopCtr&&(this.breakPos=e.loopPos<<2,this.patternBreak=1)):e.loopPos=this.patternPos>>2;break;case 7:e.tremoloWave=n;break;case 8:for(l=e.length-2,a=this.mixer.memory,s=e.loopPtr;s<l;)a[s]=(a[s]+a[++s])*.5;a[++s]=(a[s]+a[0])*.5;break;case 9:if(this.tick||!n||!e.period||this.tick%n)return;i.enabled=0,i.pointer=e.pointer,i.length=e.length,i.delay=30,i.enabled=1,i.pointer=e.loopPtr,i.length=e.repeat,i.period=e.period;break;case 10:if(this.tick)return;e.volume+=n,e.volume>64&&(e.volume=64),i.volume=e.volume;break;case 11:if(this.tick)return;e.volume-=n,e.volume<0&&(e.volume=0),i.volume=e.volume;break;case 12:this.tick===n&&(i.volume=e.volume=0);break;case 13:if(this.tick!==n||!e.period)return;i.enabled=0,i.pointer=e.pointer,i.length=e.length,i.delay=30,i.enabled=1,i.pointer=e.loopPtr,i.length=e.repeat,i.period=e.period;break;case 14:if(this.tick||this.patternDelay)return;this.patternDelay=++n;break;case 15:if(this.tick)return;e.funkSpeed=n,n&&this.updateFunk(e);break;default:break}}},updateFunk:{value:function(e){var i=e.channel,r,s,l=cs[e.funkSpeed];e.funkPos+=l,!(e.funkPos<128)&&(e.funkPos=0,this.version===_i?(r=e.pointer+e.sample.realLen-e.repeat,s=e.funkWave+e.repeat,s>r&&(s=e.loopPtr,i.length=e.repeat),i.pointer=e.funkWave=s):(r=e.loopPtr+e.repeat,s=e.funkWave+1,s>=r&&(s=e.loopPtr),this.mixer.memory[s]=-this.mixer.memory[s]))}}}),t.voices[0]=Mi(0),t.voices[0].next=t.voices[1]=Mi(1),t.voices[1].next=t.voices[2]=Mi(2),t.voices[2].next=t.voices[3]=Mi(3),t.track=new Uint16Array(128),Object.seal(t)}var _i=1,ha=2,or=3,mt=[856,808,762,720,678,640,604,570,538,508,480,453,428,404,381,360,339,320,302,285,269,254,240,226,214,202,190,180,170,160,151,143,135,127,120,113,0,850,802,757,715,674,637,601,567,535,505,477,450,425,401,379,357,337,318,300,284,268,253,239,225,213,201,189,179,169,159,150,142,134,126,119,113,0,844,796,752,709,670,632,597,563,532,502,474,447,422,398,376,355,335,316,298,282,266,251,237,224,211,199,188,177,167,158,149,141,133,125,118,112,0,838,791,746,704,665,628,592,559,528,498,470,444,419,395,373,352,332,314,296,280,264,249,235,222,209,198,187,176,166,157,148,140,132,125,118,111,0,832,785,741,699,660,623,588,555,524,495,467,441,416,392,370,350,330,312,294,278,262,247,233,220,208,196,185,175,165,156,147,139,131,124,117,110,0,826,779,736,694,655,619,584,551,520,491,463,437,413,390,368,347,328,309,292,276,260,245,232,219,206,195,184,174,164,155,146,138,130,123,116,109,0,820,774,730,689,651,614,580,547,516,487,460,434,410,387,365,345,325,307,290,274,258,244,230,217,205,193,183,172,163,154,145,137,129,122,115,109,0,814,768,725,684,646,610,575,543,513,484,457,431,407,384,363,342,323,305,288,272,256,242,228,216,204,192,181,171,161,152,144,136,128,121,114,108,0,907,856,808,762,720,678,640,604,570,538,508,480,453,428,404,381,360,339,320,302,285,269,254,240,226,214,202,190,180,170,160,151,143,135,127,120,0,900,850,802,757,715,675,636,601,567,535,505,477,450,425,401,379,357,337,318,300,284,268,253,238,225,212,200,189,179,169,159,150,142,134,126,119,0,894,844,796,752,709,670,632,597,563,532,502,474,447,422,398,376,355,335,316,298,282,266,251,237,223,211,199,188,177,167,158,149,141,133,125,118,0,887,838,791,746,704,665,628,592,559,528,498,470,444,419,395,373,352,332,314,296,280,264,249,235,222,209,198,187,176,166,157,148,140,132,125,118,0,881,832,785,741,699,660,623,588,555,524,494,467,441,416,392,370,350,330,312,294,278,262,247,233,220,208,196,185,175,165,156,147,139,131,123,117,0,875,826,779,736,694,655,619,584,551,520,491,463,437,413,390,368,347,328,309,292,276,260,245,232,219,206,195,184,174,164,155,146,138,130,123,116,0,868,820,774,730,689,651,614,580,547,516,487,460,434,410,387,365,345,325,307,290,274,258,244,230,217,205,193,183,172,163,154,145,137,129,122,115,0,862,814,768,725,684,646,610,575,543,513,484,457,431,407,384,363,342,323,305,288,272,256,242,228,216,203,192,181,171,161,152,144,136,128,121,114,0],pa=[0,24,49,74,97,120,141,161,180,197,212,224,235,244,250,253,255,253,250,244,235,224,212,197,180,161,141,120,97,74,49,24],cs=[0,5,6,7,8,10,11,13,16,19,22,26,32,43,64,128],ma=ls;function fs(){var o=Object.create(null,{player:{value:null,writable:!0},index:{value:0,writable:!0},amiga:{value:null,writable:!0},mixer:{value:null,writable:!0},tracker:{get:function(){return this.player?ga[this.index+this.player.version]:ga[0]}},load:{value:function(t){var e,i;if(t.view||(t=Ki(t)),t.endian=1,t.position=0,t.readUint()===67324752&&window.neoart.Unzip,!t)return null;if(this.player&&this.player.id!=="STPlayer"&&(this.player.load(t),this.player.version))return this.player;if(t.length>336&&(t.position=38,e=t.readString(20),(e==="FastTracker v2.00   "||e==="FastTracker v 2.00  "||e==="Sk@le Tracker"||e==="MadTracker 2.0"||e==="MilkyTracker        "||e==="DigiBooster Pro 2.18"||e.indexOf("OpenMPT")!==-1)&&(this.player=la(this.mixer),this.player.load(t),this.player.version)))return this.index=vs,this.player;if(t.endian=0,t.length>2105){if(t.position=1080,e=t.readString(4),e==="M.K."||e==="FLT4"){if(this.player=ua(this.amiga),this.player.load(t),this.player.version)return this.index=ds,this.player}else if(e==="FEST"&&(this.player=window.neoart.HMPlayer(this.amiga),this.player.load(t),this.player.version))return this.index=ps,this.player}return t.length>2105&&(t.position=1080,e=t.readString(4),(e==="M.K."||e==="M!K!")&&(this.player=ma(this.amiga),this.player.load(t),this.player.version))?(this.index=hs,this.player):t.length>5220&&(this.player=window.neoart.S1Player(this.amiga),this.player.load(t),this.player.version)?(this.index=ms,this.player):(t.position=0,i=t.readUshort(),t.position=0,e=t.readString(4),(e==="COSO"||i===24576||i===24578||i===24590||i===24598)&&(this.player=window.neoart.JHPlayer(this.amiga),this.player.load(t),this.player.version)?(this.index=xs,this.player):(t.position=0,i=t.readUshort(),this.player=window.neoart.DWPlayer(this.amiga),this.player.load(t),this.player.version?(this.index=gs,this.player):(t.position=0,i=t.readUshort(),i===24576&&(this.player=window.neoart.RHPlayer(this.amiga),this.player.load(t),this.player.version)?(this.index=bs,this.player):t.length>1625&&(this.player=window.neoart.STPlayer(this.amiga),this.player.load(t),this.player.version)?(this.index=us,this.player):(t.clear(),this.index=0,this.player=null))))}}});return o.amiga=Ji(),Object.seal(o)}var us=0,ds=4,hs=9,ps=12,ms=26,gs=28,xs=30,bs=32,vs=33,ga=["Unknown Format","Ultimate SoundTracker","D.O.C. SoundTracker 9","Master SoundTracker","D.O.C. SoundTracker 2.0/2.2","SoundTracker 2.3","SoundTracker 2.4","NoiseTracker 1.0","NoiseTracker 1.1","NoiseTracker 2.0","ProTracker 1.0","ProTracker 1.1/2.1","ProTracker 1.2/2.0","His Master's NoiseTracker","SoundFX 1.0/1.7","SoundFX 1.8","SoundFX 1.945","SoundFX 1.994/2.0","BP SoundMon V1","BP SoundMon V2","BP SoundMon V3","Delta Music 1.0","Delta Music 2.0","Digital Mugician","Digital Mugician 7 Voices","Future Composer 1.0/1.3","Future Composer 1.4","SidMon 1.0","SidMon 2.0","David Whittaker","FredEd","Jochen Hippel","Jochen Hippel COSO","Rob Hubbard","FastTracker II","Sk@leTracker","MadTracker 2.0","MilkyTracker","DigiBooster Pro 2.18","OpenMPT"],ys=fs(),xa=ys;var Fi=class{constructor(t={}){this.baseRawUrl="https://raw.githubusercontent.com/michioxd/keygen-music/master/",this.indexUrl=this.baseRawUrl+"index.json",this.trackList=[],this.history=[],this.maxHistory=50,this.historyCursor=-1,this.currentPlayer=null,this.isPlaying=!1,this.pollInterval=null,this._opId=0,this.onTrackChange=t.onTrackChange||(()=>{}),this.onError=t.onError||(()=>{}),this.hasFetchedIndex=!1,this.currentTrack=null}async init(){if(!this.hasFetchedIndex)try{let t=await fetch(this.indexUrl);if(!t.ok)throw new Error("Network response was not ok");let e=await t.json(),i=["xm","mod","s3m","it"];this.trackList=e.filter(r=>r.fileExtension&&i.includes(r.fileExtension.toLowerCase())),this.hasFetchedIndex=!0}catch(t){throw console.warn("[Jukebox] Offline or failed to fetch track index:",t.message),this.trackList=[],this.onError("NO INTERNET OR BLOCKED ... TRY AGAIN?"),t}}async playNext(t=null){this.stop();let e=++this._opId;try{if(!this.hasFetchedIndex&&(await this.init(),e!==this._opId))return;if(this.trackList.length===0){console.warn("[Jukebox] Track list is empty \u2014 no tracks to play.");return}let i=null;if(t&&typeof t=="object"){let{title:r,trackTitle:s,artist:l}=t,a=this.trackList.filter(n=>{let u=!l||n.artist&&n.artist.toLowerCase()===l.toLowerCase(),d=!r||n.title&&n.title.toLowerCase()===r.toLowerCase(),c=!s||n.trackTitle&&n.trackTitle.toLowerCase()===s.toLowerCase();return u&&d&&c});a.length===0?console.warn("[Jukebox] No matches for target object \u2014 playing random:",t):a.length>1&&console.warn(`[Jukebox] ${a.length} ambiguous matches for target object \u2014 using first. Refine your search:`,a),i=a[0]||null}else if(t&&typeof t=="string"){let r=this.trackList.filter(s=>s.title&&s.title.toLowerCase()===t.toLowerCase());r.length===0?console.warn("[Jukebox] No matches for target title string \u2014 playing random:",t):r.length>1&&console.warn(`[Jukebox] ${r.length} ambiguous matches for title string \u2014 using first:`,r),i=r[0]||null}if(!i&&!t&&this.historyCursor<this.history.length-1)this.historyCursor++,i=this.trackList[this.history[this.historyCursor]];else if(!i){let r=this.trackList.filter((a,n)=>!this.history.includes(n));r.length===0&&(this.history=[],this.historyCursor=-1);let s=r.length>0?r:this.trackList;i=s[Math.floor(Math.random()*s.length)];let l=this.trackList.indexOf(i);this.historyCursor<this.history.length-1&&(this.history=this.history.slice(0,this.historyCursor+1)),this.history.push(l),this.history.length>this.maxHistory&&this.history.shift(),this.historyCursor=this.history.length-1}await this._playTrack(i,e)}catch(i){console.warn("[Jukebox] Track fetch failed \u2014 network issue?",i.message),this.onError("NO INTERNET OR BLOCKED ... TRY AGAIN?")}}async playPrevious(){if(this.historyCursor>0){this.stop();let t=++this._opId;this.historyCursor--;let e=this.trackList[this.history[this.historyCursor]];try{await this._playTrack(e,t)}catch(i){console.warn("[Jukebox] Previous track fetch failed:",i.message),this.onError("NO INTERNET OR BLOCKED ... TRY AGAIN?")}}}async _playTrack(t,e){let i=t.path.split("/").map(n=>encodeURIComponent(n)).join("/"),r=this.baseRawUrl+i,s=await fetch(r);if(!s.ok)throw new Error("Failed to fetch audio file");if(e!==this._opId)return;let l=await s.arrayBuffer();if(e!==this._opId)return;let a=null;try{a=xa.load(l)}catch(n){console.warn(`[Jukebox] Unsupported format for "${t.title}" \u2014 skipping:`,n.message),e===this._opId&&setTimeout(()=>this.playNext(),100);return}e===this._opId&&(this.currentPlayer=a,this.currentPlayer?(this.currentTrack=t,typeof this.currentPlayer.loopSong<"u"&&(this.currentPlayer.loopSong=1),this.currentPlayer.play(),this.isPlaying=!0,this.onTrackChange(t),this.setupCompletionPolling()):setTimeout(()=>this.playNext(),100))}setupCompletionPolling(){this.pollInterval&&clearInterval(this.pollInterval),this.pollInterval=setInterval(()=>{if(!this.currentPlayer)return this.stopPolling();let t=!1;this.currentPlayer.amiga&&this.currentPlayer.amiga.playing===!1&&(t=!0),this.currentPlayer.mixer&&this.currentPlayer.mixer.playing===!1&&(t=!0),this.currentPlayer.stopped&&(t=!0),this.currentPlayer.playing===!1&&(t=!0),t&&this.playNext()},1e3)}stopPolling(){this.pollInterval&&(clearInterval(this.pollInterval),this.pollInterval=null)}stop(){if(this._opId++,this.stopPolling(),this.isPlaying=!1,this.currentPlayer){try{this.currentPlayer.stop()}catch{}this.currentPlayer=null}}};function ba(o,t,e){let i=document.getElementById("afx-audio-toggle");if(!i)return;let r=document.getElementById("afx-bgm-status");if(i.checked&&e.classList.add("afx-music-playing"),o.jukebox)try{o.jukebox.stop()}catch(a){console.warn("[AnkiFX] Error stopping old jukebox:",a.message)}o.jukebox=new Fi({onTrackChange:a=>{let n=`NOW PLAYING: ${a.artist} - ${a.title} - ${a.trackTitle}`;t.marquee=n,o.marquee&&o.marquee.setText(n)},onError:a=>{t.marquee=a,o.marquee&&o.marquee.setText(a)}}),i.addEventListener("change",a=>{let n=a.target.checked,u=yo();if(n){e.classList.add("afx-bgm-active"),e.classList.add("afx-music-playing"),r.innerHTML=u?"\u{1F50A}":"\u{1F50A} BGM: ON";let d=window.AudioContext||window.webkitAudioContext;d&&(window.neoart=window.neoart||{},window.neoart.audioContext||(window.neoart.audioContext=new d)),window.neoart.audioContext&&window.neoart.audioContext.state==="suspended"&&window.neoart.audioContext.resume();let c=localStorage.getItem("ankifx_preferred_effect")||t.defaultEffect||"geometry",h=t.trackTitle||o.EFFECT_SONG_MAP[c]||null;o.jukebox.playNext(h)}else e.classList.remove("afx-bgm-active"),e.classList.remove("afx-music-playing"),r.innerHTML=u?"\u{1F507}":"\u{1F507} BGM: OFF",o.jukebox.stop(),t.marquee=o.defaultMarqueeText,o.marquee&&o.marquee.setText(o.defaultMarqueeText)});let s=document.getElementById("afx-btn-back"),l=document.getElementById("afx-btn-skip");s&&s.addEventListener("click",a=>{a.stopPropagation(),o.jukebox&&o.jukebox.isPlaying&&o.jukebox.playPrevious()}),l&&l.addEventListener("click",a=>{a.stopPropagation(),o.jukebox&&o.jukebox.isPlaying&&o.jukebox.playNext()})}function va(o,t,e,i){let r=document.getElementById("afx-effect-selector");r&&r.addEventListener("change",s=>{let l=s.target.value;if(localStorage.setItem("ankifx_preferred_effect",l),Object.values(ue).forEach(a=>a.stop()),o.ctx2D&&o.ctx2D.clearRect(0,0,o.width,o.height),o.glContext&&(o.glContext.clearColor(0,0,0,0),o.glContext.clear(o.glContext.COLOR_BUFFER_BIT)),t.defaultEffect=l,l==="debug"?e.classList.add("afx-debug-active"):e.classList.remove("afx-debug-active"),ko(o,t,i,t.marqueePosition,l),o.jukebox&&o.jukebox.isPlaying){let a=t.trackTitle||o.EFFECT_SONG_MAP[l]||null,n=o.jukebox.currentTrack,u=!1;a&&(typeof a=="string"?u=!n||n.title.toLowerCase()!==a.toLowerCase():u=!n||a.title&&n.title.toLowerCase()!==a.title.toLowerCase()||a.trackTitle&&n.trackTitle.toLowerCase()!==a.trackTitle.toLowerCase()||a.artist&&(n.artist||"").toLowerCase()!==a.artist.toLowerCase()),u&&o.jukebox.playNext(a)}})}function ya(o,t,e){let i=document.createElement("div");i.id="ankifx-overlay",t.debug&&i.classList.add("afx-debug-active");let r=window.innerWidth||document.documentElement.clientWidth||800,s=r<480?.65:r<768?.8:1,l=Math.max(55,Math.ceil(85*s));Nr()&&(t.marqueePosition==="top"?i.style.paddingTop=`calc(1rem + ${l}px)`:i.style.paddingBottom=`calc(1rem + ${l}px)`);let a=Ut(),n=yo(),u=n?"\u{1F4DC} ":"\u{1F4DC} TEXT: ",d=n?"":" BGM: ",c=n?u.trim():a?`${u}ON`:`${u}OFF`,h=n?"\u{1F507}":`\u{1F507}${d}OFF`,m=n?"\u{1F3A8} ":"[ Effect: ",p=n?"":" ]",f=Object.values(ue).filter(A=>A.id!=="debug"||t.debug).map(A=>`
            <option value="${A.id}" ${e===A.id?"selected":""}>
                ${m}${A.name}${p}
            </option>
        `).join(""),g=`
        <div id="afx-bottom-dock">
            <div class="afx-control-group-left">
                <div class="afx-control-row">
                    <label class="afx-toggle"><input type="checkbox" id="afx-text-toggle" ${a?"checked":""}><span class="afx-slider"></span></label>
                    <span id="afx-text-status">${c}</span>
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
    `,y=!1;try{y=localStorage.getItem(`ankifx_agreed_${t.deckTitle}`)==="true"}catch{}let w=t.termsText&&typeof t.termsText=="string"&&t.termsText.trim()!==""&&!y;w&&(i.innerHTML=`
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
        `);let x=document.createElement("div");for(x.innerHTML=g;x.firstChild;)i.appendChild(x.firstChild);let k=document.createElement("div");k.id="ankifx-background",document.body.appendChild(k),o.sharedGL=document.createElement("canvas"),o.sharedGL.id="afx-shared-gl",o.sharedGL.className="afx-shared-canvas",k.appendChild(o.sharedGL),o.shared2D=document.createElement("canvas"),o.shared2D.id="afx-shared-2d",o.shared2D.className="afx-shared-canvas",k.appendChild(o.shared2D),o.sharedMarquee=document.createElement("canvas"),o.sharedMarquee.id="afx-shared-marquee",o.sharedMarquee.className="afx-shared-canvas afx-shared-marquee-canvas",k.appendChild(o.sharedMarquee),o.glContext=o.sharedGL.getContext("webgl",{alpha:!1,antialias:!1}),o.ctx2D=o.shared2D.getContext("2d"),o.ctxMarquee=o.sharedMarquee.getContext("2d"),document.body.appendChild(i);let E=document.createElement("div");E.id="afx-top-dock";let P=document.createElement("div");P.className="afx-top-group-left",P.id="afx-top-group-left";let b=document.createElement("div");b.className="afx-top-group-right",b.id="afx-top-group-right";let C=document.createElement("button");C.id="afx-btn-back",C.className="afx-playback-btn",C.textContent="\u23EE\uFE0F";let v=document.createElement("button");if(v.id="afx-btn-skip",v.className="afx-playback-btn",v.textContent="\u23ED\uFE0F",P.appendChild(C),b.appendChild(v),t.debug){let A=document.createElement("div");A.id="afx-global-fps",A.className="afx-global-fps",A.textContent="FPS: --",P.appendChild(A)}E.appendChild(P),E.appendChild(b),i.appendChild(E);let M=A=>{let U=i.classList.contains("afx-agreed-state"),L=A.target.closest("button, input, select, .afx-slider, .afx-toggle, .afx-playback-btn, select option");U?L&&A.stopPropagation():A.stopPropagation()};["touchstart","touchend","mousedown","mouseup","pointerdown","pointerup","click"].forEach(A=>{i.addEventListener(A,M,{passive:!1})});let F=document.getElementById("afx-consent-btn");w&&F?Yr(o,t,i,F):window.AnkiFX.agree(i,t.deckTitle),ba(o,t,i);let I=document.getElementById("afx-text-toggle");if(I){let A=document.getElementById("afx-text-status");I.addEventListener("change",U=>{let L=U.target.checked,B=yo();localStorage.setItem("ankifx_marquee_enabled",L);let N=B?"\u{1F4DC} ":"\u{1F4DC} TEXT: ";A.textContent=B?N.trim():L?`${N}ON`:`${N}OFF`,o.marquee&&(o.marquee.enabled=L)})}return va(o,t,i,k),{overlay:i,background:k}}var ka=["ankifx-overlay","ankifx-background","afx-btn-back","afx-btn-skip","afx-bottom-dock","afx-top-dock"],_={marquee:null,jukebox:null,sharedGL:null,shared2D:null,sharedMarquee:null,glContext:null,ctx2D:null,ctxMarquee:null,currentEffectId:null,dpr:1,width:0,height:0,marqueeInterval:null,defaultMarqueeText:null,EFFECT_SONG_MAP:{},_layoutHandler:null,_resizeTimeout:null,_resizeInterval:null,observer:null,dockObserver:null,initialized:!1};function ws(o={}){console.log(`[AnkiFX] Init \u2192 v${Te.version} (${Te.source})`);let t=qr(o);if(document.getElementById("ankifx-overlay")&&Hr(_,t)){_.initialized=!0,wa(),(window.requestIdleCallback||function(l){setTimeout(l,0)})(()=>{ir()});return}document.documentElement.classList.remove("afx-scroll-lock"),document.documentElement.classList.remove("afx-agreed"),document.documentElement.classList.remove("afx-ankidroid"),/Android/i.test(navigator.userAgent)&&document.documentElement.classList.add("afx-ankidroid"),ka.forEach(s=>{let l=document.getElementById(s);l&&l.remove()}),_.defaultMarqueeText=t.marquee,_.EFFECT_SONG_MAP={},Object.entries(ue).forEach(([s,l])=>{l&&l.preferredTrack&&(_.EFFECT_SONG_MAP[s]=l.preferredTrack)}),Sa();let e=jr(t),{background:i}=ya(_,t,e);Vr(_),Gr(_),pt(_),Xr(_),_.marquee?(_.marquee.setText(t.marquee),_.marquee.setPosition(t.marqueePosition)):(_.marquee=new mi(t.marquee,t.marqueePosition),Yi(_)),ko(_,t,i,t.marqueePosition,e),_.marquee&&(_.marquee.enabled=Ut()),_.initialized=!0,Wr(_),bi(_),wa(),(window.requestIdleCallback||function(s){setTimeout(s,0)})(()=>{ir()})}function Sa(){if(document.getElementById("ankifx-styles"))return;let o=document.createElement("style");o.id="ankifx-styles",o.textContent=Br,document.head.appendChild(o)}function ks(o,t){if(o.classList.add("afx-agreed-state"),document.documentElement.classList.add("afx-agreed"),document.documentElement.classList.remove("afx-scroll-lock"),t)try{localStorage.setItem(`ankifx_agreed_${t}`,"true")}catch{}bi(_)}function Ss(){_.currentEffectId&&ue[_.currentEffectId]?.stop&&ue[_.currentEffectId].stop(),_.jukebox&&(_.jukebox.stop(),_.jukebox=null),_.marqueeInterval&&(cancelAnimationFrame(_.marqueeInterval),_.marqueeInterval=null),_.marquee=null;let o=document.getElementById("_flag"),t=document.getElementById("_mark");o&&document.body.appendChild(o),t&&document.body.appendChild(t),ka.forEach(s=>{let l=document.getElementById(s);l&&l.remove()});let e=document.getElementById("ankifx-styles");if(e&&e.remove(),document.documentElement.style.removeProperty("--afx-viewport-height"),document.documentElement.style.removeProperty("--afx-dock-height"),document.documentElement.classList.remove("afx-scroll-lock"),document.documentElement.classList.remove("afx-agreed"),document.documentElement.classList.remove("afx-ankidroid"),Array.from(document.documentElement.classList).forEach(s=>{s.startsWith("afx-effect-")&&document.documentElement.classList.remove(s)}),window.AnkiFX_Config=null,_._observerTimeout&&(clearTimeout(_._observerTimeout),_._observerTimeout=null),_.observer&&(_.observer.disconnect(),_.observer=null),_.dockObserver&&(_.dockObserver.disconnect(),_.dockObserver=null),_._layoutHandler&&(window.removeEventListener("orientationchange",_._layoutHandler),window.removeEventListener("resize",_._layoutHandler),_._layoutHandler=null),_._resizeTimeout&&(clearTimeout(_._resizeTimeout),_._resizeTimeout=null),_._resizeInterval&&(clearInterval(_._resizeInterval),_._resizeInterval=null),_.glContext){if(typeof _.glContext.getExtension=="function"){let s=_.glContext.getExtension("WEBGL_lose_context");s&&s.loseContext()}_.glContext=null}_.sharedGL=null,_.shared2D=null,_.sharedMarquee=null,_.ctx2D=null,_.ctxMarquee=null,_.currentEffectId=null,_.initialized=!1,_t&&(window.removeEventListener("ankifx:template-status",_t),_t=null),Ti=null;let i=document.getElementById("afx-legacy-toast");i&&i.remove();let r=document.getElementById("afx-update-notice");r&&r.remove(),console.log("[AnkiFX] Destroyed.")}var Ea={};function Es(o){try{if(typeof sessionStorage<"u")return sessionStorage.getItem(o)}catch{}return null}function Cs(o,t){try{if(typeof sessionStorage<"u")return sessionStorage.setItem(o,t),!0}catch{}return!1}function Ps(o){let t=`afx_legacy_toast_${o}`,e=Es(t);return e!==null?e==="true":!!Ea[t]}function Ms(o){let t=`afx_legacy_toast_${o}`;Cs(t,"true")||(Ea[t]=!0)}function ir(){if(!window.AnkiFX||!window.AnkiFX.initialized)return;let o=document.getElementById("ankifx-template-meta"),t=!1,e="unknown";if(!o)t=!0;else{let i=o.getAttribute("data-template-name"),r=o.getAttribute("data-template-version");i?e=i.trim():t=!0,(!r||r.trim()==="")&&(t=!0)}t&&Ca(e)}var Ti=null,_t=null;function Eo(o){return o?String(o).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;"):""}function wa(){_t&&window.removeEventListener("ankifx:template-status",_t),Ti=null;let o=t=>{if(!t||!t.isNewer||Ti)return;let e=document.getElementById("afx-update-banner-root");if(!e||e.children.length>0||document.getElementById("afx-update-notice"))return;Ti="outdated";let i=`afx_dismiss_${t.name}_${t.local}`;if((()=>{try{if(sessionStorage.getItem(i)==="true")return!0}catch{}try{if(localStorage.getItem(i)==="true")return!0}catch{}return!1})())return;let s=()=>{try{sessionStorage.setItem(i,"true")}catch{}try{localStorage.setItem(i,"true")}catch{}},l=document.createElement("div");l.id="afx-update-notice",l.className="afx-update-notice";let a=t.changelog?` (${Eo(t.changelog)})`:"";l.innerHTML=`
            <div class="afx-update-notice-content">
                <div class="afx-update-notice-title">Template Update Available</div>
                <div>
                    Card template is v${Eo(t.local)}. Latest is v${Eo(t.remote)}${a}.<br>
                    Please visit <a class="afx-update-notice-link" href="${Eo(t.targetUrl)}" target="_blank">${Eo(t.displayUrl)}</a> and copy the latest template.
                </div>
            </div>
            <button class="afx-update-notice-close" title="Dismiss">&times;</button>
        `,l.querySelector(".afx-update-notice-close").addEventListener("click",c=>{c.stopPropagation(),l.classList.remove("afx-visible"),s(),setTimeout(()=>l.remove(),400)});let u=l.querySelector(".afx-update-notice-link");u&&u.addEventListener("click",c=>c.stopPropagation());let d=c=>c.stopPropagation();["touchstart","touchend","mousedown","mouseup","click"].forEach(c=>{l.addEventListener(c,d,{passive:!0})}),requestAnimationFrame(()=>{e.appendChild(l),requestAnimationFrame(()=>{l.classList.add("afx-visible")})})};_t=t=>{o(t.detail)},window.addEventListener("ankifx:template-status",_t),window.dispatchEvent(new CustomEvent("ankifx:request-template-status"))}function Ca(o="unknown"){if(Ps(o)||document.getElementById("afx-legacy-toast"))return;let t=document.createElement("div");t.id="afx-legacy-toast",t.className="afx-legacy-toast-container",t.innerHTML=`
        <div class="afx-legacy-toast-content">
            <div class="afx-legacy-toast-title">Legacy Template Detected</div>
            <div>
                An update is required for full AnkiFX compatibility.<br>
                Please see the <a class="afx-legacy-toast-link" href="https://github.com/robkipa/ankifx/blob/main/docs/template-migration-guide.md" target="_blank">Template Update Guide</a> for step-by-step instructions.
            </div>
        </div>
        <button class="afx-legacy-toast-close" title="Dismiss">&times;</button>
    `,t.querySelector(".afx-legacy-toast-close").addEventListener("click",s=>{s.stopPropagation(),t.classList.remove("afx-legacy-visible"),Ms(o),setTimeout(()=>{t.remove()},400)});let i=t.querySelector(".afx-legacy-toast-link");i&&i.addEventListener("click",s=>{s.stopPropagation()});let r=s=>s.stopPropagation();["touchstart","touchend","mousedown","mouseup","click"].forEach(s=>{t.addEventListener(s,r,{passive:!0})}),document.body.appendChild(t),requestAnimationFrame(()=>{requestAnimationFrame(()=>{t.classList.add("afx-legacy-visible")})})}var Ai="local";try{let o=typeof __ankifx_script_src=="string"?__ankifx_script_src:"";if(!o){let e=(new Error().stack||"").match(/(https?:\/\/[^\s)\n:]+|file:\/\/[^\s)\n:]+)/g);if(e&&e.length>0){for(let i=0;i<e.length;i++)if(e[i].includes("ankifx")){o=e[i];break}}}o&&(o.includes("cdn.jsdelivr.net")||o.includes("github")||o.includes("rawgit")||o.includes("githack")?Ai="remote":Ai="local")}catch{Ai="detection-failed"}var _s="1.0.0-e08b1e1",Fs="2026-06-11T21:54:58.446Z",Ts=Ai,Te={init:ws,destroy:Ss,agree:ks,injectCSS:Sa,handleResize:()=>pt(_),startEffect:(o,t,e,i)=>ko(_,o,t,e,i),startMarqueeLoop:()=>Yi(_),renderEffectControls:wo,setControlValue:$r,detectLegacyTemplate:ir,showLegacyMigrationToast:Ca,get version(){return _s},get buildDate(){return Fs},get source(){return Ts},get marquee(){return _.marquee},set marquee(o){_.marquee=o},get jukebox(){return _.jukebox},set jukebox(o){_.jukebox=o},get currentEffectId(){return _.currentEffectId},get defaultMarqueeText(){return _.defaultMarqueeText},get EFFECT_SONG_MAP(){return _.EFFECT_SONG_MAP},get initialized(){return!!_.initialized}};function Pa(o){if(!o)return{parts:[0,0,0],isPre:!1,preType:3,preNumber:0};let t=String(o).replace(/^v/,""),e=t.indexOf("+");e!==-1&&(t=t.substring(0,e));let i=t.indexOf("-"),r=i!==-1,s=r?t.substring(0,i):t,l=r?t.substring(i+1).toLowerCase():"",a=s.split(".").map(d=>{let c=parseInt(d,10);return isNaN(c)?0:c}),n=3,u=0;if(r){l.indexOf("alpha")!==-1?n=0:l.indexOf("beta")!==-1?n=1:l.indexOf("rc")!==-1&&(n=2);let d=l.match(/\d+/);d&&(u=parseInt(d[0],10))}return{parts:[a[0]||0,a[1]||0,a[2]||0],isPre:r,preType:n,preNumber:u}}function Ii(o,t){let e=Pa(o),i=Pa(t);for(let r=0;r<3;r++){if(e.parts[r]>i.parts[r])return!0;if(e.parts[r]<i.parts[r])return!1}return e.preType>i.preType?!0:e.preType<i.preType?!1:e.preNumber>i.preNumber}function Ma(o,t){if(!o||!t||o==="development"||t==="development")return!1;try{return new Date(o).getTime()>new Date(t).getTime()}catch{return!1}}var _a=[];try{let o=sessionStorage.getItem("ankifx_eval_history");o&&(_a=JSON.parse(o))}catch{}window.AnkiFX_Eval_History=window.AnkiFX_Eval_History||_a;var Fa=[];try{let o=sessionStorage.getItem("ankifx_loader_logs");o&&(Fa=JSON.parse(o))}catch{}window.AnkiFX_Loader_Logs=window.AnkiFX_Loader_Logs||Fa;var qt=o=>{window.AnkiFX_Loader_Logs.push(o);try{sessionStorage.setItem("ankifx_loader_logs",JSON.stringify(window.AnkiFX_Loader_Logs))}catch{}},Ee=window.AnkiFX,Ve=Te.version,We=Ee&&Ee.version,As=Ee&&Ee.initialized,Ta=!1,Aa="",Is=!Ee||Ii(Ve,We),Ls=Ee&&!Ii(Ve,We)&&!Ii(We,Ve),Ds=Ls&&Ma(Te.buildDate,Ee&&Ee.buildDate),Rs=Is||Ds;if(Rs)if(As){console.info(`[Loader] Newer engine version v${Ve} (${Te.source}) loaded late. Upgrading and replacing active engine v${We} (${Ee.source})...`),qt({msg:`[Loader] Late takeover triggered: Upgrading active engine from v${We} to v${Ve}...`,level:"info"});let o=window.AnkiFX_Config;try{Ee.destroy(),qt({msg:`[Loader] Active engine v${We} destroyed successfully.`,level:"success"})}catch(t){console.error(`[Loader] Error destroying old engine: ${t.message}`),qt({msg:`[Loader] Error destroying active engine: ${t.message}`,level:"error"})}o&&(window.AnkiFX_Config=o),window.AnkiFX=Te;try{window.AnkiFX.init(window.AnkiFX_Config),qt({msg:`[Loader] Upgraded AnkiFX engine to v${Ve} successfully.`,level:"success"})}catch(t){console.error(`[Loader] Error initializing upgraded engine: ${t.message}`),qt({msg:`[Loader] Upgraded AnkiFX engine initialization failed: ${t.message}`,level:"error"})}}else Ee&&(console.info(`[Loader] Newer engine version v${Ve} (${Te.source}) replacing uninitialized engine v${We} (${Ee.source}).`),qt({msg:`[Loader] Pre-init takeover: Replacing local v${We} with remote v${Ve}...`,level:"info"})),window.AnkiFX=Te;else{Ta=!0;let o=Ee&&Ee.buildDate?Ee.buildDate:"unknown",t=Te.buildDate||"unknown";Aa=`ignored (older or equal version and build: active=${We}@${o}, incoming=${Ve}@${t})`,console.info(`[Loader] Incoming engine v${Ve} (built ${t}) is not newer than active engine v${We} (built ${o}). Ignoring.`)}window.AnkiFX_Eval_History.push({source:Te.source,version:Te.version,buildDate:Te.buildDate,time:new Date().toLocaleTimeString(),status:Ta?Aa:"active"});try{sessionStorage.setItem("ankifx_eval_history",JSON.stringify(window.AnkiFX_Eval_History))}catch{}})();
