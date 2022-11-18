import { Component, OnInit } from '@angular/core';
import { DomSanitizer, Title } from '@angular/platform-browser';
import { CbnitsBronzeService } from './cbnits-bronze.service';
@Component({
  selector: 'app-cbnits-bronze',
  templateUrl: './cbnits-bronze.component.html',
  styleUrls: ['./cbnits-bronze.component.css']
})
export class CbnitsBronzeComponent implements OnInit {

  backgroundCbnitsBronzeImage = 'https://www.cbnits.com/8f51d32f18bdc755f747d8daacff1659.jpg'
  headerCbnitsBronzeTitle = 'Press Releases';
  headerCbnitsBronzeParaOne = 'Leading the path of innovation!';
  headerCbnitsBronzeLanguageArray: any = [];
  cbnitsBronzeById: any;


  constructor(private titleService: Title, private service: CbnitsBronzeService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    this.titleService.setTitle("CBNITS")
    this.getHeaderData();
    this.getPressReleaseByIdData();
  }

  //cbnits-bronze Banner languages data
  getHeaderData() {
    this.service.getBannerLanguegasData().subscribe((result: any) => {
      this.headerCbnitsBronzeLanguageArray = result.data.reverse();
    })
  }

  //cbnits-bronze ById data
  getPressReleaseByIdData() {
    this.service.getPressReleaseByIdData().subscribe((result: any) => {
      this.cbnitsBronzeById = result.data;
      this.cbnitsBronzeById.content = this.sanitizer.bypassSecurityTrustHtml(this.cbnitsBronzeById.content)
    })
  }
}
