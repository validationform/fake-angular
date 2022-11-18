import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from 'src/app/components/header/header.module';
import { HadoopRoutingModule } from './hadoop-routing.module';
import { HadoopComponent } from './hadoop.component';
import { FooterModule } from 'src/app/components/footer/footer.module';

@NgModule({
  declarations: [
    HadoopComponent
  ],
  imports: [
    CommonModule,
    HadoopRoutingModule,
    HeaderModule,
    FooterModule,
  ]
})
export class HadoopModule { }
