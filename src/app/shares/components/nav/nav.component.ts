import {AfterContentInit, Component, ContentChildren, QueryList} from '@angular/core';
import {NgForOf} from "@angular/common";
import {TabComponent} from "../tab/tab.component";

@Component({
    standalone: true,
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    imports: [
        NgForOf
    ],
    styleUrls: ['./nav.component.css']
})
export class NavComponent implements AfterContentInit {
    @ContentChildren(TabComponent) tabs!: QueryList<TabComponent>;

    ngAfterContentInit(): void {
        // Đặt tab đầu tiên là active nếu không có tab nào được đánh dấu active
        if (this.tabs.find(tab => tab.active) === undefined) {
            this.selectTab(this.tabs.first);
        }
    }

    public selectTab(selectedTab: TabComponent): void {
        this.tabs.forEach(tab => tab.active = (tab === selectedTab));
    }
}
