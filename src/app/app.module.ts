import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule} from "@angular/forms";
import {UserFormComponent} from './user/user-form/user-form.component';
import {UserModule} from "./user/user.module";
import {UserListComponent} from "./user/user-list/user-list.component";
import {StudentComponent} from "./form/student/student/student.component";
import {TeacherComponent} from './form/student/teacher/teacher.component';
import {TabComponent} from './form/student/tab/tab.component';
import {TabDirective} from "./form/student/tab/tab.directive";
import {TabContainerComponent} from './form/student/tab-container/tab-container.component';
import { StudentListComponent } from './form/student/student-list/student-list.component';
import { TeacherListComponent } from './form/student/teacher-list/teacher-list.component';

@NgModule({
  declarations: [
    AppComponent,
    UserFormComponent,
    StudentComponent,
    TeacherComponent,
    TabComponent,
    TabDirective,
    TabContainerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    UserModule,
    UserListComponent,
    TeacherListComponent,
    StudentListComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
