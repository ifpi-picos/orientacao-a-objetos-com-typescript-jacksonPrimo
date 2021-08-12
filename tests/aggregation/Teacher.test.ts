import { Teacher } from "../../src/aggregation/Teacher"

describe('Teacher test', ()=>{
  const TEACHER_NAME = 'Rafael'
  it('must be create a teacher with name rafael', ()=>{
    const teacher1 = new Teacher(TEACHER_NAME)
    expect(teacher1.getName()).toBe(TEACHER_NAME)
  })
})