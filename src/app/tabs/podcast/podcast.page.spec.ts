import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PodcastPage } from './podcast.page';

describe('PodcastPage', () => {
  let component: PodcastPage;
  let fixture: ComponentFixture<PodcastPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PodcastPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PodcastPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
