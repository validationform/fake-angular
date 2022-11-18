import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GolangRoutingModule } from './golang-routing.module';
import { GolangComponent } from './golang.component';
import { HeaderModule } from 'src/app/components/header/header.module';
import { FooterModule } from 'src/app/components/footer/footer.module';
import { DevelopmentModule } from 'src/app/components/development/development.module';
import { AdvantagesdevelopersModule } from 'src/app/components/advantagesdevelopers/advantagesdevelopers.module';

@NgModule({
  declarations: [
    GolangComponent
  ],
  imports: [
    CommonModule,
    GolangRoutingModule,
    HeaderModule,
    FooterModule,
    DevelopmentModule,
    AdvantagesdevelopersModule
  ]
})
export class GolangModule { }
