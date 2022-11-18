import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CbnitsRoutingModule } from './cbnits-routing.module';
import { CbnitsComponent } from './cbnits.component';
import { HeaderModule } from 'src/app/components/header/header.module';
import { FooterModule } from 'src/app/components/footer/footer.module';


@NgModule({
  declarations: [
    CbnitsComponent
  ],
  imports: [
    CommonModule,
    CbnitsRoutingModule,
    HeaderModule,
    FooterModule,
  ]
})
export class CbnitsModule { }
