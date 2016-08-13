import { provideRouter, RouterConfig } from '@angular/router';

import { AppComponent } from './app.component';
import { StudentsComponent } from './+students';
import { StudentDetailComponent } from './+students/student-detail/student-detail.component';
import { StudentListComponent } from './+students/student-list/student-list.component';

const routes: RouterConfig = [
  {
    path: '',
    component: AppComponent
  },
  {
    path: 'students',
    component: StudentListComponent
  },
  {
    path: 'students/:id',
    component: StudentDetailComponent
  }
]

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
