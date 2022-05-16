import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentAddComponent } from './student-add/student-add.component';
import { FormsModule } from '@angular/forms';
import { RouterModule,Routes } from '@angular/router';
import { StudentEditComponent } from './student-edit/student-edit.component';
import { StudentDetailsComponent } from './student-details/student-details.component';

const routes:Routes=[
  {path:"",component:StudentListComponent},
  {path:"add",component:StudentAddComponent},
  {path:"details/:id",component:StudentDetailsComponent},
  {path:"edit/:id",component:StudentEditComponent},

]

@NgModule({
  declarations: [
    StudentListComponent,
    StudentAddComponent,
    StudentEditComponent,
    StudentDetailsComponent
  ],
  imports: [
    CommonModule,FormsModule,RouterModule.forChild(routes)
  ],
  exports:[
    StudentListComponent,
    StudentAddComponent
  ]
})
export class StudentModule { }
