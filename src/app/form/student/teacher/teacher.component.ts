import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserModel } from "../../../models/user.model";
import { Country } from "../../../models/country.model";
import {TeacherModel} from "../../../models/teacher.model";
import * as uuid from 'uuid';
import * as jsonCountries from "../../../../assets/countries.json";

@Component({
  selector: 'app-teacher-form',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {

  @Output() teacherAdded = new EventEmitter<TeacherModel>();
  @Output() teacherEdited = new EventEmitter<TeacherModel>();

  countries: Country[] = (jsonCountries as any).default as Country[];
  teacherList: TeacherModel[] = [];
  listLever: string[] = ['Cao Đẳng', 'Đại Học', 'Cao Học'];
  listStatus: string[] = ['Độc thân', 'Đã kết hôn'];

  teacher: TeacherModel = {
    id: '',
    name: '',
    email: '',
    gender: '',
    phone: '',
    country: '',
    address: '',
    skill: '',
    description: '',
    lever: '',
    status: '',
  };
  listSkills: string[] = ['Nghiệp vụ Toán', 'Nghiệp vụ Văn', 'Nghiệp vụ Anh'];
  selectedSkills: boolean[] = [];
  editingUUID: string | null = null;

  validationErrors: any = {};

  constructor() {}

  ngOnInit(): void {}

  onSubmit(): void {
    this.validationErrors = {};

    // Validation logic
    if (!this.teacher.name || this.teacher.name.length < 3 || this.teacher.name.length > 18) {
      this.validationErrors.name = 'Tên phải có 3 đến 18 ký tự';
    }

    if (!this.teacher.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.teacher.email)) {
      this.validationErrors.email = 'Email phải có định dạng xxx@xxx.com';
    }

    if (!this.teacher.gender) {
      this.validationErrors.gender = 'Vui lòng chọn giới tính';
    }

    if (!this.teacher.lever) {
      this.validationErrors.lever = 'Vui lòng chọn trình độ học vấn';
    }

    if (!this.teacher.status) {
      this.validationErrors.status = 'Vui lòng chọn tình trạng hôn nhân';
    }

    if (!this.teacher.country) {
      this.validationErrors.country = 'Vui lòng chọn country';
    }

    if (!this.teacher.address) {
      this.validationErrors.address = 'Vui lòng nhập address';
    }

    if (!this.teacher.description ) {
      this.validationErrors.description = 'Vui lòng nhập mô tả';
    }

    if (!this.teacher.skill) {
      this.validationErrors.skill = 'Vui lòng chọn kỹ năng';
    }

    if (!this.teacher.phone || !/^0\d{9}$/.test(this.teacher.phone)) {
      this.validationErrors.phone = 'Số điện thoại phải có 10 ký tự và bắt đầu bằng số 0';
    }

    if (Object.keys(this.validationErrors).length === 0) {
      if (this.editingUUID !== null) {
        const index = this.teacherList.findIndex(teacher => teacher.id === this.editingUUID);
        if (index !== -1) {
          this.teacherList[index] = { ...this.teacher, id: this.editingUUID };
          this.teacherEdited.emit(this.teacherList[index]);
        }
        this.editingUUID = null;
      } else {
        const newTeacher = { ...this.teacher, id: uuid.v4() };
        this.teacherList.push(newTeacher);
        this.teacherAdded.emit(newTeacher);
      }
      this.resetForm();
    }
  }

  editTeacher(uuid: string): void {
    const teacher = this.teacherList.find(teacher => teacher.id === uuid);
    if (teacher) {
      this.teacher = { ...teacher };
      this.editingUUID = uuid;
      this.selectedSkills = this.listSkills.map(skill => this.teacher.skill.includes(skill));
    }
  }

  deleteTeacher(uuid: string): void {
    this.teacherList = this.teacherList.filter(teacher => teacher.id !== uuid);
  }

  resetForm(): void {
    this.teacher = {
      id: '',
      name: '',
      email: '',
      gender: '',
      phone: '',
      country: '',
      address: '',
      skill: '',
      description: '',
      lever: '',
      status: '',
    };
    this.selectedSkills = [];
  }

  onSkillChange(index: number): void {
    this.teacher.skill = this.listSkills
      .filter((_, i) => this.selectedSkills[i])
      .join(', ');
  }
}
