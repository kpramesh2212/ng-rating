import { NgRatingPage } from './app.po';

describe('ng-rating App', () => {
  let page: NgRatingPage;

  beforeEach(() => {
    page = new NgRatingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
