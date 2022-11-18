import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImpactPandemicRoutingModule } from './impact-pandemic-routing.module';
import { ImpactPandemicComponent } from './impact-pandemic.component';
import { HeaderModule } from 'src/app/components/header/header.module';
import { FooterModule } from 'src/app/components/footer/footer.module';


@NgModule({
  declarations: [
    ImpactPandemicComponent
  ],
  imports: [
    CommonModule,
    ImpactPandemicRoutingModule,
    HeaderModule,
    FooterModule
  ]
})
export class ImpactPandemicModule { }
