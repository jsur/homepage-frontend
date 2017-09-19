import { TestBed, async } from '@angular/core/testing';

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
import { HomepageSecurityComponent } from './components/homepage/homepage-security/homepage-security.component';
import { HomepageTeamComponent } from './components/homepage/homepage-team/homepage-team.component';
import { HomepageContactComponent } from './components/homepage/homepage-contact/homepage-contact.component';
import { FooterComponent } from './components/footer/footer.component';

import { appRouting } from './app.routing';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


import { APP_BASE_HREF } from '@angular/common';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
        HomepageInBetaComponent,
        HomepageSecurityComponent,
        HomepageTeamComponent,
        HomepageContactComponent,
        FooterComponent
      ],
      imports: [
        appRouting,
        FormsModule,
        ReactiveFormsModule
      ],
      providers: [
        {provide: APP_BASE_HREF, useValue : '/' }
      ]
      ,
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));

  /*it('should render h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toBeDefined();
  }));*/
});
