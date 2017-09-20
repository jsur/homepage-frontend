import { HomepageIcons } from './homepage-icons.po';

describe('consentio-front icons content', () => {
  let page: HomepageIcons;

  beforeEach(() => {
    page = new HomepageIcons();
  });

  it('should display at least 1 product card', () => {
    page.navigateTo();
    let arr = page.getProductCards();
    expect(arr.count()).not.toBeLessThan(1);
  });

});
