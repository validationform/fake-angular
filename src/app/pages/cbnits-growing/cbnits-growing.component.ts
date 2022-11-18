import { Component, OnInit } from '@angular/core';
import { DomSanitizer, Title } from '@angular/platform-browser';
import { CbnitsGrowingService } from './cbnits-growing.service';
@Component({
  selector: 'app-cbnits-growing',
  templateUrl: './cbnits-growing.component.html',
  styleUrls: ['./cbnits-growing.component.css']
})
export class CbnitsGrowingComponent implements OnInit {

  backgroundCbnitsGrowingImage = 'https://www.cbnits.com/8f51d32f18bdc755f747d8daacff1659.jpg'
  headerCbnitsGrowingTitle = 'Press Releases';
  headerCbnitsGrowingParaOne = 'Leading the path of innovation!';
  headerCbnitsGrowingLanguageArray: any = [];
  cbnitsGrowingById: any;

  constructor(private titleService: Title, private service: CbnitsGrowingService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    this.titleService.setTitle("CBNITS")
    this.getHeaderData();
    this.getPressReleaseByIdData();
  }

  //cbnits-growing Banner Languages data
  getHeaderData() {
    this.service.getBannerLanguagesData().subscribe((result: any) => {
      this.headerCbnitsGrowingLanguageArray = result.data.reverse();
    })
  }
  //cbnits-growing by id data
  getPressReleaseByIdData() {
    this.service.getPressReleaseByIdData().subscribe((result: any) => {
      this.cbnitsGrowingById = result.data;
      this.cbnitsGrowingById.content = this.sanitizer.bypassSecurityTrustHtml(this.cbnitsGrowingById.content)
    })
  }
}
