import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FullstackService } from './fullstack.service';

@Component({
  selector: 'app-fullstack',
  templateUrl: './fullstack.component.html',
  styleUrls: ['./fullstack.component.css'],
})
export class FullstackComponent implements OnInit {
  fullStackBackgroundImage = 'https://www.cbnits.com/751255409717b25fe94c4407a1228c7c.jpg';
  fullStackHeaderTitle = 'Hire Dedicated';
  fullStackHeaderSpan = 'Full-Stack Developers';
  fullStackHeaderParaOne = 'Scalable & cost-effective full-stack development';
  fullStackHeaderParaTwo = 'solutions';
  fullStackHeaderLanguageArray: any = [];

  ourDedicatedImage = 'https://cbnits-web-live.s3.amazonaws.com/fullStack-1606973804141.png';
  ourDedicatedTitleBlack = 'Our Dedicated ';
  ourDedicatedTitleBlue = 'Full-stack developer';
  ourDedicatedheading = '';
  ourDedicatedtext = '';

  whyHireFullStackImage = 'https://cbnits-web-live.s3.amazonaws.com/fullStackjs-1606975290487.png';
  whyHireDevelopersArray: any = [];
  whiteTickImage = 'https://cbnits.s3.us-east-1.amazonaws.com/tick-white.png';
  whyHireWhiteText = 'WHY HIRE FULL-STACK';
  whyHireOrangeText = 'DEVELOPERS FROM CBNITS ?';

  technicalSkillFirstTitle = 'TECHNICAL SKILLS OF OUR';
  technicalSkillSecondTitle = 'FULL-STACK DEVELOPERS';
  technicalSkillPageName = 'Full Stack Developer';
  technologyStackArray: any = [
    {
      id: 1,
      name: 'Back-End',
      value: 'Backend',
    },
    {
      id: 2,
      name: 'Front-End',
      value: 'Frontend',
    },
    {
      id: 3,
      name: 'Mobile App Development',
      value: 'Mobile App Development',
    },
    {
      id: 4,
      name: 'Database',
      value: 'Database',
    },
    {
      id: 5,
      name: 'Project Management Tools',
      value: 'Project Management Tools',
    },
    {
      id: 6,
      name: 'Technical Skill',
      value: 'Technical Skill',
    },
  ];

  constructor(private titleService: Title, private service: FullstackService) {}

  ngOnInit(): void {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    this.titleService.setTitle('CBNITS');
    this.getAdvantagesOfHiringData();
    this.getDedicatedFullStackDeveloperData();
    this.getHeaderData();
  }

  //fetch Advantages Of Hiring data
  getAdvantagesOfHiringData() {
    this.service.getAdvantagesOfHiring().subscribe((result: any) => {
      this.whyHireDevelopersArray = result?.data[0].description;
    });
  }

  // fetch  dedicated full stack developer data
  getDedicatedFullStackDeveloperData() {
    this.service.getDedicatedFullStackDeveloper().subscribe((result: any) => {
      this.ourDedicatedtext = result?.data[0].description;
      this.ourDedicatedheading = result?.data[0].description;
    });
  }

  //fetch Banner languages data
  getHeaderData() {
    this.service.getBannerLanguagesData().subscribe((result: any) => {
      this.fullStackHeaderLanguageArray = result.data.reverse();
    });
  }
}
