import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EdTechRoutingModule } from './ed-tech-routing.module';
import { EdTechComponent } from './ed-tech.component';
import { FooterModule } from 'src/app/components/footer/footer.module';
import { HeaderModule } from 'src/app/components/header/header.module';
import { OverviewModule } from 'src/app/components/overview/overview.module';
import { WedidModule } from 'src/app/components/wedid/wedid.module';
import { TechnologyModule } from 'src/app/components/technology/technology.module';
@NgModule({
  declarations: [
    EdTechComponent
  ],
  imports: [
    CommonModule,
    EdTechRoutingModule,
    FooterModule,
    HeaderModule,
    OverviewModule,
    WedidModule,
    TechnologyModule
  ]
})
export class EdTechModule { }
