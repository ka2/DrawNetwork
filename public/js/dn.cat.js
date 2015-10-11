/**
 * @fileoverview gl-matrix - High performance matrix and vector operations
 * @author Brandon Jones
 * @author Colin MacKenzie IV
 * @version 2.2.1
 */
/* Copyright (c) 2013, Brandon Jones, Colin MacKenzie IV. All rights reserved.

Redistribution and use in source and binary forms, with or without modification,
are permitted provided that the following conditions are met:

  * Redistributions of source code must retain the above copyright notice, this
    list of conditions and the following disclaimer.
  * Redistributions in binary form must reproduce the above copyright notice,
    this list of conditions and the following disclaimer in the documentation
    and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR
ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE. */
(function(e){"use strict";var t={};typeof exports=="undefined"?typeof define=="function"&&typeof define.amd=="object"&&define.amd?(t.exports={},define(function(){return t.exports})):t.exports=typeof window!="undefined"?window:e:t.exports=exports,function(e){if(!t)var t=1e-6;if(!n)var n=typeof Float32Array!="undefined"?Float32Array:Array;if(!r)var r=Math.random;var i={};i.setMatrixArrayType=function(e){n=e},typeof e!="undefined"&&(e.glMatrix=i);var s=Math.PI/180;i.toRadian=function(e){return e*s};var o={};o.create=function(){var e=new n(2);return e[0]=0,e[1]=0,e},o.clone=function(e){var t=new n(2);return t[0]=e[0],t[1]=e[1],t},o.fromValues=function(e,t){var r=new n(2);return r[0]=e,r[1]=t,r},o.copy=function(e,t){return e[0]=t[0],e[1]=t[1],e},o.set=function(e,t,n){return e[0]=t,e[1]=n,e},o.add=function(e,t,n){return e[0]=t[0]+n[0],e[1]=t[1]+n[1],e},o.subtract=function(e,t,n){return e[0]=t[0]-n[0],e[1]=t[1]-n[1],e},o.sub=o.subtract,o.multiply=function(e,t,n){return e[0]=t[0]*n[0],e[1]=t[1]*n[1],e},o.mul=o.multiply,o.divide=function(e,t,n){return e[0]=t[0]/n[0],e[1]=t[1]/n[1],e},o.div=o.divide,o.min=function(e,t,n){return e[0]=Math.min(t[0],n[0]),e[1]=Math.min(t[1],n[1]),e},o.max=function(e,t,n){return e[0]=Math.max(t[0],n[0]),e[1]=Math.max(t[1],n[1]),e},o.scale=function(e,t,n){return e[0]=t[0]*n,e[1]=t[1]*n,e},o.scaleAndAdd=function(e,t,n,r){return e[0]=t[0]+n[0]*r,e[1]=t[1]+n[1]*r,e},o.distance=function(e,t){var n=t[0]-e[0],r=t[1]-e[1];return Math.sqrt(n*n+r*r)},o.dist=o.distance,o.squaredDistance=function(e,t){var n=t[0]-e[0],r=t[1]-e[1];return n*n+r*r},o.sqrDist=o.squaredDistance,o.length=function(e){var t=e[0],n=e[1];return Math.sqrt(t*t+n*n)},o.len=o.length,o.squaredLength=function(e){var t=e[0],n=e[1];return t*t+n*n},o.sqrLen=o.squaredLength,o.negate=function(e,t){return e[0]=-t[0],e[1]=-t[1],e},o.normalize=function(e,t){var n=t[0],r=t[1],i=n*n+r*r;return i>0&&(i=1/Math.sqrt(i),e[0]=t[0]*i,e[1]=t[1]*i),e},o.dot=function(e,t){return e[0]*t[0]+e[1]*t[1]},o.cross=function(e,t,n){var r=t[0]*n[1]-t[1]*n[0];return e[0]=e[1]=0,e[2]=r,e},o.lerp=function(e,t,n,r){var i=t[0],s=t[1];return e[0]=i+r*(n[0]-i),e[1]=s+r*(n[1]-s),e},o.random=function(e,t){t=t||1;var n=r()*2*Math.PI;return e[0]=Math.cos(n)*t,e[1]=Math.sin(n)*t,e},o.transformMat2=function(e,t,n){var r=t[0],i=t[1];return e[0]=n[0]*r+n[2]*i,e[1]=n[1]*r+n[3]*i,e},o.transformMat2d=function(e,t,n){var r=t[0],i=t[1];return e[0]=n[0]*r+n[2]*i+n[4],e[1]=n[1]*r+n[3]*i+n[5],e},o.transformMat3=function(e,t,n){var r=t[0],i=t[1];return e[0]=n[0]*r+n[3]*i+n[6],e[1]=n[1]*r+n[4]*i+n[7],e},o.transformMat4=function(e,t,n){var r=t[0],i=t[1];return e[0]=n[0]*r+n[4]*i+n[12],e[1]=n[1]*r+n[5]*i+n[13],e},o.forEach=function(){var e=o.create();return function(t,n,r,i,s,o){var u,a;n||(n=2),r||(r=0),i?a=Math.min(i*n+r,t.length):a=t.length;for(u=r;u<a;u+=n)e[0]=t[u],e[1]=t[u+1],s(e,e,o),t[u]=e[0],t[u+1]=e[1];return t}}(),o.str=function(e){return"vec2("+e[0]+", "+e[1]+")"},typeof e!="undefined"&&(e.vec2=o);var u={};u.create=function(){var e=new n(3);return e[0]=0,e[1]=0,e[2]=0,e},u.clone=function(e){var t=new n(3);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t},u.fromValues=function(e,t,r){var i=new n(3);return i[0]=e,i[1]=t,i[2]=r,i},u.copy=function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e},u.set=function(e,t,n,r){return e[0]=t,e[1]=n,e[2]=r,e},u.add=function(e,t,n){return e[0]=t[0]+n[0],e[1]=t[1]+n[1],e[2]=t[2]+n[2],e},u.subtract=function(e,t,n){return e[0]=t[0]-n[0],e[1]=t[1]-n[1],e[2]=t[2]-n[2],e},u.sub=u.subtract,u.multiply=function(e,t,n){return e[0]=t[0]*n[0],e[1]=t[1]*n[1],e[2]=t[2]*n[2],e},u.mul=u.multiply,u.divide=function(e,t,n){return e[0]=t[0]/n[0],e[1]=t[1]/n[1],e[2]=t[2]/n[2],e},u.div=u.divide,u.min=function(e,t,n){return e[0]=Math.min(t[0],n[0]),e[1]=Math.min(t[1],n[1]),e[2]=Math.min(t[2],n[2]),e},u.max=function(e,t,n){return e[0]=Math.max(t[0],n[0]),e[1]=Math.max(t[1],n[1]),e[2]=Math.max(t[2],n[2]),e},u.scale=function(e,t,n){return e[0]=t[0]*n,e[1]=t[1]*n,e[2]=t[2]*n,e},u.scaleAndAdd=function(e,t,n,r){return e[0]=t[0]+n[0]*r,e[1]=t[1]+n[1]*r,e[2]=t[2]+n[2]*r,e},u.distance=function(e,t){var n=t[0]-e[0],r=t[1]-e[1],i=t[2]-e[2];return Math.sqrt(n*n+r*r+i*i)},u.dist=u.distance,u.squaredDistance=function(e,t){var n=t[0]-e[0],r=t[1]-e[1],i=t[2]-e[2];return n*n+r*r+i*i},u.sqrDist=u.squaredDistance,u.length=function(e){var t=e[0],n=e[1],r=e[2];return Math.sqrt(t*t+n*n+r*r)},u.len=u.length,u.squaredLength=function(e){var t=e[0],n=e[1],r=e[2];return t*t+n*n+r*r},u.sqrLen=u.squaredLength,u.negate=function(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e},u.normalize=function(e,t){var n=t[0],r=t[1],i=t[2],s=n*n+r*r+i*i;return s>0&&(s=1/Math.sqrt(s),e[0]=t[0]*s,e[1]=t[1]*s,e[2]=t[2]*s),e},u.dot=function(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]},u.cross=function(e,t,n){var r=t[0],i=t[1],s=t[2],o=n[0],u=n[1],a=n[2];return e[0]=i*a-s*u,e[1]=s*o-r*a,e[2]=r*u-i*o,e},u.lerp=function(e,t,n,r){var i=t[0],s=t[1],o=t[2];return e[0]=i+r*(n[0]-i),e[1]=s+r*(n[1]-s),e[2]=o+r*(n[2]-o),e},u.random=function(e,t){t=t||1;var n=r()*2*Math.PI,i=r()*2-1,s=Math.sqrt(1-i*i)*t;return e[0]=Math.cos(n)*s,e[1]=Math.sin(n)*s,e[2]=i*t,e},u.transformMat4=function(e,t,n){var r=t[0],i=t[1],s=t[2];return e[0]=n[0]*r+n[4]*i+n[8]*s+n[12],e[1]=n[1]*r+n[5]*i+n[9]*s+n[13],e[2]=n[2]*r+n[6]*i+n[10]*s+n[14],e},u.transformMat3=function(e,t,n){var r=t[0],i=t[1],s=t[2];return e[0]=r*n[0]+i*n[3]+s*n[6],e[1]=r*n[1]+i*n[4]+s*n[7],e[2]=r*n[2]+i*n[5]+s*n[8],e},u.transformQuat=function(e,t,n){var r=t[0],i=t[1],s=t[2],o=n[0],u=n[1],a=n[2],f=n[3],l=f*r+u*s-a*i,c=f*i+a*r-o*s,h=f*s+o*i-u*r,p=-o*r-u*i-a*s;return e[0]=l*f+p*-o+c*-a-h*-u,e[1]=c*f+p*-u+h*-o-l*-a,e[2]=h*f+p*-a+l*-u-c*-o,e},u.rotateX=function(e,t,n,r){var i=[],s=[];return i[0]=t[0]-n[0],i[1]=t[1]-n[1],i[2]=t[2]-n[2],s[0]=i[0],s[1]=i[1]*Math.cos(r)-i[2]*Math.sin(r),s[2]=i[1]*Math.sin(r)+i[2]*Math.cos(r),e[0]=s[0]+n[0],e[1]=s[1]+n[1],e[2]=s[2]+n[2],e},u.rotateY=function(e,t,n,r){var i=[],s=[];return i[0]=t[0]-n[0],i[1]=t[1]-n[1],i[2]=t[2]-n[2],s[0]=i[2]*Math.sin(r)+i[0]*Math.cos(r),s[1]=i[1],s[2]=i[2]*Math.cos(r)-i[0]*Math.sin(r),e[0]=s[0]+n[0],e[1]=s[1]+n[1],e[2]=s[2]+n[2],e},u.rotateZ=function(e,t,n,r){var i=[],s=[];return i[0]=t[0]-n[0],i[1]=t[1]-n[1],i[2]=t[2]-n[2],s[0]=i[0]*Math.cos(r)-i[1]*Math.sin(r),s[1]=i[0]*Math.sin(r)+i[1]*Math.cos(r),s[2]=i[2],e[0]=s[0]+n[0],e[1]=s[1]+n[1],e[2]=s[2]+n[2],e},u.forEach=function(){var e=u.create();return function(t,n,r,i,s,o){var u,a;n||(n=3),r||(r=0),i?a=Math.min(i*n+r,t.length):a=t.length;for(u=r;u<a;u+=n)e[0]=t[u],e[1]=t[u+1],e[2]=t[u+2],s(e,e,o),t[u]=e[0],t[u+1]=e[1],t[u+2]=e[2];return t}}(),u.str=function(e){return"vec3("+e[0]+", "+e[1]+", "+e[2]+")"},typeof e!="undefined"&&(e.vec3=u);var a={};a.create=function(){var e=new n(4);return e[0]=0,e[1]=0,e[2]=0,e[3]=0,e},a.clone=function(e){var t=new n(4);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t},a.fromValues=function(e,t,r,i){var s=new n(4);return s[0]=e,s[1]=t,s[2]=r,s[3]=i,s},a.copy=function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e},a.set=function(e,t,n,r,i){return e[0]=t,e[1]=n,e[2]=r,e[3]=i,e},a.add=function(e,t,n){return e[0]=t[0]+n[0],e[1]=t[1]+n[1],e[2]=t[2]+n[2],e[3]=t[3]+n[3],e},a.subtract=function(e,t,n){return e[0]=t[0]-n[0],e[1]=t[1]-n[1],e[2]=t[2]-n[2],e[3]=t[3]-n[3],e},a.sub=a.subtract,a.multiply=function(e,t,n){return e[0]=t[0]*n[0],e[1]=t[1]*n[1],e[2]=t[2]*n[2],e[3]=t[3]*n[3],e},a.mul=a.multiply,a.divide=function(e,t,n){return e[0]=t[0]/n[0],e[1]=t[1]/n[1],e[2]=t[2]/n[2],e[3]=t[3]/n[3],e},a.div=a.divide,a.min=function(e,t,n){return e[0]=Math.min(t[0],n[0]),e[1]=Math.min(t[1],n[1]),e[2]=Math.min(t[2],n[2]),e[3]=Math.min(t[3],n[3]),e},a.max=function(e,t,n){return e[0]=Math.max(t[0],n[0]),e[1]=Math.max(t[1],n[1]),e[2]=Math.max(t[2],n[2]),e[3]=Math.max(t[3],n[3]),e},a.scale=function(e,t,n){return e[0]=t[0]*n,e[1]=t[1]*n,e[2]=t[2]*n,e[3]=t[3]*n,e},a.scaleAndAdd=function(e,t,n,r){return e[0]=t[0]+n[0]*r,e[1]=t[1]+n[1]*r,e[2]=t[2]+n[2]*r,e[3]=t[3]+n[3]*r,e},a.distance=function(e,t){var n=t[0]-e[0],r=t[1]-e[1],i=t[2]-e[2],s=t[3]-e[3];return Math.sqrt(n*n+r*r+i*i+s*s)},a.dist=a.distance,a.squaredDistance=function(e,t){var n=t[0]-e[0],r=t[1]-e[1],i=t[2]-e[2],s=t[3]-e[3];return n*n+r*r+i*i+s*s},a.sqrDist=a.squaredDistance,a.length=function(e){var t=e[0],n=e[1],r=e[2],i=e[3];return Math.sqrt(t*t+n*n+r*r+i*i)},a.len=a.length,a.squaredLength=function(e){var t=e[0],n=e[1],r=e[2],i=e[3];return t*t+n*n+r*r+i*i},a.sqrLen=a.squaredLength,a.negate=function(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e[3]=-t[3],e},a.normalize=function(e,t){var n=t[0],r=t[1],i=t[2],s=t[3],o=n*n+r*r+i*i+s*s;return o>0&&(o=1/Math.sqrt(o),e[0]=t[0]*o,e[1]=t[1]*o,e[2]=t[2]*o,e[3]=t[3]*o),e},a.dot=function(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]+e[3]*t[3]},a.lerp=function(e,t,n,r){var i=t[0],s=t[1],o=t[2],u=t[3];return e[0]=i+r*(n[0]-i),e[1]=s+r*(n[1]-s),e[2]=o+r*(n[2]-o),e[3]=u+r*(n[3]-u),e},a.random=function(e,t){return t=t||1,e[0]=r(),e[1]=r(),e[2]=r(),e[3]=r(),a.normalize(e,e),a.scale(e,e,t),e},a.transformMat4=function(e,t,n){var r=t[0],i=t[1],s=t[2],o=t[3];return e[0]=n[0]*r+n[4]*i+n[8]*s+n[12]*o,e[1]=n[1]*r+n[5]*i+n[9]*s+n[13]*o,e[2]=n[2]*r+n[6]*i+n[10]*s+n[14]*o,e[3]=n[3]*r+n[7]*i+n[11]*s+n[15]*o,e},a.transformQuat=function(e,t,n){var r=t[0],i=t[1],s=t[2],o=n[0],u=n[1],a=n[2],f=n[3],l=f*r+u*s-a*i,c=f*i+a*r-o*s,h=f*s+o*i-u*r,p=-o*r-u*i-a*s;return e[0]=l*f+p*-o+c*-a-h*-u,e[1]=c*f+p*-u+h*-o-l*-a,e[2]=h*f+p*-a+l*-u-c*-o,e},a.forEach=function(){var e=a.create();return function(t,n,r,i,s,o){var u,a;n||(n=4),r||(r=0),i?a=Math.min(i*n+r,t.length):a=t.length;for(u=r;u<a;u+=n)e[0]=t[u],e[1]=t[u+1],e[2]=t[u+2],e[3]=t[u+3],s(e,e,o),t[u]=e[0],t[u+1]=e[1],t[u+2]=e[2],t[u+3]=e[3];return t}}(),a.str=function(e){return"vec4("+e[0]+", "+e[1]+", "+e[2]+", "+e[3]+")"},typeof e!="undefined"&&(e.vec4=a);var f={};f.create=function(){var e=new n(4);return e[0]=1,e[1]=0,e[2]=0,e[3]=1,e},f.clone=function(e){var t=new n(4);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t},f.copy=function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e},f.identity=function(e){return e[0]=1,e[1]=0,e[2]=0,e[3]=1,e},f.transpose=function(e,t){if(e===t){var n=t[1];e[1]=t[2],e[2]=n}else e[0]=t[0],e[1]=t[2],e[2]=t[1],e[3]=t[3];return e},f.invert=function(e,t){var n=t[0],r=t[1],i=t[2],s=t[3],o=n*s-i*r;return o?(o=1/o,e[0]=s*o,e[1]=-r*o,e[2]=-i*o,e[3]=n*o,e):null},f.adjoint=function(e,t){var n=t[0];return e[0]=t[3],e[1]=-t[1],e[2]=-t[2],e[3]=n,e},f.determinant=function(e){return e[0]*e[3]-e[2]*e[1]},f.multiply=function(e,t,n){var r=t[0],i=t[1],s=t[2],o=t[3],u=n[0],a=n[1],f=n[2],l=n[3];return e[0]=r*u+s*a,e[1]=i*u+o*a,e[2]=r*f+s*l,e[3]=i*f+o*l,e},f.mul=f.multiply,f.rotate=function(e,t,n){var r=t[0],i=t[1],s=t[2],o=t[3],u=Math.sin(n),a=Math.cos(n);return e[0]=r*a+s*u,e[1]=i*a+o*u,e[2]=r*-u+s*a,e[3]=i*-u+o*a,e},f.scale=function(e,t,n){var r=t[0],i=t[1],s=t[2],o=t[3],u=n[0],a=n[1];return e[0]=r*u,e[1]=i*u,e[2]=s*a,e[3]=o*a,e},f.str=function(e){return"mat2("+e[0]+", "+e[1]+", "+e[2]+", "+e[3]+")"},f.frob=function(e){return Math.sqrt(Math.pow(e[0],2)+Math.pow(e[1],2)+Math.pow(e[2],2)+Math.pow(e[3],2))},f.LDU=function(e,t,n,r){return e[2]=r[2]/r[0],n[0]=r[0],n[1]=r[1],n[3]=r[3]-e[2]*n[1],[e,t,n]},typeof e!="undefined"&&(e.mat2=f);var l={};l.create=function(){var e=new n(6);return e[0]=1,e[1]=0,e[2]=0,e[3]=1,e[4]=0,e[5]=0,e},l.clone=function(e){var t=new n(6);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t},l.copy=function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e},l.identity=function(e){return e[0]=1,e[1]=0,e[2]=0,e[3]=1,e[4]=0,e[5]=0,e},l.invert=function(e,t){var n=t[0],r=t[1],i=t[2],s=t[3],o=t[4],u=t[5],a=n*s-r*i;return a?(a=1/a,e[0]=s*a,e[1]=-r*a,e[2]=-i*a,e[3]=n*a,e[4]=(i*u-s*o)*a,e[5]=(r*o-n*u)*a,e):null},l.determinant=function(e){return e[0]*e[3]-e[1]*e[2]},l.multiply=function(e,t,n){var r=t[0],i=t[1],s=t[2],o=t[3],u=t[4],a=t[5],f=n[0],l=n[1],c=n[2],h=n[3],p=n[4],d=n[5];return e[0]=r*f+s*l,e[1]=i*f+o*l,e[2]=r*c+s*h,e[3]=i*c+o*h,e[4]=r*p+s*d+u,e[5]=i*p+o*d+a,e},l.mul=l.multiply,l.rotate=function(e,t,n){var r=t[0],i=t[1],s=t[2],o=t[3],u=t[4],a=t[5],f=Math.sin(n),l=Math.cos(n);return e[0]=r*l+s*f,e[1]=i*l+o*f,e[2]=r*-f+s*l,e[3]=i*-f+o*l,e[4]=u,e[5]=a,e},l.scale=function(e,t,n){var r=t[0],i=t[1],s=t[2],o=t[3],u=t[4],a=t[5],f=n[0],l=n[1];return e[0]=r*f,e[1]=i*f,e[2]=s*l,e[3]=o*l,e[4]=u,e[5]=a,e},l.translate=function(e,t,n){var r=t[0],i=t[1],s=t[2],o=t[3],u=t[4],a=t[5],f=n[0],l=n[1];return e[0]=r,e[1]=i,e[2]=s,e[3]=o,e[4]=r*f+s*l+u,e[5]=i*f+o*l+a,e},l.str=function(e){return"mat2d("+e[0]+", "+e[1]+", "+e[2]+", "+e[3]+", "+e[4]+", "+e[5]+")"},l.frob=function(e){return Math.sqrt(Math.pow(e[0],2)+Math.pow(e[1],2)+Math.pow(e[2],2)+Math.pow(e[3],2)+Math.pow(e[4],2)+Math.pow(e[5],2)+1)},typeof e!="undefined"&&(e.mat2d=l);var c={};c.create=function(){var e=new n(9);return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=1,e[5]=0,e[6]=0,e[7]=0,e[8]=1,e},c.fromMat4=function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[4],e[4]=t[5],e[5]=t[6],e[6]=t[8],e[7]=t[9],e[8]=t[10],e},c.clone=function(e){var t=new n(9);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t},c.copy=function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e},c.identity=function(e){return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=1,e[5]=0,e[6]=0,e[7]=0,e[8]=1,e},c.transpose=function(e,t){if(e===t){var n=t[1],r=t[2],i=t[5];e[1]=t[3],e[2]=t[6],e[3]=n,e[5]=t[7],e[6]=r,e[7]=i}else e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8];return e},c.invert=function(e,t){var n=t[0],r=t[1],i=t[2],s=t[3],o=t[4],u=t[5],a=t[6],f=t[7],l=t[8],c=l*o-u*f,h=-l*s+u*a,p=f*s-o*a,d=n*c+r*h+i*p;return d?(d=1/d,e[0]=c*d,e[1]=(-l*r+i*f)*d,e[2]=(u*r-i*o)*d,e[3]=h*d,e[4]=(l*n-i*a)*d,e[5]=(-u*n+i*s)*d,e[6]=p*d,e[7]=(-f*n+r*a)*d,e[8]=(o*n-r*s)*d,e):null},c.adjoint=function(e,t){var n=t[0],r=t[1],i=t[2],s=t[3],o=t[4],u=t[5],a=t[6],f=t[7],l=t[8];return e[0]=o*l-u*f,e[1]=i*f-r*l,e[2]=r*u-i*o,e[3]=u*a-s*l,e[4]=n*l-i*a,e[5]=i*s-n*u,e[6]=s*f-o*a,e[7]=r*a-n*f,e[8]=n*o-r*s,e},c.determinant=function(e){var t=e[0],n=e[1],r=e[2],i=e[3],s=e[4],o=e[5],u=e[6],a=e[7],f=e[8];return t*(f*s-o*a)+n*(-f*i+o*u)+r*(a*i-s*u)},c.multiply=function(e,t,n){var r=t[0],i=t[1],s=t[2],o=t[3],u=t[4],a=t[5],f=t[6],l=t[7],c=t[8],h=n[0],p=n[1],d=n[2],v=n[3],m=n[4],g=n[5],y=n[6],b=n[7],w=n[8];return e[0]=h*r+p*o+d*f,e[1]=h*i+p*u+d*l,e[2]=h*s+p*a+d*c,e[3]=v*r+m*o+g*f,e[4]=v*i+m*u+g*l,e[5]=v*s+m*a+g*c,e[6]=y*r+b*o+w*f,e[7]=y*i+b*u+w*l,e[8]=y*s+b*a+w*c,e},c.mul=c.multiply,c.translate=function(e,t,n){var r=t[0],i=t[1],s=t[2],o=t[3],u=t[4],a=t[5],f=t[6],l=t[7],c=t[8],h=n[0],p=n[1];return e[0]=r,e[1]=i,e[2]=s,e[3]=o,e[4]=u,e[5]=a,e[6]=h*r+p*o+f,e[7]=h*i+p*u+l,e[8]=h*s+p*a+c,e},c.rotate=function(e,t,n){var r=t[0],i=t[1],s=t[2],o=t[3],u=t[4],a=t[5],f=t[6],l=t[7],c=t[8],h=Math.sin(n),p=Math.cos(n);return e[0]=p*r+h*o,e[1]=p*i+h*u,e[2]=p*s+h*a,e[3]=p*o-h*r,e[4]=p*u-h*i,e[5]=p*a-h*s,e[6]=f,e[7]=l,e[8]=c,e},c.scale=function(e,t,n){var r=n[0],i=n[1];return e[0]=r*t[0],e[1]=r*t[1],e[2]=r*t[2],e[3]=i*t[3],e[4]=i*t[4],e[5]=i*t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e},c.fromMat2d=function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=0,e[3]=t[2],e[4]=t[3],e[5]=0,e[6]=t[4],e[7]=t[5],e[8]=1,e},c.fromQuat=function(e,t){var n=t[0],r=t[1],i=t[2],s=t[3],o=n+n,u=r+r,a=i+i,f=n*o,l=r*o,c=r*u,h=i*o,p=i*u,d=i*a,v=s*o,m=s*u,g=s*a;return e[0]=1-c-d,e[3]=l-g,e[6]=h+m,e[1]=l+g,e[4]=1-f-d,e[7]=p-v,e[2]=h-m,e[5]=p+v,e[8]=1-f-c,e},c.normalFromMat4=function(e,t){var n=t[0],r=t[1],i=t[2],s=t[3],o=t[4],u=t[5],a=t[6],f=t[7],l=t[8],c=t[9],h=t[10],p=t[11],d=t[12],v=t[13],m=t[14],g=t[15],y=n*u-r*o,b=n*a-i*o,w=n*f-s*o,E=r*a-i*u,S=r*f-s*u,x=i*f-s*a,T=l*v-c*d,N=l*m-h*d,C=l*g-p*d,k=c*m-h*v,L=c*g-p*v,A=h*g-p*m,O=y*A-b*L+w*k+E*C-S*N+x*T;return O?(O=1/O,e[0]=(u*A-a*L+f*k)*O,e[1]=(a*C-o*A-f*N)*O,e[2]=(o*L-u*C+f*T)*O,e[3]=(i*L-r*A-s*k)*O,e[4]=(n*A-i*C+s*N)*O,e[5]=(r*C-n*L-s*T)*O,e[6]=(v*x-m*S+g*E)*O,e[7]=(m*w-d*x-g*b)*O,e[8]=(d*S-v*w+g*y)*O,e):null},c.str=function(e){return"mat3("+e[0]+", "+e[1]+", "+e[2]+", "+e[3]+", "+e[4]+", "+e[5]+", "+e[6]+", "+e[7]+", "+e[8]+")"},c.frob=function(e){return Math.sqrt(Math.pow(e[0],2)+Math.pow(e[1],2)+Math.pow(e[2],2)+Math.pow(e[3],2)+Math.pow(e[4],2)+Math.pow(e[5],2)+Math.pow(e[6],2)+Math.pow(e[7],2)+Math.pow(e[8],2))},typeof e!="undefined"&&(e.mat3=c);var h={};h.create=function(){var e=new n(16);return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e},h.clone=function(e){var t=new n(16);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t},h.copy=function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e},h.identity=function(e){return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e},h.transpose=function(e,t){if(e===t){var n=t[1],r=t[2],i=t[3],s=t[6],o=t[7],u=t[11];e[1]=t[4],e[2]=t[8],e[3]=t[12],e[4]=n,e[6]=t[9],e[7]=t[13],e[8]=r,e[9]=s,e[11]=t[14],e[12]=i,e[13]=o,e[14]=u}else e[0]=t[0],e[1]=t[4],e[2]=t[8],e[3]=t[12],e[4]=t[1],e[5]=t[5],e[6]=t[9],e[7]=t[13],e[8]=t[2],e[9]=t[6],e[10]=t[10],e[11]=t[14],e[12]=t[3],e[13]=t[7],e[14]=t[11],e[15]=t[15];return e},h.invert=function(e,t){var n=t[0],r=t[1],i=t[2],s=t[3],o=t[4],u=t[5],a=t[6],f=t[7],l=t[8],c=t[9],h=t[10],p=t[11],d=t[12],v=t[13],m=t[14],g=t[15],y=n*u-r*o,b=n*a-i*o,w=n*f-s*o,E=r*a-i*u,S=r*f-s*u,x=i*f-s*a,T=l*v-c*d,N=l*m-h*d,C=l*g-p*d,k=c*m-h*v,L=c*g-p*v,A=h*g-p*m,O=y*A-b*L+w*k+E*C-S*N+x*T;return O?(O=1/O,e[0]=(u*A-a*L+f*k)*O,e[1]=(i*L-r*A-s*k)*O,e[2]=(v*x-m*S+g*E)*O,e[3]=(h*S-c*x-p*E)*O,e[4]=(a*C-o*A-f*N)*O,e[5]=(n*A-i*C+s*N)*O,e[6]=(m*w-d*x-g*b)*O,e[7]=(l*x-h*w+p*b)*O,e[8]=(o*L-u*C+f*T)*O,e[9]=(r*C-n*L-s*T)*O,e[10]=(d*S-v*w+g*y)*O,e[11]=(c*w-l*S-p*y)*O,e[12]=(u*N-o*k-a*T)*O,e[13]=(n*k-r*N+i*T)*O,e[14]=(v*b-d*E-m*y)*O,e[15]=(l*E-c*b+h*y)*O,e):null},h.adjoint=function(e,t){var n=t[0],r=t[1],i=t[2],s=t[3],o=t[4],u=t[5],a=t[6],f=t[7],l=t[8],c=t[9],h=t[10],p=t[11],d=t[12],v=t[13],m=t[14],g=t[15];return e[0]=u*(h*g-p*m)-c*(a*g-f*m)+v*(a*p-f*h),e[1]=-(r*(h*g-p*m)-c*(i*g-s*m)+v*(i*p-s*h)),e[2]=r*(a*g-f*m)-u*(i*g-s*m)+v*(i*f-s*a),e[3]=-(r*(a*p-f*h)-u*(i*p-s*h)+c*(i*f-s*a)),e[4]=-(o*(h*g-p*m)-l*(a*g-f*m)+d*(a*p-f*h)),e[5]=n*(h*g-p*m)-l*(i*g-s*m)+d*(i*p-s*h),e[6]=-(n*(a*g-f*m)-o*(i*g-s*m)+d*(i*f-s*a)),e[7]=n*(a*p-f*h)-o*(i*p-s*h)+l*(i*f-s*a),e[8]=o*(c*g-p*v)-l*(u*g-f*v)+d*(u*p-f*c),e[9]=-(n*(c*g-p*v)-l*(r*g-s*v)+d*(r*p-s*c)),e[10]=n*(u*g-f*v)-o*(r*g-s*v)+d*(r*f-s*u),e[11]=-(n*(u*p-f*c)-o*(r*p-s*c)+l*(r*f-s*u)),e[12]=-(o*(c*m-h*v)-l*(u*m-a*v)+d*(u*h-a*c)),e[13]=n*(c*m-h*v)-l*(r*m-i*v)+d*(r*h-i*c),e[14]=-(n*(u*m-a*v)-o*(r*m-i*v)+d*(r*a-i*u)),e[15]=n*(u*h-a*c)-o*(r*h-i*c)+l*(r*a-i*u),e},h.determinant=function(e){var t=e[0],n=e[1],r=e[2],i=e[3],s=e[4],o=e[5],u=e[6],a=e[7],f=e[8],l=e[9],c=e[10],h=e[11],p=e[12],d=e[13],v=e[14],m=e[15],g=t*o-n*s,y=t*u-r*s,b=t*a-i*s,w=n*u-r*o,E=n*a-i*o,S=r*a-i*u,x=f*d-l*p,T=f*v-c*p,N=f*m-h*p,C=l*v-c*d,k=l*m-h*d,L=c*m-h*v;return g*L-y*k+b*C+w*N-E*T+S*x},h.multiply=function(e,t,n){var r=t[0],i=t[1],s=t[2],o=t[3],u=t[4],a=t[5],f=t[6],l=t[7],c=t[8],h=t[9],p=t[10],d=t[11],v=t[12],m=t[13],g=t[14],y=t[15],b=n[0],w=n[1],E=n[2],S=n[3];return e[0]=b*r+w*u+E*c+S*v,e[1]=b*i+w*a+E*h+S*m,e[2]=b*s+w*f+E*p+S*g,e[3]=b*o+w*l+E*d+S*y,b=n[4],w=n[5],E=n[6],S=n[7],e[4]=b*r+w*u+E*c+S*v,e[5]=b*i+w*a+E*h+S*m,e[6]=b*s+w*f+E*p+S*g,e[7]=b*o+w*l+E*d+S*y,b=n[8],w=n[9],E=n[10],S=n[11],e[8]=b*r+w*u+E*c+S*v,e[9]=b*i+w*a+E*h+S*m,e[10]=b*s+w*f+E*p+S*g,e[11]=b*o+w*l+E*d+S*y,b=n[12],w=n[13],E=n[14],S=n[15],e[12]=b*r+w*u+E*c+S*v,e[13]=b*i+w*a+E*h+S*m,e[14]=b*s+w*f+E*p+S*g,e[15]=b*o+w*l+E*d+S*y,e},h.mul=h.multiply,h.translate=function(e,t,n){var r=n[0],i=n[1],s=n[2],o,u,a,f,l,c,h,p,d,v,m,g;return t===e?(e[12]=t[0]*r+t[4]*i+t[8]*s+t[12],e[13]=t[1]*r+t[5]*i+t[9]*s+t[13],e[14]=t[2]*r+t[6]*i+t[10]*s+t[14],e[15]=t[3]*r+t[7]*i+t[11]*s+t[15]):(o=t[0],u=t[1],a=t[2],f=t[3],l=t[4],c=t[5],h=t[6],p=t[7],d=t[8],v=t[9],m=t[10],g=t[11],e[0]=o,e[1]=u,e[2]=a,e[3]=f,e[4]=l,e[5]=c,e[6]=h,e[7]=p,e[8]=d,e[9]=v,e[10]=m,e[11]=g,e[12]=o*r+l*i+d*s+t[12],e[13]=u*r+c*i+v*s+t[13],e[14]=a*r+h*i+m*s+t[14],e[15]=f*r+p*i+g*s+t[15]),e},h.scale=function(e,t,n){var r=n[0],i=n[1],s=n[2];return e[0]=t[0]*r,e[1]=t[1]*r,e[2]=t[2]*r,e[3]=t[3]*r,e[4]=t[4]*i,e[5]=t[5]*i,e[6]=t[6]*i,e[7]=t[7]*i,e[8]=t[8]*s,e[9]=t[9]*s,e[10]=t[10]*s,e[11]=t[11]*s,e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e},h.rotate=function(e,n,r,i){var s=i[0],o=i[1],u=i[2],a=Math.sqrt(s*s+o*o+u*u),f,l,c,h,p,d,v,m,g,y,b,w,E,S,x,T,N,C,k,L,A,O,M,_;return Math.abs(a)<t?null:(a=1/a,s*=a,o*=a,u*=a,f=Math.sin(r),l=Math.cos(r),c=1-l,h=n[0],p=n[1],d=n[2],v=n[3],m=n[4],g=n[5],y=n[6],b=n[7],w=n[8],E=n[9],S=n[10],x=n[11],T=s*s*c+l,N=o*s*c+u*f,C=u*s*c-o*f,k=s*o*c-u*f,L=o*o*c+l,A=u*o*c+s*f,O=s*u*c+o*f,M=o*u*c-s*f,_=u*u*c+l,e[0]=h*T+m*N+w*C,e[1]=p*T+g*N+E*C,e[2]=d*T+y*N+S*C,e[3]=v*T+b*N+x*C,e[4]=h*k+m*L+w*A,e[5]=p*k+g*L+E*A,e[6]=d*k+y*L+S*A,e[7]=v*k+b*L+x*A,e[8]=h*O+m*M+w*_,e[9]=p*O+g*M+E*_,e[10]=d*O+y*M+S*_,e[11]=v*O+b*M+x*_,n!==e&&(e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15]),e)},h.rotateX=function(e,t,n){var r=Math.sin(n),i=Math.cos(n),s=t[4],o=t[5],u=t[6],a=t[7],f=t[8],l=t[9],c=t[10],h=t[11];return t!==e&&(e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[4]=s*i+f*r,e[5]=o*i+l*r,e[6]=u*i+c*r,e[7]=a*i+h*r,e[8]=f*i-s*r,e[9]=l*i-o*r,e[10]=c*i-u*r,e[11]=h*i-a*r,e},h.rotateY=function(e,t,n){var r=Math.sin(n),i=Math.cos(n),s=t[0],o=t[1],u=t[2],a=t[3],f=t[8],l=t[9],c=t[10],h=t[11];return t!==e&&(e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[0]=s*i-f*r,e[1]=o*i-l*r,e[2]=u*i-c*r,e[3]=a*i-h*r,e[8]=s*r+f*i,e[9]=o*r+l*i,e[10]=u*r+c*i,e[11]=a*r+h*i,e},h.rotateZ=function(e,t,n){var r=Math.sin(n),i=Math.cos(n),s=t[0],o=t[1],u=t[2],a=t[3],f=t[4],l=t[5],c=t[6],h=t[7];return t!==e&&(e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[0]=s*i+f*r,e[1]=o*i+l*r,e[2]=u*i+c*r,e[3]=a*i+h*r,e[4]=f*i-s*r,e[5]=l*i-o*r,e[6]=c*i-u*r,e[7]=h*i-a*r,e},h.fromRotationTranslation=function(e,t,n){var r=t[0],i=t[1],s=t[2],o=t[3],u=r+r,a=i+i,f=s+s,l=r*u,c=r*a,h=r*f,p=i*a,d=i*f,v=s*f,m=o*u,g=o*a,y=o*f;return e[0]=1-(p+v),e[1]=c+y,e[2]=h-g,e[3]=0,e[4]=c-y,e[5]=1-(l+v),e[6]=d+m,e[7]=0,e[8]=h+g,e[9]=d-m,e[10]=1-(l+p),e[11]=0,e[12]=n[0],e[13]=n[1],e[14]=n[2],e[15]=1,e},h.fromQuat=function(e,t){var n=t[0],r=t[1],i=t[2],s=t[3],o=n+n,u=r+r,a=i+i,f=n*o,l=r*o,c=r*u,h=i*o,p=i*u,d=i*a,v=s*o,m=s*u,g=s*a;return e[0]=1-c-d,e[1]=l+g,e[2]=h-m,e[3]=0,e[4]=l-g,e[5]=1-f-d,e[6]=p+v,e[7]=0,e[8]=h+m,e[9]=p-v,e[10]=1-f-c,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e},h.frustum=function(e,t,n,r,i,s,o){var u=1/(n-t),a=1/(i-r),f=1/(s-o);return e[0]=s*2*u,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=s*2*a,e[6]=0,e[7]=0,e[8]=(n+t)*u,e[9]=(i+r)*a,e[10]=(o+s)*f,e[11]=-1,e[12]=0,e[13]=0,e[14]=o*s*2*f,e[15]=0,e},h.perspective=function(e,t,n,r,i){var s=1/Math.tan(t/2),o=1/(r-i);return e[0]=s/n,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=s,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=(i+r)*o,e[11]=-1,e[12]=0,e[13]=0,e[14]=2*i*r*o,e[15]=0,e},h.ortho=function(e,t,n,r,i,s,o){var u=1/(t-n),a=1/(r-i),f=1/(s-o);return e[0]=-2*u,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=-2*a,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=2*f,e[11]=0,e[12]=(t+n)*u,e[13]=(i+r)*a,e[14]=(o+s)*f,e[15]=1,e},h.lookAt=function(e,n,r,i){var s,o,u,a,f,l,c,p,d,v,m=n[0],g=n[1],y=n[2],b=i[0],w=i[1],E=i[2],S=r[0],x=r[1],T=r[2];return Math.abs(m-S)<t&&Math.abs(g-x)<t&&Math.abs(y-T)<t?h.identity(e):(c=m-S,p=g-x,d=y-T,v=1/Math.sqrt(c*c+p*p+d*d),c*=v,p*=v,d*=v,s=w*d-E*p,o=E*c-b*d,u=b*p-w*c,v=Math.sqrt(s*s+o*o+u*u),v?(v=1/v,s*=v,o*=v,u*=v):(s=0,o=0,u=0),a=p*u-d*o,f=d*s-c*u,l=c*o-p*s,v=Math.sqrt(a*a+f*f+l*l),v?(v=1/v,a*=v,f*=v,l*=v):(a=0,f=0,l=0),e[0]=s,e[1]=a,e[2]=c,e[3]=0,e[4]=o,e[5]=f,e[6]=p,e[7]=0,e[8]=u,e[9]=l,e[10]=d,e[11]=0,e[12]=-(s*m+o*g+u*y),e[13]=-(a*m+f*g+l*y),e[14]=-(c*m+p*g+d*y),e[15]=1,e)},h.str=function(e){return"mat4("+e[0]+", "+e[1]+", "+e[2]+", "+e[3]+", "+e[4]+", "+e[5]+", "+e[6]+", "+e[7]+", "+e[8]+", "+e[9]+", "+e[10]+", "+e[11]+", "+e[12]+", "+e[13]+", "+e[14]+", "+e[15]+")"},h.frob=function(e){return Math.sqrt(Math.pow(e[0],2)+Math.pow(e[1],2)+Math.pow(e[2],2)+Math.pow(e[3],2)+Math.pow(e[4],2)+Math.pow(e[5],2)+Math.pow(e[6],2)+Math.pow(e[6],2)+Math.pow(e[7],2)+Math.pow(e[8],2)+Math.pow(e[9],2)+Math.pow(e[10],2)+Math.pow(e[11],2)+Math.pow(e[12],2)+Math.pow(e[13],2)+Math.pow(e[14],2)+Math.pow(e[15],2))},typeof e!="undefined"&&(e.mat4=h);var p={};p.create=function(){var e=new n(4);return e[0]=0,e[1]=0,e[2]=0,e[3]=1,e},p.rotationTo=function(){var e=u.create(),t=u.fromValues(1,0,0),n=u.fromValues(0,1,0);return function(r,i,s){var o=u.dot(i,s);return o<-0.999999?(u.cross(e,t,i),u.length(e)<1e-6&&u.cross(e,n,i),u.normalize(e,e),p.setAxisAngle(r,e,Math.PI),r):o>.999999?(r[0]=0,r[1]=0,r[2]=0,r[3]=1,r):(u.cross(e,i,s),r[0]=e[0],r[1]=e[1],r[2]=e[2],r[3]=1+o,p.normalize(r,r))}}(),p.setAxes=function(){var e=c.create();return function(t,n,r,i){return e[0]=r[0],e[3]=r[1],e[6]=r[2],e[1]=i[0],e[4]=i[1],e[7]=i[2],e[2]=-n[0],e[5]=-n[1],e[8]=-n[2],p.normalize(t,p.fromMat3(t,e))}}(),p.clone=a.clone,p.fromValues=a.fromValues,p.copy=a.copy,p.set=a.set,p.identity=function(e){return e[0]=0,e[1]=0,e[2]=0,e[3]=1,e},p.setAxisAngle=function(e,t,n){n*=.5;var r=Math.sin(n);return e[0]=r*t[0],e[1]=r*t[1],e[2]=r*t[2],e[3]=Math.cos(n),e},p.add=a.add,p.multiply=function(e,t,n){var r=t[0],i=t[1],s=t[2],o=t[3],u=n[0],a=n[1],f=n[2],l=n[3];return e[0]=r*l+o*u+i*f-s*a,e[1]=i*l+o*a+s*u-r*f,e[2]=s*l+o*f+r*a-i*u,e[3]=o*l-r*u-i*a-s*f,e},p.mul=p.multiply,p.scale=a.scale,p.rotateX=function(e,t,n){n*=.5;var r=t[0],i=t[1],s=t[2],o=t[3],u=Math.sin(n),a=Math.cos(n);return e[0]=r*a+o*u,e[1]=i*a+s*u,e[2]=s*a-i*u,e[3]=o*a-r*u,e},p.rotateY=function(e,t,n){n*=.5;var r=t[0],i=t[1],s=t[2],o=t[3],u=Math.sin(n),a=Math.cos(n);return e[0]=r*a-s*u,e[1]=i*a+o*u,e[2]=s*a+r*u,e[3]=o*a-i*u,e},p.rotateZ=function(e,t,n){n*=.5;var r=t[0],i=t[1],s=t[2],o=t[3],u=Math.sin(n),a=Math.cos(n);return e[0]=r*a+i*u,e[1]=i*a-r*u,e[2]=s*a+o*u,e[3]=o*a-s*u,e},p.calculateW=function(e,t){var n=t[0],r=t[1],i=t[2];return e[0]=n,e[1]=r,e[2]=i,e[3]=-Math.sqrt(Math.abs(1-n*n-r*r-i*i)),e},p.dot=a.dot,p.lerp=a.lerp,p.slerp=function(e,t,n,r){var i=t[0],s=t[1],o=t[2],u=t[3],a=n[0],f=n[1],l=n[2],c=n[3],h,p,d,v,m;return p=i*a+s*f+o*l+u*c,p<0&&(p=-p,a=-a,f=-f,l=-l,c=-c),1-p>1e-6?(h=Math.acos(p),d=Math.sin(h),v=Math.sin((1-r)*h)/d,m=Math.sin(r*h)/d):(v=1-r,m=r),e[0]=v*i+m*a,e[1]=v*s+m*f,e[2]=v*o+m*l,e[3]=v*u+m*c,e},p.invert=function(e,t){var n=t[0],r=t[1],i=t[2],s=t[3],o=n*n+r*r+i*i+s*s,u=o?1/o:0;return e[0]=-n*u,e[1]=-r*u,e[2]=-i*u,e[3]=s*u,e},p.conjugate=function(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e[3]=t[3],e},p.length=a.length,p.len=p.length,p.squaredLength=a.squaredLength,p.sqrLen=p.squaredLength,p.normalize=a.normalize,p.fromMat3=function(e,t){var n=t[0]+t[4]+t[8],r;if(n>0)r=Math.sqrt(n+1),e[3]=.5*r,r=.5/r,e[0]=(t[7]-t[5])*r,e[1]=(t[2]-t[6])*r,e[2]=(t[3]-t[1])*r;else{var i=0;t[4]>t[0]&&(i=1),t[8]>t[i*3+i]&&(i=2);var s=(i+1)%3,o=(i+2)%3;r=Math.sqrt(t[i*3+i]-t[s*3+s]-t[o*3+o]+1),e[i]=.5*r,r=.5/r,e[3]=(t[o*3+s]-t[s*3+o])*r,e[s]=(t[s*3+i]+t[i*3+s])*r,e[o]=(t[o*3+i]+t[i*3+o])*r}return e},p.str=function(e){return"quat("+e[0]+", "+e[1]+", "+e[2]+", "+e[3]+")"},typeof e!="undefined"&&(e.quat=p)}(t.exports)})(this);
function getURLParam(name) {
 	return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search)||[,""])[1].replace(/\+/g, '%20'))||null
}

