import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import {StudentService} from '../student.service';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent implements OnInit {

  constructor(private studentService: StudentService) { }

  students: Student[];

  selectedStudent: Student;
  btnText = false;

  getStudents(): void {
    this.students = this.studentService.getStudents();
  }
  setSelectedStudent() {
    this.studentService.setSelectedStudent(this.selectedStudent);
  }



    onSelect(student: Student): void {
      this.selectedStudent = student;
      this.setSelectedStudent();
    }


  ngOnInit() {
    this.getStudents();
  }

}
