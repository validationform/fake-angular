import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { HadoopService } from './hadoop.service';

@Component({
  selector: 'app-hadoop',
  templateUrl: './hadoop.component.html',
  styleUrls: ['./hadoop.component.css']
})
export class HadoopComponent implements OnInit {
  hadoopBackgroundImage = 'https://www.cbnits.com/51c77fb13100de1b9d18e56e635156c5.jpg'
  hadoopHeaderTitle ='Hadoop, Big Data';
  hadoopHeaderSpan ='And Cloudera';
  hadoopHeaderParaOne = 'Achieve more uptime, better performance, faster case resolution';
  hadoopHeaderLanguageArray: any = [];

  apacheHadoopText ='';
  
  bigDataDevelopmentArray: any = [];

  clouderaServicesArray: any = [];

  developmentText = '';

  expertiseDomainArray:any = [];
  constructor(private titleService:Title,private service:HadoopService, private router:Router) { }

  ngOnInit(): void {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    this.titleService.setTitle('CBNITS');
    this.getProductData();
    this.getClouderaServicesData();
    this.getbigDataCbnitsData();
    this.getHadoopPostOneData();
    this.getHeaderData();
  }

  //fetch Banner languages data
  getHeaderData() {
    this.service.getBannerLanguagesData().subscribe((result: any)=> {
      this.hadoopHeaderLanguageArray = result.data.reverse();
    })
  }

 //fetch expertise domain product data
  getProductData() {
    this.service.getDomainExpertise().subscribe((result: any)=> {
      this.expertiseDomainArray = result.data
      console.log("domain expertise array=>",this.expertiseDomainArray);
    })
  }

  //fetch Cloudera Services Data
  getClouderaServicesData() {
    this.service.getClouderaServices().subscribe((result: any)=> {
      this.clouderaServicesArray = result?.data[0].description;
      console.log("Cloud Services Array=>",this.clouderaServicesArray);
    })
  }
  
  //fetch big Data Cbnits Data
  getbigDataCbnitsData() {
    this.service.getBigDataCbnits().subscribe((result: any)=> {
      this.bigDataDevelopmentArray = result?.data[0].description;
      console.log("Cloud Services Array=>",this.bigDataDevelopmentArray);
    })
  }

  //fetch apache hadoop data
  getHadoopPostOneData() {
    this.service.getHadoopPostOne().subscribe((result: any)=> {
      this.apacheHadoopText = result?.data[0].description;
      console.log("Hadoop Post One=>",this.apacheHadoopText);
    })
  }

  //function for hire us button
  hireUs() {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    this.router.navigate(['/hireus']);
  }
}
