import { Component, OnInit } from '@angular/core';
import { DomSanitizer, Title } from '@angular/platform-browser';
import { BigInnovationService } from './big-innovation.service';
@Component({
  selector: 'app-big-innovation',
  templateUrl: './big-innovation.component.html',
  styleUrls: ['./big-innovation.component.css'],
})
export class BigInnovationComponent implements OnInit {

  backgroundBigInnovationImage = 'https://www.cbnits.com/8f51d32f18bdc755f747d8daacff1659.jpg'
  headerBigInnovationTitle = 'Press Releases';
  headerBigInnovationParaOne = 'Leading the path of innovation!';
  headerBigInnovationLanguageArray: any = [];
  bigInnovationByIdData: any;

  constructor(private titleService: Title,private service: BigInnovationService,private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    this.titleService.setTitle('CBNITS');
    this.getHeaderData();
    this.getPressReleaseByIdData();
  }

  //big-innovation Banner languages data
  getHeaderData() {
    this.service.getBannerLanguagesData().subscribe((result: any) => {
      this.headerBigInnovationLanguageArray = result.data.reverse()
    })
  }

  //big-innovation By Id data
  getPressReleaseByIdData() {
    this.service.getPressReleaseByIdData().subscribe((result: any) => {
      this.bigInnovationByIdData = result.data;
      this.bigInnovationByIdData.content = this.sanitizer.bypassSecurityTrustHtml(this.bigInnovationByIdData.content)
    })
  }
}
