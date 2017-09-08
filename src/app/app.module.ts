import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { appRouting } from './app.routing';
import { HomepageComponent } from './components/homepage/homepage.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomepageHeaderComponent } from './components/homepage/homepage-header/homepage-header.component';
import { HomepageIconsComponent } from './components/homepage/homepage-icons/homepage-icons.component';

import { CmsContentService } from './services/cms-content.service';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NotFoundComponent,
    HomepageHeaderComponent,
    HomepageIconsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    appRouting
  ],
  providers: [
    CmsContentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }