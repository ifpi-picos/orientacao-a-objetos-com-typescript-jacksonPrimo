import { Subject } from "../../src/aggregation/Subject"
import { Teacher } from "../../src/aggregation/Teacher"

describe('Subject test', ()=>{
  const ES_NAME = 'Enhenharia de Software'
  it('must be created a subject with es name', ()=>{
    const teacher1 = new Teacher('jesiel')
    const es = new Subject(ES_NAME, 1, teacher1)
    expect(es.getName()).toBe(ES_NAME)
  })
})