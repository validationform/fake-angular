import { Component, OnInit } from '@angular/core';
import { DomSanitizer, Title } from '@angular/platform-browser';
import { CbnitsService } from './cbnits.service';

@Component({
  selector: 'app-cbnits',
  templateUrl: './cbnits.component.html',
  styleUrls: ['./cbnits.component.css']
})
export class CbnitsComponent implements OnInit {

  backgroundCbnitsImage = 'https://www.cbnits.com/8f51d32f18bdc755f747d8daacff1659.jpg'
  headerCbnitsTitle = 'News';
  headerCbnitsParaOne = 'Leading the path of innovation!';
  headerCbnitsLanguageArray: any = []
  cbnitsById: any = [];

  constructor(private titleService: Title, private service: CbnitsService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    this.titleService.setTitle('CBNITS')
    this.getHeaderData();
    this.getNewsByIdData();
  }

  //Cbnits Banner languages data
  getHeaderData() {
    this.service.getBannerLanguagesData().subscribe((result: any) => {
      this.headerCbnitsLanguageArray = result.data.reverse();
    })
  }

  //Cbnits ById languages data
  getNewsByIdData() {
    this.service.getNewsByIdData().subscribe((result: any) => {
      this.cbnitsById = result.data;
      this.cbnitsById.newsContent = this.sanitizer.bypassSecurityTrustHtml(this.cbnitsById.newsContent)
    })
  }
}
