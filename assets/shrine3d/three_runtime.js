(()=>{var F4=Object.defineProperty;var O4=(n,t)=>{for(var e in t)F4(n,e,{get:t[e],enumerable:!0})};var gc=typeof CanvasRenderingContext2D!="undefined"?CanvasRenderingContext2D.prototype:null;if(gc&&!gc.__ink){gc.__ink=!0;let n=Object.getOwnPropertyDescriptor(gc,"font"),t=c=>{let u=String(c).trim(),h=u.match(/^((?:(?:italic|oblique|normal|small-caps|bold|bolder|lighter|[1-9]00|condensed|expanded|semi-condensed|semi-expanded)\s+)*)(\d+(?:\.\d+)?(?:px|pt|em|rem|%)(?:\/\S+)?\s+.+)$/i);if(!h)return u;let d=h[1].trim()?h[1].trim().split(/\s+/):[],g=d.some(w=>/^[89]00$/.test(w));return`${d.filter(w=>!/^(normal|bold|bolder|lighter|[1-9]00)$/i.test(w)).join(" ")} ${g?d.find(w=>/^[89]00$/.test(w)):"700"} ${h[2]}`.trim()},e=c=>!!(c.canvas&&c.canvas.dataset&&c.canvas.dataset.ink==="fine");n&&n.set&&Object.defineProperty(gc,"font",{configurable:!0,enumerable:n.enumerable,get(){return n.get.call(this)},set(c){n.set.call(this,e(this)?c:t(c))}});let o=new Map,i=c=>{if(o.has(c))return o.get(c);let u,h,d,g=1,v=/^#([0-9a-f]{6})$/i.exec(c);if(v){let m=parseInt(v[1],16);u=m>>16,h=m>>8&255,d=m&255}else if(v=/^rgba?\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*(?:,\s*([\d.]+)\s*)?\)$/i.exec(c))u=+v[1],h=+v[2],d=+v[3],v[4]!=null&&(g=+v[4]);else return o.set(c,null),null;let x=(.2126*u+.7152*h+.0722*d)/255<.5?g>=1?"#000000":`rgba(0,0,0,${g})`:null;return o.size<512&&o.set(c,x),x},s=gc.fillText,r=["font","textAlign","textBaseline","direction","letterSpacing","wordSpacing","fontKerning","fontStretch","fontVariantCaps","textRendering"],a=null,l=(c,u,h,d,g)=>{let v=c.canvas;if(!v||!c.getTransform||typeof document=="undefined")return!1;a||(a=document.createElement("canvas")),(a.width!==v.width||a.height!==v.height)&&(a.width=v.width,a.height=v.height),v.dataset&&v.dataset.ink?a.dataset.ink=v.dataset.ink:delete a.dataset.ink;let w=a.getContext("2d");w.setTransform(1,0,0,1,0,0),w.globalCompositeOperation="source-over",w.globalAlpha=1,w.shadowColor="rgba(0,0,0,0)",w.clearRect(0,0,a.width,a.height),w.setTransform(c.getTransform());for(let x of r)x in c&&x in w&&(w[x]=c[x]);return w.fillStyle="#ffffff",g===void 0?s.call(w,u,h,d):s.call(w,u,h,d,g),w.globalCompositeOperation="source-in",w.fillStyle=c.fillStyle,w.fillRect(-1e5,-1e5,2e5,2e5),c.save(),c.setTransform(1,0,0,1,0,0),c.drawImage(a,0,0),c.restore(),!0};gc.fillText=function(c,u,h,d){let g=this.fillStyle;if(typeof g!="string"&&l(this,c,u,h,d))return;let v=typeof g=="string"&&!e(this)?i(g):null;v&&(this.fillStyle=v),d===void 0?s.call(this,c,u,h):s.call(this,c,u,h,d),v&&(this.fillStyle=g)}}var M={};O4(M,{ACESFilmicToneMapping:()=>Lf,AddEquation:()=>Gl,AddOperation:()=>gx,AdditiveAnimationBlendMode:()=>Og,AdditiveBlending:()=>Mg,AgXToneMapping:()=>Rg,AlphaFormat:()=>Ng,AlwaysCompare:()=>Lx,AlwaysDepth:()=>rd,AlwaysStencilFunc:()=>Ax,AmbientLight:()=>cp,AnimationAction:()=>bp,AnimationClip:()=>Nl,AnimationLoader:()=>k2,AnimationMixer:()=>X2,AnimationObjectGroup:()=>H2,AnimationUtils:()=>L2,ArcCurve:()=>Id,ArrayCamera:()=>gp,ArrowHelper:()=>pg,AttachedBindMode:()=>h2,Audio:()=>vp,AudioAnalyser:()=>W2,AudioContext:()=>Rf,AudioListener:()=>z2,AudioLoader:()=>O2,AxesHelper:()=>mg,BackSide:()=>Xs,BasicDepthPacking:()=>_x,BasicShadowMap:()=>Z3,BatchedMesh:()=>Sd,BezierInterpolant:()=>op,Bone:()=>lf,BooleanKeyframeTrack:()=>c0,Box2:()=>Mp,Box3:()=>ys,Box3Helper:()=>hg,BoxGeometry:()=>ia,BoxHelper:()=>fg,BufferAttribute:()=>si,BufferGeometry:()=>_o,BufferGeometryLoader:()=>pp,ByteType:()=>kg,Cache:()=>Da,Camera:()=>Xc,CameraHelper:()=>ug,CanvasTexture:()=>Fc,CapsuleGeometry:()=>Cd,CatmullRomCurve3:()=>Ld,CineonToneMapping:()=>Eg,CircleGeometry:()=>Ed,ClampToEdgeWrapping:()=>sr,Clock:()=>K2,Color:()=>In,ColorKeyframeTrack:()=>_f,ColorManagement:()=>jo,Compatibility:()=>kS,CompressedArrayTexture:()=>E2,CompressedCubeTexture:()=>P2,CompressedTexture:()=>Nc,CompressedTextureLoader:()=>D2,ConeGeometry:()=>hf,ConstantAlphaFactor:()=>dx,ConstantColorFactor:()=>fx,Controls:()=>yg,CubeCamera:()=>mp,CubeDepthTexture:()=>Ad,CubeReflectionMapping:()=>Oa,CubeRefractionMapping:()=>Z0,CubeTexture:()=>kl,CubeTextureLoader:()=>B2,CubeUVReflectionMapping:()=>Yc,CubicBezierCurve:()=>df,CubicBezierCurve3:()=>kd,CubicInterpolant:()=>ep,CullFaceBack:()=>bg,CullFaceFront:()=>Zv,CullFaceFrontBack:()=>Y3,CullFaceNone:()=>Yv,Curve:()=>Tr,CurvePath:()=>Bd,CustomBlending:()=>jv,CustomToneMapping:()=>Pg,CylinderGeometry:()=>ff,Cylindrical:()=>tg,Data3DTexture:()=>kc,DataArrayTexture:()=>Lc,DataTexture:()=>rr,DataTextureLoader:()=>U2,DataUtils:()=>y2,DecrementStencilOp:()=>uS,DecrementWrapStencilOp:()=>hS,DefaultLoadingManager:()=>Fx,DepthFormat:()=>Ba,DepthStencilFormat:()=>J0,DepthTexture:()=>V0,DetachedBindMode:()=>yx,DirectionalLight:()=>lp,DirectionalLightHelper:()=>cg,DiscreteInterpolant:()=>np,DodecahedronGeometry:()=>Pd,DoubleSide:()=>zr,DstAlphaFactor:()=>rx,DstColorFactor:()=>lx,DynamicCopyUsage:()=>CS,DynamicDrawUsage:()=>MS,DynamicReadUsage:()=>_S,EdgesGeometry:()=>Rd,EllipseCurve:()=>Oc,EqualCompare:()=>Px,EqualDepth:()=>ld,EqualStencilFunc:()=>gS,EquirectangularReflectionMapping:()=>kf,EquirectangularRefractionMapping:()=>Df,Euler:()=>oa,EventDispatcher:()=>_r,ExternalTexture:()=>uf,ExtrudeGeometry:()=>Od,FileLoader:()=>sa,Float16BufferAttribute:()=>w2,Float32BufferAttribute:()=>zn,FloatType:()=>Ws,Fog:()=>md,FogExp2:()=>pd,FramebufferTexture:()=>C2,FrontSide:()=>Y0,Frustum:()=>l0,FrustumArray:()=>Md,GLBufferAttribute:()=>J2,GLSL1:()=>PS,GLSL3:()=>zg,GreaterCompare:()=>Rx,GreaterDepth:()=>ud,GreaterEqualCompare:()=>am,GreaterEqualDepth:()=>cd,GreaterEqualStencilFunc:()=>bS,GreaterStencilFunc:()=>vS,GridHelper:()=>ag,Group:()=>ea,HTMLTexture:()=>R2,HalfFloatType:()=>aa,HemisphereLight:()=>sp,HemisphereLightHelper:()=>rg,IcosahedronGeometry:()=>Gd,ImageBitmapLoader:()=>F2,ImageLoader:()=>Fl,ImageUtils:()=>dd,IncrementStencilOp:()=>cS,IncrementWrapStencilOp:()=>fS,InstancedBufferAttribute:()=>a0,InstancedBufferGeometry:()=>dp,InstancedInterleavedBuffer:()=>Z2,InstancedMesh:()=>bd,Int16BufferAttribute:()=>M2,Int32BufferAttribute:()=>S2,Int8BufferAttribute:()=>v2,IntType:()=>wp,InterleavedBuffer:()=>Ll,InterleavedBufferAttribute:()=>G0,Interpolant:()=>$0,InterpolateBezier:()=>d2,InterpolateDiscrete:()=>ju,InterpolateLinear:()=>hd,InterpolateSmooth:()=>Qh,InterpolationSamplingMode:()=>LS,InterpolationSamplingType:()=>IS,InvertStencilOp:()=>dS,KeepStencilOp:()=>td,KeyframeTrack:()=>lr,LOD:()=>yd,LatheGeometry:()=>zc,Layers:()=>Dc,LessCompare:()=>Ex,LessDepth:()=>ad,LessEqualCompare:()=>rm,LessEqualDepth:()=>Rc,LessEqualStencilFunc:()=>yS,LessStencilFunc:()=>mS,Light:()=>Na,LightProbe:()=>fp,LightShadow:()=>Hc,Line:()=>Ua,Line3:()=>ng,LineBasicMaterial:()=>Rs,LineCurve:()=>pf,LineCurve3:()=>Dd,LineDashedMaterial:()=>tp,LineLoop:()=>wd,LineSegments:()=>Gr,LinearFilter:()=>Si,LinearInterpolant:()=>wf,LinearMipMapLinearFilter:()=>tS,LinearMipMapNearestFilter:()=>Q3,LinearMipmapLinearFilter:()=>Ga,LinearMipmapNearestFilter:()=>Bf,LinearSRGBColorSpace:()=>Qu,LinearToneMapping:()=>Ag,LinearTransfer:()=>tf,Loader:()=>Ds,LoaderUtils:()=>Pf,LoadingManager:()=>Af,LoopOnce:()=>vx,LoopPingPong:()=>bx,LoopRepeat:()=>xx,MOUSE:()=>q3,Material:()=>fs,MaterialBlending:()=>J3,MaterialLoader:()=>hp,MathUtils:()=>Wf,Matrix2:()=>eg,Matrix3:()=>Lo,Matrix4:()=>Ao,MaxEquation:()=>ex,Mesh:()=>yi,MeshBasicMaterial:()=>Or,MeshDepthMaterial:()=>Ul,MeshDistanceMaterial:()=>Sf,MeshLambertMaterial:()=>Kd,MeshMatcapMaterial:()=>Qd,MeshNormalMaterial:()=>jd,MeshPhongMaterial:()=>Zd,MeshPhysicalMaterial:()=>q0,MeshStandardMaterial:()=>X0,MeshToonMaterial:()=>Jd,MinEquation:()=>tx,MirroredRepeatWrapping:()=>Pl,MixOperation:()=>mx,MultiplyBlending:()=>wg,MultiplyOperation:()=>If,NearestFilter:()=>qi,NearestMipMapLinearFilter:()=>K3,NearestMipMapNearestFilter:()=>j3,NearestMipmapLinearFilter:()=>Zc,NearestMipmapNearestFilter:()=>Lg,NeutralToneMapping:()=>Ig,NeverCompare:()=>Cx,NeverDepth:()=>sd,NeverStencilFunc:()=>pS,NoBlending:()=>Fa,NoColorSpace:()=>la,NoNormalPacking:()=>iS,NoToneMapping:()=>ra,NormalAnimationBlendMode:()=>sm,NormalBlending:()=>$c,NormalGAPacking:()=>rS,NormalRGPacking:()=>sS,NotEqualCompare:()=>Ix,NotEqualDepth:()=>fd,NotEqualStencilFunc:()=>xS,NumberKeyframeTrack:()=>Vc,Object3D:()=>ri,ObjectLoader:()=>N2,ObjectSpaceNormalMap:()=>Tx,OctahedronGeometry:()=>xf,OneFactor:()=>ox,OneMinusConstantAlphaFactor:()=>px,OneMinusConstantColorFactor:()=>hx,OneMinusDstAlphaFactor:()=>ax,OneMinusDstColorFactor:()=>cx,OneMinusSrcAlphaFactor:()=>Tg,OneMinusSrcColorFactor:()=>sx,OrthographicCamera:()=>f0,PCFShadowMap:()=>Ol,PCFSoftShadowMap:()=>Jv,PMREMGenerator:()=>hm,Path:()=>Dl,PerspectiveCamera:()=>Xi,Plane:()=>Qr,PlaneGeometry:()=>H0,PlaneHelper:()=>dg,PointLight:()=>ap,PointLightHelper:()=>sg,Points:()=>_d,PointsMaterial:()=>cf,PolarGridHelper:()=>lg,PolyhedronGeometry:()=>W0,PositionalAudio:()=>V2,PropertyBinding:()=>pi,PropertyMixer:()=>xp,QuadraticBezierCurve:()=>mf,QuadraticBezierCurve3:()=>gf,Quaternion:()=>Ps,QuaternionKeyframeTrack:()=>Wc,QuaternionLinearInterpolant:()=>ip,R11_EAC_Format:()=>Up,RED_GREEN_RGTC2_Format:()=>Vf,RED_RGTC1_Format:()=>nm,REVISION:()=>$v,RG11_EAC_Format:()=>zf,RGBADepthPacking:()=>Gg,RGBAFormat:()=>Hs,RGBAIntegerFormat:()=>Ep,RGBA_ASTC_10x10_Format:()=>Jp,RGBA_ASTC_10x5_Format:()=>$p,RGBA_ASTC_10x6_Format:()=>Yp,RGBA_ASTC_10x8_Format:()=>Zp,RGBA_ASTC_12x10_Format:()=>jp,RGBA_ASTC_12x12_Format:()=>Kp,RGBA_ASTC_4x4_Format:()=>Op,RGBA_ASTC_5x4_Format:()=>Gp,RGBA_ASTC_5x5_Format:()=>zp,RGBA_ASTC_6x5_Format:()=>Vp,RGBA_ASTC_6x6_Format:()=>Wp,RGBA_ASTC_8x5_Format:()=>Hp,RGBA_ASTC_8x6_Format:()=>Xp,RGBA_ASTC_8x8_Format:()=>qp,RGBA_BPTC_Format:()=>Qp,RGBA_ETC2_EAC_Format:()=>Bp,RGBA_PVRTC_2BPPV1_Format:()=>Lp,RGBA_PVRTC_4BPPV1_Format:()=>Ip,RGBA_S3TC_DXT1_Format:()=>Ff,RGBA_S3TC_DXT3_Format:()=>Of,RGBA_S3TC_DXT5_Format:()=>Gf,RGBDepthPacking:()=>nS,RGBFormat:()=>Fg,RGBIntegerFormat:()=>eS,RGB_BPTC_SIGNED_Format:()=>tm,RGB_BPTC_UNSIGNED_Format:()=>em,RGB_ETC1_Format:()=>kp,RGB_ETC2_Format:()=>Dp,RGB_PVRTC_2BPPV1_Format:()=>Rp,RGB_PVRTC_4BPPV1_Format:()=>Pp,RGB_S3TC_DXT1_Format:()=>Nf,RGDepthPacking:()=>oS,RGFormat:()=>j0,RGIntegerFormat:()=>Cp,RawShaderMaterial:()=>Mf,Ray:()=>z0,Raycaster:()=>j2,RectAreaLight:()=>up,RedFormat:()=>Ap,RedIntegerFormat:()=>Uf,ReinhardToneMapping:()=>Cg,RenderObjectRefreshType:()=>DS,RenderTarget:()=>of,RenderTarget3D:()=>q2,RepeatWrapping:()=>El,ReplaceStencilOp:()=>lS,ReverseSubtractEquation:()=>Qv,RingGeometry:()=>zd,SIGNED_R11_EAC_Format:()=>Np,SIGNED_RED_GREEN_RGTC2_Format:()=>im,SIGNED_RED_RGTC1_Format:()=>om,SIGNED_RG11_EAC_Format:()=>Fp,SRGBColorSpace:()=>Ki,SRGBTransfer:()=>ci,Scene:()=>Uc,ShaderChunk:()=>No,ShaderLib:()=>za,ShaderMaterial:()=>ar,ShadowMaterial:()=>Yd,Shape:()=>Bl,ShapeGeometry:()=>Vd,ShapePath:()=>gg,ShapeUtils:()=>na,ShortType:()=>Dg,Skeleton:()=>xd,SkeletonHelper:()=>ig,SkinnedMesh:()=>vd,Source:()=>p2,Sphere:()=>us,SphereGeometry:()=>bf,Spherical:()=>Q2,SphericalHarmonics3:()=>Ef,SplineCurve:()=>yf,SpotLight:()=>rp,SpotLightHelper:()=>og,Sprite:()=>gd,SpriteMaterial:()=>af,SrcAlphaFactor:()=>_g,SrcAlphaSaturateFactor:()=>ux,SrcColorFactor:()=>ix,StaticCopyUsage:()=>AS,StaticDrawUsage:()=>lm,StaticReadUsage:()=>wS,StereoCamera:()=>G2,StreamCopyUsage:()=>ES,StreamDrawUsage:()=>SS,StreamReadUsage:()=>TS,StringKeyframeTrack:()=>u0,SubtractEquation:()=>Kv,SubtractiveBlending:()=>Sg,TOUCH:()=>$3,TangentSpaceNormalMap:()=>h0,TetrahedronGeometry:()=>Wd,Texture:()=>$i,TextureLoader:()=>Cf,TextureSource:()=>ta,TextureUtils:()=>vg,Timer:()=>yp,TimestampQuery:()=>RS,TorusGeometry:()=>Hd,TorusKnotGeometry:()=>Xd,Triangle:()=>ka,TriangleFanDrawMode:()=>wx,TriangleStripDrawMode:()=>Sx,TrianglesDrawMode:()=>Mx,TubeGeometry:()=>qd,UVMapping:()=>Sp,Uint16BufferAttribute:()=>sf,Uint32BufferAttribute:()=>rf,Uint8BufferAttribute:()=>x2,Uint8ClampedBufferAttribute:()=>b2,Uniform:()=>$2,UniformsGroup:()=>Y2,UniformsLib:()=>Fn,UniformsUtils:()=>Nx,UnsignedByteType:()=>cr,UnsignedInt101111Type:()=>Ug,UnsignedInt248Type:()=>jc,UnsignedInt5999Type:()=>Bg,UnsignedIntType:()=>Vr,UnsignedShort4444Type:()=>_p,UnsignedShort5551Type:()=>Tp,UnsignedShortType:()=>Jc,VSMShadowMap:()=>qc,Vector2:()=>ln,Vector3:()=>Wt,Vector4:()=>mi,VectorKeyframeTrack:()=>Tf,VideoFrameTexture:()=>A2,VideoTexture:()=>Td,WebGL3DRenderTarget:()=>g2,WebGLArrayRenderTarget:()=>m2,WebGLCoordinateSystem:()=>wr,WebGLCubeRenderTarget:()=>dm,WebGLRenderTarget:()=>ks,WebGLRenderer:()=>pm,WebGLUtils:()=>_5,WebGPUCoordinateSystem:()=>Rl,WebXRController:()=>Bc,WireframeGeometry:()=>$d,WrapAroundEnding:()=>Ku,ZeroCurvatureEnding:()=>Al,ZeroFactor:()=>nx,ZeroSlopeEnding:()=>Cl,ZeroStencilOp:()=>aS,createCanvasElement:()=>kx,error:()=>io,getConsoleFunction:()=>NS,log:()=>nf,setConsoleFunction:()=>US,warn:()=>Dn,warnOnce:()=>r0});var $v="186",q3={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},$3={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Yv=0,bg=1,Zv=2,Y3=3,Z3=0,Ol=1,Jv=2,qc=3,Y0=0,Xs=1,zr=2,Fa=0,$c=1,Mg=2,Sg=3,wg=4,jv=5,J3=6,Gl=100,Kv=101,Qv=102,tx=103,ex=104,nx=200,ox=201,ix=202,sx=203,_g=204,Tg=205,rx=206,ax=207,lx=208,cx=209,ux=210,fx=211,hx=212,dx=213,px=214,sd=0,rd=1,ad=2,Rc=3,ld=4,cd=5,ud=6,fd=7,If=0,mx=1,gx=2,ra=0,Ag=1,Cg=2,Eg=3,Lf=4,Pg=5,Rg=6,Ig=7,h2="attached",yx="detached",Sp=300,Oa=301,Z0=302,kf=303,Df=304,Yc=306,El=1e3,sr=1001,Pl=1002,qi=1003,Lg=1004,j3=1004,Zc=1005,K3=1005,Si=1006,Bf=1007,Q3=1007,Ga=1008,tS=1008,cr=1009,kg=1010,Dg=1011,Jc=1012,wp=1013,Vr=1014,Ws=1015,aa=1016,_p=1017,Tp=1018,jc=1020,Bg=35902,Ug=35899,Ng=1021,Fg=1022,Hs=1023,Ba=1026,J0=1027,Ap=1028,Uf=1029,j0=1030,Cp=1031,eS=1032,Ep=1033,Nf=33776,Ff=33777,Of=33778,Gf=33779,Pp=35840,Rp=35841,Ip=35842,Lp=35843,kp=36196,Dp=37492,Bp=37496,Up=37488,Np=37489,zf=37490,Fp=37491,Op=37808,Gp=37809,zp=37810,Vp=37811,Wp=37812,Hp=37813,Xp=37814,qp=37815,$p=37816,Yp=37817,Zp=37818,Jp=37819,jp=37820,Kp=37821,Qp=36492,tm=36494,em=36495,nm=36283,om=36284,Vf=36285,im=36286,vx=2200,xx=2201,bx=2202,ju=2300,hd=2301,Qh=2302,d2=2303,Al=2400,Cl=2401,Ku=2402,sm=2500,Og=2501,Mx=0,Sx=1,wx=2,_x=3200,Gg=3201,nS=3202,oS=3203,h0=0,Tx=1,la="",Ki="srgb",Qu="srgb-linear",tf="linear",ci="srgb",iS="",sS="rg",rS="ga",aS=0,td=7680,lS=7681,cS=7682,uS=7683,fS=34055,hS=34056,dS=5386,pS=512,mS=513,gS=514,yS=515,vS=516,xS=517,bS=518,Ax=519,Cx=512,Ex=513,Px=514,rm=515,Rx=516,Ix=517,am=518,Lx=519,lm=35044,MS=35048,SS=35040,wS=35045,_S=35049,TS=35041,AS=35046,CS=35050,ES=35042,PS="100",zg="300 es",wr=2e3,Rl=2001,RS={COMPUTE:"compute",RENDER:"render"},IS={PERSPECTIVE:"perspective",LINEAR:"linear",FLAT:"flat"},LS={NORMAL:"normal",CENTROID:"centroid",SAMPLE:"sample",FIRST:"first",EITHER:"either"},kS={TEXTURE_COMPARE:"depthTextureCompare"},DS={NONE:0,SHARED:1,FULL:2};function G4(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}var z4={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function Zu(n,t){return new z4[n](t)}function BS(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function ef(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function kx(){let n=ef("canvas");return n.style.display="block",n}var BM={},Il=null;function US(n){Il=n}function NS(){return Il}function nf(...n){let t="THREE."+n.shift();Il?Il("log",t,...n):console.log(t,...n)}function FS(n){let t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Dn(...n){n=FS(n);let t="THREE."+n.shift();if(Il)Il("warn",t,...n);else{let e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function io(...n){n=FS(n);let t="THREE."+n.shift();if(Il)Il("error",t,...n);else{let e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function r0(...n){let t=n.join(" ");t in BM||(BM[t]=!0,Dn(...n))}function OS(n,t,e){return new Promise(function(o,i){function s(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:i();break;case n.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:o()}}setTimeout(s,e)})}var GS={[sd]:rd,[ad]:ud,[ld]:fd,[Rc]:cd,[rd]:sd,[ud]:ad,[fd]:ld,[cd]:Rc},_r=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let o=this._listeners;o[t]===void 0&&(o[t]=[]),o[t].indexOf(e)===-1&&o[t].push(e)}hasEventListener(t,e){let o=this._listeners;return o===void 0?!1:o[t]!==void 0&&o[t].indexOf(e)!==-1}removeEventListener(t,e){let o=this._listeners;if(o===void 0)return;let i=o[t];if(i!==void 0){let s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let o=e[t.type];if(o!==void 0){t.target=this;let i=o.slice(0);for(let s=0,r=i.length;s<r;s++)i[s].call(this,t);t.target=null}}},Gs=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],UM=1234567,Pc=Math.PI/180,Ic=180/Math.PI;function Fr(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,o=Math.random()*4294967295|0;return(Gs[n&255]+Gs[n>>8&255]+Gs[n>>16&255]+Gs[n>>24&255]+"-"+Gs[t&255]+Gs[t>>8&255]+"-"+Gs[t>>16&15|64]+Gs[t>>24&255]+"-"+Gs[e&63|128]+Gs[e>>8&255]+"-"+Gs[e>>16&255]+Gs[e>>24&255]+Gs[o&255]+Gs[o>>8&255]+Gs[o>>16&255]+Gs[o>>24&255]).toLowerCase()}function wo(n,t,e){return Math.max(t,Math.min(e,n))}function Dx(n,t){return(n%t+t)%t}function V4(n,t,e,o,i){return o+(n-t)*(i-o)/(e-t)}function W4(n,t,e){return n!==t?(e-n)/(t-n):0}function ed(n,t,e){return(1-e)*n+e*t}function H4(n,t,e,o){return ed(n,t,1-Math.exp(-e*o))}function X4(n,t=1){return t-Math.abs(Dx(n,t*2)-t)}function q4(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function $4(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function Y4(n,t){return n+Math.floor(Math.random()*(t-n+1))}function Z4(n,t){return n+Math.random()*(t-n)}function J4(n){return n*(.5-Math.random())}function j4(n){n!==void 0&&(UM=n);let t=UM+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function K4(n){return n*Pc}function Q4(n){return n*Ic}function tT(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function eT(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function nT(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function oT(n,t,e,o,i){let s=Math.cos,r=Math.sin,a=s(e/2),l=r(e/2),c=s((t+o)/2),u=r((t+o)/2),h=s((t-o)/2),d=r((t-o)/2),g=s((o-t)/2),v=r((o-t)/2);switch(i){case"XYX":n.set(a*u,l*h,l*d,a*c);break;case"YZY":n.set(l*d,a*u,l*h,a*c);break;case"ZXZ":n.set(l*h,l*d,a*u,a*c);break;case"XZX":n.set(a*u,l*v,l*g,a*c);break;case"YXY":n.set(l*g,a*u,l*v,a*c);break;case"ZYZ":n.set(l*v,l*g,a*u,a*c);break;default:Dn("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function ir(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function zo(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Wf={DEG2RAD:Pc,RAD2DEG:Ic,generateUUID:Fr,clamp:wo,euclideanModulo:Dx,mapLinear:V4,inverseLerp:W4,lerp:ed,damp:H4,pingpong:X4,smoothstep:q4,smootherstep:$4,randInt:Y4,randFloat:Z4,randFloatSpread:J4,seededRandom:j4,degToRad:K4,radToDeg:Q4,isPowerOfTwo:tT,ceilPowerOfTwo:eT,floorPowerOfTwo:nT,setQuaternionFromProperEuler:oT,normalize:zo,denormalize:ir},zx=class zx{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,o=this.y,i=t.elements;return this.x=i[0]*e+i[3]*o+i[6],this.y=i[1]*e+i[4]*o+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=wo(this.x,t.x,e.x),this.y=wo(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=wo(this.x,t,e),this.y=wo(this.y,t,e),this}clampLength(t,e){let o=this.length();return this.divideScalar(o||1).multiplyScalar(wo(o,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let o=this.dot(t)/e;return Math.acos(wo(o,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,o=this.y-t.y;return e*e+o*o}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,o){return this.x=t.x+(e.x-t.x)*o,this.y=t.y+(e.y-t.y)*o,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let o=Math.cos(e),i=Math.sin(e),s=this.x-t.x,r=this.y-t.y;return this.x=s*o-r*i+t.x,this.y=s*i+r*o+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};zx.prototype.isVector2=!0;var ln=zx,Ps=class{constructor(t=0,e=0,o=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=o,this._w=i}static slerpFlat(t,e,o,i,s,r,a){let l=o[i+0],c=o[i+1],u=o[i+2],h=o[i+3],d=s[r+0],g=s[r+1],v=s[r+2],w=s[r+3];if(h!==w||l!==d||c!==g||u!==v){let x=l*d+c*g+u*v+h*w;x<0&&(d=-d,g=-g,v=-v,w=-w,x=-x);let m=1-a;if(x<.9995){let p=Math.acos(x),_=Math.sin(p);m=Math.sin(m*p)/_,a=Math.sin(a*p)/_,l=l*m+d*a,c=c*m+g*a,u=u*m+v*a,h=h*m+w*a}else{l=l*m+d*a,c=c*m+g*a,u=u*m+v*a,h=h*m+w*a;let p=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=p,c*=p,u*=p,h*=p}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,o,i,s,r){let a=o[i],l=o[i+1],c=o[i+2],u=o[i+3],h=s[r],d=s[r+1],g=s[r+2],v=s[r+3];return t[e]=a*v+u*h+l*g-c*d,t[e+1]=l*v+u*d+c*h-a*g,t[e+2]=c*v+u*g+a*d-l*h,t[e+3]=u*v-a*h-l*d-c*g,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,o,i){return this._x=t,this._y=e,this._z=o,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let o=t._x,i=t._y,s=t._z,r=t._order,a=Math.cos,l=Math.sin,c=a(o/2),u=a(i/2),h=a(s/2),d=l(o/2),g=l(i/2),v=l(s/2);switch(r){case"XYZ":this._x=d*u*h+c*g*v,this._y=c*g*h-d*u*v,this._z=c*u*v+d*g*h,this._w=c*u*h-d*g*v;break;case"YXZ":this._x=d*u*h+c*g*v,this._y=c*g*h-d*u*v,this._z=c*u*v-d*g*h,this._w=c*u*h+d*g*v;break;case"ZXY":this._x=d*u*h-c*g*v,this._y=c*g*h+d*u*v,this._z=c*u*v+d*g*h,this._w=c*u*h-d*g*v;break;case"ZYX":this._x=d*u*h-c*g*v,this._y=c*g*h+d*u*v,this._z=c*u*v-d*g*h,this._w=c*u*h+d*g*v;break;case"YZX":this._x=d*u*h+c*g*v,this._y=c*g*h+d*u*v,this._z=c*u*v-d*g*h,this._w=c*u*h-d*g*v;break;case"XZY":this._x=d*u*h-c*g*v,this._y=c*g*h-d*u*v,this._z=c*u*v+d*g*h,this._w=c*u*h+d*g*v;break;default:Dn("Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let o=e/2,i=Math.sin(o);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(o),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,o=e[0],i=e[4],s=e[8],r=e[1],a=e[5],l=e[9],c=e[2],u=e[6],h=e[10],d=o+a+h;if(d>0){let g=.5/Math.sqrt(d+1);this._w=.25/g,this._x=(u-l)*g,this._y=(s-c)*g,this._z=(r-i)*g}else if(o>a&&o>h){let g=2*Math.sqrt(1+o-a-h);this._w=(u-l)/g,this._x=.25*g,this._y=(i+r)/g,this._z=(s+c)/g}else if(a>h){let g=2*Math.sqrt(1+a-o-h);this._w=(s-c)/g,this._x=(i+r)/g,this._y=.25*g,this._z=(l+u)/g}else{let g=2*Math.sqrt(1+h-o-a);this._w=(r-i)/g,this._x=(s+c)/g,this._y=(l+u)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let o=t.dot(e)+1;return o<1e-8?(o=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=o):(this._x=0,this._y=-t.z,this._z=t.y,this._w=o)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=o),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(wo(this.dot(t),-1,1)))}rotateTowards(t,e){let o=this.angleTo(t);if(o===0)return this;let i=Math.min(1,e/o);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let o=t._x,i=t._y,s=t._z,r=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=o*u+r*a+i*c-s*l,this._y=i*u+r*l+s*a-o*c,this._z=s*u+r*c+o*l-i*a,this._w=r*u-o*a-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){let o=t._x,i=t._y,s=t._z,r=t._w,a=this.dot(t);a<0&&(o=-o,i=-i,s=-s,r=-r,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,e=Math.sin(e*c)/u,this._x=this._x*l+o*e,this._y=this._y*l+i*e,this._z=this._z*l+s*e,this._w=this._w*l+r*e,this._onChangeCallback()}else this._x=this._x*l+o*e,this._y=this._y*l+i*e,this._z=this._z*l+s*e,this._w=this._w*l+r*e,this.normalize();return this}slerpQuaternions(t,e,o){return this.copy(t).slerp(e,o)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),o=Math.random(),i=Math.sqrt(1-o),s=Math.sqrt(o);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Vx=class Vx{constructor(t=0,e=0,o=0){this.x=t,this.y=e,this.z=o}set(t,e,o){return o===void 0&&(o=this.z),this.x=t,this.y=e,this.z=o,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(NM.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(NM.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,o=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*o+s[6]*i,this.y=s[1]*e+s[4]*o+s[7]*i,this.z=s[2]*e+s[5]*o+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,o=this.y,i=this.z,s=t.elements,r=1/(s[3]*e+s[7]*o+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*o+s[8]*i+s[12])*r,this.y=(s[1]*e+s[5]*o+s[9]*i+s[13])*r,this.z=(s[2]*e+s[6]*o+s[10]*i+s[14])*r,this}applyQuaternion(t){let e=this.x,o=this.y,i=this.z,s=t.x,r=t.y,a=t.z,l=t.w,c=2*(r*i-a*o),u=2*(a*e-s*i),h=2*(s*o-r*e);return this.x=e+l*c+r*h-a*u,this.y=o+l*u+a*c-s*h,this.z=i+l*h+s*u-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,o=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*o+s[8]*i,this.y=s[1]*e+s[5]*o+s[9]*i,this.z=s[2]*e+s[6]*o+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=wo(this.x,t.x,e.x),this.y=wo(this.y,t.y,e.y),this.z=wo(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=wo(this.x,t,e),this.y=wo(this.y,t,e),this.z=wo(this.z,t,e),this}clampLength(t,e){let o=this.length();return this.divideScalar(o||1).multiplyScalar(wo(o,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,o){return this.x=t.x+(e.x-t.x)*o,this.y=t.y+(e.y-t.y)*o,this.z=t.z+(e.z-t.z)*o,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let o=t.x,i=t.y,s=t.z,r=e.x,a=e.y,l=e.z;return this.x=i*l-s*a,this.y=s*r-o*l,this.z=o*a-i*r,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let o=t.dot(this)/e;return this.copy(t).multiplyScalar(o)}projectOnPlane(t){return Qy.copy(this).projectOnVector(t),this.sub(Qy)}reflect(t){return this.sub(Qy.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let o=this.dot(t)/e;return Math.acos(wo(o,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,o=this.y-t.y,i=this.z-t.z;return e*e+o*o+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,o){let i=Math.sin(e)*t;return this.x=i*Math.sin(o),this.y=Math.cos(e)*t,this.z=i*Math.cos(o),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,o){return this.x=t*Math.sin(e),this.y=o,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),o=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=o,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,o=Math.sqrt(1-e*e);return this.x=o*Math.cos(t),this.y=e,this.z=o*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Vx.prototype.isVector3=!0;var Wt=Vx,Qy=new Wt,NM=new Ps,Wx=class Wx{constructor(t,e,o,i,s,r,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,o,i,s,r,a,l,c)}set(t,e,o,i,s,r,a,l,c){let u=this.elements;return u[0]=t,u[1]=i,u[2]=a,u[3]=e,u[4]=s,u[5]=l,u[6]=o,u[7]=r,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,o=t.elements;return e[0]=o[0],e[1]=o[1],e[2]=o[2],e[3]=o[3],e[4]=o[4],e[5]=o[5],e[6]=o[6],e[7]=o[7],e[8]=o[8],this}extractBasis(t,e,o){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),o.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let o=t.elements,i=e.elements,s=this.elements,r=o[0],a=o[3],l=o[6],c=o[1],u=o[4],h=o[7],d=o[2],g=o[5],v=o[8],w=i[0],x=i[3],m=i[6],p=i[1],_=i[4],b=i[7],S=i[2],T=i[5],C=i[8];return s[0]=r*w+a*p+l*S,s[3]=r*x+a*_+l*T,s[6]=r*m+a*b+l*C,s[1]=c*w+u*p+h*S,s[4]=c*x+u*_+h*T,s[7]=c*m+u*b+h*C,s[2]=d*w+g*p+v*S,s[5]=d*x+g*_+v*T,s[8]=d*m+g*b+v*C,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],o=t[1],i=t[2],s=t[3],r=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*r*u-e*a*c-o*s*u+o*a*l+i*s*c-i*r*l}invert(){let t=this.elements,e=t[0],o=t[1],i=t[2],s=t[3],r=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=u*r-a*c,d=a*l-u*s,g=c*s-r*l,v=e*h+o*d+i*g;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);let w=1/v;return t[0]=h*w,t[1]=(i*c-u*o)*w,t[2]=(a*o-i*r)*w,t[3]=d*w,t[4]=(u*e-i*l)*w,t[5]=(i*s-a*e)*w,t[6]=g*w,t[7]=(o*l-c*e)*w,t[8]=(r*e-o*s)*w,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,o,i,s,r,a){let l=Math.cos(s),c=Math.sin(s);return this.set(o*l,o*c,-o*(l*r+c*a)+r+t,-i*c,i*l,-i*(-c*r+l*a)+a+e,0,0,1),this}scale(t,e){return r0("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(tv.makeScale(t,e)),this}rotate(t){return r0("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(tv.makeRotation(-t)),this}translate(t,e){return r0("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(tv.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),o=Math.sin(t);return this.set(e,-o,0,o,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,o=t.elements;for(let i=0;i<9;i++)if(e[i]!==o[i])return!1;return!0}fromArray(t,e=0){for(let o=0;o<9;o++)this.elements[o]=t[o+e];return this}toArray(t=[],e=0){let o=this.elements;return t[e]=o[0],t[e+1]=o[1],t[e+2]=o[2],t[e+3]=o[3],t[e+4]=o[4],t[e+5]=o[5],t[e+6]=o[6],t[e+7]=o[7],t[e+8]=o[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Wx.prototype.isMatrix3=!0;var Lo=Wx,tv=new Lo,FM=new Lo().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),OM=new Lo().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function iT(){let n={enabled:!0,workingColorSpace:Qu,spaces:{},convert:function(i,s,r){return this.enabled===!1||s===r||!s||!r||(this.spaces[s].transfer===ci&&(i.r=O0(i.r),i.g=O0(i.g),i.b=O0(i.b)),this.spaces[s].primaries!==this.spaces[r].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===ci&&(i.r=Ju(i.r),i.g=Ju(i.g),i.b=Ju(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===la?tf:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,r){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return r0("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return r0("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(i,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],o=[.3127,.329];return n.define({[Qu]:{primaries:t,whitePoint:o,transfer:tf,toXYZ:FM,fromXYZ:OM,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ki},outputColorSpaceConfig:{drawingBufferColorSpace:Ki}},[Ki]:{primaries:t,whitePoint:o,transfer:ci,toXYZ:FM,fromXYZ:OM,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ki}}}),n}var jo=iT();function O0(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ju(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Pu,dd=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let o;if(t instanceof HTMLCanvasElement)o=t;else{Pu===void 0&&(Pu=ef("canvas")),Pu.width=t.width,Pu.height=t.height;let i=Pu.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),o=Pu}return o.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=ef("canvas");e.width=t.width,e.height=t.height;let o=e.getContext("2d");o.drawImage(t,0,0,t.width,t.height);let i=o.getImageData(0,0,t.width,t.height),s=i.data;for(let r=0;r<s.length;r++)s[r]=O0(s[r]/255)*255;return o.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let o=0;o<e.length;o++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[o]=Math.floor(O0(e[o]/255)*255):e[o]=O0(e[o]);return{data:e,width:t.width,height:t.height}}else return Dn("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},sT=0,ta=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:sT++}),this.uuid=Fr(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement!="undefined"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame!="undefined"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let o={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let r=0,a=i.length;r<a;r++)i[r].isDataTexture?s.push(ev(i[r].image)):s.push(ev(i[r]))}else s=ev(i);o.url=s}return e||(t.images[this.uuid]=o),o}};function ev(n){return typeof HTMLImageElement!="undefined"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&n instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&n instanceof ImageBitmap?dd.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Dn("Texture: Unable to serialize Texture."),{})}var p2=class extends ta{constructor(t=null){r0('Source: "Source" has been renamed to "TextureSource". Please update your code to use "THREE.TextureSource" instead.'),super(t),this.isSource=!0}},rT=0,nv=new Wt,$i=class n extends _r{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,o=sr,i=sr,s=Si,r=Ga,a=Hs,l=cr,c=n.DEFAULT_ANISOTROPY,u=la){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:rT++}),this.uuid=Fr(),this.name="",this.source=new ta(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=o,this.wrapT=i,this.magFilter=s,this.minFilter=r,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ln(0,0),this.repeat=new ln(1,1),this.center=new ln(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Lo,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(nv).x}get height(){return this.source.getSize(nv).y}get depth(){return this.source.getSize(nv).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let o=t[e];if(o===void 0){Dn(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Dn(`Texture.setValues(): property '${e}' does not exist.`);continue}i&&o&&i.isVector2&&o.isVector2||i&&o&&i.isVector3&&o.isVector3||i&&o&&i.isMatrix3&&o.isMatrix3?i.copy(o):this[e]=o}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let o={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(o.userData=this.userData),e||(t.textures[this.uuid]=o),o}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Sp)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case El:t.x=t.x-Math.floor(t.x);break;case sr:t.x=t.x<0?0:1;break;case Pl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case El:t.y=t.y-Math.floor(t.y);break;case sr:t.y=t.y<0?0:1;break;case Pl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};$i.DEFAULT_IMAGE=null;$i.DEFAULT_MAPPING=Sp;$i.DEFAULT_ANISOTROPY=1;var Hx=class Hx{constructor(t=0,e=0,o=0,i=1){this.x=t,this.y=e,this.z=o,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,o,i){return this.x=t,this.y=e,this.z=o,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,o=this.y,i=this.z,s=this.w,r=t.elements;return this.x=r[0]*e+r[4]*o+r[8]*i+r[12]*s,this.y=r[1]*e+r[5]*o+r[9]*i+r[13]*s,this.z=r[2]*e+r[6]*o+r[10]*i+r[14]*s,this.w=r[3]*e+r[7]*o+r[11]*i+r[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,o,i,s,l=t.elements,c=l[0],u=l[4],h=l[8],d=l[1],g=l[5],v=l[9],w=l[2],x=l[6],m=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-w)<.01&&Math.abs(v-x)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+w)<.1&&Math.abs(v+x)<.1&&Math.abs(c+g+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let _=(c+1)/2,b=(g+1)/2,S=(m+1)/2,T=(u+d)/4,C=(h+w)/4,E=(v+x)/4;return _>b&&_>S?_<.01?(o=0,i=.707106781,s=.707106781):(o=Math.sqrt(_),i=T/o,s=C/o):b>S?b<.01?(o=.707106781,i=0,s=.707106781):(i=Math.sqrt(b),o=T/i,s=E/i):S<.01?(o=.707106781,i=.707106781,s=0):(s=Math.sqrt(S),o=C/s,i=E/s),this.set(o,i,s,e),this}let p=Math.sqrt((x-v)*(x-v)+(h-w)*(h-w)+(d-u)*(d-u));return Math.abs(p)<.001&&(p=1),this.x=(x-v)/p,this.y=(h-w)/p,this.z=(d-u)/p,this.w=Math.acos((c+g+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=wo(this.x,t.x,e.x),this.y=wo(this.y,t.y,e.y),this.z=wo(this.z,t.z,e.z),this.w=wo(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=wo(this.x,t,e),this.y=wo(this.y,t,e),this.z=wo(this.z,t,e),this.w=wo(this.w,t,e),this}clampLength(t,e){let o=this.length();return this.divideScalar(o||1).multiplyScalar(wo(o,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,o){return this.x=t.x+(e.x-t.x)*o,this.y=t.y+(e.y-t.y)*o,this.z=t.z+(e.z-t.z)*o,this.w=t.w+(e.w-t.w)*o,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Hx.prototype.isVector4=!0;var mi=Hx,of=class extends _r{constructor(t=1,e=1,o={}){super(),o=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Si,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},o),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=o.depth,this.scissor=new mi(0,0,t,e),this.scissorTest=!1,this.viewport=new mi(0,0,t,e),this.textures=[];let i={width:t,height:e,depth:o.depth},s=new $i(i),r=o.count;for(let a=0;a<r;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(o),this.depthBuffer=o.depthBuffer,this.stencilBuffer=o.stencilBuffer,this.resolveColorBuffer=o.resolveColorBuffer,this.resolveDepthBuffer=o.resolveDepthBuffer,this.resolveStencilBuffer=o.resolveStencilBuffer,this.storeMultisampledColorBuffer=o.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=o.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=o.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=o.depthTexture,this.samples=o.samples,this.multiview=o.multiview,this.useArrayDepthTexture=o.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Si,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let o=0;o<this.textures.length;o++)this.textures[o].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,o=1){if(this.width!==t||this.height!==e||this.depth!==o){this.width=t,this.height=e,this.depth=o;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=o,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,o=t.textures.length;e<o;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let i=Object.assign({},t.textures[e].image);this.textures[e].source=new ta(i)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},ks=class extends of{constructor(t=1,e=1,o={}){super(t,e,o),this.isWebGLRenderTarget=!0}},Lc=class extends $i{constructor(t=null,e=1,o=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:o,depth:i},this.magFilter=qi,this.minFilter=qi,this.wrapR=sr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}},m2=class extends ks{constructor(t=1,e=1,o=1,i={}){super(t,e,i),this.isWebGLArrayRenderTarget=!0,this.depth=o,this.texture=new Lc(null,t,e,o),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}},kc=class extends $i{constructor(t=null,e=1,o=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:o,depth:i},this.magFilter=qi,this.minFilter=qi,this.wrapR=sr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}},g2=class extends ks{constructor(t=1,e=1,o=1,i={}){super(t,e,i),this.isWebGL3DRenderTarget=!0,this.depth=o,this.texture=new kc(null,t,e,o),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}},xg=class xg{constructor(t,e,o,i,s,r,a,l,c,u,h,d,g,v,w,x){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,o,i,s,r,a,l,c,u,h,d,g,v,w,x)}set(t,e,o,i,s,r,a,l,c,u,h,d,g,v,w,x){let m=this.elements;return m[0]=t,m[4]=e,m[8]=o,m[12]=i,m[1]=s,m[5]=r,m[9]=a,m[13]=l,m[2]=c,m[6]=u,m[10]=h,m[14]=d,m[3]=g,m[7]=v,m[11]=w,m[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new xg().fromArray(this.elements)}copy(t){let e=this.elements,o=t.elements;return e[0]=o[0],e[1]=o[1],e[2]=o[2],e[3]=o[3],e[4]=o[4],e[5]=o[5],e[6]=o[6],e[7]=o[7],e[8]=o[8],e[9]=o[9],e[10]=o[10],e[11]=o[11],e[12]=o[12],e[13]=o[13],e[14]=o[14],e[15]=o[15],this}copyPosition(t){let e=this.elements,o=t.elements;return e[12]=o[12],e[13]=o[13],e[14]=o[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,o){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),o.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),o.setFromMatrixColumn(this,2),this)}makeBasis(t,e,o){return this.set(t.x,e.x,o.x,0,t.y,e.y,o.y,0,t.z,e.z,o.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,o=t.elements,i=1/Ru.setFromMatrixColumn(t,0).length(),s=1/Ru.setFromMatrixColumn(t,1).length(),r=1/Ru.setFromMatrixColumn(t,2).length();return e[0]=o[0]*i,e[1]=o[1]*i,e[2]=o[2]*i,e[3]=0,e[4]=o[4]*s,e[5]=o[5]*s,e[6]=o[6]*s,e[7]=0,e[8]=o[8]*r,e[9]=o[9]*r,e[10]=o[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,o=t.x,i=t.y,s=t.z,r=Math.cos(o),a=Math.sin(o),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(t.order==="XYZ"){let d=r*u,g=r*h,v=a*u,w=a*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=g+v*c,e[5]=d-w*c,e[9]=-a*l,e[2]=w-d*c,e[6]=v+g*c,e[10]=r*l}else if(t.order==="YXZ"){let d=l*u,g=l*h,v=c*u,w=c*h;e[0]=d+w*a,e[4]=v*a-g,e[8]=r*c,e[1]=r*h,e[5]=r*u,e[9]=-a,e[2]=g*a-v,e[6]=w+d*a,e[10]=r*l}else if(t.order==="ZXY"){let d=l*u,g=l*h,v=c*u,w=c*h;e[0]=d-w*a,e[4]=-r*h,e[8]=v+g*a,e[1]=g+v*a,e[5]=r*u,e[9]=w-d*a,e[2]=-r*c,e[6]=a,e[10]=r*l}else if(t.order==="ZYX"){let d=r*u,g=r*h,v=a*u,w=a*h;e[0]=l*u,e[4]=v*c-g,e[8]=d*c+w,e[1]=l*h,e[5]=w*c+d,e[9]=g*c-v,e[2]=-c,e[6]=a*l,e[10]=r*l}else if(t.order==="YZX"){let d=r*l,g=r*c,v=a*l,w=a*c;e[0]=l*u,e[4]=w-d*h,e[8]=v*h+g,e[1]=h,e[5]=r*u,e[9]=-a*u,e[2]=-c*u,e[6]=g*h+v,e[10]=d-w*h}else if(t.order==="XZY"){let d=r*l,g=r*c,v=a*l,w=a*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=d*h+w,e[5]=r*u,e[9]=g*h-v,e[2]=v*h-g,e[6]=a*u,e[10]=w*h+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(aT,t,lT)}lookAt(t,e,o){let i=this.elements;return Ur.subVectors(t,e),Ur.lengthSq()===0&&(Ur.z=1),Ur.normalize(),bl.crossVectors(o,Ur),bl.lengthSq()===0&&(Math.abs(o.z)===1?Ur.x+=1e-4:Ur.z+=1e-4,Ur.normalize(),bl.crossVectors(o,Ur)),bl.normalize(),w1.crossVectors(Ur,bl),i[0]=bl.x,i[4]=w1.x,i[8]=Ur.x,i[1]=bl.y,i[5]=w1.y,i[9]=Ur.y,i[2]=bl.z,i[6]=w1.z,i[10]=Ur.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let o=t.elements,i=e.elements,s=this.elements,r=o[0],a=o[4],l=o[8],c=o[12],u=o[1],h=o[5],d=o[9],g=o[13],v=o[2],w=o[6],x=o[10],m=o[14],p=o[3],_=o[7],b=o[11],S=o[15],T=i[0],C=i[4],E=i[8],k=i[12],R=i[1],N=i[5],W=i[9],f=i[13],y=i[2],U=i[6],D=i[10],G=i[14],$=i[3],tt=i[7],ut=i[11],At=i[15];return s[0]=r*T+a*R+l*y+c*$,s[4]=r*C+a*N+l*U+c*tt,s[8]=r*E+a*W+l*D+c*ut,s[12]=r*k+a*f+l*G+c*At,s[1]=u*T+h*R+d*y+g*$,s[5]=u*C+h*N+d*U+g*tt,s[9]=u*E+h*W+d*D+g*ut,s[13]=u*k+h*f+d*G+g*At,s[2]=v*T+w*R+x*y+m*$,s[6]=v*C+w*N+x*U+m*tt,s[10]=v*E+w*W+x*D+m*ut,s[14]=v*k+w*f+x*G+m*At,s[3]=p*T+_*R+b*y+S*$,s[7]=p*C+_*N+b*U+S*tt,s[11]=p*E+_*W+b*D+S*ut,s[15]=p*k+_*f+b*G+S*At,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],o=t[4],i=t[8],s=t[12],r=t[1],a=t[5],l=t[9],c=t[13],u=t[2],h=t[6],d=t[10],g=t[14],v=t[3],w=t[7],x=t[11],m=t[15],p=l*g-c*d,_=a*g-c*h,b=a*d-l*h,S=r*g-c*u,T=r*d-l*u,C=r*h-a*u;return e*(w*p-x*_+m*b)-o*(v*p-x*S+m*T)+i*(v*_-w*S+m*C)-s*(v*b-w*T+x*C)}determinantAffine(){let t=this.elements,e=t[0],o=t[4],i=t[8],s=t[1],r=t[5],a=t[9],l=t[2],c=t[6],u=t[10];return e*(r*u-a*c)-o*(s*u-a*l)+i*(s*c-r*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,o){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=o),this}invert(){let t=this.elements,e=t[0],o=t[1],i=t[2],s=t[3],r=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=t[9],d=t[10],g=t[11],v=t[12],w=t[13],x=t[14],m=t[15],p=e*a-o*r,_=e*l-i*r,b=e*c-s*r,S=o*l-i*a,T=o*c-s*a,C=i*c-s*l,E=u*w-h*v,k=u*x-d*v,R=u*m-g*v,N=h*x-d*w,W=h*m-g*w,f=d*m-g*x,y=p*f-_*W+b*N+S*R-T*k+C*E;if(y===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let U=1/y;return t[0]=(a*f-l*W+c*N)*U,t[1]=(i*W-o*f-s*N)*U,t[2]=(w*C-x*T+m*S)*U,t[3]=(d*T-h*C-g*S)*U,t[4]=(l*R-r*f-c*k)*U,t[5]=(e*f-i*R+s*k)*U,t[6]=(x*b-v*C-m*_)*U,t[7]=(u*C-d*b+g*_)*U,t[8]=(r*W-a*R+c*E)*U,t[9]=(o*R-e*W-s*E)*U,t[10]=(v*T-w*b+m*p)*U,t[11]=(h*b-u*T-g*p)*U,t[12]=(a*k-r*N-l*E)*U,t[13]=(e*N-o*k+i*E)*U,t[14]=(w*_-v*S-x*p)*U,t[15]=(u*S-h*_+d*p)*U,this}scale(t){let e=this.elements,o=t.x,i=t.y,s=t.z;return e[0]*=o,e[4]*=i,e[8]*=s,e[1]*=o,e[5]*=i,e[9]*=s,e[2]*=o,e[6]*=i,e[10]*=s,e[3]*=o,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],o=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,o,i))}makeTranslation(t,e,o){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,o,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),o=Math.sin(t);return this.set(1,0,0,0,0,e,-o,0,0,o,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),o=Math.sin(t);return this.set(e,0,o,0,0,1,0,0,-o,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),o=Math.sin(t);return this.set(e,-o,0,0,o,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let o=Math.cos(e),i=Math.sin(e),s=1-o,r=t.x,a=t.y,l=t.z,c=s*r,u=s*a;return this.set(c*r+o,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+o,u*l-i*r,0,c*l-i*a,u*l+i*r,s*l*l+o,0,0,0,0,1),this}makeScale(t,e,o){return this.set(t,0,0,0,0,e,0,0,0,0,o,0,0,0,0,1),this}makeShear(t,e,o,i,s,r){return this.set(1,o,s,0,t,1,r,0,e,i,1,0,0,0,0,1),this}compose(t,e,o){let i=this.elements,s=e._x,r=e._y,a=e._z,l=e._w,c=s+s,u=r+r,h=a+a,d=s*c,g=s*u,v=s*h,w=r*u,x=r*h,m=a*h,p=l*c,_=l*u,b=l*h,S=o.x,T=o.y,C=o.z;return i[0]=(1-(w+m))*S,i[1]=(g+b)*S,i[2]=(v-_)*S,i[3]=0,i[4]=(g-b)*T,i[5]=(1-(d+m))*T,i[6]=(x+p)*T,i[7]=0,i[8]=(v+_)*C,i[9]=(x-p)*C,i[10]=(1-(d+w))*C,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,o){let i=this.elements;t.x=i[12],t.y=i[13],t.z=i[14];let s=this.determinantAffine();if(s===0)return o.set(1,1,1),e.identity(),this;let r=Ru.set(i[0],i[1],i[2]).length(),a=Ru.set(i[4],i[5],i[6]).length(),l=Ru.set(i[8],i[9],i[10]).length();s<0&&(r=-r),Pa.copy(this);let c=1/r,u=1/a,h=1/l;return Pa.elements[0]*=c,Pa.elements[1]*=c,Pa.elements[2]*=c,Pa.elements[4]*=u,Pa.elements[5]*=u,Pa.elements[6]*=u,Pa.elements[8]*=h,Pa.elements[9]*=h,Pa.elements[10]*=h,e.setFromRotationMatrix(Pa),o.x=r,o.y=a,o.z=l,this}makePerspective(t,e,o,i,s,r,a=wr,l=!1){let c=this.elements,u=2*s/(e-t),h=2*s/(o-i),d=(e+t)/(e-t),g=(o+i)/(o-i),v,w;if(l)v=s/(r-s),w=r*s/(r-s);else if(a===wr)v=-(r+s)/(r-s),w=-2*r*s/(r-s);else if(a===Rl)v=-r/(r-s),w=-r*s/(r-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=g,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=w,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,o,i,s,r,a=wr,l=!1){let c=this.elements,u=2/(e-t),h=2/(o-i),d=-(e+t)/(e-t),g=-(o+i)/(o-i),v,w;if(l)v=1/(r-s),w=r/(r-s);else if(a===wr)v=-2/(r-s),w=-(r+s)/(r-s);else if(a===Rl)v=-1/(r-s),w=-s/(r-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=h,c[9]=0,c[13]=g,c[2]=0,c[6]=0,c[10]=v,c[14]=w,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,o=t.elements;for(let i=0;i<16;i++)if(e[i]!==o[i])return!1;return!0}fromArray(t,e=0){for(let o=0;o<16;o++)this.elements[o]=t[o+e];return this}toArray(t=[],e=0){let o=this.elements;return t[e]=o[0],t[e+1]=o[1],t[e+2]=o[2],t[e+3]=o[3],t[e+4]=o[4],t[e+5]=o[5],t[e+6]=o[6],t[e+7]=o[7],t[e+8]=o[8],t[e+9]=o[9],t[e+10]=o[10],t[e+11]=o[11],t[e+12]=o[12],t[e+13]=o[13],t[e+14]=o[14],t[e+15]=o[15],t}};xg.prototype.isMatrix4=!0;var Ao=xg,Ru=new Wt,Pa=new Ao,aT=new Wt(0,0,0),lT=new Wt(1,1,1),bl=new Wt,w1=new Wt,Ur=new Wt,GM=new Ao,zM=new Ps,oa=class n{constructor(t=0,e=0,o=0,i=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=o,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,o,i=this._order){return this._x=t,this._y=e,this._z=o,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,o=!0){let i=t.elements,s=i[0],r=i[4],a=i[8],l=i[1],c=i[5],u=i[9],h=i[2],d=i[6],g=i[10];switch(e){case"XYZ":this._y=Math.asin(wo(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,g),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-wo(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,g),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(wo(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,g),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-wo(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,g),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(wo(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,g));break;case"XZY":this._z=Math.asin(-wo(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,g),this._y=0);break;default:Dn("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,o===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,o){return GM.makeRotationFromQuaternion(t),this.setFromRotationMatrix(GM,e,o)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return zM.setFromEuler(this),this.setFromQuaternion(zM,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};oa.DEFAULT_ORDER="XYZ";var Dc=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},cT=0,VM=new Wt,Iu=new Ps,L0=new Ao,_1=new Wt,Oh=new Wt,uT=new Wt,fT=new Ps,WM=new Wt(1,0,0),HM=new Wt(0,1,0),XM=new Wt(0,0,1),qM={type:"added"},hT={type:"removed"},Lu={type:"childadded",child:null},ov={type:"childremoved",child:null},ri=class n extends _r{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:cT++}),this.uuid=Fr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new Wt,e=new oa,o=new Ps,i=new Wt(1,1,1);function s(){o.setFromEuler(e,!1)}function r(){e.setFromQuaternion(o,void 0,!1)}e._onChange(s),o._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:o},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ao},normalMatrix:{value:new Lo}}),this.matrix=new Ao,this.matrixWorld=new Ao,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Dc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Iu.setFromAxisAngle(t,e),this.quaternion.multiply(Iu),this}rotateOnWorldAxis(t,e){return Iu.setFromAxisAngle(t,e),this.quaternion.premultiply(Iu),this}rotateX(t){return this.rotateOnAxis(WM,t)}rotateY(t){return this.rotateOnAxis(HM,t)}rotateZ(t){return this.rotateOnAxis(XM,t)}translateOnAxis(t,e){return VM.copy(t).applyQuaternion(this.quaternion),this.position.add(VM.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(WM,t)}translateY(t){return this.translateOnAxis(HM,t)}translateZ(t){return this.translateOnAxis(XM,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(L0.copy(this.matrixWorld).invert())}lookAt(t,e,o){t.isVector3?_1.copy(t):_1.set(t,e,o);let i=this.parent;this.updateWorldMatrix(!0,!1),Oh.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?L0.lookAt(Oh,_1,this.up):L0.lookAt(_1,Oh,this.up),this.quaternion.setFromRotationMatrix(L0),i&&(L0.extractRotation(i.matrixWorld),Iu.setFromRotationMatrix(L0),this.quaternion.premultiply(Iu.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(io("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(qM),Lu.child=t,this.dispatchEvent(Lu),Lu.child=null):io("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let o=0;o<arguments.length;o++)this.remove(arguments[o]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(hT),ov.child=t,this.dispatchEvent(ov),ov.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),L0.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),L0.multiply(t.parent.matrixWorld)),t.applyMatrix4(L0),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(qM),Lu.child=t,this.dispatchEvent(Lu),Lu.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let o=0,i=this.children.length;o<i;o++){let r=this.children[o].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,o=[]){this[t]===e&&o.push(this);let i=this.children;for(let s=0,r=i.length;s<r;s++)i[s].getObjectsByProperty(t,e,o);return o}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oh,t,uT),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oh,fT,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let o=0,i=e.length;o<i;o++)e[o].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let o=0,i=e.length;o<i;o++)e[o].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,o=t.y,i=t.z,s=this.matrix.elements;s[12]+=e-s[0]*e-s[4]*o-s[8]*i,s[13]+=o-s[1]*e-s[5]*o-s[9]*i,s[14]+=i-s[2]*e-s[6]*o-s[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let o=0,i=e.length;o<i;o++)e[o].updateMatrixWorld(t)}updateWorldMatrix(t,e,o=!1){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||o)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,o=!0),e===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0,o)}}toJSON(t){let e=t===void 0||typeof t=="string",o={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},o.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];s(t.shapes,h)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(s(t.animations,l))}}if(e){let a=r(t.geometries),l=r(t.materials),c=r(t.textures),u=r(t.images),h=r(t.shapes),d=r(t.skeletons),g=r(t.animations),v=r(t.nodes);a.length>0&&(o.geometries=a),l.length>0&&(o.materials=l),c.length>0&&(o.textures=c),u.length>0&&(o.images=u),h.length>0&&(o.shapes=h),d.length>0&&(o.skeletons=d),g.length>0&&(o.animations=g),v.length>0&&(o.nodes=v)}return o.object=i,o;function r(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let o=0;o<t.children.length;o++){let i=t.children[o];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};ri.DEFAULT_UP=new Wt(0,1,0);ri.DEFAULT_MATRIX_AUTO_UPDATE=!0;ri.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ea=class extends ri{constructor(){super(),this.isGroup=!0,this.type="Group"}},dT={type:"move"},Bc=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ea,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ea,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Wt,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Wt),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ea,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Wt,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Wt,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let o of t.hand.values())this._getHandJoint(e,o)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,o){let i=null,s=null,r=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(let w of t.hand.values()){let x=e.getJointPose(w,o),m=this._getHandJoint(c,w);x!==null&&(m.matrix.fromArray(x.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=x.radius),m.visible=x!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),g=.02,v=.005;c.inputState.pinching&&d>g+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=g-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,o),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(i=e.getPose(t.targetRaySpace,o),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(dT)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let o=new ea;o.matrixAutoUpdate=!1,o.visible=!1,t.joints[e.jointName]=o,t.add(o)}return t.joints[e.jointName]}},zS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ml={h:0,s:0,l:0},T1={h:0,s:0,l:0};function iv(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var In=class{constructor(t,e,o){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,o)}set(t,e,o){if(e===void 0&&o===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,o);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ki){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,jo.colorSpaceToWorking(this,e),this}setRGB(t,e,o,i=jo.workingColorSpace){return this.r=t,this.g=e,this.b=o,jo.colorSpaceToWorking(this,i),this}setHSL(t,e,o,i=jo.workingColorSpace){if(t=Dx(t,1),e=wo(e,0,1),o=wo(o,0,1),e===0)this.r=this.g=this.b=o;else{let s=o<=.5?o*(1+e):o+e-o*e,r=2*o-s;this.r=iv(r,s,t+1/3),this.g=iv(r,s,t),this.b=iv(r,s,t-1/3)}return jo.colorSpaceToWorking(this,i),this}setStyle(t,e=Ki){function o(s){s!==void 0&&parseFloat(s)<1&&Dn("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,r=i[1],a=i[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return o(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return o(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return o(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:Dn("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=i[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(s,16),e);Dn("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ki){let o=zS[t.toLowerCase()];return o!==void 0?this.setHex(o,e):Dn("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=O0(t.r),this.g=O0(t.g),this.b=O0(t.b),this}copyLinearToSRGB(t){return this.r=Ju(t.r),this.g=Ju(t.g),this.b=Ju(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ki){return jo.workingToColorSpace(zs.copy(this),t),Math.round(wo(zs.r*255,0,255))*65536+Math.round(wo(zs.g*255,0,255))*256+Math.round(wo(zs.b*255,0,255))}getHexString(t=Ki){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=jo.workingColorSpace){jo.workingToColorSpace(zs.copy(this),e);let o=zs.r,i=zs.g,s=zs.b,r=Math.max(o,i,s),a=Math.min(o,i,s),l,c,u=(a+r)/2;if(a===r)l=0,c=0;else{let h=r-a;switch(c=u<=.5?h/(r+a):h/(2-r-a),r){case o:l=(i-s)/h+(i<s?6:0);break;case i:l=(s-o)/h+2;break;case s:l=(o-i)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=jo.workingColorSpace){return jo.workingToColorSpace(zs.copy(this),e),t.r=zs.r,t.g=zs.g,t.b=zs.b,t}getStyle(t=Ki){jo.workingToColorSpace(zs.copy(this),t);let e=zs.r,o=zs.g,i=zs.b;return t!==Ki?`color(${t} ${e.toFixed(3)} ${o.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(o*255)},${Math.round(i*255)})`}offsetHSL(t,e,o){return this.getHSL(Ml),this.setHSL(Ml.h+t,Ml.s+e,Ml.l+o)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,o){return this.r=t.r+(e.r-t.r)*o,this.g=t.g+(e.g-t.g)*o,this.b=t.b+(e.b-t.b)*o,this}lerpHSL(t,e){this.getHSL(Ml),t.getHSL(T1);let o=ed(Ml.h,T1.h,e),i=ed(Ml.s,T1.s,e),s=ed(Ml.l,T1.l,e);return this.setHSL(o,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,o=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*o+s[6]*i,this.g=s[1]*e+s[4]*o+s[7]*i,this.b=s[2]*e+s[5]*o+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},zs=new In;In.NAMES=zS;var pd=class n{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new In(t),this.density=e}clone(){return new n(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}},md=class n{constructor(t,e=1,o=1e3){this.isFog=!0,this.name="",this.color=new In(t),this.near=e,this.far=o}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Uc=class extends ri{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new oa,this.environmentIntensity=1,this.environmentRotation=new oa,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Ra=new Wt,k0=new Wt,sv=new Wt,D0=new Wt,ku=new Wt,Du=new Wt,$M=new Wt,rv=new Wt,av=new Wt,lv=new Wt,cv=new mi,uv=new mi,fv=new mi,ka=class n{constructor(t=new Wt,e=new Wt,o=new Wt){this.a=t,this.b=e,this.c=o}static getNormal(t,e,o,i){i.subVectors(o,e),Ra.subVectors(t,e),i.cross(Ra);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,o,i,s){Ra.subVectors(i,e),k0.subVectors(o,e),sv.subVectors(t,e);let r=Ra.dot(Ra),a=Ra.dot(k0),l=Ra.dot(sv),c=k0.dot(k0),u=k0.dot(sv),h=r*c-a*a;if(h===0)return s.set(0,0,0),null;let d=1/h,g=(c*l-a*u)*d,v=(r*u-a*l)*d;return s.set(1-g-v,v,g)}static containsPoint(t,e,o,i){return this.getBarycoord(t,e,o,i,D0)===null?!1:D0.x>=0&&D0.y>=0&&D0.x+D0.y<=1}static getInterpolation(t,e,o,i,s,r,a,l){return this.getBarycoord(t,e,o,i,D0)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,D0.x),l.addScaledVector(r,D0.y),l.addScaledVector(a,D0.z),l)}static getInterpolatedAttribute(t,e,o,i,s,r){return cv.setScalar(0),uv.setScalar(0),fv.setScalar(0),cv.fromBufferAttribute(t,e),uv.fromBufferAttribute(t,o),fv.fromBufferAttribute(t,i),r.setScalar(0),r.addScaledVector(cv,s.x),r.addScaledVector(uv,s.y),r.addScaledVector(fv,s.z),r}static isFrontFacing(t,e,o,i){return Ra.subVectors(o,e),k0.subVectors(t,e),Ra.cross(k0).dot(i)<0}set(t,e,o){return this.a.copy(t),this.b.copy(e),this.c.copy(o),this}setFromPointsAndIndices(t,e,o,i){return this.a.copy(t[e]),this.b.copy(t[o]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,o,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,o),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ra.subVectors(this.c,this.b),k0.subVectors(this.a,this.b),Ra.cross(k0).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,o,i,s){return n.getInterpolation(t,this.a,this.b,this.c,e,o,i,s)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let o=this.a,i=this.b,s=this.c,r,a;ku.subVectors(i,o),Du.subVectors(s,o),rv.subVectors(t,o);let l=ku.dot(rv),c=Du.dot(rv);if(l<=0&&c<=0)return e.copy(o);av.subVectors(t,i);let u=ku.dot(av),h=Du.dot(av);if(u>=0&&h<=u)return e.copy(i);let d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return r=l/(l-u),e.copy(o).addScaledVector(ku,r);lv.subVectors(t,s);let g=ku.dot(lv),v=Du.dot(lv);if(v>=0&&g<=v)return e.copy(s);let w=g*c-l*v;if(w<=0&&c>=0&&v<=0)return a=c/(c-v),e.copy(o).addScaledVector(Du,a);let x=u*v-g*h;if(x<=0&&h-u>=0&&g-v>=0)return $M.subVectors(s,i),a=(h-u)/(h-u+(g-v)),e.copy(i).addScaledVector($M,a);let m=1/(x+w+d);return r=w*m,a=d*m,e.copy(o).addScaledVector(ku,r).addScaledVector(Du,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},ys=class{constructor(t=new Wt(1/0,1/0,1/0),e=new Wt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,o=t.length;e<o;e+=3)this.expandByPoint(Ia.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,o=t.count;e<o;e++)this.expandByPoint(Ia.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,o=t.length;e<o;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let o=Ia.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(o),this.max.copy(t).add(o),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let o=t.geometry;if(o!==void 0){let s=o.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let r=0,a=s.count;r<a;r++)t.isMesh===!0?t.getVertexPosition(r,Ia):Ia.fromBufferAttribute(s,r),Ia.applyMatrix4(t.matrixWorld),this.expandByPoint(Ia);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),A1.copy(t.boundingBox)):(o.boundingBox===null&&o.computeBoundingBox(),A1.copy(o.boundingBox)),A1.applyMatrix4(t.matrixWorld),this.union(A1)}let i=t.children;for(let s=0,r=i.length;s<r;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ia),Ia.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,o;return t.normal.x>0?(e=t.normal.x*this.min.x,o=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,o=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,o+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,o+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,o+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,o+=t.normal.z*this.min.z),e<=-t.constant&&o>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Gh),C1.subVectors(this.max,Gh),Bu.subVectors(t.a,Gh),Uu.subVectors(t.b,Gh),Nu.subVectors(t.c,Gh),Sl.subVectors(Uu,Bu),wl.subVectors(Nu,Uu),yc.subVectors(Bu,Nu);let e=[0,-Sl.z,Sl.y,0,-wl.z,wl.y,0,-yc.z,yc.y,Sl.z,0,-Sl.x,wl.z,0,-wl.x,yc.z,0,-yc.x,-Sl.y,Sl.x,0,-wl.y,wl.x,0,-yc.y,yc.x,0];return!hv(e,Bu,Uu,Nu,C1)||(e=[1,0,0,0,1,0,0,0,1],!hv(e,Bu,Uu,Nu,C1))?!1:(E1.crossVectors(Sl,wl),e=[E1.x,E1.y,E1.z],hv(e,Bu,Uu,Nu,C1))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ia).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ia).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(B0[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),B0[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),B0[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),B0[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),B0[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),B0[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),B0[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),B0[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(B0),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},B0=[new Wt,new Wt,new Wt,new Wt,new Wt,new Wt,new Wt,new Wt],Ia=new Wt,A1=new ys,Bu=new Wt,Uu=new Wt,Nu=new Wt,Sl=new Wt,wl=new Wt,yc=new Wt,Gh=new Wt,C1=new Wt,E1=new Wt,vc=new Wt;function hv(n,t,e,o,i){for(let s=0,r=n.length-3;s<=r;s+=3){vc.fromArray(n,s);let a=i.x*Math.abs(vc.x)+i.y*Math.abs(vc.y)+i.z*Math.abs(vc.z),l=t.dot(vc),c=e.dot(vc),u=o.dot(vc);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var F0=pT();function pT(){let n=new ArrayBuffer(4),t=new Float32Array(n),e=new Uint32Array(n),o=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){let c=l-127;c<-27?(o[l]=0,o[l|256]=32768,i[l]=24,i[l|256]=24):c<-14?(o[l]=1024>>-c-14,o[l|256]=1024>>-c-14|32768,i[l]=-c-1,i[l|256]=-c-1):c<=15?(o[l]=c+15<<10,o[l|256]=c+15<<10|32768,i[l]=13,i[l|256]=13):c<128?(o[l]=31744,o[l|256]=64512,i[l]=24,i[l|256]=24):(o[l]=31744,o[l|256]=64512,i[l]=13,i[l|256]=13)}let s=new Uint32Array(2048),r=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,u=0;for(;(c&8388608)===0;)c<<=1,u-=8388608;c&=-8388609,u+=947912704,s[l]=c|u}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)r[l]=l<<23;r[31]=1199570944,r[32]=2147483648;for(let l=33;l<63;++l)r[l]=2147483648+(l-32<<23);r[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:t,uint32View:e,baseTable:o,shiftTable:i,mantissaTable:s,exponentTable:r,offsetTable:a}}function Sr(n){Math.abs(n)>65504&&Dn("DataUtils.toHalfFloat(): Value out of range."),n=wo(n,-65504,65504),F0.floatView[0]=n;let t=F0.uint32View[0],e=t>>23&511;return F0.baseTable[e]+((t&8388607)>>F0.shiftTable[e])}function jh(n){let t=n>>10;return F0.uint32View[0]=F0.mantissaTable[F0.offsetTable[t]+(n&1023)]+F0.exponentTable[t],F0.floatView[0]}var y2=class{static toHalfFloat(t){return Sr(t)}static fromHalfFloat(t){return jh(t)}},cs=new Wt,P1=new ln,mT=0,si=class extends _r{constructor(t,e,o=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:mT++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=o,this.usage=lm,this.updateRanges=[],this.gpuType=Ws,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,o){t*=this.itemSize,o*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[o+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,o=this.count;e<o;e++)P1.fromBufferAttribute(this,e),P1.applyMatrix3(t),this.setXY(e,P1.x,P1.y);else if(this.itemSize===3)for(let e=0,o=this.count;e<o;e++)cs.fromBufferAttribute(this,e),cs.applyMatrix3(t),this.setXYZ(e,cs.x,cs.y,cs.z);return this}applyMatrix4(t){for(let e=0,o=this.count;e<o;e++)cs.fromBufferAttribute(this,e),cs.applyMatrix4(t),this.setXYZ(e,cs.x,cs.y,cs.z);return this}applyNormalMatrix(t){for(let e=0,o=this.count;e<o;e++)cs.fromBufferAttribute(this,e),cs.applyNormalMatrix(t),this.setXYZ(e,cs.x,cs.y,cs.z);return this}transformDirection(t){for(let e=0,o=this.count;e<o;e++)cs.fromBufferAttribute(this,e),cs.transformDirection(t),this.setXYZ(e,cs.x,cs.y,cs.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let o=this.array[t*this.itemSize+e];return this.normalized&&(o=ir(o,this.array)),o}setComponent(t,e,o){return this.normalized&&(o=zo(o,this.array)),this.array[t*this.itemSize+e]=o,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ir(e,this.array)),e}setX(t,e){return this.normalized&&(e=zo(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ir(e,this.array)),e}setY(t,e){return this.normalized&&(e=zo(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ir(e,this.array)),e}setZ(t,e){return this.normalized&&(e=zo(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ir(e,this.array)),e}setW(t,e){return this.normalized&&(e=zo(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,o){return t*=this.itemSize,this.normalized&&(e=zo(e,this.array),o=zo(o,this.array)),this.array[t+0]=e,this.array[t+1]=o,this}setXYZ(t,e,o,i){return t*=this.itemSize,this.normalized&&(e=zo(e,this.array),o=zo(o,this.array),i=zo(i,this.array)),this.array[t+0]=e,this.array[t+1]=o,this.array[t+2]=i,this}setXYZW(t,e,o,i,s){return t*=this.itemSize,this.normalized&&(e=zo(e,this.array),o=zo(o,this.array),i=zo(i,this.array),s=zo(s,this.array)),this.array[t+0]=e,this.array[t+1]=o,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}},v2=class extends si{constructor(t,e,o){super(new Int8Array(t),e,o)}},x2=class extends si{constructor(t,e,o){super(new Uint8Array(t),e,o)}},b2=class extends si{constructor(t,e,o){super(new Uint8ClampedArray(t),e,o)}},M2=class extends si{constructor(t,e,o){super(new Int16Array(t),e,o)}},sf=class extends si{constructor(t,e,o){super(new Uint16Array(t),e,o)}},S2=class extends si{constructor(t,e,o){super(new Int32Array(t),e,o)}},rf=class extends si{constructor(t,e,o){super(new Uint32Array(t),e,o)}},w2=class extends si{constructor(t,e,o){super(new Uint16Array(t),e,o),this.isFloat16BufferAttribute=!0}getX(t){let e=jh(this.array[t*this.itemSize]);return this.normalized&&(e=ir(e,this.array)),e}setX(t,e){return this.normalized&&(e=zo(e,this.array)),this.array[t*this.itemSize]=Sr(e),this}getY(t){let e=jh(this.array[t*this.itemSize+1]);return this.normalized&&(e=ir(e,this.array)),e}setY(t,e){return this.normalized&&(e=zo(e,this.array)),this.array[t*this.itemSize+1]=Sr(e),this}getZ(t){let e=jh(this.array[t*this.itemSize+2]);return this.normalized&&(e=ir(e,this.array)),e}setZ(t,e){return this.normalized&&(e=zo(e,this.array)),this.array[t*this.itemSize+2]=Sr(e),this}getW(t){let e=jh(this.array[t*this.itemSize+3]);return this.normalized&&(e=ir(e,this.array)),e}setW(t,e){return this.normalized&&(e=zo(e,this.array)),this.array[t*this.itemSize+3]=Sr(e),this}setXY(t,e,o){return t*=this.itemSize,this.normalized&&(e=zo(e,this.array),o=zo(o,this.array)),this.array[t+0]=Sr(e),this.array[t+1]=Sr(o),this}setXYZ(t,e,o,i){return t*=this.itemSize,this.normalized&&(e=zo(e,this.array),o=zo(o,this.array),i=zo(i,this.array)),this.array[t+0]=Sr(e),this.array[t+1]=Sr(o),this.array[t+2]=Sr(i),this}setXYZW(t,e,o,i,s){return t*=this.itemSize,this.normalized&&(e=zo(e,this.array),o=zo(o,this.array),i=zo(i,this.array),s=zo(s,this.array)),this.array[t+0]=Sr(e),this.array[t+1]=Sr(o),this.array[t+2]=Sr(i),this.array[t+3]=Sr(s),this}},zn=class extends si{constructor(t,e,o){super(new Float32Array(t),e,o)}},gT=new ys,zh=new Wt,dv=new Wt,us=class{constructor(t=new Wt,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let o=this.center;e!==void 0?o.copy(e):gT.setFromPoints(t).getCenter(o);let i=0;for(let s=0,r=t.length;s<r;s++)i=Math.max(i,o.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let o=this.center.distanceToSquared(t);return e.copy(t),o>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;zh.subVectors(t,this.center);let e=zh.lengthSq();if(e>this.radius*this.radius){let o=Math.sqrt(e),i=(o-this.radius)*.5;this.center.addScaledVector(zh,i/o),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(dv.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(zh.copy(t.center).add(dv)),this.expandByPoint(zh.copy(t.center).sub(dv))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},yT=0,Kr=new Ao,pv=new ri,Fu=new Wt,Nr=new ys,Vh=new ys,Es=new Wt,_o=class n extends _r{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:yT++}),this.uuid=Fr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(G4(t)?rf:sf)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,o=0){this.groups.push({start:t,count:e,materialIndex:o})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let o=this.attributes.normal;if(o!==void 0){let s=new Lo().getNormalMatrix(t);o.applyNormalMatrix(s),o.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Kr.makeRotationFromQuaternion(t),this.applyMatrix4(Kr),this}rotateX(t){return Kr.makeRotationX(t),this.applyMatrix4(Kr),this}rotateY(t){return Kr.makeRotationY(t),this.applyMatrix4(Kr),this}rotateZ(t){return Kr.makeRotationZ(t),this.applyMatrix4(Kr),this}translate(t,e,o){return Kr.makeTranslation(t,e,o),this.applyMatrix4(Kr),this}scale(t,e,o){return Kr.makeScale(t,e,o),this.applyMatrix4(Kr),this}lookAt(t){return pv.lookAt(t),pv.updateMatrix(),this.applyMatrix4(pv.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fu).negate(),this.translate(Fu.x,Fu.y,Fu.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let o=[];for(let i=0,s=t.length;i<s;i++){let r=t[i];o.push(r.x,r.y,r.z||0)}this.setAttribute("position",new zn(o,3))}else{let o=Math.min(t.length,e.count);for(let i=0;i<o;i++){let s=t[i];e.setXYZ(i,s.x,s.y,s.z||0)}t.length>e.count&&Dn("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ys);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){io("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Wt(-1/0,-1/0,-1/0),new Wt(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let o=0,i=e.length;o<i;o++){let s=e[o];Nr.setFromBufferAttribute(s),this.morphTargetsRelative?(Es.addVectors(this.boundingBox.min,Nr.min),this.boundingBox.expandByPoint(Es),Es.addVectors(this.boundingBox.max,Nr.max),this.boundingBox.expandByPoint(Es)):(this.boundingBox.expandByPoint(Nr.min),this.boundingBox.expandByPoint(Nr.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&io('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new us);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){io("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Wt,1/0);return}if(t){let o=this.boundingSphere.center;if(Nr.setFromBufferAttribute(t),e)for(let s=0,r=e.length;s<r;s++){let a=e[s];Vh.setFromBufferAttribute(a),this.morphTargetsRelative?(Es.addVectors(Nr.min,Vh.min),Nr.expandByPoint(Es),Es.addVectors(Nr.max,Vh.max),Nr.expandByPoint(Es)):(Nr.expandByPoint(Vh.min),Nr.expandByPoint(Vh.max))}Nr.getCenter(o);let i=0;for(let s=0,r=t.count;s<r;s++)Es.fromBufferAttribute(t,s),i=Math.max(i,o.distanceToSquared(Es));if(e)for(let s=0,r=e.length;s<r;s++){let a=e[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Es.fromBufferAttribute(a,c),l&&(Fu.fromBufferAttribute(t,c),Es.add(Fu)),i=Math.max(i,o.distanceToSquared(Es))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&io('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){io("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let o=e.position,i=e.normal,s=e.uv,r=this.getAttribute("tangent");(r===void 0||r.count!==o.count)&&(r=new si(new Float32Array(4*o.count),4),this.setAttribute("tangent",r));let a=[],l=[];for(let E=0;E<o.count;E++)a[E]=new Wt,l[E]=new Wt;let c=new Wt,u=new Wt,h=new Wt,d=new ln,g=new ln,v=new ln,w=new Wt,x=new Wt;function m(E,k,R){c.fromBufferAttribute(o,E),u.fromBufferAttribute(o,k),h.fromBufferAttribute(o,R),d.fromBufferAttribute(s,E),g.fromBufferAttribute(s,k),v.fromBufferAttribute(s,R),u.sub(c),h.sub(c),g.sub(d),v.sub(d);let N=1/(g.x*v.y-v.x*g.y);isFinite(N)&&(w.copy(u).multiplyScalar(v.y).addScaledVector(h,-g.y).multiplyScalar(N),x.copy(h).multiplyScalar(g.x).addScaledVector(u,-v.x).multiplyScalar(N),a[E].add(w),a[k].add(w),a[R].add(w),l[E].add(x),l[k].add(x),l[R].add(x))}let p=this.groups;p.length===0&&(p=[{start:0,count:t.count}]);for(let E=0,k=p.length;E<k;++E){let R=p[E],N=R.start,W=R.count;for(let f=N,y=N+W;f<y;f+=3)m(t.getX(f+0),t.getX(f+1),t.getX(f+2))}let _=new Wt,b=new Wt,S=new Wt,T=new Wt;function C(E){S.fromBufferAttribute(i,E),T.copy(S);let k=a[E];_.copy(k),_.sub(S.multiplyScalar(S.dot(k))).normalize(),b.crossVectors(T,k);let N=b.dot(l[E])<0?-1:1;r.setXYZW(E,_.x,_.y,_.z,N)}for(let E=0,k=p.length;E<k;++E){let R=p[E],N=R.start,W=R.count;for(let f=N,y=N+W;f<y;f+=3)C(t.getX(f+0)),C(t.getX(f+1)),C(t.getX(f+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let o=this.getAttribute("normal");if(o===void 0||o.count!==e.count)o=new si(new Float32Array(e.count*3),3),this.setAttribute("normal",o);else for(let d=0,g=o.count;d<g;d++)o.setXYZ(d,0,0,0);let i=new Wt,s=new Wt,r=new Wt,a=new Wt,l=new Wt,c=new Wt,u=new Wt,h=new Wt;if(t)for(let d=0,g=t.count;d<g;d+=3){let v=t.getX(d+0),w=t.getX(d+1),x=t.getX(d+2);i.fromBufferAttribute(e,v),s.fromBufferAttribute(e,w),r.fromBufferAttribute(e,x),u.subVectors(r,s),h.subVectors(i,s),u.cross(h),a.fromBufferAttribute(o,v),l.fromBufferAttribute(o,w),c.fromBufferAttribute(o,x),a.add(u),l.add(u),c.add(u),o.setXYZ(v,a.x,a.y,a.z),o.setXYZ(w,l.x,l.y,l.z),o.setXYZ(x,c.x,c.y,c.z)}else for(let d=0,g=e.count;d<g;d+=3)i.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),r.fromBufferAttribute(e,d+2),u.subVectors(r,s),h.subVectors(i,s),u.cross(h),o.setXYZ(d+0,u.x,u.y,u.z),o.setXYZ(d+1,u.x,u.y,u.z),o.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),o.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,o=t.count;e<o;e++)Es.fromBufferAttribute(t,e),Es.normalize(),t.setXYZ(e,Es.x,Es.y,Es.z)}toNonIndexed(){function t(a,l){let c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u),g=0,v=0;for(let w=0,x=l.length;w<x;w++){a.isInterleavedBufferAttribute?g=l[w]*a.data.stride+a.offset:g=l[w]*u;for(let m=0;m<u;m++)d[v++]=c[g++]}return new si(d,u,h)}if(this.index===null)return Dn("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,o=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=t(l,o);e.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){let d=c[u],g=t(d,o);l.push(g)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;for(let a=0,l=r.length;a<l;a++){let c=r[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let o=this.attributes;for(let l in o){let c=o[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){let g=c[h];u.push(g.toJSON(t.data))}u.length>0&&(i[l]=u,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let o=t.index;o!==null&&this.setIndex(o.clone());let i=t.attributes;for(let c in i){let u=i[c];this.setAttribute(c,u.clone(e))}let s=t.morphAttributes;for(let c in s){let u=[],h=s[c];for(let d=0,g=h.length;d<g;d++)u.push(h[d].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;let r=t.groups;for(let c=0,u=r.length;c<u;c++){let h=r[c];this.addGroup(h.start,h.count,h.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ll=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=lm,this.updateRanges=[],this.version=0,this.uuid=Fr()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,o){t*=this.stride,o*=e.stride;for(let i=0,s=this.stride;i<s;i++)this.array[t+i]=e.array[o+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Fr()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),o=new this.constructor(e,this.stride);return o.setUsage(this.usage),o}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Fr()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},or=new Wt,G0=class n{constructor(t,e,o,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=o,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,o=this.data.count;e<o;e++)or.fromBufferAttribute(this,e),or.applyMatrix4(t),this.setXYZ(e,or.x,or.y,or.z);return this}applyNormalMatrix(t){for(let e=0,o=this.count;e<o;e++)or.fromBufferAttribute(this,e),or.applyNormalMatrix(t),this.setXYZ(e,or.x,or.y,or.z);return this}transformDirection(t){for(let e=0,o=this.count;e<o;e++)or.fromBufferAttribute(this,e),or.transformDirection(t),this.setXYZ(e,or.x,or.y,or.z);return this}getComponent(t,e){let o=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(o=ir(o,this.array)),o}setComponent(t,e,o){return this.normalized&&(o=zo(o,this.array)),this.data.array[t*this.data.stride+this.offset+e]=o,this}setX(t,e){return this.normalized&&(e=zo(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=zo(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=zo(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=zo(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=ir(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=ir(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=ir(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=ir(e,this.array)),e}setXY(t,e,o){return t=t*this.data.stride+this.offset,this.normalized&&(e=zo(e,this.array),o=zo(o,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=o,this}setXYZ(t,e,o,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=zo(e,this.array),o=zo(o,this.array),i=zo(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=o,this.data.array[t+2]=i,this}setXYZW(t,e,o,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=zo(e,this.array),o=zo(o,this.array),i=zo(i,this.array),s=zo(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=o,this.data.array[t+2]=i,this.data.array[t+3]=s,this}clone(t){if(t===void 0){nf("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let o=0;o<this.count;o++){let i=o*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return new si(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new n(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){nf("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let o=0;o<this.count;o++){let i=o*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},mv=new Wt,vT=new Wt,xT=new Lo,Qr=class{constructor(t=new Wt(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,o,i){return this.normal.set(t,e,o),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,o){let i=mv.subVectors(o,e).cross(vT.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,o=!0){let i=t.delta(mv),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return o===!0&&(r<0||r>1)?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),o=this.distanceToPoint(t.end);return e<0&&o>0||o<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let o=e||xT.getNormalMatrix(t),i=this.coplanarPoint(mv).applyMatrix4(t),s=this.normal.applyMatrix3(o).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},bT=0,fs=class extends _r{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:bT++}),this.uuid=Fr(),this.name="",this.type="Material",this.blending=$c,this.side=Y0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=_g,this.blendDst=Tg,this.blendEquation=Gl,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new In(0,0,0),this.blendAlpha=0,this.depthFunc=Rc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ax,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=td,this.stencilZFail=td,this.stencilZPass=td,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let o=t[e];if(o===void 0){Dn(`Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Dn(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(o):i&&i.isVector2&&o&&o.isVector2||i&&i.isEuler&&o&&o.isEuler||i&&i.isVector3&&o&&o.isVector3?i.copy(o):this[e]=o}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let o={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};o.uuid=this.uuid,o.type=this.type,o.blending=this.blending,o.side=this.side,o.shadowSide=this.shadowSide,o.vertexColors=this.vertexColors,o.opacity=this.opacity,o.transparent=this.transparent,o.blendSrc=this.blendSrc,o.blendDst=this.blendDst,o.blendEquation=this.blendEquation,o.blendSrcAlpha=this.blendSrcAlpha,o.blendDstAlpha=this.blendDstAlpha,o.blendEquationAlpha=this.blendEquationAlpha,o.blendColor=this.blendColor.getHex(),o.blendAlpha=this.blendAlpha,o.depthFunc=this.depthFunc,o.depthTest=this.depthTest,o.depthWrite=this.depthWrite,o.colorWrite=this.colorWrite,o.clipIntersection=this.clipIntersection,o.clipShadows=this.clipShadows,o.stencilWriteMask=this.stencilWriteMask,o.stencilFunc=this.stencilFunc,o.stencilRef=this.stencilRef,o.stencilFuncMask=this.stencilFuncMask,o.stencilFail=this.stencilFail,o.stencilZFail=this.stencilZFail,o.stencilZPass=this.stencilZPass,o.stencilWrite=this.stencilWrite,o.polygonOffset=this.polygonOffset,o.polygonOffsetFactor=this.polygonOffsetFactor,o.polygonOffsetUnits=this.polygonOffsetUnits,o.dithering=this.dithering,o.alphaTest=this.alphaTest,o.alphaHash=this.alphaHash,o.alphaToCoverage=this.alphaToCoverage,o.premultipliedAlpha=this.premultipliedAlpha,o.forceSinglePass=this.forceSinglePass,o.allowOverride=this.allowOverride,o.visible=this.visible,o.toneMapped=this.toneMapped,o.name=this.name,this.color&&this.color.isColor&&(o.color=this.color.getHex()),this.roughness!==void 0&&(o.roughness=this.roughness),this.metalness!==void 0&&(o.metalness=this.metalness),this.sheen!==void 0&&(o.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(o.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(o.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(o.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(o.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(o.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(o.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(o.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(o.shininess=this.shininess),this.clearcoat!==void 0&&(o.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(o.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(o.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(o.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(o.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,o.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(o.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(o.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(o.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(o.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(o.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(o.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(o.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(o.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(o.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(o.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(o.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(o.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(o.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(o.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(o.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(o.lightMap=this.lightMap.toJSON(t).uuid,o.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(o.aoMap=this.aoMap.toJSON(t).uuid,o.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(o.bumpMap=this.bumpMap.toJSON(t).uuid,o.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(o.normalMap=this.normalMap.toJSON(t).uuid,o.normalMapType=this.normalMapType,o.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(o.displacementMap=this.displacementMap.toJSON(t).uuid,o.displacementScale=this.displacementScale,o.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(o.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(o.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(o.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(o.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(o.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(o.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(o.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(o.combine=this.combine)),this.envMapRotation!==void 0&&(o.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(o.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(o.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(o.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(o.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(o.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(o.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(o.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(o.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(o.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(o.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(o.size=this.size),this.sizeAttenuation!==void 0&&(o.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(o.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(o.rotation=this.rotation),this.depthPacking!==void 0&&(o.depthPacking=this.depthPacking),this.linewidth!==void 0&&(o.linewidth=this.linewidth),this.linecap!==void 0&&(o.linecap=this.linecap),this.linejoin!==void 0&&(o.linejoin=this.linejoin),this.dashSize!==void 0&&(o.dashSize=this.dashSize),this.gapSize!==void 0&&(o.gapSize=this.gapSize),this.scale!==void 0&&(o.scale=this.scale),this.wireframe!==void 0&&(o.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(o.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(o.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(o.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(o.flatShading=this.flatShading),this.fog!==void 0&&(o.fog=this.fog),Object.keys(this.userData).length>0&&(o.userData=this.userData);function i(s){let r=[];for(let a in s){let l=s[a];delete l.metadata,r.push(l)}return r}if(e){let s=i(t.textures),r=i(t.images);s.length>0&&(o.textures=s),r.length>0&&(o.images=r)}return o}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new In().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(o=>new Qr().fromJSON(o))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let o=t.normalScale;Array.isArray(o)===!1&&(o=[o,o]),this.normalScale=new ln().fromArray(o)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ln().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,o=null;if(e!==null){let i=e.length;o=new Array(i);for(let s=0;s!==i;++s)o[s]=e[s].clone()}return this.clippingPlanes=o,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},af=class extends fs{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new In(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Ou,Wh=new Wt,Gu=new Wt,zu=new Wt,Vu=new ln,Hh=new ln,VS=new Ao,R1=new Wt,Xh=new Wt,I1=new Wt,YM=new ln,gv=new ln,ZM=new ln,gd=class extends ri{constructor(t=new af){if(super(),this.isSprite=!0,this.type="Sprite",Ou===void 0){Ou=new _o;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),o=new Ll(e,5);Ou.setIndex([0,1,2,0,2,3]),Ou.setAttribute("position",new G0(o,3,0,!1)),Ou.setAttribute("uv",new G0(o,2,3,!1))}this.geometry=Ou,this.material=t,this.center=new ln(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&io('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Gu.setFromMatrixScale(this.matrixWorld),VS.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),zu.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Gu.multiplyScalar(-zu.z);let o=this.material.rotation,i,s;o!==0&&(s=Math.cos(o),i=Math.sin(o));let r=this.center;L1(R1.set(-.5,-.5,0),zu,r,Gu,i,s),L1(Xh.set(.5,-.5,0),zu,r,Gu,i,s),L1(I1.set(.5,.5,0),zu,r,Gu,i,s),YM.set(0,0),gv.set(1,0),ZM.set(1,1);let a=t.ray.intersectTriangle(R1,Xh,I1,!1,Wh);if(a===null&&(L1(Xh.set(-.5,.5,0),zu,r,Gu,i,s),gv.set(0,1),a=t.ray.intersectTriangle(R1,I1,Xh,!1,Wh),a===null))return;let l=t.ray.origin.distanceTo(Wh);l<t.near||l>t.far||e.push({distance:l,point:Wh.clone(),uv:ka.getInterpolation(Wh,R1,Xh,I1,YM,gv,ZM,new ln),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function L1(n,t,e,o,i,s){Vu.subVectors(n,e).addScalar(.5).multiply(o),i!==void 0?(Hh.x=s*Vu.x-i*Vu.y,Hh.y=i*Vu.x+s*Vu.y):Hh.copy(Vu),n.copy(t),n.x+=Hh.x,n.y+=Hh.y,n.applyMatrix4(VS)}var k1=new Wt,JM=new Wt,yd=class extends ri{constructor(){super(),this.isLOD=!0,this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]}}),this.autoUpdate=!0}copy(t){super.copy(t,!1);let e=t.levels;for(let o=0,i=e.length;o<i;o++){let s=e[o];this.addLevel(s.object.clone(),s.distance,s.hysteresis)}return this.autoUpdate=t.autoUpdate,this}addLevel(t,e=0,o=0){e=Math.abs(e);let i=this.levels,s;for(s=0;s<i.length&&!(e<i[s].distance);s++);return i.splice(s,0,{distance:e,hysteresis:o,object:t}),this.add(t),this}removeLevel(t){let e=this.levels;for(let o=0;o<e.length;o++)if(e[o].distance===t){let i=e.splice(o,1);return this.remove(i[0].object),!0}return!1}getCurrentLevel(){return this._currentLevel}getObjectForDistance(t){let e=this.levels;if(e.length>0){let o,i;for(o=1,i=e.length;o<i;o++){let s=e[o].distance;if(e[o].object.visible&&(s-=s*e[o].hysteresis),t<s)break}return e[o-1].object}return null}raycast(t,e){if(this.levels.length>0){k1.setFromMatrixPosition(this.matrixWorld);let i=t.ray.origin.distanceTo(k1);this.getObjectForDistance(i).raycast(t,e)}}update(t){let e=this.levels;if(e.length>1){k1.setFromMatrixPosition(t.matrixWorld),JM.setFromMatrixPosition(this.matrixWorld);let o=k1.distanceTo(JM)/t.zoom;e[0].object.visible=!0;let i,s;for(i=1,s=e.length;i<s;i++){let r=e[i].distance;if(e[i].object.visible&&(r-=r*e[i].hysteresis),o>=r)e[i-1].object.visible=!1,e[i].object.visible=!0;else break}for(this._currentLevel=i-1;i<s;i++)e[i].object.visible=!1}}toJSON(t){let e=super.toJSON(t);e.object.autoUpdate=this.autoUpdate,e.object.levels=[];let o=this.levels;for(let i=0,s=o.length;i<s;i++){let r=o[i];e.object.levels.push({object:r.object.uuid,distance:r.distance,hysteresis:r.hysteresis})}return e}},U0=new Wt,yv=new Wt,D1=new Wt,B1=new Wt,z0=class{constructor(t=new Wt,e=new Wt(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,U0)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let o=e.dot(this.direction);return o<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,o)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=U0.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(U0.copy(this.origin).addScaledVector(this.direction,e),U0.distanceToSquared(t))}distanceSqToSegment(t,e,o,i){yv.copy(t).add(e).multiplyScalar(.5),D1.copy(e).sub(t).normalize(),B1.copy(this.origin).sub(yv);let s=t.distanceTo(e)*.5,r=-this.direction.dot(D1),a=B1.dot(this.direction),l=-B1.dot(D1),c=B1.lengthSq(),u=Math.abs(1-r*r),h,d,g,v;if(u>0)if(h=r*l-a,d=r*a-l,v=s*u,h>=0)if(d>=-v)if(d<=v){let w=1/u;h*=w,d*=w,g=h*(h+r*d+2*a)+d*(r*h+d+2*l)+c}else d=s,h=Math.max(0,-(r*d+a)),g=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(r*d+a)),g=-h*h+d*(d+2*l)+c;else d<=-v?(h=Math.max(0,-(-r*s+a)),d=h>0?-s:Math.min(Math.max(-s,-l),s),g=-h*h+d*(d+2*l)+c):d<=v?(h=0,d=Math.min(Math.max(-s,-l),s),g=d*(d+2*l)+c):(h=Math.max(0,-(r*s+a)),d=h>0?s:Math.min(Math.max(-s,-l),s),g=-h*h+d*(d+2*l)+c);else d=r>0?-s:s,h=Math.max(0,-(r*d+a)),g=-h*h+d*(d+2*l)+c;return o&&o.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(yv).addScaledVector(D1,d),g}intersectSphere(t,e){if(t.radius<0)return null;U0.subVectors(t.center,this.origin);let o=U0.dot(this.direction),i=U0.dot(U0)-o*o,s=t.radius*t.radius;if(i>s)return null;let r=Math.sqrt(s-i),a=o-r,l=o+r;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let o=-(this.origin.dot(t.normal)+t.constant)/e;return o>=0?o:null}intersectPlane(t,e){let o=this.distanceToPlane(t);return o===null?null:this.at(o,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let o,i,s,r,a,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(o=(t.min.x-d.x)*c,i=(t.max.x-d.x)*c):(o=(t.max.x-d.x)*c,i=(t.min.x-d.x)*c),u>=0?(s=(t.min.y-d.y)*u,r=(t.max.y-d.y)*u):(s=(t.max.y-d.y)*u,r=(t.min.y-d.y)*u),o>r||s>i||((s>o||isNaN(o))&&(o=s),(r<i||isNaN(i))&&(i=r),h>=0?(a=(t.min.z-d.z)*h,l=(t.max.z-d.z)*h):(a=(t.max.z-d.z)*h,l=(t.min.z-d.z)*h),o>l||a>i)||((a>o||o!==o)&&(o=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(o>=0?o:i,e)}intersectsBox(t){return this.intersectBox(t,U0)!==null}intersectTriangle(t,e,o,i,s){let r=this.origin,a=this.direction,l=a.x,c=a.y,u=a.z,h=t.x-r.x,d=t.y-r.y,g=t.z-r.z,v=e.x-r.x,w=e.y-r.y,x=e.z-r.z,m=o.x-r.x,p=o.y-r.y,_=o.z-r.z,b=Math.abs(l),S=Math.abs(c),T=Math.abs(u),C,E,k,R,N,W,f,y,U,D,G,$;if(b>=S&&b>=T?(k=l,W=h,U=v,$=m,l>=0?(C=c,E=u,R=d,N=g,f=w,y=x,D=p,G=_):(C=u,E=c,R=g,N=d,f=x,y=w,D=_,G=p)):S>=T?(k=c,W=d,U=w,$=p,c>=0?(C=u,E=l,R=g,N=h,f=x,y=v,D=_,G=m):(C=l,E=u,R=h,N=g,f=v,y=x,D=m,G=_)):(k=u,W=g,U=x,$=_,u>=0?(C=l,E=c,R=h,N=d,f=v,y=w,D=m,G=p):(C=c,E=l,R=d,N=h,f=w,y=v,D=p,G=m)),k===0)return null;let tt=C/k,ut=E/k,At=1/k,Bt=R-tt*W,be=N-ut*W,Ce=f-tt*U,Be=y-ut*U,Ee=D-tt*$,oe=G-ut*$,he=Ee*Be-oe*Ce,xe=Bt*oe-be*Ee,B=Ce*be-Be*Bt;if(i){if(he<0||xe<0||B<0)return null}else if((he<0||xe<0||B<0)&&(he>0||xe>0||B>0))return null;let it=he+xe+B;if(it===0)return null;let ct=At*(he*W+xe*U+B*$);return(it>0?ct<0:ct>0)?null:this.at(ct/it,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Or=class extends fs{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new In(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new oa,this.combine=If,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},jM=new Ao,xc=new z0,U1=new us,KM=new Wt,N1=new Wt,F1=new Wt,O1=new Wt,vv=new Wt,G1=new Wt,QM=new Wt,z1=new Wt,yi=class extends ri{constructor(t=new _o,e=new Or){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,o=Object.keys(e);if(o.length>0){let i=e[o[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){let o=this.geometry,i=o.attributes.position,s=o.morphAttributes.position,r=o.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(s&&a){G1.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let u=a[l],h=s[l];u!==0&&(vv.fromBufferAttribute(h,t),r?G1.addScaledVector(vv,u):G1.addScaledVector(vv.sub(e),u))}e.add(G1)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let o=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(o.boundingSphere===null&&o.computeBoundingSphere(),U1.copy(o.boundingSphere),U1.applyMatrix4(s),xc.copy(t.ray).recast(t.near),!(U1.containsPoint(xc.origin)===!1&&(xc.intersectSphere(U1,KM)===null||xc.origin.distanceToSquared(KM)>(t.far-t.near)**2))&&(jM.copy(s).invert(),xc.copy(t.ray).applyMatrix4(jM),!(o.boundingBox!==null&&xc.intersectsBox(o.boundingBox)===!1)&&this._computeIntersections(t,e,xc)))}_computeIntersections(t,e,o){let i,s=this.geometry,r=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,g=s.drawRange;if(a!==null)if(Array.isArray(r))for(let v=0,w=d.length;v<w;v++){let x=d[v],m=r[x.materialIndex],p=Math.max(x.start,g.start),_=Math.min(a.count,Math.min(x.start+x.count,g.start+g.count));for(let b=p,S=_;b<S;b+=3){let T=a.getX(b),C=a.getX(b+1),E=a.getX(b+2);i=V1(this,m,t,o,c,u,h,T,C,E),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=x.materialIndex,e.push(i))}}else{let v=Math.max(0,g.start),w=Math.min(a.count,g.start+g.count);for(let x=v,m=w;x<m;x+=3){let p=a.getX(x),_=a.getX(x+1),b=a.getX(x+2);i=V1(this,r,t,o,c,u,h,p,_,b),i&&(i.faceIndex=Math.floor(x/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(r))for(let v=0,w=d.length;v<w;v++){let x=d[v],m=r[x.materialIndex],p=Math.max(x.start,g.start),_=Math.min(l.count,Math.min(x.start+x.count,g.start+g.count));for(let b=p,S=_;b<S;b+=3){let T=b,C=b+1,E=b+2;i=V1(this,m,t,o,c,u,h,T,C,E),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=x.materialIndex,e.push(i))}}else{let v=Math.max(0,g.start),w=Math.min(l.count,g.start+g.count);for(let x=v,m=w;x<m;x+=3){let p=x,_=x+1,b=x+2;i=V1(this,r,t,o,c,u,h,p,_,b),i&&(i.faceIndex=Math.floor(x/3),e.push(i))}}}};function MT(n,t,e,o,i,s,r,a){let l;if(t.side===Xs?l=o.intersectTriangle(r,s,i,!0,a):l=o.intersectTriangle(i,s,r,t.side===Y0,a),l===null)return null;z1.copy(a),z1.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(z1);return c<e.near||c>e.far?null:{distance:c,point:z1.clone(),object:n}}function V1(n,t,e,o,i,s,r,a,l,c){n.getVertexPosition(a,N1),n.getVertexPosition(l,F1),n.getVertexPosition(c,O1);let u=MT(n,t,e,o,N1,F1,O1,QM);if(u){let h=new Wt;ka.getBarycoord(QM,N1,F1,O1,h),i&&(u.uv=ka.getInterpolatedAttribute(i,a,l,c,h,new ln)),s&&(u.uv1=ka.getInterpolatedAttribute(s,a,l,c,h,new ln)),r&&(u.normal=ka.getInterpolatedAttribute(r,a,l,c,h,new Wt),u.normal.dot(o.direction)>0&&u.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new Wt,materialIndex:0};ka.getNormal(N1,F1,O1,d.normal),u.face=d,u.barycoord=h}return u}var qh=new mi,t3=new mi,e3=new mi,ST=new mi,n3=new Ao,W1=new Wt,xv=new us,o3=new Ao,bv=new z0,vd=class extends yi{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=h2,this.bindMatrix=new Ao,this.bindMatrixInverse=new Ao,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let t=this.geometry;this.boundingBox===null&&(this.boundingBox=new ys),this.boundingBox.makeEmpty();let e=t.getAttribute("position");for(let o=0;o<e.count;o++)this.getVertexPosition(o,W1),this.boundingBox.expandByPoint(W1)}computeBoundingSphere(){let t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new us),this.boundingSphere.makeEmpty();let e=t.getAttribute("position");for(let o=0;o<e.count;o++)this.getVertexPosition(o,W1),this.boundingSphere.expandByPoint(W1)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){let o=this.material,i=this.matrixWorld;o!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),xv.copy(this.boundingSphere),xv.applyMatrix4(i),t.ray.intersectsSphere(xv)!==!1&&(o3.copy(i).invert(),bv.copy(t.ray).applyMatrix4(o3),!(this.boundingBox!==null&&bv.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,bv)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let t=new mi,e=this.geometry.attributes.skinWeight;for(let o=0,i=e.count;o<i;o++){t.fromBufferAttribute(e,o);let s=1/t.manhattanLength();s!==1/0?t.multiplyScalar(s):t.set(1,0,0,0),e.setXYZW(o,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===h2?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===yx?this.bindMatrixInverse.copy(this.bindMatrix).invert():Dn("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){let o=this.skeleton,i=this.geometry;t3.fromBufferAttribute(i.attributes.skinIndex,t),e3.fromBufferAttribute(i.attributes.skinWeight,t),e.isVector4?(qh.copy(e),e.set(0,0,0,0)):(qh.set(...e,1),e.set(0,0,0)),qh.applyMatrix4(this.bindMatrix);for(let s=0;s<4;s++){let r=e3.getComponent(s);if(r!==0){let a=t3.getComponent(s);n3.multiplyMatrices(o.bones[a].matrixWorld,o.boneInverses[a]),e.addScaledVector(ST.copy(qh).applyMatrix4(n3),r)}}return e.isVector4&&(e.w=qh.w),e.applyMatrix4(this.bindMatrixInverse)}},lf=class extends ri{constructor(){super(),this.isBone=!0,this.type="Bone"}},rr=class extends $i{constructor(t=null,e=1,o=1,i,s,r,a,l,c=qi,u=qi,h,d){super(null,r,a,l,c,u,i,s,h,d),this.isDataTexture=!0,this.image={data:t,width:e,height:o},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},i3=new Ao,wT=new Ao,xd=class n{constructor(t=[],e=[]){this.uuid=Fr(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){Dn("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let o=0,i=this.bones.length;o<i;o++)this.boneInverses.push(new Ao)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){let o=new Ao;this.bones[t]&&o.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(o)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){let o=this.bones[t];o&&o.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){let o=this.bones[t];o&&(o.parent&&o.parent.isBone?(o.matrix.copy(o.parent.matrixWorld).invert(),o.matrix.multiply(o.matrixWorld)):o.matrix.copy(o.matrixWorld),o.matrix.decompose(o.position,o.quaternion,o.scale))}}update(){let t=this.bones,e=this.boneInverses,o=this.boneMatrices,i=this.boneTexture;for(let s=0,r=t.length;s<r;s++){let a=t[s]?t[s].matrixWorld:wT;i3.multiplyMatrices(a,e[s]),i3.toArray(o,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new n(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);let e=new Float32Array(t*t*4);e.set(this.boneMatrices);let o=new rr(e,t,t,Hs,Ws);return o.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=o,this}getBoneByName(t){for(let e=0,o=this.bones.length;e<o;e++){let i=this.bones[e];if(i.name===t)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let o=0,i=t.bones.length;o<i;o++){let s=t.bones[o],r=e[s];r===void 0&&(Dn("Skeleton: No bone found with UUID:",s),r=new lf),this.bones.push(r),this.boneInverses.push(new Ao().fromArray(t.boneInverses[o]))}return this.init(),this}toJSON(){let t={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;let e=this.bones,o=this.boneInverses;for(let i=0,s=e.length;i<s;i++){let r=e[i];t.bones.push(r.uuid);let a=o[i];t.boneInverses.push(a.toArray())}return t}},a0=class extends si{constructor(t,e,o,i=1){super(t,e,o),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Wu=new Ao,s3=new Ao,H1=[],r3=new ys,_T=new Ao,$h=new yi,Yh=new us,bd=class extends yi{constructor(t,e,o){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new a0(new Float32Array(o*16),16),this.instanceColor=null,this.morphTexture=null,this.count=o,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<o;i++)this.setMatrixAt(i,_T)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ys),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let o=0;o<e;o++)this.getMatrixAt(o,Wu),r3.copy(t.boundingBox).applyMatrix4(Wu),this.boundingBox.union(r3)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new us),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let o=0;o<e;o++)this.getMatrixAt(o,Wu),Yh.copy(t.boundingSphere).applyMatrix4(Wu),this.boundingSphere.union(Yh)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let o=e.morphTargetInfluences,i=this.morphTexture.source.data.data,s=o.length+1,r=t*s+1;for(let a=0;a<o.length;a++)o[a]=i[r+a]}raycast(t,e){let o=this.matrixWorld,i=this.count;if($h.geometry=this.geometry,$h.material=this.material,$h.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Yh.copy(this.boundingSphere),Yh.applyMatrix4(o),t.ray.intersectsSphere(Yh)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Wu),s3.multiplyMatrices(o,Wu),$h.matrixWorld=s3,$h.raycast(t,H1);for(let r=0,a=H1.length;r<a;r++){let l=H1[r];l.instanceId=s,l.object=this,e.push(l)}H1.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new a0(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let o=e.morphTargetInfluences,i=o.length+1;this.morphTexture===null&&(this.morphTexture=new rr(new Float32Array(i*this.count),i,this.count,Ap,Ws));let s=this.morphTexture.source.data.data,r=0;for(let c=0;c<o.length;c++)r+=o[c];let a=this.geometry.morphTargetsRelative?1:1-r,l=i*t;return s[l]=a,s.set(o,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},bc=new us,TT=new ln(.5,.5),X1=new Wt,l0=class{constructor(t=new Qr,e=new Qr,o=new Qr,i=new Qr,s=new Qr,r=new Qr){this.planes=[t,e,o,i,s,r]}set(t,e,o,i,s,r){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(o),a[3].copy(i),a[4].copy(s),a[5].copy(r),this}copy(t){let e=this.planes;for(let o=0;o<6;o++)e[o].copy(t.planes[o]);return this}setFromProjectionMatrix(t,e=wr,o=!1){let i=this.planes,s=t.elements,r=s[0],a=s[1],l=s[2],c=s[3],u=s[4],h=s[5],d=s[6],g=s[7],v=s[8],w=s[9],x=s[10],m=s[11],p=s[12],_=s[13],b=s[14],S=s[15];if(i[0].setComponents(c-r,g-u,m-v,S-p).normalize(),i[1].setComponents(c+r,g+u,m+v,S+p).normalize(),i[2].setComponents(c+a,g+h,m+w,S+_).normalize(),i[3].setComponents(c-a,g-h,m-w,S-_).normalize(),o)i[4].setComponents(l,d,x,b).normalize(),i[5].setComponents(c-l,g-d,m-x,S-b).normalize();else if(i[4].setComponents(c-l,g-d,m-x,S-b).normalize(),e===wr)i[5].setComponents(c+l,g+d,m+x,S+b).normalize();else if(e===Rl)i[5].setComponents(l,d,x,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),bc.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),bc.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(bc)}intersectsSprite(t){bc.center.set(0,0,0);let e=TT.distanceTo(t.center);return bc.radius=.7071067811865476+e,bc.applyMatrix4(t.matrixWorld),this.intersectsSphere(bc)}intersectsSphere(t){let e=this.planes,o=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(o)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let o=0;o<6;o++){let i=e[o];if(X1.x=i.normal.x>0?t.max.x:t.min.x,X1.y=i.normal.y>0?t.max.y:t.min.y,X1.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(X1)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let o=0;o<6;o++)if(e[o].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},a3=new Ao,Md=class n{constructor(){this.coordinateSystem=wr,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,o=this._frustums;for(let i=0;i<e.length;i++){let s=e[i];a3.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),o[i]===void 0&&(o[i]=new l0),o[i].setFromProjectionMatrix(a3,s.coordinateSystem,s.reversedDepth)}return this._count=e.length,this}intersectsObject(t){let e=this._frustums;for(let o=0;o<this._count;o++)if(e[o].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let o=0;o<this._count;o++)if(e[o].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let o=0;o<this._count;o++)if(e[o].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let o=0;o<this._count;o++)if(e[o].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let o=0;o<this._count;o++)if(e[o].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,o=t._frustums;for(let i=0;i<t._count;i++)e[i]===void 0&&(e[i]=new l0),e[i].copy(o[i]);return this._count=t._count,this}clone(){return new n().copy(this)}};function Mv(n,t){return n-t}function AT(n,t){return n.z-t.z}function CT(n,t){return t.z-n.z}var Bv=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(t,e,o,i){let s=this.pool,r=this.list;this.index>=s.length&&s.push({start:-1,count:-1,z:-1,index:-1});let a=s[this.index];r.push(a),this.index++,a.start=t,a.count=e,a.z=o,a.index=i}reset(){this.list.length=0,this.index=0}},Mr=new Ao,ET=new In(1,1,1),PT=new l0,RT=new Md,q1=new ys,Mc=new us,Zh=new Wt,l3=new Wt,IT=new Wt,Sv=new Bv,Vs=new yi,$1=[];function LT(n,t,e=0){let o=t.itemSize;if(n.isInterleavedBufferAttribute||n.array.constructor!==t.array.constructor){let i=n.count;for(let s=0;s<i;s++)for(let r=0;r<o;r++)t.setComponent(s+e,r,n.getComponent(s,r))}else t.array.set(n.array,e*o);t.needsUpdate=!0}function Sc(n,t){if(n.constructor!==t.constructor){let e=Math.min(n.length,t.length);for(let o=0;o<e;o++)t[o]=n[o]}else{let e=Math.min(n.length,t.length);t.set(new n.constructor(n.buffer,0,e))}}var Sd=class extends yi{constructor(t,e,o=e*2,i){super(new _o,i),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._instanceInfo=[],this._geometryInfo=[],this._availableInstanceIds=[],this._availableGeometryIds=[],this._nextIndexStart=0,this._nextVertexStart=0,this._geometryCount=0,this._visibilityChanged=!0,this._geometryInitialized=!1,this._maxInstanceCount=t,this._maxVertexCount=e,this._maxIndexCount=o,this._multiDrawCounts=new Int32Array(t),this._multiDrawStarts=new Int32Array(t),this._multiDrawCount=0,this._multiDrawBytesPerElement=1,this._matricesTexture=null,this._indirectTexture=null,this._colorsTexture=null,this._initMatricesTexture(),this._initIndirectTexture()}get maxInstanceCount(){return this._maxInstanceCount}get instanceCount(){return this._instanceInfo.length-this._availableInstanceIds.length}get unusedVertexCount(){return this._maxVertexCount-this._nextVertexStart}get unusedIndexCount(){return this._maxIndexCount-this._nextIndexStart}_initMatricesTexture(){let t=Math.sqrt(this._maxInstanceCount*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);let e=new Float32Array(t*t*4),o=new rr(e,t,t,Hs,Ws);this._matricesTexture=o}_initIndirectTexture(){let t=Math.sqrt(this._maxInstanceCount);t=Math.ceil(t);let e=new Uint32Array(t*t),o=new rr(e,t,t,Uf,Vr);this._indirectTexture=o}_initColorsTexture(){let t=Math.sqrt(this._maxInstanceCount);t=Math.ceil(t);let e=new Float32Array(t*t*4).fill(1),o=new rr(e,t,t,Hs,Ws);o.colorSpace=jo.workingColorSpace,this._colorsTexture=o}_initializeGeometry(t){let e=this.geometry,o=this._maxVertexCount,i=this._maxIndexCount;if(this._geometryInitialized===!1){for(let s in t.attributes){let r=t.getAttribute(s),{array:a,itemSize:l,normalized:c}=r,u=new a.constructor(o*l),h=new si(u,l,c);e.setAttribute(s,h)}if(t.getIndex()!==null){let s=o>65535?new Uint32Array(i):new Uint16Array(i);e.setIndex(new si(s,1))}this._geometryInitialized=!0}}_validateGeometry(t){let e=this.geometry;if(!!t.getIndex()!=!!e.getIndex())throw new Error('THREE.BatchedMesh: All geometries must consistently have "index".');for(let o in e.attributes){if(!t.hasAttribute(o))throw new Error(`THREE.BatchedMesh: Added geometry missing "${o}". All geometries must have consistent attributes.`);let i=t.getAttribute(o),s=e.getAttribute(o);if(i.itemSize!==s.itemSize||i.normalized!==s.normalized)throw new Error("THREE.BatchedMesh: All attributes must have a consistent itemSize and normalized value.")}}validateInstanceId(t){let e=this._instanceInfo;if(t<0||t>=e.length||e[t].active===!1)throw new Error(`THREE.BatchedMesh: Invalid instanceId ${t}. Instance is either out of range or has been deleted.`)}validateGeometryId(t){let e=this._geometryInfo;if(t<0||t>=e.length||e[t].active===!1)throw new Error(`THREE.BatchedMesh: Invalid geometryId ${t}. Geometry is either out of range or has been deleted.`)}setCustomSort(t){return this.customSort=t,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ys);let t=this.boundingBox,e=this._instanceInfo;t.makeEmpty();for(let o=0,i=e.length;o<i;o++){if(e[o].active===!1)continue;let s=e[o].geometryIndex;this.getMatrixAt(o,Mr),this.getBoundingBoxAt(s,q1).applyMatrix4(Mr),t.union(q1)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new us);let t=this.boundingSphere,e=this._instanceInfo;t.makeEmpty();for(let o=0,i=e.length;o<i;o++){if(e[o].active===!1)continue;let s=e[o].geometryIndex;this.getMatrixAt(o,Mr),this.getBoundingSphereAt(s,Mc).applyMatrix4(Mr),t.union(Mc)}}addInstance(t){if(this._instanceInfo.length>=this.maxInstanceCount&&this._availableInstanceIds.length===0)throw new Error("THREE.BatchedMesh: Maximum item count reached.");let o={visible:!0,active:!0,geometryIndex:t},i=null;this._availableInstanceIds.length>0?(this._availableInstanceIds.sort(Mv),i=this._availableInstanceIds.shift(),this._instanceInfo[i]=o):(i=this._instanceInfo.length,this._instanceInfo.push(o));let s=this._matricesTexture;Mr.identity().toArray(s.image.data,i*16),s.needsUpdate=!0;let r=this._colorsTexture;return r&&(ET.toArray(r.image.data,i*4),r.needsUpdate=!0),this._visibilityChanged=!0,i}addGeometry(t,e=-1,o=-1){this._initializeGeometry(t),this._validateGeometry(t);let i={vertexStart:-1,vertexCount:-1,reservedVertexCount:-1,indexStart:-1,indexCount:-1,reservedIndexCount:-1,start:-1,count:-1,boundingBox:null,boundingSphere:null,active:!0},s=this._geometryInfo;i.vertexStart=this._nextVertexStart,i.reservedVertexCount=e===-1?t.getAttribute("position").count:e;let r=t.getIndex();if(r!==null&&(i.indexStart=this._nextIndexStart,i.reservedIndexCount=o===-1?r.count:o),i.indexStart!==-1&&i.indexStart+i.reservedIndexCount>this._maxIndexCount||i.vertexStart+i.reservedVertexCount>this._maxVertexCount)throw new Error("THREE.BatchedMesh: Reserved space request exceeds the maximum buffer size.");let l;return this._availableGeometryIds.length>0?(this._availableGeometryIds.sort(Mv),l=this._availableGeometryIds.shift(),s[l]=i):(l=this._geometryCount,this._geometryCount++,s.push(i)),this.setGeometryAt(l,t),this._nextIndexStart=i.indexStart+i.reservedIndexCount,this._nextVertexStart=i.vertexStart+i.reservedVertexCount,l}setGeometryAt(t,e){if(t>=this._geometryCount)throw new Error("THREE.BatchedMesh: Maximum geometry count reached.");this._validateGeometry(e);let o=this.geometry,i=o.getIndex()!==null,s=o.getIndex(),r=e.getIndex(),a=this._geometryInfo[t];if(i&&r.count>a.reservedIndexCount||e.attributes.position.count>a.reservedVertexCount)throw new Error("THREE.BatchedMesh: Reserved space not large enough for provided geometry.");let l=a.vertexStart,c=a.reservedVertexCount;a.vertexCount=e.getAttribute("position").count;for(let u in o.attributes){let h=e.getAttribute(u),d=o.getAttribute(u);LT(h,d,l);let g=h.itemSize;for(let v=h.count,w=c;v<w;v++){let x=l+v;for(let m=0;m<g;m++)d.setComponent(x,m,0)}d.needsUpdate=!0,d.addUpdateRange(l*g,c*g)}if(i){let u=a.indexStart,h=a.reservedIndexCount;a.indexCount=e.getIndex().count;for(let d=0;d<r.count;d++)s.setX(u+d,l+r.getX(d));for(let d=r.count,g=h;d<g;d++)s.setX(u+d,l);s.needsUpdate=!0,s.addUpdateRange(u,a.reservedIndexCount)}return a.start=i?a.indexStart:a.vertexStart,a.count=i?a.indexCount:a.vertexCount,a.boundingBox=null,e.boundingBox!==null&&(a.boundingBox=e.boundingBox.clone()),a.boundingSphere=null,e.boundingSphere!==null&&(a.boundingSphere=e.boundingSphere.clone()),this._visibilityChanged=!0,t}deleteGeometry(t){let e=this._geometryInfo;if(t>=e.length||e[t].active===!1)return this;let o=this._instanceInfo;for(let i=0,s=o.length;i<s;i++)o[i].active&&o[i].geometryIndex===t&&this.deleteInstance(i);return e[t].active=!1,this._availableGeometryIds.push(t),this._visibilityChanged=!0,this}deleteInstance(t){return this.validateInstanceId(t),this._instanceInfo[t].active=!1,this._availableInstanceIds.push(t),this._visibilityChanged=!0,this}optimize(){let t=0,e=0,o=this._geometryInfo,i=o.map((r,a)=>a).sort((r,a)=>o[r].vertexStart-o[a].vertexStart),s=this.geometry;for(let r=0,a=o.length;r<a;r++){let l=i[r],c=o[l];if(c.active!==!1){if(s.index!==null){if(c.indexStart!==e){let{indexStart:u,vertexStart:h,reservedIndexCount:d}=c,g=s.index,v=g.array,w=t-h;for(let x=u;x<u+d;x++)v[x]=v[x]+w;g.array.copyWithin(e,u,u+d),g.addUpdateRange(e,d),g.needsUpdate=!0,c.indexStart=e}e+=c.reservedIndexCount}if(c.vertexStart!==t){let{vertexStart:u,reservedVertexCount:h}=c,d=s.attributes;for(let g in d){let v=d[g],{array:w,itemSize:x}=v;w.copyWithin(t*x,u*x,(u+h)*x),v.addUpdateRange(t*x,h*x),v.needsUpdate=!0}c.vertexStart=t}t+=c.reservedVertexCount,c.start=s.index?c.indexStart:c.vertexStart}}return this._nextIndexStart=e,this._nextVertexStart=t,this._visibilityChanged=!0,this}getBoundingBoxAt(t,e){if(t>=this._geometryCount)return null;let o=this.geometry,i=this._geometryInfo[t];if(i.boundingBox===null){let s=new ys,r=o.index,a=o.attributes.position;for(let l=i.start,c=i.start+i.count;l<c;l++){let u=l;r&&(u=r.getX(u)),s.expandByPoint(Zh.fromBufferAttribute(a,u))}i.boundingBox=s}return e.copy(i.boundingBox),e}getBoundingSphereAt(t,e){if(t>=this._geometryCount)return null;let o=this.geometry,i=this._geometryInfo[t];if(i.boundingSphere===null){let s=new us;this.getBoundingBoxAt(t,q1),q1.getCenter(s.center);let r=o.index,a=o.attributes.position,l=0;for(let c=i.start,u=i.start+i.count;c<u;c++){let h=c;r&&(h=r.getX(h)),Zh.fromBufferAttribute(a,h),l=Math.max(l,s.center.distanceToSquared(Zh))}s.radius=Math.sqrt(l),i.boundingSphere=s}return e.copy(i.boundingSphere),e}setMatrixAt(t,e){this.validateInstanceId(t);let o=this._matricesTexture,i=this._matricesTexture.image.data;return e.toArray(i,t*16),o.needsUpdate=!0,this}getMatrixAt(t,e){return this.validateInstanceId(t),e.fromArray(this._matricesTexture.image.data,t*16)}setColorAt(t,e){return this.validateInstanceId(t),this._colorsTexture===null&&this._initColorsTexture(),e.toArray(this._colorsTexture.image.data,t*4),this._colorsTexture.needsUpdate=!0,this}getColorAt(t,e){return this.validateInstanceId(t),this._colorsTexture===null?e.isVector4?e.set(1,1,1,1):e.setRGB(1,1,1):e.fromArray(this._colorsTexture.image.data,t*4)}setVisibleAt(t,e){return this.validateInstanceId(t),this._instanceInfo[t].visible===e?this:(this._instanceInfo[t].visible=e,this._visibilityChanged=!0,this)}getVisibleAt(t){return this.validateInstanceId(t),this._instanceInfo[t].visible}setGeometryIdAt(t,e){return this.validateInstanceId(t),this.validateGeometryId(e),this._instanceInfo[t].geometryIndex=e,this._visibilityChanged=!0,this}getGeometryIdAt(t){return this.validateInstanceId(t),this._instanceInfo[t].geometryIndex}getGeometryRangeAt(t,e={}){this.validateGeometryId(t);let o=this._geometryInfo[t];return e.vertexStart=o.vertexStart,e.vertexCount=o.vertexCount,e.reservedVertexCount=o.reservedVertexCount,e.indexStart=o.indexStart,e.indexCount=o.indexCount,e.reservedIndexCount=o.reservedIndexCount,e.start=o.start,e.count=o.count,e}setInstanceCount(t){let e=this._availableInstanceIds,o=this._instanceInfo;for(e.sort(Mv);e[e.length-1]===o.length-1;)o.pop(),e.pop();if(t<o.length)throw new Error(`THREE.BatchedMesh: Instance ids outside the range ${t} are being used. Cannot shrink instance count.`);let i=new Int32Array(t),s=new Int32Array(t);Sc(this._multiDrawCounts,i),Sc(this._multiDrawStarts,s),this._multiDrawCounts=i,this._multiDrawStarts=s,this._maxInstanceCount=t;let r=this._indirectTexture,a=this._matricesTexture,l=this._colorsTexture;r.dispose(),this._initIndirectTexture(),Sc(r.image.data,this._indirectTexture.image.data),a.dispose(),this._initMatricesTexture(),Sc(a.image.data,this._matricesTexture.image.data),l&&(l.dispose(),this._initColorsTexture(),Sc(l.image.data,this._colorsTexture.image.data))}setGeometrySize(t,e){let o=[...this._geometryInfo].filter(a=>a.active);if(Math.max(...o.map(a=>a.vertexStart+a.reservedVertexCount))>t)throw new Error(`THREE.BatchedMesh: Geometry vertex values are being used outside the range ${e}. Cannot shrink further.`);if(this.geometry.index&&Math.max(...o.map(l=>l.indexStart+l.reservedIndexCount))>e)throw new Error(`THREE.BatchedMesh: Geometry index values are being used outside the range ${e}. Cannot shrink further.`);let s=this.geometry;s.dispose(),this._maxVertexCount=t,this._maxIndexCount=e,this._geometryInitialized&&(this._geometryInitialized=!1,this.geometry=new _o,this._initializeGeometry(s));let r=this.geometry;s.index&&Sc(s.index.array,r.index.array);for(let a in s.attributes)Sc(s.attributes[a].array,r.attributes[a].array)}raycast(t,e){let o=this._instanceInfo,i=this._geometryInfo,s=this.matrixWorld,r=this.geometry;Vs.material=this.material,Vs.geometry.index=r.index,Vs.geometry.attributes=r.attributes,Vs.geometry.boundingBox===null&&(Vs.geometry.boundingBox=new ys),Vs.geometry.boundingSphere===null&&(Vs.geometry.boundingSphere=new us);for(let a=0,l=o.length;a<l;a++){if(!o[a].visible||!o[a].active)continue;let c=o[a].geometryIndex,u=i[c];Vs.geometry.setDrawRange(u.start,u.count),this.getMatrixAt(a,Vs.matrixWorld).premultiply(s),this.getBoundingBoxAt(c,Vs.geometry.boundingBox),this.getBoundingSphereAt(c,Vs.geometry.boundingSphere),Vs.raycast(t,$1);for(let h=0,d=$1.length;h<d;h++){let g=$1[h];g.object=this,g.batchId=a,e.push(g)}$1.length=0}Vs.material=null,Vs.geometry.index=null,Vs.geometry.attributes={},Vs.geometry.setDrawRange(0,1/0)}copy(t){return super.copy(t),this.geometry=t.geometry.clone(),this.perObjectFrustumCulled=t.perObjectFrustumCulled,this.sortObjects=t.sortObjects,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this._geometryInfo=t._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox!==null?e.boundingBox.clone():null,boundingSphere:e.boundingSphere!==null?e.boundingSphere.clone():null})),this._instanceInfo=t._instanceInfo.map(e=>({...e})),this._availableInstanceIds=t._availableInstanceIds.slice(),this._availableGeometryIds=t._availableGeometryIds.slice(),this._nextIndexStart=t._nextIndexStart,this._nextVertexStart=t._nextVertexStart,this._geometryCount=t._geometryCount,this._maxInstanceCount=t._maxInstanceCount,this._maxVertexCount=t._maxVertexCount,this._maxIndexCount=t._maxIndexCount,this._geometryInitialized=t._geometryInitialized,this._multiDrawCounts=t._multiDrawCounts.slice(),this._multiDrawStarts=t._multiDrawStarts.slice(),this._multiDrawBytesPerElement=t._multiDrawBytesPerElement,this._indirectTexture=t._indirectTexture.clone(),this._indirectTexture.image.data=this._indirectTexture.image.data.slice(),this._matricesTexture=t._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.data.slice(),this._colorsTexture!==null&&(this._colorsTexture=t._colorsTexture.clone(),this._colorsTexture.image.data=this._colorsTexture.image.data.slice()),this}dispose(){super.dispose(),this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this._indirectTexture.dispose(),this._indirectTexture=null,this._colorsTexture!==null&&(this._colorsTexture.dispose(),this._colorsTexture=null)}onBeforeRender(t,e,o,i,s){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;let r=i.getIndex(),a=r===null?1:r.array.BYTES_PER_ELEMENT,l=1;s.wireframe&&(l=2,a=i.attributes.position.count>65535?4:2);let c=this._instanceInfo,u=this._multiDrawStarts,h=this._multiDrawCounts,d=this._geometryInfo,g=this.perObjectFrustumCulled,v=this._indirectTexture,w=v.image.data,x=o.isArrayCamera?RT:PT;g&&(o.isArrayCamera?x.setFromArrayCamera(o):(Mr.multiplyMatrices(o.projectionMatrix,o.matrixWorldInverse).multiply(this.matrixWorld),x.setFromProjectionMatrix(Mr,o.coordinateSystem,o.reversedDepth)));let m=0;if(this.sortObjects){Mr.copy(this.matrixWorld).invert(),Zh.setFromMatrixPosition(o.matrixWorld).applyMatrix4(Mr),l3.set(0,0,-1).transformDirection(o.matrixWorld).transformDirection(Mr);for(let b=0,S=c.length;b<S;b++)if(c[b].visible&&c[b].active){let T=c[b].geometryIndex;this.getMatrixAt(b,Mr),this.getBoundingSphereAt(T,Mc).applyMatrix4(Mr);let C=!1;if(g&&(C=!x.intersectsSphere(Mc)),!C){let E=d[T],k=IT.subVectors(Mc.center,Zh).dot(l3);Sv.push(E.start,E.count,k,b)}}let p=Sv.list,_=this.customSort;_===null?p.sort(s.transparent?CT:AT):_.call(this,p,o);for(let b=0,S=p.length;b<S;b++){let T=p[b];u[m]=T.start*a*l,h[m]=T.count*l,w[m]=T.index,m++}Sv.reset()}else for(let p=0,_=c.length;p<_;p++)if(c[p].visible&&c[p].active){let b=c[p].geometryIndex,S=!1;if(g&&(this.getMatrixAt(p,Mr),this.getBoundingSphereAt(b,Mc).applyMatrix4(Mr),S=!x.intersectsSphere(Mc)),!S){let T=d[b];u[m]=T.start*a*l,h[m]=T.count*l,w[m]=p,m++}}v.needsUpdate=!0,this._multiDrawCount=m,this._multiDrawBytesPerElement=a,this._visibilityChanged=!1}onBeforeShadow(t,e,o,i,s,r){this.onBeforeRender(t,null,i,s,r)}},Rs=class extends fs{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new In(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},_2=new Wt,T2=new Wt,c3=new Ao,Jh=new z0,Y1=new us,wv=new Wt,u3=new Wt,Ua=class extends ri{constructor(t=new _o,e=new Rs){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,o=[0];for(let i=1,s=e.count;i<s;i++)_2.fromBufferAttribute(e,i-1),T2.fromBufferAttribute(e,i),o[i]=o[i-1],o[i]+=_2.distanceTo(T2);t.setAttribute("lineDistance",new zn(o,1))}else Dn("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let o=this.geometry,i=this.matrixWorld,s=t.params.Line.threshold,r=o.drawRange;if(o.boundingSphere===null&&o.computeBoundingSphere(),Y1.copy(o.boundingSphere),Y1.applyMatrix4(i),Y1.radius+=s,t.ray.intersectsSphere(Y1)===!1)return;c3.copy(i).invert(),Jh.copy(t.ray).applyMatrix4(c3);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=o.index,d=o.attributes.position;if(u!==null){let g=Math.max(0,r.start),v=Math.min(u.count,r.start+r.count);for(let w=g,x=v-1;w<x;w+=c){let m=u.getX(w),p=u.getX(w+1),_=Z1(this,t,Jh,l,m,p,w);_&&e.push(_)}if(this.isLineLoop){let w=u.getX(v-1),x=u.getX(g),m=Z1(this,t,Jh,l,w,x,v-1);m&&e.push(m)}}else{let g=Math.max(0,r.start),v=Math.min(d.count,r.start+r.count);for(let w=g,x=v-1;w<x;w+=c){let m=Z1(this,t,Jh,l,w,w+1,w);m&&e.push(m)}if(this.isLineLoop){let w=Z1(this,t,Jh,l,v-1,g,v-1);w&&e.push(w)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,o=Object.keys(e);if(o.length>0){let i=e[o[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function Z1(n,t,e,o,i,s,r){let a=n.geometry.attributes.position;if(_2.fromBufferAttribute(a,i),T2.fromBufferAttribute(a,s),e.distanceSqToSegment(_2,T2,wv,u3)>o)return;wv.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(wv);if(!(c<t.near||c>t.far))return{distance:c,point:u3.clone().applyMatrix4(n.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:n}}var f3=new Wt,h3=new Wt,Gr=class extends Ua{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,o=[];for(let i=0,s=e.count;i<s;i+=2)f3.fromBufferAttribute(e,i),h3.fromBufferAttribute(e,i+1),o[i]=i===0?0:o[i-1],o[i+1]=o[i]+f3.distanceTo(h3);t.setAttribute("lineDistance",new zn(o,1))}else Dn("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},wd=class extends Ua{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}},cf=class extends fs{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new In(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},d3=new Ao,Uv=new z0,J1=new us,j1=new Wt,_d=class extends ri{constructor(t=new _o,e=new cf){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let o=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,r=o.drawRange;if(o.boundingSphere===null&&o.computeBoundingSphere(),J1.copy(o.boundingSphere),J1.applyMatrix4(i),J1.radius+=s,t.ray.intersectsSphere(J1)===!1)return;d3.copy(i).invert(),Uv.copy(t.ray).applyMatrix4(d3);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=o.index,h=o.attributes.position;if(c!==null){let d=Math.max(0,r.start),g=Math.min(c.count,r.start+r.count);for(let v=d,w=g;v<w;v++){let x=c.getX(v);j1.fromBufferAttribute(h,x),p3(j1,x,l,i,t,e,this)}}else{let d=Math.max(0,r.start),g=Math.min(h.count,r.start+r.count);for(let v=d,w=g;v<w;v++)j1.fromBufferAttribute(h,v),p3(j1,v,l,i,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,o=Object.keys(e);if(o.length>0){let i=e[o[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function p3(n,t,e,o,i,s,r){let a=Uv.distanceSqToPoint(n);if(a<e){let l=new Wt;Uv.closestPointToPoint(n,l),l.applyMatrix4(o);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:r})}}var Td=class extends $i{constructor(t,e,o,i,s=Si,r=Si,a,l,c){super(t,e,o,i,s,r,a,l,c),this.isVideoTexture=!0,this.generateMipmaps=!1,this._requestVideoFrameCallbackId=0;let u=this;function h(){u.needsUpdate=!0,u._requestVideoFrameCallbackId=t.requestVideoFrameCallback(h)}"requestVideoFrameCallback"in t&&(this._requestVideoFrameCallbackId=t.requestVideoFrameCallback(h))}clone(){return new this.constructor(this.image).copy(this)}update(){let t=this.image;"requestVideoFrameCallback"in t===!1&&t.readyState>=t.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}dispose(){this._requestVideoFrameCallbackId!==0&&(this.source.data.cancelVideoFrameCallback(this._requestVideoFrameCallbackId),this._requestVideoFrameCallbackId=0),super.dispose()}},A2=class extends Td{constructor(t,e,o,i,s,r,a,l){super({},t,e,o,i,s,r,a,l),this.isVideoFrameTexture=!0}update(){}clone(){return new this.constructor().copy(this)}setFrame(t){this.image=t,this.needsUpdate=!0}},C2=class extends $i{constructor(t,e){super({width:t,height:e}),this.isFramebufferTexture=!0,this.magFilter=qi,this.minFilter=qi,this.generateMipmaps=!1,this.needsUpdate=!0}},Nc=class extends $i{constructor(t,e,o,i,s,r,a,l,c,u,h,d){super(null,r,a,l,c,u,i,s,h,d),this.isCompressedTexture=!0,this.image={width:e,height:o},this.mipmaps=t,this.flipY=!1,this.generateMipmaps=!1}},E2=class extends Nc{constructor(t,e,o,i,s,r){super(t,e,o,s,r),this.isCompressedArrayTexture=!0,this.image.depth=i,this.wrapR=sr,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}},P2=class extends Nc{constructor(t,e,o){super(void 0,t[0].width,t[0].height,e,o,Oa),this.isCompressedCubeTexture=!0,this.isCubeTexture=!0,this.image=t}},kl=class extends $i{constructor(t=[],e=Oa,o,i,s,r,a,l,c,u){super(t,e,o,i,s,r,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Fc=class extends $i{constructor(t,e,o,i,s,r,a,l,c){super(t,e,o,i,s,r,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},R2=class extends $i{constructor(t,e,o,i,s,r,a,l,c){super(t,e,o,i,s,r,a,l,c),this.isHTMLTexture=!0,this.generateMipmaps=!1,this.needsUpdate=!0;let u=t?t.parentNode:null;u!==null&&"requestPaint"in u&&(u.onpaint=()=>{this.needsUpdate=!0},u.requestPaint())}dispose(){let t=this.image?this.image.parentNode:null;t!==null&&"onpaint"in t&&(t.onpaint=null),super.dispose()}},V0=class extends $i{constructor(t,e,o=Vr,i,s,r,a=qi,l=qi,c,u=Ba,h=1){if(u!==Ba&&u!==J0)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:h};super(d,i,s,r,a,l,u,o,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ta(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Ad=class extends V0{constructor(t,e=Vr,o=Oa,i,s,r=qi,a=qi,l,c=Ba){let u={width:t,height:t,depth:1},h=[u,u,u,u,u,u];super(t,t,e,o,i,s,r,a,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},uf=class extends $i{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},ia=class n extends _o{constructor(t=1,e=1,o=1,i=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:o,widthSegments:i,heightSegments:s,depthSegments:r};let a=this;i=Math.floor(i),s=Math.floor(s),r=Math.floor(r);let l=[],c=[],u=[],h=[],d=0,g=0;v("z","y","x",-1,-1,o,e,t,r,s,0),v("z","y","x",1,-1,o,e,-t,r,s,1),v("x","z","y",1,1,t,o,e,i,r,2),v("x","z","y",1,-1,t,o,-e,i,r,3),v("x","y","z",1,-1,t,e,o,i,s,4),v("x","y","z",-1,-1,t,e,-o,i,s,5),this.setIndex(l),this.setAttribute("position",new zn(c,3)),this.setAttribute("normal",new zn(u,3)),this.setAttribute("uv",new zn(h,2));function v(w,x,m,p,_,b,S,T,C,E,k){let R=b/C,N=S/E,W=b/2,f=S/2,y=T/2,U=C+1,D=E+1,G=0,$=0,tt=new Wt;for(let ut=0;ut<D;ut++){let At=ut*N-f;for(let Bt=0;Bt<U;Bt++){let be=Bt*R-W;tt[w]=be*p,tt[x]=At*_,tt[m]=y,c.push(tt.x,tt.y,tt.z),tt[w]=0,tt[x]=0,tt[m]=T>0?1:-1,u.push(tt.x,tt.y,tt.z),h.push(Bt/C),h.push(1-ut/E),G+=1}}for(let ut=0;ut<E;ut++)for(let At=0;At<C;At++){let Bt=d+At+U*ut,be=d+At+U*(ut+1),Ce=d+(At+1)+U*(ut+1),Be=d+(At+1)+U*ut;l.push(Bt,be,Be),l.push(be,Ce,Be),$+=6}a.addGroup(g,$,k),g+=$,d+=G}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Cd=class n extends _o{constructor(t=1,e=1,o=4,i=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:o,radialSegments:i,heightSegments:s},e=Math.max(0,e),o=Math.max(1,Math.floor(o)),i=Math.max(3,Math.floor(i)),s=Math.max(1,Math.floor(s));let r=[],a=[],l=[],c=[],u=e/2,h=Math.PI/2*t,d=e,g=2*h+d,v=o*2+s,w=i+1,x=new Wt,m=new Wt;for(let p=0;p<=v;p++){let _=0,b=0,S=0,T=0;if(p<=o){let k=p/o,R=k*Math.PI/2;b=-u-t*Math.cos(R),S=t*Math.sin(R),T=-t*Math.cos(R),_=k*h}else if(p<=o+s){let k=(p-o)/s;b=-u+k*e,S=t,T=0,_=h+k*d}else{let k=(p-o-s)/o,R=k*Math.PI/2;b=u+t*Math.sin(R),S=t*Math.cos(R),T=t*Math.sin(R),_=h+d+k*h}let C=Math.max(0,Math.min(1,_/g)),E=0;p===0?E=.5/i:p===v&&(E=-.5/i);for(let k=0;k<=i;k++){let R=k/i,N=R*Math.PI*2,W=Math.sin(N),f=Math.cos(N);m.x=-S*f,m.y=b,m.z=S*W,a.push(m.x,m.y,m.z),x.set(-S*f,T,S*W),x.normalize(),l.push(x.x,x.y,x.z),c.push(R+E,C)}if(p>0){let k=(p-1)*w;for(let R=0;R<i;R++){let N=k+R,W=k+R+1,f=p*w+R,y=p*w+R+1;r.push(N,W,f),r.push(W,y,f)}}}this.setIndex(r),this.setAttribute("position",new zn(a,3)),this.setAttribute("normal",new zn(l,3)),this.setAttribute("uv",new zn(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},Ed=class n extends _o{constructor(t=1,e=32,o=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:o,thetaLength:i},e=Math.max(3,e);let s=[],r=[],a=[],l=[],c=new Wt,u=new ln;r.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,d=3;h<=e;h++,d+=3){let g=o+h/e*i;c.x=t*Math.cos(g),c.y=t*Math.sin(g),r.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(r[d]/t+1)/2,u.y=(r[d+1]/t+1)/2,l.push(u.x,u.y)}for(let h=1;h<=e;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new zn(r,3)),this.setAttribute("normal",new zn(a,3)),this.setAttribute("uv",new zn(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.segments,t.thetaStart,t.thetaLength)}},ff=class n extends _o{constructor(t=1,e=1,o=1,i=32,s=1,r=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:o,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:l};let c=this;i=Math.floor(i),s=Math.floor(s);let u=[],h=[],d=[],g=[],v=0,w=[],x=o/2,m=0;p(),r===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(u),this.setAttribute("position",new zn(h,3)),this.setAttribute("normal",new zn(d,3)),this.setAttribute("uv",new zn(g,2));function p(){let b=new Wt,S=new Wt,T=0,C=(e-t)/o;for(let E=0;E<=s;E++){let k=[],R=E/s,N=R*(e-t)+t;for(let W=0;W<=i;W++){let f=W/i,y=f*l+a,U=Math.sin(y),D=Math.cos(y);S.x=N*U,S.y=-R*o+x,S.z=N*D,h.push(S.x,S.y,S.z),b.set(U,C,D).normalize(),d.push(b.x,b.y,b.z),g.push(f,1-R),k.push(v++)}w.push(k)}for(let E=0;E<i;E++)for(let k=0;k<s;k++){let R=w[k][E],N=w[k+1][E],W=w[k+1][E+1],f=w[k][E+1];(t>0||k!==0)&&(u.push(R,N,f),T+=3),(e>0||k!==s-1)&&(u.push(N,W,f),T+=3)}c.addGroup(m,T,0),m+=T}function _(b){let S=v,T=new ln,C=new Wt,E=0,k=b===!0?t:e,R=b===!0?1:-1;for(let W=1;W<=i;W++)h.push(0,x*R,0),d.push(0,R,0),g.push(.5,.5),v++;let N=v;for(let W=0;W<=i;W++){let y=W/i*l+a,U=Math.cos(y),D=Math.sin(y);C.x=k*D,C.y=x*R,C.z=k*U,h.push(C.x,C.y,C.z),d.push(0,R,0),T.x=U*.5+.5,T.y=D*.5*R+.5,g.push(T.x,T.y),v++}for(let W=0;W<i;W++){let f=S+W,y=N+W;b===!0?u.push(y,y+1,f):u.push(y+1,y,f),E+=3}c.addGroup(m,E,b===!0?1:2),m+=E}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},hf=class n extends ff{constructor(t=1,e=1,o=32,i=1,s=!1,r=0,a=Math.PI*2){super(0,t,e,o,i,s,r,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:o,heightSegments:i,openEnded:s,thetaStart:r,thetaLength:a}}static fromJSON(t){return new n(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},W0=class n extends _o{constructor(t=[],e=[],o=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:o,detail:i};let s=[],r=[];a(i),c(o),u(),this.setAttribute("position",new zn(s,3)),this.setAttribute("normal",new zn(s.slice(),3)),this.setAttribute("uv",new zn(r,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(p){let _=new Wt,b=new Wt,S=new Wt;for(let T=0;T<e.length;T+=3)g(e[T+0],_),g(e[T+1],b),g(e[T+2],S),l(_,b,S,p)}function l(p,_,b,S){let T=S+1,C=[];for(let E=0;E<=T;E++){C[E]=[];let k=p.clone().lerp(b,E/T),R=_.clone().lerp(b,E/T),N=T-E;for(let W=0;W<=N;W++)W===0&&E===T?C[E][W]=k:C[E][W]=k.clone().lerp(R,W/N)}for(let E=0;E<T;E++)for(let k=0;k<2*(T-E)-1;k++){let R=Math.floor(k/2);k%2===0?(d(C[E][R+1]),d(C[E+1][R]),d(C[E][R])):(d(C[E][R+1]),d(C[E+1][R+1]),d(C[E+1][R]))}}function c(p){let _=new Wt;for(let b=0;b<s.length;b+=3)_.x=s[b+0],_.y=s[b+1],_.z=s[b+2],_.normalize().multiplyScalar(p),s[b+0]=_.x,s[b+1]=_.y,s[b+2]=_.z}function u(){let p=new Wt;for(let _=0;_<s.length;_+=3){p.x=s[_+0],p.y=s[_+1],p.z=s[_+2];let b=x(p)/2/Math.PI+.5,S=m(p)/Math.PI+.5;r.push(b,1-S)}v(),h()}function h(){for(let p=0;p<r.length;p+=6){let _=r[p+0],b=r[p+2],S=r[p+4],T=Math.max(_,b,S),C=Math.min(_,b,S);T>.9&&C<.1&&(_<.2&&(r[p+0]+=1),b<.2&&(r[p+2]+=1),S<.2&&(r[p+4]+=1))}}function d(p){s.push(p.x,p.y,p.z)}function g(p,_){let b=p*3;_.x=t[b+0],_.y=t[b+1],_.z=t[b+2]}function v(){let p=new Wt,_=new Wt,b=new Wt,S=new Wt,T=new ln,C=new ln,E=new ln;for(let k=0,R=0;k<s.length;k+=9,R+=6){p.set(s[k+0],s[k+1],s[k+2]),_.set(s[k+3],s[k+4],s[k+5]),b.set(s[k+6],s[k+7],s[k+8]),T.set(r[R+0],r[R+1]),C.set(r[R+2],r[R+3]),E.set(r[R+4],r[R+5]),S.copy(p).add(_).add(b).divideScalar(3);let N=x(S);w(T,R+0,p,N),w(C,R+2,_,N),w(E,R+4,b,N)}}function w(p,_,b,S){S<0&&p.x===1&&(r[_]=p.x-1),b.x===0&&b.z===0&&(r[_]=S/2/Math.PI+.5)}function x(p){return Math.atan2(p.z,-p.x)}function m(p){return Math.atan2(-p.y,Math.sqrt(p.x*p.x+p.z*p.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.vertices,t.indices,t.radius,t.detail)}},Pd=class n extends W0{constructor(t=1,e=0){let o=(1+Math.sqrt(5))/2,i=1/o,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-o,0,-i,o,0,i,-o,0,i,o,-i,-o,0,-i,o,0,i,-o,0,i,o,0,-o,0,-i,o,0,-i,-o,0,i,o,0,i],r=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,r,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new n(t.radius,t.detail)}},K1=new Wt,Q1=new Wt,_v=new Wt,t2=new ka,Rd=class extends _o{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){let i=Math.pow(10,4),s=Math.cos(Pc*e),r=t.getIndex(),a=t.getAttribute("position"),l=r?r.count:a.count,c=[0,0,0],u=["a","b","c"],h=new Array(3),d={},g=[];for(let v=0;v<l;v+=3){r?(c[0]=r.getX(v),c[1]=r.getX(v+1),c[2]=r.getX(v+2)):(c[0]=v,c[1]=v+1,c[2]=v+2);let{a:w,b:x,c:m}=t2;if(w.fromBufferAttribute(a,c[0]),x.fromBufferAttribute(a,c[1]),m.fromBufferAttribute(a,c[2]),t2.getNormal(_v),h[0]=`${Math.round(w.x*i)},${Math.round(w.y*i)},${Math.round(w.z*i)}`,h[1]=`${Math.round(x.x*i)},${Math.round(x.y*i)},${Math.round(x.z*i)}`,h[2]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let p=0;p<3;p++){let _=(p+1)%3,b=h[p],S=h[_],T=t2[u[p]],C=t2[u[_]],E=`${b}_${S}`,k=`${S}_${b}`;k in d&&d[k]?(_v.dot(d[k].normal)<=s&&(g.push(T.x,T.y,T.z),g.push(C.x,C.y,C.z)),d[k]=null):E in d||(d[E]={index0:c[p],index1:c[_],normal:_v.clone()})}}for(let v in d)if(d[v]){let{index0:w,index1:x}=d[v];K1.fromBufferAttribute(a,w),Q1.fromBufferAttribute(a,x),g.push(K1.x,K1.y,K1.z),g.push(Q1.x,Q1.y,Q1.z)}this.setAttribute("position",new zn(g,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}},Tr=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Dn("Curve: .getPoint() not implemented.")}getPointAt(t,e){let o=this.getUtoTmapping(t);return this.getPoint(o,e)}getPoints(t=5){let e=[];for(let o=0;o<=t;o++)e.push(this.getPoint(o/t));return e}getSpacedPoints(t=5){let e=[];for(let o=0;o<=t;o++)e.push(this.getPointAt(o/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],o,i=this.getPoint(0),s=0;e.push(0);for(let r=1;r<=t;r++)o=this.getPoint(r/t),s+=o.distanceTo(i),e.push(s),i=o;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let o=this.getLengths(),i=0,s=o.length,r;e?r=e:r=t*o[s-1];let a=0,l=s-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=o[i]-r,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,o[i]===r)return i/(s-1);let u=o[i],d=o[i+1]-u,g=(r-u)/d;return(i+g)/(s-1)}getTangent(t,e){let i=t-1e-4,s=t+1e-4;i<0&&(i=0),s>1&&(s=1);let r=this.getPoint(i),a=this.getPoint(s),l=e||(r.isVector2?new ln:new Wt);return l.copy(a).sub(r).normalize(),l}getTangentAt(t,e){let o=this.getUtoTmapping(t);return this.getTangent(o,e)}computeFrenetFrames(t,e=!1){let o=new Wt,i=[],s=[],r=[],a=new Wt,l=new Ao;for(let g=0;g<=t;g++){let v=g/t;i[g]=this.getTangentAt(v,new Wt)}s[0]=new Wt,r[0]=new Wt;let c=Number.MAX_VALUE,u=Math.abs(i[0].x),h=Math.abs(i[0].y),d=Math.abs(i[0].z);u<=c&&(c=u,o.set(1,0,0)),h<=c&&(c=h,o.set(0,1,0)),d<=c&&o.set(0,0,1),a.crossVectors(i[0],o).normalize(),s[0].crossVectors(i[0],a),r[0].crossVectors(i[0],s[0]);for(let g=1;g<=t;g++){if(s[g]=s[g-1].clone(),r[g]=r[g-1].clone(),a.crossVectors(i[g-1],i[g]),a.length()>Number.EPSILON){a.normalize();let v=Math.acos(wo(i[g-1].dot(i[g]),-1,1));s[g].applyMatrix4(l.makeRotationAxis(a,v))}r[g].crossVectors(i[g],s[g])}if(e===!0){let g=Math.acos(wo(s[0].dot(s[t]),-1,1));g/=t,i[0].dot(a.crossVectors(s[0],s[t]))>0&&(g=-g);for(let v=1;v<=t;v++)s[v].applyMatrix4(l.makeRotationAxis(i[v],g*v)),r[v].crossVectors(i[v],s[v])}return{tangents:i,normals:s,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Oc=class extends Tr{constructor(t=0,e=0,o=1,i=1,s=0,r=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=o,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=r,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new ln){let o=e,i=Math.PI*2,s=this.aEndAngle-this.aStartAngle,r=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(r?s=0:s=i),this.aClockwise===!0&&!r&&(s===i?s=-i:s=s-i);let a=this.aStartAngle+t*s,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,g=c-this.aY;l=d*u-g*h+this.aX,c=d*h+g*u+this.aY}return o.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Id=class extends Oc{constructor(t,e,o,i,s,r){super(t,e,o,o,i,s,r),this.isArcCurve=!0,this.type="ArcCurve"}};function Bx(){let n=0,t=0,e=0,o=0;function i(s,r,a,l){n=s,t=a,e=-3*s+3*r-2*a-l,o=2*s-2*r+a+l}return{initCatmullRom:function(s,r,a,l,c){i(r,a,c*(a-s),c*(l-r))},initNonuniformCatmullRom:function(s,r,a,l,c,u,h){let d=(r-s)/c-(a-s)/(c+u)+(a-r)/u,g=(a-r)/u-(l-r)/(u+h)+(l-a)/h;d*=u,g*=u,i(r,a,d,g)},calc:function(s){let r=s*s,a=r*s;return n+t*s+e*r+o*a}}}var m3=new Wt,g3=new Wt,Tv=new Bx,Av=new Bx,Cv=new Bx,Ld=class extends Tr{constructor(t=[],e=!1,o="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=o,this.tension=i}getPoint(t,e=new Wt){let o=e,i=this.points,s=i.length,r=(s-(this.closed?0:1))*t,a=Math.floor(r),l=r-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=i[(a-1)%s]:(g3.subVectors(i[0],i[1]).add(i[0]),c=g3);let h=i[a%s],d=i[(a+1)%s];if(this.closed||a+2<s?u=i[(a+2)%s]:(m3.subVectors(i[s-1],i[s-2]).add(i[s-1]),u=m3),this.curveType==="centripetal"||this.curveType==="chordal"){let g=this.curveType==="chordal"?.5:.25,v=Math.pow(c.distanceToSquared(h),g),w=Math.pow(h.distanceToSquared(d),g),x=Math.pow(d.distanceToSquared(u),g);w<1e-4&&(w=1),v<1e-4&&(v=w),x<1e-4&&(x=w),Tv.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,v,w,x),Av.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,v,w,x),Cv.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,v,w,x)}else this.curveType==="catmullrom"&&(Tv.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),Av.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),Cv.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return o.set(Tv.calc(l),Av.calc(l),Cv.calc(l)),o}copy(t){super.copy(t),this.points=[];for(let e=0,o=t.points.length;e<o;e++){let i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,o=this.points.length;e<o;e++){let i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,o=t.points.length;e<o;e++){let i=t.points[e];this.points.push(new Wt().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function y3(n,t,e,o,i){let s=(o-t)*.5,r=(i-e)*.5,a=n*n,l=n*a;return(2*e-2*o+s+r)*l+(-3*e+3*o-2*s-r)*a+s*n+e}function kT(n,t){let e=1-n;return e*e*t}function DT(n,t){return 2*(1-n)*n*t}function BT(n,t){return n*n*t}function nd(n,t,e,o){return kT(n,t)+DT(n,e)+BT(n,o)}function UT(n,t){let e=1-n;return e*e*e*t}function NT(n,t){let e=1-n;return 3*e*e*n*t}function FT(n,t){return 3*(1-n)*n*n*t}function OT(n,t){return n*n*n*t}function od(n,t,e,o,i){return UT(n,t)+NT(n,e)+FT(n,o)+OT(n,i)}var df=class extends Tr{constructor(t=new ln,e=new ln,o=new ln,i=new ln){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=o,this.v3=i}getPoint(t,e=new ln){let o=e,i=this.v0,s=this.v1,r=this.v2,a=this.v3;return o.set(od(t,i.x,s.x,r.x,a.x),od(t,i.y,s.y,r.y,a.y)),o}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},kd=class extends Tr{constructor(t=new Wt,e=new Wt,o=new Wt,i=new Wt){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=o,this.v3=i}getPoint(t,e=new Wt){let o=e,i=this.v0,s=this.v1,r=this.v2,a=this.v3;return o.set(od(t,i.x,s.x,r.x,a.x),od(t,i.y,s.y,r.y,a.y),od(t,i.z,s.z,r.z,a.z)),o}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},pf=class extends Tr{constructor(t=new ln,e=new ln){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ln){let o=e;return t===1?o.copy(this.v2):(o.copy(this.v2).sub(this.v1),o.multiplyScalar(t).add(this.v1)),o}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ln){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Dd=class extends Tr{constructor(t=new Wt,e=new Wt){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new Wt){let o=e;return t===1?o.copy(this.v2):(o.copy(this.v2).sub(this.v1),o.multiplyScalar(t).add(this.v1)),o}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Wt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},mf=class extends Tr{constructor(t=new ln,e=new ln,o=new ln){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=o}getPoint(t,e=new ln){let o=e,i=this.v0,s=this.v1,r=this.v2;return o.set(nd(t,i.x,s.x,r.x),nd(t,i.y,s.y,r.y)),o}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},gf=class extends Tr{constructor(t=new Wt,e=new Wt,o=new Wt){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=o}getPoint(t,e=new Wt){let o=e,i=this.v0,s=this.v1,r=this.v2;return o.set(nd(t,i.x,s.x,r.x),nd(t,i.y,s.y,r.y),nd(t,i.z,s.z,r.z)),o}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},yf=class extends Tr{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ln){let o=e,i=this.points,s=(i.length-1)*t,r=Math.floor(s),a=s-r,l=i[r===0?r:r-1],c=i[r],u=i[r>i.length-2?i.length-1:r+1],h=i[r>i.length-3?i.length-1:r+2];return o.set(y3(a,l.x,c.x,u.x,h.x),y3(a,l.y,c.y,u.y,h.y)),o}copy(t){super.copy(t),this.points=[];for(let e=0,o=t.points.length;e<o;e++){let i=t.points[e];this.points.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,o=this.points.length;e<o;e++){let i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,o=t.points.length;e<o;e++){let i=t.points[e];this.points.push(new ln().fromArray(i))}return this}},I2=Object.freeze({__proto__:null,ArcCurve:Id,CatmullRomCurve3:Ld,CubicBezierCurve:df,CubicBezierCurve3:kd,EllipseCurve:Oc,LineCurve:pf,LineCurve3:Dd,QuadraticBezierCurve:mf,QuadraticBezierCurve3:gf,SplineCurve:yf}),Bd=class extends Tr{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let o=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new I2[o](e,t))}return this}getPoint(t,e){let o=t*this.getLength(),i=this.getCurveLengths(),s=0;for(;s<i.length;){if(i[s]>=o){let r=i[s]-o,a=this.curves[s],l=a.getLength(),c=l===0?0:1-r/l;return a.getPointAt(c,e)}s++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let o=0,i=this.curves.length;o<i;o++)e+=this.curves[o].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let o=0;o<=t;o++)e.push(this.getPoint(o/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],o;for(let i=0,s=this.curves;i<s.length;i++){let r=s[i],a=r.isEllipseCurve?t*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?t*r.points.length:t,l=r.getPoints(a);for(let c=0;c<l.length;c++){let u=l[c];o&&o.equals(u)||(e.push(u),o=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,o=t.curves.length;e<o;e++){let i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,o=this.curves.length;e<o;e++){let i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,o=t.curves.length;e<o;e++){let i=t.curves[e];this.curves.push(new I2[i.type]().fromJSON(i))}return this}},Dl=class extends Bd{constructor(t){super(),this.type="Path",this.currentPoint=new ln,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,o=t.length;e<o;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let o=new pf(this.currentPoint.clone(),new ln(t,e));return this.curves.push(o),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,o,i){let s=new mf(this.currentPoint.clone(),new ln(t,e),new ln(o,i));return this.curves.push(s),this.currentPoint.set(o,i),this}bezierCurveTo(t,e,o,i,s,r){let a=new df(this.currentPoint.clone(),new ln(t,e),new ln(o,i),new ln(s,r));return this.curves.push(a),this.currentPoint.set(s,r),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),o=new yf(e);return this.curves.push(o),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,o,i,s,r){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,o,i,s,r),this}absarc(t,e,o,i,s,r){return this.absellipse(t,e,o,o,i,s,r),this}ellipse(t,e,o,i,s,r,a,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,e+u,o,i,s,r,a,l),this}absellipse(t,e,o,i,s,r,a,l){let c=new Oc(t,e,o,i,s,r,a,l);if(this.curves.length>0){let h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Bl=class extends Dl{constructor(t){super(t),this.uuid=Fr(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let o=0,i=this.holes.length;o<i;o++)e[o]=this.holes[o].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,o=t.holes.length;e<o;e++){let i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,o=this.holes.length;e<o;e++){let i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,o=t.holes.length;e<o;e++){let i=t.holes[e];this.holes.push(new Dl().fromJSON(i))}return this}};function GT(n,t,e=2){let o=t&&t.length,i=o?t[0]*e:n.length,s=WS(n,0,i,e,!0),r=[];if(!s||s.next===s.prev)return r;let a,l,c;if(o&&(s=XT(n,t,s,e)),n.length>80*e){a=n[0],l=n[1];let u=a,h=l;for(let d=e;d<i;d+=e){let g=n[d],v=n[d+1];g<a&&(a=g),v<l&&(l=v),g>u&&(u=g),v>h&&(h=v)}c=Math.max(u-a,h-l),c=c!==0?32767/c:0}return Ud(s,r,e,a,l,c,0),r}function WS(n,t,e,o,i){let s;if(i===n6(n,t,e,o)>0)for(let r=t;r<e;r+=o)s=v3(r/o|0,n[r],n[r+1],s);else for(let r=e-o;r>=t;r-=o)s=v3(r/o|0,n[r],n[r+1],s);return s&&vf(s,s.next)&&(Fd(s),s=s.next),s}function Gc(n,t){if(!n)return n;t||(t=n);let e=n,o;do if(o=!1,!e.steiner&&(vf(e,e.next)||Fi(e.prev,e,e.next)===0)){if(Fd(e),e=t=e.prev,e===e.next)break;o=!0}else e=e.next;while(o||e!==t);return t}function Ud(n,t,e,o,i,s,r){if(!n)return;!r&&s&&JT(n,o,i,s);let a=n;for(;n.prev!==n.next;){let l=n.prev,c=n.next;if(s?VT(n,o,i,s):zT(n)){t.push(l.i,n.i,c.i),Fd(n),n=c.next,a=c.next;continue}if(n=c,n===a){r?r===1?(n=WT(Gc(n),t),Ud(n,t,e,o,i,s,2)):r===2&&HT(n,t,e,o,i,s):Ud(Gc(n),t,e,o,i,s,1);break}}}function zT(n){let t=n.prev,e=n,o=n.next;if(Fi(t,e,o)>=0)return!1;let i=t.x,s=e.x,r=o.x,a=t.y,l=e.y,c=o.y,u=Math.min(i,s,r),h=Math.min(a,l,c),d=Math.max(i,s,r),g=Math.max(a,l,c),v=o.next;for(;v!==t;){if(v.x>=u&&v.x<=d&&v.y>=h&&v.y<=g&&Kh(i,a,s,l,r,c,v.x,v.y)&&Fi(v.prev,v,v.next)>=0)return!1;v=v.next}return!0}function VT(n,t,e,o){let i=n.prev,s=n,r=n.next;if(Fi(i,s,r)>=0)return!1;let a=i.x,l=s.x,c=r.x,u=i.y,h=s.y,d=r.y,g=Math.min(a,l,c),v=Math.min(u,h,d),w=Math.max(a,l,c),x=Math.max(u,h,d),m=Nv(g,v,t,e,o),p=Nv(w,x,t,e,o),_=n.prevZ,b=n.nextZ;for(;_&&_.z>=m&&b&&b.z<=p;){if(_.x>=g&&_.x<=w&&_.y>=v&&_.y<=x&&_!==i&&_!==r&&Kh(a,u,l,h,c,d,_.x,_.y)&&Fi(_.prev,_,_.next)>=0||(_=_.prevZ,b.x>=g&&b.x<=w&&b.y>=v&&b.y<=x&&b!==i&&b!==r&&Kh(a,u,l,h,c,d,b.x,b.y)&&Fi(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;_&&_.z>=m;){if(_.x>=g&&_.x<=w&&_.y>=v&&_.y<=x&&_!==i&&_!==r&&Kh(a,u,l,h,c,d,_.x,_.y)&&Fi(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;b&&b.z<=p;){if(b.x>=g&&b.x<=w&&b.y>=v&&b.y<=x&&b!==i&&b!==r&&Kh(a,u,l,h,c,d,b.x,b.y)&&Fi(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function WT(n,t){let e=n;do{let o=e.prev,i=e.next.next;!vf(o,i)&&XS(o,e,e.next,i)&&Nd(o,i)&&Nd(i,o)&&(t.push(o.i,e.i,i.i),Fd(e),Fd(e.next),e=n=i),e=e.next}while(e!==n);return Gc(e)}function HT(n,t,e,o,i,s){let r=n;do{let a=r.next.next;for(;a!==r.prev;){if(r.i!==a.i&&QT(r,a)){let l=qS(r,a);r=Gc(r,r.next),l=Gc(l,l.next),Ud(r,t,e,o,i,s,0),Ud(l,t,e,o,i,s,0);return}a=a.next}r=r.next}while(r!==n)}function XT(n,t,e,o){let i=[];for(let s=0,r=t.length;s<r;s++){let a=t[s]*o,l=s<r-1?t[s+1]*o:n.length,c=WS(n,a,l,o,!1);c===c.next&&(c.steiner=!0),i.push(KT(c))}i.sort(qT);for(let s=0;s<i.length;s++)e=$T(i[s],e);return e}function qT(n,t){let e=n.x-t.x;if(e===0&&(e=n.y-t.y,e===0)){let o=(n.next.y-n.y)/(n.next.x-n.x),i=(t.next.y-t.y)/(t.next.x-t.x);e=o-i}return e}function $T(n,t){let e=YT(n,t);if(!e)return t;let o=qS(e,n);return Gc(o,o.next),Gc(e,e.next)}function YT(n,t){let e=t,o=n.x,i=n.y,s=-1/0,r;if(vf(n,e))return e;do{if(vf(n,e.next))return e.next;if(i<=e.y&&i>=e.next.y&&e.next.y!==e.y){let h=e.x+(i-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(h<=o&&h>s&&(s=h,r=e.x<e.next.x?e:e.next,h===o))return r}e=e.next}while(e!==t);if(!r)return null;let a=r,l=r.x,c=r.y,u=1/0;e=r;do{if(o>=e.x&&e.x>=l&&o!==e.x&&HS(i<c?o:s,i,l,c,i<c?s:o,i,e.x,e.y)){let h=Math.abs(i-e.y)/(o-e.x);Nd(e,n)&&(h<u||h===u&&(e.x>r.x||e.x===r.x&&ZT(r,e)))&&(r=e,u=h)}e=e.next}while(e!==a);return r}function ZT(n,t){return Fi(n.prev,n,t.prev)<0&&Fi(t.next,n,n.next)<0}function JT(n,t,e,o){let i=n;do i.z===0&&(i.z=Nv(i.x,i.y,t,e,o)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==n);i.prevZ.nextZ=null,i.prevZ=null,jT(i)}function jT(n){let t,e=1;do{let o=n,i;n=null;let s=null;for(t=0;o;){t++;let r=o,a=0;for(let c=0;c<e&&(a++,r=r.nextZ,!!r);c++);let l=e;for(;a>0||l>0&&r;)a!==0&&(l===0||!r||o.z<=r.z)?(i=o,o=o.nextZ,a--):(i=r,r=r.nextZ,l--),s?s.nextZ=i:n=i,i.prevZ=s,s=i;o=r}s.nextZ=null,e*=2}while(t>1);return n}function Nv(n,t,e,o,i){return n=(n-e)*i|0,t=(t-o)*i|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function KT(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function HS(n,t,e,o,i,s,r,a){return(i-r)*(t-a)>=(n-r)*(s-a)&&(n-r)*(o-a)>=(e-r)*(t-a)&&(e-r)*(s-a)>=(i-r)*(o-a)}function Kh(n,t,e,o,i,s,r,a){return!(n===r&&t===a)&&HS(n,t,e,o,i,s,r,a)}function QT(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!t6(n,t)&&(Nd(n,t)&&Nd(t,n)&&e6(n,t)&&(Fi(n.prev,n,t.prev)||Fi(n,t.prev,t))||vf(n,t)&&Fi(n.prev,n,n.next)>0&&Fi(t.prev,t,t.next)>0)}function Fi(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function vf(n,t){return n.x===t.x&&n.y===t.y}function XS(n,t,e,o){let i=n2(Fi(n,t,e)),s=n2(Fi(n,t,o)),r=n2(Fi(e,o,n)),a=n2(Fi(e,o,t));return!!(i!==s&&r!==a||i===0&&e2(n,e,t)||s===0&&e2(n,o,t)||r===0&&e2(e,n,o)||a===0&&e2(e,t,o))}function e2(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function n2(n){return n>0?1:n<0?-1:0}function t6(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&XS(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function Nd(n,t){return Fi(n.prev,n,n.next)<0?Fi(n,t,n.next)>=0&&Fi(n,n.prev,t)>=0:Fi(n,t,n.prev)<0||Fi(n,n.next,t)<0}function e6(n,t){let e=n,o=!1,i=(n.x+t.x)/2,s=(n.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&i<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(o=!o),e=e.next;while(e!==n);return o}function qS(n,t){let e=Fv(n.i,n.x,n.y),o=Fv(t.i,t.x,t.y),i=n.next,s=t.prev;return n.next=t,t.prev=n,e.next=i,i.prev=e,o.next=e,e.prev=o,s.next=o,o.prev=s,o}function v3(n,t,e,o){let i=Fv(n,t,e);return o?(i.next=o.next,i.prev=o,o.next.prev=i,o.next=i):(i.prev=i,i.next=i),i}function Fd(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Fv(n,t,e){return{i:n,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function n6(n,t,e,o){let i=0;for(let s=t,r=e-o;s<e;s+=o)i+=(n[r]-n[s])*(n[s+1]+n[r+1]),r=s;return i}var Ov=class{static triangulate(t,e,o=2){return GT(t,e,o)}},na=class n{static area(t){let e=t.length,o=0;for(let i=e-1,s=0;s<e;i=s++)o+=t[i].x*t[s].y-t[s].x*t[i].y;return o*.5}static isClockWise(t){return n.area(t)<0}static triangulateShape(t,e){let o=[],i=[],s=[];x3(t),b3(o,t);let r=t.length;e.forEach(x3);for(let l=0;l<e.length;l++)i.push(r),r+=e[l].length,b3(o,e[l]);let a=Ov.triangulate(o,i);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}};function x3(n){let t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function b3(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}var Od=class n extends _o{constructor(t=new Bl([new ln(.5,.5),new ln(-.5,.5),new ln(-.5,-.5),new ln(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let o=this,i=[],s=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];r(c)}this.setAttribute("position",new zn(i,3)),this.setAttribute("uv",new zn(s,2)),this.computeVertexNormals();function r(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,h=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,g=e.bevelThickness!==void 0?e.bevelThickness:.2,v=e.bevelSize!==void 0?e.bevelSize:g-.1,w=e.bevelOffset!==void 0?e.bevelOffset:0,x=e.bevelSegments!==void 0?e.bevelSegments:3,m=e.extrudePath,p=e.UVGenerator!==void 0?e.UVGenerator:o6,_,b=!1,S,T,C,E;if(m){_=m.getSpacedPoints(u),b=!0,d=!1;let nt=m.isCatmullRomCurve3?m.closed:!1;S=m.computeFrenetFrames(u,nt),T=new Wt,C=new Wt,E=new Wt}d||(x=0,g=0,v=0,w=0);let k=a.extractPoints(c),R=k.shape,N=k.holes;if(!na.isClockWise(R)){R=R.reverse();for(let nt=0,at=N.length;nt<at;nt++){let Rt=N[nt];na.isClockWise(Rt)&&(N[nt]=Rt.reverse())}}function f(nt){let Rt=10000000000000001e-36,Pt=nt[0];for(let qt=1;qt<=nt.length;qt++){let Gt=qt%nt.length,dt=nt[Gt],de=dt.x-Pt.x,ht=dt.y-Pt.y,F=de*de+ht*ht,It=Math.max(Math.abs(dt.x),Math.abs(dt.y),Math.abs(Pt.x),Math.abs(Pt.y)),wt=Rt*It*It;if(F<=wt){nt.splice(Gt,1),qt--;continue}Pt=dt}}f(R),N.forEach(f);let y=N.length,U=R;for(let nt=0;nt<y;nt++){let at=N[nt];R=R.concat(at)}function D(nt,at,Rt){return at||io("ExtrudeGeometry: vec does not exist"),nt.clone().addScaledVector(at,Rt)}let G=R.length;function $(nt,at,Rt){let Pt,qt,Gt,dt=nt.x-at.x,de=nt.y-at.y,ht=Rt.x-nt.x,F=Rt.y-nt.y,It=dt*dt+de*de,wt=dt*F-de*ht;if(Math.abs(wt)>Number.EPSILON){let z=Math.sqrt(It),I=Math.sqrt(ht*ht+F*F),ft=at.x-de/z,Mt=at.y+dt/z,Dt=Rt.x-F/I,Vt=Rt.y+ht/I,Me=((Dt-ft)*F-(Vt-Mt)*ht)/(dt*F-de*ht);Pt=ft+dt*Me-nt.x,qt=Mt+de*Me-nt.y;let Z=Pt*Pt+qt*qt;if(Z<=2)return new ln(Pt,qt);Gt=Math.sqrt(Z/2)}else{let z=!1;dt>Number.EPSILON?ht>Number.EPSILON&&(z=!0):dt<-Number.EPSILON?ht<-Number.EPSILON&&(z=!0):Math.sign(de)===Math.sign(F)&&(z=!0),z?(Pt=-de,qt=dt,Gt=Math.sqrt(It)):(Pt=dt,qt=de,Gt=Math.sqrt(It/2))}return new ln(Pt/Gt,qt/Gt)}let tt=[];for(let nt=0,at=U.length,Rt=at-1,Pt=nt+1;nt<at;nt++,Rt++,Pt++)Rt===at&&(Rt=0),Pt===at&&(Pt=0),tt[nt]=$(U[nt],U[Rt],U[Pt]);let ut=[],At,Bt=tt.concat();for(let nt=0,at=y;nt<at;nt++){let Rt=N[nt];At=[];for(let Pt=0,qt=Rt.length,Gt=qt-1,dt=Pt+1;Pt<qt;Pt++,Gt++,dt++)Gt===qt&&(Gt=0),dt===qt&&(dt=0),At[Pt]=$(Rt[Pt],Rt[Gt],Rt[dt]);ut.push(At),Bt=Bt.concat(At)}let be;if(x===0)be=na.triangulateShape(U,N);else{let nt=[],at=[];for(let Rt=0;Rt<x;Rt++){let Pt=Rt/x,qt=g*Math.cos(Pt*Math.PI/2),Gt=v*Math.sin(Pt*Math.PI/2)+w;for(let dt=0,de=U.length;dt<de;dt++){let ht=D(U[dt],tt[dt],Gt);xe(ht.x,ht.y,-qt),Pt===0&&nt.push(ht)}for(let dt=0,de=y;dt<de;dt++){let ht=N[dt];At=ut[dt];let F=[];for(let It=0,wt=ht.length;It<wt;It++){let z=D(ht[It],At[It],Gt);xe(z.x,z.y,-qt),Pt===0&&F.push(z)}Pt===0&&at.push(F)}}be=na.triangulateShape(nt,at)}let Ce=be.length,Be=v+w;for(let nt=0;nt<G;nt++){let at=d?D(R[nt],Bt[nt],Be):R[nt];b?(C.copy(S.normals[0]).multiplyScalar(at.x),T.copy(S.binormals[0]).multiplyScalar(at.y),E.copy(_[0]).add(C).add(T),xe(E.x,E.y,E.z)):xe(at.x,at.y,0)}for(let nt=1;nt<=u;nt++)for(let at=0;at<G;at++){let Rt=d?D(R[at],Bt[at],Be):R[at];b?(C.copy(S.normals[nt]).multiplyScalar(Rt.x),T.copy(S.binormals[nt]).multiplyScalar(Rt.y),E.copy(_[nt]).add(C).add(T),xe(E.x,E.y,E.z)):xe(Rt.x,Rt.y,h/u*nt)}for(let nt=x-1;nt>=0;nt--){let at=nt/x,Rt=g*Math.cos(at*Math.PI/2),Pt=v*Math.sin(at*Math.PI/2)+w;for(let qt=0,Gt=U.length;qt<Gt;qt++){let dt=D(U[qt],tt[qt],Pt);xe(dt.x,dt.y,h+Rt)}for(let qt=0,Gt=N.length;qt<Gt;qt++){let dt=N[qt];At=ut[qt];for(let de=0,ht=dt.length;de<ht;de++){let F=D(dt[de],At[de],Pt);b?xe(F.x,F.y+_[u-1].y,_[u-1].x+Rt):xe(F.x,F.y,h+Rt)}}}Ee(),oe();function Ee(){let nt=i.length/3;if(d){let at=0,Rt=G*at;for(let Pt=0;Pt<Ce;Pt++){let qt=be[Pt];B(qt[2]+Rt,qt[1]+Rt,qt[0]+Rt)}at=u+x*2,Rt=G*at;for(let Pt=0;Pt<Ce;Pt++){let qt=be[Pt];B(qt[0]+Rt,qt[1]+Rt,qt[2]+Rt)}}else{for(let at=0;at<Ce;at++){let Rt=be[at];B(Rt[2],Rt[1],Rt[0])}for(let at=0;at<Ce;at++){let Rt=be[at];B(Rt[0]+G*u,Rt[1]+G*u,Rt[2]+G*u)}}o.addGroup(nt,i.length/3-nt,0)}function oe(){let nt=i.length/3,at=0;he(U,at),at+=U.length;for(let Rt=0,Pt=N.length;Rt<Pt;Rt++){let qt=N[Rt];he(qt,at),at+=qt.length}o.addGroup(nt,i.length/3-nt,1)}function he(nt,at){let Rt=nt.length;for(;--Rt>=0;){let Pt=Rt,qt=Rt-1;qt<0&&(qt=nt.length-1);for(let Gt=0,dt=u+x*2;Gt<dt;Gt++){let de=G*Gt,ht=G*(Gt+1),F=at+Pt+de,It=at+qt+de,wt=at+qt+ht,z=at+Pt+ht;it(F,It,wt,z)}}}function xe(nt,at,Rt){l.push(nt),l.push(at),l.push(Rt)}function B(nt,at,Rt){ct(nt),ct(at),ct(Rt);let Pt=i.length/3,qt=p.generateTopUV(o,i,Pt-3,Pt-2,Pt-1);xt(qt[0]),xt(qt[1]),xt(qt[2])}function it(nt,at,Rt,Pt){ct(nt),ct(at),ct(Pt),ct(at),ct(Rt),ct(Pt);let qt=i.length/3,Gt=p.generateSideWallUV(o,i,qt-6,qt-3,qt-2,qt-1);xt(Gt[0]),xt(Gt[1]),xt(Gt[3]),xt(Gt[1]),xt(Gt[2]),xt(Gt[3])}function ct(nt){i.push(l[nt*3+0]),i.push(l[nt*3+1]),i.push(l[nt*3+2])}function xt(nt){s.push(nt.x),s.push(nt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,o=this.parameters.options;return i6(e,o,t)}static fromJSON(t,e){let o=[];for(let s=0,r=t.shapes.length;s<r;s++){let a=e[t.shapes[s]];o.push(a)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new I2[i.type]().fromJSON(i)),new n(o,t.options)}},o6={generateTopUV:function(n,t,e,o,i){let s=t[e*3],r=t[e*3+1],a=t[o*3],l=t[o*3+1],c=t[i*3],u=t[i*3+1];return[new ln(s,r),new ln(a,l),new ln(c,u)]},generateSideWallUV:function(n,t,e,o,i,s){let r=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[o*3],u=t[o*3+1],h=t[o*3+2],d=t[i*3],g=t[i*3+1],v=t[i*3+2],w=t[s*3],x=t[s*3+1],m=t[s*3+2];return Math.abs(a-u)<Math.abs(r-c)?[new ln(r,1-l),new ln(c,1-h),new ln(d,1-v),new ln(w,1-m)]:[new ln(a,1-l),new ln(u,1-h),new ln(g,1-v),new ln(x,1-m)]}};function i6(n,t,e){if(e.shapes=[],Array.isArray(n))for(let o=0,i=n.length;o<i;o++){let s=n[o];e.shapes.push(s.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Gd=class n extends W0{constructor(t=1,e=0){let o=(1+Math.sqrt(5))/2,i=[-1,o,0,1,o,0,-1,-o,0,1,-o,0,0,-1,o,0,1,o,0,-1,-o,0,1,-o,o,0,-1,o,0,1,-o,0,-1,-o,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new n(t.radius,t.detail)}},zc=class n extends _o{constructor(t=[new ln(0,-.5),new ln(.5,0),new ln(0,.5)],e=12,o=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:o,phiLength:i},e=Math.floor(e),i=wo(i,0,Math.PI*2);let s=[],r=[],a=[],l=[],c=[],u=1/e,h=new Wt,d=new ln,g=new Wt,v=new Wt,w=new Wt,x=0,m=0;for(let p=0;p<=t.length-1;p++)switch(p){case 0:x=t[p+1].x-t[p].x,m=t[p+1].y-t[p].y,g.x=m*1,g.y=-x,g.z=m*0,w.copy(g),g.normalize(),l.push(g.x,g.y,g.z);break;case t.length-1:l.push(w.x,w.y,w.z);break;default:x=t[p+1].x-t[p].x,m=t[p+1].y-t[p].y,g.x=m*1,g.y=-x,g.z=m*0,v.copy(g),g.x+=w.x,g.y+=w.y,g.z+=w.z,g.normalize(),l.push(g.x,g.y,g.z),w.copy(v)}for(let p=0;p<=e;p++){let _=o+p*u*i,b=Math.sin(_),S=Math.cos(_);for(let T=0;T<=t.length-1;T++){h.x=t[T].x*b,h.y=t[T].y,h.z=t[T].x*S,r.push(h.x,h.y,h.z),d.x=p/e,d.y=T/(t.length-1),a.push(d.x,d.y);let C=l[3*T+0]*b,E=l[3*T+1],k=l[3*T+0]*S;c.push(C,E,k)}}for(let p=0;p<e;p++)for(let _=0;_<t.length-1;_++){let b=_+p*t.length,S=b,T=b+t.length,C=b+t.length+1,E=b+1;s.push(S,T,E),s.push(C,E,T)}this.setIndex(s),this.setAttribute("position",new zn(r,3)),this.setAttribute("uv",new zn(a,2)),this.setAttribute("normal",new zn(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.points,t.segments,t.phiStart,t.phiLength)}},xf=class n extends W0{constructor(t=1,e=0){let o=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(o,i,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new n(t.radius,t.detail)}},H0=class n extends _o{constructor(t=1,e=1,o=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:o,heightSegments:i};let s=t/2,r=e/2,a=Math.floor(o),l=Math.floor(i),c=a+1,u=l+1,h=t/a,d=e/l,g=[],v=[],w=[],x=[];for(let m=0;m<u;m++){let p=m*d-r;for(let _=0;_<c;_++){let b=_*h-s;v.push(b,-p,0),w.push(0,0,1),x.push(_/a),x.push(1-m/l)}}for(let m=0;m<l;m++)for(let p=0;p<a;p++){let _=p+c*m,b=p+c*(m+1),S=p+1+c*(m+1),T=p+1+c*m;g.push(_,b,T),g.push(b,S,T)}this.setIndex(g),this.setAttribute("position",new zn(v,3)),this.setAttribute("normal",new zn(w,3)),this.setAttribute("uv",new zn(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}},zd=class n extends _o{constructor(t=.5,e=1,o=32,i=1,s=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:o,phiSegments:i,thetaStart:s,thetaLength:r},o=Math.max(3,o),i=Math.max(1,i);let a=[],l=[],c=[],u=[],h=t,d=(e-t)/i,g=new Wt,v=new ln;for(let w=0;w<=i;w++){for(let x=0;x<=o;x++){let m=s+x/o*r;g.x=h*Math.cos(m),g.y=h*Math.sin(m),l.push(g.x,g.y,g.z),c.push(0,0,1),v.x=(g.x/e+1)/2,v.y=(g.y/e+1)/2,u.push(v.x,v.y)}h+=d}for(let w=0;w<i;w++){let x=w*(o+1);for(let m=0;m<o;m++){let p=m+x,_=p,b=p+o+1,S=p+o+2,T=p+1;a.push(_,b,T),a.push(b,S,T)}}this.setIndex(a),this.setAttribute("position",new zn(l,3)),this.setAttribute("normal",new zn(c,3)),this.setAttribute("uv",new zn(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},Vd=class n extends _o{constructor(t=new Bl([new ln(0,.5),new ln(-.5,-.5),new ln(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let o=[],i=[],s=[],r=[],a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let u=0;u<t.length;u++)c(t[u]),this.addGroup(a,l,u),a+=l,l=0;this.setIndex(o),this.setAttribute("position",new zn(i,3)),this.setAttribute("normal",new zn(s,3)),this.setAttribute("uv",new zn(r,2));function c(u){let h=i.length/3,d=u.extractPoints(e),g=d.shape,v=d.holes;na.isClockWise(g)===!1&&(g=g.reverse());for(let x=0,m=v.length;x<m;x++){let p=v[x];na.isClockWise(p)===!0&&(v[x]=p.reverse())}let w=na.triangulateShape(g,v);for(let x=0,m=v.length;x<m;x++){let p=v[x];g=g.concat(p)}for(let x=0,m=g.length;x<m;x++){let p=g[x];i.push(p.x,p.y,0),s.push(0,0,1),r.push(p.x,p.y)}for(let x=0,m=w.length;x<m;x++){let p=w[x],_=p[0]+h,b=p[1]+h,S=p[2]+h;o.push(_,b,S),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return s6(e,t)}static fromJSON(t,e){let o=[];for(let i=0,s=t.shapes.length;i<s;i++){let r=e[t.shapes[i]];o.push(r)}return new n(o,t.curveSegments)}};function s6(n,t){if(t.shapes=[],Array.isArray(n))for(let e=0,o=n.length;e<o;e++){let i=n[e];t.shapes.push(i.uuid)}else t.shapes.push(n.uuid);return t}var bf=class n extends _o{constructor(t=1,e=32,o=16,i=0,s=Math.PI*2,r=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:o,phiStart:i,phiLength:s,thetaStart:r,thetaLength:a},e=Math.max(3,Math.floor(e)),o=Math.max(2,Math.floor(o));let l=Math.min(r+a,Math.PI),c=0,u=[],h=new Wt,d=new Wt,g=[],v=[],w=[],x=[];for(let m=0;m<=o;m++){let p=[],_=m/o,b=r+_*a,S=t*Math.cos(b),T=Math.sqrt(t*t-S*S),C=0;m===0&&r===0?C=.5/e:m===o&&l===Math.PI&&(C=-.5/e);for(let E=0;E<=e;E++){let k=E/e,R=i+k*s;h.x=-T*Math.cos(R),h.y=S,h.z=T*Math.sin(R),v.push(h.x,h.y,h.z),d.copy(h).normalize(),w.push(d.x,d.y,d.z),x.push(k+C,1-_),p.push(c++)}u.push(p)}for(let m=0;m<o;m++)for(let p=0;p<e;p++){let _=u[m][p+1],b=u[m][p],S=u[m+1][p],T=u[m+1][p+1];(m!==0||r>0)&&g.push(_,b,T),(m!==o-1||l<Math.PI)&&g.push(b,S,T)}this.setIndex(g),this.setAttribute("position",new zn(v,3)),this.setAttribute("normal",new zn(w,3)),this.setAttribute("uv",new zn(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},Wd=class n extends W0{constructor(t=1,e=0){let o=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],i=[2,1,0,0,3,2,1,3,0,2,3,1];super(o,i,t,e),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new n(t.radius,t.detail)}},Hd=class n extends _o{constructor(t=1,e=.4,o=12,i=48,s=Math.PI*2,r=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:o,tubularSegments:i,arc:s,thetaStart:r,thetaLength:a},o=Math.floor(o),i=Math.floor(i);let l=[],c=[],u=[],h=[],d=new Wt,g=new Wt,v=new Wt;for(let w=0;w<=o;w++){let x=r+w/o*a;for(let m=0;m<=i;m++){let p=m/i*s;g.x=(t+e*Math.cos(x))*Math.cos(p),g.y=(t+e*Math.cos(x))*Math.sin(p),g.z=e*Math.sin(x),c.push(g.x,g.y,g.z),d.x=t*Math.cos(p),d.y=t*Math.sin(p),v.subVectors(g,d).normalize(),u.push(v.x,v.y,v.z),h.push(m/i),h.push(w/o)}}for(let w=1;w<=o;w++)for(let x=1;x<=i;x++){let m=(i+1)*w+x-1,p=(i+1)*(w-1)+x-1,_=(i+1)*(w-1)+x,b=(i+1)*w+x;l.push(m,p,b),l.push(p,_,b)}this.setIndex(l),this.setAttribute("position",new zn(c,3)),this.setAttribute("normal",new zn(u,3)),this.setAttribute("uv",new zn(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}},Xd=class n extends _o{constructor(t=1,e=.4,o=64,i=8,s=2,r=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:t,tube:e,tubularSegments:o,radialSegments:i,p:s,q:r},o=Math.floor(o),i=Math.floor(i);let a=[],l=[],c=[],u=[],h=new Wt,d=new Wt,g=new Wt,v=new Wt,w=new Wt,x=new Wt,m=new Wt;for(let _=0;_<=o;++_){let b=_/o*s*Math.PI*2;p(b,s,r,t,g),p(b+.01,s,r,t,v),x.subVectors(v,g),m.addVectors(v,g),w.crossVectors(x,m),m.crossVectors(w,x),w.normalize(),m.normalize();for(let S=0;S<=i;++S){let T=S/i*Math.PI*2,C=-e*Math.cos(T),E=e*Math.sin(T);h.x=g.x+(C*m.x+E*w.x),h.y=g.y+(C*m.y+E*w.y),h.z=g.z+(C*m.z+E*w.z),l.push(h.x,h.y,h.z),d.subVectors(h,g).normalize(),c.push(d.x,d.y,d.z),u.push(_/o),u.push(S/i)}}for(let _=1;_<=o;_++)for(let b=1;b<=i;b++){let S=(i+1)*(_-1)+(b-1),T=(i+1)*_+(b-1),C=(i+1)*_+b,E=(i+1)*(_-1)+b;a.push(S,T,E),a.push(T,C,E)}this.setIndex(a),this.setAttribute("position",new zn(l,3)),this.setAttribute("normal",new zn(c,3)),this.setAttribute("uv",new zn(u,2));function p(_,b,S,T,C){let E=Math.cos(_),k=Math.sin(_),R=S/b*_,N=Math.cos(R);C.x=T*(2+N)*.5*E,C.y=T*(2+N)*k*.5,C.z=T*Math.sin(R)*.5}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.tube,t.tubularSegments,t.radialSegments,t.p,t.q)}},qd=class n extends _o{constructor(t=new gf(new Wt(-1,-1,0),new Wt(-1,1,0),new Wt(1,1,0)),e=64,o=1,i=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:o,radialSegments:i,closed:s};let r=t.computeFrenetFrames(e,s);this.tangents=r.tangents,this.normals=r.normals,this.binormals=r.binormals;let a=new Wt,l=new Wt,c=new ln,u=new Wt,h=[],d=[],g=[],v=[];w(),this.setIndex(v),this.setAttribute("position",new zn(h,3)),this.setAttribute("normal",new zn(d,3)),this.setAttribute("uv",new zn(g,2));function w(){for(let _=0;_<e;_++)x(_);x(s===!1?e:0),p(),m()}function x(_){u=t.getPointAt(_/e,u);let b=r.normals[_],S=r.binormals[_];for(let T=0;T<=i;T++){let C=T/i*Math.PI*2,E=Math.sin(C),k=-Math.cos(C);l.x=k*b.x+E*S.x,l.y=k*b.y+E*S.y,l.z=k*b.z+E*S.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=u.x+o*l.x,a.y=u.y+o*l.y,a.z=u.z+o*l.z,h.push(a.x,a.y,a.z)}}function m(){for(let _=1;_<=e;_++)for(let b=1;b<=i;b++){let S=(i+1)*(_-1)+(b-1),T=(i+1)*_+(b-1),C=(i+1)*_+b,E=(i+1)*(_-1)+b;v.push(S,T,E),v.push(T,C,E)}}function p(){for(let _=0;_<=e;_++)for(let b=0;b<=i;b++)c.x=_/e,c.y=b/i,g.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new n(new I2[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}},$d=class extends _o{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){let e=[],o=new Set,i=new Wt,s=new Wt;if(t.index!==null){let r=t.attributes.position,a=t.index,l=t.groups;l.length===0&&(l=[{start:0,count:a.count,materialIndex:0}]);for(let c=0,u=l.length;c<u;++c){let h=l[c],d=h.start,g=h.count;for(let v=d,w=d+g;v<w;v+=3)for(let x=0;x<3;x++){let m=a.getX(v+x),p=a.getX(v+(x+1)%3);i.fromBufferAttribute(r,m),s.fromBufferAttribute(r,p),M3(i,s,o)===!0&&(e.push(i.x,i.y,i.z),e.push(s.x,s.y,s.z))}}}else{let r=t.attributes.position;for(let a=0,l=r.count/3;a<l;a++)for(let c=0;c<3;c++){let u=3*a+c,h=3*a+(c+1)%3;i.fromBufferAttribute(r,u),s.fromBufferAttribute(r,h),M3(i,s,o)===!0&&(e.push(i.x,i.y,i.z),e.push(s.x,s.y,s.z))}}this.setAttribute("position",new zn(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};function M3(n,t,e){let o=`${n.x},${n.y},${n.z}-${t.x},${t.y},${t.z}`,i=`${t.x},${t.y},${t.z}-${n.x},${n.y},${n.z}`;return e.has(o)===!0||e.has(i)===!0?!1:(e.add(o),e.add(i),!0)}var S3=Object.freeze({__proto__:null,BoxGeometry:ia,CapsuleGeometry:Cd,CircleGeometry:Ed,ConeGeometry:hf,CylinderGeometry:ff,DodecahedronGeometry:Pd,EdgesGeometry:Rd,ExtrudeGeometry:Od,IcosahedronGeometry:Gd,LatheGeometry:zc,OctahedronGeometry:xf,PlaneGeometry:H0,PolyhedronGeometry:W0,RingGeometry:zd,ShapeGeometry:Vd,SphereGeometry:bf,TetrahedronGeometry:Wd,TorusGeometry:Hd,TorusKnotGeometry:Xd,TubeGeometry:qd,WireframeGeometry:$d}),Yd=class extends fs{constructor(t){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new In(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}};function Kc(n){let t={};for(let e in n){t[e]={};for(let o in n[e]){let i=n[e][o];if(w3(i))i.isRenderTargetTexture?(Dn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][o]=null):t[e][o]=i.clone();else if(Array.isArray(i))if(w3(i[0])){let s=[];for(let r=0,a=i.length;r<a;r++)s[r]=i[r].clone();t[e][o]=s}else t[e][o]=i.slice();else t[e][o]=i}}return t}function qs(n){let t={};for(let e=0;e<n.length;e++){let o=Kc(n[e]);for(let i in o)t[i]=o[i]}return t}function w3(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function r6(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Ux(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:jo.workingColorSpace}var Nx={clone:Kc,merge:qs},a6=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,l6=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ar=class extends fs{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=a6,this.fragmentShader=l6,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Kc(t.uniforms),this.uniformsGroups=r6(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let r=this.uniforms[i].value;r&&r.isTexture?e.uniforms[i]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[i]={type:"m4",value:r.toArray()}:e.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let o={};for(let i in this.extensions)this.extensions[i]===!0&&(o[i]=!0);return Object.keys(o).length>0&&(e.extensions=o),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let o in t.uniforms){let i=t.uniforms[o];switch(this.uniforms[o]={},i.type){case"t":this.uniforms[o].value=e[i.value]||null;break;case"c":this.uniforms[o].value=new In().setHex(i.value);break;case"v2":this.uniforms[o].value=new ln().fromArray(i.value);break;case"v3":this.uniforms[o].value=new Wt().fromArray(i.value);break;case"v4":this.uniforms[o].value=new mi().fromArray(i.value);break;case"m3":this.uniforms[o].value=new Lo().fromArray(i.value);break;case"m4":this.uniforms[o].value=new Ao().fromArray(i.value);break;default:this.uniforms[o].value=i.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let o in t.extensions)this.extensions[o]=t.extensions[o];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Mf=class extends ar{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},X0=class extends fs{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new In(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new In(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=h0,this.normalScale=new ln(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new oa,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},q0=class extends X0{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ln(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return wo(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new In(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new In(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new In(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}},Zd=class extends fs{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new In(16777215),this.specular=new In(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new In(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=h0,this.normalScale=new ln(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new oa,this.combine=If,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Jd=class extends fs{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new In(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new In(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=h0,this.normalScale=new ln(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},jd=class extends fs{constructor(t){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=h0,this.normalScale=new ln(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}},Kd=class extends fs{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new In(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new In(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=h0,this.normalScale=new ln(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new oa,this.combine=If,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Ul=class extends fs{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=_x,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Sf=class extends fs{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Qd=class extends fs{constructor(t){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new In(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=h0,this.normalScale=new ln(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={MATCAP:""},this.color.copy(t.color),this.matcap=t.matcap,this.map=t.map,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this.fog=t.fog,this}},tp=class extends Rs{constructor(t){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}};function La(n,t){return!n||n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function id(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}function $S(n){function t(i,s){return n[i]-n[s]}let e=n.length,o=new Array(e);for(let i=0;i!==e;++i)o[i]=i;return o.sort(t),o}function Gv(n,t,e){let o=n.length,i=new n.constructor(o);for(let s=0,r=0;r!==o;++s){let a=e[s]*t;for(let l=0;l!==t;++l)i[r++]=n[a+l]}return i}function YS(n,t,e,o){let i=1,s=n[0];for(;s!==void 0&&s[o]===void 0;)s=n[i++];if(s===void 0)return;let r=s[o];if(r!==void 0)if(Array.isArray(r))do r=s[o],r!==void 0&&(t.push(s.time),e.push(...r)),s=n[i++];while(s!==void 0);else if(r.toArray!==void 0)do r=s[o],r!==void 0&&(t.push(s.time),r.toArray(e,e.length)),s=n[i++];while(s!==void 0);else do r=s[o],r!==void 0&&(t.push(s.time),e.push(r)),s=n[i++];while(s!==void 0)}function c6(n,t,e,o,i=30){let s=n.clone();s.name=t;let r=[];for(let l=0;l<s.tracks.length;++l){let c=s.tracks[l],u=c.getValueSize(),h=[],d=[];for(let g=0;g<c.times.length;++g){let v=c.times[g]*i;if(!(v<e||v>=o)){h.push(c.times[g]);for(let w=0;w<u;++w)d.push(c.values[g*u+w])}}h.length!==0&&(c.times=La(h,c.times.constructor),c.values=La(d,c.values.constructor),r.push(c))}s.tracks=r;let a=1/0;for(let l=0;l<s.tracks.length;++l)a>s.tracks[l].times[0]&&(a=s.tracks[l].times[0]);for(let l=0;l<s.tracks.length;++l)s.tracks[l].shift(-1*a);return s.resetDuration(),s}function u6(n,t=0,e=n,o=30){o<=0&&(o=30);let i=e.tracks.length,s=t/o;for(let r=0;r<i;++r){let a=e.tracks[r],l=a.ValueTypeName;if(l==="bool"||l==="string")continue;let c=n.tracks.find(function(m){return m.name===a.name&&m.ValueTypeName===l});if(c===void 0)continue;let u=0,h=a.getValueSize();a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(u=h/3);let d=0,g=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(d=g/3);let v=a.times.length-1,w;if(s<=a.times[0]){let m=u,p=h-u;w=a.values.slice(m,p)}else if(s>=a.times[v]){let m=v*h+u,p=m+h-u;w=a.values.slice(m,p)}else{let m=a.createInterpolant(),p=u,_=h-u;m.evaluate(s),w=m.resultBuffer.slice(p,_)}l==="quaternion"&&new Ps().fromArray(w).normalize().conjugate().toArray(w);let x=c.times.length;for(let m=0;m<x;++m){let p=m*g+d;if(l==="quaternion")Ps.multiplyQuaternionsFlat(c.values,p,w,0,c.values,p);else{let _=g-d*2;for(let b=0;b<_;++b)c.values[p+b]-=w[b]}}}return n.blendMode=Og,n}var L2=class{static convertArray(t,e){return La(t,e)}static isTypedArray(t){return BS(t)}static hasTangents(t){return id(t)}static getKeyframeOrder(t){return $S(t)}static sortedArray(t,e,o){return Gv(t,e,o)}static flattenJSON(t,e,o,i){YS(t,e,o,i)}static subclip(t,e,o,i,s=30){return c6(t,e,o,i,s)}static makeClipAdditive(t,e=0,o=t,i=30){return u6(t,e,o,i)}},$0=class{constructor(t,e,o,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(o),this.sampleValues=e,this.valueSize=o,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,o=this._cachedIndex,i=e[o],s=e[o-1];t:{e:{let r;n:{o:if(!(t<i)){for(let a=o+2;;){if(i===void 0){if(t<s)break o;return o=e.length,this._cachedIndex=o,this.copySampleValue_(o-1)}if(o===a)break;if(s=i,i=e[++o],t<i)break e}r=e.length;break n}if(!(t>=s)){let a=e[1];t<a&&(o=2,s=a);for(let l=o-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(o===l)break;if(i=s,s=e[--o-1],t>=s)break e}r=o,o=0;break n}break t}for(;o<r;){let a=o+r>>>1;t<e[a]?r=a:o=a+1}if(i=e[o],s=e[o-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return o=e.length,this._cachedIndex=o,this.copySampleValue_(o-1)}this._cachedIndex=o,this.intervalChanged_(o,s,i)}return this.interpolate_(o,s,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,o=this.sampleValues,i=this.valueSize,s=t*i;for(let r=0;r!==i;++r)e[r]=o[s+r];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},ep=class extends $0{constructor(t,e,o,i){super(t,e,o,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Al,endingEnd:Al}}intervalChanged_(t,e,o){let i=this.parameterPositions,s=t-2,r=t+1,a=i[s],l=i[r];if(a===void 0)switch(this.getSettings_().endingStart){case Cl:s=t,a=2*e-o;break;case Ku:s=i.length-2,a=e+i[s]-i[s+1];break;default:s=t,a=o}if(l===void 0)switch(this.getSettings_().endingEnd){case Cl:r=t,l=2*o-e;break;case Ku:r=1,l=o+i[1]-i[0];break;default:r=t-1,l=e}let c=(o-e)*.5,u=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-o),this._offsetPrev=s*u,this._offsetNext=r*u}interpolate_(t,e,o,i){let s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,g=this._weightNext,v=(o-e)/(i-e),w=v*v,x=w*v,m=-d*x+2*d*w-d*v,p=(1+d)*x+(-1.5-2*d)*w+(-.5+d)*v+1,_=(-1-g)*x+(1.5+g)*w+.5*v,b=g*x-g*w;for(let S=0;S!==a;++S)s[S]=m*r[u+S]+p*r[c+S]+_*r[l+S]+b*r[h+S];return s}},wf=class extends $0{constructor(t,e,o,i){super(t,e,o,i)}interpolate_(t,e,o,i){let s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=(o-e)/(i-e),h=1-u;for(let d=0;d!==a;++d)s[d]=r[c+d]*h+r[l+d]*u;return s}},np=class extends $0{constructor(t,e,o,i){super(t,e,o,i)}interpolate_(t){return this.copySampleValue_(t-1)}},op=class extends $0{interpolate_(t,e,o,i){let s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=this.inTangents,h=this.outTangents;if(!u||!h){let v=(o-e)/(i-e),w=1-v;for(let x=0;x!==a;++x)s[x]=r[c+x]*w+r[l+x]*v;return s}let d=a*2,g=t-1;for(let v=0;v!==a;++v){let w=r[c+v],x=r[l+v],m=g*d+v*2,p=h[m],_=h[m+1],b=t*d+v*2,S=u[b],T=u[b+1],C=h6(o,e,p,S,i);s[v]=ZS(C,w,_,T,x)}return s}};function ZS(n,t,e,o,i){let s=1-n;return s*s*s*t+3*s*s*n*e+3*s*n*n*o+n*n*n*i}function f6(n,t,e,o,i){let s=1-n;return 3*s*s*(e-t)+6*s*n*(o-e)+3*n*n*(i-o)}function h6(n,t,e,o,i){let s=(n-t)/(i-t);for(let r=0;r<8;r++){let a=ZS(s,t,e,o,i)-n;if(Math.abs(a)<1e-10)break;let l=f6(s,t,e,o,i);if(Math.abs(l)<1e-10)break;s=Math.max(0,Math.min(1,s-a/l))}return s}var lr=class{constructor(t,e,o,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=La(e,this.TimeBufferType),this.values=La(o,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,o;if(e.toJSON!==this.toJSON)o=e.toJSON(t);else{o={name:t.name,times:La(t.times,Array),values:La(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(o.interpolation=i),id(t.settings)&&(o.settings={inTangents:La(t.settings.inTangents,Array),outTangents:La(t.settings.outTangents,Array)})}return o.type=t.ValueTypeName,o}InterpolantFactoryMethodDiscrete(t){return new np(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new wf(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new ep(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new op(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case ju:e=this.InterpolantFactoryMethodDiscrete;break;case hd:e=this.InterpolantFactoryMethodLinear;break;case Qh:e=this.InterpolantFactoryMethodSmooth;break;case d2:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let o="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(o);return Dn("KeyframeTrack:",o),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ju;case this.InterpolantFactoryMethodLinear:return hd;case this.InterpolantFactoryMethodSmooth:return Qh;case this.InterpolantFactoryMethodBezier:return d2}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let o=0,i=e.length;o!==i;++o)e[o]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let o=0,i=e.length;o!==i;++o)e[o]*=t;id(this.settings)&&(_3(this.settings.inTangents,t),_3(this.settings.outTangents,t))}return this}trim(t,e){let o=this.times,i=o.length,s=0,r=i-1;for(;s!==i&&o[s]<t;)++s;for(;r!==-1&&o[r]>e;)--r;if(++r,s!==0||r!==i){s>=r&&(r=Math.max(r,1),s=r-1);let a=this.getValueSize();this.times=o.slice(s,r),this.values=this.values.slice(s*a,r*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(io("KeyframeTrack: Invalid value size in track.",this),t=!1);let o=this.times,i=this.values,s=o.length;s===0&&(io("KeyframeTrack: Track is empty.",this),t=!1);let r=null;for(let a=0;a!==s;a++){let l=o[a];if(typeof l=="number"&&isNaN(l)){io("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(r!==null&&r>l){io("KeyframeTrack: Out of order keys.",this,a,l,r),t=!1;break}r=l}if(i!==void 0&&BS(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){io("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),o=this.getValueSize(),i=this.getInterpolation()===Qh,s=t.length-1,r=1;for(let a=1;a<s;++a){let l=!1,c=t[a],u=t[a+1];if(c!==u&&(a!==1||c!==t[0]))if(i)l=!0;else{let h=a*o,d=h-o,g=h+o;for(let v=0;v!==o;++v){let w=e[h+v];if(w!==e[d+v]||w!==e[g+v]){l=!0;break}}}if(l){if(a!==r){t[r]=t[a];let h=a*o,d=r*o;for(let g=0;g!==o;++g)e[d+g]=e[h+g]}++r}}if(s>0){t[r]=t[s];for(let a=s*o,l=r*o,c=0;c!==o;++c)e[l+c]=e[a+c];++r}return r!==t.length?(this.times=t.slice(0,r),this.values=e.slice(0,r*o)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),o=this.constructor,i=new o(this.name,t,e);return i.createInterpolant=this.createInterpolant,id(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};function _3(n,t){for(let e=0,o=n.length;e!==o;e+=2)n[e]*=t}lr.prototype.ValueTypeName="";lr.prototype.TimeBufferType=Float32Array;lr.prototype.ValueBufferType=Float32Array;lr.prototype.DefaultInterpolation=hd;var c0=class extends lr{constructor(t,e,o){super(t,e,o)}};c0.prototype.ValueTypeName="bool";c0.prototype.ValueBufferType=Array;c0.prototype.DefaultInterpolation=ju;c0.prototype.InterpolantFactoryMethodLinear=void 0;c0.prototype.InterpolantFactoryMethodSmooth=void 0;var _f=class extends lr{constructor(t,e,o,i){super(t,e,o,i)}};_f.prototype.ValueTypeName="color";var Vc=class extends lr{constructor(t,e,o,i){super(t,e,o,i)}};Vc.prototype.ValueTypeName="number";var ip=class extends $0{constructor(t,e,o,i){super(t,e,o,i)}interpolate_(t,e,o,i){let s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,l=(o-e)/(i-e),c=t*a;for(let u=c+a;c!==u;c+=4)Ps.slerpFlat(s,0,r,c-a,r,c,l);return s}},Wc=class extends lr{constructor(t,e,o,i){super(t,e,o,i)}InterpolantFactoryMethodLinear(t){return new ip(this.times,this.values,this.getValueSize(),t)}};Wc.prototype.ValueTypeName="quaternion";Wc.prototype.InterpolantFactoryMethodSmooth=void 0;var u0=class extends lr{constructor(t,e,o){super(t,e,o)}};u0.prototype.ValueTypeName="string";u0.prototype.ValueBufferType=Array;u0.prototype.DefaultInterpolation=ju;u0.prototype.InterpolantFactoryMethodLinear=void 0;u0.prototype.InterpolantFactoryMethodSmooth=void 0;var Tf=class extends lr{constructor(t,e,o,i){super(t,e,o,i)}};Tf.prototype.ValueTypeName="vector";var Nl=class{constructor(t="",e=-1,o=[],i=sm){this.name=t,this.tracks=o,this.duration=e,this.blendMode=i,this.uuid=Fr(),this.userData={},this.duration<0&&this.resetDuration()}static parse(t){let e=[],o=t.tracks,i=1/(t.fps||1);for(let r=0,a=o.length;r!==a;++r)e.push(p6(o[r]).scale(i));let s=new this(t.name,t.duration,e,t.blendMode);return s.uuid=t.uuid,s.userData=JSON.parse(t.userData||"{}"),s}static toJSON(t){let e=[],o=t.tracks,i={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode,userData:JSON.stringify(t.userData)};for(let s=0,r=o.length;s!==r;++s)e.push(lr.toJSON(o[s]));return i}static CreateFromMorphTargetSequence(t,e,o,i){let s=e.length,r=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);let u=$S(l);l=Gv(l,1,u),c=Gv(c,1,u),!i&&l[0]===0&&(l.push(s),c.push(c[0])),r.push(new Vc(".morphTargetInfluences["+e[a].name+"]",l,c).scale(1/o))}return new this(t,-1,r)}static findByName(t,e){let o=t;if(!Array.isArray(t)){let i=t;o=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<o.length;i++)if(o[i].name===e)return o[i];return null}static CreateClipsFromMorphTargetSequences(t,e,o){let i={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=t.length;a<l;a++){let c=t[a],u=c.name.match(s);if(u&&u.length>1){let h=u[1],d=i[h];d||(i[h]=d=[]),d.push(c)}}let r=[];for(let a in i)r.push(this.CreateFromMorphTargetSequence(a,i[a],e,o));return r}resetDuration(){let t=this.tracks,e=0;for(let o=0,i=t.length;o!==i;++o){let s=this.tracks[o];e=Math.max(e,s.times[s.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){let t=[];for(let o=0;o<this.tracks.length;o++)t.push(this.tracks[o].clone());let e=new this.constructor(this.name,this.duration,t,this.blendMode);return e.userData=JSON.parse(JSON.stringify(this.userData)),e}toJSON(){return this.constructor.toJSON(this)}};function d6(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Vc;case"vector":case"vector2":case"vector3":case"vector4":return Tf;case"color":return _f;case"quaternion":return Wc;case"bool":case"boolean":return c0;case"string":return u0}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function p6(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let t=d6(n.type);if(n.times===void 0){let o=[],i=[];YS(n.keys,o,i,"value"),n.times=o,n.values=i}let e;return t.parse!==void 0?e=t.parse(n):e=new t(n.name,n.times,n.values,n.interpolation),id(n.settings)&&(e.settings={inTangents:La(n.settings.inTangents,Float32Array),outTangents:La(n.settings.outTangents,Float32Array)}),e}var Da={enabled:!1,files:{},add:function(n,t){this.enabled!==!1&&(T3(n)||(this.files[n]=t))},get:function(n){if(this.enabled!==!1&&!T3(n))return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};function T3(n){try{let t=n.slice(n.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}var Af=class{constructor(t,e,o){let i=this,s=!1,r=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=o,this._abortController=null,this.itemStart=function(u){a++,s===!1&&i.onStart!==void 0&&i.onStart(u,r,a),s=!0},this.itemEnd=function(u){r++,i.onProgress!==void 0&&i.onProgress(u,r,a),r===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){let g=c[h],v=c[h+1];if(g.global&&(g.lastIndex=0),g.test(u))return v}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Fx=new Af,Ds=class{constructor(t){this.manager=t!==void 0?t:Fx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let o=this;return new Promise(function(i,s){o.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Ds.DEFAULT_MATERIAL_NAME="__DEFAULT";var N0={},zv=class extends Error{constructor(t,e){super(t),this.response=e}},sa=class extends Ds{constructor(t){super(t),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(t,e,o,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let s=Da.get(`file:${t}`);if(s!==void 0){this.manager.itemStart(t),setTimeout(()=>{e&&e(s),this.manager.itemEnd(t)},0);return}if(N0[t]!==void 0){N0[t].push({onLoad:e,onProgress:o,onError:i});return}N0[t]=[],N0[t].push({onLoad:e,onProgress:o,onError:i});let r=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(r).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Dn("FileLoader: HTTP Status 0 received."),typeof ReadableStream=="undefined"||c.body===void 0||c.body.getReader===void 0)return c;let u=N0[t],h=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),g=d?parseInt(d):0,v=g!==0,w=0,x=new ReadableStream({start(m){p();function p(){h.read().then(({done:_,value:b})=>{if(_)m.close();else{w+=b.byteLength;let S=new ProgressEvent("progress",{lengthComputable:v,loaded:w,total:g});for(let T=0,C=u.length;T<C;T++){let E=u[T];E.onProgress&&E.onProgress(S)}m.enqueue(b),p()}},_=>{m.error(_)})}}});return new Response(x)}else throw new zv(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a==="")return c.text();{let h=/charset="?([^;"\s]*)"?/i.exec(a),d=h&&h[1]?h[1].toLowerCase():void 0,g=new TextDecoder(d);return c.arrayBuffer().then(v=>g.decode(v))}}}).then(c=>{Da.add(`file:${t}`,c);let u=N0[t];delete N0[t];for(let h=0,d=u.length;h<d;h++){let g=u[h];g.onLoad&&g.onLoad(c)}}).catch(c=>{let u=N0[t];if(u===void 0)throw this.manager.itemError(t),c;delete N0[t];for(let h=0,d=u.length;h<d;h++){let g=u[h];g.onError&&g.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}},k2=class extends Ds{constructor(t){super(t)}load(t,e,o,i){let s=this,r=new sa(this.manager);r.setPath(this.path),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials),r.load(t,function(a){try{e(s.parse(JSON.parse(a)))}catch(l){i?i(l):io(l),s.manager.itemError(t)}},o,i)}parse(t){let e=[];for(let o=0;o<t.length;o++){let i=Nl.parse(t[o]);e.push(i)}return e}},D2=class extends Ds{constructor(t){super(t)}load(t,e,o,i){let s=this,r=[],a=new Nc,l=new sa(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(s.withCredentials);let c=0;function u(h){l.load(t[h],function(d){let g=s.parse(d,!0);r[h]={width:g.width,height:g.height,format:g.format,mipmaps:g.mipmaps},c+=1,c===6&&(g.mipmapCount===1&&(a.minFilter=Si),a.image=r,a.format=g.format,a.needsUpdate=!0,e&&e(a))},o,i)}if(Array.isArray(t))for(let h=0,d=t.length;h<d;++h)u(h);else l.load(t,function(h){let d=s.parse(h,!0);if(d.isCubemap){let g=d.mipmaps.length/d.mipmapCount;for(let v=0;v<g;v++){r[v]={mipmaps:[]};for(let w=0;w<d.mipmapCount;w++)r[v].mipmaps.push(d.mipmaps[v*d.mipmapCount+w]),r[v].format=d.format,r[v].width=d.width,r[v].height=d.height}a.image=r}else a.image.width=d.width,a.image.height=d.height,a.mipmaps=d.mipmaps;d.mipmapCount===1&&(a.minFilter=Si),a.format=d.format,a.needsUpdate=!0,e&&e(a)},o,i);return a}},Hu=new WeakMap,Fl=class extends Ds{constructor(t){super(t)}load(t,e,o,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let s=this,r=Da.get(`image:${t}`);if(r!==void 0){if(r.complete===!0)s.manager.itemStart(t),setTimeout(function(){e&&e(r),s.manager.itemEnd(t)},0);else{let h=Hu.get(r);h===void 0&&(h=[],Hu.set(r,h)),h.push({onLoad:e,onError:i})}return r}let a=ef("img");function l(){u(),e&&e(this);let h=Hu.get(this)||[];for(let d=0;d<h.length;d++){let g=h[d];g.onLoad&&g.onLoad(this)}Hu.delete(this),s.manager.itemEnd(t)}function c(h){u(),i&&i(h),Da.remove(`image:${t}`);let d=Hu.get(this)||[];for(let g=0;g<d.length;g++){let v=d[g];v.onError&&v.onError(h)}Hu.delete(this),s.manager.itemError(t),s.manager.itemEnd(t)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Da.add(`image:${t}`,a),s.manager.itemStart(t),a.src=t,a}},B2=class extends Ds{constructor(t){super(t)}load(t,e,o,i){let s=new kl;s.colorSpace=Ki;let r=new Fl(this.manager);r.setCrossOrigin(this.crossOrigin),r.setPath(this.path);let a=0;function l(c){r.load(t[c],function(u){s.images[c]=u,a++,a===6&&(s.needsUpdate=!0,e&&e(s))},void 0,i)}for(let c=0;c<t.length;++c)l(c);return s}},U2=class extends Ds{constructor(t){super(t)}load(t,e,o,i){let s=this,r=new rr,a=new sa(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(s.withCredentials),a.load(t,function(l){let c;try{c=s.parse(l)}catch(u){i!==void 0?i(u):io(u);return}s._applyTexData(r,c),e&&e(r,c)},o,i),r}createDataTexture(t){let e=new rr;return this._applyTexData(e,this.parse(t)),e}_applyTexData(t,e){e.image!==void 0?t.image=e.image:e.data!==void 0&&(t.image.width=e.width,t.image.height=e.height,t.image.data=e.data),t.wrapS=e.wrapS!==void 0?e.wrapS:sr,t.wrapT=e.wrapT!==void 0?e.wrapT:sr,t.magFilter=e.magFilter!==void 0?e.magFilter:Si,t.minFilter=e.minFilter!==void 0?e.minFilter:Si,t.anisotropy=e.anisotropy!==void 0?e.anisotropy:1,e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.mipmaps!==void 0&&(t.mipmaps=e.mipmaps,t.minFilter=Ga),e.mipmapCount===1&&(t.minFilter=Si),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),t.needsUpdate=!0}},Cf=class extends Ds{constructor(t){super(t)}load(t,e,o,i){let s=new $i,r=new Fl(this.manager);return r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(t,function(a){s.image=a,s.needsUpdate=!0,e!==void 0&&e(s)},o,i),s}},Na=class extends ri{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new In(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},sp=class extends Na{constructor(t,e,o){super(t,o),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ri.DEFAULT_UP),this.updateMatrix(),this.groundColor=new In(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Ev=new Ao,A3=new Wt,C3=new Wt,Hc=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ln(512,512),this.mapType=cr,this.map=null,this.mapPass=null,this.matrix=new Ao,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new l0,this._frameExtents=new ln(1,1),this._viewportCount=1,this._viewports=[new mi(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;A3.setFromMatrixPosition(t.matrixWorld),e.position.copy(A3),C3.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(C3),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,o,i){Ev.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),o.setFromProjectionMatrix(Ev,t.coordinateSystem,t.reversedDepth);let s=this._frameExtents,r=i?i.z/s.x:1,a=i?i.w/s.y:1,l=i?i.x/s.x:0,c=i?i.y/s.y:0;t.coordinateSystem===Rl||t.reversedDepth?e.set(.5*r,0,0,.5*r+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*r,0,0,.5*r+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(Ev)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},o2=new Wt,i2=new Ps,s0=new Wt,Xc=class extends ri{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ao,this.projectionMatrix=new Ao,this.projectionMatrixInverse=new Ao,this.coordinateSystem=wr,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(o2,i2,s0),s0.x===1&&s0.y===1&&s0.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(o2,i2,s0.set(1,1,1)).invert()}updateWorldMatrix(t,e,o=!1){super.updateWorldMatrix(t,e,o),this.matrixWorld.decompose(o2,i2,s0),s0.x===1&&s0.y===1&&s0.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(o2,i2,s0.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},_l=new Wt,E3=new ln,P3=new ln,Xi=class extends Xc{constructor(t=50,e=1,o=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=o,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ic*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Pc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ic*2*Math.atan(Math.tan(Pc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,o){_l.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(_l.x,_l.y).multiplyScalar(-t/_l.z),_l.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),o.set(_l.x,_l.y).multiplyScalar(-t/_l.z)}getViewSize(t,e){return this.getViewBounds(t,E3,P3),e.subVectors(P3,E3)}setViewOffset(t,e,o,i,s,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=o,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Pc*.5*this.fov)/this.zoom,o=2*e,i=this.aspect*o,s=-.5*i,r=this.view;if(this.view!==null&&this.view.enabled){let l=r.fullWidth,c=r.fullHeight;s+=r.offsetX*i/l,e-=r.offsetY*o/c,i*=r.width/l,o*=r.height/c}let a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-o,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Vv=class extends Hc{constructor(){super(new Xi(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){let e=this.camera,o=Ic*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,s=t.distance||e.far;(o!==e.fov||i!==e.aspect||s!==e.far)&&(e.fov=o,e.aspect=i,e.far=s,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this.aspect=t.aspect,this}toJSON(){let t=super.toJSON();return t.focus=this.focus,t.aspect=this.aspect,t}},rp=class extends Na{constructor(t,e,o=0,i=Math.PI/3,s=0,r=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ri.DEFAULT_UP),this.updateMatrix(),this.target=new ri,this.distance=o,this.angle=i,this.penumbra=s,this.decay=r,this.map=null,this.shadow=new Vv}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.angle=this.angle,e.object.decay=this.decay,e.object.penumbra=this.penumbra,e.object.target=this.target.uuid,this.map&&this.map.isTexture&&(e.object.map=this.map.toJSON(t).uuid),e.object.shadow=this.shadow.toJSON(),e}},Wv=class extends Hc{constructor(){super(new Xi(90,1,.5,500)),this.isPointLightShadow=!0}},ap=class extends Na{constructor(t,e,o=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=o,this.decay=i,this.shadow=new Wv}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},f0=class extends Xc{constructor(t=-1,e=1,o=1,i=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=o,this.bottom=i,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,o,i,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=o,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),o=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=o-t,r=o+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,r=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,r,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Hv=class extends Hc{constructor(){super(new f0(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},lp=class extends Na{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ri.DEFAULT_UP),this.updateMatrix(),this.target=new ri,this.shadow=new Hv}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}},cp=class extends Na{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}},up=class extends Na{constructor(t,e,o=10,i=10){super(t,e),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=o,this.height=i}get power(){return this.intensity*this.width*this.height*Math.PI}set power(t){this.intensity=t/(this.width*this.height*Math.PI)}copy(t){return super.copy(t),this.width=t.width,this.height=t.height,this}toJSON(t){let e=super.toJSON(t);return e.object.width=this.width,e.object.height=this.height,e}},Ef=class{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let t=0;t<9;t++)this.coefficients.push(new Wt)}set(t){for(let e=0;e<9;e++)this.coefficients[e].copy(t[e]);return this}zero(){for(let t=0;t<9;t++)this.coefficients[t].set(0,0,0);return this}getAt(t,e){let o=t.x,i=t.y,s=t.z,r=this.coefficients;return e.copy(r[0]).multiplyScalar(.282095),e.addScaledVector(r[1],.488603*i),e.addScaledVector(r[2],.488603*s),e.addScaledVector(r[3],.488603*o),e.addScaledVector(r[4],1.092548*(o*i)),e.addScaledVector(r[5],1.092548*(i*s)),e.addScaledVector(r[6],.315392*(3*s*s-1)),e.addScaledVector(r[7],1.092548*(o*s)),e.addScaledVector(r[8],.546274*(o*o-i*i)),e}getIrradianceAt(t,e){let o=t.x,i=t.y,s=t.z,r=this.coefficients;return e.copy(r[0]).multiplyScalar(.886227),e.addScaledVector(r[1],2*.511664*i),e.addScaledVector(r[2],2*.511664*s),e.addScaledVector(r[3],2*.511664*o),e.addScaledVector(r[4],2*.429043*o*i),e.addScaledVector(r[5],2*.429043*i*s),e.addScaledVector(r[6],.743125*s*s-.247708),e.addScaledVector(r[7],2*.429043*o*s),e.addScaledVector(r[8],.429043*(o*o-i*i)),e}add(t){for(let e=0;e<9;e++)this.coefficients[e].add(t.coefficients[e]);return this}addScaledSH(t,e){for(let o=0;o<9;o++)this.coefficients[o].addScaledVector(t.coefficients[o],e);return this}scale(t){for(let e=0;e<9;e++)this.coefficients[e].multiplyScalar(t);return this}lerp(t,e){for(let o=0;o<9;o++)this.coefficients[o].lerp(t.coefficients[o],e);return this}equals(t){for(let e=0;e<9;e++)if(!this.coefficients[e].equals(t.coefficients[e]))return!1;return!0}copy(t){return this.set(t.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(t,e=0){let o=this.coefficients;for(let i=0;i<9;i++)o[i].fromArray(t,e+i*3);return this}toArray(t=[],e=0){let o=this.coefficients;for(let i=0;i<9;i++)o[i].toArray(t,e+i*3);return t}static getBasisAt(t,e){let o=t.x,i=t.y,s=t.z;e[0]=.282095,e[1]=.488603*i,e[2]=.488603*s,e[3]=.488603*o,e[4]=1.092548*o*i,e[5]=1.092548*i*s,e[6]=.315392*(3*s*s-1),e[7]=1.092548*o*s,e[8]=.546274*(o*o-i*i)}},fp=class extends Na{constructor(t=new Ef,e=1){super(void 0,e),this.isLightProbe=!0,this.sh=t}copy(t){return super.copy(t),this.sh.copy(t.sh),this}toJSON(t){let e=super.toJSON(t);return e.object.sh=this.sh.toArray(),e}},R3={},hp=class n extends Ds{constructor(t){super(t),this.textures={}}load(t,e,o,i){let s=this,r=new sa(s.manager);r.setPath(s.path),r.setRequestHeader(s.requestHeader),r.setWithCredentials(s.withCredentials),r.load(t,function(a){try{e(s.parse(JSON.parse(a)))}catch(l){i?i(l):io(l),s.manager.itemError(t)}},o,i)}parse(t){let e=this.createMaterialFromType(t.type);return e.fromJSON(t,this.textures),e}setTextures(t){return this.textures=t,this}createMaterialFromType(t){return n.createMaterialFromType(t)}static createMaterialFromType(t){let o={ShadowMaterial:Yd,SpriteMaterial:af,RawShaderMaterial:Mf,ShaderMaterial:ar,PointsMaterial:cf,MeshPhysicalMaterial:q0,MeshStandardMaterial:X0,MeshPhongMaterial:Zd,MeshToonMaterial:Jd,MeshNormalMaterial:jd,MeshLambertMaterial:Kd,MeshDepthMaterial:Ul,MeshDistanceMaterial:Sf,MeshBasicMaterial:Or,MeshMatcapMaterial:Qd,LineDashedMaterial:tp,LineBasicMaterial:Rs,Material:fs,...R3}[t],i;return o===void 0?(r0(`MaterialLoader: Unknown material type "${t}". Use .registerMaterial() before starting the deserialization process.`),i=new fs):i=new o,i}static registerMaterial(t,e){R3[t]=e}},Pf=class{static extractUrlBase(t){let e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}},dp=class extends _o{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}},pp=class extends Ds{constructor(t){super(t)}load(t,e,o,i){let s=this,r=new sa(s.manager);r.setPath(s.path),r.setRequestHeader(s.requestHeader),r.setWithCredentials(s.withCredentials),r.load(t,function(a){try{e(s.parse(JSON.parse(a)))}catch(l){i?i(l):io(l),s.manager.itemError(t)}},o,i)}parse(t){let e={},o={};function i(g,v){if(e[v]!==void 0)return e[v];let x=g.interleavedBuffers[v],m=s(g,x.buffer),p=Zu(x.type,m),_=new Ll(p,x.stride);return _.uuid=x.uuid,x.usage!==void 0&&_.setUsage(x.usage),e[v]=_,_}function s(g,v){if(o[v]!==void 0)return o[v];let x=g.arrayBuffers[v],m=new Uint32Array(x).buffer;return o[v]=m,m}let r=t.isInstancedBufferGeometry?new dp:new _o,a=t.data.index;if(a!==void 0){let g=Zu(a.type,a.array);r.setIndex(new si(g,1))}let l=t.data.attributes;for(let g in l){let v=l[g],w;if(v.isInterleavedBufferAttribute){let x=i(t.data,v.data);w=new G0(x,v.itemSize,v.offset,v.normalized)}else{let x=Zu(v.type,v.array),m=v.isInstancedBufferAttribute?a0:si;w=new m(x,v.itemSize,v.normalized)}v.name!==void 0&&(w.name=v.name),v.usage!==void 0&&w.setUsage(v.usage),v.gpuType!==void 0&&(w.gpuType=v.gpuType),r.setAttribute(g,w)}let c=t.data.morphAttributes;if(c)for(let g in c){let v=c[g],w=[];for(let x=0,m=v.length;x<m;x++){let p=v[x],_;if(p.isInterleavedBufferAttribute){let b=i(t.data,p.data);_=new G0(b,p.itemSize,p.offset,p.normalized)}else{let b=Zu(p.type,p.array);_=new si(b,p.itemSize,p.normalized)}p.name!==void 0&&(_.name=p.name),p.usage!==void 0&&_.setUsage(p.usage),p.gpuType!==void 0&&(_.gpuType=p.gpuType),w.push(_)}r.morphAttributes[g]=w}t.data.morphTargetsRelative&&(r.morphTargetsRelative=!0);let h=t.data.groups||t.data.drawcalls||t.data.offsets;if(h!==void 0)for(let g=0,v=h.length;g!==v;++g){let w=h[g];r.addGroup(w.start,w.count,w.materialIndex)}let d=t.data.boundingSphere;return d!==void 0&&(r.boundingSphere=new us().fromJSON(d)),t.name&&(r.name=t.name),t.userData&&(r.userData=t.userData),r}},Pv={},N2=class extends Ds{constructor(t){super(t)}load(t,e,o,i){let s=this,r=this.path===""?Pf.extractUrlBase(t):this.path;this.resourcePath=this.resourcePath||r;let a=new sa(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(t,function(l){let c=null;try{c=JSON.parse(l)}catch(h){i!==void 0&&i(h),io("ObjectLoader: Can't parse "+t+".",h.message);return}let u=c.metadata;if(u===void 0||u.type===void 0||u.type.toLowerCase()==="geometry"){i!==void 0&&i(new Error("THREE.ObjectLoader: Can't load "+t)),io("ObjectLoader: Can't load "+t);return}s.parse(c,e)},o,i)}async loadAsync(t,e){let o=this,i=this.path===""?Pf.extractUrlBase(t):this.path;this.resourcePath=this.resourcePath||i;let s=new sa(this.manager);s.setPath(this.path),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials);let r=await s.loadAsync(t,e),a;try{a=JSON.parse(r)}catch(c){throw new Error("THREE.ObjectLoader: Can't parse "+t+". "+c.message)}let l=a.metadata;if(l===void 0||l.type===void 0||l.type.toLowerCase()==="geometry")throw new Error("THREE.ObjectLoader: Can't load "+t);return await o.parseAsync(a)}parse(t,e){let o=this.parseAnimations(t.animations),i=this.parseShapes(t.shapes),s=this.parseGeometries(t.geometries,i),r=this.parseImages(t.images,function(){e!==void 0&&e(c)}),a=this.parseTextures(t.textures,r),l=this.parseMaterials(t.materials,a),c=this.parseObject(t.object,s,l,a,o),u=this.parseSkeletons(t.skeletons,c);if(this.bindSkeletons(c,u),this.bindLightTargets(c),e!==void 0){let h=!1;for(let d in r)if(r[d].data instanceof HTMLImageElement){h=!0;break}h===!1&&e(c)}return c}async parseAsync(t){let e=this.parseAnimations(t.animations),o=this.parseShapes(t.shapes),i=this.parseGeometries(t.geometries,o),s=await this.parseImagesAsync(t.images),r=this.parseTextures(t.textures,s),a=this.parseMaterials(t.materials,r),l=this.parseObject(t.object,i,a,r,e),c=this.parseSkeletons(t.skeletons,l);return this.bindSkeletons(l,c),this.bindLightTargets(l),l}static registerGeometry(t,e){Pv[t]=e}parseShapes(t){let e={};if(t!==void 0)for(let o=0,i=t.length;o<i;o++){let s=new Bl().fromJSON(t[o]);e[s.uuid]=s}return e}parseSkeletons(t,e){let o={},i={};if(e.traverse(function(s){s.isBone&&(i[s.uuid]=s)}),t!==void 0)for(let s=0,r=t.length;s<r;s++){let a=new xd().fromJSON(t[s],i);o[a.uuid]=a}return o}parseGeometries(t,e){let o={};if(t!==void 0){let i=new pp;for(let s=0,r=t.length;s<r;s++){let a,l=t[s];switch(l.type){case"BufferGeometry":case"InstancedBufferGeometry":a=i.parse(l);break;default:l.type in S3?a=S3[l.type].fromJSON(l,e):l.type in Pv?a=Pv[l.type].fromJSON(l,e):Dn(`ObjectLoader: Unknown geometry type "${l.type}". Use .registerGeometry() before starting the deserialization process.`)}a.uuid=l.uuid,l.name!==void 0&&(a.name=l.name),l.userData!==void 0&&(a.userData=l.userData),o[l.uuid]=a}}return o}parseMaterials(t,e){let o={},i={};if(t!==void 0){let s=new hp;s.setTextures(e);for(let r=0,a=t.length;r<a;r++){let l=t[r];o[l.uuid]===void 0&&(o[l.uuid]=s.parse(l)),i[l.uuid]=o[l.uuid]}}return i}parseAnimations(t){let e={};if(t!==void 0)for(let o=0;o<t.length;o++){let i=t[o],s=Nl.parse(i);e[s.uuid]=s}return e}parseImages(t,e){let o=this,i={},s;function r(l){return l=o.manager.resolveURL(l),o.manager.itemStart(l),s.load(l,function(){o.manager.itemEnd(l)},void 0,function(){o.manager.itemError(l),o.manager.itemEnd(l)})}function a(l){if(typeof l=="string"){let c=l,u=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(c)?c:o.resourcePath+c;return r(u)}else return l.data?{data:Zu(l.type,l.data),width:l.width,height:l.height}:null}if(t!==void 0&&t.length>0){let l=new Af(e);s=new Fl(l),s.setCrossOrigin(this.crossOrigin);for(let c=0,u=t.length;c<u;c++){let h=t[c],d=h.url;if(Array.isArray(d)){let g=[];for(let v=0,w=d.length;v<w;v++){let x=d[v],m=a(x);m!==null&&(m instanceof HTMLImageElement?g.push(m):g.push(new rr(m.data,m.width,m.height)))}i[h.uuid]=new ta(g)}else{let g=a(h.url);i[h.uuid]=new ta(g)}}}return i}async parseImagesAsync(t){let e=this,o={},i;async function s(r){if(typeof r=="string"){let a=r,l=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(a)?a:e.resourcePath+a;return await i.loadAsync(l)}else return r.data?{data:Zu(r.type,r.data),width:r.width,height:r.height}:null}if(t!==void 0&&t.length>0){i=new Fl(this.manager),i.setCrossOrigin(this.crossOrigin);for(let r=0,a=t.length;r<a;r++){let l=t[r],c=l.url;if(Array.isArray(c)){let u=[];for(let h=0,d=c.length;h<d;h++){let g=c[h],v=await s(g);v!==null&&(v instanceof HTMLImageElement?u.push(v):u.push(new rr(v.data,v.width,v.height)))}o[l.uuid]=new ta(u)}else{let u=await s(l.url);o[l.uuid]=new ta(u)}}}return o}parseTextures(t,e){function o(s,r){return typeof s=="number"?s:(Dn("ObjectLoader.parseTexture: Constant should be in numeric form.",s),r[s])}let i={};if(t!==void 0)for(let s=0,r=t.length;s<r;s++){let a=t[s];a.image===void 0&&Dn('ObjectLoader: No "image" specified for',a.uuid),e[a.image]===void 0&&Dn("ObjectLoader: Undefined image",a.image);let l=e[a.image],c=l.data,u;Array.isArray(c)?(u=new kl,c.length===6&&(u.needsUpdate=!0)):(c&&c.data?u=new rr:u=new $i,c&&(u.needsUpdate=!0)),u.source=l,u.uuid=a.uuid,a.name!==void 0&&(u.name=a.name),a.mapping!==void 0&&(u.mapping=o(a.mapping,m6)),a.channel!==void 0&&(u.channel=a.channel),a.offset!==void 0&&u.offset.fromArray(a.offset),a.repeat!==void 0&&u.repeat.fromArray(a.repeat),a.center!==void 0&&u.center.fromArray(a.center),a.rotation!==void 0&&(u.rotation=a.rotation),a.wrap!==void 0&&(u.wrapS=o(a.wrap[0],I3),u.wrapT=o(a.wrap[1],I3)),a.format!==void 0&&(u.format=a.format),a.internalFormat!==void 0&&(u.internalFormat=a.internalFormat),a.type!==void 0&&(u.type=a.type),a.colorSpace!==void 0&&(u.colorSpace=a.colorSpace),a.minFilter!==void 0&&(u.minFilter=o(a.minFilter,L3)),a.magFilter!==void 0&&(u.magFilter=o(a.magFilter,L3)),a.anisotropy!==void 0&&(u.anisotropy=a.anisotropy),a.flipY!==void 0&&(u.flipY=a.flipY),a.generateMipmaps!==void 0&&(u.generateMipmaps=a.generateMipmaps),a.premultiplyAlpha!==void 0&&(u.premultiplyAlpha=a.premultiplyAlpha),a.unpackAlignment!==void 0&&(u.unpackAlignment=a.unpackAlignment),a.compareFunction!==void 0&&(u.compareFunction=a.compareFunction),a.normalized!==void 0&&(u.normalized=a.normalized),a.userData!==void 0&&(u.userData=a.userData),i[a.uuid]=u}return i}parseObject(t,e,o,i,s){let r;function a(d){return e[d]===void 0&&Dn("ObjectLoader: Undefined geometry",d),e[d]}function l(d){if(d!==void 0){if(Array.isArray(d)){let g=[];for(let v=0,w=d.length;v<w;v++){let x=d[v];o[x]===void 0&&Dn("ObjectLoader: Undefined material",x),g.push(o[x])}return g}return o[d]===void 0&&Dn("ObjectLoader: Undefined material",d),o[d]}}function c(d){return i[d]===void 0&&Dn("ObjectLoader: Undefined texture",d),i[d]}let u,h;switch(t.type){case"Scene":r=new Uc,t.background!==void 0&&(Number.isInteger(t.background)?r.background=new In(t.background):r.background=c(t.background)),t.environment!==void 0&&(r.environment=c(t.environment)),t.fog!==void 0&&(t.fog.type==="Fog"?r.fog=new md(t.fog.color,t.fog.near,t.fog.far):t.fog.type==="FogExp2"&&(r.fog=new pd(t.fog.color,t.fog.density)),t.fog.name!==""&&(r.fog.name=t.fog.name)),t.backgroundBlurriness!==void 0&&(r.backgroundBlurriness=t.backgroundBlurriness),t.backgroundIntensity!==void 0&&(r.backgroundIntensity=t.backgroundIntensity),t.backgroundRotation!==void 0&&r.backgroundRotation.fromArray(t.backgroundRotation),t.environmentIntensity!==void 0&&(r.environmentIntensity=t.environmentIntensity),t.environmentRotation!==void 0&&r.environmentRotation.fromArray(t.environmentRotation);break;case"PerspectiveCamera":r=new Xi(t.fov,t.aspect,t.near,t.far),t.focus!==void 0&&(r.focus=t.focus),t.zoom!==void 0&&(r.zoom=t.zoom),t.filmGauge!==void 0&&(r.filmGauge=t.filmGauge),t.filmOffset!==void 0&&(r.filmOffset=t.filmOffset),t.view!==void 0&&(r.view=Object.assign({},t.view));break;case"OrthographicCamera":r=new f0(t.left,t.right,t.top,t.bottom,t.near,t.far),t.zoom!==void 0&&(r.zoom=t.zoom),t.view!==void 0&&(r.view=Object.assign({},t.view));break;case"AmbientLight":r=new cp(t.color,t.intensity);break;case"DirectionalLight":r=new lp(t.color,t.intensity),r.target=t.target||"";break;case"PointLight":r=new ap(t.color,t.intensity,t.distance,t.decay);break;case"RectAreaLight":r=new up(t.color,t.intensity,t.width,t.height);break;case"SpotLight":r=new rp(t.color,t.intensity,t.distance,t.angle,t.penumbra,t.decay),r.target=t.target||"";break;case"HemisphereLight":r=new sp(t.color,t.groundColor,t.intensity);break;case"LightProbe":let d=new Ef().fromArray(t.sh);r=new fp(d,t.intensity);break;case"SkinnedMesh":u=a(t.geometry),h=l(t.material),r=new vd(u,h),t.bindMode!==void 0&&(r.bindMode=t.bindMode),t.bindMatrix!==void 0&&r.bindMatrix.fromArray(t.bindMatrix),t.skeleton!==void 0&&(r.skeleton=t.skeleton);break;case"Mesh":u=a(t.geometry),h=l(t.material),r=new yi(u,h);break;case"InstancedMesh":u=a(t.geometry),h=l(t.material);let g=t.count,v=t.instanceMatrix,w=t.instanceColor;r=new bd(u,h,g),r.instanceMatrix=new a0(new Float32Array(v.array),16),w!==void 0&&(r.instanceColor=new a0(new Float32Array(w.array),w.itemSize));break;case"BatchedMesh":u=a(t.geometry),h=l(t.material),r=new Sd(t.maxInstanceCount,t.maxVertexCount,t.maxIndexCount,h),r.geometry=u,r.perObjectFrustumCulled=t.perObjectFrustumCulled,r.sortObjects=t.sortObjects,r._drawRanges=t.drawRanges,r._reservedRanges=t.reservedRanges,r._geometryInfo=t.geometryInfo.map(x=>{let m=null,p=null;return x.boundingBox!==void 0&&(m=new ys().fromJSON(x.boundingBox)),x.boundingSphere!==void 0&&(p=new us().fromJSON(x.boundingSphere)),{...x,boundingBox:m,boundingSphere:p}}),r._instanceInfo=t.instanceInfo,r._availableInstanceIds=t._availableInstanceIds,r._availableGeometryIds=t._availableGeometryIds,r._nextIndexStart=t.nextIndexStart,r._nextVertexStart=t.nextVertexStart,r._geometryCount=t.geometryCount,r._maxInstanceCount=t.maxInstanceCount,r._maxVertexCount=t.maxVertexCount,r._maxIndexCount=t.maxIndexCount,r._geometryInitialized=t.geometryInitialized,r._matricesTexture=c(t.matricesTexture.uuid),r._indirectTexture=c(t.indirectTexture.uuid),t.colorsTexture!==void 0&&(r._colorsTexture=c(t.colorsTexture.uuid)),t.boundingSphere!==void 0&&(r.boundingSphere=new us().fromJSON(t.boundingSphere)),t.boundingBox!==void 0&&(r.boundingBox=new ys().fromJSON(t.boundingBox));break;case"LOD":r=new yd;break;case"Line":r=new Ua(a(t.geometry),l(t.material));break;case"LineLoop":r=new wd(a(t.geometry),l(t.material));break;case"LineSegments":r=new Gr(a(t.geometry),l(t.material));break;case"PointCloud":case"Points":r=new _d(a(t.geometry),l(t.material));break;case"Sprite":r=new gd(l(t.material));break;case"Group":r=new ea;break;case"Bone":r=new lf;break;default:r=new ri}if(r.uuid=t.uuid,t.name!==void 0&&(r.name=t.name),t.matrix!==void 0?(r.matrix.fromArray(t.matrix),t.matrixAutoUpdate!==void 0&&(r.matrixAutoUpdate=t.matrixAutoUpdate),r.matrixAutoUpdate&&r.matrix.decompose(r.position,r.quaternion,r.scale)):(t.position!==void 0&&r.position.fromArray(t.position),t.rotation!==void 0&&r.rotation.fromArray(t.rotation),t.quaternion!==void 0&&r.quaternion.fromArray(t.quaternion),t.scale!==void 0&&r.scale.fromArray(t.scale)),t.up!==void 0&&r.up.fromArray(t.up),t.pivot!==void 0&&(r.pivot=new Wt().fromArray(t.pivot)),t.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),t.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=t.morphTargetInfluences.slice()),t.castShadow!==void 0&&(r.castShadow=t.castShadow),t.receiveShadow!==void 0&&(r.receiveShadow=t.receiveShadow),t.shadow&&(t.shadow.intensity!==void 0&&(r.shadow.intensity=t.shadow.intensity),t.shadow.bias!==void 0&&(r.shadow.bias=t.shadow.bias),t.shadow.normalBias!==void 0&&(r.shadow.normalBias=t.shadow.normalBias),t.shadow.radius!==void 0&&(r.shadow.radius=t.shadow.radius),t.shadow.blurSamples!==void 0&&(r.shadow.blurSamples=t.shadow.blurSamples),t.shadow.focus!==void 0&&(r.shadow.focus=t.shadow.focus),t.shadow.aspect!==void 0&&(r.shadow.aspect=t.shadow.aspect),t.shadow.mapSize!==void 0&&r.shadow.mapSize.fromArray(t.shadow.mapSize),t.shadow.camera!==void 0&&(r.shadow.camera=this.parseObject(t.shadow.camera))),t.visible!==void 0&&(r.visible=t.visible),t.frustumCulled!==void 0&&(r.frustumCulled=t.frustumCulled),t.renderOrder!==void 0&&(r.renderOrder=t.renderOrder),t.static!==void 0&&(r.static=t.static),t.userData!==void 0&&(r.userData=t.userData),t.layers!==void 0&&(r.layers.mask=t.layers),t.children!==void 0){let d=t.children;for(let g=0;g<d.length;g++)r.add(this.parseObject(d[g],e,o,i,s))}if(t.animations!==void 0){let d=t.animations;for(let g=0;g<d.length;g++){let v=d[g];r.animations.push(s[v])}}if(t.type==="LOD"){t.autoUpdate!==void 0&&(r.autoUpdate=t.autoUpdate);let d=t.levels;for(let g=0;g<d.length;g++){let v=d[g],w=r.getObjectByProperty("uuid",v.object);w!==void 0&&r.addLevel(w,v.distance,v.hysteresis)}}return r}bindSkeletons(t,e){Object.keys(e).length!==0&&t.traverse(function(o){if(o.isSkinnedMesh===!0&&o.skeleton!==void 0){let i=e[o.skeleton];i===void 0?Dn("ObjectLoader: No skeleton found with UUID:",o.skeleton):o.bind(i,o.bindMatrix)}})}bindLightTargets(t){t.traverse(function(e){if(e.isDirectionalLight||e.isSpotLight){let o=e.target,i=t.getObjectByProperty("uuid",o);i!==void 0?e.target=i:e.target=new ri}})}},m6={UVMapping:Sp,CubeReflectionMapping:Oa,CubeRefractionMapping:Z0,EquirectangularReflectionMapping:kf,EquirectangularRefractionMapping:Df,CubeUVReflectionMapping:Yc},I3={RepeatWrapping:El,ClampToEdgeWrapping:sr,MirroredRepeatWrapping:Pl},L3={NearestFilter:qi,NearestMipmapNearestFilter:Lg,NearestMipmapLinearFilter:Zc,LinearFilter:Si,LinearMipmapNearestFilter:Bf,LinearMipmapLinearFilter:Ga},Rv=new WeakMap,F2=class extends Ds{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap=="undefined"&&Dn("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch=="undefined"&&Dn("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(t){return this.options=t,this}load(t,e,o,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let s=this,r=Da.get(`image-bitmap:${t}`);if(r!==void 0){if(s.manager.itemStart(t),r.then){r.then(c=>{Rv.has(r)===!0?(i&&i(Rv.get(r)),s.manager.itemError(t),s.manager.itemEnd(t)):(e&&e(c),s.manager.itemEnd(t))});return}setTimeout(function(){e&&e(r),s.manager.itemEnd(t)},0);return}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(t,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},s.options,{colorSpaceConversion:"none"}))}).then(function(c){return Da.add(`image-bitmap:${t}`,c),e&&e(c),s.manager.itemEnd(t),c}).catch(function(c){i&&i(c),Rv.set(l,c),Da.remove(`image-bitmap:${t}`),s.manager.itemError(t),s.manager.itemEnd(t)});Da.add(`image-bitmap:${t}`,l),s.manager.itemStart(t)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}},s2,Rf=class{static getContext(){return s2===void 0&&(s2=new(window.AudioContext||window.webkitAudioContext)),s2}static setContext(t){s2=t}},O2=class extends Ds{constructor(t){super(t)}load(t,e,o,i){let s=this,r=new sa(this.manager);r.setResponseType("arraybuffer"),r.setPath(this.path),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials),r.load(t,function(l){try{let c=l.slice(0),u=Rf.getContext(),h=t+"#decode";s.manager.itemStart(h),u.decodeAudioData(c,function(d){e(d),s.manager.itemEnd(h)}).catch(function(d){a(d),s.manager.itemEnd(h)})}catch(c){a(c)}},o,i);function a(l){i?i(l):io(l),s.manager.itemError(t)}}},k3=new Ao,D3=new Ao,wc=new Ao,G2=class{constructor(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new Xi,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new Xi,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}update(t){let e=this._cache;if(e.focus!==t.focus||e.fov!==t.fov||e.aspect!==t.aspect*this.aspect||e.near!==t.near||e.far!==t.far||e.zoom!==t.zoom||e.eyeSep!==this.eyeSep){e.focus=t.focus,e.fov=t.fov,e.aspect=t.aspect*this.aspect,e.near=t.near,e.far=t.far,e.zoom=t.zoom,e.eyeSep=this.eyeSep,wc.copy(t.projectionMatrix);let i=e.eyeSep/2,s=i*e.near/e.focus,r=e.near*Math.tan(Pc*e.fov*.5)/e.zoom,a,l;D3.elements[12]=-i,k3.elements[12]=i,a=-r*e.aspect+s,l=r*e.aspect+s,wc.elements[0]=2*e.near/(l-a),wc.elements[8]=(l+a)/(l-a),this.cameraL.projectionMatrix.copy(wc),a=-r*e.aspect-s,l=r*e.aspect-s,wc.elements[0]=2*e.near/(l-a),wc.elements[8]=(l+a)/(l-a),this.cameraR.projectionMatrix.copy(wc)}this.cameraL.matrix.copy(t.matrixWorld).multiply(D3),this.cameraL.matrixWorldNeedsUpdate=!0,this.cameraR.matrix.copy(t.matrixWorld).multiply(k3),this.cameraR.matrixWorldNeedsUpdate=!0}},Xu=-90,qu=1,mp=class extends ri{constructor(t,e,o){super(),this.type="CubeCamera",this.renderTarget=o,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Xi(Xu,qu,t,e);i.layers=this.layers,this.add(i);let s=new Xi(Xu,qu,t,e);s.layers=this.layers,this.add(s);let r=new Xi(Xu,qu,t,e);r.layers=this.layers,this.add(r);let a=new Xi(Xu,qu,t,e);a.layers=this.layers,this.add(a);let l=new Xi(Xu,qu,t,e);l.layers=this.layers,this.add(l);let c=new Xi(Xu,qu,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[o,i,s,r,a,l]=e;for(let c of e)this.remove(c);if(t===wr)o.up.set(0,1,0),o.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Rl)o.up.set(0,-1,0),o.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:o,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,r,a,l,c,u]=this.children,h=t.getRenderTarget(),d=t.getActiveCubeFace(),g=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;let w=o.texture.generateMipmaps;o.texture.generateMipmaps=!1;let x=!1;t.isWebGLRenderer===!0?x=t.state.buffers.depth.getReversed():x=t.reversedDepthBuffer,t.setRenderTarget(o,0,i),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,s),t.setRenderTarget(o,1,i),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(o,2,i),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(o,3,i),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(o,4,i),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),o.texture.generateMipmaps=w,t.setRenderTarget(o,5,i),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(h,d,g),t.xr.enabled=v,o.texture.needsPMREMUpdate=!0}},gp=class extends Xi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}},yp=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=g6.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function g6(){this._document.hidden===!1&&this.reset()}var _c=new Wt,Iv=new Ps,y6=new Wt,Tc=new Wt,Ac=new Wt,z2=class extends ri{constructor(){super(),this.type="AudioListener",this.context=Rf.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._timer=new yp}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(t){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=t,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),this}updateMatrixWorld(t){super.updateMatrixWorld(t),this._timer.update();let e=this.context.listener;if(this.timeDelta=this._timer.getDelta(),this.matrixWorld.decompose(_c,Iv,y6),Tc.set(0,0,-1).applyQuaternion(Iv),Ac.set(0,1,0).applyQuaternion(Iv),e.positionX){let o=this.context.currentTime+this.timeDelta;e.positionX.linearRampToValueAtTime(_c.x,o),e.positionY.linearRampToValueAtTime(_c.y,o),e.positionZ.linearRampToValueAtTime(_c.z,o),e.forwardX.linearRampToValueAtTime(Tc.x,o),e.forwardY.linearRampToValueAtTime(Tc.y,o),e.forwardZ.linearRampToValueAtTime(Tc.z,o),e.upX.linearRampToValueAtTime(Ac.x,o),e.upY.linearRampToValueAtTime(Ac.y,o),e.upZ.linearRampToValueAtTime(Ac.z,o)}else e.setPosition(_c.x,_c.y,_c.z),e.setOrientation(Tc.x,Tc.y,Tc.z,Ac.x,Ac.y,Ac.z)}},vp=class extends ri{constructor(t){super(),this.type="Audio",this.listener=t,this.context=t.context,this.gain=this.context.createGain(),this.gain.connect(t.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(t){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=t,this.connect(),this}setMediaElementSource(t){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(t),this.connect(),this}setMediaStreamSource(t){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(t),this.connect(),this}setBuffer(t){return this.buffer=t,this.sourceType="buffer",this.autoplay&&this.play(),this}play(t=0){if(this.isPlaying===!0){Dn("Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){Dn("Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+t;let e=this.context.createBufferSource();return e.buffer=this.buffer,e.loop=this.loop,e.loopStart=this.loopStart,e.loopEnd=this.loopEnd,e.onended=this.onEnded.bind(this),e.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=e,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){Dn("Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(t=0){if(this.hasPlaybackControl===!1){Dn("Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(this.context.currentTime+t),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let t=1,e=this.filters.length;t<e;t++)this.filters[t-1].connect(this.filters[t]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let t=1,e=this.filters.length;t<e;t++)this.filters[t-1].disconnect(this.filters[t]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(t){return t||(t=[]),this._connected===!0?(this.disconnect(),this.filters=t.slice(),this.connect()):this.filters=t.slice(),this}setDetune(t){return this.detune=t,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(t){return this.setFilters(t?[t]:[])}setPlaybackRate(t){if(this.hasPlaybackControl===!1){Dn("Audio: this Audio has no playback control.");return}return this.playbackRate=t,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1,this._progress=0}getLoop(){return this.hasPlaybackControl===!1?(Dn("Audio: this Audio has no playback control."),!1):this.loop}setLoop(t){if(this.hasPlaybackControl===!1){Dn("Audio: this Audio has no playback control.");return}return this.loop=t,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(t){return this.loopStart=t,this}setLoopEnd(t){return this.loopEnd=t,this}getVolume(){return this.gain.gain.value}setVolume(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),this}copy(t,e){return super.copy(t,e),t.sourceType!=="buffer"?(Dn("Audio: Audio source type cannot be copied."),this):(this.autoplay=t.autoplay,this.buffer=t.buffer,this.detune=t.detune,this.loop=t.loop,this.loopStart=t.loopStart,this.loopEnd=t.loopEnd,this.offset=t.offset,this.duration=t.duration,this.playbackRate=t.playbackRate,this.hasPlaybackControl=t.hasPlaybackControl,this.sourceType=t.sourceType,this.filters=t.filters.slice(),this)}clone(t){return new this.constructor(this.listener).copy(this,t)}},Cc=new Wt,B3=new Ps,v6=new Wt,Ec=new Wt,V2=class extends vp{constructor(t){super(t),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}connect(){return super.connect(),this.panner.connect(this.gain),this}disconnect(){return super.disconnect(),this.panner.disconnect(this.gain),this}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(t){return this.panner.refDistance=t,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(t){return this.panner.rolloffFactor=t,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(t){return this.panner.distanceModel=t,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(t){return this.panner.maxDistance=t,this}setDirectionalCone(t,e,o){return this.panner.coneInnerAngle=t,this.panner.coneOuterAngle=e,this.panner.coneOuterGain=o,this}updateMatrixWorld(t){if(super.updateMatrixWorld(t),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(Cc,B3,v6),Ec.set(0,0,1).applyQuaternion(B3);let e=this.panner;if(e.positionX){let o=this.context.currentTime+this.listener.timeDelta;e.positionX.linearRampToValueAtTime(Cc.x,o),e.positionY.linearRampToValueAtTime(Cc.y,o),e.positionZ.linearRampToValueAtTime(Cc.z,o),e.orientationX.linearRampToValueAtTime(Ec.x,o),e.orientationY.linearRampToValueAtTime(Ec.y,o),e.orientationZ.linearRampToValueAtTime(Ec.z,o)}else e.setPosition(Cc.x,Cc.y,Cc.z),e.setOrientation(Ec.x,Ec.y,Ec.z)}},W2=class{constructor(t,e=2048){this.analyser=t.context.createAnalyser(),this.analyser.fftSize=e,this.data=new Uint8Array(this.analyser.frequencyBinCount),t.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let t=0,e=this.getFrequencyData();for(let o=0;o<e.length;o++)t+=e[o];return t/e.length}},xp=class{constructor(t,e,o){this.binding=t,this.valueSize=o;let i,s,r;switch(e){case"quaternion":i=this._slerp,s=this._slerpAdditive,r=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(o*6),this._workIndex=5;break;case"string":case"bool":i=this._select,s=this._select,r=this._setAdditiveIdentityOther,this.buffer=new Array(o*5);break;default:i=this._lerp,s=this._lerpAdditive,r=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(o*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=s,this._setIdentity=r,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(t,e){let o=this.buffer,i=this.valueSize,s=t*i+i,r=this.cumulativeWeight;if(r===0){for(let a=0;a!==i;++a)o[s+a]=o[a];r=e}else{r+=e;let a=e/r;this._mixBufferRegion(o,s,0,a,i)}this.cumulativeWeight=r}accumulateAdditive(t){let e=this.buffer,o=this.valueSize,i=o*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(e,i,0,t,o),this.cumulativeWeightAdditive+=t}apply(t){let e=this.valueSize,o=this.buffer,i=t*e+e,s=this.cumulativeWeight,r=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){let l=e*this._origIndex;this._mixBufferRegion(o,i,l,1-s,e)}r>0&&this._mixBufferRegionAdditive(o,i,this._addIndex*e,1,e);for(let l=e,c=e+e;l!==c;++l)if(o[l]!==o[l+e]){a.setValue(o,i);break}}saveOriginalState(){let t=this.binding,e=this.buffer,o=this.valueSize,i=o*this._origIndex;t.getValue(e,i);for(let s=o,r=i;s!==r;++s)e[s]=e[i+s%o];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let t=this.valueSize*3;this.binding.setValue(this.buffer,t)}_setAdditiveIdentityNumeric(){let t=this._addIndex*this.valueSize,e=t+this.valueSize;for(let o=t;o<e;o++)this.buffer[o]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let t=this._origIndex*this.valueSize,e=this._addIndex*this.valueSize;for(let o=0;o<this.valueSize;o++)this.buffer[e+o]=this.buffer[t+o]}_select(t,e,o,i,s){if(i>=.5)for(let r=0;r!==s;++r)t[e+r]=t[o+r]}_slerp(t,e,o,i){Ps.slerpFlat(t,e,t,e,t,o,i)}_slerpAdditive(t,e,o,i,s){let r=this._workIndex*s;Ps.multiplyQuaternionsFlat(t,r,t,e,t,o),Ps.slerpFlat(t,e,t,e,t,r,i)}_lerp(t,e,o,i,s){let r=1-i;for(let a=0;a!==s;++a){let l=e+a;t[l]=t[l]*r+t[o+a]*i}}_lerpAdditive(t,e,o,i,s){for(let r=0;r!==s;++r){let a=e+r;t[a]=t[a]+t[o+r]*i}}},Ox="\\[\\]\\.:\\/",x6=new RegExp("["+Ox+"]","g"),Gx="[^"+Ox+"]",b6="[^"+Ox.replace("\\.","")+"]",M6=/((?:WC+[\/:])*)/.source.replace("WC",Gx),S6=/(WCOD+)?/.source.replace("WCOD",b6),w6=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Gx),_6=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Gx),T6=new RegExp("^"+M6+S6+w6+_6+"$"),A6=["material","materials","bones","map"],Xv=class{constructor(t,e,o){let i=o||pi.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let o=this._targetGroup.nCachedObjects_,i=this._bindings[o];i!==void 0&&i.getValue(t,e)}setValue(t,e){let o=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=o.length;i!==s;++i)o[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,o=t.length;e!==o;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,o=t.length;e!==o;++e)t[e].unbind()}},pi=class n{constructor(t,e,o){this.path=e,this.parsedPath=o||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,o){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,o):new n(t,e,o)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(x6,"")}static parseTrackName(t){let e=T6.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let o={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=o.nodeName&&o.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=o.nodeName.substring(i+1);A6.indexOf(s)!==-1&&(o.nodeName=o.nodeName.substring(0,i),o.objectName=s)}if(o.propertyName===null||o.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return o}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let o=t.skeleton.getBoneByName(e);if(o!==void 0)return o}if(t.children){let o=function(s){for(let r=0;r<s.length;r++){let a=s[r];if(a.name===e||a.uuid===e)return a;let l=o(a.children);if(l)return l}return null},i=o(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let o=this.resolvedProperty;for(let i=0,s=o.length;i!==s;++i)t[e++]=o[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let o=this.resolvedProperty;for(let i=0,s=o.length;i!==s;++i)o[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let o=this.resolvedProperty;for(let i=0,s=o.length;i!==s;++i)o[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let o=this.resolvedProperty;for(let i=0,s=o.length;i!==s;++i)o[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,o=e.objectName,i=e.propertyName,s=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Dn("PropertyBinding: No target node found for track: "+this.path+".");return}if(o){let c=e.objectIndex;switch(o){case"materials":if(!t.material){io("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){io("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){io("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===c){c=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){io("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){io("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[o]===void 0){io("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[o]}if(c!==void 0){if(t[c]===void 0){io("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let r=t[i];if(r===void 0){let c=e.nodeName;io("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){io("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){io("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=s}else r.fromArray!==void 0&&r.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(l=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};pi.Composite=Xv;pi.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};pi.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};pi.prototype.GetterByBindingType=[pi.prototype._getValue_direct,pi.prototype._getValue_array,pi.prototype._getValue_arrayElement,pi.prototype._getValue_toArray];pi.prototype.SetterByBindingTypeAndVersioning=[[pi.prototype._setValue_direct,pi.prototype._setValue_direct_setNeedsUpdate,pi.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[pi.prototype._setValue_array,pi.prototype._setValue_array_setNeedsUpdate,pi.prototype._setValue_array_setMatrixWorldNeedsUpdate],[pi.prototype._setValue_arrayElement,pi.prototype._setValue_arrayElement_setNeedsUpdate,pi.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[pi.prototype._setValue_fromArray,pi.prototype._setValue_fromArray_setNeedsUpdate,pi.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var H2=class{constructor(){this.isAnimationObjectGroup=!0,this.uuid=Fr(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;let t={};this._indicesByUUID=t;for(let o=0,i=arguments.length;o!==i;++o)t[arguments[o].uuid]=o;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};let e=this;this.stats={objects:{get total(){return e._objects.length},get inUse(){return this.total-e.nCachedObjects_}},get bindingsPerObject(){return e._bindings.length}}}add(){let t=this._objects,e=this._indicesByUUID,o=this._paths,i=this._parsedPaths,s=this._bindings,r=s.length,a,l=t.length,c=this.nCachedObjects_;for(let u=0,h=arguments.length;u!==h;++u){let d=arguments[u],g=d.uuid,v=e[g];if(v===void 0){v=l++,e[g]=v,t.push(d);for(let w=0,x=r;w!==x;++w)s[w].push(new pi(d,o[w],i[w]))}else if(v<c){a=t[v];let w=--c,x=t[w];e[x.uuid]=v,t[v]=x,e[g]=w,t[w]=d;for(let m=0,p=r;m!==p;++m){let _=s[m],b=_[w],S=_[v];_[v]=b,S===void 0&&(S=new pi(d,o[m],i[m])),_[w]=S}}else t[v]!==a&&io("AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=c}remove(){let t=this._objects,e=this._indicesByUUID,o=this._bindings,i=o.length,s=this.nCachedObjects_;for(let r=0,a=arguments.length;r!==a;++r){let l=arguments[r],c=l.uuid,u=e[c];if(u!==void 0&&u>=s){let h=s++,d=t[h];e[d.uuid]=u,t[u]=d,e[c]=h,t[h]=l;for(let g=0,v=i;g!==v;++g){let w=o[g],x=w[h],m=w[u];w[u]=x,w[h]=m}}}this.nCachedObjects_=s}uncache(){let t=this._objects,e=this._indicesByUUID,o=this._bindings,i=o.length,s=this.nCachedObjects_,r=t.length;for(let a=0,l=arguments.length;a!==l;++a){let c=arguments[a],u=c.uuid,h=e[u];if(h!==void 0)if(delete e[u],h<s){let d=--s,g=t[d],v=--r,w=t[v];h!==d&&(e[g.uuid]=h),t[h]=g,d!==v&&(e[w.uuid]=d),t[d]=w,t.pop();for(let x=0,m=i;x!==m;++x){let p=o[x],_=p[d],b=p[v];p[h]=_,p[d]=b,p.pop()}}else{let d=--r,g=t[d];h!==d&&(e[g.uuid]=h),t[h]=g,t.pop();for(let v=0,w=i;v!==w;++v){let x=o[v];x[h]=x[d],x.pop()}}}this.nCachedObjects_=s}subscribe_(t,e){let o=this._bindingsIndicesByPath,i=o[t],s=this._bindings;if(i!==void 0)return s[i];let r=this._paths,a=this._parsedPaths,l=this._objects,c=l.length,u=this.nCachedObjects_,h=new Array(c);i=s.length,o[t]=i,r.push(t),a.push(e),s.push(h);for(let d=u,g=l.length;d!==g;++d){let v=l[d];h[d]=new pi(v,t,e)}return h}unsubscribe_(t){let e=this._bindingsIndicesByPath,o=e[t];if(o!==void 0){let i=this._paths,s=this._parsedPaths,r=this._bindings,a=r.length-1,l=r[a],c=i[a];e[c]=o,r[o]=l,r.pop(),s[o]=s[a],s.pop(),i[o]=i[a],i.pop()}}},bp=class{constructor(t,e,o=null,i=e.blendMode){this._mixer=t,this._clip=e,this._localRoot=o,this.blendMode=i;let s=e.tracks,r=s.length,a=new Array(r),l={endingStart:Al,endingEnd:Al};for(let c=0;c!==r;++c){let u=s[c].createInterpolant(null);a[c]=u,u.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(r),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=xx,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(t){return this._startTime=t,this}setLoop(t,e){return this.loop=t,this.repetitions=e,this}setEffectiveWeight(t){return this.weight=t,this._effectiveWeight=this.enabled?t:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(t){return this._scheduleFading(t,0,1)}fadeOut(t){return this._scheduleFading(t,1,0)}crossFadeFrom(t,e,o=!1){if(t.fadeOut(e),this.fadeIn(e),o===!0){let i=this._clip.duration,s=t._clip.duration,r=s/i,a=i/s;t._restoreTimeScale=t.timeScale,this._restoreTimeScale=this.timeScale,t.warp(1,r,e),this.warp(a,1,e)}return this}crossFadeTo(t,e,o=!1){return t.crossFadeFrom(this,e,o)}stopFading(){let t=this._weightInterpolant;return t!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}setEffectiveTimeScale(t){return this.timeScale=t,this._effectiveTimeScale=this.paused?0:t,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(t){return this.timeScale=this._clip.duration/t,this.stopWarping()}syncWith(t){return this.time=t.time,this.timeScale=t.timeScale,this.stopWarping()}halt(t){return this.warp(this._effectiveTimeScale,0,t)}warp(t,e,o){let i=this._mixer,s=i.time,r=this.timeScale,a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);let l=a.parameterPositions,c=a.sampleValues;return l[0]=s,l[1]=s+o,c[0]=t/r,c[1]=e/r,this}stopWarping(){let t=this._timeScaleInterpolant;return t!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(t,e,o,i){if(!this.enabled){this._updateWeight(t);return}let s=this._startTime;if(s!==null){let l=(t-s)*o;l<0||o===0?e=0:(this._startTime=null,e=o*l)}e*=this._updateTimeScale(t);let r=this._updateTime(e),a=this._updateWeight(t);if(a>0){let l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case Og:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(r),c[u].accumulateAdditive(a);break;case sm:default:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(r),c[u].accumulate(i,a)}}}_updateWeight(t){let e=0;if(this.enabled){e=this.weight;let o=this._weightInterpolant;if(o!==null){let i=o.evaluate(t)[0];e*=i,t>o.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=e,e}_updateTimeScale(t){let e=0;if(!this.paused){e=this.timeScale;let o=this._timeScaleInterpolant;if(o!==null){let i=o.evaluate(t)[0];e*=i,t>o.parameterPositions[1]&&(e===0?this.paused=!0:(this._restoreTimeScale!==null&&(e=this._restoreTimeScale),this.timeScale=e),this.stopWarping())}}return this._effectiveTimeScale=e,e}_updateTime(t){let e=this._clip.duration,o=this.loop,i=this.time+t,s=this._loopCount,r=o===bx;if(t===0)return s===-1?i:r&&(s&1)===1?e-i:i;if(o===vx){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));t:{if(i>=e)i=e;else if(i<0)i=0;else{this.time=i;break t}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t<0?-1:1})}}else{if(s===-1&&(t>=0?(s=0,this._setEndings(!0,this.repetitions===0,r)):this._setEndings(this.repetitions===0,!0,r)),i>=e||i<0){let a=Math.floor(i/e);i-=e*a,s+=Math.abs(a);let l=this.repetitions-s;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=t>0?e:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t>0?1:-1});else{if(l===1){let c=t<0;this._setEndings(c,!c,r)}else this._setEndings(!1,!1,r);this._loopCount=s,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this._loopCount=s,this.time=i;if(r&&(s&1)===1)return e-i}return i}_setEndings(t,e,o){let i=this._interpolantSettings;o?(i.endingStart=Cl,i.endingEnd=Cl):(t?i.endingStart=this.zeroSlopeAtStart?Cl:Al:i.endingStart=Ku,e?i.endingEnd=this.zeroSlopeAtEnd?Cl:Al:i.endingEnd=Ku)}_scheduleFading(t,e,o){let i=this._mixer,s=i.time,r=this._weightInterpolant;r===null&&(r=i._lendControlInterpolant(),this._weightInterpolant=r);let a=r.parameterPositions,l=r.sampleValues;return a[0]=s,l[0]=e,a[1]=s+t,l[1]=o,this}},C6=new Float32Array(1),X2=class extends _r{constructor(t){super(),this._root=t,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(t,e){let o=t._localRoot||this._root,i=t._clip.tracks,s=i.length,r=t._propertyBindings,a=t._interpolants,l=o.uuid,c=this._bindingsByRootAndName,u=c[l];u===void 0&&(u={},c[l]=u);for(let h=0;h!==s;++h){let d=i[h],g=d.name,v=u[g];if(v!==void 0)++v.referenceCount,r[h]=v;else{if(v=r[h],v!==void 0){v._cacheIndex===null&&(++v.referenceCount,this._addInactiveBinding(v,l,g));continue}let w=e&&e._propertyBindings[h].binding.parsedPath;v=new xp(pi.create(o,g,w),d.ValueTypeName,d.getValueSize()),++v.referenceCount,this._addInactiveBinding(v,l,g),r[h]=v}a[h].resultBuffer=v.buffer}}_activateAction(t){if(!this._isActiveAction(t)){if(t._cacheIndex===null){let o=(t._localRoot||this._root).uuid,i=t._clip.uuid,s=this._actionsByClip[i];this._bindAction(t,s&&s.knownActions[0]),this._addInactiveAction(t,i,o)}let e=t._propertyBindings;for(let o=0,i=e.length;o!==i;++o){let s=e[o];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(t)}}_deactivateAction(t){if(this._isActiveAction(t)){let e=t._propertyBindings;for(let o=0,i=e.length;o!==i;++o){let s=e[o];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(t)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let t=this;this.stats={actions:{get total(){return t._actions.length},get inUse(){return t._nActiveActions}},bindings:{get total(){return t._bindings.length},get inUse(){return t._nActiveBindings}},controlInterpolants:{get total(){return t._controlInterpolants.length},get inUse(){return t._nActiveControlInterpolants}}}}_isActiveAction(t){let e=t._cacheIndex;return e!==null&&e<this._nActiveActions}_addInactiveAction(t,e,o){let i=this._actions,s=this._actionsByClip,r=s[e];if(r===void 0)r={knownActions:[t],actionByRoot:{}},t._byClipCacheIndex=0,s[e]=r;else{let a=r.knownActions;t._byClipCacheIndex=a.length,a.push(t)}t._cacheIndex=i.length,i.push(t),r.actionByRoot[o]=t}_removeInactiveAction(t){let e=this._actions,o=e[e.length-1],i=t._cacheIndex;o._cacheIndex=i,e[i]=o,e.pop(),t._cacheIndex=null;let s=t._clip.uuid,r=this._actionsByClip,a=r[s],l=a.knownActions,c=l[l.length-1],u=t._byClipCacheIndex;c._byClipCacheIndex=u,l[u]=c,l.pop(),t._byClipCacheIndex=null;let h=a.actionByRoot,d=(t._localRoot||this._root).uuid;delete h[d],l.length===0&&delete r[s],this._removeInactiveBindingsForAction(t)}_removeInactiveBindingsForAction(t){let e=t._propertyBindings;for(let o=0,i=e.length;o!==i;++o){let s=e[o];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(t){let e=this._actions,o=t._cacheIndex,i=this._nActiveActions++,s=e[i];t._cacheIndex=i,e[i]=t,s._cacheIndex=o,e[o]=s}_takeBackAction(t){let e=this._actions,o=t._cacheIndex,i=--this._nActiveActions,s=e[i];t._cacheIndex=i,e[i]=t,s._cacheIndex=o,e[o]=s}_addInactiveBinding(t,e,o){let i=this._bindingsByRootAndName,s=this._bindings,r=i[e];r===void 0&&(r={},i[e]=r),r[o]=t,t._cacheIndex=s.length,s.push(t)}_removeInactiveBinding(t){let e=this._bindings,o=t.binding,i=o.rootNode.uuid,s=o.path,r=this._bindingsByRootAndName,a=r[i],l=e[e.length-1],c=t._cacheIndex;l._cacheIndex=c,e[c]=l,e.pop(),delete a[s],Object.keys(a).length===0&&delete r[i]}_lendBinding(t){let e=this._bindings,o=t._cacheIndex,i=this._nActiveBindings++,s=e[i];t._cacheIndex=i,e[i]=t,s._cacheIndex=o,e[o]=s}_takeBackBinding(t){let e=this._bindings,o=t._cacheIndex,i=--this._nActiveBindings,s=e[i];t._cacheIndex=i,e[i]=t,s._cacheIndex=o,e[o]=s}_lendControlInterpolant(){let t=this._controlInterpolants,e=this._nActiveControlInterpolants++,o=t[e];return o===void 0&&(o=new wf(new Float32Array(2),new Float32Array(2),1,C6),o.__cacheIndex=e,t[e]=o),o}_takeBackControlInterpolant(t){let e=this._controlInterpolants,o=t.__cacheIndex,i=--this._nActiveControlInterpolants,s=e[i];t.__cacheIndex=i,e[i]=t,s.__cacheIndex=o,e[o]=s}clipAction(t,e,o){let i=e||this._root,s=i.uuid,r=typeof t=="string"?Nl.findByName(i,t):t,a=r!==null?r.uuid:t,l=this._actionsByClip[a],c=null;if(o===void 0&&(r!==null?o=r.blendMode:o=sm),l!==void 0){let h=l.actionByRoot[s];if(h!==void 0&&h.blendMode===o)return h;c=l.knownActions[0],r===null&&(r=c._clip)}if(r===null)return null;let u=new bp(this,r,e,o);return this._bindAction(u,c),this._addInactiveAction(u,a,s),u}existingAction(t,e){let o=e||this._root,i=o.uuid,s=typeof t=="string"?Nl.findByName(o,t):t,r=s?s.uuid:t,a=this._actionsByClip[r];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){let t=this._actions,e=this._nActiveActions;for(let o=e-1;o>=0;--o)t[o].stop();return this}update(t){t*=this.timeScale;let e=this._actions,o=this._nActiveActions,i=this.time+=t,s=Math.sign(t),r=this._accuIndex^=1;for(let c=0;c!==o;++c)e[c]._update(i,t,s,r);let a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(r);return this}setTime(t){this.time=0;for(let e=0;e<this._actions.length;e++)this._actions[e].time=0;return this.update(t)}getRoot(){return this._root}uncacheClip(t){let e=this._actions,o=t.uuid,i=this._actionsByClip,s=i[o];if(s!==void 0){let r=s.knownActions;for(let a=0,l=r.length;a!==l;++a){let c=r[a];this._deactivateAction(c);let u=c._cacheIndex,h=e[e.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,h._cacheIndex=u,e[u]=h,e.pop(),this._removeInactiveBindingsForAction(c)}delete i[o]}}uncacheRoot(t){let e=t.uuid,o=this._actionsByClip;for(let r in o){let a=o[r].actionByRoot,l=a[e];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}let i=this._bindingsByRootAndName,s=i[e];if(s!==void 0)for(let r in s){let a=s[r];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(t,e){let o=this.existingAction(t,e);o!==null&&(this._deactivateAction(o),this._removeInactiveAction(o))}},q2=class extends of{constructor(t=1,e=1,o=1,i={}){super(t,e,i),this.isRenderTarget3D=!0,this.depth=o;for(let s=0;s<this.textures.length;s++){let r=new kc(null,t,e,o);r.isRenderTargetTexture=!0,r.renderTarget=this,this.textures[s]=r}this._setTextureOptions(i)}},$2=class n{constructor(t){this.value=t}clone(){return new n(this.value.clone===void 0?this.value:this.value.clone())}},E6=0,Y2=class extends _r{constructor(){super(),this.isUniformsGroup=!0,Object.defineProperty(this,"id",{value:E6++}),this.name="",this.usage=lm,this.uniforms=[]}add(t){return this.uniforms.push(t),this}remove(t){let e=this.uniforms.indexOf(t);return e!==-1&&this.uniforms.splice(e,1),this}setName(t){return this.name=t,this}setUsage(t){return this.usage=t,this}dispose(){this.dispatchEvent({type:"dispose"})}copy(t){this.name=t.name,this.usage=t.usage;let e=t.uniforms;this.uniforms.length=0;for(let o=0,i=e.length;o<i;o++){let s=Array.isArray(e[o])?e[o]:[e[o]];for(let r=0;r<s.length;r++)this.uniforms.push(s[r].clone())}return this}clone(){return new this.constructor().copy(this)}},Z2=class extends Ll{constructor(t,e,o=1){super(t,e),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=o}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){let e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){let e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}},J2=class{constructor(t,e,o,i,s,r=!1){this.isGLBufferAttribute=!0,this.name="",this.buffer=t,this.type=e,this.itemSize=o,this.elementSize=i,this.count=s,this.normalized=r,this.version=0}set needsUpdate(t){t===!0&&this.version++}setBuffer(t){return this.buffer=t,this}setType(t,e){return this.type=t,this.elementSize=e,this}setItemSize(t){return this.itemSize=t,this}setCount(t){return this.count=t,this}},U3=new Ao,j2=class{constructor(t,e,o=0,i=1/0){this.ray=new z0(t,e),this.near=o,this.far=i,this.camera=null,this.layers=new Dc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):io("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return U3.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(U3),this}intersectObject(t,e=!0,o=[]){return qv(t,this,o,e),o.sort(N3),o}intersectObjects(t,e=!0,o=[]){for(let i=0,s=t.length;i<s;i++)qv(t[i],this,o,e);return o.sort(N3),o}};function N3(n,t){return n.distance-t.distance}function qv(n,t,e,o){let i=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(i=!1),i===!0&&o===!0){let s=n.children;for(let r=0,a=s.length;r<a;r++)qv(s[r],t,e,!0)}}var K2=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Dn("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}},Q2=class{constructor(t=1,e=0,o=0){this.radius=t,this.phi=e,this.theta=o}set(t,e,o){return this.radius=t,this.phi=e,this.theta=o,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=wo(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,o){return this.radius=Math.sqrt(t*t+e*e+o*o),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,o),this.phi=Math.acos(wo(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}},tg=class{constructor(t=1,e=0,o=0){this.radius=t,this.theta=e,this.y=o}set(t,e,o){return this.radius=t,this.theta=e,this.y=o,this}copy(t){return this.radius=t.radius,this.theta=t.theta,this.y=t.y,this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,o){return this.radius=Math.sqrt(t*t+o*o),this.theta=Math.atan2(t,o),this.y=e,this}clone(){return new this.constructor().copy(this)}},Xx=class Xx{constructor(t,e,o,i){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,o,i)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let o=0;o<4;o++)this.elements[o]=t[o+e];return this}set(t,e,o,i){let s=this.elements;return s[0]=t,s[2]=e,s[1]=o,s[3]=i,this}};Xx.prototype.isMatrix2=!0;var eg=Xx,F3=new ln,Mp=class{constructor(t=new ln(1/0,1/0),e=new ln(-1/0,-1/0)){this.isBox2=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromPoints(t){this.makeEmpty();for(let e=0,o=t.length;e<o;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let o=F3.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(o),this.max.copy(t).add(o),this}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(t){return this.isEmpty()?t.set(0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,F3).distanceTo(t)}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},O3=new Wt,r2=new Wt,$u=new Wt,Yu=new Wt,Lv=new Wt,P6=new Wt,R6=new Wt,ng=class{constructor(t=new Wt,e=new Wt){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){O3.subVectors(t,this.start),r2.subVectors(this.end,this.start);let o=r2.dot(r2);if(o===0)return 0;let s=r2.dot(O3)/o;return e&&(s=wo(s,0,1)),s}closestPointToPoint(t,e,o){let i=this.closestPointToPointParameter(t,e);return this.delta(o).multiplyScalar(i).add(this.start)}distanceSqToLine3(t,e=P6,o=R6){let i=10000000000000001e-32,s,r,a=this.start,l=t.start,c=this.end,u=t.end;$u.subVectors(c,a),Yu.subVectors(u,l),Lv.subVectors(a,l);let h=$u.dot($u),d=Yu.dot(Yu),g=Yu.dot(Lv);if(h<=i&&d<=i)return e.copy(a),o.copy(l),e.sub(o),e.dot(e);if(h<=i)s=0,r=g/d,r=wo(r,0,1);else{let v=$u.dot(Lv);if(d<=i)r=0,s=wo(-v/h,0,1);else{let w=$u.dot(Yu),x=h*d-w*w;x!==0?s=wo((w*g-v*d)/x,0,1):s=0,r=(w*s+g)/d,r<0?(r=0,s=wo(-v/h,0,1)):r>1&&(r=1,s=wo((w-v)/h,0,1))}}return e.copy(a).addScaledVector($u,s),o.copy(l).addScaledVector(Yu,r),e.distanceToSquared(o)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}},G3=new Wt,og=class extends ri{constructor(t,e){super(),this.light=t,this.matrixAutoUpdate=!1,this.color=e,this.type="SpotLightHelper";let o=new _o,i=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let r=0,a=1,l=32;r<l;r++,a++){let c=r/l*Math.PI*2,u=a/l*Math.PI*2;i.push(Math.cos(c),Math.sin(c),1,Math.cos(u),Math.sin(u),1)}o.setAttribute("position",new zn(i,3));let s=new Rs({fog:!1,toneMapped:!1});this.cone=new Gr(o,s),this.add(this.cone),this.update()}dispose(){super.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),this.parent?(this.parent.updateWorldMatrix(!0),this.matrix.copy(this.parent.matrixWorld).invert().multiply(this.light.matrixWorld)):this.matrix.copy(this.light.matrixWorld),this.matrixWorldNeedsUpdate=!0;let t=this.light.distance?this.light.distance:1e3,e=t*Math.tan(this.light.angle);this.cone.scale.set(e,e,t),G3.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(G3),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}},Tl=new Wt,a2=new Ao,kv=new Ao,ig=class extends Gr{constructor(t){let e=JS(t),o=new _o,i=[],s=[];for(let c=0;c<e.length;c++){let u=e[c];u.parent&&u.parent.isBone&&(i.push(0,0,0),i.push(0,0,0),s.push(0,0,0),s.push(0,0,0))}o.setAttribute("position",new zn(i,3)),o.setAttribute("color",new zn(s,3));let r=new Rs({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(o,r),this.isSkeletonHelper=!0,this.type="SkeletonHelper",this.root=t,this.bones=e,this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1;let a=new In(255),l=new In(65280);this.setColors(a,l)}updateMatrixWorld(t){let e=this.bones,o=this.geometry,i=o.getAttribute("position");kv.copy(this.root.matrixWorld).invert();for(let s=0,r=0;s<e.length;s++){let a=e[s];a.parent&&a.parent.isBone&&(a2.multiplyMatrices(kv,a.matrixWorld),Tl.setFromMatrixPosition(a2),i.setXYZ(r,Tl.x,Tl.y,Tl.z),a2.multiplyMatrices(kv,a.parent.matrixWorld),Tl.setFromMatrixPosition(a2),i.setXYZ(r+1,Tl.x,Tl.y,Tl.z),r+=2)}o.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(t)}setColors(t,e){let i=this.geometry.getAttribute("color");for(let s=0;s<i.count;s+=2)i.setXYZ(s,t.r,t.g,t.b),i.setXYZ(s+1,e.r,e.g,e.b);return i.needsUpdate=!0,this}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}};function JS(n){let t=[];n.isBone===!0&&t.push(n);for(let e=0;e<n.children.length;e++)t.push(...JS(n.children[e]));return t}var sg=class extends yi{constructor(t,e,o){let i=new bf(e,4,2),s=new Or({wireframe:!0,fog:!1,toneMapped:!1});super(i,s),this.light=t,this.color=o,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}update(){this.matrixWorldNeedsUpdate=!0,this.light.updateWorldMatrix(!0,!1),this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}},I6=new Wt,z3=new In,V3=new In,rg=class extends ri{constructor(t,e,o){super(),this.light=t,this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.color=o,this.type="HemisphereLightHelper";let i=new xf(e);i.rotateY(Math.PI*.5),this.material=new Or({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0&&(this.material.vertexColors=!0);let s=i.getAttribute("position"),r=new Float32Array(s.count*3);i.setAttribute("color",new si(r,3)),this.add(new yi(i,this.material)),this.update()}dispose(){super.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){let t=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{let e=t.geometry.getAttribute("color");z3.copy(this.light.color),V3.copy(this.light.groundColor);for(let o=0,i=e.count;o<i;o++){let s=o<i/2?z3:V3;e.setXYZ(o,s.r,s.g,s.b)}e.needsUpdate=!0}this.matrixWorldNeedsUpdate=!0,this.light.updateWorldMatrix(!0,!1),t.lookAt(I6.setFromMatrixPosition(this.light.matrixWorld).negate())}},ag=class extends Gr{constructor(t=10,e=10,o=4473924,i=8947848){o=new In(o),i=new In(i);let s=e/2,r=t/e,a=t/2,l=[],c=[];for(let d=0,g=0,v=-a;d<=e;d++,v+=r){l.push(-a,0,v,a,0,v),l.push(v,0,-a,v,0,a);let w=d===s?o:i;w.toArray(c,g),g+=3,w.toArray(c,g),g+=3,w.toArray(c,g),g+=3,w.toArray(c,g),g+=3}let u=new _o;u.setAttribute("position",new zn(l,3)),u.setAttribute("color",new zn(c,3));let h=new Rs({vertexColors:!0,toneMapped:!1});super(u,h),this.type="GridHelper"}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}},lg=class extends Gr{constructor(t=10,e=16,o=8,i=64,s=4473924,r=8947848){s=new In(s),r=new In(r);let a=[],l=[];if(e>1)for(let h=0;h<e;h++){let d=h/e*(Math.PI*2),g=Math.sin(d)*t,v=Math.cos(d)*t;a.push(0,0,0),a.push(g,0,v);let w=h&1?s:r;l.push(w.r,w.g,w.b),l.push(w.r,w.g,w.b)}for(let h=0;h<o;h++){let d=h&1?s:r,g=t-t/o*h;for(let v=0;v<i;v++){let w=v/i*(Math.PI*2),x=Math.sin(w)*g,m=Math.cos(w)*g;a.push(x,0,m),l.push(d.r,d.g,d.b),w=(v+1)/i*(Math.PI*2),x=Math.sin(w)*g,m=Math.cos(w)*g,a.push(x,0,m),l.push(d.r,d.g,d.b)}}let c=new _o;c.setAttribute("position",new zn(a,3)),c.setAttribute("color",new zn(l,3));let u=new Rs({vertexColors:!0,toneMapped:!1});super(c,u),this.type="PolarGridHelper"}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}},W3=new Wt,l2=new Wt,H3=new Wt,cg=class extends ri{constructor(t,e,o){super(),this.light=t,this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.color=o,this.type="DirectionalLightHelper",e===void 0&&(e=1);let i=new _o;i.setAttribute("position",new zn([-e,e,0,e,e,0,e,-e,0,-e,-e,0,-e,e,0],3));let s=new Rs({fog:!1,toneMapped:!1});this.lightPlane=new Ua(i,s),this.add(this.lightPlane),i=new _o,i.setAttribute("position",new zn([0,0,0,0,0,1],3)),this.targetLine=new Ua(i,s),this.add(this.targetLine),this.update()}dispose(){super.dispose(),this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.matrixWorldNeedsUpdate=!0,this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),W3.setFromMatrixPosition(this.light.matrixWorld),l2.setFromMatrixPosition(this.light.target.matrixWorld),H3.subVectors(l2,W3),this.lightPlane.lookAt(l2),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(l2),this.targetLine.scale.z=H3.length()}},c2=new Wt,Hi=new Xc,ug=class extends Gr{constructor(t){let e=new _o,o=new Rs({color:16777215,vertexColors:!0,toneMapped:!1}),i=[],s=[],r={};a("n1","n2"),a("n2","n4"),a("n4","n3"),a("n3","n1"),a("f1","f2"),a("f2","f4"),a("f4","f3"),a("f3","f1"),a("n1","f1"),a("n2","f2"),a("n3","f3"),a("n4","f4"),a("p","n1"),a("p","n2"),a("p","n3"),a("p","n4"),a("u1","u2"),a("u2","u3"),a("u3","u1"),a("c","t"),a("p","c"),a("cn1","cn2"),a("cn3","cn4"),a("cf1","cf2"),a("cf3","cf4");function a(v,w){l(v),l(w)}function l(v){i.push(0,0,0),s.push(0,0,0),r[v]===void 0&&(r[v]=[]),r[v].push(i.length/3-1)}e.setAttribute("position",new zn(i,3)),e.setAttribute("color",new zn(s,3)),super(e,o),this.type="CameraHelper",this.camera=t,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=r,this.update();let c=new In(16755200),u=new In(16711680),h=new In(43775),d=new In(16777215),g=new In(3355443);this.setColors(c,u,h,d,g)}setColors(t,e,o,i,s){let a=this.geometry.getAttribute("color");return a.setXYZ(0,t.r,t.g,t.b),a.setXYZ(1,t.r,t.g,t.b),a.setXYZ(2,t.r,t.g,t.b),a.setXYZ(3,t.r,t.g,t.b),a.setXYZ(4,t.r,t.g,t.b),a.setXYZ(5,t.r,t.g,t.b),a.setXYZ(6,t.r,t.g,t.b),a.setXYZ(7,t.r,t.g,t.b),a.setXYZ(8,t.r,t.g,t.b),a.setXYZ(9,t.r,t.g,t.b),a.setXYZ(10,t.r,t.g,t.b),a.setXYZ(11,t.r,t.g,t.b),a.setXYZ(12,t.r,t.g,t.b),a.setXYZ(13,t.r,t.g,t.b),a.setXYZ(14,t.r,t.g,t.b),a.setXYZ(15,t.r,t.g,t.b),a.setXYZ(16,t.r,t.g,t.b),a.setXYZ(17,t.r,t.g,t.b),a.setXYZ(18,t.r,t.g,t.b),a.setXYZ(19,t.r,t.g,t.b),a.setXYZ(20,t.r,t.g,t.b),a.setXYZ(21,t.r,t.g,t.b),a.setXYZ(22,t.r,t.g,t.b),a.setXYZ(23,t.r,t.g,t.b),a.setXYZ(24,e.r,e.g,e.b),a.setXYZ(25,e.r,e.g,e.b),a.setXYZ(26,e.r,e.g,e.b),a.setXYZ(27,e.r,e.g,e.b),a.setXYZ(28,e.r,e.g,e.b),a.setXYZ(29,e.r,e.g,e.b),a.setXYZ(30,e.r,e.g,e.b),a.setXYZ(31,e.r,e.g,e.b),a.setXYZ(32,o.r,o.g,o.b),a.setXYZ(33,o.r,o.g,o.b),a.setXYZ(34,o.r,o.g,o.b),a.setXYZ(35,o.r,o.g,o.b),a.setXYZ(36,o.r,o.g,o.b),a.setXYZ(37,o.r,o.g,o.b),a.setXYZ(38,i.r,i.g,i.b),a.setXYZ(39,i.r,i.g,i.b),a.setXYZ(40,s.r,s.g,s.b),a.setXYZ(41,s.r,s.g,s.b),a.setXYZ(42,s.r,s.g,s.b),a.setXYZ(43,s.r,s.g,s.b),a.setXYZ(44,s.r,s.g,s.b),a.setXYZ(45,s.r,s.g,s.b),a.setXYZ(46,s.r,s.g,s.b),a.setXYZ(47,s.r,s.g,s.b),a.setXYZ(48,s.r,s.g,s.b),a.setXYZ(49,s.r,s.g,s.b),a.needsUpdate=!0,this}update(){let t=this.geometry,e=this.pointMap,o=1,i=1,s,r;if(Hi.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),this.camera.reversedDepth===!0)s=1,r=0;else if(this.camera.coordinateSystem===wr)s=-1,r=1;else if(this.camera.coordinateSystem===Rl)s=0,r=1;else throw new Error("THREE.CameraHelper.update(): Invalid coordinate system: "+this.camera.coordinateSystem);ji("c",e,t,Hi,0,0,s),ji("t",e,t,Hi,0,0,r),ji("n1",e,t,Hi,-o,-i,s),ji("n2",e,t,Hi,o,-i,s),ji("n3",e,t,Hi,-o,i,s),ji("n4",e,t,Hi,o,i,s),ji("f1",e,t,Hi,-o,-i,r),ji("f2",e,t,Hi,o,-i,r),ji("f3",e,t,Hi,-o,i,r),ji("f4",e,t,Hi,o,i,r),ji("u1",e,t,Hi,o*.7,i*1.1,s),ji("u2",e,t,Hi,-o*.7,i*1.1,s),ji("u3",e,t,Hi,0,i*2,s),ji("cf1",e,t,Hi,-o,0,r),ji("cf2",e,t,Hi,o,0,r),ji("cf3",e,t,Hi,0,-i,r),ji("cf4",e,t,Hi,0,i,r),ji("cn1",e,t,Hi,-o,0,s),ji("cn2",e,t,Hi,o,0,s),ji("cn3",e,t,Hi,0,-i,s),ji("cn4",e,t,Hi,0,i,s),t.getAttribute("position").needsUpdate=!0}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}};function ji(n,t,e,o,i,s,r){c2.set(i,s,r).unproject(o);let a=t[n];if(a!==void 0){let l=e.getAttribute("position");for(let c=0,u=a.length;c<u;c++)l.setXYZ(a[c],c2.x,c2.y,c2.z)}}var u2=new ys,fg=class extends Gr{constructor(t,e=16776960){let o=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=new Float32Array(24),s=new _o;s.setIndex(new si(o,1)),s.setAttribute("position",new si(i,3)),super(s,new Rs({color:e,toneMapped:!1})),this.object=t,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(){if(this.object!==void 0&&u2.setFromObject(this.object),u2.isEmpty())return;let t=u2.min,e=u2.max,o=this.geometry.attributes.position,i=o.array;i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=t.x,i[4]=e.y,i[5]=e.z,i[6]=t.x,i[7]=t.y,i[8]=e.z,i[9]=e.x,i[10]=t.y,i[11]=e.z,i[12]=e.x,i[13]=e.y,i[14]=t.z,i[15]=t.x,i[16]=e.y,i[17]=t.z,i[18]=t.x,i[19]=t.y,i[20]=t.z,i[21]=e.x,i[22]=t.y,i[23]=t.z,o.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(t){return this.object=t,this.update(),this}copy(t,e){return super.copy(t,e),this.object=t.object,this}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}},hg=class extends Gr{constructor(t,e=16776960){let o=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],s=new _o;s.setIndex(new si(o,1)),s.setAttribute("position",new zn(i,3)),super(s,new Rs({color:e,toneMapped:!1})),this.box=t,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(t){let e=this.box;e.isEmpty()||(e.getCenter(this.position),e.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(t))}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}},dg=class extends Ua{constructor(t,e=1,o=16776960){let i=o,s=[1,-1,0,-1,1,0,-1,-1,0,1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],r=new _o;r.setAttribute("position",new zn(s,3)),r.computeBoundingSphere(),super(r,new Rs({color:i,toneMapped:!1})),this.type="PlaneHelper",this.plane=t,this.size=e;let a=[1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],l=new _o;l.setAttribute("position",new zn(a,3)),l.computeBoundingSphere(),this.add(new yi(l,new Or({color:i,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(t){this.position.set(0,0,0),this.scale.set(.5*this.size,.5*this.size,1),this.lookAt(this.plane.normal),this.translateZ(-this.plane.constant),super.updateMatrixWorld(t)}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}},X3=new Wt,f2,Dv,pg=class extends ri{constructor(t=new Wt(0,0,1),e=new Wt(0,0,0),o=1,i=16776960,s=o*.2,r=s*.2){super(),this.type="ArrowHelper",f2===void 0&&(f2=new _o,f2.setAttribute("position",new zn([0,0,0,0,1,0],3)),Dv=new hf(.5,1,5,1),Dv.translate(0,-.5,0)),this.position.copy(e),this.line=new Ua(f2,new Rs({color:i,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new yi(Dv,new Or({color:i,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(t),this.setLength(o,s,r)}setDirection(t){if(t.y>.99999)this.quaternion.set(0,0,0,1);else if(t.y<-.99999)this.quaternion.set(1,0,0,0);else{X3.set(t.z,0,-t.x).normalize();let e=Math.acos(t.y);this.quaternion.setFromAxisAngle(X3,e)}}setLength(t,e=t*.2,o=e*.2){this.line.scale.set(1,Math.max(1e-4,t-e),1),this.line.updateMatrix(),this.cone.scale.set(o,e,o),this.cone.position.y=t,this.cone.updateMatrix()}setColor(t){this.line.material.color.set(t),this.cone.material.color.set(t)}copy(t){return super.copy(t,!1),this.line.copy(t.line),this.cone.copy(t.cone),this}dispose(){super.dispose(),this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}},mg=class extends Gr{constructor(t=1){let e=[0,0,0,t,0,0,0,0,0,0,t,0,0,0,0,0,0,t],o=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new _o;i.setAttribute("position",new zn(e,3)),i.setAttribute("color",new zn(o,3));let s=new Rs({vertexColors:!0,toneMapped:!1});super(i,s),this.type="AxesHelper"}setColors(t,e,o){let i=new In,s=this.geometry.attributes.color.array;return i.set(t),i.toArray(s,0),i.toArray(s,3),i.set(e),i.toArray(s,6),i.toArray(s,9),i.set(o),i.toArray(s,12),i.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}},gg=class{constructor(){this.type="ShapePath",this.color=new In,this.subPaths=[],this.currentPath=null,this.userData={}}moveTo(t,e){return this.currentPath=new Dl,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,e),this}lineTo(t,e){return this.currentPath.lineTo(t,e),this}quadraticCurveTo(t,e,o,i){return this.currentPath.quadraticCurveTo(t,e,o,i),this}bezierCurveTo(t,e,o,i,s,r){return this.currentPath.bezierCurveTo(t,e,o,i,s,r),this}splineThru(t){return this.currentPath.splineThru(t),this}toShapes(){function t(l,c){let u=!1,h=c.length;for(let d=0,g=h-1;d<h;g=d++){let v=c[d],w=c[g];v.y>l.y!=w.y>l.y&&l.x<(w.x-v.x)*(l.y-v.y)/(w.y-v.y)+v.x&&(u=!u)}return u}function e(l,c){let u=c.getCenter(new ln);if(t(u,l))return u;let h=u.y,d=[],g=l.length;for(let v=0;v<g;v++){let w=l[v],x=l[(v+1)%g];if(w.y>h!=x.y>h){let m=w.x+(h-w.y)*(x.x-w.x)/(x.y-w.y);d.push(m)}}return d.length>1&&(d.sort((v,w)=>v-w),u.x=(d[0]+d[1])/2),u}let o=this.userData.style&&this.userData.style.fillRule||"nonzero";o!=="nonzero"&&o!=="evenodd"&&(Dn('Fill-rule "'+o+'" is not supported, falling back to "nonzero".'),o="nonzero");let i=o==="nonzero"?(l=>l!==0):(l=>(l&1)!==0),s=[];for(let l of this.subPaths){let c=l.getPoints();if(c.length<3)continue;let u=na.area(c);if(u===0)continue;let h=new Mp;for(let d=0;d<c.length;d++)h.expandByPoint(c[d]);s.push({subPath:l,points:c,boundingBox:h,interiorPoint:e(c,h),absArea:Math.abs(u),winding:u<0?-1:1,container:null,exclude:!1,role:null})}s.sort((l,c)=>c.absArea-l.absArea);for(let l=0;l<s.length;l++){let c=s[l],u=0;for(let h=l-1;h>=0;h--){let d=s[h];if(d.boundingBox.containsBox(c.boundingBox)&&t(c.interiorPoint,d.points)){c.container=d.exclude?d.container:d,u=d.winding,c.winding+=u;break}}i(c.winding)===i(u)&&(c.exclude=!0)}for(let l of s)l.exclude||(l.role=l.container===null||l.container.role==="hole"?"outer":"hole");let r=[],a=new Map;for(let l of s){if(l.exclude||l.role!=="outer")continue;let c=new Bl;c.curves=l.subPath.curves,r.push(c),a.set(l,c)}for(let l of s){if(l.exclude||l.role!=="hole")continue;let c=a.get(l.container);if(!c)continue;let u=new Dl;u.curves=l.subPath.curves,c.holes.push(u)}return r}},yg=class extends _r{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}};function L6(n,t){let e=n.image&&n.image.width?n.image.width/n.image.height:1;return e>t?(n.repeat.x=1,n.repeat.y=e/t,n.offset.x=0,n.offset.y=(1-n.repeat.y)/2):(n.repeat.x=t/e,n.repeat.y=1,n.offset.x=(1-n.repeat.x)/2,n.offset.y=0),n}function k6(n,t){let e=n.image&&n.image.width?n.image.width/n.image.height:1;return e>t?(n.repeat.x=t/e,n.repeat.y=1,n.offset.x=(1-n.repeat.x)/2,n.offset.y=0):(n.repeat.x=1,n.repeat.y=e/t,n.offset.x=0,n.offset.y=(1-n.repeat.y)/2),n}function D6(n){return n.repeat.x=1,n.repeat.y=1,n.offset.x=0,n.offset.y=0,n}function Vg(n,t,e,o){let i=B6(o);switch(e){case Ng:return n*t;case Ap:return n*t/i.components*i.byteLength;case Uf:return n*t/i.components*i.byteLength;case j0:return n*t*2/i.components*i.byteLength;case Cp:return n*t*2/i.components*i.byteLength;case Fg:return n*t*3/i.components*i.byteLength;case Hs:return n*t*4/i.components*i.byteLength;case Ep:return n*t*4/i.components*i.byteLength;case Nf:case Ff:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Of:case Gf:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Rp:case Lp:return Math.max(n,16)*Math.max(t,8)/4;case Pp:case Ip:return Math.max(n,8)*Math.max(t,8)/2;case kp:case Dp:case Up:case Np:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Bp:case zf:case Fp:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Op:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Gp:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case zp:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Vp:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Wp:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Hp:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Xp:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case qp:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case $p:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Yp:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Zp:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Jp:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case jp:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Kp:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Qp:case tm:case em:return Math.ceil(n/4)*Math.ceil(t/4)*16;case nm:case om:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Vf:case im:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function B6(n){switch(n){case cr:case kg:return{byteLength:1,components:1};case Jc:case Dg:case aa:return{byteLength:2,components:1};case _p:case Tp:return{byteLength:2,components:4};case Vr:case wp:case Ws:return{byteLength:4,components:1};case Bg:case Ug:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}var vg=class{static contain(t,e){return L6(t,e)}static cover(t,e){return k6(t,e)}static fill(t){return D6(t)}static getByteLength(t,e,o,i){return Vg(t,e,o,i)}};typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window!="undefined"&&(window.__THREE__?Dn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function v5(){let n=null,t=!1,e=null,o=null;function i(s,r){o=n.requestAnimationFrame(i),e(s,r)}return{start:function(){t!==!0&&e!==null&&n!==null&&(o=n.requestAnimationFrame(i),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(o),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){n=s}}}function U6(n){let t=new WeakMap;function e(a,l){let c=a.array,u=a.usage,h=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,u),a.onUploadCallback();let g;if(c instanceof Float32Array)g=n.FLOAT;else if(typeof Float16Array!="undefined"&&c instanceof Float16Array)g=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?g=n.HALF_FLOAT:g=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)g=n.SHORT;else if(c instanceof Uint32Array)g=n.UNSIGNED_INT;else if(c instanceof Int32Array)g=n.INT;else if(c instanceof Int8Array)g=n.BYTE;else if(c instanceof Uint8Array)g=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)g=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:g,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function o(a,l,c){let u=l.array,h=l.updateRanges;if(n.bindBuffer(c,a),h.length===0)n.bufferSubData(c,0,u);else{h.sort((g,v)=>g.start-v.start);let d=0;for(let g=1;g<h.length;g++){let v=h[d],w=h[g];w.start<=v.start+v.count+1?v.count=Math.max(v.count,w.start+w.count-v.start):(++d,h[d]=w)}h.length=d+1;for(let g=0,v=h.length;g<v;g++){let w=h[g];n.bufferSubData(c,w.start*u.BYTES_PER_ELEMENT,u,w.start,w.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function r(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");o(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:r}}var N6=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,F6=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,O6=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,G6=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,z6=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,V6=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,W6=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,H6=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,X6=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,q6=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,$6=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Y6=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Z6=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,J6=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,j6=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,K6=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Q6=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,tA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,eA=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,nA=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,oA=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,iA=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,sA=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,rA=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,aA=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,lA=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,cA=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,uA=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,fA=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,hA=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,dA="gl_FragColor = linearToOutputTexel( gl_FragColor );",pA=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,mA=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,gA=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,yA=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,vA=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,xA=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,bA=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,MA=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,SA=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,wA=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,_A=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,TA=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,AA=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,CA=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,EA=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,PA=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,RA=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,IA=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,LA=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,kA=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,DA=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,BA=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,UA=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,NA=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,FA=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,OA=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,GA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,zA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,VA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,WA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,HA=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,XA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,qA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,$A=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,YA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ZA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,JA=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,jA=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,KA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,QA=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,tC=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,eC=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,nC=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,oC=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,iC=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sC=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,rC=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,aC=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,lC=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,cC=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,uC=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,fC=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,hC=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,dC=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,pC=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,mC=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,gC=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,yC=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,vC=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,xC=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,bC=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,MC=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,SC=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,wC=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,_C=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,TC=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,AC=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,CC=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,EC=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,PC=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,RC=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,IC=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,LC=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,kC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,DC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,BC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,UC=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,NC=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,FC=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,OC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,GC=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,VC=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,WC=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,HC=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,XC=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,qC=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,$C=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,YC=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ZC=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,JC=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,jC=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,KC=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,QC=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,t8=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,e8=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,n8=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,o8=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,i8=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,s8=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,r8=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,a8=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,l8=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,c8=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,u8=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,f8=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,h8=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,d8=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,p8=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,m8=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,g8=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,No={alphahash_fragment:N6,alphahash_pars_fragment:F6,alphamap_fragment:O6,alphamap_pars_fragment:G6,alphatest_fragment:z6,alphatest_pars_fragment:V6,aomap_fragment:W6,aomap_pars_fragment:H6,batching_pars_vertex:X6,batching_vertex:q6,begin_vertex:$6,beginnormal_vertex:Y6,bsdfs:Z6,iridescence_fragment:J6,bumpmap_pars_fragment:j6,clipping_planes_fragment:K6,clipping_planes_pars_fragment:Q6,clipping_planes_pars_vertex:tA,clipping_planes_vertex:eA,color_fragment:nA,color_pars_fragment:oA,color_pars_vertex:iA,color_vertex:sA,common:rA,cube_uv_reflection_fragment:aA,defaultnormal_vertex:lA,displacementmap_pars_vertex:cA,displacementmap_vertex:uA,emissivemap_fragment:fA,emissivemap_pars_fragment:hA,colorspace_fragment:dA,colorspace_pars_fragment:pA,envmap_fragment:mA,envmap_common_pars_fragment:gA,envmap_pars_fragment:yA,envmap_pars_vertex:vA,envmap_physical_pars_fragment:PA,envmap_vertex:xA,fog_vertex:bA,fog_pars_vertex:MA,fog_fragment:SA,fog_pars_fragment:wA,gradientmap_pars_fragment:_A,lightmap_pars_fragment:TA,lights_lambert_fragment:AA,lights_lambert_pars_fragment:CA,lights_pars_begin:EA,lights_toon_fragment:RA,lights_toon_pars_fragment:IA,lights_phong_fragment:LA,lights_phong_pars_fragment:kA,lights_physical_fragment:DA,lights_physical_pars_fragment:BA,lights_fragment_begin:UA,lights_fragment_maps:NA,lights_fragment_end:FA,lightprobes_pars_fragment:OA,logdepthbuf_fragment:GA,logdepthbuf_pars_fragment:zA,logdepthbuf_pars_vertex:VA,logdepthbuf_vertex:WA,map_fragment:HA,map_pars_fragment:XA,map_particle_fragment:qA,map_particle_pars_fragment:$A,metalnessmap_fragment:YA,metalnessmap_pars_fragment:ZA,morphinstance_vertex:JA,morphcolor_vertex:jA,morphnormal_vertex:KA,morphtarget_pars_vertex:QA,morphtarget_vertex:tC,normal_fragment_begin:eC,normal_fragment_maps:nC,normal_pars_fragment:oC,normal_pars_vertex:iC,normal_vertex:sC,normalmap_pars_fragment:rC,clearcoat_normal_fragment_begin:aC,clearcoat_normal_fragment_maps:lC,clearcoat_pars_fragment:cC,iridescence_pars_fragment:uC,opaque_fragment:fC,packing:hC,premultiplied_alpha_fragment:dC,project_vertex:pC,dithering_fragment:mC,dithering_pars_fragment:gC,roughnessmap_fragment:yC,roughnessmap_pars_fragment:vC,shadowmap_pars_fragment:xC,shadowmap_pars_vertex:bC,shadowmap_vertex:MC,shadowmask_pars_fragment:SC,skinbase_vertex:wC,skinning_pars_vertex:_C,skinning_vertex:TC,skinnormal_vertex:AC,specularmap_fragment:CC,specularmap_pars_fragment:EC,tonemapping_fragment:PC,tonemapping_pars_fragment:RC,transmission_fragment:IC,transmission_pars_fragment:LC,uv_pars_fragment:kC,uv_pars_vertex:DC,uv_vertex:BC,worldpos_vertex:UC,background_vert:NC,background_frag:FC,backgroundCube_vert:OC,backgroundCube_frag:GC,cube_vert:zC,cube_frag:VC,depth_vert:WC,depth_frag:HC,distance_vert:XC,distance_frag:qC,equirect_vert:$C,equirect_frag:YC,linedashed_vert:ZC,linedashed_frag:JC,meshbasic_vert:jC,meshbasic_frag:KC,meshlambert_vert:QC,meshlambert_frag:t8,meshmatcap_vert:e8,meshmatcap_frag:n8,meshnormal_vert:o8,meshnormal_frag:i8,meshphong_vert:s8,meshphong_frag:r8,meshphysical_vert:a8,meshphysical_frag:l8,meshtoon_vert:c8,meshtoon_frag:u8,points_vert:f8,points_frag:h8,shadow_vert:d8,shadow_frag:p8,sprite_vert:m8,sprite_frag:g8},Fn={common:{diffuse:{value:new In(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Lo},alphaMap:{value:null},alphaMapTransform:{value:new Lo},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Lo}},envmap:{envMap:{value:null},envMapRotation:{value:new Lo},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Lo}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Lo}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Lo},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Lo},normalScale:{value:new ln(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Lo},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Lo}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Lo}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Lo}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new In(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new Wt},probesMax:{value:new Wt},probesResolution:{value:new Wt}},points:{diffuse:{value:new In(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Lo},alphaTest:{value:0},uvTransform:{value:new Lo}},sprite:{diffuse:{value:new In(16777215)},opacity:{value:1},center:{value:new ln(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Lo},alphaMap:{value:null},alphaMapTransform:{value:new Lo},alphaTest:{value:0}}},za={basic:{uniforms:qs([Fn.common,Fn.specularmap,Fn.envmap,Fn.aomap,Fn.lightmap,Fn.fog]),vertexShader:No.meshbasic_vert,fragmentShader:No.meshbasic_frag},lambert:{uniforms:qs([Fn.common,Fn.specularmap,Fn.envmap,Fn.aomap,Fn.lightmap,Fn.emissivemap,Fn.bumpmap,Fn.normalmap,Fn.displacementmap,Fn.fog,Fn.lights,{emissive:{value:new In(0)},envMapIntensity:{value:1}}]),vertexShader:No.meshlambert_vert,fragmentShader:No.meshlambert_frag},phong:{uniforms:qs([Fn.common,Fn.specularmap,Fn.envmap,Fn.aomap,Fn.lightmap,Fn.emissivemap,Fn.bumpmap,Fn.normalmap,Fn.displacementmap,Fn.fog,Fn.lights,{emissive:{value:new In(0)},specular:{value:new In(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:No.meshphong_vert,fragmentShader:No.meshphong_frag},standard:{uniforms:qs([Fn.common,Fn.envmap,Fn.aomap,Fn.lightmap,Fn.emissivemap,Fn.bumpmap,Fn.normalmap,Fn.displacementmap,Fn.roughnessmap,Fn.metalnessmap,Fn.fog,Fn.lights,{emissive:{value:new In(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:No.meshphysical_vert,fragmentShader:No.meshphysical_frag},toon:{uniforms:qs([Fn.common,Fn.aomap,Fn.lightmap,Fn.emissivemap,Fn.bumpmap,Fn.normalmap,Fn.displacementmap,Fn.gradientmap,Fn.fog,Fn.lights,{emissive:{value:new In(0)}}]),vertexShader:No.meshtoon_vert,fragmentShader:No.meshtoon_frag},matcap:{uniforms:qs([Fn.common,Fn.bumpmap,Fn.normalmap,Fn.displacementmap,Fn.fog,{matcap:{value:null}}]),vertexShader:No.meshmatcap_vert,fragmentShader:No.meshmatcap_frag},points:{uniforms:qs([Fn.points,Fn.fog]),vertexShader:No.points_vert,fragmentShader:No.points_frag},dashed:{uniforms:qs([Fn.common,Fn.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:No.linedashed_vert,fragmentShader:No.linedashed_frag},depth:{uniforms:qs([Fn.common,Fn.displacementmap]),vertexShader:No.depth_vert,fragmentShader:No.depth_frag},normal:{uniforms:qs([Fn.common,Fn.bumpmap,Fn.normalmap,Fn.displacementmap,{opacity:{value:1}}]),vertexShader:No.meshnormal_vert,fragmentShader:No.meshnormal_frag},sprite:{uniforms:qs([Fn.sprite,Fn.fog]),vertexShader:No.sprite_vert,fragmentShader:No.sprite_frag},background:{uniforms:{uvTransform:{value:new Lo},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:No.background_vert,fragmentShader:No.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Lo}},vertexShader:No.backgroundCube_vert,fragmentShader:No.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:No.cube_vert,fragmentShader:No.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:No.equirect_vert,fragmentShader:No.equirect_frag},distance:{uniforms:qs([Fn.common,Fn.displacementmap,{referencePosition:{value:new Wt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:No.distance_vert,fragmentShader:No.distance_frag},shadow:{uniforms:qs([Fn.lights,Fn.fog,{color:{value:new In(0)},opacity:{value:1}}]),vertexShader:No.shadow_vert,fragmentShader:No.shadow_frag}};za.physical={uniforms:qs([za.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Lo},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Lo},clearcoatNormalScale:{value:new ln(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Lo},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Lo},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Lo},sheen:{value:0},sheenColor:{value:new In(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Lo},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Lo},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Lo},transmissionSamplerSize:{value:new ln},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Lo},attenuationDistance:{value:0},attenuationColor:{value:new In(0)},specularColor:{value:new In(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Lo},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Lo},anisotropyVector:{value:new ln},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Lo}}]),vertexShader:No.meshphysical_vert,fragmentShader:No.meshphysical_frag};var Wg={r:0,b:0,g:0},y8=new Ao,x5=new Lo;x5.set(-1,0,0,0,1,0,0,0,1);function v8(n,t,e,o,i,s){let r=new In(0),a=i===!0?0:1,l,c,u=null,h=0,d=null;function g(p){let _=p.isScene===!0?p.background:null;if(_&&_.isTexture){let b=p.backgroundBlurriness>0;_=t.get(_,b)}return _}function v(p){let _=!1,b=g(p);b===null?x(r,a):b&&b.isColor&&(x(b,1),_=!0);let S=n.xr.getEnvironmentBlendMode();S==="additive"?e.buffers.color.setClear(0,0,0,1,s):S==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,s),(n.autoClear||_)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function w(p,_){let b=g(_);b&&(b.isCubeTexture||b.mapping===Yc)?(c===void 0&&(c=new yi(new ia(1,1,1),new ar({name:"BackgroundCubeMaterial",uniforms:Kc(za.backgroundCube.uniforms),vertexShader:za.backgroundCube.vertexShader,fragmentShader:za.backgroundCube.fragmentShader,side:Xs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(S,T,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(c)),c.material.uniforms.envMap.value=b,c.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(y8.makeRotationFromEuler(_.backgroundRotation)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(x5),c.material.toneMapped=jo.getTransfer(b.colorSpace)!==ci,(u!==b||h!==b.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,u=b,h=b.version,d=n.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new yi(new H0(2,2),new ar({name:"BackgroundMaterial",uniforms:Kc(za.background.uniforms),vertexShader:za.background.vertexShader,fragmentShader:za.background.fragmentShader,side:Y0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=jo.getTransfer(b.colorSpace)!==ci,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||h!==b.version||d!==n.toneMapping)&&(l.material.needsUpdate=!0,u=b,h=b.version,d=n.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function x(p,_){p.getRGB(Wg,Ux(n)),e.buffers.color.setClear(Wg.r,Wg.g,Wg.b,_,s)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return r},setClearColor:function(p,_=1){r.set(p),a=_,x(r,a)},getClearAlpha:function(){return a},setClearAlpha:function(p){a=p,x(r,a)},render:v,addToRenderList:w,dispose:m}}function x8(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),o={},i=d(null),s=i,r=!1;function a(N,W,f,y,U){let D=!1,G=h(N,y,f,W);s!==G&&(s=G,c(s.object)),D=g(N,y,f,U),D&&v(N,y,f,U),U!==null&&t.update(U,n.ELEMENT_ARRAY_BUFFER),(D||r)&&(r=!1,b(N,W,f,y),U!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(U).buffer))}function l(){return n.createVertexArray()}function c(N){return n.bindVertexArray(N)}function u(N){return n.deleteVertexArray(N)}function h(N,W,f,y){let U=y.wireframe===!0,D=o[W.id];D===void 0&&(D={},o[W.id]=D);let G=N.isInstancedMesh===!0?N.id:0,$=D[G];$===void 0&&($={},D[G]=$);let tt=$[f.id];tt===void 0&&(tt={},$[f.id]=tt);let ut=tt[U];return ut===void 0&&(ut=d(l()),tt[U]=ut),ut}function d(N){let W=[],f=[],y=[];for(let U=0;U<e;U++)W[U]=0,f[U]=0,y[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:W,enabledAttributes:f,attributeDivisors:y,object:N,attributes:{},index:null}}function g(N,W,f,y){let U=s.attributes,D=W.attributes,G=0,$=f.getAttributes();for(let tt in $)if($[tt].location>=0){let At=U[tt],Bt=D[tt];if(Bt===void 0&&(tt==="instanceMatrix"&&N.instanceMatrix&&(Bt=N.instanceMatrix),tt==="instanceColor"&&N.instanceColor&&(Bt=N.instanceColor)),At===void 0||At.attribute!==Bt||Bt&&At.data!==Bt.data)return!0;G++}return s.attributesNum!==G||s.index!==y}function v(N,W,f,y){let U={},D=W.attributes,G=0,$=f.getAttributes();for(let tt in $)if($[tt].location>=0){let At=D[tt];At===void 0&&(tt==="instanceMatrix"&&N.instanceMatrix&&(At=N.instanceMatrix),tt==="instanceColor"&&N.instanceColor&&(At=N.instanceColor));let Bt={};Bt.attribute=At,At&&At.data&&(Bt.data=At.data),U[tt]=Bt,G++}s.attributes=U,s.attributesNum=G,s.index=y}function w(){let N=s.newAttributes;for(let W=0,f=N.length;W<f;W++)N[W]=0}function x(N){m(N,0)}function m(N,W){let f=s.newAttributes,y=s.enabledAttributes,U=s.attributeDivisors;f[N]=1,y[N]===0&&(n.enableVertexAttribArray(N),y[N]=1),U[N]!==W&&(n.vertexAttribDivisor(N,W),U[N]=W)}function p(){let N=s.newAttributes,W=s.enabledAttributes;for(let f=0,y=W.length;f<y;f++)W[f]!==N[f]&&(n.disableVertexAttribArray(f),W[f]=0)}function _(N,W,f,y,U,D,G){G===!0?n.vertexAttribIPointer(N,W,f,U,D):n.vertexAttribPointer(N,W,f,y,U,D)}function b(N,W,f,y){w();let U=y.attributes,D=f.getAttributes(),G=W.defaultAttributeValues;for(let $ in D){let tt=D[$];if(tt.location>=0){let ut=U[$];if(ut===void 0&&($==="instanceMatrix"&&N.instanceMatrix&&(ut=N.instanceMatrix),$==="instanceColor"&&N.instanceColor&&(ut=N.instanceColor)),ut!==void 0){let At=ut.normalized,Bt=ut.itemSize,be=t.get(ut);if(be===void 0)continue;let Ce=be.buffer,Be=be.type,Ee=be.bytesPerElement,oe=Be===n.INT||Be===n.UNSIGNED_INT||ut.gpuType===wp;if(ut.isInterleavedBufferAttribute){let he=ut.data,xe=he.stride,B=ut.offset;if(he.isInstancedInterleavedBuffer){for(let it=0;it<tt.locationSize;it++)m(tt.location+it,he.meshPerAttribute);N.isInstancedMesh!==!0&&y._maxInstanceCount===void 0&&(y._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let it=0;it<tt.locationSize;it++)x(tt.location+it);n.bindBuffer(n.ARRAY_BUFFER,Ce);for(let it=0;it<tt.locationSize;it++)_(tt.location+it,Bt/tt.locationSize,Be,At,xe*Ee,(B+Bt/tt.locationSize*it)*Ee,oe)}else{if(ut.isInstancedBufferAttribute){for(let he=0;he<tt.locationSize;he++)m(tt.location+he,ut.meshPerAttribute);N.isInstancedMesh!==!0&&y._maxInstanceCount===void 0&&(y._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let he=0;he<tt.locationSize;he++)x(tt.location+he);n.bindBuffer(n.ARRAY_BUFFER,Ce);for(let he=0;he<tt.locationSize;he++)_(tt.location+he,Bt/tt.locationSize,Be,At,Bt*Ee,Bt/tt.locationSize*he*Ee,oe)}}else if(G!==void 0){let At=G[$];if(At!==void 0)switch(At.length){case 2:n.vertexAttrib2fv(tt.location,At);break;case 3:n.vertexAttrib3fv(tt.location,At);break;case 4:n.vertexAttrib4fv(tt.location,At);break;default:n.vertexAttrib1fv(tt.location,At)}}}}p()}function S(){k();for(let N in o){let W=o[N];for(let f in W){let y=W[f];for(let U in y){let D=y[U];for(let G in D)u(D[G].object),delete D[G];delete y[U]}}delete o[N]}}function T(N){if(o[N.id]===void 0)return;let W=o[N.id];for(let f in W){let y=W[f];for(let U in y){let D=y[U];for(let G in D)u(D[G].object),delete D[G];delete y[U]}}delete o[N.id]}function C(N){for(let W in o){let f=o[W];for(let y in f){let U=f[y];if(U[N.id]===void 0)continue;let D=U[N.id];for(let G in D)u(D[G].object),delete D[G];delete U[N.id]}}}function E(N){for(let W in o){let f=o[W],y=N.isInstancedMesh===!0?N.id:0,U=f[y];if(U!==void 0){for(let D in U){let G=U[D];for(let $ in G)u(G[$].object),delete G[$];delete U[D]}delete f[y],Object.keys(f).length===0&&delete o[W]}}}function k(){R(),r=!0,s!==i&&(s=i,c(s.object))}function R(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:k,resetDefaultState:R,dispose:S,releaseStatesOfGeometry:T,releaseStatesOfObject:E,releaseStatesOfProgram:C,initAttributes:w,enableAttribute:x,disableUnusedAttributes:p}}function b8(n,t,e){let o;function i(l){o=l}function s(l,c){n.drawArrays(o,l,c),e.update(c,o,1)}function r(l,c,u){u!==0&&(n.drawArraysInstanced(o,l,c,u),e.update(c,o,u))}function a(l,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(o,l,0,c,0,u);let d=0;for(let g=0;g<u;g++)d+=c[g];e.update(d,o,1)}this.setMode=i,this.render=s,this.renderInstances=r,this.renderMultiDraw=a}function M8(n,t,e,o){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let C=t.get("EXT_texture_filter_anisotropic");i=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(C){return!(C!==Hs&&o.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){let E=C===aa&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==cr&&C!==Ws&&!E&&o.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",u=l(c);u!==c&&(Dn("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&d===!1&&Dn("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let g=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=n.getParameter(n.MAX_TEXTURE_SIZE),x=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),p=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),_=n.getParameter(n.MAX_VARYING_VECTORS),b=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),S=n.getParameter(n.MAX_SAMPLES),T=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:g,maxVertexTextures:v,maxTextureSize:w,maxCubemapSize:x,maxAttributes:m,maxVertexUniforms:p,maxVaryings:_,maxFragmentUniforms:b,maxSamples:S,samples:T}}function S8(n){let t=this,e=null,o=0,i=!1,s=!1,r=new Qr,a=new Lo,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){let g=h.length!==0||d||o!==0||i;return i=d,o=h.length,g},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){e=u(h,d,0)},this.setState=function(h,d,g){let v=h.clippingPlanes,w=h.clipIntersection,x=h.clipShadows,m=n.get(h);if(!i||v===null||v.length===0||s&&!x)s?u(null):c();else{let p=s?0:o,_=p*4,b=m.clippingState||null;l.value=b,b=u(v,d,_,g);for(let S=0;S!==_;++S)b[S]=e[S];m.clippingState=b,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=p}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=o>0),t.numPlanes=o,t.numIntersection=0}function u(h,d,g,v){let w=h!==null?h.length:0,x=null;if(w!==0){if(x=l.value,v!==!0||x===null){let m=g+w*4,p=d.matrixWorldInverse;a.getNormalMatrix(p),(x===null||x.length<m)&&(x=new Float32Array(m));for(let _=0,b=g;_!==w;++_,b+=4)r.copy(h[_]).applyMatrix4(p,a),r.normal.toArray(x,b),x[b+3]=r.constant}l.value=x,l.needsUpdate=!0}return t.numPlanes=w,t.numIntersection=0,x}}var Xf=4,w8=6,_8=20,T8=256,cm=new f0,jS=new In,qx=null,$x=0,Yx=0,Zx=!1,A8=new Wt,Qc=new Wt,hm=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,o=.1,i=100,s={}){let{size:r=256,position:a=A8}=s;qx=this._renderer.getRenderTarget(),$x=this._renderer.getActiveCubeFace(),Yx=this._renderer.getActiveMipmapLevel(),Zx=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,o,i,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=t5(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=QS(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(qx,$x,Yx),this._renderer.xr.enabled=Zx,t.scissorTest=!1,Hf(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Oa||t.mapping===Z0?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),qx=this._renderer.getRenderTarget(),$x=this._renderer.getActiveCubeFace(),Yx=this._renderer.getActiveMipmapLevel(),Zx=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let o=e||this._allocateTargets();return this._textureToCubeUV(t,o),this._applyPMREM(o),this._cleanup(o),o}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,o={magFilter:Si,minFilter:Si,generateMipmaps:!1,type:aa,format:Hs,colorSpace:Qu,depthBuffer:!1},i=KS(t,e,o);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=KS(t,e,o);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=C8(s)),this._blurMaterial=P8(s,t,e),this._ggxMaterial=E8(s,t,e)}return i}_compileMaterial(t){let e=new yi(new _o,t);this._renderer.compile(e,cm)}_sceneToCubeUV(t,e,o,i,s){let l=new Xi(90,1,e,o),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,g=h.toneMapping;h.getClearColor(jS),h.toneMapping=ra,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(i),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new yi(new ia,new Or({name:"PMREM.Background",side:Xs,depthWrite:!1,depthTest:!1})));let w=this._backgroundBox,x=w.material,m=!1,p=t.background;p?p.isColor&&(x.color.copy(p),t.background=null,m=!0):(x.color.copy(jS),m=!0);for(let _=0;_<6;_++){let b=_%3;b===0?(l.up.set(0,c[_],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[_],s.y,s.z)):b===1?(l.up.set(0,0,c[_]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[_],s.z)):(l.up.set(0,c[_],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[_]));let S=this._cubeSize;Hf(i,b*S,_>2?S:0,S,S),h.setRenderTarget(i),m&&h.render(w,l),h.render(t,l)}h.toneMapping=g,h.autoClear=d,t.background=p}_textureToCubeUV(t,e){let o=this._renderer,i=t.mapping===Oa||t.mapping===Z0;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=t5()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=QS());let s=i?this._cubemapMaterial:this._equirectMaterial,r=this._lodMeshes[0];r.material=s;let a=s.uniforms;a.envMap.value=t;let l=this._cubeSize;Hf(e,0,0,3*l,2*l),o.setRenderTarget(e),o.render(r,cm)}_applyPMREM(t){let e=this._renderer,o=e.autoClear;e.autoClear=!1;let i=this._lodMeshes.length;for(let s=1;s<i;s++)this._applyGGXFilter(t,s-1,s);e.autoClear=o}_applyGGXFilter(t,e,o){let i=this._renderer,s=this._pingPongRenderTarget,r=this._ggxMaterial,a=this._lodMeshes[o];a.material=r;let l=r.uniforms,c=o/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),h=Math.sqrt(c*c-u*u),d=c*1.25,g=h*d,{_lodMax:v}=this,w=this._sizeLods[o],x=3*w*(o>v-Xf?o-v+Xf:0),m=4*(this._cubeSize-w);l.envMap.value=t.texture,l.roughness.value=g,l.mipInt.value=v-e,Hf(s,x,m,3*w,2*w),i.setRenderTarget(s),i.render(a,cm),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=v-o,Hf(t,x,m,3*w,2*w),i.setRenderTarget(t),i.render(a,cm)}_blur(t,e,o,i){let s=this._pingPongRenderTarget,r=Math.min(i,Math.PI)/Math.SQRT2;this._blurPass(t,s,e,o,r),this._blurPass(s,t,o,o,r)}_blurPass(t,e,o,i,s){let r=this._renderer,a=this._blurMaterial,l=this._lodMeshes[i];l.material=a;let c=a.uniforms;c.envMap.value=t.texture,c.sigma.value=s,c.mipInt.value=this._lodMax-o;let u=this._sizeLods[i],h=3*u*(i>this._lodMax-Xf?i-this._lodMax+Xf:0),d=4*(this._cubeSize-u);Hf(e,h,d,3*u,2*u),r.setRenderTarget(e),r.render(l,cm)}};function C8(n){let t=[],e=[],o=n,i=n-Xf+1+w8;for(let s=0;s<i;s++){let r=Math.pow(2,o);t.push(r);let a=1/(r-2),l=-a,c=1+a,u=[l,l,c,l,c,c,l,l,c,c,l,c],h=6,d=6,g=3,v=new Float32Array(g*d*h),w=new Float32Array(g*d*h);for(let m=0;m<h;m++){let p=m%3*2/3-1,_=m>2?0:-1,b=[p,_,0,p+2/3,_,0,p+2/3,_+1,0,p,_,0,p+2/3,_+1,0,p,_+1,0];v.set(b,g*d*m);for(let S=0;S<d;S++){let T=u[S*2]*2-1,C=u[S*2+1]*2-1;m===0?Qc.set(1,C,T):m===1?Qc.set(-T,1,-C):m===2?Qc.set(-T,C,1):m===3?Qc.set(-1,C,-T):m===4?Qc.set(-T,-1,C):Qc.set(T,C,-1),Qc.toArray(w,(m*d+S)*g)}}let x=new _o;x.setAttribute("position",new si(v,g)),x.setAttribute("outputDirection",new si(w,g)),e.push(new yi(x,null)),o>Xf&&o--}return{lodMeshes:e,sizeLods:t}}function KS(n,t,e){let o=new ks(n,t,e);return o.texture.mapping=Yc,o.texture.name="PMREM.cubeUv",o.scissorTest=!0,o}function Hf(n,t,e,o,i){n.viewport.set(t,e,o,i),n.scissor.set(t,e,o,i)}function E8(n,t,e){return new ar({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:T8,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Xg(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Fa,depthTest:!1,depthWrite:!1})}function P8(n,t,e){return new ar({name:"SphericalGaussianBlur",defines:{SAMPLES:_8,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Xg(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Fa,depthTest:!1,depthWrite:!1})}function QS(){return new ar({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xg(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Fa,depthTest:!1,depthWrite:!1})}function t5(){return new ar({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xg(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Fa,depthTest:!1,depthWrite:!1})}function Xg(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var dm=class extends ks{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let o={width:t,height:t,depth:1},i=[o,o,o,o,o,o];this.texture=new kl(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let o={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new ia(5,5,5),s=new ar({name:"CubemapFromEquirect",uniforms:Kc(o.uniforms),vertexShader:o.vertexShader,fragmentShader:o.fragmentShader,side:Xs,blending:Fa});s.uniforms.tEquirect.value=e;let r=new yi(i,s),a=e.minFilter;return e.minFilter===Ga&&(e.minFilter=Si),new mp(1,10,this).update(t,r),e.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(t,e=!0,o=!0,i=!0){let s=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,o,i);t.setRenderTarget(s)}};function R8(n){let t=new WeakMap,e=new WeakMap,o=null;function i(d,g=!1){return d==null?null:g?r(d):s(d)}function s(d){if(d&&d.isTexture){let g=d.mapping;if(g===kf||g===Df)if(t.has(d)){let v=t.get(d).texture;return a(v,d.mapping)}else{let v=d.image;if(v&&v.height>0){let w=new dm(v.height);return w.fromEquirectangularTexture(n,d),t.set(d,w),d.addEventListener("dispose",c),a(w.texture,d.mapping)}else return null}}return d}function r(d){if(d&&d.isTexture){let g=d.mapping,v=g===kf||g===Df,w=g===Oa||g===Z0;if(v||w){let x=e.get(d),m=x!==void 0?x.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==m)return o===null&&(o=new hm(n)),x=v?o.fromEquirectangular(d,x):o.fromCubemap(d,x),x.texture.pmremVersion=d.pmremVersion,e.set(d,x),x.texture;if(x!==void 0)return x.texture;{let p=d.image;return v&&p&&p.height>0||w&&p&&l(p)?(o===null&&(o=new hm(n)),x=v?o.fromEquirectangular(d):o.fromCubemap(d),x.texture.pmremVersion=d.pmremVersion,e.set(d,x),d.addEventListener("dispose",u),x.texture):null}}}return d}function a(d,g){return g===kf?d.mapping=Oa:g===Df&&(d.mapping=Z0),d}function l(d){let g=0,v=6;for(let w=0;w<v;w++)d[w]!==void 0&&g++;return g===v}function c(d){let g=d.target;g.removeEventListener("dispose",c);let v=t.get(g);v!==void 0&&(t.delete(g),v.dispose())}function u(d){let g=d.target;g.removeEventListener("dispose",u);let v=e.get(g);v!==void 0&&(e.delete(g),v.dispose())}function h(){t=new WeakMap,e=new WeakMap,o!==null&&(o.dispose(),o=null)}return{get:i,dispose:h}}function I8(n){let t={};function e(o){if(t[o]!==void 0)return t[o];let i=n.getExtension(o);return t[o]=i,i}return{has:function(o){return e(o)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(o){let i=e(o);return i===null&&r0("WebGLRenderer: "+o+" extension not supported."),i}}}function L8(n,t,e,o){let i={},s=new WeakMap;function r(h){let d=h.target;d.index!==null&&t.remove(d.index);for(let v in d.attributes)t.remove(d.attributes[v]);d.removeEventListener("dispose",r),delete i[d.id];let g=s.get(d);g&&(t.remove(g),s.delete(d)),o.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(h,d){return i[d.id]===!0||(d.addEventListener("dispose",r),i[d.id]=!0,e.memory.geometries++),d}function l(h){let d=h.attributes;for(let g in d)t.update(d[g],n.ARRAY_BUFFER)}function c(h){let d=[],g=h.index,v=h.attributes.position,w=0;if(v===void 0)return;if(g!==null){let p=g.array;w=g.version;for(let _=0,b=p.length;_<b;_+=3){let S=p[_+0],T=p[_+1],C=p[_+2];d.push(S,T,T,C,C,S)}}else{let p=v.array;w=v.version;for(let _=0,b=p.length/3-1;_<b;_+=3){let S=_+0,T=_+1,C=_+2;d.push(S,T,T,C,C,S)}}let x=new(v.count>=65535?rf:sf)(d,1);x.version=w;let m=s.get(h);m&&t.remove(m),s.set(h,x)}function u(h){let d=s.get(h);if(d){let g=h.index;g!==null&&d.version<g.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function k8(n,t,e){let o;function i(h){o=h}let s,r;function a(h){s=h.type,r=h.bytesPerElement}function l(h,d){n.drawElements(o,d,s,h*r),e.update(d,o,1)}function c(h,d,g){g!==0&&(n.drawElementsInstanced(o,d,s,h*r,g),e.update(d,o,g))}function u(h,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(o,d,0,s,h,0,g);let w=0;for(let x=0;x<g;x++)w+=d[x];e.update(w,o,1)}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function D8(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function o(s,r,a){switch(e.calls++,r){case n.TRIANGLES:e.triangles+=a*(s/3);break;case n.LINES:e.lines+=a*(s/2);break;case n.LINE_STRIP:e.lines+=a*(s-1);break;case n.LINE_LOOP:e.lines+=a*s;break;case n.POINTS:e.points+=a*s;break;default:io("WebGLInfo: Unknown draw mode:",r);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:o}}function B8(n,t,e){let o=new WeakMap,i=new mi;function s(r,a,l){let c=r.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0,d=o.get(a);if(d===void 0||d.count!==h){let k=function(){C.dispose(),o.delete(a),a.removeEventListener("dispose",k)};d!==void 0&&d.texture.dispose();let g=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,w=a.morphAttributes.color!==void 0,x=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],p=a.morphAttributes.color||[],_=0;g===!0&&(_=1),v===!0&&(_=2),w===!0&&(_=3);let b=a.attributes.position.count*_,S=1;b>t.maxTextureSize&&(S=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);let T=new Float32Array(b*S*4*h),C=new Lc(T,b,S,h);C.type=Ws,C.needsUpdate=!0;let E=_*4;for(let R=0;R<h;R++){let N=x[R],W=m[R],f=p[R],y=b*S*4*R;for(let U=0;U<N.count;U++){let D=U*E;g===!0&&(i.fromBufferAttribute(N,U),T[y+D+0]=i.x,T[y+D+1]=i.y,T[y+D+2]=i.z,T[y+D+3]=0),v===!0&&(i.fromBufferAttribute(W,U),T[y+D+4]=i.x,T[y+D+5]=i.y,T[y+D+6]=i.z,T[y+D+7]=0),w===!0&&(i.fromBufferAttribute(f,U),T[y+D+8]=i.x,T[y+D+9]=i.y,T[y+D+10]=i.z,T[y+D+11]=f.itemSize===4?i.w:1)}}d={count:h,texture:C,size:new ln(b,S)},o.set(a,d),a.addEventListener("dispose",k)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",r.morphTexture,e);else{let g=0;for(let w=0;w<c.length;w++)g+=c[w];let v=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",v),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:s}}function U8(n,t,e,o,i){let s=new WeakMap;function r(c){let u=i.render.frame,h=c.geometry,d=t.get(c,h);if(s.get(d)!==u&&(t.update(d),s.set(d,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){let g=c.skeleton;s.get(g)!==u&&(g.update(),s.set(g,u))}return d}function a(){s=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),o.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:r,dispose:a}}var N8={[Ag]:"LINEAR_TONE_MAPPING",[Cg]:"REINHARD_TONE_MAPPING",[Eg]:"CINEON_TONE_MAPPING",[Lf]:"ACES_FILMIC_TONE_MAPPING",[Rg]:"AGX_TONE_MAPPING",[Ig]:"NEUTRAL_TONE_MAPPING",[Pg]:"CUSTOM_TONE_MAPPING"};function F8(n,t,e,o,i,s){let r=new ks(t,e,{type:n,depthBuffer:i,stencilBuffer:s,samples:o?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new _o;c.setAttribute("position",new zn([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new zn([0,2,0,0,2,0],2));let u=new Mf({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new yi(c,u),d=new f0(-1,1,1,-1,0,1),g=null,v=null,w=!1,x,m=null,p=[],_=!1;this.setSize=function(b,S){r.setSize(b,S),a!==null&&a.setSize(b,S),l!==null&&l.setSize(b,S);for(let T=0;T<p.length;T++){let C=p[T];C.setSize&&C.setSize(b,S)}},this.setEffects=function(b){p=b,_=p.length>0&&p[0].isRenderPass===!0;let S=r.width,T=r.height;p.length>0&&a===null&&(a=new ks(S,T,{type:aa,depthBuffer:!1,stencilBuffer:!1}),l=new ks(S,T,{type:aa,depthBuffer:!1,stencilBuffer:!1}));for(let C=0;C<p.length;C++){let E=p[C];E.setSize&&E.setSize(S,T)}},this.begin=function(b,S){if(w||b.toneMapping===ra&&p.length===0)return!1;if(m=S,S!==null){let T=S.width,C=S.height;(r.width!==T||r.height!==C)&&this.setSize(T,C)}return _===!1&&b.setRenderTarget(r),x=b.toneMapping,b.toneMapping=ra,!0},this.hasRenderPass=function(){return _},this.end=function(b,S){b.toneMapping=x,w=!0;let T=r,C=a;for(let E=0;E<p.length;E++){let k=p[E];k.enabled!==!1&&(k.render(b,C,T,S),k.needsSwap!==!1&&(T=C,C=C===a?l:a))}if(g!==b.outputColorSpace||v!==b.toneMapping){g=b.outputColorSpace,v=b.toneMapping,u.defines={},jo.getTransfer(g)===ci&&(u.defines.SRGB_TRANSFER="");let E=N8[v];E&&(u.defines[E]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=T.texture,b.setRenderTarget(m),b.render(h,d),m=null,w=!1},this.isCompositing=function(){return w},this.dispose=function(){r.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}var b5=new $i,Kx=new V0(1,1),M5=new Lc,S5=new kc,w5=new kl,e5=[],n5=[],o5=new Float32Array(16),i5=new Float32Array(9),s5=new Float32Array(4);function $f(n,t,e){let o=n[0];if(o<=0||o>0)return n;let i=t*e,s=e5[i];if(s===void 0&&(s=new Float32Array(i),e5[i]=s),t!==0){o.toArray(s,0);for(let r=1,a=0;r!==t;++r)a+=e,n[r].toArray(s,a)}return s}function vs(n,t){if(n.length!==t.length)return!1;for(let e=0,o=n.length;e<o;e++)if(n[e]!==t[e])return!1;return!0}function xs(n,t){for(let e=0,o=t.length;e<o;e++)n[e]=t[e]}function qg(n,t){let e=n5[t];e===void 0&&(e=new Int32Array(t),n5[t]=e);for(let o=0;o!==t;++o)e[o]=n.allocateTextureUnit();return e}function O8(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function G8(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(vs(e,t))return;n.uniform2fv(this.addr,t),xs(e,t)}}function z8(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(vs(e,t))return;n.uniform3fv(this.addr,t),xs(e,t)}}function V8(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(vs(e,t))return;n.uniform4fv(this.addr,t),xs(e,t)}}function W8(n,t){let e=this.cache,o=t.elements;if(o===void 0){if(vs(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),xs(e,t)}else{if(vs(e,o))return;s5.set(o),n.uniformMatrix2fv(this.addr,!1,s5),xs(e,o)}}function H8(n,t){let e=this.cache,o=t.elements;if(o===void 0){if(vs(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),xs(e,t)}else{if(vs(e,o))return;i5.set(o),n.uniformMatrix3fv(this.addr,!1,i5),xs(e,o)}}function X8(n,t){let e=this.cache,o=t.elements;if(o===void 0){if(vs(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),xs(e,t)}else{if(vs(e,o))return;o5.set(o),n.uniformMatrix4fv(this.addr,!1,o5),xs(e,o)}}function q8(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function $8(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(vs(e,t))return;n.uniform2iv(this.addr,t),xs(e,t)}}function Y8(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(vs(e,t))return;n.uniform3iv(this.addr,t),xs(e,t)}}function Z8(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(vs(e,t))return;n.uniform4iv(this.addr,t),xs(e,t)}}function J8(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function j8(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(vs(e,t))return;n.uniform2uiv(this.addr,t),xs(e,t)}}function K8(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(vs(e,t))return;n.uniform3uiv(this.addr,t),xs(e,t)}}function Q8(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(vs(e,t))return;n.uniform4uiv(this.addr,t),xs(e,t)}}function tE(n,t,e){let o=this.cache,i=e.allocateTextureUnit();o[0]!==i&&(n.uniform1i(this.addr,i),o[0]=i);let s;this.type===n.SAMPLER_2D_SHADOW?(Kx.compareFunction=e.isReversedDepthBuffer()?am:rm,s=Kx):s=b5,e.setTexture2D(t||s,i)}function eE(n,t,e){let o=this.cache,i=e.allocateTextureUnit();o[0]!==i&&(n.uniform1i(this.addr,i),o[0]=i),e.setTexture3D(t||S5,i)}function nE(n,t,e){let o=this.cache,i=e.allocateTextureUnit();o[0]!==i&&(n.uniform1i(this.addr,i),o[0]=i),e.setTextureCube(t||w5,i)}function oE(n,t,e){let o=this.cache,i=e.allocateTextureUnit();o[0]!==i&&(n.uniform1i(this.addr,i),o[0]=i),e.setTexture2DArray(t||M5,i)}function iE(n){switch(n){case 5126:return O8;case 35664:return G8;case 35665:return z8;case 35666:return V8;case 35674:return W8;case 35675:return H8;case 35676:return X8;case 5124:case 35670:return q8;case 35667:case 35671:return $8;case 35668:case 35672:return Y8;case 35669:case 35673:return Z8;case 5125:return J8;case 36294:return j8;case 36295:return K8;case 36296:return Q8;case 35678:case 36198:case 36298:case 36306:case 35682:return tE;case 35679:case 36299:case 36307:return eE;case 35680:case 36300:case 36308:case 36293:return nE;case 36289:case 36303:case 36311:case 36292:return oE}}function sE(n,t){n.uniform1fv(this.addr,t)}function rE(n,t){let e=$f(t,this.size,2);n.uniform2fv(this.addr,e)}function aE(n,t){let e=$f(t,this.size,3);n.uniform3fv(this.addr,e)}function lE(n,t){let e=$f(t,this.size,4);n.uniform4fv(this.addr,e)}function cE(n,t){let e=$f(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function uE(n,t){let e=$f(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function fE(n,t){let e=$f(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function hE(n,t){n.uniform1iv(this.addr,t)}function dE(n,t){n.uniform2iv(this.addr,t)}function pE(n,t){n.uniform3iv(this.addr,t)}function mE(n,t){n.uniform4iv(this.addr,t)}function gE(n,t){n.uniform1uiv(this.addr,t)}function yE(n,t){n.uniform2uiv(this.addr,t)}function vE(n,t){n.uniform3uiv(this.addr,t)}function xE(n,t){n.uniform4uiv(this.addr,t)}function bE(n,t,e){let o=this.cache,i=t.length,s=qg(e,i);vs(o,s)||(n.uniform1iv(this.addr,s),xs(o,s));let r;this.type===n.SAMPLER_2D_SHADOW?r=Kx:r=b5;for(let a=0;a!==i;++a)e.setTexture2D(t[a]||r,s[a])}function ME(n,t,e){let o=this.cache,i=t.length,s=qg(e,i);vs(o,s)||(n.uniform1iv(this.addr,s),xs(o,s));for(let r=0;r!==i;++r)e.setTexture3D(t[r]||S5,s[r])}function SE(n,t,e){let o=this.cache,i=t.length,s=qg(e,i);vs(o,s)||(n.uniform1iv(this.addr,s),xs(o,s));for(let r=0;r!==i;++r)e.setTextureCube(t[r]||w5,s[r])}function wE(n,t,e){let o=this.cache,i=t.length,s=qg(e,i);vs(o,s)||(n.uniform1iv(this.addr,s),xs(o,s));for(let r=0;r!==i;++r)e.setTexture2DArray(t[r]||M5,s[r])}function _E(n){switch(n){case 5126:return sE;case 35664:return rE;case 35665:return aE;case 35666:return lE;case 35674:return cE;case 35675:return uE;case 35676:return fE;case 5124:case 35670:return hE;case 35667:case 35671:return dE;case 35668:case 35672:return pE;case 35669:case 35673:return mE;case 5125:return gE;case 36294:return yE;case 36295:return vE;case 36296:return xE;case 35678:case 36198:case 36298:case 36306:case 35682:return bE;case 35679:case 36299:case 36307:return ME;case 35680:case 36300:case 36308:case 36293:return SE;case 36289:case 36303:case 36311:case 36292:return wE}}var Qx=class{constructor(t,e,o){this.id=t,this.addr=o,this.cache=[],this.type=e.type,this.setValue=iE(e.type)}},tb=class{constructor(t,e,o){this.id=t,this.addr=o,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=_E(e.type)}},eb=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,o){let i=this.seq;for(let s=0,r=i.length;s!==r;++s){let a=i[s];a.setValue(t,e[a.id],o)}}},Jx=/(\w+)(\])?(\[|\.)?/g;function r5(n,t){n.seq.push(t),n.map[t.id]=t}function TE(n,t,e){let o=n.name,i=o.length;for(Jx.lastIndex=0;;){let s=Jx.exec(o),r=Jx.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&r+2===i){r5(e,c===void 0?new Qx(a,n,t):new tb(a,n,t));break}else{let h=e.map[a];h===void 0&&(h=new eb(a),r5(e,h)),e=h}}}var qf=class{constructor(t,e){this.seq=[],this.map={};let o=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<o;++r){let a=t.getActiveUniform(e,r),l=t.getUniformLocation(e,a.name);TE(a,l,this)}let i=[],s=[];for(let r of this.seq)r.type===t.SAMPLER_2D_SHADOW||r.type===t.SAMPLER_CUBE_SHADOW||r.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(r):s.push(r);i.length>0&&(this.seq=i.concat(s))}setValue(t,e,o,i){let s=this.map[e];s!==void 0&&s.setValue(t,o,i)}setOptional(t,e,o){let i=e[o];i!==void 0&&this.setValue(t,o,i)}static upload(t,e,o,i){for(let s=0,r=e.length;s!==r;++s){let a=e[s],l=o[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){let o=[];for(let i=0,s=t.length;i!==s;++i){let r=t[i];r.id in e&&o.push(r)}return o}};function a5(n,t,e){let o=n.createShader(t);return n.shaderSource(o,e),n.compileShader(o),o}var AE=37297,CE=0;function EE(n,t){let e=n.split(`
`),o=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let r=i;r<s;r++){let a=r+1;o.push(`${a===t?">":" "} ${a}: ${e[r]}`)}return o.join(`
`)}var l5=new Lo;function PE(n){jo._getMatrix(l5,jo.workingColorSpace,n);let t=`mat3( ${l5.elements.map(e=>e.toFixed(4))} )`;switch(jo.getTransfer(n)){case tf:return[t,"LinearTransferOETF"];case ci:return[t,"sRGBTransferOETF"];default:return Dn("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function c5(n,t,e){let o=n.getShaderParameter(t,n.COMPILE_STATUS),s=(n.getShaderInfoLog(t)||"").trim();if(o&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+EE(n.getShaderSource(t),a)}else return s}function RE(n,t){let e=PE(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var IE={[Ag]:"Linear",[Cg]:"Reinhard",[Eg]:"Cineon",[Lf]:"ACESFilmic",[Rg]:"AgX",[Ig]:"Neutral",[Pg]:"Custom"};function LE(n,t){let e=IE[t];return e===void 0?(Dn("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Hg=new Wt;function kE(){jo.getLuminanceCoefficients(Hg);let n=Hg.x.toFixed(4),t=Hg.y.toFixed(4),e=Hg.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function DE(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(fm).join(`
`)}function BE(n){let t=[];for(let e in n){let o=n[e];o!==!1&&t.push("#define "+e+" "+o)}return t.join(`
`)}function UE(n,t){let e={},o=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let i=0;i<o;i++){let s=n.getActiveAttrib(t,i),r=s.name,a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),e[r]={type:s.type,location:n.getAttribLocation(t,r),locationSize:a}}return e}function fm(n){return n!==""}function u5(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function f5(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var NE=/^[ \t]*#include +<([\w\d./]+)>/gm;function nb(n){return n.replace(NE,OE)}var FE=new Map;function OE(n,t){let e=No[t];if(e===void 0){let o=FE.get(t);if(o!==void 0)e=No[o],Dn('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,o);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return nb(e)}var GE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function h5(n){return n.replace(GE,zE)}function zE(n,t,e,o){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=o.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function d5(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var VE={[Ol]:"SHADOWMAP_TYPE_PCF",[qc]:"SHADOWMAP_TYPE_VSM"};function WE(n){return VE[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var HE={[Oa]:"ENVMAP_TYPE_CUBE",[Z0]:"ENVMAP_TYPE_CUBE",[Yc]:"ENVMAP_TYPE_CUBE_UV"};function XE(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":HE[n.envMapMode]||"ENVMAP_TYPE_CUBE"}var qE={[Z0]:"ENVMAP_MODE_REFRACTION"};function $E(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":qE[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var YE={[If]:"ENVMAP_BLENDING_MULTIPLY",[mx]:"ENVMAP_BLENDING_MIX",[gx]:"ENVMAP_BLENDING_ADD"};function ZE(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":YE[n.combine]||"ENVMAP_BLENDING_NONE"}function JE(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,o=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:o,maxMip:e}}function jE(n,t,e,o){let i=n.getContext(),s=e.defines,r=e.vertexShader,a=e.fragmentShader,l=WE(e),c=XE(e),u=$E(e),h=ZE(e),d=JE(e),g=DE(e),v=BE(s),w=i.createProgram(),x,m,p=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(fm).join(`
`),x.length>0&&(x+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(fm).join(`
`),m.length>0&&(m+=`
`)):(x=[d5(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fm).join(`
`),m=[d5(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ra?"#define TONE_MAPPING":"",e.toneMapping!==ra?No.tonemapping_pars_fragment:"",e.toneMapping!==ra?LE("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",No.colorspace_pars_fragment,RE("linearToOutputTexel",e.outputColorSpace),kE(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(fm).join(`
`)),r=nb(r),r=u5(r,e),r=f5(r,e),a=nb(a),a=u5(a,e),a=f5(a,e),r=h5(r),a=h5(a),e.isRawShaderMaterial!==!0&&(p=`#version 300 es
`,x=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,m=["#define varying in",e.glslVersion===zg?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===zg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let _=p+x+r,b=p+m+a,S=a5(i,i.VERTEX_SHADER,_),T=a5(i,i.FRAGMENT_SHADER,b);i.attachShader(w,S),i.attachShader(w,T),e.index0AttributeName!==void 0?i.bindAttribLocation(w,0,e.index0AttributeName):e.hasPositionAttribute===!0&&i.bindAttribLocation(w,0,"position"),i.linkProgram(w);function C(N){if(n.debug.checkShaderErrors){let W=i.getProgramInfoLog(w)||"",f=i.getShaderInfoLog(S)||"",y=i.getShaderInfoLog(T)||"",U=W.trim(),D=f.trim(),G=y.trim(),$=!0,tt=!0;if(i.getProgramParameter(w,i.LINK_STATUS)===!1)if($=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(i,w,S,T);else{let ut=c5(i,S,"vertex"),At=c5(i,T,"fragment");io("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(w,i.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+U+`
`+ut+`
`+At)}else U!==""?Dn("WebGLProgram: Program Info Log:",U):(D===""||G==="")&&(tt=!1);tt&&(N.diagnostics={runnable:$,programLog:U,vertexShader:{log:D,prefix:x},fragmentShader:{log:G,prefix:m}})}i.deleteShader(S),i.deleteShader(T),E=new qf(i,w),k=UE(i,w)}let E;this.getUniforms=function(){return E===void 0&&C(this),E};let k;this.getAttributes=function(){return k===void 0&&C(this),k};let R=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=i.getProgramParameter(w,AE)),R},this.destroy=function(){o.releaseStatesOfProgram(this),i.deleteProgram(w),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=CE++,this.cacheKey=t,this.usedTimes=1,this.program=w,this.vertexShader=S,this.fragmentShader=T,this}var KE=0,ob=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,o){let i=this._getShaderCacheForMaterial(t);return i.has(e)===!1&&(i.add(e),e.usedTimes++),i.has(o)===!1&&(i.add(o),o.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let o of e)o.usedTimes--,o.usedTimes===0&&this.shaderCache.delete(o.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,o=e.get(t);return o===void 0&&(o=new Set,e.set(t,o)),o}_getShaderStage(t){let e=this.shaderCache,o=e.get(t);return o===void 0&&(o=new ib(t),e.set(t,o)),o}},ib=class{constructor(t){this.id=KE++,this.code=t,this.usedTimes=0}};function QE(n){return n===j0||n===zf||n===Vf}function tP(n,t,e,o,i,s){let r=new Dc,a=new ob,l=new Set,c=[],u=new Map,h=o.logarithmicDepthBuffer,d=o.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(E){return l.add(E),E===0?"uv":`uv${E}`}function w(E,k,R,N,W,f){let y=N.fog,U=W.geometry,D=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?N.environment:null,G=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap,$=t.get(E.envMap||D,G),tt=$&&$.mapping===Yc?$.image.height:null,ut=g[E.type];E.precision!==null&&(d=o.getMaxPrecision(E.precision),d!==E.precision&&Dn("WebGLProgram.getParameters:",E.precision,"not supported, using",d,"instead."));let At=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,Bt=At!==void 0?At.length:0,be=0;U.morphAttributes.position!==void 0&&(be=1),U.morphAttributes.normal!==void 0&&(be=2),U.morphAttributes.color!==void 0&&(be=3);let Ce,Be,Ee,oe;if(ut){let yt=za[ut];Ce=yt.vertexShader,Be=yt.fragmentShader}else{Ce=E.vertexShader,Be=E.fragmentShader;let yt=a.getVertexShaderStage(E),Yt=a.getFragmentShaderStage(E);a.update(E,yt,Yt),Ee=yt.id,oe=Yt.id}let he=n.getRenderTarget(),xe=n.state.buffers.depth.getReversed(),B=W.isInstancedMesh===!0,it=W.isBatchedMesh===!0,ct=!!E.map,xt=!!E.matcap,nt=!!$,at=!!E.aoMap,Rt=!!E.lightMap,Pt=!!E.bumpMap&&E.wireframe===!1,qt=!!E.normalMap,Gt=!!E.displacementMap,dt=!!E.emissiveMap,de=!!E.metalnessMap,ht=!!E.roughnessMap,F=E.anisotropy>0,It=E.clearcoat>0,wt=E.dispersion>0,z=E.retroreflectivity>0,I=E.iridescence>0,ft=E.sheen>0,Mt=E.transmission>0,Dt=F&&!!E.anisotropyMap,Vt=It&&!!E.clearcoatMap,Me=It&&!!E.clearcoatNormalMap,Z=It&&!!E.clearcoatRoughnessMap,Y=I&&!!E.iridescenceMap,vt=I&&!!E.iridescenceThicknessMap,Xt=ft&&!!E.sheenColorMap,kt=ft&&!!E.sheenRoughnessMap,V=!!E.specularMap,H=!!E.specularColorMap,Q=!!E.specularIntensityMap,Tt=Mt&&!!E.transmissionMap,K=Mt&&!!E.thicknessMap,Ht=!!E.gradientMap,Ut=!!E.alphaMap,Nt=E.alphaTest>0,te=!!E.alphaHash,Et=!!E.extensions,fe=ra;E.toneMapped&&(he===null||he.isXRRenderTarget===!0)&&(fe=n.toneMapping);let ce={shaderID:ut,shaderType:E.type,shaderName:E.name,vertexShader:Ce,fragmentShader:Be,defines:E.defines,customVertexShaderID:Ee,customFragmentShaderID:oe,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:d,batching:it,batchingColor:it&&W._colorsTexture!==null,instancing:B,instancingColor:B&&W.instanceColor!==null,instancingMorph:B&&W.morphTexture!==null,outputColorSpace:he===null?n.outputColorSpace:he.isXRRenderTarget===!0?he.texture.colorSpace:jo.workingColorSpace,alphaToCoverage:!!E.alphaToCoverage,map:ct,matcap:xt,envMap:nt,envMapMode:nt&&$.mapping,envMapCubeUVHeight:tt,aoMap:at,lightMap:Rt,bumpMap:Pt,normalMap:qt,displacementMap:Gt,emissiveMap:dt,normalMapObjectSpace:qt&&E.normalMapType===Tx,normalMapTangentSpace:qt&&E.normalMapType===h0,packedNormalMap:qt&&E.normalMapType===h0&&QE(E.normalMap.format),metalnessMap:de,roughnessMap:ht,anisotropy:F,anisotropyMap:Dt,clearcoat:It,clearcoatMap:Vt,clearcoatNormalMap:Me,clearcoatRoughnessMap:Z,dispersion:wt,retroreflection:z,iridescence:I,iridescenceMap:Y,iridescenceThicknessMap:vt,sheen:ft,sheenColorMap:Xt,sheenRoughnessMap:kt,specularMap:V,specularColorMap:H,specularIntensityMap:Q,transmission:Mt,transmissionMap:Tt,thicknessMap:K,gradientMap:Ht,opaque:E.transparent===!1&&E.blending===$c&&E.alphaToCoverage===!1,alphaMap:Ut,alphaTest:Nt,alphaHash:te,combine:E.combine,mapUv:ct&&v(E.map.channel),aoMapUv:at&&v(E.aoMap.channel),lightMapUv:Rt&&v(E.lightMap.channel),bumpMapUv:Pt&&v(E.bumpMap.channel),normalMapUv:qt&&v(E.normalMap.channel),displacementMapUv:Gt&&v(E.displacementMap.channel),emissiveMapUv:dt&&v(E.emissiveMap.channel),metalnessMapUv:de&&v(E.metalnessMap.channel),roughnessMapUv:ht&&v(E.roughnessMap.channel),anisotropyMapUv:Dt&&v(E.anisotropyMap.channel),clearcoatMapUv:Vt&&v(E.clearcoatMap.channel),clearcoatNormalMapUv:Me&&v(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Z&&v(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Y&&v(E.iridescenceMap.channel),iridescenceThicknessMapUv:vt&&v(E.iridescenceThicknessMap.channel),sheenColorMapUv:Xt&&v(E.sheenColorMap.channel),sheenRoughnessMapUv:kt&&v(E.sheenRoughnessMap.channel),specularMapUv:V&&v(E.specularMap.channel),specularColorMapUv:H&&v(E.specularColorMap.channel),specularIntensityMapUv:Q&&v(E.specularIntensityMap.channel),transmissionMapUv:Tt&&v(E.transmissionMap.channel),thicknessMapUv:K&&v(E.thicknessMap.channel),alphaMapUv:Ut&&v(E.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(qt||F),vertexNormals:!!U.attributes.normal,vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!U.attributes.uv&&(ct||Ut),fog:!!y,useFog:E.fog===!0,fogExp2:!!y&&y.isFogExp2,flatShading:E.wireframe===!1&&(E.flatShading===!0||U.attributes.normal===void 0&&qt===!1&&(E.isMeshLambertMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isMeshPhysicalMaterial)),sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:xe,skinning:W.isSkinnedMesh===!0,hasPositionAttribute:U.attributes.position!==void 0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:Bt,morphTextureStride:be,numSunLights:k.sun.length,numDirLights:k.directional.length,numPointLights:k.point.length,numSpotLights:k.spot.length,numSpotLightMaps:k.spotLightMap.length,numRectAreaLights:k.rectArea.length,numHemiLights:k.hemi.length,numSunLightShadows:k.sunShadowMap.length,numDirLightShadows:k.directionalShadowMap.length,numPointLightShadows:k.pointShadowMap.length,numSpotLightShadows:k.spotShadowMap.length,numSpotLightShadowsWithMaps:k.numSpotLightShadowsWithMaps,numLightProbes:k.numLightProbes,numLightProbeGrids:f.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:E.dithering,shadowMapEnabled:n.shadowMap.enabled&&R.length>0,shadowMapType:n.shadowMap.type,toneMapping:fe,decodeVideoTexture:ct&&E.map.isVideoTexture===!0&&jo.getTransfer(E.map.colorSpace)===ci,decodeVideoTextureEmissive:dt&&E.emissiveMap.isVideoTexture===!0&&jo.getTransfer(E.emissiveMap.colorSpace)===ci,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===zr,flipSided:E.side===Xs,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Et&&E.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Et&&E.extensions.multiDraw===!0||it)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return ce.vertexUv1s=l.has(1),ce.vertexUv2s=l.has(2),ce.vertexUv3s=l.has(3),l.clear(),ce}function x(E){let k=[];if(E.shaderID?k.push(E.shaderID):(k.push(E.customVertexShaderID),k.push(E.customFragmentShaderID)),E.defines!==void 0)for(let R in E.defines)k.push(R),k.push(E.defines[R]);return E.isRawShaderMaterial===!1&&(m(k,E),p(k,E),k.push(n.outputColorSpace)),k.push(E.customProgramCacheKey),k.join()}function m(E,k){E.push(k.precision),E.push(k.outputColorSpace),E.push(k.envMapMode),E.push(k.envMapCubeUVHeight),E.push(k.mapUv),E.push(k.alphaMapUv),E.push(k.lightMapUv),E.push(k.aoMapUv),E.push(k.bumpMapUv),E.push(k.normalMapUv),E.push(k.displacementMapUv),E.push(k.emissiveMapUv),E.push(k.metalnessMapUv),E.push(k.roughnessMapUv),E.push(k.anisotropyMapUv),E.push(k.clearcoatMapUv),E.push(k.clearcoatNormalMapUv),E.push(k.clearcoatRoughnessMapUv),E.push(k.iridescenceMapUv),E.push(k.iridescenceThicknessMapUv),E.push(k.sheenColorMapUv),E.push(k.sheenRoughnessMapUv),E.push(k.specularMapUv),E.push(k.specularColorMapUv),E.push(k.specularIntensityMapUv),E.push(k.transmissionMapUv),E.push(k.thicknessMapUv),E.push(k.combine),E.push(k.fogExp2),E.push(k.sizeAttenuation),E.push(k.morphTargetsCount),E.push(k.morphAttributeCount),E.push(k.numSunLights),E.push(k.numDirLights),E.push(k.numPointLights),E.push(k.numSpotLights),E.push(k.numSpotLightMaps),E.push(k.numHemiLights),E.push(k.numRectAreaLights),E.push(k.numSunLightShadows),E.push(k.numDirLightShadows),E.push(k.numPointLightShadows),E.push(k.numSpotLightShadows),E.push(k.numSpotLightShadowsWithMaps),E.push(k.numLightProbes),E.push(k.shadowMapType),E.push(k.toneMapping),E.push(k.numClippingPlanes),E.push(k.numClipIntersection),E.push(k.depthPacking)}function p(E,k){r.disableAll(),k.instancing&&r.enable(0),k.instancingColor&&r.enable(1),k.instancingMorph&&r.enable(2),k.matcap&&r.enable(3),k.envMap&&r.enable(4),k.normalMapObjectSpace&&r.enable(5),k.normalMapTangentSpace&&r.enable(6),k.clearcoat&&r.enable(7),k.iridescence&&r.enable(8),k.alphaTest&&r.enable(9),k.vertexColors&&r.enable(10),k.vertexAlphas&&r.enable(11),k.vertexUv1s&&r.enable(12),k.vertexUv2s&&r.enable(13),k.vertexUv3s&&r.enable(14),k.vertexTangents&&r.enable(15),k.anisotropy&&r.enable(16),k.alphaHash&&r.enable(17),k.batching&&r.enable(18),k.dispersion&&r.enable(19),k.retroreflection&&r.enable(24),k.batchingColor&&r.enable(20),k.gradientMap&&r.enable(21),k.packedNormalMap&&r.enable(22),k.vertexNormals&&r.enable(23),E.push(r.mask),r.disableAll(),k.fog&&r.enable(0),k.useFog&&r.enable(1),k.flatShading&&r.enable(2),k.logarithmicDepthBuffer&&r.enable(3),k.reversedDepthBuffer&&r.enable(4),k.skinning&&r.enable(5),k.morphTargets&&r.enable(6),k.morphNormals&&r.enable(7),k.morphColors&&r.enable(8),k.premultipliedAlpha&&r.enable(9),k.shadowMapEnabled&&r.enable(10),k.doubleSided&&r.enable(11),k.flipSided&&r.enable(12),k.useDepthPacking&&r.enable(13),k.dithering&&r.enable(14),k.transmission&&r.enable(15),k.sheen&&r.enable(16),k.opaque&&r.enable(17),k.pointsUvs&&r.enable(18),k.decodeVideoTexture&&r.enable(19),k.decodeVideoTextureEmissive&&r.enable(20),k.alphaToCoverage&&r.enable(21),k.numLightProbeGrids>0&&r.enable(22),k.hasPositionAttribute&&r.enable(23),E.push(r.mask)}function _(E){let k=g[E.type],R;if(k){let N=za[k];R=Nx.clone(N.uniforms)}else R=E.uniforms;return R}function b(E,k){let R=u.get(k);return R!==void 0?++R.usedTimes:(R=new jE(n,k,E,i),c.push(R),u.set(k,R)),R}function S(E){if(--E.usedTimes===0){let k=c.indexOf(E);c[k]=c[c.length-1],c.pop(),u.delete(E.cacheKey),E.destroy()}}function T(E){a.remove(E)}function C(){a.dispose()}return{getParameters:w,getProgramCacheKey:x,getUniforms:_,acquireProgram:b,releaseProgram:S,releaseShaderCache:T,programs:c,dispose:C}}function eP(){let n=new WeakMap;function t(r){return n.has(r)}function e(r){let a=n.get(r);return a===void 0&&(a={},n.set(r,a)),a}function o(r){n.delete(r)}function i(r,a,l){n.get(r)[a]=l}function s(){n=new WeakMap}return{has:t,get:e,remove:o,update:i,dispose:s}}function nP(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function p5(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function m5(){let n=[],t=0,e=[],o=[],i=[];function s(){t=0,e.length=0,o.length=0,i.length=0}function r(d){let g=0;return d.isInstancedMesh&&(g+=2),d.isSkinnedMesh&&(g+=1),g}function a(d,g,v,w,x,m){let p=n[t];return p===void 0?(p={id:d.id,object:d,geometry:g,material:v,materialVariant:r(d),groupOrder:w,renderOrder:d.renderOrder,z:x,group:m},n[t]=p):(p.id=d.id,p.object=d,p.geometry=g,p.material=v,p.materialVariant=r(d),p.groupOrder=w,p.renderOrder=d.renderOrder,p.z=x,p.group=m),t++,p}function l(d,g,v,w,x,m,p){p.reversedDepth===!0&&(x=-x);let _=a(d,g,v,w,x,m);v.transmission>0?o.push(_):v.transparent===!0?i.push(_):e.push(_)}function c(d,g,v,w,x,m){let p=a(d,g,v,w,x,m);v.transmission>0?o.unshift(p):v.transparent===!0?i.unshift(p):e.unshift(p)}function u(d,g){e.length>1&&e.sort(d||nP),o.length>1&&o.sort(g||p5),i.length>1&&i.sort(g||p5)}function h(){for(let d=t,g=n.length;d<g;d++){let v=n[d];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:e,transmissive:o,transparent:i,init:s,push:l,unshift:c,finish:h,sort:u}}function oP(){let n=new WeakMap;function t(o,i){let s=n.get(o),r;return s===void 0?(r=new m5,n.set(o,[r])):i>=s.length?(r=new m5,s.push(r)):r=s[i],r}function e(){n=new WeakMap}return{get:t,dispose:e}}function iP(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new Wt,color:new In};break;case"SpotLight":e={position:new Wt,direction:new Wt,color:new In,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new Wt,color:new In,distance:0,decay:0};break;case"HemisphereLight":e={direction:new Wt,skyColor:new In,groundColor:new In};break;case"RectAreaLight":e={color:new In,position:new Wt,halfWidth:new Wt,halfHeight:new Wt};break}return n[t.id]=e,e}}}function sP(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ln};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ln};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ln,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var rP=0;function aP(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function lP(n){let t=new iP,e=sP(),o={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)o.probe.push(new Wt);let i=new Wt,s=new Ao,r=new Ao;function a(c){let u=0,h=0,d=0;for(let W=0;W<9;W++)o.probe[W].set(0,0,0);let g=0,v=0,w=0,x=0,m=0,p=0,_=0,b=0,S=0,T=0,C=0,E=0,k=0,R=0;c.sort(aP);for(let W=0,f=c.length;W<f;W++){let y=c[W],U=y.color,D=y.intensity,G=y.distance,$=null;if(y.shadow&&y.shadow.map&&(y.shadow.map.texture.format===j0?$=y.shadow.map.texture:$=y.shadow.map.depthTexture||y.shadow.map.texture),y.isAmbientLight)u+=U.r*D,h+=U.g*D,d+=U.b*D;else if(y.isLightProbe){for(let tt=0;tt<9;tt++)o.probe[tt].addScaledVector(y.sh.coefficients[tt],D);R++}else if(y.isSunLight){let tt=t.get(y);if(tt.color.copy(y.color).multiplyScalar(y.intensity),y.castShadow){let ut=y.shadow,At=e.get(y);At.shadowIntensity=ut.intensity,At.shadowBias=ut.bias,At.shadowNormalBias=ut.normalBias,At.shadowRadius=ut.radius,At.shadowMapSize.copy(ut.mapSize).multiply(ut.getFrameExtents()),o.sunShadow[v]=At,o.sunShadowMap[v]=$;let Bt=ut.getViewportCount();for(let be=0;be<Bt;be++)o.sunShadowMatrix[w+be]=ut.getMatrix(be),o.sunShadowCascade[w+be]=ut._cascadeData[be];w+=Bt,v++}o.sun[g]=tt,g++}else if(y.isDirectionalLight){let tt=t.get(y);if(tt.color.copy(y.color).multiplyScalar(y.intensity),y.castShadow){let ut=y.shadow,At=e.get(y);At.shadowIntensity=ut.intensity,At.shadowBias=ut.bias,At.shadowNormalBias=ut.normalBias,At.shadowRadius=ut.radius,At.shadowMapSize=ut.mapSize,o.directionalShadow[x]=At,o.directionalShadowMap[x]=$,o.directionalShadowMatrix[x]=y.shadow.matrix,S++}o.directional[x]=tt,x++}else if(y.isSpotLight){let tt=t.get(y);tt.position.setFromMatrixPosition(y.matrixWorld),tt.color.copy(U).multiplyScalar(D),tt.distance=G,tt.coneCos=Math.cos(y.angle),tt.penumbraCos=Math.cos(y.angle*(1-y.penumbra)),tt.decay=y.decay,o.spot[p]=tt;let ut=y.shadow;if(y.map&&(o.spotLightMap[E]=y.map,E++,ut.updateMatrices(y),y.castShadow&&k++),o.spotLightMatrix[p]=ut.matrix,y.castShadow){let At=e.get(y);At.shadowIntensity=ut.intensity,At.shadowBias=ut.bias,At.shadowNormalBias=ut.normalBias,At.shadowRadius=ut.radius,At.shadowMapSize=ut.mapSize,o.spotShadow[p]=At,o.spotShadowMap[p]=$,C++}p++}else if(y.isRectAreaLight){let tt=t.get(y);tt.color.copy(U).multiplyScalar(D),tt.halfWidth.set(y.width*.5,0,0),tt.halfHeight.set(0,y.height*.5,0),o.rectArea[_]=tt,_++}else if(y.isPointLight){let tt=t.get(y);if(tt.color.copy(y.color).multiplyScalar(y.intensity),tt.distance=y.distance,tt.decay=y.decay,y.castShadow){let ut=y.shadow,At=e.get(y);At.shadowIntensity=ut.intensity,At.shadowBias=ut.bias,At.shadowNormalBias=ut.normalBias,At.shadowRadius=ut.radius,At.shadowMapSize=ut.mapSize,At.shadowCameraNear=ut.camera.near,At.shadowCameraFar=ut.camera.far,o.pointShadow[m]=At,o.pointShadowMap[m]=$,o.pointShadowMatrix[m]=y.shadow.matrix,T++}o.point[m]=tt,m++}else if(y.isHemisphereLight){let tt=t.get(y);tt.skyColor.copy(y.color).multiplyScalar(D),tt.groundColor.copy(y.groundColor).multiplyScalar(D),o.hemi[b]=tt,b++}}_>0&&(n.has("OES_texture_float_linear")===!0?(o.rectAreaLTC1=Fn.LTC_FLOAT_1,o.rectAreaLTC2=Fn.LTC_FLOAT_2):(o.rectAreaLTC1=Fn.LTC_HALF_1,o.rectAreaLTC2=Fn.LTC_HALF_2)),o.ambient[0]=u,o.ambient[1]=h,o.ambient[2]=d;let N=o.hash;(N.sunLength!==g||N.directionalLength!==x||N.pointLength!==m||N.spotLength!==p||N.rectAreaLength!==_||N.hemiLength!==b||N.numSunShadows!==v||N.numDirectionalShadows!==S||N.numPointShadows!==T||N.numSpotShadows!==C||N.numSpotMaps!==E||N.numLightProbes!==R)&&(o.sun.length=g,o.directional.length=x,o.spot.length=p,o.rectArea.length=_,o.point.length=m,o.hemi.length=b,o.sunShadow.length=v,o.sunShadowMap.length=v,o.sunShadowMatrix.length=w,o.sunShadowCascade.length=w,o.directionalShadow.length=S,o.directionalShadowMap.length=S,o.directionalShadowMatrix.length=S,o.pointShadow.length=T,o.pointShadowMap.length=T,o.pointShadowMatrix.length=T,o.spotShadow.length=C,o.spotShadowMap.length=C,o.spotLightMatrix.length=C+E-k,o.spotLightMap.length=E,o.numSpotLightShadowsWithMaps=k,o.numLightProbes=R,N.sunLength=g,N.directionalLength=x,N.pointLength=m,N.spotLength=p,N.rectAreaLength=_,N.hemiLength=b,N.numSunShadows=v,N.numDirectionalShadows=S,N.numPointShadows=T,N.numSpotShadows=C,N.numSpotMaps=E,N.numLightProbes=R,o.version=rP++)}function l(c,u){let h=0,d=0,g=0,v=0,w=0,x=0,m=u.matrixWorldInverse;for(let p=0,_=c.length;p<_;p++){let b=c[p];if(b.isSunLight){let S=o.sun[h];S.direction.setFromMatrixPosition(b.matrixWorld),S.direction.transformDirection(m),h++}else if(b.isDirectionalLight){let S=o.directional[d];S.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(m),d++}else if(b.isSpotLight){let S=o.spot[v];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(m),v++}else if(b.isRectAreaLight){let S=o.rectArea[w];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(m),r.identity(),s.copy(b.matrixWorld),s.premultiply(m),r.extractRotation(s),S.halfWidth.set(b.width*.5,0,0),S.halfHeight.set(0,b.height*.5,0),S.halfWidth.applyMatrix4(r),S.halfHeight.applyMatrix4(r),w++}else if(b.isPointLight){let S=o.point[g];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(m),g++}else if(b.isHemisphereLight){let S=o.hemi[x];S.direction.setFromMatrixPosition(b.matrixWorld),S.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:o}}function g5(n){let t=new lP(n),e=[],o=[],i=[];function s(d){h.camera=d,e.length=0,o.length=0,i.length=0}function r(d){e.push(d)}function a(d){o.push(d)}function l(d){i.push(d)}function c(){t.setup(e)}function u(d){t.setupView(e,d)}let h={lightsArray:e,shadowsArray:o,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:h,setupLights:c,setupLightsView:u,pushLight:r,pushShadow:a,pushLightProbeGrid:l}}function cP(n){let t=new WeakMap;function e(i,s=0){let r=t.get(i),a;return r===void 0?(a=new g5(n),t.set(i,[a])):s>=r.length?(a=new g5(n),r.push(a)):a=r[s],a}function o(){t=new WeakMap}return{get:e,dispose:o}}var uP=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fP=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,hP=[new Wt(1,0,0),new Wt(-1,0,0),new Wt(0,1,0),new Wt(0,-1,0),new Wt(0,0,1),new Wt(0,0,-1)],dP=[new Wt(0,-1,0),new Wt(0,-1,0),new Wt(0,0,1),new Wt(0,0,-1),new Wt(0,-1,0),new Wt(0,-1,0)],y5=new Ao,um=new Wt,jx=new Wt;function pP(n,t,e){let o=new l0,i=new ln,s=new ln,r=new mi,a=new Ul,l=new Sf,c={},u=e.maxTextureSize,h={[Y0]:Xs,[Xs]:Y0,[zr]:zr},d=new ar({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ln},radius:{value:4}},vertexShader:uP,fragmentShader:fP}),g=d.clone();g.defines.HORIZONTAL_PASS=1;let v=new _o;v.setAttribute("position",new si(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let w=new yi(v,d),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ol;let m=this.type;this.render=function(T,C,E){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||T.length===0)return;this.type===Jv&&(Dn("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ol);let k=n.getRenderTarget(),R=n.getActiveCubeFace(),N=n.getActiveMipmapLevel(),W=n.state;W.setBlending(Fa),W.buffers.depth.getReversed()===!0?W.buffers.color.setClear(0,0,0,0):W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);let f=m!==this.type;f&&C.traverse(function(y){y.material&&(Array.isArray(y.material)?y.material.forEach(U=>U.needsUpdate=!0):y.material.needsUpdate=!0)});for(let y=0,U=T.length;y<U;y++){let D=T[y],G=D.shadow;if(G===void 0){Dn("WebGLShadowMap:",D,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;i.copy(G.mapSize);let $=G.getFrameExtents();i.multiply($),s.copy(G.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/$.x),i.x=s.x*$.x,G.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/$.y),i.y=s.y*$.y,G.mapSize.y=s.y));let tt=n.state.buffers.depth.getReversed();if(G.camera._reversedDepth=tt,G.map===null||f===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===qc){if(D.isPointLight){Dn("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new ks(i.x,i.y,{format:j0,type:aa,minFilter:Si,magFilter:Si,generateMipmaps:!1}),G.map.texture.name=D.name+".shadowMap",G.map.depthTexture=new V0(i.x,i.y,Ws),G.map.depthTexture.name=D.name+".shadowMapDepth",G.map.depthTexture.format=Ba,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=qi,G.map.depthTexture.magFilter=qi}else D.isPointLight?(G.map=new dm(i.x),G.map.depthTexture=new Ad(i.x,Vr)):(G.map=new ks(i.x,i.y),G.map.depthTexture=new V0(i.x,i.y,Vr)),G.map.depthTexture.name=D.name+".shadowMap",G.map.depthTexture.format=Ba,this.type===Ol?(G.map.depthTexture.compareFunction=tt?am:rm,G.map.depthTexture.minFilter=Si,G.map.depthTexture.magFilter=Si):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=qi,G.map.depthTexture.magFilter=qi);G.camera.updateProjectionMatrix()}G.map.isWebGLCubeRenderTarget!==!0&&(G.map.width!==i.x||G.map.height!==i.y)&&G.map.setSize(i.x,i.y);let ut=G.map.isWebGLCubeRenderTarget?6:G.getViewportCount();D.isPointLight!==!0&&G.updateMatrices(D,E);for(let At=0;At<ut;At++){let Bt=G.getCamera(At);if(D.isPointLight){let be=G.camera,Ce=G.matrix,Be=D.distance||be.far;Be!==be.far&&(be.far=Be,be.updateProjectionMatrix()),um.setFromMatrixPosition(D.matrixWorld),be.position.copy(um),jx.copy(be.position),jx.add(hP[At]),be.up.copy(dP[At]),be.lookAt(jx),be.updateMatrixWorld(),Ce.makeTranslation(-um.x,-um.y,-um.z),y5.multiplyMatrices(be.projectionMatrix,be.matrixWorldInverse),G._frustum.setFromProjectionMatrix(y5,be.coordinateSystem,be.reversedDepth)}if(G.map.isWebGLCubeRenderTarget)n.setRenderTarget(G.map,At),n.clear();else{At===0&&(n.setRenderTarget(G.map),n.clear());let be=G.getViewport(At);r.set(s.x*be.x,s.y*be.y,s.x*be.z,s.y*be.w),W.viewport(r)}o=G.getFrustum(At),b(C,E,Bt,D,this.type)}G.isPointLightShadow!==!0&&this.type===qc&&p(G,E),G.needsUpdate=!1}m=this.type,x.needsUpdate=!1,n.setRenderTarget(k,R,N)};function p(T,C){let E=t.update(w);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,g.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,g.needsUpdate=!0),T.mapPass===null?T.mapPass=new ks(i.x,i.y,{format:j0,type:aa}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),d.uniforms.shadow_pass.value=T.map.depthTexture,d.uniforms.resolution.value.set(T.map.width,T.map.height),d.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(C,null,E,d,w,null),g.uniforms.shadow_pass.value=T.mapPass.texture,g.uniforms.resolution.value.set(T.map.width,T.map.height),g.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(C,null,E,g,w,null)}function _(T,C,E,k){let R=null,N=E.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(N!==void 0)R=N;else if(R=E.isPointLight===!0?l:a,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){let W=R.uuid,f=C.uuid,y=c[W];y===void 0&&(y={},c[W]=y);let U=y[f];U===void 0&&(U=R.clone(),y[f]=U,C.addEventListener("dispose",S)),R=U}if(R.visible=C.visible,R.wireframe=C.wireframe,k===qc?R.side=C.shadowSide!==null?C.shadowSide:C.side:R.side=C.shadowSide!==null?C.shadowSide:h[C.side],R.alphaMap=C.alphaMap,R.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,R.map=C.map,R.clipShadows=C.clipShadows,R.clippingPlanes=C.clippingPlanes,R.clipIntersection=C.clipIntersection,R.displacementMap=C.displacementMap,R.displacementScale=C.displacementScale,R.displacementBias=C.displacementBias,R.wireframeLinewidth=C.wireframeLinewidth,R.linewidth=C.linewidth,E.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let W=n.properties.get(R);W.light=E}return R}function b(T,C,E,k,R){if(T.visible===!1)return;if(T.layers.test(C.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&R===qc)&&(!T.frustumCulled||T.intersectsFrustum(o))){T.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,T.matrixWorld);let f=t.update(T),y=T.material;if(Array.isArray(y)){let U=f.groups;for(let D=0,G=U.length;D<G;D++){let $=U[D],tt=y[$.materialIndex];if(tt&&tt.visible){let ut=_(T,tt,k,R);T.onBeforeShadow(n,T,C,E,f,ut,$),n.renderBufferDirect(E,null,f,ut,T,$),T.onAfterShadow(n,T,C,E,f,ut,$)}}}else if(y.visible){let U=_(T,y,k,R);T.onBeforeShadow(n,T,C,E,f,U,null),n.renderBufferDirect(E,null,f,U,T,null),T.onAfterShadow(n,T,C,E,f,U,null)}}let W=T.children;for(let f=0,y=W.length;f<y;f++)b(W[f],C,E,k,R)}function S(T){T.target.removeEventListener("dispose",S);for(let E in c){let k=c[E],R=T.target.uuid;R in k&&(k[R].dispose(),delete k[R])}}}function mP(n,t){function e(){let K=!1,Ht=new mi,Ut=null,Nt=new mi(0,0,0,0);return{setMask:function(te){Ut!==te&&!K&&(n.colorMask(te,te,te,te),Ut=te)},setLocked:function(te){K=te},setClear:function(te,Et,fe,ce,yt){yt===!0&&(te*=ce,Et*=ce,fe*=ce),Ht.set(te,Et,fe,ce),Nt.equals(Ht)===!1&&(n.clearColor(te,Et,fe,ce),Nt.copy(Ht))},reset:function(){K=!1,Ut=null,Nt.set(-1,0,0,0)}}}function o(){let K=!1,Ht=!1,Ut=null,Nt=null,te=null;return{setReversed:function(Et){if(Ht!==Et){let fe=t.get("EXT_clip_control");Et?fe.clipControlEXT(fe.LOWER_LEFT_EXT,fe.ZERO_TO_ONE_EXT):fe.clipControlEXT(fe.LOWER_LEFT_EXT,fe.NEGATIVE_ONE_TO_ONE_EXT),Ht=Et;let ce=te;te=null,this.setClear(ce)}},getReversed:function(){return Ht},setTest:function(Et){Et?he(n.DEPTH_TEST):xe(n.DEPTH_TEST)},setMask:function(Et){Ut!==Et&&!K&&(n.depthMask(Et),Ut=Et)},setFunc:function(Et){if(Ht&&(Et=GS[Et]),Nt!==Et){switch(Et){case sd:n.depthFunc(n.NEVER);break;case rd:n.depthFunc(n.ALWAYS);break;case ad:n.depthFunc(n.LESS);break;case Rc:n.depthFunc(n.LEQUAL);break;case ld:n.depthFunc(n.EQUAL);break;case cd:n.depthFunc(n.GEQUAL);break;case ud:n.depthFunc(n.GREATER);break;case fd:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Nt=Et}},setLocked:function(Et){K=Et},setClear:function(Et){te!==Et&&(te=Et,Ht&&(Et=1-Et),n.clearDepth(Et))},reset:function(){K=!1,Ut=null,Nt=null,te=null,Ht=!1}}}function i(){let K=!1,Ht=null,Ut=null,Nt=null,te=null,Et=null,fe=null,ce=null,yt=null;return{setTest:function(Yt){K||(Yt?he(n.STENCIL_TEST):xe(n.STENCIL_TEST))},setMask:function(Yt){Ht!==Yt&&!K&&(n.stencilMask(Yt),Ht=Yt)},setFunc:function(Yt,_t,rt){(Ut!==Yt||Nt!==_t||te!==rt)&&(n.stencilFunc(Yt,_t,rt),Ut=Yt,Nt=_t,te=rt)},setOp:function(Yt,_t,rt){(Et!==Yt||fe!==_t||ce!==rt)&&(n.stencilOp(Yt,_t,rt),Et=Yt,fe=_t,ce=rt)},setLocked:function(Yt){K=Yt},setClear:function(Yt){yt!==Yt&&(n.clearStencil(Yt),yt=Yt)},reset:function(){K=!1,Ht=null,Ut=null,Nt=null,te=null,Et=null,fe=null,ce=null,yt=null}}}let s=new e,r=new o,a=new i,l=new WeakMap,c=new WeakMap,u={},h={},d={},g=new WeakMap,v=[],w=null,x=!1,m=null,p=null,_=null,b=null,S=null,T=null,C=null,E=new In(0,0,0),k=0,R=!1,N=null,W=null,f=null,y=null,U=null,D=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,$=0,tt=n.getParameter(n.VERSION);tt.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(tt)[1]),G=$>=1):tt.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(tt)[1]),G=$>=2);let ut=null,At={},Bt=n.getParameter(n.SCISSOR_BOX),be=n.getParameter(n.VIEWPORT),Ce=new mi().fromArray(Bt),Be=new mi().fromArray(be);function Ee(K,Ht,Ut,Nt){let te=new Uint8Array(4),Et=n.createTexture();n.bindTexture(K,Et),n.texParameteri(K,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(K,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let fe=0;fe<Ut;fe++)K===n.TEXTURE_3D||K===n.TEXTURE_2D_ARRAY?n.texImage3D(Ht,0,n.RGBA,1,1,Nt,0,n.RGBA,n.UNSIGNED_BYTE,te):n.texImage2D(Ht+fe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,te);return Et}let oe={};oe[n.TEXTURE_2D]=Ee(n.TEXTURE_2D,n.TEXTURE_2D,1),oe[n.TEXTURE_CUBE_MAP]=Ee(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),oe[n.TEXTURE_2D_ARRAY]=Ee(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),oe[n.TEXTURE_3D]=Ee(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),a.setClear(0),he(n.DEPTH_TEST),r.setFunc(Rc),Pt(!1),qt(bg),he(n.CULL_FACE),at(Fa);function he(K){u[K]!==!0&&(n.enable(K),u[K]=!0)}function xe(K){u[K]!==!1&&(n.disable(K),u[K]=!1)}function B(K,Ht){return d[K]!==Ht?(n.bindFramebuffer(K,Ht),d[K]=Ht,K===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=Ht),K===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=Ht),!0):!1}function it(K,Ht){let Ut=v,Nt=!1;if(K){Ut=g.get(Ht),Ut===void 0&&(Ut=[],g.set(Ht,Ut));let te=K.textures;if(Ut.length!==te.length||Ut[0]!==n.COLOR_ATTACHMENT0){for(let Et=0,fe=te.length;Et<fe;Et++)Ut[Et]=n.COLOR_ATTACHMENT0+Et;Ut.length=te.length,Nt=!0}}else Ut[0]!==n.BACK&&(Ut[0]=n.BACK,Nt=!0);Nt&&n.drawBuffers(Ut)}function ct(K){return w!==K?(n.useProgram(K),w=K,!0):!1}let xt={[Gl]:n.FUNC_ADD,[Kv]:n.FUNC_SUBTRACT,[Qv]:n.FUNC_REVERSE_SUBTRACT};xt[tx]=n.MIN,xt[ex]=n.MAX;let nt={[nx]:n.ZERO,[ox]:n.ONE,[ix]:n.SRC_COLOR,[_g]:n.SRC_ALPHA,[ux]:n.SRC_ALPHA_SATURATE,[lx]:n.DST_COLOR,[rx]:n.DST_ALPHA,[sx]:n.ONE_MINUS_SRC_COLOR,[Tg]:n.ONE_MINUS_SRC_ALPHA,[cx]:n.ONE_MINUS_DST_COLOR,[ax]:n.ONE_MINUS_DST_ALPHA,[fx]:n.CONSTANT_COLOR,[hx]:n.ONE_MINUS_CONSTANT_COLOR,[dx]:n.CONSTANT_ALPHA,[px]:n.ONE_MINUS_CONSTANT_ALPHA};function at(K,Ht,Ut,Nt,te,Et,fe,ce,yt,Yt){if(K===Fa){x===!0&&(xe(n.BLEND),x=!1);return}if(x===!1&&(he(n.BLEND),x=!0),K!==jv){if(K!==m||Yt!==R){if((p!==Gl||S!==Gl)&&(n.blendEquation(n.FUNC_ADD),p=Gl,S=Gl),Yt)switch(K){case $c:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Mg:n.blendFunc(n.ONE,n.ONE);break;case Sg:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case wg:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:io("WebGLState: Invalid blending: ",K);break}else switch(K){case $c:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Mg:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Sg:io("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case wg:io("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:io("WebGLState: Invalid blending: ",K);break}_=null,b=null,T=null,C=null,E.set(0,0,0),k=0,m=K,R=Yt}return}te=te||Ht,Et=Et||Ut,fe=fe||Nt,(Ht!==p||te!==S)&&(n.blendEquationSeparate(xt[Ht],xt[te]),p=Ht,S=te),(Ut!==_||Nt!==b||Et!==T||fe!==C)&&(n.blendFuncSeparate(nt[Ut],nt[Nt],nt[Et],nt[fe]),_=Ut,b=Nt,T=Et,C=fe),(ce.equals(E)===!1||yt!==k)&&(n.blendColor(ce.r,ce.g,ce.b,yt),E.copy(ce),k=yt),m=K,R=!1}function Rt(K,Ht){K.side===zr?xe(n.CULL_FACE):he(n.CULL_FACE);let Ut=K.side===Xs;Ht&&(Ut=!Ut),Pt(Ut),K.blending===$c&&K.transparent===!1?at(Fa):at(K.blending,K.blendEquation,K.blendSrc,K.blendDst,K.blendEquationAlpha,K.blendSrcAlpha,K.blendDstAlpha,K.blendColor,K.blendAlpha,K.premultipliedAlpha),r.setFunc(K.depthFunc),r.setTest(K.depthTest),r.setMask(K.depthWrite),s.setMask(K.colorWrite);let Nt=K.stencilWrite;a.setTest(Nt),Nt&&(a.setMask(K.stencilWriteMask),a.setFunc(K.stencilFunc,K.stencilRef,K.stencilFuncMask),a.setOp(K.stencilFail,K.stencilZFail,K.stencilZPass)),dt(K.polygonOffset,K.polygonOffsetFactor,K.polygonOffsetUnits),K.alphaToCoverage===!0?he(n.SAMPLE_ALPHA_TO_COVERAGE):xe(n.SAMPLE_ALPHA_TO_COVERAGE)}function Pt(K){N!==K&&(K?n.frontFace(n.CW):n.frontFace(n.CCW),N=K)}function qt(K){K!==Yv?(he(n.CULL_FACE),K!==W&&(K===bg?n.cullFace(n.BACK):K===Zv?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):xe(n.CULL_FACE),W=K}function Gt(K){K!==f&&(G&&n.lineWidth(K),f=K)}function dt(K,Ht,Ut){K?(he(n.POLYGON_OFFSET_FILL),(y!==Ht||U!==Ut)&&(y=Ht,U=Ut,r.getReversed()&&(Ht=-Ht),n.polygonOffset(Ht,Ut))):xe(n.POLYGON_OFFSET_FILL)}function de(K){K?he(n.SCISSOR_TEST):xe(n.SCISSOR_TEST)}function ht(K){K===void 0&&(K=n.TEXTURE0+D-1),ut!==K&&(n.activeTexture(K),ut=K)}function F(K,Ht,Ut){Ut===void 0&&(ut===null?Ut=n.TEXTURE0+D-1:Ut=ut);let Nt=At[Ut];Nt===void 0&&(Nt={type:void 0,texture:void 0},At[Ut]=Nt),(Nt.type!==K||Nt.texture!==Ht)&&(ut!==Ut&&(n.activeTexture(Ut),ut=Ut),n.bindTexture(K,Ht||oe[K]),Nt.type=K,Nt.texture=Ht)}function It(){let K=At[ut];K!==void 0&&K.type!==void 0&&(n.bindTexture(K.type,null),K.type=void 0,K.texture=void 0)}function wt(){try{n.compressedTexImage2D(...arguments)}catch(K){io("WebGLState:",K)}}function z(){try{n.compressedTexImage3D(...arguments)}catch(K){io("WebGLState:",K)}}function I(){try{n.texSubImage2D(...arguments)}catch(K){io("WebGLState:",K)}}function ft(){try{n.texSubImage3D(...arguments)}catch(K){io("WebGLState:",K)}}function Mt(){try{n.compressedTexSubImage2D(...arguments)}catch(K){io("WebGLState:",K)}}function Dt(){try{n.compressedTexSubImage3D(...arguments)}catch(K){io("WebGLState:",K)}}function Vt(){try{n.texStorage2D(...arguments)}catch(K){io("WebGLState:",K)}}function Me(){try{n.texStorage3D(...arguments)}catch(K){io("WebGLState:",K)}}function Z(){try{n.texImage2D(...arguments)}catch(K){io("WebGLState:",K)}}function Y(){try{n.texImage3D(...arguments)}catch(K){io("WebGLState:",K)}}function vt(K){return h[K]!==void 0?h[K]:n.getParameter(K)}function Xt(K,Ht){h[K]!==Ht&&(n.pixelStorei(K,Ht),h[K]=Ht)}function kt(K){Ce.equals(K)===!1&&(n.scissor(K.x,K.y,K.z,K.w),Ce.copy(K))}function V(K){Be.equals(K)===!1&&(n.viewport(K.x,K.y,K.z,K.w),Be.copy(K))}function H(K,Ht){let Ut=c.get(Ht);Ut===void 0&&(Ut=new WeakMap,c.set(Ht,Ut));let Nt=Ut.get(K);Nt===void 0&&(Nt=n.getUniformBlockIndex(Ht,K.name),Ut.set(K,Nt))}function Q(K,Ht){let Nt=c.get(Ht).get(K);l.get(Ht)!==Nt&&(n.uniformBlockBinding(Ht,Nt,K.__bindingPointIndex),l.set(Ht,Nt))}function Tt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),r.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},h={},ut=null,At={},d={},g=new WeakMap,v=[],w=null,x=!1,m=null,p=null,_=null,b=null,S=null,T=null,C=null,E=new In(0,0,0),k=0,R=!1,N=null,W=null,f=null,y=null,U=null,Ce.set(0,0,n.canvas.width,n.canvas.height),Be.set(0,0,n.canvas.width,n.canvas.height),s.reset(),r.reset(),a.reset()}return{buffers:{color:s,depth:r,stencil:a},enable:he,disable:xe,bindFramebuffer:B,drawBuffers:it,useProgram:ct,setBlending:at,setMaterial:Rt,setFlipSided:Pt,setCullFace:qt,setLineWidth:Gt,setPolygonOffset:dt,setScissorTest:de,activeTexture:ht,bindTexture:F,unbindTexture:It,compressedTexImage2D:wt,compressedTexImage3D:z,texImage2D:Z,texImage3D:Y,pixelStorei:Xt,getParameter:vt,updateUBOMapping:H,uniformBlockBinding:Q,texStorage2D:Vt,texStorage3D:Me,texSubImage2D:I,texSubImage3D:ft,compressedTexSubImage2D:Mt,compressedTexSubImage3D:Dt,scissor:kt,viewport:V,reset:Tt}}function gP(n,t,e,o,i,s,r){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ln,u=new WeakMap,h=new Set,d,g=new WeakMap,v=!1;try{v=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(z,I){return v?new OffscreenCanvas(z,I):ef("canvas")}function x(z,I,ft){let Mt=1,Dt=wt(z);if((Dt.width>ft||Dt.height>ft)&&(Mt=ft/Math.max(Dt.width,Dt.height)),Mt<1)if(typeof HTMLImageElement!="undefined"&&z instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&z instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&z instanceof ImageBitmap||typeof VideoFrame!="undefined"&&z instanceof VideoFrame){let Vt=Math.floor(Mt*Dt.width),Me=Math.floor(Mt*Dt.height);d===void 0&&(d=w(Vt,Me));let Z=I?w(Vt,Me):d;return Z.width=Vt,Z.height=Me,Z.getContext("2d").drawImage(z,0,0,Vt,Me),Dn("WebGLRenderer: Texture has been resized from ("+Dt.width+"x"+Dt.height+") to ("+Vt+"x"+Me+")."),Z}else return"data"in z&&Dn("WebGLRenderer: Image in DataTexture is too big ("+Dt.width+"x"+Dt.height+")."),z;return z}function m(z){return z.generateMipmaps}function p(z){n.generateMipmap(z)}function _(z){return z.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:z.isWebGL3DRenderTarget?n.TEXTURE_3D:z.isWebGLArrayRenderTarget||z.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(z,I,ft,Mt,Dt,Vt=!1){if(z!==null){if(n[z]!==void 0)return n[z];Dn("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+z+"'")}let Me;Mt&&(Me=t.get("EXT_texture_norm16"),Me||Dn("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Z=I;if(I===n.RED&&(ft===n.FLOAT&&(Z=n.R32F),ft===n.HALF_FLOAT&&(Z=n.R16F),ft===n.UNSIGNED_BYTE&&(Z=n.R8),ft===n.UNSIGNED_SHORT&&Me&&(Z=Me.R16_EXT),ft===n.SHORT&&Me&&(Z=Me.R16_SNORM_EXT)),I===n.RED_INTEGER&&(ft===n.UNSIGNED_BYTE&&(Z=n.R8UI),ft===n.UNSIGNED_SHORT&&(Z=n.R16UI),ft===n.UNSIGNED_INT&&(Z=n.R32UI),ft===n.BYTE&&(Z=n.R8I),ft===n.SHORT&&(Z=n.R16I),ft===n.INT&&(Z=n.R32I)),I===n.RG&&(ft===n.FLOAT&&(Z=n.RG32F),ft===n.HALF_FLOAT&&(Z=n.RG16F),ft===n.UNSIGNED_BYTE&&(Z=n.RG8),ft===n.UNSIGNED_SHORT&&Me&&(Z=Me.RG16_EXT),ft===n.SHORT&&Me&&(Z=Me.RG16_SNORM_EXT)),I===n.RG_INTEGER&&(ft===n.UNSIGNED_BYTE&&(Z=n.RG8UI),ft===n.UNSIGNED_SHORT&&(Z=n.RG16UI),ft===n.UNSIGNED_INT&&(Z=n.RG32UI),ft===n.BYTE&&(Z=n.RG8I),ft===n.SHORT&&(Z=n.RG16I),ft===n.INT&&(Z=n.RG32I)),I===n.RGB_INTEGER&&(ft===n.UNSIGNED_BYTE&&(Z=n.RGB8UI),ft===n.UNSIGNED_SHORT&&(Z=n.RGB16UI),ft===n.UNSIGNED_INT&&(Z=n.RGB32UI),ft===n.BYTE&&(Z=n.RGB8I),ft===n.SHORT&&(Z=n.RGB16I),ft===n.INT&&(Z=n.RGB32I)),I===n.RGBA_INTEGER&&(ft===n.UNSIGNED_BYTE&&(Z=n.RGBA8UI),ft===n.UNSIGNED_SHORT&&(Z=n.RGBA16UI),ft===n.UNSIGNED_INT&&(Z=n.RGBA32UI),ft===n.BYTE&&(Z=n.RGBA8I),ft===n.SHORT&&(Z=n.RGBA16I),ft===n.INT&&(Z=n.RGBA32I)),I===n.RGB&&(ft===n.UNSIGNED_SHORT&&Me&&(Z=Me.RGB16_EXT),ft===n.SHORT&&Me&&(Z=Me.RGB16_SNORM_EXT),ft===n.UNSIGNED_INT_5_9_9_9_REV&&(Z=n.RGB9_E5),ft===n.UNSIGNED_INT_10F_11F_11F_REV&&(Z=n.R11F_G11F_B10F)),I===n.RGBA){let Y=Vt?tf:jo.getTransfer(Dt);ft===n.FLOAT&&(Z=n.RGBA32F),ft===n.HALF_FLOAT&&(Z=n.RGBA16F),ft===n.UNSIGNED_BYTE&&(Z=Y===ci?n.SRGB8_ALPHA8:n.RGBA8),ft===n.UNSIGNED_SHORT&&Me&&(Z=Me.RGBA16_EXT),ft===n.SHORT&&Me&&(Z=Me.RGBA16_SNORM_EXT),ft===n.UNSIGNED_SHORT_4_4_4_4&&(Z=n.RGBA4),ft===n.UNSIGNED_SHORT_5_5_5_1&&(Z=n.RGB5_A1)}return(Z===n.R16F||Z===n.R32F||Z===n.RG16F||Z===n.RG32F||Z===n.RGBA16F||Z===n.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function S(z,I){let ft;return z?I===null||I===Vr||I===jc?ft=n.DEPTH24_STENCIL8:I===Ws?ft=n.DEPTH32F_STENCIL8:I===Jc&&(ft=n.DEPTH24_STENCIL8,Dn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):I===null||I===Vr||I===jc?ft=n.DEPTH_COMPONENT24:I===Ws?ft=n.DEPTH_COMPONENT32F:I===Jc&&(ft=n.DEPTH_COMPONENT16),ft}function T(z,I){return m(z)===!0||z.isFramebufferTexture&&z.minFilter!==qi&&z.minFilter!==Si?Math.log2(Math.max(I.width,I.height))+1:z.mipmaps!==void 0&&z.mipmaps.length>0?z.mipmaps.length:z.isCompressedTexture&&Array.isArray(z.image)?I.mipmaps.length:1}function C(z){let I=z.target;I.removeEventListener("dispose",C),k(I),I.isVideoTexture&&u.delete(I),I.isHTMLTexture&&h.delete(I)}function E(z){let I=z.target;I.removeEventListener("dispose",E),N(I)}function k(z){let I=o.get(z);if(I.__webglInit===void 0)return;let ft=z.source,Mt=g.get(ft);if(Mt){let Dt=Mt[I.__cacheKey];Dt.usedTimes--,Dt.usedTimes===0&&R(z),Object.keys(Mt).length===0&&g.delete(ft)}o.remove(z)}function R(z){let I=o.get(z);n.deleteTexture(I.__webglTexture);let ft=z.source,Mt=g.get(ft);delete Mt[I.__cacheKey],r.memory.textures--}function N(z){let I=o.get(z);if(z.depthTexture&&(z.depthTexture.dispose(),o.remove(z.depthTexture)),z.isWebGLCubeRenderTarget)for(let Mt=0;Mt<6;Mt++){if(Array.isArray(I.__webglFramebuffer[Mt]))for(let Dt=0;Dt<I.__webglFramebuffer[Mt].length;Dt++)n.deleteFramebuffer(I.__webglFramebuffer[Mt][Dt]);else n.deleteFramebuffer(I.__webglFramebuffer[Mt]);I.__webglDepthbuffer&&n.deleteRenderbuffer(I.__webglDepthbuffer[Mt])}else{if(Array.isArray(I.__webglFramebuffer))for(let Mt=0;Mt<I.__webglFramebuffer.length;Mt++)n.deleteFramebuffer(I.__webglFramebuffer[Mt]);else n.deleteFramebuffer(I.__webglFramebuffer);if(I.__webglDepthbuffer&&n.deleteRenderbuffer(I.__webglDepthbuffer),I.__webglMultisampledFramebuffer&&n.deleteFramebuffer(I.__webglMultisampledFramebuffer),I.__webglColorRenderbuffer)for(let Mt=0;Mt<I.__webglColorRenderbuffer.length;Mt++)I.__webglColorRenderbuffer[Mt]&&n.deleteRenderbuffer(I.__webglColorRenderbuffer[Mt]);I.__webglDepthRenderbuffer&&n.deleteRenderbuffer(I.__webglDepthRenderbuffer)}let ft=z.textures;for(let Mt=0,Dt=ft.length;Mt<Dt;Mt++){let Vt=o.get(ft[Mt]);Vt.__webglTexture&&(n.deleteTexture(Vt.__webglTexture),r.memory.textures--),o.remove(ft[Mt])}o.remove(z)}let W=0;function f(){W=0}function y(){return W}function U(z){W=z}function D(){let z=W;return z>=i.maxTextures&&Dn("WebGLTextures: Trying to use "+(z+1)+" texture units while this GPU supports only "+i.maxTextures),W+=1,z}function G(z){let I=[];return I.push(z.wrapS),I.push(z.wrapT),I.push(z.wrapR||0),I.push(z.magFilter),I.push(z.minFilter),I.push(z.anisotropy),I.push(z.internalFormat),I.push(z.format),I.push(z.type),I.push(z.generateMipmaps),I.push(z.premultiplyAlpha),I.push(z.flipY),I.push(z.unpackAlignment),I.push(z.colorSpace),I.join()}function $(z,I){let ft=o.get(z);if(z.isVideoTexture&&F(z),z.isRenderTargetTexture===!1&&z.isExternalTexture!==!0&&z.version>0&&ft.__version!==z.version){let Mt=z.image;if(Mt===null)Dn("WebGLRenderer: Texture marked for update but no image data found.");else if(Mt.complete===!1)Dn("WebGLRenderer: Texture marked for update but image is incomplete");else{xe(ft,z,I);return}}else z.isExternalTexture&&(ft.__webglTexture=z.sourceTexture?z.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,ft.__webglTexture,n.TEXTURE0+I)}function tt(z,I){let ft=o.get(z);if(z.isRenderTargetTexture===!1&&z.version>0&&ft.__version!==z.version){xe(ft,z,I);return}else z.isExternalTexture&&(ft.__webglTexture=z.sourceTexture?z.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,ft.__webglTexture,n.TEXTURE0+I)}function ut(z,I){let ft=o.get(z);if(z.isRenderTargetTexture===!1&&z.version>0&&ft.__version!==z.version){xe(ft,z,I);return}e.bindTexture(n.TEXTURE_3D,ft.__webglTexture,n.TEXTURE0+I)}function At(z,I){let ft=o.get(z);if(z.isCubeDepthTexture!==!0&&z.version>0&&ft.__version!==z.version){B(ft,z,I);return}e.bindTexture(n.TEXTURE_CUBE_MAP,ft.__webglTexture,n.TEXTURE0+I)}let Bt={[El]:n.REPEAT,[sr]:n.CLAMP_TO_EDGE,[Pl]:n.MIRRORED_REPEAT},be={[qi]:n.NEAREST,[Lg]:n.NEAREST_MIPMAP_NEAREST,[Zc]:n.NEAREST_MIPMAP_LINEAR,[Si]:n.LINEAR,[Bf]:n.LINEAR_MIPMAP_NEAREST,[Ga]:n.LINEAR_MIPMAP_LINEAR},Ce={[Cx]:n.NEVER,[Lx]:n.ALWAYS,[Ex]:n.LESS,[rm]:n.LEQUAL,[Px]:n.EQUAL,[am]:n.GEQUAL,[Rx]:n.GREATER,[Ix]:n.NOTEQUAL};function Be(z,I){if(I.type===Ws&&t.has("OES_texture_float_linear")===!1&&(I.magFilter===Si||I.magFilter===Bf||I.magFilter===Zc||I.magFilter===Ga||I.minFilter===Si||I.minFilter===Bf||I.minFilter===Zc||I.minFilter===Ga)&&Dn("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(z,n.TEXTURE_WRAP_S,Bt[I.wrapS]),n.texParameteri(z,n.TEXTURE_WRAP_T,Bt[I.wrapT]),(z===n.TEXTURE_3D||z===n.TEXTURE_2D_ARRAY)&&n.texParameteri(z,n.TEXTURE_WRAP_R,Bt[I.wrapR]),n.texParameteri(z,n.TEXTURE_MAG_FILTER,be[I.magFilter]),n.texParameteri(z,n.TEXTURE_MIN_FILTER,be[I.minFilter]),I.compareFunction&&(n.texParameteri(z,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(z,n.TEXTURE_COMPARE_FUNC,Ce[I.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(I.magFilter===qi||I.minFilter!==Zc&&I.minFilter!==Ga||I.type===Ws&&t.has("OES_texture_float_linear")===!1)return;if(I.anisotropy>1||o.get(I).__currentAnisotropy){let ft=t.get("EXT_texture_filter_anisotropic");n.texParameterf(z,ft.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(I.anisotropy,i.getMaxAnisotropy())),o.get(I).__currentAnisotropy=I.anisotropy}}}function Ee(z,I){let ft=!1;z.__webglInit===void 0&&(z.__webglInit=!0,I.addEventListener("dispose",C));let Mt=I.source,Dt=g.get(Mt);Dt===void 0&&(Dt={},g.set(Mt,Dt));let Vt=G(I);if(Vt!==z.__cacheKey){Dt[Vt]===void 0&&(Dt[Vt]={texture:n.createTexture(),usedTimes:0},r.memory.textures++,ft=!0),Dt[Vt].usedTimes++;let Me=Dt[z.__cacheKey];Me!==void 0&&(Dt[z.__cacheKey].usedTimes--,Me.usedTimes===0&&R(I)),z.__cacheKey=Vt,z.__webglTexture=Dt[Vt].texture}return ft}function oe(z,I,ft){return Math.floor(Math.floor(z/ft)/I)}function he(z,I,ft,Mt){let Vt=z.updateRanges;if(Vt.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,I.width,I.height,ft,Mt,I.data);else{Vt.sort((Xt,kt)=>Xt.start-kt.start);let Me=0;for(let Xt=1;Xt<Vt.length;Xt++){let kt=Vt[Me],V=Vt[Xt],H=kt.start+kt.count,Q=oe(V.start,I.width,4),Tt=oe(kt.start,I.width,4);V.start<=H+1&&Q===Tt&&oe(V.start+V.count-1,I.width,4)===Q?kt.count=Math.max(kt.count,V.start+V.count-kt.start):(++Me,Vt[Me]=V)}Vt.length=Me+1;let Z=e.getParameter(n.UNPACK_ROW_LENGTH),Y=e.getParameter(n.UNPACK_SKIP_PIXELS),vt=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,I.width);for(let Xt=0,kt=Vt.length;Xt<kt;Xt++){let V=Vt[Xt],H=Math.floor(V.start/4),Q=Math.ceil(V.count/4),Tt=H%I.width,K=Math.floor(H/I.width),Ht=Q,Ut=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,Tt),e.pixelStorei(n.UNPACK_SKIP_ROWS,K),e.texSubImage2D(n.TEXTURE_2D,0,Tt,K,Ht,Ut,ft,Mt,I.data)}z.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,Z),e.pixelStorei(n.UNPACK_SKIP_PIXELS,Y),e.pixelStorei(n.UNPACK_SKIP_ROWS,vt)}}function xe(z,I,ft){let Mt=n.TEXTURE_2D;(I.isDataArrayTexture||I.isCompressedArrayTexture)&&(Mt=n.TEXTURE_2D_ARRAY),I.isData3DTexture&&(Mt=n.TEXTURE_3D);let Dt=Ee(z,I),Vt=I.source;e.bindTexture(Mt,z.__webglTexture,n.TEXTURE0+ft);let Me=o.get(Vt);if(Vt.version!==Me.__version||Dt===!0){if(e.activeTexture(n.TEXTURE0+ft),(typeof ImageBitmap!="undefined"&&I.image instanceof ImageBitmap)===!1){let Ut=jo.getPrimaries(jo.workingColorSpace),Nt=I.colorSpace===la?null:jo.getPrimaries(I.colorSpace),te=I.colorSpace===la||Ut===Nt?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,I.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,te)}e.pixelStorei(n.UNPACK_ALIGNMENT,I.unpackAlignment);let Y=x(I.image,!1,i.maxTextureSize);Y=It(I,Y);let vt=s.convert(I.format,I.colorSpace),Xt=s.convert(I.type),kt=b(I.internalFormat,vt,Xt,I.normalized,I.colorSpace,I.isVideoTexture);Be(Mt,I);let V,H=I.mipmaps,Q=I.isVideoTexture!==!0,Tt=Me.__version===void 0||Dt===!0,K=Vt.dataReady,Ht=T(I,Y);if(I.isDepthTexture)kt=S(I.format===J0,I.type),Tt&&(Q?e.texStorage2D(n.TEXTURE_2D,1,kt,Y.width,Y.height):e.texImage2D(n.TEXTURE_2D,0,kt,Y.width,Y.height,0,vt,Xt,null));else if(I.isDataTexture)if(H.length>0){Q&&Tt&&e.texStorage2D(n.TEXTURE_2D,Ht,kt,H[0].width,H[0].height);for(let Ut=0,Nt=H.length;Ut<Nt;Ut++)V=H[Ut],Q?K&&e.texSubImage2D(n.TEXTURE_2D,Ut,0,0,V.width,V.height,vt,Xt,V.data):e.texImage2D(n.TEXTURE_2D,Ut,kt,V.width,V.height,0,vt,Xt,V.data);I.generateMipmaps=!1}else Q?(Tt&&e.texStorage2D(n.TEXTURE_2D,Ht,kt,Y.width,Y.height),K&&he(I,Y,vt,Xt)):e.texImage2D(n.TEXTURE_2D,0,kt,Y.width,Y.height,0,vt,Xt,Y.data);else if(I.isCompressedTexture)if(I.isCompressedArrayTexture){Q&&Tt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Ht,kt,H[0].width,H[0].height,Y.depth);for(let Ut=0,Nt=H.length;Ut<Nt;Ut++)if(V=H[Ut],I.format!==Hs)if(vt!==null)if(Q){if(K)if(I.layerUpdates.size>0){let te=Vg(V.width,V.height,I.format,I.type);for(let Et of I.layerUpdates){let fe=V.data.subarray(Et*te/V.data.BYTES_PER_ELEMENT,(Et+1)*te/V.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Ut,0,0,Et,V.width,V.height,1,vt,fe)}}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Ut,0,0,0,V.width,V.height,Y.depth,vt,V.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Ut,kt,V.width,V.height,Y.depth,0,V.data,0,0);else Dn("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Q?K&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,Ut,0,0,0,V.width,V.height,Y.depth,vt,Xt,V.data):e.texImage3D(n.TEXTURE_2D_ARRAY,Ut,kt,V.width,V.height,Y.depth,0,vt,Xt,V.data);I.layerUpdates.size>0&&I.clearLayerUpdates()}else{Q&&Tt&&e.texStorage2D(n.TEXTURE_2D,Ht,kt,H[0].width,H[0].height);for(let Ut=0,Nt=H.length;Ut<Nt;Ut++)V=H[Ut],I.format!==Hs?vt!==null?Q?K&&e.compressedTexSubImage2D(n.TEXTURE_2D,Ut,0,0,V.width,V.height,vt,V.data):e.compressedTexImage2D(n.TEXTURE_2D,Ut,kt,V.width,V.height,0,V.data):Dn("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Q?K&&e.texSubImage2D(n.TEXTURE_2D,Ut,0,0,V.width,V.height,vt,Xt,V.data):e.texImage2D(n.TEXTURE_2D,Ut,kt,V.width,V.height,0,vt,Xt,V.data)}else if(I.isDataArrayTexture)if(Q){if(Tt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Ht,kt,Y.width,Y.height,Y.depth),K)if(I.layerUpdates.size>0){let Ut=Vg(Y.width,Y.height,I.format,I.type);for(let Nt of I.layerUpdates){let te=Y.data.subarray(Nt*Ut/Y.data.BYTES_PER_ELEMENT,(Nt+1)*Ut/Y.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Nt,Y.width,Y.height,1,vt,Xt,te)}I.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Y.width,Y.height,Y.depth,vt,Xt,Y.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,kt,Y.width,Y.height,Y.depth,0,vt,Xt,Y.data);else if(I.isData3DTexture)Q?(Tt&&e.texStorage3D(n.TEXTURE_3D,Ht,kt,Y.width,Y.height,Y.depth),K&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Y.width,Y.height,Y.depth,vt,Xt,Y.data)):e.texImage3D(n.TEXTURE_3D,0,kt,Y.width,Y.height,Y.depth,0,vt,Xt,Y.data);else if(I.isFramebufferTexture){if(Tt)if(Q)e.texStorage2D(n.TEXTURE_2D,Ht,kt,Y.width,Y.height);else{let Ut=Y.width,Nt=Y.height;for(let te=0;te<Ht;te++)e.texImage2D(n.TEXTURE_2D,te,kt,Ut,Nt,0,vt,Xt,null),Ut>>=1,Nt>>=1}}else if(I.isHTMLTexture){if("texElementImage2D"in n){let Ut=n.canvas;if(Ut.hasAttribute("layoutsubtree")||Ut.setAttribute("layoutsubtree","true"),Y.parentNode!==Ut){Ut.appendChild(Y),h.add(I),Ut.onpaint=Nt=>{let te=Nt.changedElements;for(let Et of h)te.includes(Et.image)&&(Et.needsUpdate=!0)},Ut.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,Y);else{let te=n.RGBA,Et=n.RGBA,fe=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,te,Et,fe,Y)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(H.length>0){if(Q&&Tt){let Ut=wt(H[0]);e.texStorage2D(n.TEXTURE_2D,Ht,kt,Ut.width,Ut.height)}for(let Ut=0,Nt=H.length;Ut<Nt;Ut++)V=H[Ut],Q?K&&e.texSubImage2D(n.TEXTURE_2D,Ut,0,0,vt,Xt,V):e.texImage2D(n.TEXTURE_2D,Ut,kt,vt,Xt,V);I.generateMipmaps=!1}else if(Q){if(Tt){let Ut=wt(Y);e.texStorage2D(n.TEXTURE_2D,Ht,kt,Ut.width,Ut.height)}K&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,vt,Xt,Y)}else e.texImage2D(n.TEXTURE_2D,0,kt,vt,Xt,Y);m(I)&&p(Mt),Me.__version=Vt.version,I.onUpdate&&I.onUpdate(I)}z.__version=I.version}function B(z,I,ft){if(I.image.length!==6)return;let Mt=Ee(z,I),Dt=I.source;e.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture,n.TEXTURE0+ft);let Vt=o.get(Dt);if(Dt.version!==Vt.__version||Mt===!0){e.activeTexture(n.TEXTURE0+ft);let Me=jo.getPrimaries(jo.workingColorSpace),Z=I.colorSpace===la?null:jo.getPrimaries(I.colorSpace),Y=I.colorSpace===la||Me===Z?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,I.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,I.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Y);let vt=I.isCompressedTexture||I.image[0].isCompressedTexture,Xt=I.image[0]&&I.image[0].isDataTexture,kt=[];for(let Et=0;Et<6;Et++)!vt&&!Xt?kt[Et]=x(I.image[Et],!0,i.maxCubemapSize):kt[Et]=Xt?I.image[Et].image:I.image[Et],kt[Et]=It(I,kt[Et]);let V=kt[0],H=s.convert(I.format,I.colorSpace),Q=s.convert(I.type),Tt=b(I.internalFormat,H,Q,I.normalized,I.colorSpace),K=I.isVideoTexture!==!0,Ht=Vt.__version===void 0||Mt===!0,Ut=Dt.dataReady,Nt=T(I,V);Be(n.TEXTURE_CUBE_MAP,I);let te;if(vt){K&&Ht&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Nt,Tt,V.width,V.height);for(let Et=0;Et<6;Et++){te=kt[Et].mipmaps;for(let fe=0;fe<te.length;fe++){let ce=te[fe];I.format!==Hs?H!==null?K?Ut&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Et,fe,0,0,ce.width,ce.height,H,ce.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Et,fe,Tt,ce.width,ce.height,0,ce.data):Dn("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):K?Ut&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Et,fe,0,0,ce.width,ce.height,H,Q,ce.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Et,fe,Tt,ce.width,ce.height,0,H,Q,ce.data)}}}else{if(te=I.mipmaps,K&&Ht){te.length>0&&Nt++;let Et=wt(kt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,Nt,Tt,Et.width,Et.height)}for(let Et=0;Et<6;Et++)if(Xt){K?Ut&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,0,0,kt[Et].width,kt[Et].height,H,Q,kt[Et].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,Tt,kt[Et].width,kt[Et].height,0,H,Q,kt[Et].data);for(let fe=0;fe<te.length;fe++){let yt=te[fe].image[Et].image;K?Ut&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Et,fe+1,0,0,yt.width,yt.height,H,Q,yt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Et,fe+1,Tt,yt.width,yt.height,0,H,Q,yt.data)}}else{K?Ut&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,0,0,H,Q,kt[Et]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,Tt,H,Q,kt[Et]);for(let fe=0;fe<te.length;fe++){let ce=te[fe];K?Ut&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Et,fe+1,0,0,H,Q,ce.image[Et]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Et,fe+1,Tt,H,Q,ce.image[Et])}}}m(I)&&p(n.TEXTURE_CUBE_MAP),Vt.__version=Dt.version,I.onUpdate&&I.onUpdate(I)}z.__version=I.version}function it(z,I,ft,Mt,Dt,Vt){let Me=s.convert(ft.format,ft.colorSpace),Z=s.convert(ft.type),Y=b(ft.internalFormat,Me,Z,ft.normalized,ft.colorSpace),vt=o.get(I),Xt=o.get(ft);if(Xt.__renderTarget=I,!vt.__hasExternalTextures){let kt=Math.max(1,I.width>>Vt),V=Math.max(1,I.height>>Vt);Dt===n.TEXTURE_3D||Dt===n.TEXTURE_2D_ARRAY?e.texImage3D(Dt,Vt,Y,kt,V,I.depth,0,Me,Z,null):e.texImage2D(Dt,Vt,Y,kt,V,0,Me,Z,null)}e.bindFramebuffer(n.FRAMEBUFFER,z),ht(I)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Mt,Dt,Xt.__webglTexture,0,de(I)):(Dt===n.TEXTURE_2D||Dt>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Dt<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Mt,Dt,Xt.__webglTexture,Vt),e.bindFramebuffer(n.FRAMEBUFFER,null)}function ct(z,I,ft){if(n.bindRenderbuffer(n.RENDERBUFFER,z),I.depthBuffer){let Mt=I.depthTexture,Dt=Mt&&Mt.isDepthTexture?Mt.type:null,Vt=S(I.stencilBuffer,Dt),Me=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;ht(I)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,de(I),Vt,I.width,I.height):ft?n.renderbufferStorageMultisample(n.RENDERBUFFER,de(I),Vt,I.width,I.height):n.renderbufferStorage(n.RENDERBUFFER,Vt,I.width,I.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Me,n.RENDERBUFFER,z)}else{let Mt=I.textures;for(let Dt=0;Dt<Mt.length;Dt++){let Vt=Mt[Dt],Me=s.convert(Vt.format,Vt.colorSpace),Z=s.convert(Vt.type),Y=b(Vt.internalFormat,Me,Z,Vt.normalized,Vt.colorSpace);ht(I)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,de(I),Y,I.width,I.height):ft?n.renderbufferStorageMultisample(n.RENDERBUFFER,de(I),Y,I.width,I.height):n.renderbufferStorage(n.RENDERBUFFER,Y,I.width,I.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function xt(z,I,ft){let Mt=I.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,z),!(I.depthTexture&&I.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Dt=o.get(I.depthTexture);if(Dt.__renderTarget=I,(!Dt.__webglTexture||I.depthTexture.image.width!==I.width||I.depthTexture.image.height!==I.height)&&(I.depthTexture.image.width=I.width,I.depthTexture.image.height=I.height,I.depthTexture.needsUpdate=!0),Mt){if(Dt.__webglInit===void 0&&(Dt.__webglInit=!0,I.depthTexture.addEventListener("dispose",C)),Dt.__webglTexture===void 0){Dt.__webglTexture=n.createTexture(),e.bindTexture(n.TEXTURE_CUBE_MAP,Dt.__webglTexture),Be(n.TEXTURE_CUBE_MAP,I.depthTexture);let vt=s.convert(I.depthTexture.format),Xt=s.convert(I.depthTexture.type),kt;I.depthTexture.format===Ba?kt=n.DEPTH_COMPONENT24:I.depthTexture.format===J0&&(kt=n.DEPTH24_STENCIL8);for(let V=0;V<6;V++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+V,0,kt,I.width,I.height,0,vt,Xt,null)}}else $(I.depthTexture,0);let Vt=Dt.__webglTexture,Me=de(I),Z=Mt?n.TEXTURE_CUBE_MAP_POSITIVE_X+ft:n.TEXTURE_2D,Y=I.depthTexture.format===J0?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(I.depthTexture.format===Ba)ht(I)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Y,Z,Vt,0,Me):n.framebufferTexture2D(n.FRAMEBUFFER,Y,Z,Vt,0);else if(I.depthTexture.format===J0)ht(I)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Y,Z,Vt,0,Me):n.framebufferTexture2D(n.FRAMEBUFFER,Y,Z,Vt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function nt(z){let I=o.get(z),ft=z.isWebGLCubeRenderTarget===!0;if(I.__boundDepthTexture!==z.depthTexture){let Mt=z.depthTexture;if(I.__depthDisposeCallback&&I.__depthDisposeCallback(),Mt){let Dt=()=>{delete I.__boundDepthTexture,delete I.__depthDisposeCallback,Mt.removeEventListener("dispose",Dt)};Mt.addEventListener("dispose",Dt),I.__depthDisposeCallback=Dt}I.__boundDepthTexture=Mt}if(z.depthTexture&&!I.__autoAllocateDepthBuffer)if(ft)for(let Mt=0;Mt<6;Mt++)xt(I.__webglFramebuffer[Mt],z,Mt);else{let Mt=z.texture.mipmaps;Mt&&Mt.length>0?xt(I.__webglFramebuffer[0],z,0):xt(I.__webglFramebuffer,z,0)}else if(ft){I.__webglDepthbuffer=[];for(let Mt=0;Mt<6;Mt++)if(e.bindFramebuffer(n.FRAMEBUFFER,I.__webglFramebuffer[Mt]),I.__webglDepthbuffer[Mt]===void 0)I.__webglDepthbuffer[Mt]=n.createRenderbuffer(),ct(I.__webglDepthbuffer[Mt],z,!1);else{let Dt=z.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Vt=I.__webglDepthbuffer[Mt];n.bindRenderbuffer(n.RENDERBUFFER,Vt),n.framebufferRenderbuffer(n.FRAMEBUFFER,Dt,n.RENDERBUFFER,Vt)}}else{let Mt=z.texture.mipmaps;if(Mt&&Mt.length>0?e.bindFramebuffer(n.FRAMEBUFFER,I.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,I.__webglFramebuffer),I.__webglDepthbuffer===void 0)I.__webglDepthbuffer=n.createRenderbuffer(),ct(I.__webglDepthbuffer,z,!1);else{let Dt=z.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Vt=I.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Vt),n.framebufferRenderbuffer(n.FRAMEBUFFER,Dt,n.RENDERBUFFER,Vt)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function at(z,I,ft){let Mt=o.get(z);I!==void 0&&it(Mt.__webglFramebuffer,z,z.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),ft!==void 0&&nt(z)}function Rt(z){let I=z.texture,ft=o.get(z),Mt=o.get(I);z.addEventListener("dispose",E);let Dt=z.textures,Vt=z.isWebGLCubeRenderTarget===!0,Me=Dt.length>1;if(Me||(Mt.__webglTexture===void 0&&(Mt.__webglTexture=n.createTexture()),Mt.__version=I.version,r.memory.textures++),Vt){ft.__webglFramebuffer=[];for(let Z=0;Z<6;Z++)if(I.mipmaps&&I.mipmaps.length>0){ft.__webglFramebuffer[Z]=[];for(let Y=0;Y<I.mipmaps.length;Y++)ft.__webglFramebuffer[Z][Y]=n.createFramebuffer()}else ft.__webglFramebuffer[Z]=n.createFramebuffer()}else{if(I.mipmaps&&I.mipmaps.length>0){ft.__webglFramebuffer=[];for(let Z=0;Z<I.mipmaps.length;Z++)ft.__webglFramebuffer[Z]=n.createFramebuffer()}else ft.__webglFramebuffer=n.createFramebuffer();if(Me)for(let Z=0,Y=Dt.length;Z<Y;Z++){let vt=o.get(Dt[Z]);vt.__webglTexture===void 0&&(vt.__webglTexture=n.createTexture(),r.memory.textures++)}if(z.samples>0&&ht(z)===!1){ft.__webglMultisampledFramebuffer=n.createFramebuffer(),ft.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,ft.__webglMultisampledFramebuffer);for(let Z=0;Z<Dt.length;Z++){let Y=Dt[Z];ft.__webglColorRenderbuffer[Z]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,ft.__webglColorRenderbuffer[Z]);let vt=s.convert(Y.format,Y.colorSpace),Xt=s.convert(Y.type),kt=b(Y.internalFormat,vt,Xt,Y.normalized,Y.colorSpace,z.isXRRenderTarget===!0),V=de(z);n.renderbufferStorageMultisample(n.RENDERBUFFER,V,kt,z.width,z.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Z,n.RENDERBUFFER,ft.__webglColorRenderbuffer[Z])}n.bindRenderbuffer(n.RENDERBUFFER,null),z.depthBuffer&&(ft.__webglDepthRenderbuffer=n.createRenderbuffer(),ct(ft.__webglDepthRenderbuffer,z,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Vt){e.bindTexture(n.TEXTURE_CUBE_MAP,Mt.__webglTexture),Be(n.TEXTURE_CUBE_MAP,I);for(let Z=0;Z<6;Z++)if(I.mipmaps&&I.mipmaps.length>0)for(let Y=0;Y<I.mipmaps.length;Y++)it(ft.__webglFramebuffer[Z][Y],z,I,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Y);else it(ft.__webglFramebuffer[Z],z,I,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0);m(I)&&p(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Me){for(let Z=0,Y=Dt.length;Z<Y;Z++){let vt=Dt[Z],Xt=o.get(vt),kt=n.TEXTURE_2D;(z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(kt=z.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(kt,Xt.__webglTexture),Be(kt,vt),it(ft.__webglFramebuffer,z,vt,n.COLOR_ATTACHMENT0+Z,kt,0),m(vt)&&p(kt)}e.unbindTexture()}else{let Z=n.TEXTURE_2D;if((z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(Z=z.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(Z,Mt.__webglTexture),Be(Z,I),I.mipmaps&&I.mipmaps.length>0)for(let Y=0;Y<I.mipmaps.length;Y++)it(ft.__webglFramebuffer[Y],z,I,n.COLOR_ATTACHMENT0,Z,Y);else it(ft.__webglFramebuffer,z,I,n.COLOR_ATTACHMENT0,Z,0);m(I)&&p(Z),e.unbindTexture()}z.depthBuffer&&nt(z)}function Pt(z){let I=z.textures;for(let ft=0,Mt=I.length;ft<Mt;ft++){let Dt=I[ft];if(m(Dt)){let Vt=_(z),Me=o.get(Dt).__webglTexture;e.bindTexture(Vt,Me),p(Vt),e.unbindTexture()}}}let qt=[],Gt=[];function dt(z){if(z.samples>0){if(ht(z)===!1){let I=z.textures,ft=z.width,Mt=z.height,Dt=n.COLOR_BUFFER_BIT,Vt=z.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Me=o.get(z),Z=I.length>1;if(Z)for(let vt=0;vt<I.length;vt++)e.bindFramebuffer(n.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+vt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+vt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer);let Y=z.texture.mipmaps;Y&&Y.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Me.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let vt=0;vt<I.length;vt++){if(z.resolveDepthBuffer&&(z.depthBuffer&&(Dt|=n.DEPTH_BUFFER_BIT),z.stencilBuffer&&z.resolveStencilBuffer&&(Dt|=n.STENCIL_BUFFER_BIT)),Z){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Me.__webglColorRenderbuffer[vt]);let Xt=o.get(I[vt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Xt,0)}n.blitFramebuffer(0,0,ft,Mt,0,0,ft,Mt,Dt,n.NEAREST),l===!0&&(qt.length=0,Gt.length=0,qt.push(n.COLOR_ATTACHMENT0+vt),z.depthBuffer&&z.storeMultisampledDepthBuffer===!1&&(qt.push(Vt),Gt.push(Vt),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Gt)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,qt))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Z)for(let vt=0;vt<I.length;vt++){e.bindFramebuffer(n.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+vt,n.RENDERBUFFER,Me.__webglColorRenderbuffer[vt]);let Xt=o.get(I[vt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+vt,n.TEXTURE_2D,Xt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}else if(z.depthBuffer&&z.storeMultisampledDepthBuffer===!1&&l){let I=z.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[I])}}}function de(z){return Math.min(i.maxSamples,z.samples)}function ht(z){let I=o.get(z);return z.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&I.__useRenderToTexture!==!1}function F(z){let I=r.render.frame;u.get(z)!==I&&(u.set(z,I),z.update())}function It(z,I){let ft=z.colorSpace,Mt=z.format,Dt=z.type;return z.isCompressedTexture===!0||z.isVideoTexture===!0||ft!==Qu&&ft!==la&&(jo.getTransfer(ft)===ci?(Mt!==Hs||Dt!==cr)&&Dn("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):io("WebGLTextures: Unsupported texture color space:",ft)),I}function wt(z){return typeof HTMLImageElement!="undefined"&&z instanceof HTMLImageElement?(c.width=z.naturalWidth||z.width,c.height=z.naturalHeight||z.height):typeof VideoFrame!="undefined"&&z instanceof VideoFrame?(c.width=z.displayWidth,c.height=z.displayHeight):(c.width=z.width,c.height=z.height),c}this.allocateTextureUnit=D,this.resetTextureUnits=f,this.getTextureUnits=y,this.setTextureUnits=U,this.setTexture2D=$,this.setTexture2DArray=tt,this.setTexture3D=ut,this.setTextureCube=At,this.rebindTextures=at,this.setupRenderTarget=Rt,this.updateRenderTargetMipmap=Pt,this.updateMultisampleRenderTarget=dt,this.setupDepthRenderbuffer=nt,this.setupFrameBufferTexture=it,this.useMultisampledRTT=ht,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function _5(n,t){function e(o,i=la){let s,r=jo.getTransfer(i);if(o===cr)return n.UNSIGNED_BYTE;if(o===_p)return n.UNSIGNED_SHORT_4_4_4_4;if(o===Tp)return n.UNSIGNED_SHORT_5_5_5_1;if(o===Bg)return n.UNSIGNED_INT_5_9_9_9_REV;if(o===Ug)return n.UNSIGNED_INT_10F_11F_11F_REV;if(o===kg)return n.BYTE;if(o===Dg)return n.SHORT;if(o===Jc)return n.UNSIGNED_SHORT;if(o===wp)return n.INT;if(o===Vr)return n.UNSIGNED_INT;if(o===Ws)return n.FLOAT;if(o===aa)return n.HALF_FLOAT;if(o===Ng)return n.ALPHA;if(o===Fg)return n.RGB;if(o===Hs)return n.RGBA;if(o===Ba)return n.DEPTH_COMPONENT;if(o===J0)return n.DEPTH_STENCIL;if(o===Ap)return n.RED;if(o===Uf)return n.RED_INTEGER;if(o===j0)return n.RG;if(o===Cp)return n.RG_INTEGER;if(o===Ep)return n.RGBA_INTEGER;if(o===Nf||o===Ff||o===Of||o===Gf)if(r===ci)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(o===Nf)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(o===Ff)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(o===Of)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(o===Gf)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(o===Nf)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(o===Ff)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(o===Of)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(o===Gf)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(o===Pp||o===Rp||o===Ip||o===Lp)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(o===Pp)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(o===Rp)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(o===Ip)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(o===Lp)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(o===kp||o===Dp||o===Bp||o===Up||o===Np||o===zf||o===Fp)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(o===kp||o===Dp)return r===ci?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(o===Bp)return r===ci?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(o===Up)return s.COMPRESSED_R11_EAC;if(o===Np)return s.COMPRESSED_SIGNED_R11_EAC;if(o===zf)return s.COMPRESSED_RG11_EAC;if(o===Fp)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(o===Op||o===Gp||o===zp||o===Vp||o===Wp||o===Hp||o===Xp||o===qp||o===$p||o===Yp||o===Zp||o===Jp||o===jp||o===Kp)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(o===Op)return r===ci?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(o===Gp)return r===ci?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(o===zp)return r===ci?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(o===Vp)return r===ci?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(o===Wp)return r===ci?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(o===Hp)return r===ci?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(o===Xp)return r===ci?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(o===qp)return r===ci?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(o===$p)return r===ci?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(o===Yp)return r===ci?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(o===Zp)return r===ci?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(o===Jp)return r===ci?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(o===jp)return r===ci?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(o===Kp)return r===ci?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(o===Qp||o===tm||o===em)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(o===Qp)return r===ci?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(o===tm)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(o===em)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(o===nm||o===om||o===Vf||o===im)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(o===nm)return s.COMPRESSED_RED_RGTC1_EXT;if(o===om)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(o===Vf)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(o===im)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return o===jc?n.UNSIGNED_INT_24_8:n[o]!==void 0?n[o]:null}return{convert:e}}var yP=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,vP=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,sb=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let o=new uf(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=o}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,o=new ar({vertexShader:yP,fragmentShader:vP,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new yi(new H0(20,20),o)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},rb=class extends _r{constructor(t,e){super();let o=this,i=null,s=1,r=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,g=null,v=null,w=typeof XRWebGLBinding!="undefined",x=new sb,m={},p=e.getContextAttributes(),_=null,b=null,S=[],T=[],C=new ln,E=null,k=null,R=new Xi;R.viewport=new mi;let N=new Xi;N.viewport=new mi;let W=[R,N],f=new gp,y=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(oe){let he=S[oe];return he===void 0&&(he=new Bc,S[oe]=he),he.getTargetRaySpace()},this.getControllerGrip=function(oe){let he=S[oe];return he===void 0&&(he=new Bc,S[oe]=he),he.getGripSpace()},this.getHand=function(oe){let he=S[oe];return he===void 0&&(he=new Bc,S[oe]=he),he.getHandSpace()};function D(oe){let he=T.indexOf(oe.inputSource);if(he===-1)return;let xe=S[he];xe!==void 0&&(xe.update(oe.inputSource,oe.frame,c||r),xe.dispatchEvent({type:oe.type,data:oe.inputSource}))}function G(){i.removeEventListener("select",D),i.removeEventListener("selectstart",D),i.removeEventListener("selectend",D),i.removeEventListener("squeeze",D),i.removeEventListener("squeezestart",D),i.removeEventListener("squeezeend",D),i.removeEventListener("end",G),i.removeEventListener("inputsourceschange",$);for(let oe=0;oe<S.length;oe++){let he=T[oe];he!==null&&(T[oe]=null,S[oe].disconnect(he))}y=null,U=null,x.reset();for(let oe in m)delete m[oe];if(t.setRenderTarget(_),g=null,d=null,h=null,i=null,b=null,Ee.stop(),o.isPresenting=!1,t.setPixelRatio(E),t.setSize(C.width,C.height,!1),k!==null){let oe=k.camera;oe.fov=k.fov,oe.zoom=k.zoom,oe.updateProjectionMatrix(),k=null}o.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(oe){s=oe,o.isPresenting===!0&&Dn("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(oe){a=oe,o.isPresenting===!0&&Dn("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(oe){c=oe},this.getBaseLayer=function(){return d!==null?d:g},this.getBinding=function(){return h===null&&w&&(h=new XRWebGLBinding(i,e)),h},this.getFrame=function(){return v},this.getSession=function(){return i},this.setSession=async function(oe){if(i=oe,i!==null){if(_=t.getRenderTarget(),i.addEventListener("select",D),i.addEventListener("selectstart",D),i.addEventListener("selectend",D),i.addEventListener("squeeze",D),i.addEventListener("squeezestart",D),i.addEventListener("squeezeend",D),i.addEventListener("end",G),i.addEventListener("inputsourceschange",$),p.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(C),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let xe=null,B=null,it=null;p.depth&&(it=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,xe=p.stencil?J0:Ba,B=p.stencil?jc:Vr);let ct={colorFormat:e.RGBA8,depthFormat:it,scaleFactor:s};h=this.getBinding(),d=h.createProjectionLayer(ct),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),b=new ks(d.textureWidth,d.textureHeight,{format:Hs,type:cr,depthTexture:new V0(d.textureWidth,d.textureHeight,B,void 0,void 0,void 0,void 0,void 0,void 0,xe),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let xe={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(i,e,xe),i.updateRenderState({baseLayer:g}),t.setPixelRatio(1),t.setSize(g.framebufferWidth,g.framebufferHeight,!1),b=new ks(g.framebufferWidth,g.framebufferHeight,{format:Hs,type:cr,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1,storeMultisampledDepthBuffer:g.ignoreDepthValues===!1,storeMultisampledStencilBuffer:g.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await i.requestReferenceSpace(a),Ee.setContext(i),Ee.start(),o.isPresenting=!0,o.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function $(oe){for(let he=0;he<oe.removed.length;he++){let xe=oe.removed[he],B=T.indexOf(xe);B>=0&&(T[B]=null,S[B].disconnect(xe))}for(let he=0;he<oe.added.length;he++){let xe=oe.added[he],B=T.indexOf(xe);if(B===-1){for(let ct=0;ct<S.length;ct++)if(ct>=T.length){T.push(xe),B=ct;break}else if(T[ct]===null){T[ct]=xe,B=ct;break}if(B===-1)break}let it=S[B];it&&it.connect(xe)}}let tt=new Wt,ut=new Wt;function At(oe,he,xe){tt.setFromMatrixPosition(he.matrixWorld),ut.setFromMatrixPosition(xe.matrixWorld);let B=tt.distanceTo(ut),it=he.projectionMatrix.elements,ct=xe.projectionMatrix.elements,xt=it[14]/(it[10]-1),nt=it[14]/(it[10]+1),at=(it[9]+1)/it[5],Rt=(it[9]-1)/it[5],Pt=(it[8]-1)/it[0],qt=(ct[8]+1)/ct[0],Gt=xt*Pt,dt=xt*qt,de=B/(-Pt+qt),ht=de*-Pt;if(he.matrixWorld.decompose(oe.position,oe.quaternion,oe.scale),oe.translateX(ht),oe.translateZ(de),oe.matrixWorld.compose(oe.position,oe.quaternion,oe.scale),oe.matrixWorldInverse.copy(oe.matrixWorld).invert(),it[10]===-1)oe.projectionMatrix.copy(he.projectionMatrix),oe.projectionMatrixInverse.copy(he.projectionMatrixInverse);else{let F=xt+de,It=nt+de,wt=Gt-ht,z=dt+(B-ht),I=at*nt/It*F,ft=Rt*nt/It*F;oe.projectionMatrix.makePerspective(wt,z,I,ft,F,It),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert()}}function Bt(oe,he){he===null?oe.matrixWorld.copy(oe.matrix):oe.matrixWorld.multiplyMatrices(he.matrixWorld,oe.matrix),oe.matrixWorldInverse.copy(oe.matrixWorld).invert()}this.updateCamera=function(oe){if(i===null)return;let he=oe.near,xe=oe.far;x.texture!==null&&(x.depthNear>0&&(he=x.depthNear),x.depthFar>0&&(xe=x.depthFar)),f.near=N.near=R.near=he,f.far=N.far=R.far=xe,(y!==f.near||U!==f.far)&&(i.updateRenderState({depthNear:f.near,depthFar:f.far}),y=f.near,U=f.far),f.layers.mask=oe.layers.mask|6,R.layers.mask=f.layers.mask&-5,N.layers.mask=f.layers.mask&-3;let B=oe.parent,it=f.cameras;Bt(f,B);for(let ct=0;ct<it.length;ct++)Bt(it[ct],B);it.length===2?At(f,R,N):f.projectionMatrix.copy(R.projectionMatrix),k===null&&oe.isPerspectiveCamera&&(k={camera:oe,fov:oe.fov,zoom:oe.zoom}),be(oe,f,B)};function be(oe,he,xe){xe===null?oe.matrix.copy(he.matrixWorld):(oe.matrix.copy(xe.matrixWorld),oe.matrix.invert(),oe.matrix.multiply(he.matrixWorld)),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.updateMatrixWorld(!0),oe.projectionMatrix.copy(he.projectionMatrix),oe.projectionMatrixInverse.copy(he.projectionMatrixInverse),oe.isPerspectiveCamera&&(oe.fov=Ic*2*Math.atan(1/oe.projectionMatrix.elements[5]),oe.zoom=1)}this.getCamera=function(){return f},this.getFoveation=function(){if(!(d===null&&g===null))return l},this.setFoveation=function(oe){l=oe,d!==null&&(d.fixedFoveation=oe),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=oe)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(f)},this.getCameraTexture=function(oe){return m[oe]};let Ce=null;function Be(oe,he){if(u=he.getViewerPose(c||r),v=he,u!==null){let xe=u.views;g!==null&&(t.setRenderTargetFramebuffer(b,g.framebuffer),t.setRenderTarget(b));let B=!1;xe.length!==f.cameras.length&&(f.cameras.length=0,B=!0);for(let nt=0;nt<xe.length;nt++){let at=xe[nt],Rt=null;if(g!==null)Rt=g.getViewport(at);else{let qt=h.getViewSubImage(d,at);Rt=qt.viewport,nt===0&&(t.setRenderTargetTextures(b,qt.colorTexture,qt.depthStencilTexture),t.setRenderTarget(b))}let Pt=W[nt];Pt===void 0&&(Pt=new Xi,Pt.layers.enable(nt),Pt.viewport=new mi,W[nt]=Pt),Pt.matrix.fromArray(at.transform.matrix),Pt.matrix.decompose(Pt.position,Pt.quaternion,Pt.scale),Pt.projectionMatrix.fromArray(at.projectionMatrix),Pt.projectionMatrixInverse.copy(Pt.projectionMatrix).invert(),Pt.viewport.set(Rt.x,Rt.y,Rt.width,Rt.height),nt===0&&(f.matrix.copy(Pt.matrix),f.matrix.decompose(f.position,f.quaternion,f.scale)),B===!0&&f.cameras.push(Pt)}let it=i.enabledFeatures;if(it&&it.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&w){h=o.getBinding();let nt=h.getDepthInformation(xe[0]);nt&&nt.isValid&&nt.texture&&x.init(nt,i.renderState)}if(it&&it.includes("camera-access")&&w){t.state.unbindTexture(),h=o.getBinding();for(let nt=0;nt<xe.length;nt++){let at=xe[nt].camera;if(at){let Rt=m[at];Rt||(Rt=new uf,m[at]=Rt);let Pt=h.getCameraImage(at);Rt.sourceTexture=Pt}}}}for(let xe=0;xe<S.length;xe++){let B=T[xe],it=S[xe];B!==null&&it!==void 0&&it.update(B,he,c||r)}Ce&&Ce(oe,he),he.detectedPlanes&&o.dispatchEvent({type:"planesdetected",data:he}),v=null}let Ee=new v5;Ee.setAnimationLoop(Be),this.setAnimationLoop=function(oe){Ce=oe},this.dispose=function(){}}},xP=new Ao,T5=new Lo;T5.set(-1,0,0,0,1,0,0,0,1);function bP(n,t){function e(x,m){x.matrixAutoUpdate===!0&&x.updateMatrix(),m.value.copy(x.matrix)}function o(x,m){m.color.getRGB(x.fogColor.value,Ux(n)),m.isFog?(x.fogNear.value=m.near,x.fogFar.value=m.far):m.isFogExp2&&(x.fogDensity.value=m.density)}function i(x,m,p,_,b){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?s(x,m):m.isMeshLambertMaterial?(s(x,m),m.envMap&&(x.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(s(x,m),h(x,m)):m.isMeshPhongMaterial?(s(x,m),u(x,m),m.envMap&&(x.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(s(x,m),d(x,m),m.isMeshPhysicalMaterial&&g(x,m,b)):m.isMeshMatcapMaterial?(s(x,m),v(x,m)):m.isMeshDepthMaterial?s(x,m):m.isMeshDistanceMaterial?(s(x,m),w(x,m)):m.isMeshNormalMaterial?s(x,m):m.isLineBasicMaterial?(r(x,m),m.isLineDashedMaterial&&a(x,m)):m.isPointsMaterial?l(x,m,p,_):m.isSpriteMaterial?c(x,m):m.isShadowMaterial?(x.color.value.copy(m.color),x.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(x,m){x.opacity.value=m.opacity,m.color&&x.diffuse.value.copy(m.color),m.emissive&&x.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(x.map.value=m.map,e(m.map,x.mapTransform)),m.alphaMap&&(x.alphaMap.value=m.alphaMap,e(m.alphaMap,x.alphaMapTransform)),m.bumpMap&&(x.bumpMap.value=m.bumpMap,e(m.bumpMap,x.bumpMapTransform),x.bumpScale.value=m.bumpScale,m.side===Xs&&(x.bumpScale.value*=-1)),m.normalMap&&(x.normalMap.value=m.normalMap,e(m.normalMap,x.normalMapTransform),x.normalScale.value.copy(m.normalScale),m.side===Xs&&x.normalScale.value.negate()),m.displacementMap&&(x.displacementMap.value=m.displacementMap,e(m.displacementMap,x.displacementMapTransform),x.displacementScale.value=m.displacementScale,x.displacementBias.value=m.displacementBias),m.emissiveMap&&(x.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,x.emissiveMapTransform)),m.specularMap&&(x.specularMap.value=m.specularMap,e(m.specularMap,x.specularMapTransform)),m.alphaTest>0&&(x.alphaTest.value=m.alphaTest);let p=t.get(m),_=p.envMap,b=p.envMapRotation;_&&(x.envMap.value=_,x.envMapRotation.value.setFromMatrix4(xP.makeRotationFromEuler(b)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&x.envMapRotation.value.premultiply(T5),x.reflectivity.value=m.reflectivity,x.ior.value=m.ior,x.refractionRatio.value=m.refractionRatio),m.lightMap&&(x.lightMap.value=m.lightMap,x.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,x.lightMapTransform)),m.aoMap&&(x.aoMap.value=m.aoMap,x.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,x.aoMapTransform))}function r(x,m){x.diffuse.value.copy(m.color),x.opacity.value=m.opacity,m.map&&(x.map.value=m.map,e(m.map,x.mapTransform))}function a(x,m){x.dashSize.value=m.dashSize,x.totalSize.value=m.dashSize+m.gapSize,x.scale.value=m.scale}function l(x,m,p,_){x.diffuse.value.copy(m.color),x.opacity.value=m.opacity,x.size.value=m.size*p,x.scale.value=_*.5,m.map&&(x.map.value=m.map,e(m.map,x.uvTransform)),m.alphaMap&&(x.alphaMap.value=m.alphaMap,e(m.alphaMap,x.alphaMapTransform)),m.alphaTest>0&&(x.alphaTest.value=m.alphaTest)}function c(x,m){x.diffuse.value.copy(m.color),x.opacity.value=m.opacity,x.rotation.value=m.rotation,m.map&&(x.map.value=m.map,e(m.map,x.mapTransform)),m.alphaMap&&(x.alphaMap.value=m.alphaMap,e(m.alphaMap,x.alphaMapTransform)),m.alphaTest>0&&(x.alphaTest.value=m.alphaTest)}function u(x,m){x.specular.value.copy(m.specular),x.shininess.value=Math.max(m.shininess,1e-4)}function h(x,m){m.gradientMap&&(x.gradientMap.value=m.gradientMap)}function d(x,m){x.metalness.value=m.metalness,m.metalnessMap&&(x.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,x.metalnessMapTransform)),x.roughness.value=m.roughness,m.roughnessMap&&(x.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,x.roughnessMapTransform)),m.envMap&&(x.envMapIntensity.value=m.envMapIntensity)}function g(x,m,p){x.ior.value=m.ior,m.sheen>0&&(x.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),x.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(x.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,x.sheenColorMapTransform)),m.sheenRoughnessMap&&(x.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,x.sheenRoughnessMapTransform))),m.clearcoat>0&&(x.clearcoat.value=m.clearcoat,x.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(x.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,x.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(x.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Xs&&x.clearcoatNormalScale.value.negate())),m.dispersion>0&&(x.dispersion.value=m.dispersion),m.retroreflectivity>0&&(x.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(x.iridescence.value=m.iridescence,x.iridescenceIOR.value=m.iridescenceIOR,x.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(x.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,x.iridescenceMapTransform)),m.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),m.transmission>0&&(x.transmission.value=m.transmission,x.transmissionSamplerMap.value=p.texture,x.transmissionSamplerSize.value.set(p.width,p.height),m.transmissionMap&&(x.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,x.transmissionMapTransform)),x.thickness.value=m.thickness,m.thicknessMap&&(x.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=m.attenuationDistance,x.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(x.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(x.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=m.specularIntensity,x.specularColor.value.copy(m.specularColor),m.specularColorMap&&(x.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,x.specularColorMapTransform)),m.specularIntensityMap&&(x.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,x.specularIntensityMapTransform))}function v(x,m){m.matcap&&(x.matcap.value=m.matcap)}function w(x,m){let p=t.get(m).light;x.referencePosition.value.setFromMatrixPosition(p.matrixWorld),x.nearDistance.value=p.shadow.camera.near,x.farDistance.value=p.shadow.camera.far}return{refreshFogUniforms:o,refreshMaterialUniforms:i}}function MP(n,t,e,o){let i={},s={},r=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,S){let T=S.program;o.uniformBlockBinding(b,T)}function c(b,S){let T=i[b.id];T===void 0&&(x(b),T=u(b),i[b.id]=T,b.addEventListener("dispose",p));let C=S.program;o.updateUBOMapping(b,C);let E=t.render.frame;s[b.id]!==E&&(d(b),s[b.id]=E)}function u(b){let S=h();b.__bindingPointIndex=S;let T=n.createBuffer(),C=b.__size,E=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,T),n.bufferData(n.UNIFORM_BUFFER,C,E),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,S,T),T}function h(){for(let b=0;b<a;b++)if(r.indexOf(b)===-1)return r.push(b),b;return io("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){let S=i[b.id],T=b.uniforms,C=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let E=0,k=T.length;E<k;E++){let R=T[E];if(Array.isArray(R))for(let N=0,W=R.length;N<W;N++)g(R[N],E,N,C);else g(R,E,0,C)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function g(b,S,T,C){if(w(b,S,T,C)===!0){let E=b.__offset,k=b.value;if(Array.isArray(k)){let R=0;for(let N=0;N<k.length;N++){let W=k[N],f=m(W);v(W,b.__data,R),typeof W!="number"&&typeof W!="boolean"&&!W.isMatrix3&&!ArrayBuffer.isView(W)&&(R+=f.storage/Float32Array.BYTES_PER_ELEMENT)}}else v(k,b.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,E,b.__data)}}function v(b,S,T){typeof b=="number"||typeof b=="boolean"?S[0]=b:b.isMatrix3?(S[0]=b.elements[0],S[1]=b.elements[1],S[2]=b.elements[2],S[3]=0,S[4]=b.elements[3],S[5]=b.elements[4],S[6]=b.elements[5],S[7]=0,S[8]=b.elements[6],S[9]=b.elements[7],S[10]=b.elements[8],S[11]=0):ArrayBuffer.isView(b)?S.set(new b.constructor(b.buffer,b.byteOffset,S.length)):b.toArray(S,T)}function w(b,S,T,C){let E=b.value,k=S+"_"+T;if(C[k]===void 0)return typeof E=="number"||typeof E=="boolean"?C[k]=E:ArrayBuffer.isView(E)?C[k]=E.slice():C[k]=E.clone(),!0;{let R=C[k];if(typeof E=="number"||typeof E=="boolean"){if(R!==E)return C[k]=E,!0}else{if(ArrayBuffer.isView(E))return!0;if(R.equals(E)===!1)return R.copy(E),!0}}return!1}function x(b){let S=b.uniforms,T=0,C=16;for(let k=0,R=S.length;k<R;k++){let N=Array.isArray(S[k])?S[k]:[S[k]];for(let W=0,f=N.length;W<f;W++){let y=N[W],U=Array.isArray(y.value)?y.value:[y.value];for(let D=0,G=U.length;D<G;D++){let $=U[D],tt=m($),ut=T%C,At=ut%tt.boundary,Bt=ut+At;T+=At,Bt!==0&&C-Bt<tt.storage&&(T+=C-Bt),y.__data=new Float32Array(tt.storage/Float32Array.BYTES_PER_ELEMENT),y.__offset=T,T+=tt.storage}}}let E=T%C;return E>0&&(T+=C-E),b.__size=T,b.__cache={},this}function m(b){let S={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(S.boundary=4,S.storage=4):b.isVector2?(S.boundary=8,S.storage=8):b.isVector3||b.isColor?(S.boundary=16,S.storage=12):b.isVector4?(S.boundary=16,S.storage=16):b.isMatrix3?(S.boundary=48,S.storage=48):b.isMatrix4?(S.boundary=64,S.storage=64):b.isTexture?Dn("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(S.boundary=16,S.storage=b.byteLength):Dn("WebGLRenderer: Unsupported uniform value type.",b),S}function p(b){let S=b.target;S.removeEventListener("dispose",p);let T=r.indexOf(S.__bindingPointIndex);r.splice(T,1),n.deleteBuffer(i[S.id]),delete i[S.id],delete s[S.id]}function _(){for(let b in i)n.deleteBuffer(i[b]);r=[],i={},s={}}return{bind:l,update:c,dispose:_}}var SP=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),d0=null;function wP(){return d0===null&&(d0=new rr(SP,16,16,j0,aa),d0.name="DFG_LUT",d0.minFilter=Si,d0.magFilter=Si,d0.wrapS=sr,d0.wrapT=sr,d0.generateMipmaps=!1,d0.needsUpdate=!0),d0}var pm=class{constructor(t={}){let{canvas:e=kx(),context:o=null,depth:i=!0,stencil:s=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1,outputBufferType:g=cr}=t;this.isWebGLRenderer=!0;let v;if(o!==null){if(typeof WebGLRenderingContext!="undefined"&&o instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=o.getContextAttributes().alpha}else v=r;let w=g,x=new Set([Ep,Cp,Uf]),m=new Set([cr,Vr,Jc,jc,_p,Tp]),p=new Uint32Array(4),_=new Int32Array(4),b=new Wt,S=null,T=null,C=[],E=[],k=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ra,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,N=!1,W=null,f=null,y=null,U=null;this._outputColorSpace=Ki;let D=0,G=0,$=null,tt=-1,ut=null,At=new mi,Bt=new mi,be=null,Ce=new In(0),Be=0,Ee=e.width,oe=e.height,he=1,xe=null,B=null,it=new mi(0,0,Ee,oe),ct=new mi(0,0,Ee,oe),xt=!1,nt=new l0,at=!1,Rt=!1,Pt=new Ao,qt=new Wt,Gt=new mi,dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},de=!1;function ht(){return $===null?he:1}let F=o;function It(O,Ct){return e.getContext(O,Ct)}let wt,z,I,ft,Mt,Dt,Vt,Me,Z,Y,vt,Xt,kt,V,H,Q,Tt,K,Ht,Ut,Nt,te,Et;try{let O={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",yt,!1),e.addEventListener("webglcontextrestored",Yt,!1),e.addEventListener("webglcontextcreationerror",_t,!1),F===null){let Ct="webgl2";if(F=It(Ct,O),F===null)throw It(Ct)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}fe()}catch(O){throw e.removeEventListener("webglcontextlost",yt,!1),e.removeEventListener("webglcontextrestored",Yt,!1),e.removeEventListener("webglcontextcreationerror",_t,!1),io("WebGLRenderer: "+O.message),O}function fe(){wt=new I8(F),wt.init(),Nt=new _5(F,wt),z=new M8(F,wt,t,Nt),I=new mP(F,wt),z.reversedDepthBuffer&&d&&I.buffers.depth.setReversed(!0),f=F.createFramebuffer(),y=F.createFramebuffer(),U=F.createFramebuffer(),ft=new D8(F),Mt=new eP,Dt=new gP(F,wt,I,Mt,z,Nt,ft),Vt=new R8(R),Me=new U6(F),te=new x8(F,Me),Z=new L8(F,Me,ft,te),Y=new U8(F,Z,Me,te,ft),K=new B8(F,z,Dt),H=new S8(Mt),vt=new tP(R,Vt,wt,z,te,H),Xt=new bP(R,Mt),kt=new oP,V=new cP(wt),Tt=new v8(R,Vt,I,Y,v,l),Q=new pP(R,Y,z),Et=new MP(F,ft,z,I),Ht=new b8(F,wt,ft),Ut=new k8(F,wt,ft),ft.programs=vt.programs,R.capabilities=z,R.extensions=wt,R.properties=Mt,R.renderLists=kt,R.shadowMap=Q,R.state=I,R.info=ft}w!==cr&&(k=new F8(w,e.width,e.height,a,i,s));let ce=new rb(R,F);this.xr=ce,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let O=wt.get("WEBGL_lose_context");O&&O.loseContext()},this.forceContextRestore=function(){let O=wt.get("WEBGL_lose_context");O&&O.restoreContext()},this.getPixelRatio=function(){return he},this.setPixelRatio=function(O){O!==void 0&&(he=O,this.setSize(Ee,oe,!1))},this.getSize=function(O){return O.set(Ee,oe)},this.setSize=function(O,Ct,jt=!0){if(ce.isPresenting){Dn("WebGLRenderer: Can't change size while VR device is presenting.");return}Ee=O,oe=Ct,e.width=Math.floor(O*he),e.height=Math.floor(Ct*he),jt===!0&&(e.style.width=O+"px",e.style.height=Ct+"px"),k!==null&&k.setSize(e.width,e.height),this.setViewport(0,0,O,Ct)},this.getDrawingBufferSize=function(O){return O.set(Ee*he,oe*he).floor()},this.setDrawingBufferSize=function(O,Ct,jt){Ee=O,oe=Ct,he=jt,e.width=Math.floor(O*jt),e.height=Math.floor(Ct*jt),this.setViewport(0,0,O,Ct)},this.setEffects=function(O){if(w===cr){io("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(O){for(let Ct=0;Ct<O.length;Ct++)if(O[Ct].isOutputPass===!0){Dn("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}k.setEffects(O||[])},this.getCurrentViewport=function(O){return O.copy(At)},this.getViewport=function(O){return O.copy(it)},this.setViewport=function(O,Ct,jt,ee){O.isVector4?it.set(O.x,O.y,O.z,O.w):it.set(O,Ct,jt,ee),I.viewport(At.copy(it).multiplyScalar(he).round())},this.getScissor=function(O){return O.copy(ct)},this.setScissor=function(O,Ct,jt,ee){O.isVector4?ct.set(O.x,O.y,O.z,O.w):ct.set(O,Ct,jt,ee),I.scissor(Bt.copy(ct).multiplyScalar(he).round())},this.getScissorTest=function(){return xt},this.setScissorTest=function(O){I.setScissorTest(xt=O)},this.setOpaqueSort=function(O){xe=O},this.setTransparentSort=function(O){B=O},this.getClearColor=function(O){return O.copy(Tt.getClearColor())},this.setClearColor=function(){Tt.setClearColor(...arguments)},this.getClearAlpha=function(){return Tt.getClearAlpha()},this.setClearAlpha=function(){Tt.setClearAlpha(...arguments)},this.clear=function(O=!0,Ct=!0,jt=!0){let ee=0;if(O){let ae=!1;if($!==null){let $e=$.texture.format;ae=x.has($e)}if(ae){let $e=$.texture.type,Je=m.has($e),Ve=Tt.getClearColor(),je=Tt.getClearAlpha(),an=Ve.r,Vn=Ve.g,Wn=Ve.b;Je?(p[0]=an,p[1]=Vn,p[2]=Wn,p[3]=je,F.clearBufferuiv(F.COLOR,0,p)):(_[0]=an,_[1]=Vn,_[2]=Wn,_[3]=je,F.clearBufferiv(F.COLOR,0,_))}else ee|=F.COLOR_BUFFER_BIT}Ct&&(ee|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),jt&&(ee|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ee!==0&&F.clear(ee)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(O){O.setRenderer(this),W=O},this.dispose=function(){e.removeEventListener("webglcontextlost",yt,!1),e.removeEventListener("webglcontextrestored",Yt,!1),e.removeEventListener("webglcontextcreationerror",_t,!1),Tt.dispose(),kt.dispose(),V.dispose(),Mt.dispose(),Vt.dispose(),Y.dispose(),te.dispose(),Et.dispose(),vt.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",ue),ce.removeEventListener("sessionend",we),L.stop()};function yt(O){O.preventDefault(),nf("WebGLRenderer: Context Lost."),N=!0}function Yt(){nf("WebGLRenderer: Context Restored."),N=!1;let O=ft.autoReset,Ct=Q.enabled,jt=Q.autoUpdate,ee=Q.needsUpdate,ae=Q.type;fe(),ft.autoReset=O,Q.enabled=Ct,Q.autoUpdate=jt,Q.needsUpdate=ee,Q.type=ae}function _t(O){io("WebGLRenderer: A WebGL context could not be created. Reason: ",O.statusMessage)}function rt(O){let Ct=O.target;Ct.removeEventListener("dispose",rt),zt(Ct)}function zt(O){re(O),Mt.remove(O)}function re(O){let Ct=Mt.get(O).programs;Ct!==void 0&&(Ct.forEach(function(jt){vt.releaseProgram(jt)}),O.isShaderMaterial&&vt.releaseShaderCache(O))}this.renderBufferDirect=function(O,Ct,jt,ee,ae,$e){Ct===null&&(Ct=dt);let Je=ae.isMesh&&ae.matrixWorld.determinantAffine()<0,Ve=Ye(O,Ct,jt,ee,ae);I.setMaterial(ee,Je);let je=jt.index,an=1;if(ee.wireframe===!0){if(je=Z.getWireframeAttribute(jt),je===void 0)return;an=2}let Vn=jt.drawRange,Wn=jt.attributes.position,Mn=Vn.start*an,to=(Vn.start+Vn.count)*an;$e!==null&&(Mn=Math.max(Mn,$e.start*an),to=Math.min(to,($e.start+$e.count)*an)),je!==null?(Mn=Math.max(Mn,0),to=Math.min(to,je.count)):Wn!=null&&(Mn=Math.max(Mn,0),to=Math.min(to,Wn.count));let Ro=to-Mn;if(Ro<0||Ro===1/0)return;te.setup(ae,ee,Ve,jt,je);let yo,kn=Ht;if(je!==null&&(yo=Me.get(je),kn=Ut,kn.setIndex(yo)),ae.isMesh)ee.wireframe===!0?(I.setLineWidth(ee.wireframeLinewidth*ht()),kn.setMode(F.LINES)):kn.setMode(F.TRIANGLES);else if(ae.isLine){let vo=ee.linewidth;vo===void 0&&(vo=1),I.setLineWidth(vo*ht()),ae.isLineSegments?kn.setMode(F.LINES):ae.isLineLoop?kn.setMode(F.LINE_LOOP):kn.setMode(F.LINE_STRIP)}else ae.isPoints?kn.setMode(F.POINTS):ae.isSprite&&kn.setMode(F.TRIANGLES);if(ae.isBatchedMesh)if(wt.get("WEBGL_multi_draw"))kn.renderMultiDraw(ae._multiDrawStarts,ae._multiDrawCounts,ae._multiDrawCount);else{let vo=ae._multiDrawStarts,En=ae._multiDrawCounts,ti=ae._multiDrawCount,so=je?Me.get(je).bytesPerElement:1,$o=Mt.get(ee).currentProgram.getUniforms();for(let On=0;On<ti;On++)$o.setValue(F,"_gl_DrawID",On),kn.render(vo[On]/so,En[On])}else if(ae.isInstancedMesh)kn.renderInstances(Mn,Ro,ae.count);else if(jt.isInstancedBufferGeometry){let vo=jt._maxInstanceCount!==void 0?jt._maxInstanceCount:1/0,En=Math.min(jt.instanceCount,vo);kn.renderInstances(Mn,Ro,En)}else kn.render(Mn,Ro)};function se(O,Ct,jt,ee){W!==null&&O.isNodeMaterial&&W.setObject(ee,O),at===!0&&H.setState(O,jt,!1),O.transparent===!0&&O.side===zr&&O.forceSinglePass===!1?(O.side=Xs,O.needsUpdate=!0,_e(O,Ct,ee),O.side=Y0,O.needsUpdate=!0,_e(O,Ct,ee),O.side=zr):_e(O,Ct,ee)}this.compile=function(O,Ct,jt=null){jt===null&&(jt=O),W!==null&&W.renderStart(O,Ct,jt),T=V.get(jt),T.init(Ct),E.push(T),jt.traverseVisible(function(ae){ae.isLight&&ae.layers.test(Ct.layers)&&(T.pushLight(ae),ae.castShadow&&T.pushShadow(ae))}),O!==jt&&O.traverseVisible(function(ae){ae.isLight&&ae.layers.test(Ct.layers)&&(T.pushLight(ae),ae.castShadow&&T.pushShadow(ae))}),T.setupLights(),W!==null&&W.updateLights(T.state.lightsArray),Rt=this.localClippingEnabled,at=H.init(this.clippingPlanes,Rt),at===!0&&H.setGlobalState(this.clippingPlanes,Ct),W!==null&&Q.render(T.state.shadowsArray,jt,Ct);let ee=new Set;return O.traverse(function(ae){if(!(ae.isMesh||ae.isPoints||ae.isLine||ae.isSprite))return;let $e=ae.material;if($e)if(Array.isArray($e))for(let Je=0;Je<$e.length;Je++){let Ve=$e[Je];se(Ve,jt,Ct,ae),ee.add(Ve)}else se($e,jt,Ct,ae),ee.add($e)}),T=E.pop(),W!==null&&W.renderEnd(),ee},this.compileAsync=function(O,Ct,jt=null){let ee=this.compile(O,Ct,jt);return new Promise(ae=>{function $e(){if(ee.forEach(function(Je){let je=Mt.get(Je).currentProgram;(je===void 0||je.isReady())&&ee.delete(Je)}),ee.size===0){ae(O);return}setTimeout($e,10)}wt.get("KHR_parallel_shader_compile")!==null?$e():setTimeout($e,10)})};let st=null;function Lt(O){st&&st(O)}function ue(){L.stop()}function we(){L.start()}let L=new v5;L.setAnimationLoop(Lt),typeof self!="undefined"&&L.setContext(self),this.setAnimationLoop=function(O){st=O,ce.setAnimationLoop(O),O===null?L.stop():L.start()},ce.addEventListener("sessionstart",ue),ce.addEventListener("sessionend",we),this.render=function(O,Ct){if(Ct!==void 0&&Ct.isCamera!==!0){io("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;W!==null&&W.renderStart(O,Ct);let jt=ce.enabled===!0&&ce.isPresenting===!0,ee=k!==null&&($===null||jt)&&k.begin(R,$);if(O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),Ct.parent===null&&Ct.matrixWorldAutoUpdate===!0&&Ct.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(k===null||k.isCompositing()===!1)&&(ce.cameraAutoUpdate===!0&&ce.updateCamera(Ct),Ct=ce.getCamera()),O.isScene===!0&&O.onBeforeRender(R,O,Ct,$),T=V.get(O,E.length),T.init(Ct),T.state.textureUnits=Dt.getTextureUnits(),E.push(T),Pt.multiplyMatrices(Ct.projectionMatrix,Ct.matrixWorldInverse),nt.setFromProjectionMatrix(Pt,wr,Ct.reversedDepth),Rt=this.localClippingEnabled,at=H.init(this.clippingPlanes,Rt),S=kt.get(O,C.length),S.init(),C.push(S),ce.enabled===!0&&ce.isPresenting===!0){let Je=R.xr.getDepthSensingMesh();Je!==null&&lt(Je,Ct,-1/0,R.sortObjects)}lt(O,Ct,0,R.sortObjects),S.finish(),W!==null&&W.updateLights(T.state.lightsArray),R.sortObjects===!0&&S.sort(xe,B),de=ce.enabled===!1||ce.isPresenting===!1||ce.hasDepthSensing()===!1,de&&Tt.addToRenderList(S,O),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),at===!0&&H.beginShadows();let ae=T.state.shadowsArray;if(Q.render(ae,O,Ct),at===!0&&H.endShadows(),(ee&&k.hasRenderPass())===!1){let Je=S.opaque,Ve=S.transmissive;if(T.setupLights(),Ct.isArrayCamera){let je=Ct.cameras;if(Ve.length>0)for(let an=0,Vn=je.length;an<Vn;an++){let Wn=je[an];mt(Je,Ve,O,Wn)}de&&Tt.render(O);for(let an=0,Vn=je.length;an<Vn;an++){let Wn=je[an];gt(S,O,Wn,Wn.viewport)}}else Ve.length>0&&mt(Je,Ve,O,Ct),de&&Tt.render(O),gt(S,O,Ct)}$!==null&&G===0&&(Dt.updateMultisampleRenderTarget($),Dt.updateRenderTargetMipmap($)),ee&&k.end(R),O.isScene===!0&&O.onAfterRender(R,O,Ct),te.resetDefaultState(),tt=-1,ut=null,E.pop(),E.length>0?(T=E[E.length-1],Dt.setTextureUnits(T.state.textureUnits),at===!0&&H.setGlobalState(R.clippingPlanes,T.state.camera)):T=null,C.pop(),C.length>0?S=C[C.length-1]:S=null,W!==null&&W.renderEnd()};function lt(O,Ct,jt,ee){if(O.visible===!1)return;if(O.layers.test(Ct.layers)){if(O.isGroup)jt=O.renderOrder;else if(O.isLOD)O.autoUpdate===!0&&O.update(Ct);else if(O.isLightProbeGrid)T.pushLightProbeGrid(O);else if(O.isLight)T.pushLight(O),O.castShadow&&T.pushShadow(O);else if(O.isSprite){if(!O.frustumCulled||O.intersectsFrustum(nt)){ee&&Gt.setFromMatrixPosition(O.matrixWorld).applyMatrix4(Pt);let Je=Y.update(O),Ve=O.material;Ve.visible&&S.push(O,Je,Ve,jt,Gt.z,null,Ct)}}else if((O.isMesh||O.isLine||O.isPoints)&&(!O.frustumCulled||O.intersectsFrustum(nt))){let Je=Y.update(O),Ve=O.material;if(ee&&(O.boundingSphere!==void 0?(O.boundingSphere===null&&O.computeBoundingSphere(),Gt.copy(O.boundingSphere.center)):(Je.boundingSphere===null&&Je.computeBoundingSphere(),Gt.copy(Je.boundingSphere.center)),Gt.applyMatrix4(O.matrixWorld).applyMatrix4(Pt)),Array.isArray(Ve)){let je=Je.groups;for(let an=0,Vn=je.length;an<Vn;an++){let Wn=je[an],Mn=Ve[Wn.materialIndex];Mn&&Mn.visible&&S.push(O,Je,Mn,jt,Gt.z,Wn,Ct)}}else Ve.visible&&S.push(O,Je,Ve,jt,Gt.z,null,Ct)}}let $e=O.children;for(let Je=0,Ve=$e.length;Je<Ve;Je++)lt($e[Je],Ct,jt,ee)}function gt(O,Ct,jt,ee){let{opaque:ae,transmissive:$e,transparent:Je}=O;T.setupLightsView(jt),at===!0&&H.setGlobalState(R.clippingPlanes,jt),ee&&I.viewport(At.copy(ee)),ae.length>0&&$t(ae,Ct,jt),$e.length>0&&$t($e,Ct,jt),Je.length>0&&$t(Je,Ct,jt),I.buffers.depth.setTest(!0),I.buffers.depth.setMask(!0),I.buffers.color.setMask(!0),I.setPolygonOffset(!1)}function mt(O,Ct,jt,ee){if((jt.isScene===!0?jt.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[ee.id]===void 0){let Mn=wt.has("EXT_color_buffer_half_float")||wt.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[ee.id]=new ks(1,1,{generateMipmaps:!0,type:Mn?aa:cr,minFilter:Ga,samples:Math.max(4,z.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:jo.workingColorSpace})}let $e=T.state.transmissionRenderTarget[ee.id],Je=ee.viewport||At;$e.setSize(Je.z*R.transmissionResolutionScale,Je.w*R.transmissionResolutionScale);let Ve=R.getRenderTarget(),je=R.getActiveCubeFace(),an=R.getActiveMipmapLevel();R.setRenderTarget($e),R.getClearColor(Ce),Be=R.getClearAlpha(),Be<1&&R.setClearColor(16777215,.5),R.clear(),de&&Tt.render(jt);let Vn=R.toneMapping;R.toneMapping=ra;let Wn=ee.viewport;if(ee.viewport!==void 0&&(ee.viewport=void 0),T.setupLightsView(ee),at===!0&&H.setGlobalState(R.clippingPlanes,ee),$t(O,jt,ee),Dt.updateMultisampleRenderTarget($e),Dt.updateRenderTargetMipmap($e),wt.has("WEBGL_multisampled_render_to_texture")===!1){let Mn=!1;for(let to=0,Ro=Ct.length;to<Ro;to++){let yo=Ct[to],{object:kn,geometry:vo,material:En,group:ti}=yo;if(En.side===zr&&kn.layers.test(ee.layers)){let so=En.side;En.side=Xs,En.needsUpdate=!0,Zt(kn,jt,ee,vo,En,ti),En.side=so,En.needsUpdate=!0,Mn=!0}}Mn===!0&&(Dt.updateMultisampleRenderTarget($e),Dt.updateRenderTargetMipmap($e))}R.setRenderTarget(Ve,je,an),R.setClearColor(Ce,Be),Wn!==void 0&&(ee.viewport=Wn),R.toneMapping=Vn}function $t(O,Ct,jt){let ee=Ct.isScene===!0?Ct.overrideMaterial:null;for(let ae=0,$e=O.length;ae<$e;ae++){let Je=O[ae],{object:Ve,geometry:je,group:an}=Je,Vn=Je.material;Vn.allowOverride===!0&&ee!==null&&(Vn=ee),Ve.layers.test(jt.layers)&&Zt(Ve,Ct,jt,je,Vn,an)}}function Zt(O,Ct,jt,ee,ae,$e){W!==null&&ae.isNodeMaterial&&W.setObject(O,ae),O.onBeforeRender(R,Ct,jt,ee,ae,$e),O.modelViewMatrix.multiplyMatrices(jt.matrixWorldInverse,O.matrixWorld),O.normalMatrix.getNormalMatrix(O.modelViewMatrix),ae.onBeforeRender(R,Ct,jt,ee,O,$e),ae.transparent===!0&&ae.side===zr&&ae.forceSinglePass===!1?(ae.side=Xs,ae.needsUpdate=!0,R.renderBufferDirect(jt,Ct,ee,ae,O,$e),ae.side=Y0,ae.needsUpdate=!0,R.renderBufferDirect(jt,Ct,ee,ae,O,$e),ae.side=zr):R.renderBufferDirect(jt,Ct,ee,ae,O,$e),O.onAfterRender(R,Ct,jt,ee,ae,$e)}function _e(O,Ct,jt){Ct.isScene!==!0&&(Ct=dt);let ee=Mt.get(O),ae=T.state.lights,$e=T.state.shadowsArray,Je=ae.state.version,Ve=vt.getParameters(O,ae.state,$e,Ct,jt,T.state.lightProbeGridArray),je=vt.getProgramCacheKey(Ve),an=ee.programs;ee.environment=O.isMeshStandardMaterial||O.isMeshLambertMaterial||O.isMeshPhongMaterial?Ct.environment:null,ee.fog=Ct.fog;let Vn=O.isMeshStandardMaterial||O.isMeshLambertMaterial&&!O.envMap||O.isMeshPhongMaterial&&!O.envMap;ee.envMap=Vt.get(O.envMap||ee.environment,Vn),ee.envMapRotation=ee.environment!==null&&O.envMap===null?Ct.environmentRotation:O.envMapRotation,an===void 0&&(O.addEventListener("dispose",rt),an=new Map,ee.programs=an);let Wn=an.get(je);if(Wn!==void 0){if(ee.currentProgram===Wn&&ee.lightsStateVersion===Je)return ye(O,Ve),Wn}else Ve.uniforms=vt.getUniforms(O),W!==null&&O.isNodeMaterial&&W.build(O,jt,Ve),O.onBeforeCompile(Ve,R),Wn=vt.acquireProgram(Ve,je),an.set(je,Wn),ee.uniforms=Ve.uniforms;let Mn=ee.uniforms;return(!O.isShaderMaterial&&!O.isRawShaderMaterial||O.clipping===!0)&&(Mn.clippingPlanes=H.uniform),ye(O,Ve),ee.needsLights=gn(O),ee.lightsStateVersion=Je,ee.needsLights&&(Mn.ambientLightColor.value=ae.state.ambient,Mn.lightProbe.value=ae.state.probe,Mn.sunLights.value=ae.state.sun,Mn.sunLightShadows.value=ae.state.sunShadow,Mn.directionalLights.value=ae.state.directional,Mn.directionalLightShadows.value=ae.state.directionalShadow,Mn.spotLights.value=ae.state.spot,Mn.spotLightShadows.value=ae.state.spotShadow,Mn.rectAreaLights.value=ae.state.rectArea,Mn.ltc_1.value=ae.state.rectAreaLTC1,Mn.ltc_2.value=ae.state.rectAreaLTC2,Mn.pointLights.value=ae.state.point,Mn.pointLightShadows.value=ae.state.pointShadow,Mn.hemisphereLights.value=ae.state.hemi,Mn.sunShadowMatrix.value=ae.state.sunShadowMatrix,Mn.sunShadowCascade.value=ae.state.sunShadowCascade,Mn.directionalShadowMatrix.value=ae.state.directionalShadowMatrix,Mn.spotLightMatrix.value=ae.state.spotLightMatrix,Mn.spotLightMap.value=ae.state.spotLightMap,Mn.pointShadowMatrix.value=ae.state.pointShadowMatrix),ee.lightProbeGrid=T.state.lightProbeGridArray.length>0,ee.currentProgram=Wn,ee.uniformsList=null,Wn}function Le(O){if(O.uniformsList===null){let Ct=O.currentProgram.getUniforms();O.uniformsList=qf.seqWithValue(Ct.seq,O.uniforms)}return O.uniformsList}function ye(O,Ct){let jt=Mt.get(O);jt.outputColorSpace=Ct.outputColorSpace,jt.batching=Ct.batching,jt.batchingColor=Ct.batchingColor,jt.instancing=Ct.instancing,jt.instancingColor=Ct.instancingColor,jt.instancingMorph=Ct.instancingMorph,jt.skinning=Ct.skinning,jt.morphTargets=Ct.morphTargets,jt.morphNormals=Ct.morphNormals,jt.morphColors=Ct.morphColors,jt.morphTargetsCount=Ct.morphTargetsCount,jt.numClippingPlanes=Ct.numClippingPlanes,jt.numIntersection=Ct.numClipIntersection,jt.vertexAlphas=Ct.vertexAlphas,jt.vertexTangents=Ct.vertexTangents,jt.toneMapping=Ct.toneMapping}function He(O,Ct){if(O.length===0)return null;if(O.length===1)return O[0].texture!==null?O[0]:null;b.setFromMatrixPosition(Ct.matrixWorld);for(let jt=0,ee=O.length;jt<ee;jt++){let ae=O[jt];if(ae.texture!==null&&ae.boundingBox.containsPoint(b))return ae}return null}function Ye(O,Ct,jt,ee,ae){Ct.isScene!==!0&&(Ct=dt),Dt.resetTextureUnits();let $e=Ct.fog,Je=ee.isMeshStandardMaterial||ee.isMeshLambertMaterial||ee.isMeshPhongMaterial?Ct.environment:null,Ve=$===null?R.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:jo.workingColorSpace,je=ee.isMeshStandardMaterial||ee.isMeshLambertMaterial&&!ee.envMap||ee.isMeshPhongMaterial&&!ee.envMap,an=Vt.get(ee.envMap||Je,je),Vn=ee.vertexColors===!0&&!!jt.attributes.color&&jt.attributes.color.itemSize===4,Wn=!!jt.attributes.tangent&&(!!ee.normalMap||ee.anisotropy>0),Mn=!!jt.morphAttributes.position,to=!!jt.morphAttributes.normal,Ro=!!jt.morphAttributes.color,yo=ra;ee.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(yo=R.toneMapping);let kn=jt.morphAttributes.position||jt.morphAttributes.normal||jt.morphAttributes.color,vo=kn!==void 0?kn.length:0,En=Mt.get(ee),ti=T.state.lights;if(at===!0&&(Rt===!0||O!==ut)){let lo=O===ut&&ee.id===tt;H.setState(ee,O,lo)}let so=!1;ee.version===En.__version?(En.needsLights&&En.lightsStateVersion!==ti.state.version||En.outputColorSpace!==Ve||ae.isBatchedMesh&&En.batching===!1||!ae.isBatchedMesh&&En.batching===!0||ae.isBatchedMesh&&En.batchingColor===!0&&ae._colorsTexture===null||ae.isBatchedMesh&&En.batchingColor===!1&&ae._colorsTexture!==null||ae.isInstancedMesh&&En.instancing===!1||!ae.isInstancedMesh&&En.instancing===!0||ae.isSkinnedMesh&&En.skinning===!1||!ae.isSkinnedMesh&&En.skinning===!0||ae.isInstancedMesh&&En.instancingColor===!0&&ae.instanceColor===null||ae.isInstancedMesh&&En.instancingColor===!1&&ae.instanceColor!==null||ae.isInstancedMesh&&En.instancingMorph===!0&&ae.morphTexture===null||ae.isInstancedMesh&&En.instancingMorph===!1&&ae.morphTexture!==null||En.envMap!==an||ee.fog===!0&&En.fog!==$e||En.numClippingPlanes!==void 0&&(En.numClippingPlanes!==H.numPlanes||En.numIntersection!==H.numIntersection)||En.vertexAlphas!==Vn||En.vertexTangents!==Wn||En.morphTargets!==Mn||En.morphNormals!==to||En.morphColors!==Ro||En.toneMapping!==yo||En.morphTargetsCount!==vo||!!En.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(so=!0):(so=!0,En.__version=ee.version);let $o=En.currentProgram;so===!0&&($o=_e(ee,Ct,ae),W&&ee.isNodeMaterial&&W.onUpdateProgram(ee,$o,En));let On=!1,Yo=!1,Zo=!1,Io=$o.getUniforms(),Vo=En.uniforms;if(I.useProgram($o.program)&&(On=!0,Yo=!0,Zo=!0),ee.id!==tt&&(tt=ee.id,Yo=!0),En.needsLights){let lo=He(T.state.lightProbeGridArray,ae);En.lightProbeGrid!==lo&&(En.lightProbeGrid=lo,Yo=!0)}if(On||ut!==O){I.buffers.depth.getReversed()&&O.reversedDepth!==!0&&(O._reversedDepth=!0,O.updateProjectionMatrix()),Io.setValue(F,"projectionMatrix",O.projectionMatrix),Io.setValue(F,"viewMatrix",O.matrixWorldInverse);let Ui=Io.map.cameraPosition;Ui!==void 0&&Ui.setValue(F,qt.setFromMatrixPosition(O.matrixWorld)),z.logarithmicDepthBuffer&&Io.setValue(F,"logDepthBufFC",2/(Math.log(O.far+1)/Math.LN2)),(ee.isMeshPhongMaterial||ee.isMeshToonMaterial||ee.isMeshLambertMaterial||ee.isMeshBasicMaterial||ee.isMeshStandardMaterial||ee.isShaderMaterial)&&Io.setValue(F,"isOrthographic",O.isOrthographicCamera===!0),ut!==O&&(ut=O,Yo=!0,Zo=!0)}if(En.needsLights&&(ti.state.sunShadowMap.length>0&&Io.setValue(F,"sunShadowMap",ti.state.sunShadowMap,Dt),ti.state.directionalShadowMap.length>0&&Io.setValue(F,"directionalShadowMap",ti.state.directionalShadowMap,Dt),ti.state.spotShadowMap.length>0&&Io.setValue(F,"spotShadowMap",ti.state.spotShadowMap,Dt),ti.state.pointShadowMap.length>0&&Io.setValue(F,"pointShadowMap",ti.state.pointShadowMap,Dt)),ae.isSkinnedMesh){Io.setOptional(F,ae,"bindMatrix"),Io.setOptional(F,ae,"bindMatrixInverse");let lo=ae.skeleton;lo&&(lo.boneTexture===null&&lo.computeBoneTexture(),Io.setValue(F,"boneTexture",lo.boneTexture,Dt))}ae.isBatchedMesh&&(Io.setOptional(F,ae,"batchingTexture"),Io.setValue(F,"batchingTexture",ae._matricesTexture,Dt),Io.setOptional(F,ae,"batchingIdTexture"),Io.setValue(F,"batchingIdTexture",ae._indirectTexture,Dt),Io.setOptional(F,ae,"batchingColorTexture"),ae._colorsTexture!==null&&Io.setValue(F,"batchingColorTexture",ae._colorsTexture,Dt));let ui=jt.morphAttributes;if((ui.position!==void 0||ui.normal!==void 0||ui.color!==void 0)&&K.update(ae,jt,$o),(Yo||En.receiveShadow!==ae.receiveShadow)&&(En.receiveShadow=ae.receiveShadow,Io.setValue(F,"receiveShadow",ae.receiveShadow)),(ee.isMeshStandardMaterial||ee.isMeshLambertMaterial||ee.isMeshPhongMaterial)&&ee.envMap===null&&Ct.environment!==null&&(Vo.envMapIntensity.value=Ct.environmentIntensity),Vo.dfgLUT!==void 0&&(Vo.dfgLUT.value=wP()),Yo){if(Io.setValue(F,"toneMappingExposure",R.toneMappingExposure),En.needsLights&&en(Vo,Zo),$e&&ee.fog===!0&&Xt.refreshFogUniforms(Vo,$e),Xt.refreshMaterialUniforms(Vo,ee,he,oe,T.state.transmissionRenderTarget[O.id]),En.needsLights&&En.lightProbeGrid){let lo=En.lightProbeGrid;Vo.probesSH.value=lo.texture,Vo.probesMin.value.copy(lo.boundingBox.min),Vo.probesMax.value.copy(lo.boundingBox.max),Vo.probesResolution.value.copy(lo.resolution)}qf.upload(F,Le(En),Vo,Dt)}if(ee.isShaderMaterial&&ee.uniformsNeedUpdate===!0&&(qf.upload(F,Le(En),Vo,Dt),ee.uniformsNeedUpdate=!1),ee.isSpriteMaterial&&Io.setValue(F,"center",ae.center),Io.setValue(F,"modelViewMatrix",ae.modelViewMatrix),Io.setValue(F,"normalMatrix",ae.normalMatrix),Io.setValue(F,"modelMatrix",ae.matrixWorld),ee.uniformsGroups!==void 0){let lo=ee.uniformsGroups;for(let Ui=0,bi=lo.length;Ui<bi;Ui++){let Mi=lo[Ui];Et.update(Mi,$o),Et.bind(Mi,$o)}}return $o}function en(O,Ct){O.ambientLightColor.needsUpdate=Ct,O.lightProbe.needsUpdate=Ct,O.sunLights.needsUpdate=Ct,O.sunLightShadows.needsUpdate=Ct,O.directionalLights.needsUpdate=Ct,O.directionalLightShadows.needsUpdate=Ct,O.pointLights.needsUpdate=Ct,O.pointLightShadows.needsUpdate=Ct,O.spotLights.needsUpdate=Ct,O.spotLightShadows.needsUpdate=Ct,O.rectAreaLights.needsUpdate=Ct,O.hemisphereLights.needsUpdate=Ct}function gn(O){return O.isMeshLambertMaterial||O.isMeshToonMaterial||O.isMeshPhongMaterial||O.isMeshStandardMaterial||O.isShadowMaterial||O.isShaderMaterial&&O.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return $},this.setRenderTargetTextures=function(O,Ct,jt){let ee=Mt.get(O);ee.__autoAllocateDepthBuffer=O.resolveDepthBuffer===!1,ee.__autoAllocateDepthBuffer===!1&&(ee.__useRenderToTexture=!1),Mt.get(O.texture).__webglTexture=Ct,Mt.get(O.depthTexture).__webglTexture=ee.__autoAllocateDepthBuffer?void 0:jt,ee.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(O,Ct){let jt=Mt.get(O);jt.__webglFramebuffer=Ct,jt.__useDefaultFramebuffer=Ct===void 0},this.setRenderTarget=function(O,Ct=0,jt=0){$=O,D=Ct,G=jt;let ee=null,ae=!1,$e=!1;if(O){let Ve=Mt.get(O);if(Ve.__useDefaultFramebuffer!==void 0){I.bindFramebuffer(F.FRAMEBUFFER,Ve.__webglFramebuffer),At.copy(O.viewport),Bt.copy(O.scissor),be=O.scissorTest,I.viewport(At),I.scissor(Bt),I.setScissorTest(be),tt=-1;return}else if(Ve.__webglFramebuffer===void 0)Dt.setupRenderTarget(O);else if(Ve.__hasExternalTextures)Dt.rebindTextures(O,Mt.get(O.texture).__webglTexture,Mt.get(O.depthTexture).__webglTexture);else if(O.depthBuffer){let Vn=O.depthTexture;if(Ve.__boundDepthTexture!==Vn){if(Vn!==null&&Mt.has(Vn)&&(O.width!==Vn.image.width||O.height!==Vn.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Dt.setupDepthRenderbuffer(O)}}let je=O.texture;(je.isData3DTexture||je.isDataArrayTexture||je.isCompressedArrayTexture)&&($e=!0);let an=Mt.get(O).__webglFramebuffer;O.isWebGLCubeRenderTarget?(Array.isArray(an[Ct])?ee=an[Ct][jt]:ee=an[Ct],ae=!0):O.samples>0&&Dt.useMultisampledRTT(O)===!1?ee=Mt.get(O).__webglMultisampledFramebuffer:Array.isArray(an)?ee=an[jt]:ee=an,At.copy(O.viewport),Bt.copy(O.scissor),be=O.scissorTest}else At.copy(it).multiplyScalar(he).floor(),Bt.copy(ct).multiplyScalar(he).floor(),be=xt;if(jt!==0&&(ee=f),I.bindFramebuffer(F.FRAMEBUFFER,ee)&&I.drawBuffers(O,ee),I.viewport(At),I.scissor(Bt),I.setScissorTest(be),ae){let Ve=Mt.get(O.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,Ve.__webglTexture,jt)}else if($e){let Ve=Ct;for(let je=0;je<O.textures.length;je++){let an=Mt.get(O.textures[je]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+je,an.__webglTexture,jt,Ve)}}else if(O!==null&&jt!==0){let Ve=Mt.get(O.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Ve.__webglTexture,jt)}tt=-1};function Fe(O){let Ct=Mt.get(O);return(Ct.__readFormat!==O.format||Ct.__readType!==O.type)&&(Ct.__readFormat=O.format,Ct.__readType=O.type,Ct.__formatReadable=z.textureFormatReadable(O.format),Ct.__typeReadable=z.textureTypeReadable(O.type)),Ct}this.readRenderTargetPixels=function(O,Ct,jt,ee,ae,$e,Je,Ve=0){if(!(O&&O.isWebGLRenderTarget)){io("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let je=Mt.get(O).__webglFramebuffer;if(O.isWebGLCubeRenderTarget&&Je!==void 0&&(je=je[Je]),je){I.bindFramebuffer(F.FRAMEBUFFER,je);try{let an=O.textures[Ve],Vn=an.format,Wn=an.type;O.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Ve);let Mn=Fe(an);if(Mn.__formatReadable===!1){io("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Mn.__typeReadable===!1){io("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Ct>=0&&Ct<=O.width-ee&&jt>=0&&jt<=O.height-ae&&F.readPixels(Ct,jt,ee,ae,Nt.convert(Vn),Nt.convert(Wn),$e)}finally{let an=$!==null?Mt.get($).__webglFramebuffer:null;I.bindFramebuffer(F.FRAMEBUFFER,an)}}},this.readRenderTargetPixelsAsync=async function(O,Ct,jt,ee,ae,$e,Je,Ve=0){if(!(O&&O.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let je=Mt.get(O).__webglFramebuffer;if(O.isWebGLCubeRenderTarget&&Je!==void 0&&(je=je[Je]),je)if(Ct>=0&&Ct<=O.width-ee&&jt>=0&&jt<=O.height-ae){I.bindFramebuffer(F.FRAMEBUFFER,je);let an=O.textures[Ve],Vn=an.format,Wn=an.type;O.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Ve);let Mn=Fe(an);if(Mn.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Mn.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let to=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,to),F.bufferData(F.PIXEL_PACK_BUFFER,$e.byteLength,F.STREAM_READ),F.readPixels(Ct,jt,ee,ae,Nt.convert(Vn),Nt.convert(Wn),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);let Ro=$!==null?Mt.get($).__webglFramebuffer:null;I.bindFramebuffer(F.FRAMEBUFFER,Ro);let yo=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await OS(F,yo,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,to),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,$e),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(to),F.deleteSync(yo),$e}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(O,Ct=null,jt=0){let ee=Math.pow(2,-jt),ae=Math.floor(O.image.width*ee),$e=Math.floor(O.image.height*ee),Je=Ct!==null?Ct.x:0,Ve=Ct!==null?Ct.y:0;Dt.setTexture2D(O,0),F.copyTexSubImage2D(F.TEXTURE_2D,jt,0,0,Je,Ve,ae,$e),I.unbindTexture()},this.copyTextureToTexture=function(O,Ct,jt=null,ee=null,ae=0,$e=0){let Je,Ve,je,an,Vn,Wn,Mn,to,Ro,yo=O.isCompressedTexture?O.mipmaps[$e]:O.image;if(jt!==null)Je=jt.max.x-jt.min.x,Ve=jt.max.y-jt.min.y,je=jt.isBox3?jt.max.z-jt.min.z:1,an=jt.min.x,Vn=jt.min.y,Wn=jt.isBox3?jt.min.z:0;else{let Vo=Math.pow(2,-ae);Je=Math.floor(yo.width*Vo),Ve=Math.floor(yo.height*Vo),O.isDataArrayTexture?je=yo.depth:O.isData3DTexture?je=Math.floor(yo.depth*Vo):je=1,an=0,Vn=0,Wn=0}ee!==null?(Mn=ee.x,to=ee.y,Ro=ee.z):(Mn=0,to=0,Ro=0);let kn=Nt.convert(Ct.format),vo=Nt.convert(Ct.type),En;Ct.isData3DTexture?(Dt.setTexture3D(Ct,0),En=F.TEXTURE_3D):Ct.isDataArrayTexture||Ct.isCompressedArrayTexture?(Dt.setTexture2DArray(Ct,0),En=F.TEXTURE_2D_ARRAY):(Dt.setTexture2D(Ct,0),En=F.TEXTURE_2D),I.activeTexture(F.TEXTURE0),I.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,Ct.flipY),I.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Ct.premultiplyAlpha),I.pixelStorei(F.UNPACK_ALIGNMENT,Ct.unpackAlignment);let ti=I.getParameter(F.UNPACK_ROW_LENGTH),so=I.getParameter(F.UNPACK_IMAGE_HEIGHT),$o=I.getParameter(F.UNPACK_SKIP_PIXELS),On=I.getParameter(F.UNPACK_SKIP_ROWS),Yo=I.getParameter(F.UNPACK_SKIP_IMAGES);I.pixelStorei(F.UNPACK_ROW_LENGTH,yo.width),I.pixelStorei(F.UNPACK_IMAGE_HEIGHT,yo.height),I.pixelStorei(F.UNPACK_SKIP_PIXELS,an),I.pixelStorei(F.UNPACK_SKIP_ROWS,Vn),I.pixelStorei(F.UNPACK_SKIP_IMAGES,Wn);let Zo=O.isDataArrayTexture||O.isData3DTexture,Io=Ct.isDataArrayTexture||Ct.isData3DTexture;if(O.isDepthTexture){let Vo=Mt.get(O),ui=Mt.get(Ct),lo=Mt.get(Vo.__renderTarget),Ui=Mt.get(ui.__renderTarget);I.bindFramebuffer(F.READ_FRAMEBUFFER,lo.__webglFramebuffer),I.bindFramebuffer(F.DRAW_FRAMEBUFFER,Ui.__webglFramebuffer);for(let bi=0;bi<je;bi++)Zo&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Mt.get(O).__webglTexture,ae,Wn+bi),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Mt.get(Ct).__webglTexture,$e,Ro+bi)),F.blitFramebuffer(an,Vn,Je,Ve,Mn,to,Je,Ve,F.DEPTH_BUFFER_BIT,F.NEAREST);I.bindFramebuffer(F.READ_FRAMEBUFFER,null),I.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(ae!==0||O.isRenderTargetTexture||Mt.has(O)){let Vo=Mt.get(O),ui=Mt.get(Ct);I.bindFramebuffer(F.READ_FRAMEBUFFER,y),I.bindFramebuffer(F.DRAW_FRAMEBUFFER,U);for(let lo=0;lo<je;lo++)Zo?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Vo.__webglTexture,ae,Wn+lo):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Vo.__webglTexture,ae),Io?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,ui.__webglTexture,$e,Ro+lo):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,ui.__webglTexture,$e),ae!==0?F.blitFramebuffer(an,Vn,Je,Ve,Mn,to,Je,Ve,F.COLOR_BUFFER_BIT,F.NEAREST):Io?F.copyTexSubImage3D(En,$e,Mn,to,Ro+lo,an,Vn,Je,Ve):F.copyTexSubImage2D(En,$e,Mn,to,an,Vn,Je,Ve);I.bindFramebuffer(F.READ_FRAMEBUFFER,null),I.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Io?O.isDataTexture||O.isData3DTexture?F.texSubImage3D(En,$e,Mn,to,Ro,Je,Ve,je,kn,vo,yo.data):Ct.isCompressedArrayTexture?F.compressedTexSubImage3D(En,$e,Mn,to,Ro,Je,Ve,je,kn,yo.data):F.texSubImage3D(En,$e,Mn,to,Ro,Je,Ve,je,kn,vo,yo):O.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,$e,Mn,to,Je,Ve,kn,vo,yo.data):O.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,$e,Mn,to,yo.width,yo.height,kn,yo.data):F.texSubImage2D(F.TEXTURE_2D,$e,Mn,to,Je,Ve,kn,vo,yo);I.pixelStorei(F.UNPACK_ROW_LENGTH,ti),I.pixelStorei(F.UNPACK_IMAGE_HEIGHT,so),I.pixelStorei(F.UNPACK_SKIP_PIXELS,$o),I.pixelStorei(F.UNPACK_SKIP_ROWS,On),I.pixelStorei(F.UNPACK_SKIP_IMAGES,Yo),$e===0&&Ct.generateMipmaps&&F.generateMipmap(En),I.unbindTexture()},this.initRenderTarget=function(O){Mt.get(O).__webglFramebuffer===void 0&&Dt.setupRenderTarget(O)},this.initTexture=function(O){O.isCubeTexture?Dt.setTextureCube(O,0):O.isData3DTexture?Dt.setTexture3D(O,0):O.isDataArrayTexture||O.isCompressedArrayTexture?Dt.setTexture2DArray(O,0):Dt.setTexture2D(O,0),I.unbindTexture()},this.resetState=function(){D=0,G=0,$=null,I.reset(),te.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=jo._getDrawingBufferColorSpace(t),e.unpackColorSpace=jo._getUnpackColorSpace()}};var mm=new Wt;function ca(n,t,e,o,i,s){let r=2*Math.PI*i/4,a=Math.max(s-2*i,0),l=Math.PI/4;mm.copy(t),mm[o]=0,mm.normalize();let c=.5*r/(r+a),u=1-mm.angleTo(n)/l;return Math.sign(mm[e])===1?u*c:a/(r+a)+c+c*(1-u)}var ur=class n extends ia{constructor(t=1,e=1,o=1,i=2,s=.1){let r=i*2+1;if(s=Math.min(t/2,e/2,o/2,s),super(1,1,1,r,r,r),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:o,segments:i,radius:s},r===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let l=new Wt,c=new Wt,u=new Wt(t,e,o).divideScalar(2).subScalar(s),h=this.attributes.position.array,d=this.attributes.normal.array,g=this.attributes.uv.array,v=h.length/6,w=new Wt,x=.5/r;for(let m=0,p=0;m<h.length;m+=3,p+=2)switch(l.fromArray(h,m),c.copy(l),c.x-=Math.sign(c.x)*x,c.y-=Math.sign(c.y)*x,c.z-=Math.sign(c.z)*x,c.normalize(),h[m+0]=u.x*Math.sign(l.x)+c.x*s,h[m+1]=u.y*Math.sign(l.y)+c.y*s,h[m+2]=u.z*Math.sign(l.z)+c.z*s,d[m+0]=c.x,d[m+1]=c.y,d[m+2]=c.z,Math.floor(m/v)){case 0:w.set(1,0,0),g[p+0]=ca(w,c,"z","y",s,o),g[p+1]=1-ca(w,c,"y","z",s,e);break;case 1:w.set(-1,0,0),g[p+0]=1-ca(w,c,"z","y",s,o),g[p+1]=1-ca(w,c,"y","z",s,e);break;case 2:w.set(0,1,0),g[p+0]=1-ca(w,c,"x","z",s,t),g[p+1]=ca(w,c,"z","x",s,o);break;case 3:w.set(0,-1,0),g[p+0]=1-ca(w,c,"x","z",s,t),g[p+1]=1-ca(w,c,"z","x",s,o);break;case 4:w.set(0,0,1),g[p+0]=1-ca(w,c,"x","y",s,t),g[p+1]=1-ca(w,c,"y","x",s,e);break;case 5:w.set(0,0,-1),g[p+0]=ca(w,c,"x","y",s,t),g[p+1]=1-ca(w,c,"y","x",s,e);break}}static fromJSON(t){return new n(t.width,t.height,t.depth,t.segments,t.radius)}};var cb=new URLSearchParams(location.search).get("theme")==="stone"?"stone":"classic",ke=cb==="stone",P5=new Set(["tex_wall","tex_wood","tex_floor_planks","tex_ceiling_wood","tex_panel_carved","tex_frieze","tex_frieze_wall","tex_lacquer","tex_velvet","tex_mat","buddha_v3a"]),Yg=1.35;var p0={h:2/360,s:.44,a:.17,b:.32,lo:.2,hi:.36},$g=n=>n.toFixed(4),gm=new In,A5={h:0,s:0,l:0},Vl=Ki,zl=(n,t,e)=>Math.min(e,Math.max(t,n));function ab(n,t="gloss",e=new In){if(n==null)return n;gm.set(n),gm.getHSL(A5,Vl);let{h:o,s:i,l:s}=A5,r=o*360,a=r<58||r>=330;return t==="metal"?i>.22&&r>=14&&r<62?e.setHSL(43/360,.82,zl(.48+.2*s,.53,.6),Vl):e.copy(gm):s>.985&&i<.03||s<.05||!a&&i>=.03?e.copy(gm):i<.08?e.setHSL(28/360,.07,zl(.6+.32*s,0,.92),Vl):(r>=330||r<14)&&i>=.3?t==="cloth"?e.setHSL(p0.h,p0.s,zl(p0.a+p0.b*s,p0.lo,p0.hi),Vl):e.setHSL(34/360,.24,zl(.84+.06*s,0,.9),Vl):s<.62?e.setHSL(30/360,zl(.16+.1*i,0,.26),zl(.58+.3*s,0,.76),Vl):e.setHSL(32/360,zl(i*.3,.05,.2),zl(.82+.1*(s-.62)/.38,0,.92),Vl)}function Zg(n,t){return"#"+ab(n,t).getHexString(Vl)}var lb=class extends In{set(t,e,o){return e!==void 0||o!==void 0?super.set(ab(gm.setRGB(t,e,o),this.stoneRole)):super.set(ab(t,this.stoneRole))}};function ym(n){if(!ke||!n||n.userData.stoneRole)return n;let t=n.userData.stoneRoleWant||(n.metalness>=.6?"metal":n.roughness>=.8?"cloth":"gloss");t==="metal"&&(n.roughness=Math.max(n.roughness,.2));let e=new lb;return e.stoneRole=t,e.set(n.color),n.color=e,n.userData.stoneRole=t,n}var _P=`
vec3 stoneHsl(float h, float s, float l) {
  vec3 k = clamp(abs(mod(h * 6.0 + vec3(0.0, 4.0, 2.0), 6.0) - 3.0) - 1.0, 0.0, 1.0);
  return l + s * (k - 0.5) * (1.0 - abs(2.0 * l - 1.0));
}
vec3 stoneGrade(vec3 lin) {
  vec3 c = pow(max(lin, vec3(0.0)), vec3(1.0 / 2.2));
  float mx = max(c.r, max(c.g, c.b));
  float mn = min(c.r, min(c.g, c.b));
  float l = 0.5 * (mx + mn);
  float d = mx - mn;
  float s = d / max(1e-4, 1.0 - abs(2.0 * l - 1.0));
  float h = 0.0;
  if (d > 1e-4) {
    if (mx == c.r) h = mod((c.g - c.b) / d, 6.0);
    else if (mx == c.g) h = (c.b - c.r) / d + 2.0;
    else h = (c.r - c.g) / d + 4.0;
  }
  float deg = h * 60.0;
  float warm = max(smoothstep(318.0, 334.0, deg), 1.0 - smoothstep(52.0, 66.0, deg));
  float chroma = smoothstep(0.04, 0.12, s);
  float red = max(smoothstep(318.0, 334.0, deg), 1.0 - smoothstep(8.0, 18.0, deg)) * smoothstep(0.25, 0.4, s);
  float gold = smoothstep(10.0, 20.0, deg) * (1.0 - smoothstep(56.0, 66.0, deg)) * smoothstep(0.25, 0.45, s) * smoothstep(0.25, 0.45, l);
  float lw = mix(0.58 + 0.3 * l, 0.82 + 0.1 * l, smoothstep(0.5, 0.72, l));
#ifdef STONE_METAL
  float lg = 0.4 + 0.3 * l;
#else
  float lg = 0.46 + 0.3 * l;
#endif
#ifdef STONE_CLOTH
  vec3 redT = stoneHsl(${$g(p0.h)}, ${$g(p0.s)}, ${$g(p0.a-.02)} + ${$g(p0.b+.02)} * l);
#else
  vec3 redT = stoneHsl(0.094, 0.24, 0.83 + 0.07 * l);
#endif
  vec3 t = mix(stoneHsl(0.072, 0.07, 0.06 + 0.88 * l), stoneHsl(0.083, mix(0.22, 0.16, smoothstep(0.5, 0.72, l)), lw), chroma);
  t = mix(t, stoneHsl(0.119, 0.84, lg), gold);
  t = mix(t, redT, red);
  vec3 o = mix(c, t, max(warm * chroma, 1.0 - chroma));
  return pow(o, vec3(2.2));
}
`;ke&&(No.common+=_P,No.color_fragment+=`
#ifdef STONE_GRADE
	diffuseColor.rgb = stoneGrade( diffuseColor.rgb );
#endif
`);function go(n,t){return!ke||!n||(t&&!n.userData.stoneRole&&(n.userData.stoneRoleWant=t),ym(n),n.defines={...n.defines||{},STONE_GRADE:""},n.userData.stoneRole==="metal"&&(n.defines.STONE_METAL=""),n.userData.stoneRole==="cloth"&&(n.defines.STONE_CLOTH=""),n.needsUpdate=!0),n}var C5=new WeakSet,E5=-1/0;function Jg(n,t=0,e=!1){!ke||!n||!e&&t-E5<500||(E5=t,n.traverse(o=>{if(o.isMesh)for(let i of Array.isArray(o.material)?o.material:[o.material])!i||C5.has(i)||(C5.add(i),!(i.userData.stoneRole||!(i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial))&&(i.map||i.emissiveMap||i.vertexColors||ym(i)))}))}window.SanctuaryTHREE=M;})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
