import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DevelopmentComponent } from './development.component';



@NgModule({
  declarations: [
    DevelopmentComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DevelopmentComponent
  ]
})
export class DevelopmentModule { }
