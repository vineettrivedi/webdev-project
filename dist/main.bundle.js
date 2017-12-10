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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-root',
        template: "<router-outlet></router-outlet>",
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_test_test_component__ = __webpack_require__("../../../../../src/app/components/test/test.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_test_service_client__ = __webpack_require__("../../../../../src/app/services/test.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_search_search_component__ = __webpack_require__("../../../../../src/app/components/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_flickr_flickr_component__ = __webpack_require__("../../../../../src/app/components/flickr/flickr.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_anonymous_project_home_project_home_component__ = __webpack_require__("../../../../../src/app/components/anonymous/project-home/project-home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_anonymous_register_register_component__ = __webpack_require__("../../../../../src/app/components/anonymous/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_comedian_comedian_account_comedian_account_component__ = __webpack_require__("../../../../../src/app/components/comedian/comedian-account/comedian-account.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_comedian_comedian_login_comedian_login_component__ = __webpack_require__("../../../../../src/app/components/comedian/comedian-login/comedian-login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_comedian_comedian_profile_comedian_profile_component__ = __webpack_require__("../../../../../src/app/components/comedian/comedian-profile/comedian-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_comedian_portfolio_portfolio_component__ = __webpack_require__("../../../../../src/app/components/comedian/portfolio/portfolio.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_comedian_bit_image_image_create_image_create_component__ = __webpack_require__("../../../../../src/app/components/comedian/bit/image/image-create/image-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_comedian_bit_image_image_list_image_list_component__ = __webpack_require__("../../../../../src/app/components/comedian/bit/image/image-list/image-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_comedian_bit_image_image_edit_image_edit_component__ = __webpack_require__("../../../../../src/app/components/comedian/bit/image/image-edit/image-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_comedian_bit_video_video_edit_video_edit_component__ = __webpack_require__("../../../../../src/app/components/comedian/bit/video/video-edit/video-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_comedian_bit_video_video_create_video_create_component__ = __webpack_require__("../../../../../src/app/components/comedian/bit/video/video-create/video-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_comedian_bit_video_video_list_video_list_component__ = __webpack_require__("../../../../../src/app/components/comedian/bit/video/video-list/video-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_critic_critic_profile_critic_profile_component__ = __webpack_require__("../../../../../src/app/components/critic/critic-profile/critic-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_critic_critic_account_critic_account_component__ = __webpack_require__("../../../../../src/app/components/critic/critic-account/critic-account.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_critic_critic_login_critic_login_component__ = __webpack_require__("../../../../../src/app/components/critic/critic-login/critic-login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_critic_review_review_create_review_create_component__ = __webpack_require__("../../../../../src/app/components/critic/review/review-create/review-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_critic_review_review_list_review_list_component__ = __webpack_require__("../../../../../src/app/components/critic/review/review-list/review-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_critic_review_review_edit_review_edit_component__ = __webpack_require__("../../../../../src/app/components/critic/review/review-edit/review-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__services_bit_service_client__ = __webpack_require__("../../../../../src/app/services/bit.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__services_comedian_service_client__ = __webpack_require__("../../../../../src/app/services/comedian.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__services_critic_service_client__ = __webpack_require__("../../../../../src/app/services/critic.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__services_review_service_client__ = __webpack_require__("../../../../../src/app/services/review.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__services_flickr_service_client__ = __webpack_require__("../../../../../src/app/services/flickr.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__components_safe_pipe__ = __webpack_require__("../../../../../src/app/components/safe-pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__services_shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        // Declare components here
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_3__components_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_4__components_test_test_component__["a" /* TestComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_search_search_component__["a" /* SearchComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_anonymous_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_comedian_comedian_account_comedian_account_component__["a" /* ComedianAccountComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_comedian_comedian_login_comedian_login_component__["a" /* ComedianLoginComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_comedian_comedian_profile_comedian_profile_component__["a" /* ComedianProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_comedian_portfolio_portfolio_component__["a" /* PortfolioComponent */],
            __WEBPACK_IMPORTED_MODULE_23__components_critic_critic_profile_critic_profile_component__["a" /* CriticProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_24__components_critic_critic_account_critic_account_component__["a" /* CriticAccountComponent */],
            __WEBPACK_IMPORTED_MODULE_25__components_critic_critic_login_critic_login_component__["a" /* CriticLoginComponent */],
            __WEBPACK_IMPORTED_MODULE_26__components_critic_review_review_create_review_create_component__["a" /* ReviewCreateComponent */],
            __WEBPACK_IMPORTED_MODULE_27__components_critic_review_review_list_review_list_component__["a" /* ReviewListComponent */],
            __WEBPACK_IMPORTED_MODULE_28__components_critic_review_review_edit_review_edit_component__["a" /* ReviewEditComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_comedian_bit_image_image_create_image_create_component__["a" /* ImageCreateComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_comedian_bit_image_image_list_image_list_component__["a" /* ImageListComponent */],
            __WEBPACK_IMPORTED_MODULE_19__components_comedian_bit_image_image_edit_image_edit_component__["a" /* ImageEditComponent */],
            __WEBPACK_IMPORTED_MODULE_20__components_comedian_bit_video_video_edit_video_edit_component__["a" /* VideoEditComponent */],
            __WEBPACK_IMPORTED_MODULE_21__components_comedian_bit_video_video_create_video_create_component__["a" /* VideoCreateComponent */],
            __WEBPACK_IMPORTED_MODULE_22__components_comedian_bit_video_video_list_video_list_component__["a" /* VideoListComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_flickr_flickr_component__["a" /* FlickrComponent */],
            __WEBPACK_IMPORTED_MODULE_34__components_safe_pipe__["a" /* SafePipe */],
            __WEBPACK_IMPORTED_MODULE_11__components_anonymous_project_home_project_home_component__["a" /* ProjectHomeComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__app_routing__["a" /* Routing */]
        ],
        // Client Side services here
        providers: [__WEBPACK_IMPORTED_MODULE_8__services_test_service_client__["a" /* TestService */], __WEBPACK_IMPORTED_MODULE_29__services_bit_service_client__["a" /* BitService */], __WEBPACK_IMPORTED_MODULE_30__services_comedian_service_client__["a" /* ComedianService */], __WEBPACK_IMPORTED_MODULE_31__services_critic_service_client__["a" /* CriticService */], __WEBPACK_IMPORTED_MODULE_32__services_review_service_client__["a" /* ReviewService */], __WEBPACK_IMPORTED_MODULE_33__services_flickr_service_client__["a" /* FlickrService */], __WEBPACK_IMPORTED_MODULE_35__services_shared_service_client__["a" /* SharedService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_test_test_component__ = __webpack_require__("../../../../../src/app/components/test/test.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_anonymous_register_register_component__ = __webpack_require__("../../../../../src/app/components/anonymous/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_comedian_comedian_login_comedian_login_component__ = __webpack_require__("../../../../../src/app/components/comedian/comedian-login/comedian-login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_comedian_comedian_profile_comedian_profile_component__ = __webpack_require__("../../../../../src/app/components/comedian/comedian-profile/comedian-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_comedian_comedian_account_comedian_account_component__ = __webpack_require__("../../../../../src/app/components/comedian/comedian-account/comedian-account.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_comedian_portfolio_portfolio_component__ = __webpack_require__("../../../../../src/app/components/comedian/portfolio/portfolio.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_critic_critic_login_critic_login_component__ = __webpack_require__("../../../../../src/app/components/critic/critic-login/critic-login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_critic_critic_profile_critic_profile_component__ = __webpack_require__("../../../../../src/app/components/critic/critic-profile/critic-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_critic_critic_account_critic_account_component__ = __webpack_require__("../../../../../src/app/components/critic/critic-account/critic-account.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_critic_review_review_list_review_list_component__ = __webpack_require__("../../../../../src/app/components/critic/review/review-list/review-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_critic_review_review_edit_review_edit_component__ = __webpack_require__("../../../../../src/app/components/critic/review/review-edit/review-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_critic_review_review_create_review_create_component__ = __webpack_require__("../../../../../src/app/components/critic/review/review-create/review-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_search_search_component__ = __webpack_require__("../../../../../src/app/components/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_comedian_bit_image_image_list_image_list_component__ = __webpack_require__("../../../../../src/app/components/comedian/bit/image/image-list/image-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_comedian_bit_image_image_edit_image_edit_component__ = __webpack_require__("../../../../../src/app/components/comedian/bit/image/image-edit/image-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_comedian_bit_image_image_create_image_create_component__ = __webpack_require__("../../../../../src/app/components/comedian/bit/image/image-create/image-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_comedian_bit_video_video_list_video_list_component__ = __webpack_require__("../../../../../src/app/components/comedian/bit/video/video-list/video-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_comedian_bit_video_video_create_video_create_component__ = __webpack_require__("../../../../../src/app/components/comedian/bit/video/video-create/video-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_comedian_bit_video_video_edit_video_edit_component__ = __webpack_require__("../../../../../src/app/components/comedian/bit/video/video-edit/video-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_flickr_flickr_component__ = __webpack_require__("../../../../../src/app/components/flickr/flickr.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_anonymous_project_home_project_home_component__ = __webpack_require__("../../../../../src/app/components/anonymous/project-home/project-home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Routing; });
/**
 * Created by sesha on 7/26/17.
 */























// cid, crid, bid, rid
var APP_ROUTES = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_22__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'test', component: __WEBPACK_IMPORTED_MODULE_1__components_test_test_component__["a" /* TestComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_2__components_anonymous_register_register_component__["a" /* RegisterComponent */] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_21__components_anonymous_project_home_project_home_component__["a" /* ProjectHomeComponent */] },
    { path: 'search', component: __WEBPACK_IMPORTED_MODULE_13__components_search_search_component__["a" /* SearchComponent */] },
    { path: 'flickr/:id', component: __WEBPACK_IMPORTED_MODULE_20__components_flickr_flickr_component__["a" /* FlickrComponent */] },
    { path: 'comedianlogin', component: __WEBPACK_IMPORTED_MODULE_3__components_comedian_comedian_login_comedian_login_component__["a" /* ComedianLoginComponent */] },
    { path: 'comedian/:cid', component: __WEBPACK_IMPORTED_MODULE_4__components_comedian_comedian_profile_comedian_profile_component__["a" /* ComedianProfileComponent */] },
    { path: 'comedian/:cid/account', component: __WEBPACK_IMPORTED_MODULE_5__components_comedian_comedian_account_comedian_account_component__["a" /* ComedianAccountComponent */] },
    { path: 'comedian/:cid/portfolio', component: __WEBPACK_IMPORTED_MODULE_6__components_comedian_portfolio_portfolio_component__["a" /* PortfolioComponent */] },
    { path: 'comedian/:cid/image', component: __WEBPACK_IMPORTED_MODULE_14__components_comedian_bit_image_image_list_image_list_component__["a" /* ImageListComponent */] },
    { path: 'comedian/:cid/image/create', component: __WEBPACK_IMPORTED_MODULE_16__components_comedian_bit_image_image_create_image_create_component__["a" /* ImageCreateComponent */] },
    { path: 'comedian/:cid/image/:bid', component: __WEBPACK_IMPORTED_MODULE_15__components_comedian_bit_image_image_edit_image_edit_component__["a" /* ImageEditComponent */] },
    { path: 'comedian/:cid/video', component: __WEBPACK_IMPORTED_MODULE_17__components_comedian_bit_video_video_list_video_list_component__["a" /* VideoListComponent */] },
    { path: 'comedian/:cid/video/create', component: __WEBPACK_IMPORTED_MODULE_18__components_comedian_bit_video_video_create_video_create_component__["a" /* VideoCreateComponent */] },
    { path: 'comedian/:cid/video/:bid', component: __WEBPACK_IMPORTED_MODULE_19__components_comedian_bit_video_video_edit_video_edit_component__["a" /* VideoEditComponent */] },
    { path: 'criticlogin', component: __WEBPACK_IMPORTED_MODULE_7__components_critic_critic_login_critic_login_component__["a" /* CriticLoginComponent */] },
    { path: 'critic/:crid', component: __WEBPACK_IMPORTED_MODULE_8__components_critic_critic_profile_critic_profile_component__["a" /* CriticProfileComponent */] },
    { path: 'critic/:crid/account', component: __WEBPACK_IMPORTED_MODULE_9__components_critic_critic_account_critic_account_component__["a" /* CriticAccountComponent */] },
    { path: 'critic/:crid/review', component: __WEBPACK_IMPORTED_MODULE_10__components_critic_review_review_list_review_list_component__["a" /* ReviewListComponent */] },
    { path: 'critic/:crid/review/create', component: __WEBPACK_IMPORTED_MODULE_12__components_critic_review_review_create_review_create_component__["a" /* ReviewCreateComponent */] },
    { path: 'critic/:crid/review/:rid', component: __WEBPACK_IMPORTED_MODULE_11__components_critic_review_review_edit_review_edit_component__["a" /* ReviewEditComponent */] },
];
// Export the routes as module providers
var Routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forRoot(APP_ROUTES);
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/components/anonymous/project-home/project-home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/anonymous/project-home/project-home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>HOME</h1>\n  <button class=\"btn btn-primary btn-block\"\n          (click)=\"register()\">Register</button>\n  <button class=\"btn btn-success btn-block\"\n          (click)=\"comedianlogin()\">Comedian Login</button>\n  <button class=\"btn btn-success btn-block\"\n          (click)=\"criticlogin()\">Critic Login</button>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/anonymous/project-home/project-home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectHomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProjectHomeComponent = (function () {
    function ProjectHomeComponent(router) {
        this.router = router;
    }
    ProjectHomeComponent.prototype.ngOnInit = function () {
    };
    ProjectHomeComponent.prototype.register = function () {
        this.router.navigate(['register']);
    };
    ProjectHomeComponent.prototype.comedianlogin = function () {
        this.router.navigate(['comedianlogin']);
    };
    ProjectHomeComponent.prototype.criticlogin = function () {
        this.router.navigate(['criticlogin']);
    };
    return ProjectHomeComponent;
}());
ProjectHomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-project-home',
        template: __webpack_require__("../../../../../src/app/components/anonymous/project-home/project-home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/anonymous/project-home/project-home.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object])
], ProjectHomeComponent);

var _a;
//# sourceMappingURL=project-home.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/anonymous/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/anonymous/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <div *ngIf=\"errorFlag\"\n       class=\"alert alert-danger\">\n    {{errorMsg}}\n  </div>\n\n  <h1>Register</h1>\n\n  <form (ngSubmit) = \"register()\" #f=\"ngForm\">\n\n    <div class=\"form-group\">\n      <input placeholder=\"username\"\n             name=\"username\"\n             type=\"text\"\n             class=\"form-control\"\n             ngModel\n             required\n             #username=\"ngModel\" />\n      <span class=\"help-block\" *ngIf=\"!username.valid && username.touched\">\n      Please enter username!\n      </span>\n    </div>\n\n    <div class=\"form-group\">\n      <input placeholder=\"password\"\n             name=\"password\"\n             type=\"password\"\n             class=\"form-control\"\n             ngModel\n             required\n             #password=\"ngModel\" />\n      <span class=\"help-block\" *ngIf=\"!password.valid && password.touched\">\n      Please enter password!\n      </span>\n    </div>\n\n    <div class=\"form-group\">\n      <input placeholder=\"firstname\"\n             name=\"firstname\"\n             type=\"text\"\n             class=\"form-control\"\n             ngModel\n             required\n             #firstname=\"ngModel\" />\n      <span class=\"help-block\" *ngIf=\"!firstname.valid && firstname.touched\">\n      Please enter first name!\n      </span>\n    </div>\n\n    <div class=\"form-group\">\n      <input placeholder=\"lastname\"\n             name=\"lastname\"\n             type=\"text\"\n             class=\"form-control\"\n             ngModel\n             required\n             #lastname=\"ngModel\" />\n      <span class=\"help-block\" *ngIf=\"!lastname.valid && lastname.touched\">\n      Please enter last name!\n      </span>\n    </div>\n\n    <div class=\"form-group\">\n      <input placeholder=\"email\"\n             name=\"email\"\n             type=\"text\"\n             class=\"form-control\"\n             ngModel\n             required\n             #email=\"ngModel\" />\n      <span class=\"help-block\" *ngIf=\"!email.valid && email.touched\">\n      Please enter email!\n      </span>\n    </div>\n\n    <div class=\"form-group\">\n    <label class=\"radio-inline\">\n      <input type=\"radio\"\n             name=\"userType\"\n             ngModel\n             required\n             #userType=\"ngModel\"\n             value=\"comedian\">Comedian</label>\n    <label class=\"radio-inline\">\n      <input type=\"radio\"\n             name=\"userType\"\n             ngModel\n             required\n             #userType=\"ngModel\"\n             value=\"critic\">Critic</label>\n    </div>\n\n    <button class=\"btn btn-primary btn-block\"\n            type=\"submit\"\n            [disabled]=\"!f.valid\">Register</button>\n    <button class=\"btn btn-danger btn-block\"\n            (click)=\"home()\">Home</button>\n\n  </form>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/anonymous/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_critic_service_client__ = __webpack_require__("../../../../../src/app/services/critic.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_comedian_service_client__ = __webpack_require__("../../../../../src/app/services/comedian.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
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
    function RegisterComponent(sharedService, router, criticService, comedianService) {
        this.sharedService = sharedService;
        this.router = router;
        this.criticService = criticService;
        this.comedianService = comedianService;
        this.errorMsg = 'Invalid form!';
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        // fetching data from loginForm
        this.username = this.loginForm.value.username;
        this.password = this.loginForm.value.password;
        this.firstname = this.loginForm.value.firstname;
        this.lastname = this.loginForm.value.lastname;
        this.email = this.loginForm.value.email;
        this.userType = this.loginForm.value.userType;
        this.url = 'https://www.brightfind.com/images/services/design/icon-design-users.png';
        this.errorFlag = false;
        var user = {
            username: this.username,
            password: this.password,
            firstName: this.firstname,
            lastName: this.lastname,
            email: this.email,
            url: this.url
        };
        if (this.userType === 'critic') {
            this.criticService.register(user)
                .subscribe(function (critic) {
                _this.errorFlag = false;
                _this.sharedService.user = critic;
                _this.router.navigate(['critic', critic._id]);
            }, function (error) {
                _this.errorFlag = true;
            });
        }
        else {
            this.comedianService.register(user)
                .subscribe(function (comedian) {
                _this.errorFlag = false;
                _this.sharedService.user = comedian;
                _this.router.navigate(['comedian', comedian._id]);
            }, function (error) {
                _this.errorFlag = true;
            });
        }
    };
    RegisterComponent.prototype.home = function () {
        this.router.navigate(['home']);
    };
    return RegisterComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */]) === "function" && _a || Object)
], RegisterComponent.prototype, "loginForm", void 0);
RegisterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../src/app/components/anonymous/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/anonymous/register/register.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__services_shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_shared_service_client__["a" /* SharedService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_critic_service_client__["a" /* CriticService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_critic_service_client__["a" /* CriticService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__services_comedian_service_client__["a" /* ComedianService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_comedian_service_client__["a" /* ComedianService */]) === "function" && _e || Object])
], RegisterComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/comedian/bit/image/image-create/image-create.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/comedian/bit/image/image-create/image-create.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n\n    <!--heading on the nav bar-->\n    <p class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand thick\">\n        <b>Create Image</b>\n      </a>\n    </p>\n\n    <!--cross-->\n    <p class=\"navbar-text pull-right\">\n      <a (click)=\"images()\"  class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-remove\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n\n<div class=\"container\">\n  <form #f=\"ngForm\">\n\n    <div class=\"form-group\">\n      <label for=\"url\">Image URL</label>\n      <input type=\"text\"\n             class=\"form-control\"\n             id=\"url\"\n             name=\"url\"\n             ngModel\n             required\n             #url=\"ngModel\" >\n      <span class=\"help-block\" *ngIf=\"!url.valid && url.touched\">\n        Please enter image url!\n        </span>\n    </div>\n\n    <button class=\"btn btn-success btn-block\"\n            (click)=\"create()\">Create</button>\n\n  </form>\n</div>\n\n<!-- Footer -->\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a (click)=\"profile()\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/comedian/bit/image/image-create/image-create.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_bit_service_client__ = __webpack_require__("../../../../../src/app/services/bit.service.client.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageCreateComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ImageCreateComponent = (function () {
    function ImageCreateComponent(bitService, activatedRoute, router) {
        this.bitService = bitService;
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    ImageCreateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.comedianId = params['cid'];
        });
    };
    ImageCreateComponent.prototype.create = function () {
        var _this = this;
        this.url = this.newWebsiteForm.value.url;
        this.bitService.createBit(this.comedianId, { url: this.url, type: 'IMAGE' })
            .subscribe(function (image) {
            _this.router.navigate(['comedian', _this.comedianId, 'image']);
        });
    };
    ImageCreateComponent.prototype.profile = function () {
        this.router.navigate(['comedian', this.comedianId]);
    };
    ImageCreateComponent.prototype.images = function () {
        this.router.navigate(['comedian', this.comedianId, 'image']);
    };
    return ImageCreateComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* NgForm */]) === "function" && _a || Object)
], ImageCreateComponent.prototype, "newWebsiteForm", void 0);
ImageCreateComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-image-create',
        template: __webpack_require__("../../../../../src/app/components/comedian/bit/image/image-create/image-create.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/comedian/bit/image/image-create/image-create.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_bit_service_client__["a" /* BitService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_bit_service_client__["a" /* BitService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _d || Object])
], ImageCreateComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=image-create.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/comedian/bit/image/image-edit/image-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/comedian/bit/image/image-edit/image-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n\n    <!--heading on the nav bar-->\n    <p class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand thick\">\n        <b>Edit Image</b>\n      </a>\n    </p>\n\n    <!--cancel-->\n    <p class=\"navbar-text pull-right\">\n      <a (click)=\"images()\"  class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-remove\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n\n<div class=\"container\">\n  <form>\n\n    <div class=\"form-group\">\n      <label for=\"url\">Image URL</label>\n      <input [(ngModel)]=\"url\" name=\"url\" type=\"text\" class=\"form-control\" id=\"url\" >\n    </div>\n\n    <button class=\"btn btn-success btn-block\"\n            (click)=\"edit()\">Edit</button>\n\n    <button class=\"btn btn-danger btn-block\"\n            (click)=\"deleteImage()\">Delete</button>\n\n  </form>\n</div>\n\n<!-- Footer -->\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a (click)=\"profile()\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/comedian/bit/image/image-edit/image-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_bit_service_client__ = __webpack_require__("../../../../../src/app/services/bit.service.client.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageEditComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ImageEditComponent = (function () {
    function ImageEditComponent(bitService, activatedRoute, router) {
        this.bitService = bitService;
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    ImageEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.comedianId = params['cid'];
            _this.imageId = params['bid'];
        });
        this.bitService.findBitById(this.imageId)
            .subscribe(function (image) {
            _this.url = image.url;
        });
    };
    ImageEditComponent.prototype.edit = function () {
        var _this = this;
        this.bitService.updateBit(this.imageId, { url: this.url, type: 'IMAGE' })
            .subscribe(function (image) {
            _this.router.navigate(['comedian', _this.comedianId, 'image']);
        });
    };
    ImageEditComponent.prototype.profile = function () {
        this.router.navigate(['comedian', this.comedianId]);
    };
    ImageEditComponent.prototype.deleteImage = function () {
        var _this = this;
        this.bitService.deleteBit(this.imageId)
            .subscribe(function () {
            _this.router.navigate(['comedian', _this.comedianId, 'image']);
        });
    };
    ImageEditComponent.prototype.images = function () {
        this.router.navigate(['comedian', this.comedianId, 'image']);
    };
    return ImageEditComponent;
}());
ImageEditComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-image-edit',
        template: __webpack_require__("../../../../../src/app/components/comedian/bit/image/image-edit/image-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/comedian/bit/image/image-edit/image-edit.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_bit_service_client__["a" /* BitService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_bit_service_client__["a" /* BitService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _c || Object])
], ImageEditComponent);

