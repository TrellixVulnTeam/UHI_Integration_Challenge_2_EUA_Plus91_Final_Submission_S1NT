(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkphoto_gallery_ng_capacitor"] = self["webpackChunkphoto_gallery_ng_capacitor"] || []).push([["src_app_pages_dashboard_book-appointment_book-appointment_module_ts"], {
    /***/
    99040:
    /*!*************************************************************************************!*\
      !*** ./src/app/pages/dashboard/book-appointment/book-appointment-routing.module.ts ***!
      \*************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BookAppointmentPageRoutingModule": function BookAppointmentPageRoutingModule() {
          return (
            /* binding */
            _BookAppointmentPageRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _book_appointment_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./book-appointment.page */
      71894);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var routes = [{
        path: '',
        component: _book_appointment_page__WEBPACK_IMPORTED_MODULE_0__.BookAppointmentPage
      }];

      var _BookAppointmentPageRoutingModule = function _BookAppointmentPageRoutingModule() {
        _classCallCheck(this, _BookAppointmentPageRoutingModule);
      };

      _BookAppointmentPageRoutingModule.ɵfac = function BookAppointmentPageRoutingModule_Factory(t) {
        return new (t || _BookAppointmentPageRoutingModule)();
      };

      _BookAppointmentPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: _BookAppointmentPageRoutingModule
      });
      _BookAppointmentPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](_BookAppointmentPageRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    90353:
    /*!*****************************************************************************!*\
      !*** ./src/app/pages/dashboard/book-appointment/book-appointment.module.ts ***!
      \*****************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BookAppointmentPageModule": function BookAppointmentPageModule() {
          return (
            /* binding */
            _BookAppointmentPageModule
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


      var _book_appointment_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./book-appointment-routing.module */
      99040);
      /* harmony import */


      var _book_appointment_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./book-appointment.page */
      71894);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _BookAppointmentPageModule = function _BookAppointmentPageModule() {
        _classCallCheck(this, _BookAppointmentPageModule);
      };

      _BookAppointmentPageModule.ɵfac = function BookAppointmentPageModule_Factory(t) {
        return new (t || _BookAppointmentPageModule)();
      };

      _BookAppointmentPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: _BookAppointmentPageModule
      });
      _BookAppointmentPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _book_appointment_routing_module__WEBPACK_IMPORTED_MODULE_0__.BookAppointmentPageRoutingModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](_BookAppointmentPageModule, {
          declarations: [_book_appointment_page__WEBPACK_IMPORTED_MODULE_1__.BookAppointmentPage],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _book_appointment_routing_module__WEBPACK_IMPORTED_MODULE_0__.BookAppointmentPageRoutingModule]
        });
      })();
      /***/

    },

    /***/
    71894:
    /*!***************************************************************************!*\
      !*** ./src/app/pages/dashboard/book-appointment/book-appointment.page.ts ***!
      \***************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BookAppointmentPage": function BookAppointmentPage() {
          return (
            /* binding */
            _BookAppointmentPage
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
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      3679);

      function BookAppointmentPage_br_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "br");
        }
      }

      function BookAppointmentPage_ion_chip_41_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-chip", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BookAppointmentPage_ion_chip_41_Template_ion_chip_click_0_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5);

            var i_r3 = restoredCtx.index;

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r4.select_slots(i_r3);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var timeSlot_r2 = ctx.$implicit;
          var i_r3 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("id", "time_slot" + i_r3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", timeSlot_r2[0], " - ", timeSlot_r2[1], "");
        }
      }

      var _BookAppointmentPage = /*#__PURE__*/function () {
        function _BookAppointmentPage(_router, _api, _commonService, activatedRoute) {
          _classCallCheck(this, _BookAppointmentPage);

          this._router = _router;
          this._api = _api;
          this._commonService = _commonService;
          this.activatedRoute = activatedRoute;
          this.doctorInfo = [];
          this.availableTimeSlots = [];
          this.monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
          var date = new Date();
          this.slot_date_option = this.monthNames[date.getMonth()] + " " + date.getDate();
          this.search_index = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
          console.log(this.search_index);

          if (this._commonService.transaction_id == null || this._commonService.transaction_id == undefined) {
            this._router.navigate(["/dashboard/search-results"]);
          }
        }

        _createClass(_BookAppointmentPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.sortDataFromArray(); // this.get_onSearchData();
            // this.get_onSelectData();
            // var x = 15; //minutes interval
            // var times = []; // time array
            // var tt = 0; // start time
            // //loop to increment the time and push results in array
            // for (var i=0;tt<2*60; i++) {
            //   var hh = Math.floor(tt/60);
            //   console.log("hh",hh);
            //   var mm = (tt%60);
            //   console.log("mm",mm);
            //   times[i] = ("0" + (hh)).slice(-2) + ':' + ("0" + mm).slice(-2);
            //   tt = tt + x;
            // }
            // console.log(times);
            // this.sortTimeSLots(16,30,18,0);
          }
        }, {
          key: "sortTimeSLots",
          value: function sortTimeSLots(start_hh, start_mm, end_hh, end_mm) {
            var x = 15; //minutes interval

            var times = []; // time array

            var tt = start_mm; // start time
            //loop to increment the time and push results in array

            for (var i = 0; tt < 24 * 60; i++) {
              var hh = Math.floor(tt / 60);
              var mm = tt % 60;

              if (hh >= start_hh && hh <= end_hh) {
                if (hh == start_hh && mm >= start_mm) {
                  // console.log(hh,mm)
                  // console.log("hh",hh,start_hh);
                  // console.log("mm",mm,start_mm);
                  // mm = (mm+x>=60)?0:mm+x;
                  // times[i] = [("0" + (hh)).slice(-2) + ':' + ("0" + mm).slice(-2),("0" + (hh)).slice(-2) + ':' + ("0" + mm).slice(-2)];
                  var end_min = mm + x;
                  var end_hr = hh;

                  if (end_min >= 60) {
                    end_hr += 1;
                    end_min = 0;
                  }

                  times[i] = [("0" + hh).slice(-2) + ':' + ("0" + mm).slice(-2), ("0" + end_hr).slice(-2) + ':' + ("0" + end_min).slice(-2)];
                } else if (hh > start_hh) {
                  if (hh == end_hh && mm < end_mm) {
                    // console.log( "3",hh,mm);
                    // console.log("hh",hh,start_hh);
                    // console.log("mm",mm,start_mm);
                    // mm = (mm+x>=60)?0:mm+x;
                    var end_min = mm + x;
                    var end_hr = hh;

                    if (end_min >= 60) {
                      end_hr += 1;
                      end_min = 0;
                    }

                    times[i] = [("0" + hh).slice(-2) + ':' + ("0" + mm).slice(-2), ("0" + end_hr).slice(-2) + ':' + ("0" + end_min).slice(-2)];
                  } else if (hh < end_hh) {
                    // console.log( "2",hh,mm);
                    // console.log("hh",hh,start_hh);
                    // console.log("mm",mm,start_mm);
                    // mm = (mm+x>=60)?0:mm+x;
                    // times[i] = [("0" + (hh)).slice(-2) + ':' + ("0" + mm).slice(-2),("0" + (hh)).slice(-2) + ':' + ("0" + mm).slice(-2)];
                    var end_min = mm + x;
                    var end_hr = hh;

                    if (end_min >= 60) {
                      end_hr += 1;
                      end_min = 0;
                    }

                    times[i] = [("0" + hh).slice(-2) + ':' + ("0" + mm).slice(-2), ("0" + end_hr).slice(-2) + ':' + ("0" + end_min).slice(-2)];
                  }
                } // times[i] = ("0" + (hh)).slice(-2) + ':' + ("0" + mm).slice(-2);
                // this.availableTimeSlots[i] = ("0" + (hh)).slice(-2) + ':' + ("0" + mm).slice(-2);

              }

              tt = tt + x;
            }

            for (var k in times) {
              this.availableTimeSlots.push(times[k]);
            } // console.log(this.availableTimeSlots);
            // return times;

          }
        }, {
          key: "get_onSearchData",
          value: function get_onSearchData() {
            var _this = this;

            var param = {
              "transaction_id": this._commonService.transaction_id
            }; // console.log("get_onSearchData",param);

            this._api.get_onSearchData(param).subscribe(function (res) {
              // console.log("get_onSearchData res");
              // console.log(res);
              _this.searchResults = [];
              res.data.forEach(function (data) {
                if (data.hasOwnProperty("request_body")) {
                  var results = JSON.parse(data.request_body);
                  console.log(results);

                  if (results.status_code == 200 && results.hasOwnProperty("context") && results.hasOwnProperty("message") && results.message.hasOwnProperty("catalog") && results.message.catalog.hasOwnProperty("providers") && results.message.catalog.providers.length > 0) {
                    results.message.catalog.providers.forEach(function (provider) {
                      provider.fulfillments.forEach(function (fulfillment) {
                        var isDoctorAlreadyAdded = false;

                        for (var i = 0; i < _this.searchResults.length; i++) {
                          if (_this.searchResults[i].doctor_id == fulfillment.person.id) {
                            isDoctorAlreadyAdded = true;
                            break;
                          }
                        }

                        ;

                        if (!isDoctorAlreadyAdded) {
                          var expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
                          var regex = new RegExp(expression);

                          if (!fulfillment.person.image.match(regex)) {
                            fulfillment.person.image = "";
                          }

                          _this.searchResults.push({
                            service_provider: results.message.catalog.descriptor.name,
                            provider_id: provider.id,
                            hospital_name: provider.descriptor.name,
                            doctor_name: fulfillment.person.name,
                            doctor_id: fulfillment.person.id,
                            doctor_gender: fulfillment.person.gender.toLowerCase(),
                            doctor_img: fulfillment.person.image,
                            doctor_cred: fulfillment.person.cred,
                            doctor_service_type: fulfillment.type == "NA" ? "" : fulfillment.type,
                            doctor_service_category: "",
                            item_id: null,
                            start_time: fulfillment.start,
                            end_time: fulfillment.end
                          });
                        }
                      });
                      provider.items.forEach(function (item) {
                        _this.searchResults.forEach(function (doctor) {
                          if (doctor.doctor_id == item.fulfillment_id) {
                            provider.categories.forEach(function (category) {
                              if (category.id == item.category_id) {
                                doctor.doctor_service_category = category.descriptor.name == "NA" ? "" : category.descriptor.name;
                                doctor.item_id = item.id;
                              }
                            });
                          }
                        });
                      });
                    });
                  }
                }
              }); // console.log(this.searchResults);
            }, function (err) {
              if (err) {
                console.error(err);
              }
            });
          }
        }, {
          key: "get_onSelectData",
          value: function get_onSelectData() {
            var _this2 = this;

            var param = {
              "transaction_id": this._commonService.transaction_id
            };

            this._api.get_onSelectData(param).subscribe(function (res) {
              // console.log(res);
              res.data.forEach(function (data) {
                if (data.hasOwnProperty("request_body")) {
                  var results = JSON.parse(data.request_body); // console.log(results);

                  _this2.doctorInfo = [];

                  if (results.status_code == 200 && results.hasOwnProperty("context") && results.hasOwnProperty("message") && results.message.hasOwnProperty("order") && results.message.order.hasOwnProperty("provider")) {
                    // console.log("------------->1");
                    // (results.message.order.provider).forEach(providerData => {
                    // console.log("------------->2");
                    results.message.order.fulfillment.forEach(function (fulfillmentData) {
                      console.log("------------->3");
                      var expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
                      var regex = new RegExp(expression); // if(fulfillmentData.person.image!=null && !fulfillmentData.person.image.match(regex)) {
                      //   fulfillmentData.person.image = "";
                      // }

                      if (fulfillmentData.agent.image != null && !fulfillmentData.agent.image.match(regex)) {
                        fulfillmentData.agent.image = "";
                      }

                      _this2.doctorInfo.push({
                        service_provider: results.message.order.provider.descriptor.name,
                        // provider_id: providerData,
                        // hospital_name: providerData, //.descriptor.name,
                        doctor_name: fulfillmentData.agent.name,
                        doctor_id: fulfillmentData.agent.id,
                        doctor_gender: fulfillmentData.agent.gender.toLowerCase(),
                        doctor_img: fulfillmentData.agent.image,
                        doctor_cred: fulfillmentData.agent.cred,
                        doctor_service_type: fulfillmentData.type == "NA" ? "" : fulfillmentData.type,
                        doctor_service_category: "",
                        item_id: null,
                        quote: null
                      });
                    });
                    results.message.order.items.forEach(function (item) {
                      _this2.doctorInfo.forEach(function (doctor) {
                        if (doctor.doctor_id == item.fulfillment_id) {
                          doctor.item_id = item.id; // results.message.order.categories.forEach(category => {
                          //   if(category.id==item.category_id)
                          //   {
                          //     doctor.doctor_service_category = category.descriptor.name=="NA"?"":category.descriptor.name;
                          //     doctor.item_id = item.id;
                          //   }
                          // });
                        }
                      });
                    });
                    _this2.doctorInfo[0].quote = results.message.order.quote;

                    _this2.searchResults.forEach(function (element) {
                      if (element.doctor_id == _this2.doctorInfo[0].doctor_id) {
                        _this2.doctorInfo[0].dd = element;

                        if (element.start_time) {
                          console.log(element.start_time.time); // console.log()
                        }
                      }
                    });

                    console.log(_this2.doctorInfo);
                  }
                }
              });
            }, function (err) {
              if (err) {
                console.log(err);
              }
            });
          }
        }, {
          key: "sortDataFromArray",
          value: function sortDataFromArray() {
            var _this3 = this;

            console.log(this._commonService.searchResults.fulfillments[this.search_index]);
            setTimeout(function () {
              var date = new Date();
              var start_time = new Date("".concat(date.getFullYear(), "-01-01") + _this3._commonService.searchResults.fulfillments[_this3.search_index].start.time.timestamp);
              var end_time = new Date("".concat(date.getFullYear(), "-01-01") + _this3._commonService.searchResults.fulfillments[_this3.search_index].end.time.timestamp);

              _this3.sortTimeSLots(start_time.getHours(), start_time.getMinutes(), end_time.getHours(), end_time.getMinutes());
            }, 500);
            /*var results = this._commonService.searchResults[this.search_index]
            console.log(results);
                 this.doctorInfo.push({
              service_provider: results.service_provider,
              provider_id: results.provider_id,
              doctor_name: results.doctor_name,
              doctor_id: results.doctor_id,
              doctor_gender: (results.doctor_gender).toLowerCase(),
              doctor_img: results.doctor_image,
              doctor_cred: results.doctor_cred,
              doctor_service_type: results.doctor_service_type=="NA"?"":results.doctor_service_type,
              doctor_service_category: results.doctor_service_category,
              item_id: results.item_id,
              quote: results.quote,
              start: results.start,
              end: results.end
            });
                 console.log(this.doctorInfo);*/

            /*
            var results = JSON.parse(data.request_body);
                  // console.log(results);
                       this.doctorInfo = [];
                  if(results.status_code==200 && results.hasOwnProperty("context") && results.hasOwnProperty("message") && results.message.hasOwnProperty("order") && results.message.order.hasOwnProperty("provider"))
                  {
                    // console.log("------------->1");
                    
                    // (results.message.order.provider).forEach(providerData => {
                    // console.log("------------->2");
                    results.message.order.fulfillment.forEach(fulfillmentData => {
                      console.log("------------->3");
                           var expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
                      var regex = new RegExp(expression);
                      // if(fulfillmentData.person.image!=null && !fulfillmentData.person.image.match(regex)) {
                      //   fulfillmentData.person.image = "";
                      // }
                           if(fulfillmentData.agent.image!=null && !fulfillmentData.agent.image.match(regex)) {
                        fulfillmentData.agent.image = "";
                      }
                           this.doctorInfo.push({
                        service_provider: results.message.order.provider.descriptor.name,
                        // provider_id: providerData,
                        // hospital_name: providerData, //.descriptor.name,
                        doctor_name: fulfillmentData.agent.name,
                        doctor_id: fulfillmentData.agent.id,
                        doctor_gender: (fulfillmentData.agent.gender).toLowerCase(),
                        doctor_img: fulfillmentData.agent.image,
                        doctor_cred: fulfillmentData.agent.cred,
                        doctor_service_type: fulfillmentData.type=="NA"?"":fulfillmentData.type,
                        doctor_service_category: "",
                        item_id: null,
                        quote: null
                      });
                    });
                         results.message.order.items.forEach(item => {
                      this.doctorInfo.forEach(doctor => {
                        if(doctor.doctor_id==item.fulfillment_id)
                        {
                          doctor.item_id = item.id
                          // results.message.order.categories.forEach(category => {
                          //   if(category.id==item.category_id)
                          //   {
                          //     doctor.doctor_service_category = category.descriptor.name=="NA"?"":category.descriptor.name;
                          //     doctor.item_id = item.id;
                          //   }
                          // });
                        }
                      });
                    });
                         this.doctorInfo[0].quote=results.message.order.quote;
                    
                    this.searchResults.forEach(element => {
                      if(element.doctor_id==this.doctorInfo[0].doctor_id)
                      {
                        this.doctorInfo[0].dd = element;
                             if(element.start_time)
                        {
                          console.log(element.start_time.time);
                          // console.log()
                        }
                      }
                    });
                    console.log(this.doctorInfo);
                  }*/
          }
        }, {
          key: "select_slots",
          value: function select_slots(index) {
            $("#time_slots_div").find('ion-chip').removeClass('bg-primary').removeClass('text-white');
            $("#time_slot" + index).addClass('bg-primary').addClass('text-white');
          }
        }, {
          key: "init",
          value: function init() {
            var _this4 = this;

            var time_slot_divs = $("#time_slots_div").find('ion-chip');
            var time_slot;
            var date = new Date();

            for (var i = 0; i < time_slot_divs.length; i++) {
              var element = time_slot_divs[i];

              if ($(element).hasClass('bg-primary')) {
                time_slot = $(element).find("ion-label").html();
              }
            } // console.log(time_slot);


            var slot_start_time = time_slot.split(" - ")[0];
            var slot_end_time = time_slot.split(" - ")[1]; // console.log(slot_start_time,slot_end_time);
            // return;

            var param = {
              details: this._commonService.searchResults.fulfillments[this.search_index],
              transaction_id: this._commonService.transaction_id,
              slot_start_time: slot_start_time,
              slot_end_time: slot_end_time
            };

            this._api.init(param).subscribe(function (res) {
              console.log(res);

              if (res.success && res.body.message.ack.status == "ACK") {
                _this4._router.navigate(["/dashboard/collect-payment", _this4.search_index]);
              }
            }, function (err) {
              if (err) {
                console.error(err);
              }
            });
          }
        }]);

        return _BookAppointmentPage;
      }();

      _BookAppointmentPage.ɵfac = function BookAppointmentPage_Factory(t) {
        return new (t || _BookAppointmentPage)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_1__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute));
      };

      _BookAppointmentPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _BookAppointmentPage,
        selectors: [["app-book-appointment"]],
        decls: 45,
        vars: 13,
        consts: [[3, "translucent"], ["slot", "start"], ["slot", "secondary"], ["defaultHref", "/dashboard/search-results"], [3, "fullscreen"], [1, "container-fluid", "w-100", "h-100", "p-3"], [1, "m-0", "b-0", "mb-3"], ["lines", "none", 1, "border-0"], [1, "h-100", 2, "padding-top", "5px", "padding-bottom", "5px"], ["alt", "", 2, "width", "60px", "margin", "5px 15px 5px 0px", "border-radius", "100%", 3, "src"], [1, "text-muted"], [2, "color", "#3880ff"], [4, "ngIf"], [1, "w-100", "d-block", 2, "max-height", "calc(100% - 106px - 64px)", "overflow", "auto"], [1, "d-block", "col-12", 2, "padding", "10px"], [1, "col-5", "mt-2"], [1, "form"], ["id", "slotSelect", "aria-label", "", 1, "form-select", "bg-primary", "text-white"], [1, "bg-white", "text-dark"], ["value", "1", "selected", "", 1, "bg-white", "text-dark"], [1, "d-block", "col-12", "mt-4"], ["id", "time_slots_div", 1, "col-12", "d-block", "mt-1"], ["outline", "", "color", "primary", 3, "id", "click", 4, "ngFor", "ngForOf"], [1, "position-absolute", "start-0", "bottom-0", "px-3", "d-block", "w-100", 2, "padding", "10px"], ["expand", "full", 3, "click"], ["outline", "", "color", "primary", 3, "id", "click"]],
        template: function BookAppointmentPage_Template(rf, ctx) {
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

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, BookAppointmentPage_br_23_Template, 1, 0, "br", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "ion-card-subtitle");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "select", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "option", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "Select Date");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "option", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "span", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "Please choose one time slot from below");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](41, BookAppointmentPage_ion_chip_41_Template, 3, 3, "ion-chip", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "ion-button", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BookAppointmentPage_Template_ion_button_click_43_listener() {
              return ctx.init();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, "Book Now");

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

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate3"]("", ctx._commonService.searchResults.fulfillments[ctx.search_index].type, " ", ctx._commonService.searchResults.fulfillments[ctx.search_index].agent.tags["@abdm/gov/in/speciality"], " ", ctx._commonService.searchResults.fulfillments[ctx.search_index].agent.tags["@abdm/gov/in/education"] ? "/" + ctx._commonService.searchResults.fulfillments[ctx.search_index].agent.tags["@abdm/gov/in/education"] : "", "");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx._commonService.searchResults.fulfillments[ctx.search_index].agent.tags["@abdm/gov/in/hpr_id"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx._commonService.searchResults.fulfillments[ctx.search_index].agent.tags["@abdm/gov/in/hpr_id"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx._commonService.searchResults.fulfillments[ctx.search_index].agent.tags["@abdm/gov/in/languages"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx._commonService.searchResults.fulfillments[ctx.search_index].agent.tags["@abdm/gov/in/experience"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.slot_date_option);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.availableTimeSlots);
          }
        },
        directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonMenuButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonBackButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonBackButtonDelegate, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonCard, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonLabel, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonCardSubtitle, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgSelectMultipleOption"], _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonChip],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJib29rLWFwcG9pbnRtZW50LnBhZ2Uuc2NzcyJ9 */"]
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_dashboard_book-appointment_book-appointment_module_ts-es5.js.map