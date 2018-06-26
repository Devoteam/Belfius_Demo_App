(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _layout_app_content_app_content_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout/app-content/app-content.component */ "./src/app/layout/app-content/app-content.component.ts");
/* harmony import */ var _pages_car_overview_car_overview_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/car-overview/car-overview.component */ "./src/app/pages/car-overview/car-overview.component.ts");
/* harmony import */ var _pages_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/homepage/homepage.component */ "./src/app/pages/homepage/homepage.component.ts");
/* harmony import */ var _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/not-found/not-found.component */ "./src/app/pages/not-found/not-found.component.ts");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var _pages_company_overview_company_overview_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/company-overview/company-overview.component */ "./src/app/pages/company-overview/company-overview.component.ts");
/* harmony import */ var _pages_car_detail_car_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/car-detail/car-detail.component */ "./src/app/pages/car-detail/car-detail.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'homepage',
    },
    {
        path: '',
        component: _layout_app_content_app_content_component__WEBPACK_IMPORTED_MODULE_2__["AppContentComponent"],
        children: [
            {
                component: _pages_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_4__["HomepageComponent"],
                path: 'homepage'
            },
            {
                component: _pages_company_overview_company_overview_component__WEBPACK_IMPORTED_MODULE_7__["CompanyOverviewComponent"],
                path: 'companies/overview'
            },
            {
                component: _pages_car_overview_car_overview_component__WEBPACK_IMPORTED_MODULE_3__["CarOverviewComponent"],
                path: "cars/overview/:" + _app_constants__WEBPACK_IMPORTED_MODULE_6__["RequestParams"].COMPANY_ID
            },
            {
                component: _pages_car_detail_car_detail_component__WEBPACK_IMPORTED_MODULE_8__["CarDetailComponent"],
                path: "cars/details/:" + _app_constants__WEBPACK_IMPORTED_MODULE_6__["RequestParams"].CAR_ID
            }
        ]
    },
    {
        path: '**',
        component: _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__["NotFoundComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet>\r\n  <div [hidden]=\"!showLoader\" class=\"loading row align-items-center justify-content-center\">\r\n    <mat-spinner></mat-spinner>\r\n  </div>\r\n</router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*Extra Small*/\n/*Small*/\n/*Medium*/\n/* Extra Large*/\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.utils */ "./src/app/app.utils.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        _app_utils__WEBPACK_IMPORTED_MODULE_1__["loadingstatus"].subscribe(function (loadingStatus) {
            _this.showLoader = loadingStatus;
        });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.constants.ts":
/*!**********************************!*\
  !*** ./src/app/app.constants.ts ***!
  \**********************************/
/*! exports provided: GAT_ALL_CARS_FOR_COMPANY, GET_CAR_DETAILS_BY_ID, GET_ALL_COMPANIES, RequestParams */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GAT_ALL_CARS_FOR_COMPANY", function() { return GAT_ALL_CARS_FOR_COMPANY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_CAR_DETAILS_BY_ID", function() { return GET_CAR_DETAILS_BY_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_ALL_COMPANIES", function() { return GET_ALL_COMPANIES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestParams", function() { return RequestParams; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");

// Base API URL
var BASE_API_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].BASE_API_URL;
// Cars
var CAR_PREFIX = '/cars';
var GAT_ALL_CARS_FOR_COMPANY = "" + BASE_API_URL + CAR_PREFIX + "/company/";
var GET_CAR_DETAILS_BY_ID = "" + BASE_API_URL + CAR_PREFIX + "/details/";
// Companies
var COMPANY_PREFIX = '/companies';
var GET_ALL_COMPANIES = "" + BASE_API_URL + COMPANY_PREFIX + "/all";
var RequestParams = {
    COMPANY_ID: 'companyId',
    CAR_ID: 'carId',
};


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _layout_app_content_app_content_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout/app-content/app-content.component */ "./src/app/layout/app-content/app-content.component.ts");
/* harmony import */ var _layout_app_footer_app_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout/app-footer/app-footer.component */ "./src/app/layout/app-footer/app-footer.component.ts");
/* harmony import */ var _layout_app_nav_app_nav_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layout/app-nav/app-nav.component */ "./src/app/layout/app-nav/app-nav.component.ts");
/* harmony import */ var _pages_car_overview_car_overview_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/car-overview/car-overview.component */ "./src/app/pages/car-overview/car-overview.component.ts");
/* harmony import */ var _pages_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/homepage/homepage.component */ "./src/app/pages/homepage/homepage.component.ts");
/* harmony import */ var _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/not-found/not-found.component */ "./src/app/pages/not-found/not-found.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./material.module */ "./src/app/material.module.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _pages_car_detail_car_detail_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/car-detail/car-detail.component */ "./src/app/pages/car-detail/car-detail.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _pages_company_overview_company_overview_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/company-overview/company-overview.component */ "./src/app/pages/company-overview/company-overview.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var layout = [
    _app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"],
    _layout_app_nav_app_nav_component__WEBPACK_IMPORTED_MODULE_4__["AppNavComponent"],
    _layout_app_content_app_content_component__WEBPACK_IMPORTED_MODULE_2__["AppContentComponent"],
    _layout_app_footer_app_footer_component__WEBPACK_IMPORTED_MODULE_3__["AppFooterComponent"],
];
var components = [
    _pages_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_6__["HomepageComponent"],
    _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_7__["NotFoundComponent"],
    _pages_car_overview_car_overview_component__WEBPACK_IMPORTED_MODULE_5__["CarOverviewComponent"],
    _pages_car_detail_car_detail_component__WEBPACK_IMPORTED_MODULE_14__["CarDetailComponent"],
    _pages_company_overview_company_overview_component__WEBPACK_IMPORTED_MODULE_16__["CompanyOverviewComponent"]
];
var modules = [
    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["BrowserModule"],
    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
    _material_module__WEBPACK_IMPORTED_MODULE_10__["MaterialModule"],
    _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_13__["FlexLayoutModule"],
    _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ReactiveFormsModule"]
];
var routing = [
    _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"],
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]],
            declarations: [
                layout,
                components
            ],
            imports: [
                modules,
                routing
            ],
            providers: []
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.utils.ts":
/*!******************************!*\
  !*** ./src/app/app.utils.ts ***!
  \******************************/
