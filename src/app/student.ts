export class Student {
    id: number;
    name: string;
    sex: string;
    type: string;
    cours: number;
    gpa: number;


    constructor(id: number, name: string, sex: string, type: string, cours: number, gpa: number) {
        this.id = id;
        this.name = name;
        this.sex = sex;
        this.type = type;
        this.cours = cours;
        this.gpa = gpa;
    }
}

