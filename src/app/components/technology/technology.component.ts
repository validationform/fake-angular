import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css']
})
export class TechnologyComponent implements OnInit {
  @Input()
  techHeading = '';

  @Input()
  techSpan = '';

  @Input()
  techStackArray: any[] = []

  constructor() { }

  ngOnInit(): void {
  }

}
