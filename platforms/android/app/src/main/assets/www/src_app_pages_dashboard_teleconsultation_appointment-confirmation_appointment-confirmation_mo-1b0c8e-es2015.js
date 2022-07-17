(self["webpackChunkphoto_gallery_ng_capacitor"] = self["webpackChunkphoto_gallery_ng_capacitor"] || []).push([["src_app_pages_dashboard_teleconsultation_appointment-confirmation_appointment-confirmation_mo-1b0c8e"],{

/***/ 81293:
/*!**********************************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/teleconsultation/appointment-confirmation/appointment-confirmation-routing.module.ts ***!
  \**********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppointmentConfirmationPageRoutingModule": function() { return /* binding */ AppointmentConfirmationPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _appointment_confirmation_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appointment-confirmation.page */ 26736);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);




const routes = [
    {
        path: '',
        component: _appointment_confirmation_page__WEBPACK_IMPORTED_MODULE_0__.AppointmentConfirmationPage
    }
];
class AppointmentConfirmationPageRoutingModule {
}
AppointmentConfirmationPageRoutingModule.ɵfac = function AppointmentConfirmationPageRoutingModule_Factory(t) { return new (t || AppointmentConfirmationPageRoutingModule)(); };
AppointmentConfirmationPageRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppointmentConfirmationPageRoutingModule });
AppointmentConfirmationPageRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppointmentConfirmationPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 22790:
/*!**************************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/teleconsultation/appointment-confirmation/appointment-confirmation.module.ts ***!
  \**************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppointmentConfirmationPageModule": function() { return /* binding */ AppointmentConfirmationPageModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _appointment_confirmation_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appointment-confirmation-routing.module */ 81293);
/* harmony import */ var _appointment_confirmation_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./appointment-confirmation.page */ 26736);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);






class AppointmentConfirmationPageModule {
}
AppointmentConfirmationPageModule.ɵfac = function AppointmentConfirmationPageModule_Factory(t) { return new (t || AppointmentConfirmationPageModule)(); };
AppointmentConfirmationPageModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppointmentConfirmationPageModule });
AppointmentConfirmationPageModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _appointment_confirmation_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppointmentConfirmationPageRoutingModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppointmentConfirmationPageModule, { declarations: [_appointment_confirmation_page__WEBPACK_IMPORTED_MODULE_1__.AppointmentConfirmationPage], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
        _appointment_confirmation_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppointmentConfirmationPageRoutingModule] }); })();


/***/ }),

/***/ 26736:
/*!************************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/teleconsultation/appointment-confirmation/appointment-confirmation.page.ts ***!
  \************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppointmentConfirmationPage": function() { return /* binding */ AppointmentConfirmationPage; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 80476);


class AppointmentConfirmationPage {
    constructor() { }
    ngOnInit() {
    }
}
AppointmentConfirmationPage.ɵfac = function AppointmentConfirmationPage_Factory(t) { return new (t || AppointmentConfirmationPage)(); };
AppointmentConfirmationPage.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppointmentConfirmationPage, selectors: [["app-appointment-confirmation"]], decls: 5, vars: 0, template: function AppointmentConfirmationPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "appointment-confirmation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "ion-content");
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonContent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBvaW50bWVudC1jb25maXJtYXRpb24ucGFnZS5zY3NzIn0= */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_pages_dashboard_teleconsultation_appointment-confirmation_appointment-confirmation_mo-1b0c8e-es2015.js.map