import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UserModel} from "../../../models/user.model";
import {StudentModel} from "../../../models/student.model";
import {NgForOf, NgIf, NgStyle} from "@angular/common";

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    NgStyle
  ],
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() studentLists: StudentModel[] = [];
  @Output() editStudentEvent = new EventEmitter<string>();
  @Output() deleteStudentEvent = new EventEmitter<string>();

  getGenderColor(gender: string): string {
    return gender === 'Female' ? 'red' : 'blue';
  }

  deleteStudent(id: string) {
    this.deleteStudentEvent.emit(id)
  }

  editStudent(id: string) {
    this.editStudentEvent.emit(id);
  }
}
