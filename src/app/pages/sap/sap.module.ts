import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SapRoutingModule } from './sap-routing.module';
import { SapComponent } from './sap.component';
import { FooterModule } from 'src/app/components/footer/footer.module';
import { HeaderModule } from 'src/app/components/header/header.module';

@NgModule({
  declarations: [
    SapComponent
  ],
  imports: [
    CommonModule,
    SapRoutingModule,
    HeaderModule,
    FooterModule
  ]
})
export class SapModule { }
