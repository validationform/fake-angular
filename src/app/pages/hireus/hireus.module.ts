import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from 'src/app/components/header/header.module';
import { FooterModule } from 'src/app/components/footer/footer.module';
import { HireusRoutingModule } from './hireus-routing.module';
import { HireusComponent } from './hireus.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HireusComponent
  ],
  imports: [
    CommonModule,
    HireusRoutingModule,
    FooterModule,
    HeaderModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class HireusModule { }