/*! exports provided: handleApiError, resizeWindow, loadingstatus, setLoadingStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleApiError", function() { return handleApiError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resizeWindow", function() { return resizeWindow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadingstatus", function() { return loadingstatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLoadingStatus", function() { return setLoadingStatus; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");

function handleApiError(operation, result) {
    if (operation === void 0) { operation = 'operation'; }
    return function (error) {
        console.error(operation + " failed: " + error.message);
        console.error(error); // log to console instead
        // Let the app keep running by returning an empty result.
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(result);
    };
}
function resizeWindow() {
    window.dispatchEvent(new Event('resize'));
}
var loadingstatus = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](false);
function setLoadingStatus(status) {
    loadingstatus.next(status);
}


/***/ }),

/***/ "./src/app/layout/app-content/app-content.component.html":
/*!***************************************************************!*\
  !*** ./src/app/layout/app-content/app-content.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body class=\"hold-transition sidebar-mini\">\r\n  <div class=\"wrapper\">\r\n    <app-nav></app-nav>\r\n    <div class=\"content-wrapper bg-gray-light\">\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n    <app-footer></app-footer>\r\n  </div>\r\n</body>\r\n"

/***/ }),

/***/ "./src/app/layout/app-content/app-content.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/layout/app-content/app-content.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*Extra Small*/\n/*Small*/\n/*Medium*/\n/* Extra Large*/\n"

/***/ }),

/***/ "./src/app/layout/app-content/app-content.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/layout/app-content/app-content.component.ts ***!
  \*************************************************************/
/*! exports provided: AppContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppContentComponent", function() { return AppContentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppContentComponent = /** @class */ (function () {
    function AppContentComponent() {
    }
    AppContentComponent.prototype.ngOnInit = function () {
    };
    AppContentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-content',
            styles: [__webpack_require__(/*! ./app-content.component.scss */ "./src/app/layout/app-content/app-content.component.scss")],
            template: __webpack_require__(/*! ./app-content.component.html */ "./src/app/layout/app-content/app-content.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], AppContentComponent);
    return AppContentComponent;
}());



/***/ }),

/***/ "./src/app/layout/app-footer/app-footer.component.html":
/*!*************************************************************!*\
  !*** ./src/app/layout/app-footer/app-footer.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"main-footer\">\r\n  <strong>Copyright &copy; 2018.</strong>\r\n  All rights reserved.\r\n  <div class=\"float-right d-none d-sm-block\">\r\n    <b>Version</b> 1.0\r\n  </div>\r\n</footer>\r\n"

/***/ }),

