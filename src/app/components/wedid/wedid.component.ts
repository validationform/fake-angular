import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-wedid',
  templateUrl: './wedid.component.html',
  styleUrls: ['./wedid.component.css']
})
export class WedidComponent implements OnInit {

  @Input()
  wedidArray: any[] = [];

  @Input()
  wedidHeading = "";

  @Input()
  wedidSpan = "";

  constructor() { }

  ngOnInit(): void {
  }

}
