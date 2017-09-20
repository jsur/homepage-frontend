import { browser, by, element, $$ } from 'protractor';

export class HomepageIcons {
  navigateTo() {
    return browser.get('/');
  }

  getProductCards() {
    return $$('app-homepage-icons .product-card');
  }
}
