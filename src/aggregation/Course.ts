import { Subject } from "./Subject";

export class Course {
  name: string;
  subjects: Array<Subject>;
  
  constructor(name: string){
    this.name = name;
    this.subjects = [];
  }

  public AddSubject(s: Subject){
    this.subjects.push(s);
  }
  public RemoveSubject(index: number){
    this.subjects.splice(index, 1);
  }
  public showSubjects(){
    this.subjects.forEach(el => {
      console.log(`Disciplina: ${el.name} \n`);
      console.log(`professor: ${el.teacher.name} \n`);
      console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=")
    });
  }
}
