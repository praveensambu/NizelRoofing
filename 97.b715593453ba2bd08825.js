"use strict";(self.webpackChunkthoo=self.webpackChunkthoo||[]).push([[97],{4097:(v,g,a)=>{a.r(g),a.d(g,{GalleryModule:()=>_});var e=a(8583),d=a(6485),p=a(7957),t=a(7716),u=a(6388),y=a(6975);const l=JSON.parse('[{"id":1,"image":"assets/images/gallery/1.jpg","category":[1,4]},{"id":2,"image":"assets/images/gallery/2.jpg","category":[2,3]},{"id":3,"image":"assets/images/gallery/3.jpg","category":[3,2]},{"id":4,"image":"assets/images/gallery/4.jpg","category":[4,1]},{"id":5,"image":"assets/images/gallery/5.jpg","category":[1,4]},{"id":6,"image":"assets/images/gallery/6.jpg","category":[2,3]}]'),m=JSON.parse('[{"id":1,"title":"Plants"},{"id":2,"title":"Mechanical"},{"id":3,"title":"Chemical"},{"id":4,"title":"Power"}]');function s(n,r){if(1&n){const o=t.EpF();t.TgZ(0,"li",5),t.TgZ(1,"a",6),t.NdJ("click",function(){const c=t.CHM(o),O=c.$implicit,x=c.index;return t.oxw().filterItemsByCategory(O,1+x)}),t._uU(2),t.qZA(),t.qZA()}if(2&n){const o=r.$implicit,i=r.index,c=t.oxw();t.xp6(1),t.Q6J("ngClass",c.activeItem===1+i?"active":""),t.xp6(1),t.Oqu(o.title)}}function Z(n,r){if(1&n&&(t.TgZ(0,"div",10),t.TgZ(1,"div",11),t.TgZ(2,"a",12),t._UZ(3,"img",13),t.qZA(),t.qZA(),t.qZA()),2&n){const o=r.$implicit;t.xp6(2),t.Q6J("href",o.image,t.LSH),t.xp6(1),t.Q6J("src",o.image,t.LSH)}}let f=(()=>{class n{constructor(){this.items=l,this.category=m,this.filteredItems=[]=[...this.items],this.activeItem=0}filterItemsByCategory(o,i){this.filteredItems=this.items.filter(c=>c.category.includes(parseInt(o.id))),this.activeItem=i}reset(o){this.filteredItems=[...this.items],this.activeItem=o}getCategories(o){return m.filter(c=>o.includes(c.id))}ngOnInit(){}}return n.\u0275fac=function(o){return new(o||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-content"]],decls:11,vars:3,consts:[[1,"section-padding","bg-light-white","gallery"],[1,"row"],[1,"col-12"],[1,"tabs","filter-gallery"],[1,"custom-flex","nav","nav-tabs","mb-xl-40"],[1,"nav-item"],["href","javascript:void(0)",1,"nav-link",3,"ngClass","click"],["class","nav-item",4,"ngFor","ngForOf"],[1,"row","gallery-grid","no-gutters"],["class","col-lg-4 col-md-6 filter-box car-gallery",4,"ngFor","ngForOf"],[1,"col-lg-4","col-md-6","filter-box","car-gallery"],[1,"gallery-item"],[1,"popup",3,"href"],["alt","img",1,"image-fit",3,"src"]],template:function(o,i){1&o&&(t.TgZ(0,"section",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"div",3),t.TgZ(4,"ul",4),t.TgZ(5,"li",5),t.TgZ(6,"a",6),t.NdJ("click",function(){return i.reset(0)}),t._uU(7,"All"),t.qZA(),t.qZA(),t.YNc(8,s,3,2,"li",7),t.qZA(),t.qZA(),t.TgZ(9,"div",8),t.YNc(10,Z,4,2,"div",9),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&o&&(t.xp6(6),t.Q6J("ngClass",0===i.activeItem?"active":""),t.xp6(2),t.Q6J("ngForOf",i.category),t.xp6(2),t.Q6J("ngForOf",i.filteredItems))},directives:[e.mk,e.sg],styles:[""]}),n})();var C=a(6562);const T=[{path:"",component:(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(o){return new(o||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-gallery"]],decls:4,vars:0,template:function(o,i){1&o&&(t._UZ(0,"app-header"),t._UZ(1,"app-breadcrumbs"),t._UZ(2,"app-content"),t._UZ(3,"app-footer"))},directives:[u.G,y.n,f,C.c],styles:[""]}),n})()}];let h=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[p.Bz.forChild(T)],p.Bz]}),n})();var A=a(4065);let _=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[e.ez,h,A.m,d.IJ]]}),n})()},6975:(v,g,a)=>{a.d(g,{n:()=>y});var e=a(7716),d=a(9818),p=a(8583),t=a(7957);function u(l,m){if(1&l&&(e.TgZ(0,"h1",6),e.TgZ(1,"span"),e._uU(2),e.qZA(),e.qZA(),e.TgZ(3,"ul",7),e.TgZ(4,"li",8),e.TgZ(5,"a",9),e._uU(6,"Home"),e.qZA(),e.qZA(),e.TgZ(7,"li",10),e._uU(8),e.qZA(),e.qZA()),2&l){const s=m.$implicit;e.xp6(2),e.Oqu(s.displayName),e.xp6(6),e.hij(" ",s.displayName," ")}}let y=(()=>{class l{constructor(){}ngOnInit(){}}return l.\u0275fac=function(s){return new(s||l)},l.\u0275cmp=e.Xpm({type:l,selectors:[["app-breadcrumbs"]],decls:7,vars:1,consts:[["parent",""],[1,"subheader","normal-bg","section-padding"],[1,"container"],[1,"row"],[1,"col-12","wow","fadeInDown"],["ngFor","",3,"ngForOf"],[1,"text-custom-white"],[1,"custom-flex","justify-content-center"],[1,"fw-500"],["routerLink","/",1,"text-custom-white"],[1,"active","fw-500"]],template:function(s,Z){if(1&s&&(e.TgZ(0,"breadcrumb",null,0),e.TgZ(2,"div",1),e.TgZ(3,"div",2),e.TgZ(4,"div",3),e.TgZ(5,"div",4),e.YNc(6,u,9,2,"ng-template",5),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&s){const f=e.MAs(1);e.xp6(6),e.Q6J("ngForOf",f.breadcrumbs)}},directives:[d.LI,p.sg,t.yS],styles:[""]}),l})()}}]);