import { Injectable } from '@angular/core';
import { Teacher } from './teacher';
import {TEACHERS} from './TeachersList';
@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  selectedTeacher: Teacher;
  constructor() { }
  getTeachers(): Teacher[] {
    return TEACHERS;
  }

  setSelectedTeacher(teacher) {
    this.selectedTeacher = teacher;
  }
  getSelectedTeacher() {
    return this.selectedTeacher;
  }
}
