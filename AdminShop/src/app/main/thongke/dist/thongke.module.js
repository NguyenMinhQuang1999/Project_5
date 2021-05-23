"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ThongkeModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var shared_module_1 = require("src/app/shared/shared.module");
var ngx_pagination_1 = require("ngx-pagination");
var thongke_component_1 = require("./thongke.component");
var product_component_1 = require("./product/product.component");
var routes = [
    {
        path: '',
        component: thongke_component_1.ThongkeComponent
    },
    {
        path: 'products', component: product_component_1.ProductComponent
    }
];
var ThongkeModule = /** @class */ (function () {
    function ThongkeModule() {
    }
    ThongkeModule = __decorate([
        core_1.NgModule({
            declarations: [product_component_1.ProductComponent],
            imports: [
                router_1.RouterModule.forChild(routes),
                common_1.CommonModule,
                shared_module_1.SharedModule,
                ngx_pagination_1.NgxPaginationModule
            ]
        })
    ], ThongkeModule);
    return ThongkeModule;
}());
exports.ThongkeModule = ThongkeModule;
