import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from 'src/app/components/header/header.module';
import { AboutpageRoutingModule } from './aboutpage-routing.module';
import { AboutpageComponent } from './aboutpage.component';
import { FooterModule } from 'src/app/components/footer/footer.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AboutpageComponent
  ],
  imports: [
    CommonModule,
    AboutpageRoutingModule,
    HeaderModule,
    FooterModule,
    RouterModule
  ]
})
export class AboutpageModule { }
