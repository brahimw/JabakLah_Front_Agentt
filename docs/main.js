(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/_services/Agent.service.ts":
/*!********************************************!*\
  !*** ./src/app/_services/Agent.service.ts ***!
  \********************************************/
/*! exports provided: AgentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgentService", function() { return AgentService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");




const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
class AgentService {
    // tslint:disable-next-line: indent
    constructor(http) {
        this.http = http;
        // tslint:disable-next-line: indent
        this.agentUrl = 'http://localhost:8080/api/auth/';
    }
    saveClient(username, nom, prenom, numTel, email) {
        return this.http.post(this.agentUrl + 'client/add', {
            username, nom, prenom, email, numTel
        }, { responseType: 'text' });
    }
    findAllClients() {
        return this.http.get('http://localhost:8080/adminController/listClients');
    }
    deleteClient(clientId) {
        return this.http.delete(`${this.agentUrl}/deleteClient/${clientId}`);
    }
    ChangePassword(changePasswordRequestAgent) {
        return this.http.post(this.agentUrl + "agent/changePassword", changePasswordRequestAgent, { responseType: 'text' });
    }
    getAgentHasFirstAuth(username) {
        return this.http.post(this.agentUrl + "agent/changedPassword", username, httpOptions);
    }
}
AgentService.ɵfac = function AgentService_Factory(t) { return new (t || AgentService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
AgentService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AgentService, factory: AgentService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AgentService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/_services/auth.service.ts":
/*!*******************************************!*\
  !*** ./src/app/_services/auth.service.ts ***!
  \*******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




const AUTH_API = 'http://localhost:8080/api/auth/';
const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
class AuthService {
    constructor(http) {
        this.http = http;
    }
    login(username, password) {
        return this.http.post(AUTH_API + 'AgentSignin', {
            username,
            password
        }, httpOptions);
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/_services/token-storage.service.ts":
/*!****************************************************!*\
  !*** ./src/app/_services/token-storage.service.ts ***!
  \****************************************************/
/*! exports provided: TokenStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenStorageService", function() { return TokenStorageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


const TOKEN_KEY = 'auth-token';
const ADMIN_KEY = 'auth-user';
class TokenStorageService {
    constructor() { }
    signOut() {
        window.sessionStorage.clear();
    }
    saveToken(token) {
        window.sessionStorage.removeItem(TOKEN_KEY);
        window.sessionStorage.setItem(TOKEN_KEY, token);
    }
    getToken() {
        return window.sessionStorage.getItem(TOKEN_KEY);
    }
    saveAgent(agent) {
        window.sessionStorage.removeItem(ADMIN_KEY);
        window.sessionStorage.setItem(ADMIN_KEY, JSON.stringify(agent));
    }
    getAgent() {
        const user = window.sessionStorage.getItem(ADMIN_KEY);
        if (user) {
            return JSON.parse(user);
        }
        return {};
    }
}
TokenStorageService.ɵfac = function TokenStorageService_Factory(t) { return new (t || TokenStorageService)(); };
TokenStorageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TokenStorageService, factory: TokenStorageService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TokenStorageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/add-client-form/add-client-form.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/add-client-form/add-client-form.component.ts ***!
  \**************************************************************/
/*! exports provided: AddClientFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddClientFormComponent", function() { return AddClientFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_Agent_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../_services/Agent.service */ "./src/app/_services/Agent.service.ts");
/* harmony import */ var _services_token_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../_services/token-storage.service */ "./src/app/_services/token-storage.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







