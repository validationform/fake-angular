import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { UiuxService } from './uiux.service';

@Component({
  selector: 'app-uiux',
  templateUrl: './uiux.component.html',
  styleUrls: ['./uiux.component.css']
})
export class UiuxComponent implements OnInit {

  uiuxBackgroundImage = 'https://www.cbnits.com/8f51d32f18bdc755f747d8daacff1659.jpg'
  uiuxHeaderTitle = 'UX & UI';
  uiuxHeaderSpan = 'Development';
  uiuxHeaderParaOne = 'User-centric UI UX design to simplify';
  uiuxHeaderParaTwo = 'human interactions';
  uiuxHeaderLanguageArray: any = [];

  //web page and mobile section data
  webPageImage = 'https://cbnits.s3.us-east-1.amazonaws.com/uiuxMain.jpg';
  webFirstText = 'WEB PAGE &';
  webSecondText = ' MOBILE';
  webPagePara = 'application designing have become a very sophisticated technology-based art. At CBNITS, we follow a foundational approach for building UX/UI strategy for our clients. Our UI/UX designing team is globally recognized for designing the most innovative and user-centric experience for any digital product. We follow the best UI/UX practices in the industry.pabilities for your company and get it up and running in quick time.';


  //deliverables section Data
  uiUxDeliverablesHeadingBlack = 'DELIVERABLES';
  uiUxDeliverablesHeadingBlue = 'WHAT WE CAN DESIGN FOR YOU';
  uiUxArray = [
    {
      id: 1,
      uiuxDeliverablesCount: 1,
      uiuxDeliverablesInfo: 'User Information Design'
    },
    {
      id: 2,
      uiuxDeliverablesCount: 2,
      uiuxDeliverablesInfo: 'User Experience Design'
    },
    {
      id: 3,
      uiuxDeliverablesCount: 3,
      uiuxDeliverablesInfo: 'Design Research & Sprint'
    },
    {
      id: 4,
      uiuxDeliverablesCount: 4,
      uiuxDeliverablesInfo: 'Graphic Design'
    },
    {
      id: 5,
      uiuxDeliverablesCount: 5,
      uiuxDeliverablesInfo: 'Web Design'
    },
    {
      id: 6,
      uiuxDeliverablesCount: 6,
      uiuxDeliverablesInfo: 'Desktop App Design'
    },
    {
      id: 7,
      uiuxDeliverablesCount: 7,
      uiuxDeliverablesInfo: 'UX/UI Consulting'
    },
    {
      id: 8,
      uiuxDeliverablesCount: 8,
      uiuxDeliverablesInfo: 'Branding & Identity'
    },
    {
      id: 9,
      uiuxDeliverablesCount: 9,
      uiuxDeliverablesInfo: 'Concept Design'
    },
    {
      id: 10,
      uiuxDeliverablesCount: 10,
      uiuxDeliverablesInfo: 'Interaction Design'
    },
    {
      id: 11,
      uiuxDeliverablesCount: 11,
      uiuxDeliverablesInfo: 'Wireframe Design'
    },
    {
      id: 12,
      uiuxDeliverablesCount: 12,
      uiuxDeliverablesInfo: 'Prototyping'
    },
  ];

  //ui/ux technology stack Data
  firstTitle = 'UI/UX ';
  firstTitleBlueText = 'TECHNOLOGY STACK';
  content = 'Our UI/UX development team utilizes the right mixture of technologies to deliver immersive user experience.';
  pageName = 'UI&UX';
  technologyStackArray: any = [
    {
      id: 1,
      name: 'User Experience',
      value: 'User Experience'
    },
    {
      id: 2,
      name: 'UI & CSS',
      value: 'UI & CSS'

    },
    {
      id: 3,
      name: 'Templating',
      value: 'Templating'

    },
    {
      id: 4,
      name: 'CSS Preprocessors',
      value: 'CSS Preprocessors'
    },
    {
      id: 5,
      name: 'Package Managers',
      value: 'Package Managers'

    },
    {
      id: 6,
      name: 'JS Frameworks & Libraries',
      value: 'JS Framework'

    },
  ];

  moreThanArray = [
    {
      id:1,
      title:'Breathe new life into the existing design',
      desc:' Our mission is to provide a bespoke and tailor-made design strategy into the existing design that will offer the best user experience.'
    },
    {
      id:2,
      title:'Future-focused design concept',
      desc:' AT CBNITS, we follow a future-proof design process to create products that will exceed the expectations of your current and future clients.'
    },
    {
      id:3,
      title:'Known for our attention to detail',
      desc:'Every good user experience is the result of intensive research, thats why we uncover every minute details and bring them into play.'
    },
    {
      id:4,
      title:'Dedicated UX/UI resource hiring option',
      desc:'We work in dedicated projects and our dedicatedly-hired resources can join your existing team to help you deliver outstanding results.'
    }
  ];
  constructor(private titleService: Title, private service: UiuxService) { }

  ngOnInit(): void {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    this.titleService.setTitle('CBNITS');
    this.getHeaderData();
  }

  //fetch Banner languages data
  getHeaderData() {
    this.service.getBannerLanguagesData().subscribe((result: any) => {
      this.uiuxHeaderLanguageArray = result.data.reverse();
    })
  }
}
