import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  @Input() footerData;

  companyLogo: string;

  constructor() { }

  ngOnInit() {
    this.companyLogo = this.footerData.includes.Asset[0].fields.file.url;
  }

}
