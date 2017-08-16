webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_register_register_component__ = __webpack_require__("../../../../../src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__guards_notAuth_guard__ = __webpack_require__("../../../../../src/app/guards/notAuth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_blog_blog_component__ = __webpack_require__("../../../../../src/app/components/blog/blog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_blog_edit_blog_edit_blog_component__ = __webpack_require__("../../../../../src/app/components/blog/edit-blog/edit-blog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_blog_delete_blog_delete_blog_component__ = __webpack_require__("../../../../../src/app/components/blog/delete-blog/delete-blog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_public_profile_public_profile_component__ = __webpack_require__("../../../../../src/app/components/public-profile/public-profile.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var appRoutes = [
    { path: "", component: __WEBPACK_IMPORTED_MODULE_2__components_home_home_component__["a" /* HomeComponent */] },
    { path: "dashboard", component: __WEBPACK_IMPORTED_MODULE_3__components_dashboard_dashboard_component__["a" /* DashboardComponent */] },
    { path: "register", component: __WEBPACK_IMPORTED_MODULE_4__components_register_register_component__["a" /* RegisterComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_8__guards_notAuth_guard__["a" /* NotAuthGuard */]] },
    { path: "login", component: __WEBPACK_IMPORTED_MODULE_5__components_login_login_component__["a" /* LoginComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_8__guards_notAuth_guard__["a" /* NotAuthGuard */]] },
    { path: "profile", component: __WEBPACK_IMPORTED_MODULE_6__components_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_7__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: "blog", component: __WEBPACK_IMPORTED_MODULE_9__components_blog_blog_component__["a" /* BlogComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_7__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: "edit-blog/:id", component: __WEBPACK_IMPORTED_MODULE_10__components_blog_edit_blog_edit_blog_component__["a" /* EditBlogComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_7__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: "delete-blog/:id", component: __WEBPACK_IMPORTED_MODULE_11__components_blog_delete_blog_delete_blog_component__["a" /* DeleteBlogComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_7__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: "user/:username", component: __WEBPACK_IMPORTED_MODULE_12__components_public_profile_public_profile_component__["a" /* PublicProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_7__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: "**", component: __WEBPACK_IMPORTED_MODULE_2__components_home_home_component__["a" /* HomeComponent */] },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [],
        imports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forRoot(appRoutes)],
        providers: [],
        bootstrap: [],
        exports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar-forming></app-navbar-forming>\n  <flash-messages></flash-messages>\n  <router-outlet></router-outlet>\n<app-footer-forming></app-footer-forming>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_register_register_component__ = __webpack_require__("../../../../../src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__guards_notAuth_guard__ = __webpack_require__("../../../../../src/app/guards/notAuth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_blog_blog_component__ = __webpack_require__("../../../../../src/app/components/blog/blog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_blog_service__ = __webpack_require__("../../../../../src/app/services/blog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_blog_edit_blog_edit_blog_component__ = __webpack_require__("../../../../../src/app/components/blog/edit-blog/edit-blog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_blog_delete_blog_delete_blog_component__ = __webpack_require__("../../../../../src/app/components/blog/delete-blog/delete-blog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_public_profile_public_profile_component__ = __webpack_require__("../../../../../src/app/components/public-profile/public-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_navbar_forming_navbar_forming_component__ = __webpack_require__("../../../../../src/app/components/navbar-forming/navbar-forming.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_footer_forming_footer_forming_component__ = __webpack_require__("../../../../../src/app/components/footer-forming/footer-forming.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_blog_blog_component__["a" /* BlogComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_blog_edit_blog_edit_blog_component__["a" /* EditBlogComponent */],
            __WEBPACK_IMPORTED_MODULE_19__components_blog_delete_blog_delete_blog_component__["a" /* DeleteBlogComponent */],
            __WEBPACK_IMPORTED_MODULE_20__components_public_profile_public_profile_component__["a" /* PublicProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_21__components_navbar_forming_navbar_forming_component__["a" /* NavbarFormingComponent */],
            __WEBPACK_IMPORTED_MODULE_22__components_footer_forming_footer_forming_component__["a" /* FooterFormingComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_13_angular2_flash_messages__["FlashMessagesModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_10__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_14__guards_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_15__guards_notAuth_guard__["a" /* NotAuthGuard */], __WEBPACK_IMPORTED_MODULE_17__services_blog_service__["a" /* BlogService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/blog/blog.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".dropdown {\r\n  position: relative;\r\n  display: inline-block;\r\n}\r\n\r\n.dropdown-content {\r\n  display: none;\r\n  position: absolute;\r\n  background-color: #f9f9f9;\r\n  min-width: 160px;\r\n  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\r\n  padding: 12px 16px;\r\n  z-index: 1;\r\n}\r\n\r\n.dropdown:hover .dropdown-content {\r\n  display: block;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/blog/blog.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 class=\"page-header\">Blog Feed</h1>\n\n<div class=\"row show-hide-message\" *ngIf=\"message && newPost\">\n  <div [ngClass]=\"messageClass\">\n    {{message}}\n  </div>\n</div>\n\n\n<!--new Blog Form start-->\n<form [formGroup]=\"form\" name=\"blogForm\" (submit)=\"onBlogSubmit()\" *ngIf=\"newPost\">\n  <div class=\"form-group\">\n    <label for=\"title\">Title</label>\n    <div [ngClass]=\"{'has-success':form.controls.title.valid,'has-danger':form.controls.title.dirty && form.controls.title.errors}\">\n      <input type=\"text\" name=\"title\" class=\"form-control\" placeholder=\"*Blog title\" autocomplete=\"off\" formControlName=\"title\">\n      <ul class=\"form-control-feedback\">\n        <li *ngIf=\"form.controls.title.dirty && form.controls.title.errors?.required\">Title is required</li>\n        <li *ngIf=\"(form.controls.title.dirty && form.controls.title.errors?.minlength)||(form.controls.title.dirty && form.controls.title.errors?.maxlength)\">Title must be at least 3 and no more then 60</li>\n        <li *ngIf=\"(form.controls.title.dirty && form.controls.title.errors?.alphaNumericValidation)\">Title must be letter or title</li>\n      </ul>\n    </div>\n\n    <label for=\"body\">Body</label>\n    <div [ngClass]=\"{'has-success':form.controls.body.valid,'has-danger':form.controls.body.dirty && form.controls.body.errors}\">\n      <textarea name=\"body\" rows=\"8\" cols=\"80\" placeholder=\"*Body\" class=\"form-control\" formControlName=\"body\"></textarea>\n      <ul class=\"form-control-feedback\">\n        <li *ngIf=\"form.controls.body.dirty && form.controls.body.errors?.required\">Body is required</li>\n        <li *ngIf=\"(form.controls.body.dirty && form.controls.body.errors?.minlength)||(form.controls.body.dirty && form.controls.body.errors?.maxlength)\">Body must be at least 5 and no more then 500</li>\n      </ul>\n    </div>\n  </div>\n  <button [disabled]=\"processing\" type=\"button\" class=\"btn btn-info\" (click)=\"goBack()\">Back</button>\n  <button [disabled]=\"processing || !form.valid\" type=\"submit\" class=\"btn btn-success\">Submit</button>\n\n</form>\n\n\n<!--new Blog Form end-->\n\n\n<button type=\"button\" name=\"button\" class=\"btn btn-warning\" *ngIf=\"!newPost\" (click)=\"newBlogForm()\">New Post</button>\n<button [disabled]=\"loadingBlogs\" type=\"button\" name=\"button-reload\" class=\"btn btn-default\" *ngIf=\"!newPost\" (click)=\"reloadsBlogs()\">Reload</button>\n<br/>\n<br/>\n<div *ngIf=\"!newPost\" >\n  <div *ngFor=\"let blog of blogPosts\" class=\"card\">\n    <div class=\"card-block\">\n      <h3 class=\"card-title\">{{blog.title}}</h3>\n      <p class=\"card-text\">{{blog.body}}</p>\n\n\n    </div>\n    <div class=\"card-footer\">\n      <div><strong>created by: </strong>{{blog.createdBy}}</div>\n      <div><strong>date: </strong>{{blog.createdAt | date: 'MMM dd, yyyy'}}</div>\n      <div>Likes:{{blog.likes}}</div>\n      <div>Dislikes:{{blog.dislikes}}</div>\n      <a [routerLink]=\"['/edit-blog',blog._id]\" *ngIf=\"username===blog.createdBy\"><button type=\"button\" class=\"btn btn-sm btn-info\">Edit</button></a>\n      <a [routerLink]=\"['/delete-blog',blog._id]\" *ngIf=\"username===blog.createdBy\"><button type=\"button\" class=\"btn btn-sm btn-danger\">Delete</button></a>\n      <!--Likes dropwdown-->\n      <div class=\"dropdown\">\n        <button [disabled]=\"blog.likedBy.includes(username)\" type=\"button\" name=\"button\" class=\"btn btn-sm btn-success\" (click)=\"likeBlog(blog._id)\">Likes: {{blog.likes}}</button>\n        <div class=\"dropdown-content\">\n          <a [routerLink]=\"['/user/',liker]\" *ngFor=\"let liker of blog.likedBy\">{{liker}}</a>\n\n        </div>\n      </div>\n      <!--Dislikes dropdown-->\n      <div class=\"dropdown\">\n        <button [disabled]=\"blog.dislikedBy.includes(username)\" type=\"button\" name=\"button\" class=\"btn btn-sm btn-warning\" (click)=\"dislikeBlog(blog._id)\">Dislikes: {{blog.dislikes}}</button>\n        <div class=\"dropdown-content\">\n          <a [routerLink]=\"['/user/',disliker]\" *ngFor=\"let disliker of blog.dislikedBy\">{{disliker}}</a>\n\n        </div>\n      </div>\n    </div>\n    <ul class=\"list-group\">\n      <li class=\"list-group-item\">\n        <button [disabled]=\"newComment.indexOf(blog._id) > -1\" type=\"button\" name=\"button\" class=\"btn btn-sm btn-danger\" (click)=\"draftComment(blog._id)\">Post Comment</button>\n        <br/>\n        <div *ngIf=\"newComment.indexOf(blog._id) > -1\">\n          <form [formGroup]=\"commentForm\">\n            <textarea name=\"comment\" rows=\"10\" cols=\"30\" class=\"form-control\" formControlName=\"comment\"></textarea>\n            <div [ngClass]=\"\">\n              <ul class=\"form-control-feedback\">\n                <li *ngIf=\"commentForm.controls.comment.errors?.required && commentForm.controls.comment.dirty\">This field is required</li>\n                <li *ngIf=\"(commentForm.controls.comment.errors?.minLength && commentForm.controls.comment.dirty)\n                ||(commentForm.controls.comment.errors?.maxLength && commentForm.controls.comment.dirty)\">Must contain 1-500 symbols</li>\n              </ul>\n            </div>\n            <button [disabled]=\"!commentForm.valid || processing\" type=\"submit\" class=\"btn btn-sm btn-success\" (click)=\"postComment(blog._id)\">Submit comment</button>\n            <button [disabled]=\"processing\" type=\"button\" class=\"btn btn-sm btn-danger\" (click)=\"cancelCommentSubmition(blog._id)\">Cancel comment</button>\n          </form>\n        </div>\n      </li>\n\n        <li *ngIf=\"enabledComments.indexOf(blog._id)===-1 && blog.comments._length>0\">\n          <span (click)=\"expand(blog._id)\">Show Comments &nbsp;&nbsp;</span>\n        </li>\n        <li *ngIf=\"enabledComments.indexOf(blog._id) >-1\">\n            <span (click)=\"collapse(blog._id)\">Hide Comments &nbsp;&nbsp;</span>\n        </li>\n      <div *ngIf=\"enabledComments.indexOf(blog._id)>-1\">\n        <li *ngFor=\"let comment of blog.comments\"><strong>{{comment.comentator}}</strong>{{comment}}</li>\n      </div>\n    </ul>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/blog/blog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_blog_service__ = __webpack_require__("../../../../../src/app/services/blog.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BlogComponent = (function () {
    function BlogComponent(formBuilder, authService, blogService) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.blogService = blogService;
        this.newPost = false;
        this.loadingBlogs = false;
        this.processing = false;
        this.newComment = [];
        this.enabledComments = [];
        this.createNewBlogForm();
        this.createCommentForm();
    }
    BlogComponent.prototype.createNewBlogForm = function () {
        this.form = this.formBuilder.group({
            title: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].maxLength(60),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].minLength(3),
                    this.alphaNumericValidation
                ])],
            body: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].maxLength(500),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].minLength(5)
                ])]
        });
    };
    BlogComponent.prototype.createCommentForm = function () {
        this.commentForm = this.formBuilder.group({
            comment: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].minLength(1),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].maxLength(500)
                ])]
        });
    };
    BlogComponent.prototype.enableCommentForm = function () {
        this.commentForm.get('comment').enable();
    };
    BlogComponent.prototype.disableCommentForm = function () {
        this.commentForm.get('comment').disable();
    };
    BlogComponent.prototype.enableFormNewBlogForm = function () {
        this.form.get('title').enable();
        this.form.get('body').enable();
    };
    BlogComponent.prototype.disableFormNewBlogForm = function () {
        this.form.get('title').disable();
        this.form.get('body').disable();
    };
    /*Validations for forms*/
    BlogComponent.prototype.alphaNumericValidation = function (controls) {
        var regExp = new RegExp(/^[a-zA-Z0-9 ]+$/);
        if (regExp.test(controls.value)) {
            return null;
        }
        else
            return { 'alphaNumericValidation': true };
    };
    BlogComponent.prototype.onBlogSubmit = function () {
        var _this = this;
        this.processing = true;
        this.disableFormNewBlogForm();
        var blog = {
            title: this.form.get('title').value,
            body: this.form.get('body').value,
            createdBy: this.username
        };
        this.blogService.newBlog(blog)
            .subscribe(function (jsondata) {
            var data = jsondata.json();
            if (!data.success) {
                _this.messageClass = 'alert alert-danger';
                _this.message = data.message;
                _this.processing = false;
                _this.enableFormNewBlogForm();
            }
            else {
                _this.messageClass = 'alert alert-success';
                _this.message = data.message;
                _this.getAllBlogs();
                setTimeout(function () {
                    _this.newPost = false;
                    _this.processing = false;
                    _this.message = false;
                    _this.form.reset();
                    _this.enableFormNewBlogForm();
                }, 2000);
            }
        });
    };
    BlogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (data) {
            var profile = data.json();
            _this.username = profile.user.username;
            //Test
            _this.getAllBlogs();
        });
    };
    BlogComponent.prototype.newBlogForm = function () {
        this.newPost = true;
    };
    BlogComponent.prototype.reloadsBlogs = function () {
        var _this = this;
        this.loadingBlogs = true;
        this.getAllBlogs();
        setTimeout(function () {
            _this.loadingBlogs = false;
        }, 4000);
    };
    BlogComponent.prototype.draftComment = function (id) {
        this.newComment = [];
        this.newComment.push(id);
    };
    BlogComponent.prototype.postComment = function (id) {
    };
    BlogComponent.prototype.expand = function (id) {
        this.enabledComments.push(id);
    };
    BlogComponent.prototype.collapse = function (id) {
        var index = this.enabledComments.indexOf(id);
        this.enabledComments.splice(index, 1);
    };
    BlogComponent.prototype.cancelCommentSubmition = function (id) {
        var index = this.newComment.indexOf(id);
        this.newComment.splice(index, 1);
        this.commentForm.reset();
        this.enableCommentForm();
        this.processing = false;
    };
    BlogComponent.prototype.getAllBlogs = function () {
        var _this = this;
        return this.blogService.getAllBlogs().subscribe(function (data) {
            _this.blogPosts = data.blogs;
        });
    };
    BlogComponent.prototype.goBack = function () {
        window.location.reload();
    };
    BlogComponent.prototype.likeBlog = function (id) {
        var _this = this;
        this.blogService.likeBlog(id)
            .subscribe(function (data) {
            _this.getAllBlogs();
        });
    };
    BlogComponent.prototype.dislikeBlog = function (id) {
        var _this = this;
        this.blogService.dislikeBlog(id)
            .subscribe(function (data) {
            _this.getAllBlogs();
        });
    };
    return BlogComponent;
}());
BlogComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-blog',
        template: __webpack_require__("../../../../../src/app/components/blog/blog.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/blog/blog.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_blog_service__["a" /* BlogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_blog_service__["a" /* BlogService */]) === "function" && _c || Object])
], BlogComponent);

var _a, _b, _c;
//# sourceMappingURL=blog.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/blog/delete-blog/delete-blog.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/blog/delete-blog/delete-blog.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  delete-blog works!\n</p>\n\n<div class=\"row show-hide-message\" *ngIf=\"message\">\n  <div [ngClass]=\"messageClass\">\n    {{message}}\n  </div>\n</div>\n\n<div *ngIf=\"foundedBlog\">\n  <div>\n    <div>\n      <div >\n        <div>\n          <h4>Confirm deletion</h4>\n        </div>\n\n        <div>\n          <p>Are u sure u would like to delete this blog?</p>\n        </div>\n\n        <div>\n          <button type=\"button\" name=\"button\" [disabled]=\"processing\" class=\"btn btn-success\" (click)=\"deleteBlog()\">Yes</button>\n          <button type=\"button\" name=\"button\" [disabled]=\"processing\" class=\"btn btn-danger\" (click)=\"goBack()\">No</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n<div class=\"card\">\n  <div class=\"card-block\">\n    <div class=\"card-title\">\n      {{blog.title}}\n    </div>\n    <div class=\"card-body\">\n      {{blog.body}}\n    </div>\n    <div class=\"card-body\">\n      <strong>Posted by: </strong>{{blog.createdBy}}\n      <strong>Date: </strong>{{blog.createdAt | date: 'MMM dd, yyyy'}}\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/blog/delete-blog/delete-blog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_blog_service__ = __webpack_require__("../../../../../src/app/services/blog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeleteBlogComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DeleteBlogComponent = (function () {
    function DeleteBlogComponent(location, blogService, activatedRoute, router) {
        this.location = location;
        this.blogService = blogService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.processing = false;
    }
    DeleteBlogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentUrl = this.activatedRoute.snapshot.params;
        this.blogService.getSingleBlog(this.currentUrl.id)
            .subscribe(function (data) {
            if (!data.success) {
                _this.messageClass = 'alert alert-danger';
                _this.message = data.message;
            }
            else {
                _this.blog = data.blog;
                _this.foundedBlog = true;
            }
        });
    };
    DeleteBlogComponent.prototype.deleteBlog = function () {
        var _this = this;
        this.processing = true;
        this.blogService.deleteBlog(this.currentUrl.id)
            .subscribe(function (data) {
            if (!data.success) {
                _this.messageClass = 'alert alert-danger';
                _this.message = data.message;
                _this.processing = false;
            }
            else {
                _this.messageClass = 'alert alert-success';
                _this.message = data.message;
                setTimeout(function () {
                    _this.router.navigate(['/blog']);
                }, 2000);
            }
        });
    };
    DeleteBlogComponent.prototype.goBack = function () {
        this.location.back();
    };
    return DeleteBlogComponent;
}());
DeleteBlogComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-delete-blog',
        template: __webpack_require__("../../../../../src/app/components/blog/delete-blog/delete-blog.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/blog/delete-blog/delete-blog.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common__["Location"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_blog_service__["a" /* BlogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_blog_service__["a" /* BlogService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _d || Object])
], DeleteBlogComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=delete-blog.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/blog/edit-blog/edit-blog.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/blog/edit-blog/edit-blog.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  edit-blog works!\n</p>\n\n<div class=\"row show-hide-message\" *ngIf=\"message\">\n  <div [ngClass]=\"messageClass\">\n    {{message}}\n  </div>\n</div>\n\n\n<form (submit)=\"updateBlogSubmit()\" *ngIf=\"correctLoading\">\n  <div class=\"form-group\">\n    <label>Title</label>\n    <input class=\"form-control\" name=\"title\" type=\"text\" placeholder=\"*newTitle\" [(ngModel)]=\"blog.title\">\n  </div>\n\n  <div class=\"form-group\">\n    <label>Body</label>\n    <textarea class=\"form-control\" name=\"body\" cols=\"8\" rows=\"10\" placeholder=\"*New body\" [(ngModel)]=\"blog.body\"></textarea>\n    <a [routerLink]=\"['/delete-blog',blog._id]\"><button class=\"btn btn-danger\" type=\"button\" name=\"button\">Delete blog</button></a>\n    <button [disabled]=\"processing\" type=\"button\" class=\"btn btn-success\" (click)=\"goBack()\">Go Back</button>\n    <button [disabled]=\"processing\" type=\"submit\" name=\"save\" class=\"btn btn-default\">Save changes</button>\n  </div>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/components/blog/edit-blog/edit-blog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_blog_service__ = __webpack_require__("../../../../../src/app/services/blog.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditBlogComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditBlogComponent = (function () {
    function EditBlogComponent(location, activatedRoute, blogService, router) {
        this.location = location;
        this.activatedRoute = activatedRoute;
        this.blogService = blogService;
        this.router = router;
        this.message = false;
        this.title = 1;
        this.processing = false;
        this.correctLoading = false;
    }
    EditBlogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentUrl = this.activatedRoute.snapshot.params;
        this.blogService.getSingleBlog(this.currentUrl.id)
            .subscribe(function (data) {
            if (!data.success) {
                _this.messageClass = 'alert alert-danger';
                _this.message = data.message;
                _this.correctLoading = false;
            }
            else {
                _this.blog = data.blog;
                _this.correctLoading = true;
            }
        });
    };
    EditBlogComponent.prototype.updateBlogSubmit = function () {
        var _this = this;
        this.processing = true;
        this.blogService.editBlog(this.blog)
            .subscribe(function (data) {
            if (!data.success) {
                _this.messageClass = 'alert alert-danger';
                _this.message = data.message;
                _this.processing = false;
            }
            else {
                _this.messageClass = 'alert alert-success';
                _this.message = data.message;
                setTimeout(function () {
                    _this.router.navigate(['/blog']);
                }, 2000);
            }
        });
    };
    EditBlogComponent.prototype.goBack = function () {
        this.location.back();
    };
    return EditBlogComponent;
}());
EditBlogComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-edit-blog',
        template: __webpack_require__("../../../../../src/app/components/blog/edit-blog/edit-blog.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/blog/edit-blog/edit-blog.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common__["Location"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_blog_service__["a" /* BlogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_blog_service__["a" /* BlogService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _d || Object])
], EditBlogComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=edit-blog.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 class=\"page-header\">Dashboard route</h1>\n"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.css")]
    }),
    __metadata("design:paramtypes", [])
], DashboardComponent);

