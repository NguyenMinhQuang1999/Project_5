import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from 'src/app/shared/shared.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { ThongkeComponent } from './thongke.component';
import { ProductComponent } from './product/product.component'


const routes: Routes = [
  {
    path: '',
    component: ThongkeComponent
  },
  {
    path: 'products', component: ProductComponent
  }

];

@NgModule({
  declarations: [ProductComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    SharedModule,
    NgxPaginationModule
  ]
})
export class ThongkeModule { }
