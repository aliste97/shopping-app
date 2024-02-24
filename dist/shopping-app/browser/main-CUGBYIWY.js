import{c as s,e as F}from"./chunk-SFRTQ5YV.js";import{C as u,D as d,I as k,K as f,M as n,N as a,O as p,P as I,Q as w,R as T,W as h,da as _,fa as j,ha as H,ia as L,j as b,ja as A,k as C,ka as E,la as N,na as R,oa as g,p as c,q as m,s as S,t as y,v as x,w as l,z as M}from"./chunk-6TKZ26D2.js";var J=[{path:"",redirectTo:"/auth",pathMatch:"full"},{path:"shopping-list",loadChildren:()=>import("./chunk-EI5NQPIW.js").then(e=>e.ShoppingListModule)},{path:"auth",loadChildren:()=>import("./chunk-JWBU7VEN.js").then(e=>e.AuthModule)}],D=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=m({type:t}),t.\u0275inj=l({imports:[g.forRoot(J),g]});let e=t;return e})();function Q(e,t){e&1&&(n(0,"li",7)(1,"a",8),h(2,"Login"),a()())}function U(e,t){e&1&&(n(0,"li",7)(1,"a",9),h(2,"Shopping list"),a()())}function W(e,t){if(e&1){let z=I();n(0,"li",7)(1,"a",10),w("click",function(){S(z);let i=T();return y(i.onLogout())}),h(2,"Logout"),a()()}}var P=(()=>{let t=class t{constructor(o){this.authService=o,this.isAuthenticated=!1}ngOnInit(){this.authService.user.subscribe(o=>{this.isAuthenticated=!!o.token})}onLogout(){this.authService.logout()}};t.\u0275fac=function(i){return new(i||t)(d(s))},t.\u0275cmp=c({type:t,selectors:[["app-header"]],decls:9,vars:3,consts:[[1,"navbar","navbar-expand-lg","bg-body-tertiary"],[1,"container-fluid"],["type","button","data-bs-toggle","collapse","data-bs-target","#navbarSupportedContent","aria-controls","navbarSupportedContent","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler"],[1,"navbar-toggler-icon"],["id","navbarSupportedContent",1,"collapse","navbar-collapse"],[1,"navbar-nav","me-auto","mb-2","mb-lg-0"],["class","nav-item",4,"ngIf"],[1,"nav-item"],["aria-current","page","routerLink","/auth",1,"nav-link","active"],["routerLink","/shopping-list",1,"nav-link",2,"cursor","pointer"],[1,"nav-link",2,"cursor","pointer",3,"click"]],template:function(i,r){i&1&&(n(0,"nav",0)(1,"div",1)(2,"button",2),p(3,"span",3),a(),n(4,"div",4)(5,"ul",5),k(6,Q,3,0,"li",6)(7,U,3,0,"li",6)(8,W,3,0,"li",6),a()()()()),i&2&&(u(6),f("ngIf",!r.isAuthenticated),u(),f("ngIf",r.isAuthenticated),u(),f("ngIf",r.isAuthenticated))},dependencies:[_,R]});let e=t;return e})();var V=(()=>{let t=class t{constructor(o){this.authService=o,this.title="shopping-app"}ngOnInit(){this.authService.autoLogin()}};t.\u0275fac=function(i){return new(i||t)(d(s))},t.\u0275cmp=c({type:t,selectors:[["app-root"]],decls:5,vars:0,consts:[[1,"container"],[1,"row"],[1,"col-md-12"]],template:function(i,r){i&1&&(p(0,"app-header"),n(1,"div",0)(2,"div",1)(3,"div",2),p(4,"router-outlet"),a()()())},dependencies:[N,P]});let e=t;return e})();var B=(()=>{let t=class t{constructor(o){this.authService=o}intercept(o,i){return this.authService.user.pipe(b(1),C(r=>{if(!r||!r.token)return i.handle(o);let G=o.clone({params:new j().set("auth",r.token)});return i.handle(G)}))}};t.\u0275fac=function(i){return new(i||t)(M(s))},t.\u0275prov=x({token:t,factory:t.\u0275fac});let e=t;return e})();var q=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=m({type:t,bootstrap:[V]}),t.\u0275inj=l({providers:[{provide:H,useClass:B,multi:!0}],imports:[E,L,D,F]});let e=t;return e})();A().bootstrapModule(q).catch(e=>console.error(e));