import { Component, OnInit } from '@angular/core';
import { DomSanitizer, Title } from '@angular/platform-browser';
import { CbnitsLeadershipService } from './cbnits-leadership.service';
@Component({
  selector: 'app-cbnits-leadership',
  templateUrl: './cbnits-leadership.component.html',
  styleUrls: ['./cbnits-leadership.component.css']
})
export class CbnitsLeadershipComponent implements OnInit {

  backgroundCbnitsLeadershipImage = 'https://www.cbnits.com/8f51d32f18bdc755f747d8daacff1659.jpg'
  headerCbnitsLeadershipTitle = 'Press Releases';
  headerCbnitsLeadershipParaOne = 'Leading the path of innovation!';
  headerCbnitsLeadershipLanguageArray: any = [];
  cbnitsLeadershipById: any;

  constructor(private titleService: Title, private service: CbnitsLeadershipService, private sanitizar: DomSanitizer) { }

  ngOnInit(): void {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    this.titleService.setTitle("CBNITS")
    this.getHeaderData();
    this.getPressReleaseByIdData();
  }

  //cbnits-leadership banner languages data
  getHeaderData() {
    this.service.getBannerLanguagesData().subscribe((result: any) => {
      this.headerCbnitsLeadershipLanguageArray = result.data.reverse();
    })
  }

  //cbnits-leadership by id data
  getPressReleaseByIdData() {
    this.service.getPressReleaseByIdData().subscribe((result: any) => {
      this.cbnitsLeadershipById = result.data;
      this.cbnitsLeadershipById.content = this.sanitizar.bypassSecurityTrustHtml(this.cbnitsLeadershipById.content)
    })
  }
}
