import { CodecraftPage } from './app.po';

describe('codecraft App', () => {
  let page: CodecraftPage;

  beforeEach(() => {
    page = new CodecraftPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
