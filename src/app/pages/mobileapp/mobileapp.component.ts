import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { MobileappService } from './mobileapp.service';

@Component({
  selector: 'app-mobileapp',
  templateUrl: './mobileapp.component.html',
  styleUrls: ['./mobileapp.component.css']
})
export class MobileappComponent implements OnInit {
  backgroundMobileAppImage = 'https://www.cbnits.com/dbb0ebca3aa2d17ac510a63040438fe4.jpg'
  headerMobileAppTitle = 'Mobile App';
  headerMobileAppSpan = 'Development';
  headerMobileAppParaOne = 'Bespoke Android & iPhone mobile app development';
  headerMobileAppParaTwo = 'solutions';
  headerMobileAppLanguageArray: any = [];

  webPagePara = '';
  webPagePara1 = '';
  microSoftArray: any = [];
  microsoftHeading = 'our mobile app';
  microsoftSpan = 'development services';

  techArray: any = [];

  constructor(private titleService: Title, private service: MobileappService,private router:Router) { }

  ngOnInit(): void {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    this.titleService.setTitle('CBNITS');
    this.getToolsAndTechnologyData();
    this.getProductData();
    this.getMobilePostData();
    this.getHeaderData();
  }

  // mobileapp getToolsAndTechnology data
  getToolsAndTechnologyData() {
    this.service.getToolsAndTechnology().subscribe((result: any) => {
      this.techArray = result.data
    });
  }

  // mobileapp getProductData data
  getProductData() {
    this.service.getProductAndSolution().subscribe((result: any) => {
      this.microSoftArray = result.data.reverse();
    })
  }

  // mobileapp getMobilePostData data
  getMobilePostData() {
    this.service.getMobilePost().subscribe((result: any) => {
      this.webPagePara = result?.data[0].description;
      this.webPagePara1 = result?.data[0].description;
    })
  }

  //mobileapp Banner languages data
  getHeaderData() {
    this.service.getBannerLanguagesData().subscribe((result: any) => {
      this.headerMobileAppLanguageArray = result.data.reverse();
    })
  }

  //function for hire us button
  hireUs() {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    this.router.navigate(['/hireus']);
  }
}