var _a, _b, _c;
//# sourceMappingURL=image-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/comedian/bit/image/image-list/image-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/comedian/bit/image/image-list/image-list.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n\n    <!--heading on the nav bar-->\n    <p class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand thick\">\n        <b>Images</b>\n      </a>\n    </p>\n\n    <!--create-->\n    <p class=\"navbar-text pull-right\">\n      <a (click)=\"create()\"  class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-plus\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n\n<div class=\"container\">\n\n  <ul class=\"list-group\">\n    <li *ngFor=\"let image of images\" class=\"list-group-item li-border-true rounded\">\n      <a (click)=\"edit(image)\">\n        <img width=\"100%\" [src]=\"image.url | safe\">\n      </a>\n    </li>\n  </ul>\n\n</div>\n\n<!-- Footer -->\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a (click)=\"profile()\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/comedian/bit/image/image-list/image-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_bit_service_client__ = __webpack_require__("../../../../../src/app/services/bit.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ImageListComponent = (function () {
    function ImageListComponent(sharedService, bitService, activatedRoute, router) {
        this.sharedService = sharedService;
        this.bitService = bitService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.images = [];
    }
    ImageListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.comedianId = params['cid'];
        });
        this.bitService.findBitsByComedianId(this.comedianId)
            .subscribe(function (bits) {
            var i = 0;
            for (var x = 0; x < bits.length; x++) {
                if (bits[x].type === 'IMAGE') {
                    _this.images[i++] = bits[x];
                }
            }
        });
    };
    ImageListComponent.prototype.create = function () {
        this.router.navigate(['comedian', this.comedianId, 'image', 'create']);
    };
    ImageListComponent.prototype.edit = function (image) {
        this.router.navigate(['comedian', this.comedianId, 'image', image._id]);
    };
    ImageListComponent.prototype.profile = function () {
        this.router.navigate(['comedian', this.comedianId]);
    };
    return ImageListComponent;
}());
ImageListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-image-list',
        template: __webpack_require__("../../../../../src/app/components/comedian/bit/image/image-list/image-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/comedian/bit/image/image-list/image-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_shared_service_client__["a" /* SharedService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_bit_service_client__["a" /* BitService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_bit_service_client__["a" /* BitService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _d || Object])
], ImageListComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=image-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/comedian/bit/video/video-create/video-create.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/comedian/bit/video/video-create/video-create.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n\n    <!--heading on the nav bar-->\n    <p class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand thick\">\n        <b>Create Video</b>\n      </a>\n    </p>\n\n    <!--cross-->\n    <p class=\"navbar-text pull-right\">\n      <a (click)=\"videos()\"  class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-remove\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n\n<div class=\"container\">\n  <form #f=\"ngForm\">\n\n    <div class=\"form-group\">\n      <label for=\"url\">Video URL</label>\n      <input type=\"text\"\n             class=\"form-control\"\n             id=\"url\"\n             name=\"url\"\n             ngModel\n             required\n             #url=\"ngModel\" >\n      <span class=\"help-block\" *ngIf=\"!url.valid && url.touched\">\n        Please enter video url!\n        </span>\n    </div>\n\n    <button class=\"btn btn-success btn-block\"\n            (click)=\"create()\">Create</button>\n\n  </form>\n</div>\n\n<!-- Footer -->\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a (click)=\"profile()\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/comedian/bit/video/video-create/video-create.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_bit_service_client__ = __webpack_require__("../../../../../src/app/services/bit.service.client.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoCreateComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var VideoCreateComponent = (function () {
    function VideoCreateComponent(bitService, activatedRoute, router) {
        this.bitService = bitService;
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    VideoCreateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.comedianId = params['cid'];
        });
    };
    VideoCreateComponent.prototype.create = function () {
        var _this = this;
        this.url = this.newWebsiteForm.value.url;
        this.bitService.createBit(this.comedianId, { url: this.url, type: 'VIDEO' })
            .subscribe(function (video) {
            _this.router.navigate(['comedian', _this.comedianId, 'video']);
        });
    };
    VideoCreateComponent.prototype.profile = function () {
        this.router.navigate(['comedian', this.comedianId]);
    };
    VideoCreateComponent.prototype.videos = function () {
        this.router.navigate(['comedian', this.comedianId, 'video']);
    };
    return VideoCreateComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* NgForm */]) === "function" && _a || Object)
], VideoCreateComponent.prototype, "newWebsiteForm", void 0);
VideoCreateComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-video-create',
        template: __webpack_require__("../../../../../src/app/components/comedian/bit/video/video-create/video-create.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/comedian/bit/video/video-create/video-create.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_bit_service_client__["a" /* BitService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_bit_service_client__["a" /* BitService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _d || Object])
], VideoCreateComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=video-create.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/comedian/bit/video/video-edit/video-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/comedian/bit/video/video-edit/video-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n\n    <!--heading on the nav bar-->\n    <p class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand thick\">\n        <b>Edit Video</b>\n      </a>\n    </p>\n\n    <!--cancel-->\n    <p class=\"navbar-text pull-right\">\n      <a (click)=\"videos()\"  class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-remove\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n\n<div class=\"container\">\n  <form>\n\n    <div class=\"form-group\">\n      <label for=\"url\">Video URL</label>\n      <input [(ngModel)]=\"url\" name=\"url\" type=\"text\" class=\"form-control\" id=\"url\" >\n    </div>\n\n    <button class=\"btn btn-success btn-block\"\n            (click)=\"edit()\">Edit</button>\n\n    <button class=\"btn btn-danger btn-block\"\n            (click)=\"deleteVideo()\">Delete</button>\n\n  </form>\n</div>\n\n<!-- Footer -->\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a (click)=\"profile()\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/comedian/bit/video/video-edit/video-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_bit_service_client__ = __webpack_require__("../../../../../src/app/services/bit.service.client.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoEditComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VideoEditComponent = (function () {
    function VideoEditComponent(bitService, activatedRoute, router) {
        this.bitService = bitService;
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    VideoEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.comedianId = params['cid'];
            _this.videoId = params['bid'];
        });
        this.bitService.findBitById(this.videoId)
            .subscribe(function (video) {
            _this.url = video.url;
        });
    };
    VideoEditComponent.prototype.edit = function () {
        var _this = this;
        this.bitService.updateBit(this.videoId, { url: this.url, type: 'VIDEO' })
            .subscribe(function (video) {
            _this.router.navigate(['comedian', _this.comedianId, 'video']);
        });
    };
    VideoEditComponent.prototype.profile = function () {
        this.router.navigate(['comedian', this.comedianId]);
    };
    VideoEditComponent.prototype.deleteVideo = function () {
        var _this = this;
        this.bitService.deleteBit(this.videoId)
            .subscribe(function () {
            _this.router.navigate(['comedian', _this.comedianId, 'video']);
        });
    };
    VideoEditComponent.prototype.videos = function () {
        this.router.navigate(['comedian', this.comedianId, 'video']);
    };
    return VideoEditComponent;
}());
VideoEditComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-video-edit',
        template: __webpack_require__("../../../../../src/app/components/comedian/bit/video/video-edit/video-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/comedian/bit/video/video-edit/video-edit.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_bit_service_client__["a" /* BitService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_bit_service_client__["a" /* BitService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _c || Object])
], VideoEditComponent);

