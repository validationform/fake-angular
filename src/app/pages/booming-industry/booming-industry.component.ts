import { Component, OnInit } from '@angular/core';
import { DomSanitizer, Title } from '@angular/platform-browser';
import { BoomingIndustryService } from './booming-industry.service';

@Component({
  selector: 'app-booming-industry',
  templateUrl: './booming-industry.component.html',
  styleUrls: ['./booming-industry.component.css']
})
export class BoomingIndustryComponent implements OnInit {

  backgroundBoomingIndustryImage = 'https://www.cbnits.com/8f51d32f18bdc755f747d8daacff1659.jpg'
  headerBoomingIndustryTitle = 'News';
  headerBoomingIndustryParaOne = 'Leading the path of innovation!';
  headerBoomingIndustryLanguageArray: any = [];
  boomingIndustryById: any = [];

  constructor(private titleService: Title, private service: BoomingIndustryService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    this.titleService.setTitle("CBNITS")
    this.getHeaderData();
    this.getNewsByIdData();
  }

  //booming_industry Banner languages data
  getHeaderData() {
    this.service.getBannerLanguagesData().subscribe((result: any) => {
      this.headerBoomingIndustryLanguageArray = result.data.reverse();
    })
  }

  //booming_industry By Id languages data
  getNewsByIdData() {
    this.service.getNewsByIdData().subscribe((result: any) => {
      this.boomingIndustryById = result.data;
      this.boomingIndustryById.newsContent = this.sanitizer.bypassSecurityTrustHtml(this.boomingIndustryById.newsContent)
    })
  }
}
