import { RssModule } from './rss.module';

describe('RssModule', () => {
  let rssModule: RssModule;

  beforeEach(() => {
    rssModule = new RssModule();
  });

  it('should create an instance', () => {
    expect(rssModule).toBeTruthy();
  });
});
