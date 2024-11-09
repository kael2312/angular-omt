import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule} from "@angular/forms";
import {NavComponent} from "./shares/components/nav/nav.component";
import {TabComponent} from "./shares/components/tab/tab.component";
import {StudentFormComponent} from "./user/student/student-form/student-form.component";
import {TeacherFormComponent} from "./user/teacher/teacher-form/teacher-form.component";
import {ManagerFormComponent} from "./user/manager/manager-form/manager-form.component";
import {AdminFormComponent} from "./user/admin/admin-form/admin-form.component";
import {CustomerFormComponent} from "./user/customer/customer-form/customer-form.component";
import {LoginComponent} from "./components/login/login.component";
import {HeaderComponent} from "./components/header/header.component";
import {HomeComponent} from "./components/home/home.component";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        NavComponent,
        TabComponent,
        StudentFormComponent,
        TeacherFormComponent,
        ManagerFormComponent,
        AdminFormComponent,
        CustomerFormComponent,
        LoginComponent,
        HeaderComponent,
        HomeComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
