(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["MyFolderwork-Officer-oarchitecture-oarchitecture-module"],{

/***/ "./src/app/MyFolderwork/Officer/oarchitecture/oarchitecture-routing.module.ts":
/*!************************************************************************************!*\
  !*** ./src/app/MyFolderwork/Officer/oarchitecture/oarchitecture-routing.module.ts ***!
  \************************************************************************************/
/*! exports provided: OarchitectureRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OarchitectureRoutingModule", function() { return OarchitectureRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _oarchitecture_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./oarchitecture.component */ "./src/app/MyFolderwork/Officer/oarchitecture/oarchitecture.component.ts");





const routes = [
    {
        path: '',
        component: _oarchitecture_component__WEBPACK_IMPORTED_MODULE_2__["OarchitectureComponent"]
    }
];
class OarchitectureRoutingModule {
}
OarchitectureRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: OarchitectureRoutingModule });
OarchitectureRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function OarchitectureRoutingModule_Factory(t) { return new (t || OarchitectureRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](OarchitectureRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OarchitectureRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/MyFolderwork/Officer/oarchitecture/oarchitecture.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/MyFolderwork/Officer/oarchitecture/oarchitecture.component.ts ***!
  \*******************************************************************************/
/*! exports provided: OarchitectureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OarchitectureComponent", function() { return OarchitectureComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _demo_dashboard_dash_default_chart_support_chart_data_1__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../demo/dashboard/dash-default/chart/support-chart-data-1 */ "./src/app/demo/dashboard/dash-default/chart/support-chart-data-1.ts");
/* harmony import */ var _demo_dashboard_dash_default_chart_support_chart_data_2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../demo/dashboard/dash-default/chart/support-chart-data-2 */ "./src/app/demo/dashboard/dash-default/chart/support-chart-data-2.ts");
/* harmony import */ var _demo_dashboard_dash_default_chart_seo_chart_1__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../demo/dashboard/dash-default/chart/seo-chart-1 */ "./src/app/demo/dashboard/dash-default/chart/seo-chart-1.ts");
/* harmony import */ var _demo_dashboard_dash_default_chart_seo_chart_2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../demo/dashboard/dash-default/chart/seo-chart-2 */ "./src/app/demo/dashboard/dash-default/chart/seo-chart-2.ts");
/* harmony import */ var _demo_dashboard_dash_default_chart_seo_chart_3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../demo/dashboard/dash-default/chart/seo-chart-3 */ "./src/app/demo/dashboard/dash-default/chart/seo-chart-3.ts");
/* harmony import */ var _demo_dashboard_dash_default_chart_power_card_chart_1__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../demo/dashboard/dash-default/chart/power-card-chart-1 */ "./src/app/demo/dashboard/dash-default/chart/power-card-chart-1.ts");
/* harmony import */ var _demo_dashboard_dash_default_chart_power_card_chart_2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../demo/dashboard/dash-default/chart/power-card-chart-2 */ "./src/app/demo/dashboard/dash-default/chart/power-card-chart-2.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/environments/environment.prod */ "./src/environments/environment.prod.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _theme_shared_components_modal_ui_modal_ui_modal_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../theme/shared/components/modal/ui-modal/ui-modal.component */ "./src/app/theme/shared/components/modal/ui-modal/ui-modal.component.ts");
/* harmony import */ var _theme_shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../theme/shared/components/card/card.component */ "./src/app/theme/shared/components/card/card.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

















