import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from 'src/app/components/header/header.module';
import { Dynamic365RoutingModule } from './dynamic365-routing.module';
import { Dynamic365Component } from './dynamic365.component';
import { FooterModule } from 'src/app/components/footer/footer.module';
import { WebpageModule } from 'src/app/components/webpage/webpage.module';
import { MicrosoftModule } from 'src/app/components/microsoft/microsoft.module';
import { AdvantagesdevelopersModule } from 'src/app/components/advantagesdevelopers/advantagesdevelopers.module';

@NgModule({
  declarations: [
    Dynamic365Component
  ],
  imports: [
    CommonModule,
    Dynamic365RoutingModule,
    HeaderModule,
    FooterModule,
    WebpageModule,
    MicrosoftModule,
    AdvantagesdevelopersModule
  ]
})
export class Dynamic365Module { }
