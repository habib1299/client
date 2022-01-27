function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["MyFolderwork-SuperAdmin-officer-officer-module"], {
  /***/
  "./src/app/MyFolderwork/SuperAdmin/officer/officer-routing.module.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/MyFolderwork/SuperAdmin/officer/officer-routing.module.ts ***!
    \***************************************************************************/

  /*! exports provided: OfficerRoutingModule */

  /***/
  function srcAppMyFolderworkSuperAdminOfficerOfficerRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OfficerRoutingModule", function () {
      return OfficerRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _officer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./officer.component */
    "./src/app/MyFolderwork/SuperAdmin/officer/officer.component.ts");

    var routes = [{
      path: '',
      component: _officer_component__WEBPACK_IMPORTED_MODULE_2__["OfficerComponent"]
    }];

    var OfficerRoutingModule = function OfficerRoutingModule() {
      _classCallCheck(this, OfficerRoutingModule);
    };

    OfficerRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: OfficerRoutingModule
    });
    OfficerRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function OfficerRoutingModule_Factory(t) {
        return new (t || OfficerRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](OfficerRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OfficerRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/MyFolderwork/SuperAdmin/officer/officer.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/MyFolderwork/SuperAdmin/officer/officer.component.ts ***!
    \**********************************************************************/

  /*! exports provided: OfficerComponent */

  /***/
  function srcAppMyFolderworkSuperAdminOfficerOfficerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OfficerComponent", function () {
      return OfficerComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _demo_dashboard_dash_default_chart_support_chart_data_1__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../demo/dashboard/dash-default/chart/support-chart-data-1 */
    "./src/app/demo/dashboard/dash-default/chart/support-chart-data-1.ts");
    /* harmony import */


    var _demo_dashboard_dash_default_chart_support_chart_data_2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../demo/dashboard/dash-default/chart/support-chart-data-2 */
    "./src/app/demo/dashboard/dash-default/chart/support-chart-data-2.ts");
    /* harmony import */


    var _demo_dashboard_dash_default_chart_seo_chart_1__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../demo/dashboard/dash-default/chart/seo-chart-1 */
    "./src/app/demo/dashboard/dash-default/chart/seo-chart-1.ts");
    /* harmony import */


    var _demo_dashboard_dash_default_chart_seo_chart_2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../demo/dashboard/dash-default/chart/seo-chart-2 */
    "./src/app/demo/dashboard/dash-default/chart/seo-chart-2.ts");
    /* harmony import */


    var _demo_dashboard_dash_default_chart_seo_chart_3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../demo/dashboard/dash-default/chart/seo-chart-3 */
    "./src/app/demo/dashboard/dash-default/chart/seo-chart-3.ts");
    /* harmony import */


    var _demo_dashboard_dash_default_chart_power_card_chart_1__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../demo/dashboard/dash-default/chart/power-card-chart-1 */
    "./src/app/demo/dashboard/dash-default/chart/power-card-chart-1.ts");
    /* harmony import */


    var _demo_dashboard_dash_default_chart_power_card_chart_2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../demo/dashboard/dash-default/chart/power-card-chart-2 */
    "./src/app/demo/dashboard/dash-default/chart/power-card-chart-2.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! src/environments/environment.prod */
    "./src/environments/environment.prod.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _theme_shared_components_modal_ui_modal_ui_modal_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../../../theme/shared/components/modal/ui-modal/ui-modal.component */
    "./src/app/theme/shared/components/modal/ui-modal/ui-modal.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _theme_shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ../../../theme/shared/components/card/card.component */
    "./src/app/theme/shared/components/card/card.component.ts");

    function OfficerComponent_div_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\u0627\u0644\u062A\u062D\u0642\u0642 \u0645\u0646 \u0628\u064A\u0627\u0646\u0627\u062A\u0643 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function OfficerComponent_tr_61_Template(rf, ctx) {
      if (rf & 1) {
        var _r185 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OfficerComponent_tr_61_Template_button_click_14_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r185);

          var item_r183 = ctx.$implicit;

          var ctx_r184 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r184.ediitOfficer(item_r183.userId);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "i", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OfficerComponent_tr_61_Template_i_click_15_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r185);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          var _r181 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](63);

          return _r181.show();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "i", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OfficerComponent_tr_61_Template_i_click_16_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r185);

          var item_r183 = ctx.$implicit;

          var ctx_r187 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r187.DeleteOfficer(item_r183.userId);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r183 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r183.userId);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r183.fullName);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r183.phone);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r183.email);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r183.userType);
      }
    }

    function OfficerComponent_div_72_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\u0627\u0644\u062A\u062D\u0642\u0642 \u0645\u0646 \u0628\u064A\u0627\u0646\u0627\u062A\u0643 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    var OfficerComponent =
    /*#__PURE__*/
    function () {
      function OfficerComponent(fb, http) {
        _classCallCheck(this, OfficerComponent);

        this.fb = fb;
        this.http = http;
        this.URL = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_10__["environment"].BaseUrl;
        this.verifOfficer = false;
        this.supportChartData1 = _demo_dashboard_dash_default_chart_support_chart_data_1__WEBPACK_IMPORTED_MODULE_2__["SupportChartData1"].supportChartData;
        this.supportChartData2 = _demo_dashboard_dash_default_chart_support_chart_data_2__WEBPACK_IMPORTED_MODULE_3__["SupportChartData2"].supportChartData;
        this.seoChartData1 = _demo_dashboard_dash_default_chart_seo_chart_1__WEBPACK_IMPORTED_MODULE_4__["SeoChart1"].seoChartData;
        this.seoChartData2 = _demo_dashboard_dash_default_chart_seo_chart_2__WEBPACK_IMPORTED_MODULE_5__["SeoChart2"].seoChartData;
        this.seoChartData3 = _demo_dashboard_dash_default_chart_seo_chart_3__WEBPACK_IMPORTED_MODULE_6__["SeoChart3"].seoChartData;
        this.powerCardChartData1 = _demo_dashboard_dash_default_chart_power_card_chart_1__WEBPACK_IMPORTED_MODULE_7__["PowerCardChart1"].powerCardChartData;
        this.powerCardChartData2 = _demo_dashboard_dash_default_chart_power_card_chart_2__WEBPACK_IMPORTED_MODULE_8__["PowerCardChart2"].powerCardChartData;
        this.officerForm = fb.group({
          phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required],
          fullName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required],
          email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required],
          password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required],
          confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required],
          userType: "officer",
          appartementId: "null",
          architectureId: "null"
        });
        this.getOfficerList();
        this.editForm = fb.group({
          userId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required],
          phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required],
          fullName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required],
          email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required],
          password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required],
          confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required],
          userType: "officer",
          appartementId: "null",
          architectureId: "null"
        });
      }

      _createClass(OfficerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "getOfficerList",
        value: function getOfficerList() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var _this = this;

            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.http.get(this.URL + 'User').subscribe(function (response) {
                      _this.listData = response.data.filter(function (x) {
                        return x.userType === "officer";
                      });
                    });

                  case 2:
                    return _context.abrupt("return", _context.sent);

                  case 3:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "onSubmit",
        value: function onSubmit(officerForm) {
          var _this2 = this;

          officerForm.patchValue({
            phone: '966' + officerForm.value.phone
          });
          this.http.post(this.URL + 'User', officerForm.value).subscribe(function (res) {
            window.location.reload();
          }, function (err) {
            console.log(err.error);
            _this2.verifOfficer = true;
          });
        }
      }, {
        key: "DeleteOfficer",
        value: function DeleteOfficer(id) {
          this.http.delete(this.URL + 'User' + '/' + id).subscribe(function (data) {
            window.location.reload();
          });
        }
      }, {
        key: "ediitOfficer",
        value: function ediitOfficer(id) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var _this3 = this;

            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    this.id = id;
                    _context2.next = 3;
                    return this.http.get(this.URL + 'User' + '/' + id).subscribe(function (data) {
                      _this3.editForm.setValue({
                        userId: data.userId,
                        phone: data.phone,
                        fullName: data.fullName,
                        email: data.email,
                        password: data.password,
                        confirmPassword: data.confirmPassword,
                        userType: data.userType,
                        appartementId: "null",
                        architectureId: "null"
                      });

                      console.log('Edit form data ', _this3.editForm.value);
                    });

                  case 3:
                    return _context2.abrupt("return", _context2.sent);

                  case 4:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "onEdit",
        value: function onEdit(editForm) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee3() {
            var _this4 = this;

            var checkPone;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    checkPone = editForm.value.phone.substring(0, 3);
                    console.log('substring', checkPone);

                    if (checkPone != '966') {
                      editForm.patchValue({
                        phone: '966' + editForm.value.phone
                      });
                    }

                    _context3.next = 5;
                    return this.http.put(this.URL + 'User' + '/' + this.id, editForm.value).subscribe(function (res) {
                      window.location.reload();
                    }, function (err) {
                      _this4.verifOfficer = true;
                    });

                  case 5:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }]);

      return OfficerComponent;
    }();

    OfficerComponent.ɵfac = function OfficerComponent_Factory(t) {
      return new (t || OfficerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClient"]));
    };

    OfficerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: OfficerComponent,
      selectors: [["app-officer"]],
      decls: 94,
      vars: 5,
      consts: [["AddOfficer", ""], [1, "app-modal-header"], [1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close", "basic-close", 3, "click"], ["aria-hidden", "true"], [1, "app-modal-body"], ["ngNativeValidate", "", 3, "formGroup", "ngSubmit"], ["role", "alert", "class", "alert alert-danger", 4, "ngIf"], [1, "form-group"], [1, "input-group", "mb-3"], [1, "input-group-prepend"], [1, "input-group-text"], ["type", "number", "placeholder", "5xxxxxxxx", "formControlName", "phone", "required", "", 1, "form-control"], ["type", "text", "placeholder", "\u0627\u0644\u0625\u0633\u0645 \u0643\u0627\u0645\u0644", "formControlName", "fullName", "required", "", 1, "form-control"], ["type", "email", "placeholder", "\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A", "formControlName", "email", "required", "", 1, "form-control"], ["type", "password", "placeholder", "\u0643\u0644\u0645\u0629 \u0627\u0644\u0633\u0631", "formControlName", "password", "required", "", 1, "form-control"], ["type", "password", "formControlName", "confirmPassword", "placeholder", " \u062A\u0623\u0643\u064A\u062F \u0643\u0644\u0645\u0629 \u0627\u0644\u0633\u0631", "required", "", 1, "form-control"], [1, "app-modal-footer"], ["type", "submit", "data-dismiss", "modal", 1, "btn", "btn-secondary", 3, "click"], ["type", "submit", 1, "btn", "btn-primary"], [1, "col-xl-12"], ["cardTitle", "\u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0645\u0648\u0638\u0641", "blockClass", "table-border-style"], [1, "btn", "btn-primary", "ng-tns-c99-43", 2, "position", "absolute", "right", "60px", "top", "8px", 3, "click"], [1, "table-responsive"], [1, "table", "table-striped"], [4, "ngFor", "ngForOf"], ["EditOfficer", ""], ["type", "text", "placeholder", "5xxxxxxxx", "formControlName", "phone", "required", "", 1, "form-control"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-secondary", 3, "click"], ["role", "alert", 1, "alert", "alert-danger"], [1, "badge", "m-r-5", "badge-success"], [1, "badge", "m-r-5", "badge-info"], [2, "background-color", "transparent", "border", "0 transparent", "outline", "0", 3, "click"], [1, "fas", "fa-edit", 2, "cursor", "pointer", "color", "#f1c40f", 3, "click"], [1, "fas", "fa-trash", 2, "padding-left", "5px", "cursor", "pointer", "color", "#e74c3c", 3, "click"]],
      template: function OfficerComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r188 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-ui-modal", null, 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h5", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\u0625\u0636\u0627\u0641\u0629 \u0645\u0648\u0638\u0641");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OfficerComponent_Template_button_click_5_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r188);

            var _r178 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1);

            return _r178.hide();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "form", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function OfficerComponent_Template_form_ngSubmit_9_listener($event) {
            return ctx.onSubmit(ctx.officerForm);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, OfficerComponent_div_10_Template, 2, 0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "\u0631\u0642\u0645 \u0627\u0644\u062C\u0648\u0627\u0644");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "966");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "\u0627\u0644\u0625\u0633\u0645 \u0643\u0627\u0645\u0644");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "\u0643\u0644\u0645\u0629 \u0627\u0644\u0633\u0631");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, " \u062A\u0623\u0643\u064A\u062F \u0643\u0644\u0645\u0629 \u0627\u0644\u0633\u0631");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OfficerComponent_Template_button_click_36_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r188);

            var _r178 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1);

            return _r178.hide();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "\u0625\u063A\u0644\u0627\u0642");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "\u0625\u0636\u0627\u0641\u0629 \u0645\u0648\u0638\u0641");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "app-card", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OfficerComponent_Template_span_click_42_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r188);

            var _r178 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1);

            return _r178.show();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "\u0625\u0636\u0627\u0641\u0629 \u0645\u0648\u0638\u0641");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "table", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "#");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "\u0627\u0644\u0625\u0633\u0645 \u0643\u0627\u0645\u0644");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "\u0631\u0642\u0645 \u0627\u0644\u062C\u0648\u0627\u0644");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "\u0648\u0638\u064A\u0641\u0629");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "\u0639\u0645\u0644");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](61, OfficerComponent_tr_61_Template, 17, 5, "tr", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "app-ui-modal", null, 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "h5", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, "\u062A\u0639\u062F\u064A\u0644 \u0645\u0648\u0638\u0641");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OfficerComponent_Template_button_click_67_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r188);

            var _r181 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](63);

            return _r181.hide();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "form", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function OfficerComponent_Template_form_ngSubmit_71_listener($event) {
            return ctx.onEdit(ctx.editForm);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](72, OfficerComponent_div_72_Template, 2, 0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, "\u0631\u0642\u0645 \u0627\u0644\u062C\u0648\u0627\u0644");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79, "966");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](80, "input", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](83, "\u0627\u0644\u0625\u0633\u0645 \u0643\u0627\u0645\u0644");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](84, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](87, "\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](88, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "button", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OfficerComponent_Template_button_click_90_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r188);

            var _r181 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](63);

            return _r181.hide();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](91, "\u0625\u063A\u0644\u0627\u0642");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](93, "\u062A\u0639\u062F\u064A\u0644 \u0645\u0648\u0638\u0641");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.officerForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.verifOfficer);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](51);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.listData);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.editForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.verifOfficer);
        }
      },
      directives: [_theme_shared_components_modal_ui_modal_ui_modal_component__WEBPACK_IMPORTED_MODULE_12__["UiModalComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["RequiredValidator"], _theme_shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_14__["CardComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL015Rm9sZGVyd29yay9TdXBlckFkbWluL29mZmljZXIvb2ZmaWNlci5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](OfficerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-officer',
          templateUrl: './officer.component.html',
          styleUrls: ['./officer.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormBuilder"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/MyFolderwork/SuperAdmin/officer/officer.module.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/MyFolderwork/SuperAdmin/officer/officer.module.ts ***!
    \*******************************************************************/

  /*! exports provided: OfficerModule */

  /***/
  function srcAppMyFolderworkSuperAdminOfficerOfficerModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OfficerModule", function () {
      return OfficerModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _officer_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./officer-routing.module */
    "./src/app/MyFolderwork/SuperAdmin/officer/officer-routing.module.ts");
    /* harmony import */


    var _officer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./officer.component */
    "./src/app/MyFolderwork/SuperAdmin/officer/officer.component.ts");
    /* harmony import */


    var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../theme/shared/shared.module */
    "./src/app/theme/shared/shared.module.ts");
    /* harmony import */


    var src_app_CORE__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/CORE */
    "./src/app/CORE/index.ts");

    var OfficerModule = function OfficerModule() {
      _classCallCheck(this, OfficerModule);
    };

    OfficerModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: OfficerModule
    });
    OfficerModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function OfficerModule_Factory(t) {
        return new (t || OfficerModule)();
      },
      providers: [src_app_CORE__WEBPACK_IMPORTED_MODULE_6__["HttpInterceptorProviders"]],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _officer_routing_module__WEBPACK_IMPORTED_MODULE_3__["OfficerRoutingModule"], _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](OfficerModule, {
        declarations: [_officer_component__WEBPACK_IMPORTED_MODULE_4__["OfficerComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _officer_routing_module__WEBPACK_IMPORTED_MODULE_3__["OfficerRoutingModule"], _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OfficerModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_officer_component__WEBPACK_IMPORTED_MODULE_4__["OfficerComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _officer_routing_module__WEBPACK_IMPORTED_MODULE_3__["OfficerRoutingModule"], _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]],
          providers: [src_app_CORE__WEBPACK_IMPORTED_MODULE_6__["HttpInterceptorProviders"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/demo/dashboard/dash-default/chart/power-card-chart-1.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/demo/dashboard/dash-default/chart/power-card-chart-1.ts ***!
    \*************************************************************************/

  /*! exports provided: PowerCardChart1 */

  /***/
  function srcAppDemoDashboardDashDefaultChartPowerCardChart1Ts(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PowerCardChart1", function () {
      return PowerCardChart1;
    });

    var PowerCardChart1 = function PowerCardChart1() {
      _classCallCheck(this, PowerCardChart1);
    };

    PowerCardChart1.powerCardChartData = {
      chart: {
        type: 'line',
        height: 75,
        sparkline: {
          enabled: true
        }
      },
      dataLabels: {
        enabled: false
      },
      colors: ['#ff5252'],
      stroke: {
        curve: 'smooth',
        width: 3
      },
      series: [{
        name: 'series1',
        data: [55, 35, 75, 50, 90, 50]
      }],
      yaxis: {
        min: 10,
        max: 100
      },
      tooltip: {
        theme: 'dark',
        fixed: {
          enabled: false
        },
        x: {
          show: false
        },
        y: {
          title: {
            formatter: function formatter(seriesName) {
              return 'Power';
            }
          }
        },
        marker: {
          show: false
        }
      }
    };
    /***/
  },

  /***/
  "./src/app/demo/dashboard/dash-default/chart/power-card-chart-2.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/demo/dashboard/dash-default/chart/power-card-chart-2.ts ***!
    \*************************************************************************/

  /*! exports provided: PowerCardChart2 */

  /***/
  function srcAppDemoDashboardDashDefaultChartPowerCardChart2Ts(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PowerCardChart2", function () {
      return PowerCardChart2;
    });

    var PowerCardChart2 = function PowerCardChart2() {
      _classCallCheck(this, PowerCardChart2);
    };

    PowerCardChart2.powerCardChartData = {
      chart: {
        type: 'line',
        height: 75,
        sparkline: {
          enabled: true
        }
      },
      dataLabels: {
        enabled: false
      },
      colors: ['#ffba57'],
      stroke: {
        curve: 'smooth',
        width: 3
      },
      series: [{
        name: 'series1',
        data: [55, 35, 75, 50, 90, 50]
      }],
      yaxis: {
        min: 10,
        max: 100
      },
      tooltip: {
        theme: 'dark',
        fixed: {
          enabled: false
        },
        x: {
          show: false
        },
        y: {
          title: {
            formatter: function formatter(seriesName) {
              return 'Power';
            }
          }
        },
        marker: {
          show: false
        }
      }
    };
    /***/
  },

  /***/
  "./src/app/demo/dashboard/dash-default/chart/seo-chart-1.ts":
  /*!******************************************************************!*\
    !*** ./src/app/demo/dashboard/dash-default/chart/seo-chart-1.ts ***!
    \******************************************************************/

  /*! exports provided: SeoChart1 */

  /***/
  function srcAppDemoDashboardDashDefaultChartSeoChart1Ts(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SeoChart1", function () {
      return SeoChart1;
    });

    var SeoChart1 = function SeoChart1() {
      _classCallCheck(this, SeoChart1);
    };

    SeoChart1.seoChartData = {
      chart: {
        type: 'area',
        height: 40,
        sparkline: {
          enabled: true
        }
      },
      dataLabels: {
        enabled: false
      },
      colors: ['#1abc9c'],
      fill: {
        type: 'solid',
        opacity: 0.3
      },
      markers: {
        size: 2,
        opacity: 0.9,
        colors: '#1abc9c',
        strokeColor: '#1abc9c',
        strokeWidth: 2,
        hover: {
          size: 4
        }
      },
      stroke: {
        curve: 'straight',
        width: 3
      },
      series: [{
        name: 'series1',
        data: [9, 66, 41, 89, 63, 25, 44, 12, 36, 20, 54, 25, 9]
      }],
      tooltip: {
        fixed: {
          enabled: false
        },
        x: {
          show: false
        },
        y: {
          title: {
            formatter: function formatter(seriesName) {
              return 'Visits :';
            }
          }
        },
        marker: {
          show: false
        }
      }
    };
    /***/
  },

  /***/
  "./src/app/demo/dashboard/dash-default/chart/seo-chart-2.ts":
  /*!******************************************************************!*\
    !*** ./src/app/demo/dashboard/dash-default/chart/seo-chart-2.ts ***!
    \******************************************************************/

  /*! exports provided: SeoChart2 */

  /***/
  function srcAppDemoDashboardDashDefaultChartSeoChart2Ts(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SeoChart2", function () {
      return SeoChart2;
    });

    var SeoChart2 = function SeoChart2() {
      _classCallCheck(this, SeoChart2);
    };

    SeoChart2.seoChartData = {
      chart: {
        type: 'bar',
        height: 40,
        sparkline: {
          enabled: true
        }
      },
      dataLabels: {
        enabled: false
      },
      colors: ['#2ecc71'],
      plotOptions: {
        bar: {
          columnWidth: '60%'
        }
      },
      series: [{
        data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54, 25, 66, 41, 89, 63]
      }],
      xaxis: {
        crosshairs: {
          width: 1
        }
      },
      tooltip: {
        fixed: {
          enabled: false
        },
        x: {
          show: false
        },
        y: {
          title: {
            formatter: function formatter(seriesName) {
              return 'Bounce Rate :';
            }
          }
        },
        marker: {
          show: false
        }
      }
    };
    /***/
  },

  /***/
  "./src/app/demo/dashboard/dash-default/chart/seo-chart-3.ts":
  /*!******************************************************************!*\
    !*** ./src/app/demo/dashboard/dash-default/chart/seo-chart-3.ts ***!
    \******************************************************************/

  /*! exports provided: SeoChart3 */

  /***/
  function srcAppDemoDashboardDashDefaultChartSeoChart3Ts(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SeoChart3", function () {
      return SeoChart3;
    });

    var SeoChart3 = function SeoChart3() {
      _classCallCheck(this, SeoChart3);
    };

    SeoChart3.seoChartData = {
      chart: {
        type: 'area',
        height: 40,
        sparkline: {
          enabled: true
        }
      },
      dataLabels: {
        enabled: false
      },
      colors: ['#ff5252'],
      fill: {
        type: 'solid',
        opacity: 0.3
      },
      markers: {
        size: 2,
        opacity: 0.9,
        colors: '#ff5252',
        strokeColor: '#ff5252',
        strokeWidth: 2,
        hover: {
          size: 4
        }
      },
      stroke: {
        curve: 'straight',
        width: 3
      },
      series: [{
        name: 'series1',
        data: [9, 66, 41, 89, 63, 25, 44, 12, 36, 20, 54, 25, 9]
      }],
      tooltip: {
        fixed: {
          enabled: false
        },
        x: {
          show: false
        },
        y: {
          title: {
            formatter: function formatter(seriesName) {
              return 'Visits :';
            }
          }
        },
        marker: {
          show: false
        }
      }
    };
    /***/
  },

  /***/
  "./src/app/demo/dashboard/dash-default/chart/support-chart-data-1.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/demo/dashboard/dash-default/chart/support-chart-data-1.ts ***!
    \***************************************************************************/

  /*! exports provided: SupportChartData1 */

  /***/
  function srcAppDemoDashboardDashDefaultChartSupportChartData1Ts(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SupportChartData1", function () {
      return SupportChartData1;
    });

    var SupportChartData1 = function SupportChartData1() {
      _classCallCheck(this, SupportChartData1);
    };

    SupportChartData1.supportChartData = {
      chart: {
        type: 'area',
        height: 65,
        sparkline: {
          enabled: true
        }
      },
      colors: ['#1abc9c'],
      stroke: {
        curve: 'smooth',
        width: 2
      },
      series: [{
        data: [0, 20, 10, 45, 30, 55, 20, 30, 0]
      }],
      tooltip: {
        fixed: {
          enabled: false
        },
        x: {
          show: false
        },
        y: {
          title: {
            formatter: function formatter(seriesName) {
              return 'Ticket ';
            }
          }
        },
        marker: {
          show: false
        }
      }
    };
    /***/
  },

  /***/
  "./src/app/demo/dashboard/dash-default/chart/support-chart-data-2.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/demo/dashboard/dash-default/chart/support-chart-data-2.ts ***!
    \***************************************************************************/

  /*! exports provided: SupportChartData2 */

  /***/
  function srcAppDemoDashboardDashDefaultChartSupportChartData2Ts(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SupportChartData2", function () {
      return SupportChartData2;
    });

    var SupportChartData2 = function SupportChartData2() {
      _classCallCheck(this, SupportChartData2);
    };

    SupportChartData2.supportChartData = {
      chart: {
        type: 'area',
        height: 100,
        sparkline: {
          enabled: true
        }
      },
      colors: ['#2ecc71'],
      stroke: {
        curve: 'smooth',
        width: 2
      },
      series: [{
        data: [0, 20, 10, 45, 30, 55, 20, 30, 0]
      }],
      tooltip: {
        fixed: {
          enabled: false
        },
        x: {
          show: false
        },
        y: {
          title: {
            formatter: function formatter(seriesName) {
              return 'Ticket ';
            }
          }
        },
        marker: {
          show: false
        }
      }
    };
    /***/
  }
}]);
//# sourceMappingURL=MyFolderwork-SuperAdmin-officer-officer-module-es5.js.map