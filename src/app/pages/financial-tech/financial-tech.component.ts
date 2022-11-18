import { Component, OnInit } from '@angular/core';
import { DomSanitizer, Title } from '@angular/platform-browser';
import { FinancialTechService } from './financial-tech.service';

@Component({
  selector: 'app-financial-tech',
  templateUrl: './financial-tech.component.html',
  styleUrls: ['./financial-tech.component.css']
})
export class FinancialTechComponent implements OnInit {
  backgroundFinancialTechImage = 'https://www.cbnits.com/8f51d32f18bdc755f747d8daacff1659.jpg'
  headerFinancialTechTitle = 'News';
  headerFinancialTechParaOne = 'Leading the path of innovation!';
  headerFinancialTechLanguageArray: any = [];
  financialTechById: any = [];

  constructor(private titleService: Title, private service: FinancialTechService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    this.titleService.setTitle('CBNITS')
    this.getHeaderData();
    this.getNewsByIdData();
  }

  //financial-tech Banner languages data
  getHeaderData() {
    this.service.getBannerLanguagesData().subscribe((result: any) => {
      this.headerFinancialTechLanguageArray = result.data.reverse();
    })
  }
  //financial-tech by id languages data
  getNewsByIdData() {
    this.service.getNewsByIdData().subscribe((result: any) => {
      this.financialTechById = result.data;
      this.financialTechById.newsContent = this.sanitizer.bypassSecurityTrustHtml(this.financialTechById.newsContent)
    })
  }
}
