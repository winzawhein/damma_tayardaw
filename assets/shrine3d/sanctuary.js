/* Gawdama sanctuary: independently composed scene; supplied Buddha artwork retained. */
(() => {
  'use strict';
  const T = window.SanctuaryTHREE;
  const post = data => { if(window.ShrineBridge) window.ShrineBridge.postMessage(JSON.stringify(data)); };
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const scene = new T.Scene(); scene.background = new T.Color('#091b1b'); scene.fog = new T.FogExp2('#091b1b', .065);
  const renderer = new T.WebGLRenderer({antialias:true,alpha:false,powerPreference:'low-power'});
  renderer.setPixelRatio(Math.min(devicePixelRatio || 1,1.5));
  renderer.outputColorSpace=T.SRGBColorSpace; renderer.toneMapping=T.ACESFilmicToneMapping; renderer.toneMappingExposure=1.25;
  document.body.prepend(renderer.domElement);
  const camera=new T.PerspectiveCamera(40,1,.1,50);
  const gold=new T.MeshStandardMaterial({color:'#bca16d',metalness:.72,roughness:.3});
  const jade=new T.MeshStandardMaterial({color:'#173d36',metalness:.3,roughness:.28});
  const stone=new T.MeshStandardMaterial({color:'#102c28',metalness:.15,roughness:.42});
  scene.add(new T.HemisphereLight('#fff0d4','#16372f',2));
  const key=new T.DirectionalLight('#ffdfa6',3);key.position.set(-3,5,4);scene.add(key);
  const rim=new T.PointLight('#89ceb3',9,12);rim.position.set(2,3,-2);scene.add(rim);
  function mesh(geometry,material,x,y,z){const m=new T.Mesh(geometry,material);m.position.set(x,y,z);scene.add(m);return m;}
  function cylinder(radius,height,y,material){return mesh(new T.CylinderGeometry(radius,radius*1.035,height,80),material,0,y,0);}
  mesh(new T.PlaneGeometry(80,80),stone,0,-.09,0).rotation.x=-Math.PI/2;
  cylinder(1.42,.18,0,jade);cylinder(1.33,.035,.11,gold);cylinder(1.2,.16,.2,stone);cylinder(1.21,.025,.29,gold);
  cylinder(.82,.22,.39,jade);cylinder(.83,.018,.51,gold);
  // Architectural rings stand behind the figure, not a textured temple facade.
  const rings=new T.Group();scene.add(rings);rings.position.set(0,1.86,-.52);
  for(const [r,t] of [[1.13,.012],[1.22,.006],[1.34,.004]]){const m=new T.Mesh(new T.TorusGeometry(r,t,8,128),gold);rings.add(m);}
  const halo=mesh(new T.CircleGeometry(1.1,80),new T.MeshBasicMaterial({color:'#b9944e',transparent:true,opacity:.065,depthWrite:false}),0,1.86,-.54);
  for(let i=0;i<28;i++){const a=i/28*Math.PI*2;const dot=mesh(new T.SphereGeometry(.015,6,6),gold,Math.cos(a)*1.34,1.86+Math.sin(a)*1.34,-.52);dot.userData.angle=a;}
  const textureLoader=new T.TextureLoader();
  const readyTexture=textureLoader.loadAsync('img/buddha.webp').then(texture=>{
    texture.colorSpace=T.SRGBColorSpace;
    mesh(new T.PlaneGeometry(1.48,2.22),new T.MeshBasicMaterial({map:texture,transparent:true,alphaTest:.06,side:T.DoubleSide}),0,1.64,.08);
  });
  const offerings={water:false,flowers:false,candle:false};
  const groups={};const flames=[];
  function groupAt(x,z){const g=new T.Group();g.position.set(x,.32,z);scene.add(g);return g;}
  function add(g,geo,mat,x,y,z){const m=new T.Mesh(geo,mat);m.position.set(x,y,z);g.add(m);return m;}
  groups.water=groupAt(-.72,.7);
  add(groups.water,new T.CylinderGeometry(.18,.1,.15,40),gold,0,.08,0);
  const water=add(groups.water,new T.CircleGeometry(.16,40),new T.MeshStandardMaterial({color:'#82ccc4',metalness:.65,roughness:.12,transparent:true,opacity:.8}),0,.16,0);water.rotation.x=-Math.PI/2;
  groups.flowers=groupAt(0,.93);
  add(groups.flowers,new T.CylinderGeometry(.2,.16,.065,40),gold,0,.04,0);
  for(let i=0;i<9;i++){const a=i/9*Math.PI*2;const petal=add(groups.flowers,new T.SphereGeometry(.10,16,12),new T.MeshStandardMaterial({color:i%2?'#f2dfca':'#caa797',roughness:.7}),Math.cos(a)*.13,.13,Math.sin(a)*.13);petal.scale.set(.65,.6,1.4);petal.rotation.y=-a;}
  add(groups.flowers,new T.SphereGeometry(.07,16,12),gold,0,.16,0);
  groups.candle=groupAt(.72,.7);
  add(groups.candle,new T.CylinderGeometry(.16,.11,.07,40),gold,0,.04,0);
  add(groups.candle,new T.CylinderGeometry(.075,.08,.18,24),new T.MeshStandardMaterial({color:'#e4d9b8'}),0,.15,0);
  const flame=add(groups.candle,new T.SphereGeometry(.045,12,12),new T.MeshBasicMaterial({color:'#ffcf6c',transparent:true,opacity:.95}),0,.29,0);flame.scale.y=2;flames.push(flame);
  const fire=new T.PointLight('#ffc362',0,2);fire.position.set(.72,.67,.7);scene.add(fire);
  for(const g of Object.values(groups))g.visible=false;
  const particles=new Float32Array(65*3);for(let i=0;i<65;i++){particles[i*3]=(Math.random()-.5)*7;particles[i*3+1]=Math.random()*5;particles[i*3+2]=(Math.random()-.5)*5;}
  const geo=new T.BufferGeometry();geo.setAttribute('position',new T.BufferAttribute(particles,3));
  const dust=new T.Points(geo,new T.PointsMaterial({color:'#d4bd80',size:.014,transparent:true,opacity:.45,depthWrite:false}));scene.add(dust);
  let hostPaused=false,paused=false,muted=false,aura='six',frame=null,last=0,elapsed=0,yaw=0,targetYaw=0,pointer=null,ritual=null;
  let sound=null;
  const message=document.getElementById('message');let messageUntil=0;
  function say(text){message.textContent=text;message.classList.add('visible');messageUntil=elapsed+3.8;}
  function play(name){if(muted)return;if(sound){sound.pause();}sound=new Audio(`audio/${name}.m4a`);sound.volume=.65;sound.play().catch(()=>{});}
  function finish(){if(!ritual)return;const k=ritual.kind;ritual=null;post({type:'ritual_end',kind:k});if(k==='gong')post({type:'merit'});else post({type:'offered',kind:k});}
  function offer(kind){if(!Object.hasOwn(offerings,kind)||ritual)return;if(offerings[kind]){post({type:'offer_again',kind});return;}
    offerings[kind]=true;groups[kind].visible=true;ritual={kind,start:elapsed};targetYaw=0;
    post({type:'ritual_start',kind});play(kind==='candle'?'match':kind);
    say({water:'ရေချမ်း ကပ်လှူပူဇော်ပါ၏',flowers:'ပန်း ကပ်လှူပူဇော်ပါ၏',candle:'ဆီမီး ကပ်လှူပူဇော်ပါ၏'}[kind]);
  }
  function resize(){const w=innerWidth,h=innerHeight;renderer.setSize(w,h);camera.aspect=w/h;camera.updateProjectionMatrix();}
  function render(now){frame=null;if(paused)return;const dt=last?Math.min((now-last)/1000,.05):0;last=now;elapsed+=dt;
    yaw+=(targetYaw-yaw)*(1-Math.exp(-dt*3));
    const distance=Math.max(5.7,3.65/camera.aspect);
    camera.position.set(Math.sin(yaw)*distance,2.25,Math.cos(yaw)*distance);camera.lookAt(0,1.45,0);
    halo.visible=aura!=='off';rings.visible=aura!=='off';halo.material.opacity=.055+(reduced?0:Math.sin(elapsed*.7)*.02);
    if(!reduced){dust.rotation.y=elapsed*.018;flame.scale.y=2+Math.sin(elapsed*7)*.16;}
    fire.intensity=offerings.candle?1.4+(reduced?0:Math.sin(elapsed*5)*.15):0;
    if(ritual){const p=Math.min(1,(elapsed-ritual.start)/2.8);if(groups[ritual.kind]){const g=groups[ritual.kind];const s=reduced?1:1-Math.pow(1-p,3);g.scale.setScalar(Math.max(.001,s));}if(p===1)finish();}
    if(elapsed>messageUntil)message.classList.remove('visible');
    renderer.render(scene,camera);frame=requestAnimationFrame(render);
  }
  function pause(){paused=true;cancelAnimationFrame(frame);frame=null;last=0;if(sound)sound.pause();}
  function resume(){if(!paused&&frame!==null)return;paused=false;last=0;frame=requestAnimationFrame(render);}
  window.shrine={
    setState(state){for(const k of Object.keys(offerings)){if(state.offerings&&typeof state.offerings[k]==='boolean'){offerings[k]=state.offerings[k];groups[k].visible=offerings[k];if(!ritual)groups[k].scale.setScalar(1);}}if('muted'in state)window.shrine.setMuted(state.muted);if('aura'in state){aura=state.aura;halo.material.color.set(aura==='gold'?'#bd944e':'#94bbaa');}if('showLabels'in state)document.getElementById('hint').hidden=!state.showLabels;},
    pause(){hostPaused=true;pause();},resume(){hostPaused=false;if(!document.hidden)resume();},offer,setMuted(value){muted=!!value;if(muted&&sound)sound.pause();},
    strikeGong(){if(ritual)return;ritual={kind:'gong',start:elapsed};post({type:'ritual_start',kind:'gong'});play('gong');say('အမျှ အမျှ အမျှ • သာဓု သာဓု သာဓု');},
    goBay(index){targetYaw=[-.28,0,.28][index]||0;},unlockAudio(){},zoomOut(){targetYaw=0;}
  };
  renderer.domElement.addEventListener('pointerdown',e=>{pointer={x:e.clientX,yaw:targetYaw};renderer.domElement.setPointerCapture(e.pointerId);});
  renderer.domElement.addEventListener('pointermove',e=>{if(pointer&&!ritual)targetYaw=Math.max(-.32,Math.min(.32,pointer.yaw+(e.clientX-pointer.x)*.002));});
  for(const name of ['pointerup','pointercancel'])renderer.domElement.addEventListener(name,()=>pointer=null);
  renderer.domElement.addEventListener('webglcontextlost',e=>{e.preventDefault();pause();post({type:'error',fatal:true,message:'webgl_context_lost'});});
  document.addEventListener('visibilitychange',()=>document.hidden||hostPaused?pause():resume());
  window.addEventListener('resize',resize);resize();
  readyTexture.then(()=>{resume();post({type:'ready'});}).catch(()=>post({type:'error',fatal:true,message:'buddha_texture_failed'}));
})();
