import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HrTechRoutingModule } from './hr-tech-routing.module';
import { HrTechComponent } from './hr-tech.component';
import { HeaderModule } from 'src/app/components/header/header.module';
import { FooterModule } from 'src/app/components/footer/footer.module';
import { OverviewModule } from 'src/app/components/overview/overview.module';
import { TechnologyModule } from 'src/app/components/technology/technology.module';
@NgModule({
  declarations: [
    HrTechComponent
  ],
  imports: [
    CommonModule,
    HrTechRoutingModule,
    HeaderModule,
    FooterModule,
    OverviewModule,
    TechnologyModule
  ]
})
export class HrTechModule { }
