import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HealthcareRoutingModule } from './healthcare-routing.module';
import { HealthcareComponent } from './healthcare.component';
import { HeaderModule } from 'src/app/components/header/header.module';
import { OverviewModule } from 'src/app/components/overview/overview.module';
import { FunctionalityModule } from 'src/app/components/functionality/functionality.module';
import { WhatwedidModule } from 'src/app/components/whatwedid/whatwedid.module';
import { TechnologyModule } from 'src/app/components/technology/technology.module';
import { FooterModule } from 'src/app/components/footer/footer.module';
@NgModule({
  declarations: [
    HealthcareComponent
  ],
  imports: [
    CommonModule,
    HealthcareRoutingModule,
    HeaderModule,
    OverviewModule,
    FunctionalityModule,
    WhatwedidModule,
    TechnologyModule,
    FooterModule
  ]
})
export class HealthcareModule { }
