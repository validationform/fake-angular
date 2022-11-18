import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CbnitsLeadershipRoutingModule } from './cbnits-leadership-routing.module';
import { CbnitsLeadershipComponent } from './cbnits-leadership.component';
import { HeaderModule } from 'src/app/components/header/header.module';
import { FooterModule } from 'src/app/components/footer/footer.module';


@NgModule({
  declarations: [
    CbnitsLeadershipComponent
  ],
  imports: [
    CommonModule,
    CbnitsLeadershipRoutingModule,
    HeaderModule,
    FooterModule
  ]
})
export class CbnitsLeadershipModule { }
