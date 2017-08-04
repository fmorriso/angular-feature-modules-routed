import { Aatest5Page } from './app.po';

describe('aatest5 App', () => {
  let page: Aatest5Page;

  beforeEach(() => {
    page = new Aatest5Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
