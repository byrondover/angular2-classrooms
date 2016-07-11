import { Angular2ClassroomsStaticPage } from './app.po';

describe('angular2-classrooms-static App', function() {
  let page: Angular2ClassroomsStaticPage;

  beforeEach(() => {
    page = new Angular2ClassroomsStaticPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