var _a, _b, _c;
//# sourceMappingURL=video-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/comedian/bit/video/video-list/video-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/comedian/bit/video/video-list/video-list.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n\n    <!--heading on the nav bar-->\n    <p class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand thick\">\n        <b>Videos</b>\n      </a>\n    </p>\n\n    <!--create-->\n    <p class=\"navbar-text pull-right\">\n      <a (click)=\"create()\"  class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-plus\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n\n<div class=\"container\">\n\n  <ul class=\"list-group\">\n    <li *ngFor=\"let video of videos\" class=\"list-group-item li-border-true rounded\">\n      <a (click)=\"edit(video)\">\n        <span class=\"glyphicon glyphicon-cog\"></span>\n      </a>\n      <div class=\"yt-container\">\n        <iframe [src]=\"video.url | safe\" frameborder=\"0\" allowfullscreen></iframe>\n      </div>\n    </li>\n  </ul>\n\n</div>\n\n<!-- Footer -->\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a (click)=\"profile()\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/comedian/bit/video/video-list/video-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_bit_service_client__ = __webpack_require__("../../../../../src/app/services/bit.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var VideoListComponent = (function () {
    function VideoListComponent(sharedService, bitService, activatedRoute, router) {
        this.sharedService = sharedService;
        this.bitService = bitService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.videos = [];
    }
    VideoListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.comedianId = params['cid'];
        });
        this.bitService.findBitsByComedianId(this.comedianId)
            .subscribe(function (bits) {
            var i = 0;
            for (var x = 0; x < bits.length; x++) {
                if (bits[x].type === 'VIDEO') {
                    _this.videos[i++] = bits[x];
                }
            }
        });
    };
    VideoListComponent.prototype.create = function () {
        this.router.navigate(['comedian', this.comedianId, 'video', 'create']);
    };
    VideoListComponent.prototype.edit = function (video) {
        this.router.navigate(['comedian', this.comedianId, 'video', video._id]);
    };
    VideoListComponent.prototype.profile = function () {
        this.router.navigate(['comedian', this.comedianId]);
    };
    return VideoListComponent;
}());
VideoListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-video-list',
        template: __webpack_require__("../../../../../src/app/components/comedian/bit/video/video-list/video-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/comedian/bit/video/video-list/video-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_shared_service_client__["a" /* SharedService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_bit_service_client__["a" /* BitService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_bit_service_client__["a" /* BitService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _d || Object])
], VideoListComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=video-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/comedian/comedian-account/comedian-account.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/comedian/comedian-account/comedian-account.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n\n    <!--heading on the nav bar-->\n    <p class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand thick\">\n        <b>Account Details</b>\n      </a>\n    </p>\n\n    <!--tick mark-->\n    <p class=\"navbar-text pull-right\">\n      <a (click)=\"editAccount()\"  class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-ok\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n\n\n<div class=\"container\">\n  <form>\n\n    <div class=\"form-group\">\n      <label for=\"username\">Username</label>\n      <input [(ngModel)]=\"username\" name=\"username\" type=\"text\" class=\"form-control\" id=\"username\" >\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"email\">Email address</label>\n      <input [(ngModel)]=\"email\" name=\"email\" type=\"email\" class=\"form-control\" id=\"email\" >\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"first-name\">First Name</label>\n      <input [(ngModel)]=\"firstName\" name=\"firstName\" type=\"text\" class=\"form-control\" id=\"first-name\" >\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"last-name\">Last Name</label>\n      <input [(ngModel)]=\"lastName\" name=\"lastName\" type=\"text\" class=\"form-control\" id=\"last-name\" >\n    </div>\n\n  </form>\n</div>\n\n<!-- Footer -->\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a (click)=\"profile()\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/comedian/comedian-account/comedian-account.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_comedian_service_client__ = __webpack_require__("../../../../../src/app/services/comedian.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComedianAccountComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ComedianAccountComponent = (function () {
    function ComedianAccountComponent(comedianService, activatedRoute, router) {
        this.comedianService = comedianService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.comedian = {};
    }
    ComedianAccountComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.comedianId = params['cid'];
        });
        this.comedianService.findComedianById(this.comedianId)
            .subscribe(function (comedian) {
            _this.comedian = comedian;
            _this.username = _this.comedian['username'];
            _this.password = _this.comedian['password'];
            _this.email = _this.comedian['email'];
            _this.firstName = _this.comedian['firstName'];
            _this.lastName = _this.comedian['lastName'];
            _this.url = _this.comedian['url'];
        });
    };
    ComedianAccountComponent.prototype.editAccount = function () {
        var _this = this;
        this.comedianService.updateComedian(this.comedianId, { _id: this.comedianId, username: this.username, password: this.password,
            firstName: this.firstName, lastName: this.lastName, email: this.email, url: this.url })
            .subscribe(function (comedian) {
            _this.comedian = comedian;
            _this.router.navigate(['comedian', _this.comedianId, 'account']);
        });
    };
    ComedianAccountComponent.prototype.profile = function () {
        this.router.navigate(['comedian', this.comedianId]);
    };
    return ComedianAccountComponent;
}());
ComedianAccountComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-comedian-account',
        template: __webpack_require__("../../../../../src/app/components/comedian/comedian-account/comedian-account.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/comedian/comedian-account/comedian-account.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_comedian_service_client__["a" /* ComedianService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_comedian_service_client__["a" /* ComedianService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _c || Object])
], ComedianAccountComponent);

