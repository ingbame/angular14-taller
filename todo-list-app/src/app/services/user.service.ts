import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../models/user';

import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {
    // const myObservable  = of (1, 2, 3);
    // const myObserver = {
    //   next: (x: any) => console.log('Observe next value: ' + x),
    //   error: (err: any) => console.log('Error: ' + err),
    //   complete: ()=> console.log('complete')
    // };
    // myObservable.subscribe(myObserver);

    //https://gestion-minera-api.azurewebsites.net/api/user/find


  }
  find(): Observable<any> {
    // let users: User[] = [];
    // users.push({ id: 1, name: 'Alfredo' });
    // users.push({ id: 2, name: 'Carlos' });
    // return users;
    let url = environment.api + '/user/find?pageSize=5';
    return this.http.get(url, {});
  }
}
