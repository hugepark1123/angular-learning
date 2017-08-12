import { NgNewWelcomeMsgAppPage } from './app.po';

describe('ng-new-welcome-msg-app App', () => {
  let page: NgNewWelcomeMsgAppPage;

  beforeEach(() => {
    page = new NgNewWelcomeMsgAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