var _a, _b, _c;
//# sourceMappingURL=comedian-account.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/comedian/comedian-login/comedian-login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/comedian/comedian-login/comedian-login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <div *ngIf=\"errorFlag\"\n       class=\"alert alert-danger\">\n    {{errorMsg}}\n  </div>\n\n  <h1>Comedian Login</h1>\n\n  <form (ngSubmit) = \"login()\" #f=\"ngForm\">\n\n    <div class=\"form-group\">\n      <input placeholder=\"username\"\n             name=\"username\"\n             type=\"text\"\n             class=\"form-control\"\n             ngModel\n             required\n             #username=\"ngModel\" />\n      <span class=\"help-block\" *ngIf=\"!username.valid && username.touched\">\n      Please enter username!\n      </span>\n    </div>\n\n    <div class=\"form-group\">\n      <input placeholder=\"password\"\n             name=\"password\"\n             type=\"password\"\n             class=\"form-control\"\n             ngModel\n             required\n             #password=\"ngModel\" />\n      <span class=\"help-block\" *ngIf=\"!password.valid && password.touched\">\n      Please enter password!\n      </span>\n    </div>\n\n    <button class=\"btn btn-primary btn-block\"\n            type=\"submit\"\n            [disabled]=\"!f.valid\" >Login</button>\n\n    <button class=\"btn btn-success btn-block\"\n            (click)=\"register()\">Register</button>\n\n    <button class=\"btn btn-success btn-block\"\n            (click)=\"home()\">Home</button>\n\n  </form>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/comedian/comedian-login/comedian-login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_comedian_service_client__ = __webpack_require__("../../../../../src/app/services/comedian.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComedianLoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ComedianLoginComponent = (function () {
    function ComedianLoginComponent(comedianService, sharedService, router) {
        this.comedianService = comedianService;
        this.sharedService = sharedService;
        this.router = router;
        this.errorMsg = 'Invalid username or password !';
    }
    ComedianLoginComponent.prototype.ngOnInit = function () {
    };
    ComedianLoginComponent.prototype.login = function () {
        var _this = this;
        // fetching data from loginForm
        this.username = this.loginForm.value.username;
        this.password = this.loginForm.value.password;
        this.comedianService.login(this.username, this.password)
            .subscribe(function (comedian) {
            _this.errorFlag = false;
            _this.sharedService.user = comedian;
            _this.router.navigate(['comedian', comedian._id]);
        }, function (error) {
            _this.errorFlag = true;
        });
    };
    ComedianLoginComponent.prototype.register = function () {
        this.router.navigate(['register']);
    };
    ComedianLoginComponent.prototype.home = function () {
        this.router.navigate(['home']);
    };
    return ComedianLoginComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */]) === "function" && _a || Object)
], ComedianLoginComponent.prototype, "loginForm", void 0);
ComedianLoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-comedian-login',
        template: __webpack_require__("../../../../../src/app/components/comedian/comedian-login/comedian-login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/comedian/comedian-login/comedian-login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_comedian_service_client__["a" /* ComedianService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_comedian_service_client__["a" /* ComedianService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_shared_service_client__["a" /* SharedService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _d || Object])
], ComedianLoginComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=comedian-login.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/comedian/comedian-profile/comedian-profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/comedian/comedian-profile/comedian-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n\n    <!--heading on the nav bar-->\n    <p class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand thick\">\n        <b>{{username}}'s Profile</b>\n      </a>\n    </p>\n\n    <!--logout-->\n    <p class=\"navbar-text pull-right\">\n      <a (click)=\"logout()\"  class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-off\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n\n<div class=\"container\">\n  <img width=\"10%\" [src]=\"url | safe\">\n  <a (click)=\"flickr()\"  class=\"navbar-link\">\n    <b>Change Profile Picture!</b>\n  </a>\n\n  <ul class=\"list-group\">\n    <li class=\"list-group-item\">\n      <a (click)=\"account()\"  class=\"navbar-link\">\n        <b>Account</b>\n      </a>\n    </li>\n\n    <li class=\"list-group-item\">\n      <a (click)=\"portfolio()\"  class=\"navbar-link\">\n        <b>Portfolio</b>\n      </a>\n    </li>\n\n    <li class=\"list-group-item\">\n      <a (click)=\"image()\"  class=\"navbar-link\">\n        <b>Images</b>\n      </a>\n    </li>\n\n    <li class=\"list-group-item\">\n      <a (click)=\"video()\"  class=\"navbar-link\">\n        <b>Videos</b>\n      </a>\n    </li>\n\n    <li class=\"list-group-item\">\n      <a (click)=\"search()\"  class=\"navbar-link\">\n        <b>Check out your favorite Comics!</b>\n      </a>\n    </li>\n  </ul>\n</div>\n\n<!-- Footer -->\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a (click)=\"profile()\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/comedian/comedian-profile/comedian-profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_comedian_service_client__ = __webpack_require__("../../../../../src/app/services/comedian.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComedianProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ComedianProfileComponent = (function () {
    function ComedianProfileComponent(sharedService, comedianService, activatedRoute, router) {
        this.sharedService = sharedService;
        this.comedianService = comedianService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.comedian = {};
    }
    ComedianProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.comedianId = params['cid'];
        });
        this.comedianService.findComedianById(this.comedianId)
            .subscribe(function (comedian) {
            _this.comedian = comedian;
            _this.username = _this.comedian['username'];
            _this.password = _this.comedian['password'];
            _this.email = _this.comedian['email'];
            _this.firstName = _this.comedian['firstName'];
            _this.lastName = _this.comedian['lastName'];
            _this.url = _this.comedian['url'];
        });
        // this.comedian = this.sharedService.user;
        // this.comedianId = this.comedian['_id'];
        // this.username = this.comedian['username'];
        // this.password = this.comedian['password'];
        // this.email = this.comedian['email'];
        // this.firstName = this.comedian['firstName'];
        // this.lastName = this.comedian['lastName'];
        // this.url = this.comedian['url'];
    };
    ComedianProfileComponent.prototype.logout = function () {
        var _this = this;
        this.comedianService.logout()
            .subscribe(function (data) { return _this.router.navigate(['comedianlogin']); });
    };
    ComedianProfileComponent.prototype.profile = function () {
        this.router.navigate(['comedian', this.comedianId]);
    };
    ComedianProfileComponent.prototype.account = function () {
        this.router.navigate(['comedian', this.comedianId, 'account']);
    };
    ComedianProfileComponent.prototype.flickr = function () {
        this.router.navigate(['flickr', this.comedianId]);
    };
    ComedianProfileComponent.prototype.search = function () {
        this.router.navigate(['search']);
    };
    ComedianProfileComponent.prototype.portfolio = function () {
        this.router.navigate(['comedian', this.comedianId, 'portfolio']);
    };
    ComedianProfileComponent.prototype.image = function () {
        this.router.navigate(['comedian', this.comedianId, 'image']);
    };
    ComedianProfileComponent.prototype.video = function () {
        this.router.navigate(['comedian', this.comedianId, 'video']);
    };
    return ComedianProfileComponent;
}());
ComedianProfileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-comedian-profile',
        template: __webpack_require__("../../../../../src/app/components/comedian/comedian-profile/comedian-profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/comedian/comedian-profile/comedian-profile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_shared_service_client__["a" /* SharedService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_comedian_service_client__["a" /* ComedianService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_comedian_service_client__["a" /* ComedianService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _d || Object])
], ComedianProfileComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=comedian-profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/comedian/portfolio/portfolio.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/comedian/portfolio/portfolio.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n\n    <!--heading on the nav bar-->\n    <p class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand thick\">\n        <b>Portfolio</b>\n      </a>\n    </p>\n\n  </div>\n</nav>\n\n<div class=\"container\">\n\n  <ul class=\"list-group\">\n    <li *ngFor=\"let bit of bits\" class=\"list-group-item li-border-true rounded\">\n      <div [ngSwitch]=\"bit.type\">\n        <div *ngSwitchCase=\"'IMAGE'\">\n          <img width=\"100%\" [src]=\"bit.url | safe\">\n        </div>\n        <div class=\"yt-container\" *ngSwitchCase=\"'VIDEO'\">\n          <iframe [src]=\"bit.url | safe\" frameborder=\"0\" allowfullscreen></iframe>\n        </div>\n      </div>\n    </li>\n  </ul>\n\n</div>\n\n<!-- Footer -->\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/comedian/portfolio/portfolio.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_bit_service_client__ = __webpack_require__("../../../../../src/app/services/bit.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PortfolioComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PortfolioComponent = (function () {
    function PortfolioComponent(sharedService, bitService, activatedRoute, router) {
        this.sharedService = sharedService;
        this.bitService = bitService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.bits = [];
    }
    PortfolioComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.comedianId = params['cid'];
        });
        this.bitService.findBitsByComedianId(this.comedianId)
            .subscribe(function (bits) {
            _this.bits = bits;
        });
    };
    return PortfolioComponent;
}());
PortfolioComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-portfolio',
        template: __webpack_require__("../../../../../src/app/components/comedian/portfolio/portfolio.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/comedian/portfolio/portfolio.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_shared_service_client__["a" /* SharedService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_bit_service_client__["a" /* BitService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_bit_service_client__["a" /* BitService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _d || Object])
], PortfolioComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=portfolio.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/critic/critic-account/critic-account.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/critic/critic-account/critic-account.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n\n    <!--heading on the nav bar-->\n    <p class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand thick\">\n        <b>Account Details</b>\n      </a>\n    </p>\n\n    <!--tick mark-->\n    <p class=\"navbar-text pull-right\">\n      <a (click)=\"editAccount()\"  class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-ok\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n\n\n<div class=\"container\">\n  <form>\n\n    <div class=\"form-group\">\n      <label for=\"username\">Username</label>\n      <input [(ngModel)]=\"username\" name=\"username\" type=\"text\" class=\"form-control\" id=\"username\" >\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"email\">Email address</label>\n      <input [(ngModel)]=\"email\" name=\"email\" type=\"email\" class=\"form-control\" id=\"email\" >\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"first-name\">First Name</label>\n      <input [(ngModel)]=\"firstName\" name=\"firstName\" type=\"text\" class=\"form-control\" id=\"first-name\" >\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"last-name\">Last Name</label>\n      <input [(ngModel)]=\"lastName\" name=\"lastName\" type=\"text\" class=\"form-control\" id=\"last-name\" >\n    </div>\n\n  </form>\n</div>\n\n<!-- Footer -->\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a (click)=\"profile()\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/critic/critic-account/critic-account.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_critic_service_client__ = __webpack_require__("../../../../../src/app/services/critic.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CriticAccountComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CriticAccountComponent = (function () {
    function CriticAccountComponent(criticService, activatedRoute, router) {
        this.criticService = criticService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.critic = {};
    }
    CriticAccountComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.criticId = params['crid'];
        });
        this.criticService.findCriticById(this.criticId)
            .subscribe(function (critic) {
            _this.critic = critic;
            _this.username = _this.critic['username'];
            _this.password = _this.critic['password'];
            _this.email = _this.critic['email'];
            _this.firstName = _this.critic['firstName'];
            _this.lastName = _this.critic['lastName'];
            _this.url = _this.critic['url'];
        });
    };
    CriticAccountComponent.prototype.editAccount = function () {
        var _this = this;
        this.criticService.updateCritic(this.criticId, { _id: this.criticId, username: this.username, password: this.password,
            firstName: this.firstName, lastName: this.lastName, email: this.email, url: this.url })
            .subscribe(function (critic) {
            _this.critic = critic;
            _this.router.navigate(['critic', _this.criticId, 'account']);
        });
    };
    CriticAccountComponent.prototype.profile = function () {
        this.router.navigate(['critic', this.criticId]);
    };
    return CriticAccountComponent;
}());
CriticAccountComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-critic-account',
        template: __webpack_require__("../../../../../src/app/components/critic/critic-account/critic-account.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/critic/critic-account/critic-account.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_critic_service_client__["a" /* CriticService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_critic_service_client__["a" /* CriticService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _c || Object])
], CriticAccountComponent);

