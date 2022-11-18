import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from 'src/app/components/header/header.module';
import { AngularRoutingModule } from './angular-routing.module';
import { AngularComponent } from './angular.component';
import { FooterModule } from 'src/app/components/footer/footer.module';
import { DevelopmentModule } from 'src/app/components/development/development.module';
import { AdvantagesdevelopersModule } from 'src/app/components/advantagesdevelopers/advantagesdevelopers.module';

@NgModule({
  declarations: [
    AngularComponent
  ],
  imports: [
    CommonModule,
    AngularRoutingModule,
    HeaderModule,
    FooterModule,
    DevelopmentModule,
    AdvantagesdevelopersModule
  ]
})
export class AngularModule { }
