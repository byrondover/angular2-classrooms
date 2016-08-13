import { Component } from '@angular/core';

// Angular Material components.
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MdIcon, MdIconRegistry } from '@angular2-material/icon';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';
import { MD_SIDENAV_DIRECTIVES } from '@angular2-material/sidenav';
import { MdToolbar } from '@angular2-material/toolbar';

import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [
    ROUTER_DIRECTIVES,
    MD_BUTTON_DIRECTIVES,
    MD_LIST_DIRECTIVES,
    MD_SIDENAV_DIRECTIVES,
    MdIcon,
    MdToolbar
  ],
  providers: [MdIconRegistry]
})
export class AppComponent {
  title = 'Classroom Manager';
  views: Object[] = [
    {
      name: "Home",
      description: "Dashboard",
      icon: "home",
      link: "/"
    },
    {
      name: "Students",
      description: "Manage student profiles",
      icon: "people_outline",
      link: "/students"
    }
  ]
}
