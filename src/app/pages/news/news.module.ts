import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './news.component';
import { HeaderModule } from 'src/app/components/header/header.module';
import { FooterModule } from 'src/app/components/footer/footer.module';
import { NewsRoutingModule } from './news-routing.module';

@NgModule({
  declarations: [
    NewsComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    FooterModule,
    NewsRoutingModule,
  ]
})
export class NewsModule { }