/***/ "./src/app/layout/app-footer/app-footer.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/layout/app-footer/app-footer.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*Extra Small*/\n/*Small*/\n/*Medium*/\n/* Extra Large*/\n"

/***/ }),

/***/ "./src/app/layout/app-footer/app-footer.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/layout/app-footer/app-footer.component.ts ***!
  \***********************************************************/
/*! exports provided: AppFooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppFooterComponent", function() { return AppFooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppFooterComponent = /** @class */ (function () {
    function AppFooterComponent() {
    }
    AppFooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./app-footer.component.html */ "./src/app/layout/app-footer/app-footer.component.html"),
            styles: [__webpack_require__(/*! ./app-footer.component.scss */ "./src/app/layout/app-footer/app-footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AppFooterComponent);
    return AppFooterComponent;
}());



/***/ }),

/***/ "./src/app/layout/app-nav/app-nav.component.html":
/*!*******************************************************!*\
  !*** ./src/app/layout/app-nav/app-nav.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Top - Navbar -->\r\n<nav class=\"main-header navbar navbar-expand bg-gray navbar-light border-bottom\">\r\n  <!-- Left navbar -->\r\n  <ul class=\"navbar-nav\">\r\n    <li class=\"nav-item mouse-pointer\">\r\n      <a class=\"nav-link\" data-widget=\"pushmenu\">\r\n        <i class=\"fa fa-bars\"></i>\r\n      </a>\r\n    </li>\r\n    <li class=\"nav-item\">\r\n      <button mat-button (click)=\"goBack()\" class=\"nav-link\">\r\n        <i class=\"fa fa-angle-left\"></i>\r\n        Back\r\n      </button>\r\n    </li>\r\n  </ul>\r\n</nav>\r\n\r\n<!-- Left - Navbar -->\r\n<aside class=\"main-sidebar sidebar-dark-primary elevation-4\">\r\n  <!-- Logo -->\r\n  <a routerLink=\"/homepage\" class=\"brand-link\">\r\n    <img src=\"assets/images/belfius.png\" alt=\"Angular Logo\" class=\"brand-image elevation-3\">\r\n    <span class=\"brand-text font-weight-light\">Belfius</span>\r\n  </a>\r\n\r\n  <!-- Sidebar -->\r\n  <div class=\"sidebar\">\r\n    <!-- Sidebar Menu -->\r\n    <nav class=\"mt-2\">\r\n      <ul class=\"nav nav-pills nav-sidebar flex-column\" data-widget=\"treeview\" role=\"menu\" data-accordion=\"false\">\r\n        <li class=\"nav-header\">NAVIGATION</li>\r\n        <li class=\"nav-item\">\r\n          <a routerLink=\"/companies/overview\" routerLinkActive=\"active\" class=\"nav-link\">\r\n            <i class=\"nav-icon fa fa-home\"></i>\r\n            <p>Companies</p>\r\n          </a>\r\n        </li>\r\n      </ul>\r\n    </nav>\r\n  </div>\r\n</aside>\r\n"

/***/ }),

/***/ "./src/app/layout/app-nav/app-nav.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/layout/app-nav/app-nav.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*Extra Small*/\n/*Small*/\n/*Medium*/\n/* Extra Large*/\n"

/***/ }),

/***/ "./src/app/layout/app-nav/app-nav.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/layout/app-nav/app-nav.component.ts ***!
  \*****************************************************/
/*! exports provided: AppNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppNavComponent", function() { return AppNavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppNavComponent = /** @class */ (function () {
    function AppNavComponent(location) {
        this.location = location;
    }
    AppNavComponent.prototype.ngOnInit = function () {
    };
    AppNavComponent.prototype.goBack = function () {
        this.location.back();
    };
    AppNavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./app-nav.component.html */ "./src/app/layout/app-nav/app-nav.component.html"),
            styles: [__webpack_require__(/*! ./app-nav.component.scss */ "./src/app/layout/app-nav/app-nav.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]])
    ], AppNavComponent);
    return AppNavComponent;
}());



/***/ }),

