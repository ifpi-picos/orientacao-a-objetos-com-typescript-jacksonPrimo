import { Employee } from "../../src/inheritance/employee"
import { Enterprise } from "../../src/inheritance/enterprise"
import { Pf } from "../../src/inheritance/pf"
import { Pj } from "../../src/inheritance/pj"

describe('Enterprise test', ()=>{
  const ENT_NAME = 'Farmacia do povo'
  it('must be create a enterprise', ()=>{
    const enterprise = new Enterprise(ENT_NAME)
    expect(enterprise.getName()).toBe(ENT_NAME) 
  })
  it('must be add two employees in enterprise', ()=>{
    const enterprise = new Enterprise('Lanchonete saborear')
    const emp1: Employee = new Pj('João', 1000, '0000000000000')
    enterprise.addEmployee(emp1)
    const emp2: Employee = new Pf('Maria', 1200, '11111111111')
    enterprise.addEmployee(emp2)
    expect(enterprise.getEmployees().length).toBe(2)
  })
})