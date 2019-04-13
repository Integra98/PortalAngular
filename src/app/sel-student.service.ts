import { Injectable } from '@angular/core';
import {Student} from './student';
@Injectable({
  providedIn: 'root'
})
export class SelStudentService {
  SelStudent: Student;

  constructor() { }

  setSelStudent (student) {
    this.SelStudent = student;
  }
  getSelStudent () {
    return this.SelStudent;
  }
}
