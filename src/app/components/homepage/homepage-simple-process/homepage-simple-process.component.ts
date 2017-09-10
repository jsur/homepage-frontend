import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage-simple-process',
  templateUrl: './homepage-simple-process.component.html',
  styleUrls: ['./homepage-simple-process.component.css']
})
export class HomepageSimpleProcessComponent implements OnInit {
  @Input() simpleProcessData;

  constructor() { }

  ngOnInit() {
    this.simpleProcessData.cards.items.sort(function(a, b) {
      return a.fields.orderby - b.fields.orderby;
    });
  }

}
