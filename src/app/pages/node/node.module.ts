import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NodeRoutingModule } from './node-routing.module';
import { NodeComponent } from './node.component';
import { HeaderModule } from 'src/app/components/header/header.module';
//import { MatTabsModule } from '@angular/material/tabs';
import { DevelopmentModule } from 'src/app/components/development/development.module';
import { FooterModule } from 'src/app/components/footer/footer.module';
import { AdvantagesdevelopersModule } from 'src/app/components/advantagesdevelopers/advantagesdevelopers.module';

@NgModule({
  declarations: [
    NodeComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    FooterModule,
    NodeRoutingModule,
    DevelopmentModule,
    AdvantagesdevelopersModule
  ]
})
export class NodeModule { }
