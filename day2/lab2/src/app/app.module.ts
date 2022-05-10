import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { StudentModule } from './student/student.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DepartmentModule } from './department/department.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,CoreModule,FormsModule,StudentModule,DepartmentModule,NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