function AddClientFormComponent_div_35_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Le champ Pr\u00E9nom est requis");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddClientFormComponent_div_35_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Format invalide pour le pr\u00E9nom");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddClientFormComponent_div_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddClientFormComponent_div_35_div_1_Template, 2, 0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AddClientFormComponent_div_35_div_2_Template, 2, 0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.errors && _r1.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.errors && _r1.errors.pattern);
} }
function AddClientFormComponent_div_37_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Le champ Nom est requis");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddClientFormComponent_div_37_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Format invalide pour le Nom");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddClientFormComponent_div_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddClientFormComponent_div_37_div_1_Template, 2, 0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AddClientFormComponent_div_37_div_2_Template, 2, 0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r3.errors && _r3.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r3.errors && _r3.errors.pattern);
} }
function AddClientFormComponent_div_55_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Le champ Adresse Email est requis");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddClientFormComponent_div_55_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Format invalide pour Adresse Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddClientFormComponent_div_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddClientFormComponent_div_55_div_1_Template, 2, 0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AddClientFormComponent_div_55_div_2_Template, 2, 0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r6.errors && _r6.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r6.errors && _r6.errors.pattern);
} }
function AddClientFormComponent_div_57_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Le champ Num\u00E9ro De Tel est requis");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddClientFormComponent_div_57_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Format invalide pour um\u00E9ro De Tel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddClientFormComponent_div_57_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Le num\u00E9ro de t\u00E9l\u00E9phone doit comporter au moins 10 chiffres");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddClientFormComponent_div_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddClientFormComponent_div_57_div_1_Template, 2, 0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AddClientFormComponent_div_57_div_2_Template, 2, 0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AddClientFormComponent_div_57_div_3_Template, 2, 0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r7.errors && _r7.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r7.errors && _r7.errors.pattern);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r7.errors && _r7.errors.minlength);
} }
const AgentHasntChangedPassword = false;
class AddClientFormComponent {
    constructor(agentService, tokenService, router) {
        this.agentService = agentService;
        this.tokenService = tokenService;
        this.router = router;
        this.username = window.sessionStorage.getItem("username");
        this.client = {
            userName: "",
            firstName: "",
            lastName: '',
            email: '',
            phoneNumber: '',
        };
    }
    ngOnInit() {
        if (this.tokenService.getToken() == null) {
            this.router.navigate(['/home']);
        }
        if (this.tokenService.getToken() != null) {
            this.agentService.getAgentHasFirstAuth(this.username).subscribe({
                next: data => {
                    console.log(data);
                    if (data == AgentHasntChangedPassword) {
                        this.router.navigate(['admin/changePassword']);
                    }
                },
                error: err => {
                    console.log("erreur while getting firstauth");
                }
            });
        }
    }
    addClientFormSubmited() {
        this.agentService.saveClient(this.client.userName, this.client.firstName, this.client.lastName, this.client.email, this.client.phoneNumber).subscribe({
            next: data => {
                this.reloadPage();
            },
            error: err => {
                this.errorMessage = err.error.message;
                console.log(err.error.message);
                6;
            }
        });
    }
    reloadPage() {
        window.location.reload();
    }
}
AddClientFormComponent.ɵfac = function AddClientFormComponent_Factory(t) { return new (t || AddClientFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_Agent_service__WEBPACK_IMPORTED_MODULE_1__["AgentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_token_storage_service__WEBPACK_IMPORTED_MODULE_2__["TokenStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
AddClientFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddClientFormComponent, selectors: [["app-add-client-form"]], decls: 62, vars: 9, consts: [[1, "main"], [1, "container", "mainContainer"], [1, "container-fluid", "px-0", "py-0", "formContainer"], [1, "row", "d-flex", "justify-content-center"], [1, "col-6", "text-center"], [1, "card"], [1, "text-center", "mb-4", "white-text"], [1, "form-card", 3, "ngSubmit"], ["AgentAddForm", "ngForm"], [1, "row", "justify-content-between", "text-left"], [1, "form-group", "col-sm-6", "flex-column", "d-flex"], [1, "form-control-label", "px-3", "white-text"], [1, "text-danger"], ["type", "text", "id", "fname", "name", "fname", "placeholder", "Entrer votre Pr\u00E9nom", "required", "", "pattern", "[a-zA-Z]+", 3, "ngModel", "ngModelChange"], ["FirstName", "ngModel"], ["type", "text", "id", "fname", "name", "fname", "placeholder", "Entrer Votre Pr\u00E9non", "required", "", "pattern", "[a-zA-Z]+", 3, "ngModel", "ngModelChange"], ["type", "text", "id", "lname", "name", "lname", "placeholder", "Entrer Votre Nom", "required", "", "pattern", "[a-zA-Z]+", 3, "ngModel", "ngModelChange"], ["LastName", "ngModel"], [4, "ngIf"], ["type", "text", "id", "Agentemail", "name", "AgentEmail", "placeholder", "Ex: john.doe@gmail.com", "required", "", "pattern", "^[a-zA-Z0-9.]+@gmail.com$", 3, "ngModel", "ngModelChange"], ["AgentEmail", "ngModel"], ["type", "text", "id", "AgentPhoneNumber", "name", "AgentPhoneNumber", "placeholder", "Ex:+2126000000", "required", "", "pattern", "[0-9+]+", "minlength", "10", 3, "ngModel", "ngModelChange"], ["AgentPhoneNumber", "ngModel"], [1, "row", "justify-content-center"], [1, "form-group", "col-sm-6"], ["type", "submit", 1, "btn-block", "btn-primary"], ["class", "alert alert-danger", 4, "ngIf"], [1, "alert", "alert-danger"]], template: function AddClientFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Remplissez les informations du client ici :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AddClientFormComponent_Template_form_ngSubmit_8_listener() { return ctx.addClientFormSubmited(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Nom d'utilisateu ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " *");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 13, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddClientFormComponent_Template_input_ngModelChange_16_listener($event) { return ctx.client.userName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Pr\u00E9nom ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " *");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "input", 15, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddClientFormComponent_Template_input_ngModelChange_24_listener($event) { return ctx.client.firstName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Nom ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " *");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "input", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddClientFormComponent_Template_input_ngModelChange_31_listener($event) { return ctx.client.lastName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, AddClientFormComponent_div_35_Template, 3, 2, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, AddClientFormComponent_div_37_Template, 3, 2, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Adresse Email ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " *");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "input", 19, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddClientFormComponent_Template_input_ngModelChange_44_listener($event) { return ctx.client.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Num\u00E9ro De Tel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " *");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "input", 21, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddClientFormComponent_Template_input_ngModelChange_51_listener($event) { return ctx.client.phoneNumber = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, AddClientFormComponent_div_55_Template, 3, 2, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](57, AddClientFormComponent_div_57_Template, 4, 3, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Ajouter Client");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](17);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](32);
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](45);
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.client.userName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.client.firstName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.client.lastName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.touched && !_r1.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r3.touched && !_r3.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.client.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.client.phoneNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r6.touched && !_r6.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r7.touched && !_r7.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["MinLengthValidator"]], styles: ["body[_ngcontent-%COMP%]{\n    color: #000;\n    overflow-x: hidden;\n    height: 100%;\n    background-image: url(\"https://i.imgur.com/GMmCQHC.png\");\n    background-repeat: no-repeat;\n    background-size: 100% 100%\n}\n    \n    \n    .card[_ngcontent-%COMP%]{\n        padding: 20px 40px;\n       \n        border: none !important;\n        box-shadow: 0 6px 12px 0 rgba(0,0,0,0.2);\n        background-color: rgba(28, 31, 70, 0.505) !important;\n     \n    \n    }\n    \n    \n    .formContainer[_ngcontent-%COMP%]{\n        position: absolute;\n        top:20% ;\n        right: 1%;\n    }\n    \n    \n    .white-text[_ngcontent-%COMP%] {\n        color: white;\n    }\n    \n    \n    .blue-text[_ngcontent-%COMP%]{\n        color: #00BCD4\n    \n    }\n    \n    \n    .form-control-label[_ngcontent-%COMP%]{\n        margin-bottom: 3px;\n        margin-top: 3px\n    }\n    \n    \n    input[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%], button[_ngcontent-%COMP%]{padding: 8px 15px;\n        border-radius: 5px !important;\n        margin: 5px 0px;\n        box-sizing: border-box;\n        border: 1px solid #ccc;\n        font-size: 18px !important;\n        font-weight: 300}\n    \n    \n    input[_ngcontent-%COMP%]:focus, textarea[_ngcontent-%COMP%]:focus{\n            box-shadow: none !important;\n            border: 1px solid #00BCD4;\n            outline-width: 0;\n            font-weight: 400}\n    \n    \n    .btn-block[_ngcontent-%COMP%]{\n                text-transform: uppercase;\n                font-size: 15px !important;\n                font-weight: 400;\n                height: 43px;\n                cursor: pointer\n            \n            }\n    \n    \n    .btn-block[_ngcontent-%COMP%]:hover{\n                color: #fff !important\n            \n            }\n    \n    \n    button[_ngcontent-%COMP%]:focus{\n                box-shadow: none !important;\n                outline-width: 10\n            }\n    \n    \n    .mainContainer[_ngcontent-%COMP%]{\n  \n    height: 100% !important;\n    width: 100% !important;\n    \n}\n    \n    \n    .main-layout[_ngcontent-%COMP%]{\n    height: 100% !important;\n    width: 100% !important;\n}\n    \n    \n    .main[_ngcontent-%COMP%]{\n    height: 100% !important;\n    width: 100% !important;\n     \n        align-content: center;\n        background-image: url('background.jpg');\n        background-repeat: no-repeat;\n        background-position: center;\n        background-size: 100% 100% !important;\n    }\n    \n    \n    body[_ngcontent-%COMP%] {\n    background-color: #fbfbfb;\n  \n    }\n    \n    \n    @media (min-width: 991.98px) {\n    main[_ngcontent-%COMP%] {\n    padding-left: 240px;\n    }\n    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkLWNsaWVudC1mb3JtL2FkZC1jbGllbnQtZm9ybS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osd0RBQXdEO0lBQ3hELDRCQUE0QjtJQUM1QjtBQUNKOzs7SUFHSTtRQUNJLGtCQUFrQjs7UUFFbEIsdUJBQXVCO1FBQ3ZCLHdDQUF3QztRQUN4QyxvREFBb0Q7OztJQUd4RDs7O0lBRUE7UUFDSSxrQkFBa0I7UUFDbEIsUUFBUTtRQUNSLFNBQVM7SUFDYjs7O0lBRUE7UUFDSSxZQUFZO0lBQ2hCOzs7SUFFQTtRQUNJOztJQUVKOzs7SUFDQTtRQUNJLGtCQUFrQjtRQUNsQjtJQUNKOzs7SUFFQSx3QkFBd0IsaUJBQWlCO1FBQ3JDLDZCQUE2QjtRQUM3QixlQUFlO1FBQ2Ysc0JBQXNCO1FBQ3RCLHNCQUFzQjtRQUN0QiwwQkFBMEI7UUFDMUIsZ0JBQWdCOzs7SUFFaEI7WUFHSSwyQkFBMkI7WUFDM0IseUJBQXlCO1lBQ3pCLGdCQUFnQjtZQUNoQixnQkFBZ0I7OztJQUVoQjtnQkFDSSx5QkFBeUI7Z0JBQ3pCLDBCQUEwQjtnQkFDMUIsZ0JBQWdCO2dCQUNoQixZQUFZO2dCQUNaOztZQUVKOzs7SUFBQztnQkFDRzs7WUFFSjs7O0lBRUE7Z0JBRUksMkJBQTJCO2dCQUMzQjtZQUNKOzs7SUFFWjs7SUFFSSx1QkFBdUI7SUFDdkIsc0JBQXNCOztBQUUxQjs7O0lBRUE7SUFDSSx1QkFBdUI7SUFDdkIsc0JBQXNCO0FBQzFCOzs7SUFFQTtJQUNJLHVCQUF1QjtJQUN2QixzQkFBc0I7O1FBRWxCLHFCQUFxQjtRQUNyQix1Q0FBeUQ7UUFDekQsNEJBQTRCO1FBQzVCLDJCQUEyQjtRQUMzQixxQ0FBcUM7SUFDekM7OztJQUdKO0lBQ0kseUJBQXlCOztJQUV6Qjs7O0lBQ0E7SUFDQTtJQUNBLG1CQUFtQjtJQUNuQjtJQUNBIiwiZmlsZSI6InNyYy9hcHAvYWRkLWNsaWVudC1mb3JtL2FkZC1jbGllbnQtZm9ybS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keXtcbiAgICBjb2xvcjogIzAwMDtcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHBzOi8vaS5pbWd1ci5jb20vR01tQ1FIQy5wbmdcIik7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJVxufVxuICAgIFxuICAgIFxuICAgIC5jYXJke1xuICAgICAgICBwYWRkaW5nOiAyMHB4IDQwcHg7XG4gICAgICAgXG4gICAgICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICBib3gtc2hhZG93OiAwIDZweCAxMnB4IDAgcmdiYSgwLDAsMCwwLjIpO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI4LCAzMSwgNzAsIDAuNTA1KSAhaW1wb3J0YW50O1xuICAgICBcbiAgICBcbiAgICB9XG5cbiAgICAuZm9ybUNvbnRhaW5lcntcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6MjAlIDtcbiAgICAgICAgcmlnaHQ6IDElO1xuICAgIH1cbiAgICBcbiAgICAud2hpdGUtdGV4dCB7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG4gICAgXG4gICAgLmJsdWUtdGV4dHtcbiAgICAgICAgY29sb3I6ICMwMEJDRDRcbiAgICBcbiAgICB9XG4gICAgLmZvcm0tY29udHJvbC1sYWJlbHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogM3B4O1xuICAgICAgICBtYXJnaW4tdG9wOiAzcHhcbiAgICB9XG4gICAgXG4gICAgaW5wdXQsIHRleHRhcmVhLCBidXR0b257cGFkZGluZzogOHB4IDE1cHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweCAhaW1wb3J0YW50O1xuICAgICAgICBtYXJnaW46IDVweCAwcHg7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweCAhaW1wb3J0YW50O1xuICAgICAgICBmb250LXdlaWdodDogMzAwfVxuICAgICAgICBcbiAgICAgICAgaW5wdXQ6Zm9jdXMsIHRleHRhcmVhOmZvY3Vze1xuICAgICAgICAgICAgLW1vei1ib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMEJDRDQ7XG4gICAgICAgICAgICBvdXRsaW5lLXdpZHRoOiAwO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLmJ0bi1ibG9ja3tcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0M3B4O1xuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlclxuICAgICAgICAgICAgXG4gICAgICAgICAgICB9LmJ0bi1ibG9jazpob3ZlcntcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgYnV0dG9uOmZvY3Vzey1tb3otYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICBvdXRsaW5lLXdpZHRoOiAxMFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4ubWFpbkNvbnRhaW5lcntcbiAgXG4gICAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICBcbn1cblxuLm1haW4tbGF5b3V0e1xuICAgIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG59XG5cbi5tYWlue1xuICAgIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgIFxuICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcInNyY1xcYXNzZXRzXFxpbWFnZXNcXGJhY2tncm91bmQuanBnXCIpO1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlICFpbXBvcnRhbnQ7XG4gICAgfVxuXG5cbmJvZHkge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYmZiZmI7XG4gIFxuICAgIH1cbiAgICBAbWVkaWEgKG1pbi13aWR0aDogOTkxLjk4cHgpIHtcbiAgICBtYWluIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDI0MHB4O1xuICAgIH1cbiAgICB9XG5cbiAgICJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddClientFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-add-client-form',
                templateUrl: './add-client-form.component.html',
                styleUrls: ['./add-client-form.component.css']
            }]
    }], function () { return [{ type: _services_Agent_service__WEBPACK_IMPORTED_MODULE_1__["AgentService"] }, { type: _services_token_storage_service__WEBPACK_IMPORTED_MODULE_2__["TokenStorageService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _add_client_form_add_client_form_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-client-form/add-client-form.component */ "./src/app/add-client-form/add-client-form.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./change-password/change-password.component */ "./src/app/change-password/change-password.component.ts");
/* harmony import */ var _list_agent_list_agent_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list-agent/list-agent.component */ "./src/app/list-agent/list-agent.component.ts");









const routes = [
    { path: "home", component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"], pathMatch: 'full' },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: "admin/addClient", component: _add_client_form_add_client_form_component__WEBPACK_IMPORTED_MODULE_0__["AddClientFormComponent"] },
    { path: 'admin/changePassword', component: _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_5__["ChangePasswordComponent"] },
    { path: 'client', component: _list_agent_list_agent_component__WEBPACK_IMPORTED_MODULE_6__["ListAgentComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav-menu/nav-menu.component */ "./src/app/nav-menu/nav-menu.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class AppComponent {
    constructor() {
        this.title = 'ClientApp';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, consts: [[1, "appContainer"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-nav-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_1__["NavMenuComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: [".appContainer[_ngcontent-%COMP%]{\n    height: 100% !important;\n    width: 100% !important;\n    margin: 0px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx1QkFBdUI7SUFDdkIsc0JBQXNCO0lBQ3RCLHNCQUFzQjtBQUMxQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFwcENvbnRhaW5lcntcbiAgICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact-us/contact-us.component */ "./src/app/contact-us/contact-us.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./nav-menu/nav-menu.component */ "./src/app/nav-menu/nav-menu.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _add_client_form_add_client_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./add-client-form/add-client-form.component */ "./src/app/add-client-form/add-client-form.component.ts");
/* harmony import */ var _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./change-password/change-password.component */ "./src/app/change-password/change-password.component.ts");
/* harmony import */ var _list_agent_list_agent_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./list-agent/list-agent.component */ "./src/app/list-agent/list-agent.component.ts");

















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_10__["ToastrModule"].forRoot()]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_4__["ContactUsComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
        _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
        _nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_7__["NavMenuComponent"],
        _add_client_form_add_client_form_component__WEBPACK_IMPORTED_MODULE_12__["AddClientFormComponent"],
        _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_13__["ChangePasswordComponent"],
        _list_agent_list_agent_component__WEBPACK_IMPORTED_MODULE_14__["ListAgentComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_10__["ToastrModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_4__["ContactUsComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                    _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
                    _nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_7__["NavMenuComponent"],
                    _add_client_form_add_client_form_component__WEBPACK_IMPORTED_MODULE_12__["AddClientFormComponent"],
                    _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_13__["ChangePasswordComponent"],
                    _list_agent_list_agent_component__WEBPACK_IMPORTED_MODULE_14__["ListAgentComponent"],
                ],
                imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_10__["ToastrModule"].forRoot()],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/change-password/change-password.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/change-password/change-password.component.ts ***!
  \**************************************************************/
/*! exports provided: ChangePasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordComponent", function() { return ChangePasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_Agent_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/Agent.service */ "./src/app/_services/Agent.service.ts");
/* harmony import */ var _services_token_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/token-storage.service */ "./src/app/_services/token-storage.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







function ChangePasswordComponent_div_21_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Un nouveau champ de mot de passe est requis");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ChangePasswordComponent_div_21_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Format invalide pour le nouveau mot de passe : ne doit contenir que des lettres et des chiffres");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ChangePasswordComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ChangePasswordComponent_div_21_div_1_Template, 2, 0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ChangePasswordComponent_div_21_div_2_Template, 2, 0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.errors && _r1.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.errors && _r1.errors.pattern);
} }
function ChangePasswordComponent_div_22_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Le champ de confirmation du mot de passe est requis");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ChangePasswordComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ChangePasswordComponent_div_22_div_1_Template, 2, 0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r2.errors && _r2.errors.required);
} }
function ChangePasswordComponent_div_23_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Erreur:Les champs De mot de passe ne se correspondent pas !");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ChangePasswordComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ChangePasswordComponent_div_23_div_1_Template, 2, 0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(_r1.value == _r2.value));
} }
class ChangePasswordComponent {
    constructor(router, agentService, tokenStorage) {
        this.router = router;
        this.agentService = agentService;
        this.tokenStorage = tokenStorage;
        this.username = window.sessionStorage.getItem("username");
        this.changePasswordRequestAgent = {
            username: this.username,
            newPassword: "",
        };
    }
    ngOnInit() {
        if (this.tokenStorage.getToken() == null) {
            this.router.navigate(['/login']);
        }
    }
    changePasswordClicked() {
        this.agentService.ChangePassword(this.changePasswordRequestAgent).subscribe({
            next: data => {
                this.router.navigate(['admin/addClient']);
            },
            error: err => {
                console.log("erreur while changing password");
            }
        });
    }
}
ChangePasswordComponent.ɵfac = function ChangePasswordComponent_Factory(t) { return new (t || ChangePasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_Agent_service__WEBPACK_IMPORTED_MODULE_2__["AgentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_token_storage_service__WEBPACK_IMPORTED_MODULE_3__["TokenStorageService"])); };
ChangePasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChangePasswordComponent, selectors: [["app-change-password"]], decls: 28, vars: 6, consts: [[1, "main"], [1, "mainContainer"], [1, "px-0", "py-0", "formContainer"], [1, "row", "d-flex", "justify-content-center"], [1, "col-6", "text-center"], [1, "card"], [1, "text-center", "mb-4"], [1, "form-card", 3, "ngSubmit"], ["ClientChangePassForm", "ngForm"], [1, "row", "justify-content-between", "text-left"], [1, "form-group", "col-sm-6", "flex-column", "d-flex"], [1, "form-control-label", "px-3"], ["type", "text", "id", "NPassword", "name", "NewPassword", "required", "", "pattern", "[a-zA-Z0-9]+", 3, "ngModel", "ngModelChange"], ["NewPassword", "ngModel"], ["type", "text", "ngModel", "", "id", "ConfirmPass", "name", "ConfirmPass", "required", "", "pattern", "[a-zA-Z0-9]+", 3, "disabled"], ["ConfirmPass", "ngModel"], [4, "ngIf"], [1, "row", "justify-content-center"], [1, "form-group", "col-sm-6"], ["type", "submit", 1, "btn-block", "btn-primary", "yellow-button", 3, "disabled"], ["class", "alert alert-danger", 4, "ngIf"], [1, "alert", "alert-danger"]], template: function ChangePasswordComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Changeez Votre Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ChangePasswordComponent_Template_form_ngSubmit_8_listener() { return ctx.changePasswordClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Nouveau Password ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ChangePasswordComponent_Template_input_ngModelChange_14_listener($event) { return ctx.changePasswordRequestAgent.newPassword = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Confirmez Password ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ChangePasswordComponent_div_21_Template, 3, 2, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, ChangePasswordComponent_div_22_Template, 2, 1, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, ChangePasswordComponent_div_23_Template, 2, 1, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Changer Password ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.changePasswordRequestAgent.newPassword);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !(_r1.touched && _r1.valid));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.touched && !_r1.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r2.touched && !_r2.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r2.value != null && _r2.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !(_r1.value == _r2.value && _r0.valid));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: [".card[_ngcontent-%COMP%]{\n        padding: 20px 40px;\n        margin-top: 5px;\n        margin-bottom: 10px;\n        border: none !important;\n        box-shadow: 0 6px 12px 0 rgba(249, 247, 247, 0.2)\n    \n    }\n   \n   \n    \n    \n    .blue-text[_ngcontent-%COMP%]{\n        color: #00BCD4\n    \n    }\n   \n   \n    \n    \n    .form-control-label[_ngcontent-%COMP%]{\n        margin-bottom: 3px;\n        margin-top: 3px\n    }\n   \n   \n    \n    \n    input[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%], button[_ngcontent-%COMP%]{padding: 8px 15px;\n        border-radius: 5px !important;\n        margin: 5px 0px;\n        box-sizing: border-box;\n        border: 1px solid #ccc;\n        font-size: 18px !important;\n        font-weight: 300}\n   \n   \n    \n    \n    input[_ngcontent-%COMP%]:focus, textarea[_ngcontent-%COMP%]:focus{\n            box-shadow: none !important;\n            border: 1px solid #00BCD4;\n            outline-width: 0;\n            font-weight: 400}\n   \n   \n    \n    \n    .btn-block[_ngcontent-%COMP%]{\n                text-transform: uppercase;\n                font-size: 15px !important;\n                font-weight: 400;\n                height: 43px;\n                cursor: pointer\n            \n            }\n   \n   \n    \n    \n    .btn-block[_ngcontent-%COMP%]:hover{\n                color: #fff !important\n            \n            }\n   \n   \n    \n    \n    button[_ngcontent-%COMP%]:focus{\n                box-shadow: none !important;\n                outline-width: 10\n            }\n   \n   \n    \n    \n    .mainContainer[_ngcontent-%COMP%]{\n  \n   \n    width: 90%;\n    margin: 0px !important;\n    position: absolute;\n    right: 5%;\n\n}\n   \n   \n    \n    \n    .main-layout[_ngcontent-%COMP%]{\n  \n    margin: 0px !important;\n\n}\n   \n   \n    \n    \n    .main[_ngcontent-%COMP%]{\n    min-width: 100vw !important;\n    min-height: 100vh !important;\n    margin: 0px !important;\n    background-color: hsl(217, 54%, 8%);\n    background-image: radial-gradient(650px circle at 0% 0%,\n        hsl(218, 5%, 54%) 15%,\n        hsl(219, 6%, 53%) 35%,\n        hsl(222, 8%, 59%) 75%,\n        hsl(227, 4%, 57%) 80%,\n        transparent 100%),\n      radial-gradient(1250px circle at 100% 100%,\n        hsl(218, 28%, 73%) 15%,\n        hsl(218, 18%, 67%) 35%,\n        hsl(220, 10%, 43%) 75%,\n        hsl(220, 6%, 28%) 80%,\n        transparent 100%);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n   \n   \n    \n    \n    body[_ngcontent-%COMP%] {\n    background-color: #fbfbfb;\n    }\n   \n   \n    \n    \n    @media (min-width: 991.98px) {\n    main[_ngcontent-%COMP%] {\n    padding-left: 240px;\n    }\n    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhbmdlLXBhc3N3b3JkL2NoYW5nZS1wYXNzd29yZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7SUFDSTtRQUNJLGtCQUFrQjtRQUNsQixlQUFlO1FBQ2YsbUJBQW1CO1FBQ25CLHVCQUF1QjtRQUN2Qjs7SUFFSjs7Ozs7SUFLQTtRQUNJOztJQUVKOzs7OztJQUNBO1FBQ0ksa0JBQWtCO1FBQ2xCO0lBQ0o7Ozs7O0lBRUEsd0JBQXdCLGlCQUFpQjtRQUNyQyw2QkFBNkI7UUFDN0IsZUFBZTtRQUNmLHNCQUFzQjtRQUN0QixzQkFBc0I7UUFDdEIsMEJBQTBCO1FBQzFCLGdCQUFnQjs7Ozs7SUFFaEI7WUFHSSwyQkFBMkI7WUFDM0IseUJBQXlCO1lBQ3pCLGdCQUFnQjtZQUNoQixnQkFBZ0I7Ozs7O0lBRWhCO2dCQUNJLHlCQUF5QjtnQkFDekIsMEJBQTBCO2dCQUMxQixnQkFBZ0I7Z0JBQ2hCLFlBQVk7Z0JBQ1o7O1lBRUo7Ozs7O0lBQUM7Z0JBQ0c7O1lBRUo7Ozs7O0lBRUE7Z0JBRUksMkJBQTJCO2dCQUMzQjtZQUNKOzs7OztJQUVaOzs7SUFHSSxVQUFVO0lBQ1Ysc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixTQUFTOztBQUViOzs7OztJQUVBOztJQUVJLHNCQUFzQjs7QUFFMUI7Ozs7O0lBRUE7SUFDSSwyQkFBMkI7SUFDM0IsNEJBQTRCO0lBQzVCLHNCQUFzQjtJQUN0QixtQ0FBbUM7SUFDbkM7Ozs7Ozs7Ozs7O3lCQVdxQjtJQUNyQixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7Ozs7SUFHQTtJQUNJLHlCQUF5QjtJQUN6Qjs7Ozs7SUFDQTtJQUNBO0lBQ0EsbUJBQW1CO0lBQ25CO0lBQ0EiLCJmaWxlIjoic3JjL2FwcC9jaGFuZ2UtcGFzc3dvcmQvY2hhbmdlLXBhc3N3b3JkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAuY2FyZHtcbiAgICAgICAgcGFkZGluZzogMjBweCA0MHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICBib3gtc2hhZG93OiAwIDZweCAxMnB4IDAgcmdiYSgyNDksIDI0NywgMjQ3LCAwLjIpXG4gICAgXG4gICAgfVxuICAgXG4gICBcbiAgICBcbiAgICBcbiAgICAuYmx1ZS10ZXh0e1xuICAgICAgICBjb2xvcjogIzAwQkNENFxuICAgIFxuICAgIH1cbiAgICAuZm9ybS1jb250cm9sLWxhYmVse1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAzcHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDNweFxuICAgIH1cbiAgICBcbiAgICBpbnB1dCwgdGV4dGFyZWEsIGJ1dHRvbntwYWRkaW5nOiA4cHggMTVweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIG1hcmdpbjogNXB4IDBweDtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICAgICAgZm9udC1zaXplOiAxOHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDB9XG4gICAgICAgIFxuICAgICAgICBpbnB1dDpmb2N1cywgdGV4dGFyZWE6Zm9jdXN7XG4gICAgICAgICAgICAtbW96LWJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzAwQkNENDtcbiAgICAgICAgICAgIG91dGxpbmUtd2lkdGg6IDA7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAuYnRuLWJsb2Nre1xuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQzcHg7XG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIH0uYnRuLWJsb2NrOmhvdmVye1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnRcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBidXR0b246Zm9jdXN7LW1vei1ib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIG91dGxpbmUtd2lkdGg6IDEwXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbi5tYWluQ29udGFpbmVye1xuICBcbiAgIFxuICAgIHdpZHRoOiA5MCU7XG4gICAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDUlO1xuXG59XG5cbi5tYWluLWxheW91dHtcbiAgXG4gICAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcblxufVxuXG4ubWFpbntcbiAgICBtaW4td2lkdGg6IDEwMHZ3ICFpbXBvcnRhbnQ7XG4gICAgbWluLWhlaWdodDogMTAwdmggIWltcG9ydGFudDtcbiAgICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgyMTcsIDU0JSwgOCUpO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHJhZGlhbC1ncmFkaWVudCg2NTBweCBjaXJjbGUgYXQgMCUgMCUsXG4gICAgICAgIGhzbCgyMTgsIDUlLCA1NCUpIDE1JSxcbiAgICAgICAgaHNsKDIxOSwgNiUsIDUzJSkgMzUlLFxuICAgICAgICBoc2woMjIyLCA4JSwgNTklKSA3NSUsXG4gICAgICAgIGhzbCgyMjcsIDQlLCA1NyUpIDgwJSxcbiAgICAgICAgdHJhbnNwYXJlbnQgMTAwJSksXG4gICAgICByYWRpYWwtZ3JhZGllbnQoMTI1MHB4IGNpcmNsZSBhdCAxMDAlIDEwMCUsXG4gICAgICAgIGhzbCgyMTgsIDI4JSwgNzMlKSAxNSUsXG4gICAgICAgIGhzbCgyMTgsIDE4JSwgNjclKSAzNSUsXG4gICAgICAgIGhzbCgyMjAsIDEwJSwgNDMlKSA3NSUsXG4gICAgICAgIGhzbCgyMjAsIDYlLCAyOCUpIDgwJSxcbiAgICAgICAgdHJhbnNwYXJlbnQgMTAwJSk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5cbmJvZHkge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYmZiZmI7XG4gICAgfVxuICAgIEBtZWRpYSAobWluLXdpZHRoOiA5OTEuOThweCkge1xuICAgIG1haW4ge1xuICAgIHBhZGRpbmctbGVmdDogMjQwcHg7XG4gICAgfVxuICAgIH1cbiAgXG4gICAiXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChangePasswordComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-change-password',
                templateUrl: './change-password.component.html',
                styleUrls: ['./change-password.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _services_Agent_service__WEBPACK_IMPORTED_MODULE_2__["AgentService"] }, { type: _services_token_storage_service__WEBPACK_IMPORTED_MODULE_3__["TokenStorageService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/contact-us/contact-us.component.ts":
/*!****************************************************!*\
  !*** ./src/app/contact-us/contact-us.component.ts ***!
  \****************************************************/
/*! exports provided: ContactUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsComponent", function() { return ContactUsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");



class ContactUsComponent {
    constructor(fb) {
        this.fb = fb;
    }
    ngOnInit() {
        this.setBackgroundImage();
        this.contactForm = this.fb.group({});
    }
    onSubmit() {
    }
    setBackgroundImage() {
        $('body').css({
            'background-image': 'none',
            'background-repeat': 'no-repeat',
            'background-size': 'cover'
        });
    }
}
ContactUsComponent.ɵfac = function ContactUsComponent_Factory(t) { return new (t || ContactUsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
ContactUsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactUsComponent, selectors: [["app-contact-us"]], decls: 53, vars: 1, consts: [["id", "profile", 1, "container", "mb-5", "mt-5"], [1, "card"], [1, "card-body"], [1, "card-body-inner"], [1, "col-lg-12", "col-md-12"], [1, "contact-form"], ["id", "contactForm", 3, "formGroup", "ngSubmit"], [1, "row"], [1, "col-lg-12", "col-md-6"], [1, "input-group", "form-group"], [1, "input-group-prepend"], [1, "input-group-text"], [1, "fas", "fa-user"], ["type", "text", "placeholder", "your name", 1, "form-control"], [1, "fas", "fa-envelope"], ["type", "email", "name", "email", "id", "email", "placeholder", "Your email address", 1, "form-control"], [1, "fas", "fa-phone"], ["type", "text", "name", "phone_number", "id", "phone_number", "placeholder", "Your phone number", 1, "form-control"], [1, "form-group"], ["name", "message", "id", "message", "cols", "30", "rows", "5", "placeholder", "Write your message...", 1, "form-control"], [1, "col-lg-12", "col-md-12", "text-center"], ["type", "submit", 1, "btn", "btn-warning"], [1, "flaticon-plane"]], template: function ContactUsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Drop Us An Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " We're happy to answer any questions you have or provide you with an estimate. Just send us a message in the form below with any questions you may have. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ContactUsComponent_Template_form_ngSubmit_10_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Full Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Email ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Phone Number ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Your Message ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "textarea", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " Send Message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.contactForm);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"]], styles: [".input-group-prepend[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    width: 50px;\n    background-color: #ffc312;\n    color: black;\n    border: 0 !important;\n}\n\n.container[_ngcontent-%COMP%] {\n    max-width: 600px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC11cy9jb250YWN0LXVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSwyQkFBMkI7QUFDL0IiLCJmaWxlIjoic3JjL2FwcC9jb250YWN0LXVzL2NvbnRhY3QtdXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbnB1dC1ncm91cC1wcmVwZW5kIHNwYW4ge1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmMzMTI7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGJvcmRlcjogMCAhaW1wb3J0YW50O1xufVxuXG4uY29udGFpbmVyIHtcbiAgICBtYXgtd2lkdGg6IDYwMHB4ICFpbXBvcnRhbnQ7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactUsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contact-us',
                templateUrl: './contact-us.component.html',
                styleUrls: ['./contact-us.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_token_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services/token-storage.service */ "./src/app/_services/token-storage.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class HomeComponent {
    constructor(tokenService, router) {
        this.tokenService = tokenService;
        this.router = router;
    }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_token_storage_service__WEBPACK_IMPORTED_MODULE_1__["TokenStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 7, vars: 0, consts: [[1, "container-fluid", "homeContainer"], [1, "col-lg-6", "mb-0", "mb-lg-0", "contentBox", 2, "z-index", "20"], [1, "my-0", "display-5", "fw-bold", "ls-tight", 2, "color", "hsl(218, 81%, 95%)"], [2, "color", "hsl(240, 14%, 93%)"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Jabak Lah ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Espace Agent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".homeContainer[_ngcontent-%COMP%] {\n    background-image: url('background.jpg');\n    background-position: center;\n    background-size: 100% 100%;\n    -o-background-size: cover;\n    width: 100% !important;\n    height: 100% !important;\n    \n  }\n  .contentBox[_ngcontent-%COMP%]{\nposition: absolute;    \ntop: 40% !important;\nleft: 3%;\n\n  }\n  .btn-light-moon[_ngcontent-%COMP%] {\n    background: #FFEFBA;    \n    background: linear-gradient(to right, #FFFFFF, #FFEFBA); \n    color: #000;\n    border: 1px solid #eee;\n    position: relative;\n    -webkit-transition: all 200ms ease-in;\n    -webkit-transform: scale(1); \n    -ms-transition: all 200ms ease-in;\n    -ms-transform: scale(1); \n    -moz-transition: all 200ms ease-in;\n    -moz-transform: scale(1);\n    transition: all 200ms ease-in;\n    transform: scale(1);\n    margin-left: 40%;\n    font-weight: bold;\n}\n  .btn-light-moon[_ngcontent-%COMP%]:hover {\n    z-index: 2;\n    -webkit-transition: all 200ms ease-in;\n    -webkit-transform: scale(1.5);\n    -ms-transition: all 200ms ease-in;\n    -ms-transform: scale(1.5);   \n    -moz-transition: all 200ms ease-in;\n    -moz-transform: scale(1.5);\n    transition: all 200ms ease-in;\n    transform: scale(1.5);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx1Q0FBeUQ7SUFDekQsMkJBQTJCO0lBRzNCLDBCQUEwQjtJQUMxQix5QkFBeUI7SUFDekIsc0JBQXNCO0lBQ3RCLHVCQUF1Qjs7RUFFekI7RUFDQTtBQUNGLGtCQUFrQjtBQUNsQixtQkFBbUI7QUFDbkIsUUFBUTs7RUFFTjtFQUNBO0lBQ0UsbUJBQW1CLEdBQUcsOEJBQThCLEdBQ2MsK0JBQStCO0lBQ2pHLHVEQUF1RCxFQUFFLHFFQUFxRTtJQUM5SCxXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixxQ0FBcUM7SUFDckMsMkJBQTJCO0lBQzNCLGlDQUFpQztJQUNqQyx1QkFBdUI7SUFDdkIsa0NBQWtDO0lBQ2xDLHdCQUF3QjtJQUN4Qiw2QkFBNkI7SUFDN0IsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7RUFDQTtJQUNJLFVBQVU7SUFDVixxQ0FBcUM7SUFDckMsNkJBQTZCO0lBQzdCLGlDQUFpQztJQUNqQyx5QkFBeUI7SUFDekIsa0NBQWtDO0lBQ2xDLDBCQUEwQjtJQUMxQiw2QkFBNkI7SUFDN0IscUJBQXFCO0FBQ3pCIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaG9tZUNvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdzcmNcXGFzc2V0c1xcaW1hZ2VzXFxiYWNrZ3JvdW5kLmpwZycpO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xuICAgIC1vLWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcbiAgICBcbiAgfVxuICAuY29udGVudEJveHtcbnBvc2l0aW9uOiBhYnNvbHV0ZTsgICAgXG50b3A6IDQwJSAhaW1wb3J0YW50O1xubGVmdDogMyU7XG5cbiAgfVxuICAuYnRuLWxpZ2h0LW1vb24ge1xuICAgIGJhY2tncm91bmQ6ICNGRkVGQkE7ICAvKiBmYWxsYmFjayBmb3Igb2xkIGJyb3dzZXJzICovXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNGRkZGRkYsICNGRkVGQkEpOyAgLyogQ2hyb21lIDEwLTI1LCBTYWZhcmkgNS4xLTYgKi9cbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNGRkZGRkYsICNGRkVGQkEpOyAvKiBXM0MsIElFIDEwKy8gRWRnZSwgRmlyZWZveCAxNissIENocm9tZSAyNissIE9wZXJhIDEyKywgU2FmYXJpIDcrICovXG4gICAgY29sb3I6ICMwMDA7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMjAwbXMgZWFzZS1pbjtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7IFxuICAgIC1tcy10cmFuc2l0aW9uOiBhbGwgMjAwbXMgZWFzZS1pbjtcbiAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxKTsgXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMjAwbXMgZWFzZS1pbjtcbiAgICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgdHJhbnNpdGlvbjogYWxsIDIwMG1zIGVhc2UtaW47XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICBtYXJnaW4tbGVmdDogNDAlO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmJ0bi1saWdodC1tb29uOmhvdmVyIHtcbiAgICB6LWluZGV4OiAyO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDIwMG1zIGVhc2UtaW47XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuNSk7XG4gICAgLW1zLXRyYW5zaXRpb246IGFsbCAyMDBtcyBlYXNlLWluO1xuICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEuNSk7ICAgXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMjAwbXMgZWFzZS1pbjtcbiAgICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMS41KTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMjAwbXMgZWFzZS1pbjtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuNSk7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return [{ type: _services_token_storage_service__WEBPACK_IMPORTED_MODULE_1__["TokenStorageService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/list-agent/list-agent.component.ts":
/*!****************************************************!*\
  !*** ./src/app/list-agent/list-agent.component.ts ***!
  \****************************************************/
/*! exports provided: ListAgentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListAgentComponent", function() { return ListAgentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_Agent_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../_services/Agent.service */ "./src/app/_services/Agent.service.ts");
/* harmony import */ var _services_token_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/token-storage.service */ "./src/app/_services/token-storage.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







function ListAgentComponent_tr_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const client_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](client_r1.nom);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](client_r1.prenom);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](client_r1.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](client_r1.numTel);
} }
const AgentHasntChangedPassword = false;
class ListAgentComponent {
    constructor(agentService, tokenService, router) {
        this.agentService = agentService;
        this.tokenService = tokenService;
        this.router = router;
        this.username = window.sessionStorage.getItem("username");
        this.clients = [];
        this.filteredClients = [];
        this.searchTerm = '';
    }
    ngOnInit() {
        if (this.tokenService.getToken() == null) {
            this.router.navigate(['/home']);
        }
        if (this.tokenService.getToken() != null) {
            this.agentService.getAgentHasFirstAuth(this.username).subscribe({
                next: data => {
                    console.log(data);
                    if (data == AgentHasntChangedPassword) {
                        this.router.navigate(['admin/changePassword']);
                    }
                },
                error: err => {
                    console.log("error while getting firstauth");
                }
            });
            this.loadClients();
        }
    }
    loadClients() {
        this.agentService.findAllClients().subscribe((clients) => {
            this.clients = clients;
            this.filterClients();
        }, error => {
            console.error('Error retrieving clients:', error);
        });
    }
    filterClients() {
        if (this.searchTerm.trim() === '') {
            this.filteredClients = this.clients;
        }
        else {
            this.filteredClients = this.clients.filter(client => client.nom.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                client.prenom.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                client.numTel.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                client.email.toLowerCase().includes(this.searchTerm.toLowerCase()));
        }
    }
}
ListAgentComponent.ɵfac = function ListAgentComponent_Factory(t) { return new (t || ListAgentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_Agent_service__WEBPACK_IMPORTED_MODULE_1__["AgentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_token_storage_service__WEBPACK_IMPORTED_MODULE_2__["TokenStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
ListAgentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ListAgentComponent, selectors: [["app-list-agent"]], decls: 20, vars: 2, consts: [[1, "container-fluid", "homeContainer"], [1, "col-lg-6", "mb-0", "mb-lg-0", "contentBox"], [1, "my-0", "display-5", "fw-bold", "ls-tight"], [1, "search-container"], ["type", "text", "placeholder", "Search", 3, "ngModel", "ngModelChange"], [1, "table-container"], [1, "client-table"], [4, "ngFor", "ngForOf"]], template: function ListAgentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Clients");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ListAgentComponent_Template_input_ngModelChange_5_listener($event) { return ctx.searchTerm = $event; })("ngModelChange", function ListAgentComponent_Template_input_ngModelChange_5_listener() { return ctx.filterClients(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "table", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Last Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ListAgentComponent_tr_19_Template, 9, 4, "tr", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchTerm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.filteredClients);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], styles: [".homeContainer[_ngcontent-%COMP%] {\n\n    background-image: radial-gradient(650px circle at 0% 0%,\n    hsl(218, 5%, 54%) 15%,\n    hsl(219, 6%, 53%) 35%,\n    hsl(222, 8%, 59%) 75%,\n    hsl(227, 4%, 57%) 80%,\n    transparent 100%),\n  radial-gradient(1250px circle at 100% 100%,\n    hsl(218, 28%, 73%) 15%,\n    hsl(218, 18%, 67%) 35%,\n    hsl(220, 10%, 43%) 75%,\n    hsl(220, 6%, 28%) 80%,\n    transparent 100%);\n    background-position: center;\n    background-size: 100% 100%;\n    -o-background-size: cover;\n    width: 100% !important;\n    height: 100% !important;\n    \n  }\n  .contentBox[_ngcontent-%COMP%]{\nposition: absolute;    \ntop: 20% !important;\nleft: 25%;\n\n  }\n  .btn-light-moon[_ngcontent-%COMP%] {\n    background: #FFEFBA;    \n    background: linear-gradient(to right, #FFFFFF, #FFEFBA); \n    color: #000;\n    border: 1px solid #eee;\n    position: relative;\n    -webkit-transition: all 200ms ease-in;\n    -webkit-transform: scale(1); \n    -ms-transition: all 200ms ease-in;\n    -ms-transform: scale(1); \n    -moz-transition: all 200ms ease-in;\n    -moz-transform: scale(1);\n    transition: all 200ms ease-in;\n    transform: scale(1);\n    margin-left: 40%;\n    font-weight: bold;\n}\n  .btn-light-moon[_ngcontent-%COMP%]:hover {\n    z-index: 2;\n    -webkit-transition: all 200ms ease-in;\n    -webkit-transform: scale(1.5);\n    -ms-transition: all 200ms ease-in;\n    -ms-transform: scale(1.5);   \n    -moz-transition: all 200ms ease-in;\n    -moz-transform: scale(1.5);\n    transition: all 200ms ease-in;\n    transform: scale(1.5);\n}\n  .homeContainer[_ngcontent-%COMP%] {\n    padding: 20px;\n  }\n  .contentBox[_ngcontent-%COMP%] {\n    z-index: 20;\n  }\n  .display-5[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n  .search-container[_ngcontent-%COMP%] {\n    margin-bottom: 20px;\n  }\n  .client-table[_ngcontent-%COMP%] {\n    width: 100%;\n    border-collapse: collapse;\n  }\n  .client-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .client-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 8px;\n    text-align: left;\n    border-bottom: 1px solid #ddd;\n  }\n  .client-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n    font-weight: bold;\n  }\n  .client-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even) {\n    background-color: #f2f2f2;\n  }\n  .homeContainer[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 100vh;\n  }\n  .contentBox[_ngcontent-%COMP%] {\n    z-index: 20;\n    text-align: center;\n    max-width: 600px;\n    margin: 0 auto;\n  }\n  .display-5[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n  .search-container[_ngcontent-%COMP%] {\n    margin-bottom: 20px;\n  }\n  .client-table[_ngcontent-%COMP%] {\n    width: 100%;\n    border-collapse: collapse;\n  }\n  .client-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .client-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 8px;\n    text-align: left;\n    border-bottom: 1px solid #ddd;\n  }\n  .client-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n    font-weight: bold;\n  }\n  .client-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even) {\n    background-color: #f2f2f2;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlzdC1hZ2VudC9saXN0LWFnZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUk7Ozs7Ozs7Ozs7O3FCQVdpQjtJQUNqQiwyQkFBMkI7SUFHM0IsMEJBQTBCO0lBQzFCLHlCQUF5QjtJQUN6QixzQkFBc0I7SUFDdEIsdUJBQXVCOztFQUV6QjtFQUNBO0FBQ0Ysa0JBQWtCO0FBQ2xCLG1CQUFtQjtBQUNuQixTQUFTOztFQUVQO0VBQ0E7SUFDRSxtQkFBbUIsR0FBRyw4QkFBOEIsR0FDYywrQkFBK0I7SUFDakcsdURBQXVELEVBQUUscUVBQXFFO0lBQzlILFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLHFDQUFxQztJQUNyQywyQkFBMkI7SUFDM0IsaUNBQWlDO0lBQ2pDLHVCQUF1QjtJQUN2QixrQ0FBa0M7SUFDbEMsd0JBQXdCO0lBQ3hCLDZCQUE2QjtJQUM3QixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjtFQUNBO0lBQ0ksVUFBVTtJQUNWLHFDQUFxQztJQUNyQyw2QkFBNkI7SUFDN0IsaUNBQWlDO0lBQ2pDLHlCQUF5QjtJQUN6QixrQ0FBa0M7SUFDbEMsMEJBQTBCO0lBQzFCLDZCQUE2QjtJQUM3QixxQkFBcUI7QUFDekI7RUFDQTtJQUNJLGFBQWE7RUFDZjtFQUVBO0lBQ0UsV0FBVztFQUNiO0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7RUFFQTtJQUNFLG1CQUFtQjtFQUNyQjtFQUVBO0lBQ0UsV0FBVztJQUNYLHlCQUF5QjtFQUMzQjtFQUVBOztJQUVFLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsNkJBQTZCO0VBQy9CO0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7RUFFQTtJQUNFLHlCQUF5QjtFQUMzQjtFQUNBO0lBQ0UsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsYUFBYTtFQUNmO0VBRUE7SUFDRSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixjQUFjO0VBQ2hCO0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7RUFFQTtJQUNFLG1CQUFtQjtFQUNyQjtFQUVBO0lBQ0UsV0FBVztJQUNYLHlCQUF5QjtFQUMzQjtFQUVBOztJQUVFLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsNkJBQTZCO0VBQy9CO0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7RUFFQTtJQUNFLHlCQUF5QjtFQUMzQiIsImZpbGUiOiJzcmMvYXBwL2xpc3QtYWdlbnQvbGlzdC1hZ2VudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhvbWVDb250YWluZXIge1xuXG4gICAgYmFja2dyb3VuZC1pbWFnZTogcmFkaWFsLWdyYWRpZW50KDY1MHB4IGNpcmNsZSBhdCAwJSAwJSxcbiAgICBoc2woMjE4LCA1JSwgNTQlKSAxNSUsXG4gICAgaHNsKDIxOSwgNiUsIDUzJSkgMzUlLFxuICAgIGhzbCgyMjIsIDglLCA1OSUpIDc1JSxcbiAgICBoc2woMjI3LCA0JSwgNTclKSA4MCUsXG4gICAgdHJhbnNwYXJlbnQgMTAwJSksXG4gIHJhZGlhbC1ncmFkaWVudCgxMjUwcHggY2lyY2xlIGF0IDEwMCUgMTAwJSxcbiAgICBoc2woMjE4LCAyOCUsIDczJSkgMTUlLFxuICAgIGhzbCgyMTgsIDE4JSwgNjclKSAzNSUsXG4gICAgaHNsKDIyMCwgMTAlLCA0MyUpIDc1JSxcbiAgICBoc2woMjIwLCA2JSwgMjglKSA4MCUsXG4gICAgdHJhbnNwYXJlbnQgMTAwJSk7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG4gICAgLW8tYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xuICAgIFxuICB9XG4gIC5jb250ZW50Qm94e1xucG9zaXRpb246IGFic29sdXRlOyAgICBcbnRvcDogMjAlICFpbXBvcnRhbnQ7XG5sZWZ0OiAyNSU7XG5cbiAgfVxuICAuYnRuLWxpZ2h0LW1vb24ge1xuICAgIGJhY2tncm91bmQ6ICNGRkVGQkE7ICAvKiBmYWxsYmFjayBmb3Igb2xkIGJyb3dzZXJzICovXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNGRkZGRkYsICNGRkVGQkEpOyAgLyogQ2hyb21lIDEwLTI1LCBTYWZhcmkgNS4xLTYgKi9cbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNGRkZGRkYsICNGRkVGQkEpOyAvKiBXM0MsIElFIDEwKy8gRWRnZSwgRmlyZWZveCAxNissIENocm9tZSAyNissIE9wZXJhIDEyKywgU2FmYXJpIDcrICovXG4gICAgY29sb3I6ICMwMDA7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMjAwbXMgZWFzZS1pbjtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7IFxuICAgIC1tcy10cmFuc2l0aW9uOiBhbGwgMjAwbXMgZWFzZS1pbjtcbiAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxKTsgXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMjAwbXMgZWFzZS1pbjtcbiAgICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgdHJhbnNpdGlvbjogYWxsIDIwMG1zIGVhc2UtaW47XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICBtYXJnaW4tbGVmdDogNDAlO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmJ0bi1saWdodC1tb29uOmhvdmVyIHtcbiAgICB6LWluZGV4OiAyO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDIwMG1zIGVhc2UtaW47XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuNSk7XG4gICAgLW1zLXRyYW5zaXRpb246IGFsbCAyMDBtcyBlYXNlLWluO1xuICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEuNSk7ICAgXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMjAwbXMgZWFzZS1pbjtcbiAgICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMS41KTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMjAwbXMgZWFzZS1pbjtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuNSk7XG59XG4uaG9tZUNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMjBweDtcbiAgfVxuICBcbiAgLmNvbnRlbnRCb3gge1xuICAgIHotaW5kZXg6IDIwO1xuICB9XG4gIFxuICAuZGlzcGxheS01IHtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgfVxuICBcbiAgLnNlYXJjaC1jb250YWluZXIge1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIH1cbiAgXG4gIC5jbGllbnQtdGFibGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIH1cbiAgXG4gIC5jbGllbnQtdGFibGUgdGgsXG4gIC5jbGllbnQtdGFibGUgdGQge1xuICAgIHBhZGRpbmc6IDhweDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xuICB9XG4gIFxuICAuY2xpZW50LXRhYmxlIHRoIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuICBcbiAgLmNsaWVudC10YWJsZSB0Ym9keSB0cjpudGgtY2hpbGQoZXZlbikge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XG4gIH1cbiAgLmhvbWVDb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICB9XG4gIFxuICAuY29udGVudEJveCB7XG4gICAgei1pbmRleDogMjA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1heC13aWR0aDogNjAwcHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gIH1cbiAgXG4gIC5kaXNwbGF5LTUge1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICB9XG4gIFxuICAuc2VhcmNoLWNvbnRhaW5lciB7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgfVxuICBcbiAgLmNsaWVudC10YWJsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgfVxuICBcbiAgLmNsaWVudC10YWJsZSB0aCxcbiAgLmNsaWVudC10YWJsZSB0ZCB7XG4gICAgcGFkZGluZzogOHB4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XG4gIH1cbiAgXG4gIC5jbGllbnQtdGFibGUgdGgge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG4gIFxuICAuY2xpZW50LXRhYmxlIHRib2R5IHRyOm50aC1jaGlsZChldmVuKSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcbiAgfVxuICAgICJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListAgentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-list-agent',
                templateUrl: './list-agent.component.html',
                styleUrls: ['./list-agent.component.css']
            }]
    }], function () { return [{ type: _services_Agent_service__WEBPACK_IMPORTED_MODULE_1__["AgentService"] }, { type: _services_token_storage_service__WEBPACK_IMPORTED_MODULE_2__["TokenStorageService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var _services_token_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../_services/token-storage.service */ "./src/app/_services/token-storage.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");








function LoginComponent_div_21_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Le champ Username est requis.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_div_21_span_1_Template, 2, 0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.Username.hasError("required"));
} }
function LoginComponent_div_22_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Le champ Password est requis");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_div_22_span_1_Template, 2, 0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.Password.hasError("required"));
} }
class LoginComponent {
    constructor(router, route, fb, authService, tokenStorage) {
        this.router = router;
        this.route = route;
        this.fb = fb;
        this.authService = authService;
        this.tokenStorage = tokenStorage;
        this.isLoggedIn = false;
        this.isLoginFailed = false;
        this.errorMessage = '';
        this.roles = [];
    }
    ngOnInit() {
        if (this.tokenStorage.getToken() != null) {
            this.router.navigate(['/admin/addClient']);
        }
        else {
        }
        // Initialize Form Controls
        this.Username = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
        this.Password = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
        // Initialize FormGroup using FormBuilder
        this.insertForm = this.fb.group({
            Username: this.Username,
            Password: this.Password,
        });
    }
    submitAdminLogInForm() {
        const logIn = this.Username.value;
        const password = this.Password.value;
        this.authService.login(logIn, password).subscribe({
            next: data => {
                console.log(data);
                this.tokenStorage.saveToken(data.accessToken);
                this.tokenStorage.saveAgent(data);
                window.sessionStorage.setItem("username", logIn);
                this.isLoginFailed = false;
                this.isLoggedIn = true;
                this.roles = this.tokenStorage.getAgent().roles;
                this.router.navigate(['admin/addClient']);
                this.reloadPage();
            },
            error: err => {
                this.errorMessage = err.error.message;
                this.isLoginFailed = true;
            }
        });
    }
    reloadPage() {
        window.location.reload();
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_token_storage_service__WEBPACK_IMPORTED_MODULE_4__["TokenStorageService"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 24, vars: 3, consts: [[1, "container-fluid", "loginContainer"], [1, "d-flex", "justify-content-center", "h-100"], [1, "card"], [1, "card-header"], [1, "card-body"], [3, "formGroup", "ngSubmit"], [1, "input-group", "form-group"], [1, "input-group-prepend"], [1, "input-group-text"], [1, "fas", "fa-user"], ["formControlName", "Username", "type", "text", "placeholder", "username", 1, "form-control"], [1, "fas", "fa-key"], ["formControlName", "Password", "type", "password", "placeholder", "password", 1, "form-control"], [1, "form-group"], ["type", "submit", "value", "Login", 1, "btn", "float-right", "login_btn"], ["id", "errors"], ["class", "errorMessage", 4, "ngIf"], [1, "card-footer"], [1, "errorMessage"], [4, "ngIf"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Connexion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_7_listener() { return ctx.submitAdminLogInForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, LoginComponent_div_21_Template, 2, 1, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, LoginComponent_div_22_Template, 2, 1, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.insertForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Username.touched && ctx.Username.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Password.touched && ctx.Password.errors);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: [".errorMessage[_ngcontent-%COMP%] {\n    color: #ede5e5;\n}\n\n.loginContainer[_ngcontent-%COMP%] {\n    height: 100%;\n    width: 100%;\n    align-content: center;\n    background-image: url('background.jpg');\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: 100% 100% !important;\n}\n\n.card[_ngcontent-%COMP%] {\n    height: 370px;\n    margin-top: auto;\n    margin-bottom: auto;\n    width: 400px;\n    background-color: rgba(28, 31, 70, 0.505) !important;\n}\n\n.social_icon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 60px;\n    margin-left: 10px;\n    color: #f4f3ef;\n}\n\n.social_icon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover {\n    color: white;\n    cursor: pointer;\n}\n\n.card-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    color: rgb(239, 231, 231);\n}\n\n.social_icon[_ngcontent-%COMP%] {\n    position: absolute;\n    right: 20px;\n    top: -45px;\n}\n\n.input-group-prepend[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    width: 50px;\n    background-color: #f6f3ec;\n    color: black;\n    border: 0 !important;\n}\n\ninput[_ngcontent-%COMP%]:focus {\n    outline: 0 0 0 0 !important;\n    box-shadow: 0 0 0 0 !important;\n}\n\n.remember[_ngcontent-%COMP%] {\n    color: rgb(217, 219, 226);\n}\n\n.remember[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    width: 20px;\n    height: 20px;\n    margin-left: 15px;\n    margin-right: 5px;\n}\n\n.login_btn[_ngcontent-%COMP%] {\n    color: black;\n    background-color: #ecebf3;\n    width: 100px;\n}\n\n.login_btn[_ngcontent-%COMP%]:hover {\n    color: black;\n    background-color: white;\n}\n\n.links[_ngcontent-%COMP%] {\n    color: white;\n}\n\n.links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    margin-left: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLHFCQUFxQjtJQUNyQix1Q0FBeUQ7SUFDekQsNEJBQTRCO0lBQzVCLDJCQUEyQjtJQUMzQixxQ0FBcUM7QUFDekM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osb0RBQW9EO0FBQ3hEOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXJyb3JNZXNzYWdlIHtcbiAgICBjb2xvcjogI2VkZTVlNTtcbn1cblxuLmxvZ2luQ29udGFpbmVyIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcInNyY1xcYXNzZXRzXFxpbWFnZXNcXGJhY2tncm91bmQuanBnXCIpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlICFpbXBvcnRhbnQ7XG59XG5cbi5jYXJkIHtcbiAgICBoZWlnaHQ6IDM3MHB4O1xuICAgIG1hcmdpbi10b3A6IGF1dG87XG4gICAgbWFyZ2luLWJvdHRvbTogYXV0bztcbiAgICB3aWR0aDogNDAwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyOCwgMzEsIDcwLCAwLjUwNSkgIWltcG9ydGFudDtcbn1cblxuLnNvY2lhbF9pY29uIHNwYW4ge1xuICAgIGZvbnQtc2l6ZTogNjBweDtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBjb2xvcjogI2Y0ZjNlZjtcbn1cblxuLnNvY2lhbF9pY29uIHNwYW46aG92ZXIge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jYXJkLWhlYWRlciBoMyB7XG4gICAgY29sb3I6IHJnYigyMzksIDIzMSwgMjMxKTtcbn1cblxuLnNvY2lhbF9pY29uIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDIwcHg7XG4gICAgdG9wOiAtNDVweDtcbn1cblxuLmlucHV0LWdyb3VwLXByZXBlbmQgc3BhbiB7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjNlYztcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgYm9yZGVyOiAwICFpbXBvcnRhbnQ7XG59XG5cbmlucHV0OmZvY3VzIHtcbiAgICBvdXRsaW5lOiAwIDAgMCAwICFpbXBvcnRhbnQ7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgMCAhaW1wb3J0YW50O1xufVxuXG4ucmVtZW1iZXIge1xuICAgIGNvbG9yOiByZ2IoMjE3LCAyMTksIDIyNik7XG59XG5cbi5yZW1lbWJlciBpbnB1dCB7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICAgIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG4ubG9naW5fYnRuIHtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VjZWJmMztcbiAgICB3aWR0aDogMTAwcHg7XG59XG5cbi5sb2dpbl9idG46aG92ZXIge1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLmxpbmtzIHtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi5saW5rcyBhIHtcbiAgICBtYXJnaW4tbGVmdDogNHB4O1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: _services_token_storage_service__WEBPACK_IMPORTED_MODULE_4__["TokenStorageService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/nav-menu/nav-menu.component.ts":
/*!************************************************!*\
  !*** ./src/app/nav-menu/nav-menu.component.ts ***!
  \************************************************/
/*! exports provided: NavMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavMenuComponent", function() { return NavMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_token_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../_services/token-storage.service */ "./src/app/_services/token-storage.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function NavMenuComponent_li_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Accueil ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "(current)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavMenuComponent_li_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Ajouter Client ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavMenuComponent_li_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Liste Client ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function () { return ["/login"]; };
function NavMenuComponent_button_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Login ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
} }
function NavMenuComponent_li_17_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavMenuComponent_li_17_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.onLogout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Logout ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class NavMenuComponent {
    constructor(router, tokenStorage) {
        this.router = router;
        this.tokenStorage = tokenStorage;
        this.isLoggedIn = false;
    }
    ngOnInit() {
        this.isLoggedIn = (this.tokenStorage.getToken() != null);
    }
    onLogout() {
        this.router.navigate(['/home']);
        this.tokenStorage.signOut();
        window.location.reload();
    }
}
NavMenuComponent.ɵfac = function NavMenuComponent_Factory(t) { return new (t || NavMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_token_storage_service__WEBPACK_IMPORTED_MODULE_2__["TokenStorageService"])); };
NavMenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavMenuComponent, selectors: [["app-nav-menu"]], decls: 18, vars: 5, consts: [[1, "navbar", "navbar-expand-lg", "navbar-light", "fixed-top", "custom-bg"], [1, "container"], ["href", "#", 1, "navbar-brand"], ["id", "jabakSpan"], ["id", "lahSpan"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarResponsive", "aria-controls", "navbarResponsive", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarResponsive", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "ml-auto"], ["class", "nav-item active", 4, "ngIf"], [1, "nav-item"], ["role", "group", "aria-label", "signin", 1, "btn-group"], ["type", "button", "class", "btn btn-outline-dark ", 3, "routerLink", 4, "ngIf"], ["class", "nav-item", 4, "ngIf"], [1, "nav-item", "active"], ["routerLink", "home", 1, "nav-link"], [1, "sr-only"], ["routerLink", "admin/addClient", 1, "nav-link"], ["routerLink", "client", 1, "nav-link"], ["type", "button", 1, "btn", "btn-outline-dark", 3, "routerLink"], [1, "topbar-divider", "d-none", "d-sm-block"], [1, "dropdown-divider"], [1, "p-1"], [1, "btn", "btn-warning", "w-100", "mt-1", 3, "click"], [1, "fas", "fa-sign-out-alt", "fa-sm", "fa-fw", "mr-2", "text-gray-400"]], template: function NavMenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Jabak");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Lah");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, NavMenuComponent_li_11_Template, 5, 0, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, NavMenuComponent_li_12_Template, 4, 0, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, NavMenuComponent_li_13_Template, 4, 0, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, NavMenuComponent_button_16_Template, 2, 2, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, NavMenuComponent_li_17_Template, 8, 0, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoggedIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoggedIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoggedIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoggedIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoggedIn);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: ["#jabakSpan[_ngcontent-%COMP%]{\n    font-size: 28pt;\n    color: rgb(17, 17, 18);\n    font-weight: bold;\n}\n#lahSpan[_ngcontent-%COMP%]{\n    font-size: 28pt;\n    color: hsl(300, 2%, 10%);\n    font-weight: bold;\n}\n.custom-bg[_ngcontent-%COMP%] {\n    background-color: rgb(250, 248, 248);\n    \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2LW1lbnUvbmF2LW1lbnUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZixzQkFBc0I7SUFDdEIsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxlQUFlO0lBQ2Ysd0JBQXdCO0lBQ3hCLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksb0NBQW9DOztBQUV4QyIsImZpbGUiOiJzcmMvYXBwL25hdi1tZW51L25hdi1tZW51LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjamFiYWtTcGFue1xuICAgIGZvbnQtc2l6ZTogMjhwdDtcbiAgICBjb2xvcjogcmdiKDE3LCAxNywgMTgpO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuI2xhaFNwYW57XG4gICAgZm9udC1zaXplOiAyOHB0O1xuICAgIGNvbG9yOiBoc2woMzAwLCAyJSwgMTAlKTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5jdXN0b20tYmcge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTAsIDI0OCwgMjQ4KTtcbiAgICBcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavMenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-nav-menu',
                templateUrl: './nav-menu.component.html',
                styleUrls: ['./nav-menu.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _services_token_storage_service__WEBPACK_IMPORTED_MODULE_2__["TokenStorageService"] }]; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
const environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/brahim/Desktop/Z/JabakLah_Front_Agent-main/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map