import { Component, OnInit } from '@angular/core';
import { DomSanitizer, Title } from '@angular/platform-browser';
import { MeriChristmasService } from './meri-christmas.service';
@Component({
  selector: 'app-meri-christmas',
  templateUrl: './meri-christmas.component.html',
  styleUrls: ['./meri-christmas.component.css']
})
export class MeriChristmasComponent implements OnInit {

  backgroundMeriChristmasImage = 'https://www.cbnits.com/8f51d32f18bdc755f747d8daacff1659.jpg'
  headerMeriChristmasTitle = 'Press Releases';
  headerMeriChristmasParaOne = 'Leading the path of innovation!';
  headerMeriChristmasLanguageArray: any = [];
  meriChristmasById: any;

  constructor(private titleService: Title, private service: MeriChristmasService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    this.titleService.setTitle("CBNITS")
    this.getHeaderData();
    this.getPressReleaseByIdData();
  }

  //meri-christmas Banner languages data
  getHeaderData() {
    this.service.getBannerLanguagesData().subscribe((result: any) => {
      this.headerMeriChristmasLanguageArray = result.data.reverse();
    })
  }

  //meri-christmas by id data
  getPressReleaseByIdData() {
    this.service.getPressreleaseByIdData().subscribe((result: any) => {
      this.meriChristmasById = result.data;
      this.meriChristmasById.content = this.sanitizer.bypassSecurityTrustHtml(this.meriChristmasById.content)
    })
  }

}
