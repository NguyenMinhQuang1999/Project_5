import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from 'src/app/shared/shared.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { ThongkeComponent } from './thongke.component';


const routes: Routes = [
  {
    path: '',
    component: ThongkeComponent
  }

];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    SharedModule,
    NgxPaginationModule
  ]
})
export class ThongkeModule { }
