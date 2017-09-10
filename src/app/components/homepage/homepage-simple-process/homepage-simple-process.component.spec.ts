import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageSimpleProcessComponent } from './homepage-simple-process.component';

describe('SimpleProcessComponent', () => {
  let component: HomepageSimpleProcessComponent;
  let fixture: ComponentFixture<HomepageSimpleProcessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomepageSimpleProcessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageSimpleProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
