import { Employee } from "./employee";

export class Enterprise {
  name: string;
  employees: Array<Employee> = [];
  constructor(name: string){
    this.name = name;
  }
  public addEmployee(e: Employee){
    this.employees.push(e);
  }
  public showEmployees(){
    this.employees.forEach(e=>{
      console.log(`nome: ${e.getName()} \n`);
      console.log(`salario liquido: ${e.getNetSalary()} \n`);
      console.log(`Benefícios: \n`);
      e.getBenefits().forEach(b => {
        console.log(`${b} \n`);
      });
      console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=")
    });
  }
}
