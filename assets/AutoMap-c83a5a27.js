import{V as G,r as d,E as an,Q as rn,C as F,B as _,M as $,T as y,R as h,a as z,S as f,P as sn,b as w,c as Z,U as cn,O as V,D as k,d as ln,e as mn,f as vn,g as un,h as dn,i as U,j as E,L as pn,A as fn,k as gn,l as Cn,m as yn,n as hn,G as v,N as H,o as xn,p as W,q as Mn,s as Pn,t as q,u as Sn,v as _n,w as wn,x as bn,y as An,I as En,z as Rn,F as In,H as On,J as X,K as Dn}from"./index-9b538e70.js";const Nn=(n,t,i)=>{const e=t.map((a,r)=>a-n[r]);return Math.sqrt(e[0]**2+e[1]**2+e[2]**2)<i},J=(n,t=1)=>{const i=[0,0,0];let e=[0,0,0];for(;Nn(e,i,n);)e=Tn(t);return e},Tn=(n=1)=>{const t=Math.random(),i=Math.random(),e=t*2*Math.PI,o=Math.acos(2*i-1),a=Math.cbrt(Math.random()),r=Math.sin(e),s=Math.cos(e),m=Math.sin(o),u=Math.cos(o),c=a*m*s,l=a*m*r,p=a*u;return[c*n,l*n,p*n]};(function(){const n=new G,t=new an,i=new rn,e=new G;return function(o,a){const[r,s,m]=J(a.distanceStart,a.distanceEnd);n.x=r,n.y=s,n.z=m,t.x=Math.random()*2*Math.PI,t.y=Math.random()*2*Math.PI,t.z=Math.random()*2*Math.PI,i.setFromEuler(t),e.x=e.y=e.z=d(2,1e3),o.compose(n,i,e)}})();const R=new F("#fff"),I=.01,O=.5;function Ln(n){return[(n[0]+d(I,O))%1,(n[1]+d(I,O))%1,(n[2]+d(I,O))%1]}function Gn(n,t){const[i]=$n(t);return n.addComponent(_,_.getDefaults(t)).addComponent($,{mesh:i}).addComponent(y,y.getDefaults()).addComponent(h,h.getDefaults())}const D=3e3,Fn=67319e8;function $n(n){var u;const t=(u=n.draw)==null?void 0:u.genColor,i=new z,e=new Float32Array(D);let o;t&&(o=new Float32Array(D));const a=n.distanceToParent,r=a+Fn;for(let c=0;c<D;c+=3){const[l,p,g]=J(a*f.getInstance().state.DISTANCE_SCALE,r*f.getInstance().state.DISTANCE_SCALE);if(e[c]=l,e[c+1]=p,e[c+2]=g,o&&t){const[b,x,M]=Ln([R.r,R.g,R.b]);o[c]=b,o[c+1]=x,o[c+2]=M}}const s=new sn({color:"#ffffff",sizeAttenuation:!0,size:.1,transparent:!0,opacity:.3}),m=new w(e,3);return i.setAttribute("position",m),o&&t&&i.setAttribute("color",new w(o,3)),[new Z(i,s)]}const zn=`
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

    `,Un=`
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
    `,N=new F("#fff"),T=.01,L=.5;function Bn(n){return[(n[0]+d(T,L))%1,(n[1]+d(T,L))%1,(n[2]+d(T,L))%1]}function jn(n,t){var o;const[i,e]=Vn(t);return n.addComponent(cn,e).addComponent(V,V.getDefaults(t.orbitalPeriod,(o=t.draw)==null?void 0:o.orbInvert)).addComponent(_,_.getDefaults(t)).addComponent(k,k.getDefaults(t.distanceToParent,!1)).addComponent(ln,{radius:t.distanceToParent,drawRadius:t.distanceToParent*f.getInstance().state.DISTANCE_SCALE}).addComponent($,{mesh:i}).addComponent(y,y.getDefaults()).addComponent(h,h.getDefaults()).addComponent(mn).addComponent(vn).addComponent(un).addComponent(dn)}function Vn(n){var x,M,B;const e=Math.round(((x=n.draw)==null?void 0:x.count)/4),o=n.distanceToParent*f.getInstance().state.DISTANCE_SCALE,a=o,r=(M=n.draw)==null?void 0:M.height,s=-r,m=(B=n.draw)==null?void 0:B.genColor,u=new z,c=new Float32Array(e*4*3);let l;m&&(l=new Float32Array(e*4*3));for(let P=0;P<e;P++){const j=P/e*Math.PI*2;for(let A=0;A<4;A++){const S=Math.random()*.15-.075,Q=Math.random()*(r-s)+s,K=Math.cos(j)*(o+a/2+S+S*25*d(-1.25,1.25)),Y=Q,nn=Math.sin(j)*(o+a/2+S+S*25*d(-1.25,1.25)),C=(P*4+A)*3;if(l&&m){const[tn,en,on]=Bn([N.r,N.g,N.b]);l[C]=tn,l[C+1]=en,l[C+2]=on}c[C]=K,c[C+1]=Y,c[C+2]=nn}}const p={size:{value:1},scale:{value:20},color:{value:[1,1,1]},lightPos:{value:[0,0,0]},basePos:{value:[0,0,0]},maxRad:{value:o},minRad:{value:o}},g=new U({transparent:!0,uniforms:p,vertexShader:zn,fragmentShader:Un}),b=new w(c,3);return u.setAttribute("position",b),l&&m&&u.setAttribute("color",new w(l,3)),[new Z(u,g),p]}const kn=`uniform vec3 glowColor;
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
}`,Hn=`// uniform vec3 viewVector;
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
}`;function Wn(n){const t=[],e=n.orbLen?n.orbLen:180;for(let s=0;s<=e;s++)t.push(new G(1*Math.sin(s*E),1*Math.cos(s*E),0));const o=new z;if(o.setFromPoints(t),o.computeBoundingBox(),o.computeVertexNormals(),!o.boundingBox)throw new Error("Bounding box can't be calculated.");const a=new U({uniforms:{bboxMin:{value:o.boundingBox.min},bboxMax:{value:o.boundingBox.max}},vertexShader:`
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
                gl_FragColor.a = (1.0 - vUv.y) * ${n.orbOpacity?n.orbOpacity:.5};
            }
        `,transparent:!0,depthWrite:!1}),r=new pn(o,a);return r.scale.x=n.orbInvert?-1:1,r.rotateY((180-e)*(n.orbInvert?-1:1)*E),r.rotateX(Math.PI*.5),r.rotateZ(Math.PI*.5),r.updateMatrixWorld(),r}function qn(n,t){var s;const[i,e,o,a]=Xn(t),r=Wn(t.draw);return n.addComponent($,{mesh:i}).addComponent(y,y.getDefaults(o)).addComponent(h,h.getDefaults(a,(s=t.draw)==null?void 0:s.initRot)).addComponent(fn,{mesh:e}).addComponent(gn,{mesh:r}),Cn(n,t),t.type==="planet"?n.addComponent(yn):n.addComponent(hn),n}function Xn(n){var c,l,p,g;const t=v.TEX_LOAD((c=n.draw)==null?void 0:c.albedoPath);t.magFilter=H;const i=v.TEX_LOAD((l=n.draw)==null?void 0:l.normalPath);i.magFilter=H;const e=new xn({map:t,normalMap:i}),o=new W(v.SPHERE_GEOM,e);o.castShadow=!0,o.name=`${n.name}_mesh`;const a={intensityMult:{value:(p=n.draw)==null?void 0:p.glowIntensity},glowColor:{value:new F(parseInt((g=n.draw)==null?void 0:g.glowColor))}},r=new U({uniforms:a,vertexShader:Hn,fragmentShader:kn,side:Mn,blending:Pn,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4}),s=new W(v.SPHERE_GEOM,r);s.name=`${n.name}_atmo`,s.scale.setScalar(1.025);const m=new q;m.name=`${n.name}_transformGrp`;const u=new q;return u.name=`${n.name}_rotGrp`,[o,s,m,u]}const Zn=["moon","planet"];function it(n,t){if(v.LOAD_MANAGER.itemStart(`://${t.name}`),f.getInstance().state.DISTANCE_SCALE=t.DISTANCE_SCALE,f.getInstance().state.SIZE_SCALE=t.SIZE_SCALE,Jn(n,t),Kn(n,t),Yn(n,t),t.startTarget){f.getInstance().store.focusTarget=t.startTarget;const i=n.sysManager.getSystem(Sn);i&&(i.enabled=!0)}v.LOAD_MANAGER.itemEnd(`://${t.name}`)}function Jn(n,t){v.LOAD_MANAGER.itemStart(`://${t.name}_systems`),_n(n),n.sysManager.registerSystem(wn).registerSystem(bn).registerSystem(An).registerSystem(En),t.isSingleSun||n.sysManager.registerSystem(Rn),t.objects.find(i=>i.type==="particlering")&&n.sysManager.registerSystem(In),v.LOAD_MANAGER.itemEnd(`://${t.name}_systems`)}const Qn=[-Math.PI/2,Math.PI/2];function Kn(n,t){var i;v.LOAD_MANAGER.itemStart(`://${t.name}_entities`);for(const e of t.objects){if(e.type==="sun"){const o=On(n.ecManager.createEntity(),e);!t.isSingleSun&&((i=e.draw)!=null&&i.mass)&&o.addComponent(X,X.getDefaults(e.draw.mass,e.draw.vel,e.draw.acc))}Zn.includes(e.type)&&(e.draw={...e.draw,initRot:d(...Qn)},qn(n.ecManager.createEntity(),e)),e.type==="particlering"&&jn(n.ecManager.createEntity(),e),e.type==="oortcloud"&&Gn(n.ecManager.createEntity(),e)}v.LOAD_MANAGER.itemEnd(`://${t.name}_entities`)}function Yn(n,t){v.LOAD_MANAGER.itemStart(`://${t.name}_world`),Dn(n),n.load(),tt(n,t),v.LOAD_MANAGER.itemEnd(`://${t.name}_world`)}const nt="https://raw.githubusercontent.com/fsImageries/rev_space_timeline_texts/main/raw/";function tt(n,t){const i=t.name.replaceAll(" ","").toLowerCase(),e=`${nt}${i}.json`;fetch(e).then(o=>o.text()).then(o=>{const a=JSON.parse(o);n.uiManager.infoPanel.initTexts(a.texts,{name:t.name,constellation:t.constellation})})}export{it as initSystem};
