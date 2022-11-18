import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlockchainRoutingModule } from './blockchain-routing.module';
import { BlockchainComponent } from './blockchain.component';
import { FooterModule } from 'src/app/components/footer/footer.module';
import { HeaderModule } from 'src/app/components/header/header.module';


@NgModule({
  declarations: [
    BlockchainComponent
  ],
  imports: [
    CommonModule,
    BlockchainRoutingModule,
    HeaderModule,
    FooterModule
  ]
})
export class BlockchainModule { }
