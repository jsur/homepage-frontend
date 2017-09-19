import { Component, Input, OnInit } from '@angular/core';
import { CustomersSayCMSResponseWithAssets } from '../../../shared/models/customers-say/CustomersSayCMSResponseWithAssets';
import { CustomersSayCardObject } from '../../../shared/models/customers-say/CustomersSayCardObject';

@Component({
  selector: 'app-homepage-customers-say',
  templateUrl: './homepage-customers-say.component.html',
  styleUrls: ['./homepage-customers-say.component.css']
})
export class HomepageCustomersSayComponent implements OnInit {
  @Input() customersSayData: CustomersSayCMSResponseWithAssets;

  header: string;
  cards: Array<CustomersSayCardObject>;

  constructor() { }

  ngOnInit() {

    this.header = this.customersSayData.items[0].fields.customersSayHeader;
    this.cards = this.customersSayData.cards.items;

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
