import {Injectable} from "@angular/core";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserDataService{
  userData: any[] = [
    {
      name: 'john doe',
      email: 'aaaa',
    },
    {
      name: 'jane doe',
      email: 'bbbb',
    },
    {
      name: 'aaa',
      email: 'cccc',
    },
    {
      name: 'aab',
      email: 'dddd',
    },
  ];

  // fake function return Promise user data
  getPromiseUserData(searchedName: string): Promise<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(
          this.userData.filter((user: any) => user.name.includes(searchedName))
        )}, 2000);}
    )
  }

  // fake function return Observable user data
  getObservableUserData(searchedName: string): Observable<any> {
    return new Observable((observer) => {
      setTimeout(() => {
        observer.next(
          this.userData.filter((user: any) => user.name.includes(searchedName))
        );
        observer.complete();
      }, 2000);
    });
  }
}
