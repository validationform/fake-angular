import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EcommerceRoutingModule } from './ecommerce-routing.module';
import { EcommerceComponent } from './ecommerce.component';
import { HeaderModule } from 'src/app/components/header/header.module';
import { OverviewModule } from 'src/app/components/overview/overview.module';
import { FunctionalityModule } from 'src/app/components/functionality/functionality.module';
import { WhatwedidModule } from 'src/app/components/whatwedid/whatwedid.module';
import { TechnologyModule } from 'src/app/components/technology/technology.module';
import { FooterModule } from 'src/app/components/footer/footer.module';

@NgModule({
  declarations: [
    EcommerceComponent
  ],
  imports: [
    CommonModule,
    EcommerceRoutingModule,
    HeaderModule,
    OverviewModule,
    FunctionalityModule,
    WhatwedidModule,
    TechnologyModule,
    FooterModule
  ]
})
export class EcommerceModule { }