var _a, _b, _c;
//# sourceMappingURL=critic-account.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/critic/critic-login/critic-login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/critic/critic-login/critic-login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <div *ngIf=\"errorFlag\"\n       class=\"alert alert-danger\">\n    {{errorMsg}}\n  </div>\n\n  <h1>Critic Login</h1>\n\n  <form (ngSubmit) = \"login()\" #f=\"ngForm\">\n\n    <div class=\"form-group\">\n      <input placeholder=\"username\"\n             name=\"username\"\n             type=\"text\"\n             class=\"form-control\"\n             ngModel\n             required\n             #username=\"ngModel\" />\n      <span class=\"help-block\" *ngIf=\"!username.valid && username.touched\">\n      Please enter username!\n      </span>\n    </div>\n\n    <div class=\"form-group\">\n      <input placeholder=\"password\"\n             name=\"password\"\n             type=\"password\"\n             class=\"form-control\"\n             ngModel\n             required\n             #password=\"ngModel\" />\n      <span class=\"help-block\" *ngIf=\"!password.valid && password.touched\">\n      Please enter password!\n      </span>\n    </div>\n\n    <button class=\"btn btn-primary btn-block\"\n            type=\"submit\"\n            [disabled]=\"!f.valid\" >Login</button>\n\n    <button class=\"btn btn-success btn-block\"\n            (click)=\"register()\">Register</button>\n\n    <button class=\"btn btn-success btn-block\"\n            (click)=\"home()\">Home</button>\n\n  </form>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/critic/critic-login/critic-login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_critic_service_client__ = __webpack_require__("../../../../../src/app/services/critic.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CriticLoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CriticLoginComponent = (function () {
    function CriticLoginComponent(criticService, sharedService, router) {
        this.criticService = criticService;
        this.sharedService = sharedService;
        this.router = router;
        this.errorMsg = 'Invalid username or password !';
    }
    CriticLoginComponent.prototype.ngOnInit = function () {
    };
    CriticLoginComponent.prototype.login = function () {
        var _this = this;
        // fetching data from loginForm
        this.username = this.loginForm.value.username;
        this.password = this.loginForm.value.password;
        this.criticService.login(this.username, this.password)
            .subscribe(function (critic) {
            _this.errorFlag = false;
            _this.sharedService.user = critic;
            _this.router.navigate(['critic', critic._id]);
        }, function (error) {
            _this.errorFlag = true;
        });
    };
    CriticLoginComponent.prototype.register = function () {
        this.router.navigate(['register']);
    };
    CriticLoginComponent.prototype.home = function () {
        this.router.navigate(['home']);
    };
    return CriticLoginComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */]) === "function" && _a || Object)
], CriticLoginComponent.prototype, "loginForm", void 0);
CriticLoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-critic-login',
        template: __webpack_require__("../../../../../src/app/components/critic/critic-login/critic-login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/critic/critic-login/critic-login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_critic_service_client__["a" /* CriticService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_critic_service_client__["a" /* CriticService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_shared_service_client__["a" /* SharedService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _d || Object])
], CriticLoginComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=critic-login.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/critic/critic-profile/critic-profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/critic/critic-profile/critic-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n\n    <!--heading on the nav bar-->\n    <p class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand thick\">\n        <b>{{username}}'s Profile</b>\n      </a>\n    </p>\n\n    <!--logout-->\n    <p class=\"navbar-text pull-right\">\n      <a (click)=\"logout()\"  class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-off\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n\n<div class=\"container\">\n  <img width=\"10%\" [src]=\"url | safe\">\n  <a (click)=\"flickr()\"  class=\"navbar-link\">\n    <b>Change Profile Picture!</b>\n  </a>\n\n  <ul class=\"list-group\">\n    <li class=\"list-group-item\">\n      <a (click)=\"account()\"  class=\"navbar-link\">\n        <b>Account</b>\n      </a>\n    </li>\n\n    <li class=\"list-group-item\">\n      <a (click)=\"review()\"  class=\"navbar-link\">\n        <b>Reviews</b>\n      </a>\n    </li>\n\n    <li class=\"list-group-item\">\n      <a (click)=\"search()\"  class=\"navbar-link\">\n        <b>Check out your favorite Comics!</b>\n      </a>\n    </li>\n  </ul>\n</div>\n\n<!-- Footer -->\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a (click)=\"profile()\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/critic/critic-profile/critic-profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_critic_service_client__ = __webpack_require__("../../../../../src/app/services/critic.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CriticProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CriticProfileComponent = (function () {
    function CriticProfileComponent(sharedService, criticService, activatedRoute, router) {
        this.sharedService = sharedService;
        this.criticService = criticService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.critic = {};
    }
    CriticProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.criticId = params['crid'];
        });
        this.criticService.findCriticById(this.criticId)
            .subscribe(function (critic) {
            _this.critic = critic;
            _this.username = _this.critic['username'];
            _this.password = _this.critic['password'];
            _this.email = _this.critic['email'];
            _this.firstName = _this.critic['firstName'];
            _this.lastName = _this.critic['lastName'];
            _this.url = _this.critic['url'];
        });
        // this.critic = this.sharedService.user;
        // this.criticId = this.critic['_id'];
        // this.username = this.critic['username'];
        // this.password = this.critic['password'];
        // this.email = this.critic['email'];
        // this.firstName = this.critic['firstName'];
        // this.lastName = this.critic['lastName'];
        // this.url = this.critic['url'];
    };
    CriticProfileComponent.prototype.logout = function () {
        var _this = this;
        this.criticService.logout()
            .subscribe(function (data) { return _this.router.navigate(['criticlogin']); });
    };
    CriticProfileComponent.prototype.profile = function () {
        this.router.navigate(['critic', this.criticId]);
    };
    CriticProfileComponent.prototype.account = function () {
        this.router.navigate(['critic', this.criticId, 'account']);
    };
    CriticProfileComponent.prototype.flickr = function () {
        this.router.navigate(['flickr', this.criticId]);
    };
    CriticProfileComponent.prototype.search = function () {
        this.router.navigate(['search']);
    };
    CriticProfileComponent.prototype.review = function () {
        this.router.navigate(['critic', this.criticId, 'review']);
    };
    return CriticProfileComponent;
}());
CriticProfileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-critic-profile',
        template: __webpack_require__("../../../../../src/app/components/critic/critic-profile/critic-profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/critic/critic-profile/critic-profile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_shared_service_client__["a" /* SharedService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_critic_service_client__["a" /* CriticService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_critic_service_client__["a" /* CriticService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _d || Object])
], CriticProfileComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=critic-profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/critic/review/review-create/review-create.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/critic/review/review-create/review-create.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n\n    <!--heading on the nav bar-->\n    <p class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand thick\">\n        <b>Create Review</b>\n      </a>\n    </p>\n\n    <!--cross-->\n    <p class=\"navbar-text pull-right\">\n      <a (click)=\"reviews()\"  class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-remove\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n\n<div class=\"container\">\n<form #f=\"ngForm\">\n\n  <div class=\"form-group\">\n    <label for=\"review\">Review URL</label>\n    <input type=\"text\"\n           class=\"form-control\"\n           id=\"review\"\n           name=\"review\"\n           ngModel\n           required\n           #review=\"ngModel\" >\n    <span class=\"help-block\" *ngIf=\"!review.valid && review.touched\">\n        Please enter review url!\n        </span>\n  </div>\n\n  <button class=\"btn btn-success btn-block\"\n          (click)=\"create()\">Create</button>\n\n</form>\n</div>\n\n<!-- Footer -->\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a (click)=\"profile()\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/critic/review/review-create/review-create.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_review_service_client__ = __webpack_require__("../../../../../src/app/services/review.service.client.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReviewCreateComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ReviewCreateComponent = (function () {
    function ReviewCreateComponent(reviewService, activatedRoute, router) {
        this.reviewService = reviewService;
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    ReviewCreateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.criticId = params['crid'];
        });
    };
    ReviewCreateComponent.prototype.create = function () {
        var _this = this;
        this.url = this.newWebsiteForm.value.review;
        this.reviewService.createReview(this.criticId, { url: this.url })
            .subscribe(function (review) {
            _this.router.navigate(['critic', _this.criticId, 'review']);
        });
    };
    ReviewCreateComponent.prototype.profile = function () {
        this.router.navigate(['critic', this.criticId]);
    };
    ReviewCreateComponent.prototype.reviews = function () {
        this.router.navigate(['critic', this.criticId, 'review']);
    };
    return ReviewCreateComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* NgForm */]) === "function" && _a || Object)
], ReviewCreateComponent.prototype, "newWebsiteForm", void 0);
ReviewCreateComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-review-create',
        template: __webpack_require__("../../../../../src/app/components/critic/review/review-create/review-create.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/critic/review/review-create/review-create.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_review_service_client__["a" /* ReviewService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_review_service_client__["a" /* ReviewService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _d || Object])
], ReviewCreateComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=review-create.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/critic/review/review-edit/review-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/critic/review/review-edit/review-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n\n    <!--heading on the nav bar-->\n    <p class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand thick\">\n        <b>Edit Review</b>\n      </a>\n    </p>\n\n    <!--cancel-->\n    <p class=\"navbar-text pull-right\">\n      <a (click)=\"reviews()\"  class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-remove\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n\n<div class=\"container\">\n  <form>\n\n    <div class=\"form-group\">\n      <label for=\"url\">Review URL</label>\n      <input [(ngModel)]=\"url\" name=\"url\" type=\"text\" class=\"form-control\" id=\"url\" >\n    </div>\n\n    <button class=\"btn btn-success btn-block\"\n            (click)=\"edit()\">Edit</button>\n\n    <button class=\"btn btn-danger btn-block\"\n            (click)=\"deleteReview()\">Delete</button>\n\n  </form>\n</div>\n\n<!-- Footer -->\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a (click)=\"profile()\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/critic/review/review-edit/review-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_review_service_client__ = __webpack_require__("../../../../../src/app/services/review.service.client.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReviewEditComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ReviewEditComponent = (function () {
    function ReviewEditComponent(reviewService, activatedRoute, router) {
        this.reviewService = reviewService;
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    ReviewEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.criticId = params['crid'];
            _this.reviewId = params['rid'];
        });
        this.reviewService.findReviewById(this.reviewId)
            .subscribe(function (review) {
            _this.url = review.url;
        });
    };
    ReviewEditComponent.prototype.edit = function () {
        var _this = this;
        this.reviewService.updateReview(this.reviewId, { url: this.url })
            .subscribe(function (review) {
            _this.router.navigate(['critic', _this.criticId, 'review']);
        });
    };
    ReviewEditComponent.prototype.deleteReview = function () {
        var _this = this;
        this.reviewService.deleteReview(this.reviewId)
            .subscribe(function () {
            _this.router.navigate(['critic', _this.criticId, 'review']);
        });
    };
    ReviewEditComponent.prototype.profile = function () {
        this.router.navigate(['critic', this.criticId]);
    };
    ReviewEditComponent.prototype.reviews = function () {
        this.router.navigate(['critic', this.criticId, 'review']);
    };
    return ReviewEditComponent;
}());
ReviewEditComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-review-edit',
        template: __webpack_require__("../../../../../src/app/components/critic/review/review-edit/review-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/critic/review/review-edit/review-edit.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_review_service_client__["a" /* ReviewService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_review_service_client__["a" /* ReviewService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _c || Object])
], ReviewEditComponent);

