import { Component, Input, OnInit } from '@angular/core';
import { HeaderCMSResponseWithAssets } from '../../../shared/models/header/HeaderCMSResponseWithAssets';

@Component({
  selector: 'app-homepage-header',
  templateUrl: './homepage-header.component.html',
  styleUrls: ['./homepage-header.component.css']
})
export class HomepageHeaderComponent implements OnInit {
  @Input() headerData: HeaderCMSResponseWithAssets;

  logoUrl: string;
  companyName: string;
  mainHeaderDescription: string;
  headerButtonText: string;

  constructor() {}

  ngOnInit() {
    this.logoUrl = this.headerData.includes.Asset[0].fields.file.url;
    this.companyName = this.headerData.items[0].fields.companyName;
    this.mainHeaderDescription = this.headerData.items[0].fields.mainHeaderDescription;
    this.headerButtonText = this.headerData.items[0].fields.headerButtonText;
  }

  selectNavLink(event) {

    const navItems = document.querySelectorAll('.nav-item');

    Array.from(navItems).forEach(function(item) {
      if (item.classList.contains('li-selected')) {
        item.classList.remove('li-selected');
      }
    });

    event.target.classList.toggle('li-selected');
  }

}