function insertURLParam(key, value) {
    key = escape(key); value = escape(value);

    var kvp = document.location.search.substr(1).split('&');
    if (kvp == '') {
        document.location.search = '?' + key + '=' + value;
    }
    else {

        var i = kvp.length; var x; while (i--) {
            x = kvp[i].split('=');

            if (x[0] == key) {
                x[1] = value;
                kvp[i] = x.join('=');
                break;
            }
        }

        if (i < 0) { kvp[kvp.length] = [key, value].join('='); }

        //this will reload the page, it's likely better to store this until finished
/*            document.location.search = kvp.join('&');*/
    }
}

function checkHomeState() {
	if(getURLParam('room') != null) {
		var home = document.getElementById('home-content');
		home.className = "invisible";
        document.getElementById('save-room').className = "nav-opt save";
	}
}

function checkPageState() {
	if(getURLParam('room') != null) {
		var home = document.getElementById('home-content');
		home.className = "invisible";
        var drawContent = document.getElementById('draw-content');
        drawContent.className = "";
        return true;
	} else {
		var drawContent = document.getElementById('draw-content');
		drawContent.className = "invisible";
        return false;
	}
}

// Is located in app.js as well - duplicated code
function convertTime(time) {
    var timeString = "";
    var suffix = "now";
    if(time === 1) {
        suffix = "second"
    } else if(time > 1 && time < 60) {
        suffix = "seconds";
    } else if(time >= 60 && time < 120) {
        time = time / 60;
        suffix = "minute"
    } else if(time >= 120 && time < 3600) {
        time = time / 60;
        suffix = "minutes"
    } else if(time >= 3600 && time < 7200) {
        time = (time / 60) / 60;
        suffix = "hour"
    } else if(time >= 7200 && time < 86400) {
        time = (time / 60) / 60;
        suffix = "hours"
    } else if(time >= 86400 && time < 172800) {
        time = ((time / 60) / 60) / 24;
        suffix = "day"
    } else if(time >= 172800) {
        time = ((time / 60) / 60) / 24;
        suffix = "days"
    }
    time = Math.floor(time);
    if(suffix === "now") {
        timeString = suffix;
    } else {
        timeString = time + " " + suffix;
    }
    return timeString;
}var socket = io.connect();
var selectedRoom;
var roomList;

