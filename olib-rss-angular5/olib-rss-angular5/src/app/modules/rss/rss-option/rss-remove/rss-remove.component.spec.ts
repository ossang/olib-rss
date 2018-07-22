import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RssRemoveComponent } from './rss-remove.component';

describe('RssRemoveComponent', () => {
  let component: RssRemoveComponent;
  let fixture: ComponentFixture<RssRemoveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RssRemoveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RssRemoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
