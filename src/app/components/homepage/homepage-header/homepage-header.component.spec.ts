import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { headerDataMock } from './homepage-header.component.spec-mock-data';
import { HomepageHeaderComponent } from './homepage-header.component';

describe('HomepageHeaderComponent', () => {
  let component: HomepageHeaderComponent;
  let fixture: ComponentFixture<HomepageHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomepageHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageHeaderComponent);
    component = fixture.componentInstance;
    component.headerData = headerDataMock;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
