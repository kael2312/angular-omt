import { Component, ContentChildren, QueryList, AfterContentInit } from '@angular/core';
import { TabDirective } from './tab.directive';

@Component({
  selector: 'app-tab',
  template: `
    <div>
      <ul class="nav nav-tabs">
        <li class="nav-item" *ngFor="let tab of tabs">
          <a class="nav-link" [class.active]="tab.active" (click)="selectTab(tab)">
            {{ tab.tabTitle }} <!-- Sử dụng tabTitle -->
          </a>
        </li>
      </ul>
      <div class="tab-content">
        <ng-container *ngFor="let tab of tabs">
          <ng-container *ngIf="tab.active">
            <ng-template [ngTemplateOutlet]="tab.template"></ng-template>
          </ng-container>
        </ng-container>
      </div>
    </div>
  `,
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements AfterContentInit {
  @ContentChildren(TabDirective) tabs!: QueryList<TabDirective>;

  ngAfterContentInit(): void {
    const activeTabs = this.tabs.filter(tab => tab.active);
    if (activeTabs.length === 0) {
      this.selectTab(this.tabs.first);
    }
  }

  selectTab(tab: TabDirective): void {
    this.tabs.toArray().forEach(t => (t.active = false));
    tab.active = true;
  }
}
