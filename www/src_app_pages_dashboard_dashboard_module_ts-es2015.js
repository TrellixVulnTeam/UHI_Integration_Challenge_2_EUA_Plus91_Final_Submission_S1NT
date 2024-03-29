(self["webpackChunkphoto_gallery_ng_capacitor"] = self["webpackChunkphoto_gallery_ng_capacitor"] || []).push([["src_app_pages_dashboard_dashboard_module_ts"],{

/***/ 99366:
/*!*************************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard-routing.module.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardPageRoutingModule": function() { return /* binding */ DashboardPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);



const routes = [
    {
        path: '',
        redirectTo: 'home'
    },
    {
        path: 'home',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_dashboard_home_home_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./home/home.module */ 9871)).then(m => m.HomePageModule)
    },
    {
        path: 'teleconsultation',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_dashboard_teleconsultation_teleconsultation_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./teleconsultation/teleconsultation.module */ 66947)).then(m => m.TeleconsultationPageModule)
    },
    {
        path: 'search-results',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_dashboard_search-results_search-results_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./search-results/search-results.module */ 20089)).then(m => m.SearchResultsPageModule)
    },
    {
        path: 'book-appointment/:id',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_dashboard_book-appointment_book-appointment_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./book-appointment/book-appointment.module */ 90353)).then(m => m.BookAppointmentPageModule)
    },
    {
        path: 'collect-payment/:id',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_dashboard_collect-payment_collect-payment_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./collect-payment/collect-payment.module */ 12792)).then(m => m.CollectPaymentPageModule)
    },
    {
        path: 'confirm-booking',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_dashboard_confirm-booking_confirm-booking_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./confirm-booking/confirm-booking.module */ 33420)).then(m => m.ConfirmBookingPageModule)
    }
];
class DashboardPageRoutingModule {
}
DashboardPageRoutingModule.ɵfac = function DashboardPageRoutingModule_Factory(t) { return new (t || DashboardPageRoutingModule)(); };
DashboardPageRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DashboardPageRoutingModule });
DashboardPageRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DashboardPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 71659:
/*!*****************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.module.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardPageModule": function() { return /* binding */ DashboardPageModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard-routing.module */ 99366);
/* harmony import */ var _dashboard_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.page */ 76446);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);






class DashboardPageModule {
}
DashboardPageModule.ɵfac = function DashboardPageModule_Factory(t) { return new (t || DashboardPageModule)(); };
DashboardPageModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: DashboardPageModule });
DashboardPageModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__.DashboardPageRoutingModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](DashboardPageModule, { declarations: [_dashboard_page__WEBPACK_IMPORTED_MODULE_1__.DashboardPage], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
        _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__.DashboardPageRoutingModule] }); })();


/***/ }),

/***/ 76446:
/*!***************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.page.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardPage": function() { return /* binding */ DashboardPage; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);

class DashboardPage {
    constructor() { }
    ngOnInit() {
    }
}
DashboardPage.ɵfac = function DashboardPage_Factory(t) { return new (t || DashboardPage)(); };
DashboardPage.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardPage, selectors: [["app-dashboard"]], decls: 0, vars: 0, template: function DashboardPage_Template(rf, ctx) { }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXNoYm9hcmQucGFnZS5zY3NzIn0= */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_pages_dashboard_dashboard_module_ts-es2015.js.map