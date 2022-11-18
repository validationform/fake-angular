import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from 'src/app/components/header/header.module';
import { ContactpageRoutingModule } from './contactpage-routing.module';
import { ContactpageComponent } from './contactpage.component';
import { FooterModule } from 'src/app/components/footer/footer.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    ContactpageComponent
  ],
  imports: [
    CommonModule,
    ContactpageRoutingModule,
    HeaderModule,
    FooterModule,
    FontAwesomeModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})

export class ContactpageModule { }
