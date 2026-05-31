var __ankifx_script_src=(document.currentScript&&document.currentScript.src)||"";
(()=>{var Yt=[],Ce=null,Kt=40,mi=2,vi={id:"aurora",name:"Aurora",run:fr,stop:hr,onResize:(u,t)=>{if(ke=u/8,Se=t/8,Ce){let e=Math.ceil(ke/(Kt/8)),i=Math.ceil(Se/(Kt*mi/8));Ce.w=e,Ce.h=i,Ce.build()}},marqueeFont:{color:"#E0FFFF",shadowColor:"rgba(0,128,128,0.8)",shadowBlur:10}},Ge=null,ke,Se,Ie=null,lr=0,He=0,Be={x:-1e3,y:-1e3},mt=class{constructor(t,e){this.x=t||0,this.y=e||0}setAngle(t){let e=this.getLength()||1;this.x=Math.cos(t)*e,this.y=Math.sin(t)*e}setLength(t){let e=Math.atan2(this.y,this.x);this.x=Math.cos(e)*t,this.y=Math.sin(e)*t}getLength(){return Math.sqrt(this.x*this.x+this.y*this.y)}addTo(t){this.x+=t.x,this.y+=t.y}},pi=(()=>{let u=new Uint8Array(512),t=new Uint8Array(256).map(()=>Math.random()*256);for(let n=0;n<512;n++)u[n]=t[n&255];let e=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]];function i(n,l,f,o){return n[0]*l+n[1]*f+n[2]*o}return{simplex3:(n,l,f)=>{let o,a,c,h,r=.3333333333333333,d=1/6,g=(n+l+f)*r,m=Math.floor(n+g),s=Math.floor(l+g),v=Math.floor(f+g),p=(m+s+v)*d,x=n-m+p,y=l-s+p,b=f-v+p,w,E,F,P,M,S;x>=y?y>=b?(w=1,E=0,F=0,P=1,M=1,S=0):x>=b?(w=1,E=0,F=0,P=1,M=0,S=1):(w=0,E=0,F=1,P=1,M=0,S=1):y<b?(w=0,E=0,F=1,P=0,M=1,S=1):x<b?(w=0,E=1,F=0,P=0,M=1,S=1):(w=0,E=1,F=0,P=1,M=1,S=0);let _=x-w+d,A=y-E+d,O=b-F+d,z=x-P+2*d,q=y-M+2*d,j=b-S+2*d,B=x-1+3*d,R=y-1+3*d,N=b-1+3*d,Y=m&255,$=s&255,ee=v&255,V=.6-x*x-y*y-b*b;V<0?o=0:(V*=V,o=V*V*i(e[u[Y+u[$+u[ee]]]%12],x,y,b));let k=.6-_*_-A*A-O*O;k<0?a=0:(k*=k,a=k*k*i(e[u[Y+w+u[$+E+u[ee+F]]]%12],_,A,O));let I=.6-z*z-q*q-j*j;I<0?c=0:(I*=I,c=I*I*i(e[u[Y+P+u[$+M+u[ee+S]]]%12],z,q,j));let U=.6-B*B-R*R-N*N;return U<0?h=0:(U*=U,h=U*U*i(e[u[Y+1+u[$+1+u[ee+1]]]%12],B,R,N)),32*(o+a+c+h)}}})(),Jt=class{constructor(t,e,i={}){this.settings={frequency:.1,...i},this.w=t,this.h=e,this.time=0,this.build()}build(){this.cols=Math.ceil(this.w),this.rows=Math.ceil(this.h),this.field=new Array(this.cols);for(let t=0;t<this.cols;t++){this.field[t]=new Array(this.rows);for(let e=0;e<this.rows;e++)this.field[t][e]=new mt(0,0)}}update(t){this.time+=t;let e=this.time*this.settings.frequency/1e3;for(let i=0;i<this.field.length;i++)for(let n=0;n<this.field[i].length;n++){let l=pi.simplex3(i/20,n/20,e)*Math.PI*2,f=pi.simplex3(i/10+4e4,n/10+4e4,e);this.field[i][n].setAngle(l),this.field[i][n].setLength(f),typeof this.manipulateVector=="function"&&this.manipulateVector(this.field[i][n],i,n),typeof this.onDraw=="function"&&this.onDraw(this.field[i][n],i,n)}}};function ur(){Yt=[];let u=150;for(let t=0;t<u;t++)Yt.push({x:Math.random(),y:Math.random(),size:.5+Math.random()*1.5,opacity:.1+Math.random()*.8,blinkSpeed:.001+Math.random()*.002,blinkOffset:Math.random()*Math.PI*2})}function qe(u){u.touches&&u.touches[0]?(Be.x=u.touches[0].clientX,Be.y=u.touches[0].clientY):(Be.x=u.clientX,Be.y=u.clientY)}function fr(u,t){let e=u.ctx2d;Ie=u.canvas2D,Ie.classList.add("afx-aurora-active"),ke=u.width/8,Se=u.height/8,Ie.width=ke*u.dpr,Ie.height=Se*u.dpr,e.setTransform(1,0,0,1,0,0),e.scale(u.dpr,u.dpr),ur();let i=Kt/8,n=Math.ceil(ke/i),l=Math.ceil(Se/(i*mi));Ce=new Jt(n,l,{frequency:.1});let f={x:ke/n,y:Se/l},o=255/l;Ce.onDraw=(c,h,r)=>{let d=c.getLength()*Math.abs(c.x),g=c.getLength()*Math.abs(c.y),m=Math.round(-20*d+80*g+(50-.6*r*o)),s=Math.round(180*d+20*g-60+.4*r*o),v=Math.round(50*d+30*g+(40-.5*r*o)+.5*r*o);e.fillStyle=`rgba(${m}, ${s}, ${v}, 0.8)`,e.fillRect(h*f.x,r*f.y,f.x+.5,f.y+.5)},Ce.manipulateVector=(c,h,r)=>{let d={x:h*f.x+.5*f.x,y:r*f.y+.5*f.y},g=Be.x/8,m=Be.y/8,s=new mt((g-d.x)/ke,(m-d.y)/Se);c.addTo(s),c.getLength()>1&&c.setLength(1)},lr=0,He=0,window.addEventListener("mousemove",qe),window.addEventListener("touchstart",qe),window.addEventListener("touchmove",qe);function a(c){He||(He=c);let h=c-He;He=c,e.fillStyle="#020b1a",e.fillRect(0,0,ke,Se),e.fillStyle="#ffffff",Yt.forEach(r=>{let d=(Math.sin(c*r.blinkSpeed+r.blinkOffset)+1)/2;e.globalAlpha=r.opacity*d,e.beginPath(),e.arc(r.x*ke,r.y*Se,r.size,0,Math.PI*2),e.fill()}),e.globalAlpha=1,Ce.update(h),Ge=requestAnimationFrame(a)}Ge=requestAnimationFrame(a)}function hr(){Ge&&(cancelAnimationFrame(Ge),Ge=null),window.removeEventListener("mousemove",qe),window.removeEventListener("touchstart",qe),window.removeEventListener("touchmove",qe),Ie&&(Ie.classList.remove("afx-aurora-active"),Ie=null);let u=window.AnkiFX;u&&typeof u.handleResize=="function"&&u.handleResize()}var vt=null,be,xe,gi={id:"debug",name:"DEBUG",run:cr,stop:dr,onResize:(u,t)=>{be=u,xe=t},marqueeFont:{color:"#00ff00",shadowColor:"rgba(0,0,0,0.8)",shadowBlur:5}};function cr(u,t){let e=u.ctx2d;be=u.width,xe=u.height;let i=u.dpr||1,n=0,l=0,f=0;function o(a){a===void 0&&(a=performance.now()),n||(n=a),l++,a-n>=1e3&&(f=l,l=0,n=a),e.fillStyle="#000",e.fillRect(0,0,be,xe),e.fillStyle="#fff",e.font="bold 13px monospace",[`FPS: ${f}`,`window: ${window.innerWidth}x${window.innerHeight}`,`screen: ${screen.width}x${screen.height}`,`dpr (native): ${window.devicePixelRatio}`,`dpr (engine): ${i}`,`doc: ${document.documentElement.clientWidth}x${document.documentElement.clientHeight}`,`orient: ${window.orientation||"N/A"}`].forEach((d,g)=>{e.fillText(d,20,60+g*18)}),e.fillStyle="#0f0",e.font="bold 13px monospace",e.fillText("--- AnkiFX DIAGNOSTICS ---",20,195),e.fillStyle="#fff",e.font="12px monospace",e.fillText(`Version:  ${window.AnkiFX?.version||"1.0.0-dev"}`,20,215),e.fillText(`Source:   ${window.AnkiFX?.source||"unknown"}`,20,230),e.fillText(`Built:    ${window.AnkiFX?.buildDate||"development"}`,20,245),e.fillStyle="#0ff",e.font="bold 13px monospace",e.fillText("--- ENGINE EVALUATION HISTORY ---",20,265);let h=window.AnkiFX_Eval_History||[];h.length===0?(e.fillStyle="#888",e.font="italic 12px monospace",e.fillText("(No evaluation history captured)",20,282)):(e.font="11px monospace",h.slice(-3).forEach((d,g)=>{e.fillStyle=d.status==="active"?"#55ff55":"#ffaa55",e.fillText(`[${g+1}] ${d.source} (${d.version}) @ ${d.time} - ${d.status}`,20,282+g*15)})),e.fillStyle="#0ff",e.font="bold 13px monospace",e.fillText("--- CHRONOLOGICAL LOADER LOGS ---",20,335);let r=window.AnkiFX_Loader_Logs||[];r.length===0?(e.fillStyle="#888",e.font="italic 12px monospace",e.fillText("(No logs captured by template loader)",20,355)):(e.font="11px monospace",r.slice(-12).forEach((d,g)=>{let m=d.includes("fail")||d.includes("Error")||d.includes("offline")||d.includes("warn");e.fillStyle=m?"#ff5555":"#55ff55",e.fillText(`[${g+1}] ${d}`,20,355+g*16)})),e.fillStyle="#f0f",e.font="bold 12px monospace",e.fillText("(0,0)",5,15),e.fillText(`(${be},0)`,be-65,15),e.fillText(`(0,${xe})`,5,xe-5),e.fillText(`(${be},${xe})`,be-65,xe-5),e.strokeStyle="#f00",e.lineWidth=4,e.beginPath(),e.moveTo(0,xe-2),e.lineTo(be,xe-2),e.stroke(),e.fillStyle="#f00",e.font="bold 18px monospace",e.textAlign="center",e.fillText("--- CANVAS BOTTOM ---",be/2,xe-10),e.textAlign="left",e.beginPath(),e.moveTo(be-2,0),e.lineTo(be-2,xe),e.stroke(),vt=requestAnimationFrame(o)}o()}function dr(){vt&&(cancelAnimationFrame(vt),vt=null)}var Ve=null,Q,we,bi={id:"ecg",name:"ECG Monitor",run:pr,stop:mr,onResize:(u,t)=>{Q=u,we=t},marqueeFont:{color:"#FF1A1A",shadowColor:"#CC0000",shadowBlur:15}};function pr(u,t){let e=u.ctx2d;Q=u.width,we=u.height;let i=200,n=40,l=120,f=25,o=5,a=new Float32Array(4096),c=0,h=0,r=0,d=0,g=0,m=0,s=0,v=100,p=.6,x=72,y=0,b="sinus",w=25+Math.random()*15,E=0,F=["first_degree","mobitz_1","mobitz_2","third_degree","st_elevation","afib","a_flutter","torsades"],P=0;function M(){c<Q&&(c=Q)}let S=(k,I,U,L)=>L*Math.exp(-((k-I)**2)/(2*U**2));function _(k){return S(k,.15,.03,.12)}function A(k){return S(k,.03,.03,.12)}function O(k,I){let U=I%4;return U===0?S(k,.17,.03,.12):U===1?S(k,.1,.03,.12):U===2?S(k,.03,.03,.12):S(k,.15,.03,.12)}function z(k){return S(k,.08,.03,.12)}function q(k){return .035*Math.sin(k*Math.PI*40)+.015*Math.sin(k*Math.PI*96)+.008*Math.sin(k*Math.PI*176)}function j(k){return .085*(k*4%1-.5)}function B(k,I){let U=Math.sin(k*Math.PI*2)*.58+Math.sin(k*Math.PI*4)*.16,L=Math.sin(I*1.2);return U*L}function R(k,I=!1){let U=0;return U+=S(k,.33,.008,-.08),U+=S(k,.36,.012,1),U+=S(k,.39,.008,-.12),I&&(U+=S(k,.46,.07,.38)),U+=S(k,.56,.04,.22),U}function N(k,I,U){let L=k%1,X=Math.floor(k);return I==="sinus"?_(L)+R(L,!1):I==="first_degree"?A(L)+R(L,!1):I==="mobitz_1"?X%4===3?O(L,X):O(L,X)+R(L,!1):I==="mobitz_2"?X%3===2?z(L):z(L)+R(L,!1):I==="st_elevation"?_(L)+R(L,!0):I==="afib"?q(L)+R(L,!1):I==="a_flutter"?j(L)+R(L,!1):I==="torsades"?B(L,U):0}function Y(k,I){let U=k%1,L=I%1,X=S(U,.15,.03,.12),he=S(L,.33,.008,-.08)+S(L,.36,.012,1)+S(L,.39,.008,-.12)+S(L,.56,.04,.22);return X+he}function $(){e.strokeStyle="rgba(60, 0, 0, 0.15)",e.lineWidth=.5,e.beginPath();for(let k=0;k<Q;k+=o)e.moveTo(k,0),e.lineTo(k,we);for(let k=0;k<we;k+=o)e.moveTo(0,k),e.lineTo(Q,k);e.stroke(),e.strokeStyle="rgba(80, 0, 0, 0.3)",e.lineWidth=1,e.beginPath();for(let k=0;k<Q;k+=f)e.moveTo(k,0),e.lineTo(k,we);for(let k=0;k<we;k+=f)e.moveTo(0,k),e.lineTo(Q,k);e.stroke()}function ee(){let k=Math.max(16,Math.min(28,Q*.04));e.save(),e.textAlign="right",e.textBaseline="top";let I=y*15,U=.5+y*.5;e.font=`bold ${k}px "Courier New", monospace`,e.fillStyle=`rgba(255, 26, 26, ${U})`,e.fillText(`\u2665 ${x} BPM`,Q-15,15);let L=Math.max(11,Math.min(16,k*.6));e.font=`bold ${L}px "Courier New", monospace`,e.fillStyle="rgba(255, 26, 26, 0.7)";let X="SINUS RHYTHM";b==="first_degree"?X="1\xB0 AV BLOCK":b==="mobitz_1"?X="2\xB0 AV (MOBITZ 1)":b==="mobitz_2"?X="2\xB0 AV (MOBITZ 2)":b==="third_degree"?X="3\xB0 AV BLOCK":b==="st_elevation"?X="ST ELEVATION":b==="afib"?X="ATRIAL FIBRILLATION":b==="a_flutter"?X="ATRIAL FLUTTER":b==="torsades"&&(X="TORSADES DE POINTES"),e.fillText(X,Q-15,15+k+4),e.restore()}function V(k){d||(d=k);let I=Math.min((k-d)/1e3,.05);d=k,r+=I,M();let U=localStorage.getItem("ankifx_ecg_rhythm")||"sinus",L=parseInt(localStorage.getItem("ankifx_ecg_trigger_time")||"0");if(L>E){if(E=L,b=U,w=r+25+Math.random()*15,b!=="sinus"){let ie=F.indexOf(b);ie!==-1&&(P=(ie+1)%F.length)}b==="afib"&&(v=70+Math.floor(Math.random()*60),p=60/v)}r>=w&&(b==="sinus"?(b=F[P],P=(P+1)%F.length):b="sinus",localStorage.setItem("ankifx_ecg_rhythm",b),w=r+25+Math.random()*15,b==="afib"&&(v=70+Math.floor(Math.random()*60),p=60/v));let X=document.getElementById("afx-ecg-trigger-btn"),he=document.getElementById("afx-ecg-trigger-container");X&&he&&(b==="sinus"?(X.innerText="\u26A1 TRIGGER ARRHYTHMIA",X.style.color="#ff1a1a",he.style.border="1px solid rgba(255, 26, 26, 0.45)"):(X.innerText="\u{1F49A} RESTORE SINUS",X.style.color="#28a745",he.style.border="1px solid rgba(40, 167, 69, 0.45)"));let re=72;b==="third_degree"?re=35:b==="mobitz_1"||b==="mobitz_2"?re=68:b==="afib"?re=v:b==="a_flutter"?re=75:b==="torsades"&&(re=220);let Ee=b==="afib"?p:60/re,C=g,D=m,H=s;if(b==="third_degree"?(m+=I/(60/88),s+=I/(60/re)):g+=I/Ee,b!=="third_degree"){let ie=Math.floor(C);Math.floor(g)>ie&&b==="afib"&&(v=70+Math.floor(Math.random()*65),p=60/v)}if(b==="third_degree")Math.floor(H-.36)<Math.floor(s-.36)&&(y=1,x=re+Math.floor(Math.random()*3)-1);else if(Math.floor(C-.36)<Math.floor(g-.36)){let ie=Math.floor(g-.36),fe=!1;b==="mobitz_1"?fe=ie%4===3:b==="mobitz_2"&&(fe=ie%3===2),fe||(y=1,x=Math.floor(re),b!=="torsades"&&b!=="a_flutter"&&(x+=Math.floor(Math.random()*5)-2))}y=Math.max(0,y-I*4);let te=i*I,de=h+te,Z=Math.floor(h),ce=Math.floor(de);for(let ie=Z;ie<=ce;ie++){let fe=ie%Q,ve=(ie-h)/te;if(b==="third_degree"){let ge=D+(m-D)*ve,ct=H+(s-H)*ve;a[fe]=Y(ge,ct)}else{let ge=C+(g-C)*ve;a[fe]=N(ge,b,r)}}h=de,h>=Q&&(h-=Q),e.fillStyle="#000000",e.fillRect(0,0,Q,we),$();let Ae=we*.55,Wt=we*.35,ft=Math.floor(h)%Q,di=4;e.save(),e.lineCap="round",e.lineJoin="round";for(let ie=0;ie<3;ie++){ie===0?(e.lineWidth=15,e.strokeStyle="rgb(200, 0, 0)"):ie===1?(e.lineWidth=7,e.strokeStyle="rgb(255, 15, 15)"):(e.lineWidth=2.4,e.strokeStyle="rgb(255, 175, 175)");for(let fe=0;fe<Q;fe+=di){let ve=ft-fe;if(ve<0&&(ve+=Q),ve>Q-n)continue;let ge=1,ct=Q-n-l;if(ve>ct&&(ge=1-(ve-ct)/l,ge=Math.max(0,ge)),ge<=0)continue;let dt=0;ve<12&&(dt=1-ve/12),ie===0?e.globalAlpha=ge*(.07+dt*.13):ie===1?e.globalAlpha=ge*(.28+dt*.32):e.globalAlpha=ge*(.85+dt*.15),e.beginPath();let nr=Ae-a[fe]*Wt;e.moveTo(fe,nr);let pt=Math.min(fe+di,Q);for(let Ue=fe+1;Ue<pt;Ue++){let sr=Ae-a[Ue]*Wt;e.lineTo(Ue,sr)}if(pt<Q){let Ue=Ae-a[pt]*Wt;e.lineTo(pt,Ue)}e.stroke()}}e.globalAlpha=1,e.restore(),e.save();let ht=e.createLinearGradient(ft-3,0,ft+3,0);ht.addColorStop(0,"rgba(255, 0, 0, 0)"),ht.addColorStop(.5,"rgba(255, 50, 50, 0.4)"),ht.addColorStop(1,"rgba(255, 0, 0, 0)"),e.fillStyle=ht,e.fillRect(ft-3,0,6,we),e.restore(),ee(),Ve=requestAnimationFrame(V)}Ve=requestAnimationFrame(V)}function mr(){Ve&&(cancelAnimationFrame(Ve),Ve=null)}var We=null,Zt,Qt,xi={id:"fire",name:"Doom Fire",run:gr,stop:br,onResize:(u,t)=>{Zt=u,Qt=t},preferredTrack:{title:"Doom 3 BFG Edition",trackTitle:"DOOM E1M1"},marqueeFont:{color:"#ffffff",shadowColor:"rgba(0,0,0,0.8)",shadowBlur:5}},vr=[[7,7,7],[31,7,7],[47,15,7],[71,15,7],[87,23,7],[103,31,7],[119,31,7],[143,39,7],[159,47,7],[175,63,7],[191,71,7],[199,71,7],[223,79,7],[223,87,7],[223,87,7],[215,95,7],[215,95,7],[215,103,15],[207,111,15],[207,119,15],[207,127,15],[207,135,23],[199,135,23],[199,143,23],[199,151,31],[191,159,31],[191,159,31],[191,167,39],[191,167,39],[191,175,47],[183,175,47],[183,183,47],[183,183,55],[207,207,111],[223,223,159],[239,239,199],[255,255,255]];function gr(u,t){let e=u.ctx2d;Zt=u.width,Qt=u.height;let i=320,n=168,l=new Uint8Array(i*n),f=e.createImageData(i,n),o=f.data,a=document.createElement("canvas");a.width=i,a.height=n;let c=a.getContext("2d");function h(){l.fill(0);for(let s=0;s<i;s++)l[(n-1)*i+s]=36}function r(s){let v=l[s];if(v===0)l[s-i]=0;else{let p=Math.floor(Math.random()*3),x=s-p+1;l[x-i]=v-(p&1)}}function d(){for(let s=0;s<i;s++)for(let v=1;v<n;v++)r(v*i+s)}function g(){for(let s=0;s<l.length;s++){let v=l[s],p=vr[v],x=s*4;o[x]=p[0],o[x+1]=p[1],o[x+2]=p[2],o[x+3]=255}}h();function m(){d(),g(),c.putImageData(f,0,0),e.save(),e.imageSmoothingEnabled=!1,e.drawImage(a,0,0,Zt,Qt),e.restore(),We=requestAnimationFrame(m)}We=requestAnimationFrame(m)}function br(){We&&(cancelAnimationFrame(We),We=null)}var Je=null,Ye,Ke,wi={id:"geometry",name:"Geometry",run:xr,stop:wr,onResize:(u,t)=>{Ye=u,Ke=t},marqueeFont:{colorFn:(u,t)=>`hsl(${(u*120+t*4)%360}, 100%, 55%)`,shadowColor:"inherit",shadowBlur:15}};function xr(u,t){let e=u.ctx2d;Ye=u.width,Ke=u.height;let i=0;function n(){i+=.012,e.globalCompositeOperation="source-over",e.fillStyle="rgba(2, 2, 5, 0.3)",e.fillRect(0,0,Ye,Ke),e.globalCompositeOperation="lighter";let l=Ye/2,f=Ke/2,o=Math.max(Ye,Ke)*.85;for(let a=0;a<35;a++){let c=i+a*.05,h=(Math.sin(c*.8)*.5+.5)*o+a*12;e.save(),e.translate(l,f),e.rotate(Math.sin(i*.3)*Math.PI+a*.06),e.scale(Math.sin(i*.5+a*.1)*.4+.8,Math.cos(i*.4+a*.1)*.4+.8),e.beginPath();for(let d=0;d<=8;d++){let g=d/8*Math.PI*2,m=Math.cos(g)*h,s=Math.sin(g)*h;d===0?e.moveTo(m,s):e.lineTo(m,s)}let r=(i*50+a*10)%360;e.strokeStyle=`hsla(${r}, 95%, 65%, 0.6)`,e.lineWidth=4,e.stroke(),e.restore()}e.globalCompositeOperation="source-over",Je=requestAnimationFrame(n)}Je=requestAnimationFrame(n)}function wr(){Je&&(cancelAnimationFrame(Je),Je=null)}var yr=["#c3e4ff","#6ec3f4","#eae2ff","#b9beff"];function yi(u){return[(u>>16&255)/255,(u>>8&255)/255,(255&u)/255]}var ei=class{constructor(t,e,i,n){let l=this;l.canvas=t,l.gl=e,l.meshes=[],l.debug=()=>{};let f=l.gl;Object.defineProperties(l,{Material:{enumerable:!1,value:class{constructor(a,c,h={}){let r=this;function d(s,v){let p=f.createShader(s);return f.shaderSource(p,v),f.compileShader(p),f.getShaderParameter(p,f.COMPILE_STATUS)||console.error("Shader compilation error:",f.getShaderInfoLog(p)),p}function g(s,v){return Object.entries(s).map(([p,x])=>x.getDeclaration(p,v)).join(`
`)}r.uniforms=h,r.uniformInstances=[];let m=`
              precision highp float;
            `;r.vertexSource=`
              ${m}
              attribute vec4 position;
              attribute vec2 uv;
              attribute vec2 uvNorm;
              ${g(l.commonUniforms,"vertex")}
              ${g(h,"vertex")}
              ${a}
            `,r.Source=`
              ${m}
              ${g(l.commonUniforms,"fragment")}
              ${g(h,"fragment")}
              ${c}
            `,r.vertexShader=d(f.VERTEX_SHADER,r.vertexSource),r.fragmentShader=d(f.FRAGMENT_SHADER,r.Source),r.program=f.createProgram(),f.attachShader(r.program,r.vertexShader),f.attachShader(r.program,r.fragmentShader),f.linkProgram(r.program),f.getProgramParameter(r.program,f.LINK_STATUS)||console.error("Program link error:",f.getProgramInfoLog(r.program)),f.useProgram(r.program),r.attachUniforms(void 0,l.commonUniforms),r.attachUniforms(void 0,r.uniforms)}attachUniforms(a,c){let h=this;a===void 0?Object.entries(c).forEach(([r,d])=>{h.attachUniforms(r,d)}):c.type==="array"?c.value.forEach((r,d)=>h.attachUniforms(`${a}[${d}]`,r)):c.type==="struct"?Object.entries(c.value).forEach(([r,d])=>h.attachUniforms(`${a}.${r}`,d)):h.uniformInstances.push({uniform:c,location:f.getUniformLocation(h.program,a)})}}},Uniform:{enumerable:!1,value:class{constructor(a){this.type="float",Object.assign(this,a),this.typeFn={float:"1f",int:"1i",vec2:"2fv",vec3:"3fv",vec4:"4fv",mat4:"Matrix4fv"}[this.type]||"1f",this.update()}update(a){this.value!==void 0&&f[`uniform${this.typeFn}`](a,this.typeFn.substring(0,6)==="Matrix"?this.transpose:this.value,this.typeFn.substring(0,6)==="Matrix"?this.value:null)}getDeclaration(a,c,h){let r=this;if(r.excludeFrom!==c){if(r.type==="array")return r.value[0].getDeclaration(a,c,r.value.length)+`
const int ${a}_length = ${r.value.length};`;if(r.type==="struct"){let d=a.replace("u_","");return d=d.charAt(0).toUpperCase()+d.slice(1),`uniform struct ${d} 
{
`+Object.entries(r.value).map(([g,m])=>m.getDeclaration(g,c).replace(/^uniform/,"")).join("")+`
} ${a}${h>0?`[${h}]`:""};`}return`uniform ${r.type} ${a}${h>0?`[${h}]`:""};`}}}},PlaneGeometry:{enumerable:!1,value:class{constructor(a,c,h,r,d){f.createBuffer(),this.attributes={position:new l.Attribute({target:f.ARRAY_BUFFER,size:3}),uv:new l.Attribute({target:f.ARRAY_BUFFER,size:2}),uvNorm:new l.Attribute({target:f.ARRAY_BUFFER,size:2}),index:new l.Attribute({target:f.ELEMENT_ARRAY_BUFFER,size:3,type:f.UNSIGNED_SHORT})},this.setTopology(h,r),this.setSize(a,c,d)}setTopology(a=1,c=1){let h=this;h.xSegCount=a,h.ySegCount=c,h.vertexCount=(h.xSegCount+1)*(h.ySegCount+1),h.quadCount=h.xSegCount*h.ySegCount*2,h.attributes.uv.values=new Float32Array(2*h.vertexCount),h.attributes.uvNorm.values=new Float32Array(2*h.vertexCount),h.attributes.index.values=new Uint16Array(3*h.quadCount);for(let r=0;r<=h.ySegCount;r++)for(let d=0;d<=h.xSegCount;d++){let g=r*(h.xSegCount+1)+d;if(h.attributes.uv.values[2*g]=d/h.xSegCount,h.attributes.uv.values[2*g+1]=1-r/h.ySegCount,h.attributes.uvNorm.values[2*g]=d/h.xSegCount*2-1,h.attributes.uvNorm.values[2*g+1]=1-r/h.ySegCount*2,d<h.xSegCount&&r<h.ySegCount){let m=r*h.xSegCount+d;h.attributes.index.values[6*m]=g,h.attributes.index.values[6*m+1]=g+1+h.xSegCount,h.attributes.index.values[6*m+2]=g+1,h.attributes.index.values[6*m+3]=g+1,h.attributes.index.values[6*m+4]=g+1+h.xSegCount,h.attributes.index.values[6*m+5]=g+2+h.xSegCount}}h.attributes.uv.update(),h.attributes.uvNorm.update(),h.attributes.index.update()}setSize(a=1,c=1,h="xz"){let r=this;r.width=a,r.height=c,r.orientation=h,(!r.attributes.position.values||r.attributes.position.values.length!==3*r.vertexCount)&&(r.attributes.position.values=new Float32Array(3*r.vertexCount));let d=a/-2,g=c/-2,m=a/r.xSegCount,s=c/r.ySegCount;for(let v=0;v<=r.ySegCount;v++){let p=g+v*s;for(let x=0;x<=r.xSegCount;x++){let y=d+x*m,b=v*(r.xSegCount+1)+x;r.attributes.position.values[3*b+"xyz".indexOf(h[0])]=y,r.attributes.position.values[3*b+"xyz".indexOf(h[1])]=-p}}r.attributes.position.update()}}},Mesh:{enumerable:!1,value:class{constructor(a,c){let h=this;h.geometry=a,h.material=c,h.wireframe=!1,h.attributeInstances=[],Object.entries(h.geometry.attributes).forEach(([r,d])=>{h.attributeInstances.push({attribute:d,location:d.attach(r,h.material.program)})}),l.meshes.push(h)}draw(){f.useProgram(this.material.program),this.material.uniformInstances.forEach(({uniform:a,location:c})=>a.update(c)),this.attributeInstances.forEach(({attribute:a,location:c})=>a.use(c)),f.drawElements(this.wireframe?f.LINES:f.TRIANGLES,this.geometry.attributes.index.values.length,f.UNSIGNED_SHORT,0)}remove(){l.meshes=l.meshes.filter(a=>a!==this)}}},Attribute:{enumerable:!1,value:class{constructor(a){this.type=f.FLOAT,this.normalized=!1,this.buffer=f.createBuffer(),Object.assign(this,a),this.update()}update(){this.values!==void 0&&(f.bindBuffer(this.target,this.buffer),f.bufferData(this.target,this.values,f.STATIC_DRAW))}attach(a,c){let h=f.getAttribLocation(c,a);return this.target===f.ARRAY_BUFFER&&(f.enableVertexAttribArray(h),f.vertexAttribPointer(h,this.size,this.type,this.normalized,0,0)),h}use(a){f.bindBuffer(this.target,this.buffer),this.target===f.ARRAY_BUFFER&&(f.enableVertexAttribArray(a),f.vertexAttribPointer(a,this.size,this.type,this.normalized,0,0))}}}});let o=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];l.commonUniforms={projectionMatrix:new l.Uniform({type:"mat4",value:o}),modelViewMatrix:new l.Uniform({type:"mat4",value:o}),resolution:new l.Uniform({type:"vec2",value:[1,1]}),aspectRatio:new l.Uniform({type:"float",value:1})},i&&n&&this.setSize(i,n)}setSize(t=640,e=480,i=1){this.width=t,this.height=e,this.gl.viewport(0,0,t*i,e*i),this.commonUniforms.resolution.value=[t,e],this.commonUniforms.aspectRatio.value=t/e}setOrthographicCamera(t=0,e=0,i=0,n=-2e3,l=2e3){this.commonUniforms.projectionMatrix.value=[2/this.width,0,0,0,0,2/this.height,0,0,0,0,2/(n-l),0,t,e,i,1]}render(){this.gl.clearColor(0,0,0,0),this.gl.clearDepth(1),this.meshes.forEach(t=>t.draw())}cleanup(){let t=this.gl;this.meshes.forEach(e=>{e.attributeInstances&&e.attributeInstances.forEach(({location:i})=>{typeof i=="number"&&i>=0&&t.disableVertexAttribArray(i)}),e.material&&e.material.program&&t.deleteProgram(e.material.program),e.geometry&&e.geometry.attributes&&Object.values(e.geometry.attributes).forEach(i=>{i.buffer&&t.deleteBuffer(i.buffer)})}),this.meshes=[]}},ti=class{constructor(t,e,i,n){this.canvas=t,this.gl=e,this.width=i,this.height=n,this.angle=0,this.conf={presetName:"",wireframe:!1,density:[.06,.16],zoom:1,rotation:0,playing:!0},this.t=1253106,this.last=0,this.amp=320,this.seed=5,this.freqX=14e-5,this.freqY=29e-5,this.activeColors=[1,1,1,1],this.shaderFiles={vertex:`
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
            `},this.initGradientColors(),this.minigl=new ei(t,e,i,n),this.initMesh(),this.resize(),this.updateThemeAwareText()}initGradientColors(){this.sectionColors=yr.map(t=>yi(parseInt(t.substring(1),16)))}initMaterial(){this.uniforms={u_time:new this.minigl.Uniform({value:0}),u_shadow_power:new this.minigl.Uniform({value:5}),u_darken_top:new this.minigl.Uniform({value:0}),u_active_colors:new this.minigl.Uniform({value:this.activeColors,type:"vec4"}),u_global:new this.minigl.Uniform({value:{noiseFreq:new this.minigl.Uniform({value:[this.freqX,this.freqY],type:"vec2"}),noiseSpeed:new this.minigl.Uniform({value:5e-6})},type:"struct"}),u_vertDeform:new this.minigl.Uniform({value:{incline:new this.minigl.Uniform({value:Math.sin(this.angle)/Math.cos(this.angle)}),offsetTop:new this.minigl.Uniform({value:-.5}),offsetBottom:new this.minigl.Uniform({value:-.5}),noiseFreq:new this.minigl.Uniform({value:[3,4],type:"vec2"}),noiseAmp:new this.minigl.Uniform({value:this.amp}),noiseSpeed:new this.minigl.Uniform({value:10}),noiseFlow:new this.minigl.Uniform({value:3}),noiseSeed:new this.minigl.Uniform({value:this.seed})},type:"struct",excludeFrom:"fragment"}),u_baseColor:new this.minigl.Uniform({value:this.sectionColors[0],type:"vec3",excludeFrom:"fragment"}),u_waveLayers:new this.minigl.Uniform({value:[],excludeFrom:"fragment",type:"array"})};for(let t=1;t<this.sectionColors.length;t+=1)this.uniforms.u_waveLayers.value.push(new this.minigl.Uniform({value:{color:new this.minigl.Uniform({value:this.sectionColors[t],type:"vec3"}),noiseFreq:new this.minigl.Uniform({value:[2+t/this.sectionColors.length,3+t/this.sectionColors.length],type:"vec2"}),noiseSpeed:new this.minigl.Uniform({value:11+.3*t}),noiseFlow:new this.minigl.Uniform({value:6.5+.3*t}),noiseSeed:new this.minigl.Uniform({value:this.seed+10*t}),noiseFloor:new this.minigl.Uniform({value:.1}),noiseCeil:new this.minigl.Uniform({value:.63+.07*t})},type:"struct"}));return this.vertexShader=[this.shaderFiles.noise,this.shaderFiles.blend,this.shaderFiles.vertex].join(`

`),new this.minigl.Material(this.vertexShader,this.shaderFiles.fragment,this.uniforms)}initMesh(){this.material=this.initMaterial(),this.geometry=new this.minigl.PlaneGeometry,this.mesh=new this.minigl.Mesh(this.geometry,this.material)}resize(){let t=Math.min(window.devicePixelRatio||1,1.5);this.minigl.setSize(this.width,this.height,t),this.minigl.setOrthographicCamera(),this.xSegCount=Math.ceil(this.width*this.conf.density[0]),this.ySegCount=Math.ceil(this.height*this.conf.density[1]),this.mesh.geometry.setTopology(this.xSegCount,this.ySegCount),this.mesh.geometry.setSize(this.width,this.height),this.mesh.material.uniforms.u_shadow_power.value=this.width<600?5:6}animate=t=>{if(!this.conf.playing)return;this.last===0&&(this.last=t);let e=Math.min(t-this.last,1e3/15);this.last=t,this.t+=e,this.mesh.material.uniforms.u_time.value=this.t,this.minigl.render(),this.animationId=requestAnimationFrame(this.animate)};updateThemeAwareText(){if(!this.sectionColors||this.sectionColors.length===0)return;let t=0;this.sectionColors.forEach(n=>{let l=n[0],f=n[1],o=n[2],a=.299*l+.587*f+.114*o;t+=a});let e=t/this.sectionColors.length,i=e>.6?"#111111":"#ffffff";document.documentElement.style.setProperty("--afx-body-color",i),gt.marqueeFont={colorFn:(n,l)=>{if(!this.sectionColors||this.sectionColors.length===0)return"#ffffff";let f=(n*1.5+l*.25)%this.sectionColors.length,o=Math.floor(f),a=(o+1)%this.sectionColors.length,c=f-o,h=this.sectionColors[o],r=this.sectionColors[a],d=h[0]*(1-c)+r[0]*c,g=h[1]*(1-c)+r[1]*c,m=h[2]*(1-c)+r[2]*c,s=e>.6?.45:1;return`rgb(${Math.round(d*s*255)}, ${Math.round(g*s*255)}, ${Math.round(m*s*255)})`},shadowColor:e>.6?"rgba(0, 0, 0, 0.25)":"inherit",shadowBlur:16},window.AnkiFX&&window.AnkiFX.marquee&&window.AnkiFX.marquee.updateStyles(gt.marqueeFont)}randomizeColors(){let t=()=>"#"+Math.floor(Math.random()*16777215).toString(16).padStart(6,"0"),e=[t(),t(),t(),t()];if(this.sectionColors=e.map(i=>yi(parseInt(i.substring(1),16))),this.uniforms&&(this.uniforms.u_baseColor&&(this.uniforms.u_baseColor.value=this.sectionColors[0]),this.uniforms.u_waveLayers&&this.uniforms.u_waveLayers.value))for(let i=0;i<this.uniforms.u_waveLayers.value.length;i++){let n=this.uniforms.u_waveLayers.value[i];n&&n.value&&n.value.color&&(n.value.color.value=this.sectionColors[i+1]||this.sectionColors[0])}this.updateThemeAwareText()}destroy(){this.conf.playing=!1,this.animationId&&cancelAnimationFrame(this.animationId),this.minigl&&this.minigl.cleanup()}},le=null,gt={id:"gradient",name:"Gradient",run:(u,t)=>{le&&le.destroy(),le=new ti(u.canvasGL,u.gl,u.width,u.height),le.conf.playing=!0,le.last=0,le.animationId=requestAnimationFrame(le.animate)},stop:()=>{le&&(le.destroy(),le=null),document.documentElement.style.removeProperty("--afx-body-color")},onResize:(u,t,e)=>{le&&(le.width=u,le.height=t,le.resize())},randomizeColors:()=>{le&&le.randomizeColors()},marqueeFont:{color:"#E6E6FA",shadowColor:"rgba(230, 230, 250, 0.6)",shadowBlur:8}};var xt=null,Ze,_e,Qe,kt,ki={id:"julia",name:"Julia Set",run:kr,stop:Sr,onResize:(u,t,e)=>{Ze=u,_e=t,kt&&Qe&&kt.uniform2f(Qe,u*e,t*e)},preferredTrack:{title:"Acoustica Power Bundle 4",trackTitle:"AiR"},presets:[{name:"Black Hole",cRe:-.8,cIm:.156,zoomDepth:8,targetX:-.086441,targetY:-.239323},{name:"Electric Lightning",cRe:.285,cIm:.013,zoomDepth:6,targetX:-.106662,targetY:.656613},{name:"Golden Dragon",cRe:-.4,cIm:.6,zoomDepth:9,targetX:-.042175,targetY:-.036744},{name:"Filigree",cRe:-.70176,cIm:-.3842,zoomDepth:10.5,targetX:-.096904,targetY:-.656621},{name:"Fractal Storm",cRe:-.7269,cIm:.1889,zoomDepth:10.5,targetX:-.237086,targetY:.547981},{name:"Seahorse Spiral",cRe:-.74543,cIm:.11301,zoomDepth:12,targetX:-.529406,targetY:.072863}],marqueeFont:{color:"#FFF",outline:"#000"}},wt=null,yt=null,bt={x:0,y:0},K={cRe:-.8,cIm:.156,zoomDepth:10,targetX:-.527503,targetY:.075912,speed:parseFloat(localStorage.getItem("ankifx_julia_speed"))||.15};function kr(u,t={}){kt=u.gl;let e=u.gl,i=u.ctx2d;Ze=u.width,_e=u.height;let n=u.dpr,l=`
        attribute vec2 position;
        void main() { gl_Position = vec4(position, 0.0, 1.0); }
    `,f=`
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
    `;function o(y,b){let w=e.createShader(y);return e.shaderSource(w,b),e.compileShader(w),w}let a=e.createProgram();e.attachShader(a,o(e.VERTEX_SHADER,l)),e.attachShader(a,o(e.FRAGMENT_SHADER,f)),e.linkProgram(a),e.useProgram(a),e.bindBuffer(e.ARRAY_BUFFER,e.createBuffer()),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,1,1]),e.STATIC_DRAW);let c=e.getAttribLocation(a,"position");e.enableVertexAttribArray(c),e.vertexAttribPointer(c,2,e.FLOAT,!1,0,0);let h=e.getUniformLocation(a,"u_time"),r=e.getUniformLocation(a,"u_speed");Qe=e.getUniformLocation(a,"u_resolution");let d=e.getUniformLocation(a,"u_c"),g=e.getUniformLocation(a,"u_zoomDepth"),m=e.getUniformLocation(a,"u_target");e.uniform2f(Qe,Ze*n,_e*n);let s=null,v=null;if(t.debug){let y=document.getElementById("afx-controls-stack-right");if(y){s=document.createElement("div"),s.id="afx-julia-debug-info",s.className="afx-control-row julia-debug-el",s.style.cssText="height: 20px !important; margin-bottom: 2px; pointer-events: none; justify-content: flex-end; opacity: 0.8; font-size: 11px !important; color: #ff00ff;",s.textContent="HOVER TO SEE TARGET COORDS",y.prepend(s);let E=(F,P,M,S,_,A=3)=>{let O=document.createElement("div");O.className="afx-control-row julia-tuner-row julia-debug-el",O.style.cssText="height: 24px !important; margin-bottom: 2px; gap: 8px; justify-content: flex-end; font-size: 10px !important; color: #00ffff;";let z=K[P];O.innerHTML=`
                    <span>${F}:</span>
                    <input type="range" class="julia-slider" data-key="${P}" min="${M}" max="${S}" step="${_}" value="${z}" style="width: 70px; accent-color: #00ffff; cursor: pointer;">
                    <input type="number" class="julia-val" data-key="${P}" step="${_}" value="${z.toFixed(A)}" style="width: 70px; background: rgba(0,0,0,0.4); border: 1px solid #00ffff; color: #00ffff; font-size: 10px !important; padding: 2px 4px; border-radius: 3px; outline: none;">
                `;let q=O.querySelector(".julia-slider"),j=O.querySelector(".julia-val"),B=(R,N=!1)=>{K[P]=parseFloat(R),N||(j.value=K[P].toFixed(A)),q.value=K[P],P==="speed"&&localStorage.setItem("ankifx_julia_speed",K[P])};return q.oninput=R=>B(R.target.value),j.oninput=R=>B(R.target.value,!0),O};K.cRe=t.cRe!==void 0?t.cRe:-.8,K.cIm=t.cIm!==void 0?t.cIm:.156,K.zoomDepth=t.zoomDepth!==void 0?t.zoomDepth:10,K.targetX=t.targetX!==void 0?t.targetX:-.527503,K.targetY=t.targetY!==void 0?t.targetY:.075912,y.prepend(E("SPD","speed",.005,.3,.005,3)),y.prepend(E("T-Y","targetY",-2,2,1e-4,6)),y.prepend(E("T-X","targetX",-2,2,1e-4,6)),y.prepend(E("ZOOM","zoomDepth",2,25,.1,1)),y.prepend(E("C-IM","cIm",-1,1,.001,6)),y.prepend(E("C-RE","cRe",-1.5,1,.001,6))}v=(E,F,P)=>{let M=P*K.speed/Math.max(K.zoomDepth,1)%2,S=M>1?2-M:M,_=S<.5?4*Math.pow(S,3):1-Math.pow(-2*S+2,3)/2,O=2.2/Math.exp(_*K.zoomDepth),z=_*Math.PI*.5,q=(E-Ze/2)/_e,j=(_e/2-F)/_e,B=Math.cos(z),R=Math.sin(z),N=(B*q+R*j)*O,Y=(-R*q+B*j)*O;return{tx:K.targetX+N,ty:K.targetY+Y}};let b=E=>{if(E.target.closest(".afx-controls-stack")||E.target.closest(".afx-dialog")||E.target.closest(".afx-dual-control-stack"))return;let F=performance.now()*.001-p,{tx:P,ty:M}=v(E.clientX,E.clientY,F);K.targetX=P,K.targetY=M,["targetX","targetY"].forEach(S=>{let _=document.querySelector(`.julia-slider[data-key="${S}"]`),A=document.querySelector(`.julia-val[data-key="${S}"]`);_&&(_.value=K[S]),A&&(A.value=K[S].toFixed(6))})};window.addEventListener("mousedown",b),wt=b;let w=E=>{bt.x=E.clientX,bt.y=E.clientY};window.addEventListener("mousemove",w),yt=w}let p=performance.now()*.001;function x(){let y=performance.now()*.001-p;if(e.uniform1f(h,y),e.uniform1f(r,K.speed),e.uniform2f(d,K.cRe,K.cIm),e.uniform1f(g,K.zoomDepth),e.uniform2f(m,K.targetX,K.targetY),e.drawArrays(e.TRIANGLE_STRIP,0,4),i.clearRect(0,0,Ze,_e),s&&v){let b=performance.now()*.001-p,{tx:w,ty:E}=v(bt.x,bt.y,b);s.textContent=`TARGET X: ${w.toFixed(6)}, Y: ${E.toFixed(6)}`}xt=requestAnimationFrame(x)}x()}function Sr(){xt&&(cancelAnimationFrame(xt),xt=null),wt&&(window.removeEventListener("mousedown",wt),wt=null),yt&&(window.removeEventListener("mousemove",yt),yt=null),document.querySelectorAll(".julia-debug-el").forEach(u=>u.remove()),kt=null,Qe=null}var et=null,je=0,Te=0,T=null,J=null,Fe=[],St=0,tt=null,ae={x:-1e3,y:-1e3,dx:0,dy:0,down:!1},Pi=null,Ei={id:"lavalamp",name:"Lava Lamp",run:Fr,stop:Ar,onResize:Tr,marqueeFont:{color:"#ffccaa",shadowColor:"rgba(255, 100, 0, 0.8)",shadowBlur:10}},Pe=6,Pt=class{constructor(t,e,i,n){this.pos={x:t,y:e},this.vel={x:0,y:-(Math.random()*.6+.3)},this.radius=i;let l=e/n;this.temperature=.15+l*.3+Math.random()*.15,this.buoyancy=0,this.noiseOffset=Math.random()*1e3,this.smoothSpeedY=0}update(t,e,i){this.pos.y>i*.8?this.temperature+=.05*t:this.pos.y>i*.6?this.temperature+=.02*t:this.pos.y<i*.2?this.temperature-=.04*t:this.pos.y<i*.4&&(this.temperature-=.015*t),this.temperature=Math.max(0,Math.min(1,this.temperature)),this.buoyancy=this.temperature*4-2,this.vel.y-=this.buoyancy*10*t;let n=Math.sin(this.noiseOffset+St*2e-4)*.1;this.vel.x+=n*t*.3;let l=1-Math.min(Math.abs(this.buoyancy)/.8,1),f=(e*.5-this.pos.x)*.003*l;this.vel.x+=f*t,this.pos.x<this.radius&&(this.vel.x+=(this.radius-this.pos.x)*2*t),this.pos.x>e-this.radius&&(this.vel.x-=(this.pos.x-(e-this.radius))*2*t);let o=-this.radius*.5;this.pos.y<o&&(this.vel.y+=(o-this.pos.y)*8*t);let a=i+this.radius*.5;this.pos.y>a&&(this.vel.y-=(this.pos.y-a)*8*t);let c=Math.pow(.97,t*60);this.vel.x*=c;let r=Math.abs(this.buoyancy)>.8,d=Math.pow(r?.994:.975,t*60);this.vel.y*=d;let g=Math.max(0,(this.pos.y-i*.82)/(i*.18)),m=Math.max(0,(i*.18-this.pos.y)/(i*.18)),s=Math.pow(.88,t*60*(g+m));if(this.vel.x*=s,ae.down){let v=this.pos.x-ae.x,p=this.pos.y-ae.y,x=Math.sqrt(v*v+p*p);if(x<200){let y=(200-x)/200;this.vel.x+=ae.dx*y*1.5,this.vel.y+=ae.dy*y*8}}this.smoothSpeedY+=(Math.abs(this.vel.y)-this.smoothSpeedY)*(1-Math.pow(.05,t)),this.pos.x+=this.vel.x*t,this.pos.y+=this.vel.y*t}},Pr=`
    attribute vec2 aPosition;
    varying vec2 vUv;
    void main() {
        vUv = aPosition * 0.5 + 0.5;
        // Match canvas 2D coordinates (Y=0 is top)
        vUv.y = 1.0 - vUv.y;
        gl_Position = vec4(aPosition, 0.0, 1.0);
    }
`,Er=`
    precision highp float;
    varying vec2 vUv;
    
    uniform vec2 uResolution;
    uniform float uTime;
    
    uniform vec4 uBlobs[${Pe}]; // x, y, radius, stretch
    uniform float uBlobTemp[${Pe}]; // temperature
    
    // Polynomial smooth minimum
    float smin(float a, float b, float k) {
        float h = clamp(0.5 + 0.5 * (b - a) / k, 0.0, 1.0);
        return mix(b, a, h) - k * h * (1.0 - h);
    }
    
    float map(vec2 p) {
        float d = 10000.0;
        for (int i = 0; i < ${Pe}; i++) {
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
`;function Si(u,t){let e=T.createShader(u);return T.shaderSource(e,t),T.compileShader(e),T.getShaderParameter(e,T.COMPILE_STATUS)?e:(console.error("Shader compile error:",T.getShaderInfoLog(e)),T.deleteShader(e),null)}function Cr(){let u=Si(T.VERTEX_SHADER,Pr),t=Si(T.FRAGMENT_SHADER,Er);if(J=T.createProgram(),T.attachShader(J,u),T.attachShader(J,t),T.linkProgram(J),!T.getProgramParameter(J,T.LINK_STATUS))return console.error("Program link error:",T.getProgramInfoLog(J)),!1;T.useProgram(J),tt=T.createBuffer(),T.bindBuffer(T.ARRAY_BUFFER,tt);let e=new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]);T.bufferData(T.ARRAY_BUFFER,e,T.STATIC_DRAW);let i=T.getAttribLocation(J,"aPosition");return T.enableVertexAttribArray(i),T.vertexAttribPointer(i,2,T.FLOAT,!1,0,0),J.uResolution=T.getUniformLocation(J,"uResolution"),J.uTime=T.getUniformLocation(J,"uTime"),J.uBlobs=T.getUniformLocation(J,"uBlobs"),J.uBlobTemp=T.getUniformLocation(J,"uBlobTemp"),!0}function Fr(u,t){if(T=u.gl,Pi=u.canvasGL,je=u.width,Te=u.height,!T){console.error("WebGL context required for Lava Lamp");return}if(!Cr())return;Fe=[];let e=0;for(;Fe.length<Pe&&e<200;){e++;let i=70+Math.random()*60,n=i+Math.random()*(je-i*2),l=i+Math.random()*(Te-i*2),f=!1;for(let o of Fe){let a=o.pos.x-n,c=o.pos.y-l;if(Math.sqrt(a*a+c*c)<o.radius+i+10){f=!0;break}}f||Fe.push(new Pt(n,l,i,Te))}for(;Fe.length<Pe;){let i=70+Math.random()*60,n=i+Math.random()*(je-i*2),l=i+Math.random()*(Te-i*2);Fe.push(new Pt(n,l,i,Te))}St=performance.now(),Mr(),et=requestAnimationFrame(Ci)}function Tr(u,t,e){je=u,Te=t,T&&T.viewport(0,0,u*e,t*e)}function Ci(u){let t=Math.min((u-St)/1e3,.05);St=u;let e=new Float32Array(Pe*4),i=new Float32Array(Pe);for(let n=0;n<Pe;n++)Fe[n].update(t,je,Te);for(let n=0;n<Pe;n++){let l=Fe[n],f=Math.max(.85,1+Math.min(l.smoothSpeedY*.028,.7)*(.4+l.temperature*.6));e[n*4+0]=l.pos.x,e[n*4+1]=l.pos.y,e[n*4+2]=l.radius,e[n*4+3]=f,i[n]=l.temperature}T.useProgram(J),T.uniform2f(J.uResolution,je,Te),T.uniform1f(J.uTime,u*.001),T.uniform4fv(J.uBlobs,e),T.uniform1fv(J.uBlobTemp,i),T.drawArrays(T.TRIANGLES,0,6),ae.dx=0,ae.dy=0,et=requestAnimationFrame(Ci)}function it(u){let t=Pi.getBoundingClientRect(),e=u.touches?u.touches[0]:u,i=e.clientX-t.left,n=e.clientY-t.top;if(ae.down&&u.type!=="mousedown"&&u.type!=="touchstart"){let l=i-ae.x,f=n-ae.y;Math.abs(l)<150&&Math.abs(f)<150&&(ae.dx=l,ae.dy=f)}ae.x=i,ae.y=n}function Et(u){ae.dx=0,ae.dy=0,ae.down=!0,it(u)}function Ct(){ae.down=!1}function Mr(){window.addEventListener("mousedown",Et),window.addEventListener("mousemove",it),window.addEventListener("mouseup",Ct),window.addEventListener("touchstart",Et,{passive:!0}),window.addEventListener("touchmove",it,{passive:!0}),window.addEventListener("touchend",Ct)}function Dr(){window.removeEventListener("mousedown",Et),window.removeEventListener("mousemove",it),window.removeEventListener("mouseup",Ct),window.removeEventListener("touchstart",Et),window.removeEventListener("touchmove",it),window.removeEventListener("touchend",Ct)}function Ar(){et&&(cancelAnimationFrame(et),et=null),Dr(),T&&(T.clearColor(0,0,0,0),T.clear(T.COLOR_BUFFER_BIT),J&&T.deleteProgram(J),tt&&T.deleteBuffer(tt),J=null,tt=null)}var Tt=null,rt,Re,at,At,Fi={id:"mandelbrot",name:"Mandelbrot",run:Ir,stop:_r,onResize:(u,t,e)=>{rt=u,Re=t,At&&at&&At.uniform2f(at,u*e,t*e)},preferredTrack:{title:"Acoustica Power Bundle 4",trackTitle:"AiR"},marqueeFont:{color:"#FFF",outline:"#000"}},Mt=null,Dt=null,Ft={x:0,y:0},oe={targetX:-.743643887037151,targetY:.13182590420533,zoomDepth:11,speed:parseFloat(localStorage.getItem("ankifx_mandelbrot_speed"))||.15};function Ir(u,t={}){At=u.gl;let e=u.gl,i=u.ctx2d;rt=u.width,Re=u.height;let n=u.dpr,l=`
        attribute vec2 position;
        void main() { gl_Position = vec4(position, 0.0, 1.0); }
    `,f=`
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
    `;function o(x,y){let b=e.createShader(x);return e.shaderSource(b,y),e.compileShader(b),b}let a=e.createProgram();e.attachShader(a,o(e.VERTEX_SHADER,l)),e.attachShader(a,o(e.FRAGMENT_SHADER,f)),e.linkProgram(a),e.useProgram(a),e.bindBuffer(e.ARRAY_BUFFER,e.createBuffer()),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,1,1]),e.STATIC_DRAW);let c=e.getAttribLocation(a,"position");e.enableVertexAttribArray(c),e.vertexAttribPointer(c,2,e.FLOAT,!1,0,0);let h=e.getUniformLocation(a,"u_time"),r=e.getUniformLocation(a,"u_speed"),d=e.getUniformLocation(a,"u_zoomDepth"),g=e.getUniformLocation(a,"u_target");at=e.getUniformLocation(a,"u_resolution"),e.uniform2f(at,rt*n,Re*n);let m=null,s=null;if(t.debug){let x=document.getElementById("afx-controls-stack-right");if(x){m=document.createElement("div"),m.id="afx-mandelbrot-debug-info",m.className="afx-control-row mandelbrot-debug-el",m.style.cssText="height: 20px !important; margin-bottom: 2px; pointer-events: none; justify-content: flex-end; opacity: 0.8; font-size: 11px !important; color: #ff00ff;",m.textContent="HOVER TO SEE TARGET COORDS",x.prepend(m);let w=(E,F,P,M,S,_=3)=>{let A=document.createElement("div");A.className="afx-control-row mandelbrot-tuner-row mandelbrot-debug-el",A.style.cssText="height: 24px !important; margin-bottom: 2px; gap: 8px; justify-content: flex-end; font-size: 10px !important; color: #00ffff;";let O=oe[F];A.innerHTML=`
                    <span>${E}:</span>
                    <input type="range" class="mandelbrot-slider" data-key="${F}" min="${P}" max="${M}" step="${S}" value="${O}" style="width: 70px; accent-color: #00ffff; cursor: pointer;">
                    <input type="number" class="mandelbrot-val" data-key="${F}" step="${S}" value="${O.toFixed(_)}" style="width: 70px; background: rgba(0,0,0,0.4); border: 1px solid #00ffff; color: #00ffff; font-size: 10px !important; padding: 2px 4px; border-radius: 3px; outline: none;">
                `;let z=A.querySelector(".mandelbrot-slider"),q=A.querySelector(".mandelbrot-val"),j=(B,R=!1)=>{oe[F]=parseFloat(B),R||(q.value=oe[F].toFixed(_)),z.value=oe[F],F==="speed"&&localStorage.setItem("ankifx_mandelbrot_speed",oe[F])};return z.oninput=B=>j(B.target.value),q.oninput=B=>j(B.target.value,!0),A};x.prepend(w("SPD","speed",.005,.3,.005,3)),x.prepend(w("T-Y","targetY",-1.5,1.5,1e-4,6)),x.prepend(w("T-X","targetX",-2.5,1,1e-4,6)),x.prepend(w("ZOOM","zoomDepth",2,25,.1,1))}s=(w,E,F)=>{let P=F*oe.speed/Math.max(oe.zoomDepth,1)%2,M=P>1?2-P:P,S=M<.5?4*Math.pow(M,3):1-Math.pow(-2*M+2,3)/2,_=Math.exp(S*oe.zoomDepth),A=(w-rt/2)/Re,O=(Re/2-E)/Re;return{tx:oe.targetX+A*(2.5/_),ty:oe.targetY+O*(2.5/_)}};let y=w=>{if(w.target.closest(".afx-controls-stack")||w.target.closest(".afx-dialog")||w.target.closest(".afx-dual-control-stack"))return;let E=performance.now()*.001-v,{tx:F,ty:P}=s(w.clientX,w.clientY,E);oe.targetX=F,oe.targetY=P,["targetX","targetY"].forEach(M=>{let S=document.querySelector(`.mandelbrot-slider[data-key="${M}"]`),_=document.querySelector(`.mandelbrot-val[data-key="${M}"]`);S&&(S.value=oe[M]),_&&(_.value=oe[M].toFixed(6))})};window.addEventListener("mousedown",y),Mt=y;let b=w=>{Ft.x=w.clientX,Ft.y=w.clientY};window.addEventListener("mousemove",b),Dt=b}let v=performance.now()*.001;function p(){let x=performance.now()*.001-v;if(e.uniform1f(h,x),e.uniform1f(r,oe.speed),e.uniform1f(d,oe.zoomDepth),e.uniform2f(g,oe.targetX,oe.targetY),e.drawArrays(e.TRIANGLE_STRIP,0,4),i.clearRect(0,0,rt,Re),m&&s){let y=performance.now()*.001-v,{tx:b,ty:w}=s(Ft.x,Ft.y,y);m.textContent=`TARGET X: ${b.toFixed(6)}, Y: ${w.toFixed(6)}`}Tt=requestAnimationFrame(p)}p()}function _r(){Tt&&(cancelAnimationFrame(Tt),Tt=null),Mt&&(window.removeEventListener("mousedown",Mt),Mt=null),Dt&&(window.removeEventListener("mousemove",Dt),Dt=null),document.querySelectorAll(".mandelbrot-debug-el").forEach(u=>u.remove()),At=null,at=null}var ot=null,Rt,It,_t=16,Me=[];function Ti(){let u=Math.floor(Rt/_t);Me=[];for(let t=0;t<u;t++)Me[t]=Math.random()*-100}var Mi={id:"matrix",name:"Matrix",run:Rr,stop:Lr,onResize:(u,t)=>{Rt=u,It=t,Ti()},preferredTrack:{trackTitle:"nightfall"},marqueeFont:{color:"#0F0",shadowColor:"#0F0",shadowBlur:10}};function Rr(u,t){let e=u.ctx2d;Rt=u.width,It=u.height,Ti();let i="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*]*";function n(){e.fillStyle="rgba(0, 0, 0, 0.1)",e.fillRect(0,0,Rt,It),e.fillStyle="#0F0",e.font=_t+"px monospace";for(let l=0;l<Me.length;l++)if(Me[l]>0||Math.random()>.95){let f=i.charAt(Math.floor(Math.random()*i.length)),o=Me[l]*_t;e.fillText(f,l*_t,o),o>It&&Math.random()>.975&&(Me[l]=0),Me[l]++}else Me[l]+=.5;ot=requestAnimationFrame(n)}ot=requestAnimationFrame(n)}function Lr(){ot&&(cancelAnimationFrame(ot),ot=null)}var nt=null,ii,ri,Di={id:"none",name:"None",run:zr,stop:Or,onResize:(u,t)=>{ii=u,ri=t},marqueeFont:{color:"#ffffff",shadowColor:"rgba(0,0,0,0.8)",shadowBlur:5}};function zr(u,t){let e=u.ctx2d;ii=u.width,ri=u.height;function i(){e.clearRect(0,0,ii,ri),nt=requestAnimationFrame(i)}nt=requestAnimationFrame(i)}function Or(){nt&&(cancelAnimationFrame(nt),nt=null)}var st=null,ne,ye,Ai={id:"starfield",name:"Starfield",run:Ur,stop:Br,onResize:(u,t)=>{ne=u,ye=t},preferredTrack:{trackTitle:"star wars title"},marqueeFont:{color:"#FFE81F",shadowColor:"#FFE81F",shadowBlur:20,outline:"#000"}};function Ur(u,t){let e=u.ctx2d;ne=u.width,ye=u.height;let i=[],n=8e3,l=new Uint8Array(512),f=new Uint8Array(256).map(()=>Math.random()*256);for(let v=0;v<512;v++)l[v]=f[v&255];let o=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]];function a(v,p,x,y){return v[0]*p+v[1]*x+v[2]*y}function c(v,p,x){let y,b,w,E,F=.3333333333333333,P=1/6,M=(v+p+x)*F,S=Math.floor(v+M),_=Math.floor(p+M),A=Math.floor(x+M),O=(S+_+A)*P,z=v-S+O,q=p-_+O,j=x-A+O,B,R,N,Y,$,ee;z>=q?q>=j?(B=1,R=0,N=0,Y=1,$=1,ee=0):z>=j?(B=1,R=0,N=0,Y=1,$=0,ee=1):(B=0,R=0,N=1,Y=1,$=0,ee=1):q<j?(B=0,R=0,N=1,Y=0,$=1,ee=1):z<j?(B=0,R=1,N=0,Y=0,$=1,ee=1):(B=0,R=1,N=0,Y=1,$=1,ee=0);let V=z-B+P,k=q-R+P,I=j-N+P,U=z-Y+2*P,L=q-$+2*P,X=j-ee+2*P,he=z-1+3*P,re=q-1+3*P,Ee=j-1+3*P,C=S&255,D=_&255,H=A&255,te=.6-z*z-q*q-j*j;te<0?y=0:(te*=te,y=te*te*a(o[l[C+l[D+l[H]]]%12],z,q,j));let de=.6-V*V-k*k-I*I;de<0?b=0:(de*=de,b=de*de*a(o[l[C+B+l[D+R+l[H+N]]]%12],V,k,I));let Z=.6-U*U-L*L-X*X;Z<0?w=0:(Z*=Z,w=Z*Z*a(o[l[C+Y+l[D+$+l[H+ee]]]%12],U,L,X));let ce=.6-he*he-re*re-Ee*Ee;return ce<0?E=0:(ce*=ce,E=ce*ce*a(o[l[C+1+l[D+1+l[H+1]]]%12],he,re,Ee)),32*(y+b+w+E)}function h(v,p,x,y=3){let b=0,w=.5;for(let E=0;E<y;E++)b+=c(v,p,x)*w,v*=2,p*=2,x*=2,w*=.5;return b}class r{constructor(){this.active=!1,this.nextSpawn=Date.now()+2e3}reset(){let p=Math.random()*Math.PI*2,x=.2+Math.random()*.4;this.x=Math.cos(p)*ne*x,this.y=Math.sin(p)*ye*x,this.z=ne,this.sizeBase=80+Math.random()*120,this.speed=.8,this.active=!0,this.type=1+Math.floor(Math.random()*2);let y=[{name:"ice",baseH:190+Math.random()*40,sat:60,l:70},{name:"inferno",baseH:Math.random()*40,sat:80,l:60},{name:"toxic",baseH:80+Math.random()*40,sat:70,l:60},{name:"ethereal",baseH:260+Math.random()*40,sat:60,l:75},{name:"classic",baseH:30+Math.random()*20,sat:50,l:80}],b=y[Math.floor(Math.random()*y.length)];this.generateGasGiantTexture(b),this.type===2&&(this.rings=Array.from({length:4},(w,E)=>({r1:1.6+E*.2,opacity:.2+Math.random()*.4})))}hslToRgb(p,x,y){p/=360,x/=100,y/=100;let b,w,E;if(x===0)b=w=E=y;else{let F=y<.5?y*(1+x):y+x-y*x,P=2*y-F,M=S=>(S<0&&(S+=1),S>1&&(S-=1),S<1/6?P+(F-P)*6*S:S<1/2?F:S<2/3?P+(F-P)*(2/3-S)*6:P);b=M(p+1/3),w=M(p),E=M(p-1/3)}return{r:b*255,g:w*255,b:E*255}}generateGasGiantTexture(p){let x=document.createElement("canvas");x.width=x.height=256;let y=x.getContext("2d"),b=y.createImageData(256,256),w=p.baseH,E=this.hslToRgb(w,p.sat,p.l),F=this.hslToRgb((w+20)%360,p.sat+10,p.l-10),P=this.hslToRgb((w-40+360)%360,p.sat+20,p.l-15),M=this.hslToRgb((w+60)%360,p.sat-20,p.l+10),S=(A,O,z)=>({r:A.r+(O.r-A.r)*z,g:A.g+(O.g-A.g)*z,b:A.b+(O.b-A.b)*z}),_=Math.random()*1e3;for(let A=0;A<256;A++)for(let O=0;O<256;O++){let z=A/256*10,q=O/256*10,j=Math.abs(h(0,z*.4,_,3)),B=z+h(q*.5,z*.5,_)*j*4,R=q+h(z*.5,q*.5,_+50)*j*2,N=(h(0,B*.8,_+100,4)+1)/2,Y=(h(R*.1,B*1.5,_+200,2)+1)/2,$=S(F,E,N);N>.7&&($=S($,M,(N-.7)*2)),Y>.6&&($=S($,P,(Y-.6)*1.5));let ee=1+h(R,B,_+300,2)*.2,V=(A*256+O)*4;b.data[V]=Math.min(255,$.r*ee),b.data[V+1]=Math.min(255,$.g*ee),b.data[V+2]=Math.min(255,$.b*ee),b.data[V+3]=255}y.putImageData(b,0,0),this.textureCanvas=x}update(){if(!this.active){Date.now()>this.nextSpawn&&this.reset();return}this.z-=this.speed,this.z<=0&&(this.active=!1,this.nextSpawn=Date.now())}draw(p){if(!this.active)return;let x=ne/2/this.z,y=this.x*x+ne/2,b=this.y*x+ye/2,w=(1-this.z/ne)*this.sizeBase;if(y<-w*3||y>ne+w*3||b<-w*3||b>ye+w*3)return;p.save(),p.translate(y,b),this.type===2&&(this.drawRings(p,w,!0),p.globalAlpha=1);let E=p.createRadialGradient(0,0,w*.9,0,0,w*1.5);E.addColorStop(0,"rgba(255, 255, 255, 0.15)"),E.addColorStop(1,"rgba(0,0,0,0)"),p.fillStyle=E,p.beginPath(),p.arc(0,0,w*1.5,0,Math.PI*2),p.fill(),p.save(),p.beginPath(),p.arc(0,0,w,0,Math.PI*2),p.clip(),p.globalAlpha=1,p.drawImage(this.textureCanvas,-w,-w,w*2,w*2);let F=p.createRadialGradient(-w*.5,-w*.5,w*.1,0,0,w);F.addColorStop(0,"rgba(255, 255, 255, 0.25)"),F.addColorStop(.5,"rgba(0, 0, 0, 0)"),F.addColorStop(1,"rgba(0, 0, 0, 0.4)"),p.fillStyle=F,p.fillRect(-w,-w,w*2,w*2),p.restore();let P=p.createRadialGradient(0,0,w*.7,0,0,w);P.addColorStop(1,"rgba(255,255,255,0.4)"),P.addColorStop(.8,"rgba(255,255,255,0)"),p.fillStyle=P,p.beginPath(),p.arc(0,0,w,0,Math.PI*2),p.fill(),this.type===2&&(this.drawRings(p,w,!1),p.globalAlpha=1),p.restore()}drawRings(p,x,y){p.save();let b=Math.PI/8;for(let w of this.rings)p.globalAlpha=w.opacity,p.strokeStyle="#E6E6FA",p.lineWidth=x*.15,p.beginPath(),p.ellipse(0,0,w.r1*x,w.r1*.3*x,b,0,Math.PI*2),p.stroke();p.restore()}}let d=new r,g=["#FFFFFF","#FFE4B5","#E0FFFF","#FFF0F5","#F0F8FF"];for(let v=0;v<n;v++)i.push({x:(Math.random()-.5)*ne*4,y:(Math.random()-.5)*ye*4,z:Math.random()*ne,color:g[Math.floor(Math.random()*g.length)],sizeBase:2+Math.random()*2.5});let m=0;function s(){e.fillStyle="rgba(5, 5, 12, 1)",e.fillRect(0,0,ne,ye);let v=ne/2,p=ye/2;m+=.01,d.update(),d.draw(e);for(let x=0;x<n;x++){let y=i[x],b=y.z;if(y.z-=4,y.z<=0){y.x=(Math.random()-.5)*ne*4,y.y=(Math.random()-.5)*ye*4,y.z=ne;continue}let w=ne/2/y.z,E=y.x*w+v,F=y.y*w+p;if(E>=0&&E<=ne&&F>=0&&F<=ye){let P=1-y.z/ne,M=P*y.sizeBase;if(P<.3){e.globalAlpha=P*2,e.fillStyle=y.color,e.fillRect(E,F,Math.max(1,M),Math.max(1,M));continue}e.globalAlpha=P,e.fillStyle=y.color,e.strokeStyle=y.color;let S=ne/2/b,_=y.x*S+v,A=y.y*S+p;e.lineWidth=M,e.beginPath(),e.moveTo(_,A),e.lineTo(E,F),e.stroke(),e.beginPath(),e.arc(E,F,M/2,0,Math.PI*2),e.fill(),P>.8&&(e.globalAlpha=(P-.8)*3,e.beginPath(),e.arc(E,F,M*2.5,0,Math.PI*2),e.fill())}}e.globalAlpha=1,st=requestAnimationFrame(s)}st=requestAnimationFrame(s)}function Br(){st&&(cancelAnimationFrame(st),st=null)}var lt=null,Le,Ne,pe=null;function _i(){if(Le===void 0||Ne===void 0)return;let u=Math.max(14,Math.floor(Le/25)),t=Math.floor(Le/u),e=Math.floor(Ne/u);pe=new oi(t,e,u),pe._selectTarget()}var Ri={id:"tetris",name:"Tetris",run:qr,stop:jr,onResize:(u,t)=>{Le=u,Ne=t,_i()},preferredTrack:{title:"WinTask 3",trackTitle:"Whoopees Tetris"},marqueeFont:{color:"#f0f0f0",shadowColor:"#a000f0",shadowBlur:12,outline:"#000"}},Li={I:{shapes:[[[1,1,1,1]],[[1],[1],[1],[1]]],color:"#00f0f0"},O:{shapes:[[[1,1],[1,1]]],color:"#f0f000"},T:{shapes:[[[0,1,0],[1,1,1]],[[1,0],[1,1],[1,0]],[[1,1,1],[0,1,0]],[[0,1],[1,1],[0,1]]],color:"#a000f0"},S:{shapes:[[[0,1,1],[1,1,0]],[[1,0],[1,1],[0,1]]],color:"#00f000"},Z:{shapes:[[[1,1,0],[0,1,1]],[[0,1],[1,1],[1,0]]],color:"#f00000"},J:{shapes:[[[1,0,0],[1,1,1]],[[1,1],[1,0],[1,0]],[[1,1,1],[0,0,1]],[[0,1],[0,1],[1,1]]],color:"#0000f0"},L:{shapes:[[[0,0,1],[1,1,1]],[[1,0],[1,0],[1,1]],[[1,1,1],[1,0,0]],[[1,1],[0,1],[0,1]]],color:"#f0a000"}},Ii=Object.keys(Li),ai=class{constructor(t,e,i){this.x=t,this.y=e,this.color=i,this.vx=(Math.random()-.5)*12,this.vy=(Math.random()-.7)*14,this.gravity=.45,this.life=1,this.decay=.012+Math.random()*.018,this.size=1+Math.random()*2.5}update(){this.vx*=.985,this.vy+=this.gravity,this.x+=this.vx,this.y+=this.vy,this.life-=this.decay}draw(t){t.globalAlpha=Math.max(0,this.life),t.fillStyle=this.color,t.fillRect(this.x,this.y,this.size,this.size)}},oi=class{constructor(t,e,i){this.cols=t,this.rows=e,this.cellSize=i,this.board=Array.from({length:e},()=>Array(t).fill(null)),this.particles=[],this.exploding=!1,this.explodeTimer=0,this.EXPLODE_DURATION=120,this.level=1,this.linesTotal=0,this.dropCounter=0,this.moveCounter=0,this._spawnPiece()}_randomPiece(){let t=Ii[Math.floor(Math.random()*Ii.length)],e=Li[t],i=Math.floor(Math.random()*e.shapes.length);return{shape:e.shapes[i],color:e.color,key:t,rotIdx:i,def:e}}_spawnPiece(){let t=this._randomPiece();this.current={...t,x:Math.floor((this.cols-t.shape[0].length)/2),y:0}}_fits(t,e,i){for(let n=0;n<t.length;n++)for(let l=0;l<t[n].length;l++){if(!t[n][l])continue;let f=e+l,o=i+n;if(f<0||f>=this.cols||o>=this.rows||o>=0&&this.board[o][f]!==null)return!1}return!0}_lock(){let{shape:t,x:e,y:i,color:n}=this.current;for(let l=0;l<t.length;l++)for(let f=0;f<t[l].length;f++){if(!t[l][f])continue;let o=i+l,a=e+f;o>=0&&o<this.rows&&a>=0&&a<this.cols&&(this.board[o][a]=n)}this._clearRows()}_clearRows(){let t=0;for(let e=this.rows-1;e>=0;e--)this.board[e].every(i=>i!==null)&&(this.board.splice(e,1),this.board.unshift(Array(this.cols).fill(null)),t++,e++);return t>0&&(this.linesTotal+=t,this.level=Math.floor(this.linesTotal/10)+1),t}_choosePlacement(){let{def:t}=this.current,e=-1/0,i=this.current.x,n=this.current.rotIdx;for(let l=0;l<t.shapes.length;l++){let f=t.shapes[l],o=f[0].length;for(let a=0;a<=this.cols-o;a++){let c=0;for(;this._fits(f,a,c+1);)c++;if(!this._fits(f,a,c))continue;let h=this._getHeuristicScore(f,a,c);h>e&&(e=h,i=a,n=l)}}return{x:i,rotIdx:n}}_getHeuristicScore(t,e,i){let n=this.board.map(h=>[...h]);for(let h=0;h<t.length;h++)for(let r=0;r<t[h].length;r++){if(!t[h][r])continue;let d=i+h,g=e+r;d>=0&&d<this.rows&&(n[d][g]="X")}let l=0;for(let h=0;h<this.rows;h++)n[h].every(r=>r!==null)&&l++;let f=Array(this.cols).fill(0),o=0;for(let h=0;h<this.cols;h++)for(let r=0;r<this.rows;r++)if(n[r][h]!==null){f[h]=this.rows-r,o+=f[h];break}let a=0;for(let h=0;h<this.cols;h++){let r=!1;for(let d=0;d<this.rows;d++)n[d][h]!==null?r=!0:r&&a++}let c=0;for(let h=0;h<this.cols-1;h++)c+=Math.abs(f[h]-f[h+1]);return o*-.51+l*.76+a*-.35+c*-.18+Math.random()*.1}_isBoardFull(){for(let t=0;t<3;t++)if(this.board[t].some(e=>e!==null))return!0;return!1}_explodeBoard(t,e){for(let i=0;i<this.rows;i++)for(let n=0;n<this.cols;n++)if(this.board[i][n]){let l=t+n*this.cellSize+this.cellSize/2,f=e+i*this.cellSize+this.cellSize/2,o=4+Math.floor(Math.random()*4);for(let a=0;a<o;a++)this.particles.push(new ai(l,f,this.board[i][n]))}}_reset(){this.board=Array.from({length:this.rows},()=>Array(this.cols).fill(null)),this.exploding=!1,this.explodeTimer=0,this.particles=[],this._spawnPiece(),this._selectTarget()}_selectTarget(){let{x:t,rotIdx:e}=this._choosePlacement(),i=this.current.def;this.current.rotIdx=e,this.current.shape=i.shapes[e],this.current.targetX=t,this.current.y=0,this.current.x=Math.floor((this.cols-this.current.shape[0].length)/2)}step(t,e){if(this.exploding){this.explodeTimer++,this.particles=this.particles.filter(l=>l.life>0),this.particles.forEach(l=>l.update()),this.explodeTimer>=this.EXPLODE_DURATION&&this._reset();return}!this.current.targetX&&this.current.targetX!==0&&this._selectTarget(),this.moveCounter++,this.moveCounter>=2&&(this.moveCounter=0,this.current.x<this.current.targetX?this._fits(this.current.shape,this.current.x+1,this.current.y)&&this.current.x++:this.current.x>this.current.targetX&&this._fits(this.current.shape,this.current.x-1,this.current.y)&&this.current.x--);let i=this.current.x===this.current.targetX,n=Math.max(4,40-(this.level-1)*3);i&&(n=1),this.dropCounter++,this.dropCounter>=n&&(this.dropCounter=0,this._fits(this.current.shape,this.current.x,this.current.y+1)?this.current.y++:(this._lock(),this._isBoardFull()?(this._explodeBoard(t,e),this.exploding=!0,this.explodeTimer=0):(this._spawnPiece(),this._selectTarget())))}draw(t,e,i){let n=this.cellSize;for(let l=0;l<this.rows;l++)for(let f=0;f<this.cols;f++){let o=this.board[l][f];o&&this._drawCell(t,e+f*n,i+l*n,n,o,this.exploding?Math.max(0,1-this.explodeTimer/40):1)}if(!this.exploding&&this.current){let{shape:l,x:f,y:o,color:a}=this.current;for(let c=0;c<l.length;c++)for(let h=0;h<l[c].length;h++)l[c][h]&&this._drawCell(t,e+(f+h)*n,i+(o+c)*n,n,a,1)}t.save(),this.particles.forEach(l=>l.draw(t)),t.restore(),t.globalAlpha=1}_drawCell(t,e,i,n,l,f){t.globalAlpha=f,t.fillStyle=l,t.fillRect(e+1,i+1,n-2,n-2),t.fillStyle="rgba(255,255,255,0.3)",t.fillRect(e+1,i+1,n-2,3),t.fillRect(e+1,i+1,3,n-2),t.fillStyle="rgba(0,0,0,0.4)",t.fillRect(e+1,i+n-4,n-2,3),t.fillRect(e+n-4,i+1,3,n-2),t.globalAlpha=1}};function qr(u,t){let e=u.ctx2d;Le=u.width,Ne=u.height,_i();function i(){if(e.fillStyle="rgba(8, 6, 18, 0.92)",e.fillRect(0,0,Le,Ne),e.strokeStyle="rgba(255,255,255,0.04)",e.lineWidth=.5,pe){let n=pe.cellSize,l=Math.floor((Le-pe.cols*n)/2),f=Math.floor((Ne-pe.rows*n)/2);for(let o=0;o<=pe.cols;o++)e.beginPath(),e.moveTo(l+o*n,f),e.lineTo(l+o*n,f+pe.rows*n),e.stroke();for(let o=0;o<=pe.rows;o++)e.beginPath(),e.moveTo(l,f+o*n),e.lineTo(l+pe.cols*n,f+o*n),e.stroke();pe.step(l,f),pe.draw(e,l,f)}lt=requestAnimationFrame(i)}lt=requestAnimationFrame(i)}function jr(){lt&&(cancelAnimationFrame(lt),lt=null)}var se={aurora:vi,debug:gi,ecg:bi,fire:xi,geometry:wi,gradient:gt,julia:ki,lavalamp:Ei,mandelbrot:Fi,matrix:Mi,none:Di,starfield:Ai,tetris:Ri};var Lt=class{constructor(t="",e="bottom",i={}){this.text=t,this.position=e,this.applyStyles(i),this.time=0,this.textX=0,this.initialized=!1,this.baseCharWidth=15,this.baseFontSize=24,this.baseVelocity=2.8,this.baseBounce=12,this.fontFamily='"Courier New", monospace',this.fontWeight="bold",this.enabled=!0}applyStyles(t={}){this.color=t.color||"#FFF",this.outline=t.outline||null,this.shadowColor=t.shadowColor||null,this.shadowBlur=t.shadowBlur||0,this.colorFn=t.colorFn||null}updateStyles(t={}){this.applyStyles(t)}setText(t){this.text=t}setPosition(t){this.position=t}render(t,e,i){if(!this.enabled)return;this.initialized||(this.textX=e,this.initialized=!0);let n=e<480?.65:e<768?.8:1,l=Math.max(12,Math.floor(this.baseFontSize*n)),f=this.baseBounce*n,o=this.baseCharWidth*n,a=this.baseVelocity*n;if(this.time+=.012,!this.text)return;let c=this.text.length*o;this.textX-=a,this.textX<-(c+e*1.1)&&(this.textX=e),t.font=`${this.fontWeight} ${l}px ${this.fontFamily}`,t.lineJoin="round",this.outline&&(t.lineWidth=4,t.strokeStyle=this.outline);let h=50*n,r=32*n,d=this.position==="bottom"?i-r:h;for(let g=0;g<this.text.length;g++){let m=this.text[g],s=this.textX+g*o;if(s>-40&&s<e+40){let v=d+Math.sin(this.time*4+g*.1)*f;t.fillStyle=this.colorFn?this.colorFn(this.time,g):this.color,this.shadowColor?(t.shadowColor=this.shadowColor==="inherit"?t.fillStyle:this.shadowColor,t.shadowBlur=this.shadowBlur):t.shadowBlur=0,this.outline&&t.strokeText(m,s,v),t.fillText(m,s,v),this.shadowColor&&(t.shadowBlur=0)}}}};window.neoart=Object.create(null);function ni(u,t){var e=Object.create(null,{endian:{value:1,writable:!0},length:{value:0,writable:!0},index:{value:0,writable:!0},buffer:{value:null,writable:!0},view:{value:null,writable:!0},bytesAvailable:{get:function(){return this.length-this.index}},position:{get:function(){return this.index},set:function(i){i<0?i=0:i>this.length&&(i=this.length),this.index=i}},clear:{value:function(){this.buffer=new ArrayBuffer,this.view=null,this.index=this.length=0}},readAt:{value:function(i){return this.view.getUint8(i)}},readByte:{value:function(){return this.view.getInt8(this.index++)}},readShort:{value:function(){var i=this.view.getInt16(this.index,this.endian);return this.index+=2,i}},readInt:{value:function(){var i=this.view.getInt32(this.index,this.endian);return this.index+=4,i}},readUbyte:{value:function(){return this.view.getUint8(this.index++)}},readUshort:{value:function(){var i=this.view.getUint16(this.index,this.endian);return this.index+=2,i}},readUint:{value:function(){var i=this.view.getUint32(this.index,this.endian);return this.index+=4,i}},readBytes:{value:function(i,n,l){var f=i.view,o=this.index,a=this.view;for((l+=o)>this.length&&(l=this.length);o<l;++o)f.setUint8(n++,a.getUint8(o));this.index=o}},readString:{value:function(i){var n=this.index,l=this.view,f="";for((i+=n)>this.length&&(i=this.length);n<i;++n)f+=String.fromCharCode(l.getUint8(n));return this.index=i,f}},writeAt:{value:function(i,n){this.view.setUint8(i,n)}},writeByte:{value:function(i){this.view.setInt8(this.index++,i)}},writeShort:{value:function(i){this.view.setInt16(this.index,i),this.index+=2}},writeInt:{value:function(i){this.view.setInt32(this.index,i),this.index+=4}}});return e.buffer=u,e.view=new DataView(u),e.length=u.byteLength,Object.seal(e)}function zi(){return Object.create(null,{l:{value:0,writable:!0},r:{value:0,writable:!0},next:{value:null,writable:!0}})}function zt(){return Object.create(null,{player:{value:null,writable:!0},channels:{value:[],writable:!0},buffer:{value:[],writable:!0},samplesTick:{value:0,writable:!0},samplesLeft:{value:0,writable:!0},remains:{value:0,writable:!0},completed:{value:0,writable:!0},bufferSize:{get:function(){return this.buffer.length},set:function(u){var t,e=this.buffer.length||0;if(!(u===e||u<512)&&(this.buffer.length=u,u>e))for(this.buffer[e]=zi(),t=++e;t<u;++t)this.buffer[t]=this.buffer[t-1].next=zi()}},complete:{get:function(){return this.completed},set:function(u){this.completed=u^this.player.loopSong}},reset:{value:function(){var u=this.channels[0],t=this.buffer[0];for(this.samplesLeft=0,this.remains=0,this.completed=0;u;)u.initialize(),u=u.next;for(;t;)t.l=t.r=0,t=t.next}},restore:{configurable:!0,value:function(){}}})}function Nr(){var u=null;return typeof AudioContext<"u"?u=new AudioContext:alert("Web Audio API does not appear to be supported. Use Chrome, Safari or Firefox"),u}function Ot(){var u=Object.create(null,{context:{value:null,writable:!0},node:{value:null,writable:!0},analyser:{value:null,writable:!0},analyse:{value:0,writable:!0},endian:{value:0,writable:!0},sampleRate:{value:0,writable:!0},playSong:{value:0,writable:!0},lastSong:{value:0,writable:!0},version:{value:0,writable:!0},title:{value:"",writable:!0},channels:{value:0,writable:!0},loopSong:{value:0,writable:!0},speed:{value:0,writable:!0},tempo:{value:0,writable:!0},mixer:{value:null,writable:!0},tick:{value:0,writable:!0},paused:{value:0,writable:!0},callback:{value:null,writable:!0},quality:{configurable:!0,set:function(t){this.callback=t?this.mixer.accurate.bind(this.mixer):this.mixer.fast.bind(this.mixer)}},toggle:{value:function(t){this.mixer.channels[t].mute^=1}},setup:{configurable:!0,value:function(){}},load:{value:function(t){return this.version=0,this.playSong=0,this.lastSong=0,this.mixer.restore(),t.view||(t=ni(t)),t.position=0,t.readUint()===67324752&&window.neoart.Unzip,t.endian=this.endian,t.position=0,this.loader(t),this.version&&this.setup(),this.version}},play:{value:function(){var t,e;this.version&&(this.paused?this.paused=0:(this.initialize(),typeof this.context.createJavaScriptNode=="function"?this.node=this.context.createJavaScriptNode(this.mixer.bufferSize):this.node=this.context.createScriptProcessor(this.mixer.bufferSize),this.analyser=this.context.createAnalyser(),this.node.connect(this.analyser),this.node.onaudioprocess=this.callback),this.analyse&&window.neoart.Flectrum?(e=window.neoart.analyserNode=this.context.createAnalyser(),this.node.connect(e),e.connect(this.context.destination)):this.node.connect(this.context.destination),t=document.createEvent("Event"),t.initEvent("flodPlay",!0,!1),document.dispatchEvent(t))}},pause:{value:function(){if(this.node){this.node.disconnect(),this.paused=1;var t=document.createEvent("Event");t.initEvent("flodPause",!0,!1),document.dispatchEvent(t)}}},stop:{value:function(){if(this.node){this.node.disconnect(),this.node.onaudioprocess=this.node=null,this.paused=0,this.restore&&this.restore();var t=document.createEvent("Event");t.initEvent("flodStop",!0,!1),document.dispatchEvent(t)}}},reset:{value:function(){this.tick=0,this.mixer.initialize(),this.mixer.samplesTick=this.sampleRate*2.5/this.tempo>>0}}});return window.neoart.audioContext||(window.neoart.audioContext=Nr()),u.context=window.neoart.audioContext,u.sampleRate=u.context.sampleRate,u}function Ut(u){var t=Object.create(null,{next:{value:null,writable:!0},mute:{value:0,writable:!0},panning:{value:0,writable:!0},delay:{value:0,writable:!0},pointer:{value:0,writable:!0},length:{value:0,writable:!0},audena:{value:0,writable:!0},audcnt:{value:0,writable:!0},audloc:{value:0,writable:!0},audper:{value:0,writable:!0},audvol:{value:0,writable:!0},timer:{value:0,writable:!0},level:{value:0,writable:!0},ldata:{value:0,writable:!0},rdata:{value:0,writable:!0},enabled:{get:function(){return this.audena},set:function(e){e!==this.audena&&(this.audena=e,this.audloc=this.pointer,this.audcnt=this.pointer+this.length,this.timer=1,e&&(this.delay+=2))}},period:{set:function(e){e<0?e=0:e>65535&&(e=65535),this.audper=e}},volume:{set:function(e){e<0?e=0:e>64&&(e=64),this.audvol=e}},resetData:{value:function(){this.ldata=0,this.rdata=0}},initialize:{value:function(){this.audena=0,this.audcnt=0,this.audloc=0,this.audper=50,this.audvol=0,this.timer=0,this.ldata=0,this.rdata=0,this.delay=0,this.pointer=0,this.length=0}}});return t.panning=t.level=(++u&2)===0?-1:1,Object.seal(t)}function $r(){return Object.create(null,{active:{value:0,writable:!0},forced:{value:-1,writable:!0},l0:{value:0,writable:!0},l1:{value:0,writable:!0},l2:{value:0,writable:!0},l3:{value:0,writable:!0},l4:{value:0,writable:!0},r0:{value:0,writable:!0},r1:{value:0,writable:!0},r2:{value:0,writable:!0},r3:{value:0,writable:!0},r4:{value:0,writable:!0},initialize:{value:function(){this.l0=this.l1=this.l2=this.l3=this.l4=0,this.r0=this.r1=this.r2=this.r3=this.r4=0}},process:{value:function(u,t){var e=.52133458435322,i=.4860348337215757,n=.9314955486749749,l=1-i;u===0&&(this.l0=i*t.l+l*this.l0,this.r0=i*t.r+l*this.r0,l=1-n,t.l=this.l1=n*this.l0+l*this.l1,t.r=this.r1=n*this.r0+l*this.r1),(this.active|this.forced)>0&&(l=1-e,this.l2=e*t.l+l*this.l2,this.r2=e*t.r+l*this.r2,this.l3=e*this.l2+l*this.l3,this.r3=e*this.r2+l*this.r3,t.l=this.l4=e*this.l3+l*this.l4,t.r=this.r4=e*this.r3+l*this.r4),t.l>1?t.l=1:t.l<-1&&(t.l=-1),t.r>1?t.r=1:t.r<-1&&(t.r=-1)}}})}function Bt(){return Object.create(null,{note:{value:0,writable:!0},sample:{value:0,writable:!0},effect:{value:0,writable:!0},param:{value:0,writable:!0}})}function ut(){return Object.create(null,{name:{value:"",writable:!0},length:{value:0,writable:!0},loop:{value:0,writable:!0},repeat:{value:0,writable:!0},volume:{value:0,writable:!0},pointer:{value:0,writable:!0},loopPtr:{value:0,writable:!0}})}function si(){var u=zt();return Object.defineProperties(u,{filter:{value:null,writable:!0},model:{value:1,writable:!0},memory:{value:[],writable:!0},loopPtr:{value:0,writable:!0},loopLen:{value:4,writable:!0},clock:{value:0,writable:!0},master:{value:0,writable:!0},ready:{value:0,writable:!0},volume:{set:function(t){t>0?(t>64&&(t=64),this.master=t/64*.00390625):this.master=0}},initialize:{value:function(){var t=this.memory.length,e=t+this.loopLen;if(this.reset(),this.filter.initialize(),!this.ready)for(this.ready=1,this.loopPtr=t;t<e;++t)this.memory[t]=0}},restore:{value:function(){this.ready=0,this.memory.length=0}},store:{value:function(t,e,i){var n,l,f=t.position,o=this.memory.length,a;for(i&&(t.position=i),a=t.position+e,a>=t.length&&(n=a-t.length,e=t.length-t.position),l=o,e+=o;l<e;++l)this.memory[l]=t.readByte();for(e+=n;l<e;++l)this.memory[l]=0;return i&&(t.position=f),o}},fast:{value:function(t){var e,i,n,l=this.memory,f,o=0,a,c=0,h,r,d,g=this.bufferSize,m,s,v;if(this.completed){if(!this.remains){this.player.stop();return}g=this.remains}for(;o<g;){for(this.samplesLeft||(this.player.process(),this.samplesLeft=this.samplesTick,this.completed&&(g=o+this.samplesTick,g>this.bufferSize&&(this.remains=g-this.bufferSize,g=this.bufferSize))),s=this.samplesLeft,o+s>=g&&(s=g-o),a=c+s,e=this.channels[0];e;){if(d=this.buffer[c],e.audena&&e.audper>60)for(m=e.audper/this.clock,v=e.audvol*this.master,f=v*(1-e.level),r=v*(1+e.level),i=c;i<a;++i)e.delay?e.delay--:--e.timer<1&&(e.mute||(v=l[e.audloc]*.0078125,e.ldata=v*f,e.rdata=v*r),e.audloc++,e.timer+=m,e.audloc>=e.audcnt&&(e.audloc=e.pointer,e.audcnt=e.pointer+e.length)),d.l+=e.ldata,d.r+=e.rdata,d=d.next;else for(i=c;i<a;++i)d.l+=e.ldata,d.r+=e.rdata,d=d.next;e=e.next}c=a,o+=s,this.samplesLeft-=s}for(v=this.model,l=this.filter,d=this.buffer[0],n=t.outputBuffer.getChannelData(0),h=t.outputBuffer.getChannelData(1),i=0;i<g;++i)l.process(v,d),n[i]=d.l,h[i]=d.r,d.l=d.r=0,d=d.next}}}),u.channels[0]=Ut(0),u.channels[0].next=u.channels[1]=Ut(1),u.channels[1].next=u.channels[2]=Ut(2),u.channels[2].next=u.channels[3]=Ut(3),u.bufferSize=8192,u.filter=$r(),u.master=.00390625,Object.seal(u)}function qt(u){var t=Ot();return Object.defineProperties(t,{quality:{set:function(e){this.callback=this.mixer.fast.bind(this.mixer)}},stereo:{set:function(e){var i=this.mixer.channels[0];for(e<0?e=0:e>1&&(e=1);i;)i.level=e*i.panning,i=i.next}},volume:{set:function(e){e<0?e=0:e>1&&(e=1),this.mixer.master=e*.00390625}},frequency:{value:function(e){e?(this.mixer.clock=3579545/this.sampleRate,this.mixer.samplesTick=735):(this.mixer.clock=3546895/this.sampleRate,this.mixer.samplesTick=882)}}}),t.mixer=u||si(),t.mixer.player=t,t.frequency(0),t.channels=4,t.endian=0,t.quality=0,t.speed=6,t.tempo=125,t}function Oi(){return Object.create(null,{next:{value:null,writable:!0},mute:{value:0,writable:!0},enabled:{value:0,writable:!0},sample:{value:null,writable:!0},length:{value:0,writable:!0},index:{value:0,writable:!0},pointer:{value:0,writable:!0},delta:{value:0,writable:!0},fraction:{value:0,writable:!0},speed:{value:0,writable:!0},dir:{value:0,writable:!0},oldSample:{value:null,writable:!0},oldLength:{value:0,writable:!0},oldPointer:{value:0,writable:!0},oldFraction:{value:0,writable:!0},oldSpeed:{value:0,writable:!0},oldDir:{value:0,writable:!0},volume:{value:0,writable:!0},lvol:{value:0,writable:!0},rvol:{value:0,writable:!0},panning:{value:128,writable:!0},lpan:{value:.5,writable:!0},rpan:{value:.5,writable:!0},ldata:{value:0,writable:!0},rdata:{value:0,writable:!0},mixCounter:{value:0,writable:!0},lmixRampU:{value:0,writable:!0},lmixDeltaU:{value:0,writable:!0},rmixRampU:{value:0,writable:!0},rmixDeltaU:{value:0,writable:!0},lmixRampD:{value:0,writable:!0},lmixDeltaD:{value:0,writable:!0},rmixRampD:{value:0,writable:!0},rmixDeltaD:{value:0,writable:!0},volCounter:{value:0,writable:!0},lvolDelta:{value:0,writable:!0},rvolDelta:{value:0,writable:!0},panCounter:{value:0,writable:!0},lpanDelta:{value:0,writable:!0},rpanDelta:{value:0,writable:!0},initialize:{value:function(){this.enabled=0,this.sample=null,this.length=0,this.index=0,this.pointer=0,this.delta=0,this.fraction=0,this.speed=0,this.dir=0,this.oldSample=null,this.oldLength=0,this.oldPointer=0,this.oldFraction=0,this.oldSpeed=0,this.oldDir=0,this.volume=0,this.lvol=0,this.rvol=0,this.panning=128,this.lpan=.5,this.rpan=.5,this.ldata=0,this.rdata=0,this.mixCounter=0,this.lmixRampU=0,this.lmixDeltaU=0,this.rmixRampU=0,this.rmixDeltaU=0,this.lmixRampD=0,this.lmixDeltaD=0,this.rmixRampD=0,this.rmixDeltaD=0,this.volCounter=0,this.lvolDelta=0,this.rvolDelta=0,this.panCounter=0,this.lpanDelta=0,this.rpanDelta=0}}})}function Ui(){return Object.create(null,{name:{value:"",writable:!0},bits:{value:8,writable:!0},volume:{value:0,writable:!0},length:{value:0,writable:!0},data:{value:[],writable:!0},loopMode:{value:0,writable:!0},loopStart:{value:0,writable:!0},loopLen:{value:0,writable:!0},store:{value:function(u){var t=0,e,i=this.length,n,l,f,o;if(this.loopLen||(this.loopMode=0),n=u.position,this.loopMode?(i=this.loopStart+this.loopLen,this.data=new Float32Array(i+1)):this.data=new Float32Array(this.length+1),this.bits===8)for(f=n+i,f>u.length&&(i=u.length-n),e=0;e<i;e++)o=u.readByte()+t,o<-128?o+=256:o>127&&(o-=256),this.data[e]=o*.0078125,t=o;else for(f=n+(i<<1),f>u.length&&(i=u.length-n>>1),e=0;e<i;e++)o=u.readShort()+t,o<-32768?o+=65536:o>32767&&(o-=65536),this.data[e]=o*3051758e-11,t=o;if(f=n+this.length,this.loopMode?(this.length=this.loopStart+this.loopLen,this.loopMode===1?this.data[i]=this.data[this.loopStart]:this.data[i]=this.data[i-1]):this.data[this.length]=0,i!==this.length)for(l=this.data[i-1],e=i;e<this.length;e++)this.data[e]=l;f<u.length?u.position=f:u.position=u.length-1}}})}function Xr(){var u=zt();return Object.defineProperties(u,{setup:{value:function(t){var e=1;for(this.channels.length=t,this.channels[0]=Oi();e<t;++e)this.channels[e]=this.channels[e-1].next=Oi()}},initialize:{value:function(){this.reset()}},fast:{value:function(t){var e,i,n,l,f=0,o,a=0,c,h,r,d=this.bufferSize,g,m;if(this.completed){if(!this.remains){this.player.stop();return}d=this.remains}for(;f<d;){for(this.samplesLeft||(this.player.process(),this.player.fast(),this.samplesLeft=this.samplesTick,this.completed&&(d=f+this.samplesTick,d>this.bufferSize&&(this.remains=d-this.bufferSize,d=this.bufferSize))),g=this.samplesLeft,f+g>=d&&(g=d-f),o=a+g,e=this.channels[0];e;){if(!e.enabled){e=e.next;continue}for(h=e.sample,i=h.data,r=this.buffer[a],l=a;l<o;++l){if(e.index!==e.pointer){if(e.index>=e.length)if(h.loopMode)e.pointer=h.loopStart+(e.index-e.length),e.length=h.length,h.loopMode===2&&(e.dir?e.dir=0:e.dir=h.length+h.loopStart-1);else{e.enabled=0;break}else e.pointer=e.index;e.mute?(e.ldata=0,e.rdata=0):(e.dir?m=i[e.dir-e.pointer]:m=i[e.pointer],e.ldata=m*e.lvol,e.rdata=m*e.rvol)}e.index=e.pointer+e.delta,(e.fraction+=e.speed)>=1&&(e.index++,e.fraction--),r.l+=e.ldata,r.r+=e.rdata,r=r.next}e=e.next}a=o,f+=g,this.samplesLeft-=g}for(r=this.buffer[0],n=t.outputBuffer.getChannelData(0),c=t.outputBuffer.getChannelData(1),l=0;l<d;++l)r.l>1?r.l=1:r.l<-1&&(r.l=-1),r.r>1?r.r=1:r.r<-1&&(r.r=-1),n[l]=r.l,c[l]=r.r,r.l=r.r=0,r=r.next}},accurate:{value:function(t){var e,i,n,l,f,o,a=0,c,h=0,r,d,g,m,s,v=this.bufferSize,p,x;if(this.completed){if(!this.remains){this.player.stop();return}v=this.remains}for(;a<v;){for(this.samplesLeft||(this.player.process(),this.player.accurate(),this.samplesLeft=this.samplesTick,this.completed&&(v=a+this.samplesTick,v>this.bufferSize&&(this.remains=v-this.bufferSize,v=this.bufferSize))),p=this.samplesLeft,a+p>=v&&(p=v-a),c=h+p,e=this.channels[0];e;){if(!e.enabled){e=e.next;continue}for(g=e.sample,i=g.data,m=e.oldSample,m&&(n=m.data),s=this.buffer[h],o=h;o<c;++o){if(x=e.mute?0:i[e.pointer],x+=(i[e.pointer+e.dir]-x)*e.fraction,(e.fraction+=e.speed)>=1&&(f=e.fraction>>0,e.fraction-=f,e.dir>0?(e.pointer+=f,e.pointer>e.length&&(e.fraction+=e.pointer-e.length,e.pointer=e.length)):(e.pointer-=f,e.pointer<e.length&&(e.fraction+=e.length-e.pointer,e.pointer=e.length))),e.mixCounter?(m?(r=e.mute?0:n[e.oldPointer],r+=(n[e.oldPointer+e.oldDir]-r)*e.oldFraction,(e.oldFraction+=e.oldSpeed)>1&&(f=e.oldFraction>>0,e.oldFraction-=f,e.oldDir>0?(e.oldPointer+=f,e.oldPointer>e.oldLength&&(e.oldFraction+=e.oldPointer-e.oldLength,e.oldPointer=e.oldLength)):(e.oldPointer-=f,e.oldPointer<e.oldLength&&(e.oldFraction+=e.oldLength-e.oldPointer,e.oldPointer=e.oldLength))),s.l+=x*e.lmixRampU+r*e.lmixRampD,s.r+=x*e.rmixRampU+r*e.rmixRampD,e.lmixRampD-=e.lmixDeltaD,e.rmixRampD-=e.rmixDeltaD):(s.l+=x*e.lmixRampU,s.r+=x*e.rmixRampU),e.lmixRampU+=e.lmixDeltaU,e.rmixRampU+=e.rmixDeltaU,e.mixCounter--,e.oldPointer===e.oldLength&&(m.loopMode?m.loopMode===1?(e.oldPointer=m.loopStart,e.oldLength=m.length):e.oldDir>0?(e.oldPointer=m.length-1,e.oldLength=m.loopStart,e.oldDir=-1):(e.oldFraction-=1,e.oldPointer=m.loopStart,e.oldLength=m.length,e.oldDir=1):(m=null,e.oldPointer=0))):(s.l+=x*e.lvol,s.r+=x*e.rvol,e.volCounter?(e.lvol+=e.lvolDelta,e.rvol+=e.rvolDelta,e.volCounter--):e.panCounter&&(e.lpan+=e.lpanDelta,e.rpan+=e.rpanDelta,e.panCounter--,e.lvol=e.volume*e.lpan,e.rvol=e.volume*e.rpan)),e.pointer===e.length)if(g.loopMode)g.loopMode===1?(e.pointer=g.loopStart,e.length=g.length):e.dir>0?(e.pointer=g.length-1,e.length=g.loopStart,e.dir=-1):(e.fraction-=1,e.pointer=g.loopStart,e.length=g.length,e.dir=1);else{e.enabled=0;break}s=s.next}e=e.next}h=c,a+=p,this.samplesLeft-=p}for(s=this.buffer[0],l=t.outputBuffer.getChannelData(0),d=t.outputBuffer.getChannelData(1),o=0;o<v;++o)s.l>1?s.l=1:s.l<-1&&(s.l=-1),s.r>1?s.r=1:s.r<-1&&(s.r=-1),l[o]=s.l,d[o]=s.r,s.l=s.r=0,s=s.next}}}),u.bufferSize=8192,Object.seal(u)}function Bi(u){var t=Ot();return Object.defineProperties(t,{track:{value:null,writable:!0},length:{value:0,writable:!0},restart:{value:0,writable:!0},timer:{value:0,writable:!0},master:{value:0,writable:!0},volume:{set:function(e){e<0?e=0:e>1&&(e=1),this.master=e*64}},setup:{configurable:!1,value:function(){this.mixer.setup(this.channels)}}}),t.mixer=u||Xr(),t.mixer.player=t,t.endian=1,t.quality=1,t}function Hr(u){var t=Object.create(null,{index:{value:u,writable:!0},next:{value:null,writable:!0},flags:{value:0,writable:!0},delay:{value:0,writable:!0},channel:{value:null,writable:!0},patternLoop:{value:0,writable:!0},patternLoopRow:{value:0,writable:!0},playing:{value:null,writable:!0},note:{value:0,writable:!0},keyoff:{value:0,writable:!0},period:{value:0,writable:!0},finetune:{value:0,writable:!0},arpDelta:{value:0,writable:!0},vibDelta:{value:0,writable:!0},instrument:{value:null,writable:!0},autoVibratoPos:{value:0,writable:!0},autoSweep:{value:0,writable:!0},autoSweepPos:{value:0,writable:!0},sample:{value:null,writable:!0},sampleOffset:{value:0,writable:!0},volume:{value:0,writable:!0},volEnabled:{value:0,writable:!0},volEnvelope:{value:null,writable:!0},volDelta:{value:0,writable:!0},volSlide:{value:0,writable:!0},volSlideMaster:{value:0,writable:!0},fineSlideU:{value:0,writable:!0},fineSlideD:{value:0,writable:!0},fadeEnabled:{value:0,writable:!0},fadeDelta:{value:0,writable:!0},fadeVolume:{value:0,writable:!0},panning:{value:0,writable:!0},panEnabled:{value:0,writable:!0},panEnvelope:{value:null,writable:!0},panSlide:{value:0,writable:!0},portaU:{value:0,writable:!0},portaD:{value:0,writable:!0},finePortaU:{value:0,writable:!0},finePortaD:{value:0,writable:!0},xtraPortaU:{value:0,writable:!0},xtraPortaD:{value:0,writable:!0},portaPeriod:{value:0,writable:!0},portaSpeed:{value:0,writable:!0},glissando:{value:0,writable:!0},glissPeriod:{value:0,writable:!0},vibratoPos:{value:0,writable:!0},vibratoSpeed:{value:0,writable:!0},vibratoDepth:{value:0,writable:!0},vibratoReset:{value:0,writable:!0},tremoloPos:{value:0,writable:!0},tremoloSpeed:{value:0,writable:!0},tremoloDepth:{value:0,writable:!0},waveControl:{value:0,writable:!0},tremorPos:{value:0,writable:!0},tremorOn:{value:0,writable:!0},tremorOff:{value:0,writable:!0},tremorVolume:{value:0,writable:!0},retrigx:{value:0,writable:!0},retrigy:{value:0,writable:!0},rowCurrent:{value:null,writable:!0},reset:{value:function(){this.volume=this.sample.volume,this.panning=this.sample.panning,this.finetune=this.sample.finetune>>3<<2,this.keyoff=0,this.volDelta=0,this.fadeEnabled=0,this.fadeDelta=0,this.rowCurrent=null,this.fadeVolume=65536,this.autoVibratoPos=0,this.autoSweep=1,this.autoSweepPos=0,this.vibDelta=0,this.vibratoReset=0,(this.waveControl&15)<4&&(this.vibratoPos=0),this.waveControl>>4<4&&(this.tremoloPos=0)}},autoVibrato:{value:function(){var e;switch(this.autoVibratoPos=this.autoVibratoPos+this.playing.vibratoSpeed&255,this.playing.vibratoType){case 0:e=Jr[this.autoVibratoPos];break;case 1:this.autoVibratoPos<128?e=-64:e=64;break;case 2:e=(64+(this.autoVibratoPos>>1)&127)-64;break;case 3:e=(64-(this.autoVibratoPos>>1)&127)-64;break;default:break}return e*=this.playing.vibratoDepth,this.autoSweep&&(this.playing.vibratoSweep?this.autoSweepPos>this.playing.vibratoSweep?(this.autoSweepPos&2&&(e*=this.autoSweepPos/this.playing.vibratoSweep),this.autoSweep=0):e*=++this.autoSweepPos/this.playing.vibratoSweep:this.autoSweep=0),this.flags|=ue,e>>6}},tonePortamento:{value:function(){this.glissPeriod||(this.glissPeriod=this.period),this.period<this.portaPeriod?(this.glissPeriod+=this.portaSpeed<<2,this.glissando?this.period=Math.round(this.glissPeriod/64)<<6:this.period=this.glissPeriod,this.period>=this.portaPeriod&&(this.period=this.portaPeriod,this.glissPeriod=this.portaPeriod=0)):this.period>this.portaPeriod&&(this.glissPeriod-=this.portaSpeed<<2,this.glissando?this.period=Math.round(this.glissPeriod/64)<<6:this.period=this.glissPeriod,this.period<=this.portaPeriod&&(this.period=this.portaPeriod,this.glissPeriod=this.portaPeriod=0)),this.flags|=ue}},tremolo:{value:function(){var e=255,i=this.tremoloPos&31;switch(this.waveControl>>4&3){case 0:e=Gi[i];break;case 1:e=i<<3;break;default:break}this.volDelta=e*this.tremoloDepth>>6,this.tremoloPos>31&&(this.volDelta=-this.volDelta),this.tremoloPos=this.tremoloPos+this.tremoloSpeed&63,this.flags|=G}},tremor:{value:function(){this.tremorPos===this.tremorOn?(this.tremorVolume=this.volume,this.volume=0,this.flags|=G):(this.tremorPos=0,this.volume=this.tremorVolume,this.flags|=G),this.tremorPos++}},vibrato:{value:function(){var e=255,i=this.vibratoPos&31;switch(this.waveControl&3){case 0:e=Gi[i];break;case 1:e=i<<3,this.vibratoPos>31&&(e=255-e);break;default:break}this.vibDelta=e*this.vibratoDepth>>7,this.vibratoPos>31&&(this.vibDelta=-this.vibDelta),this.vibratoPos=this.vibratoPos+this.vibratoSpeed&63,this.flags|=ue}}});return t.volEnvelope=qi(),t.panEnvelope=qi(),Object.seal(t)}function Nt(){return Object.create(null,{points:{value:[],writable:!0},total:{value:0,writable:!0},sustain:{value:0,writable:!0},loopStart:{value:0,writable:!0},loopEnd:{value:0,writable:!0},flags:{value:0,writable:!0}})}function qi(){return Object.create(null,{value:{value:0,writable:!0},position:{value:0,writable:!0},frame:{value:0,writable:!0},delta:{value:0,writable:!0},fraction:{value:0,writable:!0},stopped:{value:0,writable:!0},reset:{value:function(){this.value=0,this.position=0,this.frame=0,this.delta=0,this.fraction=0,this.stopped=0}}})}function ji(){var u=Object.create(null,{name:{value:"",writable:!0},samples:{value:[],writable:!0},noteSamples:{value:null,writable:!0},fadeout:{value:0,writable:!0},volData:{value:null,writable:!0},volEnabled:{value:0,writable:!0},panData:{value:null,writable:!0},panEnabled:{value:0,writable:!0},vibratoType:{value:0,writable:!0},vibratoSweep:{value:0,writable:!0},vibratoSpeed:{value:0,writable:!0},vibratoDepth:{value:0,writable:!0}});return u.noteSamples=new Uint8Array(96),u.volData=Nt(),u.panData=Nt(),Object.seal(u)}function Ni(u,t){var e=Object.create(null,{rows:{value:[],writable:!0},length:{value:0,writable:!0},size:{value:0,writable:!0}});return e.rows.length=e.size=u*t,e.length=u,Object.seal(e)}function jt(u,t){var e=Object.create(null,{frame:{value:0,writable:!0},value:{value:0,writable:!0}});return e.frame=u||0,e.value=t||0,Object.seal(e)}function li(){return Object.create(null,{note:{value:0,writable:!0},instrument:{value:0,writable:!0},volume:{value:0,writable:!0},effect:{value:0,writable:!0},param:{value:0,writable:!0}})}function $i(){var u=Ui();return Object.defineProperties(u,{finetune:{value:0,writable:!0},panning:{value:0,writable:!0},relative:{value:0,writable:!0}}),Object.seal(u)}function Gr(u){var t=Bi(u);return Object.defineProperties(t,{id:{value:"F2Player"},patterns:{value:[],writable:!0},instruments:{value:[],writable:!0},voices:{value:[],writable:!0},linear:{value:0,writable:!0},complete:{value:0,writable:!0},order:{value:0,writable:!0},position:{value:0,writable:!0},nextOrder:{value:0,writable:!0},nextPosition:{value:0,writable:!0},pattern:{value:null,writable:!0},patternDelay:{value:0,writable:!0},patternOffset:{value:0,writable:!0},timer:{value:0,writable:!0},rowCurrent:{value:0,writable:!0},initialize:{value:function(){var e=0,i;for(this.reset(),this.timer=this.speed,this.order=0,this.position=0,this.nextOrder=-1,this.nextPosition=-1,this.patternDelay=0,this.patternOffset=0,this.complete=0,this.master=64,this.voices.length=this.channels;e<this.channels;++e)i=Hr(e),i.channel=this.mixer.channels[e],i.playing=this.instruments[0],i.sample=i.playing.samples[0],this.voices[e]=i,e&&(this.voices[e-1].next=i)}},loader:{value:function(e){var i,n,l,f,o,a,c,h,r,d,g=22,m,s,v,p;if(!(e.length<360)){if(e.position=17,this.title=e.readString(20),e.position++,l=e.readString(20),l==="FastTracker v2.00   "||l==="FastTracker v 2.00  ")this.version=1;else if(l==="Sk@le Tracker")g=2,this.version=2;else if(l==="MadTracker 2.0")this.version=3;else if(l==="MilkyTracker        ")this.version=4;else if(l==="DigiBooster Pro 2.18")this.version=5;else if(l.indexOf("OpenMPT")!==-1)this.version=6;else return;for(e.readUshort(),i=e.readUint(),this.length=e.readUshort(),this.restart=e.readUshort(),this.channels=e.readUshort(),p=s=e.readUshort(),this.instruments=[],this.instruments.length=e.readUshort()+1,this.linear=e.readUshort(),this.speed=e.readUshort(),this.tempo=e.readUshort(),this.track=new Uint8Array(this.length),n=0;n<this.length;++n)c=e.readUbyte(),c>=p&&(s=c+1),this.track[n]=c;if(this.patterns=[],this.patterns.length=s,s!==p){for(r=Ni(64,this.channels),c=r.size,n=0;n<c;++n)r.rows[n]=li();this.patterns[--s]=r}for(e.position=d=i+60,h=p,n=0;n<h;++n){if(i=e.readUint(),e.position++,r=Ni(e.readUshort(),this.channels),s=r.size,p=e.readUshort(),e.position=d+i,a=e.position+p,p)for(c=0;c<s;++c)m=li(),p=e.readUbyte(),p&128?(p&1&&(m.note=e.readUbyte()),p&2&&(m.instrument=e.readUbyte()),p&4&&(m.volume=e.readUbyte()),p&8&&(m.effect=e.readUbyte()),p&16&&(m.param=e.readUbyte())):(m.note=p,m.instrument=e.readUbyte(),m.volume=e.readUbyte(),m.effect=e.readUbyte(),m.param=e.readUbyte()),m.note!==ui&&m.note>96&&(m.note=0),r.rows[c]=m;else for(c=0;c<s;++c)r.rows[c]=li();this.patterns[n]=r,d=e.position,d!==a&&(d=e.position=a)}for(a=e.position,h=this.instruments.length,n=1;n<h&&(f=e.readUint(),!(e.position+f>=e.length));++n){if(o=ji(),o.name=e.readString(22),e.position++,p=e.readUshort(),p>16&&(p=16),i=e.readUint(),g===2&&i!==64&&(i=64),p){for(o.samples=[],o.samples.length=p,c=0;c<96;++c)o.noteSamples[c]=e.readUbyte();for(c=0;c<12;++c)o.volData.points[c]=jt(e.readUshort(),e.readUshort());for(c=0;c<12;++c)o.panData.points[c]=jt(e.readUshort(),e.readUshort());for(o.volData.total=e.readUbyte(),o.panData.total=e.readUbyte(),o.volData.sustain=e.readUbyte(),o.volData.loopStart=e.readUbyte(),o.volData.loopEnd=e.readUbyte(),o.panData.sustain=e.readUbyte(),o.panData.loopStart=e.readUbyte(),o.panData.loopEnd=e.readUbyte(),o.volData.flags=e.readUbyte(),o.panData.flags=e.readUbyte(),o.volData.flags&Xi&&(o.volEnabled=1),o.panData.flags&Xi&&(o.panEnabled=1),o.vibratoType=e.readUbyte(),o.vibratoSweep=e.readUbyte(),o.vibratoDepth=e.readUbyte(),o.vibratoSpeed=e.readUbyte(),o.fadeout=e.readUshort()<<1,e.position+=g,d=e.position,this.instruments[n]=o,c=0;c<p;++c)v=$i(),v.length=e.readUint(),v.loopStart=e.readUint(),v.loopLen=e.readUint(),v.volume=e.readUbyte(),v.finetune=e.readByte(),v.loopMode=e.readUbyte(),v.panning=e.readUbyte(),v.relative=e.readByte(),e.position++,v.name=e.readString(22),o.samples[c]=v,e.position=d+=i;for(c=0;c<p;++c)v=o.samples[c],v.length&&(d=e.position+v.length,v.loopMode&16&&(v.bits=16,v.loopMode^=16,v.length>>=1,v.loopStart>>=1,v.loopLen>>=1),v.loopLen||(v.loopMode=0),v.store(e),v.loopMode&&(v.length=v.loopStart+v.loopLen),e.position=d)}else e.position=a+f;if(a=e.position,a>=e.length)break}for(o=ji(),o.volData=Nt(),o.panData=Nt(),o.samples=[],n=0;n<12;++n)o.volData.points[n]=jt(),o.panData.points[n]=jt();for(v=$i(),v.length=220,v.data=new Float32Array(220),n=0;n<220;++n)v.data[n]=0;o.samples[0]=v,this.instruments[0]=o}}},process:{value:function(){var e,i,n,l,f,o,a,c,h,r,d,g,m,s=this.voices[0];if(this.tick)for(;s;){if(r=this.pattern.rows[this.position+s.index],s.delay)if((r.param&15)===this.tick)s.flags=s.delay,s.delay=0;else{s=s.next;continue}if(r.volume)switch(a=r.volume>>4,c=r.volume&15,a){case 6:s.volume-=c,s.volume<0&&(s.volume=0),s.flags|=G;break;case 7:s.volume+=c,s.volume>64&&(s.volume=64),s.flags|=G;break;case 11:s.vibrato();break;case 13:s.panning-=c,s.panning<0&&(s.panning=0),s.flags|=me;break;case 14:s.panning+=c,s.panning>255&&(s.panning=255),s.flags|=me;break;case 15:s.portaPeriod&&s.tonePortamento();break;default:break}switch(a=r.param>>4,c=r.param&15,r.effect){case 0:if(!r.param)break;m=(this.tick-this.timer)%3,m<0&&(m+=3),this.tick===2&&this.timer===18&&(m=0),m?m===1?this.linear?s.arpDelta=-(c<<6):(m=this.amiga(s.note+c,s.finetune),s.arpDelta=m-s.period):this.linear?s.arpDelta=-(a<<6):(m=this.amiga(s.note+a,s.finetune),s.arpDelta=m-s.period):s.arpDelta=0,s.flags|=ue;break;case 1:s.period-=s.portaU,s.period<0&&(s.period=0),s.flags|=ue;break;case 2:s.period+=s.portaD,s.period>9212&&(s.period=9212),s.flags|=ue;break;case 3:s.portaPeriod&&s.tonePortamento();break;case 4:a&&(s.vibratoSpeed=a),c&&(s.vibratoDepth=c<<2),s.vibrato();break;case 5:g=1,s.portaPeriod&&s.tonePortamento();break;case 6:g=1,s.vibrato();break;case 7:s.tremolo();break;case 10:g=1;break;case 14:switch(a){case 9:this.tick%c===0&&(s.volEnvelope.reset(),s.panEnvelope.reset(),s.flags|=G|me|$e);break;case 12:this.tick===c&&(s.volume=0,s.flags|=G);break;default:break}break;case 17:a=s.volSlideMaster>>4,c=s.volSlideMaster&15,a?(this.master+=a,this.master>64&&(this.master=64),s.flags|=G):c&&(this.master-=c,this.master<0&&(this.master=0),s.flags|=G);break;case 20:this.tick===r.param&&(s.fadeEnabled=1,s.keyoff=1);break;case 24:a=s.panSlide>>4,c=s.panSlide&15,a?(s.panning+=a,s.panning>255&&(s.panning=255),s.flags|=me):c&&(s.panning-=c,s.panning<0&&(s.panning=0),s.flags|=me);break;case 27:if(e=this.tick,r.volume||e++,e%s.retrigy)break;(!r.volume||r.volume>80)&&s.retrigx&&this.retrig(s),s.flags|=$e;break;case 29:s.tremor();break;default:break}g&&(a=s.volSlide>>4,c=s.volSlide&15,g=0,a?(s.volume+=a,s.flags|=G):c&&(s.volume-=c,s.flags|=G)),s=s.next}else for(this.nextOrder>=0&&(this.order=this.nextOrder),this.nextPosition>=0&&(this.position=this.nextPosition),this.nextOrder=this.nextPosition=-1,this.pattern=this.patterns[this.track[this.order]];s;){if(this.rowCurrent=this.position+s.index,r=this.pattern.rows[this.rowCurrent],e=r.volume>>4,h=r.effect===3||r.effect===5||e===15,a=r.param>>4,s.keyoff=0,s.arpDelta&&(s.arpDelta=0,s.flags|=ue),r.instrument?(s.instrument=r.instrument<this.instruments.length?this.instruments[r.instrument]:null,s.volEnvelope.reset(),s.panEnvelope.reset(),s.flags|=G|me|ze):(r.note===ui||r.effect===20&&!r.param)&&(s.fadeEnabled=1,s.keyoff=1),r.note&&r.note!==ui?s.instrument?(n=s.instrument,m=r.note-1,d=n.samples[n.noteSamples[m]],m+=d.relative,m>=Yr&&m<=Kr&&(h||(s.note=m,s.sample=d,r.instrument?(s.volEnabled=n.volEnabled,s.panEnabled=n.panEnabled,s.flags|=Vr):s.flags|=ue|$e),r.instrument?(s.reset(),s.fadeDelta=n.fadeout):s.finetune=d.finetune>>3<<2,r.effect===14&&a===5&&(s.finetune=(r.param&15)-8<<3),this.linear?m=(120-m<<6)-s.finetune:m=this.amiga(m,s.finetune),h?s.portaPeriod=m:(s.period=m,s.glissPeriod=0))):(s.volume=0,s.flags=G|ze):s.vibratoReset&&r.effect!==4&&r.effect!==6&&(s.vibDelta=0,s.vibratoReset=0,s.flags|=ue),r.volume)if(r.volume>=16&&r.volume<=80)s.volume=r.volume-16,s.flags|=G|ze;else switch(c=r.volume&15,e){case 6:s.volume-=c,s.volume<0&&(s.volume=0),s.flags|=G;break;case 7:s.volume+=c,s.volume>64&&(s.volume=64),s.flags|=G;break;case 10:c&&(s.vibratoSpeed=c);break;case 11:c&&(s.vibratoDepth=c<<2);break;case 12:s.panning=c<<4,s.flags|=me;break;case 15:c&&(s.portaSpeed=c<<4);break;default:break}if(r.effect)switch(c=r.param&15,r.effect){case 1:r.param&&(s.portaU=r.param<<2);break;case 2:r.param&&(s.portaD=r.param<<2);break;case 3:r.param&&e!==15&&(s.portaSpeed=r.param);break;case 4:s.vibratoReset=1;break;case 5:r.param&&(s.volSlide=r.param);break;case 6:r.param&&(s.volSlide=r.param),s.vibratoReset=1;break;case 7:a&&(s.tremoloSpeed=a),c&&(s.tremoloDepth=c);break;case 8:s.panning=r.param,s.flags|=me;break;case 9:r.param&&(s.sampleOffset=r.param<<8),s.sampleOffset>=s.sample.length&&(s.volume=0,s.sampleOffset=0,s.flags&=~(ue|$e),s.flags|=G|ze);break;case 10:r.param&&(s.volSlide=r.param);break;case 11:this.nextOrder=r.param,this.nextOrder>=this.length?this.complete=1:this.nextPosition=0,f=1,this.patternOffset=0;break;case 12:s.volume=r.param,s.flags|=G|ze;break;case 13:this.nextPosition=(a*10+c)*this.channels,this.patternOffset=0,f||(this.nextOrder=this.order+1,this.nextOrder>=this.length&&(this.complete=1,this.nextPosition=-1));break;case 14:switch(a){case 1:c&&(s.finePortaU=c<<2),s.period-=s.finePortaU,s.flags|=ue;break;case 2:c&&(s.finePortaD=c<<2),s.period+=s.finePortaD,s.flags|=ue;break;case 3:s.glissando=c;break;case 4:s.waveControl=s.waveControl&240|c;break;case 6:c?(s.patternLoop?s.patternLoop--:s.patternLoop=c,s.patternLoop&&(this.nextPosition=s.patternLoopRow)):s.patternLoopRow=this.patternOffset=this.position;break;case 7:s.waveControl=s.waveControl&15|c<<4;break;case 10:c&&(s.fineSlideU=c),s.volume+=s.fineSlideU,s.flags|=G;break;case 11:c&&(s.fineSlideD=c),s.volume-=s.fineSlideD,s.flags|=G;break;case 13:s.delay=s.flags,s.flags=0;break;case 14:this.patternDelay=c*this.timer;break;default:break}break;case 15:if(!r.param)break;r.param<32?this.timer=r.param:this.mixer.samplesTick=this.sampleRate*2.5/r.param>>0;break;case 16:this.master=r.param,this.master>64&&(this.master=64),s.flags|=G;break;case 17:r.param&&(s.volSlideMaster=r.param);break;case 21:if(!s.instrument||!s.instrument.volEnabled)break;for(n=s.instrument,m=r.param,a=n.volData.total,l=0;l<a&&!(m<n.volData.points[l].frame);l++);s.volEnvelope.position=--l,a--,n.volData.flags&Hi&&l===n.volData.loopEnd&&(l=s.volEnvelope.position=n.volData.loopStart,m=n.volData.points[l].frame,s.volEnvelope.frame=m),l>=a?(s.volEnvelope.value=n.volData.points[a].value,s.volEnvelope.stopped=1):(s.volEnvelope.stopped=0,s.volEnvelope.frame=m,m>n.volData.points[l].frame&&s.volEnvelope.position++,i=n.volData.points[l],o=n.volData.points[++l],m=o.frame-i.frame,s.volEnvelope.delta=(m?(o.value-i.value<<8)/m>>0:0)||0,s.volEnvelope.fraction=i.value<<8);break;case 24:r.param&&(s.panSlide=r.param);break;case 27:if(a&&(s.retrigx=a),c&&(s.retrigy=c),!r.volume&&s.retrigy){if(e=this.tick+1,e%s.retrigy)break;r.volume>80&&s.retrigx&&this.retrig(s)}break;case 29:r.param&&(s.tremorOn=++a,s.tremorOff=++c+a);break;case 33:a===1?(c&&(s.xtraPortaU=c),s.period-=s.xtraPortaU,s.flags|=ue):a===2&&(c&&(s.xtraPortaD=c),s.period+=s.xtraPortaD,s.flags|=ue);break;default:break}s=s.next}++this.tick>=this.timer+this.patternDelay&&(this.patternDelay=this.tick=0,this.nextPosition<0&&(this.nextPosition=this.position+this.channels,(this.nextPosition>=this.pattern.size||this.complete)&&(this.nextOrder=this.order+1,this.nextPosition=this.patternOffset,this.nextOrder>=this.length&&(this.nextOrder=this.restart,this.mixer.complete=1))))}},fast:{value:function(){for(var e,i,n,l,f,o=this.voices[0],a;o;)e=o.channel,n=o.flags,o.flags=0,n&$e&&(e.index=o.sampleOffset,e.pointer=-1,e.dir=0,e.fraction=0,e.sample=o.sample,e.length=o.sample.length,e.enabled=e.sample.data?1:0,o.playing=o.instrument,o.sampleOffset=0),l=o.playing,i=l.vibratoSpeed?o.autoVibrato():0,a=o.volume+o.volDelta,l.volEnabled?(o.volEnabled&&!o.volEnvelope.stopped&&this.envelope(o,o.volEnvelope,l.volData),a=a*o.volEnvelope.value>>6,n|=G,o.fadeEnabled&&(o.fadeVolume-=o.fadeDelta,o.fadeVolume<0?(a=0,o.fadeVolume=0,o.fadeEnabled=0,o.volEnvelope.value=0,o.volEnvelope.stopped=1,o.panEnvelope.stopped=1):a=a*o.fadeVolume>>16)):o.keyoff&&(a=0,n|=G),f=o.panning,l.panEnabled&&(o.panEnabled&&!o.panEnvelope.stopped&&this.envelope(o,o.panEnvelope,l.panData),f=o.panEnvelope.value<<2,n|=me,f<0?f=0:f>255&&(f=255)),n&G&&(a<0?a=0:a>64&&(a=64),e.volume=Vi[a*this.master>>6],e.lvol=e.volume*e.lpan,e.rvol=e.volume*e.rpan),n&me&&(e.panning=f,e.lpan=Xe[256-f],e.rpan=Xe[f],e.lvol=e.volume*e.lpan,e.rvol=e.volume*e.rpan),n&ue&&(i+=o.period+o.arpDelta+o.vibDelta,this.linear?e.speed=(548077568*Math.pow(2,(4608-i)/768)/this.sampleRate>>0)/65536:e.speed=(65536*(14317456/i)/this.sampleRate>>0)/65536,e.delta=e.speed>>0,e.speed-=e.delta),o=o.next}},accurate:{value:function(){for(var e,i,n,l,f,o,a,c,h,r=this.voices[0],d;r;){if(e=r.channel,n=r.flags,r.flags=0,n&$e&&(e.sample&&(n|=ze,e.mixCounter=220,e.oldSample=null,e.oldPointer=-1,e.enabled&&(e.oldDir=e.dir,e.oldFraction=e.fraction,e.oldSpeed=e.speed,e.oldSample=e.sample,e.oldPointer=e.pointer,e.oldLength=e.length,e.lmixRampD=e.lvol,e.lmixDeltaD=e.lvol/220,e.rmixRampD=e.rvol,e.rmixDeltaD=e.rvol/220)),e.dir=1,e.fraction=0,e.sample=r.sample,e.pointer=r.sampleOffset,e.length=r.sample.length,e.enabled=e.sample.data?1:0,r.playing=r.instrument,r.sampleOffset=0),l=r.playing,i=l.vibratoSpeed?r.autoVibrato():0,d=r.volume+r.volDelta,l.volEnabled?(r.volEnabled&&!r.volEnvelope.stopped&&this.envelope(r,r.volEnvelope,l.volData),d=d*r.volEnvelope.value>>6,n|=G,r.fadeEnabled&&(r.fadeVolume-=r.fadeDelta,r.fadeVolume<0?(d=0,r.fadeVolume=0,r.fadeEnabled=0,r.volEnvelope.value=0,r.volEnvelope.stopped=1,r.panEnvelope.stopped=1):d=d*r.fadeVolume>>16)):r.keyoff&&(d=0,n|=G),a=r.panning,l.panEnabled&&(r.panEnabled&&!r.panEnvelope.stopped&&this.envelope(r,r.panEnvelope,l.panData),a=r.panEnvelope.value<<2,n|=me,a<0?a=0:a>255&&(a=255)),!e.enabled){e.volCounter=0,e.panCounter=0,r=r.next;continue}n&G&&(d<0?d=0:d>64&&(d=64),d=Vi[d*this.master>>6],o=d*Xe[256-a],h=d*Xe[a],d!==e.volume&&!e.mixCounter?(e.volCounter=n&ze?220:this.mixer.samplesTick,e.lvolDelta=(o-e.lvol)/e.volCounter,e.rvolDelta=(h-e.rvol)/e.volCounter):(e.lvol=o,e.rvol=h),e.volume=d),n&me&&(f=Xe[256-a],c=Xe[a],a!==e.panning&&!e.mixCounter&&!e.volCounter?(e.panCounter=this.mixer.samplesTick,e.lpanDelta=(f-e.lpan)/e.panCounter,e.rpanDelta=(c-e.rpan)/e.panCounter):(e.lpan=f,e.rpan=c),e.panning=a),n&ue&&(i+=r.period+r.arpDelta+r.vibDelta,this.linear?e.speed=(548077568*Math.pow(2,(4608-i)/768)/this.sampleRate>>0)/65536:e.speed=(65536*(14317456/i)/this.sampleRate>>0)/65536),e.mixCounter&&(e.lmixRampU=0,e.lmixDeltaU=e.lvol/220,e.rmixRampU=0,e.rmixDeltaU=e.rvol/220),r=r.next}}},envelope:{value:function(e,i,n){var l=i.position,f=n.points[l],o;if(i.frame===f.frame){if(n.flags&Hi&&l===n.loopEnd&&(l=i.position=n.loopStart,f=n.points[l],i.frame=f.frame),l===n.total-1){i.value=f.value,i.stopped=1;return}if(n.flags&Wr&&l===n.sustain&&!e.fadeEnabled){i.value=f.value;return}i.position++,o=n.points[i.position],i.delta=(o.value-f.value<<8)/(o.frame-f.frame)>>0||0,i.fraction=f.value<<8}else i.fraction+=i.delta;i.value=i.fraction>>8,i.frame++}},amiga:{value:function(e,i){var n=0,l=fi[++e];return i<0?n=(fi[--e]-l)/64:i>0&&(n=(l-fi[++e])/64),l-n*i>>0}},retrig:{value:function(e){switch(e.retrigx){case 1:e.volume--;break;case 2:e.volume++;break;case 3:e.volume-=4;break;case 4:e.volume-=8;break;case 5:e.volume-=16;break;case 6:e.volume=(e.volume<<1)/3;break;case 7:e.volume>>=1;break;case 8:e.volume=e.sample.volume;break;case 9:e.volume++;break;case 10:e.volume+=2;break;case 11:e.volume+=4;break;case 12:e.volume+=8;break;case 13:e.volume+=16;break;case 14:e.volume=e.volume*3>>1;break;case 15:e.volume<<=1;break;default:break}e.volume<0?e.volume=0:e.volume>64&&(e.volume=64),e.flags|=G}}}),Object.seal(t)}var ue=1,G=2,me=4,$e=8,Vr=15,ze=32,Xi=1,Wr=2,Hi=4,Yr=0,Kr=118,ui=97,Jr=[0,-2,-3,-5,-6,-8,-9,-11,-12,-14,-16,-17,-19,-20,-22,-23,-24,-26,-27,-29,-30,-32,-33,-34,-36,-37,-38,-39,-41,-42,-43,-44,-45,-46,-47,-48,-49,-50,-51,-52,-53,-54,-55,-56,-56,-57,-58,-59,-59,-60,-60,-61,-61,-62,-62,-62,-63,-63,-63,-64,-64,-64,-64,-64,-64,-64,-64,-64,-64,-64,-63,-63,-63,-62,-62,-62,-61,-61,-60,-60,-59,-59,-58,-57,-56,-56,-55,-54,-53,-52,-51,-50,-49,-48,-47,-46,-45,-44,-43,-42,-41,-39,-38,-37,-36,-34,-33,-32,-30,-29,-27,-26,-24,-23,-22,-20,-19,-17,-16,-14,-12,-11,-9,-8,-6,-5,-3,-2,0,2,3,5,6,8,9,11,12,14,16,17,19,20,22,23,24,26,27,29,30,32,33,34,36,37,38,39,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,56,57,58,59,59,60,60,61,61,62,62,62,63,63,63,64,64,64,64,64,64,64,64,64,64,64,63,63,63,62,62,62,61,61,60,60,59,59,58,57,56,56,55,54,53,52,51,50,49,48,47,46,45,44,43,42,41,39,38,37,36,34,33,32,30,29,27,26,24,23,22,20,19,17,16,14,12,11,9,8,6,5,3,2],Gi=[0,24,49,74,97,120,141,161,180,197,212,224,235,244,250,253,255,253,250,244,235,224,212,197,180,161,141,120,97,74,49,24],Xe=[0,.04417,.062489,.076523,.088371,.098821,.108239,.116927,.124977,.132572,.139741,.146576,.153077,.159335,.16535,.171152,.176772,.18221,.187496,.19263,.197643,.202503,.207273,.211951,.216477,.220943,.225348,.229631,.233854,.237985,.242056,.246066,.249985,.253873,.25767,.261437,.265144,.268819,.272404,.275989,.279482,.282976,.286409,.289781,.293153,.296464,.299714,.302965,.306185,.309344,.312473,.315602,.318671,.321708,.324746,.327754,.3307,.333647,.336563,.339449,.342305,.345161,.347986,.350781,.353545,.356279,.359013,.361717,.364421,.367094,.369737,.37238,.374992,.377574,.380157,.382708,.38526,.387782,.390303,.392794,.395285,.397746,.400176,.402606,.405037,.407437,.409836,.412206,.414576,.416915,.419254,.421563,.423841,.42618,.428458,.430737,.432985,.435263,.437481,.439729,.441916,.444134,.446321,.448508,.450665,.452852,.455009,.457136,.459262,.461389,.463485,.465611,.467708,.469773,.471839,.473935,.47597,.478036,.480072,.482077,.484112,.486117,.488122,.490127,.492101,.494106,.496051,.498025,.5,.501944,.503888,.505802,.507746,.50966,.511574,.513488,.515371,.517255,.519138,.521022,.522905,.524758,.526611,.528465,.530318,.53214,.533993,.535816,.537639,.539462,.541254,.543046,.544839,.546631,.548423,.550216,.551978,.553739,.555501,.557263,.558995,.560757,.562489,.56422,.565952,.567683,.569384,.571116,.572817,.574518,.57622,.57789,.579592,.581262,.582964,.584634,.586305,.587946,.589617,.591257,.592928,.594568,.596209,.597849,.599459,.6011,.60271,.60435,.60596,.60757,.60915,.61076,.61237,.61395,.61556,.617139,.618719,.620268,.621848,.623428,.624977,.626557,.628106,.629655,.631205,.632754,.634303,.635822,.637372,.63889,.64044,.641959,.643478,.644966,.646485,.648004,.649523,.651012,.6525,.653989,.655477,.656966,.658454,.659943,.661431,.66289,.664378,.665836,.667294,.668783,.670241,.671699,.673127,.674585,.676043,.677471,.678929,.680357,.681785,.683213,.684641,.686068,.687496,.688894,.690321,.691749,.693147,.694574,.695972,.697369,.698767,.700164,.701561,.702928,.704326,.705723,.70711],Vi=[0,.005863,.013701,.021569,.029406,.037244,.045082,.052919,.060757,.068625,.076463,.0843,.092138,.099976,.107844,.115681,.123519,.131357,.139194,.147032,.1549,.162738,.170575,.178413,.186251,.194119,.201956,.209794,.217632,.225469,.233307,.241175,.249013,.25685,.264688,.272526,.280394,.288231,.296069,.303907,.311744,.319582,.32745,.335288,.343125,.350963,.3588,.366669,.374506,.382344,.390182,.398019,.405857,.413725,.421563,.4294,.437238,.445076,.452944,.460781,.468619,.476457,.484294,.492132,.5],fi=[29024,27392,25856,24384,23040,21696,20480,19328,18240,17216,16256,15360,14512,13696,12928,12192,11520,10848,10240,9664,9120,8608,8128,7680,7256,6848,6464,6096,5760,5424,5120,4832,4560,4304,4064,3840,3628,3424,3232,3048,2880,2712,2560,2416,2280,2152,2032,1920,1814,1712,1616,1524,1440,1356,1280,1208,1140,1076,1016,960,907,856,808,762,720,678,640,604,570,538,508,480,453,428,404,381,360,339,320,302,285,269,254,240,227,214,202,190,180,169,160,151,142,134,127,120,113,107,101,95,90,85,80,75,71,67,63,60,57,53,50,48,45,42,40,38,36,34,32,30,28],Wi=Gr;function $t(u){return Object.create(null,{index:{value:u,writable:!0},next:{value:null,writable:!0},channel:{value:null,writable:!0},sample:{value:null,writable:!0},enabled:{value:0,writable:!0},period:{value:0,writable:!0},effect:{value:0,writable:!0},param:{value:0,writable:!0},volume:{value:0,writable:!0},portaDir:{value:0,writable:!0},portaPeriod:{value:0,writable:!0},portaSpeed:{value:0,writable:!0},vibratoPos:{value:0,writable:!0},vibratoSpeed:{value:0,writable:!0},initialize:{value:function(){this.channel=null,this.sample=null,this.enabled=0,this.period=0,this.effect=0,this.param=0,this.volume=0,this.portaDir=0,this.portaPeriod=0,this.portaSpeed=0,this.vibratoPos=0,this.vibratoSpeed=0}}})}function Zr(u){var t=qt(u);return Object.defineProperties(t,{id:{value:"MKPlayer"},track:{value:null,writable:!0},patterns:{value:[],writable:!0},samples:{value:[],writable:!0},length:{value:0,writable:!0},restart:{value:0,writable:!0},voices:{value:[],writable:!0},trackPos:{value:0,writable:!0},patternPos:{value:0,writable:!0},jumpFlag:{value:0,writable:!0},vibratoDepth:{value:0,writable:!0},restartSave:{value:0,writable:!0},force:{set:function(e){e<hi?e=hi:e>Oe&&(e=Oe),this.version=e,e===Oe?this.vibratoDepth=6:this.vibratoDepth=7,e===Yi?(this.restartSave=this.restart,this.restart=0):(this.restart=this.restartSave,this.restartSave=0)}},initialize:{value:function(){var e=this.voices[0];for(this.reset(),this.force=this.version,this.speed=6,this.trackPos=0,this.patternPos=0,this.jumpFlag=0;e;)e.initialize(),e.channel=this.mixer.channels[e.index],e.sample=this.samples[0],e=e.next}},loader:{value:function(e){var i=0,n,l,f,o,a,c=0,h;if(!(e.length<2106)&&(e.position=1080,l=e.readString(4),!(l!=="M.K."&&l!=="FLT4"))){for(e.position=0,this.title=e.readString(20),this.version=hi,e.position+=22,n=1;n<32;++n){if(h=e.readUshort(),!h){this.samples[n]=null,e.position+=28;continue}a=ut(),e.position-=24,a.name=e.readString(22),a.length=h<<1,e.position+=3,a.volume=e.readUbyte(),a.loop=e.readUshort()<<1,a.repeat=e.readUshort()<<1,e.position+=22,a.pointer=c,c+=a.length,this.samples[n]=a,a.length>32768&&(this.version=Qr)}for(e.position=950,this.length=e.readUbyte(),h=e.readUbyte(),this.restart=h<this.length?h:0,n=0;n<128;++n)h=e.readUbyte()<<8,this.track[n]=h,h>i&&(i=h);for(e.position=1084,i+=256,this.patterns.length=i,n=0;n<i;++n)if(o=Bt(),h=e.readUint(),o.note=h>>16&4095,o.effect=h>>8&15,o.sample=h>>24&240|h>>12&15,o.param=h&255,this.patterns[n]=o,(o.sample>31||!this.samples[o.sample])&&(o.sample=0),(o.effect===3||o.effect===4)&&(this.version=Yi),(o.effect===5||o.effect===6)&&(this.version=Oe),o.effect>6&&o.effect<10){this.version=0;return}for(this.mixer.store(e,c),n=1;n<32;++n)if(a=this.samples[n],!!a)for(a.name.indexOf("2.0")>-1&&(this.version=Oe),a.loop?(a.loopPtr=a.pointer+a.loop,a.length=a.loop+a.repeat):(a.loopPtr=this.mixer.memory.length,a.repeat=2),c=a.pointer+4,f=a.pointer;f<c;++f)this.mixer.memory[f]=0;a=ut(),a.pointer=a.loopPtr=this.mixer.memory.length,a.length=a.repeat=2,this.samples[0]=a,this.version<Oe&&this.restart!==127&&(this.version=ea)}}},process:{value:function(){var e,i,n,l,f,o,a,c,h,r=this.voices[0];if(this.tick)for(;r;){if(e=r.channel,!r.effect&&!r.param){e.period=r.period,r=r.next;continue}switch(r.effect){case 0:if(h=this.tick%3,!h){e.period=r.period,r=r.next;continue}for(h===1?h=r.param>>4:h=r.param&15,f=r.period&4095,n=37-h,i=0;i<n;++i)if(f>=Ki[i]){e.period=Ki[i+h];break}break;case 1:r.period-=r.param,r.period<113&&(r.period=113),e.period=r.period;break;case 2:r.period+=r.param,r.period>856&&(r.period=856),e.period=r.period;break;case 3:case 5:r.effect===5?c=1:r.param&&(r.portaSpeed=r.param,r.param=0),r.portaPeriod&&(r.portaDir?(r.period-=r.portaSpeed,r.period<=r.portaPeriod&&(r.period=r.portaPeriod,r.portaPeriod=0)):(r.period+=r.portaSpeed,r.period>=r.portaPeriod&&(r.period=r.portaPeriod,r.portaPeriod=0))),e.period=r.period;break;case 4:case 6:r.effect===6?c=1:r.param&&(r.vibratoSpeed=r.param),h=r.vibratoPos>>2&31,h=(r.vibratoSpeed&15)*ta[h]>>this.vibratoDepth,r.vibratoPos>127?e.period=r.period-h:e.period=r.period+h,h=r.vibratoSpeed>>2&60,r.vibratoPos=r.vibratoPos+h&255;break;case 10:c=1;break;default:break}c&&(h=r.param>>4,c=0,h?r.volume+=h:r.volume-=r.param&15,r.volume<0?r.volume=0:r.volume>64&&(r.volume=64),e.volume=r.volume),r=r.next}else for(l=this.track[this.trackPos]+this.patternPos;r;){switch(e=r.channel,r.enabled=0,o=this.patterns[l+r.index],r.effect=o.effect,r.param=o.param,o.sample?(a=r.sample=this.samples[o.sample],e.volume=r.volume=a.volume):a=r.sample,o.note&&(r.effect===3||r.effect===5?o.note<r.period?(r.portaDir=1,r.portaPeriod=o.note):o.note>r.period?(r.portaDir=0,r.portaPeriod=o.note):r.portaPeriod=0:(r.enabled=1,r.vibratoPos=0,e.enabled=0,e.pointer=a.pointer,e.length=a.length,e.period=r.period=o.note)),r.effect){case 11:this.trackPos=r.param-1,this.jumpFlag^=1;break;case 12:e.volume=r.param,this.version===Oe&&(r.volume=r.param);break;case 13:this.jumpFlag^=1;break;case 14:this.mixer.filter.active=r.param^1;break;case 15:h=r.param,h<1?h=1:h>31&&(h=31),this.speed=h,this.tick=0;break;default:break}r.enabled&&(e.enabled=1),e.pointer=a.loopPtr,e.length=a.repeat,r=r.next}++this.tick===this.speed&&(this.tick=0,this.patternPos+=4,(this.patternPos===256||this.jumpFlag)&&(this.patternPos=this.jumpFlag=0,this.trackPos=++this.trackPos&127,this.trackPos===this.length&&(this.trackPos=this.restart,this.mixer.complete=1)))}}}),t.voices[0]=$t(0),t.voices[0].next=t.voices[1]=$t(1),t.voices[1].next=t.voices[2]=$t(2),t.voices[2].next=t.voices[3]=$t(3),t.track=new Uint16Array(128),Object.seal(t)}var hi=1,Qr=2,Yi=3,ea=4,Oe=5,Ki=[856,808,762,720,678,640,604,570,538,508,480,453,428,404,381,360,339,320,302,285,269,254,240,226,214,202,190,180,170,160,151,143,135,127,120,113,0],ta=[0,24,49,74,97,120,141,161,180,197,212,224,235,244,250,253,255,253,250,244,235,224,212,197,180,161,141,120,97,74,49,24],Ji=Zr;function Xt(u){return Object.create(null,{index:{value:u,writable:!0},next:{value:null,writable:!0},channel:{value:null,writable:!0},sample:{value:null,writable:!0},enabled:{value:0,writable:!0},loopCtr:{value:0,writable:!0},loopPos:{value:0,writable:!0},step:{value:0,writable:!0},period:{value:0,writable:!0},effect:{value:0,writable:!0},param:{value:0,writable:!0},volume:{value:0,writable:!0},pointer:{value:0,writable:!0},length:{value:0,writable:!0},loopPtr:{value:0,writable:!0},repeat:{value:0,writable:!0},finetune:{value:0,writable:!0},offset:{value:0,writable:!0},portaDir:{value:0,writable:!0},portaPeriod:{value:0,writable:!0},portaSpeed:{value:0,writable:!0},glissando:{value:0,writable:!0},tremoloParam:{value:0,writable:!0},tremoloPos:{value:0,writable:!0},tremoloWave:{value:0,writable:!0},vibratoParam:{value:0,writable:!0},vibratoPos:{value:0,writable:!0},vibratoWave:{value:0,writable:!0},funkPos:{value:0,writable:!0},funkSpeed:{value:0,writable:!0},funkWave:{value:0,writable:!0},initialize:{value:function(){this.channel=null,this.sample=null,this.enabled=0,this.loopCtr=0,this.loopPos=0,this.step=0,this.period=0,this.effect=0,this.param=0,this.volume=0,this.pointer=0,this.length=0,this.loopPtr=0,this.repeat=0,this.finetune=0,this.offset=0,this.portaDir=0,this.portaPeriod=0,this.portaSpeed=0,this.glissando=0,this.tremoloParam=0,this.tremoloPos=0,this.tremoloWave=0,this.vibratoParam=0,this.vibratoPos=0,this.vibratoWave=0,this.funkPos=0,this.funkSpeed=0,this.funkWave=0}}})}function ia(){var u=Bt();return Object.defineProperties(u,{step:{value:0,writable:!0}}),Object.seal(u)}function Zi(){var u=ut();return Object.defineProperties(u,{finetune:{value:0,writable:!0},realLen:{value:0,writable:!0}}),Object.seal(u)}function ra(u){var t=qt(u);return Object.defineProperties(t,{id:{value:"PTPlayer"},track:{value:null,writable:!0},patterns:{value:[],writable:!0},samples:{value:[],writable:!0},length:{value:0,writable:!0},voices:{value:[],writable:!0},trackPos:{value:0,writable:!0},patternPos:{value:0,writable:!0},patternBreak:{value:0,writable:!0},patternDelay:{value:0,writable:!0},breakPos:{value:0,writable:!0},jumpFlag:{value:0,writable:!0},vibratoDepth:{value:0,writable:!0},force:{set:function(e){e<Ht?e=Ht:e>ci&&(e=ci),this.version=e,e<Qi?this.vibratoDepth=6:this.vibratoDepth=7}},initialize:{value:function(){var e=this.voices[0];for(this.tempo=125,this.speed=6,this.trackPos=0,this.patternPos=0,this.patternBreak=0,this.patternDelay=0,this.breakPos=0,this.jumpFlag=0,this.reset(),this.force=this.version;e;)e.initialize(),e.channel=this.mixer.channels[e.index],e.sample=this.samples[0],e=e.next}},loader:{value:function(e){var i=0,n,l,f,o,a,c=0,h;if(!(e.length<2106)&&(e.position=1080,l=e.readString(4),!(l!=="M.K."&&l!=="M!K!"))){for(e.position=0,this.title=e.readString(20),this.version=Ht,e.position+=22,n=1;n<32;++n){if(h=e.readUshort(),!h){this.samples[n]=null,e.position+=28;continue}a=Zi(),e.position-=24,a.name=e.readString(22),a.length=a.realLen=h<<1,e.position+=2,a.finetune=e.readUbyte()*37,a.volume=e.readUbyte(),a.loop=e.readUshort()<<1,a.repeat=e.readUshort()<<1,e.position+=22,a.pointer=c,c+=a.length,this.samples[n]=a}for(e.position=950,this.length=e.readUbyte(),e.position++,n=0;n<128;++n)h=e.readUbyte()<<8,this.track[n]=h,h>i&&(i=h);for(e.position=1084,i+=256,this.patterns.length=i,n=0;n<i;++n)o=ia(),o.step=h=e.readUint(),o.note=h>>16&4095,o.effect=h>>8&15,o.sample=h>>24&240|h>>12&15,o.param=h&255,this.patterns[n]=o,(o.sample>31||!this.samples[o.sample])&&(o.sample=0),o.effect===15&&o.param>31&&(this.version=Qi),o.effect===8&&(this.version=ci);for(this.mixer.store(e,c),n=1;n<32;++n)if(a=this.samples[n],!!a)for(a.loop||a.repeat>4?(a.loopPtr=a.pointer+a.loop,a.length=a.loop+a.repeat):(a.loopPtr=this.mixer.memory.length,a.repeat=2),c=a.pointer+2,f=a.pointer;f<c;++f)this.mixer.memory[f]=0;a=Zi(),a.pointer=a.loopPtr=this.mixer.memory.length,a.length=a.repeat=2,this.samples[0]=a}}},process:{value:function(){var e,i,n,l,f,o,a=this.voices[0];if(this.tick)this.effects();else if(this.patternDelay)this.effects();else{for(n=this.track[this.trackPos]+this.patternPos;a;){if(e=a.channel,a.enabled=0,a.step||(e.period=a.period),l=this.patterns[n+a.index],a.step=l.step,a.effect=l.effect,a.param=l.param,l.sample?(f=a.sample=this.samples[l.sample],a.pointer=f.pointer,a.length=f.length,a.loopPtr=a.funkWave=f.loopPtr,a.repeat=f.repeat,a.finetune=f.finetune,e.volume=a.volume=f.volume):f=a.sample,l.note)if((a.step&4080)===3664)a.finetune=(a.param&15)*37;else if(a.effect===3||a.effect===5)if(l.note===a.period)a.portaPeriod=0;else{for(i=a.finetune,o=i+37;i<o&&!(l.note>=De[i]);++i);i===o&&o--,i>0&&(o=a.finetune/37>>0&8,o&&i--),a.portaPeriod=De[i],a.portaDir=l.note>a.portaPeriod?0:1}else a.effect===9&&this.moreEffects(a);else{this.moreEffects(a),a=a.next;continue}for(i=0;i<37&&!(l.note>=De[i]);++i);if(a.period=De[a.finetune+i],(a.step&4080)===3792){a.funkSpeed&&this.updateFunk(a),this.extended(a),a=a.next;continue}a.vibratoWave<4&&(a.vibratoPos=0),a.tremoloWave<4&&(a.tremoloPos=0),e.enabled=0,e.pointer=a.pointer,e.length=a.length,e.period=a.period,a.enabled=1,this.moreEffects(a),a=a.next}for(a=this.voices[0];a;)e=a.channel,a.enabled&&(e.enabled=1),e.pointer=a.loopPtr,e.length=a.repeat,a=a.next}++this.tick===this.speed&&(this.tick=0,this.patternPos+=4,this.patternDelay&&--this.patternDelay&&(this.patternPos-=4),this.patternBreak&&(this.patternBreak=0,this.patternPos=this.breakPos,this.breakPos=0),(this.patternPos===256||this.jumpFlag)&&(this.patternPos=this.breakPos,this.breakPos=0,this.jumpFlag=0,++this.trackPos===this.length&&(this.trackPos=0,this.mixer.complete=1)))}},effects:{value:function(){for(var e,i,n,l,f,o=this.voices[0],a;o;){if(e=o.channel,o.funkSpeed&&this.updateFunk(o),(o.step&4095)===0){e.period=o.period,o=o.next;continue}switch(o.effect){case 0:if(f=this.tick%3,!f){e.period=o.period,o=o.next;continue}for(f===1?f=o.param>>4:f=o.param&15,i=o.finetune,n=i+37;i<n;++i)if(o.period>=De[i]){e.period=De[i+f];break}break;case 1:o.period-=o.param,o.period<113&&(o.period=113),e.period=o.period;break;case 2:o.period+=o.param,o.period>856&&(o.period=856),e.period=o.period;break;case 3:case 5:if(o.effect===5?l=1:(o.portaSpeed=o.param,o.param=0),o.portaPeriod)if(o.portaDir?(o.period-=o.portaSpeed,o.period<=o.portaPeriod&&(o.period=o.portaPeriod,o.portaPeriod=0)):(o.period+=o.portaSpeed,o.period>=o.portaPeriod&&(o.period=o.portaPeriod,o.portaPeriod=0)),o.glissando){for(i=o.finetune,f=i+37;i<f&&!(o.period>=De[i]);++i);i===f&&i--,e.period=De[i]}else e.period=o.period;break;case 4:case 6:o.effect===6?l=1:o.param&&(f=o.param&15,f&&(o.vibratoParam=o.vibratoParam&240|f),f=o.param&240,f&&(o.vibratoParam=o.vibratoParam&15|f)),n=o.vibratoPos>>2&31,a=o.vibratoWave&3,a?(f=255,n<<=3,a===1&&(o.vibratoPos>127?f-=n:f=n)):f=er[n],f=(o.vibratoParam&15)*f>>this.vibratoDepth,o.vibratoPos>127?e.period=o.period-f:e.period=o.period+f,f=o.vibratoParam>>2&60,o.vibratoPos=o.vibratoPos+f&255;break;case 7:e.period=o.period,o.param&&(f=o.param&15,f&&(o.tremoloParam=o.tremoloParam&240|f),f=o.param&240,f&&(o.tremoloParam=o.tremoloParam&15|f)),n=o.tremoloPos>>2&31,a=o.tremoloWave&3,a?(f=255,n<<=3,a===1&&(o.tremoloPos>127?f-=n:f=n)):f=er[n],f=(o.tremoloParam&15)*f>>6,o.tremoloPos>127?e.volume=o.volume-f:e.volume=o.volume+f,f=o.tremoloParam>>2&60,o.tremoloPos=o.tremoloPos+f&255;break;case 10:l=1;break;case 14:this.extended(o);break;default:break}l&&(l=0,f=o.param>>4,f?o.volume+=f:o.volume-=o.param&15,o.volume<0?o.volume=0:o.volume>64&&(o.volume=64),e.volume=o.volume),o=o.next}}},moreEffects:{value:function(e){var i=e.channel,n;switch(e.funkSpeed&&this.updateFunk(e),e.effect){case 9:e.param&&(e.offset=e.param),n=e.offset<<8,n>=e.length?e.length=2:(e.pointer+=n,e.length-=n);break;case 11:this.trackPos=e.param-1,this.breakPos=0,this.jumpFlag=1;break;case 12:e.volume=e.param,e.volume>64&&(e.volume=64),i.volume=e.volume;break;case 13:this.breakPos=(e.param>>4)*10+(e.param&15),this.breakPos>63?this.breakPos=0:this.breakPos<<=2,this.jumpFlag=1;break;case 14:this.extended(e);break;case 15:if(!e.param)return;e.param<32?this.speed=e.param:this.mixer.samplesTick=this.sampleRate*2.5/e.param>>0,this.tick=0;break;default:break}}},extended:{value:function(e){var i=e.channel,n=e.param>>4,l,f,o,a=e.param&15;switch(n){case 0:this.mixer.filter.active=a;break;case 1:if(this.tick)return;e.period-=a,e.period<113&&(e.period=113),i.period=e.period;break;case 2:if(this.tick)return;e.period+=a,e.period>856&&(e.period=856),i.period=e.period;break;case 3:e.glissando=a;break;case 4:e.vibratoWave=a;break;case 5:e.finetune=a*37;break;case 6:if(this.tick)return;a?(e.loopCtr?e.loopCtr--:e.loopCtr=a,e.loopCtr&&(this.breakPos=e.loopPos<<2,this.patternBreak=1)):e.loopPos=this.patternPos>>2;break;case 7:e.tremoloWave=a;break;case 8:for(f=e.length-2,o=this.mixer.memory,l=e.loopPtr;l<f;)o[l]=(o[l]+o[++l])*.5;o[++l]=(o[l]+o[0])*.5;break;case 9:if(this.tick||!a||!e.period||this.tick%a)return;i.enabled=0,i.pointer=e.pointer,i.length=e.length,i.delay=30,i.enabled=1,i.pointer=e.loopPtr,i.length=e.repeat,i.period=e.period;break;case 10:if(this.tick)return;e.volume+=a,e.volume>64&&(e.volume=64),i.volume=e.volume;break;case 11:if(this.tick)return;e.volume-=a,e.volume<0&&(e.volume=0),i.volume=e.volume;break;case 12:this.tick===a&&(i.volume=e.volume=0);break;case 13:if(this.tick!==a||!e.period)return;i.enabled=0,i.pointer=e.pointer,i.length=e.length,i.delay=30,i.enabled=1,i.pointer=e.loopPtr,i.length=e.repeat,i.period=e.period;break;case 14:if(this.tick||this.patternDelay)return;this.patternDelay=++a;break;case 15:if(this.tick)return;e.funkSpeed=a,a&&this.updateFunk(e);break;default:break}}},updateFunk:{value:function(e){var i=e.channel,n,l,f=aa[e.funkSpeed];e.funkPos+=f,!(e.funkPos<128)&&(e.funkPos=0,this.version===Ht?(n=e.pointer+e.sample.realLen-e.repeat,l=e.funkWave+e.repeat,l>n&&(l=e.loopPtr,i.length=e.repeat),i.pointer=e.funkWave=l):(n=e.loopPtr+e.repeat,l=e.funkWave+1,l>=n&&(l=e.loopPtr),this.mixer.memory[l]=-this.mixer.memory[l]))}}}),t.voices[0]=Xt(0),t.voices[0].next=t.voices[1]=Xt(1),t.voices[1].next=t.voices[2]=Xt(2),t.voices[2].next=t.voices[3]=Xt(3),t.track=new Uint16Array(128),Object.seal(t)}var Ht=1,Qi=2,ci=3,De=[856,808,762,720,678,640,604,570,538,508,480,453,428,404,381,360,339,320,302,285,269,254,240,226,214,202,190,180,170,160,151,143,135,127,120,113,0,850,802,757,715,674,637,601,567,535,505,477,450,425,401,379,357,337,318,300,284,268,253,239,225,213,201,189,179,169,159,150,142,134,126,119,113,0,844,796,752,709,670,632,597,563,532,502,474,447,422,398,376,355,335,316,298,282,266,251,237,224,211,199,188,177,167,158,149,141,133,125,118,112,0,838,791,746,704,665,628,592,559,528,498,470,444,419,395,373,352,332,314,296,280,264,249,235,222,209,198,187,176,166,157,148,140,132,125,118,111,0,832,785,741,699,660,623,588,555,524,495,467,441,416,392,370,350,330,312,294,278,262,247,233,220,208,196,185,175,165,156,147,139,131,124,117,110,0,826,779,736,694,655,619,584,551,520,491,463,437,413,390,368,347,328,309,292,276,260,245,232,219,206,195,184,174,164,155,146,138,130,123,116,109,0,820,774,730,689,651,614,580,547,516,487,460,434,410,387,365,345,325,307,290,274,258,244,230,217,205,193,183,172,163,154,145,137,129,122,115,109,0,814,768,725,684,646,610,575,543,513,484,457,431,407,384,363,342,323,305,288,272,256,242,228,216,204,192,181,171,161,152,144,136,128,121,114,108,0,907,856,808,762,720,678,640,604,570,538,508,480,453,428,404,381,360,339,320,302,285,269,254,240,226,214,202,190,180,170,160,151,143,135,127,120,0,900,850,802,757,715,675,636,601,567,535,505,477,450,425,401,379,357,337,318,300,284,268,253,238,225,212,200,189,179,169,159,150,142,134,126,119,0,894,844,796,752,709,670,632,597,563,532,502,474,447,422,398,376,355,335,316,298,282,266,251,237,223,211,199,188,177,167,158,149,141,133,125,118,0,887,838,791,746,704,665,628,592,559,528,498,470,444,419,395,373,352,332,314,296,280,264,249,235,222,209,198,187,176,166,157,148,140,132,125,118,0,881,832,785,741,699,660,623,588,555,524,494,467,441,416,392,370,350,330,312,294,278,262,247,233,220,208,196,185,175,165,156,147,139,131,123,117,0,875,826,779,736,694,655,619,584,551,520,491,463,437,413,390,368,347,328,309,292,276,260,245,232,219,206,195,184,174,164,155,146,138,130,123,116,0,868,820,774,730,689,651,614,580,547,516,487,460,434,410,387,365,345,325,307,290,274,258,244,230,217,205,193,183,172,163,154,145,137,129,122,115,0,862,814,768,725,684,646,610,575,543,513,484,457,431,407,384,363,342,323,305,288,272,256,242,228,216,203,192,181,171,161,152,144,136,128,121,114,0],er=[0,24,49,74,97,120,141,161,180,197,212,224,235,244,250,253,255,253,250,244,235,224,212,197,180,161,141,120,97,74,49,24],aa=[0,5,6,7,8,10,11,13,16,19,22,26,32,43,64,128],tr=ra;function oa(){var u=Object.create(null,{player:{value:null,writable:!0},index:{value:0,writable:!0},amiga:{value:null,writable:!0},mixer:{value:null,writable:!0},tracker:{get:function(){return this.player?ir[this.index+this.player.version]:ir[0]}},load:{value:function(t){var e,i;if(t.view||(t=ni(t)),t.endian=1,t.position=0,t.readUint()===67324752&&window.neoart.Unzip,!t)return null;if(this.player&&this.player.id!=="STPlayer"&&(this.player.load(t),this.player.version))return this.player;if(t.length>336&&(t.position=38,e=t.readString(20),(e==="FastTracker v2.00   "||e==="FastTracker v 2.00  "||e==="Sk@le Tracker"||e==="MadTracker 2.0"||e==="MilkyTracker        "||e==="DigiBooster Pro 2.18"||e.indexOf("OpenMPT")!==-1)&&(this.player=Wi(this.mixer),this.player.load(t),this.player.version)))return this.index=pa,this.player;if(t.endian=0,t.length>2105){if(t.position=1080,e=t.readString(4),e==="M.K."||e==="FLT4"){if(this.player=Ji(this.amiga),this.player.load(t),this.player.version)return this.index=sa,this.player}else if(e==="FEST"&&(this.player=window.neoart.HMPlayer(this.amiga),this.player.load(t),this.player.version))return this.index=ua,this.player}return t.length>2105&&(t.position=1080,e=t.readString(4),(e==="M.K."||e==="M!K!")&&(this.player=tr(this.amiga),this.player.load(t),this.player.version))?(this.index=la,this.player):t.length>5220&&(this.player=window.neoart.S1Player(this.amiga),this.player.load(t),this.player.version)?(this.index=fa,this.player):(t.position=0,i=t.readUshort(),t.position=0,e=t.readString(4),(e==="COSO"||i===24576||i===24578||i===24590||i===24598)&&(this.player=window.neoart.JHPlayer(this.amiga),this.player.load(t),this.player.version)?(this.index=ca,this.player):(t.position=0,i=t.readUshort(),this.player=window.neoart.DWPlayer(this.amiga),this.player.load(t),this.player.version?(this.index=ha,this.player):(t.position=0,i=t.readUshort(),i===24576&&(this.player=window.neoart.RHPlayer(this.amiga),this.player.load(t),this.player.version)?(this.index=da,this.player):t.length>1625&&(this.player=window.neoart.STPlayer(this.amiga),this.player.load(t),this.player.version)?(this.index=na,this.player):(t.clear(),this.index=0,this.player=null))))}}});return u.amiga=si(),Object.seal(u)}var na=0,sa=4,la=9,ua=12,fa=26,ha=28,ca=30,da=32,pa=33,ir=["Unknown Format","Ultimate SoundTracker","D.O.C. SoundTracker 9","Master SoundTracker","D.O.C. SoundTracker 2.0/2.2","SoundTracker 2.3","SoundTracker 2.4","NoiseTracker 1.0","NoiseTracker 1.1","NoiseTracker 2.0","ProTracker 1.0","ProTracker 1.1/2.1","ProTracker 1.2/2.0","His Master's NoiseTracker","SoundFX 1.0/1.7","SoundFX 1.8","SoundFX 1.945","SoundFX 1.994/2.0","BP SoundMon V1","BP SoundMon V2","BP SoundMon V3","Delta Music 1.0","Delta Music 2.0","Digital Mugician","Digital Mugician 7 Voices","Future Composer 1.0/1.3","Future Composer 1.4","SidMon 1.0","SidMon 2.0","David Whittaker","FredEd","Jochen Hippel","Jochen Hippel COSO","Rob Hubbard","FastTracker II","Sk@leTracker","MadTracker 2.0","MilkyTracker","DigiBooster Pro 2.18","OpenMPT"],ma=oa(),rr=ma;var Gt=class{constructor(t={}){this.baseRawUrl="https://raw.githubusercontent.com/michioxd/keygen-music/master/",this.indexUrl=this.baseRawUrl+"index.json",this.trackList=[],this.history=[],this.maxHistory=50,this.historyCursor=-1,this.currentPlayer=null,this.isPlaying=!1,this.pollInterval=null,this._opId=0,this.onTrackChange=t.onTrackChange||(()=>{}),this.onError=t.onError||(()=>{}),this.hasFetchedIndex=!1,this.currentTrack=null}async init(){if(!this.hasFetchedIndex)try{let t=await fetch(this.indexUrl);if(!t.ok)throw new Error("Network response was not ok");let e=await t.json(),i=["xm","mod","s3m","it"];this.trackList=e.filter(n=>n.fileExtension&&i.includes(n.fileExtension.toLowerCase())),this.hasFetchedIndex=!0}catch(t){throw console.warn("Jukebox offline or failed to fetch index:",t),this.trackList=[],this.onError("NO INTERNET OR BLOCKED ... TRY AGAIN?"),t}}async playNext(t=null){let e=++this._opId;this.stop();try{if(!this.hasFetchedIndex&&(await this.init(),e!==this._opId))return;if(this.trackList.length===0){console.warn("No tracks available in Jukebox.");return}let i=null;if(t&&typeof t=="object"){let{title:n,trackTitle:l,artist:f}=t,o=this.trackList.filter(a=>{let c=!f||a.artist&&a.artist.toLowerCase()===f.toLowerCase(),h=!n||a.title&&a.title.toLowerCase()===n.toLowerCase(),r=!l||a.trackTitle&&a.trackTitle.toLowerCase()===l.toLowerCase();return c&&h&&r});o.length===0?console.warn("Jukebox: NO matches found for target object:",t):o.length>1&&console.warn(`Jukebox: ${o.length} matches found. Refine your search!`,o),i=o[0]||null}else if(t&&typeof t=="string"){let n=this.trackList.filter(l=>l.title&&l.title.toLowerCase()===t.toLowerCase());n.length===0?console.warn("Jukebox: NO matches found for target title string:",t):n.length>1&&console.warn(`Jukebox: ${n.length} matches found for title string.`,n),i=n[0]||null}if(!i&&!t&&this.historyCursor<this.history.length-1)this.historyCursor++,i=this.trackList[this.history[this.historyCursor]];else if(!i){let n=this.trackList.filter((o,a)=>!this.history.includes(a));n.length===0&&(this.history=[],this.historyCursor=-1);let l=n.length>0?n:this.trackList;i=l[Math.floor(Math.random()*l.length)];let f=this.trackList.indexOf(i);this.historyCursor<this.history.length-1&&(this.history=this.history.slice(0,this.historyCursor+1)),this.history.push(f),this.history.length>this.maxHistory&&this.history.shift(),this.historyCursor=this.history.length-1}await this._playTrack(i,e)}catch(i){console.warn("Jukebox track fetch failed:",i),this.onError("NO INTERNET OR BLOCKED ... TRY AGAIN?")}}async playPrevious(){if(this.historyCursor>0){let t=++this._opId;this.stop(),this.historyCursor--;let e=this.trackList[this.history[this.historyCursor]];try{await this._playTrack(e,t)}catch(i){console.warn("Jukebox track fetch failed:",i),this.onError("NO INTERNET OR BLOCKED ... TRY AGAIN?")}}}async _playTrack(t,e){let i=t.path.split("/").map(a=>encodeURIComponent(a)).join("/"),n=this.baseRawUrl+i,l=await fetch(n);if(!l.ok)throw new Error("Failed to fetch audio file");if(e!==this._opId)return;let f=await l.arrayBuffer();if(e!==this._opId)return;let o=null;try{o=rr.load(f)}catch(a){console.warn("Jukebox: unsupported format for track, skipping:",t.title,a.message),e===this._opId&&setTimeout(()=>this.playNext(),100);return}e===this._opId&&(this.currentPlayer=o,this.currentPlayer?(this.currentTrack=t,typeof this.currentPlayer.loopSong<"u"&&(this.currentPlayer.loopSong=1),this.currentPlayer.play(),this.isPlaying=!0,this.onTrackChange(t),this.setupCompletionPolling()):setTimeout(()=>this.playNext(),100))}setupCompletionPolling(){this.pollInterval&&clearInterval(this.pollInterval);let t=Date.now();this.pollInterval=setInterval(()=>{if(!this.currentPlayer)return this.stopPolling();let e=!1;this.currentPlayer.amiga&&this.currentPlayer.amiga.playing===!1&&(e=!0),this.currentPlayer.mixer&&this.currentPlayer.mixer.playing===!1&&(e=!0),this.currentPlayer.stopped&&(e=!0),this.currentPlayer.playing===!1&&(e=!0),e&&this.playNext()},1e3)}stopPolling(){this.pollInterval&&(clearInterval(this.pollInterval),this.pollInterval=null)}stop(){if(this.stopPolling(),this.isPlaying=!1,this.currentPlayer){try{this.currentPlayer.stop()}catch{}this.currentPlayer=null}}};var ar=`:root {
    --afx-bg-color: rgba(10, 10, 15, 0.25);
    --afx-text-color: #f0f0f0;
    --afx-accent: #ff00ff;
    --tuner-height: 100dvh;
    --afx-terms-font-size: 1rem;
    --afx-dialog-h3-size: 1.4rem;
    --afx-picker-font-size: 13px;
    --afx-btn-font-size: 15px;
    --afx-body-bg: #000;
    --afx-body-color: #fff;
    --afx-none-bg: var(--afx-bg-color, black);
}

/* --- THEME REACTIVITY --- */
/* None effect: Reactive Light/Dark switching */
html.afx-effect-none {
    --afx-body-bg: #f5f5f5;
    --afx-body-color: #000000;
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
    filter: blur(8px);
    width: 12.5% !important;
    height: 12.5% !important;
    transform: scale(8.1) !important;
    transform-origin: top left !important;
}

html,
body {
    margin: 0 !important;
    padding: 0;
    width: 100% !important;
    height: var(--tuner-height) !important;
    min-height: var(--tuner-height) !important;
    overflow: hidden !important;
    background-color: var(--afx-body-bg, #000) !important;
    color: var(--afx-body-color, #fff) !important;
    position: relative !important;
}

.card {
    margin: 0 !important;
    padding: 0;
    width: 100% !important;
    height: var(--tuner-height) !important;
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
    overflow-y: auto !important;
    -webkit-overflow-scrolling: touch !important;
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
    height: var(--tuner-height);
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
    height: var(--tuner-height);
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
.afx-dual-control-stack,
#afx-controls-stack-right {
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

/* Reveal corner controls only after agreement */
.afx-agreed-state .afx-dual-control-stack,
.afx-agreed-state #afx-controls-stack-right {
    display: flex !important;
    pointer-events: auto !important;
    position: fixed !important;
    z-index: 10001 !important;
    flex-direction: column;
    gap: 8px;
}

/* Navigation buttons (top corners) */
#afx-btn-back,
#afx-btn-skip {
    pointer-events: auto !important;
    position: fixed !important;
    z-index: 10001 !important;
}

/* Precise Pinned Positioning */
#afx-btn-back {
    top: 20px;
    left: 20px;
}

#afx-btn-skip {
    top: 20px;
    right: 20px;
}

.afx-dual-control-stack {
    bottom: 20px;
    left: 20px;
    align-items: flex-start;
    background: transparent !important;
    border: none !important;
    box-shadow: none !important;
    padding: 0 !important;
}

#afx-controls-stack-right {
    bottom: 20px;
    right: 20px;
    align-items: flex-end;
}

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

#afx-controls-stack-right .afx-effect-selector-container {
    width: auto;
    min-width: 140px;
    max-width: 280px;
}

@media (max-width: 480px) {
    .afx-dual-control-stack {
        gap: 5px;
        /* Tighter gap on mobile */
    }
}

@media (max-width: 768px) {
    #afx-btn-back {
        top: calc(10px + env(safe-area-inset-top)) !important;
        left: calc(10px + env(safe-area-inset-left)) !important;
    }

    #afx-btn-skip {
        top: calc(10px + env(safe-area-inset-top)) !important;
        right: calc(10px + env(safe-area-inset-right)) !important;
    }

    .afx-dual-control-stack {
        bottom: calc(10px + env(safe-area-inset-bottom)) !important;
        left: calc(10px + env(safe-area-inset-left)) !important;
    }

    #afx-controls-stack-right {
        bottom: calc(10px + env(safe-area-inset-bottom)) !important;
        right: calc(10px + env(safe-area-inset-right)) !important;
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
    height: 75dvh;
    max-height: 90vh;
    overflow: hidden !important;
    pointer-events: auto !important;
}


.afx-terms {
    font-family: 'Courier New', monospace;
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
#afx-effect-selector,
.afx-sub-picker,
.afx-control-row {
    font-family: 'Courier New', Courier, monospace !important;
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
    /* Disclaimer button stays slightly bigger */
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

#afx-effect-selector,
.afx-sub-picker {
    background: transparent;
    color: white;
    border: none;
    padding: 0 !important;
    margin: 0 !important;
    font-family: 'Courier New', monospace;
    font-weight: bold;
    cursor: pointer;
    outline: none;
    appearance: auto;
    width: 100%;
    height: 100%;
}

#afx-effect-selector option,
.afx-sub-picker option {
    background: #1a1a1a !important;
    color: #ffffff !important;
    padding: 12px !important;
    font-family: 'Courier New', monospace !important;
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
}`;var W=class u{static init(t={}){console.log("AnkiFX: Initialized.");let e={deckTitle:"AnkiFX Deck",deckAuthor:"Anonymous",termsText:"No terms provided.",sources:[],marquee:"ANKIFX ENGINE INITIALIZED ...",defaultEffect:"geometry",debug:!1,countdown:30,marqueePosition:"top",...window.AnkiFX_Config||{},...t};Array.isArray(e.sources)||(e.sources=[]);let i=parseInt(e.countdown,10);e.countdown=isNaN(i)?30:Math.max(0,i),e.isConfigFileError=typeof e.termsText!="string"||e.termsText.trim()===""||e.termsText==="No terms provided.";let n=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);if(document.getElementById("ankifx-overlay")&&document.getElementById("ankifx-overlay").classList.contains("afx-agreed-state")){let r=document.getElementById("qa");r&&(r.style.position="relative",r.style.zIndex="10"),this.defaultMarqueeText=e.marquee,this.marquee&&(this.marquee.setText(e.marquee),this.marquee.setPosition(e.marqueePosition));let d=document.getElementById("afx-deck-title");d&&(d.textContent=e.deckTitle);return}document.documentElement.classList.remove("afx-scroll-lock"),document.documentElement.classList.remove("afx-agreed"),["ankifx-overlay","ankifx-background","afx-btn-back","afx-btn-skip"].forEach(h=>{let r=document.getElementById(h);r&&r.remove()}),this.defaultMarqueeText=e.marquee,this.EFFECT_SONG_MAP={},Object.entries(se).forEach(([h,r])=>{r&&r.preferredTrack&&(this.EFFECT_SONG_MAP[h]=r.preferredTrack)}),this.injectCSS();let l=window.AnkiFX_Config?.defaultEffect,f;l?(f=l,localStorage.setItem("ankifx_preferred_effect",f)):f=localStorage.getItem("ankifx_preferred_effect")||e.defaultEffect||"geometry",se[f]||(console.warn(`AnkiFX: Stale or invalid activeEffect "${f}" detected. Falling back to default.`),f=e.defaultEffect||"geometry",se[f]||(f=Object.keys(se)[0]||"geometry"),localStorage.setItem("ankifx_preferred_effect",f));let{overlay:o,background:a}=this.injectUI(e,n,f);this.initTuner(e.debug,f),this._layoutHandler&&(window.removeEventListener("orientationchange",this._layoutHandler),window.removeEventListener("resize",this._layoutHandler)),this._layoutHandler=()=>{setTimeout(()=>{this.handleResize(),this.updateTuner()},50)},window.addEventListener("orientationchange",this._layoutHandler),window.addEventListener("resize",this._layoutHandler),this.handleResize(),this.marquee?(this.marquee.setText(e.marquee),this.marquee.setPosition(e.marqueePosition)):(this.marquee=new Lt(e.marquee,e.marqueePosition),this.startMarqueeLoop()),this.startEffect(e,a,e.marqueePosition,f);let c=localStorage.getItem("ankifx_marquee_enabled")!=="false";this.marquee&&(this.marquee.enabled=c),u.observer||(u.observer=new MutationObserver(()=>{setTimeout(()=>{let h=document.getElementById("qa");h&&h.querySelector(".ankifx-card")||u.destroy()},20)}),u.observer.observe(document.documentElement,{childList:!0,subtree:!0}))}static injectCSS(){if(document.getElementById("ankifx-styles"))return;let t=document.createElement("style");t.id="ankifx-styles",t.textContent=ar,document.head.appendChild(t)}static initTuner(t,e){let i=localStorage.getItem("ankifx_tuner_offset"),n=getComputedStyle(document.documentElement),l=parseInt(n.getPropertyValue("--io-header"))||0,f=i!==null?parseInt(i):-l;this.tunerOffset=f,this.tunerAutoUpdate=i===null,this.updateTuner();let o=l,a=setInterval(()=>{let c=getComputedStyle(document.documentElement),h=parseInt(c.getPropertyValue("--io-header"))||0;h!==o&&(o=h,this.tunerAutoUpdate&&(this.tunerOffset=-h),this.updateTuner())},50);setTimeout(()=>{clearInterval(a)},2e3)}static updateTuner(){let t=localStorage.getItem("ankifx_tuner_offset"),e=getComputedStyle(document.documentElement),i=parseInt(e.getPropertyValue("--io-header"))||0,l=(this.tunerOffset!==void 0?this.tunerOffset:t!==null?parseInt(t):-i)+i;if(document.documentElement.style.setProperty("--tuner-height",`calc(100dvh + ${l}px)`),this.currentEffectId&&se[this.currentEffectId]?.onResize){let f=Math.min(window.devicePixelRatio||1,1.5),o=this.currentEffectId==="mandelbrot"||this.currentEffectId==="julia"?f:this.dpr;se[this.currentEffectId].onResize(this.width,this.height,o)}}static handleResize(){let t=document.getElementById("ankifx-background");if(!t||!this.sharedGL||!this.shared2D||!this.sharedMarquee)return;let e=t.getBoundingClientRect();this.width=e.width,this.height=e.height,this.dpr=Math.min(window.devicePixelRatio||1,2);let i=Math.min(window.devicePixelRatio||1,1.5);if(this.sharedGL.width=this.width*i,this.sharedGL.height=this.height*i,this.sharedGL.style.width=this.width+"px",this.sharedGL.style.height=this.height+"px",this.shared2D.width=this.width*this.dpr,this.shared2D.height=this.height*this.dpr,this.shared2D.style.width=this.width+"px",this.shared2D.style.height=this.height+"px",this.sharedMarquee.width=this.width*this.dpr,this.sharedMarquee.height=this.height*this.dpr,this.sharedMarquee.style.width=this.width+"px",this.sharedMarquee.style.height=this.height+"px",this.glContext&&this.glContext.viewport(0,0,this.sharedGL.width,this.sharedGL.height),this.ctx2D&&(this.ctx2D.setTransform(1,0,0,1,0,0),this.ctx2D.scale(this.dpr,this.dpr)),this.ctxMarquee&&(this.ctxMarquee.setTransform(1,0,0,1,0,0),this.ctxMarquee.scale(this.dpr,this.dpr)),this.currentEffectId&&se[this.currentEffectId]?.onResize){let n=this.currentEffectId==="mandelbrot"||this.currentEffectId==="julia"?i:this.dpr;se[this.currentEffectId].onResize(this.width,this.height,n)}}static injectUI(t,e,i){let n=document.createElement("div");n.id="ankifx-overlay",t.debug&&n.classList.add("afx-debug-active");let l=window.innerWidth||document.documentElement.clientWidth||800,f=l<480?.65:l<768?.8:1,o=Math.max(55,Math.ceil(85*f));(/iPad|iPhone|iPod/.test(navigator.userAgent)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1)&&(t.marqueePosition==="top"?n.style.paddingTop=`calc(1rem + ${o}px)`:n.style.paddingBottom=`calc(1rem + ${o}px)`);let c=localStorage.getItem("ankifx_marquee_enabled")!=="false",h=se.julia?.presets||[],r=l<480,d=r?"\u{1F4DC} ":"\u{1F4DC} TEXT: ",g=r?"":" BGM: ",m=r?d.trim():c?`${d}ON`:`${d}OFF`,s=r?"\u{1F507}":`\u{1F507}${g}OFF`,v=r?"\u{1F50A}":`\u{1F50A}${g}ON`,p=`
            <div class="afx-dual-control-stack">
                <div class="afx-control-row">
                    <label class="afx-toggle"><input type="checkbox" id="afx-text-toggle" ${c?"checked":""}><span class="afx-slider"></span></label>
                    <span id="afx-text-status">${m}</span>
                </div>
                <div id="afx-bgm-container" class="afx-control-row">
                    <label class="afx-toggle"><input type="checkbox" id="afx-audio-toggle"><span class="afx-slider"></span></label>
                    <span id="afx-bgm-status">${s}</span>
                </div>
            </div>
        `,x=r?"\u{1F3A8} ":"[ Effect: ",y=r?"":" ]",b=Object.values(se).filter(C=>C.id!=="debug"||t.debug).map(C=>`

                <option value="${C.id}" ${i===C.id?"selected":""}>
                    ${x}${C.name}${y}
                </option>
            `).join(""),w=r?"\u{1F4A0} ":"[ Preset: ",E=r?"":" ]",F=h.map((C,D)=>`
            <option value="${D}">${w}${C.name}${E}</option>
        `).join(""),P=`
            <div id="afx-julia-selector-container" class="afx-control-row afx-effect-selector-container" style="padding: 0; display: ${i==="julia"?"flex":"none"};">
                <select id="afx-julia-selector" class="afx-sub-picker">
                    ${F}
                </select>
            </div>
        `,M=`
            <div id="afx-gradient-randomizer-container" class="afx-control-row afx-effect-selector-container" style="padding: 0; display: ${i==="gradient"?"flex":"none"}; border: 1px solid rgba(255, 255, 255, 0.15);">
                <button id="afx-gradient-randomize-btn" style="background: transparent; color: #fff; border: none; width: 100%; height: 100%; cursor: pointer; text-transform: uppercase; font-family: 'Courier New', Courier, monospace !important; font-size: var(--afx-picker-font-size) !important; font-weight: bold !important; padding: 0 15px; display: flex; align-items: center; justify-content: center;">
                    \u{1F3A8} RANDOMIZE
                </button>
            </div>
        `,S=`
            <div id="afx-ecg-trigger-container" class="afx-control-row afx-effect-selector-container" style="padding: 0; display: ${i==="ecg"?"flex":"none"}; border: 1px solid rgba(255, 26, 26, 0.45);">
                <button id="afx-ecg-trigger-btn" style="background: transparent; color: #ff1a1a; border: none; width: 100%; height: 100%; cursor: pointer; text-transform: uppercase; font-family: 'Courier New', Courier, monospace !important; font-size: var(--afx-picker-font-size) !important; font-weight: bold !important; padding: 0 15px; display: flex; align-items: center; justify-content: center; width: 100%;">
                    \u26A1 TRIGGER ARRHYTHMIA
                </button>
            </div>
        `,_=`
            <div id="afx-effect-selector-container" class="afx-control-row afx-effect-selector-container" style="padding: 0;">
                <select id="afx-effect-selector">
                    ${b}
                </select>
            </div>
        `,A="";t.debug&&(A=`
                <div id="afx-clear-storage-container" class="afx-control-row afx-effect-selector-container" style="padding: 0; border: 1px solid rgba(255, 85, 85, 0.4); display: ${i==="debug"?"flex":"none"};">
                    <button id="afx-debug-clear-storage" style="background: transparent; color: #ff5555; border: none; width: 100%; height: 100%; cursor: pointer; text-transform: uppercase; font-family: 'Courier New', Courier, monospace !important; font-size: var(--afx-picker-font-size) !important; font-weight: bold !important; padding: 0 10px; display: flex; align-items: center; justify-content: center; width: 100%;">
                        \u{1F9F9} CLEAR STORAGE
                    </button>
                </div>
            `);let O=`
            <div id="afx-controls-stack-right" class="afx-controls-stack">
                ${P}
                ${M}
                ${S}
                ${A}
                ${_}
            </div>
        `,z=!1;try{z=sessionStorage.getItem(`ankifx_agreed_${t.deckTitle}`)==="true"}catch{}let q=t.termsText&&t.termsText.trim()!==""&&!z,j="";if(q){let C=t.sources.map(D=>`<li>${D}</li>`).join("");j=`
                <div class="afx-dialog">
                    <div class="afx-terms">
                        <h3>${t.deckTitle}</h3>
                        ${t.deckAuthor?`<h4 style="margin: -10px 0 15px 0; opacity: 0.7; font-size: 0.9rem;">by ${t.deckAuthor}</h4>`:""}
                        <p>${t.termsText}</p>
                        ${t.sources&&t.sources.length>0?`
                            <p><strong>Sources:</strong></p>
                            <ul>${C}</ul>
                        `:""}
                    </div>
                    <div class="afx-action-row">
                        <button id="afx-consent-btn" class="afx-btn" disabled>I AGREE</button>
                    </div>
                </div>
            `}let B="";t.debug&&(B=`
                <div id="afx-global-fps" style="position: absolute; top: 10px; left: 10px; color: #0f0; font-family: monospace; font-size: 14px; font-weight: bold; text-shadow: 1px 1px 2px #000; z-index: 9999; pointer-events: none;">
                    FPS: --
                </div>
            `),n.innerHTML=j+B;let R=document.createElement("div");for(R.innerHTML=p+O;R.firstChild;)n.appendChild(R.firstChild);let N=document.createElement("div");N.id="ankifx-background",document.body.appendChild(N),this.sharedGL=document.createElement("canvas"),this.sharedGL.id="afx-shared-gl",this.sharedGL.style.cssText="position: absolute; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none;",N.appendChild(this.sharedGL),this.shared2D=document.createElement("canvas"),this.shared2D.id="afx-shared-2d",this.shared2D.style.cssText="position: absolute; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none;",N.appendChild(this.shared2D),this.sharedMarquee=document.createElement("canvas"),this.sharedMarquee.id="afx-shared-marquee",this.sharedMarquee.style.cssText="position: absolute; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; z-index: 5;",N.appendChild(this.sharedMarquee),this.glContext=this.sharedGL.getContext("webgl",{alpha:!1,antialias:!1}),this.ctx2D=this.shared2D.getContext("2d"),this.ctxMarquee=this.sharedMarquee.getContext("2d"),document.body.appendChild(n);let Y=document.createElement("button");Y.id="afx-btn-back",Y.className="afx-playback-btn",Y.textContent="\u23EE\uFE0F";let $=document.createElement("button");$.id="afx-btn-skip",$.className="afx-playback-btn",$.textContent="\u23ED\uFE0F",n.appendChild(Y),n.appendChild($);let ee=C=>{let D=n.classList.contains("afx-agreed-state"),H=C.target.closest("button, input, select, .afx-slider, .afx-toggle, .afx-playback-btn, select option");D?H&&C.stopPropagation():C.stopPropagation()};["touchstart","touchend","mousedown","mouseup","pointerdown","pointerup","click"].forEach(C=>{n.addEventListener(C,ee,{passive:!1})});let V=document.getElementById("afx-consent-btn");if(q&&V){let C=t.countdown;if((t.debug||t.isConfigFileError)&&(C=0),C>0){V.textContent=`( ${C} )`;let D=setInterval(()=>{C--,V.textContent=`( ${C} )`,C<=0&&(clearInterval(D),V.textContent="I AGREE",V.disabled=!1)},1e3)}else V.textContent="I AGREE",V.disabled=!1;V.addEventListener("click",D=>{D.stopPropagation(),V.disabled||this.agree(n,t.deckTitle)})}else this.agree(n,t.deckTitle);let k=document.getElementById("afx-audio-toggle");if(k){let C=document.getElementById("afx-bgm-status");k.checked&&n.classList.add("afx-music-playing"),u.jukebox=new Gt({onTrackChange:D=>{let H=`NOW PLAYING: ${D.artist} - ${D.title} - ${D.trackTitle}`;t.marquee=H,u.marquee&&u.marquee.setText(H)},onError:D=>{t.marquee=D,u.marquee&&u.marquee.setText(D)}}),k.addEventListener("change",D=>{if(D.target.checked){n.classList.add("afx-bgm-active"),n.classList.add("afx-music-playing"),C.innerHTML=r?"\u{1F50A}":"\u{1F50A} BGM: ON",C.style.color="#ff6b6b";let te=window.AudioContext||window.webkitAudioContext;te&&(window.neoart=window.neoart||{},window.neoart.audioContext||(window.neoart.audioContext=new te)),window.neoart.audioContext&&window.neoart.audioContext.state==="suspended"&&window.neoart.audioContext.resume();let de=localStorage.getItem("ankifx_preferred_effect")||t.defaultEffect||"geometry",Z=t.trackTitle||u.EFFECT_SONG_MAP[de]||null;u.jukebox.playNext(Z)}else n.classList.remove("afx-bgm-active"),n.classList.remove("afx-music-playing"),C.innerHTML=r?"\u{1F507}":"\u{1F507} BGM: OFF",C.style.color="#fff",u.jukebox.stop(),t.marquee=u.defaultMarqueeText,u.marquee&&u.marquee.setText(u.defaultMarqueeText)})}let I=document.getElementById("afx-text-toggle");if(I){let C=document.getElementById("afx-text-status");I.addEventListener("change",D=>{let H=D.target.checked;localStorage.setItem("ankifx_marquee_enabled",H);let te=r?"\u{1F4DC} ":"\u{1F4DC} TEXT: ";C.textContent=r?te.trim():H?`${te}ON`:`${te}OFF`,u.marquee&&(u.marquee.enabled=H)})}Y.addEventListener("click",C=>{C.stopPropagation(),u.jukebox&&u.jukebox.playPrevious()}),$.addEventListener("click",C=>{C.stopPropagation(),u.jukebox&&u.jukebox.playNext()});let U=document.getElementById("afx-effect-selector"),L=document.getElementById("afx-julia-selector-container"),X=document.getElementById("afx-julia-selector");U&&U.addEventListener("change",C=>{let D=C.target.value;localStorage.setItem("ankifx_preferred_effect",D),Object.values(se).forEach(Z=>Z.stop()),this.ctx2D&&this.ctx2D.clearRect(0,0,this.width,this.height),this.glContext&&(this.glContext.clearColor(0,0,0,0),this.glContext.clear(this.glContext.COLOR_BUFFER_BIT)),t.defaultEffect=D,L&&(L.style.display=D==="julia"?"flex":"none");let H=document.getElementById("afx-gradient-randomizer-container");H&&(H.style.display=D==="gradient"?"flex":"none");let te=document.getElementById("afx-clear-storage-container");te&&(te.style.display=D==="debug"?"flex":"none");let de=document.getElementById("afx-ecg-trigger-container");if(de&&(de.style.display=D==="ecg"?"flex":"none"),D==="debug"?n.classList.add("afx-debug-active"):n.classList.remove("afx-debug-active"),u.startEffect(t,N,t.marqueePosition,D),u.jukebox&&u.jukebox.isPlaying){let Z=t.trackTitle||u.EFFECT_SONG_MAP[D]||null,ce=u.jukebox.currentTrack,Ae=!1;Z&&(typeof Z=="string"?Ae=!ce||ce.title.toLowerCase()!==Z.toLowerCase():Ae=!ce||Z.title&&ce.title.toLowerCase()!==Z.title.toLowerCase()||Z.trackTitle&&ce.trackTitle.toLowerCase()!==Z.trackTitle.toLowerCase()||Z.artist&&(ce.artist||"").toLowerCase()!==Z.artist.toLowerCase()),Ae&&u.jukebox.playNext(Z)}}),X&&X.addEventListener("change",C=>{let D=parseInt(C.target.value),H=se.julia.presets[D];H&&(Object.assign(t,H),se.julia.stop(),this.ctx2D&&this.ctx2D.clearRect(0,0,this.width,this.height),u.startEffect(t,N,t.marqueePosition,"julia"))});let he=document.getElementById("afx-gradient-randomize-btn");he&&he.addEventListener("click",C=>{C.stopPropagation();let D=se.gradient;D&&typeof D.randomizeColors=="function"&&D.randomizeColors()});let re=document.getElementById("afx-ecg-trigger-btn");re&&(re.addEventListener("click",C=>{C.stopPropagation();let D=localStorage.getItem("ankifx_ecg_rhythm")||"sinus",H;if(D==="sinus"){let te=["first_degree","mobitz_1","mobitz_2","third_degree","st_elevation","afib","a_flutter","torsades"];H=te[Math.floor(Math.random()*te.length)]}else H="sinus";localStorage.setItem("ankifx_ecg_rhythm",H),localStorage.setItem("ankifx_ecg_trigger_time",Date.now())}),re.addEventListener("touchstart",C=>C.stopPropagation()),re.addEventListener("touchend",C=>C.stopPropagation()));let Ee=document.getElementById("afx-debug-clear-storage");return Ee&&Ee.addEventListener("click",C=>{C.stopPropagation(),confirm("Clear ALL AnkiFX local storage?")&&(localStorage.clear(),location.reload())}),{overlay:n,background:N}}static startEffect(t,e,i,n){n==="debug"?e.classList.add("afx-debug-active"):e.classList.remove("afx-debug-active");let l=se[n];if(l){let f=Math.min(window.devicePixelRatio||1,1.5),o=n==="mandelbrot"||n==="julia"?f:this.dpr,a={gl:this.glContext,ctx2d:this.ctx2D,canvasGL:this.sharedGL,canvas2D:this.shared2D,width:this.width,height:this.height,dpr:o};this.currentEffectId=n;let c=document.documentElement;Array.from(c.classList).forEach(r=>{r.startsWith("afx-effect-")&&c.classList.remove(r)}),c.classList.add(`afx-effect-${n}`),this.marquee&&this.marquee.updateStyles(l.marqueeFont||{}),l.run(a,t);let h=localStorage.getItem("ankifx_marquee_enabled")!=="false";this.marquee&&(this.marquee.enabled=h)}}static agree(t,e){if(t.classList.add("afx-agreed-state"),document.documentElement.classList.add("afx-agreed"),document.documentElement.classList.remove("afx-scroll-lock"),e)try{sessionStorage.setItem(`ankifx_agreed_${e}`,"true")}catch{}let i=document.getElementById("qa");i&&(i.style.position="relative",i.style.zIndex="10")}static destroy(){this.currentEffectId&&se[this.currentEffectId]?.stop&&se[this.currentEffectId].stop(),this.jukebox&&(this.jukebox.stop(),this.jukebox=null),this.marqueeInterval&&(cancelAnimationFrame(this.marqueeInterval),this.marqueeInterval=null),this.marquee&&(this.marquee=null),["ankifx-overlay","ankifx-background","afx-btn-back","afx-btn-skip"].forEach(i=>{let n=document.getElementById(i);n&&n.remove()});let t=document.getElementById("ankifx-styles");t&&t.remove(),document.documentElement.style.removeProperty("--tuner-height");let e=document.getElementById("qa");e&&(e.style.position="",e.style.zIndex=""),document.documentElement.classList.remove("afx-scroll-lock"),document.documentElement.classList.remove("afx-agreed"),Array.from(document.documentElement.classList).forEach(i=>{i.startsWith("afx-effect-")&&document.documentElement.classList.remove(i)}),window.AnkiFX_Config=null,this.observer&&(this.observer.disconnect(),this.observer=null),console.log("AnkiFX: Destroyed.")}static startMarqueeLoop(){if(this.marqueeInterval)return;let t=0,e=0,i=n=>{if(n===void 0&&(n=performance.now()),t||(t=n),e++,n-t>=1e3){let l=document.getElementById("afx-global-fps");l&&(l.textContent=`FPS: ${e} | Engine DPR: ${this.dpr}`),e=0,t=n}this.marquee&&this.ctxMarquee&&(this.ctxMarquee.clearRect(0,0,this.width,this.height),this.marquee.render(this.ctxMarquee,this.width,this.height)),this.marqueeInterval=requestAnimationFrame(i)};this.marqueeInterval=requestAnimationFrame(i)}};W.marquee=null;W.jukebox=null;W.defaultMarqueeText=null;W.sharedGL=null;W.shared2D=null;W.sharedMarquee=null;W.glContext=null;W.ctx2D=null;W.ctxMarquee=null;W.currentEffectId=null;W.dpr=1;W.width=0;W.height=0;W.marqueeInterval=null;W._layoutHandler=null;W.observer=null;var Vt="local";try{let u=typeof __ankifx_script_src=="string"?__ankifx_script_src:"";if(!u){let e=(new Error().stack||"").match(/(https?:\/\/[^\s)\n:]+|file:\/\/[^\s)\n:]+)/g);if(e&&e.length>0){for(let i=0;i<e.length;i++)if(e[i].includes("ankifx")){u=e[i];break}}}u&&(u.includes("cdn.jsdelivr.net")||u.includes("github")||u.includes("rawgit")||u.includes("githack")?Vt="remote":Vt="local")}catch{Vt="detection-failed"}W.version="1.0.0-542f319";W.buildDate="5/31/2026, 11:58:04 PM";W.source=Vt;window.AnkiFX_Eval_History=window.AnkiFX_Eval_History||[];var or=window.AnkiFX&&window.AnkiFX.source==="remote"&&W.source==="local";window.AnkiFX_Eval_History.push({source:W.source,version:W.version,buildDate:W.buildDate,time:new Date().toLocaleTimeString(),status:or?"ignored (late local)":"active"});or?console.warn(`[AnkiFX Loader] Late local engine evaluation ignored. A remote engine (Version: ${window.AnkiFX.version}) is already active.`):window.AnkiFX=W;})();
