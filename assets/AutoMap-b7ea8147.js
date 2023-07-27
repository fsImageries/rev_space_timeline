import{V as G,r as d,E as rn,Q as sn,C as F,B as _,M as z,T as C,R as M,a as $,S as f,P as cn,b as w,c as Z,U as mn,O as V,D as W,d as ln,e as vn,f as un,g as dn,h as pn,i as B,j as E,L as fn,A as gn,k as yn,l as Cn,m as Mn,n as hn,G as v,N as k,o as xn,p as H,q as Pn,s as Sn,t as X,u as Q,v as _n,w as wn,x as bn,y as An,z as En,F as Rn,I as In,H as On,J as Dn,K as Nn,W as q,X as Tn}from"./index-c9fe5773.js";const Ln=(n,e,i)=>{const t=e.map((r,a)=>r-n[a]);return Math.sqrt(t[0]**2+t[1]**2+t[2]**2)<i},J=(n,e=1)=>{const i=[0,0,0];let t=[0,0,0];for(;Ln(t,i,n);)t=Gn(e);return t},Gn=(n=1)=>{const e=Math.random(),i=Math.random(),t=e*2*Math.PI,o=Math.acos(2*i-1),r=Math.cbrt(Math.random()),a=Math.sin(t),s=Math.cos(t),l=Math.sin(o),u=Math.cos(o),c=r*l*s,m=r*l*a,p=r*u;return[c*n,m*n,p*n]};(function(){const n=new G,e=new rn,i=new sn,t=new G;return function(o,r){const[a,s,l]=J(r.distanceStart,r.distanceEnd);n.x=a,n.y=s,n.z=l,e.x=Math.random()*2*Math.PI,e.y=Math.random()*2*Math.PI,e.z=Math.random()*2*Math.PI,i.setFromEuler(e),t.x=t.y=t.z=d(2,1e3),o.compose(n,i,t)}})();const R=new F("#fff"),I=.01,O=.5;function Fn(n){return[(n[0]+d(I,O))%1,(n[1]+d(I,O))%1,(n[2]+d(I,O))%1]}function zn(n,e){const[i]=Bn(e);return n.addComponent(_,_.getDefaults(e)).addComponent(z,{mesh:i}).addComponent(C,C.getDefaults()).addComponent(M,M.getDefaults())}const D=3e3,$n=67319e8;function Bn(n){var u;const e=(u=n.draw)==null?void 0:u.genColor,i=new $,t=new Float32Array(D);let o;e&&(o=new Float32Array(D));const r=n.distanceToParent,a=r+$n;for(let c=0;c<D;c+=3){const[m,p,g]=J(r*f.getInstance().state.DISTANCE_SCALE,a*f.getInstance().state.DISTANCE_SCALE);if(t[c]=m,t[c+1]=p,t[c+2]=g,o&&e){const[b,h,x]=Fn([R.r,R.g,R.b]);o[c]=b,o[c+1]=h,o[c+2]=x}}const s=new cn({color:"#ffffff",sizeAttenuation:!0,size:.1,transparent:!0,opacity:.3}),l=new w(t,3);return i.setAttribute("position",l),o&&e&&i.setAttribute("color",new w(o,3)),[new Z(i,s)]}const Un=`
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

    `,jn=`
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
    `,N=new F("#fff"),T=.01,L=.5;function Vn(n){return[(n[0]+d(T,L))%1,(n[1]+d(T,L))%1,(n[2]+d(T,L))%1]}function Wn(n,e){var o;const[i,t]=kn(e);return n.addComponent(mn,t).addComponent(V,V.getDefaults(e.orbitalPeriod,(o=e.draw)==null?void 0:o.orbInvert)).addComponent(_,_.getDefaults(e)).addComponent(W,W.getDefaults(e.distanceToParent,!1)).addComponent(ln,{radius:e.distanceToParent,drawRadius:e.distanceToParent*f.getInstance().state.DISTANCE_SCALE}).addComponent(z,{mesh:i}).addComponent(C,C.getDefaults()).addComponent(M,M.getDefaults()).addComponent(vn).addComponent(un).addComponent(dn).addComponent(pn)}function kn(n){var h,x,U;const t=Math.round(((h=n.draw)==null?void 0:h.count)/4),o=n.distanceToParent*f.getInstance().state.DISTANCE_SCALE,r=o,a=(x=n.draw)==null?void 0:x.height,s=-a,l=(U=n.draw)==null?void 0:U.genColor,u=new $,c=new Float32Array(t*4*3);let m;l&&(m=new Float32Array(t*4*3));for(let P=0;P<t;P++){const j=P/t*Math.PI*2;for(let A=0;A<4;A++){const S=Math.random()*.15-.075,K=Math.random()*(a-s)+s,Y=Math.cos(j)*(o+r/2+S+S*25*d(-1.25,1.25)),nn=K,en=Math.sin(j)*(o+r/2+S+S*25*d(-1.25,1.25)),y=(P*4+A)*3;if(m&&l){const[tn,on,an]=Vn([N.r,N.g,N.b]);m[y]=tn,m[y+1]=on,m[y+2]=an}c[y]=Y,c[y+1]=nn,c[y+2]=en}}const p={size:{value:1},scale:{value:20},color:{value:[1,1,1]},lightPos:{value:[0,0,0]},basePos:{value:[0,0,0]},maxRad:{value:o},minRad:{value:o}},g=new B({transparent:!0,uniforms:p,vertexShader:Un,fragmentShader:jn}),b=new w(c,3);return u.setAttribute("position",b),m&&l&&u.setAttribute("color",new w(m,3)),[new Z(u,g),p]}const Hn=`uniform vec3 glowColor;
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
}`,Xn=`// uniform vec3 viewVector;
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
}`;function qn(n){const e=[],t=n.orbLen?n.orbLen:180;for(let s=0;s<=t;s++)e.push(new G(1*Math.sin(s*E),1*Math.cos(s*E),0));const o=new $;if(o.setFromPoints(e),o.computeBoundingBox(),o.computeVertexNormals(),!o.boundingBox)throw new Error("Bounding box can't be calculated.");const r=new B({uniforms:{bboxMin:{value:o.boundingBox.min},bboxMax:{value:o.boundingBox.max}},vertexShader:`
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
        `,transparent:!0,depthWrite:!1}),a=new fn(o,r);return a.scale.x=n.orbInvert?-1:1,a.rotateY((180-t)*(n.orbInvert?-1:1)*E),a.rotateX(Math.PI*.5),a.rotateZ(Math.PI*.5),a.updateMatrixWorld(),a}function Zn(n,e){var s;const[i,t,o,r]=Qn(e),a=qn(e.draw);return n.addComponent(z,{mesh:i}).addComponent(C,C.getDefaults(o)).addComponent(M,M.getDefaults(r,(s=e.draw)==null?void 0:s.initRot)).addComponent(gn,{mesh:t}).addComponent(yn,{mesh:a}),Cn(n,e),e.type==="planet"?n.addComponent(Mn):n.addComponent(hn),n}function Qn(n){var c,m,p,g;const e=v.TEX_LOAD((c=n.draw)==null?void 0:c.albedoPath);e.magFilter=k;const i=v.TEX_LOAD((m=n.draw)==null?void 0:m.normalPath);i.magFilter=k;const t=new xn({map:e,normalMap:i}),o=new H(v.SPHERE_GEOM,t);o.castShadow=!0,o.name=`${n.name}_mesh`;const r={intensityMult:{value:(p=n.draw)==null?void 0:p.glowIntensity},glowColor:{value:new F(parseInt((g=n.draw)==null?void 0:g.glowColor))}},a=new B({uniforms:r,vertexShader:Xn,fragmentShader:Hn,side:Pn,blending:Sn,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4}),s=new H(v.SPHERE_GEOM,a);s.name=`${n.name}_atmo`,s.scale.setScalar(1.025);const l=new X;l.name=`${n.name}_transformGrp`;const u=new X;return u.name=`${n.name}_rotGrp`,[o,s,l,u]}const Jn=["moon","planet"];function ie(n,e){if(v.LOAD_MANAGER.itemStart(`://${e.name}`),f.getInstance().state.DISTANCE_SCALE=e.DISTANCE_SCALE,f.getInstance().state.SIZE_SCALE=e.SIZE_SCALE,Kn(n,e),ne(n,e),ee(n,e),e.startTarget){f.getInstance().store.focusTarget=e.startTarget;const i=n.sysManager.getSystem(Q);i&&(i.enabled=!0)}v.LOAD_MANAGER.itemEnd(`://${e.name}`)}function Kn(n,e){v.LOAD_MANAGER.itemStart(`://${e.name}_systems`),n.sysManager.registerSystem(_n).registerSystem(wn).registerSystem(bn).registerSystem(An).registerSystem(Q).registerSystem(En).registerSystem(Rn).registerSystem(In),e.isSingleSun||n.sysManager.registerSystem(On),e.objects.find(i=>i.type==="particlering")&&n.sysManager.registerSystem(Dn),v.LOAD_MANAGER.itemEnd(`://${e.name}_systems`)}const Yn=[-Math.PI/2,Math.PI/2];function ne(n,e){var i;v.LOAD_MANAGER.itemStart(`://${e.name}_entities`);for(const t of e.objects){if(t.type==="sun"){const o=Nn(n.ecManager.createEntity(),t);!e.isSingleSun&&((i=t.draw)!=null&&i.mass)&&o.addComponent(q,q.getDefaults(t.draw.mass,t.draw.vel,t.draw.acc))}Jn.includes(t.type)&&(t.draw={...t.draw,initRot:d(...Yn)},Zn(n.ecManager.createEntity(),t)),t.type==="particlering"&&Wn(n.ecManager.createEntity(),t),t.type==="oortcloud"&&zn(n.ecManager.createEntity(),t)}v.LOAD_MANAGER.itemEnd(`://${e.name}_entities`)}function ee(n,e){v.LOAD_MANAGER.itemStart(`://${e.name}_world`),Tn(n),n.load(),n.uiManager.infoPanel.init(e.texts,{name:e.name,constellation:e.constellation}),v.LOAD_MANAGER.itemEnd(`://${e.name}_world`)}export{ie as initSystem};
