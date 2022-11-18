import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CbnitsCultureRoutingModule } from './cbnits-culture-routing.module';
import { CbnitsCultureComponent } from './cbnits-culture.component';
import { HeaderModule } from 'src/app/components/header/header.module';
import { FooterModule } from 'src/app/components/footer/footer.module';



@NgModule({
  declarations: [
    CbnitsCultureComponent
  ],
  imports: [
    CommonModule,
    CbnitsCultureRoutingModule,
    HeaderModule,
    FooterModule
  ]
})
export class CbnitsCultureModule { }
