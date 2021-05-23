"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var animations_1 = require("@angular/platform-browser/animations");
var forms_1 = require("@angular/forms");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var login_component_1 = require("./login/login.component");
var http_2 = require("@angular/common/http");
var error_interceptor_1 = require("./common/error.interceptor");
var jwt_interceptor_1 = require("./common/jwt.interceptor");
var api_1 = require("primeng/api");
var confirmdialog_1 = require("primeng/confirmdialog");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var ngx_pagination_1 = require("ngx-pagination");
var chart_1 = require("primeng/chart");
var ng2_search_filter_1 = require("ng2-search-filter");
var print_order_component_1 = require("./main/product/print-order/print-order.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                login_component_1.LoginComponent,
                print_order_component_1.PrintOrderComponent,
            ],
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                app_routing_module_1.AppRoutingModule,
                http_1.HttpClientModule,
                animations_1.BrowserAnimationsModule,
                forms_1.ReactiveFormsModule,
                confirmdialog_1.ConfirmDialogModule,
                ng_bootstrap_1.NgbModule,
                // HighchartsChartModule
                ngx_pagination_1.NgxPaginationModule,
                chart_1.ChartModule,
                ng2_search_filter_1.Ng2SearchPipeModule
            ],
            providers: [{ provide: http_2.HTTP_INTERCEPTORS, useClass: jwt_interceptor_1.JwtInterceptor, multi: true },
                { provide: http_2.HTTP_INTERCEPTORS, useClass: error_interceptor_1.ErrorInterceptor, multi: true }, api_1.MessageService, api_1.ConfirmationService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
