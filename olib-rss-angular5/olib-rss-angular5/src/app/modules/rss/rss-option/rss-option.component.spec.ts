import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RssOptionComponent } from './rss-option.component';

describe('RssOptionComponent', () => {
  let component: RssOptionComponent;
  let fixture: ComponentFixture<RssOptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RssOptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RssOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
