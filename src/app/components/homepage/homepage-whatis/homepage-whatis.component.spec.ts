import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageWhatisComponent } from './homepage-whatis.component';
import { whatIsDataMock } from './homepage-whatis.component.spec-mock-data';

describe('HomepageWhatisComponent', () => {
  let component: HomepageWhatisComponent;
  let fixture: ComponentFixture<HomepageWhatisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomepageWhatisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageWhatisComponent);
    component = fixture.componentInstance;
    component.whatIsData = whatIsDataMock;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
