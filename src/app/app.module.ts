import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { StudentFormComponent } from './user/student-form/student-form.component';
import {UserModule} from "./user/user.module";
import {UserListComponent} from "./user/user-list/user-list.component";
import { UserFormComponent } from './user/user-form/user-form.component';
import {TeacherFormComponent} from "./user/teacher-form/teacher-form.component";

@NgModule({
  declarations: [
    AppComponent,
    UserFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    UserModule,
    UserListComponent,
    StudentFormComponent,
    TeacherFormComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
