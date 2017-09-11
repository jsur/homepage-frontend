import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage-team',
  templateUrl: './homepage-team.component.html',
  styleUrls: ['./homepage-team.component.css']
})
export class HomepageTeamComponent implements OnInit {
  @Input() teamData;

  constructor() { }

  ngOnInit() {

    // match image assets with the right items

    const assetUrls = [];

    this.teamData.cards.includes.Asset.forEach(function(asset) {
      assetUrls.push({
        'url': asset.fields.file.url,
        'id': asset.sys.id
      });
    });

    this.teamData.cards.items.forEach(function(item) {
      assetUrls.forEach(function(asset) {
        if (asset.id === item.fields.image.sys.id) {
          item.fields['imageUrl'] = asset.url;
        }
      });
    });
  }

}
