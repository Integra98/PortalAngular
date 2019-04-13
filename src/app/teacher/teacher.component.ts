import { Component, OnInit } from '@angular/core';
import { Teacher } from '../teacher';
import { TeacherService } from '../teacher.service';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {

  constructor(private teacherService: TeacherService) { }

  teachers: Teacher[];
  selectedTeacher: Teacher;

    onSelect(teacher: Teacher): void {
      this.selectedTeacher = teacher;
      this.teacherService.setSelectedTeacher(this.selectedTeacher);
    }
    getTeachers() {
      this.teachers = this.teacherService.getTeachers();
    }

  ngOnInit() {
    this.getTeachers();
  }

}
