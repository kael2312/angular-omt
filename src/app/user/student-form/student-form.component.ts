import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnChanges {


  constructor() { }
  selectedSkills: boolean[] = [];
  listSkills: string[] = ['Đá bóng', 'Múa', 'Hát']
  @Output() valueStudent = new EventEmitter<string>();

  @Input() skillInputStudent: string = '';
  skill: string = '';


  ngOnChanges(changes: SimpleChanges) {
    console.log(changes['skillInputStudent'])
    if (changes['skillInputStudent']) {
      this.skill = changes['skillInputStudent'].currentValue;

    }
  }
  onSkillChange(index: number): void {
    this.skill = this.listSkills
      .filter((_, index) => this.selectedSkills[index])
      .join(', ');
    this.valueStudent.emit(this.skill);
  }
}
