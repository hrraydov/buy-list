import { BuyListPage } from './app.po';

describe('buy-list App', () => {
  let page: BuyListPage;

  beforeEach(() => {
    page = new BuyListPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
