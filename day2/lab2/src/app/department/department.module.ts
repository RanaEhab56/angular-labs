import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentComponent } from './department/department.component';
import { FormsModule } from '@angular/forms';
import { AppendStringPipe } from './append-string.pipe';



@NgModule({
  declarations: [
    DepartmentComponent,
    AppendStringPipe
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    DepartmentComponent
  ]
})
export class DepartmentModule { }
