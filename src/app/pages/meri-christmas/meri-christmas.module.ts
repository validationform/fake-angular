import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MeriChristmasRoutingModule } from './meri-christmas-routing.module';
import { MeriChristmasComponent } from './meri-christmas.component';
import { HeaderModule } from 'src/app/components/header/header.module';
import { FooterModule } from 'src/app/components/footer/footer.module';

@NgModule({
  declarations: [
    MeriChristmasComponent
  ],
  imports: [
    CommonModule,
    MeriChristmasRoutingModule,
    HeaderModule,
    FooterModule
  ]
})
export class MeriChristmasModule { }
