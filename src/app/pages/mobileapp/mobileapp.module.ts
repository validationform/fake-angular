import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MobileappRoutingModule } from './mobileapp-routing.module';
import { MobileappComponent } from './mobileapp.component';
import { HeaderModule } from 'src/app/components/header/header.module';
import { WebpageModule } from 'src/app/components/webpage/webpage.module';
import { MicrosoftModule } from 'src/app/components/microsoft/microsoft.module';
import { DevelopmentModule } from 'src/app/components/development/development.module';
import { AdvantagesdevelopersModule } from 'src/app/components/advantagesdevelopers/advantagesdevelopers.module';
import { FooterModule } from 'src/app/components/footer/footer.module';

@NgModule({
  declarations: [
    MobileappComponent
  ],
  imports: [
    CommonModule,
    MobileappRoutingModule,
    HeaderModule,
    WebpageModule,
    MicrosoftModule,
    DevelopmentModule,
    AdvantagesdevelopersModule,
    FooterModule
  ]
})
export class MobileappModule { }
