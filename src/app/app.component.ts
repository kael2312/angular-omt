import {Component} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    loading: boolean = false;  // Biến để theo dõi trạng thái loading

    startLoading() {
        this.loading = true;  // Bắt đầu loading khi người dùng nhấn nút

        // Giả lập việc tải dữ liệu trong 3 giây
        setTimeout(() => {
            this.loading = false;  // Kết thúc loading sau khi dữ liệu tải xong
        }, 3000);
    }
    constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    }
}
