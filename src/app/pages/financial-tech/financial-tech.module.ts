import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinancialTechRoutingModule } from './financial-tech-routing.module';
import { FinancialTechComponent } from './financial-tech.component';
import { HeaderModule } from 'src/app/components/header/header.module';
import { FooterModule } from 'src/app/components/footer/footer.module';


@NgModule({
  declarations: [
    FinancialTechComponent
  ],
  imports: [
    CommonModule,
    FinancialTechRoutingModule,
    HeaderModule,
    FooterModule
  ]
})
export class FinancialTechModule { }
