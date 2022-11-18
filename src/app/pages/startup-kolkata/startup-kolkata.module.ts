import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from 'src/app/components/header/header.module';
import { FooterModule } from 'src/app/components/footer/footer.module';
import { StartupKolkataRoutingModule } from './startup-kolkata-routing.module';
import { StartupKolkataComponent } from './startup-kolkata.component';


@NgModule({
  declarations: [
    StartupKolkataComponent
  ],
  imports: [
    CommonModule,
    StartupKolkataRoutingModule,
    HeaderModule,
    FooterModule,
    

  ]
})
export class StartupKolkataModule { }
