import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage-whatis',
  templateUrl: './homepage-whatis.component.html',
  styleUrls: ['./homepage-whatis.component.css']
})
export class HomepageWhatisComponent implements OnInit {
  @Input() whatIsData;

  playButtonUrl: string;

  constructor() { }

  ngOnInit() {
    this.playButtonUrl = this.whatIsData.includes.Asset[0].fields.file.url;
  }

}
