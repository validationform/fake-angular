import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactRoutingModule } from './react-routing.module';
import { ReactComponent } from './react.component';
import { HeaderModule } from 'src/app/components/header/header.module';
import { FooterModule } from 'src/app/components/footer/footer.module';
import { DevelopmentModule } from 'src/app/components/development/development.module';
import { AdvantagesdevelopersModule } from 'src/app/components/advantagesdevelopers/advantagesdevelopers.module';

@NgModule({
  declarations: [
    ReactComponent
  ],
  imports: [
    CommonModule,
    ReactRoutingModule,
    HeaderModule,
    FooterModule,
    DevelopmentModule,
    AdvantagesdevelopersModule
  ]
})
export class ReactModule { }
