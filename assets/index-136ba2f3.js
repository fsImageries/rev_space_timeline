var Th=Object.defineProperty;var Ah=(o,e,t)=>e in o?Th(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t;var xe=(o,e,t)=>(Ah(o,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Co="151",pi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},mi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Eh=0,sl=1,Ch=2,xu=1,yu=2,Lr=3,gn=0,Nt=1,Zt=2,Hn=0,Vi=1,Vs=2,al=3,ol=4,Lh=5,Bi=100,Rh=101,Ph=102,ll=103,cl=104,Dh=200,Ih=201,Uh=202,Oh=203,bu=204,Mu=205,Nh=206,Fh=207,kh=208,Bh=209,Gh=210,zh=0,Vh=1,Hh=2,so=3,Wh=4,jh=5,Xh=6,Yh=7,Lo=0,qh=1,Kh=2,Pn=0,Zh=1,$h=2,Jh=3,Qh=4,ed=5,Su=300,Xi=301,Yi=302,Hs=303,ao=304,Ys=306,qi=1e3,$t=1001,Ws=1002,pt=1003,oo=1004,Fs=1005,Ut=1006,wu=1007,ii=1008,ri=1009,td=1010,nd=1011,Tu=1012,id=1013,Qn=1014,Vn=1015,Nr=1016,rd=1017,sd=1018,Hi=1020,ad=1021,Jt=1023,od=1024,ld=1025,ei=1026,Ki=1027,cd=1028,ud=1029,hd=1030,dd=1031,fd=1033,_a=33776,va=33777,xa=33778,ya=33779,ul=35840,hl=35841,dl=35842,fl=35843,pd=36196,pl=37492,ml=37496,gl=37808,_l=37809,vl=37810,xl=37811,yl=37812,bl=37813,Ml=37814,Sl=37815,wl=37816,Tl=37817,Al=37818,El=37819,Cl=37820,Ll=37821,ba=36492,md=36283,Rl=36284,Pl=36285,Dl=36286,Fr=2300,Zi=2301,Ma=2302,Il=2400,Ul=2401,Ol=2402,gd=2500,_d=0,Au=1,lo=2,si=3e3,nt=3001,vd=3200,Eu=3201,Ro=0,xd=1,fn="srgb",kr="srgb-linear",Cu="display-p3",Sa=7680,yd=519,co=35044,Nl="300 es",uo=1035;class li{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,s=i.length;r<s;r++)i[r].call(this,e);e.target=null}}}const Dt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Fl=1234567;const Pr=Math.PI/180,$i=180/Math.PI;function ln(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Dt[o&255]+Dt[o>>8&255]+Dt[o>>16&255]+Dt[o>>24&255]+"-"+Dt[e&255]+Dt[e>>8&255]+"-"+Dt[e>>16&15|64]+Dt[e>>24&255]+"-"+Dt[t&63|128]+Dt[t>>8&255]+"-"+Dt[t>>16&255]+Dt[t>>24&255]+Dt[n&255]+Dt[n>>8&255]+Dt[n>>16&255]+Dt[n>>24&255]).toLowerCase()}function At(o,e,t){return Math.max(e,Math.min(t,o))}function Po(o,e){return(o%e+e)%e}function bd(o,e,t,n,i){return n+(o-e)*(i-n)/(t-e)}function Md(o,e,t){return o!==e?(t-o)/(e-o):0}function Dr(o,e,t){return(1-t)*o+t*e}function Sd(o,e,t,n){return Dr(o,e,1-Math.exp(-t*n))}function wd(o,e=1){return e-Math.abs(Po(o,e*2)-e)}function Td(o,e,t){return o<=e?0:o>=t?1:(o=(o-e)/(t-e),o*o*(3-2*o))}function Ad(o,e,t){return o<=e?0:o>=t?1:(o=(o-e)/(t-e),o*o*o*(o*(o*6-15)+10))}function Ed(o,e){return o+Math.floor(Math.random()*(e-o+1))}function Cd(o,e){return o+Math.random()*(e-o)}function Ld(o){return o*(.5-Math.random())}function Rd(o){o!==void 0&&(Fl=o);let e=Fl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Pd(o){return o*Pr}function Dd(o){return o*$i}function ho(o){return(o&o-1)===0&&o!==0}function Lu(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function Ru(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function Id(o,e,t,n,i){const r=Math.cos,s=Math.sin,a=r(t/2),l=s(t/2),c=r((e+n)/2),u=s((e+n)/2),h=r((e-n)/2),d=s((e-n)/2),p=r((n-e)/2),g=s((n-e)/2);switch(i){case"XYX":o.set(a*u,l*h,l*d,a*c);break;case"YZY":o.set(l*d,a*u,l*h,a*c);break;case"ZXZ":o.set(l*h,l*d,a*u,a*c);break;case"XZX":o.set(a*u,l*g,l*p,a*c);break;case"YXY":o.set(l*p,a*u,l*g,a*c);break;case"ZYZ":o.set(l*g,l*p,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Ln(o,e){switch(e.constructor){case Float32Array:return o;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function lt(o,e){switch(e.constructor){case Float32Array:return o;case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const Ud={DEG2RAD:Pr,RAD2DEG:$i,generateUUID:ln,clamp:At,euclideanModulo:Po,mapLinear:bd,inverseLerp:Md,lerp:Dr,damp:Sd,pingpong:wd,smoothstep:Td,smootherstep:Ad,randInt:Ed,randFloat:Cd,randFloatSpread:Ld,seededRandom:Rd,degToRad:Pd,radToDeg:Dd,isPowerOfTwo:ho,ceilPowerOfTwo:Lu,floorPowerOfTwo:Ru,setQuaternionFromProperEuler:Id,normalize:lt,denormalize:Ln};class Ne{constructor(e=0,t=0){Ne.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(At(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,s=this.y-e.y;return this.x=r*n-s*i+e.x,this.y=r*i+s*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ke{constructor(){Ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,r,s,a,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=s,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,s=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],p=n[5],g=n[8],_=i[0],m=i[3],f=i[6],v=i[1],x=i[4],b=i[7],y=i[2],T=i[5],C=i[8];return r[0]=s*_+a*v+l*y,r[3]=s*m+a*x+l*T,r[6]=s*f+a*b+l*C,r[1]=c*_+u*v+h*y,r[4]=c*m+u*x+h*T,r[7]=c*f+u*b+h*C,r[2]=d*_+p*v+g*y,r[5]=d*m+p*x+g*T,r[8]=d*f+p*b+g*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],s=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*s*u-t*a*c-n*r*u+n*a*l+i*r*c-i*s*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],s=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*s-a*c,d=a*l-u*r,p=c*r-s*l,g=t*h+n*d+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(i*c-u*n)*_,e[2]=(a*n-i*s)*_,e[3]=d*_,e[4]=(u*t-i*l)*_,e[5]=(i*r-a*t)*_,e[6]=p*_,e[7]=(n*l-c*t)*_,e[8]=(s*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,s,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*s+c*a)+s+e,-i*c,i*l,-i*(-c*s+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(wa.makeScale(e,t)),this}rotate(e){return this.premultiply(wa.makeRotation(-e)),this}translate(e,t){return this.premultiply(wa.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const wa=new Ke;function Pu(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Br(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function Wi(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Ta(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}const Od=new Ke().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),Nd=new Ke().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function Fd(o){return o.convertSRGBToLinear().applyMatrix3(Nd)}function kd(o){return o.applyMatrix3(Od).convertLinearToSRGB()}const Bd={[kr]:o=>o,[fn]:o=>o.convertSRGBToLinear(),[Cu]:Fd},Gd={[kr]:o=>o,[fn]:o=>o.convertLinearToSRGB(),[Cu]:kd},Wt={enabled:!1,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(o){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!o},get workingColorSpace(){return kr},set workingColorSpace(o){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(o,e,t){if(this.enabled===!1||e===t||!e||!t)return o;const n=Bd[e],i=Gd[t];if(n===void 0||i===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return i(n(o))},fromWorkingColorSpace:function(o,e){return this.convert(o,this.workingColorSpace,e)},toWorkingColorSpace:function(o,e){return this.convert(o,e,this.workingColorSpace)}};let gi;class Du{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{gi===void 0&&(gi=Br("canvas")),gi.width=e.width,gi.height=e.height;const n=gi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=gi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Br("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let s=0;s<r.length;s++)r[s]=Wi(r[s]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Wi(t[n]/255)*255):t[n]=Wi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Iu{constructor(e=null){this.isSource=!0,this.uuid=ln(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let s=0,a=i.length;s<a;s++)i[s].isDataTexture?r.push(Aa(i[s].image)):r.push(Aa(i[s]))}else r=Aa(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function Aa(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?Du.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let zd=0;class St extends li{constructor(e=St.DEFAULT_IMAGE,t=St.DEFAULT_MAPPING,n=$t,i=$t,r=Ut,s=ii,a=Jt,l=ri,c=St.DEFAULT_ANISOTROPY,u=si){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:zd++}),this.uuid=ln(),this.name="",this.source=new Iu(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=s,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ne(0,0),this.repeat=new Ne(1,1),this.center=new Ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Su)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case qi:e.x=e.x-Math.floor(e.x);break;case $t:e.x=e.x<0?0:1;break;case Ws:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case qi:e.y=e.y-Math.floor(e.y);break;case $t:e.y=e.y<0?0:1;break;case Ws:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}St.DEFAULT_IMAGE=null;St.DEFAULT_MAPPING=Su;St.DEFAULT_ANISOTROPY=1;class at{constructor(e=0,t=0,n=0,i=1){at.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i+s[12]*r,this.y=s[1]*t+s[5]*n+s[9]*i+s[13]*r,this.z=s[2]*t+s[6]*n+s[10]*i+s[14]*r,this.w=s[3]*t+s[7]*n+s[11]*i+s[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],p=l[5],g=l[9],_=l[2],m=l[6],f=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,b=(p+1)/2,y=(f+1)/2,T=(u+d)/4,C=(h+_)/4,L=(g+m)/4;return x>b&&x>y?x<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(x),i=T/n,r=C/n):b>y?b<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(b),n=T/i,r=L/i):y<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(y),n=C/r,i=L/r),this.set(n,i,r,t),this}let v=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(h-_)/v,this.z=(d-u)/v,this.w=Math.acos((c+p+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ai extends li{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new at(0,0,e,t),this.scissorTest=!1,this.viewport=new at(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new St(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Ut,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Iu(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Uu extends St{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=pt,this.minFilter=pt,this.wrapR=$t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Vd extends St{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=pt,this.minFilter=pt,this.wrapR=$t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class en{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,s,a){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const d=r[s+0],p=r[s+1],g=r[s+2],_=r[s+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=p,e[t+2]=g,e[t+3]=_;return}if(h!==_||l!==d||c!==p||u!==g){let m=1-a;const f=l*d+c*p+u*g+h*_,v=f>=0?1:-1,x=1-f*f;if(x>Number.EPSILON){const y=Math.sqrt(x),T=Math.atan2(y,f*v);m=Math.sin(m*T)/y,a=Math.sin(a*T)/y}const b=a*v;if(l=l*m+d*b,c=c*m+p*b,u=u*m+g*b,h=h*m+_*b,m===1-a){const y=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=y,c*=y,u*=y,h*=y}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,r,s){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=r[s],d=r[s+1],p=r[s+2],g=r[s+3];return e[t]=a*g+u*h+l*p-c*d,e[t+1]=l*g+u*d+c*h-a*p,e[t+2]=c*g+u*p+a*d-l*h,e[t+3]=u*g-a*h-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,r=e._z,s=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),h=a(r/2),d=l(n/2),p=l(i/2),g=l(r/2);switch(s){case"XYZ":this._x=d*u*h+c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h-d*p*g;break;case"YXZ":this._x=d*u*h+c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h+d*p*g;break;case"ZXY":this._x=d*u*h-c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h-d*p*g;break;case"ZYX":this._x=d*u*h-c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h+d*p*g;break;case"YZX":this._x=d*u*h+c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h-d*p*g;break;case"XZY":this._x=d*u*h-c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],s=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+a+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(s-i)*p}else if(n>a&&n>h){const p=2*Math.sqrt(1+n-a-h);this._w=(u-l)/p,this._x=.25*p,this._y=(i+s)/p,this._z=(r+c)/p}else if(a>h){const p=2*Math.sqrt(1+a-n-h);this._w=(r-c)/p,this._x=(i+s)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-n-a);this._w=(s-i)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(At(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,s=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+s*a+i*c-r*l,this._y=i*u+s*l+r*a-n*c,this._z=r*u+s*c+n*l-i*a,this._w=s*u-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,s=this._w;let a=s*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=s,this._x=n,this._y=i,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*s+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=s*h+this._w*d,this._x=n*h+this._x*d,this._y=i*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(e=0,t=0,n=0){k.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(kl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(kl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,s=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*s,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*s,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*s,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,s=e.y,a=e.z,l=e.w,c=l*t+s*i-a*n,u=l*n+a*t-r*i,h=l*i+r*n-s*t,d=-r*t-s*n-a*i;return this.x=c*l+d*-r+u*-a-h*-s,this.y=u*l+d*-s+h*-r-c*-a,this.z=h*l+d*-a+c*-s-u*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,s=t.x,a=t.y,l=t.z;return this.x=i*l-r*a,this.y=r*s-n*l,this.z=n*a-i*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ea.copy(this).projectOnVector(e),this.sub(Ea)}reflect(e){return this.sub(Ea.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(At(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ea=new k,kl=new en;class _n{constructor(e=new k(1/0,1/0,1/0),t=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Sn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Sn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Sn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),_i.copy(e.boundingBox),_i.applyMatrix4(e.matrixWorld),this.union(_i);else{const i=e.geometry;if(i!==void 0)if(t&&i.attributes!==void 0&&i.attributes.position!==void 0){const r=i.attributes.position;for(let s=0,a=r.count;s<a;s++)Sn.fromBufferAttribute(r,s).applyMatrix4(e.matrixWorld),this.expandByPoint(Sn)}else i.boundingBox===null&&i.computeBoundingBox(),_i.copy(i.boundingBox),_i.applyMatrix4(e.matrixWorld),this.union(_i)}const n=e.children;for(let i=0,r=n.length;i<r;i++)this.expandByObject(n[i],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Sn),Sn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(gr),rs.subVectors(this.max,gr),vi.subVectors(e.a,gr),xi.subVectors(e.b,gr),yi.subVectors(e.c,gr),On.subVectors(xi,vi),Nn.subVectors(yi,xi),Xn.subVectors(vi,yi);let t=[0,-On.z,On.y,0,-Nn.z,Nn.y,0,-Xn.z,Xn.y,On.z,0,-On.x,Nn.z,0,-Nn.x,Xn.z,0,-Xn.x,-On.y,On.x,0,-Nn.y,Nn.x,0,-Xn.y,Xn.x,0];return!Ca(t,vi,xi,yi,rs)||(t=[1,0,0,0,1,0,0,0,1],!Ca(t,vi,xi,yi,rs))?!1:(ss.crossVectors(On,Nn),t=[ss.x,ss.y,ss.z],Ca(t,vi,xi,yi,rs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Sn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Sn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Mn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Mn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Mn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Mn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Mn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Mn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Mn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Mn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Mn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Mn=[new k,new k,new k,new k,new k,new k,new k,new k],Sn=new k,_i=new _n,vi=new k,xi=new k,yi=new k,On=new k,Nn=new k,Xn=new k,gr=new k,rs=new k,ss=new k,Yn=new k;function Ca(o,e,t,n,i){for(let r=0,s=o.length-3;r<=s;r+=3){Yn.fromArray(o,r);const a=i.x*Math.abs(Yn.x)+i.y*Math.abs(Yn.y)+i.z*Math.abs(Yn.z),l=e.dot(Yn),c=t.dot(Yn),u=n.dot(Yn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Hd=new _n,_r=new k,La=new k;class vn{constructor(e=new k,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Hd.setFromPoints(e).getCenter(n);let i=0;for(let r=0,s=e.length;r<s;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;_r.subVectors(e,this.center);const t=_r.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(_r,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(La.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(_r.copy(e.center).add(La)),this.expandByPoint(_r.copy(e.center).sub(La))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const wn=new k,Ra=new k,as=new k,Fn=new k,Pa=new k,os=new k,Da=new k;class qs{constructor(e=new k,t=new k(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,wn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=wn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(wn.copy(this.origin).addScaledVector(this.direction,t),wn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Ra.copy(e).add(t).multiplyScalar(.5),as.copy(t).sub(e).normalize(),Fn.copy(this.origin).sub(Ra);const r=e.distanceTo(t)*.5,s=-this.direction.dot(as),a=Fn.dot(this.direction),l=-Fn.dot(as),c=Fn.lengthSq(),u=Math.abs(1-s*s);let h,d,p,g;if(u>0)if(h=s*l-a,d=s*a-l,g=r*u,h>=0)if(d>=-g)if(d<=g){const _=1/u;h*=_,d*=_,p=h*(h+s*d+2*a)+d*(s*h+d+2*l)+c}else d=r,h=Math.max(0,-(s*d+a)),p=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(s*d+a)),p=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-s*r+a)),d=h>0?-r:Math.min(Math.max(-r,-l),r),p=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(h=Math.max(0,-(s*r+a)),d=h>0?r:Math.min(Math.max(-r,-l),r),p=-h*h+d*(d+2*l)+c);else d=s>0?-r:r,h=Math.max(0,-(s*d+a)),p=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(Ra).addScaledVector(as,d),p}intersectSphere(e,t){wn.subVectors(e.center,this.origin);const n=wn.dot(this.direction),i=wn.dot(wn)-n*n,r=e.radius*e.radius;if(i>r)return null;const s=Math.sqrt(r-i),a=n-s,l=n+s;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,s,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,s=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,s=(e.min.y-d.y)*u),n>s||r>i||((r>n||isNaN(n))&&(n=r),(s<i||isNaN(i))&&(i=s),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,wn)!==null}intersectTriangle(e,t,n,i,r){Pa.subVectors(t,e),os.subVectors(n,e),Da.crossVectors(Pa,os);let s=this.direction.dot(Da),a;if(s>0){if(i)return null;a=1}else if(s<0)a=-1,s=-s;else return null;Fn.subVectors(this.origin,e);const l=a*this.direction.dot(os.crossVectors(Fn,os));if(l<0)return null;const c=a*this.direction.dot(Pa.cross(Fn));if(c<0||l+c>s)return null;const u=-a*Fn.dot(Da);return u<0?null:this.at(u/s,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Xe{constructor(){Xe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,r,s,a,l,c,u,h,d,p,g,_,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=i,f[1]=r,f[5]=s,f[9]=a,f[13]=l,f[2]=c,f[6]=u,f[10]=h,f[14]=d,f[3]=p,f[7]=g,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Xe().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/bi.setFromMatrixColumn(e,0).length(),r=1/bi.setFromMatrixColumn(e,1).length(),s=1/bi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*s,t[9]=n[9]*s,t[10]=n[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,s=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const d=s*u,p=s*h,g=a*u,_=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=p+g*c,t[5]=d-_*c,t[9]=-a*l,t[2]=_-d*c,t[6]=g+p*c,t[10]=s*l}else if(e.order==="YXZ"){const d=l*u,p=l*h,g=c*u,_=c*h;t[0]=d+_*a,t[4]=g*a-p,t[8]=s*c,t[1]=s*h,t[5]=s*u,t[9]=-a,t[2]=p*a-g,t[6]=_+d*a,t[10]=s*l}else if(e.order==="ZXY"){const d=l*u,p=l*h,g=c*u,_=c*h;t[0]=d-_*a,t[4]=-s*h,t[8]=g+p*a,t[1]=p+g*a,t[5]=s*u,t[9]=_-d*a,t[2]=-s*c,t[6]=a,t[10]=s*l}else if(e.order==="ZYX"){const d=s*u,p=s*h,g=a*u,_=a*h;t[0]=l*u,t[4]=g*c-p,t[8]=d*c+_,t[1]=l*h,t[5]=_*c+d,t[9]=p*c-g,t[2]=-c,t[6]=a*l,t[10]=s*l}else if(e.order==="YZX"){const d=s*l,p=s*c,g=a*l,_=a*c;t[0]=l*u,t[4]=_-d*h,t[8]=g*h+p,t[1]=h,t[5]=s*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*h+g,t[10]=d-_*h}else if(e.order==="XZY"){const d=s*l,p=s*c,g=a*l,_=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+_,t[5]=s*u,t[9]=p*h-g,t[2]=g*h-p,t[6]=a*u,t[10]=_*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Wd,e,jd)}lookAt(e,t,n){const i=this.elements;return jt.subVectors(e,t),jt.lengthSq()===0&&(jt.z=1),jt.normalize(),kn.crossVectors(n,jt),kn.lengthSq()===0&&(Math.abs(n.z)===1?jt.x+=1e-4:jt.z+=1e-4,jt.normalize(),kn.crossVectors(n,jt)),kn.normalize(),ls.crossVectors(jt,kn),i[0]=kn.x,i[4]=ls.x,i[8]=jt.x,i[1]=kn.y,i[5]=ls.y,i[9]=jt.y,i[2]=kn.z,i[6]=ls.z,i[10]=jt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,s=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],p=n[13],g=n[2],_=n[6],m=n[10],f=n[14],v=n[3],x=n[7],b=n[11],y=n[15],T=i[0],C=i[4],L=i[8],S=i[12],E=i[1],Z=i[5],U=i[9],P=i[13],D=i[2],B=i[6],q=i[10],re=i[14],$=i[3],z=i[7],K=i[11],N=i[15];return r[0]=s*T+a*E+l*D+c*$,r[4]=s*C+a*Z+l*B+c*z,r[8]=s*L+a*U+l*q+c*K,r[12]=s*S+a*P+l*re+c*N,r[1]=u*T+h*E+d*D+p*$,r[5]=u*C+h*Z+d*B+p*z,r[9]=u*L+h*U+d*q+p*K,r[13]=u*S+h*P+d*re+p*N,r[2]=g*T+_*E+m*D+f*$,r[6]=g*C+_*Z+m*B+f*z,r[10]=g*L+_*U+m*q+f*K,r[14]=g*S+_*P+m*re+f*N,r[3]=v*T+x*E+b*D+y*$,r[7]=v*C+x*Z+b*B+y*z,r[11]=v*L+x*U+b*q+y*K,r[15]=v*S+x*P+b*re+y*N,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],s=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],p=e[14],g=e[3],_=e[7],m=e[11],f=e[15];return g*(+r*l*h-i*c*h-r*a*d+n*c*d+i*a*p-n*l*p)+_*(+t*l*p-t*c*d+r*s*d-i*s*p+i*c*u-r*l*u)+m*(+t*c*h-t*a*p-r*s*h+n*s*p+r*a*u-n*c*u)+f*(-i*a*u-t*l*h+t*a*d+i*s*h-n*s*d+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],s=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],p=e[11],g=e[12],_=e[13],m=e[14],f=e[15],v=h*m*c-_*d*c+_*l*p-a*m*p-h*l*f+a*d*f,x=g*d*c-u*m*c-g*l*p+s*m*p+u*l*f-s*d*f,b=u*_*c-g*h*c+g*a*p-s*_*p-u*a*f+s*h*f,y=g*h*l-u*_*l-g*a*d+s*_*d+u*a*m-s*h*m,T=t*v+n*x+i*b+r*y;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/T;return e[0]=v*C,e[1]=(_*d*r-h*m*r-_*i*p+n*m*p+h*i*f-n*d*f)*C,e[2]=(a*m*r-_*l*r+_*i*c-n*m*c-a*i*f+n*l*f)*C,e[3]=(h*l*r-a*d*r-h*i*c+n*d*c+a*i*p-n*l*p)*C,e[4]=x*C,e[5]=(u*m*r-g*d*r+g*i*p-t*m*p-u*i*f+t*d*f)*C,e[6]=(g*l*r-s*m*r-g*i*c+t*m*c+s*i*f-t*l*f)*C,e[7]=(s*d*r-u*l*r+u*i*c-t*d*c-s*i*p+t*l*p)*C,e[8]=b*C,e[9]=(g*h*r-u*_*r-g*n*p+t*_*p+u*n*f-t*h*f)*C,e[10]=(s*_*r-g*a*r+g*n*c-t*_*c-s*n*f+t*a*f)*C,e[11]=(u*a*r-s*h*r-u*n*c+t*h*c+s*n*p-t*a*p)*C,e[12]=y*C,e[13]=(u*_*i-g*h*i+g*n*d-t*_*d-u*n*m+t*h*m)*C,e[14]=(g*a*i-s*_*i-g*n*l+t*_*l+s*n*m-t*a*m)*C,e[15]=(s*h*i-u*a*i+u*n*l-t*h*l-s*n*d+t*a*d)*C,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,s=e.x,a=e.y,l=e.z,c=r*s,u=r*a;return this.set(c*s+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*s,0,c*l-i*a,u*l+i*s,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,s){return this.set(1,n,r,0,e,1,s,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,s=t._y,a=t._z,l=t._w,c=r+r,u=s+s,h=a+a,d=r*c,p=r*u,g=r*h,_=s*u,m=s*h,f=a*h,v=l*c,x=l*u,b=l*h,y=n.x,T=n.y,C=n.z;return i[0]=(1-(_+f))*y,i[1]=(p+b)*y,i[2]=(g-x)*y,i[3]=0,i[4]=(p-b)*T,i[5]=(1-(d+f))*T,i[6]=(m+v)*T,i[7]=0,i[8]=(g+x)*C,i[9]=(m-v)*C,i[10]=(1-(d+_))*C,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=bi.set(i[0],i[1],i[2]).length();const s=bi.set(i[4],i[5],i[6]).length(),a=bi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],sn.copy(this);const c=1/r,u=1/s,h=1/a;return sn.elements[0]*=c,sn.elements[1]*=c,sn.elements[2]*=c,sn.elements[4]*=u,sn.elements[5]*=u,sn.elements[6]*=u,sn.elements[8]*=h,sn.elements[9]*=h,sn.elements[10]*=h,t.setFromRotationMatrix(sn),n.x=r,n.y=s,n.z=a,this}makePerspective(e,t,n,i,r,s){const a=this.elements,l=2*r/(t-e),c=2*r/(n-i),u=(t+e)/(t-e),h=(n+i)/(n-i),d=-(s+r)/(s-r),p=-2*s*r/(s-r);return a[0]=l,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=c,a[9]=h,a[13]=0,a[2]=0,a[6]=0,a[10]=d,a[14]=p,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,i,r,s){const a=this.elements,l=1/(t-e),c=1/(n-i),u=1/(s-r),h=(t+e)*l,d=(n+i)*c,p=(s+r)*u;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-h,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-d,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-p,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const bi=new k,sn=new Xe,Wd=new k(0,0,0),jd=new k(1,1,1),kn=new k,ls=new k,jt=new k,Bl=new Xe,Gl=new en;class Ks{constructor(e=0,t=0,n=0,i=Ks.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],s=i[4],a=i[8],l=i[1],c=i[5],u=i[9],h=i[2],d=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(At(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-s,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-At(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(At(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-At(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(At(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-At(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Bl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Bl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Gl.setFromEuler(this),this.setFromQuaternion(Gl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ks.DEFAULT_ORDER="XYZ";class Do{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Xd=0;const zl=new k,Mi=new en,Tn=new Xe,cs=new k,vr=new k,Yd=new k,qd=new en,Vl=new k(1,0,0),Hl=new k(0,1,0),Wl=new k(0,0,1),Kd={type:"added"},jl={type:"removed"};class ut extends li{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Xd++}),this.uuid=ln(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ut.DEFAULT_UP.clone();const e=new k,t=new Ks,n=new en,i=new k(1,1,1);function r(){n.setFromEuler(t,!1)}function s(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Xe},normalMatrix:{value:new Ke}}),this.matrix=new Xe,this.matrixWorld=new Xe,this.matrixAutoUpdate=ut.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Do,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Mi.setFromAxisAngle(e,t),this.quaternion.multiply(Mi),this}rotateOnWorldAxis(e,t){return Mi.setFromAxisAngle(e,t),this.quaternion.premultiply(Mi),this}rotateX(e){return this.rotateOnAxis(Vl,e)}rotateY(e){return this.rotateOnAxis(Hl,e)}rotateZ(e){return this.rotateOnAxis(Wl,e)}translateOnAxis(e,t){return zl.copy(e).applyQuaternion(this.quaternion),this.position.add(zl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Vl,e)}translateY(e){return this.translateOnAxis(Hl,e)}translateZ(e){return this.translateOnAxis(Wl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Tn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?cs.copy(e):cs.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),vr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Tn.lookAt(vr,cs,this.up):Tn.lookAt(cs,vr,this.up),this.quaternion.setFromRotationMatrix(Tn),i&&(Tn.extractRotation(i.matrixWorld),Mi.setFromRotationMatrix(Tn),this.quaternion.premultiply(Mi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Kd)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(jl)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(jl)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Tn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Tn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Tn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const s=this.children[n].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,r=this.children.length;i<r;i++){const s=this.children[i].getObjectsByProperty(e,t);s.length>0&&(n=n.concat(s))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vr,e,Yd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vr,qd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,s=i.length;r<s;r++){const a=i[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(e.animations,l))}}if(t){const a=s(e.geometries),l=s(e.materials),c=s(e.textures),u=s(e.images),h=s(e.shapes),d=s(e.skeletons),p=s(e.animations),g=s(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function s(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}ut.DEFAULT_UP=new k(0,1,0);ut.DEFAULT_MATRIX_AUTO_UPDATE=!0;ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const an=new k,An=new k,Ia=new k,En=new k,Si=new k,wi=new k,Xl=new k,Ua=new k,Oa=new k,Na=new k;let us=!1;class Kt{constructor(e=new k,t=new k,n=new k){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),an.subVectors(e,t),i.cross(an);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){an.subVectors(i,t),An.subVectors(n,t),Ia.subVectors(e,t);const s=an.dot(an),a=an.dot(An),l=an.dot(Ia),c=An.dot(An),u=An.dot(Ia),h=s*c-a*a;if(h===0)return r.set(-2,-1,-1);const d=1/h,p=(c*l-a*u)*d,g=(s*u-a*l)*d;return r.set(1-p-g,g,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,En),En.x>=0&&En.y>=0&&En.x+En.y<=1}static getUV(e,t,n,i,r,s,a,l){return us===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),us=!0),this.getInterpolation(e,t,n,i,r,s,a,l)}static getInterpolation(e,t,n,i,r,s,a,l){return this.getBarycoord(e,t,n,i,En),l.setScalar(0),l.addScaledVector(r,En.x),l.addScaledVector(s,En.y),l.addScaledVector(a,En.z),l}static isFrontFacing(e,t,n,i){return an.subVectors(n,t),An.subVectors(e,t),an.cross(An).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return an.subVectors(this.c,this.b),An.subVectors(this.a,this.b),an.cross(An).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Kt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Kt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return us===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),us=!0),Kt.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}getInterpolation(e,t,n,i,r){return Kt.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return Kt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Kt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let s,a;Si.subVectors(i,n),wi.subVectors(r,n),Ua.subVectors(e,n);const l=Si.dot(Ua),c=wi.dot(Ua);if(l<=0&&c<=0)return t.copy(n);Oa.subVectors(e,i);const u=Si.dot(Oa),h=wi.dot(Oa);if(u>=0&&h<=u)return t.copy(i);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return s=l/(l-u),t.copy(n).addScaledVector(Si,s);Na.subVectors(e,r);const p=Si.dot(Na),g=wi.dot(Na);if(g>=0&&p<=g)return t.copy(r);const _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(wi,a);const m=u*g-p*h;if(m<=0&&h-u>=0&&p-g>=0)return Xl.subVectors(r,i),a=(h-u)/(h-u+(p-g)),t.copy(i).addScaledVector(Xl,a);const f=1/(m+_+d);return s=_*f,a=d*f,t.copy(n).addScaledVector(Si,s).addScaledVector(wi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Zd=0;class Qt extends li{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Zd++}),this.uuid=ln(),this.name="",this.type="Material",this.blending=Vi,this.side=gn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=bu,this.blendDst=Mu,this.blendEquation=Bi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=so,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=yd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Sa,this.stencilZFail=Sa,this.stencilZPass=Sa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Vi&&(n.blending=this.blending),this.side!==gn&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const s=[];for(const a in r){const l=r[a];delete l.metadata,s.push(l)}return s}if(t){const r=i(e.textures),s=i(e.images);r.length>0&&(n.textures=r),s.length>0&&(n.images=s)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Ou={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},on={h:0,s:0,l:0},hs={h:0,s:0,l:0};function Fa(o,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?o+(e-o)*6*t:t<1/2?e:t<2/3?o+(e-o)*6*(2/3-t):o}class Fe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=fn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Wt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Wt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Wt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Wt.workingColorSpace){if(e=Po(e,1),t=At(t,0,1),n=At(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,s=2*n-r;this.r=Fa(s,r,e+1/3),this.g=Fa(s,r,e),this.b=Fa(s,r,e-1/3)}return Wt.toWorkingColorSpace(this,i),this}setStyle(e,t=fn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const s=i[1],a=i[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,Wt.toWorkingColorSpace(this,t),n(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,Wt.toWorkingColorSpace(this,t),n(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(r[1])/360,c=parseFloat(r[2])/100,u=parseFloat(r[3])/100;return n(r[4]),this.setHSL(l,c,u,t)}break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],s=r.length;if(s===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=fn){const n=Ou[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Wi(e.r),this.g=Wi(e.g),this.b=Wi(e.b),this}copyLinearToSRGB(e){return this.r=Ta(e.r),this.g=Ta(e.g),this.b=Ta(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=fn){return Wt.fromWorkingColorSpace(It.copy(this),e),At(It.r*255,0,255)<<16^At(It.g*255,0,255)<<8^At(It.b*255,0,255)<<0}getHexString(e=fn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Wt.workingColorSpace){Wt.fromWorkingColorSpace(It.copy(this),t);const n=It.r,i=It.g,r=It.b,s=Math.max(n,i,r),a=Math.min(n,i,r);let l,c;const u=(a+s)/2;if(a===s)l=0,c=0;else{const h=s-a;switch(c=u<=.5?h/(s+a):h/(2-s-a),s){case n:l=(i-r)/h+(i<r?6:0);break;case i:l=(r-n)/h+2;break;case r:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Wt.workingColorSpace){return Wt.fromWorkingColorSpace(It.copy(this),t),e.r=It.r,e.g=It.g,e.b=It.b,e}getStyle(e=fn){Wt.fromWorkingColorSpace(It.copy(this),e);const t=It.r,n=It.g,i=It.b;return e!==fn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${t*255|0},${n*255|0},${i*255|0})`}offsetHSL(e,t,n){return this.getHSL(on),on.h+=e,on.s+=t,on.l+=n,this.setHSL(on.h,on.s,on.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(on),e.getHSL(hs);const n=Dr(on.h,hs.h,t),i=Dr(on.s,hs.s,t),r=Dr(on.l,hs.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const It=new Fe;Fe.NAMES=Ou;class Rn extends Qt{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Lo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ft=new k,ds=new Ne;class Gt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=co,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ds.fromBufferAttribute(this,t),ds.applyMatrix3(e),this.setXY(t,ds.x,ds.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ft.fromBufferAttribute(this,t),ft.applyMatrix3(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ft.fromBufferAttribute(this,t),ft.applyMatrix4(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ft.fromBufferAttribute(this,t),ft.applyNormalMatrix(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ft.fromBufferAttribute(this,t),ft.transformDirection(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ln(t,this.array)),t}setX(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ln(t,this.array)),t}setY(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ln(t,this.array)),t}setZ(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ln(t,this.array)),t}setW(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array),i=lt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array),i=lt(i,this.array),r=lt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==co&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Nu extends Gt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Fu extends Gt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class wt extends Gt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let $d=0;const Yt=new Xe,ka=new ut,Ti=new k,Xt=new _n,xr=new _n,yt=new k;class mt extends li{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$d++}),this.uuid=ln(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Pu(e)?Fu:Nu)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ke().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Yt.makeRotationFromQuaternion(e),this.applyMatrix4(Yt),this}rotateX(e){return Yt.makeRotationX(e),this.applyMatrix4(Yt),this}rotateY(e){return Yt.makeRotationY(e),this.applyMatrix4(Yt),this}rotateZ(e){return Yt.makeRotationZ(e),this.applyMatrix4(Yt),this}translate(e,t,n){return Yt.makeTranslation(e,t,n),this.applyMatrix4(Yt),this}scale(e,t,n){return Yt.makeScale(e,t,n),this.applyMatrix4(Yt),this}lookAt(e){return ka.lookAt(e),ka.updateMatrix(),this.applyMatrix4(ka.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ti).negate(),this.translate(Ti.x,Ti.y,Ti.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new wt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _n);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];Xt.setFromBufferAttribute(r),this.morphTargetsRelative?(yt.addVectors(this.boundingBox.min,Xt.min),this.boundingBox.expandByPoint(yt),yt.addVectors(this.boundingBox.max,Xt.max),this.boundingBox.expandByPoint(yt)):(this.boundingBox.expandByPoint(Xt.min),this.boundingBox.expandByPoint(Xt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new k,1/0);return}if(e){const n=this.boundingSphere.center;if(Xt.setFromBufferAttribute(e),t)for(let r=0,s=t.length;r<s;r++){const a=t[r];xr.setFromBufferAttribute(a),this.morphTargetsRelative?(yt.addVectors(Xt.min,xr.min),Xt.expandByPoint(yt),yt.addVectors(Xt.max,xr.max),Xt.expandByPoint(yt)):(Xt.expandByPoint(xr.min),Xt.expandByPoint(xr.max))}Xt.getCenter(n);let i=0;for(let r=0,s=e.count;r<s;r++)yt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(yt));if(t)for(let r=0,s=t.length;r<s;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)yt.fromBufferAttribute(a,c),l&&(Ti.fromBufferAttribute(e,c),yt.add(Ti)),i=Math.max(i,n.distanceToSquared(yt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,r=t.normal.array,s=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Gt(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let E=0;E<a;E++)c[E]=new k,u[E]=new k;const h=new k,d=new k,p=new k,g=new Ne,_=new Ne,m=new Ne,f=new k,v=new k;function x(E,Z,U){h.fromArray(i,E*3),d.fromArray(i,Z*3),p.fromArray(i,U*3),g.fromArray(s,E*2),_.fromArray(s,Z*2),m.fromArray(s,U*2),d.sub(h),p.sub(h),_.sub(g),m.sub(g);const P=1/(_.x*m.y-m.x*_.y);isFinite(P)&&(f.copy(d).multiplyScalar(m.y).addScaledVector(p,-_.y).multiplyScalar(P),v.copy(p).multiplyScalar(_.x).addScaledVector(d,-m.x).multiplyScalar(P),c[E].add(f),c[Z].add(f),c[U].add(f),u[E].add(v),u[Z].add(v),u[U].add(v))}let b=this.groups;b.length===0&&(b=[{start:0,count:n.length}]);for(let E=0,Z=b.length;E<Z;++E){const U=b[E],P=U.start,D=U.count;for(let B=P,q=P+D;B<q;B+=3)x(n[B+0],n[B+1],n[B+2])}const y=new k,T=new k,C=new k,L=new k;function S(E){C.fromArray(r,E*3),L.copy(C);const Z=c[E];y.copy(Z),y.sub(C.multiplyScalar(C.dot(Z))).normalize(),T.crossVectors(L,Z);const P=T.dot(u[E])<0?-1:1;l[E*4]=y.x,l[E*4+1]=y.y,l[E*4+2]=y.z,l[E*4+3]=P}for(let E=0,Z=b.length;E<Z;++E){const U=b[E],P=U.start,D=U.count;for(let B=P,q=P+D;B<q;B+=3)S(n[B+0]),S(n[B+1]),S(n[B+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Gt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const i=new k,r=new k,s=new k,a=new k,l=new k,c=new k,u=new k,h=new k;if(e)for(let d=0,p=e.count;d<p;d+=3){const g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,m),u.subVectors(s,r),h.subVectors(i,r),u.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),s.fromBufferAttribute(t,d+2),u.subVectors(s,r),h.subVectors(i,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)yt.fromBufferAttribute(e,t),yt.normalize(),e.setXYZ(t,yt.x,yt.y,yt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*u;for(let f=0;f<u;f++)d[g++]=c[p++]}return new Gt(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new mt,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){const d=c[u],p=e(d,n);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let a=0,l=s.length;a<l;a++){const c=s[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(i[l]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let d=0,p=h.length;d<p;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,u=s.length;c<u;c++){const h=s[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Yl=new Xe,dn=new qs,fs=new vn,ql=new k,Ai=new k,Ei=new k,Ci=new k,Ba=new k,ps=new k,ms=new Ne,gs=new Ne,_s=new Ne,Kl=new k,Zl=new k,$l=new k,vs=new k,xs=new k;class Mt extends ut{constructor(e=new mt,t=new Rn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,s=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(r&&a){ps.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],h=r[l];u!==0&&(Ba.fromBufferAttribute(h,e),s?ps.addScaledVector(Ba,u):ps.addScaledVector(Ba.sub(t),u))}t.add(ps)}return this.isSkinnedMesh&&this.applyBoneTransform(e,t),t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),fs.copy(n.boundingSphere),fs.applyMatrix4(r),dn.copy(e.ray).recast(e.near),fs.containsPoint(dn.origin)===!1&&(dn.intersectSphere(fs,ql)===null||dn.origin.distanceToSquared(ql)>(e.far-e.near)**2))||(Yl.copy(r).invert(),dn.copy(e.ray).applyMatrix4(Yl),n.boundingBox!==null&&dn.intersectsBox(n.boundingBox)===!1))return;let s;const a=n.index,l=n.attributes.position,c=n.attributes.uv,u=n.attributes.uv2,h=n.attributes.normal,d=n.groups,p=n.drawRange;if(a!==null)if(Array.isArray(i))for(let g=0,_=d.length;g<_;g++){const m=d[g],f=i[m.materialIndex],v=Math.max(m.start,p.start),x=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let b=v,y=x;b<y;b+=3){const T=a.getX(b),C=a.getX(b+1),L=a.getX(b+2);s=ys(this,f,e,dn,c,u,h,T,C,L),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const v=a.getX(m),x=a.getX(m+1),b=a.getX(m+2);s=ys(this,i,e,dn,c,u,h,v,x,b),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(i))for(let g=0,_=d.length;g<_;g++){const m=d[g],f=i[m.materialIndex],v=Math.max(m.start,p.start),x=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let b=v,y=x;b<y;b+=3){const T=b,C=b+1,L=b+2;s=ys(this,f,e,dn,c,u,h,T,C,L),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const v=m,x=m+1,b=m+2;s=ys(this,i,e,dn,c,u,h,v,x,b),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function Jd(o,e,t,n,i,r,s,a){let l;if(e.side===Nt?l=n.intersectTriangle(s,r,i,!0,a):l=n.intersectTriangle(i,r,s,e.side===gn,a),l===null)return null;xs.copy(a),xs.applyMatrix4(o.matrixWorld);const c=t.ray.origin.distanceTo(xs);return c<t.near||c>t.far?null:{distance:c,point:xs.clone(),object:o}}function ys(o,e,t,n,i,r,s,a,l,c){o.getVertexPosition(a,Ai),o.getVertexPosition(l,Ei),o.getVertexPosition(c,Ci);const u=Jd(o,e,t,n,Ai,Ei,Ci,vs);if(u){i&&(ms.fromBufferAttribute(i,a),gs.fromBufferAttribute(i,l),_s.fromBufferAttribute(i,c),u.uv=Kt.getInterpolation(vs,Ai,Ei,Ci,ms,gs,_s,new Ne)),r&&(ms.fromBufferAttribute(r,a),gs.fromBufferAttribute(r,l),_s.fromBufferAttribute(r,c),u.uv2=Kt.getInterpolation(vs,Ai,Ei,Ci,ms,gs,_s,new Ne)),s&&(Kl.fromBufferAttribute(s,a),Zl.fromBufferAttribute(s,l),$l.fromBufferAttribute(s,c),u.normal=Kt.getInterpolation(vs,Ai,Ei,Ci,Kl,Zl,$l,new k),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new k,materialIndex:0};Kt.getNormal(Ai,Ei,Ci,h.normal),u.face=h}return u}class Wr extends mt{constructor(e=1,t=1,n=1,i=1,r=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:s};const a=this;i=Math.floor(i),r=Math.floor(r),s=Math.floor(s);const l=[],c=[],u=[],h=[];let d=0,p=0;g("z","y","x",-1,-1,n,t,e,s,r,0),g("z","y","x",1,-1,n,t,-e,s,r,1),g("x","z","y",1,1,e,n,t,i,s,2),g("x","z","y",1,-1,e,n,-t,i,s,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new wt(c,3)),this.setAttribute("normal",new wt(u,3)),this.setAttribute("uv",new wt(h,2));function g(_,m,f,v,x,b,y,T,C,L,S){const E=b/C,Z=y/L,U=b/2,P=y/2,D=T/2,B=C+1,q=L+1;let re=0,$=0;const z=new k;for(let K=0;K<q;K++){const N=K*Z-P;for(let W=0;W<B;W++){const F=W*E-U;z[_]=F*v,z[m]=N*x,z[f]=D,c.push(z.x,z.y,z.z),z[_]=0,z[m]=0,z[f]=T>0?1:-1,u.push(z.x,z.y,z.z),h.push(W/C),h.push(1-K/L),re+=1}}for(let K=0;K<L;K++)for(let N=0;N<C;N++){const W=d+N+B*K,F=d+N+B*(K+1),G=d+(N+1)+B*(K+1),H=d+(N+1)+B*K;l.push(W,F,H),l.push(F,G,H),$+=6}a.addGroup(p,$,S),p+=$,d+=re}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ji(o){const e={};for(const t in o){e[t]={};for(const n in o[t]){const i=o[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Bt(o){const e={};for(let t=0;t<o.length;t++){const n=Ji(o[t]);for(const i in n)e[i]=n[i]}return e}function Qd(o){const e=[];for(let t=0;t<o.length;t++)e.push(o[t].clone());return e}function ku(o){return o.getRenderTarget()===null&&o.outputEncoding===nt?fn:kr}const Bu={clone:Ji,merge:Bt};var ef=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,tf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class cn extends Qt{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ef,this.fragmentShader=tf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ji(e.uniforms),this.uniformsGroups=Qd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const s=this.uniforms[i].value;s&&s.isTexture?t.uniforms[i]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[i]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[i]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[i]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[i]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[i]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[i]={type:"m4",value:s.toArray()}:t.uniforms[i]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}let Gu=class extends ut{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Xe,this.projectionMatrix=new Xe,this.projectionMatrixInverse=new Xe}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}};class Ot extends Gu{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=$i*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Pr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return $i*2*Math.atan(Math.tan(Pr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Pr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;r+=s.offsetX*i/l,t-=s.offsetY*n/c,i*=s.width/l,n*=s.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Li=-90,Ri=1;class nf extends ut{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new Ot(Li,Ri,e,t);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const r=new Ot(Li,Ri,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(-1,0,0),this.add(r);const s=new Ot(Li,Ri,e,t);s.layers=this.layers,s.up.set(0,0,-1),s.lookAt(0,1,0),this.add(s);const a=new Ot(Li,Ri,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const l=new Ot(Li,Ri,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new Ot(Li,Ri,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,r,s,a,l,c]=this.children,u=e.getRenderTarget(),h=e.toneMapping,d=e.xr.enabled;e.toneMapping=Pn,e.xr.enabled=!1;const p=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,r),e.setRenderTarget(n,2),e.render(t,s),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=p,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=h,e.xr.enabled=d,n.texture.needsPMREMUpdate=!0}}class zu extends St{constructor(e,t,n,i,r,s,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Xi,super(e,t,n,i,r,s,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class rf extends ai{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new zu(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ut}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Wr(5,5,5),r=new cn({name:"CubemapFromEquirect",uniforms:Ji(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Nt,blending:Hn});r.uniforms.tEquirect.value=t;const s=new Mt(i,r),a=t.minFilter;return t.minFilter===ii&&(t.minFilter=Ut),new nf(1,10,this).update(e,s),t.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,n,i);e.setRenderTarget(r)}}const Ga=new k,sf=new k,af=new Ke;class Zn{constructor(e=new k(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Ga.subVectors(n,t).cross(sf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ga),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||af.getNormalMatrix(e),i=this.coplanarPoint(Ga).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const qn=new vn,bs=new k;class Io{constructor(e=new Zn,t=new Zn,n=new Zn,i=new Zn,r=new Zn,s=new Zn){this.planes=[e,t,n,i,r,s]}set(e,t,n,i,r,s){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(s),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],r=n[1],s=n[2],a=n[3],l=n[4],c=n[5],u=n[6],h=n[7],d=n[8],p=n[9],g=n[10],_=n[11],m=n[12],f=n[13],v=n[14],x=n[15];return t[0].setComponents(a-i,h-l,_-d,x-m).normalize(),t[1].setComponents(a+i,h+l,_+d,x+m).normalize(),t[2].setComponents(a+r,h+c,_+p,x+f).normalize(),t[3].setComponents(a-r,h-c,_-p,x-f).normalize(),t[4].setComponents(a-s,h-u,_-g,x-v).normalize(),t[5].setComponents(a+s,h+u,_+g,x+v).normalize(),this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),qn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),qn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(qn)}intersectsSprite(e){return qn.center.set(0,0,0),qn.radius=.7071067811865476,qn.applyMatrix4(e.matrixWorld),this.intersectsSphere(qn)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(bs.x=i.normal.x>0?e.max.x:e.min.x,bs.y=i.normal.y>0?e.max.y:e.min.y,bs.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(bs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Vu(){let o=null,e=!1,t=null,n=null;function i(r,s){t(r,s),n=o.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=o.requestAnimationFrame(i),e=!0)},stop:function(){o.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){o=r}}}function of(o,e){const t=e.isWebGL2,n=new WeakMap;function i(c,u){const h=c.array,d=c.usage,p=o.createBuffer();o.bindBuffer(u,p),o.bufferData(u,h,d),c.onUploadCallback();let g;if(h instanceof Float32Array)g=5126;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(h instanceof Int16Array)g=5122;else if(h instanceof Uint32Array)g=5125;else if(h instanceof Int32Array)g=5124;else if(h instanceof Int8Array)g=5120;else if(h instanceof Uint8Array)g=5121;else if(h instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:p,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function r(c,u,h){const d=u.array,p=u.updateRange;o.bindBuffer(h,c),p.count===-1?o.bufferSubData(h,0,d):(t?o.bufferSubData(h,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):o.bufferSubData(h,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function s(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(o.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h===void 0?n.set(c,i(c,u)):h.version<c.version&&(r(h.buffer,c,u),h.version=c.version)}return{get:s,remove:a,update:l}}class er extends mt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,s=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,h=e/a,d=t/l,p=[],g=[],_=[],m=[];for(let f=0;f<u;f++){const v=f*d-s;for(let x=0;x<c;x++){const b=x*h-r;g.push(b,-v,0),_.push(0,0,1),m.push(x/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let v=0;v<a;v++){const x=v+c*f,b=v+c*(f+1),y=v+1+c*(f+1),T=v+1+c*f;p.push(x,b,T),p.push(b,y,T)}this.setIndex(p),this.setAttribute("position",new wt(g,3)),this.setAttribute("normal",new wt(_,3)),this.setAttribute("uv",new wt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new er(e.width,e.height,e.widthSegments,e.heightSegments)}}var lf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,cf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,uf=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,hf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,df=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ff=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,pf="vec3 transformed = vec3( position );",mf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,gf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,_f=`#ifdef USE_IRIDESCENCE
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
#endif`,vf=`#ifdef USE_BUMPMAP
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
#endif`,xf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,yf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,bf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Mf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Sf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,wf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Tf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Af=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Ef=`#define PI 3.141592653589793
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
} // validated`,Cf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Lf=`vec3 transformedNormal = objectNormal;
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
#endif`,Rf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Pf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Df=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,If=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Uf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Of=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Nf=`#ifdef USE_ENVMAP
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
#endif`,Ff=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,kf=`#ifdef USE_ENVMAP
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
#endif`,Bf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Gf=`#ifdef USE_ENVMAP
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
#endif`,zf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Vf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Hf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Wf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,jf=`#ifdef USE_GRADIENTMAP
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
}`,Xf=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Yf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,qf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Kf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Zf=`uniform bool receiveShadow;
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
#endif`,$f=`#if defined( USE_ENVMAP )
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
#endif`,Jf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Qf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ep=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,tp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,np=`PhysicalMaterial material;
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
#endif`,ip=`struct PhysicalMaterial {
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
}`,rp=`
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
#endif`,sp=`#if defined( RE_IndirectDiffuse )
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
#endif`,ap=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,op=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,lp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,up=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,hp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,dp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,fp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,pp=`#if defined( USE_POINTS_UV )
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
#endif`,mp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,gp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,_p=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,vp=`#ifdef USE_MORPHNORMALS
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
#endif`,xp=`#ifdef USE_MORPHTARGETS
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
#endif`,yp=`#ifdef USE_MORPHTARGETS
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
#endif`,bp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,Mp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Sp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Tp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ap=`#ifdef USE_NORMALMAP
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
#endif`,Ep=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Cp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Lp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Rp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Pp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Dp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ip=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Up=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Op=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Np=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Fp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,kp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Bp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Gp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,zp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Vp=`float getShadowMask() {
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
}`,Hp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Wp=`#ifdef USE_SKINNING
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
#endif`,jp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Xp=`#ifdef USE_SKINNING
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
#endif`,Yp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,qp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Kp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Zp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,$p=`#ifdef USE_TRANSMISSION
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
#endif`,Jp=`#ifdef USE_TRANSMISSION
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
#endif`,Qp=`#ifdef USE_UV
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
#endif`,em=`#ifdef USE_UV
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
#endif`,tm=`#ifdef USE_UV
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
#endif`,nm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const im=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,rm=`uniform sampler2D t2D;
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
}`,sm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,am=`#ifdef ENVMAP_TYPE_CUBE
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
}`,om=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,cm=`#include <common>
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
}`,um=`#if DEPTH_PACKING == 3200
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
}`,hm=`#define DISTANCE
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
}`,dm=`#define DISTANCE
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
}`,fm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,pm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,mm=`uniform float scale;
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
}`,gm=`uniform vec3 diffuse;
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
}`,_m=`#include <common>
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
}`,vm=`uniform vec3 diffuse;
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
}`,xm=`#define LAMBERT
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
}`,ym=`#define LAMBERT
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
}`,bm=`#define MATCAP
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
}`,Mm=`#define MATCAP
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
}`,Sm=`#define NORMAL
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
}`,wm=`#define NORMAL
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
}`,Tm=`#define PHONG
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
}`,Am=`#define PHONG
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
}`,Em=`#define STANDARD
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
}`,Cm=`#define STANDARD
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
}`,Lm=`#define TOON
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
}`,Rm=`#define TOON
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
}`,Pm=`uniform float size;
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
}`,Dm=`uniform vec3 diffuse;
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
}`,Im=`#include <common>
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
}`,Um=`uniform vec3 color;
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
}`,Om=`uniform float rotation;
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
}`,Nm=`uniform vec3 diffuse;
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
}`,He={alphamap_fragment:lf,alphamap_pars_fragment:cf,alphatest_fragment:uf,alphatest_pars_fragment:hf,aomap_fragment:df,aomap_pars_fragment:ff,begin_vertex:pf,beginnormal_vertex:mf,bsdfs:gf,iridescence_fragment:_f,bumpmap_pars_fragment:vf,clipping_planes_fragment:xf,clipping_planes_pars_fragment:yf,clipping_planes_pars_vertex:bf,clipping_planes_vertex:Mf,color_fragment:Sf,color_pars_fragment:wf,color_pars_vertex:Tf,color_vertex:Af,common:Ef,cube_uv_reflection_fragment:Cf,defaultnormal_vertex:Lf,displacementmap_pars_vertex:Rf,displacementmap_vertex:Pf,emissivemap_fragment:Df,emissivemap_pars_fragment:If,encodings_fragment:Uf,encodings_pars_fragment:Of,envmap_fragment:Nf,envmap_common_pars_fragment:Ff,envmap_pars_fragment:kf,envmap_pars_vertex:Bf,envmap_physical_pars_fragment:$f,envmap_vertex:Gf,fog_vertex:zf,fog_pars_vertex:Vf,fog_fragment:Hf,fog_pars_fragment:Wf,gradientmap_pars_fragment:jf,lightmap_fragment:Xf,lightmap_pars_fragment:Yf,lights_lambert_fragment:qf,lights_lambert_pars_fragment:Kf,lights_pars_begin:Zf,lights_toon_fragment:Jf,lights_toon_pars_fragment:Qf,lights_phong_fragment:ep,lights_phong_pars_fragment:tp,lights_physical_fragment:np,lights_physical_pars_fragment:ip,lights_fragment_begin:rp,lights_fragment_maps:sp,lights_fragment_end:ap,logdepthbuf_fragment:op,logdepthbuf_pars_fragment:lp,logdepthbuf_pars_vertex:cp,logdepthbuf_vertex:up,map_fragment:hp,map_pars_fragment:dp,map_particle_fragment:fp,map_particle_pars_fragment:pp,metalnessmap_fragment:mp,metalnessmap_pars_fragment:gp,morphcolor_vertex:_p,morphnormal_vertex:vp,morphtarget_pars_vertex:xp,morphtarget_vertex:yp,normal_fragment_begin:bp,normal_fragment_maps:Mp,normal_pars_fragment:Sp,normal_pars_vertex:wp,normal_vertex:Tp,normalmap_pars_fragment:Ap,clearcoat_normal_fragment_begin:Ep,clearcoat_normal_fragment_maps:Cp,clearcoat_pars_fragment:Lp,iridescence_pars_fragment:Rp,output_fragment:Pp,packing:Dp,premultiplied_alpha_fragment:Ip,project_vertex:Up,dithering_fragment:Op,dithering_pars_fragment:Np,roughnessmap_fragment:Fp,roughnessmap_pars_fragment:kp,shadowmap_pars_fragment:Bp,shadowmap_pars_vertex:Gp,shadowmap_vertex:zp,shadowmask_pars_fragment:Vp,skinbase_vertex:Hp,skinning_pars_vertex:Wp,skinning_vertex:jp,skinnormal_vertex:Xp,specularmap_fragment:Yp,specularmap_pars_fragment:qp,tonemapping_fragment:Kp,tonemapping_pars_fragment:Zp,transmission_fragment:$p,transmission_pars_fragment:Jp,uv_pars_fragment:Qp,uv_pars_vertex:em,uv_vertex:tm,worldpos_vertex:nm,background_vert:im,background_frag:rm,backgroundCube_vert:sm,backgroundCube_frag:am,cube_vert:om,cube_frag:lm,depth_vert:cm,depth_frag:um,distanceRGBA_vert:hm,distanceRGBA_frag:dm,equirect_vert:fm,equirect_frag:pm,linedashed_vert:mm,linedashed_frag:gm,meshbasic_vert:_m,meshbasic_frag:vm,meshlambert_vert:xm,meshlambert_frag:ym,meshmatcap_vert:bm,meshmatcap_frag:Mm,meshnormal_vert:Sm,meshnormal_frag:wm,meshphong_vert:Tm,meshphong_frag:Am,meshphysical_vert:Em,meshphysical_frag:Cm,meshtoon_vert:Lm,meshtoon_frag:Rm,points_vert:Pm,points_frag:Dm,shadow_vert:Im,shadow_frag:Um,sprite_vert:Om,sprite_frag:Nm},Le={common:{diffuse:{value:new Fe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ke}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ke},normalScale:{value:new Ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Ke}},sprite:{diffuse:{value:new Fe(16777215)},opacity:{value:1},center:{value:new Ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaTest:{value:0}}},pn={basic:{uniforms:Bt([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.fog]),vertexShader:He.meshbasic_vert,fragmentShader:He.meshbasic_frag},lambert:{uniforms:Bt([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new Fe(0)}}]),vertexShader:He.meshlambert_vert,fragmentShader:He.meshlambert_frag},phong:{uniforms:Bt([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new Fe(0)},specular:{value:new Fe(1118481)},shininess:{value:30}}]),vertexShader:He.meshphong_vert,fragmentShader:He.meshphong_frag},standard:{uniforms:Bt([Le.common,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.roughnessmap,Le.metalnessmap,Le.fog,Le.lights,{emissive:{value:new Fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag},toon:{uniforms:Bt([Le.common,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.gradientmap,Le.fog,Le.lights,{emissive:{value:new Fe(0)}}]),vertexShader:He.meshtoon_vert,fragmentShader:He.meshtoon_frag},matcap:{uniforms:Bt([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,{matcap:{value:null}}]),vertexShader:He.meshmatcap_vert,fragmentShader:He.meshmatcap_frag},points:{uniforms:Bt([Le.points,Le.fog]),vertexShader:He.points_vert,fragmentShader:He.points_frag},dashed:{uniforms:Bt([Le.common,Le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:He.linedashed_vert,fragmentShader:He.linedashed_frag},depth:{uniforms:Bt([Le.common,Le.displacementmap]),vertexShader:He.depth_vert,fragmentShader:He.depth_frag},normal:{uniforms:Bt([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,{opacity:{value:1}}]),vertexShader:He.meshnormal_vert,fragmentShader:He.meshnormal_frag},sprite:{uniforms:Bt([Le.sprite,Le.fog]),vertexShader:He.sprite_vert,fragmentShader:He.sprite_frag},background:{uniforms:{uvTransform:{value:new Ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:He.background_vert,fragmentShader:He.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:He.backgroundCube_vert,fragmentShader:He.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:He.cube_vert,fragmentShader:He.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:He.equirect_vert,fragmentShader:He.equirect_frag},distanceRGBA:{uniforms:Bt([Le.common,Le.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:He.distanceRGBA_vert,fragmentShader:He.distanceRGBA_frag},shadow:{uniforms:Bt([Le.lights,Le.fog,{color:{value:new Fe(0)},opacity:{value:1}}]),vertexShader:He.shadow_vert,fragmentShader:He.shadow_frag}};pn.physical={uniforms:Bt([pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ke},clearcoatNormalScale:{value:new Ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ke},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ke},sheen:{value:0},sheenColor:{value:new Fe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ke},transmissionSamplerSize:{value:new Ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ke},attenuationDistance:{value:0},attenuationColor:{value:new Fe(0)},specularColor:{value:new Fe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ke}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag};const Ms={r:0,b:0,g:0};function Fm(o,e,t,n,i,r,s){const a=new Fe(0);let l=r===!0?0:1,c,u,h=null,d=0,p=null;function g(m,f){let v=!1,x=f.isScene===!0?f.background:null;x&&x.isTexture&&(x=(f.backgroundBlurriness>0?t:e).get(x));const b=o.xr,y=b.getSession&&b.getSession();y&&y.environmentBlendMode==="additive"&&(x=null),x===null?_(a,l):x&&x.isColor&&(_(x,1),v=!0),(o.autoClear||v)&&o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Ys)?(u===void 0&&(u=new Mt(new Wr(1,1,1),new cn({name:"BackgroundCubeMaterial",uniforms:Ji(pn.backgroundCube.uniforms),vertexShader:pn.backgroundCube.vertexShader,fragmentShader:pn.backgroundCube.fragmentShader,side:Nt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,C,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,u.material.toneMapped=x.encoding!==nt,(h!==x||d!==x.version||p!==o.toneMapping)&&(u.material.needsUpdate=!0,h=x,d=x.version,p=o.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new Mt(new er(2,2),new cn({name:"BackgroundMaterial",uniforms:Ji(pn.background.uniforms),vertexShader:pn.background.vertexShader,fragmentShader:pn.background.fragmentShader,side:gn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=x.encoding!==nt,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||d!==x.version||p!==o.toneMapping)&&(c.material.needsUpdate=!0,h=x,d=x.version,p=o.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function _(m,f){m.getRGB(Ms,ku(o)),n.buffers.color.setClear(Ms.r,Ms.g,Ms.b,f,s)}return{getClearColor:function(){return a},setClearColor:function(m,f=1){a.set(m),l=f,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,_(a,l)},render:g}}function km(o,e,t,n){const i=o.getParameter(34921),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),s=n.isWebGL2||r!==null,a={},l=m(null);let c=l,u=!1;function h(D,B,q,re,$){let z=!1;if(s){const K=_(re,q,B);c!==K&&(c=K,p(c.object)),z=f(D,re,q,$),z&&v(D,re,q,$)}else{const K=B.wireframe===!0;(c.geometry!==re.id||c.program!==q.id||c.wireframe!==K)&&(c.geometry=re.id,c.program=q.id,c.wireframe=K,z=!0)}$!==null&&t.update($,34963),(z||u)&&(u=!1,L(D,B,q,re),$!==null&&o.bindBuffer(34963,t.get($).buffer))}function d(){return n.isWebGL2?o.createVertexArray():r.createVertexArrayOES()}function p(D){return n.isWebGL2?o.bindVertexArray(D):r.bindVertexArrayOES(D)}function g(D){return n.isWebGL2?o.deleteVertexArray(D):r.deleteVertexArrayOES(D)}function _(D,B,q){const re=q.wireframe===!0;let $=a[D.id];$===void 0&&($={},a[D.id]=$);let z=$[B.id];z===void 0&&(z={},$[B.id]=z);let K=z[re];return K===void 0&&(K=m(d()),z[re]=K),K}function m(D){const B=[],q=[],re=[];for(let $=0;$<i;$++)B[$]=0,q[$]=0,re[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:q,attributeDivisors:re,object:D,attributes:{},index:null}}function f(D,B,q,re){const $=c.attributes,z=B.attributes;let K=0;const N=q.getAttributes();for(const W in N)if(N[W].location>=0){const G=$[W];let H=z[W];if(H===void 0&&(W==="instanceMatrix"&&D.instanceMatrix&&(H=D.instanceMatrix),W==="instanceColor"&&D.instanceColor&&(H=D.instanceColor)),G===void 0||G.attribute!==H||H&&G.data!==H.data)return!0;K++}return c.attributesNum!==K||c.index!==re}function v(D,B,q,re){const $={},z=B.attributes;let K=0;const N=q.getAttributes();for(const W in N)if(N[W].location>=0){let G=z[W];G===void 0&&(W==="instanceMatrix"&&D.instanceMatrix&&(G=D.instanceMatrix),W==="instanceColor"&&D.instanceColor&&(G=D.instanceColor));const H={};H.attribute=G,G&&G.data&&(H.data=G.data),$[W]=H,K++}c.attributes=$,c.attributesNum=K,c.index=re}function x(){const D=c.newAttributes;for(let B=0,q=D.length;B<q;B++)D[B]=0}function b(D){y(D,0)}function y(D,B){const q=c.newAttributes,re=c.enabledAttributes,$=c.attributeDivisors;q[D]=1,re[D]===0&&(o.enableVertexAttribArray(D),re[D]=1),$[D]!==B&&((n.isWebGL2?o:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,B),$[D]=B)}function T(){const D=c.newAttributes,B=c.enabledAttributes;for(let q=0,re=B.length;q<re;q++)B[q]!==D[q]&&(o.disableVertexAttribArray(q),B[q]=0)}function C(D,B,q,re,$,z){n.isWebGL2===!0&&(q===5124||q===5125)?o.vertexAttribIPointer(D,B,q,$,z):o.vertexAttribPointer(D,B,q,re,$,z)}function L(D,B,q,re){if(n.isWebGL2===!1&&(D.isInstancedMesh||re.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const $=re.attributes,z=q.getAttributes(),K=B.defaultAttributeValues;for(const N in z){const W=z[N];if(W.location>=0){let F=$[N];if(F===void 0&&(N==="instanceMatrix"&&D.instanceMatrix&&(F=D.instanceMatrix),N==="instanceColor"&&D.instanceColor&&(F=D.instanceColor)),F!==void 0){const G=F.normalized,H=F.itemSize,ee=t.get(F);if(ee===void 0)continue;const I=ee.buffer,ie=ee.type,ue=ee.bytesPerElement;if(F.isInterleavedBufferAttribute){const se=F.data,le=se.stride,oe=F.offset;if(se.isInstancedInterleavedBuffer){for(let be=0;be<W.locationSize;be++)y(W.location+be,se.meshPerAttribute);D.isInstancedMesh!==!0&&re._maxInstanceCount===void 0&&(re._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let be=0;be<W.locationSize;be++)b(W.location+be);o.bindBuffer(34962,I);for(let be=0;be<W.locationSize;be++)C(W.location+be,H/W.locationSize,ie,G,le*ue,(oe+H/W.locationSize*be)*ue)}else{if(F.isInstancedBufferAttribute){for(let se=0;se<W.locationSize;se++)y(W.location+se,F.meshPerAttribute);D.isInstancedMesh!==!0&&re._maxInstanceCount===void 0&&(re._maxInstanceCount=F.meshPerAttribute*F.count)}else for(let se=0;se<W.locationSize;se++)b(W.location+se);o.bindBuffer(34962,I);for(let se=0;se<W.locationSize;se++)C(W.location+se,H/W.locationSize,ie,G,H*ue,H/W.locationSize*se*ue)}}else if(K!==void 0){const G=K[N];if(G!==void 0)switch(G.length){case 2:o.vertexAttrib2fv(W.location,G);break;case 3:o.vertexAttrib3fv(W.location,G);break;case 4:o.vertexAttrib4fv(W.location,G);break;default:o.vertexAttrib1fv(W.location,G)}}}}T()}function S(){U();for(const D in a){const B=a[D];for(const q in B){const re=B[q];for(const $ in re)g(re[$].object),delete re[$];delete B[q]}delete a[D]}}function E(D){if(a[D.id]===void 0)return;const B=a[D.id];for(const q in B){const re=B[q];for(const $ in re)g(re[$].object),delete re[$];delete B[q]}delete a[D.id]}function Z(D){for(const B in a){const q=a[B];if(q[D.id]===void 0)continue;const re=q[D.id];for(const $ in re)g(re[$].object),delete re[$];delete q[D.id]}}function U(){P(),u=!0,c!==l&&(c=l,p(c.object))}function P(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:U,resetDefaultState:P,dispose:S,releaseStatesOfGeometry:E,releaseStatesOfProgram:Z,initAttributes:x,enableAttribute:b,disableUnusedAttributes:T}}function Bm(o,e,t,n){const i=n.isWebGL2;let r;function s(c){r=c}function a(c,u){o.drawArrays(r,c,u),t.update(u,r,1)}function l(c,u,h){if(h===0)return;let d,p;if(i)d=o,p="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[p](r,c,u,h),t.update(u,r,h)}this.setMode=s,this.render=a,this.renderInstances=l}function Gm(o,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");n=o.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(C){if(C==="highp"){if(o.getShaderPrecisionFormat(35633,36338).precision>0&&o.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";C="mediump"}return C==="mediump"&&o.getShaderPrecisionFormat(35633,36337).precision>0&&o.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const s=typeof WebGL2RenderingContext<"u"&&o.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=s||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=o.getParameter(34930),d=o.getParameter(35660),p=o.getParameter(3379),g=o.getParameter(34076),_=o.getParameter(34921),m=o.getParameter(36347),f=o.getParameter(36348),v=o.getParameter(36349),x=d>0,b=s||e.has("OES_texture_float"),y=x&&b,T=s?o.getParameter(36183):0;return{isWebGL2:s,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:m,maxVaryings:f,maxFragmentUniforms:v,vertexTextures:x,floatFragmentTextures:b,floatVertexTextures:y,maxSamples:T}}function zm(o){const e=this;let t=null,n=0,i=!1,r=!1;const s=new Zn,a=new Ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const p=h.length!==0||d||n!==0||i;return i=d,n=h.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,p){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,f=o.get(h);if(!i||g===null||g.length===0||r&&!m)r?u(null):c();else{const v=r?0:n,x=v*4;let b=f.clippingState||null;l.value=b,b=u(g,d,x,p);for(let y=0;y!==x;++y)b[y]=t[y];f.clippingState=b,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,p,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const f=p+_*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<f)&&(m=new Float32Array(f));for(let x=0,b=p;x!==_;++x,b+=4)s.copy(h[x]).applyMatrix4(v,a),s.normal.toArray(m,b),m[b+3]=s.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function Vm(o){let e=new WeakMap;function t(s,a){return a===Hs?s.mapping=Xi:a===ao&&(s.mapping=Yi),s}function n(s){if(s&&s.isTexture&&s.isRenderTargetTexture===!1){const a=s.mapping;if(a===Hs||a===ao)if(e.has(s)){const l=e.get(s).texture;return t(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const c=new rf(l.height/2);return c.fromEquirectangularTexture(o,s),e.set(s,c),s.addEventListener("dispose",i),t(c.texture,s.mapping)}else return null}}return s}function i(s){const a=s.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class Uo extends Gu{constructor(e=-1,t=1,n=1,i=-1,r=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,s=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,s=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,s,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Gi=4,Jl=[.125,.215,.35,.446,.526,.582],Jn=20,za=new Uo,Ql=new Fe;let Va=null;const $n=(1+Math.sqrt(5))/2,Pi=1/$n,ec=[new k(1,1,1),new k(-1,1,1),new k(1,1,-1),new k(-1,1,-1),new k(0,$n,Pi),new k(0,$n,-Pi),new k(Pi,0,$n),new k(-Pi,0,$n),new k($n,Pi,0),new k(-$n,Pi,0)];class tc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Va=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=rc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ic(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Va),e.scissorTest=!1,Ss(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Xi||e.mapping===Yi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Va=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ut,minFilter:Ut,generateMipmaps:!1,type:Nr,format:Jt,encoding:si,depthBuffer:!1},i=nc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=nc(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Hm(r)),this._blurMaterial=Wm(r,e,t)}return i}_compileMaterial(e){const t=new Mt(this._lodPlanes[0],e);this._renderer.compile(t,za)}_sceneToCubeUV(e,t,n,i){const a=new Ot(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(Ql),u.toneMapping=Pn,u.autoClear=!1;const p=new Rn({name:"PMREM.Background",side:Nt,depthWrite:!1,depthTest:!1}),g=new Mt(new Wr,p);let _=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,_=!0):(p.color.copy(Ql),_=!0);for(let f=0;f<6;f++){const v=f%3;v===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):v===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));const x=this._cubeSize;Ss(i,v*x,f>2?x:0,x,x),u.setRenderTarget(i),_&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Xi||e.mapping===Yi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=rc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ic());const r=i?this._cubemapMaterial:this._equirectMaterial,s=new Mt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;Ss(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(s,za)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),s=ec[(i-1)%ec.length];this._blur(e,i-1,i,r,s)}t.autoClear=n}_blur(e,t,n,i,r){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,n,i,"latitudinal",r),this._halfBlur(s,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,s,a){const l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Mt(this._lodPlanes[i],c),d=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Jn-1),_=r/g,m=isFinite(r)?1+Math.floor(u*_):Jn;m>Jn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Jn}`);const f=[];let v=0;for(let C=0;C<Jn;++C){const L=C/_,S=Math.exp(-L*L/2);f.push(S),C===0?v+=S:C<m&&(v+=2*S)}for(let C=0;C<f.length;C++)f[C]=f[C]/v;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=s==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-n;const b=this._sizeLods[i],y=3*b*(i>x-Gi?i-x+Gi:0),T=4*(this._cubeSize-b);Ss(t,y,T,3*b,2*b),l.setRenderTarget(t),l.render(h,za)}}function Hm(o){const e=[],t=[],n=[];let i=o;const r=o-Gi+1+Jl.length;for(let s=0;s<r;s++){const a=Math.pow(2,i);t.push(a);let l=1/a;s>o-Gi?l=Jl[s-o+Gi-1]:s===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,_=3,m=2,f=1,v=new Float32Array(_*g*p),x=new Float32Array(m*g*p),b=new Float32Array(f*g*p);for(let T=0;T<p;T++){const C=T%3*2/3-1,L=T>2?0:-1,S=[C,L,0,C+2/3,L,0,C+2/3,L+1,0,C,L,0,C+2/3,L+1,0,C,L+1,0];v.set(S,_*g*T),x.set(d,m*g*T);const E=[T,T,T,T,T,T];b.set(E,f*g*T)}const y=new mt;y.setAttribute("position",new Gt(v,_)),y.setAttribute("uv",new Gt(x,m)),y.setAttribute("faceIndex",new Gt(b,f)),e.push(y),i>Gi&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function nc(o,e,t){const n=new ai(o,e,t);return n.texture.mapping=Ys,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ss(o,e,t,n,i){o.viewport.set(e,t,n,i),o.scissor.set(e,t,n,i)}function Wm(o,e,t){const n=new Float32Array(Jn),i=new k(0,1,0);return new cn({name:"SphericalGaussianBlur",defines:{n:Jn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Oo(),fragmentShader:`

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
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function ic(){return new cn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Oo(),fragmentShader:`

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
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function rc(){return new cn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Oo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function Oo(){return`

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
	`}function jm(o){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Hs||l===ao,u=l===Xi||l===Yi;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return t===null&&(t=new tc(o)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(c&&h&&h.height>0||u&&h&&i(h)){t===null&&(t=new tc(o));const d=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",r),d.texture}else return null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:s}}function Xm(o){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=o.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Ym(o,e,t,n){const i={},r=new WeakMap;function s(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",s),delete i[d.id];const p=r.get(d);p&&(e.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return i[d.id]===!0||(d.addEventListener("dispose",s),i[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const g in d)e.update(d[g],34962);const p=h.morphAttributes;for(const g in p){const _=p[g];for(let m=0,f=_.length;m<f;m++)e.update(_[m],34962)}}function c(h){const d=[],p=h.index,g=h.attributes.position;let _=0;if(p!==null){const v=p.array;_=p.version;for(let x=0,b=v.length;x<b;x+=3){const y=v[x+0],T=v[x+1],C=v[x+2];d.push(y,T,T,C,C,y)}}else{const v=g.array;_=g.version;for(let x=0,b=v.length/3-1;x<b;x+=3){const y=x+0,T=x+1,C=x+2;d.push(y,T,T,C,C,y)}}const m=new(Pu(d)?Fu:Nu)(d,1);m.version=_;const f=r.get(h);f&&e.remove(f),r.set(h,m)}function u(h){const d=r.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function qm(o,e,t,n){const i=n.isWebGL2;let r;function s(d){r=d}let a,l;function c(d){a=d.type,l=d.bytesPerElement}function u(d,p){o.drawElements(r,p,a,d*l),t.update(p,r,1)}function h(d,p,g){if(g===0)return;let _,m;if(i)_=o,m="drawElementsInstanced";else if(_=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",_===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[m](r,p,a,d*l,g),t.update(p,r,g)}this.setMode=s,this.setIndex=c,this.render=u,this.renderInstances=h}function Km(o){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,s,a){switch(t.calls++,s){case 4:t.triangles+=a*(r/3);break;case 1:t.lines+=a*(r/2);break;case 3:t.lines+=a*(r-1);break;case 2:t.lines+=a*r;break;case 0:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Zm(o,e){return o[0]-e[0]}function $m(o,e){return Math.abs(e[1])-Math.abs(o[1])}function Jm(o,e,t){const n={},i=new Float32Array(8),r=new WeakMap,s=new at,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,h){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const p=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=p!==void 0?p.length:0;let _=r.get(u);if(_===void 0||_.count!==g){let D=function(){U.dispose(),r.delete(u),u.removeEventListener("dispose",D)};_!==void 0&&_.texture.dispose();const v=u.morphAttributes.position!==void 0,x=u.morphAttributes.normal!==void 0,b=u.morphAttributes.color!==void 0,y=u.morphAttributes.position||[],T=u.morphAttributes.normal||[],C=u.morphAttributes.color||[];let L=0;v===!0&&(L=1),x===!0&&(L=2),b===!0&&(L=3);let S=u.attributes.position.count*L,E=1;S>e.maxTextureSize&&(E=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const Z=new Float32Array(S*E*4*g),U=new Uu(Z,S,E,g);U.type=Vn,U.needsUpdate=!0;const P=L*4;for(let B=0;B<g;B++){const q=y[B],re=T[B],$=C[B],z=S*E*4*B;for(let K=0;K<q.count;K++){const N=K*P;v===!0&&(s.fromBufferAttribute(q,K),Z[z+N+0]=s.x,Z[z+N+1]=s.y,Z[z+N+2]=s.z,Z[z+N+3]=0),x===!0&&(s.fromBufferAttribute(re,K),Z[z+N+4]=s.x,Z[z+N+5]=s.y,Z[z+N+6]=s.z,Z[z+N+7]=0),b===!0&&(s.fromBufferAttribute($,K),Z[z+N+8]=s.x,Z[z+N+9]=s.y,Z[z+N+10]=s.z,Z[z+N+11]=$.itemSize===4?s.w:1)}}_={count:g,texture:U,size:new Ne(S,E)},r.set(u,_),u.addEventListener("dispose",D)}let m=0;for(let v=0;v<d.length;v++)m+=d[v];const f=u.morphTargetsRelative?1:1-m;h.getUniforms().setValue(o,"morphTargetBaseInfluence",f),h.getUniforms().setValue(o,"morphTargetInfluences",d),h.getUniforms().setValue(o,"morphTargetsTexture",_.texture,t),h.getUniforms().setValue(o,"morphTargetsTextureSize",_.size)}else{const p=d===void 0?0:d.length;let g=n[u.id];if(g===void 0||g.length!==p){g=[];for(let x=0;x<p;x++)g[x]=[x,0];n[u.id]=g}for(let x=0;x<p;x++){const b=g[x];b[0]=x,b[1]=d[x]}g.sort($m);for(let x=0;x<8;x++)x<p&&g[x][1]?(a[x][0]=g[x][0],a[x][1]=g[x][1]):(a[x][0]=Number.MAX_SAFE_INTEGER,a[x][1]=0);a.sort(Zm);const _=u.morphAttributes.position,m=u.morphAttributes.normal;let f=0;for(let x=0;x<8;x++){const b=a[x],y=b[0],T=b[1];y!==Number.MAX_SAFE_INTEGER&&T?(_&&u.getAttribute("morphTarget"+x)!==_[y]&&u.setAttribute("morphTarget"+x,_[y]),m&&u.getAttribute("morphNormal"+x)!==m[y]&&u.setAttribute("morphNormal"+x,m[y]),i[x]=T,f+=T):(_&&u.hasAttribute("morphTarget"+x)===!0&&u.deleteAttribute("morphTarget"+x),m&&u.hasAttribute("morphNormal"+x)===!0&&u.deleteAttribute("morphNormal"+x),i[x]=0)}const v=u.morphTargetsRelative?1:1-f;h.getUniforms().setValue(o,"morphTargetBaseInfluence",v),h.getUniforms().setValue(o,"morphTargetInfluences",i)}}return{update:l}}function Qm(o,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);return i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),h}function s(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:s}}const Hu=new St,Wu=new Uu,ju=new Vd,Xu=new zu,sc=[],ac=[],oc=new Float32Array(16),lc=new Float32Array(9),cc=new Float32Array(4);function tr(o,e,t){const n=o[0];if(n<=0||n>0)return o;const i=e*t;let r=sc[i];if(r===void 0&&(r=new Float32Array(i),sc[i]=r),e!==0){n.toArray(r,0);for(let s=1,a=0;s!==e;++s)a+=t,o[s].toArray(r,a)}return r}function vt(o,e){if(o.length!==e.length)return!1;for(let t=0,n=o.length;t<n;t++)if(o[t]!==e[t])return!1;return!0}function xt(o,e){for(let t=0,n=e.length;t<n;t++)o[t]=e[t]}function Zs(o,e){let t=ac[e];t===void 0&&(t=new Int32Array(e),ac[e]=t);for(let n=0;n!==e;++n)t[n]=o.allocateTextureUnit();return t}function eg(o,e){const t=this.cache;t[0]!==e&&(o.uniform1f(this.addr,e),t[0]=e)}function tg(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;o.uniform2fv(this.addr,e),xt(t,e)}}function ng(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(vt(t,e))return;o.uniform3fv(this.addr,e),xt(t,e)}}function ig(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;o.uniform4fv(this.addr,e),xt(t,e)}}function rg(o,e){const t=this.cache,n=e.elements;if(n===void 0){if(vt(t,e))return;o.uniformMatrix2fv(this.addr,!1,e),xt(t,e)}else{if(vt(t,n))return;cc.set(n),o.uniformMatrix2fv(this.addr,!1,cc),xt(t,n)}}function sg(o,e){const t=this.cache,n=e.elements;if(n===void 0){if(vt(t,e))return;o.uniformMatrix3fv(this.addr,!1,e),xt(t,e)}else{if(vt(t,n))return;lc.set(n),o.uniformMatrix3fv(this.addr,!1,lc),xt(t,n)}}function ag(o,e){const t=this.cache,n=e.elements;if(n===void 0){if(vt(t,e))return;o.uniformMatrix4fv(this.addr,!1,e),xt(t,e)}else{if(vt(t,n))return;oc.set(n),o.uniformMatrix4fv(this.addr,!1,oc),xt(t,n)}}function og(o,e){const t=this.cache;t[0]!==e&&(o.uniform1i(this.addr,e),t[0]=e)}function lg(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;o.uniform2iv(this.addr,e),xt(t,e)}}function cg(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vt(t,e))return;o.uniform3iv(this.addr,e),xt(t,e)}}function ug(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;o.uniform4iv(this.addr,e),xt(t,e)}}function hg(o,e){const t=this.cache;t[0]!==e&&(o.uniform1ui(this.addr,e),t[0]=e)}function dg(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;o.uniform2uiv(this.addr,e),xt(t,e)}}function fg(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vt(t,e))return;o.uniform3uiv(this.addr,e),xt(t,e)}}function pg(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;o.uniform4uiv(this.addr,e),xt(t,e)}}function mg(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||Hu,i)}function gg(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||ju,i)}function _g(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Xu,i)}function vg(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Wu,i)}function xg(o){switch(o){case 5126:return eg;case 35664:return tg;case 35665:return ng;case 35666:return ig;case 35674:return rg;case 35675:return sg;case 35676:return ag;case 5124:case 35670:return og;case 35667:case 35671:return lg;case 35668:case 35672:return cg;case 35669:case 35673:return ug;case 5125:return hg;case 36294:return dg;case 36295:return fg;case 36296:return pg;case 35678:case 36198:case 36298:case 36306:case 35682:return mg;case 35679:case 36299:case 36307:return gg;case 35680:case 36300:case 36308:case 36293:return _g;case 36289:case 36303:case 36311:case 36292:return vg}}function yg(o,e){o.uniform1fv(this.addr,e)}function bg(o,e){const t=tr(e,this.size,2);o.uniform2fv(this.addr,t)}function Mg(o,e){const t=tr(e,this.size,3);o.uniform3fv(this.addr,t)}function Sg(o,e){const t=tr(e,this.size,4);o.uniform4fv(this.addr,t)}function wg(o,e){const t=tr(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,t)}function Tg(o,e){const t=tr(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,t)}function Ag(o,e){const t=tr(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,t)}function Eg(o,e){o.uniform1iv(this.addr,e)}function Cg(o,e){o.uniform2iv(this.addr,e)}function Lg(o,e){o.uniform3iv(this.addr,e)}function Rg(o,e){o.uniform4iv(this.addr,e)}function Pg(o,e){o.uniform1uiv(this.addr,e)}function Dg(o,e){o.uniform2uiv(this.addr,e)}function Ig(o,e){o.uniform3uiv(this.addr,e)}function Ug(o,e){o.uniform4uiv(this.addr,e)}function Og(o,e,t){const n=this.cache,i=e.length,r=Zs(t,i);vt(n,r)||(o.uniform1iv(this.addr,r),xt(n,r));for(let s=0;s!==i;++s)t.setTexture2D(e[s]||Hu,r[s])}function Ng(o,e,t){const n=this.cache,i=e.length,r=Zs(t,i);vt(n,r)||(o.uniform1iv(this.addr,r),xt(n,r));for(let s=0;s!==i;++s)t.setTexture3D(e[s]||ju,r[s])}function Fg(o,e,t){const n=this.cache,i=e.length,r=Zs(t,i);vt(n,r)||(o.uniform1iv(this.addr,r),xt(n,r));for(let s=0;s!==i;++s)t.setTextureCube(e[s]||Xu,r[s])}function kg(o,e,t){const n=this.cache,i=e.length,r=Zs(t,i);vt(n,r)||(o.uniform1iv(this.addr,r),xt(n,r));for(let s=0;s!==i;++s)t.setTexture2DArray(e[s]||Wu,r[s])}function Bg(o){switch(o){case 5126:return yg;case 35664:return bg;case 35665:return Mg;case 35666:return Sg;case 35674:return wg;case 35675:return Tg;case 35676:return Ag;case 5124:case 35670:return Eg;case 35667:case 35671:return Cg;case 35668:case 35672:return Lg;case 35669:case 35673:return Rg;case 5125:return Pg;case 36294:return Dg;case 36295:return Ig;case 36296:return Ug;case 35678:case 36198:case 36298:case 36306:case 35682:return Og;case 35679:case 36299:case 36307:return Ng;case 35680:case 36300:case 36308:case 36293:return Fg;case 36289:case 36303:case 36311:case 36292:return kg}}class Gg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=xg(t.type)}}class zg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=Bg(t.type)}}class Vg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,s=i.length;r!==s;++r){const a=i[r];a.setValue(e,t[a.id],n)}}}const Ha=/(\w+)(\])?(\[|\.)?/g;function uc(o,e){o.seq.push(e),o.map[e.id]=e}function Hg(o,e,t){const n=o.name,i=n.length;for(Ha.lastIndex=0;;){const r=Ha.exec(n),s=Ha.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&s+2===i){uc(t,c===void 0?new Gg(a,o,e):new zg(a,o,e));break}else{let h=t.map[a];h===void 0&&(h=new Vg(a),uc(t,h)),t=h}}}class ks{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),s=e.getUniformLocation(t,r.name);Hg(r,s,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,s=t.length;r!==s;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const s=e[i];s.id in t&&n.push(s)}return n}}function hc(o,e,t){const n=o.createShader(e);return o.shaderSource(n,t),o.compileShader(n),n}let Wg=0;function jg(o,e){const t=o.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let s=i;s<r;s++){const a=s+1;n.push(`${a===e?">":" "} ${a}: ${t[s]}`)}return n.join(`
`)}function Xg(o){switch(o){case si:return["Linear","( value )"];case nt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",o),["Linear","( value )"]}}function dc(o,e,t){const n=o.getShaderParameter(e,35713),i=o.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const s=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+jg(o.getShaderSource(e),s)}else return i}function Yg(o,e){const t=Xg(e);return"vec4 "+o+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function qg(o,e){let t;switch(e){case Zh:t="Linear";break;case $h:t="Reinhard";break;case Jh:t="OptimizedCineon";break;case Qh:t="ACESFilmic";break;case ed:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+o+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Kg(o){return[o.extensionDerivatives||o.envMapCubeUVHeight||o.bumpMap||o.normalMapTangentSpace||o.clearcoatNormalMap||o.flatShading||o.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(o.extensionFragDepth||o.logarithmicDepthBuffer)&&o.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",o.extensionDrawBuffers&&o.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(o.extensionShaderTextureLOD||o.envMap||o.transmission)&&o.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Rr).join(`
`)}function Zg(o){const e=[];for(const t in o){const n=o[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function $g(o,e){const t={},n=o.getProgramParameter(e,35721);for(let i=0;i<n;i++){const r=o.getActiveAttrib(e,i),s=r.name;let a=1;r.type===35674&&(a=2),r.type===35675&&(a=3),r.type===35676&&(a=4),t[s]={type:r.type,location:o.getAttribLocation(e,s),locationSize:a}}return t}function Rr(o){return o!==""}function fc(o,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function pc(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Jg=/^[ \t]*#include +<([\w\d./]+)>/gm;function fo(o){return o.replace(Jg,Qg)}function Qg(o,e){const t=He[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return fo(t)}const e0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function mc(o){return o.replace(e0,t0)}function t0(o,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function gc(o){let e="precision "+o.precision+` float;
precision `+o.precision+" int;";return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function n0(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===xu?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===yu?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Lr&&(e="SHADOWMAP_TYPE_VSM"),e}function i0(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Xi:case Yi:e="ENVMAP_TYPE_CUBE";break;case Ys:e="ENVMAP_TYPE_CUBE_UV";break}return e}function r0(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case Yi:e="ENVMAP_MODE_REFRACTION";break}return e}function s0(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case Lo:e="ENVMAP_BLENDING_MULTIPLY";break;case qh:e="ENVMAP_BLENDING_MIX";break;case Kh:e="ENVMAP_BLENDING_ADD";break}return e}function a0(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function o0(o,e,t,n){const i=o.getContext(),r=t.defines;let s=t.vertexShader,a=t.fragmentShader;const l=n0(t),c=i0(t),u=r0(t),h=s0(t),d=a0(t),p=t.isWebGL2?"":Kg(t),g=Zg(r),_=i.createProgram();let m,f,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=[g].filter(Rr).join(`
`),m.length>0&&(m+=`
`),f=[p,g].filter(Rr).join(`
`),f.length>0&&(f+=`
`)):(m=[gc(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs2?"#define USE_UV2":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Rr).join(`
`),f=[p,gc(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs2?"#define USE_UV2":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Pn?"#define TONE_MAPPING":"",t.toneMapping!==Pn?He.tonemapping_pars_fragment:"",t.toneMapping!==Pn?qg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",He.encodings_pars_fragment,Yg("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Rr).join(`
`)),s=fo(s),s=fc(s,t),s=pc(s,t),a=fo(a),a=fc(a,t),a=pc(a,t),s=mc(s),a=mc(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===Nl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Nl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const x=v+m+s,b=v+f+a,y=hc(i,35633,x),T=hc(i,35632,b);if(i.attachShader(_,y),i.attachShader(_,T),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_),o.debug.checkShaderErrors){const S=i.getProgramInfoLog(_).trim(),E=i.getShaderInfoLog(y).trim(),Z=i.getShaderInfoLog(T).trim();let U=!0,P=!0;if(i.getProgramParameter(_,35714)===!1)if(U=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(i,_,y,T);else{const D=dc(i,y,"vertex"),B=dc(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,35715)+`

Program Info Log: `+S+`
`+D+`
`+B)}else S!==""?console.warn("THREE.WebGLProgram: Program Info Log:",S):(E===""||Z==="")&&(P=!1);P&&(this.diagnostics={runnable:U,programLog:S,vertexShader:{log:E,prefix:m},fragmentShader:{log:Z,prefix:f}})}i.deleteShader(y),i.deleteShader(T);let C;this.getUniforms=function(){return C===void 0&&(C=new ks(i,_)),C};let L;return this.getAttributes=function(){return L===void 0&&(L=$g(i,_)),L},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.name=t.shaderName,this.id=Wg++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=y,this.fragmentShader=T,this}let l0=0;class c0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),s=this._getShaderCacheForMaterial(e);return s.has(i)===!1&&(s.add(i),i.usedTimes++),s.has(r)===!1&&(s.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new u0(e),t.set(e,n)),n}}class u0{constructor(e){this.id=l0++,this.code=e,this.usedTimes=0}}function h0(o,e,t,n,i,r,s){const a=new Do,l=new c0,c=[],u=i.isWebGL2,h=i.logarithmicDepthBuffer,d=i.vertexTextures;let p=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return S===1?"uv2":"uv"}function m(S,E,Z,U,P){const D=U.fog,B=P.geometry,q=S.isMeshStandardMaterial?U.environment:null,re=(S.isMeshStandardMaterial?t:e).get(S.envMap||q),$=re&&re.mapping===Ys?re.image.height:null,z=g[S.type];S.precision!==null&&(p=i.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const K=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,N=K!==void 0?K.length:0;let W=0;B.morphAttributes.position!==void 0&&(W=1),B.morphAttributes.normal!==void 0&&(W=2),B.morphAttributes.color!==void 0&&(W=3);let F,G,H,ee;if(z){const Ce=pn[z];F=Ce.vertexShader,G=Ce.fragmentShader}else F=S.vertexShader,G=S.fragmentShader,l.update(S),H=l.getVertexShaderID(S),ee=l.getFragmentShaderID(S);const I=o.getRenderTarget(),ie=P.isInstancedMesh===!0,ue=!!S.map,se=!!S.matcap,le=!!re,oe=!!S.aoMap,be=!!S.lightMap,Ee=!!S.bumpMap,Me=!!S.normalMap,Ae=!!S.displacementMap,Ie=!!S.emissiveMap,me=!!S.metalnessMap,we=!!S.roughnessMap,Se=S.clearcoat>0,de=S.iridescence>0,w=S.sheen>0,M=S.transmission>0,V=Se&&!!S.clearcoatMap,J=Se&&!!S.clearcoatNormalMap,ce=Se&&!!S.clearcoatRoughnessMap,fe=de&&!!S.iridescenceMap,R=de&&!!S.iridescenceThicknessMap,Q=w&&!!S.sheenColorMap,j=w&&!!S.sheenRoughnessMap,ye=!!S.specularMap,ge=!!S.specularColorMap,Te=!!S.specularIntensityMap,pe=M&&!!S.transmissionMap,_e=M&&!!S.thicknessMap,Re=!!S.gradientMap,Pe=!!S.alphaMap,ze=S.alphaTest>0,O=!!S.extensions,te=!!B.attributes.uv2;return{isWebGL2:u,shaderID:z,shaderName:S.type,vertexShader:F,fragmentShader:G,defines:S.defines,customVertexShaderID:H,customFragmentShaderID:ee,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,instancing:ie,instancingColor:ie&&P.instanceColor!==null,supportsVertexTextures:d,outputEncoding:I===null?o.outputEncoding:I.isXRRenderTarget===!0?I.texture.encoding:si,map:ue,matcap:se,envMap:le,envMapMode:le&&re.mapping,envMapCubeUVHeight:$,aoMap:oe,lightMap:be,bumpMap:Ee,normalMap:Me,displacementMap:d&&Ae,emissiveMap:Ie,normalMapObjectSpace:Me&&S.normalMapType===xd,normalMapTangentSpace:Me&&S.normalMapType===Ro,decodeVideoTexture:ue&&S.map.isVideoTexture===!0&&S.map.encoding===nt,metalnessMap:me,roughnessMap:we,clearcoat:Se,clearcoatMap:V,clearcoatNormalMap:J,clearcoatRoughnessMap:ce,iridescence:de,iridescenceMap:fe,iridescenceThicknessMap:R,sheen:w,sheenColorMap:Q,sheenRoughnessMap:j,specularMap:ye,specularColorMap:ge,specularIntensityMap:Te,transmission:M,transmissionMap:pe,thicknessMap:_e,gradientMap:Re,opaque:S.transparent===!1&&S.blending===Vi,alphaMap:Pe,alphaTest:ze,combine:S.combine,mapUv:ue&&_(S.map.channel),aoMapUv:oe&&_(S.aoMap.channel),lightMapUv:be&&_(S.lightMap.channel),bumpMapUv:Ee&&_(S.bumpMap.channel),normalMapUv:Me&&_(S.normalMap.channel),displacementMapUv:Ae&&_(S.displacementMap.channel),emissiveMapUv:Ie&&_(S.emissiveMap.channel),metalnessMapUv:me&&_(S.metalnessMap.channel),roughnessMapUv:we&&_(S.roughnessMap.channel),clearcoatMapUv:V&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:J&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ce&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:fe&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:R&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:Q&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:j&&_(S.sheenRoughnessMap.channel),specularMapUv:ye&&_(S.specularMap.channel),specularColorMapUv:ge&&_(S.specularColorMap.channel),specularIntensityMapUv:Te&&_(S.specularIntensityMap.channel),transmissionMapUv:pe&&_(S.transmissionMap.channel),thicknessMapUv:_e&&_(S.thicknessMap.channel),alphaMapUv:Pe&&_(S.alphaMap.channel),vertexTangents:Me&&!!B.attributes.tangent,vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,vertexUvs2:te,pointsUvs:P.isPoints===!0&&!!B.attributes.uv&&(ue||Pe),fog:!!D,useFog:S.fog===!0,fogExp2:D&&D.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:P.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:N,morphTextureStride:W,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:S.dithering,shadowMapEnabled:o.shadowMap.enabled&&Z.length>0,shadowMapType:o.shadowMap.type,toneMapping:S.toneMapped?o.toneMapping:Pn,useLegacyLights:o.useLegacyLights,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Zt,flipSided:S.side===Nt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:O&&S.extensions.derivatives===!0,extensionFragDepth:O&&S.extensions.fragDepth===!0,extensionDrawBuffers:O&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:O&&S.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:S.customProgramCacheKey()}}function f(S){const E=[];if(S.shaderID?E.push(S.shaderID):(E.push(S.customVertexShaderID),E.push(S.customFragmentShaderID)),S.defines!==void 0)for(const Z in S.defines)E.push(Z),E.push(S.defines[Z]);return S.isRawShaderMaterial===!1&&(v(E,S),x(E,S),E.push(o.outputEncoding)),E.push(S.customProgramCacheKey),E.join()}function v(S,E){S.push(E.precision),S.push(E.outputEncoding),S.push(E.envMapMode),S.push(E.envMapCubeUVHeight),S.push(E.mapUv),S.push(E.alphaMapUv),S.push(E.lightMapUv),S.push(E.aoMapUv),S.push(E.bumpMapUv),S.push(E.normalMapUv),S.push(E.displacementMapUv),S.push(E.emissiveMapUv),S.push(E.metalnessMapUv),S.push(E.roughnessMapUv),S.push(E.clearcoatMapUv),S.push(E.clearcoatNormalMapUv),S.push(E.clearcoatRoughnessMapUv),S.push(E.iridescenceMapUv),S.push(E.iridescenceThicknessMapUv),S.push(E.sheenColorMapUv),S.push(E.sheenRoughnessMapUv),S.push(E.specularMapUv),S.push(E.specularColorMapUv),S.push(E.specularIntensityMapUv),S.push(E.transmissionMapUv),S.push(E.thicknessMapUv),S.push(E.combine),S.push(E.fogExp2),S.push(E.sizeAttenuation),S.push(E.morphTargetsCount),S.push(E.morphAttributeCount),S.push(E.numDirLights),S.push(E.numPointLights),S.push(E.numSpotLights),S.push(E.numSpotLightMaps),S.push(E.numHemiLights),S.push(E.numRectAreaLights),S.push(E.numDirLightShadows),S.push(E.numPointLightShadows),S.push(E.numSpotLightShadows),S.push(E.numSpotLightShadowsWithMaps),S.push(E.shadowMapType),S.push(E.toneMapping),S.push(E.numClippingPlanes),S.push(E.numClipIntersection),S.push(E.depthPacking)}function x(S,E){a.disableAll(),E.isWebGL2&&a.enable(0),E.supportsVertexTextures&&a.enable(1),E.instancing&&a.enable(2),E.instancingColor&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUvs2&&a.enable(13),E.vertexTangents&&a.enable(14),S.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.skinning&&a.enable(4),E.morphTargets&&a.enable(5),E.morphNormals&&a.enable(6),E.morphColors&&a.enable(7),E.premultipliedAlpha&&a.enable(8),E.shadowMapEnabled&&a.enable(9),E.useLegacyLights&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.decodeVideoTexture&&a.enable(17),E.opaque&&a.enable(18),E.pointsUvs&&a.enable(19),S.push(a.mask)}function b(S){const E=g[S.type];let Z;if(E){const U=pn[E];Z=Bu.clone(U.uniforms)}else Z=S.uniforms;return Z}function y(S,E){let Z;for(let U=0,P=c.length;U<P;U++){const D=c[U];if(D.cacheKey===E){Z=D,++Z.usedTimes;break}}return Z===void 0&&(Z=new o0(o,E,S,r),c.push(Z)),Z}function T(S){if(--S.usedTimes===0){const E=c.indexOf(S);c[E]=c[c.length-1],c.pop(),S.destroy()}}function C(S){l.remove(S)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:b,acquireProgram:y,releaseProgram:T,releaseShaderCache:C,programs:c,dispose:L}}function d0(){let o=new WeakMap;function e(r){let s=o.get(r);return s===void 0&&(s={},o.set(r,s)),s}function t(r){o.delete(r)}function n(r,s,a){o.get(r)[s]=a}function i(){o=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function f0(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function _c(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function vc(){const o=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function s(h,d,p,g,_,m){let f=o[e];return f===void 0?(f={id:h.id,object:h,geometry:d,material:p,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},o[e]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=h.renderOrder,f.z=_,f.group=m),e++,f}function a(h,d,p,g,_,m){const f=s(h,d,p,g,_,m);p.transmission>0?n.push(f):p.transparent===!0?i.push(f):t.push(f)}function l(h,d,p,g,_,m){const f=s(h,d,p,g,_,m);p.transmission>0?n.unshift(f):p.transparent===!0?i.unshift(f):t.unshift(f)}function c(h,d){t.length>1&&t.sort(h||f0),n.length>1&&n.sort(d||_c),i.length>1&&i.sort(d||_c)}function u(){for(let h=e,d=o.length;h<d;h++){const p=o[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:u,sort:c}}function p0(){let o=new WeakMap;function e(n,i){const r=o.get(n);let s;return r===void 0?(s=new vc,o.set(n,[s])):i>=r.length?(s=new vc,r.push(s)):s=r[i],s}function t(){o=new WeakMap}return{get:e,dispose:t}}function m0(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new k,color:new Fe};break;case"SpotLight":t={position:new k,direction:new k,color:new Fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new k,color:new Fe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new k,skyColor:new Fe,groundColor:new Fe};break;case"RectAreaLight":t={color:new Fe,position:new k,halfWidth:new k,halfHeight:new k};break}return o[e.id]=t,t}}}function g0(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=t,t}}}let _0=0;function v0(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function x0(o,e){const t=new m0,n=g0(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)i.probe.push(new k);const r=new k,s=new Xe,a=new Xe;function l(u,h){let d=0,p=0,g=0;for(let Z=0;Z<9;Z++)i.probe[Z].set(0,0,0);let _=0,m=0,f=0,v=0,x=0,b=0,y=0,T=0,C=0,L=0;u.sort(v0);const S=h===!0?Math.PI:1;for(let Z=0,U=u.length;Z<U;Z++){const P=u[Z],D=P.color,B=P.intensity,q=P.distance,re=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)d+=D.r*B*S,p+=D.g*B*S,g+=D.b*B*S;else if(P.isLightProbe)for(let $=0;$<9;$++)i.probe[$].addScaledVector(P.sh.coefficients[$],B);else if(P.isDirectionalLight){const $=t.get(P);if($.color.copy(P.color).multiplyScalar(P.intensity*S),P.castShadow){const z=P.shadow,K=n.get(P);K.shadowBias=z.bias,K.shadowNormalBias=z.normalBias,K.shadowRadius=z.radius,K.shadowMapSize=z.mapSize,i.directionalShadow[_]=K,i.directionalShadowMap[_]=re,i.directionalShadowMatrix[_]=P.shadow.matrix,b++}i.directional[_]=$,_++}else if(P.isSpotLight){const $=t.get(P);$.position.setFromMatrixPosition(P.matrixWorld),$.color.copy(D).multiplyScalar(B*S),$.distance=q,$.coneCos=Math.cos(P.angle),$.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),$.decay=P.decay,i.spot[f]=$;const z=P.shadow;if(P.map&&(i.spotLightMap[C]=P.map,C++,z.updateMatrices(P),P.castShadow&&L++),i.spotLightMatrix[f]=z.matrix,P.castShadow){const K=n.get(P);K.shadowBias=z.bias,K.shadowNormalBias=z.normalBias,K.shadowRadius=z.radius,K.shadowMapSize=z.mapSize,i.spotShadow[f]=K,i.spotShadowMap[f]=re,T++}f++}else if(P.isRectAreaLight){const $=t.get(P);$.color.copy(D).multiplyScalar(B),$.halfWidth.set(P.width*.5,0,0),$.halfHeight.set(0,P.height*.5,0),i.rectArea[v]=$,v++}else if(P.isPointLight){const $=t.get(P);if($.color.copy(P.color).multiplyScalar(P.intensity*S),$.distance=P.distance,$.decay=P.decay,P.castShadow){const z=P.shadow,K=n.get(P);K.shadowBias=z.bias,K.shadowNormalBias=z.normalBias,K.shadowRadius=z.radius,K.shadowMapSize=z.mapSize,K.shadowCameraNear=z.camera.near,K.shadowCameraFar=z.camera.far,i.pointShadow[m]=K,i.pointShadowMap[m]=re,i.pointShadowMatrix[m]=P.shadow.matrix,y++}i.point[m]=$,m++}else if(P.isHemisphereLight){const $=t.get(P);$.skyColor.copy(P.color).multiplyScalar(B*S),$.groundColor.copy(P.groundColor).multiplyScalar(B*S),i.hemi[x]=$,x++}}v>0&&(e.isWebGL2||o.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Le.LTC_FLOAT_1,i.rectAreaLTC2=Le.LTC_FLOAT_2):o.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=Le.LTC_HALF_1,i.rectAreaLTC2=Le.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=p,i.ambient[2]=g;const E=i.hash;(E.directionalLength!==_||E.pointLength!==m||E.spotLength!==f||E.rectAreaLength!==v||E.hemiLength!==x||E.numDirectionalShadows!==b||E.numPointShadows!==y||E.numSpotShadows!==T||E.numSpotMaps!==C)&&(i.directional.length=_,i.spot.length=f,i.rectArea.length=v,i.point.length=m,i.hemi.length=x,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=T,i.spotShadowMap.length=T,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=T+C-L,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=L,E.directionalLength=_,E.pointLength=m,E.spotLength=f,E.rectAreaLength=v,E.hemiLength=x,E.numDirectionalShadows=b,E.numPointShadows=y,E.numSpotShadows=T,E.numSpotMaps=C,i.version=_0++)}function c(u,h){let d=0,p=0,g=0,_=0,m=0;const f=h.matrixWorldInverse;for(let v=0,x=u.length;v<x;v++){const b=u[v];if(b.isDirectionalLight){const y=i.directional[d];y.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(f),d++}else if(b.isSpotLight){const y=i.spot[g];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(f),y.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(f),g++}else if(b.isRectAreaLight){const y=i.rectArea[_];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(f),a.identity(),s.copy(b.matrixWorld),s.premultiply(f),a.extractRotation(s),y.halfWidth.set(b.width*.5,0,0),y.halfHeight.set(0,b.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),_++}else if(b.isPointLight){const y=i.point[p];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(f),p++}else if(b.isHemisphereLight){const y=i.hemi[m];y.direction.setFromMatrixPosition(b.matrixWorld),y.direction.transformDirection(f),m++}}}return{setup:l,setupView:c,state:i}}function xc(o,e){const t=new x0(o,e),n=[],i=[];function r(){n.length=0,i.length=0}function s(h){n.push(h)}function a(h){i.push(h)}function l(h){t.setup(n,h)}function c(h){t.setupView(n,h)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:s,pushShadow:a}}function y0(o,e){let t=new WeakMap;function n(r,s=0){const a=t.get(r);let l;return a===void 0?(l=new xc(o,e),t.set(r,[l])):s>=a.length?(l=new xc(o,e),a.push(l)):l=a[s],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class Yu extends Qt{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=vd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class qu extends Qt{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const b0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,M0=`uniform sampler2D shadow_pass;
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
}`;function S0(o,e,t){let n=new Io;const i=new Ne,r=new Ne,s=new at,a=new Yu({depthPacking:Eu}),l=new qu,c={},u=t.maxTextureSize,h={[gn]:Nt,[Nt]:gn,[Zt]:Zt},d=new cn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ne},radius:{value:4}},vertexShader:b0,fragmentShader:M0}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new mt;g.setAttribute("position",new Gt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Mt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xu,this.render=function(b,y,T){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;const C=o.getRenderTarget(),L=o.getActiveCubeFace(),S=o.getActiveMipmapLevel(),E=o.state;E.setBlending(Hn),E.buffers.color.setClear(1,1,1,1),E.buffers.depth.setTest(!0),E.setScissorTest(!1);for(let Z=0,U=b.length;Z<U;Z++){const P=b[Z],D=P.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",P,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;i.copy(D.mapSize);const B=D.getFrameExtents();if(i.multiply(B),r.copy(D.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/B.x),i.x=r.x*B.x,D.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/B.y),i.y=r.y*B.y,D.mapSize.y=r.y)),D.map===null){const re=this.type!==Lr?{minFilter:pt,magFilter:pt}:{};D.map=new ai(i.x,i.y,re),D.map.texture.name=P.name+".shadowMap",D.camera.updateProjectionMatrix()}o.setRenderTarget(D.map),o.clear();const q=D.getViewportCount();for(let re=0;re<q;re++){const $=D.getViewport(re);s.set(r.x*$.x,r.y*$.y,r.x*$.z,r.y*$.w),E.viewport(s),D.updateMatrices(P,re),n=D.getFrustum(),x(y,T,D.camera,P,this.type)}D.isPointLightShadow!==!0&&this.type===Lr&&f(D,T),D.needsUpdate=!1}m.needsUpdate=!1,o.setRenderTarget(C,L,S)};function f(b,y){const T=e.update(_);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,p.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new ai(i.x,i.y)),d.uniforms.shadow_pass.value=b.map.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,o.setRenderTarget(b.mapPass),o.clear(),o.renderBufferDirect(y,null,T,d,_,null),p.uniforms.shadow_pass.value=b.mapPass.texture,p.uniforms.resolution.value=b.mapSize,p.uniforms.radius.value=b.radius,o.setRenderTarget(b.map),o.clear(),o.renderBufferDirect(y,null,T,p,_,null)}function v(b,y,T,C){let L=null;const S=T.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(S!==void 0)L=S;else if(L=T.isPointLight===!0?l:a,o.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0||y.map&&y.alphaTest>0){const E=L.uuid,Z=y.uuid;let U=c[E];U===void 0&&(U={},c[E]=U);let P=U[Z];P===void 0&&(P=L.clone(),U[Z]=P),L=P}if(L.visible=y.visible,L.wireframe=y.wireframe,C===Lr?L.side=y.shadowSide!==null?y.shadowSide:y.side:L.side=y.shadowSide!==null?y.shadowSide:h[y.side],L.alphaMap=y.alphaMap,L.alphaTest=y.alphaTest,L.map=y.map,L.clipShadows=y.clipShadows,L.clippingPlanes=y.clippingPlanes,L.clipIntersection=y.clipIntersection,L.displacementMap=y.displacementMap,L.displacementScale=y.displacementScale,L.displacementBias=y.displacementBias,L.wireframeLinewidth=y.wireframeLinewidth,L.linewidth=y.linewidth,T.isPointLight===!0&&L.isMeshDistanceMaterial===!0){const E=o.properties.get(L);E.light=T}return L}function x(b,y,T,C,L){if(b.visible===!1)return;if(b.layers.test(y.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&L===Lr)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,b.matrixWorld);const Z=e.update(b),U=b.material;if(Array.isArray(U)){const P=Z.groups;for(let D=0,B=P.length;D<B;D++){const q=P[D],re=U[q.materialIndex];if(re&&re.visible){const $=v(b,re,C,L);o.renderBufferDirect(T,null,Z,$,b,q)}}}else if(U.visible){const P=v(b,U,C,L);o.renderBufferDirect(T,null,Z,P,b,null)}}const E=b.children;for(let Z=0,U=E.length;Z<U;Z++)x(E[Z],y,T,C,L)}}function w0(o,e,t){const n=t.isWebGL2;function i(){let O=!1;const te=new at;let he=null;const Ce=new at(0,0,0,0);return{setMask:function(Ue){he!==Ue&&!O&&(o.colorMask(Ue,Ue,Ue,Ue),he=Ue)},setLocked:function(Ue){O=Ue},setClear:function(Ue,Ze,Ye,it,tt){tt===!0&&(Ue*=it,Ze*=it,Ye*=it),te.set(Ue,Ze,Ye,it),Ce.equals(te)===!1&&(o.clearColor(Ue,Ze,Ye,it),Ce.copy(te))},reset:function(){O=!1,he=null,Ce.set(-1,0,0,0)}}}function r(){let O=!1,te=null,he=null,Ce=null;return{setTest:function(Ue){Ue?I(2929):ie(2929)},setMask:function(Ue){te!==Ue&&!O&&(o.depthMask(Ue),te=Ue)},setFunc:function(Ue){if(he!==Ue){switch(Ue){case zh:o.depthFunc(512);break;case Vh:o.depthFunc(519);break;case Hh:o.depthFunc(513);break;case so:o.depthFunc(515);break;case Wh:o.depthFunc(514);break;case jh:o.depthFunc(518);break;case Xh:o.depthFunc(516);break;case Yh:o.depthFunc(517);break;default:o.depthFunc(515)}he=Ue}},setLocked:function(Ue){O=Ue},setClear:function(Ue){Ce!==Ue&&(o.clearDepth(Ue),Ce=Ue)},reset:function(){O=!1,te=null,he=null,Ce=null}}}function s(){let O=!1,te=null,he=null,Ce=null,Ue=null,Ze=null,Ye=null,it=null,tt=null;return{setTest:function(ot){O||(ot?I(2960):ie(2960))},setMask:function(ot){te!==ot&&!O&&(o.stencilMask(ot),te=ot)},setFunc:function(ot,$e,Qe){(he!==ot||Ce!==$e||Ue!==Qe)&&(o.stencilFunc(ot,$e,Qe),he=ot,Ce=$e,Ue=Qe)},setOp:function(ot,$e,Qe){(Ze!==ot||Ye!==$e||it!==Qe)&&(o.stencilOp(ot,$e,Qe),Ze=ot,Ye=$e,it=Qe)},setLocked:function(ot){O=ot},setClear:function(ot){tt!==ot&&(o.clearStencil(ot),tt=ot)},reset:function(){O=!1,te=null,he=null,Ce=null,Ue=null,Ze=null,Ye=null,it=null,tt=null}}}const a=new i,l=new r,c=new s,u=new WeakMap,h=new WeakMap;let d={},p={},g=new WeakMap,_=[],m=null,f=!1,v=null,x=null,b=null,y=null,T=null,C=null,L=null,S=!1,E=null,Z=null,U=null,P=null,D=null;const B=o.getParameter(35661);let q=!1,re=0;const $=o.getParameter(7938);$.indexOf("WebGL")!==-1?(re=parseFloat(/^WebGL (\d)/.exec($)[1]),q=re>=1):$.indexOf("OpenGL ES")!==-1&&(re=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),q=re>=2);let z=null,K={};const N=o.getParameter(3088),W=o.getParameter(2978),F=new at().fromArray(N),G=new at().fromArray(W);function H(O,te,he){const Ce=new Uint8Array(4),Ue=o.createTexture();o.bindTexture(O,Ue),o.texParameteri(O,10241,9728),o.texParameteri(O,10240,9728);for(let Ze=0;Ze<he;Ze++)o.texImage2D(te+Ze,0,6408,1,1,0,6408,5121,Ce);return Ue}const ee={};ee[3553]=H(3553,3553,1),ee[34067]=H(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),I(2929),l.setFunc(so),Ae(!1),Ie(sl),I(2884),Ee(Hn);function I(O){d[O]!==!0&&(o.enable(O),d[O]=!0)}function ie(O){d[O]!==!1&&(o.disable(O),d[O]=!1)}function ue(O,te){return p[O]!==te?(o.bindFramebuffer(O,te),p[O]=te,n&&(O===36009&&(p[36160]=te),O===36160&&(p[36009]=te)),!0):!1}function se(O,te){let he=_,Ce=!1;if(O)if(he=g.get(te),he===void 0&&(he=[],g.set(te,he)),O.isWebGLMultipleRenderTargets){const Ue=O.texture;if(he.length!==Ue.length||he[0]!==36064){for(let Ze=0,Ye=Ue.length;Ze<Ye;Ze++)he[Ze]=36064+Ze;he.length=Ue.length,Ce=!0}}else he[0]!==36064&&(he[0]=36064,Ce=!0);else he[0]!==1029&&(he[0]=1029,Ce=!0);Ce&&(t.isWebGL2?o.drawBuffers(he):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(he))}function le(O){return m!==O?(o.useProgram(O),m=O,!0):!1}const oe={[Bi]:32774,[Rh]:32778,[Ph]:32779};if(n)oe[ll]=32775,oe[cl]=32776;else{const O=e.get("EXT_blend_minmax");O!==null&&(oe[ll]=O.MIN_EXT,oe[cl]=O.MAX_EXT)}const be={[Dh]:0,[Ih]:1,[Uh]:768,[bu]:770,[Gh]:776,[kh]:774,[Nh]:772,[Oh]:769,[Mu]:771,[Bh]:775,[Fh]:773};function Ee(O,te,he,Ce,Ue,Ze,Ye,it){if(O===Hn){f===!0&&(ie(3042),f=!1);return}if(f===!1&&(I(3042),f=!0),O!==Lh){if(O!==v||it!==S){if((x!==Bi||T!==Bi)&&(o.blendEquation(32774),x=Bi,T=Bi),it)switch(O){case Vi:o.blendFuncSeparate(1,771,1,771);break;case Vs:o.blendFunc(1,1);break;case al:o.blendFuncSeparate(0,769,0,1);break;case ol:o.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Vi:o.blendFuncSeparate(770,771,1,771);break;case Vs:o.blendFunc(770,1);break;case al:o.blendFuncSeparate(0,769,0,1);break;case ol:o.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}b=null,y=null,C=null,L=null,v=O,S=it}return}Ue=Ue||te,Ze=Ze||he,Ye=Ye||Ce,(te!==x||Ue!==T)&&(o.blendEquationSeparate(oe[te],oe[Ue]),x=te,T=Ue),(he!==b||Ce!==y||Ze!==C||Ye!==L)&&(o.blendFuncSeparate(be[he],be[Ce],be[Ze],be[Ye]),b=he,y=Ce,C=Ze,L=Ye),v=O,S=!1}function Me(O,te){O.side===Zt?ie(2884):I(2884);let he=O.side===Nt;te&&(he=!he),Ae(he),O.blending===Vi&&O.transparent===!1?Ee(Hn):Ee(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.premultipliedAlpha),l.setFunc(O.depthFunc),l.setTest(O.depthTest),l.setMask(O.depthWrite),a.setMask(O.colorWrite);const Ce=O.stencilWrite;c.setTest(Ce),Ce&&(c.setMask(O.stencilWriteMask),c.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),c.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),we(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?I(32926):ie(32926)}function Ae(O){E!==O&&(O?o.frontFace(2304):o.frontFace(2305),E=O)}function Ie(O){O!==Eh?(I(2884),O!==Z&&(O===sl?o.cullFace(1029):O===Ch?o.cullFace(1028):o.cullFace(1032))):ie(2884),Z=O}function me(O){O!==U&&(q&&o.lineWidth(O),U=O)}function we(O,te,he){O?(I(32823),(P!==te||D!==he)&&(o.polygonOffset(te,he),P=te,D=he)):ie(32823)}function Se(O){O?I(3089):ie(3089)}function de(O){O===void 0&&(O=33984+B-1),z!==O&&(o.activeTexture(O),z=O)}function w(O,te,he){he===void 0&&(z===null?he=33984+B-1:he=z);let Ce=K[he];Ce===void 0&&(Ce={type:void 0,texture:void 0},K[he]=Ce),(Ce.type!==O||Ce.texture!==te)&&(z!==he&&(o.activeTexture(he),z=he),o.bindTexture(O,te||ee[O]),Ce.type=O,Ce.texture=te)}function M(){const O=K[z];O!==void 0&&O.type!==void 0&&(o.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function V(){try{o.compressedTexImage2D.apply(o,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function J(){try{o.compressedTexImage3D.apply(o,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ce(){try{o.texSubImage2D.apply(o,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function fe(){try{o.texSubImage3D.apply(o,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function R(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Q(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function j(){try{o.texStorage2D.apply(o,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ye(){try{o.texStorage3D.apply(o,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ge(){try{o.texImage2D.apply(o,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Te(){try{o.texImage3D.apply(o,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function pe(O){F.equals(O)===!1&&(o.scissor(O.x,O.y,O.z,O.w),F.copy(O))}function _e(O){G.equals(O)===!1&&(o.viewport(O.x,O.y,O.z,O.w),G.copy(O))}function Re(O,te){let he=h.get(te);he===void 0&&(he=new WeakMap,h.set(te,he));let Ce=he.get(O);Ce===void 0&&(Ce=o.getUniformBlockIndex(te,O.name),he.set(O,Ce))}function Pe(O,te){const Ce=h.get(te).get(O);u.get(te)!==Ce&&(o.uniformBlockBinding(te,Ce,O.__bindingPointIndex),u.set(te,Ce))}function ze(){o.disable(3042),o.disable(2884),o.disable(2929),o.disable(32823),o.disable(3089),o.disable(2960),o.disable(32926),o.blendEquation(32774),o.blendFunc(1,0),o.blendFuncSeparate(1,0,1,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(513),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(519,0,4294967295),o.stencilOp(7680,7680,7680),o.clearStencil(0),o.cullFace(1029),o.frontFace(2305),o.polygonOffset(0,0),o.activeTexture(33984),o.bindFramebuffer(36160,null),n===!0&&(o.bindFramebuffer(36009,null),o.bindFramebuffer(36008,null)),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),d={},z=null,K={},p={},g=new WeakMap,_=[],m=null,f=!1,v=null,x=null,b=null,y=null,T=null,C=null,L=null,S=!1,E=null,Z=null,U=null,P=null,D=null,F.set(0,0,o.canvas.width,o.canvas.height),G.set(0,0,o.canvas.width,o.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:I,disable:ie,bindFramebuffer:ue,drawBuffers:se,useProgram:le,setBlending:Ee,setMaterial:Me,setFlipSided:Ae,setCullFace:Ie,setLineWidth:me,setPolygonOffset:we,setScissorTest:Se,activeTexture:de,bindTexture:w,unbindTexture:M,compressedTexImage2D:V,compressedTexImage3D:J,texImage2D:ge,texImage3D:Te,updateUBOMapping:Re,uniformBlockBinding:Pe,texStorage2D:j,texStorage3D:ye,texSubImage2D:ce,texSubImage3D:fe,compressedTexSubImage2D:R,compressedTexSubImage3D:Q,scissor:pe,viewport:_e,reset:ze}}function T0(o,e,t,n,i,r,s){const a=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,u=i.maxTextureSize,h=i.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let _;const m=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(w,M){return f?new OffscreenCanvas(w,M):Br("canvas")}function x(w,M,V,J){let ce=1;if((w.width>J||w.height>J)&&(ce=J/Math.max(w.width,w.height)),ce<1||M===!0)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap){const fe=M?Ru:Math.floor,R=fe(ce*w.width),Q=fe(ce*w.height);_===void 0&&(_=v(R,Q));const j=V?v(R,Q):_;return j.width=R,j.height=Q,j.getContext("2d").drawImage(w,0,0,R,Q),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+w.width+"x"+w.height+") to ("+R+"x"+Q+")."),j}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+w.width+"x"+w.height+")."),w;return w}function b(w){return ho(w.width)&&ho(w.height)}function y(w){return a?!1:w.wrapS!==$t||w.wrapT!==$t||w.minFilter!==pt&&w.minFilter!==Ut}function T(w,M){return w.generateMipmaps&&M&&w.minFilter!==pt&&w.minFilter!==Ut}function C(w){o.generateMipmap(w)}function L(w,M,V,J,ce=!1){if(a===!1)return M;if(w!==null){if(o[w]!==void 0)return o[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let fe=M;return M===6403&&(V===5126&&(fe=33326),V===5131&&(fe=33325),V===5121&&(fe=33321)),M===33319&&(V===5126&&(fe=33328),V===5131&&(fe=33327),V===5121&&(fe=33323)),M===6408&&(V===5126&&(fe=34836),V===5131&&(fe=34842),V===5121&&(fe=J===nt&&ce===!1?35907:32856),V===32819&&(fe=32854),V===32820&&(fe=32855)),(fe===33325||fe===33326||fe===33327||fe===33328||fe===34842||fe===34836)&&e.get("EXT_color_buffer_float"),fe}function S(w,M,V){return T(w,V)===!0||w.isFramebufferTexture&&w.minFilter!==pt&&w.minFilter!==Ut?Math.log2(Math.max(M.width,M.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?M.mipmaps.length:1}function E(w){return w===pt||w===oo||w===Fs?9728:9729}function Z(w){const M=w.target;M.removeEventListener("dispose",Z),P(M),M.isVideoTexture&&g.delete(M)}function U(w){const M=w.target;M.removeEventListener("dispose",U),B(M)}function P(w){const M=n.get(w);if(M.__webglInit===void 0)return;const V=w.source,J=m.get(V);if(J){const ce=J[M.__cacheKey];ce.usedTimes--,ce.usedTimes===0&&D(w),Object.keys(J).length===0&&m.delete(V)}n.remove(w)}function D(w){const M=n.get(w);o.deleteTexture(M.__webglTexture);const V=w.source,J=m.get(V);delete J[M.__cacheKey],s.memory.textures--}function B(w){const M=w.texture,V=n.get(w),J=n.get(M);if(J.__webglTexture!==void 0&&(o.deleteTexture(J.__webglTexture),s.memory.textures--),w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let ce=0;ce<6;ce++)o.deleteFramebuffer(V.__webglFramebuffer[ce]),V.__webglDepthbuffer&&o.deleteRenderbuffer(V.__webglDepthbuffer[ce]);else{if(o.deleteFramebuffer(V.__webglFramebuffer),V.__webglDepthbuffer&&o.deleteRenderbuffer(V.__webglDepthbuffer),V.__webglMultisampledFramebuffer&&o.deleteFramebuffer(V.__webglMultisampledFramebuffer),V.__webglColorRenderbuffer)for(let ce=0;ce<V.__webglColorRenderbuffer.length;ce++)V.__webglColorRenderbuffer[ce]&&o.deleteRenderbuffer(V.__webglColorRenderbuffer[ce]);V.__webglDepthRenderbuffer&&o.deleteRenderbuffer(V.__webglDepthRenderbuffer)}if(w.isWebGLMultipleRenderTargets)for(let ce=0,fe=M.length;ce<fe;ce++){const R=n.get(M[ce]);R.__webglTexture&&(o.deleteTexture(R.__webglTexture),s.memory.textures--),n.remove(M[ce])}n.remove(M),n.remove(w)}let q=0;function re(){q=0}function $(){const w=q;return w>=l&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+l),q+=1,w}function z(w){const M=[];return M.push(w.wrapS),M.push(w.wrapT),M.push(w.wrapR||0),M.push(w.magFilter),M.push(w.minFilter),M.push(w.anisotropy),M.push(w.internalFormat),M.push(w.format),M.push(w.type),M.push(w.generateMipmaps),M.push(w.premultiplyAlpha),M.push(w.flipY),M.push(w.unpackAlignment),M.push(w.encoding),M.join()}function K(w,M){const V=n.get(w);if(w.isVideoTexture&&Se(w),w.isRenderTargetTexture===!1&&w.version>0&&V.__version!==w.version){const J=w.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ie(V,w,M);return}}t.bindTexture(3553,V.__webglTexture,33984+M)}function N(w,M){const V=n.get(w);if(w.version>0&&V.__version!==w.version){ie(V,w,M);return}t.bindTexture(35866,V.__webglTexture,33984+M)}function W(w,M){const V=n.get(w);if(w.version>0&&V.__version!==w.version){ie(V,w,M);return}t.bindTexture(32879,V.__webglTexture,33984+M)}function F(w,M){const V=n.get(w);if(w.version>0&&V.__version!==w.version){ue(V,w,M);return}t.bindTexture(34067,V.__webglTexture,33984+M)}const G={[qi]:10497,[$t]:33071,[Ws]:33648},H={[pt]:9728,[oo]:9984,[Fs]:9986,[Ut]:9729,[wu]:9985,[ii]:9987};function ee(w,M,V){if(V?(o.texParameteri(w,10242,G[M.wrapS]),o.texParameteri(w,10243,G[M.wrapT]),(w===32879||w===35866)&&o.texParameteri(w,32882,G[M.wrapR]),o.texParameteri(w,10240,H[M.magFilter]),o.texParameteri(w,10241,H[M.minFilter])):(o.texParameteri(w,10242,33071),o.texParameteri(w,10243,33071),(w===32879||w===35866)&&o.texParameteri(w,32882,33071),(M.wrapS!==$t||M.wrapT!==$t)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),o.texParameteri(w,10240,E(M.magFilter)),o.texParameteri(w,10241,E(M.minFilter)),M.minFilter!==pt&&M.minFilter!==Ut&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const J=e.get("EXT_texture_filter_anisotropic");if(M.magFilter===pt||M.minFilter!==Fs&&M.minFilter!==ii||M.type===Vn&&e.has("OES_texture_float_linear")===!1||a===!1&&M.type===Nr&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||n.get(M).__currentAnisotropy)&&(o.texParameterf(w,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy)}}function I(w,M){let V=!1;w.__webglInit===void 0&&(w.__webglInit=!0,M.addEventListener("dispose",Z));const J=M.source;let ce=m.get(J);ce===void 0&&(ce={},m.set(J,ce));const fe=z(M);if(fe!==w.__cacheKey){ce[fe]===void 0&&(ce[fe]={texture:o.createTexture(),usedTimes:0},s.memory.textures++,V=!0),ce[fe].usedTimes++;const R=ce[w.__cacheKey];R!==void 0&&(ce[w.__cacheKey].usedTimes--,R.usedTimes===0&&D(M)),w.__cacheKey=fe,w.__webglTexture=ce[fe].texture}return V}function ie(w,M,V){let J=3553;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(J=35866),M.isData3DTexture&&(J=32879);const ce=I(w,M),fe=M.source;t.bindTexture(J,w.__webglTexture,33984+V);const R=n.get(fe);if(fe.version!==R.__version||ce===!0){t.activeTexture(33984+V),o.pixelStorei(37440,M.flipY),o.pixelStorei(37441,M.premultiplyAlpha),o.pixelStorei(3317,M.unpackAlignment),o.pixelStorei(37443,0);const Q=y(M)&&b(M.image)===!1;let j=x(M.image,Q,!1,u);j=de(M,j);const ye=b(j)||a,ge=r.convert(M.format,M.encoding);let Te=r.convert(M.type),pe=L(M.internalFormat,ge,Te,M.encoding,M.isVideoTexture);ee(J,M,ye);let _e;const Re=M.mipmaps,Pe=a&&M.isVideoTexture!==!0,ze=R.__version===void 0||ce===!0,O=S(M,j,ye);if(M.isDepthTexture)pe=6402,a?M.type===Vn?pe=36012:M.type===Qn?pe=33190:M.type===Hi?pe=35056:pe=33189:M.type===Vn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===ei&&pe===6402&&M.type!==Tu&&M.type!==Qn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=Qn,Te=r.convert(M.type)),M.format===Ki&&pe===6402&&(pe=34041,M.type!==Hi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=Hi,Te=r.convert(M.type))),ze&&(Pe?t.texStorage2D(3553,1,pe,j.width,j.height):t.texImage2D(3553,0,pe,j.width,j.height,0,ge,Te,null));else if(M.isDataTexture)if(Re.length>0&&ye){Pe&&ze&&t.texStorage2D(3553,O,pe,Re[0].width,Re[0].height);for(let te=0,he=Re.length;te<he;te++)_e=Re[te],Pe?t.texSubImage2D(3553,te,0,0,_e.width,_e.height,ge,Te,_e.data):t.texImage2D(3553,te,pe,_e.width,_e.height,0,ge,Te,_e.data);M.generateMipmaps=!1}else Pe?(ze&&t.texStorage2D(3553,O,pe,j.width,j.height),t.texSubImage2D(3553,0,0,0,j.width,j.height,ge,Te,j.data)):t.texImage2D(3553,0,pe,j.width,j.height,0,ge,Te,j.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Pe&&ze&&t.texStorage3D(35866,O,pe,Re[0].width,Re[0].height,j.depth);for(let te=0,he=Re.length;te<he;te++)_e=Re[te],M.format!==Jt?ge!==null?Pe?t.compressedTexSubImage3D(35866,te,0,0,0,_e.width,_e.height,j.depth,ge,_e.data,0,0):t.compressedTexImage3D(35866,te,pe,_e.width,_e.height,j.depth,0,_e.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pe?t.texSubImage3D(35866,te,0,0,0,_e.width,_e.height,j.depth,ge,Te,_e.data):t.texImage3D(35866,te,pe,_e.width,_e.height,j.depth,0,ge,Te,_e.data)}else{Pe&&ze&&t.texStorage2D(3553,O,pe,Re[0].width,Re[0].height);for(let te=0,he=Re.length;te<he;te++)_e=Re[te],M.format!==Jt?ge!==null?Pe?t.compressedTexSubImage2D(3553,te,0,0,_e.width,_e.height,ge,_e.data):t.compressedTexImage2D(3553,te,pe,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pe?t.texSubImage2D(3553,te,0,0,_e.width,_e.height,ge,Te,_e.data):t.texImage2D(3553,te,pe,_e.width,_e.height,0,ge,Te,_e.data)}else if(M.isDataArrayTexture)Pe?(ze&&t.texStorage3D(35866,O,pe,j.width,j.height,j.depth),t.texSubImage3D(35866,0,0,0,0,j.width,j.height,j.depth,ge,Te,j.data)):t.texImage3D(35866,0,pe,j.width,j.height,j.depth,0,ge,Te,j.data);else if(M.isData3DTexture)Pe?(ze&&t.texStorage3D(32879,O,pe,j.width,j.height,j.depth),t.texSubImage3D(32879,0,0,0,0,j.width,j.height,j.depth,ge,Te,j.data)):t.texImage3D(32879,0,pe,j.width,j.height,j.depth,0,ge,Te,j.data);else if(M.isFramebufferTexture){if(ze)if(Pe)t.texStorage2D(3553,O,pe,j.width,j.height);else{let te=j.width,he=j.height;for(let Ce=0;Ce<O;Ce++)t.texImage2D(3553,Ce,pe,te,he,0,ge,Te,null),te>>=1,he>>=1}}else if(Re.length>0&&ye){Pe&&ze&&t.texStorage2D(3553,O,pe,Re[0].width,Re[0].height);for(let te=0,he=Re.length;te<he;te++)_e=Re[te],Pe?t.texSubImage2D(3553,te,0,0,ge,Te,_e):t.texImage2D(3553,te,pe,ge,Te,_e);M.generateMipmaps=!1}else Pe?(ze&&t.texStorage2D(3553,O,pe,j.width,j.height),t.texSubImage2D(3553,0,0,0,ge,Te,j)):t.texImage2D(3553,0,pe,ge,Te,j);T(M,ye)&&C(J),R.__version=fe.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function ue(w,M,V){if(M.image.length!==6)return;const J=I(w,M),ce=M.source;t.bindTexture(34067,w.__webglTexture,33984+V);const fe=n.get(ce);if(ce.version!==fe.__version||J===!0){t.activeTexture(33984+V),o.pixelStorei(37440,M.flipY),o.pixelStorei(37441,M.premultiplyAlpha),o.pixelStorei(3317,M.unpackAlignment),o.pixelStorei(37443,0);const R=M.isCompressedTexture||M.image[0].isCompressedTexture,Q=M.image[0]&&M.image[0].isDataTexture,j=[];for(let te=0;te<6;te++)!R&&!Q?j[te]=x(M.image[te],!1,!0,c):j[te]=Q?M.image[te].image:M.image[te],j[te]=de(M,j[te]);const ye=j[0],ge=b(ye)||a,Te=r.convert(M.format,M.encoding),pe=r.convert(M.type),_e=L(M.internalFormat,Te,pe,M.encoding),Re=a&&M.isVideoTexture!==!0,Pe=fe.__version===void 0||J===!0;let ze=S(M,ye,ge);ee(34067,M,ge);let O;if(R){Re&&Pe&&t.texStorage2D(34067,ze,_e,ye.width,ye.height);for(let te=0;te<6;te++){O=j[te].mipmaps;for(let he=0;he<O.length;he++){const Ce=O[he];M.format!==Jt?Te!==null?Re?t.compressedTexSubImage2D(34069+te,he,0,0,Ce.width,Ce.height,Te,Ce.data):t.compressedTexImage2D(34069+te,he,_e,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Re?t.texSubImage2D(34069+te,he,0,0,Ce.width,Ce.height,Te,pe,Ce.data):t.texImage2D(34069+te,he,_e,Ce.width,Ce.height,0,Te,pe,Ce.data)}}}else{O=M.mipmaps,Re&&Pe&&(O.length>0&&ze++,t.texStorage2D(34067,ze,_e,j[0].width,j[0].height));for(let te=0;te<6;te++)if(Q){Re?t.texSubImage2D(34069+te,0,0,0,j[te].width,j[te].height,Te,pe,j[te].data):t.texImage2D(34069+te,0,_e,j[te].width,j[te].height,0,Te,pe,j[te].data);for(let he=0;he<O.length;he++){const Ue=O[he].image[te].image;Re?t.texSubImage2D(34069+te,he+1,0,0,Ue.width,Ue.height,Te,pe,Ue.data):t.texImage2D(34069+te,he+1,_e,Ue.width,Ue.height,0,Te,pe,Ue.data)}}else{Re?t.texSubImage2D(34069+te,0,0,0,Te,pe,j[te]):t.texImage2D(34069+te,0,_e,Te,pe,j[te]);for(let he=0;he<O.length;he++){const Ce=O[he];Re?t.texSubImage2D(34069+te,he+1,0,0,Te,pe,Ce.image[te]):t.texImage2D(34069+te,he+1,_e,Te,pe,Ce.image[te])}}}T(M,ge)&&C(34067),fe.__version=ce.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function se(w,M,V,J,ce){const fe=r.convert(V.format,V.encoding),R=r.convert(V.type),Q=L(V.internalFormat,fe,R,V.encoding);n.get(M).__hasExternalTextures||(ce===32879||ce===35866?t.texImage3D(ce,0,Q,M.width,M.height,M.depth,0,fe,R,null):t.texImage2D(ce,0,Q,M.width,M.height,0,fe,R,null)),t.bindFramebuffer(36160,w),we(M)?d.framebufferTexture2DMultisampleEXT(36160,J,ce,n.get(V).__webglTexture,0,me(M)):(ce===3553||ce>=34069&&ce<=34074)&&o.framebufferTexture2D(36160,J,ce,n.get(V).__webglTexture,0),t.bindFramebuffer(36160,null)}function le(w,M,V){if(o.bindRenderbuffer(36161,w),M.depthBuffer&&!M.stencilBuffer){let J=33189;if(V||we(M)){const ce=M.depthTexture;ce&&ce.isDepthTexture&&(ce.type===Vn?J=36012:ce.type===Qn&&(J=33190));const fe=me(M);we(M)?d.renderbufferStorageMultisampleEXT(36161,fe,J,M.width,M.height):o.renderbufferStorageMultisample(36161,fe,J,M.width,M.height)}else o.renderbufferStorage(36161,J,M.width,M.height);o.framebufferRenderbuffer(36160,36096,36161,w)}else if(M.depthBuffer&&M.stencilBuffer){const J=me(M);V&&we(M)===!1?o.renderbufferStorageMultisample(36161,J,35056,M.width,M.height):we(M)?d.renderbufferStorageMultisampleEXT(36161,J,35056,M.width,M.height):o.renderbufferStorage(36161,34041,M.width,M.height),o.framebufferRenderbuffer(36160,33306,36161,w)}else{const J=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let ce=0;ce<J.length;ce++){const fe=J[ce],R=r.convert(fe.format,fe.encoding),Q=r.convert(fe.type),j=L(fe.internalFormat,R,Q,fe.encoding),ye=me(M);V&&we(M)===!1?o.renderbufferStorageMultisample(36161,ye,j,M.width,M.height):we(M)?d.renderbufferStorageMultisampleEXT(36161,ye,j,M.width,M.height):o.renderbufferStorage(36161,j,M.width,M.height)}}o.bindRenderbuffer(36161,null)}function oe(w,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,w),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),K(M.depthTexture,0);const J=n.get(M.depthTexture).__webglTexture,ce=me(M);if(M.depthTexture.format===ei)we(M)?d.framebufferTexture2DMultisampleEXT(36160,36096,3553,J,0,ce):o.framebufferTexture2D(36160,36096,3553,J,0);else if(M.depthTexture.format===Ki)we(M)?d.framebufferTexture2DMultisampleEXT(36160,33306,3553,J,0,ce):o.framebufferTexture2D(36160,33306,3553,J,0);else throw new Error("Unknown depthTexture format")}function be(w){const M=n.get(w),V=w.isWebGLCubeRenderTarget===!0;if(w.depthTexture&&!M.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");oe(M.__webglFramebuffer,w)}else if(V){M.__webglDepthbuffer=[];for(let J=0;J<6;J++)t.bindFramebuffer(36160,M.__webglFramebuffer[J]),M.__webglDepthbuffer[J]=o.createRenderbuffer(),le(M.__webglDepthbuffer[J],w,!1)}else t.bindFramebuffer(36160,M.__webglFramebuffer),M.__webglDepthbuffer=o.createRenderbuffer(),le(M.__webglDepthbuffer,w,!1);t.bindFramebuffer(36160,null)}function Ee(w,M,V){const J=n.get(w);M!==void 0&&se(J.__webglFramebuffer,w,w.texture,36064,3553),V!==void 0&&be(w)}function Me(w){const M=w.texture,V=n.get(w),J=n.get(M);w.addEventListener("dispose",U),w.isWebGLMultipleRenderTargets!==!0&&(J.__webglTexture===void 0&&(J.__webglTexture=o.createTexture()),J.__version=M.version,s.memory.textures++);const ce=w.isWebGLCubeRenderTarget===!0,fe=w.isWebGLMultipleRenderTargets===!0,R=b(w)||a;if(ce){V.__webglFramebuffer=[];for(let Q=0;Q<6;Q++)V.__webglFramebuffer[Q]=o.createFramebuffer()}else{if(V.__webglFramebuffer=o.createFramebuffer(),fe)if(i.drawBuffers){const Q=w.texture;for(let j=0,ye=Q.length;j<ye;j++){const ge=n.get(Q[j]);ge.__webglTexture===void 0&&(ge.__webglTexture=o.createTexture(),s.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&w.samples>0&&we(w)===!1){const Q=fe?M:[M];V.__webglMultisampledFramebuffer=o.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,V.__webglMultisampledFramebuffer);for(let j=0;j<Q.length;j++){const ye=Q[j];V.__webglColorRenderbuffer[j]=o.createRenderbuffer(),o.bindRenderbuffer(36161,V.__webglColorRenderbuffer[j]);const ge=r.convert(ye.format,ye.encoding),Te=r.convert(ye.type),pe=L(ye.internalFormat,ge,Te,ye.encoding,w.isXRRenderTarget===!0),_e=me(w);o.renderbufferStorageMultisample(36161,_e,pe,w.width,w.height),o.framebufferRenderbuffer(36160,36064+j,36161,V.__webglColorRenderbuffer[j])}o.bindRenderbuffer(36161,null),w.depthBuffer&&(V.__webglDepthRenderbuffer=o.createRenderbuffer(),le(V.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(36160,null)}}if(ce){t.bindTexture(34067,J.__webglTexture),ee(34067,M,R);for(let Q=0;Q<6;Q++)se(V.__webglFramebuffer[Q],w,M,36064,34069+Q);T(M,R)&&C(34067),t.unbindTexture()}else if(fe){const Q=w.texture;for(let j=0,ye=Q.length;j<ye;j++){const ge=Q[j],Te=n.get(ge);t.bindTexture(3553,Te.__webglTexture),ee(3553,ge,R),se(V.__webglFramebuffer,w,ge,36064+j,3553),T(ge,R)&&C(3553)}t.unbindTexture()}else{let Q=3553;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(a?Q=w.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(Q,J.__webglTexture),ee(Q,M,R),se(V.__webglFramebuffer,w,M,36064,Q),T(M,R)&&C(Q),t.unbindTexture()}w.depthBuffer&&be(w)}function Ae(w){const M=b(w)||a,V=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let J=0,ce=V.length;J<ce;J++){const fe=V[J];if(T(fe,M)){const R=w.isWebGLCubeRenderTarget?34067:3553,Q=n.get(fe).__webglTexture;t.bindTexture(R,Q),C(R),t.unbindTexture()}}}function Ie(w){if(a&&w.samples>0&&we(w)===!1){const M=w.isWebGLMultipleRenderTargets?w.texture:[w.texture],V=w.width,J=w.height;let ce=16384;const fe=[],R=w.stencilBuffer?33306:36096,Q=n.get(w),j=w.isWebGLMultipleRenderTargets===!0;if(j)for(let ye=0;ye<M.length;ye++)t.bindFramebuffer(36160,Q.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(36160,36064+ye,36161,null),t.bindFramebuffer(36160,Q.__webglFramebuffer),o.framebufferTexture2D(36009,36064+ye,3553,null,0);t.bindFramebuffer(36008,Q.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,Q.__webglFramebuffer);for(let ye=0;ye<M.length;ye++){fe.push(36064+ye),w.depthBuffer&&fe.push(R);const ge=Q.__ignoreDepthValues!==void 0?Q.__ignoreDepthValues:!1;if(ge===!1&&(w.depthBuffer&&(ce|=256),w.stencilBuffer&&(ce|=1024)),j&&o.framebufferRenderbuffer(36008,36064,36161,Q.__webglColorRenderbuffer[ye]),ge===!0&&(o.invalidateFramebuffer(36008,[R]),o.invalidateFramebuffer(36009,[R])),j){const Te=n.get(M[ye]).__webglTexture;o.framebufferTexture2D(36009,36064,3553,Te,0)}o.blitFramebuffer(0,0,V,J,0,0,V,J,ce,9728),p&&o.invalidateFramebuffer(36008,fe)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),j)for(let ye=0;ye<M.length;ye++){t.bindFramebuffer(36160,Q.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(36160,36064+ye,36161,Q.__webglColorRenderbuffer[ye]);const ge=n.get(M[ye]).__webglTexture;t.bindFramebuffer(36160,Q.__webglFramebuffer),o.framebufferTexture2D(36009,36064+ye,3553,ge,0)}t.bindFramebuffer(36009,Q.__webglMultisampledFramebuffer)}}function me(w){return Math.min(h,w.samples)}function we(w){const M=n.get(w);return a&&w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Se(w){const M=s.render.frame;g.get(w)!==M&&(g.set(w,M),w.update())}function de(w,M){const V=w.encoding,J=w.format,ce=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||w.format===uo||V!==si&&(V===nt?a===!1?e.has("EXT_sRGB")===!0&&J===Jt?(w.format=uo,w.minFilter=Ut,w.generateMipmaps=!1):M=Du.sRGBToLinear(M):(J!==Jt||ce!==ri)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",V)),M}this.allocateTextureUnit=$,this.resetTextureUnits=re,this.setTexture2D=K,this.setTexture2DArray=N,this.setTexture3D=W,this.setTextureCube=F,this.rebindTextures=Ee,this.setupRenderTarget=Me,this.updateRenderTargetMipmap=Ae,this.updateMultisampleRenderTarget=Ie,this.setupDepthRenderbuffer=be,this.setupFrameBufferTexture=se,this.useMultisampledRTT=we}function A0(o,e,t){const n=t.isWebGL2;function i(r,s=null){let a;if(r===ri)return 5121;if(r===rd)return 32819;if(r===sd)return 32820;if(r===td)return 5120;if(r===nd)return 5122;if(r===Tu)return 5123;if(r===id)return 5124;if(r===Qn)return 5125;if(r===Vn)return 5126;if(r===Nr)return n?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===ad)return 6406;if(r===Jt)return 6408;if(r===od)return 6409;if(r===ld)return 6410;if(r===ei)return 6402;if(r===Ki)return 34041;if(r===uo)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===cd)return 6403;if(r===ud)return 36244;if(r===hd)return 33319;if(r===dd)return 33320;if(r===fd)return 36249;if(r===_a||r===va||r===xa||r===ya)if(s===nt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===_a)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===va)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===xa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===ya)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===_a)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===va)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===xa)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===ya)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===ul||r===hl||r===dl||r===fl)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===ul)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===hl)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===dl)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===fl)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===pd)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===pl||r===ml)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===pl)return s===nt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===ml)return s===nt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===gl||r===_l||r===vl||r===xl||r===yl||r===bl||r===Ml||r===Sl||r===wl||r===Tl||r===Al||r===El||r===Cl||r===Ll)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===gl)return s===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===_l)return s===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===vl)return s===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===xl)return s===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===yl)return s===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===bl)return s===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Ml)return s===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Sl)return s===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===wl)return s===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Tl)return s===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Al)return s===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===El)return s===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Cl)return s===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Ll)return s===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===ba)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===ba)return s===nt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(r===md||r===Rl||r===Pl||r===Dl)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===ba)return a.COMPRESSED_RED_RGTC1_EXT;if(r===Rl)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Pl)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Dl)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Hi?n?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):o[r]!==void 0?o[r]:null}return{convert:i}}class E0 extends Ot{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Et extends ut{constructor(){super(),this.isGroup=!0,this.type="Group"}}const C0={type:"move"};class Wa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Et,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Et,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Et,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,s=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),f=this._getHandJoint(c,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.jointRadius=m.radius),f.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(C0)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Et;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class L0 extends St{constructor(e,t,n,i,r,s,a,l,c,u){if(u=u!==void 0?u:ei,u!==ei&&u!==Ki)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===ei&&(n=Qn),n===void 0&&u===Ki&&(n=Hi),super(null,i,r,s,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:pt,this.minFilter=l!==void 0?l:pt,this.flipY=!1,this.generateMipmaps=!1}}class R0 extends li{constructor(e,t){super();const n=this;let i=null,r=1,s=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,p=null,g=null;const _=t.getContextAttributes();let m=null,f=null;const v=[],x=[],b=new Set,y=new Map,T=new Ot;T.layers.enable(1),T.viewport=new at;const C=new Ot;C.layers.enable(2),C.viewport=new at;const L=[T,C],S=new E0;S.layers.enable(1),S.layers.enable(2);let E=null,Z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(F){let G=v[F];return G===void 0&&(G=new Wa,v[F]=G),G.getTargetRaySpace()},this.getControllerGrip=function(F){let G=v[F];return G===void 0&&(G=new Wa,v[F]=G),G.getGripSpace()},this.getHand=function(F){let G=v[F];return G===void 0&&(G=new Wa,v[F]=G),G.getHandSpace()};function U(F){const G=x.indexOf(F.inputSource);if(G===-1)return;const H=v[G];H!==void 0&&H.dispatchEvent({type:F.type,data:F.inputSource})}function P(){i.removeEventListener("select",U),i.removeEventListener("selectstart",U),i.removeEventListener("selectend",U),i.removeEventListener("squeeze",U),i.removeEventListener("squeezestart",U),i.removeEventListener("squeezeend",U),i.removeEventListener("end",P),i.removeEventListener("inputsourceschange",D);for(let F=0;F<v.length;F++){const G=x[F];G!==null&&(x[F]=null,v[F].disconnect(G))}E=null,Z=null,e.setRenderTarget(m),p=null,d=null,h=null,i=null,f=null,W.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(F){r=F,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(F){a=F,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(F){c=F},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(F){if(i=F,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",U),i.addEventListener("selectstart",U),i.addEventListener("selectend",U),i.addEventListener("squeeze",U),i.addEventListener("squeezestart",U),i.addEventListener("squeezeend",U),i.addEventListener("end",P),i.addEventListener("inputsourceschange",D),_.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const G={antialias:i.renderState.layers===void 0?_.antialias:!0,alpha:_.alpha,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(i,t,G),i.updateRenderState({baseLayer:p}),f=new ai(p.framebufferWidth,p.framebufferHeight,{format:Jt,type:ri,encoding:e.outputEncoding,stencilBuffer:_.stencil})}else{let G=null,H=null,ee=null;_.depth&&(ee=_.stencil?35056:33190,G=_.stencil?Ki:ei,H=_.stencil?Hi:Qn);const I={colorFormat:32856,depthFormat:ee,scaleFactor:r};h=new XRWebGLBinding(i,t),d=h.createProjectionLayer(I),i.updateRenderState({layers:[d]}),f=new ai(d.textureWidth,d.textureHeight,{format:Jt,type:ri,depthTexture:new L0(d.textureWidth,d.textureHeight,H,void 0,void 0,void 0,void 0,void 0,void 0,G),stencilBuffer:_.stencil,encoding:e.outputEncoding,samples:_.antialias?4:0});const ie=e.properties.get(f);ie.__ignoreDepthValues=d.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await i.requestReferenceSpace(a),W.setContext(i),W.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function D(F){for(let G=0;G<F.removed.length;G++){const H=F.removed[G],ee=x.indexOf(H);ee>=0&&(x[ee]=null,v[ee].disconnect(H))}for(let G=0;G<F.added.length;G++){const H=F.added[G];let ee=x.indexOf(H);if(ee===-1){for(let ie=0;ie<v.length;ie++)if(ie>=x.length){x.push(H),ee=ie;break}else if(x[ie]===null){x[ie]=H,ee=ie;break}if(ee===-1)break}const I=v[ee];I&&I.connect(H)}}const B=new k,q=new k;function re(F,G,H){B.setFromMatrixPosition(G.matrixWorld),q.setFromMatrixPosition(H.matrixWorld);const ee=B.distanceTo(q),I=G.projectionMatrix.elements,ie=H.projectionMatrix.elements,ue=I[14]/(I[10]-1),se=I[14]/(I[10]+1),le=(I[9]+1)/I[5],oe=(I[9]-1)/I[5],be=(I[8]-1)/I[0],Ee=(ie[8]+1)/ie[0],Me=ue*be,Ae=ue*Ee,Ie=ee/(-be+Ee),me=Ie*-be;G.matrixWorld.decompose(F.position,F.quaternion,F.scale),F.translateX(me),F.translateZ(Ie),F.matrixWorld.compose(F.position,F.quaternion,F.scale),F.matrixWorldInverse.copy(F.matrixWorld).invert();const we=ue+Ie,Se=se+Ie,de=Me-me,w=Ae+(ee-me),M=le*se/Se*we,V=oe*se/Se*we;F.projectionMatrix.makePerspective(de,w,M,V,we,Se),F.projectionMatrixInverse.copy(F.projectionMatrix).invert()}function $(F,G){G===null?F.matrixWorld.copy(F.matrix):F.matrixWorld.multiplyMatrices(G.matrixWorld,F.matrix),F.matrixWorldInverse.copy(F.matrixWorld).invert()}this.updateCamera=function(F){if(i===null)return;S.near=C.near=T.near=F.near,S.far=C.far=T.far=F.far,(E!==S.near||Z!==S.far)&&(i.updateRenderState({depthNear:S.near,depthFar:S.far}),E=S.near,Z=S.far);const G=F.parent,H=S.cameras;$(S,G);for(let ee=0;ee<H.length;ee++)$(H[ee],G);H.length===2?re(S,T,C):S.projectionMatrix.copy(T.projectionMatrix),z(F,S,G)};function z(F,G,H){H===null?F.matrix.copy(G.matrixWorld):(F.matrix.copy(H.matrixWorld),F.matrix.invert(),F.matrix.multiply(G.matrixWorld)),F.matrix.decompose(F.position,F.quaternion,F.scale),F.updateMatrixWorld(!0);const ee=F.children;for(let I=0,ie=ee.length;I<ie;I++)ee[I].updateMatrixWorld(!0);F.projectionMatrix.copy(G.projectionMatrix),F.projectionMatrixInverse.copy(G.projectionMatrixInverse),F.isPerspectiveCamera&&(F.fov=$i*2*Math.atan(1/F.projectionMatrix.elements[5]),F.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(F){l=F,d!==null&&(d.fixedFoveation=F),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=F)},this.getPlanes=function(){return b};let K=null;function N(F,G){if(u=G.getViewerPose(c||s),g=G,u!==null){const H=u.views;p!==null&&(e.setRenderTargetFramebuffer(f,p.framebuffer),e.setRenderTarget(f));let ee=!1;H.length!==S.cameras.length&&(S.cameras.length=0,ee=!0);for(let I=0;I<H.length;I++){const ie=H[I];let ue=null;if(p!==null)ue=p.getViewport(ie);else{const le=h.getViewSubImage(d,ie);ue=le.viewport,I===0&&(e.setRenderTargetTextures(f,le.colorTexture,d.ignoreDepthValues?void 0:le.depthStencilTexture),e.setRenderTarget(f))}let se=L[I];se===void 0&&(se=new Ot,se.layers.enable(I),se.viewport=new at,L[I]=se),se.matrix.fromArray(ie.transform.matrix),se.matrix.decompose(se.position,se.quaternion,se.scale),se.projectionMatrix.fromArray(ie.projectionMatrix),se.projectionMatrixInverse.copy(se.projectionMatrix).invert(),se.viewport.set(ue.x,ue.y,ue.width,ue.height),I===0&&(S.matrix.copy(se.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),ee===!0&&S.cameras.push(se)}}for(let H=0;H<v.length;H++){const ee=x[H],I=v[H];ee!==null&&I!==void 0&&I.update(ee,G,c||s)}if(K&&K(F,G),G.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:G.detectedPlanes});let H=null;for(const ee of b)G.detectedPlanes.has(ee)||(H===null&&(H=[]),H.push(ee));if(H!==null)for(const ee of H)b.delete(ee),y.delete(ee),n.dispatchEvent({type:"planeremoved",data:ee});for(const ee of G.detectedPlanes)if(!b.has(ee))b.add(ee),y.set(ee,G.lastChangedTime),n.dispatchEvent({type:"planeadded",data:ee});else{const I=y.get(ee);ee.lastChangedTime>I&&(y.set(ee,ee.lastChangedTime),n.dispatchEvent({type:"planechanged",data:ee}))}}g=null}const W=new Vu;W.setAnimationLoop(N),this.setAnimationLoop=function(F){K=F},this.dispose=function(){}}}function P0(o,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,ku(o)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function i(m,f,v,x,b){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),h(m,f)):f.isMeshPhongMaterial?(r(m,f),u(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,b)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),_(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(s(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,v,x):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Nt&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Nt&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const v=e.get(f).envMap;if(v&&(m.envMap.value=v,m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap){m.lightMap.value=f.lightMap;const x=o.useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=f.lightMapIntensity*x,t(f.lightMap,m.lightMapTransform)}f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function s(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,v,x){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*v,m.scale.value=x*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function h(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),e.get(f).envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,v){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Nt&&m.clearcoatNormalScale.value.negate())),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){const v=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function D0(o,e,t,n){let i={},r={},s=[];const a=t.isWebGL2?o.getParameter(35375):0;function l(v,x){const b=x.program;n.uniformBlockBinding(v,b)}function c(v,x){let b=i[v.id];b===void 0&&(g(v),b=u(v),i[v.id]=b,v.addEventListener("dispose",m));const y=x.program;n.updateUBOMapping(v,y);const T=e.render.frame;r[v.id]!==T&&(d(v),r[v.id]=T)}function u(v){const x=h();v.__bindingPointIndex=x;const b=o.createBuffer(),y=v.__size,T=v.usage;return o.bindBuffer(35345,b),o.bufferData(35345,y,T),o.bindBuffer(35345,null),o.bindBufferBase(35345,x,b),b}function h(){for(let v=0;v<a;v++)if(s.indexOf(v)===-1)return s.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const x=i[v.id],b=v.uniforms,y=v.__cache;o.bindBuffer(35345,x);for(let T=0,C=b.length;T<C;T++){const L=b[T];if(p(L,T,y)===!0){const S=L.__offset,E=Array.isArray(L.value)?L.value:[L.value];let Z=0;for(let U=0;U<E.length;U++){const P=E[U],D=_(P);typeof P=="number"?(L.__data[0]=P,o.bufferSubData(35345,S+Z,L.__data)):P.isMatrix3?(L.__data[0]=P.elements[0],L.__data[1]=P.elements[1],L.__data[2]=P.elements[2],L.__data[3]=P.elements[0],L.__data[4]=P.elements[3],L.__data[5]=P.elements[4],L.__data[6]=P.elements[5],L.__data[7]=P.elements[0],L.__data[8]=P.elements[6],L.__data[9]=P.elements[7],L.__data[10]=P.elements[8],L.__data[11]=P.elements[0]):(P.toArray(L.__data,Z),Z+=D.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(35345,S,L.__data)}}o.bindBuffer(35345,null)}function p(v,x,b){const y=v.value;if(b[x]===void 0){if(typeof y=="number")b[x]=y;else{const T=Array.isArray(y)?y:[y],C=[];for(let L=0;L<T.length;L++)C.push(T[L].clone());b[x]=C}return!0}else if(typeof y=="number"){if(b[x]!==y)return b[x]=y,!0}else{const T=Array.isArray(b[x])?b[x]:[b[x]],C=Array.isArray(y)?y:[y];for(let L=0;L<T.length;L++){const S=T[L];if(S.equals(C[L])===!1)return S.copy(C[L]),!0}}return!1}function g(v){const x=v.uniforms;let b=0;const y=16;let T=0;for(let C=0,L=x.length;C<L;C++){const S=x[C],E={boundary:0,storage:0},Z=Array.isArray(S.value)?S.value:[S.value];for(let U=0,P=Z.length;U<P;U++){const D=Z[U],B=_(D);E.boundary+=B.boundary,E.storage+=B.storage}if(S.__data=new Float32Array(E.storage/Float32Array.BYTES_PER_ELEMENT),S.__offset=b,C>0){T=b%y;const U=y-T;T!==0&&U-E.boundary<0&&(b+=y-T,S.__offset=b)}b+=E.storage}return T=b%y,T>0&&(b+=y-T),v.__size=b,v.__cache={},this}function _(v){const x={boundary:0,storage:0};return typeof v=="number"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),x}function m(v){const x=v.target;x.removeEventListener("dispose",m);const b=s.indexOf(x.__bindingPointIndex);s.splice(b,1),o.deleteBuffer(i[x.id]),delete i[x.id],delete r[x.id]}function f(){for(const v in i)o.deleteBuffer(i[v]);s=[],i={},r={}}return{bind:l,update:c,dispose:f}}function I0(){const o=Br("canvas");return o.style.display="block",o}class Ku{constructor(e={}){const{canvas:t=I0(),context:n=null,depth:i=!0,stencil:r=!0,alpha:s=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=s;let p=null,g=null;const _=[],m=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=si,this.useLegacyLights=!0,this.toneMapping=Pn,this.toneMappingExposure=1;const f=this;let v=!1,x=0,b=0,y=null,T=-1,C=null;const L=new at,S=new at;let E=null,Z=t.width,U=t.height,P=1,D=null,B=null;const q=new at(0,0,Z,U),re=new at(0,0,Z,U);let $=!1;const z=new Io;let K=!1,N=!1,W=null;const F=new Xe,G=new k,H={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ee(){return y===null?P:1}let I=n;function ie(A,X){for(let ne=0;ne<A.length;ne++){const Y=A[ne],ae=t.getContext(Y,X);if(ae!==null)return ae}return null}try{const A={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Co}`),t.addEventListener("webglcontextlost",_e,!1),t.addEventListener("webglcontextrestored",Re,!1),t.addEventListener("webglcontextcreationerror",Pe,!1),I===null){const X=["webgl2","webgl","experimental-webgl"];if(f.isWebGL1Renderer===!0&&X.shift(),I=ie(X,A),I===null)throw ie(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}I.getShaderPrecisionFormat===void 0&&(I.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let ue,se,le,oe,be,Ee,Me,Ae,Ie,me,we,Se,de,w,M,V,J,ce,fe,R,Q,j,ye,ge;function Te(){ue=new Xm(I),se=new Gm(I,ue,e),ue.init(se),j=new A0(I,ue,se),le=new w0(I,ue,se),oe=new Km,be=new d0,Ee=new T0(I,ue,le,be,se,j,oe),Me=new Vm(f),Ae=new jm(f),Ie=new of(I,se),ye=new km(I,ue,Ie,se),me=new Ym(I,Ie,oe,ye),we=new Qm(I,me,Ie,oe),fe=new Jm(I,se,Ee),V=new zm(be),Se=new h0(f,Me,Ae,ue,se,ye,V),de=new P0(f,be),w=new p0,M=new y0(ue,se),ce=new Fm(f,Me,Ae,le,we,d,l),J=new S0(f,we,se),ge=new D0(I,oe,se,le),R=new Bm(I,ue,oe,se),Q=new qm(I,ue,oe,se),oe.programs=Se.programs,f.capabilities=se,f.extensions=ue,f.properties=be,f.renderLists=w,f.shadowMap=J,f.state=le,f.info=oe}Te();const pe=new R0(f,I);this.xr=pe,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const A=ue.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=ue.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return P},this.setPixelRatio=function(A){A!==void 0&&(P=A,this.setSize(Z,U,!1))},this.getSize=function(A){return A.set(Z,U)},this.setSize=function(A,X,ne=!0){if(pe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=A,U=X,t.width=Math.floor(A*P),t.height=Math.floor(X*P),ne===!0&&(t.style.width=A+"px",t.style.height=X+"px"),this.setViewport(0,0,A,X)},this.getDrawingBufferSize=function(A){return A.set(Z*P,U*P).floor()},this.setDrawingBufferSize=function(A,X,ne){Z=A,U=X,P=ne,t.width=Math.floor(A*ne),t.height=Math.floor(X*ne),this.setViewport(0,0,A,X)},this.getCurrentViewport=function(A){return A.copy(L)},this.getViewport=function(A){return A.copy(q)},this.setViewport=function(A,X,ne,Y){A.isVector4?q.set(A.x,A.y,A.z,A.w):q.set(A,X,ne,Y),le.viewport(L.copy(q).multiplyScalar(P).floor())},this.getScissor=function(A){return A.copy(re)},this.setScissor=function(A,X,ne,Y){A.isVector4?re.set(A.x,A.y,A.z,A.w):re.set(A,X,ne,Y),le.scissor(S.copy(re).multiplyScalar(P).floor())},this.getScissorTest=function(){return $},this.setScissorTest=function(A){le.setScissorTest($=A)},this.setOpaqueSort=function(A){D=A},this.setTransparentSort=function(A){B=A},this.getClearColor=function(A){return A.copy(ce.getClearColor())},this.setClearColor=function(){ce.setClearColor.apply(ce,arguments)},this.getClearAlpha=function(){return ce.getClearAlpha()},this.setClearAlpha=function(){ce.setClearAlpha.apply(ce,arguments)},this.clear=function(A=!0,X=!0,ne=!0){let Y=0;A&&(Y|=16384),X&&(Y|=256),ne&&(Y|=1024),I.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",_e,!1),t.removeEventListener("webglcontextrestored",Re,!1),t.removeEventListener("webglcontextcreationerror",Pe,!1),w.dispose(),M.dispose(),be.dispose(),Me.dispose(),Ae.dispose(),we.dispose(),ye.dispose(),ge.dispose(),Se.dispose(),pe.dispose(),pe.removeEventListener("sessionstart",Ue),pe.removeEventListener("sessionend",Ze),W&&(W.dispose(),W=null),Ye.stop()};function _e(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),v=!0}function Re(){console.log("THREE.WebGLRenderer: Context Restored."),v=!1;const A=oe.autoReset,X=J.enabled,ne=J.autoUpdate,Y=J.needsUpdate,ae=J.type;Te(),oe.autoReset=A,J.enabled=X,J.autoUpdate=ne,J.needsUpdate=Y,J.type=ae}function Pe(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ze(A){const X=A.target;X.removeEventListener("dispose",ze),O(X)}function O(A){te(A),be.remove(A)}function te(A){const X=be.get(A).programs;X!==void 0&&(X.forEach(function(ne){Se.releaseProgram(ne)}),A.isShaderMaterial&&Se.releaseShaderCache(A))}this.renderBufferDirect=function(A,X,ne,Y,ae,Oe){X===null&&(X=H);const ke=ae.isMesh&&ae.matrixWorld.determinant()<0,Be=rt(A,X,ne,Y,ae);le.setMaterial(Y,ke);let Ge=ne.index,Ve=1;Y.wireframe===!0&&(Ge=me.getWireframeAttribute(ne),Ve=2);const We=ne.drawRange,je=ne.attributes.position;let et=We.start*Ve,_t=(We.start+We.count)*Ve;Oe!==null&&(et=Math.max(et,Oe.start*Ve),_t=Math.min(_t,(Oe.start+Oe.count)*Ve)),Ge!==null?(et=Math.max(et,0),_t=Math.min(_t,Ge.count)):je!=null&&(et=Math.max(et,0),_t=Math.min(_t,je.count));const Ft=_t-et;if(Ft<0||Ft===1/0)return;ye.setup(ae,Y,Be,ne,Ge);let De,ct=R;if(Ge!==null&&(De=Ie.get(Ge),ct=Q,ct.setIndex(De)),ae.isMesh)Y.wireframe===!0?(le.setLineWidth(Y.wireframeLinewidth*ee()),ct.setMode(1)):ct.setMode(4);else if(ae.isLine){let qe=Y.linewidth;qe===void 0&&(qe=1),le.setLineWidth(qe*ee()),ae.isLineSegments?ct.setMode(1):ae.isLineLoop?ct.setMode(2):ct.setMode(3)}else ae.isPoints?ct.setMode(0):ae.isSprite&&ct.setMode(4);if(ae.isInstancedMesh)ct.renderInstances(et,Ft,ae.count);else if(ne.isInstancedBufferGeometry){const qe=ne._maxInstanceCount!==void 0?ne._maxInstanceCount:1/0,Dn=Math.min(ne.instanceCount,qe);ct.renderInstances(et,Ft,Dn)}else ct.render(et,Ft)},this.compile=function(A,X){function ne(Y,ae,Oe){Y.transparent===!0&&Y.side===Zt&&Y.forceSinglePass===!1?(Y.side=Nt,Y.needsUpdate=!0,Ct(Y,ae,Oe),Y.side=gn,Y.needsUpdate=!0,Ct(Y,ae,Oe),Y.side=Zt):Ct(Y,ae,Oe)}g=M.get(A),g.init(),m.push(g),A.traverseVisible(function(Y){Y.isLight&&Y.layers.test(X.layers)&&(g.pushLight(Y),Y.castShadow&&g.pushShadow(Y))}),g.setupLights(f.useLegacyLights),A.traverse(function(Y){const ae=Y.material;if(ae)if(Array.isArray(ae))for(let Oe=0;Oe<ae.length;Oe++){const ke=ae[Oe];ne(ke,A,Y)}else ne(ae,A,Y)}),m.pop(),g=null};let he=null;function Ce(A){he&&he(A)}function Ue(){Ye.stop()}function Ze(){Ye.start()}const Ye=new Vu;Ye.setAnimationLoop(Ce),typeof self<"u"&&Ye.setContext(self),this.setAnimationLoop=function(A){he=A,pe.setAnimationLoop(A),A===null?Ye.stop():Ye.start()},pe.addEventListener("sessionstart",Ue),pe.addEventListener("sessionend",Ze),this.render=function(A,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(v===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),pe.enabled===!0&&pe.isPresenting===!0&&(pe.cameraAutoUpdate===!0&&pe.updateCamera(X),X=pe.getCamera()),A.isScene===!0&&A.onBeforeRender(f,A,X,y),g=M.get(A,m.length),g.init(),m.push(g),F.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),z.setFromProjectionMatrix(F),N=this.localClippingEnabled,K=V.init(this.clippingPlanes,N),p=w.get(A,_.length),p.init(),_.push(p),it(A,X,0,f.sortObjects),p.finish(),f.sortObjects===!0&&p.sort(D,B),K===!0&&V.beginShadows();const ne=g.state.shadowsArray;if(J.render(ne,A,X),K===!0&&V.endShadows(),this.info.autoReset===!0&&this.info.reset(),ce.render(p,A),g.setupLights(f.useLegacyLights),X.isArrayCamera){const Y=X.cameras;for(let ae=0,Oe=Y.length;ae<Oe;ae++){const ke=Y[ae];tt(p,A,ke,ke.viewport)}}else tt(p,A,X);y!==null&&(Ee.updateMultisampleRenderTarget(y),Ee.updateRenderTargetMipmap(y)),A.isScene===!0&&A.onAfterRender(f,A,X),ye.resetDefaultState(),T=-1,C=null,m.pop(),m.length>0?g=m[m.length-1]:g=null,_.pop(),_.length>0?p=_[_.length-1]:p=null};function it(A,X,ne,Y){if(A.visible===!1)return;if(A.layers.test(X.layers)){if(A.isGroup)ne=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(X);else if(A.isLight)g.pushLight(A),A.castShadow&&g.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||z.intersectsSprite(A)){Y&&G.setFromMatrixPosition(A.matrixWorld).applyMatrix4(F);const ke=we.update(A),Be=A.material;Be.visible&&p.push(A,ke,Be,ne,G.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(A.isSkinnedMesh&&A.skeleton.frame!==oe.render.frame&&(A.skeleton.update(),A.skeleton.frame=oe.render.frame),!A.frustumCulled||z.intersectsObject(A))){Y&&G.setFromMatrixPosition(A.matrixWorld).applyMatrix4(F);const ke=we.update(A),Be=A.material;if(Array.isArray(Be)){const Ge=ke.groups;for(let Ve=0,We=Ge.length;Ve<We;Ve++){const je=Ge[Ve],et=Be[je.materialIndex];et&&et.visible&&p.push(A,ke,et,ne,G.z,je)}}else Be.visible&&p.push(A,ke,Be,ne,G.z,null)}}const Oe=A.children;for(let ke=0,Be=Oe.length;ke<Be;ke++)it(Oe[ke],X,ne,Y)}function tt(A,X,ne,Y){const ae=A.opaque,Oe=A.transmissive,ke=A.transparent;g.setupLightsView(ne),K===!0&&V.setGlobalState(f.clippingPlanes,ne),Oe.length>0&&ot(ae,Oe,X,ne),Y&&le.viewport(L.copy(Y)),ae.length>0&&$e(ae,X,ne),Oe.length>0&&$e(Oe,X,ne),ke.length>0&&$e(ke,X,ne),le.buffers.depth.setTest(!0),le.buffers.depth.setMask(!0),le.buffers.color.setMask(!0),le.setPolygonOffset(!1)}function ot(A,X,ne,Y){if(W===null){const Be=se.isWebGL2;W=new ai(1024,1024,{generateMipmaps:!0,type:ue.has("EXT_color_buffer_half_float")?Nr:ri,minFilter:ii,samples:Be&&a===!0?4:0})}const ae=f.getRenderTarget();f.setRenderTarget(W),f.clear();const Oe=f.toneMapping;f.toneMapping=Pn,$e(A,ne,Y),Ee.updateMultisampleRenderTarget(W),Ee.updateRenderTargetMipmap(W);let ke=!1;for(let Be=0,Ge=X.length;Be<Ge;Be++){const Ve=X[Be],We=Ve.object,je=Ve.geometry,et=Ve.material,_t=Ve.group;if(et.side===Zt&&We.layers.test(Y.layers)){const Ft=et.side;et.side=Nt,et.needsUpdate=!0,Qe(We,ne,Y,je,et,_t),et.side=Ft,et.needsUpdate=!0,ke=!0}}ke===!0&&(Ee.updateMultisampleRenderTarget(W),Ee.updateRenderTargetMipmap(W)),f.setRenderTarget(ae),f.toneMapping=Oe}function $e(A,X,ne){const Y=X.isScene===!0?X.overrideMaterial:null;for(let ae=0,Oe=A.length;ae<Oe;ae++){const ke=A[ae],Be=ke.object,Ge=ke.geometry,Ve=Y===null?ke.material:Y,We=ke.group;Be.layers.test(ne.layers)&&Qe(Be,X,ne,Ge,Ve,We)}}function Qe(A,X,ne,Y,ae,Oe){A.onBeforeRender(f,X,ne,Y,ae,Oe),A.modelViewMatrix.multiplyMatrices(ne.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),ae.onBeforeRender(f,X,ne,Y,A,Oe),ae.transparent===!0&&ae.side===Zt&&ae.forceSinglePass===!1?(ae.side=Nt,ae.needsUpdate=!0,f.renderBufferDirect(ne,X,Y,ae,A,Oe),ae.side=gn,ae.needsUpdate=!0,f.renderBufferDirect(ne,X,Y,ae,A,Oe),ae.side=Zt):f.renderBufferDirect(ne,X,Y,ae,A,Oe),A.onAfterRender(f,X,ne,Y,ae,Oe)}function Ct(A,X,ne){X.isScene!==!0&&(X=H);const Y=be.get(A),ae=g.state.lights,Oe=g.state.shadowsArray,ke=ae.state.version,Be=Se.getParameters(A,ae.state,Oe,X,ne),Ge=Se.getProgramCacheKey(Be);let Ve=Y.programs;Y.environment=A.isMeshStandardMaterial?X.environment:null,Y.fog=X.fog,Y.envMap=(A.isMeshStandardMaterial?Ae:Me).get(A.envMap||Y.environment),Ve===void 0&&(A.addEventListener("dispose",ze),Ve=new Map,Y.programs=Ve);let We=Ve.get(Ge);if(We!==void 0){if(Y.currentProgram===We&&Y.lightsStateVersion===ke)return Lt(A,Be),We}else Be.uniforms=Se.getUniforms(A),A.onBuild(ne,Be,f),A.onBeforeCompile(Be,f),We=Se.acquireProgram(Be,Ge),Ve.set(Ge,We),Y.uniforms=Be.uniforms;const je=Y.uniforms;(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(je.clippingPlanes=V.uniform),Lt(A,Be),Y.needsLights=zt(A),Y.lightsStateVersion=ke,Y.needsLights&&(je.ambientLightColor.value=ae.state.ambient,je.lightProbe.value=ae.state.probe,je.directionalLights.value=ae.state.directional,je.directionalLightShadows.value=ae.state.directionalShadow,je.spotLights.value=ae.state.spot,je.spotLightShadows.value=ae.state.spotShadow,je.rectAreaLights.value=ae.state.rectArea,je.ltc_1.value=ae.state.rectAreaLTC1,je.ltc_2.value=ae.state.rectAreaLTC2,je.pointLights.value=ae.state.point,je.pointLightShadows.value=ae.state.pointShadow,je.hemisphereLights.value=ae.state.hemi,je.directionalShadowMap.value=ae.state.directionalShadowMap,je.directionalShadowMatrix.value=ae.state.directionalShadowMatrix,je.spotShadowMap.value=ae.state.spotShadowMap,je.spotLightMatrix.value=ae.state.spotLightMatrix,je.spotLightMap.value=ae.state.spotLightMap,je.pointShadowMap.value=ae.state.pointShadowMap,je.pointShadowMatrix.value=ae.state.pointShadowMatrix);const et=We.getUniforms(),_t=ks.seqWithValue(et.seq,je);return Y.currentProgram=We,Y.uniformsList=_t,We}function Lt(A,X){const ne=be.get(A);ne.outputEncoding=X.outputEncoding,ne.instancing=X.instancing,ne.skinning=X.skinning,ne.morphTargets=X.morphTargets,ne.morphNormals=X.morphNormals,ne.morphColors=X.morphColors,ne.morphTargetsCount=X.morphTargetsCount,ne.numClippingPlanes=X.numClippingPlanes,ne.numIntersection=X.numClipIntersection,ne.vertexAlphas=X.vertexAlphas,ne.vertexTangents=X.vertexTangents,ne.toneMapping=X.toneMapping}function rt(A,X,ne,Y,ae){X.isScene!==!0&&(X=H),Ee.resetTextureUnits();const Oe=X.fog,ke=Y.isMeshStandardMaterial?X.environment:null,Be=y===null?f.outputEncoding:y.isXRRenderTarget===!0?y.texture.encoding:si,Ge=(Y.isMeshStandardMaterial?Ae:Me).get(Y.envMap||ke),Ve=Y.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,We=!!Y.normalMap&&!!ne.attributes.tangent,je=!!ne.morphAttributes.position,et=!!ne.morphAttributes.normal,_t=!!ne.morphAttributes.color,Ft=Y.toneMapped?f.toneMapping:Pn,De=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,ct=De!==void 0?De.length:0,qe=be.get(Y),Dn=g.state.lights;if(K===!0&&(N===!0||A!==C)){const Rt=A===C&&Y.id===T;V.setState(Y,A,Rt)}let ht=!1;Y.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==Dn.state.version||qe.outputEncoding!==Be||ae.isInstancedMesh&&qe.instancing===!1||!ae.isInstancedMesh&&qe.instancing===!0||ae.isSkinnedMesh&&qe.skinning===!1||!ae.isSkinnedMesh&&qe.skinning===!0||qe.envMap!==Ge||Y.fog===!0&&qe.fog!==Oe||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==V.numPlanes||qe.numIntersection!==V.numIntersection)||qe.vertexAlphas!==Ve||qe.vertexTangents!==We||qe.morphTargets!==je||qe.morphNormals!==et||qe.morphColors!==_t||qe.toneMapping!==Ft||se.isWebGL2===!0&&qe.morphTargetsCount!==ct)&&(ht=!0):(ht=!0,qe.__version=Y.version);let tn=qe.currentProgram;ht===!0&&(tn=Ct(Y,X,ae));let Wn=!1,un=!1,ui=!1;const dt=tn.getUniforms(),hn=qe.uniforms;if(le.useProgram(tn.program)&&(Wn=!0,un=!0,ui=!0),Y.id!==T&&(T=Y.id,un=!0),Wn||C!==A){if(dt.setValue(I,"projectionMatrix",A.projectionMatrix),se.logarithmicDepthBuffer&&dt.setValue(I,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),C!==A&&(C=A,un=!0,ui=!0),Y.isShaderMaterial||Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshStandardMaterial||Y.envMap){const Rt=dt.map.cameraPosition;Rt!==void 0&&Rt.setValue(I,G.setFromMatrixPosition(A.matrixWorld))}(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&dt.setValue(I,"isOrthographic",A.isOrthographicCamera===!0),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial||Y.isShadowMaterial||ae.isSkinnedMesh)&&dt.setValue(I,"viewMatrix",A.matrixWorldInverse)}if(ae.isSkinnedMesh){dt.setOptional(I,ae,"bindMatrix"),dt.setOptional(I,ae,"bindMatrixInverse");const Rt=ae.skeleton;Rt&&(se.floatVertexTextures?(Rt.boneTexture===null&&Rt.computeBoneTexture(),dt.setValue(I,"boneTexture",Rt.boneTexture,Ee),dt.setValue(I,"boneTextureSize",Rt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const jn=ne.morphAttributes;if((jn.position!==void 0||jn.normal!==void 0||jn.color!==void 0&&se.isWebGL2===!0)&&fe.update(ae,ne,tn),(un||qe.receiveShadow!==ae.receiveShadow)&&(qe.receiveShadow=ae.receiveShadow,dt.setValue(I,"receiveShadow",ae.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(hn.envMap.value=Ge,hn.flipEnvMap.value=Ge.isCubeTexture&&Ge.isRenderTargetTexture===!1?-1:1),un&&(dt.setValue(I,"toneMappingExposure",f.toneMappingExposure),qe.needsLights&&gt(hn,ui),Oe&&Y.fog===!0&&de.refreshFogUniforms(hn,Oe),de.refreshMaterialUniforms(hn,Y,P,U,W),ks.upload(I,qe.uniformsList,hn,Ee)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(ks.upload(I,qe.uniformsList,hn,Ee),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&dt.setValue(I,"center",ae.center),dt.setValue(I,"modelViewMatrix",ae.modelViewMatrix),dt.setValue(I,"normalMatrix",ae.normalMatrix),dt.setValue(I,"modelMatrix",ae.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const Rt=Y.uniformsGroups;for(let yn=0,sr=Rt.length;yn<sr;yn++)if(se.isWebGL2){const bn=Rt[yn];ge.update(bn,tn),ge.bind(bn,tn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return tn}function gt(A,X){A.ambientLightColor.needsUpdate=X,A.lightProbe.needsUpdate=X,A.directionalLights.needsUpdate=X,A.directionalLightShadows.needsUpdate=X,A.pointLights.needsUpdate=X,A.pointLightShadows.needsUpdate=X,A.spotLights.needsUpdate=X,A.spotLightShadows.needsUpdate=X,A.rectAreaLights.needsUpdate=X,A.hemisphereLights.needsUpdate=X}function zt(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return x},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return y},this.setRenderTargetTextures=function(A,X,ne){be.get(A.texture).__webglTexture=X,be.get(A.depthTexture).__webglTexture=ne;const Y=be.get(A);Y.__hasExternalTextures=!0,Y.__hasExternalTextures&&(Y.__autoAllocateDepthBuffer=ne===void 0,Y.__autoAllocateDepthBuffer||ue.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,X){const ne=be.get(A);ne.__webglFramebuffer=X,ne.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(A,X=0,ne=0){y=A,x=X,b=ne;let Y=!0,ae=null,Oe=!1,ke=!1;if(A){const Ge=be.get(A);Ge.__useDefaultFramebuffer!==void 0?(le.bindFramebuffer(36160,null),Y=!1):Ge.__webglFramebuffer===void 0?Ee.setupRenderTarget(A):Ge.__hasExternalTextures&&Ee.rebindTextures(A,be.get(A.texture).__webglTexture,be.get(A.depthTexture).__webglTexture);const Ve=A.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(ke=!0);const We=be.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(ae=We[X],Oe=!0):se.isWebGL2&&A.samples>0&&Ee.useMultisampledRTT(A)===!1?ae=be.get(A).__webglMultisampledFramebuffer:ae=We,L.copy(A.viewport),S.copy(A.scissor),E=A.scissorTest}else L.copy(q).multiplyScalar(P).floor(),S.copy(re).multiplyScalar(P).floor(),E=$;if(le.bindFramebuffer(36160,ae)&&se.drawBuffers&&Y&&le.drawBuffers(A,ae),le.viewport(L),le.scissor(S),le.setScissorTest(E),Oe){const Ge=be.get(A.texture);I.framebufferTexture2D(36160,36064,34069+X,Ge.__webglTexture,ne)}else if(ke){const Ge=be.get(A.texture),Ve=X||0;I.framebufferTextureLayer(36160,36064,Ge.__webglTexture,ne||0,Ve)}T=-1},this.readRenderTargetPixels=function(A,X,ne,Y,ae,Oe,ke){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Be=be.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&ke!==void 0&&(Be=Be[ke]),Be){le.bindFramebuffer(36160,Be);try{const Ge=A.texture,Ve=Ge.format,We=Ge.type;if(Ve!==Jt&&j.convert(Ve)!==I.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const je=We===Nr&&(ue.has("EXT_color_buffer_half_float")||se.isWebGL2&&ue.has("EXT_color_buffer_float"));if(We!==ri&&j.convert(We)!==I.getParameter(35738)&&!(We===Vn&&(se.isWebGL2||ue.has("OES_texture_float")||ue.has("WEBGL_color_buffer_float")))&&!je){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=A.width-Y&&ne>=0&&ne<=A.height-ae&&I.readPixels(X,ne,Y,ae,j.convert(Ve),j.convert(We),Oe)}finally{const Ge=y!==null?be.get(y).__webglFramebuffer:null;le.bindFramebuffer(36160,Ge)}}},this.copyFramebufferToTexture=function(A,X,ne=0){const Y=Math.pow(2,-ne),ae=Math.floor(X.image.width*Y),Oe=Math.floor(X.image.height*Y);Ee.setTexture2D(X,0),I.copyTexSubImage2D(3553,ne,0,0,A.x,A.y,ae,Oe),le.unbindTexture()},this.copyTextureToTexture=function(A,X,ne,Y=0){const ae=X.image.width,Oe=X.image.height,ke=j.convert(ne.format),Be=j.convert(ne.type);Ee.setTexture2D(ne,0),I.pixelStorei(37440,ne.flipY),I.pixelStorei(37441,ne.premultiplyAlpha),I.pixelStorei(3317,ne.unpackAlignment),X.isDataTexture?I.texSubImage2D(3553,Y,A.x,A.y,ae,Oe,ke,Be,X.image.data):X.isCompressedTexture?I.compressedTexSubImage2D(3553,Y,A.x,A.y,X.mipmaps[0].width,X.mipmaps[0].height,ke,X.mipmaps[0].data):I.texSubImage2D(3553,Y,A.x,A.y,ke,Be,X.image),Y===0&&ne.generateMipmaps&&I.generateMipmap(3553),le.unbindTexture()},this.copyTextureToTexture3D=function(A,X,ne,Y,ae=0){if(f.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Oe=A.max.x-A.min.x+1,ke=A.max.y-A.min.y+1,Be=A.max.z-A.min.z+1,Ge=j.convert(Y.format),Ve=j.convert(Y.type);let We;if(Y.isData3DTexture)Ee.setTexture3D(Y,0),We=32879;else if(Y.isDataArrayTexture)Ee.setTexture2DArray(Y,0),We=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(37440,Y.flipY),I.pixelStorei(37441,Y.premultiplyAlpha),I.pixelStorei(3317,Y.unpackAlignment);const je=I.getParameter(3314),et=I.getParameter(32878),_t=I.getParameter(3316),Ft=I.getParameter(3315),De=I.getParameter(32877),ct=ne.isCompressedTexture?ne.mipmaps[0]:ne.image;I.pixelStorei(3314,ct.width),I.pixelStorei(32878,ct.height),I.pixelStorei(3316,A.min.x),I.pixelStorei(3315,A.min.y),I.pixelStorei(32877,A.min.z),ne.isDataTexture||ne.isData3DTexture?I.texSubImage3D(We,ae,X.x,X.y,X.z,Oe,ke,Be,Ge,Ve,ct.data):ne.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),I.compressedTexSubImage3D(We,ae,X.x,X.y,X.z,Oe,ke,Be,Ge,ct.data)):I.texSubImage3D(We,ae,X.x,X.y,X.z,Oe,ke,Be,Ge,Ve,ct),I.pixelStorei(3314,je),I.pixelStorei(32878,et),I.pixelStorei(3316,_t),I.pixelStorei(3315,Ft),I.pixelStorei(32877,De),ae===0&&Y.generateMipmaps&&I.generateMipmap(We),le.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?Ee.setTextureCube(A,0):A.isData3DTexture?Ee.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?Ee.setTexture2DArray(A,0):Ee.setTexture2D(A,0),le.unbindTexture()},this.resetState=function(){x=0,b=0,y=null,le.reset(),ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}}class U0 extends Ku{}U0.prototype.isWebGL1Renderer=!0;class Zu extends ut{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class $u{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=co,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=ln()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ln()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ln()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const kt=new k;class Gr{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix4(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyNormalMatrix(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.transformDirection(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}setX(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ln(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ln(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ln(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ln(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array),i=lt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array),i=lt(i,this.array),r=lt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Gt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Gr(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class No extends Qt{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Fe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Di;const yr=new k,Ii=new k,Ui=new k,Oi=new Ne,br=new Ne,Ju=new Xe,ws=new k,Mr=new k,Ts=new k,yc=new Ne,ja=new Ne,bc=new Ne;class Qu extends ut{constructor(e){if(super(),this.isSprite=!0,this.type="Sprite",Di===void 0){Di=new mt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new $u(t,5);Di.setIndex([0,1,2,0,2,3]),Di.setAttribute("position",new Gr(n,3,0,!1)),Di.setAttribute("uv",new Gr(n,2,3,!1))}this.geometry=Di,this.material=e!==void 0?e:new No,this.center=new Ne(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ii.setFromMatrixScale(this.matrixWorld),Ju.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ui.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ii.multiplyScalar(-Ui.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const s=this.center;As(ws.set(-.5,-.5,0),Ui,s,Ii,i,r),As(Mr.set(.5,-.5,0),Ui,s,Ii,i,r),As(Ts.set(.5,.5,0),Ui,s,Ii,i,r),yc.set(0,0),ja.set(1,0),bc.set(1,1);let a=e.ray.intersectTriangle(ws,Mr,Ts,!1,yr);if(a===null&&(As(Mr.set(-.5,.5,0),Ui,s,Ii,i,r),ja.set(0,1),a=e.ray.intersectTriangle(ws,Ts,Mr,!1,yr),a===null))return;const l=e.ray.origin.distanceTo(yr);l<e.near||l>e.far||t.push({distance:l,point:yr.clone(),uv:Kt.getInterpolation(yr,ws,Mr,Ts,yc,ja,bc,new Ne),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function As(o,e,t,n,i,r){Oi.subVectors(o,t).addScalar(.5).multiply(n),i!==void 0?(br.x=r*Oi.x-i*Oi.y,br.y=i*Oi.x+r*Oi.y):br.copy(Oi),o.copy(e),o.x+=br.x,o.y+=br.y,o.applyMatrix4(Ju)}const Mc=new k,Sc=new at,wc=new at,O0=new k,Tc=new Xe,Ni=new k;class N0 extends Mt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new Xe,this.bindMatrixInverse=new Xe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new _n),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)Ni.fromBufferAttribute(t,n),this.applyBoneTransform(n,Ni),this.boundingBox.expandByPoint(Ni)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new vn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)Ni.fromBufferAttribute(t,n),this.applyBoneTransform(n,Ni),this.boundingSphere.expandByPoint(Ni)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new at,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Sc.fromBufferAttribute(i.attributes.skinIndex,e),wc.fromBufferAttribute(i.attributes.skinWeight,e),Mc.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const s=wc.getComponent(r);if(s!==0){const a=Sc.getComponent(r);Tc.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(O0.copy(Mc).applyMatrix4(Tc),s)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}}class eh extends ut{constructor(){super(),this.isBone=!0,this.type="Bone"}}class F0 extends St{constructor(e=null,t=1,n=1,i,r,s,a,l,c=pt,u=pt,h,d){super(null,s,a,l,c,u,i,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ac=new Xe,k0=new Xe;class Fo{constructor(e=[],t=[]){this.uuid=ln(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Xe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Xe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,s=e.length;r<s;r++){const a=e[r]?e[r].matrixWorld:k0;Ac.multiplyMatrices(a,t[r]),Ac.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Fo(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Lu(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new F0(t,e,e,Jt,Vn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let s=t[r];s===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),s=new eh),this.bones.push(s),this.boneInverses.push(new Xe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const s=t[i];e.bones.push(s.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class po extends Gt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Fi=new Xe,Ec=new Xe,Es=[],Cc=new _n,B0=new Xe,Sr=new Mt,wr=new vn;class G0 extends Mt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new po(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,B0)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new _n),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Fi),Cc.copy(e.boundingBox).applyMatrix4(Fi),this.boundingBox.union(Cc)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new vn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Fi),wr.copy(e.boundingSphere).applyMatrix4(Fi),this.boundingSphere.union(wr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Sr.geometry=this.geometry,Sr.material=this.material,Sr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),wr.copy(this.boundingSphere),wr.applyMatrix4(n),e.ray.intersectsSphere(wr)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Fi),Ec.multiplyMatrices(n,Fi),Sr.matrixWorld=Ec,Sr.raycast(e,Es);for(let s=0,a=Es.length;s<a;s++){const l=Es[s];l.instanceId=r,l.object=this,t.push(l)}Es.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new po(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class nr extends Qt{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Fe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Lc=new k,Rc=new k,Pc=new Xe,Xa=new qs,Cs=new vn;class ti extends ut{constructor(e=new mt,t=new nr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Lc.fromBufferAttribute(t,i-1),Rc.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Lc.distanceTo(Rc);e.setAttribute("lineDistance",new wt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Cs.copy(n.boundingSphere),Cs.applyMatrix4(i),Cs.radius+=r,e.ray.intersectsSphere(Cs)===!1)return;Pc.copy(i).invert(),Xa.copy(e.ray).applyMatrix4(Pc);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new k,u=new k,h=new k,d=new k,p=this.isLineSegments?2:1,g=n.index,m=n.attributes.position;if(g!==null){const f=Math.max(0,s.start),v=Math.min(g.count,s.start+s.count);for(let x=f,b=v-1;x<b;x+=p){const y=g.getX(x),T=g.getX(x+1);if(c.fromBufferAttribute(m,y),u.fromBufferAttribute(m,T),Xa.distanceSqToSegment(c,u,d,h)>l)continue;d.applyMatrix4(this.matrixWorld);const L=e.ray.origin.distanceTo(d);L<e.near||L>e.far||t.push({distance:L,point:h.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{const f=Math.max(0,s.start),v=Math.min(m.count,s.start+s.count);for(let x=f,b=v-1;x<b;x+=p){if(c.fromBufferAttribute(m,x),u.fromBufferAttribute(m,x+1),Xa.distanceSqToSegment(c,u,d,h)>l)continue;d.applyMatrix4(this.matrixWorld);const T=e.ray.origin.distanceTo(d);T<e.near||T>e.far||t.push({distance:T,point:h.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}const Dc=new k,Ic=new k;class js extends ti{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Dc.fromBufferAttribute(t,i),Ic.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Dc.distanceTo(Ic);e.setAttribute("lineDistance",new wt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class z0 extends ti{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class $s extends Qt{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Fe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Uc=new Xe,mo=new qs,Ls=new vn,Rs=new k;class ko extends ut{constructor(e=new mt,t=new $s){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ls.copy(n.boundingSphere),Ls.applyMatrix4(i),Ls.radius+=r,e.ray.intersectsSphere(Ls)===!1)return;Uc.copy(i).invert(),mo.copy(e.ray).applyMatrix4(Uc);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){const d=Math.max(0,s.start),p=Math.min(c.count,s.start+s.count);for(let g=d,_=p;g<_;g++){const m=c.getX(g);Rs.fromBufferAttribute(h,m),Oc(Rs,m,l,i,e,t,this)}}else{const d=Math.max(0,s.start),p=Math.min(h.count,s.start+s.count);for(let g=d,_=p;g<_;g++)Rs.fromBufferAttribute(h,g),Oc(Rs,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Oc(o,e,t,n,i,r,s){const a=mo.distanceSqToPoint(o);if(a<t){const l=new k;mo.closestPointToPoint(o,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:s})}}class Js extends mt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,s=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:s,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(s+a,Math.PI);let c=0;const u=[],h=new k,d=new k,p=[],g=[],_=[],m=[];for(let f=0;f<=n;f++){const v=[],x=f/n;let b=0;f===0&&s===0?b=.5/t:f===n&&l===Math.PI&&(b=-.5/t);for(let y=0;y<=t;y++){const T=y/t;h.x=-e*Math.cos(i+T*r)*Math.sin(s+x*a),h.y=e*Math.cos(s+x*a),h.z=e*Math.sin(i+T*r)*Math.sin(s+x*a),g.push(h.x,h.y,h.z),d.copy(h).normalize(),_.push(d.x,d.y,d.z),m.push(T+b,1-x),v.push(c++)}u.push(v)}for(let f=0;f<n;f++)for(let v=0;v<t;v++){const x=u[f][v+1],b=u[f][v],y=u[f+1][v],T=u[f+1][v+1];(f!==0||s>0)&&p.push(x,b,T),(f!==n-1||l<Math.PI)&&p.push(b,y,T)}this.setIndex(p),this.setAttribute("position",new wt(g,3)),this.setAttribute("normal",new wt(_,3)),this.setAttribute("uv",new wt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Js(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Bo extends Qt{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Fe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ro,this.normalScale=new Ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ci extends Bo{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ne(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return At(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Fe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Fe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Fe(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class V0 extends Qt{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Fe(16777215),this.specular=new Fe(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ro,this.normalScale=new Ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Lo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}function Bn(o,e,t){return th(o)?new o.constructor(o.subarray(e,t!==void 0?t:o.length)):o.slice(e,t)}function Ps(o,e,t){return!o||!t&&o.constructor===e?o:typeof e.BYTES_PER_ELEMENT=="number"?new e(o):Array.prototype.slice.call(o)}function th(o){return ArrayBuffer.isView(o)&&!(o instanceof DataView)}function H0(o){function e(i,r){return o[i]-o[r]}const t=o.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Nc(o,e,t){const n=o.length,i=new o.constructor(n);for(let r=0,s=0;s!==n;++r){const a=t[r]*e;for(let l=0;l!==e;++l)i[s++]=o[a+l]}return i}function nh(o,e,t,n){let i=1,r=o[0];for(;r!==void 0&&r[n]===void 0;)r=o[i++];if(r===void 0)return;let s=r[n];if(s!==void 0)if(Array.isArray(s))do s=r[n],s!==void 0&&(e.push(r.time),t.push.apply(t,s)),r=o[i++];while(r!==void 0);else if(s.toArray!==void 0)do s=r[n],s!==void 0&&(e.push(r.time),s.toArray(t,t.length)),r=o[i++];while(r!==void 0);else do s=r[n],s!==void 0&&(e.push(r.time),t.push(s)),r=o[i++];while(r!==void 0)}class jr{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let s;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break e}s=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break e}s=n,n=0;break t}break n}for(;n<s;){const a=n+s>>>1;e<t[a]?s=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let s=0;s!==i;++s)t[s]=n[r+s];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class W0 extends jr{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Il,endingEnd:Il}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,s=e+1,a=i[r],l=i[s];if(a===void 0)switch(this.getSettings_().endingStart){case Ul:r=e,a=2*t-n;break;case Ol:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Ul:s=e,l=2*n-t;break;case Ol:s=1,l=n+i[1]-i[0];break;default:s=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=s*u}interpolate_(e,t,n,i){const r=this.resultBuffer,s=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,p=this._weightNext,g=(n-t)/(i-t),_=g*g,m=_*g,f=-d*m+2*d*_-d*g,v=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*g+1,x=(-1-p)*m+(1.5+p)*_+.5*g,b=p*m-p*_;for(let y=0;y!==a;++y)r[y]=f*s[u+y]+v*s[c+y]+x*s[l+y]+b*s[h+y];return r}}class j0 extends jr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,s=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(i-t),h=1-u;for(let d=0;d!==a;++d)r[d]=s[c+d]*h+s[l+d]*u;return r}}class X0 extends jr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class xn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ps(t,this.TimeBufferType),this.values=Ps(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ps(e.times,Array),values:Ps(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new X0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new j0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new W0(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Fr:t=this.InterpolantFactoryMethodDiscrete;break;case Zi:t=this.InterpolantFactoryMethodLinear;break;case Ma:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Fr;case this.InterpolantFactoryMethodLinear:return Zi;case this.InterpolantFactoryMethodSmooth:return Ma}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,s=i-1;for(;r!==i&&n[r]<e;)++r;for(;s!==-1&&n[s]>t;)--s;if(++s,r!==0||s!==i){r>=s&&(s=Math.max(s,1),r=s-1);const a=this.getValueSize();this.times=Bn(n,r,s),this.values=Bn(this.values,r*a,s*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let s=null;for(let a=0;a!==r;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(s!==null&&s>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,s),e=!1;break}s=l}if(i!==void 0&&th(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=Bn(this.times),t=Bn(this.values),n=this.getValueSize(),i=this.getInterpolation()===Ma,r=e.length-1;let s=1;for(let a=1;a<r;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(i)l=!0;else{const h=a*n,d=h-n,p=h+n;for(let g=0;g!==n;++g){const _=t[h+g];if(_!==t[d+g]||_!==t[p+g]){l=!0;break}}}if(l){if(a!==s){e[s]=e[a];const h=a*n,d=s*n;for(let p=0;p!==n;++p)t[d+p]=t[h+p]}++s}}if(r>0){e[s]=e[r];for(let a=r*n,l=s*n,c=0;c!==n;++c)t[l+c]=t[a+c];++s}return s!==e.length?(this.times=Bn(e,0,s),this.values=Bn(t,0,s*n)):(this.times=e,this.values=t),this}clone(){const e=Bn(this.times,0),t=Bn(this.values,0),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}xn.prototype.TimeBufferType=Float32Array;xn.prototype.ValueBufferType=Float32Array;xn.prototype.DefaultInterpolation=Zi;class ir extends xn{}ir.prototype.ValueTypeName="bool";ir.prototype.ValueBufferType=Array;ir.prototype.DefaultInterpolation=Fr;ir.prototype.InterpolantFactoryMethodLinear=void 0;ir.prototype.InterpolantFactoryMethodSmooth=void 0;class ih extends xn{}ih.prototype.ValueTypeName="color";class zr extends xn{}zr.prototype.ValueTypeName="number";class Y0 extends jr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,s=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t);let c=e*a;for(let u=c+a;c!==u;c+=4)en.slerpFlat(r,0,s,c-a,s,c,l);return r}}class oi extends xn{InterpolantFactoryMethodLinear(e){return new Y0(this.times,this.values,this.getValueSize(),e)}}oi.prototype.ValueTypeName="quaternion";oi.prototype.DefaultInterpolation=Zi;oi.prototype.InterpolantFactoryMethodSmooth=void 0;class rr extends xn{}rr.prototype.ValueTypeName="string";rr.prototype.ValueBufferType=Array;rr.prototype.DefaultInterpolation=Fr;rr.prototype.InterpolantFactoryMethodLinear=void 0;rr.prototype.InterpolantFactoryMethodSmooth=void 0;class Vr extends xn{}Vr.prototype.ValueTypeName="vector";class q0{constructor(e,t=-1,n,i=gd){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=ln(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let s=0,a=n.length;s!==a;++s)t.push(Z0(n[s]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,s=n.length;r!==s;++r)t.push(xn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,s=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const u=H0(l);l=Nc(l,1,u),c=Nc(c,1,u),!i&&l[0]===0&&(l.push(r),c.push(c[0])),s.push(new zr(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,s)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(r);if(u&&u.length>1){const h=u[1];let d=i[h];d||(i[h]=d=[]),d.push(c)}}const s=[];for(const a in i)s.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return s}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,d,p,g,_){if(p.length!==0){const m=[],f=[];nh(p,m,f,g),m.length!==0&&_.push(new h(d,m,f))}},i=[],r=e.name||"default",s=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const d=c[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const p={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let _=0;_<d[g].morphTargets.length;_++)p[d[g].morphTargets[_]]=-1;for(const _ in p){const m=[],f=[];for(let v=0;v!==d[g].morphTargets.length;++v){const x=d[g];m.push(x.time),f.push(x.morphTarget===_?1:0)}i.push(new zr(".morphTargetInfluence["+_+"]",m,f))}l=p.length*s}else{const p=".bones["+t[h].name+"]";n(Vr,p+".position",d,"pos",i),n(oi,p+".quaternion",d,"rot",i),n(Vr,p+".scale",d,"scl",i)}}return i.length===0?null:new this(r,l,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function K0(o){switch(o.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return zr;case"vector":case"vector2":case"vector3":case"vector4":return Vr;case"color":return ih;case"quaternion":return oi;case"bool":case"boolean":return ir;case"string":return rr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+o)}function Z0(o){if(o.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=K0(o.type);if(o.times===void 0){const t=[],n=[];nh(o.keys,t,n,"value"),o.times=t,o.values=n}return e.parse!==void 0?e.parse(o):new e(o.name,o.times,o.values,o.interpolation)}const Qi={enabled:!1,files:{},add:function(o,e){this.enabled!==!1&&(this.files[o]=e)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};class rh{constructor(e,t,n){const i=this;let r=!1,s=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,r===!1&&i.onStart!==void 0&&i.onStart(u,s,a),r=!0},this.itemEnd=function(u){s++,i.onProgress!==void 0&&i.onProgress(u,s,a),s===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const p=c[h],g=c[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null}}}const $0=new rh;class Xr{constructor(e){this.manager=e!==void 0?e:$0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const Cn={};class J0 extends Error{constructor(e,t){super(e),this.response=t}}class sh extends Xr{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Qi.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Cn[e]!==void 0){Cn[e].push({onLoad:t,onProgress:n,onError:i});return}Cn[e]=[],Cn[e].push({onLoad:t,onProgress:n,onError:i});const s=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(s).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Cn[e],h=c.body.getReader(),d=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),p=d?parseInt(d):0,g=p!==0;let _=0;const m=new ReadableStream({start(f){v();function v(){h.read().then(({done:x,value:b})=>{if(x)f.close();else{_+=b.byteLength;const y=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:p});for(let T=0,C=u.length;T<C;T++){const L=u[T];L.onProgress&&L.onProgress(y)}f.enqueue(b),v()}})}}});return new Response(m)}else throw new J0(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),d=h&&h[1]?h[1].toLowerCase():void 0,p=new TextDecoder(d);return c.arrayBuffer().then(g=>p.decode(g))}}}).then(c=>{Qi.add(e,c);const u=Cn[e];delete Cn[e];for(let h=0,d=u.length;h<d;h++){const p=u[h];p.onLoad&&p.onLoad(c)}}).catch(c=>{const u=Cn[e];if(u===void 0)throw this.manager.itemError(e),c;delete Cn[e];for(let h=0,d=u.length;h<d;h++){const p=u[h];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Q0 extends Xr{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,s=Qi.get(e);if(s!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(s),r.manager.itemEnd(e)},0),s;const a=Br("img");function l(){u(),Qi.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(h){u(),i&&i(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class ah extends Xr{constructor(e){super(e)}load(e,t,n,i){const r=new St,s=new Q0(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class Qs extends ut{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Fe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Ya=new Xe,Fc=new k,kc=new k;class Go{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ne(512,512),this.map=null,this.mapPass=null,this.matrix=new Xe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Io,this._frameExtents=new Ne(1,1),this._viewportCount=1,this._viewports=[new at(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Fc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Fc),kc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(kc),t.updateMatrixWorld(),Ya.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ya),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ya)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class e_ extends Go{constructor(){super(new Ot(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=$i*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class t_ extends Qs{constructor(e,t,n=0,i=Math.PI/3,r=0,s=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ut.DEFAULT_UP),this.updateMatrix(),this.target=new ut,this.distance=n,this.angle=i,this.penumbra=r,this.decay=s,this.map=null,this.shadow=new e_}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Bc=new Xe,Tr=new k,qa=new k;class n_ extends Go{constructor(){super(new Ot(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ne(4,2),this._viewportCount=6,this._viewports=[new at(2,1,1,1),new at(0,1,1,1),new at(3,1,1,1),new at(1,1,1,1),new at(3,0,1,1),new at(1,0,1,1)],this._cubeDirections=[new k(1,0,0),new k(-1,0,0),new k(0,0,1),new k(0,0,-1),new k(0,1,0),new k(0,-1,0)],this._cubeUps=[new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,0,1),new k(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Tr.setFromMatrixPosition(e.matrixWorld),n.position.copy(Tr),qa.copy(n.position),qa.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(qa),n.updateMatrixWorld(),i.makeTranslation(-Tr.x,-Tr.y,-Tr.z),Bc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Bc)}}class zo extends Qs{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new n_}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class i_ extends Go{constructor(){super(new Uo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class r_ extends Qs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ut.DEFAULT_UP),this.updateMatrix(),this.target=new ut,this.shadow=new i_}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class s_ extends Qs{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class go{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class a_ extends mt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class o_ extends Xr{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,s=Qi.get(e);if(s!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(s),r.manager.itemEnd(e)},0),s;const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){Qi.add(e,l),t&&t(l),r.manager.itemEnd(e)}).catch(function(l){i&&i(l),r.manager.itemError(e),r.manager.itemEnd(e)}),r.manager.itemStart(e)}}class l_{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Gc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Gc();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Gc(){return(typeof performance>"u"?Date:performance).now()}const Vo="\\[\\]\\.:\\/",c_=new RegExp("["+Vo+"]","g"),Ho="[^"+Vo+"]",u_="[^"+Vo.replace("\\.","")+"]",h_=/((?:WC+[\/:])*)/.source.replace("WC",Ho),d_=/(WCOD+)?/.source.replace("WCOD",u_),f_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ho),p_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ho),m_=new RegExp("^"+h_+d_+f_+p_+"$"),g_=["material","materials","bones","map"];class __{constructor(e,t,n){const i=n||st.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class st{constructor(e,t,n){this.path=t,this.parsedPath=n||st.parseTrackName(t),this.node=st.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new st.Composite(e,t,n):new st(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(c_,"")}static parseTrackName(e){const t=m_.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);g_.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let s=0;s<r.length;s++){const a=r[s];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=st.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const s=e[i];if(s===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=r}else s.fromArray!==void 0&&s.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(l=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}st.Composite=__;st.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};st.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};st.prototype.GetterByBindingType=[st.prototype._getValue_direct,st.prototype._getValue_array,st.prototype._getValue_arrayElement,st.prototype._getValue_toArray];st.prototype.SetterByBindingTypeAndVersioning=[[st.prototype._setValue_direct,st.prototype._setValue_direct_setNeedsUpdate,st.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[st.prototype._setValue_array,st.prototype._setValue_array_setNeedsUpdate,st.prototype._setValue_array_setMatrixWorldNeedsUpdate],[st.prototype._setValue_arrayElement,st.prototype._setValue_arrayElement_setNeedsUpdate,st.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[st.prototype._setValue_fromArray,st.prototype._setValue_fromArray_setNeedsUpdate,st.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class oh{constructor(e,t,n=0,i=1/0){this.ray=new qs(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Do,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return _o(e,this,n,t),n.sort(zc),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)_o(e[i],this,n,t);return n.sort(zc),n}}function zc(o,e){return o.distance-e.distance}function _o(o,e,t,n){if(o.layers.test(e.layers)&&o.raycast(e,t),n===!0){const i=o.children;for(let r=0,s=i.length;r<s;r++)_o(i[r],e,t,!0)}}class Vc{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(At(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class v_ extends js{constructor(e=10,t=10,n=4473924,i=8947848){n=new Fe(n),i=new Fe(i);const r=t/2,s=e/t,a=e/2,l=[],c=[];for(let d=0,p=0,g=-a;d<=t;d++,g+=s){l.push(-a,0,g,a,0,g),l.push(g,0,-a,g,0,a);const _=d===r?n:i;_.toArray(c,p),p+=3,_.toArray(c,p),p+=3,_.toArray(c,p),p+=3,_.toArray(c,p),p+=3}const u=new mt;u.setAttribute("position",new wt(l,3)),u.setAttribute("color",new wt(c,3));const h=new nr({vertexColors:!0,toneMapped:!1});super(u,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Co}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Co);function x_(){var o=Object.create(null);function e(i,r){var s=i.id,a=i.name,l=i.dependencies;l===void 0&&(l=[]);var c=i.init;c===void 0&&(c=function(){});var u=i.getTransferables;if(u===void 0&&(u=null),!o[s])try{l=l.map(function(d){return d&&d.isWorkerModule&&(e(d,function(p){if(p instanceof Error)throw p}),d=o[d.id].value),d}),c=n("<"+a+">.init",c),u&&(u=n("<"+a+">.getTransferables",u));var h=null;typeof c=="function"?h=c.apply(void 0,l):console.error("worker module init function failed to rehydrate"),o[s]={id:s,value:h,getTransferables:u},r(h)}catch(d){d&&d.noLog||console.error(d),r(d)}}function t(i,r){var s,a=i.id,l=i.args;(!o[a]||typeof o[a].value!="function")&&r(new Error("Worker module "+a+": not found or its 'init' did not return a function"));try{var c=(s=o[a]).value.apply(s,l);c&&typeof c.then=="function"?c.then(u,function(h){return r(h instanceof Error?h:new Error(""+h))}):u(c)}catch(h){r(h)}function u(h){try{var d=o[a].getTransferables&&o[a].getTransferables(h);(!d||!Array.isArray(d)||!d.length)&&(d=void 0),r(h,d)}catch(p){console.error(p),r(p)}}}function n(i,r){var s=void 0;self.troikaDefine=function(l){return s=l};var a=URL.createObjectURL(new Blob(["/** "+i.replace(/\*/g,"")+` **/

troikaDefine(
`+r+`
)`],{type:"application/javascript"}));try{importScripts(a)}catch(l){console.error(l)}return URL.revokeObjectURL(a),delete self.troikaDefine,s}self.addEventListener("message",function(i){var r=i.data,s=r.messageId,a=r.action,l=r.data;try{a==="registerModule"&&e(l,function(c){c instanceof Error?postMessage({messageId:s,success:!1,error:c.message}):postMessage({messageId:s,success:!0,result:{isCallable:typeof c=="function"}})}),a==="callModule"&&t(l,function(c,u){c instanceof Error?postMessage({messageId:s,success:!1,error:c.message}):postMessage({messageId:s,success:!0,result:c},u||void 0)})}catch(c){postMessage({messageId:s,success:!1,error:c.stack})}})}function y_(o){var e=function(){for(var t=[],n=arguments.length;n--;)t[n]=arguments[n];return e._getInitResult().then(function(i){if(typeof i=="function")return i.apply(void 0,t);throw new Error("Worker module function was called but `init` did not return a callable function")})};return e._getInitResult=function(){var t=o.dependencies,n=o.init;t=Array.isArray(t)?t.map(function(r){return r&&r._getInitResult?r._getInitResult():r}):[];var i=Promise.all(t).then(function(r){return n.apply(null,r)});return e._getInitResult=function(){return i},i},e}var lh=function(){var o=!1;if(typeof window<"u"&&typeof window.document<"u")try{var e=new Worker(URL.createObjectURL(new Blob([""],{type:"application/javascript"})));e.terminate(),o=!0}catch(t){typeof process<"u",console.log("Troika createWorkerModule: web workers not allowed; falling back to main thread execution. Cause: ["+t.message+"]")}return lh=function(){return o},o},b_=0,M_=0,Ka=!1,Ir=Object.create(null),Ur=Object.create(null),vo=Object.create(null);function Yr(o){if((!o||typeof o.init!="function")&&!Ka)throw new Error("requires `options.init` function");var e=o.dependencies,t=o.init,n=o.getTransferables,i=o.workerId;if(!lh())return y_(o);i==null&&(i="#default");var r="workerModule"+ ++b_,s=o.name||r,a=null;e=e&&e.map(function(c){return typeof c=="function"&&!c.workerModuleData&&(Ka=!0,c=Yr({workerId:i,name:"<"+s+"> function dependency: "+c.name,init:`function(){return (
`+Bs(c)+`
)}`}),Ka=!1),c&&c.workerModuleData&&(c=c.workerModuleData),c});function l(){for(var c=[],u=arguments.length;u--;)c[u]=arguments[u];if(!a){a=Hc(i,"registerModule",l.workerModuleData);var h=function(){a=null,Ur[i].delete(h)};(Ur[i]||(Ur[i]=new Set)).add(h)}return a.then(function(d){var p=d.isCallable;if(p)return Hc(i,"callModule",{id:r,args:c});throw new Error("Worker module function was called but `init` did not return a callable function")})}return l.workerModuleData={isWorkerModule:!0,id:r,name:s,dependencies:e,init:Bs(t),getTransferables:n&&Bs(n)},l}function S_(o){Ur[o]&&Ur[o].forEach(function(e){e()}),Ir[o]&&(Ir[o].terminate(),delete Ir[o])}function Bs(o){var e=o.toString();return!/^function/.test(e)&&/^\w+\s*\(/.test(e)&&(e="function "+e),e}function w_(o){var e=Ir[o];if(!e){var t=Bs(x_);e=Ir[o]=new Worker(URL.createObjectURL(new Blob(["/** Worker Module Bootstrap: "+o.replace(/\*/g,"")+` **/

;(`+t+")()"],{type:"application/javascript"}))),e.onmessage=function(n){var i=n.data,r=i.messageId,s=vo[r];if(!s)throw new Error("WorkerModule response with empty or unknown messageId");delete vo[r],s(i)}}return e}function Hc(o,e,t){return new Promise(function(n,i){var r=++M_;vo[r]=function(s){s.success?n(s.result):i(new Error("Error in worker "+e+" call: "+s.error))},w_(o).postMessage({messageId:r,action:e,data:t})})}function ch(){var o=function(e){function t(z,K,N,W,F,G,H,ee){var I=1-H;ee.x=I*I*z+2*I*H*N+H*H*F,ee.y=I*I*K+2*I*H*W+H*H*G}function n(z,K,N,W,F,G,H,ee,I,ie){var ue=1-I;ie.x=ue*ue*ue*z+3*ue*ue*I*N+3*ue*I*I*F+I*I*I*H,ie.y=ue*ue*ue*K+3*ue*ue*I*W+3*ue*I*I*G+I*I*I*ee}function i(z,K){for(var N=/([MLQCZ])([^MLQCZ]*)/g,W,F,G,H,ee;W=N.exec(z);){var I=W[2].replace(/^\s*|\s*$/g,"").split(/[,\s]+/).map(function(ie){return parseFloat(ie)});switch(W[1]){case"M":H=F=I[0],ee=G=I[1];break;case"L":(I[0]!==H||I[1]!==ee)&&K("L",H,ee,H=I[0],ee=I[1]);break;case"Q":{K("Q",H,ee,H=I[2],ee=I[3],I[0],I[1]);break}case"C":{K("C",H,ee,H=I[4],ee=I[5],I[0],I[1],I[2],I[3]);break}case"Z":(H!==F||ee!==G)&&K("L",H,ee,F,G);break}}}function r(z,K,N){N===void 0&&(N=16);var W={x:0,y:0};i(z,function(F,G,H,ee,I,ie,ue,se,le){switch(F){case"L":K(G,H,ee,I);break;case"Q":{for(var oe=G,be=H,Ee=1;Ee<N;Ee++)t(G,H,ie,ue,ee,I,Ee/(N-1),W),K(oe,be,W.x,W.y),oe=W.x,be=W.y;break}case"C":{for(var Me=G,Ae=H,Ie=1;Ie<N;Ie++)n(G,H,ie,ue,se,le,ee,I,Ie/(N-1),W),K(Me,Ae,W.x,W.y),Me=W.x,Ae=W.y;break}}})}var s="precision highp float;attribute vec2 aUV;varying vec2 vUV;void main(){vUV=aUV;gl_Position=vec4(mix(vec2(-1.0),vec2(1.0),aUV),0.0,1.0);}",a="precision highp float;uniform sampler2D tex;varying vec2 vUV;void main(){gl_FragColor=texture2D(tex,vUV);}",l=new WeakMap,c={premultipliedAlpha:!1,preserveDrawingBuffer:!0,antialias:!1,depth:!1};function u(z,K){var N=z.getContext?z.getContext("webgl",c):z,W=l.get(N);if(!W){let ue=function(Me){var Ae=G[Me];if(!Ae&&(Ae=G[Me]=N.getExtension(Me),!Ae))throw new Error(Me+" not supported");return Ae},se=function(Me,Ae){var Ie=N.createShader(Ae);return N.shaderSource(Ie,Me),N.compileShader(Ie),Ie},le=function(Me,Ae,Ie,me){if(!H[Me]){var we={},Se={},de=N.createProgram();N.attachShader(de,se(Ae,N.VERTEX_SHADER)),N.attachShader(de,se(Ie,N.FRAGMENT_SHADER)),N.linkProgram(de),H[Me]={program:de,transaction:function(M){N.useProgram(de),M({setUniform:function(J,ce){for(var fe=[],R=arguments.length-2;R-- >0;)fe[R]=arguments[R+2];var Q=Se[ce]||(Se[ce]=N.getUniformLocation(de,ce));N["uniform"+J].apply(N,[Q].concat(fe))},setAttribute:function(J,ce,fe,R,Q){var j=we[J];j||(j=we[J]={buf:N.createBuffer(),loc:N.getAttribLocation(de,J),data:null}),N.bindBuffer(N.ARRAY_BUFFER,j.buf),N.vertexAttribPointer(j.loc,ce,N.FLOAT,!1,0,0),N.enableVertexAttribArray(j.loc),F?N.vertexAttribDivisor(j.loc,R):ue("ANGLE_instanced_arrays").vertexAttribDivisorANGLE(j.loc,R),Q!==j.data&&(N.bufferData(N.ARRAY_BUFFER,Q,fe),j.data=Q)}})}}}H[Me].transaction(me)},oe=function(Me,Ae){I++;try{N.activeTexture(N.TEXTURE0+I);var Ie=ee[Me];Ie||(Ie=ee[Me]=N.createTexture(),N.bindTexture(N.TEXTURE_2D,Ie),N.texParameteri(N.TEXTURE_2D,N.TEXTURE_MIN_FILTER,N.NEAREST),N.texParameteri(N.TEXTURE_2D,N.TEXTURE_MAG_FILTER,N.NEAREST)),N.bindTexture(N.TEXTURE_2D,Ie),Ae(Ie,I)}finally{I--}},be=function(Me,Ae,Ie){var me=N.createFramebuffer();ie.push(me),N.bindFramebuffer(N.FRAMEBUFFER,me),N.activeTexture(N.TEXTURE0+Ae),N.bindTexture(N.TEXTURE_2D,Me),N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Me,0);try{Ie(me)}finally{N.deleteFramebuffer(me),N.bindFramebuffer(N.FRAMEBUFFER,ie[--ie.length-1]||null)}},Ee=function(){G={},H={},ee={},I=-1,ie.length=0};var F=typeof WebGL2RenderingContext<"u"&&N instanceof WebGL2RenderingContext,G={},H={},ee={},I=-1,ie=[];N.canvas.addEventListener("webglcontextlost",function(Me){Ee(),Me.preventDefault()},!1),l.set(N,W={gl:N,isWebGL2:F,getExtension:ue,withProgram:le,withTexture:oe,withTextureFramebuffer:be,handleContextLoss:Ee})}K(W)}function h(z,K,N,W,F,G,H,ee){H===void 0&&(H=15),ee===void 0&&(ee=null),u(z,function(I){var ie=I.gl,ue=I.withProgram,se=I.withTexture;se("copy",function(le,oe){ie.texImage2D(ie.TEXTURE_2D,0,ie.RGBA,F,G,0,ie.RGBA,ie.UNSIGNED_BYTE,K),ue("copy",s,a,function(be){var Ee=be.setUniform,Me=be.setAttribute;Me("aUV",2,ie.STATIC_DRAW,0,new Float32Array([0,0,2,0,0,2])),Ee("1i","image",oe),ie.bindFramebuffer(ie.FRAMEBUFFER,ee||null),ie.disable(ie.BLEND),ie.colorMask(H&8,H&4,H&2,H&1),ie.viewport(N,W,F,G),ie.scissor(N,W,F,G),ie.drawArrays(ie.TRIANGLES,0,3)})})})}function d(z,K,N){var W=z.width,F=z.height;u(z,function(G){var H=G.gl,ee=new Uint8Array(W*F*4);H.readPixels(0,0,W,F,H.RGBA,H.UNSIGNED_BYTE,ee),z.width=K,z.height=N,h(H,ee,0,0,W,F)})}var p=Object.freeze({__proto__:null,withWebGLContext:u,renderImageData:h,resizeWebGLCanvasWithoutClearing:d});function g(z,K,N,W,F,G){G===void 0&&(G=1);var H=new Uint8Array(z*K),ee=W[2]-W[0],I=W[3]-W[1],ie=[];r(N,function(Me,Ae,Ie,me){ie.push({x1:Me,y1:Ae,x2:Ie,y2:me,minX:Math.min(Me,Ie),minY:Math.min(Ae,me),maxX:Math.max(Me,Ie),maxY:Math.max(Ae,me)})}),ie.sort(function(Me,Ae){return Me.maxX-Ae.maxX});for(var ue=0;ue<z;ue++)for(var se=0;se<K;se++){var le=be(W[0]+ee*(ue+.5)/z,W[1]+I*(se+.5)/K),oe=Math.pow(1-Math.abs(le)/F,G)/2;le<0&&(oe=1-oe),oe=Math.max(0,Math.min(255,Math.round(oe*255))),H[se*z+ue]=oe}return H;function be(Me,Ae){for(var Ie=1/0,me=1/0,we=ie.length;we--;){var Se=ie[we];if(Se.maxX+me<=Me)break;if(Me+me>Se.minX&&Ae-me<Se.maxY&&Ae+me>Se.minY){var de=f(Me,Ae,Se.x1,Se.y1,Se.x2,Se.y2);de<Ie&&(Ie=de,me=Math.sqrt(Ie))}}return Ee(Me,Ae)&&(me=-me),me}function Ee(Me,Ae){for(var Ie=0,me=ie.length;me--;){var we=ie[me];if(we.maxX<=Me)break;var Se=we.y1>Ae!=we.y2>Ae&&Me<(we.x2-we.x1)*(Ae-we.y1)/(we.y2-we.y1)+we.x1;Se&&(Ie+=we.y1<we.y2?1:-1)}return Ie!==0}}function _(z,K,N,W,F,G,H,ee,I,ie){G===void 0&&(G=1),ee===void 0&&(ee=0),I===void 0&&(I=0),ie===void 0&&(ie=0),m(z,K,N,W,F,G,H,null,ee,I,ie)}function m(z,K,N,W,F,G,H,ee,I,ie,ue){G===void 0&&(G=1),I===void 0&&(I=0),ie===void 0&&(ie=0),ue===void 0&&(ue=0);for(var se=g(z,K,N,W,F,G),le=new Uint8Array(se.length*4),oe=0;oe<se.length;oe++)le[oe*4+ue]=se[oe];h(H,le,I,ie,z,K,1<<3-ue,ee)}function f(z,K,N,W,F,G){var H=F-N,ee=G-W,I=H*H+ee*ee,ie=I?Math.max(0,Math.min(1,((z-N)*H+(K-W)*ee)/I)):0,ue=z-(N+ie*H),se=K-(W+ie*ee);return ue*ue+se*se}var v=Object.freeze({__proto__:null,generate:g,generateIntoCanvas:_,generateIntoFramebuffer:m}),x="precision highp float;uniform vec4 uGlyphBounds;attribute vec2 aUV;attribute vec4 aLineSegment;varying vec4 vLineSegment;varying vec2 vGlyphXY;void main(){vLineSegment=aLineSegment;vGlyphXY=mix(uGlyphBounds.xy,uGlyphBounds.zw,aUV);gl_Position=vec4(mix(vec2(-1.0),vec2(1.0),aUV),0.0,1.0);}",b="precision highp float;uniform vec4 uGlyphBounds;uniform float uMaxDistance;uniform float uExponent;varying vec4 vLineSegment;varying vec2 vGlyphXY;float absDistToSegment(vec2 point,vec2 lineA,vec2 lineB){vec2 lineDir=lineB-lineA;float lenSq=dot(lineDir,lineDir);float t=lenSq==0.0 ? 0.0 : clamp(dot(point-lineA,lineDir)/lenSq,0.0,1.0);vec2 linePt=lineA+t*lineDir;return distance(point,linePt);}void main(){vec4 seg=vLineSegment;vec2 p=vGlyphXY;float dist=absDistToSegment(p,seg.xy,seg.zw);float val=pow(1.0-clamp(dist/uMaxDistance,0.0,1.0),uExponent)*0.5;bool crossing=(seg.y>p.y!=seg.w>p.y)&&(p.x<(seg.z-seg.x)*(p.y-seg.y)/(seg.w-seg.y)+seg.x);bool crossingUp=crossing&&vLineSegment.y<vLineSegment.w;gl_FragColor=vec4(crossingUp ? 1.0/255.0 : 0.0,crossing&&!crossingUp ? 1.0/255.0 : 0.0,0.0,val);}",y="precision highp float;uniform sampler2D tex;varying vec2 vUV;void main(){vec4 color=texture2D(tex,vUV);bool inside=color.r!=color.g;float val=inside ? 1.0-color.a : color.a;gl_FragColor=vec4(val);}",T=new Float32Array([0,0,2,0,0,2]),C=null,L=!1,S={},E=new WeakMap;function Z(z){if(!L&&!B(z))throw new Error("WebGL generation not supported")}function U(z,K,N,W,F,G,H){if(G===void 0&&(G=1),H===void 0&&(H=null),!H&&(H=C,!H)){var ee=typeof OffscreenCanvas=="function"?new OffscreenCanvas(1,1):typeof document<"u"?document.createElement("canvas"):null;if(!ee)throw new Error("OffscreenCanvas or DOM canvas not supported");H=C=ee.getContext("webgl",{depth:!1})}Z(H);var I=new Uint8Array(z*K*4);u(H,function(le){var oe=le.gl,be=le.withTexture,Ee=le.withTextureFramebuffer;be("readable",function(Me,Ae){oe.texImage2D(oe.TEXTURE_2D,0,oe.RGBA,z,K,0,oe.RGBA,oe.UNSIGNED_BYTE,null),Ee(Me,Ae,function(Ie){D(z,K,N,W,F,G,oe,Ie,0,0,0),oe.readPixels(0,0,z,K,oe.RGBA,oe.UNSIGNED_BYTE,I)})})});for(var ie=new Uint8Array(z*K),ue=0,se=0;ue<I.length;ue+=4)ie[se++]=I[ue];return ie}function P(z,K,N,W,F,G,H,ee,I,ie){G===void 0&&(G=1),ee===void 0&&(ee=0),I===void 0&&(I=0),ie===void 0&&(ie=0),D(z,K,N,W,F,G,H,null,ee,I,ie)}function D(z,K,N,W,F,G,H,ee,I,ie,ue){G===void 0&&(G=1),I===void 0&&(I=0),ie===void 0&&(ie=0),ue===void 0&&(ue=0),Z(H);var se=[];r(N,function(le,oe,be,Ee){se.push(le,oe,be,Ee)}),se=new Float32Array(se),u(H,function(le){var oe=le.gl,be=le.isWebGL2,Ee=le.getExtension,Me=le.withProgram,Ae=le.withTexture,Ie=le.withTextureFramebuffer,me=le.handleContextLoss;if(Ae("rawDistances",function(we,Se){(z!==we._lastWidth||K!==we._lastHeight)&&oe.texImage2D(oe.TEXTURE_2D,0,oe.RGBA,we._lastWidth=z,we._lastHeight=K,0,oe.RGBA,oe.UNSIGNED_BYTE,null),Me("main",x,b,function(de){var w=de.setAttribute,M=de.setUniform,V=!be&&Ee("ANGLE_instanced_arrays"),J=!be&&Ee("EXT_blend_minmax");w("aUV",2,oe.STATIC_DRAW,0,T),w("aLineSegment",4,oe.DYNAMIC_DRAW,1,se),M.apply(void 0,["4f","uGlyphBounds"].concat(W)),M("1f","uMaxDistance",F),M("1f","uExponent",G),Ie(we,Se,function(ce){oe.enable(oe.BLEND),oe.colorMask(!0,!0,!0,!0),oe.viewport(0,0,z,K),oe.scissor(0,0,z,K),oe.blendFunc(oe.ONE,oe.ONE),oe.blendEquationSeparate(oe.FUNC_ADD,be?oe.MAX:J.MAX_EXT),oe.clear(oe.COLOR_BUFFER_BIT),be?oe.drawArraysInstanced(oe.TRIANGLES,0,3,se.length/4):V.drawArraysInstancedANGLE(oe.TRIANGLES,0,3,se.length/4)})}),Me("post",s,y,function(de){de.setAttribute("aUV",2,oe.STATIC_DRAW,0,T),de.setUniform("1i","tex",Se),oe.bindFramebuffer(oe.FRAMEBUFFER,ee),oe.disable(oe.BLEND),oe.colorMask(ue===0,ue===1,ue===2,ue===3),oe.viewport(I,ie,z,K),oe.scissor(I,ie,z,K),oe.drawArrays(oe.TRIANGLES,0,3)})}),oe.isContextLost())throw me(),new Error("webgl context lost")})}function B(z){var K=!z||z===C?S:z.canvas||z,N=E.get(K);if(N===void 0){L=!0;var W=null;try{var F=[97,106,97,61,99,137,118,80,80,118,137,99,61,97,106,97],G=U(4,4,"M8,8L16,8L24,24L16,24Z",[0,0,32,32],24,1,z);N=G&&F.length===G.length&&G.every(function(H,ee){return H===F[ee]}),N||(W="bad trial run results",console.info(F,G))}catch(H){N=!1,W=H.message}W&&console.warn("WebGL SDF generation not supported:",W),L=!1,E.set(K,N)}return N}var q=Object.freeze({__proto__:null,generate:U,generateIntoCanvas:P,generateIntoFramebuffer:D,isSupported:B});function re(z,K,N,W,F,G){F===void 0&&(F=Math.max(W[2]-W[0],W[3]-W[1])/2),G===void 0&&(G=1);try{return U.apply(q,arguments)}catch(H){return console.info("WebGL SDF generation failed, falling back to JS",H),g.apply(v,arguments)}}function $(z,K,N,W,F,G,H,ee,I,ie){F===void 0&&(F=Math.max(W[2]-W[0],W[3]-W[1])/2),G===void 0&&(G=1),ee===void 0&&(ee=0),I===void 0&&(I=0),ie===void 0&&(ie=0);try{return P.apply(q,arguments)}catch(ue){return console.info("WebGL SDF generation failed, falling back to JS",ue),_.apply(v,arguments)}}return e.forEachPathCommand=i,e.generate=re,e.generateIntoCanvas=$,e.javascript=v,e.pathToLineSegments=r,e.webgl=q,e.webglUtils=p,Object.defineProperty(e,"__esModule",{value:!0}),e}({});return o}function T_(){var o=function(e){var t={R:"13k,1a,2,3,3,2+1j,ch+16,a+1,5+2,2+n,5,a,4,6+16,4+3,h+1b,4mo,179q,2+9,2+11,2i9+7y,2+68,4,3+4,5+13,4+3,2+4k,3+29,8+cf,1t+7z,w+17,3+3m,1t+3z,16o1+5r,8+30,8+mc,29+1r,29+4v,75+73",EN:"1c+9,3d+1,6,187+9,513,4+5,7+9,sf+j,175h+9,qw+q,161f+1d,4xt+a,25i+9",ES:"17,2,6dp+1,f+1,av,16vr,mx+1,4o,2",ET:"z+2,3h+3,b+1,ym,3e+1,2o,p4+1,8,6u,7c,g6,1wc,1n9+4,30+1b,2n,6d,qhx+1,h0m,a+1,49+2,63+1,4+1,6bb+3,12jj",AN:"16o+5,2j+9,2+1,35,ed,1ff2+9,87+u",CS:"18,2+1,b,2u,12k,55v,l,17v0,2,3,53,2+1,b",B:"a,3,f+2,2v,690",S:"9,2,k",WS:"c,k,4f4,1vk+a,u,1j,335",ON:"x+1,4+4,h+5,r+5,r+3,z,5+3,2+1,2+1,5,2+2,3+4,o,w,ci+1,8+d,3+d,6+8,2+g,39+1,9,6+1,2,33,b8,3+1,3c+1,7+1,5r,b,7h+3,sa+5,2,3i+6,jg+3,ur+9,2v,ij+1,9g+9,7+a,8m,4+1,49+x,14u,2+2,c+2,e+2,e+2,e+1,i+n,e+e,2+p,u+2,e+2,36+1,2+3,2+1,b,2+2,6+5,2,2,2,h+1,5+4,6+3,3+f,16+2,5+3l,3+81,1y+p,2+40,q+a,m+13,2r+ch,2+9e,75+hf,3+v,2+2w,6e+5,f+6,75+2a,1a+p,2+2g,d+5x,r+b,6+3,4+o,g,6+1,6+2,2k+1,4,2j,5h+z,1m+1,1e+f,t+2,1f+e,d+3,4o+3,2s+1,w,535+1r,h3l+1i,93+2,2s,b+1,3l+x,2v,4g+3,21+3,kz+1,g5v+1,5a,j+9,n+v,2,3,2+8,2+1,3+2,2,3,46+1,4+4,h+5,r+5,r+a,3h+2,4+6,b+4,78,1r+24,4+c,4,1hb,ey+6,103+j,16j+c,1ux+7,5+g,fsh,jdq+1t,4,57+2e,p1,1m,1m,1m,1m,4kt+1,7j+17,5+2r,d+e,3+e,2+e,2+10,m+4,w,1n+5,1q,4z+5,4b+rb,9+c,4+c,4+37,d+2g,8+b,l+b,5+1j,9+9,7+13,9+t,3+1,27+3c,2+29,2+3q,d+d,3+4,4+2,6+6,a+o,8+6,a+2,e+6,16+42,2+1i",BN:"0+8,6+d,2s+5,2+p,e,4m9,1kt+2,2b+5,5+5,17q9+v,7k,6p+8,6+1,119d+3,440+7,96s+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+75,6p+2rz,1ben+1,1ekf+1,1ekf+1",NSM:"lc+33,7o+6,7c+18,2,2+1,2+1,2,21+a,1d+k,h,2u+6,3+5,3+1,2+3,10,v+q,2k+a,1n+8,a,p+3,2+8,2+2,2+4,18+2,3c+e,2+v,1k,2,5+7,5,4+6,b+1,u,1n,5+3,9,l+1,r,3+1,1m,5+1,5+1,3+2,4,v+1,4,c+1,1m,5+4,2+1,5,l+1,n+5,2,1n,3,2+3,9,8+1,c+1,v,1q,d,1f,4,1m+2,6+2,2+3,8+1,c+1,u,1n,g+1,l+1,t+1,1m+1,5+3,9,l+1,u,21,8+2,2,2j,3+6,d+7,2r,3+8,c+5,23+1,s,2,2,1k+d,2+4,2+1,6+a,2+z,a,2v+3,2+5,2+1,3+1,q+1,5+2,h+3,e,3+1,7,g,jk+2,qb+2,u+2,u+1,v+1,1t+1,2+6,9,3+a,a,1a+2,3c+1,z,3b+2,5+1,a,7+2,64+1,3,1n,2+6,2,2,3+7,7+9,3,1d+g,1s+3,1d,2+4,2,6,15+8,d+1,x+3,3+1,2+2,1l,2+1,4,2+2,1n+7,3+1,49+2,2+c,2+6,5,7,4+1,5j+1l,2+4,k1+w,2db+2,3y,2p+v,ff+3,30+1,n9x+3,2+9,x+1,29+1,7l,4,5,q+1,6,48+1,r+h,e,13+7,q+a,1b+2,1d,3+3,3+1,14,1w+5,3+1,3+1,d,9,1c,1g,2+2,3+1,6+1,2,17+1,9,6n,3,5,fn5,ki+f,h+f,r2,6b,46+4,1af+2,2+1,6+3,15+2,5,4m+1,fy+3,as+1,4a+a,4x,1j+e,1l+2,1e+3,3+1,1y+2,11+4,2+7,1r,d+1,1h+8,b+3,3,2o+2,3,2+1,7,4h,4+7,m+1,1m+1,4,12+6,4+4,5g+7,3+2,2,o,2d+5,2,5+1,2+1,6n+3,7+1,2+1,s+1,2e+7,3,2+1,2z,2,3+5,2,2u+2,3+3,2+4,78+8,2+1,75+1,2,5,41+3,3+1,5,x+5,3+1,15+5,3+3,9,a+5,3+2,1b+c,2+1,bb+6,2+5,2d+l,3+6,2+1,2+1,3f+5,4,2+1,2+6,2,21+1,4,2,9o+1,f0c+4,1o+6,t5,1s+3,2a,f5l+1,43t+2,i+7,3+6,v+3,45+2,1j0+1i,5+1d,9,f,n+4,2+e,11t+6,2+g,3+6,2+1,2+4,7a+6,c6+3,15t+6,32+6,gzhy+6n",AL:"16w,3,2,e+1b,z+2,2+2s,g+1,8+1,b+m,2+t,s+2i,c+e,4h+f,1d+1e,1bwe+dp,3+3z,x+c,2+1,35+3y,2rm+z,5+7,b+5,dt+l,c+u,17nl+27,1t+27,4x+6n,3+d",LRO:"6ct",RLO:"6cu",LRE:"6cq",RLE:"6cr",PDF:"6cs",LRI:"6ee",RLI:"6ef",FSI:"6eg",PDI:"6eh"},n={},i={};n.L=1,i[1]="L",Object.keys(t).forEach(function(me,we){n[me]=1<<we+1,i[n[me]]=me}),Object.freeze(n);var r=n.LRI|n.RLI|n.FSI,s=n.L|n.R|n.AL,a=n.B|n.S|n.WS|n.ON|n.FSI|n.LRI|n.RLI|n.PDI,l=n.BN|n.RLE|n.LRE|n.RLO|n.LRO|n.PDF,c=n.S|n.WS|n.B|r|n.PDI|l,u=null;function h(){if(!u){u=new Map;var me=function(Se){if(t.hasOwnProperty(Se)){var de=0;t[Se].split(",").forEach(function(w){var M=w.split("+"),V=M[0],J=M[1];V=parseInt(V,36),J=J?parseInt(J,36):0,u.set(de+=V,n[Se]);for(var ce=0;ce<J;ce++)u.set(++de,n[Se])})}};for(var we in t)me(we)}}function d(me){return h(),u.get(me.codePointAt(0))||n.L}function p(me){return i[d(me)]}var g={pairs:"14>1,1e>2,u>2,2wt>1,1>1,1ge>1,1wp>1,1j>1,f>1,hm>1,1>1,u>1,u6>1,1>1,+5,28>1,w>1,1>1,+3,b8>1,1>1,+3,1>3,-1>-1,3>1,1>1,+2,1s>1,1>1,x>1,th>1,1>1,+2,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,4q>1,1e>2,u>2,2>1,+1",canonical:"6f1>-6dx,6dy>-6dx,6ec>-6ed,6ee>-6ed,6ww>2jj,-2ji>2jj,14r4>-1e7l,1e7m>-1e7l,1e7m>-1e5c,1e5d>-1e5b,1e5c>-14qx,14qy>-14qx,14vn>-1ecg,1ech>-1ecg,1edu>-1ecg,1eci>-1ecg,1eda>-1ecg,1eci>-1ecg,1eci>-168q,168r>-168q,168s>-14ye,14yf>-14ye"};function _(me,we){var Se=36,de=0,w=new Map,M=we&&new Map,V;return me.split(",").forEach(function J(ce){if(ce.indexOf("+")!==-1)for(var fe=+ce;fe--;)J(V);else{V=ce;var R=ce.split(">"),Q=R[0],j=R[1];Q=String.fromCodePoint(de+=parseInt(Q,Se)),j=String.fromCodePoint(de+=parseInt(j,Se)),w.set(Q,j),we&&M.set(j,Q)}}),{map:w,reverseMap:M}}var m,f,v;function x(){if(!m){var me=_(g.pairs,!0),we=me.map,Se=me.reverseMap;m=we,f=Se,v=_(g.canonical,!1).map}}function b(me){return x(),m.get(me)||null}function y(me){return x(),f.get(me)||null}function T(me){return x(),v.get(me)||null}var C=n.L,L=n.R,S=n.EN,E=n.ES,Z=n.ET,U=n.AN,P=n.CS,D=n.B,B=n.S,q=n.ON,re=n.BN,$=n.NSM,z=n.AL,K=n.LRO,N=n.RLO,W=n.LRE,F=n.RLE,G=n.PDF,H=n.LRI,ee=n.RLI,I=n.FSI,ie=n.PDI;function ue(me,we){for(var Se=125,de=new Uint32Array(me.length),w=0;w<me.length;w++)de[w]=d(me[w]);var M=new Map;function V(Pt,rn){var Vt=de[Pt];de[Pt]=rn,M.set(Vt,M.get(Vt)-1),Vt&a&&M.set(a,M.get(a)-1),M.set(rn,(M.get(rn)||0)+1),rn&a&&M.set(a,(M.get(a)||0)+1)}for(var J=new Uint8Array(me.length),ce=new Map,fe=[],R=null,Q=0;Q<me.length;Q++)R||fe.push(R={start:Q,end:me.length-1,level:we==="rtl"?1:we==="ltr"?0:il(Q,!1)}),de[Q]&D&&(R.end=Q,R=null);for(var j=F|W|N|K|r|ie|G|D,ye=function(Pt){return Pt+(Pt&1?1:2)},ge=function(Pt){return Pt+(Pt&1?2:1)},Te=0;Te<fe.length;Te++){R=fe[Te];var pe=[{_level:R.level,_override:0,_isolate:0}],_e=void 0,Re=0,Pe=0,ze=0;M.clear();for(var O=R.start;O<=R.end;O++){var te=de[O];if(_e=pe[pe.length-1],M.set(te,(M.get(te)||0)+1),te&a&&M.set(a,(M.get(a)||0)+1),te&j)if(te&(F|W)){J[O]=_e._level;var he=(te===F?ge:ye)(_e._level);he<=Se&&!Re&&!Pe?pe.push({_level:he,_override:0,_isolate:0}):Re||Pe++}else if(te&(N|K)){J[O]=_e._level;var Ce=(te===N?ge:ye)(_e._level);Ce<=Se&&!Re&&!Pe?pe.push({_level:Ce,_override:te&N?L:C,_isolate:0}):Re||Pe++}else if(te&r){te&I&&(te=il(O+1,!0)===1?ee:H),J[O]=_e._level,_e._override&&V(O,_e._override);var Ue=(te===ee?ge:ye)(_e._level);Ue<=Se&&Re===0&&Pe===0?(ze++,pe.push({_level:Ue,_override:0,_isolate:1,_isolInitIndex:O})):Re++}else if(te&ie){if(Re>0)Re--;else if(ze>0){for(Pe=0;!pe[pe.length-1]._isolate;)pe.pop();var Ze=pe[pe.length-1]._isolInitIndex;Ze!=null&&(ce.set(Ze,O),ce.set(O,Ze)),pe.pop(),ze--}_e=pe[pe.length-1],J[O]=_e._level,_e._override&&V(O,_e._override)}else te&G?(Re===0&&(Pe>0?Pe--:!_e._isolate&&pe.length>1&&(pe.pop(),_e=pe[pe.length-1])),J[O]=_e._level):te&D&&(J[O]=R.level);else J[O]=_e._level,_e._override&&te!==re&&V(O,_e._override)}for(var Ye=[],it=null,tt=R.start;tt<=R.end;tt++){var ot=de[tt];if(!(ot&l)){var $e=J[tt],Qe=ot&r,Ct=ot===ie;it&&$e===it._level?(it._end=tt,it._endsWithIsolInit=Qe):Ye.push(it={_start:tt,_end:tt,_level:$e,_startsWithPDI:Ct,_endsWithIsolInit:Qe})}}for(var Lt=[],rt=0;rt<Ye.length;rt++){var gt=Ye[rt];if(!gt._startsWithPDI||gt._startsWithPDI&&!ce.has(gt._start)){for(var zt=[it=gt],A=void 0;it&&it._endsWithIsolInit&&(A=ce.get(it._end))!=null;)for(var X=rt+1;X<Ye.length;X++)if(Ye[X]._start===A){zt.push(it=Ye[X]);break}for(var ne=[],Y=0;Y<zt.length;Y++)for(var ae=zt[Y],Oe=ae._start;Oe<=ae._end;Oe++)ne.push(Oe);for(var ke=J[ne[0]],Be=R.level,Ge=ne[0]-1;Ge>=0;Ge--)if(!(de[Ge]&l)){Be=J[Ge];break}var Ve=ne[ne.length-1],We=J[Ve],je=R.level;if(!(de[Ve]&r)){for(var et=Ve+1;et<=R.end;et++)if(!(de[et]&l)){je=J[et];break}}Lt.push({_seqIndices:ne,_sosType:Math.max(Be,ke)%2?L:C,_eosType:Math.max(je,We)%2?L:C})}}for(var _t=0;_t<Lt.length;_t++){var Ft=Lt[_t],De=Ft._seqIndices,ct=Ft._sosType,qe=Ft._eosType;if(M.get($))for(var Dn=0;Dn<De.length;Dn++){var ht=De[Dn];if(de[ht]&$){for(var tn=ct,Wn=Dn-1;Wn>=0;Wn--)if(!(de[De[Wn]]&l)){tn=de[De[Wn]];break}V(ht,tn&(r|ie)?q:tn)}}if(M.get(S))for(var un=0;un<De.length;un++){var ui=De[un];if(de[ui]&S)for(var dt=un-1;dt>=-1;dt--){var hn=dt===-1?ct:de[De[dt]];if(hn&s){hn===z&&V(ui,U);break}}}if(M.get(z))for(var jn=0;jn<De.length;jn++){var Rt=De[jn];de[Rt]&z&&V(Rt,L)}if(M.get(E)||M.get(P))for(var yn=1;yn<De.length-1;yn++){var sr=De[yn];if(de[sr]&(E|P)){for(var bn=0,sa=0,aa=yn-1;aa>=0&&(bn=de[De[aa]],!!(bn&l));aa--);for(var oa=yn+1;oa<De.length&&(sa=de[De[oa]],!!(sa&l));oa++);bn===sa&&(de[sr]===E?bn===S:bn&(S|U))&&V(sr,bn)}}if(M.get(S))for(var ar=0;ar<De.length;ar++){var Mh=De[ar];if(de[Mh]&S){for(var qr=ar-1;qr>=0&&de[De[qr]]&(Z|l);qr--)V(De[qr],S);for(var Kr=ar+1;Kr<De.length&&de[De[Kr]]&(Z|l);Kr++)V(De[Kr],S)}}if(M.get(Z)||M.get(E)||M.get(P))for(var or=0;or<De.length;or++){var Xo=De[or];if(de[Xo]&(Z|E|P)){V(Xo,q);for(var Zr=or-1;Zr>=0&&de[De[Zr]]&l;Zr--)V(De[Zr],q);for(var $r=or+1;$r<De.length&&de[De[$r]]&l;$r++)V(De[$r],q)}}if(M.get(S))for(var la=0,Yo=ct;la<De.length;la++){var qo=De[la],ca=de[qo];ca&S?Yo===C&&V(qo,C):ca&s&&(Yo=ca)}if(M.get(a)){var lr=L|S|U,Ko=lr|C,Jr=[];{for(var hi=[],di=0;di<De.length;di++)if(de[De[di]]&a){var cr=me[De[di]],Zo=void 0;if(b(cr)!==null)if(hi.length<63)hi.push({char:cr,seqIndex:di});else break;else if((Zo=y(cr))!==null)for(var ur=hi.length-1;ur>=0;ur--){var ua=hi[ur].char;if(ua===Zo||ua===y(T(cr))||b(T(ua))===cr){Jr.push([hi[ur].seqIndex,di]),hi.length=ur;break}}}Jr.sort(function(Pt,rn){return Pt[0]-rn[0]})}for(var ha=0;ha<Jr.length;ha++){for(var $o=Jr[ha],hr=$o[0],Qr=$o[1],Jo=!1,nn=0,da=hr+1;da<Qr;da++){var fa=De[da];if(de[fa]&Ko){Jo=!0;var Qo=de[fa]&lr?L:C;if(Qo===fi(fa)){nn=Qo;break}}}if(Jo&&!nn){nn=ct;for(var pa=hr-1;pa>=0;pa--){var es=De[pa];if(de[es]&Ko){var el=de[es]&lr?L:C;el!==fi(es)?nn=el:nn=fi(es);break}}}if(nn){if(de[De[hr]]=de[De[Qr]]=nn,nn!==fi(De[hr])){for(var dr=hr+1;dr<De.length;dr++)if(!(de[De[dr]]&l)){d(me[De[dr]])&$&&(de[De[dr]]=nn);break}}if(nn!==fi(De[Qr])){for(var fr=Qr+1;fr<De.length;fr++)if(!(de[De[fr]]&l)){d(me[De[fr]])&$&&(de[De[fr]]=nn);break}}}}for(var In=0;In<De.length;In++)if(de[De[In]]&a){for(var tl=In,ma=In,ga=ct,pr=In-1;pr>=0;pr--)if(de[De[pr]]&l)tl=pr;else{ga=de[De[pr]]&lr?L:C;break}for(var nl=qe,mr=In+1;mr<De.length;mr++)if(de[De[mr]]&(a|l))ma=mr;else{nl=de[De[mr]]&lr?L:C;break}for(var ts=tl;ts<=ma;ts++)de[De[ts]]=ga===nl?ga:fi(De[ts]);In=ma}}}for(var Ht=R.start;Ht<=R.end;Ht++){var Sh=J[Ht],ns=de[Ht];if(Sh&1?ns&(C|S|U)&&J[Ht]++:ns&L?J[Ht]++:ns&(U|S)&&(J[Ht]+=2),ns&l&&(J[Ht]=Ht===0?R.level:J[Ht-1]),Ht===R.end||d(me[Ht])&(B|D))for(var is=Ht;is>=0&&d(me[is])&c;is--)J[is]=R.level}}return{levels:J,paragraphs:fe};function il(Pt,rn){for(var Vt=Pt;Vt<me.length;Vt++){var Un=de[Vt];if(Un&(L|z))return 1;if(Un&(D|C)||rn&&Un===ie)return 0;if(Un&r){var rl=wh(Vt);Vt=rl===-1?me.length:rl}}return 0}function wh(Pt){for(var rn=1,Vt=Pt+1;Vt<me.length;Vt++){var Un=de[Vt];if(Un&D)break;if(Un&ie){if(--rn===0)return Vt}else Un&r&&rn++}return-1}function fi(Pt){return J[Pt]&1?L:C}}var se="14>1,j>2,t>2,u>2,1a>g,2v3>1,1>1,1ge>1,1wd>1,b>1,1j>1,f>1,ai>3,-2>3,+1,8>1k0,-1jq>1y7,-1y6>1hf,-1he>1h6,-1h5>1ha,-1h8>1qi,-1pu>1,6>3u,-3s>7,6>1,1>1,f>1,1>1,+2,3>1,1>1,+13,4>1,1>1,6>1eo,-1ee>1,3>1mg,-1me>1mk,-1mj>1mi,-1mg>1mi,-1md>1,1>1,+2,1>10k,-103>1,1>1,4>1,5>1,1>1,+10,3>1,1>8,-7>8,+1,-6>7,+1,a>1,1>1,u>1,u6>1,1>1,+5,26>1,1>1,2>1,2>2,8>1,7>1,4>1,1>1,+5,b8>1,1>1,+3,1>3,-2>1,2>1,1>1,+2,c>1,3>1,1>1,+2,h>1,3>1,a>1,1>1,2>1,3>1,1>1,d>1,f>1,3>1,1a>1,1>1,6>1,7>1,13>1,k>1,1>1,+19,4>1,1>1,+2,2>1,1>1,+18,m>1,a>1,1>1,lk>1,1>1,4>1,2>1,f>1,3>1,1>1,+3,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,6>1,4j>1,j>2,t>2,u>2,2>1,+1",le;function oe(){if(!le){var me=_(se,!0),we=me.map,Se=me.reverseMap;Se.forEach(function(de,w){we.set(w,de)}),le=we}}function be(me){return oe(),le.get(me)||null}function Ee(me,we,Se,de){var w=me.length;Se=Math.max(0,Se==null?0:+Se),de=Math.min(w-1,de==null?w-1:+de);for(var M=new Map,V=Se;V<=de;V++)if(we[V]&1){var J=be(me[V]);J!==null&&M.set(V,J)}return M}function Me(me,we,Se,de){var w=me.length;Se=Math.max(0,Se==null?0:+Se),de=Math.min(w-1,de==null?w-1:+de);var M=[];return we.paragraphs.forEach(function(V){var J=Math.max(Se,V.start),ce=Math.min(de,V.end);if(J<ce){for(var fe=we.levels.slice(J,ce+1),R=ce;R>=J&&d(me[R])&c;R--)fe[R]=V.level;for(var Q=V.level,j=1/0,ye=0;ye<fe.length;ye++){var ge=fe[ye];ge>Q&&(Q=ge),ge<j&&(j=ge|1)}for(var Te=Q;Te>=j;Te--)for(var pe=0;pe<fe.length;pe++)if(fe[pe]>=Te){for(var _e=pe;pe+1<fe.length&&fe[pe+1]>=Te;)pe++;pe>_e&&M.push([_e+Se,pe+Se])}}}),M}function Ae(me,we,Se,de){var w=Ie(me,we,Se,de),M=[].concat(me);return w.forEach(function(V,J){M[J]=(we.levels[V]&1?be(me[V]):null)||me[V]}),M.join("")}function Ie(me,we,Se,de){for(var w=Me(me,we,Se,de),M=[],V=0;V<me.length;V++)M[V]=V;return w.forEach(function(J){for(var ce=J[0],fe=J[1],R=M.slice(ce,fe+1),Q=R.length;Q--;)M[fe-Q]=R[Q]}),M}return e.closingToOpeningBracket=y,e.getBidiCharType=d,e.getBidiCharTypeName=p,e.getCanonicalBracket=T,e.getEmbeddingLevels=ue,e.getMirroredCharacter=be,e.getMirroredCharactersMap=Ee,e.getReorderSegments=Me,e.getReorderedIndices=Ie,e.getReorderedString=Ae,e.openingToClosingBracket=b,Object.defineProperty(e,"__esModule",{value:!0}),e}({});return o}const uh=/\bvoid\s+main\s*\(\s*\)\s*{/g;function xo(o){const e=/^[ \t]*#include +<([\w\d./]+)>/gm;function t(n,i){let r=He[i];return r?xo(r):n}return o.replace(e,t)}const Tt=[];for(let o=0;o<256;o++)Tt[o]=(o<16?"0":"")+o.toString(16);function A_(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Tt[o&255]+Tt[o>>8&255]+Tt[o>>16&255]+Tt[o>>24&255]+"-"+Tt[e&255]+Tt[e>>8&255]+"-"+Tt[e>>16&15|64]+Tt[e>>24&255]+"-"+Tt[t&63|128]+Tt[t>>8&255]+"-"+Tt[t>>16&255]+Tt[t>>24&255]+Tt[n&255]+Tt[n>>8&255]+Tt[n>>16&255]+Tt[n>>24&255]).toUpperCase()}const Kn=Object.assign||function(){let o=arguments[0];for(let e=1,t=arguments.length;e<t;e++){let n=arguments[e];if(n)for(let i in n)n.hasOwnProperty(i)&&(o[i]=n[i])}return o},E_=Date.now(),Wc=new WeakMap,jc=new Map;let C_=1e10;function yo(o,e){const t=D_(e);let n=Wc.get(o);if(n||Wc.set(o,n=Object.create(null)),n[t])return new n[t];const i=`_onBeforeCompile${t}`,r=function(c){o.onBeforeCompile.call(this,c);const u=this.customProgramCacheKey()+"|"+c.vertexShader+"|"+c.fragmentShader;let h=jc[u];if(!h){const d=L_(c,e,t);h=jc[u]=d}c.vertexShader=h.vertexShader,c.fragmentShader=h.fragmentShader,Kn(c.uniforms,this.uniforms),e.timeUniform&&(c.uniforms[e.timeUniform]={get value(){return Date.now()-E_}}),this[i]&&this[i](c)},s=function(){return a(e.chained?o:o.clone())},a=function(c){const u=Object.create(c,l);return Object.defineProperty(u,"baseMaterial",{value:o}),Object.defineProperty(u,"id",{value:C_++}),u.uuid=A_(),u.uniforms=Kn({},c.uniforms,e.uniforms),u.defines=Kn({},c.defines,e.defines),u.defines[`TROIKA_DERIVED_MATERIAL_${t}`]="",u.extensions=Kn({},c.extensions,e.extensions),u._listeners=void 0,u},l={constructor:{value:s},isDerivedMaterial:{value:!0},customProgramCacheKey:{writable:!0,configurable:!0,value:function(){return o.customProgramCacheKey()+"|"+t}},onBeforeCompile:{get(){return r},set(c){this[i]=c}},copy:{writable:!0,configurable:!0,value:function(c){return o.copy.call(this,c),!o.isShaderMaterial&&!o.isDerivedMaterial&&(Kn(this.extensions,c.extensions),Kn(this.defines,c.defines),Kn(this.uniforms,Bu.clone(c.uniforms))),this}},clone:{writable:!0,configurable:!0,value:function(){const c=new o.constructor;return a(c).copy(this)}},getDepthMaterial:{writable:!0,configurable:!0,value:function(){let c=this._depthMaterial;return c||(c=this._depthMaterial=yo(o.isDerivedMaterial?o.getDepthMaterial():new Yu({depthPacking:Eu}),e),c.defines.IS_DEPTH_MATERIAL="",c.uniforms=this.uniforms),c}},getDistanceMaterial:{writable:!0,configurable:!0,value:function(){let c=this._distanceMaterial;return c||(c=this._distanceMaterial=yo(o.isDerivedMaterial?o.getDistanceMaterial():new qu,e),c.defines.IS_DISTANCE_MATERIAL="",c.uniforms=this.uniforms),c}},dispose:{writable:!0,configurable:!0,value(){const{_depthMaterial:c,_distanceMaterial:u}=this;c&&c.dispose(),u&&u.dispose(),o.dispose.call(this)}}};return n[t]=s,new s}function L_({vertexShader:o,fragmentShader:e},t,n){let{vertexDefs:i,vertexMainIntro:r,vertexMainOutro:s,vertexTransform:a,fragmentDefs:l,fragmentMainIntro:c,fragmentMainOutro:u,fragmentColorTransform:h,customRewriter:d,timeUniform:p}=t;if(i=i||"",r=r||"",s=s||"",l=l||"",c=c||"",u=u||"",(a||d)&&(o=xo(o)),(h||d)&&(e=e.replace(/^[ \t]*#include <((?:tonemapping|encodings|fog|premultiplied_alpha|dithering)_fragment)>/gm,`
//!BEGIN_POST_CHUNK $1
$&
//!END_POST_CHUNK
`),e=xo(e)),d){let g=d({vertexShader:o,fragmentShader:e});o=g.vertexShader,e=g.fragmentShader}if(h){let g=[];e=e.replace(/^\/\/!BEGIN_POST_CHUNK[^]+?^\/\/!END_POST_CHUNK/gm,_=>(g.push(_),"")),u=`${h}
${g.join(`
`)}
${u}`}if(p){const g=`
uniform float ${p};
`;i=g+i,l=g+l}return a&&(o=`vec3 troika_position_${n};
vec3 troika_normal_${n};
vec2 troika_uv_${n};
${o}
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
`,o=o.replace(/\b(position|normal|uv)\b/g,(g,_,m,f)=>/\battribute\s+vec[23]\s+$/.test(f.substr(0,m))?_:`troika_${_}_${n}`)),o=Xc(o,n,i,r,s),e=Xc(e,n,l,c,u),{vertexShader:o,fragmentShader:e}}function Xc(o,e,t,n,i){return(n||i||t)&&(o=o.replace(uh,`
${t}
void troikaOrigMain${e}() {`),o+=`
void main() {
  ${n}
  troikaOrigMain${e}();
  ${i}
}`),o}function R_(o,e){return o==="uniforms"?void 0:typeof e=="function"?e.toString():e}let P_=0;const Yc=new Map;function D_(o){const e=JSON.stringify(o,R_);let t=Yc.get(e);return t==null&&Yc.set(e,t=++P_),t}function I_(o,e,t){const{defaultFontURL:n}=t,i=Object.create(null),r=1/0,s=/[\u00AD\u034F\u061C\u115F-\u1160\u17B4-\u17B5\u180B-\u180E\u200B-\u200F\u202A-\u202E\u2060-\u206F\u3164\uFE00-\uFE0F\uFEFF\uFFA0\uFFF0-\uFFF8]/,a="[^\\S\\u00A0]",l=new RegExp(`${a}|[\\-\\u007C\\u00AD\\u2010\\u2012-\\u2014\\u2027\\u2056\\u2E17\\u2E40]`);function c(v,x){function b(){const y=T=>{console.error(`Failure loading font ${v}${v===n?"":"; trying fallback"}`,T),v!==n&&(v=n,b())};try{const T=new XMLHttpRequest;T.open("get",v,!0),T.responseType="arraybuffer",T.onload=function(){if(T.status>=400)y(new Error(T.statusText));else if(T.status>0)try{const C=o(T.response);x(C)}catch(C){y(C)}},T.onerror=y,T.send()}catch(T){y(T)}}b()}function u(v,x){v||(v=n);let b=i[v];b?b.pending?b.pending.push(x):x(b):(i[v]={pending:[x]},c(v,y=>{let T=i[v].pending;i[v]=y,T.forEach(C=>C(y))}))}function h({text:v="",font:x=n,sdfGlyphSize:b=64,fontSize:y=1,letterSpacing:T=0,lineHeight:C="normal",maxWidth:L=r,direction:S,textAlign:E="left",textIndent:Z=0,whiteSpace:U="normal",overflowWrap:P="normal",anchorX:D=0,anchorY:B=0,includeCaretPositions:q=!1,chunkedBoundsSize:re=8192,colorRanges:$=null},z,K=!1){const N=_(),W={fontLoad:0,typesetting:0};v.indexOf("\r")>-1&&(console.info("Typesetter: got text with \\r chars; normalizing to \\n"),v=v.replace(/\r\n/g,`
`).replace(/\r/g,`
`)),y=+y,T=+T,L=+L,C=C||"normal",Z=+Z,u(x,F=>{const G=isFinite(L);let H=null,ee=null,I=null,ie=null,ue=null,se=null,le=null,oe=0,be=0,Ee=U!=="nowrap";const{ascender:Me,descender:Ae,unitsPerEm:Ie,lineGap:me,capHeight:we,xHeight:Se}=F;W.fontLoad=_()-N;const de=_(),w=y/Ie;C==="normal"&&(C=(Me-Ae+me)/Ie),C=C*y;const M=(C-(Me-Ae)*w)/2,V=-(Me*w+M),J=Math.min(C,(Me-Ae)*w),ce=(Me+Ae)/2*w-J/2;let fe=Z,R=new m;const Q=[R];F.forEachGlyph(v,y,T,(ge,Te,pe)=>{const _e=v.charAt(pe),Re=ge.advanceWidth*w,Pe=R.count;let ze;if("isEmpty"in ge||(ge.isWhitespace=!!_e&&new RegExp(a).test(_e),ge.canBreakAfter=!!_e&&l.test(_e),ge.isEmpty=ge.xMin===ge.xMax||ge.yMin===ge.yMax||s.test(_e)),!ge.isWhitespace&&!ge.isEmpty&&be++,Ee&&G&&!ge.isWhitespace&&Te+Re+fe>L&&Pe){if(R.glyphAt(Pe-1).glyphObj.canBreakAfter)ze=new m,fe=-Te;else for(let te=Pe;te--;)if(te===0&&P==="break-word"){ze=new m,fe=-Te;break}else if(R.glyphAt(te).glyphObj.canBreakAfter){ze=R.splitAt(te+1);const he=ze.glyphAt(0).x;fe-=he;for(let Ce=ze.count;Ce--;)ze.glyphAt(Ce).x-=he;break}ze&&(R.isSoftWrapped=!0,R=ze,Q.push(R),oe=L)}let O=R.glyphAt(R.count);O.glyphObj=ge,O.x=Te+fe,O.width=Re,O.charIndex=pe,_e===`
`&&(R=new m,Q.push(R),fe=-(Te+Re+T*y)+Z)}),Q.forEach(ge=>{for(let Te=ge.count;Te--;){let{glyphObj:pe,x:_e,width:Re}=ge.glyphAt(Te);if(!pe.isWhitespace){ge.width=_e+Re,ge.width>oe&&(oe=ge.width);return}}});let j=0,ye=0;if(D&&(typeof D=="number"?j=-D:typeof D=="string"&&(j=-oe*(D==="left"?0:D==="center"?.5:D==="right"?1:p(D)))),B){if(typeof B=="number")ye=-B;else if(typeof B=="string"){let ge=Q.length*C;ye=B==="top"?0:B==="top-baseline"?-V:B==="top-cap"?-V-we*w:B==="top-ex"?-V-Se*w:B==="middle"?ge/2:B==="bottom"?ge:B==="bottom-baseline"?ge-M+Ae*w:p(B)*ge}}if(!K){const ge=e.getEmbeddingLevels(v,S);H=new Uint16Array(be),ee=new Float32Array(be*2),I={},se=[r,r,-r,-r],le=[];let Te=V;q&&(ue=new Float32Array(v.length*3)),$&&(ie=new Uint8Array(be*3));let pe=0,_e=-1,Re=-1,Pe,ze;if(Q.forEach((O,te)=>{let{count:he,width:Ce}=O;if(he>0){let Ue=0;for(let $e=he;$e--&&O.glyphAt($e).glyphObj.isWhitespace;)Ue++;let Ze=0,Ye=0;if(E==="center")Ze=(oe-Ce)/2;else if(E==="right")Ze=oe-Ce;else if(E==="justify"&&O.isSoftWrapped){let $e=0;for(let Qe=he-Ue;Qe--;)O.glyphAt(Qe).glyphObj.isWhitespace&&$e++;Ye=(oe-Ce)/$e}if(Ye||Ze){let $e=0;for(let Qe=0;Qe<he;Qe++){let Ct=O.glyphAt(Qe);const Lt=Ct.glyphObj;Ct.x+=Ze+$e,Ye!==0&&Lt.isWhitespace&&Qe<he-Ue&&($e+=Ye,Ct.width+=Ye)}}const it=e.getReorderSegments(v,ge,O.glyphAt(0).charIndex,O.glyphAt(O.count-1).charIndex);for(let $e=0;$e<it.length;$e++){const[Qe,Ct]=it[$e];let Lt=1/0,rt=-1/0;for(let gt=0;gt<he;gt++)if(O.glyphAt(gt).charIndex>=Qe){let zt=gt,A=gt;for(;A<he;A++){let X=O.glyphAt(A);if(X.charIndex>Ct)break;A<he-Ue&&(Lt=Math.min(Lt,X.x),rt=Math.max(rt,X.x+X.width))}for(let X=zt;X<A;X++){const ne=O.glyphAt(X);ne.x=rt-(ne.x+ne.width-Lt)}break}}let tt;const ot=$e=>tt=$e;for(let $e=0;$e<he;$e++){let Qe=O.glyphAt($e);tt=Qe.glyphObj;const Ct=tt.index,Lt=ge.levels[Qe.charIndex]&1;if(Lt){const rt=e.getMirroredCharacter(v[Qe.charIndex]);rt&&F.forEachGlyph(rt,0,0,ot)}if(q){const{charIndex:rt}=Qe,gt=Qe.x+j,zt=Qe.x+Qe.width+j;ue[rt*3]=Lt?zt:gt,ue[rt*3+1]=Lt?gt:zt,ue[rt*3+2]=Te+ce+ye;const A=rt-_e;A>1&&g(ue,_e,A),_e=rt}if($){const{charIndex:rt}=Qe;for(;rt>Re;)Re++,$.hasOwnProperty(Re)&&(ze=$[Re])}if(!tt.isWhitespace&&!tt.isEmpty){const rt=pe++;I[Ct]||(I[Ct]={path:tt.path,pathBounds:[tt.xMin,tt.yMin,tt.xMax,tt.yMax]});const gt=Qe.x+j,zt=Te+ye;ee[rt*2]=gt,ee[rt*2+1]=zt;const A=gt+tt.xMin*w,X=zt+tt.yMin*w,ne=gt+tt.xMax*w,Y=zt+tt.yMax*w;A<se[0]&&(se[0]=A),X<se[1]&&(se[1]=X),ne>se[2]&&(se[2]=ne),Y>se[3]&&(se[3]=Y),rt%re===0&&(Pe={start:rt,end:rt,rect:[r,r,-r,-r]},le.push(Pe)),Pe.end++;const ae=Pe.rect;if(A<ae[0]&&(ae[0]=A),X<ae[1]&&(ae[1]=X),ne>ae[2]&&(ae[2]=ne),Y>ae[3]&&(ae[3]=Y),H[rt]=Ct,$){const Oe=rt*3;ie[Oe]=ze>>16&255,ie[Oe+1]=ze>>8&255,ie[Oe+2]=ze&255}}}}Te-=C}),ue){const O=v.length-_e;O>1&&g(ue,_e,O)}}W.typesetting=_()-de,z({glyphIds:H,glyphPositions:ee,glyphData:I,caretPositions:ue,caretHeight:J,glyphColors:ie,chunkedBounds:le,fontSize:y,unitsPerEm:Ie,ascender:Me*w,descender:Ae*w,capHeight:we*w,xHeight:Se*w,lineHeight:C,topBaseline:V,blockBounds:[j,ye-Q.length*C,j+oe,ye],visibleBounds:se,timings:W})})}function d(v,x){h(v,b=>{const[y,T,C,L]=b.blockBounds;x({width:C-y,height:L-T})},{metricsOnly:!0})}function p(v){let x=v.match(/^([\d.]+)%$/),b=x?parseFloat(x[1]):NaN;return isNaN(b)?0:b/100}function g(v,x,b){const y=v[x*3],T=v[x*3+1],C=v[x*3+2],L=(T-y)/b;for(let S=0;S<b;S++){const E=(x+S)*3;v[E]=y+L*S,v[E+1]=y+L*(S+1),v[E+2]=C}}function _(){return(self.performance||Date).now()}function m(){this.data=[]}const f=["glyphObj","x","width","charIndex"];return m.prototype={width:0,isSoftWrapped:!1,get count(){return Math.ceil(this.data.length/f.length)},glyphAt(v){let x=m.flyweight;return x.data=this.data,x.index=v,x},splitAt(v){let x=new m;return x.data=this.data.splice(v*f.length),x}},m.flyweight=f.reduce((v,x,b,y)=>(Object.defineProperty(v,x,{get(){return this.data[this.index*f.length+b]},set(T){this.data[this.index*f.length+b]=T}}),v),{data:null,index:0}),{typeset:h,measure:d,loadFont:u}}const ni=()=>(self.performance||Date).now(),ea=ch();let qc;function U_(o,e,t,n,i,r,s,a,l,c,u=!0){return u?N_(o,e,t,n,i,r,s,a,l,c).then(null,h=>(qc||(console.warn("WebGL SDF generation failed, falling back to JS",h),qc=!0),Zc(o,e,t,n,i,r,s,a,l,c))):Zc(o,e,t,n,i,r,s,a,l,c)}const Gs=[],O_=5;let bo=0;function hh(){const o=ni();for(;Gs.length&&ni()-o<O_;)Gs.shift()();bo=Gs.length?setTimeout(hh,0):0}const N_=(...o)=>new Promise((e,t)=>{Gs.push(()=>{const n=ni();try{ea.webgl.generateIntoCanvas(...o),e({timing:ni()-n})}catch(i){t(i)}}),bo||(bo=setTimeout(hh,0))}),F_=4,k_=2e3,Kc={};let B_=0;function Zc(o,e,t,n,i,r,s,a,l,c){const u="TroikaTextSDFGenerator_JS_"+B_++%F_;let h=Kc[u];return h||(h=Kc[u]={workerModule:Yr({name:u,workerId:u,dependencies:[ch,ni],init(d,p){const g=d().javascript.generate;return function(..._){const m=p();return{textureData:g(..._),timing:p()-m}}},getTransferables(d){return[d.textureData.buffer]}}),requests:0,idleTimer:null}),h.requests++,clearTimeout(h.idleTimer),h.workerModule(o,e,t,n,i,r).then(({textureData:d,timing:p})=>{const g=ni(),_=new Uint8Array(d.length*4);for(let m=0;m<d.length;m++)_[m*4+c]=d[m];return ea.webglUtils.renderImageData(s,_,a,l,o,e,1<<3-c),p+=ni()-g,--h.requests===0&&(h.idleTimer=setTimeout(()=>{S_(u)},k_)),{timing:p}})}function G_(o){o._warm||(ea.webgl.isSupported(o),o._warm=!0)}const z_=ea.webglUtils.resizeWebGLCanvasWithoutClearing;/*!
Custom build of Typr.ts (https://github.com/fredli74/Typr.ts) for use in Troika text rendering.
Original MIT license applies: https://github.com/fredli74/Typr.ts/blob/master/LICENSE
*/function V_(){return typeof window>"u"&&(self.window=self),function(o){var e={parse:function(i){var r=e._bin,s=new Uint8Array(i);if(r.readASCII(s,0,4)=="ttcf"){var a=4;r.readUshort(s,a),a+=2,r.readUshort(s,a),a+=2;var l=r.readUint(s,a);a+=4;for(var c=[],u=0;u<l;u++){var h=r.readUint(s,a);a+=4,c.push(e._readFont(s,h))}return c}return[e._readFont(s,0)]},_readFont:function(i,r){var s=e._bin,a=r;s.readFixed(i,r),r+=4;var l=s.readUshort(i,r);r+=2,s.readUshort(i,r),r+=2,s.readUshort(i,r),r+=2,s.readUshort(i,r),r+=2;for(var c=["cmap","head","hhea","maxp","hmtx","name","OS/2","post","loca","glyf","kern","CFF ","GPOS","GSUB","SVG "],u={_data:i,_offset:a},h={},d=0;d<l;d++){var p=s.readASCII(i,r,4);r+=4,s.readUint(i,r),r+=4;var g=s.readUint(i,r);r+=4;var _=s.readUint(i,r);r+=4,h[p]={offset:g,length:_}}for(d=0;d<c.length;d++){var m=c[d];h[m]&&(u[m.trim()]=e[m.trim()].parse(i,h[m].offset,h[m].length,u))}return u},_tabOffset:function(i,r,s){for(var a=e._bin,l=a.readUshort(i,s+4),c=s+12,u=0;u<l;u++){var h=a.readASCII(i,c,4);c+=4,a.readUint(i,c),c+=4;var d=a.readUint(i,c);if(c+=4,a.readUint(i,c),c+=4,h==r)return d}return 0}};e._bin={readFixed:function(i,r){return(i[r]<<8|i[r+1])+(i[r+2]<<8|i[r+3])/65540},readF2dot14:function(i,r){return e._bin.readShort(i,r)/16384},readInt:function(i,r){return e._bin._view(i).getInt32(r)},readInt8:function(i,r){return e._bin._view(i).getInt8(r)},readShort:function(i,r){return e._bin._view(i).getInt16(r)},readUshort:function(i,r){return e._bin._view(i).getUint16(r)},readUshorts:function(i,r,s){for(var a=[],l=0;l<s;l++)a.push(e._bin.readUshort(i,r+2*l));return a},readUint:function(i,r){return e._bin._view(i).getUint32(r)},readUint64:function(i,r){return 4294967296*e._bin.readUint(i,r)+e._bin.readUint(i,r+4)},readASCII:function(i,r,s){for(var a="",l=0;l<s;l++)a+=String.fromCharCode(i[r+l]);return a},readUnicode:function(i,r,s){for(var a="",l=0;l<s;l++){var c=i[r++]<<8|i[r++];a+=String.fromCharCode(c)}return a},_tdec:typeof window<"u"&&window.TextDecoder?new window.TextDecoder:null,readUTF8:function(i,r,s){var a=e._bin._tdec;return a&&r==0&&s==i.length?a.decode(i):e._bin.readASCII(i,r,s)},readBytes:function(i,r,s){for(var a=[],l=0;l<s;l++)a.push(i[r+l]);return a},readASCIIArray:function(i,r,s){for(var a=[],l=0;l<s;l++)a.push(String.fromCharCode(i[r+l]));return a},_view:function(i){return i._dataView||(i._dataView=i.buffer?new DataView(i.buffer,i.byteOffset,i.byteLength):new DataView(new Uint8Array(i).buffer))}},e._lctf={},e._lctf.parse=function(i,r,s,a,l){var c=e._bin,u={},h=r;c.readFixed(i,r),r+=4;var d=c.readUshort(i,r);r+=2;var p=c.readUshort(i,r);r+=2;var g=c.readUshort(i,r);return r+=2,u.scriptList=e._lctf.readScriptList(i,h+d),u.featureList=e._lctf.readFeatureList(i,h+p),u.lookupList=e._lctf.readLookupList(i,h+g,l),u},e._lctf.readLookupList=function(i,r,s){var a=e._bin,l=r,c=[],u=a.readUshort(i,r);r+=2;for(var h=0;h<u;h++){var d=a.readUshort(i,r);r+=2;var p=e._lctf.readLookupTable(i,l+d,s);c.push(p)}return c},e._lctf.readLookupTable=function(i,r,s){var a=e._bin,l=r,c={tabs:[]};c.ltype=a.readUshort(i,r),r+=2,c.flag=a.readUshort(i,r),r+=2;var u=a.readUshort(i,r);r+=2;for(var h=c.ltype,d=0;d<u;d++){var p=a.readUshort(i,r);r+=2;var g=s(i,h,l+p,c);c.tabs.push(g)}return c},e._lctf.numOfOnes=function(i){for(var r=0,s=0;s<32;s++)i>>>s&1&&r++;return r},e._lctf.readClassDef=function(i,r){var s=e._bin,a=[],l=s.readUshort(i,r);if(r+=2,l==1){var c=s.readUshort(i,r);r+=2;var u=s.readUshort(i,r);r+=2;for(var h=0;h<u;h++)a.push(c+h),a.push(c+h),a.push(s.readUshort(i,r)),r+=2}if(l==2){var d=s.readUshort(i,r);for(r+=2,h=0;h<d;h++)a.push(s.readUshort(i,r)),r+=2,a.push(s.readUshort(i,r)),r+=2,a.push(s.readUshort(i,r)),r+=2}return a},e._lctf.getInterval=function(i,r){for(var s=0;s<i.length;s+=3){var a=i[s],l=i[s+1];if(i[s+2],a<=r&&r<=l)return s}return-1},e._lctf.readCoverage=function(i,r){var s=e._bin,a={};a.fmt=s.readUshort(i,r),r+=2;var l=s.readUshort(i,r);return r+=2,a.fmt==1&&(a.tab=s.readUshorts(i,r,l)),a.fmt==2&&(a.tab=s.readUshorts(i,r,3*l)),a},e._lctf.coverageIndex=function(i,r){var s=i.tab;if(i.fmt==1)return s.indexOf(r);if(i.fmt==2){var a=e._lctf.getInterval(s,r);if(a!=-1)return s[a+2]+(r-s[a])}return-1},e._lctf.readFeatureList=function(i,r){var s=e._bin,a=r,l=[],c=s.readUshort(i,r);r+=2;for(var u=0;u<c;u++){var h=s.readASCII(i,r,4);r+=4;var d=s.readUshort(i,r);r+=2;var p=e._lctf.readFeatureTable(i,a+d);p.tag=h.trim(),l.push(p)}return l},e._lctf.readFeatureTable=function(i,r){var s=e._bin,a=r,l={},c=s.readUshort(i,r);r+=2,c>0&&(l.featureParams=a+c);var u=s.readUshort(i,r);r+=2,l.tab=[];for(var h=0;h<u;h++)l.tab.push(s.readUshort(i,r+2*h));return l},e._lctf.readScriptList=function(i,r){var s=e._bin,a=r,l={},c=s.readUshort(i,r);r+=2;for(var u=0;u<c;u++){var h=s.readASCII(i,r,4);r+=4;var d=s.readUshort(i,r);r+=2,l[h.trim()]=e._lctf.readScriptTable(i,a+d)}return l},e._lctf.readScriptTable=function(i,r){var s=e._bin,a=r,l={},c=s.readUshort(i,r);r+=2,l.default=e._lctf.readLangSysTable(i,a+c);var u=s.readUshort(i,r);r+=2;for(var h=0;h<u;h++){var d=s.readASCII(i,r,4);r+=4;var p=s.readUshort(i,r);r+=2,l[d.trim()]=e._lctf.readLangSysTable(i,a+p)}return l},e._lctf.readLangSysTable=function(i,r){var s=e._bin,a={};s.readUshort(i,r),r+=2,a.reqFeature=s.readUshort(i,r),r+=2;var l=s.readUshort(i,r);return r+=2,a.features=s.readUshorts(i,r,l),a},e.CFF={},e.CFF.parse=function(i,r,s){var a=e._bin;(i=new Uint8Array(i.buffer,r,s))[r=0],i[++r],i[++r],i[++r],r++;var l=[];r=e.CFF.readIndex(i,r,l);for(var c=[],u=0;u<l.length-1;u++)c.push(a.readASCII(i,r+l[u],l[u+1]-l[u]));r+=l[l.length-1];var h=[];r=e.CFF.readIndex(i,r,h);var d=[];for(u=0;u<h.length-1;u++)d.push(e.CFF.readDict(i,r+h[u],r+h[u+1]));r+=h[h.length-1];var p=d[0],g=[];r=e.CFF.readIndex(i,r,g);var _=[];for(u=0;u<g.length-1;u++)_.push(a.readASCII(i,r+g[u],g[u+1]-g[u]));if(r+=g[g.length-1],e.CFF.readSubrs(i,r,p),p.CharStrings){r=p.CharStrings,g=[],r=e.CFF.readIndex(i,r,g);var m=[];for(u=0;u<g.length-1;u++)m.push(a.readBytes(i,r+g[u],g[u+1]-g[u]));p.CharStrings=m}if(p.ROS){r=p.FDArray;var f=[];for(r=e.CFF.readIndex(i,r,f),p.FDArray=[],u=0;u<f.length-1;u++){var v=e.CFF.readDict(i,r+f[u],r+f[u+1]);e.CFF._readFDict(i,v,_),p.FDArray.push(v)}r+=f[f.length-1],r=p.FDSelect,p.FDSelect=[];var x=i[r];if(r++,x!=3)throw x;var b=a.readUshort(i,r);for(r+=2,u=0;u<b+1;u++)p.FDSelect.push(a.readUshort(i,r),i[r+2]),r+=3}return p.Encoding&&(p.Encoding=e.CFF.readEncoding(i,p.Encoding,p.CharStrings.length)),p.charset&&(p.charset=e.CFF.readCharset(i,p.charset,p.CharStrings.length)),e.CFF._readFDict(i,p,_),p},e.CFF._readFDict=function(i,r,s){var a;for(var l in r.Private&&(a=r.Private[1],r.Private=e.CFF.readDict(i,a,a+r.Private[0]),r.Private.Subrs&&e.CFF.readSubrs(i,a+r.Private.Subrs,r.Private)),r)["FamilyName","FontName","FullName","Notice","version","Copyright"].indexOf(l)!=-1&&(r[l]=s[r[l]-426+35])},e.CFF.readSubrs=function(i,r,s){var a=e._bin,l=[];r=e.CFF.readIndex(i,r,l);var c,u=l.length;c=u<1240?107:u<33900?1131:32768,s.Bias=c,s.Subrs=[];for(var h=0;h<l.length-1;h++)s.Subrs.push(a.readBytes(i,r+l[h],l[h+1]-l[h]))},e.CFF.tableSE=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,0,111,112,113,114,0,115,116,117,118,119,120,121,122,0,123,0,124,125,126,127,128,129,130,131,0,132,133,0,134,135,136,137,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,138,0,139,0,0,0,0,140,141,142,143,0,0,0,0,0,144,0,0,0,145,0,0,146,147,148,149,0,0,0,0],e.CFF.glyphByUnicode=function(i,r){for(var s=0;s<i.charset.length;s++)if(i.charset[s]==r)return s;return-1},e.CFF.glyphBySE=function(i,r){return r<0||r>255?-1:e.CFF.glyphByUnicode(i,e.CFF.tableSE[r])},e.CFF.readEncoding=function(i,r,s){e._bin;var a=[".notdef"],l=i[r];if(r++,l!=0)throw"error: unknown encoding format: "+l;var c=i[r];r++;for(var u=0;u<c;u++)a.push(i[r+u]);return a},e.CFF.readCharset=function(i,r,s){var a=e._bin,l=[".notdef"],c=i[r];if(r++,c==0)for(var u=0;u<s;u++){var h=a.readUshort(i,r);r+=2,l.push(h)}else{if(c!=1&&c!=2)throw"error: format: "+c;for(;l.length<s;){h=a.readUshort(i,r),r+=2;var d=0;for(c==1?(d=i[r],r++):(d=a.readUshort(i,r),r+=2),u=0;u<=d;u++)l.push(h),h++}}return l},e.CFF.readIndex=function(i,r,s){var a=e._bin,l=a.readUshort(i,r)+1,c=i[r+=2];if(r++,c==1)for(var u=0;u<l;u++)s.push(i[r+u]);else if(c==2)for(u=0;u<l;u++)s.push(a.readUshort(i,r+2*u));else if(c==3)for(u=0;u<l;u++)s.push(16777215&a.readUint(i,r+3*u-1));else if(l!=1)throw"unsupported offset size: "+c+", count: "+l;return(r+=l*c)-1},e.CFF.getCharString=function(i,r,s){var a=e._bin,l=i[r],c=i[r+1];i[r+2],i[r+3],i[r+4];var u=1,h=null,d=null;l<=20&&(h=l,u=1),l==12&&(h=100*l+c,u=2),21<=l&&l<=27&&(h=l,u=1),l==28&&(d=a.readShort(i,r+1),u=3),29<=l&&l<=31&&(h=l,u=1),32<=l&&l<=246&&(d=l-139,u=1),247<=l&&l<=250&&(d=256*(l-247)+c+108,u=2),251<=l&&l<=254&&(d=256*-(l-251)-c-108,u=2),l==255&&(d=a.readInt(i,r+1)/65535,u=5),s.val=d??"o"+h,s.size=u},e.CFF.readCharString=function(i,r,s){for(var a=r+s,l=e._bin,c=[];r<a;){var u=i[r],h=i[r+1];i[r+2],i[r+3],i[r+4];var d=1,p=null,g=null;u<=20&&(p=u,d=1),u==12&&(p=100*u+h,d=2),u!=19&&u!=20||(p=u,d=2),21<=u&&u<=27&&(p=u,d=1),u==28&&(g=l.readShort(i,r+1),d=3),29<=u&&u<=31&&(p=u,d=1),32<=u&&u<=246&&(g=u-139,d=1),247<=u&&u<=250&&(g=256*(u-247)+h+108,d=2),251<=u&&u<=254&&(g=256*-(u-251)-h-108,d=2),u==255&&(g=l.readInt(i,r+1)/65535,d=5),c.push(g??"o"+p),r+=d}return c},e.CFF.readDict=function(i,r,s){for(var a=e._bin,l={},c=[];r<s;){var u=i[r],h=i[r+1];i[r+2],i[r+3],i[r+4];var d=1,p=null,g=null;if(u==28&&(g=a.readShort(i,r+1),d=3),u==29&&(g=a.readInt(i,r+1),d=5),32<=u&&u<=246&&(g=u-139,d=1),247<=u&&u<=250&&(g=256*(u-247)+h+108,d=2),251<=u&&u<=254&&(g=256*-(u-251)-h-108,d=2),u==255)throw g=a.readInt(i,r+1)/65535,d=5,"unknown number";if(u==30){var _=[];for(d=1;;){var m=i[r+d];d++;var f=m>>4,v=15&m;if(f!=15&&_.push(f),v!=15&&_.push(v),v==15)break}for(var x="",b=[0,1,2,3,4,5,6,7,8,9,".","e","e-","reserved","-","endOfNumber"],y=0;y<_.length;y++)x+=b[_[y]];g=parseFloat(x)}u<=21&&(p=["version","Notice","FullName","FamilyName","Weight","FontBBox","BlueValues","OtherBlues","FamilyBlues","FamilyOtherBlues","StdHW","StdVW","escape","UniqueID","XUID","charset","Encoding","CharStrings","Private","Subrs","defaultWidthX","nominalWidthX"][u],d=1,u==12&&(p=["Copyright","isFixedPitch","ItalicAngle","UnderlinePosition","UnderlineThickness","PaintType","CharstringType","FontMatrix","StrokeWidth","BlueScale","BlueShift","BlueFuzz","StemSnapH","StemSnapV","ForceBold",0,0,"LanguageGroup","ExpansionFactor","initialRandomSeed","SyntheticBase","PostScript","BaseFontName","BaseFontBlend",0,0,0,0,0,0,"ROS","CIDFontVersion","CIDFontRevision","CIDFontType","CIDCount","UIDBase","FDArray","FDSelect","FontName"][h],d=2)),p!=null?(l[p]=c.length==1?c[0]:c,c=[]):c.push(g),r+=d}return l},e.cmap={},e.cmap.parse=function(i,r,s){i=new Uint8Array(i.buffer,r,s),r=0;var a=e._bin,l={};a.readUshort(i,r),r+=2;var c=a.readUshort(i,r);r+=2;var u=[];l.tables=[];for(var h=0;h<c;h++){var d=a.readUshort(i,r);r+=2;var p=a.readUshort(i,r);r+=2;var g=a.readUint(i,r);r+=4;var _="p"+d+"e"+p,m=u.indexOf(g);if(m==-1){var f;m=l.tables.length,u.push(g);var v=a.readUshort(i,g);v==0?f=e.cmap.parse0(i,g):v==4?f=e.cmap.parse4(i,g):v==6?f=e.cmap.parse6(i,g):v==12?f=e.cmap.parse12(i,g):console.debug("unknown format: "+v,d,p,g),l.tables.push(f)}if(l[_]!=null)throw"multiple tables for one platform+encoding";l[_]=m}return l},e.cmap.parse0=function(i,r){var s=e._bin,a={};a.format=s.readUshort(i,r),r+=2;var l=s.readUshort(i,r);r+=2,s.readUshort(i,r),r+=2,a.map=[];for(var c=0;c<l-6;c++)a.map.push(i[r+c]);return a},e.cmap.parse4=function(i,r){var s=e._bin,a=r,l={};l.format=s.readUshort(i,r),r+=2;var c=s.readUshort(i,r);r+=2,s.readUshort(i,r),r+=2;var u=s.readUshort(i,r);r+=2;var h=u/2;l.searchRange=s.readUshort(i,r),r+=2,l.entrySelector=s.readUshort(i,r),r+=2,l.rangeShift=s.readUshort(i,r),r+=2,l.endCount=s.readUshorts(i,r,h),r+=2*h,r+=2,l.startCount=s.readUshorts(i,r,h),r+=2*h,l.idDelta=[];for(var d=0;d<h;d++)l.idDelta.push(s.readShort(i,r)),r+=2;for(l.idRangeOffset=s.readUshorts(i,r,h),r+=2*h,l.glyphIdArray=[];r<a+c;)l.glyphIdArray.push(s.readUshort(i,r)),r+=2;return l},e.cmap.parse6=function(i,r){var s=e._bin,a={};a.format=s.readUshort(i,r),r+=2,s.readUshort(i,r),r+=2,s.readUshort(i,r),r+=2,a.firstCode=s.readUshort(i,r),r+=2;var l=s.readUshort(i,r);r+=2,a.glyphIdArray=[];for(var c=0;c<l;c++)a.glyphIdArray.push(s.readUshort(i,r)),r+=2;return a},e.cmap.parse12=function(i,r){var s=e._bin,a={};a.format=s.readUshort(i,r),r+=2,r+=2,s.readUint(i,r),r+=4,s.readUint(i,r),r+=4;var l=s.readUint(i,r);r+=4,a.groups=[];for(var c=0;c<l;c++){var u=r+12*c,h=s.readUint(i,u+0),d=s.readUint(i,u+4),p=s.readUint(i,u+8);a.groups.push([h,d,p])}return a},e.glyf={},e.glyf.parse=function(i,r,s,a){for(var l=[],c=0;c<a.maxp.numGlyphs;c++)l.push(null);return l},e.glyf._parseGlyf=function(i,r){var s=e._bin,a=i._data,l=e._tabOffset(a,"glyf",i._offset)+i.loca[r];if(i.loca[r]==i.loca[r+1])return null;var c={};if(c.noc=s.readShort(a,l),l+=2,c.xMin=s.readShort(a,l),l+=2,c.yMin=s.readShort(a,l),l+=2,c.xMax=s.readShort(a,l),l+=2,c.yMax=s.readShort(a,l),l+=2,c.xMin>=c.xMax||c.yMin>=c.yMax)return null;if(c.noc>0){c.endPts=[];for(var u=0;u<c.noc;u++)c.endPts.push(s.readUshort(a,l)),l+=2;var h=s.readUshort(a,l);if(l+=2,a.length-l<h)return null;c.instructions=s.readBytes(a,l,h),l+=h;var d=c.endPts[c.noc-1]+1;for(c.flags=[],u=0;u<d;u++){var p=a[l];if(l++,c.flags.push(p),(8&p)!=0){var g=a[l];l++;for(var _=0;_<g;_++)c.flags.push(p),u++}}for(c.xs=[],u=0;u<d;u++){var m=(2&c.flags[u])!=0,f=(16&c.flags[u])!=0;m?(c.xs.push(f?a[l]:-a[l]),l++):f?c.xs.push(0):(c.xs.push(s.readShort(a,l)),l+=2)}for(c.ys=[],u=0;u<d;u++)m=(4&c.flags[u])!=0,f=(32&c.flags[u])!=0,m?(c.ys.push(f?a[l]:-a[l]),l++):f?c.ys.push(0):(c.ys.push(s.readShort(a,l)),l+=2);var v=0,x=0;for(u=0;u<d;u++)v+=c.xs[u],x+=c.ys[u],c.xs[u]=v,c.ys[u]=x}else{var b;c.parts=[];do{b=s.readUshort(a,l),l+=2;var y={m:{a:1,b:0,c:0,d:1,tx:0,ty:0},p1:-1,p2:-1};if(c.parts.push(y),y.glyphIndex=s.readUshort(a,l),l+=2,1&b){var T=s.readShort(a,l);l+=2;var C=s.readShort(a,l);l+=2}else T=s.readInt8(a,l),l++,C=s.readInt8(a,l),l++;2&b?(y.m.tx=T,y.m.ty=C):(y.p1=T,y.p2=C),8&b?(y.m.a=y.m.d=s.readF2dot14(a,l),l+=2):64&b?(y.m.a=s.readF2dot14(a,l),l+=2,y.m.d=s.readF2dot14(a,l),l+=2):128&b&&(y.m.a=s.readF2dot14(a,l),l+=2,y.m.b=s.readF2dot14(a,l),l+=2,y.m.c=s.readF2dot14(a,l),l+=2,y.m.d=s.readF2dot14(a,l),l+=2)}while(32&b);if(256&b){var L=s.readUshort(a,l);for(l+=2,c.instr=[],u=0;u<L;u++)c.instr.push(a[l]),l++}}return c},e.GPOS={},e.GPOS.parse=function(i,r,s,a){return e._lctf.parse(i,r,s,a,e.GPOS.subt)},e.GPOS.subt=function(i,r,s,a){var l=e._bin,c=s,u={};if(u.fmt=l.readUshort(i,s),s+=2,r==1||r==2||r==3||r==7||r==8&&u.fmt<=2){var h=l.readUshort(i,s);s+=2,u.coverage=e._lctf.readCoverage(i,h+c)}if(r==1&&u.fmt==1){var d=l.readUshort(i,s);s+=2;var p=e._lctf.numOfOnes(d);d!=0&&(u.pos=e.GPOS.readValueRecord(i,s,d))}else if(r==2&&u.fmt>=1&&u.fmt<=2){d=l.readUshort(i,s),s+=2;var g=l.readUshort(i,s);s+=2,p=e._lctf.numOfOnes(d);var _=e._lctf.numOfOnes(g);if(u.fmt==1){u.pairsets=[];var m=l.readUshort(i,s);s+=2;for(var f=0;f<m;f++){var v=c+l.readUshort(i,s);s+=2;var x=l.readUshort(i,v);v+=2;for(var b=[],y=0;y<x;y++){var T=l.readUshort(i,v);v+=2,d!=0&&(U=e.GPOS.readValueRecord(i,v,d),v+=2*p),g!=0&&(P=e.GPOS.readValueRecord(i,v,g),v+=2*_),b.push({gid2:T,val1:U,val2:P})}u.pairsets.push(b)}}if(u.fmt==2){var C=l.readUshort(i,s);s+=2;var L=l.readUshort(i,s);s+=2;var S=l.readUshort(i,s);s+=2;var E=l.readUshort(i,s);for(s+=2,u.classDef1=e._lctf.readClassDef(i,c+C),u.classDef2=e._lctf.readClassDef(i,c+L),u.matrix=[],f=0;f<S;f++){var Z=[];for(y=0;y<E;y++){var U=null,P=null;d!=0&&(U=e.GPOS.readValueRecord(i,s,d),s+=2*p),g!=0&&(P=e.GPOS.readValueRecord(i,s,g),s+=2*_),Z.push({val1:U,val2:P})}u.matrix.push(Z)}}}else{if(r==9&&u.fmt==1){var D=l.readUshort(i,s);s+=2;var B=l.readUint(i,s);if(s+=4,a.ltype==9)a.ltype=D;else if(a.ltype!=D)throw"invalid extension substitution";return e.GPOS.subt(i,a.ltype,c+B)}console.debug("unsupported GPOS table LookupType",r,"format",u.fmt)}return u},e.GPOS.readValueRecord=function(i,r,s){var a=e._bin,l=[];return l.push(1&s?a.readShort(i,r):0),r+=1&s?2:0,l.push(2&s?a.readShort(i,r):0),r+=2&s?2:0,l.push(4&s?a.readShort(i,r):0),r+=4&s?2:0,l.push(8&s?a.readShort(i,r):0),r+=8&s?2:0,l},e.GSUB={},e.GSUB.parse=function(i,r,s,a){return e._lctf.parse(i,r,s,a,e.GSUB.subt)},e.GSUB.subt=function(i,r,s,a){var l=e._bin,c=s,u={};if(u.fmt=l.readUshort(i,s),s+=2,r!=1&&r!=4&&r!=5&&r!=6)return null;if(r==1||r==4||r==5&&u.fmt<=2||r==6&&u.fmt<=2){var h=l.readUshort(i,s);s+=2,u.coverage=e._lctf.readCoverage(i,c+h)}if(r==1&&u.fmt>=1&&u.fmt<=2){if(u.fmt==1)u.delta=l.readShort(i,s),s+=2;else if(u.fmt==2){var d=l.readUshort(i,s);s+=2,u.newg=l.readUshorts(i,s,d),s+=2*u.newg.length}}else if(r==4){u.vals=[],d=l.readUshort(i,s),s+=2;for(var p=0;p<d;p++){var g=l.readUshort(i,s);s+=2,u.vals.push(e.GSUB.readLigatureSet(i,c+g))}}else if(r==5&&u.fmt==2){if(u.fmt==2){var _=l.readUshort(i,s);s+=2,u.cDef=e._lctf.readClassDef(i,c+_),u.scset=[];var m=l.readUshort(i,s);for(s+=2,p=0;p<m;p++){var f=l.readUshort(i,s);s+=2,u.scset.push(f==0?null:e.GSUB.readSubClassSet(i,c+f))}}}else if(r==6&&u.fmt==3){if(u.fmt==3){for(p=0;p<3;p++){d=l.readUshort(i,s),s+=2;for(var v=[],x=0;x<d;x++)v.push(e._lctf.readCoverage(i,c+l.readUshort(i,s+2*x)));s+=2*d,p==0&&(u.backCvg=v),p==1&&(u.inptCvg=v),p==2&&(u.ahedCvg=v)}d=l.readUshort(i,s),s+=2,u.lookupRec=e.GSUB.readSubstLookupRecords(i,s,d)}}else{if(r==7&&u.fmt==1){var b=l.readUshort(i,s);s+=2;var y=l.readUint(i,s);if(s+=4,a.ltype==9)a.ltype=b;else if(a.ltype!=b)throw"invalid extension substitution";return e.GSUB.subt(i,a.ltype,c+y)}console.debug("unsupported GSUB table LookupType",r,"format",u.fmt)}return u},e.GSUB.readSubClassSet=function(i,r){var s=e._bin.readUshort,a=r,l=[],c=s(i,r);r+=2;for(var u=0;u<c;u++){var h=s(i,r);r+=2,l.push(e.GSUB.readSubClassRule(i,a+h))}return l},e.GSUB.readSubClassRule=function(i,r){var s=e._bin.readUshort,a={},l=s(i,r),c=s(i,r+=2);r+=2,a.input=[];for(var u=0;u<l-1;u++)a.input.push(s(i,r)),r+=2;return a.substLookupRecords=e.GSUB.readSubstLookupRecords(i,r,c),a},e.GSUB.readSubstLookupRecords=function(i,r,s){for(var a=e._bin.readUshort,l=[],c=0;c<s;c++)l.push(a(i,r),a(i,r+2)),r+=4;return l},e.GSUB.readChainSubClassSet=function(i,r){var s=e._bin,a=r,l=[],c=s.readUshort(i,r);r+=2;for(var u=0;u<c;u++){var h=s.readUshort(i,r);r+=2,l.push(e.GSUB.readChainSubClassRule(i,a+h))}return l},e.GSUB.readChainSubClassRule=function(i,r){for(var s=e._bin,a={},l=["backtrack","input","lookahead"],c=0;c<l.length;c++){var u=s.readUshort(i,r);r+=2,c==1&&u--,a[l[c]]=s.readUshorts(i,r,u),r+=2*a[l[c]].length}return u=s.readUshort(i,r),r+=2,a.subst=s.readUshorts(i,r,2*u),r+=2*a.subst.length,a},e.GSUB.readLigatureSet=function(i,r){var s=e._bin,a=r,l=[],c=s.readUshort(i,r);r+=2;for(var u=0;u<c;u++){var h=s.readUshort(i,r);r+=2,l.push(e.GSUB.readLigature(i,a+h))}return l},e.GSUB.readLigature=function(i,r){var s=e._bin,a={chain:[]};a.nglyph=s.readUshort(i,r),r+=2;var l=s.readUshort(i,r);r+=2;for(var c=0;c<l-1;c++)a.chain.push(s.readUshort(i,r)),r+=2;return a},e.head={},e.head.parse=function(i,r,s){var a=e._bin,l={};return a.readFixed(i,r),r+=4,l.fontRevision=a.readFixed(i,r),r+=4,a.readUint(i,r),r+=4,a.readUint(i,r),r+=4,l.flags=a.readUshort(i,r),r+=2,l.unitsPerEm=a.readUshort(i,r),r+=2,l.created=a.readUint64(i,r),r+=8,l.modified=a.readUint64(i,r),r+=8,l.xMin=a.readShort(i,r),r+=2,l.yMin=a.readShort(i,r),r+=2,l.xMax=a.readShort(i,r),r+=2,l.yMax=a.readShort(i,r),r+=2,l.macStyle=a.readUshort(i,r),r+=2,l.lowestRecPPEM=a.readUshort(i,r),r+=2,l.fontDirectionHint=a.readShort(i,r),r+=2,l.indexToLocFormat=a.readShort(i,r),r+=2,l.glyphDataFormat=a.readShort(i,r),r+=2,l},e.hhea={},e.hhea.parse=function(i,r,s){var a=e._bin,l={};return a.readFixed(i,r),r+=4,l.ascender=a.readShort(i,r),r+=2,l.descender=a.readShort(i,r),r+=2,l.lineGap=a.readShort(i,r),r+=2,l.advanceWidthMax=a.readUshort(i,r),r+=2,l.minLeftSideBearing=a.readShort(i,r),r+=2,l.minRightSideBearing=a.readShort(i,r),r+=2,l.xMaxExtent=a.readShort(i,r),r+=2,l.caretSlopeRise=a.readShort(i,r),r+=2,l.caretSlopeRun=a.readShort(i,r),r+=2,l.caretOffset=a.readShort(i,r),r+=2,r+=8,l.metricDataFormat=a.readShort(i,r),r+=2,l.numberOfHMetrics=a.readUshort(i,r),r+=2,l},e.hmtx={},e.hmtx.parse=function(i,r,s,a){for(var l=e._bin,c={aWidth:[],lsBearing:[]},u=0,h=0,d=0;d<a.maxp.numGlyphs;d++)d<a.hhea.numberOfHMetrics&&(u=l.readUshort(i,r),r+=2,h=l.readShort(i,r),r+=2),c.aWidth.push(u),c.lsBearing.push(h);return c},e.kern={},e.kern.parse=function(i,r,s,a){var l=e._bin,c=l.readUshort(i,r);if(r+=2,c==1)return e.kern.parseV1(i,r-2,s,a);var u=l.readUshort(i,r);r+=2;for(var h={glyph1:[],rval:[]},d=0;d<u;d++){r+=2,s=l.readUshort(i,r),r+=2;var p=l.readUshort(i,r);r+=2;var g=p>>>8;if((g&=15)!=0)throw"unknown kern table format: "+g;r=e.kern.readFormat0(i,r,h)}return h},e.kern.parseV1=function(i,r,s,a){var l=e._bin;l.readFixed(i,r),r+=4;var c=l.readUint(i,r);r+=4;for(var u={glyph1:[],rval:[]},h=0;h<c;h++){l.readUint(i,r),r+=4;var d=l.readUshort(i,r);r+=2,l.readUshort(i,r),r+=2;var p=d>>>8;if((p&=15)!=0)throw"unknown kern table format: "+p;r=e.kern.readFormat0(i,r,u)}return u},e.kern.readFormat0=function(i,r,s){var a=e._bin,l=-1,c=a.readUshort(i,r);r+=2,a.readUshort(i,r),r+=2,a.readUshort(i,r),r+=2,a.readUshort(i,r),r+=2;for(var u=0;u<c;u++){var h=a.readUshort(i,r);r+=2;var d=a.readUshort(i,r);r+=2;var p=a.readShort(i,r);r+=2,h!=l&&(s.glyph1.push(h),s.rval.push({glyph2:[],vals:[]}));var g=s.rval[s.rval.length-1];g.glyph2.push(d),g.vals.push(p),l=h}return r},e.loca={},e.loca.parse=function(i,r,s,a){var l=e._bin,c=[],u=a.head.indexToLocFormat,h=a.maxp.numGlyphs+1;if(u==0)for(var d=0;d<h;d++)c.push(l.readUshort(i,r+(d<<1))<<1);if(u==1)for(d=0;d<h;d++)c.push(l.readUint(i,r+(d<<2)));return c},e.maxp={},e.maxp.parse=function(i,r,s){var a=e._bin,l={},c=a.readUint(i,r);return r+=4,l.numGlyphs=a.readUshort(i,r),r+=2,c==65536&&(l.maxPoints=a.readUshort(i,r),r+=2,l.maxContours=a.readUshort(i,r),r+=2,l.maxCompositePoints=a.readUshort(i,r),r+=2,l.maxCompositeContours=a.readUshort(i,r),r+=2,l.maxZones=a.readUshort(i,r),r+=2,l.maxTwilightPoints=a.readUshort(i,r),r+=2,l.maxStorage=a.readUshort(i,r),r+=2,l.maxFunctionDefs=a.readUshort(i,r),r+=2,l.maxInstructionDefs=a.readUshort(i,r),r+=2,l.maxStackElements=a.readUshort(i,r),r+=2,l.maxSizeOfInstructions=a.readUshort(i,r),r+=2,l.maxComponentElements=a.readUshort(i,r),r+=2,l.maxComponentDepth=a.readUshort(i,r),r+=2),l},e.name={},e.name.parse=function(i,r,s){var a=e._bin,l={};a.readUshort(i,r),r+=2;var c=a.readUshort(i,r);r+=2,a.readUshort(i,r);for(var u,h=["copyright","fontFamily","fontSubfamily","ID","fullName","version","postScriptName","trademark","manufacturer","designer","description","urlVendor","urlDesigner","licence","licenceURL","---","typoFamilyName","typoSubfamilyName","compatibleFull","sampleText","postScriptCID","wwsFamilyName","wwsSubfamilyName","lightPalette","darkPalette"],d=r+=2,p=0;p<c;p++){var g=a.readUshort(i,r);r+=2;var _=a.readUshort(i,r);r+=2;var m=a.readUshort(i,r);r+=2;var f=a.readUshort(i,r);r+=2;var v=a.readUshort(i,r);r+=2;var x=a.readUshort(i,r);r+=2;var b,y=h[f],T=d+12*c+x;if(g==0)b=a.readUnicode(i,T,v/2);else if(g==3&&_==0)b=a.readUnicode(i,T,v/2);else if(_==0)b=a.readASCII(i,T,v);else if(_==1)b=a.readUnicode(i,T,v/2);else if(_==3)b=a.readUnicode(i,T,v/2);else{if(g!=1)throw"unknown encoding "+_+", platformID: "+g;b=a.readASCII(i,T,v),console.debug("reading unknown MAC encoding "+_+" as ASCII")}var C="p"+g+","+m.toString(16);l[C]==null&&(l[C]={}),l[C][y!==void 0?y:f]=b,l[C]._lang=m}for(var L in l)if(l[L].postScriptName!=null&&l[L]._lang==1033)return l[L];for(var L in l)if(l[L].postScriptName!=null&&l[L]._lang==0)return l[L];for(var L in l)if(l[L].postScriptName!=null&&l[L]._lang==3084)return l[L];for(var L in l)if(l[L].postScriptName!=null)return l[L];for(var L in l){u=L;break}return console.debug("returning name table with languageID "+l[u]._lang),l[u]},e["OS/2"]={},e["OS/2"].parse=function(i,r,s){var a=e._bin.readUshort(i,r);r+=2;var l={};if(a==0)e["OS/2"].version0(i,r,l);else if(a==1)e["OS/2"].version1(i,r,l);else if(a==2||a==3||a==4)e["OS/2"].version2(i,r,l);else{if(a!=5)throw"unknown OS/2 table version: "+a;e["OS/2"].version5(i,r,l)}return l},e["OS/2"].version0=function(i,r,s){var a=e._bin;return s.xAvgCharWidth=a.readShort(i,r),r+=2,s.usWeightClass=a.readUshort(i,r),r+=2,s.usWidthClass=a.readUshort(i,r),r+=2,s.fsType=a.readUshort(i,r),r+=2,s.ySubscriptXSize=a.readShort(i,r),r+=2,s.ySubscriptYSize=a.readShort(i,r),r+=2,s.ySubscriptXOffset=a.readShort(i,r),r+=2,s.ySubscriptYOffset=a.readShort(i,r),r+=2,s.ySuperscriptXSize=a.readShort(i,r),r+=2,s.ySuperscriptYSize=a.readShort(i,r),r+=2,s.ySuperscriptXOffset=a.readShort(i,r),r+=2,s.ySuperscriptYOffset=a.readShort(i,r),r+=2,s.yStrikeoutSize=a.readShort(i,r),r+=2,s.yStrikeoutPosition=a.readShort(i,r),r+=2,s.sFamilyClass=a.readShort(i,r),r+=2,s.panose=a.readBytes(i,r,10),r+=10,s.ulUnicodeRange1=a.readUint(i,r),r+=4,s.ulUnicodeRange2=a.readUint(i,r),r+=4,s.ulUnicodeRange3=a.readUint(i,r),r+=4,s.ulUnicodeRange4=a.readUint(i,r),r+=4,s.achVendID=[a.readInt8(i,r),a.readInt8(i,r+1),a.readInt8(i,r+2),a.readInt8(i,r+3)],r+=4,s.fsSelection=a.readUshort(i,r),r+=2,s.usFirstCharIndex=a.readUshort(i,r),r+=2,s.usLastCharIndex=a.readUshort(i,r),r+=2,s.sTypoAscender=a.readShort(i,r),r+=2,s.sTypoDescender=a.readShort(i,r),r+=2,s.sTypoLineGap=a.readShort(i,r),r+=2,s.usWinAscent=a.readUshort(i,r),r+=2,s.usWinDescent=a.readUshort(i,r),r+=2},e["OS/2"].version1=function(i,r,s){var a=e._bin;return r=e["OS/2"].version0(i,r,s),s.ulCodePageRange1=a.readUint(i,r),r+=4,s.ulCodePageRange2=a.readUint(i,r),r+=4},e["OS/2"].version2=function(i,r,s){var a=e._bin;return r=e["OS/2"].version1(i,r,s),s.sxHeight=a.readShort(i,r),r+=2,s.sCapHeight=a.readShort(i,r),r+=2,s.usDefault=a.readUshort(i,r),r+=2,s.usBreak=a.readUshort(i,r),r+=2,s.usMaxContext=a.readUshort(i,r),r+=2},e["OS/2"].version5=function(i,r,s){var a=e._bin;return r=e["OS/2"].version2(i,r,s),s.usLowerOpticalPointSize=a.readUshort(i,r),r+=2,s.usUpperOpticalPointSize=a.readUshort(i,r),r+=2},e.post={},e.post.parse=function(i,r,s){var a=e._bin,l={};return l.version=a.readFixed(i,r),r+=4,l.italicAngle=a.readFixed(i,r),r+=4,l.underlinePosition=a.readShort(i,r),r+=2,l.underlineThickness=a.readShort(i,r),r+=2,l},e==null&&(e={}),e.U==null&&(e.U={}),e.U.codeToGlyph=function(i,r){var s=i.cmap,a=-1;if(s.p0e4!=null?a=s.p0e4:s.p3e1!=null?a=s.p3e1:s.p1e0!=null?a=s.p1e0:s.p0e3!=null&&(a=s.p0e3),a==-1)throw"no familiar platform and encoding!";var l=s.tables[a];if(l.format==0)return r>=l.map.length?0:l.map[r];if(l.format==4){for(var c=-1,u=0;u<l.endCount.length;u++)if(r<=l.endCount[u]){c=u;break}return c==-1||l.startCount[c]>r?0:65535&(l.idRangeOffset[c]!=0?l.glyphIdArray[r-l.startCount[c]+(l.idRangeOffset[c]>>1)-(l.idRangeOffset.length-c)]:r+l.idDelta[c])}if(l.format==12){if(r>l.groups[l.groups.length-1][1])return 0;for(u=0;u<l.groups.length;u++){var h=l.groups[u];if(h[0]<=r&&r<=h[1])return h[2]+(r-h[0])}return 0}throw"unknown cmap table format "+l.format},e.U.glyphToPath=function(i,r){var s={cmds:[],crds:[]};if(i.SVG&&i.SVG.entries[r]){var a=i.SVG.entries[r];return a==null?s:(typeof a=="string"&&(a=e.SVG.toPath(a),i.SVG.entries[r]=a),a)}if(i.CFF){var l={x:0,y:0,stack:[],nStems:0,haveWidth:!1,width:i.CFF.Private?i.CFF.Private.defaultWidthX:0,open:!1},c=i.CFF,u=i.CFF.Private;if(c.ROS){for(var h=0;c.FDSelect[h+2]<=r;)h+=2;u=c.FDArray[c.FDSelect[h+1]].Private}e.U._drawCFF(i.CFF.CharStrings[r],l,c,u,s)}else i.glyf&&e.U._drawGlyf(r,i,s);return s},e.U._drawGlyf=function(i,r,s){var a=r.glyf[i];a==null&&(a=r.glyf[i]=e.glyf._parseGlyf(r,i)),a!=null&&(a.noc>-1?e.U._simpleGlyph(a,s):e.U._compoGlyph(a,r,s))},e.U._simpleGlyph=function(i,r){for(var s=0;s<i.noc;s++){for(var a=s==0?0:i.endPts[s-1]+1,l=i.endPts[s],c=a;c<=l;c++){var u=c==a?l:c-1,h=c==l?a:c+1,d=1&i.flags[c],p=1&i.flags[u],g=1&i.flags[h],_=i.xs[c],m=i.ys[c];if(c==a)if(d){if(!p){e.U.P.moveTo(r,_,m);continue}e.U.P.moveTo(r,i.xs[u],i.ys[u])}else p?e.U.P.moveTo(r,i.xs[u],i.ys[u]):e.U.P.moveTo(r,(i.xs[u]+_)/2,(i.ys[u]+m)/2);d?p&&e.U.P.lineTo(r,_,m):g?e.U.P.qcurveTo(r,_,m,i.xs[h],i.ys[h]):e.U.P.qcurveTo(r,_,m,(_+i.xs[h])/2,(m+i.ys[h])/2)}e.U.P.closePath(r)}},e.U._compoGlyph=function(i,r,s){for(var a=0;a<i.parts.length;a++){var l={cmds:[],crds:[]},c=i.parts[a];e.U._drawGlyf(c.glyphIndex,r,l);for(var u=c.m,h=0;h<l.crds.length;h+=2){var d=l.crds[h],p=l.crds[h+1];s.crds.push(d*u.a+p*u.b+u.tx),s.crds.push(d*u.c+p*u.d+u.ty)}for(h=0;h<l.cmds.length;h++)s.cmds.push(l.cmds[h])}},e.U._getGlyphClass=function(i,r){var s=e._lctf.getInterval(r,i);return s==-1?0:r[s+2]},e.U.getPairAdjustment=function(i,r,s){var a=!1;if(i.GPOS)for(var l=i.GPOS,c=l.lookupList,u=l.featureList,h=[],d=0;d<u.length;d++){var p=u[d];if(p.tag=="kern"){a=!0;for(var g=0;g<p.tab.length;g++)if(!h[p.tab[g]]){h[p.tab[g]]=!0;for(var _=c[p.tab[g]],m=0;m<_.tabs.length;m++)if(_.tabs[m]!=null){var f,v=_.tabs[m];if((!v.coverage||(f=e._lctf.coverageIndex(v.coverage,r))!=-1)&&_.ltype!=1){if(_.ltype==2){var x=null;if(v.fmt==1){var b=v.pairsets[f];for(d=0;d<b.length;d++)b[d].gid2==s&&(x=b[d])}else if(v.fmt==2){var y=e.U._getGlyphClass(r,v.classDef1),T=e.U._getGlyphClass(s,v.classDef2);x=v.matrix[y][T]}if(x){var C=0;return x.val1&&x.val1[2]&&(C+=x.val1[2]),x.val2&&x.val2[0]&&(C+=x.val2[0]),C}}}}}}}if(i.kern&&!a){var L=i.kern.glyph1.indexOf(r);if(L!=-1){var S=i.kern.rval[L].glyph2.indexOf(s);if(S!=-1)return i.kern.rval[L].vals[S]}}return 0},e.U._applySubs=function(i,r,s,a){for(var l=i.length-r-1,c=0;c<s.tabs.length;c++)if(s.tabs[c]!=null){var u,h=s.tabs[c];if(!h.coverage||(u=e._lctf.coverageIndex(h.coverage,i[r]))!=-1){if(s.ltype==1)i[r],h.fmt==1?i[r]=i[r]+h.delta:i[r]=h.newg[u];else if(s.ltype==4)for(var d=h.vals[u],p=0;p<d.length;p++){var g=d[p],_=g.chain.length;if(!(_>l)){for(var m=!0,f=0,v=0;v<_;v++){for(;i[r+f+(1+v)]==-1;)f++;g.chain[v]!=i[r+f+(1+v)]&&(m=!1)}if(m){for(i[r]=g.nglyph,v=0;v<_+f;v++)i[r+v+1]=-1;break}}}else if(s.ltype==5&&h.fmt==2)for(var x=e._lctf.getInterval(h.cDef,i[r]),b=h.cDef[x+2],y=h.scset[b],T=0;T<y.length;T++){var C=y[T],L=C.input;if(!(L.length>l)){for(m=!0,v=0;v<L.length;v++){var S=e._lctf.getInterval(h.cDef,i[r+1+v]);if(x==-1&&h.cDef[S+2]!=L[v]){m=!1;break}}if(m){var E=C.substLookupRecords;for(p=0;p<E.length;p+=2)E[p],E[p+1]}}}else if(s.ltype==6&&h.fmt==3){if(!e.U._glsCovered(i,h.backCvg,r-h.backCvg.length)||!e.U._glsCovered(i,h.inptCvg,r)||!e.U._glsCovered(i,h.ahedCvg,r+h.inptCvg.length))continue;var Z=h.lookupRec;for(T=0;T<Z.length;T+=2){x=Z[T];var U=a[Z[T+1]];e.U._applySubs(i,r+x,U,a)}}}}},e.U._glsCovered=function(i,r,s){for(var a=0;a<r.length;a++)if(e._lctf.coverageIndex(r[a],i[s+a])==-1)return!1;return!0},e.U.glyphsToPath=function(i,r,s){for(var a={cmds:[],crds:[]},l=0,c=0;c<r.length;c++){var u=r[c];if(u!=-1){for(var h=c<r.length-1&&r[c+1]!=-1?r[c+1]:0,d=e.U.glyphToPath(i,u),p=0;p<d.crds.length;p+=2)a.crds.push(d.crds[p]+l),a.crds.push(d.crds[p+1]);for(s&&a.cmds.push(s),p=0;p<d.cmds.length;p++)a.cmds.push(d.cmds[p]);s&&a.cmds.push("X"),l+=i.hmtx.aWidth[u],c<r.length-1&&(l+=e.U.getPairAdjustment(i,u,h))}}return a},e.U.P={},e.U.P.moveTo=function(i,r,s){i.cmds.push("M"),i.crds.push(r,s)},e.U.P.lineTo=function(i,r,s){i.cmds.push("L"),i.crds.push(r,s)},e.U.P.curveTo=function(i,r,s,a,l,c,u){i.cmds.push("C"),i.crds.push(r,s,a,l,c,u)},e.U.P.qcurveTo=function(i,r,s,a,l){i.cmds.push("Q"),i.crds.push(r,s,a,l)},e.U.P.closePath=function(i){i.cmds.push("Z")},e.U._drawCFF=function(i,r,s,a,l){for(var c=r.stack,u=r.nStems,h=r.haveWidth,d=r.width,p=r.open,g=0,_=r.x,m=r.y,f=0,v=0,x=0,b=0,y=0,T=0,C=0,L=0,S=0,E=0,Z={val:0,size:0};g<i.length;){e.CFF.getCharString(i,g,Z);var U=Z.val;if(g+=Z.size,U=="o1"||U=="o18")c.length%2!=0&&!h&&(d=c.shift()+a.nominalWidthX),u+=c.length>>1,c.length=0,h=!0;else if(U=="o3"||U=="o23")c.length%2!=0&&!h&&(d=c.shift()+a.nominalWidthX),u+=c.length>>1,c.length=0,h=!0;else if(U=="o4")c.length>1&&!h&&(d=c.shift()+a.nominalWidthX,h=!0),p&&e.U.P.closePath(l),m+=c.pop(),e.U.P.moveTo(l,_,m),p=!0;else if(U=="o5")for(;c.length>0;)_+=c.shift(),m+=c.shift(),e.U.P.lineTo(l,_,m);else if(U=="o6"||U=="o7")for(var P=c.length,D=U=="o6",B=0;B<P;B++){var q=c.shift();D?_+=q:m+=q,D=!D,e.U.P.lineTo(l,_,m)}else if(U=="o8"||U=="o24"){P=c.length;for(var re=0;re+6<=P;)f=_+c.shift(),v=m+c.shift(),x=f+c.shift(),b=v+c.shift(),_=x+c.shift(),m=b+c.shift(),e.U.P.curveTo(l,f,v,x,b,_,m),re+=6;U=="o24"&&(_+=c.shift(),m+=c.shift(),e.U.P.lineTo(l,_,m))}else{if(U=="o11")break;if(U=="o1234"||U=="o1235"||U=="o1236"||U=="o1237")U=="o1234"&&(v=m,x=(f=_+c.shift())+c.shift(),E=b=v+c.shift(),T=b,L=m,_=(C=(y=(S=x+c.shift())+c.shift())+c.shift())+c.shift(),e.U.P.curveTo(l,f,v,x,b,S,E),e.U.P.curveTo(l,y,T,C,L,_,m)),U=="o1235"&&(f=_+c.shift(),v=m+c.shift(),x=f+c.shift(),b=v+c.shift(),S=x+c.shift(),E=b+c.shift(),y=S+c.shift(),T=E+c.shift(),C=y+c.shift(),L=T+c.shift(),_=C+c.shift(),m=L+c.shift(),c.shift(),e.U.P.curveTo(l,f,v,x,b,S,E),e.U.P.curveTo(l,y,T,C,L,_,m)),U=="o1236"&&(f=_+c.shift(),v=m+c.shift(),x=f+c.shift(),E=b=v+c.shift(),T=b,C=(y=(S=x+c.shift())+c.shift())+c.shift(),L=T+c.shift(),_=C+c.shift(),e.U.P.curveTo(l,f,v,x,b,S,E),e.U.P.curveTo(l,y,T,C,L,_,m)),U=="o1237"&&(f=_+c.shift(),v=m+c.shift(),x=f+c.shift(),b=v+c.shift(),S=x+c.shift(),E=b+c.shift(),y=S+c.shift(),T=E+c.shift(),C=y+c.shift(),L=T+c.shift(),Math.abs(C-_)>Math.abs(L-m)?_=C+c.shift():m=L+c.shift(),e.U.P.curveTo(l,f,v,x,b,S,E),e.U.P.curveTo(l,y,T,C,L,_,m));else if(U=="o14"){if(c.length>0&&!h&&(d=c.shift()+s.nominalWidthX,h=!0),c.length==4){var $=c.shift(),z=c.shift(),K=c.shift(),N=c.shift(),W=e.CFF.glyphBySE(s,K),F=e.CFF.glyphBySE(s,N);e.U._drawCFF(s.CharStrings[W],r,s,a,l),r.x=$,r.y=z,e.U._drawCFF(s.CharStrings[F],r,s,a,l)}p&&(e.U.P.closePath(l),p=!1)}else if(U=="o19"||U=="o20")c.length%2!=0&&!h&&(d=c.shift()+a.nominalWidthX),u+=c.length>>1,c.length=0,h=!0,g+=u+7>>3;else if(U=="o21")c.length>2&&!h&&(d=c.shift()+a.nominalWidthX,h=!0),m+=c.pop(),_+=c.pop(),p&&e.U.P.closePath(l),e.U.P.moveTo(l,_,m),p=!0;else if(U=="o22")c.length>1&&!h&&(d=c.shift()+a.nominalWidthX,h=!0),_+=c.pop(),p&&e.U.P.closePath(l),e.U.P.moveTo(l,_,m),p=!0;else if(U=="o25"){for(;c.length>6;)_+=c.shift(),m+=c.shift(),e.U.P.lineTo(l,_,m);f=_+c.shift(),v=m+c.shift(),x=f+c.shift(),b=v+c.shift(),_=x+c.shift(),m=b+c.shift(),e.U.P.curveTo(l,f,v,x,b,_,m)}else if(U=="o26")for(c.length%2&&(_+=c.shift());c.length>0;)f=_,v=m+c.shift(),_=x=f+c.shift(),m=(b=v+c.shift())+c.shift(),e.U.P.curveTo(l,f,v,x,b,_,m);else if(U=="o27")for(c.length%2&&(m+=c.shift());c.length>0;)v=m,x=(f=_+c.shift())+c.shift(),b=v+c.shift(),_=x+c.shift(),m=b,e.U.P.curveTo(l,f,v,x,b,_,m);else if(U=="o10"||U=="o29"){var G=U=="o10"?a:s;if(c.length==0)console.debug("error: empty stack");else{var H=c.pop(),ee=G.Subrs[H+G.Bias];r.x=_,r.y=m,r.nStems=u,r.haveWidth=h,r.width=d,r.open=p,e.U._drawCFF(ee,r,s,a,l),_=r.x,m=r.y,u=r.nStems,h=r.haveWidth,d=r.width,p=r.open}}else if(U=="o30"||U=="o31"){var I=c.length,ie=(re=0,U=="o31");for(re+=I-(P=-3&I);re<P;)ie?(v=m,x=(f=_+c.shift())+c.shift(),m=(b=v+c.shift())+c.shift(),P-re==5?(_=x+c.shift(),re++):_=x,ie=!1):(f=_,v=m+c.shift(),x=f+c.shift(),b=v+c.shift(),_=x+c.shift(),P-re==5?(m=b+c.shift(),re++):m=b,ie=!0),e.U.P.curveTo(l,f,v,x,b,_,m),re+=4}else{if((U+"").charAt(0)=="o")throw console.debug("Unknown operation: "+U,i),U;c.push(U)}}}r.x=_,r.y=m,r.nStems=u,r.haveWidth=h,r.width=d,r.open=p};var t=e,n={Typr:t};return o.Typr=t,o.default=n,Object.defineProperty(o,"__esModule",{value:!0}),o}({}).Typr}/*!
Custom bundle of woff2otf (https://github.com/arty-name/woff2otf) with fflate
(https://github.com/101arrowz/fflate) for use in Troika text rendering. 
Original licenses apply: 
- fflate: https://github.com/101arrowz/fflate/blob/master/LICENSE (MIT)
- woff2otf.js: https://github.com/arty-name/woff2otf/blob/master/woff2otf.js (Apache2)
*/function H_(){return function(o){var e=Uint8Array,t=Uint16Array,n=Uint32Array,i=new e([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),r=new e([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),s=new e([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),a=function(U,P){for(var D=new t(31),B=0;B<31;++B)D[B]=P+=1<<U[B-1];var q=new n(D[30]);for(B=1;B<30;++B)for(var re=D[B];re<D[B+1];++re)q[re]=re-D[B]<<5|B;return[D,q]},l=a(i,2),c=l[0],u=l[1];c[28]=258,u[258]=28;for(var h=a(r,0)[0],d=new t(32768),p=0;p<32768;++p){var g=(43690&p)>>>1|(21845&p)<<1;g=(61680&(g=(52428&g)>>>2|(13107&g)<<2))>>>4|(3855&g)<<4,d[p]=((65280&g)>>>8|(255&g)<<8)>>>1}var _=function(U,P,D){for(var B=U.length,q=0,re=new t(P);q<B;++q)++re[U[q]-1];var $,z=new t(P);for(q=0;q<P;++q)z[q]=z[q-1]+re[q-1]<<1;if(D){$=new t(1<<P);var K=15-P;for(q=0;q<B;++q)if(U[q])for(var N=q<<4|U[q],W=P-U[q],F=z[U[q]-1]++<<W,G=F|(1<<W)-1;F<=G;++F)$[d[F]>>>K]=N}else for($=new t(B),q=0;q<B;++q)U[q]&&($[q]=d[z[U[q]-1]++]>>>15-U[q]);return $},m=new e(288);for(p=0;p<144;++p)m[p]=8;for(p=144;p<256;++p)m[p]=9;for(p=256;p<280;++p)m[p]=7;for(p=280;p<288;++p)m[p]=8;var f=new e(32);for(p=0;p<32;++p)f[p]=5;var v=_(m,9,1),x=_(f,5,1),b=function(U){for(var P=U[0],D=1;D<U.length;++D)U[D]>P&&(P=U[D]);return P},y=function(U,P,D){var B=P/8|0;return(U[B]|U[B+1]<<8)>>(7&P)&D},T=function(U,P){var D=P/8|0;return(U[D]|U[D+1]<<8|U[D+2]<<16)>>(7&P)},C=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],L=function(U,P,D){var B=new Error(P||C[U]);if(B.code=U,Error.captureStackTrace&&Error.captureStackTrace(B,L),!D)throw B;return B},S=function(U,P,D){var B=U.length;if(!B||D&&!D.l&&B<5)return P||new e(0);var q=!P||D,re=!D||D.i;D||(D={}),P||(P=new e(3*B));var $,z=function(_e){var Re=P.length;if(_e>Re){var Pe=new e(Math.max(2*Re,_e));Pe.set(P),P=Pe}},K=D.f||0,N=D.p||0,W=D.b||0,F=D.l,G=D.d,H=D.m,ee=D.n,I=8*B;do{if(!F){D.f=K=y(U,N,1);var ie=y(U,N+1,3);if(N+=3,!ie){var ue=U[(Se=(($=N)/8|0)+(7&$&&1)+4)-4]|U[Se-3]<<8,se=Se+ue;if(se>B){re&&L(0);break}q&&z(W+ue),P.set(U.subarray(Se,se),W),D.b=W+=ue,D.p=N=8*se;continue}if(ie==1)F=v,G=x,H=9,ee=5;else if(ie==2){var le=y(U,N,31)+257,oe=y(U,N+10,15)+4,be=le+y(U,N+5,31)+1;N+=14;for(var Ee=new e(be),Me=new e(19),Ae=0;Ae<oe;++Ae)Me[s[Ae]]=y(U,N+3*Ae,7);N+=3*oe;var Ie=b(Me),me=(1<<Ie)-1,we=_(Me,Ie,1);for(Ae=0;Ae<be;){var Se,de=we[y(U,N,me)];if(N+=15&de,(Se=de>>>4)<16)Ee[Ae++]=Se;else{var w=0,M=0;for(Se==16?(M=3+y(U,N,3),N+=2,w=Ee[Ae-1]):Se==17?(M=3+y(U,N,7),N+=3):Se==18&&(M=11+y(U,N,127),N+=7);M--;)Ee[Ae++]=w}}var V=Ee.subarray(0,le),J=Ee.subarray(le);H=b(V),ee=b(J),F=_(V,H,1),G=_(J,ee,1)}else L(1);if(N>I){re&&L(0);break}}q&&z(W+131072);for(var ce=(1<<H)-1,fe=(1<<ee)-1,R=N;;R=N){var Q=(w=F[T(U,N)&ce])>>>4;if((N+=15&w)>I){re&&L(0);break}if(w||L(2),Q<256)P[W++]=Q;else{if(Q==256){R=N,F=null;break}var j=Q-254;if(Q>264){var ye=i[Ae=Q-257];j=y(U,N,(1<<ye)-1)+c[Ae],N+=ye}var ge=G[T(U,N)&fe],Te=ge>>>4;if(ge||L(3),N+=15&ge,J=h[Te],Te>3&&(ye=r[Te],J+=T(U,N)&(1<<ye)-1,N+=ye),N>I){re&&L(0);break}q&&z(W+131072);for(var pe=W+j;W<pe;W+=4)P[W]=P[W-J],P[W+1]=P[W+1-J],P[W+2]=P[W+2-J],P[W+3]=P[W+3-J];W=pe}}D.l=F,D.p=R,D.b=W,F&&(K=1,D.m=H,D.d=G,D.n=ee)}while(!K);return W==P.length?P:function(_e,Re,Pe){(Re==null||Re<0)&&(Re=0),(Pe==null||Pe>_e.length)&&(Pe=_e.length);var ze=new(_e instanceof t?t:_e instanceof n?n:e)(Pe-Re);return ze.set(_e.subarray(Re,Pe)),ze}(P,0,W)},E=new e(0),Z=typeof TextDecoder<"u"&&new TextDecoder;try{Z.decode(E,{stream:!0})}catch{}return o.convert_streams=function(U){var P=new DataView(U),D=0;function B(){var le=P.getUint16(D);return D+=2,le}function q(){var le=P.getUint32(D);return D+=4,le}function re(le){ue.setUint16(se,le),se+=2}function $(le){ue.setUint32(se,le),se+=4}for(var z={signature:q(),flavor:q(),length:q(),numTables:B(),reserved:B(),totalSfntSize:q(),majorVersion:B(),minorVersion:B(),metaOffset:q(),metaLength:q(),metaOrigLength:q(),privOffset:q(),privLength:q()},K=0;Math.pow(2,K)<=z.numTables;)K++;K--;for(var N=16*Math.pow(2,K),W=16*z.numTables-N,F=12,G=[],H=0;H<z.numTables;H++)G.push({tag:q(),offset:q(),compLength:q(),origLength:q(),origChecksum:q()}),F+=16;var ee,I=new Uint8Array(12+16*G.length+G.reduce(function(le,oe){return le+oe.origLength+4},0)),ie=I.buffer,ue=new DataView(ie),se=0;return $(z.flavor),re(z.numTables),re(N),re(K),re(W),G.forEach(function(le){$(le.tag),$(le.origChecksum),$(F),$(le.origLength),le.outOffset=F,(F+=le.origLength)%4!=0&&(F+=4-F%4)}),G.forEach(function(le){var oe,be=U.slice(le.offset,le.offset+le.compLength);if(le.compLength!=le.origLength){var Ee=new Uint8Array(le.origLength);oe=new Uint8Array(be,2),S(oe,Ee)}else Ee=new Uint8Array(be);I.set(Ee,le.outOffset);var Me=0;(F=le.outOffset+le.origLength)%4!=0&&(Me=4-F%4),I.set(new Uint8Array(Me).buffer,le.outOffset+le.origLength),ee=F+Me}),ie.slice(0,ee)},Object.defineProperty(o,"__esModule",{value:!0}),o}({}).convert_streams}function W_(o,e){const t={M:2,L:2,Q:4,C:6,Z:0},n={C:"18g,ca,368,1kz",D:"17k,6,2,2+4,5+c,2+6,2+1,10+1,9+f,j+11,2+1,a,2,2+1,15+2,3,j+2,6+3,2+8,2,2,2+1,w+a,4+e,3+3,2,3+2,3+5,23+w,2f+4,3,2+9,2,b,2+3,3,1k+9,6+1,3+1,2+2,2+d,30g,p+y,1,1+1g,f+x,2,sd2+1d,jf3+4,f+3,2+4,2+2,b+3,42,2,4+2,2+1,2,3,t+1,9f+w,2,el+2,2+g,d+2,2l,2+1,5,3+1,2+1,2,3,6,16wm+1v",R:"17m+3,2,2,6+3,m,15+2,2+2,h+h,13,3+8,2,2,3+1,2,p+1,x,5+4,5,a,2,2,3,u,c+2,g+1,5,2+1,4+1,5j,6+1,2,b,2+2,f,2+1,1s+2,2,3+1,7,1ez0,2,2+1,4+4,b,4,3,b,42,2+2,4,3,2+1,2,o+3,ae,ep,x,2o+2,3+1,3,5+1,6",L:"x9u,jff,a,fd,jv",T:"4t,gj+33,7o+4,1+1,7c+18,2,2+1,2+1,2,21+a,2,1b+k,h,2u+6,3+5,3+1,2+3,y,2,v+q,2k+a,1n+8,a,p+3,2+8,2+2,2+4,18+2,3c+e,2+v,1k,2,5+7,5,4+6,b+1,u,1n,5+3,9,l+1,r,3+1,1m,5+1,5+1,3+2,4,v+1,4,c+1,1m,5+4,2+1,5,l+1,n+5,2,1n,3,2+3,9,8+1,c+1,v,1q,d,1f,4,1m+2,6+2,2+3,8+1,c+1,u,1n,3,7,6+1,l+1,t+1,1m+1,5+3,9,l+1,u,21,8+2,2,2j,3+6,d+7,2r,3+8,c+5,23+1,s,2,2,1k+d,2+4,2+1,6+a,2+z,a,2v+3,2+5,2+1,3+1,q+1,5+2,h+3,e,3+1,7,g,jk+2,qb+2,u+2,u+1,v+1,1t+1,2+6,9,3+a,a,1a+2,3c+1,z,3b+2,5+1,a,7+2,64+1,3,1n,2+6,2,2,3+7,7+9,3,1d+d,1,1+1,1s+3,1d,2+4,2,6,15+8,d+1,x+3,3+1,2+2,1l,2+1,4,2+2,1n+7,3+1,49+2,2+c,2+6,5,7,4+1,5j+1l,2+4,ek,3+1,r+4,1e+4,6+5,2p+c,1+3,1,1+2,1+b,2db+2,3y,2p+v,ff+3,30+1,n9x,1+2,2+9,x+1,29+1,7l,4,5,q+1,6,48+1,r+h,e,13+7,q+a,1b+2,1d,3+3,3+1,14,1w+5,3+1,3+1,d,9,1c,1g,2+2,3+1,6+1,2,17+1,9,6n,3,5,fn5,ki+f,h+f,5s,6y+2,ea,6b,46+4,1af+2,2+1,6+3,15+2,5,4m+1,fy+3,as+1,4a+a,4x,1j+e,1l+2,1e+3,3+1,1y+2,11+4,2+7,1r,d+1,1h+8,b+3,3,2o+2,3,2+1,7,4h,4+7,m+1,1m+1,4,12+6,4+4,5g+7,3+2,2,o,2d+5,2,5+1,2+1,6n+3,7+1,2+1,s+1,2e+7,3,2+1,2z,2,3+5,2,2u+2,3+3,2+4,78+8,2+1,75+1,2,5,41+3,3+1,5,x+9,15+5,3+3,9,a+5,3+2,1b+c,2+1,bb+6,2+5,2,2b+l,3+6,2+1,2+1,3f+5,4,2+1,2+6,2,21+1,4,2,9o+1,470+8,at4+4,1o+6,t5,1s+3,2a,f5l+1,2+3,43o+2,a+7,1+7,3+6,v+3,45+2,1j0+1i,5+1d,9,f,n+4,2+e,11t+6,2+g,3+6,2+1,2+4,7a+6,c6+3,15t+6,32+6,1,gzau,v+2n,3l+6n"},i=1,r=2,s=4,a=8,l=16,c=32;let u;function h(y){if(!u){const T={R:r,L:i,D:s,C:l,U:c,T:a};u=new Map;for(let C in n){let L=0;n[C].split(",").forEach(S=>{let[E,Z]=S.split("+");E=parseInt(E,36),Z=Z?parseInt(Z,36):0,u.set(L+=E,T[C]);for(let U=Z;U--;)u.set(++L,T[C])})}}return u.get(y)||c}const d=1,p=2,g=3,_=4,m=[null,"isol","init","fina","medi"];function f(y){const T=new Uint8Array(y.length);let C=c,L=d,S=-1;for(let E=0;E<y.length;E++){const Z=y.codePointAt(E);let U=h(Z)|0,P=d;U&a||(C&(i|s|l)?U&(r|s|l)?(P=g,(L===d||L===g)&&T[S]++):U&(i|c)&&(L===p||L===_)&&T[S]--:C&(r|c)&&(L===p||L===_)&&T[S]--,L=T[E]=P,C=U,S=E,Z>65535&&E++)}return T}function v(y,T){const C=[];for(let S=0;S<T.length;S++){const E=T.codePointAt(S);E>65535&&S++,C.push(o.U.codeToGlyph(y,E))}const L=y.GSUB;if(L){const{lookupList:S,featureList:E}=L;let Z;const U=/^(rlig|liga|mset|isol|init|fina|medi|half|pres|blws)$/,P=[];E.forEach(D=>{if(U.test(D.tag))for(let B=0;B<D.tab.length;B++){if(P[D.tab[B]])continue;P[D.tab[B]]=!0;const q=S[D.tab[B]],re=/^(isol|init|fina|medi)$/.test(D.tag);re&&!Z&&(Z=f(T));for(let $=0;$<C.length;$++)(!Z||!re||m[Z[$]]===D.tag)&&o.U._applySubs(C,$,q,S)}})}return C}function x(...y){for(let T=0;T<y.length;T++)if(typeof y[T]=="number")return y[T]}function b(y){const T=Object.create(null),C=y["OS/2"],L=y.hhea,S=y.head.unitsPerEm,E=x(C&&C.sTypoAscender,L&&L.ascender,S),Z={unitsPerEm:S,ascender:E,descender:x(C&&C.sTypoDescender,L&&L.descender,0),capHeight:x(C&&C.sCapHeight,E),xHeight:x(C&&C.sxHeight,E),lineGap:x(C&&C.sTypoLineGap,L&&L.lineGap),forEachGlyph(U,P,D,B){let q=0;const re=1/Z.unitsPerEm*P,$=v(y,U);let z=0,K=-1;return $.forEach((N,W)=>{if(N!==-1){let F=T[N];if(!F){const{cmds:G,crds:H}=o.U.glyphToPath(y,N);let ee="",I=0;for(let oe=0,be=G.length;oe<be;oe++){const Ee=t[G[oe]];ee+=G[oe];for(let Me=1;Me<=Ee;Me++)ee+=(Me>1?",":"")+H[I++]}let ie,ue,se,le;if(H.length){ie=ue=1/0,se=le=-1/0;for(let oe=0,be=H.length;oe<be;oe+=2){let Ee=H[oe],Me=H[oe+1];Ee<ie&&(ie=Ee),Me<ue&&(ue=Me),Ee>se&&(se=Ee),Me>le&&(le=Me)}}else ie=se=ue=le=0;F=T[N]={index:N,advanceWidth:y.hmtx.aWidth[N],xMin:ie,yMin:ue,xMax:se,yMax:le,path:ee,pathCommandCount:G.length}}K!==-1&&(q+=o.U.getPairAdjustment(y,K,N)*re),B.call(null,F,q,z),F.advanceWidth&&(q+=F.advanceWidth*re),D&&(q+=D*P),K=N}z+=U.codePointAt(z)>65535?2:1}),q}};return Z}return function(T){const C=new Uint8Array(T,0,4),L=o._bin.readASCII(C,0,4);if(L==="wOFF")T=e(T);else if(L==="wOF2")throw new Error("woff2 fonts not supported");return b(o.parse(T)[0])}}const j_=Yr({name:"Typr Font Parser",dependencies:[V_,H_,W_],init(o,e,t){const n=o(),i=e();return t(n,i)}}),zi={defaultFontURL:"https://fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu4mxM.woff",sdfGlyphSize:64,sdfMargin:1/16,sdfExponent:9,textureWidth:2048},X_=new Fe;function ki(){return(self.performance||Date).now()}const $c=Object.create(null);function Y_(o,e){o=K_({},o);const t=ki();if(o.font=Z_(o.font||zi.defaultFontURL),o.text=""+o.text,o.sdfGlyphSize=o.sdfGlyphSize||zi.sdfGlyphSize,o.colorRanges!=null){let h={};for(let d in o.colorRanges)if(o.colorRanges.hasOwnProperty(d)){let p=o.colorRanges[d];typeof p!="number"&&(p=X_.set(p).getHex()),h[d]=p}o.colorRanges=h}Object.freeze(o);const{textureWidth:n,sdfExponent:i}=zi,{sdfGlyphSize:r}=o,s=n/r*4;let a=$c[r];if(!a){const h=document.createElement("canvas");h.width=n,h.height=r*256/s,a=$c[r]={glyphCount:0,sdfGlyphSize:r,sdfCanvas:h,sdfTexture:new St(h,void 0,void 0,void 0,Ut,Ut),contextLost:!1,glyphsByFont:new Map},a.sdfTexture.generateMipmaps=!1,q_(a)}const{sdfTexture:l,sdfCanvas:c}=a;let u=a.glyphsByFont.get(o.font);u||a.glyphsByFont.set(o.font,u=new Map),J_(o).then(h=>{const{glyphIds:d,glyphPositions:p,fontSize:g,unitsPerEm:_,timings:m}=h,f=[],v=new Float32Array(d.length*4),x=g/_;let b=0,y=0;const T=ki();d.forEach((Z,U)=>{let P=u.get(Z);if(!P){const{path:re,pathBounds:$}=h.glyphData[Z],z=Math.max($[2]-$[0],$[3]-$[1])/r*(zi.sdfMargin*r+.5),K=a.glyphCount++,N=[$[0]-z,$[1]-z,$[2]+z,$[3]+z];u.set(Z,P={path:re,atlasIndex:K,sdfViewBox:N}),f.push(P)}const{sdfViewBox:D}=P,B=p[y++],q=p[y++];v[b++]=B+D[0]*x,v[b++]=q+D[1]*x,v[b++]=B+D[2]*x,v[b++]=q+D[3]*x,d[U]=P.atlasIndex}),m.quads=(m.quads||0)+(ki()-T);const C=ki();m.sdf={};const L=c.height,S=Math.ceil(a.glyphCount/s),E=Math.pow(2,Math.ceil(Math.log2(S*r)));E>L&&(console.info(`Increasing SDF texture size ${L}->${E}`),z_(c,n,E),l.dispose()),Promise.all(f.map(Z=>dh(Z,a,o.gpuAccelerateSDF).then(({timing:U})=>{m.sdf[Z.atlasIndex]=U}))).then(()=>{f.length&&!a.contextLost&&(fh(a),l.needsUpdate=!0),m.sdfTotal=ki()-C,m.total=ki()-t,e(Object.freeze({parameters:o,sdfTexture:l,sdfGlyphSize:r,sdfExponent:i,glyphBounds:v,glyphAtlasIndices:d,glyphColors:h.glyphColors,caretPositions:h.caretPositions,caretHeight:h.caretHeight,chunkedBounds:h.chunkedBounds,ascender:h.ascender,descender:h.descender,lineHeight:h.lineHeight,capHeight:h.capHeight,xHeight:h.xHeight,topBaseline:h.topBaseline,blockBounds:h.blockBounds,visibleBounds:h.visibleBounds,timings:h.timings}))})}),Promise.resolve().then(()=>{a.contextLost||G_(c)})}function dh({path:o,atlasIndex:e,sdfViewBox:t},{sdfGlyphSize:n,sdfCanvas:i,contextLost:r},s){if(r)return Promise.resolve({timing:-1});const{textureWidth:a,sdfExponent:l}=zi,c=Math.max(t[2]-t[0],t[3]-t[1]),u=Math.floor(e/4),h=u%(a/n)*n,d=Math.floor(u/(a/n))*n,p=e%4;return U_(n,n,o,t,c,l,i,h,d,p,s)}function q_(o){const e=o.sdfCanvas;e.addEventListener("webglcontextlost",t=>{console.log("Context Lost",t),t.preventDefault(),o.contextLost=!0}),e.addEventListener("webglcontextrestored",t=>{console.log("Context Restored",t),o.contextLost=!1;const n=[];o.glyphsByFont.forEach(i=>{i.forEach(r=>{n.push(dh(r,o,!0))})}),Promise.all(n).then(()=>{fh(o),o.sdfTexture.needsUpdate=!0})})}function K_(o,e){for(let t in e)e.hasOwnProperty(t)&&(o[t]=e[t]);return o}let Ds;function Z_(o){return Ds||(Ds=typeof document>"u"?{}:document.createElement("a")),Ds.href=o,Ds.href}function fh(o){if(typeof createImageBitmap!="function"){console.info("Safari<15: applying SDF canvas workaround");const{sdfCanvas:e,sdfTexture:t}=o,{width:n,height:i}=e,r=o.sdfCanvas.getContext("webgl");let s=t.image.data;(!s||s.length!==n*i*4)&&(s=new Uint8Array(n*i*4),t.image={width:n,height:i,data:s},t.flipY=!1,t.isDataTexture=!0),r.readPixels(0,0,n,i,r.RGBA,r.UNSIGNED_BYTE,s)}}const $_=Yr({name:"Typesetter",dependencies:[zi,j_,I_,T_],init(o,e,t,n){const{defaultFontURL:i}=o;return t(e,n(),{defaultFontURL:i})}}),J_=Yr({name:"Typesetter",dependencies:[$_],init(o){return function(e){return new Promise(t=>{o.typeset(e,t)})}},getTransferables(o){const e=[o.glyphPositions.buffer,o.glyphIds.buffer];return o.caretPositions&&e.push(o.caretPositions.buffer),o.glyphColors&&e.push(o.glyphColors.buffer),e}}),Jc={};function Q_(o){let e=Jc[o];if(!e){const t=new er(1,1,o,o),n=t.clone(),i=t.attributes,r=n.attributes,s=new mt,a=i.uv.count;for(let l=0;l<a;l++)r.position.array[l*3]*=-1,r.normal.array[l*3+2]*=-1;["position","normal","uv"].forEach(l=>{s.setAttribute(l,new wt([...i[l].array,...r[l].array],i[l].itemSize))}),s.setIndex([...t.index.array,...n.index.array.map(l=>l+a)]),s.translate(.5,.5,0),e=Jc[o]=s}return e}const ev="aTroikaGlyphBounds",Qc="aTroikaGlyphIndex",tv="aTroikaGlyphColor";class nv extends a_{constructor(){super(),this.detail=1,this.curveRadius=0,this.groups=[{start:0,count:1/0,materialIndex:0},{start:0,count:1/0,materialIndex:1}],this.boundingSphere=new vn,this.boundingBox=new _n}computeBoundingSphere(){}computeBoundingBox(){}setSide(e){const t=this.getIndex().count;this.setDrawRange(e===Nt?t/2:0,e===Zt?t:t/2)}set detail(e){if(e!==this._detail){this._detail=e,(typeof e!="number"||e<1)&&(e=1);let t=Q_(e);["position","normal","uv"].forEach(n=>{this.attributes[n]=t.attributes[n].clone()}),this.setIndex(t.getIndex().clone())}}get detail(){return this._detail}set curveRadius(e){e!==this._curveRadius&&(this._curveRadius=e,this._updateBounds())}get curveRadius(){return this._curveRadius}updateGlyphs(e,t,n,i,r){Za(this,ev,e,4),Za(this,Qc,t,1),Za(this,tv,r,3),this._blockBounds=n,this._chunkedBounds=i,this.instanceCount=t.length,this._updateBounds()}_updateBounds(){const e=this._blockBounds;if(e){const{curveRadius:t,boundingBox:n}=this;if(t){const{PI:i,floor:r,min:s,max:a,sin:l,cos:c}=Math,u=i/2,h=i*2,d=Math.abs(t),p=e[0]/d,g=e[2]/d,_=r((p+u)/h)!==r((g+u)/h)?-d:s(l(p)*d,l(g)*d),m=r((p-u)/h)!==r((g-u)/h)?d:a(l(p)*d,l(g)*d),f=r((p+i)/h)!==r((g+i)/h)?d*2:a(d-c(p)*d,d-c(g)*d);n.min.set(_,e[1],t<0?-f:0),n.max.set(m,e[3],t<0?0:f)}else n.min.set(e[0],e[1],0),n.max.set(e[2],e[3],0);n.getBoundingSphere(this.boundingSphere)}}applyClipRect(e){let t=this.getAttribute(Qc).count,n=this._chunkedBounds;if(n)for(let i=n.length;i--;){t=n[i].end;let r=n[i].rect;if(r[1]<e.w&&r[3]>e.y&&r[0]<e.z&&r[2]>e.x)break}this.instanceCount=t}}function Za(o,e,t,n){const i=o.getAttribute(e);t?i&&i.array.length===t.length?(i.array.set(t),i.needsUpdate=!0):(o.setAttribute(e,new po(t,n)),delete o._maxInstanceCount,o.dispose()):i&&o.deleteAttribute(e)}const iv=`
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
`,rv=`
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
`,sv=`
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
`,av=`
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
`;function ov(o){const e=yo(o,{chained:!0,extensions:{derivatives:!0},uniforms:{uTroikaSDFTexture:{value:null},uTroikaSDFTextureSize:{value:new Ne},uTroikaSDFGlyphSize:{value:0},uTroikaSDFExponent:{value:0},uTroikaTotalBounds:{value:new at(0,0,0,0)},uTroikaClipRect:{value:new at(0,0,0,0)},uTroikaDistanceOffset:{value:0},uTroikaOutlineOpacity:{value:0},uTroikaFillOpacity:{value:1},uTroikaPositionOffset:{value:new Ne},uTroikaCurveRadius:{value:0},uTroikaBlurRadius:{value:0},uTroikaStrokeWidth:{value:0},uTroikaStrokeColor:{value:new Fe},uTroikaStrokeOpacity:{value:1},uTroikaOrient:{value:new Ke},uTroikaUseGlyphColors:{value:!0},uTroikaSDFDebug:{value:!1}},vertexDefs:iv,vertexTransform:rv,fragmentDefs:sv,fragmentColorTransform:av,customRewriter({vertexShader:t,fragmentShader:n}){let i=/\buniform\s+vec3\s+diffuse\b/;return i.test(n)&&(n=n.replace(i,"varying vec3 vTroikaGlyphColor").replace(/\bdiffuse\b/g,"vTroikaGlyphColor"),i.test(t)||(t=t.replace(uh,`uniform vec3 diffuse;
$&
vTroikaGlyphColor = uTroikaUseGlyphColors ? aTroikaGlyphColor / 255.0 : diffuse;
`))),{vertexShader:t,fragmentShader:n}}});return e.transparent=!0,Object.defineProperties(e,{isTroikaTextMaterial:{value:!0},shadowSide:{get(){return this.side},set(){}}}),e}const Wo=new Rn({color:16777215,side:Zt,transparent:!0}),eu=8421504,tu=new Xe,Is=new k,$a=new k,Ar=[],lv=new k,Ja="+x+y";function nu(o){return Array.isArray(o)?o[0]:o}let ph=()=>{const o=new Mt(new er(1,1),Wo);return ph=()=>o,o},mh=()=>{const o=new Mt(new er(1,1,32,1),Wo);return mh=()=>o,o};const cv={type:"syncstart"},uv={type:"synccomplete"},gh=["font","fontSize","letterSpacing","lineHeight","maxWidth","overflowWrap","text","direction","textAlign","textIndent","whiteSpace","anchorX","anchorY","colorRanges","sdfGlyphSize"],hv=gh.concat("material","color","depthOffset","clipRect","curveRadius","orientation","glyphGeometryDetail");class Mo extends Mt{constructor(){const e=new nv;super(e,null),this.text="",this.anchorX=0,this.anchorY=0,this.curveRadius=0,this.direction="auto",this.font=null,this.fontSize=.1,this.letterSpacing=0,this.lineHeight="normal",this.maxWidth=1/0,this.overflowWrap="normal",this.textAlign="left",this.textIndent=0,this.whiteSpace="normal",this.material=null,this.color=null,this.colorRanges=null,this.outlineWidth=0,this.outlineColor=0,this.outlineOpacity=1,this.outlineBlur=0,this.outlineOffsetX=0,this.outlineOffsetY=0,this.strokeWidth=0,this.strokeColor=eu,this.strokeOpacity=1,this.fillOpacity=1,this.depthOffset=0,this.clipRect=null,this.orientation=Ja,this.glyphGeometryDetail=1,this.sdfGlyphSize=null,this.gpuAccelerateSDF=!0,this.debugSDF=!1}sync(e){this._needsSync&&(this._needsSync=!1,this._isSyncing?(this._queuedSyncs||(this._queuedSyncs=[])).push(e):(this._isSyncing=!0,this.dispatchEvent(cv),Y_({text:this.text,font:this.font,fontSize:this.fontSize||.1,letterSpacing:this.letterSpacing||0,lineHeight:this.lineHeight||"normal",maxWidth:this.maxWidth,direction:this.direction||"auto",textAlign:this.textAlign,textIndent:this.textIndent,whiteSpace:this.whiteSpace,overflowWrap:this.overflowWrap,anchorX:this.anchorX,anchorY:this.anchorY,colorRanges:this.colorRanges,includeCaretPositions:!0,sdfGlyphSize:this.sdfGlyphSize,gpuAccelerateSDF:this.gpuAccelerateSDF},t=>{this._isSyncing=!1,this._textRenderInfo=t,this.geometry.updateGlyphs(t.glyphBounds,t.glyphAtlasIndices,t.blockBounds,t.chunkedBounds,t.glyphColors);const n=this._queuedSyncs;n&&(this._queuedSyncs=null,this._needsSync=!0,this.sync(()=>{n.forEach(i=>i&&i())})),this.dispatchEvent(uv),e&&e()})))}onBeforeRender(e,t,n,i,r,s){this.sync(),r.isTroikaTextMaterial&&this._prepareForRender(r),r._hadOwnSide=r.hasOwnProperty("side"),this.geometry.setSide(r._actualSide=r.side),r.side=gn}onAfterRender(e,t,n,i,r,s){r._hadOwnSide?r.side=r._actualSide:delete r.side}dispose(){this.geometry.dispose()}get textRenderInfo(){return this._textRenderInfo||null}get material(){let e=this._derivedMaterial;const t=this._baseMaterial||this._defaultMaterial||(this._defaultMaterial=Wo.clone());if((!e||e.baseMaterial!==t)&&(e=this._derivedMaterial=ov(t),t.addEventListener("dispose",function n(){t.removeEventListener("dispose",n),e.dispose()})),this.outlineWidth||this.outlineBlur||this.outlineOffsetX||this.outlineOffsetY){let n=e._outlineMtl;return n||(n=e._outlineMtl=Object.create(e,{id:{value:e.id+.1}}),n.isTextOutlineMaterial=!0,n.depthWrite=!1,n.map=null,e.addEventListener("dispose",function i(){e.removeEventListener("dispose",i),n.dispose()})),[n,e]}else return e}set material(e){e&&e.isTroikaTextMaterial?(this._derivedMaterial=e,this._baseMaterial=e.baseMaterial):this._baseMaterial=e}get glyphGeometryDetail(){return this.geometry.detail}set glyphGeometryDetail(e){this.geometry.detail=e}get curveRadius(){return this.geometry.curveRadius}set curveRadius(e){this.geometry.curveRadius=e}get customDepthMaterial(){return nu(this.material).getDepthMaterial()}get customDistanceMaterial(){return nu(this.material).getDistanceMaterial()}_prepareForRender(e){const t=e.isTextOutlineMaterial,n=e.uniforms,i=this.textRenderInfo;if(i){const{sdfTexture:a,blockBounds:l}=i;n.uTroikaSDFTexture.value=a,n.uTroikaSDFTextureSize.value.set(a.image.width,a.image.height),n.uTroikaSDFGlyphSize.value=i.sdfGlyphSize,n.uTroikaSDFExponent.value=i.sdfExponent,n.uTroikaTotalBounds.value.fromArray(l),n.uTroikaUseGlyphColors.value=!t&&!!i.glyphColors;let c=0,u=0,h=0,d,p,g,_=0,m=0;if(t){let{outlineWidth:v,outlineOffsetX:x,outlineOffsetY:b,outlineBlur:y,outlineOpacity:T}=this;c=this._parsePercent(v)||0,u=Math.max(0,this._parsePercent(y)||0),d=T,_=this._parsePercent(x)||0,m=this._parsePercent(b)||0}else h=Math.max(0,this._parsePercent(this.strokeWidth)||0),h&&(g=this.strokeColor,n.uTroikaStrokeColor.value.set(g??eu),p=this.strokeOpacity,p==null&&(p=1)),d=this.fillOpacity;n.uTroikaDistanceOffset.value=c,n.uTroikaPositionOffset.value.set(_,m),n.uTroikaBlurRadius.value=u,n.uTroikaStrokeWidth.value=h,n.uTroikaStrokeOpacity.value=p,n.uTroikaFillOpacity.value=d??1,n.uTroikaCurveRadius.value=this.curveRadius||0;let f=this.clipRect;if(f&&Array.isArray(f)&&f.length===4)n.uTroikaClipRect.value.fromArray(f);else{const v=(this.fontSize||.1)*100;n.uTroikaClipRect.value.set(l[0]-v,l[1]-v,l[2]+v,l[3]+v)}this.geometry.applyClipRect(n.uTroikaClipRect.value)}n.uTroikaSDFDebug.value=!!this.debugSDF,e.polygonOffset=!!this.depthOffset,e.polygonOffsetFactor=e.polygonOffsetUnits=this.depthOffset||0;const r=t?this.outlineColor||0:this.color;if(r==null)delete e.color;else{const a=e.hasOwnProperty("color")?e.color:e.color=new Fe;(r!==a._input||typeof r=="object")&&a.set(a._input=r)}let s=this.orientation||Ja;if(s!==e._orientation){let a=n.uTroikaOrient.value;s=s.replace(/[^-+xyz]/g,"");let l=s!==Ja&&s.match(/^([-+])([xyz])([-+])([xyz])$/);if(l){let[,c,u,h,d]=l;Is.set(0,0,0)[u]=c==="-"?1:-1,$a.set(0,0,0)[d]=h==="-"?-1:1,tu.lookAt(lv,Is.cross($a),$a),a.setFromMatrix4(tu)}else a.identity();e._orientation=s}}_parsePercent(e){if(typeof e=="string"){let t=e.match(/^(-?[\d.]+)%$/),n=t?parseFloat(t[1]):NaN;e=(isNaN(n)?0:n/100)*this.fontSize}return e}localPositionToTextCoords(e,t=new Ne){t.copy(e);const n=this.curveRadius;return n&&(t.x=Math.atan2(e.x,Math.abs(n)-Math.abs(e.z))*Math.abs(n)),t}worldPositionToTextCoords(e,t=new Ne){return Is.copy(e),this.localPositionToTextCoords(this.worldToLocal(Is),t)}raycast(e,t){const{textRenderInfo:n,curveRadius:i}=this;if(n){const r=n.blockBounds,s=i?mh():ph(),a=s.geometry,{position:l,uv:c}=a.attributes;for(let u=0;u<c.count;u++){let h=r[0]+c.getX(u)*(r[2]-r[0]);const d=r[1]+c.getY(u)*(r[3]-r[1]);let p=0;i&&(p=i-Math.cos(h/i)*i,h=Math.sin(h/i)*i),l.setXYZ(u,h,d,p)}a.boundingSphere=this.geometry.boundingSphere,a.boundingBox=this.geometry.boundingBox,s.matrixWorld=this.matrixWorld,s.material.side=this.material.side,Ar.length=0,s.raycast(e,Ar);for(let u=0;u<Ar.length;u++)Ar[u].object=this,t.push(Ar[u])}}copy(e){const t=this.geometry;return super.copy(e),this.geometry=t,hv.forEach(n=>{this[n]=e[n]}),this}clone(){return new this.constructor().copy(this)}}gh.forEach(o=>{const e="_private_"+o;Object.defineProperty(Mo.prototype,o,{get(){return this[e]},set(t){t!==this[e]&&(this[e]=t,this._needsSync=!0)}})});function iu(o,e){if(e===_d)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),o;if(e===lo||e===Au){let t=o.getIndex();if(t===null){const s=[],a=o.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)s.push(l);o.setIndex(s),t=o.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),o}const n=t.count-2,i=[];if(e===lo)for(let s=1;s<=n;s++)i.push(t.getX(0)),i.push(t.getX(s)),i.push(t.getX(s+1));else for(let s=0;s<n;s++)s%2===0?(i.push(t.getX(s)),i.push(t.getX(s+1)),i.push(t.getX(s+2))):(i.push(t.getX(s+2)),i.push(t.getX(s+1)),i.push(t.getX(s)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=o.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),o}class dv extends Xr{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new _v(t)}),this.register(function(t){return new wv(t)}),this.register(function(t){return new Tv(t)}),this.register(function(t){return new Av(t)}),this.register(function(t){return new xv(t)}),this.register(function(t){return new yv(t)}),this.register(function(t){return new bv(t)}),this.register(function(t){return new Mv(t)}),this.register(function(t){return new gv(t)}),this.register(function(t){return new Sv(t)}),this.register(function(t){return new vv(t)}),this.register(function(t){return new pv(t)}),this.register(function(t){return new Ev(t)}),this.register(function(t){return new Cv(t)})}load(e,t,n,i){const r=this;let s;this.resourcePath!==""?s=this.resourcePath:this.path!==""?s=this.path:s=go.extractUrlBase(e),this.manager.itemStart(e);const a=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new sh(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,s,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const s={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===_h){try{s[Je.KHR_BINARY_GLTF]=new Lv(e)}catch(h){i&&i(h);return}r=JSON.parse(s[Je.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new Vv(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](c);a[h.name]=h,s[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const h=r.extensionsUsed[u],d=r.extensionsRequired||[];switch(h){case Je.KHR_MATERIALS_UNLIT:s[h]=new mv;break;case Je.KHR_DRACO_MESH_COMPRESSION:s[h]=new Rv(r,this.dracoLoader);break;case Je.KHR_TEXTURE_TRANSFORM:s[h]=new Pv;break;case Je.KHR_MESH_QUANTIZATION:s[h]=new Dv;break;default:d.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(s),c.setPlugins(a),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function fv(){let o={};return{get:function(e){return o[e]},add:function(e,t){o[e]=t},remove:function(e){delete o[e]},removeAll:function(){o={}}}}const Je={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class pv{constructor(e){this.parser=e,this.name=Je.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const u=new Fe(16777215);l.color!==void 0&&u.fromArray(l.color);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new r_(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new zo(u),c.distance=h;break;case"spot":c=new t_(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,zn(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class mv{constructor(){this.name=Je.KHR_MATERIALS_UNLIT}getMaterialType(){return Rn}extendParams(e,t,n){const i=[];e.color=new Fe(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const s=r.baseColorFactor;e.color.fromArray(s),e.opacity=s[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,nt))}return Promise.all(i)}}class gv{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class _v{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ci}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],s=i.extensions[this.name];if(s.clearcoatFactor!==void 0&&(t.clearcoat=s.clearcoatFactor),s.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",s.clearcoatTexture)),s.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=s.clearcoatRoughnessFactor),s.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",s.clearcoatRoughnessTexture)),s.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",s.clearcoatNormalTexture)),s.clearcoatNormalTexture.scale!==void 0)){const a=s.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ne(a,a)}return Promise.all(r)}}class vv{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ci}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],s=i.extensions[this.name];return s.iridescenceFactor!==void 0&&(t.iridescence=s.iridescenceFactor),s.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",s.iridescenceTexture)),s.iridescenceIor!==void 0&&(t.iridescenceIOR=s.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),s.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=s.iridescenceThicknessMinimum),s.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=s.iridescenceThicknessMaximum),s.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",s.iridescenceThicknessTexture)),Promise.all(r)}}class xv{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ci}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Fe(0,0,0),t.sheenRoughness=0,t.sheen=1;const s=i.extensions[this.name];return s.sheenColorFactor!==void 0&&t.sheenColor.fromArray(s.sheenColorFactor),s.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=s.sheenRoughnessFactor),s.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",s.sheenColorTexture,nt)),s.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",s.sheenRoughnessTexture)),Promise.all(r)}}class yv{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ci}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],s=i.extensions[this.name];return s.transmissionFactor!==void 0&&(t.transmission=s.transmissionFactor),s.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",s.transmissionTexture)),Promise.all(r)}}class bv{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ci}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],s=i.extensions[this.name];t.thickness=s.thicknessFactor!==void 0?s.thicknessFactor:0,s.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",s.thicknessTexture)),t.attenuationDistance=s.attenuationDistance||1/0;const a=s.attenuationColor||[1,1,1];return t.attenuationColor=new Fe(a[0],a[1],a[2]),Promise.all(r)}}class Mv{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ci}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class Sv{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ci}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],s=i.extensions[this.name];t.specularIntensity=s.specularFactor!==void 0?s.specularFactor:1,s.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",s.specularTexture));const a=s.specularColorFactor||[1,1,1];return t.specularColor=new Fe(a[0],a[1],a[2]),s.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",s.specularColorTexture,nt)),Promise.all(r)}}class wv{constructor(e){this.parser=e,this.name=Je.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],s=t.options.ktx2Loader;if(!s){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,s)}}class Tv{constructor(e){this.parser=e,this.name=Je.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const s=r.extensions[t],a=i.images[s.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,s.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Av{constructor(e){this.parser=e,this.name=Je.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const s=r.extensions[t],a=i.images[s.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,s.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Ev{constructor(e){this.name=Je.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),s=this.parser.options.meshoptDecoder;if(!s||!s.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const l=i.byteOffset||0,c=i.byteLength||0,u=i.count,h=i.byteStride,d=new Uint8Array(a,l,c);return s.decodeGltfBufferAsync?s.decodeGltfBufferAsync(u,h,d,i.mode,i.filter).then(function(p){return p.buffer}):s.ready.then(function(){const p=new ArrayBuffer(u*h);return s.decodeGltfBuffer(new Uint8Array(p),u,h,d,i.mode,i.filter),p})})}else return null}}class Cv{constructor(e){this.name=Je.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==qt.TRIANGLES&&c.mode!==qt.TRIANGLE_STRIP&&c.mode!==qt.TRIANGLE_FAN&&c.mode!==void 0)return null;const s=n.extensions[this.name].attributes,a=[],l={};for(const c in s)a.push(this.parser.getDependency("accessor",s[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const u=c.pop(),h=u.isGroup?u.children:[u],d=c[0].count,p=[];for(const g of h){const _=new Xe,m=new k,f=new en,v=new k(1,1,1),x=new G0(g.geometry,g.material,d);for(let b=0;b<d;b++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,b),l.ROTATION&&f.fromBufferAttribute(l.ROTATION,b),l.SCALE&&v.fromBufferAttribute(l.SCALE,b),x.setMatrixAt(b,_.compose(m,f,v));for(const b in l)b!=="TRANSLATION"&&b!=="ROTATION"&&b!=="SCALE"&&g.geometry.setAttribute(b,l[b]);ut.prototype.copy.call(x,g),this.parser.assignFinalMaterial(x),p.push(x)}return u.isGroup?(u.clear(),u.add(...p),u):p[0]}))}}const _h="glTF",Er=12,ru={JSON:1313821514,BIN:5130562};class Lv{constructor(e){this.name=Je.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Er),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==_h)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Er,r=new DataView(e,Er);let s=0;for(;s<i;){const a=r.getUint32(s,!0);s+=4;const l=r.getUint32(s,!0);if(s+=4,l===ru.JSON){const c=new Uint8Array(e,Er+s,a);this.content=n.decode(c)}else if(l===ru.BIN){const c=Er+s;this.body=e.slice(c,c+a)}s+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Rv{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Je.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,s=e.extensions[this.name].attributes,a={},l={},c={};for(const u in s){const h=So[u]||u.toLowerCase();a[h]=s[u]}for(const u in e.attributes){const h=So[u]||u.toLowerCase();if(s[u]!==void 0){const d=n.accessors[e.attributes[u]],p=ji[d.componentType];c[h]=p.name,l[h]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h){i.decodeDracoFile(u,function(d){for(const p in d.attributes){const g=d.attributes[p],_=l[p];_!==void 0&&(g.normalized=_)}h(d)},a,c)})})}}class Pv{constructor(){this.name=Je.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class Dv{constructor(){this.name=Je.KHR_MESH_QUANTIZATION}}class vh extends jr{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let s=0;s!==i;s++)t[s]=n[r+s];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,s=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=i-t,h=(n-t)/u,d=h*h,p=d*h,g=e*c,_=g-c,m=-2*p+3*d,f=p-d,v=1-m,x=f-d+h;for(let b=0;b!==a;b++){const y=s[_+b+a],T=s[_+b+l]*u,C=s[g+b+a],L=s[g+b]*u;r[b]=v*y+x*T+m*C+f*L}return r}}const Iv=new en;class Uv extends vh{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return Iv.fromArray(r).normalize().toArray(r),r}}const qt={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},ji={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},su={9728:pt,9729:Ut,9984:oo,9985:wu,9986:Fs,9987:ii},au={33071:$t,33648:Ws,10497:qi},Qa={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},So={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv2",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Gn={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Ov={CUBICSPLINE:void 0,LINEAR:Zi,STEP:Fr},eo={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Nv(o){return o.DefaultMaterial===void 0&&(o.DefaultMaterial=new Bo({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:gn})),o.DefaultMaterial}function Cr(o,e,t){for(const n in t.extensions)o[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function zn(o,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(o.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Fv(o,e,t){let n=!1,i=!1,r=!1;for(let c=0,u=e.length;c<u;c++){const h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(o);const s=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];if(n){const d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):o.attributes.position;s.push(d)}if(i){const d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):o.attributes.normal;a.push(d)}if(r){const d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):o.attributes.color;l.push(d)}}return Promise.all([Promise.all(s),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],d=c[2];return n&&(o.morphAttributes.position=u),i&&(o.morphAttributes.normal=h),r&&(o.morphAttributes.color=d),o.morphTargetsRelative=!0,o})}function kv(o,e){if(o.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)o.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(o.morphTargetInfluences.length===t.length){o.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)o.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Bv(o){const e=o.extensions&&o.extensions[Je.KHR_DRACO_MESH_COMPRESSION];let t;return e?t="draco:"+e.bufferView+":"+e.indices+":"+ou(e.attributes):t=o.indices+":"+ou(o.attributes)+":"+o.mode,t}function ou(o){let e="";const t=Object.keys(o).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+o[t[n]]+";";return e}function wo(o){switch(o){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Gv(o){return o.search(/\.jpe?g($|\?)/i)>0||o.search(/^data\:image\/jpeg/)===0?"image/jpeg":o.search(/\.webp($|\?)/i)>0||o.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const zv=new Xe;class Vv{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new fv,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,r=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,r=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||i&&r<98?this.textureLoader=new ah(this.options.manager):this.textureLoader=new o_(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new sh(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(s){return s._markDefs&&s._markDefs()}),Promise.all(this._invokeAll(function(s){return s.beforeRoot&&s.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(s){const a={scene:s[0][i.scene||0],scenes:s[0],animations:s[1],cameras:s[2],asset:i.asset,parser:n,userData:{}};Cr(r,a,i),zn(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const s=t[i].joints;for(let a=0,l=s.length;a<l;a++)e[s[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const s=e[i];s.mesh!==void 0&&(this._addNodeRef(this.meshCache,s.mesh),s.skin!==void 0&&(n[s.mesh].isSkinnedMesh=!0)),s.camera!==void 0&&this._addNodeRef(this.cameraCache,s.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(s,a)=>{const l=this.associations.get(s);l!=null&&this.associations.set(a,l);for(const[c,u]of s.children.entries())r(u,a.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,s){return n.getDependency(e,s)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Je.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,s){n.load(go.resolveURL(t.uri,i.path),r,void 0,function(){s(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const s=Qa[i.type],a=ji[i.componentType],l=i.normalized===!0,c=new a(i.count*s);return Promise.resolve(new Gt(c,s,l))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(s){const a=s[0],l=Qa[i.type],c=ji[i.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,d=i.byteOffset||0,p=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let _,m;if(p&&p!==h){const f=Math.floor(d/p),v="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+f+":"+i.count;let x=t.cache.get(v);x||(_=new c(a,f*p,i.count*p/u),x=new $u(_,p/u),t.cache.add(v,x)),m=new Gr(x,l,d%p/u,g)}else a===null?_=new c(i.count*l):_=new c(a,d,i.count*l),m=new Gt(_,l,g);if(i.sparse!==void 0){const f=Qa.SCALAR,v=ji[i.sparse.indices.componentType],x=i.sparse.indices.byteOffset||0,b=i.sparse.values.byteOffset||0,y=new v(s[1],x,i.sparse.count*f),T=new c(s[2],b,i.sparse.count*l);a!==null&&(m=new Gt(m.array.slice(),m.itemSize,m.normalized));for(let C=0,L=y.length;C<L;C++){const S=y[C];if(m.setX(S,T[C*l]),l>=2&&m.setY(S,T[C*l+1]),l>=3&&m.setZ(S,T[C*l+2]),l>=4&&m.setW(S,T[C*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,s=t.images[r];let a=this.textureLoader;if(s.uri){const l=n.manager.getHandler(s.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const i=this,r=this.json,s=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+s.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=s.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const d=(r.samplers||{})[s.sampler]||{};return u.magFilter=su[d.magFilter]||Ut,u.minFilter=su[d.minFilter]||ii,u.wrapS=au[d.wrapS]||qi,u.wrapT=au[d.wrapT]||qi,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const s=i.images[e],a=self.URL||self.webkitURL;let l=s.uri||"",c=!1;if(s.bufferView!==void 0)l=n.getDependency("bufferView",s.bufferView).then(function(h){c=!0;const d=new Blob([h],{type:s.mimeType});return l=a.createObjectURL(d),l});else if(s.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(h){return new Promise(function(d,p){let g=d;t.isImageBitmapLoader===!0&&(g=function(_){const m=new St(_);m.needsUpdate=!0,d(m)}),t.load(go.resolveURL(h,r.path),g,void 0,p)})}).then(function(h){return c===!0&&a.revokeObjectURL(l),h.userData.mimeType=s.mimeType||Gv(s.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(s){if(!s)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(s=s.clone(),s.channel=n.texCoord),r.extensions[Je.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[Je.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=r.associations.get(s);s=r.extensions[Je.KHR_TEXTURE_TRANSFORM].extendTexture(s,a),r.associations.set(s,l)}}return i!==void 0&&(s.encoding=i),e[t]=s,s})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,s=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new $s,Qt.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new nr,Qt.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||r||s){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),s&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),s&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Bo}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let s;const a={},l=r.extensions||{},c=[];if(l[Je.KHR_MATERIALS_UNLIT]){const h=i[Je.KHR_MATERIALS_UNLIT];s=h.getMaterialType(),c.push(h.extendParams(a,r,t))}else{const h=r.pbrMetallicRoughness||{};if(a.color=new Fe(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const d=h.baseColorFactor;a.color.fromArray(d),a.opacity=d[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,nt)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),s=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Zt);const u=r.alphaMode||eo.OPAQUE;if(u===eo.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===eo.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&s!==Rn&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Ne(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;a.normalScale.set(h,h)}return r.occlusionTexture!==void 0&&s!==Rn&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&s!==Rn&&(a.emissive=new Fe().fromArray(r.emissiveFactor)),r.emissiveTexture!==void 0&&s!==Rn&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,nt)),Promise.all(c).then(function(){const h=new s(a);return r.name&&(h.name=r.name),zn(h,r),t.associations.set(h,{materials:e}),r.extensions&&Cr(i,h,r),h})}createUniqueName(e){const t=st.sanitizeNodeName(e||"");let n=t;for(let i=1;this.nodeNamesUsed[n];++i)n=t+"_"+i;return this.nodeNamesUsed[n]=!0,n}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[Je.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return lu(l,a,t)})}const s=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=Bv(c),h=i[u];if(h)s.push(h.promise);else{let d;c.extensions&&c.extensions[Je.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=lu(new mt,c,t),i[u]={primitive:c,promise:d},s.push(d)}}return Promise.all(s)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],s=r.primitives,a=[];for(let l=0,c=s.length;l<c;l++){const u=s[l].material===void 0?Nv(this.cache):this.getDependency("material",s[l].material);a.push(u)}return a.push(t.loadGeometries(s)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let p=0,g=u.length;p<g;p++){const _=u[p],m=s[p];let f;const v=c[p];if(m.mode===qt.TRIANGLES||m.mode===qt.TRIANGLE_STRIP||m.mode===qt.TRIANGLE_FAN||m.mode===void 0)f=r.isSkinnedMesh===!0?new N0(_,v):new Mt(_,v),f.isSkinnedMesh===!0&&f.normalizeSkinWeights(),m.mode===qt.TRIANGLE_STRIP?f.geometry=iu(f.geometry,Au):m.mode===qt.TRIANGLE_FAN&&(f.geometry=iu(f.geometry,lo));else if(m.mode===qt.LINES)f=new js(_,v);else if(m.mode===qt.LINE_STRIP)f=new ti(_,v);else if(m.mode===qt.LINE_LOOP)f=new z0(_,v);else if(m.mode===qt.POINTS)f=new ko(_,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(f.geometry.morphAttributes).length>0&&kv(f,r),f.name=t.createUniqueName(r.name||"mesh_"+e),zn(f,r),m.extensions&&Cr(i,f,m),t.assignFinalMaterial(f),h.push(f)}for(let p=0,g=h.length;p<g;p++)t.associations.set(h[p],{meshes:e,primitives:p});if(h.length===1)return h[0];const d=new Et;t.associations.set(d,{meshes:e});for(let p=0,g=h.length;p<g;p++)d.add(h[p]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Ot(Ud.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Uo(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),zn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),s=i,a=[],l=[];for(let c=0,u=s.length;c<u;c++){const h=s[c];if(h){a.push(h);const d=new Xe;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Fo(a,l)})}loadAnimation(e){const n=this.json.animations[e],i=n.name?n.name:"animation_"+e,r=[],s=[],a=[],l=[],c=[];for(let u=0,h=n.channels.length;u<h;u++){const d=n.channels[u],p=n.samplers[d.sampler],g=d.target,_=g.node,m=n.parameters!==void 0?n.parameters[p.input]:p.input,f=n.parameters!==void 0?n.parameters[p.output]:p.output;g.node!==void 0&&(r.push(this.getDependency("node",_)),s.push(this.getDependency("accessor",m)),a.push(this.getDependency("accessor",f)),l.push(p),c.push(g))}return Promise.all([Promise.all(r),Promise.all(s),Promise.all(a),Promise.all(l),Promise.all(c)]).then(function(u){const h=u[0],d=u[1],p=u[2],g=u[3],_=u[4],m=[];for(let f=0,v=h.length;f<v;f++){const x=h[f],b=d[f],y=p[f],T=g[f],C=_[f];if(x===void 0)continue;x.updateMatrix();let L;switch(Gn[C.path]){case Gn.weights:L=zr;break;case Gn.rotation:L=oi;break;case Gn.position:case Gn.scale:default:L=Vr;break}const S=x.name?x.name:x.uuid,E=T.interpolation!==void 0?Ov[T.interpolation]:Zi,Z=[];Gn[C.path]===Gn.weights?x.traverse(function(P){P.morphTargetInfluences&&Z.push(P.name?P.name:P.uuid)}):Z.push(S);let U=y.array;if(y.normalized){const P=wo(U.constructor),D=new Float32Array(U.length);for(let B=0,q=U.length;B<q;B++)D[B]=U[B]*P;U=D}for(let P=0,D=Z.length;P<D;P++){const B=new L(Z[P]+"."+Gn[C.path],b.array,U,E);T.interpolation==="CUBICSPLINE"&&(B.createInterpolant=function(re){const $=this instanceof oi?Uv:vh;return new $(this.times,this.values,this.getValueSize()/3,re)},B.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0),m.push(B)}}return new q0(i,void 0,m)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const s=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&s.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),s})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),s=[],a=i.children||[];for(let c=0,u=a.length;c<u;c++)s.push(n.getDependency("node",a[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(s),l]).then(function(c){const u=c[0],h=c[1],d=c[2];d!==null&&u.traverse(function(p){p.isSkinnedMesh&&p.bind(d,zv)});for(let p=0,g=h.length;p<g;p++)u.add(h[p]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],s=r.name?i.createUniqueName(r.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(r.isBone===!0?u=new eh:c.length>1?u=new Et:c.length===1?u=c[0]:u=new ut,u!==c[0])for(let h=0,d=c.length;h<d;h++)u.add(c[h]);if(r.name&&(u.userData.name=r.name,u.name=s),zn(u,r),r.extensions&&Cr(n,u,r),r.matrix!==void 0){const h=new Xe;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return i.associations.has(u)||i.associations.set(u,{}),i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new Et;n.name&&(r.name=i.createUniqueName(n.name)),zn(r,n),n.extensions&&Cr(t,r,n);const s=n.nodes||[],a=[];for(let l=0,c=s.length;l<c;l++)a.push(i.getDependency("node",s[l]));return Promise.all(a).then(function(l){for(let u=0,h=l.length;u<h;u++)r.add(l[u]);const c=u=>{const h=new Map;for(const[d,p]of i.associations)(d instanceof Qt||d instanceof St)&&h.set(d,p);return u.traverse(d=>{const p=i.associations.get(d);p!=null&&h.set(d,p)}),h};return i.associations=c(r),r})}}function Hv(o,e,t){const n=e.attributes,i=new _n;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new k(l[0],l[1],l[2]),new k(c[0],c[1],c[2])),a.normalized){const u=wo(ji[a.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new k,l=new k;for(let c=0,u=r.length;c<u;c++){const h=r[c];if(h.POSITION!==void 0){const d=t.json.accessors[h.POSITION],p=d.min,g=d.max;if(p!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(g[2]))),d.normalized){const _=wo(ji[d.componentType]);l.multiplyScalar(_)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}o.boundingBox=i;const s=new vn;i.getCenter(s.center),s.radius=i.min.distanceTo(i.max)/2,o.boundingSphere=s}function lu(o,e,t){const n=e.attributes,i=[];function r(s,a){return t.getDependency("accessor",s).then(function(l){o.setAttribute(a,l)})}for(const s in n){const a=So[s]||s.toLowerCase();a in o.attributes||i.push(r(n[s],a))}if(e.indices!==void 0&&!o.index){const s=t.getDependency("accessor",e.indices).then(function(a){o.setIndex(a)});i.push(s)}return zn(o,e),Hv(o,e,t),Promise.all(i).then(function(){return e.targets!==void 0?Fv(o,e.targets,t):o})}function Wv(o){if(!(o.parent instanceof Zu)&&!o.name.includes("_masterGrp"))for(;o.parent instanceof Et;){if(o=o.parent,o.name.includes("_masterGrp"))break;if(o.name.includes("_parentGrp")){o=o.children.reduce((e,t)=>e.name.includes("_masterGrp")?e:t);break}}return o}function ta(){return`10000000-1000-4000-8000${-1e11}`.replace(/[018]/g,e=>{const t=parseInt(e);return(t^crypto.getRandomValues(new Uint8Array(1))[0]&15>>t/4).toString(16)})}function jv(o){const e=o.domElement,t=e.clientWidth,n=e.clientHeight,i=e.width!==t||e.height!==n;return i&&o.setSize(t,n,!1),i}const Xv=/(?<Front>^.*)(?<Back>[A-Z]\w.+)/,Yv=/(?<Front>[A-Za-z]+)?(?<Digits>[0-9*#+-]+)(?<Back>[A-Za-z]+)?/;function cu(o){return o.match(/(\d+)\D/)[0]}function To(o){return o.charAt(0).toUpperCase()+o.slice(1)}function uu(o){return o.split(/(?=[A-Z])/)}function Ao(o){let e=o.match(Yv);if(e||(e=o.match(Xv)),!e)return To(o);let t=1;return e[t]==null&&(t+=1),`${e[t].length==1?e[t]:To(e[t])} ${e[t+1]}`}function hu(o,e=!0,t=!1,n="<br>• "){return o=o.map((i,r)=>{const s=i.split(`
`);return t&&(s[0]=`${s[0]} <span class="year" style="font-size:.8rem; font-weight: normal;">(${t})</span>`),`${r!=0&&!e?"<br>":""}<span class="year">${s[0]}</span>${n}${s.slice(1).join(n)}`}),o}class qv{constructor(){xe(this,"_sprites")}build(e){this._sprites=e.map(t=>{const n=ve.SPRITE_LOAD();return n.name=`${t.data.name}_infoSprite`,t.object.parentGrp.add(n),[n,t]})}init(){this._sprites.forEach(([e,t])=>{const n=t.object.orbit&&t.object.orbit.scale.x>0?-1:1,i=t.drawRadius/6.5;e.scale.setScalar(i),e.position.copy(t.object.masterGrp.position).x+=(t.drawRadius+i)*n})}}class Kv{constructor(){xe(this,"panel");xe(this,"titleMain");xe(this,"titleSub");xe(this,"content");xe(this,"timeline");xe(this,"help");xe(this,"nav");xe(this,"navIcos");xe(this,"_spriteManager");xe(this,"_textMap");xe(this,"_fullText");xe(this,"_visible");xe(this,"_curContent");xe(this,"_curHighlight");this.panel=document.getElementById("infoPanel"),this.titleMain=document.getElementById("infoPanelMain"),this.titleSub=document.getElementById("infoPanelSub"),this.content=document.getElementById("infoPanelContent"),this.timeline=document.getElementById("infoPanelTimeline"),this.help=document.getElementById("infoPanelHelp"),this.nav=document.getElementById("infoPanelNav");const e=[];for(const t of this.nav.children)e.push(t),t.addEventListener("click",n=>{const i=n.target.getAttribute("data-id");this.updateContent(i)});this.navIcos=e,this._spriteManager=new qv,this._visible=!1,this._curContent=this.help,this._curHighlight=this.navIcos.find(t=>t.id.toLowerCase().includes("help"))}updateContent(e,t=!1){typeof e=="string"&&(e=document.getElementById(e)),this._curContent!=e&&(this._curContent=e,this._curHighlight=this.navIcos.find(n=>n.id.includes(this._curContent.id))),this.switchContent(),this.switchNavHighlight(),t&&(this.visible=!this.visible)}switchNavHighlight(){this.navIcos.forEach(e=>e.classList.remove("hover")),this._curHighlight.classList.add("hover")}switchContent(){this._curContent.scrollIntoView({behavior:"smooth",block:"end",inline:"nearest"})}set visible(e){this._visible=e,e?this.panel.style.left="0vw":this.panel.style.left="-55vw"}get visible(){return this._visible}showTimeline(e){if(this.visible=!0,this.writeTitle(e.data.name,e.data.parent||"Local Group"),e.data.name in this._textMap){this.writeTimelineText(this._textMap[e.data.name]);return}if(e.data.type=="sun"){this.writeTimelineText(this._fullText);return}}writeFullTimeline(e){this.writeTitle(e.name,"Local Group"),this.writeTimelineText(this._fullText)}init(e,t){this.genTexts(t);const n=e.flat.filter(i=>(i.data.name in this._textMap||i.data.type=="sun")&&i.object.displayInfo);n.length!=0&&(this._spriteManager.build(n),this._spriteManager.init())}genTexts(e){const t={};e.forEach(i=>{const r=hu(i.texts,!1);t[i.name]=r.join(`
\r`)}),this._textMap=t;const n=e.map(i=>hu(i.texts,!0,To(i.name))).flat().sort((i,r)=>{const s=parseInt(cu(uu(i)[0])),a=parseInt(cu(uu(r)[0]));return s-a});this._fullText=n.join("<br>")}writeTitle(e,t){this.titleMain.textContent=Ao(e),this.titleSub.textContent=Ao(t)}writeTimelineText(e){this.timeline.innerHTML=e}}class Zv{constructor(){xe(this,"_loading");xe(this,"_progress");xe(this,"onclick");xe(this,"_visible");this._loading=document.getElementById("loading"),this._progress=document.getElementById("progress")}get visible(){return this._visible}set visible(e){this._loading.style.visibility=e?"visible":"hidden",this._visible=e}set value(e){this._progress.value=e}}class $v{constructor(){xe(this,"infoPanel");xe(this,"progressPanel");xe(this,"cornerButton");xe(this,"homeBtn");xe(this,"zoomElement");this.infoPanel=new Kv,this.progressPanel=new Zv,this.cornerButton=new Jv,this.homeBtn=document.getElementById("home"),this.zoomElement=document.getElementById("zoomArea")}set zoomVisible(e){this.zoomElement.style.visibility=e?"visible":"hidden"}}class Jv{constructor(){xe(this,"container");xe(this,"forward");xe(this,"icons");xe(this,"cur");xe(this,"_tar");const e=[];for(const t of document.getElementsByClassName("cornerBtn"))e.push(t);this.icons=e,this.cur=e.find(t=>t.id=="help")}async clickHandler(e,t){switch(e.id){case"help":ve.UIMANAGER.infoPanel.updateContent(ve.UIMANAGER.infoPanel.help,!0);break;case"forward":{const n=e.getAttribute("data-target");if(!n)return;await t.switchSystem(n);break}}}show(e){e.style.translate="0"}hide(e){e.style.translate="-5vw"}showCurrent(){this.show(this.cur)}hideCurrent(){this.hide(this.cur)}set forwardTarget(e){if(this._tar==e)return;this._tar=e,this.icons.find(n=>n.id=="forward").setAttribute("data-target",this._tar)}switch(e){if(this.cur.id==e)return;const t=this.icons.find(n=>n.id==e);this.hide(this.cur),this.show(t),this.cur=t}}const zs=new rh;zs.onError=function(o){console.error("There was an error loading "+o)};const Qv={DISTANCE_SCALE:1e5,SIZE_SCALE:100,ORB_SCALE:1e6,ROT_SCALE:1e4,CAM_ROT_SPEED:Math.PI/64,_time_scale:1,get TIME_SCALE(){return this._time_scale},set TIME_SCALE(o){this.ROT_SCALE=o,this.ORB_SCALE=o,this._time_scale=o},CELESTIAL_ORB:!0,MAN_CELESTIAL_ORB:!1,GLTF_LOADER:new dv(zs),TEX_LOADER:new ah(zs),TEX_LOAD(o){return o in to||(to[o]=this.TEX_LOADER.load(o)),to[o]},SPRITE_LOAD(o="./circle-info-solid.svg"){const e=this.TEX_LOAD(o),t=new No({map:e,transparent:!0});return new Qu(t)},LOAD_MANAGER:zs,UIMANAGER:new $v,WORLD_POS:new k,CAM_POS:new k,WORLD_QUAT:new en,WORLD_QUAT2:new en},to={},ve=Qv;class xh{constructor(e){xe(this,"name");xe(this,"topGrp");xe(this,"tree");xe(this,"_flat");xe(this,"isSingleSun");xe(this,"radius");xe(this,"startTarget");this.tree=e.tree,this.name=e.name,this.isSingleSun=e.isSingleSun,this.topGrp=new Et,this.tree.forEach(t=>this.topGrp.add(t.object.parentGrp)),this._flat=e.flat,this.radius=this.getRadius(),this.startTarget=e.startTarget}getRadius(){return this.mainSequenceObjects().reduce((e,t)=>e.dist>t.dist?e:t).dist}getById(e){return this._flat.reduce((t,n)=>t.data.id===e?t:n)}get flat(){return this._flat}oortCloud(){return this._flat.reduce((e,t)=>e.data.type==="oortcloud"?e:t)}suns(){return this._flat.filter(e=>e.data.type.includes("sun"))}mainSequenceObjects(){return this._flat.filter(e=>e.data.type.includes("sun")||e.data.type.includes("planet")||e.data.type.includes("moon"))}initWorld(e,t=!1){this.init();const n=this._flat.find(i=>i.data.name==this.startTarget);n&&(e.cam.setFollowTarget(n),t?e.cam.activateFree():e.cam.activateThird())}init(){this.radius=this.getRadius();const e=this.oortCloud().distanceEnd/ve.DISTANCE_SCALE;this.suns().forEach(t=>t.lightRadius=e),this.tree.forEach(t=>t.init())}update(e){this.tree.forEach(t=>t.update(e))}}const Or=Math.PI/180;function du(o,e,t){return Math.max(e,Math.min(t,o))}function fu(o,e,t,n,i){return n+(o-e)*(i-n)/(t-e)}function no(o,e){return o+Math.random()*(e-o)}class na{constructor(e){xe(this,"name");xe(this,"type");xe(this,"tilt");xe(this,"parent");xe(this,"radius");xe(this,"orbitalPeriod");xe(this,"rotationPeriod");xe(this,"distanceToParent");xe(this,"angularRotVel");xe(this,"angularOrbVel");xe(this,"drawRadius");xe(this,"texts");xe(this,"id");this.id=e.id,this.name=e.name,this.type=e.type,this.texts=e.texts,this.radius=e.radius||1,this.tilt=e.tilt||0,this.parent=e.parent,this.orbitalPeriod=e.orbitalPeriod||1,this.rotationPeriod=e.rotationPeriod||1,this.distanceToParent=e.distanceToParent||0,this.drawRadius=e.drawRadius;let t=this.rotationPeriod*60*60;this.angularRotVel=2*Math.PI/t,t=this.orbitalPeriod*60*60,this.angularOrbVel=2*Math.PI/t}invertAngularRotVel(){this.angularRotVel*=-1}invertAngularOrbVel(){this.angularOrbVel*=-1}get dist(){return this.distanceToParent?this.distanceToParent/ve.DISTANCE_SCALE:null}}class ia{constructor(e){xe(this,"parentGrp");xe(this,"masterGrp");xe(this,"meshGrp");xe(this,"atmo");xe(this,"mesh");xe(this,"orbit");xe(this,"markerSprite");xe(this,"displayInfo");this.parentGrp=e.parentGrp,this.masterGrp=e.masterGrp,this.meshGrp=e.meshGrp,this.atmo=e.atmo,this.mesh=e.mesh,this.orbit=e.orbit,this.markerSprite=e.markerSprite,this.displayInfo=e.displayInfo==null?!0:e.displayInfo}}class ra{constructor(e){xe(this,"data");xe(this,"object");xe(this,"satellites");this.data=e.data,this.object=e.object,this.satellites=e.satellites}initSatellites(e){var t;(t=this.satellites)==null||t.forEach(n=>n.init(e))}updateSatellites(e,t){var n;(n=this.satellites)==null||n.forEach(i=>i.update(e,t))}get drawRadius(){return this.data.radius/ve.SIZE_SCALE}get dist(){return this.data.distanceToParent?this.data.distanceToParent/ve.DISTANCE_SCALE:void 0}}class ex extends ra{constructor(t,n){super(t);xe(this,"light");xe(this,"lightRadius");xe(this,"disableLight");this.disableLight=n,n||(this.lightRadius=1,this.light=new zo("#ffffff",1,this.lightRadius),this.light.castShadow=!0,this.light.shadow.radius=4,this.light.shadow.camera.near=.5,this.light.shadow.camera.far=1e5,this.light.shadow.mapSize.width=2048,this.light.shadow.mapSize.height=2048,this.object.masterGrp.add(this.light))}init(){this.object.masterGrp.traverse(t=>t.userData.id=this.data.id),this.disableLight||(this.light.distance=this.lightRadius),this.initSatellites(this)}update(t){"uniforms"in this.object.mesh.material&&(this.object.mesh.material.uniforms.time.value+=.001),this.updateSatellites(t,this)}}const tx=`// Code from:
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
`,nx=`#include <common>
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
}`,ix=new Js(1,30,30);function yh(o){ve.LOAD_MANAGER.itemStart(`://${o.name}_planet`);const e=rx(o),t=new Mt(ix,e);t.scale.setScalar(o.radius/ve.SIZE_SCALE),t.name=`${o.name}_mesh`;const n=new Et;n.name=`${o.name}_meshGrp`,n.add(t);const i=new Et,r=new Et;i.name=`${o.name}_masterGrp`,r.name=`${o.name}_parentGrp`,i.add(n),r.add(i);const s=new na({id:ta(),name:o.name,type:o.type,tilt:o.tilt,parent:o.parent,radius:o.radius,texts:o.texts,orbitalPeriod:o.orbitalPeriod,rotationPeriod:o.rotationPeriod,distanceToParent:o.distanceToParent,drawRadius:o.draw.radius}),a=new ia({parentGrp:r,masterGrp:i,meshGrp:n,mesh:t,displayInfo:o.displayInfo}),l=new ex({data:s,object:a},o.disableLight);return ve.LOAD_MANAGER.itemEnd(`://${o.name}_planet`),l}const rx=o=>o.isSimple?new Rn({color:o.color?o.color:16777215}):new cn({uniforms:{time:{value:1},scale:{value:2.5},highTemp:{value:o.highTemp},lowTemp:{value:o.lowTemp}},vertexShader:nx,fragmentShader:tx,depthWrite:!0,depthTest:!0,transparent:!1}),sx=new nr({color:"#ffffff",transparent:!0,opacity:.2}),ax=new nr({color:"#ffffff",transparent:!0,opacity:.075}),Us=new mt,pu=[],mu=[],ox=new k(0,0,0),lx=[{isSimple:!1,color:"red",name:"epsilonEridani",radius:2200,hTemp:5e3,lTemp:4e3,texts:["Yellowstone [GRUBS]","- Marcos Eye","Tangerine Dream","Conjoiner Nest","- Conjoiner Comet"]},{isSimple:!1,color:"red",name:"pEridani",radius:2200,hTemp:5100,lTemp:1500,texts:["Ararat [PATTERN JUGGLERS, NESTBUILDERS]"]},{isSimple:!1,color:"red",name:"deltaPavonis",radius:3600,hTemp:7e3,lTemp:3e3,texts:["Resurgam [AMARATIN]","Hades [HADES MATRIX CIVILISATION]","- Cerberus [INHIBITORS, AMARATIN, CERBERUS CIVILISATION]","ROC"]},{isSimple:!1,color:"red",name:"lacaille9352",radius:2e3,hTemp:4e3,lTemp:3e3,texts:["Fand"]},{isSimple:!1,color:"red",name:"luyten726-8",radius:500,hTemp:2e3,lTemp:900,texts:["Luyten 726-8 Cometary Halo"]},{isSimple:!1,color:"red",name:"ross248",radius:1e3,hTemp:2e3,lTemp:900,texts:["Diadem"]},{isSimple:!1,color:"red",name:"61Cygni",radius:2e3,hTemp:3e3,lTemp:500,texts:["Sky's Edge"]},{isSimple:!1,color:"red",name:"lalande21185",radius:1250,hTemp:3e3,lTemp:500,texts:["Zion"]},{isSimple:!1,color:"red",name:"gliese687",radius:1560,hTemp:3e3,lTemp:500,texts:["Haven"]},{isSimple:!1,color:"red",name:"groombridge1618",radius:1450,hTemp:5e3,lTemp:500,texts:["Turquoise [PATTERN JUGGLERS]"]},{isSimple:!1,color:"red",name:"107Piscium",radius:3e3,hTemp:1e4,lTemp:500,texts:["Haldora [SHADOWS]","- Hela [SCUTTLERS, NESTBUILDERS(?)]"]}],cx=[{x:1e3,y:300,rotY:Math.PI*2.1,textsHeight:250},{x:1200,y:2e3,rotY:Math.PI*-1.9*-1,textsHeight:60},{x:750,y:2150,rotY:Math.PI/2*-1,textsHeight:175},{x:1e3,y:800,rotY:Math.PI*1.65,textsHeight:60},{x:800,y:500,rotY:Math.PI*1.9,textsHeight:60},{x:834,y:-800,rotY:Math.PI*1.72,textsHeight:60},{x:626,y:-1e3,rotY:Math.PI*1.578,textsHeight:80},{x:550,y:-800,rotY:Math.PI*.75,textsHeight:70},{x:400,y:-1900,rotY:Math.PI*1.3,textsHeight:70},{x:857,y:-1734,rotY:Math.PI*.689,textsHeight:-70},{x:2222,y:-1200,rotY:Math.PI*-.1,textsHeight:125}];let Os;class bt extends xh{constructor(t){super(t);xe(this,"_mainArea");xe(this,"_textArea");this.name="cosmicMap",this._mainArea=document.getElementById("cosmicMapTItle"),this._textArea=document.getElementById("cosmicTextArea"),this._mainArea.ontransitionend=n=>{const i=n.target.style.visibility;n.target.style.visibility=i=="visible"?"hidden":"visible"}}set textOpacity(t){this._mainArea.style.opacity=t.toString(),this._mainArea.style.visibility=t<=0?"hidden":"visible"}update(t){super.update(t);let n=t.cam.active.position.distanceTo(ox);n=du(n,8e3,1e4),n=fu(n,8e3,1e4,0,1),this.textOpacity!=n&&(this.textOpacity=n),n?ve.UIMANAGER.cornerButton.hideCurrent():ve.UIMANAGER.cornerButton.showCurrent(),n==1?this._textArea.style.pointerEvents="auto":this._textArea.style.pointerEvents="none",t.raycaster.setFromCamera(new Ne(0,0),t.cam.active);const i=t.raycaster.intersectObjects(t.curSystem.topGrp.children),r=16;if(i.length!=0){const s=i[0];let a;if(Os&&s.object.userData.id===Os.data.id?a=Os:(a=this.getById(s.object.userData.id),Os=a),!a)return;const[l,c]=[a.drawRadius*(r*.5),a.drawRadius*r];n=du(s.distance,l,c),n=fu(n,l,c,1,0),n?(()=>{ve.UIMANAGER.cornerButton.forwardTarget=a.data.name,ve.UIMANAGER.cornerButton.switch("forward")})():ve.UIMANAGER.cornerButton.switch("help")}}static buildSun(t){return yh({name:t.name,type:"sun",radius:t.radius,rotationPeriod:0,orbitalPeriod:0,highTemp:t.hTemp,lowTemp:t.lTemp,distanceToParent:1,tilt:0,parent:"",draw:{radius:1},isSimple:t.isSimple,color:t.color,disableLight:!0,texts:t.texts,displayInfo:!1})}static buildLine(t,n,i){(i?pu:mu).push(t.clone(),n.clone())}static buildDiskLine(t,n){t.object.masterGrp.position.x-=n.x,t.object.masterGrp.position.y-=n.y,t.object.parentGrp.rotateY(n.rotY),t.object.masterGrp.getWorldPosition(ve.WORLD_POS);const i=ve.WORLD_POS.clone();return i.y+=n.y,bt.buildLine(ve.WORLD_POS.clone(),i,!0)}static buildObjectLine(t,n){const i=t.object.masterGrp.getWorldPosition(ve.WORLD_POS).clone(),r=n.object.masterGrp.getWorldPosition(ve.WORLD_POS);return bt.buildLine(i,r,!1)}static buildText(t,n,i=25,r,s=50,a,l){const c=t.object.masterGrp.getWorldPosition(ve.WORLD_POS);c.x-=n;const u=new Mo;return u.text=r??Ao(t.data.name),u.fontSize=s,u.color=16777215,u.rotateY(a??Math.PI*.85),u.position.copy(c),u.position.y+=i,u.fillOpacity=l??1,u.font="./Open_Sans/static/OpenSans-Light.ttf",u.name=`${t.data.name}_text`,u}static buildLyRings(t){const i=[];for(let _=0;_<=360;_++)i.push(new k(100*Math.sin(_*Or),0,100*Math.cos(_*Or)));const s=new mt;s.setFromPoints(i);const a=new nr({color:"#ffffff",transparent:!0,opacity:.45}),l=new ti(s,a),c=s.clone();c.scale(5,1,5);const u=new ti(c,a),h=s.clone();h.scale(15,1,15);const d=new ti(h,a);l.userData.title="1LY",u.userData.title="5LY",d.userData.title="15LY";const p=[[l,1],[u,5],[d,15]],g=40;p.forEach(_=>{const m=_[0],f=_[1],v=new Mo;v.text=m.userData.title,v.fontSize=g,v.color=16777215,v.position.x+=100*f+g+10,v.position.y+=g,v.rotateY(Math.PI),m.add(v)}),t.object.masterGrp.add(l),t.object.masterGrp.add(u),t.object.masterGrp.add(d)}static setupSun(t,n,i){bt.buildDiskLine(n,i),t.topGrp.add(bt.buildText(n,30)),t.topGrp.add(bt.buildText(n,10,i.textsHeight!=null?i.textsHeight:250,n.data.texts.join(`
`),27.5,Math.PI,.35))}static connectSuns(t,n){n.forEach(i=>bt.buildObjectLine(t,i))}static build(){const t=bt.buildSun({name:"sol",radius:3e3,hTemp:7100,lTemp:3100});bt.buildLyRings(t);const n=lx.map(l=>bt.buildSun(l)),i=[t,...n],r={tree:i,flat:i,isSingleSun:!0,name:"cosmicMap",startTarget:"sol"},s=new bt(r);s.topGrp.add(bt.buildText(t,30)),s.topGrp.add(bt.buildText(t,-25,-50,["Earth","- Moon","Mars","- Phobos","Europa"].join(`
`),27.5,Math.PI,.35)),cx.forEach((l,c)=>bt.setupSun(s,n[c],l)),bt.connectSuns(t,n.filter(l=>["Ross 248","61 Cygni"].includes(l.data.name))),bt.connectSuns(n.reduce((l,c)=>l.data.name=="p Eridani"?l:c),n.filter(l=>["Delta Pavonis"].includes(l.data.name))),bt.connectSuns(n.reduce((l,c)=>l.data.name=="Epsilon Eridani"?l:c),n.filter(l=>["p Eridani","Delta Pavonis","61 Cygni","107 Piscium"].includes(l.data.name))),Us.setFromPoints(pu),t.object.parentGrp.add(new js(Us.clone(),sx)),Us.setFromPoints(mu),t.object.parentGrp.add(new js(Us,ax));const a=new zo("#ffffff",1,1e3);return a.castShadow=!0,a.shadow.radius=4,a.shadow.camera.near=.5,a.shadow.camera.far=1e5,a.shadow.mapSize.width=2048,a.shadow.mapSize.height=2048,s.topGrp.add(a),s}}/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.18.1
 * @author George Michael Brower
 * @license MIT
 */class mn{constructor(e,t,n,i,r="div"){this.parent=e,this.object=t,this.property=n,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement("div"),this.domElement.classList.add("controller"),this.domElement.classList.add(i),this.$name=document.createElement("div"),this.$name.classList.add("name"),mn.nextNameID=mn.nextNameID||0,this.$name.id=`lil-gui-name-${++mn.nextNameID}`,this.$widget=document.createElement(r),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(n)}name(e){return this._name=e,this.$name.innerHTML=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled?this:(this._disabled=e,this.domElement.classList.toggle("disabled",e),this.$disable.toggleAttribute("disabled",e),this)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(e){const t=this.parent.add(this.object,this.property,e);return t.name(this._name),this.destroy(),t}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.object[this.property]=e,this._callOnChange(),this.updateDisplay(),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class ux extends mn{constructor(e,t,n){super(e,t,n,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function Eo(o){let e,t;return(e=o.match(/(#|0x)?([a-f0-9]{6})/i))?t=e[2]:(e=o.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?t=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=o.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(t=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),t?"#"+t:!1}const hx={isPrimitive:!0,match:o=>typeof o=="string",fromHexString:Eo,toHexString:Eo},Hr={isPrimitive:!0,match:o=>typeof o=="number",fromHexString:o=>parseInt(o.substring(1),16),toHexString:o=>"#"+o.toString(16).padStart(6,0)},dx={isPrimitive:!1,match:o=>Array.isArray(o),fromHexString(o,e,t=1){const n=Hr.fromHexString(o);e[0]=(n>>16&255)/255*t,e[1]=(n>>8&255)/255*t,e[2]=(n&255)/255*t},toHexString([o,e,t],n=1){n=255/n;const i=o*n<<16^e*n<<8^t*n<<0;return Hr.toHexString(i)}},fx={isPrimitive:!1,match:o=>Object(o)===o,fromHexString(o,e,t=1){const n=Hr.fromHexString(o);e.r=(n>>16&255)/255*t,e.g=(n>>8&255)/255*t,e.b=(n&255)/255*t},toHexString({r:o,g:e,b:t},n=1){n=255/n;const i=o*n<<16^e*n<<8^t*n<<0;return Hr.toHexString(i)}},px=[hx,Hr,dx,fx];function mx(o){return px.find(e=>e.match(o))}class gx extends mn{constructor(e,t,n,i){super(e,t,n,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=mx(this.initialValue),this._rgbScale=i,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const r=Eo(this.$text.value);r&&this._setValueFromHexString(r)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){const t=this._format.fromHexString(e);this.setValue(t)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class io extends mn{constructor(e,t,n){super(e,t,n,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",i=>{i.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class _x extends mn{constructor(e,t,n,i,r,s){super(e,t,n,"number"),this._initInput(),this.min(i),this.max(r);const a=s!==void 0;this.step(a?s:this._getImplicitStep(),a),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,t=!0){return this._step=e,this._stepExplicit=t,this}updateDisplay(){const e=this.getValue();if(this._hasSlider){let t=(e-this._min)/(this._max-this._min);t=Math.max(0,Math.min(t,1)),this.$fill.style.width=t*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$disable=this.$input;const e=()=>{let f=parseFloat(this.$input.value);isNaN(f)||(this._stepExplicit&&(f=this._snap(f)),this.setValue(this._clamp(f)))},t=f=>{const v=parseFloat(this.$input.value);isNaN(v)||(this._snapClampSetValue(v+f),this.$input.value=this.getValue())},n=f=>{f.code==="Enter"&&this.$input.blur(),f.code==="ArrowUp"&&(f.preventDefault(),t(this._step*this._arrowKeyMultiplier(f))),f.code==="ArrowDown"&&(f.preventDefault(),t(this._step*this._arrowKeyMultiplier(f)*-1))},i=f=>{this._inputFocused&&(f.preventDefault(),t(this._step*this._normalizeMouseWheel(f)))};let r=!1,s,a,l,c,u;const h=5,d=f=>{s=f.clientX,a=l=f.clientY,r=!0,c=this.getValue(),u=0,window.addEventListener("mousemove",p),window.addEventListener("mouseup",g)},p=f=>{if(r){const v=f.clientX-s,x=f.clientY-a;Math.abs(x)>h?(f.preventDefault(),this.$input.blur(),r=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(v)>h&&g()}if(!r){const v=f.clientY-l;u-=v*this._step*this._arrowKeyMultiplier(f),c+u>this._max?u=this._max-c:c+u<this._min&&(u=this._min-c),this._snapClampSetValue(c+u)}l=f.clientY},g=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",p),window.removeEventListener("mouseup",g)},_=()=>{this._inputFocused=!0},m=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",e),this.$input.addEventListener("keydown",n),this.$input.addEventListener("wheel",i,{passive:!1}),this.$input.addEventListener("mousedown",d),this.$input.addEventListener("focus",_),this.$input.addEventListener("blur",m)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const e=(f,v,x,b,y)=>(f-v)/(x-v)*(y-b)+b,t=f=>{const v=this.$slider.getBoundingClientRect();let x=e(f,v.left,v.right,this._min,this._max);this._snapClampSetValue(x)},n=f=>{this._setDraggingStyle(!0),t(f.clientX),window.addEventListener("mousemove",i),window.addEventListener("mouseup",r)},i=f=>{t(f.clientX)},r=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",i),window.removeEventListener("mouseup",r)};let s=!1,a,l;const c=f=>{f.preventDefault(),this._setDraggingStyle(!0),t(f.touches[0].clientX),s=!1},u=f=>{f.touches.length>1||(this._hasScrollBar?(a=f.touches[0].clientX,l=f.touches[0].clientY,s=!0):c(f),window.addEventListener("touchmove",h,{passive:!1}),window.addEventListener("touchend",d))},h=f=>{if(s){const v=f.touches[0].clientX-a,x=f.touches[0].clientY-l;Math.abs(v)>Math.abs(x)?c(f):(window.removeEventListener("touchmove",h),window.removeEventListener("touchend",d))}else f.preventDefault(),t(f.touches[0].clientX)},d=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",h),window.removeEventListener("touchend",d)},p=this._callOnFinishChange.bind(this),g=400;let _;const m=f=>{if(Math.abs(f.deltaX)<Math.abs(f.deltaY)&&this._hasScrollBar)return;f.preventDefault();const x=this._normalizeMouseWheel(f)*this._step;this._snapClampSetValue(this.getValue()+x),this.$input.value=this.getValue(),clearTimeout(_),_=setTimeout(p,g)};this.$slider.addEventListener("mousedown",n),this.$slider.addEventListener("touchstart",u,{passive:!1}),this.$slider.addEventListener("wheel",m,{passive:!1})}_setDraggingStyle(e,t="horizontal"){this.$slider&&this.$slider.classList.toggle("active",e),document.body.classList.toggle("lil-gui-dragging",e),document.body.classList.toggle(`lil-gui-${t}`,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:t,deltaY:n}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(t=0,n=-e.wheelDelta/120,n*=this._stepExplicit?1:10),t+-n}_arrowKeyMultiplier(e){let t=this._stepExplicit?1:10;return e.shiftKey?t*=10:e.altKey&&(t/=10),t}_snap(e){const t=Math.round(e/this._step)*this._step;return parseFloat(t.toPrecision(15))}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){const e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class vx extends mn{constructor(e,t,n,i){super(e,t,n,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this._values=Array.isArray(i)?i:Object.values(i),this._names=Array.isArray(i)?i:Object.keys(i),this._names.forEach(r=>{const s=document.createElement("option");s.innerHTML=r,this.$select.appendChild(s)}),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.updateDisplay()}updateDisplay(){const e=this.getValue(),t=this._values.indexOf(e);return this.$select.selectedIndex=t,this.$display.innerHTML=t===-1?e:this._names[t],this}}class xx extends mn{constructor(e,t,n){super(e,t,n,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",i=>{i.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}const yx=`.lil-gui {
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
}`;function bx(o){const e=document.createElement("style");e.innerHTML=o;const t=document.querySelector("head link[rel=stylesheet], head style");t?document.head.insertBefore(e,t):document.head.appendChild(e)}let gu=!1;class jo{constructor({parent:e,autoPlace:t=e===void 0,container:n,width:i,title:r="Controls",closeFolders:s=!1,injectStyles:a=!0,touchStyles:l=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",c=>{(c.code==="Enter"||c.code==="Space")&&(c.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(r),l&&this.domElement.classList.add("allow-touch-styles"),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),!gu&&a&&(bx(yx),gu=!0),n?n.appendChild(this.domElement):t&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),i&&this.domElement.style.setProperty("--width",i+"px"),this._closeFolders=s,this.domElement.addEventListener("keydown",c=>c.stopPropagation()),this.domElement.addEventListener("keyup",c=>c.stopPropagation())}add(e,t,n,i,r){if(Object(n)===n)return new vx(this,e,t,n);const s=e[t];switch(typeof s){case"number":return new _x(this,e,t,n,i,r);case"boolean":return new ux(this,e,t);case"string":return new xx(this,e,t);case"function":return new io(this,e,t)}console.error(`gui.add failed
	property:`,t,`
	object:`,e,`
	value:`,s)}addColor(e,t,n=1){return new gx(this,e,t,n)}addFolder(e){const t=new jo({parent:this,title:e});return this.root._closeFolders&&t.close(),t}load(e,t=!0){return e.controllers&&this.controllers.forEach(n=>{n instanceof io||n._name in e.controllers&&n.load(e.controllers[n._name])}),t&&e.folders&&this.folders.forEach(n=>{n._title in e.folders&&n.load(e.folders[n._title])}),this}save(e=!0){const t={controllers:{},folders:{}};return this.controllers.forEach(n=>{if(!(n instanceof io)){if(n._name in t.controllers)throw new Error(`Cannot save GUI with duplicate property "${n._name}"`);t.controllers[n._name]=n.save()}}),e&&this.folders.forEach(n=>{if(n._title in t.folders)throw new Error(`Cannot save GUI with duplicate folder "${n._title}"`);t.folders[n._title]=n.save()}),t}open(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}_setClosed(e){this._closed!==e&&(this._closed=e,this._callOnOpenClose(this))}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const t=this.$children.clientHeight;this.$children.style.height=t+"px",this.domElement.classList.add("transition");const n=r=>{r.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",n))};this.$children.addEventListener("transitionend",n);const i=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!e),requestAnimationFrame(()=>{this.$children.style.height=i+"px"})}),this}title(e){return this._title=e,this.$title.innerHTML=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(n=>n.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onOpenClose(e){return this._onOpenClose=e,this}_callOnOpenClose(e){this.parent&&this.parent._callOnOpenClose(e),this._onOpenClose!==void 0&&this._onOpenClose.call(this,e)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(t=>{e=e.concat(t.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(t=>{e=e.concat(t.foldersRecursive())}),e}}const Mx=jo;class Sx extends ra{constructor(e){super(e)}init(e){const t=e?e.object.masterGrp.position.clone():new k;t.z=-this.dist,this.object.masterGrp.position.set(t.x,t.y,t.z),this.object.masterGrp.userData.id=this.data.id,this.object.masterGrp.traverse(n=>n.userData.id=this.data.id),this.object.orbit.scale.z==1&&this.object.orbit.scale.multiplyScalar(this.dist),this.object.orbit.position.set(-t.x,-t.y,-t.z),this.initSatellites(e),this.object.meshGrp.updateMatrixWorld(),this.object.masterGrp.updateMatrixWorld(),this.object.parentGrp.updateMatrixWorld()}update(e,t){var a;const n=this.object.atmo.material.uniforms.viewVector.value;(a=this.object.atmo)==null||a.getWorldPosition(ve.WORLD_POS),n.subVectors(e.cam.active.position.clone(),ve.WORLD_POS);const i=e.delta*this.data.angularRotVel*ve.ROT_SCALE;if(this.object.meshGrp.rotation.y-=i,ve.CELESTIAL_ORB||ve.MAN_CELESTIAL_ORB||this.data.type.includes("moon")){const l=e.delta*this.data.angularOrbVel*ve.ORB_SCALE;this.object.parentGrp.rotation.y+=l}this.object.masterGrp.getWorldPosition(ve.WORLD_POS),e.cam.active.getWorldPosition(ve.CAM_POS);const r=ve.WORLD_POS.distanceTo(ve.CAM_POS),s=1e10/ve.DISTANCE_SCALE;this.data.type.includes("moon")||(this.object.markerSprite.scale.setScalar(r/50),this.object.markerSprite.visible=r>s),this.object.meshGrp.visible=r<s*2,this.updateSatellites(e,t)}}function wx(o){const e=[],n=o.orbLen?o.orbLen:180;for(let a=0;a<=n;a++)e.push(new k(1*Math.sin(a*Or),1*Math.cos(a*Or),0));const i=new mt;i.setFromPoints(e),i.computeBoundingBox(),i.computeVertexNormals();const r=new cn({uniforms:{bboxMin:{value:i.boundingBox.min},bboxMax:{value:i.boundingBox.max}},vertexShader:`
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
                gl_FragColor.a = 1.0 - vUv.y;
            }
        `,transparent:!0,depthWrite:!1}),s=new ti(i,r);return s.scale.x=o.orbInvert?-1:1,s.rotateY((180-n)*(o.orbInvert?-1:1)*Or),s.rotateX(Math.PI/2),s.updateMatrixWorld(),s}const Tx=`uniform vec3 glowColor;
uniform float intensityMult;
varying float intensity;

void main() {
  vec3 glow = (glowColor - .2) * intensity * intensityMult;
  gl_FragColor = vec4( glow, 1.0 );
}`,Ax=`uniform vec3 viewVector;
varying float intensity;

void main() {
  gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4( position, 1.0 );
  vec3 actual_normal = vec3(modelMatrix * vec4(normal, 0.0));
  intensity = pow( dot(normalize(viewVector), actual_normal), 6.0 );
}`;function Ex(o){ve.LOAD_MANAGER.itemStart(`://${o.name}_planet`);const[e,t]=Cx(new Fe(parseInt(o.draw.glowColor)),o.draw.glowIntensity,o.draw.albedoPath,o.draw.normalPath,o.radius/ve.SIZE_SCALE,o.name),n=new Et;n.name=`${o.name}_masterGrp`;const i=new Et;i.name=`${o.name}_parentGrp`,i.add(n);const r=new Et;r.name=`${o.name}_meshGrp`,r.add(e),r.add(t),n.add(r);const s=wx(o.draw);n.add(s);let a;if(!o.type.includes("moon")){const h=ve.TEX_LOAD("./diamond-solid.svg"),d=new No({map:h});a=new Qu(d),a.name=`${o.name}_markerSprite`,a.position.y=o.draw.radius+o.draw.radius/3,n.add(a)}const l=new na({id:ta(),name:o.name,type:o.type,tilt:o.tilt,parent:o.parent,radius:o.radius,texts:o.texts,orbitalPeriod:o.orbitalPeriod,rotationPeriod:o.rotationPeriod,distanceToParent:o.distanceToParent,drawRadius:o.draw.radius});o.draw.orbInvert&&l.invertAngularOrbVel(),i.rotation.y=no(-Math.PI*no(1,2),Math.PI*no(1,2));const c=new ia({parentGrp:i,masterGrp:n,meshGrp:r,mesh:e,atmo:t,orbit:s,markerSprite:a,displayInfo:o.displayInfo}),u=new Sx({data:l,object:c});return ve.LOAD_MANAGER.itemEnd(`://${o.name}_planet`),u}function Cx(o,e,t,n,i,r){const s=ve.TEX_LOAD(t);s.magFilter=pt;const a=ve.TEX_LOAD(n);a.magFilter=pt;const l=new V0({map:s,normalMap:a}),c=new Js(i,55,55),u=new Mt(c,l);u.castShadow=!0,u.name=`${r}_mesh`;const h=new cn({uniforms:{intensityMult:{value:e},viewVector:{value:new k},glowColor:{value:o}},vertexShader:Ax,fragmentShader:Tx,side:Nt,blending:Vs,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4}),d=new Mt(c,h);return d.name=`${r}_atmo`,d.castShadow=!0,d.scale.set(1.5,1.5,1.5),[u,d]}const Lx=67319e8;class Rx extends ra{constructor(t){super(t);xe(this,"distanceEnd");this.distanceEnd=this.data.distanceToParent+Lx}init(){}update(){}}function bh(){return new Worker(""+new URL("ParticleWorker-aae374e5.js",import.meta.url).href)}function Px(o){const e=new $s({color:"white",opacity:.2,transparent:!0}),t=new mt,n=new ko(t,e),i=new bh;ve.LOAD_MANAGER.itemStart(`://${o.name}_worker`),i.postMessage({type:o.type,distanceToParent:o.distanceToParent,distScale:ve.DISTANCE_SCALE}),i.onmessage=l=>{ve.LOAD_MANAGER.itemEnd(`://${o.name}_worker`),t.setAttribute("position",new wt(l.data[0],3))};const r=new Et;r.add(n),n.name=`${o.name}_masterGrp`,r.name=`${o.name}_parentGrp`;const s=new na({id:ta(),name:o.name,type:o.type,tilt:o.tilt,parent:o.parent,radius:o.radius,texts:o.texts,orbitalPeriod:o.orbitalPeriod,rotationPeriod:o.rotationPeriod,distanceToParent:o.distanceToParent,drawRadius:o.draw.radius}),a=new ia({parentGrp:r,masterGrp:n});return new Rx({data:s,object:a})}class Dx extends ra{constructor(e,t,n){super(e)}init(e){this.initSatellites(e)}update(e,t){e.cam.active.getWorldPosition(ve.CAM_POS),this.object.parentGrp.getWorldPosition(ve.WORLD_POS);const n=ve.CAM_POS.distanceTo(ve.WORLD_POS),i=this.object.masterGrp.material;"uniforms"in i&&"dist"in i.uniforms&&(i.uniforms.dist.value=n);const r=e.delta*this.data.angularOrbVel*ve.ORB_SCALE;this.object.masterGrp.rotation.y-=r*1.3793,this.updateSatellites(e,t)}}function Ix(o){return o.draw.pointShader?new $s({color:"white",opacity:.4,transparent:!0,depthWrite:!1}):new cn({blending:Vs,transparent:!0,vertexColors:!0,depthWrite:!1,uniforms:{dist:{value:1},dist_div:{value:o.draw.distDiv},size:{value:2},scale:{value:1},color:{value:[1,1,1]}},vertexShader:`
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
  
      // varying vec3 vColor;
  
      void main() {
        vColor = color;
  
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
      }
      `,fragmentShader:`
          float rand(vec2 co){
            return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);
          }
  
          // uniform vec3 color;
          uniform float dist;
          uniform float dist_div;
  
          varying vec3 vColor;
  
          void main() {
              vec2 xy = gl_PointCoord.xy - vec2(0.5);
              float ll = length(xy);
              gl_FragColor = vec4(vColor, step(ll, 0.5));
  
              float falloff = dist_div / (dist * dist);
              // float falloff = 1.0;
              falloff = clamp(0.0 + falloff, 0.0, 0.5);
              gl_FragColor.a = falloff;
          }
          `})}async function Ux(o){ve.LOAD_MANAGER.itemStart(`://${o.name}_particleRing`);const e=Ix(o);let t,n;if(o.draw.cache)[t,n]=await Ox(o.draw.cache),t.material=e;else{const a=new mt;t=new ko(a,e),n=new Et,n.add(t),n.name=`${o.name}_parentGrp`,t.name=`${o.name}_masterGrp`;const l=o.distanceToParent/ve.DISTANCE_SCALE,c=o.draw.end?o.draw.end:void 0,u=new bh;ve.LOAD_MANAGER.itemStart(`://${o.name}_worker`),u.postMessage({type:o.type,radius:l,end:c,count:o.draw.count,height:o.draw.height,genColor:o.draw.genColor}),u.onmessage=h=>{ve.LOAD_MANAGER.itemEnd(`://${o.name}_worker`),a.setAttribute("position",new wt(h.data[0],3)),h.data.length>1&&a.setAttribute("color",new wt(h.data[1],3))}}const i=new na({id:ta(),name:o.name,type:o.type,tilt:o.tilt,parent:o.parent,radius:o.radius,texts:o.texts,orbitalPeriod:o.orbitalPeriod,rotationPeriod:o.rotationPeriod,distanceToParent:o.distanceToParent,drawRadius:o.draw.radius});o.draw.orbInvert&&i.invertAngularOrbVel();const r=new ia({parentGrp:n,masterGrp:t}),s=new Dx({data:i,object:r},o.draw.count,o.draw.height);return ve.LOAD_MANAGER.itemEnd(`://${o.name}_planet`),s}function Ox(o){return new Promise(e=>{ve.GLTF_LOADER.load(o,t=>{const n=t.scene.children[0],i=t.scene.children[0].children[0];e([i,n])})})}const Nx={sun:yh,"planet;moon":Ex,particlering:Ux,oortcloud:Px};async function Fx(o){ve.LOAD_MANAGER.itemStart(`://${o.name}_planet`);const e=o.name,t=o.isSingleSun,n=await kx(o),i=Bx(n),r=new xh({isSingleSun:t,name:e,tree:i,flat:n,startTarget:o.startTarget});return ve.LOAD_MANAGER.itemEnd(`://${o.name}_planet`),r}async function kx(o){const e=[];for(const t of o.objects){let n;for(const[i,r]of Object.entries(Nx))if(i.includes(t.type)){n=r;break}if(!n)throw new Error("Something horrible went wrong");e.push(await n(t))}return e}function Bx(o){return o.forEach(e=>{const t=o.filter(n=>n.data.name===e.data.name?!1:n.data.parent===e.data.name?(e.object.masterGrp.add(n.object.parentGrp),!0):!1);e.satellites=t.length>0?t:void 0}),o.filter(e=>!e.data.parent)}const Gx={systems:[{name:"epsilonEridani",isSingleSun:!0,startTarget:"yellowstone",freeCam:!1,objects:[{name:"epsilonEridani",type:"sun",radius:508328.2,rotationPeriod:273.6,orbitalPeriod:null,parent:null,tilt:0,distanceToParent:null,highTemp:5100,lowTemp:1700,draw:{radius:1e5}},{name:"tangerineDream",type:"planet",radius:84592.31,rotationPeriod:24,orbitalPeriod:63948,parent:"epsilonEridani",tilt:45,distanceToParent:50864e5,draw:{albedoPath:"./epsilonEridani/2k_jupiter.jpg",normalPath:"./epsilonEridani/ceres_normal_16k.png",glowColor:"0xffffff",glowIntensity:.1,radius:100}},{name:"yellowstone",type:"planet",radius:5600,rotationPeriod:26,orbitalPeriod:2453e3,parent:"epsilonEridani",tilt:20,distanceToParent:5984e7,draw:{albedoPath:"./epsilonEridani/2k_venus_surface.jpg",normalPath:"./epsilonEridani/ceres_normal_16k.png",glowColor:"0xf69f1f",glowIntensity:.25,radius:100}},{name:"marcosEye",type:"moon",radius:1737.4,rotationPeriod:6552,orbitalPeriod:6552,parent:"yellowstone",tilt:0,distanceToParent:30844e4,draw:{albedoPath:"./epsilonEridani/marcosEye/moon_albedo.jpg",normalPath:"./epsilonEridani/marcosEye/moon_normal.png",glowColor:"0xffffff",glowIntensity:.1,radius:1,orbInvert:!0,orbLen:45,showMarker:!1}},{name:"glitterband",type:"particlering",radius:null,rotationPeriod:null,orbitalPeriod:62e3,parent:"yellowstone",tilt:0,distanceToParent:55e7,draw:{cache:"./epsilonEridani/glitterband.glb",count:1e3,distDiv:3e9,height:40,genColor:!0}},{name:"oortCloud",type:"oortcloud",radius:null,rotationPeriod:null,orbitalPeriod:62e3,parent:"epsilonEridani",tilt:0,distanceToParent:1992e10,draw:{radius:2}},{name:"kuiperBelt",type:"particlering",radius:null,rotationPeriod:null,orbitalPeriod:752e6,parent:"epsilonEridani",tilt:0,distanceToParent:748793612e3,draw:{cache:"./epsilonEridani/kuiperbelt.glb",end:1e5,count:1e3,distDiv:1e11,height:4e5,pointShader:!0,orbInvert:!0}}],texts:[{name:"tangerineDream",texts:[`2560-2600
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
Named in honour of Marco Ferris`]}]}]},_u={type:"change"},ro={type:"start"},vu={type:"end"};class zx extends li{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new k,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:pi.ROTATE,MIDDLE:pi.DOLLY,RIGHT:pi.PAN},this.touches={ONE:mi.ROTATE,TWO:mi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(R){R.addEventListener("keydown",Se),this._domElementKeyEvents=R},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Se),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(_u),n.update(),r=i.NONE},this.update=function(){const R=new k,Q=new en().setFromUnitVectors(e.up,new k(0,1,0)),j=Q.clone().invert(),ye=new k,ge=new en,Te=2*Math.PI;return function(){const _e=n.object.position;R.copy(_e).sub(n.target),R.applyQuaternion(Q),a.setFromVector3(R),n.autoRotate&&r===i.NONE&&S(C()),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let Re=n.minAzimuthAngle,Pe=n.maxAzimuthAngle;return isFinite(Re)&&isFinite(Pe)&&(Re<-Math.PI?Re+=Te:Re>Math.PI&&(Re-=Te),Pe<-Math.PI?Pe+=Te:Pe>Math.PI&&(Pe-=Te),Re<=Pe?a.theta=Math.max(Re,Math.min(Pe,a.theta)):a.theta=a.theta>(Re+Pe)/2?Math.max(Re,a.theta):Math.min(Pe,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=c,a.radius=Math.max(n.minDistance,Math.min(n.maxDistance,a.radius)),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),R.setFromSpherical(a),R.applyQuaternion(j),_e.copy(n.target).add(R),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),c=1,h||ye.distanceToSquared(n.object.position)>s||8*(1-ge.dot(n.object.quaternion))>s?(n.dispatchEvent(_u),ye.copy(n.object.position),ge.copy(n.object.quaternion),h=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",M),n.domElement.removeEventListener("pointerdown",Ee),n.domElement.removeEventListener("pointercancel",Ae),n.domElement.removeEventListener("wheel",we),n.domElement.removeEventListener("pointermove",Me),n.domElement.removeEventListener("pointerup",Ae),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",Se),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=i.NONE;const s=1e-6,a=new Vc,l=new Vc;let c=1;const u=new k;let h=!1;const d=new Ne,p=new Ne,g=new Ne,_=new Ne,m=new Ne,f=new Ne,v=new Ne,x=new Ne,b=new Ne,y=[],T={};function C(){return 2*Math.PI/60/60*n.autoRotateSpeed}function L(){return Math.pow(.95,n.zoomSpeed)}function S(R){l.theta-=R}function E(R){l.phi-=R}const Z=function(){const R=new k;return function(j,ye){R.setFromMatrixColumn(ye,0),R.multiplyScalar(-j),u.add(R)}}(),U=function(){const R=new k;return function(j,ye){n.screenSpacePanning===!0?R.setFromMatrixColumn(ye,1):(R.setFromMatrixColumn(ye,0),R.crossVectors(n.object.up,R)),R.multiplyScalar(j),u.add(R)}}(),P=function(){const R=new k;return function(j,ye){const ge=n.domElement;if(n.object.isPerspectiveCamera){const Te=n.object.position;R.copy(Te).sub(n.target);let pe=R.length();pe*=Math.tan(n.object.fov/2*Math.PI/180),Z(2*j*pe/ge.clientHeight,n.object.matrix),U(2*ye*pe/ge.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(Z(j*(n.object.right-n.object.left)/n.object.zoom/ge.clientWidth,n.object.matrix),U(ye*(n.object.top-n.object.bottom)/n.object.zoom/ge.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function D(R){n.object.isPerspectiveCamera?c/=R:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*R)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function B(R){n.object.isPerspectiveCamera?c*=R:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/R)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function q(R){d.set(R.clientX,R.clientY)}function re(R){v.set(R.clientX,R.clientY)}function $(R){_.set(R.clientX,R.clientY)}function z(R){p.set(R.clientX,R.clientY),g.subVectors(p,d).multiplyScalar(n.rotateSpeed);const Q=n.domElement;S(2*Math.PI*g.x/Q.clientHeight),E(2*Math.PI*g.y/Q.clientHeight),d.copy(p),n.update()}function K(R){x.set(R.clientX,R.clientY),b.subVectors(x,v),b.y>0?D(L()):b.y<0&&B(L()),v.copy(x),n.update()}function N(R){m.set(R.clientX,R.clientY),f.subVectors(m,_).multiplyScalar(n.panSpeed),P(f.x,f.y),_.copy(m),n.update()}function W(R){R.deltaY<0?B(L()):R.deltaY>0&&D(L()),n.update()}function F(R){let Q=!1;switch(R.code){case n.keys.UP:R.ctrlKey||R.metaKey||R.shiftKey?E(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):P(0,n.keyPanSpeed),Q=!0;break;case n.keys.BOTTOM:R.ctrlKey||R.metaKey||R.shiftKey?E(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):P(0,-n.keyPanSpeed),Q=!0;break;case n.keys.LEFT:R.ctrlKey||R.metaKey||R.shiftKey?S(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):P(n.keyPanSpeed,0),Q=!0;break;case n.keys.RIGHT:R.ctrlKey||R.metaKey||R.shiftKey?S(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):P(-n.keyPanSpeed,0),Q=!0;break}Q&&(R.preventDefault(),n.update())}function G(){if(y.length===1)d.set(y[0].pageX,y[0].pageY);else{const R=.5*(y[0].pageX+y[1].pageX),Q=.5*(y[0].pageY+y[1].pageY);d.set(R,Q)}}function H(){if(y.length===1)_.set(y[0].pageX,y[0].pageY);else{const R=.5*(y[0].pageX+y[1].pageX),Q=.5*(y[0].pageY+y[1].pageY);_.set(R,Q)}}function ee(){const R=y[0].pageX-y[1].pageX,Q=y[0].pageY-y[1].pageY,j=Math.sqrt(R*R+Q*Q);v.set(0,j)}function I(){n.enableZoom&&ee(),n.enablePan&&H()}function ie(){n.enableZoom&&ee(),n.enableRotate&&G()}function ue(R){if(y.length==1)p.set(R.pageX,R.pageY);else{const j=fe(R),ye=.5*(R.pageX+j.x),ge=.5*(R.pageY+j.y);p.set(ye,ge)}g.subVectors(p,d).multiplyScalar(n.rotateSpeed);const Q=n.domElement;S(2*Math.PI*g.x/Q.clientHeight),E(2*Math.PI*g.y/Q.clientHeight),d.copy(p)}function se(R){if(y.length===1)m.set(R.pageX,R.pageY);else{const Q=fe(R),j=.5*(R.pageX+Q.x),ye=.5*(R.pageY+Q.y);m.set(j,ye)}f.subVectors(m,_).multiplyScalar(n.panSpeed),P(f.x,f.y),_.copy(m)}function le(R){const Q=fe(R),j=R.pageX-Q.x,ye=R.pageY-Q.y,ge=Math.sqrt(j*j+ye*ye);x.set(0,ge),b.set(0,Math.pow(x.y/v.y,n.zoomSpeed)),D(b.y),v.copy(x)}function oe(R){n.enableZoom&&le(R),n.enablePan&&se(R)}function be(R){n.enableZoom&&le(R),n.enableRotate&&ue(R)}function Ee(R){n.enabled!==!1&&(y.length===0&&(n.domElement.setPointerCapture(R.pointerId),n.domElement.addEventListener("pointermove",Me),n.domElement.addEventListener("pointerup",Ae)),V(R),R.pointerType==="touch"?de(R):Ie(R))}function Me(R){n.enabled!==!1&&(R.pointerType==="touch"?w(R):me(R))}function Ae(R){J(R),y.length===0&&(n.domElement.releasePointerCapture(R.pointerId),n.domElement.removeEventListener("pointermove",Me),n.domElement.removeEventListener("pointerup",Ae)),n.dispatchEvent(vu),r=i.NONE}function Ie(R){let Q;switch(R.button){case 0:Q=n.mouseButtons.LEFT;break;case 1:Q=n.mouseButtons.MIDDLE;break;case 2:Q=n.mouseButtons.RIGHT;break;default:Q=-1}switch(Q){case pi.DOLLY:if(n.enableZoom===!1)return;re(R),r=i.DOLLY;break;case pi.ROTATE:if(R.ctrlKey||R.metaKey||R.shiftKey){if(n.enablePan===!1)return;$(R),r=i.PAN}else{if(n.enableRotate===!1)return;q(R),r=i.ROTATE}break;case pi.PAN:if(R.ctrlKey||R.metaKey||R.shiftKey){if(n.enableRotate===!1)return;q(R),r=i.ROTATE}else{if(n.enablePan===!1)return;$(R),r=i.PAN}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(ro)}function me(R){switch(r){case i.ROTATE:if(n.enableRotate===!1)return;z(R);break;case i.DOLLY:if(n.enableZoom===!1)return;K(R);break;case i.PAN:if(n.enablePan===!1)return;N(R);break}}function we(R){n.enabled===!1||n.enableZoom===!1||r!==i.NONE||(R.preventDefault(),n.dispatchEvent(ro),W(R),n.dispatchEvent(vu))}function Se(R){n.enabled===!1||n.enablePan===!1||F(R)}function de(R){switch(ce(R),y.length){case 1:switch(n.touches.ONE){case mi.ROTATE:if(n.enableRotate===!1)return;G(),r=i.TOUCH_ROTATE;break;case mi.PAN:if(n.enablePan===!1)return;H(),r=i.TOUCH_PAN;break;default:r=i.NONE}break;case 2:switch(n.touches.TWO){case mi.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;I(),r=i.TOUCH_DOLLY_PAN;break;case mi.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;ie(),r=i.TOUCH_DOLLY_ROTATE;break;default:r=i.NONE}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(ro)}function w(R){switch(ce(R),r){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;ue(R),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;se(R),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;oe(R),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;be(R),n.update();break;default:r=i.NONE}}function M(R){n.enabled!==!1&&R.preventDefault()}function V(R){y.push(R)}function J(R){delete T[R.pointerId];for(let Q=0;Q<y.length;Q++)if(y[Q].pointerId==R.pointerId){y.splice(Q,1);return}}function ce(R){let Q=T[R.pointerId];Q===void 0&&(Q=new Ne,T[R.pointerId]=Q),Q.set(R.pageX,R.pageY)}function fe(R){const Q=R.pointerId===y[0].pointerId?y[1]:y[0];return T[Q.pointerId]}n.domElement.addEventListener("contextmenu",M),n.domElement.addEventListener("pointerdown",Ee),n.domElement.addEventListener("pointercancel",Ae),n.domElement.addEventListener("wheel",we,{passive:!1}),this.update()}}class Vx{constructor(e,t){xe(this,"_active");xe(this,"free");xe(this,"third");xe(this,"freeCtrl");xe(this,"_isFree");xe(this,"_thirdTarget");xe(this,"_currentPosition");xe(this,"_currentLookat");xe(this,"_dummyRotate");xe(this,"_baseOffset");xe(this,"_baseLookat");xe(this,"stopWheel");xe(this,"zoomed");this.free=new Ot(30,e.clientWidth/e.clientHeight,.1,1e10),this.third=new Ot(55,e.clientWidth/e.clientHeight,.1,1e10),this.free.position.set(0,0,-1e4),this.third.position.set(0,0,-1e4),this.freeCtrl=new zx(this.free,t.renderer.domElement),this.freeCtrl.enableDamping=!0,this.freeCtrl.dampingFactor=.5,this._active=this.free,this._isFree=!0,this._currentPosition=new k,this._currentLookat=new k,this._dummyRotate=new ut,this._baseOffset=new k,this._baseLookat=new k}get active(){return this._active}get thirdTarget(){return this._thirdTarget}get isFree(){return this._isFree}rotateThird(e){switch(e){case"arrowleft":this._dummyRotate.rotateY(ve.CAM_ROT_SPEED);break;case"arrowright":this._dummyRotate.rotateY(-ve.CAM_ROT_SPEED);break;case"arrowup":this._dummyRotate.rotateX(ve.CAM_ROT_SPEED);break;case"arrowdown":this._dummyRotate.rotateX(-ve.CAM_ROT_SPEED);break}}calculateTarget(){this._thirdTarget.object.masterGrp.getWorldPosition(ve.WORLD_POS),this._thirdTarget.object.masterGrp.getWorldQuaternion(ve.WORLD_QUAT),this._dummyRotate.getWorldQuaternion(ve.WORLD_QUAT2);const e=this._baseLookat.clone();e.applyQuaternion(ve.WORLD_QUAT),e.add(ve.WORLD_POS),ve.WORLD_QUAT.multiplyQuaternions(ve.WORLD_QUAT,ve.WORLD_QUAT2);const t=this._baseOffset.clone();return t.applyQuaternion(ve.WORLD_QUAT),t.add(ve.WORLD_POS),[e,t]}setFollowTarget(e){this._thirdTarget=e,this._dummyRotate.copy(e.object.masterGrp);const t=this._thirdTarget.drawRadius;this._baseOffset=new k(t*5,t*2,-t*6),this._baseLookat=new k(0,t/2,t)}third2Free(){this._thirdTarget.object.masterGrp.getWorldPosition(ve.WORLD_POS),this.freeCtrl.target.set(ve.WORLD_POS.x,ve.WORLD_POS.y,ve.WORLD_POS.z),this.third.getWorldPosition(this.free.position),this.third.getWorldQuaternion(this.free.quaternion)}initListeners(){const e=a=>{this.rotateThird(a.key.toLowerCase())};let t=!1;const n=()=>{this.stopWheel=!1,t=!0},i=()=>{t=!1},r=()=>{this.zoomed||(ve.UIMANAGER.zoomVisible=!1,this.zoomed=!0),!this.isFree&&!this.stopWheel&&(this.third2Free(),this.activateFree())},s=()=>{t&&!this.isFree&&(this.third2Free(),this.activateFree())};window.addEventListener("mousedown",n),window.addEventListener("mouseup",i),window.addEventListener("mousemove",s),window.addEventListener("wheel",r),window.addEventListener("keydown",e)}activateThird(){ve.CELESTIAL_ORB=!0,this._active=this.third,this._isFree=!1}activateFree(){ve.CELESTIAL_ORB=!1,this._active=this.free,this._isFree=!0}update(e){if(this._thirdTarget){const[t,n]=this.calculateTarget();if(ve.ORB_SCALE>=1e8)this._currentPosition.copy(n);else{const i=1-Math.pow(.001,e);this._currentPosition.lerp(n,i)}this._currentLookat.copy(t),this.third.position.copy(this._currentPosition),this.third.lookAt(this._currentLookat)}this.freeCtrl.update()}}class Hx{constructor(e){xe(this,"_mousePointer");xe(this,"_raycaster");xe(this,"_world");this._mousePointer=new Ne(1/0,1/0),this._raycaster=new oh,this._world=e}initListeners(){window.addEventListener("dblclick",this.dblclickHandler.bind(this)),window.addEventListener("click",this.clickHandler.bind(this))}async clickHandler(e){const t=e.target;if(t.id=="home"){await this._world.switchSystem("cosmicMap");return}const n=ve.UIMANAGER.cornerButton.icons.find(a=>t.id.includes(a.id));if(n){await ve.UIMANAGER.cornerButton.clickHandler(n,this._world);return}this.updateMousePointer(e);const i=this.checkRaycast();if(!i){!ve.UIMANAGER.infoPanel.panel.contains(t)&&ve.UIMANAGER.infoPanel.visible&&(ve.UIMANAGER.infoPanel.visible=!1);return}const[r,s]=i;if(s.name.includes("_infoSprite")){ve.UIMANAGER.infoPanel.showTimeline(r);return}if(s.name.includes("_view")){await this._world.switchSystem(s.name.replace("_view",""));return}ve.UIMANAGER.infoPanel.visible&&(ve.UIMANAGER.infoPanel.visible=!1)}dblclickHandler(e){this.updateMousePointer(e);const t=this.raycast();if(!t)return;const n=this.getMasterGroup(t);if(!n)return;const i=this._world.curSystem.getById(n.userData.id);i&&(this._world.cam.setFollowTarget(i),this._world.cam.activateThird(),this._world.cam.third2Free())}updateMousePointer(e){this._mousePointer.x=e.clientX/window.innerWidth*2-1,this._mousePointer.y=-(e.clientY/window.innerHeight)*2+1}checkRaycast(){const e=this.raycast();if(!e)return;const t=this.getMasterGroup(e);if(!t)return;const n=this._world.curSystem.getById(t.userData.id);if(n)return[n,e]}raycast(){this._raycaster.setFromCamera(this._mousePointer,this._world.cam.active);const e=this._raycaster.intersectObjects(this._world.curSystem.topGrp.children);if(this._mousePointer.set(1/0,1/0),e.length!==0)return e[0].object}getMasterGroup(e){if(e.name!=null&&e.name.includes("_")){const[t,n]=e.name.split("_");return this._world.scene.getObjectByName(`${t}_masterGrp`)}return Wv(e)}}const Wx=Gx;let Ns;const jx=1e3/60;class Xs{constructor(){xe(this,"canvas");xe(this,"renderer");xe(this,"scene");xe(this,"clock");xe(this,"delta");xe(this,"gridhelper");xe(this,"cam");xe(this,"gui");xe(this,"clickManager");xe(this,"clickPointer");xe(this,"raycaster");xe(this,"systems");xe(this,"curSystem");xe(this,"firstLoad");this.canvas=document.querySelector("canvas#main"),this.renderer=new Ku({canvas:this.canvas,antialias:!0,alpha:!0,logarithmicDepthBuffer:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=yu,this.renderer.setClearColor(0),this.scene=new Zu,this.cam=new Vx(this.canvas,this),this.clock=new l_,this.delta=0,this.systems=[],this.clickPointer=new Ne(1/0,1/0),this.raycaster=new oh,this.gridhelper=new v_(100,100,"teal","darkgray"),this.gridhelper.scale.setScalar(1e4),this.gridhelper.visible=!1,this.scene.add(this.gridhelper);const e=ve.TEX_LOAD("./starmap_8k.jpg");e.mapping=Hs,e.encoding=nt,this.scene.background=e,this.scene.add(new s_("#ffffff",.03)),this.clickManager=new Hx(this)}initSys(e,t){this.curSystem=e,this.curSystem.initWorld(this,t.freeCam),ve.UIMANAGER.infoPanel.init(this.curSystem,t.texts),ve.UIMANAGER.infoPanel.writeFullTimeline(e),ve.UIMANAGER.homeBtn.style.visibility=e.name=="cosmicMap"?"hidden":"visible",this.systems.find(n=>n[0].name==e.name)||this.systems.push([e,t.texts])}initGui(){this.gui=new Mx({title:"Settings",width:300});const e=this.gui.addFolder("World");e.add(ve,"TIME_SCALE").min(0).name("Time scale").onChange(t=>{ve.TIME_SCALE=t}),e.add(ve,"ORB_SCALE").min(0).name("Orbital speed"),e.add(ve,"ROT_SCALE").min(0).name("Rotational speed"),e.add(this,"topView").name("Top View"),e.add(this.gridhelper,"visible").name("Grid visiblity"),e.add(ve,"MAN_CELESTIAL_ORB").name("Force Orb Rot"),e.add(this,"logCamera").name("Log Camera"),this.gui.close(),this.cam.free.position.set(0,2117.999902022348,-10175.846962935977),this.cam.freeCtrl.update()}logCamera(){console.log(this.cam.active.position),console.log(this.cam.active.rotation)}async switchSystem(e){const t=this.systems.find(([i,r])=>i.name==e),n=this.curSystem;if(t)this.initSys(t[0],{freeCam:!1,texts:t[1]});else{const i=Wx.systems.find(r=>r.name==e);i&&this.initSys(await Fx(i),{freeCam:i.freeCam,texts:i.texts})}this.scene.remove(n.topGrp),this.scene.add(this.curSystem.topGrp),this.cam.stopWheel=!0,ve.UIMANAGER.cornerButton.switch("help"),setTimeout(()=>{this.cam.stopWheel=!1},1500)}update(){if(jv(this.renderer)){const e=this.renderer.domElement;this.cam.active.aspect=e.clientWidth/e.clientHeight,this.cam.active.updateProjectionMatrix()}this.curSystem.update(this),this.cam.update(this.delta),this.renderer.clear(),this.renderer.render(this.scene,this.cam.active)}static eventLoop(e,t){Ns||(Ns=e);const n=e-Ns;t.delta=t.clock.getDelta(),n>jx&&(t.update(),Ns=e),requestAnimationFrame(i=>Xs.eventLoop(i,t))}topView(){this.cam.activateFree(),this.cam.freeCtrl.target.set(0,0,0),this.cam.free.position.set(0,this.curSystem.radius*4,0)}}document.title=`${document.title} (0.3.0-supa-alpha)`;document.getElementById("version").innerText="v0.3.0-supa-alpha";window.onload=()=>{const o=ve.UIMANAGER.progressPanel;ve.LOAD_MANAGER.onLoad=()=>{o.visible=!1,o.value=0,e.cam.zoomed||(ve.UIMANAGER.zoomVisible=!0),Xs.eventLoop(0,e)},ve.LOAD_MANAGER.onStart=()=>{o.visible=!0},ve.LOAD_MANAGER.onProgress=(n,i,r)=>{const s=i/r*100;console.debug(n," ",s),o.value=s},ve.LOAD_MANAGER.itemStart("://startup");const e=new Xs;e.initGui(),e.cam.initListeners(),e.clickManager.initListeners();const t=bt.build();e.initSys(t,{freeCam:!0,texts:[]}),e.scene.add(t.topGrp),ve.LOAD_MANAGER.itemEnd("://startup")};
