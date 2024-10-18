import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListFormComponent } from './list-form/list-form.component';
import { StudentFormComponent } from './student-form/student-form.component';
import {ReactiveFormsModule} from "@angular/forms";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [


  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class UserModule { }
