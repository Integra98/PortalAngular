export class Teacher {
    id: number;
    name: string;
    sex: string;
    type: string;
    kafedra: string;



    constructor(id: number, name: string, sex: string, type: string, kafedra: string) {
        this.id = id;
        this.name = name;
        this.sex = sex;
        this.type = type;
        this.kafedra = kafedra;
    }
}

