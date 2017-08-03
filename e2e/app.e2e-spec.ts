import { ScoreboardAppPage } from './app.po';

describe('scoreboard-app App', () => {
  let page: ScoreboardAppPage;

  beforeEach(() => {
    page = new ScoreboardAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
