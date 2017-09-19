import { HomepageInBeta } from './homepage-in-beta.po';
import { browser, protractor} from 'protractor';

// https://stackoverflow.com/questions/24960290/can-protractor-be-made-to-run-slowly
var origFn = browser.driver.controlFlow().execute;

browser.driver.controlFlow().execute = function() {
  var args = arguments;

  // queue 100ms wait
  origFn.call(browser.driver.controlFlow(), function() {
    return protractor.promise.delayed(100);
  });

  return origFn.apply(browser.driver.controlFlow(), args);
};
// slowing down ends

describe('consentio-front in-beta form content', () => {
  let page: HomepageInBeta;

  beforeEach(() => {
    page = new HomepageInBeta();
  });

  it('should display a form', () => {
    page.navigateTo();
    expect(page.getForm()).toBeTruthy();
  });

  it('should trigger phone number form validation', () => {
    page.navigateTo();
    let firstname = page.getFirstName();
    firstname.sendKeys('Seppo');
    expect(firstname.getAttribute('value')).toBe('Seppo');
    let lastname = page.getLastName();
    lastname.sendKeys('Hovi');
    expect(lastname.getAttribute('value')).toBe('Hovi');
    let email = page.getEmail();
    email.sendKeys('seppo.hovi@mtv3.fi');
    expect(email.getAttribute('value')).toBe('seppo.hovi@mtv3.fi');
    let phone = page.getPhone();
    let form = page.getForm();
    phone.click();
    form.click();
    expect(page.getPhoneValidatorText()).toEqual('Phone number is not long enough.');
  });

  it('should submit form', () => {
    page.navigateTo();
    let firstname = page.getFirstName();
    firstname.sendKeys('Seppo');
    expect(firstname.getAttribute('value')).toBe('Seppo');
    let lastname = page.getLastName();
    lastname.sendKeys('Hovi');
    expect(lastname.getAttribute('value')).toBe('Hovi');
    let email = page.getEmail();
    email.sendKeys('seppo.hovi@mtv3.fi');
    expect(email.getAttribute('value')).toBe('seppo.hovi@mtv3.fi');
    let phone = page.getPhone();
    phone.sendKeys('050 123 456');
    let submitButton = page.getSubmitButton();
    submitButton.submit();
  });

});
