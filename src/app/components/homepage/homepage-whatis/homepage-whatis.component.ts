import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage-whatis',
  templateUrl: './homepage-whatis.component.html',
  styleUrls: ['./homepage-whatis.component.css']
})
export class HomepageWhatisComponent implements OnInit {
  @Input() whatIsData;

  constructor() { }

  ngOnInit() {
    console.log(this.whatIsData);
  }

}
