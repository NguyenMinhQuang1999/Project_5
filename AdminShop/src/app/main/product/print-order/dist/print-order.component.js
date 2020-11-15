"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PrintOrderComponent = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var base_component_1 = require("src/app/common/base-component");
var PrintOrderComponent = /** @class */ (function (_super) {
    __extends(PrintOrderComponent, _super);
    function PrintOrderComponent(injector) {
        var _this = _super.call(this, injector) || this;
        _this.injector = injector;
        _this.day = new Date();
        return _this;
    }
    PrintOrderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function (params) {
            var id = params['id'];
            rxjs_1.Observable.combineLatest(_this._api.get('api/bill/get-bill-detail/' + id)).takeUntil(_this.unsubcribe).subscribe(function (res) {
                _this.order_detail = res[0];
                console.log(_this.order_detail);
                setTimeout(function () {
                    console.log(_this.order_detail);
                    _this.total = (_this.order_detail[0]['total']);
                    _this.phone = (_this.order_detail[0]['phone']);
                    _this.address = (_this.order_detail[0]['address']);
                    _this.name = (_this.order_detail[0]['customer_name']);
                    _this.created_at = (_this.order_detail[0]['created_at']);
                });
            });
        });
        this.printOrder();
    };
    PrintOrderComponent.prototype.printOrder = function () {
        setTimeout(function () {
            print();
        }, 1000);
    };
    PrintOrderComponent = __decorate([
        core_1.Component({
            selector: 'app-print-order',
            templateUrl: './print-order.component.html',
            styleUrls: ['./print-order.component.css']
        })
    ], PrintOrderComponent);
    return PrintOrderComponent;
}(base_component_1.BaseComponent));
exports.PrintOrderComponent = PrintOrderComponent;
