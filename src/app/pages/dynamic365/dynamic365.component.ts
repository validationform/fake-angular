import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Dynamic365Service } from './dynamic365.service';

@Component({
  selector: 'app-dynamic365',
  templateUrl: './dynamic365.component.html',
  styleUrls: ['./dynamic365.component.css']
})
export class Dynamic365Component implements OnInit {
  dynamicBackgroundImage = 'https://www.cbnits.com/59e827953bf97f23878501116e4aff56.jpg'
  dynamicHeaderTitle ='Microsoft';
  dynamicHeaderSpan ='Dynamic 365';
  dynamicHeaderParaOne = 'Map your needs with the certified Microsoft Dynamic 365 partner';
  dynamicHeaderLanguageArray: any = [];
  
  dynamicPara='';

  microsoftArray:any = [];
  microsoftHeading = 'The Microsoft';
  microsoftSpan ='Dynamic 365';
  microsoftPara = 'Product and Solution We Provide';

  dynamicConsultentArray:any =[];
  
  constructor(private titleService:Title,private service:Dynamic365Service,private router:Router) { }

  ngOnInit(): void {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    this.titleService.setTitle('CBNITS');
    this.getProductData();
    this.getLastPostData();
    this.getFirstPostData();
    this.getHeaderData();
  }

  //fetch product and solution we provide data
  getProductData() {
    this.service.getProductAndSolution().subscribe((result: any)=> {
      this.microsoftArray = result.data
      console.log("Products Array=>",this.microsoftArray);
    })
  }

  //fetch cbnits trusted microsoft dynamic 365 consultant data
  getLastPostData() {
    this.service.getLastPost().subscribe((result: any)=> {
      this.dynamicConsultentArray = result?.data[0].description;
      console.log("Dynamic Array=>",this.dynamicConsultentArray);
    })
  }

  //fetch dynamic 365 data 
  getFirstPostData() {
    this.service.getFirstPost().subscribe((result: any)=> {
      this.dynamicPara = result?.data[0].description;
      console.log("WebPage paragraph=>",this.dynamicPara);
    })
  }

   //fetch Banner languages data
   getHeaderData() {
    this.service.getBannerLanguagesData().subscribe((result: any)=> {
      this.dynamicHeaderLanguageArray = result.data.reverse();
    })
  }

  //function for hire us button
  hireUs() {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    this.router.navigate(['/hireus']);
  }
}
