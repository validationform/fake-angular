import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-whatwedid',
  templateUrl: './whatwedid.component.html',
  styleUrls: ['./whatwedid.component.css']
})
export class WhatwedidComponent implements OnInit {

  @Input()
  mainImg = '';

  @Input()
  mainHeading = '';

  @Input()
  mainSpan = '';

  @Input()
  platformArray: any = [];

  constructor() { }

  ngOnInit(): void {
  }

}
