import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AngularService } from './angular.service';
@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.css']
})
export class AngularComponent implements OnInit {
  angularBackgroundImage = 'https://www.cbnits.com/ef11a033e0c48b2ef381bbee5d39370f.jpg'
  angularHeaderTitle ='Angular Js Development';
  angularHeaderSpan ='Service';
  angularHeaderParaOne = 'no matter how complex your project is, at CBNITS, our cutting edge and best in';
  angularHeaderParaTwo = 'class Angular Development Services have predictable outcomes.';
  angularHeaderLanguageArray: any = [];
  
  developmentAngularArray: any = [];
  developmentAngularImage = "";
  developmentAngularPara = 'Hire the best in the industry Angular Js developer from CBNITS to secure outstanding software development services according to your buisness requirements.'
  developmentAngularHeading = 'our angularjs';
  developmentAngularSkyHeading = 'development offerings';
  developmentAngularText = '';
  
  advantagesAngularArray: any = [];
  advantagesAngularImage = "";
  advantagesAngularButtonName = 'Hire Us';
  advantagesAngularHeading = 'Advantages of hiring Angular JS developers from';
  advantagesAngularSpan = 'CBNITS';
 
  constructor(private titleService:Title, private service: AngularService) { }

  ngOnInit(): void {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    this.titleService.setTitle('CBNITS');
    this.getAngularDevelopmentOfferingsData();
    this.getAngularAdvantagesHiringData();
    this.getHeaderData();
  }

   //Fetch Banner languages data
   getHeaderData() {
    this.service.getBannerLanguagesData().subscribe((result: any)=> {
      this.angularHeaderLanguageArray = result.data.reverse();
    })
  }

  //Fetch Development offerings data
  getAngularDevelopmentOfferingsData() {
    this.service.getAngularDevelopmentData().subscribe((result: any)=> {
      this.developmentAngularArray = result?.data[0].description;
      this.developmentAngularImage = result?.data[0].image;
    })
  }

  //Fetch Advantages data
  getAngularAdvantagesHiringData() {
    this.service.getAngularAdvantagesData().subscribe((result: any)=> {
      this.advantagesAngularArray = result?.data[0].description;
      this.advantagesAngularImage = result?.data[0].image;
    })
  }
}
