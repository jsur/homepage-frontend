import { Component, OnInit } from '@angular/core';
import { CmsContentService } from '../../services/cms-content.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private cmscontent: CmsContentService) { }

  header: Object;
  productDesc: Object;

  ngOnInit() {
    this.cmscontent.homepageContent().subscribe(
      data => {
        this.header = data.header;
        console.log(this.header);
      },
      err => {
        console.log(err);
      }
    )
  }

}
