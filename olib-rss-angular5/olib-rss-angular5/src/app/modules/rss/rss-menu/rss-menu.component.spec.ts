import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RssMenuComponent } from './rss-menu.component';

describe('RssMenuComponent', () => {
  let component: RssMenuComponent;
  let fixture: ComponentFixture<RssMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RssMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RssMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
