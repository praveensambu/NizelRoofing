"use strict";(self.webpackChunkthoo=self.webpackChunkthoo||[]).push([[460],{7460:(R,p,i)=>{i.r(p),i.d(p,{ContactModule:()=>Y});var o=i(8583),m=i(6485),l=i(665),e=i(7716),f=i(5917),v=i(6215);const h_loadScript=function(t,a,n,c,s){window.ng2recaptchaloaded=()=>{a(grecaptcha)};const r=document.createElement("script");r.innerHTML="",r.src=`${c||"https://www.google.com/recaptcha/api.js"}?render=${t}&onload=ng2recaptchaloaded${n}`,s&&(r.nonce=s),r.async=!0,r.defer=!0,document.head.appendChild(r)},u=new e.OlP("recaptcha-language"),Z=new e.OlP("recaptcha-base-url"),C=new e.OlP("recaptcha-nonce-tag"),_=new e.OlP("recaptcha-settings"),E=new e.OlP("recaptcha-v3-site-key");let b=(()=>{class t{constructor(n,c,s,r,g){this.platformId=n,this.language=c,this.baseUrl=s,this.nonce=r,this.v3SiteKey=g,this.init(),this.ready=(0,o.NF)(this.platformId)?t.ready.asObservable():(0,f.of)()}init(){if(!t.ready&&(0,o.NF)(this.platformId)){const n=new v.X(null);t.ready=n,h_loadScript(this.v3SiteKey||"explicit",r=>n.next(r),this.language?"&hl="+this.language:"",this.baseUrl,this.nonce)}}}return t.\u0275fac=function(n){return new(n||t)(e.LFG(e.Lbi),e.LFG(u,8),e.LFG(Z,8),e.LFG(C,8),e.LFG(E,8))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac}),t.ready=null,t})(),x=0,A=(()=>{class t{constructor(n,c,s,r){this.elementRef=n,this.loader=c,this.zone=s,this.id="ngrecaptcha-"+x++,this.errorMode="default",this.resolved=new e.vpe,this.error=new e.vpe,r&&(this.siteKey=r.siteKey,this.theme=r.theme,this.type=r.type,this.size=r.size,this.badge=r.badge)}ngAfterViewInit(){this.subscription=this.loader.ready.subscribe(n=>{null!=n&&n.render instanceof Function&&(this.grecaptcha=n,this.renderRecaptcha())})}ngOnDestroy(){this.grecaptchaReset(),this.subscription&&this.subscription.unsubscribe()}execute(){"invisible"===this.size&&(null!=this.widget?this.grecaptcha.execute(this.widget):this.executeRequested=!0)}reset(){null!=this.widget&&(this.grecaptcha.getResponse(this.widget)&&this.resolved.emit(null),this.grecaptchaReset())}get __unsafe_widgetValue(){return null!=this.widget?this.grecaptcha.getResponse(this.widget):null}expired(){this.resolved.emit(null)}errored(n){this.error.emit(n)}captchaResponseCallback(n){this.resolved.emit(n)}grecaptchaReset(){null!=this.widget&&this.zone.runOutsideAngular(()=>this.grecaptcha.reset(this.widget))}renderRecaptcha(){const n={badge:this.badge,callback:c=>{this.zone.run(()=>this.captchaResponseCallback(c))},"expired-callback":()=>{this.zone.run(()=>this.expired())},sitekey:this.siteKey,size:this.size,tabindex:this.tabIndex,theme:this.theme,type:this.type};"handled"===this.errorMode&&(n["error-callback"]=(...c)=>{this.zone.run(()=>this.errored(c))}),this.widget=this.grecaptcha.render(this.elementRef.nativeElement,n),!0===this.executeRequested&&(this.executeRequested=!1,this.execute())}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(e.SBq),e.Y36(b),e.Y36(e.R0b),e.Y36(_,8))},t.\u0275cmp=e.Xpm({type:t,selectors:[["re-captcha"]],hostVars:1,hostBindings:function(n,c){2&n&&e.uIk("id",c.id)},inputs:{id:"id",errorMode:"errorMode",siteKey:"siteKey",theme:"theme",type:"type",size:"size",badge:"badge",tabIndex:"tabIndex"},outputs:{resolved:"resolved",error:"error"},exportAs:["reCaptcha"],decls:0,vars:0,template:function(n,c){},encapsulation:2}),t})(),T=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({}),t})(),S=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({providers:[b],imports:[[T]]}),t})(),w=(()=>{class t{constructor(n){this.host=n,this.requiresControllerReset=!1}writeValue(n){n?this.host.__unsafe_widgetValue!==n&&!1===Boolean(this.host.__unsafe_widgetValue)&&(this.requiresControllerReset=!0):this.host.reset()}registerOnChange(n){this.onChange=n,this.requiresControllerReset&&(this.requiresControllerReset=!1,this.onChange(null))}registerOnTouched(n){this.onTouched=n}onResolve(n){this.onChange&&this.onChange(n),this.onTouched&&this.onTouched()}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(A))},t.\u0275dir=e.lG2({type:t,selectors:[["re-captcha","formControlName",""],["re-captcha","formControl",""],["re-captcha","ngModel",""]],hostBindings:function(n,c){1&n&&e.NdJ("resolved",function(r){return c.onResolve(r)})},features:[e._Bn([{multi:!0,provide:l.JU,useExisting:(0,e.Gpc)(()=>t)}])]}),t})(),q=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[l.u5,T]]}),t})();var M=i(7957),F=i(6388),j=i(6975);let U=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-contact-info"]],decls:26,vars:0,consts:[[1,"section-padding","bg-light-white","contact-top"],[1,"container"],[1,"row"],[1,"col-lg-4","col-sm-6"],[1,"contact-info-box","mb-md-40"],[1,"flaticon-placeholder"],[1,"text-theme","fw-600"],[1,"flaticon-telephone-1"],["href","#",1,"text-theme"],[1,"contact-info-box"],[1,"flaticon-envelope"]],template:function(n,c){1&n&&(e.TgZ(0,"section",0),e.TgZ(1,"div",1),e.TgZ(2,"div",2),e.TgZ(3,"div",3),e.TgZ(4,"div",4),e._UZ(5,"i",5),e.TgZ(6,"h6",6),e._uU(7,"13th Street. 47 W 13th St,"),e._UZ(8,"br"),e._uU(9," New York, NY 10011, USA"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(10,"div",3),e.TgZ(11,"div",4),e._UZ(12,"i",7),e.TgZ(13,"h6",6),e.TgZ(14,"a",8),e._uU(15,"(+347) 123 4567 890"),e.qZA(),e._UZ(16,"br"),e._uU(17," Mon-Sat 9:00am-5:00pm"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(18,"div",3),e.TgZ(19,"div",9),e._UZ(20,"i",10),e.TgZ(21,"h6",6),e.TgZ(22,"a",8),e._uU(23,"example@example.com"),e.qZA(),e._UZ(24,"br"),e._uU(25," 24 X 7 online support"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA())},styles:[""]}),t})();class O{}var y=i(1841),I=i(205),B=i(5304);let J=(()=>{class t{constructor(n){this.http=n,this.ServerUrl=location.origin+"/tm/angular/thoo/sendmail.php",this.httpOptions={headers:new y.WM({"Content-Type":"application/json"})}}contactForm(n){return this.http.post(this.ServerUrl,n,this.httpOptions).pipe((0,B.K)(this.handleError))}handleError(n){return n.error instanceof ErrorEvent?console.error("An error occurred:",n.error.message):console.error(`Backend returned code ${n.status}, body was: ${n.error}`),this.errorData={errorTitle:"Oops! Request for document failed",errorDesc:"Something bad happened. Please try again later."},(0,I._)(this.errorData)}ngOnInit(){console.log(this.ServerUrl)}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(y.eN))},t.\u0275dir=e.lG2({type:t}),t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();function D(t,a){1&t&&(e.TgZ(0,"div",27),e.TgZ(1,"ngb-alert",28),e.TgZ(2,"strong"),e._uU(3,"Oops!"),e.qZA(),e._uU(4," Something bad happened. Please try again later. "),e.qZA(),e.qZA()),2&t&&(e.xp6(1),e.Q6J("dismissible",!1))}function V(t,a){1&t&&(e.TgZ(0,"div",29),e.TgZ(1,"ngb-alert",30),e.TgZ(2,"strong"),e._uU(3,"Success!"),e.qZA(),e._uU(4," Contact form has been successfully submitted. "),e.qZA(),e.qZA()),2&t&&(e.xp6(1),e.Q6J("dismissible",!1))}let N=(()=>{class t{constructor(n){this.contactService=n,this.model=new O,this.submitted=!1}onSubmit(){return this.submitted=!0,this.contactService.contactForm(this.model).subscribe(n=>this.model=n,n=>this.error=n)}resolved(n){console.log(`Resolved response token: ${n}`)}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(J))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-contact-form"]],decls:39,vars:10,consts:[[1,"section-padding","contact-form-map"],[1,"container"],[1,"row"],[1,"col-lg-7"],[1,"section-header","style-left"],[1,"section-heading"],[1,"text-custom-black"],[1,"section-description"],[1,"text-light-dark"],[1,"mb-md-80",3,"ngSubmit"],["contactForm","ngForm"],[1,"col-md-6"],[1,"form-group"],["type","text","name","name","placeholder","Name","required","",1,"form-control","form-control-custom",3,"ngModel","ngModelChange"],["type","email","name","email","placeholder","Email I'd","required","",1,"form-control","form-control-custom",3,"ngModel","ngModelChange"],["type","text","name","subject","placeholder","Subject","required","",1,"form-control","form-control-custom",3,"ngModel","ngModelChange"],["type","text","name","phone","placeholder","Phone No.","required","",1,"form-control","form-control-custom",3,"ngModel","ngModelChange"],[1,"col-md-12"],["name","message","rows","5","placeholder","Message","required","",1,"form-control","form-control-custom",3,"ngModel","ngModelChange"],["type","submit",1,"btn-first","btn-submit",3,"disabled"],["name","recaptcha","siteKey","6LeazcwcAAAAAFTLy71rIECmWQw3mGHh-G7ELJtF","size","invisible",3,"ngModel","resolved","ngModelChange"],["class","service-error w-100",4,"ngIf"],[1,"contact-message","w-100",3,"hidden"],["class","contact-success w-100 mt-3",4,"ngIf"],[1,"col-lg-5"],[1,"contact-map","full-height"],["title","contactmap","src","https://maps.google.com/maps?q=university%20of%20san%20francisco&t=&z=13&ie=UTF8&iwloc=&output=embed",1,"full-height"],[1,"service-error","w-100"],["type","danger",1,"mb-0","w-100","mt-3",3,"dismissible"],[1,"contact-success","w-100","mt-3"],["type","success",1,"mb-0","w-100",3,"dismissible"]],template:function(n,c){if(1&n&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"div",2),e.TgZ(3,"div",3),e.TgZ(4,"div",4),e.TgZ(5,"div",5),e.TgZ(6,"h3",6),e._uU(7,"Get In Touch"),e.qZA(),e.TgZ(8,"div",7),e.TgZ(9,"p",8),e._uU(10,"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text."),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(11,"form",9,10),e.NdJ("ngSubmit",function(){return c.onSubmit()}),e.TgZ(13,"div",2),e.TgZ(14,"div",11),e.TgZ(15,"div",12),e.TgZ(16,"input",13),e.NdJ("ngModelChange",function(r){return c.model.name=r}),e.qZA(),e.qZA(),e.qZA(),e.TgZ(17,"div",11),e.TgZ(18,"div",12),e.TgZ(19,"input",14),e.NdJ("ngModelChange",function(r){return c.model.email=r}),e.qZA(),e.qZA(),e.qZA(),e.TgZ(20,"div",11),e.TgZ(21,"div",12),e.TgZ(22,"input",15),e.NdJ("ngModelChange",function(r){return c.model.subject=r}),e.qZA(),e.qZA(),e.qZA(),e.TgZ(23,"div",11),e.TgZ(24,"div",12),e.TgZ(25,"input",16),e.NdJ("ngModelChange",function(r){return c.model.phone=r}),e.qZA(),e.qZA(),e.qZA(),e.TgZ(26,"div",17),e.TgZ(27,"div",12),e.TgZ(28,"textarea",18),e.NdJ("ngModelChange",function(r){return c.model.message=r}),e.qZA(),e.qZA(),e.TgZ(29,"button",19),e._uU(30,"Submit"),e.qZA(),e.TgZ(31,"re-captcha",20),e.NdJ("resolved",function(r){return c.resolved(r)})("ngModelChange",function(r){return c.model.recaptcha=r}),e.qZA(),e.qZA(),e.TgZ(32,"div",17),e.YNc(33,D,5,1,"div",21),e.TgZ(34,"div",22),e.YNc(35,V,5,1,"div",23),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(36,"div",24),e.TgZ(37,"div",25),e._UZ(38,"iframe",26),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&n){const s=e.MAs(12);e.xp6(16),e.Q6J("ngModel",c.model.name),e.xp6(3),e.Q6J("ngModel",c.model.email),e.xp6(3),e.Q6J("ngModel",c.model.subject),e.xp6(3),e.Q6J("ngModel",c.model.phone),e.xp6(3),e.Q6J("ngModel",c.model.message),e.xp6(1),e.Q6J("disabled",!s.form.valid),e.xp6(2),e.Q6J("ngModel",c.model.recaptcha),e.xp6(2),e.Q6J("ngIf",c.error),e.xp6(1),e.Q6J("hidden",!c.submitted),e.xp6(1),e.Q6J("ngIf",c.model.id)}},directives:[l._Y,l.JL,l.F,l.Fj,l.Q7,l.JJ,l.On,A,w,o.O5,m.xm],styles:[""]}),t})();var P=i(6562);const z=[{path:"",component:(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-contact"]],decls:5,vars:0,template:function(n,c){1&n&&(e._UZ(0,"app-header"),e._UZ(1,"app-breadcrumbs"),e._UZ(2,"app-contact-info"),e._UZ(3,"app-contact-form"),e._UZ(4,"app-footer"))},directives:[F.G,j.n,U,N,P.c],styles:[""]}),t})()}];let L=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[M.Bz.forChild(z)],M.Bz]}),t})();var K=i(4065);let Y=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[o.ez,L,K.m,m.IJ,l.u5,l.UX,S,q]]}),t})()},6975:(R,p,i)=>{i.d(p,{n:()=>v});var o=i(7716),m=i(9818),l=i(8583),e=i(7957);function f(d,h){if(1&d&&(o.TgZ(0,"h1",6),o.TgZ(1,"span"),o._uU(2),o.qZA(),o.qZA(),o.TgZ(3,"ul",7),o.TgZ(4,"li",8),o.TgZ(5,"a",9),o._uU(6,"Home"),o.qZA(),o.qZA(),o.TgZ(7,"li",10),o._uU(8),o.qZA(),o.qZA()),2&d){const u=h.$implicit;o.xp6(2),o.Oqu(u.displayName),o.xp6(6),o.hij(" ",u.displayName," ")}}let v=(()=>{class d{constructor(){}ngOnInit(){}}return d.\u0275fac=function(u){return new(u||d)},d.\u0275cmp=o.Xpm({type:d,selectors:[["app-breadcrumbs"]],decls:7,vars:1,consts:[["parent",""],[1,"subheader","normal-bg","section-padding"],[1,"container"],[1,"row"],[1,"col-12","wow","fadeInDown"],["ngFor","",3,"ngForOf"],[1,"text-custom-white"],[1,"custom-flex","justify-content-center"],[1,"fw-500"],["routerLink","/",1,"text-custom-white"],[1,"active","fw-500"]],template:function(u,Z){if(1&u&&(o.TgZ(0,"breadcrumb",null,0),o.TgZ(2,"div",1),o.TgZ(3,"div",2),o.TgZ(4,"div",3),o.TgZ(5,"div",4),o.YNc(6,f,9,2,"ng-template",5),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.qZA()),2&u){const C=o.MAs(1);o.xp6(6),o.Q6J("ngForOf",C.breadcrumbs)}},directives:[m.LI,l.sg,e.yS],styles:[""]}),d})()}}]);