var _a, _b, _c;
//# sourceMappingURL=review-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/critic/review/review-list/review-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/critic/review/review-list/review-list.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n\n    <!--heading on the nav bar-->\n    <p class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand thick\">\n        <b>Reviews</b>\n      </a>\n    </p>\n\n    <!--create-->\n    <p class=\"navbar-text pull-right\">\n      <a (click)=\"create()\"  class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-plus\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n\n  <ul class=\"list-group\">\n        <li *ngFor=\"let review of reviews\" class=\"list-group-item li-border-true rounded\">\n          <a (click)=\"edit(review)\">\n            <img [src]=\"review.url | safe\">\n          </a>\n        </li>\n  </ul>\n\n<!-- Footer -->\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a (click)=\"profile()\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/critic/review/review-list/review-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_review_service_client__ = __webpack_require__("../../../../../src/app/services/review.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReviewListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ReviewListComponent = (function () {
    function ReviewListComponent(sharedService, reviewService, activatedRoute, router) {
        this.sharedService = sharedService;
        this.reviewService = reviewService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.reviews = [];
    }
    ReviewListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.criticId = params['crid'];
        });
        this.reviewService.findReviewsByCriticId(this.criticId)
            .subscribe(function (reviews) {
            _this.reviews = reviews;
        });
    };
    ReviewListComponent.prototype.create = function () {
        this.router.navigate(['critic', this.criticId, 'review', 'create']);
    };
    ReviewListComponent.prototype.edit = function (review) {
        this.router.navigate(['critic', this.criticId, 'review', review._id]);
    };
    ReviewListComponent.prototype.profile = function () {
        this.router.navigate(['critic', this.criticId]);
    };
    return ReviewListComponent;
}());
ReviewListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-review-list',
        template: __webpack_require__("../../../../../src/app/components/critic/review/review-list/review-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/critic/review/review-list/review-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_shared_service_client__["a" /* SharedService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_review_service_client__["a" /* ReviewService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_review_service_client__["a" /* ReviewService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _d || Object])
], ReviewListComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=review-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/flickr/flickr.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/flickr/flickr.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n<h1>Flickr</h1>\n\n<label>Search Image</label>\n<input [(ngModel)]=\"image\"\n       placeholder=\"enter image\"\n       class=\"form-control\" />\n<button (click)=\"searchImage(image)\"\n        class=\"btn btn-primary btn-block\">\n  Search\n</button>\n\n<ul class=\"list-group\">\n  <li class=\"list-group-item\" *ngFor=\"let photo of result.photos.photo\">\n    <a (click)=\"selectImage(photo)\">\n      <img src=\"https://farm{{photo.farm}}.staticflickr.com/{{photo.server}}/{{photo.id}}_{{photo.secret}}_s.jpg\">\n    </a>\n  </li>\n</ul>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/flickr/flickr.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_flickr_service_client__ = __webpack_require__("../../../../../src/app/services/flickr.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_critic_service_client__ = __webpack_require__("../../../../../src/app/services/critic.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_comedian_service_client__ = __webpack_require__("../../../../../src/app/services/comedian.service.client.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlickrComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FlickrComponent = (function () {
    function FlickrComponent(flickrService, criticService, comedianService, activatedRoute, router) {
        this.flickrService = flickrService;
        this.criticService = criticService;
        this.comedianService = comedianService;
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    FlickrComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.userId = params['id'];
        });
        this.criticService.findCriticById(this.userId)
            .subscribe(function (user) {
            if (user) {
                _this.user = user;
                _this.username = _this.user['username'];
                _this.password = _this.user['password'];
                _this.email = _this.user['email'];
                _this.firstName = _this.user['firstName'];
                _this.lastName = _this.user['lastName'];
                _this.url = _this.user['url'];
                _this.userType = 'critic';
            }
            else {
                _this.comedianService.findComedianById(_this.userId)
                    .subscribe(function (comedian) {
                    _this.user = comedian;
                    _this.username = _this.user['username'];
                    _this.password = _this.user['password'];
                    _this.email = _this.user['email'];
                    _this.firstName = _this.user['firstName'];
                    _this.lastName = _this.user['lastName'];
                    _this.url = _this.user['url'];
                    _this.userType = 'comedian';
                });
            }
        });
    };
    FlickrComponent.prototype.selectImage = function (photo) {
        var _this = this;
        var user = { 'username': this.username, 'password': this.password, 'firstName': this.firstName,
            'lastName': this.lastName, 'email': this.email,
            'url': 'https://farm' + photo.farm + '.staticflickr.com/' + photo.server + '/' + photo.id + '_'
                + photo.secret + '_s.jpg' };
        if (this.userType === 'critic') {
            this.criticService.updateCritic(this.userId, user)
                .subscribe(function (critic) {
                _this.router.navigate(['critic', _this.userId]);
            });
        }
        else {
            this.comedianService.updateComedian(this.userId, user)
                .subscribe(function (comedian) {
                _this.router.navigate(['comedian', _this.userId]);
            });
        }
    };
    FlickrComponent.prototype.searchImage = function (image) {
        var _this = this;
        this.flickrService.searchImage(image)
            .subscribe(function (result) {
            _this.result = result;
        });
    };
    return FlickrComponent;
}());
FlickrComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-flickr',
        template: __webpack_require__("../../../../../src/app/components/flickr/flickr.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/flickr/flickr.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_flickr_service_client__["a" /* FlickrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_flickr_service_client__["a" /* FlickrService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_critic_service_client__["a" /* CriticService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_critic_service_client__["a" /* CriticService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_comedian_service_client__["a" /* ComedianService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_comedian_service_client__["a" /* ComedianService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _e || Object])
], FlickrComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=flickr.component.js.map

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