socket.emit('get room list');
socket.on('recieve room list', function(data) {
	roomList = data;
	for (var i = 0; i < data.length; i++) {
		var checked = false;
		if(i == 0) {
			checked = true;
		}
		createRadioElement("rooms", data[i]['id'], checked);
	}
	var table = document.getElementById("room-list");
	var tbody = table.getElementsByTagName('tbody')[0];
	for (var i = 0; i < data.length; i++) {
		var row = tbody.insertRow(i);
		row.id = data[i]['id'];
		row.onclick = function() {
			selectedRoom = this.id;
			var temp = document.getElementById(this.id + "-radio");
			temp.checked = true;
			var tableRows = document.getElementById("room-list").rows;
			for(var i = 0; i < tableRows.length; i++) {
				tableRows[i].cells[0].className = "";
				tableRows[i].cells[1].className = "";
				tableRows[i].cells[2].className = "";
			}
			var temp2 = document.getElementById(this.id);
			temp2.cells[0].className = "row-selected";
			temp2.cells[1].className = "row-selected";
			temp2.cells[2].className = "row-selected";
		};
		var cell1 = row.insertCell(0);
		var cell2 = row.insertCell(1);
		var cell3 = row.insertCell(2);
		cell1.innerHTML = data[i]['id'];
		cell2.innerHTML = data[i]['users'] + "/10";
		var time = (new Date().getTime() - data[i]['activity']) / 1000;
		cell3.innerHTML = convertTime(time);

		if (i == 0) {
			selectedRoom = data[i]['id'];
			cell1.className = "row-selected";
			cell2.className = "row-selected";
			cell3.className = "row-selected";
		}
	}
	if (isOverflowed(document.getElementById('table-wrap-scroll'))) {
		document.getElementById('room-id').style.width = "179px";
		document.getElementById('no-users').style.width = "134px";
	}
});

