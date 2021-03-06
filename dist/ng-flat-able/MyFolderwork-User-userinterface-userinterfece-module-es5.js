function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["MyFolderwork-User-userinterface-userinterfece-module"], {
  /***/
  "./src/app/MyFolderwork/User/userinterface/userinterface-routing.module.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/MyFolderwork/User/userinterface/userinterface-routing.module.ts ***!
    \*********************************************************************************/

  /*! exports provided: UserinterfaceRoutingModule */

  /***/
  function srcAppMyFolderworkUserUserinterfaceUserinterfaceRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserinterfaceRoutingModule", function () {
      return UserinterfaceRoutingModule;
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


    var _userinterface_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./userinterface.component */
    "./src/app/MyFolderwork/User/userinterface/userinterface.component.ts");

    var routes = [{
      path: '',
      component: _userinterface_component__WEBPACK_IMPORTED_MODULE_2__["UserinterfaceComponent"]
    }];

    var UserinterfaceRoutingModule = function UserinterfaceRoutingModule() {
      _classCallCheck(this, UserinterfaceRoutingModule);
    };

    UserinterfaceRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
      type: UserinterfaceRoutingModule
    });
    UserinterfaceRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
      factory: function UserinterfaceRoutingModule_Factory(t) {
        return new (t || UserinterfaceRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](UserinterfaceRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](UserinterfaceRoutingModule, [{
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
  "./src/app/MyFolderwork/User/userinterface/userinterface.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/MyFolderwork/User/userinterface/userinterface.component.ts ***!
    \****************************************************************************/

  /*! exports provided: UserinterfaceComponent */

  /***/
  function srcAppMyFolderworkUserUserinterfaceUserinterfaceComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserinterfaceComponent", function () {
      return UserinterfaceComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var jwt_decode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! jwt-decode */
    "./node_modules/jwt-decode/build/jwt-decode.esm.js");
    /* harmony import */


    var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/environments/environment.prod */
    "./src/environments/environment.prod.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var UserinterfaceComponent =
    /*#__PURE__*/
    function () {
      function UserinterfaceComponent(router, fb, http) {
        _classCallCheck(this, UserinterfaceComponent);

        this.router = router;
        this.fb = fb;
        this.http = http;
        this.URL = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].BaseUrl;
        this.verifCash = false;
        this.paymentForm = fb.group({
          compteNum: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
          appartementPercent: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
          appartementFacturePrix: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.btnLoader = false;
        this.getUserData();
      }

      _createClass(UserinterfaceComponent, [{
        key: "onSubmit",
        value: function onSubmit(paymentForm) {
          var _this = this;

          var token = localStorage.getItem('JWT_Token') || '{}';
          this.jwt = Object(jwt_decode__WEBPACK_IMPORTED_MODULE_2__["default"])(token);
          this.appartementID = JSON.parse(this.jwt.AppartmentData).appartementId;
          this.http.get(this.URL + 'Appartement' + '/' + this.appartementID).toPromise().then(function (data) {
            if (paymentForm.value.appartementFacturePrix != JSON.parse(data.appartementFacturePrix)) {
              _this.ErrorMessage = "????????????  ?????? ????????";
              _this.verifCash = true;
            } else {
              _this.router.navigate(['normaluser/verifypayments']);
            }
          }); // 
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "getUserData",
        value: function getUserData() {
          var _this2 = this;

          var token = localStorage.getItem('JWT_Token') || '{}';
          var decode = Object(jwt_decode__WEBPACK_IMPORTED_MODULE_2__["default"])(token);
          this.listData = decode;
          this.architectureName = JSON.parse(this.listData.ArchitectureData).architectureName;
          this.AppartmentData = JSON.parse(this.listData.AppartmentData);
          console.log(this.architectureName);
          console.log(this.AppartmentData);
          console.log('listdata', this.listData);
          this.http.get(this.URL + 'Facture').subscribe(function (data) {
            _this2.http.get(_this2.URL + 'Appartement' + '/' + _this2.AppartmentData.appartementId).subscribe(function (res) {
              _this2.AppartmentData = res;
              console.log('after ', _this2.AppartmentData);
            }, function (err) {
              console.log(err);
            });
          });
        }
      }, {
        key: "onBtnLoader",
        value: function onBtnLoader() {
          var _this3 = this;

          this.btnLoader = true;
          setTimeout(function () {
            _this3.btnLoader = false;
          }, 2000);
        }
      }, {
        key: "logout",
        value: function logout() {
          localStorage.removeItem('JWT_Token');
          this.router.navigate(['/auth/signin']);
        }
      }, {
        key: "goPayments",
        value: function goPayments() {
          this.router.navigate(['/normaluser/verifypayments']);
        }
      }]);

      return UserinterfaceComponent;
    }();

    UserinterfaceComponent.??fac = function UserinterfaceComponent_Factory(t) {
      return new (t || UserinterfaceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]));
    };

    UserinterfaceComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: UserinterfaceComponent,
      selectors: [["app-userinterface"]],
      decls: 37,
      vars: 4,
      consts: [[1, "col-xl-12"], [1, "table-responsive"], [1, "table", "table-striped"], [1, "badge", "m-r-5", "badge-info"], [1, "badge", "m-r-5", "badge-warning"], [1, "btn", "btn-danger", "btn-sm", "ng-tns-c85-33"], ["type", "button", 1, "btn", "btn-success", "btn-sm", "ng-tns-c85-33", 3, "click"], ["_ngcontent-uuf-c114", "", 1, "fas", "fa-dollar-sign"], [1, "btn", "btn-primary", "btn-sm", "ng-tns-c85-33", 3, "click"]],
      template: function UserinterfaceComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "table", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "\u0627\u0633\u0645 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "\u0631\u0642\u0645 \u0627\u0644\u0639\u0645\u0627\u0631\u0629 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "\u0631\u0642\u0645 \u0627\u0644\u0634\u0642\u0629");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "\u0627\u0644\u0645\u0628\u0644\u063A");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "\u062F\u0641\u0639");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "\u062E\u0631\u0648\u062C");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function UserinterfaceComponent_Template_button_click_31_listener($event) {
            return ctx.goPayments();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](32, "i", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, " \u062F\u0641\u0639 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function UserinterfaceComponent_Template_button_click_35_listener($event) {
            return ctx.logout();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, "\u062E\u0631\u0648\u062C");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.listData.username);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.architectureName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.AppartmentData.appartementNumber);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", ctx.AppartmentData.appartementFacturePrix, " $");
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL015Rm9sZGVyd29yay9Vc2VyL3VzZXJpbnRlcmZhY2UvdXNlcmludGVyZmFjZS5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](UserinterfaceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-userinterface',
          templateUrl: './userinterface.component.html',
          styleUrls: ['./userinterface.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/MyFolderwork/User/userinterface/userinterfece.module.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/MyFolderwork/User/userinterface/userinterfece.module.ts ***!
    \*************************************************************************/

  /*! exports provided: UserinterfaceModule */

  /***/
  function srcAppMyFolderworkUserUserinterfaceUserinterfeceModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserinterfaceModule", function () {
      return UserinterfaceModule;
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


    var _userinterface_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./userinterface-routing.module */
    "./src/app/MyFolderwork/User/userinterface/userinterface-routing.module.ts");
    /* harmony import */


    var _userinterface_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./userinterface.component */
    "./src/app/MyFolderwork/User/userinterface/userinterface.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var UserinterfaceModule = function UserinterfaceModule() {
      _classCallCheck(this, UserinterfaceModule);
    };

    UserinterfaceModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
      type: UserinterfaceModule
    });
    UserinterfaceModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
      factory: function UserinterfaceModule_Factory(t) {
        return new (t || UserinterfaceModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _userinterface_routing_module__WEBPACK_IMPORTED_MODULE_3__["UserinterfaceRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](UserinterfaceModule, {
        declarations: [_userinterface_component__WEBPACK_IMPORTED_MODULE_4__["UserinterfaceComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _userinterface_routing_module__WEBPACK_IMPORTED_MODULE_3__["UserinterfaceRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](UserinterfaceModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _userinterface_routing_module__WEBPACK_IMPORTED_MODULE_3__["UserinterfaceRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]],
          declarations: [_userinterface_component__WEBPACK_IMPORTED_MODULE_4__["UserinterfaceComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.prod.ts":
  /*!**********************************************!*\
    !*** ./src/environments/environment.prod.ts ***!
    \**********************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentProdTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });

    var environment = {
      production: true,
      BaseUrl: 'http://mdalashwali-001-site1.itempurl.com/'
    };
    /***/
  }
}]);
//# sourceMappingURL=MyFolderwork-User-userinterface-userinterfece-module-es5.js.map