import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseUrl = 'http://localhost:8080/user'; //in the backend

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  
  constructor(private http: HttpClient) { }

  addUser(username, nickname) {
    const obj = {
      username,
      nickname
    };
    console.log(obj);
    this.http.post(`${baseUrl}`, obj)
        .subscribe(res => console.log('Done'));
  }

  getUsers() {
    //users;
    //const obj = {[id,username,nickname]};
    /*console.log('getting all users');
    this.http.get(`$this.uri`)
      .subscribe((use)) => {
        console.log(data);
        this users = data[];
      });*/
  }

  getAll() {
    return this.http.get(baseUrl);
  }

  get(id) {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data) {
    return this.http.post(baseUrl, data);
  }

  update(id, data) {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id) {
    return this.http.delete(`${baseUrl}/${id}`);
  }

}
