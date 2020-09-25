import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { SearchComponent } from './search/search.component';
import { HeaderComponent } from './shared/header/header.component';
import { SliderComponent } from './shared/slider/slider.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CartComponent } from './product/cart/cart.component';
import { DetailItemComponent } from './product/detail-item/detail-item.component';
import { ListItemComponent } from './product/list-item/list-item.component';
import { LoginComponent } from './login/login.component';
import { MyaccountComponent } from './myaccount/myaccount.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SearchComponent,
    HeaderComponent,
    SliderComponent,
    FooterComponent,
    CartComponent,
    DetailItemComponent,
    ListItemComponent,
    LoginComponent,
    MyaccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
