import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CbnitsGrowingRoutingModule } from './cbnits-growing-routing.module';
import { CbnitsGrowingComponent } from './cbnits-growing.component';
import { HeaderModule } from 'src/app/components/header/header.module';
import { FooterModule } from 'src/app/components/footer/footer.module';

@NgModule({
  declarations: [
    CbnitsGrowingComponent
  ],
  imports: [
    CommonModule,
    CbnitsGrowingRoutingModule,
    HeaderModule,
    FooterModule
  ]
})
export class CbnitsGrowingModule { }
