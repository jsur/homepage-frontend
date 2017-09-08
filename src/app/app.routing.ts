import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const appRoutes: Routes = [
  // If application grows, new routes can be added here
  { path: '', component: HomepageComponent },
  { path: '**', component: NotFoundComponent }
];

export const appRouting = RouterModule.forRoot(appRoutes);
