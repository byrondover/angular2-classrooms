import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

import { Student } from '../shared/student.model';
import { StudentService } from '../shared/student.service';

@Component({
  moduleId: module.id,
  selector: 'app-student-list',
  templateUrl: 'student-list.component.html',
  styleUrls: ['student-list.component.css']
})
export class StudentListComponent implements OnInit {
  title = 'Students';

  formShowing: boolean = false;
  students: Student[];
  error: any;

  @Input() student: Student;
  @Output() close = new EventEmitter();

  constructor(
    private router: Router,
    private studentService: StudentService
  ) { }

  ngOnInit() {
    this.getStudents();
  }

  addStudent() {
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
  }

  gotoStudentDetail(student: Student) {
    this.router.navigate(['/students', student.id]);
  }

  toggleForm() {
    this.formShowing = !this.formShowing;
    if(this.formShowing) {
      this.student = new Student();
    }
  }
}
