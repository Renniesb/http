import { Rossella2UiPage } from './app.po';

describe('rossella2-ui App', function() {
  let page: Rossella2UiPage;

  beforeEach(() => {
    page = new Rossella2UiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
