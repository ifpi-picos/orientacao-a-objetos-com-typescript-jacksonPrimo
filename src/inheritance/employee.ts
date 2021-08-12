export abstract class Employee {
  protected name: string;
  protected salary: number;
  protected benefits: Array<string>;

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