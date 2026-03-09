import { Routes } from '@angular/router';
import { HomePage } from '../pages/home-page/home-page';
import { AboutPage } from '../pages/about-page/about-page';
import { ServicePage } from '../pages/service-page/service-page';
import { ServiceDetailsPage } from '../pages/service-details-page/service-details-page';
import { ContactPage } from '../pages/contact-page/contact-page';

export const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'about',
    component: AboutPage,
  },
  {
    path: 'service',
    component: ServicePage,
  },
  {
    path: 'service-details',
    component: ServiceDetailsPage,
  },
  {
    path: 'contact',
    component: ContactPage,
  },
];
