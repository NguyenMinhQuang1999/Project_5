"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ProductModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var product_component_1 = require("./product/product.component");
var type_component_1 = require("./type/type.component");
var api_1 = require("primeng/api");
var order_component_1 = require("./order/order.component");
var forms_1 = require("@angular/forms");
var fileupload_1 = require("primeng/fileupload");
var ngx_pagination_1 = require("ngx-pagination");
var tinymce_angular_1 = require("@tinymce/tinymce-angular");
var toast_1 = require("primeng/toast");
var ng2_search_filter_1 = require("ng2-search-filter");
var ngx_print_1 = require("ngx-print");
var routes = [
    {
        path: 'product',
        component: product_component_1.ProductComponent
    },
    { path: 'category', component: type_component_1.TypeComponent },
    { path: 'order', component: order_component_1.OrderComponent },
];
var ProductModule = /** @class */ (function () {
    function ProductModule() {
    }
    ProductModule = __decorate([
        core_1.NgModule({
            declarations: [product_component_1.ProductComponent, type_component_1.TypeComponent, order_component_1.OrderComponent],
            imports: [
                router_1.RouterModule.forChild(routes),
                common_1.CommonModule,
                api_1.SharedModule,
                forms_1.ReactiveFormsModule,
                fileupload_1.FileUploadModule,
                ngx_pagination_1.NgxPaginationModule,
                tinymce_angular_1.EditorModule,
                toast_1.ToastModule,
                ng2_search_filter_1.Ng2SearchPipeModule,
                forms_1.FormsModule,
                ngx_print_1.NgxPrintModule
            ]
        })
    ], ProductModule);
    return ProductModule;
}());
exports.ProductModule = ProductModule;
