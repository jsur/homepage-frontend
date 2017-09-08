import { ConsentioFrontPage } from './app.po';

describe('consentio-front App', () => {
  let page: ConsentioFrontPage;

  beforeEach(() => {
    page = new ConsentioFrontPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