//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/footer-forming/footer-forming.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/footer-forming/footer-forming.component.html":
/***/ (function(module, exports) {

module.exports = "<footer class=\"text-muted\">\n  <div class=\"container\">\n    <p class=\"float-right\">\n      <a href=\"#\">Back to top</a>\n    </p>\n    <p>Album example is &copy; Bootstrap, but please download and customize it for yourself!</p>\n    <p>New to Bootstrap? <a href=\"../../\">Visit the homepage</a> or read our <a href=\"../../getting-started/\">getting started guide</a>.</p>\n  </div>\n</footer>\n"

/***/ }),

/***/ "../../../../../src/app/components/footer-forming/footer-forming.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterFormingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterFormingComponent = (function () {
    function FooterFormingComponent() {
    }
    FooterFormingComponent.prototype.ngOnInit = function () {
    };
    return FooterFormingComponent;
}());
FooterFormingComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-footer-forming',
        template: __webpack_require__("../../../../../src/app/components/footer-forming/footer-forming.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/footer-forming/footer-forming.component.css")]
    }),
    __metadata("design:paramtypes", [])
], FooterFormingComponent);

//# sourceMappingURL=footer-forming.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"jumbotron text-center\">\r\n  <div class=\"container\">\r\n    <h1 class=\"jumbotron-heading\">Album example</h1>\r\n    <p class=\"lead text-white\">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely.</p>\r\n    <p>\r\n      <a href=\"#\" class=\"btn btn-primary\">Main call to action</a>\r\n      <a href=\"#\" class=\"btn btn-secondary\">Secondary action</a>\r\n    </p>\r\n  </div>\r\n</section>\r\n\r\n<div class=\"container marketing\">\r\n\r\n  <!-- Three columns of text below the carousel -->\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-4\">\r\n      <img class=\"rounded-circle\" src=\"data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==\" alt=\"Generic placeholder image\" width=\"140\" height=\"140\">\r\n      <h2>Формовка</h2>\r\n      <p>С помощью вакуумной формовки можно получать объемные изделия из различных пластиков.\r\n        Изделия, изготовленные методом вакуумной формовки, смотрятся лучше, чем такие же изделия, склеенные из отдельных частей.\r\n        Благодаря тому, что изделие не имеет швов, оно является более прочным, долговечным, и реалистичным благодаря объемам.\r\n       </p>\r\n      <p><a class=\"btn btn-secondary\" href=\"#\" role=\"button\">Перейти &raquo;</a></p>\r\n    </div><!-- /.col-lg-4 -->\r\n    <div class=\"col-lg-4\">\r\n      <img class=\"rounded-circle\" src=\"data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==\" alt=\"Generic placeholder image\" width=\"140\" height=\"140\">\r\n      <h2>Производство</h2>\r\n      <p>\r\n        Высококачественные электронные системы управления бытовой и промышленной техникой.\r\n        Возможность разработки электроники под заказ и обеспечение серийных поставок.\r\n      </p>\r\n      <p><a class=\"btn btn-secondary\" href=\"#\" role=\"button\">Перейти &raquo;</a></p>\r\n    </div><!-- /.col-lg-4 -->\r\n    <div class=\"col-lg-4\">\r\n      <img class=\"rounded-circle\" src=\"data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==\" alt=\"Generic placeholder image\" width=\"140\" height=\"140\">\r\n      <h2>Реклама</h2>\r\n      <p>Изготовление продукции происходит на собственных мощностях компании.\r\n        Оптимальная организация рабочих процессов на всех этапах позволяет нам сохранять достаточно низкие цены на предоставляемые\r\n        услуги и постоянно повышать качество, пересматривая и совершенствуя технологические процессы.</p>\r\n      <p><a class=\"btn btn-secondary\" href=\"#\" role=\"button\">Перейти &raquo;</a></p>\r\n    </div><!-- /.col-lg-4 -->\r\n  </div><!-- /.row -->\r\n\r\n\r\n  <!-- START THE FEATURETTES -->\r\n\r\n  <hr class=\"featurette-divider\">\r\n\r\n  <div class=\"row featurette\">\r\n    <div class=\"col-md-7\">\r\n      <h2 class=\"featurette-heading\">Мы изготавливаем то то и то то.<span class=\"text-muted\">Высокое качество.</span></h2>\r\n      <p class=\"lead\">Наше производство бла бла бла.Когда-то Хемингуэй поспорил, что сочинит рассказ из шести слов (на языке оригинала), который станет самым трогательным из всех ранее написанных. И он выиграл спор.\r\n        1. “Продаются детские ботиночки. Не ношенные.”\r\n        («For sale: baby shoes, never used.» )\r\n        2. Победитель конкурса на самый короткий рассказ, имеющий завязку, кульминацию и развязку. (О. Генри)\r\n        «Шофер закурил и нагнулся над бензобаком, посмотреть много ли осталось бензина. Покойнику было двадцать три года.»\r\n        3. Фредерик Браун. Кратчайшая страшная история из когда-либо написанных.\r\n        «Последний человек на Земле сидел в комнате. В дверь постучались.»\r\n        4. В Великобритании был проведен конкурс на самый короткий рассказ.\r\n        Параметры были следующие:\r\n        — Должен быть упомянут Бог,\r\n        — Королева,\r\n        — Должно быть немного секса\r\n        и присутствовать какая-то тайна.\r\n        Рассказ — победитель:\r\n        — Господи! — вскричала королева, — я беременна, и неизвестно от\r\n        кого!…\r\n        5. B конкурсe на самую короткую автобиографию победила одна пожилая француженка, которая написала:\r\n        «Раньше у меня было гладкое лицо и мятая юбка, а теперь — наоборот».\r\n\r\n      </p>\r\n    </div>\r\n    <div class=\"col-md-5\">\r\n      <img class=\"featurette-image img-fluid mx-auto\" src=\"../../../assets/photo1.jpg\" alt=\"Generic placeholder image\">\r\n    </div>\r\n  </div>\r\n\r\n  <hr class=\"featurette-divider\">\r\n\r\n  <div class=\"row featurette\">\r\n    <div class=\"col-md-7 push-md-5\">\r\n      <h2 class=\"featurette-heading\">Всегда в срок.<span class=\"text-muted\">Быстро и доступно.</span></h2>\r\n      <p class=\"lead\">Два мальчика стояли и смотрели, как сатана медленно уходит прочь. Блеск его гипнотических глаз все еще туманил их головы.\r\n        – Слушай, чего он от тебя хотел?\r\n        – Мою душу. А от тебя?\r\n        – Монетку для телефона-автомата. Ему срочно надо было позвонить.\r\n        – Хочешь, пойдём поедим?\r\n        -Хочу, но у меня теперь совсем нет денег.\r\n        – Ничего страшного. У меня полно.\r\n       </p>\r\n    </div>\r\n    <div class=\"col-md-5 pull-md-7\">\r\n      <img class=\"featurette-image img-fluid mx-auto\" src=\"../../../assets/photo2.jpg\" alt=\"Generic placeholder image\">\r\n    </div>\r\n  </div>\r\n\r\n  <hr class=\"featurette-divider\">\r\n\r\n  <div class=\"row featurette\">\r\n    <div class=\"col-md-7\">\r\n      <h2 class=\"featurette-heading\">Довольные клиенты.<span class=\"text-muted\">Здесь и сейчас.</span></h2>\r\n      <p class=\"lead\">Я проснулся от жестокой боли во всем теле. Я открыл глаза и увидел медсестру, стоящую у моей койки.\r\n        – Мистер Фуджима, – сказала она, – вам повезло, вам удалось выжить после бомбардировки Хиросимы два дня назад. Но теперь вы в госпитале, вам больше ничего не угрожает.\r\n        Чуть живой от слабости, я спросил:\r\n        – Где я?\r\n        – В Нагасаки, – ответила она.\r\n\r\n        Звездная ночь. Самое подходящее время. Ужин при свечах. Уютный итальянский ресторанчик.\r\n        Маленькое черное платье. Роскошные волосы, блестящие глаза, серебристый смех. Вместе уже два года.\r\n        Чудесное время! Настоящая любовь, лучший друг, больше никого. Шампанского! Предлагаю руку и сердце. На одно колено.\r\n        Люди смотрят? Ну и пусть! Прекрасное бриллиантовое кольцо. Румянец на щеках, очаровательная улыбка.\r\n        Как, нет?!\r\n\r\n\r\n        </p>\r\n    </div>\r\n    <div class=\"col-md-5\">\r\n      <img class=\"featurette-image img-fluid mx-auto\" src=\"../../../assets/photo3.jpg\" alt=\"Generic placeholder image\">\r\n    </div>\r\n  </div>\r\n\r\n  <hr class=\"featurette-divider\">\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent(authService) {
        this.authService = authService;
        this.title = 'Original Title';
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], HomeComponent);

