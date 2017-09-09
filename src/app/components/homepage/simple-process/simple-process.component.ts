import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-process',
  templateUrl: './simple-process.component.html',
  styleUrls: ['./simple-process.component.css']
})
export class SimpleProcessComponent implements OnInit {
  @Input() simpleProcessData;

  constructor() { }

  ngOnInit() {
    console.log(this.simpleProcessData);
    this.simpleProcessData.cards.items.sort(function(a, b) {
      return a.fields.orderby - b.fields.orderby;
    });
  }

  toggleCardFlip(event) {
    event.target.classList.toggle('card-flipped');
  }

}
