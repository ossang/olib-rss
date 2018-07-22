import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RssAddComponent } from './rss-add.component';

describe('RssAddComponent', () => {
  let component: RssAddComponent;
  let fixture: ComponentFixture<RssAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RssAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RssAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
