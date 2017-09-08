import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageIconsComponent } from './homepage-icons.component';

describe('HomepageIconsComponent', () => {
  let component: HomepageIconsComponent;
  let fixture: ComponentFixture<HomepageIconsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomepageIconsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