var _a;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 class=\"page-header\">Login Route</h1>\n<div class=\"row show-hide-message\">\n  <div [ngClass]=\"messageClass\">\n    {{message}}\n  </div>\n</div>\n\n<form [formGroup]=\"form\" (submit)=\"onLoginSubmit()\">\n\n  <div class=\"form-group\">\n    <label for=\"registerUsername\">Имя пользователя</label>\n    <div>\n      <input  type=\"text\" class=\"form-control\" id=\"registerUsername\" aria-describedby=\"usernameHelp\" placeholder=\"имя пользователя...\" formControlName=\"username\">\n\n    </div>\n  </div>\n\n  <div class=\"form-group\">\n    <div>\n      <label for=\"registerPassword\">Пароль</label>\n      <input  type=\"password\" class=\"form-control\" id=\"registerPassword\" aria-describedby=\"passwordHelp\" placeholder=\"ваш пароль...\" formControlName=\"password\">\n    </div>\n  </div>\n\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Отправить\">\n\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = (function () {
    function LoginComponent(formBuilder, authService, router, authGuard) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.router = router;
        this.authGuard = authGuard;
        this.processing = false;
        this.createForm();
    }
    LoginComponent.prototype.createForm = function () {
        this.form = this.formBuilder.group({
            username: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required]
        });
    };
    LoginComponent.prototype.ngOnInit = function () {
        if (this.authGuard.redirectedUrl) {
            this.messageClass = 'alert alert-danger';
            this.message = 'You must be logged in to view that page';
            this.previousUrl = this.authGuard.redirectedUrl;
            this.authGuard.redirectedUrl = undefined;
        }
    };
    LoginComponent.prototype.disableForm = function () {
        this.form.controls['username'].disable();
        this.form.controls['password'].disable();
    };
    LoginComponent.prototype.enableForm = function () {
        this.form.controls['username'].enable();
        this.form.controls['password'].enable();
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        this.processing = true;
        this.disableForm();
        var user = {
            username: this.form.get('username').value,
            password: this.form.get('password').value
        };
        this.authService.login(user)
            .subscribe(function (notMappedData) {
            var data = notMappedData.json();
            console.log(data);
            if (!data.success) {
                _this.messageClass = 'alert alert-danger';
                _this.message = data.message;
                _this.processing = false;
                _this.enableForm();
            }
            else {
                _this.messageClass = 'alert alert-success';
                _this.message = data.message;
                _this.authService.storeUserData(data.token, data.user);
                setTimeout(function () {
                    if (_this.previousUrl) {
                        _this.router.navigate([_this.previousUrl]);
                    }
                    else {
                        _this.router.navigate(['/dashboards']);
                    }
                }, 1000);
            }
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__guards_auth_guard__["a" /* AuthGuard */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__guards_auth_guard__["a" /* AuthGuard */]) === "function" && _d || Object])
], LoginComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/navbar-forming/navbar-forming.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar-forming/navbar-forming.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"collapse bg-inverse\" id=\"navbarHeader\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-sm-8 py-4\">\n        <h4 class=\"text-white\">Forming TM</h4>\n        <p class=\"text-muted\">Add some information about the album below, the author, or any other background context. Make it a few sentences long so folks can pick up some informative tidbits. Then, link them off to some social networking sites or contact information.</p>\n      </div>\n      <div class=\"col-sm-4 py-4\">\n        <h4 class=\"text-white\">Контакты</h4>\n        <ul class=\"list-unstyled\">\n          <li><a href=\"#\" class=\"text-white\">Follow on Twitter</a></li>\n          <li><a href=\"#\" class=\"text-white\">Like on Facebook</a></li>\n          <li><a href=\"#\" class=\"text-white\">Email me</a></li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"navbar navbar-inverse bg-inverse\">\n  <div class=\"container d-flex justify-content-between\">\n    <a href=\"#\" class=\"navbar-brand\">Forming TM</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarHeader\" aria-controls=\"navbarHeader\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/navbar-forming/navbar-forming.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarFormingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarFormingComponent = (function () {
    function NavbarFormingComponent() {
    }
    NavbarFormingComponent.prototype.ngOnInit = function () {
    };
    return NavbarFormingComponent;
}());
NavbarFormingComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-navbar-forming',
        template: __webpack_require__("../../../../../src/app/components/navbar-forming/navbar-forming.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/navbar-forming/navbar-forming.component.css")]
    }),
    __metadata("design:paramtypes", [])
], NavbarFormingComponent);

