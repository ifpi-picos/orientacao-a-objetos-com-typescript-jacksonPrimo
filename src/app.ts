import { Employee } from "./inheritance/employee";
import { Enterprise } from "./inheritance/enterprise";
import { Pf } from "./inheritance/pf";
import { Pj } from "./inheritance/pj";

const enterprite1: Enterprise = new Enterprise("Pague Menos");
const employee1: Employee = new Pf("Jackson", 1500.00, "66666666666");
const employee2: Employee = new Pj("Jefferson", 1500.00, "1111111111111");
enterprite1.addEmployee(employee1);
enterprite1.addEmployee(employee2);
enterprite1.showEmployees();