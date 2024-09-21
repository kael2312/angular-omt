import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { UserFormComponent } from './user/user-form/user-form.component';
import {UserModule} from "./user/user.module";
import {UserListComponent} from "./user/user-list/user-list.component";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    UserModule,
    UserListComponent,
    UserFormComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