function isOverflowed(element) {
	return element.scrollHeight > element.clientHeight || element.scrollWidth > element.clientWidth;
}

function createRadioElement(name, value, checked) {
	var radioHtml = '<input id="' + value + '-radio" type="radio" name="' + name + '" value="' + value + '"';
	if ( checked ) {
		radioHtml += ' checked="checked"';
	}
	radioHtml += '/>';

	var radioFragment = document.getElementById('room-container');
	radioFragment.innerHTML += radioHtml;
}

checkHomeState();

if (checkPageState()) {
 	socket.emit('does room exist', getURLParam('room'));
 	socket.on('does room exist result', function(data) {
		if(data == true) {
			document.getElementById('name-box').className = "";
			document.getElementById('name-content').className = "";
		} else {
			document.getElementById('name-box').className = "";
			document.getElementById('room-not-exist').className = "";
			document.getElementById('name-content').className = "Invisible";
		}

		//}
  	});
  	// Fall back incase the above doesnt catch that the room doesnt exist
  	socket.on('room does not exist', function(data) {
		document.getElementById('name-box').className = "";
		document.getElementById('room-not-exist').className = "";
		document.getElementById('name-content').className = "Invisible";
  	});
}var basicFragShader =
    "precision mediump float;" +
    "varying vec4 vColor;" +
    "void main(void) {" +
        "gl_FragColor = vColor;" +
    "}";

var basicVertShader = 
    "attribute vec3 aVertexPosition;" +
    "attribute vec4 aVertexColor;" +
    "uniform mat4 uMVMatrix;" +
    "uniform mat4 uPMatrix;" +
    "varying vec4 vColor;" +
    "void main(void) {" +
        "gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);" +
        "vColor = aVertexColor;" +
    "}";
var Room = function(){
	this.searchRoom = function() {
		var table = document.getElementById('room-list');
		var tbody = table.getElementsByTagName('tbody')[0]
		var row = tbody.rows;
		var roomSearch = document.getElementById('room-search');
		for(var i = 0; i < row.length; i++) {
			row[i].className = "";
			if(roomSearch.value != "") {
				if(row[i].cells[0].innerHTML.indexOf(roomSearch.value) == -1) {
				 	row[i].className = "invisible";
				}
			}
		}
	}
}
var ToolSet = function(){
	this.brush = new Brush(),
	this.textTool = new TextTool(),
	this.shapeTool = new ShapeTool(),


	this.getBrushType = function(){
		return this.brush.getBrushType();
	}
}
/*--------------------------------------------
	Brush
	This object contains methods for
	all brush related functions

	- Standard Brush
	- Gradient Brush
	- Rainbow Brush
	- Line Tool
	- Eraser
--------------------------------------------*/

