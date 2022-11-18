import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiuxRoutingModule } from './uiux-routing.module';
import { UiuxComponent } from './uiux.component';
import { FooterModule } from 'src/app/components/footer/footer.module';
import { HeaderModule } from 'src/app/components/header/header.module';
import { WebpageModule } from 'src/app/components/webpage/webpage.module';
import { UiuxdeliverablesModule } from 'src/app/components/uiuxdeliverables/uiuxdeliverables.module';
import { TechnicalskillsModule } from 'src/app/components/technicalskills/technicalskills.module';

@NgModule({
  declarations: [
    UiuxComponent
  ],
  imports: [
    CommonModule,
    UiuxRoutingModule,
    UiuxdeliverablesModule,
    WebpageModule,
    FooterModule,
    HeaderModule,
    TechnicalskillsModule
  ]
})
export class UiuxModule { }
