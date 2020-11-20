import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  uri = 'http://localhost:8080/user'; //in the backend

  constructor(private http: HttpClient) { }

  addProduct(UserName, UserNick) {
    const obj = {
      UserName,
      UserNick
    };
    console.log(obj);
    this.http.post(`${this.uri}`, obj)
        .subscribe(res => console.log('Done'));
  }
}