var Brush = function(){
	this.size = 30,
	this.colour = "#ff0000",
	this.brushType = "freeroam",
	this.lineTip = "round",

	// Gradient related

	this.gradientTimer = 0,
	this.gradientSpeed = 1,
	this.gradientSwitch = false,

	// Rainbow vars
	this.rainbowPointer = 0,
	this.rainbowSpeed = 1,


	/*--------------------------------------------
		Setters and Getters
	--------------------------------------------*/
	this.setBrushType = function(type){
		this.brushType = type;
	}

	this.getBrushType = function(){
		return this.brushType;
	}

	this.setBrushSize = function(input){
		this.size = input;

	}
	this.getBrushSize = function(){
		return this.size;
	}

	this.setColour = function(newColour){
		this.colour = newColour;
	}
	/*--------------------------------------------
		Outlines for brush and eraser
		Displays a grey outline on the canvas
	--------------------------------------------*/
	this.drawBrushOutline = function(x, y) {
		var cr = pointerCanvas.getBoundingClientRect();
		var outSize = this.size / 2;
		if(outSize <= 1.5) {
			outSize = 1.5;
		}
		pointerContext.clearRect ( 0 , 0 , pointerCanvas.width, pointerCanvas.height );
		pointerContext.lineWidth = 1;
		pointerContext.lineCap = "round";
    	pointerContext.beginPath();
    	pointerContext.strokeStyle = 'white';
    	pointerContext.arc(x - cr.left, y - cr.top, Math.abs(outSize + 1) ,0,2*Math.PI);
    	pointerContext.stroke();
    	pointerContext.beginPath();
    	pointerContext.strokeStyle = 'black';
    	pointerContext.arc(x - cr.left, y - cr.top, Math.abs(outSize),0,2*Math.PI);
    	pointerContext.stroke();
    	pointerContext.beginPath();
    	pointerContext.strokeStyle = 'white';
    	pointerContext.arc(x - cr.left, y - cr.top, Math.abs(outSize - 1),0,2*Math.PI);
    	pointerContext.stroke();
	}

	this.drawEraserOutline = function(x, y) {
		var cr = pointerCanvas.getBoundingClientRect();
		var outSize = this.size / 2;
		if(outSize <= 1.5) {
			outSize = 1.5;
		}
		pointerContext.clearRect ( 0 , 0 , pointerCanvas.width, pointerCanvas.height );
		pointerContext.lineWidth = 1;
		pointerContext.lineCap = "round";
		pointerContext.beginPath();
 		pointerContext.rect(x - cr.left - outSize - 1, y - cr.top - outSize - 1, outSize * 2 + 2, outSize * 2 + 2);
 		pointerContext.strokeStyle = 'white';
 		pointerContext.stroke();
 		pointerContext.beginPath();
 		pointerContext.rect(x - cr.left - outSize, y - cr.top - outSize, outSize * 2, outSize * 2);
 		pointerContext.strokeStyle = 'black';
 		pointerContext.stroke();
 		pointerContext.beginPath();
 		pointerContext.rect(x - cr.left - outSize + 1, y - cr.top - outSize + 1, outSize * 2 - 2, outSize * 2 - 2);
 		pointerContext.strokeStyle = 'white';
 		pointerContext.stroke();
	}

	/*--------------------------------------------
		Gradient Draw
	--------------------------------------------*/
	this.gradientDraw = function() {
		if(currentlyVoting === false && currentlySaving === false) {
			canvasRect = canvas.getBoundingClientRect();
			var rgb = convertHexToRGB(tool.brush.colour);
			rgb.r -= this.gradientTimer;
			rgb.g -= this.gradientTimer;
			rgb.b -= this.gradientTimer;
			if(rgb.r <= 0) {
				rgb.r = 0;
			}
			if(rgb.g <= 0) {
				rgb.g = 0;
			}
	
			if(rgb.b <= 0) {
				rgb.b = 0;
			}
			var hex = convertRGBToHex(rgb.r, rgb.g, rgb.b);
			var json = {
				'name': name,
				'x': mousePos.x - canvasRect.left,
				'y': mousePos.y - canvasRect.top,
				'lastX': lastPos.x - canvasRect.left,
				'lastY': lastPos.y - canvasRect.top,
				'size': tool.brush.size,
				'colour': hex
			}
			tool.shapeTool.drawCircle(json['x'], json['y'], json['lastX'], json['lastY'], json['size'], json['colour']);
			socket.emit('draw', json);
		}
	}

	/*--------------------------------------------
		Rainbow Brush		
	--------------------------------------------*/
	this.rainbowDraw = function() {
		if(currentlyVoting === false && currentlySaving === false) {
			canvasRect = canvas.getBoundingClientRect();
			var rgb = convertHexToRGB(tool.brush.colour);
			huePointer = {
				x: 0,
				y: this.rainbowPointer
			}
			var rgba = getColourOnHueCanvas();
			var hex = convertRGBToHex(rgba.r, rgba.g, rgba.b);
			var json = {
				'name': name,
				'x': mousePos.x - canvasRect.left,
				'y': mousePos.y - canvasRect.top,
				'lastX': lastPos.x - canvasRect.left,
				'lastY': lastPos.y - canvasRect.top,
				'size': this.size,
				'colour': hex
			}
			tool.shapeTool.drawCircle(json['x'], json['y'], json['lastX'], json['lastY'], json['size'], json['colour']);
			socket.emit('draw', json);
		}
	}

	/*--------------------------------------------
		Line tool
	--------------------------------------------*/
	this.drawTempLine = function(x, y, endX, endY, colour, size, lineTip) {
		var cr = pointerCanvas.getBoundingClientRect();
		pointerContext.clearRect ( 0 , 0 , pointerCanvas.width, pointerCanvas.height );
		pointerContext.strokeStyle = colour;
		pointerContext.lineWidth = size;
		pointerContext.lineCap = tool.brush.lineTip;
		pointerContext.beginPath();
		pointerContext.moveTo(x - cr.left, y - cr.top);
		pointerContext.lineTo(endX - cr.left,endY - cr.top);
		pointerContext.stroke();
	}

	this.drawShapeLine = function(x, y, endX, endY, colour, size, lineTip) {
		context.strokeStyle = colour;
		context.lineWidth = size;
		context.lineCap = tool.brush.lineTip;
		context.beginPath();
		context.moveTo(x, y);
		context.lineTo(endX,endY);
		context.stroke();
	}
	/*--------------------------------------------
		The draw and erase function
		Both methods check if voting or saving.
		Gets the size of the canvas
		Assigns to JSON and draws the circle
		Then emits
	--------------------------------------------*/
	this.draw = function() {
		if(currentlyVoting === false && currentlySaving === false) {
			canvasRect = canvas.getBoundingClientRect();
			var json = {
				'name': name,
				'x': mousePos.x - canvasRect.left,
				'y': mousePos.y - canvasRect.top,
				'lastX': lastPos.x - canvasRect.left,
				'lastY': lastPos.y - canvasRect.top,
				'size': tool.brush.size,
				'colour': tool.brush.colour
			}
			tool.shapeTool.drawCircle(json['x'], json['y'], json['lastX'], json['lastY'], json['size'], json['colour']);
			socket.emit('draw', json);
		}
	}

	this.erase = function() {
		if(currentlyVoting === false && currentlySaving === false) {
			canvasRect = canvas.getBoundingClientRect();
			var json = {
				'name': name,
				'x': mousePos.x - canvasRect.left,
				'y': mousePos.y - canvasRect.top,
				'lastX': lastPos.x - canvasRect.left,
				'lastY': lastPos.y - canvasRect.top,
				'size': tool.brush.size,
				'colour': tool.brush.colour
			}
			tool.shapeTool.drawRect(json['x'], json['y'], json['lastX'], json['lastY'], json['size'], "white");
			socket.emit('erase', json);
		}
	}

	this.drawSquare = function() {
		if(currentlyVoting === false && currentlySaving === false) {
			canvasRect = canvas.getBoundingClientRect();
			var json = {
				'name': name,
				'x': mousePos.x - canvasRect.left,
				'y': mousePos.y - canvasRect.top,
				'lastX': lastPos.x - canvasRect.left,
				'lastY': lastPos.y - canvasRect.top,
				'size': tool.brush.size,
				'colour': tool.brush.colour
			}
			tool.shapeTool.drawRect(json['x'], json['y'], json['lastX'], json['lastY'], json['size'], json['colour']);
			socket.emit('draw square', json);
		}
	}
};var TextTool = function(){
	this.textToRender = "",
	this.textFont = "20px Arial",

	this.drawText = function(x, y, font, colour, text) {
		context.font=font;
		context.fillStyle = colour;
		context.fillText(text,x,y) ;
	}


	this.drawTempText = function(x, y, font, colour, text) {
		var cr = pointerCanvas.getBoundingClientRect();
    	pointerContext.clearRect ( 0 , 0 , pointerCanvas.width, pointerCanvas.height );
		pointerContext.font=font;
		pointerContext.fillStyle = colour;
		pointerContext.fillText(text,x - cr.left ,y - cr.top);
	}

	this.changeFont = function() {
		var e = document.getElementById("fontSel");
		var font = e.options[e.selectedIndex].value;
		var split = tool.textTool.textFont.split(" ");
		this.textFont = split[0] + " " + font;
		this.drawTempText(textPos.x, textPos.y, tool.textTool.textFont, tool.brush.colour, tool.textTool.textToRender);
	}

	this.changeTextSize = function(newSize){
		var e = document.getElementById("fontSel");
		var font = e.options[e.selectedIndex].value;
		this.textFont = newSize + "px " + font;
		this.drawTempText(textPos.x, textPos.y, tool.textTool.textFont, tool.brush.colour, tool.textTool.textToRender);
	}
};var ShapeTool = function(){
	this.shapeType = "rectangle",

	this.getShapeType = function(){
		return this.shapeType;
	}

	this.setShapeType = function(ele, shape) {
		document.getElementById('shapeRect').className = "button tool";
		document.getElementById('shapeCircle').className = "button tool";
		ele.className = "button bselect tool";
		shapeType = shape;
	}


	// Draw Rectangle Methods
	this.drawRect = function(curX, curY, lastX, lastY, size, colour) {
		var lastP = {
			x: lastX,
			y: lastY
		},
		curP = {
			x: curX,
			y: curY
		}
		var dist = distanceBetween(lastP, curP);
  		var angle = angleBetween(lastP, curP);
    	for (var i = 0; i < dist; i+=1) {
	    	x = lastP.x + (Math.sin(angle) * i);
	    	y = lastP.y + (Math.cos(angle) * i);
	    	context.fillStyle = colour;
			context.fillRect(x - size / 2, y - size / 2, size, size);
    	}
	}

	this.drawTempRect = function(x, y, endX, endY) {
		var cr = pointerCanvas.getBoundingClientRect();
		pointerContext.clearRect ( 0 , 0 , pointerCanvas.width, pointerCanvas.height );
    	pointerContext.fillStyle = tool.brush.colour;
		pointerContext.fillRect(x - cr.left, y - cr.top, (endX - x), (endY - y));
	}
	
	this.drawShapeRect = function(x, y, endX, endY, colour) {
    	context.fillStyle = colour;
		context.fillRect(x, y, (endX - x), (endY - y));
	}

	// Draw Cirle Methods
	this.drawCircle = function(curX, curY, lastX, lastY, size, colour) {
		var lastP = {
			x: lastX,
			y: lastY
		},
		curP = {
			x: curX,
			y: curY
		}
		var dist = distanceBetween(lastP, curP);
  		var angle = angleBetween(lastP, curP);
    	for (var i = 0; i < dist; i+=1) {
	    	x = lastP.x + (Math.sin(angle) * i);
	    	y = lastP.y + (Math.cos(angle) * i);
	    	context.beginPath();
	   		context.fillStyle = colour;
	    	context.arc(x, y, size / 2, false, Math.PI * 2, false);
		    context.closePath();
		    context.fill();
    	}
	}

	this.drawTempCircle = function(x, y, endX, endY, colour) {
		var cr = pointerCanvas.getBoundingClientRect();
		pointerContext.clearRect ( 0 , 0 , pointerCanvas.width, pointerCanvas.height );
		pointerContext.beginPath();
		var radius = 0;
		if(Math.abs((endX - x)) > Math.abs((endY - y))) {
			radius = Math.abs((endX - x));
		} else {
			radius = Math.abs((endY - y));
		}
		pointerContext.arc(x - cr.left, y - cr.top, radius, 0, 2 * Math.PI, false);
		pointerContext.fillStyle = colour;
		pointerContext.fill();
	}
	
	this.drawShapeCircle = function(x, y, endX, endY, colour) {
		context.beginPath();
		var radius = 0;
		if(Math.abs((endX - x)) > Math.abs((endY - y))) {
			radius = Math.abs((endX - x));
		} else {
			radius = Math.abs((endY - y));
		}
		context.arc(x, y, radius, 0, 2 * Math.PI, false);
		context.fillStyle = colour;
		context.fill();
	}
};/*------------------------------------------
	Global JS
	
	Events - Mouse
	Events - Key
	Events - onChange
	Events - Click
------------------------------------------*/

var mouseDown = false;
var mousePos = {
	x : 0,
	y : 0
}
var lastPos = {
	x: 0,
	y: 0
}
var socket = io.connect();
var hasSynced = false;
var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var pointerCanvas = document.getElementById('pointer-canvas');
var pointerContext = pointerCanvas.getContext('2d');

var canDraw = false;

var tool = new ToolSet();
var room = new Room();
	
var name;
var randomNames;
var connectedUsers;
var currentlyVoting = false;
var readyForText = false;
var currentlySaving = false;
var textPos = {
	x: 0,
	y: 0
};
var readyForShape = false;
// Cannot remove shapeType as it introduces a bug where cirlce can never be toogled
var shapeType = "rectangle"; 

var shapePos = {
	x: 0,
	y: 0
};
var shapeEndPos = {
	x: 0,
	y: 0
};
var messageCounter = 0;
var userJoinCounter = 0;
var canvasRect = canvas.getBoundingClientRect();

function sendChatMessage() {
	var data = {
		'name': name,
		'message': document.getElementById('chat-message').value
	}
	if(data.message.length > 0) {
		document.getElementById('chat-message').value = "";
		addChatMessage(data);
		socket.emit('chat message', data);
	}
}

document.getElementById('chat-message').onkeypress = function(e){
    if (!e) e = window.event;
    var keyCode = e.keyCode || e.which;
    if (keyCode == '13'){
     	sendChatMessage();
      	return false;
    }
}

document.getElementById('name').onkeypress = function(e){
    if (!e) e = window.event;
    var keyCode = e.keyCode || e.which;
    if (keyCode == '13'){
     	sync();
      	return false;
    }
}

function pickRandomName() {
	var rand = Math.floor(Math.random() * randomNames.length);
	return randomNames[rand];
}

function setNameTextBox() {
	var theName = pickRandomName();
	document.getElementById('name').value = theName;
	name = theName;
}

function init() {
	context.fillStyle = "white";
	context.fillRect(0, 0, canvas.width, canvas.height);
	webGLStart();
	getNameList();
}

function getNameList() {
	var txtFile = new XMLHttpRequest();
	txtFile.open("GET", "/files/names.txt", true);
	txtFile.onreadystatechange = function() {
		if (txtFile.readyState === 4) {  // document is ready to parse.
		    if (txtFile.status === 200) {  // file is found
		      	allText = txtFile.responseText; 
		      	lines = txtFile.responseText.split("\n");
		      	randomNames = lines;
		      	setNameTextBox();
		    }
		}
	}
	txtFile.send(null);
}


function createRoom() {
	var isPublic = document.getElementById('myonoffswitch').checked;
	socket.emit('create room', isPublic);
}

function joinRoom() {
	insertURLParam("room", selectedRoom);
}

socket.on('cannot create room', function(data) {
	alert(data);
});

socket.on('room result', function(data) {
	insertURLParam("room", data);
});

function sync() {
	if(hasSynced === false) {
		name = document.getElementById('name').value;
		var me = {
			'id': getURLParam('room'),
			'name' : name,
			'colour': tool.brush.colour
		}
		socket.emit('join room', getURLParam('room'));
		socket.emit('im online', me);
	}
}

socket.on('name taken', function() {
	document.getElementById('name-taken').className = "";
});

socket.on('user validated', function() {
	document.getElementById('name-content').className = "invisible";
	document.getElementById('name-taken').className = "invisible";
	document.getElementById('currently-syncing').className = "";
	socket.emit('sync');
	// Hide enter name box
});

socket.on('room full', function() {
	document.getElementById('room-full').className = "";
});

socket.on('sync draw', function(data) {
	tool.shapeTool.drawCircle(data['x'], data['y'], data['lastX'], data['lastY'], data['size'], data['colour']);
});

socket.on('sync draw text', function(data) {
	tool.textTool.drawText(data['x'], data['y'], data['font'], data['colour'], data['text']);
});

socket.on('sync draw rect', function(data) {
	tool.shapeTool.drawShapeRect(data['x'], data['y'], data['endX'], data['endY'], data['colour']);
});

socket.on('sync draw circle', function(data) {
	tool.shapeTool.drawShapeCircle(data['x'], data['y'], data['endX'], data['endY'], data['colour']);
});

socket.on('sync draw line', function(data) {
	tool.brush.drawShapeLine(data['x'], data['y'], data['endX'], data['endY'], data['colour'], data['size'], data['lineTip']);
});

socket.on('sync erase', function(data) {
	tool.shapeTool.drawRect(data['x'], data['y'], data['lastX'], data['lastY'], data['size'], "white");
});

socket.on('sync draw square', function(data) {
	tool.shapeTool.drawRect(data['x'], data['y'], data['lastX'], data['lastY'], data['size'], "white");
});

socket.on('sync result', function(data) {
	document.getElementById('name-wrap').className = "invisible";
	if(data != null) {
		var img = new Image();
		img.onload = function(){
		  	context.drawImage(img,0,0); // Or at whatever offset you like
		};
		img.src = data;
	}
	hasSynced = true;
});

socket.on('send canvas', function() {
	socket.emit('recieve canvas', canvas.toDataURL());
});

socket.on('user list', function(data) {
	clearUsers();
	if(data.length != 0) {
		connectedUsers = data.length;
		for(var i = 0; i < data.length; i++) {
			if(data[i] != null) {
				if(data[i].name == name) {
					addUser(data[i]['name'] + " (you)", data[i]['colour']);
				} else {
					addUser(data[i]['name'], data[i]['colour']);
				}
			}
		}
		var ele = document.getElementById('users-online-tab');
		if(ele.className != "tab selected") {
			userJoinCounter++;
			ele.innerHTML = '<a>Users Online</a>' +
					'<div class="orange-notification">' +
							userJoinCounter +
					'</div>';
		} else {
			userJoinCounter = 0;
		}
	}
});

