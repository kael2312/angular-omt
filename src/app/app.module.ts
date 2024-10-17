import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {UserListComponent} from "./users/list/user-list.component";
import {UserFormComponent} from "./users/form/user-form.component";

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        UserListComponent,
        UserFormComponent
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
