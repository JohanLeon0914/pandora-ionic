import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChaptersPage } from './chapters.page';

describe('Tab2Page', () => {
  let component: ChaptersPage;
  let fixture: ComponentFixture<ChaptersPage>;

  beforeEach(async () => {
    fixture = TestBed.createComponent(ChaptersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
