import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage-contact',
  templateUrl: './homepage-contact.component.html',
  styleUrls: ['./homepage-contact.component.css']
})
export class HomepageContactComponent implements OnInit {
  @Input() contactData;

  constructor() { }

  ngOnInit() {

    // match image assets with the right phone numbers

    const assetUrls = [];

    this.contactData.phones.includes.Asset.forEach(function(asset) {
      assetUrls.push({
        'url': asset.fields.file.url,
        'id': asset.sys.id
      });
    });

    this.contactData.phones.items.forEach(function(item) {
      assetUrls.forEach(function(asset) {
        if (asset.id === item.fields.phoneFlag.sys.id) {
          item.fields['phoneFlagUrl'] = asset.url;
        }
      });
    });
  }

}
