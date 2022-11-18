import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdvantagesdevelopersComponent } from './advantagesdevelopers.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AdvantagesdevelopersComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    AdvantagesdevelopersComponent
  ]
})
export class AdvantagesdevelopersModule { }