/***/ "./src/app/material.module.ts":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginatorModule"]
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginatorModule"]
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/pages/car-detail/car-detail.component.html":
/*!************************************************************!*\
  !*** ./src/app/pages/car-detail/car-detail.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Header -->\r\n<div class=\"content-header\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row mb-2\">\r\n      <div class=\"col-sm-6\">\r\n        <h1 class=\"text-dark\">Car Details</h1>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- Content -->\r\n<div class=\"content\">\r\n  <div class=\"container-fluid\">\r\n    <mat-card class=\"mb-4\">\r\n      <mat-card-title>\r\n        <div class=\"row justify-content-between\">\r\n          <div>{{car?.model}}</div>\r\n          <div>\r\n            <small class=\"text-muted\">{{car?.brand}}</small>\r\n          </div>\r\n        </div>\r\n      </mat-card-title>\r\n      <hr>\r\n      <img mat-card-image src=\"{{carImagePath}}\" alt=\"Car Picture\">\r\n    </mat-card>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/car-detail/car-detail.component.scss":
/*!************************************************************!*\
  !*** ./src/app/pages/car-detail/car-detail.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*Extra Small*/\n/*Small*/\n/*Medium*/\n/* Large*/\n/* Extra Large*/\n"

/***/ }),

/***/ "./src/app/pages/car-detail/car-detail.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/car-detail/car-detail.component.ts ***!
  \**********************************************************/
/*! exports provided: CarDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarDetailComponent", function() { return CarDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_car_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/car.service */ "./src/app/services/car.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app.utils */ "./src/app/app.utils.ts");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../app.constants */ "./src/app/app.constants.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CarDetailComponent = /** @class */ (function () {
    function CarDetailComponent(carService, route) {
        this.carService = carService;
        this.route = route;
        Object(_app_utils__WEBPACK_IMPORTED_MODULE_3__["resizeWindow"])();
    }
    CarDetailComponent.prototype.ngOnInit = function () {
        this.getCarDetails();
    };
    CarDetailComponent.prototype.getCarDetails = function () {
        var _this = this;
        var carId = +this.route.snapshot.paramMap.get(_app_constants__WEBPACK_IMPORTED_MODULE_4__["RequestParams"].CAR_ID);
        this.carService.getCarDetailsById(carId)
            .subscribe(function (car) {
            _this.car = car;
            _this.createCarImagePath(car.brand, car.model);
        });
    };
    CarDetailComponent.prototype.createCarImagePath = function (carBrandName, carModelName) {
        carModelName = carModelName.replace(/\s/g, '_');
        this.carImagePath = "assets/images/cars/" + carBrandName + "/" + carModelName + ".jpg";
    };
    CarDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-car-detail',
            template: __webpack_require__(/*! ./car-detail.component.html */ "./src/app/pages/car-detail/car-detail.component.html"),
            styles: [__webpack_require__(/*! ./car-detail.component.scss */ "./src/app/pages/car-detail/car-detail.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_car_service__WEBPACK_IMPORTED_MODULE_1__["CarService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], CarDetailComponent);
    return CarDetailComponent;
}());



/***/ }),

/***/ "./src/app/pages/car-overview/car-overview.component.html":
/*!****************************************************************!*\
  !*** ./src/app/pages/car-overview/car-overview.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Header -->\r\n<div class=\"content-header\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row mb-2\">\r\n      <div class=\"col-sm-6\">\r\n        <h1 class=\"text-dark\">Cars</h1>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- Content -->\r\n<div class=\"content\">\r\n  <div class=\"container-fluid\">\r\n    <mat-grid-list [cols]=\"colAmount\" rowHeight=\"100px\">\r\n      <mat-grid-tile *ngFor=\"let car of cars\">\r\n        <mat-card class=\"mouse-pointer light-gray-hover col-lg-11\" routerLink=\"/cars/details/{{car.id}}\">\r\n          <mat-card-title>{{car.model}}</mat-card-title>\r\n        </mat-card>\r\n      </mat-grid-tile>\r\n    </mat-grid-list>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/car-overview/car-overview.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/pages/car-overview/car-overview.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*Extra Small*/\n/*Small*/\n/*Medium*/\n/* Large*/\n/* Extra Large*/\n"

/***/ }),

/***/ "./src/app/pages/car-overview/car-overview.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/car-overview/car-overview.component.ts ***!
  \**************************************************************/
