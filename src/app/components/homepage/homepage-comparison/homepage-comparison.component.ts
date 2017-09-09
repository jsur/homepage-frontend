import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage-comparison',
  templateUrl: './homepage-comparison.component.html',
  styleUrls: ['./homepage-comparison.component.css']
})
export class HomepageComparisonComponent implements OnInit {
  @Input() comparisonData;

  iconAvailableUrl = '';
  iconNotAvailableUrl = '';

  constructor() {}

  ngOnInit() {
    this.comparisonData.includes.Asset.forEach( item => {
      if (item.sys.id === '5gt6nKcYsgmoe0yWo0cCoe') {
        this.iconAvailableUrl = item.fields.file.url;
      }
      if (item.sys.id === '2y5nH2Kt2YWyogGIoGowoe') {
        this.iconNotAvailableUrl = item.fields.file.url;
      }
    });
  }

}
