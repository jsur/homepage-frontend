import { HomepageHeader } from './homepage-header.po';

describe('consentio-front header content', () => {
  let page: HomepageHeader;

  beforeEach(() => {
    page = new HomepageHeader();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('B2B TRANSACTIONS MADE EASY');
  });

  it('should find Join us button', () => {
    page.navigateTo();
    expect(page.getButton()).toBeTruthy();
  });

  it('should say Join us on header button', () => {
    page.navigateTo();
    expect(page.getButtonText()).toEqual('Join us');
  })
});
