import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';
import { ModalComponent } from './modal/modal.component';
import { MenuComponent } from './menu/menu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [NotFoundComponent],
  imports: [CommonModule, NgbModule, FormsModule, ReactiveFormsModule],
  exports: [CommonModule, FormsModule, NgbModule, ReactiveFormsModule],
})
export class SharedModule {}
