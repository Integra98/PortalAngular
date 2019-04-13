import { Component, OnInit } from '@angular/core';
import { Course } from '../course';
import { Student } from '../student';
import { Teacher } from '../teacher';
import {StudentService} from '../student.service';
import {CourseService} from '../course.service';
import { TeacherService } from '../teacher.service';
@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  constructor(private courseService: CourseService) { }

courses: Course[];
selectedCourse: Course;


getCourses(): void {
  this.courses = this.courseService.getCourses();
}

  onSelect(course: Course): void {
    this.selectedCourse = course;
    this.courseService.setSelectedCourse(this.selectedCourse);
  }
  ngOnInit() {
    this.getCourses();
  }

}
