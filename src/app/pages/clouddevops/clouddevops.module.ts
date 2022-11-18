import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClouddevopsRoutingModule } from './clouddevops-routing.module';
import { ClouddevopsComponent } from './clouddevops.component';
import { FooterModule } from 'src/app/components/footer/footer.module';
import { HeaderModule } from 'src/app/components/header/header.module';
import { AdvantagesdevelopersModule } from 'src/app/components/advantagesdevelopers/advantagesdevelopers.module';
import { UiuxdeliverablesModule } from 'src/app/components/uiuxdeliverables/uiuxdeliverables.module';
import { WebpageModule } from 'src/app/components/webpage/webpage.module';

@NgModule({
  declarations: [
    ClouddevopsComponent
  ],
  imports: [
    CommonModule,
    ClouddevopsRoutingModule,
    FooterModule,
    HeaderModule,
    AdvantagesdevelopersModule,
    UiuxdeliverablesModule,
    WebpageModule
  ]
})
export class ClouddevopsModule { }
