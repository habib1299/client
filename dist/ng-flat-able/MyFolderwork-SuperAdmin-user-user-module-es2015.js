(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["MyFolderwork-SuperAdmin-user-user-module"],{

/***/ "./src/app/MyFolderwork/SuperAdmin/user/user-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/MyFolderwork/SuperAdmin/user/user-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: UserRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRoutingModule", function() { return UserRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _user_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.component */ "./src/app/MyFolderwork/SuperAdmin/user/user.component.ts");





const routes = [
    {
        path: '',
        component: _user_component__WEBPACK_IMPORTED_MODULE_2__["UserComponent"]
    }
];
class UserRoutingModule {
}
UserRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: UserRoutingModule });
UserRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function UserRoutingModule_Factory(t) { return new (t || UserRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UserRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/MyFolderwork/SuperAdmin/user/user.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/MyFolderwork/SuperAdmin/user/user.component.ts ***!
  \****************************************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _theme_shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../theme/shared/components/card/card.component */ "./src/app/theme/shared/components/card/card.component.ts");

















function UserComponent_option_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r196 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", item_r196.architectureId);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r196.architectureName, " ");
} }
function UserComponent_option_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r197 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", item_r197.appartementId);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r197.appartementNumber, " ");
} }
function UserComponent_tr_74_Template(rf, ctx) { if (rf & 1) {
    const _r200 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 35);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserComponent_tr_74_Template_button_click_20_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r200); const item_r198 = ctx.$implicit; const ctx_r199 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r199.ediitUser(item_r198.userId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserComponent_tr_74_Template_i_click_21_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r200); _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); const _r193 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](76); return _r193.show(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserComponent_tr_74_Template_i_click_22_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r200); const item_r198 = ctx.$implicit; const ctx_r202 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r202.DeleteUser(item_r198.userId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r198 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r198.userId);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r198.fullName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r198.phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r198.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r198.architectureId.architectureName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r198.appartementId.appartementNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r198.userType);
} }
function UserComponent_option_105_Template(rf, ctx) { if (rf & 1) {
    const _r205 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function UserComponent_option_105_Template_option_change_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r205); const ctx_r204 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r204.onChange($event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r203 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngValue", item_r203.architectureId);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r203.architectureName, " ");
} }
function UserComponent_option_110_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r206 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngValue", item_r206.appartementId);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r206.appartementNumber, " ");
} }
class UserComponent {
    constructor(fb, http) {
        this.fb = fb;
        this.http = http;
        this.URL = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_10__["environment"].BaseUrl;
        this.supportChartData1 = _demo_dashboard_dash_default_chart_support_chart_data_1__WEBPACK_IMPORTED_MODULE_2__["SupportChartData1"].supportChartData;
        this.supportChartData2 = _demo_dashboard_dash_default_chart_support_chart_data_2__WEBPACK_IMPORTED_MODULE_3__["SupportChartData2"].supportChartData;
        this.seoChartData1 = _demo_dashboard_dash_default_chart_seo_chart_1__WEBPACK_IMPORTED_MODULE_4__["SeoChart1"].seoChartData;
        this.seoChartData2 = _demo_dashboard_dash_default_chart_seo_chart_2__WEBPACK_IMPORTED_MODULE_5__["SeoChart2"].seoChartData;
        this.seoChartData3 = _demo_dashboard_dash_default_chart_seo_chart_3__WEBPACK_IMPORTED_MODULE_6__["SeoChart3"].seoChartData;
        this.powerCardChartData1 = _demo_dashboard_dash_default_chart_power_card_chart_1__WEBPACK_IMPORTED_MODULE_7__["PowerCardChart1"].powerCardChartData;
        this.powerCardChartData2 = _demo_dashboard_dash_default_chart_power_card_chart_2__WEBPACK_IMPORTED_MODULE_8__["PowerCardChart2"].powerCardChartData;
        this.userForm = fb.group({
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required],
            fullName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required],
            confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required],
            userType: "user",
            appartementId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required],
            architectureId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required]
        });
        this.getOfficerList();
        this.getAppartementList();
        this.getArchitectureList();
        this.editForm = fb.group({
            userId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required],
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required],
            fullName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required],
            confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required],
            userType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required],
            appartementId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required],
            architectureId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required]
        });
        // this.getAppartementList();
    }
    ngOnInit() {
    }
    getOfficerList() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.http.get(this.URL + 'User').subscribe(res => {
                this.listData = res.data.filter(x => x.userType === "user");
                for (let i = 0; i < this.listData.length; i++) {
                    this.listData[i].appartementId = JSON.parse(this.listData[i].appartementId);
                    this.listData[i].architectureId = JSON.parse(this.listData[i].architectureId).data;
                    console.log(this.listData[i].architectureId);
                }
            });
        });
    }
    onSubmit(userForm) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const archID = userForm.value.architectureId;
            const apprtId = userForm.value.appartementId;
            userForm.patchValue({ phone: '966' + userForm.value.phone });
            // get architecture By Id
            yield this.http.get(this.URL + 'Architecture' + '/' + archID).subscribe((data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                userForm.patchValue({ architectureId: JSON.stringify(data) });
                // get appartementById
                yield this.http.get(this.URL + 'Appartement' + '/' + apprtId).subscribe((data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    userForm.patchValue({ appartementId: JSON.stringify(data) });
                    let x = JSON.parse(userForm.value.appartementId);
                    yield this.http.post(this.URL + 'User', userForm.value).subscribe((data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                        yield this.setAppartementStatusToTrue(x.appartementId, x);
                    }));
                }));
            }));
            setTimeout(() => {
                window.location.reload();
            }, 1500);
        });
    }
    setAppartementStatusToTrue(id, data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.appartementForm = {
                'appartementId': data.appartementId,
                'appartementNumber': data.appartementNumber,
                'appartementStatus': true,
                'appartementPercent': data.appartementPercent,
                'architectureId': data.architectureId,
                'appartementFacturePrix': data.appartementFacturePrix,
                'appartementFactureImage': data.appartementFactureImage
            };
            yield this.http.put(this.URL + 'Appartement' + '/' + id, this.appartementForm).subscribe(data => {
            });
        });
    }
    getAppartementList() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.http.get(this.URL + 'Appartement').subscribe(res => {
                this.appartementEditList = res.data;
                // console.log('appartementList',res.data)
            });
        });
    }
    getArchitectureList() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.http.get(this.URL + 'Architecture').subscribe(res => {
                this.architectureList = res.data;
                // console.log(res.data)
            });
        });
    }
    DeleteUser(id) {
        this.http.delete(this.URL + 'User' + '/' + id).subscribe(data => {
            window.location.reload();
        });
    }
    onEdit(editForm) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var checkPone = editForm.value.phone.substring(0, 3);
            if (checkPone != '966') {
                editForm.patchValue({ phone: '966' + editForm.value.phone });
            }
            const archID = editForm.value.architectureId;
            const apprtId = editForm.value.appartementId;
            // get architecture By Id
            yield this.http.get(this.URL + 'Architecture' + '/' + archID).subscribe((data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                editForm.patchValue({ architectureId: JSON.stringify(data) });
                // get appartementById
                yield this.http.get(this.URL + 'Appartement' + '/' + apprtId).subscribe((data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    editForm.patchValue({ appartementId: JSON.stringify(data) });
                    let x = JSON.parse(editForm.value.appartementId);
                    yield this.http.put(this.URL + 'User' + '/' + this.id, editForm.value).subscribe((data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                        // await this.getAppartementDataById(editForm.value.appartementId);
                        yield this.setAppartementStatusToTrue(x.appartementId, x);
                    }));
                }));
            }));
            setTimeout(() => {
                window.location.reload();
            }, 1500);
        });
    }
    onChange(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let internData;
            yield this.http.get(this.URL + "Appartement").subscribe((res) => {
                internData = res.data;
                for (let i = 0; i < internData.length; i++) {
                    internData[i].architectureId = JSON.parse(internData[i].architectureId);
                }
                this.appartementList = internData.filter((x) => x.architectureId.architectureId == event &&
                    x.appartementStatus == false);
            });
        });
    }
    ediitUser(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.id = id;
            return yield this.http.get(this.URL + 'User' + '/' + this.id).subscribe((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const constAppartementId = JSON.parse(res.appartementId).appartementId;
                const constArchitectureId = JSON.parse(res.architectureId).data.architectureId;
                this.editForm.setValue({
                    userId: res.userId,
                    phone: res.phone,
                    fullName: res.fullName,
                    email: res.email,
                    password: res.password,
                    confirmPassword: res.confirmPassword,
                    userType: res.userType,
                    architectureId: constArchitectureId,
                    appartementId: constAppartementId
                });
                //  this.onChange(this.editForm.value.architectureId)
            }));
        });
    }
}
UserComponent.ɵfac = function UserComponent_Factory(t) { return new (t || UserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClient"])); };
UserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: UserComponent, selectors: [["app-user"]], decls: 116, vars: 7, consts: [["AddUser", ""], [1, "app-modal-header"], [1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close", "basic-close", 3, "click"], ["aria-hidden", "true"], [1, "app-modal-body"], ["ngNativeValidate", "", 3, "formGroup", "ngSubmit"], [1, "form-group"], [1, "input-group", "mb-3"], [1, "input-group-prepend"], [1, "input-group-text"], ["type", "number", "placeholder", "5xxxxxxxx", "formControlName", "phone", "required", "", 1, "form-control"], ["type", "text", "placeholder", "\u0627\u0644\u0625\u0633\u0645 \u0643\u0627\u0645\u0644", "formControlName", "fullName", "required", "", 1, "form-control"], ["type", "email", "placeholder", "\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A", "formControlName", "email", "required", "", 1, "form-control"], ["type", "password", "placeholder", "\u0643\u0644\u0645\u0629 \u0627\u0644\u0633\u0631", "formControlName", "password", "required", "", 1, "form-control"], ["type", "password", "formControlName", "confirmPassword", "placeholder", " \u062A\u0623\u0643\u064A\u062F \u0643\u0644\u0645\u0629 \u0627\u0644\u0633\u0631", "required", "", 1, "form-control"], ["formControlName", "architectureId", 1, "form-control", 3, "change"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "appartementId", 1, "form-control"], [1, "app-modal-footer"], ["type", "submit", "data-dismiss", "modal", 1, "btn", "btn-secondary", 3, "click"], ["type", "submit", 1, "btn", "btn-primary"], [1, "col-xl-12"], ["cardTitle", "\u0625\u062F\u0627\u0631\u0629 \u0639\u0645\u064A\u0644", "blockClass", "table-border-style"], [1, "btn", "btn-primary", "ng-tns-c99-43", 2, "position", "absolute", "right", "60px", "top", "8px", 3, "click"], [1, "table-responsive"], [1, "table", "table-striped"], [4, "ngFor", "ngForOf"], ["EditUser", ""], ["type", "text", "placeholder", "5xxxxxxxx", "formControlName", "phone", "required", "", 1, "form-control"], ["formControlName", "architectureId", 1, "form-control"], [3, "ngValue", "change", 4, "ngFor", "ngForOf"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-secondary", 3, "click"], [3, "value"], [1, "badge", "m-r-5", "badge-success"], [1, "badge", "m-r-5", "badge-danger"], [1, "badge", "m-r-5", "badge-warning"], [1, "badge", "m-r-5", "badge-info"], [2, "background-color", "transparent", "border", "0 transparent", "outline", "0", 3, "click"], [1, "fas", "fa-edit", 2, "cursor", "pointer", "color", "#f1c40f", 3, "click"], [1, "fas", "fa-trash", 2, "padding-left", "5px", "cursor", "pointer", "color", "#e74c3c", 3, "click"], [3, "ngValue", "change"], [3, "ngValue"]], template: function UserComponent_Template(rf, ctx) { if (rf & 1) {
        const _r207 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-ui-modal", null, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h5", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\u0625\u0636\u0627\u0641\u0629 \u0639\u0645\u064A\u0644");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserComponent_Template_button_click_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r207); const _r189 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1); return _r189.hide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function UserComponent_Template_form_ngSubmit_9_listener($event) { return ctx.onSubmit(ctx.userForm); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "\u0631\u0642\u0645 \u0627\u0644\u062C\u0648\u0627\u0644");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "966");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "\u0627\u0644\u0625\u0633\u0645 \u0643\u0627\u0645\u0644");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "\u0643\u0644\u0645\u0629 \u0627\u0644\u0633\u0631");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, " \u062A\u0623\u0643\u064A\u062F \u0643\u0644\u0645\u0629 \u0627\u0644\u0633\u0631");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "\u0639\u0645\u0627\u0631\u0629");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "select", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function UserComponent_Template_select_change_37_listener($event) { return ctx.onChange($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](38, UserComponent_option_38_Template, 2, 2, "option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "\u0634\u0642\u0629");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "select", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](43, UserComponent_option_43_Template, 2, 2, "option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserComponent_Template_button_click_45_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r207); const _r189 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1); return _r189.hide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "\u0625\u063A\u0644\u0627\u0642");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "\u0625\u0636\u0627\u0641\u0629 \u0639\u0645\u064A\u0644");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "app-card", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserComponent_Template_span_click_51_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r207); const _r189 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1); return _r189.show(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "\u0625\u0636\u0627\u0641\u0629 \u0639\u0645\u064A\u0644");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "table", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "\u0627\u0644\u0625\u0633\u0645 \u0643\u0627\u0645\u0644");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "\u0631\u0642\u0645 \u0627\u0644\u062C\u0648\u0627\u0644");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, "\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, "\u0627\u0644\u0639\u0645\u0627\u0631\u0629");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "\u0627\u0644\u0634\u0642\u0629");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, "\u0648\u0638\u064A\u0641\u0629");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, "\u0639\u0645\u0644");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](74, UserComponent_tr_74_Template, 23, 7, "tr", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "app-ui-modal", null, 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "h5", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79, "\u062A\u0639\u062F\u064A\u0644 \u0639\u0645\u064A\u0644");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserComponent_Template_button_click_80_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r207); const _r193 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](76); return _r193.hide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function UserComponent_Template_form_ngSubmit_84_listener($event) { return ctx.onEdit(ctx.editForm); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](87, "\u0631\u0642\u0645 \u0627\u0644\u062C\u0648\u0627\u0644");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](91, "966");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](92, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](95, "\u0627\u0644\u0625\u0633\u0645 \u0643\u0627\u0645\u0644");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](96, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](99, "\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](100, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](103, "\u0639\u0645\u0627\u0631\u0629");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "select", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](105, UserComponent_option_105_Template, 2, 2, "option", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](108, "\u0634\u0642\u0629");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "select", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](110, UserComponent_option_110_Template, 2, 2, "option", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserComponent_Template_button_click_112_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r207); const _r193 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](76); return _r193.hide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](113, "\u0625\u063A\u0644\u0627\u0642");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](115, "\u062A\u0639\u062F\u064A\u0644 \u0639\u0645\u064A\u0644");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.userForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.architectureList);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.appartementList);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.listData);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.editForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.architectureList);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.appartementEditList);
    } }, directives: [_theme_shared_components_modal_ui_modal_ui_modal_component__WEBPACK_IMPORTED_MODULE_12__["UiModalComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"], _theme_shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_14__["CardComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_x"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL015Rm9sZGVyd29yay9TdXBlckFkbWluL3VzZXIvdXNlci5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UserComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-user',
                templateUrl: './user.component.html',
                styleUrls: ['./user.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormBuilder"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/MyFolderwork/SuperAdmin/user/user.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/MyFolderwork/SuperAdmin/user/user.module.ts ***!
  \*************************************************************/
/*! exports provided: UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _user_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-routing.module */ "./src/app/MyFolderwork/SuperAdmin/user/user-routing.module.ts");
/* harmony import */ var _user_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user.component */ "./src/app/MyFolderwork/SuperAdmin/user/user.component.ts");
/* harmony import */ var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");
/* harmony import */ var src_app_CORE__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/CORE */ "./src/app/CORE/index.ts");








