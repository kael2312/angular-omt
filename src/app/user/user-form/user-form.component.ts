import {Component, OnInit} from '@angular/core';
import {UserDataService} from "../services/user-data.service";
import {FormControl} from "@angular/forms";
import {debounceTime, Subject, switchMap} from "rxjs";

@Component({
    selector: 'app-user-form',
    templateUrl: './user-form.component.html',
    styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
    userList: any[] = [];
    searchUser =  new FormControl('');
    inputSubject = new Subject<string>();

    constructor(
      private userDataService: UserDataService
    ) {
      //this.onSearch = this.debounce(this.onSearch.bind(this), 500);
    }

    ngOnInit(): void {
      // this.searchUser.valueChanges
      //   .pipe(
      //     debounceTime(500),
      //     switchMap((value) => {
      //       return this.userDataService.getPromiseUserData(value ?? "");
      //     })
      //   )
      //   .subscribe({
      //   next: (value) => {
      //     this.userList = value;
      //   },
      // });
      // this.inputSubject.subscribe((value: string) => {
      //   console.log(value);
      // })
    }

    onSearch($event: Event) {
      const input = $event.target as HTMLInputElement;
      const value = input.value;
      //this.inputSubject.next(value);
      this.userDataService.getPromiseUserData(value).then(data => this.userList = data);
    }

    debounce(func: (...args: any[]) => void, wait: number) {
      let timeout: ReturnType<typeof setTimeout>;
      return function executedFunction(...args: any[]) {
        const later = () => {
          clearTimeout(timeout);
          func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
      };
    }
}
