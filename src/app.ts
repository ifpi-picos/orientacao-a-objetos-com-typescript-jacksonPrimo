import { Course } from "./aggregation/Course";
import { Subject } from "./aggregation/Subject";
import { Teacher } from "./aggregation/Teacher";
import { Employee } from "./inheritance/employee";
import { Enterprise } from "./inheritance/enterprise";
import { Pf } from "./inheritance/pf";
import { Pj } from "./inheritance/pj";

console.log("==================== AGREGAÇÃO ===========================");

const teacher1: Teacher  = new Teacher("João Paulo");
const teacher2: Teacher  = new Teacher("Aislan Rafael");
const subject1: Subject = new Subject("Programação Orientada a Objetos", 1, teacher1);
const subject2: Subject = new Subject("Engenharia de Software", 2, teacher2);
const c1: Course = new Course("Análise e Desenvolvimento de Sistemas");
c1.AddSubject(subject1);
c1.AddSubject(subject2);
c1.showSubjects();

console.log("==================== HERANÇA ===========================");

const enterprite1: Enterprise = new Enterprise("Pague Menos");
const employee1: Employee = new Pf("Jackson", 1500.00, "66666666666");
const employee2: Employee = new Pj("Jefferson", 1500.00, "1111111111111");
enterprite1.addEmployee(employee1);
enterprite1.addEmployee(employee2);
enterprite1.showEmployees();