import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GreatPlaceRoutingModule } from './great-place-routing.module';
import { GreatPlaceComponent } from './great-place.component';
import { HeaderModule } from 'src/app/components/header/header.module';
import { FooterModule } from 'src/app/components/footer/footer.module';


@NgModule({
  declarations: [
    GreatPlaceComponent
  ],
  imports: [
    CommonModule,
    GreatPlaceRoutingModule,
    HeaderModule,
    FooterModule
  ]
})
export class GreatPlaceModule { }
