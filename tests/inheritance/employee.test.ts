import { Employee } from "../../src/inheritance/employee"
import { Pf } from "../../src/inheritance/pf"
import { Pj } from "../../src/inheritance/pj"

describe('employee test', () => {
  const EMP_NAME = 'jackson'
  const EMP_SALARY = 1500
  const EMP_CPF = '00000000000'
  const EMP_CNPJ = '1111111111111'

  it('must be create a employee', ()=>{
    const emp1: Employee = new Pf(EMP_NAME, EMP_SALARY, EMP_CPF)
    expect(emp1.getName()).toBe(EMP_NAME)
    expect(emp1.getBenefits().length).toBe(3)
  })
  it('one employee pf with a salary of 1500 must have net salary of 1350', ()=>{
    const empPF: Employee = new Pf(EMP_NAME, EMP_SALARY, EMP_CPF)
    expect(empPF.getNetSalary()).toBe(1350)
  })
  it('one employee pj with a salary of 1500 must have net salary of 1425', ()=>{
    const empPj: Employee = new Pj(EMP_NAME, EMP_SALARY, EMP_CNPJ)
    expect(empPj.getNetSalary()).toBe(1425)
  })
})