//# sourceMappingURL=navbar-forming.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-toggleable-md navbar-light bg-faded\">\n  <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <a class=\"navbar-brand\" href=\"#\">Navbar</a>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item active\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n        <a class=\"nav-link\" routerLink=\"/home\">Home <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n        <a class=\"nav-link\" routerLink=\"/dashboard\">Dashborad</a>\n      </li>\n      <li class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n        <a class=\"nav-link\" routerLink=\"/blog\">Блог</a>\n      </li>\n    </ul>\n  </div>\n <a *ngIf=\"authService.isLoggedIn()\" class=\"nav-link\" routerLink=\"/profile\">профиль</a>\n <a *ngIf=\"!authService.isLoggedIn()\" class=\"nav-link\" routerLink=\"/login\">войти</a>\n <a href=\"#\" *ngIf=\"authService.isLoggedIn()\" class=\"nav-link\" (click)=\"onLogoutClick()\">выйти</a>\n <a *ngIf=\"!authService.isLoggedIn()\" class=\"nav-link\" routerLink=\"/register\">регистрация</a>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = (function () {
    function NavbarComponent(authService, router, flashMessagesService) {
        this.authService = authService;
        this.router = router;
        this.flashMessagesService = flashMessagesService;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.flashMessagesService.show('You are logged out', { useClass: 'alert-info' });
        this.router.navigate(['/login']);
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/navbar/navbar.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object])
], NavbarComponent);

