"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ApiService = void 0;
var http_1 = require("@angular/common/http");
var core_1 = require("@angular/core");
var operators_1 = require("rxjs/operators");
var rxjs_1 = require("rxjs");
var ApiService = /** @class */ (function () {
    function ApiService(_http, router) {
        this._http = _http;
        this.router = router;
        this.host = 'https://localhost:44334/';
    }
    ApiService.prototype.post = function (url, obj) {
        var _this = this;
        var body = JSON.stringify(obj); // chuyen doi tuong thanh json gui den mai chu
        var cloneHeader = {};
        cloneHeader['Content-Type'] = 'application/json';
        var headerOptions = new http_1.HttpHeaders(cloneHeader);
        return this._http
            .post(this.host + url, body, { headers: headerOptions })
            .pipe(operators_1.map(function (res) {
            var json = res;
            return json;
        }))
            .pipe(operators_1.catchError(function (err) {
            return _this.handleError(err);
        }));
    };
    //Http Put
    ApiService.prototype.put = function (url, obj) {
        var _this = this;
        var body = JSON.stringify(obj);
        var cloneHeader = {};
        cloneHeader['Content-Type'] = 'application/json';
        var headerOptions = new http_1.HttpHeaders(cloneHeader);
        return this._http
            .put(this.host + url, body, { headers: headerOptions })
            .pipe(operators_1.map(function (res) {
            var json = res;
            return json;
        }))
            .pipe(operators_1.catchError(function (err) {
            return _this.handleError(err);
        }));
    };
    ApiService.prototype.get = function (url) {
        var _this = this;
        var cloneHeader = {};
        cloneHeader['Content-Type'] = 'application/json';
        var headerOptions = new http_1.HttpHeaders(cloneHeader);
        return this._http
            .get(this.host + url, { headers: headerOptions })
            .pipe(operators_1.map(function (res) {
            var json = res;
            return json;
        }))
            .pipe(operators_1.catchError(function (err) {
            return _this.handleError(err);
        }));
    };
    ApiService.prototype.handleError = function (error) {
        //   this.router.navigate(['/err']);
        return rxjs_1.throwError(error);
    };
    ApiService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], ApiService);
    return ApiService;
}());
exports.ApiService = ApiService;
