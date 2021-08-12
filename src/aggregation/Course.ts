import { Subject } from "./Subject";

export class Course {
  private name: string;
  private subjects: Array<Subject>;
  
  constructor(name: string){
    this.name = name;
    this.subjects = [];
  }
  public getName(): string{
    return this.name
  }
  public getSubjects(): Array<Subject>{
    return this.subjects
  }
  public AddSubject(s: Subject){
    this.subjects.push(s);
  }
  public RemoveSubject(index: number){
    this.subjects.splice(index, 1);
  }
  public showSubjects(){
    this.subjects.forEach(el => {
      console.log(`Disciplina: ${el.getName} \n`);
      console.log(`professor: ${el.getTeacher().getName()} \n`);
      console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=")
    });
  }
}
