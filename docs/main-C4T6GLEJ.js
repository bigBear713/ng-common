import{D as _,E as d,G as n,H as r,I as h,M,O as x,P as S,R as m,T as D,ja as v,l as a,n as u,o as c,ra as y,s as g,sa as E,t as k,ua as L,va as O,wa as f,x as C,xa as w,y as s,z as b}from"./chunk-7XPSJXHN.js";var I=[{path:"tpl-content-demo",loadChildren:()=>import("./chunk-4IRGJFNB.js").then(t=>t.TplContentDemoModule)},{path:"r-str-demo",loadChildren:()=>import("./chunk-LAFI4JE3.js").then(t=>t.RStrDemoModule)},{path:"placeholder-str-demo",loadChildren:()=>import("./chunk-IPVWXAJH.js").then(t=>t.PlaceholderStrDemoModule)},{path:"img-demo",loadChildren:()=>import("./chunk-IMEBYVUJ.js").then(t=>t.ImgDemoModule)},{path:"standalone-demo",loadChildren:()=>import("./chunk-6KSILFWR.js").then(t=>t.standaloneRoutes)},{path:"call-fn-demo",loadChildren:()=>import("./chunk-QHRJW7WK.js").then(t=>t.callFnDemoRoutes)}],N=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=c({type:e}),e.\u0275inj=a({imports:[f.forRoot(I),f]});let t=e;return t})();function T(t,e){if(t&1){let l=M();n(0,"a",7),x("click",function(){let o=g(l).$implicit,p=S();return k(p.go2Link(o))}),m(1),r()}if(t&2){let l=e.$implicit;d("href",l.link,C),s(),D(" ",l.title," ")}}var R=(()=>{let e=class e{constructor(i){this.gtagService=i,this.title="nb-common-demo",this.links=[{title:"Document",link:"https://github.com/bigBear713/nb-common/blob/main/projects/nb-common/README.md"},{title:"Changelog",link:"https://github.com/bigBear713/nb-common/blob/main/CHANGELOG.md"}]}go2Link(i){this.gtagService.trackLink({link_name:i.title,link:i.link})}};e.\u0275fac=function(o){return new(o||e)(b(w))},e.\u0275cmp=u({type:e,selectors:[["app-root"]],decls:17,vars:1,consts:[["target","_blank",3,"href","click",4,"ngFor","ngForOf"],["routerLink","/tpl-content-demo"],["routerLink","/r-str-demo"],["routerLink","/placeholder-str-demo"],["routerLink","/img-demo"],["routerLink","/standalone-demo"],["routerLink","/call-fn-demo"],["target","_blank",3,"click","href"]],template:function(o,p){o&1&&(n(0,"h2"),_(1,T,2,2,"a",0),r(),h(2,"hr"),n(3,"h3")(4,"a",1),m(5,"tpl content pipe"),r(),n(6,"a",2),m(7,"r-str component"),r(),n(8,"a",3),m(9,"placeholderStr Director"),r(),n(10,"a",4),m(11,"img Director"),r(),n(12,"a",5),m(13,"standalone component"),r(),n(14,"a",6),m(15,"call fn pipe"),r()(),h(16,"router-outlet")),o&2&&(s(),d("ngForOf",p.links))},dependencies:[v,L,O],styles:["h2[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], h3[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{margin:0 8px}"],changeDetection:0});let t=e;return t})();var j=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=c({type:e,bootstrap:[R]}),e.\u0275inj=a({imports:[E,N]});let t=e;return t})();var P={production:!0};P.production&&void 0;y().bootstrapModule(j).catch(t=>console.error(t));
