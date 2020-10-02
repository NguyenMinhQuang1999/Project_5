import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailItemComponent } from './detail-item/detail-item.component';
import { ListItemComponent } from './list-item/list-item.component';

const routes: Routes = [
  { path: 'list-item', component: ListItemComponent },
  { path: 'detail-item', component: DetailItemComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule {}
