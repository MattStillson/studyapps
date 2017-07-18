import { StudyAppsPage } from './app.po';

describe('study-apps App', () => {
  let page: StudyAppsPage;

  beforeEach(() => {
    page = new StudyAppsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
