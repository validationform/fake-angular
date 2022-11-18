import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { SoftwareSupportService } from './software-support.service';

@Component({
  selector: 'app-software-support',
  templateUrl: './software-support.component.html',
  styleUrls: ['./software-support.component.css'],
})
export class SoftwareSupportComponent implements OnInit {
  backgroundSoftwareSupportImage = 'https://www.cbnits.com/61f760668d1d54f3cbb4a36382f92287.jpg';
  headerSoftwareSupportTitle = 'SOFTWARE MAINTENANCE &';
  headerSoftwareSupportSpan = 'SUPPORT SERVICES';
  headerSoftwareSupportParaOne = 'Prevent minor issues from becoming major ones';
  headerSoftwareSupportLanguageArray: any = [];

  serviceArray: any = [];
  chooseArray: any = [];
  chooseArrayOne: any = []
  maintenanceArray: any = [];
  constructor(
    private router: Router,
    private titleService: Title,
    private serviceS: SoftwareSupportService
  ) { }

  ngOnInit(): void {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    this.titleService.setTitle('CBNITS');
    this.getsupport();
    this.getSpecialized();
    this.getWhy();
    this.getHeaderData();
  }

  //function for hire us button
  hireUs(): void {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    this.router.navigate(['/hireus']);
  }

  // software -support support service of cbnits data
  getsupport() {
    this.serviceS.getSupportService().subscribe((result: any) => {
      this.maintenanceArray = result.data;
    });
  }

  // software -support Specialized Services data
  getSpecialized() {
    this.serviceS.getSpecializedServices().subscribe((result: any) => {
      this.serviceArray = result.data.reverse();
    });
  }

  //software -support WhyChooseUs data
  getWhy() {
    this.serviceS.getWhyChooseUs().subscribe((result: any) => {
      this.chooseArrayOne = result?.data[0].description.filter((datas: any, idx: any) => {
        const parseData = JSON.parse(datas, idx);
        this.chooseArray.push(parseData);
      });
    });
  }

  // software -support Banner languages data
  getHeaderData() {
    this.serviceS.getBannerLanguagesData().subscribe((result: any) => {
      this.headerSoftwareSupportLanguageArray = result.data.reverse();
    })
  }
}
