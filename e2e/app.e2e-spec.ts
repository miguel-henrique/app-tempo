import { MatrizPage } from './app.po';

describe('matriz App', () => {
  let page: MatrizPage;

  beforeEach(() => {
    page = new MatrizPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
