import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NodeService } from './node.service';
@Component({
  selector: 'app-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.css']
})
export class NodeComponent implements OnInit {

  nodeBackgroundImage = '../../assets/nodebanner.jpg'
  nodeHeaderTitle ='Node Js Development';
  nodeHeaderParaOne = 'End-to-end Node.JS development service to build faster and sca-';
  nodeHeaderParaTwo = 'label real-time application.';
  nodeHeaderLanguageArray: any = [];

  developmentNodeArray: any = [];
  developmentNodeImage = "";
  developmentNodePara = 'Hire the best in the industry Node developer from CBNITS to secure outstanding software development services according to your buisness requirements.'
  developmentNodeHeading = 'NODE JS';
  developmentNodeSkyHeading = 'development offerings';
  
  advantagesNodeArray: any = [];
  advantagesNodeImage = "";
  advantagesNodeButtonName = 'Hire Us';
  advantagesNodeHeading = 'Why Hire Node.Js Developers from';
  advantagesNodeSpan = 'CBNITS?';

  constructor(private titleService:Title, private service: NodeService) { }

  ngOnInit(): void {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    this.titleService.setTitle('CBNITS');
    this.getNodeDevelopmentOfferingsData();
    this.getNodeAdvantagesHiringData();
    this.getHeaderData();
  }

   //fetch Banner languages data
   getHeaderData() {
    this.service.getBannerLanguagesData().subscribe((result: any)=> {
      this.nodeHeaderLanguageArray = result.data.reverse();
    })
  }

  //fetch Development offerings data
  getNodeDevelopmentOfferingsData() {
    this.service.getNodeDevelopmentData().subscribe((result: any)=> {
      this.developmentNodeArray = result?.data[0].description;
      this.developmentNodeImage = result?.data[0].image;
    })
  }

   //fetch Advantages data
  getNodeAdvantagesHiringData() {
    this.service.getNodeAdvantagesData().subscribe((result: any)=> {
      this.advantagesNodeArray = result?.data[0].description;
      this.advantagesNodeImage = result?.data[0].image;
    })
  }
}
