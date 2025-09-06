import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Sounds } from './pages/sounds/sounds';
import { About } from './pages/about/about';
import { Profile } from './pages/profile/profile';
import { Settings } from './pages/settings/settings';
import { Login } from './pages/login/login';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'sounds', component: Sounds },
  { path: 'about', component: About },
  { path: 'profile', component: Profile },
  { path: 'settings', component: Settings },
  { path: 'login', component: Login }
];