class UserModule {
}
UserModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: UserModule });
UserModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function UserModule_Factory(t) { return new (t || UserModule)(); }, providers: [src_app_CORE__WEBPACK_IMPORTED_MODULE_6__["HttpInterceptorProviders"]], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _user_routing_module__WEBPACK_IMPORTED_MODULE_3__["UserRoutingModule"],
            _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UserModule, { declarations: [_user_component__WEBPACK_IMPORTED_MODULE_4__["UserComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _user_routing_module__WEBPACK_IMPORTED_MODULE_3__["UserRoutingModule"],
        _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_user_component__WEBPACK_IMPORTED_MODULE_4__["UserComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _user_routing_module__WEBPACK_IMPORTED_MODULE_3__["UserRoutingModule"],
                    _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]
                ],
                providers: [src_app_CORE__WEBPACK_IMPORTED_MODULE_6__["HttpInterceptorProviders"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/demo/dashboard/dash-default/chart/power-card-chart-1.ts":
/*!*************************************************************************!*\
  !*** ./src/app/demo/dashboard/dash-default/chart/power-card-chart-1.ts ***!
  \*************************************************************************/
/*! exports provided: PowerCardChart1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PowerCardChart1", function() { return PowerCardChart1; });
class PowerCardChart1 {
}
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
        width: 3,
    },
    series: [{
            name: 'series1',
            data: [55, 35, 75, 50, 90, 50]
        }],
    yaxis: {
        min: 10,
        max: 100,
    },
    tooltip: {
        theme: 'dark',
        fixed: {
            enabled: false
        },
        x: {
            show: false,
        },
        y: {
            title: {
                formatter: (seriesName) => 'Power'
            }
        },
        marker: {
            show: false
        }
    }
};


/***/ }),

/***/ "./src/app/demo/dashboard/dash-default/chart/power-card-chart-2.ts":
/*!*************************************************************************!*\
  !*** ./src/app/demo/dashboard/dash-default/chart/power-card-chart-2.ts ***!
  \*************************************************************************/
/*! exports provided: PowerCardChart2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PowerCardChart2", function() { return PowerCardChart2; });
class PowerCardChart2 {
}
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
        width: 3,
    },
    series: [{
            name: 'series1',
            data: [55, 35, 75, 50, 90, 50]
        }],
    yaxis: {
        min: 10,
        max: 100,
    },
    tooltip: {
        theme: 'dark',
        fixed: {
            enabled: false
        },
        x: {
            show: false,
        },
        y: {
            title: {
                formatter: (seriesName) => 'Power'
            }
        },
        marker: {
            show: false
        }
    }
};


/***/ }),

