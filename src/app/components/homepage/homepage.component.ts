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

  constructor(private cmscontent: CmsContentService) { }

  ngOnInit() {
    this.cmscontent.homepageContent().subscribe(
      data => {
        this.header = data.header;
        this.productDesc = data.productDesc;
        // console.log(data.productDesc);
      },
      err => {
        console.log(err);
      }
    )
  }

}
