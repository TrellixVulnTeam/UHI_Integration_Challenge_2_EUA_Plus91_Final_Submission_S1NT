(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkphoto_gallery_ng_capacitor"] = self["webpackChunkphoto_gallery_ng_capacitor"] || []).push([["src_app_pages_dashboard_teleconsultation_appointment-details_appointment-details_module_ts"], {
    /***/
    22831:
    /*!************************************************************************************************************!*\
      !*** ./src/app/pages/dashboard/teleconsultation/appointment-details/appointment-details-routing.module.ts ***!
      \************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppointmentDetailsPageRoutingModule": function AppointmentDetailsPageRoutingModule() {
          return (
            /* binding */
            _AppointmentDetailsPageRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _appointment_details_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./appointment-details.page */
      57071);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var routes = [{
        path: '',
        component: _appointment_details_page__WEBPACK_IMPORTED_MODULE_0__.AppointmentDetailsPage
      }];

      var _AppointmentDetailsPageRoutingModule = function _AppointmentDetailsPageRoutingModule() {
        _classCallCheck(this, _AppointmentDetailsPageRoutingModule);
      };

      _AppointmentDetailsPageRoutingModule.ɵfac = function AppointmentDetailsPageRoutingModule_Factory(t) {
        return new (t || _AppointmentDetailsPageRoutingModule)();
      };

      _AppointmentDetailsPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: _AppointmentDetailsPageRoutingModule
      });
      _AppointmentDetailsPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](_AppointmentDetailsPageRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    70733:
    /*!****************************************************************************************************!*\
      !*** ./src/app/pages/dashboard/teleconsultation/appointment-details/appointment-details.module.ts ***!
      \****************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppointmentDetailsPageModule": function AppointmentDetailsPageModule() {
          return (
            /* binding */
            _AppointmentDetailsPageModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _appointment_details_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./appointment-details-routing.module */
      22831);
      /* harmony import */


      var _appointment_details_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./appointment-details.page */
      57071);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _AppointmentDetailsPageModule = function _AppointmentDetailsPageModule() {
        _classCallCheck(this, _AppointmentDetailsPageModule);
      };

      _AppointmentDetailsPageModule.ɵfac = function AppointmentDetailsPageModule_Factory(t) {
        return new (t || _AppointmentDetailsPageModule)();
      };

      _AppointmentDetailsPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: _AppointmentDetailsPageModule
      });
      _AppointmentDetailsPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _appointment_details_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppointmentDetailsPageRoutingModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](_AppointmentDetailsPageModule, {
          declarations: [_appointment_details_page__WEBPACK_IMPORTED_MODULE_1__.AppointmentDetailsPage],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _appointment_details_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppointmentDetailsPageRoutingModule]
        });
      })();
      /***/

    },

    /***/
    57071:
    /*!**************************************************************************************************!*\
      !*** ./src/app/pages/dashboard/teleconsultation/appointment-details/appointment-details.page.ts ***!
      \**************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppointmentDetailsPage": function AppointmentDetailsPage() {
          return (
            /* binding */
            _AppointmentDetailsPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic/angular */
      80476);

      var _AppointmentDetailsPage = /*#__PURE__*/function () {
        function _AppointmentDetailsPage() {
          _classCallCheck(this, _AppointmentDetailsPage);
        }

        _createClass(_AppointmentDetailsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _AppointmentDetailsPage;
      }();

      _AppointmentDetailsPage.ɵfac = function AppointmentDetailsPage_Factory(t) {
        return new (t || _AppointmentDetailsPage)();
      };

      _AppointmentDetailsPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _AppointmentDetailsPage,
        selectors: [["app-appointment-details"]],
        decls: 5,
        vars: 0,
        template: function AppointmentDetailsPage_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-toolbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "appointment-details");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "ion-content");
          }
        },
        directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonContent],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBvaW50bWVudC1kZXRhaWxzLnBhZ2Uuc2NzcyJ9 */"]
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_dashboard_teleconsultation_appointment-details_appointment-details_module_ts-es5.js.map