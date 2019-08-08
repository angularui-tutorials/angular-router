import {Route, Routes} from '@angular/router';
import {HomeComponent} from './component/home/home.component';
import {ContactComponent} from './component/contact/contact.component';
import {coursesChildRoute} from '../courses-child-router';

export const fallBackRoute: Route = {
    path : '**',
    component: HomeComponent
  };


export const routeConfig: Routes =
  [
    {
      path: '',
      pathMatch: 'full',
      redirectTo: '/home'
    },
    {
      path: 'home',
      component: HomeComponent
    },
    {
      path: 'contact',
      component: ContactComponent
    },
    ...coursesChildRoute,
    fallBackRoute
  ];
