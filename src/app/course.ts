import { Student } from './student';
import { Teacher } from './teacher';

export class Course {
    id: number;
    name: string;
    credits: number;
    teacher: string;
    gpa: number;
    students: Student[];



    constructor(id: number, name: string, credits: number, teacher: string, students: Student[]) {
        this.id = id;
        this.name = name;
        this.credits = credits;
        this.teacher = teacher;
        this.students = students;

    }
}