socket.on('sync user colour', function(data) {
	if(data.length != 0) {
		for(var i = 0; i < data.length; i++) {
			var user;
			if(data[i]['name'] === name) {
				user = document.getElementById(data[i]['name'] + " (you)");
				if(user != null) {
					user.innerHTML = '<div class="user-colour" style="background-color:' + data[i]['colour'] + '"></div>' +
								 '<div class="user-name">' + data[i]['name'] + ' (you)</div>';
				}
			} else {
				user = document.getElementById(data[i]['name']);
				if(user != null) {
					user.innerHTML = '<div class="user-colour" style="background-color:' + data[i]['colour'] + '"></div>' +
							     	'<div class="user-name">' + data[i]['name'] + '</div>';
				}
			}
		}
	}	
});

socket.on('recieve clear canvas', function() {
	context.fillStyle = "white";
   	context.fillRect(0, 0, canvas.width, canvas.height);
});

socket.on('send vote clear', function(data) {
	currentlyVoting = true;
	var clearVoteBox = document.getElementById('clear-canvas-vote-box');
	clearVoteBox.className = "";
	document.getElementById('timeRemain').innerHTML = data;
});

socket.on('send clear vote timer', function(data) {
	var clearVoteBox = document.getElementById('clear-canvas-vote-box');
	clearVoteBox.className = "";
	document.getElementById('clear-wrap').className ="table-visible";
	document.getElementById('result').className = "invisible";
	document.getElementById('time').className = "";
	document.getElementById('timeRemain').innerHTML = data['timeRemaining'];
	document.getElementById('pYes').innerHTML = "Yes: " + data['yesVotes'];
	document.getElementById('pNo').innerHTML = "No: " + data['noVotes'];
	document.getElementById('pTotal').innerHTML = "Total Possible: " + data['total'];
	if(currentlyVoting === false) {
		document.getElementById('voteButtons').className = "invisible";
	}
});

socket.on('send clear vote result', function(data) {
	document.getElementById('result').className = "";
	document.getElementById('time').className = "invisible";
	document.getElementById('resultData').innerHTML = data;
});

socket.on('cannot start vote', function(data) {
	// This fixes the invisible buttons bug for some reason
	document.getElementById('voteButtons').className = "";	
	alert("Cannot vote to clear for another: " + data + " seconds.");
});

socket.on('unlock canvas', function(data) {
	currentlyVoting = false;
	document.getElementById('clear-wrap').className = "invisible";
	document.getElementById('voteButtons').className = "";	
});

socket.on('sync chat message', function(data) {
	addChatMessage(data);
	var ele = document.getElementById('users-chat-tab');
	if(ele.className != "tab selected") {
		messageCounter++;
		ele.innerHTML = '<a>Chat</a>' +
				'<div class="orange-notification">' +
						messageCounter +
				'</div>';
	} else {
		messageCounter = 0;
	}
});

socket.on('canvas saved', function(data) {
	var cSavedTimer = new Date().getTime();
	document.getElementById('save-complete').className = "";
	document.getElementById('save-progress').className = "invisible";
	setTimeout(function() {
		document.getElementById('save-wrap').className ="invisible";
		document.getElementById('save-complete').className = "invisible";
		document.getElementById('save-progress').className = "";
		currentlySaving = false;
	}, 1500)
});

socket.on('room does not exist', function() {
	location.reload();
});

function clearChatNotifs() {
	messageCounter = 0;
	document.getElementById('users-chat-tab').innerHTML = '<a>Chat</a>';
}

function clearUserCounter() {
	userJoinCounter = 0;
	document.getElementById('users-online-tab').innerHTML = '<a>Users Online</a>';
}

function addChatMessage(data) {
	var chat = document.getElementById('chat-box');
	var theName = data['name'];
	if(data['name'] === name) {
		theName = "You";
	}
	var newMesage = '<div class="chat-row">' +
						'<div class="name" style="font-weight: bold;">' + theName + ': ' + '</div>' +
						'<div class="message"><p>' + data['message'] + '</p></div>' +
					'</div>';
	chat.innerHTML += newMesage;
	chat.scrollTop = chat.scrollHeight;
}

function clearVote(vote) {
	socket.emit('recieve clear vote', vote);
	document.getElementById('voteButtons').className = "invisible";
}

/*
	Canvas Methods
*/

function clearCanvas() {
   	socket.emit('vote clear');
	document.getElementById('voteButtons').className = "invisible";
}

function distanceBetween(point1, point2) {
  return Math.sqrt(Math.pow(point2.x - point1.x, 2) + Math.pow(point2.y - point1.y, 2));
}
function angleBetween(point1, point2) {
  return Math.atan2( point2.x - point1.x, point2.y - point1.y );
}

var myEvent = window.attachEvent || window.addEventListener;
var chkevent = window.attachEvent ? 'onbeforeunload' : 'beforeunload'; /// make IE7, IE8 compitable

// Fired when just before you leave the site
// It appears the problem here was that it cant send 2 socket.emits()
myEvent(chkevent, function(e) { // For >=IE7, Chrome, Firefox
	var me = {
		'name': name,
		'colour': tool.brush.colour
	};
	if(connectedUsers <= 1) {
		me['canvas'] = canvas.toDataURL();
		socket.emit('im offline store canvas', me);	
	} else {
		socket.emit('im offline', me);	
	}
});

function saveRoom() {
	if(hasSynced === true) {
		currentlySaving = true;
		document.getElementById('save-wrap').className = "table-visible";
		document.getElementById('save-progress').className = "";
		var me = {
			'canvas': canvas.toDataURL()
		};
		socket.emit('store canvas', me);
	}
}

function clearUsers() {
	var users = document.getElementById('users');
	users.innerHTML = "";
}

function addUser(name, colour) {
	var users = document.getElementById('users');
	var newUser = '<div id="' + name + '"class="row">'
						+ '<div class="user-colour" style="background-color: ' + colour + '">'
						+ '</div>'
						+ '<div class="user-name">'
							+ name +
						'</div>'
					+ '</div>';
	users.innerHTML += newUser;
}

/**
** Helper Functions
**/

function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function getMousePos(evt) {
    return {
        x: evt.clientX,
       	y: evt.clientY
    };
}


document.getElementById('brushSelection').addEventListener("input", function(evt){
	tool.brush.setBrushSize(this.value);
});

speedSelection.addEventListener("input", function(evt){
	tool.brush.rainbowSpeed = parseInt(this.value);
	tool.brush.gradientSpeed = parseInt(this.value);
});

var textSizeSel = document.getElementById('textSizeSel');
textSizeSel.addEventListener("input", function(evt){
	tool.textTool.changeTextSize(this.value);
});

function changeLineTip() {
	var e = document.getElementById("lineTip");
	tool.brush.lineTip = e.options[e.selectedIndex].value;
}


function inputColourChange() {
	var rgb = {
		r: document.getElementById("rValue").value | 0,
		g: document.getElementById("gValue").value | 0,
		b: document.getElementById("bValue").value | 0
	};
	onColourChange(rgb);
}

function onHexChange() {
	if(document.getElementById("hexValue").value.length == 7) {
		var rgb = convertHexToRGB(document.getElementById("hexValue").value);
		onColourChange(rgb);
	}
}

function onColourChange(rgb) {
	var hex = convertRGBToHex(rgb.r, rgb.g, rgb.b);
	var hsv = convertRGBToHSV(rgb.r, rgb.g, rgb.b);
	tintPointer = {
		x: Math.ceil((100 - hsv.s) * 2.55),
		y: Math.ceil((100 - hsv.v) * 2.55)
	};
	huePointer = {
		y: Math.ceil((360 - hsv.h) / 360 * 255)
	};
	updateColour();
	tool.brush.setColour(hex);
}


function applyText() {
	if(readyForText == true) {
		var cr = canvas.getBoundingClientRect();
		var data = {
			'x': textPos.x - cr.left,
			'y': textPos.y - cr.top,
			'font': tool.textTool.textFont,
			'colour': tool.brush.colour,
			'text': tool.textTool.textToRender
		};
		socket.emit('draw text', data);
		tool.textTool.drawText(data['x'], data['y'], tool.textTool.textFont, data['colour'], tool.textTool.textToRender);
		tool.textTool.textToRender = "";
		document.getElementById('text-tool-text').value = "";
		tool.textTool.drawTempText(textPos.x, textPos.y, tool.textTool.textFont, data['colour'], tool.textTool.textToRender);
		readyForText = false;
		document.getElementById('text-tool-text').blur();
	}
}


/*------------------------------------------
	Events (Mouse)
------------------------------------------*/
document.addEventListener('mousemove', function(evt) {
	lastPos = mousePos;
	mousePos = getMousePos(evt);
	if(tool.getBrushType() === "freeroam" || tool.getBrushType() === "gradient-brush" || tool.getBrushType() === "rainbow-brush") {
		tool.brush.drawBrushOutline(mousePos.x, mousePos.y);
	} else if(tool.getBrushType() === "eraser" || tool.getBrushType() === "square-brush"){
		tool.brush.drawEraserOutline(mousePos.x, mousePos.y);
	}
	if(mouseDown === true && hasSynced === true && canDraw === true) {
		if(tool.getBrushType() === "freeroam") {
			tool.brush.draw();
		} else if(tool.getBrushType() === "gradient-brush") {
			if(tool.brush.gradientTimer >= 255) {
				tool.brush.gradientSwitch = true;
			} else if(tool.brush.gradientTimer <= 0) {
				tool.brush.gradientSwitch = false;
			}
			if(tool.brush.gradientSwitch === true) {
				tool.brush.gradientTimer -= tool.brush.gradientSpeed;
			} else {
				tool.brush.gradientTimer += tool.brush.gradientSpeed;
			}

			tool.brush.gradientDraw();
		}  else if(tool.getBrushType() === "rainbow-brush") {
	    	tool.brush.rainbowPointer+=tool.brush.rainbowSpeed;
	    	if(tool.brush.rainbowPointer >= 255) {
	    		tool.brush.rainbowPointer = 0;
	    	}
	    	tool.brush.rainbowDraw();
		} else if(tool.getBrushType() === "dropper"){
	    	if(mouseIsHoveringCanvas(canvas)) {
	    		if(currentlyVoting === false && currentlySaving === false) {
    				var rgb = getColourOnCanvas(canvas, context);
					onColourChange(rgb);
				}
			}
		} else if(tool.getBrushType() === "eraser"){
		    tool.brush.erase();
		} else if(tool.getBrushType() === "square-brush"){
		    tool.brush.drawSquare();
		}  else if(tool.getBrushType() === "text"){
			textPos = mousePos;
			tool.textTool.drawTempText(textPos.x, textPos.y, tool.textTool.textFont, tool.brush.colour, tool.textTool.textToRender);
		} else if(tool.getBrushType() === "shape"){
	    	if(readyForShape === true) {
	    		if(currentlyVoting === false && currentlySaving === false) {
		    		shapeEndPos = mousePos;
		    		if(shapeType === "rectangle") {
		    			tool.shapeTool.drawTempRect(shapePos.x, shapePos.y, shapeEndPos.x, shapeEndPos.y, tool.brush.colour);
		    		} else if(shapeType === "circle") {
		    			tool.shapeTool.drawTempCircle(shapePos.x, shapePos.y, shapeEndPos.x, shapeEndPos.y, tool.brush.colour);
		    		}
	    		}
	    	}
		} else if(tool.getBrushType() === "line"){
	    	if(readyForShape === true) {
	    		if(currentlyVoting === false && currentlySaving === false) {
	    			shapeEndPos = mousePos;
	    			tool.brush.drawTempLine(shapePos.x, shapePos.y, shapeEndPos.x, shapeEndPos.y, tool.brush.colour, tool.brush.size, tool.brush.lineTip);
	    		}
	    	}
		}

	} else if(hasSynced === true) {
		changeColour();
	}
}, false);

document.addEventListener("mousedown", function(evt) {
	canvas.className = "dragged";
	if(evt.button === 0) {
    	mouseDown = true;
    	if(mouseDown === true) {
    		if(hasSynced === true) {
    			// Located in colour-picker2.js
	    		if(canMoveTintPointer === false) {
			        if(mouseIsHoveringCanvas(tintCanvas)) {
			            canMoveTintPointer = true;
			            canDraw = false;
			        }  else if(mouseIsHoveringCanvas(hueCanvas)) {
			        	canMoveHuePointer = true;
			        	canDraw = false;
			        } 
			    }
			    // To stop drawing when dragging tint pointer
			    if(canDraw === false) {
	    			if(mouseIsHoveringCanvas(canvas)) {
						canDraw = true;
					}
	    		}
	    		changeColour();
	    		if(canDraw === true) {
				    if(tool.getBrushType() === "freeroam") {
				    	tool.brush.draw();
				    } else if(tool.getBrushType() === "gradient-brush") {
			    		tool.brush.gradientTimer = 0;
			    		tool.brush.gradientDraw();
				    } else if(tool.getBrushType() === "rainbow-brush") {
				    	tool.brush.rainbowDraw();
				    } else if(tool.getBrushType() === "dropper"){
				    	if(mouseIsHoveringCanvas(canvas)) {
			    			if(currentlyVoting === false && currentlySaving === false) {
		    					var rgb = getColourOnCanvas(canvas, context);
								onColourChange(rgb);
							}
						}
					} else if(tool.getBrushType() === "text"){
				    	if(currentlyVoting === false && currentlySaving === false) {
					    	readyForText = true;
					    	textPos = mousePos;
				    	}
						tool.textTool.drawTempText(textPos.x, textPos.y, tool.textTool.textFont, tool.brush.colour, tool.textTool.textToRender);
					} else if(tool.getBrushType() === "shape"){
				    	if(readyForShape === false) {
				    		if(currentlyVoting === false && currentlySaving === false) {
					    		readyForShape = true;
					    		shapePos = mousePos;
			    			}
				    	}
					} else if(tool.getBrushType() === "line"){
				    	if(readyForShape === false) {
				    		if(currentlyVoting === false && currentlySaving === false) {
					    		readyForShape = true;
				    			shapePos = mousePos;
				    		}
				    	}
					} else if(tool.getBrushType() === "eraser"){
			    		tool.brush.erase();
					} else if(tool.getBrushType() === "fillBucket") {
						fillBucket(context, tool.brush.colour);
						tool.brush.setBrushType("freeroam");
					}
				}
    		}
    	}
	}
});
document.addEventListener("mouseup", function(evt) {
	canvas.className = ""; // Reverts to no classname
	if(evt.button === 0) {
    	mouseDown = false;
    	if(readyForShape === true) {
    		pointerContext.clearRect ( 0 , 0 , pointerCanvas.width, pointerCanvas.height );
    		canvasRect = canvas.getBoundingClientRect();
    		if(tool.getBrushType() === "shape"){
    			if(currentlyVoting === false && currentlySaving === false) {
		    		var shapeData = {
		    			'x': shapePos.x - canvasRect.left,
		    			'y': shapePos.y - canvasRect.top,
		    			'endX': shapeEndPos.x - canvasRect.left,
		    			'endY': shapeEndPos.y - canvasRect.top,
		    			'colour': tool.brush.colour
		    		}
		    		if(shapeType === "rectangle") {
			    		tool.shapeTool.drawShapeRect(shapeData['x'], shapeData['y'], shapeData['endX'], shapeData['endY'], shapeData['colour']);
			    		socket.emit('draw rect', shapeData);
		    		} else if(shapeType === "circle") {
			    		tool.shapeTool.drawShapeCircle(shapeData['x'], shapeData['y'], shapeData['endX'], shapeData['endY'], shapeData['colour']);
			    		socket.emit('draw circle', shapeData);
	    			}
    			}
    		} else if(tool.getBrushType() === "line") {
  				if(currentlyVoting === false && currentlySaving === false) {
	    			var lineData = {
		    			'x': shapePos.x - canvasRect.left,
		    			'y': shapePos.y - canvasRect.top,
		    			'endX': shapeEndPos.x - canvasRect.left,
		    			'endY': shapeEndPos.y - canvasRect.top,
		    			'lineTip': tool.brush.lineTip,
		    			'size': tool.brush.size,
		    			'colour': tool.brush.colour
		    		};
			    	tool.brush.drawShapeLine(lineData['x'], lineData['y'], lineData['endX'], lineData['endY'], lineData['colour'], lineData['size'], lineData['lineTip']);
			    	socket.emit('draw line', lineData);
		    	}
    		}
    		readyForShape = false;
    	}
    	readyForShape = false;
	    // Located in colour-picker2.js
	    if(canMoveTintPointer === true) {
	        canMoveTintPointer = false;
	    }

	    if(canMoveHuePointer === true) {
	    	canMoveHuePointer = false;
	    }

    	if(canDraw === true) {
			canDraw = false;
		}
	}
});


