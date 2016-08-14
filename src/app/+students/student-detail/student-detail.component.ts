import { Component, EventEmitter, Input, OnInit, OnDestroy, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Student } from '../shared/student.model';
import { StudentService } from '../shared/student.service';

@Component({
  moduleId: module.id,
  selector: 'app-student-detail',
  templateUrl: 'student-detail.component.html',
  styleUrls: ['student-detail.component.css']
})
export class StudentDetailComponent implements OnInit, OnDestroy {
  title = 'Students';

  formShowing: boolean = false;
  students: Student[];
  error: any;
  private sub: any;

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
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  save() {
    this.studentService
        .save(this.student)
        .then(student => {
          this.formShowing = false;
        })
        .catch(error => this.error = error);
  }

  toggleForm() {
    this.formShowing = !this.formShowing;
  }
}
