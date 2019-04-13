import { Injectable } from '@angular/core';
import {Student} from './student';
import {STUDENTS} from './StudentsList';
@Injectable({
  providedIn: 'root'
})
export class StudentService {
selectedStudent: Student;

  constructor() {}

  getStudents(): Student[] {
    return STUDENTS;
  }

  setSelectedStudent(student: Student) {
    this.selectedStudent = student;
  }
  getSelectedStudent(): Student {
    return this.selectedStudent;
  }
}