/*------------------------------------------
	Events (Keys)
------------------------------------------*/

document.body.addEventListener("keydown", function(e) {
	if(readyForText === true) {
		if(currentlyVoting === false && currentlySaving === false) {
			tool.textTool.textToRender = document.getElementById('text-tool-text').value;	
			tool.textTool.drawTempText(textPos.x, textPos.y, tool.textTool.textFont, tool.brush.colour, tool.textTool.textToRender);
			document.getElementById('text-tool-text').focus();
			if(e.keyCode == 13) {
		    	applyText();
		    }
		}
	}
});
 
document.body.addEventListener("keyup", function(e) {
	if(readyForText === true) {
		if(currentlyVoting === false && currentlySaving === false) {
			tool.textTool.textToRender = document.getElementById('text-tool-text').value;	
			tool.textTool.drawTempText(textPos.x, textPos.y, tool.textTool.textFont, tool.brush.colour, tool.textTool.textToRender);
		}
	}
});


/*------------------------------------------
	Events (onChange)
------------------------------------------*/
// Search room
document.getElementById('room-search').addEventListener('change', function(evt){
	room.searchRoom();
});

// Change fonts
document.getElementById('fontSel').addEventListener('change', function(evt){
	tool.textTool.changeFont();
});

/*------------------------------------------
	Events (Click) - Tools
------------------------------------------*/
document.getElementById('clearCanvas').addEventListener('click', function(evt){
	clearCanvas();
});

/* Brushes */
document.getElementById('brushes').addEventListener('click', function(evt){
	tool.brush.setBrushType('freeroam');
	resetCategoryFlags();
	resetSubCategoryFlags();
	this.className = "button bselect tool";
	document.getElementById('brush-settings').className = "inline-block";

	var brush = document.getElementById('brush');
	brush.className = "button bselect tool";
});

document.getElementById('brush').addEventListener('click', function(evt){
	resetSubCategoryFlags();
	tool.brush.setBrushType('freeroam');
	this.className = "button bselect tool";
	document.getElementById('brush-settings').className = "inline-block";


	document.getElementById('canvas').style.cursor = "none";
	document.getElementById('pointer-canvas').style.cursor = "none";
});

document.getElementById('square-brush').addEventListener('click', function(evt){
	resetSubCategoryFlags();
	tool.brush.setBrushType('square-brush');
	this.className = "button bselect tool";
	document.getElementById('brush-settings').className = "inline-block";


	document.getElementById('canvas').style.cursor = "none";
	document.getElementById('pointer-canvas').style.cursor = "none";
});

document.getElementById('gradient-brush').addEventListener('click', function(evt){
	resetSubCategoryFlags();
	tool.brush.setBrushType('gradient-brush');
	this.className = "button bselect tool";
	document.getElementById('brush-settings').className = "";
	document.getElementById('rainbow-settings').className = "inline-block";


	document.getElementById('canvas').style.cursor = "none";
	document.getElementById('pointer-canvas').style.cursor = "none";
});

document.getElementById('rainbow-brush').addEventListener('click', function(evt){
	resetSubCategoryFlags();
	tool.brush.setBrushType('rainbow-brush');
	this.className = "button bselect tool";
	document.getElementById('brush-settings').className = "";
	document.getElementById('rainbow-settings').className = "inline-block";

	document.getElementById('canvas').style.cursor = "none";
	document.getElementById('pointer-canvas').style.cursor = "none";
});

document.getElementById('line-tool').addEventListener('click', function(evt){
	resetSubCategoryFlags();
	tool.brush.setBrushType('line');
	this.className = "button bselect tool";
	document.getElementById('canvas').style.cursor = "pointer";
	document.getElementById('pointer-canvas').style.cursor = "pointer";
	document.getElementById('brush-settings').className = "";
	document.getElementById('line-settings').className = "inline-block";
});

document.getElementById('eraser').addEventListener('click', function(evt){
	resetSubCategoryFlags();
	tool.brush.setBrushType('eraser');
	this.className = "button bselect tool";
	document.getElementById('brush-settings').className = "";
});


/* Shape tool */
document.getElementById('shape-tool').addEventListener('click', function(evt){
	resetCategoryFlags();
	resetSubCategoryFlags();
	tool.brush.setBrushType('shape');
	tool.shapeTool.setShapeType(document.getElementById('shapeRect'), 'rectangle');
	this.className = "button bselect tool";
	document.getElementById('canvas').style.cursor = "pointer";
	document.getElementById('pointer-canvas').style.cursor = "pointer";
	document.getElementById('shape-settings').className = "";
});


document.getElementById('shapeRect').addEventListener('click', function(evt){
	resetSubCategoryFlags();
	tool.shapeTool.setShapeType(this, 'rectangle');
	document.getElementById('shape-settings').className = "inline-block";
});

document.getElementById('shapeCircle').addEventListener('click', function(evt){
	resetSubCategoryFlags();
	tool.shapeTool.setShapeType(this, 'circle');
	document.getElementById('shape-settings').className = "inline-block";
});


document.getElementById('text-tool').addEventListener('click', function(evt){
	resetCategoryFlags();
	resetSubCategoryFlags();	
	tool.brush.setBrushType('text');
	this.className = "button bselect tool";
	document.getElementById('canvas').style.cursor = "text";
	document.getElementById('pointer-canvas').style.cursor = "text";
	document.getElementById('text-settings').className = "";
});

document.getElementById('colourDrop').addEventListener('click', function(evt){
	tool.brush.setBrushType('dropper');
	resetCategoryFlags();
	resetSubCategoryFlags();
	this.className = "button bselect tool";
	document.getElementById('pointer-canvas').style.cursor = "crosshair";
	document.getElementById('dropper-settings').className = "";
});

document.getElementById('saveCanvas').addEventListener('click', function(evt){
	window.open(canvas.toDataURL());
});

function resetCategoryFlags() {
	tool.textTool.textToRender = "";
	readyForText = false;
	// Tools
	document.getElementById('brushes').className = "button tool";
	document.getElementById('colourDrop').className = "button tool";
	//document.getElementById('grid-tool').className = "button tool";
	document.getElementById('text-tool').className = "button tool";
	document.getElementById('shape-tool').className = "button tool";
};



function resetSubCategoryFlags(){
	document.getElementById('brush').className = "button tool";
	document.getElementById('square-brush').className = "button tool";
	document.getElementById('gradient-brush').className = "button tool";
	document.getElementById('rainbow-brush').className = "button tool";
	document.getElementById('line-tool').className = "button tool";
	document.getElementById('eraser').className = "button tool";
	// Shapes
	document.getElementById('shapeRect').className = "button tool";
	document.getElementById('shapeCircle').className = "button tool";

	// Tool Settings
	document.getElementById('brush-settings').className = "invisible";
	document.getElementById('rainbow-settings').className = "invisible";
	document.getElementById('dropper-settings').className = "invisible";
	document.getElementById('text-settings').className = "invisible";
	document.getElementById('shape-settings').className = "invisible";
	document.getElementById('line-settings').className = "invisible";
}

/*document.getElementById('fillBucket').addEventListener('click', function(evt){
	tool.brush.setBrushType('fillBucket');
});
*//**
** Note: This is not finished
**/
function fillBucket(ctx, colour) {
	var colourVal = hexToRgb(colour);
	var colourSelected = getColourOnCanvas(canvas, context);
	var imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
	 for(var i = 0; i < imgData.data.length - 4; i+=4) {
	 	if(imgData.data[i] == colourSelected.r && 
	 		imgData.data[i + 1] == colourSelected.g && 
	 		imgData.data[i + 2] == colourSelected.b && 
	 		imgData.data[i + 3] == colourSelected.a) {

	 		imgData.data[i] = colourVal.r;
	 		imgData.data[i + 1] = colourVal.g;
	 		imgData.data[i + 2] = colourVal.b;
	 		imgData.data[i + 3] = 255;
	 	}
	 }
	 context.putImageData(imgData, 0, 0);
	 socket.emit('canvas update', canvas.toDataURL());
}

/**
** Helper function
**/
function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}/**
** Global Variables
**/
var squareVertexPositionBuffer;
var squareVertexColorBuffer;
var blackVertexColorBuffer;
var gl;
var mvMatrix = mat4.create();
var pMatrix = mat4.create();
var shaderProgram;
var pickedColour = {
    r: 255,
    g: 0,
    b: 0
}
var tintCtx;
var tintPointerCtx;
var hueCtx;
var image;
var webglCanvas;
var hueCanvas;
var tintCanvas;
var tintPointerCanvas;
var tintPointer = {
    x: 0,
    y: 0
}
var huePointer = {
    y: 0
}
var canMoveTintPointer = false;
var canMoveHuePointer = false;
var colourTimer = new Date().getTime();

/**
** WebGL Functions
**/
function webGLStart() {
    webglCanvas = document.getElementById("webgl-temp");
    tintCanvas = document.getElementById("tint");
    tintCtx = tintCanvas.getContext('2d');
    tintPointerCanvas = document.getElementById("tint-pointer");
    tintPointerCtx = tintPointerCanvas.getContext('2d');
    hueCanvas = document.getElementById("hue");
    hueCtx = hueCanvas.getContext('2d');
    image = new Image();
    image.onload = function() {
        hueCtx.drawImage(image, 0, 0);
    },
    image.src = "img/colour-range.png";
    initGL(webglCanvas);
    initShaders();
    initBuffers();

    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.disable(gl.DEPTH_TEST);
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

    drawColourSquare();
    drawTintPointer();
  }

function initGL(canvas) {
	try {
        gl = canvas.getContext("webgl",{'alpha': false }) || canvas.getContext("experimental-webgl",{'alpha': false });
		gl.viewportWidth = canvas.width;
		gl.viewportHeight = canvas.height;
	} catch(e) {
	}
	if (!gl) {
		alert("Could not initialise WebGL, sorry :-( ");
	}
}

function initShaders() {
	var fragmentShader = getShaderFromVar(basicFragShader, "Frag");
	var vertexShader = getShaderFromVar(basicVertShader, "Vert");
	shaderProgram = gl.createProgram();
	gl.attachShader(shaderProgram, vertexShader);
	gl.attachShader(shaderProgram, fragmentShader);
	gl.linkProgram(shaderProgram);

	if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
	alert("Could not initialise shaders");
	}
	gl.useProgram(shaderProgram);
	shaderProgram.vertexPositionAttribute = gl.getAttribLocation(shaderProgram, "aVertexPosition");
    gl.enableVertexAttribArray(shaderProgram.vertexPositionAttribute);
    shaderProgram.vertexColorAttribute = gl.getAttribLocation(shaderProgram, "aVertexColor");
    gl.enableVertexAttribArray(shaderProgram.vertexColorAttribute);
    shaderProgram.pMatrixUniform = gl.getUniformLocation(shaderProgram, "uPMatrix");
    shaderProgram.mvMatrixUniform = gl.getUniformLocation(shaderProgram, "uMVMatrix");
}

function getShaderFromVar(shaderSrc, type) {
    var shader;
    if(type == "Vert" || type == "Vertex" || type == "VertexShader") {
        shader = gl.createShader(gl.VERTEX_SHADER);  
    } else if(type == "Frag" || type == "Fragment" || type == "FragmentShader") {
        shader = gl.createShader(gl.FRAGMENT_SHADER); 
    } else {
        console.log("Error: Cannot get shader. Invalid type provided.");
        return;
    }
    gl.shaderSource(shader, shaderSrc);
    gl.compileShader(shader);

    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        alert(gl.getShaderInfoLog(shader));
        return null;
    }
    return shader;
}

function initBuffers() {
    squareVertexPositionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, squareVertexPositionBuffer);
    vertices = [
         1.0,  1.0,  0.0,
        -1.0,  1.0,  0.0,
         1.0, -1.0,  0.0,
        -1.0, -1.0,  0.0
    ];
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
    squareVertexPositionBuffer.itemSize = 3;
    squareVertexPositionBuffer.numItems = 4;

    blackVertexColorBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, blackVertexColorBuffer);
        var colors = [
        0.0, 0.0, 0.0, 0.0,
        0.0, 0.0, 0.0, 0.0,
        0.0, 0.0, 0.0, 1.0030,
        0.0, 0.0, 0.0, 1.0030
    ];
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.DYNAMIC_DRAW);
    blackVertexColorBuffer.itemSize = 4;
    blackVertexColorBuffer.numItems = 4;

    squareVertexColorBuffer = gl.createBuffer();
    var col = checkPrimaryColour(pickedColour.r, pickedColour.g, pickedColour.b);
     gl.bindBuffer(gl.ARRAY_BUFFER, squareVertexColorBuffer);
    var colors = [
        1.0015, 1.0015, 1.0015, 1.0,
        (pickedColour.r / 255) + col.r, (pickedColour.g / 255) + col.g, (pickedColour.b / 255) + col.b, 1.0,
        1.0015, 1.0015, 1.0015, 1.0,
        (pickedColour.r / 255) + col.r, (pickedColour.g / 255) + col.g, (pickedColour.b / 255) + col.b, 1.0
    ];
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.DYNAMIC_DRAW);
    squareVertexColorBuffer.itemSize = 4;
    squareVertexColorBuffer.numItems = 4;
}


