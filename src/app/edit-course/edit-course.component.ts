import { Component, OnInit } from '@angular/core';
import {StudentService} from '../student.service';
import {CourseService} from '../course.service';
import { TeacherService } from '../teacher.service';
import {Course} from '../course';
import { Student } from '../student';
import { Teacher } from '../teacher';
@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent implements OnInit {

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

  deleteStudent(selectedCourse, studId) {
    for (let i = 0; i < selectedCourse.students.length; i++) {
      if (selectedCourse.students[i].id === studId) {
        selectedCourse.students.splice (i, 1);
      }
  }
  }

  setSelectedStudent(stud) {
    this.studentService.setSelectedStudent(stud);
  }
  ngOnInit() {
    this.getSelectedCourse();
    this.getStudents();
    this.getTeachers();
  }

}
