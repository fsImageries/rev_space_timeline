import{V as G,r as d,E as ae,Q as re,C as F,B as _,M as z,T as x,R as C,a as $,S as p,P as ie,b as w,c as Q,U as se,O as j,D as k,d as ce,e as le,f as me,g as ve,h as ue,i as U,j as E,L as de,A as ge,k as pe,l as fe,m as he,n as xe,G as v,N as H,o as Ce,p as W,q as ye,s as Pe,t as q,u as Me,v as Se,w as _e,x as we,y as X,z as be,F as Ae,I as Ee,H as Re,J as Te}from"./index-3ad4b1ba.js";const Ie=(e,t,n)=>{const a=t.map((r,i)=>r-e[i]);return Math.sqrt(a[0]**2+a[1]**2+a[2]**2)<n},Z=(e,t=1)=>{const n=[0,0,0];let a=[0,0,0];for(;Ie(a,n,e);)a=De(t);return a},De=(e=1)=>{const t=Math.random(),n=Math.random(),a=t*2*Math.PI,o=Math.acos(2*n-1),r=Math.cbrt(Math.random()),i=Math.sin(a),s=Math.cos(a),m=Math.sin(o),u=Math.cos(o),c=r*m*s,l=r*m*i,g=r*u;return[c*e,l*e,g*e]};(function(){const e=new G,t=new ae,n=new re,a=new G;return function(o,r){const[i,s,m]=Z(r.distanceStart,r.distanceEnd);e.x=i,e.y=s,e.z=m,t.x=Math.random()*2*Math.PI,t.y=Math.random()*2*Math.PI,t.z=Math.random()*2*Math.PI,n.setFromEuler(t),a.x=a.y=a.z=d(2,1e3),o.compose(e,n,a)}})();const R=new F("#fff"),T=.01,I=.5;function Oe(e){return[(e[0]+d(T,I))%1,(e[1]+d(T,I))%1,(e[2]+d(T,I))%1]}function Le(e,t){const[n]=Ge(t);return e.addComponent(_,_.getDefaults(t)).addComponent(z,{mesh:n}).addComponent(x,x.getDefaults()).addComponent(C,C.getDefaults())}const D=3e3,Ne=67319e8;function Ge(e){var u;const t=(u=e.draw)==null?void 0:u.genColor,n=new $,a=new Float32Array(D);let o;t&&(o=new Float32Array(D));const r=e.distanceToParent,i=r+Ne;for(let c=0;c<D;c+=3){const[l,g,f]=Z(r*p.getInstance().state.DISTANCE_SCALE,i*p.getInstance().state.DISTANCE_SCALE);if(a[c]=l,a[c+1]=g,a[c+2]=f,o&&t){const[b,y,P]=Oe([R.r,R.g,R.b]);o[c]=b,o[c+1]=y,o[c+2]=P}}const s=new ie({color:"#ffffff",sizeAttenuation:!0,size:.1,transparent:!0,opacity:.3}),m=new w(a,3);return n.setAttribute("position",m),o&&t&&n.setAttribute("color",new w(o,3)),[new Q(n,s)]}const Fe=`
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

    `,ze=`
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
    `,O=new F("#fff"),L=.01,N=.5;function $e(e){return[(e[0]+d(L,N))%1,(e[1]+d(L,N))%1,(e[2]+d(L,N))%1]}function Ue(e,t){var o;const[n,a]=Be(t);return e.addComponent(se,a).addComponent(j,j.getDefaults(t.orbitalPeriod,(o=t.draw)==null?void 0:o.orbInvert)).addComponent(_,_.getDefaults(t)).addComponent(k,k.getDefaults(t.distanceToParent,!1)).addComponent(ce,{radius:t.distanceToParent,drawRadius:t.distanceToParent*p.getInstance().state.DISTANCE_SCALE}).addComponent(z,{mesh:n}).addComponent(x,x.getDefaults()).addComponent(C,C.getDefaults()).addComponent(le).addComponent(me).addComponent(ve).addComponent(ue)}function Be(e){var y,P,B;const a=Math.round(((y=e.draw)==null?void 0:y.count)/4),o=e.distanceToParent*p.getInstance().state.DISTANCE_SCALE,r=o,i=(P=e.draw)==null?void 0:P.height,s=-i,m=(B=e.draw)==null?void 0:B.genColor,u=new $,c=new Float32Array(a*4*3);let l;m&&(l=new Float32Array(a*4*3));for(let M=0;M<a;M++){const V=M/a*Math.PI*2;for(let A=0;A<4;A++){const S=Math.random()*.15-.075,J=Math.random()*(i-s)+s,Y=Math.cos(V)*(o+r/2+S+S*25*d(-1.25,1.25)),K=J,ee=Math.sin(V)*(o+r/2+S+S*25*d(-1.25,1.25)),h=(M*4+A)*3;if(l&&m){const[te,ne,oe]=$e([O.r,O.g,O.b]);l[h]=te,l[h+1]=ne,l[h+2]=oe}c[h]=Y,c[h+1]=K,c[h+2]=ee}}const g={size:{value:1},scale:{value:20},color:{value:[1,1,1]},lightPos:{value:[0,0,0]},basePos:{value:[0,0,0]},maxRad:{value:o+r/2+10},minRad:{value:-(o+r/2+10)}},f=new U({transparent:!0,uniforms:g,vertexShader:Fe,fragmentShader:ze}),b=new w(c,3);return u.setAttribute("position",b),l&&m&&u.setAttribute("color",new w(l,3)),[new Q(u,f),g]}const Ve=`uniform vec3 glowColor;
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
}`,je=`// uniform vec3 viewVector;
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
}`;function ke(e){const t=[],a=e.orbLen?e.orbLen:180;for(let s=0;s<=a;s++)t.push(new G(1*Math.sin(s*E),1*Math.cos(s*E),0));const o=new $;if(o.setFromPoints(t),o.computeBoundingBox(),o.computeVertexNormals(),!o.boundingBox)throw new Error("Bounding box can't be calculated.");const r=new U({uniforms:{bboxMin:{value:o.boundingBox.min},bboxMax:{value:o.boundingBox.max}},vertexShader:`
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
        `,transparent:!0,depthWrite:!1}),i=new de(o,r);return i.scale.x=e.orbInvert?-1:1,i.rotateY((180-a)*(e.orbInvert?-1:1)*E),i.rotateX(Math.PI*.5),i.rotateZ(Math.PI*.5),i.updateMatrixWorld(),i}function He(e,t){var s;const[n,a,o,r]=We(t),i=ke(t.draw);return e.addComponent(z,{mesh:n}).addComponent(x,x.getDefaults(o)).addComponent(C,C.getDefaults(r,(s=t.draw)==null?void 0:s.initRot)).addComponent(ge,{mesh:a}).addComponent(pe,{mesh:i}),fe(e,t),t.type==="planet"?e.addComponent(he):e.addComponent(xe),e}function We(e){var c,l,g,f;const t=v.TEX_LOAD((c=e.draw)==null?void 0:c.albedoPath);t.magFilter=H;const n=v.TEX_LOAD((l=e.draw)==null?void 0:l.normalPath);n.magFilter=H;const a=new Ce({map:t,normalMap:n}),o=new W(v.SPHERE_GEOM,a);o.castShadow=!0,o.name=`${e.name}_mesh`;const r={intensityMult:{value:(g=e.draw)==null?void 0:g.glowIntensity},glowColor:{value:new F(parseInt((f=e.draw)==null?void 0:f.glowColor))}},i=new U({uniforms:r,vertexShader:je,fragmentShader:Ve,side:ye,blending:Pe,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4}),s=new W(v.SPHERE_GEOM,i);s.name=`${e.name}_atmo`,s.scale.setScalar(1.025);const m=new q;m.name=`${e.name}_transformGrp`;const u=new q;return u.name=`${e.name}_rotGrp`,[o,s,m,u]}const qe=["moon","planet"];function Ze(e,t){v.LOAD_MANAGER.itemStart(`://${t.name}`),p.getInstance().state.DISTANCE_SCALE=3e-8,p.getInstance().state.SIZE_SCALE=1e-5,v.LOAD_MANAGER.itemStart(`://${t.name}_systems`),e.sysManager.registerSystem(Me).registerSystem(Se).registerSystem(_e).registerSystem(we).registerSystem(X).registerSystem(be).registerSystem(Ae).registerSystem(Ee),v.LOAD_MANAGER.itemEnd(`://${t.name}_systems`),v.LOAD_MANAGER.itemStart(`://${t.name}_entities`);for(const n of t.objects)n.type==="sun"&&Re(e.ecManager.createEntity(),n),qe.includes(n.type)&&(n.draw={...n.draw,initRot:d(-Math.PI,Math.PI)},He(e.ecManager.createEntity(),n)),n.type==="particlering"&&Ue(e.ecManager.createEntity(),n),n.type==="oortcloud"&&Le(e.ecManager.createEntity(),n);if(v.LOAD_MANAGER.itemEnd(`://${t.name}_entities`),v.LOAD_MANAGER.itemStart(`://${t.name}_world`),Te(e),e.load(),e.uiManager.infoPanel.init(t.texts,{name:t.name,constellation:t.constellation}),v.LOAD_MANAGER.itemEnd(`://${t.name}_world`),t.startTarget){p.getInstance().store.focusTarget=t.startTarget;const n=e.sysManager.getSystem(X);n&&(n.enabled=!0)}v.LOAD_MANAGER.itemEnd(`://${t.name}`)}export{Ze as initSystem};
