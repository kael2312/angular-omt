import { Component } from '@angular/core';

@Component({
  selector: 'app-tab-container',
  template: `
    <app-tab>
      <ng-template appTab tabTitle="Học Sinh" let-tab>
        <app-student-form></app-student-form>
      </ng-template>
      <ng-template appTab tabTitle="Giáo Viên" let-tab>
        <app-teacher-form></app-teacher-form>
      </ng-template>
    </app-tab>
  `,
  styleUrls: ['./tab-container.component.css']
})
export class TabContainerComponent {}