var _a, _b, _c;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  profile works!\n</p>\n<ul>\n  <li>Username:{{username}}</li>\n  <li>E-mail:{{email}}</li>\n</ul>\n<button (click)=\"check()\">Check</button>\n"

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfileComponent = (function () {
    function ProfileComponent(authService) {
        this.authService = authService;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile()
            .subscribe(function (data) {
            var profile = data.json();
            _this.username = profile.user.username;
            _this.email = profile.user.email;
        });
    };
    ProfileComponent.prototype.check = function () {
        console.log(this.authService.isLoggedIn());
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-profile',
        template: __webpack_require__("../../../../../src/app/components/profile/profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/profile/profile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], ProfileComponent);

var _a;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/public-profile/public-profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/public-profile/public-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  public-profile works!\n</p>\n<div class=\"row show-hide-message\" *ngIf=\"message\">\n  <div [ngClass]=\"messageClass\">\n    {{message}}\n  </div>\n</div>\n<div *ngIf=\"foundProfile\">\n  {{username}}\n  {{email}}\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/components/public-profile/public-profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PublicProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PublicProfileComponent = (function () {
    function PublicProfileComponent(authService, activatedRoute) {
        this.authService = authService;
        this.activatedRoute = activatedRoute;
        this.foundProfile = false;
    }
    PublicProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentUrl = this.activatedRoute.snapshot.params;
        this.authService.getPublicProfile(this.currentUrl.username).subscribe(function (data) {
            if (!data.success) {
                _this.messageClass = 'alert alert-danger';
                _this.message = data.message;
            }
            else {
                _this.username = data.user.username;
                _this.email = data.user.email;
                _this.foundProfile = true;
                console.log(_this.username);
                console.log(_this.foundProfile);
            }
        });
    };
    PublicProfileComponent.prototype.get = function () {
        console.log(this.currentUrl.username);
    };
    return PublicProfileComponent;
}());
PublicProfileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-public-profile',
        template: __webpack_require__("../../../../../src/app/components/public-profile/public-profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/public-profile/public-profile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object])
], PublicProfileComponent);

