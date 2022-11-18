import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeConnectedRoutingModule } from './home-connected-routing.module';
import { HomeConnectedComponent } from './home-connected.component';
import { HeaderModule } from 'src/app/components/header/header.module';
import { FooterModule } from 'src/app/components/footer/footer.module';


@NgModule({
  declarations: [
    HomeConnectedComponent
  ],
  imports: [
    CommonModule,
    HomeConnectedRoutingModule,
    HeaderModule,
    FooterModule
  ]
})
export class HomeConnectedModule { }
