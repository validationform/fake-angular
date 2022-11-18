import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-rightsideimage',
  templateUrl: './rightsideimage.component.html',
  styleUrls: ['./rightsideimage.component.css']
})
export class RightsideimageComponent implements OnInit {

  
  @Input()
  leftTitleBlack = '';

  @Input()
  leftTitleBlue = '';

  @Input()
  fullImage = '';

  @Input()
  leftMediumHeading = '';

  @Input()
   leftText = '';
  
  constructor() { }

  ngOnInit(): void {
  }

}
