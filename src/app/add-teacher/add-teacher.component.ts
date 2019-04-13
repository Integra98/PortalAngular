import { Component, OnInit } from '@angular/core';
import { Teacher } from '../teacher';
import { TeacherService } from '../teacher.service';
@Component({
  selector: 'app-add-teacher',
  templateUrl: './add-teacher.component.html',
  styleUrls: ['./add-teacher.component.css']
})
export class AddTeacherComponent implements OnInit {
  teachers: Teacher[];

  constructor(private teacherService: TeacherService) { }

   pushTeacher = function(id: number, name: string, sex: string, type: string, kafedra: string) {
    const newTeacher = new Teacher (id, name, sex, type, kafedra);
    this.teachers.push(newTeacher);
  };

  getTeachers() {
    this.teachers = this.teacherService.getTeachers();
  }

ngOnInit() {
  this.getTeachers();
}

}
