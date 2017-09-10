import { Component, OnInit } from '@angular/core';
import { CmsContentService } from '../../services/cms-content.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  header: Object;
  productDesc: Object;
  whatIs: Object;
  comparison: Object;
  simpleProcess: Object;
  customersSay: Object;
  inBeta: Object;

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
      },
      err => {
        console.log(err);
      }
    )
  }

}
