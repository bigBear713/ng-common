"use strict";(self.webpackChunknb_common_demo=self.webpackChunknb_common_demo||[]).push([[381],{381:(ge,S,c)=>{c.d(S,{vw:()=>pe,dt:()=>T,G4:()=>v,dn:()=>h,vG:()=>y});var a=c(895),n=c(738),N="object"==typeof global&&global&&global.Object===Object&&global,R="object"==typeof self&&self&&self.Object===Object&&self,D=(N||R||Function("return this")()).Symbol,d=Object.prototype,C=d.hasOwnProperty,P=d.toString,l=D?D.toStringTag:void 0;var F=Object.prototype.toString;var g=D?D.toStringTag:void 0;const f=function A(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":g&&g in Object(e)?function j(e){var o=C.call(e,l),t=e[l];try{e[l]=void 0;var r=!0}catch{}var s=P.call(e);return r&&(o?e[l]=t:delete e[l]),s}(e):function x(e){return F.call(e)}(e)},m=function E(e){return null!=e&&"object"==typeof e},J=Array.isArray;var K=c(498),W=c(529),p=c(177);class ee{constructor(o){this.notifier=o}call(o,t){const r=new te(o),s=(0,p.ft)(this.notifier,new p.IY(r));return s&&!r.seenValue?(r.add(s),t.subscribe(r)):r}}class te extends p.Ds{constructor(o){super(o),this.seenValue=!1}notifyNext(){this.seenValue=!0,this.complete()}notifyComplete(){}}const ne=["nb-r-str",""];function oe(e,o){if(1&e&&(n.ynx(0),n._uU(1),n.ALo(2,"async"),n.BQk()),2&e){const t=n.oxw();n.xp6(1),n.Oqu(n.lcZ(2,1,t.asyncContent))}}function re(e,o){if(1&e&&(n.ynx(0),n._uU(1),n.BQk()),2&e){const t=n.oxw();n.xp6(1),n.Oqu(t.content)}}let i=(()=>{class e{constructor(){}isBoolean(t){return function L(e){return!0===e||!1===e||m(e)&&"[object Boolean]"==f(e)}(t)}isNumber(t){return function V(e){return"number"==typeof e||m(e)&&"[object Number]"==f(e)}(t)}isObservable(t){return t instanceof K.y}isPromise(t){return t instanceof Promise}isString(t){return function Z(e){return"string"==typeof e||!J(e)&&m(e)&&"[object String]"==f(e)}(t)}isTemplateRef(t){return t instanceof n.Rgc}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=n.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),b=(()=>{class e{constructor(t){this.valueTypeService=t}transform(t){return this.valueTypeService.isObservable(t)||this.valueTypeService.isPromise(t)}}return e.\u0275fac=function(t){return new(t||e)(n.Y36(i,16))},e.\u0275pipe=n.Yjl({name:"nbIsAsync",type:e,pure:!0}),e})(),h=(()=>{class e{constructor(){this.content=""}get asyncContent(){return this.content}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=n.Xpm({type:e,selectors:[["","nb-r-str",""]],inputs:{content:["nb-r-str","content"]},attrs:ne,decls:4,vars:4,consts:[[3,"ngSwitch"],[4,"ngSwitchCase"],[4,"ngSwitchDefault"]],template:function(t,r){1&t&&(n.ynx(0,0),n.ALo(1,"nbIsAsync"),n.YNc(2,oe,3,3,"ng-container",1),n.YNc(3,re,2,1,"ng-container",2),n.BQk()),2&t&&(n.Q6J("ngSwitch",n.lcZ(1,2,r.content)),n.xp6(2),n.Q6J("ngSwitchCase",!0))},dependencies:[a.RF,a.n9,a.ED,a.Ov,b],encapsulation:2,changeDetection:0}),e})();const ie=new n.OlP("default error image"),se=new n.OlP("default loading image");let T=(()=>{class e{constructor(t,r,s,I){this.changeDR=t,this.defaultErrImg=r,this.defaultLoadingImg=s,this.elementRef=I,this.nbImg="",this.src="",this.loadingImg=this.defaultLoadingImg||"./assets/nb-common/loading.svg",this.errImg=this.defaultErrImg||"./assets/nb-common/picture.svg"}ngOnChanges(t){const{nbImg:r}=t;r?.firstChange&&(this.src=this.elementRef.nativeElement.src),r&&this.loadImage()}loadImage(){this.nbImg?this.loadImgFromNbImg():this.loadImgFromSrc()}loadImgFromNbImg(){this.updateImgSrc(this.loadingImg);const t=new Image;t.src=this.nbImg,t.onerror=()=>this.updateImgSrc(this.errImg),t.onload=()=>this.updateImgSrc(this.nbImg)}loadImgFromSrc(){this.elementRef.nativeElement.onerror=()=>{this.updateImgSrc(this.errImg),this.elementRef.nativeElement.onerror=null}}updateImgSrc(t){this.src=t,this.changeDR.markForCheck()}}return e.\u0275fac=function(t){return new(t||e)(n.Y36(n.sBO),n.Y36(ie,8),n.Y36(se,8),n.Y36(n.SBq))},e.\u0275dir=n.lG2({type:e,selectors:[["img","nbImg",""]],hostVars:1,hostBindings:function(t,r){2&t&&n.Ikx("src",r.src,n.LSH)},inputs:{errImg:"errImg",loadingImg:"loadingImg",nbImg:"nbImg"},features:[n.TTD]}),e})(),v=(()=>{class e{constructor(t,r){this.chageDR=t,this.valueTypeService=r,this.nbPlaceholder="",this.placeholder="",this.destroy$=new W.xQ}ngOnChanges(){this.reRender()}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}reRender(){if(this.valueTypeService.isString(this.nbPlaceholder))return this.placeholder=this.nbPlaceholder,void this.chageDR.markForCheck();this.destroy$.next(),this.nbPlaceholder.pipe(function q(e){return o=>o.lift(new ee(e))}(this.destroy$)).subscribe(t=>this.updatePlaceholder(t))}updatePlaceholder(t){this.placeholder=t,this.chageDR.markForCheck()}}return e.\u0275fac=function(t){return new(t||e)(n.Y36(n.sBO),n.Y36(i))},e.\u0275dir=n.lG2({type:e,selectors:[["","nbPlaceholder",""]],hostVars:1,hostBindings:function(t,r){2&t&&n.Ikx("placeholder",r.placeholder)},inputs:{nbPlaceholder:"nbPlaceholder"},features:[n.TTD]}),e})(),y=(()=>{class e{constructor(t){this.valueTypeService=t}transform(t){return this.valueTypeService.isTemplateRef(t)?t:null}}return e.\u0275fac=function(t){return new(t||e)(n.Y36(i,16))},e.\u0275pipe=n.Yjl({name:"nbTplContent",type:e,pure:!0}),e})(),pe=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[a.ez]}),e})()}}]);