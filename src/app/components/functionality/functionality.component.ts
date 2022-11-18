import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-functionality',
  templateUrl: './functionality.component.html',
  styleUrls: ['./functionality.component.css']
})
export class FunctionalityComponent implements OnInit {

  @Input()
  firstHeading= '';

  @Input()
  firstArray:any = [];
  
  @Input()
  secondHeading = '';
  
  @Input()
  secondArray:any = [];
    
  @Input()
  thirdHeading = '';
  
  @Input()
  thirdArray:any = [];

 
  constructor() { }

  ngOnInit(): void {
  }

}
