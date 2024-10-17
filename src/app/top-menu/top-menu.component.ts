import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css']
})
export class TopMenuComponent implements OnInit {
  logo: string = "https://cdnfiles.kidsonline.edu.vn/public/img/admin/logo2.png";
  constructor() { }

  ngOnInit(): void {
  }

}
