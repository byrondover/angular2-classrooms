import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-students',
  templateUrl: 'students.component.html',
  styleUrls: ['students.component.css']
})
export class StudentsComponent implements OnInit {
  title = 'Students';

  constructor() {}

  ngOnInit() {
  }

  students: Object[] = [
    {name: "Porter"},
    {name: "Mal"},
    {name: "Razzle"},
    {name: "Koby"},
    {name: "Molly"},
    {name: "Husi"}
  ];
}
