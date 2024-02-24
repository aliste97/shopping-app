import{a as Q,b as $,c as z,d as B,e as J,f as K,g as U,h as W,k as X}from"./chunk-STWFHNWT.js";import{C as m,D as d,I as E,K as l,M as s,N as a,O as f,P as S,Q as I,R as A,V as j,W as p,X as T,Y as k,_ as F,a as L,c as N,ca as q,da as P,fa as H,g as D,ha as R,l as O,oa as G,p as g,q as _,s as h,t as v,v as b,w as V,z as w}from"./chunk-ELGTNSRH.js";var u=(()=>{let e=class e{constructor(){this.items=[],this.itemsChanged=new N}getItems(){return this.items.slice()}getItem(t){return this.items[t]}addItem(t){this.items.push(t),this.itemsChanged.next(this.items.slice())}setItems(t){this.items=t,this.itemsChanged.next(this.items.slice())}deleteItem(t){this.items.splice(t,1),this.itemsChanged.next(this.items.slice())}};e.\u0275fac=function(i){return new(i||e)},e.\u0275prov=b({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();var C=(()=>{let e=class e{constructor(t,i){this.http=t,this.shoppingListService=i}storeItem(){let t=this.shoppingListService.getItems();this.http.put("https://shopping-app-001-default-rtdb.europe-west1.firebasedatabase.app/items.json",t).subscribe(i=>{console.log(i)})}fetchItems(){return this.http.get("https://shopping-app-001-default-rtdb.europe-west1.firebasedatabase.app/items.json").pipe(D(t=>t?t.filter(o=>o).map(o=>L({},o)):[]),O(t=>{this.shoppingListService.setItems(t)}))}deleteItem(t){let i=this.shoppingListService.getItems(),o=i.find(r=>r&&r.name===t.name);if(o){let r=i.indexOf(o);this.http.delete("https://shopping-app-001-default-rtdb.europe-west1.firebasedatabase.app/items/"+i.indexOf(o)+".json").subscribe(()=>this.shoppingListService.deleteItem(r))}}};e.\u0275fac=function(i){return new(i||e)(w(R),w(u))},e.\u0275prov=b({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();var y=class{constructor(e,c,t){this.name=e,this.quantity=c,this.id=t}};var Z=(n,e)=>({"is-valid":n,"is-invalid":e}),ee=(()=>{let e=class e{constructor(t,i){this.shoppingListService=t,this.dataStorageService=i}onSubmit(t){if(!t.valid)return;let i=new y(t.value.name,t.value.amount);this.shoppingListService.addItem(i),this.dataStorageService.storeItem()}};e.\u0275fac=function(i){return new(i||e)(d(u),d(C))},e.\u0275cmp=g({type:e,selectors:[["app-add-item"]],decls:14,vars:9,consts:[[3,"ngSubmit"],["itemForm","ngForm"],[1,"form-group","mb-3"],["for","name",1,"form-label"],["type","text","name","name","ngModel","","required","","aria-describedby","nameHelp",1,"form-control",3,"ngClass"],["id","nameHelp",1,"form-text"],["for","exampleInputPassword1",1,"form-label"],["type","number","name","amount","ngModel","","required","",1,"form-control",3,"ngClass"],["type","submit",1,"btn","btn-primary",3,"disabled"]],template:function(i,o){if(i&1){let r=S();s(0,"form",0,1),I("ngSubmit",function(){h(r);let ie=j(1);return v(o.onSubmit(ie))}),s(2,"div",2)(3,"label",3),p(4,"Name"),a(),f(5,"input",4),s(6,"div",5),p(7,"Add a new item to Shopping list"),a()(),s(8,"div",2)(9,"label",6),p(10,"Quantity"),a(),f(11,"input",7),a(),s(12,"button",8),p(13,"Add item"),a()()}if(i&2){let r=j(1);m(5),l("ngClass",F(3,Z,r.value.name,!r.value.name)),m(6),l("ngClass",F(6,Z,r.value.amount,!r.value.amount)),m(),l("disabled",!r.valid)}},dependencies:[K,Q,U,$,z,W,J,B,q]});let n=e;return n})();function oe(n,e){if(n&1){let c=S();s(0,"li",5)(1,"i",6),I("click",function(){let o=h(c).index,r=A();return v(r.onDeleteItem(o))}),a(),p(2),s(3,"span",7),p(4),a()()}if(n&2){let c=e.$implicit;m(2),k(" ",c.name," "),m(2),T(c.quantity)}}var te=(()=>{let e=class e{constructor(t,i){this.shoppingListService=t,this.dataStorageService=i,this.items=[]}ngOnInit(){this.dataStorageService.fetchItems().subscribe(),this.subscription=this.shoppingListService.itemsChanged.subscribe(t=>this.items=t)}onDeleteItem(t){let i=this.shoppingListService.getItem(t);this.dataStorageService.deleteItem(i)}ngOnDestroy(){this.subscription.unsubscribe()}};e.\u0275fac=function(i){return new(i||e)(d(u),d(C))},e.\u0275cmp=g({type:e,selectors:[["app-shopping-list"]],decls:7,vars:1,consts:[[1,"container"],[1,"row"],[1,"col","card"],[1,"list-group"],["class","list-group-item",4,"ngFor","ngForOf"],[1,"list-group-item"],[1,"bi","bi-trash",2,"cursor","pointer",3,"click"],[1,"badge","bg-secondary","float-end"]],template:function(i,o){i&1&&(s(0,"div",0)(1,"div",1)(2,"div",2),f(3,"app-add-item"),a(),s(4,"div",2)(5,"ul",3),E(6,oe,5,2,"li",4),a()()()()),i&2&&(m(6),l("ngForOf",o.items))},dependencies:[P,ee],styles:[".list-group-item[_ngcontent-%COMP%]{padding:1rem 1.5rem;border-radius:.3rem;border:1px solid #dee2e6;margin-top:10px}.badge[_ngcontent-%COMP%]{margin-top:.5rem}.d-grid[_ngcontent-%COMP%]{margin-top:10px}.card[_ngcontent-%COMP%]{margin-top:50px;margin-left:5px;padding-bottom:10px}"]});let n=e;return n})();var xe=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=_({type:e}),e.\u0275inj=V({imports:[X,H,G.forChild([{path:"",component:te}])]});let n=e;return n})();export{xe as ShoppingListModule};