/*! exports provided: CarOverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarOverviewComponent", function() { return CarOverviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_car_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/car.service */ "./src/app/services/car.service.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _app_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app.utils */ "./src/app/app.utils.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../app.constants */ "./src/app/app.constants.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CarOverviewComponent = /** @class */ (function () {
    function CarOverviewComponent(carService, route, media) {
        var _this = this;
        this.carService = carService;
        this.route = route;
        this.media = media;
        this.colAmount = 1;
        Object(_app_utils__WEBPACK_IMPORTED_MODULE_3__["resizeWindow"])();
        media.asObservable()
            .subscribe(function (change) {
            if (change.mqAlias === 'lg') {
                _this.colAmount = 2;
            }
            else {
                _this.colAmount = 1;
            }
        });
    }
    CarOverviewComponent.prototype.ngOnInit = function () {
        this.getCarsForComapy();
    };
    CarOverviewComponent.prototype.getCarsForComapy = function () {
        var _this = this;
        var companyId = +this.route.snapshot.paramMap.get(_app_constants__WEBPACK_IMPORTED_MODULE_5__["RequestParams"].COMPANY_ID);
        this.carService.getAllCarsForcompany(companyId)
            .subscribe(function (cars) { return _this.cars = cars; });
    };
    CarOverviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-car-overview',
            template: __webpack_require__(/*! ./car-overview.component.html */ "./src/app/pages/car-overview/car-overview.component.html"),
            styles: [__webpack_require__(/*! ./car-overview.component.scss */ "./src/app/pages/car-overview/car-overview.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_car_service__WEBPACK_IMPORTED_MODULE_1__["CarService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["ObservableMedia"]])
    ], CarOverviewComponent);
    return CarOverviewComponent;
}());



/***/ }),

/***/ "./src/app/pages/company-overview/company-overview.component.html":
/*!************************************************************************!*\
  !*** ./src/app/pages/company-overview/company-overview.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Header -->\r\n<div class=\"content-header\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row mb-2\">\r\n      <div class=\"col-sm-6\">\r\n        <h1 class=\"text-dark\">Companies</h1>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- Content -->\r\n<div class=\"content\">\r\n  <div class=\"container-fluid\">\r\n    <mat-grid-list [cols]=\"colAmount\" rowHeight=\"100px\">\r\n      <mat-grid-tile *ngFor=\"let company of companies\">\r\n        <mat-card class=\"mouse-pointer light-gray-hover col-lg-11\" routerLink=\"/cars/overview/{{company.id}}\">\r\n          <mat-card-title>{{company.name}}</mat-card-title>\r\n        </mat-card>\r\n      </mat-grid-tile>\r\n    </mat-grid-list>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/company-overview/company-overview.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/pages/company-overview/company-overview.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*Extra Small*/\n/*Small*/\n/*Medium*/\n/* Large*/\n/* Extra Large*/\n"

/***/ }),

/***/ "./src/app/pages/company-overview/company-overview.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/company-overview/company-overview.component.ts ***!
  \**********************************************************************/
/*! exports provided: CompanyOverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyOverviewComponent", function() { return CompanyOverviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _app_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app.utils */ "./src/app/app.utils.ts");
/* harmony import */ var _services_company_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/company.service */ "./src/app/services/company.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CompanyOverviewComponent = /** @class */ (function () {
    function CompanyOverviewComponent(companyService, media) {
        var _this = this;
        this.companyService = companyService;
        this.colAmount = 1;
        Object(_app_utils__WEBPACK_IMPORTED_MODULE_2__["resizeWindow"])();
        media.asObservable()
            .subscribe(function (change) {
            if (change.mqAlias === 'lg') {
                _this.colAmount = 2;
            }
            else {
                _this.colAmount = 1;
            }
        });
    }
    CompanyOverviewComponent.prototype.ngOnInit = function () {
        this.getAllCompanies();
    };
    CompanyOverviewComponent.prototype.getAllCompanies = function () {
        var _this = this;
        this.companyService.getAllCompanies()
            .subscribe(function (companies) { return _this.companies = companies; });
    };
    CompanyOverviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-company-overview',
            template: __webpack_require__(/*! ./company-overview.component.html */ "./src/app/pages/company-overview/company-overview.component.html"),
            styles: [__webpack_require__(/*! ./company-overview.component.scss */ "./src/app/pages/company-overview/company-overview.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_company_service__WEBPACK_IMPORTED_MODULE_3__["CompanyService"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__["ObservableMedia"]])
    ], CompanyOverviewComponent);
    return CompanyOverviewComponent;
}());



/***/ }),

