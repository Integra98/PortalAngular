import { Student } from '../student';
import { Component, OnInit, Input } from '@angular/core';
import {StudentService} from '../student.service';
@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {

  selStudent;

  constructor(private studentService: StudentService) { }
  getSelStudent() {
    this.selStudent = this.studentService.getSelectedStudent();
  }
  ngOnInit() {
    this.getSelStudent();
  }

}
