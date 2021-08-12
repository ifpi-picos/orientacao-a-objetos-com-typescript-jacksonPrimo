import { Employee } from "./employee";
import { Enterprise } from "./enterprise";
import { Pf } from "./pf";
import { Pj } from "./pj";

const enterprite1: Enterprise = new Enterprise("Pague Menos");
const employee1: Employee = new Pf("Jackson", 1500.00, "66666666666");
const employee2: Employee = new Pj("Jefferson", 1500.00, "1111111111111");
enterprite1.addEmployee(employee1);
enterprite1.addEmployee(employee2);
enterprite1.showEmployees();