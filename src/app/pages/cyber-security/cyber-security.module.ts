import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CyberSecurityRoutingModule } from './cyber-security-routing.module';
import { CyberSecurityComponent } from './cyber-security.component';
import { HeaderModule } from 'src/app/components/header/header.module';
import { FooterModule } from 'src/app/components/footer/footer.module';

@NgModule({
  declarations: [
    CyberSecurityComponent
  ],
  imports: [
    CommonModule,
    CyberSecurityRoutingModule,
    HeaderModule,
    FooterModule
  ]
})
export class CyberSecurityModule { }
