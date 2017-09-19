import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageContactComponent } from './homepage-contact.component';
import { contactDataMock } from './homepage-contact.component.spec-mock-data';

describe('HomepageContactComponent', () => {
  let component: HomepageContactComponent;
  let fixture: ComponentFixture<HomepageContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomepageContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageContactComponent);
    component = fixture.componentInstance;
    component.contactData = contactDataMock;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
