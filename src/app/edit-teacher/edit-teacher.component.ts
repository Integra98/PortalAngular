import { Component, OnInit } from '@angular/core';
import { Teacher } from '../teacher';
import { TeacherService } from '../teacher.service';
@Component({
  selector: 'app-edit-teacher',
  templateUrl: './edit-teacher.component.html',
  styleUrls: ['./edit-teacher.component.css']
})
export class EditTeacherComponent implements OnInit {

  selectedTeacher: Teacher;

  constructor(private teacherService: TeacherService) { }

  getSelTeacher() {
    this.selectedTeacher = this.teacherService.getSelectedTeacher();
  }
  ngOnInit() {
    this.getSelTeacher();
  }

}
