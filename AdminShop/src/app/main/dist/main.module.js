"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.MainModule = exports.mainRoutes = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var sidebar_component_1 = require("../shared/sidebar/sidebar.component");
var footer_component_1 = require("../shared/footer/footer.component");
var navbar_component_1 = require("../shared/navbar/navbar.component");
var main_component_1 = require("./main.component");
var router_1 = require("@angular/router");
var dashboard_component_1 = require("./dashboard/dashboard.component");
var not_found_component_1 = require("../shared/not-found/not-found.component");
//import { SharedModule } from 'primeng/api';
var shared_module_1 = require("../shared/shared.module");
var unauthorized_component_1 = require("../shared/unauthorized/unauthorized.component");
var auth_guard_1 = require("../common/auth.guard");
var role_1 = require("../models/role");
var chart_1 = require("primeng/chart");
var thongke_component_1 = require("./thongke/thongke.component");
exports.mainRoutes = [
    {
        path: '',
        component: main_component_1.MainComponent,
        children: [
            {
                path: '',
                component: dashboard_component_1.DashboardComponent
            },
            {
                path: 'unauthorized',
                component: unauthorized_component_1.UnauthorizedComponent
            },
            {
                path: 'users',
                loadChildren: function () {
                    return Promise.resolve().then(function () { return require('../main/user/user.module'); }).then(function (m) { return m.UserModule; });
                },
                canActivate: [auth_guard_1.RoleGuard],
                data: { roles: [role_1.Role.Admin] }
            },
            {
                path: 'manager',
                loadChildren: function () {
                    return Promise.resolve().then(function () { return require('../main/product/product.module'); }).then(function (m) { return m.ProductModule; });
                },
                canActivate: [auth_guard_1.RoleGuard],
                data: { roles: [role_1.Role.Admin, role_1.Role.User] }
            },
            {
                path: 'thong-ke',
                loadChildren: function () {
                    return Promise.resolve().then(function () { return require('../main/thongke/thongke.module'); }).then(function (m) { return m.ThongkeModule; });
                }
            },
        ]
    },
];
var MainModule = /** @class */ (function () {
    function MainModule() {
    }
    MainModule = __decorate([
        core_1.NgModule({
            declarations: [
                //  HighchartsChartComponent,
                sidebar_component_1.SidebarComponent,
                footer_component_1.FooterComponent,
                navbar_component_1.NavbarComponent,
                main_component_1.MainComponent,
                not_found_component_1.NotFoundComponent,
                dashboard_component_1.DashboardComponent,
                thongke_component_1.ThongkeComponent,
            ],
            imports: [common_1.CommonModule, router_1.RouterModule.forChild(exports.mainRoutes), shared_module_1.SharedModule, chart_1.ChartModule,]
        })
    ], MainModule);
    return MainModule;
}());
exports.MainModule = MainModule;
