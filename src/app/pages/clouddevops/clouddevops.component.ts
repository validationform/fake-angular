import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ClouddevopsService } from './clouddevops.service';

@Component({
  selector: 'app-clouddevops',
  templateUrl: './clouddevops.component.html',
  styleUrls: ['./clouddevops.component.css'],
})
export class ClouddevopsComponent implements OnInit {
  cloudDevopsBackgroundImage = 'https://www.cbnits.com/bb0e5228285e83c1165749ec5b2459d6.jpg';
  cloudDevopsHeaderTitle = 'Cloud';
  cloudDevopsHeaderSpan = '& Devops';
  cloudDevopsHeaderParaOne = 'Experience a brand new digital dimension with';
  cloudDevopsHeaderParaTwo = 'Cloud & Devops';
  cloudDevopsHeaderLanguageArrayTwo: any = [];

  devopsOffringArray: any = [];

  devopsServicesArray = [
    {
      id: 1,
      devopsServicesImg: 'https://cbnits.s3.us-east-1.amazonaws.com/list-icon.png',
      devopsServicesPara:
        'With Automation From Code To Cloud, Our Engineers Will Stay Your Business Ahead At Every Step.',
    },
    {
      id: 2,
      devopsServicesImg: 'https://cbnits.s3.us-east-1.amazonaws.com/list-icon.png',
      devopsServicesPara:
        'Through Containers And Cloud-Native Dev Tools, We Accelerate The Delivery Of Your New Apps.',
    },
    {
      id: 3,
      devopsServicesImg: 'https://cbnits.s3.us-east-1.amazonaws.com/list-icon.png',
      devopsServicesPara:
        'We Provide High-End Automated Test Techniques With Quick Set Up And Efficient Operations.',
    },
    {
      id: 4,
      devopsServicesImg: 'https://cbnits.s3.us-east-1.amazonaws.com/list-icon.png',
      devopsServicesPara:
        'Our DevOps Services Are Tailored To Your Business Requirements And Delivered By Top Engineers From Our Global Talent Network.',
    },
  ];

  atCbnitsImage = 'https://cbnits.s3.us-east-1.amazonaws.com/cloudMain.png';
  atCbnitsFirstText = 'At';
  atCbnitsSecondText = 'CBNITS';
  atCbnitsTextP = ',';
  atCbnitsPara = 'our goal is to simplify and transform businesses digitally through high-performance Cloud technology. As cloud enablement experts we offer top-notch DevOps, Migration and Cloud Native solutions. Our profound industry experience on Cloud platforms like AWS, GCP and Azure enables our clients to adopt Cloud culture in a seamless way. We are also renowned for holding special expertise on Infrastructure as Code tools like Terraform, CloudFormation and Ansible. All our cloud services are instantly scalable for optimum performance.';

  constructor(
    private titleService: Title,
    private service: ClouddevopsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    this.titleService.setTitle('CBNITS');
    this.getDevelopment();
    this.getHeaderData();
  }

  //fetch cloud devops offring data
  getDevelopment() {
    this.service.getDevopsoffring().subscribe((result: any) => {
      this.devopsOffringArray = result?.data[0].description;
      console.log('angular array=>', this.devopsOffringArray);
    });
  }

  //fetch Banner languages data
  getHeaderData() {
    this.service.getBannerLanguagesData().subscribe((result: any) => {
      this.cloudDevopsHeaderLanguageArrayTwo = result.data;
      console.log('Banner languages=>', this.cloudDevopsHeaderLanguageArrayTwo.reverse());
    });
  }

  //function for hire us button
  hireus(): void {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    this.router.navigate(['/hireus']);
  }
}
