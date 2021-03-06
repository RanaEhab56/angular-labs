import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/student.service';
import { Student } from 'src/app/_models/student';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css'],
  providers:[StudentService],
})
export class StudentListComponent implements OnInit {
  stdlst:Student[]=[];
  constructor(public stdser:StudentService) { }

  ngOnInit(): void {
    this .stdlst=this.stdser.getAllStudents();
  }

}
