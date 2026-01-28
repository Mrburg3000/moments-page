import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home';
import { AboutComponent } from './components/pages/about/about';
import { NewMoment } from './components/pages/new-moment/new-moment';
import { MomentComponent } from './components/pages/moment/moment';
import { EditMomentComponent } from './components/pages/edit-moment/edit-moment';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'moments/new', component: NewMoment },
  { path: 'moments/edit/:id', component: EditMomentComponent },
  { path: 'moments/:id', component: MomentComponent }
  
];
