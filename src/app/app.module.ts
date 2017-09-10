import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomepageHeaderComponent } from './components/homepage/homepage-header/homepage-header.component';
import { HomepageIconsComponent } from './components/homepage/homepage-icons/homepage-icons.component';
import { HomepageWhatisComponent } from './components/homepage/homepage-whatis/homepage-whatis.component';
import { HomepageComparisonComponent } from './components/homepage/homepage-comparison/homepage-comparison.component';
import { HomepageSimpleProcessComponent } from './components/homepage/homepage-simple-process/homepage-simple-process.component';
import { HomepageCustomersSayComponent } from './components/homepage/homepage-customers-say/homepage-customers-say.component';
import { HomepageInBetaComponent } from './components/homepage/homepage-in-beta/homepage-in-beta.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { appRouting } from './app.routing';

import { CmsContentService } from './services/cms-content.service';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NotFoundComponent,
    HomepageHeaderComponent,
    HomepageIconsComponent,
    HomepageWhatisComponent,
    HomepageComparisonComponent,
    HomepageSimpleProcessComponent,
    HomepageCustomersSayComponent,
    HomepageInBetaComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    appRouting
  ],
  providers: [
    CmsContentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
