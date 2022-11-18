import { Component, OnInit } from '@angular/core';
import { DomSanitizer, Title, TransferState } from '@angular/platform-browser';
import { ImpactPandemicService } from './impact-pandemic.service';

@Component({
  selector: 'app-impact-pandemic',
  templateUrl: './impact-pandemic.component.html',
  styleUrls: ['./impact-pandemic.component.css']
})
export class ImpactPandemicComponent implements OnInit {

  backgroundImpactPandemicImage = 'https://www.cbnits.com/8f51d32f18bdc755f747d8daacff1659.jpg'
  headerImpactPandemicTitle = 'News';
  headerImpactPandemicParaOne = 'Leading the path of innovation!';
  headerImpactPandemicLanguageArray: any = [];
  impactPandemicById: any = [];

  constructor(private titleService: Title, private service: ImpactPandemicService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    this.titleService.setTitle("CBNITS")
    this.getHeaderData();
    this.getNewsByIdData();
  }

  //impact-pandemic Banner language data
  getHeaderData() {
    this.service.getBannerLanguagesData().subscribe((result: any) => {
      this.headerImpactPandemicLanguageArray = result.data.reverse();
    })
  }

  //impact-pandemic By Id languages data
  getNewsByIdData() {
    this.service.getNewsByIdData().subscribe((result: any) => {
      this.impactPandemicById = result.data;
      this.impactPandemicById.newsContent = this.sanitizer.bypassSecurityTrustHtml(this.impactPandemicById.newsContent)
    })
  }
}
