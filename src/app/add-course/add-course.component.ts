import { Component, OnInit } from '@angular/core';
import { Course } from '../course';
import { Student } from '../student';
import { Teacher } from '../teacher';
import {StudentService} from '../student.service';
import {CourseService} from '../course.service';
import { TeacherService } from '../teacher.service';
@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {

  students: Student[];
  teachers: Teacher[];
  courses: Course[];

  constructor(private courseService: CourseService,
  private studentService: StudentService, private teacherService: TeacherService ) { }

  pushCourse = function(id: number, name: string, credits: number, teacher: string, students: Student[]) {
    const newCourse = new Course(id, name, credits, teacher, students);
    this.courses.push(newCourse);
  };

  getCourses(): void {
    this.courses = this.courseService.getCourses();
  }

  getTeachers() {
    this.teachers = this.teacherService.getTeachers();
  }
  getStudents(): void {
    this.students = this.studentService.getStudents();
  }



  ngOnInit() {
    this.getStudents();
    this.getTeachers();
    this.getCourses();
  }

}
