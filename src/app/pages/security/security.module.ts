import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecurityRoutingModule } from './security-routing.module';
import { SecurityComponent } from './security.component';
import { HeaderModule } from 'src/app/components/header/header.module';
import { OverviewModule } from 'src/app/components/overview/overview.module';
import { MicrosoftModule } from 'src/app/components/microsoft/microsoft.module';
import { WedidModule } from 'src/app/components/wedid/wedid.module';
import { TechnologyModule } from 'src/app/components/technology/technology.module';
import { FooterModule } from 'src/app/components/footer/footer.module';

@NgModule({
  declarations: [
    SecurityComponent
  ],
  imports: [
    CommonModule,
    SecurityRoutingModule,
    HeaderModule,
    OverviewModule,
    MicrosoftModule,
    WedidModule,
    TechnologyModule,
    FooterModule
  ]
})
export class SecurityModule { }