/***/ "./src/app/demo/dashboard/dash-default/chart/seo-chart-1.ts":
/*!******************************************************************!*\
  !*** ./src/app/demo/dashboard/dash-default/chart/seo-chart-1.ts ***!
  \******************************************************************/
/*! exports provided: SeoChart1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeoChart1", function() { return SeoChart1; });
class SeoChart1 {
}
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
        opacity: 0.3,
    },
    markers: {
        size: 2,
        opacity: 0.9,
        colors: '#1abc9c',
        strokeColor: '#1abc9c',
        strokeWidth: 2,
        hover: {
            size: 4,
        }
    },
    stroke: {
        curve: 'straight',
        width: 3,
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
                formatter: (seriesName) => 'Visits :'
            }
        },
        marker: {
            show: false
        }
    }
};


/***/ }),

/***/ "./src/app/demo/dashboard/dash-default/chart/seo-chart-2.ts":
/*!******************************************************************!*\
  !*** ./src/app/demo/dashboard/dash-default/chart/seo-chart-2.ts ***!
  \******************************************************************/
/*! exports provided: SeoChart2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeoChart2", function() { return SeoChart2; });
class SeoChart2 {
}
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
        },
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
                formatter: (seriesName) => 'Bounce Rate :'
            }
        },
        marker: {
            show: false
        }
    }
};


/***/ }),

