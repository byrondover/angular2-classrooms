import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
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
