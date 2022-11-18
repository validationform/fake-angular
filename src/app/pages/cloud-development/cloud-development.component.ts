import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CloudDevelopmentService } from './cloud-development.service';

@Component({
  selector: 'app-cloud-development',
  templateUrl: './cloud-development.component.html',
  styleUrls: ['./cloud-development.component.css'],
})
export class CloudDevelopmentComponent implements OnInit {
  cloudDevBackgroundImage = 'https://www.cbnits.com/67b3bdfd81fe0a60834a9c4219601c83.jpg';
  cloudDevHeaderTitle = 'Cloud';
  cloudDevHeaderSpan = 'Development';
  cloudDevHeaderParaOne = 'With Cloud development,move away from traditional';
  cloudDevHeaderParaTwo = 'desktop environment';
  cloudDevHeaderLanguageArray: any = [];

  cloudArray: any = [];

  constructor(
    private router: Router,
    private titleService: Title,
    private service: CloudDevelopmentService
  ) {}

  ngOnInit(): void {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    this.titleService.setTitle('CBNITS');
    this.getDevelopmentServicesData();
    this.getHeaderData();
  }

  //function for hire us button
  hireus(): void {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    this.router.navigate(['/hireus']);
  }

   //fetch Banner languages data
   getHeaderData(): void {
    this.service.getBannerLanguagesData().subscribe((result: any)=> {
      this.cloudDevHeaderLanguageArray = result.data.reverse();
    })
  }

  //fetch our development services data
  getDevelopmentServicesData(): void {
    this.service.getDevelopmentServices().subscribe((result: any) => {
      this.cloudArray = result?.data[0].description;
      console.log('Cloud Development Services array=>', this.cloudArray);
    });
  }
}
