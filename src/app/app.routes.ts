import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { StudentsComponent } from './+students';
import { StudentDetailComponent } from './+students/student-detail/student-detail.component';
import { StudentListComponent } from './+students/student-list/student-list.component';

const appRoutes: Routes = [
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

export const AppRoutes = RouterModule.forRoot(appRoutes);
