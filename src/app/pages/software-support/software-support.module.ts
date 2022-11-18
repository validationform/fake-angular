import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SoftwareSupportRoutingModule } from './software-support-routing.module';
import { SoftwareSupportComponent } from './software-support.component';
import { FooterModule } from 'src/app/components/footer/footer.module';
import { HeaderModule } from 'src/app/components/header/header.module';

@NgModule({
  declarations: [
    SoftwareSupportComponent
  ],
  imports: [
    CommonModule,
    SoftwareSupportRoutingModule,
    FooterModule,
    HeaderModule
  ]
})
export class SoftwareSupportModule { }
