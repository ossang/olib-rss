import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedMenuComponent } from './feed-menu.component';

describe('FeedMenuComponent', () => {
  let component: FeedMenuComponent;
  let fixture: ComponentFixture<FeedMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
