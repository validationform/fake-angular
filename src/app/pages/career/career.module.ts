import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CareerRoutingModule } from './career-routing.module';
import { CareerComponent } from './career.component';
import { HeaderModule } from 'src/app/components/header/header.module';
import { FooterModule } from 'src/app/components/footer/footer.module';

@NgModule({
  declarations: [
    CareerComponent
  ],
  imports: [
    CommonModule,
    CareerRoutingModule,
    FooterModule,
    HeaderModule
  ]
})
export class CareerModule { }
