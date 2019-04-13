import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { StudentComponent } from './student/student.component';
import { TeacherComponent } from './teacher/teacher.component';
import { FormsModule } from '@angular/forms';
import { HomepageComponent } from './homepage/homepage.component';
import {RouterModule} from '@angular/router';
import { InfoStudentComponent } from './info-student/info-student.component';
import { InfoTeacherComponent } from './info-teacher/info-teacher.component';
import { InfoCourseComponent } from './info-course/info-course.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { AddTeacherComponent } from './add-teacher/add-teacher.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { EditCourseComponent } from './edit-course/edit-course.component';
import { EditTeacherComponent } from './edit-teacher/edit-teacher.component';

const routes = [
  {path: '', component: HomepageComponent },
  {path: 'courses', component: CourseComponent},
  {path: 'teachers', component: TeacherComponent },
  {path: 'students', component: StudentComponent },
  {path: 'add-student', component: AddStudentComponent },
  {path: 'add-teacher', component: AddTeacherComponent },
  {path: 'add-course', component: AddCourseComponent },
  {path: 'info-student/:id', component: InfoStudentComponent},
  {path: 'edit-student/:id', component: EditStudentComponent },
  {path: 'info-teacher/:id', component: InfoTeacherComponent},
  {path: 'edit-teacher/:id', component: EditTeacherComponent },
  {path: 'info-course/:id', component: InfoCourseComponent},
  {path: 'edit-course/:id', component: EditCourseComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    StudentComponent,
    TeacherComponent,
    HomepageComponent,
    InfoStudentComponent,
    InfoTeacherComponent,
    InfoCourseComponent,
    AddCourseComponent,
    AddStudentComponent,
    AddTeacherComponent,
    EditStudentComponent,
    EditCourseComponent,
    EditTeacherComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