var _a, _b;
//# sourceMappingURL=public-profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 class=\"page-header\">Register Route</h1>\r\n<div class=\"row show-hide-message\">\r\n  <div [ngClass]=\"messageClass\">\r\n    {{message}}\r\n  </div>\r\n</div>\r\n\r\n<form [formGroup]=\"form\" (submit)=\"onRegistrySubmit()\">\r\n  <div class=\"form-group\">\r\n    <label for=\"registerEmail\">Электронная почта</label>\r\n    <div [ngClass]=\"{'has-danger':(form.controls.email.errors && form.controls.email.dirty)||(!emailValid&&form.controls.email.dirty),\r\n    'has-success':!form.controls.email.errors&&emailValid}\">\r\n      <input  type=\"email\" class=\"form-control\" id=\"registerEmail\" aria-describedby=\"emailHelp\" placeholder=\"ваш e-mail...\" formControlName=\"email\" (blur)=\"checkEmail()\">\r\n      <ul>\r\n        <li *ngIf=\"form.controls.email.errors?.required && form.controls.email.dirty\" class=\"form-control-feedback\">Это обязательное поле</li>\r\n        <li *ngIf=\"(form.controls.email.errors?.minlength || form.controls.email.errors?.maxlength)&& form.controls.email.dirty\" class=\"form-control-feedback\">Не меньше 5 символов и не более 30</li>\r\n        <li *ngIf=\"form.controls.email.errors?.validateEmail && form.controls.email.dirty\" class=\"form-control-feedback\">Должен быть корректный e-mail</li>\r\n        <li *ngIf=\"emailMessage\">{{emailMessage}}</li>\r\n      </ul>\r\n\r\n\r\n    </div>\r\n\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label for=\"registerUsername\">Имя пользователя</label>\r\n    <div [ngClass]=\"{'has-danger':(form.controls.username.errors && form.controls.username.dirty)||(!usernameValid&&form.controls.username.dirty),\r\n    'has-success':!form.controls.username.errors&&usernameValid}\">\r\n      <input  type=\"text\" class=\"form-control\" id=\"registerUsername\" aria-describedby=\"usernameHelp\" placeholder=\"имя пользователя...\" formControlName=\"username\" (blur)=\"checkUsername()\">\r\n      <ul>\r\n        <li *ngIf=\"form.controls.username.errors?.required && form.controls.username.dirty\" class=\"form-control-feedback\">Это обязательное поле</li>\r\n        <li *ngIf=\"(form.controls.username.errors?.minlength || form.controls.username.errors?.maxlength)&&form.controls.username.dirty\" class=\"form-control-feedback\">Не меньше 5 символов и не более 30</li>\r\n        <li *ngIf=\"form.controls.username.errors?.validateUsername &&form.controls.username.dirty\" class=\"form-control-feedback\">Имя пользователя не должно содержать спец символов</li>\r\n        <li *ngIf=\"usernameMessage\">{{usernameMessage}}</li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <div [ngClass]=\"{'has-danger':(form.controls.password.errors && form.controls.password.dirty),'has-success':!form.controls.password.errors}\">\r\n      <label for=\"registerPassword\">Пароль</label>\r\n      <input  type=\"password\" class=\"form-control\" id=\"registerPassword\" aria-describedby=\"passwordHelp\" placeholder=\"ваш пароль...\" formControlName=\"password\">\r\n      <ul>\r\n        <li *ngIf=\"form.controls.password.errors?.required && form.controls.password.dirty\" class=\"form-control-feedback\">Это обязательное поле</li>\r\n        <li *ngIf=\"(form.controls.password.errors?.minlength || form.controls.password.errors?.maxlength)&&form.controls.password.dirty\" class=\"form-control-feedback\">Не меньше 5 символов и не более 30</li>\r\n        <li *ngIf=\"form.controls.password.errors?.validatePassword &&form.controls.password.dirty\" class=\"form-control-feedback\">Пароль должен содержать корректные символы</li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <label for=\"confirmRegisterPassword\">Повторный ввод пароля</label>\r\n    <div [ngClass]=\"{'has-danger':(form.controls.confirmPassword.errors && form.controls.confirmPassword.dirty)||(form.errors&&form.controls.confirmPassword.dirty),'has-success':!form.controls.confirmPassword.errors}\">\r\n      <input type=\"password\" class=\"form-control\" id=\"confirmRegisterPassword\" aria-describedby=\"confirmPasswordHelp\" placeholder=\"ваш пароль еще раз...\" formControlName=\"confirmPassword\">\r\n      <ul>\r\n        <li *ngIf=\"form.controls.confirmPassword.errors?.required && form.controls.confirmPassword.dirty\" class=\"form-control-feedback\">Это обязательное поле</li>\r\n        <li *ngIf=\"form.errors?.matchingPassword && form.controls.confirmPassword.dirty\" class=\"form-control-feedback\">Пароли не совпадают</li>\r\n\r\n      </ul>\r\n    </div>\r\n  </div>\r\n  <input [disabled]=\"!form.valid||!emailValid||!usernameValid\" type=\"submit\" class=\"btn btn-primary\" value=\"Отправить\">\r\n\r\n</form>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operator_map__ = __webpack_require__("../../../../rxjs/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = (function () {
    function RegisterComponent(formBuilder, authService, router) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.router = router;
        this.createForm();
    }
    RegisterComponent.prototype.createForm = function () {
        this.form = this.formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].minLength(5),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].maxLength(30),
                    this.validateEmail
                ])],
            username: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].minLength(5),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].maxLength(30),
                    this.validateUsername
                ])],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].minLength(5),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].maxLength(30),
                    this.validatePassword
                ])],
            confirmPassword: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].minLength(5),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].maxLength(30),
                ])],
        }, {
            validator: this.matchingPassword('password', 'confirmPassword')
        });
    };
    //custom validations
    RegisterComponent.prototype.validateEmail = function (controls) {
        var regExp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        if (regExp.test(controls.value)) {
            return null;
        }
        else {
            return { validateEmail: true };
        }
    };
    RegisterComponent.prototype.validateUsername = function (controls) {
        var regExp = new RegExp(/^[a-z0-9_-]{5,30}$/);
        if (regExp.test(controls.value)) {
            return null;
        }
        else
            return { validateUsername: true };
    };
    RegisterComponent.prototype.validatePassword = function (controls) {
        var regExp = new RegExp(/^[a-z0-9_-]{5,30}$/);
        if (regExp.test(controls.value)) {
            return null;
        }
        else
            return { validatePassword: true };
    };
    RegisterComponent.prototype.matchingPassword = function (password, confirmPassword) {
        return function (group) {
            if (group.controls[password].value === group.controls[confirmPassword].value) {
                return null;
            }
            else {
                return { matchingPassword: true };
            }
        };
    };
    //Checkers
    RegisterComponent.prototype.checkEmail = function () {
        var _this = this;
        var email = this.form.get('email').value;
        this.authService.checkEmail(email).subscribe(function (data) {
            var emailData = data.json();
            console.log(emailData);
            if (!emailData.success) {
                _this.emailValid = false;
                _this.emailMessage = emailData.message;
            }
            else {
                _this.emailValid = true;
                _this.emailMessage = emailData.message;
            }
        });
    };
    RegisterComponent.prototype.checkUsername = function () {
        var _this = this;
        var username = this.form.get('username').value;
        this.authService.checkUsername(username).subscribe(function (data) {
            var usernameData = data.json();
            console.log(usernameData);
            if (!usernameData.success) {
                _this.usernameValid = false;
                _this.usernameMessage = usernameData.message;
            }
            else {
                _this.usernameValid = true;
                _this.usernameMessage = usernameData.message;
            }
        });
    };
    RegisterComponent.prototype.onRegistrySubmit = function () {
        var _this = this;
        var user = {
            email: this.form.get('email').value,
            username: this.form.get('username').value,
            password: this.form.get('password').value,
        };
        this.authService.registerUser(user)
            .subscribe(function (data) {
            var messageData = data.json();
            if (!messageData.success) {
                _this.messageClass = 'alert alert-danger';
                _this.message = messageData.message;
            }
            else {
                _this.messageClass = 'alert alert-success';
                _this.message = messageData.message;
                setTimeout(function () {
                    _this.router.navigate(['/login']);
                }, 2000);
            }
            console.log(data.json());
        });
    };
    RegisterComponent.prototype.ngOnInit = function () {
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../src/app/components/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/register/register.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]) === "function" && _c || Object])
], RegisterComponent);

