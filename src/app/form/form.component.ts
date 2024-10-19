import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './form.interface';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  check: boolean = true;

  indexUpdate: number = 0;

  constructor(private http: HttpClient) {}
  jsonData: any;
  ngOnInit(): void {
    this.http.get('assets/countries.json').subscribe(
      (data) => (this.jsonData = data),
      (error) => console.error('Error fetching JSON:', error)
    );
  }

  public skills: string[] = ['php', 'html', 'css'];

  selectedSkills: string[] = [];

  public user: User = {
    name: '',
    gender: '',
    email: '',
    phone: 0,
    country: '',
    address: '',
    skill: '',
    description: '',
  };

  public users: User[] = [];

  submit() {
    this.users.push(this.user);

    this.user = {
      name: '',
      gender: '',
      email: '',
      phone: 0,
      country: '',
      address: '',
      skill: '',
      description: '',
    };
  }

  update(index: number) {
    this.user = this.users[index];
    this.check = false;
    this.indexUpdate = index;
  }

  updateForm() {
    this.users[this.indexUpdate] = this.user;
  }

  delete(index:number){
    this.users.splice(index,1)
  }
}
