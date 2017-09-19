import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageCustomersSayComponent } from './homepage-customers-say.component';
import { customersSayDataMock } from './homepage-customers-say.component.spec-mock-data';

describe('HomepageCustomersSayComponent', () => {
  let component: HomepageCustomersSayComponent;
  let fixture: ComponentFixture<HomepageCustomersSayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomepageCustomersSayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageCustomersSayComponent);
    component = fixture.componentInstance;
    component.customersSayData = customersSayDataMock;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
