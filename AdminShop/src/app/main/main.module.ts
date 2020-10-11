import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../shared/sidebar/sidebar.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { MainComponent } from './main.component';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotFoundComponent } from '../shared/not-found/not-found.component';
//import { SharedModule } from 'primeng/api';
import { SharedModule } from '../shared/shared.module';
export const mainRoutes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        component: DashboardComponent,
      },
      {
        path: 'user',
        loadChildren: () =>
          import('../main/user/user.module').then((m) => m.UserModule),
      },
      {
        path: 'manager',
        loadChildren: () =>
         import('../main/product/product.module').then(
            (m) => m.ProductModule
          ),
      },
      {path: '**', component: NotFoundComponent}
    ],
  },
];

@NgModule({
  declarations: [
    SidebarComponent,
    FooterComponent,
    NavbarComponent,
    MainComponent,
    NotFoundComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(mainRoutes),SharedModule ],
})
export class MainModule {}
