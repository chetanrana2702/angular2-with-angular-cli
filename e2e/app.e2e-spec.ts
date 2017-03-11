import { MbeetAngularPage } from './app.po';

describe('mbeet-angular App', () => {
  let page: MbeetAngularPage;

  beforeEach(() => {
    page = new MbeetAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
