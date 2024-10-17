import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule} from "@angular/forms";
import {NavComponent} from "./shares/components/nav/nav.component";
import {TabComponent} from "./shares/components/tab/tab.component";
import {StudentFormComponent} from "./user/student/student-form/student-form.component";
import {TeacherFormComponent} from "./user/teacher/teacher-form/teacher-form.component";

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        NavComponent,
        TabComponent,
        StudentFormComponent,
        TeacherFormComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
