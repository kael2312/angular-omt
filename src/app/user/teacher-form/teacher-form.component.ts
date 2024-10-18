import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-teacher-form',
  templateUrl: './teacher-form.component.html',
  styleUrls: ['./teacher-form.component.css']
})
export class TeacherFormComponent implements OnInit {

  constructor() { }
  selectedSkills: boolean[] = [];
  listSkills: string[] = ['Nghiệp vụ toán', 'Nghiệp vụ tiếng viêt', 'Nghiệp vụ lịch sử']
  @Output() valueTeacher = new EventEmitter<string>();
  @Input() skillInputTeacher: string = '';
  ngOnInit(): void {
  }
  skill: string = '';
  onSkillChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    const index =  parseInt(input.value);
    this.skill = this.listSkills
      .filter((_, index) => this.selectedSkills[index])
      .join(', ');
    this.valueTeacher.emit(this.skill);

  }
}