var _a, _b, _c;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (router, state) {
        if (this.authService.isLoggedIn()) {
            return true;
        }
        else {
            this.redirectedUrl = state.url;
            this.router.navigate(['/login']);
            return false;
        }
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ "../../../../../src/app/guards/notAuth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotAuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NotAuthGuard = (function () {
    function NotAuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    NotAuthGuard.prototype.canActivate = function () {
        if (this.authService.isLoggedIn()) {
            this.router.navigate(['/']);
            return false;
        }
        else {
            return true;
        }
    };
    return NotAuthGuard;
}());
NotAuthGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
], NotAuthGuard);

var _a, _b;
//# sourceMappingURL=notAuth.guard.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
        this.domain = '';
    }
    AuthService.prototype.loadToken = function () {
        this.authToken = localStorage.getItem('token');
    };
    AuthService.prototype.createAuthenticationHeaders = function () {
        this.loadToken();
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({
                'Content-Type': 'application/json',
                'authorization': this.authToken
            })
        });
    };
    AuthService.prototype.registerUser = function (user) {
        return this.http.post(this.domain + "/authentication/register", user);
    };
    AuthService.prototype.checkUsername = function (username) {
        return this.http.get(this.domain + "/authentication/checkUsername/" + username, username);
    };
    AuthService.prototype.checkEmail = function (email) {
        return this.http.get(this.domain + "/authentication/checkEmail/" + email, email);
    };
    AuthService.prototype.login = function (user) {
        return this.http.post(this.domain + '/authentication/login', user);
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.getProfile = function () {
        this.createAuthenticationHeaders();
        return this.http.get(this.domain + '/authentication/profile', this.options);
    };
    AuthService.prototype.getPublicProfile = function (username) {
        this.createAuthenticationHeaders();
        return this.http.get(this.domain + '/authentication/publicProfile/' + username, this.options)
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.isLoggedIn = function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])();
    };
    return AuthService;
}());
AuthService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], AuthService);

