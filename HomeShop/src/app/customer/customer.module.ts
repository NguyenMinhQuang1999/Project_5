import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../shared/shared.module';
import { Router, Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'cart', component: CartComponent },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'checkout',
    component: CheckoutComponent,
  },
];

@NgModule({
  declarations: [CartComponent, CheckoutComponent, LoginComponent],
  imports: [SharedModule, RouterModule.forChild(routes)],
})
export class CustomerModule {}
