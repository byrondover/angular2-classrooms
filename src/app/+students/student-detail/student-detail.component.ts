import { Component, EventEmitter, Input, OnInit, OnDestroy, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MdUniqueSelectionDispatcher } from '@angular2-material/core';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MdCheckbox } from '@angular2-material/checkbox';
import { MdIcon } from '@angular2-material/icon';
import { MdInput } from '@angular2-material/input';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';
import { MD_RADIO_DIRECTIVES } from '@angular2-material/radio';

import { Student } from '../shared/student.model';
import { StudentService } from '../shared/student.service';

@Component({
  moduleId: module.id,
  selector: 'app-student-detail',
  templateUrl: 'student-detail.component.html',
  styleUrls: ['student-detail.component.css'],
  directives: [
    MD_BUTTON_DIRECTIVES,
    MD_CARD_DIRECTIVES,
    MD_LIST_DIRECTIVES,
    MD_RADIO_DIRECTIVES,
    MdCheckbox,
    MdIcon,
    MdInput
  ],
  providers: [
    MdUniqueSelectionDispatcher,
    StudentService
  ]
})
export class StudentDetailComponent implements OnInit, OnDestroy {
  title = 'Students';

  formShowing: boolean = false;
  students: Student[];
  error: any;
  private sub: any;

  //@Input() student: Student;
  student: Student;
  @Output() close = new EventEmitter();

  constructor(
    private route: ActivatedRoute,
    private studentService: StudentService
  ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      let id = +params['id'];
      this.studentService.getStudent(id)
        .then(student => this.student = student);
      console.log(id);
      //console.log(this.student.first_name);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  /* addStudent() {
    this.studentService
        .save(this.student)
        .then(student => {
          this.getStudents();
          this.formShowing = false;
        })
        .catch(error => this.error = error);
  }

  deleteStudent(student: Student, event: any) {
    event.stopPropagation();
    this.studentService
        .delete(student)
        .then(res => {
          this.students = this.students.filter(s => s !== student);
        })
        .catch(error => this.error = error);
  }

  getStudents() {
    this.studentService
        .getStudents()
        .then(students => this.students = students)
        .catch(error => this.error = error);
  } */

  save() {
    this.studentService
        .save(this.student)
        .then(student => {
          this.formShowing = false;
        })
        .catch(error => this.error = error);
  }

  toggleForm() {
    //event.preventDefault();
    this.formShowing = !this.formShowing;
    /*if(this.formShowing) {
      this.student = new Student();
    }*/
  }
}
