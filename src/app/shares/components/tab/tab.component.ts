import {Component, Input} from '@angular/core';

@Component({
    standalone: true,
    selector: 'app-tab',
    templateUrl: './tab.component.html',
    styleUrls: ['./tab.component.css']
})
export class TabComponent {
    @Input() id: string = '';
    @Input() tabTitle: string = '';
    @Input() active: boolean = false;
}