module.exports = "\n<div class=\"container\">\n\n  <h1>\n    Angular 4 MEAN stack app\n  </h1>\n\n\n  <h3>\n    App works\n  </h3>\n\n\n  <h4>\n    <a href=\"test\">Test MongoDB</a>\n  </h4>\n\n  <h3>\n    <a [routerLink]=\"['home']\">Home</a>\n  </h3>\n\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
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
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/safe-pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SafePipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SafePipe = (function () {
    function SafePipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafePipe.prototype.transform = function (url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    return SafePipe;
}());
SafePipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Pipe */])({ name: 'safe' }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]) === "function" && _a || Object])
], SafePipe);

var _a;
//# sourceMappingURL=safe-pipe.js.map

/***/ }),

/***/ "../../../../../src/app/components/search/search.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/search/search.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <h1>Search</h1>\n\n  <label>Search Comedian</label>\n  <input [(ngModel)]=\"username\"\n         placeholder=\"enter username\"\n         class=\"form-control\" />\n  <button (click)=\"searchComedian(username)\"\n          class=\"btn btn-primary btn-block\">\n    Search\n  </button>\n\n  <ul class=\"list-group\">\n    <li class=\"list-group-item\">\n      <a (click)=\"selectComedian(result)\">\n        <img width=\"10%\" [src]=\"result.url | safe\">\n        <b>{{result.username}}</b>\n      </a>\n    </li>\n  </ul>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/search/search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_comedian_service_client__ = __webpack_require__("../../../../../src/app/services/comedian.service.client.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchComponent = (function () {
    function SearchComponent(comedianService, activatedRoute, router) {
        this.comedianService = comedianService;
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    SearchComponent.prototype.ngOnInit = function () {
    };
    SearchComponent.prototype.selectComedian = function (comedian) {
        this.router.navigate(['comedian', comedian._id, 'portfolio']);
    };
    SearchComponent.prototype.searchComedian = function (username) {
        var _this = this;
        this.comedianService.findComedianByUsername(username)
            .subscribe(function (result) {
            _this.result = result;
        });
    };
    return SearchComponent;
}());
SearchComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-search',
        template: __webpack_require__("../../../../../src/app/components/search/search.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/search/search.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_comedian_service_client__["a" /* ComedianService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_comedian_service_client__["a" /* ComedianService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _c || Object])
], SearchComponent);

var _a, _b, _c;
//# sourceMappingURL=search.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/test/test.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/test/test.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n\n  <h1>Test</h1>\n\n  <div *ngIf=\"alertMessage\"\n       class=\"alert alert-danger\">\n    \"Failed to create\"\n  </div>\n\n  <div *ngIf=\"successMessage\"\n       class=\"alert alert-success\">\n    \"Succesfully created/deleted\"\n  </div>\n\n  <table class=\"table\">\n    <thead>\n    <tr>\n      <th>Test Message</th>\n      <th>&nbsp;</th>\n    </tr>\n\n\n    <tr>\n      <td>\n        <input [(ngModel)]=\"message\"\n               placeholder=\"message\"\n               class=\"form-control\"/>\n      </td>\n\n\n      <td>\n        <button (click)=\"createMessage()\"\n                class=\"btn btn-primary pull-right\">\n          <span class=\"glyphicon glyphicon-plus\"></span>\n        </button>\n      </td>\n    </tr>\n    </thead>\n\n\n    <tbody>\n    <tr *ngFor=\"let message of messages\">\n      <td>\n        {{message.message}}\n      </td>\n      <td>\n        <button (click)=\"deleteMessage(message._id)\"\n                class=\"btn btn-danger pull-right\">\n          <span class=\"glyphicon glyphicon-remove\"></span>\n        </button>\n      </td>\n    </tr>\n    </tbody>\n  </table>\n\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/components/test/test.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_test_service_client__ = __webpack_require__("../../../../../src/app/services/test.service.client.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TestComponent = (function () {
    function TestComponent(_testService) {
        this._testService = _testService;
        this.alertMessage = false;
        this.successMessage = false;
        this.messages = [];
    }
    TestComponent.prototype.ngOnInit = function () {
        this.findAllMessages();
    };
    TestComponent.prototype.findAllMessages = function () {
        var _this = this;
        return this._testService.findAllMessages()
            .subscribe(function (data) {
            _this.messages = data;
        });
    };
    TestComponent.prototype.createMessage = function () {
        var _this = this;
        return this._testService.createMessage(this.message)
            .subscribe(function (data) {
            _this.successMessage = true;
            _this.ngOnInit();
            _this.message = null;
        });
    };
    TestComponent.prototype.deleteMessage = function (messageId) {
        var _this = this;
        return this._testService.deleteMessage(messageId)
            .subscribe(function (data) {
            _this.successMessage = true;
            _this.ngOnInit();
        });
    };
    return TestComponent;
}());
TestComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-test',
        template: __webpack_require__("../../../../../src/app/components/test/test.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/test/test.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_test_service_client__["a" /* TestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_test_service_client__["a" /* TestService */]) === "function" && _a || Object])
], TestComponent);

