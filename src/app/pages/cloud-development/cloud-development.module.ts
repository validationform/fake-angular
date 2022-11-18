import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CloudDevelopmentRoutingModule } from './cloud-development-routing.module';
import { CloudDevelopmentComponent } from './cloud-development.component';
import { FooterModule } from 'src/app/components/footer/footer.module';
import { HeaderModule } from 'src/app/components/header/header.module';
import { UiuxdeliverablesModule } from 'src/app/components/uiuxdeliverables/uiuxdeliverables.module';

@NgModule({
  declarations: [
    CloudDevelopmentComponent
  ],
  imports: [
    CommonModule,
    CloudDevelopmentRoutingModule,
    FooterModule,
    HeaderModule,
    UiuxdeliverablesModule
  ]
})
export class CloudDevelopmentModule { }
