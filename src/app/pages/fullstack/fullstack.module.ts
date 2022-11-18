import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FullstackRoutingModule } from './fullstack-routing.module';
import { FullstackComponent } from './fullstack.component';
import { HeaderModule } from 'src/app/components/header/header.module';
import { FooterModule } from 'src/app/components/footer/footer.module';
import { RightsideimageModule } from 'src/app/components/rightsideimage/rightsideimage.module';
import { BigDataCbnitsModule } from 'src/app/components/big-data-cbnits/big-data-cbnits.module';
import { TechnicalskillsModule } from 'src/app/components/technicalskills/technicalskills.module';

@NgModule({
  declarations: [
    FullstackComponent
  ],
  imports: [
    CommonModule,
    FullstackRoutingModule,
    FooterModule,
    HeaderModule,
    RightsideimageModule,
    BigDataCbnitsModule,
    TechnicalskillsModule
  ]
})
export class FullstackModule { }
