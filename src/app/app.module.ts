import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { UserFormComponent } from './user/user-form/user-form.component';
import {UserModule} from "./user/user.module";
import {UserListComponent} from "./user/user-list/user-list.component";
import { LoginComponent } from './auth/login/login.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    UserFormComponent,
    LoginComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    UserModule,
    UserListComponent
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
