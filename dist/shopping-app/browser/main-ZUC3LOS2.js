import{c as s,e as F}from"./chunk-NP4MAFDN.js";import{C as d,D as u,I as k,K as f,M as a,N as n,O as p,P as I,Q as w,R as N,W as h,ea as T,ga as _,ia as j,j as b,ja as H,k as C,ka as L,la as A,ma as E,oa as R,p as c,pa as g,q as l,s as S,t as y,v as x,w as m,z as M}from"./chunk-4AKX3AKA.js";var J=[{path:"",redirectTo:"/auth",pathMatch:"full"},{path:"shopping-list",loadChildren:()=>import("./chunk-5CRI3QCH.js").then(e=>e.ShoppingListModule)},{path:"auth",loadChildren:()=>import("./chunk-DEZ6IYFN.js").then(e=>e.AuthModule)}],D=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=l({type:t}),t.\u0275inj=m({imports:[g.forRoot(J),g]});let e=t;return e})();function Q(e,t){e&1&&(a(0,"div",4)(1,"ul",5)(2,"a",6),h(3,"Login"),n()()())}function U(e,t){e&1&&(a(0,"div",4)(1,"ul",5)(2,"a",7),h(3,"Shopping list"),n()()())}function W(e,t){if(e&1){let z=I();a(0,"div",4)(1,"ul",8)(2,"a",9),w("click",function(){S(z);let i=N();return y(i.onLogout())}),h(3,"Logout"),n()()()}}var P=(()=>{let t=class t{constructor(o){this.authService=o,this.isAuthenticated=!1}ngOnInit(){this.authService.user.subscribe(o=>{this.isAuthenticated=!!o.token})}onLogout(){this.authService.logout()}};t.\u0275fac=function(i){return new(i||t)(u(s))},t.\u0275cmp=c({type:t,selectors:[["app-header"]],decls:6,vars:3,consts:[[1,"navbar","navbar-expand-lg","navbar-light","bg-light"],["type","button","data-toggle","collapse","data-target","#navbarNav","aria-controls","navbarNav","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler"],[1,"navbar-toggler-icon"],["class","collapse navbar-collapse","id","navbarNav",4,"ngIf"],["id","navbarNav",1,"collapse","navbar-collapse"],[1,"nav","navbar-nav"],["routerLink","/auth",1,"nav-link"],["routerLink","/shopping-list",1,"nav-link",2,"cursor","pointer"],[1,"nav","navbar-nav","navbar-right"],[1,"nav-link",2,"cursor","pointer",3,"click"]],template:function(i,r){i&1&&(a(0,"nav",0)(1,"button",1),p(2,"span",2),n(),k(3,Q,4,0,"div",3)(4,U,4,0,"div",3)(5,W,4,0,"div",3),n()),i&2&&(d(3),f("ngIf",!r.isAuthenticated),d(),f("ngIf",r.isAuthenticated),d(),f("ngIf",r.isAuthenticated))},dependencies:[T,R]});let e=t;return e})();var V=(()=>{let t=class t{constructor(o){this.authService=o,this.title="shopping-app"}ngOnInit(){this.authService.autoLogin()}};t.\u0275fac=function(i){return new(i||t)(u(s))},t.\u0275cmp=c({type:t,selectors:[["app-root"]],decls:5,vars:0,consts:[[1,"container"],[1,"row"],[1,"col-md-12"]],template:function(i,r){i&1&&(p(0,"app-header"),a(1,"div",0)(2,"div",1)(3,"div",2),p(4,"router-outlet"),n()()())},dependencies:[E,P]});let e=t;return e})();var B=(()=>{let t=class t{constructor(o){this.authService=o}intercept(o,i){return this.authService.user.pipe(b(1),C(r=>{if(!r||!r.token)return i.handle(o);let G=o.clone({params:new _().set("auth",r.token)});return i.handle(G)}))}};t.\u0275fac=function(i){return new(i||t)(M(s))},t.\u0275prov=x({token:t,factory:t.\u0275fac});let e=t;return e})();var q=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=l({type:t,bootstrap:[V]}),t.\u0275inj=m({providers:[{provide:j,useClass:B,multi:!0}],imports:[A,H,D,F]});let e=t;return e})();L().bootstrapModule(q).catch(e=>console.error(e));
