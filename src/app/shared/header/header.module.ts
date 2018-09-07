import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { MatTabsModule } from '@angular/material';
import { StickyPositionDirective } from './shared/sticky-position.directive';

@NgModule({
  imports: [
    CommonModule,
    MatTabsModule
  ],
  declarations: [
    HeaderComponent,
    StickyPositionDirective
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
