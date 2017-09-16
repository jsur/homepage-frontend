import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { FooterComponent } from '../footer/footer.component';
import { HomepageComponent } from './homepage.component';
import { HomepageHeaderComponent } from './homepage-header/homepage-header.component';
import { HomepageIconsComponent } from './homepage-icons/homepage-icons.component';
import { HomepageWhatisComponent } from './homepage-whatis/homepage-whatis.component';
import { HomepageComparisonComponent } from './homepage-comparison/homepage-comparison.component';
import { HomepageSimpleProcessComponent } from './homepage-simple-process/homepage-simple-process.component';
import { HomepageCustomersSayComponent } from './homepage-customers-say/homepage-customers-say.component';
import { HomepageInBetaComponent } from './homepage-in-beta/homepage-in-beta.component';
import { HomepageSecurityComponent } from './homepage-security/homepage-security.component';
import { HomepageTeamComponent } from './homepage-team/homepage-team.component';
import { HomepageContactComponent } from './homepage-contact/homepage-contact.component';

import { CmsContentService } from '../../services/cms-content.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  declarations: [
    HomepageComponent,
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
  providers: [
    CmsContentService
  ]
})
export class HomepageModule { }
