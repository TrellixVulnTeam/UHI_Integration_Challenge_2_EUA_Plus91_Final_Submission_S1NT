(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkphoto_gallery_ng_capacitor"] = self["webpackChunkphoto_gallery_ng_capacitor"] || []).push([["src_app_pages_dashboard_teleconsultation_doctor-details_doctor-details_module_ts"], {
    /***/
    56366:
    /*!**************************************************************************************************!*\
      !*** ./src/app/pages/dashboard/teleconsultation/doctor-details/doctor-details-routing.module.ts ***!
      \**************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DoctorDetailsPageRoutingModule": function DoctorDetailsPageRoutingModule() {
          return (
            /* binding */
            _DoctorDetailsPageRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _doctor_details_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./doctor-details.page */
      59722);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var routes = [{
        path: '',
        component: _doctor_details_page__WEBPACK_IMPORTED_MODULE_0__.DoctorDetailsPage
      }];

      var _DoctorDetailsPageRoutingModule = function _DoctorDetailsPageRoutingModule() {
        _classCallCheck(this, _DoctorDetailsPageRoutingModule);
      };

      _DoctorDetailsPageRoutingModule.ɵfac = function DoctorDetailsPageRoutingModule_Factory(t) {
        return new (t || _DoctorDetailsPageRoutingModule)();
      };

      _DoctorDetailsPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: _DoctorDetailsPageRoutingModule
      });
      _DoctorDetailsPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](_DoctorDetailsPageRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    54629:
    /*!******************************************************************************************!*\
      !*** ./src/app/pages/dashboard/teleconsultation/doctor-details/doctor-details.module.ts ***!
      \******************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DoctorDetailsPageModule": function DoctorDetailsPageModule() {
          return (
            /* binding */
            _DoctorDetailsPageModule
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


      var _doctor_details_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./doctor-details-routing.module */
      56366);
      /* harmony import */


      var _doctor_details_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./doctor-details.page */
      59722);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _DoctorDetailsPageModule = function _DoctorDetailsPageModule() {
        _classCallCheck(this, _DoctorDetailsPageModule);
      };

      _DoctorDetailsPageModule.ɵfac = function DoctorDetailsPageModule_Factory(t) {
        return new (t || _DoctorDetailsPageModule)();
      };

      _DoctorDetailsPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: _DoctorDetailsPageModule
      });
      _DoctorDetailsPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _doctor_details_routing_module__WEBPACK_IMPORTED_MODULE_0__.DoctorDetailsPageRoutingModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](_DoctorDetailsPageModule, {
          declarations: [_doctor_details_page__WEBPACK_IMPORTED_MODULE_1__.DoctorDetailsPage],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _doctor_details_routing_module__WEBPACK_IMPORTED_MODULE_0__.DoctorDetailsPageRoutingModule]
        });
      })();
      /***/

    },

    /***/
    59722:
    /*!****************************************************************************************!*\
      !*** ./src/app/pages/dashboard/teleconsultation/doctor-details/doctor-details.page.ts ***!
      \****************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DoctorDetailsPage": function DoctorDetailsPage() {
          return (
            /* binding */
            _DoctorDetailsPage
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

      var _DoctorDetailsPage = /*#__PURE__*/function () {
        function _DoctorDetailsPage() {
          _classCallCheck(this, _DoctorDetailsPage);
        }

        _createClass(_DoctorDetailsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _DoctorDetailsPage;
      }();

      _DoctorDetailsPage.ɵfac = function DoctorDetailsPage_Factory(t) {
        return new (t || _DoctorDetailsPage)();
      };

      _DoctorDetailsPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _DoctorDetailsPage,
        selectors: [["app-doctor-details"]],
        decls: 5,
        vars: 0,
        template: function DoctorDetailsPage_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-toolbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "doctor-details");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "ion-content");
          }
        },
        directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonContent],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkb2N0b3ItZGV0YWlscy5wYWdlLnNjc3MifQ== */"]
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_dashboard_teleconsultation_doctor-details_doctor-details_module_ts-es5.js.map