import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QualityEngineeringRoutingModule } from './quality-engineering-routing.module';
import { QualityEngineeringComponent } from './quality-engineering.component';
import { FooterModule } from 'src/app/components/footer/footer.module';
import { HeaderModule } from 'src/app/components/header/header.module';

@NgModule({
  declarations: [
    QualityEngineeringComponent
  ],
  imports: [
    CommonModule,
    QualityEngineeringRoutingModule,
    FooterModule,
    HeaderModule
  ]
})
export class QualityEngineeringModule { }
