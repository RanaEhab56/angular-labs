import { Injectable } from '@angular/core';
import { Department } from './_models/department';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  private depts:Department[]=[
    new Department(100,"sd","alex"),
    new Department(100,"os","smart"),
    new Department(100,"sd","mansora"),
    new Department(100,"ai","alex"),
    new Department(100,"sd","alex")
  ]
  getAllDepartments(){
    return this.depts;
  }
  addDepartment(dept:Department){
    this.depts.push(new Department(dept._id, dept.name,dept.location));
  }
  getDepartment(id:number){
    for (let i=0;i<this.depts.length;i++){
      if(this.depts[i]._id==id)
        return this.depts[i];
    }
    return null;
  }
  constructor() { }
}
