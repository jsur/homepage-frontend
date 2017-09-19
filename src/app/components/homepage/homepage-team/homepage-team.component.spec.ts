import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageTeamComponent } from './homepage-team.component';
import { teamDataMock } from './homepage-team.component.spec-mock-data';

describe('HomepageTeamComponent', () => {
  let component: HomepageTeamComponent;
  let fixture: ComponentFixture<HomepageTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomepageTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageTeamComponent);
    component = fixture.componentInstance;
    component.teamData = teamDataMock;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
