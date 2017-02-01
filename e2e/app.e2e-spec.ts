import { FantasyCalculatorPage } from './app.po';

describe('fantasy-calculator App', function() {
  let page: FantasyCalculatorPage;

  beforeEach(() => {
    page = new FantasyCalculatorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
