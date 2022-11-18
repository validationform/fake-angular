import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivacypolicyRoutingModule } from './privacypolicy-routing.module';
import { PrivacypolicyComponent } from './privacypolicy.component';
import { HeaderModule } from 'src/app/components/header/header.module';
import { FooterModule } from 'src/app/components/footer/footer.module';
@NgModule({
  declarations: [
    PrivacypolicyComponent
  ],
  imports: [
    CommonModule,
    PrivacypolicyRoutingModule,
    HeaderModule,
    FooterModule
  ]
})
export class PrivacypolicyModule { }