var _a;
//# sourceMappingURL=test.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/bit.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BitService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// injecting service into module
var BitService = (function () {
    function BitService(_http) {
        this._http = _http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
    }
    BitService.prototype.createBit = function (comedianId, bit) {
        return this._http.post(this.baseUrl + '/api/comedian/' + comedianId + '/bit', bit)
            .map(function (res) {
            return res.json();
        });
    };
    BitService.prototype.findBitsByComedianId = function (comedianId) {
        return this._http.get(this.baseUrl + '/api/comedian/' + comedianId + '/bit')
            .map(function (res) {
            return res.json();
        });
    };
    BitService.prototype.findBitById = function (bitId) {
        return this._http.get(this.baseUrl + '/api/bit/' + bitId)
            .map(function (res) {
            return res.json();
        });
    };
    BitService.prototype.updateBit = function (bitId, bit) {
        return this._http.put(this.baseUrl + '/api/bit/' + bitId, bit)
            .map(function (res) {
            return res.json();
        });
    };
    BitService.prototype.deleteBit = function (bitId) {
        return this._http.delete(this.baseUrl + '/api/bit/' + bitId)
            .map(function (res) {
            return;
        });
    };
    return BitService;
}());
BitService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], BitService);

var _a;
//# sourceMappingURL=bit.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/comedian.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComedianService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// injecting service into module
var ComedianService = (function () {
    function ComedianService(_http, sharedService, router) {
        this._http = _http;
        this.sharedService = sharedService;
        this.router = router;
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]();
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
    }
    ComedianService.prototype.register = function (comedian) {
        this.options.withCredentials = true;
        return this._http.post(this.baseUrl + '/api/comedian/register', comedian, this.options)
            .map(function (res) {
            return res.json();
        });
    };
    ComedianService.prototype.login = function (username, password) {
        this.options.withCredentials = true;
        var comedian = {
            username: username,
            password: password
        };
        return this._http.post(this.baseUrl + '/api/comedian/login', comedian, this.options)
            .map(function (res) {
            return res.json();
        });
    };
    ComedianService.prototype.loggedIn = function () {
        var _this = this;
        this.options.withCredentials = true;
        return this._http.post(this.baseUrl + '/api/comedian/loggedin', '', this.options)
            .map(function (res) {
            var comedian = res.json();
            if (comedian !== 0) {
                _this.sharedService.user = comedian;
                return true;
            }
            else {
                _this.router.navigate(['login']);
                return false;
            }
        });
    };
    ComedianService.prototype.logout = function () {
        this.options.withCredentials = true;
        return this._http.post(this.baseUrl + '/api/comedian/logout', '', this.options)
            .map(function (res) {
            var data = res;
        });
    };
    ComedianService.prototype.createComedian = function (comedian) {
        return this._http.post(this.baseUrl + '/api/comedian', comedian)
            .map(function (res) {
            return res.json();
        });
    };
    ComedianService.prototype.findComedianById = function (comedianId) {
        return this._http.get(this.baseUrl + '/api/comedian/' + comedianId)
            .map(function (res) {
            return res.json();
        });
    };
    ComedianService.prototype.findComedianByCredentials = function (username, password) {
        return this._http.get(this.baseUrl + '/api/comedian/?username=' + username + '&password=' + password)
            .map(function (res) {
            return res.json();
        });
    };
    ComedianService.prototype.findComedianByUsername = function (username) {
        return this._http.get(this.baseUrl + '/api/comedian/?username=' + username)
            .map(function (res) {
            return res.json();
        });
    };
    ComedianService.prototype.updateComedian = function (comedianId, comedian) {
        return this._http.put(this.baseUrl + '/api/comedian/' + comedianId, comedian)
            .map(function (res) {
            return res.json();
        });
    };
    ComedianService.prototype.deleteComedian = function (comedianId) {
        this._http.delete(this.baseUrl + '/api/comedian/' + comedianId);
    };
    return ComedianService;
}());
ComedianService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared_service_client__["a" /* SharedService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]) === "function" && _c || Object])
], ComedianService);

var _a, _b, _c;
//# sourceMappingURL=comedian.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/critic.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CriticService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// injecting service into module
var CriticService = (function () {
    function CriticService(_http, sharedService, router) {
        this._http = _http;
        this.sharedService = sharedService;
        this.router = router;
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]();
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
    }
    CriticService.prototype.register = function (critic) {
        this.options.withCredentials = true;
        return this._http.post(this.baseUrl + '/api/critic/register', critic, this.options)
            .map(function (res) {
            return res.json();
        });
    };
    CriticService.prototype.login = function (username, password) {
        this.options.withCredentials = true;
        var critic = {
            username: username,
            password: password
        };
        return this._http.post(this.baseUrl + '/api/critic/login', critic, this.options)
            .map(function (res) {
            return res.json();
        });
    };
    CriticService.prototype.loggedIn = function () {
        var _this = this;
        this.options.withCredentials = true;
        return this._http.post(this.baseUrl + '/api/critic/loggedin', '', this.options)
            .map(function (res) {
            var critic = res.json();
            if (critic !== 0) {
                _this.sharedService.user = critic;
                return true;
            }
            else {
                _this.router.navigate(['login']);
                return false;
            }
        });
    };
    CriticService.prototype.logout = function () {
        this.options.withCredentials = true;
        return this._http.post(this.baseUrl + '/api/critic/logout', '', this.options)
            .map(function (res) {
            var data = res;
        });
    };
    CriticService.prototype.createCritic = function (critic) {
        return this._http.post(this.baseUrl + '/api/critic', critic)
            .map(function (res) {
            return res.json();
        });
    };
    CriticService.prototype.findCriticById = function (criticId) {
        return this._http.get(this.baseUrl + '/api/critic/' + criticId)
            .map(function (res) {
            return res.json();
        });
    };
    CriticService.prototype.findCriticByCredentials = function (username, password) {
        return this._http.get(this.baseUrl + '/api/critic/?username=' + username + '&password=' + password)
            .map(function (res) {
            return res.json();
        });
    };
    CriticService.prototype.findCriticByUsername = function (username) {
        return this._http.get(this.baseUrl + '/api/critic/?username=' + username)
            .map(function (res) {
            return res.json();
        });
    };
    CriticService.prototype.updateCritic = function (criticId, critic) {
        return this._http.put(this.baseUrl + '/api/critic/' + criticId, critic)
            .map(function (res) {
            return res.json();
        });
    };
    CriticService.prototype.deleteCritic = function (criticId) {
        this._http.delete(this.baseUrl + '/api/critic/' + criticId);
    };
    return CriticService;
}());
CriticService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared_service_client__["a" /* SharedService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]) === "function" && _c || Object])
], CriticService);

var _a, _b, _c;
//# sourceMappingURL=critic.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/flickr.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlickrService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FlickrService = (function () {
    function FlickrService(http) {
        this.http = http;
    }
    FlickrService.prototype.searchImage = function (image) {
        var url = 'https://api.flickr.com/' +
            'services/rest/?method=flickr.photos.search&api_key=e223db0dfbe2560648b4d6a33a6b91f9&text='
            + image + '&format=json&nojsoncallback=1';
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    return FlickrService;
}());
FlickrService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], FlickrService);

var _a;
//# sourceMappingURL=flickr.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/review.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReviewService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// injecting service into module
var ReviewService = (function () {
    function ReviewService(_http) {
        this._http = _http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
    }
    ReviewService.prototype.createReview = function (criticId, review) {
        return this._http.post(this.baseUrl + '/api/critic/' + criticId + '/review', review)
            .map(function (res) {
            return res.json();
        });
    };
    ReviewService.prototype.findReviewsByCriticId = function (criticId) {
        return this._http.get(this.baseUrl + '/api/critic/' + criticId + '/review')
            .map(function (res) {
            return res.json();
        });
    };
    ReviewService.prototype.findReviewById = function (reviewId) {
        return this._http.get(this.baseUrl + '/api/review/' + reviewId)
            .map(function (res) {
            return res.json();
        });
    };
    ReviewService.prototype.updateReview = function (reviewId, review) {
        return this._http.put(this.baseUrl + '/api/review/' + reviewId, review)
            .map(function (res) {
            return res.json();
        });
    };
    ReviewService.prototype.deleteReview = function (reviewId) {
        return this._http.delete(this.baseUrl + '/api/review/' + reviewId)
            .map(function (res) {
            return;
        });
    };
    return ReviewService;
}());
ReviewService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], ReviewService);

var _a;
//# sourceMappingURL=review.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/shared.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SharedService = (function () {
    function SharedService() {
        this.user = '';
    }
    return SharedService;
}());
SharedService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])()
], SharedService);

//# sourceMappingURL=shared.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/test.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TestService = (function () {
    function TestService(_http) {
        this._http = _http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
    }
    TestService.prototype.findAllMessages = function () {
        console.log(this.baseUrl);
        return this._http.get(this.baseUrl + '/api/test')
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    TestService.prototype.createMessage = function (message) {
        var obj = {
            message: message
        };
        return this._http.post(this.baseUrl + '/api/test', obj)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    TestService.prototype.deleteMessage = function (messageId) {
        return this._http.delete(this.baseUrl + '/api/test/' + messageId)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    return TestService;
}());
TestService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], TestService);

var _a;
//# sourceMappingURL=test.service.client.js.map

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
    production: false,
    baseUrl: 'http://localhost:3100'
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
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