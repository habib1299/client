function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["MyFolderwork-SuperAdmin-architecture-architecture-module"], {
  /***/
  "./src/app/MyFolderwork/SuperAdmin/architecture/architcture-routing.module.ts":
  /*!************************************************************************************!*\
    !*** ./src/app/MyFolderwork/SuperAdmin/architecture/architcture-routing.module.ts ***!
    \************************************************************************************/

  /*! exports provided: ArchitectureRoutingModule */

  /***/
  function srcAppMyFolderworkSuperAdminArchitectureArchitctureRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ArchitectureRoutingModule", function () {
      return ArchitectureRoutingModule;
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


    var _architecture_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./architecture.component */
    "./src/app/MyFolderwork/SuperAdmin/architecture/architecture.component.ts");

    var routes = [{
      path: '',
      component: _architecture_component__WEBPACK_IMPORTED_MODULE_2__["ArchitectureComponent"]
    }];

    var ArchitectureRoutingModule = function ArchitectureRoutingModule() {
      _classCallCheck(this, ArchitectureRoutingModule);
    };

    ArchitectureRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ArchitectureRoutingModule
    });
    ArchitectureRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ArchitectureRoutingModule_Factory(t) {
        return new (t || ArchitectureRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ArchitectureRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ArchitectureRoutingModule, [{
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
  "./src/app/MyFolderwork/SuperAdmin/architecture/architecture.component.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/MyFolderwork/SuperAdmin/architecture/architecture.component.ts ***!
    \********************************************************************************/

  /*! exports provided: ArchitectureComponent */

  /***/
  function srcAppMyFolderworkSuperAdminArchitectureArchitectureComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ArchitectureComponent", function () {
      return ArchitectureComponent;
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


    var _theme_shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../../../theme/shared/components/card/card.component */
    "./src/app/theme/shared/components/card/card.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ArchitectureComponent_tr_34_Template(rf, ctx) {
      if (rf & 1) {
        var _r150 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ArchitectureComponent_tr_34_Template_button_click_6_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r150);

          var item_r148 = ctx.$implicit;

          var ctx_r149 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r149.getArchitecutreById(item_r148.architectureId);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "i", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ArchitectureComponent_tr_34_Template_i_click_7_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r150);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          var _r147 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](36);

          return _r147.show();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "i", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ArchitectureComponent_tr_34_Template_i_click_8_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r150);

          var item_r148 = ctx.$implicit;

          var ctx_r152 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r152.DeleteArchitecture(item_r148.architectureId);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r148 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r148.architectureId);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r148.architectureName);
      }
    }

    var ArchitectureComponent =
    /*#__PURE__*/
    function () {
      function ArchitectureComponent(http, fb) {
        _classCallCheck(this, ArchitectureComponent);

        this.http = http;
        this.fb = fb;
        this.URL = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_10__["environment"].BaseUrl;
        this.supportChartData1 = _demo_dashboard_dash_default_chart_support_chart_data_1__WEBPACK_IMPORTED_MODULE_2__["SupportChartData1"].supportChartData;
        this.supportChartData2 = _demo_dashboard_dash_default_chart_support_chart_data_2__WEBPACK_IMPORTED_MODULE_3__["SupportChartData2"].supportChartData;
        this.seoChartData1 = _demo_dashboard_dash_default_chart_seo_chart_1__WEBPACK_IMPORTED_MODULE_4__["SeoChart1"].seoChartData;
        this.seoChartData2 = _demo_dashboard_dash_default_chart_seo_chart_2__WEBPACK_IMPORTED_MODULE_5__["SeoChart2"].seoChartData;
        this.seoChartData3 = _demo_dashboard_dash_default_chart_seo_chart_3__WEBPACK_IMPORTED_MODULE_6__["SeoChart3"].seoChartData;
        this.powerCardChartData1 = _demo_dashboard_dash_default_chart_power_card_chart_1__WEBPACK_IMPORTED_MODULE_7__["PowerCardChart1"].powerCardChartData;
        this.powerCardChartData2 = _demo_dashboard_dash_default_chart_power_card_chart_2__WEBPACK_IMPORTED_MODULE_8__["PowerCardChart2"].powerCardChartData;
        this.architectureForm = fb.group({
          architectureName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required]
        });
        this.getArchitectureList();
        this.editArchitectureForm = fb.group({
          architectureId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required],
          architectureName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required]
        });
      }

      _createClass(ArchitectureComponent, [{
        key: "onSubmit",
        value: function onSubmit(architectureForm) {
          this.http.post(this.URL + 'Architecture', architectureForm.value).subscribe(function (data) {
            console.log('data : ', data);
            window.location.reload();
          });
        }
      }, {
        key: "DeleteArchitecture",
        value: function DeleteArchitecture(id) {
          this.http.delete(this.URL + 'Architecture' + '/' + id).subscribe(function (data) {
            console.log(data);
            window;
            location.reload();
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "getArchitectureList",
        value: function getArchitectureList() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var _this = this;

            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.http.get(this.URL + 'Architecture').subscribe(function (response) {
                      _this.listData = response.data;
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
        key: "getArchitecutreById",
        value: function getArchitecutreById(id) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var _this2 = this;

            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    this.id = id;
                    _context2.next = 3;
                    return this.http.get(this.URL + 'Architecture' + '/' + this.id).subscribe(function (data) {
                      _this2.editArchitectureForm.setValue({
                        architectureId: data.architectureId,
                        architectureName: data.architectureName
                      });
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
        value: function onEdit(editArchitectureForm) {
          this.http.put(this.URL + 'Architecture' + '/' + this.id, editArchitectureForm.value).subscribe(function (data) {
            window.location.reload();
          });
        }
      }]);

      return ArchitectureComponent;
    }();

    ArchitectureComponent.ɵfac = function ArchitectureComponent_Factory(t) {
      return new (t || ArchitectureComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormBuilder"]));
    };

    ArchitectureComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ArchitectureComponent,
      selectors: [["app-architecture"]],
      decls: 54,
      vars: 3,
      consts: [["AddOfficer", ""], [1, "app-modal-header"], [1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close", "basic-close", 3, "click"], ["aria-hidden", "true"], [1, "app-modal-body"], ["ngNativeValidate", "", 3, "formGroup", "ngSubmit"], [1, "form-group"], ["for", "inputAddress"], ["type", "text", "formControlName", "architectureName", "placeholder", "\u0627\u0644\u0625\u0633\u0645 \u0643\u0627\u0645\u0644", "required", "", 1, "form-control"], [1, "app-modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-secondary", 3, "click"], ["type", "submit", 1, "btn", "btn-primary"], [1, "col-xl-12"], ["cardTitle", "\u0625\u062F\u0627\u0631\u0629 \u0639\u0645\u0627\u0631\u0629", "blockClass", "table-border-style"], [1, "btn", "btn-primary", "ng-tns-c99-43", 2, "position", "absolute", "right", "60px", "top", "8px", 3, "click"], [1, "table-responsive"], [1, "table", "table-striped"], [4, "ngFor", "ngForOf"], ["EditOfficer", ""], [2, "border", "0", "outline", "0", "background-color", "transparent", 3, "click"], [1, "fas", "fa-edit", 2, "cursor", "pointer", "color", "#f1c40f", 3, "click"], [1, "fas", "fa-trash", 2, "padding-left", "5px", "cursor", "pointer", "color", "#e74c3c", 3, "click"]],
      template: function ArchitectureComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r153 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-ui-modal", null, 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h5", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\u0625\u0636\u0627\u0641\u0629 \u0639\u0645\u0627\u0631\u0629");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ArchitectureComponent_Template_button_click_5_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r153);

            var _r145 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1);

            return _r145.hide();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "form", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function ArchitectureComponent_Template_form_ngSubmit_9_listener($event) {
            return ctx.onSubmit(ctx.architectureForm);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "\u0625\u0633\u0645 \u0627\u0644\u0639\u0645\u0627\u0631\u0629");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ArchitectureComponent_Template_button_click_15_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r153);

            var _r145 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1);

            return _r145.hide();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "\u0625\u063A\u0644\u0627\u0642");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "\u0625\u0636\u0627\u0641\u0629 \u0639\u0645\u0627\u0631\u0629");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "app-card", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ArchitectureComponent_Template_span_click_21_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r153);

            var _r145 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1);

            return _r145.show();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "\u0625\u0636\u0627\u0641\u0629 \u0639\u0645\u0627\u0631\u0629");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "table", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "#");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "\u0625\u0633\u0645 \u0627\u0644\u0639\u0645\u0627\u0631\u0629");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "\u0639\u0645\u0644");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](34, ArchitectureComponent_tr_34_Template, 9, 2, "tr", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "app-ui-modal", null, 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "h5", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "\u062A\u0639\u062F\u064A\u0644 \u0639\u0645\u0627\u0631\u0629");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ArchitectureComponent_Template_button_click_40_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r153);

            var _r147 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](36);

            return _r147.hide();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "form", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function ArchitectureComponent_Template_form_ngSubmit_44_listener($event) {
            return ctx.onEdit(ctx.editArchitectureForm);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "\u0625\u0633\u0645 \u0627\u0644\u0639\u0645\u0627\u0631\u0629");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](48, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ArchitectureComponent_Template_button_click_50_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r153);

            var _r147 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](36);

            return _r147.hide();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "\u0625\u063A\u0644\u0627\u0642");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "\u062A\u0639\u062F\u064A\u0644 \u0639\u0645\u0627\u0631\u0629");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.architectureForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.listData);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.editArchitectureForm);
        }
      },
      directives: [_theme_shared_components_modal_ui_modal_ui_modal_component__WEBPACK_IMPORTED_MODULE_12__["UiModalComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["RequiredValidator"], _theme_shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_13__["CardComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgForOf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL015Rm9sZGVyd29yay9TdXBlckFkbWluL2FyY2hpdGVjdHVyZS9hcmNoaXRlY3R1cmUuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ArchitectureComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-architecture',
          templateUrl: './architecture.component.html',
          styleUrls: ['./architecture.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClient"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormBuilder"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/MyFolderwork/SuperAdmin/architecture/architecture.module.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/MyFolderwork/SuperAdmin/architecture/architecture.module.ts ***!
    \*****************************************************************************/

  /*! exports provided: ArchitectureModule */

  /***/
  function srcAppMyFolderworkSuperAdminArchitectureArchitectureModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ArchitectureModule", function () {
      return ArchitectureModule;
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


    var _architcture_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./architcture-routing.module */
    "./src/app/MyFolderwork/SuperAdmin/architecture/architcture-routing.module.ts");
    /* harmony import */


    var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../theme/shared/shared.module */
    "./src/app/theme/shared/shared.module.ts");
    /* harmony import */


    var _architecture_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./architecture.component */
    "./src/app/MyFolderwork/SuperAdmin/architecture/architecture.component.ts");
    /* harmony import */


    var src_app_CORE__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/CORE */
    "./src/app/CORE/index.ts");

    var ArchitectureModule = function ArchitectureModule() {
      _classCallCheck(this, ArchitectureModule);
    };

    ArchitectureModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ArchitectureModule
    });
    ArchitectureModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ArchitectureModule_Factory(t) {
        return new (t || ArchitectureModule)();
      },
      providers: [src_app_CORE__WEBPACK_IMPORTED_MODULE_6__["HttpInterceptorProviders"]],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _architcture_routing_module__WEBPACK_IMPORTED_MODULE_3__["ArchitectureRoutingModule"], _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ArchitectureModule, {
        declarations: [_architecture_component__WEBPACK_IMPORTED_MODULE_5__["ArchitectureComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _architcture_routing_module__WEBPACK_IMPORTED_MODULE_3__["ArchitectureRoutingModule"], _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ArchitectureModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_architecture_component__WEBPACK_IMPORTED_MODULE_5__["ArchitectureComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _architcture_routing_module__WEBPACK_IMPORTED_MODULE_3__["ArchitectureRoutingModule"], _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]],
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
//# sourceMappingURL=MyFolderwork-SuperAdmin-architecture-architecture-module-es5.js.map