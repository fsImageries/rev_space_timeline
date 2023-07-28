import{V as G,r as d,E as ae,Q as re,C as F,B as _,M as $,T as C,R as h,a as z,S as f,P as se,b as w,c as Z,U as ce,O as V,D as W,d as le,e as me,f as ve,g as ue,h as de,i as U,j as E,L as pe,A as fe,k as ge,l as ye,m as Ce,n as he,G as v,N as k,o as xe,p as H,q as Me,s as Pe,t as X,u as J,v as Se,w as _e,x as we,y as be,z as Ae,F as Ee,I as Re,H as Ie,J as Oe,K as De,W as q,X as Ne}from"./index-20fc64e3.js";const Te=(e,t,i)=>{const n=t.map((a,r)=>a-e[r]);return Math.sqrt(n[0]**2+n[1]**2+n[2]**2)<i},Q=(e,t=1)=>{const i=[0,0,0];let n=[0,0,0];for(;Te(n,i,e);)n=Le(t);return n},Le=(e=1)=>{const t=Math.random(),i=Math.random(),n=t*2*Math.PI,o=Math.acos(2*i-1),a=Math.cbrt(Math.random()),r=Math.sin(n),s=Math.cos(n),m=Math.sin(o),u=Math.cos(o),c=a*m*s,l=a*m*r,p=a*u;return[c*e,l*e,p*e]};(function(){const e=new G,t=new ae,i=new re,n=new G;return function(o,a){const[r,s,m]=Q(a.distanceStart,a.distanceEnd);e.x=r,e.y=s,e.z=m,t.x=Math.random()*2*Math.PI,t.y=Math.random()*2*Math.PI,t.z=Math.random()*2*Math.PI,i.setFromEuler(t),n.x=n.y=n.z=d(2,1e3),o.compose(e,i,n)}})();const R=new F("#fff"),I=.01,O=.5;function Ge(e){return[(e[0]+d(I,O))%1,(e[1]+d(I,O))%1,(e[2]+d(I,O))%1]}function Fe(e,t){const[i]=ze(t);return e.addComponent(_,_.getDefaults(t)).addComponent($,{mesh:i}).addComponent(C,C.getDefaults()).addComponent(h,h.getDefaults())}const D=3e3,$e=67319e8;function ze(e){var u;const t=(u=e.draw)==null?void 0:u.genColor,i=new z,n=new Float32Array(D);let o;t&&(o=new Float32Array(D));const a=e.distanceToParent,r=a+$e;for(let c=0;c<D;c+=3){const[l,p,g]=Q(a*f.getInstance().state.DISTANCE_SCALE,r*f.getInstance().state.DISTANCE_SCALE);if(n[c]=l,n[c+1]=p,n[c+2]=g,o&&t){const[b,x,M]=Ge([R.r,R.g,R.b]);o[c]=b,o[c+1]=x,o[c+2]=M}}const s=new se({color:"#ffffff",sizeAttenuation:!0,size:.1,transparent:!0,opacity:.3}),m=new w(n,3);return i.setAttribute("position",m),o&&t&&i.setAttribute("color",new w(o,3)),[new Z(i,s)]}const Ue=`
uniform float size;
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

varying vec3 vPosition;
varying vec3 vvPosition;
varying vec3 vColor;
attribute vec3 color;

float map(float value, float min1, float max1, float min2, float max2) {
    return min2 + (value - min1) * (max2 - min2) / (max1 - min1);
}

void main() {
    vPosition = position;
    vColor = color;

    vec4 localPosition = vec4( position, 1.);
    vec4 worldPosition = modelMatrix * localPosition;
    vec4 viewPosition = viewMatrix * worldPosition;
    
    
	#ifdef USE_POINTS_UV

		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;

	#endif

	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>

	gl_PointSize = size;

    bool isPerspective = isPerspectiveMatrix( projectionMatrix );
    if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );

	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
  vvPosition = worldPosition.xyz;
}   

    `,Be=`
    float lightStrength = .07;
    uniform vec3 color;
    uniform vec3 lightPos;
    uniform vec3 basePos;

    uniform float maxRad;
    uniform float minRad;

    varying vec3 vPosition;
    varying vec3 vvPosition;
    varying vec3 vColor;

    float map(float value, float min1, float max1, float min2, float max2) {
        return min2 + (value - min1) * (max2 - min2) / (max1 - min1);
      }

    vec3 v3map(vec3 value, vec3 min1, vec3 max1, vec3 min2, vec3 max2) {
        return min2 + (value - min1) * (max2 - min2) / (max1 - min1);
      }
    
    void main() {
        float distBase = distance(basePos, lightPos);
        
        // the plus/minus variables need to be passed as uniforms from object_data
        float v1 = map(distance(vvPosition, lightPos), distBase, distBase + 25., 1., 0.);
        gl_FragColor = vec4(vColor, 1.0);
        gl_FragColor.a = v1;
    }
    `,N=new F("#fff"),T=.01,L=.5;function je(e){return[(e[0]+d(T,L))%1,(e[1]+d(T,L))%1,(e[2]+d(T,L))%1]}function Ve(e,t){var o;const[i,n]=We(t);return e.addComponent(ce,n).addComponent(V,V.getDefaults(t.orbitalPeriod,(o=t.draw)==null?void 0:o.orbInvert)).addComponent(_,_.getDefaults(t)).addComponent(W,W.getDefaults(t.distanceToParent,!1)).addComponent(le,{radius:t.distanceToParent,drawRadius:t.distanceToParent*f.getInstance().state.DISTANCE_SCALE}).addComponent($,{mesh:i}).addComponent(C,C.getDefaults()).addComponent(h,h.getDefaults()).addComponent(me).addComponent(ve).addComponent(ue).addComponent(de)}function We(e){var x,M,B;const n=Math.round(((x=e.draw)==null?void 0:x.count)/4),o=e.distanceToParent*f.getInstance().state.DISTANCE_SCALE,a=o,r=(M=e.draw)==null?void 0:M.height,s=-r,m=(B=e.draw)==null?void 0:B.genColor,u=new z,c=new Float32Array(n*4*3);let l;m&&(l=new Float32Array(n*4*3));for(let P=0;P<n;P++){const j=P/n*Math.PI*2;for(let A=0;A<4;A++){const S=Math.random()*.15-.075,K=Math.random()*(r-s)+s,Y=Math.cos(j)*(o+a/2+S+S*25*d(-1.25,1.25)),ee=K,te=Math.sin(j)*(o+a/2+S+S*25*d(-1.25,1.25)),y=(P*4+A)*3;if(l&&m){const[ne,oe,ie]=je([N.r,N.g,N.b]);l[y]=ne,l[y+1]=oe,l[y+2]=ie}c[y]=Y,c[y+1]=ee,c[y+2]=te}}const p={size:{value:1},scale:{value:20},color:{value:[1,1,1]},lightPos:{value:[0,0,0]},basePos:{value:[0,0,0]},maxRad:{value:o},minRad:{value:o}},g=new U({transparent:!0,uniforms:p,vertexShader:Ue,fragmentShader:Be}),b=new w(c,3);return u.setAttribute("position",b),l&&m&&u.setAttribute("color",new w(l,3)),[new Z(u,g),p]}const ke=`uniform vec3 glowColor;
uniform float intensityMult;
// varying float intensity;

// // void main() {
// //   vec3 glow = (glowColor - .2) * intensity * intensityMult + .01;
// //   gl_FragColor = vec4( glow, 1.0 );
// // }

// varying vec3 vNormal;
// void main() {
// float ins = pow( 0.8 - dot( vNormal, vec3( 0, 0, .5 ) ), 12.0 );
// gl_FragColor = vec4( glowColor, 1.0 ) * ins;
// }


varying vec3 vertexNormal;
void main() {
  float intensity = pow(.7 - dot(vertexNormal, vec3(0,0,1.0)), 2.0);
  gl_FragColor = vec4(glowColor, 1.0) * intensity * intensityMult;
}`,He=`// uniform vec3 viewVector;
// varying float intensity;

// // void main() {
// //   gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4( position, 1.0 );
// //   vec3 actual_normal = vec3(modelMatrix * vec4(normal, 0.0));
// //   intensity = pow( dot(normalize(viewVector), actual_normal), 6.0 );
// // }


// varying vec3 vNormal;
// void main() {
// vNormal = normalize( normalMatrix * normal );
//   vec3 actual_normal = vec3(modelMatrix * vec4(normal, 0.0));
//   intensity = pow( dot(normalize(viewVector), actual_normal), 6.0 );
//   gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
// }

varying vec3 vertexNormal;
void main() {
  vertexNormal = normal;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`;function Xe(e){const t=[],n=e.orbLen?e.orbLen:180;for(let s=0;s<=n;s++)t.push(new G(1*Math.sin(s*E),1*Math.cos(s*E),0));const o=new z;if(o.setFromPoints(t),o.computeBoundingBox(),o.computeVertexNormals(),!o.boundingBox)throw new Error("Bounding box can't be calculated.");const a=new U({uniforms:{bboxMin:{value:o.boundingBox.min},bboxMax:{value:o.boundingBox.max}},vertexShader:`
            uniform vec3 bboxMin;
            uniform vec3 bboxMax;

            varying vec2 vUv;

            void main() {
                vUv.y = (position.y - bboxMin.y) / (bboxMax.y - bboxMin.y);
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
            }
        `,fragmentShader:`
            varying vec2 vUv;

            void main() {
                vec4 col = vec4(mix(vec3(1), vec3(0), vUv.y), 1);
                gl_FragColor = vec4(1);
                gl_FragColor.a = (1.0 - vUv.y) * ${e.orbOpacity?e.orbOpacity:.5};
            }
        `,transparent:!0,depthWrite:!1}),r=new pe(o,a);return r.scale.x=e.orbInvert?-1:1,r.rotateY((180-n)*(e.orbInvert?-1:1)*E),r.rotateX(Math.PI*.5),r.rotateZ(Math.PI*.5),r.updateMatrixWorld(),r}function qe(e,t){var s;const[i,n,o,a]=Ze(t),r=Xe(t.draw);return e.addComponent($,{mesh:i}).addComponent(C,C.getDefaults(o)).addComponent(h,h.getDefaults(a,(s=t.draw)==null?void 0:s.initRot)).addComponent(fe,{mesh:n}).addComponent(ge,{mesh:r}),ye(e,t),t.type==="planet"?e.addComponent(Ce):e.addComponent(he),e}function Ze(e){var c,l,p,g;const t=v.TEX_LOAD((c=e.draw)==null?void 0:c.albedoPath);t.magFilter=k;const i=v.TEX_LOAD((l=e.draw)==null?void 0:l.normalPath);i.magFilter=k;const n=new xe({map:t,normalMap:i}),o=new H(v.SPHERE_GEOM,n);o.castShadow=!0,o.name=`${e.name}_mesh`;const a={intensityMult:{value:(p=e.draw)==null?void 0:p.glowIntensity},glowColor:{value:new F(parseInt((g=e.draw)==null?void 0:g.glowColor))}},r=new U({uniforms:a,vertexShader:He,fragmentShader:ke,side:Me,blending:Pe,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4}),s=new H(v.SPHERE_GEOM,r);s.name=`${e.name}_atmo`,s.scale.setScalar(1.025);const m=new X;m.name=`${e.name}_transformGrp`;const u=new X;return u.name=`${e.name}_rotGrp`,[o,s,m,u]}const Je=["moon","planet"];function at(e,t){if(v.LOAD_MANAGER.itemStart(`://${t.name}`),f.getInstance().state.DISTANCE_SCALE=t.DISTANCE_SCALE,f.getInstance().state.SIZE_SCALE=t.SIZE_SCALE,Qe(e,t),Ye(e,t),et(e,t),t.startTarget){f.getInstance().store.focusTarget=t.startTarget;const i=e.sysManager.getSystem(J);i&&(i.enabled=!0)}v.LOAD_MANAGER.itemEnd(`://${t.name}`)}function Qe(e,t){v.LOAD_MANAGER.itemStart(`://${t.name}_systems`),e.sysManager.registerSystem(Se).registerSystem(_e).registerSystem(we).registerSystem(be).registerSystem(J).registerSystem(Ae).registerSystem(Ee).registerSystem(Re),t.isSingleSun||e.sysManager.registerSystem(Ie),t.objects.find(i=>i.type==="particlering")&&e.sysManager.registerSystem(Oe),v.LOAD_MANAGER.itemEnd(`://${t.name}_systems`)}const Ke=[-Math.PI/2,Math.PI/2];function Ye(e,t){var i;v.LOAD_MANAGER.itemStart(`://${t.name}_entities`);for(const n of t.objects){if(n.type==="sun"){const o=De(e.ecManager.createEntity(),n);!t.isSingleSun&&((i=n.draw)!=null&&i.mass)&&o.addComponent(q,q.getDefaults(n.draw.mass,n.draw.vel,n.draw.acc))}Je.includes(n.type)&&(n.draw={...n.draw,initRot:d(...Ke)},qe(e.ecManager.createEntity(),n)),n.type==="particlering"&&Ve(e.ecManager.createEntity(),n),n.type==="oortcloud"&&Fe(e.ecManager.createEntity(),n)}v.LOAD_MANAGER.itemEnd(`://${t.name}_entities`)}function et(e,t){v.LOAD_MANAGER.itemStart(`://${t.name}_world`),Ne(e),e.load(),nt(e,t),v.LOAD_MANAGER.itemEnd(`://${t.name}_world`)}const tt="https://raw.githubusercontent.com/fsImageries/rev_space_timeline_texts/main/raw/";function nt(e,t){const i=t.name.replaceAll(" ","").toLowerCase(),n=`${tt}${i}.json`;fetch(n).then(o=>o.text()).then(o=>{const a=JSON.parse(o);e.uiManager.infoPanel.initTexts(a.texts,{name:t.name,constellation:t.constellation})})}export{at as initSystem};
