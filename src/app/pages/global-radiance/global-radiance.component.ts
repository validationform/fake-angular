import { Component, OnInit } from '@angular/core';
import { DomSanitizer, Title } from '@angular/platform-browser';
import { GlobalRadianceService } from './global-radiance.service';

@Component({
  selector: 'app-global-radiance',
  templateUrl: './global-radiance.component.html',
  styleUrls: ['./global-radiance.component.css']
})
export class GlobalRadianceComponent implements OnInit {
  backgroundGlobalRadianceImage = 'https://www.cbnits.com/8f51d32f18bdc755f747d8daacff1659.jpg'
  headerGlobalRadianceTitle = 'News';
  headerGlobalRadianceParaOne = 'Leading the path of innovation!';
  headerGlobalRadianceLanguageArray: any = [];
  newsGlobalRadianceById: any = [];

  constructor(private titleService: Title, private service: GlobalRadianceService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    this.titleService.setTitle('CBNITS')
    this.getHeaderData();
    this.getNewsByIdData();
  }

  //global-radiance Banner languages data
  getHeaderData() {
    this.service.getBannerLanguagesData().subscribe((result: any) => {
      this.headerGlobalRadianceLanguageArray = result.data.reverse();
    })
  }
  //get global-radiance by id  data
  getNewsByIdData() {
    this.service.getNewsByIdData().subscribe((result: any) => {
      this.newsGlobalRadianceById = result.data;
      this.newsGlobalRadianceById.newsContent = this.sanitizer.bypassSecurityTrustHtml(this.newsGlobalRadianceById.newsContent)
    })
  }
}
