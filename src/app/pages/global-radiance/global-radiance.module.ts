import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GlobalRadianceRoutingModule } from './global-radiance-routing.module';
import { GlobalRadianceComponent } from './global-radiance.component';
import { HeaderModule } from 'src/app/components/header/header.module';
import { FooterModule } from 'src/app/components/footer/footer.module';

@NgModule({
  declarations: [
    GlobalRadianceComponent
  ],
  imports: [
    CommonModule,
    GlobalRadianceRoutingModule,
    HeaderModule,
    FooterModule
  ]
})
export class GlobalRadianceModule { }
