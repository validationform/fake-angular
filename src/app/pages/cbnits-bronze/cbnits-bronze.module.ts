import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CbnitsBronzeRoutingModule } from './cbnits-bronze-routing.module';
import { CbnitsBronzeComponent } from './cbnits-bronze.component';
import { HeaderModule } from 'src/app/components/header/header.module';
import { FooterModule } from 'src/app/components/footer/footer.module';


@NgModule({
  declarations: [
    CbnitsBronzeComponent
  ],
  imports: [
    CommonModule,
    CbnitsBronzeRoutingModule,
    HeaderModule,
    FooterModule
  ]
})
export class CbnitsBronzeModule { }
