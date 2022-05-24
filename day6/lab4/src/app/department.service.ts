import { Injectable } from '@angular/core';
import { Department } from './_models/department';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  private url: string = "http://localhost:8080/departments/";
 
  
  getAllDepartments(){
    return this.http.get<Department[]>(this.url)
  }
  addDepartment(dept:Department){
    return this.http.post<Department>(this.url, dept);
  }
  getDepartment(id:number){
    return this.http.get<Department>(this.url + id)
  }

  editDepartment(dept: Department, id: number) {

    return this.http.put<Department>(this.url + id, dept);
  }

  deleteDepartment(id: number) {
    return this.http.delete<Department>(this.url + id);
  }
  constructor(public http: HttpClient) { }
}
