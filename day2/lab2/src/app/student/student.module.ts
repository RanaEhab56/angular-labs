import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentComponent } from './student/student.component';
import { FormsModule } from '@angular/forms';
import { MyfilterPipe } from './myfilter.pipe';



@NgModule({
  declarations: [
    StudentComponent,
    MyfilterPipe
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    StudentComponent
  ]
})
export class StudentModule { }
