import { Course } from "../../src/aggregation/Course"
import { Subject } from "../../src/aggregation/Subject"
import { Teacher } from "../../src/aggregation/Teacher"

describe('teste curso', () => {
  const ADS_COURSE_NAME = 'Análise e Desenvolvimento de Sistemas'
  const WEB_SUBJECT_NAME = 'Desenvolvimento web'
  const ES_SUBJECT_NAME = 'Engenharia de Software'
  it('must create a couse with ads name', ()=>{
    const course = new Course(ADS_COURSE_NAME)
    expect(course.getName()).toBe(ADS_COURSE_NAME)
  })

  it('must add a subject to the course', ()=>{
    const curso = new Course(ADS_COURSE_NAME)
    const teacher1 = new Teacher('aislan')
    const web = new Subject(WEB_SUBJECT_NAME, 1, teacher1)
    curso.AddSubject(web)
    expect(curso.getSubjects().length).toBe(1)
  })

  it('deve adicionar duas disciplina ao curso', () => {
    const curso = new Course(ADS_COURSE_NAME)
    const teacher1 = new Teacher('aislan')
    const web = new Subject(WEB_SUBJECT_NAME, 1, teacher1)
    const es = new Subject(ES_SUBJECT_NAME, 1, teacher1)
    curso.AddSubject(web)
    curso.AddSubject(es)
    expect(curso.getSubjects().length).toBe(2)
  })
})