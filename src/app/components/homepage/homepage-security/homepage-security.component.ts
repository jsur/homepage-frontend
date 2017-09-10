import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage-security',
  templateUrl: './homepage-security.component.html',
  styleUrls: ['./homepage-security.component.css']
})
export class HomepageSecurityComponent implements OnInit {
  @Input() securityData;

  // Objects are loopable in template with this
  objectKeys = Object.keys;

  constructor() { }

  ngOnInit() {

    // match logo asset urls with the right logos in items object

    const assetUrls = [];

    this.securityData.includes.Asset.forEach(function(asset) {
      assetUrls.push({
        'url': asset.fields.file.url,
        'id': asset.sys.id
      });
    });

    // Credit logos
    this.securityData.items[0].fields.logos.forEach(function(logo) {
      assetUrls.forEach(function(asset) {
        if (asset.id === logo.sys.id) {
          logo['url'] = asset.url;
        }
      });
    });

    // ICC logo
    assetUrls.forEach(function(asset) {
      if (asset.id === this.securityData.items[0].fields.iccLogo.sys.id) {
        this.securityData.items[0].fields.iccLogo['url'] = asset.url;
      }
    }.bind(this));

  }

  toggleText() {
    const hiddenDiv = document.querySelector('.hidden-text');
    hiddenDiv.classList.toggle('hidden');
  }

}
