import { Component, OnInit } from '@angular/core';

import { MD_CARD_DIRECTIVES } from '@angular2-material/card';

@Component({
  moduleId: module.id,
  selector: 'app-students',
  templateUrl: 'students.component.html',
  styleUrls: ['students.component.css'],
  directives: [
    MD_CARD_DIRECTIVES
  ]
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
