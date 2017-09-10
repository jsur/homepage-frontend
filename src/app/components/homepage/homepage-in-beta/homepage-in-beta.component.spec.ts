import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageInBetaComponent } from './homepage-in-beta.component';

describe('HomepageInBetaComponent', () => {
  let component: HomepageInBetaComponent;
  let fixture: ComponentFixture<HomepageInBetaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomepageInBetaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageInBetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
