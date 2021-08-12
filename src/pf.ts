import { Employee } from "./employee";

export class Pf extends Employee{
  private cpf: string;
  constructor(name: string, salary: number, cpf: string){
    super(name, salary);
    this.cpf = cpf;
    this.benefits = ["Plano de Saúde", "Vale Refeição", "férias"];
  }
  // @Override
  public getNetSalary():number {
    return this.salary - (this.salary * 0.1);
  }
}