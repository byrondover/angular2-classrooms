import { Angular2ClassroomsPage } from './app.po';

describe('angular2-classrooms App', function() {
  let page: Angular2ClassroomsPage;

  beforeEach(() => {
    page = new Angular2ClassroomsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
