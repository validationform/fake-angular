import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { BlockchainService } from './blockchain.service';

@Component({
  selector: 'app-blockchain',
  templateUrl: './blockchain.component.html',
  styleUrls: ['./blockchain.component.css'],
})
export class BlockchainComponent implements OnInit {
  blockchainBackgroundImage = 'https://www.cbnits.com/b80d9829bab7e3087633a385bf62bf4a.jpg';
  blockchainHeaderTitle = 'Blockchain Technology';
  blockchainHeaderSpan = 'Development';
  blockchainHeaderParaOne = 'Get our Blockchain Experts Ready to Empower your Business';
  blockchainHeaderLanguageArray: any = [];
  
  capabilitiesArray: any = [];
  industriesArray: any = [];
  toolsArray: any = [];
  
  constructor(
    private router: Router,
    private titleService: Title,
    private service: BlockchainService
  ) {}

  ngOnInit(): void {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    this.titleService.setTitle('CBNITS');
    this.getCapabilitiesData();
    this.getIndustriedData();
    this.getToolsData();
    this.getHeaderData();
  }

  //function for hire us button
  hireUs(): void {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    this.router.navigate(['/hireus']);
  }

  //fetch Banner languages data
  getHeaderData() {
    this.service.getBannerLanguagesData().subscribe((result: any) => {
      this.blockchainHeaderLanguageArray = result.data.reverse();
    });
  }

  //fetch capabilities data
  getCapabilitiesData() {
    this.service.getCapabilities().subscribe((result: any) => {
      this.capabilitiesArray = result?.data[0].description;
      console.log('capabilities=>', this.capabilitiesArray);
    });
  }

  //fetch Industries We serve data
  getIndustriedData() {
    this.service.getIndustries().subscribe((result: any) => {
      this.industriesArray = result?.data[0].description;
      console.log('industries=>', this.industriesArray);
    });
  }

  //fetch Tools and Technology data
  getToolsData() {
    this.service.getToolsAndTEchnology().subscribe((result: any) => {
      this.toolsArray = result.data;
      console.log('Tools And Technology=>', this.toolsArray.reverse());
    });
  }
}
