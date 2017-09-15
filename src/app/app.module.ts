import { AppComponent } from './app.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { appRouting } from './app.routing';

import { HomepageModule } from './components/homepage/homepage.module';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HomepageModule,
    appRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
