var od=Object.defineProperty;var ld=(o,e,t)=>e in o?od(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t;var ue=(o,e,t)=>(ld(o,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Zo="151",Ui={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Oi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},cd=0,El=1,ud=2,Zu=1,Qu=2,$r=3,An=0,Ht=1,sn=2,ii=0,ur=1,Al=2,Cl=3,Ll=4,hd=5,or=100,dd=101,fd=102,Pl=103,Rl=104,pd=200,md=201,gd=202,_d=203,Ju=204,$u=205,vd=206,xd=207,yd=208,Md=209,bd=210,Sd=0,wd=1,Td=2,Co=3,Ed=4,Ad=5,Cd=6,Ld=7,Qo=0,Pd=1,Rd=2,Vn=0,Dd=1,Id=2,Ud=3,Od=4,Nd=5,eh=300,pr=301,mr=302,ma=303,Lo=304,Ma=306,gr=1e3,an=1001,ga=1002,wt=1003,Po=1004,ua=1005,Ot=1006,th=1007,bi=1008,Si=1009,Fd=1010,kd=1011,nh=1012,Bd=1013,_i=1014,ti=1015,os=1016,zd=1017,Gd=1018,hr=1020,Vd=1021,on=1023,Hd=1024,Wd=1025,xi=1026,_r=1027,Xd=1028,jd=1029,qd=1030,Yd=1031,Kd=1033,za=33776,Ga=33777,Va=33778,Ha=33779,Dl=35840,Il=35841,Ul=35842,Ol=35843,Zd=36196,Nl=37492,Fl=37496,kl=37808,Bl=37809,zl=37810,Gl=37811,Vl=37812,Hl=37813,Wl=37814,Xl=37815,jl=37816,ql=37817,Yl=37818,Kl=37819,Zl=37820,Ql=37821,Wa=36492,Qd=36283,Jl=36284,$l=36285,ec=36286,ls=2300,vr=2301,Xa=2302,tc=2400,nc=2401,ic=2402,Jd=2500,$d=0,ih=1,Ro=2,wi=3e3,st=3001,ef=3200,rh=3201,Jo=0,tf=1,Tn="srgb",cs="srgb-linear",sh="display-p3",ja=7680,nf=519,Do=35044,rc="300 es",Io=1035;class Ci{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,s=i.length;r<s;r++)i[r].call(this,e);e.target=null}}}const It=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let sc=1234567;const ts=Math.PI/180,xr=180/Math.PI;function yn(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(It[o&255]+It[o>>8&255]+It[o>>16&255]+It[o>>24&255]+"-"+It[e&255]+It[e>>8&255]+"-"+It[e>>16&15|64]+It[e>>24&255]+"-"+It[t&63|128]+It[t>>8&255]+"-"+It[t>>16&255]+It[t>>24&255]+It[n&255]+It[n>>8&255]+It[n>>16&255]+It[n>>24&255]).toLowerCase()}function At(o,e,t){return Math.max(e,Math.min(t,o))}function $o(o,e){return(o%e+e)%e}function rf(o,e,t,n,i){return n+(o-e)*(i-n)/(t-e)}function sf(o,e,t){return o!==e?(t-o)/(e-o):0}function ns(o,e,t){return(1-t)*o+t*e}function af(o,e,t,n){return ns(o,e,1-Math.exp(-t*n))}function of(o,e=1){return e-Math.abs($o(o,e*2)-e)}function lf(o,e,t){return o<=e?0:o>=t?1:(o=(o-e)/(t-e),o*o*(3-2*o))}function cf(o,e,t){return o<=e?0:o>=t?1:(o=(o-e)/(t-e),o*o*o*(o*(o*6-15)+10))}function uf(o,e){return o+Math.floor(Math.random()*(e-o+1))}function hf(o,e){return o+Math.random()*(e-o)}function df(o){return o*(.5-Math.random())}function ff(o){o!==void 0&&(sc=o);let e=sc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function pf(o){return o*ts}function mf(o){return o*xr}function Uo(o){return(o&o-1)===0&&o!==0}function ah(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function oh(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function gf(o,e,t,n,i){const r=Math.cos,s=Math.sin,a=r(t/2),l=s(t/2),c=r((e+n)/2),u=s((e+n)/2),h=r((e-n)/2),d=s((e-n)/2),f=r((n-e)/2),g=s((n-e)/2);switch(i){case"XYX":o.set(a*u,l*h,l*d,a*c);break;case"YZY":o.set(l*d,a*u,l*h,a*c);break;case"ZXZ":o.set(l*h,l*d,a*u,a*c);break;case"XZX":o.set(a*u,l*g,l*f,a*c);break;case"YXY":o.set(l*f,a*u,l*g,a*c);break;case"ZYZ":o.set(l*g,l*f,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Gn(o,e){switch(e.constructor){case Float32Array:return o;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function ft(o,e){switch(e.constructor){case Float32Array:return o;case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const _f={DEG2RAD:ts,RAD2DEG:xr,generateUUID:yn,clamp:At,euclideanModulo:$o,mapLinear:rf,inverseLerp:sf,lerp:ns,damp:af,pingpong:of,smoothstep:lf,smootherstep:cf,randInt:uf,randFloat:hf,randFloatSpread:df,seededRandom:ff,degToRad:pf,radToDeg:mf,isPowerOfTwo:Uo,ceilPowerOfTwo:ah,floorPowerOfTwo:oh,setQuaternionFromProperEuler:gf,normalize:ft,denormalize:Gn};class Fe{constructor(e=0,t=0){Fe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(At(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,s=this.y-e.y;return this.x=r*n-s*i+e.x,this.y=r*i+s*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ze{constructor(){Ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,r,s,a,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=s,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,s=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],f=n[5],g=n[8],_=i[0],m=i[3],p=i[6],v=i[1],x=i[4],M=i[7],y=i[2],T=i[5],C=i[8];return r[0]=s*_+a*v+l*y,r[3]=s*m+a*x+l*T,r[6]=s*p+a*M+l*C,r[1]=c*_+u*v+h*y,r[4]=c*m+u*x+h*T,r[7]=c*p+u*M+h*C,r[2]=d*_+f*v+g*y,r[5]=d*m+f*x+g*T,r[8]=d*p+f*M+g*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],s=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*s*u-t*a*c-n*r*u+n*a*l+i*r*c-i*s*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],s=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*s-a*c,d=a*l-u*r,f=c*r-s*l,g=t*h+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(i*c-u*n)*_,e[2]=(a*n-i*s)*_,e[3]=d*_,e[4]=(u*t-i*l)*_,e[5]=(i*r-a*t)*_,e[6]=f*_,e[7]=(n*l-c*t)*_,e[8]=(s*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,s,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*s+c*a)+s+e,-i*c,i*l,-i*(-c*s+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(qa.makeScale(e,t)),this}rotate(e){return this.premultiply(qa.makeRotation(-e)),this}translate(e,t){return this.premultiply(qa.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const qa=new Ze;function lh(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function us(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function dr(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Ya(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}const vf=new Ze().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),xf=new Ze().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function yf(o){return o.convertSRGBToLinear().applyMatrix3(xf)}function Mf(o){return o.applyMatrix3(vf).convertLinearToSRGB()}const bf={[cs]:o=>o,[Tn]:o=>o.convertSRGBToLinear(),[sh]:yf},Sf={[cs]:o=>o,[Tn]:o=>o.convertLinearToSRGB(),[sh]:Mf},Zt={enabled:!1,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(o){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!o},get workingColorSpace(){return cs},set workingColorSpace(o){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(o,e,t){if(this.enabled===!1||e===t||!e||!t)return o;const n=bf[e],i=Sf[t];if(n===void 0||i===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return i(n(o))},fromWorkingColorSpace:function(o,e){return this.convert(o,this.workingColorSpace,e)},toWorkingColorSpace:function(o,e){return this.convert(o,e,this.workingColorSpace)}};let Ni;class ch{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ni===void 0&&(Ni=us("canvas")),Ni.width=e.width,Ni.height=e.height;const n=Ni.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ni}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=us("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let s=0;s<r.length;s++)r[s]=dr(r[s]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(dr(t[n]/255)*255):t[n]=dr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class uh{constructor(e=null){this.isSource=!0,this.uuid=yn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let s=0,a=i.length;s<a;s++)i[s].isDataTexture?r.push(Ka(i[s].image)):r.push(Ka(i[s]))}else r=Ka(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function Ka(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?ch.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let wf=0;class Tt extends Ci{constructor(e=Tt.DEFAULT_IMAGE,t=Tt.DEFAULT_MAPPING,n=an,i=an,r=Ot,s=bi,a=on,l=Si,c=Tt.DEFAULT_ANISOTROPY,u=wi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:wf++}),this.uuid=yn(),this.name="",this.source=new uh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=s,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Fe(0,0),this.repeat=new Fe(1,1),this.center=new Fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==eh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case gr:e.x=e.x-Math.floor(e.x);break;case an:e.x=e.x<0?0:1;break;case ga:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case gr:e.y=e.y-Math.floor(e.y);break;case an:e.y=e.y<0?0:1;break;case ga:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Tt.DEFAULT_IMAGE=null;Tt.DEFAULT_MAPPING=eh;Tt.DEFAULT_ANISOTROPY=1;class ht{constructor(e=0,t=0,n=0,i=1){ht.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i+s[12]*r,this.y=s[1]*t+s[5]*n+s[9]*i+s[13]*r,this.z=s[2]*t+s[6]*n+s[10]*i+s[14]*r,this.w=s[3]*t+s[7]*n+s[11]*i+s[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,M=(f+1)/2,y=(p+1)/2,T=(u+d)/4,C=(h+_)/4,L=(g+m)/4;return x>M&&x>y?x<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(x),i=T/n,r=C/n):M>y?M<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(M),n=T/i,r=L/i):y<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(y),n=C/r,i=L/r),this.set(n,i,r,t),this}let v=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(h-_)/v,this.z=(d-u)/v,this.w=Math.acos((c+f+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ti extends Ci{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ht(0,0,e,t),this.scissorTest=!1,this.viewport=new ht(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new Tt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Ot,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new uh(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class hh extends Tt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=wt,this.minFilter=wt,this.wrapR=an,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Tf extends Tt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=wt,this.minFilter=wt,this.wrapR=an,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class un{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,s,a){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const d=r[s+0],f=r[s+1],g=r[s+2],_=r[s+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=_;return}if(h!==_||l!==d||c!==f||u!==g){let m=1-a;const p=l*d+c*f+u*g+h*_,v=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const y=Math.sqrt(x),T=Math.atan2(y,p*v);m=Math.sin(m*T)/y,a=Math.sin(a*T)/y}const M=a*v;if(l=l*m+d*M,c=c*m+f*M,u=u*m+g*M,h=h*m+_*M,m===1-a){const y=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=y,c*=y,u*=y,h*=y}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,r,s){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=r[s],d=r[s+1],f=r[s+2],g=r[s+3];return e[t]=a*g+u*h+l*f-c*d,e[t+1]=l*g+u*d+c*h-a*f,e[t+2]=c*g+u*f+a*d-l*h,e[t+3]=u*g-a*h-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,r=e._z,s=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),h=a(r/2),d=l(n/2),f=l(i/2),g=l(r/2);switch(s){case"XYZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"YXZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"ZXY":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"ZYX":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"YZX":this._x=d*u*h+c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h-d*f*g;break;case"XZY":this._x=d*u*h-c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],s=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+a+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(s-i)*f}else if(n>a&&n>h){const f=2*Math.sqrt(1+n-a-h);this._w=(u-l)/f,this._x=.25*f,this._y=(i+s)/f,this._z=(r+c)/f}else if(a>h){const f=2*Math.sqrt(1+a-n-h);this._w=(r-c)/f,this._x=(i+s)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+h-n-a);this._w=(s-i)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(At(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,s=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+s*a+i*c-r*l,this._y=i*u+s*l+r*a-n*c,this._z=r*u+s*c+n*l-i*a,this._w=s*u-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,s=this._w;let a=s*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=s,this._x=n,this._y=i,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-t;return this._w=f*s+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=s*h+this._w*d,this._x=n*h+this._x*d,this._y=i*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(e=0,t=0,n=0){F.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ac.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ac.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,s=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*s,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*s,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*s,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,s=e.y,a=e.z,l=e.w,c=l*t+s*i-a*n,u=l*n+a*t-r*i,h=l*i+r*n-s*t,d=-r*t-s*n-a*i;return this.x=c*l+d*-r+u*-a-h*-s,this.y=u*l+d*-s+h*-r-c*-a,this.z=h*l+d*-a+c*-s-u*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,s=t.x,a=t.y,l=t.z;return this.x=i*l-r*a,this.y=r*s-n*l,this.z=n*a-i*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Za.copy(this).projectOnVector(e),this.sub(Za)}reflect(e){return this.sub(Za.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(At(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Za=new F,ac=new un;class Ln{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(On.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(On.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=On.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),Fi.copy(e.boundingBox),Fi.applyMatrix4(e.matrixWorld),this.union(Fi);else{const i=e.geometry;if(i!==void 0)if(t&&i.attributes!==void 0&&i.attributes.position!==void 0){const r=i.attributes.position;for(let s=0,a=r.count;s<a;s++)On.fromBufferAttribute(r,s).applyMatrix4(e.matrixWorld),this.expandByPoint(On)}else i.boundingBox===null&&i.computeBoundingBox(),Fi.copy(i.boundingBox),Fi.applyMatrix4(e.matrixWorld),this.union(Fi)}const n=e.children;for(let i=0,r=n.length;i<r;i++)this.expandByObject(n[i],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,On),On.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(zr),Us.subVectors(this.max,zr),ki.subVectors(e.a,zr),Bi.subVectors(e.b,zr),zi.subVectors(e.c,zr),Yn.subVectors(Bi,ki),Kn.subVectors(zi,Bi),li.subVectors(ki,zi);let t=[0,-Yn.z,Yn.y,0,-Kn.z,Kn.y,0,-li.z,li.y,Yn.z,0,-Yn.x,Kn.z,0,-Kn.x,li.z,0,-li.x,-Yn.y,Yn.x,0,-Kn.y,Kn.x,0,-li.y,li.x,0];return!Qa(t,ki,Bi,zi,Us)||(t=[1,0,0,0,1,0,0,0,1],!Qa(t,ki,Bi,zi,Us))?!1:(Os.crossVectors(Yn,Kn),t=[Os.x,Os.y,Os.z],Qa(t,ki,Bi,zi,Us))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,On).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(On).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Un[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Un[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Un[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Un[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Un[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Un[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Un[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Un[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Un),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Un=[new F,new F,new F,new F,new F,new F,new F,new F],On=new F,Fi=new Ln,ki=new F,Bi=new F,zi=new F,Yn=new F,Kn=new F,li=new F,zr=new F,Us=new F,Os=new F,ci=new F;function Qa(o,e,t,n,i){for(let r=0,s=o.length-3;r<=s;r+=3){ci.fromArray(o,r);const a=i.x*Math.abs(ci.x)+i.y*Math.abs(ci.y)+i.z*Math.abs(ci.z),l=e.dot(ci),c=t.dot(ci),u=n.dot(ci);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Ef=new Ln,Gr=new F,Ja=new F;class Pn{constructor(e=new F,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Ef.setFromPoints(e).getCenter(n);let i=0;for(let r=0,s=e.length;r<s;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Gr.subVectors(e,this.center);const t=Gr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Gr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ja.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Gr.copy(e.center).add(Ja)),this.expandByPoint(Gr.copy(e.center).sub(Ja))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Nn=new F,$a=new F,Ns=new F,Zn=new F,eo=new F,Fs=new F,to=new F;class ba{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Nn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Nn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Nn.copy(this.origin).addScaledVector(this.direction,t),Nn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){$a.copy(e).add(t).multiplyScalar(.5),Ns.copy(t).sub(e).normalize(),Zn.copy(this.origin).sub($a);const r=e.distanceTo(t)*.5,s=-this.direction.dot(Ns),a=Zn.dot(this.direction),l=-Zn.dot(Ns),c=Zn.lengthSq(),u=Math.abs(1-s*s);let h,d,f,g;if(u>0)if(h=s*l-a,d=s*a-l,g=r*u,h>=0)if(d>=-g)if(d<=g){const _=1/u;h*=_,d*=_,f=h*(h+s*d+2*a)+d*(s*h+d+2*l)+c}else d=r,h=Math.max(0,-(s*d+a)),f=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(s*d+a)),f=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-s*r+a)),d=h>0?-r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(h=Math.max(0,-(s*r+a)),d=h>0?r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c);else d=s>0?-r:r,h=Math.max(0,-(s*d+a)),f=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy($a).addScaledVector(Ns,d),f}intersectSphere(e,t){Nn.subVectors(e.center,this.origin);const n=Nn.dot(this.direction),i=Nn.dot(Nn)-n*n,r=e.radius*e.radius;if(i>r)return null;const s=Math.sqrt(r-i),a=n-s,l=n+s;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,s,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,s=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,s=(e.min.y-d.y)*u),n>s||r>i||((r>n||isNaN(n))&&(n=r),(s<i||isNaN(i))&&(i=s),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Nn)!==null}intersectTriangle(e,t,n,i,r){eo.subVectors(t,e),Fs.subVectors(n,e),to.crossVectors(eo,Fs);let s=this.direction.dot(to),a;if(s>0){if(i)return null;a=1}else if(s<0)a=-1,s=-s;else return null;Zn.subVectors(this.origin,e);const l=a*this.direction.dot(Fs.crossVectors(Zn,Fs));if(l<0)return null;const c=a*this.direction.dot(eo.cross(Zn));if(c<0||l+c>s)return null;const u=-a*Zn.dot(to);return u<0?null:this.at(u/s,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class We{constructor(){We.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,r,s,a,l,c,u,h,d,f,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=s,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new We().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Gi.setFromMatrixColumn(e,0).length(),r=1/Gi.setFromMatrixColumn(e,1).length(),s=1/Gi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*s,t[9]=n[9]*s,t[10]=n[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,s=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const d=s*u,f=s*h,g=a*u,_=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=f+g*c,t[5]=d-_*c,t[9]=-a*l,t[2]=_-d*c,t[6]=g+f*c,t[10]=s*l}else if(e.order==="YXZ"){const d=l*u,f=l*h,g=c*u,_=c*h;t[0]=d+_*a,t[4]=g*a-f,t[8]=s*c,t[1]=s*h,t[5]=s*u,t[9]=-a,t[2]=f*a-g,t[6]=_+d*a,t[10]=s*l}else if(e.order==="ZXY"){const d=l*u,f=l*h,g=c*u,_=c*h;t[0]=d-_*a,t[4]=-s*h,t[8]=g+f*a,t[1]=f+g*a,t[5]=s*u,t[9]=_-d*a,t[2]=-s*c,t[6]=a,t[10]=s*l}else if(e.order==="ZYX"){const d=s*u,f=s*h,g=a*u,_=a*h;t[0]=l*u,t[4]=g*c-f,t[8]=d*c+_,t[1]=l*h,t[5]=_*c+d,t[9]=f*c-g,t[2]=-c,t[6]=a*l,t[10]=s*l}else if(e.order==="YZX"){const d=s*l,f=s*c,g=a*l,_=a*c;t[0]=l*u,t[4]=_-d*h,t[8]=g*h+f,t[1]=h,t[5]=s*u,t[9]=-a*u,t[2]=-c*u,t[6]=f*h+g,t[10]=d-_*h}else if(e.order==="XZY"){const d=s*l,f=s*c,g=a*l,_=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+_,t[5]=s*u,t[9]=f*h-g,t[2]=g*h-f,t[6]=a*u,t[10]=_*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Af,e,Cf)}lookAt(e,t,n){const i=this.elements;return Qt.subVectors(e,t),Qt.lengthSq()===0&&(Qt.z=1),Qt.normalize(),Qn.crossVectors(n,Qt),Qn.lengthSq()===0&&(Math.abs(n.z)===1?Qt.x+=1e-4:Qt.z+=1e-4,Qt.normalize(),Qn.crossVectors(n,Qt)),Qn.normalize(),ks.crossVectors(Qt,Qn),i[0]=Qn.x,i[4]=ks.x,i[8]=Qt.x,i[1]=Qn.y,i[5]=ks.y,i[9]=Qt.y,i[2]=Qn.z,i[6]=ks.z,i[10]=Qt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,s=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],v=n[3],x=n[7],M=n[11],y=n[15],T=i[0],C=i[4],L=i[8],S=i[12],A=i[1],Z=i[5],U=i[9],R=i[13],D=i[2],B=i[6],Y=i[10],re=i[14],Q=i[3],G=i[7],K=i[11],N=i[15];return r[0]=s*T+a*A+l*D+c*Q,r[4]=s*C+a*Z+l*B+c*G,r[8]=s*L+a*U+l*Y+c*K,r[12]=s*S+a*R+l*re+c*N,r[1]=u*T+h*A+d*D+f*Q,r[5]=u*C+h*Z+d*B+f*G,r[9]=u*L+h*U+d*Y+f*K,r[13]=u*S+h*R+d*re+f*N,r[2]=g*T+_*A+m*D+p*Q,r[6]=g*C+_*Z+m*B+p*G,r[10]=g*L+_*U+m*Y+p*K,r[14]=g*S+_*R+m*re+p*N,r[3]=v*T+x*A+M*D+y*Q,r[7]=v*C+x*Z+M*B+y*G,r[11]=v*L+x*U+M*Y+y*K,r[15]=v*S+x*R+M*re+y*N,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],s=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],f=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+r*l*h-i*c*h-r*a*d+n*c*d+i*a*f-n*l*f)+_*(+t*l*f-t*c*d+r*s*d-i*s*f+i*c*u-r*l*u)+m*(+t*c*h-t*a*f-r*s*h+n*s*f+r*a*u-n*c*u)+p*(-i*a*u-t*l*h+t*a*d+i*s*h-n*s*d+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],s=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],f=e[11],g=e[12],_=e[13],m=e[14],p=e[15],v=h*m*c-_*d*c+_*l*f-a*m*f-h*l*p+a*d*p,x=g*d*c-u*m*c-g*l*f+s*m*f+u*l*p-s*d*p,M=u*_*c-g*h*c+g*a*f-s*_*f-u*a*p+s*h*p,y=g*h*l-u*_*l-g*a*d+s*_*d+u*a*m-s*h*m,T=t*v+n*x+i*M+r*y;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/T;return e[0]=v*C,e[1]=(_*d*r-h*m*r-_*i*f+n*m*f+h*i*p-n*d*p)*C,e[2]=(a*m*r-_*l*r+_*i*c-n*m*c-a*i*p+n*l*p)*C,e[3]=(h*l*r-a*d*r-h*i*c+n*d*c+a*i*f-n*l*f)*C,e[4]=x*C,e[5]=(u*m*r-g*d*r+g*i*f-t*m*f-u*i*p+t*d*p)*C,e[6]=(g*l*r-s*m*r-g*i*c+t*m*c+s*i*p-t*l*p)*C,e[7]=(s*d*r-u*l*r+u*i*c-t*d*c-s*i*f+t*l*f)*C,e[8]=M*C,e[9]=(g*h*r-u*_*r-g*n*f+t*_*f+u*n*p-t*h*p)*C,e[10]=(s*_*r-g*a*r+g*n*c-t*_*c-s*n*p+t*a*p)*C,e[11]=(u*a*r-s*h*r-u*n*c+t*h*c+s*n*f-t*a*f)*C,e[12]=y*C,e[13]=(u*_*i-g*h*i+g*n*d-t*_*d-u*n*m+t*h*m)*C,e[14]=(g*a*i-s*_*i-g*n*l+t*_*l+s*n*m-t*a*m)*C,e[15]=(s*h*i-u*a*i+u*n*l-t*h*l-s*n*d+t*a*d)*C,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,s=e.x,a=e.y,l=e.z,c=r*s,u=r*a;return this.set(c*s+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*s,0,c*l-i*a,u*l+i*s,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,s){return this.set(1,n,r,0,e,1,s,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,s=t._y,a=t._z,l=t._w,c=r+r,u=s+s,h=a+a,d=r*c,f=r*u,g=r*h,_=s*u,m=s*h,p=a*h,v=l*c,x=l*u,M=l*h,y=n.x,T=n.y,C=n.z;return i[0]=(1-(_+p))*y,i[1]=(f+M)*y,i[2]=(g-x)*y,i[3]=0,i[4]=(f-M)*T,i[5]=(1-(d+p))*T,i[6]=(m+v)*T,i[7]=0,i[8]=(g+x)*C,i[9]=(m-v)*C,i[10]=(1-(d+_))*C,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=Gi.set(i[0],i[1],i[2]).length();const s=Gi.set(i[4],i[5],i[6]).length(),a=Gi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],gn.copy(this);const c=1/r,u=1/s,h=1/a;return gn.elements[0]*=c,gn.elements[1]*=c,gn.elements[2]*=c,gn.elements[4]*=u,gn.elements[5]*=u,gn.elements[6]*=u,gn.elements[8]*=h,gn.elements[9]*=h,gn.elements[10]*=h,t.setFromRotationMatrix(gn),n.x=r,n.y=s,n.z=a,this}makePerspective(e,t,n,i,r,s){const a=this.elements,l=2*r/(t-e),c=2*r/(n-i),u=(t+e)/(t-e),h=(n+i)/(n-i),d=-(s+r)/(s-r),f=-2*s*r/(s-r);return a[0]=l,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=c,a[9]=h,a[13]=0,a[2]=0,a[6]=0,a[10]=d,a[14]=f,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,i,r,s){const a=this.elements,l=1/(t-e),c=1/(n-i),u=1/(s-r),h=(t+e)*l,d=(n+i)*c,f=(s+r)*u;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-h,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-d,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-f,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Gi=new F,gn=new We,Af=new F(0,0,0),Cf=new F(1,1,1),Qn=new F,ks=new F,Qt=new F,oc=new We,lc=new un;class Sa{constructor(e=0,t=0,n=0,i=Sa.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],s=i[4],a=i[8],l=i[1],c=i[5],u=i[9],h=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(At(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-s,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-At(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(At(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-At(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(At(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-At(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return oc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(oc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return lc.setFromEuler(this),this.setFromQuaternion(lc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Sa.DEFAULT_ORDER="XYZ";class el{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Lf=0;const cc=new F,Vi=new un,Fn=new We,Bs=new F,Vr=new F,Pf=new F,Rf=new un,uc=new F(1,0,0),hc=new F(0,1,0),dc=new F(0,0,1),Df={type:"added"},fc={type:"removed"};class mt extends Ci{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Lf++}),this.uuid=yn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=mt.DEFAULT_UP.clone();const e=new F,t=new Sa,n=new un,i=new F(1,1,1);function r(){n.setFromEuler(t,!1)}function s(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new We},normalMatrix:{value:new Ze}}),this.matrix=new We,this.matrixWorld=new We,this.matrixAutoUpdate=mt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new el,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Vi.setFromAxisAngle(e,t),this.quaternion.multiply(Vi),this}rotateOnWorldAxis(e,t){return Vi.setFromAxisAngle(e,t),this.quaternion.premultiply(Vi),this}rotateX(e){return this.rotateOnAxis(uc,e)}rotateY(e){return this.rotateOnAxis(hc,e)}rotateZ(e){return this.rotateOnAxis(dc,e)}translateOnAxis(e,t){return cc.copy(e).applyQuaternion(this.quaternion),this.position.add(cc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(uc,e)}translateY(e){return this.translateOnAxis(hc,e)}translateZ(e){return this.translateOnAxis(dc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Fn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Bs.copy(e):Bs.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Vr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fn.lookAt(Vr,Bs,this.up):Fn.lookAt(Bs,Vr,this.up),this.quaternion.setFromRotationMatrix(Fn),i&&(Fn.extractRotation(i.matrixWorld),Vi.setFromRotationMatrix(Fn),this.quaternion.premultiply(Vi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Df)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(fc)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(fc)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Fn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Fn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Fn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const s=this.children[n].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,r=this.children.length;i<r;i++){const s=this.children[i].getObjectsByProperty(e,t);s.length>0&&(n=n.concat(s))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vr,e,Pf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vr,Rf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,s=i.length;r<s;r++){const a=i[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(e.animations,l))}}if(t){const a=s(e.geometries),l=s(e.materials),c=s(e.textures),u=s(e.images),h=s(e.shapes),d=s(e.skeletons),f=s(e.animations),g=s(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function s(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}mt.DEFAULT_UP=new F(0,1,0);mt.DEFAULT_MATRIX_AUTO_UPDATE=!0;mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const _n=new F,kn=new F,no=new F,Bn=new F,Hi=new F,Wi=new F,pc=new F,io=new F,ro=new F,so=new F;let zs=!1;class rn{constructor(e=new F,t=new F,n=new F){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),_n.subVectors(e,t),i.cross(_n);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){_n.subVectors(i,t),kn.subVectors(n,t),no.subVectors(e,t);const s=_n.dot(_n),a=_n.dot(kn),l=_n.dot(no),c=kn.dot(kn),u=kn.dot(no),h=s*c-a*a;if(h===0)return r.set(-2,-1,-1);const d=1/h,f=(c*l-a*u)*d,g=(s*u-a*l)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Bn),Bn.x>=0&&Bn.y>=0&&Bn.x+Bn.y<=1}static getUV(e,t,n,i,r,s,a,l){return zs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),zs=!0),this.getInterpolation(e,t,n,i,r,s,a,l)}static getInterpolation(e,t,n,i,r,s,a,l){return this.getBarycoord(e,t,n,i,Bn),l.setScalar(0),l.addScaledVector(r,Bn.x),l.addScaledVector(s,Bn.y),l.addScaledVector(a,Bn.z),l}static isFrontFacing(e,t,n,i){return _n.subVectors(n,t),kn.subVectors(e,t),_n.cross(kn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return _n.subVectors(this.c,this.b),kn.subVectors(this.a,this.b),_n.cross(kn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return rn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return rn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return zs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),zs=!0),rn.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}getInterpolation(e,t,n,i,r){return rn.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return rn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return rn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let s,a;Hi.subVectors(i,n),Wi.subVectors(r,n),io.subVectors(e,n);const l=Hi.dot(io),c=Wi.dot(io);if(l<=0&&c<=0)return t.copy(n);ro.subVectors(e,i);const u=Hi.dot(ro),h=Wi.dot(ro);if(u>=0&&h<=u)return t.copy(i);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return s=l/(l-u),t.copy(n).addScaledVector(Hi,s);so.subVectors(e,r);const f=Hi.dot(so),g=Wi.dot(so);if(g>=0&&f<=g)return t.copy(r);const _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(Wi,a);const m=u*g-f*h;if(m<=0&&h-u>=0&&f-g>=0)return pc.subVectors(r,i),a=(h-u)/(h-u+(f-g)),t.copy(i).addScaledVector(pc,a);const p=1/(m+_+d);return s=_*p,a=d*p,t.copy(n).addScaledVector(Hi,s).addScaledVector(Wi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let If=0;class ln extends Ci{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:If++}),this.uuid=yn(),this.name="",this.type="Material",this.blending=ur,this.side=An,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Ju,this.blendDst=$u,this.blendEquation=or,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Co,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=nf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ja,this.stencilZFail=ja,this.stencilZPass=ja,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ur&&(n.blending=this.blending),this.side!==An&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const s=[];for(const a in r){const l=r[a];delete l.metadata,s.push(l)}return s}if(t){const r=i(e.textures),s=i(e.images);r.length>0&&(n.textures=r),s.length>0&&(n.images=s)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const dh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},vn={h:0,s:0,l:0},Gs={h:0,s:0,l:0};function ao(o,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?o+(e-o)*6*t:t<1/2?e:t<2/3?o+(e-o)*6*(2/3-t):o}class ze{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Tn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Zt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Zt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Zt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Zt.workingColorSpace){if(e=$o(e,1),t=At(t,0,1),n=At(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,s=2*n-r;this.r=ao(s,r,e+1/3),this.g=ao(s,r,e),this.b=ao(s,r,e-1/3)}return Zt.toWorkingColorSpace(this,i),this}setStyle(e,t=Tn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const s=i[1],a=i[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,Zt.toWorkingColorSpace(this,t),n(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,Zt.toWorkingColorSpace(this,t),n(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(r[1])/360,c=parseFloat(r[2])/100,u=parseFloat(r[3])/100;return n(r[4]),this.setHSL(l,c,u,t)}break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],s=r.length;if(s===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Tn){const n=dh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=dr(e.r),this.g=dr(e.g),this.b=dr(e.b),this}copyLinearToSRGB(e){return this.r=Ya(e.r),this.g=Ya(e.g),this.b=Ya(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Tn){return Zt.fromWorkingColorSpace(Ut.copy(this),e),At(Ut.r*255,0,255)<<16^At(Ut.g*255,0,255)<<8^At(Ut.b*255,0,255)<<0}getHexString(e=Tn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Zt.workingColorSpace){Zt.fromWorkingColorSpace(Ut.copy(this),t);const n=Ut.r,i=Ut.g,r=Ut.b,s=Math.max(n,i,r),a=Math.min(n,i,r);let l,c;const u=(a+s)/2;if(a===s)l=0,c=0;else{const h=s-a;switch(c=u<=.5?h/(s+a):h/(2-s-a),s){case n:l=(i-r)/h+(i<r?6:0);break;case i:l=(r-n)/h+2;break;case r:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Zt.workingColorSpace){return Zt.fromWorkingColorSpace(Ut.copy(this),t),e.r=Ut.r,e.g=Ut.g,e.b=Ut.b,e}getStyle(e=Tn){Zt.fromWorkingColorSpace(Ut.copy(this),e);const t=Ut.r,n=Ut.g,i=Ut.b;return e!==Tn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${t*255|0},${n*255|0},${i*255|0})`}offsetHSL(e,t,n){return this.getHSL(vn),vn.h+=e,vn.s+=t,vn.l+=n,this.setHSL(vn.h,vn.s,vn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(vn),e.getHSL(Gs);const n=ns(vn.h,Gs.h,t),i=ns(vn.s,Gs.s,t),r=ns(vn.l,Gs.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ut=new ze;ze.NAMES=dh;class ni extends ln{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Qo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const vt=new F,Vs=new Fe;class Wt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Do,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Vs.fromBufferAttribute(this,t),Vs.applyMatrix3(e),this.setXY(t,Vs.x,Vs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix3(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix4(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.applyNormalMatrix(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.transformDirection(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Gn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Gn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Gn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Gn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array),i=ft(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array),i=ft(i,this.array),r=ft(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Do&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class fh extends Wt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class ph extends Wt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class $t extends Wt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Uf=0;const en=new We,oo=new mt,Xi=new F,Jt=new Ln,Hr=new Ln,St=new F;class Xt extends Ci{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Uf++}),this.uuid=yn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(lh(e)?ph:fh)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ze().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return en.makeRotationFromQuaternion(e),this.applyMatrix4(en),this}rotateX(e){return en.makeRotationX(e),this.applyMatrix4(en),this}rotateY(e){return en.makeRotationY(e),this.applyMatrix4(en),this}rotateZ(e){return en.makeRotationZ(e),this.applyMatrix4(en),this}translate(e,t,n){return en.makeTranslation(e,t,n),this.applyMatrix4(en),this}scale(e,t,n){return en.makeScale(e,t,n),this.applyMatrix4(en),this}lookAt(e){return oo.lookAt(e),oo.updateMatrix(),this.applyMatrix4(oo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xi).negate(),this.translate(Xi.x,Xi.y,Xi.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new $t(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ln);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];Jt.setFromBufferAttribute(r),this.morphTargetsRelative?(St.addVectors(this.boundingBox.min,Jt.min),this.boundingBox.expandByPoint(St),St.addVectors(this.boundingBox.max,Jt.max),this.boundingBox.expandByPoint(St)):(this.boundingBox.expandByPoint(Jt.min),this.boundingBox.expandByPoint(Jt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Pn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new F,1/0);return}if(e){const n=this.boundingSphere.center;if(Jt.setFromBufferAttribute(e),t)for(let r=0,s=t.length;r<s;r++){const a=t[r];Hr.setFromBufferAttribute(a),this.morphTargetsRelative?(St.addVectors(Jt.min,Hr.min),Jt.expandByPoint(St),St.addVectors(Jt.max,Hr.max),Jt.expandByPoint(St)):(Jt.expandByPoint(Hr.min),Jt.expandByPoint(Hr.max))}Jt.getCenter(n);let i=0;for(let r=0,s=e.count;r<s;r++)St.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(St));if(t)for(let r=0,s=t.length;r<s;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)St.fromBufferAttribute(a,c),l&&(Xi.fromBufferAttribute(e,c),St.add(Xi)),i=Math.max(i,n.distanceToSquared(St))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,r=t.normal.array,s=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Wt(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let A=0;A<a;A++)c[A]=new F,u[A]=new F;const h=new F,d=new F,f=new F,g=new Fe,_=new Fe,m=new Fe,p=new F,v=new F;function x(A,Z,U){h.fromArray(i,A*3),d.fromArray(i,Z*3),f.fromArray(i,U*3),g.fromArray(s,A*2),_.fromArray(s,Z*2),m.fromArray(s,U*2),d.sub(h),f.sub(h),_.sub(g),m.sub(g);const R=1/(_.x*m.y-m.x*_.y);isFinite(R)&&(p.copy(d).multiplyScalar(m.y).addScaledVector(f,-_.y).multiplyScalar(R),v.copy(f).multiplyScalar(_.x).addScaledVector(d,-m.x).multiplyScalar(R),c[A].add(p),c[Z].add(p),c[U].add(p),u[A].add(v),u[Z].add(v),u[U].add(v))}let M=this.groups;M.length===0&&(M=[{start:0,count:n.length}]);for(let A=0,Z=M.length;A<Z;++A){const U=M[A],R=U.start,D=U.count;for(let B=R,Y=R+D;B<Y;B+=3)x(n[B+0],n[B+1],n[B+2])}const y=new F,T=new F,C=new F,L=new F;function S(A){C.fromArray(r,A*3),L.copy(C);const Z=c[A];y.copy(Z),y.sub(C.multiplyScalar(C.dot(Z))).normalize(),T.crossVectors(L,Z);const R=T.dot(u[A])<0?-1:1;l[A*4]=y.x,l[A*4+1]=y.y,l[A*4+2]=y.z,l[A*4+3]=R}for(let A=0,Z=M.length;A<Z;++A){const U=M[A],R=U.start,D=U.count;for(let B=R,Y=R+D;B<Y;B+=3)S(n[B+0]),S(n[B+1]),S(n[B+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Wt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new F,r=new F,s=new F,a=new F,l=new F,c=new F,u=new F,h=new F;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,m),u.subVectors(s,r),h.subVectors(i,r),u.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),s.fromBufferAttribute(t,d+2),u.subVectors(s,r),h.subVectors(i,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)St.fromBufferAttribute(e,t),St.normalize(),e.setXYZ(t,St.x,St.y,St.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u);let f=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*u;for(let p=0;p<u;p++)d[g++]=c[f++]}return new Wt(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Xt,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){const d=c[u],f=e(d,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let a=0,l=s.length;a<l;a++){const c=s[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const f=c[h];u.push(f.toJSON(e.data))}u.length>0&&(i[l]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,u=s.length;c<u;c++){const h=s[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const mc=new We,Sn=new ba,Hs=new Pn,gc=new F,ji=new F,qi=new F,Yi=new F,lo=new F,Ws=new F,Xs=new Fe,js=new Fe,qs=new Fe,_c=new F,vc=new F,xc=new F,Ys=new F,Ks=new F;class Ft extends mt{constructor(e=new Xt,t=new ni){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,s=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(r&&a){Ws.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],h=r[l];u!==0&&(lo.fromBufferAttribute(h,e),s?Ws.addScaledVector(lo,u):Ws.addScaledVector(lo.sub(t),u))}t.add(Ws)}return this.isSkinnedMesh&&this.applyBoneTransform(e,t),t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Hs.copy(n.boundingSphere),Hs.applyMatrix4(r),Sn.copy(e.ray).recast(e.near),Hs.containsPoint(Sn.origin)===!1&&(Sn.intersectSphere(Hs,gc)===null||Sn.origin.distanceToSquared(gc)>(e.far-e.near)**2))||(mc.copy(r).invert(),Sn.copy(e.ray).applyMatrix4(mc),n.boundingBox!==null&&Sn.intersectsBox(n.boundingBox)===!1))return;let s;const a=n.index,l=n.attributes.position,c=n.attributes.uv,u=n.attributes.uv2,h=n.attributes.normal,d=n.groups,f=n.drawRange;if(a!==null)if(Array.isArray(i))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=i[m.materialIndex],v=Math.max(m.start,f.start),x=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let M=v,y=x;M<y;M+=3){const T=a.getX(M),C=a.getX(M+1),L=a.getX(M+2);s=Zs(this,p,e,Sn,c,u,h,T,C,L),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const v=a.getX(m),x=a.getX(m+1),M=a.getX(m+2);s=Zs(this,i,e,Sn,c,u,h,v,x,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(i))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=i[m.materialIndex],v=Math.max(m.start,f.start),x=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let M=v,y=x;M<y;M+=3){const T=M,C=M+1,L=M+2;s=Zs(this,p,e,Sn,c,u,h,T,C,L),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const v=m,x=m+1,M=m+2;s=Zs(this,i,e,Sn,c,u,h,v,x,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function Of(o,e,t,n,i,r,s,a){let l;if(e.side===Ht?l=n.intersectTriangle(s,r,i,!0,a):l=n.intersectTriangle(i,r,s,e.side===An,a),l===null)return null;Ks.copy(a),Ks.applyMatrix4(o.matrixWorld);const c=t.ray.origin.distanceTo(Ks);return c<t.near||c>t.far?null:{distance:c,point:Ks.clone(),object:o}}function Zs(o,e,t,n,i,r,s,a,l,c){o.getVertexPosition(a,ji),o.getVertexPosition(l,qi),o.getVertexPosition(c,Yi);const u=Of(o,e,t,n,ji,qi,Yi,Ys);if(u){i&&(Xs.fromBufferAttribute(i,a),js.fromBufferAttribute(i,l),qs.fromBufferAttribute(i,c),u.uv=rn.getInterpolation(Ys,ji,qi,Yi,Xs,js,qs,new Fe)),r&&(Xs.fromBufferAttribute(r,a),js.fromBufferAttribute(r,l),qs.fromBufferAttribute(r,c),u.uv2=rn.getInterpolation(Ys,ji,qi,Yi,Xs,js,qs,new Fe)),s&&(_c.fromBufferAttribute(s,a),vc.fromBufferAttribute(s,l),xc.fromBufferAttribute(s,c),u.normal=rn.getInterpolation(Ys,ji,qi,Yi,_c,vc,xc,new F),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new F,materialIndex:0};rn.getNormal(ji,qi,Yi,h.normal),u.face=h}return u}class gs extends Xt{constructor(e=1,t=1,n=1,i=1,r=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:s};const a=this;i=Math.floor(i),r=Math.floor(r),s=Math.floor(s);const l=[],c=[],u=[],h=[];let d=0,f=0;g("z","y","x",-1,-1,n,t,e,s,r,0),g("z","y","x",1,-1,n,t,-e,s,r,1),g("x","z","y",1,1,e,n,t,i,s,2),g("x","z","y",1,-1,e,n,-t,i,s,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new $t(c,3)),this.setAttribute("normal",new $t(u,3)),this.setAttribute("uv",new $t(h,2));function g(_,m,p,v,x,M,y,T,C,L,S){const A=M/C,Z=y/L,U=M/2,R=y/2,D=T/2,B=C+1,Y=L+1;let re=0,Q=0;const G=new F;for(let K=0;K<Y;K++){const N=K*Z-R;for(let W=0;W<B;W++){const k=W*A-U;G[_]=k*v,G[m]=N*x,G[p]=D,c.push(G.x,G.y,G.z),G[_]=0,G[m]=0,G[p]=T>0?1:-1,u.push(G.x,G.y,G.z),h.push(W/C),h.push(1-K/L),re+=1}}for(let K=0;K<L;K++)for(let N=0;N<C;N++){const W=d+N+B*K,k=d+N+B*(K+1),z=d+(N+1)+B*(K+1),H=d+(N+1)+B*K;l.push(W,k,H),l.push(k,z,H),Q+=6}a.addGroup(f,Q,S),f+=Q,d+=re}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function yr(o){const e={};for(const t in o){e[t]={};for(const n in o[t]){const i=o[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Vt(o){const e={};for(let t=0;t<o.length;t++){const n=yr(o[t]);for(const i in n)e[i]=n[i]}return e}function Nf(o){const e=[];for(let t=0;t<o.length;t++)e.push(o[t].clone());return e}function mh(o){return o.getRenderTarget()===null&&o.outputEncoding===st?Tn:cs}const gh={clone:yr,merge:Vt};var Ff=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,kf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ri extends ln{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ff,this.fragmentShader=kf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=yr(e.uniforms),this.uniformsGroups=Nf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const s=this.uniforms[i].value;s&&s.isTexture?t.uniforms[i]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[i]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[i]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[i]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[i]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[i]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[i]={type:"m4",value:s.toArray()}:t.uniforms[i]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class _h extends mt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new We,this.projectionMatrix=new We,this.projectionMatrixInverse=new We}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Nt extends _h{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=xr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ts*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return xr*2*Math.atan(Math.tan(ts*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ts*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;r+=s.offsetX*i/l,t-=s.offsetY*n/c,i*=s.width/l,n*=s.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ki=-90,Zi=1;class Bf extends mt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new Nt(Ki,Zi,e,t);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const r=new Nt(Ki,Zi,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(-1,0,0),this.add(r);const s=new Nt(Ki,Zi,e,t);s.layers=this.layers,s.up.set(0,0,-1),s.lookAt(0,1,0),this.add(s);const a=new Nt(Ki,Zi,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const l=new Nt(Ki,Zi,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new Nt(Ki,Zi,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,r,s,a,l,c]=this.children,u=e.getRenderTarget(),h=e.toneMapping,d=e.xr.enabled;e.toneMapping=Vn,e.xr.enabled=!1;const f=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,r),e.setRenderTarget(n,2),e.render(t,s),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=f,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=h,e.xr.enabled=d,n.texture.needsPMREMUpdate=!0}}class vh extends Tt{constructor(e,t,n,i,r,s,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:pr,super(e,t,n,i,r,s,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class zf extends Ti{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new vh(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ot}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new gs(5,5,5),r=new ri({name:"CubemapFromEquirect",uniforms:yr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ht,blending:ii});r.uniforms.tEquirect.value=t;const s=new Ft(i,r),a=t.minFilter;return t.minFilter===bi&&(t.minFilter=Ot),new Bf(1,10,this).update(e,s),t.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,n,i);e.setRenderTarget(r)}}const co=new F,Gf=new F,Vf=new Ze;class di{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=co.subVectors(n,t).cross(Gf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(co),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Vf.getNormalMatrix(e),i=this.coplanarPoint(co).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ui=new Pn,Qs=new F;class tl{constructor(e=new di,t=new di,n=new di,i=new di,r=new di,s=new di){this.planes=[e,t,n,i,r,s]}set(e,t,n,i,r,s){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(s),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],r=n[1],s=n[2],a=n[3],l=n[4],c=n[5],u=n[6],h=n[7],d=n[8],f=n[9],g=n[10],_=n[11],m=n[12],p=n[13],v=n[14],x=n[15];return t[0].setComponents(a-i,h-l,_-d,x-m).normalize(),t[1].setComponents(a+i,h+l,_+d,x+m).normalize(),t[2].setComponents(a+r,h+c,_+f,x+p).normalize(),t[3].setComponents(a-r,h-c,_-f,x-p).normalize(),t[4].setComponents(a-s,h-u,_-g,x-v).normalize(),t[5].setComponents(a+s,h+u,_+g,x+v).normalize(),this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ui.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ui.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ui)}intersectsSprite(e){return ui.center.set(0,0,0),ui.radius=.7071067811865476,ui.applyMatrix4(e.matrixWorld),this.intersectsSphere(ui)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Qs.x=i.normal.x>0?e.max.x:e.min.x,Qs.y=i.normal.y>0?e.max.y:e.min.y,Qs.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Qs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function xh(){let o=null,e=!1,t=null,n=null;function i(r,s){t(r,s),n=o.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=o.requestAnimationFrame(i),e=!0)},stop:function(){o.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){o=r}}}function Hf(o,e){const t=e.isWebGL2,n=new WeakMap;function i(c,u){const h=c.array,d=c.usage,f=o.createBuffer();o.bindBuffer(u,f),o.bufferData(u,h,d),c.onUploadCallback();let g;if(h instanceof Float32Array)g=5126;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(h instanceof Int16Array)g=5122;else if(h instanceof Uint32Array)g=5125;else if(h instanceof Int32Array)g=5124;else if(h instanceof Int8Array)g=5120;else if(h instanceof Uint8Array)g=5121;else if(h instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:f,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function r(c,u,h){const d=u.array,f=u.updateRange;o.bindBuffer(h,c),f.count===-1?o.bufferSubData(h,0,d):(t?o.bufferSubData(h,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):o.bufferSubData(h,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1),u.onUploadCallback()}function s(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(o.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h===void 0?n.set(c,i(c,u)):h.version<c.version&&(r(h.buffer,c,u),h.version=c.version)}return{get:s,remove:a,update:l}}class wr extends Xt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,s=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,h=e/a,d=t/l,f=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const v=p*d-s;for(let x=0;x<c;x++){const M=x*h-r;g.push(M,-v,0),_.push(0,0,1),m.push(x/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let v=0;v<a;v++){const x=v+c*p,M=v+c*(p+1),y=v+1+c*(p+1),T=v+1+c*p;f.push(x,M,T),f.push(M,y,T)}this.setIndex(f),this.setAttribute("position",new $t(g,3)),this.setAttribute("normal",new $t(_,3)),this.setAttribute("uv",new $t(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wr(e.width,e.height,e.widthSegments,e.heightSegments)}}var Wf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Xf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jf=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,qf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Yf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Kf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Zf="vec3 transformed = vec3( position );",Qf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Jf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,$f=`#ifdef USE_IRIDESCENCE
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
		float R21 = R12;
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
#endif`,ep=`#ifdef USE_BUMPMAP
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
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,tp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,np=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ip=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,rp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,sp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ap=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,op=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,lp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,cp=`#define PI 3.141592653589793
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,up=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
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
#endif`,hp=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,dp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,fp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,pp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,mp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,gp="gl_FragColor = linearToOutputTexel( gl_FragColor );",_p=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,vp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,xp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,yp=`#ifdef USE_ENVMAP
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
#endif`,Mp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,bp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Sp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,wp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Tp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ep=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ap=`#ifdef USE_GRADIENTMAP
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
}`,Cp=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Lp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Pp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Rp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Dp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
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
#endif`,Ip=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,Up=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Op=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Np=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Fp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,kp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif`,Bp=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
		vec3 iridescenceF0;
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
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
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
	vec3 f0 = material.specularColor;
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
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,zp=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometry, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Gp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Vp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Hp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Wp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,jp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,qp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Yp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Kp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Zp=`#if defined( USE_POINTS_UV )
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
#endif`,Qp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Jp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$p=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,em=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,tm=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,nm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,im=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
#ifdef USE_NORMALMAP_TANGENTSPACE
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal, vNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,rm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,sm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,am=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,om=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,lm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
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
#endif`,cm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,um=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,hm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,dm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,fm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,pm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,mm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,gm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,_m=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,vm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,xm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ym=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Mm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,bm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Sm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,wm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Tm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Em=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Am=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Cm=`#ifdef USE_SKINNING
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
#endif`,Lm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Pm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Rm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Dm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Im=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,Um=`#ifdef USE_TRANSMISSION
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
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, vec2 fullSize, float lod ) {
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
		
		vec2 lodFudge = pow( 1.95, lod ) / fullSize;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec2 fullSize = vec2( textureSize( sampler, 0 ) );
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), fullSize, floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), fullSize, ceil( lod ) );
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
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,Om=`#ifdef USE_UV
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
#endif`,Nm=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_UV2
	attribute vec2 uv2;
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
#endif`,Fm=`#ifdef USE_UV
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
#endif`,km=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Bm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,zm=`uniform sampler2D t2D;
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
	#include <encodings_fragment>
}`,Gm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Hm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Xm=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,jm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,qm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,Ym=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Km=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Zm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Qm=`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Jm=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$m=`#include <common>
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
	#include <morphcolor_vertex>
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
}`,eg=`uniform vec3 diffuse;
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
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
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
}`,ng=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ig=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,rg=`#define MATCAP
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
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,ag=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,og=`#define PHONG
varying vec3 vViewPosition;
#include <common>
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
}`,lg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
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
	#include <morphcolor_vertex>
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
}`,ug=`#define STANDARD
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
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hg=`#define TOON
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,dg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fg=`uniform float size;
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
}`,pg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,mg=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
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
}`,gg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
	#include <encodings_fragment>
	#include <fog_fragment>
}`,_g=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,vg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Xe={alphamap_fragment:Wf,alphamap_pars_fragment:Xf,alphatest_fragment:jf,alphatest_pars_fragment:qf,aomap_fragment:Yf,aomap_pars_fragment:Kf,begin_vertex:Zf,beginnormal_vertex:Qf,bsdfs:Jf,iridescence_fragment:$f,bumpmap_pars_fragment:ep,clipping_planes_fragment:tp,clipping_planes_pars_fragment:np,clipping_planes_pars_vertex:ip,clipping_planes_vertex:rp,color_fragment:sp,color_pars_fragment:ap,color_pars_vertex:op,color_vertex:lp,common:cp,cube_uv_reflection_fragment:up,defaultnormal_vertex:hp,displacementmap_pars_vertex:dp,displacementmap_vertex:fp,emissivemap_fragment:pp,emissivemap_pars_fragment:mp,encodings_fragment:gp,encodings_pars_fragment:_p,envmap_fragment:vp,envmap_common_pars_fragment:xp,envmap_pars_fragment:yp,envmap_pars_vertex:Mp,envmap_physical_pars_fragment:Ip,envmap_vertex:bp,fog_vertex:Sp,fog_pars_vertex:wp,fog_fragment:Tp,fog_pars_fragment:Ep,gradientmap_pars_fragment:Ap,lightmap_fragment:Cp,lightmap_pars_fragment:Lp,lights_lambert_fragment:Pp,lights_lambert_pars_fragment:Rp,lights_pars_begin:Dp,lights_toon_fragment:Up,lights_toon_pars_fragment:Op,lights_phong_fragment:Np,lights_phong_pars_fragment:Fp,lights_physical_fragment:kp,lights_physical_pars_fragment:Bp,lights_fragment_begin:zp,lights_fragment_maps:Gp,lights_fragment_end:Vp,logdepthbuf_fragment:Hp,logdepthbuf_pars_fragment:Wp,logdepthbuf_pars_vertex:Xp,logdepthbuf_vertex:jp,map_fragment:qp,map_pars_fragment:Yp,map_particle_fragment:Kp,map_particle_pars_fragment:Zp,metalnessmap_fragment:Qp,metalnessmap_pars_fragment:Jp,morphcolor_vertex:$p,morphnormal_vertex:em,morphtarget_pars_vertex:tm,morphtarget_vertex:nm,normal_fragment_begin:im,normal_fragment_maps:rm,normal_pars_fragment:sm,normal_pars_vertex:am,normal_vertex:om,normalmap_pars_fragment:lm,clearcoat_normal_fragment_begin:cm,clearcoat_normal_fragment_maps:um,clearcoat_pars_fragment:hm,iridescence_pars_fragment:dm,output_fragment:fm,packing:pm,premultiplied_alpha_fragment:mm,project_vertex:gm,dithering_fragment:_m,dithering_pars_fragment:vm,roughnessmap_fragment:xm,roughnessmap_pars_fragment:ym,shadowmap_pars_fragment:Mm,shadowmap_pars_vertex:bm,shadowmap_vertex:Sm,shadowmask_pars_fragment:wm,skinbase_vertex:Tm,skinning_pars_vertex:Em,skinning_vertex:Am,skinnormal_vertex:Cm,specularmap_fragment:Lm,specularmap_pars_fragment:Pm,tonemapping_fragment:Rm,tonemapping_pars_fragment:Dm,transmission_fragment:Im,transmission_pars_fragment:Um,uv_pars_fragment:Om,uv_pars_vertex:Nm,uv_vertex:Fm,worldpos_vertex:km,background_vert:Bm,background_frag:zm,backgroundCube_vert:Gm,backgroundCube_frag:Vm,cube_vert:Hm,cube_frag:Wm,depth_vert:Xm,depth_frag:jm,distanceRGBA_vert:qm,distanceRGBA_frag:Ym,equirect_vert:Km,equirect_frag:Zm,linedashed_vert:Qm,linedashed_frag:Jm,meshbasic_vert:$m,meshbasic_frag:eg,meshlambert_vert:tg,meshlambert_frag:ng,meshmatcap_vert:ig,meshmatcap_frag:rg,meshnormal_vert:sg,meshnormal_frag:ag,meshphong_vert:og,meshphong_frag:lg,meshphysical_vert:cg,meshphysical_frag:ug,meshtoon_vert:hg,meshtoon_frag:dg,points_vert:fg,points_frag:pg,shadow_vert:mg,shadow_frag:gg,sprite_vert:_g,sprite_frag:vg},Ce={common:{diffuse:{value:new ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ze}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ze},normalScale:{value:new Fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Ze}},sprite:{diffuse:{value:new ze(16777215)},opacity:{value:1},center:{value:new Fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaTest:{value:0}}},En={basic:{uniforms:Vt([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:Vt([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new ze(0)}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:Vt([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new ze(0)},specular:{value:new ze(1118481)},shininess:{value:30}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:Vt([Ce.common,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.roughnessmap,Ce.metalnessmap,Ce.fog,Ce.lights,{emissive:{value:new ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:Vt([Ce.common,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.gradientmap,Ce.fog,Ce.lights,{emissive:{value:new ze(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:Vt([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:Vt([Ce.points,Ce.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:Vt([Ce.common,Ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:Vt([Ce.common,Ce.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:Vt([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:Vt([Ce.sprite,Ce.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distanceRGBA:{uniforms:Vt([Ce.common,Ce.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distanceRGBA_vert,fragmentShader:Xe.distanceRGBA_frag},shadow:{uniforms:Vt([Ce.lights,Ce.fog,{color:{value:new ze(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};En.physical={uniforms:Vt([En.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ze},clearcoatNormalScale:{value:new Fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ze},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ze},sheen:{value:0},sheenColor:{value:new ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ze},transmissionSamplerSize:{value:new Fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ze},attenuationDistance:{value:0},attenuationColor:{value:new ze(0)},specularColor:{value:new ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ze}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};const Js={r:0,b:0,g:0};function xg(o,e,t,n,i,r,s){const a=new ze(0);let l=r===!0?0:1,c,u,h=null,d=0,f=null;function g(m,p){let v=!1,x=p.isScene===!0?p.background:null;x&&x.isTexture&&(x=(p.backgroundBlurriness>0?t:e).get(x));const M=o.xr,y=M.getSession&&M.getSession();y&&y.environmentBlendMode==="additive"&&(x=null),x===null?_(a,l):x&&x.isColor&&(_(x,1),v=!0),(o.autoClear||v)&&o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Ma)?(u===void 0&&(u=new Ft(new gs(1,1,1),new ri({name:"BackgroundCubeMaterial",uniforms:yr(En.backgroundCube.uniforms),vertexShader:En.backgroundCube.vertexShader,fragmentShader:En.backgroundCube.fragmentShader,side:Ht,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,C,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,u.material.toneMapped=x.encoding!==st,(h!==x||d!==x.version||f!==o.toneMapping)&&(u.material.needsUpdate=!0,h=x,d=x.version,f=o.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new Ft(new wr(2,2),new ri({name:"BackgroundMaterial",uniforms:yr(En.background.uniforms),vertexShader:En.background.vertexShader,fragmentShader:En.background.fragmentShader,side:An,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=x.encoding!==st,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||d!==x.version||f!==o.toneMapping)&&(c.material.needsUpdate=!0,h=x,d=x.version,f=o.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function _(m,p){m.getRGB(Js,mh(o)),n.buffers.color.setClear(Js.r,Js.g,Js.b,p,s)}return{getClearColor:function(){return a},setClearColor:function(m,p=1){a.set(m),l=p,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,_(a,l)},render:g}}function yg(o,e,t,n){const i=o.getParameter(34921),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),s=n.isWebGL2||r!==null,a={},l=m(null);let c=l,u=!1;function h(D,B,Y,re,Q){let G=!1;if(s){const K=_(re,Y,B);c!==K&&(c=K,f(c.object)),G=p(D,re,Y,Q),G&&v(D,re,Y,Q)}else{const K=B.wireframe===!0;(c.geometry!==re.id||c.program!==Y.id||c.wireframe!==K)&&(c.geometry=re.id,c.program=Y.id,c.wireframe=K,G=!0)}Q!==null&&t.update(Q,34963),(G||u)&&(u=!1,L(D,B,Y,re),Q!==null&&o.bindBuffer(34963,t.get(Q).buffer))}function d(){return n.isWebGL2?o.createVertexArray():r.createVertexArrayOES()}function f(D){return n.isWebGL2?o.bindVertexArray(D):r.bindVertexArrayOES(D)}function g(D){return n.isWebGL2?o.deleteVertexArray(D):r.deleteVertexArrayOES(D)}function _(D,B,Y){const re=Y.wireframe===!0;let Q=a[D.id];Q===void 0&&(Q={},a[D.id]=Q);let G=Q[B.id];G===void 0&&(G={},Q[B.id]=G);let K=G[re];return K===void 0&&(K=m(d()),G[re]=K),K}function m(D){const B=[],Y=[],re=[];for(let Q=0;Q<i;Q++)B[Q]=0,Y[Q]=0,re[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:Y,attributeDivisors:re,object:D,attributes:{},index:null}}function p(D,B,Y,re){const Q=c.attributes,G=B.attributes;let K=0;const N=Y.getAttributes();for(const W in N)if(N[W].location>=0){const z=Q[W];let H=G[W];if(H===void 0&&(W==="instanceMatrix"&&D.instanceMatrix&&(H=D.instanceMatrix),W==="instanceColor"&&D.instanceColor&&(H=D.instanceColor)),z===void 0||z.attribute!==H||H&&z.data!==H.data)return!0;K++}return c.attributesNum!==K||c.index!==re}function v(D,B,Y,re){const Q={},G=B.attributes;let K=0;const N=Y.getAttributes();for(const W in N)if(N[W].location>=0){let z=G[W];z===void 0&&(W==="instanceMatrix"&&D.instanceMatrix&&(z=D.instanceMatrix),W==="instanceColor"&&D.instanceColor&&(z=D.instanceColor));const H={};H.attribute=z,z&&z.data&&(H.data=z.data),Q[W]=H,K++}c.attributes=Q,c.attributesNum=K,c.index=re}function x(){const D=c.newAttributes;for(let B=0,Y=D.length;B<Y;B++)D[B]=0}function M(D){y(D,0)}function y(D,B){const Y=c.newAttributes,re=c.enabledAttributes,Q=c.attributeDivisors;Y[D]=1,re[D]===0&&(o.enableVertexAttribArray(D),re[D]=1),Q[D]!==B&&((n.isWebGL2?o:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,B),Q[D]=B)}function T(){const D=c.newAttributes,B=c.enabledAttributes;for(let Y=0,re=B.length;Y<re;Y++)B[Y]!==D[Y]&&(o.disableVertexAttribArray(Y),B[Y]=0)}function C(D,B,Y,re,Q,G){n.isWebGL2===!0&&(Y===5124||Y===5125)?o.vertexAttribIPointer(D,B,Y,Q,G):o.vertexAttribPointer(D,B,Y,re,Q,G)}function L(D,B,Y,re){if(n.isWebGL2===!1&&(D.isInstancedMesh||re.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const Q=re.attributes,G=Y.getAttributes(),K=B.defaultAttributeValues;for(const N in G){const W=G[N];if(W.location>=0){let k=Q[N];if(k===void 0&&(N==="instanceMatrix"&&D.instanceMatrix&&(k=D.instanceMatrix),N==="instanceColor"&&D.instanceColor&&(k=D.instanceColor)),k!==void 0){const z=k.normalized,H=k.itemSize,ee=t.get(k);if(ee===void 0)continue;const I=ee.buffer,ie=ee.type,he=ee.bytesPerElement;if(k.isInterleavedBufferAttribute){const se=k.data,le=se.stride,oe=k.offset;if(se.isInstancedInterleavedBuffer){for(let ye=0;ye<W.locationSize;ye++)y(W.location+ye,se.meshPerAttribute);D.isInstancedMesh!==!0&&re._maxInstanceCount===void 0&&(re._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let ye=0;ye<W.locationSize;ye++)M(W.location+ye);o.bindBuffer(34962,I);for(let ye=0;ye<W.locationSize;ye++)C(W.location+ye,H/W.locationSize,ie,z,le*he,(oe+H/W.locationSize*ye)*he)}else{if(k.isInstancedBufferAttribute){for(let se=0;se<W.locationSize;se++)y(W.location+se,k.meshPerAttribute);D.isInstancedMesh!==!0&&re._maxInstanceCount===void 0&&(re._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let se=0;se<W.locationSize;se++)M(W.location+se);o.bindBuffer(34962,I);for(let se=0;se<W.locationSize;se++)C(W.location+se,H/W.locationSize,ie,z,H*he,H/W.locationSize*se*he)}}else if(K!==void 0){const z=K[N];if(z!==void 0)switch(z.length){case 2:o.vertexAttrib2fv(W.location,z);break;case 3:o.vertexAttrib3fv(W.location,z);break;case 4:o.vertexAttrib4fv(W.location,z);break;default:o.vertexAttrib1fv(W.location,z)}}}}T()}function S(){U();for(const D in a){const B=a[D];for(const Y in B){const re=B[Y];for(const Q in re)g(re[Q].object),delete re[Q];delete B[Y]}delete a[D]}}function A(D){if(a[D.id]===void 0)return;const B=a[D.id];for(const Y in B){const re=B[Y];for(const Q in re)g(re[Q].object),delete re[Q];delete B[Y]}delete a[D.id]}function Z(D){for(const B in a){const Y=a[B];if(Y[D.id]===void 0)continue;const re=Y[D.id];for(const Q in re)g(re[Q].object),delete re[Q];delete Y[D.id]}}function U(){R(),u=!0,c!==l&&(c=l,f(c.object))}function R(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:U,resetDefaultState:R,dispose:S,releaseStatesOfGeometry:A,releaseStatesOfProgram:Z,initAttributes:x,enableAttribute:M,disableUnusedAttributes:T}}function Mg(o,e,t,n){const i=n.isWebGL2;let r;function s(c){r=c}function a(c,u){o.drawArrays(r,c,u),t.update(u,r,1)}function l(c,u,h){if(h===0)return;let d,f;if(i)d=o,f="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),f="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[f](r,c,u,h),t.update(u,r,h)}this.setMode=s,this.render=a,this.renderInstances=l}function bg(o,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");n=o.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(C){if(C==="highp"){if(o.getShaderPrecisionFormat(35633,36338).precision>0&&o.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";C="mediump"}return C==="mediump"&&o.getShaderPrecisionFormat(35633,36337).precision>0&&o.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const s=typeof WebGL2RenderingContext<"u"&&o.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=s||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=o.getParameter(34930),d=o.getParameter(35660),f=o.getParameter(3379),g=o.getParameter(34076),_=o.getParameter(34921),m=o.getParameter(36347),p=o.getParameter(36348),v=o.getParameter(36349),x=d>0,M=s||e.has("OES_texture_float"),y=x&&M,T=s?o.getParameter(36183):0;return{isWebGL2:s,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:v,vertexTextures:x,floatFragmentTextures:M,floatVertexTextures:y,maxSamples:T}}function Sg(o){const e=this;let t=null,n=0,i=!1,r=!1;const s=new di,a=new Ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||n!==0||i;return i=d,n=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,p=o.get(h);if(!i||g===null||g.length===0||r&&!m)r?u(null):c();else{const v=r?0:n,x=v*4;let M=p.clippingState||null;l.value=M,M=u(g,d,x,f);for(let y=0;y!==x;++y)M[y]=t[y];p.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=f+_*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,M=f;x!==_;++x,M+=4)s.copy(h[x]).applyMatrix4(v,a),s.normal.toArray(m,M),m[M+3]=s.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function wg(o){let e=new WeakMap;function t(s,a){return a===ma?s.mapping=pr:a===Lo&&(s.mapping=mr),s}function n(s){if(s&&s.isTexture&&s.isRenderTargetTexture===!1){const a=s.mapping;if(a===ma||a===Lo)if(e.has(s)){const l=e.get(s).texture;return t(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const c=new zf(l.height/2);return c.fromEquirectangularTexture(o,s),e.set(s,c),s.addEventListener("dispose",i),t(c.texture,s.mapping)}else return null}}return s}function i(s){const a=s.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class nl extends _h{constructor(e=-1,t=1,n=1,i=-1,r=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,s=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,s=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,s,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const lr=4,yc=[.125,.215,.35,.446,.526,.582],pi=20,uo=new nl,Mc=new ze;let ho=null;const fi=(1+Math.sqrt(5))/2,Qi=1/fi,bc=[new F(1,1,1),new F(-1,1,1),new F(1,1,-1),new F(-1,1,-1),new F(0,fi,Qi),new F(0,fi,-Qi),new F(Qi,0,fi),new F(-Qi,0,fi),new F(fi,Qi,0),new F(-fi,Qi,0)];class Sc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){ho=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ec(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Tc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ho),e.scissorTest=!1,$s(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===pr||e.mapping===mr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ho=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ot,minFilter:Ot,generateMipmaps:!1,type:os,format:on,encoding:wi,depthBuffer:!1},i=wc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=wc(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Tg(r)),this._blurMaterial=Eg(r,e,t)}return i}_compileMaterial(e){const t=new Ft(this._lodPlanes[0],e);this._renderer.compile(t,uo)}_sceneToCubeUV(e,t,n,i){const a=new Nt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(Mc),u.toneMapping=Vn,u.autoClear=!1;const f=new ni({name:"PMREM.Background",side:Ht,depthWrite:!1,depthTest:!1}),g=new Ft(new gs,f);let _=!1;const m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,_=!0):(f.color.copy(Mc),_=!0);for(let p=0;p<6;p++){const v=p%3;v===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):v===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const x=this._cubeSize;$s(i,v*x,p>2?x:0,x,x),u.setRenderTarget(i),_&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===pr||e.mapping===mr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ec()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Tc());const r=i?this._cubemapMaterial:this._equirectMaterial,s=new Ft(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;$s(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(s,uo)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),s=bc[(i-1)%bc.length];this._blur(e,i-1,i,r,s)}t.autoClear=n}_blur(e,t,n,i,r){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,n,i,"latitudinal",r),this._halfBlur(s,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,s,a){const l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Ft(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*pi-1),_=r/g,m=isFinite(r)?1+Math.floor(u*_):pi;m>pi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${pi}`);const p=[];let v=0;for(let C=0;C<pi;++C){const L=C/_,S=Math.exp(-L*L/2);p.push(S),C===0?v+=S:C<m&&(v+=2*S)}for(let C=0;C<p.length;C++)p[C]=p[C]/v;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=s==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-n;const M=this._sizeLods[i],y=3*M*(i>x-lr?i-x+lr:0),T=4*(this._cubeSize-M);$s(t,y,T,3*M,2*M),l.setRenderTarget(t),l.render(h,uo)}}function Tg(o){const e=[],t=[],n=[];let i=o;const r=o-lr+1+yc.length;for(let s=0;s<r;s++){const a=Math.pow(2,i);t.push(a);let l=1/a;s>o-lr?l=yc[s-o+lr-1]:s===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,g=6,_=3,m=2,p=1,v=new Float32Array(_*g*f),x=new Float32Array(m*g*f),M=new Float32Array(p*g*f);for(let T=0;T<f;T++){const C=T%3*2/3-1,L=T>2?0:-1,S=[C,L,0,C+2/3,L,0,C+2/3,L+1,0,C,L,0,C+2/3,L+1,0,C,L+1,0];v.set(S,_*g*T),x.set(d,m*g*T);const A=[T,T,T,T,T,T];M.set(A,p*g*T)}const y=new Xt;y.setAttribute("position",new Wt(v,_)),y.setAttribute("uv",new Wt(x,m)),y.setAttribute("faceIndex",new Wt(M,p)),e.push(y),i>lr&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function wc(o,e,t){const n=new Ti(o,e,t);return n.texture.mapping=Ma,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function $s(o,e,t,n,i){o.viewport.set(e,t,n,i),o.scissor.set(e,t,n,i)}function Eg(o,e,t){const n=new Float32Array(pi),i=new F(0,1,0);return new ri({name:"SphericalGaussianBlur",defines:{n:pi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:il(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ii,depthTest:!1,depthWrite:!1})}function Tc(){return new ri({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:il(),fragmentShader:`

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
		`,blending:ii,depthTest:!1,depthWrite:!1})}function Ec(){return new ri({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:il(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ii,depthTest:!1,depthWrite:!1})}function il(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Ag(o){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===ma||l===Lo,u=l===pr||l===mr;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return t===null&&(t=new Sc(o)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(c&&h&&h.height>0||u&&h&&i(h)){t===null&&(t=new Sc(o));const d=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",r),d.texture}else return null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:s}}function Cg(o){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=o.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Lg(o,e,t,n){const i={},r=new WeakMap;function s(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",s),delete i[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return i[d.id]===!0||(d.addEventListener("dispose",s),i[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const g in d)e.update(d[g],34962);const f=h.morphAttributes;for(const g in f){const _=f[g];for(let m=0,p=_.length;m<p;m++)e.update(_[m],34962)}}function c(h){const d=[],f=h.index,g=h.attributes.position;let _=0;if(f!==null){const v=f.array;_=f.version;for(let x=0,M=v.length;x<M;x+=3){const y=v[x+0],T=v[x+1],C=v[x+2];d.push(y,T,T,C,C,y)}}else{const v=g.array;_=g.version;for(let x=0,M=v.length/3-1;x<M;x+=3){const y=x+0,T=x+1,C=x+2;d.push(y,T,T,C,C,y)}}const m=new(lh(d)?ph:fh)(d,1);m.version=_;const p=r.get(h);p&&e.remove(p),r.set(h,m)}function u(h){const d=r.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function Pg(o,e,t,n){const i=n.isWebGL2;let r;function s(d){r=d}let a,l;function c(d){a=d.type,l=d.bytesPerElement}function u(d,f){o.drawElements(r,f,a,d*l),t.update(f,r,1)}function h(d,f,g){if(g===0)return;let _,m;if(i)_=o,m="drawElementsInstanced";else if(_=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",_===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[m](r,f,a,d*l,g),t.update(f,r,g)}this.setMode=s,this.setIndex=c,this.render=u,this.renderInstances=h}function Rg(o){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,s,a){switch(t.calls++,s){case 4:t.triangles+=a*(r/3);break;case 1:t.lines+=a*(r/2);break;case 3:t.lines+=a*(r-1);break;case 2:t.lines+=a*r;break;case 0:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Dg(o,e){return o[0]-e[0]}function Ig(o,e){return Math.abs(e[1])-Math.abs(o[1])}function Ug(o,e,t){const n={},i=new Float32Array(8),r=new WeakMap,s=new ht,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,h){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const f=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=f!==void 0?f.length:0;let _=r.get(u);if(_===void 0||_.count!==g){let D=function(){U.dispose(),r.delete(u),u.removeEventListener("dispose",D)};_!==void 0&&_.texture.dispose();const v=u.morphAttributes.position!==void 0,x=u.morphAttributes.normal!==void 0,M=u.morphAttributes.color!==void 0,y=u.morphAttributes.position||[],T=u.morphAttributes.normal||[],C=u.morphAttributes.color||[];let L=0;v===!0&&(L=1),x===!0&&(L=2),M===!0&&(L=3);let S=u.attributes.position.count*L,A=1;S>e.maxTextureSize&&(A=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const Z=new Float32Array(S*A*4*g),U=new hh(Z,S,A,g);U.type=ti,U.needsUpdate=!0;const R=L*4;for(let B=0;B<g;B++){const Y=y[B],re=T[B],Q=C[B],G=S*A*4*B;for(let K=0;K<Y.count;K++){const N=K*R;v===!0&&(s.fromBufferAttribute(Y,K),Z[G+N+0]=s.x,Z[G+N+1]=s.y,Z[G+N+2]=s.z,Z[G+N+3]=0),x===!0&&(s.fromBufferAttribute(re,K),Z[G+N+4]=s.x,Z[G+N+5]=s.y,Z[G+N+6]=s.z,Z[G+N+7]=0),M===!0&&(s.fromBufferAttribute(Q,K),Z[G+N+8]=s.x,Z[G+N+9]=s.y,Z[G+N+10]=s.z,Z[G+N+11]=Q.itemSize===4?s.w:1)}}_={count:g,texture:U,size:new Fe(S,A)},r.set(u,_),u.addEventListener("dispose",D)}let m=0;for(let v=0;v<d.length;v++)m+=d[v];const p=u.morphTargetsRelative?1:1-m;h.getUniforms().setValue(o,"morphTargetBaseInfluence",p),h.getUniforms().setValue(o,"morphTargetInfluences",d),h.getUniforms().setValue(o,"morphTargetsTexture",_.texture,t),h.getUniforms().setValue(o,"morphTargetsTextureSize",_.size)}else{const f=d===void 0?0:d.length;let g=n[u.id];if(g===void 0||g.length!==f){g=[];for(let x=0;x<f;x++)g[x]=[x,0];n[u.id]=g}for(let x=0;x<f;x++){const M=g[x];M[0]=x,M[1]=d[x]}g.sort(Ig);for(let x=0;x<8;x++)x<f&&g[x][1]?(a[x][0]=g[x][0],a[x][1]=g[x][1]):(a[x][0]=Number.MAX_SAFE_INTEGER,a[x][1]=0);a.sort(Dg);const _=u.morphAttributes.position,m=u.morphAttributes.normal;let p=0;for(let x=0;x<8;x++){const M=a[x],y=M[0],T=M[1];y!==Number.MAX_SAFE_INTEGER&&T?(_&&u.getAttribute("morphTarget"+x)!==_[y]&&u.setAttribute("morphTarget"+x,_[y]),m&&u.getAttribute("morphNormal"+x)!==m[y]&&u.setAttribute("morphNormal"+x,m[y]),i[x]=T,p+=T):(_&&u.hasAttribute("morphTarget"+x)===!0&&u.deleteAttribute("morphTarget"+x),m&&u.hasAttribute("morphNormal"+x)===!0&&u.deleteAttribute("morphNormal"+x),i[x]=0)}const v=u.morphTargetsRelative?1:1-p;h.getUniforms().setValue(o,"morphTargetBaseInfluence",v),h.getUniforms().setValue(o,"morphTargetInfluences",i)}}return{update:l}}function Og(o,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);return i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),h}function s(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:s}}const yh=new Tt,Mh=new hh,bh=new Tf,Sh=new vh,Ac=[],Cc=[],Lc=new Float32Array(16),Pc=new Float32Array(9),Rc=new Float32Array(4);function Tr(o,e,t){const n=o[0];if(n<=0||n>0)return o;const i=e*t;let r=Ac[i];if(r===void 0&&(r=new Float32Array(i),Ac[i]=r),e!==0){n.toArray(r,0);for(let s=1,a=0;s!==e;++s)a+=t,o[s].toArray(r,a)}return r}function Mt(o,e){if(o.length!==e.length)return!1;for(let t=0,n=o.length;t<n;t++)if(o[t]!==e[t])return!1;return!0}function bt(o,e){for(let t=0,n=e.length;t<n;t++)o[t]=e[t]}function wa(o,e){let t=Cc[e];t===void 0&&(t=new Int32Array(e),Cc[e]=t);for(let n=0;n!==e;++n)t[n]=o.allocateTextureUnit();return t}function Ng(o,e){const t=this.cache;t[0]!==e&&(o.uniform1f(this.addr,e),t[0]=e)}function Fg(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;o.uniform2fv(this.addr,e),bt(t,e)}}function kg(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Mt(t,e))return;o.uniform3fv(this.addr,e),bt(t,e)}}function Bg(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;o.uniform4fv(this.addr,e),bt(t,e)}}function zg(o,e){const t=this.cache,n=e.elements;if(n===void 0){if(Mt(t,e))return;o.uniformMatrix2fv(this.addr,!1,e),bt(t,e)}else{if(Mt(t,n))return;Rc.set(n),o.uniformMatrix2fv(this.addr,!1,Rc),bt(t,n)}}function Gg(o,e){const t=this.cache,n=e.elements;if(n===void 0){if(Mt(t,e))return;o.uniformMatrix3fv(this.addr,!1,e),bt(t,e)}else{if(Mt(t,n))return;Pc.set(n),o.uniformMatrix3fv(this.addr,!1,Pc),bt(t,n)}}function Vg(o,e){const t=this.cache,n=e.elements;if(n===void 0){if(Mt(t,e))return;o.uniformMatrix4fv(this.addr,!1,e),bt(t,e)}else{if(Mt(t,n))return;Lc.set(n),o.uniformMatrix4fv(this.addr,!1,Lc),bt(t,n)}}function Hg(o,e){const t=this.cache;t[0]!==e&&(o.uniform1i(this.addr,e),t[0]=e)}function Wg(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;o.uniform2iv(this.addr,e),bt(t,e)}}function Xg(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mt(t,e))return;o.uniform3iv(this.addr,e),bt(t,e)}}function jg(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;o.uniform4iv(this.addr,e),bt(t,e)}}function qg(o,e){const t=this.cache;t[0]!==e&&(o.uniform1ui(this.addr,e),t[0]=e)}function Yg(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;o.uniform2uiv(this.addr,e),bt(t,e)}}function Kg(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mt(t,e))return;o.uniform3uiv(this.addr,e),bt(t,e)}}function Zg(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;o.uniform4uiv(this.addr,e),bt(t,e)}}function Qg(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||yh,i)}function Jg(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||bh,i)}function $g(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Sh,i)}function e0(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Mh,i)}function t0(o){switch(o){case 5126:return Ng;case 35664:return Fg;case 35665:return kg;case 35666:return Bg;case 35674:return zg;case 35675:return Gg;case 35676:return Vg;case 5124:case 35670:return Hg;case 35667:case 35671:return Wg;case 35668:case 35672:return Xg;case 35669:case 35673:return jg;case 5125:return qg;case 36294:return Yg;case 36295:return Kg;case 36296:return Zg;case 35678:case 36198:case 36298:case 36306:case 35682:return Qg;case 35679:case 36299:case 36307:return Jg;case 35680:case 36300:case 36308:case 36293:return $g;case 36289:case 36303:case 36311:case 36292:return e0}}function n0(o,e){o.uniform1fv(this.addr,e)}function i0(o,e){const t=Tr(e,this.size,2);o.uniform2fv(this.addr,t)}function r0(o,e){const t=Tr(e,this.size,3);o.uniform3fv(this.addr,t)}function s0(o,e){const t=Tr(e,this.size,4);o.uniform4fv(this.addr,t)}function a0(o,e){const t=Tr(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,t)}function o0(o,e){const t=Tr(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,t)}function l0(o,e){const t=Tr(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,t)}function c0(o,e){o.uniform1iv(this.addr,e)}function u0(o,e){o.uniform2iv(this.addr,e)}function h0(o,e){o.uniform3iv(this.addr,e)}function d0(o,e){o.uniform4iv(this.addr,e)}function f0(o,e){o.uniform1uiv(this.addr,e)}function p0(o,e){o.uniform2uiv(this.addr,e)}function m0(o,e){o.uniform3uiv(this.addr,e)}function g0(o,e){o.uniform4uiv(this.addr,e)}function _0(o,e,t){const n=this.cache,i=e.length,r=wa(t,i);Mt(n,r)||(o.uniform1iv(this.addr,r),bt(n,r));for(let s=0;s!==i;++s)t.setTexture2D(e[s]||yh,r[s])}function v0(o,e,t){const n=this.cache,i=e.length,r=wa(t,i);Mt(n,r)||(o.uniform1iv(this.addr,r),bt(n,r));for(let s=0;s!==i;++s)t.setTexture3D(e[s]||bh,r[s])}function x0(o,e,t){const n=this.cache,i=e.length,r=wa(t,i);Mt(n,r)||(o.uniform1iv(this.addr,r),bt(n,r));for(let s=0;s!==i;++s)t.setTextureCube(e[s]||Sh,r[s])}function y0(o,e,t){const n=this.cache,i=e.length,r=wa(t,i);Mt(n,r)||(o.uniform1iv(this.addr,r),bt(n,r));for(let s=0;s!==i;++s)t.setTexture2DArray(e[s]||Mh,r[s])}function M0(o){switch(o){case 5126:return n0;case 35664:return i0;case 35665:return r0;case 35666:return s0;case 35674:return a0;case 35675:return o0;case 35676:return l0;case 5124:case 35670:return c0;case 35667:case 35671:return u0;case 35668:case 35672:return h0;case 35669:case 35673:return d0;case 5125:return f0;case 36294:return p0;case 36295:return m0;case 36296:return g0;case 35678:case 36198:case 36298:case 36306:case 35682:return _0;case 35679:case 36299:case 36307:return v0;case 35680:case 36300:case 36308:case 36293:return x0;case 36289:case 36303:case 36311:case 36292:return y0}}class b0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=t0(t.type)}}class S0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=M0(t.type)}}class w0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,s=i.length;r!==s;++r){const a=i[r];a.setValue(e,t[a.id],n)}}}const fo=/(\w+)(\])?(\[|\.)?/g;function Dc(o,e){o.seq.push(e),o.map[e.id]=e}function T0(o,e,t){const n=o.name,i=n.length;for(fo.lastIndex=0;;){const r=fo.exec(n),s=fo.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&s+2===i){Dc(t,c===void 0?new b0(a,o,e):new S0(a,o,e));break}else{let h=t.map[a];h===void 0&&(h=new w0(a),Dc(t,h)),t=h}}}class ha{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),s=e.getUniformLocation(t,r.name);T0(r,s,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,s=t.length;r!==s;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const s=e[i];s.id in t&&n.push(s)}return n}}function Ic(o,e,t){const n=o.createShader(e);return o.shaderSource(n,t),o.compileShader(n),n}let E0=0;function A0(o,e){const t=o.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let s=i;s<r;s++){const a=s+1;n.push(`${a===e?">":" "} ${a}: ${t[s]}`)}return n.join(`
`)}function C0(o){switch(o){case wi:return["Linear","( value )"];case st:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",o),["Linear","( value )"]}}function Uc(o,e,t){const n=o.getShaderParameter(e,35713),i=o.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const s=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+A0(o.getShaderSource(e),s)}else return i}function L0(o,e){const t=C0(e);return"vec4 "+o+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function P0(o,e){let t;switch(e){case Dd:t="Linear";break;case Id:t="Reinhard";break;case Ud:t="OptimizedCineon";break;case Od:t="ACESFilmic";break;case Nd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+o+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function R0(o){return[o.extensionDerivatives||o.envMapCubeUVHeight||o.bumpMap||o.normalMapTangentSpace||o.clearcoatNormalMap||o.flatShading||o.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(o.extensionFragDepth||o.logarithmicDepthBuffer)&&o.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",o.extensionDrawBuffers&&o.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(o.extensionShaderTextureLOD||o.envMap||o.transmission)&&o.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(es).join(`
`)}function D0(o){const e=[];for(const t in o){const n=o[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function I0(o,e){const t={},n=o.getProgramParameter(e,35721);for(let i=0;i<n;i++){const r=o.getActiveAttrib(e,i),s=r.name;let a=1;r.type===35674&&(a=2),r.type===35675&&(a=3),r.type===35676&&(a=4),t[s]={type:r.type,location:o.getAttribLocation(e,s),locationSize:a}}return t}function es(o){return o!==""}function Oc(o,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Nc(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const U0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Oo(o){return o.replace(U0,O0)}function O0(o,e){const t=Xe[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Oo(t)}const N0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Fc(o){return o.replace(N0,F0)}function F0(o,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function kc(o){let e="precision "+o.precision+` float;
precision `+o.precision+" int;";return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function k0(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===Zu?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===Qu?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===$r&&(e="SHADOWMAP_TYPE_VSM"),e}function B0(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case pr:case mr:e="ENVMAP_TYPE_CUBE";break;case Ma:e="ENVMAP_TYPE_CUBE_UV";break}return e}function z0(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case mr:e="ENVMAP_MODE_REFRACTION";break}return e}function G0(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case Qo:e="ENVMAP_BLENDING_MULTIPLY";break;case Pd:e="ENVMAP_BLENDING_MIX";break;case Rd:e="ENVMAP_BLENDING_ADD";break}return e}function V0(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function H0(o,e,t,n){const i=o.getContext(),r=t.defines;let s=t.vertexShader,a=t.fragmentShader;const l=k0(t),c=B0(t),u=z0(t),h=G0(t),d=V0(t),f=t.isWebGL2?"":R0(t),g=D0(r),_=i.createProgram();let m,p,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=[g].filter(es).join(`
`),m.length>0&&(m+=`
`),p=[f,g].filter(es).join(`
`),p.length>0&&(p+=`
`)):(m=[kc(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs2?"#define USE_UV2":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(es).join(`
`),p=[f,kc(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs2?"#define USE_UV2":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Vn?"#define TONE_MAPPING":"",t.toneMapping!==Vn?Xe.tonemapping_pars_fragment:"",t.toneMapping!==Vn?P0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Xe.encodings_pars_fragment,L0("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(es).join(`
`)),s=Oo(s),s=Oc(s,t),s=Nc(s,t),a=Oo(a),a=Oc(a,t),a=Nc(a,t),s=Fc(s),a=Fc(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===rc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===rc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=v+m+s,M=v+p+a,y=Ic(i,35633,x),T=Ic(i,35632,M);if(i.attachShader(_,y),i.attachShader(_,T),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_),o.debug.checkShaderErrors){const S=i.getProgramInfoLog(_).trim(),A=i.getShaderInfoLog(y).trim(),Z=i.getShaderInfoLog(T).trim();let U=!0,R=!0;if(i.getProgramParameter(_,35714)===!1)if(U=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(i,_,y,T);else{const D=Uc(i,y,"vertex"),B=Uc(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,35715)+`

Program Info Log: `+S+`
`+D+`
`+B)}else S!==""?console.warn("THREE.WebGLProgram: Program Info Log:",S):(A===""||Z==="")&&(R=!1);R&&(this.diagnostics={runnable:U,programLog:S,vertexShader:{log:A,prefix:m},fragmentShader:{log:Z,prefix:p}})}i.deleteShader(y),i.deleteShader(T);let C;this.getUniforms=function(){return C===void 0&&(C=new ha(i,_)),C};let L;return this.getAttributes=function(){return L===void 0&&(L=I0(i,_)),L},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.name=t.shaderName,this.id=E0++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=y,this.fragmentShader=T,this}let W0=0;class X0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),s=this._getShaderCacheForMaterial(e);return s.has(i)===!1&&(s.add(i),i.usedTimes++),s.has(r)===!1&&(s.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new j0(e),t.set(e,n)),n}}class j0{constructor(e){this.id=W0++,this.code=e,this.usedTimes=0}}function q0(o,e,t,n,i,r,s){const a=new el,l=new X0,c=[],u=i.isWebGL2,h=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return S===1?"uv2":"uv"}function m(S,A,Z,U,R){const D=U.fog,B=R.geometry,Y=S.isMeshStandardMaterial?U.environment:null,re=(S.isMeshStandardMaterial?t:e).get(S.envMap||Y),Q=re&&re.mapping===Ma?re.image.height:null,G=g[S.type];S.precision!==null&&(f=i.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));const K=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,N=K!==void 0?K.length:0;let W=0;B.morphAttributes.position!==void 0&&(W=1),B.morphAttributes.normal!==void 0&&(W=2),B.morphAttributes.color!==void 0&&(W=3);let k,z,H,ee;if(G){const Ae=En[G];k=Ae.vertexShader,z=Ae.fragmentShader}else k=S.vertexShader,z=S.fragmentShader,l.update(S),H=l.getVertexShaderID(S),ee=l.getFragmentShaderID(S);const I=o.getRenderTarget(),ie=R.isInstancedMesh===!0,he=!!S.map,se=!!S.matcap,le=!!re,oe=!!S.aoMap,ye=!!S.lightMap,Ee=!!S.bumpMap,Me=!!S.normalMap,Te=!!S.displacementMap,Ie=!!S.emissiveMap,ge=!!S.metalnessMap,Se=!!S.roughnessMap,be=S.clearcoat>0,fe=S.iridescence>0,w=S.sheen>0,b=S.transmission>0,V=be&&!!S.clearcoatMap,J=be&&!!S.clearcoatNormalMap,ce=be&&!!S.clearcoatRoughnessMap,pe=fe&&!!S.iridescenceMap,P=fe&&!!S.iridescenceThicknessMap,$=w&&!!S.sheenColorMap,X=w&&!!S.sheenRoughnessMap,xe=!!S.specularMap,_e=!!S.specularColorMap,we=!!S.specularIntensityMap,me=b&&!!S.transmissionMap,ve=b&&!!S.thicknessMap,Le=!!S.gradientMap,Pe=!!S.alphaMap,Ve=S.alphaTest>0,O=!!S.extensions,te=!!B.attributes.uv2;return{isWebGL2:u,shaderID:G,shaderName:S.type,vertexShader:k,fragmentShader:z,defines:S.defines,customVertexShaderID:H,customFragmentShaderID:ee,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,instancing:ie,instancingColor:ie&&R.instanceColor!==null,supportsVertexTextures:d,outputEncoding:I===null?o.outputEncoding:I.isXRRenderTarget===!0?I.texture.encoding:wi,map:he,matcap:se,envMap:le,envMapMode:le&&re.mapping,envMapCubeUVHeight:Q,aoMap:oe,lightMap:ye,bumpMap:Ee,normalMap:Me,displacementMap:d&&Te,emissiveMap:Ie,normalMapObjectSpace:Me&&S.normalMapType===tf,normalMapTangentSpace:Me&&S.normalMapType===Jo,decodeVideoTexture:he&&S.map.isVideoTexture===!0&&S.map.encoding===st,metalnessMap:ge,roughnessMap:Se,clearcoat:be,clearcoatMap:V,clearcoatNormalMap:J,clearcoatRoughnessMap:ce,iridescence:fe,iridescenceMap:pe,iridescenceThicknessMap:P,sheen:w,sheenColorMap:$,sheenRoughnessMap:X,specularMap:xe,specularColorMap:_e,specularIntensityMap:we,transmission:b,transmissionMap:me,thicknessMap:ve,gradientMap:Le,opaque:S.transparent===!1&&S.blending===ur,alphaMap:Pe,alphaTest:Ve,combine:S.combine,mapUv:he&&_(S.map.channel),aoMapUv:oe&&_(S.aoMap.channel),lightMapUv:ye&&_(S.lightMap.channel),bumpMapUv:Ee&&_(S.bumpMap.channel),normalMapUv:Me&&_(S.normalMap.channel),displacementMapUv:Te&&_(S.displacementMap.channel),emissiveMapUv:Ie&&_(S.emissiveMap.channel),metalnessMapUv:ge&&_(S.metalnessMap.channel),roughnessMapUv:Se&&_(S.roughnessMap.channel),clearcoatMapUv:V&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:J&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ce&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:pe&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:P&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:$&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:X&&_(S.sheenRoughnessMap.channel),specularMapUv:xe&&_(S.specularMap.channel),specularColorMapUv:_e&&_(S.specularColorMap.channel),specularIntensityMapUv:we&&_(S.specularIntensityMap.channel),transmissionMapUv:me&&_(S.transmissionMap.channel),thicknessMapUv:ve&&_(S.thicknessMap.channel),alphaMapUv:Pe&&_(S.alphaMap.channel),vertexTangents:Me&&!!B.attributes.tangent,vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,vertexUvs2:te,pointsUvs:R.isPoints===!0&&!!B.attributes.uv&&(he||Pe),fog:!!D,useFog:S.fog===!0,fogExp2:D&&D.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:R.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:N,morphTextureStride:W,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:S.dithering,shadowMapEnabled:o.shadowMap.enabled&&Z.length>0,shadowMapType:o.shadowMap.type,toneMapping:S.toneMapped?o.toneMapping:Vn,useLegacyLights:o.useLegacyLights,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===sn,flipSided:S.side===Ht,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:O&&S.extensions.derivatives===!0,extensionFragDepth:O&&S.extensions.fragDepth===!0,extensionDrawBuffers:O&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:O&&S.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:S.customProgramCacheKey()}}function p(S){const A=[];if(S.shaderID?A.push(S.shaderID):(A.push(S.customVertexShaderID),A.push(S.customFragmentShaderID)),S.defines!==void 0)for(const Z in S.defines)A.push(Z),A.push(S.defines[Z]);return S.isRawShaderMaterial===!1&&(v(A,S),x(A,S),A.push(o.outputEncoding)),A.push(S.customProgramCacheKey),A.join()}function v(S,A){S.push(A.precision),S.push(A.outputEncoding),S.push(A.envMapMode),S.push(A.envMapCubeUVHeight),S.push(A.mapUv),S.push(A.alphaMapUv),S.push(A.lightMapUv),S.push(A.aoMapUv),S.push(A.bumpMapUv),S.push(A.normalMapUv),S.push(A.displacementMapUv),S.push(A.emissiveMapUv),S.push(A.metalnessMapUv),S.push(A.roughnessMapUv),S.push(A.clearcoatMapUv),S.push(A.clearcoatNormalMapUv),S.push(A.clearcoatRoughnessMapUv),S.push(A.iridescenceMapUv),S.push(A.iridescenceThicknessMapUv),S.push(A.sheenColorMapUv),S.push(A.sheenRoughnessMapUv),S.push(A.specularMapUv),S.push(A.specularColorMapUv),S.push(A.specularIntensityMapUv),S.push(A.transmissionMapUv),S.push(A.thicknessMapUv),S.push(A.combine),S.push(A.fogExp2),S.push(A.sizeAttenuation),S.push(A.morphTargetsCount),S.push(A.morphAttributeCount),S.push(A.numDirLights),S.push(A.numPointLights),S.push(A.numSpotLights),S.push(A.numSpotLightMaps),S.push(A.numHemiLights),S.push(A.numRectAreaLights),S.push(A.numDirLightShadows),S.push(A.numPointLightShadows),S.push(A.numSpotLightShadows),S.push(A.numSpotLightShadowsWithMaps),S.push(A.shadowMapType),S.push(A.toneMapping),S.push(A.numClippingPlanes),S.push(A.numClipIntersection),S.push(A.depthPacking)}function x(S,A){a.disableAll(),A.isWebGL2&&a.enable(0),A.supportsVertexTextures&&a.enable(1),A.instancing&&a.enable(2),A.instancingColor&&a.enable(3),A.matcap&&a.enable(4),A.envMap&&a.enable(5),A.normalMapObjectSpace&&a.enable(6),A.normalMapTangentSpace&&a.enable(7),A.clearcoat&&a.enable(8),A.iridescence&&a.enable(9),A.alphaTest&&a.enable(10),A.vertexColors&&a.enable(11),A.vertexAlphas&&a.enable(12),A.vertexUvs2&&a.enable(13),A.vertexTangents&&a.enable(14),S.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.skinning&&a.enable(4),A.morphTargets&&a.enable(5),A.morphNormals&&a.enable(6),A.morphColors&&a.enable(7),A.premultipliedAlpha&&a.enable(8),A.shadowMapEnabled&&a.enable(9),A.useLegacyLights&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.decodeVideoTexture&&a.enable(17),A.opaque&&a.enable(18),A.pointsUvs&&a.enable(19),S.push(a.mask)}function M(S){const A=g[S.type];let Z;if(A){const U=En[A];Z=gh.clone(U.uniforms)}else Z=S.uniforms;return Z}function y(S,A){let Z;for(let U=0,R=c.length;U<R;U++){const D=c[U];if(D.cacheKey===A){Z=D,++Z.usedTimes;break}}return Z===void 0&&(Z=new H0(o,A,S,r),c.push(Z)),Z}function T(S){if(--S.usedTimes===0){const A=c.indexOf(S);c[A]=c[c.length-1],c.pop(),S.destroy()}}function C(S){l.remove(S)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:M,acquireProgram:y,releaseProgram:T,releaseShaderCache:C,programs:c,dispose:L}}function Y0(){let o=new WeakMap;function e(r){let s=o.get(r);return s===void 0&&(s={},o.set(r,s)),s}function t(r){o.delete(r)}function n(r,s,a){o.get(r)[s]=a}function i(){o=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function K0(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function Bc(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function zc(){const o=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function s(h,d,f,g,_,m){let p=o[e];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},o[e]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=_,p.group=m),e++,p}function a(h,d,f,g,_,m){const p=s(h,d,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):t.push(p)}function l(h,d,f,g,_,m){const p=s(h,d,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):t.unshift(p)}function c(h,d){t.length>1&&t.sort(h||K0),n.length>1&&n.sort(d||Bc),i.length>1&&i.sort(d||Bc)}function u(){for(let h=e,d=o.length;h<d;h++){const f=o[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:u,sort:c}}function Z0(){let o=new WeakMap;function e(n,i){const r=o.get(n);let s;return r===void 0?(s=new zc,o.set(n,[s])):i>=r.length?(s=new zc,r.push(s)):s=r[i],s}function t(){o=new WeakMap}return{get:e,dispose:t}}function Q0(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new F,color:new ze};break;case"SpotLight":t={position:new F,direction:new F,color:new ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new ze,groundColor:new ze};break;case"RectAreaLight":t={color:new ze,position:new F,halfWidth:new F,halfHeight:new F};break}return o[e.id]=t,t}}}function J0(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=t,t}}}let $0=0;function e_(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function t_(o,e){const t=new Q0,n=J0(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)i.probe.push(new F);const r=new F,s=new We,a=new We;function l(u,h){let d=0,f=0,g=0;for(let Z=0;Z<9;Z++)i.probe[Z].set(0,0,0);let _=0,m=0,p=0,v=0,x=0,M=0,y=0,T=0,C=0,L=0;u.sort(e_);const S=h===!0?Math.PI:1;for(let Z=0,U=u.length;Z<U;Z++){const R=u[Z],D=R.color,B=R.intensity,Y=R.distance,re=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)d+=D.r*B*S,f+=D.g*B*S,g+=D.b*B*S;else if(R.isLightProbe)for(let Q=0;Q<9;Q++)i.probe[Q].addScaledVector(R.sh.coefficients[Q],B);else if(R.isDirectionalLight){const Q=t.get(R);if(Q.color.copy(R.color).multiplyScalar(R.intensity*S),R.castShadow){const G=R.shadow,K=n.get(R);K.shadowBias=G.bias,K.shadowNormalBias=G.normalBias,K.shadowRadius=G.radius,K.shadowMapSize=G.mapSize,i.directionalShadow[_]=K,i.directionalShadowMap[_]=re,i.directionalShadowMatrix[_]=R.shadow.matrix,M++}i.directional[_]=Q,_++}else if(R.isSpotLight){const Q=t.get(R);Q.position.setFromMatrixPosition(R.matrixWorld),Q.color.copy(D).multiplyScalar(B*S),Q.distance=Y,Q.coneCos=Math.cos(R.angle),Q.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),Q.decay=R.decay,i.spot[p]=Q;const G=R.shadow;if(R.map&&(i.spotLightMap[C]=R.map,C++,G.updateMatrices(R),R.castShadow&&L++),i.spotLightMatrix[p]=G.matrix,R.castShadow){const K=n.get(R);K.shadowBias=G.bias,K.shadowNormalBias=G.normalBias,K.shadowRadius=G.radius,K.shadowMapSize=G.mapSize,i.spotShadow[p]=K,i.spotShadowMap[p]=re,T++}p++}else if(R.isRectAreaLight){const Q=t.get(R);Q.color.copy(D).multiplyScalar(B),Q.halfWidth.set(R.width*.5,0,0),Q.halfHeight.set(0,R.height*.5,0),i.rectArea[v]=Q,v++}else if(R.isPointLight){const Q=t.get(R);if(Q.color.copy(R.color).multiplyScalar(R.intensity*S),Q.distance=R.distance,Q.decay=R.decay,R.castShadow){const G=R.shadow,K=n.get(R);K.shadowBias=G.bias,K.shadowNormalBias=G.normalBias,K.shadowRadius=G.radius,K.shadowMapSize=G.mapSize,K.shadowCameraNear=G.camera.near,K.shadowCameraFar=G.camera.far,i.pointShadow[m]=K,i.pointShadowMap[m]=re,i.pointShadowMatrix[m]=R.shadow.matrix,y++}i.point[m]=Q,m++}else if(R.isHemisphereLight){const Q=t.get(R);Q.skyColor.copy(R.color).multiplyScalar(B*S),Q.groundColor.copy(R.groundColor).multiplyScalar(B*S),i.hemi[x]=Q,x++}}v>0&&(e.isWebGL2||o.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ce.LTC_FLOAT_1,i.rectAreaLTC2=Ce.LTC_FLOAT_2):o.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=Ce.LTC_HALF_1,i.rectAreaLTC2=Ce.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=f,i.ambient[2]=g;const A=i.hash;(A.directionalLength!==_||A.pointLength!==m||A.spotLength!==p||A.rectAreaLength!==v||A.hemiLength!==x||A.numDirectionalShadows!==M||A.numPointShadows!==y||A.numSpotShadows!==T||A.numSpotMaps!==C)&&(i.directional.length=_,i.spot.length=p,i.rectArea.length=v,i.point.length=m,i.hemi.length=x,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=T,i.spotShadowMap.length=T,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=T+C-L,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=L,A.directionalLength=_,A.pointLength=m,A.spotLength=p,A.rectAreaLength=v,A.hemiLength=x,A.numDirectionalShadows=M,A.numPointShadows=y,A.numSpotShadows=T,A.numSpotMaps=C,i.version=$0++)}function c(u,h){let d=0,f=0,g=0,_=0,m=0;const p=h.matrixWorldInverse;for(let v=0,x=u.length;v<x;v++){const M=u[v];if(M.isDirectionalLight){const y=i.directional[d];y.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(p),d++}else if(M.isSpotLight){const y=i.spot[g];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(p),y.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(p),g++}else if(M.isRectAreaLight){const y=i.rectArea[_];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(p),a.identity(),s.copy(M.matrixWorld),s.premultiply(p),a.extractRotation(s),y.halfWidth.set(M.width*.5,0,0),y.halfHeight.set(0,M.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),_++}else if(M.isPointLight){const y=i.point[f];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(p),f++}else if(M.isHemisphereLight){const y=i.hemi[m];y.direction.setFromMatrixPosition(M.matrixWorld),y.direction.transformDirection(p),m++}}}return{setup:l,setupView:c,state:i}}function Gc(o,e){const t=new t_(o,e),n=[],i=[];function r(){n.length=0,i.length=0}function s(h){n.push(h)}function a(h){i.push(h)}function l(h){t.setup(n,h)}function c(h){t.setupView(n,h)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:s,pushShadow:a}}function n_(o,e){let t=new WeakMap;function n(r,s=0){const a=t.get(r);let l;return a===void 0?(l=new Gc(o,e),t.set(r,[l])):s>=a.length?(l=new Gc(o,e),a.push(l)):l=a[s],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class wh extends ln{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ef,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Th extends ln{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const i_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,r_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function s_(o,e,t){let n=new tl;const i=new Fe,r=new Fe,s=new ht,a=new wh({depthPacking:rh}),l=new Th,c={},u=t.maxTextureSize,h={[An]:Ht,[Ht]:An,[sn]:sn},d=new ri({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Fe},radius:{value:4}},vertexShader:i_,fragmentShader:r_}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Xt;g.setAttribute("position",new Wt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Ft(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Zu,this.render=function(M,y,T){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||M.length===0)return;const C=o.getRenderTarget(),L=o.getActiveCubeFace(),S=o.getActiveMipmapLevel(),A=o.state;A.setBlending(ii),A.buffers.color.setClear(1,1,1,1),A.buffers.depth.setTest(!0),A.setScissorTest(!1);for(let Z=0,U=M.length;Z<U;Z++){const R=M[Z],D=R.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",R,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;i.copy(D.mapSize);const B=D.getFrameExtents();if(i.multiply(B),r.copy(D.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/B.x),i.x=r.x*B.x,D.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/B.y),i.y=r.y*B.y,D.mapSize.y=r.y)),D.map===null){const re=this.type!==$r?{minFilter:wt,magFilter:wt}:{};D.map=new Ti(i.x,i.y,re),D.map.texture.name=R.name+".shadowMap",D.camera.updateProjectionMatrix()}o.setRenderTarget(D.map),o.clear();const Y=D.getViewportCount();for(let re=0;re<Y;re++){const Q=D.getViewport(re);s.set(r.x*Q.x,r.y*Q.y,r.x*Q.z,r.y*Q.w),A.viewport(s),D.updateMatrices(R,re),n=D.getFrustum(),x(y,T,D.camera,R,this.type)}D.isPointLightShadow!==!0&&this.type===$r&&p(D,T),D.needsUpdate=!1}m.needsUpdate=!1,o.setRenderTarget(C,L,S)};function p(M,y){const T=e.update(_);d.defines.VSM_SAMPLES!==M.blurSamples&&(d.defines.VSM_SAMPLES=M.blurSamples,f.defines.VSM_SAMPLES=M.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new Ti(i.x,i.y)),d.uniforms.shadow_pass.value=M.map.texture,d.uniforms.resolution.value=M.mapSize,d.uniforms.radius.value=M.radius,o.setRenderTarget(M.mapPass),o.clear(),o.renderBufferDirect(y,null,T,d,_,null),f.uniforms.shadow_pass.value=M.mapPass.texture,f.uniforms.resolution.value=M.mapSize,f.uniforms.radius.value=M.radius,o.setRenderTarget(M.map),o.clear(),o.renderBufferDirect(y,null,T,f,_,null)}function v(M,y,T,C){let L=null;const S=T.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(S!==void 0)L=S;else if(L=T.isPointLight===!0?l:a,o.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0||y.map&&y.alphaTest>0){const A=L.uuid,Z=y.uuid;let U=c[A];U===void 0&&(U={},c[A]=U);let R=U[Z];R===void 0&&(R=L.clone(),U[Z]=R),L=R}if(L.visible=y.visible,L.wireframe=y.wireframe,C===$r?L.side=y.shadowSide!==null?y.shadowSide:y.side:L.side=y.shadowSide!==null?y.shadowSide:h[y.side],L.alphaMap=y.alphaMap,L.alphaTest=y.alphaTest,L.map=y.map,L.clipShadows=y.clipShadows,L.clippingPlanes=y.clippingPlanes,L.clipIntersection=y.clipIntersection,L.displacementMap=y.displacementMap,L.displacementScale=y.displacementScale,L.displacementBias=y.displacementBias,L.wireframeLinewidth=y.wireframeLinewidth,L.linewidth=y.linewidth,T.isPointLight===!0&&L.isMeshDistanceMaterial===!0){const A=o.properties.get(L);A.light=T}return L}function x(M,y,T,C,L){if(M.visible===!1)return;if(M.layers.test(y.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&L===$r)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,M.matrixWorld);const Z=e.update(M),U=M.material;if(Array.isArray(U)){const R=Z.groups;for(let D=0,B=R.length;D<B;D++){const Y=R[D],re=U[Y.materialIndex];if(re&&re.visible){const Q=v(M,re,C,L);o.renderBufferDirect(T,null,Z,Q,M,Y)}}}else if(U.visible){const R=v(M,U,C,L);o.renderBufferDirect(T,null,Z,R,M,null)}}const A=M.children;for(let Z=0,U=A.length;Z<U;Z++)x(A[Z],y,T,C,L)}}function a_(o,e,t){const n=t.isWebGL2;function i(){let O=!1;const te=new ht;let de=null;const Ae=new ht(0,0,0,0);return{setMask:function(Ue){de!==Ue&&!O&&(o.colorMask(Ue,Ue,Ue,Ue),de=Ue)},setLocked:function(Ue){O=Ue},setClear:function(Ue,Je,Ye,at,rt){rt===!0&&(Ue*=at,Je*=at,Ye*=at),te.set(Ue,Je,Ye,at),Ae.equals(te)===!1&&(o.clearColor(Ue,Je,Ye,at),Ae.copy(te))},reset:function(){O=!1,de=null,Ae.set(-1,0,0,0)}}}function r(){let O=!1,te=null,de=null,Ae=null;return{setTest:function(Ue){Ue?I(2929):ie(2929)},setMask:function(Ue){te!==Ue&&!O&&(o.depthMask(Ue),te=Ue)},setFunc:function(Ue){if(de!==Ue){switch(Ue){case Sd:o.depthFunc(512);break;case wd:o.depthFunc(519);break;case Td:o.depthFunc(513);break;case Co:o.depthFunc(515);break;case Ed:o.depthFunc(514);break;case Ad:o.depthFunc(518);break;case Cd:o.depthFunc(516);break;case Ld:o.depthFunc(517);break;default:o.depthFunc(515)}de=Ue}},setLocked:function(Ue){O=Ue},setClear:function(Ue){Ae!==Ue&&(o.clearDepth(Ue),Ae=Ue)},reset:function(){O=!1,te=null,de=null,Ae=null}}}function s(){let O=!1,te=null,de=null,Ae=null,Ue=null,Je=null,Ye=null,at=null,rt=null;return{setTest:function(dt){O||(dt?I(2960):ie(2960))},setMask:function(dt){te!==dt&&!O&&(o.stencilMask(dt),te=dt)},setFunc:function(dt,$e,nt){(de!==dt||Ae!==$e||Ue!==nt)&&(o.stencilFunc(dt,$e,nt),de=dt,Ae=$e,Ue=nt)},setOp:function(dt,$e,nt){(Je!==dt||Ye!==$e||at!==nt)&&(o.stencilOp(dt,$e,nt),Je=dt,Ye=$e,at=nt)},setLocked:function(dt){O=dt},setClear:function(dt){rt!==dt&&(o.clearStencil(dt),rt=dt)},reset:function(){O=!1,te=null,de=null,Ae=null,Ue=null,Je=null,Ye=null,at=null,rt=null}}}const a=new i,l=new r,c=new s,u=new WeakMap,h=new WeakMap;let d={},f={},g=new WeakMap,_=[],m=null,p=!1,v=null,x=null,M=null,y=null,T=null,C=null,L=null,S=!1,A=null,Z=null,U=null,R=null,D=null;const B=o.getParameter(35661);let Y=!1,re=0;const Q=o.getParameter(7938);Q.indexOf("WebGL")!==-1?(re=parseFloat(/^WebGL (\d)/.exec(Q)[1]),Y=re>=1):Q.indexOf("OpenGL ES")!==-1&&(re=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),Y=re>=2);let G=null,K={};const N=o.getParameter(3088),W=o.getParameter(2978),k=new ht().fromArray(N),z=new ht().fromArray(W);function H(O,te,de){const Ae=new Uint8Array(4),Ue=o.createTexture();o.bindTexture(O,Ue),o.texParameteri(O,10241,9728),o.texParameteri(O,10240,9728);for(let Je=0;Je<de;Je++)o.texImage2D(te+Je,0,6408,1,1,0,6408,5121,Ae);return Ue}const ee={};ee[3553]=H(3553,3553,1),ee[34067]=H(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),I(2929),l.setFunc(Co),Te(!1),Ie(El),I(2884),Ee(ii);function I(O){d[O]!==!0&&(o.enable(O),d[O]=!0)}function ie(O){d[O]!==!1&&(o.disable(O),d[O]=!1)}function he(O,te){return f[O]!==te?(o.bindFramebuffer(O,te),f[O]=te,n&&(O===36009&&(f[36160]=te),O===36160&&(f[36009]=te)),!0):!1}function se(O,te){let de=_,Ae=!1;if(O)if(de=g.get(te),de===void 0&&(de=[],g.set(te,de)),O.isWebGLMultipleRenderTargets){const Ue=O.texture;if(de.length!==Ue.length||de[0]!==36064){for(let Je=0,Ye=Ue.length;Je<Ye;Je++)de[Je]=36064+Je;de.length=Ue.length,Ae=!0}}else de[0]!==36064&&(de[0]=36064,Ae=!0);else de[0]!==1029&&(de[0]=1029,Ae=!0);Ae&&(t.isWebGL2?o.drawBuffers(de):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(de))}function le(O){return m!==O?(o.useProgram(O),m=O,!0):!1}const oe={[or]:32774,[dd]:32778,[fd]:32779};if(n)oe[Pl]=32775,oe[Rl]=32776;else{const O=e.get("EXT_blend_minmax");O!==null&&(oe[Pl]=O.MIN_EXT,oe[Rl]=O.MAX_EXT)}const ye={[pd]:0,[md]:1,[gd]:768,[Ju]:770,[bd]:776,[yd]:774,[vd]:772,[_d]:769,[$u]:771,[Md]:775,[xd]:773};function Ee(O,te,de,Ae,Ue,Je,Ye,at){if(O===ii){p===!0&&(ie(3042),p=!1);return}if(p===!1&&(I(3042),p=!0),O!==hd){if(O!==v||at!==S){if((x!==or||T!==or)&&(o.blendEquation(32774),x=or,T=or),at)switch(O){case ur:o.blendFuncSeparate(1,771,1,771);break;case Al:o.blendFunc(1,1);break;case Cl:o.blendFuncSeparate(0,769,0,1);break;case Ll:o.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case ur:o.blendFuncSeparate(770,771,1,771);break;case Al:o.blendFunc(770,1);break;case Cl:o.blendFuncSeparate(0,769,0,1);break;case Ll:o.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}M=null,y=null,C=null,L=null,v=O,S=at}return}Ue=Ue||te,Je=Je||de,Ye=Ye||Ae,(te!==x||Ue!==T)&&(o.blendEquationSeparate(oe[te],oe[Ue]),x=te,T=Ue),(de!==M||Ae!==y||Je!==C||Ye!==L)&&(o.blendFuncSeparate(ye[de],ye[Ae],ye[Je],ye[Ye]),M=de,y=Ae,C=Je,L=Ye),v=O,S=!1}function Me(O,te){O.side===sn?ie(2884):I(2884);let de=O.side===Ht;te&&(de=!de),Te(de),O.blending===ur&&O.transparent===!1?Ee(ii):Ee(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.premultipliedAlpha),l.setFunc(O.depthFunc),l.setTest(O.depthTest),l.setMask(O.depthWrite),a.setMask(O.colorWrite);const Ae=O.stencilWrite;c.setTest(Ae),Ae&&(c.setMask(O.stencilWriteMask),c.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),c.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Se(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?I(32926):ie(32926)}function Te(O){A!==O&&(O?o.frontFace(2304):o.frontFace(2305),A=O)}function Ie(O){O!==cd?(I(2884),O!==Z&&(O===El?o.cullFace(1029):O===ud?o.cullFace(1028):o.cullFace(1032))):ie(2884),Z=O}function ge(O){O!==U&&(Y&&o.lineWidth(O),U=O)}function Se(O,te,de){O?(I(32823),(R!==te||D!==de)&&(o.polygonOffset(te,de),R=te,D=de)):ie(32823)}function be(O){O?I(3089):ie(3089)}function fe(O){O===void 0&&(O=33984+B-1),G!==O&&(o.activeTexture(O),G=O)}function w(O,te,de){de===void 0&&(G===null?de=33984+B-1:de=G);let Ae=K[de];Ae===void 0&&(Ae={type:void 0,texture:void 0},K[de]=Ae),(Ae.type!==O||Ae.texture!==te)&&(G!==de&&(o.activeTexture(de),G=de),o.bindTexture(O,te||ee[O]),Ae.type=O,Ae.texture=te)}function b(){const O=K[G];O!==void 0&&O.type!==void 0&&(o.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function V(){try{o.compressedTexImage2D.apply(o,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function J(){try{o.compressedTexImage3D.apply(o,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ce(){try{o.texSubImage2D.apply(o,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function pe(){try{o.texSubImage3D.apply(o,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function P(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function $(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function X(){try{o.texStorage2D.apply(o,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function xe(){try{o.texStorage3D.apply(o,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function _e(){try{o.texImage2D.apply(o,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function we(){try{o.texImage3D.apply(o,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function me(O){k.equals(O)===!1&&(o.scissor(O.x,O.y,O.z,O.w),k.copy(O))}function ve(O){z.equals(O)===!1&&(o.viewport(O.x,O.y,O.z,O.w),z.copy(O))}function Le(O,te){let de=h.get(te);de===void 0&&(de=new WeakMap,h.set(te,de));let Ae=de.get(O);Ae===void 0&&(Ae=o.getUniformBlockIndex(te,O.name),de.set(O,Ae))}function Pe(O,te){const Ae=h.get(te).get(O);u.get(te)!==Ae&&(o.uniformBlockBinding(te,Ae,O.__bindingPointIndex),u.set(te,Ae))}function Ve(){o.disable(3042),o.disable(2884),o.disable(2929),o.disable(32823),o.disable(3089),o.disable(2960),o.disable(32926),o.blendEquation(32774),o.blendFunc(1,0),o.blendFuncSeparate(1,0,1,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(513),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(519,0,4294967295),o.stencilOp(7680,7680,7680),o.clearStencil(0),o.cullFace(1029),o.frontFace(2305),o.polygonOffset(0,0),o.activeTexture(33984),o.bindFramebuffer(36160,null),n===!0&&(o.bindFramebuffer(36009,null),o.bindFramebuffer(36008,null)),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),d={},G=null,K={},f={},g=new WeakMap,_=[],m=null,p=!1,v=null,x=null,M=null,y=null,T=null,C=null,L=null,S=!1,A=null,Z=null,U=null,R=null,D=null,k.set(0,0,o.canvas.width,o.canvas.height),z.set(0,0,o.canvas.width,o.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:I,disable:ie,bindFramebuffer:he,drawBuffers:se,useProgram:le,setBlending:Ee,setMaterial:Me,setFlipSided:Te,setCullFace:Ie,setLineWidth:ge,setPolygonOffset:Se,setScissorTest:be,activeTexture:fe,bindTexture:w,unbindTexture:b,compressedTexImage2D:V,compressedTexImage3D:J,texImage2D:_e,texImage3D:we,updateUBOMapping:Le,uniformBlockBinding:Pe,texStorage2D:X,texStorage3D:xe,texSubImage2D:ce,texSubImage3D:pe,compressedTexSubImage2D:P,compressedTexSubImage3D:$,scissor:me,viewport:ve,reset:Ve}}function o_(o,e,t,n,i,r,s){const a=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,u=i.maxTextureSize,h=i.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let _;const m=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(w,b){return p?new OffscreenCanvas(w,b):us("canvas")}function x(w,b,V,J){let ce=1;if((w.width>J||w.height>J)&&(ce=J/Math.max(w.width,w.height)),ce<1||b===!0)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap){const pe=b?oh:Math.floor,P=pe(ce*w.width),$=pe(ce*w.height);_===void 0&&(_=v(P,$));const X=V?v(P,$):_;return X.width=P,X.height=$,X.getContext("2d").drawImage(w,0,0,P,$),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+w.width+"x"+w.height+") to ("+P+"x"+$+")."),X}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+w.width+"x"+w.height+")."),w;return w}function M(w){return Uo(w.width)&&Uo(w.height)}function y(w){return a?!1:w.wrapS!==an||w.wrapT!==an||w.minFilter!==wt&&w.minFilter!==Ot}function T(w,b){return w.generateMipmaps&&b&&w.minFilter!==wt&&w.minFilter!==Ot}function C(w){o.generateMipmap(w)}function L(w,b,V,J,ce=!1){if(a===!1)return b;if(w!==null){if(o[w]!==void 0)return o[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let pe=b;return b===6403&&(V===5126&&(pe=33326),V===5131&&(pe=33325),V===5121&&(pe=33321)),b===33319&&(V===5126&&(pe=33328),V===5131&&(pe=33327),V===5121&&(pe=33323)),b===6408&&(V===5126&&(pe=34836),V===5131&&(pe=34842),V===5121&&(pe=J===st&&ce===!1?35907:32856),V===32819&&(pe=32854),V===32820&&(pe=32855)),(pe===33325||pe===33326||pe===33327||pe===33328||pe===34842||pe===34836)&&e.get("EXT_color_buffer_float"),pe}function S(w,b,V){return T(w,V)===!0||w.isFramebufferTexture&&w.minFilter!==wt&&w.minFilter!==Ot?Math.log2(Math.max(b.width,b.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?b.mipmaps.length:1}function A(w){return w===wt||w===Po||w===ua?9728:9729}function Z(w){const b=w.target;b.removeEventListener("dispose",Z),R(b),b.isVideoTexture&&g.delete(b)}function U(w){const b=w.target;b.removeEventListener("dispose",U),B(b)}function R(w){const b=n.get(w);if(b.__webglInit===void 0)return;const V=w.source,J=m.get(V);if(J){const ce=J[b.__cacheKey];ce.usedTimes--,ce.usedTimes===0&&D(w),Object.keys(J).length===0&&m.delete(V)}n.remove(w)}function D(w){const b=n.get(w);o.deleteTexture(b.__webglTexture);const V=w.source,J=m.get(V);delete J[b.__cacheKey],s.memory.textures--}function B(w){const b=w.texture,V=n.get(w),J=n.get(b);if(J.__webglTexture!==void 0&&(o.deleteTexture(J.__webglTexture),s.memory.textures--),w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let ce=0;ce<6;ce++)o.deleteFramebuffer(V.__webglFramebuffer[ce]),V.__webglDepthbuffer&&o.deleteRenderbuffer(V.__webglDepthbuffer[ce]);else{if(o.deleteFramebuffer(V.__webglFramebuffer),V.__webglDepthbuffer&&o.deleteRenderbuffer(V.__webglDepthbuffer),V.__webglMultisampledFramebuffer&&o.deleteFramebuffer(V.__webglMultisampledFramebuffer),V.__webglColorRenderbuffer)for(let ce=0;ce<V.__webglColorRenderbuffer.length;ce++)V.__webglColorRenderbuffer[ce]&&o.deleteRenderbuffer(V.__webglColorRenderbuffer[ce]);V.__webglDepthRenderbuffer&&o.deleteRenderbuffer(V.__webglDepthRenderbuffer)}if(w.isWebGLMultipleRenderTargets)for(let ce=0,pe=b.length;ce<pe;ce++){const P=n.get(b[ce]);P.__webglTexture&&(o.deleteTexture(P.__webglTexture),s.memory.textures--),n.remove(b[ce])}n.remove(b),n.remove(w)}let Y=0;function re(){Y=0}function Q(){const w=Y;return w>=l&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+l),Y+=1,w}function G(w){const b=[];return b.push(w.wrapS),b.push(w.wrapT),b.push(w.wrapR||0),b.push(w.magFilter),b.push(w.minFilter),b.push(w.anisotropy),b.push(w.internalFormat),b.push(w.format),b.push(w.type),b.push(w.generateMipmaps),b.push(w.premultiplyAlpha),b.push(w.flipY),b.push(w.unpackAlignment),b.push(w.encoding),b.join()}function K(w,b){const V=n.get(w);if(w.isVideoTexture&&be(w),w.isRenderTargetTexture===!1&&w.version>0&&V.__version!==w.version){const J=w.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ie(V,w,b);return}}t.bindTexture(3553,V.__webglTexture,33984+b)}function N(w,b){const V=n.get(w);if(w.version>0&&V.__version!==w.version){ie(V,w,b);return}t.bindTexture(35866,V.__webglTexture,33984+b)}function W(w,b){const V=n.get(w);if(w.version>0&&V.__version!==w.version){ie(V,w,b);return}t.bindTexture(32879,V.__webglTexture,33984+b)}function k(w,b){const V=n.get(w);if(w.version>0&&V.__version!==w.version){he(V,w,b);return}t.bindTexture(34067,V.__webglTexture,33984+b)}const z={[gr]:10497,[an]:33071,[ga]:33648},H={[wt]:9728,[Po]:9984,[ua]:9986,[Ot]:9729,[th]:9985,[bi]:9987};function ee(w,b,V){if(V?(o.texParameteri(w,10242,z[b.wrapS]),o.texParameteri(w,10243,z[b.wrapT]),(w===32879||w===35866)&&o.texParameteri(w,32882,z[b.wrapR]),o.texParameteri(w,10240,H[b.magFilter]),o.texParameteri(w,10241,H[b.minFilter])):(o.texParameteri(w,10242,33071),o.texParameteri(w,10243,33071),(w===32879||w===35866)&&o.texParameteri(w,32882,33071),(b.wrapS!==an||b.wrapT!==an)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),o.texParameteri(w,10240,A(b.magFilter)),o.texParameteri(w,10241,A(b.minFilter)),b.minFilter!==wt&&b.minFilter!==Ot&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const J=e.get("EXT_texture_filter_anisotropic");if(b.magFilter===wt||b.minFilter!==ua&&b.minFilter!==bi||b.type===ti&&e.has("OES_texture_float_linear")===!1||a===!1&&b.type===os&&e.has("OES_texture_half_float_linear")===!1)return;(b.anisotropy>1||n.get(b).__currentAnisotropy)&&(o.texParameterf(w,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy)}}function I(w,b){let V=!1;w.__webglInit===void 0&&(w.__webglInit=!0,b.addEventListener("dispose",Z));const J=b.source;let ce=m.get(J);ce===void 0&&(ce={},m.set(J,ce));const pe=G(b);if(pe!==w.__cacheKey){ce[pe]===void 0&&(ce[pe]={texture:o.createTexture(),usedTimes:0},s.memory.textures++,V=!0),ce[pe].usedTimes++;const P=ce[w.__cacheKey];P!==void 0&&(ce[w.__cacheKey].usedTimes--,P.usedTimes===0&&D(b)),w.__cacheKey=pe,w.__webglTexture=ce[pe].texture}return V}function ie(w,b,V){let J=3553;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(J=35866),b.isData3DTexture&&(J=32879);const ce=I(w,b),pe=b.source;t.bindTexture(J,w.__webglTexture,33984+V);const P=n.get(pe);if(pe.version!==P.__version||ce===!0){t.activeTexture(33984+V),o.pixelStorei(37440,b.flipY),o.pixelStorei(37441,b.premultiplyAlpha),o.pixelStorei(3317,b.unpackAlignment),o.pixelStorei(37443,0);const $=y(b)&&M(b.image)===!1;let X=x(b.image,$,!1,u);X=fe(b,X);const xe=M(X)||a,_e=r.convert(b.format,b.encoding);let we=r.convert(b.type),me=L(b.internalFormat,_e,we,b.encoding,b.isVideoTexture);ee(J,b,xe);let ve;const Le=b.mipmaps,Pe=a&&b.isVideoTexture!==!0,Ve=P.__version===void 0||ce===!0,O=S(b,X,xe);if(b.isDepthTexture)me=6402,a?b.type===ti?me=36012:b.type===_i?me=33190:b.type===hr?me=35056:me=33189:b.type===ti&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),b.format===xi&&me===6402&&b.type!==nh&&b.type!==_i&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),b.type=_i,we=r.convert(b.type)),b.format===_r&&me===6402&&(me=34041,b.type!==hr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),b.type=hr,we=r.convert(b.type))),Ve&&(Pe?t.texStorage2D(3553,1,me,X.width,X.height):t.texImage2D(3553,0,me,X.width,X.height,0,_e,we,null));else if(b.isDataTexture)if(Le.length>0&&xe){Pe&&Ve&&t.texStorage2D(3553,O,me,Le[0].width,Le[0].height);for(let te=0,de=Le.length;te<de;te++)ve=Le[te],Pe?t.texSubImage2D(3553,te,0,0,ve.width,ve.height,_e,we,ve.data):t.texImage2D(3553,te,me,ve.width,ve.height,0,_e,we,ve.data);b.generateMipmaps=!1}else Pe?(Ve&&t.texStorage2D(3553,O,me,X.width,X.height),t.texSubImage2D(3553,0,0,0,X.width,X.height,_e,we,X.data)):t.texImage2D(3553,0,me,X.width,X.height,0,_e,we,X.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Pe&&Ve&&t.texStorage3D(35866,O,me,Le[0].width,Le[0].height,X.depth);for(let te=0,de=Le.length;te<de;te++)ve=Le[te],b.format!==on?_e!==null?Pe?t.compressedTexSubImage3D(35866,te,0,0,0,ve.width,ve.height,X.depth,_e,ve.data,0,0):t.compressedTexImage3D(35866,te,me,ve.width,ve.height,X.depth,0,ve.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pe?t.texSubImage3D(35866,te,0,0,0,ve.width,ve.height,X.depth,_e,we,ve.data):t.texImage3D(35866,te,me,ve.width,ve.height,X.depth,0,_e,we,ve.data)}else{Pe&&Ve&&t.texStorage2D(3553,O,me,Le[0].width,Le[0].height);for(let te=0,de=Le.length;te<de;te++)ve=Le[te],b.format!==on?_e!==null?Pe?t.compressedTexSubImage2D(3553,te,0,0,ve.width,ve.height,_e,ve.data):t.compressedTexImage2D(3553,te,me,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pe?t.texSubImage2D(3553,te,0,0,ve.width,ve.height,_e,we,ve.data):t.texImage2D(3553,te,me,ve.width,ve.height,0,_e,we,ve.data)}else if(b.isDataArrayTexture)Pe?(Ve&&t.texStorage3D(35866,O,me,X.width,X.height,X.depth),t.texSubImage3D(35866,0,0,0,0,X.width,X.height,X.depth,_e,we,X.data)):t.texImage3D(35866,0,me,X.width,X.height,X.depth,0,_e,we,X.data);else if(b.isData3DTexture)Pe?(Ve&&t.texStorage3D(32879,O,me,X.width,X.height,X.depth),t.texSubImage3D(32879,0,0,0,0,X.width,X.height,X.depth,_e,we,X.data)):t.texImage3D(32879,0,me,X.width,X.height,X.depth,0,_e,we,X.data);else if(b.isFramebufferTexture){if(Ve)if(Pe)t.texStorage2D(3553,O,me,X.width,X.height);else{let te=X.width,de=X.height;for(let Ae=0;Ae<O;Ae++)t.texImage2D(3553,Ae,me,te,de,0,_e,we,null),te>>=1,de>>=1}}else if(Le.length>0&&xe){Pe&&Ve&&t.texStorage2D(3553,O,me,Le[0].width,Le[0].height);for(let te=0,de=Le.length;te<de;te++)ve=Le[te],Pe?t.texSubImage2D(3553,te,0,0,_e,we,ve):t.texImage2D(3553,te,me,_e,we,ve);b.generateMipmaps=!1}else Pe?(Ve&&t.texStorage2D(3553,O,me,X.width,X.height),t.texSubImage2D(3553,0,0,0,_e,we,X)):t.texImage2D(3553,0,me,_e,we,X);T(b,xe)&&C(J),P.__version=pe.version,b.onUpdate&&b.onUpdate(b)}w.__version=b.version}function he(w,b,V){if(b.image.length!==6)return;const J=I(w,b),ce=b.source;t.bindTexture(34067,w.__webglTexture,33984+V);const pe=n.get(ce);if(ce.version!==pe.__version||J===!0){t.activeTexture(33984+V),o.pixelStorei(37440,b.flipY),o.pixelStorei(37441,b.premultiplyAlpha),o.pixelStorei(3317,b.unpackAlignment),o.pixelStorei(37443,0);const P=b.isCompressedTexture||b.image[0].isCompressedTexture,$=b.image[0]&&b.image[0].isDataTexture,X=[];for(let te=0;te<6;te++)!P&&!$?X[te]=x(b.image[te],!1,!0,c):X[te]=$?b.image[te].image:b.image[te],X[te]=fe(b,X[te]);const xe=X[0],_e=M(xe)||a,we=r.convert(b.format,b.encoding),me=r.convert(b.type),ve=L(b.internalFormat,we,me,b.encoding),Le=a&&b.isVideoTexture!==!0,Pe=pe.__version===void 0||J===!0;let Ve=S(b,xe,_e);ee(34067,b,_e);let O;if(P){Le&&Pe&&t.texStorage2D(34067,Ve,ve,xe.width,xe.height);for(let te=0;te<6;te++){O=X[te].mipmaps;for(let de=0;de<O.length;de++){const Ae=O[de];b.format!==on?we!==null?Le?t.compressedTexSubImage2D(34069+te,de,0,0,Ae.width,Ae.height,we,Ae.data):t.compressedTexImage2D(34069+te,de,ve,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Le?t.texSubImage2D(34069+te,de,0,0,Ae.width,Ae.height,we,me,Ae.data):t.texImage2D(34069+te,de,ve,Ae.width,Ae.height,0,we,me,Ae.data)}}}else{O=b.mipmaps,Le&&Pe&&(O.length>0&&Ve++,t.texStorage2D(34067,Ve,ve,X[0].width,X[0].height));for(let te=0;te<6;te++)if($){Le?t.texSubImage2D(34069+te,0,0,0,X[te].width,X[te].height,we,me,X[te].data):t.texImage2D(34069+te,0,ve,X[te].width,X[te].height,0,we,me,X[te].data);for(let de=0;de<O.length;de++){const Ue=O[de].image[te].image;Le?t.texSubImage2D(34069+te,de+1,0,0,Ue.width,Ue.height,we,me,Ue.data):t.texImage2D(34069+te,de+1,ve,Ue.width,Ue.height,0,we,me,Ue.data)}}else{Le?t.texSubImage2D(34069+te,0,0,0,we,me,X[te]):t.texImage2D(34069+te,0,ve,we,me,X[te]);for(let de=0;de<O.length;de++){const Ae=O[de];Le?t.texSubImage2D(34069+te,de+1,0,0,we,me,Ae.image[te]):t.texImage2D(34069+te,de+1,ve,we,me,Ae.image[te])}}}T(b,_e)&&C(34067),pe.__version=ce.version,b.onUpdate&&b.onUpdate(b)}w.__version=b.version}function se(w,b,V,J,ce){const pe=r.convert(V.format,V.encoding),P=r.convert(V.type),$=L(V.internalFormat,pe,P,V.encoding);n.get(b).__hasExternalTextures||(ce===32879||ce===35866?t.texImage3D(ce,0,$,b.width,b.height,b.depth,0,pe,P,null):t.texImage2D(ce,0,$,b.width,b.height,0,pe,P,null)),t.bindFramebuffer(36160,w),Se(b)?d.framebufferTexture2DMultisampleEXT(36160,J,ce,n.get(V).__webglTexture,0,ge(b)):(ce===3553||ce>=34069&&ce<=34074)&&o.framebufferTexture2D(36160,J,ce,n.get(V).__webglTexture,0),t.bindFramebuffer(36160,null)}function le(w,b,V){if(o.bindRenderbuffer(36161,w),b.depthBuffer&&!b.stencilBuffer){let J=33189;if(V||Se(b)){const ce=b.depthTexture;ce&&ce.isDepthTexture&&(ce.type===ti?J=36012:ce.type===_i&&(J=33190));const pe=ge(b);Se(b)?d.renderbufferStorageMultisampleEXT(36161,pe,J,b.width,b.height):o.renderbufferStorageMultisample(36161,pe,J,b.width,b.height)}else o.renderbufferStorage(36161,J,b.width,b.height);o.framebufferRenderbuffer(36160,36096,36161,w)}else if(b.depthBuffer&&b.stencilBuffer){const J=ge(b);V&&Se(b)===!1?o.renderbufferStorageMultisample(36161,J,35056,b.width,b.height):Se(b)?d.renderbufferStorageMultisampleEXT(36161,J,35056,b.width,b.height):o.renderbufferStorage(36161,34041,b.width,b.height),o.framebufferRenderbuffer(36160,33306,36161,w)}else{const J=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let ce=0;ce<J.length;ce++){const pe=J[ce],P=r.convert(pe.format,pe.encoding),$=r.convert(pe.type),X=L(pe.internalFormat,P,$,pe.encoding),xe=ge(b);V&&Se(b)===!1?o.renderbufferStorageMultisample(36161,xe,X,b.width,b.height):Se(b)?d.renderbufferStorageMultisampleEXT(36161,xe,X,b.width,b.height):o.renderbufferStorage(36161,X,b.width,b.height)}}o.bindRenderbuffer(36161,null)}function oe(w,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,w),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),K(b.depthTexture,0);const J=n.get(b.depthTexture).__webglTexture,ce=ge(b);if(b.depthTexture.format===xi)Se(b)?d.framebufferTexture2DMultisampleEXT(36160,36096,3553,J,0,ce):o.framebufferTexture2D(36160,36096,3553,J,0);else if(b.depthTexture.format===_r)Se(b)?d.framebufferTexture2DMultisampleEXT(36160,33306,3553,J,0,ce):o.framebufferTexture2D(36160,33306,3553,J,0);else throw new Error("Unknown depthTexture format")}function ye(w){const b=n.get(w),V=w.isWebGLCubeRenderTarget===!0;if(w.depthTexture&&!b.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");oe(b.__webglFramebuffer,w)}else if(V){b.__webglDepthbuffer=[];for(let J=0;J<6;J++)t.bindFramebuffer(36160,b.__webglFramebuffer[J]),b.__webglDepthbuffer[J]=o.createRenderbuffer(),le(b.__webglDepthbuffer[J],w,!1)}else t.bindFramebuffer(36160,b.__webglFramebuffer),b.__webglDepthbuffer=o.createRenderbuffer(),le(b.__webglDepthbuffer,w,!1);t.bindFramebuffer(36160,null)}function Ee(w,b,V){const J=n.get(w);b!==void 0&&se(J.__webglFramebuffer,w,w.texture,36064,3553),V!==void 0&&ye(w)}function Me(w){const b=w.texture,V=n.get(w),J=n.get(b);w.addEventListener("dispose",U),w.isWebGLMultipleRenderTargets!==!0&&(J.__webglTexture===void 0&&(J.__webglTexture=o.createTexture()),J.__version=b.version,s.memory.textures++);const ce=w.isWebGLCubeRenderTarget===!0,pe=w.isWebGLMultipleRenderTargets===!0,P=M(w)||a;if(ce){V.__webglFramebuffer=[];for(let $=0;$<6;$++)V.__webglFramebuffer[$]=o.createFramebuffer()}else{if(V.__webglFramebuffer=o.createFramebuffer(),pe)if(i.drawBuffers){const $=w.texture;for(let X=0,xe=$.length;X<xe;X++){const _e=n.get($[X]);_e.__webglTexture===void 0&&(_e.__webglTexture=o.createTexture(),s.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&w.samples>0&&Se(w)===!1){const $=pe?b:[b];V.__webglMultisampledFramebuffer=o.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,V.__webglMultisampledFramebuffer);for(let X=0;X<$.length;X++){const xe=$[X];V.__webglColorRenderbuffer[X]=o.createRenderbuffer(),o.bindRenderbuffer(36161,V.__webglColorRenderbuffer[X]);const _e=r.convert(xe.format,xe.encoding),we=r.convert(xe.type),me=L(xe.internalFormat,_e,we,xe.encoding,w.isXRRenderTarget===!0),ve=ge(w);o.renderbufferStorageMultisample(36161,ve,me,w.width,w.height),o.framebufferRenderbuffer(36160,36064+X,36161,V.__webglColorRenderbuffer[X])}o.bindRenderbuffer(36161,null),w.depthBuffer&&(V.__webglDepthRenderbuffer=o.createRenderbuffer(),le(V.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(36160,null)}}if(ce){t.bindTexture(34067,J.__webglTexture),ee(34067,b,P);for(let $=0;$<6;$++)se(V.__webglFramebuffer[$],w,b,36064,34069+$);T(b,P)&&C(34067),t.unbindTexture()}else if(pe){const $=w.texture;for(let X=0,xe=$.length;X<xe;X++){const _e=$[X],we=n.get(_e);t.bindTexture(3553,we.__webglTexture),ee(3553,_e,P),se(V.__webglFramebuffer,w,_e,36064+X,3553),T(_e,P)&&C(3553)}t.unbindTexture()}else{let $=3553;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(a?$=w.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture($,J.__webglTexture),ee($,b,P),se(V.__webglFramebuffer,w,b,36064,$),T(b,P)&&C($),t.unbindTexture()}w.depthBuffer&&ye(w)}function Te(w){const b=M(w)||a,V=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let J=0,ce=V.length;J<ce;J++){const pe=V[J];if(T(pe,b)){const P=w.isWebGLCubeRenderTarget?34067:3553,$=n.get(pe).__webglTexture;t.bindTexture(P,$),C(P),t.unbindTexture()}}}function Ie(w){if(a&&w.samples>0&&Se(w)===!1){const b=w.isWebGLMultipleRenderTargets?w.texture:[w.texture],V=w.width,J=w.height;let ce=16384;const pe=[],P=w.stencilBuffer?33306:36096,$=n.get(w),X=w.isWebGLMultipleRenderTargets===!0;if(X)for(let xe=0;xe<b.length;xe++)t.bindFramebuffer(36160,$.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(36160,36064+xe,36161,null),t.bindFramebuffer(36160,$.__webglFramebuffer),o.framebufferTexture2D(36009,36064+xe,3553,null,0);t.bindFramebuffer(36008,$.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,$.__webglFramebuffer);for(let xe=0;xe<b.length;xe++){pe.push(36064+xe),w.depthBuffer&&pe.push(P);const _e=$.__ignoreDepthValues!==void 0?$.__ignoreDepthValues:!1;if(_e===!1&&(w.depthBuffer&&(ce|=256),w.stencilBuffer&&(ce|=1024)),X&&o.framebufferRenderbuffer(36008,36064,36161,$.__webglColorRenderbuffer[xe]),_e===!0&&(o.invalidateFramebuffer(36008,[P]),o.invalidateFramebuffer(36009,[P])),X){const we=n.get(b[xe]).__webglTexture;o.framebufferTexture2D(36009,36064,3553,we,0)}o.blitFramebuffer(0,0,V,J,0,0,V,J,ce,9728),f&&o.invalidateFramebuffer(36008,pe)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),X)for(let xe=0;xe<b.length;xe++){t.bindFramebuffer(36160,$.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(36160,36064+xe,36161,$.__webglColorRenderbuffer[xe]);const _e=n.get(b[xe]).__webglTexture;t.bindFramebuffer(36160,$.__webglFramebuffer),o.framebufferTexture2D(36009,36064+xe,3553,_e,0)}t.bindFramebuffer(36009,$.__webglMultisampledFramebuffer)}}function ge(w){return Math.min(h,w.samples)}function Se(w){const b=n.get(w);return a&&w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function be(w){const b=s.render.frame;g.get(w)!==b&&(g.set(w,b),w.update())}function fe(w,b){const V=w.encoding,J=w.format,ce=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||w.format===Io||V!==wi&&(V===st?a===!1?e.has("EXT_sRGB")===!0&&J===on?(w.format=Io,w.minFilter=Ot,w.generateMipmaps=!1):b=ch.sRGBToLinear(b):(J!==on||ce!==Si)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",V)),b}this.allocateTextureUnit=Q,this.resetTextureUnits=re,this.setTexture2D=K,this.setTexture2DArray=N,this.setTexture3D=W,this.setTextureCube=k,this.rebindTextures=Ee,this.setupRenderTarget=Me,this.updateRenderTargetMipmap=Te,this.updateMultisampleRenderTarget=Ie,this.setupDepthRenderbuffer=ye,this.setupFrameBufferTexture=se,this.useMultisampledRTT=Se}function l_(o,e,t){const n=t.isWebGL2;function i(r,s=null){let a;if(r===Si)return 5121;if(r===zd)return 32819;if(r===Gd)return 32820;if(r===Fd)return 5120;if(r===kd)return 5122;if(r===nh)return 5123;if(r===Bd)return 5124;if(r===_i)return 5125;if(r===ti)return 5126;if(r===os)return n?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===Vd)return 6406;if(r===on)return 6408;if(r===Hd)return 6409;if(r===Wd)return 6410;if(r===xi)return 6402;if(r===_r)return 34041;if(r===Io)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===Xd)return 6403;if(r===jd)return 36244;if(r===qd)return 33319;if(r===Yd)return 33320;if(r===Kd)return 36249;if(r===za||r===Ga||r===Va||r===Ha)if(s===st)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===za)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ga)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Va)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Ha)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===za)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ga)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Va)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Ha)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Dl||r===Il||r===Ul||r===Ol)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Dl)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Il)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Ul)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Ol)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Zd)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Nl||r===Fl)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Nl)return s===st?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Fl)return s===st?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===kl||r===Bl||r===zl||r===Gl||r===Vl||r===Hl||r===Wl||r===Xl||r===jl||r===ql||r===Yl||r===Kl||r===Zl||r===Ql)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===kl)return s===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Bl)return s===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===zl)return s===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Gl)return s===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Vl)return s===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Hl)return s===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Wl)return s===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Xl)return s===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===jl)return s===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===ql)return s===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Yl)return s===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Kl)return s===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Zl)return s===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Ql)return s===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Wa)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===Wa)return s===st?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(r===Qd||r===Jl||r===$l||r===ec)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===Wa)return a.COMPRESSED_RED_RGTC1_EXT;if(r===Jl)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===$l)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===ec)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===hr?n?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):o[r]!==void 0?o[r]:null}return{convert:i}}class c_ extends Nt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class xn extends mt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const u_={type:"move"};class po{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,s=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(u_)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new xn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class h_ extends Tt{constructor(e,t,n,i,r,s,a,l,c,u){if(u=u!==void 0?u:xi,u!==xi&&u!==_r)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===xi&&(n=_i),n===void 0&&u===_r&&(n=hr),super(null,i,r,s,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:wt,this.minFilter=l!==void 0?l:wt,this.flipY=!1,this.generateMipmaps=!1}}class d_ extends Ci{constructor(e,t){super();const n=this;let i=null,r=1,s=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,g=null;const _=t.getContextAttributes();let m=null,p=null;const v=[],x=[],M=new Set,y=new Map,T=new Nt;T.layers.enable(1),T.viewport=new ht;const C=new Nt;C.layers.enable(2),C.viewport=new ht;const L=[T,C],S=new c_;S.layers.enable(1),S.layers.enable(2);let A=null,Z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let z=v[k];return z===void 0&&(z=new po,v[k]=z),z.getTargetRaySpace()},this.getControllerGrip=function(k){let z=v[k];return z===void 0&&(z=new po,v[k]=z),z.getGripSpace()},this.getHand=function(k){let z=v[k];return z===void 0&&(z=new po,v[k]=z),z.getHandSpace()};function U(k){const z=x.indexOf(k.inputSource);if(z===-1)return;const H=v[z];H!==void 0&&H.dispatchEvent({type:k.type,data:k.inputSource})}function R(){i.removeEventListener("select",U),i.removeEventListener("selectstart",U),i.removeEventListener("selectend",U),i.removeEventListener("squeeze",U),i.removeEventListener("squeezestart",U),i.removeEventListener("squeezeend",U),i.removeEventListener("end",R),i.removeEventListener("inputsourceschange",D);for(let k=0;k<v.length;k++){const z=x[k];z!==null&&(x[k]=null,v[k].disconnect(z))}A=null,Z=null,e.setRenderTarget(m),f=null,d=null,h=null,i=null,p=null,W.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){r=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){a=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(k){c=k},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(k){if(i=k,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",U),i.addEventListener("selectstart",U),i.addEventListener("selectend",U),i.addEventListener("squeeze",U),i.addEventListener("squeezestart",U),i.addEventListener("squeezeend",U),i.addEventListener("end",R),i.addEventListener("inputsourceschange",D),_.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const z={antialias:i.renderState.layers===void 0?_.antialias:!0,alpha:_.alpha,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,z),i.updateRenderState({baseLayer:f}),p=new Ti(f.framebufferWidth,f.framebufferHeight,{format:on,type:Si,encoding:e.outputEncoding,stencilBuffer:_.stencil})}else{let z=null,H=null,ee=null;_.depth&&(ee=_.stencil?35056:33190,z=_.stencil?_r:xi,H=_.stencil?hr:_i);const I={colorFormat:32856,depthFormat:ee,scaleFactor:r};h=new XRWebGLBinding(i,t),d=h.createProjectionLayer(I),i.updateRenderState({layers:[d]}),p=new Ti(d.textureWidth,d.textureHeight,{format:on,type:Si,depthTexture:new h_(d.textureWidth,d.textureHeight,H,void 0,void 0,void 0,void 0,void 0,void 0,z),stencilBuffer:_.stencil,encoding:e.outputEncoding,samples:_.antialias?4:0});const ie=e.properties.get(p);ie.__ignoreDepthValues=d.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await i.requestReferenceSpace(a),W.setContext(i),W.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function D(k){for(let z=0;z<k.removed.length;z++){const H=k.removed[z],ee=x.indexOf(H);ee>=0&&(x[ee]=null,v[ee].disconnect(H))}for(let z=0;z<k.added.length;z++){const H=k.added[z];let ee=x.indexOf(H);if(ee===-1){for(let ie=0;ie<v.length;ie++)if(ie>=x.length){x.push(H),ee=ie;break}else if(x[ie]===null){x[ie]=H,ee=ie;break}if(ee===-1)break}const I=v[ee];I&&I.connect(H)}}const B=new F,Y=new F;function re(k,z,H){B.setFromMatrixPosition(z.matrixWorld),Y.setFromMatrixPosition(H.matrixWorld);const ee=B.distanceTo(Y),I=z.projectionMatrix.elements,ie=H.projectionMatrix.elements,he=I[14]/(I[10]-1),se=I[14]/(I[10]+1),le=(I[9]+1)/I[5],oe=(I[9]-1)/I[5],ye=(I[8]-1)/I[0],Ee=(ie[8]+1)/ie[0],Me=he*ye,Te=he*Ee,Ie=ee/(-ye+Ee),ge=Ie*-ye;z.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(ge),k.translateZ(Ie),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert();const Se=he+Ie,be=se+Ie,fe=Me-ge,w=Te+(ee-ge),b=le*se/be*Se,V=oe*se/be*Se;k.projectionMatrix.makePerspective(fe,w,b,V,Se,be),k.projectionMatrixInverse.copy(k.projectionMatrix).invert()}function Q(k,z){z===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(z.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(i===null)return;S.near=C.near=T.near=k.near,S.far=C.far=T.far=k.far,(A!==S.near||Z!==S.far)&&(i.updateRenderState({depthNear:S.near,depthFar:S.far}),A=S.near,Z=S.far);const z=k.parent,H=S.cameras;Q(S,z);for(let ee=0;ee<H.length;ee++)Q(H[ee],z);H.length===2?re(S,T,C):S.projectionMatrix.copy(T.projectionMatrix),G(k,S,z)};function G(k,z,H){H===null?k.matrix.copy(z.matrixWorld):(k.matrix.copy(H.matrixWorld),k.matrix.invert(),k.matrix.multiply(z.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0);const ee=k.children;for(let I=0,ie=ee.length;I<ie;I++)ee[I].updateMatrixWorld(!0);k.projectionMatrix.copy(z.projectionMatrix),k.projectionMatrixInverse.copy(z.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=xr*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(k){l=k,d!==null&&(d.fixedFoveation=k),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=k)},this.getPlanes=function(){return M};let K=null;function N(k,z){if(u=z.getViewerPose(c||s),g=z,u!==null){const H=u.views;f!==null&&(e.setRenderTargetFramebuffer(p,f.framebuffer),e.setRenderTarget(p));let ee=!1;H.length!==S.cameras.length&&(S.cameras.length=0,ee=!0);for(let I=0;I<H.length;I++){const ie=H[I];let he=null;if(f!==null)he=f.getViewport(ie);else{const le=h.getViewSubImage(d,ie);he=le.viewport,I===0&&(e.setRenderTargetTextures(p,le.colorTexture,d.ignoreDepthValues?void 0:le.depthStencilTexture),e.setRenderTarget(p))}let se=L[I];se===void 0&&(se=new Nt,se.layers.enable(I),se.viewport=new ht,L[I]=se),se.matrix.fromArray(ie.transform.matrix),se.matrix.decompose(se.position,se.quaternion,se.scale),se.projectionMatrix.fromArray(ie.projectionMatrix),se.projectionMatrixInverse.copy(se.projectionMatrix).invert(),se.viewport.set(he.x,he.y,he.width,he.height),I===0&&(S.matrix.copy(se.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),ee===!0&&S.cameras.push(se)}}for(let H=0;H<v.length;H++){const ee=x[H],I=v[H];ee!==null&&I!==void 0&&I.update(ee,z,c||s)}if(K&&K(k,z),z.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:z.detectedPlanes});let H=null;for(const ee of M)z.detectedPlanes.has(ee)||(H===null&&(H=[]),H.push(ee));if(H!==null)for(const ee of H)M.delete(ee),y.delete(ee),n.dispatchEvent({type:"planeremoved",data:ee});for(const ee of z.detectedPlanes)if(!M.has(ee))M.add(ee),y.set(ee,z.lastChangedTime),n.dispatchEvent({type:"planeadded",data:ee});else{const I=y.get(ee);ee.lastChangedTime>I&&(y.set(ee,ee.lastChangedTime),n.dispatchEvent({type:"planechanged",data:ee}))}}g=null}const W=new xh;W.setAnimationLoop(N),this.setAnimationLoop=function(k){K=k},this.dispose=function(){}}}function f_(o,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,mh(o)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,v,x,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,M)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(s(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,v,x):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ht&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ht&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const v=e.get(p).envMap;if(v&&(m.envMap.value=v,m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const x=o.useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*x,t(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function s(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,v,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=x*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ht&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const v=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function p_(o,e,t,n){let i={},r={},s=[];const a=t.isWebGL2?o.getParameter(35375):0;function l(v,x){const M=x.program;n.uniformBlockBinding(v,M)}function c(v,x){let M=i[v.id];M===void 0&&(g(v),M=u(v),i[v.id]=M,v.addEventListener("dispose",m));const y=x.program;n.updateUBOMapping(v,y);const T=e.render.frame;r[v.id]!==T&&(d(v),r[v.id]=T)}function u(v){const x=h();v.__bindingPointIndex=x;const M=o.createBuffer(),y=v.__size,T=v.usage;return o.bindBuffer(35345,M),o.bufferData(35345,y,T),o.bindBuffer(35345,null),o.bindBufferBase(35345,x,M),M}function h(){for(let v=0;v<a;v++)if(s.indexOf(v)===-1)return s.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const x=i[v.id],M=v.uniforms,y=v.__cache;o.bindBuffer(35345,x);for(let T=0,C=M.length;T<C;T++){const L=M[T];if(f(L,T,y)===!0){const S=L.__offset,A=Array.isArray(L.value)?L.value:[L.value];let Z=0;for(let U=0;U<A.length;U++){const R=A[U],D=_(R);typeof R=="number"?(L.__data[0]=R,o.bufferSubData(35345,S+Z,L.__data)):R.isMatrix3?(L.__data[0]=R.elements[0],L.__data[1]=R.elements[1],L.__data[2]=R.elements[2],L.__data[3]=R.elements[0],L.__data[4]=R.elements[3],L.__data[5]=R.elements[4],L.__data[6]=R.elements[5],L.__data[7]=R.elements[0],L.__data[8]=R.elements[6],L.__data[9]=R.elements[7],L.__data[10]=R.elements[8],L.__data[11]=R.elements[0]):(R.toArray(L.__data,Z),Z+=D.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(35345,S,L.__data)}}o.bindBuffer(35345,null)}function f(v,x,M){const y=v.value;if(M[x]===void 0){if(typeof y=="number")M[x]=y;else{const T=Array.isArray(y)?y:[y],C=[];for(let L=0;L<T.length;L++)C.push(T[L].clone());M[x]=C}return!0}else if(typeof y=="number"){if(M[x]!==y)return M[x]=y,!0}else{const T=Array.isArray(M[x])?M[x]:[M[x]],C=Array.isArray(y)?y:[y];for(let L=0;L<T.length;L++){const S=T[L];if(S.equals(C[L])===!1)return S.copy(C[L]),!0}}return!1}function g(v){const x=v.uniforms;let M=0;const y=16;let T=0;for(let C=0,L=x.length;C<L;C++){const S=x[C],A={boundary:0,storage:0},Z=Array.isArray(S.value)?S.value:[S.value];for(let U=0,R=Z.length;U<R;U++){const D=Z[U],B=_(D);A.boundary+=B.boundary,A.storage+=B.storage}if(S.__data=new Float32Array(A.storage/Float32Array.BYTES_PER_ELEMENT),S.__offset=M,C>0){T=M%y;const U=y-T;T!==0&&U-A.boundary<0&&(M+=y-T,S.__offset=M)}M+=A.storage}return T=M%y,T>0&&(M+=y-T),v.__size=M,v.__cache={},this}function _(v){const x={boundary:0,storage:0};return typeof v=="number"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),x}function m(v){const x=v.target;x.removeEventListener("dispose",m);const M=s.indexOf(x.__bindingPointIndex);s.splice(M,1),o.deleteBuffer(i[x.id]),delete i[x.id],delete r[x.id]}function p(){for(const v in i)o.deleteBuffer(i[v]);s=[],i={},r={}}return{bind:l,update:c,dispose:p}}function m_(){const o=us("canvas");return o.style.display="block",o}class Eh{constructor(e={}){const{canvas:t=m_(),context:n=null,depth:i=!0,stencil:r=!0,alpha:s=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=s;let f=null,g=null;const _=[],m=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=wi,this.useLegacyLights=!0,this.toneMapping=Vn,this.toneMappingExposure=1;const p=this;let v=!1,x=0,M=0,y=null,T=-1,C=null;const L=new ht,S=new ht;let A=null,Z=t.width,U=t.height,R=1,D=null,B=null;const Y=new ht(0,0,Z,U),re=new ht(0,0,Z,U);let Q=!1;const G=new tl;let K=!1,N=!1,W=null;const k=new We,z=new F,H={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ee(){return y===null?R:1}let I=n;function ie(E,j){for(let ne=0;ne<E.length;ne++){const q=E[ne],ae=t.getContext(q,j);if(ae!==null)return ae}return null}try{const E={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Zo}`),t.addEventListener("webglcontextlost",ve,!1),t.addEventListener("webglcontextrestored",Le,!1),t.addEventListener("webglcontextcreationerror",Pe,!1),I===null){const j=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&j.shift(),I=ie(j,E),I===null)throw ie(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}I.getShaderPrecisionFormat===void 0&&(I.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let he,se,le,oe,ye,Ee,Me,Te,Ie,ge,Se,be,fe,w,b,V,J,ce,pe,P,$,X,xe,_e;function we(){he=new Cg(I),se=new bg(I,he,e),he.init(se),X=new l_(I,he,se),le=new a_(I,he,se),oe=new Rg,ye=new Y0,Ee=new o_(I,he,le,ye,se,X,oe),Me=new wg(p),Te=new Ag(p),Ie=new Hf(I,se),xe=new yg(I,he,Ie,se),ge=new Lg(I,Ie,oe,xe),Se=new Og(I,ge,Ie,oe),pe=new Ug(I,se,Ee),V=new Sg(ye),be=new q0(p,Me,Te,he,se,xe,V),fe=new f_(p,ye),w=new Z0,b=new n_(he,se),ce=new xg(p,Me,Te,le,Se,d,l),J=new s_(p,Se,se),_e=new p_(I,oe,se,le),P=new Mg(I,he,oe,se),$=new Pg(I,he,oe,se),oe.programs=be.programs,p.capabilities=se,p.extensions=he,p.properties=ye,p.renderLists=w,p.shadowMap=J,p.state=le,p.info=oe}we();const me=new d_(p,I);this.xr=me,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const E=he.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=he.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return R},this.setPixelRatio=function(E){E!==void 0&&(R=E,this.setSize(Z,U,!1))},this.getSize=function(E){return E.set(Z,U)},this.setSize=function(E,j,ne=!0){if(me.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=E,U=j,t.width=Math.floor(E*R),t.height=Math.floor(j*R),ne===!0&&(t.style.width=E+"px",t.style.height=j+"px"),this.setViewport(0,0,E,j)},this.getDrawingBufferSize=function(E){return E.set(Z*R,U*R).floor()},this.setDrawingBufferSize=function(E,j,ne){Z=E,U=j,R=ne,t.width=Math.floor(E*ne),t.height=Math.floor(j*ne),this.setViewport(0,0,E,j)},this.getCurrentViewport=function(E){return E.copy(L)},this.getViewport=function(E){return E.copy(Y)},this.setViewport=function(E,j,ne,q){E.isVector4?Y.set(E.x,E.y,E.z,E.w):Y.set(E,j,ne,q),le.viewport(L.copy(Y).multiplyScalar(R).floor())},this.getScissor=function(E){return E.copy(re)},this.setScissor=function(E,j,ne,q){E.isVector4?re.set(E.x,E.y,E.z,E.w):re.set(E,j,ne,q),le.scissor(S.copy(re).multiplyScalar(R).floor())},this.getScissorTest=function(){return Q},this.setScissorTest=function(E){le.setScissorTest(Q=E)},this.setOpaqueSort=function(E){D=E},this.setTransparentSort=function(E){B=E},this.getClearColor=function(E){return E.copy(ce.getClearColor())},this.setClearColor=function(){ce.setClearColor.apply(ce,arguments)},this.getClearAlpha=function(){return ce.getClearAlpha()},this.setClearAlpha=function(){ce.setClearAlpha.apply(ce,arguments)},this.clear=function(E=!0,j=!0,ne=!0){let q=0;E&&(q|=16384),j&&(q|=256),ne&&(q|=1024),I.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ve,!1),t.removeEventListener("webglcontextrestored",Le,!1),t.removeEventListener("webglcontextcreationerror",Pe,!1),w.dispose(),b.dispose(),ye.dispose(),Me.dispose(),Te.dispose(),Se.dispose(),xe.dispose(),_e.dispose(),be.dispose(),me.dispose(),me.removeEventListener("sessionstart",Ue),me.removeEventListener("sessionend",Je),W&&(W.dispose(),W=null),Ye.stop()};function ve(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),v=!0}function Le(){console.log("THREE.WebGLRenderer: Context Restored."),v=!1;const E=oe.autoReset,j=J.enabled,ne=J.autoUpdate,q=J.needsUpdate,ae=J.type;we(),oe.autoReset=E,J.enabled=j,J.autoUpdate=ne,J.needsUpdate=q,J.type=ae}function Pe(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Ve(E){const j=E.target;j.removeEventListener("dispose",Ve),O(j)}function O(E){te(E),ye.remove(E)}function te(E){const j=ye.get(E).programs;j!==void 0&&(j.forEach(function(ne){be.releaseProgram(ne)}),E.isShaderMaterial&&be.releaseShaderCache(E))}this.renderBufferDirect=function(E,j,ne,q,ae,Oe){j===null&&(j=H);const ke=ae.isMesh&&ae.matrixWorld.determinant()<0,Be=lt(E,j,ne,q,ae);le.setMaterial(q,ke);let Ge=ne.index,He=1;q.wireframe===!0&&(Ge=ge.getWireframeAttribute(ne),He=2);const je=ne.drawRange,qe=ne.attributes.position;let it=je.start*He,yt=(je.start+je.count)*He;Oe!==null&&(it=Math.max(it,Oe.start*He),yt=Math.min(yt,(Oe.start+Oe.count)*He)),Ge!==null?(it=Math.max(it,0),yt=Math.min(yt,Ge.count)):qe!=null&&(it=Math.max(it,0),yt=Math.min(yt,qe.count));const zt=yt-it;if(zt<0||zt===1/0)return;xe.setup(ae,q,Be,ne,Ge);let De,pt=P;if(Ge!==null&&(De=Ie.get(Ge),pt=$,pt.setIndex(De)),ae.isMesh)q.wireframe===!0?(le.setLineWidth(q.wireframeLinewidth*ee()),pt.setMode(1)):pt.setMode(4);else if(ae.isLine){let Ke=q.linewidth;Ke===void 0&&(Ke=1),le.setLineWidth(Ke*ee()),ae.isLineSegments?pt.setMode(1):ae.isLineLoop?pt.setMode(2):pt.setMode(3)}else ae.isPoints?pt.setMode(0):ae.isSprite&&pt.setMode(4);if(ae.isInstancedMesh)pt.renderInstances(it,zt,ae.count);else if(ne.isInstancedBufferGeometry){const Ke=ne._maxInstanceCount!==void 0?ne._maxInstanceCount:1/0,Xn=Math.min(ne.instanceCount,Ke);pt.renderInstances(it,zt,Xn)}else pt.render(it,zt)},this.compile=function(E,j){function ne(q,ae,Oe){q.transparent===!0&&q.side===sn&&q.forceSinglePass===!1?(q.side=Ht,q.needsUpdate=!0,Lt(q,ae,Oe),q.side=An,q.needsUpdate=!0,Lt(q,ae,Oe),q.side=sn):Lt(q,ae,Oe)}g=b.get(E),g.init(),m.push(g),E.traverseVisible(function(q){q.isLight&&q.layers.test(j.layers)&&(g.pushLight(q),q.castShadow&&g.pushShadow(q))}),g.setupLights(p.useLegacyLights),E.traverse(function(q){const ae=q.material;if(ae)if(Array.isArray(ae))for(let Oe=0;Oe<ae.length;Oe++){const ke=ae[Oe];ne(ke,E,q)}else ne(ae,E,q)}),m.pop(),g=null};let de=null;function Ae(E){de&&de(E)}function Ue(){Ye.stop()}function Je(){Ye.start()}const Ye=new xh;Ye.setAnimationLoop(Ae),typeof self<"u"&&Ye.setContext(self),this.setAnimationLoop=function(E){de=E,me.setAnimationLoop(E),E===null?Ye.stop():Ye.start()},me.addEventListener("sessionstart",Ue),me.addEventListener("sessionend",Je),this.render=function(E,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(v===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),me.enabled===!0&&me.isPresenting===!0&&(me.cameraAutoUpdate===!0&&me.updateCamera(j),j=me.getCamera()),E.isScene===!0&&E.onBeforeRender(p,E,j,y),g=b.get(E,m.length),g.init(),m.push(g),k.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),G.setFromProjectionMatrix(k),N=this.localClippingEnabled,K=V.init(this.clippingPlanes,N),f=w.get(E,_.length),f.init(),_.push(f),at(E,j,0,p.sortObjects),f.finish(),p.sortObjects===!0&&f.sort(D,B),K===!0&&V.beginShadows();const ne=g.state.shadowsArray;if(J.render(ne,E,j),K===!0&&V.endShadows(),this.info.autoReset===!0&&this.info.reset(),ce.render(f,E),g.setupLights(p.useLegacyLights),j.isArrayCamera){const q=j.cameras;for(let ae=0,Oe=q.length;ae<Oe;ae++){const ke=q[ae];rt(f,E,ke,ke.viewport)}}else rt(f,E,j);y!==null&&(Ee.updateMultisampleRenderTarget(y),Ee.updateRenderTargetMipmap(y)),E.isScene===!0&&E.onAfterRender(p,E,j),xe.resetDefaultState(),T=-1,C=null,m.pop(),m.length>0?g=m[m.length-1]:g=null,_.pop(),_.length>0?f=_[_.length-1]:f=null};function at(E,j,ne,q){if(E.visible===!1)return;if(E.layers.test(j.layers)){if(E.isGroup)ne=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(j);else if(E.isLight)g.pushLight(E),E.castShadow&&g.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||G.intersectsSprite(E)){q&&z.setFromMatrixPosition(E.matrixWorld).applyMatrix4(k);const ke=Se.update(E),Be=E.material;Be.visible&&f.push(E,ke,Be,ne,z.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(E.isSkinnedMesh&&E.skeleton.frame!==oe.render.frame&&(E.skeleton.update(),E.skeleton.frame=oe.render.frame),!E.frustumCulled||G.intersectsObject(E))){q&&z.setFromMatrixPosition(E.matrixWorld).applyMatrix4(k);const ke=Se.update(E),Be=E.material;if(Array.isArray(Be)){const Ge=ke.groups;for(let He=0,je=Ge.length;He<je;He++){const qe=Ge[He],it=Be[qe.materialIndex];it&&it.visible&&f.push(E,ke,it,ne,z.z,qe)}}else Be.visible&&f.push(E,ke,Be,ne,z.z,null)}}const Oe=E.children;for(let ke=0,Be=Oe.length;ke<Be;ke++)at(Oe[ke],j,ne,q)}function rt(E,j,ne,q){const ae=E.opaque,Oe=E.transmissive,ke=E.transparent;g.setupLightsView(ne),K===!0&&V.setGlobalState(p.clippingPlanes,ne),Oe.length>0&&dt(ae,Oe,j,ne),q&&le.viewport(L.copy(q)),ae.length>0&&$e(ae,j,ne),Oe.length>0&&$e(Oe,j,ne),ke.length>0&&$e(ke,j,ne),le.buffers.depth.setTest(!0),le.buffers.depth.setMask(!0),le.buffers.color.setMask(!0),le.setPolygonOffset(!1)}function dt(E,j,ne,q){if(W===null){const Be=se.isWebGL2;W=new Ti(1024,1024,{generateMipmaps:!0,type:he.has("EXT_color_buffer_half_float")?os:Si,minFilter:bi,samples:Be&&a===!0?4:0})}const ae=p.getRenderTarget();p.setRenderTarget(W),p.clear();const Oe=p.toneMapping;p.toneMapping=Vn,$e(E,ne,q),Ee.updateMultisampleRenderTarget(W),Ee.updateRenderTargetMipmap(W);let ke=!1;for(let Be=0,Ge=j.length;Be<Ge;Be++){const He=j[Be],je=He.object,qe=He.geometry,it=He.material,yt=He.group;if(it.side===sn&&je.layers.test(q.layers)){const zt=it.side;it.side=Ht,it.needsUpdate=!0,nt(je,ne,q,qe,it,yt),it.side=zt,it.needsUpdate=!0,ke=!0}}ke===!0&&(Ee.updateMultisampleRenderTarget(W),Ee.updateRenderTargetMipmap(W)),p.setRenderTarget(ae),p.toneMapping=Oe}function $e(E,j,ne){const q=j.isScene===!0?j.overrideMaterial:null;for(let ae=0,Oe=E.length;ae<Oe;ae++){const ke=E[ae],Be=ke.object,Ge=ke.geometry,He=q===null?ke.material:q,je=ke.group;Be.layers.test(ne.layers)&&nt(Be,j,ne,Ge,He,je)}}function nt(E,j,ne,q,ae,Oe){E.onBeforeRender(p,j,ne,q,ae,Oe),E.modelViewMatrix.multiplyMatrices(ne.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),ae.onBeforeRender(p,j,ne,q,E,Oe),ae.transparent===!0&&ae.side===sn&&ae.forceSinglePass===!1?(ae.side=Ht,ae.needsUpdate=!0,p.renderBufferDirect(ne,j,q,ae,E,Oe),ae.side=An,ae.needsUpdate=!0,p.renderBufferDirect(ne,j,q,ae,E,Oe),ae.side=sn):p.renderBufferDirect(ne,j,q,ae,E,Oe),E.onAfterRender(p,j,ne,q,ae,Oe)}function Lt(E,j,ne){j.isScene!==!0&&(j=H);const q=ye.get(E),ae=g.state.lights,Oe=g.state.shadowsArray,ke=ae.state.version,Be=be.getParameters(E,ae.state,Oe,j,ne),Ge=be.getProgramCacheKey(Be);let He=q.programs;q.environment=E.isMeshStandardMaterial?j.environment:null,q.fog=j.fog,q.envMap=(E.isMeshStandardMaterial?Te:Me).get(E.envMap||q.environment),He===void 0&&(E.addEventListener("dispose",Ve),He=new Map,q.programs=He);let je=He.get(Ge);if(je!==void 0){if(q.currentProgram===je&&q.lightsStateVersion===ke)return Pt(E,Be),je}else Be.uniforms=be.getUniforms(E),E.onBuild(ne,Be,p),E.onBeforeCompile(Be,p),je=be.acquireProgram(Be,Ge),He.set(Ge,je),q.uniforms=Be.uniforms;const qe=q.uniforms;(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(qe.clippingPlanes=V.uniform),Pt(E,Be),q.needsLights=jt(E),q.lightsStateVersion=ke,q.needsLights&&(qe.ambientLightColor.value=ae.state.ambient,qe.lightProbe.value=ae.state.probe,qe.directionalLights.value=ae.state.directional,qe.directionalLightShadows.value=ae.state.directionalShadow,qe.spotLights.value=ae.state.spot,qe.spotLightShadows.value=ae.state.spotShadow,qe.rectAreaLights.value=ae.state.rectArea,qe.ltc_1.value=ae.state.rectAreaLTC1,qe.ltc_2.value=ae.state.rectAreaLTC2,qe.pointLights.value=ae.state.point,qe.pointLightShadows.value=ae.state.pointShadow,qe.hemisphereLights.value=ae.state.hemi,qe.directionalShadowMap.value=ae.state.directionalShadowMap,qe.directionalShadowMatrix.value=ae.state.directionalShadowMatrix,qe.spotShadowMap.value=ae.state.spotShadowMap,qe.spotLightMatrix.value=ae.state.spotLightMatrix,qe.spotLightMap.value=ae.state.spotLightMap,qe.pointShadowMap.value=ae.state.pointShadowMap,qe.pointShadowMatrix.value=ae.state.pointShadowMatrix);const it=je.getUniforms(),yt=ha.seqWithValue(it.seq,qe);return q.currentProgram=je,q.uniformsList=yt,je}function Pt(E,j){const ne=ye.get(E);ne.outputEncoding=j.outputEncoding,ne.instancing=j.instancing,ne.skinning=j.skinning,ne.morphTargets=j.morphTargets,ne.morphNormals=j.morphNormals,ne.morphColors=j.morphColors,ne.morphTargetsCount=j.morphTargetsCount,ne.numClippingPlanes=j.numClippingPlanes,ne.numIntersection=j.numClipIntersection,ne.vertexAlphas=j.vertexAlphas,ne.vertexTangents=j.vertexTangents,ne.toneMapping=j.toneMapping}function lt(E,j,ne,q,ae){j.isScene!==!0&&(j=H),Ee.resetTextureUnits();const Oe=j.fog,ke=q.isMeshStandardMaterial?j.environment:null,Be=y===null?p.outputEncoding:y.isXRRenderTarget===!0?y.texture.encoding:wi,Ge=(q.isMeshStandardMaterial?Te:Me).get(q.envMap||ke),He=q.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,je=!!q.normalMap&&!!ne.attributes.tangent,qe=!!ne.morphAttributes.position,it=!!ne.morphAttributes.normal,yt=!!ne.morphAttributes.color,zt=q.toneMapped?p.toneMapping:Vn,De=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,pt=De!==void 0?De.length:0,Ke=ye.get(q),Xn=g.state.lights;if(K===!0&&(N===!0||E!==C)){const Rt=E===C&&q.id===T;V.setState(q,E,Rt)}let gt=!1;q.version===Ke.__version?(Ke.needsLights&&Ke.lightsStateVersion!==Xn.state.version||Ke.outputEncoding!==Be||ae.isInstancedMesh&&Ke.instancing===!1||!ae.isInstancedMesh&&Ke.instancing===!0||ae.isSkinnedMesh&&Ke.skinning===!1||!ae.isSkinnedMesh&&Ke.skinning===!0||Ke.envMap!==Ge||q.fog===!0&&Ke.fog!==Oe||Ke.numClippingPlanes!==void 0&&(Ke.numClippingPlanes!==V.numPlanes||Ke.numIntersection!==V.numIntersection)||Ke.vertexAlphas!==He||Ke.vertexTangents!==je||Ke.morphTargets!==qe||Ke.morphNormals!==it||Ke.morphColors!==yt||Ke.toneMapping!==zt||se.isWebGL2===!0&&Ke.morphTargetsCount!==pt)&&(gt=!0):(gt=!0,Ke.__version=q.version);let fn=Ke.currentProgram;gt===!0&&(fn=Lt(q,j,ae));let ai=!1,Mn=!1,Pi=!1;const _t=fn.getUniforms(),bn=Ke.uniforms;if(le.useProgram(fn.program)&&(ai=!0,Mn=!0,Pi=!0),q.id!==T&&(T=q.id,Mn=!0),ai||C!==E){if(_t.setValue(I,"projectionMatrix",E.projectionMatrix),se.logarithmicDepthBuffer&&_t.setValue(I,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),C!==E&&(C=E,Mn=!0,Pi=!0),q.isShaderMaterial||q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshStandardMaterial||q.envMap){const Rt=_t.map.cameraPosition;Rt!==void 0&&Rt.setValue(I,z.setFromMatrixPosition(E.matrixWorld))}(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&_t.setValue(I,"isOrthographic",E.isOrthographicCamera===!0),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial||q.isShadowMaterial||ae.isSkinnedMesh)&&_t.setValue(I,"viewMatrix",E.matrixWorldInverse)}if(ae.isSkinnedMesh){_t.setOptional(I,ae,"bindMatrix"),_t.setOptional(I,ae,"bindMatrixInverse");const Rt=ae.skeleton;Rt&&(se.floatVertexTextures?(Rt.boneTexture===null&&Rt.computeBoneTexture(),_t.setValue(I,"boneTexture",Rt.boneTexture,Ee),_t.setValue(I,"boneTextureSize",Rt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const oi=ne.morphAttributes;if((oi.position!==void 0||oi.normal!==void 0||oi.color!==void 0&&se.isWebGL2===!0)&&pe.update(ae,ne,fn),(Mn||Ke.receiveShadow!==ae.receiveShadow)&&(Ke.receiveShadow=ae.receiveShadow,_t.setValue(I,"receiveShadow",ae.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(bn.envMap.value=Ge,bn.flipEnvMap.value=Ge.isCubeTexture&&Ge.isRenderTargetTexture===!1?-1:1),Mn&&(_t.setValue(I,"toneMappingExposure",p.toneMappingExposure),Ke.needsLights&&xt(bn,Pi),Oe&&q.fog===!0&&fe.refreshFogUniforms(bn,Oe),fe.refreshMaterialUniforms(bn,q,R,U,W),ha.upload(I,Ke.uniformsList,bn,Ee)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(ha.upload(I,Ke.uniformsList,bn,Ee),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&_t.setValue(I,"center",ae.center),_t.setValue(I,"modelViewMatrix",ae.modelViewMatrix),_t.setValue(I,"normalMatrix",ae.normalMatrix),_t.setValue(I,"modelMatrix",ae.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const Rt=q.uniformsGroups;for(let Dn=0,Lr=Rt.length;Dn<Lr;Dn++)if(se.isWebGL2){const In=Rt[Dn];_e.update(In,fn),_e.bind(In,fn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return fn}function xt(E,j){E.ambientLightColor.needsUpdate=j,E.lightProbe.needsUpdate=j,E.directionalLights.needsUpdate=j,E.directionalLightShadows.needsUpdate=j,E.pointLights.needsUpdate=j,E.pointLightShadows.needsUpdate=j,E.spotLights.needsUpdate=j,E.spotLightShadows.needsUpdate=j,E.rectAreaLights.needsUpdate=j,E.hemisphereLights.needsUpdate=j}function jt(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return x},this.getActiveMipmapLevel=function(){return M},this.getRenderTarget=function(){return y},this.setRenderTargetTextures=function(E,j,ne){ye.get(E.texture).__webglTexture=j,ye.get(E.depthTexture).__webglTexture=ne;const q=ye.get(E);q.__hasExternalTextures=!0,q.__hasExternalTextures&&(q.__autoAllocateDepthBuffer=ne===void 0,q.__autoAllocateDepthBuffer||he.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,j){const ne=ye.get(E);ne.__webglFramebuffer=j,ne.__useDefaultFramebuffer=j===void 0},this.setRenderTarget=function(E,j=0,ne=0){y=E,x=j,M=ne;let q=!0,ae=null,Oe=!1,ke=!1;if(E){const Ge=ye.get(E);Ge.__useDefaultFramebuffer!==void 0?(le.bindFramebuffer(36160,null),q=!1):Ge.__webglFramebuffer===void 0?Ee.setupRenderTarget(E):Ge.__hasExternalTextures&&Ee.rebindTextures(E,ye.get(E.texture).__webglTexture,ye.get(E.depthTexture).__webglTexture);const He=E.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(ke=!0);const je=ye.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(ae=je[j],Oe=!0):se.isWebGL2&&E.samples>0&&Ee.useMultisampledRTT(E)===!1?ae=ye.get(E).__webglMultisampledFramebuffer:ae=je,L.copy(E.viewport),S.copy(E.scissor),A=E.scissorTest}else L.copy(Y).multiplyScalar(R).floor(),S.copy(re).multiplyScalar(R).floor(),A=Q;if(le.bindFramebuffer(36160,ae)&&se.drawBuffers&&q&&le.drawBuffers(E,ae),le.viewport(L),le.scissor(S),le.setScissorTest(A),Oe){const Ge=ye.get(E.texture);I.framebufferTexture2D(36160,36064,34069+j,Ge.__webglTexture,ne)}else if(ke){const Ge=ye.get(E.texture),He=j||0;I.framebufferTextureLayer(36160,36064,Ge.__webglTexture,ne||0,He)}T=-1},this.readRenderTargetPixels=function(E,j,ne,q,ae,Oe,ke){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Be=ye.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ke!==void 0&&(Be=Be[ke]),Be){le.bindFramebuffer(36160,Be);try{const Ge=E.texture,He=Ge.format,je=Ge.type;if(He!==on&&X.convert(He)!==I.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const qe=je===os&&(he.has("EXT_color_buffer_half_float")||se.isWebGL2&&he.has("EXT_color_buffer_float"));if(je!==Si&&X.convert(je)!==I.getParameter(35738)&&!(je===ti&&(se.isWebGL2||he.has("OES_texture_float")||he.has("WEBGL_color_buffer_float")))&&!qe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=E.width-q&&ne>=0&&ne<=E.height-ae&&I.readPixels(j,ne,q,ae,X.convert(He),X.convert(je),Oe)}finally{const Ge=y!==null?ye.get(y).__webglFramebuffer:null;le.bindFramebuffer(36160,Ge)}}},this.copyFramebufferToTexture=function(E,j,ne=0){const q=Math.pow(2,-ne),ae=Math.floor(j.image.width*q),Oe=Math.floor(j.image.height*q);Ee.setTexture2D(j,0),I.copyTexSubImage2D(3553,ne,0,0,E.x,E.y,ae,Oe),le.unbindTexture()},this.copyTextureToTexture=function(E,j,ne,q=0){const ae=j.image.width,Oe=j.image.height,ke=X.convert(ne.format),Be=X.convert(ne.type);Ee.setTexture2D(ne,0),I.pixelStorei(37440,ne.flipY),I.pixelStorei(37441,ne.premultiplyAlpha),I.pixelStorei(3317,ne.unpackAlignment),j.isDataTexture?I.texSubImage2D(3553,q,E.x,E.y,ae,Oe,ke,Be,j.image.data):j.isCompressedTexture?I.compressedTexSubImage2D(3553,q,E.x,E.y,j.mipmaps[0].width,j.mipmaps[0].height,ke,j.mipmaps[0].data):I.texSubImage2D(3553,q,E.x,E.y,ke,Be,j.image),q===0&&ne.generateMipmaps&&I.generateMipmap(3553),le.unbindTexture()},this.copyTextureToTexture3D=function(E,j,ne,q,ae=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Oe=E.max.x-E.min.x+1,ke=E.max.y-E.min.y+1,Be=E.max.z-E.min.z+1,Ge=X.convert(q.format),He=X.convert(q.type);let je;if(q.isData3DTexture)Ee.setTexture3D(q,0),je=32879;else if(q.isDataArrayTexture)Ee.setTexture2DArray(q,0),je=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(37440,q.flipY),I.pixelStorei(37441,q.premultiplyAlpha),I.pixelStorei(3317,q.unpackAlignment);const qe=I.getParameter(3314),it=I.getParameter(32878),yt=I.getParameter(3316),zt=I.getParameter(3315),De=I.getParameter(32877),pt=ne.isCompressedTexture?ne.mipmaps[0]:ne.image;I.pixelStorei(3314,pt.width),I.pixelStorei(32878,pt.height),I.pixelStorei(3316,E.min.x),I.pixelStorei(3315,E.min.y),I.pixelStorei(32877,E.min.z),ne.isDataTexture||ne.isData3DTexture?I.texSubImage3D(je,ae,j.x,j.y,j.z,Oe,ke,Be,Ge,He,pt.data):ne.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),I.compressedTexSubImage3D(je,ae,j.x,j.y,j.z,Oe,ke,Be,Ge,pt.data)):I.texSubImage3D(je,ae,j.x,j.y,j.z,Oe,ke,Be,Ge,He,pt),I.pixelStorei(3314,qe),I.pixelStorei(32878,it),I.pixelStorei(3316,yt),I.pixelStorei(3315,zt),I.pixelStorei(32877,De),ae===0&&q.generateMipmaps&&I.generateMipmap(je),le.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?Ee.setTextureCube(E,0):E.isData3DTexture?Ee.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Ee.setTexture2DArray(E,0):Ee.setTexture2D(E,0),le.unbindTexture()},this.resetState=function(){x=0,M=0,y=null,le.reset(),xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}}class g_ extends Eh{}g_.prototype.isWebGL1Renderer=!0;class __ extends mt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class Ah{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Do,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=yn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=yn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=yn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Gt=new F;class hs{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix4(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyNormalMatrix(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.transformDirection(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}setX(e,t){return this.normalized&&(t=ft(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Gn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Gn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Gn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Gn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array),i=ft(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array),i=ft(i,this.array),r=ft(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Wt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new hs(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Ch extends ln{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ze(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Ji;const Wr=new F,$i=new F,er=new F,tr=new Fe,Xr=new Fe,Lh=new We,ea=new F,jr=new F,ta=new F,Vc=new Fe,mo=new Fe,Hc=new Fe;class v_ extends mt{constructor(e){if(super(),this.isSprite=!0,this.type="Sprite",Ji===void 0){Ji=new Xt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Ah(t,5);Ji.setIndex([0,1,2,0,2,3]),Ji.setAttribute("position",new hs(n,3,0,!1)),Ji.setAttribute("uv",new hs(n,2,3,!1))}this.geometry=Ji,this.material=e!==void 0?e:new Ch,this.center=new Fe(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),$i.setFromMatrixScale(this.matrixWorld),Lh.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),er.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&$i.multiplyScalar(-er.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const s=this.center;na(ea.set(-.5,-.5,0),er,s,$i,i,r),na(jr.set(.5,-.5,0),er,s,$i,i,r),na(ta.set(.5,.5,0),er,s,$i,i,r),Vc.set(0,0),mo.set(1,0),Hc.set(1,1);let a=e.ray.intersectTriangle(ea,jr,ta,!1,Wr);if(a===null&&(na(jr.set(-.5,.5,0),er,s,$i,i,r),mo.set(0,1),a=e.ray.intersectTriangle(ea,ta,jr,!1,Wr),a===null))return;const l=e.ray.origin.distanceTo(Wr);l<e.near||l>e.far||t.push({distance:l,point:Wr.clone(),uv:rn.getInterpolation(Wr,ea,jr,ta,Vc,mo,Hc,new Fe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function na(o,e,t,n,i,r){tr.subVectors(o,t).addScalar(.5).multiply(n),i!==void 0?(Xr.x=r*tr.x-i*tr.y,Xr.y=i*tr.x+r*tr.y):Xr.copy(tr),o.copy(e),o.x+=Xr.x,o.y+=Xr.y,o.applyMatrix4(Lh)}const Wc=new F,Xc=new ht,jc=new ht,x_=new F,qc=new We,nr=new F;class y_ extends Ft{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new We,this.bindMatrixInverse=new We,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Ln),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)nr.fromBufferAttribute(t,n),this.applyBoneTransform(n,nr),this.boundingBox.expandByPoint(nr)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Pn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)nr.fromBufferAttribute(t,n),this.applyBoneTransform(n,nr),this.boundingSphere.expandByPoint(nr)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new ht,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Xc.fromBufferAttribute(i.attributes.skinIndex,e),jc.fromBufferAttribute(i.attributes.skinWeight,e),Wc.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const s=jc.getComponent(r);if(s!==0){const a=Xc.getComponent(r);qc.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(x_.copy(Wc).applyMatrix4(qc),s)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}}class Ph extends mt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class M_ extends Tt{constructor(e=null,t=1,n=1,i,r,s,a,l,c=wt,u=wt,h,d){super(null,s,a,l,c,u,i,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Yc=new We,b_=new We;class rl{constructor(e=[],t=[]){this.uuid=yn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new We)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new We;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,s=e.length;r<s;r++){const a=e[r]?e[r].matrixWorld:b_;Yc.multiplyMatrices(a,t[r]),Yc.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new rl(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=ah(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new M_(t,e,e,on,ti);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let s=t[r];s===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),s=new Ph),this.bones.push(s),this.boneInverses.push(new We().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const s=t[i];e.bones.push(s.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class No extends Wt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ir=new We,Kc=new We,ia=[],Zc=new Ln,S_=new We,qr=new Ft,Yr=new Pn;class w_ extends Ft{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new No(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,S_)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ln),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ir),Zc.copy(e.boundingBox).applyMatrix4(ir),this.boundingBox.union(Zc)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Pn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ir),Yr.copy(e.boundingSphere).applyMatrix4(ir),this.boundingSphere.union(Yr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,i=this.count;if(qr.geometry=this.geometry,qr.material=this.material,qr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Yr.copy(this.boundingSphere),Yr.applyMatrix4(n),e.ray.intersectsSphere(Yr)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,ir),Kc.multiplyMatrices(n,ir),qr.matrixWorld=Kc,qr.raycast(e,ia);for(let s=0,a=ia.length;s<a;s++){const l=ia[s];l.instanceId=r,l.object=this,t.push(l)}ia.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new No(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class _s extends ln{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ze(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Qc=new F,Jc=new F,$c=new We,go=new ba,ra=new Pn;class Ta extends mt{constructor(e=new Xt,t=new _s){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Qc.fromBufferAttribute(t,i-1),Jc.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Qc.distanceTo(Jc);e.setAttribute("lineDistance",new $t(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ra.copy(n.boundingSphere),ra.applyMatrix4(i),ra.radius+=r,e.ray.intersectsSphere(ra)===!1)return;$c.copy(i).invert(),go.copy(e.ray).applyMatrix4($c);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new F,u=new F,h=new F,d=new F,f=this.isLineSegments?2:1,g=n.index,m=n.attributes.position;if(g!==null){const p=Math.max(0,s.start),v=Math.min(g.count,s.start+s.count);for(let x=p,M=v-1;x<M;x+=f){const y=g.getX(x),T=g.getX(x+1);if(c.fromBufferAttribute(m,y),u.fromBufferAttribute(m,T),go.distanceSqToSegment(c,u,d,h)>l)continue;d.applyMatrix4(this.matrixWorld);const L=e.ray.origin.distanceTo(d);L<e.near||L>e.far||t.push({distance:L,point:h.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{const p=Math.max(0,s.start),v=Math.min(m.count,s.start+s.count);for(let x=p,M=v-1;x<M;x+=f){if(c.fromBufferAttribute(m,x),u.fromBufferAttribute(m,x+1),go.distanceSqToSegment(c,u,d,h)>l)continue;d.applyMatrix4(this.matrixWorld);const T=e.ray.origin.distanceTo(d);T<e.near||T>e.far||t.push({distance:T,point:h.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}const eu=new F,tu=new F;class sl extends Ta{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)eu.fromBufferAttribute(t,i),tu.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+eu.distanceTo(tu);e.setAttribute("lineDistance",new $t(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class T_ extends Ta{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Rh extends ln{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ze(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const nu=new We,Fo=new ba,sa=new Pn,aa=new F;class E_ extends mt{constructor(e=new Xt,t=new Rh){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),sa.copy(n.boundingSphere),sa.applyMatrix4(i),sa.radius+=r,e.ray.intersectsSphere(sa)===!1)return;nu.copy(i).invert(),Fo.copy(e.ray).applyMatrix4(nu);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){const d=Math.max(0,s.start),f=Math.min(c.count,s.start+s.count);for(let g=d,_=f;g<_;g++){const m=c.getX(g);aa.fromBufferAttribute(h,m),iu(aa,m,l,i,e,t,this)}}else{const d=Math.max(0,s.start),f=Math.min(h.count,s.start+s.count);for(let g=d,_=f;g<_;g++)aa.fromBufferAttribute(h,g),iu(aa,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function iu(o,e,t,n,i,r,s){const a=Fo.distanceSqToPoint(o);if(a<t){const l=new F;Fo.closestPointToPoint(o,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:s})}}class al extends Xt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,s=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:s,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(s+a,Math.PI);let c=0;const u=[],h=new F,d=new F,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const v=[],x=p/n;let M=0;p===0&&s===0?M=.5/t:p===n&&l===Math.PI&&(M=-.5/t);for(let y=0;y<=t;y++){const T=y/t;h.x=-e*Math.cos(i+T*r)*Math.sin(s+x*a),h.y=e*Math.cos(s+x*a),h.z=e*Math.sin(i+T*r)*Math.sin(s+x*a),g.push(h.x,h.y,h.z),d.copy(h).normalize(),_.push(d.x,d.y,d.z),m.push(T+M,1-x),v.push(c++)}u.push(v)}for(let p=0;p<n;p++)for(let v=0;v<t;v++){const x=u[p][v+1],M=u[p][v],y=u[p+1][v],T=u[p+1][v+1];(p!==0||s>0)&&f.push(x,M,T),(p!==n-1||l<Math.PI)&&f.push(M,y,T)}this.setIndex(f),this.setAttribute("position",new $t(g,3)),this.setAttribute("normal",new $t(_,3)),this.setAttribute("uv",new $t(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new al(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ol extends ln{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Jo,this.normalScale=new Fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Li extends ol{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Fe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return At(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ze(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ze(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ze(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class yy extends ln{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new ze(16777215),this.specular=new ze(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Jo,this.normalScale=new Fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Qo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}function Jn(o,e,t){return Dh(o)?new o.constructor(o.subarray(e,t!==void 0?t:o.length)):o.slice(e,t)}function oa(o,e,t){return!o||!t&&o.constructor===e?o:typeof e.BYTES_PER_ELEMENT=="number"?new e(o):Array.prototype.slice.call(o)}function Dh(o){return ArrayBuffer.isView(o)&&!(o instanceof DataView)}function A_(o){function e(i,r){return o[i]-o[r]}const t=o.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function ru(o,e,t){const n=o.length,i=new o.constructor(n);for(let r=0,s=0;s!==n;++r){const a=t[r]*e;for(let l=0;l!==e;++l)i[s++]=o[a+l]}return i}function Ih(o,e,t,n){let i=1,r=o[0];for(;r!==void 0&&r[n]===void 0;)r=o[i++];if(r===void 0)return;let s=r[n];if(s!==void 0)if(Array.isArray(s))do s=r[n],s!==void 0&&(e.push(r.time),t.push.apply(t,s)),r=o[i++];while(r!==void 0);else if(s.toArray!==void 0)do s=r[n],s!==void 0&&(e.push(r.time),s.toArray(t,t.length)),r=o[i++];while(r!==void 0);else do s=r[n],s!==void 0&&(e.push(r.time),t.push(s)),r=o[i++];while(r!==void 0)}class vs{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let s;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break e}s=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break e}s=n,n=0;break t}break n}for(;n<s;){const a=n+s>>>1;e<t[a]?s=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let s=0;s!==i;++s)t[s]=n[r+s];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class C_ extends vs{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:tc,endingEnd:tc}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,s=e+1,a=i[r],l=i[s];if(a===void 0)switch(this.getSettings_().endingStart){case nc:r=e,a=2*t-n;break;case ic:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case nc:s=e,l=2*n-t;break;case ic:s=1,l=n+i[1]-i[0];break;default:s=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=s*u}interpolate_(e,t,n,i){const r=this.resultBuffer,s=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(i-t),_=g*g,m=_*g,p=-d*m+2*d*_-d*g,v=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*g+1,x=(-1-f)*m+(1.5+f)*_+.5*g,M=f*m-f*_;for(let y=0;y!==a;++y)r[y]=p*s[u+y]+v*s[c+y]+x*s[l+y]+M*s[h+y];return r}}class L_ extends vs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,s=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(i-t),h=1-u;for(let d=0;d!==a;++d)r[d]=s[c+d]*h+s[l+d]*u;return r}}class P_ extends vs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Rn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=oa(t,this.TimeBufferType),this.values=oa(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:oa(e.times,Array),values:oa(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new P_(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new L_(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new C_(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ls:t=this.InterpolantFactoryMethodDiscrete;break;case vr:t=this.InterpolantFactoryMethodLinear;break;case Xa:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ls;case this.InterpolantFactoryMethodLinear:return vr;case this.InterpolantFactoryMethodSmooth:return Xa}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,s=i-1;for(;r!==i&&n[r]<e;)++r;for(;s!==-1&&n[s]>t;)--s;if(++s,r!==0||s!==i){r>=s&&(s=Math.max(s,1),r=s-1);const a=this.getValueSize();this.times=Jn(n,r,s),this.values=Jn(this.values,r*a,s*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let s=null;for(let a=0;a!==r;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(s!==null&&s>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,s),e=!1;break}s=l}if(i!==void 0&&Dh(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=Jn(this.times),t=Jn(this.values),n=this.getValueSize(),i=this.getInterpolation()===Xa,r=e.length-1;let s=1;for(let a=1;a<r;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(i)l=!0;else{const h=a*n,d=h-n,f=h+n;for(let g=0;g!==n;++g){const _=t[h+g];if(_!==t[d+g]||_!==t[f+g]){l=!0;break}}}if(l){if(a!==s){e[s]=e[a];const h=a*n,d=s*n;for(let f=0;f!==n;++f)t[d+f]=t[h+f]}++s}}if(r>0){e[s]=e[r];for(let a=r*n,l=s*n,c=0;c!==n;++c)t[l+c]=t[a+c];++s}return s!==e.length?(this.times=Jn(e,0,s),this.values=Jn(t,0,s*n)):(this.times=e,this.values=t),this}clone(){const e=Jn(this.times,0),t=Jn(this.values,0),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Rn.prototype.TimeBufferType=Float32Array;Rn.prototype.ValueBufferType=Float32Array;Rn.prototype.DefaultInterpolation=vr;class Er extends Rn{}Er.prototype.ValueTypeName="bool";Er.prototype.ValueBufferType=Array;Er.prototype.DefaultInterpolation=ls;Er.prototype.InterpolantFactoryMethodLinear=void 0;Er.prototype.InterpolantFactoryMethodSmooth=void 0;class Uh extends Rn{}Uh.prototype.ValueTypeName="color";class ds extends Rn{}ds.prototype.ValueTypeName="number";class R_ extends vs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,s=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t);let c=e*a;for(let u=c+a;c!==u;c+=4)un.slerpFlat(r,0,s,c-a,s,c,l);return r}}class Ei extends Rn{InterpolantFactoryMethodLinear(e){return new R_(this.times,this.values,this.getValueSize(),e)}}Ei.prototype.ValueTypeName="quaternion";Ei.prototype.DefaultInterpolation=vr;Ei.prototype.InterpolantFactoryMethodSmooth=void 0;class Ar extends Rn{}Ar.prototype.ValueTypeName="string";Ar.prototype.ValueBufferType=Array;Ar.prototype.DefaultInterpolation=ls;Ar.prototype.InterpolantFactoryMethodLinear=void 0;Ar.prototype.InterpolantFactoryMethodSmooth=void 0;class fs extends Rn{}fs.prototype.ValueTypeName="vector";class D_{constructor(e,t=-1,n,i=Jd){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=yn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let s=0,a=n.length;s!==a;++s)t.push(U_(n[s]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,s=n.length;r!==s;++r)t.push(Rn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,s=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const u=A_(l);l=ru(l,1,u),c=ru(c,1,u),!i&&l[0]===0&&(l.push(r),c.push(c[0])),s.push(new ds(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,s)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(r);if(u&&u.length>1){const h=u[1];let d=i[h];d||(i[h]=d=[]),d.push(c)}}const s=[];for(const a in i)s.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return s}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,d,f,g,_){if(f.length!==0){const m=[],p=[];Ih(f,m,p,g),m.length!==0&&_.push(new h(d,m,p))}},i=[],r=e.name||"default",s=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const d=c[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let _=0;_<d[g].morphTargets.length;_++)f[d[g].morphTargets[_]]=-1;for(const _ in f){const m=[],p=[];for(let v=0;v!==d[g].morphTargets.length;++v){const x=d[g];m.push(x.time),p.push(x.morphTarget===_?1:0)}i.push(new ds(".morphTargetInfluence["+_+"]",m,p))}l=f.length*s}else{const f=".bones["+t[h].name+"]";n(fs,f+".position",d,"pos",i),n(Ei,f+".quaternion",d,"rot",i),n(fs,f+".scale",d,"scl",i)}}return i.length===0?null:new this(r,l,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function I_(o){switch(o.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ds;case"vector":case"vector2":case"vector3":case"vector4":return fs;case"color":return Uh;case"quaternion":return Ei;case"bool":case"boolean":return Er;case"string":return Ar}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+o)}function U_(o){if(o.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=I_(o.type);if(o.times===void 0){const t=[],n=[];Ih(o.keys,t,n,"value"),o.times=t,o.values=n}return e.parse!==void 0?e.parse(o):new e(o.name,o.times,o.values,o.interpolation)}const Mr={enabled:!1,files:{},add:function(o,e){this.enabled!==!1&&(this.files[o]=e)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};class Oh{constructor(e,t,n){const i=this;let r=!1,s=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,r===!1&&i.onStart!==void 0&&i.onStart(u,s,a),r=!0},this.itemEnd=function(u){s++,i.onProgress!==void 0&&i.onProgress(u,s,a),s===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const f=c[h],g=c[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null}}}const O_=new Oh;class xs{constructor(e){this.manager=e!==void 0?e:O_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const zn={};class N_ extends Error{constructor(e,t){super(e),this.response=t}}class Nh extends xs{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Mr.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(zn[e]!==void 0){zn[e].push({onLoad:t,onProgress:n,onError:i});return}zn[e]=[],zn[e].push({onLoad:t,onProgress:n,onError:i});const s=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(s).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=zn[e],h=c.body.getReader(),d=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),f=d?parseInt(d):0,g=f!==0;let _=0;const m=new ReadableStream({start(p){v();function v(){h.read().then(({done:x,value:M})=>{if(x)p.close();else{_+=M.byteLength;const y=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:f});for(let T=0,C=u.length;T<C;T++){const L=u[T];L.onProgress&&L.onProgress(y)}p.enqueue(M),v()}})}}});return new Response(m)}else throw new N_(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{Mr.add(e,c);const u=zn[e];delete zn[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onLoad&&f.onLoad(c)}}).catch(c=>{const u=zn[e];if(u===void 0)throw this.manager.itemError(e),c;delete zn[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class F_ extends xs{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,s=Mr.get(e);if(s!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(s),r.manager.itemEnd(e)},0),s;const a=us("img");function l(){u(),Mr.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(h){u(),i&&i(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class Fh extends xs{constructor(e){super(e)}load(e,t,n,i){const r=new Tt,s=new F_(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class ll extends mt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ze(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const _o=new We,su=new F,au=new F;class cl{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Fe(512,512),this.map=null,this.mapPass=null,this.matrix=new We,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new tl,this._frameExtents=new Fe(1,1),this._viewportCount=1,this._viewports=[new ht(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;su.setFromMatrixPosition(e.matrixWorld),t.position.copy(su),au.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(au),t.updateMatrixWorld(),_o.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_o),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(_o)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class k_ extends cl{constructor(){super(new Nt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=xr*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class B_ extends ll{constructor(e,t,n=0,i=Math.PI/3,r=0,s=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(mt.DEFAULT_UP),this.updateMatrix(),this.target=new mt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=s,this.map=null,this.shadow=new k_}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const ou=new We,Kr=new F,vo=new F;class z_ extends cl{constructor(){super(new Nt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Fe(4,2),this._viewportCount=6,this._viewports=[new ht(2,1,1,1),new ht(0,1,1,1),new ht(3,1,1,1),new ht(1,1,1,1),new ht(3,0,1,1),new ht(1,0,1,1)],this._cubeDirections=[new F(1,0,0),new F(-1,0,0),new F(0,0,1),new F(0,0,-1),new F(0,1,0),new F(0,-1,0)],this._cubeUps=[new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,0,1),new F(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Kr.setFromMatrixPosition(e.matrixWorld),n.position.copy(Kr),vo.copy(n.position),vo.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(vo),n.updateMatrixWorld(),i.makeTranslation(-Kr.x,-Kr.y,-Kr.z),ou.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ou)}}class kh extends ll{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new z_}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class G_ extends cl{constructor(){super(new nl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class V_ extends ll{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(mt.DEFAULT_UP),this.updateMatrix(),this.target=new mt,this.shadow=new G_}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class ko{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class H_ extends Xt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class W_ extends xs{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,s=Mr.get(e);if(s!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(s),r.manager.itemEnd(e)},0),s;const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){Mr.add(e,l),t&&t(l),r.manager.itemEnd(e)}).catch(function(l){i&&i(l),r.manager.itemError(e),r.manager.itemEnd(e)}),r.manager.itemStart(e)}}const ul="\\[\\]\\.:\\/",X_=new RegExp("["+ul+"]","g"),hl="[^"+ul+"]",j_="[^"+ul.replace("\\.","")+"]",q_=/((?:WC+[\/:])*)/.source.replace("WC",hl),Y_=/(WCOD+)?/.source.replace("WCOD",j_),K_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",hl),Z_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",hl),Q_=new RegExp("^"+q_+Y_+K_+Z_+"$"),J_=["material","materials","bones","map"];class $_{constructor(e,t,n){const i=n||ut.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class ut{constructor(e,t,n){this.path=t,this.parsedPath=n||ut.parseTrackName(t),this.node=ut.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new ut.Composite(e,t,n):new ut(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(X_,"")}static parseTrackName(e){const t=Q_.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);J_.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let s=0;s<r.length;s++){const a=r[s];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=ut.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const s=e[i];if(s===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=r}else s.fromArray!==void 0&&s.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(l=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ut.Composite=$_;ut.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ut.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ut.prototype.GetterByBindingType=[ut.prototype._getValue_direct,ut.prototype._getValue_array,ut.prototype._getValue_arrayElement,ut.prototype._getValue_toArray];ut.prototype.SetterByBindingTypeAndVersioning=[[ut.prototype._setValue_direct,ut.prototype._setValue_direct_setNeedsUpdate,ut.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_array,ut.prototype._setValue_array_setNeedsUpdate,ut.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_arrayElement,ut.prototype._setValue_arrayElement_setNeedsUpdate,ut.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_fromArray,ut.prototype._setValue_fromArray_setNeedsUpdate,ut.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class ev{constructor(e,t,n=0,i=1/0){this.ray=new ba(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new el,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return Bo(e,this,n,t),n.sort(lu),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)Bo(e[i],this,n,t);return n.sort(lu),n}}function lu(o,e){return o.distance-e.distance}function Bo(o,e,t,n){if(o.layers.test(e.layers)&&o.raycast(e,t),n===!0){const i=o.children;for(let r=0,s=i.length;r<s;r++)Bo(i[r],e,t,!0)}}class cu{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(At(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Zo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Zo);const uu={type:"change"},xo={type:"start"},hu={type:"end"};class tv extends Ci{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new F,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ui.ROTATE,MIDDLE:Ui.DOLLY,RIGHT:Ui.PAN},this.touches={ONE:Oi.ROTATE,TWO:Oi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(P){P.addEventListener("keydown",be),this._domElementKeyEvents=P},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",be),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(uu),n.update(),r=i.NONE},this.update=function(){const P=new F,$=new un().setFromUnitVectors(e.up,new F(0,1,0)),X=$.clone().invert(),xe=new F,_e=new un,we=2*Math.PI;return function(){const ve=n.object.position;P.copy(ve).sub(n.target),P.applyQuaternion($),a.setFromVector3(P),n.autoRotate&&r===i.NONE&&S(C()),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let Le=n.minAzimuthAngle,Pe=n.maxAzimuthAngle;return isFinite(Le)&&isFinite(Pe)&&(Le<-Math.PI?Le+=we:Le>Math.PI&&(Le-=we),Pe<-Math.PI?Pe+=we:Pe>Math.PI&&(Pe-=we),Le<=Pe?a.theta=Math.max(Le,Math.min(Pe,a.theta)):a.theta=a.theta>(Le+Pe)/2?Math.max(Le,a.theta):Math.min(Pe,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=c,a.radius=Math.max(n.minDistance,Math.min(n.maxDistance,a.radius)),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),P.setFromSpherical(a),P.applyQuaternion(X),ve.copy(n.target).add(P),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),c=1,h||xe.distanceToSquared(n.object.position)>s||8*(1-_e.dot(n.object.quaternion))>s?(n.dispatchEvent(uu),xe.copy(n.object.position),_e.copy(n.object.quaternion),h=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",b),n.domElement.removeEventListener("pointerdown",Ee),n.domElement.removeEventListener("pointercancel",Te),n.domElement.removeEventListener("wheel",Se),n.domElement.removeEventListener("pointermove",Me),n.domElement.removeEventListener("pointerup",Te),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",be),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=i.NONE;const s=1e-6,a=new cu,l=new cu;let c=1;const u=new F;let h=!1;const d=new Fe,f=new Fe,g=new Fe,_=new Fe,m=new Fe,p=new Fe,v=new Fe,x=new Fe,M=new Fe,y=[],T={};function C(){return 2*Math.PI/60/60*n.autoRotateSpeed}function L(){return Math.pow(.95,n.zoomSpeed)}function S(P){l.theta-=P}function A(P){l.phi-=P}const Z=function(){const P=new F;return function(X,xe){P.setFromMatrixColumn(xe,0),P.multiplyScalar(-X),u.add(P)}}(),U=function(){const P=new F;return function(X,xe){n.screenSpacePanning===!0?P.setFromMatrixColumn(xe,1):(P.setFromMatrixColumn(xe,0),P.crossVectors(n.object.up,P)),P.multiplyScalar(X),u.add(P)}}(),R=function(){const P=new F;return function(X,xe){const _e=n.domElement;if(n.object.isPerspectiveCamera){const we=n.object.position;P.copy(we).sub(n.target);let me=P.length();me*=Math.tan(n.object.fov/2*Math.PI/180),Z(2*X*me/_e.clientHeight,n.object.matrix),U(2*xe*me/_e.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(Z(X*(n.object.right-n.object.left)/n.object.zoom/_e.clientWidth,n.object.matrix),U(xe*(n.object.top-n.object.bottom)/n.object.zoom/_e.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function D(P){n.object.isPerspectiveCamera?c/=P:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*P)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function B(P){n.object.isPerspectiveCamera?c*=P:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/P)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function Y(P){d.set(P.clientX,P.clientY)}function re(P){v.set(P.clientX,P.clientY)}function Q(P){_.set(P.clientX,P.clientY)}function G(P){f.set(P.clientX,P.clientY),g.subVectors(f,d).multiplyScalar(n.rotateSpeed);const $=n.domElement;S(2*Math.PI*g.x/$.clientHeight),A(2*Math.PI*g.y/$.clientHeight),d.copy(f),n.update()}function K(P){x.set(P.clientX,P.clientY),M.subVectors(x,v),M.y>0?D(L()):M.y<0&&B(L()),v.copy(x),n.update()}function N(P){m.set(P.clientX,P.clientY),p.subVectors(m,_).multiplyScalar(n.panSpeed),R(p.x,p.y),_.copy(m),n.update()}function W(P){P.deltaY<0?B(L()):P.deltaY>0&&D(L()),n.update()}function k(P){let $=!1;switch(P.code){case n.keys.UP:P.ctrlKey||P.metaKey||P.shiftKey?A(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):R(0,n.keyPanSpeed),$=!0;break;case n.keys.BOTTOM:P.ctrlKey||P.metaKey||P.shiftKey?A(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):R(0,-n.keyPanSpeed),$=!0;break;case n.keys.LEFT:P.ctrlKey||P.metaKey||P.shiftKey?S(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):R(n.keyPanSpeed,0),$=!0;break;case n.keys.RIGHT:P.ctrlKey||P.metaKey||P.shiftKey?S(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):R(-n.keyPanSpeed,0),$=!0;break}$&&(P.preventDefault(),n.update())}function z(){if(y.length===1)d.set(y[0].pageX,y[0].pageY);else{const P=.5*(y[0].pageX+y[1].pageX),$=.5*(y[0].pageY+y[1].pageY);d.set(P,$)}}function H(){if(y.length===1)_.set(y[0].pageX,y[0].pageY);else{const P=.5*(y[0].pageX+y[1].pageX),$=.5*(y[0].pageY+y[1].pageY);_.set(P,$)}}function ee(){const P=y[0].pageX-y[1].pageX,$=y[0].pageY-y[1].pageY,X=Math.sqrt(P*P+$*$);v.set(0,X)}function I(){n.enableZoom&&ee(),n.enablePan&&H()}function ie(){n.enableZoom&&ee(),n.enableRotate&&z()}function he(P){if(y.length==1)f.set(P.pageX,P.pageY);else{const X=pe(P),xe=.5*(P.pageX+X.x),_e=.5*(P.pageY+X.y);f.set(xe,_e)}g.subVectors(f,d).multiplyScalar(n.rotateSpeed);const $=n.domElement;S(2*Math.PI*g.x/$.clientHeight),A(2*Math.PI*g.y/$.clientHeight),d.copy(f)}function se(P){if(y.length===1)m.set(P.pageX,P.pageY);else{const $=pe(P),X=.5*(P.pageX+$.x),xe=.5*(P.pageY+$.y);m.set(X,xe)}p.subVectors(m,_).multiplyScalar(n.panSpeed),R(p.x,p.y),_.copy(m)}function le(P){const $=pe(P),X=P.pageX-$.x,xe=P.pageY-$.y,_e=Math.sqrt(X*X+xe*xe);x.set(0,_e),M.set(0,Math.pow(x.y/v.y,n.zoomSpeed)),D(M.y),v.copy(x)}function oe(P){n.enableZoom&&le(P),n.enablePan&&se(P)}function ye(P){n.enableZoom&&le(P),n.enableRotate&&he(P)}function Ee(P){n.enabled!==!1&&(y.length===0&&(n.domElement.setPointerCapture(P.pointerId),n.domElement.addEventListener("pointermove",Me),n.domElement.addEventListener("pointerup",Te)),V(P),P.pointerType==="touch"?fe(P):Ie(P))}function Me(P){n.enabled!==!1&&(P.pointerType==="touch"?w(P):ge(P))}function Te(P){J(P),y.length===0&&(n.domElement.releasePointerCapture(P.pointerId),n.domElement.removeEventListener("pointermove",Me),n.domElement.removeEventListener("pointerup",Te)),n.dispatchEvent(hu),r=i.NONE}function Ie(P){let $;switch(P.button){case 0:$=n.mouseButtons.LEFT;break;case 1:$=n.mouseButtons.MIDDLE;break;case 2:$=n.mouseButtons.RIGHT;break;default:$=-1}switch($){case Ui.DOLLY:if(n.enableZoom===!1)return;re(P),r=i.DOLLY;break;case Ui.ROTATE:if(P.ctrlKey||P.metaKey||P.shiftKey){if(n.enablePan===!1)return;Q(P),r=i.PAN}else{if(n.enableRotate===!1)return;Y(P),r=i.ROTATE}break;case Ui.PAN:if(P.ctrlKey||P.metaKey||P.shiftKey){if(n.enableRotate===!1)return;Y(P),r=i.ROTATE}else{if(n.enablePan===!1)return;Q(P),r=i.PAN}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(xo)}function ge(P){switch(r){case i.ROTATE:if(n.enableRotate===!1)return;G(P);break;case i.DOLLY:if(n.enableZoom===!1)return;K(P);break;case i.PAN:if(n.enablePan===!1)return;N(P);break}}function Se(P){n.enabled===!1||n.enableZoom===!1||r!==i.NONE||(P.preventDefault(),n.dispatchEvent(xo),W(P),n.dispatchEvent(hu))}function be(P){n.enabled===!1||n.enablePan===!1||k(P)}function fe(P){switch(ce(P),y.length){case 1:switch(n.touches.ONE){case Oi.ROTATE:if(n.enableRotate===!1)return;z(),r=i.TOUCH_ROTATE;break;case Oi.PAN:if(n.enablePan===!1)return;H(),r=i.TOUCH_PAN;break;default:r=i.NONE}break;case 2:switch(n.touches.TWO){case Oi.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;I(),r=i.TOUCH_DOLLY_PAN;break;case Oi.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;ie(),r=i.TOUCH_DOLLY_ROTATE;break;default:r=i.NONE}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(xo)}function w(P){switch(ce(P),r){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;he(P),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;se(P),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;oe(P),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;ye(P),n.update();break;default:r=i.NONE}}function b(P){n.enabled!==!1&&P.preventDefault()}function V(P){y.push(P)}function J(P){delete T[P.pointerId];for(let $=0;$<y.length;$++)if(y[$].pointerId==P.pointerId){y.splice($,1);return}}function ce(P){let $=T[P.pointerId];$===void 0&&($=new Fe,T[P.pointerId]=$),$.set(P.pageX,P.pageY)}function pe(P){const $=P.pointerId===y[0].pointerId?y[1]:y[0];return T[$.pointerId]}n.domElement.addEventListener("contextmenu",b),n.domElement.addEventListener("pointerdown",Ee),n.domElement.addEventListener("pointercancel",Te),n.domElement.addEventListener("wheel",Se,{passive:!1}),this.update()}}class nv extends mt{constructor(e=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=e,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new Fe(.5,.5),this.addEventListener("removed",function(){this.traverse(function(t){t.element instanceof Element&&t.element.parentNode!==null&&t.element.parentNode.removeChild(t.element)})})}copy(e,t){return super.copy(e,t),this.element=e.element.cloneNode(!0),this.center=e.center,this}}const rr=new F,du=new We,fu=new We,pu=new F,mu=new F;class iv{constructor(e={}){const t=this;let n,i,r,s;const a={objects:new WeakMap},l=e.element!==void 0?e.element:document.createElement("div");l.style.overflow="hidden",this.domElement=l,this.getSize=function(){return{width:n,height:i}},this.render=function(f,g){f.matrixWorldAutoUpdate===!0&&f.updateMatrixWorld(),g.parent===null&&g.matrixWorldAutoUpdate===!0&&g.updateMatrixWorld(),du.copy(g.matrixWorldInverse),fu.multiplyMatrices(g.projectionMatrix,du),c(f,f,g),d(f)},this.setSize=function(f,g){n=f,i=g,r=n/2,s=i/2,l.style.width=f+"px",l.style.height=g+"px"};function c(f,g,_){if(f.isCSS2DObject){rr.setFromMatrixPosition(f.matrixWorld),rr.applyMatrix4(fu);const m=f.visible===!0&&rr.z>=-1&&rr.z<=1&&f.layers.test(_.layers)===!0;if(f.element.style.display=m===!0?"":"none",m===!0){f.onBeforeRender(t,g,_);const v=f.element;v.style.transform="translate("+-100*f.center.x+"%,"+-100*f.center.y+"%)translate("+(rr.x*r+r)+"px,"+(-rr.y*s+s)+"px)",v.parentNode!==l&&l.appendChild(v),f.onAfterRender(t,g,_)}const p={distanceToCameraSquared:u(_,f)};a.objects.set(f,p)}for(let m=0,p=f.children.length;m<p;m++)c(f.children[m],g,_)}function u(f,g){return pu.setFromMatrixPosition(f.matrixWorld),mu.setFromMatrixPosition(g.matrixWorld),pu.distanceToSquared(mu)}function h(f){const g=[];return f.traverse(function(_){_.isCSS2DObject&&g.push(_)}),g}function d(f){const g=h(f).sort(function(m,p){if(m.renderOrder!==p.renderOrder)return p.renderOrder-m.renderOrder;const v=a.objects.get(m).distanceToCameraSquared,x=a.objects.get(p).distanceToCameraSquared;return v-x}),_=g.length;for(let m=0,p=g.length;m<p;m++)g[m].element.style.zIndex=_-m}}}class ot{constructor(e){ue(this,"instanceID");ue(this,"dependendQueries");this.data=e,this.instanceID=crypto.randomUUID()}get that(){return this.constructor}}ue(ot,"dependencies",[]),ue(ot,"typeID"),ue(ot,"isTag",!0);class ys extends ot{}ue(ys,"isTag",!1);const gu={DISTANCE_SCALE:0,SIZE_SCALE:0,ORB_SCALE:0,ROT_SCALE:10,camPos:null,followCam:!1},mi=class mi{constructor(){ue(this,"store");ue(this,"state");const e=localStorage.getItem("markerVisiblity");let t=!0;e&&(t=e==="true"),this.store={LIGHTYEAR:9461e9,canvas:null,raycaster:new ev,raypointer:new Fe(1/0,1/0),focusTarget:"yellowstone",rotateCamPivotY:0,rotateCamPivotX:0,rotateCamPivotDepth:0,displayMarkerVisibility:t},this.state={...gu}}static getInstance(){return mi.instance||(mi.instance=new mi),mi.instance}resetState(){this.state={...gu}}};ue(mi,"instance");let Re=mi;const Ne=(o,e)=>({operand:o,value:e});function rv(o,e,t){const n=Object.keys(o.components),i=[],r=Object.values(o.components).map(s=>(s.constructor.name==="BaseDataComponent"&&i.push(s.data.name),s.instanceID));return e.every(s=>{const[a,l,c,u]=s;return!l&&n.includes(a)?!1:c?t?r.includes(t):!1:u!==null?i.includes(u):!!n.includes(a)})}function _u(o,e){if(e===$d)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),o;if(e===Ro||e===ih){let t=o.getIndex();if(t===null){const s=[],a=o.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)s.push(l);o.setIndex(s),t=o.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),o}const n=t.count-2,i=[];if(e===Ro)for(let s=1;s<=n;s++)i.push(t.getX(0)),i.push(t.getX(s)),i.push(t.getX(s+1));else for(let s=0;s<n;s++)s%2===0?(i.push(t.getX(s)),i.push(t.getX(s+1)),i.push(t.getX(s+2))):(i.push(t.getX(s+2)),i.push(t.getX(s+1)),i.push(t.getX(s)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=o.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),o}class sv extends xs{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new uv(t)}),this.register(function(t){return new _v(t)}),this.register(function(t){return new vv(t)}),this.register(function(t){return new xv(t)}),this.register(function(t){return new dv(t)}),this.register(function(t){return new fv(t)}),this.register(function(t){return new pv(t)}),this.register(function(t){return new mv(t)}),this.register(function(t){return new cv(t)}),this.register(function(t){return new gv(t)}),this.register(function(t){return new hv(t)}),this.register(function(t){return new ov(t)}),this.register(function(t){return new yv(t)}),this.register(function(t){return new Mv(t)})}load(e,t,n,i){const r=this;let s;this.resourcePath!==""?s=this.resourcePath:this.path!==""?s=this.path:s=ko.extractUrlBase(e),this.manager.itemStart(e);const a=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Nh(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,s,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const s={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Bh){try{s[et.KHR_BINARY_GLTF]=new bv(e)}catch(h){i&&i(h);return}r=JSON.parse(s[et.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new Ov(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](c);a[h.name]=h,s[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const h=r.extensionsUsed[u],d=r.extensionsRequired||[];switch(h){case et.KHR_MATERIALS_UNLIT:s[h]=new lv;break;case et.KHR_DRACO_MESH_COMPRESSION:s[h]=new Sv(r,this.dracoLoader);break;case et.KHR_TEXTURE_TRANSFORM:s[h]=new wv;break;case et.KHR_MESH_QUANTIZATION:s[h]=new Tv;break;default:d.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(s),c.setPlugins(a),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function av(){let o={};return{get:function(e){return o[e]},add:function(e,t){o[e]=t},remove:function(e){delete o[e]},removeAll:function(){o={}}}}const et={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class ov{constructor(e){this.parser=e,this.name=et.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const u=new ze(16777215);l.color!==void 0&&u.fromArray(l.color);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new V_(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new kh(u),c.distance=h;break;case"spot":c=new B_(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,ei(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class lv{constructor(){this.name=et.KHR_MATERIALS_UNLIT}getMaterialType(){return ni}extendParams(e,t,n){const i=[];e.color=new ze(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const s=r.baseColorFactor;e.color.fromArray(s),e.opacity=s[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,st))}return Promise.all(i)}}class cv{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class uv{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Li}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],s=i.extensions[this.name];if(s.clearcoatFactor!==void 0&&(t.clearcoat=s.clearcoatFactor),s.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",s.clearcoatTexture)),s.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=s.clearcoatRoughnessFactor),s.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",s.clearcoatRoughnessTexture)),s.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",s.clearcoatNormalTexture)),s.clearcoatNormalTexture.scale!==void 0)){const a=s.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Fe(a,a)}return Promise.all(r)}}class hv{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Li}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],s=i.extensions[this.name];return s.iridescenceFactor!==void 0&&(t.iridescence=s.iridescenceFactor),s.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",s.iridescenceTexture)),s.iridescenceIor!==void 0&&(t.iridescenceIOR=s.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),s.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=s.iridescenceThicknessMinimum),s.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=s.iridescenceThicknessMaximum),s.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",s.iridescenceThicknessTexture)),Promise.all(r)}}class dv{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Li}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new ze(0,0,0),t.sheenRoughness=0,t.sheen=1;const s=i.extensions[this.name];return s.sheenColorFactor!==void 0&&t.sheenColor.fromArray(s.sheenColorFactor),s.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=s.sheenRoughnessFactor),s.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",s.sheenColorTexture,st)),s.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",s.sheenRoughnessTexture)),Promise.all(r)}}class fv{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Li}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],s=i.extensions[this.name];return s.transmissionFactor!==void 0&&(t.transmission=s.transmissionFactor),s.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",s.transmissionTexture)),Promise.all(r)}}class pv{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Li}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],s=i.extensions[this.name];t.thickness=s.thicknessFactor!==void 0?s.thicknessFactor:0,s.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",s.thicknessTexture)),t.attenuationDistance=s.attenuationDistance||1/0;const a=s.attenuationColor||[1,1,1];return t.attenuationColor=new ze(a[0],a[1],a[2]),Promise.all(r)}}class mv{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Li}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class gv{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Li}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],s=i.extensions[this.name];t.specularIntensity=s.specularFactor!==void 0?s.specularFactor:1,s.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",s.specularTexture));const a=s.specularColorFactor||[1,1,1];return t.specularColor=new ze(a[0],a[1],a[2]),s.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",s.specularColorTexture,st)),Promise.all(r)}}class _v{constructor(e){this.parser=e,this.name=et.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],s=t.options.ktx2Loader;if(!s){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,s)}}class vv{constructor(e){this.parser=e,this.name=et.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const s=r.extensions[t],a=i.images[s.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,s.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class xv{constructor(e){this.parser=e,this.name=et.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const s=r.extensions[t],a=i.images[s.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,s.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class yv{constructor(e){this.name=et.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),s=this.parser.options.meshoptDecoder;if(!s||!s.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const l=i.byteOffset||0,c=i.byteLength||0,u=i.count,h=i.byteStride,d=new Uint8Array(a,l,c);return s.decodeGltfBufferAsync?s.decodeGltfBufferAsync(u,h,d,i.mode,i.filter).then(function(f){return f.buffer}):s.ready.then(function(){const f=new ArrayBuffer(u*h);return s.decodeGltfBuffer(new Uint8Array(f),u,h,d,i.mode,i.filter),f})})}else return null}}class Mv{constructor(e){this.name=et.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==tn.TRIANGLES&&c.mode!==tn.TRIANGLE_STRIP&&c.mode!==tn.TRIANGLE_FAN&&c.mode!==void 0)return null;const s=n.extensions[this.name].attributes,a=[],l={};for(const c in s)a.push(this.parser.getDependency("accessor",s[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const u=c.pop(),h=u.isGroup?u.children:[u],d=c[0].count,f=[];for(const g of h){const _=new We,m=new F,p=new un,v=new F(1,1,1),x=new w_(g.geometry,g.material,d);for(let M=0;M<d;M++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,M),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,M),l.SCALE&&v.fromBufferAttribute(l.SCALE,M),x.setMatrixAt(M,_.compose(m,p,v));for(const M in l)M!=="TRANSLATION"&&M!=="ROTATION"&&M!=="SCALE"&&g.geometry.setAttribute(M,l[M]);mt.prototype.copy.call(x,g),this.parser.assignFinalMaterial(x),f.push(x)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}}const Bh="glTF",Zr=12,vu={JSON:1313821514,BIN:5130562};class bv{constructor(e){this.name=et.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Zr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Bh)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Zr,r=new DataView(e,Zr);let s=0;for(;s<i;){const a=r.getUint32(s,!0);s+=4;const l=r.getUint32(s,!0);if(s+=4,l===vu.JSON){const c=new Uint8Array(e,Zr+s,a);this.content=n.decode(c)}else if(l===vu.BIN){const c=Zr+s;this.body=e.slice(c,c+a)}s+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Sv{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=et.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,s=e.extensions[this.name].attributes,a={},l={},c={};for(const u in s){const h=zo[u]||u.toLowerCase();a[h]=s[u]}for(const u in e.attributes){const h=zo[u]||u.toLowerCase();if(s[u]!==void 0){const d=n.accessors[e.attributes[u]],f=fr[d.componentType];c[h]=f.name,l[h]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h){i.decodeDracoFile(u,function(d){for(const f in d.attributes){const g=d.attributes[f],_=l[f];_!==void 0&&(g.normalized=_)}h(d)},a,c)})})}}class wv{constructor(){this.name=et.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class Tv{constructor(){this.name=et.KHR_MESH_QUANTIZATION}}class zh extends vs{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let s=0;s!==i;s++)t[s]=n[r+s];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,s=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=i-t,h=(n-t)/u,d=h*h,f=d*h,g=e*c,_=g-c,m=-2*f+3*d,p=f-d,v=1-m,x=p-d+h;for(let M=0;M!==a;M++){const y=s[_+M+a],T=s[_+M+l]*u,C=s[g+M+a],L=s[g+M]*u;r[M]=v*y+x*T+m*C+p*L}return r}}const Ev=new un;class Av extends zh{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return Ev.fromArray(r).normalize().toArray(r),r}}const tn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},fr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},xu={9728:wt,9729:Ot,9984:Po,9985:th,9986:ua,9987:bi},yu={33071:an,33648:ga,10497:gr},yo={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},zo={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv2",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},$n={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Cv={CUBICSPLINE:void 0,LINEAR:vr,STEP:ls},Mo={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Lv(o){return o.DefaultMaterial===void 0&&(o.DefaultMaterial=new ol({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:An})),o.DefaultMaterial}function Qr(o,e,t){for(const n in t.extensions)o[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function ei(o,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(o.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Pv(o,e,t){let n=!1,i=!1,r=!1;for(let c=0,u=e.length;c<u;c++){const h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(o);const s=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];if(n){const d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):o.attributes.position;s.push(d)}if(i){const d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):o.attributes.normal;a.push(d)}if(r){const d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):o.attributes.color;l.push(d)}}return Promise.all([Promise.all(s),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],d=c[2];return n&&(o.morphAttributes.position=u),i&&(o.morphAttributes.normal=h),r&&(o.morphAttributes.color=d),o.morphTargetsRelative=!0,o})}function Rv(o,e){if(o.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)o.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(o.morphTargetInfluences.length===t.length){o.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)o.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Dv(o){const e=o.extensions&&o.extensions[et.KHR_DRACO_MESH_COMPRESSION];let t;return e?t="draco:"+e.bufferView+":"+e.indices+":"+Mu(e.attributes):t=o.indices+":"+Mu(o.attributes)+":"+o.mode,t}function Mu(o){let e="";const t=Object.keys(o).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+o[t[n]]+";";return e}function Go(o){switch(o){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Iv(o){return o.search(/\.jpe?g($|\?)/i)>0||o.search(/^data\:image\/jpeg/)===0?"image/jpeg":o.search(/\.webp($|\?)/i)>0||o.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const Uv=new We;class Ov{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new av,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,r=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,r=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||i&&r<98?this.textureLoader=new Fh(this.options.manager):this.textureLoader=new W_(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Nh(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(s){return s._markDefs&&s._markDefs()}),Promise.all(this._invokeAll(function(s){return s.beforeRoot&&s.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(s){const a={scene:s[0][i.scene||0],scenes:s[0],animations:s[1],cameras:s[2],asset:i.asset,parser:n,userData:{}};Qr(r,a,i),ei(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const s=t[i].joints;for(let a=0,l=s.length;a<l;a++)e[s[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const s=e[i];s.mesh!==void 0&&(this._addNodeRef(this.meshCache,s.mesh),s.skin!==void 0&&(n[s.mesh].isSkinnedMesh=!0)),s.camera!==void 0&&this._addNodeRef(this.cameraCache,s.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(s,a)=>{const l=this.associations.get(s);l!=null&&this.associations.set(a,l);for(const[c,u]of s.children.entries())r(u,a.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,s){return n.getDependency(e,s)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[et.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,s){n.load(ko.resolveURL(t.uri,i.path),r,void 0,function(){s(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const s=yo[i.type],a=fr[i.componentType],l=i.normalized===!0,c=new a(i.count*s);return Promise.resolve(new Wt(c,s,l))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(s){const a=s[0],l=yo[i.type],c=fr[i.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let _,m;if(f&&f!==h){const p=Math.floor(d/f),v="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let x=t.cache.get(v);x||(_=new c(a,p*f,i.count*f/u),x=new Ah(_,f/u),t.cache.add(v,x)),m=new hs(x,l,d%f/u,g)}else a===null?_=new c(i.count*l):_=new c(a,d,i.count*l),m=new Wt(_,l,g);if(i.sparse!==void 0){const p=yo.SCALAR,v=fr[i.sparse.indices.componentType],x=i.sparse.indices.byteOffset||0,M=i.sparse.values.byteOffset||0,y=new v(s[1],x,i.sparse.count*p),T=new c(s[2],M,i.sparse.count*l);a!==null&&(m=new Wt(m.array.slice(),m.itemSize,m.normalized));for(let C=0,L=y.length;C<L;C++){const S=y[C];if(m.setX(S,T[C*l]),l>=2&&m.setY(S,T[C*l+1]),l>=3&&m.setZ(S,T[C*l+2]),l>=4&&m.setW(S,T[C*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,s=t.images[r];let a=this.textureLoader;if(s.uri){const l=n.manager.getHandler(s.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const i=this,r=this.json,s=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+s.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=s.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const d=(r.samplers||{})[s.sampler]||{};return u.magFilter=xu[d.magFilter]||Ot,u.minFilter=xu[d.minFilter]||bi,u.wrapS=yu[d.wrapS]||gr,u.wrapT=yu[d.wrapT]||gr,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const s=i.images[e],a=self.URL||self.webkitURL;let l=s.uri||"",c=!1;if(s.bufferView!==void 0)l=n.getDependency("bufferView",s.bufferView).then(function(h){c=!0;const d=new Blob([h],{type:s.mimeType});return l=a.createObjectURL(d),l});else if(s.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(h){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(_){const m=new Tt(_);m.needsUpdate=!0,d(m)}),t.load(ko.resolveURL(h,r.path),g,void 0,f)})}).then(function(h){return c===!0&&a.revokeObjectURL(l),h.userData.mimeType=s.mimeType||Iv(s.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(s){if(!s)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(s=s.clone(),s.channel=n.texCoord),r.extensions[et.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[et.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=r.associations.get(s);s=r.extensions[et.KHR_TEXTURE_TRANSFORM].extendTexture(s,a),r.associations.set(s,l)}}return i!==void 0&&(s.encoding=i),e[t]=s,s})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,s=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Rh,ln.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new _s,ln.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||r||s){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),s&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),s&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return ol}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let s;const a={},l=r.extensions||{},c=[];if(l[et.KHR_MATERIALS_UNLIT]){const h=i[et.KHR_MATERIALS_UNLIT];s=h.getMaterialType(),c.push(h.extendParams(a,r,t))}else{const h=r.pbrMetallicRoughness||{};if(a.color=new ze(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const d=h.baseColorFactor;a.color.fromArray(d),a.opacity=d[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,st)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),s=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=sn);const u=r.alphaMode||Mo.OPAQUE;if(u===Mo.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Mo.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&s!==ni&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Fe(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;a.normalScale.set(h,h)}return r.occlusionTexture!==void 0&&s!==ni&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&s!==ni&&(a.emissive=new ze().fromArray(r.emissiveFactor)),r.emissiveTexture!==void 0&&s!==ni&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,st)),Promise.all(c).then(function(){const h=new s(a);return r.name&&(h.name=r.name),ei(h,r),t.associations.set(h,{materials:e}),r.extensions&&Qr(i,h,r),h})}createUniqueName(e){const t=ut.sanitizeNodeName(e||"");let n=t;for(let i=1;this.nodeNamesUsed[n];++i)n=t+"_"+i;return this.nodeNamesUsed[n]=!0,n}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[et.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return bu(l,a,t)})}const s=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=Dv(c),h=i[u];if(h)s.push(h.promise);else{let d;c.extensions&&c.extensions[et.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=bu(new Xt,c,t),i[u]={primitive:c,promise:d},s.push(d)}}return Promise.all(s)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],s=r.primitives,a=[];for(let l=0,c=s.length;l<c;l++){const u=s[l].material===void 0?Lv(this.cache):this.getDependency("material",s[l].material);a.push(u)}return a.push(t.loadGeometries(s)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let f=0,g=u.length;f<g;f++){const _=u[f],m=s[f];let p;const v=c[f];if(m.mode===tn.TRIANGLES||m.mode===tn.TRIANGLE_STRIP||m.mode===tn.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new y_(_,v):new Ft(_,v),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===tn.TRIANGLE_STRIP?p.geometry=_u(p.geometry,ih):m.mode===tn.TRIANGLE_FAN&&(p.geometry=_u(p.geometry,Ro));else if(m.mode===tn.LINES)p=new sl(_,v);else if(m.mode===tn.LINE_STRIP)p=new Ta(_,v);else if(m.mode===tn.LINE_LOOP)p=new T_(_,v);else if(m.mode===tn.POINTS)p=new E_(_,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&Rv(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),ei(p,r),m.extensions&&Qr(i,p,m),t.assignFinalMaterial(p),h.push(p)}for(let f=0,g=h.length;f<g;f++)t.associations.set(h[f],{meshes:e,primitives:f});if(h.length===1)return h[0];const d=new xn;t.associations.set(d,{meshes:e});for(let f=0,g=h.length;f<g;f++)d.add(h[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Nt(_f.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new nl(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),ei(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),s=i,a=[],l=[];for(let c=0,u=s.length;c<u;c++){const h=s[c];if(h){a.push(h);const d=new We;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new rl(a,l)})}loadAnimation(e){const n=this.json.animations[e],i=n.name?n.name:"animation_"+e,r=[],s=[],a=[],l=[],c=[];for(let u=0,h=n.channels.length;u<h;u++){const d=n.channels[u],f=n.samplers[d.sampler],g=d.target,_=g.node,m=n.parameters!==void 0?n.parameters[f.input]:f.input,p=n.parameters!==void 0?n.parameters[f.output]:f.output;g.node!==void 0&&(r.push(this.getDependency("node",_)),s.push(this.getDependency("accessor",m)),a.push(this.getDependency("accessor",p)),l.push(f),c.push(g))}return Promise.all([Promise.all(r),Promise.all(s),Promise.all(a),Promise.all(l),Promise.all(c)]).then(function(u){const h=u[0],d=u[1],f=u[2],g=u[3],_=u[4],m=[];for(let p=0,v=h.length;p<v;p++){const x=h[p],M=d[p],y=f[p],T=g[p],C=_[p];if(x===void 0)continue;x.updateMatrix();let L;switch($n[C.path]){case $n.weights:L=ds;break;case $n.rotation:L=Ei;break;case $n.position:case $n.scale:default:L=fs;break}const S=x.name?x.name:x.uuid,A=T.interpolation!==void 0?Cv[T.interpolation]:vr,Z=[];$n[C.path]===$n.weights?x.traverse(function(R){R.morphTargetInfluences&&Z.push(R.name?R.name:R.uuid)}):Z.push(S);let U=y.array;if(y.normalized){const R=Go(U.constructor),D=new Float32Array(U.length);for(let B=0,Y=U.length;B<Y;B++)D[B]=U[B]*R;U=D}for(let R=0,D=Z.length;R<D;R++){const B=new L(Z[R]+"."+$n[C.path],M.array,U,A);T.interpolation==="CUBICSPLINE"&&(B.createInterpolant=function(re){const Q=this instanceof Ei?Av:zh;return new Q(this.times,this.values,this.getValueSize()/3,re)},B.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0),m.push(B)}}return new D_(i,void 0,m)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const s=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&s.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),s})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),s=[],a=i.children||[];for(let c=0,u=a.length;c<u;c++)s.push(n.getDependency("node",a[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(s),l]).then(function(c){const u=c[0],h=c[1],d=c[2];d!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(d,Uv)});for(let f=0,g=h.length;f<g;f++)u.add(h[f]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],s=r.name?i.createUniqueName(r.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(r.isBone===!0?u=new Ph:c.length>1?u=new xn:c.length===1?u=c[0]:u=new mt,u!==c[0])for(let h=0,d=c.length;h<d;h++)u.add(c[h]);if(r.name&&(u.userData.name=r.name,u.name=s),ei(u,r),r.extensions&&Qr(n,u,r),r.matrix!==void 0){const h=new We;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return i.associations.has(u)||i.associations.set(u,{}),i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new xn;n.name&&(r.name=i.createUniqueName(n.name)),ei(r,n),n.extensions&&Qr(t,r,n);const s=n.nodes||[],a=[];for(let l=0,c=s.length;l<c;l++)a.push(i.getDependency("node",s[l]));return Promise.all(a).then(function(l){for(let u=0,h=l.length;u<h;u++)r.add(l[u]);const c=u=>{const h=new Map;for(const[d,f]of i.associations)(d instanceof ln||d instanceof Tt)&&h.set(d,f);return u.traverse(d=>{const f=i.associations.get(d);f!=null&&h.set(d,f)}),h};return i.associations=c(r),r})}}function Nv(o,e,t){const n=e.attributes,i=new Ln;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new F(l[0],l[1],l[2]),new F(c[0],c[1],c[2])),a.normalized){const u=Go(fr[a.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new F,l=new F;for(let c=0,u=r.length;c<u;c++){const h=r[c];if(h.POSITION!==void 0){const d=t.json.accessors[h.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){const _=Go(fr[d.componentType]);l.multiplyScalar(_)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}o.boundingBox=i;const s=new Pn;i.getCenter(s.center),s.radius=i.min.distanceTo(i.max)/2,o.boundingSphere=s}function bu(o,e,t){const n=e.attributes,i=[];function r(s,a){return t.getDependency("accessor",s).then(function(l){o.setAttribute(a,l)})}for(const s in n){const a=zo[s]||s.toLowerCase();a in o.attributes||i.push(r(n[s],a))}if(e.indices!==void 0&&!o.index){const s=t.getDependency("accessor",e.indices).then(function(a){o.setIndex(a)});i.push(s)}return ei(o,e),Nv(o,e,t),Promise.all(i).then(function(){return e.targets!==void 0?Pv(o,e.targets,t):o})}const da=new Oh;da.onError=function(o){console.error("There was an error loading "+o)};const tt={GLTF_LOADER:new sv(da),TEX_LOADER:new Fh(da),TEX_LOAD(o){return o in bo||(bo[o]=this.TEX_LOADER.load(o)),bo[o]},SPRITE_LOAD(o="./circle-info-solid.svg"){const e=this.TEX_LOAD(o),t=new Ch({map:e,transparent:!0});return new v_(t)},LOAD_MANAGER:da,WORLD_POS:new F,CAM_POS:new F,WORLD_QUAT:new un,WORLD_QUAT2:new un,SPHERE_GEOM:new al(1,30,30)},bo={};class Hn extends ot{static getDefaults(){const e=document.createElement("canvas");e.id="main",Re.getInstance().state.canvas=e;const t=new Eh({canvas:Re.getInstance().state.canvas,antialias:!0,alpha:!0,logarithmicDepthBuffer:!0});t.setPixelRatio(Math.min(window.devicePixelRatio,2)),t.shadowMap.enabled=!0,t.shadowMap.type=Qu,t.setClearColor(0);const n=new iv;return n.setSize(window.innerWidth,window.innerHeight),n.domElement.style.position="absolute",n.domElement.style.top="0px",n.domElement.id="renderer2d",{renderer3d:t,renderer2d:n,shouldFollow:!1}}}ue(Hn,"typeID",crypto.randomUUID());class Ct extends ot{static getDefaults(){const e=new __,t=tt.TEX_LOAD("./starmap_8k.webp");return t.mapping=ma,t.encoding=st,e.background=t,{scene:e}}}ue(Ct,"typeID",crypto.randomUUID());class Bt extends ot{static getDefaults(e){const t=new Nt(55,Re.getInstance().state.canvas.clientWidth/Re.getInstance().state.canvas.clientHeight,1e-5,1e12);return t.position.z=1200,{active:t,defaultPos:e}}init(){if(!this.dependendQueries)return;this.data.defaultPos&&this.data.active.position.copy(this.data.defaultPos);const e=this.dependendQueries[0].entities[0].getComponent(Hn).data.renderer3d;this.data.freeCtrl=new tv(this.data.active,e.domElement),this.data.freeCtrl.enableDamping=!0,this.data.freeCtrl.dampingFactor=.5}}ue(Bt,"dependencies",[Ne("exist",Hn)]),ue(Bt,"typeID",crypto.randomUUID());class hn extends ot{static getDefaults(e){const t=new Nt(55,Re.getInstance().state.canvas.clientWidth/Re.getInstance().state.canvas.clientHeight,1e-5,1e12),n=new mt;n.add(t),t.position.z=1200;const i=new F,r=new F;return{cam:t,camPivot:n,target:e&&[e,0],currentPosition:i,currentLookat:r}}}ue(hn,"dependencies",[]),ue(hn,"typeID",crypto.randomUUID());class kt extends ot{static getDefaults(e){return{name:e.name,uuid:crypto.randomUUID(),parent:e.parent,texts:e.texts}}}ue(kt,"typeID",crypto.randomUUID());class Ai extends ot{}ue(Ai,"typeID",crypto.randomUUID());class Ms extends ys{}ue(Ms,"typeID",crypto.randomUUID());class Gh extends ys{}ue(Gh,"typeID",crypto.randomUUID());class Fv extends ys{}ue(Fv,"typeID",crypto.randomUUID());class Cr extends ys{}ue(Cr,"typeID",crypto.randomUUID());const kv="modulepreload",Bv=function(o,e){return new URL(o,e).href},Su={},_a=function(e,t,n){if(!t||t.length===0)return e();const i=document.getElementsByTagName("link");return Promise.all(t.map(r=>{if(r=Bv(r,n),r in Su)return;Su[r]=!0;const s=r.endsWith(".css"),a=s?'[rel="stylesheet"]':"";if(!!n)for(let u=i.length-1;u>=0;u--){const h=i[u];if(h.href===r&&(!s||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${a}`))return;const c=document.createElement("link");if(c.rel=s?"stylesheet":kv,s||(c.as="script",c.crossOrigin=""),c.href=r,document.head.appendChild(c),s)return new Promise((u,h)=>{c.addEventListener("load",u),c.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>e()).catch(r=>{const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=r,window.dispatchEvent(s),!s.defaultPrevented)throw r})},Vo=Math.PI/180;function Vh(o,e,t){return Math.max(e,Math.min(t,o))}function Ho(o,e,t,n,i){return n+(o-e)*(i-n)/(t-e)}function wu(o,e,t){return(1-t)*o+t*e}function My(o,e){return o+Math.random()*(e-o)}function zv(){var o=Object.create(null);function e(i,r){var s=i.id,a=i.name,l=i.dependencies;l===void 0&&(l=[]);var c=i.init;c===void 0&&(c=function(){});var u=i.getTransferables;if(u===void 0&&(u=null),!o[s])try{l=l.map(function(d){return d&&d.isWorkerModule&&(e(d,function(f){if(f instanceof Error)throw f}),d=o[d.id].value),d}),c=n("<"+a+">.init",c),u&&(u=n("<"+a+">.getTransferables",u));var h=null;typeof c=="function"?h=c.apply(void 0,l):console.error("worker module init function failed to rehydrate"),o[s]={id:s,value:h,getTransferables:u},r(h)}catch(d){d&&d.noLog||console.error(d),r(d)}}function t(i,r){var s,a=i.id,l=i.args;(!o[a]||typeof o[a].value!="function")&&r(new Error("Worker module "+a+": not found or its 'init' did not return a function"));try{var c=(s=o[a]).value.apply(s,l);c&&typeof c.then=="function"?c.then(u,function(h){return r(h instanceof Error?h:new Error(""+h))}):u(c)}catch(h){r(h)}function u(h){try{var d=o[a].getTransferables&&o[a].getTransferables(h);(!d||!Array.isArray(d)||!d.length)&&(d=void 0),r(h,d)}catch(f){console.error(f),r(f)}}}function n(i,r){var s=void 0;self.troikaDefine=function(l){return s=l};var a=URL.createObjectURL(new Blob(["/** "+i.replace(/\*/g,"")+` **/

troikaDefine(
`+r+`
)`],{type:"application/javascript"}));try{importScripts(a)}catch(l){console.error(l)}return URL.revokeObjectURL(a),delete self.troikaDefine,s}self.addEventListener("message",function(i){var r=i.data,s=r.messageId,a=r.action,l=r.data;try{a==="registerModule"&&e(l,function(c){c instanceof Error?postMessage({messageId:s,success:!1,error:c.message}):postMessage({messageId:s,success:!0,result:{isCallable:typeof c=="function"}})}),a==="callModule"&&t(l,function(c,u){c instanceof Error?postMessage({messageId:s,success:!1,error:c.message}):postMessage({messageId:s,success:!0,result:c},u||void 0)})}catch(c){postMessage({messageId:s,success:!1,error:c.stack})}})}function Gv(o){var e=function(){for(var t=[],n=arguments.length;n--;)t[n]=arguments[n];return e._getInitResult().then(function(i){if(typeof i=="function")return i.apply(void 0,t);throw new Error("Worker module function was called but `init` did not return a callable function")})};return e._getInitResult=function(){var t=o.dependencies,n=o.init;t=Array.isArray(t)?t.map(function(r){return r&&r._getInitResult?r._getInitResult():r}):[];var i=Promise.all(t).then(function(r){return n.apply(null,r)});return e._getInitResult=function(){return i},i},e}var Hh=function(){var o=!1;if(typeof window<"u"&&typeof window.document<"u")try{var e=new Worker(URL.createObjectURL(new Blob([""],{type:"application/javascript"})));e.terminate(),o=!0}catch(t){typeof process<"u",console.log("Troika createWorkerModule: web workers not allowed; falling back to main thread execution. Cause: ["+t.message+"]")}return Hh=function(){return o},o},Vv=0,Hv=0,So=!1,is=Object.create(null),rs=Object.create(null),Wo=Object.create(null);function bs(o){if((!o||typeof o.init!="function")&&!So)throw new Error("requires `options.init` function");var e=o.dependencies,t=o.init,n=o.getTransferables,i=o.workerId;if(!Hh())return Gv(o);i==null&&(i="#default");var r="workerModule"+ ++Vv,s=o.name||r,a=null;e=e&&e.map(function(c){return typeof c=="function"&&!c.workerModuleData&&(So=!0,c=bs({workerId:i,name:"<"+s+"> function dependency: "+c.name,init:`function(){return (
`+fa(c)+`
)}`}),So=!1),c&&c.workerModuleData&&(c=c.workerModuleData),c});function l(){for(var c=[],u=arguments.length;u--;)c[u]=arguments[u];if(!a){a=Tu(i,"registerModule",l.workerModuleData);var h=function(){a=null,rs[i].delete(h)};(rs[i]||(rs[i]=new Set)).add(h)}return a.then(function(d){var f=d.isCallable;if(f)return Tu(i,"callModule",{id:r,args:c});throw new Error("Worker module function was called but `init` did not return a callable function")})}return l.workerModuleData={isWorkerModule:!0,id:r,name:s,dependencies:e,init:fa(t),getTransferables:n&&fa(n)},l}function Wv(o){rs[o]&&rs[o].forEach(function(e){e()}),is[o]&&(is[o].terminate(),delete is[o])}function fa(o){var e=o.toString();return!/^function/.test(e)&&/^\w+\s*\(/.test(e)&&(e="function "+e),e}function Xv(o){var e=is[o];if(!e){var t=fa(zv);e=is[o]=new Worker(URL.createObjectURL(new Blob(["/** Worker Module Bootstrap: "+o.replace(/\*/g,"")+` **/

;(`+t+")()"],{type:"application/javascript"}))),e.onmessage=function(n){var i=n.data,r=i.messageId,s=Wo[r];if(!s)throw new Error("WorkerModule response with empty or unknown messageId");delete Wo[r],s(i)}}return e}function Tu(o,e,t){return new Promise(function(n,i){var r=++Hv;Wo[r]=function(s){s.success?n(s.result):i(new Error("Error in worker "+e+" call: "+s.error))},Xv(o).postMessage({messageId:r,action:e,data:t})})}function Wh(){var o=function(e){function t(G,K,N,W,k,z,H,ee){var I=1-H;ee.x=I*I*G+2*I*H*N+H*H*k,ee.y=I*I*K+2*I*H*W+H*H*z}function n(G,K,N,W,k,z,H,ee,I,ie){var he=1-I;ie.x=he*he*he*G+3*he*he*I*N+3*he*I*I*k+I*I*I*H,ie.y=he*he*he*K+3*he*he*I*W+3*he*I*I*z+I*I*I*ee}function i(G,K){for(var N=/([MLQCZ])([^MLQCZ]*)/g,W,k,z,H,ee;W=N.exec(G);){var I=W[2].replace(/^\s*|\s*$/g,"").split(/[,\s]+/).map(function(ie){return parseFloat(ie)});switch(W[1]){case"M":H=k=I[0],ee=z=I[1];break;case"L":(I[0]!==H||I[1]!==ee)&&K("L",H,ee,H=I[0],ee=I[1]);break;case"Q":{K("Q",H,ee,H=I[2],ee=I[3],I[0],I[1]);break}case"C":{K("C",H,ee,H=I[4],ee=I[5],I[0],I[1],I[2],I[3]);break}case"Z":(H!==k||ee!==z)&&K("L",H,ee,k,z);break}}}function r(G,K,N){N===void 0&&(N=16);var W={x:0,y:0};i(G,function(k,z,H,ee,I,ie,he,se,le){switch(k){case"L":K(z,H,ee,I);break;case"Q":{for(var oe=z,ye=H,Ee=1;Ee<N;Ee++)t(z,H,ie,he,ee,I,Ee/(N-1),W),K(oe,ye,W.x,W.y),oe=W.x,ye=W.y;break}case"C":{for(var Me=z,Te=H,Ie=1;Ie<N;Ie++)n(z,H,ie,he,se,le,ee,I,Ie/(N-1),W),K(Me,Te,W.x,W.y),Me=W.x,Te=W.y;break}}})}var s="precision highp float;attribute vec2 aUV;varying vec2 vUV;void main(){vUV=aUV;gl_Position=vec4(mix(vec2(-1.0),vec2(1.0),aUV),0.0,1.0);}",a="precision highp float;uniform sampler2D tex;varying vec2 vUV;void main(){gl_FragColor=texture2D(tex,vUV);}",l=new WeakMap,c={premultipliedAlpha:!1,preserveDrawingBuffer:!0,antialias:!1,depth:!1};function u(G,K){var N=G.getContext?G.getContext("webgl",c):G,W=l.get(N);if(!W){let he=function(Me){var Te=z[Me];if(!Te&&(Te=z[Me]=N.getExtension(Me),!Te))throw new Error(Me+" not supported");return Te},se=function(Me,Te){var Ie=N.createShader(Te);return N.shaderSource(Ie,Me),N.compileShader(Ie),Ie},le=function(Me,Te,Ie,ge){if(!H[Me]){var Se={},be={},fe=N.createProgram();N.attachShader(fe,se(Te,N.VERTEX_SHADER)),N.attachShader(fe,se(Ie,N.FRAGMENT_SHADER)),N.linkProgram(fe),H[Me]={program:fe,transaction:function(b){N.useProgram(fe),b({setUniform:function(J,ce){for(var pe=[],P=arguments.length-2;P-- >0;)pe[P]=arguments[P+2];var $=be[ce]||(be[ce]=N.getUniformLocation(fe,ce));N["uniform"+J].apply(N,[$].concat(pe))},setAttribute:function(J,ce,pe,P,$){var X=Se[J];X||(X=Se[J]={buf:N.createBuffer(),loc:N.getAttribLocation(fe,J),data:null}),N.bindBuffer(N.ARRAY_BUFFER,X.buf),N.vertexAttribPointer(X.loc,ce,N.FLOAT,!1,0,0),N.enableVertexAttribArray(X.loc),k?N.vertexAttribDivisor(X.loc,P):he("ANGLE_instanced_arrays").vertexAttribDivisorANGLE(X.loc,P),$!==X.data&&(N.bufferData(N.ARRAY_BUFFER,$,pe),X.data=$)}})}}}H[Me].transaction(ge)},oe=function(Me,Te){I++;try{N.activeTexture(N.TEXTURE0+I);var Ie=ee[Me];Ie||(Ie=ee[Me]=N.createTexture(),N.bindTexture(N.TEXTURE_2D,Ie),N.texParameteri(N.TEXTURE_2D,N.TEXTURE_MIN_FILTER,N.NEAREST),N.texParameteri(N.TEXTURE_2D,N.TEXTURE_MAG_FILTER,N.NEAREST)),N.bindTexture(N.TEXTURE_2D,Ie),Te(Ie,I)}finally{I--}},ye=function(Me,Te,Ie){var ge=N.createFramebuffer();ie.push(ge),N.bindFramebuffer(N.FRAMEBUFFER,ge),N.activeTexture(N.TEXTURE0+Te),N.bindTexture(N.TEXTURE_2D,Me),N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Me,0);try{Ie(ge)}finally{N.deleteFramebuffer(ge),N.bindFramebuffer(N.FRAMEBUFFER,ie[--ie.length-1]||null)}},Ee=function(){z={},H={},ee={},I=-1,ie.length=0};var k=typeof WebGL2RenderingContext<"u"&&N instanceof WebGL2RenderingContext,z={},H={},ee={},I=-1,ie=[];N.canvas.addEventListener("webglcontextlost",function(Me){Ee(),Me.preventDefault()},!1),l.set(N,W={gl:N,isWebGL2:k,getExtension:he,withProgram:le,withTexture:oe,withTextureFramebuffer:ye,handleContextLoss:Ee})}K(W)}function h(G,K,N,W,k,z,H,ee){H===void 0&&(H=15),ee===void 0&&(ee=null),u(G,function(I){var ie=I.gl,he=I.withProgram,se=I.withTexture;se("copy",function(le,oe){ie.texImage2D(ie.TEXTURE_2D,0,ie.RGBA,k,z,0,ie.RGBA,ie.UNSIGNED_BYTE,K),he("copy",s,a,function(ye){var Ee=ye.setUniform,Me=ye.setAttribute;Me("aUV",2,ie.STATIC_DRAW,0,new Float32Array([0,0,2,0,0,2])),Ee("1i","image",oe),ie.bindFramebuffer(ie.FRAMEBUFFER,ee||null),ie.disable(ie.BLEND),ie.colorMask(H&8,H&4,H&2,H&1),ie.viewport(N,W,k,z),ie.scissor(N,W,k,z),ie.drawArrays(ie.TRIANGLES,0,3)})})})}function d(G,K,N){var W=G.width,k=G.height;u(G,function(z){var H=z.gl,ee=new Uint8Array(W*k*4);H.readPixels(0,0,W,k,H.RGBA,H.UNSIGNED_BYTE,ee),G.width=K,G.height=N,h(H,ee,0,0,W,k)})}var f=Object.freeze({__proto__:null,withWebGLContext:u,renderImageData:h,resizeWebGLCanvasWithoutClearing:d});function g(G,K,N,W,k,z){z===void 0&&(z=1);var H=new Uint8Array(G*K),ee=W[2]-W[0],I=W[3]-W[1],ie=[];r(N,function(Me,Te,Ie,ge){ie.push({x1:Me,y1:Te,x2:Ie,y2:ge,minX:Math.min(Me,Ie),minY:Math.min(Te,ge),maxX:Math.max(Me,Ie),maxY:Math.max(Te,ge)})}),ie.sort(function(Me,Te){return Me.maxX-Te.maxX});for(var he=0;he<G;he++)for(var se=0;se<K;se++){var le=ye(W[0]+ee*(he+.5)/G,W[1]+I*(se+.5)/K),oe=Math.pow(1-Math.abs(le)/k,z)/2;le<0&&(oe=1-oe),oe=Math.max(0,Math.min(255,Math.round(oe*255))),H[se*G+he]=oe}return H;function ye(Me,Te){for(var Ie=1/0,ge=1/0,Se=ie.length;Se--;){var be=ie[Se];if(be.maxX+ge<=Me)break;if(Me+ge>be.minX&&Te-ge<be.maxY&&Te+ge>be.minY){var fe=p(Me,Te,be.x1,be.y1,be.x2,be.y2);fe<Ie&&(Ie=fe,ge=Math.sqrt(Ie))}}return Ee(Me,Te)&&(ge=-ge),ge}function Ee(Me,Te){for(var Ie=0,ge=ie.length;ge--;){var Se=ie[ge];if(Se.maxX<=Me)break;var be=Se.y1>Te!=Se.y2>Te&&Me<(Se.x2-Se.x1)*(Te-Se.y1)/(Se.y2-Se.y1)+Se.x1;be&&(Ie+=Se.y1<Se.y2?1:-1)}return Ie!==0}}function _(G,K,N,W,k,z,H,ee,I,ie){z===void 0&&(z=1),ee===void 0&&(ee=0),I===void 0&&(I=0),ie===void 0&&(ie=0),m(G,K,N,W,k,z,H,null,ee,I,ie)}function m(G,K,N,W,k,z,H,ee,I,ie,he){z===void 0&&(z=1),I===void 0&&(I=0),ie===void 0&&(ie=0),he===void 0&&(he=0);for(var se=g(G,K,N,W,k,z),le=new Uint8Array(se.length*4),oe=0;oe<se.length;oe++)le[oe*4+he]=se[oe];h(H,le,I,ie,G,K,1<<3-he,ee)}function p(G,K,N,W,k,z){var H=k-N,ee=z-W,I=H*H+ee*ee,ie=I?Math.max(0,Math.min(1,((G-N)*H+(K-W)*ee)/I)):0,he=G-(N+ie*H),se=K-(W+ie*ee);return he*he+se*se}var v=Object.freeze({__proto__:null,generate:g,generateIntoCanvas:_,generateIntoFramebuffer:m}),x="precision highp float;uniform vec4 uGlyphBounds;attribute vec2 aUV;attribute vec4 aLineSegment;varying vec4 vLineSegment;varying vec2 vGlyphXY;void main(){vLineSegment=aLineSegment;vGlyphXY=mix(uGlyphBounds.xy,uGlyphBounds.zw,aUV);gl_Position=vec4(mix(vec2(-1.0),vec2(1.0),aUV),0.0,1.0);}",M="precision highp float;uniform vec4 uGlyphBounds;uniform float uMaxDistance;uniform float uExponent;varying vec4 vLineSegment;varying vec2 vGlyphXY;float absDistToSegment(vec2 point,vec2 lineA,vec2 lineB){vec2 lineDir=lineB-lineA;float lenSq=dot(lineDir,lineDir);float t=lenSq==0.0 ? 0.0 : clamp(dot(point-lineA,lineDir)/lenSq,0.0,1.0);vec2 linePt=lineA+t*lineDir;return distance(point,linePt);}void main(){vec4 seg=vLineSegment;vec2 p=vGlyphXY;float dist=absDistToSegment(p,seg.xy,seg.zw);float val=pow(1.0-clamp(dist/uMaxDistance,0.0,1.0),uExponent)*0.5;bool crossing=(seg.y>p.y!=seg.w>p.y)&&(p.x<(seg.z-seg.x)*(p.y-seg.y)/(seg.w-seg.y)+seg.x);bool crossingUp=crossing&&vLineSegment.y<vLineSegment.w;gl_FragColor=vec4(crossingUp ? 1.0/255.0 : 0.0,crossing&&!crossingUp ? 1.0/255.0 : 0.0,0.0,val);}",y="precision highp float;uniform sampler2D tex;varying vec2 vUV;void main(){vec4 color=texture2D(tex,vUV);bool inside=color.r!=color.g;float val=inside ? 1.0-color.a : color.a;gl_FragColor=vec4(val);}",T=new Float32Array([0,0,2,0,0,2]),C=null,L=!1,S={},A=new WeakMap;function Z(G){if(!L&&!B(G))throw new Error("WebGL generation not supported")}function U(G,K,N,W,k,z,H){if(z===void 0&&(z=1),H===void 0&&(H=null),!H&&(H=C,!H)){var ee=typeof OffscreenCanvas=="function"?new OffscreenCanvas(1,1):typeof document<"u"?document.createElement("canvas"):null;if(!ee)throw new Error("OffscreenCanvas or DOM canvas not supported");H=C=ee.getContext("webgl",{depth:!1})}Z(H);var I=new Uint8Array(G*K*4);u(H,function(le){var oe=le.gl,ye=le.withTexture,Ee=le.withTextureFramebuffer;ye("readable",function(Me,Te){oe.texImage2D(oe.TEXTURE_2D,0,oe.RGBA,G,K,0,oe.RGBA,oe.UNSIGNED_BYTE,null),Ee(Me,Te,function(Ie){D(G,K,N,W,k,z,oe,Ie,0,0,0),oe.readPixels(0,0,G,K,oe.RGBA,oe.UNSIGNED_BYTE,I)})})});for(var ie=new Uint8Array(G*K),he=0,se=0;he<I.length;he+=4)ie[se++]=I[he];return ie}function R(G,K,N,W,k,z,H,ee,I,ie){z===void 0&&(z=1),ee===void 0&&(ee=0),I===void 0&&(I=0),ie===void 0&&(ie=0),D(G,K,N,W,k,z,H,null,ee,I,ie)}function D(G,K,N,W,k,z,H,ee,I,ie,he){z===void 0&&(z=1),I===void 0&&(I=0),ie===void 0&&(ie=0),he===void 0&&(he=0),Z(H);var se=[];r(N,function(le,oe,ye,Ee){se.push(le,oe,ye,Ee)}),se=new Float32Array(se),u(H,function(le){var oe=le.gl,ye=le.isWebGL2,Ee=le.getExtension,Me=le.withProgram,Te=le.withTexture,Ie=le.withTextureFramebuffer,ge=le.handleContextLoss;if(Te("rawDistances",function(Se,be){(G!==Se._lastWidth||K!==Se._lastHeight)&&oe.texImage2D(oe.TEXTURE_2D,0,oe.RGBA,Se._lastWidth=G,Se._lastHeight=K,0,oe.RGBA,oe.UNSIGNED_BYTE,null),Me("main",x,M,function(fe){var w=fe.setAttribute,b=fe.setUniform,V=!ye&&Ee("ANGLE_instanced_arrays"),J=!ye&&Ee("EXT_blend_minmax");w("aUV",2,oe.STATIC_DRAW,0,T),w("aLineSegment",4,oe.DYNAMIC_DRAW,1,se),b.apply(void 0,["4f","uGlyphBounds"].concat(W)),b("1f","uMaxDistance",k),b("1f","uExponent",z),Ie(Se,be,function(ce){oe.enable(oe.BLEND),oe.colorMask(!0,!0,!0,!0),oe.viewport(0,0,G,K),oe.scissor(0,0,G,K),oe.blendFunc(oe.ONE,oe.ONE),oe.blendEquationSeparate(oe.FUNC_ADD,ye?oe.MAX:J.MAX_EXT),oe.clear(oe.COLOR_BUFFER_BIT),ye?oe.drawArraysInstanced(oe.TRIANGLES,0,3,se.length/4):V.drawArraysInstancedANGLE(oe.TRIANGLES,0,3,se.length/4)})}),Me("post",s,y,function(fe){fe.setAttribute("aUV",2,oe.STATIC_DRAW,0,T),fe.setUniform("1i","tex",be),oe.bindFramebuffer(oe.FRAMEBUFFER,ee),oe.disable(oe.BLEND),oe.colorMask(he===0,he===1,he===2,he===3),oe.viewport(I,ie,G,K),oe.scissor(I,ie,G,K),oe.drawArrays(oe.TRIANGLES,0,3)})}),oe.isContextLost())throw ge(),new Error("webgl context lost")})}function B(G){var K=!G||G===C?S:G.canvas||G,N=A.get(K);if(N===void 0){L=!0;var W=null;try{var k=[97,106,97,61,99,137,118,80,80,118,137,99,61,97,106,97],z=U(4,4,"M8,8L16,8L24,24L16,24Z",[0,0,32,32],24,1,G);N=z&&k.length===z.length&&z.every(function(H,ee){return H===k[ee]}),N||(W="bad trial run results",console.info(k,z))}catch(H){N=!1,W=H.message}W&&console.warn("WebGL SDF generation not supported:",W),L=!1,A.set(K,N)}return N}var Y=Object.freeze({__proto__:null,generate:U,generateIntoCanvas:R,generateIntoFramebuffer:D,isSupported:B});function re(G,K,N,W,k,z){k===void 0&&(k=Math.max(W[2]-W[0],W[3]-W[1])/2),z===void 0&&(z=1);try{return U.apply(Y,arguments)}catch(H){return console.info("WebGL SDF generation failed, falling back to JS",H),g.apply(v,arguments)}}function Q(G,K,N,W,k,z,H,ee,I,ie){k===void 0&&(k=Math.max(W[2]-W[0],W[3]-W[1])/2),z===void 0&&(z=1),ee===void 0&&(ee=0),I===void 0&&(I=0),ie===void 0&&(ie=0);try{return R.apply(Y,arguments)}catch(he){return console.info("WebGL SDF generation failed, falling back to JS",he),_.apply(v,arguments)}}return e.forEachPathCommand=i,e.generate=re,e.generateIntoCanvas=Q,e.javascript=v,e.pathToLineSegments=r,e.webgl=Y,e.webglUtils=f,Object.defineProperty(e,"__esModule",{value:!0}),e}({});return o}function jv(){var o=function(e){var t={R:"13k,1a,2,3,3,2+1j,ch+16,a+1,5+2,2+n,5,a,4,6+16,4+3,h+1b,4mo,179q,2+9,2+11,2i9+7y,2+68,4,3+4,5+13,4+3,2+4k,3+29,8+cf,1t+7z,w+17,3+3m,1t+3z,16o1+5r,8+30,8+mc,29+1r,29+4v,75+73",EN:"1c+9,3d+1,6,187+9,513,4+5,7+9,sf+j,175h+9,qw+q,161f+1d,4xt+a,25i+9",ES:"17,2,6dp+1,f+1,av,16vr,mx+1,4o,2",ET:"z+2,3h+3,b+1,ym,3e+1,2o,p4+1,8,6u,7c,g6,1wc,1n9+4,30+1b,2n,6d,qhx+1,h0m,a+1,49+2,63+1,4+1,6bb+3,12jj",AN:"16o+5,2j+9,2+1,35,ed,1ff2+9,87+u",CS:"18,2+1,b,2u,12k,55v,l,17v0,2,3,53,2+1,b",B:"a,3,f+2,2v,690",S:"9,2,k",WS:"c,k,4f4,1vk+a,u,1j,335",ON:"x+1,4+4,h+5,r+5,r+3,z,5+3,2+1,2+1,5,2+2,3+4,o,w,ci+1,8+d,3+d,6+8,2+g,39+1,9,6+1,2,33,b8,3+1,3c+1,7+1,5r,b,7h+3,sa+5,2,3i+6,jg+3,ur+9,2v,ij+1,9g+9,7+a,8m,4+1,49+x,14u,2+2,c+2,e+2,e+2,e+1,i+n,e+e,2+p,u+2,e+2,36+1,2+3,2+1,b,2+2,6+5,2,2,2,h+1,5+4,6+3,3+f,16+2,5+3l,3+81,1y+p,2+40,q+a,m+13,2r+ch,2+9e,75+hf,3+v,2+2w,6e+5,f+6,75+2a,1a+p,2+2g,d+5x,r+b,6+3,4+o,g,6+1,6+2,2k+1,4,2j,5h+z,1m+1,1e+f,t+2,1f+e,d+3,4o+3,2s+1,w,535+1r,h3l+1i,93+2,2s,b+1,3l+x,2v,4g+3,21+3,kz+1,g5v+1,5a,j+9,n+v,2,3,2+8,2+1,3+2,2,3,46+1,4+4,h+5,r+5,r+a,3h+2,4+6,b+4,78,1r+24,4+c,4,1hb,ey+6,103+j,16j+c,1ux+7,5+g,fsh,jdq+1t,4,57+2e,p1,1m,1m,1m,1m,4kt+1,7j+17,5+2r,d+e,3+e,2+e,2+10,m+4,w,1n+5,1q,4z+5,4b+rb,9+c,4+c,4+37,d+2g,8+b,l+b,5+1j,9+9,7+13,9+t,3+1,27+3c,2+29,2+3q,d+d,3+4,4+2,6+6,a+o,8+6,a+2,e+6,16+42,2+1i",BN:"0+8,6+d,2s+5,2+p,e,4m9,1kt+2,2b+5,5+5,17q9+v,7k,6p+8,6+1,119d+3,440+7,96s+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+75,6p+2rz,1ben+1,1ekf+1,1ekf+1",NSM:"lc+33,7o+6,7c+18,2,2+1,2+1,2,21+a,1d+k,h,2u+6,3+5,3+1,2+3,10,v+q,2k+a,1n+8,a,p+3,2+8,2+2,2+4,18+2,3c+e,2+v,1k,2,5+7,5,4+6,b+1,u,1n,5+3,9,l+1,r,3+1,1m,5+1,5+1,3+2,4,v+1,4,c+1,1m,5+4,2+1,5,l+1,n+5,2,1n,3,2+3,9,8+1,c+1,v,1q,d,1f,4,1m+2,6+2,2+3,8+1,c+1,u,1n,g+1,l+1,t+1,1m+1,5+3,9,l+1,u,21,8+2,2,2j,3+6,d+7,2r,3+8,c+5,23+1,s,2,2,1k+d,2+4,2+1,6+a,2+z,a,2v+3,2+5,2+1,3+1,q+1,5+2,h+3,e,3+1,7,g,jk+2,qb+2,u+2,u+1,v+1,1t+1,2+6,9,3+a,a,1a+2,3c+1,z,3b+2,5+1,a,7+2,64+1,3,1n,2+6,2,2,3+7,7+9,3,1d+g,1s+3,1d,2+4,2,6,15+8,d+1,x+3,3+1,2+2,1l,2+1,4,2+2,1n+7,3+1,49+2,2+c,2+6,5,7,4+1,5j+1l,2+4,k1+w,2db+2,3y,2p+v,ff+3,30+1,n9x+3,2+9,x+1,29+1,7l,4,5,q+1,6,48+1,r+h,e,13+7,q+a,1b+2,1d,3+3,3+1,14,1w+5,3+1,3+1,d,9,1c,1g,2+2,3+1,6+1,2,17+1,9,6n,3,5,fn5,ki+f,h+f,r2,6b,46+4,1af+2,2+1,6+3,15+2,5,4m+1,fy+3,as+1,4a+a,4x,1j+e,1l+2,1e+3,3+1,1y+2,11+4,2+7,1r,d+1,1h+8,b+3,3,2o+2,3,2+1,7,4h,4+7,m+1,1m+1,4,12+6,4+4,5g+7,3+2,2,o,2d+5,2,5+1,2+1,6n+3,7+1,2+1,s+1,2e+7,3,2+1,2z,2,3+5,2,2u+2,3+3,2+4,78+8,2+1,75+1,2,5,41+3,3+1,5,x+5,3+1,15+5,3+3,9,a+5,3+2,1b+c,2+1,bb+6,2+5,2d+l,3+6,2+1,2+1,3f+5,4,2+1,2+6,2,21+1,4,2,9o+1,f0c+4,1o+6,t5,1s+3,2a,f5l+1,43t+2,i+7,3+6,v+3,45+2,1j0+1i,5+1d,9,f,n+4,2+e,11t+6,2+g,3+6,2+1,2+4,7a+6,c6+3,15t+6,32+6,gzhy+6n",AL:"16w,3,2,e+1b,z+2,2+2s,g+1,8+1,b+m,2+t,s+2i,c+e,4h+f,1d+1e,1bwe+dp,3+3z,x+c,2+1,35+3y,2rm+z,5+7,b+5,dt+l,c+u,17nl+27,1t+27,4x+6n,3+d",LRO:"6ct",RLO:"6cu",LRE:"6cq",RLE:"6cr",PDF:"6cs",LRI:"6ee",RLI:"6ef",FSI:"6eg",PDI:"6eh"},n={},i={};n.L=1,i[1]="L",Object.keys(t).forEach(function(ge,Se){n[ge]=1<<Se+1,i[n[ge]]=ge}),Object.freeze(n);var r=n.LRI|n.RLI|n.FSI,s=n.L|n.R|n.AL,a=n.B|n.S|n.WS|n.ON|n.FSI|n.LRI|n.RLI|n.PDI,l=n.BN|n.RLE|n.LRE|n.RLO|n.LRO|n.PDF,c=n.S|n.WS|n.B|r|n.PDI|l,u=null;function h(){if(!u){u=new Map;var ge=function(be){if(t.hasOwnProperty(be)){var fe=0;t[be].split(",").forEach(function(w){var b=w.split("+"),V=b[0],J=b[1];V=parseInt(V,36),J=J?parseInt(J,36):0,u.set(fe+=V,n[be]);for(var ce=0;ce<J;ce++)u.set(++fe,n[be])})}};for(var Se in t)ge(Se)}}function d(ge){return h(),u.get(ge.codePointAt(0))||n.L}function f(ge){return i[d(ge)]}var g={pairs:"14>1,1e>2,u>2,2wt>1,1>1,1ge>1,1wp>1,1j>1,f>1,hm>1,1>1,u>1,u6>1,1>1,+5,28>1,w>1,1>1,+3,b8>1,1>1,+3,1>3,-1>-1,3>1,1>1,+2,1s>1,1>1,x>1,th>1,1>1,+2,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,4q>1,1e>2,u>2,2>1,+1",canonical:"6f1>-6dx,6dy>-6dx,6ec>-6ed,6ee>-6ed,6ww>2jj,-2ji>2jj,14r4>-1e7l,1e7m>-1e7l,1e7m>-1e5c,1e5d>-1e5b,1e5c>-14qx,14qy>-14qx,14vn>-1ecg,1ech>-1ecg,1edu>-1ecg,1eci>-1ecg,1eda>-1ecg,1eci>-1ecg,1eci>-168q,168r>-168q,168s>-14ye,14yf>-14ye"};function _(ge,Se){var be=36,fe=0,w=new Map,b=Se&&new Map,V;return ge.split(",").forEach(function J(ce){if(ce.indexOf("+")!==-1)for(var pe=+ce;pe--;)J(V);else{V=ce;var P=ce.split(">"),$=P[0],X=P[1];$=String.fromCodePoint(fe+=parseInt($,be)),X=String.fromCodePoint(fe+=parseInt(X,be)),w.set($,X),Se&&b.set(X,$)}}),{map:w,reverseMap:b}}var m,p,v;function x(){if(!m){var ge=_(g.pairs,!0),Se=ge.map,be=ge.reverseMap;m=Se,p=be,v=_(g.canonical,!1).map}}function M(ge){return x(),m.get(ge)||null}function y(ge){return x(),p.get(ge)||null}function T(ge){return x(),v.get(ge)||null}var C=n.L,L=n.R,S=n.EN,A=n.ES,Z=n.ET,U=n.AN,R=n.CS,D=n.B,B=n.S,Y=n.ON,re=n.BN,Q=n.NSM,G=n.AL,K=n.LRO,N=n.RLO,W=n.LRE,k=n.RLE,z=n.PDF,H=n.LRI,ee=n.RLI,I=n.FSI,ie=n.PDI;function he(ge,Se){for(var be=125,fe=new Uint32Array(ge.length),w=0;w<ge.length;w++)fe[w]=d(ge[w]);var b=new Map;function V(Dt,mn){var qt=fe[Dt];fe[Dt]=mn,b.set(qt,b.get(qt)-1),qt&a&&b.set(a,b.get(a)-1),b.set(mn,(b.get(mn)||0)+1),mn&a&&b.set(a,(b.get(a)||0)+1)}for(var J=new Uint8Array(ge.length),ce=new Map,pe=[],P=null,$=0;$<ge.length;$++)P||pe.push(P={start:$,end:ge.length-1,level:Se==="rtl"?1:Se==="ltr"?0:wl($,!1)}),fe[$]&D&&(P.end=$,P=null);for(var X=k|W|N|K|r|ie|z|D,xe=function(Dt){return Dt+(Dt&1?1:2)},_e=function(Dt){return Dt+(Dt&1?2:1)},we=0;we<pe.length;we++){P=pe[we];var me=[{_level:P.level,_override:0,_isolate:0}],ve=void 0,Le=0,Pe=0,Ve=0;b.clear();for(var O=P.start;O<=P.end;O++){var te=fe[O];if(ve=me[me.length-1],b.set(te,(b.get(te)||0)+1),te&a&&b.set(a,(b.get(a)||0)+1),te&X)if(te&(k|W)){J[O]=ve._level;var de=(te===k?_e:xe)(ve._level);de<=be&&!Le&&!Pe?me.push({_level:de,_override:0,_isolate:0}):Le||Pe++}else if(te&(N|K)){J[O]=ve._level;var Ae=(te===N?_e:xe)(ve._level);Ae<=be&&!Le&&!Pe?me.push({_level:Ae,_override:te&N?L:C,_isolate:0}):Le||Pe++}else if(te&r){te&I&&(te=wl(O+1,!0)===1?ee:H),J[O]=ve._level,ve._override&&V(O,ve._override);var Ue=(te===ee?_e:xe)(ve._level);Ue<=be&&Le===0&&Pe===0?(Ve++,me.push({_level:Ue,_override:0,_isolate:1,_isolInitIndex:O})):Le++}else if(te&ie){if(Le>0)Le--;else if(Ve>0){for(Pe=0;!me[me.length-1]._isolate;)me.pop();var Je=me[me.length-1]._isolInitIndex;Je!=null&&(ce.set(Je,O),ce.set(O,Je)),me.pop(),Ve--}ve=me[me.length-1],J[O]=ve._level,ve._override&&V(O,ve._override)}else te&z?(Le===0&&(Pe>0?Pe--:!ve._isolate&&me.length>1&&(me.pop(),ve=me[me.length-1])),J[O]=ve._level):te&D&&(J[O]=P.level);else J[O]=ve._level,ve._override&&te!==re&&V(O,ve._override)}for(var Ye=[],at=null,rt=P.start;rt<=P.end;rt++){var dt=fe[rt];if(!(dt&l)){var $e=J[rt],nt=dt&r,Lt=dt===ie;at&&$e===at._level?(at._end=rt,at._endsWithIsolInit=nt):Ye.push(at={_start:rt,_end:rt,_level:$e,_startsWithPDI:Lt,_endsWithIsolInit:nt})}}for(var Pt=[],lt=0;lt<Ye.length;lt++){var xt=Ye[lt];if(!xt._startsWithPDI||xt._startsWithPDI&&!ce.has(xt._start)){for(var jt=[at=xt],E=void 0;at&&at._endsWithIsolInit&&(E=ce.get(at._end))!=null;)for(var j=lt+1;j<Ye.length;j++)if(Ye[j]._start===E){jt.push(at=Ye[j]);break}for(var ne=[],q=0;q<jt.length;q++)for(var ae=jt[q],Oe=ae._start;Oe<=ae._end;Oe++)ne.push(Oe);for(var ke=J[ne[0]],Be=P.level,Ge=ne[0]-1;Ge>=0;Ge--)if(!(fe[Ge]&l)){Be=J[Ge];break}var He=ne[ne.length-1],je=J[He],qe=P.level;if(!(fe[He]&r)){for(var it=He+1;it<=P.end;it++)if(!(fe[it]&l)){qe=J[it];break}}Pt.push({_seqIndices:ne,_sosType:Math.max(Be,ke)%2?L:C,_eosType:Math.max(qe,je)%2?L:C})}}for(var yt=0;yt<Pt.length;yt++){var zt=Pt[yt],De=zt._seqIndices,pt=zt._sosType,Ke=zt._eosType;if(b.get(Q))for(var Xn=0;Xn<De.length;Xn++){var gt=De[Xn];if(fe[gt]&Q){for(var fn=pt,ai=Xn-1;ai>=0;ai--)if(!(fe[De[ai]]&l)){fn=fe[De[ai]];break}V(gt,fn&(r|ie)?Y:fn)}}if(b.get(S))for(var Mn=0;Mn<De.length;Mn++){var Pi=De[Mn];if(fe[Pi]&S)for(var _t=Mn-1;_t>=-1;_t--){var bn=_t===-1?pt:fe[De[_t]];if(bn&s){bn===G&&V(Pi,U);break}}}if(b.get(G))for(var oi=0;oi<De.length;oi++){var Rt=De[oi];fe[Rt]&G&&V(Rt,L)}if(b.get(A)||b.get(R))for(var Dn=1;Dn<De.length-1;Dn++){var Lr=De[Dn];if(fe[Lr]&(A|R)){for(var In=0,Ca=0,La=Dn-1;La>=0&&(In=fe[De[La]],!!(In&l));La--);for(var Pa=Dn+1;Pa<De.length&&(Ca=fe[De[Pa]],!!(Ca&l));Pa++);In===Ca&&(fe[Lr]===A?In===S:In&(S|U))&&V(Lr,In)}}if(b.get(S))for(var Pr=0;Pr<De.length;Pr++){var rd=De[Pr];if(fe[rd]&S){for(var ws=Pr-1;ws>=0&&fe[De[ws]]&(Z|l);ws--)V(De[ws],S);for(var Ts=Pr+1;Ts<De.length&&fe[De[Ts]]&(Z|l);Ts++)V(De[Ts],S)}}if(b.get(Z)||b.get(A)||b.get(R))for(var Rr=0;Rr<De.length;Rr++){var fl=De[Rr];if(fe[fl]&(Z|A|R)){V(fl,Y);for(var Es=Rr-1;Es>=0&&fe[De[Es]]&l;Es--)V(De[Es],Y);for(var As=Rr+1;As<De.length&&fe[De[As]]&l;As++)V(De[As],Y)}}if(b.get(S))for(var Ra=0,pl=pt;Ra<De.length;Ra++){var ml=De[Ra],Da=fe[ml];Da&S?pl===C&&V(ml,C):Da&s&&(pl=Da)}if(b.get(a)){var Dr=L|S|U,gl=Dr|C,Cs=[];{for(var Ri=[],Di=0;Di<De.length;Di++)if(fe[De[Di]]&a){var Ir=ge[De[Di]],_l=void 0;if(M(Ir)!==null)if(Ri.length<63)Ri.push({char:Ir,seqIndex:Di});else break;else if((_l=y(Ir))!==null)for(var Ur=Ri.length-1;Ur>=0;Ur--){var Ia=Ri[Ur].char;if(Ia===_l||Ia===y(T(Ir))||M(T(Ia))===Ir){Cs.push([Ri[Ur].seqIndex,Di]),Ri.length=Ur;break}}}Cs.sort(function(Dt,mn){return Dt[0]-mn[0]})}for(var Ua=0;Ua<Cs.length;Ua++){for(var vl=Cs[Ua],Or=vl[0],Ls=vl[1],xl=!1,pn=0,Oa=Or+1;Oa<Ls;Oa++){var Na=De[Oa];if(fe[Na]&gl){xl=!0;var yl=fe[Na]&Dr?L:C;if(yl===Ii(Na)){pn=yl;break}}}if(xl&&!pn){pn=pt;for(var Fa=Or-1;Fa>=0;Fa--){var Ps=De[Fa];if(fe[Ps]&gl){var Ml=fe[Ps]&Dr?L:C;Ml!==Ii(Ps)?pn=Ml:pn=Ii(Ps);break}}}if(pn){if(fe[De[Or]]=fe[De[Ls]]=pn,pn!==Ii(De[Or])){for(var Nr=Or+1;Nr<De.length;Nr++)if(!(fe[De[Nr]]&l)){d(ge[De[Nr]])&Q&&(fe[De[Nr]]=pn);break}}if(pn!==Ii(De[Ls])){for(var Fr=Ls+1;Fr<De.length;Fr++)if(!(fe[De[Fr]]&l)){d(ge[De[Fr]])&Q&&(fe[De[Fr]]=pn);break}}}}for(var jn=0;jn<De.length;jn++)if(fe[De[jn]]&a){for(var bl=jn,ka=jn,Ba=pt,kr=jn-1;kr>=0;kr--)if(fe[De[kr]]&l)bl=kr;else{Ba=fe[De[kr]]&Dr?L:C;break}for(var Sl=Ke,Br=jn+1;Br<De.length;Br++)if(fe[De[Br]]&(a|l))ka=Br;else{Sl=fe[De[Br]]&Dr?L:C;break}for(var Rs=bl;Rs<=ka;Rs++)fe[De[Rs]]=Ba===Sl?Ba:Ii(De[Rs]);jn=ka}}}for(var Kt=P.start;Kt<=P.end;Kt++){var sd=J[Kt],Ds=fe[Kt];if(sd&1?Ds&(C|S|U)&&J[Kt]++:Ds&L?J[Kt]++:Ds&(U|S)&&(J[Kt]+=2),Ds&l&&(J[Kt]=Kt===0?P.level:J[Kt-1]),Kt===P.end||d(ge[Kt])&(B|D))for(var Is=Kt;Is>=0&&d(ge[Is])&c;Is--)J[Is]=P.level}}return{levels:J,paragraphs:pe};function wl(Dt,mn){for(var qt=Dt;qt<ge.length;qt++){var qn=fe[qt];if(qn&(L|G))return 1;if(qn&(D|C)||mn&&qn===ie)return 0;if(qn&r){var Tl=ad(qt);qt=Tl===-1?ge.length:Tl}}return 0}function ad(Dt){for(var mn=1,qt=Dt+1;qt<ge.length;qt++){var qn=fe[qt];if(qn&D)break;if(qn&ie){if(--mn===0)return qt}else qn&r&&mn++}return-1}function Ii(Dt){return J[Dt]&1?L:C}}var se="14>1,j>2,t>2,u>2,1a>g,2v3>1,1>1,1ge>1,1wd>1,b>1,1j>1,f>1,ai>3,-2>3,+1,8>1k0,-1jq>1y7,-1y6>1hf,-1he>1h6,-1h5>1ha,-1h8>1qi,-1pu>1,6>3u,-3s>7,6>1,1>1,f>1,1>1,+2,3>1,1>1,+13,4>1,1>1,6>1eo,-1ee>1,3>1mg,-1me>1mk,-1mj>1mi,-1mg>1mi,-1md>1,1>1,+2,1>10k,-103>1,1>1,4>1,5>1,1>1,+10,3>1,1>8,-7>8,+1,-6>7,+1,a>1,1>1,u>1,u6>1,1>1,+5,26>1,1>1,2>1,2>2,8>1,7>1,4>1,1>1,+5,b8>1,1>1,+3,1>3,-2>1,2>1,1>1,+2,c>1,3>1,1>1,+2,h>1,3>1,a>1,1>1,2>1,3>1,1>1,d>1,f>1,3>1,1a>1,1>1,6>1,7>1,13>1,k>1,1>1,+19,4>1,1>1,+2,2>1,1>1,+18,m>1,a>1,1>1,lk>1,1>1,4>1,2>1,f>1,3>1,1>1,+3,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,6>1,4j>1,j>2,t>2,u>2,2>1,+1",le;function oe(){if(!le){var ge=_(se,!0),Se=ge.map,be=ge.reverseMap;be.forEach(function(fe,w){Se.set(w,fe)}),le=Se}}function ye(ge){return oe(),le.get(ge)||null}function Ee(ge,Se,be,fe){var w=ge.length;be=Math.max(0,be==null?0:+be),fe=Math.min(w-1,fe==null?w-1:+fe);for(var b=new Map,V=be;V<=fe;V++)if(Se[V]&1){var J=ye(ge[V]);J!==null&&b.set(V,J)}return b}function Me(ge,Se,be,fe){var w=ge.length;be=Math.max(0,be==null?0:+be),fe=Math.min(w-1,fe==null?w-1:+fe);var b=[];return Se.paragraphs.forEach(function(V){var J=Math.max(be,V.start),ce=Math.min(fe,V.end);if(J<ce){for(var pe=Se.levels.slice(J,ce+1),P=ce;P>=J&&d(ge[P])&c;P--)pe[P]=V.level;for(var $=V.level,X=1/0,xe=0;xe<pe.length;xe++){var _e=pe[xe];_e>$&&($=_e),_e<X&&(X=_e|1)}for(var we=$;we>=X;we--)for(var me=0;me<pe.length;me++)if(pe[me]>=we){for(var ve=me;me+1<pe.length&&pe[me+1]>=we;)me++;me>ve&&b.push([ve+be,me+be])}}}),b}function Te(ge,Se,be,fe){var w=Ie(ge,Se,be,fe),b=[].concat(ge);return w.forEach(function(V,J){b[J]=(Se.levels[V]&1?ye(ge[V]):null)||ge[V]}),b.join("")}function Ie(ge,Se,be,fe){for(var w=Me(ge,Se,be,fe),b=[],V=0;V<ge.length;V++)b[V]=V;return w.forEach(function(J){for(var ce=J[0],pe=J[1],P=b.slice(ce,pe+1),$=P.length;$--;)b[pe-$]=P[$]}),b}return e.closingToOpeningBracket=y,e.getBidiCharType=d,e.getBidiCharTypeName=f,e.getCanonicalBracket=T,e.getEmbeddingLevels=he,e.getMirroredCharacter=ye,e.getMirroredCharactersMap=Ee,e.getReorderSegments=Me,e.getReorderedIndices=Ie,e.getReorderedString=Te,e.openingToClosingBracket=M,Object.defineProperty(e,"__esModule",{value:!0}),e}({});return o}const Xh=/\bvoid\s+main\s*\(\s*\)\s*{/g;function Xo(o){const e=/^[ \t]*#include +<([\w\d./]+)>/gm;function t(n,i){let r=Xe[i];return r?Xo(r):n}return o.replace(e,t)}const Et=[];for(let o=0;o<256;o++)Et[o]=(o<16?"0":"")+o.toString(16);function qv(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Et[o&255]+Et[o>>8&255]+Et[o>>16&255]+Et[o>>24&255]+"-"+Et[e&255]+Et[e>>8&255]+"-"+Et[e>>16&15|64]+Et[e>>24&255]+"-"+Et[t&63|128]+Et[t>>8&255]+"-"+Et[t>>16&255]+Et[t>>24&255]+Et[n&255]+Et[n>>8&255]+Et[n>>16&255]+Et[n>>24&255]).toUpperCase()}const hi=Object.assign||function(){let o=arguments[0];for(let e=1,t=arguments.length;e<t;e++){let n=arguments[e];if(n)for(let i in n)Object.prototype.hasOwnProperty.call(n,i)&&(o[i]=n[i])}return o},Yv=Date.now(),Eu=new WeakMap,Au=new Map;let Kv=1e10;function jo(o,e){const t=$v(e);let n=Eu.get(o);if(n||Eu.set(o,n=Object.create(null)),n[t])return new n[t];const i=`_onBeforeCompile${t}`,r=function(c,u){o.onBeforeCompile.call(this,c,u);const h=this.customProgramCacheKey()+"|"+c.vertexShader+"|"+c.fragmentShader;let d=Au[h];if(!d){const f=Zv(this,c,e,t);d=Au[h]=f}c.vertexShader=d.vertexShader,c.fragmentShader=d.fragmentShader,hi(c.uniforms,this.uniforms),e.timeUniform&&(c.uniforms[e.timeUniform]={get value(){return Date.now()-Yv}}),this[i]&&this[i](c)},s=function(){return a(e.chained?o:o.clone())},a=function(c){const u=Object.create(c,l);return Object.defineProperty(u,"baseMaterial",{value:o}),Object.defineProperty(u,"id",{value:Kv++}),u.uuid=qv(),u.uniforms=hi({},c.uniforms,e.uniforms),u.defines=hi({},c.defines,e.defines),u.defines[`TROIKA_DERIVED_MATERIAL_${t}`]="",u.extensions=hi({},c.extensions,e.extensions),u._listeners=void 0,u},l={constructor:{value:s},isDerivedMaterial:{value:!0},customProgramCacheKey:{writable:!0,configurable:!0,value:function(){return o.customProgramCacheKey()+"|"+t}},onBeforeCompile:{get(){return r},set(c){this[i]=c}},copy:{writable:!0,configurable:!0,value:function(c){return o.copy.call(this,c),!o.isShaderMaterial&&!o.isDerivedMaterial&&(hi(this.extensions,c.extensions),hi(this.defines,c.defines),hi(this.uniforms,gh.clone(c.uniforms))),this}},clone:{writable:!0,configurable:!0,value:function(){const c=new o.constructor;return a(c).copy(this)}},getDepthMaterial:{writable:!0,configurable:!0,value:function(){let c=this._depthMaterial;return c||(c=this._depthMaterial=jo(o.isDerivedMaterial?o.getDepthMaterial():new wh({depthPacking:rh}),e),c.defines.IS_DEPTH_MATERIAL="",c.uniforms=this.uniforms),c}},getDistanceMaterial:{writable:!0,configurable:!0,value:function(){let c=this._distanceMaterial;return c||(c=this._distanceMaterial=jo(o.isDerivedMaterial?o.getDistanceMaterial():new Th,e),c.defines.IS_DISTANCE_MATERIAL="",c.uniforms=this.uniforms),c}},dispose:{writable:!0,configurable:!0,value(){const{_depthMaterial:c,_distanceMaterial:u}=this;c&&c.dispose(),u&&u.dispose(),o.dispose.call(this)}}};return n[t]=s,new s}function Zv(o,{vertexShader:e,fragmentShader:t},n,i){let{vertexDefs:r,vertexMainIntro:s,vertexMainOutro:a,vertexTransform:l,fragmentDefs:c,fragmentMainIntro:u,fragmentMainOutro:h,fragmentColorTransform:d,customRewriter:f,timeUniform:g}=n;if(r=r||"",s=s||"",a=a||"",c=c||"",u=u||"",h=h||"",(l||f)&&(e=Xo(e)),(d||f)&&(t=t.replace(/^[ \t]*#include <((?:tonemapping|encodings|fog|premultiplied_alpha|dithering)_fragment)>/gm,`
//!BEGIN_POST_CHUNK $1
$&
//!END_POST_CHUNK
`),t=Xo(t)),f){let _=f({vertexShader:e,fragmentShader:t});e=_.vertexShader,t=_.fragmentShader}if(d){let _=[];t=t.replace(/^\/\/!BEGIN_POST_CHUNK[^]+?^\/\/!END_POST_CHUNK/gm,m=>(_.push(m),"")),h=`${d}
${_.join(`
`)}
${h}`}if(g){const _=`
uniform float ${g};
`;r=_+r,c=_+c}return l&&(e=`vec3 troika_position_${i};
vec3 troika_normal_${i};
vec2 troika_uv_${i};
${e}
`,r=`${r}
void troikaVertexTransform${i}(inout vec3 position, inout vec3 normal, inout vec2 uv) {
  ${l}
}
`,s=`
troika_position_${i} = vec3(position);
troika_normal_${i} = vec3(normal);
troika_uv_${i} = vec2(uv);
troikaVertexTransform${i}(troika_position_${i}, troika_normal_${i}, troika_uv_${i});
${s}
`,e=e.replace(/\b(position|normal|uv)\b/g,(_,m,p,v)=>/\battribute\s+vec[23]\s+$/.test(v.substr(0,p))?m:`troika_${m}_${i}`),o.map&&o.map.channel>0||(e=e.replace(/\bMAP_UV\b/g,`troika_uv_${i}`))),e=Cu(e,i,r,s,a),t=Cu(t,i,c,u,h),{vertexShader:e,fragmentShader:t}}function Cu(o,e,t,n,i){return(n||i||t)&&(o=o.replace(Xh,`
${t}
void troikaOrigMain${e}() {`),o+=`
void main() {
  ${n}
  troikaOrigMain${e}();
  ${i}
}`),o}function Qv(o,e){return o==="uniforms"?void 0:typeof e=="function"?e.toString():e}let Jv=0;const Lu=new Map;function $v(o){const e=JSON.stringify(o,Qv);let t=Lu.get(e);return t==null&&Lu.set(e,t=++Jv),t}function ex(o,e,t){const{defaultFontURL:n}=t,i=Object.create(null),r=1/0,s=/[\u00AD\u034F\u061C\u115F-\u1160\u17B4-\u17B5\u180B-\u180E\u200B-\u200F\u202A-\u202E\u2060-\u206F\u3164\uFE00-\uFE0F\uFEFF\uFFA0\uFFF0-\uFFF8]/,a="[^\\S\\u00A0]",l=new RegExp(`${a}|[\\-\\u007C\\u00AD\\u2010\\u2012-\\u2014\\u2027\\u2056\\u2E17\\u2E40]`);function c(v,x){function M(){const y=T=>{console.error(`Failure loading font ${v}${v===n?"":"; trying fallback"}`,T),v!==n&&(v=n,M())};try{const T=new XMLHttpRequest;T.open("get",v,!0),T.responseType="arraybuffer",T.onload=function(){if(T.status>=400)y(new Error(T.statusText));else if(T.status>0)try{const C=o(T.response);x(C)}catch(C){y(C)}},T.onerror=y,T.send()}catch(T){y(T)}}M()}function u(v,x){v||(v=n);let M=i[v];M?M.pending?M.pending.push(x):x(M):(i[v]={pending:[x]},c(v,y=>{let T=i[v].pending;i[v]=y,T.forEach(C=>C(y))}))}function h({text:v="",font:x=n,sdfGlyphSize:M=64,fontSize:y=1,letterSpacing:T=0,lineHeight:C="normal",maxWidth:L=r,direction:S,textAlign:A="left",textIndent:Z=0,whiteSpace:U="normal",overflowWrap:R="normal",anchorX:D=0,anchorY:B=0,includeCaretPositions:Y=!1,chunkedBoundsSize:re=8192,colorRanges:Q=null},G,K=!1){const N=_(),W={fontLoad:0,typesetting:0};v.indexOf("\r")>-1&&(console.info("Typesetter: got text with \\r chars; normalizing to \\n"),v=v.replace(/\r\n/g,`
`).replace(/\r/g,`
`)),y=+y,T=+T,L=+L,C=C||"normal",Z=+Z,u(x,k=>{const z=isFinite(L);let H=null,ee=null,I=null,ie=null,he=null,se=null,le=null,oe=0,ye=0,Ee=U!=="nowrap";const{ascender:Me,descender:Te,unitsPerEm:Ie,lineGap:ge,capHeight:Se,xHeight:be}=k;W.fontLoad=_()-N;const fe=_(),w=y/Ie;C==="normal"&&(C=(Me-Te+ge)/Ie),C=C*y;const b=(C-(Me-Te)*w)/2,V=-(Me*w+b),J=Math.min(C,(Me-Te)*w),ce=(Me+Te)/2*w-J/2;let pe=Z,P=new m;const $=[P];k.forEachGlyph(v,y,T,(_e,we,me)=>{const ve=v.charAt(me),Le=_e.advanceWidth*w,Pe=P.count;let Ve;if("isEmpty"in _e||(_e.isWhitespace=!!ve&&new RegExp(a).test(ve),_e.canBreakAfter=!!ve&&l.test(ve),_e.isEmpty=_e.xMin===_e.xMax||_e.yMin===_e.yMax||s.test(ve)),!_e.isWhitespace&&!_e.isEmpty&&ye++,Ee&&z&&!_e.isWhitespace&&we+Le+pe>L&&Pe){if(P.glyphAt(Pe-1).glyphObj.canBreakAfter)Ve=new m,pe=-we;else for(let te=Pe;te--;)if(te===0&&R==="break-word"){Ve=new m,pe=-we;break}else if(P.glyphAt(te).glyphObj.canBreakAfter){Ve=P.splitAt(te+1);const de=Ve.glyphAt(0).x;pe-=de;for(let Ae=Ve.count;Ae--;)Ve.glyphAt(Ae).x-=de;break}Ve&&(P.isSoftWrapped=!0,P=Ve,$.push(P),oe=L)}let O=P.glyphAt(P.count);O.glyphObj=_e,O.x=we+pe,O.width=Le,O.charIndex=me,ve===`
`&&(P=new m,$.push(P),pe=-(we+Le+T*y)+Z)}),$.forEach(_e=>{for(let we=_e.count;we--;){let{glyphObj:me,x:ve,width:Le}=_e.glyphAt(we);if(!me.isWhitespace){_e.width=ve+Le,_e.width>oe&&(oe=_e.width);return}}});let X=0,xe=0;if(D&&(typeof D=="number"?X=-D:typeof D=="string"&&(X=-oe*(D==="left"?0:D==="center"?.5:D==="right"?1:f(D)))),B){if(typeof B=="number")xe=-B;else if(typeof B=="string"){let _e=$.length*C;xe=B==="top"?0:B==="top-baseline"?-V:B==="top-cap"?-V-Se*w:B==="top-ex"?-V-be*w:B==="middle"?_e/2:B==="bottom"?_e:B==="bottom-baseline"?_e-b+Te*w:f(B)*_e}}if(!K){const _e=e.getEmbeddingLevels(v,S);H=new Uint16Array(ye),ee=new Float32Array(ye*2),I={},se=[r,r,-r,-r],le=[];let we=V;Y&&(he=new Float32Array(v.length*3)),Q&&(ie=new Uint8Array(ye*3));let me=0,ve=-1,Le=-1,Pe,Ve;if($.forEach((O,te)=>{let{count:de,width:Ae}=O;if(de>0){let Ue=0;for(let $e=de;$e--&&O.glyphAt($e).glyphObj.isWhitespace;)Ue++;let Je=0,Ye=0;if(A==="center")Je=(oe-Ae)/2;else if(A==="right")Je=oe-Ae;else if(A==="justify"&&O.isSoftWrapped){let $e=0;for(let nt=de-Ue;nt--;)O.glyphAt(nt).glyphObj.isWhitespace&&$e++;Ye=(oe-Ae)/$e}if(Ye||Je){let $e=0;for(let nt=0;nt<de;nt++){let Lt=O.glyphAt(nt);const Pt=Lt.glyphObj;Lt.x+=Je+$e,Ye!==0&&Pt.isWhitespace&&nt<de-Ue&&($e+=Ye,Lt.width+=Ye)}}const at=e.getReorderSegments(v,_e,O.glyphAt(0).charIndex,O.glyphAt(O.count-1).charIndex);for(let $e=0;$e<at.length;$e++){const[nt,Lt]=at[$e];let Pt=1/0,lt=-1/0;for(let xt=0;xt<de;xt++)if(O.glyphAt(xt).charIndex>=nt){let jt=xt,E=xt;for(;E<de;E++){let j=O.glyphAt(E);if(j.charIndex>Lt)break;E<de-Ue&&(Pt=Math.min(Pt,j.x),lt=Math.max(lt,j.x+j.width))}for(let j=jt;j<E;j++){const ne=O.glyphAt(j);ne.x=lt-(ne.x+ne.width-Pt)}break}}let rt;const dt=$e=>rt=$e;for(let $e=0;$e<de;$e++){let nt=O.glyphAt($e);rt=nt.glyphObj;const Lt=rt.index,Pt=_e.levels[nt.charIndex]&1;if(Pt){const lt=e.getMirroredCharacter(v[nt.charIndex]);lt&&k.forEachGlyph(lt,0,0,dt)}if(Y){const{charIndex:lt}=nt,xt=nt.x+X,jt=nt.x+nt.width+X;he[lt*3]=Pt?jt:xt,he[lt*3+1]=Pt?xt:jt,he[lt*3+2]=we+ce+xe;const E=lt-ve;E>1&&g(he,ve,E),ve=lt}if(Q){const{charIndex:lt}=nt;for(;lt>Le;)Le++,Q.hasOwnProperty(Le)&&(Ve=Q[Le])}if(!rt.isWhitespace&&!rt.isEmpty){const lt=me++;I[Lt]||(I[Lt]={path:rt.path,pathBounds:[rt.xMin,rt.yMin,rt.xMax,rt.yMax]});const xt=nt.x+X,jt=we+xe;ee[lt*2]=xt,ee[lt*2+1]=jt;const E=xt+rt.xMin*w,j=jt+rt.yMin*w,ne=xt+rt.xMax*w,q=jt+rt.yMax*w;E<se[0]&&(se[0]=E),j<se[1]&&(se[1]=j),ne>se[2]&&(se[2]=ne),q>se[3]&&(se[3]=q),lt%re===0&&(Pe={start:lt,end:lt,rect:[r,r,-r,-r]},le.push(Pe)),Pe.end++;const ae=Pe.rect;if(E<ae[0]&&(ae[0]=E),j<ae[1]&&(ae[1]=j),ne>ae[2]&&(ae[2]=ne),q>ae[3]&&(ae[3]=q),H[lt]=Lt,Q){const Oe=lt*3;ie[Oe]=Ve>>16&255,ie[Oe+1]=Ve>>8&255,ie[Oe+2]=Ve&255}}}}we-=C}),he){const O=v.length-ve;O>1&&g(he,ve,O)}}W.typesetting=_()-fe,G({glyphIds:H,glyphPositions:ee,glyphData:I,caretPositions:he,caretHeight:J,glyphColors:ie,chunkedBounds:le,fontSize:y,unitsPerEm:Ie,ascender:Me*w,descender:Te*w,capHeight:Se*w,xHeight:be*w,lineHeight:C,topBaseline:V,blockBounds:[X,xe-$.length*C,X+oe,xe],visibleBounds:se,timings:W})})}function d(v,x){h(v,M=>{const[y,T,C,L]=M.blockBounds;x({width:C-y,height:L-T})},{metricsOnly:!0})}function f(v){let x=v.match(/^([\d.]+)%$/),M=x?parseFloat(x[1]):NaN;return isNaN(M)?0:M/100}function g(v,x,M){const y=v[x*3],T=v[x*3+1],C=v[x*3+2],L=(T-y)/M;for(let S=0;S<M;S++){const A=(x+S)*3;v[A]=y+L*S,v[A+1]=y+L*(S+1),v[A+2]=C}}function _(){return(self.performance||Date).now()}function m(){this.data=[]}const p=["glyphObj","x","width","charIndex"];return m.prototype={width:0,isSoftWrapped:!1,get count(){return Math.ceil(this.data.length/p.length)},glyphAt(v){let x=m.flyweight;return x.data=this.data,x.index=v,x},splitAt(v){let x=new m;return x.data=this.data.splice(v*p.length),x}},m.flyweight=p.reduce((v,x,M,y)=>(Object.defineProperty(v,x,{get(){return this.data[this.index*p.length+M]},set(T){this.data[this.index*p.length+M]=T}}),v),{data:null,index:0}),{typeset:h,measure:d,loadFont:u}}const yi=()=>(self.performance||Date).now(),Ea=Wh();let Pu;function tx(o,e,t,n,i,r,s,a,l,c,u=!0){return u?ix(o,e,t,n,i,r,s,a,l,c).then(null,h=>(Pu||(console.warn("WebGL SDF generation failed, falling back to JS",h),Pu=!0),Du(o,e,t,n,i,r,s,a,l,c))):Du(o,e,t,n,i,r,s,a,l,c)}const pa=[],nx=5;let qo=0;function jh(){const o=yi();for(;pa.length&&yi()-o<nx;)pa.shift()();qo=pa.length?setTimeout(jh,0):0}const ix=(...o)=>new Promise((e,t)=>{pa.push(()=>{const n=yi();try{Ea.webgl.generateIntoCanvas(...o),e({timing:yi()-n})}catch(i){t(i)}}),qo||(qo=setTimeout(jh,0))}),rx=4,sx=2e3,Ru={};let ax=0;function Du(o,e,t,n,i,r,s,a,l,c){const u="TroikaTextSDFGenerator_JS_"+ax++%rx;let h=Ru[u];return h||(h=Ru[u]={workerModule:bs({name:u,workerId:u,dependencies:[Wh,yi],init(d,f){const g=d().javascript.generate;return function(..._){const m=f();return{textureData:g(..._),timing:f()-m}}},getTransferables(d){return[d.textureData.buffer]}}),requests:0,idleTimer:null}),h.requests++,clearTimeout(h.idleTimer),h.workerModule(o,e,t,n,i,r).then(({textureData:d,timing:f})=>{const g=yi(),_=new Uint8Array(d.length*4);for(let m=0;m<d.length;m++)_[m*4+c]=d[m];return Ea.webglUtils.renderImageData(s,_,a,l,o,e,1<<3-c),f+=yi()-g,--h.requests===0&&(h.idleTimer=setTimeout(()=>{Wv(u)},sx)),{timing:f}})}function ox(o){o._warm||(Ea.webgl.isSupported(o),o._warm=!0)}const lx=Ea.webglUtils.resizeWebGLCanvasWithoutClearing;/*!
Custom build of Typr.ts (https://github.com/fredli74/Typr.ts) for use in Troika text rendering.
Original MIT license applies: https://github.com/fredli74/Typr.ts/blob/master/LICENSE
*/function cx(){return typeof window>"u"&&(self.window=self),function(o){var e={parse:function(i){var r=e._bin,s=new Uint8Array(i);if(r.readASCII(s,0,4)=="ttcf"){var a=4;r.readUshort(s,a),a+=2,r.readUshort(s,a),a+=2;var l=r.readUint(s,a);a+=4;for(var c=[],u=0;u<l;u++){var h=r.readUint(s,a);a+=4,c.push(e._readFont(s,h))}return c}return[e._readFont(s,0)]},_readFont:function(i,r){var s=e._bin,a=r;s.readFixed(i,r),r+=4;var l=s.readUshort(i,r);r+=2,s.readUshort(i,r),r+=2,s.readUshort(i,r),r+=2,s.readUshort(i,r),r+=2;for(var c=["cmap","head","hhea","maxp","hmtx","name","OS/2","post","loca","glyf","kern","CFF ","GPOS","GSUB","SVG "],u={_data:i,_offset:a},h={},d=0;d<l;d++){var f=s.readASCII(i,r,4);r+=4,s.readUint(i,r),r+=4;var g=s.readUint(i,r);r+=4;var _=s.readUint(i,r);r+=4,h[f]={offset:g,length:_}}for(d=0;d<c.length;d++){var m=c[d];h[m]&&(u[m.trim()]=e[m.trim()].parse(i,h[m].offset,h[m].length,u))}return u},_tabOffset:function(i,r,s){for(var a=e._bin,l=a.readUshort(i,s+4),c=s+12,u=0;u<l;u++){var h=a.readASCII(i,c,4);c+=4,a.readUint(i,c),c+=4;var d=a.readUint(i,c);if(c+=4,a.readUint(i,c),c+=4,h==r)return d}return 0}};e._bin={readFixed:function(i,r){return(i[r]<<8|i[r+1])+(i[r+2]<<8|i[r+3])/65540},readF2dot14:function(i,r){return e._bin.readShort(i,r)/16384},readInt:function(i,r){return e._bin._view(i).getInt32(r)},readInt8:function(i,r){return e._bin._view(i).getInt8(r)},readShort:function(i,r){return e._bin._view(i).getInt16(r)},readUshort:function(i,r){return e._bin._view(i).getUint16(r)},readUshorts:function(i,r,s){for(var a=[],l=0;l<s;l++)a.push(e._bin.readUshort(i,r+2*l));return a},readUint:function(i,r){return e._bin._view(i).getUint32(r)},readUint64:function(i,r){return 4294967296*e._bin.readUint(i,r)+e._bin.readUint(i,r+4)},readASCII:function(i,r,s){for(var a="",l=0;l<s;l++)a+=String.fromCharCode(i[r+l]);return a},readUnicode:function(i,r,s){for(var a="",l=0;l<s;l++){var c=i[r++]<<8|i[r++];a+=String.fromCharCode(c)}return a},_tdec:typeof window<"u"&&window.TextDecoder?new window.TextDecoder:null,readUTF8:function(i,r,s){var a=e._bin._tdec;return a&&r==0&&s==i.length?a.decode(i):e._bin.readASCII(i,r,s)},readBytes:function(i,r,s){for(var a=[],l=0;l<s;l++)a.push(i[r+l]);return a},readASCIIArray:function(i,r,s){for(var a=[],l=0;l<s;l++)a.push(String.fromCharCode(i[r+l]));return a},_view:function(i){return i._dataView||(i._dataView=i.buffer?new DataView(i.buffer,i.byteOffset,i.byteLength):new DataView(new Uint8Array(i).buffer))}},e._lctf={},e._lctf.parse=function(i,r,s,a,l){var c=e._bin,u={},h=r;c.readFixed(i,r),r+=4;var d=c.readUshort(i,r);r+=2;var f=c.readUshort(i,r);r+=2;var g=c.readUshort(i,r);return r+=2,u.scriptList=e._lctf.readScriptList(i,h+d),u.featureList=e._lctf.readFeatureList(i,h+f),u.lookupList=e._lctf.readLookupList(i,h+g,l),u},e._lctf.readLookupList=function(i,r,s){var a=e._bin,l=r,c=[],u=a.readUshort(i,r);r+=2;for(var h=0;h<u;h++){var d=a.readUshort(i,r);r+=2;var f=e._lctf.readLookupTable(i,l+d,s);c.push(f)}return c},e._lctf.readLookupTable=function(i,r,s){var a=e._bin,l=r,c={tabs:[]};c.ltype=a.readUshort(i,r),r+=2,c.flag=a.readUshort(i,r),r+=2;var u=a.readUshort(i,r);r+=2;for(var h=c.ltype,d=0;d<u;d++){var f=a.readUshort(i,r);r+=2;var g=s(i,h,l+f,c);c.tabs.push(g)}return c},e._lctf.numOfOnes=function(i){for(var r=0,s=0;s<32;s++)i>>>s&1&&r++;return r},e._lctf.readClassDef=function(i,r){var s=e._bin,a=[],l=s.readUshort(i,r);if(r+=2,l==1){var c=s.readUshort(i,r);r+=2;var u=s.readUshort(i,r);r+=2;for(var h=0;h<u;h++)a.push(c+h),a.push(c+h),a.push(s.readUshort(i,r)),r+=2}if(l==2){var d=s.readUshort(i,r);for(r+=2,h=0;h<d;h++)a.push(s.readUshort(i,r)),r+=2,a.push(s.readUshort(i,r)),r+=2,a.push(s.readUshort(i,r)),r+=2}return a},e._lctf.getInterval=function(i,r){for(var s=0;s<i.length;s+=3){var a=i[s],l=i[s+1];if(i[s+2],a<=r&&r<=l)return s}return-1},e._lctf.readCoverage=function(i,r){var s=e._bin,a={};a.fmt=s.readUshort(i,r),r+=2;var l=s.readUshort(i,r);return r+=2,a.fmt==1&&(a.tab=s.readUshorts(i,r,l)),a.fmt==2&&(a.tab=s.readUshorts(i,r,3*l)),a},e._lctf.coverageIndex=function(i,r){var s=i.tab;if(i.fmt==1)return s.indexOf(r);if(i.fmt==2){var a=e._lctf.getInterval(s,r);if(a!=-1)return s[a+2]+(r-s[a])}return-1},e._lctf.readFeatureList=function(i,r){var s=e._bin,a=r,l=[],c=s.readUshort(i,r);r+=2;for(var u=0;u<c;u++){var h=s.readASCII(i,r,4);r+=4;var d=s.readUshort(i,r);r+=2;var f=e._lctf.readFeatureTable(i,a+d);f.tag=h.trim(),l.push(f)}return l},e._lctf.readFeatureTable=function(i,r){var s=e._bin,a=r,l={},c=s.readUshort(i,r);r+=2,c>0&&(l.featureParams=a+c);var u=s.readUshort(i,r);r+=2,l.tab=[];for(var h=0;h<u;h++)l.tab.push(s.readUshort(i,r+2*h));return l},e._lctf.readScriptList=function(i,r){var s=e._bin,a=r,l={},c=s.readUshort(i,r);r+=2;for(var u=0;u<c;u++){var h=s.readASCII(i,r,4);r+=4;var d=s.readUshort(i,r);r+=2,l[h.trim()]=e._lctf.readScriptTable(i,a+d)}return l},e._lctf.readScriptTable=function(i,r){var s=e._bin,a=r,l={},c=s.readUshort(i,r);r+=2,l.default=e._lctf.readLangSysTable(i,a+c);var u=s.readUshort(i,r);r+=2;for(var h=0;h<u;h++){var d=s.readASCII(i,r,4);r+=4;var f=s.readUshort(i,r);r+=2,l[d.trim()]=e._lctf.readLangSysTable(i,a+f)}return l},e._lctf.readLangSysTable=function(i,r){var s=e._bin,a={};s.readUshort(i,r),r+=2,a.reqFeature=s.readUshort(i,r),r+=2;var l=s.readUshort(i,r);return r+=2,a.features=s.readUshorts(i,r,l),a},e.CFF={},e.CFF.parse=function(i,r,s){var a=e._bin;(i=new Uint8Array(i.buffer,r,s))[r=0],i[++r],i[++r],i[++r],r++;var l=[];r=e.CFF.readIndex(i,r,l);for(var c=[],u=0;u<l.length-1;u++)c.push(a.readASCII(i,r+l[u],l[u+1]-l[u]));r+=l[l.length-1];var h=[];r=e.CFF.readIndex(i,r,h);var d=[];for(u=0;u<h.length-1;u++)d.push(e.CFF.readDict(i,r+h[u],r+h[u+1]));r+=h[h.length-1];var f=d[0],g=[];r=e.CFF.readIndex(i,r,g);var _=[];for(u=0;u<g.length-1;u++)_.push(a.readASCII(i,r+g[u],g[u+1]-g[u]));if(r+=g[g.length-1],e.CFF.readSubrs(i,r,f),f.CharStrings){r=f.CharStrings,g=[],r=e.CFF.readIndex(i,r,g);var m=[];for(u=0;u<g.length-1;u++)m.push(a.readBytes(i,r+g[u],g[u+1]-g[u]));f.CharStrings=m}if(f.ROS){r=f.FDArray;var p=[];for(r=e.CFF.readIndex(i,r,p),f.FDArray=[],u=0;u<p.length-1;u++){var v=e.CFF.readDict(i,r+p[u],r+p[u+1]);e.CFF._readFDict(i,v,_),f.FDArray.push(v)}r+=p[p.length-1],r=f.FDSelect,f.FDSelect=[];var x=i[r];if(r++,x!=3)throw x;var M=a.readUshort(i,r);for(r+=2,u=0;u<M+1;u++)f.FDSelect.push(a.readUshort(i,r),i[r+2]),r+=3}return f.Encoding&&(f.Encoding=e.CFF.readEncoding(i,f.Encoding,f.CharStrings.length)),f.charset&&(f.charset=e.CFF.readCharset(i,f.charset,f.CharStrings.length)),e.CFF._readFDict(i,f,_),f},e.CFF._readFDict=function(i,r,s){var a;for(var l in r.Private&&(a=r.Private[1],r.Private=e.CFF.readDict(i,a,a+r.Private[0]),r.Private.Subrs&&e.CFF.readSubrs(i,a+r.Private.Subrs,r.Private)),r)["FamilyName","FontName","FullName","Notice","version","Copyright"].indexOf(l)!=-1&&(r[l]=s[r[l]-426+35])},e.CFF.readSubrs=function(i,r,s){var a=e._bin,l=[];r=e.CFF.readIndex(i,r,l);var c,u=l.length;c=u<1240?107:u<33900?1131:32768,s.Bias=c,s.Subrs=[];for(var h=0;h<l.length-1;h++)s.Subrs.push(a.readBytes(i,r+l[h],l[h+1]-l[h]))},e.CFF.tableSE=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,0,111,112,113,114,0,115,116,117,118,119,120,121,122,0,123,0,124,125,126,127,128,129,130,131,0,132,133,0,134,135,136,137,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,138,0,139,0,0,0,0,140,141,142,143,0,0,0,0,0,144,0,0,0,145,0,0,146,147,148,149,0,0,0,0],e.CFF.glyphByUnicode=function(i,r){for(var s=0;s<i.charset.length;s++)if(i.charset[s]==r)return s;return-1},e.CFF.glyphBySE=function(i,r){return r<0||r>255?-1:e.CFF.glyphByUnicode(i,e.CFF.tableSE[r])},e.CFF.readEncoding=function(i,r,s){e._bin;var a=[".notdef"],l=i[r];if(r++,l!=0)throw"error: unknown encoding format: "+l;var c=i[r];r++;for(var u=0;u<c;u++)a.push(i[r+u]);return a},e.CFF.readCharset=function(i,r,s){var a=e._bin,l=[".notdef"],c=i[r];if(r++,c==0)for(var u=0;u<s;u++){var h=a.readUshort(i,r);r+=2,l.push(h)}else{if(c!=1&&c!=2)throw"error: format: "+c;for(;l.length<s;){h=a.readUshort(i,r),r+=2;var d=0;for(c==1?(d=i[r],r++):(d=a.readUshort(i,r),r+=2),u=0;u<=d;u++)l.push(h),h++}}return l},e.CFF.readIndex=function(i,r,s){var a=e._bin,l=a.readUshort(i,r)+1,c=i[r+=2];if(r++,c==1)for(var u=0;u<l;u++)s.push(i[r+u]);else if(c==2)for(u=0;u<l;u++)s.push(a.readUshort(i,r+2*u));else if(c==3)for(u=0;u<l;u++)s.push(16777215&a.readUint(i,r+3*u-1));else if(l!=1)throw"unsupported offset size: "+c+", count: "+l;return(r+=l*c)-1},e.CFF.getCharString=function(i,r,s){var a=e._bin,l=i[r],c=i[r+1];i[r+2],i[r+3],i[r+4];var u=1,h=null,d=null;l<=20&&(h=l,u=1),l==12&&(h=100*l+c,u=2),21<=l&&l<=27&&(h=l,u=1),l==28&&(d=a.readShort(i,r+1),u=3),29<=l&&l<=31&&(h=l,u=1),32<=l&&l<=246&&(d=l-139,u=1),247<=l&&l<=250&&(d=256*(l-247)+c+108,u=2),251<=l&&l<=254&&(d=256*-(l-251)-c-108,u=2),l==255&&(d=a.readInt(i,r+1)/65535,u=5),s.val=d??"o"+h,s.size=u},e.CFF.readCharString=function(i,r,s){for(var a=r+s,l=e._bin,c=[];r<a;){var u=i[r],h=i[r+1];i[r+2],i[r+3],i[r+4];var d=1,f=null,g=null;u<=20&&(f=u,d=1),u==12&&(f=100*u+h,d=2),u!=19&&u!=20||(f=u,d=2),21<=u&&u<=27&&(f=u,d=1),u==28&&(g=l.readShort(i,r+1),d=3),29<=u&&u<=31&&(f=u,d=1),32<=u&&u<=246&&(g=u-139,d=1),247<=u&&u<=250&&(g=256*(u-247)+h+108,d=2),251<=u&&u<=254&&(g=256*-(u-251)-h-108,d=2),u==255&&(g=l.readInt(i,r+1)/65535,d=5),c.push(g??"o"+f),r+=d}return c},e.CFF.readDict=function(i,r,s){for(var a=e._bin,l={},c=[];r<s;){var u=i[r],h=i[r+1];i[r+2],i[r+3],i[r+4];var d=1,f=null,g=null;if(u==28&&(g=a.readShort(i,r+1),d=3),u==29&&(g=a.readInt(i,r+1),d=5),32<=u&&u<=246&&(g=u-139,d=1),247<=u&&u<=250&&(g=256*(u-247)+h+108,d=2),251<=u&&u<=254&&(g=256*-(u-251)-h-108,d=2),u==255)throw g=a.readInt(i,r+1)/65535,d=5,"unknown number";if(u==30){var _=[];for(d=1;;){var m=i[r+d];d++;var p=m>>4,v=15&m;if(p!=15&&_.push(p),v!=15&&_.push(v),v==15)break}for(var x="",M=[0,1,2,3,4,5,6,7,8,9,".","e","e-","reserved","-","endOfNumber"],y=0;y<_.length;y++)x+=M[_[y]];g=parseFloat(x)}u<=21&&(f=["version","Notice","FullName","FamilyName","Weight","FontBBox","BlueValues","OtherBlues","FamilyBlues","FamilyOtherBlues","StdHW","StdVW","escape","UniqueID","XUID","charset","Encoding","CharStrings","Private","Subrs","defaultWidthX","nominalWidthX"][u],d=1,u==12&&(f=["Copyright","isFixedPitch","ItalicAngle","UnderlinePosition","UnderlineThickness","PaintType","CharstringType","FontMatrix","StrokeWidth","BlueScale","BlueShift","BlueFuzz","StemSnapH","StemSnapV","ForceBold",0,0,"LanguageGroup","ExpansionFactor","initialRandomSeed","SyntheticBase","PostScript","BaseFontName","BaseFontBlend",0,0,0,0,0,0,"ROS","CIDFontVersion","CIDFontRevision","CIDFontType","CIDCount","UIDBase","FDArray","FDSelect","FontName"][h],d=2)),f!=null?(l[f]=c.length==1?c[0]:c,c=[]):c.push(g),r+=d}return l},e.cmap={},e.cmap.parse=function(i,r,s){i=new Uint8Array(i.buffer,r,s),r=0;var a=e._bin,l={};a.readUshort(i,r),r+=2;var c=a.readUshort(i,r);r+=2;var u=[];l.tables=[];for(var h=0;h<c;h++){var d=a.readUshort(i,r);r+=2;var f=a.readUshort(i,r);r+=2;var g=a.readUint(i,r);r+=4;var _="p"+d+"e"+f,m=u.indexOf(g);if(m==-1){var p;m=l.tables.length,u.push(g);var v=a.readUshort(i,g);v==0?p=e.cmap.parse0(i,g):v==4?p=e.cmap.parse4(i,g):v==6?p=e.cmap.parse6(i,g):v==12?p=e.cmap.parse12(i,g):console.debug("unknown format: "+v,d,f,g),l.tables.push(p)}if(l[_]!=null)throw"multiple tables for one platform+encoding";l[_]=m}return l},e.cmap.parse0=function(i,r){var s=e._bin,a={};a.format=s.readUshort(i,r),r+=2;var l=s.readUshort(i,r);r+=2,s.readUshort(i,r),r+=2,a.map=[];for(var c=0;c<l-6;c++)a.map.push(i[r+c]);return a},e.cmap.parse4=function(i,r){var s=e._bin,a=r,l={};l.format=s.readUshort(i,r),r+=2;var c=s.readUshort(i,r);r+=2,s.readUshort(i,r),r+=2;var u=s.readUshort(i,r);r+=2;var h=u/2;l.searchRange=s.readUshort(i,r),r+=2,l.entrySelector=s.readUshort(i,r),r+=2,l.rangeShift=s.readUshort(i,r),r+=2,l.endCount=s.readUshorts(i,r,h),r+=2*h,r+=2,l.startCount=s.readUshorts(i,r,h),r+=2*h,l.idDelta=[];for(var d=0;d<h;d++)l.idDelta.push(s.readShort(i,r)),r+=2;for(l.idRangeOffset=s.readUshorts(i,r,h),r+=2*h,l.glyphIdArray=[];r<a+c;)l.glyphIdArray.push(s.readUshort(i,r)),r+=2;return l},e.cmap.parse6=function(i,r){var s=e._bin,a={};a.format=s.readUshort(i,r),r+=2,s.readUshort(i,r),r+=2,s.readUshort(i,r),r+=2,a.firstCode=s.readUshort(i,r),r+=2;var l=s.readUshort(i,r);r+=2,a.glyphIdArray=[];for(var c=0;c<l;c++)a.glyphIdArray.push(s.readUshort(i,r)),r+=2;return a},e.cmap.parse12=function(i,r){var s=e._bin,a={};a.format=s.readUshort(i,r),r+=2,r+=2,s.readUint(i,r),r+=4,s.readUint(i,r),r+=4;var l=s.readUint(i,r);r+=4,a.groups=[];for(var c=0;c<l;c++){var u=r+12*c,h=s.readUint(i,u+0),d=s.readUint(i,u+4),f=s.readUint(i,u+8);a.groups.push([h,d,f])}return a},e.glyf={},e.glyf.parse=function(i,r,s,a){for(var l=[],c=0;c<a.maxp.numGlyphs;c++)l.push(null);return l},e.glyf._parseGlyf=function(i,r){var s=e._bin,a=i._data,l=e._tabOffset(a,"glyf",i._offset)+i.loca[r];if(i.loca[r]==i.loca[r+1])return null;var c={};if(c.noc=s.readShort(a,l),l+=2,c.xMin=s.readShort(a,l),l+=2,c.yMin=s.readShort(a,l),l+=2,c.xMax=s.readShort(a,l),l+=2,c.yMax=s.readShort(a,l),l+=2,c.xMin>=c.xMax||c.yMin>=c.yMax)return null;if(c.noc>0){c.endPts=[];for(var u=0;u<c.noc;u++)c.endPts.push(s.readUshort(a,l)),l+=2;var h=s.readUshort(a,l);if(l+=2,a.length-l<h)return null;c.instructions=s.readBytes(a,l,h),l+=h;var d=c.endPts[c.noc-1]+1;for(c.flags=[],u=0;u<d;u++){var f=a[l];if(l++,c.flags.push(f),(8&f)!=0){var g=a[l];l++;for(var _=0;_<g;_++)c.flags.push(f),u++}}for(c.xs=[],u=0;u<d;u++){var m=(2&c.flags[u])!=0,p=(16&c.flags[u])!=0;m?(c.xs.push(p?a[l]:-a[l]),l++):p?c.xs.push(0):(c.xs.push(s.readShort(a,l)),l+=2)}for(c.ys=[],u=0;u<d;u++)m=(4&c.flags[u])!=0,p=(32&c.flags[u])!=0,m?(c.ys.push(p?a[l]:-a[l]),l++):p?c.ys.push(0):(c.ys.push(s.readShort(a,l)),l+=2);var v=0,x=0;for(u=0;u<d;u++)v+=c.xs[u],x+=c.ys[u],c.xs[u]=v,c.ys[u]=x}else{var M;c.parts=[];do{M=s.readUshort(a,l),l+=2;var y={m:{a:1,b:0,c:0,d:1,tx:0,ty:0},p1:-1,p2:-1};if(c.parts.push(y),y.glyphIndex=s.readUshort(a,l),l+=2,1&M){var T=s.readShort(a,l);l+=2;var C=s.readShort(a,l);l+=2}else T=s.readInt8(a,l),l++,C=s.readInt8(a,l),l++;2&M?(y.m.tx=T,y.m.ty=C):(y.p1=T,y.p2=C),8&M?(y.m.a=y.m.d=s.readF2dot14(a,l),l+=2):64&M?(y.m.a=s.readF2dot14(a,l),l+=2,y.m.d=s.readF2dot14(a,l),l+=2):128&M&&(y.m.a=s.readF2dot14(a,l),l+=2,y.m.b=s.readF2dot14(a,l),l+=2,y.m.c=s.readF2dot14(a,l),l+=2,y.m.d=s.readF2dot14(a,l),l+=2)}while(32&M);if(256&M){var L=s.readUshort(a,l);for(l+=2,c.instr=[],u=0;u<L;u++)c.instr.push(a[l]),l++}}return c},e.GPOS={},e.GPOS.parse=function(i,r,s,a){return e._lctf.parse(i,r,s,a,e.GPOS.subt)},e.GPOS.subt=function(i,r,s,a){var l=e._bin,c=s,u={};if(u.fmt=l.readUshort(i,s),s+=2,r==1||r==2||r==3||r==7||r==8&&u.fmt<=2){var h=l.readUshort(i,s);s+=2,u.coverage=e._lctf.readCoverage(i,h+c)}if(r==1&&u.fmt==1){var d=l.readUshort(i,s);s+=2;var f=e._lctf.numOfOnes(d);d!=0&&(u.pos=e.GPOS.readValueRecord(i,s,d))}else if(r==2&&u.fmt>=1&&u.fmt<=2){d=l.readUshort(i,s),s+=2;var g=l.readUshort(i,s);s+=2,f=e._lctf.numOfOnes(d);var _=e._lctf.numOfOnes(g);if(u.fmt==1){u.pairsets=[];var m=l.readUshort(i,s);s+=2;for(var p=0;p<m;p++){var v=c+l.readUshort(i,s);s+=2;var x=l.readUshort(i,v);v+=2;for(var M=[],y=0;y<x;y++){var T=l.readUshort(i,v);v+=2,d!=0&&(U=e.GPOS.readValueRecord(i,v,d),v+=2*f),g!=0&&(R=e.GPOS.readValueRecord(i,v,g),v+=2*_),M.push({gid2:T,val1:U,val2:R})}u.pairsets.push(M)}}if(u.fmt==2){var C=l.readUshort(i,s);s+=2;var L=l.readUshort(i,s);s+=2;var S=l.readUshort(i,s);s+=2;var A=l.readUshort(i,s);for(s+=2,u.classDef1=e._lctf.readClassDef(i,c+C),u.classDef2=e._lctf.readClassDef(i,c+L),u.matrix=[],p=0;p<S;p++){var Z=[];for(y=0;y<A;y++){var U=null,R=null;d!=0&&(U=e.GPOS.readValueRecord(i,s,d),s+=2*f),g!=0&&(R=e.GPOS.readValueRecord(i,s,g),s+=2*_),Z.push({val1:U,val2:R})}u.matrix.push(Z)}}}else{if(r==9&&u.fmt==1){var D=l.readUshort(i,s);s+=2;var B=l.readUint(i,s);if(s+=4,a.ltype==9)a.ltype=D;else if(a.ltype!=D)throw"invalid extension substitution";return e.GPOS.subt(i,a.ltype,c+B)}console.debug("unsupported GPOS table LookupType",r,"format",u.fmt)}return u},e.GPOS.readValueRecord=function(i,r,s){var a=e._bin,l=[];return l.push(1&s?a.readShort(i,r):0),r+=1&s?2:0,l.push(2&s?a.readShort(i,r):0),r+=2&s?2:0,l.push(4&s?a.readShort(i,r):0),r+=4&s?2:0,l.push(8&s?a.readShort(i,r):0),r+=8&s?2:0,l},e.GSUB={},e.GSUB.parse=function(i,r,s,a){return e._lctf.parse(i,r,s,a,e.GSUB.subt)},e.GSUB.subt=function(i,r,s,a){var l=e._bin,c=s,u={};if(u.fmt=l.readUshort(i,s),s+=2,r!=1&&r!=4&&r!=5&&r!=6)return null;if(r==1||r==4||r==5&&u.fmt<=2||r==6&&u.fmt<=2){var h=l.readUshort(i,s);s+=2,u.coverage=e._lctf.readCoverage(i,c+h)}if(r==1&&u.fmt>=1&&u.fmt<=2){if(u.fmt==1)u.delta=l.readShort(i,s),s+=2;else if(u.fmt==2){var d=l.readUshort(i,s);s+=2,u.newg=l.readUshorts(i,s,d),s+=2*u.newg.length}}else if(r==4){u.vals=[],d=l.readUshort(i,s),s+=2;for(var f=0;f<d;f++){var g=l.readUshort(i,s);s+=2,u.vals.push(e.GSUB.readLigatureSet(i,c+g))}}else if(r==5&&u.fmt==2){if(u.fmt==2){var _=l.readUshort(i,s);s+=2,u.cDef=e._lctf.readClassDef(i,c+_),u.scset=[];var m=l.readUshort(i,s);for(s+=2,f=0;f<m;f++){var p=l.readUshort(i,s);s+=2,u.scset.push(p==0?null:e.GSUB.readSubClassSet(i,c+p))}}}else if(r==6&&u.fmt==3){if(u.fmt==3){for(f=0;f<3;f++){d=l.readUshort(i,s),s+=2;for(var v=[],x=0;x<d;x++)v.push(e._lctf.readCoverage(i,c+l.readUshort(i,s+2*x)));s+=2*d,f==0&&(u.backCvg=v),f==1&&(u.inptCvg=v),f==2&&(u.ahedCvg=v)}d=l.readUshort(i,s),s+=2,u.lookupRec=e.GSUB.readSubstLookupRecords(i,s,d)}}else{if(r==7&&u.fmt==1){var M=l.readUshort(i,s);s+=2;var y=l.readUint(i,s);if(s+=4,a.ltype==9)a.ltype=M;else if(a.ltype!=M)throw"invalid extension substitution";return e.GSUB.subt(i,a.ltype,c+y)}console.debug("unsupported GSUB table LookupType",r,"format",u.fmt)}return u},e.GSUB.readSubClassSet=function(i,r){var s=e._bin.readUshort,a=r,l=[],c=s(i,r);r+=2;for(var u=0;u<c;u++){var h=s(i,r);r+=2,l.push(e.GSUB.readSubClassRule(i,a+h))}return l},e.GSUB.readSubClassRule=function(i,r){var s=e._bin.readUshort,a={},l=s(i,r),c=s(i,r+=2);r+=2,a.input=[];for(var u=0;u<l-1;u++)a.input.push(s(i,r)),r+=2;return a.substLookupRecords=e.GSUB.readSubstLookupRecords(i,r,c),a},e.GSUB.readSubstLookupRecords=function(i,r,s){for(var a=e._bin.readUshort,l=[],c=0;c<s;c++)l.push(a(i,r),a(i,r+2)),r+=4;return l},e.GSUB.readChainSubClassSet=function(i,r){var s=e._bin,a=r,l=[],c=s.readUshort(i,r);r+=2;for(var u=0;u<c;u++){var h=s.readUshort(i,r);r+=2,l.push(e.GSUB.readChainSubClassRule(i,a+h))}return l},e.GSUB.readChainSubClassRule=function(i,r){for(var s=e._bin,a={},l=["backtrack","input","lookahead"],c=0;c<l.length;c++){var u=s.readUshort(i,r);r+=2,c==1&&u--,a[l[c]]=s.readUshorts(i,r,u),r+=2*a[l[c]].length}return u=s.readUshort(i,r),r+=2,a.subst=s.readUshorts(i,r,2*u),r+=2*a.subst.length,a},e.GSUB.readLigatureSet=function(i,r){var s=e._bin,a=r,l=[],c=s.readUshort(i,r);r+=2;for(var u=0;u<c;u++){var h=s.readUshort(i,r);r+=2,l.push(e.GSUB.readLigature(i,a+h))}return l},e.GSUB.readLigature=function(i,r){var s=e._bin,a={chain:[]};a.nglyph=s.readUshort(i,r),r+=2;var l=s.readUshort(i,r);r+=2;for(var c=0;c<l-1;c++)a.chain.push(s.readUshort(i,r)),r+=2;return a},e.head={},e.head.parse=function(i,r,s){var a=e._bin,l={};return a.readFixed(i,r),r+=4,l.fontRevision=a.readFixed(i,r),r+=4,a.readUint(i,r),r+=4,a.readUint(i,r),r+=4,l.flags=a.readUshort(i,r),r+=2,l.unitsPerEm=a.readUshort(i,r),r+=2,l.created=a.readUint64(i,r),r+=8,l.modified=a.readUint64(i,r),r+=8,l.xMin=a.readShort(i,r),r+=2,l.yMin=a.readShort(i,r),r+=2,l.xMax=a.readShort(i,r),r+=2,l.yMax=a.readShort(i,r),r+=2,l.macStyle=a.readUshort(i,r),r+=2,l.lowestRecPPEM=a.readUshort(i,r),r+=2,l.fontDirectionHint=a.readShort(i,r),r+=2,l.indexToLocFormat=a.readShort(i,r),r+=2,l.glyphDataFormat=a.readShort(i,r),r+=2,l},e.hhea={},e.hhea.parse=function(i,r,s){var a=e._bin,l={};return a.readFixed(i,r),r+=4,l.ascender=a.readShort(i,r),r+=2,l.descender=a.readShort(i,r),r+=2,l.lineGap=a.readShort(i,r),r+=2,l.advanceWidthMax=a.readUshort(i,r),r+=2,l.minLeftSideBearing=a.readShort(i,r),r+=2,l.minRightSideBearing=a.readShort(i,r),r+=2,l.xMaxExtent=a.readShort(i,r),r+=2,l.caretSlopeRise=a.readShort(i,r),r+=2,l.caretSlopeRun=a.readShort(i,r),r+=2,l.caretOffset=a.readShort(i,r),r+=2,r+=8,l.metricDataFormat=a.readShort(i,r),r+=2,l.numberOfHMetrics=a.readUshort(i,r),r+=2,l},e.hmtx={},e.hmtx.parse=function(i,r,s,a){for(var l=e._bin,c={aWidth:[],lsBearing:[]},u=0,h=0,d=0;d<a.maxp.numGlyphs;d++)d<a.hhea.numberOfHMetrics&&(u=l.readUshort(i,r),r+=2,h=l.readShort(i,r),r+=2),c.aWidth.push(u),c.lsBearing.push(h);return c},e.kern={},e.kern.parse=function(i,r,s,a){var l=e._bin,c=l.readUshort(i,r);if(r+=2,c==1)return e.kern.parseV1(i,r-2,s,a);var u=l.readUshort(i,r);r+=2;for(var h={glyph1:[],rval:[]},d=0;d<u;d++){r+=2,s=l.readUshort(i,r),r+=2;var f=l.readUshort(i,r);r+=2;var g=f>>>8;if((g&=15)!=0)throw"unknown kern table format: "+g;r=e.kern.readFormat0(i,r,h)}return h},e.kern.parseV1=function(i,r,s,a){var l=e._bin;l.readFixed(i,r),r+=4;var c=l.readUint(i,r);r+=4;for(var u={glyph1:[],rval:[]},h=0;h<c;h++){l.readUint(i,r),r+=4;var d=l.readUshort(i,r);r+=2,l.readUshort(i,r),r+=2;var f=d>>>8;if((f&=15)!=0)throw"unknown kern table format: "+f;r=e.kern.readFormat0(i,r,u)}return u},e.kern.readFormat0=function(i,r,s){var a=e._bin,l=-1,c=a.readUshort(i,r);r+=2,a.readUshort(i,r),r+=2,a.readUshort(i,r),r+=2,a.readUshort(i,r),r+=2;for(var u=0;u<c;u++){var h=a.readUshort(i,r);r+=2;var d=a.readUshort(i,r);r+=2;var f=a.readShort(i,r);r+=2,h!=l&&(s.glyph1.push(h),s.rval.push({glyph2:[],vals:[]}));var g=s.rval[s.rval.length-1];g.glyph2.push(d),g.vals.push(f),l=h}return r},e.loca={},e.loca.parse=function(i,r,s,a){var l=e._bin,c=[],u=a.head.indexToLocFormat,h=a.maxp.numGlyphs+1;if(u==0)for(var d=0;d<h;d++)c.push(l.readUshort(i,r+(d<<1))<<1);if(u==1)for(d=0;d<h;d++)c.push(l.readUint(i,r+(d<<2)));return c},e.maxp={},e.maxp.parse=function(i,r,s){var a=e._bin,l={},c=a.readUint(i,r);return r+=4,l.numGlyphs=a.readUshort(i,r),r+=2,c==65536&&(l.maxPoints=a.readUshort(i,r),r+=2,l.maxContours=a.readUshort(i,r),r+=2,l.maxCompositePoints=a.readUshort(i,r),r+=2,l.maxCompositeContours=a.readUshort(i,r),r+=2,l.maxZones=a.readUshort(i,r),r+=2,l.maxTwilightPoints=a.readUshort(i,r),r+=2,l.maxStorage=a.readUshort(i,r),r+=2,l.maxFunctionDefs=a.readUshort(i,r),r+=2,l.maxInstructionDefs=a.readUshort(i,r),r+=2,l.maxStackElements=a.readUshort(i,r),r+=2,l.maxSizeOfInstructions=a.readUshort(i,r),r+=2,l.maxComponentElements=a.readUshort(i,r),r+=2,l.maxComponentDepth=a.readUshort(i,r),r+=2),l},e.name={},e.name.parse=function(i,r,s){var a=e._bin,l={};a.readUshort(i,r),r+=2;var c=a.readUshort(i,r);r+=2,a.readUshort(i,r);for(var u,h=["copyright","fontFamily","fontSubfamily","ID","fullName","version","postScriptName","trademark","manufacturer","designer","description","urlVendor","urlDesigner","licence","licenceURL","---","typoFamilyName","typoSubfamilyName","compatibleFull","sampleText","postScriptCID","wwsFamilyName","wwsSubfamilyName","lightPalette","darkPalette"],d=r+=2,f=0;f<c;f++){var g=a.readUshort(i,r);r+=2;var _=a.readUshort(i,r);r+=2;var m=a.readUshort(i,r);r+=2;var p=a.readUshort(i,r);r+=2;var v=a.readUshort(i,r);r+=2;var x=a.readUshort(i,r);r+=2;var M,y=h[p],T=d+12*c+x;if(g==0)M=a.readUnicode(i,T,v/2);else if(g==3&&_==0)M=a.readUnicode(i,T,v/2);else if(_==0)M=a.readASCII(i,T,v);else if(_==1)M=a.readUnicode(i,T,v/2);else if(_==3)M=a.readUnicode(i,T,v/2);else{if(g!=1)throw"unknown encoding "+_+", platformID: "+g;M=a.readASCII(i,T,v),console.debug("reading unknown MAC encoding "+_+" as ASCII")}var C="p"+g+","+m.toString(16);l[C]==null&&(l[C]={}),l[C][y!==void 0?y:p]=M,l[C]._lang=m}for(var L in l)if(l[L].postScriptName!=null&&l[L]._lang==1033)return l[L];for(var L in l)if(l[L].postScriptName!=null&&l[L]._lang==0)return l[L];for(var L in l)if(l[L].postScriptName!=null&&l[L]._lang==3084)return l[L];for(var L in l)if(l[L].postScriptName!=null)return l[L];for(var L in l){u=L;break}return console.debug("returning name table with languageID "+l[u]._lang),l[u]},e["OS/2"]={},e["OS/2"].parse=function(i,r,s){var a=e._bin.readUshort(i,r);r+=2;var l={};if(a==0)e["OS/2"].version0(i,r,l);else if(a==1)e["OS/2"].version1(i,r,l);else if(a==2||a==3||a==4)e["OS/2"].version2(i,r,l);else{if(a!=5)throw"unknown OS/2 table version: "+a;e["OS/2"].version5(i,r,l)}return l},e["OS/2"].version0=function(i,r,s){var a=e._bin;return s.xAvgCharWidth=a.readShort(i,r),r+=2,s.usWeightClass=a.readUshort(i,r),r+=2,s.usWidthClass=a.readUshort(i,r),r+=2,s.fsType=a.readUshort(i,r),r+=2,s.ySubscriptXSize=a.readShort(i,r),r+=2,s.ySubscriptYSize=a.readShort(i,r),r+=2,s.ySubscriptXOffset=a.readShort(i,r),r+=2,s.ySubscriptYOffset=a.readShort(i,r),r+=2,s.ySuperscriptXSize=a.readShort(i,r),r+=2,s.ySuperscriptYSize=a.readShort(i,r),r+=2,s.ySuperscriptXOffset=a.readShort(i,r),r+=2,s.ySuperscriptYOffset=a.readShort(i,r),r+=2,s.yStrikeoutSize=a.readShort(i,r),r+=2,s.yStrikeoutPosition=a.readShort(i,r),r+=2,s.sFamilyClass=a.readShort(i,r),r+=2,s.panose=a.readBytes(i,r,10),r+=10,s.ulUnicodeRange1=a.readUint(i,r),r+=4,s.ulUnicodeRange2=a.readUint(i,r),r+=4,s.ulUnicodeRange3=a.readUint(i,r),r+=4,s.ulUnicodeRange4=a.readUint(i,r),r+=4,s.achVendID=[a.readInt8(i,r),a.readInt8(i,r+1),a.readInt8(i,r+2),a.readInt8(i,r+3)],r+=4,s.fsSelection=a.readUshort(i,r),r+=2,s.usFirstCharIndex=a.readUshort(i,r),r+=2,s.usLastCharIndex=a.readUshort(i,r),r+=2,s.sTypoAscender=a.readShort(i,r),r+=2,s.sTypoDescender=a.readShort(i,r),r+=2,s.sTypoLineGap=a.readShort(i,r),r+=2,s.usWinAscent=a.readUshort(i,r),r+=2,s.usWinDescent=a.readUshort(i,r),r+=2},e["OS/2"].version1=function(i,r,s){var a=e._bin;return r=e["OS/2"].version0(i,r,s),s.ulCodePageRange1=a.readUint(i,r),r+=4,s.ulCodePageRange2=a.readUint(i,r),r+=4},e["OS/2"].version2=function(i,r,s){var a=e._bin;return r=e["OS/2"].version1(i,r,s),s.sxHeight=a.readShort(i,r),r+=2,s.sCapHeight=a.readShort(i,r),r+=2,s.usDefault=a.readUshort(i,r),r+=2,s.usBreak=a.readUshort(i,r),r+=2,s.usMaxContext=a.readUshort(i,r),r+=2},e["OS/2"].version5=function(i,r,s){var a=e._bin;return r=e["OS/2"].version2(i,r,s),s.usLowerOpticalPointSize=a.readUshort(i,r),r+=2,s.usUpperOpticalPointSize=a.readUshort(i,r),r+=2},e.post={},e.post.parse=function(i,r,s){var a=e._bin,l={};return l.version=a.readFixed(i,r),r+=4,l.italicAngle=a.readFixed(i,r),r+=4,l.underlinePosition=a.readShort(i,r),r+=2,l.underlineThickness=a.readShort(i,r),r+=2,l},e==null&&(e={}),e.U==null&&(e.U={}),e.U.codeToGlyph=function(i,r){var s=i.cmap,a=-1;if(s.p0e4!=null?a=s.p0e4:s.p3e1!=null?a=s.p3e1:s.p1e0!=null?a=s.p1e0:s.p0e3!=null&&(a=s.p0e3),a==-1)throw"no familiar platform and encoding!";var l=s.tables[a];if(l.format==0)return r>=l.map.length?0:l.map[r];if(l.format==4){for(var c=-1,u=0;u<l.endCount.length;u++)if(r<=l.endCount[u]){c=u;break}return c==-1||l.startCount[c]>r?0:65535&(l.idRangeOffset[c]!=0?l.glyphIdArray[r-l.startCount[c]+(l.idRangeOffset[c]>>1)-(l.idRangeOffset.length-c)]:r+l.idDelta[c])}if(l.format==12){if(r>l.groups[l.groups.length-1][1])return 0;for(u=0;u<l.groups.length;u++){var h=l.groups[u];if(h[0]<=r&&r<=h[1])return h[2]+(r-h[0])}return 0}throw"unknown cmap table format "+l.format},e.U.glyphToPath=function(i,r){var s={cmds:[],crds:[]};if(i.SVG&&i.SVG.entries[r]){var a=i.SVG.entries[r];return a==null?s:(typeof a=="string"&&(a=e.SVG.toPath(a),i.SVG.entries[r]=a),a)}if(i.CFF){var l={x:0,y:0,stack:[],nStems:0,haveWidth:!1,width:i.CFF.Private?i.CFF.Private.defaultWidthX:0,open:!1},c=i.CFF,u=i.CFF.Private;if(c.ROS){for(var h=0;c.FDSelect[h+2]<=r;)h+=2;u=c.FDArray[c.FDSelect[h+1]].Private}e.U._drawCFF(i.CFF.CharStrings[r],l,c,u,s)}else i.glyf&&e.U._drawGlyf(r,i,s);return s},e.U._drawGlyf=function(i,r,s){var a=r.glyf[i];a==null&&(a=r.glyf[i]=e.glyf._parseGlyf(r,i)),a!=null&&(a.noc>-1?e.U._simpleGlyph(a,s):e.U._compoGlyph(a,r,s))},e.U._simpleGlyph=function(i,r){for(var s=0;s<i.noc;s++){for(var a=s==0?0:i.endPts[s-1]+1,l=i.endPts[s],c=a;c<=l;c++){var u=c==a?l:c-1,h=c==l?a:c+1,d=1&i.flags[c],f=1&i.flags[u],g=1&i.flags[h],_=i.xs[c],m=i.ys[c];if(c==a)if(d){if(!f){e.U.P.moveTo(r,_,m);continue}e.U.P.moveTo(r,i.xs[u],i.ys[u])}else f?e.U.P.moveTo(r,i.xs[u],i.ys[u]):e.U.P.moveTo(r,(i.xs[u]+_)/2,(i.ys[u]+m)/2);d?f&&e.U.P.lineTo(r,_,m):g?e.U.P.qcurveTo(r,_,m,i.xs[h],i.ys[h]):e.U.P.qcurveTo(r,_,m,(_+i.xs[h])/2,(m+i.ys[h])/2)}e.U.P.closePath(r)}},e.U._compoGlyph=function(i,r,s){for(var a=0;a<i.parts.length;a++){var l={cmds:[],crds:[]},c=i.parts[a];e.U._drawGlyf(c.glyphIndex,r,l);for(var u=c.m,h=0;h<l.crds.length;h+=2){var d=l.crds[h],f=l.crds[h+1];s.crds.push(d*u.a+f*u.b+u.tx),s.crds.push(d*u.c+f*u.d+u.ty)}for(h=0;h<l.cmds.length;h++)s.cmds.push(l.cmds[h])}},e.U._getGlyphClass=function(i,r){var s=e._lctf.getInterval(r,i);return s==-1?0:r[s+2]},e.U.getPairAdjustment=function(i,r,s){var a=!1;if(i.GPOS)for(var l=i.GPOS,c=l.lookupList,u=l.featureList,h=[],d=0;d<u.length;d++){var f=u[d];if(f.tag=="kern"){a=!0;for(var g=0;g<f.tab.length;g++)if(!h[f.tab[g]]){h[f.tab[g]]=!0;for(var _=c[f.tab[g]],m=0;m<_.tabs.length;m++)if(_.tabs[m]!=null){var p,v=_.tabs[m];if((!v.coverage||(p=e._lctf.coverageIndex(v.coverage,r))!=-1)&&_.ltype!=1){if(_.ltype==2){var x=null;if(v.fmt==1){var M=v.pairsets[p];for(d=0;d<M.length;d++)M[d].gid2==s&&(x=M[d])}else if(v.fmt==2){var y=e.U._getGlyphClass(r,v.classDef1),T=e.U._getGlyphClass(s,v.classDef2);x=v.matrix[y][T]}if(x){var C=0;return x.val1&&x.val1[2]&&(C+=x.val1[2]),x.val2&&x.val2[0]&&(C+=x.val2[0]),C}}}}}}}if(i.kern&&!a){var L=i.kern.glyph1.indexOf(r);if(L!=-1){var S=i.kern.rval[L].glyph2.indexOf(s);if(S!=-1)return i.kern.rval[L].vals[S]}}return 0},e.U._applySubs=function(i,r,s,a){for(var l=i.length-r-1,c=0;c<s.tabs.length;c++)if(s.tabs[c]!=null){var u,h=s.tabs[c];if(!h.coverage||(u=e._lctf.coverageIndex(h.coverage,i[r]))!=-1){if(s.ltype==1)i[r],h.fmt==1?i[r]=i[r]+h.delta:i[r]=h.newg[u];else if(s.ltype==4)for(var d=h.vals[u],f=0;f<d.length;f++){var g=d[f],_=g.chain.length;if(!(_>l)){for(var m=!0,p=0,v=0;v<_;v++){for(;i[r+p+(1+v)]==-1;)p++;g.chain[v]!=i[r+p+(1+v)]&&(m=!1)}if(m){for(i[r]=g.nglyph,v=0;v<_+p;v++)i[r+v+1]=-1;break}}}else if(s.ltype==5&&h.fmt==2)for(var x=e._lctf.getInterval(h.cDef,i[r]),M=h.cDef[x+2],y=h.scset[M],T=0;T<y.length;T++){var C=y[T],L=C.input;if(!(L.length>l)){for(m=!0,v=0;v<L.length;v++){var S=e._lctf.getInterval(h.cDef,i[r+1+v]);if(x==-1&&h.cDef[S+2]!=L[v]){m=!1;break}}if(m){var A=C.substLookupRecords;for(f=0;f<A.length;f+=2)A[f],A[f+1]}}}else if(s.ltype==6&&h.fmt==3){if(!e.U._glsCovered(i,h.backCvg,r-h.backCvg.length)||!e.U._glsCovered(i,h.inptCvg,r)||!e.U._glsCovered(i,h.ahedCvg,r+h.inptCvg.length))continue;var Z=h.lookupRec;for(T=0;T<Z.length;T+=2){x=Z[T];var U=a[Z[T+1]];e.U._applySubs(i,r+x,U,a)}}}}},e.U._glsCovered=function(i,r,s){for(var a=0;a<r.length;a++)if(e._lctf.coverageIndex(r[a],i[s+a])==-1)return!1;return!0},e.U.glyphsToPath=function(i,r,s){for(var a={cmds:[],crds:[]},l=0,c=0;c<r.length;c++){var u=r[c];if(u!=-1){for(var h=c<r.length-1&&r[c+1]!=-1?r[c+1]:0,d=e.U.glyphToPath(i,u),f=0;f<d.crds.length;f+=2)a.crds.push(d.crds[f]+l),a.crds.push(d.crds[f+1]);for(s&&a.cmds.push(s),f=0;f<d.cmds.length;f++)a.cmds.push(d.cmds[f]);s&&a.cmds.push("X"),l+=i.hmtx.aWidth[u],c<r.length-1&&(l+=e.U.getPairAdjustment(i,u,h))}}return a},e.U.P={},e.U.P.moveTo=function(i,r,s){i.cmds.push("M"),i.crds.push(r,s)},e.U.P.lineTo=function(i,r,s){i.cmds.push("L"),i.crds.push(r,s)},e.U.P.curveTo=function(i,r,s,a,l,c,u){i.cmds.push("C"),i.crds.push(r,s,a,l,c,u)},e.U.P.qcurveTo=function(i,r,s,a,l){i.cmds.push("Q"),i.crds.push(r,s,a,l)},e.U.P.closePath=function(i){i.cmds.push("Z")},e.U._drawCFF=function(i,r,s,a,l){for(var c=r.stack,u=r.nStems,h=r.haveWidth,d=r.width,f=r.open,g=0,_=r.x,m=r.y,p=0,v=0,x=0,M=0,y=0,T=0,C=0,L=0,S=0,A=0,Z={val:0,size:0};g<i.length;){e.CFF.getCharString(i,g,Z);var U=Z.val;if(g+=Z.size,U=="o1"||U=="o18")c.length%2!=0&&!h&&(d=c.shift()+a.nominalWidthX),u+=c.length>>1,c.length=0,h=!0;else if(U=="o3"||U=="o23")c.length%2!=0&&!h&&(d=c.shift()+a.nominalWidthX),u+=c.length>>1,c.length=0,h=!0;else if(U=="o4")c.length>1&&!h&&(d=c.shift()+a.nominalWidthX,h=!0),f&&e.U.P.closePath(l),m+=c.pop(),e.U.P.moveTo(l,_,m),f=!0;else if(U=="o5")for(;c.length>0;)_+=c.shift(),m+=c.shift(),e.U.P.lineTo(l,_,m);else if(U=="o6"||U=="o7")for(var R=c.length,D=U=="o6",B=0;B<R;B++){var Y=c.shift();D?_+=Y:m+=Y,D=!D,e.U.P.lineTo(l,_,m)}else if(U=="o8"||U=="o24"){R=c.length;for(var re=0;re+6<=R;)p=_+c.shift(),v=m+c.shift(),x=p+c.shift(),M=v+c.shift(),_=x+c.shift(),m=M+c.shift(),e.U.P.curveTo(l,p,v,x,M,_,m),re+=6;U=="o24"&&(_+=c.shift(),m+=c.shift(),e.U.P.lineTo(l,_,m))}else{if(U=="o11")break;if(U=="o1234"||U=="o1235"||U=="o1236"||U=="o1237")U=="o1234"&&(v=m,x=(p=_+c.shift())+c.shift(),A=M=v+c.shift(),T=M,L=m,_=(C=(y=(S=x+c.shift())+c.shift())+c.shift())+c.shift(),e.U.P.curveTo(l,p,v,x,M,S,A),e.U.P.curveTo(l,y,T,C,L,_,m)),U=="o1235"&&(p=_+c.shift(),v=m+c.shift(),x=p+c.shift(),M=v+c.shift(),S=x+c.shift(),A=M+c.shift(),y=S+c.shift(),T=A+c.shift(),C=y+c.shift(),L=T+c.shift(),_=C+c.shift(),m=L+c.shift(),c.shift(),e.U.P.curveTo(l,p,v,x,M,S,A),e.U.P.curveTo(l,y,T,C,L,_,m)),U=="o1236"&&(p=_+c.shift(),v=m+c.shift(),x=p+c.shift(),A=M=v+c.shift(),T=M,C=(y=(S=x+c.shift())+c.shift())+c.shift(),L=T+c.shift(),_=C+c.shift(),e.U.P.curveTo(l,p,v,x,M,S,A),e.U.P.curveTo(l,y,T,C,L,_,m)),U=="o1237"&&(p=_+c.shift(),v=m+c.shift(),x=p+c.shift(),M=v+c.shift(),S=x+c.shift(),A=M+c.shift(),y=S+c.shift(),T=A+c.shift(),C=y+c.shift(),L=T+c.shift(),Math.abs(C-_)>Math.abs(L-m)?_=C+c.shift():m=L+c.shift(),e.U.P.curveTo(l,p,v,x,M,S,A),e.U.P.curveTo(l,y,T,C,L,_,m));else if(U=="o14"){if(c.length>0&&!h&&(d=c.shift()+s.nominalWidthX,h=!0),c.length==4){var Q=c.shift(),G=c.shift(),K=c.shift(),N=c.shift(),W=e.CFF.glyphBySE(s,K),k=e.CFF.glyphBySE(s,N);e.U._drawCFF(s.CharStrings[W],r,s,a,l),r.x=Q,r.y=G,e.U._drawCFF(s.CharStrings[k],r,s,a,l)}f&&(e.U.P.closePath(l),f=!1)}else if(U=="o19"||U=="o20")c.length%2!=0&&!h&&(d=c.shift()+a.nominalWidthX),u+=c.length>>1,c.length=0,h=!0,g+=u+7>>3;else if(U=="o21")c.length>2&&!h&&(d=c.shift()+a.nominalWidthX,h=!0),m+=c.pop(),_+=c.pop(),f&&e.U.P.closePath(l),e.U.P.moveTo(l,_,m),f=!0;else if(U=="o22")c.length>1&&!h&&(d=c.shift()+a.nominalWidthX,h=!0),_+=c.pop(),f&&e.U.P.closePath(l),e.U.P.moveTo(l,_,m),f=!0;else if(U=="o25"){for(;c.length>6;)_+=c.shift(),m+=c.shift(),e.U.P.lineTo(l,_,m);p=_+c.shift(),v=m+c.shift(),x=p+c.shift(),M=v+c.shift(),_=x+c.shift(),m=M+c.shift(),e.U.P.curveTo(l,p,v,x,M,_,m)}else if(U=="o26")for(c.length%2&&(_+=c.shift());c.length>0;)p=_,v=m+c.shift(),_=x=p+c.shift(),m=(M=v+c.shift())+c.shift(),e.U.P.curveTo(l,p,v,x,M,_,m);else if(U=="o27")for(c.length%2&&(m+=c.shift());c.length>0;)v=m,x=(p=_+c.shift())+c.shift(),M=v+c.shift(),_=x+c.shift(),m=M,e.U.P.curveTo(l,p,v,x,M,_,m);else if(U=="o10"||U=="o29"){var z=U=="o10"?a:s;if(c.length==0)console.debug("error: empty stack");else{var H=c.pop(),ee=z.Subrs[H+z.Bias];r.x=_,r.y=m,r.nStems=u,r.haveWidth=h,r.width=d,r.open=f,e.U._drawCFF(ee,r,s,a,l),_=r.x,m=r.y,u=r.nStems,h=r.haveWidth,d=r.width,f=r.open}}else if(U=="o30"||U=="o31"){var I=c.length,ie=(re=0,U=="o31");for(re+=I-(R=-3&I);re<R;)ie?(v=m,x=(p=_+c.shift())+c.shift(),m=(M=v+c.shift())+c.shift(),R-re==5?(_=x+c.shift(),re++):_=x,ie=!1):(p=_,v=m+c.shift(),x=p+c.shift(),M=v+c.shift(),_=x+c.shift(),R-re==5?(m=M+c.shift(),re++):m=M,ie=!0),e.U.P.curveTo(l,p,v,x,M,_,m),re+=4}else{if((U+"").charAt(0)=="o")throw console.debug("Unknown operation: "+U,i),U;c.push(U)}}}r.x=_,r.y=m,r.nStems=u,r.haveWidth=h,r.width=d,r.open=f};var t=e,n={Typr:t};return o.Typr=t,o.default=n,Object.defineProperty(o,"__esModule",{value:!0}),o}({}).Typr}/*!
Custom bundle of woff2otf (https://github.com/arty-name/woff2otf) with fflate
(https://github.com/101arrowz/fflate) for use in Troika text rendering. 
Original licenses apply: 
- fflate: https://github.com/101arrowz/fflate/blob/master/LICENSE (MIT)
- woff2otf.js: https://github.com/arty-name/woff2otf/blob/master/woff2otf.js (Apache2)
*/function ux(){return function(o){var e=Uint8Array,t=Uint16Array,n=Uint32Array,i=new e([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),r=new e([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),s=new e([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),a=function(U,R){for(var D=new t(31),B=0;B<31;++B)D[B]=R+=1<<U[B-1];var Y=new n(D[30]);for(B=1;B<30;++B)for(var re=D[B];re<D[B+1];++re)Y[re]=re-D[B]<<5|B;return[D,Y]},l=a(i,2),c=l[0],u=l[1];c[28]=258,u[258]=28;for(var h=a(r,0)[0],d=new t(32768),f=0;f<32768;++f){var g=(43690&f)>>>1|(21845&f)<<1;g=(61680&(g=(52428&g)>>>2|(13107&g)<<2))>>>4|(3855&g)<<4,d[f]=((65280&g)>>>8|(255&g)<<8)>>>1}var _=function(U,R,D){for(var B=U.length,Y=0,re=new t(R);Y<B;++Y)++re[U[Y]-1];var Q,G=new t(R);for(Y=0;Y<R;++Y)G[Y]=G[Y-1]+re[Y-1]<<1;if(D){Q=new t(1<<R);var K=15-R;for(Y=0;Y<B;++Y)if(U[Y])for(var N=Y<<4|U[Y],W=R-U[Y],k=G[U[Y]-1]++<<W,z=k|(1<<W)-1;k<=z;++k)Q[d[k]>>>K]=N}else for(Q=new t(B),Y=0;Y<B;++Y)U[Y]&&(Q[Y]=d[G[U[Y]-1]++]>>>15-U[Y]);return Q},m=new e(288);for(f=0;f<144;++f)m[f]=8;for(f=144;f<256;++f)m[f]=9;for(f=256;f<280;++f)m[f]=7;for(f=280;f<288;++f)m[f]=8;var p=new e(32);for(f=0;f<32;++f)p[f]=5;var v=_(m,9,1),x=_(p,5,1),M=function(U){for(var R=U[0],D=1;D<U.length;++D)U[D]>R&&(R=U[D]);return R},y=function(U,R,D){var B=R/8|0;return(U[B]|U[B+1]<<8)>>(7&R)&D},T=function(U,R){var D=R/8|0;return(U[D]|U[D+1]<<8|U[D+2]<<16)>>(7&R)},C=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],L=function(U,R,D){var B=new Error(R||C[U]);if(B.code=U,Error.captureStackTrace&&Error.captureStackTrace(B,L),!D)throw B;return B},S=function(U,R,D){var B=U.length;if(!B||D&&!D.l&&B<5)return R||new e(0);var Y=!R||D,re=!D||D.i;D||(D={}),R||(R=new e(3*B));var Q,G=function(ve){var Le=R.length;if(ve>Le){var Pe=new e(Math.max(2*Le,ve));Pe.set(R),R=Pe}},K=D.f||0,N=D.p||0,W=D.b||0,k=D.l,z=D.d,H=D.m,ee=D.n,I=8*B;do{if(!k){D.f=K=y(U,N,1);var ie=y(U,N+1,3);if(N+=3,!ie){var he=U[(be=((Q=N)/8|0)+(7&Q&&1)+4)-4]|U[be-3]<<8,se=be+he;if(se>B){re&&L(0);break}Y&&G(W+he),R.set(U.subarray(be,se),W),D.b=W+=he,D.p=N=8*se;continue}if(ie==1)k=v,z=x,H=9,ee=5;else if(ie==2){var le=y(U,N,31)+257,oe=y(U,N+10,15)+4,ye=le+y(U,N+5,31)+1;N+=14;for(var Ee=new e(ye),Me=new e(19),Te=0;Te<oe;++Te)Me[s[Te]]=y(U,N+3*Te,7);N+=3*oe;var Ie=M(Me),ge=(1<<Ie)-1,Se=_(Me,Ie,1);for(Te=0;Te<ye;){var be,fe=Se[y(U,N,ge)];if(N+=15&fe,(be=fe>>>4)<16)Ee[Te++]=be;else{var w=0,b=0;for(be==16?(b=3+y(U,N,3),N+=2,w=Ee[Te-1]):be==17?(b=3+y(U,N,7),N+=3):be==18&&(b=11+y(U,N,127),N+=7);b--;)Ee[Te++]=w}}var V=Ee.subarray(0,le),J=Ee.subarray(le);H=M(V),ee=M(J),k=_(V,H,1),z=_(J,ee,1)}else L(1);if(N>I){re&&L(0);break}}Y&&G(W+131072);for(var ce=(1<<H)-1,pe=(1<<ee)-1,P=N;;P=N){var $=(w=k[T(U,N)&ce])>>>4;if((N+=15&w)>I){re&&L(0);break}if(w||L(2),$<256)R[W++]=$;else{if($==256){P=N,k=null;break}var X=$-254;if($>264){var xe=i[Te=$-257];X=y(U,N,(1<<xe)-1)+c[Te],N+=xe}var _e=z[T(U,N)&pe],we=_e>>>4;if(_e||L(3),N+=15&_e,J=h[we],we>3&&(xe=r[we],J+=T(U,N)&(1<<xe)-1,N+=xe),N>I){re&&L(0);break}Y&&G(W+131072);for(var me=W+X;W<me;W+=4)R[W]=R[W-J],R[W+1]=R[W+1-J],R[W+2]=R[W+2-J],R[W+3]=R[W+3-J];W=me}}D.l=k,D.p=P,D.b=W,k&&(K=1,D.m=H,D.d=z,D.n=ee)}while(!K);return W==R.length?R:function(ve,Le,Pe){(Le==null||Le<0)&&(Le=0),(Pe==null||Pe>ve.length)&&(Pe=ve.length);var Ve=new(ve instanceof t?t:ve instanceof n?n:e)(Pe-Le);return Ve.set(ve.subarray(Le,Pe)),Ve}(R,0,W)},A=new e(0),Z=typeof TextDecoder<"u"&&new TextDecoder;try{Z.decode(A,{stream:!0})}catch{}return o.convert_streams=function(U){var R=new DataView(U),D=0;function B(){var le=R.getUint16(D);return D+=2,le}function Y(){var le=R.getUint32(D);return D+=4,le}function re(le){he.setUint16(se,le),se+=2}function Q(le){he.setUint32(se,le),se+=4}for(var G={signature:Y(),flavor:Y(),length:Y(),numTables:B(),reserved:B(),totalSfntSize:Y(),majorVersion:B(),minorVersion:B(),metaOffset:Y(),metaLength:Y(),metaOrigLength:Y(),privOffset:Y(),privLength:Y()},K=0;Math.pow(2,K)<=G.numTables;)K++;K--;for(var N=16*Math.pow(2,K),W=16*G.numTables-N,k=12,z=[],H=0;H<G.numTables;H++)z.push({tag:Y(),offset:Y(),compLength:Y(),origLength:Y(),origChecksum:Y()}),k+=16;var ee,I=new Uint8Array(12+16*z.length+z.reduce(function(le,oe){return le+oe.origLength+4},0)),ie=I.buffer,he=new DataView(ie),se=0;return Q(G.flavor),re(G.numTables),re(N),re(K),re(W),z.forEach(function(le){Q(le.tag),Q(le.origChecksum),Q(k),Q(le.origLength),le.outOffset=k,(k+=le.origLength)%4!=0&&(k+=4-k%4)}),z.forEach(function(le){var oe,ye=U.slice(le.offset,le.offset+le.compLength);if(le.compLength!=le.origLength){var Ee=new Uint8Array(le.origLength);oe=new Uint8Array(ye,2),S(oe,Ee)}else Ee=new Uint8Array(ye);I.set(Ee,le.outOffset);var Me=0;(k=le.outOffset+le.origLength)%4!=0&&(Me=4-k%4),I.set(new Uint8Array(Me).buffer,le.outOffset+le.origLength),ee=k+Me}),ie.slice(0,ee)},Object.defineProperty(o,"__esModule",{value:!0}),o}({}).convert_streams}function hx(o,e){const t={M:2,L:2,Q:4,C:6,Z:0},n={C:"18g,ca,368,1kz",D:"17k,6,2,2+4,5+c,2+6,2+1,10+1,9+f,j+11,2+1,a,2,2+1,15+2,3,j+2,6+3,2+8,2,2,2+1,w+a,4+e,3+3,2,3+2,3+5,23+w,2f+4,3,2+9,2,b,2+3,3,1k+9,6+1,3+1,2+2,2+d,30g,p+y,1,1+1g,f+x,2,sd2+1d,jf3+4,f+3,2+4,2+2,b+3,42,2,4+2,2+1,2,3,t+1,9f+w,2,el+2,2+g,d+2,2l,2+1,5,3+1,2+1,2,3,6,16wm+1v",R:"17m+3,2,2,6+3,m,15+2,2+2,h+h,13,3+8,2,2,3+1,2,p+1,x,5+4,5,a,2,2,3,u,c+2,g+1,5,2+1,4+1,5j,6+1,2,b,2+2,f,2+1,1s+2,2,3+1,7,1ez0,2,2+1,4+4,b,4,3,b,42,2+2,4,3,2+1,2,o+3,ae,ep,x,2o+2,3+1,3,5+1,6",L:"x9u,jff,a,fd,jv",T:"4t,gj+33,7o+4,1+1,7c+18,2,2+1,2+1,2,21+a,2,1b+k,h,2u+6,3+5,3+1,2+3,y,2,v+q,2k+a,1n+8,a,p+3,2+8,2+2,2+4,18+2,3c+e,2+v,1k,2,5+7,5,4+6,b+1,u,1n,5+3,9,l+1,r,3+1,1m,5+1,5+1,3+2,4,v+1,4,c+1,1m,5+4,2+1,5,l+1,n+5,2,1n,3,2+3,9,8+1,c+1,v,1q,d,1f,4,1m+2,6+2,2+3,8+1,c+1,u,1n,3,7,6+1,l+1,t+1,1m+1,5+3,9,l+1,u,21,8+2,2,2j,3+6,d+7,2r,3+8,c+5,23+1,s,2,2,1k+d,2+4,2+1,6+a,2+z,a,2v+3,2+5,2+1,3+1,q+1,5+2,h+3,e,3+1,7,g,jk+2,qb+2,u+2,u+1,v+1,1t+1,2+6,9,3+a,a,1a+2,3c+1,z,3b+2,5+1,a,7+2,64+1,3,1n,2+6,2,2,3+7,7+9,3,1d+d,1,1+1,1s+3,1d,2+4,2,6,15+8,d+1,x+3,3+1,2+2,1l,2+1,4,2+2,1n+7,3+1,49+2,2+c,2+6,5,7,4+1,5j+1l,2+4,ek,3+1,r+4,1e+4,6+5,2p+c,1+3,1,1+2,1+b,2db+2,3y,2p+v,ff+3,30+1,n9x,1+2,2+9,x+1,29+1,7l,4,5,q+1,6,48+1,r+h,e,13+7,q+a,1b+2,1d,3+3,3+1,14,1w+5,3+1,3+1,d,9,1c,1g,2+2,3+1,6+1,2,17+1,9,6n,3,5,fn5,ki+f,h+f,5s,6y+2,ea,6b,46+4,1af+2,2+1,6+3,15+2,5,4m+1,fy+3,as+1,4a+a,4x,1j+e,1l+2,1e+3,3+1,1y+2,11+4,2+7,1r,d+1,1h+8,b+3,3,2o+2,3,2+1,7,4h,4+7,m+1,1m+1,4,12+6,4+4,5g+7,3+2,2,o,2d+5,2,5+1,2+1,6n+3,7+1,2+1,s+1,2e+7,3,2+1,2z,2,3+5,2,2u+2,3+3,2+4,78+8,2+1,75+1,2,5,41+3,3+1,5,x+9,15+5,3+3,9,a+5,3+2,1b+c,2+1,bb+6,2+5,2,2b+l,3+6,2+1,2+1,3f+5,4,2+1,2+6,2,21+1,4,2,9o+1,470+8,at4+4,1o+6,t5,1s+3,2a,f5l+1,2+3,43o+2,a+7,1+7,3+6,v+3,45+2,1j0+1i,5+1d,9,f,n+4,2+e,11t+6,2+g,3+6,2+1,2+4,7a+6,c6+3,15t+6,32+6,1,gzau,v+2n,3l+6n"},i=1,r=2,s=4,a=8,l=16,c=32;let u;function h(y){if(!u){const T={R:r,L:i,D:s,C:l,U:c,T:a};u=new Map;for(let C in n){let L=0;n[C].split(",").forEach(S=>{let[A,Z]=S.split("+");A=parseInt(A,36),Z=Z?parseInt(Z,36):0,u.set(L+=A,T[C]);for(let U=Z;U--;)u.set(++L,T[C])})}}return u.get(y)||c}const d=1,f=2,g=3,_=4,m=[null,"isol","init","fina","medi"];function p(y){const T=new Uint8Array(y.length);let C=c,L=d,S=-1;for(let A=0;A<y.length;A++){const Z=y.codePointAt(A);let U=h(Z)|0,R=d;U&a||(C&(i|s|l)?U&(r|s|l)?(R=g,(L===d||L===g)&&T[S]++):U&(i|c)&&(L===f||L===_)&&T[S]--:C&(r|c)&&(L===f||L===_)&&T[S]--,L=T[A]=R,C=U,S=A,Z>65535&&A++)}return T}function v(y,T){const C=[];for(let S=0;S<T.length;S++){const A=T.codePointAt(S);A>65535&&S++,C.push(o.U.codeToGlyph(y,A))}const L=y.GSUB;if(L){const{lookupList:S,featureList:A}=L;let Z;const U=/^(rlig|liga|mset|isol|init|fina|medi|half|pres|blws)$/,R=[];A.forEach(D=>{if(U.test(D.tag))for(let B=0;B<D.tab.length;B++){if(R[D.tab[B]])continue;R[D.tab[B]]=!0;const Y=S[D.tab[B]],re=/^(isol|init|fina|medi)$/.test(D.tag);re&&!Z&&(Z=p(T));for(let Q=0;Q<C.length;Q++)(!Z||!re||m[Z[Q]]===D.tag)&&o.U._applySubs(C,Q,Y,S)}})}return C}function x(...y){for(let T=0;T<y.length;T++)if(typeof y[T]=="number")return y[T]}function M(y){const T=Object.create(null),C=y["OS/2"],L=y.hhea,S=y.head.unitsPerEm,A=x(C&&C.sTypoAscender,L&&L.ascender,S),Z={unitsPerEm:S,ascender:A,descender:x(C&&C.sTypoDescender,L&&L.descender,0),capHeight:x(C&&C.sCapHeight,A),xHeight:x(C&&C.sxHeight,A),lineGap:x(C&&C.sTypoLineGap,L&&L.lineGap),forEachGlyph(U,R,D,B){let Y=0;const re=1/Z.unitsPerEm*R,Q=v(y,U);let G=0,K=-1;return Q.forEach((N,W)=>{if(N!==-1){let k=T[N];if(!k){const{cmds:z,crds:H}=o.U.glyphToPath(y,N);let ee="",I=0;for(let oe=0,ye=z.length;oe<ye;oe++){const Ee=t[z[oe]];ee+=z[oe];for(let Me=1;Me<=Ee;Me++)ee+=(Me>1?",":"")+H[I++]}let ie,he,se,le;if(H.length){ie=he=1/0,se=le=-1/0;for(let oe=0,ye=H.length;oe<ye;oe+=2){let Ee=H[oe],Me=H[oe+1];Ee<ie&&(ie=Ee),Me<he&&(he=Me),Ee>se&&(se=Ee),Me>le&&(le=Me)}}else ie=se=he=le=0;k=T[N]={index:N,advanceWidth:y.hmtx.aWidth[N],xMin:ie,yMin:he,xMax:se,yMax:le,path:ee,pathCommandCount:z.length}}K!==-1&&(Y+=o.U.getPairAdjustment(y,K,N)*re),B.call(null,k,Y,G),k.advanceWidth&&(Y+=k.advanceWidth*re),D&&(Y+=D*R),K=N}G+=U.codePointAt(G)>65535?2:1}),Y}};return Z}return function(T){const C=new Uint8Array(T,0,4),L=o._bin.readASCII(C,0,4);if(L==="wOFF")T=e(T);else if(L==="wOF2")throw new Error("woff2 fonts not supported");return M(o.parse(T)[0])}}const dx=bs({name:"Typr Font Parser",dependencies:[cx,ux,hx],init(o,e,t){const n=o(),i=e();return t(n,i)}}),cr={defaultFontURL:"https://fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu4mxM.woff",sdfGlyphSize:64,sdfMargin:1/16,sdfExponent:9,textureWidth:2048},fx=new ze;function sr(){return(self.performance||Date).now()}const Iu=Object.create(null);function px(o,e){o=gx({},o);const t=sr();if(o.font=_x(o.font||cr.defaultFontURL),o.text=""+o.text,o.sdfGlyphSize=o.sdfGlyphSize||cr.sdfGlyphSize,o.colorRanges!=null){let h={};for(let d in o.colorRanges)if(o.colorRanges.hasOwnProperty(d)){let f=o.colorRanges[d];typeof f!="number"&&(f=fx.set(f).getHex()),h[d]=f}o.colorRanges=h}Object.freeze(o);const{textureWidth:n,sdfExponent:i}=cr,{sdfGlyphSize:r}=o,s=n/r*4;let a=Iu[r];if(!a){const h=document.createElement("canvas");h.width=n,h.height=r*256/s,a=Iu[r]={glyphCount:0,sdfGlyphSize:r,sdfCanvas:h,sdfTexture:new Tt(h,void 0,void 0,void 0,Ot,Ot),contextLost:!1,glyphsByFont:new Map},a.sdfTexture.generateMipmaps=!1,mx(a)}const{sdfTexture:l,sdfCanvas:c}=a;let u=a.glyphsByFont.get(o.font);u||a.glyphsByFont.set(o.font,u=new Map),xx(o).then(h=>{const{glyphIds:d,glyphPositions:f,fontSize:g,unitsPerEm:_,timings:m}=h,p=[],v=new Float32Array(d.length*4),x=g/_;let M=0,y=0;const T=sr();d.forEach((Z,U)=>{let R=u.get(Z);if(!R){const{path:re,pathBounds:Q}=h.glyphData[Z],G=Math.max(Q[2]-Q[0],Q[3]-Q[1])/r*(cr.sdfMargin*r+.5),K=a.glyphCount++,N=[Q[0]-G,Q[1]-G,Q[2]+G,Q[3]+G];u.set(Z,R={path:re,atlasIndex:K,sdfViewBox:N}),p.push(R)}const{sdfViewBox:D}=R,B=f[y++],Y=f[y++];v[M++]=B+D[0]*x,v[M++]=Y+D[1]*x,v[M++]=B+D[2]*x,v[M++]=Y+D[3]*x,d[U]=R.atlasIndex}),m.quads=(m.quads||0)+(sr()-T);const C=sr();m.sdf={};const L=c.height,S=Math.ceil(a.glyphCount/s),A=Math.pow(2,Math.ceil(Math.log2(S*r)));A>L&&(console.info(`Increasing SDF texture size ${L}->${A}`),lx(c,n,A),l.dispose()),Promise.all(p.map(Z=>qh(Z,a,o.gpuAccelerateSDF).then(({timing:U})=>{m.sdf[Z.atlasIndex]=U}))).then(()=>{p.length&&!a.contextLost&&(Yh(a),l.needsUpdate=!0),m.sdfTotal=sr()-C,m.total=sr()-t,e(Object.freeze({parameters:o,sdfTexture:l,sdfGlyphSize:r,sdfExponent:i,glyphBounds:v,glyphAtlasIndices:d,glyphColors:h.glyphColors,caretPositions:h.caretPositions,caretHeight:h.caretHeight,chunkedBounds:h.chunkedBounds,ascender:h.ascender,descender:h.descender,lineHeight:h.lineHeight,capHeight:h.capHeight,xHeight:h.xHeight,topBaseline:h.topBaseline,blockBounds:h.blockBounds,visibleBounds:h.visibleBounds,timings:h.timings}))})}),Promise.resolve().then(()=>{a.contextLost||ox(c)})}function qh({path:o,atlasIndex:e,sdfViewBox:t},{sdfGlyphSize:n,sdfCanvas:i,contextLost:r},s){if(r)return Promise.resolve({timing:-1});const{textureWidth:a,sdfExponent:l}=cr,c=Math.max(t[2]-t[0],t[3]-t[1]),u=Math.floor(e/4),h=u%(a/n)*n,d=Math.floor(u/(a/n))*n,f=e%4;return tx(n,n,o,t,c,l,i,h,d,f,s)}function mx(o){const e=o.sdfCanvas;e.addEventListener("webglcontextlost",t=>{console.log("Context Lost",t),t.preventDefault(),o.contextLost=!0}),e.addEventListener("webglcontextrestored",t=>{console.log("Context Restored",t),o.contextLost=!1;const n=[];o.glyphsByFont.forEach(i=>{i.forEach(r=>{n.push(qh(r,o,!0))})}),Promise.all(n).then(()=>{Yh(o),o.sdfTexture.needsUpdate=!0})})}function gx(o,e){for(let t in e)e.hasOwnProperty(t)&&(o[t]=e[t]);return o}let la;function _x(o){return la||(la=typeof document>"u"?{}:document.createElement("a")),la.href=o,la.href}function Yh(o){if(typeof createImageBitmap!="function"){console.info("Safari<15: applying SDF canvas workaround");const{sdfCanvas:e,sdfTexture:t}=o,{width:n,height:i}=e,r=o.sdfCanvas.getContext("webgl");let s=t.image.data;(!s||s.length!==n*i*4)&&(s=new Uint8Array(n*i*4),t.image={width:n,height:i,data:s},t.flipY=!1,t.isDataTexture=!0),r.readPixels(0,0,n,i,r.RGBA,r.UNSIGNED_BYTE,s)}}const vx=bs({name:"Typesetter",dependencies:[cr,dx,ex,jv],init(o,e,t,n){const{defaultFontURL:i}=o;return t(e,n(),{defaultFontURL:i})}}),xx=bs({name:"Typesetter",dependencies:[vx],init(o){return function(e){return new Promise(t=>{o.typeset(e,t)})}},getTransferables(o){const e=[o.glyphPositions.buffer,o.glyphIds.buffer];return o.caretPositions&&e.push(o.caretPositions.buffer),o.glyphColors&&e.push(o.glyphColors.buffer),e}}),Uu={};function yx(o){let e=Uu[o];if(!e){const t=new wr(1,1,o,o),n=t.clone(),i=t.attributes,r=n.attributes,s=new Xt,a=i.uv.count;for(let l=0;l<a;l++)r.position.array[l*3]*=-1,r.normal.array[l*3+2]*=-1;["position","normal","uv"].forEach(l=>{s.setAttribute(l,new $t([...i[l].array,...r[l].array],i[l].itemSize))}),s.setIndex([...t.index.array,...n.index.array.map(l=>l+a)]),s.translate(.5,.5,0),e=Uu[o]=s}return e}const Mx="aTroikaGlyphBounds",Ou="aTroikaGlyphIndex",bx="aTroikaGlyphColor";class Sx extends H_{constructor(){super(),this.detail=1,this.curveRadius=0,this.groups=[{start:0,count:1/0,materialIndex:0},{start:0,count:1/0,materialIndex:1}],this.boundingSphere=new Pn,this.boundingBox=new Ln}computeBoundingSphere(){}computeBoundingBox(){}setSide(e){const t=this.getIndex().count;this.setDrawRange(e===Ht?t/2:0,e===sn?t:t/2)}set detail(e){if(e!==this._detail){this._detail=e,(typeof e!="number"||e<1)&&(e=1);let t=yx(e);["position","normal","uv"].forEach(n=>{this.attributes[n]=t.attributes[n].clone()}),this.setIndex(t.getIndex().clone())}}get detail(){return this._detail}set curveRadius(e){e!==this._curveRadius&&(this._curveRadius=e,this._updateBounds())}get curveRadius(){return this._curveRadius}updateGlyphs(e,t,n,i,r){wo(this,Mx,e,4),wo(this,Ou,t,1),wo(this,bx,r,3),this._blockBounds=n,this._chunkedBounds=i,this.instanceCount=t.length,this._updateBounds()}_updateBounds(){const e=this._blockBounds;if(e){const{curveRadius:t,boundingBox:n}=this;if(t){const{PI:i,floor:r,min:s,max:a,sin:l,cos:c}=Math,u=i/2,h=i*2,d=Math.abs(t),f=e[0]/d,g=e[2]/d,_=r((f+u)/h)!==r((g+u)/h)?-d:s(l(f)*d,l(g)*d),m=r((f-u)/h)!==r((g-u)/h)?d:a(l(f)*d,l(g)*d),p=r((f+i)/h)!==r((g+i)/h)?d*2:a(d-c(f)*d,d-c(g)*d);n.min.set(_,e[1],t<0?-p:0),n.max.set(m,e[3],t<0?0:p)}else n.min.set(e[0],e[1],0),n.max.set(e[2],e[3],0);n.getBoundingSphere(this.boundingSphere)}}applyClipRect(e){let t=this.getAttribute(Ou).count,n=this._chunkedBounds;if(n)for(let i=n.length;i--;){t=n[i].end;let r=n[i].rect;if(r[1]<e.w&&r[3]>e.y&&r[0]<e.z&&r[2]>e.x)break}this.instanceCount=t}}function wo(o,e,t,n){const i=o.getAttribute(e);t?i&&i.array.length===t.length?(i.array.set(t),i.needsUpdate=!0):(o.setAttribute(e,new No(t,n)),delete o._maxInstanceCount,o.dispose()):i&&o.deleteAttribute(e)}const wx=`
uniform vec2 uTroikaSDFTextureSize;
uniform float uTroikaSDFGlyphSize;
uniform vec4 uTroikaTotalBounds;
uniform vec4 uTroikaClipRect;
uniform mat3 uTroikaOrient;
uniform bool uTroikaUseGlyphColors;
uniform float uTroikaDistanceOffset;
uniform float uTroikaBlurRadius;
uniform vec2 uTroikaPositionOffset;
uniform float uTroikaCurveRadius;
attribute vec4 aTroikaGlyphBounds;
attribute float aTroikaGlyphIndex;
attribute vec3 aTroikaGlyphColor;
varying vec2 vTroikaGlyphUV;
varying vec4 vTroikaTextureUVBounds;
varying float vTroikaTextureChannel;
varying vec3 vTroikaGlyphColor;
varying vec2 vTroikaGlyphDimensions;
`,Tx=`
vec4 bounds = aTroikaGlyphBounds;
bounds.xz += uTroikaPositionOffset.x;
bounds.yw -= uTroikaPositionOffset.y;

vec4 outlineBounds = vec4(
  bounds.xy - uTroikaDistanceOffset - uTroikaBlurRadius,
  bounds.zw + uTroikaDistanceOffset + uTroikaBlurRadius
);
vec4 clippedBounds = vec4(
  clamp(outlineBounds.xy, uTroikaClipRect.xy, uTroikaClipRect.zw),
  clamp(outlineBounds.zw, uTroikaClipRect.xy, uTroikaClipRect.zw)
);

vec2 clippedXY = (mix(clippedBounds.xy, clippedBounds.zw, position.xy) - bounds.xy) / (bounds.zw - bounds.xy);

position.xy = mix(bounds.xy, bounds.zw, clippedXY);

uv = (position.xy - uTroikaTotalBounds.xy) / (uTroikaTotalBounds.zw - uTroikaTotalBounds.xy);

float rad = uTroikaCurveRadius;
if (rad != 0.0) {
  float angle = position.x / rad;
  position.xz = vec2(sin(angle) * rad, rad - cos(angle) * rad);
  normal.xz = vec2(sin(angle), cos(angle));
}
  
position = uTroikaOrient * position;
normal = uTroikaOrient * normal;

vTroikaGlyphUV = clippedXY.xy;
vTroikaGlyphDimensions = vec2(bounds[2] - bounds[0], bounds[3] - bounds[1]);


float txCols = uTroikaSDFTextureSize.x / uTroikaSDFGlyphSize;
vec2 txUvPerSquare = uTroikaSDFGlyphSize / uTroikaSDFTextureSize;
vec2 txStartUV = txUvPerSquare * vec2(
  mod(floor(aTroikaGlyphIndex / 4.0), txCols),
  floor(floor(aTroikaGlyphIndex / 4.0) / txCols)
);
vTroikaTextureUVBounds = vec4(txStartUV, vec2(txStartUV) + txUvPerSquare);
vTroikaTextureChannel = mod(aTroikaGlyphIndex, 4.0);
`,Ex=`
uniform sampler2D uTroikaSDFTexture;
uniform vec2 uTroikaSDFTextureSize;
uniform float uTroikaSDFGlyphSize;
uniform float uTroikaSDFExponent;
uniform float uTroikaDistanceOffset;
uniform float uTroikaFillOpacity;
uniform float uTroikaOutlineOpacity;
uniform float uTroikaBlurRadius;
uniform vec3 uTroikaStrokeColor;
uniform float uTroikaStrokeWidth;
uniform float uTroikaStrokeOpacity;
uniform bool uTroikaSDFDebug;
varying vec2 vTroikaGlyphUV;
varying vec4 vTroikaTextureUVBounds;
varying float vTroikaTextureChannel;
varying vec2 vTroikaGlyphDimensions;

float troikaSdfValueToSignedDistance(float alpha) {
  // Inverse of exponential encoding in webgl-sdf-generator
  
  float maxDimension = max(vTroikaGlyphDimensions.x, vTroikaGlyphDimensions.y);
  float absDist = (1.0 - pow(2.0 * (alpha > 0.5 ? 1.0 - alpha : alpha), 1.0 / uTroikaSDFExponent)) * maxDimension;
  float signedDist = absDist * (alpha > 0.5 ? -1.0 : 1.0);
  return signedDist;
}

float troikaGlyphUvToSdfValue(vec2 glyphUV) {
  vec2 textureUV = mix(vTroikaTextureUVBounds.xy, vTroikaTextureUVBounds.zw, glyphUV);
  vec4 rgba = texture2D(uTroikaSDFTexture, textureUV);
  float ch = floor(vTroikaTextureChannel + 0.5); //NOTE: can't use round() in WebGL1
  return ch == 0.0 ? rgba.r : ch == 1.0 ? rgba.g : ch == 2.0 ? rgba.b : rgba.a;
}

float troikaGlyphUvToDistance(vec2 uv) {
  return troikaSdfValueToSignedDistance(troikaGlyphUvToSdfValue(uv));
}

float troikaGetAADist() {
  
  #if defined(GL_OES_standard_derivatives) || __VERSION__ >= 300
  return length(fwidth(vTroikaGlyphUV * vTroikaGlyphDimensions)) * 0.5;
  #else
  return vTroikaGlyphDimensions.x / 64.0;
  #endif
}

float troikaGetFragDistValue() {
  vec2 clampedGlyphUV = clamp(vTroikaGlyphUV, 0.5 / uTroikaSDFGlyphSize, 1.0 - 0.5 / uTroikaSDFGlyphSize);
  float distance = troikaGlyphUvToDistance(clampedGlyphUV);
 
  // Extrapolate distance when outside bounds:
  distance += clampedGlyphUV == vTroikaGlyphUV ? 0.0 : 
    length((vTroikaGlyphUV - clampedGlyphUV) * vTroikaGlyphDimensions);

  

  return distance;
}

float troikaGetEdgeAlpha(float distance, float distanceOffset, float aaDist) {
  #if defined(IS_DEPTH_MATERIAL) || defined(IS_DISTANCE_MATERIAL)
  float alpha = step(-distanceOffset, -distance);
  #else

  float alpha = smoothstep(
    distanceOffset + aaDist,
    distanceOffset - aaDist,
    distance
  );
  #endif

  return alpha;
}
`,Ax=`
float aaDist = troikaGetAADist();
float fragDistance = troikaGetFragDistValue();
float edgeAlpha = uTroikaSDFDebug ?
  troikaGlyphUvToSdfValue(vTroikaGlyphUV) :
  troikaGetEdgeAlpha(fragDistance, uTroikaDistanceOffset, max(aaDist, uTroikaBlurRadius));

#if !defined(IS_DEPTH_MATERIAL) && !defined(IS_DISTANCE_MATERIAL)
vec4 fillRGBA = gl_FragColor;
fillRGBA.a *= uTroikaFillOpacity;
vec4 strokeRGBA = uTroikaStrokeWidth == 0.0 ? fillRGBA : vec4(uTroikaStrokeColor, uTroikaStrokeOpacity);
if (fillRGBA.a == 0.0) fillRGBA.rgb = strokeRGBA.rgb;
gl_FragColor = mix(fillRGBA, strokeRGBA, smoothstep(
  -uTroikaStrokeWidth - aaDist,
  -uTroikaStrokeWidth + aaDist,
  fragDistance
));
gl_FragColor.a *= edgeAlpha;
#endif

if (edgeAlpha == 0.0) {
  discard;
}
`;function Cx(o){const e=jo(o,{chained:!0,extensions:{derivatives:!0},uniforms:{uTroikaSDFTexture:{value:null},uTroikaSDFTextureSize:{value:new Fe},uTroikaSDFGlyphSize:{value:0},uTroikaSDFExponent:{value:0},uTroikaTotalBounds:{value:new ht(0,0,0,0)},uTroikaClipRect:{value:new ht(0,0,0,0)},uTroikaDistanceOffset:{value:0},uTroikaOutlineOpacity:{value:0},uTroikaFillOpacity:{value:1},uTroikaPositionOffset:{value:new Fe},uTroikaCurveRadius:{value:0},uTroikaBlurRadius:{value:0},uTroikaStrokeWidth:{value:0},uTroikaStrokeColor:{value:new ze},uTroikaStrokeOpacity:{value:1},uTroikaOrient:{value:new Ze},uTroikaUseGlyphColors:{value:!0},uTroikaSDFDebug:{value:!1}},vertexDefs:wx,vertexTransform:Tx,fragmentDefs:Ex,fragmentColorTransform:Ax,customRewriter({vertexShader:t,fragmentShader:n}){let i=/\buniform\s+vec3\s+diffuse\b/;return i.test(n)&&(n=n.replace(i,"varying vec3 vTroikaGlyphColor").replace(/\bdiffuse\b/g,"vTroikaGlyphColor"),i.test(t)||(t=t.replace(Xh,`uniform vec3 diffuse;
$&
vTroikaGlyphColor = uTroikaUseGlyphColors ? aTroikaGlyphColor / 255.0 : diffuse;
`))),{vertexShader:t,fragmentShader:n}}});return e.transparent=!0,Object.defineProperties(e,{isTroikaTextMaterial:{value:!0},shadowSide:{get(){return this.side},set(){}}}),e}const dl=new ni({color:16777215,side:sn,transparent:!0}),Nu=8421504,Fu=new We,ca=new F,To=new F,Jr=[],Lx=new F,Eo="+x+y";function ku(o){return Array.isArray(o)?o[0]:o}let Kh=()=>{const o=new Ft(new wr(1,1),dl);return Kh=()=>o,o},Zh=()=>{const o=new Ft(new wr(1,1,32,1),dl);return Zh=()=>o,o};const Px={type:"syncstart"},Rx={type:"synccomplete"},Qh=["font","fontSize","letterSpacing","lineHeight","maxWidth","overflowWrap","text","direction","textAlign","textIndent","whiteSpace","anchorX","anchorY","colorRanges","sdfGlyphSize"],Dx=Qh.concat("material","color","depthOffset","clipRect","curveRadius","orientation","glyphGeometryDetail");class va extends Ft{constructor(){const e=new Sx;super(e,null),this.text="",this.anchorX=0,this.anchorY=0,this.curveRadius=0,this.direction="auto",this.font=null,this.fontSize=.1,this.letterSpacing=0,this.lineHeight="normal",this.maxWidth=1/0,this.overflowWrap="normal",this.textAlign="left",this.textIndent=0,this.whiteSpace="normal",this.material=null,this.color=null,this.colorRanges=null,this.outlineWidth=0,this.outlineColor=0,this.outlineOpacity=1,this.outlineBlur=0,this.outlineOffsetX=0,this.outlineOffsetY=0,this.strokeWidth=0,this.strokeColor=Nu,this.strokeOpacity=1,this.fillOpacity=1,this.depthOffset=0,this.clipRect=null,this.orientation=Eo,this.glyphGeometryDetail=1,this.sdfGlyphSize=null,this.gpuAccelerateSDF=!0,this.debugSDF=!1}sync(e){this._needsSync&&(this._needsSync=!1,this._isSyncing?(this._queuedSyncs||(this._queuedSyncs=[])).push(e):(this._isSyncing=!0,this.dispatchEvent(Px),px({text:this.text,font:this.font,fontSize:this.fontSize||.1,letterSpacing:this.letterSpacing||0,lineHeight:this.lineHeight||"normal",maxWidth:this.maxWidth,direction:this.direction||"auto",textAlign:this.textAlign,textIndent:this.textIndent,whiteSpace:this.whiteSpace,overflowWrap:this.overflowWrap,anchorX:this.anchorX,anchorY:this.anchorY,colorRanges:this.colorRanges,includeCaretPositions:!0,sdfGlyphSize:this.sdfGlyphSize,gpuAccelerateSDF:this.gpuAccelerateSDF},t=>{this._isSyncing=!1,this._textRenderInfo=t,this.geometry.updateGlyphs(t.glyphBounds,t.glyphAtlasIndices,t.blockBounds,t.chunkedBounds,t.glyphColors);const n=this._queuedSyncs;n&&(this._queuedSyncs=null,this._needsSync=!0,this.sync(()=>{n.forEach(i=>i&&i())})),this.dispatchEvent(Rx),e&&e()})))}onBeforeRender(e,t,n,i,r,s){this.sync(),r.isTroikaTextMaterial&&this._prepareForRender(r),r._hadOwnSide=r.hasOwnProperty("side"),this.geometry.setSide(r._actualSide=r.side),r.side=An}onAfterRender(e,t,n,i,r,s){r._hadOwnSide?r.side=r._actualSide:delete r.side}dispose(){this.geometry.dispose()}get textRenderInfo(){return this._textRenderInfo||null}get material(){let e=this._derivedMaterial;const t=this._baseMaterial||this._defaultMaterial||(this._defaultMaterial=dl.clone());if((!e||e.baseMaterial!==t)&&(e=this._derivedMaterial=Cx(t),t.addEventListener("dispose",function n(){t.removeEventListener("dispose",n),e.dispose()})),this.outlineWidth||this.outlineBlur||this.outlineOffsetX||this.outlineOffsetY){let n=e._outlineMtl;return n||(n=e._outlineMtl=Object.create(e,{id:{value:e.id+.1}}),n.isTextOutlineMaterial=!0,n.depthWrite=!1,n.map=null,e.addEventListener("dispose",function i(){e.removeEventListener("dispose",i),n.dispose()})),[n,e]}else return e}set material(e){e&&e.isTroikaTextMaterial?(this._derivedMaterial=e,this._baseMaterial=e.baseMaterial):this._baseMaterial=e}get glyphGeometryDetail(){return this.geometry.detail}set glyphGeometryDetail(e){this.geometry.detail=e}get curveRadius(){return this.geometry.curveRadius}set curveRadius(e){this.geometry.curveRadius=e}get customDepthMaterial(){return ku(this.material).getDepthMaterial()}get customDistanceMaterial(){return ku(this.material).getDistanceMaterial()}_prepareForRender(e){const t=e.isTextOutlineMaterial,n=e.uniforms,i=this.textRenderInfo;if(i){const{sdfTexture:a,blockBounds:l}=i;n.uTroikaSDFTexture.value=a,n.uTroikaSDFTextureSize.value.set(a.image.width,a.image.height),n.uTroikaSDFGlyphSize.value=i.sdfGlyphSize,n.uTroikaSDFExponent.value=i.sdfExponent,n.uTroikaTotalBounds.value.fromArray(l),n.uTroikaUseGlyphColors.value=!t&&!!i.glyphColors;let c=0,u=0,h=0,d,f,g,_=0,m=0;if(t){let{outlineWidth:v,outlineOffsetX:x,outlineOffsetY:M,outlineBlur:y,outlineOpacity:T}=this;c=this._parsePercent(v)||0,u=Math.max(0,this._parsePercent(y)||0),d=T,_=this._parsePercent(x)||0,m=this._parsePercent(M)||0}else h=Math.max(0,this._parsePercent(this.strokeWidth)||0),h&&(g=this.strokeColor,n.uTroikaStrokeColor.value.set(g??Nu),f=this.strokeOpacity,f==null&&(f=1)),d=this.fillOpacity;n.uTroikaDistanceOffset.value=c,n.uTroikaPositionOffset.value.set(_,m),n.uTroikaBlurRadius.value=u,n.uTroikaStrokeWidth.value=h,n.uTroikaStrokeOpacity.value=f,n.uTroikaFillOpacity.value=d??1,n.uTroikaCurveRadius.value=this.curveRadius||0;let p=this.clipRect;if(p&&Array.isArray(p)&&p.length===4)n.uTroikaClipRect.value.fromArray(p);else{const v=(this.fontSize||.1)*100;n.uTroikaClipRect.value.set(l[0]-v,l[1]-v,l[2]+v,l[3]+v)}this.geometry.applyClipRect(n.uTroikaClipRect.value)}n.uTroikaSDFDebug.value=!!this.debugSDF,e.polygonOffset=!!this.depthOffset,e.polygonOffsetFactor=e.polygonOffsetUnits=this.depthOffset||0;const r=t?this.outlineColor||0:this.color;if(r==null)delete e.color;else{const a=e.hasOwnProperty("color")?e.color:e.color=new ze;(r!==a._input||typeof r=="object")&&a.set(a._input=r)}let s=this.orientation||Eo;if(s!==e._orientation){let a=n.uTroikaOrient.value;s=s.replace(/[^-+xyz]/g,"");let l=s!==Eo&&s.match(/^([-+])([xyz])([-+])([xyz])$/);if(l){let[,c,u,h,d]=l;ca.set(0,0,0)[u]=c==="-"?1:-1,To.set(0,0,0)[d]=h==="-"?-1:1,Fu.lookAt(Lx,ca.cross(To),To),a.setFromMatrix4(Fu)}else a.identity();e._orientation=s}}_parsePercent(e){if(typeof e=="string"){let t=e.match(/^(-?[\d.]+)%$/),n=t?parseFloat(t[1]):NaN;e=(isNaN(n)?0:n/100)*this.fontSize}return e}localPositionToTextCoords(e,t=new Fe){t.copy(e);const n=this.curveRadius;return n&&(t.x=Math.atan2(e.x,Math.abs(n)-Math.abs(e.z))*Math.abs(n)),t}worldPositionToTextCoords(e,t=new Fe){return ca.copy(e),this.localPositionToTextCoords(this.worldToLocal(ca),t)}raycast(e,t){const{textRenderInfo:n,curveRadius:i}=this;if(n){const r=n.blockBounds,s=i?Zh():Kh(),a=s.geometry,{position:l,uv:c}=a.attributes;for(let u=0;u<c.count;u++){let h=r[0]+c.getX(u)*(r[2]-r[0]);const d=r[1]+c.getY(u)*(r[3]-r[1]);let f=0;i&&(f=i-Math.cos(h/i)*i,h=Math.sin(h/i)*i),l.setXYZ(u,h,d,f)}a.boundingSphere=this.geometry.boundingSphere,a.boundingBox=this.geometry.boundingBox,s.matrixWorld=this.matrixWorld,s.material.side=this.material.side,Jr.length=0,s.raycast(e,Jr);for(let u=0;u<Jr.length;u++)Jr[u].object=this,t.push(Jr[u])}}copy(e){const t=this.geometry;return super.copy(e),this.geometry=t,Dx.forEach(n=>{this[n]=e[n]}),this}clone(){return new this.constructor().copy(this)}}Qh.forEach(o=>{const e="_private_"+o;Object.defineProperty(va.prototype,o,{get(){return this[e]},set(t){t!==this[e]&&(this[e]=t,this._needsSync=!0)}})});class Wn extends ot{}ue(Wn,"dependencies",[]),ue(Wn,"typeID",crypto.randomUUID());class Qe extends ot{static getDefaults(e){return{group:e||new xn}}init(){if(!this.dependendQueries)return;const e=this.dependendQueries[0].entities[0];this.data.group.add(e.getComponent(Wn).data.mesh)}}ue(Qe,"dependencies",[Ne("self",Wn)]),ue(Qe,"typeID",crypto.randomUUID());class dn extends ot{static getDefaults(e,t=0){return{group:e||new xn,initRot:t}}init(){if(!this.dependendQueries)return;const e=this.dependendQueries[1].entities[0].getComponent(Ct).data.scene;for(let t=0;t<this.dependendQueries[0].entities.length;t++){const n=this.dependendQueries[0].entities[t],i=n.getComponent(Qe).data.group;this.data.group.add(i),this.data.group.rotateY(this.data.initRot);const r=n.getComponent(Cn);r&&r.data.parent||e.add(this.data.group)}}}ue(dn,"dependencies",[Ne("self",Qe),Ne("exist",Ct)]),ue(dn,"typeID",crypto.randomUUID());class Bu extends ot{init(){if(!this.dependendQueries)return;this.dependendQueries[0].entities[0].getComponent(Qe).data.group.add(this.data.mesh)}}ue(Bu,"dependencies",[Ne("self",Qe)]),ue(Bu,"typeID",crypto.randomUUID());class xa extends ot{static getDefaults(e,t,n){return{light:new kh(e,t,n)}}init(){if(!this.dependendQueries)return;const e=this.dependendQueries[0].entities[0].getComponent(Qe);this.data.light.position.copy(e.data.group.position),e.data.group.add(this.data.light)}}ue(xa,"dependencies",[Ne("self",Qe)]),ue(xa,"typeID",crypto.randomUUID());const Ix=new _s({color:"#ffffff",transparent:!0,opacity:.45}),Mi=new Xt;class nn extends ot{static getDefaults(e,t=Re.getInstance().store.LIGHTYEAR){const n=[];t=t*Re.getInstance().state.DISTANCE_SCALE;for(let i=0;i<=360;i++)n.push(new F(t*Math.sin(i*Vo),0,t*Math.cos(i*Vo)));return Mi.setFromPoints(n),Mi.scale(e,1,e),{line:new Ta(Mi.clone(),Ix),radius:e*t}}init(){if(!this.dependendQueries)return;this.dependendQueries[0].entities[0].getComponent(Ct).data.scene.add(this.data.line)}}ue(nn,"dependencies",[Ne("exist",Ct)]),ue(nn,"typeID",crypto.randomUUID());const Ux=new _s({color:"#ffffff",transparent:!0,opacity:.4}),Ox=new _s({color:"#ffffff",transparent:!0,opacity:.15});class ct extends ot{static getDefaults(e=!1,t=30){const n=new va;n.color=16777215,n.fontSize=t,n.font="./Open_Sans/OpenSans-Light.ttf";const i=new va;return i.font="./Open_Sans/OpenSans-Light.ttf",i.color=16777215,i.fontSize=t*.5,{title:n,texts:i,up:e}}init(){if(!this.dependendQueries)return;const e=this.dependendQueries[0].entities[0].getComponent(kt);if(!e.data.texts)return;this.data.title.text=e.data.name,this.data.title.name=`${e.data.name}_text`,this.data.texts.text=e.data.texts.join(`
`),this.data.texts.fillOpacity=.4,this.dependendQueries[0].entities[0].getComponent(Qe).data.group.getWorldPosition(tt.WORLD_POS),this.data.title.position.copy(tt.WORLD_POS),this.data.texts.position.copy(tt.WORLD_POS);const n=this.data.title.fontSize;this.data.title.position.x+=n,this.data.title.position.y+=n,this.data.title.rotateY(Math.PI*-.1),this.data.up?this.data.texts.position.y+=n*e.data.texts.length*(e.data.texts.length==1?2:1):this.data.texts.position.y+=n*-1;const i=this.dependendQueries[1].entities[0].getComponent(Ct).data.scene;i.add(this.data.title),i.add(this.data.texts)}}ue(ct,"dependencies",[Ne("self",Qe),Ne("exist",Ct)]),ue(ct,"typeID",crypto.randomUUID());class wn extends ot{static getDefaults(e,t=1){const n=new va;return n.text=e,n.fontSize=t,n.position.x-=t*1.5,n.position.y+=t*1.1,n.color=16777215,n.font="./Open_Sans/OpenSans-Light.ttf",{title:n}}init(){if(!this.dependendQueries)return;const e=this.dependendQueries[0].entities[0].getComponent(nn);this.data.title.position.x-=e.data.radius,e.data.line.add(this.data.title)}}ue(wn,"dependencies",[Ne("self",nn)]),ue(wn,"typeID",crypto.randomUUID());class Yo extends ot{init(){if(!this.dependendQueries)return;const e=[];for(const n of this.dependendQueries[1].entities){const i=n.getComponent(Qe).data.group.getWorldPosition(tt.WORLD_POS).clone();if(i.y===0)continue;const r=i.clone();r.y=0,e.push(i,r)}Mi.setFromPoints(e),this.data.line=new sl(Mi.clone(),Ux),this.dependendQueries[0].entities[0].getComponent(Ct).data.scene.add(this.data.line)}}ue(Yo,"dependencies",[Ne("exist",Ct),Ne("exist",Qe)]),ue(Yo,"typeID",crypto.randomUUID());const as=class as extends ot{init(){if(!this.dependendQueries)return;if(this.data.pairs.length%2!==0){console.warn(`${as.name} was called with an uneven amount of pair entries. Skipping`);return}const e={};this.dependendQueries[1].entities.forEach(i=>{const r=i.getComponent(kt);this.data.pairs.includes(r.data.name)&&!(r.data.name in e)&&(e[r.data.name]=i)});const t=[];for(let i=0;i<this.data.pairs.length;i+=2){const[r,s]=[this.data.pairs[i],this.data.pairs[i+1]],[a,l]=[e[r],e[s]],[c,u]=[a.getComponent(Qe).data.group,l.getComponent(Qe).data.group],[h,d]=[c.getWorldPosition(tt.WORLD_POS).clone(),u.getWorldPosition(tt.WORLD_POS).clone()];t.push(h,d)}Mi.setFromPoints(t),this.data.line=new sl(Mi.clone(),Ox),this.dependendQueries[0].entities[0].getComponent(Ct).data.scene.add(this.data.line)}};ue(as,"dependencies",[Ne("exist",Ct),Ne("exist",kt)]),ue(as,"typeID",crypto.randomUUID());let Ko=as;class vi extends ot{async init(e){if(!this.dependendQueries)return;const t=this.dependendQueries[0].entities[0],n=t.getComponent(Qe),i=t.getComponent(kt),r=document.createElement("div"),s=document.createElement("div"),a=document.createElement("div");r.appendChild(s),r.appendChild(a),r.className="markerContainer",s.className="markerDiamond",a.className="markerText",a.textContent=i.data.name.toUpperCase();let l=0;a.onclick=h=>{if(h.detail>1){clearTimeout(l);return}h.stopImmediatePropagation(),h.preventDefault(),l=setTimeout(()=>{e.uiManager.infoPanel.setTarget(t),e.uiManager.infoPanel.visible=!0},150)};const c=async h=>{h.stopImmediatePropagation(),h.preventDefault(),Re.getInstance().store.focusTarget=i.data.name.toLowerCase();const d=e.sysManager.getSystem((await _a(()=>Promise.resolve().then(()=>kx),void 0,import.meta.url)).CameraFocusSystem);d&&(d.enabled=!0)};r.ondblclick=c;const u=new nv(r);if(n.data.group.add(u),this.data={mesh:u,containerDiv:r,diamondDiv:s,txtDiv:a},t.getComponent(Cr)){const h=t.getComponent((await _a(()=>Promise.resolve().then(()=>Nx),void 0,import.meta.url)).RadiusComponent).data.drawRadius;u.position.z-=h}}}ue(vi,"dependencies",[Ne("self",Qe),Ne("self",kt)]),ue(vi,"typeID",crypto.randomUUID());class Cn extends ot{static getDefaults(e=!1){return{dyn:e}}init(e){var a;if(!this.dependendQueries)return;const t=this.dependendQueries[0].entities[0],n=(a=t.getComponent(kt).data.parent)==null?void 0:a.toLowerCase(),i=e.ecManager.entities.find(l=>{const c=l.getComponent(kt);return c?c.data.name.toLowerCase()===n:!1});if(!i){console.warn("No parent was found.");return}if(this.data.parent=i,this.data.dyn)return;const r=t.getComponent(dn).data.group;i.getComponent(Qe).data.group.add(r)}}ue(Cn,"dependencies",[Ne("self",kt),Ne("self",Qe),Ne("self",dn)]),ue(Cn,"typeID",crypto.randomUUID());class zu extends ot{init(){if(!this.dependendQueries)return;const e=this.dependendQueries[0].entities[0],t=e.getComponent(Cn).data.parent.getComponent(Qe).data.group,n=e.getComponent(Ai);t.getWorldPosition(tt.WORLD_POS),n.data.basePos.value=tt.WORLD_POS.clone()}}ue(zu,"dependencies",[Ne("self",Cr),Ne("self",Cn),Ne("self",Ai)]),ue(zu,"typeID",crypto.randomUUID());class br extends ot{static getDefaults(e,t=!1){e=t?e*-1:e;const n=e*60*60,i=2*Math.PI/n;return{period:e,vel:i}}}ue(br,"typeID",crypto.randomUUID());class Sr extends ot{static getDefaults(e,t=!1){e=t?e*-1:e;const n=e*60*60,i=2*Math.PI/n;return{period:e,vel:i}}}ue(Sr,"typeID",crypto.randomUUID());class si extends ot{static getDefaults(e,t=!0){typeof e=="number"&&(e=[e]);const[n,i]=e.length===1?[e[0],void 0]:e,r=n*Re.getInstance().state.DISTANCE_SCALE,s=i&&i*Re.getInstance().state.DISTANCE_SCALE;return{x:n,y:i,drawX:r,drawY:s,shouldInit:t}}init(){if(!(!this.dependendQueries||!this.data.shouldInit))for(const e of this.dependendQueries[0].entities){const t=e.getComponent(Qe).data.group;t.position.x+=this.data.drawX,this.data.drawY&&(t.position.y+=this.data.drawY)}}}ue(si,"dependencies",[Ne("self",Qe)]),ue(si,"typeID",crypto.randomUUID());class ps extends ot{static getDefaults(e,t=!0){const n=e*Vo;return{deg:e,rad:n,shouldInit:t}}init(){if(!(!this.dependendQueries||!this.data.shouldInit))for(const e of this.dependendQueries[0].entities){const t=e.getComponent(dn).data.group;t.rotation.x=this.data.rad}}}ue(ps,"dependencies",[Ne("self",dn)]),ue(ps,"typeID",crypto.randomUUID());class cn extends ot{static getDefaults(e){return{radius:e,drawRadius:e*Re.getInstance().state.SIZE_SCALE}}init(){if(!this.dependendQueries)return;this.dependendQueries[0].entities[0].getComponent(Qe).data.group.scale.multiplyScalar(this.data.drawRadius)}}ue(cn,"dependencies",[Ne("self",Qe)]),ue(cn,"typeID",crypto.randomUUID());class ya extends ot{init(){if(!this.dependendQueries)return;const e=this.dependendQueries[0].entities[0],t=e.getComponent(dn).data.group,n=e.getComponent(si).data.drawX;this.data.mesh.scale.multiplyScalar(n),t.add(this.data.mesh)}}ue(ya,"dependencies",[Ne("self",Qe),Ne("self",dn),Ne("self",si)]),ue(ya,"typeID",crypto.randomUUID());const Nx=Object.freeze(Object.defineProperty({__proto__:null,AxisRotComponent:br,DistanceToParentComponent:si,OrbitLineComponent:ya,OrbitRotComponent:Sr,RadiusComponent:cn,TiltComponent:ps},Symbol.toStringTag,{value:"Module"}));class ss extends ot{static getDefaults(e,t,n){let i;!t||typeof t=="string"?i=t?new F(...t.split(",").map(s=>parseFloat(s))):new F(0,0,0):i=t;let r;return!n||typeof n=="string"?r=n?new F(...n.split(",").map(s=>parseFloat(s))):new F(0,0,0):r=n,{mass:e,vel:i,acc:r,r:Math.sqrt(e)*2}}async init(){if(!this.dependendQueries)return;const e=this.dependendQueries[0].entities[0].getComponent(Qe);if(!e)return;const t=this.dependendQueries[0].entities[0].getComponent(cn);this.data.pos=e.data.group.position,this.data.r=t.data.drawRadius}}ue(ss,"dependencies",[Ne("self",Qe)]),ue(ss,"typeID",crypto.randomUUID());class Yt{constructor(e){ue(this,"world");ue(this,"queries");ue(this,"enabled");ue(this,"executeTime");this.world=e,this.enabled=!0,this.executeTime=-1,this.queries=this.world.queryManager.getSystemQuery(this)}requery(){this.queries=this.world.queryManager.getSystemQuery(this)}static getName(){return this.constructor.name}}ue(Yt,"queries"),ue(Yt,"typeID");class Ss extends Yt{constructor(e){super(e),this.enabled=!1}execute(){var i,r;const e=Re.getInstance().store.focusTarget.toLowerCase();if(console.log(e),!this.queries||!e)return;const t=this.queries[1].entities[0].getComponent(Bt),n=this.queries[2].entities[0].getComponent(hn);Re.getInstance().state.camPos&&t.data.active.position.copy(Re.getInstance().state.camPos);for(const s of this.queries[0].entities)if(e===s.getComponent(kt).data.name.toLowerCase()){s.getComponent(Qe).data.group.getWorldPosition(tt.WORLD_POS);const l=s.getComponent(cn).data.drawRadius*2;let c=14;s.getComponent(Cr)&&(tt.WORLD_POS.z-=l,c=4),t.data.active.position.copy(tt.WORLD_POS).x-=l*c,(i=t.data.freeCtrl)==null||i.target.copy(tt.WORLD_POS.clone()),(r=t.data.freeCtrl)==null||r.update(),n.data.target=[s,l*c]}this.enabled=!1}}ue(Ss,"queries",[[Ne("exist",Qe),Ne("exist",kt),Ne("exist",cn)],[Ne("exist",Bt)],[Ne("exist",hn)]]);class ms extends Yt{constructor(t){super(t);ue(this,"forceSwtich",!1);this.enabled=!1}execute(){if(!this.queries)return;const t=this.queries[1].entities[0].getComponent(Bt).data.active,n=this.queries[2].entities[0].getComponent(hn).data.cam,i=Re.getInstance(),r=i.store.raycaster;r.setFromCamera(Re.getInstance().store.raypointer,i.state.followCam?n:t);let s;for(const a of this.queries[0].entities){const l=a.getComponent(Wn).data.mesh;let c=r.intersectObject(l);if(c.length===0){const u=a.getComponent(ct);u&&(c=r.intersectObjects([u.data.title,u.data.texts]));const h=a.getComponent(ya);h&&(c=r.intersectObject(h.data.mesh))}if(c.length>0){const u=c[0].distance;(!s||u<s[0])&&(s=[u,a])}}console.log(s),s&&(Fx(s[1],t,this.world,this.forceSwtich),this.forceSwtich=!1),this.enabled=!1}}ue(ms,"queries",[[Ne("exist",Wn),Ne("exist",kt)],[Ne("exist",Bt)],[Ne("exist",hn)]]);function Fx(o,e,t,n=!1){const i=o.getComponent(kt),r=o.getComponent(cn),s=o.getComponent(Qe);if(n){t.lvlManager.openLevel(i.data.name);return}if(r&&t.lvlManager.currentLvl===t.lvlManager.levelsNames[0]&&(s.data.group.getWorldPosition(tt.WORLD_POS),e.position.distanceTo(tt.WORLD_POS)<r.data.drawRadius*40)){t.lvlManager.openLevel(i.data.name);return}Re.getInstance().store.focusTarget=i.data.name;const a=t.sysManager.getSystem(Ss);a&&(a.enabled=!0)}class Aa extends Yt{constructor(e){super(e),this.enabled=!1}calculateIdealLookat(e){const t=new F(0,0,0);return e&&(t.applyQuaternion(e.data.group.quaternion),t.add(tt.WORLD_POS)),t}execute(e){var u,h;if(!this.queries)return;const t=this.queries[0].entities[0].getComponent(hn),n=Re.getInstance();if(!t.data.target){const d=n.state.focusTarget,f=this.world.ecManager.getEntityByBaseName(d);f?t.data.target=[f,0]:this.world.ecManager.entities.find(g=>{g.getComponent(Ms)&&(t.data.target=[g,0])})}const i=(u=t.data.target)==null?void 0:u[0].getComponent(Qe),r=((h=t.data.target)==null?void 0:h[1])*5;i.data.group.getWorldPosition(tt.WORLD_POS);const s=this.calculateIdealLookat(i),a=new F(0,0,-r*2),l=1-Math.pow(.001,e),c=t.data.camPivot;if(n.store.rotateCamPivotDepth!=0&&(a.z+=n.store.rotateCamPivotDepth),n.store.rotateCamPivotY!=0){const d=wu(n.store.rotateCamPivotY,0,.25*l);c.rotateY(d),n.store.rotateCamPivotY=Math.abs(d)<1e-8?0:d}if(n.store.rotateCamPivotX!=0){const d=wu(n.store.rotateCamPivotX,0,.25*l);c.rotateX(d),n.store.rotateCamPivotX=Math.abs(d)<1e-8?0:d}c.position.copy(tt.WORLD_POS),t.data.currentPosition.lerp(a,l),t.data.currentLookat.lerp(s,l),t.data.cam.position.copy(t.data.currentPosition),t.data.cam.lookAt(t.data.currentLookat)}}ue(Aa,"queries",[[Ne("exist",hn)]]);const kx=Object.freeze(Object.defineProperty({__proto__:null,CameraFocusSystem:Ss,FollowCameraSystem:Aa,RaycasterSystem:ms},Symbol.toStringTag,{value:"Module"})),Bx=1e3/60;class Jh extends Yt{execute(e){var t;if(e>Bx){const[n,i,r,s]=[this.queries[0].entities[0],this.queries[1].entities[0],this.queries[2].entities[0],this.queries[3].entities[0]],a=n.getComponent(Hn),l=i.getComponent(Ct),c=r.getComponent(Bt),u=Re.getInstance(),h=a.data.renderer3d,d=a.data.renderer2d;let f;const g=this.world.sysManager.getSystem(Aa);if(u.state.followCam?(f=s.getComponent(hn).data.cam,g&&!g.enabled&&(g.enabled=!0,c.data.freeCtrl&&(c.data.freeCtrl.enabled=!1))):(f=c.data.active,g&&g.enabled&&(g.enabled=!1,c.data.freeCtrl&&(c.data.freeCtrl.enabled=!0))),zx(h,d)){const _=h.domElement;f.aspect=_.clientWidth/_.clientHeight,f.updateProjectionMatrix()}(t=c.data.freeCtrl)==null||t.update(),a.data.renderer3d.clear(),h.render(l.data.scene,f),d.render(l.data.scene,f)}}}ue(Jh,"queries",[[Ne("exist",Hn)],[Ne("exist",Ct)],[Ne("exist",Bt)],[Ne("exist",hn)]]);function zx(o,e){const t=o.domElement,n=t.clientWidth,i=t.clientHeight,r=t.width!==n||t.height!==i;return r&&(o.setSize(n,i,!1),e.setSize(n,i)),r}class $h extends Yt{execute(e){for(const t of this.queries[0].entities){const n=t.getComponent(br),i=t.getComponent(Wn),r=e*n.data.vel*Re.getInstance().state.ROT_SCALE;i.data.mesh.rotation.y+=r}}}ue($h,"queries",[[Ne("exist",br),Ne("exist",Wn)]]);class Gx extends Yt{execute(e){if(this.queries)for(const t of this.queries[0].entities){const n=t.getComponent(Sr),i=t.getComponent(dn),r=e*n.data.vel*Re.getInstance().state.ORB_SCALE;i.data.group.rotation.y+=r}}}ue(Gx,"queries",[[Ne("exist",Sr),Ne("exist",dn)]]);class ed extends Yt{execute(e,t){for(const n of this.queries[0].entities){const i=n.getComponent(Ai);i.data.time.value=t*1e-4}}}ue(ed,"queries",[[Ne("exist",Ai),Ne("exist",Ms)]]);class Vx extends Yt{execute(){if(!this.queries)return;const e=this.queries[1].entities[0].getComponent(Bt).data.active;for(const t of this.queries[0].entities){const n=t.getComponent(Cr);t.getComponent(vi).data.mesh.getWorldPosition(tt.WORLD_POS);const r=tt.WORLD_POS.distanceTo(e.position),s=n?t.getComponent(Cn).data.parent.getComponent(cn).data.drawRadius:t.getComponent(cn).data.drawRadius,a=t.getComponent(vi).data.diamondDiv,l=t.getComponent(vi).data.containerDiv;if(!t.getComponent(Gh)&&!t.getComponent(Ms)){t.getComponent(Cn).data.parent.getComponent(Qe).data.group.getWorldPosition(tt.WORLD_POS);const c=t.getComponent(si).data.drawX,u=e.position.distanceTo(tt.WORLD_POS),h=c*100;l.style.opacity=u<h?`${Ho(r,h,0,0,1)}`:"0",l.style.visibility=l.style.opacity==="0"?"hidden":"visible"}a.style.opacity=r<s*30?`${Ho(r,s*2,s*30,0,1)}`:"1"}}}ue(Vx,"queries",[[Ne("exist",vi),Ne("exist",Qe),Ne("exist",cn)],[Ne("exist",Bt)]]);const Hx=new F(0,0,0),Gu=60*Re.getInstance().store.LIGHTYEAR*1e-11,Vu=35*Re.getInstance().store.LIGHTYEAR*1e-11;class td extends Yt{execute(){if(!this.queries)return;let t=this.queries[0].entities[0].getComponent(Bt).data.active.position.distanceTo(Hx);t=Vh(t,Vu,Gu),t=Ho(t,Vu,Gu,0,1);const n=document.getElementById("cosmicMapTItle");n&&Wx(n,t)}}ue(td,"queries",[[Ne("exist",Bt)]]);function Wx(o,e){o.style.opacity=e.toString(),o.style.visibility=e<=0?"hidden":"visible"}class nd extends Yt{execute(){if(!this.queries||!this.world.uiManager.infoPanel.visible)return;const e=this.queries[0].entities[0].getComponent(Bt).data.active;this.world.uiManager.infoPanel.coords=e.position}}ue(nd,"queries",[[Ne("exist",Bt)]]);const Xx=6674e8,jx=1,gi=class gi extends Yt{execute(e){if(!this.queries)return;if(this.queries[0].entities.length!=2)throw new Error(`Binary System was called with ${this.queries[0].entities.length} items. I think you'll notice the error.`);const[t,n]=this.queries[0].entities,[i,r]=[t.getComponent(ss).data,n.getComponent(ss).data];for(let s=0;s<jx;s++)gi.attract(i,r,e),gi.attract(r,i,e),gi.update(i),gi.update(r)}static attract(e,t,n){if(!e.pos||!t.pos)return;let i=e.pos.clone().sub(t.pos);const r=i.lengthSq();let s=Xx*(e.mass*t.mass)/r;s=Vh(s,0,1),i.setLength(s),i=i.clone().divideScalar(t.mass).multiplyScalar(n),t.acc.add(i)}static update(e){e.pos&&(e.vel.add(e.acc),e.pos.add(e.vel),e.acc.setScalar(0))}};ue(gi,"queries",[[Ne("exist",ss)]]);let Hu=gi;class qx extends Yt{execute(){if(this.queries)for(const e of this.queries[0].entities){const t=e.getComponent(Cn).data.parent.getComponent(Qe).data.group,n=e.getComponent(Ai);t.getWorldPosition(tt.WORLD_POS),n.data.basePos.value=tt.WORLD_POS.clone()}}}ue(qx,"queries",[[Ne("exist",Cr)]]);function Wu(o){var e;return(e=o==null?void 0:o.match(/(-?\d+.?\d+)\D/))==null?void 0:e[0]}function Yx(o){return o.charAt(0).toUpperCase()+o.slice(1)}function Xu(o){return o==null?void 0:o.split(/(?=[A-Z])/)}const Kx=Intl.NumberFormat("de");function ju(o,e=!0,t=!1,n="<br>• "){return o=o.map((i,r)=>{const s=i.split(`
`);return s[0]=id(s[0]),t&&(s[0]=`${s[0]} <span class="year" style="font-size:.8rem;">(${t})</span>`),`${r!=0&&!e?"<br><br>":""}<span class="year">${s[0]}</span>${n}${s.slice(1).join(n)}`}),o}function id(o){const e=o.match(/(-?\d+)/g),t=o.startsWith("≈")?"≈":"";if(!(e!=null&&e[0]))return o;const n=parseInt(e==null?void 0:e[0]);return n&&(o=Kx.format(n),n<0?o=`${t}${o.slice(1)} BC`:t&&(o=`${t}${o}`)),e!=null&&e[1]&&(o=`${o} - ${id(e==null?void 0:e[1])}`),o}class Zx{constructor(e){ue(this,"main");ue(this,"timeline");ue(this,"info");ue(this,"title");ue(this,"subtitle");ue(this,"subtext");ue(this,"menubtn");ue(this,"menutip");ue(this,"menuclosebtn");ue(this,"displayMarkerCB");ue(this,"followCamCB");ue(this,"orbScaleIN");ue(this,"axisScaleIN");ue(this,"_coords");ue(this,"map");ue(this,"fullTxt");ue(this,"lvlInfo");ue(this,"_visible",!1);ue(this,"sysKey");ue(this,"fullInfo");this.uiManager=e,this.main=document.getElementById("infoPanel"),this.timeline=document.getElementById("infoPanelTimeline"),this.info=document.getElementById("infoPanelInfo"),this.title=document.querySelector("#infoPanelTitleArea .title"),this.subtitle=document.querySelector("#infoPanelTitleArea .subtitle"),this.subtext=document.querySelector("#infoPanelSubtextArea .subtitle"),this.menubtn=document.getElementById("infoPanelButton"),this.menuclosebtn=document.getElementById("infoPanelCloseButton"),this.menutip=document.getElementById("infoPanelButtonText"),this.displayMarkerCB=document.getElementById("displayMarker"),this.followCamCB=document.getElementById("followCam"),this.orbScaleIN=document.getElementById("orbScale"),this.axisScaleIN=document.getElementById("axisScale");const t=document.querySelector("#infoPanelFooter .x .digit"),n=document.querySelector("#infoPanelFooter .y .digit"),i=document.querySelector("#infoPanelFooter .z .digit");this._coords=[t,n,i],this.map={},this.fullTxt="",this.fullInfo="",this.lvlInfo={},this.sysKey="",this.initSettings();const r=Re.getInstance();this.menubtn.onclick=()=>{this.openSysTarget(!this.visible)},this.menubtn.onmouseover=()=>{var a;(a=this.menutip)==null||a.classList.add("active")},this.menubtn.onmouseleave=()=>{var a;(a=this.menutip)==null||a.classList.remove("active")},this.menuclosebtn.onclick=()=>{this.visible=!1},this.displayMarkerVisible=r.store.displayMarkerVisibility,this.displayMarkerCB.checked=this.displayMarkerVisible,this.displayMarkerCB.onchange=()=>{this.displayMarkerVisible=this.displayMarkerCB.checked},this.followCamCB.checked=r.state.followCam,this.followCamCB.onchange=()=>{r.state.followCam=this.followCamCB.checked},this.orbScaleIN.onchange=()=>{const a=parseFloat(this.orbScaleIN.value);a!==r.state.ORB_SCALE&&(r.state.ORB_SCALE=a)},this.axisScaleIN.onchange=()=>{const a=parseFloat(this.axisScaleIN.value);a!==r.state.ROT_SCALE&&(r.state.ROT_SCALE=a)};const s=setTimeout(()=>{var a;(a=this.menutip)==null||a.classList.add("active")},3e3);window.addEventListener("wheel",()=>{var a;clearTimeout(s),(a=this.menutip)==null||a.classList.remove("active")},{once:!0})}openSysTarget(e){this.setSysTarget(),this.visible=e===void 0?!0:e}getCache(){return{map:this.map,full:this.fullTxt,lvlInfo:this.lvlInfo,fullInfo:this.fullInfo}}setCache(e){this.map=e.map,this.fullTxt=e.full,this.fullInfo=e.fullInfo,this.lvlInfo=e.lvlInfo}set visibility(e){this.main.style.visibility=e?"visible":"hidden"}set visible(e){e?this.main.classList.add("checked"):this.main.classList.remove("checked"),this.menuVisible=e,this._visible=e}get visible(){return this._visible}set coords(e){const[t,n,i]=[e.x*Re.getInstance().state.DISTANCE_SCALE,e.y*Re.getInstance().state.DISTANCE_SCALE,e.z*Re.getInstance().state.DISTANCE_SCALE];this._coords[0].innerText=t.toExponential(4),this._coords[1].innerText=n.toExponential(4),this._coords[2].innerText=i.toExponential(4)}set menuVisible(e){e?this.menubtn.style.transform="scale(0)":this.menubtn.style.transform="scale(1)",e?this.menuclosebtn.style.transform="scale(1)":this.menuclosebtn.style.transform="scale(0)"}set displayMarkerVisible(e){var n;const t=Re.getInstance();localStorage.setItem("markerVisiblity",e.toString()),(n=document.documentElement)==null||n.style.setProperty("--marker-diamond-visibility",e?"visible":"hidden"),t.store.displayMarkerVisibility=e}get displayMarkerVisible(){return Re.getInstance().store.displayMarkerVisibility}initSettings(){const e=Re.getInstance();console.log(e.store.displayMarkerVisibility),this.orbScaleIN.value=e.state.ORB_SCALE,this.axisScaleIN.value=e.state.ROT_SCALE}initTexts(e,t){this.genTexts(e),this.lvlInfo=t,this.setConstellation(t.constellation)}setConstellation(e){this.subtext.innerText=e}setTarget(e,t="tab2"){const n=e.getComponent(kt),i=this.map[n.data.name.toLowerCase()];this.timeline.innerHTML=i||"N/A",this.title.innerText=n.data.name,this.subtitle.innerText=n.data.parent?n.data.parent:"Local Group",document.getElementById(t).checked=!0}setSysTarget(){this.timeline.innerHTML=this.map[this.sysKey],this.title.innerText=this.lvlInfo.name,this.info.innerHTML=this.fullInfo,this.subtitle.innerText="Local Group"}genTexts(e){const t=e.filter(i=>i.timeline).map(i=>ju(i.timeline,!0,Yx(i.name))).flat().sort((i,r)=>{var u,h,d,f;const s=(h=Wu((u=Xu(i))==null?void 0:u[0]))==null?void 0:h.replace(".",""),a=(f=Wu((d=Xu(r))==null?void 0:d[0]))==null?void 0:f.replace(".","");if(!s)return-1;if(!s||!a)return 0;const l=parseInt(s),c=parseInt(a);return l-c});this.fullTxt=t.join("<br><br>");const n={};e.forEach(i=>{if(i.all){this.sysKey=i.name.toLowerCase(),n[this.sysKey]=this.fullTxt,this.fullInfo=i.info?i.info:"";return}if(!i.timeline)return;const r=ju(i.timeline,!1);n[i.name.toLowerCase()]=r.join(`
\r`)}),this.map=n}}class Qx{constructor(){ue(this,"_loadingArea");ue(this,"_loading");ue(this,"_progress");ue(this,"_visible",!1);this._loadingArea=document.getElementById("loadingArea"),this._loading=document.getElementById("loading"),this._progress=document.getElementById("progress")}get visible(){return this._visible}set visible(e){this._loadingArea.style.visibility=e?"visible":"hidden",this._loading.style.visibility=e?"visible":"hidden",this._visible=e}set value(e){this._progress.value=e}}class Jx{constructor(e){ue(this,"infoPanel");ue(this,"progress");this.world=e,this.infoPanel=new Zx(this),this.progress=new Qx}}class $x{constructor(e,t,n){this.ecManager=e,this.id=t,this.components=n}addComponent(e,t){return this.ecManager.addEntityComponent(this,e,t),this}getComponent(e){return this.components[e.typeID]}init(){Object.values(this.components).forEach(e=>{"init"in e&&e.init(this.ecManager.world)})}}class ey{constructor(e){ue(this,"entities");ue(this,"world");this.entities=[],this.world=e}unmount(){for(const e of this.entities){const t=e.getComponent(Hn);t&&(document.body.removeChild(t.data.renderer3d.domElement),document.body.removeChild(t.data.renderer2d.domElement))}}mount(){for(const e of this.entities){const t=e.getComponent(Hn);t&&(document.body.appendChild(t.data.renderer3d.domElement),document.body.appendChild(t.data.renderer2d.domElement))}}getEntityByBaseName(e){for(let t=0;t<this.entities.length;t++){const n=this.entities[t],i=n.getComponent(kt);if(i&&i.data.name&&i.data.name===e)return n}}createEntity(){const e=new $x(this,crypto.randomUUID(),{});return this.entities.push(e),e}addEntityComponent(e,t,n){t.typeID||(t.typeID=crypto.randomUUID());const i=t.typeID;if(e=typeof e=="string"?this.entities.find(s=>s.id===e):e,i in e.components)return this;const r=new t(n||{});return e.components[i]=r,r.dependendQueries=this.world.queryManager.getComponentQuery(r),this.world.queryManager.updateQueries(e),this}init(){this.entities.forEach(e=>e.init())}}function ty(o,e){o.ecManager.createEntity().addComponent(Hn,Hn.getDefaults()),o.ecManager.createEntity().addComponent(Ct,Ct.getDefaults()),o.ecManager.createEntity().addComponent(Bt,Bt.getDefaults(e)),o.ecManager.createEntity().addComponent(hn,hn.getDefaults())}function ny(o,e){var t,n;e.rotationPeriod&&o.addComponent(br,br.getDefaults(e.rotationPeriod)),e.orbitalPeriod&&o.addComponent(Sr,Sr.getDefaults(e.orbitalPeriod,(t=e.draw)==null?void 0:t.orbInvert)),e.distanceToParent&&o.addComponent(si,si.getDefaults(e.distanceToParent)),e.parent&&o.addComponent(Cn,Cn.getDefaults()),e.tilt&&e.tilt!=0&&o.addComponent(ps,ps.getDefaults(e.tilt)),o.addComponent(cn,cn.getDefaults(e.radius)).addComponent(kt,{name:e.name,uuid:crypto.randomUUID(),texts:e.texts,parent:e.parent}),(n=e.draw)!=null&&n.disableMarker||o.addComponent(vi)}function iy(o){o.sysManager.registerSystem(Jh).registerSystem($h).registerSystem(Ss).registerSystem(ms).registerSystem(Aa)}const ry=`// Code from:
// https://bpodgursky.com/2017/02/01/procedural-star-rendering-with-three-js-and-webgl-shaders/

varying vec3 vTexCoord3D;

uniform float highTemp;
uniform float lowTemp;

uniform float time;

#include <common>
#include <logdepthbuf_pars_fragment>

//  Noise fnunctions are taken from here:
//
// Description : Array and textureless GLSL 2D/3D/4D simplex
//               noise functions.
//      Author : Ian McEwan, Ashima Arts.
//  Maintainer : ijm
//     Lastmod : 20110822 (ijm)
//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.
//               Distributed under the MIT License. See LICENSE file.
//               https://github.com/ashima/webgl-noise
//
vec4 permute( vec4 x ) {
  return mod( ( ( x * 34.0 ) + 1.0 ) * x, 289.0 );
}

vec4 taylorInvSqrt( vec4 r ) {
  return 1.79284291400159 - 0.85373472095314 * r;
}

float snoise( vec3 v ) {

  const vec2 C = vec2( 1.0 / 6.0, 1.0 / 3.0 );
  const vec4 D = vec4( 0.0, 0.5, 1.0, 2.0 );

  // First corner
  vec3 i  = floor( v + dot( v, C.yyy ) );
  vec3 x0 = v - i + dot( i, C.xxx );

  // Other corners
  vec3 g = step( x0.yzx, x0.xyz );
  vec3 l = 1.0 - g;
  vec3 i1 = min( g.xyz, l.zxy );
  vec3 i2 = max( g.xyz, l.zxy );

  //  x0 = x0 - 0. + 0.0 * C
  vec3 x1 = x0 - i1 + 1.0 * C.xxx;
  vec3 x2 = x0 - i2 + 2.0 * C.xxx;
  vec3 x3 = x0 - 1. + 3.0 * C.xxx;

  // Permutations
  i = mod( i, 289.0 );
  vec4 p = permute( permute( permute(
       i.z + vec4( 0.0, i1.z, i2.z, 1.0 ) )
       + i.y + vec4( 0.0, i1.y, i2.y, 1.0 ) )
       + i.x + vec4( 0.0, i1.x, i2.x, 1.0 ) );

  // Gradients
  // ( N*N points uniformly over a square, mapped onto an octahedron.)

  float n_ = 1.0 / 7.0; // N=7

  vec3 ns = n_ * D.wyz - D.xzx;

  vec4 j = p - 49.0 * floor( p * ns.z *ns.z );  //  mod(p,N*N)

  vec4 x_ = floor( j * ns.z );
  vec4 y_ = floor( j - 7.0 * x_ );    // mod(j,N)

  vec4 x = x_ *ns.x + ns.yyyy;
  vec4 y = y_ *ns.x + ns.yyyy;
  vec4 h = 1.0 - abs( x ) - abs( y );

  vec4 b0 = vec4( x.xy, y.xy );
  vec4 b1 = vec4( x.zw, y.zw );

  vec4 s0 = floor( b0 ) * 2.0 + 1.0;
  vec4 s1 = floor( b1 ) * 2.0 + 1.0;
  vec4 sh = -step( h, vec4( 0.0 ) );

  vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
  vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;

  vec3 p0 = vec3( a0.xy, h.x );
  vec3 p1 = vec3( a0.zw, h.y );
  vec3 p2 = vec3( a1.xy, h.z );
  vec3 p3 = vec3( a1.zw, h.w );

  // Normalise gradients

  vec4 norm = taylorInvSqrt( vec4( dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3) ) );
  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;

  // Mix final noise value

  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3) ), 0.0 );
  m = m * m;
  return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),
                dot(p2,x2), dot(p3,x3) ) );

}

const int octaves = 4;

 float noise(vec3 position, float frequency, float persistence) {
    float total = 0.0; // Total value so far
    float maxAmplitude = 0.0; // Accumulates highest theoretical amplitude
    float amplitude = 1.0;
    for (int i = 0; i < octaves; i++) {
        // Get the noise sample
        total += snoise(position * frequency) * amplitude;
        // Make the wavelength twice as small
        frequency *= 2.0;
        // Add to our maximum possible amplitude
        maxAmplitude += amplitude;
        // Reduce amplitude according to persistence for the next octave
        amplitude *= persistence;
    }
    // Scale the result by the maximum amplitude
    return total / maxAmplitude;
}

//  star rendering heavily borrows from the tips here: https://www.seedofandromeda.com/blogs/51-procedural-star-rendering
void main( void ) {
  #include <logdepthbuf_fragment>

  float noiseBase = (noise(vTexCoord3D , .40, 0.7)+1.0)/2.0;

   // Sunspots
  float frequency = 0.04;
  float t1 = snoise(vTexCoord3D * frequency)*2.7 -  1.9;
  float brightNoise= snoise(vTexCoord3D * .02)*1.4- .9;

  float ss = max(0.0, t1);
  float brightSpot = max(0.0, brightNoise);
  float total = noiseBase - ss + brightSpot;

  float temp = (highTemp * (total)  +(1.0-total) * lowTemp);

  //  these equations reproduce the RGB values of this image: https://www.seedofandromeda.com/assets/images/blogs/star_spectrum_3.png
  float i =(temp - 800.0)*0.035068;

  //  for R
  bool rbucket1 = i < 60.0;   //  0, 255 in 60
  bool rbucket2 = i >= 60.0 && i < 236.0;  //   255,255
  bool rbucket3 = i >= 236.0 && i < 288.0; //  255,128
  bool rbucket4 = i >= 288.0 && i < 377.0; //  128,60
  bool rbucket5 = i >= 377.0 && i < 511.0; //  60,0
  bool rbucket6 = i >= 511.0;  //  0,0

  bool gbucket1 = i <60.0;
  bool gbucket2 = i >= 60.0 && i < 103.0; //  0,100
  bool gbucket3 = i >= 103.0 && i < 133.0; // 100,233
  bool gbucket4 = i >= 133.0 && i < 174.0; // 233, 255
  bool gbucket5 = i >= 174.0 && i < 236.0; // 255,255
  bool gbucket6 = i >= 236.0 && i < 286.0; //255,193
  bool gbucket7 = i >= 286.0 && i < 367.0; //193,129
  bool gbucket8 = i >= 367.0 && i < 511.0; //129,64
  bool gbucket9 = i >= 511.0; // 64,32

 // for B
  bool bbucket1 = i < 103.0;
  bool bbucket2 = i >= 103.0 && i < 133.0; // 0,211
  bool bbucket3 = i >= 133.0 && i < 173.0; // 211,247
  bool bbucket4 = i >= 173.0 && i < 231.0;  //  247,255
  bool bbucket5 = i>= 231.0;

  float r =
    float(rbucket1) * (0.0 + i * 4.25) +
    float(rbucket2) * (255.0) +
    float(rbucket3) * (255.0 + (i - 236.0) * -2.442) +
    float(rbucket4) * (128.0 + (i - 288.0) * -0.764) +
    float(rbucket5) * (60.0 + (i - 377.0) * -0.4477)+
    float(rbucket6) * 0.0;

  float g =
     float(gbucket1) * (0.0) +
     float(gbucket2) * (0.0 + (i - 60.0) *2.3255) +
     float(gbucket3) * (100.0 + (i - 103.0) *4.433)+
     float(gbucket4) * (233.0 + (i - 133.0) *0.53658)+
     float(gbucket5) * (255.0) +
     float(gbucket6) * (255.0 +(i - 236.0) *-1.24) +
     float(gbucket7) * (193.0 + (i - 286.0) *-0.7901) +
     float(gbucket8) * (129.0 + (i - 367.0) * -0.45138)+
     float(gbucket9) * (64.0 + (i - 511.0) * -0.06237);

  float b =
    float(bbucket1) * 0.0+
    float(bbucket2) * (0.0 + (i - 103.0) * 7.0333) +
    float(bbucket3) * (211.0 + (i - 133.0) * 0.9)+
    float(bbucket4) * (247.0 + (i - 173.0)*0.1379)+
    float(bbucket5) * 255.0;

  gl_FragColor = vec4(vec3(r/255.0, g/255.0, b/255.0), 1.0);
  // gl_FragColor = vec4(.0);
  gl_FragColor.a = 1.0;

  }
`,sy=`#include <common>
#include <logdepthbuf_pars_vertex>

varying vec2 vUv;
varying vec3 vPosition;
varying vec3 eyeVector;
varying vec3 vNormal;
varying vec3 vTexCoord3D;

uniform float scale;
uniform float time;

float Fresnel(vec3 eyeVector, vec3 worldNormal) {
  return pow(1.0 + dot(eyeVector, worldNormal), 3.0);
}

void main() {
  vUv = uv;
  vPosition = position;
  vNormal = normal;
  vTexCoord3D = scale * ( position.xyz + vec3( time, time, time ) );

  vec4 worldPosition = modelMatrix * vec4(position, 1.0);
  eyeVector = normalize(worldPosition.xyz - cameraPosition);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  #include <logdepthbuf_vertex>
}`;function ay(o,e){var s;const[t,n,i,r]=oy(e);return e.disableLight||o.addComponent(xa,xa.getDefaults("#fff",1,1e5)),o.addComponent(Ai,r).addComponent(Wn,{mesh:t}).addComponent(Qe,Qe.getDefaults(n)).addComponent(dn,dn.getDefaults(i,(s=e.draw)==null?void 0:s.initRot)).addComponent(Ms),ny(o,e),o}function oy(o){const e={time:{value:1},scale:{value:2.5},highTemp:{value:o.highTemp},lowTemp:{value:o.lowTemp}},t=new ri({uniforms:e,vertexShader:sy,fragmentShader:ry,depthWrite:!0,depthTest:!0,transparent:!1}),n=new Ft(tt.SPHERE_GEOM,t);n.scale.setScalar(o.radius*Re.getInstance().state.SIZE_SCALE),n.name=`${o.name}_mesh`;const i=new xn,r=new xn;return i.name=`${o.name}_transformGrp`,r.name=`${o.name}_rotGrp`,[n,i,r,e]}function ly(o){tt.LOAD_MANAGER.itemStart("://CosmicMap");const e=Re.getInstance();e.state.DISTANCE_SCALE=1e-11,e.state.SIZE_SCALE=.0015,e.state.followCam=!1,iy(o),o.sysManager.registerSystem(ed).registerSystem(td).registerSystem(nd),tt.LOAD_MANAGER.itemStart("://CosmicMap_suns"),cy(o),tt.LOAD_MANAGER.itemEnd("://CosmicMap_suns"),tt.LOAD_MANAGER.itemStart("://CosmicMap_world"),uy(o),e.state.camPos=new F(0,2118*.5,10175*.65),ty(o,e.state.camPos),o.load();const t=[{name:"txt",all:!0,info:`<div class="year">Unknown Locations:</div>
        <br>•Aertha (Galactic North) [Nestbuilders]
        <br>•Bloater (Revelation Space)
        <br>•Golgotha (Diamond Dogs) [Blood Spire Civilisation]
        <br>•Grand Teton (Multiple)
        <br>•Hope (Galactic North)
        <br>•Lascaille's Shroud (Muliple) [Shrouder Civilisation, Amarantin]
        <br>•Shiva-Parvarti (Galactic North)
        <br>•Spindrift (Revelation Space) [Pattern Jugglers]
        <br>
        <br><div class="year">Distant Locations:</div>
        <br>•Hyades Cluster (Galactic North)
        <br>•Pleiades Cluster (Galactic North)
        <br>
        <br>
        Original Map produced by Richard Terrett`}];o.uiManager.infoPanel.initTexts(t,{name:"Cosmic Map",constellation:""}),tt.LOAD_MANAGER.itemEnd("://CosmicMap_world");const n=o.sysManager.getSystem(Ss);n&&(n.enabled=!0),tt.LOAD_MANAGER.itemEnd("://CosmicMap")}function cy(o){const e=(t,n)=>(n={...n,draw:{...n.draw,disableMarker:!0}},ay(t,n));e(o.ecManager.createEntity(),{highTemp:7100,lowTemp:3100,name:"Sol",rotationPeriod:648,radius:3e3,disableLight:!0,texts:["Earth","- Moon","Mars","- Phobos","Europa"]}).addComponent(ct,ct.getDefaults()),e(o.ecManager.createEntity(),{highTemp:5500,lowTemp:3500,name:"Epsilon Eridani",rotationPeriod:1e3,radius:2200,distanceToParent:[Re.getInstance().store.LIGHTYEAR*10.47,-(Re.getInstance().store.LIGHTYEAR*3)],disableLight:!0,draw:{initRot:Math.PI*2.1},texts:["Yellowstone [GRUBS]","- Marcos Eye","Tangerine Dream","Conjoiner Nest","- Conjoiner Comet"]}).addComponent(ct,ct.getDefaults(!0)),e(o.ecManager.createEntity(),{highTemp:6e3,lowTemp:3e3,name:"p Eridani",rotationPeriod:1e3,radius:2200,distanceToParent:[Re.getInstance().store.LIGHTYEAR*12.47,-(Re.getInstance().store.LIGHTYEAR*17)],disableLight:!0,draw:{initRot:Math.PI*-1.9*-1},texts:["Ararat [PATTERN JUGGLERS, NESTBUILDERS]"]}).addComponent(ct,ct.getDefaults(!0)),e(o.ecManager.createEntity(),{highTemp:7e3,lowTemp:3e3,name:"Delta Pavonis",rotationPeriod:1356,radius:3300,distanceToParent:[Re.getInstance().store.LIGHTYEAR*7.5,-(Re.getInstance().store.LIGHTYEAR*20)],disableLight:!0,draw:{initRot:Math.PI/2*-1},texts:["Resurgam [AMARATIN]","Hades [HADES MATRIX CIVILISATION]","- Cerberus [INHIBITORS, AMARATIN, CERBERUS CIVILISATION]","ROC"]}).addComponent(ct,ct.getDefaults(!0)),e(o.ecManager.createEntity(),{highTemp:4e3,lowTemp:3e3,name:"Lacaille 9352",rotationPeriod:1156,radius:2e3,distanceToParent:[Re.getInstance().store.LIGHTYEAR*10.47,-(Re.getInstance().store.LIGHTYEAR*5)],disableLight:!0,draw:{initRot:Math.PI*1.65},texts:["Fand"]}).addComponent(ct,ct.getDefaults(!0)),e(o.ecManager.createEntity(),{highTemp:2e3,lowTemp:900,name:"Luyten 726-8",rotationPeriod:956,radius:1200,distanceToParent:[Re.getInstance().store.LIGHTYEAR*8,-(Re.getInstance().store.LIGHTYEAR*4)],disableLight:!0,draw:{initRot:Math.PI*1.9},texts:["Luyten 726-8 Cometary Halo"]}).addComponent(ct,ct.getDefaults(!0)),e(o.ecManager.createEntity(),{highTemp:4e3,lowTemp:3e3,name:"Ross 248",rotationPeriod:1256,radius:1e3,distanceToParent:[Re.getInstance().store.LIGHTYEAR*8.65,Re.getInstance().store.LIGHTYEAR*5],disableLight:!0,draw:{initRot:Math.PI*1.72},texts:["Diadem"]}).addComponent(ct,ct.getDefaults(!0)),e(o.ecManager.createEntity(),{highTemp:4e3,lowTemp:3e3,name:"61 Cygni",rotationPeriod:1256,radius:2e3,distanceToParent:[Re.getInstance().store.LIGHTYEAR*7.65,Re.getInstance().store.LIGHTYEAR*6],disableLight:!0,draw:{initRot:Math.PI*1.558},texts:["Sky's Edge"]}).addComponent(ct,ct.getDefaults(!0)),e(o.ecManager.createEntity(),{highTemp:3e3,lowTemp:500,name:"Lalande 21185",rotationPeriod:1256,radius:1225,distanceToParent:[Re.getInstance().store.LIGHTYEAR*6,Re.getInstance().store.LIGHTYEAR*4.5],disableLight:!0,draw:{initRot:Math.PI*.75},texts:["Zion"]}).addComponent(ct,ct.getDefaults(!0)),e(o.ecManager.createEntity(),{highTemp:3e3,lowTemp:500,name:"Gliese 687",rotationPeriod:756,radius:1560,distanceToParent:[Re.getInstance().store.LIGHTYEAR*4,Re.getInstance().store.LIGHTYEAR*10],disableLight:!0,draw:{initRot:Math.PI*1.3},texts:["Haven"]}).addComponent(ct,ct.getDefaults(!0)),e(o.ecManager.createEntity(),{highTemp:5e3,lowTemp:500,name:"Groombridge 1618",rotationPeriod:756,radius:1450,distanceToParent:[Re.getInstance().store.LIGHTYEAR*8.65,Re.getInstance().store.LIGHTYEAR*9.5],disableLight:!0,draw:{initRot:Math.PI*.72},texts:["Turquoise [PATTERN JUGGLERS]"]}).addComponent(ct,ct.getDefaults()),e(o.ecManager.createEntity(),{highTemp:1e4,lowTemp:500,name:"107 Piscium",rotationPeriod:856,radius:3e3,distanceToParent:[Re.getInstance().store.LIGHTYEAR*20.47,Re.getInstance().store.LIGHTYEAR*7.5],disableLight:!0,draw:{initRot:Math.PI*-.1},texts:["Haldora [SHADOWS]","- Hela [SCUTTLERS, NESTBUILDERS(?)]"]}).addComponent(ct,ct.getDefaults(!0)),e(o.ecManager.createEntity(),{highTemp:3800,lowTemp:500,name:"AU Microscopii",rotationPeriod:856,radius:2800,distanceToParent:[Re.getInstance().store.LIGHTYEAR*28.69,Re.getInstance().store.LIGHTYEAR*-26.4],disableLight:!0,draw:{initRot:Math.PI*-.8},texts:["MichaelMas [Sun Hollow]"]}).addComponent(ct,ct.getDefaults(!0))}function uy(o){o.ecManager.createEntity().addComponent(nn,nn.getDefaults(1)).addComponent(wn,wn.getDefaults("1LY",15)),o.ecManager.createEntity().addComponent(nn,nn.getDefaults(5)).addComponent(wn,wn.getDefaults("5LY",15)),o.ecManager.createEntity().addComponent(nn,nn.getDefaults(15)).addComponent(wn,wn.getDefaults("15LY",15)),o.ecManager.createEntity().addComponent(nn,nn.getDefaults(25)).addComponent(wn,wn.getDefaults("25LY",25)),o.ecManager.createEntity().addComponent(Yo,{});const e=["Epsilon Eridani","p Eridani","Epsilon Eridani","Delta Pavonis","Epsilon Eridani","107 Piscium","Epsilon Eridani","61 Cygni","p Eridani","Delta Pavonis","61 Cygni","Sol","Ross 248","Sol","Epsilon Eridani","AU Microscopii"];o.ecManager.createEntity().addComponent(Ko,{pairs:e})}const hy={systems:[{name:"Epsilon Eridani",isSingleSun:!0,DISTANCE_SCALE:3e-8,SIZE_SCALE:1e-5,startTarget:"Yellowstone",freeCam:!1,constellation:"Eridanus",objects:[{name:"Epsilon Eridani",type:"sun",radius:508328.2,rotationPeriod:273.6,highTemp:5500,lowTemp:3500},{name:"Tangerine Dream",type:"planet",radius:84592.31,rotationPeriod:24,orbitalPeriod:63948,parent:"Epsilon Eridani",tilt:-30.1,distanceToParent:50864e5,draw:{albedoPath:"./planetTextures/2k_jupiter.webp",normalPath:"./planetTextures/ceres_normal_16k.webp",glowColor:"0xffffff",glowIntensity:.1}},{name:"Yellowstone",type:"planet",radius:5600,rotationPeriod:26,orbitalPeriod:2453e3,parent:"Epsilon Eridani",tilt:-3.13,distanceToParent:5984e7,draw:{albedoPath:"./planetTextures/2k_venus_surface.webp",normalPath:"./planetTextures/ceres_normal_16k.webp",glowColor:"0xf69f1f",glowIntensity:.25}},{name:"Marcos Eye",type:"moon",radius:1737.4,rotationPeriod:6552,orbitalPeriod:6552,parent:"Yellowstone",tilt:0,distanceToParent:30844e4,draw:{albedoPath:"./planetTextures/moon_albedo.webp",normalPath:"./planetTextures/moon_normal.webp",glowColor:"0xffffff",glowIntensity:.1,radius:1,orbInvert:!1,orbLen:45,showMarker:!1}},{name:"Glitterband",type:"particlering",radius:null,rotationPeriod:null,orbitalPeriod:6200,parent:"Yellowstone",tilt:"0         //308440000",distanceToParent:225e6,draw:{cache:"./epsilonEridani/glitterband.glb",count:1e4,distDiv:3e9,height:.25,genColor:!0,orbInvert:!0}},{name:"Oort Cloud",type:"oortcloud",radius:null,rotationPeriod:null,orbitalPeriod:62e3,parent:"Epsilon Eridani",tilt:0,distanceToParent:1992e10,draw:{radius:2}}]},{name:"Delta Pavonis",isSingleSun:!0,DISTANCE_SCALE:4e-7,SIZE_SCALE:2e-5,startTarget:"Delta Pavonis",freeCam:!1,constellation:"Pavo",objects:[{name:"Delta Pavonis",type:"sun",radius:848800,orbitalPeriod:21365.64,distanceToParent:-26975e5,highTemp:7e3,lowTemp:3e3,draw:{mass:101e5,vel:"0,0,-.015",acc:"0,0,0"}},{name:"VolcanicLike",type:"planet",radius:3370.9,rotationPeriod:66.66,orbitalPeriod:19948,parent:"Delta Pavonis",tilt:.03,distanceToParent:60095e3,draw:{albedoPath:"./planetTextures/2k_Volcanic.webp",normalPath:"./planetTextures/2k_Volcanic_normal.webp",glowColor:"0xffffff",glowIntensity:.1,orbOpacity:.2,disableMarker:!0,orbLen:135}},{name:"ROC",type:"planet",radius:19113.1991,rotationPeriod:50,orbitalPeriod:39948,parent:"Delta Pavonis",tilt:2.64,distanceToParent:1769e5,draw:{albedoPath:"./planetTextures/2k_jupiter.webp",normalPath:"./planetTextures/ceres_normal_16k.webp",glowColor:"0xffffff",glowIntensity:.1}},{name:"VenusLike",type:"planet",radius:1370.9,rotationPeriod:44.66,orbitalPeriod:70068,parent:"Delta Pavonis",tilt:24.44,distanceToParent:40095e4,draw:{albedoPath:"./planetTextures/2k_Venusian.webp",normalPath:"./planetTextures/2k_Venusian_normal.webp",glowColor:"0xffffff",glowIntensity:.1,orbOpacity:.2,disableMarker:!0,orbLen:135}},{name:"Pluto",type:"planet",radius:1469.7,rotationPeriod:9,orbitalPeriod:203680,parent:"Delta Pavonis",tilt:25.19,distanceToParent:65025e4,draw:{albedoPath:"./planetTextures/2k_PlutoColour.webp",normalPath:"./planetTextures/2k_PlutoColour_normal.webp",glowColor:"0xffffff",glowIntensity:.1,orbOpacity:.2,disableMarker:!0,orbLen:135}},{name:"MakeMake",type:"planet",radius:2469.7,rotationPeriod:9,orbitalPeriod:1006800,parent:"Delta Pavonis",tilt:3.13,distanceToParent:75025e4,draw:{albedoPath:"./planetTextures/2k_makemake_fictional.webp",normalPath:"./planetTextures/2k_makemake_fictional_normal.webp",glowColor:"0xffffff",glowIntensity:.1,orbOpacity:.2,disableMarker:!0,orbLen:135}},{name:"Icy",type:"planet",radius:1163,rotationPeriod:25.9,orbitalPeriod:3004800,parent:"Delta Pavonis",tilt:26.73,distanceToParent:10005e5,draw:{albedoPath:"./planetTextures/2k_icy.webp",normalPath:"./planetTextures/2k_icy_normal.webp",glowColor:"0xffffff",glowIntensity:.1,orbOpacity:.2,disableMarker:!0,orbLen:135}},{name:"Ceres",type:"planet",radius:469.7,rotationPeriod:9,orbitalPeriod:4036800,parent:"Delta Pavonis",tilt:82.29,distanceToParent:13025e5,draw:{albedoPath:"./planetTextures/2k_ceres_fictional.webp",normalPath:"./planetTextures/2k_ceres_fictional_normal.webp",glowColor:"0xffffff",glowIntensity:.1,orbOpacity:.2,disableMarker:!0,orbLen:135}},{name:"Resurgam",type:"planet",radius:5600,rotationPeriod:26,orbitalPeriod:3241200,parent:"Delta Pavonis",tilt:4.2,distanceToParent:16605e5,draw:{albedoPath:"./planetTextures/2k_orange_desert.webp",normalPath:"./planetTextures/1k_yellow_desert_normal.webp",glowColor:"0xdaa43d",glowIntensity:.25}},{name:"Haumea",type:"planet",radius:3469.7,rotationPeriod:90,orbitalPeriod:10068e3,parent:"Delta Pavonis",tilt:28.32,distanceToParent:14525e5,draw:{albedoPath:"./planetTextures/2k_haumea_fictional.webp",normalPath:"./planetTextures/2k_haumea_fictional_normal.webp",glowColor:"0xffffff",glowIntensity:.1,orbOpacity:.2,disableMarker:!0,orbLen:135}},{name:"Eris",type:"planet",radius:2069.7,rotationPeriod:34,orbitalPeriod:30068e3,parent:"Delta Pavonis",tilt:57.47,distanceToParent:2095025e3,draw:{albedoPath:"./planetTextures/2k_eris_fictional.webp",normalPath:"./planetTextures/2k_eris_fictional_normal.webp",glowColor:"0xffffff",glowIntensity:.1,orbOpacity:.2,disableMarker:!0,orbLen:135}},{name:"MartianLike",type:"planet",radius:1370.9,rotationPeriod:50,orbitalPeriod:70068e3,parent:"Delta Pavonis",tilt:3.976,distanceToParent:31e7,draw:{albedoPath:"./planetTextures/2k_Martian.webp",normalPath:"./planetTextures/2k_Martian_normal.webp",glowColor:"0xffffff",glowIntensity:.1,orbOpacity:.2,disableMarker:!0,orbLen:135}},{name:"Hades",type:"sun",disableLight:!0,radius:2000.2,orbitalPeriod:87600,distanceToParent:5079e7,highTemp:25e3,lowTemp:1e3,draw:{mass:255e4,vel:"0,0,0",acc:"0,0,.05"}},{name:"Cerberus",type:"moon",radius:1737.4,rotationPeriod:6552,orbitalPeriod:655200,parent:"Hades",tilt:0,distanceToParent:30844e5,draw:{albedoPath:"./planetTextures/cerberus.webp",normalPath:"./planetTextures/cerberus_normal.webp",glowColor:"0xffffff",glowIntensity:.1,orbInvert:!0}}]}]},qu=hy;let ar;const Ao=["Cosmic Map","Epsilon Eridani","Delta Pavonis"],dy=async o=>{if(o==="Epsilon Eridani"){const e=await _a(()=>import("./AutoMap-c83a5a27.js"),[],import.meta.url);return ar||(ar=e.initSystem),t=>ar(t,qu.systems[0])}if(o==="Delta Pavonis"){const e=await _a(()=>import("./AutoMap-c83a5a27.js"),[],import.meta.url);return ar||(ar=e.initSystem),t=>ar(t,qu.systems[1])}return ly};class fy{constructor(e){ue(this,"levelMap");ue(this,"world");ue(this,"_currentLvl");this.levelMap={},this.world=e,this._currentLvl=Ao[0]}get currentLvl(){return this._currentLvl}get levelsNames(){return Ao}get isCosmicMap(){return this.currentLvl===this.levelsNames[0]}async openLevel(e){let t;if(!(e in this.levelMap)){if(!Ao.includes(e)){console.info(`${e} is not yet implemented.`);return}t=await dy(e)}this._openLevel(e,t),this._currentLvl=e,history.pushState({name:e},"",null)}_openLevel(e,t){if(this.world.enabled=!1,this.currentLvl===this.levelsNames[0]){const n=document.getElementById("cosmicMapTItle");n&&(n.style.visibility="hidden")}if(this.world.ecManager.unmount(),e in this.levelMap)this.world.ecManager.entities=this.levelMap[e][0],this.world.sysManager.systems=this.levelMap[e][3],this.world.uiManager.infoPanel.setCache(this.levelMap[e][5]),Re.getInstance().state=this.levelMap[e][4];else{if(this.world.queryManager.sysQueries={},this.world.queryManager.compQueries={},this.world.ecManager.entities=[],this.world.sysManager.systems=[],this.world.sysManager.querySysDependencies(),Re.getInstance().resetState(),!t)throw new Error("Level is not in map and no init-function was given");t(this.world),this.levelMap[e]=[[...this.world.ecManager.entities],this.world.queryManager.sysQueries,this.world.queryManager.compQueries,[...this.world.sysManager.systems],Re.getInstance().state,this.world.uiManager.infoPanel.getCache()]}this.world.uiManager.infoPanel.initSettings(),this.world.ecManager.mount(),this.world.enabled=!0}}class py{constructor(e){ue(this,"sysQueries");ue(this,"compQueries");ue(this,"world");this.sysQueries={},this.compQueries={},this.world=e}stateFromOperands(e){const t=[];for(const n of e)switch(n.operand){case"exist":{t.push([n.value.typeID,!0,!1,null]);break}case"!exist":{t.push([n.value.typeID,!1,!1,null]);break}case"self":{t.push([n.value.typeID,!0,!0,null]);break}case"name":{t.push([n.value.typeID,!0,!1,n.extra.name]);break}}return t}getSystemQuery(e){const t=e.constructor,n=t.typeID;return n in this.sysQueries||(this.sysQueries[n]=t.queries.map(i=>({entityQuery:this.stateFromOperands(i),entities:[]}))),this.sysQueries[n]}getComponentQuery(e){const t=e.constructor;if(t.dependencies.length===0)return;const n=e.instanceID;return n in this.compQueries||(this.compQueries[n]=t.dependencies.map(i=>({entityQuery:this.stateFromOperands([i]),entities:[]}))),this.compQueries[n]}queryComponentQueries(){for(const e of this.world.ecManager.entities)this.updateQueries(e,this.compQueries,!0)}querySystemQueries(){for(const e of this.world.ecManager.entities)this.updateQueries(e)}updateQueries(e,t,n=!1){t||(t=this.sysQueries);for(const i in t){const r=t[i],s=n?i:void 0;for(const a of r)!a.entities.includes(e)&&rv(e,a.entityQuery,s)&&a.entities.push(e)}}}class my{constructor(e){ue(this,"systems");ue(this,"world");this.systems=[],this.world=e}execute(e,t){for(let n=0;n<this.systems.length;n++){const i=this.systems[n];i.enabled&&this.executeSystem(i,e,t)}}executeSystem(e,t,n){const i=performance.now();e.execute(t,n),e.executeTime=performance.now()-i}registerSystem(e){if(this.getSystem(e)!==void 0)return console.warn(`System '${e.name}' already registered.`),this;e.typeID=crypto.randomUUID();const t=new e(this.world);return this.systems.push(t),this}unregisterSystem(e){const t=this.getSystem(e);return t===void 0?(console.warn(`Can't unregister system '${e.getName()}'. It doesn't exist.`),this):(this.systems.splice(this.systems.indexOf(t),1),this)}getSystem(e){return this.systems.find(t=>t instanceof e)}querySysDependencies(){this.systems.forEach(e=>e.requery())}}class gy{constructor(){ue(this,"ecManager");ue(this,"sysManager");ue(this,"lvlManager");ue(this,"queryManager");ue(this,"uiManager");ue(this,"enabled",!0);this.ecManager=new ey(this),this.sysManager=new my(this),this.lvlManager=new fy(this),this.queryManager=new py(this),this.uiManager=new Jx(this),_y(this)}execute(e,t){this.enabled&&this.sysManager.execute(e,t)}load(){this.queryManager.queryComponentQueries(),this.ecManager.init()}}function Yu(o){const[e,t]=o instanceof MouseEvent?[o.clientX,o.clientY]:[o.touches[0].clientX,o.touches[0].clientY],n=Re.getInstance();n.store.raypointer.x=e/window.innerWidth*2-1,n.store.raypointer.y=-(t/window.innerHeight)*2+1}function _y(o){const e=r=>{r.preventDefault(),r.stopImmediatePropagation(),Yu(r);const s=o.sysManager.getSystem(ms);s&&(s.enabled=!0)};window.ondblclick=e;let t=-1,n;window.ontouchstart=r=>{t=performance.now(),n=r},window.ontouchend=()=>{performance.now()-t>300||e(n)},window.onclick=r=>{if(Yu(r),r.altKey||r.shiftKey)if(o.lvlManager.currentLvl==o.lvlManager.levelsNames[0]){const a=o.sysManager.getSystem(ms);if(!a)return;a.enabled=!0,a.forceSwtich=!0}else o.lvlManager.openLevel("Cosmic Map");const s=r.target;!o.uiManager.infoPanel.main.contains(s)&&s.id!=="infoPanelButton"&&(o.uiManager.infoPanel.visible=!1)},window.onpopstate=r=>{o.lvlManager.openLevel(r.state.name)},window.onkeydown=r=>{vy(o,r)};const i=Re.getInstance();window.addEventListener("wheel",r=>{i.store.rotateCamPivotDepth+=r.deltaY}),tt.LOAD_MANAGER.onStart=()=>{o.enabled=!1,o.uiManager.progress.visible=!0},tt.LOAD_MANAGER.onLoad=()=>{o.uiManager.progress.value=0,o.uiManager.progress.visible=!1,o.enabled=!0},tt.LOAD_MANAGER.onProgress=(r,s,a)=>{const l=s/a*100;console.debug(r," ",l),o.uiManager.progress.value=l}}function vy(o,e){console.log(e.key);const t=Re.getInstance();e.key==="m"&&o.uiManager.infoPanel.openSysTarget(!o.uiManager.infoPanel.visible),e.key==="f"&&!o.lvlManager.isCosmicMap&&(t.state.followCam=!t.state.followCam);const n=.05;e.key.toLowerCase()==="arrowright"&&(t.store.rotateCamPivotY=Math.PI*n),e.key.toLowerCase()==="arrowleft"&&(t.store.rotateCamPivotY=-(Math.PI*n));const i=.005;e.key.toLowerCase()==="arrowup"&&(t.store.rotateCamPivotX=Math.PI*i),e.key.toLowerCase()==="arrowdown"&&(t.store.rotateCamPivotX=-(Math.PI*i))}document.title=`${document.title} (0.8.0-delta-pavonis)`;const Ku=document.getElementById("version");Ku&&(Ku.innerText="v0.8.0-delta-pavonis");window.onload=async()=>{var i;const o=new gy;await o.lvlManager.openLevel("Cosmic Map");const e=(i=o.ecManager.entities.find(r=>r.getComponent(Ct)))==null?void 0:i.components[Ct.typeID].data.scene;console.log(e.children);let t;function n(r){t||(t=r);const s=r-t;o.execute(s,r),t=r,requestAnimationFrame(n)}n(0)};export{Bu as A,kt as B,ze as C,si as D,Sa as E,qx as F,tt as G,ay as H,nd as I,ss as J,ty as K,Ta as L,Wn as M,wt as N,Sr as O,Rh as P,un as Q,dn as R,Re as S,Qe as T,Ai as U,F as V,Xt as a,Wt as b,E_ as c,cn as d,Cn as e,zu as f,Cr as g,vi as h,ri as i,Vo as j,ya as k,ny as l,Gh as m,Fv as n,yy as o,Ft as p,Ht as q,My as r,Al as s,xn as t,Ss as u,iy as v,Gx as w,ed as x,Vx as y,Hu as z};
