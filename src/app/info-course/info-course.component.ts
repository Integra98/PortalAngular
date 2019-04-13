import { Component, OnInit } from '@angular/core';
import {StudentService} from '../student.service';
import {CourseService} from '../course.service';
import { TeacherService } from '../teacher.service';
import {Course} from '../course';
import { Student } from '../student';
import { Teacher } from '../teacher';
@Component({
  selector: 'app-info-course',
  templateUrl: './info-course.component.html',
  styleUrls: ['./info-course.component.css']
})
export class InfoCourseComponent implements OnInit {
  selectedCourse: Course;
  students: Student[];
  teachers: Teacher[];
  selectStudent: Student;

  constructor(private courseService: CourseService,
  private studentService: StudentService, private teacherService: TeacherService ) { }

  getSelectedCourse() {
    this.selectedCourse = this.courseService.getSelectedCourse();
  }
  getTeachers() {
    this.teachers = this.teacherService.getTeachers();
  }
  getStudents(): void {
    this.students = this.studentService.getStudents();
  }

  addStudent = function(selectedCourse, student) {
    selectedCourse.students.push(student);
  };

  setSelectedStudent(stud) {
    this.studentService.setSelectedStudent(stud);
  }

  ngOnInit() {
    this.getSelectedCourse();
    this.getStudents();
    this.getTeachers();
  }

}
