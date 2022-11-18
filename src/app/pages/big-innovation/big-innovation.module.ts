import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BigInnovationRoutingModule } from './big-innovation-routing.module';
import { BigInnovationComponent } from './big-innovation.component';
import { HeaderModule } from 'src/app/components/header/header.module';
import { FooterModule } from 'src/app/components/footer/footer.module';


@NgModule({
  declarations: [
    BigInnovationComponent
  ],
  imports: [
    CommonModule,
    BigInnovationRoutingModule,
    HeaderModule,
    FooterModule
  ]
})
export class BigInnovationModule { }