var _a;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/blog.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BlogService = (function () {
    function BlogService(authService, http) {
        this.authService = authService;
        this.http = http;
        this.domain = this.authService.domain;
    }
    BlogService.prototype.createAuthenticationHeaders = function () {
        this.authService.loadToken();
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({
                'Content-Type': 'application/json',
                'authorization': this.authService.authToken
            })
        });
    };
    BlogService.prototype.newBlog = function (blog) {
        this.createAuthenticationHeaders();
        return this.http.post(this.domain + '/blogs/newBlog', blog, this.options);
    };
    BlogService.prototype.getAllBlogs = function () {
        this.createAuthenticationHeaders();
        return this.http.get(this.domain + '/blogs/AllBlogs', this.options).map(function (res) { return res.json(); });
    };
    BlogService.prototype.getSingleBlog = function (id) {
        this.createAuthenticationHeaders();
        return this.http.get(this.domain + '/blogs/singleBlog/' + id, this.options).map(function (res) { return res.json(); });
    };
    BlogService.prototype.editBlog = function (blog) {
        this.createAuthenticationHeaders();
        return this.http.put(this.domain + '/blogs/updateBlog/', blog, this.options).map(function (res) { return res.json(); });
    };
    BlogService.prototype.deleteBlog = function (id) {
        this.createAuthenticationHeaders();
        return this.http.delete(this.domain + '/blogs/deleteBlog/' + id, this.options).map(function (res) { return res.json(); });
    };
    BlogService.prototype.likeBlog = function (id) {
        var blog = { id: id };
        /*this.createAuthenticationHeaders();*/
        return this.http.put(this.domain + '/blogs/likeBlog', blog, this.options)
            .map(function (res) { return res.json(); });
    };
    BlogService.prototype.dislikeBlog = function (id) {
        var blog = { id: id };
        /*this.createAuthenticationHeaders();*/
        return this.http.put(this.domain + '/blogs/dislikeBlog', blog, this.options)
            .map(function (res) { return res.json(); });
    };
    BlogService.prototype.postComment = function (id, comment) {
        this.createAuthenticationHeaders();
        var blogData = {
            id: id,
            comment: comment
        };
        return this.http.post(this.domain + '/blogs/comment', blogData, this.options).map(function (res) { return res.json(); });
    };
    return BlogService;
}());
BlogService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _b || Object])
], BlogService);

var _a, _b;
//# sourceMappingURL=blog.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map