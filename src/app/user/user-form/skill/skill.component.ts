import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UserModel} from "../../../models/user.model";

@Component({
    selector: 'app-skill',
    templateUrl: './skill.component.html',
    styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {
    @Input() user!: UserModel;
    @Output() submitSkills = new EventEmitter<string[]>(); // Khai báo output event
    constructor() {
    }

    ngOnInit(): void {
    }

    listSkills = [
        {id: 1, name: 'JavaScript'},
        {id: 2, name: 'Angular'},
        {id: 3, name: 'TypeScript'},
        {id: 4, name: 'Node.js'},
    ];
    selectedSkills: number[] = []; // Mảng chứa các id của các skill được chọn
    errorMessage: string | null = null;  // Thông báo lỗi

    onSkillChange(event: Event) {
        const checkbox = event.target as HTMLInputElement;
        const skillId = +checkbox.value; // Chuyển đổi value sang số

        if (checkbox.checked) {
            this.selectedSkills.push(skillId);
        } else {
            this.selectedSkills = this.selectedSkills.filter(id => id !== skillId);
        }

        this.errorMessage = null;
    }

    submit() {
        if (!this.isAnySkillSelected()) {
            this.errorMessage = "Bạn phải chọn ít nhất một skill!";
            return;
        }
        // Gửi danh sách ID skill đã chọn về component cha
        const selected = this.selectedSkills.map(id => id.toString());
        this.submitSkills.emit(selected);

        // Reset trạng thái sau khi submit
        this.selectedSkills = [];
        this.errorMessage = null;
    }

    isAnySkillSelected(): boolean {
        return this.selectedSkills.length > 0;
    }
}