function updateColourBuffer() {
    gl.bindBuffer(gl.ARRAY_BUFFER, blackVertexColorBuffer);
        var colors = [
        0.0, 0.0, 0.0, 0.0,
        0.0, 0.0, 0.0, 0.0,
        0.0, 0.0, 0.0, 1.0030,
        0.0, 0.0, 0.0, 1.0030
    ];
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.DYNAMIC_DRAW);
    blackVertexColorBuffer.itemSize = 4;
    blackVertexColorBuffer.numItems = 4;

    var col = checkPrimaryColour(pickedColour.r, pickedColour.g, pickedColour.b);
     gl.bindBuffer(gl.ARRAY_BUFFER, squareVertexColorBuffer);
    var colors = [
        1.0015, 1.0015, 1.0015, 1.0,
        (pickedColour.r / 255) + col.r, (pickedColour.g / 255) + col.g, (pickedColour.b / 255) + col.b, 1.0,
        1.0015, 1.0015, 1.0015, 1.0,
        (pickedColour.r / 255) + col.r, (pickedColour.g / 255) + col.g, (pickedColour.b / 255) + col.b, 1.0
    ];
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.DYNAMIC_DRAW);
    squareVertexColorBuffer.itemSize = 4;
    squareVertexColorBuffer.numItems = 4;

    drawColourSquare();
}

function checkPrimaryColour(r, g, b) {
    var obj = {
        r: 0,
        g: 0,
        b: 0
    }
    if(r == 255) {
        obj.r = 0.0030;
    }

    if(g == 255) {
        obj.g = 0.0030;
    }

    if(b == 255) {
        obj.b = 0.0030;
    }
    return obj;
}

function setMatrixUniforms() {
	gl.uniformMatrix4fv(shaderProgram.pMatrixUniform, false, pMatrix);
	gl.uniformMatrix4fv(shaderProgram.mvMatrixUniform, false, mvMatrix);
}

function drawColourSquare() {
    gl.viewport(0, 0, gl.viewportWidth, gl.viewportHeight);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    mat4.ortho(this.pMatrix, -1.0, 1.0, -1.0, 1.0, 0.1, 100.0);
    mat4.identity(mvMatrix);
    mat4.translate(mvMatrix, mvMatrix, [0.0, 0.0, -1.0]);
    setMatrixUniforms();

    // First gradient
    gl.bindBuffer(gl.ARRAY_BUFFER, squareVertexPositionBuffer);
    gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, squareVertexPositionBuffer.itemSize, gl.FLOAT, false, 0, 0);
    gl.bindBuffer(gl.ARRAY_BUFFER, squareVertexColorBuffer);
    gl.vertexAttribPointer(shaderProgram.vertexColorAttribute, squareVertexColorBuffer.itemSize, gl.FLOAT, false, 0, 0);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, squareVertexPositionBuffer.numItems);

    //Second gradient
    gl.bindBuffer(gl.ARRAY_BUFFER, squareVertexPositionBuffer);
    gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, squareVertexPositionBuffer.itemSize, gl.FLOAT, false, 0, 0);
    gl.bindBuffer(gl.ARRAY_BUFFER, blackVertexColorBuffer);
    gl.vertexAttribPointer(shaderProgram.vertexColorAttribute, blackVertexColorBuffer.itemSize, gl.FLOAT, false, 0, 0);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, squareVertexPositionBuffer.numItems);

    tintCtx.drawImage(webglCanvas, 0, 0);
}

function drawTintPointer() {
     // Draw the colour pointer
    tintPointerCtx.clearRect ( 0 , 0 , tintPointerCanvas.width, tintPointerCanvas.height );
    tintPointerCtx.beginPath();
    tintPointerCtx.strokeStyle = 'white';
    tintPointerCtx.arc(tintPointer.x,tintPointer.y,5,0,2*Math.PI);
    tintPointerCtx.stroke();
    tintPointerCtx.beginPath();
    tintPointerCtx.strokeStyle = 'black';
    tintPointerCtx.arc(tintPointer.x,tintPointer.y,6,0,2*Math.PI);
    tintPointerCtx.stroke();
    tintPointerCtx.beginPath();
    tintPointerCtx.strokeStyle = 'white';
    tintPointerCtx.arc(tintPointer.x,tintPointer.y,7,0,2*Math.PI);
    tintPointerCtx.stroke();
}

/**
** Colour Picker Functions
**/
function changeColour() {
    var rgb = {
        r: 0,
        g: 0,
        b: 0
    };
    if(canMoveTintPointer === true) {
        var tintRect = tintCanvas.getBoundingClientRect();
        if(mouseIsHoveringCanvas(tintCanvas)) {
            tintPointer = mousePos;
            tintPointer.x -= tintRect.left;
            tintPointer.y -= tintRect.top;
        } else {
            var pos = mousePos;
            if(pos.x < tintRect.left && pos.y < tintRect.top) {
                tintPointer.x = 0;
                tintPointer.y = 0;
            } else if(pos.x >= tintRect.right && pos.y < tintRect.top) {
                tintPointer.x = 255;
                tintPointer.y = 0;
            } else if(pos.x >= tintRect.right && pos.y >= tintRect.bottom) {
                tintPointer.x = 255; 
                tintPointer.y = 255;
            } else if(pos.x < tintRect.left && pos.y >= tintRect.bottom) {
                tintPointer.x = 0;
                tintPointer.y = 255;
            } else if(pos.x < tintRect.left) {
                tintPointer.x = 0;
                tintPointer.y = pos.y - tintRect.top;
            }  else if(pos.x >= tintRect.right) {
                tintPointer.x = 255;
                tintPointer.y = pos.y - tintRect.top;
            } else if(pos.y < tintRect.top) {
                tintPointer.x = pos.x - tintRect.left;
                tintPointer.y = 0; 
            } else if(pos.y >= tintRect.bottom) {
                tintPointer.x = pos.x - tintRect.left;
                tintPointer.y = 255; 
            }
        }

        rgb = getColourOnTintCanvas();
        pickedColour.r = rgb.r;
        pickedColour.g = rgb.g;
        pickedColour.b = rgb.b;
        tool.brush.setColour(convertRGBToHex(rgb.r, rgb.g, rgb.b));
        var currentColour = document.getElementById('currentColour');
        currentColour.style.backgroundColor = convertRGBToHex(pickedColour.r, pickedColour.g, pickedColour.b);
        assignHTMLValues();

        // Draw the tint pointer because it has moved
        drawTintPointer();
    } else if(canMoveHuePointer === true) {
        var hueRect = hueCanvas.getBoundingClientRect();
        if(mouseIsHoveringCanvas(hueCanvas)) {
            huePointer.y = mousePos.y - hueRect.top;
        } else {
            var pos = mousePos;
            if(pos.x < hueRect.left && pos.y < hueRect.top) {
                huePointer.x = 0;
                huePointer.y = 0;
            } else if(pos.x >= hueRect.right && pos.y < hueRect.top) {
                huePointer.x = 0;
                huePointer.y = 0;
            } else if(pos.x >= hueRect.right && pos.y >= hueRect.bottom) {
                huePointer.x = 0; 
                huePointer.y = 255;
            } else if(pos.x < hueRect.left && pos.y >= hueRect.bottom) {
                huePointer.x = 0;
                huePointer.y = 255;
            } else if(pos.x < hueRect.left) {
                huePointer.x = 0;
                huePointer.y = pos.y - hueRect.top;
            }  else if(pos.x >= hueRect.right) {
                huePointer.x = 0;
                huePointer.y = pos.y - hueRect.top;
            } else if(pos.y < hueRect.top) {
                huePointer.x = pos.x - hueRect.left;
                huePointer.y = 0; 
            } else if(pos.y >= hueRect.bottom) {
                huePointer.x = pos.x - hueRect.left;
                huePointer.y = 255; 
            }
        }
        rgb = getColourOnHueCanvas();
        pickedColour.r = rgb.r;
        pickedColour.g = rgb.g;
        pickedColour.b = rgb.b;
        tool.brush.setColour(convertRGBToHex(rgb.r, rgb.g, rgb.b));
        var currentColour = document.getElementById('currentColour');
        currentColour.style.backgroundColor = convertRGBToHex(pickedColour.r, pickedColour.g, pickedColour.b);
        var paletteArrow = document.getElementById('palette-arrow');
        paletteArrow.style.top = huePointer.y - 10 + "px";
        assignHTMLValues();
        updateColourBuffer();
                
        // Apply tint based on tint pointer
        rgb = getColourOnTintCanvas();
        pickedColour.r = rgb.r;
        pickedColour.g = rgb.g;
        pickedColour.b = rgb.b;
        tool.brush.setColour(convertRGBToHex(rgb.r, rgb.g, rgb.b));
        var currentColour = document.getElementById('currentColour');
        currentColour.style.backgroundColor = convertRGBToHex(pickedColour.r, pickedColour.g, pickedColour.b);
        assignHTMLValues();
    }
    if(new Date().getTime() > colourTimer + 200) {
        colourTimer = new Date().getTime();
        socket.emit('update colour', tool.brush.colour); 
    }
}

function updateColour() {
    rgb = getColourOnHueCanvas();
    pickedColour.r = rgb.r;
    pickedColour.g = rgb.g;
    pickedColour.b = rgb.b;
    tool.brush.setColour(convertRGBToHex(rgb.r, rgb.g, rgb.b));
    var currentColour = document.getElementById('currentColour');
    currentColour.style.backgroundColor = convertRGBToHex(pickedColour.r, pickedColour.g, pickedColour.b);
    var paletteArrow = document.getElementById('palette-arrow');

    paletteArrow.style.top = (huePointer.y - 10) + "px";
    assignHTMLValues();
    updateColourBuffer();
       
    // Apply tint based on tint pointer
    rgb = getColourOnTintCanvas();
    pickedColour.r = rgb.r;
    pickedColour.g = rgb.g;
    pickedColour.b = rgb.b;
    tool.brush.setColour(convertRGBToHex(rgb.r, rgb.g, rgb.b));
    var currentColour = document.getElementById('currentColour');
    currentColour.style.backgroundColor = convertRGBToHex(pickedColour.r, pickedColour.g, pickedColour.b);
    assignHTMLValues(); 
    drawTintPointer();
}

function getScrollAmount() {
    var doc = document.documentElement;
    var left = (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
    var top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
    return {x: left, y: top}; 
}

function mouseIsHoveringCanvas(canvas) {
    var pos = mousePos;
    canvasRect = canvas.getBoundingClientRect();
    if(pos.x >= canvasRect.left && pos.x <= canvasRect.right 
        && pos.y >= canvasRect.top && pos.y <= canvasRect.bottom) {
        return true;
    } else {
        return false;
    }
}

function assignHTMLValues() {
    var rValue = document.getElementById('rValue');
    rValue.value = pickedColour.r;
    var gValue = document.getElementById('gValue');
    gValue.value = pickedColour.g;
    var bValue = document.getElementById('bValue');
    bValue.value = pickedColour.b;
    var hexValue = document.getElementById('hexValue');
    hexValue.value = convertRGBToHex(pickedColour.r, pickedColour.g, pickedColour.b);
}

function getColourOnTintCanvas() {
    var x = tintPointer.x;
    var y = tintPointer.y;

    // Make sure within array bounds
    if(x >= 254) {
        x = 254;
    }
    if(y >= 254) {
        y = 254;
    }

    var data = tintCtx.getImageData(x, y, 1, 1);
    var pixels = data.data;
    var rgba = {
        r: pixels[0],
        g: pixels[1],
        b: pixels[2],
        a: pixels[3]
    };
    return rgba;
}

function getColourOnHueCanvas() {
    var y = huePointer.y;

    // Make sure within array bounds
    if(y >= 254) {
        y = 254;
    }

    var data = hueCtx.getImageData(0, y, 1, y + 1);
    var pixels = data.data;
    var rgba = {
        r: pixels[0],
        g: pixels[1],
        b: pixels[2],
        a: pixels[3]
    };
    return rgba;
}

function getColourOnCanvas(canvas, ctx){
    var rect = canvas.getBoundingClientRect();
    var doc = document.documentElement;
    var left = (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
    var top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
    var x = mousePos.x - rect.left;
    var y = mousePos.y - rect.top;

    var data = ctx.getImageData(x, y, 1, 1);
    var pixels = data.data;
    var rgba = {
        r: pixels[0],
        g: pixels[1],
        b: pixels[2],
        a: pixels[3]
    };
    return rgba;
}

/**
** Helper Functions
**/

function convertRGBToHex(red, green, blue){
    var r = red.toString(16);
    var g = green.toString(16);
    var b = blue.toString(16);

    return "#" + binaryResult(r) + binaryResult(g) + binaryResult(b);
}

function convertHexToRGB(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

function binaryResult(col){
    return col.length === 1 ? "0" + col : col;
}

function assignRGBToDom(red, green, blue, hex){
    rgbInputs.r.value = red;
    rgbInputs.g.value = green;
    rgbInputs.b.value = blue;
    rgbInputs.hex.value = hex;
}

function convertRGBToHSV() {
    var rr, gg, bb,
        r = arguments[0] / 255,
        g = arguments[1] / 255,
        b = arguments[2] / 255,
        h, s,
        v = Math.max(r, g, b),
        diff = v - Math.min(r, g, b),
        diffc = function(c){
            return (v - c) / 6 / diff + 1 / 2;
        };

    if (diff == 0) {
        h = s = 0;
    } else {
        s = diff / v;
        rr = diffc(r);
        gg = diffc(g);
        bb = diffc(b);

        if (r === v) {
            h = bb - gg;
        }else if (g === v) {
            h = (1 / 3) + rr - bb;
        }else if (b === v) {
            h = (2 / 3) + gg - rr;
        }
        if (h < 0) {
            h += 1;
        }else if (h > 1) {
            h -= 1;
        }
    }
    return {
        h: Math.round(h * 360),
        s: Math.round(s * 100),
        v: Math.round(v * 100)
    };
}// Typical globals
var usersOnlineTab = document.getElementById('users-online-tab');
var usersChatTab = document.getElementById('users-chat-tab');

// Onclick
usersOnlineTab.onclick = function() {
	usersOnlineTab.className = "tab selected";
	usersChatTab.className = "tab";
	var usersOnline = document.getElementById('users-online');
	usersOnline.className = "visible";
	var usersChat = document.getElementById('users-chat');
	usersChat.className = "invisible";
	clearUserCounter();
};
usersChatTab.onclick = function() {
	usersChatTab.className = "tab selected";
	usersOnlineTab.className = "tab";
	var usersChat = document.getElementById('users-chat');
	usersChat.className = "visible";
	var usersOnline = document.getElementById('users-online');
	usersOnline.className = "invisible";
	clearChatNotifs();
};