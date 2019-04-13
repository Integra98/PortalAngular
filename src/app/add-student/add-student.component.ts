import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import {StudentService} from '../student.service';
@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  students: Student[];

  constructor(private studentService: StudentService) { }

  getStudents(): void {
    this.students = this.studentService.getStudents();
  }


  pushStudent = function(id, name: string, sex: string, type: string, cours: number, gpa: number) {
        const newStudent = new Student (id, name, sex, type, cours, gpa);
       this.students.push(newStudent);

    };

  ngOnInit() {
    this.getStudents();
  }

}
