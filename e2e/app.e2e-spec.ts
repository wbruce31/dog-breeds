import { DogBreedsPage } from './app.po';

describe('dog-breeds App', () => {
  let page: DogBreedsPage;

  beforeEach(() => {
    page = new DogBreedsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
