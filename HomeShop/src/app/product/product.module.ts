import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { DetailItemComponent } from './detail-item/detail-item.component';
import { ListItemComponent } from './list-item/list-item.component';
import { SharedModule } from '../shared/shared.module';
import { ProductRelativeComponent } from './product-relative/product-relative.component';

@NgModule({
  declarations: [
    DetailItemComponent,
    ListItemComponent,
    ProductRelativeComponent,
  ],
  imports: [SharedModule, ProductRoutingModule],
})
export class ProductModule {}
