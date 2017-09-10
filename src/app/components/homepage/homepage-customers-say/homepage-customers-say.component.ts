import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage-customers-say',
  templateUrl: './homepage-customers-say.component.html',
  styleUrls: ['./homepage-customers-say.component.css']
})
export class HomepageCustomersSayComponent implements OnInit {
  @Input() customersSayData;

  constructor() { }

  ngOnInit() {

    // match image assets with the right items

    const assetUrls = [];

    this.customersSayData.cards.includes.Asset.forEach(function(asset) {
      assetUrls.push({
        'url': asset.fields.file.url,
        'id': asset.sys.id
      });
    });

    this.customersSayData.cards.items.forEach(function(item) {
      assetUrls.forEach(function(asset) {
        if (asset.id === item.fields.customerPicture.sys.id) {
          item.fields['customerImgUrl'] = asset.url;
        }
      });
    });

  }

}
