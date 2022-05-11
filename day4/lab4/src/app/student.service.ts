import { Injectable } from '@angular/core';
import { Student } from './_models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private studs:Student[]=[
    new Student(1,"rana",24),
    new Student(2,"salma",24),
    new Student(3,"asmaa",24),
    new Student(4,"alaa",24),
    
  ]

  getAllStudents(){
    return this.studs;
  }
  addStudent(stud:Student){
    this.studs.push(new Student(stud._id, stud.name,stud.age));
  }
  getStudent(id:number){
    for (let i=0;i<this.studs.length;i++){
      if(this.studs[i]._id==id)
        return this.studs[i];
    }
    return null;
  }
  

  constructor() { }
}
