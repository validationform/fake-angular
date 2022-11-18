import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-webpage',
  templateUrl: './webpage.component.html',
  styleUrls: ['./webpage.component.css']
})
export class WebpageComponent implements OnInit {

@Input()
webPageImg = '';

@Input()
webFirstText = '';

@Input()
webSecondText = '';

@Input()
webPagePara = '';

@Input()
webPagePara1 = '';

@Input()
textp = '';

  constructor() { }

  ngOnInit(): void {
  }

}
