"use strict";(self.webpackChunknb_common_demo=self.webpackChunknb_common_demo||[]).push([[42],{42:(An,se,c)=>{c.r(se),c.d(se,{CallFnDemoComponent:()=>pt,callFnDemoRoutes:()=>vn});var o=c(666),ae=c(755),le=c(254),mt=c(498),ue=c(688),de=c(850),gt=c(830);function E(n,t){return new mt.y(e=>{const r=n.length;if(0===r)return void e.complete();const i=new Array(r);let s=0,a=0;for(let d=0;d<r;d++){const V=(0,le.D)(n[d]);let y=!1;e.add(V.subscribe({next:A=>{y||(y=!0,a++),i[d]=A},error:A=>e.error(A),complete:()=>{s++,(s===r||!y)&&(a===r&&e.next(t?t.reduce((A,Cn,Vn)=>(A[Cn]=i[Vn],A),{}):i),e.complete())}}))}})}let ce=(()=>{class n{constructor(e,r){this._renderer=e,this._elementRef=r,this.onChange=i=>{},this.onTouched=()=>{}}setProperty(e,r){this._renderer.setProperty(this._elementRef.nativeElement,e,r)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}}return n.\u0275fac=function(e){return new(e||n)(o.Y36(o.Qsj),o.Y36(o.SBq))},n.\u0275dir=o.lG2({type:n}),n})(),g=(()=>{class n extends ce{}return n.\u0275fac=function(){let t;return function(r){return(t||(t=o.n5z(n)))(r||n)}}(),n.\u0275dir=o.lG2({type:n,features:[o.qOj]}),n})();const h=new o.OlP("NgValueAccessor"),vt={provide:h,useExisting:(0,o.Gpc)(()=>O),multi:!0},Vt=new o.OlP("CompositionEventMode");let O=(()=>{class n extends ce{constructor(e,r,i){super(e,r),this._compositionMode=i,this._composing=!1,null==this._compositionMode&&(this._compositionMode=!function Ct(){const n=(0,ae.q)()?(0,ae.q)().getUserAgent():"";return/android (\d+)/.test(n.toLowerCase())}())}writeValue(e){this.setProperty("value",e??"")}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}}return n.\u0275fac=function(e){return new(e||n)(o.Y36(o.Qsj),o.Y36(o.SBq),o.Y36(Vt,8))},n.\u0275dir=o.lG2({type:n,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(e,r){1&e&&o.NdJ("input",function(s){return r._handleInput(s.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(s){return r._compositionEnd(s.target.value)})},features:[o._Bn([vt]),o.qOj]}),n})();const l=new o.OlP("NgValidators"),p=new o.OlP("NgAsyncValidators");function Ae(n){return null!=n}function De(n){return(0,o.QGY)(n)?(0,le.D)(n):n}function Me(n){let t={};return n.forEach(e=>{t=null!=e?{...t,...e}:t}),0===Object.keys(t).length?null:t}function be(n,t){return t.map(e=>e(n))}function Fe(n){return n.map(t=>function Dt(n){return!n.validate}(t)?t:e=>t.validate(e))}function U(n){return null!=n?function Ee(n){if(!n)return null;const t=n.filter(Ae);return 0==t.length?null:function(e){return Me(be(e,t))}}(Fe(n)):null}function R(n){return null!=n?function Oe(n){if(!n)return null;const t=n.filter(Ae);return 0==t.length?null:function(e){return function _t(...n){if(1===n.length){const t=n[0];if((0,ue.k)(t))return E(t,null);if((0,gt.K)(t)&&Object.getPrototypeOf(t)===Object.prototype){const e=Object.keys(t);return E(e.map(r=>t[r]),e)}}if("function"==typeof n[n.length-1]){const t=n.pop();return E(n=1===n.length&&(0,ue.k)(n[0])?n[0]:n,null).pipe((0,de.U)(e=>t(...e)))}return E(n,null)}(be(e,t).map(De)).pipe((0,de.U)(Me))}}(Fe(n)):null}function we(n,t){return null===n?[t]:Array.isArray(n)?[...n,t]:[n,t]}function H(n){return n?Array.isArray(n)?n:[n]:[]}function N(n,t){return Array.isArray(n)?n.includes(t):n===t}function Ge(n,t){const e=H(t);return H(n).forEach(i=>{N(e,i)||e.push(i)}),e}function Be(n,t){return H(t).filter(e=>!N(n,e))}class xe{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(t){this._rawValidators=t||[],this._composedValidatorFn=U(this._rawValidators)}_setAsyncValidators(t){this._rawAsyncValidators=t||[],this._composedAsyncValidatorFn=R(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(t){this._onDestroyCallbacks.push(t)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(t=>t()),this._onDestroyCallbacks=[]}reset(t=void 0){this.control&&this.control.reset(t)}hasError(t,e){return!!this.control&&this.control.hasError(t,e)}getError(t,e){return this.control?this.control.getError(t,e):null}}class u extends xe{get formDirective(){return null}get path(){return null}}class m extends xe{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}}class Te{constructor(t){this._cd=t}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}}let ke=(()=>{class n extends Te{constructor(e){super(e)}}return n.\u0275fac=function(e){return new(e||n)(o.Y36(m,2))},n.\u0275dir=o.lG2({type:n,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(e,r){2&e&&o.ekj("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},features:[o.qOj]}),n})();const D="VALID",G="INVALID",v="PENDING",M="DISABLED";function B(n){return null!=n&&!Array.isArray(n)&&"object"==typeof n}class Re{constructor(t,e){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._assignValidators(t),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(t){this._rawValidators=this._composedValidatorFn=t}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(t){this._rawAsyncValidators=this._composedAsyncValidatorFn=t}get parent(){return this._parent}get valid(){return this.status===D}get invalid(){return this.status===G}get pending(){return this.status==v}get disabled(){return this.status===M}get enabled(){return this.status!==M}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(t){this._assignValidators(t)}setAsyncValidators(t){this._assignAsyncValidators(t)}addValidators(t){this.setValidators(Ge(t,this._rawValidators))}addAsyncValidators(t){this.setAsyncValidators(Ge(t,this._rawAsyncValidators))}removeValidators(t){this.setValidators(Be(t,this._rawValidators))}removeAsyncValidators(t){this.setAsyncValidators(Be(t,this._rawAsyncValidators))}hasValidator(t){return N(this._rawValidators,t)}hasAsyncValidator(t){return N(this._rawAsyncValidators,t)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(t={}){this.touched=!0,this._parent&&!t.onlySelf&&this._parent.markAsTouched(t)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(t=>t.markAllAsTouched())}markAsUntouched(t={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(e=>{e.markAsUntouched({onlySelf:!0})}),this._parent&&!t.onlySelf&&this._parent._updateTouched(t)}markAsDirty(t={}){this.pristine=!1,this._parent&&!t.onlySelf&&this._parent.markAsDirty(t)}markAsPristine(t={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(e=>{e.markAsPristine({onlySelf:!0})}),this._parent&&!t.onlySelf&&this._parent._updatePristine(t)}markAsPending(t={}){this.status=v,!1!==t.emitEvent&&this.statusChanges.emit(this.status),this._parent&&!t.onlySelf&&this._parent.markAsPending(t)}disable(t={}){const e=this._parentMarkedDirty(t.onlySelf);this.status=M,this.errors=null,this._forEachChild(r=>{r.disable({...t,onlySelf:!0})}),this._updateValue(),!1!==t.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors({...t,skipPristineCheck:e}),this._onDisabledChange.forEach(r=>r(!0))}enable(t={}){const e=this._parentMarkedDirty(t.onlySelf);this.status=D,this._forEachChild(r=>{r.enable({...t,onlySelf:!0})}),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent}),this._updateAncestors({...t,skipPristineCheck:e}),this._onDisabledChange.forEach(r=>r(!1))}_updateAncestors(t){this._parent&&!t.onlySelf&&(this._parent.updateValueAndValidity(t),t.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(t){this._parent=t}getRawValue(){return this.value}updateValueAndValidity(t={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===D||this.status===v)&&this._runAsyncValidator(t.emitEvent)),!1!==t.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!t.onlySelf&&this._parent.updateValueAndValidity(t)}_updateTreeValidity(t={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(t)),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?M:D}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(t){if(this.asyncValidator){this.status=v,this._hasOwnPendingAsyncValidator=!0;const e=De(this.asyncValidator(this));this._asyncValidationSubscription=e.subscribe(r=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(r,{emitEvent:t})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(t,e={}){this.errors=t,this._updateControlsErrors(!1!==e.emitEvent)}get(t){let e=t;return null==e||(Array.isArray(e)||(e=e.split(".")),0===e.length)?null:e.reduce((r,i)=>r&&r._find(i),this)}getError(t,e){const r=e?this.get(e):this;return r&&r.errors?r.errors[t]:null}hasError(t,e){return!!this.getError(t,e)}get root(){let t=this;for(;t._parent;)t=t._parent;return t}_updateControlsErrors(t){this.status=this._calculateStatus(),t&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(t)}_initObservables(){this.valueChanges=new o.vpe,this.statusChanges=new o.vpe}_calculateStatus(){return this._allControlsDisabled()?M:this.errors?G:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(v)?v:this._anyControlsHaveStatus(G)?G:D}_anyControlsHaveStatus(t){return this._anyControls(e=>e.status===t)}_anyControlsDirty(){return this._anyControls(t=>t.dirty)}_anyControlsTouched(){return this._anyControls(t=>t.touched)}_updatePristine(t={}){this.pristine=!this._anyControlsDirty(),this._parent&&!t.onlySelf&&this._parent._updatePristine(t)}_updateTouched(t={}){this.touched=this._anyControlsTouched(),this._parent&&!t.onlySelf&&this._parent._updateTouched(t)}_registerOnCollectionChange(t){this._onCollectionChange=t}_setUpdateStrategy(t){B(t)&&null!=t.updateOn&&(this._updateOn=t.updateOn)}_parentMarkedDirty(t){return!t&&!(!this._parent||!this._parent.dirty)&&!this._parent._anyControlsDirty()}_find(t){return null}_assignValidators(t){this._rawValidators=Array.isArray(t)?t.slice():t,this._composedValidatorFn=function Ot(n){return Array.isArray(n)?U(n):n||null}(this._rawValidators)}_assignAsyncValidators(t){this._rawAsyncValidators=Array.isArray(t)?t.slice():t,this._composedAsyncValidatorFn=function wt(n){return Array.isArray(n)?R(n):n||null}(this._rawAsyncValidators)}}const C=new o.OlP("CallSetDisabledState",{providedIn:"root",factory:()=>x}),x="always";function b(n,t,e=x){(function Z(n,t){const e=function Ne(n){return n._rawValidators}(n);null!==t.validator?n.setValidators(we(e,t.validator)):"function"==typeof e&&n.setValidators([e]);const r=function Se(n){return n._rawAsyncValidators}(n);null!==t.asyncValidator?n.setAsyncValidators(we(r,t.asyncValidator)):"function"==typeof r&&n.setAsyncValidators([r]);const i=()=>n.updateValueAndValidity();I(t._rawValidators,i),I(t._rawAsyncValidators,i)})(n,t),t.valueAccessor.writeValue(n.value),(n.disabled||"always"===e)&&t.valueAccessor.setDisabledState?.(n.disabled),function Gt(n,t){t.valueAccessor.registerOnChange(e=>{n._pendingValue=e,n._pendingChange=!0,n._pendingDirty=!0,"change"===n.updateOn&&He(n,t)})}(n,t),function xt(n,t){const e=(r,i)=>{t.valueAccessor.writeValue(r),i&&t.viewToModelUpdate(r)};n.registerOnChange(e),t._registerOnDestroy(()=>{n._unregisterOnChange(e)})}(n,t),function Bt(n,t){t.valueAccessor.registerOnTouched(()=>{n._pendingTouched=!0,"blur"===n.updateOn&&n._pendingChange&&He(n,t),"submit"!==n.updateOn&&n.markAsTouched()})}(n,t),function St(n,t){if(t.valueAccessor.setDisabledState){const e=r=>{t.valueAccessor.setDisabledState(r)};n.registerOnDisabledChange(e),t._registerOnDestroy(()=>{n._unregisterOnDisabledChange(e)})}}(n,t)}function I(n,t){n.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(t)})}function He(n,t){n._pendingDirty&&n.markAsDirty(),n.setValue(n._pendingValue,{emitModelToViewChange:!1}),t.viewToModelUpdate(n._pendingValue),n._pendingChange=!1}function Le(n,t){const e=n.indexOf(t);e>-1&&n.splice(e,1)}function Ye(n){return"object"==typeof n&&null!==n&&2===Object.keys(n).length&&"value"in n&&"disabled"in n}const We=class extends Re{constructor(t=null,e,r){super(function L(n){return(B(n)?n.validators:n)||null}(e),function Y(n,t){return(B(t)?t.asyncValidators:n)||null}(r,e)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(t),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),B(e)&&(e.nonNullable||e.initialValueIsDefault)&&(this.defaultValue=Ye(t)?t.value:t)}setValue(t,e={}){this.value=this._pendingValue=t,this._onChange.length&&!1!==e.emitModelToViewChange&&this._onChange.forEach(r=>r(this.value,!1!==e.emitViewToModelChange)),this.updateValueAndValidity(e)}patchValue(t,e={}){this.setValue(t,e)}reset(t=this.defaultValue,e={}){this._applyFormState(t),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),this._pendingChange=!1}_updateValue(){}_anyControls(t){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(t){this._onChange.push(t)}_unregisterOnChange(t){Le(this._onChange,t)}registerOnDisabledChange(t){this._onDisabledChange.push(t)}_unregisterOnDisabledChange(t){Le(this._onDisabledChange,t)}_forEachChild(t){}_syncPendingControls(){return!("submit"!==this.updateOn||(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),!this._pendingChange)||(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),0))}_applyFormState(t){Ye(t)?(this.value=this._pendingValue=t.value,t.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=t}},jt={provide:m,useExisting:(0,o.Gpc)(()=>X)},ze=(()=>Promise.resolve())();let X=(()=>{class n extends m{constructor(e,r,i,s,a,d){super(),this._changeDetectorRef=a,this.callSetDisabledState=d,this.control=new We,this._registered=!1,this.name="",this.update=new o.vpe,this._parent=e,this._setValidators(r),this._setAsyncValidators(i),this.valueAccessor=function J(n,t){if(!t)return null;let e,r,i;return Array.isArray(t),t.forEach(s=>{s.constructor===O?e=s:function It(n){return Object.getPrototypeOf(n.constructor)===g}(s)?r=s:i=s}),i||r||e||null}(0,s)}ngOnChanges(e){if(this._checkForErrors(),!this._registered||"name"in e){if(this._registered&&(this._checkName(),this.formDirective)){const r=e.name.previousValue;this.formDirective.removeControl({name:r,path:this._getPath(r)})}this._setUpControl()}"isDisabled"in e&&this._updateDisabled(e),function z(n,t){if(!n.hasOwnProperty("model"))return!1;const e=n.model;return!!e.isFirstChange()||!Object.is(t,e.currentValue)}(e,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&null!=this.options.updateOn&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!(!this.options||!this.options.standalone)}_setUpStandalone(){b(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),this._isStandalone()}_updateValue(e){ze.then(()=>{this.control.setValue(e,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(e){const r=e.isDisabled.currentValue,i=0!==r&&(0,o.D6c)(r);ze.then(()=>{i&&!this.control.disabled?this.control.disable():!i&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(e){return this._parent?function T(n,t){return[...t.path,n]}(e,this._parent):[e]}}return n.\u0275fac=function(e){return new(e||n)(o.Y36(u,9),o.Y36(l,10),o.Y36(p,10),o.Y36(h,10),o.Y36(o.sBO,8),o.Y36(C,8))},n.\u0275dir=o.lG2({type:n,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:["disabled","isDisabled"],model:["ngModel","model"],options:["ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[o._Bn([jt]),o.qOj,o.TTD]}),n})();const Lt={provide:h,useExisting:(0,o.Gpc)(()=>K),multi:!0};let K=(()=>{class n extends g{writeValue(e){this.setProperty("value",e??"")}registerOnChange(e){this.onChange=r=>{e(""==r?null:parseFloat(r))}}}return n.\u0275fac=function(){let t;return function(r){return(t||(t=o.n5z(n)))(r||n)}}(),n.\u0275dir=o.lG2({type:n,selectors:[["input","type","number","formControlName",""],["input","type","number","formControl",""],["input","type","number","ngModel",""]],hostBindings:function(e,r){1&e&&o.NdJ("input",function(s){return r.onChange(s.target.value)})("blur",function(){return r.onTouched()})},features:[o._Bn([Lt]),o.qOj]}),n})(),Je=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({}),n})(),pn=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[Je]}),n})(),gn=(()=>{class n{static withConfig(e){return{ngModule:n,providers:[{provide:C,useValue:e.callSetDisabledState??x}]}}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[pn]}),n})();var _n=c(371);const yn=function(n,t){return[n,t]};let pt=(()=>{class n{constructor(){this.val1=0,this.val2=0,this.valArr=[],this.code1="\n    // template\n    {{sum|nbCallFn:[val1,val2]}}\n    // ts\n    sum(valArr: number[]) {\n      return valArr.reduce((result, cur) => {\n        result += cur;\n        return result;\n      }, 0);\n    }\n  ",this.code2="\n  // template\n  {{sum|nbCallFn:valArr}}\n  // ts\n  sum(valArr: number[]) {\n    return valArr.reduce((result, cur) => {\n      result += cur;\n      return result;\n    }, 0);\n  }\n  updateValArr() {\n    this.valArr = [...this.valArr];\n  }\n  ",this.code3="\n  // template\n  {{multiplyBy|nbCallFn:val1:val2}}\n  // ts\n  multiplyBy(val1: number, val2: number) {\n    return val1 * val2;\n  }\n  "}ngOnInit(){}sum(e){return e.reduce((r,i)=>r+i,0)}multiplyBy(e,r){return e*r}onValueChange(e,r){this.valArr[r]=e}updateValArr(){this.valArr=[...this.valArr]}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=o.Xpm({type:n,selectors:[["app-call-fn-demo"]],standalone:!0,features:[o.jDz],decls:46,vars:21,consts:[["type","number",3,"ngModel","ngModelChange"],[3,"click"]],template:function(e,r){1&e&&(o.TgZ(0,"label"),o._uU(1,"val1:"),o.TgZ(2,"input",0),o.NdJ("ngModelChange",function(s){return r.val1=s})("ngModelChange",function(){return r.onValueChange(r.val1,0)}),o.qZA()(),o.TgZ(3,"label"),o._uU(4,"val2:"),o.TgZ(5,"input",0),o.NdJ("ngModelChange",function(s){return r.val2=s})("ngModelChange",function(){return r.onValueChange(r.val2,1)}),o.qZA()(),o.TgZ(6,"h4"),o._uU(7,"\u8c03\u7528multiplyBy\u51fd\u6570"),o.qZA(),o.TgZ(8,"div"),o._uU(9),o.ALo(10,"nbCallFn"),o.qZA(),o.TgZ(11,"h5"),o._uU(12,"\u4ee3\u7801"),o.qZA(),o.TgZ(13,"pre"),o._uU(14,"    "),o.TgZ(15,"code"),o._uU(16),o.qZA(),o._uU(17,"\n  "),o.qZA(),o._UZ(18,"hr"),o.TgZ(19,"h4"),o._uU(20,"\u8c03\u7528sum\u51fd\u6570"),o.qZA(),o.TgZ(21,"div"),o._uU(22),o.ALo(23,"nbCallFn"),o.qZA(),o.TgZ(24,"h5"),o._uU(25,"\u4ee3\u7801"),o.qZA(),o.TgZ(26,"pre"),o._uU(27,"    "),o.TgZ(28,"code"),o._uU(29),o.qZA(),o._uU(30,"\n"),o.qZA(),o.TgZ(31,"button",1),o.NdJ("click",function(){return r.updateValArr()}),o._uU(32,"update valArr"),o.qZA(),o.TgZ(33,"h5"),o._uU(34,"\u9700\u8981\u624b\u52a8\u66f4\u65b0valArr\u6570\u7ec4\uff0cpipe\u624d\u4f1a\u68c0\u6d4b\u5230\u53c2\u6570\u53d8\u5316\uff0c\u4ece\u800c\u6267\u884c"),o.qZA(),o.TgZ(35,"div"),o._uU(36),o.ALo(37,"nbCallFn"),o.qZA(),o.TgZ(38,"h5"),o._uU(39,"\u4ee3\u7801"),o.qZA(),o.TgZ(40,"pre"),o._uU(41,"    "),o.TgZ(42,"code"),o._uU(43),o.qZA(),o._uU(44,"\n  "),o.qZA(),o._UZ(45,"hr")),2&e&&(o.xp6(2),o.Q6J("ngModel",r.val1),o.xp6(3),o.Q6J("ngModel",r.val2),o.xp6(4),o.Oqu(o.Dn7(10,8,r.multiplyBy,r.val1,r.val2)),o.xp6(7),o.hij("\n      ",r.code3,"\n    "),o.xp6(6),o.Oqu(o.xi3(23,12,r.sum,o.WLB(18,yn,r.val1,r.val2))),o.xp6(7),o.hij("\n      ",r.code1,"\n    "),o.xp6(7),o.Oqu(o.xi3(37,15,r.sum,r.valArr)),o.xp6(7),o.hij("\n      ",r.code2,"\n    "))},dependencies:[_n.BW,gn,O,K,ke,X]}),n})();const vn=[{path:"",component:pt}]}}]);