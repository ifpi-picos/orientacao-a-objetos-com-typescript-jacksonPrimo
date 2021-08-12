export abstract class Employee {
  name: string;
  salary: number;
  benefits: Array<string>;

  constructor(name: string, salary: number){
    this.name = name;
    this.salary = salary;
  }
  public getName(): string{
    return this.name;
  }
  public getBenefits(): Array<string>{
    return this.benefits;
  }
  public abstract getNetSalary(): number;
  
}