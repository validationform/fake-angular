import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PoonamBachkhediRoutingModule } from './poonam-bachkhedi-routing.module';
import { PoonamBachkhediComponent } from './poonam-bachkhedi.component';
import { HeaderModule } from 'src/app/components/header/header.module';
import { FooterModule } from 'src/app/components/footer/footer.module';


@NgModule({
  declarations: [
    PoonamBachkhediComponent
  ],
  imports: [
    CommonModule,
    PoonamBachkhediRoutingModule,
    HeaderModule,
    FooterModule
  ]
})
export class PoonamBachkhediModule { }