function OarchitectureComponent_tr_34_Template(rf, ctx) { if (rf & 1) {
    const _r74 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OarchitectureComponent_tr_34_Template_button_click_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r74); const item_r72 = ctx.$implicit; const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r73.getArchitecutreById(item_r72.architectureId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OarchitectureComponent_tr_34_Template_i_click_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r74); _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); const _r71 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](36); return _r71.show(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r72 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r72.architectureId);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r72.architectureName);
} }
class OarchitectureComponent {
    constructor(http, fb) {
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
    onSubmit(architectureForm) {
        this.http.post(this.URL + 'Architecture', architectureForm.value).subscribe(data => {
            console.log('data : ', data);
            window.location.reload();
        });
    }
    DeleteArchitecture(id) {
        this.http.delete(this.URL + 'Architecture' + '/' + id).subscribe(data => {
            console.log(data);
            window;
            location.reload();
        });
    }
    ngOnInit() {
    }
    getArchitectureList() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.http.get(this.URL + 'Architecture').subscribe(response => {
                this.listData = response.data;
            });
        });
    }
    getArchitecutreById(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.id = id;
            return yield this.http.get(this.URL + 'Architecture' + '/' + this.id).subscribe(data => {
                this.editArchitectureForm.setValue({ architectureId: data.architectureId, architectureName: data.architectureName });
            });
        });
    }
    onEdit(editArchitectureForm) {
        this.http.put(this.URL + 'Architecture' + '/' + this.id, editArchitectureForm.value).subscribe(data => {
            window.location.reload();
        });
    }
}
OarchitectureComponent.ɵfac = function OarchitectureComponent_Factory(t) { return new (t || OarchitectureComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormBuilder"])); };
OarchitectureComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: OarchitectureComponent, selectors: [["app-oarchitecture"]], decls: 54, vars: 3, consts: [["AddOfficer", ""], [1, "app-modal-header"], [1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close", "basic-close", 3, "click"], ["aria-hidden", "true"], [1, "app-modal-body"], ["ngNativeValidate", "", 3, "formGroup", "ngSubmit"], [1, "form-group"], ["for", "inputAddress"], ["type", "text", "formControlName", "architectureName", "placeholder", "\u0627\u0644\u0625\u0633\u0645 \u0643\u0627\u0645\u0644", "required", "", 1, "form-control"], [1, "app-modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-secondary", 3, "click"], ["type", "submit", 1, "btn", "btn-primary"], [1, "col-xl-12"], ["cardTitle", "\u0625\u062F\u0627\u0631\u0629 \u0639\u0645\u0627\u0631\u0629", "blockClass", "table-border-style"], [1, "btn", "btn-primary", "ng-tns-c99-43", 2, "position", "absolute", "right", "60px", "top", "8px", 3, "click"], [1, "table-responsive"], [1, "table", "table-striped"], [4, "ngFor", "ngForOf"], ["EditOfficer", ""], [2, "border", "0", "outline", "0", "background-color", "transparent", 3, "click"], [1, "fas", "fa-edit", 2, "cursor", "pointer", "color", "#f1c40f", 3, "click"]], template: function OarchitectureComponent_Template(rf, ctx) { if (rf & 1) {
        const _r76 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-ui-modal", null, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h5", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\u0625\u0636\u0627\u0641\u0629 \u0639\u0645\u0627\u0631\u0629");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OarchitectureComponent_Template_button_click_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r76); const _r69 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1); return _r69.hide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function OarchitectureComponent_Template_form_ngSubmit_9_listener($event) { return ctx.onSubmit(ctx.architectureForm); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "\u0625\u0633\u0645 \u0627\u0644\u0639\u0645\u0627\u0631\u0629");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OarchitectureComponent_Template_button_click_15_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r76); const _r69 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1); return _r69.hide(); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OarchitectureComponent_Template_span_click_21_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r76); const _r69 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1); return _r69.show(); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](34, OarchitectureComponent_tr_34_Template, 8, 2, "tr", 18);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OarchitectureComponent_Template_button_click_40_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r76); const _r71 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](36); return _r71.hide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function OarchitectureComponent_Template_form_ngSubmit_44_listener($event) { return ctx.onEdit(ctx.editArchitectureForm); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "\u0625\u0633\u0645 \u0627\u0644\u0639\u0645\u0627\u0631\u0629");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](48, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OarchitectureComponent_Template_button_click_50_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r76); const _r71 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](36); return _r71.hide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "\u0625\u063A\u0644\u0627\u0642");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "\u062A\u0639\u062F\u064A\u0644 \u0639\u0645\u0627\u0631\u0629");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.architectureForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.listData);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.editArchitectureForm);
    } }, directives: [_theme_shared_components_modal_ui_modal_ui_modal_component__WEBPACK_IMPORTED_MODULE_12__["UiModalComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["RequiredValidator"], _theme_shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_13__["CardComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL015Rm9sZGVyd29yay9PZmZpY2VyL29hcmNoaXRlY3R1cmUvb2FyY2hpdGVjdHVyZS5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](OarchitectureComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-oarchitecture',
                templateUrl: './oarchitecture.component.html',
                styleUrls: ['./oarchitecture.component.scss']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClient"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "./src/app/MyFolderwork/Officer/oarchitecture/oarchitecture.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/MyFolderwork/Officer/oarchitecture/oarchitecture.module.ts ***!
  \****************************************************************************/
/*! exports provided: OarchitectureModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OarchitectureModule", function() { return OarchitectureModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _oarchitecture_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./oarchitecture-routing.module */ "./src/app/MyFolderwork/Officer/oarchitecture/oarchitecture-routing.module.ts");
/* harmony import */ var _oarchitecture_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./oarchitecture.component */ "./src/app/MyFolderwork/Officer/oarchitecture/oarchitecture.component.ts");
/* harmony import */ var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/__ivy_ngcc__/fesm2015/agm-core.js");
/* harmony import */ var src_app_CORE__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/CORE */ "./src/app/CORE/index.ts");










class OarchitectureModule {
}
OarchitectureModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: OarchitectureModule });
OarchitectureModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function OarchitectureModule_Factory(t) { return new (t || OarchitectureModule)(); }, providers: [src_app_CORE__WEBPACK_IMPORTED_MODULE_7__["HttpInterceptorProviders"]], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _oarchitecture_routing_module__WEBPACK_IMPORTED_MODULE_3__["OarchitectureRoutingModule"],
            _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _agm_core__WEBPACK_IMPORTED_MODULE_6__["AgmCoreModule"].forRoot({ apiKey: 'AIzaSyCE0nvTeHBsiQIrbpMVTe489_O5mwyqofk' })
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](OarchitectureModule, { declarations: [_oarchitecture_component__WEBPACK_IMPORTED_MODULE_4__["OarchitectureComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _oarchitecture_routing_module__WEBPACK_IMPORTED_MODULE_3__["OarchitectureRoutingModule"],
        _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _agm_core__WEBPACK_IMPORTED_MODULE_6__["AgmCoreModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OarchitectureModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _oarchitecture_routing_module__WEBPACK_IMPORTED_MODULE_3__["OarchitectureRoutingModule"],
                    _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    _agm_core__WEBPACK_IMPORTED_MODULE_6__["AgmCoreModule"].forRoot({ apiKey: 'AIzaSyCE0nvTeHBsiQIrbpMVTe489_O5mwyqofk' })
                ],
                declarations: [_oarchitecture_component__WEBPACK_IMPORTED_MODULE_4__["OarchitectureComponent"]],
                providers: [src_app_CORE__WEBPACK_IMPORTED_MODULE_7__["HttpInterceptorProviders"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=MyFolderwork-Officer-oarchitecture-oarchitecture-module-es2015.js.map