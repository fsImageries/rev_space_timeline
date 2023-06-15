var oh=Object.defineProperty;var lh=(l,e,t)=>e in l?oh(l,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):l[e]=t;var we=(l,e,t)=>(lh(l,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const mo="151",fi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},pi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},ch=0,Ho=1,uh=2,tu=1,nu=2,Lr=3,mn=0,Nt=1,Kt=2,Vn=0,Gi=1,Wo=2,jo=3,Xo=4,hh=5,ki=100,dh=101,fh=102,Yo=103,qo=104,ph=200,mh=201,gh=202,_h=203,iu=204,ru=205,vh=206,xh=207,yh=208,bh=209,Mh=210,Sh=0,wh=1,Th=2,qa=3,Ah=4,Eh=5,Ch=6,Lh=7,su=0,Rh=1,Ph=2,Rn=0,Dh=1,Ih=2,Uh=3,Oh=4,Fh=5,au=300,Xi=301,Yi=302,zs=303,Ka=304,Ws=306,qi=1e3,Zt=1001,Gs=1002,yt=1003,Za=1004,Os=1005,Pt=1006,ou=1007,ni=1008,ii=1009,Nh=1010,kh=1011,lu=1012,Bh=1013,Qn=1014,Gn=1015,Or=1016,zh=1017,Gh=1018,Vi=1020,Vh=1021,Jt=1023,Hh=1024,Wh=1025,ei=1026,Ki=1027,jh=1028,Xh=1029,Yh=1030,qh=1031,Kh=1033,la=33776,ca=33777,ua=33778,ha=33779,Ko=35840,Zo=35841,Jo=35842,$o=35843,Zh=36196,Qo=37492,el=37496,tl=37808,nl=37809,il=37810,rl=37811,sl=37812,al=37813,ol=37814,ll=37815,cl=37816,ul=37817,hl=37818,dl=37819,fl=37820,pl=37821,da=36492,Jh=36283,ml=36284,gl=36285,_l=36286,Fr=2300,Zi=2301,fa=2302,vl=2400,xl=2401,yl=2402,$h=2500,Qh=0,cu=1,Ja=2,ri=3e3,nt=3001,ed=3200,uu=3201,hu=0,td=1,dn="srgb",Nr="srgb-linear",du="display-p3",pa=7680,nd=519,$a=35044,bl="300 es",Qa=1035;class oi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,s=i.length;r<s;r++)i[r].call(this,e);e.target=null}}}const Lt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ml=1234567;const Pr=Math.PI/180,Ji=180/Math.PI;function on(){const l=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Lt[l&255]+Lt[l>>8&255]+Lt[l>>16&255]+Lt[l>>24&255]+"-"+Lt[e&255]+Lt[e>>8&255]+"-"+Lt[e>>16&15|64]+Lt[e>>24&255]+"-"+Lt[t&63|128]+Lt[t>>8&255]+"-"+Lt[t>>16&255]+Lt[t>>24&255]+Lt[n&255]+Lt[n>>8&255]+Lt[n>>16&255]+Lt[n>>24&255]).toLowerCase()}function St(l,e,t){return Math.max(e,Math.min(t,l))}function go(l,e){return(l%e+e)%e}function id(l,e,t,n,i){return n+(l-e)*(i-n)/(t-e)}function rd(l,e,t){return l!==e?(t-l)/(e-l):0}function Dr(l,e,t){return(1-t)*l+t*e}function sd(l,e,t,n){return Dr(l,e,1-Math.exp(-t*n))}function ad(l,e=1){return e-Math.abs(go(l,e*2)-e)}function od(l,e,t){return l<=e?0:l>=t?1:(l=(l-e)/(t-e),l*l*(3-2*l))}function ld(l,e,t){return l<=e?0:l>=t?1:(l=(l-e)/(t-e),l*l*l*(l*(l*6-15)+10))}function cd(l,e){return l+Math.floor(Math.random()*(e-l+1))}function ud(l,e){return l+Math.random()*(e-l)}function hd(l){return l*(.5-Math.random())}function dd(l){l!==void 0&&(Ml=l);let e=Ml+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function fd(l){return l*Pr}function pd(l){return l*Ji}function eo(l){return(l&l-1)===0&&l!==0}function fu(l){return Math.pow(2,Math.ceil(Math.log(l)/Math.LN2))}function pu(l){return Math.pow(2,Math.floor(Math.log(l)/Math.LN2))}function md(l,e,t,n,i){const r=Math.cos,s=Math.sin,a=r(t/2),o=s(t/2),c=r((e+n)/2),u=s((e+n)/2),h=r((e-n)/2),d=s((e-n)/2),p=r((n-e)/2),g=s((n-e)/2);switch(i){case"XYX":l.set(a*u,o*h,o*d,a*c);break;case"YZY":l.set(o*d,a*u,o*h,a*c);break;case"ZXZ":l.set(o*h,o*d,a*u,a*c);break;case"XZX":l.set(a*u,o*g,o*p,a*c);break;case"YXY":l.set(o*p,a*u,o*g,a*c);break;case"ZYZ":l.set(o*g,o*p,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Cn(l,e){switch(e.constructor){case Float32Array:return l;case Uint16Array:return l/65535;case Uint8Array:return l/255;case Int16Array:return Math.max(l/32767,-1);case Int8Array:return Math.max(l/127,-1);default:throw new Error("Invalid component type.")}}function lt(l,e){switch(e.constructor){case Float32Array:return l;case Uint16Array:return Math.round(l*65535);case Uint8Array:return Math.round(l*255);case Int16Array:return Math.round(l*32767);case Int8Array:return Math.round(l*127);default:throw new Error("Invalid component type.")}}const gd={DEG2RAD:Pr,RAD2DEG:Ji,generateUUID:on,clamp:St,euclideanModulo:go,mapLinear:id,inverseLerp:rd,lerp:Dr,damp:sd,pingpong:ad,smoothstep:od,smootherstep:ld,randInt:cd,randFloat:ud,randFloatSpread:hd,seededRandom:dd,degToRad:fd,radToDeg:pd,isPowerOfTwo:eo,ceilPowerOfTwo:fu,floorPowerOfTwo:pu,setQuaternionFromProperEuler:md,normalize:lt,denormalize:Cn};class Ue{constructor(e=0,t=0){Ue.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(St(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,s=this.y-e.y;return this.x=r*n-s*i+e.x,this.y=r*i+s*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ke{constructor(){Ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,r,s,a,o,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=r,u[5]=o,u[6]=n,u[7]=s,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,s=n[0],a=n[3],o=n[6],c=n[1],u=n[4],h=n[7],d=n[2],p=n[5],g=n[8],_=i[0],m=i[3],f=i[6],v=i[1],y=i[4],x=i[7],b=i[2],T=i[5],C=i[8];return r[0]=s*_+a*v+o*b,r[3]=s*m+a*y+o*T,r[6]=s*f+a*x+o*C,r[1]=c*_+u*v+h*b,r[4]=c*m+u*y+h*T,r[7]=c*f+u*x+h*C,r[2]=d*_+p*v+g*b,r[5]=d*m+p*y+g*T,r[8]=d*f+p*x+g*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],s=e[4],a=e[5],o=e[6],c=e[7],u=e[8];return t*s*u-t*a*c-n*r*u+n*a*o+i*r*c-i*s*o}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],s=e[4],a=e[5],o=e[6],c=e[7],u=e[8],h=u*s-a*c,d=a*o-u*r,p=c*r-s*o,g=t*h+n*d+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(i*c-u*n)*_,e[2]=(a*n-i*s)*_,e[3]=d*_,e[4]=(u*t-i*o)*_,e[5]=(i*r-a*t)*_,e[6]=p*_,e[7]=(n*o-c*t)*_,e[8]=(s*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,s,a){const o=Math.cos(r),c=Math.sin(r);return this.set(n*o,n*c,-n*(o*s+c*a)+s+e,-i*c,i*o,-i*(-c*s+o*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(ma.makeScale(e,t)),this}rotate(e){return this.premultiply(ma.makeRotation(-e)),this}translate(e,t){return this.premultiply(ma.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ma=new Ke;function mu(l){for(let e=l.length-1;e>=0;--e)if(l[e]>=65535)return!0;return!1}function kr(l){return document.createElementNS("http://www.w3.org/1999/xhtml",l)}function Hi(l){return l<.04045?l*.0773993808:Math.pow(l*.9478672986+.0521327014,2.4)}function ga(l){return l<.0031308?l*12.92:1.055*Math.pow(l,.41666)-.055}const _d=new Ke().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),vd=new Ke().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function xd(l){return l.convertSRGBToLinear().applyMatrix3(vd)}function yd(l){return l.applyMatrix3(_d).convertLinearToSRGB()}const bd={[Nr]:l=>l,[dn]:l=>l.convertSRGBToLinear(),[du]:xd},Md={[Nr]:l=>l,[dn]:l=>l.convertLinearToSRGB(),[du]:yd},Ht={enabled:!1,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(l){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!l},get workingColorSpace(){return Nr},set workingColorSpace(l){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(l,e,t){if(this.enabled===!1||e===t||!e||!t)return l;const n=bd[e],i=Md[t];if(n===void 0||i===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return i(n(l))},fromWorkingColorSpace:function(l,e){return this.convert(l,this.workingColorSpace,e)},toWorkingColorSpace:function(l,e){return this.convert(l,e,this.workingColorSpace)}};let mi;class gu{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{mi===void 0&&(mi=kr("canvas")),mi.width=e.width,mi.height=e.height;const n=mi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=mi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=kr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let s=0;s<r.length;s++)r[s]=Hi(r[s]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Hi(t[n]/255)*255):t[n]=Hi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class _u{constructor(e=null){this.isSource=!0,this.uuid=on(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let s=0,a=i.length;s<a;s++)i[s].isDataTexture?r.push(_a(i[s].image)):r.push(_a(i[s]))}else r=_a(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function _a(l){return typeof HTMLImageElement<"u"&&l instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&l instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&l instanceof ImageBitmap?gu.getDataURL(l):l.data?{data:Array.from(l.data),width:l.width,height:l.height,type:l.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Sd=0;class bt extends oi{constructor(e=bt.DEFAULT_IMAGE,t=bt.DEFAULT_MAPPING,n=Zt,i=Zt,r=Pt,s=ni,a=Jt,o=ii,c=bt.DEFAULT_ANISOTROPY,u=ri){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Sd++}),this.uuid=on(),this.name="",this.source=new _u(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=s,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=o,this.offset=new Ue(0,0),this.repeat=new Ue(1,1),this.center=new Ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==au)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case qi:e.x=e.x-Math.floor(e.x);break;case Zt:e.x=e.x<0?0:1;break;case Gs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case qi:e.y=e.y-Math.floor(e.y);break;case Zt:e.y=e.y<0?0:1;break;case Gs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}bt.DEFAULT_IMAGE=null;bt.DEFAULT_MAPPING=au;bt.DEFAULT_ANISOTROPY=1;class at{constructor(e=0,t=0,n=0,i=1){at.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i+s[12]*r,this.y=s[1]*t+s[5]*n+s[9]*i+s[13]*r,this.z=s[2]*t+s[6]*n+s[10]*i+s[14]*r,this.w=s[3]*t+s[7]*n+s[11]*i+s[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const o=e.elements,c=o[0],u=o[4],h=o[8],d=o[1],p=o[5],g=o[9],_=o[2],m=o[6],f=o[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,x=(p+1)/2,b=(f+1)/2,T=(u+d)/4,C=(h+_)/4,L=(g+m)/4;return y>x&&y>b?y<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(y),i=T/n,r=C/n):x>b?x<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(x),n=T/i,r=L/i):b<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(b),n=C/r,i=L/r),this.set(n,i,r,t),this}let v=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(h-_)/v,this.z=(d-u)/v,this.w=Math.acos((c+p+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class si extends oi{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new at(0,0,e,t),this.scissorTest=!1,this.viewport=new at(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new bt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Pt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new _u(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class vu extends bt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=yt,this.minFilter=yt,this.wrapR=Zt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class wd extends bt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=yt,this.minFilter=yt,this.wrapR=Zt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Qt{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,s,a){let o=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const d=r[s+0],p=r[s+1],g=r[s+2],_=r[s+3];if(a===0){e[t+0]=o,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=p,e[t+2]=g,e[t+3]=_;return}if(h!==_||o!==d||c!==p||u!==g){let m=1-a;const f=o*d+c*p+u*g+h*_,v=f>=0?1:-1,y=1-f*f;if(y>Number.EPSILON){const b=Math.sqrt(y),T=Math.atan2(b,f*v);m=Math.sin(m*T)/b,a=Math.sin(a*T)/b}const x=a*v;if(o=o*m+d*x,c=c*m+p*x,u=u*m+g*x,h=h*m+_*x,m===1-a){const b=1/Math.sqrt(o*o+c*c+u*u+h*h);o*=b,c*=b,u*=b,h*=b}}e[t]=o,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,r,s){const a=n[i],o=n[i+1],c=n[i+2],u=n[i+3],h=r[s],d=r[s+1],p=r[s+2],g=r[s+3];return e[t]=a*g+u*h+o*p-c*d,e[t+1]=o*g+u*d+c*h-a*p,e[t+2]=c*g+u*p+a*d-o*h,e[t+3]=u*g-a*h-o*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,r=e._z,s=e._order,a=Math.cos,o=Math.sin,c=a(n/2),u=a(i/2),h=a(r/2),d=o(n/2),p=o(i/2),g=o(r/2);switch(s){case"XYZ":this._x=d*u*h+c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h-d*p*g;break;case"YXZ":this._x=d*u*h+c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h+d*p*g;break;case"ZXY":this._x=d*u*h-c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h-d*p*g;break;case"ZYX":this._x=d*u*h-c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h+d*p*g;break;case"YZX":this._x=d*u*h+c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h-d*p*g;break;case"XZY":this._x=d*u*h-c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],s=t[1],a=t[5],o=t[9],c=t[2],u=t[6],h=t[10],d=n+a+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-o)*p,this._y=(r-c)*p,this._z=(s-i)*p}else if(n>a&&n>h){const p=2*Math.sqrt(1+n-a-h);this._w=(u-o)/p,this._x=.25*p,this._y=(i+s)/p,this._z=(r+c)/p}else if(a>h){const p=2*Math.sqrt(1+a-n-h);this._w=(r-c)/p,this._x=(i+s)/p,this._y=.25*p,this._z=(o+u)/p}else{const p=2*Math.sqrt(1+h-n-a);this._w=(s-i)/p,this._x=(r+c)/p,this._y=(o+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(St(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,s=e._w,a=t._x,o=t._y,c=t._z,u=t._w;return this._x=n*u+s*a+i*c-r*o,this._y=i*u+s*o+r*a-n*c,this._z=r*u+s*c+n*o-i*a,this._w=s*u-n*a-i*o-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,s=this._w;let a=s*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=s,this._x=n,this._y=i,this._z=r,this;const o=1-a*a;if(o<=Number.EPSILON){const p=1-t;return this._w=p*s+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(o),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=s*h+this._w*d,this._x=n*h+this._x*d,this._y=i*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(e=0,t=0,n=0){k.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Sl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Sl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,s=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*s,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*s,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*s,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,s=e.y,a=e.z,o=e.w,c=o*t+s*i-a*n,u=o*n+a*t-r*i,h=o*i+r*n-s*t,d=-r*t-s*n-a*i;return this.x=c*o+d*-r+u*-a-h*-s,this.y=u*o+d*-s+h*-r-c*-a,this.z=h*o+d*-a+c*-s-u*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,s=t.x,a=t.y,o=t.z;return this.x=i*o-r*a,this.y=r*s-n*o,this.z=n*a-i*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return va.copy(this).projectOnVector(e),this.sub(va)}reflect(e){return this.sub(va.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(St(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const va=new k,Sl=new Qt;class gn{constructor(e=new k(1/0,1/0,1/0),t=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Mn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Mn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Mn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),gi.copy(e.boundingBox),gi.applyMatrix4(e.matrixWorld),this.union(gi);else{const i=e.geometry;if(i!==void 0)if(t&&i.attributes!==void 0&&i.attributes.position!==void 0){const r=i.attributes.position;for(let s=0,a=r.count;s<a;s++)Mn.fromBufferAttribute(r,s).applyMatrix4(e.matrixWorld),this.expandByPoint(Mn)}else i.boundingBox===null&&i.computeBoundingBox(),gi.copy(i.boundingBox),gi.applyMatrix4(e.matrixWorld),this.union(gi)}const n=e.children;for(let i=0,r=n.length;i<r;i++)this.expandByObject(n[i],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Mn),Mn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(gr),is.subVectors(this.max,gr),_i.subVectors(e.a,gr),vi.subVectors(e.b,gr),xi.subVectors(e.c,gr),Un.subVectors(vi,_i),On.subVectors(xi,vi),Xn.subVectors(_i,xi);let t=[0,-Un.z,Un.y,0,-On.z,On.y,0,-Xn.z,Xn.y,Un.z,0,-Un.x,On.z,0,-On.x,Xn.z,0,-Xn.x,-Un.y,Un.x,0,-On.y,On.x,0,-Xn.y,Xn.x,0];return!xa(t,_i,vi,xi,is)||(t=[1,0,0,0,1,0,0,0,1],!xa(t,_i,vi,xi,is))?!1:(rs.crossVectors(Un,On),t=[rs.x,rs.y,rs.z],xa(t,_i,vi,xi,is))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Mn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Mn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(bn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),bn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),bn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),bn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),bn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),bn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),bn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),bn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(bn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const bn=[new k,new k,new k,new k,new k,new k,new k,new k],Mn=new k,gi=new gn,_i=new k,vi=new k,xi=new k,Un=new k,On=new k,Xn=new k,gr=new k,is=new k,rs=new k,Yn=new k;function xa(l,e,t,n,i){for(let r=0,s=l.length-3;r<=s;r+=3){Yn.fromArray(l,r);const a=i.x*Math.abs(Yn.x)+i.y*Math.abs(Yn.y)+i.z*Math.abs(Yn.z),o=e.dot(Yn),c=t.dot(Yn),u=n.dot(Yn);if(Math.max(-Math.max(o,c,u),Math.min(o,c,u))>a)return!1}return!0}const Td=new gn,_r=new k,ya=new k;class _n{constructor(e=new k,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Td.setFromPoints(e).getCenter(n);let i=0;for(let r=0,s=e.length;r<s;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;_r.subVectors(e,this.center);const t=_r.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(_r,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ya.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(_r.copy(e.center).add(ya)),this.expandByPoint(_r.copy(e.center).sub(ya))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Sn=new k,ba=new k,ss=new k,Fn=new k,Ma=new k,as=new k,Sa=new k;class js{constructor(e=new k,t=new k(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Sn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Sn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Sn.copy(this.origin).addScaledVector(this.direction,t),Sn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){ba.copy(e).add(t).multiplyScalar(.5),ss.copy(t).sub(e).normalize(),Fn.copy(this.origin).sub(ba);const r=e.distanceTo(t)*.5,s=-this.direction.dot(ss),a=Fn.dot(this.direction),o=-Fn.dot(ss),c=Fn.lengthSq(),u=Math.abs(1-s*s);let h,d,p,g;if(u>0)if(h=s*o-a,d=s*a-o,g=r*u,h>=0)if(d>=-g)if(d<=g){const _=1/u;h*=_,d*=_,p=h*(h+s*d+2*a)+d*(s*h+d+2*o)+c}else d=r,h=Math.max(0,-(s*d+a)),p=-h*h+d*(d+2*o)+c;else d=-r,h=Math.max(0,-(s*d+a)),p=-h*h+d*(d+2*o)+c;else d<=-g?(h=Math.max(0,-(-s*r+a)),d=h>0?-r:Math.min(Math.max(-r,-o),r),p=-h*h+d*(d+2*o)+c):d<=g?(h=0,d=Math.min(Math.max(-r,-o),r),p=d*(d+2*o)+c):(h=Math.max(0,-(s*r+a)),d=h>0?r:Math.min(Math.max(-r,-o),r),p=-h*h+d*(d+2*o)+c);else d=s>0?-r:r,h=Math.max(0,-(s*d+a)),p=-h*h+d*(d+2*o)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(ba).addScaledVector(ss,d),p}intersectSphere(e,t){Sn.subVectors(e.center,this.origin);const n=Sn.dot(this.direction),i=Sn.dot(Sn)-n*n,r=e.radius*e.radius;if(i>r)return null;const s=Math.sqrt(r-i),a=n-s,o=n+s;return o<0?null:a<0?this.at(o,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,s,a,o;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,s=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,s=(e.min.y-d.y)*u),n>s||r>i||((r>n||isNaN(n))&&(n=r),(s<i||isNaN(i))&&(i=s),h>=0?(a=(e.min.z-d.z)*h,o=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,o=(e.min.z-d.z)*h),n>o||a>i)||((a>n||n!==n)&&(n=a),(o<i||i!==i)&&(i=o),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Sn)!==null}intersectTriangle(e,t,n,i,r){Ma.subVectors(t,e),as.subVectors(n,e),Sa.crossVectors(Ma,as);let s=this.direction.dot(Sa),a;if(s>0){if(i)return null;a=1}else if(s<0)a=-1,s=-s;else return null;Fn.subVectors(this.origin,e);const o=a*this.direction.dot(as.crossVectors(Fn,as));if(o<0)return null;const c=a*this.direction.dot(Ma.cross(Fn));if(c<0||o+c>s)return null;const u=-a*Fn.dot(Sa);return u<0?null:this.at(u/s,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Xe{constructor(){Xe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,r,s,a,o,c,u,h,d,p,g,_,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=i,f[1]=r,f[5]=s,f[9]=a,f[13]=o,f[2]=c,f[6]=u,f[10]=h,f[14]=d,f[3]=p,f[7]=g,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Xe().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/yi.setFromMatrixColumn(e,0).length(),r=1/yi.setFromMatrixColumn(e,1).length(),s=1/yi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*s,t[9]=n[9]*s,t[10]=n[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,s=Math.cos(n),a=Math.sin(n),o=Math.cos(i),c=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const d=s*u,p=s*h,g=a*u,_=a*h;t[0]=o*u,t[4]=-o*h,t[8]=c,t[1]=p+g*c,t[5]=d-_*c,t[9]=-a*o,t[2]=_-d*c,t[6]=g+p*c,t[10]=s*o}else if(e.order==="YXZ"){const d=o*u,p=o*h,g=c*u,_=c*h;t[0]=d+_*a,t[4]=g*a-p,t[8]=s*c,t[1]=s*h,t[5]=s*u,t[9]=-a,t[2]=p*a-g,t[6]=_+d*a,t[10]=s*o}else if(e.order==="ZXY"){const d=o*u,p=o*h,g=c*u,_=c*h;t[0]=d-_*a,t[4]=-s*h,t[8]=g+p*a,t[1]=p+g*a,t[5]=s*u,t[9]=_-d*a,t[2]=-s*c,t[6]=a,t[10]=s*o}else if(e.order==="ZYX"){const d=s*u,p=s*h,g=a*u,_=a*h;t[0]=o*u,t[4]=g*c-p,t[8]=d*c+_,t[1]=o*h,t[5]=_*c+d,t[9]=p*c-g,t[2]=-c,t[6]=a*o,t[10]=s*o}else if(e.order==="YZX"){const d=s*o,p=s*c,g=a*o,_=a*c;t[0]=o*u,t[4]=_-d*h,t[8]=g*h+p,t[1]=h,t[5]=s*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*h+g,t[10]=d-_*h}else if(e.order==="XZY"){const d=s*o,p=s*c,g=a*o,_=a*c;t[0]=o*u,t[4]=-h,t[8]=c*u,t[1]=d*h+_,t[5]=s*u,t[9]=p*h-g,t[2]=g*h-p,t[6]=a*u,t[10]=_*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ad,e,Ed)}lookAt(e,t,n){const i=this.elements;return Wt.subVectors(e,t),Wt.lengthSq()===0&&(Wt.z=1),Wt.normalize(),Nn.crossVectors(n,Wt),Nn.lengthSq()===0&&(Math.abs(n.z)===1?Wt.x+=1e-4:Wt.z+=1e-4,Wt.normalize(),Nn.crossVectors(n,Wt)),Nn.normalize(),os.crossVectors(Wt,Nn),i[0]=Nn.x,i[4]=os.x,i[8]=Wt.x,i[1]=Nn.y,i[5]=os.y,i[9]=Wt.y,i[2]=Nn.z,i[6]=os.z,i[10]=Wt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,s=n[0],a=n[4],o=n[8],c=n[12],u=n[1],h=n[5],d=n[9],p=n[13],g=n[2],_=n[6],m=n[10],f=n[14],v=n[3],y=n[7],x=n[11],b=n[15],T=i[0],C=i[4],L=i[8],S=i[12],E=i[1],J=i[5],D=i[9],P=i[13],I=i[2],B=i[6],q=i[10],ie=i[14],Z=i[3],H=i[7],j=i[11],F=i[15];return r[0]=s*T+a*E+o*I+c*Z,r[4]=s*C+a*J+o*B+c*H,r[8]=s*L+a*D+o*q+c*j,r[12]=s*S+a*P+o*ie+c*F,r[1]=u*T+h*E+d*I+p*Z,r[5]=u*C+h*J+d*B+p*H,r[9]=u*L+h*D+d*q+p*j,r[13]=u*S+h*P+d*ie+p*F,r[2]=g*T+_*E+m*I+f*Z,r[6]=g*C+_*J+m*B+f*H,r[10]=g*L+_*D+m*q+f*j,r[14]=g*S+_*P+m*ie+f*F,r[3]=v*T+y*E+x*I+b*Z,r[7]=v*C+y*J+x*B+b*H,r[11]=v*L+y*D+x*q+b*j,r[15]=v*S+y*P+x*ie+b*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],s=e[1],a=e[5],o=e[9],c=e[13],u=e[2],h=e[6],d=e[10],p=e[14],g=e[3],_=e[7],m=e[11],f=e[15];return g*(+r*o*h-i*c*h-r*a*d+n*c*d+i*a*p-n*o*p)+_*(+t*o*p-t*c*d+r*s*d-i*s*p+i*c*u-r*o*u)+m*(+t*c*h-t*a*p-r*s*h+n*s*p+r*a*u-n*c*u)+f*(-i*a*u-t*o*h+t*a*d+i*s*h-n*s*d+n*o*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],s=e[4],a=e[5],o=e[6],c=e[7],u=e[8],h=e[9],d=e[10],p=e[11],g=e[12],_=e[13],m=e[14],f=e[15],v=h*m*c-_*d*c+_*o*p-a*m*p-h*o*f+a*d*f,y=g*d*c-u*m*c-g*o*p+s*m*p+u*o*f-s*d*f,x=u*_*c-g*h*c+g*a*p-s*_*p-u*a*f+s*h*f,b=g*h*o-u*_*o-g*a*d+s*_*d+u*a*m-s*h*m,T=t*v+n*y+i*x+r*b;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/T;return e[0]=v*C,e[1]=(_*d*r-h*m*r-_*i*p+n*m*p+h*i*f-n*d*f)*C,e[2]=(a*m*r-_*o*r+_*i*c-n*m*c-a*i*f+n*o*f)*C,e[3]=(h*o*r-a*d*r-h*i*c+n*d*c+a*i*p-n*o*p)*C,e[4]=y*C,e[5]=(u*m*r-g*d*r+g*i*p-t*m*p-u*i*f+t*d*f)*C,e[6]=(g*o*r-s*m*r-g*i*c+t*m*c+s*i*f-t*o*f)*C,e[7]=(s*d*r-u*o*r+u*i*c-t*d*c-s*i*p+t*o*p)*C,e[8]=x*C,e[9]=(g*h*r-u*_*r-g*n*p+t*_*p+u*n*f-t*h*f)*C,e[10]=(s*_*r-g*a*r+g*n*c-t*_*c-s*n*f+t*a*f)*C,e[11]=(u*a*r-s*h*r-u*n*c+t*h*c+s*n*p-t*a*p)*C,e[12]=b*C,e[13]=(u*_*i-g*h*i+g*n*d-t*_*d-u*n*m+t*h*m)*C,e[14]=(g*a*i-s*_*i-g*n*o+t*_*o+s*n*m-t*a*m)*C,e[15]=(s*h*i-u*a*i+u*n*o-t*h*o-s*n*d+t*a*d)*C,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,s=e.x,a=e.y,o=e.z,c=r*s,u=r*a;return this.set(c*s+n,c*a-i*o,c*o+i*a,0,c*a+i*o,u*a+n,u*o-i*s,0,c*o-i*a,u*o+i*s,r*o*o+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,s){return this.set(1,n,r,0,e,1,s,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,s=t._y,a=t._z,o=t._w,c=r+r,u=s+s,h=a+a,d=r*c,p=r*u,g=r*h,_=s*u,m=s*h,f=a*h,v=o*c,y=o*u,x=o*h,b=n.x,T=n.y,C=n.z;return i[0]=(1-(_+f))*b,i[1]=(p+x)*b,i[2]=(g-y)*b,i[3]=0,i[4]=(p-x)*T,i[5]=(1-(d+f))*T,i[6]=(m+v)*T,i[7]=0,i[8]=(g+y)*C,i[9]=(m-v)*C,i[10]=(1-(d+_))*C,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=yi.set(i[0],i[1],i[2]).length();const s=yi.set(i[4],i[5],i[6]).length(),a=yi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],rn.copy(this);const c=1/r,u=1/s,h=1/a;return rn.elements[0]*=c,rn.elements[1]*=c,rn.elements[2]*=c,rn.elements[4]*=u,rn.elements[5]*=u,rn.elements[6]*=u,rn.elements[8]*=h,rn.elements[9]*=h,rn.elements[10]*=h,t.setFromRotationMatrix(rn),n.x=r,n.y=s,n.z=a,this}makePerspective(e,t,n,i,r,s){const a=this.elements,o=2*r/(t-e),c=2*r/(n-i),u=(t+e)/(t-e),h=(n+i)/(n-i),d=-(s+r)/(s-r),p=-2*s*r/(s-r);return a[0]=o,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=c,a[9]=h,a[13]=0,a[2]=0,a[6]=0,a[10]=d,a[14]=p,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,i,r,s){const a=this.elements,o=1/(t-e),c=1/(n-i),u=1/(s-r),h=(t+e)*o,d=(n+i)*c,p=(s+r)*u;return a[0]=2*o,a[4]=0,a[8]=0,a[12]=-h,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-d,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-p,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const yi=new k,rn=new Xe,Ad=new k(0,0,0),Ed=new k(1,1,1),Nn=new k,os=new k,Wt=new k,wl=new Xe,Tl=new Qt;class Xs{constructor(e=0,t=0,n=0,i=Xs.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],s=i[4],a=i[8],o=i[1],c=i[5],u=i[9],h=i[2],d=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(St(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-s,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-St(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(o,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(St(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(o,r));break;case"ZYX":this._y=Math.asin(-St(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(o,r)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(St(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-St(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return wl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(wl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Tl.setFromEuler(this),this.setFromQuaternion(Tl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Xs.DEFAULT_ORDER="XYZ";class _o{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Cd=0;const Al=new k,bi=new Qt,wn=new Xe,ls=new k,vr=new k,Ld=new k,Rd=new Qt,El=new k(1,0,0),Cl=new k(0,1,0),Ll=new k(0,0,1),Pd={type:"added"},Rl={type:"removed"};class ut extends oi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Cd++}),this.uuid=on(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ut.DEFAULT_UP.clone();const e=new k,t=new Xs,n=new Qt,i=new k(1,1,1);function r(){n.setFromEuler(t,!1)}function s(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Xe},normalMatrix:{value:new Ke}}),this.matrix=new Xe,this.matrixWorld=new Xe,this.matrixAutoUpdate=ut.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new _o,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return bi.setFromAxisAngle(e,t),this.quaternion.multiply(bi),this}rotateOnWorldAxis(e,t){return bi.setFromAxisAngle(e,t),this.quaternion.premultiply(bi),this}rotateX(e){return this.rotateOnAxis(El,e)}rotateY(e){return this.rotateOnAxis(Cl,e)}rotateZ(e){return this.rotateOnAxis(Ll,e)}translateOnAxis(e,t){return Al.copy(e).applyQuaternion(this.quaternion),this.position.add(Al.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(El,e)}translateY(e){return this.translateOnAxis(Cl,e)}translateZ(e){return this.translateOnAxis(Ll,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(wn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ls.copy(e):ls.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),vr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?wn.lookAt(vr,ls,this.up):wn.lookAt(ls,vr,this.up),this.quaternion.setFromRotationMatrix(wn),i&&(wn.extractRotation(i.matrixWorld),bi.setFromRotationMatrix(wn),this.quaternion.premultiply(bi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Pd)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Rl)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Rl)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),wn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),wn.multiply(e.parent.matrixWorld)),e.applyMatrix4(wn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const s=this.children[n].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,r=this.children.length;i<r;i++){const s=this.children[i].getObjectsByProperty(e,t);s.length>0&&(n=n.concat(s))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vr,e,Ld),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vr,Rd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,s=i.length;r<s;r++){const a=i[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function r(a,o){return a[o.uuid]===void 0&&(a[o.uuid]=o.toJSON(e)),o.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const o=a.shapes;if(Array.isArray(o))for(let c=0,u=o.length;c<u;c++){const h=o[c];r(e.shapes,h)}else r(e.shapes,o)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let o=0,c=this.material.length;o<c;o++)a.push(r(e.materials,this.material[o]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const o=this.animations[a];i.animations.push(r(e.animations,o))}}if(t){const a=s(e.geometries),o=s(e.materials),c=s(e.textures),u=s(e.images),h=s(e.shapes),d=s(e.skeletons),p=s(e.animations),g=s(e.nodes);a.length>0&&(n.geometries=a),o.length>0&&(n.materials=o),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function s(a){const o=[];for(const c in a){const u=a[c];delete u.metadata,o.push(u)}return o}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}ut.DEFAULT_UP=new k(0,1,0);ut.DEFAULT_MATRIX_AUTO_UPDATE=!0;ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const sn=new k,Tn=new k,wa=new k,An=new k,Mi=new k,Si=new k,Pl=new k,Ta=new k,Aa=new k,Ea=new k;let cs=!1;class qt{constructor(e=new k,t=new k,n=new k){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),sn.subVectors(e,t),i.cross(sn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){sn.subVectors(i,t),Tn.subVectors(n,t),wa.subVectors(e,t);const s=sn.dot(sn),a=sn.dot(Tn),o=sn.dot(wa),c=Tn.dot(Tn),u=Tn.dot(wa),h=s*c-a*a;if(h===0)return r.set(-2,-1,-1);const d=1/h,p=(c*o-a*u)*d,g=(s*u-a*o)*d;return r.set(1-p-g,g,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,An),An.x>=0&&An.y>=0&&An.x+An.y<=1}static getUV(e,t,n,i,r,s,a,o){return cs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),cs=!0),this.getInterpolation(e,t,n,i,r,s,a,o)}static getInterpolation(e,t,n,i,r,s,a,o){return this.getBarycoord(e,t,n,i,An),o.setScalar(0),o.addScaledVector(r,An.x),o.addScaledVector(s,An.y),o.addScaledVector(a,An.z),o}static isFrontFacing(e,t,n,i){return sn.subVectors(n,t),Tn.subVectors(e,t),sn.cross(Tn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return sn.subVectors(this.c,this.b),Tn.subVectors(this.a,this.b),sn.cross(Tn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return qt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return qt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return cs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),cs=!0),qt.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}getInterpolation(e,t,n,i,r){return qt.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return qt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return qt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let s,a;Mi.subVectors(i,n),Si.subVectors(r,n),Ta.subVectors(e,n);const o=Mi.dot(Ta),c=Si.dot(Ta);if(o<=0&&c<=0)return t.copy(n);Aa.subVectors(e,i);const u=Mi.dot(Aa),h=Si.dot(Aa);if(u>=0&&h<=u)return t.copy(i);const d=o*h-u*c;if(d<=0&&o>=0&&u<=0)return s=o/(o-u),t.copy(n).addScaledVector(Mi,s);Ea.subVectors(e,r);const p=Mi.dot(Ea),g=Si.dot(Ea);if(g>=0&&p<=g)return t.copy(r);const _=p*c-o*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(Si,a);const m=u*g-p*h;if(m<=0&&h-u>=0&&p-g>=0)return Pl.subVectors(r,i),a=(h-u)/(h-u+(p-g)),t.copy(i).addScaledVector(Pl,a);const f=1/(m+_+d);return s=_*f,a=d*f,t.copy(n).addScaledVector(Mi,s).addScaledVector(Si,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Dd=0;class ln extends oi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Dd++}),this.uuid=on(),this.name="",this.type="Material",this.blending=Gi,this.side=mn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=iu,this.blendDst=ru,this.blendEquation=ki,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=qa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=nd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=pa,this.stencilZFail=pa,this.stencilZPass=pa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Gi&&(n.blending=this.blending),this.side!==mn&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const s=[];for(const a in r){const o=r[a];delete o.metadata,s.push(o)}return s}if(t){const r=i(e.textures),s=i(e.images);r.length>0&&(n.textures=r),s.length>0&&(n.images=s)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const xu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},an={h:0,s:0,l:0},us={h:0,s:0,l:0};function Ca(l,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?l+(e-l)*6*t:t<1/2?e:t<2/3?l+(e-l)*6*(2/3-t):l}class Be{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=dn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ht.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Ht.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ht.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Ht.workingColorSpace){if(e=go(e,1),t=St(t,0,1),n=St(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,s=2*n-r;this.r=Ca(s,r,e+1/3),this.g=Ca(s,r,e),this.b=Ca(s,r,e-1/3)}return Ht.toWorkingColorSpace(this,i),this}setStyle(e,t=dn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const s=i[1],a=i[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,Ht.toWorkingColorSpace(this,t),n(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,Ht.toWorkingColorSpace(this,t),n(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const o=parseFloat(r[1])/360,c=parseFloat(r[2])/100,u=parseFloat(r[3])/100;return n(r[4]),this.setHSL(o,c,u,t)}break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],s=r.length;if(s===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=dn){const n=xu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Hi(e.r),this.g=Hi(e.g),this.b=Hi(e.b),this}copyLinearToSRGB(e){return this.r=ga(e.r),this.g=ga(e.g),this.b=ga(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=dn){return Ht.fromWorkingColorSpace(Rt.copy(this),e),St(Rt.r*255,0,255)<<16^St(Rt.g*255,0,255)<<8^St(Rt.b*255,0,255)<<0}getHexString(e=dn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ht.workingColorSpace){Ht.fromWorkingColorSpace(Rt.copy(this),t);const n=Rt.r,i=Rt.g,r=Rt.b,s=Math.max(n,i,r),a=Math.min(n,i,r);let o,c;const u=(a+s)/2;if(a===s)o=0,c=0;else{const h=s-a;switch(c=u<=.5?h/(s+a):h/(2-s-a),s){case n:o=(i-r)/h+(i<r?6:0);break;case i:o=(r-n)/h+2;break;case r:o=(n-i)/h+4;break}o/=6}return e.h=o,e.s=c,e.l=u,e}getRGB(e,t=Ht.workingColorSpace){return Ht.fromWorkingColorSpace(Rt.copy(this),t),e.r=Rt.r,e.g=Rt.g,e.b=Rt.b,e}getStyle(e=dn){Ht.fromWorkingColorSpace(Rt.copy(this),e);const t=Rt.r,n=Rt.g,i=Rt.b;return e!==dn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${t*255|0},${n*255|0},${i*255|0})`}offsetHSL(e,t,n){return this.getHSL(an),an.h+=e,an.s+=t,an.l+=n,this.setHSL(an.h,an.s,an.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(an),e.getHSL(us);const n=Dr(an.h,us.h,t),i=Dr(an.s,us.s,t),r=Dr(an.l,us.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Rt=new Be;Be.NAMES=xu;class Ln extends ln{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=su,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ft=new k,hs=new Ue;class kt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=$a,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)hs.fromBufferAttribute(this,t),hs.applyMatrix3(e),this.setXY(t,hs.x,hs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ft.fromBufferAttribute(this,t),ft.applyMatrix3(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ft.fromBufferAttribute(this,t),ft.applyMatrix4(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ft.fromBufferAttribute(this,t),ft.applyNormalMatrix(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ft.fromBufferAttribute(this,t),ft.transformDirection(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Cn(t,this.array)),t}setX(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Cn(t,this.array)),t}setY(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Cn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Cn(t,this.array)),t}setW(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array),i=lt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array),i=lt(i,this.array),r=lt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==$a&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class yu extends kt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class bu extends kt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Bt extends kt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Id=0;const Xt=new Xe,La=new ut,wi=new k,jt=new gn,xr=new gn,vt=new k;class wt extends oi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Id++}),this.uuid=on(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(mu(e)?bu:yu)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ke().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Xt.makeRotationFromQuaternion(e),this.applyMatrix4(Xt),this}rotateX(e){return Xt.makeRotationX(e),this.applyMatrix4(Xt),this}rotateY(e){return Xt.makeRotationY(e),this.applyMatrix4(Xt),this}rotateZ(e){return Xt.makeRotationZ(e),this.applyMatrix4(Xt),this}translate(e,t,n){return Xt.makeTranslation(e,t,n),this.applyMatrix4(Xt),this}scale(e,t,n){return Xt.makeScale(e,t,n),this.applyMatrix4(Xt),this}lookAt(e){return La.lookAt(e),La.updateMatrix(),this.applyMatrix4(La.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(wi).negate(),this.translate(wi.x,wi.y,wi.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Bt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new gn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];jt.setFromBufferAttribute(r),this.morphTargetsRelative?(vt.addVectors(this.boundingBox.min,jt.min),this.boundingBox.expandByPoint(vt),vt.addVectors(this.boundingBox.max,jt.max),this.boundingBox.expandByPoint(vt)):(this.boundingBox.expandByPoint(jt.min),this.boundingBox.expandByPoint(jt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _n);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new k,1/0);return}if(e){const n=this.boundingSphere.center;if(jt.setFromBufferAttribute(e),t)for(let r=0,s=t.length;r<s;r++){const a=t[r];xr.setFromBufferAttribute(a),this.morphTargetsRelative?(vt.addVectors(jt.min,xr.min),jt.expandByPoint(vt),vt.addVectors(jt.max,xr.max),jt.expandByPoint(vt)):(jt.expandByPoint(xr.min),jt.expandByPoint(xr.max))}jt.getCenter(n);let i=0;for(let r=0,s=e.count;r<s;r++)vt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(vt));if(t)for(let r=0,s=t.length;r<s;r++){const a=t[r],o=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)vt.fromBufferAttribute(a,c),o&&(wi.fromBufferAttribute(e,c),vt.add(wi)),i=Math.max(i,n.distanceToSquared(vt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,r=t.normal.array,s=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new kt(new Float32Array(4*a),4));const o=this.getAttribute("tangent").array,c=[],u=[];for(let E=0;E<a;E++)c[E]=new k,u[E]=new k;const h=new k,d=new k,p=new k,g=new Ue,_=new Ue,m=new Ue,f=new k,v=new k;function y(E,J,D){h.fromArray(i,E*3),d.fromArray(i,J*3),p.fromArray(i,D*3),g.fromArray(s,E*2),_.fromArray(s,J*2),m.fromArray(s,D*2),d.sub(h),p.sub(h),_.sub(g),m.sub(g);const P=1/(_.x*m.y-m.x*_.y);isFinite(P)&&(f.copy(d).multiplyScalar(m.y).addScaledVector(p,-_.y).multiplyScalar(P),v.copy(p).multiplyScalar(_.x).addScaledVector(d,-m.x).multiplyScalar(P),c[E].add(f),c[J].add(f),c[D].add(f),u[E].add(v),u[J].add(v),u[D].add(v))}let x=this.groups;x.length===0&&(x=[{start:0,count:n.length}]);for(let E=0,J=x.length;E<J;++E){const D=x[E],P=D.start,I=D.count;for(let B=P,q=P+I;B<q;B+=3)y(n[B+0],n[B+1],n[B+2])}const b=new k,T=new k,C=new k,L=new k;function S(E){C.fromArray(r,E*3),L.copy(C);const J=c[E];b.copy(J),b.sub(C.multiplyScalar(C.dot(J))).normalize(),T.crossVectors(L,J);const P=T.dot(u[E])<0?-1:1;o[E*4]=b.x,o[E*4+1]=b.y,o[E*4+2]=b.z,o[E*4+3]=P}for(let E=0,J=x.length;E<J;++E){const D=x[E],P=D.start,I=D.count;for(let B=P,q=P+I;B<q;B+=3)S(n[B+0]),S(n[B+1]),S(n[B+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new kt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const i=new k,r=new k,s=new k,a=new k,o=new k,c=new k,u=new k,h=new k;if(e)for(let d=0,p=e.count;d<p;d+=3){const g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,m),u.subVectors(s,r),h.subVectors(i,r),u.cross(h),a.fromBufferAttribute(n,g),o.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(u),o.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),s.fromBufferAttribute(t,d+2),u.subVectors(s,r),h.subVectors(i,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)vt.fromBufferAttribute(e,t),vt.normalize(),e.setXYZ(t,vt.x,vt.y,vt.z)}toNonIndexed(){function e(a,o){const c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(o.length*u);let p=0,g=0;for(let _=0,m=o.length;_<m;_++){a.isInterleavedBufferAttribute?p=o[_]*a.data.stride+a.offset:p=o[_]*u;for(let f=0;f<u;f++)d[g++]=c[p++]}return new kt(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new wt,n=this.index.array,i=this.attributes;for(const a in i){const o=i[a],c=e(o,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const o=[],c=r[a];for(let u=0,h=c.length;u<h;u++){const d=c[u],p=e(d,n);o.push(p)}t.morphAttributes[a]=o}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let a=0,o=s.length;a<o;a++){const c=s[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const o=this.parameters;for(const c in o)o[c]!==void 0&&(e[c]=o[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const o in n){const c=n[o];e.data.attributes[o]=c.toJSON(e.data)}const i={};let r=!1;for(const o in this.morphAttributes){const c=this.morphAttributes[o],u=[];for(let h=0,d=c.length;h<d;h++){const p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(i[o]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let d=0,p=h.length;d<p;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,u=s.length;c<u;c++){const h=s[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const o=e.boundingSphere;return o!==null&&(this.boundingSphere=o.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Dl=new Xe,hn=new js,ds=new _n,Il=new k,Ti=new k,Ai=new k,Ei=new k,Ra=new k,fs=new k,ps=new Ue,ms=new Ue,gs=new Ue,Ul=new k,Ol=new k,Fl=new k,_s=new k,vs=new k;class It extends ut{constructor(e=new wt,t=new Ln){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,s=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(r&&a){fs.set(0,0,0);for(let o=0,c=r.length;o<c;o++){const u=a[o],h=r[o];u!==0&&(Ra.fromBufferAttribute(h,e),s?fs.addScaledVector(Ra,u):fs.addScaledVector(Ra.sub(t),u))}t.add(fs)}return this.isSkinnedMesh&&this.applyBoneTransform(e,t),t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),ds.copy(n.boundingSphere),ds.applyMatrix4(r),hn.copy(e.ray).recast(e.near),ds.containsPoint(hn.origin)===!1&&(hn.intersectSphere(ds,Il)===null||hn.origin.distanceToSquared(Il)>(e.far-e.near)**2))||(Dl.copy(r).invert(),hn.copy(e.ray).applyMatrix4(Dl),n.boundingBox!==null&&hn.intersectsBox(n.boundingBox)===!1))return;let s;const a=n.index,o=n.attributes.position,c=n.attributes.uv,u=n.attributes.uv2,h=n.attributes.normal,d=n.groups,p=n.drawRange;if(a!==null)if(Array.isArray(i))for(let g=0,_=d.length;g<_;g++){const m=d[g],f=i[m.materialIndex],v=Math.max(m.start,p.start),y=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let x=v,b=y;x<b;x+=3){const T=a.getX(x),C=a.getX(x+1),L=a.getX(x+2);s=xs(this,f,e,hn,c,u,h,T,C,L),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const v=a.getX(m),y=a.getX(m+1),x=a.getX(m+2);s=xs(this,i,e,hn,c,u,h,v,y,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(o!==void 0)if(Array.isArray(i))for(let g=0,_=d.length;g<_;g++){const m=d[g],f=i[m.materialIndex],v=Math.max(m.start,p.start),y=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let x=v,b=y;x<b;x+=3){const T=x,C=x+1,L=x+2;s=xs(this,f,e,hn,c,u,h,T,C,L),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const v=m,y=m+1,x=m+2;s=xs(this,i,e,hn,c,u,h,v,y,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function Ud(l,e,t,n,i,r,s,a){let o;if(e.side===Nt?o=n.intersectTriangle(s,r,i,!0,a):o=n.intersectTriangle(i,r,s,e.side===mn,a),o===null)return null;vs.copy(a),vs.applyMatrix4(l.matrixWorld);const c=t.ray.origin.distanceTo(vs);return c<t.near||c>t.far?null:{distance:c,point:vs.clone(),object:l}}function xs(l,e,t,n,i,r,s,a,o,c){l.getVertexPosition(a,Ti),l.getVertexPosition(o,Ai),l.getVertexPosition(c,Ei);const u=Ud(l,e,t,n,Ti,Ai,Ei,_s);if(u){i&&(ps.fromBufferAttribute(i,a),ms.fromBufferAttribute(i,o),gs.fromBufferAttribute(i,c),u.uv=qt.getInterpolation(_s,Ti,Ai,Ei,ps,ms,gs,new Ue)),r&&(ps.fromBufferAttribute(r,a),ms.fromBufferAttribute(r,o),gs.fromBufferAttribute(r,c),u.uv2=qt.getInterpolation(_s,Ti,Ai,Ei,ps,ms,gs,new Ue)),s&&(Ul.fromBufferAttribute(s,a),Ol.fromBufferAttribute(s,o),Fl.fromBufferAttribute(s,c),u.normal=qt.getInterpolation(_s,Ti,Ai,Ei,Ul,Ol,Fl,new k),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:o,c,normal:new k,materialIndex:0};qt.getNormal(Ti,Ai,Ei,h.normal),u.face=h}return u}class Hr extends wt{constructor(e=1,t=1,n=1,i=1,r=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:s};const a=this;i=Math.floor(i),r=Math.floor(r),s=Math.floor(s);const o=[],c=[],u=[],h=[];let d=0,p=0;g("z","y","x",-1,-1,n,t,e,s,r,0),g("z","y","x",1,-1,n,t,-e,s,r,1),g("x","z","y",1,1,e,n,t,i,s,2),g("x","z","y",1,-1,e,n,-t,i,s,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(o),this.setAttribute("position",new Bt(c,3)),this.setAttribute("normal",new Bt(u,3)),this.setAttribute("uv",new Bt(h,2));function g(_,m,f,v,y,x,b,T,C,L,S){const E=x/C,J=b/L,D=x/2,P=b/2,I=T/2,B=C+1,q=L+1;let ie=0,Z=0;const H=new k;for(let j=0;j<q;j++){const F=j*J-P;for(let G=0;G<B;G++){const N=G*E-D;H[_]=N*v,H[m]=F*y,H[f]=I,c.push(H.x,H.y,H.z),H[_]=0,H[m]=0,H[f]=T>0?1:-1,u.push(H.x,H.y,H.z),h.push(G/C),h.push(1-j/L),ie+=1}}for(let j=0;j<L;j++)for(let F=0;F<C;F++){const G=d+F+B*j,N=d+F+B*(j+1),z=d+(F+1)+B*(j+1),W=d+(F+1)+B*j;o.push(G,N,W),o.push(N,z,W),Z+=6}a.addGroup(p,Z,S),p+=Z,d+=ie}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function $i(l){const e={};for(const t in l){e[t]={};for(const n in l[t]){const i=l[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Ft(l){const e={};for(let t=0;t<l.length;t++){const n=$i(l[t]);for(const i in n)e[i]=n[i]}return e}function Od(l){const e=[];for(let t=0;t<l.length;t++)e.push(l[t].clone());return e}function Mu(l){return l.getRenderTarget()===null&&l.outputEncoding===nt?dn:Nr}const Su={clone:$i,merge:Ft};var Fd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Nd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Hn extends ln{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Fd,this.fragmentShader=Nd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=$i(e.uniforms),this.uniformsGroups=Od(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const s=this.uniforms[i].value;s&&s.isTexture?t.uniforms[i]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[i]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[i]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[i]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[i]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[i]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[i]={type:"m4",value:s.toArray()}:t.uniforms[i]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}let wu=class extends ut{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Xe,this.projectionMatrix=new Xe,this.projectionMatrixInverse=new Xe}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}};class Dt extends wu{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ji*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Pr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ji*2*Math.atan(Math.tan(Pr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Pr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const s=this.view;if(this.view!==null&&this.view.enabled){const o=s.fullWidth,c=s.fullHeight;r+=s.offsetX*i/o,t-=s.offsetY*n/c,i*=s.width/o,n*=s.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ci=-90,Li=1;class kd extends ut{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new Dt(Ci,Li,e,t);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const r=new Dt(Ci,Li,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(-1,0,0),this.add(r);const s=new Dt(Ci,Li,e,t);s.layers=this.layers,s.up.set(0,0,-1),s.lookAt(0,1,0),this.add(s);const a=new Dt(Ci,Li,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const o=new Dt(Ci,Li,e,t);o.layers=this.layers,o.up.set(0,1,0),o.lookAt(0,0,1),this.add(o);const c=new Dt(Ci,Li,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,r,s,a,o,c]=this.children,u=e.getRenderTarget(),h=e.toneMapping,d=e.xr.enabled;e.toneMapping=Rn,e.xr.enabled=!1;const p=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,r),e.setRenderTarget(n,2),e.render(t,s),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,o),n.texture.generateMipmaps=p,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=h,e.xr.enabled=d,n.texture.needsPMREMUpdate=!0}}class Tu extends bt{constructor(e,t,n,i,r,s,a,o,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Xi,super(e,t,n,i,r,s,a,o,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Bd extends si{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Tu(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Pt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Hr(5,5,5),r=new Hn({name:"CubemapFromEquirect",uniforms:$i(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Nt,blending:Vn});r.uniforms.tEquirect.value=t;const s=new It(i,r),a=t.minFilter;return t.minFilter===ni&&(t.minFilter=Pt),new kd(1,10,this).update(e,s),t.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,n,i);e.setRenderTarget(r)}}const Pa=new k,zd=new k,Gd=new Ke;class Zn{constructor(e=new k(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Pa.subVectors(n,t).cross(zd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Pa),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Gd.getNormalMatrix(e),i=this.coplanarPoint(Pa).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const qn=new _n,ys=new k;class vo{constructor(e=new Zn,t=new Zn,n=new Zn,i=new Zn,r=new Zn,s=new Zn){this.planes=[e,t,n,i,r,s]}set(e,t,n,i,r,s){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(s),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],r=n[1],s=n[2],a=n[3],o=n[4],c=n[5],u=n[6],h=n[7],d=n[8],p=n[9],g=n[10],_=n[11],m=n[12],f=n[13],v=n[14],y=n[15];return t[0].setComponents(a-i,h-o,_-d,y-m).normalize(),t[1].setComponents(a+i,h+o,_+d,y+m).normalize(),t[2].setComponents(a+r,h+c,_+p,y+f).normalize(),t[3].setComponents(a-r,h-c,_-p,y-f).normalize(),t[4].setComponents(a-s,h-u,_-g,y-v).normalize(),t[5].setComponents(a+s,h+u,_+g,y+v).normalize(),this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),qn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),qn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(qn)}intersectsSprite(e){return qn.center.set(0,0,0),qn.radius=.7071067811865476,qn.applyMatrix4(e.matrixWorld),this.intersectsSphere(qn)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(ys.x=i.normal.x>0?e.max.x:e.min.x,ys.y=i.normal.y>0?e.max.y:e.min.y,ys.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(ys)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Au(){let l=null,e=!1,t=null,n=null;function i(r,s){t(r,s),n=l.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=l.requestAnimationFrame(i),e=!0)},stop:function(){l.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){l=r}}}function Vd(l,e){const t=e.isWebGL2,n=new WeakMap;function i(c,u){const h=c.array,d=c.usage,p=l.createBuffer();l.bindBuffer(u,p),l.bufferData(u,h,d),c.onUploadCallback();let g;if(h instanceof Float32Array)g=5126;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(h instanceof Int16Array)g=5122;else if(h instanceof Uint32Array)g=5125;else if(h instanceof Int32Array)g=5124;else if(h instanceof Int8Array)g=5120;else if(h instanceof Uint8Array)g=5121;else if(h instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:p,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function r(c,u,h){const d=u.array,p=u.updateRange;l.bindBuffer(h,c),p.count===-1?l.bufferSubData(h,0,d):(t?l.bufferSubData(h,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):l.bufferSubData(h,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function s(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(l.deleteBuffer(u.buffer),n.delete(c))}function o(c,u){if(c.isGLBufferAttribute){const d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h===void 0?n.set(c,i(c,u)):h.version<c.version&&(r(h.buffer,c,u),h.version=c.version)}return{get:s,remove:a,update:o}}class er extends wt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,s=t/2,a=Math.floor(n),o=Math.floor(i),c=a+1,u=o+1,h=e/a,d=t/o,p=[],g=[],_=[],m=[];for(let f=0;f<u;f++){const v=f*d-s;for(let y=0;y<c;y++){const x=y*h-r;g.push(x,-v,0),_.push(0,0,1),m.push(y/a),m.push(1-f/o)}}for(let f=0;f<o;f++)for(let v=0;v<a;v++){const y=v+c*f,x=v+c*(f+1),b=v+1+c*(f+1),T=v+1+c*f;p.push(y,x,T),p.push(x,b,T)}this.setIndex(p),this.setAttribute("position",new Bt(g,3)),this.setAttribute("normal",new Bt(_,3)),this.setAttribute("uv",new Bt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new er(e.width,e.height,e.widthSegments,e.heightSegments)}}var Hd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Wd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jd=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Xd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Yd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,qd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Kd="vec3 transformed = vec3( position );",Zd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Jd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,$d=`#ifdef USE_IRIDESCENCE
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
#endif`,Qd=`#ifdef USE_BUMPMAP
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
#endif`,ef=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,tf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,nf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,rf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,sf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,af=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,of=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,lf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,cf=`#define PI 3.141592653589793
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
} // validated`,uf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,hf=`vec3 transformedNormal = objectNormal;
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
#endif`,df=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ff=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,pf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,mf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,gf="gl_FragColor = linearToOutputTexel( gl_FragColor );",_f=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,vf=`#ifdef USE_ENVMAP
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
#endif`,xf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,yf=`#ifdef USE_ENVMAP
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
#endif`,bf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Mf=`#ifdef USE_ENVMAP
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
#endif`,Sf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,wf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Tf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Af=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ef=`#ifdef USE_GRADIENTMAP
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
}`,Cf=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Lf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Rf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Pf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Df=`uniform bool receiveShadow;
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
#endif`,If=`#if defined( USE_ENVMAP )
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
#endif`,Uf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Of=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ff=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Nf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,kf=`PhysicalMaterial material;
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
#endif`,Bf=`struct PhysicalMaterial {
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
}`,zf=`
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
#endif`,Gf=`#if defined( RE_IndirectDiffuse )
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
#endif`,Vf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Hf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Wf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jf=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Xf=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Yf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,qf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Kf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Zf=`#if defined( USE_POINTS_UV )
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
#endif`,Jf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,$f=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Qf=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ep=`#ifdef USE_MORPHNORMALS
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
#endif`,tp=`#ifdef USE_MORPHTARGETS
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
#endif`,np=`#ifdef USE_MORPHTARGETS
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
#endif`,ip=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,rp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,sp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ap=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,op=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,lp=`#ifdef USE_NORMALMAP
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
#endif`,cp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,up=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,hp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,dp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,fp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,pp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,mp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,gp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,_p=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,vp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,xp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,yp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,bp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Mp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Sp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,wp=`float getShadowMask() {
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
}`,Tp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ap=`#ifdef USE_SKINNING
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
#endif`,Ep=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Cp=`#ifdef USE_SKINNING
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
#endif`,Lp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Rp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Pp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Dp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ip=`#ifdef USE_TRANSMISSION
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
#endif`,Up=`#ifdef USE_TRANSMISSION
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
#endif`,Op=`#ifdef USE_UV
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
#endif`,Fp=`#ifdef USE_UV
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
#endif`,Np=`#ifdef USE_UV
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
#endif`,kp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Bp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,zp=`uniform sampler2D t2D;
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
}`,Gp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Hp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,jp=`#include <common>
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
}`,Xp=`#if DEPTH_PACKING == 3200
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
}`,Yp=`#define DISTANCE
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
}`,qp=`#define DISTANCE
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
}`,Kp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Zp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Jp=`uniform float scale;
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
}`,$p=`uniform vec3 diffuse;
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
}`,Qp=`#include <common>
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
}`,em=`uniform vec3 diffuse;
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
}`,tm=`#define LAMBERT
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
}`,nm=`#define LAMBERT
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
}`,im=`#define MATCAP
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
}`,rm=`#define MATCAP
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
}`,sm=`#define NORMAL
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
}`,am=`#define NORMAL
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
}`,om=`#define PHONG
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
}`,lm=`#define PHONG
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
}`,cm=`#define STANDARD
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
}`,um=`#define STANDARD
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
}`,hm=`#define TOON
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
}`,dm=`#define TOON
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
}`,fm=`uniform float size;
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
}`,pm=`uniform vec3 diffuse;
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
}`,mm=`#include <common>
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
}`,gm=`uniform vec3 color;
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
}`,_m=`uniform float rotation;
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
}`,vm=`uniform vec3 diffuse;
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
}`,He={alphamap_fragment:Hd,alphamap_pars_fragment:Wd,alphatest_fragment:jd,alphatest_pars_fragment:Xd,aomap_fragment:Yd,aomap_pars_fragment:qd,begin_vertex:Kd,beginnormal_vertex:Zd,bsdfs:Jd,iridescence_fragment:$d,bumpmap_pars_fragment:Qd,clipping_planes_fragment:ef,clipping_planes_pars_fragment:tf,clipping_planes_pars_vertex:nf,clipping_planes_vertex:rf,color_fragment:sf,color_pars_fragment:af,color_pars_vertex:of,color_vertex:lf,common:cf,cube_uv_reflection_fragment:uf,defaultnormal_vertex:hf,displacementmap_pars_vertex:df,displacementmap_vertex:ff,emissivemap_fragment:pf,emissivemap_pars_fragment:mf,encodings_fragment:gf,encodings_pars_fragment:_f,envmap_fragment:vf,envmap_common_pars_fragment:xf,envmap_pars_fragment:yf,envmap_pars_vertex:bf,envmap_physical_pars_fragment:If,envmap_vertex:Mf,fog_vertex:Sf,fog_pars_vertex:wf,fog_fragment:Tf,fog_pars_fragment:Af,gradientmap_pars_fragment:Ef,lightmap_fragment:Cf,lightmap_pars_fragment:Lf,lights_lambert_fragment:Rf,lights_lambert_pars_fragment:Pf,lights_pars_begin:Df,lights_toon_fragment:Uf,lights_toon_pars_fragment:Of,lights_phong_fragment:Ff,lights_phong_pars_fragment:Nf,lights_physical_fragment:kf,lights_physical_pars_fragment:Bf,lights_fragment_begin:zf,lights_fragment_maps:Gf,lights_fragment_end:Vf,logdepthbuf_fragment:Hf,logdepthbuf_pars_fragment:Wf,logdepthbuf_pars_vertex:jf,logdepthbuf_vertex:Xf,map_fragment:Yf,map_pars_fragment:qf,map_particle_fragment:Kf,map_particle_pars_fragment:Zf,metalnessmap_fragment:Jf,metalnessmap_pars_fragment:$f,morphcolor_vertex:Qf,morphnormal_vertex:ep,morphtarget_pars_vertex:tp,morphtarget_vertex:np,normal_fragment_begin:ip,normal_fragment_maps:rp,normal_pars_fragment:sp,normal_pars_vertex:ap,normal_vertex:op,normalmap_pars_fragment:lp,clearcoat_normal_fragment_begin:cp,clearcoat_normal_fragment_maps:up,clearcoat_pars_fragment:hp,iridescence_pars_fragment:dp,output_fragment:fp,packing:pp,premultiplied_alpha_fragment:mp,project_vertex:gp,dithering_fragment:_p,dithering_pars_fragment:vp,roughnessmap_fragment:xp,roughnessmap_pars_fragment:yp,shadowmap_pars_fragment:bp,shadowmap_pars_vertex:Mp,shadowmap_vertex:Sp,shadowmask_pars_fragment:wp,skinbase_vertex:Tp,skinning_pars_vertex:Ap,skinning_vertex:Ep,skinnormal_vertex:Cp,specularmap_fragment:Lp,specularmap_pars_fragment:Rp,tonemapping_fragment:Pp,tonemapping_pars_fragment:Dp,transmission_fragment:Ip,transmission_pars_fragment:Up,uv_pars_fragment:Op,uv_pars_vertex:Fp,uv_vertex:Np,worldpos_vertex:kp,background_vert:Bp,background_frag:zp,backgroundCube_vert:Gp,backgroundCube_frag:Vp,cube_vert:Hp,cube_frag:Wp,depth_vert:jp,depth_frag:Xp,distanceRGBA_vert:Yp,distanceRGBA_frag:qp,equirect_vert:Kp,equirect_frag:Zp,linedashed_vert:Jp,linedashed_frag:$p,meshbasic_vert:Qp,meshbasic_frag:em,meshlambert_vert:tm,meshlambert_frag:nm,meshmatcap_vert:im,meshmatcap_frag:rm,meshnormal_vert:sm,meshnormal_frag:am,meshphong_vert:om,meshphong_frag:lm,meshphysical_vert:cm,meshphysical_frag:um,meshtoon_vert:hm,meshtoon_frag:dm,points_vert:fm,points_frag:pm,shadow_vert:mm,shadow_frag:gm,sprite_vert:_m,sprite_frag:vm},Ee={common:{diffuse:{value:new Be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ke}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ke},normalScale:{value:new Ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Ke}},sprite:{diffuse:{value:new Be(16777215)},opacity:{value:1},center:{value:new Ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaTest:{value:0}}},fn={basic:{uniforms:Ft([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.fog]),vertexShader:He.meshbasic_vert,fragmentShader:He.meshbasic_frag},lambert:{uniforms:Ft([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new Be(0)}}]),vertexShader:He.meshlambert_vert,fragmentShader:He.meshlambert_frag},phong:{uniforms:Ft([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new Be(0)},specular:{value:new Be(1118481)},shininess:{value:30}}]),vertexShader:He.meshphong_vert,fragmentShader:He.meshphong_frag},standard:{uniforms:Ft([Ee.common,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.roughnessmap,Ee.metalnessmap,Ee.fog,Ee.lights,{emissive:{value:new Be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag},toon:{uniforms:Ft([Ee.common,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.gradientmap,Ee.fog,Ee.lights,{emissive:{value:new Be(0)}}]),vertexShader:He.meshtoon_vert,fragmentShader:He.meshtoon_frag},matcap:{uniforms:Ft([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,{matcap:{value:null}}]),vertexShader:He.meshmatcap_vert,fragmentShader:He.meshmatcap_frag},points:{uniforms:Ft([Ee.points,Ee.fog]),vertexShader:He.points_vert,fragmentShader:He.points_frag},dashed:{uniforms:Ft([Ee.common,Ee.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:He.linedashed_vert,fragmentShader:He.linedashed_frag},depth:{uniforms:Ft([Ee.common,Ee.displacementmap]),vertexShader:He.depth_vert,fragmentShader:He.depth_frag},normal:{uniforms:Ft([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,{opacity:{value:1}}]),vertexShader:He.meshnormal_vert,fragmentShader:He.meshnormal_frag},sprite:{uniforms:Ft([Ee.sprite,Ee.fog]),vertexShader:He.sprite_vert,fragmentShader:He.sprite_frag},background:{uniforms:{uvTransform:{value:new Ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:He.background_vert,fragmentShader:He.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:He.backgroundCube_vert,fragmentShader:He.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:He.cube_vert,fragmentShader:He.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:He.equirect_vert,fragmentShader:He.equirect_frag},distanceRGBA:{uniforms:Ft([Ee.common,Ee.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:He.distanceRGBA_vert,fragmentShader:He.distanceRGBA_frag},shadow:{uniforms:Ft([Ee.lights,Ee.fog,{color:{value:new Be(0)},opacity:{value:1}}]),vertexShader:He.shadow_vert,fragmentShader:He.shadow_frag}};fn.physical={uniforms:Ft([fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ke},clearcoatNormalScale:{value:new Ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ke},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ke},sheen:{value:0},sheenColor:{value:new Be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ke},transmissionSamplerSize:{value:new Ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ke},attenuationDistance:{value:0},attenuationColor:{value:new Be(0)},specularColor:{value:new Be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ke}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag};const bs={r:0,b:0,g:0};function xm(l,e,t,n,i,r,s){const a=new Be(0);let o=r===!0?0:1,c,u,h=null,d=0,p=null;function g(m,f){let v=!1,y=f.isScene===!0?f.background:null;y&&y.isTexture&&(y=(f.backgroundBlurriness>0?t:e).get(y));const x=l.xr,b=x.getSession&&x.getSession();b&&b.environmentBlendMode==="additive"&&(y=null),y===null?_(a,o):y&&y.isColor&&(_(y,1),v=!0),(l.autoClear||v)&&l.clear(l.autoClearColor,l.autoClearDepth,l.autoClearStencil),y&&(y.isCubeTexture||y.mapping===Ws)?(u===void 0&&(u=new It(new Hr(1,1,1),new Hn({name:"BackgroundCubeMaterial",uniforms:$i(fn.backgroundCube.uniforms),vertexShader:fn.backgroundCube.vertexShader,fragmentShader:fn.backgroundCube.fragmentShader,side:Nt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,C,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,u.material.toneMapped=y.encoding!==nt,(h!==y||d!==y.version||p!==l.toneMapping)&&(u.material.needsUpdate=!0,h=y,d=y.version,p=l.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new It(new er(2,2),new Hn({name:"BackgroundMaterial",uniforms:$i(fn.background.uniforms),vertexShader:fn.background.vertexShader,fragmentShader:fn.background.fragmentShader,side:mn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=y.encoding!==nt,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||d!==y.version||p!==l.toneMapping)&&(c.material.needsUpdate=!0,h=y,d=y.version,p=l.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function _(m,f){m.getRGB(bs,Mu(l)),n.buffers.color.setClear(bs.r,bs.g,bs.b,f,s)}return{getClearColor:function(){return a},setClearColor:function(m,f=1){a.set(m),o=f,_(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(m){o=m,_(a,o)},render:g}}function ym(l,e,t,n){const i=l.getParameter(34921),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),s=n.isWebGL2||r!==null,a={},o=m(null);let c=o,u=!1;function h(I,B,q,ie,Z){let H=!1;if(s){const j=_(ie,q,B);c!==j&&(c=j,p(c.object)),H=f(I,ie,q,Z),H&&v(I,ie,q,Z)}else{const j=B.wireframe===!0;(c.geometry!==ie.id||c.program!==q.id||c.wireframe!==j)&&(c.geometry=ie.id,c.program=q.id,c.wireframe=j,H=!0)}Z!==null&&t.update(Z,34963),(H||u)&&(u=!1,L(I,B,q,ie),Z!==null&&l.bindBuffer(34963,t.get(Z).buffer))}function d(){return n.isWebGL2?l.createVertexArray():r.createVertexArrayOES()}function p(I){return n.isWebGL2?l.bindVertexArray(I):r.bindVertexArrayOES(I)}function g(I){return n.isWebGL2?l.deleteVertexArray(I):r.deleteVertexArrayOES(I)}function _(I,B,q){const ie=q.wireframe===!0;let Z=a[I.id];Z===void 0&&(Z={},a[I.id]=Z);let H=Z[B.id];H===void 0&&(H={},Z[B.id]=H);let j=H[ie];return j===void 0&&(j=m(d()),H[ie]=j),j}function m(I){const B=[],q=[],ie=[];for(let Z=0;Z<i;Z++)B[Z]=0,q[Z]=0,ie[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:q,attributeDivisors:ie,object:I,attributes:{},index:null}}function f(I,B,q,ie){const Z=c.attributes,H=B.attributes;let j=0;const F=q.getAttributes();for(const G in F)if(F[G].location>=0){const z=Z[G];let W=H[G];if(W===void 0&&(G==="instanceMatrix"&&I.instanceMatrix&&(W=I.instanceMatrix),G==="instanceColor"&&I.instanceColor&&(W=I.instanceColor)),z===void 0||z.attribute!==W||W&&z.data!==W.data)return!0;j++}return c.attributesNum!==j||c.index!==ie}function v(I,B,q,ie){const Z={},H=B.attributes;let j=0;const F=q.getAttributes();for(const G in F)if(F[G].location>=0){let z=H[G];z===void 0&&(G==="instanceMatrix"&&I.instanceMatrix&&(z=I.instanceMatrix),G==="instanceColor"&&I.instanceColor&&(z=I.instanceColor));const W={};W.attribute=z,z&&z.data&&(W.data=z.data),Z[G]=W,j++}c.attributes=Z,c.attributesNum=j,c.index=ie}function y(){const I=c.newAttributes;for(let B=0,q=I.length;B<q;B++)I[B]=0}function x(I){b(I,0)}function b(I,B){const q=c.newAttributes,ie=c.enabledAttributes,Z=c.attributeDivisors;q[I]=1,ie[I]===0&&(l.enableVertexAttribArray(I),ie[I]=1),Z[I]!==B&&((n.isWebGL2?l:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,B),Z[I]=B)}function T(){const I=c.newAttributes,B=c.enabledAttributes;for(let q=0,ie=B.length;q<ie;q++)B[q]!==I[q]&&(l.disableVertexAttribArray(q),B[q]=0)}function C(I,B,q,ie,Z,H){n.isWebGL2===!0&&(q===5124||q===5125)?l.vertexAttribIPointer(I,B,q,Z,H):l.vertexAttribPointer(I,B,q,ie,Z,H)}function L(I,B,q,ie){if(n.isWebGL2===!1&&(I.isInstancedMesh||ie.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;y();const Z=ie.attributes,H=q.getAttributes(),j=B.defaultAttributeValues;for(const F in H){const G=H[F];if(G.location>=0){let N=Z[F];if(N===void 0&&(F==="instanceMatrix"&&I.instanceMatrix&&(N=I.instanceMatrix),F==="instanceColor"&&I.instanceColor&&(N=I.instanceColor)),N!==void 0){const z=N.normalized,W=N.itemSize,Q=t.get(N);if(Q===void 0)continue;const U=Q.buffer,re=Q.type,he=Q.bytesPerElement;if(N.isInterleavedBufferAttribute){const se=N.data,le=se.stride,oe=N.offset;if(se.isInstancedInterleavedBuffer){for(let xe=0;xe<G.locationSize;xe++)b(G.location+xe,se.meshPerAttribute);I.isInstancedMesh!==!0&&ie._maxInstanceCount===void 0&&(ie._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let xe=0;xe<G.locationSize;xe++)x(G.location+xe);l.bindBuffer(34962,U);for(let xe=0;xe<G.locationSize;xe++)C(G.location+xe,W/G.locationSize,re,z,le*he,(oe+W/G.locationSize*xe)*he)}else{if(N.isInstancedBufferAttribute){for(let se=0;se<G.locationSize;se++)b(G.location+se,N.meshPerAttribute);I.isInstancedMesh!==!0&&ie._maxInstanceCount===void 0&&(ie._maxInstanceCount=N.meshPerAttribute*N.count)}else for(let se=0;se<G.locationSize;se++)x(G.location+se);l.bindBuffer(34962,U);for(let se=0;se<G.locationSize;se++)C(G.location+se,W/G.locationSize,re,z,W*he,W/G.locationSize*se*he)}}else if(j!==void 0){const z=j[F];if(z!==void 0)switch(z.length){case 2:l.vertexAttrib2fv(G.location,z);break;case 3:l.vertexAttrib3fv(G.location,z);break;case 4:l.vertexAttrib4fv(G.location,z);break;default:l.vertexAttrib1fv(G.location,z)}}}}T()}function S(){D();for(const I in a){const B=a[I];for(const q in B){const ie=B[q];for(const Z in ie)g(ie[Z].object),delete ie[Z];delete B[q]}delete a[I]}}function E(I){if(a[I.id]===void 0)return;const B=a[I.id];for(const q in B){const ie=B[q];for(const Z in ie)g(ie[Z].object),delete ie[Z];delete B[q]}delete a[I.id]}function J(I){for(const B in a){const q=a[B];if(q[I.id]===void 0)continue;const ie=q[I.id];for(const Z in ie)g(ie[Z].object),delete ie[Z];delete q[I.id]}}function D(){P(),u=!0,c!==o&&(c=o,p(c.object))}function P(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:h,reset:D,resetDefaultState:P,dispose:S,releaseStatesOfGeometry:E,releaseStatesOfProgram:J,initAttributes:y,enableAttribute:x,disableUnusedAttributes:T}}function bm(l,e,t,n){const i=n.isWebGL2;let r;function s(c){r=c}function a(c,u){l.drawArrays(r,c,u),t.update(u,r,1)}function o(c,u,h){if(h===0)return;let d,p;if(i)d=l,p="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[p](r,c,u,h),t.update(u,r,h)}this.setMode=s,this.render=a,this.renderInstances=o}function Mm(l,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");n=l.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(C){if(C==="highp"){if(l.getShaderPrecisionFormat(35633,36338).precision>0&&l.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";C="mediump"}return C==="mediump"&&l.getShaderPrecisionFormat(35633,36337).precision>0&&l.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const s=typeof WebGL2RenderingContext<"u"&&l.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const o=r(a);o!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",o,"instead."),a=o);const c=s||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=l.getParameter(34930),d=l.getParameter(35660),p=l.getParameter(3379),g=l.getParameter(34076),_=l.getParameter(34921),m=l.getParameter(36347),f=l.getParameter(36348),v=l.getParameter(36349),y=d>0,x=s||e.has("OES_texture_float"),b=y&&x,T=s?l.getParameter(36183):0;return{isWebGL2:s,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:m,maxVaryings:f,maxFragmentUniforms:v,vertexTextures:y,floatFragmentTextures:x,floatVertexTextures:b,maxSamples:T}}function Sm(l){const e=this;let t=null,n=0,i=!1,r=!1;const s=new Zn,a=new Ke,o={value:null,needsUpdate:!1};this.uniform=o,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const p=h.length!==0||d||n!==0||i;return i=d,n=h.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,p){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,f=l.get(h);if(!i||g===null||g.length===0||r&&!m)r?u(null):c();else{const v=r?0:n,y=v*4;let x=f.clippingState||null;o.value=x,x=u(g,d,y,p);for(let b=0;b!==y;++b)x[b]=t[b];f.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){o.value!==t&&(o.value=t,o.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,p,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=o.value,g!==!0||m===null){const f=p+_*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<f)&&(m=new Float32Array(f));for(let y=0,x=p;y!==_;++y,x+=4)s.copy(h[y]).applyMatrix4(v,a),s.normal.toArray(m,x),m[x+3]=s.constant}o.value=m,o.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function wm(l){let e=new WeakMap;function t(s,a){return a===zs?s.mapping=Xi:a===Ka&&(s.mapping=Yi),s}function n(s){if(s&&s.isTexture&&s.isRenderTargetTexture===!1){const a=s.mapping;if(a===zs||a===Ka)if(e.has(s)){const o=e.get(s).texture;return t(o,s.mapping)}else{const o=s.image;if(o&&o.height>0){const c=new Bd(o.height/2);return c.fromEquirectangularTexture(l,s),e.set(s,c),s.addEventListener("dispose",i),t(c.texture,s.mapping)}else return null}}return s}function i(s){const a=s.target;a.removeEventListener("dispose",i);const o=e.get(a);o!==void 0&&(e.delete(a),o.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class xo extends wu{constructor(e=-1,t=1,n=1,i=-1,r=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,s=n+e,a=i+t,o=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,s=r+c*this.view.width,a-=u*this.view.offsetY,o=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,s,a,o,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Bi=4,Nl=[.125,.215,.35,.446,.526,.582],$n=20,Da=new xo,kl=new Be;let Ia=null;const Jn=(1+Math.sqrt(5))/2,Ri=1/Jn,Bl=[new k(1,1,1),new k(-1,1,1),new k(1,1,-1),new k(-1,1,-1),new k(0,Jn,Ri),new k(0,Jn,-Ri),new k(Ri,0,Jn),new k(-Ri,0,Jn),new k(Jn,Ri,0),new k(-Jn,Ri,0)];class zl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Ia=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Hl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Vl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ia),e.scissorTest=!1,Ms(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Xi||e.mapping===Yi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ia=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Pt,minFilter:Pt,generateMipmaps:!1,type:Or,format:Jt,encoding:ri,depthBuffer:!1},i=Gl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Gl(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Tm(r)),this._blurMaterial=Am(r,e,t)}return i}_compileMaterial(e){const t=new It(this._lodPlanes[0],e);this._renderer.compile(t,Da)}_sceneToCubeUV(e,t,n,i){const a=new Dt(90,1,t,n),o=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(kl),u.toneMapping=Rn,u.autoClear=!1;const p=new Ln({name:"PMREM.Background",side:Nt,depthWrite:!1,depthTest:!1}),g=new It(new Hr,p);let _=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,_=!0):(p.color.copy(kl),_=!0);for(let f=0;f<6;f++){const v=f%3;v===0?(a.up.set(0,o[f],0),a.lookAt(c[f],0,0)):v===1?(a.up.set(0,0,o[f]),a.lookAt(0,c[f],0)):(a.up.set(0,o[f],0),a.lookAt(0,0,c[f]));const y=this._cubeSize;Ms(i,v*y,f>2?y:0,y,y),u.setRenderTarget(i),_&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Xi||e.mapping===Yi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Hl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Vl());const r=i?this._cubemapMaterial:this._equirectMaterial,s=new It(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const o=this._cubeSize;Ms(t,0,0,3*o,2*o),n.setRenderTarget(t),n.render(s,Da)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),s=Bl[(i-1)%Bl.length];this._blur(e,i-1,i,r,s)}t.autoClear=n}_blur(e,t,n,i,r){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,n,i,"latitudinal",r),this._halfBlur(s,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,s,a){const o=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new It(this._lodPlanes[i],c),d=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*$n-1),_=r/g,m=isFinite(r)?1+Math.floor(u*_):$n;m>$n&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${$n}`);const f=[];let v=0;for(let C=0;C<$n;++C){const L=C/_,S=Math.exp(-L*L/2);f.push(S),C===0?v+=S:C<m&&(v+=2*S)}for(let C=0;C<f.length;C++)f[C]=f[C]/v;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=s==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:y}=this;d.dTheta.value=g,d.mipInt.value=y-n;const x=this._sizeLods[i],b=3*x*(i>y-Bi?i-y+Bi:0),T=4*(this._cubeSize-x);Ms(t,b,T,3*x,2*x),o.setRenderTarget(t),o.render(h,Da)}}function Tm(l){const e=[],t=[],n=[];let i=l;const r=l-Bi+1+Nl.length;for(let s=0;s<r;s++){const a=Math.pow(2,i);t.push(a);let o=1/a;s>l-Bi?o=Nl[s-l+Bi-1]:s===0&&(o=0),n.push(o);const c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,_=3,m=2,f=1,v=new Float32Array(_*g*p),y=new Float32Array(m*g*p),x=new Float32Array(f*g*p);for(let T=0;T<p;T++){const C=T%3*2/3-1,L=T>2?0:-1,S=[C,L,0,C+2/3,L,0,C+2/3,L+1,0,C,L,0,C+2/3,L+1,0,C,L+1,0];v.set(S,_*g*T),y.set(d,m*g*T);const E=[T,T,T,T,T,T];x.set(E,f*g*T)}const b=new wt;b.setAttribute("position",new kt(v,_)),b.setAttribute("uv",new kt(y,m)),b.setAttribute("faceIndex",new kt(x,f)),e.push(b),i>Bi&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Gl(l,e,t){const n=new si(l,e,t);return n.texture.mapping=Ws,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ms(l,e,t,n,i){l.viewport.set(e,t,n,i),l.scissor.set(e,t,n,i)}function Am(l,e,t){const n=new Float32Array($n),i=new k(0,1,0);return new Hn({name:"SphericalGaussianBlur",defines:{n:$n,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${l}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:yo(),fragmentShader:`

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
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function Vl(){return new Hn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:yo(),fragmentShader:`

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
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function Hl(){return new Hn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:yo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function yo(){return`

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
	`}function Em(l){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const o=a.mapping,c=o===zs||o===Ka,u=o===Xi||o===Yi;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return t===null&&(t=new zl(l)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(c&&h&&h.height>0||u&&h&&i(h)){t===null&&(t=new zl(l));const d=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",r),d.texture}else return null}}}return a}function i(a){let o=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&o++;return o===c}function r(a){const o=a.target;o.removeEventListener("dispose",r);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:s}}function Cm(l){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=l.getExtension("WEBGL_depth_texture")||l.getExtension("MOZ_WEBGL_depth_texture")||l.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=l.getExtension("EXT_texture_filter_anisotropic")||l.getExtension("MOZ_EXT_texture_filter_anisotropic")||l.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=l.getExtension("WEBGL_compressed_texture_s3tc")||l.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||l.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=l.getExtension("WEBGL_compressed_texture_pvrtc")||l.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=l.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Lm(l,e,t,n){const i={},r=new WeakMap;function s(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",s),delete i[d.id];const p=r.get(d);p&&(e.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return i[d.id]===!0||(d.addEventListener("dispose",s),i[d.id]=!0,t.memory.geometries++),d}function o(h){const d=h.attributes;for(const g in d)e.update(d[g],34962);const p=h.morphAttributes;for(const g in p){const _=p[g];for(let m=0,f=_.length;m<f;m++)e.update(_[m],34962)}}function c(h){const d=[],p=h.index,g=h.attributes.position;let _=0;if(p!==null){const v=p.array;_=p.version;for(let y=0,x=v.length;y<x;y+=3){const b=v[y+0],T=v[y+1],C=v[y+2];d.push(b,T,T,C,C,b)}}else{const v=g.array;_=g.version;for(let y=0,x=v.length/3-1;y<x;y+=3){const b=y+0,T=y+1,C=y+2;d.push(b,T,T,C,C,b)}}const m=new(mu(d)?bu:yu)(d,1);m.version=_;const f=r.get(h);f&&e.remove(f),r.set(h,m)}function u(h){const d=r.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:o,getWireframeAttribute:u}}function Rm(l,e,t,n){const i=n.isWebGL2;let r;function s(d){r=d}let a,o;function c(d){a=d.type,o=d.bytesPerElement}function u(d,p){l.drawElements(r,p,a,d*o),t.update(p,r,1)}function h(d,p,g){if(g===0)return;let _,m;if(i)_=l,m="drawElementsInstanced";else if(_=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",_===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[m](r,p,a,d*o,g),t.update(p,r,g)}this.setMode=s,this.setIndex=c,this.render=u,this.renderInstances=h}function Pm(l){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,s,a){switch(t.calls++,s){case 4:t.triangles+=a*(r/3);break;case 1:t.lines+=a*(r/2);break;case 3:t.lines+=a*(r-1);break;case 2:t.lines+=a*r;break;case 0:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Dm(l,e){return l[0]-e[0]}function Im(l,e){return Math.abs(e[1])-Math.abs(l[1])}function Um(l,e,t){const n={},i=new Float32Array(8),r=new WeakMap,s=new at,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function o(c,u,h){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,_=g!==void 0?g.length:0;let m=r.get(u);if(m===void 0||m.count!==_){let B=function(){P.dispose(),r.delete(u),u.removeEventListener("dispose",B)};var p=B;m!==void 0&&m.texture.dispose();const y=u.morphAttributes.position!==void 0,x=u.morphAttributes.normal!==void 0,b=u.morphAttributes.color!==void 0,T=u.morphAttributes.position||[],C=u.morphAttributes.normal||[],L=u.morphAttributes.color||[];let S=0;y===!0&&(S=1),x===!0&&(S=2),b===!0&&(S=3);let E=u.attributes.position.count*S,J=1;E>e.maxTextureSize&&(J=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const D=new Float32Array(E*J*4*_),P=new vu(D,E,J,_);P.type=Gn,P.needsUpdate=!0;const I=S*4;for(let q=0;q<_;q++){const ie=T[q],Z=C[q],H=L[q],j=E*J*4*q;for(let F=0;F<ie.count;F++){const G=F*I;y===!0&&(s.fromBufferAttribute(ie,F),D[j+G+0]=s.x,D[j+G+1]=s.y,D[j+G+2]=s.z,D[j+G+3]=0),x===!0&&(s.fromBufferAttribute(Z,F),D[j+G+4]=s.x,D[j+G+5]=s.y,D[j+G+6]=s.z,D[j+G+7]=0),b===!0&&(s.fromBufferAttribute(H,F),D[j+G+8]=s.x,D[j+G+9]=s.y,D[j+G+10]=s.z,D[j+G+11]=H.itemSize===4?s.w:1)}}m={count:_,texture:P,size:new Ue(E,J)},r.set(u,m),u.addEventListener("dispose",B)}let f=0;for(let y=0;y<d.length;y++)f+=d[y];const v=u.morphTargetsRelative?1:1-f;h.getUniforms().setValue(l,"morphTargetBaseInfluence",v),h.getUniforms().setValue(l,"morphTargetInfluences",d),h.getUniforms().setValue(l,"morphTargetsTexture",m.texture,t),h.getUniforms().setValue(l,"morphTargetsTextureSize",m.size)}else{const g=d===void 0?0:d.length;let _=n[u.id];if(_===void 0||_.length!==g){_=[];for(let x=0;x<g;x++)_[x]=[x,0];n[u.id]=_}for(let x=0;x<g;x++){const b=_[x];b[0]=x,b[1]=d[x]}_.sort(Im);for(let x=0;x<8;x++)x<g&&_[x][1]?(a[x][0]=_[x][0],a[x][1]=_[x][1]):(a[x][0]=Number.MAX_SAFE_INTEGER,a[x][1]=0);a.sort(Dm);const m=u.morphAttributes.position,f=u.morphAttributes.normal;let v=0;for(let x=0;x<8;x++){const b=a[x],T=b[0],C=b[1];T!==Number.MAX_SAFE_INTEGER&&C?(m&&u.getAttribute("morphTarget"+x)!==m[T]&&u.setAttribute("morphTarget"+x,m[T]),f&&u.getAttribute("morphNormal"+x)!==f[T]&&u.setAttribute("morphNormal"+x,f[T]),i[x]=C,v+=C):(m&&u.hasAttribute("morphTarget"+x)===!0&&u.deleteAttribute("morphTarget"+x),f&&u.hasAttribute("morphNormal"+x)===!0&&u.deleteAttribute("morphNormal"+x),i[x]=0)}const y=u.morphTargetsRelative?1:1-v;h.getUniforms().setValue(l,"morphTargetBaseInfluence",y),h.getUniforms().setValue(l,"morphTargetInfluences",i)}}return{update:o}}function Om(l,e,t,n){let i=new WeakMap;function r(o){const c=n.render.frame,u=o.geometry,h=e.get(o,u);return i.get(h)!==c&&(e.update(h),i.set(h,c)),o.isInstancedMesh&&(o.hasEventListener("dispose",a)===!1&&o.addEventListener("dispose",a),t.update(o.instanceMatrix,34962),o.instanceColor!==null&&t.update(o.instanceColor,34962)),h}function s(){i=new WeakMap}function a(o){const c=o.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:s}}const Eu=new bt,Cu=new vu,Lu=new wd,Ru=new Tu,Wl=[],jl=[],Xl=new Float32Array(16),Yl=new Float32Array(9),ql=new Float32Array(4);function tr(l,e,t){const n=l[0];if(n<=0||n>0)return l;const i=e*t;let r=Wl[i];if(r===void 0&&(r=new Float32Array(i),Wl[i]=r),e!==0){n.toArray(r,0);for(let s=1,a=0;s!==e;++s)a+=t,l[s].toArray(r,a)}return r}function gt(l,e){if(l.length!==e.length)return!1;for(let t=0,n=l.length;t<n;t++)if(l[t]!==e[t])return!1;return!0}function _t(l,e){for(let t=0,n=e.length;t<n;t++)l[t]=e[t]}function Ys(l,e){let t=jl[e];t===void 0&&(t=new Int32Array(e),jl[e]=t);for(let n=0;n!==e;++n)t[n]=l.allocateTextureUnit();return t}function Fm(l,e){const t=this.cache;t[0]!==e&&(l.uniform1f(this.addr,e),t[0]=e)}function Nm(l,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(l.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;l.uniform2fv(this.addr,e),_t(t,e)}}function km(l,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(l.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(l.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(gt(t,e))return;l.uniform3fv(this.addr,e),_t(t,e)}}function Bm(l,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(l.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;l.uniform4fv(this.addr,e),_t(t,e)}}function zm(l,e){const t=this.cache,n=e.elements;if(n===void 0){if(gt(t,e))return;l.uniformMatrix2fv(this.addr,!1,e),_t(t,e)}else{if(gt(t,n))return;ql.set(n),l.uniformMatrix2fv(this.addr,!1,ql),_t(t,n)}}function Gm(l,e){const t=this.cache,n=e.elements;if(n===void 0){if(gt(t,e))return;l.uniformMatrix3fv(this.addr,!1,e),_t(t,e)}else{if(gt(t,n))return;Yl.set(n),l.uniformMatrix3fv(this.addr,!1,Yl),_t(t,n)}}function Vm(l,e){const t=this.cache,n=e.elements;if(n===void 0){if(gt(t,e))return;l.uniformMatrix4fv(this.addr,!1,e),_t(t,e)}else{if(gt(t,n))return;Xl.set(n),l.uniformMatrix4fv(this.addr,!1,Xl),_t(t,n)}}function Hm(l,e){const t=this.cache;t[0]!==e&&(l.uniform1i(this.addr,e),t[0]=e)}function Wm(l,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(l.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;l.uniform2iv(this.addr,e),_t(t,e)}}function jm(l,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(l.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(gt(t,e))return;l.uniform3iv(this.addr,e),_t(t,e)}}function Xm(l,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(l.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;l.uniform4iv(this.addr,e),_t(t,e)}}function Ym(l,e){const t=this.cache;t[0]!==e&&(l.uniform1ui(this.addr,e),t[0]=e)}function qm(l,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(l.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;l.uniform2uiv(this.addr,e),_t(t,e)}}function Km(l,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(l.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(gt(t,e))return;l.uniform3uiv(this.addr,e),_t(t,e)}}function Zm(l,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(l.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;l.uniform4uiv(this.addr,e),_t(t,e)}}function Jm(l,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(l.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||Eu,i)}function $m(l,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(l.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Lu,i)}function Qm(l,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(l.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Ru,i)}function eg(l,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(l.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Cu,i)}function tg(l){switch(l){case 5126:return Fm;case 35664:return Nm;case 35665:return km;case 35666:return Bm;case 35674:return zm;case 35675:return Gm;case 35676:return Vm;case 5124:case 35670:return Hm;case 35667:case 35671:return Wm;case 35668:case 35672:return jm;case 35669:case 35673:return Xm;case 5125:return Ym;case 36294:return qm;case 36295:return Km;case 36296:return Zm;case 35678:case 36198:case 36298:case 36306:case 35682:return Jm;case 35679:case 36299:case 36307:return $m;case 35680:case 36300:case 36308:case 36293:return Qm;case 36289:case 36303:case 36311:case 36292:return eg}}function ng(l,e){l.uniform1fv(this.addr,e)}function ig(l,e){const t=tr(e,this.size,2);l.uniform2fv(this.addr,t)}function rg(l,e){const t=tr(e,this.size,3);l.uniform3fv(this.addr,t)}function sg(l,e){const t=tr(e,this.size,4);l.uniform4fv(this.addr,t)}function ag(l,e){const t=tr(e,this.size,4);l.uniformMatrix2fv(this.addr,!1,t)}function og(l,e){const t=tr(e,this.size,9);l.uniformMatrix3fv(this.addr,!1,t)}function lg(l,e){const t=tr(e,this.size,16);l.uniformMatrix4fv(this.addr,!1,t)}function cg(l,e){l.uniform1iv(this.addr,e)}function ug(l,e){l.uniform2iv(this.addr,e)}function hg(l,e){l.uniform3iv(this.addr,e)}function dg(l,e){l.uniform4iv(this.addr,e)}function fg(l,e){l.uniform1uiv(this.addr,e)}function pg(l,e){l.uniform2uiv(this.addr,e)}function mg(l,e){l.uniform3uiv(this.addr,e)}function gg(l,e){l.uniform4uiv(this.addr,e)}function _g(l,e,t){const n=this.cache,i=e.length,r=Ys(t,i);gt(n,r)||(l.uniform1iv(this.addr,r),_t(n,r));for(let s=0;s!==i;++s)t.setTexture2D(e[s]||Eu,r[s])}function vg(l,e,t){const n=this.cache,i=e.length,r=Ys(t,i);gt(n,r)||(l.uniform1iv(this.addr,r),_t(n,r));for(let s=0;s!==i;++s)t.setTexture3D(e[s]||Lu,r[s])}function xg(l,e,t){const n=this.cache,i=e.length,r=Ys(t,i);gt(n,r)||(l.uniform1iv(this.addr,r),_t(n,r));for(let s=0;s!==i;++s)t.setTextureCube(e[s]||Ru,r[s])}function yg(l,e,t){const n=this.cache,i=e.length,r=Ys(t,i);gt(n,r)||(l.uniform1iv(this.addr,r),_t(n,r));for(let s=0;s!==i;++s)t.setTexture2DArray(e[s]||Cu,r[s])}function bg(l){switch(l){case 5126:return ng;case 35664:return ig;case 35665:return rg;case 35666:return sg;case 35674:return ag;case 35675:return og;case 35676:return lg;case 5124:case 35670:return cg;case 35667:case 35671:return ug;case 35668:case 35672:return hg;case 35669:case 35673:return dg;case 5125:return fg;case 36294:return pg;case 36295:return mg;case 36296:return gg;case 35678:case 36198:case 36298:case 36306:case 35682:return _g;case 35679:case 36299:case 36307:return vg;case 35680:case 36300:case 36308:case 36293:return xg;case 36289:case 36303:case 36311:case 36292:return yg}}class Mg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=tg(t.type)}}class Sg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=bg(t.type)}}class wg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,s=i.length;r!==s;++r){const a=i[r];a.setValue(e,t[a.id],n)}}}const Ua=/(\w+)(\])?(\[|\.)?/g;function Kl(l,e){l.seq.push(e),l.map[e.id]=e}function Tg(l,e,t){const n=l.name,i=n.length;for(Ua.lastIndex=0;;){const r=Ua.exec(n),s=Ua.lastIndex;let a=r[1];const o=r[2]==="]",c=r[3];if(o&&(a=a|0),c===void 0||c==="["&&s+2===i){Kl(t,c===void 0?new Mg(a,l,e):new Sg(a,l,e));break}else{let h=t.map[a];h===void 0&&(h=new wg(a),Kl(t,h)),t=h}}}class Fs{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),s=e.getUniformLocation(t,r.name);Tg(r,s,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,s=t.length;r!==s;++r){const a=t[r],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const s=e[i];s.id in t&&n.push(s)}return n}}function Zl(l,e,t){const n=l.createShader(e);return l.shaderSource(n,t),l.compileShader(n),n}let Ag=0;function Eg(l,e){const t=l.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let s=i;s<r;s++){const a=s+1;n.push(`${a===e?">":" "} ${a}: ${t[s]}`)}return n.join(`
`)}function Cg(l){switch(l){case ri:return["Linear","( value )"];case nt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",l),["Linear","( value )"]}}function Jl(l,e,t){const n=l.getShaderParameter(e,35713),i=l.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const s=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+Eg(l.getShaderSource(e),s)}else return i}function Lg(l,e){const t=Cg(e);return"vec4 "+l+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Rg(l,e){let t;switch(e){case Dh:t="Linear";break;case Ih:t="Reinhard";break;case Uh:t="OptimizedCineon";break;case Oh:t="ACESFilmic";break;case Fh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+l+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Pg(l){return[l.extensionDerivatives||l.envMapCubeUVHeight||l.bumpMap||l.normalMapTangentSpace||l.clearcoatNormalMap||l.flatShading||l.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(l.extensionFragDepth||l.logarithmicDepthBuffer)&&l.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",l.extensionDrawBuffers&&l.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(l.extensionShaderTextureLOD||l.envMap||l.transmission)&&l.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Rr).join(`
`)}function Dg(l){const e=[];for(const t in l){const n=l[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Ig(l,e){const t={},n=l.getProgramParameter(e,35721);for(let i=0;i<n;i++){const r=l.getActiveAttrib(e,i),s=r.name;let a=1;r.type===35674&&(a=2),r.type===35675&&(a=3),r.type===35676&&(a=4),t[s]={type:r.type,location:l.getAttribLocation(e,s),locationSize:a}}return t}function Rr(l){return l!==""}function $l(l,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return l.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ql(l,e){return l.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Ug=/^[ \t]*#include +<([\w\d./]+)>/gm;function to(l){return l.replace(Ug,Og)}function Og(l,e){const t=He[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return to(t)}const Fg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ec(l){return l.replace(Fg,Ng)}function Ng(l,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function tc(l){let e="precision "+l.precision+` float;
precision `+l.precision+" int;";return l.precision==="highp"?e+=`
#define HIGH_PRECISION`:l.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:l.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function kg(l){let e="SHADOWMAP_TYPE_BASIC";return l.shadowMapType===tu?e="SHADOWMAP_TYPE_PCF":l.shadowMapType===nu?e="SHADOWMAP_TYPE_PCF_SOFT":l.shadowMapType===Lr&&(e="SHADOWMAP_TYPE_VSM"),e}function Bg(l){let e="ENVMAP_TYPE_CUBE";if(l.envMap)switch(l.envMapMode){case Xi:case Yi:e="ENVMAP_TYPE_CUBE";break;case Ws:e="ENVMAP_TYPE_CUBE_UV";break}return e}function zg(l){let e="ENVMAP_MODE_REFLECTION";if(l.envMap)switch(l.envMapMode){case Yi:e="ENVMAP_MODE_REFRACTION";break}return e}function Gg(l){let e="ENVMAP_BLENDING_NONE";if(l.envMap)switch(l.combine){case su:e="ENVMAP_BLENDING_MULTIPLY";break;case Rh:e="ENVMAP_BLENDING_MIX";break;case Ph:e="ENVMAP_BLENDING_ADD";break}return e}function Vg(l){const e=l.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Hg(l,e,t,n){const i=l.getContext(),r=t.defines;let s=t.vertexShader,a=t.fragmentShader;const o=kg(t),c=Bg(t),u=zg(t),h=Gg(t),d=Vg(t),p=t.isWebGL2?"":Pg(t),g=Dg(r),_=i.createProgram();let m,f,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=[g].filter(Rr).join(`
`),m.length>0&&(m+=`
`),f=[p,g].filter(Rr).join(`
`),f.length>0&&(f+=`
`)):(m=[tc(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs2?"#define USE_UV2":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+o:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Rr).join(`
`),f=[p,tc(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs2?"#define USE_UV2":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+o:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Rn?"#define TONE_MAPPING":"",t.toneMapping!==Rn?He.tonemapping_pars_fragment:"",t.toneMapping!==Rn?Rg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",He.encodings_pars_fragment,Lg("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Rr).join(`
`)),s=to(s),s=$l(s,t),s=Ql(s,t),a=to(a),a=$l(a,t),a=Ql(a,t),s=ec(s),a=ec(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===bl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===bl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const y=v+m+s,x=v+f+a,b=Zl(i,35633,y),T=Zl(i,35632,x);if(i.attachShader(_,b),i.attachShader(_,T),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_),l.debug.checkShaderErrors){const S=i.getProgramInfoLog(_).trim(),E=i.getShaderInfoLog(b).trim(),J=i.getShaderInfoLog(T).trim();let D=!0,P=!0;if(i.getProgramParameter(_,35714)===!1)if(D=!1,typeof l.debug.onShaderError=="function")l.debug.onShaderError(i,_,b,T);else{const I=Jl(i,b,"vertex"),B=Jl(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,35715)+`

Program Info Log: `+S+`
`+I+`
`+B)}else S!==""?console.warn("THREE.WebGLProgram: Program Info Log:",S):(E===""||J==="")&&(P=!1);P&&(this.diagnostics={runnable:D,programLog:S,vertexShader:{log:E,prefix:m},fragmentShader:{log:J,prefix:f}})}i.deleteShader(b),i.deleteShader(T);let C;this.getUniforms=function(){return C===void 0&&(C=new Fs(i,_)),C};let L;return this.getAttributes=function(){return L===void 0&&(L=Ig(i,_)),L},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.name=t.shaderName,this.id=Ag++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=b,this.fragmentShader=T,this}let Wg=0;class jg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),s=this._getShaderCacheForMaterial(e);return s.has(i)===!1&&(s.add(i),i.usedTimes++),s.has(r)===!1&&(s.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Xg(e),t.set(e,n)),n}}class Xg{constructor(e){this.id=Wg++,this.code=e,this.usedTimes=0}}function Yg(l,e,t,n,i,r,s){const a=new _o,o=new jg,c=[],u=i.isWebGL2,h=i.logarithmicDepthBuffer,d=i.vertexTextures;let p=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return S===1?"uv2":"uv"}function m(S,E,J,D,P){const I=D.fog,B=P.geometry,q=S.isMeshStandardMaterial?D.environment:null,ie=(S.isMeshStandardMaterial?t:e).get(S.envMap||q),Z=ie&&ie.mapping===Ws?ie.image.height:null,H=g[S.type];S.precision!==null&&(p=i.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const j=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,F=j!==void 0?j.length:0;let G=0;B.morphAttributes.position!==void 0&&(G=1),B.morphAttributes.normal!==void 0&&(G=2),B.morphAttributes.color!==void 0&&(G=3);let N,z,W,Q;if(H){const Te=fn[H];N=Te.vertexShader,z=Te.fragmentShader}else N=S.vertexShader,z=S.fragmentShader,o.update(S),W=o.getVertexShaderID(S),Q=o.getFragmentShaderID(S);const U=l.getRenderTarget(),re=P.isInstancedMesh===!0,he=!!S.map,se=!!S.matcap,le=!!ie,oe=!!S.aoMap,xe=!!S.lightMap,Ce=!!S.bumpMap,Ae=!!S.normalMap,Le=!!S.displacementMap,Oe=!!S.emissiveMap,_e=!!S.metalnessMap,Me=!!S.roughnessMap,ye=S.clearcoat>0,ce=S.iridescence>0,w=S.sheen>0,M=S.transmission>0,V=ye&&!!S.clearcoatMap,$=ye&&!!S.clearcoatNormalMap,ue=ye&&!!S.clearcoatRoughnessMap,me=ce&&!!S.iridescenceMap,R=ce&&!!S.iridescenceThicknessMap,ee=w&&!!S.sheenColorMap,K=w&&!!S.sheenRoughnessMap,ve=!!S.specularMap,fe=!!S.specularColorMap,be=!!S.specularIntensityMap,de=M&&!!S.transmissionMap,pe=M&&!!S.thicknessMap,Se=!!S.gradientMap,Re=!!S.alphaMap,Ge=S.alphaTest>0,O=!!S.extensions,te=!!B.attributes.uv2;return{isWebGL2:u,shaderID:H,shaderName:S.type,vertexShader:N,fragmentShader:z,defines:S.defines,customVertexShaderID:W,customFragmentShaderID:Q,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,instancing:re,instancingColor:re&&P.instanceColor!==null,supportsVertexTextures:d,outputEncoding:U===null?l.outputEncoding:U.isXRRenderTarget===!0?U.texture.encoding:ri,map:he,matcap:se,envMap:le,envMapMode:le&&ie.mapping,envMapCubeUVHeight:Z,aoMap:oe,lightMap:xe,bumpMap:Ce,normalMap:Ae,displacementMap:d&&Le,emissiveMap:Oe,normalMapObjectSpace:Ae&&S.normalMapType===td,normalMapTangentSpace:Ae&&S.normalMapType===hu,decodeVideoTexture:he&&S.map.isVideoTexture===!0&&S.map.encoding===nt,metalnessMap:_e,roughnessMap:Me,clearcoat:ye,clearcoatMap:V,clearcoatNormalMap:$,clearcoatRoughnessMap:ue,iridescence:ce,iridescenceMap:me,iridescenceThicknessMap:R,sheen:w,sheenColorMap:ee,sheenRoughnessMap:K,specularMap:ve,specularColorMap:fe,specularIntensityMap:be,transmission:M,transmissionMap:de,thicknessMap:pe,gradientMap:Se,opaque:S.transparent===!1&&S.blending===Gi,alphaMap:Re,alphaTest:Ge,combine:S.combine,mapUv:he&&_(S.map.channel),aoMapUv:oe&&_(S.aoMap.channel),lightMapUv:xe&&_(S.lightMap.channel),bumpMapUv:Ce&&_(S.bumpMap.channel),normalMapUv:Ae&&_(S.normalMap.channel),displacementMapUv:Le&&_(S.displacementMap.channel),emissiveMapUv:Oe&&_(S.emissiveMap.channel),metalnessMapUv:_e&&_(S.metalnessMap.channel),roughnessMapUv:Me&&_(S.roughnessMap.channel),clearcoatMapUv:V&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:$&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ue&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:me&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:R&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:ee&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:K&&_(S.sheenRoughnessMap.channel),specularMapUv:ve&&_(S.specularMap.channel),specularColorMapUv:fe&&_(S.specularColorMap.channel),specularIntensityMapUv:be&&_(S.specularIntensityMap.channel),transmissionMapUv:de&&_(S.transmissionMap.channel),thicknessMapUv:pe&&_(S.thicknessMap.channel),alphaMapUv:Re&&_(S.alphaMap.channel),vertexTangents:Ae&&!!B.attributes.tangent,vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,vertexUvs2:te,pointsUvs:P.isPoints===!0&&!!B.attributes.uv&&(he||Re),fog:!!I,useFog:S.fog===!0,fogExp2:I&&I.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:P.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:F,morphTextureStride:G,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:S.dithering,shadowMapEnabled:l.shadowMap.enabled&&J.length>0,shadowMapType:l.shadowMap.type,toneMapping:S.toneMapped?l.toneMapping:Rn,useLegacyLights:l.useLegacyLights,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Kt,flipSided:S.side===Nt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:O&&S.extensions.derivatives===!0,extensionFragDepth:O&&S.extensions.fragDepth===!0,extensionDrawBuffers:O&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:O&&S.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:S.customProgramCacheKey()}}function f(S){const E=[];if(S.shaderID?E.push(S.shaderID):(E.push(S.customVertexShaderID),E.push(S.customFragmentShaderID)),S.defines!==void 0)for(const J in S.defines)E.push(J),E.push(S.defines[J]);return S.isRawShaderMaterial===!1&&(v(E,S),y(E,S),E.push(l.outputEncoding)),E.push(S.customProgramCacheKey),E.join()}function v(S,E){S.push(E.precision),S.push(E.outputEncoding),S.push(E.envMapMode),S.push(E.envMapCubeUVHeight),S.push(E.mapUv),S.push(E.alphaMapUv),S.push(E.lightMapUv),S.push(E.aoMapUv),S.push(E.bumpMapUv),S.push(E.normalMapUv),S.push(E.displacementMapUv),S.push(E.emissiveMapUv),S.push(E.metalnessMapUv),S.push(E.roughnessMapUv),S.push(E.clearcoatMapUv),S.push(E.clearcoatNormalMapUv),S.push(E.clearcoatRoughnessMapUv),S.push(E.iridescenceMapUv),S.push(E.iridescenceThicknessMapUv),S.push(E.sheenColorMapUv),S.push(E.sheenRoughnessMapUv),S.push(E.specularMapUv),S.push(E.specularColorMapUv),S.push(E.specularIntensityMapUv),S.push(E.transmissionMapUv),S.push(E.thicknessMapUv),S.push(E.combine),S.push(E.fogExp2),S.push(E.sizeAttenuation),S.push(E.morphTargetsCount),S.push(E.morphAttributeCount),S.push(E.numDirLights),S.push(E.numPointLights),S.push(E.numSpotLights),S.push(E.numSpotLightMaps),S.push(E.numHemiLights),S.push(E.numRectAreaLights),S.push(E.numDirLightShadows),S.push(E.numPointLightShadows),S.push(E.numSpotLightShadows),S.push(E.numSpotLightShadowsWithMaps),S.push(E.shadowMapType),S.push(E.toneMapping),S.push(E.numClippingPlanes),S.push(E.numClipIntersection),S.push(E.depthPacking)}function y(S,E){a.disableAll(),E.isWebGL2&&a.enable(0),E.supportsVertexTextures&&a.enable(1),E.instancing&&a.enable(2),E.instancingColor&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUvs2&&a.enable(13),E.vertexTangents&&a.enable(14),S.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.skinning&&a.enable(4),E.morphTargets&&a.enable(5),E.morphNormals&&a.enable(6),E.morphColors&&a.enable(7),E.premultipliedAlpha&&a.enable(8),E.shadowMapEnabled&&a.enable(9),E.useLegacyLights&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.decodeVideoTexture&&a.enable(17),E.opaque&&a.enable(18),E.pointsUvs&&a.enable(19),S.push(a.mask)}function x(S){const E=g[S.type];let J;if(E){const D=fn[E];J=Su.clone(D.uniforms)}else J=S.uniforms;return J}function b(S,E){let J;for(let D=0,P=c.length;D<P;D++){const I=c[D];if(I.cacheKey===E){J=I,++J.usedTimes;break}}return J===void 0&&(J=new Hg(l,E,S,r),c.push(J)),J}function T(S){if(--S.usedTimes===0){const E=c.indexOf(S);c[E]=c[c.length-1],c.pop(),S.destroy()}}function C(S){o.remove(S)}function L(){o.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:x,acquireProgram:b,releaseProgram:T,releaseShaderCache:C,programs:c,dispose:L}}function qg(){let l=new WeakMap;function e(r){let s=l.get(r);return s===void 0&&(s={},l.set(r,s)),s}function t(r){l.delete(r)}function n(r,s,a){l.get(r)[s]=a}function i(){l=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function Kg(l,e){return l.groupOrder!==e.groupOrder?l.groupOrder-e.groupOrder:l.renderOrder!==e.renderOrder?l.renderOrder-e.renderOrder:l.material.id!==e.material.id?l.material.id-e.material.id:l.z!==e.z?l.z-e.z:l.id-e.id}function nc(l,e){return l.groupOrder!==e.groupOrder?l.groupOrder-e.groupOrder:l.renderOrder!==e.renderOrder?l.renderOrder-e.renderOrder:l.z!==e.z?e.z-l.z:l.id-e.id}function ic(){const l=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function s(h,d,p,g,_,m){let f=l[e];return f===void 0?(f={id:h.id,object:h,geometry:d,material:p,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},l[e]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=h.renderOrder,f.z=_,f.group=m),e++,f}function a(h,d,p,g,_,m){const f=s(h,d,p,g,_,m);p.transmission>0?n.push(f):p.transparent===!0?i.push(f):t.push(f)}function o(h,d,p,g,_,m){const f=s(h,d,p,g,_,m);p.transmission>0?n.unshift(f):p.transparent===!0?i.unshift(f):t.unshift(f)}function c(h,d){t.length>1&&t.sort(h||Kg),n.length>1&&n.sort(d||nc),i.length>1&&i.sort(d||nc)}function u(){for(let h=e,d=l.length;h<d;h++){const p=l[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:o,finish:u,sort:c}}function Zg(){let l=new WeakMap;function e(n,i){const r=l.get(n);let s;return r===void 0?(s=new ic,l.set(n,[s])):i>=r.length?(s=new ic,r.push(s)):s=r[i],s}function t(){l=new WeakMap}return{get:e,dispose:t}}function Jg(){const l={};return{get:function(e){if(l[e.id]!==void 0)return l[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new k,color:new Be};break;case"SpotLight":t={position:new k,direction:new k,color:new Be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new k,color:new Be,distance:0,decay:0};break;case"HemisphereLight":t={direction:new k,skyColor:new Be,groundColor:new Be};break;case"RectAreaLight":t={color:new Be,position:new k,halfWidth:new k,halfHeight:new k};break}return l[e.id]=t,t}}}function $g(){const l={};return{get:function(e){if(l[e.id]!==void 0)return l[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return l[e.id]=t,t}}}let Qg=0;function e0(l,e){return(e.castShadow?2:0)-(l.castShadow?2:0)+(e.map?1:0)-(l.map?1:0)}function t0(l,e){const t=new Jg,n=$g(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)i.probe.push(new k);const r=new k,s=new Xe,a=new Xe;function o(u,h){let d=0,p=0,g=0;for(let J=0;J<9;J++)i.probe[J].set(0,0,0);let _=0,m=0,f=0,v=0,y=0,x=0,b=0,T=0,C=0,L=0;u.sort(e0);const S=h===!0?Math.PI:1;for(let J=0,D=u.length;J<D;J++){const P=u[J],I=P.color,B=P.intensity,q=P.distance,ie=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)d+=I.r*B*S,p+=I.g*B*S,g+=I.b*B*S;else if(P.isLightProbe)for(let Z=0;Z<9;Z++)i.probe[Z].addScaledVector(P.sh.coefficients[Z],B);else if(P.isDirectionalLight){const Z=t.get(P);if(Z.color.copy(P.color).multiplyScalar(P.intensity*S),P.castShadow){const H=P.shadow,j=n.get(P);j.shadowBias=H.bias,j.shadowNormalBias=H.normalBias,j.shadowRadius=H.radius,j.shadowMapSize=H.mapSize,i.directionalShadow[_]=j,i.directionalShadowMap[_]=ie,i.directionalShadowMatrix[_]=P.shadow.matrix,x++}i.directional[_]=Z,_++}else if(P.isSpotLight){const Z=t.get(P);Z.position.setFromMatrixPosition(P.matrixWorld),Z.color.copy(I).multiplyScalar(B*S),Z.distance=q,Z.coneCos=Math.cos(P.angle),Z.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),Z.decay=P.decay,i.spot[f]=Z;const H=P.shadow;if(P.map&&(i.spotLightMap[C]=P.map,C++,H.updateMatrices(P),P.castShadow&&L++),i.spotLightMatrix[f]=H.matrix,P.castShadow){const j=n.get(P);j.shadowBias=H.bias,j.shadowNormalBias=H.normalBias,j.shadowRadius=H.radius,j.shadowMapSize=H.mapSize,i.spotShadow[f]=j,i.spotShadowMap[f]=ie,T++}f++}else if(P.isRectAreaLight){const Z=t.get(P);Z.color.copy(I).multiplyScalar(B),Z.halfWidth.set(P.width*.5,0,0),Z.halfHeight.set(0,P.height*.5,0),i.rectArea[v]=Z,v++}else if(P.isPointLight){const Z=t.get(P);if(Z.color.copy(P.color).multiplyScalar(P.intensity*S),Z.distance=P.distance,Z.decay=P.decay,P.castShadow){const H=P.shadow,j=n.get(P);j.shadowBias=H.bias,j.shadowNormalBias=H.normalBias,j.shadowRadius=H.radius,j.shadowMapSize=H.mapSize,j.shadowCameraNear=H.camera.near,j.shadowCameraFar=H.camera.far,i.pointShadow[m]=j,i.pointShadowMap[m]=ie,i.pointShadowMatrix[m]=P.shadow.matrix,b++}i.point[m]=Z,m++}else if(P.isHemisphereLight){const Z=t.get(P);Z.skyColor.copy(P.color).multiplyScalar(B*S),Z.groundColor.copy(P.groundColor).multiplyScalar(B*S),i.hemi[y]=Z,y++}}v>0&&(e.isWebGL2||l.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ee.LTC_FLOAT_1,i.rectAreaLTC2=Ee.LTC_FLOAT_2):l.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=Ee.LTC_HALF_1,i.rectAreaLTC2=Ee.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=p,i.ambient[2]=g;const E=i.hash;(E.directionalLength!==_||E.pointLength!==m||E.spotLength!==f||E.rectAreaLength!==v||E.hemiLength!==y||E.numDirectionalShadows!==x||E.numPointShadows!==b||E.numSpotShadows!==T||E.numSpotMaps!==C)&&(i.directional.length=_,i.spot.length=f,i.rectArea.length=v,i.point.length=m,i.hemi.length=y,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=T,i.spotShadowMap.length=T,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=T+C-L,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=L,E.directionalLength=_,E.pointLength=m,E.spotLength=f,E.rectAreaLength=v,E.hemiLength=y,E.numDirectionalShadows=x,E.numPointShadows=b,E.numSpotShadows=T,E.numSpotMaps=C,i.version=Qg++)}function c(u,h){let d=0,p=0,g=0,_=0,m=0;const f=h.matrixWorldInverse;for(let v=0,y=u.length;v<y;v++){const x=u[v];if(x.isDirectionalLight){const b=i.directional[d];b.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(f),d++}else if(x.isSpotLight){const b=i.spot[g];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(f),b.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(f),g++}else if(x.isRectAreaLight){const b=i.rectArea[_];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(f),a.identity(),s.copy(x.matrixWorld),s.premultiply(f),a.extractRotation(s),b.halfWidth.set(x.width*.5,0,0),b.halfHeight.set(0,x.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),_++}else if(x.isPointLight){const b=i.point[p];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(f),p++}else if(x.isHemisphereLight){const b=i.hemi[m];b.direction.setFromMatrixPosition(x.matrixWorld),b.direction.transformDirection(f),m++}}}return{setup:o,setupView:c,state:i}}function rc(l,e){const t=new t0(l,e),n=[],i=[];function r(){n.length=0,i.length=0}function s(h){n.push(h)}function a(h){i.push(h)}function o(h){t.setup(n,h)}function c(h){t.setupView(n,h)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:o,setupLightsView:c,pushLight:s,pushShadow:a}}function n0(l,e){let t=new WeakMap;function n(r,s=0){const a=t.get(r);let o;return a===void 0?(o=new rc(l,e),t.set(r,[o])):s>=a.length?(o=new rc(l,e),a.push(o)):o=a[s],o}function i(){t=new WeakMap}return{get:n,dispose:i}}class Pu extends ln{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ed,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Du extends ln{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const i0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,r0=`uniform sampler2D shadow_pass;
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
}`;function s0(l,e,t){let n=new vo;const i=new Ue,r=new Ue,s=new at,a=new Pu({depthPacking:uu}),o=new Du,c={},u=t.maxTextureSize,h={[mn]:Nt,[Nt]:mn,[Kt]:Kt},d=new Hn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ue},radius:{value:4}},vertexShader:i0,fragmentShader:r0}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new wt;g.setAttribute("position",new kt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new It(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=tu,this.render=function(x,b,T){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||x.length===0)return;const C=l.getRenderTarget(),L=l.getActiveCubeFace(),S=l.getActiveMipmapLevel(),E=l.state;E.setBlending(Vn),E.buffers.color.setClear(1,1,1,1),E.buffers.depth.setTest(!0),E.setScissorTest(!1);for(let J=0,D=x.length;J<D;J++){const P=x[J],I=P.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",P,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;i.copy(I.mapSize);const B=I.getFrameExtents();if(i.multiply(B),r.copy(I.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/B.x),i.x=r.x*B.x,I.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/B.y),i.y=r.y*B.y,I.mapSize.y=r.y)),I.map===null){const ie=this.type!==Lr?{minFilter:yt,magFilter:yt}:{};I.map=new si(i.x,i.y,ie),I.map.texture.name=P.name+".shadowMap",I.camera.updateProjectionMatrix()}l.setRenderTarget(I.map),l.clear();const q=I.getViewportCount();for(let ie=0;ie<q;ie++){const Z=I.getViewport(ie);s.set(r.x*Z.x,r.y*Z.y,r.x*Z.z,r.y*Z.w),E.viewport(s),I.updateMatrices(P,ie),n=I.getFrustum(),y(b,T,I.camera,P,this.type)}I.isPointLightShadow!==!0&&this.type===Lr&&f(I,T),I.needsUpdate=!1}m.needsUpdate=!1,l.setRenderTarget(C,L,S)};function f(x,b){const T=e.update(_);d.defines.VSM_SAMPLES!==x.blurSamples&&(d.defines.VSM_SAMPLES=x.blurSamples,p.defines.VSM_SAMPLES=x.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),x.mapPass===null&&(x.mapPass=new si(i.x,i.y)),d.uniforms.shadow_pass.value=x.map.texture,d.uniforms.resolution.value=x.mapSize,d.uniforms.radius.value=x.radius,l.setRenderTarget(x.mapPass),l.clear(),l.renderBufferDirect(b,null,T,d,_,null),p.uniforms.shadow_pass.value=x.mapPass.texture,p.uniforms.resolution.value=x.mapSize,p.uniforms.radius.value=x.radius,l.setRenderTarget(x.map),l.clear(),l.renderBufferDirect(b,null,T,p,_,null)}function v(x,b,T,C){let L=null;const S=T.isPointLight===!0?x.customDistanceMaterial:x.customDepthMaterial;if(S!==void 0)L=S;else if(L=T.isPointLight===!0?o:a,l.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const E=L.uuid,J=b.uuid;let D=c[E];D===void 0&&(D={},c[E]=D);let P=D[J];P===void 0&&(P=L.clone(),D[J]=P),L=P}if(L.visible=b.visible,L.wireframe=b.wireframe,C===Lr?L.side=b.shadowSide!==null?b.shadowSide:b.side:L.side=b.shadowSide!==null?b.shadowSide:h[b.side],L.alphaMap=b.alphaMap,L.alphaTest=b.alphaTest,L.map=b.map,L.clipShadows=b.clipShadows,L.clippingPlanes=b.clippingPlanes,L.clipIntersection=b.clipIntersection,L.displacementMap=b.displacementMap,L.displacementScale=b.displacementScale,L.displacementBias=b.displacementBias,L.wireframeLinewidth=b.wireframeLinewidth,L.linewidth=b.linewidth,T.isPointLight===!0&&L.isMeshDistanceMaterial===!0){const E=l.properties.get(L);E.light=T}return L}function y(x,b,T,C,L){if(x.visible===!1)return;if(x.layers.test(b.layers)&&(x.isMesh||x.isLine||x.isPoints)&&(x.castShadow||x.receiveShadow&&L===Lr)&&(!x.frustumCulled||n.intersectsObject(x))){x.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,x.matrixWorld);const J=e.update(x),D=x.material;if(Array.isArray(D)){const P=J.groups;for(let I=0,B=P.length;I<B;I++){const q=P[I],ie=D[q.materialIndex];if(ie&&ie.visible){const Z=v(x,ie,C,L);l.renderBufferDirect(T,null,J,Z,x,q)}}}else if(D.visible){const P=v(x,D,C,L);l.renderBufferDirect(T,null,J,P,x,null)}}const E=x.children;for(let J=0,D=E.length;J<D;J++)y(E[J],b,T,C,L)}}function a0(l,e,t){const n=t.isWebGL2;function i(){let O=!1;const te=new at;let ge=null;const Te=new at(0,0,0,0);return{setMask:function(De){ge!==De&&!O&&(l.colorMask(De,De,De,De),ge=De)},setLocked:function(De){O=De},setClear:function(De,Ze,Ye,it,tt){tt===!0&&(De*=it,Ze*=it,Ye*=it),te.set(De,Ze,Ye,it),Te.equals(te)===!1&&(l.clearColor(De,Ze,Ye,it),Te.copy(te))},reset:function(){O=!1,ge=null,Te.set(-1,0,0,0)}}}function r(){let O=!1,te=null,ge=null,Te=null;return{setTest:function(De){De?U(2929):re(2929)},setMask:function(De){te!==De&&!O&&(l.depthMask(De),te=De)},setFunc:function(De){if(ge!==De){switch(De){case Sh:l.depthFunc(512);break;case wh:l.depthFunc(519);break;case Th:l.depthFunc(513);break;case qa:l.depthFunc(515);break;case Ah:l.depthFunc(514);break;case Eh:l.depthFunc(518);break;case Ch:l.depthFunc(516);break;case Lh:l.depthFunc(517);break;default:l.depthFunc(515)}ge=De}},setLocked:function(De){O=De},setClear:function(De){Te!==De&&(l.clearDepth(De),Te=De)},reset:function(){O=!1,te=null,ge=null,Te=null}}}function s(){let O=!1,te=null,ge=null,Te=null,De=null,Ze=null,Ye=null,it=null,tt=null;return{setTest:function(ot){O||(ot?U(2960):re(2960))},setMask:function(ot){te!==ot&&!O&&(l.stencilMask(ot),te=ot)},setFunc:function(ot,Je,Qe){(ge!==ot||Te!==Je||De!==Qe)&&(l.stencilFunc(ot,Je,Qe),ge=ot,Te=Je,De=Qe)},setOp:function(ot,Je,Qe){(Ze!==ot||Ye!==Je||it!==Qe)&&(l.stencilOp(ot,Je,Qe),Ze=ot,Ye=Je,it=Qe)},setLocked:function(ot){O=ot},setClear:function(ot){tt!==ot&&(l.clearStencil(ot),tt=ot)},reset:function(){O=!1,te=null,ge=null,Te=null,De=null,Ze=null,Ye=null,it=null,tt=null}}}const a=new i,o=new r,c=new s,u=new WeakMap,h=new WeakMap;let d={},p={},g=new WeakMap,_=[],m=null,f=!1,v=null,y=null,x=null,b=null,T=null,C=null,L=null,S=!1,E=null,J=null,D=null,P=null,I=null;const B=l.getParameter(35661);let q=!1,ie=0;const Z=l.getParameter(7938);Z.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(Z)[1]),q=ie>=1):Z.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),q=ie>=2);let H=null,j={};const F=l.getParameter(3088),G=l.getParameter(2978),N=new at().fromArray(F),z=new at().fromArray(G);function W(O,te,ge){const Te=new Uint8Array(4),De=l.createTexture();l.bindTexture(O,De),l.texParameteri(O,10241,9728),l.texParameteri(O,10240,9728);for(let Ze=0;Ze<ge;Ze++)l.texImage2D(te+Ze,0,6408,1,1,0,6408,5121,Te);return De}const Q={};Q[3553]=W(3553,3553,1),Q[34067]=W(34067,34069,6),a.setClear(0,0,0,1),o.setClear(1),c.setClear(0),U(2929),o.setFunc(qa),Le(!1),Oe(Ho),U(2884),Ce(Vn);function U(O){d[O]!==!0&&(l.enable(O),d[O]=!0)}function re(O){d[O]!==!1&&(l.disable(O),d[O]=!1)}function he(O,te){return p[O]!==te?(l.bindFramebuffer(O,te),p[O]=te,n&&(O===36009&&(p[36160]=te),O===36160&&(p[36009]=te)),!0):!1}function se(O,te){let ge=_,Te=!1;if(O)if(ge=g.get(te),ge===void 0&&(ge=[],g.set(te,ge)),O.isWebGLMultipleRenderTargets){const De=O.texture;if(ge.length!==De.length||ge[0]!==36064){for(let Ze=0,Ye=De.length;Ze<Ye;Ze++)ge[Ze]=36064+Ze;ge.length=De.length,Te=!0}}else ge[0]!==36064&&(ge[0]=36064,Te=!0);else ge[0]!==1029&&(ge[0]=1029,Te=!0);Te&&(t.isWebGL2?l.drawBuffers(ge):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ge))}function le(O){return m!==O?(l.useProgram(O),m=O,!0):!1}const oe={[ki]:32774,[dh]:32778,[fh]:32779};if(n)oe[Yo]=32775,oe[qo]=32776;else{const O=e.get("EXT_blend_minmax");O!==null&&(oe[Yo]=O.MIN_EXT,oe[qo]=O.MAX_EXT)}const xe={[ph]:0,[mh]:1,[gh]:768,[iu]:770,[Mh]:776,[yh]:774,[vh]:772,[_h]:769,[ru]:771,[bh]:775,[xh]:773};function Ce(O,te,ge,Te,De,Ze,Ye,it){if(O===Vn){f===!0&&(re(3042),f=!1);return}if(f===!1&&(U(3042),f=!0),O!==hh){if(O!==v||it!==S){if((y!==ki||T!==ki)&&(l.blendEquation(32774),y=ki,T=ki),it)switch(O){case Gi:l.blendFuncSeparate(1,771,1,771);break;case Wo:l.blendFunc(1,1);break;case jo:l.blendFuncSeparate(0,769,0,1);break;case Xo:l.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Gi:l.blendFuncSeparate(770,771,1,771);break;case Wo:l.blendFunc(770,1);break;case jo:l.blendFuncSeparate(0,769,0,1);break;case Xo:l.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}x=null,b=null,C=null,L=null,v=O,S=it}return}De=De||te,Ze=Ze||ge,Ye=Ye||Te,(te!==y||De!==T)&&(l.blendEquationSeparate(oe[te],oe[De]),y=te,T=De),(ge!==x||Te!==b||Ze!==C||Ye!==L)&&(l.blendFuncSeparate(xe[ge],xe[Te],xe[Ze],xe[Ye]),x=ge,b=Te,C=Ze,L=Ye),v=O,S=!1}function Ae(O,te){O.side===Kt?re(2884):U(2884);let ge=O.side===Nt;te&&(ge=!ge),Le(ge),O.blending===Gi&&O.transparent===!1?Ce(Vn):Ce(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),a.setMask(O.colorWrite);const Te=O.stencilWrite;c.setTest(Te),Te&&(c.setMask(O.stencilWriteMask),c.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),c.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Me(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?U(32926):re(32926)}function Le(O){E!==O&&(O?l.frontFace(2304):l.frontFace(2305),E=O)}function Oe(O){O!==ch?(U(2884),O!==J&&(O===Ho?l.cullFace(1029):O===uh?l.cullFace(1028):l.cullFace(1032))):re(2884),J=O}function _e(O){O!==D&&(q&&l.lineWidth(O),D=O)}function Me(O,te,ge){O?(U(32823),(P!==te||I!==ge)&&(l.polygonOffset(te,ge),P=te,I=ge)):re(32823)}function ye(O){O?U(3089):re(3089)}function ce(O){O===void 0&&(O=33984+B-1),H!==O&&(l.activeTexture(O),H=O)}function w(O,te,ge){ge===void 0&&(H===null?ge=33984+B-1:ge=H);let Te=j[ge];Te===void 0&&(Te={type:void 0,texture:void 0},j[ge]=Te),(Te.type!==O||Te.texture!==te)&&(H!==ge&&(l.activeTexture(ge),H=ge),l.bindTexture(O,te||Q[O]),Te.type=O,Te.texture=te)}function M(){const O=j[H];O!==void 0&&O.type!==void 0&&(l.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function V(){try{l.compressedTexImage2D.apply(l,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function $(){try{l.compressedTexImage3D.apply(l,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ue(){try{l.texSubImage2D.apply(l,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function me(){try{l.texSubImage3D.apply(l,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function R(){try{l.compressedTexSubImage2D.apply(l,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ee(){try{l.compressedTexSubImage3D.apply(l,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function K(){try{l.texStorage2D.apply(l,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ve(){try{l.texStorage3D.apply(l,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function fe(){try{l.texImage2D.apply(l,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function be(){try{l.texImage3D.apply(l,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function de(O){N.equals(O)===!1&&(l.scissor(O.x,O.y,O.z,O.w),N.copy(O))}function pe(O){z.equals(O)===!1&&(l.viewport(O.x,O.y,O.z,O.w),z.copy(O))}function Se(O,te){let ge=h.get(te);ge===void 0&&(ge=new WeakMap,h.set(te,ge));let Te=ge.get(O);Te===void 0&&(Te=l.getUniformBlockIndex(te,O.name),ge.set(O,Te))}function Re(O,te){const Te=h.get(te).get(O);u.get(te)!==Te&&(l.uniformBlockBinding(te,Te,O.__bindingPointIndex),u.set(te,Te))}function Ge(){l.disable(3042),l.disable(2884),l.disable(2929),l.disable(32823),l.disable(3089),l.disable(2960),l.disable(32926),l.blendEquation(32774),l.blendFunc(1,0),l.blendFuncSeparate(1,0,1,0),l.colorMask(!0,!0,!0,!0),l.clearColor(0,0,0,0),l.depthMask(!0),l.depthFunc(513),l.clearDepth(1),l.stencilMask(4294967295),l.stencilFunc(519,0,4294967295),l.stencilOp(7680,7680,7680),l.clearStencil(0),l.cullFace(1029),l.frontFace(2305),l.polygonOffset(0,0),l.activeTexture(33984),l.bindFramebuffer(36160,null),n===!0&&(l.bindFramebuffer(36009,null),l.bindFramebuffer(36008,null)),l.useProgram(null),l.lineWidth(1),l.scissor(0,0,l.canvas.width,l.canvas.height),l.viewport(0,0,l.canvas.width,l.canvas.height),d={},H=null,j={},p={},g=new WeakMap,_=[],m=null,f=!1,v=null,y=null,x=null,b=null,T=null,C=null,L=null,S=!1,E=null,J=null,D=null,P=null,I=null,N.set(0,0,l.canvas.width,l.canvas.height),z.set(0,0,l.canvas.width,l.canvas.height),a.reset(),o.reset(),c.reset()}return{buffers:{color:a,depth:o,stencil:c},enable:U,disable:re,bindFramebuffer:he,drawBuffers:se,useProgram:le,setBlending:Ce,setMaterial:Ae,setFlipSided:Le,setCullFace:Oe,setLineWidth:_e,setPolygonOffset:Me,setScissorTest:ye,activeTexture:ce,bindTexture:w,unbindTexture:M,compressedTexImage2D:V,compressedTexImage3D:$,texImage2D:fe,texImage3D:be,updateUBOMapping:Se,uniformBlockBinding:Re,texStorage2D:K,texStorage3D:ve,texSubImage2D:ue,texSubImage3D:me,compressedTexSubImage2D:R,compressedTexSubImage3D:ee,scissor:de,viewport:pe,reset:Ge}}function o0(l,e,t,n,i,r,s){const a=i.isWebGL2,o=i.maxTextures,c=i.maxCubemapSize,u=i.maxTextureSize,h=i.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let _;const m=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(w,M){return f?new OffscreenCanvas(w,M):kr("canvas")}function y(w,M,V,$){let ue=1;if((w.width>$||w.height>$)&&(ue=$/Math.max(w.width,w.height)),ue<1||M===!0)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap){const me=M?pu:Math.floor,R=me(ue*w.width),ee=me(ue*w.height);_===void 0&&(_=v(R,ee));const K=V?v(R,ee):_;return K.width=R,K.height=ee,K.getContext("2d").drawImage(w,0,0,R,ee),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+w.width+"x"+w.height+") to ("+R+"x"+ee+")."),K}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+w.width+"x"+w.height+")."),w;return w}function x(w){return eo(w.width)&&eo(w.height)}function b(w){return a?!1:w.wrapS!==Zt||w.wrapT!==Zt||w.minFilter!==yt&&w.minFilter!==Pt}function T(w,M){return w.generateMipmaps&&M&&w.minFilter!==yt&&w.minFilter!==Pt}function C(w){l.generateMipmap(w)}function L(w,M,V,$,ue=!1){if(a===!1)return M;if(w!==null){if(l[w]!==void 0)return l[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let me=M;return M===6403&&(V===5126&&(me=33326),V===5131&&(me=33325),V===5121&&(me=33321)),M===33319&&(V===5126&&(me=33328),V===5131&&(me=33327),V===5121&&(me=33323)),M===6408&&(V===5126&&(me=34836),V===5131&&(me=34842),V===5121&&(me=$===nt&&ue===!1?35907:32856),V===32819&&(me=32854),V===32820&&(me=32855)),(me===33325||me===33326||me===33327||me===33328||me===34842||me===34836)&&e.get("EXT_color_buffer_float"),me}function S(w,M,V){return T(w,V)===!0||w.isFramebufferTexture&&w.minFilter!==yt&&w.minFilter!==Pt?Math.log2(Math.max(M.width,M.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?M.mipmaps.length:1}function E(w){return w===yt||w===Za||w===Os?9728:9729}function J(w){const M=w.target;M.removeEventListener("dispose",J),P(M),M.isVideoTexture&&g.delete(M)}function D(w){const M=w.target;M.removeEventListener("dispose",D),B(M)}function P(w){const M=n.get(w);if(M.__webglInit===void 0)return;const V=w.source,$=m.get(V);if($){const ue=$[M.__cacheKey];ue.usedTimes--,ue.usedTimes===0&&I(w),Object.keys($).length===0&&m.delete(V)}n.remove(w)}function I(w){const M=n.get(w);l.deleteTexture(M.__webglTexture);const V=w.source,$=m.get(V);delete $[M.__cacheKey],s.memory.textures--}function B(w){const M=w.texture,V=n.get(w),$=n.get(M);if($.__webglTexture!==void 0&&(l.deleteTexture($.__webglTexture),s.memory.textures--),w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let ue=0;ue<6;ue++)l.deleteFramebuffer(V.__webglFramebuffer[ue]),V.__webglDepthbuffer&&l.deleteRenderbuffer(V.__webglDepthbuffer[ue]);else{if(l.deleteFramebuffer(V.__webglFramebuffer),V.__webglDepthbuffer&&l.deleteRenderbuffer(V.__webglDepthbuffer),V.__webglMultisampledFramebuffer&&l.deleteFramebuffer(V.__webglMultisampledFramebuffer),V.__webglColorRenderbuffer)for(let ue=0;ue<V.__webglColorRenderbuffer.length;ue++)V.__webglColorRenderbuffer[ue]&&l.deleteRenderbuffer(V.__webglColorRenderbuffer[ue]);V.__webglDepthRenderbuffer&&l.deleteRenderbuffer(V.__webglDepthRenderbuffer)}if(w.isWebGLMultipleRenderTargets)for(let ue=0,me=M.length;ue<me;ue++){const R=n.get(M[ue]);R.__webglTexture&&(l.deleteTexture(R.__webglTexture),s.memory.textures--),n.remove(M[ue])}n.remove(M),n.remove(w)}let q=0;function ie(){q=0}function Z(){const w=q;return w>=o&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+o),q+=1,w}function H(w){const M=[];return M.push(w.wrapS),M.push(w.wrapT),M.push(w.wrapR||0),M.push(w.magFilter),M.push(w.minFilter),M.push(w.anisotropy),M.push(w.internalFormat),M.push(w.format),M.push(w.type),M.push(w.generateMipmaps),M.push(w.premultiplyAlpha),M.push(w.flipY),M.push(w.unpackAlignment),M.push(w.encoding),M.join()}function j(w,M){const V=n.get(w);if(w.isVideoTexture&&ye(w),w.isRenderTargetTexture===!1&&w.version>0&&V.__version!==w.version){const $=w.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{re(V,w,M);return}}t.bindTexture(3553,V.__webglTexture,33984+M)}function F(w,M){const V=n.get(w);if(w.version>0&&V.__version!==w.version){re(V,w,M);return}t.bindTexture(35866,V.__webglTexture,33984+M)}function G(w,M){const V=n.get(w);if(w.version>0&&V.__version!==w.version){re(V,w,M);return}t.bindTexture(32879,V.__webglTexture,33984+M)}function N(w,M){const V=n.get(w);if(w.version>0&&V.__version!==w.version){he(V,w,M);return}t.bindTexture(34067,V.__webglTexture,33984+M)}const z={[qi]:10497,[Zt]:33071,[Gs]:33648},W={[yt]:9728,[Za]:9984,[Os]:9986,[Pt]:9729,[ou]:9985,[ni]:9987};function Q(w,M,V){if(V?(l.texParameteri(w,10242,z[M.wrapS]),l.texParameteri(w,10243,z[M.wrapT]),(w===32879||w===35866)&&l.texParameteri(w,32882,z[M.wrapR]),l.texParameteri(w,10240,W[M.magFilter]),l.texParameteri(w,10241,W[M.minFilter])):(l.texParameteri(w,10242,33071),l.texParameteri(w,10243,33071),(w===32879||w===35866)&&l.texParameteri(w,32882,33071),(M.wrapS!==Zt||M.wrapT!==Zt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),l.texParameteri(w,10240,E(M.magFilter)),l.texParameteri(w,10241,E(M.minFilter)),M.minFilter!==yt&&M.minFilter!==Pt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const $=e.get("EXT_texture_filter_anisotropic");if(M.magFilter===yt||M.minFilter!==Os&&M.minFilter!==ni||M.type===Gn&&e.has("OES_texture_float_linear")===!1||a===!1&&M.type===Or&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||n.get(M).__currentAnisotropy)&&(l.texParameterf(w,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy)}}function U(w,M){let V=!1;w.__webglInit===void 0&&(w.__webglInit=!0,M.addEventListener("dispose",J));const $=M.source;let ue=m.get($);ue===void 0&&(ue={},m.set($,ue));const me=H(M);if(me!==w.__cacheKey){ue[me]===void 0&&(ue[me]={texture:l.createTexture(),usedTimes:0},s.memory.textures++,V=!0),ue[me].usedTimes++;const R=ue[w.__cacheKey];R!==void 0&&(ue[w.__cacheKey].usedTimes--,R.usedTimes===0&&I(M)),w.__cacheKey=me,w.__webglTexture=ue[me].texture}return V}function re(w,M,V){let $=3553;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&($=35866),M.isData3DTexture&&($=32879);const ue=U(w,M),me=M.source;t.bindTexture($,w.__webglTexture,33984+V);const R=n.get(me);if(me.version!==R.__version||ue===!0){t.activeTexture(33984+V),l.pixelStorei(37440,M.flipY),l.pixelStorei(37441,M.premultiplyAlpha),l.pixelStorei(3317,M.unpackAlignment),l.pixelStorei(37443,0);const ee=b(M)&&x(M.image)===!1;let K=y(M.image,ee,!1,u);K=ce(M,K);const ve=x(K)||a,fe=r.convert(M.format,M.encoding);let be=r.convert(M.type),de=L(M.internalFormat,fe,be,M.encoding,M.isVideoTexture);Q($,M,ve);let pe;const Se=M.mipmaps,Re=a&&M.isVideoTexture!==!0,Ge=R.__version===void 0||ue===!0,O=S(M,K,ve);if(M.isDepthTexture)de=6402,a?M.type===Gn?de=36012:M.type===Qn?de=33190:M.type===Vi?de=35056:de=33189:M.type===Gn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===ei&&de===6402&&M.type!==lu&&M.type!==Qn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=Qn,be=r.convert(M.type)),M.format===Ki&&de===6402&&(de=34041,M.type!==Vi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=Vi,be=r.convert(M.type))),Ge&&(Re?t.texStorage2D(3553,1,de,K.width,K.height):t.texImage2D(3553,0,de,K.width,K.height,0,fe,be,null));else if(M.isDataTexture)if(Se.length>0&&ve){Re&&Ge&&t.texStorage2D(3553,O,de,Se[0].width,Se[0].height);for(let te=0,ge=Se.length;te<ge;te++)pe=Se[te],Re?t.texSubImage2D(3553,te,0,0,pe.width,pe.height,fe,be,pe.data):t.texImage2D(3553,te,de,pe.width,pe.height,0,fe,be,pe.data);M.generateMipmaps=!1}else Re?(Ge&&t.texStorage2D(3553,O,de,K.width,K.height),t.texSubImage2D(3553,0,0,0,K.width,K.height,fe,be,K.data)):t.texImage2D(3553,0,de,K.width,K.height,0,fe,be,K.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Re&&Ge&&t.texStorage3D(35866,O,de,Se[0].width,Se[0].height,K.depth);for(let te=0,ge=Se.length;te<ge;te++)pe=Se[te],M.format!==Jt?fe!==null?Re?t.compressedTexSubImage3D(35866,te,0,0,0,pe.width,pe.height,K.depth,fe,pe.data,0,0):t.compressedTexImage3D(35866,te,de,pe.width,pe.height,K.depth,0,pe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Re?t.texSubImage3D(35866,te,0,0,0,pe.width,pe.height,K.depth,fe,be,pe.data):t.texImage3D(35866,te,de,pe.width,pe.height,K.depth,0,fe,be,pe.data)}else{Re&&Ge&&t.texStorage2D(3553,O,de,Se[0].width,Se[0].height);for(let te=0,ge=Se.length;te<ge;te++)pe=Se[te],M.format!==Jt?fe!==null?Re?t.compressedTexSubImage2D(3553,te,0,0,pe.width,pe.height,fe,pe.data):t.compressedTexImage2D(3553,te,de,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Re?t.texSubImage2D(3553,te,0,0,pe.width,pe.height,fe,be,pe.data):t.texImage2D(3553,te,de,pe.width,pe.height,0,fe,be,pe.data)}else if(M.isDataArrayTexture)Re?(Ge&&t.texStorage3D(35866,O,de,K.width,K.height,K.depth),t.texSubImage3D(35866,0,0,0,0,K.width,K.height,K.depth,fe,be,K.data)):t.texImage3D(35866,0,de,K.width,K.height,K.depth,0,fe,be,K.data);else if(M.isData3DTexture)Re?(Ge&&t.texStorage3D(32879,O,de,K.width,K.height,K.depth),t.texSubImage3D(32879,0,0,0,0,K.width,K.height,K.depth,fe,be,K.data)):t.texImage3D(32879,0,de,K.width,K.height,K.depth,0,fe,be,K.data);else if(M.isFramebufferTexture){if(Ge)if(Re)t.texStorage2D(3553,O,de,K.width,K.height);else{let te=K.width,ge=K.height;for(let Te=0;Te<O;Te++)t.texImage2D(3553,Te,de,te,ge,0,fe,be,null),te>>=1,ge>>=1}}else if(Se.length>0&&ve){Re&&Ge&&t.texStorage2D(3553,O,de,Se[0].width,Se[0].height);for(let te=0,ge=Se.length;te<ge;te++)pe=Se[te],Re?t.texSubImage2D(3553,te,0,0,fe,be,pe):t.texImage2D(3553,te,de,fe,be,pe);M.generateMipmaps=!1}else Re?(Ge&&t.texStorage2D(3553,O,de,K.width,K.height),t.texSubImage2D(3553,0,0,0,fe,be,K)):t.texImage2D(3553,0,de,fe,be,K);T(M,ve)&&C($),R.__version=me.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function he(w,M,V){if(M.image.length!==6)return;const $=U(w,M),ue=M.source;t.bindTexture(34067,w.__webglTexture,33984+V);const me=n.get(ue);if(ue.version!==me.__version||$===!0){t.activeTexture(33984+V),l.pixelStorei(37440,M.flipY),l.pixelStorei(37441,M.premultiplyAlpha),l.pixelStorei(3317,M.unpackAlignment),l.pixelStorei(37443,0);const R=M.isCompressedTexture||M.image[0].isCompressedTexture,ee=M.image[0]&&M.image[0].isDataTexture,K=[];for(let te=0;te<6;te++)!R&&!ee?K[te]=y(M.image[te],!1,!0,c):K[te]=ee?M.image[te].image:M.image[te],K[te]=ce(M,K[te]);const ve=K[0],fe=x(ve)||a,be=r.convert(M.format,M.encoding),de=r.convert(M.type),pe=L(M.internalFormat,be,de,M.encoding),Se=a&&M.isVideoTexture!==!0,Re=me.__version===void 0||$===!0;let Ge=S(M,ve,fe);Q(34067,M,fe);let O;if(R){Se&&Re&&t.texStorage2D(34067,Ge,pe,ve.width,ve.height);for(let te=0;te<6;te++){O=K[te].mipmaps;for(let ge=0;ge<O.length;ge++){const Te=O[ge];M.format!==Jt?be!==null?Se?t.compressedTexSubImage2D(34069+te,ge,0,0,Te.width,Te.height,be,Te.data):t.compressedTexImage2D(34069+te,ge,pe,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Se?t.texSubImage2D(34069+te,ge,0,0,Te.width,Te.height,be,de,Te.data):t.texImage2D(34069+te,ge,pe,Te.width,Te.height,0,be,de,Te.data)}}}else{O=M.mipmaps,Se&&Re&&(O.length>0&&Ge++,t.texStorage2D(34067,Ge,pe,K[0].width,K[0].height));for(let te=0;te<6;te++)if(ee){Se?t.texSubImage2D(34069+te,0,0,0,K[te].width,K[te].height,be,de,K[te].data):t.texImage2D(34069+te,0,pe,K[te].width,K[te].height,0,be,de,K[te].data);for(let ge=0;ge<O.length;ge++){const De=O[ge].image[te].image;Se?t.texSubImage2D(34069+te,ge+1,0,0,De.width,De.height,be,de,De.data):t.texImage2D(34069+te,ge+1,pe,De.width,De.height,0,be,de,De.data)}}else{Se?t.texSubImage2D(34069+te,0,0,0,be,de,K[te]):t.texImage2D(34069+te,0,pe,be,de,K[te]);for(let ge=0;ge<O.length;ge++){const Te=O[ge];Se?t.texSubImage2D(34069+te,ge+1,0,0,be,de,Te.image[te]):t.texImage2D(34069+te,ge+1,pe,be,de,Te.image[te])}}}T(M,fe)&&C(34067),me.__version=ue.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function se(w,M,V,$,ue){const me=r.convert(V.format,V.encoding),R=r.convert(V.type),ee=L(V.internalFormat,me,R,V.encoding);n.get(M).__hasExternalTextures||(ue===32879||ue===35866?t.texImage3D(ue,0,ee,M.width,M.height,M.depth,0,me,R,null):t.texImage2D(ue,0,ee,M.width,M.height,0,me,R,null)),t.bindFramebuffer(36160,w),Me(M)?d.framebufferTexture2DMultisampleEXT(36160,$,ue,n.get(V).__webglTexture,0,_e(M)):(ue===3553||ue>=34069&&ue<=34074)&&l.framebufferTexture2D(36160,$,ue,n.get(V).__webglTexture,0),t.bindFramebuffer(36160,null)}function le(w,M,V){if(l.bindRenderbuffer(36161,w),M.depthBuffer&&!M.stencilBuffer){let $=33189;if(V||Me(M)){const ue=M.depthTexture;ue&&ue.isDepthTexture&&(ue.type===Gn?$=36012:ue.type===Qn&&($=33190));const me=_e(M);Me(M)?d.renderbufferStorageMultisampleEXT(36161,me,$,M.width,M.height):l.renderbufferStorageMultisample(36161,me,$,M.width,M.height)}else l.renderbufferStorage(36161,$,M.width,M.height);l.framebufferRenderbuffer(36160,36096,36161,w)}else if(M.depthBuffer&&M.stencilBuffer){const $=_e(M);V&&Me(M)===!1?l.renderbufferStorageMultisample(36161,$,35056,M.width,M.height):Me(M)?d.renderbufferStorageMultisampleEXT(36161,$,35056,M.width,M.height):l.renderbufferStorage(36161,34041,M.width,M.height),l.framebufferRenderbuffer(36160,33306,36161,w)}else{const $=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let ue=0;ue<$.length;ue++){const me=$[ue],R=r.convert(me.format,me.encoding),ee=r.convert(me.type),K=L(me.internalFormat,R,ee,me.encoding),ve=_e(M);V&&Me(M)===!1?l.renderbufferStorageMultisample(36161,ve,K,M.width,M.height):Me(M)?d.renderbufferStorageMultisampleEXT(36161,ve,K,M.width,M.height):l.renderbufferStorage(36161,K,M.width,M.height)}}l.bindRenderbuffer(36161,null)}function oe(w,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,w),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),j(M.depthTexture,0);const $=n.get(M.depthTexture).__webglTexture,ue=_e(M);if(M.depthTexture.format===ei)Me(M)?d.framebufferTexture2DMultisampleEXT(36160,36096,3553,$,0,ue):l.framebufferTexture2D(36160,36096,3553,$,0);else if(M.depthTexture.format===Ki)Me(M)?d.framebufferTexture2DMultisampleEXT(36160,33306,3553,$,0,ue):l.framebufferTexture2D(36160,33306,3553,$,0);else throw new Error("Unknown depthTexture format")}function xe(w){const M=n.get(w),V=w.isWebGLCubeRenderTarget===!0;if(w.depthTexture&&!M.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");oe(M.__webglFramebuffer,w)}else if(V){M.__webglDepthbuffer=[];for(let $=0;$<6;$++)t.bindFramebuffer(36160,M.__webglFramebuffer[$]),M.__webglDepthbuffer[$]=l.createRenderbuffer(),le(M.__webglDepthbuffer[$],w,!1)}else t.bindFramebuffer(36160,M.__webglFramebuffer),M.__webglDepthbuffer=l.createRenderbuffer(),le(M.__webglDepthbuffer,w,!1);t.bindFramebuffer(36160,null)}function Ce(w,M,V){const $=n.get(w);M!==void 0&&se($.__webglFramebuffer,w,w.texture,36064,3553),V!==void 0&&xe(w)}function Ae(w){const M=w.texture,V=n.get(w),$=n.get(M);w.addEventListener("dispose",D),w.isWebGLMultipleRenderTargets!==!0&&($.__webglTexture===void 0&&($.__webglTexture=l.createTexture()),$.__version=M.version,s.memory.textures++);const ue=w.isWebGLCubeRenderTarget===!0,me=w.isWebGLMultipleRenderTargets===!0,R=x(w)||a;if(ue){V.__webglFramebuffer=[];for(let ee=0;ee<6;ee++)V.__webglFramebuffer[ee]=l.createFramebuffer()}else{if(V.__webglFramebuffer=l.createFramebuffer(),me)if(i.drawBuffers){const ee=w.texture;for(let K=0,ve=ee.length;K<ve;K++){const fe=n.get(ee[K]);fe.__webglTexture===void 0&&(fe.__webglTexture=l.createTexture(),s.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&w.samples>0&&Me(w)===!1){const ee=me?M:[M];V.__webglMultisampledFramebuffer=l.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,V.__webglMultisampledFramebuffer);for(let K=0;K<ee.length;K++){const ve=ee[K];V.__webglColorRenderbuffer[K]=l.createRenderbuffer(),l.bindRenderbuffer(36161,V.__webglColorRenderbuffer[K]);const fe=r.convert(ve.format,ve.encoding),be=r.convert(ve.type),de=L(ve.internalFormat,fe,be,ve.encoding,w.isXRRenderTarget===!0),pe=_e(w);l.renderbufferStorageMultisample(36161,pe,de,w.width,w.height),l.framebufferRenderbuffer(36160,36064+K,36161,V.__webglColorRenderbuffer[K])}l.bindRenderbuffer(36161,null),w.depthBuffer&&(V.__webglDepthRenderbuffer=l.createRenderbuffer(),le(V.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(36160,null)}}if(ue){t.bindTexture(34067,$.__webglTexture),Q(34067,M,R);for(let ee=0;ee<6;ee++)se(V.__webglFramebuffer[ee],w,M,36064,34069+ee);T(M,R)&&C(34067),t.unbindTexture()}else if(me){const ee=w.texture;for(let K=0,ve=ee.length;K<ve;K++){const fe=ee[K],be=n.get(fe);t.bindTexture(3553,be.__webglTexture),Q(3553,fe,R),se(V.__webglFramebuffer,w,fe,36064+K,3553),T(fe,R)&&C(3553)}t.unbindTexture()}else{let ee=3553;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(a?ee=w.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ee,$.__webglTexture),Q(ee,M,R),se(V.__webglFramebuffer,w,M,36064,ee),T(M,R)&&C(ee),t.unbindTexture()}w.depthBuffer&&xe(w)}function Le(w){const M=x(w)||a,V=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let $=0,ue=V.length;$<ue;$++){const me=V[$];if(T(me,M)){const R=w.isWebGLCubeRenderTarget?34067:3553,ee=n.get(me).__webglTexture;t.bindTexture(R,ee),C(R),t.unbindTexture()}}}function Oe(w){if(a&&w.samples>0&&Me(w)===!1){const M=w.isWebGLMultipleRenderTargets?w.texture:[w.texture],V=w.width,$=w.height;let ue=16384;const me=[],R=w.stencilBuffer?33306:36096,ee=n.get(w),K=w.isWebGLMultipleRenderTargets===!0;if(K)for(let ve=0;ve<M.length;ve++)t.bindFramebuffer(36160,ee.__webglMultisampledFramebuffer),l.framebufferRenderbuffer(36160,36064+ve,36161,null),t.bindFramebuffer(36160,ee.__webglFramebuffer),l.framebufferTexture2D(36009,36064+ve,3553,null,0);t.bindFramebuffer(36008,ee.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,ee.__webglFramebuffer);for(let ve=0;ve<M.length;ve++){me.push(36064+ve),w.depthBuffer&&me.push(R);const fe=ee.__ignoreDepthValues!==void 0?ee.__ignoreDepthValues:!1;if(fe===!1&&(w.depthBuffer&&(ue|=256),w.stencilBuffer&&(ue|=1024)),K&&l.framebufferRenderbuffer(36008,36064,36161,ee.__webglColorRenderbuffer[ve]),fe===!0&&(l.invalidateFramebuffer(36008,[R]),l.invalidateFramebuffer(36009,[R])),K){const be=n.get(M[ve]).__webglTexture;l.framebufferTexture2D(36009,36064,3553,be,0)}l.blitFramebuffer(0,0,V,$,0,0,V,$,ue,9728),p&&l.invalidateFramebuffer(36008,me)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),K)for(let ve=0;ve<M.length;ve++){t.bindFramebuffer(36160,ee.__webglMultisampledFramebuffer),l.framebufferRenderbuffer(36160,36064+ve,36161,ee.__webglColorRenderbuffer[ve]);const fe=n.get(M[ve]).__webglTexture;t.bindFramebuffer(36160,ee.__webglFramebuffer),l.framebufferTexture2D(36009,36064+ve,3553,fe,0)}t.bindFramebuffer(36009,ee.__webglMultisampledFramebuffer)}}function _e(w){return Math.min(h,w.samples)}function Me(w){const M=n.get(w);return a&&w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function ye(w){const M=s.render.frame;g.get(w)!==M&&(g.set(w,M),w.update())}function ce(w,M){const V=w.encoding,$=w.format,ue=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||w.format===Qa||V!==ri&&(V===nt?a===!1?e.has("EXT_sRGB")===!0&&$===Jt?(w.format=Qa,w.minFilter=Pt,w.generateMipmaps=!1):M=gu.sRGBToLinear(M):($!==Jt||ue!==ii)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",V)),M}this.allocateTextureUnit=Z,this.resetTextureUnits=ie,this.setTexture2D=j,this.setTexture2DArray=F,this.setTexture3D=G,this.setTextureCube=N,this.rebindTextures=Ce,this.setupRenderTarget=Ae,this.updateRenderTargetMipmap=Le,this.updateMultisampleRenderTarget=Oe,this.setupDepthRenderbuffer=xe,this.setupFrameBufferTexture=se,this.useMultisampledRTT=Me}function l0(l,e,t){const n=t.isWebGL2;function i(r,s=null){let a;if(r===ii)return 5121;if(r===zh)return 32819;if(r===Gh)return 32820;if(r===Nh)return 5120;if(r===kh)return 5122;if(r===lu)return 5123;if(r===Bh)return 5124;if(r===Qn)return 5125;if(r===Gn)return 5126;if(r===Or)return n?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===Vh)return 6406;if(r===Jt)return 6408;if(r===Hh)return 6409;if(r===Wh)return 6410;if(r===ei)return 6402;if(r===Ki)return 34041;if(r===Qa)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===jh)return 6403;if(r===Xh)return 36244;if(r===Yh)return 33319;if(r===qh)return 33320;if(r===Kh)return 36249;if(r===la||r===ca||r===ua||r===ha)if(s===nt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===la)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===ca)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===ua)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===ha)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===la)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===ca)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===ua)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===ha)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Ko||r===Zo||r===Jo||r===$o)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Ko)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Zo)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Jo)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===$o)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Zh)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Qo||r===el)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Qo)return s===nt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===el)return s===nt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===tl||r===nl||r===il||r===rl||r===sl||r===al||r===ol||r===ll||r===cl||r===ul||r===hl||r===dl||r===fl||r===pl)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===tl)return s===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===nl)return s===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===il)return s===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===rl)return s===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===sl)return s===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===al)return s===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===ol)return s===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===ll)return s===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===cl)return s===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===ul)return s===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===hl)return s===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===dl)return s===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===fl)return s===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===pl)return s===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===da)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===da)return s===nt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(r===Jh||r===ml||r===gl||r===_l)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===da)return a.COMPRESSED_RED_RGTC1_EXT;if(r===ml)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===gl)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===_l)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Vi?n?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):l[r]!==void 0?l[r]:null}return{convert:i}}class c0 extends Dt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class $t extends ut{constructor(){super(),this.isGroup=!0,this.type="Group"}}const u0={type:"move"};class Oa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $t,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $t,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $t,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,s=null;const a=this._targetRay,o=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),f=this._getHandJoint(c,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.jointRadius=m.radius),f.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else o!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(u0)))}return a!==null&&(a.visible=i!==null),o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new $t;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class h0 extends bt{constructor(e,t,n,i,r,s,a,o,c,u){if(u=u!==void 0?u:ei,u!==ei&&u!==Ki)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===ei&&(n=Qn),n===void 0&&u===Ki&&(n=Vi),super(null,i,r,s,a,o,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:yt,this.minFilter=o!==void 0?o:yt,this.flipY=!1,this.generateMipmaps=!1}}class d0 extends oi{constructor(e,t){super();const n=this;let i=null,r=1,s=null,a="local-floor",o=1,c=null,u=null,h=null,d=null,p=null,g=null;const _=t.getContextAttributes();let m=null,f=null;const v=[],y=[],x=new Set,b=new Map,T=new Dt;T.layers.enable(1),T.viewport=new at;const C=new Dt;C.layers.enable(2),C.viewport=new at;const L=[T,C],S=new c0;S.layers.enable(1),S.layers.enable(2);let E=null,J=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(N){let z=v[N];return z===void 0&&(z=new Oa,v[N]=z),z.getTargetRaySpace()},this.getControllerGrip=function(N){let z=v[N];return z===void 0&&(z=new Oa,v[N]=z),z.getGripSpace()},this.getHand=function(N){let z=v[N];return z===void 0&&(z=new Oa,v[N]=z),z.getHandSpace()};function D(N){const z=y.indexOf(N.inputSource);if(z===-1)return;const W=v[z];W!==void 0&&W.dispatchEvent({type:N.type,data:N.inputSource})}function P(){i.removeEventListener("select",D),i.removeEventListener("selectstart",D),i.removeEventListener("selectend",D),i.removeEventListener("squeeze",D),i.removeEventListener("squeezestart",D),i.removeEventListener("squeezeend",D),i.removeEventListener("end",P),i.removeEventListener("inputsourceschange",I);for(let N=0;N<v.length;N++){const z=y[N];z!==null&&(y[N]=null,v[N].disconnect(z))}E=null,J=null,e.setRenderTarget(m),p=null,d=null,h=null,i=null,f=null,G.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(N){r=N,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(N){a=N,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(N){c=N},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(N){if(i=N,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",D),i.addEventListener("selectstart",D),i.addEventListener("selectend",D),i.addEventListener("squeeze",D),i.addEventListener("squeezestart",D),i.addEventListener("squeezeend",D),i.addEventListener("end",P),i.addEventListener("inputsourceschange",I),_.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const z={antialias:i.renderState.layers===void 0?_.antialias:!0,alpha:_.alpha,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(i,t,z),i.updateRenderState({baseLayer:p}),f=new si(p.framebufferWidth,p.framebufferHeight,{format:Jt,type:ii,encoding:e.outputEncoding,stencilBuffer:_.stencil})}else{let z=null,W=null,Q=null;_.depth&&(Q=_.stencil?35056:33190,z=_.stencil?Ki:ei,W=_.stencil?Vi:Qn);const U={colorFormat:32856,depthFormat:Q,scaleFactor:r};h=new XRWebGLBinding(i,t),d=h.createProjectionLayer(U),i.updateRenderState({layers:[d]}),f=new si(d.textureWidth,d.textureHeight,{format:Jt,type:ii,depthTexture:new h0(d.textureWidth,d.textureHeight,W,void 0,void 0,void 0,void 0,void 0,void 0,z),stencilBuffer:_.stencil,encoding:e.outputEncoding,samples:_.antialias?4:0});const re=e.properties.get(f);re.__ignoreDepthValues=d.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(o),c=null,s=await i.requestReferenceSpace(a),G.setContext(i),G.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function I(N){for(let z=0;z<N.removed.length;z++){const W=N.removed[z],Q=y.indexOf(W);Q>=0&&(y[Q]=null,v[Q].disconnect(W))}for(let z=0;z<N.added.length;z++){const W=N.added[z];let Q=y.indexOf(W);if(Q===-1){for(let re=0;re<v.length;re++)if(re>=y.length){y.push(W),Q=re;break}else if(y[re]===null){y[re]=W,Q=re;break}if(Q===-1)break}const U=v[Q];U&&U.connect(W)}}const B=new k,q=new k;function ie(N,z,W){B.setFromMatrixPosition(z.matrixWorld),q.setFromMatrixPosition(W.matrixWorld);const Q=B.distanceTo(q),U=z.projectionMatrix.elements,re=W.projectionMatrix.elements,he=U[14]/(U[10]-1),se=U[14]/(U[10]+1),le=(U[9]+1)/U[5],oe=(U[9]-1)/U[5],xe=(U[8]-1)/U[0],Ce=(re[8]+1)/re[0],Ae=he*xe,Le=he*Ce,Oe=Q/(-xe+Ce),_e=Oe*-xe;z.matrixWorld.decompose(N.position,N.quaternion,N.scale),N.translateX(_e),N.translateZ(Oe),N.matrixWorld.compose(N.position,N.quaternion,N.scale),N.matrixWorldInverse.copy(N.matrixWorld).invert();const Me=he+Oe,ye=se+Oe,ce=Ae-_e,w=Le+(Q-_e),M=le*se/ye*Me,V=oe*se/ye*Me;N.projectionMatrix.makePerspective(ce,w,M,V,Me,ye),N.projectionMatrixInverse.copy(N.projectionMatrix).invert()}function Z(N,z){z===null?N.matrixWorld.copy(N.matrix):N.matrixWorld.multiplyMatrices(z.matrixWorld,N.matrix),N.matrixWorldInverse.copy(N.matrixWorld).invert()}this.updateCamera=function(N){if(i===null)return;S.near=C.near=T.near=N.near,S.far=C.far=T.far=N.far,(E!==S.near||J!==S.far)&&(i.updateRenderState({depthNear:S.near,depthFar:S.far}),E=S.near,J=S.far);const z=N.parent,W=S.cameras;Z(S,z);for(let Q=0;Q<W.length;Q++)Z(W[Q],z);W.length===2?ie(S,T,C):S.projectionMatrix.copy(T.projectionMatrix),H(N,S,z)};function H(N,z,W){W===null?N.matrix.copy(z.matrixWorld):(N.matrix.copy(W.matrixWorld),N.matrix.invert(),N.matrix.multiply(z.matrixWorld)),N.matrix.decompose(N.position,N.quaternion,N.scale),N.updateMatrixWorld(!0);const Q=N.children;for(let U=0,re=Q.length;U<re;U++)Q[U].updateMatrixWorld(!0);N.projectionMatrix.copy(z.projectionMatrix),N.projectionMatrixInverse.copy(z.projectionMatrixInverse),N.isPerspectiveCamera&&(N.fov=Ji*2*Math.atan(1/N.projectionMatrix.elements[5]),N.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&p===null))return o},this.setFoveation=function(N){o=N,d!==null&&(d.fixedFoveation=N),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=N)},this.getPlanes=function(){return x};let j=null;function F(N,z){if(u=z.getViewerPose(c||s),g=z,u!==null){const W=u.views;p!==null&&(e.setRenderTargetFramebuffer(f,p.framebuffer),e.setRenderTarget(f));let Q=!1;W.length!==S.cameras.length&&(S.cameras.length=0,Q=!0);for(let U=0;U<W.length;U++){const re=W[U];let he=null;if(p!==null)he=p.getViewport(re);else{const le=h.getViewSubImage(d,re);he=le.viewport,U===0&&(e.setRenderTargetTextures(f,le.colorTexture,d.ignoreDepthValues?void 0:le.depthStencilTexture),e.setRenderTarget(f))}let se=L[U];se===void 0&&(se=new Dt,se.layers.enable(U),se.viewport=new at,L[U]=se),se.matrix.fromArray(re.transform.matrix),se.matrix.decompose(se.position,se.quaternion,se.scale),se.projectionMatrix.fromArray(re.projectionMatrix),se.projectionMatrixInverse.copy(se.projectionMatrix).invert(),se.viewport.set(he.x,he.y,he.width,he.height),U===0&&(S.matrix.copy(se.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),Q===!0&&S.cameras.push(se)}}for(let W=0;W<v.length;W++){const Q=y[W],U=v[W];Q!==null&&U!==void 0&&U.update(Q,z,c||s)}if(j&&j(N,z),z.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:z.detectedPlanes});let W=null;for(const Q of x)z.detectedPlanes.has(Q)||(W===null&&(W=[]),W.push(Q));if(W!==null)for(const Q of W)x.delete(Q),b.delete(Q),n.dispatchEvent({type:"planeremoved",data:Q});for(const Q of z.detectedPlanes)if(!x.has(Q))x.add(Q),b.set(Q,z.lastChangedTime),n.dispatchEvent({type:"planeadded",data:Q});else{const U=b.get(Q);Q.lastChangedTime>U&&(b.set(Q,Q.lastChangedTime),n.dispatchEvent({type:"planechanged",data:Q}))}}g=null}const G=new Au;G.setAnimationLoop(F),this.setAnimationLoop=function(N){j=N},this.dispose=function(){}}}function f0(l,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,Mu(l)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function i(m,f,v,y,x){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),h(m,f)):f.isMeshPhongMaterial?(r(m,f),u(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,x)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),_(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(s(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?o(m,f,v,y):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Nt&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Nt&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const v=e.get(f).envMap;if(v&&(m.envMap.value=v,m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap){m.lightMap.value=f.lightMap;const y=l.useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=f.lightMapIntensity*y,t(f.lightMap,m.lightMapTransform)}f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function s(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function o(m,f,v,y){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*v,m.scale.value=y*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function h(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),e.get(f).envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,v){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Nt&&m.clearcoatNormalScale.value.negate())),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){const v=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function p0(l,e,t,n){let i={},r={},s=[];const a=t.isWebGL2?l.getParameter(35375):0;function o(v,y){const x=y.program;n.uniformBlockBinding(v,x)}function c(v,y){let x=i[v.id];x===void 0&&(g(v),x=u(v),i[v.id]=x,v.addEventListener("dispose",m));const b=y.program;n.updateUBOMapping(v,b);const T=e.render.frame;r[v.id]!==T&&(d(v),r[v.id]=T)}function u(v){const y=h();v.__bindingPointIndex=y;const x=l.createBuffer(),b=v.__size,T=v.usage;return l.bindBuffer(35345,x),l.bufferData(35345,b,T),l.bindBuffer(35345,null),l.bindBufferBase(35345,y,x),x}function h(){for(let v=0;v<a;v++)if(s.indexOf(v)===-1)return s.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const y=i[v.id],x=v.uniforms,b=v.__cache;l.bindBuffer(35345,y);for(let T=0,C=x.length;T<C;T++){const L=x[T];if(p(L,T,b)===!0){const S=L.__offset,E=Array.isArray(L.value)?L.value:[L.value];let J=0;for(let D=0;D<E.length;D++){const P=E[D],I=_(P);typeof P=="number"?(L.__data[0]=P,l.bufferSubData(35345,S+J,L.__data)):P.isMatrix3?(L.__data[0]=P.elements[0],L.__data[1]=P.elements[1],L.__data[2]=P.elements[2],L.__data[3]=P.elements[0],L.__data[4]=P.elements[3],L.__data[5]=P.elements[4],L.__data[6]=P.elements[5],L.__data[7]=P.elements[0],L.__data[8]=P.elements[6],L.__data[9]=P.elements[7],L.__data[10]=P.elements[8],L.__data[11]=P.elements[0]):(P.toArray(L.__data,J),J+=I.storage/Float32Array.BYTES_PER_ELEMENT)}l.bufferSubData(35345,S,L.__data)}}l.bindBuffer(35345,null)}function p(v,y,x){const b=v.value;if(x[y]===void 0){if(typeof b=="number")x[y]=b;else{const T=Array.isArray(b)?b:[b],C=[];for(let L=0;L<T.length;L++)C.push(T[L].clone());x[y]=C}return!0}else if(typeof b=="number"){if(x[y]!==b)return x[y]=b,!0}else{const T=Array.isArray(x[y])?x[y]:[x[y]],C=Array.isArray(b)?b:[b];for(let L=0;L<T.length;L++){const S=T[L];if(S.equals(C[L])===!1)return S.copy(C[L]),!0}}return!1}function g(v){const y=v.uniforms;let x=0;const b=16;let T=0;for(let C=0,L=y.length;C<L;C++){const S=y[C],E={boundary:0,storage:0},J=Array.isArray(S.value)?S.value:[S.value];for(let D=0,P=J.length;D<P;D++){const I=J[D],B=_(I);E.boundary+=B.boundary,E.storage+=B.storage}if(S.__data=new Float32Array(E.storage/Float32Array.BYTES_PER_ELEMENT),S.__offset=x,C>0){T=x%b;const D=b-T;T!==0&&D-E.boundary<0&&(x+=b-T,S.__offset=x)}x+=E.storage}return T=x%b,T>0&&(x+=b-T),v.__size=x,v.__cache={},this}function _(v){const y={boundary:0,storage:0};return typeof v=="number"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=48,y.storage=48):v.isMatrix4?(y.boundary=64,y.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),y}function m(v){const y=v.target;y.removeEventListener("dispose",m);const x=s.indexOf(y.__bindingPointIndex);s.splice(x,1),l.deleteBuffer(i[y.id]),delete i[y.id],delete r[y.id]}function f(){for(const v in i)l.deleteBuffer(i[v]);s=[],i={},r={}}return{bind:o,update:c,dispose:f}}function m0(){const l=kr("canvas");return l.style.display="block",l}class Iu{constructor(e={}){const{canvas:t=m0(),context:n=null,depth:i=!0,stencil:r=!0,alpha:s=!1,antialias:a=!1,premultipliedAlpha:o=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=s;let p=null,g=null;const _=[],m=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=ri,this.useLegacyLights=!0,this.toneMapping=Rn,this.toneMappingExposure=1;const f=this;let v=!1,y=0,x=0,b=null,T=-1,C=null;const L=new at,S=new at;let E=null,J=t.width,D=t.height,P=1,I=null,B=null;const q=new at(0,0,J,D),ie=new at(0,0,J,D);let Z=!1;const H=new vo;let j=!1,F=!1,G=null;const N=new Xe,z=new k,W={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Q(){return b===null?P:1}let U=n;function re(A,X){for(let ne=0;ne<A.length;ne++){const Y=A[ne],ae=t.getContext(Y,X);if(ae!==null)return ae}return null}try{const A={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:o,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${mo}`),t.addEventListener("webglcontextlost",pe,!1),t.addEventListener("webglcontextrestored",Se,!1),t.addEventListener("webglcontextcreationerror",Re,!1),U===null){const X=["webgl2","webgl","experimental-webgl"];if(f.isWebGL1Renderer===!0&&X.shift(),U=re(X,A),U===null)throw re(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}U.getShaderPrecisionFormat===void 0&&(U.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let he,se,le,oe,xe,Ce,Ae,Le,Oe,_e,Me,ye,ce,w,M,V,$,ue,me,R,ee,K,ve,fe;function be(){he=new Cm(U),se=new Mm(U,he,e),he.init(se),K=new l0(U,he,se),le=new a0(U,he,se),oe=new Pm,xe=new qg,Ce=new o0(U,he,le,xe,se,K,oe),Ae=new wm(f),Le=new Em(f),Oe=new Vd(U,se),ve=new ym(U,he,Oe,se),_e=new Lm(U,Oe,oe,ve),Me=new Om(U,_e,Oe,oe),me=new Um(U,se,Ce),V=new Sm(xe),ye=new Yg(f,Ae,Le,he,se,ve,V),ce=new f0(f,xe),w=new Zg,M=new n0(he,se),ue=new xm(f,Ae,Le,le,Me,d,o),$=new s0(f,Me,se),fe=new p0(U,oe,se,le),R=new bm(U,he,oe,se),ee=new Rm(U,he,oe,se),oe.programs=ye.programs,f.capabilities=se,f.extensions=he,f.properties=xe,f.renderLists=w,f.shadowMap=$,f.state=le,f.info=oe}be();const de=new d0(f,U);this.xr=de,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const A=he.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=he.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return P},this.setPixelRatio=function(A){A!==void 0&&(P=A,this.setSize(J,D,!1))},this.getSize=function(A){return A.set(J,D)},this.setSize=function(A,X,ne=!0){if(de.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}J=A,D=X,t.width=Math.floor(A*P),t.height=Math.floor(X*P),ne===!0&&(t.style.width=A+"px",t.style.height=X+"px"),this.setViewport(0,0,A,X)},this.getDrawingBufferSize=function(A){return A.set(J*P,D*P).floor()},this.setDrawingBufferSize=function(A,X,ne){J=A,D=X,P=ne,t.width=Math.floor(A*ne),t.height=Math.floor(X*ne),this.setViewport(0,0,A,X)},this.getCurrentViewport=function(A){return A.copy(L)},this.getViewport=function(A){return A.copy(q)},this.setViewport=function(A,X,ne,Y){A.isVector4?q.set(A.x,A.y,A.z,A.w):q.set(A,X,ne,Y),le.viewport(L.copy(q).multiplyScalar(P).floor())},this.getScissor=function(A){return A.copy(ie)},this.setScissor=function(A,X,ne,Y){A.isVector4?ie.set(A.x,A.y,A.z,A.w):ie.set(A,X,ne,Y),le.scissor(S.copy(ie).multiplyScalar(P).floor())},this.getScissorTest=function(){return Z},this.setScissorTest=function(A){le.setScissorTest(Z=A)},this.setOpaqueSort=function(A){I=A},this.setTransparentSort=function(A){B=A},this.getClearColor=function(A){return A.copy(ue.getClearColor())},this.setClearColor=function(){ue.setClearColor.apply(ue,arguments)},this.getClearAlpha=function(){return ue.getClearAlpha()},this.setClearAlpha=function(){ue.setClearAlpha.apply(ue,arguments)},this.clear=function(A=!0,X=!0,ne=!0){let Y=0;A&&(Y|=16384),X&&(Y|=256),ne&&(Y|=1024),U.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",pe,!1),t.removeEventListener("webglcontextrestored",Se,!1),t.removeEventListener("webglcontextcreationerror",Re,!1),w.dispose(),M.dispose(),xe.dispose(),Ae.dispose(),Le.dispose(),Me.dispose(),ve.dispose(),fe.dispose(),ye.dispose(),de.dispose(),de.removeEventListener("sessionstart",De),de.removeEventListener("sessionend",Ze),G&&(G.dispose(),G=null),Ye.stop()};function pe(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),v=!0}function Se(){console.log("THREE.WebGLRenderer: Context Restored."),v=!1;const A=oe.autoReset,X=$.enabled,ne=$.autoUpdate,Y=$.needsUpdate,ae=$.type;be(),oe.autoReset=A,$.enabled=X,$.autoUpdate=ne,$.needsUpdate=Y,$.type=ae}function Re(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Ge(A){const X=A.target;X.removeEventListener("dispose",Ge),O(X)}function O(A){te(A),xe.remove(A)}function te(A){const X=xe.get(A).programs;X!==void 0&&(X.forEach(function(ne){ye.releaseProgram(ne)}),A.isShaderMaterial&&ye.releaseShaderCache(A))}this.renderBufferDirect=function(A,X,ne,Y,ae,Ie){X===null&&(X=W);const Fe=ae.isMesh&&ae.matrixWorld.determinant()<0,Ne=rt(A,X,ne,Y,ae);le.setMaterial(Y,Fe);let ze=ne.index,Ve=1;Y.wireframe===!0&&(ze=_e.getWireframeAttribute(ne),Ve=2);const We=ne.drawRange,je=ne.attributes.position;let et=We.start*Ve,mt=(We.start+We.count)*Ve;Ie!==null&&(et=Math.max(et,Ie.start*Ve),mt=Math.min(mt,(Ie.start+Ie.count)*Ve)),ze!==null?(et=Math.max(et,0),mt=Math.min(mt,ze.count)):je!=null&&(et=Math.max(et,0),mt=Math.min(mt,je.count));const Ut=mt-et;if(Ut<0||Ut===1/0)return;ve.setup(ae,Y,Ne,ne,ze);let Pe,ct=R;if(ze!==null&&(Pe=Oe.get(ze),ct=ee,ct.setIndex(Pe)),ae.isMesh)Y.wireframe===!0?(le.setLineWidth(Y.wireframeLinewidth*Q()),ct.setMode(1)):ct.setMode(4);else if(ae.isLine){let qe=Y.linewidth;qe===void 0&&(qe=1),le.setLineWidth(qe*Q()),ae.isLineSegments?ct.setMode(1):ae.isLineLoop?ct.setMode(2):ct.setMode(3)}else ae.isPoints?ct.setMode(0):ae.isSprite&&ct.setMode(4);if(ae.isInstancedMesh)ct.renderInstances(et,Ut,ae.count);else if(ne.isInstancedBufferGeometry){const qe=ne._maxInstanceCount!==void 0?ne._maxInstanceCount:1/0,Pn=Math.min(ne.instanceCount,qe);ct.renderInstances(et,Ut,Pn)}else ct.render(et,Ut)},this.compile=function(A,X){function ne(Y,ae,Ie){Y.transparent===!0&&Y.side===Kt&&Y.forceSinglePass===!1?(Y.side=Nt,Y.needsUpdate=!0,Tt(Y,ae,Ie),Y.side=mn,Y.needsUpdate=!0,Tt(Y,ae,Ie),Y.side=Kt):Tt(Y,ae,Ie)}g=M.get(A),g.init(),m.push(g),A.traverseVisible(function(Y){Y.isLight&&Y.layers.test(X.layers)&&(g.pushLight(Y),Y.castShadow&&g.pushShadow(Y))}),g.setupLights(f.useLegacyLights),A.traverse(function(Y){const ae=Y.material;if(ae)if(Array.isArray(ae))for(let Ie=0;Ie<ae.length;Ie++){const Fe=ae[Ie];ne(Fe,A,Y)}else ne(ae,A,Y)}),m.pop(),g=null};let ge=null;function Te(A){ge&&ge(A)}function De(){Ye.stop()}function Ze(){Ye.start()}const Ye=new Au;Ye.setAnimationLoop(Te),typeof self<"u"&&Ye.setContext(self),this.setAnimationLoop=function(A){ge=A,de.setAnimationLoop(A),A===null?Ye.stop():Ye.start()},de.addEventListener("sessionstart",De),de.addEventListener("sessionend",Ze),this.render=function(A,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(v===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),de.enabled===!0&&de.isPresenting===!0&&(de.cameraAutoUpdate===!0&&de.updateCamera(X),X=de.getCamera()),A.isScene===!0&&A.onBeforeRender(f,A,X,b),g=M.get(A,m.length),g.init(),m.push(g),N.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),H.setFromProjectionMatrix(N),F=this.localClippingEnabled,j=V.init(this.clippingPlanes,F),p=w.get(A,_.length),p.init(),_.push(p),it(A,X,0,f.sortObjects),p.finish(),f.sortObjects===!0&&p.sort(I,B),j===!0&&V.beginShadows();const ne=g.state.shadowsArray;if($.render(ne,A,X),j===!0&&V.endShadows(),this.info.autoReset===!0&&this.info.reset(),ue.render(p,A),g.setupLights(f.useLegacyLights),X.isArrayCamera){const Y=X.cameras;for(let ae=0,Ie=Y.length;ae<Ie;ae++){const Fe=Y[ae];tt(p,A,Fe,Fe.viewport)}}else tt(p,A,X);b!==null&&(Ce.updateMultisampleRenderTarget(b),Ce.updateRenderTargetMipmap(b)),A.isScene===!0&&A.onAfterRender(f,A,X),ve.resetDefaultState(),T=-1,C=null,m.pop(),m.length>0?g=m[m.length-1]:g=null,_.pop(),_.length>0?p=_[_.length-1]:p=null};function it(A,X,ne,Y){if(A.visible===!1)return;if(A.layers.test(X.layers)){if(A.isGroup)ne=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(X);else if(A.isLight)g.pushLight(A),A.castShadow&&g.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||H.intersectsSprite(A)){Y&&z.setFromMatrixPosition(A.matrixWorld).applyMatrix4(N);const Fe=Me.update(A),Ne=A.material;Ne.visible&&p.push(A,Fe,Ne,ne,z.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(A.isSkinnedMesh&&A.skeleton.frame!==oe.render.frame&&(A.skeleton.update(),A.skeleton.frame=oe.render.frame),!A.frustumCulled||H.intersectsObject(A))){Y&&z.setFromMatrixPosition(A.matrixWorld).applyMatrix4(N);const Fe=Me.update(A),Ne=A.material;if(Array.isArray(Ne)){const ze=Fe.groups;for(let Ve=0,We=ze.length;Ve<We;Ve++){const je=ze[Ve],et=Ne[je.materialIndex];et&&et.visible&&p.push(A,Fe,et,ne,z.z,je)}}else Ne.visible&&p.push(A,Fe,Ne,ne,z.z,null)}}const Ie=A.children;for(let Fe=0,Ne=Ie.length;Fe<Ne;Fe++)it(Ie[Fe],X,ne,Y)}function tt(A,X,ne,Y){const ae=A.opaque,Ie=A.transmissive,Fe=A.transparent;g.setupLightsView(ne),j===!0&&V.setGlobalState(f.clippingPlanes,ne),Ie.length>0&&ot(ae,Ie,X,ne),Y&&le.viewport(L.copy(Y)),ae.length>0&&Je(ae,X,ne),Ie.length>0&&Je(Ie,X,ne),Fe.length>0&&Je(Fe,X,ne),le.buffers.depth.setTest(!0),le.buffers.depth.setMask(!0),le.buffers.color.setMask(!0),le.setPolygonOffset(!1)}function ot(A,X,ne,Y){if(G===null){const Ne=se.isWebGL2;G=new si(1024,1024,{generateMipmaps:!0,type:he.has("EXT_color_buffer_half_float")?Or:ii,minFilter:ni,samples:Ne&&a===!0?4:0})}const ae=f.getRenderTarget();f.setRenderTarget(G),f.clear();const Ie=f.toneMapping;f.toneMapping=Rn,Je(A,ne,Y),Ce.updateMultisampleRenderTarget(G),Ce.updateRenderTargetMipmap(G);let Fe=!1;for(let Ne=0,ze=X.length;Ne<ze;Ne++){const Ve=X[Ne],We=Ve.object,je=Ve.geometry,et=Ve.material,mt=Ve.group;if(et.side===Kt&&We.layers.test(Y.layers)){const Ut=et.side;et.side=Nt,et.needsUpdate=!0,Qe(We,ne,Y,je,et,mt),et.side=Ut,et.needsUpdate=!0,Fe=!0}}Fe===!0&&(Ce.updateMultisampleRenderTarget(G),Ce.updateRenderTargetMipmap(G)),f.setRenderTarget(ae),f.toneMapping=Ie}function Je(A,X,ne){const Y=X.isScene===!0?X.overrideMaterial:null;for(let ae=0,Ie=A.length;ae<Ie;ae++){const Fe=A[ae],Ne=Fe.object,ze=Fe.geometry,Ve=Y===null?Fe.material:Y,We=Fe.group;Ne.layers.test(ne.layers)&&Qe(Ne,X,ne,ze,Ve,We)}}function Qe(A,X,ne,Y,ae,Ie){A.onBeforeRender(f,X,ne,Y,ae,Ie),A.modelViewMatrix.multiplyMatrices(ne.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),ae.onBeforeRender(f,X,ne,Y,A,Ie),ae.transparent===!0&&ae.side===Kt&&ae.forceSinglePass===!1?(ae.side=Nt,ae.needsUpdate=!0,f.renderBufferDirect(ne,X,Y,ae,A,Ie),ae.side=mn,ae.needsUpdate=!0,f.renderBufferDirect(ne,X,Y,ae,A,Ie),ae.side=Kt):f.renderBufferDirect(ne,X,Y,ae,A,Ie),A.onAfterRender(f,X,ne,Y,ae,Ie)}function Tt(A,X,ne){X.isScene!==!0&&(X=W);const Y=xe.get(A),ae=g.state.lights,Ie=g.state.shadowsArray,Fe=ae.state.version,Ne=ye.getParameters(A,ae.state,Ie,X,ne),ze=ye.getProgramCacheKey(Ne);let Ve=Y.programs;Y.environment=A.isMeshStandardMaterial?X.environment:null,Y.fog=X.fog,Y.envMap=(A.isMeshStandardMaterial?Le:Ae).get(A.envMap||Y.environment),Ve===void 0&&(A.addEventListener("dispose",Ge),Ve=new Map,Y.programs=Ve);let We=Ve.get(ze);if(We!==void 0){if(Y.currentProgram===We&&Y.lightsStateVersion===Fe)return At(A,Ne),We}else Ne.uniforms=ye.getUniforms(A),A.onBuild(ne,Ne,f),A.onBeforeCompile(Ne,f),We=ye.acquireProgram(Ne,ze),Ve.set(ze,We),Y.uniforms=Ne.uniforms;const je=Y.uniforms;(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(je.clippingPlanes=V.uniform),At(A,Ne),Y.needsLights=zt(A),Y.lightsStateVersion=Fe,Y.needsLights&&(je.ambientLightColor.value=ae.state.ambient,je.lightProbe.value=ae.state.probe,je.directionalLights.value=ae.state.directional,je.directionalLightShadows.value=ae.state.directionalShadow,je.spotLights.value=ae.state.spot,je.spotLightShadows.value=ae.state.spotShadow,je.rectAreaLights.value=ae.state.rectArea,je.ltc_1.value=ae.state.rectAreaLTC1,je.ltc_2.value=ae.state.rectAreaLTC2,je.pointLights.value=ae.state.point,je.pointLightShadows.value=ae.state.pointShadow,je.hemisphereLights.value=ae.state.hemi,je.directionalShadowMap.value=ae.state.directionalShadowMap,je.directionalShadowMatrix.value=ae.state.directionalShadowMatrix,je.spotShadowMap.value=ae.state.spotShadowMap,je.spotLightMatrix.value=ae.state.spotLightMatrix,je.spotLightMap.value=ae.state.spotLightMap,je.pointShadowMap.value=ae.state.pointShadowMap,je.pointShadowMatrix.value=ae.state.pointShadowMatrix);const et=We.getUniforms(),mt=Fs.seqWithValue(et.seq,je);return Y.currentProgram=We,Y.uniformsList=mt,We}function At(A,X){const ne=xe.get(A);ne.outputEncoding=X.outputEncoding,ne.instancing=X.instancing,ne.skinning=X.skinning,ne.morphTargets=X.morphTargets,ne.morphNormals=X.morphNormals,ne.morphColors=X.morphColors,ne.morphTargetsCount=X.morphTargetsCount,ne.numClippingPlanes=X.numClippingPlanes,ne.numIntersection=X.numClipIntersection,ne.vertexAlphas=X.vertexAlphas,ne.vertexTangents=X.vertexTangents,ne.toneMapping=X.toneMapping}function rt(A,X,ne,Y,ae){X.isScene!==!0&&(X=W),Ce.resetTextureUnits();const Ie=X.fog,Fe=Y.isMeshStandardMaterial?X.environment:null,Ne=b===null?f.outputEncoding:b.isXRRenderTarget===!0?b.texture.encoding:ri,ze=(Y.isMeshStandardMaterial?Le:Ae).get(Y.envMap||Fe),Ve=Y.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,We=!!Y.normalMap&&!!ne.attributes.tangent,je=!!ne.morphAttributes.position,et=!!ne.morphAttributes.normal,mt=!!ne.morphAttributes.color,Ut=Y.toneMapped?f.toneMapping:Rn,Pe=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,ct=Pe!==void 0?Pe.length:0,qe=xe.get(Y),Pn=g.state.lights;if(j===!0&&(F===!0||A!==C)){const Et=A===C&&Y.id===T;V.setState(Y,A,Et)}let ht=!1;Y.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==Pn.state.version||qe.outputEncoding!==Ne||ae.isInstancedMesh&&qe.instancing===!1||!ae.isInstancedMesh&&qe.instancing===!0||ae.isSkinnedMesh&&qe.skinning===!1||!ae.isSkinnedMesh&&qe.skinning===!0||qe.envMap!==ze||Y.fog===!0&&qe.fog!==Ie||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==V.numPlanes||qe.numIntersection!==V.numIntersection)||qe.vertexAlphas!==Ve||qe.vertexTangents!==We||qe.morphTargets!==je||qe.morphNormals!==et||qe.morphColors!==mt||qe.toneMapping!==Ut||se.isWebGL2===!0&&qe.morphTargetsCount!==ct)&&(ht=!0):(ht=!0,qe.__version=Y.version);let en=qe.currentProgram;ht===!0&&(en=Tt(Y,X,ae));let Wn=!1,cn=!1,ci=!1;const dt=en.getUniforms(),un=qe.uniforms;if(le.useProgram(en.program)&&(Wn=!0,cn=!0,ci=!0),Y.id!==T&&(T=Y.id,cn=!0),Wn||C!==A){if(dt.setValue(U,"projectionMatrix",A.projectionMatrix),se.logarithmicDepthBuffer&&dt.setValue(U,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),C!==A&&(C=A,cn=!0,ci=!0),Y.isShaderMaterial||Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshStandardMaterial||Y.envMap){const Et=dt.map.cameraPosition;Et!==void 0&&Et.setValue(U,z.setFromMatrixPosition(A.matrixWorld))}(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&dt.setValue(U,"isOrthographic",A.isOrthographicCamera===!0),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial||Y.isShadowMaterial||ae.isSkinnedMesh)&&dt.setValue(U,"viewMatrix",A.matrixWorldInverse)}if(ae.isSkinnedMesh){dt.setOptional(U,ae,"bindMatrix"),dt.setOptional(U,ae,"bindMatrixInverse");const Et=ae.skeleton;Et&&(se.floatVertexTextures?(Et.boneTexture===null&&Et.computeBoneTexture(),dt.setValue(U,"boneTexture",Et.boneTexture,Ce),dt.setValue(U,"boneTextureSize",Et.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const jn=ne.morphAttributes;if((jn.position!==void 0||jn.normal!==void 0||jn.color!==void 0&&se.isWebGL2===!0)&&me.update(ae,ne,en),(cn||qe.receiveShadow!==ae.receiveShadow)&&(qe.receiveShadow=ae.receiveShadow,dt.setValue(U,"receiveShadow",ae.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(un.envMap.value=ze,un.flipEnvMap.value=ze.isCubeTexture&&ze.isRenderTargetTexture===!1?-1:1),cn&&(dt.setValue(U,"toneMappingExposure",f.toneMappingExposure),qe.needsLights&&pt(un,ci),Ie&&Y.fog===!0&&ce.refreshFogUniforms(un,Ie),ce.refreshMaterialUniforms(un,Y,P,D,G),Fs.upload(U,qe.uniformsList,un,Ce)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Fs.upload(U,qe.uniformsList,un,Ce),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&dt.setValue(U,"center",ae.center),dt.setValue(U,"modelViewMatrix",ae.modelViewMatrix),dt.setValue(U,"normalMatrix",ae.normalMatrix),dt.setValue(U,"modelMatrix",ae.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const Et=Y.uniformsGroups;for(let xn=0,sr=Et.length;xn<sr;xn++)if(se.isWebGL2){const yn=Et[xn];fe.update(yn,en),fe.bind(yn,en)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return en}function pt(A,X){A.ambientLightColor.needsUpdate=X,A.lightProbe.needsUpdate=X,A.directionalLights.needsUpdate=X,A.directionalLightShadows.needsUpdate=X,A.pointLights.needsUpdate=X,A.pointLightShadows.needsUpdate=X,A.spotLights.needsUpdate=X,A.spotLightShadows.needsUpdate=X,A.rectAreaLights.needsUpdate=X,A.hemisphereLights.needsUpdate=X}function zt(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return y},this.getActiveMipmapLevel=function(){return x},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(A,X,ne){xe.get(A.texture).__webglTexture=X,xe.get(A.depthTexture).__webglTexture=ne;const Y=xe.get(A);Y.__hasExternalTextures=!0,Y.__hasExternalTextures&&(Y.__autoAllocateDepthBuffer=ne===void 0,Y.__autoAllocateDepthBuffer||he.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,X){const ne=xe.get(A);ne.__webglFramebuffer=X,ne.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(A,X=0,ne=0){b=A,y=X,x=ne;let Y=!0,ae=null,Ie=!1,Fe=!1;if(A){const ze=xe.get(A);ze.__useDefaultFramebuffer!==void 0?(le.bindFramebuffer(36160,null),Y=!1):ze.__webglFramebuffer===void 0?Ce.setupRenderTarget(A):ze.__hasExternalTextures&&Ce.rebindTextures(A,xe.get(A.texture).__webglTexture,xe.get(A.depthTexture).__webglTexture);const Ve=A.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(Fe=!0);const We=xe.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(ae=We[X],Ie=!0):se.isWebGL2&&A.samples>0&&Ce.useMultisampledRTT(A)===!1?ae=xe.get(A).__webglMultisampledFramebuffer:ae=We,L.copy(A.viewport),S.copy(A.scissor),E=A.scissorTest}else L.copy(q).multiplyScalar(P).floor(),S.copy(ie).multiplyScalar(P).floor(),E=Z;if(le.bindFramebuffer(36160,ae)&&se.drawBuffers&&Y&&le.drawBuffers(A,ae),le.viewport(L),le.scissor(S),le.setScissorTest(E),Ie){const ze=xe.get(A.texture);U.framebufferTexture2D(36160,36064,34069+X,ze.__webglTexture,ne)}else if(Fe){const ze=xe.get(A.texture),Ve=X||0;U.framebufferTextureLayer(36160,36064,ze.__webglTexture,ne||0,Ve)}T=-1},this.readRenderTargetPixels=function(A,X,ne,Y,ae,Ie,Fe){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=xe.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Fe!==void 0&&(Ne=Ne[Fe]),Ne){le.bindFramebuffer(36160,Ne);try{const ze=A.texture,Ve=ze.format,We=ze.type;if(Ve!==Jt&&K.convert(Ve)!==U.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const je=We===Or&&(he.has("EXT_color_buffer_half_float")||se.isWebGL2&&he.has("EXT_color_buffer_float"));if(We!==ii&&K.convert(We)!==U.getParameter(35738)&&!(We===Gn&&(se.isWebGL2||he.has("OES_texture_float")||he.has("WEBGL_color_buffer_float")))&&!je){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=A.width-Y&&ne>=0&&ne<=A.height-ae&&U.readPixels(X,ne,Y,ae,K.convert(Ve),K.convert(We),Ie)}finally{const ze=b!==null?xe.get(b).__webglFramebuffer:null;le.bindFramebuffer(36160,ze)}}},this.copyFramebufferToTexture=function(A,X,ne=0){const Y=Math.pow(2,-ne),ae=Math.floor(X.image.width*Y),Ie=Math.floor(X.image.height*Y);Ce.setTexture2D(X,0),U.copyTexSubImage2D(3553,ne,0,0,A.x,A.y,ae,Ie),le.unbindTexture()},this.copyTextureToTexture=function(A,X,ne,Y=0){const ae=X.image.width,Ie=X.image.height,Fe=K.convert(ne.format),Ne=K.convert(ne.type);Ce.setTexture2D(ne,0),U.pixelStorei(37440,ne.flipY),U.pixelStorei(37441,ne.premultiplyAlpha),U.pixelStorei(3317,ne.unpackAlignment),X.isDataTexture?U.texSubImage2D(3553,Y,A.x,A.y,ae,Ie,Fe,Ne,X.image.data):X.isCompressedTexture?U.compressedTexSubImage2D(3553,Y,A.x,A.y,X.mipmaps[0].width,X.mipmaps[0].height,Fe,X.mipmaps[0].data):U.texSubImage2D(3553,Y,A.x,A.y,Fe,Ne,X.image),Y===0&&ne.generateMipmaps&&U.generateMipmap(3553),le.unbindTexture()},this.copyTextureToTexture3D=function(A,X,ne,Y,ae=0){if(f.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ie=A.max.x-A.min.x+1,Fe=A.max.y-A.min.y+1,Ne=A.max.z-A.min.z+1,ze=K.convert(Y.format),Ve=K.convert(Y.type);let We;if(Y.isData3DTexture)Ce.setTexture3D(Y,0),We=32879;else if(Y.isDataArrayTexture)Ce.setTexture2DArray(Y,0),We=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}U.pixelStorei(37440,Y.flipY),U.pixelStorei(37441,Y.premultiplyAlpha),U.pixelStorei(3317,Y.unpackAlignment);const je=U.getParameter(3314),et=U.getParameter(32878),mt=U.getParameter(3316),Ut=U.getParameter(3315),Pe=U.getParameter(32877),ct=ne.isCompressedTexture?ne.mipmaps[0]:ne.image;U.pixelStorei(3314,ct.width),U.pixelStorei(32878,ct.height),U.pixelStorei(3316,A.min.x),U.pixelStorei(3315,A.min.y),U.pixelStorei(32877,A.min.z),ne.isDataTexture||ne.isData3DTexture?U.texSubImage3D(We,ae,X.x,X.y,X.z,Ie,Fe,Ne,ze,Ve,ct.data):ne.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),U.compressedTexSubImage3D(We,ae,X.x,X.y,X.z,Ie,Fe,Ne,ze,ct.data)):U.texSubImage3D(We,ae,X.x,X.y,X.z,Ie,Fe,Ne,ze,Ve,ct),U.pixelStorei(3314,je),U.pixelStorei(32878,et),U.pixelStorei(3316,mt),U.pixelStorei(3315,Ut),U.pixelStorei(32877,Pe),ae===0&&Y.generateMipmaps&&U.generateMipmap(We),le.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?Ce.setTextureCube(A,0):A.isData3DTexture?Ce.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?Ce.setTexture2DArray(A,0):Ce.setTexture2D(A,0),le.unbindTexture()},this.resetState=function(){y=0,x=0,b=null,le.reset(),ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}}class g0 extends Iu{}g0.prototype.isWebGL1Renderer=!0;class Uu extends ut{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class Ou{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=$a,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=on()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=on()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=on()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ot=new k;class Br{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix4(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyNormalMatrix(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.transformDirection(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}setX(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Cn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Cn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Cn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Cn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array),i=lt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array),i=lt(i,this.array),r=lt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new kt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Br(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Fu extends ln{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Be(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Pi;const yr=new k,Di=new k,Ii=new k,Ui=new Ue,br=new Ue,Nu=new Xe,Ss=new k,Mr=new k,ws=new k,sc=new Ue,Fa=new Ue,ac=new Ue;class _0 extends ut{constructor(e){if(super(),this.isSprite=!0,this.type="Sprite",Pi===void 0){Pi=new wt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Ou(t,5);Pi.setIndex([0,1,2,0,2,3]),Pi.setAttribute("position",new Br(n,3,0,!1)),Pi.setAttribute("uv",new Br(n,2,3,!1))}this.geometry=Pi,this.material=e!==void 0?e:new Fu,this.center=new Ue(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Di.setFromMatrixScale(this.matrixWorld),Nu.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ii.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Di.multiplyScalar(-Ii.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const s=this.center;Ts(Ss.set(-.5,-.5,0),Ii,s,Di,i,r),Ts(Mr.set(.5,-.5,0),Ii,s,Di,i,r),Ts(ws.set(.5,.5,0),Ii,s,Di,i,r),sc.set(0,0),Fa.set(1,0),ac.set(1,1);let a=e.ray.intersectTriangle(Ss,Mr,ws,!1,yr);if(a===null&&(Ts(Mr.set(-.5,.5,0),Ii,s,Di,i,r),Fa.set(0,1),a=e.ray.intersectTriangle(Ss,ws,Mr,!1,yr),a===null))return;const o=e.ray.origin.distanceTo(yr);o<e.near||o>e.far||t.push({distance:o,point:yr.clone(),uv:qt.getInterpolation(yr,Ss,Mr,ws,sc,Fa,ac,new Ue),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Ts(l,e,t,n,i,r){Ui.subVectors(l,t).addScalar(.5).multiply(n),i!==void 0?(br.x=r*Ui.x-i*Ui.y,br.y=i*Ui.x+r*Ui.y):br.copy(Ui),l.copy(e),l.x+=br.x,l.y+=br.y,l.applyMatrix4(Nu)}const oc=new k,lc=new at,cc=new at,v0=new k,uc=new Xe,Oi=new k;class x0 extends It{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new Xe,this.bindMatrixInverse=new Xe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new gn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)Oi.fromBufferAttribute(t,n),this.applyBoneTransform(n,Oi),this.boundingBox.expandByPoint(Oi)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new _n),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)Oi.fromBufferAttribute(t,n),this.applyBoneTransform(n,Oi),this.boundingSphere.expandByPoint(Oi)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new at,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;lc.fromBufferAttribute(i.attributes.skinIndex,e),cc.fromBufferAttribute(i.attributes.skinWeight,e),oc.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const s=cc.getComponent(r);if(s!==0){const a=lc.getComponent(r);uc.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(v0.copy(oc).applyMatrix4(uc),s)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}}class ku extends ut{constructor(){super(),this.isBone=!0,this.type="Bone"}}class y0 extends bt{constructor(e=null,t=1,n=1,i,r,s,a,o,c=yt,u=yt,h,d){super(null,s,a,o,c,u,i,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const hc=new Xe,b0=new Xe;class bo{constructor(e=[],t=[]){this.uuid=on(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Xe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Xe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,s=e.length;r<s;r++){const a=e[r]?e[r].matrixWorld:b0;hc.multiplyMatrices(a,t[r]),hc.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new bo(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=fu(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new y0(t,e,e,Jt,Gn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let s=t[r];s===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),s=new ku),this.bones.push(s),this.boneInverses.push(new Xe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const s=t[i];e.bones.push(s.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class no extends kt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Fi=new Xe,dc=new Xe,As=[],fc=new gn,M0=new Xe,Sr=new It,wr=new _n;class S0 extends It{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new no(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,M0)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new gn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Fi),fc.copy(e.boundingBox).applyMatrix4(Fi),this.boundingBox.union(fc)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new _n),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Fi),wr.copy(e.boundingSphere).applyMatrix4(Fi),this.boundingSphere.union(wr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Sr.geometry=this.geometry,Sr.material=this.material,Sr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),wr.copy(this.boundingSphere),wr.applyMatrix4(n),e.ray.intersectsSphere(wr)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Fi),dc.multiplyMatrices(n,Fi),Sr.matrixWorld=dc,Sr.raycast(e,As);for(let s=0,a=As.length;s<a;s++){const o=As[s];o.instanceId=r,o.object=this,t.push(o)}As.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new no(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class nr extends ln{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Be(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const pc=new k,mc=new k,gc=new Xe,Na=new js,Es=new _n;class Wi extends ut{constructor(e=new wt,t=new nr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)pc.fromBufferAttribute(t,i-1),mc.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=pc.distanceTo(mc);e.setAttribute("lineDistance",new Bt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Es.copy(n.boundingSphere),Es.applyMatrix4(i),Es.radius+=r,e.ray.intersectsSphere(Es)===!1)return;gc.copy(i).invert(),Na.copy(e.ray).applyMatrix4(gc);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),o=a*a,c=new k,u=new k,h=new k,d=new k,p=this.isLineSegments?2:1,g=n.index,m=n.attributes.position;if(g!==null){const f=Math.max(0,s.start),v=Math.min(g.count,s.start+s.count);for(let y=f,x=v-1;y<x;y+=p){const b=g.getX(y),T=g.getX(y+1);if(c.fromBufferAttribute(m,b),u.fromBufferAttribute(m,T),Na.distanceSqToSegment(c,u,d,h)>o)continue;d.applyMatrix4(this.matrixWorld);const L=e.ray.origin.distanceTo(d);L<e.near||L>e.far||t.push({distance:L,point:h.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}else{const f=Math.max(0,s.start),v=Math.min(m.count,s.start+s.count);for(let y=f,x=v-1;y<x;y+=p){if(c.fromBufferAttribute(m,y),u.fromBufferAttribute(m,y+1),Na.distanceSqToSegment(c,u,d,h)>o)continue;d.applyMatrix4(this.matrixWorld);const T=e.ray.origin.distanceTo(d);T<e.near||T>e.far||t.push({distance:T,point:h.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}const _c=new k,vc=new k;class Vs extends Wi{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)_c.fromBufferAttribute(t,i),vc.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+_c.distanceTo(vc);e.setAttribute("lineDistance",new Bt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class w0 extends Wi{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Bu extends ln{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Be(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const xc=new Xe,io=new js,Cs=new _n,Ls=new k;class T0 extends ut{constructor(e=new wt,t=new Bu){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Cs.copy(n.boundingSphere),Cs.applyMatrix4(i),Cs.radius+=r,e.ray.intersectsSphere(Cs)===!1)return;xc.copy(i).invert(),io.copy(e.ray).applyMatrix4(xc);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),o=a*a,c=n.index,h=n.attributes.position;if(c!==null){const d=Math.max(0,s.start),p=Math.min(c.count,s.start+s.count);for(let g=d,_=p;g<_;g++){const m=c.getX(g);Ls.fromBufferAttribute(h,m),yc(Ls,m,o,i,e,t,this)}}else{const d=Math.max(0,s.start),p=Math.min(h.count,s.start+s.count);for(let g=d,_=p;g<_;g++)Ls.fromBufferAttribute(h,g),yc(Ls,g,o,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function yc(l,e,t,n,i,r,s){const a=io.distanceSqToPoint(l);if(a<t){const o=new k;io.closestPointToPoint(l,o),o.applyMatrix4(n);const c=i.ray.origin.distanceTo(o);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:o,index:e,face:null,object:s})}}class Mo extends wt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,s=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:s,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const o=Math.min(s+a,Math.PI);let c=0;const u=[],h=new k,d=new k,p=[],g=[],_=[],m=[];for(let f=0;f<=n;f++){const v=[],y=f/n;let x=0;f===0&&s===0?x=.5/t:f===n&&o===Math.PI&&(x=-.5/t);for(let b=0;b<=t;b++){const T=b/t;h.x=-e*Math.cos(i+T*r)*Math.sin(s+y*a),h.y=e*Math.cos(s+y*a),h.z=e*Math.sin(i+T*r)*Math.sin(s+y*a),g.push(h.x,h.y,h.z),d.copy(h).normalize(),_.push(d.x,d.y,d.z),m.push(T+x,1-y),v.push(c++)}u.push(v)}for(let f=0;f<n;f++)for(let v=0;v<t;v++){const y=u[f][v+1],x=u[f][v],b=u[f+1][v],T=u[f+1][v+1];(f!==0||s>0)&&p.push(y,x,T),(f!==n-1||o<Math.PI)&&p.push(x,b,T)}this.setIndex(p),this.setAttribute("position",new Bt(g,3)),this.setAttribute("normal",new Bt(_,3)),this.setAttribute("uv",new Bt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mo(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class So extends ln{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Be(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=hu,this.normalScale=new Ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class li extends So{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ue(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return St(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Be(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Be(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Be(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function kn(l,e,t){return zu(l)?new l.constructor(l.subarray(e,t!==void 0?t:l.length)):l.slice(e,t)}function Rs(l,e,t){return!l||!t&&l.constructor===e?l:typeof e.BYTES_PER_ELEMENT=="number"?new e(l):Array.prototype.slice.call(l)}function zu(l){return ArrayBuffer.isView(l)&&!(l instanceof DataView)}function A0(l){function e(i,r){return l[i]-l[r]}const t=l.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function bc(l,e,t){const n=l.length,i=new l.constructor(n);for(let r=0,s=0;s!==n;++r){const a=t[r]*e;for(let o=0;o!==e;++o)i[s++]=l[a+o]}return i}function Gu(l,e,t,n){let i=1,r=l[0];for(;r!==void 0&&r[n]===void 0;)r=l[i++];if(r===void 0)return;let s=r[n];if(s!==void 0)if(Array.isArray(s))do s=r[n],s!==void 0&&(e.push(r.time),t.push.apply(t,s)),r=l[i++];while(r!==void 0);else if(s.toArray!==void 0)do s=r[n],s!==void 0&&(e.push(r.time),s.toArray(t,t.length)),r=l[i++];while(r!==void 0);else do s=r[n],s!==void 0&&(e.push(r.time),t.push(s)),r=l[i++];while(r!==void 0)}class Wr{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let s;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break e}s=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let o=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===o)break;if(i=r,r=t[--n-1],e>=r)break e}s=n,n=0;break t}break n}for(;n<s;){const a=n+s>>>1;e<t[a]?s=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let s=0;s!==i;++s)t[s]=n[r+s];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class E0 extends Wr{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:vl,endingEnd:vl}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,s=e+1,a=i[r],o=i[s];if(a===void 0)switch(this.getSettings_().endingStart){case xl:r=e,a=2*t-n;break;case yl:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(o===void 0)switch(this.getSettings_().endingEnd){case xl:s=e,o=2*n-t;break;case yl:s=1,o=n+i[1]-i[0];break;default:s=e-1,o=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(o-n),this._offsetPrev=r*u,this._offsetNext=s*u}interpolate_(e,t,n,i){const r=this.resultBuffer,s=this.sampleValues,a=this.valueSize,o=e*a,c=o-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,p=this._weightNext,g=(n-t)/(i-t),_=g*g,m=_*g,f=-d*m+2*d*_-d*g,v=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*g+1,y=(-1-p)*m+(1.5+p)*_+.5*g,x=p*m-p*_;for(let b=0;b!==a;++b)r[b]=f*s[u+b]+v*s[c+b]+y*s[o+b]+x*s[h+b];return r}}class C0 extends Wr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,s=this.sampleValues,a=this.valueSize,o=e*a,c=o-a,u=(n-t)/(i-t),h=1-u;for(let d=0;d!==a;++d)r[d]=s[c+d]*h+s[o+d]*u;return r}}class L0 extends Wr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class vn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Rs(t,this.TimeBufferType),this.values=Rs(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Rs(e.times,Array),values:Rs(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new L0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new C0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new E0(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Fr:t=this.InterpolantFactoryMethodDiscrete;break;case Zi:t=this.InterpolantFactoryMethodLinear;break;case fa:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Fr;case this.InterpolantFactoryMethodLinear:return Zi;case this.InterpolantFactoryMethodSmooth:return fa}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,s=i-1;for(;r!==i&&n[r]<e;)++r;for(;s!==-1&&n[s]>t;)--s;if(++s,r!==0||s!==i){r>=s&&(s=Math.max(s,1),r=s-1);const a=this.getValueSize();this.times=kn(n,r,s),this.values=kn(this.values,r*a,s*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let s=null;for(let a=0;a!==r;a++){const o=n[a];if(typeof o=="number"&&isNaN(o)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,o),e=!1;break}if(s!==null&&s>o){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,o,s),e=!1;break}s=o}if(i!==void 0&&zu(i))for(let a=0,o=i.length;a!==o;++a){const c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=kn(this.times),t=kn(this.values),n=this.getValueSize(),i=this.getInterpolation()===fa,r=e.length-1;let s=1;for(let a=1;a<r;++a){let o=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(i)o=!0;else{const h=a*n,d=h-n,p=h+n;for(let g=0;g!==n;++g){const _=t[h+g];if(_!==t[d+g]||_!==t[p+g]){o=!0;break}}}if(o){if(a!==s){e[s]=e[a];const h=a*n,d=s*n;for(let p=0;p!==n;++p)t[d+p]=t[h+p]}++s}}if(r>0){e[s]=e[r];for(let a=r*n,o=s*n,c=0;c!==n;++c)t[o+c]=t[a+c];++s}return s!==e.length?(this.times=kn(e,0,s),this.values=kn(t,0,s*n)):(this.times=e,this.values=t),this}clone(){const e=kn(this.times,0),t=kn(this.values,0),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}vn.prototype.TimeBufferType=Float32Array;vn.prototype.ValueBufferType=Float32Array;vn.prototype.DefaultInterpolation=Zi;class ir extends vn{}ir.prototype.ValueTypeName="bool";ir.prototype.ValueBufferType=Array;ir.prototype.DefaultInterpolation=Fr;ir.prototype.InterpolantFactoryMethodLinear=void 0;ir.prototype.InterpolantFactoryMethodSmooth=void 0;class Vu extends vn{}Vu.prototype.ValueTypeName="color";class zr extends vn{}zr.prototype.ValueTypeName="number";class R0 extends Wr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,s=this.sampleValues,a=this.valueSize,o=(n-t)/(i-t);let c=e*a;for(let u=c+a;c!==u;c+=4)Qt.slerpFlat(r,0,s,c-a,s,c,o);return r}}class ai extends vn{InterpolantFactoryMethodLinear(e){return new R0(this.times,this.values,this.getValueSize(),e)}}ai.prototype.ValueTypeName="quaternion";ai.prototype.DefaultInterpolation=Zi;ai.prototype.InterpolantFactoryMethodSmooth=void 0;class rr extends vn{}rr.prototype.ValueTypeName="string";rr.prototype.ValueBufferType=Array;rr.prototype.DefaultInterpolation=Fr;rr.prototype.InterpolantFactoryMethodLinear=void 0;rr.prototype.InterpolantFactoryMethodSmooth=void 0;class Gr extends vn{}Gr.prototype.ValueTypeName="vector";class P0{constructor(e,t=-1,n,i=$h){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=on(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let s=0,a=n.length;s!==a;++s)t.push(I0(n[s]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,s=n.length;r!==s;++r)t.push(vn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,s=[];for(let a=0;a<r;a++){let o=[],c=[];o.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const u=A0(o);o=bc(o,1,u),c=bc(c,1,u),!i&&o[0]===0&&(o.push(r),c.push(c[0])),s.push(new zr(".morphTargetInfluences["+t[a].name+"]",o,c).scale(1/n))}return new this(e,-1,s)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,o=e.length;a<o;a++){const c=e[a],u=c.name.match(r);if(u&&u.length>1){const h=u[1];let d=i[h];d||(i[h]=d=[]),d.push(c)}}const s=[];for(const a in i)s.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return s}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,d,p,g,_){if(p.length!==0){const m=[],f=[];Gu(p,m,f,g),m.length!==0&&_.push(new h(d,m,f))}},i=[],r=e.name||"default",s=e.fps||30,a=e.blendMode;let o=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const d=c[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const p={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let _=0;_<d[g].morphTargets.length;_++)p[d[g].morphTargets[_]]=-1;for(const _ in p){const m=[],f=[];for(let v=0;v!==d[g].morphTargets.length;++v){const y=d[g];m.push(y.time),f.push(y.morphTarget===_?1:0)}i.push(new zr(".morphTargetInfluence["+_+"]",m,f))}o=p.length*s}else{const p=".bones["+t[h].name+"]";n(Gr,p+".position",d,"pos",i),n(ai,p+".quaternion",d,"rot",i),n(Gr,p+".scale",d,"scl",i)}}return i.length===0?null:new this(r,o,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function D0(l){switch(l.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return zr;case"vector":case"vector2":case"vector3":case"vector4":return Gr;case"color":return Vu;case"quaternion":return ai;case"bool":case"boolean":return ir;case"string":return rr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+l)}function I0(l){if(l.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=D0(l.type);if(l.times===void 0){const t=[],n=[];Gu(l.keys,t,n,"value"),l.times=t,l.values=n}return e.parse!==void 0?e.parse(l):new e(l.name,l.times,l.values,l.interpolation)}const Qi={enabled:!1,files:{},add:function(l,e){this.enabled!==!1&&(this.files[l]=e)},get:function(l){if(this.enabled!==!1)return this.files[l]},remove:function(l){delete this.files[l]},clear:function(){this.files={}}};class Hu{constructor(e,t,n){const i=this;let r=!1,s=0,a=0,o;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,r===!1&&i.onStart!==void 0&&i.onStart(u,s,a),r=!0},this.itemEnd=function(u){s++,i.onProgress!==void 0&&i.onProgress(u,s,a),s===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return o?o(u):u},this.setURLModifier=function(u){return o=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const p=c[h],g=c[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null}}}const U0=new Hu;class jr{constructor(e){this.manager=e!==void 0?e:U0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const En={};class O0 extends Error{constructor(e,t){super(e),this.response=t}}class Wu extends jr{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Qi.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(En[e]!==void 0){En[e].push({onLoad:t,onProgress:n,onError:i});return}En[e]=[],En[e].push({onLoad:t,onProgress:n,onError:i});const s=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,o=this.responseType;fetch(s).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=En[e],h=c.body.getReader(),d=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),p=d?parseInt(d):0,g=p!==0;let _=0;const m=new ReadableStream({start(f){v();function v(){h.read().then(({done:y,value:x})=>{if(y)f.close();else{_+=x.byteLength;const b=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:p});for(let T=0,C=u.length;T<C;T++){const L=u[T];L.onProgress&&L.onProgress(b)}f.enqueue(x),v()}})}}});return new Response(m)}else throw new O0(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(o){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),d=h&&h[1]?h[1].toLowerCase():void 0,p=new TextDecoder(d);return c.arrayBuffer().then(g=>p.decode(g))}}}).then(c=>{Qi.add(e,c);const u=En[e];delete En[e];for(let h=0,d=u.length;h<d;h++){const p=u[h];p.onLoad&&p.onLoad(c)}}).catch(c=>{const u=En[e];if(u===void 0)throw this.manager.itemError(e),c;delete En[e];for(let h=0,d=u.length;h<d;h++){const p=u[h];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class F0 extends jr{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,s=Qi.get(e);if(s!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(s),r.manager.itemEnd(e)},0),s;const a=kr("img");function o(){u(),Qi.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(h){u(),i&&i(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",o,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",o,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class ju extends jr{constructor(e){super(e)}load(e,t,n,i){const r=new bt,s=new F0(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class qs extends ut{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Be(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const ka=new Xe,Mc=new k,Sc=new k;class wo{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ue(512,512),this.map=null,this.mapPass=null,this.matrix=new Xe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new vo,this._frameExtents=new Ue(1,1),this._viewportCount=1,this._viewports=[new at(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Mc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Mc),Sc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Sc),t.updateMatrixWorld(),ka.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ka),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ka)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class N0 extends wo{constructor(){super(new Dt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Ji*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class k0 extends qs{constructor(e,t,n=0,i=Math.PI/3,r=0,s=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ut.DEFAULT_UP),this.updateMatrix(),this.target=new ut,this.distance=n,this.angle=i,this.penumbra=r,this.decay=s,this.map=null,this.shadow=new N0}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const wc=new Xe,Tr=new k,Ba=new k;class B0 extends wo{constructor(){super(new Dt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ue(4,2),this._viewportCount=6,this._viewports=[new at(2,1,1,1),new at(0,1,1,1),new at(3,1,1,1),new at(1,1,1,1),new at(3,0,1,1),new at(1,0,1,1)],this._cubeDirections=[new k(1,0,0),new k(-1,0,0),new k(0,0,1),new k(0,0,-1),new k(0,1,0),new k(0,-1,0)],this._cubeUps=[new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,0,1),new k(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Tr.setFromMatrixPosition(e.matrixWorld),n.position.copy(Tr),Ba.copy(n.position),Ba.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Ba),n.updateMatrixWorld(),i.makeTranslation(-Tr.x,-Tr.y,-Tr.z),wc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wc)}}class To extends qs{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new B0}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class z0 extends wo{constructor(){super(new xo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class G0 extends qs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ut.DEFAULT_UP),this.updateMatrix(),this.target=new ut,this.shadow=new z0}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class V0 extends qs{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class ro{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class H0 extends wt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class W0 extends jr{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,s=Qi.get(e);if(s!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(s),r.manager.itemEnd(e)},0),s;const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,fetch(e,a).then(function(o){return o.blob()}).then(function(o){return createImageBitmap(o,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(o){Qi.add(e,o),t&&t(o),r.manager.itemEnd(e)}).catch(function(o){i&&i(o),r.manager.itemError(e),r.manager.itemEnd(e)}),r.manager.itemStart(e)}}class j0{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Tc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Tc();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Tc(){return(typeof performance>"u"?Date:performance).now()}const Ao="\\[\\]\\.:\\/",X0=new RegExp("["+Ao+"]","g"),Eo="[^"+Ao+"]",Y0="[^"+Ao.replace("\\.","")+"]",q0=/((?:WC+[\/:])*)/.source.replace("WC",Eo),K0=/(WCOD+)?/.source.replace("WCOD",Y0),Z0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Eo),J0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Eo),$0=new RegExp("^"+q0+K0+Z0+J0+"$"),Q0=["material","materials","bones","map"];class e_{constructor(e,t,n){const i=n||st.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class st{constructor(e,t,n){this.path=t,this.parsedPath=n||st.parseTrackName(t),this.node=st.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new st.Composite(e,t,n):new st(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(X0,"")}static parseTrackName(e){const t=$0.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);Q0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let s=0;s<r.length;s++){const a=r[s];if(a.name===t||a.uuid===t)return a;const o=n(a.children);if(o)return o}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=st.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const s=e[i];if(s===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let o=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}o=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=r}else s.fromArray!==void 0&&s.toArray!==void 0?(o=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(o=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=i;this.getValue=this.GetterByBindingType[o],this.setValue=this.SetterByBindingTypeAndVersioning[o][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}st.Composite=e_;st.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};st.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};st.prototype.GetterByBindingType=[st.prototype._getValue_direct,st.prototype._getValue_array,st.prototype._getValue_arrayElement,st.prototype._getValue_toArray];st.prototype.SetterByBindingTypeAndVersioning=[[st.prototype._setValue_direct,st.prototype._setValue_direct_setNeedsUpdate,st.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[st.prototype._setValue_array,st.prototype._setValue_array_setNeedsUpdate,st.prototype._setValue_array_setMatrixWorldNeedsUpdate],[st.prototype._setValue_arrayElement,st.prototype._setValue_arrayElement_setNeedsUpdate,st.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[st.prototype._setValue_fromArray,st.prototype._setValue_fromArray_setNeedsUpdate,st.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Xu{constructor(e,t,n=0,i=1/0){this.ray=new js(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new _o,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return so(e,this,n,t),n.sort(Ac),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)so(e[i],this,n,t);return n.sort(Ac),n}}function Ac(l,e){return l.distance-e.distance}function so(l,e,t,n){if(l.layers.test(e.layers)&&l.raycast(e,t),n===!0){const i=l.children;for(let r=0,s=i.length;r<s;r++)so(i[r],e,t,!0)}}class Ec{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(St(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class t_ extends Vs{constructor(e=10,t=10,n=4473924,i=8947848){n=new Be(n),i=new Be(i);const r=t/2,s=e/t,a=e/2,o=[],c=[];for(let d=0,p=0,g=-a;d<=t;d++,g+=s){o.push(-a,0,g,a,0,g),o.push(g,0,-a,g,0,a);const _=d===r?n:i;_.toArray(c,p),p+=3,_.toArray(c,p),p+=3,_.toArray(c,p),p+=3,_.toArray(c,p),p+=3}const u=new wt;u.setAttribute("position",new Bt(o,3)),u.setAttribute("color",new Bt(c,3));const h=new nr({vertexColors:!0,toneMapped:!1});super(u,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:mo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=mo);function Cc(l,e){if(e===Qh)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),l;if(e===Ja||e===cu){let t=l.getIndex();if(t===null){const s=[],a=l.getAttribute("position");if(a!==void 0){for(let o=0;o<a.count;o++)s.push(o);l.setIndex(s),t=l.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),l}const n=t.count-2,i=[];if(e===Ja)for(let s=1;s<=n;s++)i.push(t.getX(0)),i.push(t.getX(s)),i.push(t.getX(s+1));else for(let s=0;s<n;s++)s%2===0?(i.push(t.getX(s)),i.push(t.getX(s+1)),i.push(t.getX(s+2))):(i.push(t.getX(s+2)),i.push(t.getX(s+1)),i.push(t.getX(s)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=l.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),l}class n_ extends jr{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new o_(t)}),this.register(function(t){return new p_(t)}),this.register(function(t){return new m_(t)}),this.register(function(t){return new g_(t)}),this.register(function(t){return new c_(t)}),this.register(function(t){return new u_(t)}),this.register(function(t){return new h_(t)}),this.register(function(t){return new d_(t)}),this.register(function(t){return new a_(t)}),this.register(function(t){return new f_(t)}),this.register(function(t){return new l_(t)}),this.register(function(t){return new r_(t)}),this.register(function(t){return new __(t)}),this.register(function(t){return new v_(t)})}load(e,t,n,i){const r=this;let s;this.resourcePath!==""?s=this.resourcePath:this.path!==""?s=this.path:s=ro.extractUrlBase(e),this.manager.itemStart(e);const a=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},o=new Wu(this.manager);o.setPath(this.path),o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(c){try{r.parse(c,s,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const s={},a={},o=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(o.decode(new Uint8Array(e,0,4))===Yu){try{s[$e.KHR_BINARY_GLTF]=new x_(e)}catch(h){i&&i(h);return}r=JSON.parse(s[$e.KHR_BINARY_GLTF].content)}else r=JSON.parse(o.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new D_(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](c);a[h.name]=h,s[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const h=r.extensionsUsed[u],d=r.extensionsRequired||[];switch(h){case $e.KHR_MATERIALS_UNLIT:s[h]=new s_;break;case $e.KHR_DRACO_MESH_COMPRESSION:s[h]=new y_(r,this.dracoLoader);break;case $e.KHR_TEXTURE_TRANSFORM:s[h]=new b_;break;case $e.KHR_MESH_QUANTIZATION:s[h]=new M_;break;default:d.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(s),c.setPlugins(a),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function i_(){let l={};return{get:function(e){return l[e]},add:function(e,t){l[e]=t},remove:function(e){delete l[e]},removeAll:function(){l={}}}}const $e={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class r_{constructor(e){this.parser=e,this.name=$e.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,o=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const u=new Be(16777215);o.color!==void 0&&u.fromArray(o.color);const h=o.range!==void 0?o.range:0;switch(o.type){case"directional":c=new G0(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new To(u),c.distance=h;break;case"spot":c=new k0(u),c.distance=h,o.spot=o.spot||{},o.spot.innerConeAngle=o.spot.innerConeAngle!==void 0?o.spot.innerConeAngle:0,o.spot.outerConeAngle=o.spot.outerConeAngle!==void 0?o.spot.outerConeAngle:Math.PI/4,c.angle=o.spot.outerConeAngle,c.penumbra=1-o.spot.innerConeAngle/o.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+o.type)}return c.position.set(0,0,0),c.decay=2,zn(c,o),o.intensity!==void 0&&(c.intensity=o.intensity),c.name=t.createUniqueName(o.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(o){return n._getNodeRef(t.cache,a,o)})}}class s_{constructor(){this.name=$e.KHR_MATERIALS_UNLIT}getMaterialType(){return Ln}extendParams(e,t,n){const i=[];e.color=new Be(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const s=r.baseColorFactor;e.color.fromArray(s),e.opacity=s[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,nt))}return Promise.all(i)}}class a_{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class o_{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:li}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],s=i.extensions[this.name];if(s.clearcoatFactor!==void 0&&(t.clearcoat=s.clearcoatFactor),s.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",s.clearcoatTexture)),s.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=s.clearcoatRoughnessFactor),s.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",s.clearcoatRoughnessTexture)),s.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",s.clearcoatNormalTexture)),s.clearcoatNormalTexture.scale!==void 0)){const a=s.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ue(a,a)}return Promise.all(r)}}class l_{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:li}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],s=i.extensions[this.name];return s.iridescenceFactor!==void 0&&(t.iridescence=s.iridescenceFactor),s.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",s.iridescenceTexture)),s.iridescenceIor!==void 0&&(t.iridescenceIOR=s.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),s.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=s.iridescenceThicknessMinimum),s.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=s.iridescenceThicknessMaximum),s.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",s.iridescenceThicknessTexture)),Promise.all(r)}}class c_{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:li}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Be(0,0,0),t.sheenRoughness=0,t.sheen=1;const s=i.extensions[this.name];return s.sheenColorFactor!==void 0&&t.sheenColor.fromArray(s.sheenColorFactor),s.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=s.sheenRoughnessFactor),s.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",s.sheenColorTexture,nt)),s.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",s.sheenRoughnessTexture)),Promise.all(r)}}class u_{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:li}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],s=i.extensions[this.name];return s.transmissionFactor!==void 0&&(t.transmission=s.transmissionFactor),s.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",s.transmissionTexture)),Promise.all(r)}}class h_{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:li}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],s=i.extensions[this.name];t.thickness=s.thicknessFactor!==void 0?s.thicknessFactor:0,s.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",s.thicknessTexture)),t.attenuationDistance=s.attenuationDistance||1/0;const a=s.attenuationColor||[1,1,1];return t.attenuationColor=new Be(a[0],a[1],a[2]),Promise.all(r)}}class d_{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:li}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class f_{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:li}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],s=i.extensions[this.name];t.specularIntensity=s.specularFactor!==void 0?s.specularFactor:1,s.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",s.specularTexture));const a=s.specularColorFactor||[1,1,1];return t.specularColor=new Be(a[0],a[1],a[2]),s.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",s.specularColorTexture,nt)),Promise.all(r)}}class p_{constructor(e){this.parser=e,this.name=$e.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],s=t.options.ktx2Loader;if(!s){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,s)}}class m_{constructor(e){this.parser=e,this.name=$e.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const s=r.extensions[t],a=i.images[s.source];let o=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(o=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,s.source,o);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class g_{constructor(e){this.parser=e,this.name=$e.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const s=r.extensions[t],a=i.images[s.source];let o=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(o=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,s.source,o);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class __{constructor(e){this.name=$e.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),s=this.parser.options.meshoptDecoder;if(!s||!s.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const o=i.byteOffset||0,c=i.byteLength||0,u=i.count,h=i.byteStride,d=new Uint8Array(a,o,c);return s.decodeGltfBufferAsync?s.decodeGltfBufferAsync(u,h,d,i.mode,i.filter).then(function(p){return p.buffer}):s.ready.then(function(){const p=new ArrayBuffer(u*h);return s.decodeGltfBuffer(new Uint8Array(p),u,h,d,i.mode,i.filter),p})})}else return null}}class v_{constructor(e){this.name=$e.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==Yt.TRIANGLES&&c.mode!==Yt.TRIANGLE_STRIP&&c.mode!==Yt.TRIANGLE_FAN&&c.mode!==void 0)return null;const s=n.extensions[this.name].attributes,a=[],o={};for(const c in s)a.push(this.parser.getDependency("accessor",s[c]).then(u=>(o[c]=u,o[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const u=c.pop(),h=u.isGroup?u.children:[u],d=c[0].count,p=[];for(const g of h){const _=new Xe,m=new k,f=new Qt,v=new k(1,1,1),y=new S0(g.geometry,g.material,d);for(let x=0;x<d;x++)o.TRANSLATION&&m.fromBufferAttribute(o.TRANSLATION,x),o.ROTATION&&f.fromBufferAttribute(o.ROTATION,x),o.SCALE&&v.fromBufferAttribute(o.SCALE,x),y.setMatrixAt(x,_.compose(m,f,v));for(const x in o)x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&g.geometry.setAttribute(x,o[x]);ut.prototype.copy.call(y,g),this.parser.assignFinalMaterial(y),p.push(y)}return u.isGroup?(u.clear(),u.add(...p),u):p[0]}))}}const Yu="glTF",Ar=12,Lc={JSON:1313821514,BIN:5130562};class x_{constructor(e){this.name=$e.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Ar),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Yu)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Ar,r=new DataView(e,Ar);let s=0;for(;s<i;){const a=r.getUint32(s,!0);s+=4;const o=r.getUint32(s,!0);if(s+=4,o===Lc.JSON){const c=new Uint8Array(e,Ar+s,a);this.content=n.decode(c)}else if(o===Lc.BIN){const c=Ar+s;this.body=e.slice(c,c+a)}s+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class y_{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=$e.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,s=e.extensions[this.name].attributes,a={},o={},c={};for(const u in s){const h=ao[u]||u.toLowerCase();a[h]=s[u]}for(const u in e.attributes){const h=ao[u]||u.toLowerCase();if(s[u]!==void 0){const d=n.accessors[e.attributes[u]],p=ji[d.componentType];c[h]=p.name,o[h]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h){i.decodeDracoFile(u,function(d){for(const p in d.attributes){const g=d.attributes[p],_=o[p];_!==void 0&&(g.normalized=_)}h(d)},a,c)})})}}class b_{constructor(){this.name=$e.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class M_{constructor(){this.name=$e.KHR_MESH_QUANTIZATION}}class qu extends Wr{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let s=0;s!==i;s++)t[s]=n[r+s];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,s=this.sampleValues,a=this.valueSize,o=a*2,c=a*3,u=i-t,h=(n-t)/u,d=h*h,p=d*h,g=e*c,_=g-c,m=-2*p+3*d,f=p-d,v=1-m,y=f-d+h;for(let x=0;x!==a;x++){const b=s[_+x+a],T=s[_+x+o]*u,C=s[g+x+a],L=s[g+x]*u;r[x]=v*b+y*T+m*C+f*L}return r}}const S_=new Qt;class w_ extends qu{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return S_.fromArray(r).normalize().toArray(r),r}}const Yt={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},ji={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Rc={9728:yt,9729:Pt,9984:Za,9985:ou,9986:Os,9987:ni},Pc={33071:Zt,33648:Gs,10497:qi},za={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},ao={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv2",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Bn={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},T_={CUBICSPLINE:void 0,LINEAR:Zi,STEP:Fr},Ga={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function A_(l){return l.DefaultMaterial===void 0&&(l.DefaultMaterial=new So({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:mn})),l.DefaultMaterial}function Er(l,e,t){for(const n in t.extensions)l[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function zn(l,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(l.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function E_(l,e,t){let n=!1,i=!1,r=!1;for(let c=0,u=e.length;c<u;c++){const h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(l);const s=[],a=[],o=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];if(n){const d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):l.attributes.position;s.push(d)}if(i){const d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):l.attributes.normal;a.push(d)}if(r){const d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):l.attributes.color;o.push(d)}}return Promise.all([Promise.all(s),Promise.all(a),Promise.all(o)]).then(function(c){const u=c[0],h=c[1],d=c[2];return n&&(l.morphAttributes.position=u),i&&(l.morphAttributes.normal=h),r&&(l.morphAttributes.color=d),l.morphTargetsRelative=!0,l})}function C_(l,e){if(l.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)l.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(l.morphTargetInfluences.length===t.length){l.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)l.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function L_(l){const e=l.extensions&&l.extensions[$e.KHR_DRACO_MESH_COMPRESSION];let t;return e?t="draco:"+e.bufferView+":"+e.indices+":"+Dc(e.attributes):t=l.indices+":"+Dc(l.attributes)+":"+l.mode,t}function Dc(l){let e="";const t=Object.keys(l).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+l[t[n]]+";";return e}function oo(l){switch(l){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function R_(l){return l.search(/\.jpe?g($|\?)/i)>0||l.search(/^data\:image\/jpeg/)===0?"image/jpeg":l.search(/\.webp($|\?)/i)>0||l.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const P_=new Xe;class D_{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new i_,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,r=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,r=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||i&&r<98?this.textureLoader=new ju(this.options.manager):this.textureLoader=new W0(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Wu(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(s){return s._markDefs&&s._markDefs()}),Promise.all(this._invokeAll(function(s){return s.beforeRoot&&s.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(s){const a={scene:s[0][i.scene||0],scenes:s[0],animations:s[1],cameras:s[2],asset:i.asset,parser:n,userData:{}};Er(r,a,i),zn(a,i),Promise.all(n._invokeAll(function(o){return o.afterRoot&&o.afterRoot(a)})).then(function(){e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const s=t[i].joints;for(let a=0,o=s.length;a<o;a++)e[s[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const s=e[i];s.mesh!==void 0&&(this._addNodeRef(this.meshCache,s.mesh),s.skin!==void 0&&(n[s.mesh].isSkinnedMesh=!0)),s.camera!==void 0&&this._addNodeRef(this.cameraCache,s.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(s,a)=>{const o=this.associations.get(s);o!=null&&this.associations.set(a,o);for(const[c,u]of s.children.entries())r(u,a.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,s){return n.getDependency(e,s)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[$e.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,s){n.load(ro.resolveURL(t.uri,i.path),r,void 0,function(){s(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const s=za[i.type],a=ji[i.componentType],o=i.normalized===!0,c=new a(i.count*s);return Promise.resolve(new kt(c,s,o))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(s){const a=s[0],o=za[i.type],c=ji[i.componentType],u=c.BYTES_PER_ELEMENT,h=u*o,d=i.byteOffset||0,p=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let _,m;if(p&&p!==h){const f=Math.floor(d/p),v="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+f+":"+i.count;let y=t.cache.get(v);y||(_=new c(a,f*p,i.count*p/u),y=new Ou(_,p/u),t.cache.add(v,y)),m=new Br(y,o,d%p/u,g)}else a===null?_=new c(i.count*o):_=new c(a,d,i.count*o),m=new kt(_,o,g);if(i.sparse!==void 0){const f=za.SCALAR,v=ji[i.sparse.indices.componentType],y=i.sparse.indices.byteOffset||0,x=i.sparse.values.byteOffset||0,b=new v(s[1],y,i.sparse.count*f),T=new c(s[2],x,i.sparse.count*o);a!==null&&(m=new kt(m.array.slice(),m.itemSize,m.normalized));for(let C=0,L=b.length;C<L;C++){const S=b[C];if(m.setX(S,T[C*o]),o>=2&&m.setY(S,T[C*o+1]),o>=3&&m.setZ(S,T[C*o+2]),o>=4&&m.setW(S,T[C*o+3]),o>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,s=t.images[r];let a=this.textureLoader;if(s.uri){const o=n.manager.getHandler(s.uri);o!==null&&(a=o)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const i=this,r=this.json,s=r.textures[e],a=r.images[t],o=(a.uri||a.bufferView)+":"+s.sampler;if(this.textureCache[o])return this.textureCache[o];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=s.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const d=(r.samplers||{})[s.sampler]||{};return u.magFilter=Rc[d.magFilter]||Pt,u.minFilter=Rc[d.minFilter]||ni,u.wrapS=Pc[d.wrapS]||qi,u.wrapT=Pc[d.wrapT]||qi,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[o]=c,c}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const s=i.images[e],a=self.URL||self.webkitURL;let o=s.uri||"",c=!1;if(s.bufferView!==void 0)o=n.getDependency("bufferView",s.bufferView).then(function(h){c=!0;const d=new Blob([h],{type:s.mimeType});return o=a.createObjectURL(d),o});else if(s.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(o).then(function(h){return new Promise(function(d,p){let g=d;t.isImageBitmapLoader===!0&&(g=function(_){const m=new bt(_);m.needsUpdate=!0,d(m)}),t.load(ro.resolveURL(h,r.path),g,void 0,p)})}).then(function(h){return c===!0&&a.revokeObjectURL(o),h.userData.mimeType=s.mimeType||R_(s.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",o),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(s){if(!s)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(s=s.clone(),s.channel=n.texCoord),r.extensions[$e.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[$e.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const o=r.associations.get(s);s=r.extensions[$e.KHR_TEXTURE_TRANSFORM].extendTexture(s,a),r.associations.set(s,o)}}return i!==void 0&&(s.encoding=i),e[t]=s,s})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,s=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let o=this.cache.get(a);o||(o=new Bu,ln.prototype.copy.call(o,n),o.color.copy(n.color),o.map=n.map,o.sizeAttenuation=!1,this.cache.add(a,o)),n=o}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let o=this.cache.get(a);o||(o=new nr,ln.prototype.copy.call(o,n),o.color.copy(n.color),o.map=n.map,this.cache.add(a,o)),n=o}if(i||r||s){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),s&&(a+="flat-shading:");let o=this.cache.get(a);o||(o=n.clone(),r&&(o.vertexColors=!0),s&&(o.flatShading=!0),i&&(o.normalScale&&(o.normalScale.y*=-1),o.clearcoatNormalScale&&(o.clearcoatNormalScale.y*=-1)),this.cache.add(a,o),this.associations.set(o,this.associations.get(n))),n=o}e.material=n}getMaterialType(){return So}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let s;const a={},o=r.extensions||{},c=[];if(o[$e.KHR_MATERIALS_UNLIT]){const h=i[$e.KHR_MATERIALS_UNLIT];s=h.getMaterialType(),c.push(h.extendParams(a,r,t))}else{const h=r.pbrMetallicRoughness||{};if(a.color=new Be(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const d=h.baseColorFactor;a.color.fromArray(d),a.opacity=d[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,nt)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),s=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Kt);const u=r.alphaMode||Ga.OPAQUE;if(u===Ga.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Ga.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&s!==Ln&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Ue(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;a.normalScale.set(h,h)}return r.occlusionTexture!==void 0&&s!==Ln&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&s!==Ln&&(a.emissive=new Be().fromArray(r.emissiveFactor)),r.emissiveTexture!==void 0&&s!==Ln&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,nt)),Promise.all(c).then(function(){const h=new s(a);return r.name&&(h.name=r.name),zn(h,r),t.associations.set(h,{materials:e}),r.extensions&&Er(i,h,r),h})}createUniqueName(e){const t=st.sanitizeNodeName(e||"");let n=t;for(let i=1;this.nodeNamesUsed[n];++i)n=t+"_"+i;return this.nodeNamesUsed[n]=!0,n}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[$e.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(o){return Ic(o,a,t)})}const s=[];for(let a=0,o=e.length;a<o;a++){const c=e[a],u=L_(c),h=i[u];if(h)s.push(h.promise);else{let d;c.extensions&&c.extensions[$e.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=Ic(new wt,c,t),i[u]={primitive:c,promise:d},s.push(d)}}return Promise.all(s)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],s=r.primitives,a=[];for(let o=0,c=s.length;o<c;o++){const u=s[o].material===void 0?A_(this.cache):this.getDependency("material",s[o].material);a.push(u)}return a.push(t.loadGeometries(s)),Promise.all(a).then(function(o){const c=o.slice(0,o.length-1),u=o[o.length-1],h=[];for(let p=0,g=u.length;p<g;p++){const _=u[p],m=s[p];let f;const v=c[p];if(m.mode===Yt.TRIANGLES||m.mode===Yt.TRIANGLE_STRIP||m.mode===Yt.TRIANGLE_FAN||m.mode===void 0)f=r.isSkinnedMesh===!0?new x0(_,v):new It(_,v),f.isSkinnedMesh===!0&&f.normalizeSkinWeights(),m.mode===Yt.TRIANGLE_STRIP?f.geometry=Cc(f.geometry,cu):m.mode===Yt.TRIANGLE_FAN&&(f.geometry=Cc(f.geometry,Ja));else if(m.mode===Yt.LINES)f=new Vs(_,v);else if(m.mode===Yt.LINE_STRIP)f=new Wi(_,v);else if(m.mode===Yt.LINE_LOOP)f=new w0(_,v);else if(m.mode===Yt.POINTS)f=new T0(_,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(f.geometry.morphAttributes).length>0&&C_(f,r),f.name=t.createUniqueName(r.name||"mesh_"+e),zn(f,r),m.extensions&&Er(i,f,m),t.assignFinalMaterial(f),h.push(f)}for(let p=0,g=h.length;p<g;p++)t.associations.set(h[p],{meshes:e,primitives:p});if(h.length===1)return h[0];const d=new $t;t.associations.set(d,{meshes:e});for(let p=0,g=h.length;p<g;p++)d.add(h[p]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Dt(gd.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new xo(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),zn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),s=i,a=[],o=[];for(let c=0,u=s.length;c<u;c++){const h=s[c];if(h){a.push(h);const d=new Xe;r!==null&&d.fromArray(r.array,c*16),o.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new bo(a,o)})}loadAnimation(e){const n=this.json.animations[e],i=n.name?n.name:"animation_"+e,r=[],s=[],a=[],o=[],c=[];for(let u=0,h=n.channels.length;u<h;u++){const d=n.channels[u],p=n.samplers[d.sampler],g=d.target,_=g.node,m=n.parameters!==void 0?n.parameters[p.input]:p.input,f=n.parameters!==void 0?n.parameters[p.output]:p.output;g.node!==void 0&&(r.push(this.getDependency("node",_)),s.push(this.getDependency("accessor",m)),a.push(this.getDependency("accessor",f)),o.push(p),c.push(g))}return Promise.all([Promise.all(r),Promise.all(s),Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(u){const h=u[0],d=u[1],p=u[2],g=u[3],_=u[4],m=[];for(let f=0,v=h.length;f<v;f++){const y=h[f],x=d[f],b=p[f],T=g[f],C=_[f];if(y===void 0)continue;y.updateMatrix();let L;switch(Bn[C.path]){case Bn.weights:L=zr;break;case Bn.rotation:L=ai;break;case Bn.position:case Bn.scale:default:L=Gr;break}const S=y.name?y.name:y.uuid,E=T.interpolation!==void 0?T_[T.interpolation]:Zi,J=[];Bn[C.path]===Bn.weights?y.traverse(function(P){P.morphTargetInfluences&&J.push(P.name?P.name:P.uuid)}):J.push(S);let D=b.array;if(b.normalized){const P=oo(D.constructor),I=new Float32Array(D.length);for(let B=0,q=D.length;B<q;B++)I[B]=D[B]*P;D=I}for(let P=0,I=J.length;P<I;P++){const B=new L(J[P]+"."+Bn[C.path],x.array,D,E);T.interpolation==="CUBICSPLINE"&&(B.createInterpolant=function(ie){const Z=this instanceof ai?w_:qu;return new Z(this.times,this.values,this.getValueSize()/3,ie)},B.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0),m.push(B)}}return new P0(i,void 0,m)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const s=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&s.traverse(function(a){if(a.isMesh)for(let o=0,c=i.weights.length;o<c;o++)a.morphTargetInfluences[o]=i.weights[o]}),s})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),s=[],a=i.children||[];for(let c=0,u=a.length;c<u;c++)s.push(n.getDependency("node",a[c]));const o=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(s),o]).then(function(c){const u=c[0],h=c[1],d=c[2];d!==null&&u.traverse(function(p){p.isSkinnedMesh&&p.bind(d,P_)});for(let p=0,g=h.length;p<g;p++)u.add(h[p]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],s=r.name?i.createUniqueName(r.name):"",a=[],o=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return o&&a.push(o),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(r.isBone===!0?u=new ku:c.length>1?u=new $t:c.length===1?u=c[0]:u=new ut,u!==c[0])for(let h=0,d=c.length;h<d;h++)u.add(c[h]);if(r.name&&(u.userData.name=r.name,u.name=s),zn(u,r),r.extensions&&Er(n,u,r),r.matrix!==void 0){const h=new Xe;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return i.associations.has(u)||i.associations.set(u,{}),i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new $t;n.name&&(r.name=i.createUniqueName(n.name)),zn(r,n),n.extensions&&Er(t,r,n);const s=n.nodes||[],a=[];for(let o=0,c=s.length;o<c;o++)a.push(i.getDependency("node",s[o]));return Promise.all(a).then(function(o){for(let u=0,h=o.length;u<h;u++)r.add(o[u]);const c=u=>{const h=new Map;for(const[d,p]of i.associations)(d instanceof ln||d instanceof bt)&&h.set(d,p);return u.traverse(d=>{const p=i.associations.get(d);p!=null&&h.set(d,p)}),h};return i.associations=c(r),r})}}function I_(l,e,t){const n=e.attributes,i=new gn;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],o=a.min,c=a.max;if(o!==void 0&&c!==void 0){if(i.set(new k(o[0],o[1],o[2]),new k(c[0],c[1],c[2])),a.normalized){const u=oo(ji[a.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new k,o=new k;for(let c=0,u=r.length;c<u;c++){const h=r[c];if(h.POSITION!==void 0){const d=t.json.accessors[h.POSITION],p=d.min,g=d.max;if(p!==void 0&&g!==void 0){if(o.setX(Math.max(Math.abs(p[0]),Math.abs(g[0]))),o.setY(Math.max(Math.abs(p[1]),Math.abs(g[1]))),o.setZ(Math.max(Math.abs(p[2]),Math.abs(g[2]))),d.normalized){const _=oo(ji[d.componentType]);o.multiplyScalar(_)}a.max(o)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}l.boundingBox=i;const s=new _n;i.getCenter(s.center),s.radius=i.min.distanceTo(i.max)/2,l.boundingSphere=s}function Ic(l,e,t){const n=e.attributes,i=[];function r(s,a){return t.getDependency("accessor",s).then(function(o){l.setAttribute(a,o)})}for(const s in n){const a=ao[s]||s.toLowerCase();a in l.attributes||i.push(r(n[s],a))}if(e.indices!==void 0&&!l.index){const s=t.getDependency("accessor",e.indices).then(function(a){l.setIndex(a)});i.push(s)}return zn(l,e),I_(l,e,t),Promise.all(i).then(function(){return e.targets!==void 0?E_(l,e.targets,t):l})}const Ns=new Hu;Ns.onError=function(l){console.error("There was an error loading "+l)};const ke={DISTANCE_SCALE:1e5,SIZE_SCALE:100,ORB_SCALE:1e6,ROT_SCALE:1e4,CAM_ROT_SPEED:Math.PI/64,_time_scale:1,get TIME_SCALE(){return this._time_scale},set TIME_SCALE(l){this.ROT_SCALE=l,this.ORB_SCALE=l,this._time_scale=l},CELESTIAL_ORB:!0,MAN_CELESTIAL_ORB:!1,GLTF_LOADER:new n_(Ns),TEX_LOADER:new ju(Ns),TEX_LOAD(l){return U_.push(l),this.TEX_LOADER.load(l)},LOAD_MANAGER:Ns,WORLD_POS:new k,CAM_POS:new k,WORLD_QUAT:new Qt,WORLD_QUAT2:new Qt},U_=[];function O_(){var l=Object.create(null);function e(i,r){var s=i.id,a=i.name,o=i.dependencies;o===void 0&&(o=[]);var c=i.init;c===void 0&&(c=function(){});var u=i.getTransferables;if(u===void 0&&(u=null),!l[s])try{o=o.map(function(d){return d&&d.isWorkerModule&&(e(d,function(p){if(p instanceof Error)throw p}),d=l[d.id].value),d}),c=n("<"+a+">.init",c),u&&(u=n("<"+a+">.getTransferables",u));var h=null;typeof c=="function"?h=c.apply(void 0,o):console.error("worker module init function failed to rehydrate"),l[s]={id:s,value:h,getTransferables:u},r(h)}catch(d){d&&d.noLog||console.error(d),r(d)}}function t(i,r){var s,a=i.id,o=i.args;(!l[a]||typeof l[a].value!="function")&&r(new Error("Worker module "+a+": not found or its 'init' did not return a function"));try{var c=(s=l[a]).value.apply(s,o);c&&typeof c.then=="function"?c.then(u,function(h){return r(h instanceof Error?h:new Error(""+h))}):u(c)}catch(h){r(h)}function u(h){try{var d=l[a].getTransferables&&l[a].getTransferables(h);(!d||!Array.isArray(d)||!d.length)&&(d=void 0),r(h,d)}catch(p){console.error(p),r(p)}}}function n(i,r){var s=void 0;self.troikaDefine=function(o){return s=o};var a=URL.createObjectURL(new Blob(["/** "+i.replace(/\*/g,"")+` **/

troikaDefine(
`+r+`
)`],{type:"application/javascript"}));try{importScripts(a)}catch(o){console.error(o)}return URL.revokeObjectURL(a),delete self.troikaDefine,s}self.addEventListener("message",function(i){var r=i.data,s=r.messageId,a=r.action,o=r.data;try{a==="registerModule"&&e(o,function(c){c instanceof Error?postMessage({messageId:s,success:!1,error:c.message}):postMessage({messageId:s,success:!0,result:{isCallable:typeof c=="function"}})}),a==="callModule"&&t(o,function(c,u){c instanceof Error?postMessage({messageId:s,success:!1,error:c.message}):postMessage({messageId:s,success:!0,result:c},u||void 0)})}catch(c){postMessage({messageId:s,success:!1,error:c.stack})}})}function F_(l){var e=function(){for(var t=[],n=arguments.length;n--;)t[n]=arguments[n];return e._getInitResult().then(function(i){if(typeof i=="function")return i.apply(void 0,t);throw new Error("Worker module function was called but `init` did not return a callable function")})};return e._getInitResult=function(){var t=l.dependencies,n=l.init;t=Array.isArray(t)?t.map(function(r){return r&&r._getInitResult?r._getInitResult():r}):[];var i=Promise.all(t).then(function(r){return n.apply(null,r)});return e._getInitResult=function(){return i},i},e}var Ku=function(){var l=!1;if(typeof window<"u"&&typeof window.document<"u")try{var e=new Worker(URL.createObjectURL(new Blob([""],{type:"application/javascript"})));e.terminate(),l=!0}catch(t){typeof process<"u",console.log("Troika createWorkerModule: web workers not allowed; falling back to main thread execution. Cause: ["+t.message+"]")}return Ku=function(){return l},l},N_=0,k_=0,Va=!1,Ir=Object.create(null),Ur=Object.create(null),lo=Object.create(null);function Xr(l){if((!l||typeof l.init!="function")&&!Va)throw new Error("requires `options.init` function");var e=l.dependencies,t=l.init,n=l.getTransferables,i=l.workerId;if(!Ku())return F_(l);i==null&&(i="#default");var r="workerModule"+ ++N_,s=l.name||r,a=null;e=e&&e.map(function(c){return typeof c=="function"&&!c.workerModuleData&&(Va=!0,c=Xr({workerId:i,name:"<"+s+"> function dependency: "+c.name,init:`function(){return (
`+ks(c)+`
)}`}),Va=!1),c&&c.workerModuleData&&(c=c.workerModuleData),c});function o(){for(var c=[],u=arguments.length;u--;)c[u]=arguments[u];if(!a){a=Uc(i,"registerModule",o.workerModuleData);var h=function(){a=null,Ur[i].delete(h)};(Ur[i]||(Ur[i]=new Set)).add(h)}return a.then(function(d){var p=d.isCallable;if(p)return Uc(i,"callModule",{id:r,args:c});throw new Error("Worker module function was called but `init` did not return a callable function")})}return o.workerModuleData={isWorkerModule:!0,id:r,name:s,dependencies:e,init:ks(t),getTransferables:n&&ks(n)},o}function B_(l){Ur[l]&&Ur[l].forEach(function(e){e()}),Ir[l]&&(Ir[l].terminate(),delete Ir[l])}function ks(l){var e=l.toString();return!/^function/.test(e)&&/^\w+\s*\(/.test(e)&&(e="function "+e),e}function z_(l){var e=Ir[l];if(!e){var t=ks(O_);e=Ir[l]=new Worker(URL.createObjectURL(new Blob(["/** Worker Module Bootstrap: "+l.replace(/\*/g,"")+` **/

;(`+t+")()"],{type:"application/javascript"}))),e.onmessage=function(n){var i=n.data,r=i.messageId,s=lo[r];if(!s)throw new Error("WorkerModule response with empty or unknown messageId");delete lo[r],s(i)}}return e}function Uc(l,e,t){return new Promise(function(n,i){var r=++k_;lo[r]=function(s){s.success?n(s.result):i(new Error("Error in worker "+e+" call: "+s.error))},z_(l).postMessage({messageId:r,action:e,data:t})})}function Zu(){var l=function(e){function t(H,j,F,G,N,z,W,Q){var U=1-W;Q.x=U*U*H+2*U*W*F+W*W*N,Q.y=U*U*j+2*U*W*G+W*W*z}function n(H,j,F,G,N,z,W,Q,U,re){var he=1-U;re.x=he*he*he*H+3*he*he*U*F+3*he*U*U*N+U*U*U*W,re.y=he*he*he*j+3*he*he*U*G+3*he*U*U*z+U*U*U*Q}function i(H,j){for(var F=/([MLQCZ])([^MLQCZ]*)/g,G,N,z,W,Q;G=F.exec(H);){var U=G[2].replace(/^\s*|\s*$/g,"").split(/[,\s]+/).map(function(re){return parseFloat(re)});switch(G[1]){case"M":W=N=U[0],Q=z=U[1];break;case"L":(U[0]!==W||U[1]!==Q)&&j("L",W,Q,W=U[0],Q=U[1]);break;case"Q":{j("Q",W,Q,W=U[2],Q=U[3],U[0],U[1]);break}case"C":{j("C",W,Q,W=U[4],Q=U[5],U[0],U[1],U[2],U[3]);break}case"Z":(W!==N||Q!==z)&&j("L",W,Q,N,z);break}}}function r(H,j,F){F===void 0&&(F=16);var G={x:0,y:0};i(H,function(N,z,W,Q,U,re,he,se,le){switch(N){case"L":j(z,W,Q,U);break;case"Q":{for(var oe=z,xe=W,Ce=1;Ce<F;Ce++)t(z,W,re,he,Q,U,Ce/(F-1),G),j(oe,xe,G.x,G.y),oe=G.x,xe=G.y;break}case"C":{for(var Ae=z,Le=W,Oe=1;Oe<F;Oe++)n(z,W,re,he,se,le,Q,U,Oe/(F-1),G),j(Ae,Le,G.x,G.y),Ae=G.x,Le=G.y;break}}})}var s="precision highp float;attribute vec2 aUV;varying vec2 vUV;void main(){vUV=aUV;gl_Position=vec4(mix(vec2(-1.0),vec2(1.0),aUV),0.0,1.0);}",a="precision highp float;uniform sampler2D tex;varying vec2 vUV;void main(){gl_FragColor=texture2D(tex,vUV);}",o=new WeakMap,c={premultipliedAlpha:!1,preserveDrawingBuffer:!0,antialias:!1,depth:!1};function u(H,j){var F=H.getContext?H.getContext("webgl",c):H,G=o.get(F);if(!G){let Ae=function(ce){var w=z[ce];if(!w&&(w=z[ce]=F.getExtension(ce),!w))throw new Error(ce+" not supported");return w},Le=function(ce,w){var M=F.createShader(w);return F.shaderSource(M,ce),F.compileShader(M),M},Oe=function(ce,w,M,V){if(!W[ce]){var $={},ue={},me=F.createProgram();F.attachShader(me,Le(w,F.VERTEX_SHADER)),F.attachShader(me,Le(M,F.FRAGMENT_SHADER)),F.linkProgram(me),W[ce]={program:me,transaction:function(ee){F.useProgram(me),ee({setUniform:function(ve,fe){for(var be=[],de=arguments.length-2;de-- >0;)be[de]=arguments[de+2];var pe=ue[fe]||(ue[fe]=F.getUniformLocation(me,fe));F["uniform"+ve].apply(F,[pe].concat(be))},setAttribute:function(ve,fe,be,de,pe){var Se=$[ve];Se||(Se=$[ve]={buf:F.createBuffer(),loc:F.getAttribLocation(me,ve),data:null}),F.bindBuffer(F.ARRAY_BUFFER,Se.buf),F.vertexAttribPointer(Se.loc,fe,F.FLOAT,!1,0,0),F.enableVertexAttribArray(Se.loc),N?F.vertexAttribDivisor(Se.loc,de):Ae("ANGLE_instanced_arrays").vertexAttribDivisorANGLE(Se.loc,de),pe!==Se.data&&(F.bufferData(F.ARRAY_BUFFER,pe,be),Se.data=pe)}})}}}W[ce].transaction(V)},_e=function(ce,w){U++;try{F.activeTexture(F.TEXTURE0+U);var M=Q[ce];M||(M=Q[ce]=F.createTexture(),F.bindTexture(F.TEXTURE_2D,M),F.texParameteri(F.TEXTURE_2D,F.TEXTURE_MIN_FILTER,F.NEAREST),F.texParameteri(F.TEXTURE_2D,F.TEXTURE_MAG_FILTER,F.NEAREST)),F.bindTexture(F.TEXTURE_2D,M),w(M,U)}finally{U--}},Me=function(ce,w,M){var V=F.createFramebuffer();re.push(V),F.bindFramebuffer(F.FRAMEBUFFER,V),F.activeTexture(F.TEXTURE0+w),F.bindTexture(F.TEXTURE_2D,ce),F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,ce,0);try{M(V)}finally{F.deleteFramebuffer(V),F.bindFramebuffer(F.FRAMEBUFFER,re[--re.length-1]||null)}},ye=function(){z={},W={},Q={},U=-1,re.length=0};var he=Ae,se=Le,le=Oe,oe=_e,xe=Me,Ce=ye,N=typeof WebGL2RenderingContext<"u"&&F instanceof WebGL2RenderingContext,z={},W={},Q={},U=-1,re=[];F.canvas.addEventListener("webglcontextlost",function(ce){ye(),ce.preventDefault()},!1),o.set(F,G={gl:F,isWebGL2:N,getExtension:Ae,withProgram:Oe,withTexture:_e,withTextureFramebuffer:Me,handleContextLoss:ye})}j(G)}function h(H,j,F,G,N,z,W,Q){W===void 0&&(W=15),Q===void 0&&(Q=null),u(H,function(U){var re=U.gl,he=U.withProgram,se=U.withTexture;se("copy",function(le,oe){re.texImage2D(re.TEXTURE_2D,0,re.RGBA,N,z,0,re.RGBA,re.UNSIGNED_BYTE,j),he("copy",s,a,function(xe){var Ce=xe.setUniform,Ae=xe.setAttribute;Ae("aUV",2,re.STATIC_DRAW,0,new Float32Array([0,0,2,0,0,2])),Ce("1i","image",oe),re.bindFramebuffer(re.FRAMEBUFFER,Q||null),re.disable(re.BLEND),re.colorMask(W&8,W&4,W&2,W&1),re.viewport(F,G,N,z),re.scissor(F,G,N,z),re.drawArrays(re.TRIANGLES,0,3)})})})}function d(H,j,F){var G=H.width,N=H.height;u(H,function(z){var W=z.gl,Q=new Uint8Array(G*N*4);W.readPixels(0,0,G,N,W.RGBA,W.UNSIGNED_BYTE,Q),H.width=j,H.height=F,h(W,Q,0,0,G,N)})}var p=Object.freeze({__proto__:null,withWebGLContext:u,renderImageData:h,resizeWebGLCanvasWithoutClearing:d});function g(H,j,F,G,N,z){z===void 0&&(z=1);var W=new Uint8Array(H*j),Q=G[2]-G[0],U=G[3]-G[1],re=[];r(F,function(Ae,Le,Oe,_e){re.push({x1:Ae,y1:Le,x2:Oe,y2:_e,minX:Math.min(Ae,Oe),minY:Math.min(Le,_e),maxX:Math.max(Ae,Oe),maxY:Math.max(Le,_e)})}),re.sort(function(Ae,Le){return Ae.maxX-Le.maxX});for(var he=0;he<H;he++)for(var se=0;se<j;se++){var le=xe(G[0]+Q*(he+.5)/H,G[1]+U*(se+.5)/j),oe=Math.pow(1-Math.abs(le)/N,z)/2;le<0&&(oe=1-oe),oe=Math.max(0,Math.min(255,Math.round(oe*255))),W[se*H+he]=oe}return W;function xe(Ae,Le){for(var Oe=1/0,_e=1/0,Me=re.length;Me--;){var ye=re[Me];if(ye.maxX+_e<=Ae)break;if(Ae+_e>ye.minX&&Le-_e<ye.maxY&&Le+_e>ye.minY){var ce=f(Ae,Le,ye.x1,ye.y1,ye.x2,ye.y2);ce<Oe&&(Oe=ce,_e=Math.sqrt(Oe))}}return Ce(Ae,Le)&&(_e=-_e),_e}function Ce(Ae,Le){for(var Oe=0,_e=re.length;_e--;){var Me=re[_e];if(Me.maxX<=Ae)break;var ye=Me.y1>Le!=Me.y2>Le&&Ae<(Me.x2-Me.x1)*(Le-Me.y1)/(Me.y2-Me.y1)+Me.x1;ye&&(Oe+=Me.y1<Me.y2?1:-1)}return Oe!==0}}function _(H,j,F,G,N,z,W,Q,U,re){z===void 0&&(z=1),Q===void 0&&(Q=0),U===void 0&&(U=0),re===void 0&&(re=0),m(H,j,F,G,N,z,W,null,Q,U,re)}function m(H,j,F,G,N,z,W,Q,U,re,he){z===void 0&&(z=1),U===void 0&&(U=0),re===void 0&&(re=0),he===void 0&&(he=0);for(var se=g(H,j,F,G,N,z),le=new Uint8Array(se.length*4),oe=0;oe<se.length;oe++)le[oe*4+he]=se[oe];h(W,le,U,re,H,j,1<<3-he,Q)}function f(H,j,F,G,N,z){var W=N-F,Q=z-G,U=W*W+Q*Q,re=U?Math.max(0,Math.min(1,((H-F)*W+(j-G)*Q)/U)):0,he=H-(F+re*W),se=j-(G+re*Q);return he*he+se*se}var v=Object.freeze({__proto__:null,generate:g,generateIntoCanvas:_,generateIntoFramebuffer:m}),y="precision highp float;uniform vec4 uGlyphBounds;attribute vec2 aUV;attribute vec4 aLineSegment;varying vec4 vLineSegment;varying vec2 vGlyphXY;void main(){vLineSegment=aLineSegment;vGlyphXY=mix(uGlyphBounds.xy,uGlyphBounds.zw,aUV);gl_Position=vec4(mix(vec2(-1.0),vec2(1.0),aUV),0.0,1.0);}",x="precision highp float;uniform vec4 uGlyphBounds;uniform float uMaxDistance;uniform float uExponent;varying vec4 vLineSegment;varying vec2 vGlyphXY;float absDistToSegment(vec2 point,vec2 lineA,vec2 lineB){vec2 lineDir=lineB-lineA;float lenSq=dot(lineDir,lineDir);float t=lenSq==0.0 ? 0.0 : clamp(dot(point-lineA,lineDir)/lenSq,0.0,1.0);vec2 linePt=lineA+t*lineDir;return distance(point,linePt);}void main(){vec4 seg=vLineSegment;vec2 p=vGlyphXY;float dist=absDistToSegment(p,seg.xy,seg.zw);float val=pow(1.0-clamp(dist/uMaxDistance,0.0,1.0),uExponent)*0.5;bool crossing=(seg.y>p.y!=seg.w>p.y)&&(p.x<(seg.z-seg.x)*(p.y-seg.y)/(seg.w-seg.y)+seg.x);bool crossingUp=crossing&&vLineSegment.y<vLineSegment.w;gl_FragColor=vec4(crossingUp ? 1.0/255.0 : 0.0,crossing&&!crossingUp ? 1.0/255.0 : 0.0,0.0,val);}",b="precision highp float;uniform sampler2D tex;varying vec2 vUV;void main(){vec4 color=texture2D(tex,vUV);bool inside=color.r!=color.g;float val=inside ? 1.0-color.a : color.a;gl_FragColor=vec4(val);}",T=new Float32Array([0,0,2,0,0,2]),C=null,L=!1,S={},E=new WeakMap;function J(H){if(!L&&!B(H))throw new Error("WebGL generation not supported")}function D(H,j,F,G,N,z,W){if(z===void 0&&(z=1),W===void 0&&(W=null),!W&&(W=C,!W)){var Q=typeof OffscreenCanvas=="function"?new OffscreenCanvas(1,1):typeof document<"u"?document.createElement("canvas"):null;if(!Q)throw new Error("OffscreenCanvas or DOM canvas not supported");W=C=Q.getContext("webgl",{depth:!1})}J(W);var U=new Uint8Array(H*j*4);u(W,function(le){var oe=le.gl,xe=le.withTexture,Ce=le.withTextureFramebuffer;xe("readable",function(Ae,Le){oe.texImage2D(oe.TEXTURE_2D,0,oe.RGBA,H,j,0,oe.RGBA,oe.UNSIGNED_BYTE,null),Ce(Ae,Le,function(Oe){I(H,j,F,G,N,z,oe,Oe,0,0,0),oe.readPixels(0,0,H,j,oe.RGBA,oe.UNSIGNED_BYTE,U)})})});for(var re=new Uint8Array(H*j),he=0,se=0;he<U.length;he+=4)re[se++]=U[he];return re}function P(H,j,F,G,N,z,W,Q,U,re){z===void 0&&(z=1),Q===void 0&&(Q=0),U===void 0&&(U=0),re===void 0&&(re=0),I(H,j,F,G,N,z,W,null,Q,U,re)}function I(H,j,F,G,N,z,W,Q,U,re,he){z===void 0&&(z=1),U===void 0&&(U=0),re===void 0&&(re=0),he===void 0&&(he=0),J(W);var se=[];r(F,function(le,oe,xe,Ce){se.push(le,oe,xe,Ce)}),se=new Float32Array(se),u(W,function(le){var oe=le.gl,xe=le.isWebGL2,Ce=le.getExtension,Ae=le.withProgram,Le=le.withTexture,Oe=le.withTextureFramebuffer,_e=le.handleContextLoss;if(Le("rawDistances",function(Me,ye){(H!==Me._lastWidth||j!==Me._lastHeight)&&oe.texImage2D(oe.TEXTURE_2D,0,oe.RGBA,Me._lastWidth=H,Me._lastHeight=j,0,oe.RGBA,oe.UNSIGNED_BYTE,null),Ae("main",y,x,function(ce){var w=ce.setAttribute,M=ce.setUniform,V=!xe&&Ce("ANGLE_instanced_arrays"),$=!xe&&Ce("EXT_blend_minmax");w("aUV",2,oe.STATIC_DRAW,0,T),w("aLineSegment",4,oe.DYNAMIC_DRAW,1,se),M.apply(void 0,["4f","uGlyphBounds"].concat(G)),M("1f","uMaxDistance",N),M("1f","uExponent",z),Oe(Me,ye,function(ue){oe.enable(oe.BLEND),oe.colorMask(!0,!0,!0,!0),oe.viewport(0,0,H,j),oe.scissor(0,0,H,j),oe.blendFunc(oe.ONE,oe.ONE),oe.blendEquationSeparate(oe.FUNC_ADD,xe?oe.MAX:$.MAX_EXT),oe.clear(oe.COLOR_BUFFER_BIT),xe?oe.drawArraysInstanced(oe.TRIANGLES,0,3,se.length/4):V.drawArraysInstancedANGLE(oe.TRIANGLES,0,3,se.length/4)})}),Ae("post",s,b,function(ce){ce.setAttribute("aUV",2,oe.STATIC_DRAW,0,T),ce.setUniform("1i","tex",ye),oe.bindFramebuffer(oe.FRAMEBUFFER,Q),oe.disable(oe.BLEND),oe.colorMask(he===0,he===1,he===2,he===3),oe.viewport(U,re,H,j),oe.scissor(U,re,H,j),oe.drawArrays(oe.TRIANGLES,0,3)})}),oe.isContextLost())throw _e(),new Error("webgl context lost")})}function B(H){var j=!H||H===C?S:H.canvas||H,F=E.get(j);if(F===void 0){L=!0;var G=null;try{var N=[97,106,97,61,99,137,118,80,80,118,137,99,61,97,106,97],z=D(4,4,"M8,8L16,8L24,24L16,24Z",[0,0,32,32],24,1,H);F=z&&N.length===z.length&&z.every(function(W,Q){return W===N[Q]}),F||(G="bad trial run results",console.info(N,z))}catch(W){F=!1,G=W.message}G&&console.warn("WebGL SDF generation not supported:",G),L=!1,E.set(j,F)}return F}var q=Object.freeze({__proto__:null,generate:D,generateIntoCanvas:P,generateIntoFramebuffer:I,isSupported:B});function ie(H,j,F,G,N,z){N===void 0&&(N=Math.max(G[2]-G[0],G[3]-G[1])/2),z===void 0&&(z=1);try{return D.apply(q,arguments)}catch(W){return console.info("WebGL SDF generation failed, falling back to JS",W),g.apply(v,arguments)}}function Z(H,j,F,G,N,z,W,Q,U,re){N===void 0&&(N=Math.max(G[2]-G[0],G[3]-G[1])/2),z===void 0&&(z=1),Q===void 0&&(Q=0),U===void 0&&(U=0),re===void 0&&(re=0);try{return P.apply(q,arguments)}catch(he){return console.info("WebGL SDF generation failed, falling back to JS",he),_.apply(v,arguments)}}return e.forEachPathCommand=i,e.generate=ie,e.generateIntoCanvas=Z,e.javascript=v,e.pathToLineSegments=r,e.webgl=q,e.webglUtils=p,Object.defineProperty(e,"__esModule",{value:!0}),e}({});return l}function G_(){var l=function(e){var t={R:"13k,1a,2,3,3,2+1j,ch+16,a+1,5+2,2+n,5,a,4,6+16,4+3,h+1b,4mo,179q,2+9,2+11,2i9+7y,2+68,4,3+4,5+13,4+3,2+4k,3+29,8+cf,1t+7z,w+17,3+3m,1t+3z,16o1+5r,8+30,8+mc,29+1r,29+4v,75+73",EN:"1c+9,3d+1,6,187+9,513,4+5,7+9,sf+j,175h+9,qw+q,161f+1d,4xt+a,25i+9",ES:"17,2,6dp+1,f+1,av,16vr,mx+1,4o,2",ET:"z+2,3h+3,b+1,ym,3e+1,2o,p4+1,8,6u,7c,g6,1wc,1n9+4,30+1b,2n,6d,qhx+1,h0m,a+1,49+2,63+1,4+1,6bb+3,12jj",AN:"16o+5,2j+9,2+1,35,ed,1ff2+9,87+u",CS:"18,2+1,b,2u,12k,55v,l,17v0,2,3,53,2+1,b",B:"a,3,f+2,2v,690",S:"9,2,k",WS:"c,k,4f4,1vk+a,u,1j,335",ON:"x+1,4+4,h+5,r+5,r+3,z,5+3,2+1,2+1,5,2+2,3+4,o,w,ci+1,8+d,3+d,6+8,2+g,39+1,9,6+1,2,33,b8,3+1,3c+1,7+1,5r,b,7h+3,sa+5,2,3i+6,jg+3,ur+9,2v,ij+1,9g+9,7+a,8m,4+1,49+x,14u,2+2,c+2,e+2,e+2,e+1,i+n,e+e,2+p,u+2,e+2,36+1,2+3,2+1,b,2+2,6+5,2,2,2,h+1,5+4,6+3,3+f,16+2,5+3l,3+81,1y+p,2+40,q+a,m+13,2r+ch,2+9e,75+hf,3+v,2+2w,6e+5,f+6,75+2a,1a+p,2+2g,d+5x,r+b,6+3,4+o,g,6+1,6+2,2k+1,4,2j,5h+z,1m+1,1e+f,t+2,1f+e,d+3,4o+3,2s+1,w,535+1r,h3l+1i,93+2,2s,b+1,3l+x,2v,4g+3,21+3,kz+1,g5v+1,5a,j+9,n+v,2,3,2+8,2+1,3+2,2,3,46+1,4+4,h+5,r+5,r+a,3h+2,4+6,b+4,78,1r+24,4+c,4,1hb,ey+6,103+j,16j+c,1ux+7,5+g,fsh,jdq+1t,4,57+2e,p1,1m,1m,1m,1m,4kt+1,7j+17,5+2r,d+e,3+e,2+e,2+10,m+4,w,1n+5,1q,4z+5,4b+rb,9+c,4+c,4+37,d+2g,8+b,l+b,5+1j,9+9,7+13,9+t,3+1,27+3c,2+29,2+3q,d+d,3+4,4+2,6+6,a+o,8+6,a+2,e+6,16+42,2+1i",BN:"0+8,6+d,2s+5,2+p,e,4m9,1kt+2,2b+5,5+5,17q9+v,7k,6p+8,6+1,119d+3,440+7,96s+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+75,6p+2rz,1ben+1,1ekf+1,1ekf+1",NSM:"lc+33,7o+6,7c+18,2,2+1,2+1,2,21+a,1d+k,h,2u+6,3+5,3+1,2+3,10,v+q,2k+a,1n+8,a,p+3,2+8,2+2,2+4,18+2,3c+e,2+v,1k,2,5+7,5,4+6,b+1,u,1n,5+3,9,l+1,r,3+1,1m,5+1,5+1,3+2,4,v+1,4,c+1,1m,5+4,2+1,5,l+1,n+5,2,1n,3,2+3,9,8+1,c+1,v,1q,d,1f,4,1m+2,6+2,2+3,8+1,c+1,u,1n,g+1,l+1,t+1,1m+1,5+3,9,l+1,u,21,8+2,2,2j,3+6,d+7,2r,3+8,c+5,23+1,s,2,2,1k+d,2+4,2+1,6+a,2+z,a,2v+3,2+5,2+1,3+1,q+1,5+2,h+3,e,3+1,7,g,jk+2,qb+2,u+2,u+1,v+1,1t+1,2+6,9,3+a,a,1a+2,3c+1,z,3b+2,5+1,a,7+2,64+1,3,1n,2+6,2,2,3+7,7+9,3,1d+g,1s+3,1d,2+4,2,6,15+8,d+1,x+3,3+1,2+2,1l,2+1,4,2+2,1n+7,3+1,49+2,2+c,2+6,5,7,4+1,5j+1l,2+4,k1+w,2db+2,3y,2p+v,ff+3,30+1,n9x+3,2+9,x+1,29+1,7l,4,5,q+1,6,48+1,r+h,e,13+7,q+a,1b+2,1d,3+3,3+1,14,1w+5,3+1,3+1,d,9,1c,1g,2+2,3+1,6+1,2,17+1,9,6n,3,5,fn5,ki+f,h+f,r2,6b,46+4,1af+2,2+1,6+3,15+2,5,4m+1,fy+3,as+1,4a+a,4x,1j+e,1l+2,1e+3,3+1,1y+2,11+4,2+7,1r,d+1,1h+8,b+3,3,2o+2,3,2+1,7,4h,4+7,m+1,1m+1,4,12+6,4+4,5g+7,3+2,2,o,2d+5,2,5+1,2+1,6n+3,7+1,2+1,s+1,2e+7,3,2+1,2z,2,3+5,2,2u+2,3+3,2+4,78+8,2+1,75+1,2,5,41+3,3+1,5,x+5,3+1,15+5,3+3,9,a+5,3+2,1b+c,2+1,bb+6,2+5,2d+l,3+6,2+1,2+1,3f+5,4,2+1,2+6,2,21+1,4,2,9o+1,f0c+4,1o+6,t5,1s+3,2a,f5l+1,43t+2,i+7,3+6,v+3,45+2,1j0+1i,5+1d,9,f,n+4,2+e,11t+6,2+g,3+6,2+1,2+4,7a+6,c6+3,15t+6,32+6,gzhy+6n",AL:"16w,3,2,e+1b,z+2,2+2s,g+1,8+1,b+m,2+t,s+2i,c+e,4h+f,1d+1e,1bwe+dp,3+3z,x+c,2+1,35+3y,2rm+z,5+7,b+5,dt+l,c+u,17nl+27,1t+27,4x+6n,3+d",LRO:"6ct",RLO:"6cu",LRE:"6cq",RLE:"6cr",PDF:"6cs",LRI:"6ee",RLI:"6ef",FSI:"6eg",PDI:"6eh"},n={},i={};n.L=1,i[1]="L",Object.keys(t).forEach(function(_e,Me){n[_e]=1<<Me+1,i[n[_e]]=_e}),Object.freeze(n);var r=n.LRI|n.RLI|n.FSI,s=n.L|n.R|n.AL,a=n.B|n.S|n.WS|n.ON|n.FSI|n.LRI|n.RLI|n.PDI,o=n.BN|n.RLE|n.LRE|n.RLO|n.LRO|n.PDF,c=n.S|n.WS|n.B|r|n.PDI|o,u=null;function h(){if(!u){u=new Map;var _e=function(ye){if(t.hasOwnProperty(ye)){var ce=0;t[ye].split(",").forEach(function(w){var M=w.split("+"),V=M[0],$=M[1];V=parseInt(V,36),$=$?parseInt($,36):0,u.set(ce+=V,n[ye]);for(var ue=0;ue<$;ue++)u.set(++ce,n[ye])})}};for(var Me in t)_e(Me)}}function d(_e){return h(),u.get(_e.codePointAt(0))||n.L}function p(_e){return i[d(_e)]}var g={pairs:"14>1,1e>2,u>2,2wt>1,1>1,1ge>1,1wp>1,1j>1,f>1,hm>1,1>1,u>1,u6>1,1>1,+5,28>1,w>1,1>1,+3,b8>1,1>1,+3,1>3,-1>-1,3>1,1>1,+2,1s>1,1>1,x>1,th>1,1>1,+2,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,4q>1,1e>2,u>2,2>1,+1",canonical:"6f1>-6dx,6dy>-6dx,6ec>-6ed,6ee>-6ed,6ww>2jj,-2ji>2jj,14r4>-1e7l,1e7m>-1e7l,1e7m>-1e5c,1e5d>-1e5b,1e5c>-14qx,14qy>-14qx,14vn>-1ecg,1ech>-1ecg,1edu>-1ecg,1eci>-1ecg,1eda>-1ecg,1eci>-1ecg,1eci>-168q,168r>-168q,168s>-14ye,14yf>-14ye"};function _(_e,Me){var ye=36,ce=0,w=new Map,M=Me&&new Map,V;return _e.split(",").forEach(function $(ue){if(ue.indexOf("+")!==-1)for(var me=+ue;me--;)$(V);else{V=ue;var R=ue.split(">"),ee=R[0],K=R[1];ee=String.fromCodePoint(ce+=parseInt(ee,ye)),K=String.fromCodePoint(ce+=parseInt(K,ye)),w.set(ee,K),Me&&M.set(K,ee)}}),{map:w,reverseMap:M}}var m,f,v;function y(){if(!m){var _e=_(g.pairs,!0),Me=_e.map,ye=_e.reverseMap;m=Me,f=ye,v=_(g.canonical,!1).map}}function x(_e){return y(),m.get(_e)||null}function b(_e){return y(),f.get(_e)||null}function T(_e){return y(),v.get(_e)||null}var C=n.L,L=n.R,S=n.EN,E=n.ES,J=n.ET,D=n.AN,P=n.CS,I=n.B,B=n.S,q=n.ON,ie=n.BN,Z=n.NSM,H=n.AL,j=n.LRO,F=n.RLO,G=n.LRE,N=n.RLE,z=n.PDF,W=n.LRI,Q=n.RLI,U=n.FSI,re=n.PDI;function he(_e,Me){for(var ye=125,ce=new Uint32Array(_e.length),w=0;w<_e.length;w++)ce[w]=d(_e[w]);var M=new Map;function V(Ct,nn){var Gt=ce[Ct];ce[Ct]=nn,M.set(Gt,M.get(Gt)-1),Gt&a&&M.set(a,M.get(a)-1),M.set(nn,(M.get(nn)||0)+1),nn&a&&M.set(a,(M.get(a)||0)+1)}for(var $=new Uint8Array(_e.length),ue=new Map,me=[],R=null,ee=0;ee<_e.length;ee++)R||me.push(R={start:ee,end:_e.length-1,level:Me==="rtl"?1:Me==="ltr"?0:Go(ee,!1)}),ce[ee]&I&&(R.end=ee,R=null);for(var K=N|G|F|j|r|re|z|I,ve=function(Ct){return Ct+(Ct&1?1:2)},fe=function(Ct){return Ct+(Ct&1?2:1)},be=0;be<me.length;be++){R=me[be];var de=[{_level:R.level,_override:0,_isolate:0}],pe=void 0,Se=0,Re=0,Ge=0;M.clear();for(var O=R.start;O<=R.end;O++){var te=ce[O];if(pe=de[de.length-1],M.set(te,(M.get(te)||0)+1),te&a&&M.set(a,(M.get(a)||0)+1),te&K)if(te&(N|G)){$[O]=pe._level;var ge=(te===N?fe:ve)(pe._level);ge<=ye&&!Se&&!Re?de.push({_level:ge,_override:0,_isolate:0}):Se||Re++}else if(te&(F|j)){$[O]=pe._level;var Te=(te===F?fe:ve)(pe._level);Te<=ye&&!Se&&!Re?de.push({_level:Te,_override:te&F?L:C,_isolate:0}):Se||Re++}else if(te&r){te&U&&(te=Go(O+1,!0)===1?Q:W),$[O]=pe._level,pe._override&&V(O,pe._override);var De=(te===Q?fe:ve)(pe._level);De<=ye&&Se===0&&Re===0?(Ge++,de.push({_level:De,_override:0,_isolate:1,_isolInitIndex:O})):Se++}else if(te&re){if(Se>0)Se--;else if(Ge>0){for(Re=0;!de[de.length-1]._isolate;)de.pop();var Ze=de[de.length-1]._isolInitIndex;Ze!=null&&(ue.set(Ze,O),ue.set(O,Ze)),de.pop(),Ge--}pe=de[de.length-1],$[O]=pe._level,pe._override&&V(O,pe._override)}else te&z?(Se===0&&(Re>0?Re--:!pe._isolate&&de.length>1&&(de.pop(),pe=de[de.length-1])),$[O]=pe._level):te&I&&($[O]=R.level);else $[O]=pe._level,pe._override&&te!==ie&&V(O,pe._override)}for(var Ye=[],it=null,tt=R.start;tt<=R.end;tt++){var ot=ce[tt];if(!(ot&o)){var Je=$[tt],Qe=ot&r,Tt=ot===re;it&&Je===it._level?(it._end=tt,it._endsWithIsolInit=Qe):Ye.push(it={_start:tt,_end:tt,_level:Je,_startsWithPDI:Tt,_endsWithIsolInit:Qe})}}for(var At=[],rt=0;rt<Ye.length;rt++){var pt=Ye[rt];if(!pt._startsWithPDI||pt._startsWithPDI&&!ue.has(pt._start)){for(var zt=[it=pt],A=void 0;it&&it._endsWithIsolInit&&(A=ue.get(it._end))!=null;)for(var X=rt+1;X<Ye.length;X++)if(Ye[X]._start===A){zt.push(it=Ye[X]);break}for(var ne=[],Y=0;Y<zt.length;Y++)for(var ae=zt[Y],Ie=ae._start;Ie<=ae._end;Ie++)ne.push(Ie);for(var Fe=$[ne[0]],Ne=R.level,ze=ne[0]-1;ze>=0;ze--)if(!(ce[ze]&o)){Ne=$[ze];break}var Ve=ne[ne.length-1],We=$[Ve],je=R.level;if(!(ce[Ve]&r)){for(var et=Ve+1;et<=R.end;et++)if(!(ce[et]&o)){je=$[et];break}}At.push({_seqIndices:ne,_sosType:Math.max(Ne,Fe)%2?L:C,_eosType:Math.max(je,We)%2?L:C})}}for(var mt=0;mt<At.length;mt++){var Ut=At[mt],Pe=Ut._seqIndices,ct=Ut._sosType,qe=Ut._eosType;if(M.get(Z))for(var Pn=0;Pn<Pe.length;Pn++){var ht=Pe[Pn];if(ce[ht]&Z){for(var en=ct,Wn=Pn-1;Wn>=0;Wn--)if(!(ce[Pe[Wn]]&o)){en=ce[Pe[Wn]];break}V(ht,en&(r|re)?q:en)}}if(M.get(S))for(var cn=0;cn<Pe.length;cn++){var ci=Pe[cn];if(ce[ci]&S)for(var dt=cn-1;dt>=-1;dt--){var un=dt===-1?ct:ce[Pe[dt]];if(un&s){un===H&&V(ci,D);break}}}if(M.get(H))for(var jn=0;jn<Pe.length;jn++){var Et=Pe[jn];ce[Et]&H&&V(Et,L)}if(M.get(E)||M.get(P))for(var xn=1;xn<Pe.length-1;xn++){var sr=Pe[xn];if(ce[sr]&(E|P)){for(var yn=0,Zs=0,Js=xn-1;Js>=0&&(yn=ce[Pe[Js]],!!(yn&o));Js--);for(var $s=xn+1;$s<Pe.length&&(Zs=ce[Pe[$s]],!!(Zs&o));$s++);yn===Zs&&(ce[sr]===E?yn===S:yn&(S|D))&&V(sr,yn)}}if(M.get(S))for(var ar=0;ar<Pe.length;ar++){var rh=Pe[ar];if(ce[rh]&S){for(var Yr=ar-1;Yr>=0&&ce[Pe[Yr]]&(J|o);Yr--)V(Pe[Yr],S);for(var qr=ar+1;qr<Pe.length&&ce[Pe[qr]]&(J|o);qr++)V(Pe[qr],S)}}if(M.get(J)||M.get(E)||M.get(P))for(var or=0;or<Pe.length;or++){var Ro=Pe[or];if(ce[Ro]&(J|E|P)){V(Ro,q);for(var Kr=or-1;Kr>=0&&ce[Pe[Kr]]&o;Kr--)V(Pe[Kr],q);for(var Zr=or+1;Zr<Pe.length&&ce[Pe[Zr]]&o;Zr++)V(Pe[Zr],q)}}if(M.get(S))for(var Qs=0,Po=ct;Qs<Pe.length;Qs++){var Do=Pe[Qs],ea=ce[Do];ea&S?Po===C&&V(Do,C):ea&s&&(Po=ea)}if(M.get(a)){var lr=L|S|D,Io=lr|C,Jr=[];{for(var ui=[],hi=0;hi<Pe.length;hi++)if(ce[Pe[hi]]&a){var cr=_e[Pe[hi]],Uo=void 0;if(x(cr)!==null)if(ui.length<63)ui.push({char:cr,seqIndex:hi});else break;else if((Uo=b(cr))!==null)for(var ur=ui.length-1;ur>=0;ur--){var ta=ui[ur].char;if(ta===Uo||ta===b(T(cr))||x(T(ta))===cr){Jr.push([ui[ur].seqIndex,hi]),ui.length=ur;break}}}Jr.sort(function(Ct,nn){return Ct[0]-nn[0]})}for(var na=0;na<Jr.length;na++){for(var Oo=Jr[na],hr=Oo[0],$r=Oo[1],Fo=!1,tn=0,ia=hr+1;ia<$r;ia++){var ra=Pe[ia];if(ce[ra]&Io){Fo=!0;var No=ce[ra]&lr?L:C;if(No===di(ra)){tn=No;break}}}if(Fo&&!tn){tn=ct;for(var sa=hr-1;sa>=0;sa--){var Qr=Pe[sa];if(ce[Qr]&Io){var ko=ce[Qr]&lr?L:C;ko!==di(Qr)?tn=ko:tn=di(Qr);break}}}if(tn){if(ce[Pe[hr]]=ce[Pe[$r]]=tn,tn!==di(Pe[hr])){for(var dr=hr+1;dr<Pe.length;dr++)if(!(ce[Pe[dr]]&o)){d(_e[Pe[dr]])&Z&&(ce[Pe[dr]]=tn);break}}if(tn!==di(Pe[$r])){for(var fr=$r+1;fr<Pe.length;fr++)if(!(ce[Pe[fr]]&o)){d(_e[Pe[fr]])&Z&&(ce[Pe[fr]]=tn);break}}}}for(var Dn=0;Dn<Pe.length;Dn++)if(ce[Pe[Dn]]&a){for(var Bo=Dn,aa=Dn,oa=ct,pr=Dn-1;pr>=0;pr--)if(ce[Pe[pr]]&o)Bo=pr;else{oa=ce[Pe[pr]]&lr?L:C;break}for(var zo=qe,mr=Dn+1;mr<Pe.length;mr++)if(ce[Pe[mr]]&(a|o))aa=mr;else{zo=ce[Pe[mr]]&lr?L:C;break}for(var es=Bo;es<=aa;es++)ce[Pe[es]]=oa===zo?oa:di(Pe[es]);Dn=aa}}}for(var Vt=R.start;Vt<=R.end;Vt++){var sh=$[Vt],ts=ce[Vt];if(sh&1?ts&(C|S|D)&&$[Vt]++:ts&L?$[Vt]++:ts&(D|S)&&($[Vt]+=2),ts&o&&($[Vt]=Vt===0?R.level:$[Vt-1]),Vt===R.end||d(_e[Vt])&(B|I))for(var ns=Vt;ns>=0&&d(_e[ns])&c;ns--)$[ns]=R.level}}return{levels:$,paragraphs:me};function Go(Ct,nn){for(var Gt=Ct;Gt<_e.length;Gt++){var In=ce[Gt];if(In&(L|H))return 1;if(In&(I|C)||nn&&In===re)return 0;if(In&r){var Vo=ah(Gt);Gt=Vo===-1?_e.length:Vo}}return 0}function ah(Ct){for(var nn=1,Gt=Ct+1;Gt<_e.length;Gt++){var In=ce[Gt];if(In&I)break;if(In&re){if(--nn===0)return Gt}else In&r&&nn++}return-1}function di(Ct){return $[Ct]&1?L:C}}var se="14>1,j>2,t>2,u>2,1a>g,2v3>1,1>1,1ge>1,1wd>1,b>1,1j>1,f>1,ai>3,-2>3,+1,8>1k0,-1jq>1y7,-1y6>1hf,-1he>1h6,-1h5>1ha,-1h8>1qi,-1pu>1,6>3u,-3s>7,6>1,1>1,f>1,1>1,+2,3>1,1>1,+13,4>1,1>1,6>1eo,-1ee>1,3>1mg,-1me>1mk,-1mj>1mi,-1mg>1mi,-1md>1,1>1,+2,1>10k,-103>1,1>1,4>1,5>1,1>1,+10,3>1,1>8,-7>8,+1,-6>7,+1,a>1,1>1,u>1,u6>1,1>1,+5,26>1,1>1,2>1,2>2,8>1,7>1,4>1,1>1,+5,b8>1,1>1,+3,1>3,-2>1,2>1,1>1,+2,c>1,3>1,1>1,+2,h>1,3>1,a>1,1>1,2>1,3>1,1>1,d>1,f>1,3>1,1a>1,1>1,6>1,7>1,13>1,k>1,1>1,+19,4>1,1>1,+2,2>1,1>1,+18,m>1,a>1,1>1,lk>1,1>1,4>1,2>1,f>1,3>1,1>1,+3,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,6>1,4j>1,j>2,t>2,u>2,2>1,+1",le;function oe(){if(!le){var _e=_(se,!0),Me=_e.map,ye=_e.reverseMap;ye.forEach(function(ce,w){Me.set(w,ce)}),le=Me}}function xe(_e){return oe(),le.get(_e)||null}function Ce(_e,Me,ye,ce){var w=_e.length;ye=Math.max(0,ye==null?0:+ye),ce=Math.min(w-1,ce==null?w-1:+ce);for(var M=new Map,V=ye;V<=ce;V++)if(Me[V]&1){var $=xe(_e[V]);$!==null&&M.set(V,$)}return M}function Ae(_e,Me,ye,ce){var w=_e.length;ye=Math.max(0,ye==null?0:+ye),ce=Math.min(w-1,ce==null?w-1:+ce);var M=[];return Me.paragraphs.forEach(function(V){var $=Math.max(ye,V.start),ue=Math.min(ce,V.end);if($<ue){for(var me=Me.levels.slice($,ue+1),R=ue;R>=$&&d(_e[R])&c;R--)me[R]=V.level;for(var ee=V.level,K=1/0,ve=0;ve<me.length;ve++){var fe=me[ve];fe>ee&&(ee=fe),fe<K&&(K=fe|1)}for(var be=ee;be>=K;be--)for(var de=0;de<me.length;de++)if(me[de]>=be){for(var pe=de;de+1<me.length&&me[de+1]>=be;)de++;de>pe&&M.push([pe+ye,de+ye])}}}),M}function Le(_e,Me,ye,ce){var w=Oe(_e,Me,ye,ce),M=[].concat(_e);return w.forEach(function(V,$){M[$]=(Me.levels[V]&1?xe(_e[V]):null)||_e[V]}),M.join("")}function Oe(_e,Me,ye,ce){for(var w=Ae(_e,Me,ye,ce),M=[],V=0;V<_e.length;V++)M[V]=V;return w.forEach(function($){for(var ue=$[0],me=$[1],R=M.slice(ue,me+1),ee=R.length;ee--;)M[me-ee]=R[ee]}),M}return e.closingToOpeningBracket=b,e.getBidiCharType=d,e.getBidiCharTypeName=p,e.getCanonicalBracket=T,e.getEmbeddingLevels=he,e.getMirroredCharacter=xe,e.getMirroredCharactersMap=Ce,e.getReorderSegments=Ae,e.getReorderedIndices=Oe,e.getReorderedString=Le,e.openingToClosingBracket=x,Object.defineProperty(e,"__esModule",{value:!0}),e}({});return l}const Ju=/\bvoid\s+main\s*\(\s*\)\s*{/g;function co(l){const e=/^[ \t]*#include +<([\w\d./]+)>/gm;function t(n,i){let r=He[i];return r?co(r):n}return l.replace(e,t)}const Mt=[];for(let l=0;l<256;l++)Mt[l]=(l<16?"0":"")+l.toString(16);function V_(){const l=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Mt[l&255]+Mt[l>>8&255]+Mt[l>>16&255]+Mt[l>>24&255]+"-"+Mt[e&255]+Mt[e>>8&255]+"-"+Mt[e>>16&15|64]+Mt[e>>24&255]+"-"+Mt[t&63|128]+Mt[t>>8&255]+"-"+Mt[t>>16&255]+Mt[t>>24&255]+Mt[n&255]+Mt[n>>8&255]+Mt[n>>16&255]+Mt[n>>24&255]).toUpperCase()}const Kn=Object.assign||function(){let l=arguments[0];for(let e=1,t=arguments.length;e<t;e++){let n=arguments[e];if(n)for(let i in n)n.hasOwnProperty(i)&&(l[i]=n[i])}return l},H_=Date.now(),Oc=new WeakMap,Fc=new Map;let W_=1e10;function uo(l,e){const t=q_(e);let n=Oc.get(l);if(n||Oc.set(l,n=Object.create(null)),n[t])return new n[t];const i=`_onBeforeCompile${t}`,r=function(c){l.onBeforeCompile.call(this,c);const u=this.customProgramCacheKey()+"|"+c.vertexShader+"|"+c.fragmentShader;let h=Fc[u];if(!h){const d=j_(c,e,t);h=Fc[u]=d}c.vertexShader=h.vertexShader,c.fragmentShader=h.fragmentShader,Kn(c.uniforms,this.uniforms),e.timeUniform&&(c.uniforms[e.timeUniform]={get value(){return Date.now()-H_}}),this[i]&&this[i](c)},s=function(){return a(e.chained?l:l.clone())},a=function(c){const u=Object.create(c,o);return Object.defineProperty(u,"baseMaterial",{value:l}),Object.defineProperty(u,"id",{value:W_++}),u.uuid=V_(),u.uniforms=Kn({},c.uniforms,e.uniforms),u.defines=Kn({},c.defines,e.defines),u.defines[`TROIKA_DERIVED_MATERIAL_${t}`]="",u.extensions=Kn({},c.extensions,e.extensions),u._listeners=void 0,u},o={constructor:{value:s},isDerivedMaterial:{value:!0},customProgramCacheKey:{writable:!0,configurable:!0,value:function(){return l.customProgramCacheKey()+"|"+t}},onBeforeCompile:{get(){return r},set(c){this[i]=c}},copy:{writable:!0,configurable:!0,value:function(c){return l.copy.call(this,c),!l.isShaderMaterial&&!l.isDerivedMaterial&&(Kn(this.extensions,c.extensions),Kn(this.defines,c.defines),Kn(this.uniforms,Su.clone(c.uniforms))),this}},clone:{writable:!0,configurable:!0,value:function(){const c=new l.constructor;return a(c).copy(this)}},getDepthMaterial:{writable:!0,configurable:!0,value:function(){let c=this._depthMaterial;return c||(c=this._depthMaterial=uo(l.isDerivedMaterial?l.getDepthMaterial():new Pu({depthPacking:uu}),e),c.defines.IS_DEPTH_MATERIAL="",c.uniforms=this.uniforms),c}},getDistanceMaterial:{writable:!0,configurable:!0,value:function(){let c=this._distanceMaterial;return c||(c=this._distanceMaterial=uo(l.isDerivedMaterial?l.getDistanceMaterial():new Du,e),c.defines.IS_DISTANCE_MATERIAL="",c.uniforms=this.uniforms),c}},dispose:{writable:!0,configurable:!0,value(){const{_depthMaterial:c,_distanceMaterial:u}=this;c&&c.dispose(),u&&u.dispose(),l.dispose.call(this)}}};return n[t]=s,new s}function j_({vertexShader:l,fragmentShader:e},t,n){let{vertexDefs:i,vertexMainIntro:r,vertexMainOutro:s,vertexTransform:a,fragmentDefs:o,fragmentMainIntro:c,fragmentMainOutro:u,fragmentColorTransform:h,customRewriter:d,timeUniform:p}=t;if(i=i||"",r=r||"",s=s||"",o=o||"",c=c||"",u=u||"",(a||d)&&(l=co(l)),(h||d)&&(e=e.replace(/^[ \t]*#include <((?:tonemapping|encodings|fog|premultiplied_alpha|dithering)_fragment)>/gm,`
//!BEGIN_POST_CHUNK $1
$&
//!END_POST_CHUNK
`),e=co(e)),d){let g=d({vertexShader:l,fragmentShader:e});l=g.vertexShader,e=g.fragmentShader}if(h){let g=[];e=e.replace(/^\/\/!BEGIN_POST_CHUNK[^]+?^\/\/!END_POST_CHUNK/gm,_=>(g.push(_),"")),u=`${h}
${g.join(`
`)}
${u}`}if(p){const g=`
uniform float ${p};
`;i=g+i,o=g+o}return a&&(l=`vec3 troika_position_${n};
vec3 troika_normal_${n};
vec2 troika_uv_${n};
${l}
`,i=`${i}
void troikaVertexTransform${n}(inout vec3 position, inout vec3 normal, inout vec2 uv) {
  ${a}
}
`,r=`
troika_position_${n} = vec3(position);
troika_normal_${n} = vec3(normal);
troika_uv_${n} = vec2(uv);
troikaVertexTransform${n}(troika_position_${n}, troika_normal_${n}, troika_uv_${n});
${r}
`,l=l.replace(/\b(position|normal|uv)\b/g,(g,_,m,f)=>/\battribute\s+vec[23]\s+$/.test(f.substr(0,m))?_:`troika_${_}_${n}`)),l=Nc(l,n,i,r,s),e=Nc(e,n,o,c,u),{vertexShader:l,fragmentShader:e}}function Nc(l,e,t,n,i){return(n||i||t)&&(l=l.replace(Ju,`
${t}
void troikaOrigMain${e}() {`),l+=`
void main() {
  ${n}
  troikaOrigMain${e}();
  ${i}
}`),l}function X_(l,e){return l==="uniforms"?void 0:typeof e=="function"?e.toString():e}let Y_=0;const kc=new Map;function q_(l){const e=JSON.stringify(l,X_);let t=kc.get(e);return t==null&&kc.set(e,t=++Y_),t}function K_(l,e,t){const{defaultFontURL:n}=t,i=Object.create(null),r=1/0,s=/[\u00AD\u034F\u061C\u115F-\u1160\u17B4-\u17B5\u180B-\u180E\u200B-\u200F\u202A-\u202E\u2060-\u206F\u3164\uFE00-\uFE0F\uFEFF\uFFA0\uFFF0-\uFFF8]/,a="[^\\S\\u00A0]",o=new RegExp(`${a}|[\\-\\u007C\\u00AD\\u2010\\u2012-\\u2014\\u2027\\u2056\\u2E17\\u2E40]`);function c(v,y){function x(){const b=T=>{console.error(`Failure loading font ${v}${v===n?"":"; trying fallback"}`,T),v!==n&&(v=n,x())};try{const T=new XMLHttpRequest;T.open("get",v,!0),T.responseType="arraybuffer",T.onload=function(){if(T.status>=400)b(new Error(T.statusText));else if(T.status>0)try{const C=l(T.response);y(C)}catch(C){b(C)}},T.onerror=b,T.send()}catch(T){b(T)}}x()}function u(v,y){v||(v=n);let x=i[v];x?x.pending?x.pending.push(y):y(x):(i[v]={pending:[y]},c(v,b=>{let T=i[v].pending;i[v]=b,T.forEach(C=>C(b))}))}function h({text:v="",font:y=n,sdfGlyphSize:x=64,fontSize:b=1,letterSpacing:T=0,lineHeight:C="normal",maxWidth:L=r,direction:S,textAlign:E="left",textIndent:J=0,whiteSpace:D="normal",overflowWrap:P="normal",anchorX:I=0,anchorY:B=0,includeCaretPositions:q=!1,chunkedBoundsSize:ie=8192,colorRanges:Z=null},H,j=!1){const F=_(),G={fontLoad:0,typesetting:0};v.indexOf("\r")>-1&&(console.info("Typesetter: got text with \\r chars; normalizing to \\n"),v=v.replace(/\r\n/g,`
`).replace(/\r/g,`
`)),b=+b,T=+T,L=+L,C=C||"normal",J=+J,u(y,N=>{const z=isFinite(L);let W=null,Q=null,U=null,re=null,he=null,se=null,le=null,oe=0,xe=0,Ce=D!=="nowrap";const{ascender:Ae,descender:Le,unitsPerEm:Oe,lineGap:_e,capHeight:Me,xHeight:ye}=N;G.fontLoad=_()-F;const ce=_(),w=b/Oe;C==="normal"&&(C=(Ae-Le+_e)/Oe),C=C*b;const M=(C-(Ae-Le)*w)/2,V=-(Ae*w+M),$=Math.min(C,(Ae-Le)*w),ue=(Ae+Le)/2*w-$/2;let me=J,R=new m;const ee=[R];N.forEachGlyph(v,b,T,(fe,be,de)=>{const pe=v.charAt(de),Se=fe.advanceWidth*w,Re=R.count;let Ge;if("isEmpty"in fe||(fe.isWhitespace=!!pe&&new RegExp(a).test(pe),fe.canBreakAfter=!!pe&&o.test(pe),fe.isEmpty=fe.xMin===fe.xMax||fe.yMin===fe.yMax||s.test(pe)),!fe.isWhitespace&&!fe.isEmpty&&xe++,Ce&&z&&!fe.isWhitespace&&be+Se+me>L&&Re){if(R.glyphAt(Re-1).glyphObj.canBreakAfter)Ge=new m,me=-be;else for(let te=Re;te--;)if(te===0&&P==="break-word"){Ge=new m,me=-be;break}else if(R.glyphAt(te).glyphObj.canBreakAfter){Ge=R.splitAt(te+1);const ge=Ge.glyphAt(0).x;me-=ge;for(let Te=Ge.count;Te--;)Ge.glyphAt(Te).x-=ge;break}Ge&&(R.isSoftWrapped=!0,R=Ge,ee.push(R),oe=L)}let O=R.glyphAt(R.count);O.glyphObj=fe,O.x=be+me,O.width=Se,O.charIndex=de,pe===`
`&&(R=new m,ee.push(R),me=-(be+Se+T*b)+J)}),ee.forEach(fe=>{for(let be=fe.count;be--;){let{glyphObj:de,x:pe,width:Se}=fe.glyphAt(be);if(!de.isWhitespace){fe.width=pe+Se,fe.width>oe&&(oe=fe.width);return}}});let K=0,ve=0;if(I&&(typeof I=="number"?K=-I:typeof I=="string"&&(K=-oe*(I==="left"?0:I==="center"?.5:I==="right"?1:p(I)))),B){if(typeof B=="number")ve=-B;else if(typeof B=="string"){let fe=ee.length*C;ve=B==="top"?0:B==="top-baseline"?-V:B==="top-cap"?-V-Me*w:B==="top-ex"?-V-ye*w:B==="middle"?fe/2:B==="bottom"?fe:B==="bottom-baseline"?fe-M+Le*w:p(B)*fe}}if(!j){const fe=e.getEmbeddingLevels(v,S);W=new Uint16Array(xe),Q=new Float32Array(xe*2),U={},se=[r,r,-r,-r],le=[];let be=V;q&&(he=new Float32Array(v.length*3)),Z&&(re=new Uint8Array(xe*3));let de=0,pe=-1,Se=-1,Re,Ge;if(ee.forEach((O,te)=>{let{count:ge,width:Te}=O;if(ge>0){let De=0;for(let Je=ge;Je--&&O.glyphAt(Je).glyphObj.isWhitespace;)De++;let Ze=0,Ye=0;if(E==="center")Ze=(oe-Te)/2;else if(E==="right")Ze=oe-Te;else if(E==="justify"&&O.isSoftWrapped){let Je=0;for(let Qe=ge-De;Qe--;)O.glyphAt(Qe).glyphObj.isWhitespace&&Je++;Ye=(oe-Te)/Je}if(Ye||Ze){let Je=0;for(let Qe=0;Qe<ge;Qe++){let Tt=O.glyphAt(Qe);const At=Tt.glyphObj;Tt.x+=Ze+Je,Ye!==0&&At.isWhitespace&&Qe<ge-De&&(Je+=Ye,Tt.width+=Ye)}}const it=e.getReorderSegments(v,fe,O.glyphAt(0).charIndex,O.glyphAt(O.count-1).charIndex);for(let Je=0;Je<it.length;Je++){const[Qe,Tt]=it[Je];let At=1/0,rt=-1/0;for(let pt=0;pt<ge;pt++)if(O.glyphAt(pt).charIndex>=Qe){let zt=pt,A=pt;for(;A<ge;A++){let X=O.glyphAt(A);if(X.charIndex>Tt)break;A<ge-De&&(At=Math.min(At,X.x),rt=Math.max(rt,X.x+X.width))}for(let X=zt;X<A;X++){const ne=O.glyphAt(X);ne.x=rt-(ne.x+ne.width-At)}break}}let tt;const ot=Je=>tt=Je;for(let Je=0;Je<ge;Je++){let Qe=O.glyphAt(Je);tt=Qe.glyphObj;const Tt=tt.index,At=fe.levels[Qe.charIndex]&1;if(At){const rt=e.getMirroredCharacter(v[Qe.charIndex]);rt&&N.forEachGlyph(rt,0,0,ot)}if(q){const{charIndex:rt}=Qe,pt=Qe.x+K,zt=Qe.x+Qe.width+K;he[rt*3]=At?zt:pt,he[rt*3+1]=At?pt:zt,he[rt*3+2]=be+ue+ve;const A=rt-pe;A>1&&g(he,pe,A),pe=rt}if(Z){const{charIndex:rt}=Qe;for(;rt>Se;)Se++,Z.hasOwnProperty(Se)&&(Ge=Z[Se])}if(!tt.isWhitespace&&!tt.isEmpty){const rt=de++;U[Tt]||(U[Tt]={path:tt.path,pathBounds:[tt.xMin,tt.yMin,tt.xMax,tt.yMax]});const pt=Qe.x+K,zt=be+ve;Q[rt*2]=pt,Q[rt*2+1]=zt;const A=pt+tt.xMin*w,X=zt+tt.yMin*w,ne=pt+tt.xMax*w,Y=zt+tt.yMax*w;A<se[0]&&(se[0]=A),X<se[1]&&(se[1]=X),ne>se[2]&&(se[2]=ne),Y>se[3]&&(se[3]=Y),rt%ie===0&&(Re={start:rt,end:rt,rect:[r,r,-r,-r]},le.push(Re)),Re.end++;const ae=Re.rect;if(A<ae[0]&&(ae[0]=A),X<ae[1]&&(ae[1]=X),ne>ae[2]&&(ae[2]=ne),Y>ae[3]&&(ae[3]=Y),W[rt]=Tt,Z){const Ie=rt*3;re[Ie]=Ge>>16&255,re[Ie+1]=Ge>>8&255,re[Ie+2]=Ge&255}}}}be-=C}),he){const O=v.length-pe;O>1&&g(he,pe,O)}}G.typesetting=_()-ce,H({glyphIds:W,glyphPositions:Q,glyphData:U,caretPositions:he,caretHeight:$,glyphColors:re,chunkedBounds:le,fontSize:b,unitsPerEm:Oe,ascender:Ae*w,descender:Le*w,capHeight:Me*w,xHeight:ye*w,lineHeight:C,topBaseline:V,blockBounds:[K,ve-ee.length*C,K+oe,ve],visibleBounds:se,timings:G})})}function d(v,y){h(v,x=>{const[b,T,C,L]=x.blockBounds;y({width:C-b,height:L-T})},{metricsOnly:!0})}function p(v){let y=v.match(/^([\d.]+)%$/),x=y?parseFloat(y[1]):NaN;return isNaN(x)?0:x/100}function g(v,y,x){const b=v[y*3],T=v[y*3+1],C=v[y*3+2],L=(T-b)/x;for(let S=0;S<x;S++){const E=(y+S)*3;v[E]=b+L*S,v[E+1]=b+L*(S+1),v[E+2]=C}}function _(){return(self.performance||Date).now()}function m(){this.data=[]}const f=["glyphObj","x","width","charIndex"];return m.prototype={width:0,isSoftWrapped:!1,get count(){return Math.ceil(this.data.length/f.length)},glyphAt(v){let y=m.flyweight;return y.data=this.data,y.index=v,y},splitAt(v){let y=new m;return y.data=this.data.splice(v*f.length),y}},m.flyweight=f.reduce((v,y,x,b)=>(Object.defineProperty(v,y,{get(){return this.data[this.index*f.length+x]},set(T){this.data[this.index*f.length+x]=T}}),v),{data:null,index:0}),{typeset:h,measure:d,loadFont:u}}const ti=()=>(self.performance||Date).now(),Ks=Zu();let Bc;function Z_(l,e,t,n,i,r,s,a,o,c,u=!0){return u?$_(l,e,t,n,i,r,s,a,o,c).then(null,h=>(Bc||(console.warn("WebGL SDF generation failed, falling back to JS",h),Bc=!0),Gc(l,e,t,n,i,r,s,a,o,c))):Gc(l,e,t,n,i,r,s,a,o,c)}const Bs=[],J_=5;let ho=0;function $u(){const l=ti();for(;Bs.length&&ti()-l<J_;)Bs.shift()();ho=Bs.length?setTimeout($u,0):0}const $_=(...l)=>new Promise((e,t)=>{Bs.push(()=>{const n=ti();try{Ks.webgl.generateIntoCanvas(...l),e({timing:ti()-n})}catch(i){t(i)}}),ho||(ho=setTimeout($u,0))}),Q_=4,ev=2e3,zc={};let tv=0;function Gc(l,e,t,n,i,r,s,a,o,c){const u="TroikaTextSDFGenerator_JS_"+tv++%Q_;let h=zc[u];return h||(h=zc[u]={workerModule:Xr({name:u,workerId:u,dependencies:[Zu,ti],init(d,p){const g=d().javascript.generate;return function(..._){const m=p();return{textureData:g(..._),timing:p()-m}}},getTransferables(d){return[d.textureData.buffer]}}),requests:0,idleTimer:null}),h.requests++,clearTimeout(h.idleTimer),h.workerModule(l,e,t,n,i,r).then(({textureData:d,timing:p})=>{const g=ti(),_=new Uint8Array(d.length*4);for(let m=0;m<d.length;m++)_[m*4+c]=d[m];return Ks.webglUtils.renderImageData(s,_,a,o,l,e,1<<3-c),p+=ti()-g,--h.requests===0&&(h.idleTimer=setTimeout(()=>{B_(u)},ev)),{timing:p}})}function nv(l){l._warm||(Ks.webgl.isSupported(l),l._warm=!0)}const iv=Ks.webglUtils.resizeWebGLCanvasWithoutClearing;/*!
Custom build of Typr.ts (https://github.com/fredli74/Typr.ts) for use in Troika text rendering.
Original MIT license applies: https://github.com/fredli74/Typr.ts/blob/master/LICENSE
*/function rv(){return typeof window>"u"&&(self.window=self),function(l){var e={parse:function(i){var r=e._bin,s=new Uint8Array(i);if(r.readASCII(s,0,4)=="ttcf"){var a=4;r.readUshort(s,a),a+=2,r.readUshort(s,a),a+=2;var o=r.readUint(s,a);a+=4;for(var c=[],u=0;u<o;u++){var h=r.readUint(s,a);a+=4,c.push(e._readFont(s,h))}return c}return[e._readFont(s,0)]},_readFont:function(i,r){var s=e._bin,a=r;s.readFixed(i,r),r+=4;var o=s.readUshort(i,r);r+=2,s.readUshort(i,r),r+=2,s.readUshort(i,r),r+=2,s.readUshort(i,r),r+=2;for(var c=["cmap","head","hhea","maxp","hmtx","name","OS/2","post","loca","glyf","kern","CFF ","GPOS","GSUB","SVG "],u={_data:i,_offset:a},h={},d=0;d<o;d++){var p=s.readASCII(i,r,4);r+=4,s.readUint(i,r),r+=4;var g=s.readUint(i,r);r+=4;var _=s.readUint(i,r);r+=4,h[p]={offset:g,length:_}}for(d=0;d<c.length;d++){var m=c[d];h[m]&&(u[m.trim()]=e[m.trim()].parse(i,h[m].offset,h[m].length,u))}return u},_tabOffset:function(i,r,s){for(var a=e._bin,o=a.readUshort(i,s+4),c=s+12,u=0;u<o;u++){var h=a.readASCII(i,c,4);c+=4,a.readUint(i,c),c+=4;var d=a.readUint(i,c);if(c+=4,a.readUint(i,c),c+=4,h==r)return d}return 0}};e._bin={readFixed:function(i,r){return(i[r]<<8|i[r+1])+(i[r+2]<<8|i[r+3])/65540},readF2dot14:function(i,r){return e._bin.readShort(i,r)/16384},readInt:function(i,r){return e._bin._view(i).getInt32(r)},readInt8:function(i,r){return e._bin._view(i).getInt8(r)},readShort:function(i,r){return e._bin._view(i).getInt16(r)},readUshort:function(i,r){return e._bin._view(i).getUint16(r)},readUshorts:function(i,r,s){for(var a=[],o=0;o<s;o++)a.push(e._bin.readUshort(i,r+2*o));return a},readUint:function(i,r){return e._bin._view(i).getUint32(r)},readUint64:function(i,r){return 4294967296*e._bin.readUint(i,r)+e._bin.readUint(i,r+4)},readASCII:function(i,r,s){for(var a="",o=0;o<s;o++)a+=String.fromCharCode(i[r+o]);return a},readUnicode:function(i,r,s){for(var a="",o=0;o<s;o++){var c=i[r++]<<8|i[r++];a+=String.fromCharCode(c)}return a},_tdec:typeof window<"u"&&window.TextDecoder?new window.TextDecoder:null,readUTF8:function(i,r,s){var a=e._bin._tdec;return a&&r==0&&s==i.length?a.decode(i):e._bin.readASCII(i,r,s)},readBytes:function(i,r,s){for(var a=[],o=0;o<s;o++)a.push(i[r+o]);return a},readASCIIArray:function(i,r,s){for(var a=[],o=0;o<s;o++)a.push(String.fromCharCode(i[r+o]));return a},_view:function(i){return i._dataView||(i._dataView=i.buffer?new DataView(i.buffer,i.byteOffset,i.byteLength):new DataView(new Uint8Array(i).buffer))}},e._lctf={},e._lctf.parse=function(i,r,s,a,o){var c=e._bin,u={},h=r;c.readFixed(i,r),r+=4;var d=c.readUshort(i,r);r+=2;var p=c.readUshort(i,r);r+=2;var g=c.readUshort(i,r);return r+=2,u.scriptList=e._lctf.readScriptList(i,h+d),u.featureList=e._lctf.readFeatureList(i,h+p),u.lookupList=e._lctf.readLookupList(i,h+g,o),u},e._lctf.readLookupList=function(i,r,s){var a=e._bin,o=r,c=[],u=a.readUshort(i,r);r+=2;for(var h=0;h<u;h++){var d=a.readUshort(i,r);r+=2;var p=e._lctf.readLookupTable(i,o+d,s);c.push(p)}return c},e._lctf.readLookupTable=function(i,r,s){var a=e._bin,o=r,c={tabs:[]};c.ltype=a.readUshort(i,r),r+=2,c.flag=a.readUshort(i,r),r+=2;var u=a.readUshort(i,r);r+=2;for(var h=c.ltype,d=0;d<u;d++){var p=a.readUshort(i,r);r+=2;var g=s(i,h,o+p,c);c.tabs.push(g)}return c},e._lctf.numOfOnes=function(i){for(var r=0,s=0;s<32;s++)i>>>s&1&&r++;return r},e._lctf.readClassDef=function(i,r){var s=e._bin,a=[],o=s.readUshort(i,r);if(r+=2,o==1){var c=s.readUshort(i,r);r+=2;var u=s.readUshort(i,r);r+=2;for(var h=0;h<u;h++)a.push(c+h),a.push(c+h),a.push(s.readUshort(i,r)),r+=2}if(o==2){var d=s.readUshort(i,r);for(r+=2,h=0;h<d;h++)a.push(s.readUshort(i,r)),r+=2,a.push(s.readUshort(i,r)),r+=2,a.push(s.readUshort(i,r)),r+=2}return a},e._lctf.getInterval=function(i,r){for(var s=0;s<i.length;s+=3){var a=i[s],o=i[s+1];if(i[s+2],a<=r&&r<=o)return s}return-1},e._lctf.readCoverage=function(i,r){var s=e._bin,a={};a.fmt=s.readUshort(i,r),r+=2;var o=s.readUshort(i,r);return r+=2,a.fmt==1&&(a.tab=s.readUshorts(i,r,o)),a.fmt==2&&(a.tab=s.readUshorts(i,r,3*o)),a},e._lctf.coverageIndex=function(i,r){var s=i.tab;if(i.fmt==1)return s.indexOf(r);if(i.fmt==2){var a=e._lctf.getInterval(s,r);if(a!=-1)return s[a+2]+(r-s[a])}return-1},e._lctf.readFeatureList=function(i,r){var s=e._bin,a=r,o=[],c=s.readUshort(i,r);r+=2;for(var u=0;u<c;u++){var h=s.readASCII(i,r,4);r+=4;var d=s.readUshort(i,r);r+=2;var p=e._lctf.readFeatureTable(i,a+d);p.tag=h.trim(),o.push(p)}return o},e._lctf.readFeatureTable=function(i,r){var s=e._bin,a=r,o={},c=s.readUshort(i,r);r+=2,c>0&&(o.featureParams=a+c);var u=s.readUshort(i,r);r+=2,o.tab=[];for(var h=0;h<u;h++)o.tab.push(s.readUshort(i,r+2*h));return o},e._lctf.readScriptList=function(i,r){var s=e._bin,a=r,o={},c=s.readUshort(i,r);r+=2;for(var u=0;u<c;u++){var h=s.readASCII(i,r,4);r+=4;var d=s.readUshort(i,r);r+=2,o[h.trim()]=e._lctf.readScriptTable(i,a+d)}return o},e._lctf.readScriptTable=function(i,r){var s=e._bin,a=r,o={},c=s.readUshort(i,r);r+=2,o.default=e._lctf.readLangSysTable(i,a+c);var u=s.readUshort(i,r);r+=2;for(var h=0;h<u;h++){var d=s.readASCII(i,r,4);r+=4;var p=s.readUshort(i,r);r+=2,o[d.trim()]=e._lctf.readLangSysTable(i,a+p)}return o},e._lctf.readLangSysTable=function(i,r){var s=e._bin,a={};s.readUshort(i,r),r+=2,a.reqFeature=s.readUshort(i,r),r+=2;var o=s.readUshort(i,r);return r+=2,a.features=s.readUshorts(i,r,o),a},e.CFF={},e.CFF.parse=function(i,r,s){var a=e._bin;(i=new Uint8Array(i.buffer,r,s))[r=0],i[++r],i[++r],i[++r],r++;var o=[];r=e.CFF.readIndex(i,r,o);for(var c=[],u=0;u<o.length-1;u++)c.push(a.readASCII(i,r+o[u],o[u+1]-o[u]));r+=o[o.length-1];var h=[];r=e.CFF.readIndex(i,r,h);var d=[];for(u=0;u<h.length-1;u++)d.push(e.CFF.readDict(i,r+h[u],r+h[u+1]));r+=h[h.length-1];var p=d[0],g=[];r=e.CFF.readIndex(i,r,g);var _=[];for(u=0;u<g.length-1;u++)_.push(a.readASCII(i,r+g[u],g[u+1]-g[u]));if(r+=g[g.length-1],e.CFF.readSubrs(i,r,p),p.CharStrings){r=p.CharStrings,g=[],r=e.CFF.readIndex(i,r,g);var m=[];for(u=0;u<g.length-1;u++)m.push(a.readBytes(i,r+g[u],g[u+1]-g[u]));p.CharStrings=m}if(p.ROS){r=p.FDArray;var f=[];for(r=e.CFF.readIndex(i,r,f),p.FDArray=[],u=0;u<f.length-1;u++){var v=e.CFF.readDict(i,r+f[u],r+f[u+1]);e.CFF._readFDict(i,v,_),p.FDArray.push(v)}r+=f[f.length-1],r=p.FDSelect,p.FDSelect=[];var y=i[r];if(r++,y!=3)throw y;var x=a.readUshort(i,r);for(r+=2,u=0;u<x+1;u++)p.FDSelect.push(a.readUshort(i,r),i[r+2]),r+=3}return p.Encoding&&(p.Encoding=e.CFF.readEncoding(i,p.Encoding,p.CharStrings.length)),p.charset&&(p.charset=e.CFF.readCharset(i,p.charset,p.CharStrings.length)),e.CFF._readFDict(i,p,_),p},e.CFF._readFDict=function(i,r,s){var a;for(var o in r.Private&&(a=r.Private[1],r.Private=e.CFF.readDict(i,a,a+r.Private[0]),r.Private.Subrs&&e.CFF.readSubrs(i,a+r.Private.Subrs,r.Private)),r)["FamilyName","FontName","FullName","Notice","version","Copyright"].indexOf(o)!=-1&&(r[o]=s[r[o]-426+35])},e.CFF.readSubrs=function(i,r,s){var a=e._bin,o=[];r=e.CFF.readIndex(i,r,o);var c,u=o.length;c=u<1240?107:u<33900?1131:32768,s.Bias=c,s.Subrs=[];for(var h=0;h<o.length-1;h++)s.Subrs.push(a.readBytes(i,r+o[h],o[h+1]-o[h]))},e.CFF.tableSE=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,0,111,112,113,114,0,115,116,117,118,119,120,121,122,0,123,0,124,125,126,127,128,129,130,131,0,132,133,0,134,135,136,137,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,138,0,139,0,0,0,0,140,141,142,143,0,0,0,0,0,144,0,0,0,145,0,0,146,147,148,149,0,0,0,0],e.CFF.glyphByUnicode=function(i,r){for(var s=0;s<i.charset.length;s++)if(i.charset[s]==r)return s;return-1},e.CFF.glyphBySE=function(i,r){return r<0||r>255?-1:e.CFF.glyphByUnicode(i,e.CFF.tableSE[r])},e.CFF.readEncoding=function(i,r,s){e._bin;var a=[".notdef"],o=i[r];if(r++,o!=0)throw"error: unknown encoding format: "+o;var c=i[r];r++;for(var u=0;u<c;u++)a.push(i[r+u]);return a},e.CFF.readCharset=function(i,r,s){var a=e._bin,o=[".notdef"],c=i[r];if(r++,c==0)for(var u=0;u<s;u++){var h=a.readUshort(i,r);r+=2,o.push(h)}else{if(c!=1&&c!=2)throw"error: format: "+c;for(;o.length<s;){h=a.readUshort(i,r),r+=2;var d=0;for(c==1?(d=i[r],r++):(d=a.readUshort(i,r),r+=2),u=0;u<=d;u++)o.push(h),h++}}return o},e.CFF.readIndex=function(i,r,s){var a=e._bin,o=a.readUshort(i,r)+1,c=i[r+=2];if(r++,c==1)for(var u=0;u<o;u++)s.push(i[r+u]);else if(c==2)for(u=0;u<o;u++)s.push(a.readUshort(i,r+2*u));else if(c==3)for(u=0;u<o;u++)s.push(16777215&a.readUint(i,r+3*u-1));else if(o!=1)throw"unsupported offset size: "+c+", count: "+o;return(r+=o*c)-1},e.CFF.getCharString=function(i,r,s){var a=e._bin,o=i[r],c=i[r+1];i[r+2],i[r+3],i[r+4];var u=1,h=null,d=null;o<=20&&(h=o,u=1),o==12&&(h=100*o+c,u=2),21<=o&&o<=27&&(h=o,u=1),o==28&&(d=a.readShort(i,r+1),u=3),29<=o&&o<=31&&(h=o,u=1),32<=o&&o<=246&&(d=o-139,u=1),247<=o&&o<=250&&(d=256*(o-247)+c+108,u=2),251<=o&&o<=254&&(d=256*-(o-251)-c-108,u=2),o==255&&(d=a.readInt(i,r+1)/65535,u=5),s.val=d??"o"+h,s.size=u},e.CFF.readCharString=function(i,r,s){for(var a=r+s,o=e._bin,c=[];r<a;){var u=i[r],h=i[r+1];i[r+2],i[r+3],i[r+4];var d=1,p=null,g=null;u<=20&&(p=u,d=1),u==12&&(p=100*u+h,d=2),u!=19&&u!=20||(p=u,d=2),21<=u&&u<=27&&(p=u,d=1),u==28&&(g=o.readShort(i,r+1),d=3),29<=u&&u<=31&&(p=u,d=1),32<=u&&u<=246&&(g=u-139,d=1),247<=u&&u<=250&&(g=256*(u-247)+h+108,d=2),251<=u&&u<=254&&(g=256*-(u-251)-h-108,d=2),u==255&&(g=o.readInt(i,r+1)/65535,d=5),c.push(g??"o"+p),r+=d}return c},e.CFF.readDict=function(i,r,s){for(var a=e._bin,o={},c=[];r<s;){var u=i[r],h=i[r+1];i[r+2],i[r+3],i[r+4];var d=1,p=null,g=null;if(u==28&&(g=a.readShort(i,r+1),d=3),u==29&&(g=a.readInt(i,r+1),d=5),32<=u&&u<=246&&(g=u-139,d=1),247<=u&&u<=250&&(g=256*(u-247)+h+108,d=2),251<=u&&u<=254&&(g=256*-(u-251)-h-108,d=2),u==255)throw g=a.readInt(i,r+1)/65535,d=5,"unknown number";if(u==30){var _=[];for(d=1;;){var m=i[r+d];d++;var f=m>>4,v=15&m;if(f!=15&&_.push(f),v!=15&&_.push(v),v==15)break}for(var y="",x=[0,1,2,3,4,5,6,7,8,9,".","e","e-","reserved","-","endOfNumber"],b=0;b<_.length;b++)y+=x[_[b]];g=parseFloat(y)}u<=21&&(p=["version","Notice","FullName","FamilyName","Weight","FontBBox","BlueValues","OtherBlues","FamilyBlues","FamilyOtherBlues","StdHW","StdVW","escape","UniqueID","XUID","charset","Encoding","CharStrings","Private","Subrs","defaultWidthX","nominalWidthX"][u],d=1,u==12&&(p=["Copyright","isFixedPitch","ItalicAngle","UnderlinePosition","UnderlineThickness","PaintType","CharstringType","FontMatrix","StrokeWidth","BlueScale","BlueShift","BlueFuzz","StemSnapH","StemSnapV","ForceBold",0,0,"LanguageGroup","ExpansionFactor","initialRandomSeed","SyntheticBase","PostScript","BaseFontName","BaseFontBlend",0,0,0,0,0,0,"ROS","CIDFontVersion","CIDFontRevision","CIDFontType","CIDCount","UIDBase","FDArray","FDSelect","FontName"][h],d=2)),p!=null?(o[p]=c.length==1?c[0]:c,c=[]):c.push(g),r+=d}return o},e.cmap={},e.cmap.parse=function(i,r,s){i=new Uint8Array(i.buffer,r,s),r=0;var a=e._bin,o={};a.readUshort(i,r),r+=2;var c=a.readUshort(i,r);r+=2;var u=[];o.tables=[];for(var h=0;h<c;h++){var d=a.readUshort(i,r);r+=2;var p=a.readUshort(i,r);r+=2;var g=a.readUint(i,r);r+=4;var _="p"+d+"e"+p,m=u.indexOf(g);if(m==-1){var f;m=o.tables.length,u.push(g);var v=a.readUshort(i,g);v==0?f=e.cmap.parse0(i,g):v==4?f=e.cmap.parse4(i,g):v==6?f=e.cmap.parse6(i,g):v==12?f=e.cmap.parse12(i,g):console.debug("unknown format: "+v,d,p,g),o.tables.push(f)}if(o[_]!=null)throw"multiple tables for one platform+encoding";o[_]=m}return o},e.cmap.parse0=function(i,r){var s=e._bin,a={};a.format=s.readUshort(i,r),r+=2;var o=s.readUshort(i,r);r+=2,s.readUshort(i,r),r+=2,a.map=[];for(var c=0;c<o-6;c++)a.map.push(i[r+c]);return a},e.cmap.parse4=function(i,r){var s=e._bin,a=r,o={};o.format=s.readUshort(i,r),r+=2;var c=s.readUshort(i,r);r+=2,s.readUshort(i,r),r+=2;var u=s.readUshort(i,r);r+=2;var h=u/2;o.searchRange=s.readUshort(i,r),r+=2,o.entrySelector=s.readUshort(i,r),r+=2,o.rangeShift=s.readUshort(i,r),r+=2,o.endCount=s.readUshorts(i,r,h),r+=2*h,r+=2,o.startCount=s.readUshorts(i,r,h),r+=2*h,o.idDelta=[];for(var d=0;d<h;d++)o.idDelta.push(s.readShort(i,r)),r+=2;for(o.idRangeOffset=s.readUshorts(i,r,h),r+=2*h,o.glyphIdArray=[];r<a+c;)o.glyphIdArray.push(s.readUshort(i,r)),r+=2;return o},e.cmap.parse6=function(i,r){var s=e._bin,a={};a.format=s.readUshort(i,r),r+=2,s.readUshort(i,r),r+=2,s.readUshort(i,r),r+=2,a.firstCode=s.readUshort(i,r),r+=2;var o=s.readUshort(i,r);r+=2,a.glyphIdArray=[];for(var c=0;c<o;c++)a.glyphIdArray.push(s.readUshort(i,r)),r+=2;return a},e.cmap.parse12=function(i,r){var s=e._bin,a={};a.format=s.readUshort(i,r),r+=2,r+=2,s.readUint(i,r),r+=4,s.readUint(i,r),r+=4;var o=s.readUint(i,r);r+=4,a.groups=[];for(var c=0;c<o;c++){var u=r+12*c,h=s.readUint(i,u+0),d=s.readUint(i,u+4),p=s.readUint(i,u+8);a.groups.push([h,d,p])}return a},e.glyf={},e.glyf.parse=function(i,r,s,a){for(var o=[],c=0;c<a.maxp.numGlyphs;c++)o.push(null);return o},e.glyf._parseGlyf=function(i,r){var s=e._bin,a=i._data,o=e._tabOffset(a,"glyf",i._offset)+i.loca[r];if(i.loca[r]==i.loca[r+1])return null;var c={};if(c.noc=s.readShort(a,o),o+=2,c.xMin=s.readShort(a,o),o+=2,c.yMin=s.readShort(a,o),o+=2,c.xMax=s.readShort(a,o),o+=2,c.yMax=s.readShort(a,o),o+=2,c.xMin>=c.xMax||c.yMin>=c.yMax)return null;if(c.noc>0){c.endPts=[];for(var u=0;u<c.noc;u++)c.endPts.push(s.readUshort(a,o)),o+=2;var h=s.readUshort(a,o);if(o+=2,a.length-o<h)return null;c.instructions=s.readBytes(a,o,h),o+=h;var d=c.endPts[c.noc-1]+1;for(c.flags=[],u=0;u<d;u++){var p=a[o];if(o++,c.flags.push(p),(8&p)!=0){var g=a[o];o++;for(var _=0;_<g;_++)c.flags.push(p),u++}}for(c.xs=[],u=0;u<d;u++){var m=(2&c.flags[u])!=0,f=(16&c.flags[u])!=0;m?(c.xs.push(f?a[o]:-a[o]),o++):f?c.xs.push(0):(c.xs.push(s.readShort(a,o)),o+=2)}for(c.ys=[],u=0;u<d;u++)m=(4&c.flags[u])!=0,f=(32&c.flags[u])!=0,m?(c.ys.push(f?a[o]:-a[o]),o++):f?c.ys.push(0):(c.ys.push(s.readShort(a,o)),o+=2);var v=0,y=0;for(u=0;u<d;u++)v+=c.xs[u],y+=c.ys[u],c.xs[u]=v,c.ys[u]=y}else{var x;c.parts=[];do{x=s.readUshort(a,o),o+=2;var b={m:{a:1,b:0,c:0,d:1,tx:0,ty:0},p1:-1,p2:-1};if(c.parts.push(b),b.glyphIndex=s.readUshort(a,o),o+=2,1&x){var T=s.readShort(a,o);o+=2;var C=s.readShort(a,o);o+=2}else T=s.readInt8(a,o),o++,C=s.readInt8(a,o),o++;2&x?(b.m.tx=T,b.m.ty=C):(b.p1=T,b.p2=C),8&x?(b.m.a=b.m.d=s.readF2dot14(a,o),o+=2):64&x?(b.m.a=s.readF2dot14(a,o),o+=2,b.m.d=s.readF2dot14(a,o),o+=2):128&x&&(b.m.a=s.readF2dot14(a,o),o+=2,b.m.b=s.readF2dot14(a,o),o+=2,b.m.c=s.readF2dot14(a,o),o+=2,b.m.d=s.readF2dot14(a,o),o+=2)}while(32&x);if(256&x){var L=s.readUshort(a,o);for(o+=2,c.instr=[],u=0;u<L;u++)c.instr.push(a[o]),o++}}return c},e.GPOS={},e.GPOS.parse=function(i,r,s,a){return e._lctf.parse(i,r,s,a,e.GPOS.subt)},e.GPOS.subt=function(i,r,s,a){var o=e._bin,c=s,u={};if(u.fmt=o.readUshort(i,s),s+=2,r==1||r==2||r==3||r==7||r==8&&u.fmt<=2){var h=o.readUshort(i,s);s+=2,u.coverage=e._lctf.readCoverage(i,h+c)}if(r==1&&u.fmt==1){var d=o.readUshort(i,s);s+=2;var p=e._lctf.numOfOnes(d);d!=0&&(u.pos=e.GPOS.readValueRecord(i,s,d))}else if(r==2&&u.fmt>=1&&u.fmt<=2){d=o.readUshort(i,s),s+=2;var g=o.readUshort(i,s);s+=2,p=e._lctf.numOfOnes(d);var _=e._lctf.numOfOnes(g);if(u.fmt==1){u.pairsets=[];var m=o.readUshort(i,s);s+=2;for(var f=0;f<m;f++){var v=c+o.readUshort(i,s);s+=2;var y=o.readUshort(i,v);v+=2;for(var x=[],b=0;b<y;b++){var T=o.readUshort(i,v);v+=2,d!=0&&(D=e.GPOS.readValueRecord(i,v,d),v+=2*p),g!=0&&(P=e.GPOS.readValueRecord(i,v,g),v+=2*_),x.push({gid2:T,val1:D,val2:P})}u.pairsets.push(x)}}if(u.fmt==2){var C=o.readUshort(i,s);s+=2;var L=o.readUshort(i,s);s+=2;var S=o.readUshort(i,s);s+=2;var E=o.readUshort(i,s);for(s+=2,u.classDef1=e._lctf.readClassDef(i,c+C),u.classDef2=e._lctf.readClassDef(i,c+L),u.matrix=[],f=0;f<S;f++){var J=[];for(b=0;b<E;b++){var D=null,P=null;d!=0&&(D=e.GPOS.readValueRecord(i,s,d),s+=2*p),g!=0&&(P=e.GPOS.readValueRecord(i,s,g),s+=2*_),J.push({val1:D,val2:P})}u.matrix.push(J)}}}else{if(r==9&&u.fmt==1){var I=o.readUshort(i,s);s+=2;var B=o.readUint(i,s);if(s+=4,a.ltype==9)a.ltype=I;else if(a.ltype!=I)throw"invalid extension substitution";return e.GPOS.subt(i,a.ltype,c+B)}console.debug("unsupported GPOS table LookupType",r,"format",u.fmt)}return u},e.GPOS.readValueRecord=function(i,r,s){var a=e._bin,o=[];return o.push(1&s?a.readShort(i,r):0),r+=1&s?2:0,o.push(2&s?a.readShort(i,r):0),r+=2&s?2:0,o.push(4&s?a.readShort(i,r):0),r+=4&s?2:0,o.push(8&s?a.readShort(i,r):0),r+=8&s?2:0,o},e.GSUB={},e.GSUB.parse=function(i,r,s,a){return e._lctf.parse(i,r,s,a,e.GSUB.subt)},e.GSUB.subt=function(i,r,s,a){var o=e._bin,c=s,u={};if(u.fmt=o.readUshort(i,s),s+=2,r!=1&&r!=4&&r!=5&&r!=6)return null;if(r==1||r==4||r==5&&u.fmt<=2||r==6&&u.fmt<=2){var h=o.readUshort(i,s);s+=2,u.coverage=e._lctf.readCoverage(i,c+h)}if(r==1&&u.fmt>=1&&u.fmt<=2){if(u.fmt==1)u.delta=o.readShort(i,s),s+=2;else if(u.fmt==2){var d=o.readUshort(i,s);s+=2,u.newg=o.readUshorts(i,s,d),s+=2*u.newg.length}}else if(r==4){u.vals=[],d=o.readUshort(i,s),s+=2;for(var p=0;p<d;p++){var g=o.readUshort(i,s);s+=2,u.vals.push(e.GSUB.readLigatureSet(i,c+g))}}else if(r==5&&u.fmt==2){if(u.fmt==2){var _=o.readUshort(i,s);s+=2,u.cDef=e._lctf.readClassDef(i,c+_),u.scset=[];var m=o.readUshort(i,s);for(s+=2,p=0;p<m;p++){var f=o.readUshort(i,s);s+=2,u.scset.push(f==0?null:e.GSUB.readSubClassSet(i,c+f))}}}else if(r==6&&u.fmt==3){if(u.fmt==3){for(p=0;p<3;p++){d=o.readUshort(i,s),s+=2;for(var v=[],y=0;y<d;y++)v.push(e._lctf.readCoverage(i,c+o.readUshort(i,s+2*y)));s+=2*d,p==0&&(u.backCvg=v),p==1&&(u.inptCvg=v),p==2&&(u.ahedCvg=v)}d=o.readUshort(i,s),s+=2,u.lookupRec=e.GSUB.readSubstLookupRecords(i,s,d)}}else{if(r==7&&u.fmt==1){var x=o.readUshort(i,s);s+=2;var b=o.readUint(i,s);if(s+=4,a.ltype==9)a.ltype=x;else if(a.ltype!=x)throw"invalid extension substitution";return e.GSUB.subt(i,a.ltype,c+b)}console.debug("unsupported GSUB table LookupType",r,"format",u.fmt)}return u},e.GSUB.readSubClassSet=function(i,r){var s=e._bin.readUshort,a=r,o=[],c=s(i,r);r+=2;for(var u=0;u<c;u++){var h=s(i,r);r+=2,o.push(e.GSUB.readSubClassRule(i,a+h))}return o},e.GSUB.readSubClassRule=function(i,r){var s=e._bin.readUshort,a={},o=s(i,r),c=s(i,r+=2);r+=2,a.input=[];for(var u=0;u<o-1;u++)a.input.push(s(i,r)),r+=2;return a.substLookupRecords=e.GSUB.readSubstLookupRecords(i,r,c),a},e.GSUB.readSubstLookupRecords=function(i,r,s){for(var a=e._bin.readUshort,o=[],c=0;c<s;c++)o.push(a(i,r),a(i,r+2)),r+=4;return o},e.GSUB.readChainSubClassSet=function(i,r){var s=e._bin,a=r,o=[],c=s.readUshort(i,r);r+=2;for(var u=0;u<c;u++){var h=s.readUshort(i,r);r+=2,o.push(e.GSUB.readChainSubClassRule(i,a+h))}return o},e.GSUB.readChainSubClassRule=function(i,r){for(var s=e._bin,a={},o=["backtrack","input","lookahead"],c=0;c<o.length;c++){var u=s.readUshort(i,r);r+=2,c==1&&u--,a[o[c]]=s.readUshorts(i,r,u),r+=2*a[o[c]].length}return u=s.readUshort(i,r),r+=2,a.subst=s.readUshorts(i,r,2*u),r+=2*a.subst.length,a},e.GSUB.readLigatureSet=function(i,r){var s=e._bin,a=r,o=[],c=s.readUshort(i,r);r+=2;for(var u=0;u<c;u++){var h=s.readUshort(i,r);r+=2,o.push(e.GSUB.readLigature(i,a+h))}return o},e.GSUB.readLigature=function(i,r){var s=e._bin,a={chain:[]};a.nglyph=s.readUshort(i,r),r+=2;var o=s.readUshort(i,r);r+=2;for(var c=0;c<o-1;c++)a.chain.push(s.readUshort(i,r)),r+=2;return a},e.head={},e.head.parse=function(i,r,s){var a=e._bin,o={};return a.readFixed(i,r),r+=4,o.fontRevision=a.readFixed(i,r),r+=4,a.readUint(i,r),r+=4,a.readUint(i,r),r+=4,o.flags=a.readUshort(i,r),r+=2,o.unitsPerEm=a.readUshort(i,r),r+=2,o.created=a.readUint64(i,r),r+=8,o.modified=a.readUint64(i,r),r+=8,o.xMin=a.readShort(i,r),r+=2,o.yMin=a.readShort(i,r),r+=2,o.xMax=a.readShort(i,r),r+=2,o.yMax=a.readShort(i,r),r+=2,o.macStyle=a.readUshort(i,r),r+=2,o.lowestRecPPEM=a.readUshort(i,r),r+=2,o.fontDirectionHint=a.readShort(i,r),r+=2,o.indexToLocFormat=a.readShort(i,r),r+=2,o.glyphDataFormat=a.readShort(i,r),r+=2,o},e.hhea={},e.hhea.parse=function(i,r,s){var a=e._bin,o={};return a.readFixed(i,r),r+=4,o.ascender=a.readShort(i,r),r+=2,o.descender=a.readShort(i,r),r+=2,o.lineGap=a.readShort(i,r),r+=2,o.advanceWidthMax=a.readUshort(i,r),r+=2,o.minLeftSideBearing=a.readShort(i,r),r+=2,o.minRightSideBearing=a.readShort(i,r),r+=2,o.xMaxExtent=a.readShort(i,r),r+=2,o.caretSlopeRise=a.readShort(i,r),r+=2,o.caretSlopeRun=a.readShort(i,r),r+=2,o.caretOffset=a.readShort(i,r),r+=2,r+=8,o.metricDataFormat=a.readShort(i,r),r+=2,o.numberOfHMetrics=a.readUshort(i,r),r+=2,o},e.hmtx={},e.hmtx.parse=function(i,r,s,a){for(var o=e._bin,c={aWidth:[],lsBearing:[]},u=0,h=0,d=0;d<a.maxp.numGlyphs;d++)d<a.hhea.numberOfHMetrics&&(u=o.readUshort(i,r),r+=2,h=o.readShort(i,r),r+=2),c.aWidth.push(u),c.lsBearing.push(h);return c},e.kern={},e.kern.parse=function(i,r,s,a){var o=e._bin,c=o.readUshort(i,r);if(r+=2,c==1)return e.kern.parseV1(i,r-2,s,a);var u=o.readUshort(i,r);r+=2;for(var h={glyph1:[],rval:[]},d=0;d<u;d++){r+=2,s=o.readUshort(i,r),r+=2;var p=o.readUshort(i,r);r+=2;var g=p>>>8;if((g&=15)!=0)throw"unknown kern table format: "+g;r=e.kern.readFormat0(i,r,h)}return h},e.kern.parseV1=function(i,r,s,a){var o=e._bin;o.readFixed(i,r),r+=4;var c=o.readUint(i,r);r+=4;for(var u={glyph1:[],rval:[]},h=0;h<c;h++){o.readUint(i,r),r+=4;var d=o.readUshort(i,r);r+=2,o.readUshort(i,r),r+=2;var p=d>>>8;if((p&=15)!=0)throw"unknown kern table format: "+p;r=e.kern.readFormat0(i,r,u)}return u},e.kern.readFormat0=function(i,r,s){var a=e._bin,o=-1,c=a.readUshort(i,r);r+=2,a.readUshort(i,r),r+=2,a.readUshort(i,r),r+=2,a.readUshort(i,r),r+=2;for(var u=0;u<c;u++){var h=a.readUshort(i,r);r+=2;var d=a.readUshort(i,r);r+=2;var p=a.readShort(i,r);r+=2,h!=o&&(s.glyph1.push(h),s.rval.push({glyph2:[],vals:[]}));var g=s.rval[s.rval.length-1];g.glyph2.push(d),g.vals.push(p),o=h}return r},e.loca={},e.loca.parse=function(i,r,s,a){var o=e._bin,c=[],u=a.head.indexToLocFormat,h=a.maxp.numGlyphs+1;if(u==0)for(var d=0;d<h;d++)c.push(o.readUshort(i,r+(d<<1))<<1);if(u==1)for(d=0;d<h;d++)c.push(o.readUint(i,r+(d<<2)));return c},e.maxp={},e.maxp.parse=function(i,r,s){var a=e._bin,o={},c=a.readUint(i,r);return r+=4,o.numGlyphs=a.readUshort(i,r),r+=2,c==65536&&(o.maxPoints=a.readUshort(i,r),r+=2,o.maxContours=a.readUshort(i,r),r+=2,o.maxCompositePoints=a.readUshort(i,r),r+=2,o.maxCompositeContours=a.readUshort(i,r),r+=2,o.maxZones=a.readUshort(i,r),r+=2,o.maxTwilightPoints=a.readUshort(i,r),r+=2,o.maxStorage=a.readUshort(i,r),r+=2,o.maxFunctionDefs=a.readUshort(i,r),r+=2,o.maxInstructionDefs=a.readUshort(i,r),r+=2,o.maxStackElements=a.readUshort(i,r),r+=2,o.maxSizeOfInstructions=a.readUshort(i,r),r+=2,o.maxComponentElements=a.readUshort(i,r),r+=2,o.maxComponentDepth=a.readUshort(i,r),r+=2),o},e.name={},e.name.parse=function(i,r,s){var a=e._bin,o={};a.readUshort(i,r),r+=2;var c=a.readUshort(i,r);r+=2,a.readUshort(i,r);for(var u,h=["copyright","fontFamily","fontSubfamily","ID","fullName","version","postScriptName","trademark","manufacturer","designer","description","urlVendor","urlDesigner","licence","licenceURL","---","typoFamilyName","typoSubfamilyName","compatibleFull","sampleText","postScriptCID","wwsFamilyName","wwsSubfamilyName","lightPalette","darkPalette"],d=r+=2,p=0;p<c;p++){var g=a.readUshort(i,r);r+=2;var _=a.readUshort(i,r);r+=2;var m=a.readUshort(i,r);r+=2;var f=a.readUshort(i,r);r+=2;var v=a.readUshort(i,r);r+=2;var y=a.readUshort(i,r);r+=2;var x,b=h[f],T=d+12*c+y;if(g==0)x=a.readUnicode(i,T,v/2);else if(g==3&&_==0)x=a.readUnicode(i,T,v/2);else if(_==0)x=a.readASCII(i,T,v);else if(_==1)x=a.readUnicode(i,T,v/2);else if(_==3)x=a.readUnicode(i,T,v/2);else{if(g!=1)throw"unknown encoding "+_+", platformID: "+g;x=a.readASCII(i,T,v),console.debug("reading unknown MAC encoding "+_+" as ASCII")}var C="p"+g+","+m.toString(16);o[C]==null&&(o[C]={}),o[C][b!==void 0?b:f]=x,o[C]._lang=m}for(var L in o)if(o[L].postScriptName!=null&&o[L]._lang==1033)return o[L];for(var L in o)if(o[L].postScriptName!=null&&o[L]._lang==0)return o[L];for(var L in o)if(o[L].postScriptName!=null&&o[L]._lang==3084)return o[L];for(var L in o)if(o[L].postScriptName!=null)return o[L];for(var L in o){u=L;break}return console.debug("returning name table with languageID "+o[u]._lang),o[u]},e["OS/2"]={},e["OS/2"].parse=function(i,r,s){var a=e._bin.readUshort(i,r);r+=2;var o={};if(a==0)e["OS/2"].version0(i,r,o);else if(a==1)e["OS/2"].version1(i,r,o);else if(a==2||a==3||a==4)e["OS/2"].version2(i,r,o);else{if(a!=5)throw"unknown OS/2 table version: "+a;e["OS/2"].version5(i,r,o)}return o},e["OS/2"].version0=function(i,r,s){var a=e._bin;return s.xAvgCharWidth=a.readShort(i,r),r+=2,s.usWeightClass=a.readUshort(i,r),r+=2,s.usWidthClass=a.readUshort(i,r),r+=2,s.fsType=a.readUshort(i,r),r+=2,s.ySubscriptXSize=a.readShort(i,r),r+=2,s.ySubscriptYSize=a.readShort(i,r),r+=2,s.ySubscriptXOffset=a.readShort(i,r),r+=2,s.ySubscriptYOffset=a.readShort(i,r),r+=2,s.ySuperscriptXSize=a.readShort(i,r),r+=2,s.ySuperscriptYSize=a.readShort(i,r),r+=2,s.ySuperscriptXOffset=a.readShort(i,r),r+=2,s.ySuperscriptYOffset=a.readShort(i,r),r+=2,s.yStrikeoutSize=a.readShort(i,r),r+=2,s.yStrikeoutPosition=a.readShort(i,r),r+=2,s.sFamilyClass=a.readShort(i,r),r+=2,s.panose=a.readBytes(i,r,10),r+=10,s.ulUnicodeRange1=a.readUint(i,r),r+=4,s.ulUnicodeRange2=a.readUint(i,r),r+=4,s.ulUnicodeRange3=a.readUint(i,r),r+=4,s.ulUnicodeRange4=a.readUint(i,r),r+=4,s.achVendID=[a.readInt8(i,r),a.readInt8(i,r+1),a.readInt8(i,r+2),a.readInt8(i,r+3)],r+=4,s.fsSelection=a.readUshort(i,r),r+=2,s.usFirstCharIndex=a.readUshort(i,r),r+=2,s.usLastCharIndex=a.readUshort(i,r),r+=2,s.sTypoAscender=a.readShort(i,r),r+=2,s.sTypoDescender=a.readShort(i,r),r+=2,s.sTypoLineGap=a.readShort(i,r),r+=2,s.usWinAscent=a.readUshort(i,r),r+=2,s.usWinDescent=a.readUshort(i,r),r+=2},e["OS/2"].version1=function(i,r,s){var a=e._bin;return r=e["OS/2"].version0(i,r,s),s.ulCodePageRange1=a.readUint(i,r),r+=4,s.ulCodePageRange2=a.readUint(i,r),r+=4},e["OS/2"].version2=function(i,r,s){var a=e._bin;return r=e["OS/2"].version1(i,r,s),s.sxHeight=a.readShort(i,r),r+=2,s.sCapHeight=a.readShort(i,r),r+=2,s.usDefault=a.readUshort(i,r),r+=2,s.usBreak=a.readUshort(i,r),r+=2,s.usMaxContext=a.readUshort(i,r),r+=2},e["OS/2"].version5=function(i,r,s){var a=e._bin;return r=e["OS/2"].version2(i,r,s),s.usLowerOpticalPointSize=a.readUshort(i,r),r+=2,s.usUpperOpticalPointSize=a.readUshort(i,r),r+=2},e.post={},e.post.parse=function(i,r,s){var a=e._bin,o={};return o.version=a.readFixed(i,r),r+=4,o.italicAngle=a.readFixed(i,r),r+=4,o.underlinePosition=a.readShort(i,r),r+=2,o.underlineThickness=a.readShort(i,r),r+=2,o},e==null&&(e={}),e.U==null&&(e.U={}),e.U.codeToGlyph=function(i,r){var s=i.cmap,a=-1;if(s.p0e4!=null?a=s.p0e4:s.p3e1!=null?a=s.p3e1:s.p1e0!=null?a=s.p1e0:s.p0e3!=null&&(a=s.p0e3),a==-1)throw"no familiar platform and encoding!";var o=s.tables[a];if(o.format==0)return r>=o.map.length?0:o.map[r];if(o.format==4){for(var c=-1,u=0;u<o.endCount.length;u++)if(r<=o.endCount[u]){c=u;break}return c==-1||o.startCount[c]>r?0:65535&(o.idRangeOffset[c]!=0?o.glyphIdArray[r-o.startCount[c]+(o.idRangeOffset[c]>>1)-(o.idRangeOffset.length-c)]:r+o.idDelta[c])}if(o.format==12){if(r>o.groups[o.groups.length-1][1])return 0;for(u=0;u<o.groups.length;u++){var h=o.groups[u];if(h[0]<=r&&r<=h[1])return h[2]+(r-h[0])}return 0}throw"unknown cmap table format "+o.format},e.U.glyphToPath=function(i,r){var s={cmds:[],crds:[]};if(i.SVG&&i.SVG.entries[r]){var a=i.SVG.entries[r];return a==null?s:(typeof a=="string"&&(a=e.SVG.toPath(a),i.SVG.entries[r]=a),a)}if(i.CFF){var o={x:0,y:0,stack:[],nStems:0,haveWidth:!1,width:i.CFF.Private?i.CFF.Private.defaultWidthX:0,open:!1},c=i.CFF,u=i.CFF.Private;if(c.ROS){for(var h=0;c.FDSelect[h+2]<=r;)h+=2;u=c.FDArray[c.FDSelect[h+1]].Private}e.U._drawCFF(i.CFF.CharStrings[r],o,c,u,s)}else i.glyf&&e.U._drawGlyf(r,i,s);return s},e.U._drawGlyf=function(i,r,s){var a=r.glyf[i];a==null&&(a=r.glyf[i]=e.glyf._parseGlyf(r,i)),a!=null&&(a.noc>-1?e.U._simpleGlyph(a,s):e.U._compoGlyph(a,r,s))},e.U._simpleGlyph=function(i,r){for(var s=0;s<i.noc;s++){for(var a=s==0?0:i.endPts[s-1]+1,o=i.endPts[s],c=a;c<=o;c++){var u=c==a?o:c-1,h=c==o?a:c+1,d=1&i.flags[c],p=1&i.flags[u],g=1&i.flags[h],_=i.xs[c],m=i.ys[c];if(c==a)if(d){if(!p){e.U.P.moveTo(r,_,m);continue}e.U.P.moveTo(r,i.xs[u],i.ys[u])}else p?e.U.P.moveTo(r,i.xs[u],i.ys[u]):e.U.P.moveTo(r,(i.xs[u]+_)/2,(i.ys[u]+m)/2);d?p&&e.U.P.lineTo(r,_,m):g?e.U.P.qcurveTo(r,_,m,i.xs[h],i.ys[h]):e.U.P.qcurveTo(r,_,m,(_+i.xs[h])/2,(m+i.ys[h])/2)}e.U.P.closePath(r)}},e.U._compoGlyph=function(i,r,s){for(var a=0;a<i.parts.length;a++){var o={cmds:[],crds:[]},c=i.parts[a];e.U._drawGlyf(c.glyphIndex,r,o);for(var u=c.m,h=0;h<o.crds.length;h+=2){var d=o.crds[h],p=o.crds[h+1];s.crds.push(d*u.a+p*u.b+u.tx),s.crds.push(d*u.c+p*u.d+u.ty)}for(h=0;h<o.cmds.length;h++)s.cmds.push(o.cmds[h])}},e.U._getGlyphClass=function(i,r){var s=e._lctf.getInterval(r,i);return s==-1?0:r[s+2]},e.U.getPairAdjustment=function(i,r,s){var a=!1;if(i.GPOS)for(var o=i.GPOS,c=o.lookupList,u=o.featureList,h=[],d=0;d<u.length;d++){var p=u[d];if(p.tag=="kern"){a=!0;for(var g=0;g<p.tab.length;g++)if(!h[p.tab[g]]){h[p.tab[g]]=!0;for(var _=c[p.tab[g]],m=0;m<_.tabs.length;m++)if(_.tabs[m]!=null){var f,v=_.tabs[m];if((!v.coverage||(f=e._lctf.coverageIndex(v.coverage,r))!=-1)&&_.ltype!=1){if(_.ltype==2){var y=null;if(v.fmt==1){var x=v.pairsets[f];for(d=0;d<x.length;d++)x[d].gid2==s&&(y=x[d])}else if(v.fmt==2){var b=e.U._getGlyphClass(r,v.classDef1),T=e.U._getGlyphClass(s,v.classDef2);y=v.matrix[b][T]}if(y){var C=0;return y.val1&&y.val1[2]&&(C+=y.val1[2]),y.val2&&y.val2[0]&&(C+=y.val2[0]),C}}}}}}}if(i.kern&&!a){var L=i.kern.glyph1.indexOf(r);if(L!=-1){var S=i.kern.rval[L].glyph2.indexOf(s);if(S!=-1)return i.kern.rval[L].vals[S]}}return 0},e.U._applySubs=function(i,r,s,a){for(var o=i.length-r-1,c=0;c<s.tabs.length;c++)if(s.tabs[c]!=null){var u,h=s.tabs[c];if(!h.coverage||(u=e._lctf.coverageIndex(h.coverage,i[r]))!=-1){if(s.ltype==1)i[r],h.fmt==1?i[r]=i[r]+h.delta:i[r]=h.newg[u];else if(s.ltype==4)for(var d=h.vals[u],p=0;p<d.length;p++){var g=d[p],_=g.chain.length;if(!(_>o)){for(var m=!0,f=0,v=0;v<_;v++){for(;i[r+f+(1+v)]==-1;)f++;g.chain[v]!=i[r+f+(1+v)]&&(m=!1)}if(m){for(i[r]=g.nglyph,v=0;v<_+f;v++)i[r+v+1]=-1;break}}}else if(s.ltype==5&&h.fmt==2)for(var y=e._lctf.getInterval(h.cDef,i[r]),x=h.cDef[y+2],b=h.scset[x],T=0;T<b.length;T++){var C=b[T],L=C.input;if(!(L.length>o)){for(m=!0,v=0;v<L.length;v++){var S=e._lctf.getInterval(h.cDef,i[r+1+v]);if(y==-1&&h.cDef[S+2]!=L[v]){m=!1;break}}if(m){var E=C.substLookupRecords;for(p=0;p<E.length;p+=2)E[p],E[p+1]}}}else if(s.ltype==6&&h.fmt==3){if(!e.U._glsCovered(i,h.backCvg,r-h.backCvg.length)||!e.U._glsCovered(i,h.inptCvg,r)||!e.U._glsCovered(i,h.ahedCvg,r+h.inptCvg.length))continue;var J=h.lookupRec;for(T=0;T<J.length;T+=2){y=J[T];var D=a[J[T+1]];e.U._applySubs(i,r+y,D,a)}}}}},e.U._glsCovered=function(i,r,s){for(var a=0;a<r.length;a++)if(e._lctf.coverageIndex(r[a],i[s+a])==-1)return!1;return!0},e.U.glyphsToPath=function(i,r,s){for(var a={cmds:[],crds:[]},o=0,c=0;c<r.length;c++){var u=r[c];if(u!=-1){for(var h=c<r.length-1&&r[c+1]!=-1?r[c+1]:0,d=e.U.glyphToPath(i,u),p=0;p<d.crds.length;p+=2)a.crds.push(d.crds[p]+o),a.crds.push(d.crds[p+1]);for(s&&a.cmds.push(s),p=0;p<d.cmds.length;p++)a.cmds.push(d.cmds[p]);s&&a.cmds.push("X"),o+=i.hmtx.aWidth[u],c<r.length-1&&(o+=e.U.getPairAdjustment(i,u,h))}}return a},e.U.P={},e.U.P.moveTo=function(i,r,s){i.cmds.push("M"),i.crds.push(r,s)},e.U.P.lineTo=function(i,r,s){i.cmds.push("L"),i.crds.push(r,s)},e.U.P.curveTo=function(i,r,s,a,o,c,u){i.cmds.push("C"),i.crds.push(r,s,a,o,c,u)},e.U.P.qcurveTo=function(i,r,s,a,o){i.cmds.push("Q"),i.crds.push(r,s,a,o)},e.U.P.closePath=function(i){i.cmds.push("Z")},e.U._drawCFF=function(i,r,s,a,o){for(var c=r.stack,u=r.nStems,h=r.haveWidth,d=r.width,p=r.open,g=0,_=r.x,m=r.y,f=0,v=0,y=0,x=0,b=0,T=0,C=0,L=0,S=0,E=0,J={val:0,size:0};g<i.length;){e.CFF.getCharString(i,g,J);var D=J.val;if(g+=J.size,D=="o1"||D=="o18")c.length%2!=0&&!h&&(d=c.shift()+a.nominalWidthX),u+=c.length>>1,c.length=0,h=!0;else if(D=="o3"||D=="o23")c.length%2!=0&&!h&&(d=c.shift()+a.nominalWidthX),u+=c.length>>1,c.length=0,h=!0;else if(D=="o4")c.length>1&&!h&&(d=c.shift()+a.nominalWidthX,h=!0),p&&e.U.P.closePath(o),m+=c.pop(),e.U.P.moveTo(o,_,m),p=!0;else if(D=="o5")for(;c.length>0;)_+=c.shift(),m+=c.shift(),e.U.P.lineTo(o,_,m);else if(D=="o6"||D=="o7")for(var P=c.length,I=D=="o6",B=0;B<P;B++){var q=c.shift();I?_+=q:m+=q,I=!I,e.U.P.lineTo(o,_,m)}else if(D=="o8"||D=="o24"){P=c.length;for(var ie=0;ie+6<=P;)f=_+c.shift(),v=m+c.shift(),y=f+c.shift(),x=v+c.shift(),_=y+c.shift(),m=x+c.shift(),e.U.P.curveTo(o,f,v,y,x,_,m),ie+=6;D=="o24"&&(_+=c.shift(),m+=c.shift(),e.U.P.lineTo(o,_,m))}else{if(D=="o11")break;if(D=="o1234"||D=="o1235"||D=="o1236"||D=="o1237")D=="o1234"&&(v=m,y=(f=_+c.shift())+c.shift(),E=x=v+c.shift(),T=x,L=m,_=(C=(b=(S=y+c.shift())+c.shift())+c.shift())+c.shift(),e.U.P.curveTo(o,f,v,y,x,S,E),e.U.P.curveTo(o,b,T,C,L,_,m)),D=="o1235"&&(f=_+c.shift(),v=m+c.shift(),y=f+c.shift(),x=v+c.shift(),S=y+c.shift(),E=x+c.shift(),b=S+c.shift(),T=E+c.shift(),C=b+c.shift(),L=T+c.shift(),_=C+c.shift(),m=L+c.shift(),c.shift(),e.U.P.curveTo(o,f,v,y,x,S,E),e.U.P.curveTo(o,b,T,C,L,_,m)),D=="o1236"&&(f=_+c.shift(),v=m+c.shift(),y=f+c.shift(),E=x=v+c.shift(),T=x,C=(b=(S=y+c.shift())+c.shift())+c.shift(),L=T+c.shift(),_=C+c.shift(),e.U.P.curveTo(o,f,v,y,x,S,E),e.U.P.curveTo(o,b,T,C,L,_,m)),D=="o1237"&&(f=_+c.shift(),v=m+c.shift(),y=f+c.shift(),x=v+c.shift(),S=y+c.shift(),E=x+c.shift(),b=S+c.shift(),T=E+c.shift(),C=b+c.shift(),L=T+c.shift(),Math.abs(C-_)>Math.abs(L-m)?_=C+c.shift():m=L+c.shift(),e.U.P.curveTo(o,f,v,y,x,S,E),e.U.P.curveTo(o,b,T,C,L,_,m));else if(D=="o14"){if(c.length>0&&!h&&(d=c.shift()+s.nominalWidthX,h=!0),c.length==4){var Z=c.shift(),H=c.shift(),j=c.shift(),F=c.shift(),G=e.CFF.glyphBySE(s,j),N=e.CFF.glyphBySE(s,F);e.U._drawCFF(s.CharStrings[G],r,s,a,o),r.x=Z,r.y=H,e.U._drawCFF(s.CharStrings[N],r,s,a,o)}p&&(e.U.P.closePath(o),p=!1)}else if(D=="o19"||D=="o20")c.length%2!=0&&!h&&(d=c.shift()+a.nominalWidthX),u+=c.length>>1,c.length=0,h=!0,g+=u+7>>3;else if(D=="o21")c.length>2&&!h&&(d=c.shift()+a.nominalWidthX,h=!0),m+=c.pop(),_+=c.pop(),p&&e.U.P.closePath(o),e.U.P.moveTo(o,_,m),p=!0;else if(D=="o22")c.length>1&&!h&&(d=c.shift()+a.nominalWidthX,h=!0),_+=c.pop(),p&&e.U.P.closePath(o),e.U.P.moveTo(o,_,m),p=!0;else if(D=="o25"){for(;c.length>6;)_+=c.shift(),m+=c.shift(),e.U.P.lineTo(o,_,m);f=_+c.shift(),v=m+c.shift(),y=f+c.shift(),x=v+c.shift(),_=y+c.shift(),m=x+c.shift(),e.U.P.curveTo(o,f,v,y,x,_,m)}else if(D=="o26")for(c.length%2&&(_+=c.shift());c.length>0;)f=_,v=m+c.shift(),_=y=f+c.shift(),m=(x=v+c.shift())+c.shift(),e.U.P.curveTo(o,f,v,y,x,_,m);else if(D=="o27")for(c.length%2&&(m+=c.shift());c.length>0;)v=m,y=(f=_+c.shift())+c.shift(),x=v+c.shift(),_=y+c.shift(),m=x,e.U.P.curveTo(o,f,v,y,x,_,m);else if(D=="o10"||D=="o29"){var z=D=="o10"?a:s;if(c.length==0)console.debug("error: empty stack");else{var W=c.pop(),Q=z.Subrs[W+z.Bias];r.x=_,r.y=m,r.nStems=u,r.haveWidth=h,r.width=d,r.open=p,e.U._drawCFF(Q,r,s,a,o),_=r.x,m=r.y,u=r.nStems,h=r.haveWidth,d=r.width,p=r.open}}else if(D=="o30"||D=="o31"){var U=c.length,re=(ie=0,D=="o31");for(ie+=U-(P=-3&U);ie<P;)re?(v=m,y=(f=_+c.shift())+c.shift(),m=(x=v+c.shift())+c.shift(),P-ie==5?(_=y+c.shift(),ie++):_=y,re=!1):(f=_,v=m+c.shift(),y=f+c.shift(),x=v+c.shift(),_=y+c.shift(),P-ie==5?(m=x+c.shift(),ie++):m=x,re=!0),e.U.P.curveTo(o,f,v,y,x,_,m),ie+=4}else{if((D+"").charAt(0)=="o")throw console.debug("Unknown operation: "+D,i),D;c.push(D)}}}r.x=_,r.y=m,r.nStems=u,r.haveWidth=h,r.width=d,r.open=p};var t=e,n={Typr:t};return l.Typr=t,l.default=n,Object.defineProperty(l,"__esModule",{value:!0}),l}({}).Typr}/*!
Custom bundle of woff2otf (https://github.com/arty-name/woff2otf) with fflate
(https://github.com/101arrowz/fflate) for use in Troika text rendering. 
Original licenses apply: 
- fflate: https://github.com/101arrowz/fflate/blob/master/LICENSE (MIT)
- woff2otf.js: https://github.com/arty-name/woff2otf/blob/master/woff2otf.js (Apache2)
*/function sv(){return function(l){var e=Uint8Array,t=Uint16Array,n=Uint32Array,i=new e([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),r=new e([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),s=new e([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),a=function(D,P){for(var I=new t(31),B=0;B<31;++B)I[B]=P+=1<<D[B-1];var q=new n(I[30]);for(B=1;B<30;++B)for(var ie=I[B];ie<I[B+1];++ie)q[ie]=ie-I[B]<<5|B;return[I,q]},o=a(i,2),c=o[0],u=o[1];c[28]=258,u[258]=28;for(var h=a(r,0)[0],d=new t(32768),p=0;p<32768;++p){var g=(43690&p)>>>1|(21845&p)<<1;g=(61680&(g=(52428&g)>>>2|(13107&g)<<2))>>>4|(3855&g)<<4,d[p]=((65280&g)>>>8|(255&g)<<8)>>>1}var _=function(D,P,I){for(var B=D.length,q=0,ie=new t(P);q<B;++q)++ie[D[q]-1];var Z,H=new t(P);for(q=0;q<P;++q)H[q]=H[q-1]+ie[q-1]<<1;if(I){Z=new t(1<<P);var j=15-P;for(q=0;q<B;++q)if(D[q])for(var F=q<<4|D[q],G=P-D[q],N=H[D[q]-1]++<<G,z=N|(1<<G)-1;N<=z;++N)Z[d[N]>>>j]=F}else for(Z=new t(B),q=0;q<B;++q)D[q]&&(Z[q]=d[H[D[q]-1]++]>>>15-D[q]);return Z},m=new e(288);for(p=0;p<144;++p)m[p]=8;for(p=144;p<256;++p)m[p]=9;for(p=256;p<280;++p)m[p]=7;for(p=280;p<288;++p)m[p]=8;var f=new e(32);for(p=0;p<32;++p)f[p]=5;var v=_(m,9,1),y=_(f,5,1),x=function(D){for(var P=D[0],I=1;I<D.length;++I)D[I]>P&&(P=D[I]);return P},b=function(D,P,I){var B=P/8|0;return(D[B]|D[B+1]<<8)>>(7&P)&I},T=function(D,P){var I=P/8|0;return(D[I]|D[I+1]<<8|D[I+2]<<16)>>(7&P)},C=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],L=function(D,P,I){var B=new Error(P||C[D]);if(B.code=D,Error.captureStackTrace&&Error.captureStackTrace(B,L),!I)throw B;return B},S=function(D,P,I){var B=D.length;if(!B||I&&!I.l&&B<5)return P||new e(0);var q=!P||I,ie=!I||I.i;I||(I={}),P||(P=new e(3*B));var Z,H=function(pe){var Se=P.length;if(pe>Se){var Re=new e(Math.max(2*Se,pe));Re.set(P),P=Re}},j=I.f||0,F=I.p||0,G=I.b||0,N=I.l,z=I.d,W=I.m,Q=I.n,U=8*B;do{if(!N){I.f=j=b(D,F,1);var re=b(D,F+1,3);if(F+=3,!re){var he=D[(ye=((Z=F)/8|0)+(7&Z&&1)+4)-4]|D[ye-3]<<8,se=ye+he;if(se>B){ie&&L(0);break}q&&H(G+he),P.set(D.subarray(ye,se),G),I.b=G+=he,I.p=F=8*se;continue}if(re==1)N=v,z=y,W=9,Q=5;else if(re==2){var le=b(D,F,31)+257,oe=b(D,F+10,15)+4,xe=le+b(D,F+5,31)+1;F+=14;for(var Ce=new e(xe),Ae=new e(19),Le=0;Le<oe;++Le)Ae[s[Le]]=b(D,F+3*Le,7);F+=3*oe;var Oe=x(Ae),_e=(1<<Oe)-1,Me=_(Ae,Oe,1);for(Le=0;Le<xe;){var ye,ce=Me[b(D,F,_e)];if(F+=15&ce,(ye=ce>>>4)<16)Ce[Le++]=ye;else{var w=0,M=0;for(ye==16?(M=3+b(D,F,3),F+=2,w=Ce[Le-1]):ye==17?(M=3+b(D,F,7),F+=3):ye==18&&(M=11+b(D,F,127),F+=7);M--;)Ce[Le++]=w}}var V=Ce.subarray(0,le),$=Ce.subarray(le);W=x(V),Q=x($),N=_(V,W,1),z=_($,Q,1)}else L(1);if(F>U){ie&&L(0);break}}q&&H(G+131072);for(var ue=(1<<W)-1,me=(1<<Q)-1,R=F;;R=F){var ee=(w=N[T(D,F)&ue])>>>4;if((F+=15&w)>U){ie&&L(0);break}if(w||L(2),ee<256)P[G++]=ee;else{if(ee==256){R=F,N=null;break}var K=ee-254;if(ee>264){var ve=i[Le=ee-257];K=b(D,F,(1<<ve)-1)+c[Le],F+=ve}var fe=z[T(D,F)&me],be=fe>>>4;if(fe||L(3),F+=15&fe,$=h[be],be>3&&(ve=r[be],$+=T(D,F)&(1<<ve)-1,F+=ve),F>U){ie&&L(0);break}q&&H(G+131072);for(var de=G+K;G<de;G+=4)P[G]=P[G-$],P[G+1]=P[G+1-$],P[G+2]=P[G+2-$],P[G+3]=P[G+3-$];G=de}}I.l=N,I.p=R,I.b=G,N&&(j=1,I.m=W,I.d=z,I.n=Q)}while(!j);return G==P.length?P:function(pe,Se,Re){(Se==null||Se<0)&&(Se=0),(Re==null||Re>pe.length)&&(Re=pe.length);var Ge=new(pe instanceof t?t:pe instanceof n?n:e)(Re-Se);return Ge.set(pe.subarray(Se,Re)),Ge}(P,0,G)},E=new e(0),J=typeof TextDecoder<"u"&&new TextDecoder;try{J.decode(E,{stream:!0})}catch{}return l.convert_streams=function(D){var P=new DataView(D),I=0;function B(){var le=P.getUint16(I);return I+=2,le}function q(){var le=P.getUint32(I);return I+=4,le}function ie(le){he.setUint16(se,le),se+=2}function Z(le){he.setUint32(se,le),se+=4}for(var H={signature:q(),flavor:q(),length:q(),numTables:B(),reserved:B(),totalSfntSize:q(),majorVersion:B(),minorVersion:B(),metaOffset:q(),metaLength:q(),metaOrigLength:q(),privOffset:q(),privLength:q()},j=0;Math.pow(2,j)<=H.numTables;)j++;j--;for(var F=16*Math.pow(2,j),G=16*H.numTables-F,N=12,z=[],W=0;W<H.numTables;W++)z.push({tag:q(),offset:q(),compLength:q(),origLength:q(),origChecksum:q()}),N+=16;var Q,U=new Uint8Array(12+16*z.length+z.reduce(function(le,oe){return le+oe.origLength+4},0)),re=U.buffer,he=new DataView(re),se=0;return Z(H.flavor),ie(H.numTables),ie(F),ie(j),ie(G),z.forEach(function(le){Z(le.tag),Z(le.origChecksum),Z(N),Z(le.origLength),le.outOffset=N,(N+=le.origLength)%4!=0&&(N+=4-N%4)}),z.forEach(function(le){var oe,xe=D.slice(le.offset,le.offset+le.compLength);if(le.compLength!=le.origLength){var Ce=new Uint8Array(le.origLength);oe=new Uint8Array(xe,2),S(oe,Ce)}else Ce=new Uint8Array(xe);U.set(Ce,le.outOffset);var Ae=0;(N=le.outOffset+le.origLength)%4!=0&&(Ae=4-N%4),U.set(new Uint8Array(Ae).buffer,le.outOffset+le.origLength),Q=N+Ae}),re.slice(0,Q)},Object.defineProperty(l,"__esModule",{value:!0}),l}({}).convert_streams}function av(l,e){const t={M:2,L:2,Q:4,C:6,Z:0},n={C:"18g,ca,368,1kz",D:"17k,6,2,2+4,5+c,2+6,2+1,10+1,9+f,j+11,2+1,a,2,2+1,15+2,3,j+2,6+3,2+8,2,2,2+1,w+a,4+e,3+3,2,3+2,3+5,23+w,2f+4,3,2+9,2,b,2+3,3,1k+9,6+1,3+1,2+2,2+d,30g,p+y,1,1+1g,f+x,2,sd2+1d,jf3+4,f+3,2+4,2+2,b+3,42,2,4+2,2+1,2,3,t+1,9f+w,2,el+2,2+g,d+2,2l,2+1,5,3+1,2+1,2,3,6,16wm+1v",R:"17m+3,2,2,6+3,m,15+2,2+2,h+h,13,3+8,2,2,3+1,2,p+1,x,5+4,5,a,2,2,3,u,c+2,g+1,5,2+1,4+1,5j,6+1,2,b,2+2,f,2+1,1s+2,2,3+1,7,1ez0,2,2+1,4+4,b,4,3,b,42,2+2,4,3,2+1,2,o+3,ae,ep,x,2o+2,3+1,3,5+1,6",L:"x9u,jff,a,fd,jv",T:"4t,gj+33,7o+4,1+1,7c+18,2,2+1,2+1,2,21+a,2,1b+k,h,2u+6,3+5,3+1,2+3,y,2,v+q,2k+a,1n+8,a,p+3,2+8,2+2,2+4,18+2,3c+e,2+v,1k,2,5+7,5,4+6,b+1,u,1n,5+3,9,l+1,r,3+1,1m,5+1,5+1,3+2,4,v+1,4,c+1,1m,5+4,2+1,5,l+1,n+5,2,1n,3,2+3,9,8+1,c+1,v,1q,d,1f,4,1m+2,6+2,2+3,8+1,c+1,u,1n,3,7,6+1,l+1,t+1,1m+1,5+3,9,l+1,u,21,8+2,2,2j,3+6,d+7,2r,3+8,c+5,23+1,s,2,2,1k+d,2+4,2+1,6+a,2+z,a,2v+3,2+5,2+1,3+1,q+1,5+2,h+3,e,3+1,7,g,jk+2,qb+2,u+2,u+1,v+1,1t+1,2+6,9,3+a,a,1a+2,3c+1,z,3b+2,5+1,a,7+2,64+1,3,1n,2+6,2,2,3+7,7+9,3,1d+d,1,1+1,1s+3,1d,2+4,2,6,15+8,d+1,x+3,3+1,2+2,1l,2+1,4,2+2,1n+7,3+1,49+2,2+c,2+6,5,7,4+1,5j+1l,2+4,ek,3+1,r+4,1e+4,6+5,2p+c,1+3,1,1+2,1+b,2db+2,3y,2p+v,ff+3,30+1,n9x,1+2,2+9,x+1,29+1,7l,4,5,q+1,6,48+1,r+h,e,13+7,q+a,1b+2,1d,3+3,3+1,14,1w+5,3+1,3+1,d,9,1c,1g,2+2,3+1,6+1,2,17+1,9,6n,3,5,fn5,ki+f,h+f,5s,6y+2,ea,6b,46+4,1af+2,2+1,6+3,15+2,5,4m+1,fy+3,as+1,4a+a,4x,1j+e,1l+2,1e+3,3+1,1y+2,11+4,2+7,1r,d+1,1h+8,b+3,3,2o+2,3,2+1,7,4h,4+7,m+1,1m+1,4,12+6,4+4,5g+7,3+2,2,o,2d+5,2,5+1,2+1,6n+3,7+1,2+1,s+1,2e+7,3,2+1,2z,2,3+5,2,2u+2,3+3,2+4,78+8,2+1,75+1,2,5,41+3,3+1,5,x+9,15+5,3+3,9,a+5,3+2,1b+c,2+1,bb+6,2+5,2,2b+l,3+6,2+1,2+1,3f+5,4,2+1,2+6,2,21+1,4,2,9o+1,470+8,at4+4,1o+6,t5,1s+3,2a,f5l+1,2+3,43o+2,a+7,1+7,3+6,v+3,45+2,1j0+1i,5+1d,9,f,n+4,2+e,11t+6,2+g,3+6,2+1,2+4,7a+6,c6+3,15t+6,32+6,1,gzau,v+2n,3l+6n"},i=1,r=2,s=4,a=8,o=16,c=32;let u;function h(b){if(!u){const T={R:r,L:i,D:s,C:o,U:c,T:a};u=new Map;for(let C in n){let L=0;n[C].split(",").forEach(S=>{let[E,J]=S.split("+");E=parseInt(E,36),J=J?parseInt(J,36):0,u.set(L+=E,T[C]);for(let D=J;D--;)u.set(++L,T[C])})}}return u.get(b)||c}const d=1,p=2,g=3,_=4,m=[null,"isol","init","fina","medi"];function f(b){const T=new Uint8Array(b.length);let C=c,L=d,S=-1;for(let E=0;E<b.length;E++){const J=b.codePointAt(E);let D=h(J)|0,P=d;D&a||(C&(i|s|o)?D&(r|s|o)?(P=g,(L===d||L===g)&&T[S]++):D&(i|c)&&(L===p||L===_)&&T[S]--:C&(r|c)&&(L===p||L===_)&&T[S]--,L=T[E]=P,C=D,S=E,J>65535&&E++)}return T}function v(b,T){const C=[];for(let S=0;S<T.length;S++){const E=T.codePointAt(S);E>65535&&S++,C.push(l.U.codeToGlyph(b,E))}const L=b.GSUB;if(L){const{lookupList:S,featureList:E}=L;let J;const D=/^(rlig|liga|mset|isol|init|fina|medi|half|pres|blws)$/,P=[];E.forEach(I=>{if(D.test(I.tag))for(let B=0;B<I.tab.length;B++){if(P[I.tab[B]])continue;P[I.tab[B]]=!0;const q=S[I.tab[B]],ie=/^(isol|init|fina|medi)$/.test(I.tag);ie&&!J&&(J=f(T));for(let Z=0;Z<C.length;Z++)(!J||!ie||m[J[Z]]===I.tag)&&l.U._applySubs(C,Z,q,S)}})}return C}function y(...b){for(let T=0;T<b.length;T++)if(typeof b[T]=="number")return b[T]}function x(b){const T=Object.create(null),C=b["OS/2"],L=b.hhea,S=b.head.unitsPerEm,E=y(C&&C.sTypoAscender,L&&L.ascender,S),J={unitsPerEm:S,ascender:E,descender:y(C&&C.sTypoDescender,L&&L.descender,0),capHeight:y(C&&C.sCapHeight,E),xHeight:y(C&&C.sxHeight,E),lineGap:y(C&&C.sTypoLineGap,L&&L.lineGap),forEachGlyph(D,P,I,B){let q=0;const ie=1/J.unitsPerEm*P,Z=v(b,D);let H=0,j=-1;return Z.forEach((F,G)=>{if(F!==-1){let N=T[F];if(!N){const{cmds:z,crds:W}=l.U.glyphToPath(b,F);let Q="",U=0;for(let oe=0,xe=z.length;oe<xe;oe++){const Ce=t[z[oe]];Q+=z[oe];for(let Ae=1;Ae<=Ce;Ae++)Q+=(Ae>1?",":"")+W[U++]}let re,he,se,le;if(W.length){re=he=1/0,se=le=-1/0;for(let oe=0,xe=W.length;oe<xe;oe+=2){let Ce=W[oe],Ae=W[oe+1];Ce<re&&(re=Ce),Ae<he&&(he=Ae),Ce>se&&(se=Ce),Ae>le&&(le=Ae)}}else re=se=he=le=0;N=T[F]={index:F,advanceWidth:b.hmtx.aWidth[F],xMin:re,yMin:he,xMax:se,yMax:le,path:Q,pathCommandCount:z.length}}j!==-1&&(q+=l.U.getPairAdjustment(b,j,F)*ie),B.call(null,N,q,H),N.advanceWidth&&(q+=N.advanceWidth*ie),I&&(q+=I*P),j=F}H+=D.codePointAt(H)>65535?2:1}),q}};return J}return function(T){const C=new Uint8Array(T,0,4),L=l._bin.readASCII(C,0,4);if(L==="wOFF")T=e(T);else if(L==="wOF2")throw new Error("woff2 fonts not supported");return x(l.parse(T)[0])}}const ov=Xr({name:"Typr Font Parser",dependencies:[rv,sv,av],init(l,e,t){const n=l(),i=e();return t(n,i)}}),zi={defaultFontURL:"https://fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu4mxM.woff",sdfGlyphSize:64,sdfMargin:1/16,sdfExponent:9,textureWidth:2048},lv=new Be;function Ni(){return(self.performance||Date).now()}const Vc=Object.create(null);function cv(l,e){l=hv({},l);const t=Ni();if(l.font=dv(l.font||zi.defaultFontURL),l.text=""+l.text,l.sdfGlyphSize=l.sdfGlyphSize||zi.sdfGlyphSize,l.colorRanges!=null){let h={};for(let d in l.colorRanges)if(l.colorRanges.hasOwnProperty(d)){let p=l.colorRanges[d];typeof p!="number"&&(p=lv.set(p).getHex()),h[d]=p}l.colorRanges=h}Object.freeze(l);const{textureWidth:n,sdfExponent:i}=zi,{sdfGlyphSize:r}=l,s=n/r*4;let a=Vc[r];if(!a){const h=document.createElement("canvas");h.width=n,h.height=r*256/s,a=Vc[r]={glyphCount:0,sdfGlyphSize:r,sdfCanvas:h,sdfTexture:new bt(h,void 0,void 0,void 0,Pt,Pt),contextLost:!1,glyphsByFont:new Map},a.sdfTexture.generateMipmaps=!1,uv(a)}const{sdfTexture:o,sdfCanvas:c}=a;let u=a.glyphsByFont.get(l.font);u||a.glyphsByFont.set(l.font,u=new Map),pv(l).then(h=>{const{glyphIds:d,glyphPositions:p,fontSize:g,unitsPerEm:_,timings:m}=h,f=[],v=new Float32Array(d.length*4),y=g/_;let x=0,b=0;const T=Ni();d.forEach((J,D)=>{let P=u.get(J);if(!P){const{path:ie,pathBounds:Z}=h.glyphData[J],H=Math.max(Z[2]-Z[0],Z[3]-Z[1])/r*(zi.sdfMargin*r+.5),j=a.glyphCount++,F=[Z[0]-H,Z[1]-H,Z[2]+H,Z[3]+H];u.set(J,P={path:ie,atlasIndex:j,sdfViewBox:F}),f.push(P)}const{sdfViewBox:I}=P,B=p[b++],q=p[b++];v[x++]=B+I[0]*y,v[x++]=q+I[1]*y,v[x++]=B+I[2]*y,v[x++]=q+I[3]*y,d[D]=P.atlasIndex}),m.quads=(m.quads||0)+(Ni()-T);const C=Ni();m.sdf={};const L=c.height,S=Math.ceil(a.glyphCount/s),E=Math.pow(2,Math.ceil(Math.log2(S*r)));E>L&&(console.info(`Increasing SDF texture size ${L}->${E}`),iv(c,n,E),o.dispose()),Promise.all(f.map(J=>Qu(J,a,l.gpuAccelerateSDF).then(({timing:D})=>{m.sdf[J.atlasIndex]=D}))).then(()=>{f.length&&!a.contextLost&&(eh(a),o.needsUpdate=!0),m.sdfTotal=Ni()-C,m.total=Ni()-t,e(Object.freeze({parameters:l,sdfTexture:o,sdfGlyphSize:r,sdfExponent:i,glyphBounds:v,glyphAtlasIndices:d,glyphColors:h.glyphColors,caretPositions:h.caretPositions,caretHeight:h.caretHeight,chunkedBounds:h.chunkedBounds,ascender:h.ascender,descender:h.descender,lineHeight:h.lineHeight,capHeight:h.capHeight,xHeight:h.xHeight,topBaseline:h.topBaseline,blockBounds:h.blockBounds,visibleBounds:h.visibleBounds,timings:h.timings}))})}),Promise.resolve().then(()=>{a.contextLost||nv(c)})}function Qu({path:l,atlasIndex:e,sdfViewBox:t},{sdfGlyphSize:n,sdfCanvas:i,contextLost:r},s){if(r)return Promise.resolve({timing:-1});const{textureWidth:a,sdfExponent:o}=zi,c=Math.max(t[2]-t[0],t[3]-t[1]),u=Math.floor(e/4),h=u%(a/n)*n,d=Math.floor(u/(a/n))*n,p=e%4;return Z_(n,n,l,t,c,o,i,h,d,p,s)}function uv(l){const e=l.sdfCanvas;e.addEventListener("webglcontextlost",t=>{console.log("Context Lost",t),t.preventDefault(),l.contextLost=!0}),e.addEventListener("webglcontextrestored",t=>{console.log("Context Restored",t),l.contextLost=!1;const n=[];l.glyphsByFont.forEach(i=>{i.forEach(r=>{n.push(Qu(r,l,!0))})}),Promise.all(n).then(()=>{eh(l),l.sdfTexture.needsUpdate=!0})})}function hv(l,e){for(let t in e)e.hasOwnProperty(t)&&(l[t]=e[t]);return l}let Ps;function dv(l){return Ps||(Ps=typeof document>"u"?{}:document.createElement("a")),Ps.href=l,Ps.href}function eh(l){if(typeof createImageBitmap!="function"){console.info("Safari<15: applying SDF canvas workaround");const{sdfCanvas:e,sdfTexture:t}=l,{width:n,height:i}=e,r=l.sdfCanvas.getContext("webgl");let s=t.image.data;(!s||s.length!==n*i*4)&&(s=new Uint8Array(n*i*4),t.image={width:n,height:i,data:s},t.flipY=!1,t.isDataTexture=!0),r.readPixels(0,0,n,i,r.RGBA,r.UNSIGNED_BYTE,s)}}const fv=Xr({name:"Typesetter",dependencies:[zi,ov,K_,G_],init(l,e,t,n){const{defaultFontURL:i}=l;return t(e,n(),{defaultFontURL:i})}}),pv=Xr({name:"Typesetter",dependencies:[fv],init(l){return function(e){return new Promise(t=>{l.typeset(e,t)})}},getTransferables(l){const e=[l.glyphPositions.buffer,l.glyphIds.buffer];return l.caretPositions&&e.push(l.caretPositions.buffer),l.glyphColors&&e.push(l.glyphColors.buffer),e}}),Hc={};function mv(l){let e=Hc[l];if(!e){const t=new er(1,1,l,l),n=t.clone(),i=t.attributes,r=n.attributes,s=new wt,a=i.uv.count;for(let o=0;o<a;o++)r.position.array[o*3]*=-1,r.normal.array[o*3+2]*=-1;["position","normal","uv"].forEach(o=>{s.setAttribute(o,new Bt([...i[o].array,...r[o].array],i[o].itemSize))}),s.setIndex([...t.index.array,...n.index.array.map(o=>o+a)]),s.translate(.5,.5,0),e=Hc[l]=s}return e}const gv="aTroikaGlyphBounds",Wc="aTroikaGlyphIndex",_v="aTroikaGlyphColor";class vv extends H0{constructor(){super(),this.detail=1,this.curveRadius=0,this.groups=[{start:0,count:1/0,materialIndex:0},{start:0,count:1/0,materialIndex:1}],this.boundingSphere=new _n,this.boundingBox=new gn}computeBoundingSphere(){}computeBoundingBox(){}setSide(e){const t=this.getIndex().count;this.setDrawRange(e===Nt?t/2:0,e===Kt?t:t/2)}set detail(e){if(e!==this._detail){this._detail=e,(typeof e!="number"||e<1)&&(e=1);let t=mv(e);["position","normal","uv"].forEach(n=>{this.attributes[n]=t.attributes[n].clone()}),this.setIndex(t.getIndex().clone())}}get detail(){return this._detail}set curveRadius(e){e!==this._curveRadius&&(this._curveRadius=e,this._updateBounds())}get curveRadius(){return this._curveRadius}updateGlyphs(e,t,n,i,r){Ha(this,gv,e,4),Ha(this,Wc,t,1),Ha(this,_v,r,3),this._blockBounds=n,this._chunkedBounds=i,this.instanceCount=t.length,this._updateBounds()}_updateBounds(){const e=this._blockBounds;if(e){const{curveRadius:t,boundingBox:n}=this;if(t){const{PI:i,floor:r,min:s,max:a,sin:o,cos:c}=Math,u=i/2,h=i*2,d=Math.abs(t),p=e[0]/d,g=e[2]/d,_=r((p+u)/h)!==r((g+u)/h)?-d:s(o(p)*d,o(g)*d),m=r((p-u)/h)!==r((g-u)/h)?d:a(o(p)*d,o(g)*d),f=r((p+i)/h)!==r((g+i)/h)?d*2:a(d-c(p)*d,d-c(g)*d);n.min.set(_,e[1],t<0?-f:0),n.max.set(m,e[3],t<0?0:f)}else n.min.set(e[0],e[1],0),n.max.set(e[2],e[3],0);n.getBoundingSphere(this.boundingSphere)}}applyClipRect(e){let t=this.getAttribute(Wc).count,n=this._chunkedBounds;if(n)for(let i=n.length;i--;){t=n[i].end;let r=n[i].rect;if(r[1]<e.w&&r[3]>e.y&&r[0]<e.z&&r[2]>e.x)break}this.instanceCount=t}}function Ha(l,e,t,n){const i=l.getAttribute(e);t?i&&i.array.length===t.length?(i.array.set(t),i.needsUpdate=!0):(l.setAttribute(e,new no(t,n)),delete l._maxInstanceCount,l.dispose()):i&&l.deleteAttribute(e)}const xv=`
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
`,yv=`
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
`,bv=`
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
`,Mv=`
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
`;function Sv(l){const e=uo(l,{chained:!0,extensions:{derivatives:!0},uniforms:{uTroikaSDFTexture:{value:null},uTroikaSDFTextureSize:{value:new Ue},uTroikaSDFGlyphSize:{value:0},uTroikaSDFExponent:{value:0},uTroikaTotalBounds:{value:new at(0,0,0,0)},uTroikaClipRect:{value:new at(0,0,0,0)},uTroikaDistanceOffset:{value:0},uTroikaOutlineOpacity:{value:0},uTroikaFillOpacity:{value:1},uTroikaPositionOffset:{value:new Ue},uTroikaCurveRadius:{value:0},uTroikaBlurRadius:{value:0},uTroikaStrokeWidth:{value:0},uTroikaStrokeColor:{value:new Be},uTroikaStrokeOpacity:{value:1},uTroikaOrient:{value:new Ke},uTroikaUseGlyphColors:{value:!0},uTroikaSDFDebug:{value:!1}},vertexDefs:xv,vertexTransform:yv,fragmentDefs:bv,fragmentColorTransform:Mv,customRewriter({vertexShader:t,fragmentShader:n}){let i=/\buniform\s+vec3\s+diffuse\b/;return i.test(n)&&(n=n.replace(i,"varying vec3 vTroikaGlyphColor").replace(/\bdiffuse\b/g,"vTroikaGlyphColor"),i.test(t)||(t=t.replace(Ju,`uniform vec3 diffuse;
$&
vTroikaGlyphColor = uTroikaUseGlyphColors ? aTroikaGlyphColor / 255.0 : diffuse;
`))),{vertexShader:t,fragmentShader:n}}});return e.transparent=!0,Object.defineProperties(e,{isTroikaTextMaterial:{value:!0},shadowSide:{get(){return this.side},set(){}}}),e}const Co=new Ln({color:16777215,side:Kt,transparent:!0}),jc=8421504,Xc=new Xe,Ds=new k,Wa=new k,Cr=[],wv=new k,ja="+x+y";function Yc(l){return Array.isArray(l)?l[0]:l}let th=()=>{const l=new It(new er(1,1),Co);return th=()=>l,l},nh=()=>{const l=new It(new er(1,1,32,1),Co);return nh=()=>l,l};const Tv={type:"syncstart"},Av={type:"synccomplete"},ih=["font","fontSize","letterSpacing","lineHeight","maxWidth","overflowWrap","text","direction","textAlign","textIndent","whiteSpace","anchorX","anchorY","colorRanges","sdfGlyphSize"],Ev=ih.concat("material","color","depthOffset","clipRect","curveRadius","orientation","glyphGeometryDetail");class fo extends It{constructor(){const e=new vv;super(e,null),this.text="",this.anchorX=0,this.anchorY=0,this.curveRadius=0,this.direction="auto",this.font=null,this.fontSize=.1,this.letterSpacing=0,this.lineHeight="normal",this.maxWidth=1/0,this.overflowWrap="normal",this.textAlign="left",this.textIndent=0,this.whiteSpace="normal",this.material=null,this.color=null,this.colorRanges=null,this.outlineWidth=0,this.outlineColor=0,this.outlineOpacity=1,this.outlineBlur=0,this.outlineOffsetX=0,this.outlineOffsetY=0,this.strokeWidth=0,this.strokeColor=jc,this.strokeOpacity=1,this.fillOpacity=1,this.depthOffset=0,this.clipRect=null,this.orientation=ja,this.glyphGeometryDetail=1,this.sdfGlyphSize=null,this.gpuAccelerateSDF=!0,this.debugSDF=!1}sync(e){this._needsSync&&(this._needsSync=!1,this._isSyncing?(this._queuedSyncs||(this._queuedSyncs=[])).push(e):(this._isSyncing=!0,this.dispatchEvent(Tv),cv({text:this.text,font:this.font,fontSize:this.fontSize||.1,letterSpacing:this.letterSpacing||0,lineHeight:this.lineHeight||"normal",maxWidth:this.maxWidth,direction:this.direction||"auto",textAlign:this.textAlign,textIndent:this.textIndent,whiteSpace:this.whiteSpace,overflowWrap:this.overflowWrap,anchorX:this.anchorX,anchorY:this.anchorY,colorRanges:this.colorRanges,includeCaretPositions:!0,sdfGlyphSize:this.sdfGlyphSize,gpuAccelerateSDF:this.gpuAccelerateSDF},t=>{this._isSyncing=!1,this._textRenderInfo=t,this.geometry.updateGlyphs(t.glyphBounds,t.glyphAtlasIndices,t.blockBounds,t.chunkedBounds,t.glyphColors);const n=this._queuedSyncs;n&&(this._queuedSyncs=null,this._needsSync=!0,this.sync(()=>{n.forEach(i=>i&&i())})),this.dispatchEvent(Av),e&&e()})))}onBeforeRender(e,t,n,i,r,s){this.sync(),r.isTroikaTextMaterial&&this._prepareForRender(r),r._hadOwnSide=r.hasOwnProperty("side"),this.geometry.setSide(r._actualSide=r.side),r.side=mn}onAfterRender(e,t,n,i,r,s){r._hadOwnSide?r.side=r._actualSide:delete r.side}dispose(){this.geometry.dispose()}get textRenderInfo(){return this._textRenderInfo||null}get material(){let e=this._derivedMaterial;const t=this._baseMaterial||this._defaultMaterial||(this._defaultMaterial=Co.clone());if((!e||e.baseMaterial!==t)&&(e=this._derivedMaterial=Sv(t),t.addEventListener("dispose",function n(){t.removeEventListener("dispose",n),e.dispose()})),this.outlineWidth||this.outlineBlur||this.outlineOffsetX||this.outlineOffsetY){let n=e._outlineMtl;return n||(n=e._outlineMtl=Object.create(e,{id:{value:e.id+.1}}),n.isTextOutlineMaterial=!0,n.depthWrite=!1,n.map=null,e.addEventListener("dispose",function i(){e.removeEventListener("dispose",i),n.dispose()})),[n,e]}else return e}set material(e){e&&e.isTroikaTextMaterial?(this._derivedMaterial=e,this._baseMaterial=e.baseMaterial):this._baseMaterial=e}get glyphGeometryDetail(){return this.geometry.detail}set glyphGeometryDetail(e){this.geometry.detail=e}get curveRadius(){return this.geometry.curveRadius}set curveRadius(e){this.geometry.curveRadius=e}get customDepthMaterial(){return Yc(this.material).getDepthMaterial()}get customDistanceMaterial(){return Yc(this.material).getDistanceMaterial()}_prepareForRender(e){const t=e.isTextOutlineMaterial,n=e.uniforms,i=this.textRenderInfo;if(i){const{sdfTexture:a,blockBounds:o}=i;n.uTroikaSDFTexture.value=a,n.uTroikaSDFTextureSize.value.set(a.image.width,a.image.height),n.uTroikaSDFGlyphSize.value=i.sdfGlyphSize,n.uTroikaSDFExponent.value=i.sdfExponent,n.uTroikaTotalBounds.value.fromArray(o),n.uTroikaUseGlyphColors.value=!t&&!!i.glyphColors;let c=0,u=0,h=0,d,p,g,_=0,m=0;if(t){let{outlineWidth:v,outlineOffsetX:y,outlineOffsetY:x,outlineBlur:b,outlineOpacity:T}=this;c=this._parsePercent(v)||0,u=Math.max(0,this._parsePercent(b)||0),d=T,_=this._parsePercent(y)||0,m=this._parsePercent(x)||0}else h=Math.max(0,this._parsePercent(this.strokeWidth)||0),h&&(g=this.strokeColor,n.uTroikaStrokeColor.value.set(g??jc),p=this.strokeOpacity,p==null&&(p=1)),d=this.fillOpacity;n.uTroikaDistanceOffset.value=c,n.uTroikaPositionOffset.value.set(_,m),n.uTroikaBlurRadius.value=u,n.uTroikaStrokeWidth.value=h,n.uTroikaStrokeOpacity.value=p,n.uTroikaFillOpacity.value=d??1,n.uTroikaCurveRadius.value=this.curveRadius||0;let f=this.clipRect;if(f&&Array.isArray(f)&&f.length===4)n.uTroikaClipRect.value.fromArray(f);else{const v=(this.fontSize||.1)*100;n.uTroikaClipRect.value.set(o[0]-v,o[1]-v,o[2]+v,o[3]+v)}this.geometry.applyClipRect(n.uTroikaClipRect.value)}n.uTroikaSDFDebug.value=!!this.debugSDF,e.polygonOffset=!!this.depthOffset,e.polygonOffsetFactor=e.polygonOffsetUnits=this.depthOffset||0;const r=t?this.outlineColor||0:this.color;if(r==null)delete e.color;else{const a=e.hasOwnProperty("color")?e.color:e.color=new Be;(r!==a._input||typeof r=="object")&&a.set(a._input=r)}let s=this.orientation||ja;if(s!==e._orientation){let a=n.uTroikaOrient.value;s=s.replace(/[^-+xyz]/g,"");let o=s!==ja&&s.match(/^([-+])([xyz])([-+])([xyz])$/);if(o){let[,c,u,h,d]=o;Ds.set(0,0,0)[u]=c==="-"?1:-1,Wa.set(0,0,0)[d]=h==="-"?-1:1,Xc.lookAt(wv,Ds.cross(Wa),Wa),a.setFromMatrix4(Xc)}else a.identity();e._orientation=s}}_parsePercent(e){if(typeof e=="string"){let t=e.match(/^(-?[\d.]+)%$/),n=t?parseFloat(t[1]):NaN;e=(isNaN(n)?0:n/100)*this.fontSize}return e}localPositionToTextCoords(e,t=new Ue){t.copy(e);const n=this.curveRadius;return n&&(t.x=Math.atan2(e.x,Math.abs(n)-Math.abs(e.z))*Math.abs(n)),t}worldPositionToTextCoords(e,t=new Ue){return Ds.copy(e),this.localPositionToTextCoords(this.worldToLocal(Ds),t)}raycast(e,t){const{textRenderInfo:n,curveRadius:i}=this;if(n){const r=n.blockBounds,s=i?nh():th(),a=s.geometry,{position:o,uv:c}=a.attributes;for(let u=0;u<c.count;u++){let h=r[0]+c.getX(u)*(r[2]-r[0]);const d=r[1]+c.getY(u)*(r[3]-r[1]);let p=0;i&&(p=i-Math.cos(h/i)*i,h=Math.sin(h/i)*i),o.setXYZ(u,h,d,p)}a.boundingSphere=this.geometry.boundingSphere,a.boundingBox=this.geometry.boundingBox,s.matrixWorld=this.matrixWorld,s.material.side=this.material.side,Cr.length=0,s.raycast(e,Cr);for(let u=0;u<Cr.length;u++)Cr[u].object=this,t.push(Cr[u])}}copy(e){const t=this.geometry;return super.copy(e),this.geometry=t,Ev.forEach(n=>{this[n]=e[n]}),this}clone(){return new this.constructor().copy(this)}}ih.forEach(l=>{const e="_private_"+l;Object.defineProperty(fo.prototype,l,{get(){return this[e]},set(t){t!==this[e]&&(this[e]=t,this._needsSync=!0)}})});class Cv{constructor(e){we(this,"name");we(this,"topGrp");we(this,"tree");we(this,"_flat");we(this,"isSingleSun");we(this,"radius");this.tree=e.tree,this.name=e.name,this.isSingleSun=e.isSingleSun,this.topGrp=new $t,this.tree.forEach(t=>this.topGrp.add(t.object.parentGrp)),this._flat=e.flat,this.radius=this.getRadius()}getRadius(){return this.mainSequenceObjects().reduce((e,t)=>e.dist>t.dist?e:t).dist}getById(e){return this._flat.reduce((t,n)=>t.data.id===e?t:n)}get flat(){return this._flat}oortCloud(){return this._flat.reduce((e,t)=>e.data.type==="oortcloud"?e:t)}suns(){return this._flat.filter(e=>e.data.type.includes("sun"))}mainSequenceObjects(){return this._flat.filter(e=>e.data.type.includes("sun")||e.data.type.includes("planet")||e.data.type.includes("moon"))}init(){this.radius=this.getRadius();const e=this.oortCloud().distanceEnd/ke.DISTANCE_SCALE;this.suns().forEach(t=>t.lightRadius=e),this.tree.forEach(t=>t.init())}initWorld(e){this.init(),e.scene.add(this.topGrp)}update(e){this.tree.forEach(t=>t.update(e))}}const qc=Math.PI/180;function Lv(l,e,t){return Math.max(e,Math.min(t,l))}function Rv(l,e,t,n,i){return n+(l-e)*(i-n)/(t-e)}class Pv{constructor(e){we(this,"name");we(this,"type");we(this,"tilt");we(this,"parent");we(this,"radius");we(this,"orbitalPeriod");we(this,"rotationPeriod");we(this,"distanceToParent");we(this,"angularRotVel");we(this,"angularOrbVel");we(this,"drawRadius");we(this,"texts");we(this,"id");this.id=e.id,this.name=e.name,this.type=e.type,this.texts=e.texts,this.radius=e.radius||1,this.tilt=e.tilt||0,this.parent=e.parent,this.orbitalPeriod=e.orbitalPeriod||1,this.rotationPeriod=e.rotationPeriod||1,this.distanceToParent=e.distanceToParent||0,this.drawRadius=e.drawRadius;let t=this.rotationPeriod*60*60;this.angularRotVel=2*Math.PI/t,t=this.orbitalPeriod*60*60,this.angularOrbVel=2*Math.PI/t}invertAngularRotVel(){this.angularRotVel*=-1}invertAngularOrbVel(){this.angularOrbVel*=-1}get dist(){return this.distanceToParent?this.distanceToParent/ke.DISTANCE_SCALE:null}}class Dv{constructor(e){we(this,"parentGrp");we(this,"masterGrp");we(this,"meshGrp");we(this,"atmo");we(this,"mesh");we(this,"orbit");we(this,"markerSprite");we(this,"displayInfo");this.parentGrp=e.parentGrp,this.masterGrp=e.masterGrp,this.meshGrp=e.meshGrp,this.atmo=e.atmo,this.mesh=e.mesh,this.orbit=e.orbit,this.markerSprite=e.markerSprite,this.displayInfo=e.displayInfo==null?!0:e.displayInfo}}class Iv{constructor(e){we(this,"data");we(this,"object");we(this,"satellites");this.data=e.data,this.object=e.object,this.satellites=e.satellites}initSatellites(e){var t;(t=this.satellites)==null||t.forEach(n=>n.init(e))}updateSatellites(e,t){var n;(n=this.satellites)==null||n.forEach(i=>i.update(e,t))}get drawRadius(){return this.data.radius/ke.SIZE_SCALE}get dist(){return this.data.distanceToParent?this.data.distanceToParent/ke.DISTANCE_SCALE:void 0}}class Uv extends Iv{constructor(t,n){super(t);we(this,"light");we(this,"lightRadius");we(this,"disableLight");this.disableLight=n,n||(this.lightRadius=1,this.light=new To("#ffffff",1,this.lightRadius),this.light.castShadow=!0,this.light.shadow.radius=4,this.light.shadow.camera.near=.5,this.light.shadow.camera.far=1e5,this.light.shadow.mapSize.width=2048,this.light.shadow.mapSize.height=2048,this.object.masterGrp.add(this.light))}init(){this.object.masterGrp.traverse(t=>t.userData.id=this.data.id),this.disableLight||(this.light.distance=this.lightRadius),this.initSatellites(this)}update(t){"uniforms"in this.object.mesh.material&&(this.object.mesh.material.uniforms.time.value+=.001),this.updateSatellites(t,this)}}function Ov(l){if(!(l.parent instanceof Uu)&&!l.name.includes("_masterGrp"))for(;l.parent instanceof $t;){if(l=l.parent,l.name.includes("_masterGrp"))break;if(l.name.includes("_parentGrp")){l=l.children.reduce((e,t)=>e.name.includes("_masterGrp")?e:t);break}}return l}function Fv(){return`10000000-1000-4000-8000${-1e11}`.replace(/[018]/g,e=>{const t=parseInt(e);return(t^crypto.getRandomValues(new Uint8Array(1))[0]&15>>t/4).toString(16)})}function Nv(l){const e=l.domElement,t=e.clientWidth,n=e.clientHeight,i=e.width!==t||e.height!==n;return i&&l.setSize(t,n,!1),i}const kv=`// Code from:
// https://bpodgursky.com/2017/02/01/procedural-star-rendering-with-three-js-and-webgl-shaders/

varying vec3 vTexCoord3D;

uniform float highTemp;
uniform float lowTemp;

uniform float time;

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


  }
`,Bv=`varying vec2 vUv;
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
}`,zv=new Mo(1,20,20);function Gv(l){ke.LOAD_MANAGER.itemStart(`://${l.name}_planet`);const e=Vv(l),t=new It(zv,e);t.scale.setScalar(l.radius/ke.SIZE_SCALE),t.name=`${l.name}_mesh`;const n=new $t;n.name=`${l.name}_meshGrp`,n.add(t);const i=new $t,r=new $t;i.name=`${l.name}_masterGrp`,r.name=`${l.name}_parentGrp`,i.add(n),r.add(i);const s=new Pv({id:Fv(),name:l.name,type:l.type,tilt:l.tilt,parent:l.parent,radius:l.radius,texts:l.texts,orbitalPeriod:l.orbitalPeriod,rotationPeriod:l.rotationPeriod,distanceToParent:l.distanceToParent,drawRadius:l.draw.radius}),a=new Dv({parentGrp:r,masterGrp:i,meshGrp:n,mesh:t,displayInfo:l.displayInfo}),o=new Uv({data:s,object:a},l.disableLight);return ke.LOAD_MANAGER.itemEnd(`://${l.name}_planet`),o}const Vv=l=>l.isSimple?new Ln({color:l.color?l.color:16777215}):new Hn({uniforms:{time:{value:1},scale:{value:2.5},highTemp:{value:l.highTemp},lowTemp:{value:l.lowTemp}},vertexShader:Bv,fragmentShader:kv}),Hv=new nr({color:"#ffffff",transparent:!0,opacity:.2}),Wv=new nr({color:"#ffffff",transparent:!0,opacity:.075}),Is=new wt,Kc=[],Zc=[],jv=new k(0,0,0),Xv=[{isSimple:!1,color:"red",name:"Epsilon Eridani",radius:2200,hTemp:5e3,lTemp:4e3,texts:["Yellowstone [GRUBS]","- Marcos Eye","Tangerine Dream","Conjoiner Nest","- Conjoiner Comet"]},{isSimple:!1,color:"red",name:"p Eridani",radius:2200,hTemp:5100,lTemp:1500,texts:["Ararat [PATTERN JUGGLERS, NESTBUILDERS]"]},{isSimple:!1,color:"red",name:"Delta Pavonis",radius:3600,hTemp:7e3,lTemp:3e3,texts:["Resurgam [AMARATIN]","Hades [HADES MATRIX CIVILISATION]","- Cerberus [INHIBITORS, AMARATIN, CERBERUS CIVILISATION]","ROC"]},{isSimple:!1,color:"red",name:"Lacaille 9352",radius:2e3,hTemp:4e3,lTemp:3e3,texts:["Fand"]},{isSimple:!1,color:"red",name:"Luyten 726-8",radius:500,hTemp:2e3,lTemp:900,texts:["Luyten 726-8 Cometary Halo"]},{isSimple:!1,color:"red",name:"Ross 248",radius:1e3,hTemp:2e3,lTemp:900,texts:["Diadem"]},{isSimple:!1,color:"red",name:"61 Cygni",radius:2e3,hTemp:3e3,lTemp:500,texts:["Sky's Edge"]},{isSimple:!1,color:"red",name:"Lalande 21185",radius:1250,hTemp:3e3,lTemp:500,texts:["Zion"]},{isSimple:!1,color:"red",name:"Gliese 687",radius:1560,hTemp:3e3,lTemp:500,texts:["Haven"]},{isSimple:!1,color:"red",name:"Groombridge 1618",radius:1450,hTemp:5e3,lTemp:500,texts:["Turquoise [PATTERN JUGGLERS]"]},{isSimple:!1,color:"red",name:"107 Piscium",radius:3e3,hTemp:1e4,lTemp:500,texts:["Haldora [SHADOWS]","- Hela [SCUTTLERS, NESTBUILDERS(?)]"]}],Yv=[{x:1e3,y:300,rotY:Math.PI*2.1,textsHeight:250},{x:1200,y:2e3,rotY:Math.PI*-1.9*-1,textsHeight:60},{x:750,y:2150,rotY:Math.PI/2*-1,textsHeight:175},{x:1e3,y:800,rotY:Math.PI*1.65,textsHeight:60},{x:800,y:500,rotY:Math.PI*1.9,textsHeight:60},{x:834,y:-800,rotY:Math.PI*1.72,textsHeight:60},{x:626,y:-1e3,rotY:Math.PI*1.578,textsHeight:80},{x:550,y:-800,rotY:Math.PI*.75,textsHeight:70},{x:400,y:-1900,rotY:Math.PI*1.3,textsHeight:70},{x:857,y:-1734,rotY:Math.PI*.689,textsHeight:-70},{x:2222,y:-1200,rotY:Math.PI*-.1,textsHeight:125}];class xt extends Cv{constructor(t){super(t);we(this,"_mainArea");this._mainArea=document.getElementById("cosmicMapTItle"),this._mainArea.ontransitionend=n=>{const i=n.target.style.visibility;n.target.style.visibility=i=="visible"?"hidden":"visible"}}set textOpacity(t){this._mainArea.style.opacity=t.toString(),this._mainArea.style.visibility=t<=0?"hidden":"visible"}update(t){super.update(t);let n=t.cam.active.position.distanceTo(jv);n=Lv(n,8e3,1e4),n=Rv(n,8e3,1e4,0,1),this.textOpacity!=n&&(this.textOpacity=n)}static buildSun(t){return Gv({name:t.name,type:"sun",radius:t.radius,rotationPeriod:0,orbitalPeriod:0,highTemp:t.hTemp,lowTemp:t.lTemp,distanceToParent:1,tilt:0,parent:"",draw:{radius:1},isSimple:t.isSimple,color:t.color,disableLight:!0,texts:t.texts,displayInfo:!1})}static buildLine(t,n,i){(i?Kc:Zc).push(t.clone(),n.clone())}static buildDiskLine(t,n){t.object.masterGrp.position.x-=n.x,t.object.masterGrp.position.y-=n.y,t.object.parentGrp.rotateY(n.rotY),t.object.masterGrp.getWorldPosition(ke.WORLD_POS);const i=ke.WORLD_POS.clone();return i.y+=n.y,xt.buildLine(ke.WORLD_POS.clone(),i,!0)}static buildObjectLine(t,n){const i=t.object.masterGrp.getWorldPosition(ke.WORLD_POS).clone(),r=n.object.masterGrp.getWorldPosition(ke.WORLD_POS);return xt.buildLine(i,r,!1)}static buildNameTag(t,n,i=25,r,s=50,a,o){const c=t.object.masterGrp.getWorldPosition(ke.WORLD_POS);c.x-=n;const u=new fo;return u.text=r??t.data.name,u.fontSize=s,u.color=16777215,u.rotateY(a??Math.PI*.85),u.position.copy(c),u.position.y+=i,u.fillOpacity=o??1,u.font="./Open_Sans/static/OpenSans-Light.ttf",u}static buildLyRings(t){const i=[];for(let _=0;_<=360;_++)i.push(new k(100*Math.sin(_*qc),0,100*Math.cos(_*qc)));const s=new wt;s.setFromPoints(i);const a=new nr({color:"#ffffff",transparent:!0,opacity:.45}),o=new Wi(s,a),c=s.clone();c.scale(5,1,5);const u=new Wi(c,a),h=s.clone();h.scale(15,1,15);const d=new Wi(h,a);o.userData.title="1LY",u.userData.title="5LY",d.userData.title="15LY";const p=[[o,1],[u,5],[d,15]],g=40;p.forEach(_=>{const m=_[0],f=_[1],v=new fo;v.text=m.userData.title,v.fontSize=g,v.color=16777215,v.position.x+=100*f+g+10,v.position.y+=g,v.rotateY(Math.PI),m.add(v)}),t.object.masterGrp.add(o),t.object.masterGrp.add(u),t.object.masterGrp.add(d)}static setupSun(t,n,i){xt.buildDiskLine(n,i),t.topGrp.add(xt.buildNameTag(n,25)),t.topGrp.add(xt.buildNameTag(n,10,i.textsHeight!=null?i.textsHeight:250,n.data.texts.join(`
`),27.5,Math.PI,.35))}static connectSuns(t,n){n.forEach(i=>xt.buildObjectLine(t,i))}static build(){const t=xt.buildSun({name:"Sol",radius:3e3,hTemp:7100,lTemp:3100});xt.buildLyRings(t);const n=Xv.map(o=>xt.buildSun(o)),i=[t,...n],r={tree:i,flat:i,isSingleSun:!0,name:"cosmicMap"},s=new xt(r);s.topGrp.add(xt.buildNameTag(t,25)),s.topGrp.add(xt.buildNameTag(t,-25,-50,["Earth","- Moon","Mars","- Phobos","Europa"].join(`
`),27.5,Math.PI,.35)),Yv.forEach((o,c)=>xt.setupSun(s,n[c],o)),xt.connectSuns(t,n.filter(o=>["Ross 248","61 Cygni"].includes(o.data.name))),xt.connectSuns(n.reduce((o,c)=>o.data.name=="p Eridani"?o:c),n.filter(o=>["Delta Pavonis"].includes(o.data.name))),xt.connectSuns(n.reduce((o,c)=>o.data.name=="Epsilon Eridani"?o:c),n.filter(o=>["p Eridani","Delta Pavonis","61 Cygni","107 Piscium"].includes(o.data.name))),Is.setFromPoints(Kc),t.object.parentGrp.add(new Vs(Is.clone(),Hv)),Is.setFromPoints(Zc),t.object.parentGrp.add(new Vs(Is,Wv));const a=new To("#ffffff",1,1e3);return a.castShadow=!0,a.shadow.radius=4,a.shadow.camera.near=.5,a.shadow.camera.far=1e5,a.shadow.mapSize.width=2048,a.shadow.mapSize.height=2048,s.topGrp.add(a),s}}function qv(){const l=ke.TEX_LOAD("./circle-info-solid.svg"),e=new Fu({map:l});return new _0(e)}class Kv{constructor(){we(this,"_sprites")}build(e){this._sprites=e.map(t=>{const n=qv();return n.name=`${t.data.name}_infoSprite`,t.object.parentGrp.add(n),[n,t]})}init(){this._sprites.forEach(([e,t])=>{const n=t.object.orbit&&t.object.orbit.scale.x>0?-1:1,i=t.drawRadius/6.5;e.scale.setScalar(i),e.position.copy(t.object.masterGrp.position).x+=(t.drawRadius+i)*n})}}const Jc=`
• `;class Zv{constructor(e){we(this,"_parentPanel");we(this,"_titlePanel");we(this,"_titleSunPanel");we(this,"_textPanel");we(this,"_footerPanel");we(this,"_visible");we(this,"_fullTexts");we(this,"_textMap");we(this,"_spriteManager");this.genTexts(e),this._spriteManager=new Kv,this._parentPanel=document.getElementById("parent"),this._titlePanel=document.getElementById("title"),this._titleSunPanel=document.getElementById("title_parent"),this._textPanel=document.getElementById("text"),this._footerPanel=document.getElementById("footer")}get visible(){return this._visible}set visible(e){this._visible=e;const t=this._visible?"visible":"hidden";this._parentPanel.style.setProperty("visibility",t,"important")}init(e){const t=e.flat.filter(n=>(n.data.name in this._textMap||n.data.type=="sun")&&n.object.displayInfo);t.length!=0&&(this._spriteManager.build(t),this._spriteManager.init())}show(e){this.writeTitle(e.data.name,e.data.parent||"null"),e.data.name in this._textMap?this.writeText(this._textMap[e.data.name]):e.data.type=="sun"&&this.writeText(this._fullTexts),this.visible=!0}showAll(e){this.writeTitle(e.name,""),this.writeText(this._fullTexts),this.visible=!0}genTexts(e){const t={};e.forEach(i=>{const r=this.formatTexts(i.texts,!1);t[i.name]=r.join(`
\r`)}),this._textMap=t;const n=e.map(i=>this.formatTexts(i.texts,!1,this.capitalize(i.name))).flat().sort((i,r)=>{const s=parseInt(this.getFirstYear(this.splitWord(i)[0])),a=parseInt(this.getFirstYear(this.splitWord(r)[0]));return s-a});this._fullTexts=n.join(`
\r`)}getFirstYear(e){return e.match(/(\d+)\D/)[0]}capitalize(e){return e.charAt(0).toUpperCase()+e.slice(1)}splitWord(e){return e.split(/(?=[A-Z])/)}toTitle(e){return this.splitWord(e).map(t=>this.capitalize(t)).join(" ")}formatTexts(e,t=!0,n=!1){return e=e.map(i=>{const r=i.split(`
`);return n&&(r[0]=`${r[0]} (${n})`),`${r[0]}${Jc}${r.slice(1).join(Jc)}`}),t?e.join(`
\r`):e}writeTitle(e,t){this._titlePanel.textContent=this.toTitle(e),this._titleSunPanel.textContent=this.toTitle(t)}writeText(e){this._textPanel.textContent=e}}class Jv{constructor(){we(this,"_loading");we(this,"_progress");we(this,"_startBtn");we(this,"onclick");we(this,"_visible");this._loading=document.getElementById("loading"),this._progress=document.getElementById("progress"),this._startBtn=document.getElementById("startBtn"),this._startBtn.onclick=e=>this.onclick(e)}get visible(){return this._visible}set visible(e){this._loading.style.visibility=e?"visible":"hidden",this.startBtnvisible=e,this._visible=e}get startBtnvisible(){return this._startBtn.style.visibility=="visible"}set startBtnvisible(e){this._startBtn.style.visibility=e?"visible":"hidden"}set progress(e){this._progress.value=e}}/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.18.1
 * @author George Michael Brower
 * @license MIT
 */class pn{constructor(e,t,n,i,r="div"){this.parent=e,this.object=t,this.property=n,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement("div"),this.domElement.classList.add("controller"),this.domElement.classList.add(i),this.$name=document.createElement("div"),this.$name.classList.add("name"),pn.nextNameID=pn.nextNameID||0,this.$name.id=`lil-gui-name-${++pn.nextNameID}`,this.$widget=document.createElement(r),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(n)}name(e){return this._name=e,this.$name.innerHTML=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled?this:(this._disabled=e,this.domElement.classList.toggle("disabled",e),this.$disable.toggleAttribute("disabled",e),this)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(e){const t=this.parent.add(this.object,this.property,e);return t.name(this._name),this.destroy(),t}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.object[this.property]=e,this._callOnChange(),this.updateDisplay(),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class $v extends pn{constructor(e,t,n){super(e,t,n,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function po(l){let e,t;return(e=l.match(/(#|0x)?([a-f0-9]{6})/i))?t=e[2]:(e=l.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?t=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=l.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(t=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),t?"#"+t:!1}const Qv={isPrimitive:!0,match:l=>typeof l=="string",fromHexString:po,toHexString:po},Vr={isPrimitive:!0,match:l=>typeof l=="number",fromHexString:l=>parseInt(l.substring(1),16),toHexString:l=>"#"+l.toString(16).padStart(6,0)},ex={isPrimitive:!1,match:l=>Array.isArray(l),fromHexString(l,e,t=1){const n=Vr.fromHexString(l);e[0]=(n>>16&255)/255*t,e[1]=(n>>8&255)/255*t,e[2]=(n&255)/255*t},toHexString([l,e,t],n=1){n=255/n;const i=l*n<<16^e*n<<8^t*n<<0;return Vr.toHexString(i)}},tx={isPrimitive:!1,match:l=>Object(l)===l,fromHexString(l,e,t=1){const n=Vr.fromHexString(l);e.r=(n>>16&255)/255*t,e.g=(n>>8&255)/255*t,e.b=(n&255)/255*t},toHexString({r:l,g:e,b:t},n=1){n=255/n;const i=l*n<<16^e*n<<8^t*n<<0;return Vr.toHexString(i)}},nx=[Qv,Vr,ex,tx];function ix(l){return nx.find(e=>e.match(l))}class rx extends pn{constructor(e,t,n,i){super(e,t,n,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=ix(this.initialValue),this._rgbScale=i,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const r=po(this.$text.value);r&&this._setValueFromHexString(r)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){const t=this._format.fromHexString(e);this.setValue(t)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class Xa extends pn{constructor(e,t,n){super(e,t,n,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",i=>{i.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class sx extends pn{constructor(e,t,n,i,r,s){super(e,t,n,"number"),this._initInput(),this.min(i),this.max(r);const a=s!==void 0;this.step(a?s:this._getImplicitStep(),a),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,t=!0){return this._step=e,this._stepExplicit=t,this}updateDisplay(){const e=this.getValue();if(this._hasSlider){let t=(e-this._min)/(this._max-this._min);t=Math.max(0,Math.min(t,1)),this.$fill.style.width=t*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$disable=this.$input;const e=()=>{let f=parseFloat(this.$input.value);isNaN(f)||(this._stepExplicit&&(f=this._snap(f)),this.setValue(this._clamp(f)))},t=f=>{const v=parseFloat(this.$input.value);isNaN(v)||(this._snapClampSetValue(v+f),this.$input.value=this.getValue())},n=f=>{f.code==="Enter"&&this.$input.blur(),f.code==="ArrowUp"&&(f.preventDefault(),t(this._step*this._arrowKeyMultiplier(f))),f.code==="ArrowDown"&&(f.preventDefault(),t(this._step*this._arrowKeyMultiplier(f)*-1))},i=f=>{this._inputFocused&&(f.preventDefault(),t(this._step*this._normalizeMouseWheel(f)))};let r=!1,s,a,o,c,u;const h=5,d=f=>{s=f.clientX,a=o=f.clientY,r=!0,c=this.getValue(),u=0,window.addEventListener("mousemove",p),window.addEventListener("mouseup",g)},p=f=>{if(r){const v=f.clientX-s,y=f.clientY-a;Math.abs(y)>h?(f.preventDefault(),this.$input.blur(),r=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(v)>h&&g()}if(!r){const v=f.clientY-o;u-=v*this._step*this._arrowKeyMultiplier(f),c+u>this._max?u=this._max-c:c+u<this._min&&(u=this._min-c),this._snapClampSetValue(c+u)}o=f.clientY},g=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",p),window.removeEventListener("mouseup",g)},_=()=>{this._inputFocused=!0},m=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",e),this.$input.addEventListener("keydown",n),this.$input.addEventListener("wheel",i,{passive:!1}),this.$input.addEventListener("mousedown",d),this.$input.addEventListener("focus",_),this.$input.addEventListener("blur",m)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const e=(f,v,y,x,b)=>(f-v)/(y-v)*(b-x)+x,t=f=>{const v=this.$slider.getBoundingClientRect();let y=e(f,v.left,v.right,this._min,this._max);this._snapClampSetValue(y)},n=f=>{this._setDraggingStyle(!0),t(f.clientX),window.addEventListener("mousemove",i),window.addEventListener("mouseup",r)},i=f=>{t(f.clientX)},r=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",i),window.removeEventListener("mouseup",r)};let s=!1,a,o;const c=f=>{f.preventDefault(),this._setDraggingStyle(!0),t(f.touches[0].clientX),s=!1},u=f=>{f.touches.length>1||(this._hasScrollBar?(a=f.touches[0].clientX,o=f.touches[0].clientY,s=!0):c(f),window.addEventListener("touchmove",h,{passive:!1}),window.addEventListener("touchend",d))},h=f=>{if(s){const v=f.touches[0].clientX-a,y=f.touches[0].clientY-o;Math.abs(v)>Math.abs(y)?c(f):(window.removeEventListener("touchmove",h),window.removeEventListener("touchend",d))}else f.preventDefault(),t(f.touches[0].clientX)},d=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",h),window.removeEventListener("touchend",d)},p=this._callOnFinishChange.bind(this),g=400;let _;const m=f=>{if(Math.abs(f.deltaX)<Math.abs(f.deltaY)&&this._hasScrollBar)return;f.preventDefault();const y=this._normalizeMouseWheel(f)*this._step;this._snapClampSetValue(this.getValue()+y),this.$input.value=this.getValue(),clearTimeout(_),_=setTimeout(p,g)};this.$slider.addEventListener("mousedown",n),this.$slider.addEventListener("touchstart",u,{passive:!1}),this.$slider.addEventListener("wheel",m,{passive:!1})}_setDraggingStyle(e,t="horizontal"){this.$slider&&this.$slider.classList.toggle("active",e),document.body.classList.toggle("lil-gui-dragging",e),document.body.classList.toggle(`lil-gui-${t}`,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:t,deltaY:n}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(t=0,n=-e.wheelDelta/120,n*=this._stepExplicit?1:10),t+-n}_arrowKeyMultiplier(e){let t=this._stepExplicit?1:10;return e.shiftKey?t*=10:e.altKey&&(t/=10),t}_snap(e){const t=Math.round(e/this._step)*this._step;return parseFloat(t.toPrecision(15))}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){const e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class ax extends pn{constructor(e,t,n,i){super(e,t,n,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this._values=Array.isArray(i)?i:Object.values(i),this._names=Array.isArray(i)?i:Object.keys(i),this._names.forEach(r=>{const s=document.createElement("option");s.innerHTML=r,this.$select.appendChild(s)}),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.updateDisplay()}updateDisplay(){const e=this.getValue(),t=this._values.indexOf(e);return this.$select.selectedIndex=t,this.$display.innerHTML=t===-1?e:this._names[t],this}}class ox extends pn{constructor(e,t,n){super(e,t,n,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",i=>{i.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}const lx=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  background-color: var(--background-color);
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
}
.lil-gui.root > .title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.root > .children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.root > .children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.root > .children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.allow-touch-styles {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.force-touch-styles {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-gui .controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-gui .controller.disabled {
  opacity: 0.5;
}
.lil-gui .controller.disabled, .lil-gui .controller.disabled * {
  pointer-events: none !important;
}
.lil-gui .controller > .name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-gui .controller .widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-gui .controller.string input {
  color: var(--string-color);
}
.lil-gui .controller.boolean .widget {
  cursor: pointer;
}
.lil-gui .controller.color .display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-gui .controller.color .display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-gui .controller.color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-gui .controller.color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-gui .controller.option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-gui .controller.option .display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-gui .controller.option .display.focus {
    background: var(--focus-color);
  }
}
.lil-gui .controller.option .display.active {
  background: var(--focus-color);
}
.lil-gui .controller.option .display:after {
  font-family: "lil-gui";
  content: "↕";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-gui .controller.option .widget,
.lil-gui .controller.option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-gui .controller.option .widget:hover .display {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number input {
  color: var(--number-color);
}
.lil-gui .controller.number.hasSlider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-gui .controller.number .slider {
  width: 100%;
  height: var(--widget-height);
  background-color: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-gui .controller.number .slider:hover {
    background-color: var(--hover-color);
  }
}
.lil-gui .controller.number .slider.active {
  background-color: var(--focus-color);
}
.lil-gui .controller.number .slider.active .fill {
  opacity: 0.95;
}
.lil-gui .controller.number .fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-gui-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-gui-dragging * {
  cursor: ew-resize !important;
}

.lil-gui-dragging.lil-gui-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .title {
  height: var(--title-height);
  line-height: calc(var(--title-height) - 4px);
  font-weight: 600;
  padding: 0 var(--padding);
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  outline: none;
  text-decoration-skip: objects;
}
.lil-gui .title:before {
  font-family: "lil-gui";
  content: "▾";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-gui-dragging) .lil-gui .title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.root > .title:focus {
  text-decoration: none !important;
}
.lil-gui.closed > .title:before {
  content: "▸";
}
.lil-gui.closed > .children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.closed:not(.transition) > .children {
  display: none;
}
.lil-gui.transition > .children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.root > .children > .lil-gui > .title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.root > .children > .lil-gui.closed > .title {
  border-bottom-color: transparent;
}
.lil-gui + .controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .controller {
  border: none;
}

.lil-gui input {
  -webkit-tap-highlight-color: transparent;
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input::-webkit-outer-spin-button,
.lil-gui input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.lil-gui input[type=number] {
  -moz-appearance: textfield;
}
.lil-gui input[type=checkbox] {
  appearance: none;
  -webkit-appearance: none;
  height: var(--checkbox-size);
  width: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "✓";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  -webkit-tap-highlight-color: transparent;
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  border: 1px solid var(--widget-color);
  text-align: center;
  line-height: calc(var(--widget-height) - 4px);
}
@media (hover: hover) {
  .lil-gui button:hover {
    background: var(--hover-color);
    border-color: var(--hover-color);
  }
  .lil-gui button:focus {
    border-color: var(--focus-color);
  }
}
.lil-gui button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff");
}`;function cx(l){const e=document.createElement("style");e.innerHTML=l;const t=document.querySelector("head link[rel=stylesheet], head style");t?document.head.insertBefore(e,t):document.head.appendChild(e)}let $c=!1;class Lo{constructor({parent:e,autoPlace:t=e===void 0,container:n,width:i,title:r="Controls",closeFolders:s=!1,injectStyles:a=!0,touchStyles:o=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",c=>{(c.code==="Enter"||c.code==="Space")&&(c.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(r),o&&this.domElement.classList.add("allow-touch-styles"),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),!$c&&a&&(cx(lx),$c=!0),n?n.appendChild(this.domElement):t&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),i&&this.domElement.style.setProperty("--width",i+"px"),this._closeFolders=s,this.domElement.addEventListener("keydown",c=>c.stopPropagation()),this.domElement.addEventListener("keyup",c=>c.stopPropagation())}add(e,t,n,i,r){if(Object(n)===n)return new ax(this,e,t,n);const s=e[t];switch(typeof s){case"number":return new sx(this,e,t,n,i,r);case"boolean":return new $v(this,e,t);case"string":return new ox(this,e,t);case"function":return new Xa(this,e,t)}console.error(`gui.add failed
	property:`,t,`
	object:`,e,`
	value:`,s)}addColor(e,t,n=1){return new rx(this,e,t,n)}addFolder(e){const t=new Lo({parent:this,title:e});return this.root._closeFolders&&t.close(),t}load(e,t=!0){return e.controllers&&this.controllers.forEach(n=>{n instanceof Xa||n._name in e.controllers&&n.load(e.controllers[n._name])}),t&&e.folders&&this.folders.forEach(n=>{n._title in e.folders&&n.load(e.folders[n._title])}),this}save(e=!0){const t={controllers:{},folders:{}};return this.controllers.forEach(n=>{if(!(n instanceof Xa)){if(n._name in t.controllers)throw new Error(`Cannot save GUI with duplicate property "${n._name}"`);t.controllers[n._name]=n.save()}}),e&&this.folders.forEach(n=>{if(n._title in t.folders)throw new Error(`Cannot save GUI with duplicate folder "${n._title}"`);t.folders[n._title]=n.save()}),t}open(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}_setClosed(e){this._closed!==e&&(this._closed=e,this._callOnOpenClose(this))}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const t=this.$children.clientHeight;this.$children.style.height=t+"px",this.domElement.classList.add("transition");const n=r=>{r.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",n))};this.$children.addEventListener("transitionend",n);const i=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!e),requestAnimationFrame(()=>{this.$children.style.height=i+"px"})}),this}title(e){return this._title=e,this.$title.innerHTML=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(n=>n.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onOpenClose(e){return this._onOpenClose=e,this}_callOnOpenClose(e){this.parent&&this.parent._callOnOpenClose(e),this._onOpenClose!==void 0&&this._onOpenClose.call(this,e)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(t=>{e=e.concat(t.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(t=>{e=e.concat(t.foldersRecursive())}),e}}const ux=Lo,Qc={type:"change"},Ya={type:"start"},eu={type:"end"};class hx extends oi{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new k,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:fi.ROTATE,MIDDLE:fi.DOLLY,RIGHT:fi.PAN},this.touches={ONE:pi.ROTATE,TWO:pi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(R){R.addEventListener("keydown",ye),this._domElementKeyEvents=R},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",ye),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Qc),n.update(),r=i.NONE},this.update=function(){const R=new k,ee=new Qt().setFromUnitVectors(e.up,new k(0,1,0)),K=ee.clone().invert(),ve=new k,fe=new Qt,be=2*Math.PI;return function(){const pe=n.object.position;R.copy(pe).sub(n.target),R.applyQuaternion(ee),a.setFromVector3(R),n.autoRotate&&r===i.NONE&&S(C()),n.enableDamping?(a.theta+=o.theta*n.dampingFactor,a.phi+=o.phi*n.dampingFactor):(a.theta+=o.theta,a.phi+=o.phi);let Se=n.minAzimuthAngle,Re=n.maxAzimuthAngle;return isFinite(Se)&&isFinite(Re)&&(Se<-Math.PI?Se+=be:Se>Math.PI&&(Se-=be),Re<-Math.PI?Re+=be:Re>Math.PI&&(Re-=be),Se<=Re?a.theta=Math.max(Se,Math.min(Re,a.theta)):a.theta=a.theta>(Se+Re)/2?Math.max(Se,a.theta):Math.min(Re,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=c,a.radius=Math.max(n.minDistance,Math.min(n.maxDistance,a.radius)),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),R.setFromSpherical(a),R.applyQuaternion(K),pe.copy(n.target).add(R),n.object.lookAt(n.target),n.enableDamping===!0?(o.theta*=1-n.dampingFactor,o.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(o.set(0,0,0),u.set(0,0,0)),c=1,h||ve.distanceToSquared(n.object.position)>s||8*(1-fe.dot(n.object.quaternion))>s?(n.dispatchEvent(Qc),ve.copy(n.object.position),fe.copy(n.object.quaternion),h=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",M),n.domElement.removeEventListener("pointerdown",Ce),n.domElement.removeEventListener("pointercancel",Le),n.domElement.removeEventListener("wheel",Me),n.domElement.removeEventListener("pointermove",Ae),n.domElement.removeEventListener("pointerup",Le),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",ye),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=i.NONE;const s=1e-6,a=new Ec,o=new Ec;let c=1;const u=new k;let h=!1;const d=new Ue,p=new Ue,g=new Ue,_=new Ue,m=new Ue,f=new Ue,v=new Ue,y=new Ue,x=new Ue,b=[],T={};function C(){return 2*Math.PI/60/60*n.autoRotateSpeed}function L(){return Math.pow(.95,n.zoomSpeed)}function S(R){o.theta-=R}function E(R){o.phi-=R}const J=function(){const R=new k;return function(K,ve){R.setFromMatrixColumn(ve,0),R.multiplyScalar(-K),u.add(R)}}(),D=function(){const R=new k;return function(K,ve){n.screenSpacePanning===!0?R.setFromMatrixColumn(ve,1):(R.setFromMatrixColumn(ve,0),R.crossVectors(n.object.up,R)),R.multiplyScalar(K),u.add(R)}}(),P=function(){const R=new k;return function(K,ve){const fe=n.domElement;if(n.object.isPerspectiveCamera){const be=n.object.position;R.copy(be).sub(n.target);let de=R.length();de*=Math.tan(n.object.fov/2*Math.PI/180),J(2*K*de/fe.clientHeight,n.object.matrix),D(2*ve*de/fe.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(J(K*(n.object.right-n.object.left)/n.object.zoom/fe.clientWidth,n.object.matrix),D(ve*(n.object.top-n.object.bottom)/n.object.zoom/fe.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function I(R){n.object.isPerspectiveCamera?c/=R:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*R)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function B(R){n.object.isPerspectiveCamera?c*=R:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/R)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function q(R){d.set(R.clientX,R.clientY)}function ie(R){v.set(R.clientX,R.clientY)}function Z(R){_.set(R.clientX,R.clientY)}function H(R){p.set(R.clientX,R.clientY),g.subVectors(p,d).multiplyScalar(n.rotateSpeed);const ee=n.domElement;S(2*Math.PI*g.x/ee.clientHeight),E(2*Math.PI*g.y/ee.clientHeight),d.copy(p),n.update()}function j(R){y.set(R.clientX,R.clientY),x.subVectors(y,v),x.y>0?I(L()):x.y<0&&B(L()),v.copy(y),n.update()}function F(R){m.set(R.clientX,R.clientY),f.subVectors(m,_).multiplyScalar(n.panSpeed),P(f.x,f.y),_.copy(m),n.update()}function G(R){R.deltaY<0?B(L()):R.deltaY>0&&I(L()),n.update()}function N(R){let ee=!1;switch(R.code){case n.keys.UP:R.ctrlKey||R.metaKey||R.shiftKey?E(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):P(0,n.keyPanSpeed),ee=!0;break;case n.keys.BOTTOM:R.ctrlKey||R.metaKey||R.shiftKey?E(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):P(0,-n.keyPanSpeed),ee=!0;break;case n.keys.LEFT:R.ctrlKey||R.metaKey||R.shiftKey?S(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):P(n.keyPanSpeed,0),ee=!0;break;case n.keys.RIGHT:R.ctrlKey||R.metaKey||R.shiftKey?S(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):P(-n.keyPanSpeed,0),ee=!0;break}ee&&(R.preventDefault(),n.update())}function z(){if(b.length===1)d.set(b[0].pageX,b[0].pageY);else{const R=.5*(b[0].pageX+b[1].pageX),ee=.5*(b[0].pageY+b[1].pageY);d.set(R,ee)}}function W(){if(b.length===1)_.set(b[0].pageX,b[0].pageY);else{const R=.5*(b[0].pageX+b[1].pageX),ee=.5*(b[0].pageY+b[1].pageY);_.set(R,ee)}}function Q(){const R=b[0].pageX-b[1].pageX,ee=b[0].pageY-b[1].pageY,K=Math.sqrt(R*R+ee*ee);v.set(0,K)}function U(){n.enableZoom&&Q(),n.enablePan&&W()}function re(){n.enableZoom&&Q(),n.enableRotate&&z()}function he(R){if(b.length==1)p.set(R.pageX,R.pageY);else{const K=me(R),ve=.5*(R.pageX+K.x),fe=.5*(R.pageY+K.y);p.set(ve,fe)}g.subVectors(p,d).multiplyScalar(n.rotateSpeed);const ee=n.domElement;S(2*Math.PI*g.x/ee.clientHeight),E(2*Math.PI*g.y/ee.clientHeight),d.copy(p)}function se(R){if(b.length===1)m.set(R.pageX,R.pageY);else{const ee=me(R),K=.5*(R.pageX+ee.x),ve=.5*(R.pageY+ee.y);m.set(K,ve)}f.subVectors(m,_).multiplyScalar(n.panSpeed),P(f.x,f.y),_.copy(m)}function le(R){const ee=me(R),K=R.pageX-ee.x,ve=R.pageY-ee.y,fe=Math.sqrt(K*K+ve*ve);y.set(0,fe),x.set(0,Math.pow(y.y/v.y,n.zoomSpeed)),I(x.y),v.copy(y)}function oe(R){n.enableZoom&&le(R),n.enablePan&&se(R)}function xe(R){n.enableZoom&&le(R),n.enableRotate&&he(R)}function Ce(R){n.enabled!==!1&&(b.length===0&&(n.domElement.setPointerCapture(R.pointerId),n.domElement.addEventListener("pointermove",Ae),n.domElement.addEventListener("pointerup",Le)),V(R),R.pointerType==="touch"?ce(R):Oe(R))}function Ae(R){n.enabled!==!1&&(R.pointerType==="touch"?w(R):_e(R))}function Le(R){$(R),b.length===0&&(n.domElement.releasePointerCapture(R.pointerId),n.domElement.removeEventListener("pointermove",Ae),n.domElement.removeEventListener("pointerup",Le)),n.dispatchEvent(eu),r=i.NONE}function Oe(R){let ee;switch(R.button){case 0:ee=n.mouseButtons.LEFT;break;case 1:ee=n.mouseButtons.MIDDLE;break;case 2:ee=n.mouseButtons.RIGHT;break;default:ee=-1}switch(ee){case fi.DOLLY:if(n.enableZoom===!1)return;ie(R),r=i.DOLLY;break;case fi.ROTATE:if(R.ctrlKey||R.metaKey||R.shiftKey){if(n.enablePan===!1)return;Z(R),r=i.PAN}else{if(n.enableRotate===!1)return;q(R),r=i.ROTATE}break;case fi.PAN:if(R.ctrlKey||R.metaKey||R.shiftKey){if(n.enableRotate===!1)return;q(R),r=i.ROTATE}else{if(n.enablePan===!1)return;Z(R),r=i.PAN}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(Ya)}function _e(R){switch(r){case i.ROTATE:if(n.enableRotate===!1)return;H(R);break;case i.DOLLY:if(n.enableZoom===!1)return;j(R);break;case i.PAN:if(n.enablePan===!1)return;F(R);break}}function Me(R){n.enabled===!1||n.enableZoom===!1||r!==i.NONE||(R.preventDefault(),n.dispatchEvent(Ya),G(R),n.dispatchEvent(eu))}function ye(R){n.enabled===!1||n.enablePan===!1||N(R)}function ce(R){switch(ue(R),b.length){case 1:switch(n.touches.ONE){case pi.ROTATE:if(n.enableRotate===!1)return;z(),r=i.TOUCH_ROTATE;break;case pi.PAN:if(n.enablePan===!1)return;W(),r=i.TOUCH_PAN;break;default:r=i.NONE}break;case 2:switch(n.touches.TWO){case pi.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;U(),r=i.TOUCH_DOLLY_PAN;break;case pi.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;re(),r=i.TOUCH_DOLLY_ROTATE;break;default:r=i.NONE}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(Ya)}function w(R){switch(ue(R),r){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;he(R),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;se(R),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;oe(R),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;xe(R),n.update();break;default:r=i.NONE}}function M(R){n.enabled!==!1&&R.preventDefault()}function V(R){b.push(R)}function $(R){delete T[R.pointerId];for(let ee=0;ee<b.length;ee++)if(b[ee].pointerId==R.pointerId){b.splice(ee,1);return}}function ue(R){let ee=T[R.pointerId];ee===void 0&&(ee=new Ue,T[R.pointerId]=ee),ee.set(R.pageX,R.pageY)}function me(R){const ee=R.pointerId===b[0].pointerId?b[1]:b[0];return T[ee.pointerId]}n.domElement.addEventListener("contextmenu",M),n.domElement.addEventListener("pointerdown",Ce),n.domElement.addEventListener("pointercancel",Le),n.domElement.addEventListener("wheel",Me,{passive:!1}),this.update()}}class dx{constructor(e,t){we(this,"_active");we(this,"free");we(this,"third");we(this,"freeCtrl");we(this,"_isFree");we(this,"_thirdTarget");we(this,"_currentPosition");we(this,"_currentLookat");we(this,"_dummyRotate");we(this,"_baseOffset");we(this,"_baseLookat");this.free=new Dt(30,e.clientWidth/e.clientHeight,.1,1e10),this.third=new Dt(55,e.clientWidth/e.clientHeight,.1,1e10),this.free.position.set(0,0,-1e4),this.third.position.set(0,0,-1e4),this.freeCtrl=new hx(this.free,t.renderer.domElement),this.freeCtrl.enableDamping=!0,this.freeCtrl.dampingFactor=.5,this._active=this.free,this._isFree=!0,this._currentPosition=new k,this._currentLookat=new k,this._dummyRotate=new ut,this._baseOffset=new k,this._baseLookat=new k}get active(){return this._active}get thirdTarget(){return this._thirdTarget}get isFree(){return this._isFree}rotateThird(e){switch(e){case"arrowleft":this._dummyRotate.rotateY(ke.CAM_ROT_SPEED);break;case"arrowright":this._dummyRotate.rotateY(-ke.CAM_ROT_SPEED);break;case"arrowup":this._dummyRotate.rotateX(ke.CAM_ROT_SPEED);break;case"arrowdown":this._dummyRotate.rotateX(-ke.CAM_ROT_SPEED);break}}calculateTarget(){this._thirdTarget.object.masterGrp.getWorldPosition(ke.WORLD_POS),this._thirdTarget.object.masterGrp.getWorldQuaternion(ke.WORLD_QUAT),this._dummyRotate.getWorldQuaternion(ke.WORLD_QUAT2);const e=this._baseLookat.clone();e.applyQuaternion(ke.WORLD_QUAT),e.add(ke.WORLD_POS),ke.WORLD_QUAT.multiplyQuaternions(ke.WORLD_QUAT,ke.WORLD_QUAT2);const t=this._baseOffset.clone();return t.applyQuaternion(ke.WORLD_QUAT),t.add(ke.WORLD_POS),[e,t]}setFollowTarget(e){this._thirdTarget=e,this._dummyRotate.copy(e.object.masterGrp);const t=this._thirdTarget.drawRadius;this._baseOffset=new k(t*5,t*2,-t*6),this._baseLookat=new k(0,t/2,t)}third2Free(){this.third.getWorldPosition(ke.WORLD_POS),this.free.position.set(ke.WORLD_POS.x,ke.WORLD_POS.y,ke.WORLD_POS.z),this._thirdTarget.object.masterGrp.getWorldPosition(ke.WORLD_POS),this.freeCtrl.target.set(ke.WORLD_POS.x,ke.WORLD_POS.y,ke.WORLD_POS.z)}activateThird(){ke.CELESTIAL_ORB=!0,this._active=this.third,this._isFree=!1}activateFree(){ke.CELESTIAL_ORB=!1,this._active=this.free,this._isFree=!0}update(e){if(this._thirdTarget){const[t,n]=this.calculateTarget();if(ke.ORB_SCALE>=1e8)this._currentPosition.copy(n);else{const i=1-Math.pow(.001,e);this._currentPosition.lerp(n,i)}this._currentLookat.copy(t),this.third.position.copy(this._currentPosition),this.third.lookAt(this._currentLookat)}this.freeCtrl.update()}}class fx{constructor(e){we(this,"_mousePointer");we(this,"_raycaster");we(this,"_world");this._mousePointer=new Ue(1/0,1/0),this._raycaster=new Xu,this._world=e}initListeners(){window.addEventListener("dblclick",this.dblclickHandler.bind(this)),window.addEventListener("click",this.clickHandler.bind(this))}clickHandler(e){this.updateMousePointer(e);const t=this.checkRaycast();if(!t){this._world.infoPanel.visible&&(this._world.infoPanel.visible=!1);return}const[n,i]=t;if(i.name.includes("_infoSprite")){this._world.infoPanel.show(n);return}this._world.infoPanel.visible&&(this._world.infoPanel.visible=!1)}dblclickHandler(e){this.updateMousePointer(e);const t=this.raycast();if(!t)return;const n=this.getMasterGroup(t);if(!n)return;const i=this._world.curSystem.getById(n.userData.id);i&&(this._world.cam.setFollowTarget(i),this._world.cam.activateThird(),this._world.cam.third2Free())}updateMousePointer(e){this._mousePointer.x=e.clientX/window.innerWidth*2-1,this._mousePointer.y=-(e.clientY/window.innerHeight)*2+1}checkRaycast(){const e=this.raycast();if(!e)return;const t=this.getMasterGroup(e);if(!t)return;const n=this._world.curSystem.getById(t.userData.id);if(n)return[n,e]}raycast(){this._raycaster.setFromCamera(this._mousePointer,this._world.cam.active);const e=this._raycaster.intersectObjects(this._world.curSystem.topGrp.children);if(this._mousePointer.set(1/0,1/0),e.length!==0)return e[0].object}getMasterGroup(e){if(e.name!=null&&e.name.includes("_")){const[t,n]=e.name.split("_");return this._world.scene.getObjectByName(`${t}_masterGrp`)}return Ov(e)}}let Us;const px=1e3/60;class Hs{constructor(e){we(this,"canvas");we(this,"renderer");we(this,"scene");we(this,"clock");we(this,"delta");we(this,"gridhelper");we(this,"cam");we(this,"gui");we(this,"infoPanel");we(this,"clickManager");we(this,"clickPointer");we(this,"raycaster");we(this,"systems");we(this,"curSystem");this.canvas=document.querySelector("canvas#main"),this.renderer=new Iu({canvas:this.canvas,antialias:!0,alpha:!0,logarithmicDepthBuffer:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=nu,this.renderer.setClearColor(0),this.scene=new Uu,this.cam=new dx(this.canvas,this),this.clock=new j0,this.delta=0,this.systems=[],this.clickPointer=new Ue(1/0,1/0),this.raycaster=new Xu,this.gridhelper=new t_(100,100,"teal","darkgray"),this.gridhelper.scale.setScalar(1e4),this.gridhelper.visible=!1,this.scene.add(this.gridhelper);const t=ke.TEX_LOAD("./starmap_8k.jpg");t.mapping=zs,t.encoding=nt,this.scene.background=t,this.scene.add(new V0("#ffffff",.03)),this.infoPanel=e,this.clickManager=new fx(this)}initSys(e){this.curSystem=e,this.curSystem.initWorld(this),this.infoPanel.init(this.curSystem),this.systems.push(e)}initGui(){this.gui=new ux({title:"Settings",width:300});const e=this.gui.addFolder("World");e.add(ke,"TIME_SCALE").min(0).name("Time scale").onChange(t=>{ke.TIME_SCALE=t}),e.add(ke,"ORB_SCALE").min(0).name("Orbital speed"),e.add(ke,"ROT_SCALE").min(0).name("Rotational speed"),e.add(this,"topView").name("Top View"),e.add(this.gridhelper,"visible").name("Grid visiblity"),e.add(ke,"MAN_CELESTIAL_ORB").name("Force Orb Rot"),e.add(this,"logCamera").name("Log Camera"),this.gui.close(),this.cam.free.position.set(0,2117.999902022348,-10175.846962935977),this.cam.freeCtrl.update()}logCamera(){console.log(this.cam.active.position),console.log(this.cam.active.rotation)}initListeners(){const e=s=>{this.cam.rotateThird(s.key.toLowerCase())};let t=!1;const n=()=>{t=!0},i=()=>{t=!1},r=s=>{t&&s.altKey&&!this.cam.isFree&&(this.cam.third2Free(),this.cam.activateFree())};window.addEventListener("mousedown",n),window.addEventListener("mouseup",i),window.addEventListener("mousemove",r),window.addEventListener("keydown",e)}update(){if(Nv(this.renderer)){const e=this.renderer.domElement;this.cam.active.aspect=e.clientWidth/e.clientHeight,this.cam.active.updateProjectionMatrix()}this.curSystem.update(this),this.cam.update(this.delta),this.renderer.clear(),this.renderer.render(this.scene,this.cam.active)}static eventLoop(e,t){requestAnimationFrame(i=>Hs.eventLoop(i,t)),Us||(Us=e);const n=e-Us;t.delta=t.clock.getDelta(),n>px&&(t.update(),Us=e)}topView(){this.cam.activateFree(),this.cam.freeCtrl.target.set(0,0,0),this.cam.free.position.set(0,this.curSystem.radius*4,0)}}class mx{constructor(){we(this,"world");const e=new Jv;ke.LOAD_MANAGER.onLoad=()=>{e.visible=!1,this.world.curSystem.textOpacity=1,this.world.initGui(),this.world.initListeners(),this.world.clickManager.initListeners(),requestAnimationFrame(t=>Hs.eventLoop(t,this.world))},ke.LOAD_MANAGER.onProgress=(t,n,i)=>{const r=n/i*100;console.debug(t," ",r),e.progress=r}}async start(e){const t=new Zv([]);this.world=new Hs(t);const n=xt.build();this.world.initSys(n)}}const gx={systems:[{name:"epsilonEridani",isSingleSun:!0,objects:[{name:"epsilonEridani",type:"sun",radius:508328.2,rotationPeriod:273.6,orbitalPeriod:null,parent:null,tilt:0,distanceToParent:null,highTemp:5100,lowTemp:1700,draw:{radius:1e5}},{name:"tangerineDream",type:"planet",radius:84592.31,rotationPeriod:24,orbitalPeriod:63948,parent:"epsilonEridani",tilt:45,distanceToParent:50864e5,draw:{albedoPath:"./epsilonEridani/2k_jupiter.jpg",normalPath:"./epsilonEridani/ceres_normal_16k.png",glowColor:"0xffffff",glowIntensity:.1,radius:100}},{name:"yellowstone",type:"planet",radius:5600,rotationPeriod:26,orbitalPeriod:2453e3,parent:"epsilonEridani",tilt:20,distanceToParent:5984e7,draw:{albedoPath:"./epsilonEridani/2k_venus_surface.jpg",normalPath:"./epsilonEridani/ceres_normal_16k.png",glowColor:"0xf69f1f",glowIntensity:.25,radius:100}},{name:"marcosEye",type:"moon",radius:1737.4,rotationPeriod:6552,orbitalPeriod:6552,parent:"yellowstone",tilt:0,distanceToParent:30844e4,draw:{albedoPath:"./epsilonEridani/marcosEye/moon_albedo.jpg",normalPath:"./epsilonEridani/marcosEye/moon_normal.png",glowColor:"0xffffff",glowIntensity:.1,radius:1,orbInvert:!0,orbLen:45,showMarker:!1}},{name:"glitterband",type:"particlering",radius:null,rotationPeriod:null,orbitalPeriod:62e3,parent:"yellowstone",tilt:0,distanceToParent:55e7,draw:{cache:"./epsilonEridani/glitterband.glb",count:1e3,distDiv:3e9,height:40,genColor:!0}},{name:"oortCloud",type:"oortcloud",radius:null,rotationPeriod:null,orbitalPeriod:62e3,parent:"epsilonEridani",tilt:0,distanceToParent:1992e10,draw:{radius:2}},{name:"kuiperBelt",type:"particlering",radius:null,rotationPeriod:null,orbitalPeriod:752e6,parent:"epsilonEridani",tilt:0,distanceToParent:748793612e3,draw:{cache:"./epsilonEridani/kuiperbelt.glb",end:1e5,count:1e3,distDiv:1e11,height:4e5,pointShader:!0,orbInvert:!0}}],texts:[{name:"tangerineDream",texts:[`2560-2600
Demarchists start to mine and pre-process metallic hydrogen`,`2605
James Bax is laid to rest by his daughter Antoinette Bax`]},{name:"yellowstone",texts:[`2090 – 2110
Originally settled by Americans
Settled via Von Neumann machines housing fertilized human eggs
Colony failed in a similarly murderous manner as Diadem`,`2205 – 2250
Period of great expansion
Recontact with surviving settlements from Amerikano era`,`2351
Dan Sylveste born in Chasm City, Yellowstone`,`2372
The Eighty`,`2405
Departure of Sylveste expedition to Lascaille's Shroud`,`2415
Clockworker incident`,`2427
Aurora crisis`,`2441
Return of Sylveste’s expedition to Lascaille’s Shroud`,`2460
Dan Sylveste vanishes from Yellowstone for 30 days`,`2491
Departure of Resurgam expedition`,`2510
Melding Plague afflicts Chasm City
Effective end of Demarchist era`,`2517
Tanner Mirabel arrives in Chasm City`,`2524
Ana Khouri arrives in Chasm City`,`2551
Outbreak of Conjoiner-Demarchist war around Yellowstone
Establishment of Ferrisville Convention`]},{name:"marcosEye",texts:[`≈2100
Named in honour of Marco Ferris`]}]}]};document.title=`${document.title} (0.2.10-mvp)`;document.getElementById("version").innerText="v0.2.10-mvp";window.onload=()=>{const l=gx,e=new mx;new Promise(t=>{t(null)}).then(async()=>{await e.start(l.systems[0])})};
