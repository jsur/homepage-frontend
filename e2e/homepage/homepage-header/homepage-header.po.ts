import { browser, by, element } from 'protractor';

export class HomepageHeader {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-homepage-header h1')).getText();
  }

  getButton() {
    return element(by.css('app-homepage-header button'));
  }

  getButtonText() {
    return element(by.css('app-homepage-header button')).getText();
  }
}
