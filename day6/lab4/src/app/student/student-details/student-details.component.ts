import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from 'src/app/student.service';
import { Student } from 'src/app/_models/student';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
  id=0;
  std:Student|null=new Student(0,"",0);
  constructor( public ac:ActivatedRoute, public stdser:StudentService) { }

  ngOnInit(): void {
    this.std=this.stdser.getStudent(this.ac.snapshot.params['id'])
    this.id=this.ac.snapshot.params['id'];
  }

}
