import { Employee } from "./employee";

export class Pj extends Employee{
  private cnpj: string;
  constructor(name: string, salary: number, cnpj: string){
    super(name, salary);
    this.cnpj = cnpj;
    this.benefits = ["Plano de Saúde"];
  }
  // @Override
  public getNetSalary():number {
    return this.salary - (this.salary * 0.05);
  }
}