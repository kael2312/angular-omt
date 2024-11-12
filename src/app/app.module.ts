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
import { AdminComponent } from './login/admin/admin.component';
import { UserComponent } from './login/user/user.component';
import { ManagerComponent } from './login/manager/manager.component';
import { HeaderComponent } from './login/header/header.component';
import { AccessDirective } from './login/directive/access.directive';
import { ListUserComponent } from './login/list-user/list-user.component';

@NgModule({
  declarations: [
    AppComponent,
    UserFormComponent,
    StudentComponent,
    TeacherComponent,
    TabComponent,
    TabDirective,
    TabContainerComponent,
    AdminComponent,
    UserComponent,
    ManagerComponent,
    HeaderComponent,
    AccessDirective,
    ListUserComponent,
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
