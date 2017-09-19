import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { HomepageInBetaComponent } from './homepage-in-beta.component';
import { inBetaDataMock } from './homepage-in-beta.component.spec-mock-data';

describe('HomepageInBetaComponent', () => {
  let component: HomepageInBetaComponent;
  let fixture: ComponentFixture<HomepageInBetaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomepageInBetaComponent ],
      imports: [ReactiveFormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageInBetaComponent);
    component = fixture.componentInstance;
    component.inBetaData = inBetaDataMock;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
