import { Student } from '../student';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {StudentService} from '../student.service';
import {Location} from '@angular/common';
import {CourseService} from '../course.service';
import {Course} from '../course';
import { Identifiers } from '@angular/compiler';
@Component({
  selector: 'app-info-student',
  templateUrl: './info-student.component.html',
  styleUrls: ['./info-student.component.css']

})
export class InfoStudentComponent implements OnInit {
  selStudent;
  id: number;
  sub: any;
  students: Student[];
  courses: Course[];

  constructor(private studentService: StudentService, private route: ActivatedRoute,
    private _location: Location, private courseService: CourseService) { }
  getSelStudent() {
    this.selStudent = this.studentService.getSelectedStudent();
  }
  getCourses() {
    this.courses = this.courseService.getCourses();
  }

  backClicked() {
    this._location.back();
}
getStudents(): void {
  this.students = this.studentService.getStudents();
}

  ngOnInit() {
    this.getSelStudent();
    this.getStudents();
    this.getCourses();
  }

  deleteInCourse(id) {
    for (let i = 0; i < this.courses.length; i++) {
      for (let j = 0; j < this.courses[i].students.length; j++) {
        if (this.courses[i].students[j].id === id) {
        this.courses[i].students.splice (i, 1);
      }
      }
  }
  }

  deleteStudent(studId) {
    for (let i = 0; i < this.students.length; i++) {
      if (this.students[i].id === studId) {
        this.students.splice (i, 1);
      }
  }
  this.deleteInCourse(studId);
  }


}
