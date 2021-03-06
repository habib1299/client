function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-signin-auth-signin-module"], {
  /***/
  "./src/app/demo/pages/authentication/auth-signin/auth-signin-routing.module.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/demo/pages/authentication/auth-signin/auth-signin-routing.module.ts ***!
    \*************************************************************************************/

  /*! exports provided: AuthSigninRoutingModule */

  /***/
  function srcAppDemoPagesAuthenticationAuthSigninAuthSigninRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthSigninRoutingModule", function () {
      return AuthSigninRoutingModule;
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


    var _auth_signin_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./auth-signin.component */
    "./src/app/demo/pages/authentication/auth-signin/auth-signin.component.ts");

    var routes = [{
      path: '',
      component: _auth_signin_component__WEBPACK_IMPORTED_MODULE_2__["AuthSigninComponent"]
    }];

    var AuthSigninRoutingModule = function AuthSigninRoutingModule() {
      _classCallCheck(this, AuthSigninRoutingModule);
    };

    AuthSigninRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
      type: AuthSigninRoutingModule
    });
    AuthSigninRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
      factory: function AuthSigninRoutingModule_Factory(t) {
        return new (t || AuthSigninRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](AuthSigninRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AuthSigninRoutingModule, [{
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
  "./src/app/demo/pages/authentication/auth-signin/auth-signin.component.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/demo/pages/authentication/auth-signin/auth-signin.component.ts ***!
    \********************************************************************************/

  /*! exports provided: AuthSigninComponent */

  /***/
  function srcAppDemoPagesAuthenticationAuthSigninAuthSigninComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthSigninComponent", function () {
      return AuthSigninComponent;
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
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function AuthSigninComponent_div_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "\u0627\u0644\u062A\u062D\u0642\u0642 \u0645\u0646 \u0627\u062A\u0635\u0627\u0644\u0643 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function AuthSigninComponent_span_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "...\u062C\u0627\u0631\u064A \u062A\u062D\u0645\u064A\u0644 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function AuthSigninComponent_span_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "span", 22);
      }
    }

    function AuthSigninComponent_span_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    var _c0 = function _c0() {
      return ["/auth/signup"];
    };

    var AuthSigninComponent =
    /*#__PURE__*/
    function () {
      function AuthSigninComponent(router, fb, http) {
        _classCallCheck(this, AuthSigninComponent);

        this.router = router;
        this.fb = fb;
        this.http = http;
        this.verifConnexion = false;
        this.URL = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].BaseUrl;
        this.loginForm = fb.group({
          email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
          password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.btnLoader = false;
      }

      _createClass(AuthSigninComponent, [{
        key: "onSubmit",
        value: function onSubmit(loginform) {
          var _this = this;

          this.http.post(this.URL + 'Login', loginform.value).subscribe(function (data) {
            if (data.results) {
              localStorage.setItem('JWT_Token', data.results);
              _this.jwt = Object(jwt_decode__WEBPACK_IMPORTED_MODULE_2__["default"])(data.results);

              if (_this.jwt.userType == "admin") {
                _this.router.navigate(['superadmin/officer']);
              } else if (_this.jwt.userType == "officer") {
                _this.router.navigate(['officer/architecture']);
              } else if (_this.jwt.userType == "user") {
                _this.router.navigate(['normaluser/payments']);
              } else {
                _this.router.navigate(['auth/signin']);
              }
            } else {
              _this.verifConnexion = true;

              _this.router.navigate(['auth/signin']);
            }
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onBtnLoader",
        value: function onBtnLoader() {
          var _this2 = this;

          this.btnLoader = true;
          setTimeout(function () {
            _this2.btnLoader = false;
          }, 2000);
        }
      }]);

      return AuthSigninComponent;
    }();

    AuthSigninComponent.??fac = function AuthSigninComponent_Factory(t) {
      return new (t || AuthSigninComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]));
    };

    AuthSigninComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: AuthSigninComponent,
      selectors: [["app-auth-signin"]],
      decls: 24,
      vars: 7,
      consts: [[1, "auth-wrapper"], [1, "auth-content", "text-center"], [1, "img-fluid", "mb-4", 2, "color", "rgba(255, 255, 255, 0.8)"], [1, "card", "borderless"], [1, "row", "align-items-center", "text-center"], [1, "col-md-12"], [1, "card-body"], [1, "mb-3", "f-w-400"], [3, "formGroup", "ngSubmit"], ["role", "alert", "class", "alert alert-danger", 4, "ngIf"], [1, "input-group", "mb-3"], ["type", "email", "required", "", "formControlName", "email", "placeholder", "\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A", 1, "form-control"], [1, "input-group", "mb-4"], ["type", "password", "required", "", "formControlName", "password", "placeholder", "\u0643\u0644\u0645\u0629 \u0627\u0644\u0633\u0631", "minlength", "3", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary", "btn-block", "mb-4", 3, "click"], ["class", "load-text", 4, "ngIf"], ["class", "spinner-border spinner-border-sm", "role", "status", 4, "ngIf"], ["class", "btn-text", 4, "ngIf"], [1, "mb-0", "text-muted"], [1, "f-w-400", 3, "routerLink"], ["role", "alert", 1, "alert", "alert-danger"], [1, "load-text"], ["role", "status", 1, "spinner-border", "spinner-border-sm"], [1, "btn-text"]],
      template: function AuthSigninComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h2", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "\u0645\u0624\u0633\u0651\u0633\u0629 \u0646\u0628\u0644 \u0644\u0644\u0639\u0642\u0651\u0627\u0631\u0627\u062A");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "h4", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "form", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngSubmit", function AuthSigninComponent_Template_form_ngSubmit_10_listener($event) {
            return ctx.onSubmit(ctx.loginForm);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](11, AuthSigninComponent_div_11_Template, 2, 0, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](13, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AuthSigninComponent_Template_button_click_16_listener($event) {
            return ctx.onBtnLoader();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](17, AuthSigninComponent_span_17_Template, 2, 0, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](18, AuthSigninComponent_span_18_Template, 1, 0, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](19, AuthSigninComponent_span_19_Template, 2, 0, "span", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "p", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, " \u0644\u064A\u0633 \u0644\u062F\u064A\u0643 \u062D\u0633\u0627\u0628 \u061F ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, " \u0627\u0627\u0644\u0625\u0634\u062A\u0631\u0627\u0643");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.loginForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.verifConnexion);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.btnLoader);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.btnLoader);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.btnLoader);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](6, _c0));
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MinLengthValidator"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]],
      styles: [".auth-wrapper[_ngcontent-%COMP%] {\n  background-image: url('stegbackground.jpeg');\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVtby9wYWdlcy9hdXRoZW50aWNhdGlvbi9hdXRoLXNpZ25pbi9DOlxcVXNlcnNcXGhhYmliXFxzb3VyY2VcXHJlcG9zXFxTdGVnXFxTdGVnIEZyb250ZW5kL3NyY1xcYXBwXFxkZW1vXFxwYWdlc1xcYXV0aGVudGljYXRpb25cXGF1dGgtc2lnbmluXFxhdXRoLXNpZ25pbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZGVtby9wYWdlcy9hdXRoZW50aWNhdGlvbi9hdXRoLXNpZ25pbi9hdXRoLXNpZ25pbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDRDQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9kZW1vL3BhZ2VzL2F1dGhlbnRpY2F0aW9uL2F1dGgtc2lnbmluL2F1dGgtc2lnbmluLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmF1dGgtd3JhcHBlcntcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3N0ZWdiYWNrZ3JvdW5kLmpwZWcpO1xyXG59IiwiLmF1dGgtd3JhcHBlciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3N0ZWdiYWNrZ3JvdW5kLmpwZWcpO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AuthSigninComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-auth-signin',
          templateUrl: './auth-signin.component.html',
          styleUrls: ['./auth-signin.component.scss']
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
  "./src/app/demo/pages/authentication/auth-signin/auth-signin.module.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/demo/pages/authentication/auth-signin/auth-signin.module.ts ***!
    \*****************************************************************************/

  /*! exports provided: AuthSigninModule */

  /***/
  function srcAppDemoPagesAuthenticationAuthSigninAuthSigninModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthSigninModule", function () {
      return AuthSigninModule;
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


    var _auth_signin_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./auth-signin-routing.module */
    "./src/app/demo/pages/authentication/auth-signin/auth-signin-routing.module.ts");
    /* harmony import */


    var _auth_signin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./auth-signin.component */
    "./src/app/demo/pages/authentication/auth-signin/auth-signin.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var src_app_CORE__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/CORE */
    "./src/app/CORE/index.ts");

    var AuthSigninModule = function AuthSigninModule() {
      _classCallCheck(this, AuthSigninModule);
    };

    AuthSigninModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
      type: AuthSigninModule
    });
    AuthSigninModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
      factory: function AuthSigninModule_Factory(t) {
        return new (t || AuthSigninModule)();
      },
      providers: [src_app_CORE__WEBPACK_IMPORTED_MODULE_6__["HttpInterceptorProviders"]],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _auth_signin_routing_module__WEBPACK_IMPORTED_MODULE_3__["AuthSigninRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](AuthSigninModule, {
        declarations: [_auth_signin_component__WEBPACK_IMPORTED_MODULE_4__["AuthSigninComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _auth_signin_routing_module__WEBPACK_IMPORTED_MODULE_3__["AuthSigninRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AuthSigninModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _auth_signin_routing_module__WEBPACK_IMPORTED_MODULE_3__["AuthSigninRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]],
          declarations: [_auth_signin_component__WEBPACK_IMPORTED_MODULE_4__["AuthSigninComponent"]],
          providers: [src_app_CORE__WEBPACK_IMPORTED_MODULE_6__["HttpInterceptorProviders"]]
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
//# sourceMappingURL=auth-signin-auth-signin-module-es5.js.map