/***/ "./src/app/pages/homepage/homepage.component.html":
/*!********************************************************!*\
  !*** ./src/app/pages/homepage/homepage.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-header\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row mb-2\">\r\n      <div class=\"col-sm-6\">\r\n        <h1 class=\"m-0 text-dark\"></h1>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"content\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row justify-content-center mb-5\">\r\n      <h1>Welcome to the Belfius demo application!</h1>\r\n    </div>\r\n    <div class=\"row justify-content-center\">\r\n      <img src=\"assets/images/belfius.png\" alt=\"Angular Logo\">\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/homepage/homepage.component.scss":
/*!********************************************************!*\
  !*** ./src/app/pages/homepage/homepage.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*Extra Small*/\n/*Small*/\n/*Medium*/\n/* Extra Large*/\n"

/***/ }),

/***/ "./src/app/pages/homepage/homepage.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/homepage/homepage.component.ts ***!
  \******************************************************/
/*! exports provided: HomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageComponent", function() { return HomepageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../app.utils */ "./src/app/app.utils.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomepageComponent = /** @class */ (function () {
    function HomepageComponent() {
        Object(_app_utils__WEBPACK_IMPORTED_MODULE_1__["resizeWindow"])();
    }
    HomepageComponent.prototype.ngOnInit = function () {
    };
    HomepageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-homepage',
            template: __webpack_require__(/*! ./homepage.component.html */ "./src/app/pages/homepage/homepage.component.html"),
            styles: [__webpack_require__(/*! ./homepage.component.scss */ "./src/app/pages/homepage/homepage.component.scss")]
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], HomepageComponent);
    return HomepageComponent;
}());



/***/ }),

/***/ "./src/app/pages/not-found/not-found.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/not-found/not-found.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Content-->\r\n<section class=\"content\">\r\n    <!--404-->\r\n    <div class=\"error-page\">\r\n        <h2 class=\"headline text-yellow\">404</h2>\r\n        <div class=\"error-content\">\r\n            <h3><i class=\"fa fa-warning text-yellow\"></i> Oops! Page not found.</h3>\r\n            <p>\r\n                Page not found, go back to <a [routerLink]=\"['/homepage']\">homepage</a>.\r\n            </p>\r\n        </div>\r\n    </div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/pages/not-found/not-found.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/pages/not-found/not-found.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*Extra Small*/\n/*Small*/\n/*Medium*/\n/* Extra Large*/\n"

/***/ }),

/***/ "./src/app/pages/not-found/not-found.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/not-found/not-found.component.ts ***!
  \********************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/pages/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.scss */ "./src/app/pages/not-found/not-found.component.scss")]
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/services/car.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/car.service.ts ***!
  \*****************************************/
/*! exports provided: CarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarService", function() { return CarService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _app_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app.utils */ "./src/app/app.utils.ts");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app.constants */ "./src/app/app.constants.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CarService = /** @class */ (function () {
    function CarService(http) {
        this.http = http;
    }
    CarService.prototype.getAllCarsForcompany = function (companyId) {
        return this.http.get("" + _app_constants__WEBPACK_IMPORTED_MODULE_4__["GAT_ALL_CARS_FOR_COMPANY"] + companyId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(Object(_app_utils__WEBPACK_IMPORTED_MODULE_3__["handleApiError"])('getAllCarsForcompany', [])));
    };
    CarService.prototype.getCarDetailsById = function (carId) {
        return this.http.get("" + _app_constants__WEBPACK_IMPORTED_MODULE_4__["GET_CAR_DETAILS_BY_ID"] + carId)
            .pipe();
    };
    CarService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CarService);
    return CarService;
}());



/***/ }),

/***/ "./src/app/services/company.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/company.service.ts ***!
  \*********************************************/
/*! exports provided: CompanyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyService", function() { return CompanyService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var _app_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app.utils */ "./src/app/app.utils.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CompanyService = /** @class */ (function () {
    function CompanyService(http) {
        this.http = http;
    }
    CompanyService.prototype.getAllCompanies = function () {
        return this.http.get(_app_constants__WEBPACK_IMPORTED_MODULE_3__["GET_ALL_COMPANIES"])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(Object(_app_utils__WEBPACK_IMPORTED_MODULE_4__["handleApiError"])('getAllCompanies', [])));
    };
    CompanyService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CompanyService);
    return CompanyService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
var environment = {
    production: false,
    BASE_API_URL: 'http://localhost:8080'
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\maittah\IdeaProjects\Demo-belfius\Belfius_Demo_App\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map