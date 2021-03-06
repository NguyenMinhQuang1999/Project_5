import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from './login/login.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorInterceptor } from './common/error.interceptor';
import { JwtInterceptor } from './common/jwt.interceptor';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap' ;
import { HighchartsChartComponent, HighchartsChartModule } from 'highcharts-angular';
import { NgxPaginationModule } from 'ngx-pagination';
import { ChartModule } from 'primeng/chart';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { PrintOrderComponent } from './main/product/print-order/print-order.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PrintOrderComponent,
   // HighchartsChartComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ConfirmDialogModule,
    NgbModule,
   // HighchartsChartModule
    NgxPaginationModule,
    ChartModule,
    Ng2SearchPipeModule



  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },MessageService, ConfirmationService],
  bootstrap: [AppComponent],
})
export class AppModule {}
