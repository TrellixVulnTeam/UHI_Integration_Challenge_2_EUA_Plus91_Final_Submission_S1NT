(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkphoto_gallery_ng_capacitor"] = self["webpackChunkphoto_gallery_ng_capacitor"] || []).push([["src_app_pages_dashboard_collect-payment_collect-payment_module_ts"], {
    /***/
    33364:
    /*!***********************************************************************************!*\
      !*** ./src/app/pages/dashboard/collect-payment/collect-payment-routing.module.ts ***!
      \***********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CollectPaymentPageRoutingModule": function CollectPaymentPageRoutingModule() {
          return (
            /* binding */
            _CollectPaymentPageRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _collect_payment_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./collect-payment.page */
      92738);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var routes = [{
        path: '',
        component: _collect_payment_page__WEBPACK_IMPORTED_MODULE_0__.CollectPaymentPage
      }];

      var _CollectPaymentPageRoutingModule = function _CollectPaymentPageRoutingModule() {
        _classCallCheck(this, _CollectPaymentPageRoutingModule);
      };

      _CollectPaymentPageRoutingModule.ɵfac = function CollectPaymentPageRoutingModule_Factory(t) {
        return new (t || _CollectPaymentPageRoutingModule)();
      };

      _CollectPaymentPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: _CollectPaymentPageRoutingModule
      });
      _CollectPaymentPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](_CollectPaymentPageRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    12792:
    /*!***************************************************************************!*\
      !*** ./src/app/pages/dashboard/collect-payment/collect-payment.module.ts ***!
      \***************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CollectPaymentPageModule": function CollectPaymentPageModule() {
          return (
            /* binding */
            _CollectPaymentPageModule
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


      var _collect_payment_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./collect-payment-routing.module */
      33364);
      /* harmony import */


      var _collect_payment_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./collect-payment.page */
      92738);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _CollectPaymentPageModule = function _CollectPaymentPageModule() {
        _classCallCheck(this, _CollectPaymentPageModule);
      };

      _CollectPaymentPageModule.ɵfac = function CollectPaymentPageModule_Factory(t) {
        return new (t || _CollectPaymentPageModule)();
      };

      _CollectPaymentPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: _CollectPaymentPageModule
      });
      _CollectPaymentPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _collect_payment_routing_module__WEBPACK_IMPORTED_MODULE_0__.CollectPaymentPageRoutingModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](_CollectPaymentPageModule, {
          declarations: [_collect_payment_page__WEBPACK_IMPORTED_MODULE_1__.CollectPaymentPage],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _collect_payment_routing_module__WEBPACK_IMPORTED_MODULE_0__.CollectPaymentPageRoutingModule]
        });
      })();
      /***/

    },

    /***/
    92738:
    /*!*************************************************************************!*\
      !*** ./src/app/pages/dashboard/collect-payment/collect-payment.page.ts ***!
      \*************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CollectPaymentPage": function CollectPaymentPage() {
          return (
            /* binding */
            _CollectPaymentPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/services/api/api.service */
      45146);
      /* harmony import */


      var src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/common/common.service */
      69763);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      38583);

      function CollectPaymentPage_br_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "br");
        }
      }

      function CollectPaymentPage_div_33_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var quote_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](quote_r3.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](quote_r3.price.value);
        }
      }

      function CollectPaymentPage_div_33_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Billing Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, CollectPaymentPage_div_33_div_4_Template, 5, 2, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "span", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Total Payable");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "span", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1._commonService.searchResults.order.message.order.quote.quote.breakup);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Rs. ", ctx_r1._commonService.searchResults.order.message.order.quote.quote.price.value, "");
        }
      }

      var _CollectPaymentPage = /*#__PURE__*/function () {
        function _CollectPaymentPage(_router, _api, _commonService, activatedRoute) {
          _classCallCheck(this, _CollectPaymentPage);

          this._router = _router;
          this._api = _api;
          this._commonService = _commonService;
          this.activatedRoute = activatedRoute;
          this.weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
          this.monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
          this.doctorInfo = [];
          this.search_index = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));

          if (this._commonService.transaction_id == null || this._commonService.transaction_id == undefined) {
            this._router.navigate(["/dashboard/"]);
          }
        }

        _createClass(_CollectPaymentPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            // console.log(this._commonService.searchResults.fulfillments[this.search_index]);
            this._commonService.SOCKET.on('on_init', function (data) {
              setTimeout(function () {
                var start_time = new Date(_this._commonService.searchResults.order.message.order.fulfillment.start.time.timestamp);
                var end_time = new Date(_this._commonService.searchResults.order.message.order.fulfillment.end.time.timestamp);
                _this.blooked_slot = _this.weekday[start_time.getDay()] + " " + _this.monthNames[start_time.getMonth()] + " " + ("0" + start_time.getDate()).slice(-2) + ", " + ("0" + start_time.getHours()).slice(-2) + ":" + ("0" + start_time.getMinutes()).slice(-2);
              }, 500);
            });

            setTimeout(function () {
              var start_time = new Date(_this._commonService.searchResults.order.message.order.fulfillment.start.time.timestamp);
              var end_time = new Date(_this._commonService.searchResults.order.message.order.fulfillment.end.time.timestamp);
              _this.blooked_slot = _this.weekday[start_time.getDay()] + " " + _this.monthNames[start_time.getMonth()] + " " + ("0" + start_time.getDate()).slice(-2) + ", " + ("0" + start_time.getHours()).slice(-2) + ":" + ("0" + start_time.getMinutes()).slice(-2);
            }, 3000); // console.log(this._commonService.searchResults.order);
            // var results = this._commonService.searchResults[this.search_index]
            // console.log(results);
            // this.doctorInfo.push({
            //   service_provider: results.service_provider,
            //   provider_id: results.provider_id,
            //   doctor_name: results.doctor_name,
            //   doctor_id: results.doctor_id,
            //   doctor_gender: (results.doctor_gender).toLowerCase(),
            //   doctor_img: results.doctor_image,
            //   doctor_cred: results.doctor_cred,
            //   doctor_service_type: results.doctor_service_type=="NA"?"":results.doctor_service_type,
            //   doctor_service_category: results.doctor_service_category,
            //   item_id: results.item_id,
            //   quote: results.quote,
            //   start: results.start,
            //   end: results.end
            // });
            // console.log(this.doctorInfo);
          } // npx greenlock init --config-dir ./greenlock.d --maintainer-email 'shubham.bhadale@plus91.in'
          // npx greenlock add --subject uhi-eua-socket.medixcel.in --altnames uhi-eua-socket.medixcel.in

        }, {
          key: "confirm",
          value: function confirm() {
            var _this2 = this;

            // console.log(this._commonService.searchResults.order.message.order.payment.uri);
            // window.location.href = this._commonService.searchResults.order.message.order.payment.uri;
            // return;
            // console.log(this._commonService.searchResults.order);
            var dataArr = this._commonService.searchResults.order.message.order;
            dataArr["context"] = this._commonService.searchResults.order.context;
            var param = {
              details: dataArr
            }; // console.log("confirm",param);

            this._commonService.presentLoading();

            this._api.confirm(param).subscribe(function (res) {
              console.log(res);

              if (res.success && res.body.message.ack.status == "ACK") {
                _this2._router.navigate(["/dashboard/confirm-booking"]);
              }
            }, function (err) {
              if (err) {
                console.error(err);
              }
            });
          }
        }]);

        return _CollectPaymentPage;
      }();

      _CollectPaymentPage.ɵfac = function CollectPaymentPage_Factory(t) {
        return new (t || _CollectPaymentPage)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_1__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute));
      };

      _CollectPaymentPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _CollectPaymentPage,
        selectors: [["app-collect-payment"]],
        decls: 37,
        vars: 13,
        consts: [[3, "translucent"], ["slot", "start"], ["slot", "secondary"], ["defaultHref", "/dashboard/book-appointment"], [3, "fullscreen"], [1, "container-fluid", "w-100", "h-100", "p-3"], [1, "m-0", "b-0", "mb-3"], ["lines", "none", 1, "border-0"], [1, "h-100", 2, "padding-top", "5px", "padding-bottom", "5px"], ["alt", "", 2, "width", "60px", "margin", "5px 15px 5px 0px", "border-radius", "100%", 3, "src"], [1, "text-muted"], [2, "color", "#3880ff"], [4, "ngIf"], [1, "w-100", "d-block"], [1, "text-muted", "d-block", "fs-12"], [1, "d-block"], ["class", "w-100 d-block mt-5", 4, "ngIf"], [1, "position-absolute", "bottom-0", "start-0", "d-block", "w-100", "px-3"], ["expand", "full", 3, "click"], [1, "w-100", "d-block", "mt-5"], [1, "mb-2"], [2, "font-weight", "700"], ["class", "d-flex justify-content-between", 4, "ngFor", "ngForOf"], [1, "d-flex", "justify-content-between", 2, "font-weight", "700"], [1, "fs-14", "text-primary"], [1, "text-primary"], [1, "d-flex", "justify-content-between"], [1, "text-muted", "fs-14"]],
        template: function CollectPaymentPage_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-header", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-toolbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ion-buttons", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "ion-menu-button");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "ion-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Book Appointment");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "ion-buttons", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "ion-back-button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "ion-content", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "ion-card", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "ion-item", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "img", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "ion-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "span", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, CollectPaymentPage_br_23_Template, 1, 0, "br", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "ion-card-subtitle");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "span", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "Selected date and time for Teleconsultation");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](33, CollectPaymentPage_div_33_Template, 11, 2, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "ion-button", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CollectPaymentPage_Template_ion_button_click_35_listener() {
              return ctx.confirm();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "Pay Now");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("translucent", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("fullscreen", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx._commonService.searchResults.fulfillments[ctx.search_index].agent.gender == "M" ? "assets/male-doctor.png" : "assets/female-doctor.png", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx._commonService.searchResults.fulfillments[ctx.search_index].agent.name, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate3"]("", ctx._commonService.searchResults.fulfillments[ctx.search_index].type, " / ", ctx._commonService.searchResults.fulfillments[ctx.search_index].items.descriptor.name, " ", ctx._commonService.searchResults.fulfillments[ctx.search_index].agent.tags["@abdm/gov/in/education"] ? "/" + ctx._commonService.searchResults.fulfillments[ctx.search_index].agent.tags["@abdm/gov/in/education"] : "", "");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx._commonService.searchResults.fulfillments[ctx.search_index].agent.tags["@abdm/gov/in/hpr_id"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx._commonService.searchResults.fulfillments[ctx.search_index].agent.tags["@abdm/gov/in/hpr_id"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx._commonService.searchResults.fulfillments[ctx.search_index].agent.tags["@abdm/gov/in/languages"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx._commonService.searchResults.fulfillments[ctx.search_index].agent.tags["@abdm/gov/in/experience"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.blooked_slot);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx._commonService.searchResults.order);
          }
        },
        directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonMenuButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonBackButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonBackButtonDelegate, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonCard, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonLabel, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonCardSubtitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonButton, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb2xsZWN0LXBheW1lbnQucGFnZS5zY3NzIn0= */"]
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_dashboard_collect-payment_collect-payment_module_ts-es5.js.map