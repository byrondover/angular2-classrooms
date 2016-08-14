import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routes';
import { StudentsComponent } from './+students';
import { StudentDetailComponent } from './+students/student-detail/student-detail.component';
import { StudentListComponent } from './+students/student-list/student-list.component';
import { StudentService } from './+students/shared/student.service';

/*
// Imports for loading & configuring the in-memory web api
*/
import { HttpModule, XHRBackend } from '@angular/http';
import { InMemoryBackendService, SEED_DATA } from 'angular2-in-memory-web-api';
import { InMemoryDataService } from './shared/in-memory-data.service';
/*
// End in-memory web api imports
*/

import { MdButtonModule } from '@angular2-material/button';
import { MdCardModule } from '@angular2-material/card';
import { MdIconModule } from '@angular2-material/icon';
import { MdInputModule } from '@angular2-material/input';
import { MdListModule } from '@angular2-material/list';
import { MdRadioModule } from '@angular2-material/radio';
import { MdSidenavModule } from '@angular2-material/sidenav';
import { MdToolbarModule } from '@angular2-material/toolbar';

@NgModule({
    declarations: [
      AppComponent,
      StudentsComponent,
      StudentDetailComponent,
      StudentListComponent
    ],
    providers: [
      // in-mem server
      { provide: XHRBackend, useClass: InMemoryBackendService },
      // in-mem server data
      { provide: SEED_DATA, useClass: InMemoryDataService },
      
      StudentService
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule,

        MdButtonModule,
        MdCardModule,
        MdIconModule,
        MdInputModule,
        MdListModule,
        MdRadioModule,
        MdSidenavModule,
        MdToolbarModule,

        AppRoutes
    ],
    bootstrap: [AppComponent],
})
export class AppModule { }
