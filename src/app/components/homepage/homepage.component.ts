import { Component, OnInit } from '@angular/core';
import { CmsContentService } from '../../services/cms-content.service';

import { HeaderCMSResponseWithAssets } from '../../shared/models/header/HeaderCMSResponseWithAssets';
import { IconsCMSResponseWithAssets } from '../../shared/models/icons/IconsCMSResponseWithAssets';
import { WhatIsCMSResponseWithAssets } from '../../shared/models/whatis/WhatIsCMSResponseWithAssets';
import { ComparisonCMSResponseWithAssets } from '../../shared/models/comparison/ComparisonCMSResponseWithAssets';
import { SimpleProcessCMSResponse } from '../../shared/models/simple-process/SimpleProcessCMSResponse';
import { CustomersSayCMSResponseWithAssets } from '../../shared/models/customers-say/CustomersSayCMSResponseWithAssets';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  header: HeaderCMSResponseWithAssets;
  productDesc: IconsCMSResponseWithAssets;
  whatIs: WhatIsCMSResponseWithAssets;
  comparison: ComparisonCMSResponseWithAssets;
  simpleProcess: SimpleProcessCMSResponse;
  customersSay: CustomersSayCMSResponseWithAssets;
  inBeta: Object;
  security: Object;
  team: Object;
  contact: Object;
  footer: Object;

  constructor(private cmscontent: CmsContentService) { }

  ngOnInit() {
    this.cmscontent.homepageContent().subscribe(
      data => {
        this.header = data.header;
        this.productDesc = data.productDesc;
        this.whatIs = data.whatIs;
        this.comparison = data.comparison;
        this.simpleProcess = data.simpleProcessHeader;
        this.simpleProcess['cards'] = data.simpleProcessCards;
        this.customersSay = data.customersSayHeader;
        this.customersSay['cards'] = data.customersSayCards;
        this.inBeta = data.inBeta;
        this.security = data.security;
        this.team = data.teamHeader;
        this.team['cards'] = data.teamCards;
        this.contact = data.contact;
        this.contact['phones'] = data.contactPhone;
        this.footer = data.footer;
      },
      err => {
        console.log(err);
      }
    )
  }

}
