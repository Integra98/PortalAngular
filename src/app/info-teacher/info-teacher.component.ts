import { Component, OnInit } from '@angular/core';
import { Teacher } from '../teacher';
import { TeacherService } from '../teacher.service';
@Component({
  selector: 'app-info-teacher',
  templateUrl: './info-teacher.component.html',
  styleUrls: ['./info-teacher.component.css']
})
export class InfoTeacherComponent implements OnInit {
  selectedTeacher: Teacher;

  constructor(private teacherService: TeacherService) { }

  getSelTeacher() {
    this.selectedTeacher = this.teacherService.getSelectedTeacher();
  }
  ngOnInit() {
    this.getSelTeacher();
  }

}
