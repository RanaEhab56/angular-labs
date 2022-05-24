import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/student.service';
import { Student } from 'src/app/_models/student';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css'],
  // providers:[StudentService],
})
export class StudentListComponent implements OnInit {
  stdlst:Student[]=[];
  
  constructor(public stdser:StudentService,public router:Router) { }
  showAdd(){
    this.router.navigateByUrl("/students/add");
  }
  ngOnInit(): void {
    this .stdlst=this.stdser.getAllStudents();
  }

}
