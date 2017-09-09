import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage-icons',
  templateUrl: './homepage-icons.component.html',
  styleUrls: ['./homepage-icons.component.css']
})
export class HomepageIconsComponent implements OnInit {
  @Input() productDescData;

  constructor() {}

  ngOnInit() {

    // match logo assets with the right items

    const assetUrls = [];
    this.productDescData.includes.Asset.forEach(function(asset) {
      assetUrls.push({
        'url': asset.fields.file.url,
        'id': asset.sys.id
      });
    });

    this.productDescData.items.forEach(function(item) {
      assetUrls.forEach(function(asset) {
        if (asset.id === item.fields.cardIcon.sys.id) {
          item.fields['cardUrl'] = asset.url;
        }
      });
    });

  }

}
