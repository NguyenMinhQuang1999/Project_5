import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route } from '@angular/compiler/src/core';
import { MainComponent } from './main.component';
import { RouterModule, Routes } from '@angular/router';
import { ModalComponent } from '../shared/modal/modal.component';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
];
@NgModule({
  declarations: [ModalComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
})
export class MainModule {}
