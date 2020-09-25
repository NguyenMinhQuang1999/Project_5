import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../shared/header/header.component';
import { SliderComponent } from '../shared/slider/slider.component';
import { FooterComponent } from '../shared/footer/footer.component';

@NgModule({
  declarations: [HeaderComponent, SliderComponent, FooterComponent],
  imports: [CommonModule],
})
export class MainModule {}