/***/ "./src/app/demo/dashboard/dash-default/chart/seo-chart-3.ts":
/*!******************************************************************!*\
  !*** ./src/app/demo/dashboard/dash-default/chart/seo-chart-3.ts ***!
  \******************************************************************/
/*! exports provided: SeoChart3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeoChart3", function() { return SeoChart3; });
class SeoChart3 {
}
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
        opacity: 0.3,
    },
    markers: {
        size: 2,
        opacity: 0.9,
        colors: '#ff5252',
        strokeColor: '#ff5252',
        strokeWidth: 2,
        hover: {
            size: 4,
        }
    },
    stroke: {
        curve: 'straight',
        width: 3,
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
                formatter: (seriesName) => 'Visits :'
            }
        },
        marker: {
            show: false
        }
    }
};


/***/ }),

/***/ "./src/app/demo/dashboard/dash-default/chart/support-chart-data-1.ts":
/*!***************************************************************************!*\
  !*** ./src/app/demo/dashboard/dash-default/chart/support-chart-data-1.ts ***!
  \***************************************************************************/
/*! exports provided: SupportChartData1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupportChartData1", function() { return SupportChartData1; });
class SupportChartData1 {
}
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
        width: 2,
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
                formatter: (seriesName) => 'Ticket '
            }
        },
        marker: {
            show: false
        }
    }
};


/***/ }),

/***/ "./src/app/demo/dashboard/dash-default/chart/support-chart-data-2.ts":
/*!***************************************************************************!*\
  !*** ./src/app/demo/dashboard/dash-default/chart/support-chart-data-2.ts ***!
  \***************************************************************************/
/*! exports provided: SupportChartData2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupportChartData2", function() { return SupportChartData2; });
class SupportChartData2 {
}
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
        width: 2,
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
                formatter: (seriesName) => 'Ticket '
            }
        },
        marker: {
            show: false
        }
    }
};


/***/ })

}]);
//# sourceMappingURL=MyFolderwork-SuperAdmin-user-user-module-es2015.js.map