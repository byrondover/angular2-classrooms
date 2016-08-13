import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Student } from './student.model';

@Injectable()
export class StudentService {
  private studentsUrl = 'app/students'; // API URL

  constructor(private http: Http) { }

  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  private post(student: Student): Promise<Student> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http
               .post(this.studentsUrl, JSON.stringify(student), {headers: headers})
               .toPromise()
               .then(res => res.json().data)
               .catch(this.handleError);
  }

  private put(student: Student) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let url = `${this.studentsUrl}/${student.id}`;

    return this.http
               .put(url, JSON.stringify(student), {headers: headers})
               .toPromise()
               .then(() => student)
               .catch(this.handleError);
  }

  delete(student: Student) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let url = `${this.studentsUrl}/${student.id}`

    return this.http
               .delete(url, headers)
               .toPromise()
               .catch(this.handleError);
  }

  getStudent(id: number) {
    return this.getStudents()
               .then(students => students.find(student => student.id === id));
  }

  getStudents(): Promise<Student[]> {
    return this.http.get(this.studentsUrl)
               .toPromise()
               .then(response => response.json().data)
               .catch(this.handleError);
  }

  save(student: Student): Promise<Student> {
    if (student.id) {
      return this.put(student);
    }
    return this.post(student);
  }
}
