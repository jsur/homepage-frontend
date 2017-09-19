import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageSimpleProcessComponent } from './homepage-simple-process.component';
import { simpleProcessDataMock } from './homepage-simple-process.component.spec-mock-data';

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
    component.simpleProcessData = simpleProcessDataMock;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
