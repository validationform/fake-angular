import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoomingIndustryRoutingModule } from './booming-industry-routing.module';
import { BoomingIndustryComponent } from './booming-industry.component';
import { HeaderModule } from 'src/app/components/header/header.module';
import { FooterModule } from 'src/app/components/footer/footer.module';


@NgModule({
  declarations: [
    BoomingIndustryComponent
  ],
  imports: [
    CommonModule,
    BoomingIndustryRoutingModule,
    HeaderModule,
    FooterModule
  ]
})
export class BoomingIndustryModule { }
