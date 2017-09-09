import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageComparisonComponent } from './homepage-comparison.component';

describe('HomepageComparisonComponent', () => {
  let component: HomepageComparisonComponent;
  let fixture: ComponentFixture<HomepageComparisonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomepageComparisonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageComparisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
