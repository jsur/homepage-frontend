import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-homepage-header',
  templateUrl: './homepage-header.component.html',
  styleUrls: ['./homepage-header.component.css']
})
export class HomepageHeaderComponent {
  @Input() headerData;

  constructor() { }

  selectNavLink(event) {

    const navItems = document.querySelectorAll('.nav-item');

    Array.from(navItems).forEach(function(item) {
      if (item.classList.contains('li-selected')) {
        item.classList.remove('li-selected');
      }
    });

    event.target.classList.toggle('li-selected');
  }

}
