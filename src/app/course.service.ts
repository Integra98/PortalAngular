import { Injectable } from '@angular/core';
import {Course} from './course';
import {courses} from './courseList';
@Injectable({
  providedIn: 'root'
})
export class CourseService {
selectedCourse: Course;
  constructor() { }
  getCourses(): Course[] {
    return courses;
  }

  getSelectedCourse() {
    return this.selectedCourse;
  }
  setSelectedCourse(course) {
    this.selectedCourse = course;
  }

}
