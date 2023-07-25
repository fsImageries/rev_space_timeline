import{V as G,r as d,E as ae,Q as re,C as F,B as w,M as z,T as y,R as C,a as $,S as p,P as se,b as _,c as Q,U as ce,O as j,D as W,d as le,e as me,f as ve,g as ue,h as de,i as U,j as E,L as ge,A as pe,k as fe,l as he,m as ye,n as Ce,G as v,N as k,o as xe,p as H,q as Me,s as Pe,t as q,u as Z,v as Se,w as we,x as _e,y as be,z as Ae,F as Ee,I as Re,H as Te,J as De,K as X,W as Ie}from"./index-4b447b96.js";const Oe=(e,t,i)=>{const n=t.map((a,r)=>a-e[r]);return Math.sqrt(n[0]**2+n[1]**2+n[2]**2)<i},J=(e,t=1)=>{const i=[0,0,0];let n=[0,0,0];for(;Oe(n,i,e);)n=Le(t);return n},Le=(e=1)=>{const t=Math.random(),i=Math.random(),n=t*2*Math.PI,o=Math.acos(2*i-1),a=Math.cbrt(Math.random()),r=Math.sin(n),s=Math.cos(n),m=Math.sin(o),u=Math.cos(o),c=a*m*s,l=a*m*r,g=a*u;return[c*e,l*e,g*e]};(function(){const e=new G,t=new ae,i=new re,n=new G;return function(o,a){const[r,s,m]=J(a.distanceStart,a.distanceEnd);e.x=r,e.y=s,e.z=m,t.x=Math.random()*2*Math.PI,t.y=Math.random()*2*Math.PI,t.z=Math.random()*2*Math.PI,i.setFromEuler(t),n.x=n.y=n.z=d(2,1e3),o.compose(e,i,n)}})();const R=new F("#fff"),T=.01,D=.5;function Ne(e){return[(e[0]+d(T,D))%1,(e[1]+d(T,D))%1,(e[2]+d(T,D))%1]}function Ge(e,t){const[i]=ze(t);return e.addComponent(w,w.getDefaults(t)).addComponent(z,{mesh:i}).addComponent(y,y.getDefaults()).addComponent(C,C.getDefaults())}const I=3e3,Fe=67319e8;function ze(e){var u;const t=(u=e.draw)==null?void 0:u.genColor,i=new $,n=new Float32Array(I);let o;t&&(o=new Float32Array(I));const a=e.distanceToParent,r=a+Fe;for(let c=0;c<I;c+=3){const[l,g,f]=J(a*p.getInstance().state.DISTANCE_SCALE,r*p.getInstance().state.DISTANCE_SCALE);if(n[c]=l,n[c+1]=g,n[c+2]=f,o&&t){const[b,x,M]=Ne([R.r,R.g,R.b]);o[c]=b,o[c+1]=x,o[c+2]=M}}const s=new se({color:"#ffffff",sizeAttenuation:!0,size:.1,transparent:!0,opacity:.3}),m=new _(n,3);return i.setAttribute("position",m),o&&t&&i.setAttribute("color",new _(o,3)),[new Q(i,s)]}const $e=`
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
    vvPosition = worldPosition.xyz;
    
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
}   

    `,Ue=`
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
        
        // vec2 xy = gl_PointCoord.xy - vec2(0.5);
        // float ll = length(xy);
        // gl_FragColor = vec4(color, step(ll, 0.5));

        // need a vector pointing to the light
        float v = map(vvPosition.x - basePos.x, minRad, maxRad * 5., 0., 1.0);
        // float distanceToLightSource = distance(v, lightPos.x);
        // vec3 lighterColor = color * distanceToLightSource * lightStrength;
        
        // vec3 actualPos = v3map(vPosition, vec3(minRad), vec3(maxRad), vec3(0.0), vec3(1.0));
        // float distanceToLightSource = distance(lightPos, actualPos);
        // vec3 lighterColor = color * distanceToLightSource * lightStrength;

        // gl_FragColor = vec4(lighterColor, 1.0);
        v = map((v * -1.0), -1., -.5, .75, 1.1);
        // v = map((v * -1.0), -1., 0., 0.0, 1.);
        gl_FragColor = vec4(vColor, 1.0) * v;
    }
    `,O=new F("#fff"),L=.01,N=.5;function Be(e){return[(e[0]+d(L,N))%1,(e[1]+d(L,N))%1,(e[2]+d(L,N))%1]}function Ve(e,t){var o;const[i,n]=je(t);return e.addComponent(ce,n).addComponent(j,j.getDefaults(t.orbitalPeriod,(o=t.draw)==null?void 0:o.orbInvert)).addComponent(w,w.getDefaults(t)).addComponent(W,W.getDefaults(t.distanceToParent,!1)).addComponent(le,{radius:t.distanceToParent,drawRadius:t.distanceToParent*p.getInstance().state.DISTANCE_SCALE}).addComponent(z,{mesh:i}).addComponent(y,y.getDefaults()).addComponent(C,C.getDefaults()).addComponent(me).addComponent(ve).addComponent(ue).addComponent(de)}function je(e){var x,M,B;const n=Math.round(((x=e.draw)==null?void 0:x.count)/4),o=e.distanceToParent*p.getInstance().state.DISTANCE_SCALE,a=o,r=(M=e.draw)==null?void 0:M.height,s=-r,m=(B=e.draw)==null?void 0:B.genColor,u=new $,c=new Float32Array(n*4*3);let l;m&&(l=new Float32Array(n*4*3));for(let P=0;P<n;P++){const V=P/n*Math.PI*2;for(let A=0;A<4;A++){const S=Math.random()*.15-.075,K=Math.random()*(r-s)+s,Y=Math.cos(V)*(o+a/2+S+S*25*d(-1.25,1.25)),ee=K,te=Math.sin(V)*(o+a/2+S+S*25*d(-1.25,1.25)),h=(P*4+A)*3;if(l&&m){const[ne,oe,ie]=Be([O.r,O.g,O.b]);l[h]=ne,l[h+1]=oe,l[h+2]=ie}c[h]=Y,c[h+1]=ee,c[h+2]=te}}const g={size:{value:1},scale:{value:20},color:{value:[1,1,1]},lightPos:{value:[0,0,0]},basePos:{value:[0,0,0]},maxRad:{value:o+a/2+10},minRad:{value:-(o+a/2+10)}},f=new U({transparent:!0,uniforms:g,vertexShader:$e,fragmentShader:Ue}),b=new _(c,3);return u.setAttribute("position",b),l&&m&&u.setAttribute("color",new _(l,3)),[new Q(u,f),g]}const We=`uniform vec3 glowColor;
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
}`,ke=`// uniform vec3 viewVector;
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
}`;function He(e){const t=[],n=e.orbLen?e.orbLen:180;for(let s=0;s<=n;s++)t.push(new G(1*Math.sin(s*E),1*Math.cos(s*E),0));const o=new $;if(o.setFromPoints(t),o.computeBoundingBox(),o.computeVertexNormals(),!o.boundingBox)throw new Error("Bounding box can't be calculated.");const a=new U({uniforms:{bboxMin:{value:o.boundingBox.min},bboxMax:{value:o.boundingBox.max}},vertexShader:`
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
                gl_FragColor.a = (1.0 - vUv.y) * .5;
            }
        `,transparent:!0,depthWrite:!1}),r=new ge(o,a);return r.scale.x=e.orbInvert?-1:1,r.rotateY((180-n)*(e.orbInvert?-1:1)*E),r.rotateX(Math.PI*.5),r.rotateZ(Math.PI*.5),r.updateMatrixWorld(),r}function qe(e,t){var s;const[i,n,o,a]=Xe(t),r=He(t.draw);return e.addComponent(z,{mesh:i}).addComponent(y,y.getDefaults(o)).addComponent(C,C.getDefaults(a,(s=t.draw)==null?void 0:s.initRot)).addComponent(pe,{mesh:n}).addComponent(fe,{mesh:r}),he(e,t),t.type==="planet"?e.addComponent(ye):e.addComponent(Ce),e}function Xe(e){var c,l,g,f;const t=v.TEX_LOAD((c=e.draw)==null?void 0:c.albedoPath);t.magFilter=k;const i=v.TEX_LOAD((l=e.draw)==null?void 0:l.normalPath);i.magFilter=k;const n=new xe({map:t,normalMap:i}),o=new H(v.SPHERE_GEOM,n);o.castShadow=!0,o.name=`${e.name}_mesh`;const a={intensityMult:{value:(g=e.draw)==null?void 0:g.glowIntensity},glowColor:{value:new F(parseInt((f=e.draw)==null?void 0:f.glowColor))}},r=new U({uniforms:a,vertexShader:ke,fragmentShader:We,side:Me,blending:Pe,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4}),s=new H(v.SPHERE_GEOM,r);s.name=`${e.name}_atmo`,s.scale.setScalar(1.025);const m=new q;m.name=`${e.name}_transformGrp`;const u=new q;return u.name=`${e.name}_rotGrp`,[o,s,m,u]}const Qe=["moon","planet"];function tt(e,t){if(v.LOAD_MANAGER.itemStart(`://${t.name}`),p.getInstance().state.DISTANCE_SCALE=3e-7,p.getInstance().state.SIZE_SCALE=1e-5,Ze(e,t),Je(e,t),Ke(e,t),t.startTarget){p.getInstance().store.focusTarget=t.startTarget;const i=e.sysManager.getSystem(Z);i&&(i.enabled=!0)}v.LOAD_MANAGER.itemEnd(`://${t.name}`)}function Ze(e,t){v.LOAD_MANAGER.itemStart(`://${t.name}_systems`),e.sysManager.registerSystem(Se).registerSystem(we).registerSystem(_e).registerSystem(be).registerSystem(Z).registerSystem(Ae).registerSystem(Ee).registerSystem(Re),t.isSingleSun||e.sysManager.registerSystem(Te),v.LOAD_MANAGER.itemEnd(`://${t.name}_systems`)}function Je(e,t){var i;v.LOAD_MANAGER.itemStart(`://${t.name}_entities`);for(const n of t.objects){if(n.type==="sun"){const o=De(e.ecManager.createEntity(),n);!t.isSingleSun&&((i=n.draw)!=null&&i.mass)&&o.addComponent(X,X.getDefaults(n.draw.mass,n.draw.vel,n.draw.acc))}Qe.includes(n.type)&&(n.draw={...n.draw,initRot:d(-Math.PI,Math.PI)},qe(e.ecManager.createEntity(),n)),n.type==="particlering"&&Ve(e.ecManager.createEntity(),n),n.type==="oortcloud"&&Ge(e.ecManager.createEntity(),n)}v.LOAD_MANAGER.itemEnd(`://${t.name}_entities`)}function Ke(e,t){v.LOAD_MANAGER.itemStart(`://${t.name}_world`),Ie(e),e.load(),console.log(t.constellation),e.uiManager.infoPanel.init(t.texts,{name:t.name,constellation:t.constellation}),v.LOAD_MANAGER.itemEnd(`://${t.name}_world`)}export{tt as initSystem};
