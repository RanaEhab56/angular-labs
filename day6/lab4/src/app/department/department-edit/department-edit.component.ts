import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DepartmentService } from 'src/app/department.service';
import { Department } from 'src/app/_models/department';
@Component({
  selector: 'app-department-edit',
  templateUrl: './department-edit.component.html',
  styleUrls: ['./department-edit.component.css']
})
export class DepartmentEditComponent implements OnInit {

  department: Department  = new Department(0, "", "");
  id = 0;

  constructor(public deptSer:DepartmentService, public router: Router, public ac: ActivatedRoute) { }

  editDepartment() {
    this.deptSer.editDepartment(this.department, this.id).subscribe(data => {
      this.department = data;
      this.router.navigateByUrl("/departments");
    });
  }

  ngOnInit(): void {
    this.id = this.ac.snapshot.params['id'];
    this.ac.params.subscribe(data => {
      this.deptSer.getDepartment(data['id']).subscribe(dept => {
        this.department = dept;
      });
    });
  }
}
