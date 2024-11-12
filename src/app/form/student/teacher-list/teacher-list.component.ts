import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UserModel} from "../../../models/user.model";
import {TeacherModel} from "../../../models/teacher.model";
import {NgForOf, NgIf, NgStyle} from "@angular/common";

@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    NgStyle
  ],
  styleUrls: ['./teacher-list.component.css']
})
export class TeacherListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() teacherLists: TeacherModel[] = [];
  @Output() editTeacherEvent = new EventEmitter<string>();
  @Output() deleteTeacherEvent = new EventEmitter<string>();

  getGenderColor(gender: string): string {
    return gender === 'Female' ? 'red' : 'blue';
  }

  deleteTeacher(id: string) {
    this.deleteTeacherEvent.emit(id)
  }

  editTeacher(id: string) {
    this.editTeacherEvent.emit(id);
  }

}
