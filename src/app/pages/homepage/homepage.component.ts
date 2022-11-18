import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { HomepageService } from './homepage.service';
import { getCurrencySymbol } from '@angular/common';
import { GreatPlaceRoutingModule } from '../great-place/great-place-routing.module';
import { faBluetooth } from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})


export class HomepageComponent implements OnInit {

  backgroundHomePageImage = 'https://www.cbnits.com/c7ab47b5fd8d6987fea71161f17b0f2f.jpg'
  headerHomePageTitle = 'Accelerate your Digital Transformation with';
  headerHomePageSpan = 'CBNITS';
  headerHomePageParaOne = 'We engineer transformative digital products and services for next-gen businesses.';
  headerHomePageParaTwo = 'Leading the path of innovation!';
  headerHomePageFile = 'CBNITS Year 2021 in Review';
  headerHomePageLanguageArray: any = [];

  expertiseArray: any = [];

  whatWeDoArray: any = [];

  whyCbnitsArray: any = [];

  whyCustomersArray: any = [];

  description: any;

  name: any;
  logoPic: any;
  description1: any;

  name1: any;

  logoPic1: any;
  thumbnailPic: any;
  thumbnailPic1: any;
  rowActive = 0;
  domainArray: any = [];


  domainObject: DomainType = {}

  constructor(private router: Router, private titleService: Title, private meta: Meta, private service: HomepageService) { }

  ngOnInit(): void {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    this.titleService.setTitle(' CBNITS: The fastest-growing company in Software services - CBNITS');

    this.getExpertiseData();
    this.getWeDoData();
    this.getWhyData();
    this.getCustomersData();
    this.getHeaderData();

    this.service.getDomainData().subscribe((result: any) => {
      this.domainArray = result.data;
      this.domainObject = this.domainArray[0];
      this.rowActive = this.domainArray[0]._id;
      console.log('domain=>',this.domainArray)
      console.log("color name =>",this.domainArray[3].color)

    })
  }

  // onclick our Special domain READMORE
  onClick(_id: any) {
    const findIndex = this.domainArray.filter((e: any) => e._id === _id);
    this.domainObject = findIndex[0];
    this.rowActive = _id;
    if("5fc4f0f3c6cb581924292c27" == _id)
    {
        this.domainArray[3].color="#1CB5F2"
    }
  }
 
  // homepage get button click data
  onButtonClick(_id: any) {
    const findIndex = this.domainArray.filter((e: any) => e._id === _id);
    this.domainObject = findIndex[0];
    this.router.navigateByUrl(`/${this.domainObject.link}`);
  }

  //homepage Banner languages data
  getHeaderData() {
    this.service.getBannerLanguagesData().subscribe((result: any) => {
      this.headerHomePageLanguageArray = result.data.reverse();
    })
  }


  //Homepage getOurExpertise data
  getWeDoData() {
    this.service.getWhatWeDoData().subscribe((result: any) => {
      this.whatWeDoArray = result.data;
    })
  }

  //homepage getWhyCbnits data
  getExpertiseData() {
    this.service.getOurExpertiseData().subscribe((result: any) => {
      this.expertiseArray = result.data.reverse();
    })
  }

  // homepage WhyCustomers data
  getWhyData() {
    this.service.getWhyCbnitsData().subscribe((result: any) => {
      this.whyCbnitsArray = result.data.reverse();
    })
  }

  // homepage getDomainData data
  getCustomersData() {
    this.service.getWhyCustomersData().subscribe((result: any) => {
      this.description = result.data[0].description;
      this.name = result.data[0].name.split(',');
      this.logoPic = result.data[0].logoPic;
      this.thumbnailPic = result.data[0].thumbnailPic;
      this.description1 = result.data[1].description;
      this.name1 = result.data[1].name.split(',');
      this.logoPic1 = result.data[1].logoPic;
      this.thumbnailPic1 = result.data[1].thumbnailPic;
    })
  }
}

interface DomainType {
  id?: number;
  domainName?: string;
  domainImg?: string;
  domainDescription?: string;
  domainMainImg?: string;
  buttonName?: string;
  pathName?: string;
  link?: string;
  name?: string;
  thumbnailPic?: string;
  _id?: string;
  description?: string;
};
