import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerticalMenuComponent } from './vertical-menu.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    VerticalMenuComponent
  ],
  exports: [
    VerticalMenuComponent
  ]
})
export class VerticalMenuModule { }
