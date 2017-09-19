import { Component, Input, OnInit } from '@angular/core';
import { SimpleProcessCMSResponse } from '../../../shared/models/simple-process/SimpleProcessCMSResponse';
import { CardObject } from '../../../shared/models/simple-process/CardObject';

@Component({
  selector: 'app-homepage-simple-process',
  templateUrl: './homepage-simple-process.component.html',
  styleUrls: ['./homepage-simple-process.component.css']
})
export class HomepageSimpleProcessComponent implements OnInit {
  @Input() simpleProcessData: SimpleProcessCMSResponse;

  header: string;
  cards: Array<CardObject>;

  constructor() { }

  ngOnInit() {
    this.simpleProcessData.cards.items.sort(function(a, b) {
      return a.fields.orderby - b.fields.orderby;
    });

    this.header = this.simpleProcessData.items[0].fields.processCardHeader;
    this.cards = this.simpleProcessData.cards.items;

  }

}
