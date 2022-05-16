import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/student.service';
import { Student } from 'src/app/_models/student';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})
export class StudentAddComponent implements OnInit {
  nstd:Student=new Student(0,"",0);
  save(){
    this.stdSer.addStudent(this.nstd);
    this.router.navigateByUrl("/students");
  }
  constructor( public stdSer:StudentService, public router:Router) { }

  ngOnInit(): void {
  }

}
