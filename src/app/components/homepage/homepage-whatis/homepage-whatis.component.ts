import { Component, Input, OnInit } from '@angular/core';
import { WhatIsCMSResponseWithAssets } from '../../../shared/models/whatis/WhatIsCMSResponseWithAssets';

@Component({
  selector: 'app-homepage-whatis',
  templateUrl: './homepage-whatis.component.html',
  styleUrls: ['./homepage-whatis.component.css']
})
export class HomepageWhatisComponent implements OnInit {
  @Input() whatIsData: WhatIsCMSResponseWithAssets;

  playButtonUrl: string;
  header: string;
  description: string;
  listItems: Array<string>;

  constructor() { }

  ngOnInit() {
    this.playButtonUrl = this.whatIsData.includes.Asset[0].fields.file.url;
    this.header = this.whatIsData.items[0].fields.whatisHeader;
    this.description = this.whatIsData.items[0].fields.whatisDescription;
    this.listItems = this.whatIsData.items[0].fields.whatisList;
  }

}
