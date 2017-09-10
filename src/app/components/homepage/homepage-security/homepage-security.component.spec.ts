import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageSecurityComponent } from './homepage-security.component';

describe('HomepageSecurityComponent', () => {
  let component: HomepageSecurityComponent;
  let fixture: ComponentFixture<HomepageSecurityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomepageSecurityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageSecurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
