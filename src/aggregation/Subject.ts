import { Teacher } from "./Teacher";

export class Subject {
  name: string;
  ch: number;
  teacher: Teacher;
  constructor(name: string, ch: number, teacher: Teacher){
    this.name = name;
    this.ch = ch;
    this.teacher = teacher;
  }
}
