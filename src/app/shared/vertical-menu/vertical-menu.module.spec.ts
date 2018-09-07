import { VerticalMenuModule } from './vertical-menu.module';

describe('VerticalMenuModule', () => {
  let verticalMenuModule: VerticalMenuModule;

  beforeEach(() => {
    verticalMenuModule = new VerticalMenuModule();
  });

  it('should create an instance', () => {
    expect(verticalMenuModule).toBeTruthy();
  });
});
