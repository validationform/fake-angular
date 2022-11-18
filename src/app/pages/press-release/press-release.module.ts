import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PressReleaseRoutingModule } from './press-release-routing.module';
import { PressReleaseComponent } from './press-release.component';
import { HeaderModule } from 'src/app/components/header/header.module';
import { FooterModule } from 'src/app/components/footer/footer.module';


@NgModule({
  declarations: [
    PressReleaseComponent
  ],
  imports: [
    CommonModule,
    PressReleaseRoutingModule,
    HeaderModule,
    FooterModule
  ]
})
export class PressReleaseModule { }
