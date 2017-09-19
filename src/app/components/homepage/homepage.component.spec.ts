import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageComponent } from './homepage.component';
import { NotFoundComponent } from '../not-found/not-found.component';
import { HomepageHeaderComponent } from '../homepage/homepage-header/homepage-header.component';
import { HomepageIconsComponent } from '../homepage/homepage-icons/homepage-icons.component';
import { HomepageWhatisComponent } from '../homepage/homepage-whatis/homepage-whatis.component';
import { HomepageComparisonComponent } from '../homepage/homepage-comparison/homepage-comparison.component';
import { HomepageSimpleProcessComponent } from '../homepage/homepage-simple-process/homepage-simple-process.component';
import { HomepageCustomersSayComponent } from '../homepage/homepage-customers-say/homepage-customers-say.component';
import { HomepageInBetaComponent } from '../homepage/homepage-in-beta/homepage-in-beta.component';
import { HomepageSecurityComponent } from '../homepage/homepage-security/homepage-security.component';
import { HomepageTeamComponent } from '../homepage/homepage-team/homepage-team.component';
import { HomepageContactComponent } from '../homepage/homepage-contact/homepage-contact.component';
import { FooterComponent } from '../footer/footer.component';

import { ReactiveFormsModule } from '@angular/forms';

import { CmsContentService } from '../../services/cms-content.service';
import { HttpModule } from '@angular/http';

describe('HomepageComponent', () => {
  let component: HomepageComponent;
  let fixture: ComponentFixture<HomepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomepageComponent,
        NotFoundComponent,
        HomepageHeaderComponent,
        HomepageIconsComponent,
        HomepageWhatisComponent,
        HomepageComparisonComponent,
        HomepageSimpleProcessComponent,
        HomepageCustomersSayComponent,
        HomepageInBetaComponent,
        HomepageSecurityComponent,
        HomepageTeamComponent,
        HomepageContactComponent,
        FooterComponent
      ],
      imports: [
        ReactiveFormsModule,
        HttpModule
      ],
      providers: [
        CmsContentService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
