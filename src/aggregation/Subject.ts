import { Teacher } from "./Teacher";

export class Subject {
  private name: string;
  private ch: number;
  private teacher: Teacher;
  constructor(name: string, ch: number, teacher: Teacher){
    this.name = name;
    this.ch = ch;
    this.teacher = teacher;
  }
  public getName(): string{
    return this.name
  }
  public getTeacher(): Teacher{
    return this.teacher
  }
}
