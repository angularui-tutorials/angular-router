import {Route} from '@angular/router';
import {CoursesComponent} from './app/component/courses/courses.component';

export const coursesChildRoute = [
  {
  path: 'courses',
  children: [
  {
    path: '',
    component: CoursesComponent
  },
  {
    path: ':id',
    component: CoursesComponent
  }
]}];
