import { browser, by, element } from 'protractor';

export class HomepageInBeta {
  navigateTo() {
    return browser.get('/');
  }

  getForm() {
    return element(by.css('app-homepage-in-beta form'));
  }

  getFirstName() {
    return element(by.name('firstname'));
  }

  getLastName() {
    return element(by.name('lastname'));
  }

  getEmail() {
    return element(by.name('email'));
  }

  getPhone() {
    return element(by.name('phone'));
  }

  getPhoneValidatorText() {
    return element(by.css('.form-validator-notice')).getText();
  }

  getSubmitButton() {
    return element(by.name('submit'));
  }
}
